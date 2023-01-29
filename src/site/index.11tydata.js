
require("dotenv").config();
const settings = require("../helpers/constants");

const markdownIt = require("markdown-it");
const { getBacklinks, getOutboundLinks } = require("../helpers/linkUtils");
const { QuadTree, Rectangle, Point } = require('../helpers/quadtree')
const { CSSGrid } = require('../helpers/cssgrid')
const md = markdownIt({
    html: true,
}).use(require("../helpers/utils").namedHeadingsFilter);

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
    eleventyComputed: {
        backlinks: (data) => getBacklinks(data),
        outbound: (data) => getOutboundLinks(data, true),
        settings: (data) => {
            const currentnote = data.collections.gardenEntry && data.collections.gardenEntry[0];
            if (currentnote && currentnote.data) {
                const noteSettings = {};
                allSettings.forEach(setting => {
                    let noteSetting = currentnote.data[setting];
                    let globalSetting = process.env[setting];

                    let settingValue = (noteSetting || (globalSetting === 'true' && noteSetting !== false));
                    noteSettings[setting] = settingValue;
                });
                return noteSettings;

            }
            return {};
        },
        tags: (data) => {
            const currentnote = data.collections.gardenEntry && data.collections.gardenEntry[0];
            if (currentnote && currentnote.data) {
                return currentnote.data.tags;
            }
            return [];
        },
        content: (data) => {
            const filetree = data.filetree

            const getCSSGridStyle = () => {
                let qtree = new QuadTree(new Rectangle(200, 200, 200, 200), 2)
                for (let i = 0; i < 18; i++) {
                    let p = new Point(Math.random() * 200 * 2, Math.random() * 200 * 2)
                    qtree.insert(p)
                }
    
                let grid = new CSSGrid(qtree, 200 * 2, 200 * 2)
                let gridAreaString = grid.getGridAreaString()
                let result = {
                    display: 'grid',
                    gridTemplateAreas: gridAreaString,
                    zIndex: -1,
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }
                return {
                    'gridAreaString': gridAreaString,
                    'gridIds': grid.gridIDs,
                }
            }
    
            const style = getCSSGridStyle()
            const gridAreaString = style.gridAreaString
            let gridIds = style.gridIds
            gridIds.sort((a, b) => 0.5 - Math.random())

            
            let notes = [
                {
                    'permalink': '/',
                    'name': 'opheliagame',
                }
            ]
            

            const collectNotes = (tree) => {
                Object.keys(tree).forEach(key => {
                    if (tree[key].path) {
                        const isNote = tree[key].isNote
                        
                        if (isNote) {
                            notes.push(tree[key])
                            
                        }
                    } else {
                        collectNotes(tree[key]);
                    }
                });
            }
            collectNotes(filetree)

            if(notes.length < gridIds.length) {
                gridIds = gridIds.slice(0, notes.length)
            }
            else {
                notes = notes.slice(0, gridIds.length)
            }

            notes.sort((a, b) => 0.5 - Math.random());
            gridIds.forEach((id, index) => notes[index].gridArea = id)
    
           
            const notesHtml = notes
            .map(note => `<a class="block-link ${note.permalink == '/' ? "home" : ""}" style="grid-area: ${note.gridArea}; padding: ${Math.floor(Math.random()*30)}px" href=${note.permalink}><div><span>${note.name}</span></div></a>`)
            .join('')

            let divHtml = `<div class="index-grid" style="grid-template-areas: ${gridAreaString}">${notesHtml}</div>`
            return divHtml            
        },
    }
}