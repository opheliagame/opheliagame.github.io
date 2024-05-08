---
title: 'experiments with text'
org: 'dra.ft'
excerpt: ''
date: '2024-02-12'
year: 2021
---

Besides many other things, [dra.ft](https://dra-ft.site/) is a collaborative space and community of artists, designers, technologists who explore and experiment with text and electronic literature. 

In 2021, during the pandemic and the lockdowns, I became part of it for the [freefall future.text](https://docs.google.com/spreadsheets/d/1Uvt-RmdSVGIWz9FnhRDMFBSkPYpxP5oofYclxsoRs_k/edit?pli=1#gid=1118811960) exhibition. This was the time when I had just started to think of myself as an artist and someone creative. For better or for worse, I don't think I paid much attention to the fact that this was a real exhibition. I thought of myself more as a developer and someone who was there to help other artists with their projects. I did not think that I would have any of my own ideas, and whatever ideas I had seemed like toy ideas to me. 

I don't remember a lot of the conversations that we had on Gathertown (because I do have quite a shitty memory) but what I do remember is people having faith in me and making me feel at ease and like I belong. I am forever grateful for that. 

# d3(x)radia(x)rekhta 
<!-- *you can tell that the project name is thought out haha* -->

*[project link](https://d3-x-radia-x-rekhta.onrender.com/)*

> This project is an experiment with ways of arranging and reading text. Does text always have to flow in horizontal lines which are wrapped below each other? We tried to explore different ways of connecting words to each other, in order to look for non linear ways of reading and interpreting.
> - from the exhibition website

One of the beginnings of the thought process, was a sketch I made right after #genuary2021 when I had started exploring [d3](https://d3js.org/). During this time, my practice included sketching on p5js regularly. And so I would think about an idea for a sketch during the day, when taking breaks from work, during lunch and afterwards. In the evenings, I would sit down for a few hours to sketch in code. 

I remember how this one came about. I was typing something in a search box and looked at the suggestions that were coming below. This was definitely not the first time that I was seeing this pattern, but suddenly it made sense to put this inside a graph in d3. 

![screenshot of google](/assets/projects/freefall/screenshot.png)

The relationships between the words and the sentences fitted well into the structure of a connected graph. By giving each word a weight based on how well connected it is, I could make a force directed graph that could then sit on a screen like a woobly toy responding to mouse interactions. During one of the conversations with Ambika, Agat and Nanditi, we realized that this was something we wanted to explore further for dra.ft. And so Agat and I started working on it together. 

<video src='/assets/projects/freefall/d3-chai.mp4' controls></video>

## Pad.ma

Now that we had a structure, the next step was to figure out what we would put inside it. Ambika had previously worked with [pad.ma](https://pad.ma/) , contributing to making transcripts for some of the archival materials; and when I first saw it, I was immediately in love. I could not fathom how something like it could exist; I don't think I still do. Everytime I interacted with it, while just browsing, or later when trying to use their APIs, it made me think of how software can be beautiful, and wonder how it can exist outside capitalist boundaries of profit making. 

![screenshot of pad.ma website](/assets/projects/freefall/padma-screenshot.jpg)

We found [The Radia Tapes](https://pad.ma/grid/created/radia_tapes) through pad.ma, and thought it was quite interesting and funny at times, and we loved listening to it during the calls. The transcript is available as a [pdf](https://studio.camp/radiaSRT/print/out.pdf) online, maintained by the folks at [studio camp.](https://studio.camp/) 

## Rekhta 

After getting some results with pad.ma, the next challenge was to explore using the same process and technologies with a non-Latin source, and sharing a love for Urdu poetry we decided upon [Rekhta,](https://rekhta.org) a much loved corner of the internet for Hindi and Urdu readers. It was interesting to note here that by using some translation for filtering, we could use the same process. 

![Process diagram for the three different sources](/assets/projects/freefall/d3-x-radia-x-rekhta.drawio.png)


Here are some poems / images that came out.

![poem 1](/assets/projects/freefall/poem1.png)

![poem 2](/assets/projects/freefall/poem2.png)

![poem 3](/assets/projects/freefall/poem3.png)

![poem 4](/assets/projects/freefall/poem.png)

---
# supercut(x)pad.ma
<!-- *there is a pattern to my sad naming scheme here* -->

*[project link](https://github.com/dra-ft/supercut-x-padma)*

![cut 1](/assets/projects/freefall/cut1.png)

I really like Pad.ma's interface and the affordances it offers to be able to find and view the archives in multiple different ways. The size of the search bar in the top right is also interesting. Unlike Google search which lets you look at multiple lines of a query at the same time, it is tinier and you can only see a few words of your query at a time. Naturally, I had been using it with search terms not bigger than two or three words. And it would give me a collection of clips with different people talking about the same / similar things.

> This project is an attempt at constructing stories. Inspired by the idea that a singular object or idea can invoke wildly different feelings and thoughts for different people. Would it be interesting to define something by the stories that people tell about it, by the context it lives in, by the company it keeps.
> - from the exhibition website

Through the text labs and conversations, I got introduced to the idea of a supercut, [ffmpeg](https://ffmpeg.org/) and a project by Sam Lavigne called [Videogrep.](https://lav.io/projects/videogrep/) And since I was now getting more familiar with the API, I started thinking of stitching together the original video footage by using the transcripts. 

I ended up making a command line program that creates a supercut from a query string and Pad.ma's archival material, even though it isn't the most interactive and accessible[^1]. 

Here are some cuts I made right after.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/1wb4IkFdbUk?si=nKNLgPjMfsu6_N3X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br></br>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/px4tnAfKfa4?si=2sDBKz71ID5cOwT_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


This was a partial end of the explorations we did, and it was super fun! 

Love and hugs for Ambika, Nanditi and Agat. 

Thank you for calling me to draft at dra.ft <3 

### References 
- [First open lab day | early experiments, Youtube Stream](https://www.youtube.com/watch?v=_Z0LT3EozQ4)
- [d3(x)radia(x)rekhta | source code](https://github.com/dra-ft/d3-radia-rekhta/) 
- [supercut(x)padma | source code](https://github.com/dra-ft/supercut-x-padma)


 [^1]: I am currently working on transforming the command line tool into a website. 
