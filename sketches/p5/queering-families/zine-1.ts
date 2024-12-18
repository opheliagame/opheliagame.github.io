import { Sketch } from "@p5-wrapper/react";
import { Grid } from "./common/grid";
import { spaceOut } from "./common/func";
import { fonts, palette } from "./common/design";

let dataArray = [
  {
    slug: "guddi-and aasu",
    title: "Guddi and Aasu",
    content:
      "'I am 19 and my friend Aasu is 21. She lives in the next house. We have known each other for five years. We would be living together openly today, had my mother not interfered. First of all, she forcibly got me married off. It has been one year since the marriage. But I only stayed in my in-laws' house for three months....They constantly say, go back, go back. I have replied, I will go back on condition that Aasu comes with me. I will live with her only.'\n",
  },
  {
    slug: "i-will do my best",
    title: "I will do my best",
    content:
      "I founded the general incorporated association of fictosexuality. This is an organization whose main purpose is to promote understanding of fictosexuality, which is a sexual orientation that is attracted to fictional characters such as manga, anime, and games. I will do my best.\n\n",
  },
  {
    slug: "jezebels",
    title: "Jezebels",
    content:
      "Polyandrous marriage was deemed 'very revolting'—women were told that they ought to be virtuous, which meant deference to one husband, one master. They had to cultivate modesty, and toplessness was not a step in that direction. The sexual gaze of the patriarchal Victorian was turned towards the breast in Kerala, till then not a cause of concern. When men and women entered temples, they both took off their top cloth. Today only the men are obliged to do this. As late as the 1920s, when Namboothiri brahmin women for the first time acquired the blouse to cover themselves, purists excommunicated them for breaching custom—modesty and true moral superiority lay, they argued, in not covering up. As Aubrey Menen remarked of his grandmother's attitude to his Irish mother, it was thought that 'married women who wore blouses were Jezebels' and 'a wife who dressed herself could only be aiming at adultery'. To cover breasts because younger men demanded it was abhorrent to elders. But these elders were a minority in the face of young 'progressive' men bent on making their women 'virtuous'.\n",
  },
  {
    slug: "one-hundred parents",
    title: "One hundred parents",
    content:
      'Danish feminist named Bodil Graae wrote a groundbreaking article called "Children Should Have One Hundred Parents," where she argued that communal living would lead to a safer, more supportive, and happier environment for children. Graae\'s essay explicitly challenged the nuclear family and single-family dwellings, advocating for a profound transformation of the prevailing concept of "home." The following year, when Gudmand-Høyer published an article defending the communitarian goals of collective living in a Danish newspaper, over a hundred families wrote in to express their interest in living in such a development.\n',
  },
  {
    slug: "p-words",
    title: "P-words",
    content:
      "Patriarchy is partially rooted in the cultural and legal traditions of patrilineality (paternal descent) and patrilocality (where wives leave their natal kin to join a husband’s family). These twin forces still operate in the daily lives of billions of people and maintain a distinct lingering influence even in contemporary cultures that see themselves as more “enlightened” with regards to the traditional family. We can’t #SmashThePatriarchy without dealing first with these two less familiar P-words.\n\n\n",
  },
  {
    slug: "pinterest-mother",
    title: "Pinterest mother",
    content:
      "This is what I always imagined being a parent would be like. My parents died when I was ten and I don't have any sinblings so babyhood was an unpleasant series of surprises. I'm how tired? He's getting sick how often? I feel this lonely? Halloween, Christmas and birthdays are safe spaces in which my dreams of being a perfect, Pinterest mother can be briefly indulged. \n",
  },
  {
    slug: "qurratulain_hyder,-rehana companion",
    title: "Qurratulain_Hyder, rehana companion",
    content: "",
  },
  {
    slug: "shalini",
    title: "Shalini",
    content:
      "Shalini had been listening carefully. She said, 'I remember a case from my childhood. My village is near Moradabad. In our locality there were two girls who loved each other but both were forcibly married off by their [[The right to familial love and care\\|families]]. Neither girl could adjust to her inlaws. There was continual tension and fighting. Ten days at the inlaws and then a month at their mothers' houses. The in-laws as well as the girls' families were really fed up. In the midst of all this one of the girls had a child. Eventually the family got tired of the struggle to dominate her, and left her alone. After returning home in this way the girls started living together. They lived at one edge of the village. One of them used to wear men's clothes. She drove a taanga. Without caring about people's opinions she used to steer the horse through the bazaar, to the railway station, everywhere. The other girl stayed at home. They stayed together all their lives. I don't know if they are alive today. They had great will to fight their families and [[choice\\|society]] in such a forceful manner. If [[Guddi and Aasu\\|Guddi and Aasu]] show similar courage, let me know whenever they are in need, they have my support.'\n",
  },
  {
    slug: "social-palace",
    title: "Social Palace",
    content:
      "At its height, about two thousand workers and their families chose to live together at Guise, including Godin and his wife and children. He shared in daily life and managed to run a profitable enterprise, reinvesting those profits to ensure that the Social Palace's residents had access to services and opportunities rare for other members of the working classes in France at the time: theatre performances, lectures, education for their children, and leisure associations.\n",
  },
  {
    slug: "the-right to familial love and care",
    title: "The right to familial love and care",
    content:
      "Conforming in our thought to some universal belief that family units of one man and one woman are the nucleus of 'normal' human care and love, we rarely interrogate them, rarely contest the artfully contrived institutions dependent on heterosexual paradigms and women's subservience within these parameters. Rekha had transgressed the boundaries of the 'normal', hence she had forfeited her right to familial love and care.",
  },
  {
    slug: "untitled",
    title: "Untitled",
    content: "",
  },
  {
    slug: "adore",
    title: "adore",
    content:
      "I'm generally suspicious when people are said to 'adore' other people, especially when they've been given no choice over who those people are, but Justine did always seem to have taken to Tony right from the start and to have trusted him; and Tony, I believe, could not have loved Justine more had she been his own daughter. Most people are incapable of that disinterested kind of love, but Tony had no biological children and no blood relatives, and can love who he likes.\n",
  },
  {
    slug: "alone",
    title: "alone",
    content:
      "She had spent her whole adulthood with the queers, ingesting their radical relationships and polyamory and gender roles, but somehow, she still never displaced from the pinnacle of womanhood those nice white Wisconsin moms who had populated her childhood. She never lost that [[code to their love\\|secret]] fervor to grow up into one of them. In motherhood she could imagine herself apart from her loneliness and neediness, because as a mother, she believed, you were never truly alone.\n\n",
  },
  {
    slug: "among-heirs",
    title: "among heirs",
    content:
      'In Canada as a whole, where white settlers once imposed patrilineal naming conventions on matrilineal Indigenous peoples to help "regulate the division of property among heirs in a way that conformed with European, not Indigenous, property laws," the 2008 to 2015 Truth and Reconciliation Commission allowed for the free restoration of Indigenous names, including mononyms (the ability not to have a surname at all).\n',
  },
  {
    slug: "apes",
    title: "apes",
    content:
      "I just remember this one night, after I lost the baby, all the men, once the show started, sort of unfurled themselves around their wives, and each wife settled into her respective husband’s arms contentedly. These bonded animal pairs. And suddenly they all looked like apes grooming each other. I was revolted. And [[laundry\\|Danny]], you could see that he was leaning back on the sectional, opening his long arms so that I would place myself in them like all the other good wives.\n\n",
  },
  {
    slug: "as-many moms",
    title: "as many moms",
    content:
      "My mom, well, after we talked about everything, she was like, *‘The one thing I learned raising you—through successes and failures —is that the best way to be a mother is to do so with as many other moms around as possible.'*\n\n",
  },
  {
    slug: "baby-bust",
    title: "baby bust",
    content:
      "\nIf young people could be empowered to demand what they need to form the kind of families they want, it would shift the understanding of what constitutes family structure and alleviate individual childcare burdens. The ongoing 'baby bust' is already a collective indictment of the current system; the issue then becomes how to articulate individual choices into collective demands.\n",
  },
  {
    slug: "being-alive",
    title: "being alive",
    content:
      "Someone to hold you too close  \nSomeone to hurt you too deep  \nSomeone to sit in your chair  \nAnd ruin your sleep  \nAnd make you aware  \nOf being alive  \n  \nSomeone to need you too much  \nSomeone to know you too well  \nSomeone to pull you up short  \nAnd put you through hell  \nAnd give you support  \nFor being alive  \nBeing alive  \nMake me alive  \n  \nMake me confused  \nMock me with praise  \nLet me be used  \nVary my days  \nBut alone is alone, not alive  \n  \nSomebody hold me too close  \nSomebody force me to care  \nSomebody make me come through  \nI'll always be there  \nAs frightened as you  \nOf being alive  \nBeing alive, being alive  \n\nSomeone you have to let in  \nSomeone whose feelings you spare  \nSomeone who, like it or not  \nWill want you to share  \nA little, a lot  \nOf being alive  \nMake me alive  \n  \nMake me confused  \nMock me with praise  \nLet me be used  \nVary my days  \nBut alone is alone, not alive  \n  \nSomebody crowd me with love  \nSomebody force me to care  \nSomebody make me come through  \nI'll always be there  \nFrightened as you  \nTo help us survive  \nBeing alive, being alive  \nBeing alive  \nBeing alive\n\n",
  },
  {
    slug: "bowls-in the sink",
    title: "bowls in the sink",
    content:
      'Before, I craved the slivers of time in which the house would be blessedly quiet. Now, the emptiness of the house feels almost violent. No teenage feet thumping up the stairs. No clattering of bowls in the sink and yells of "Mum" and a request to find [[laundry\\|something]], be somewhere, do something.\n',
  },
  {
    slug: "call-your brother",
    title: "call your brother",
    content:
      "Myself and my partner have been living together for 29 years now. 29 bloody years! \n\nBut we are not able to marry in this country. We were part of the petition for same sex marriage rights but that was rejected by the Supreme Court. \n\nOur petition was simple. So we have been living together for 29 years. If he is admitted to a hospital, I should be able to take medical emergency decisions for him. I should be able to sign for him, right? That's simple. Anybody who has been living together... But they rejected it. \nSo now they.. I was on a TV show and they said, \"You call your brother. To sign for you.\" That's not.. why should I call my brother when my partner is right with me for 29 years. That's a basic right anybody should have. \n\nSo.. but I am still hopeful. I am 61 now, but I am still hopeful that one day we will win the case. \n\nSridhar Rangayan, Why you should embrace all of your identities, TedXJGU\n",
  },
  {
    slug: "chastity",
    title: "chastity",
    content:
      'And unlike the poverty and chastity demanded of monastics, Fourier imagined collective abundance, free love, and communally raised children, although he allowed for private property and some social stratification. Residents who had joined the community with preexisting wealth enjoyed more luxurious rooms, but they took their common meals in a dining hall with anyone in the community who had a taste for more exclusive foods and wines. Fourier believed that some level of inequality was unavoidable, and as long as all residents lived in conditions of relative adundance, differences in dispositions (or what Fourier called "passions") would not fuel envy or discord.\n',
  },
  {
    slug: "child-free",
    title: "child-free",
    content:
      "But I didn't throw the water over Susan because of grief. No. I did it because I'm childless and Susan knows that it's the one weakness I can't bear to have poked and she just rammed the knife in. I know we're meant to use the term \"child-free\" now but, let's face it, that's bullshit. Most of us are childless and not by choice. Daniel and I started trying for a baby as soon as we were married. By the time he died, we had been married for five years. I have been pregnant eight times and miscarried every single time. \n",
  },
  {
    slug: "choice",
    title: "choice",
    content:
      "'Would your parents, brothers and sisters accept your living with a woman into the house?' \n'To conform to society, they will raise objections. But internally they will accept my choice.'",
  },
  {
    slug: "co-living",
    title: "co-living",
    content:
      "Co-living spaces allow young singles to thrive in cities in their twenties and thirties, but the ideal remains a coupled-up existence in a single-family residence. The turnover of tenants also prevents the formation of the close community bonds promised on aspirational websites. Rather than working together to share chores and maintain their collective spaces, co-living residents benefit from the labor of others hired to work for the community. And since most residents are young and single, co-living is not set up to meet the specific needs of parents.\n",
  },
  {
    slug: "co-parenting",
    title: "co-parenting",
    content:
      "\"I'm too worried to agree to have a baby with someone I don't know well. 'Co-parenting.' What if they leave and never actually wanted me to be involved?\" He pauses and looks at me carefully. I know what he's thinking—could we do this together? One man, one woman, making a baby and [[parenthood\\|co-parenting as friends]]? He won't ask because he's too polite, and I can't offer. I only want a baby on my own. I can't bear to see a man who isn't Anthony parent my child. I can't.\n",
  },
  {
    slug: "code-to their love",
    title: "code to their love",
    content:
      "Reese had caught Amy so young in her womanhood, in early pliancy, and motherhood had always been a code to their love. Not just two women in love, but mother and daughter.\n\n",
  },
  {
    slug: "cohousing",
    title: "cohousing",
    content:
      'The recent upsurge in interest in co-living builds upon a much longer tradition of cohousing often associated with early developments in Denmark in the 1960s. These communal housing projects (bofællesskab), which sparked an international movement against the single-family home, have been called a "Danish blueprint for utopian existence." Unlike co-living, cohousing tends to be intergenerational and attempts to find an ideal balance between privacy and community. Cohousing also allows for private or collective homeownership, as opposed to the rental options primarily available through [[co-living\\|co-living]], making cohousing a more permanent arrangement. \n',
  },
  {
    slug: "cold",
    title: "cold",
    content:
      "And this, Reese reflects, is the other reason to be a mother—in whatever fashion motherhood comes your way—so when you’re old and alone and feeling sorry for yourself, your daughter will roll her eyes at your theatrics and bring you in from the cold.\n\n",
  },
  {
    slug: "common-life",
    title: "common life",
    content:
      'Unlike the eremitic monastics who rarely came together to worship, the believers of the "cenobitis" tradition ("cenibite" being derived, via Latin, from the Greek words for "common" and "life"), lived together and held all of their property in common, uner the rule of an abbot or abbess who directed their spiritual lives.\n',
  },
  {
    slug: "concept",
    title: "concept",
    content: '"Family is a human concept."\n',
  },
  {
    slug: "crawl",
    title: "crawl",
    content:
      "I could never reconcile myself to the fact that just as you've recovered from your own childhood, and finally crawled out of the pit of it and felt the sun on your face for the first time, you have to give up that place in the sun to a baby you're determined won't suffer the way you did, and crawl back down into another pit of self-sacrifice to make sure she doesn't.\n",
  },
  {
    slug: "crush",
    title: "crush",
    content:
      "Is there such a thing as a mom-crush? Certainly there is a friendcrush, and of course, a typical crush-crush, but Reese would call what she feels for Katrina a mom-crush. Every morning for more than a week now, she has woken up thinking about being a co-mom with Katrina, picturing her future self five years hence, in hopeful domestic scenes. For instance, this very day, on the way to Katrina’s, she imagined Katrina and herself in the grocery store, deciding whether or not it is okay to make Kraft mac and cheese for their child.\n\n",
  },
  {
    slug: "enormous",
    title: "enormous",
    content:
      "The receptionist put him on hold to make an appointment and as Vivaldi played, Ames pondered whether he ought to cancel his subscription to HBO in order to afford this sperm bank. He couldn’t fully comprehend the enormous weight of fatherhood and generational lineage, but he could easily comprehend how much he did not want to cancel HBO.\n\n",
  },
  {
    slug: "entwined",
    title: "entwined",
    content:
      "When I'm doing the washing-up or sitting on the sofa, I'll drift for a few moments into an alternative world. What would it be like without Sean? How would I cope? Who would I be? We're so entwined the answers quickly come into focus. It would be awful. I wouldn't cope. I have no idea who I would be. We've been together since we were thirteen. We're childhood sweethearts. I went straight from living with my parents to living with him when I was seventeen. I don't know any other life. Sean and Helen. Helen and Sean. \n",
  },
  {
    slug: "entwining",
    title: "entwining",
    content:
      "That this was the first time in her life that she was experiencing the mind-scrambling effects of good sex— the kind of sex where you travel across the country for just a couple hours together, after which you talk about buying property, or moving in together, or just generally entwining lives in a way logistically unjustified by a short period of intimacy.\n\n",
  },
  {
    slug: "equal",
    title: "equal",
    content:
      "Reese holds her breath, waiting to see if she will get away with that “*we*,” the “*we*” that couples use when they both own and take responsibility for a pregnancy. We’re having a baby, say both men and women, often together, as if their roles were interchangeable and required equal commitment. Reese recognizes her own “*we*” is a little creepy, but fuck if it doesn’t feel good to say.\n\n",
  },
  {
    slug: "fictional",
    title: "fictional",
    content:
      "On the other hand, in today’s East Asia where anime and manga are mainstreamized, with the proliferation of various mediation and fictional artifacts in our social life, it is not rare to have emotions for fictional characters. According to demographic surveys, more than 10% of the Japanese young population have ever felt love for fictional characters.\n",
  },
  {
    slug: "financial-bonuses",
    title: "financial bonuses",
    content:
      '"How are they encouraging adults to have children?" Peter asks. "Oh, the usual. Eighteen months of maternity leave on full pay, eighty percent funded by government. Free full-time childcare after that. And financial bonuses that amount to about ten grand."\n',
  },
  {
    slug: "fish-in the sea",
    title: "fish in the sea",
    content:
      "The great question of our time: How to find love when there are literally no men left? The phrases single women always used to hear like 'there's plenty of fish in the sea' and 'as soon as you stop [[apes\\|looking]] for love, it'll find you' do not apply anymore. The sea is empty. It became the thing to talk about, when you weren't talking about who else had died: How am I going to meet someone? Even in the apocalypse, human beings have the same needs. We all want to feel loved, to be desired, to feel like we're not alone in this insane, terrifying world.\n",
  },
  {
    slug: "follow",
    title: "follow",
    content:
      "Whether it is in academia, in the military, or within the corporate world, women are more likely to follow their partners to a new city or country.\n",
  },
  {
    slug: "hope",
    title: "hope",
    content:
      "And the hardest thing about infertility that no one ever tells you about is the hope. It's not the going wrong that's the most painful part. It's the betrayal of hope that this time you had the audacity to think it would be different. It's the searing pain of hope as you try again and fail again, and try again and fail again, each time knowing you'll fail and yet [[parenthood\\|hoping]] you won't.\n",
  },
  {
    slug: "hospital-food",
    title: "hospital food",
    content:
      "Every few days they go to their father's and then the house is empty. At first these interludes were difficult to bear. Now they had a kind of neutrality about them, something firm but blank, something faintly accusatory despite the blankness. It is as though these solitary hours, in which for the first time in many years nothing is expected or required of me, are my spoils of war, are what I have received in exchange for all this conflict. I live them one after another. I swallow them down like hospital food. In this way I am kept alive. \n",
  },
  {
    slug: "illegal,-felonious",
    title: "illegal, felonious",
    content:
      "My husband used the anti-sodomy laws in North Carolina in 1975 to take my children away, arguing that as a lesbian, I was engaging in illegal, felonious behavior. My “unorthodox” belief in the equality of women within heterosexual marriage—seen as an attack on the “role of the father in the family”—was the final proof I was an “unfit mother.”\n",
  },
  {
    slug: "illusions",
    title: "illusions",
    content:
      "*I mean, they go through everything I go through as a trans woman. Divorce is a transition story. Of course, not all divorced women go through it. I’m talking about the ones who felt their divorce as a fall, or as a total reframing of their lives. The ones who have seen how the narratives given to them since girlhood have failed them, and who know there is nothing to replace it all. But who still have to move forward without investing in new illusions or turning bitter—all with no plan to guide them. That’s as close to a trans woman as you can get. Divorced women are the only people who know anything like what I know. And, since I don’t really have trans elders, divorced women are the only ones I think have anything to teach me, or who I care to teach in return.*\n\n",
  },
  {
    slug: "in-a galaxy far, far away",
    title: "in a galaxy far, far away",
    content:
      'We need new ideas, new dreams, and the courage to imagine alternative futures. Now if the moment to "think different." If we can imagine them first in a galaxy far, far away, it\'s only a matter of time before we boldly go and begin figuring out how to translate these inspired visions into our own everyday utopias.\n',
  },
  {
    slug: "in-between-season-coats",
    title: "in-between-season coats",
    content:
      "A lot of people Dorothy knew said that they didn't want to have children because they couldn't count on the world existing for them. But Dorothy thought that the world simply was whatever children were born into. At least, that was the kind of thing she thought in theory. When she imagined the children of the future, the metaphorical children, they were floating on rafts roped together with the fall coats everyone had thrown away because there was no more fall, just as there was no more spring, although come brutal winter they would need to suture all the in-between-season coats together for warmth.\n",
  },
  {
    slug: "intermediary",
    title: "intermediary",
    content:
      "Berliners often join together in Baugruppen (buildings groups) to pool their money and build their own multistory, multi-family urban dwellings without using a developer as an intermediary. \n",
  },
  {
    slug: "lack-of control",
    title: "lack of control",
    content:
      'In some ways I envy the women who were in my position before the torturous miracle of fertility treatment. Lots of women had one child, or no children, and that was that. There would be tears and prayers, maybe some self-pitying wondering "Why me?" But there would be no choice in the matter. It would be out of my hands. I dream of such a lack of control.\n',
  },
  {
    slug: "laundry",
    title: "laundry",
    content:
      "*I was relieved because of something I didn’t want to admit: I didn’t want to be with Danny anymore and if we had a kid together I would have to be. Danny was a good boyfriend to have when I was younger, when we were in college. Like, in the same way that a Saint Bernard would be a good dog to have if you were lost in the mountains. A big amiable body that a girl could shelter behind. Danny was an idea I inherited, maybe from growing up in Vermont, of what a man was supposed to be. We looked good together; like, early on I knew any photo for our wedding announcement was going to look like it came from a magazine. So when he proposed, I accepted, even though we had been dating two years, and I don’t think that sex ever lasted longer than fifteen minutes, including foreplay, and despite the fact that by the three-month point in our relationship, I had somehow already ended up doing his laundry.*\n\n",
  },
  {
    slug: "lick",
    title: "lick",
    content:
      "The ready availability of clerics in most port towns willing to find a way to marry two drunken fools at midnight speaks to the ready supply of lovelorn sailors eager to whet their urges while staying narrowly within the boundaries of religion. By the time we stumbled through a few taverns in search of such a person, everything was beginning to take on a blurred happy color, like fragments of stained glass. I remember signing something, saying something, Raksh and I grinning at each other like idiots. He was so very eager; giddy and extremely, almost offensively erotic. I might have signed my name to anything at that point, so focused I was on my desire to lick him. \n",
  },
  {
    slug: "life-stages",
    title: "life stages",
    content:
      "Most of the people she knew with kids didn’t conceive for the kid, they conceived for themselves, to accord with some notion of family, or purpose, or life stages that the child would bring them. Insert whatever worn-down cliché about life not having meaning until one becomes a parent. But whatever, she could get over that. No kid turns out as the parents had hoped. She sure hadn’t.\n\n",
  },
  {
    slug: "love,-despair and the ungratefulness of children",
    title: "love, despair and the ungratefulness of children",
    content:
      "Sometimes you want to talk  \nabout love and despair  \nand the ungratefulness of children  \nA man is no use whatever then.  \nYou want then your mother  \nor your sister  \nor the girl with whom you went through the school,  \nand your first love, and her –  \nfirst child – a girl –  \nand your second.  \nYou sit with them and talk.  \nShe sews and you sit and sip  \nand speak of the rate of rice  \nand the price of tea  \nand the scarcity of cheese.  \nYou know both that you’ve spoken  \nof love, despair and ungratefulness of children.\n\n— ‘The Female of the Species’, Gauri Deshpande\n\n",
  },
  {
    slug: "meant-to be",
    title: "meant to be",
    content:
      "But if we weren’t meant to be lovers, it doesn’t mean that we weren’t meant to be family.\n\n",
  },
  {
    slug: "moderate",
    title: "moderate",
    content:
      "There was a utopic aspect to the way that Katrina talked about coparenting, the way that recently out queers proclaimed their romantic loves and predilections with the most fervor, still innocent of the thorns inherent to queer life. In her more paranoid, cruel moments, Reese braced herself for Katrina’s coming abandonment, the way that a queer girl tries to moderate her desire for the heterosexual college girl who has been excitedly returning her kisses in the wake of an asshole boyfriend leaving her.\n\n",
  },
  {
    slug: "monasticism",
    title: "monasticism",
    content:
      "Initially, Buddhist monks and nuns practiced an eremitic (or solitary) form of monasticism, but after the death of Gautama Buddha, they settled together, first for the rainy season and later in more permanent collectives, making Buddhist monasticism one of the earliest known forms of intentional communal living practiced by a group of spiritual seekers. Living together initially allowed them to pool resources, but later helped reinforce their mutual dedication to following the Middle Way, the teachings of the Buddha. \n",
  },
  {
    slug: "nanny",
    title: "nanny",
    content:
      "It was obvious immediately that I hadn't been hired to be a nanny; I had been hired to be a [[alone\\|mother]]. Mrs Tai pays the children hardly any attention. She says good morning and good night to them and that's it. I'm there for kissing bruised arms better and pinning their paintings onto the nursery wall and saying, \"Yes we can watch Moana again but only if we watch Lilo & Stitch tomorrow and no we can't have Frozen until next week, I don't want to let it go again, that ice lady needs a time-out!\" I hear their laughs and their cries and their mumbles in their sleep and I know what temperature Rupert likes the milk he still has at night that I really need to wean him off of, but it's a good source of calcium and I'll let him have it for a few more weeks.\n",
  },
  {
    slug: "natural",
    title: "natural",
    content:
      'The traditions that many of us think of as "natural" have been shaped by millennia of patrilocal and patrilineal practices which reinforce the power of a small group of (usually male) authority figures over the rest of society.\n',
  },
  {
    slug: "one-person",
    title: "one person",
    content:
      "But I knew from a very young age that I was not meant to love one person. But there's no fantasy for me that is like, oh, you know, that one person. That's like fear factor for me. *Shahana laughs* Ek jane ke saath saari zindagi? No chance. \n\nThere's nothing wrong with marriage as an idea of two people deciding to work together. *interviewer starts laughing with Shahana* If you're getting married also, it's like, do saal karte hein. Phir dekhte hein. Phir hum renew karenge contract. Aise hona chahiye na? Thoda aap dekho ki chal raha he ki nahi? You have a review session amongst yourselves. Is this working? Where do we need fine tuning? As opposed to this idea ki ab dhas gaye hum ismein. Ab to ho gayi. You know like bojh he. Ab ye bojh dhote rahenge, kabhi idhar phekenge, kabhi udhar phekenge, kabhi usko leke khel lenge phir chod deng. Matlab kya he ye? What is this obligation you know? And that obligation becoming like a burden. I don't know. \n\nI'm committed to everybody simultaneously. My commitment is very deep. It's just, I don't like boundaries. \n\n",
  },
  {
    slug: "out-loud",
    title: "out loud",
    content:
      "Here, we hardly call our children’s names out loud.\nWe’ve lost them once, or fear we may. We’re careful\nwhat we say. In the clanging silence, pain falls\non our hearts, year in and out, like water cutting\na groove in stone, seeking a channel, a way out,\npain running like water through the glittering room.\n",
  },
  {
    slug: "parenthood",
    title: "parenthood",
    content:
      "Looking at a shot of her wearing bunny ears from an Easter morning in their apartment, he tried to predict her scoffing reply were he to tell her that he was a father. In that exercise, he was surprised to brush, for the first time in hours, against a feeling like hope. It had only ever been through her, with her, that he could imagine parenthood. Why not again? Reese—the trans woman from whom he’d learned about womanhood —would see his fatherhood and dismiss it. To her, he would always be a woman. By borrowing her vantage, he could almost see himself as a parent: Perhaps one way to [[cold\\|tolerate]] being a father would be to have her constant presence assuring him that he was actually not one. This possibility dovetailed with what he wanted anyway: to be family with Reese once more, in some way. So why not in [[alone\\|parenthood]]? Was it such a wild proposal to contemplate? Were Reese to help raise the child too, everyone would get what they wanted. Katrina would have a commitment to family from her lover, Reese would get a baby, and he, well, he’d get to live up to what they both hoped he could be by being what he already was: a woman but not, a father but not.\n\n",
  },
  {
    slug: "personal-development",
    title: "personal development",
    content:
      "I read an article in a Norwegian newspaper that said that children have personal development classes at school to encourage them to 'prioritize romantic commitment and parenthood.' They've been showing them old Disney movies. Some of the parents are outraged.\n",
  },
  {
    slug: "phalanx",
    title: "phalanx",
    content:
      "The phalanstery was a massive complex designed for 1,620 men, women, and children together in a self-sustaining community where people theoretically only labored at tasks they they enjoyed based on their particular passions. (Children supposedly did all of the dirty work because they could make a fun game out of anything.) Fourier believed that individual homes created unnecessary barriers between neighbors, exacerbating alienation and loneliness—emotions that made people selfish for the attention of others and stood in the way of social harmony.\n",
  },
  {
    slug: "practical-lifebelt",
    title: "practical lifebelt",
    content:
      "One 2016 report found that rather than being the continuation of the anti-establishment experiments of the 1960s and '70s, cohousing in Denmark had become \"a sort of practical 'lifebelt' for the modern human and an attempt to recreate the meaningful social relations that are no longer automatically provided by the nuclear family....\"\n",
  },
  {
    slug: "private-economic unit",
    title: "private economic unit",
    content:
      "Social dreamers have long understood that building a more harmonious society depends on undermining the structures that persist in viewing the family as a private economic unit where men provide resources for their own wives and children to the exclusion of others.\n",
  },
  {
    slug: "progeny",
    title: "progeny",
    content:
      "In a region where tawaifs were an accepted presence in the everyday life of upper-caste men, their children bore no stigma of illegitimacy. Times might have changed, and tawaifs rendered extinct, but their progeny living in Bhabua and around continue to enjoy a relative measure of social acceptability. In the continuation of past practice, though not given legal recognition or share in the ancestral property of their mothers upper-caste lovers, several tawaif offspring like Reyaz enjoy relatively secure connections with their fathers. This is more usual in the case of long-term relationships between tawaifs and their lovers. Children from such unions continue to be assured of quasi-formal but unquestioned recognition of their father's name. In several cases, the fathers also provide their offspring from tawaifs with some measure of financial security.\n\n\n",
  },
  {
    slug: "purchased-members",
    title: "purchased members",
    content:
      "The concept of 'family' was also being narrowed to a patriarchal one, in which legitimate members shared ties of blood and women were subservient to the will of the male head of the household. The boundaries of this idealized domestic sphere were jealously guarded by the law. Domestic arrangements like those of the tawaifs, on the other hand, where blood relations and purchased members often lived together in close ties of kinship, were increasingly denied the privilege of being recognized as a family.\n",
  },
  {
    slug: "reimagining",
    title: "reimagining",
    content:
      'In addition to the growing acceptance of queer relationships, polyamory, and passionate friendships, some youth are reimagining housing, education, and kinship relations in ways that loosen the grip that patriarchy holds on our social relations. Even without radical politics, coliving buildings, coworking spaces, and the rise of remote work fuel trends that undermine the old ways of marking the transition to adulthood and redefine the traditional roles of the "head of household" or the "boss". Some gravitate toward planned communal living while others avoid marriage and single-family home ownership altogether, both trends which have the effect of lessening the burdens of care work that women often bear in the private sphere. \n',
  },
  {
    slug: "relieved",
    title: "relieved",
    content:
      "I dropped them off at nursery every morning and some days I would be so relieved to have peace I would beam as I walked down the street. I'm off to work! I'd be so thrilled to be absolving myself of the responsibility of looking after tiny humans. I left them to look after other people, to care for other parents' [[Pinterest mother\\|sick]] children.\n",
  },
  {
    slug: "roof",
    title: "roof",
    content:
      "You spoke of a couple who had never lived together. She was a French writer whose work you loved. He was also a writer and a philosopher. They had never lived under the same roof. But they were friends and had remained so. Throughout their lives, they had pooled in their income. They did an impressive amount of writing, teaching and fighting for the causes they valued. They had given themselves the right to create a new kind of relationship. \n",
  },
  {
    slug: "rules",
    title: "rules",
    content:
      "*Like, you realize when you get married how much the institution changes things. I remember that in the first few months I was married, how often, if I was out by myself, people would be like, ‘Where’s Max?’ and I would want to be like, ‘Max and I have a marriage where we don’t have to account for each other.’ And maybe I even said that a few times, but eventually, it was just easier to be like, ‘He knows I’m out.’ Everyone says that you can make marriage what you want, but sometimes the institution of marriage really wins out. It’d be freeing to just make up your own rules.*\n\n",
  },
  {
    slug: "safety-nets",
    title: "safety nets",
    content:
      'For women, who generally earn less than men and who societies expect to provide more unpaid care work, it makes rational sense in economies with few social safety nets to embrace what social scientists call "hypergamy," or the desire to marry up and find a partner who can and will support them.\n',
  },
  {
    slug: "smugness",
    title: "smugness",
    content:
      "Most intriguingly, the parents never told Ambrose and Justine that this kind of family unit wasn’t how most or even any other families had arranged themselves. So until the siblings went to school, they understood their family as the norm and, by that point, had so incorporated the idea of four parents into their concept of family that they seemed to feel an assured smugness at their abundance of parents compared with their schoolmates’ paltry one or two.\n\n",
  },
  {
    slug: "support-networks",
    title: "support networks",
    content:
      "How will I do everything I did before, alone? Looking after a newborn, working full-time, raising a child, being the only breadwinner, being the [[as many moms\\|only parent]]. It sends a cold dread into the pit of my stomach. I think, with longing, of the Dutch Matron system that is working so well in the Netherlands. There was a documentary about it on the BBC. They interviewed the Dutch prime minister. Single women with children, if they wanted, were placed in zones, grouping the women together to create formal support networks. Each ward is made up of between four and six families. The women take turns staying home to take care of the children; a few months of the year at home, the rest of the year working full-time. \n",
  },
  {
    slug: "sweet-home",
    title: "sweet home",
    content:
      "In the middle of forest, we renovated an old house by our hand.  \nSweet Home.  \nIt is what I wished for longtime. The renovation was hard enough to bring us down with raising child at the same time. But I felt sometime something is pushing my back to forward. I can’t describe how happy to experience this with my husband and son. Our son will remember this someday and notice what I’ve felt in this room.  \nWe never be re-new ourselves but we can re-novate in this life.  \n  \n“There are places I remember  \nAll my life though some have changed  \nSome forever not for better  \nSome have gone and some remain”  \n  \n#family #raindrops #daylight #dads #husbands #家族 #sonyalpha #renovation #house #fatherhood #rebirth #renovation\n\n",
  },
  {
    slug: "swimsuit",
    title: "swimsuit",
    content:
      "I've had trial runs at living alone, but this is real. I still feel the need to be called when I've woken up, still feel the need to ask someone to get me a cup of tea. There's no phone at home. That means I have to plan my trips to the grocer so that I make all my calls and buy whatever I need and then come back upstairs. I don't have my bike which means I can't just up and go wherever I want. I've had to learn the bus routes, study the timetables. I have to heat the milk myself. And then, how long can you survive on Maggi noodles and eggs, even in various forms? Today, I cooked some potatoes. You get packets of rotis at the grocer. Sometimes I still feel, when I am returning from the office in the evening, that there should be someone to open the door, to ask me whether I want a hot cuppa. Most other times, it's a blessing. I only sweep and swab on Sunday. Otherwise, I just throw mats about. You know it's true: vegetables are expensive. But a large cabbage can last me for three days. The fridge is old: after every two days, it has to be allowed to take a breather. I turn it off and then empty the tray which has filled up with water. Yesterday, two cleaning women turned up to enquire if I needed any help. I can't take any more people than is strictly necessary so I turned them away. Anyway, I don't generate enough work to keep a servant occupied. I've told the paper boy to bring me the newspaper. He's in the fifth or sixth standard and quite bright. I'm going to buy him some storybooks to read. I have also discovered that washing a vessel in which milk has been heated is the most trying job in the world. When I bring the trash to the door, the woman who comes to clear it tries to peek past me into the house. I have no idea what she wants. 'Twenty-four hours is not enough time,' my mother would say. I have now begun to understand what she meant. But there's one thing I have which no one else does. In the evening, when I have the time, I take a plastic bag with a towel in it, and quietly descend the stairs. I loop around the housing society's lawn and reach the back. There's a swimming pool, full of clean water, glittering in the light of the setting sun. It's beautiful and, in the cool of the evening, few people bother to come. In my swimsuit, I stand on the side and raise my arms and then leap into that deep-blue water.\n",
  },
  {
    slug: "table",
    title: "table",
    content:
      '*"When you are in your thirties"*, Angela told her, not unkindly, *“you’ll want one too. You’ll want a table that will last your whole life.”* The table fixed itself with totemic power into Reese’s brain. The butcher-block craftsmanship became for Reese an absurd-but-serious mental marker of a female bourgeois heterosexual temporality forever beyond her envious grasp: When a woman reaches a certain point in her thirties, she looks around and finds a good dining set with which to settle down. \n\n',
  },
  {
    slug: "taboo",
    title: "taboo",
    content:
      "Of course, her first trans daughter—Ames—had also been her lesbian lover. Amy. A daughter whom Reese had raised to love Reese well as a wife, with all the strange dynamics in power that entails, the dynamics that are so confusingly sexy and painful and satisfying and awkward that the rest of [[choice\\|society]] has an incest taboo to avoid them.\n\n",
  },
  {
    slug: "team",
    title: "team",
    content:
      "The second, with Jim, the love of Harriet's life, lasted nine years. 'It was a husband and wife team sort of thing. I looked after him and he looked after me.' Jim took the penetrative role in sex, 'He was that straight that he just didn't like a cock near his bum.' Jim worked in the building trade, they lived together, they baby-sat Jim's nieces and nephews, and some of Jim's family accepted the relationship quite well. \n\nStill, Harriet was no conventional wife. And as Dowsett shrewdly asks, what are we to make of Jim?\n\n> It sounds like an ordinary suburban life, except that his partner is a drag queen with breast implants and a penchant for insertive anal intercourse with casual partners on the odd occasion!... Whatever Jim was or is, he certainly cannot be called 'gay,' and when Harriet says: 'He [Jim] was that straight!' he means a sexually conventional male, not a heterosexually identified one. \n\n",
  },
  {
    slug: "technically",
    title: "technically",
    content:
      "Technically I'm just a nanny. Technically these aren't my children, but what makes a mother? The woman who grows them or the woman who raises them? These are my babies. My life is [[alone\\|spent]] looking after them.\n",
  },
  {
    slug: "together-forever",
    title: "together forever",
    content:
      "In the last couple of years, I have begun to feel the need of a permanent relationship, something I can grow into. The thought had crept up on me that I might have such a relationship with you. When I looked at my parents and thought about this 'together forever' thing, it never struck me as anything exciting. Yesterday, I was a little envious of what [[two men\\|Samuel and Ashish]] had. \n",
  },
  {
    slug: "toys",
    title: "toys",
    content:
      "*I’m saying if we want to break an old pattern, we need to envision a new pattern in its place. If we want to break the pattern of typical two-parent, even queer two-parent nuclear families, we have to think through the logistics of the replacement. I’m not one of those people who thinks all problems get solved by some human-centered design. We’re proposing a family, not a tech start-up…but it’s also true that part of being queer can be a design problem. I mean, Jesus, just look at our sex toys.*\n\n",
  },
  {
    slug: "two-men",
    title: "two men",
    content:
      "What do two men who decide to live together do? Men like you and me? Those who don't want children? Those who don't have the old to look after or the young to raise? No one would visit us because we'd be living together as social outcasts. For most of the day, we would do what we liked. \n",
  },
  {
    slug: "two-single beds",
    title: "two single beds",
    content:
      "Even if we're not going to have children, even if we don't have to worry about guests, even if we're going to end up sleeping on two single beds, separated by a table on which there's a copper vessel containing water, I want us to be together.\n",
  },
  {
    slug: "validation",
    title: "validation",
    content:
      "*I want that same validation that other moms have. That feeling of womanhood placed in a family. That validation is fine for cis women, but it gets treated as perverted for me. Like, the only reason ‘a man in a dress’ would want to be near kids is not a good one.*\n\n",
  },
  {
    slug: "vows",
    title: "vows",
    content:
      "Nuns enjoyed fewer freedoms than monks, particularly their ability to leave their cloisters. But beginning in 1190 CE, some women found a way to live communally with other women without taking vows. They became the first Beguines) (sometimes referred to as Beguine nuns), a special lay order of women who lived together in urban areas in what is now modern-day Belgium, the Netherlands, and northern Germany. In contrast to cloistered nuns who took religious vows and lived apart from the world, lay nuns lived their faith within their communities. \n",
  },
  {
    slug: "walking",
    title: "walking",
    content:
      "Patrilocality is only one way of organizing domestic relations and human societies once displayed a diversity of traditions. But after centuries of Western colonialism that dispersed patriarchal family forms across the globe, fewer than thirty human societies remain matrilocal today. One community of Tibetan Buddhists called the Mosuo provides a fascinating example of a matrilocal society where neither spouse is expected to relocate. Among the Mosuo, grandmothers preside over large multigenerational families. Women own and inherit property through the maternal line and live with their mother’s extended family. Men live in their maternal grandmother’s household and practice a form of “walking marriage,” whereby they visit their partner only at night. Both men and women can have as many companions as they desire, without stigma, and women often do not know who has fathered their children. The concept of “father” barely exists, and men have few paternal responsibilities. Being a good uncle is far more important, as men help raise the children of their sisters. Since there is no formal marriage, the only reason men and women form pairs is because they are attracted to each other or enjoy each other’s company. When the attraction fades, romantic ties can be dissolved without negative financial consequences or social impacts on the children. How very radical the Mosuo family structure seems to many of us today highlights just how deeply ingrained our own patrilocal and patrilineal traditions remain.\n",
  },
  {
    slug: "weakness",
    title: "weakness",
    content:
      "At least we are a family of women. I think this every day and it makes everything seem better. My father left when I was small. Our greatest weakness has become a strength. Now, I think, what's the worst that can happen? They will not die. I will not die. We will be okay. \n",
  },
  {
    slug: "wonder",
    title: "wonder",
    content:
      "Pyaari, who had loved many men with pragmatic, professional detachment, listened to her friend with growing wonder. Zehra's love for Ausaf was painful, punishing, all-consuming, but also a love that had hit the hard rock of sexual incompatibility. After the initial years of marriage, Ausaf had stopped approaching Zehra as a woman. He loved her as his best friend, his companion for life, but his romance,  Zehra said, was reserved for his poetry. She claimed he no longer felt sexual desire for any mortal woman. \n\n",
  },
  {
    slug: "yearn",
    title: "yearn",
    content:
      "Teema built with Daya Singh a home both had long yearned for. If Teema was fleeing the poverty, violence and greed of grasping relatives, Daya Singh was escaping the claustrophobic cacophony of a joint family, the cheerless silences of an incompatible marriage, the demanding duties of an elder son, brother, husband and father. Together, they found friendship, love, sex and joy in their new house.\n\n",
  },
  {
    slug: "young",
    title: "young",
    content:
      "Sharayu Maushi looked just the same. Perhaps it's because she never had kids, never had to raise them. That seems to keep a woman young.\n",
  },
];

let dpi = 300;
// A3 dimensions
let inchesWidth = 16.5;
let inchesHeight = 11.7;
let width = dpi * inchesWidth;
let height = dpi * inchesHeight;
let fbo;

let pageWidth, pageHeight;

const sketch: Sketch = (p5) => {
  // returns distorted vertices based on subrows X subcols grid
  function getDistortedVertices(
    distortion,
    distortWidth,
    distortHeight,
    subdivisionRows,
    subdivisionCols,
    t = 0
  ) {
    let distortedVertices: any[] = [];
    // Precompute the distorted vertex positions
    for (let y = 0; y <= subdivisionRows; y++) {
      distortedVertices[y] = [];
      for (let x = 0; x <= subdivisionCols; x++) {
        // Calculate the base position of the vertex
        let xPos = p5.map(
          x,
          0,
          subdivisionCols,
          -distortWidth / 2,
          distortWidth / 2
        );
        let yPos = p5.map(
          y,
          0,
          subdivisionRows,
          -distortHeight / 2,
          distortHeight / 2
        );

        // // Apply consistent noise-based distortion
        // let dx = noise(x * 0.1, y * 0.1) * distortion;
        // let dy = noise(x * 0.1 + 100, y * 0.1) * distortion;
        // Apply modified noise-based distortion
        let dx = ((p5.noise(x * 0.1, y * 0.1, t) - 0.5) * distortion) / 2; // Centered and scaled noise for x distortion
        let dy = ((p5.noise(x * 0.1 + 100, y * 0.1, t) - 0.5) * distortion) / 2; // Centered and scaled noise for y distortion

        // Store the distorted vertex position
        distortedVertices[y][x] = p5.createVector(xPos + dx, yPos + dy);
      }
    }

    return distortedVertices;
  }

  function wrapTexture(
    img,
    distortedVertices,
    subdivisionRows,
    subdivisionCols,
    g
  ) {
    // Apply texture
    g.textureMode(p5.NORMAL);
    g.texture(img);

    // Begin drawing the shape with a series of quads
    g.beginShape(p5.TRIANGLES);

    for (let y = 0; y < subdivisionRows; y++) {
      for (let x = 0; x < subdivisionCols; x++) {
        // Get the distorted vertex positions from the array
        let v0 = distortedVertices[y][x]; // Top-left corner
        let v1 = distortedVertices[y][x + 1]; // Top-right corner
        let v2 = distortedVertices[y + 1][x + 1]; // Bottom-right corner
        let v3 = distortedVertices[y + 1][x]; // Bottom-left corner

        // // Assign UV coordinates to the vertices
        // let u0 = x / cols, v0_uv = y / rows;        // Top-left UV
        // let u1 = (x + 1) / cols, v1_uv = y / rows;  // Top-right UV
        // let u2 = (x + 1) / cols, v2_uv = (y + 1) / rows; // Bottom-right UV
        // let u3 = x / cols, v3_uv = (y + 1) / rows;  // Bottom-left UV

        // Assign UV coordinates to the vertices, ensuring full texture mapping
        let u0 = p5.map(x, 0, subdivisionCols, 0, 1),
          v0_uv = p5.map(y, 0, subdivisionRows, 0, 1); // Top-left UV
        let u1 = p5.map(x + 1, 0, subdivisionCols, 0, 1),
          v1_uv = p5.map(y, 0, subdivisionRows, 0, 1); // Top-right UV
        let u2 = p5.map(x + 1, 0, subdivisionCols, 0, 1),
          v2_uv = p5.map(y + 1, 0, subdivisionRows, 0, 1); // Bottom-right UV
        let u3 = p5.map(x, 0, subdivisionCols, 0, 1),
          v3_uv = p5.map(y + 1, 0, subdivisionRows, 0, 1); // Bottom-left UV

        // Draw the first triangle (v0, v1, v2)
        g.vertex(v0.x, v0.y, 0, u0, v0_uv); // Top-left corner
        g.vertex(v1.x, v1.y, 0, u1, v1_uv); // Top-right corner
        g.vertex(v2.x, v2.y, 0, u2, v2_uv); // Bottom-right corner

        // Draw the second triangle (v0, v2, v3)
        g.vertex(v0.x, v0.y, 0, u0, v0_uv); // Top-left corner
        g.vertex(v2.x, v2.y, 0, u2, v2_uv); // Bottom-right corner
        g.vertex(v3.x, v3.y, 0, u3, v3_uv); // Bottom-left corner
      }
    }

    g.endShape();
  }

  p5.setup = () => {
    p5.createCanvas(400, 400);
    // p5.translate(-width / 2, -height / 2);

    fbo = p5.createGraphics(width, height, p5.WEBGL);
    fbo.background(p5.random(palette));
    console.log(`book dimensions: ${width} x ${height}`);
    p5.textFont('Mansalva')

    drawBook(fbo);
  };

  p5.draw = () => {
    p5.background(p5.random(palette));

    p5.textFont('Mansalva')
    p5.fill("black");
    p5.textSize(16);

    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text("Click here to download your zine as a png file", p5.width / 2, p5.height / 2);

    p5.noLoop();
  };

  p5.mousePressed = () => {
    if (p5.mouseIsPressed) {
      p5.save(fbo, "zine.png");
    }
  };

  function drawBook(g) {
    g.noStroke();
    g.pixelDensity(1);

    let xres = 4;
    let yres = 2;

    pageWidth = width / xres;
    pageHeight = height / yres;

    g.translate(-width / 2, -height / 2);

    // drawing the front page
    g.push();
    g.translate((3.5 / xres) * width, (1.5 / yres) * height);
    g.rectMode(g.CENTER);
    g.imageMode(g.CENTER);
    drawFrontPage(g);
    g.pop();

    // drawing page 1
    g.push();
    g.translate((3.5 / xres) * width, (0.5 / yres) * height);
    g.rotate(Math.PI);
    g.rectMode(g.CENTER);
    g.imageMode(g.CENTER);
    drawInnerPage(g, 1);
    g.pop();

    // drawing page 2
    g.push();
    g.translate((2.5 / xres) * width, (0.5 / yres) * height);
    g.rotate(Math.PI);
    g.rectMode(g.CENTER);
    g.imageMode(g.CENTER);
    drawInnerPage(g, 2);
    g.pop();

    // drawing page 3
    g.push();
    g.translate((1.5 / xres) * width, (0.5 / yres) * height);
    g.rotate(Math.PI);
    g.rectMode(g.CENTER);
    g.imageMode(g.CENTER);
    drawInnerPage(g, 3);
    g.pop();

    // drawing page 4
    g.push();
    g.translate((0.5 / xres) * width, (0.5 / yres) * height);
    g.rotate(Math.PI);
    g.rectMode(g.CENTER);
    g.imageMode(g.CENTER);
    drawInnerPage(g, 4);
    g.pop();

    // drawing page 5
    g.push();
    g.translate((0.5 / xres) * width, (1.5 / yres) * height);
    g.rectMode(g.CENTER);
    g.imageMode(g.CENTER);
    drawInnerPage(g, 5);
    g.pop();

    // drawing page 6
    g.push();
    g.translate((1.5 / xres) * width, (1.5 / yres) * height);
    g.rectMode(g.CENTER);
    g.imageMode(g.CENTER);
    drawInnerPage(g, 6);
    g.pop();

    // drawing the back page
    g.push();
    g.translate((2.5 / xres) * width, (1.5 / yres) * height);
    g.rectMode(g.CENTER);
    g.imageMode(g.CENTER);
    drawBackPage(g);
    g.pop();
  }

  function drawFrontPage(g1) {
    // rect(0, 0, pageWidth, pageHeight);
    // text("front page", 0, 0);

    let text1 = "queeringfamilies".repeat(20).split("").join(" ");
    // PARAMETERS
    let subdivision = 4;
    let distortion;
    let subdivisionCols = Math.pow(2, subdivision);
    let subdivisionRows = Math.pow(2, subdivision);
    let distortWidth, distortHeight;

    let width = pageWidth;
    let height = pageHeight;

    let g = p5.createGraphics(width, height, p5.WEBGL);
    g.noStroke();
    g.pixelDensity(1);
    g.background("white");

    // DISPLAYING TEXT
    let textCanvas = p5.createGraphics(width * 2, height * 2);
    textCanvas.noStroke();
    textCanvas.pixelDensity(1);
    spaceOut(text1, textCanvas, false, 200, 150);

    // push()
    // translate(width/2, height/2)
    // scale(0.6)
    // imageMode(CENTER)
    // image(textCanvas, 0, 0)
    // pop()

    distortion = p5.random(250, 350);
    distortWidth = width * 0.9;
    distortHeight = height * 0.9;
    let dverts1 = getDistortedVertices(
      distortion,
      distortWidth,
      distortHeight,
      subdivisionRows,
      subdivisionCols
    );
    wrapTexture(textCanvas, dverts1, subdivisionRows, subdivisionCols, g);
    g1.image(g, 0, 0);
  }

  function drawInnerPage(g1, pageNumber) {
    // rect(0, 0, pageWidth, pageHeight);
    // text(pageNumber, 0, 0);

    // PARAMETERS
    let subdivision = 4;
    let distortion;

    let subdivisionCols = Math.pow(2, subdivision);
    let subdivisionRows = Math.pow(2, subdivision);
    let distortWidth, distortHeight;

    let bgTex;
    let width = pageWidth;
    let height = pageHeight;

    let g = p5.createGraphics(width, height, p5.WEBGL); // Set up WebGL context
    g.noStroke(); // Disable stroke for cleaner results
    g.pixelDensity(1);
    g.background("black");

    bgTex = p5.createGraphics(width, height);
    let bgGrid = new Grid(width, height, 12, 12);
    bgGrid.draw(bgTex);

    distortion = 1000;
    distortWidth = width * 1.5;
    distortHeight = height * 1.5;
    let dvert2 = getDistortedVertices(
      distortion,
      distortWidth,
      distortHeight,
      subdivisionRows,
      subdivisionCols
    );
    p5.push();
    // translate(-width/2, -height/2)
    // image(bgTex, 0, 0)
    wrapTexture(bgTex, dvert2, subdivisionRows, subdivisionCols, g);
    p5.pop();

    // DISPLAYING TEXT
    // textAlign()
    // textSize(40);
    let text1 = p5.random(dataArray).content;
    let textCanvas = p5.createGraphics(width, height);
    let font1 = p5.random(fonts);
    console.log("font ", font1);
    textCanvas.textFont(font1);

    let maxtextlength = dataArray.reduce((prev, curr, index, arr) => {
      // console.log(prev)
      return curr.content.length > prev ? curr.content.length : prev;
    }, 0);
    let mintextlength = dataArray.reduce((prev, curr, index, arr) => {
      // console.log(prev)
      return curr.content.length < prev ? curr.content.length : prev;
    }, 0);

    console.log("min text length", maxtextlength);
    console.log("max text length", mintextlength);
    let tSize = p5.map(text1.length, mintextlength, maxtextlength, 84, 36);

    spaceOut(text1, textCanvas, true, tSize - tSize / 2, tSize + tSize / 2);

    // DISTORTION
    // translate(-width/2, -height/2)
    // image(textCanvas, 0, 0)

    distortion = 220;
    distortWidth = width * 0.8;
    distortHeight = height * 0.8;
    let dverts1 = getDistortedVertices(
      distortion,
      distortWidth,
      distortHeight,
      subdivisionRows,
      subdivisionCols
    );
    wrapTexture(textCanvas, dverts1, subdivisionRows, subdivisionCols, g);
    g1.image(g, 0, 0, pageWidth, pageHeight);
  }

  function drawBackPage(g1) {
    p5.rect(0, 0, pageWidth, pageHeight);
    p5.text("back page", 0, 0);

    let text1 = "queeringfamilies".repeat(60).split("").join(" ");
    let text2 =
      "The hope is that by assembling these texts – most of which aren’t otherwise available online – and placing them next to each other, they might interact in useful ways. And ultimately, the point is to understand the conditions in which we live and “put a weapon in the hands of workers.”";
    let text3 = " - caringlabor.wordpress.com";
    let text4 = "a queer zine series by opheliagame";

    // PARAMETERS
    let subdivision = 4;
    let distortion;

    let subdivisionCols = Math.pow(2, subdivision);
    let subdivisionRows = Math.pow(2, subdivision);
    let distortWidth, distortHeight;
    let width = pageWidth;
    let height = pageHeight;

    let g = p5.createGraphics(pageWidth, pageHeight, p5.WEBGL);
    g.noStroke();
    g.pixelDensity(1);

    g.background(p5.random(palette));

    // DISPLAYING TEXT
    // textAlign()

    let textCanvas = p5.createGraphics(width * 3, height * 3);
    let font1 = p5.random(fonts);
    console.log("font ", font1);
    textCanvas.textFont(font1);
    // textCanvas.textSize(92*2)
    // textCanvas.noBackground()
    spaceOut(text1, textCanvas, false, 200 * 0.8, 150 * 0.8);

    // push()
    // translate(width/2, height/2)
    // scale(0.6)
    // imageMode(CENTER)
    // image(textCanvas, 0, 0)
    // pop()

    let textCanvas1 = p5.createGraphics(width, height, p5.WEBGL);
    textCanvas1.noStroke();
    distortion = p5.random(200, 300);
    distortWidth = textCanvas1.width;
    distortHeight = textCanvas1.height;
    let dverts1 = getDistortedVertices(
      distortion,
      distortWidth,
      distortHeight,
      subdivisionRows,
      subdivisionCols
    );
    wrapTexture(
      textCanvas,
      dverts1,
      subdivisionRows,
      subdivisionCols,
      textCanvas1
    );

    g.push();
    // translate(-width/2, -height/2)
    g.scale(1.2, 1.2);
    g.imageMode(p5.CENTER);
    g.image(textCanvas1, 0, 0, width, height);
    g.pop();

    // DISPLAYING TEXT ON TOP
    let textCanvas2 = p5.createGraphics(width * 3, height * 3);
    let font2 = p5.random(fonts);
    console.log("font ", font2);
    textCanvas2.textFont(font2);
    // textCanvas.textSize(92*2)
    // textCanvas.noBackground()
    spaceOut(text2, textCanvas2, true, 64 * 2.5, 72 * 2.5);

    let textCanvas3 = p5.createGraphics(width, height, p5.WEBGL);
    textCanvas3.noStroke();
    distortion = p5.random(250, 350);
    distortWidth = textCanvas3.width;
    distortHeight = textCanvas3.height;
    let dverts2 = getDistortedVertices(
      distortion,
      distortWidth,
      distortHeight,
      subdivisionRows,
      subdivisionCols
    );
    wrapTexture(
      textCanvas2,
      dverts2,
      subdivisionRows,
      subdivisionCols,
      textCanvas3
    );

    g.push();
    let rx = p5.random(100, width / 2);
    let ry = p5.random(100, height / 2);
    g.translate(-width / 2, -height / 2);
    g.translate(rx, ry);
    // imageMode(CENTER)
    g.image(textCanvas3, 0, 0, width - rx, height - ry);
    g.pop();

    let textCanvas4 = p5.createGraphics(width / 2, 100);
    let font4 = p5.random(fonts);
    console.log("font ", font4);
    textCanvas4.textFont(font4);
    // textCanvas.textSize(32)
    // textCanvas.noBackground()
    spaceOut(text4, textCanvas4, true, 24 * 1.5, 32 * 1.5);
    g.push();
    // translate(-width/2, -height/2 + 100)
    g.translate(0, height / 2 - 100);
    g.imageMode(p5.CENTER);
    g.image(textCanvas4, 0, 0, textCanvas4.width, textCanvas4.height);
    g.pop();

    g1.image(g, 0, 0, pageWidth, pageHeight);
  }

  // p5.keyPressed = () => {
  //   // Save the canvas as an image file when a key is pressed
  //   if (p5.key === "s") {
  //     p5.saveCanvas("high-res-image", "png"); // Save the image as PNG
  //   }
  // };
};

export default sketch;
