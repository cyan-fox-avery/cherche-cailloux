(() => {
  'use strict';

  const SAVE_KEY = 'rock-go-crunch-v2';
  const GRID_SIZE = 10;

  const MATERIALS = {
    quartz: {
      name:'Quartz', subtitle:'Silicon dioxide · SiO₂', family:'mineral', wing:'minerals', iconClass:'gem quartz',
      signature:{id:'silicon-dioxide',label:'Silicon dioxide',formula:'SiO₂'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:4,tumbled:7,cut:12},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'},
      facts:{
        raw:'Quartz commonly forms six-sided crystals and is one of Earth’s most abundant minerals.',
        tumbled:'Tumbling rounds rough edges through repeated abrasion with grit and water.',
        cut:'Clear quartz can be faceted even though it is much softer than diamond.'
      },
      mastery:{fact:'Quartz is piezoelectric: squeezing or vibrating it can create an electrical charge, which is why quartz is useful in clocks, watches, and electronics.'}
    },
    amethyst: {
      name:'Amethyst', subtitle:'Purple quartz · SiO₂', family:'mineral', wing:'minerals', iconClass:'gem amethyst',
      signature:{id:'silicon-dioxide',label:'Silicon dioxide',formula:'SiO₂'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:8,tumbled:14,cut:24},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'},
      facts:{
        raw:'Amethyst is a purple variety of quartz. Its colour is linked to trace iron and natural irradiation.',
        tumbled:'Polishing can make amethyst’s colour zoning and internal patterns easier to see.',
        cut:'Amethyst is commonly faceted to emphasize colour and brilliance.'
      },
      mastery:{fact:'Heating can change amethyst’s colour. Some commercial citrine is produced by carefully heat-treating amethyst.'}
    },
    garnet: {
      name:'Garnet', subtitle:'A family of silicate minerals', family:'mineral', wing:'minerals', iconClass:'gem garnet',
      signature:{id:'garnet-silicate',label:'Silicate-group chemistry',formula:'variable'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:14,tumbled:26,cut:46},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:1,
      facts:{
        raw:'Garnet is not one single mineral but a group of related minerals with similar crystal structures.',
        tumbled:'Garnets occur in several colours; deep red is familiar, but green, orange, and other varieties exist.',
        cut:'Gem-quality garnet can be faceted, while more opaque material is often polished instead.'
      },
      mastery:{fact:'Garnet is useful outside jewellery too. Its hardness makes crushed garnet a practical industrial abrasive, including in some waterjet-cutting systems.'}
    },
    topaz: {
      name:'Topaz', subtitle:'Aluminium fluorosilicate', family:'mineral', wing:'minerals', iconClass:'gem topaz',
      signature:{id:'topaz-chemistry',label:'Aluminium fluorosilicate',formula:'Al₂SiO₄(F,OH)₂'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:18,tumbled:34,cut:60},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:1,
      facts:{
        raw:'Topaz can occur in several colours. Natural crystals are often colourless, pale, or lightly coloured.',
        tumbled:'Topaz is hard but has perfect cleavage, so careless blows can split a crystal along flat planes.',
        cut:'Cutters orient topaz carefully because its cleavage affects how safely a stone can be shaped.'
      },
      mastery:{fact:'Much of the bright blue topaz sold in jewellery starts as pale or colourless topaz and is treated with irradiation and heat to create stable blue colour.'}
    },
    pyrite: {
      name:'Pyrite', subtitle:'Iron sulfide · FeS₂', family:'mineral', wing:'minerals', iconClass:'gem pyrite',
      signature:{id:'iron-sulfide',label:'Iron sulfide',formula:'FeS₂'},
      stages:['raw'], stageLabels:{raw:'Natural specimen'}, prices:{raw:11}, process:{},
      facts:{raw:'Pyrite is an iron sulfide mineral famous for its metallic lustre and nickname: fool’s gold.'},
      mastery:{fact:'Pyrite commonly forms cubes, pyritohedra, and other sharply geometric crystals. Its metallic shine can be spectacular even when no gold is present.'}
    },
    citrine: {
      name:'Citrine', subtitle:'Yellow to orange quartz · SiO₂', family:'mineral', wing:'minerals', iconClass:'gem citrine',
      signature:{id:'silicon-dioxide',label:'Silicon dioxide',formula:'SiO₂'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:20,tumbled:36,cut:64},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:1,
      facts:{
        raw:'Citrine is a yellow to orange variety of quartz. Natural citrine is much less common than amethyst.',
        tumbled:'Polishing reveals citrine’s warm colour while keeping the quartz hardness that makes it practical for jewellery.',
        cut:'Faceting can make transparent citrine bright and lively, especially in larger stones.'
      },
      mastery:{fact:'Citrine, amethyst, and colourless quartz are all the same mineral species: quartz. Their different colours come from impurities, defects, and treatment histories.'}
    },
    calcite: {
      name:'Calcite', subtitle:'Calcium carbonate · CaCO₃', family:'mineral', wing:'minerals', iconClass:'gem calcite',
      signature:{id:'calcium-carbonate',label:'Calcium carbonate',formula:'CaCO₃'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:10,tumbled:18,cut:30},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:1,
      facts:{
        raw:'Calcite is a major mineral in limestone and marble and is one of the most common carbonate minerals.',
        tumbled:'Calcite is quite soft, so polished pieces can scratch more easily than quartz.',
        cut:'Transparent calcite can be cut, but its perfect cleavage makes it much trickier to facet than tougher gemstones.'
      },
      mastery:{fact:'Some clear calcite shows strong double refraction: viewed through the crystal, a single line can appear doubled.'}
    },
    fluorite: {
      name:'Fluorite', subtitle:'Calcium fluoride · CaF₂', family:'mineral', wing:'minerals', iconClass:'gem fluorite',
      signature:{id:'calcium-fluoride',label:'Calcium fluoride',formula:'CaF₂'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:16,tumbled:30,cut:54},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:1,
      facts:{
        raw:'Fluorite often forms cubic crystals and occurs in a remarkable range of colours.',
        tumbled:'Fluorite can take a beautiful polish, but it is softer than quartz and needs gentler handling.',
        cut:'Gem fluorite can be faceted, though its softness and cleavage make it better suited to careful use than everyday rings.'
      },
      mastery:{fact:'The word fluorescence comes from fluorite. Some specimens glow vividly under ultraviolet light, although not every fluorite specimen fluoresces.'}
    },
    aquamarine: {
      name:'Aquamarine', subtitle:'Blue-green beryl · Be₃Al₂Si₆O₁₈', family:'mineral', wing:'minerals', iconClass:'gem aquamarine',
      signature:{id:'beryl',label:'Beryllium aluminium silicate',formula:'Be₃Al₂Si₆O₁₈'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:28,tumbled:52,cut:94},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:2,
      facts:{
        raw:'Aquamarine is the blue to blue-green variety of beryl, the same mineral family that includes emerald.',
        tumbled:'Aquamarine is hard enough for durable jewellery, though inclusions and fractures still affect how a piece should be handled.',
        cut:'Aquamarine is often cut to emphasize transparency and cool blue colour rather than maximum rainbow fire.'
      },
      mastery:{fact:'Aquamarine and emerald are both beryl. Small amounts of different trace elements are responsible for their very different colours.'}
    },
    sapphire: {
      name:'Sapphire', subtitle:'Corundum · Al₂O₃', family:'mineral', wing:'minerals', iconClass:'gem sapphire',
      signature:{id:'corundum',label:'Aluminium oxide',formula:'Al₂O₃'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:38,tumbled:72,cut:135},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:2,
      facts:{
        raw:'Sapphire is gem-quality corundum. Blue is famous, but sapphires can occur in many colours.',
        tumbled:'Corundum is very hard, ranking 9 on the Mohs scale, second only to diamond among common reference minerals.',
        cut:'Cut orientation matters because sapphire colour can look different along different crystal directions.'
      },
      mastery:{fact:'Ruby and sapphire are the same mineral species: corundum. Red gem corundum is called ruby; most other gem colours are called sapphire.'}
    },

    roseQuartz: {
      name:'Rose Quartz', subtitle:'Pink quartz · SiO₂', family:'mineral', wing:'minerals', iconClass:'gem rose-quartz',
      signature:{id:'silicon-dioxide',label:'Silicon dioxide',formula:'SiO₂'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:22,tumbled:40,cut:72},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:2,
      facts:{
        raw:'Rose quartz is a pink variety of quartz. Its colour is linked to microscopic inclusions and structural features rather than one simple impurity.',
        tumbled:'Rose quartz is commonly polished into smooth stones and carvings because much of it is translucent rather than fully transparent.',
        cut:'Transparent rose quartz is uncommon, but suitable material can be faceted into soft pink gems.'
      },
      mastery:{fact:'Quartz, amethyst, citrine, and rose quartz all share the same basic chemistry: SiO₂. Their different colours come from very different microscopic causes.'}
    },
    malachite: {
      name:'Malachite', subtitle:'Copper carbonate hydroxide', family:'mineral', wing:'minerals', iconClass:'gem malachite',
      signature:{id:'copper-carbonate',label:'Copper carbonate hydroxide',formula:'Cu₂CO₃(OH)₂'},
      stages:['raw','tumbled','polished'], stageLabels:{raw:'Raw',tumbled:'Tumbled',polished:'Polished'}, prices:{raw:24,tumbled:44,polished:78},
      process:{raw:'tumbled',tumbled:'polished'}, processLabels:{raw:'Tumble 1',tumbled:'Polish 1'}, workshopRequired:2,
      facts:{
        raw:'Malachite is a vivid green copper mineral that commonly forms in the weathered zones of copper deposits.',
        tumbled:'Its banding can become especially striking when malachite is polished into rounded stones.',
        polished:'Malachite is relatively soft, so it is more often polished or carved than faceted like a hard transparent gemstone.'
      },
      mastery:{fact:'Malachite has been used as a pigment as well as an ornamental stone. Finely ground malachite once supplied a brilliant green colour for paint.'}
    },
    ruby: {
      name:'Ruby', subtitle:'Red corundum · Al₂O₃', family:'mineral', wing:'minerals', iconClass:'gem ruby',
      signature:{id:'corundum',label:'Aluminium oxide',formula:'Al₂O₃'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:70,tumbled:130,cut:250},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:3,
      facts:{
        raw:'Ruby is red gem-quality corundum. Chromium is the main element responsible for its red colour.',
        tumbled:'Corundum is extremely hard, so ruby takes a durable polish and resists scratching better than most gemstones.',
        cut:'Fine ruby is cut to balance colour, brightness, and weight, especially because richly coloured material can be valuable even in small sizes.'
      },
      mastery:{fact:'Ruby and sapphire are the same mineral species: corundum. The name ruby is reserved for red gem corundum; other gem colours are generally called sapphire.'}
    },
    emerald: {
      name:'Emerald', subtitle:'Green beryl · Be₃Al₂Si₆O₁₈', family:'mineral', wing:'minerals', iconClass:'gem emerald',
      signature:{id:'beryl',label:'Beryllium aluminium silicate',formula:'Be₃Al₂Si₆O₁₈'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:80,tumbled:145,cut:280},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:3,
      facts:{
        raw:'Emerald is the green variety of beryl. Chromium and sometimes vanadium are responsible for its colour.',
        tumbled:'Emeralds often contain visible inclusions and fractures, so even polished material must be handled with more care than its hardness alone suggests.',
        cut:'The classic emerald cut was developed in part to protect vulnerable corners while showing off colour and clarity.'
      },
      mastery:{fact:'Emerald and aquamarine are both beryl. Their dramatically different colours come from different trace elements inside the same crystal structure.'}
    },

    hematite: {
      name:'Hematite', subtitle:'Iron ore → Iron', family:'ore', wing:'ores', iconClass:'ore hematite', metalDetectable:true,
      signature:{id:'iron-oxide',label:'Iron oxide',formula:'Fe₂O₃'},
      stages:['ore','refined'], stageLabels:{ore:'Hematite ore',refined:'Iron'}, prices:{ore:6,refined:12},
      process:{ore:'refined'}, processLabels:{ore:'Refine to iron'},
      facts:{
        ore:'Hematite is iron oxide and one of the world’s most important ores of iron.',
        refined:'Iron extracted from ore became one of the most important metals in tools, structures, and machines.'
      },
      mastery:{fact:'Hematite can look metallic grey, earthy red, or almost black, but its powdered streak is characteristically reddish brown.'}
    },
    chalcopyrite: {
      name:'Chalcopyrite', subtitle:'Copper ore → Copper', family:'ore', wing:'ores', iconClass:'ore chalcopyrite', metalDetectable:true,
      signature:{id:'copper-iron-sulfide',label:'Copper iron sulfide',formula:'CuFeS₂'},
      stages:['ore','refined'], stageLabels:{ore:'Chalcopyrite ore',refined:'Copper'}, prices:{ore:7,refined:15},
      process:{ore:'refined'}, processLabels:{ore:'Refine to copper'},
      facts:{
        ore:'Chalcopyrite is a copper iron sulfide and one of the most widespread copper-bearing minerals.',
        refined:'Copper is valued for conductivity, corrosion resistance, and its ability to be worked into useful shapes.'
      },
      mastery:{fact:'Fresh chalcopyrite is brassy yellow, but weathering can produce colourful iridescent tarnish that is sometimes mistaken for bornite.'}
    },
    cassiterite: {
      name:'Cassiterite', subtitle:'Tin ore → Tin', family:'ore', wing:'ores', iconClass:'ore cassiterite', metalDetectable:true,
      signature:{id:'tin-oxide',label:'Tin oxide',formula:'SnO₂'},
      stages:['ore','refined'], stageLabels:{ore:'Cassiterite ore',refined:'Tin'}, prices:{ore:22,refined:50},
      process:{ore:'refined'}, processLabels:{ore:'Refine to tin'}, workshopRequired:1,
      facts:{
        ore:'Cassiterite is tin oxide and the principal ore from which most tin is obtained.',
        refined:'Tin is a soft, corrosion-resistant metal used in solder, coatings, and alloys such as bronze.'
      },
      mastery:{fact:'Tin helped transform metallurgy because copper alloyed with tin produces bronze, a material that played a major role in many ancient technologies.'}
    },

    galena: {
      name:'Galena', subtitle:'Lead ore → Lead', family:'ore', wing:'ores', iconClass:'ore galena', metalDetectable:true,
      signature:{id:'lead-sulfide',label:'Lead sulfide',formula:'PbS'},
      stages:['ore','refined'], stageLabels:{ore:'Galena ore',refined:'Lead'}, prices:{ore:32,refined:70},
      process:{ore:'refined'}, processLabels:{ore:'Refine to lead'}, workshopRequired:2,
      facts:{
        ore:'Galena is lead sulfide and the most important ore of lead. It often forms bright metallic cubic crystals.',
        refined:'Lead is dense, soft, and easy to shape, but it is also toxic and must be handled carefully in real life.'
      },
      mastery:{fact:'Galena can contain small amounts of silver, so some lead deposits have also been important sources of silver.'}
    },
    sphalerite: {
      name:'Sphalerite', subtitle:'Zinc ore → Zinc', family:'ore', wing:'ores', iconClass:'ore sphalerite', metalDetectable:true,
      signature:{id:'zinc-sulfide',label:'Zinc sulfide',formula:'ZnS'},
      stages:['ore','refined'], stageLabels:{ore:'Sphalerite ore',refined:'Zinc'}, prices:{ore:36,refined:80},
      process:{ore:'refined'}, processLabels:{ore:'Refine to zinc'}, workshopRequired:2,
      facts:{
        ore:'Sphalerite is zinc sulfide and the most important ore of zinc. Its colour ranges from pale yellow-brown to nearly black.',
        refined:'Zinc is widely used to protect steel from corrosion through galvanizing and is also an ingredient in brass.'
      },
      mastery:{fact:'Some sphalerite can glow under ultraviolet light, and certain specimens show especially bright fluorescence.'}
    },

    trilobite: {
      name:'Trilobite', subtitle:'Fossil arthropod', family:'fossil', wing:'fossils', iconClass:'round trilobite', iconText:'≋',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil specimen'}, prices:{found:40}, process:{},
      facts:{found:'Trilobites were marine arthropods that lived for hundreds of millions of years and disappeared in the end-Permian mass extinction.'}
    },
    ammonite: {
      name:'Ammonite', subtitle:'Fossil marine cephalopod', family:'fossil', wing:'fossils', iconClass:'round ammonite', iconText:'◉',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil specimen'}, prices:{found:85}, process:{},
      facts:{found:'Ammonites were shelled marine cephalopods related to modern squid and octopuses. Their rapidly changing forms make many species useful index fossils.'}
    },

    crinoidStem: {
      name:'Crinoid Stem', subtitle:'Fossil marine animal fragment', family:'fossil', wing:'fossils', iconClass:'round crinoid-stem', iconText:'✣',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil specimen'}, prices:{found:70}, process:{},
      facts:{found:'Crinoids are marine animals related to starfish. Their stems often break into small disk-shaped pieces that fossilize readily.'}
    },
    brachiopod: {
      name:'Brachiopod', subtitle:'Fossil marine animal', family:'fossil', wing:'fossils', iconClass:'round brachiopod', iconText:'◒',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil specimen'}, prices:{found:140}, process:{},
      facts:{found:'Brachiopods are marine animals with two shells. They can resemble clams, but their anatomy and evolutionary history are very different.'}
    },
    surveyMarker: {
      name:'Worn Survey Marker', subtitle:'Historical mine survey marker', family:'artifact', wing:'history', iconClass:'tag survey-marker', iconText:'△', metalDetectable:true,
      signature:{id:'artifact',label:'Historical object',formula:''},
      stages:['found'], stageLabels:{found:'Historical artifact'}, prices:{found:120}, process:{},
      facts:{found:'Survey markers help record measured positions underground so workings can be mapped accurately and tied back to a larger mine plan.'}
    },
    drillBit: {
      name:'Old Drill Bit', subtitle:'Historical drilling equipment', family:'artifact', wing:'history', iconClass:'tag drill-bit', iconText:'⇣', metalDetectable:true,
      signature:{id:'artifact',label:'Historical object',formula:''},
      stages:['found'], stageLabels:{found:'Historical artifact'}, prices:{found:180}, process:{},
      facts:{found:'Drilling tools transformed hard-rock mining by making it faster to bore holes for blasting and excavation.'}
    },

    miningTag: {
      name:'Mining Tag', subtitle:'Historical mine check', family:'artifact', wing:'history', iconClass:'tag mining-tag', metalDetectable:true, iconText:'#',
      signature:{id:'artifact',label:'Historical object',formula:''},
      stages:['found'], stageLabels:{found:'Historical artifact'}, prices:{found:50}, process:{},
      facts:{found:'Some mines used numbered tags or checks to help track who was underground. Systems varied from one operation to another.'}
    },
    miningLamp: {
      name:'Old Mining Lamp', subtitle:'Historical underground equipment', family:'artifact', wing:'history', iconClass:'tag mining-lamp', metalDetectable:true, iconText:'◒',
      signature:{id:'artifact',label:'Historical object',formula:''},
      stages:['found'], stageLabels:{found:'Historical artifact'}, prices:{found:100}, process:{},
      facts:{found:'Underground lamps changed dramatically over time, from open flames to safety lamps and eventually electric lighting. Safer designs were especially important where flammable gases could accumulate.'}
    }
  };

  const WINGS = [
    {id:'minerals',name:'Mineral Hall'},
    {id:'ores',name:'Ores & Metals'},
    {id:'fossils',name:'Fossil Wing'},
    {id:'history',name:'History Wing'}
  ];

  const DEPTHS = {
    1:{
      name:'Upper Seam',
      materials:{quartz:42,amethyst:22,hematite:20,chalcopyrite:16},
      sideFinds:[{key:'miningTag',weight:72},{key:'trilobite',weight:28}]
    },
    2:{
      name:'Lower Works',
      materials:{quartz:18,amethyst:13,hematite:13,chalcopyrite:13,garnet:15,topaz:12,pyrite:16},
      sideFinds:[{key:'trilobite',weight:54},{key:'crinoidStem',weight:28},{key:'miningTag',weight:18}]
    },
    3:{
      name:'Deep Gallery',
      materials:{quartz:8,amethyst:7,hematite:5,chalcopyrite:5,garnet:8,topaz:7,pyrite:6,citrine:12,calcite:10,fluorite:10,aquamarine:7,sapphire:4,cassiterite:5},
      sideFinds:[{key:'ammonite',weight:42},{key:'crinoidStem',weight:20},{key:'trilobite',weight:13},{key:'surveyMarker',weight:12},{key:'miningLamp',weight:8},{key:'miningTag',weight:5}]
    },
    4:{
      name:'Crystal Veins',
      materials:{quartz:4,amethyst:4,hematite:3,chalcopyrite:3,garnet:5,topaz:5,pyrite:4,citrine:6,calcite:5,fluorite:6,aquamarine:7,sapphire:6,cassiterite:4,roseQuartz:9,malachite:8,ruby:5,emerald:4,galena:6,sphalerite:6},
      sideFinds:[{key:'brachiopod',weight:33},{key:'ammonite',weight:20},{key:'crinoidStem',weight:10},{key:'drillBit',weight:18},{key:'surveyMarker',weight:11},{key:'miningLamp',weight:8}]
    }
  };

const DURABILITY_LEVELS = [
    {swings:28,cost:60,label:'Basic pick'},
    {swings:34,cost:140,label:'Reinforced handle'},
    {swings:40,cost:320,label:'Steel pick'},
    {swings:48,cost:780,label:'Geologist’s pick'},
    {swings:56,cost:null,label:'Deep-work pick'}
  ];

  const SURVEY_LEVELS = [
    {name:'None',cost:75,next:'Field Scanner',description:'Unlocks the 3×3 area scanner. Early scans report chemical signatures rather than exact gem names.'},
    {name:'Field Scanner',cost:160,next:'Spectral Scanner',description:'Reports chemistry and signal strength inside the selected 3×3 area. Scanned tiles stay marked.'},
    {name:'Spectral Scanner',cost:360,next:'Mineral Analyzer',description:'Adds deposit-pattern information and notices unusual non-mineral signatures.'},
    {name:'Mineral Analyzer',cost:null,next:null,description:'Identifies exact minerals and distinguishes fossil signatures from historical objects.'}
  ];

  const SCAN_CHARGE_LEVELS = [
    {uses:1,cost:80,label:'1 scan per face'},
    {uses:2,cost:170,label:'2 scans per face'},
    {uses:3,cost:340,label:'3 scans per face'},
    {uses:4,cost:560,label:'4 scans per face'},
    {uses:5,cost:850,label:'5 scans per face'},
    {uses:6,cost:null,label:'6 scans per face'}
  ];

  const WORKSHOP_LEVELS = [
    {name:'Basic Workshop',cost:180,next:'Precision Workshop',description:'Handles quartz, amethyst, iron ore, and copper ore.'},
    {name:'Precision Workshop',cost:650,next:'Advanced Lapidary',description:'Adds garnet, topaz, citrine, calcite, fluorite, cassiterite, and other mid-game materials.'},
    {name:'Advanced Lapidary',cost:1250,next:'Master Lapidary',description:'Can process aquamarine, sapphire, rose quartz, malachite, galena, and sphalerite.'},
    {name:'Master Lapidary',cost:null,next:null,description:'Handles ruby and emerald. Processing remains free.'}
  ];

  const DEPTH_UPGRADES = {
    2:{cost:225,description:'Unlock Depth 2: the Lower Works, adding garnet, topaz, pyrite, and new fossil hunting.'},
    3:{cost:850,description:'Unlock Depth 3: the Deep Gallery, adding new quartz varieties, fluorite, beryl, corundum, tin ore, and deeper historical finds.'},
    4:{cost:1800,description:'Unlock Depth 4: the Crystal Veins, adding ruby, emerald, rose quartz, malachite, lead and zinc ores, plus new fossils and artifacts.'}
  };


  const ACHIEVEMENTS = [
    {id:'firstCrunch',icon:'⛏️',name:'First Crunch',description:'Mine your first tile.',condition:s=>s.meta.tilesMined>=1},
    {id:'shiny',icon:'✦',name:'Shiny!',description:'Find your first mineral or ore.',condition:s=>Object.entries(MATERIALS).some(([k,m])=>['mineral','ore'].includes(m.family)&&(s.stats[k]?.found||0)>0)},
    {id:'museumPiece',icon:'🏛️',name:'Museum Piece',description:'Donate your first specimen.',condition:s=>Object.values(s.stats).some(x=>(x.donated||0)>0)},
    {id:'shelfRespect',icon:'✨',name:'Shelf Respect',description:'Complete your first material set.',condition:s=>Object.keys(MATERIALS).some(k=>isMastered(k))},
    {id:'fossilFever',icon:'🦴',name:'Fossil Fever',description:'Donate three different fossils.',condition:s=>countCollectedFamily('fossil')>=3},
    {id:'oldStuff',icon:'🏺',name:'Old Stuff',description:'Donate three different historical artifacts.',condition:s=>countCollectedFamily('artifact')>=3},
    {id:'foolMeOnce',icon:'🟨',name:'Fool Me Once',description:'Find pyrite. It is still not gold.',condition:s=>(s.stats.pyrite?.found||0)>0},
    {id:'sio2Enjoyer',icon:'◇',name:'SiO₂ Enjoyer',description:'Find quartz, amethyst, citrine, and rose quartz.',condition:s=>['quartz','amethyst','citrine','roseQuartz'].every(k=>(s.stats[k]?.found||0)>0)},
    {id:'familyResemblance',icon:'🔴',name:'Family Resemblance',description:'Master both sapphire and ruby.',condition:s=>isMastered('sapphire')&&isMastered('ruby')},
    {id:'berylBuddies',icon:'🟢',name:'Beryl Buddies',description:'Master both aquamarine and emerald.',condition:s=>isMastered('aquamarine')&&isMastered('emerald')},
    {id:'metalhead',icon:'⚙️',name:'Metalhead',description:'Refine iron, copper, tin, lead, and zinc at least once.',condition:s=>['hematite','chalcopyrite','cassiterite','galena','sphalerite'].every(k=>(s.stats[k]?.processed||0)>0)},
    {id:'prospector',icon:'⌁',name:'Prospector',description:'Use the area scanner 25 times.',condition:s=>s.meta.scansUsed>=25},
    {id:'dejaVu',icon:'👁️',name:'Déjà Vu',description:'Scan ten tiles at least twice.',condition:s=>s.meta.doubleScans>=10},
    {id:'xrayish',icon:'◌',name:'X-Ray-ish',description:'Dig up something after its tile has been scanned twice.',condition:s=>s.meta.anomalyFinds>=1},
    {id:'beepBeep',icon:'🧲',name:'Beep Beep',description:'Use the metal detector for the first time.',condition:s=>s.meta.metalSweeps>=1},
    {id:'detectorist',icon:'📍',name:'Detectorist',description:'Dig up a metallic target from a detector signal zone.',condition:s=>s.meta.metalSignalFinds>=1},
    {id:'barelyThere',icon:'🪫',name:'Barely There',description:'Use every last swing on a rock face.',condition:s=>s.meta.facesFinished>=1},
    {id:'lastSwingLuck',icon:'🍀',name:'Last Swing Luck',description:'Find something with the final point of pick durability.',condition:s=>s.meta.lastSwingFinds>=1},
    {id:'sellout',icon:'💰',name:'Sellout',description:'Use Sell All ten times.',condition:s=>s.meta.sellAllUses>=10},
    {id:'fourFloorsDown',icon:'🪜',name:'Four Floors Down',description:'Unlock Depth 4.',condition:s=>s.unlockedDepth>=4},
    {id:'shinyGoblin',icon:'💎',name:'Shiny Goblin',description:'Find 100 total specimens.',condition:s=>totalFound()>=100},
    {id:'fullCoverage',icon:'▦',name:'Broad Coverage',description:'Survey at least half of one rock face.',condition:s=>s.meta.fullSurveyFaces>=1},
    {id:'allThatGlitters',icon:'🌟',name:'All That Glitters',description:'Master citrine, topaz, and pyrite.',condition:s=>['citrine','topaz','pyrite'].every(k=>isMastered(k))},
    {id:'rockGoCrunch',icon:'🪨',name:'Rock Go Crunch',description:'You remembered the old name.',hidden:true,condition:s=>s.meta.taglineTaps>=13}
  ];


  /* French-Canadian content overrides for the dedicated Cherche-cailloux edition. */
  const FR_MATERIALS = {
    quartz:{
      name:'Quartz',subtitle:'Dioxyde de silicium · SiO₂',signatureLabel:'Dioxyde de silicium',
      stageLabels:{raw:'Brut',tumbled:'Roulé',cut:'Taillé'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'Le quartz forme souvent des cristaux à six faces et compte parmi les minéraux les plus abondants de la croûte terrestre.',
        tumbled:'Le polissage au tonneau arrondit peu à peu les arêtes grâce à l’abrasion, au grain et à l’eau.',
        cut:'Le quartz transparent peut être facetté, même s’il est beaucoup plus tendre que le diamant.'
      },
      mastery:'Le quartz est piézoélectrique : une pression ou une vibration peut y produire une charge électrique. C’est l’une des raisons pour lesquelles on l’utilise dans les montres, les horloges et l’électronique.'
    },
    amethyst:{
      name:'Améthyste',subtitle:'Quartz violet · SiO₂',signatureLabel:'Dioxyde de silicium',
      stageLabels:{raw:'Brute',tumbled:'Roulée',cut:'Taillée'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'L’améthyste est une variété violette de quartz. Sa couleur est liée à des traces de fer et à l’irradiation naturelle.',
        tumbled:'Le polissage peut rendre plus visibles les zones de couleur et les motifs internes de l’améthyste.',
        cut:'L’améthyste est souvent facettée pour mettre en valeur sa couleur et son éclat.'
      },
      mastery:'La chaleur peut modifier la couleur de l’améthyste. Une partie de la citrine vendue sur le marché est obtenue en chauffant soigneusement de l’améthyste.'
    },
    garnet:{
      name:'Grenat',subtitle:'Une famille de minéraux silicatés',signatureLabel:'Chimie du groupe des silicates',
      stageLabels:{raw:'Brut',tumbled:'Roulé',cut:'Taillé'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'Le grenat n’est pas un seul minéral, mais un groupe de minéraux apparentés dont la structure cristalline est semblable.',
        tumbled:'Les grenats existent en plusieurs couleurs : rouge profond, vert, orange et bien d’autres.',
        cut:'Le grenat de qualité gemme peut être facetté, tandis que les variétés plus opaques sont souvent simplement polies.'
      },
      mastery:'Le grenat sert aussi en dehors de la joaillerie. Sa dureté en fait un abrasif industriel utile, notamment dans certains systèmes de découpe au jet d’eau.'
    },
    topaz:{
      name:'Topaze',subtitle:'Fluorosilicate d’aluminium',signatureLabel:'Fluorosilicate d’aluminium',
      stageLabels:{raw:'Brute',tumbled:'Roulée',cut:'Taillée'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'La topaze peut être de plusieurs couleurs. Les cristaux naturels sont souvent incolores, pâles ou légèrement colorés.',
        tumbled:'La topaze est dure, mais possède un clivage parfait : un choc mal placé peut la fendre selon des plans bien nets.',
        cut:'Les lapidaires orientent la topaze avec soin, puisque son clivage influence la façon dont on peut la tailler sans la briser.'
      },
      mastery:'Une grande partie de la topaze bleu vif vendue en joaillerie commence sous forme pâle ou incolore, puis est traitée par irradiation et chauffage pour produire une couleur bleue stable.'
    },
    pyrite:{
      name:'Pyrite',subtitle:'Sulfure de fer · FeS₂',signatureLabel:'Sulfure de fer',
      stageLabels:{raw:'Spécimen naturel'},processLabels:{},
      facts:{raw:'La pyrite est un sulfure de fer au lustre métallique, célèbre sous le surnom d’« or des fous ».'},
      mastery:'La pyrite forme souvent des cubes, des pyritoèdres et d’autres cristaux très géométriques. Elle peut être spectaculaire même lorsqu’il n’y a absolument aucun or.'
    },
    citrine:{
      name:'Citrine',subtitle:'Quartz jaune à orangé · SiO₂',signatureLabel:'Dioxyde de silicium',
      stageLabels:{raw:'Brute',tumbled:'Roulée',cut:'Taillée'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'La citrine est une variété jaune à orangée de quartz. La citrine naturelle est beaucoup moins commune que l’améthyste.',
        tumbled:'Le polissage révèle ses tons chauds tout en conservant la dureté du quartz.',
        cut:'La citrine transparente peut devenir très lumineuse lorsqu’elle est facettée, surtout dans les pierres de grande taille.'
      },
      mastery:'La citrine, l’améthyste et le quartz incolore sont tous la même espèce minérale : le quartz. Leurs couleurs différentes viennent des impuretés, des défauts cristallins et parfois des traitements.'
    },
    calcite:{
      name:'Calcite',subtitle:'Carbonate de calcium · CaCO₃',signatureLabel:'Carbonate de calcium',
      stageLabels:{raw:'Brute',tumbled:'Roulée',cut:'Taillée'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'La calcite est un constituant majeur du calcaire et du marbre, et l’un des carbonates les plus courants.',
        tumbled:'La calcite est assez tendre; les pièces polies se rayent donc plus facilement que le quartz.',
        cut:'La calcite transparente peut être taillée, mais son clivage parfait la rend bien plus délicate à facetter que les gemmes plus résistantes.'
      },
      mastery:'Certaines calcites transparentes montrent une forte biréfringence : une seule ligne observée à travers le cristal peut paraître doublée.'
    },
    fluorite:{
      name:'Fluorite',subtitle:'Fluorure de calcium · CaF₂',signatureLabel:'Fluorure de calcium',
      stageLabels:{raw:'Brute',tumbled:'Roulée',cut:'Taillée'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'La fluorite forme souvent des cristaux cubiques et peut présenter une gamme étonnante de couleurs.',
        tumbled:'Elle peut prendre un très beau poli, mais elle est plus tendre que le quartz et demande davantage de délicatesse.',
        cut:'La fluorite gemme peut être facettée, mais sa tendreté et son clivage la rendent peu adaptée aux bijoux soumis à beaucoup d’usure.'
      },
      mastery:'Le mot fluorescence vient de la fluorite. Certains spécimens brillent vivement sous la lumière ultraviolette, même si toutes les fluorites ne fluoreschent pas.'
    },
    aquamarine:{
      name:'Aigue-marine',subtitle:'Béryl bleu-vert · Be₃Al₂Si₆O₁₈',signatureLabel:'Silicate de béryllium et d’aluminium',
      stageLabels:{raw:'Brute',tumbled:'Roulée',cut:'Taillée'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'L’aigue-marine est la variété bleue à bleu-vert du béryl, la même famille minérale que l’émeraude.',
        tumbled:'Elle est assez dure pour des bijoux durables, bien que les inclusions et fractures influencent toujours sa résistance.',
        cut:'L’aigue-marine est souvent taillée pour mettre en valeur sa transparence et son bleu frais plutôt que pour maximiser les éclats arc-en-ciel.'
      },
      mastery:'L’aigue-marine et l’émeraude sont toutes deux du béryl. De petites quantités d’éléments traces différents produisent leurs couleurs très différentes.'
    },
    sapphire:{
      name:'Saphir',subtitle:'Corindon · Al₂O₃',signatureLabel:'Oxyde d’aluminium',
      stageLabels:{raw:'Brut',tumbled:'Roulé',cut:'Taillé'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'Le saphir est du corindon de qualité gemme. Le bleu est le plus célèbre, mais les saphirs existent dans de nombreuses couleurs.',
        tumbled:'Le corindon est très dur : 9 sur l’échelle de Mohs, juste sous le diamant parmi les minéraux de référence courants.',
        cut:'L’orientation de la taille compte, car la couleur d’un saphir peut varier selon la direction du cristal.'
      },
      mastery:'Le rubis et le saphir sont la même espèce minérale : le corindon. Le corindon gemme rouge s’appelle rubis; les autres couleurs sont généralement appelées saphirs.'
    },
    roseQuartz:{
      name:'Quartz rose',subtitle:'Quartz rose · SiO₂',signatureLabel:'Dioxyde de silicium',
      stageLabels:{raw:'Brut',tumbled:'Roulé',cut:'Taillé'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'Le quartz rose est une variété rose de quartz. Sa couleur est liée à des inclusions microscopiques et à des caractéristiques de sa structure plutôt qu’à une seule impureté.',
        tumbled:'Il est souvent poli en galets ou sculpté, puisque beaucoup de quartz rose est translucide plutôt que parfaitement transparent.',
        cut:'Le quartz rose transparent est rare, mais les morceaux qui s’y prêtent peuvent être facettés en gemmes rose pâle.'
      },
      mastery:'Quartz, améthyste, citrine et quartz rose partagent tous la même chimie de base : SiO₂. Leurs couleurs proviennent pourtant de causes microscopiques très différentes.'
    },
    malachite:{
      name:'Malachite',subtitle:'Carbonate hydroxylé de cuivre',signatureLabel:'Carbonate hydroxylé de cuivre',
      stageLabels:{raw:'Brute',tumbled:'Roulée',polished:'Polie'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Polir ×1'},
      facts:{
        raw:'La malachite est un minéral de cuivre vert vif qui se forme souvent dans les zones altérées des gisements de cuivre.',
        tumbled:'Ses bandes deviennent particulièrement frappantes lorsque la pierre est polie en formes arrondies.',
        polished:'La malachite est relativement tendre; on la polit ou on la sculpte donc plus souvent qu’on ne la facette comme une gemme transparente dure.'
      },
      mastery:'La malachite a aussi servi de pigment. Réduite en poudre fine, elle a autrefois fourni un vert éclatant pour la peinture.'
    },
    ruby:{
      name:'Rubis',subtitle:'Corindon rouge · Al₂O₃',signatureLabel:'Oxyde d’aluminium',
      stageLabels:{raw:'Brut',tumbled:'Roulé',cut:'Taillé'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'Le rubis est du corindon rouge de qualité gemme. Le chrome est le principal élément responsable de sa couleur.',
        tumbled:'Le corindon est extrêmement dur; le rubis prend donc un poli durable et résiste mieux aux rayures que la plupart des gemmes.',
        cut:'Un beau rubis est taillé pour équilibrer couleur, éclat et poids, surtout parce qu’un matériau très coloré peut être précieux même en petite taille.'
      },
      mastery:'Rubis et saphir sont la même espèce minérale : le corindon. Le nom rubis est réservé au corindon gemme rouge.'
    },
    emerald:{
      name:'Émeraude',subtitle:'Béryl vert · Be₃Al₂Si₆O₁₈',signatureLabel:'Silicate de béryllium et d’aluminium',
      stageLabels:{raw:'Brute',tumbled:'Roulée',cut:'Taillée'},processLabels:{raw:'Polir au tonneau ×1',tumbled:'Tailler ×1'},
      facts:{
        raw:'L’émeraude est la variété verte du béryl. Le chrome, et parfois le vanadium, est responsable de sa couleur.',
        tumbled:'Les émeraudes contiennent souvent des inclusions et des fractures visibles; elles demandent donc plus de soin que leur dureté seule pourrait le laisser croire.',
        cut:'La taille émeraude classique a été développée en partie pour protéger les coins fragiles tout en mettant en valeur la couleur et la clarté.'
      },
      mastery:'Émeraude et aigue-marine sont toutes deux du béryl. Leurs couleurs radicalement différentes viennent d’éléments traces différents dans la même structure cristalline.'
    },
    hematite:{
      name:'Hématite',subtitle:'Minerai de fer → Fer',signatureLabel:'Oxyde de fer',
      stageLabels:{ore:'Minerai d’hématite',refined:'Fer'},processLabels:{ore:'Raffiner en fer'},
      facts:{
        ore:'L’hématite est un oxyde de fer et l’un des minerais de fer les plus importants au monde.',
        refined:'Le fer extrait du minerai est devenu l’un des métaux les plus importants pour les outils, les structures et les machines.'
      },
      mastery:'L’hématite peut paraître gris métallique, rouge terreux ou presque noire, mais sa trace en poudre est typiquement brun rougeâtre.'
    },
    chalcopyrite:{
      name:'Chalcopyrite',subtitle:'Minerai de cuivre → Cuivre',signatureLabel:'Sulfure de cuivre et de fer',
      stageLabels:{ore:'Minerai de chalcopyrite',refined:'Cuivre'},processLabels:{ore:'Raffiner en cuivre'},
      facts:{
        ore:'La chalcopyrite est un sulfure de cuivre et de fer et l’un des minéraux cuprifères les plus répandus.',
        refined:'Le cuivre est apprécié pour sa conductivité, sa résistance à la corrosion et sa facilité de mise en forme.'
      },
      mastery:'La chalcopyrite fraîche est jaune laiton, mais l’altération peut produire des irisations colorées parfois confondues avec celles de la bornite.'
    },
    cassiterite:{
      name:'Cassitérite',subtitle:'Minerai d’étain → Étain',signatureLabel:'Oxyde d’étain',
      stageLabels:{ore:'Minerai de cassitérite',refined:'Étain'},processLabels:{ore:'Raffiner en étain'},
      facts:{
        ore:'La cassitérite est un oxyde d’étain et le principal minerai dont on tire la majorité de l’étain.',
        refined:'L’étain est un métal mou et résistant à la corrosion, utilisé dans les soudures, les revêtements et des alliages comme le bronze.'
      },
      mastery:'L’étain a transformé la métallurgie : allié au cuivre, il produit le bronze, matériau essentiel à de nombreuses technologies anciennes.'
    },
    galena:{
      name:'Galène',subtitle:'Minerai de plomb → Plomb',signatureLabel:'Sulfure de plomb',
      stageLabels:{ore:'Minerai de galène',refined:'Plomb'},processLabels:{ore:'Raffiner en plomb'},
      facts:{
        ore:'La galène est un sulfure de plomb et le principal minerai de plomb. Elle forme souvent des cristaux cubiques au lustre métallique.',
        refined:'Le plomb est dense, mou et facile à façonner, mais il est aussi toxique et doit être manipulé avec prudence dans la vraie vie.'
      },
      mastery:'La galène peut contenir de petites quantités d’argent; certains gisements de plomb ont donc aussi été d’importantes sources d’argent.'
    },
    sphalerite:{
      name:'Sphalérite',subtitle:'Minerai de zinc → Zinc',signatureLabel:'Sulfure de zinc',
      stageLabels:{ore:'Minerai de sphalérite',refined:'Zinc'},processLabels:{ore:'Raffiner en zinc'},
      facts:{
        ore:'La sphalérite est un sulfure de zinc et le principal minerai de zinc. Sa couleur va du jaune-brun pâle jusqu’au presque noir.',
        refined:'Le zinc sert beaucoup à protéger l’acier contre la corrosion par galvanisation et entre aussi dans la composition du laiton.'
      },
      mastery:'Certaines sphalérites brillent sous la lumière ultraviolette, et quelques spécimens montrent une fluorescence particulièrement vive.'
    },
    trilobite:{
      name:'Trilobite',subtitle:'Arthropode fossile',signatureLabel:'Matière biologique fossilisée',
      stageLabels:{found:'Spécimen fossile'},processLabels:{},
      facts:{found:'Les trilobites étaient des arthropodes marins présents pendant des centaines de millions d’années. Ils ont disparu lors de l’extinction de masse de la fin du Permien.'}
    },
    ammonite:{
      name:'Ammonite',subtitle:'Céphalopode marin fossile',signatureLabel:'Matière biologique fossilisée',
      stageLabels:{found:'Spécimen fossile'},processLabels:{},
      facts:{found:'Les ammonites étaient des céphalopodes marins à coquille, apparentés aux calmars et aux pieuvres modernes. Leurs formes changeant rapidement, plusieurs espèces servent de fossiles repères.'}
    },
    crinoidStem:{
      name:'Tige de crinoïde',subtitle:'Fragment d’animal marin fossile',signatureLabel:'Matière biologique fossilisée',
      stageLabels:{found:'Spécimen fossile'},processLabels:{},
      facts:{found:'Les crinoïdes sont des animaux marins apparentés aux étoiles de mer. Leurs tiges se brisent souvent en petits disques qui se fossilisent facilement.'}
    },
    brachiopod:{
      name:'Brachiopode',subtitle:'Animal marin fossile',signatureLabel:'Matière biologique fossilisée',
      stageLabels:{found:'Spécimen fossile'},processLabels:{},
      facts:{found:'Les brachiopodes sont des animaux marins à deux coquilles. Ils peuvent ressembler à des palourdes, mais leur anatomie et leur histoire évolutive sont très différentes.'}
    },
    miningTag:{
      name:'Plaquette de mineur',subtitle:'Ancienne plaquette de contrôle',signatureLabel:'Objet historique',
      stageLabels:{found:'Objet historique'},processLabels:{},
      facts:{found:'Certaines mines utilisaient des plaquettes numérotées pour savoir qui se trouvait sous terre. Les systèmes variaient d’une exploitation à l’autre.'}
    },
    miningLamp:{
      name:'Vieille lampe de mineur',subtitle:'Ancien équipement souterrain',signatureLabel:'Objet historique',
      stageLabels:{found:'Objet historique'},processLabels:{},
      facts:{found:'L’éclairage souterrain a beaucoup évolué : flammes nues, lampes de sûreté, puis éclairage électrique. Les modèles plus sûrs étaient essentiels là où des gaz inflammables pouvaient s’accumuler.'}
    },
    surveyMarker:{
      name:'Repère d’arpentage usé',subtitle:'Ancien repère d’arpentage minier',signatureLabel:'Objet historique',
      stageLabels:{found:'Objet historique'},processLabels:{},
      facts:{found:'Les repères d’arpentage servent à conserver des positions mesurées sous terre afin de cartographier précisément les galeries et de les relier au plan général de la mine.'}
    },
    drillBit:{
      name:'Vieux trépan',subtitle:'Ancien équipement de forage',signatureLabel:'Objet historique',
      stageLabels:{found:'Objet historique'},processLabels:{},
      facts:{found:'Les outils de forage ont transformé l’exploitation de la roche dure en accélérant le perçage des trous destinés au dynamitage et à l’excavation.'}
    }
  };

  Object.entries(FR_MATERIALS).forEach(([key,fr])=>{
    const m=MATERIALS[key];
    if(!m)return;
    m.name=fr.name;
    m.subtitle=fr.subtitle;
    if(m.signature&&fr.signatureLabel)m.signature.label=fr.signatureLabel;
    if(fr.stageLabels)m.stageLabels={...m.stageLabels,...fr.stageLabels};
    if(fr.processLabels)m.processLabels={...m.processLabels,...fr.processLabels};
    if(fr.facts)m.facts={...m.facts,...fr.facts};
    if(fr.mastery&&m.mastery)m.mastery.fact=fr.mastery;
  });

  WINGS[0].name='Salle des minéraux';
  WINGS[1].name='Minerais et métaux';
  WINGS[2].name='Aile des fossiles';
  WINGS[3].name='Aile historique';

  DEPTHS[1].name='Filon supérieur';
  DEPTHS[2].name='Galeries basses';
  DEPTHS[3].name='Galerie profonde';
  DEPTHS[4].name='Filons cristallins';

  DURABILITY_LEVELS[0].label='Pioche de base';
  DURABILITY_LEVELS[1].label='Manche renforcé';
  DURABILITY_LEVELS[2].label='Pioche d’acier';
  DURABILITY_LEVELS[3].label='Pioche de géologue';
  DURABILITY_LEVELS[4].label='Pioche pour travaux profonds';

  SURVEY_LEVELS[0]={...SURVEY_LEVELS[0],name:'Aucun',next:'Scanner de terrain',description:'Débloque le scanner de zone 3×3. Les premiers scans indiquent la chimie plutôt que le nom exact des gemmes.'};
  SURVEY_LEVELS[1]={...SURVEY_LEVELS[1],name:'Scanner de terrain',next:'Scanner spectral',description:'Indique la chimie et l’intensité du signal dans la zone 3×3 choisie. Les cases scannées restent marquées.'};
  SURVEY_LEVELS[2]={...SURVEY_LEVELS[2],name:'Scanner spectral',next:'Analyseur minéral',description:'Ajoute des renseignements sur la forme du dépôt et repère les signatures inhabituelles non minérales.'};
  SURVEY_LEVELS[3]={...SURVEY_LEVELS[3],name:'Analyseur minéral',description:'Identifie les minéraux exacts et distingue les fossiles des objets historiques.'};

  SCAN_CHARGE_LEVELS.forEach((x,i)=>x.label=`${x.uses} scan${x.uses===1?'':'s'} par paroi`);

  WORKSHOP_LEVELS[0]={...WORKSHOP_LEVELS[0],name:'Atelier de base',next:'Atelier de précision',description:'Traite le quartz, l’améthyste, le minerai de fer et le minerai de cuivre.'};
  WORKSHOP_LEVELS[1]={...WORKSHOP_LEVELS[1],name:'Atelier de précision',next:'Atelier lapidaire avancé',description:'Ajoute le grenat, la topaze, la citrine, la calcite, la fluorite, la cassitérite et d’autres matériaux intermédiaires.'};
  WORKSHOP_LEVELS[2]={...WORKSHOP_LEVELS[2],name:'Atelier lapidaire avancé',next:'Atelier lapidaire maître',description:'Peut traiter l’aigue-marine, le saphir, le quartz rose, la malachite, la galène et la sphalérite.'};
  WORKSHOP_LEVELS[3]={...WORKSHOP_LEVELS[3],name:'Atelier lapidaire maître',description:'Traite le rubis et l’émeraude. Le traitement reste gratuit.'};

  DEPTH_UPGRADES[2].description='Débloque la profondeur 2 : les Galeries basses, avec grenat, topaze, pyrite et de nouveaux fossiles.';
  DEPTH_UPGRADES[3].description='Débloque la profondeur 3 : la Galerie profonde, avec de nouvelles variétés de quartz, fluorite, béryl, corindon, minerai d’étain et objets historiques plus profonds.';
  DEPTH_UPGRADES[4].description='Débloque la profondeur 4 : les Filons cristallins, avec rubis, émeraude, quartz rose, malachite, minerais de plomb et de zinc, plus de nouveaux fossiles et artefacts.';

  const FR_ACHIEVEMENTS = {
    firstCrunch:['Premier crac','Mine ta première case.'],
    shiny:['Ça brille!','Trouve ton premier minéral ou minerai.'],
    museumPiece:['Pièce de musée','Fais ton premier don au musée.'],
    shelfRespect:['Respect de l’étagère','Complète ton premier ensemble de matériau.'],
    fossilFever:['Fièvre fossile','Donne trois fossiles différents.'],
    oldStuff:['Vieilles affaires','Donne trois objets historiques différents.'],
    foolMeOnce:['Pas de l’or','Trouve de la pyrite. Ce n’est toujours pas de l’or.'],
    sio2Enjoyer:['Fan de SiO₂','Trouve du quartz, de l’améthyste, de la citrine et du quartz rose.'],
    familyResemblance:['Un air de famille','Maîtrise le saphir et le rubis.'],
    berylBuddies:['Copains de béryl','Maîtrise l’aigue-marine et l’émeraude.'],
    metalhead:['Métalleux','Raffine au moins une fois du fer, du cuivre, de l’étain, du plomb et du zinc.'],
    prospector:['Prospecteur','Utilise le scanner de zone 25 fois.'],
    dejaVu:['Déjà vu','Scanne dix cases au moins deux fois.'],
    xrayish:['Presque des rayons X','Déterre quelque chose après avoir scanné sa case deux fois.'],
    beepBeep:['Bip bip','Utilise le détecteur de métaux pour la première fois.'],
    detectorist:['Détectoriste','Déterre une cible métallique dans une zone signalée par le détecteur.'],
    barelyThere:['Jusqu’au bout','Utilise le tout dernier point de durabilité d’une pioche.'],
    lastSwingLuck:['Coup de chance final','Trouve quelque chose avec le dernier coup de pioche.'],
    sellout:['Liquidation','Utilise Tout vendre dix fois.'],
    fourFloorsDown:['Quatre niveaux plus bas','Débloque la profondeur 4.'],
    shinyGoblin:['Gobelin à brillants','Trouve 100 spécimens au total.'],
    fullCoverage:['Large couverture','Scanne au moins la moitié d’une paroi rocheuse.'],
    allThatGlitters:['Tout ce qui brille','Maîtrise la citrine, la topaze et la pyrite.'],
    rockGoCrunch:['Rock Go Crunch','Tu te souvenais de l’ancien nom.']
  };
  ACHIEVEMENTS.forEach(a=>{if(FR_ACHIEVEMENTS[a.id]){a.name=FR_ACHIEVEMENTS[a.id][0];a.description=FR_ACHIEVEMENTS[a.id][1];}});

  const emptyInventory = () => Object.fromEntries(Object.entries(MATERIALS).map(([k,m]) => [k,Object.fromEntries(m.stages.map(s => [s,0]))]));
  const emptyCollection = () => Object.fromEntries(Object.entries(MATERIALS).map(([k,m]) => [k,Object.fromEntries(m.stages.map(s => [s,false]))]));
  const emptyStats = () => Object.fromEntries(Object.keys(MATERIALS).map(k => [k,{found:0,sold:0,donated:0,processed:0,earned:0}]));

  const defaultState = () => ({
    credits:0,
    sound:true,
    unlockedDepth:1,
    currentDepth:1,
    upgrades:{durability:0,surveying:0,workshop:0,scannerUses:0,metalDetector:false},
    settings:{autoProcessByMaterial:{}},
    inventory:emptyInventory(),
    collection:emptyCollection(),
    stats:emptyStats(),
    achievements:{},
    meta:{
      tilesMined:0,scansUsed:0,doubleScans:0,anomalyFinds:0,metalSweeps:0,metalSignalFinds:0,
      facesFinished:0,lastSwingFinds:0,sellAllUses:0,fullSurveyFaces:0,taglineTaps:0
    },
    face:null
  });

  let state = loadState();
  let openWorkbenchKey = null;
  let toastTimer = null;
  let audioContext = null;
  let scanMode = false;
  let activePanel = 'mine';

  const $ = id => document.getElementById(id);
  const els = {
    depthName:$('depthName'), depthNumber:$('depthNumber'), durability:$('durability'), maxDurability:$('maxDurability'), durabilityMeter:$('durabilityMeter'),
    surveyLevel:$('surveyLevel'), scanUseSummary:$('scanUseSummary'), mineBalance:$('mineBalance'), depthSelector:$('depthSelector'), surveyTitle:$('surveyTitle'), surveyReport:$('surveyReport'), scanButton:$('scanButton'),
    detectorTitle:$('detectorTitle'), detectorReport:$('detectorReport'), metalDetectorButton:$('metalDetectorButton'),
    mineBoard:$('mineBoard'), faceFinds:$('faceFinds'), newFaceButton:$('newFaceButton'), surfaceButton:$('surfaceButton'), mineMessage:$('mineMessage'),
    workbenchList:$('workbenchList'), masteredSellValue:$('masteredSellValue'), sellAllMasteredButton:$('sellAllMasteredButton'), museumWings:$('museumWings'), museumCount:$('museumCount'), museumMeter:$('museumMeter'),
    achievementGrid:$('achievementGrid'), achievementCount:$('achievementCount'), achievementMeter:$('achievementMeter'),
    shopBalance:$('shopBalance'), upgradeList:$('upgradeList'), soundToggle:$('soundToggle'), resetButton:$('resetButton'), toast:$('toast'),
    mobileMineHud:$('mobileMineHud'), mobileDurability:$('mobileDurability'), mobileScans:$('mobileScans'),
    gameTitle:$('gameTitle'), gameTagline:$('gameTagline')
  };

  init();

  function init(){
    if(!state.face || state.face.depth !== state.currentDepth){
      state.face = generateFace(state.currentDepth);
    }else{
      normalizeFace(state.face);
    }

    checkAchievements(true);
    saveState();

    document.querySelectorAll('.nav-button').forEach(btn => btn.addEventListener('click',() => switchPanel(btn)));
    els.newFaceButton.addEventListener('click',startNewFace);
    els.surfaceButton.addEventListener('click',startNewFace);
    els.scanButton.addEventListener('click',toggleScanMode);
    els.metalDetectorButton.addEventListener('click',useMetalDetector);
    els.sellAllMasteredButton.addEventListener('click',sellAllMastered);
    els.soundToggle.addEventListener('click',() => {state.sound=!state.sound;saveState();renderSoundButton();if(state.sound)playTone('soft');});
    els.resetButton.addEventListener('click',resetGame);
    if(els.gameTagline)els.gameTagline.addEventListener('click',()=>{state.meta.taglineTaps++;checkAchievements();saveState();});

    renderAll();
  }

  function loadState(){
    try{
      const raw = localStorage.getItem(SAVE_KEY);
      if(!raw) return defaultState();

      const parsed = JSON.parse(raw);
      const fresh = defaultState();
      const merged = {
        ...fresh,
        ...parsed,
        upgrades:{...fresh.upgrades,...(parsed.upgrades||{})},
        settings:{...fresh.settings,...(parsed.settings||{}),autoProcessByMaterial:{...(parsed.settings?.autoProcessByMaterial||{})}},
        inventory:fresh.inventory,
        collection:fresh.collection,
        stats:fresh.stats,
        achievements:{...(parsed.achievements||{})},
        meta:{...fresh.meta,...(parsed.meta||{})}
      };

      Object.entries(MATERIALS).forEach(([k,m]) => {
        m.stages.forEach(stage => {
          merged.inventory[k][stage] = parsed.inventory?.[k]?.[stage] ?? 0;
          merged.collection[k][stage] = parsed.collection?.[k]?.[stage] ?? false;
        });
        merged.stats[k] = {...fresh.stats[k],...(parsed.stats?.[k]||{})};
      });

      // v2.1 migration: if global automation was on, keep it on for materials
      // that are already mastered in the migrated save.
      if(parsed.settings?.autoProcess === true){
        Object.keys(MATERIALS).forEach(k => {
          if(hasProcessing(k) && MATERIALS[k].stages.every(stage => merged.collection[k][stage])){
            merged.settings.autoProcessByMaterial[k] = true;
          }
        });
      }

      merged.unlockedDepth = Math.max(1,Math.min(4,merged.unlockedDepth||1));
      merged.currentDepth = Math.max(1,Math.min(merged.unlockedDepth,merged.currentDepth||1));
      merged.upgrades.workshop = Math.max(0,Math.min(WORKSHOP_LEVELS.length-1,merged.upgrades.workshop||0));
      merged.upgrades.scannerUses = Math.max(0,Math.min(SCAN_CHARGE_LEVELS.length-1,merged.upgrades.scannerUses||0));
      merged.upgrades.surveying = Math.max(0,Math.min(SURVEY_LEVELS.length-1,merged.upgrades.surveying||0));
      merged.upgrades.durability = Math.max(0,Math.min(DURABILITY_LEVELS.length-1,merged.upgrades.durability||0));
      merged.upgrades.metalDetector = !!merged.upgrades.metalDetector;

      return merged;
    }catch{
      return defaultState();
    }
  }

  function saveState(){ localStorage.setItem(SAVE_KEY,JSON.stringify(state)); }
  function formatMoney(cents){ const v=Math.max(0,Math.round(cents||0)); return v<100?`${v}¢`:`$${(v/100).toFixed(2)}`; }
  function randInt(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
  function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }
  function totalInventory(k){ return Object.values(state.inventory[k]||{}).reduce((a,n)=>a+n,0); }
  function isBulkSellEligible(k){
    const m=MATERIALS[k];
    return (m.family==='mineral'||m.family==='ore') && isMastered(k);
  }
  function masteredSellSummary(){
    let items=0,value=0;
    Object.entries(MATERIALS).forEach(([k,m])=>{
      if(!isBulkSellEligible(k))return;
      m.stages.forEach(stage=>{
        const count=state.inventory[k][stage]||0;
        items+=count;
        value+=count*(m.prices[stage]||0);
      });
    });
    return {items,value};
  }
  function hasProcessing(k){ return Object.keys(MATERIALS[k].process||{}).length>0; }
  function currentMaxScans(){ return SCAN_CHARGE_LEVELS[state.upgrades.scannerUses].uses; }

  function totalFound(){ return Object.values(state.stats).reduce((sum,x)=>sum+(x.found||0),0); }
  function countCollectedFamily(family){
    return Object.entries(MATERIALS).filter(([,m])=>m.family===family).reduce((sum,[k,m])=>sum+m.stages.filter(stage=>state.collection[k]?.[stage]).length,0);
  }
  function isMetalTarget(k){ return !!MATERIALS[k]?.metalDetectable; }

  function weightedChoice(source){
    const entries=Array.isArray(source)?source.map(x=>[x.key,x.weight]):Object.entries(source);
    let total=entries.reduce((a,[,w])=>a+w,0),r=Math.random()*total;
    for(const [k,w] of entries){r-=w;if(r<=0)return k;}
    return entries[entries.length-1][0];
  }

  function neighbors(index){
    const r=Math.floor(index/GRID_SIZE),c=index%GRID_SIZE,out=[];
    [[r-1,c],[r+1,c],[r,c-1],[r,c+1]].forEach(([rr,cc])=>{if(rr>=0&&rr<GRID_SIZE&&cc>=0&&cc<GRID_SIZE)out.push(rr*GRID_SIZE+cc);});
    return out;
  }

  function scanAreaIndices(index){
    const r=Math.floor(index/GRID_SIZE),c=index%GRID_SIZE,out=[];
    for(let rr=r-1;rr<=r+1;rr++){
      for(let cc=c-1;cc<=c+1;cc++){
        if(rr>=0&&rr<GRID_SIZE&&cc>=0&&cc<GRID_SIZE)out.push(rr*GRID_SIZE+cc);
      }
    }
    return out;
  }

  function normalizeFace(face){
    if(!Array.isArray(face.hints)) face.hints = generateProspectHints(face);
    if(!face.finds) face.finds = {};
    if(!Array.isArray(face.scanHistory)) face.scanHistory = [];
    if(face.lastScan === undefined) face.lastScan = null;
    if(face.metalDetectorUsed === undefined) face.metalDetectorUsed = false;
    if(!Array.isArray(face.metalSignalTiles)) face.metalSignalTiles = [];
    if(face.fullCoverageAwarded === undefined) face.fullCoverageAwarded = false;

    if(!Array.isArray(face.scanCounts) || face.scanCounts.length!==GRID_SIZE*GRID_SIZE){
      face.scanCounts = Array(GRID_SIZE*GRID_SIZE).fill(0);
      const oldHistory = Array.isArray(face.scanHistory)?face.scanHistory:[];
      oldHistory.forEach(entry => {
        const center = typeof entry==='number'?entry:entry?.center;
        if(Number.isInteger(center)) scanAreaIndices(center).forEach(i => face.scanCounts[i]++);
      });
      if(!oldHistory.length && face.lastScan?.indices){
        face.lastScan.indices.forEach(i => {if(face.scanCounts[i]!==undefined)face.scanCounts[i]++;});
      }
    }

    if(face.scanUsesRemaining === undefined || face.scanUsesRemaining === null){
      face.scanUsesRemaining = state.upgrades.surveying>0 ? currentMaxScans() : 0;
    }else{
      face.scanUsesRemaining = Math.min(face.scanUsesRemaining,currentMaxScans());
    }
  }

  function generateProspectHints(face){
    const count=randInt(1,3),chosen=new Set();
    const geological=face.tiles.filter(t=>t.material && !['fossil','artifact'].includes(MATERIALS[t.material].family));
    for(let i=0;i<count;i++){
      let candidate;
      if(geological.length && Math.random()<.82){
        const target=geological[randInt(0,geological.length-1)].index;
        const nearby=[target,...neighbors(target)];
        candidate=nearby[randInt(0,nearby.length-1)];
      }else{
        candidate=randInt(0,face.tiles.length-1);
      }
      let guard=0;
      while(chosen.has(candidate)&&guard<30){candidate=randInt(0,face.tiles.length-1);guard++;}
      chosen.add(candidate);
    }
    return [...chosen];
  }

  function generateFace(depth){
    const tiles=Array.from({length:GRID_SIZE*GRID_SIZE},(_,i)=>({index:i,revealed:false,material:null,depositId:null,depositType:null}));
    const deposits=[];
    let nextId=0;

    function placeDeposit(material,size,type){
      for(let attempt=0;attempt<100;attempt++){
        const empty=tiles.filter(t=>!t.material);
        if(!empty.length)return false;
        const chosen=[empty[randInt(0,empty.length-1)].index],set=new Set();
        set.add(chosen[0]);
        while(chosen.length<size){
          const frontier=[];
          chosen.forEach(i=>neighbors(i).forEach(n=>{if(!set.has(n)&&!tiles[n].material&&!frontier.includes(n))frontier.push(n);}));
          if(!frontier.length)break;
          const n=frontier[randInt(0,frontier.length-1)];
          chosen.push(n);set.add(n);
        }
        if(chosen.length!==size)continue;
        const id=`d${nextId++}`;
        chosen.forEach(i=>Object.assign(tiles[i],{material,depositId:id,depositType:type}));
        deposits.push({id,material,type,size,announced:false});
        return true;
      }
      return false;
    }

    const cfg=DEPTHS[depth];
    placeDeposit(weightedChoice(cfg.materials),randInt(5,8),'large');
    for(let i=0;i<randInt(depth>=3?4:3,depth>=3?5:4);i++)placeDeposit(weightedChoice(cfg.materials),randInt(2,4),'small');
    for(let i=0;i<randInt(3,5);i++)placeDeposit(weightedChoice(cfg.materials),1,'isolated');
    if(Math.random()<(depth>=3?.32:depth===2?.27:.24))placeDeposit(weightedChoice(cfg.sideFinds),1,'side');
    if(Math.random()<(depth>=3?.085:depth===2?.055:.045))placeDeposit(weightedChoice(cfg.sideFinds),1,'side');

    const face={
      depth,size:GRID_SIZE,
      durability:DURABILITY_LEVELS[state.upgrades.durability].swings,
      finds:{},tiles,deposits,hints:[],
      scanUsesRemaining:state.upgrades.surveying>0?currentMaxScans():0,
      scanHistory:[],scanCounts:Array(GRID_SIZE*GRID_SIZE).fill(0),lastScan:null,
      metalDetectorUsed:false,metalSignalTiles:[],fullCoverageAwarded:false
    };
    face.hints=generateProspectHints(face);
    return face;
  }

  function switchPanel(btn){
    const target=btn.dataset.target;
    activePanel=target;
    scanMode=false;
    document.querySelectorAll('.nav-button').forEach(b=>b.classList.toggle('active',b===btn));
    document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',p.dataset.panel===target));
    if(target==='workbench')renderWorkbench();
    if(target==='museum')renderMuseum();
    if(target==='achievements')renderAchievements();
    if(target==='upgrades')renderUpgrades();
    renderMobileHud();
  }

  function startNewFace(){
    scanMode=false;
    state.face=generateFace(state.currentDepth);
    saveState();
    setMineMessage('⛏️','Nouvelle paroi rocheuse.','Observe les faibles indices géologiques, sonde les zones prometteuses, puis commence à creuser.');
    playTone('soft');
    renderMine();
    showToast('Nouvelle paroi rocheuse.');
  }

  function setDepth(d){
    if(d>state.unlockedDepth||d===state.currentDepth)return;
    scanMode=false;
    state.currentDepth=d;
    state.face=generateFace(d);
    saveState();
    renderMine();
    showToast(`${DEPTHS[d].name} sélectionnée.`);
  }

  function toggleScanMode(){
    if(state.upgrades.surveying===0){showToast('Débloque d’abord le scanner de terrain.');return;}
    if(state.face.scanUsesRemaining<=0){showToast('Aucun scan restant sur cette paroi.');return;}
    scanMode=!scanMode;
    if(scanMode){
      setMineMessage('⌁','Scanner prêt.','Touche une case pour scanner la zone 3×3 autour. Scanne une zone deux fois et une case occupée peut montrer une très légère ombre de densité.');
    }else{
      setMineMessage('⛏️','Scan annulé.','Retour au minage.');
    }
    renderMine();
  }

  function handleTile(index){ if(scanMode)scanAt(index);else mineTile(index); }

  function scanAt(index){
    if(state.upgrades.surveying===0||state.face.scanUsesRemaining<=0)return;
    const indices=scanAreaIndices(index);
    const results=analyzeScan(indices,state.upgrades.surveying);
    const newlyDoubled=indices.filter(i=>(state.face.scanCounts[i]||0)===1).length;
    indices.forEach(i=>state.face.scanCounts[i]=(state.face.scanCounts[i]||0)+1);
    state.meta.scansUsed++;
    state.meta.doubleScans+=newlyDoubled;
    state.face.scanUsesRemaining--;
    state.face.scanHistory.push({center:index,indices});
    state.face.lastScan={center:index,indices,results};
    if(!state.face.fullCoverageAwarded && state.face.scanCounts.filter(n=>n>0).length>=50){
      state.face.fullCoverageAwarded=true;
      state.meta.fullSurveyFaces++;
    }
    scanMode=false;
    checkAchievements();
    saveState();
    playTone('soft');
    setMineMessage('⌁','Scan terminé.',results.length?results[0].plain:'Aucune signature importante détectée.');
    renderMine();
  }


  function metalSignalZone(targetIndex){
    const targetRow=Math.floor(targetIndex/GRID_SIZE),targetCol=targetIndex%GRID_SIZE;
    const centerRow=Math.max(0,Math.min(GRID_SIZE-1,targetRow+randInt(-1,1)));
    const centerCol=Math.max(0,Math.min(GRID_SIZE-1,targetCol+randInt(-1,1)));
    const zone=[];
    for(let rr=centerRow-1;rr<=centerRow+1;rr++){
      for(let cc=centerCol-1;cc<=centerCol+1;cc++){
        if(rr>=0&&rr<GRID_SIZE&&cc>=0&&cc<GRID_SIZE)zone.push(rr*GRID_SIZE+cc);
      }
    }
    if(!zone.includes(targetIndex))zone.push(targetIndex);
    return zone;
  }

  function useMetalDetector(){
    if(!state.upgrades.metalDetector){showToast('Débloque d’abord le détecteur de métaux.');return;}
    if(state.face.metalDetectorUsed){showToast('Le détecteur de métaux a déjà balayé cette paroi.');return;}

    const targets=state.face.tiles.filter(t=>!t.revealed&&t.material&&isMetalTarget(t.material));
    state.face.metalDetectorUsed=true;
    state.meta.metalSweeps++;

    const selected=[];
    const shuffled=[...targets].sort(()=>Math.random()-.5);
    shuffled.forEach(tile=>{
      if(selected.length>=3)return;
      const farEnough=selected.every(other=>{
        const r1=Math.floor(tile.index/GRID_SIZE),c1=tile.index%GRID_SIZE;
        const r2=Math.floor(other.index/GRID_SIZE),c2=other.index%GRID_SIZE;
        return Math.abs(r1-r2)+Math.abs(c1-c2)>=3;
      });
      if(farEnough)selected.push(tile);
    });
    if(!selected.length && targets.length)selected.push(targets[0]);

    const marked=new Set();
    selected.forEach(tile=>metalSignalZone(tile.index).forEach(i=>marked.add(i)));
    state.face.metalSignalTiles=[...marked];

    checkAchievements();
    saveState();
    playTone('soft');
    if(selected.length){
      setMineMessage('🧲','Balayage métallique terminé.',`${selected.length} zone${selected.length===1?'':'s'} de signal large${selected.length===1?'':'s'} détectée${selected.length===1?'':'s'}. Les zones surlignées sont volontairement imprécises.`);
      showToast(`${selected.length} zone${selected.length===1?'':'s'} de signal métallique détectée${selected.length===1?'':'s'}.`);
    }else{
      setMineMessage('🧲','Balayage métallique terminé.','Aucune cible métallique forte détectée sur cette paroi.');
      showToast('Aucun signal métallique fort détecté.');
    }
    renderMine();
  }


  function signalStrength(count){ if(count>=4)return 'Fort';if(count>=2)return 'Modéré';return 'Faible'; }
  function depositPattern(types){
    if(types.has('large'))return 'grand dépôt connecté';
    if(types.has('small'))return 'petit dépôt connecté';
    if(types.has('isolated'))return 'signature isolée';
    return 'signature localisée';
  }

  function analyzeScan(indices,level){
    const occupied=indices.map(i=>state.face.tiles[i]).filter(t=>t&&t.material);
    if(!occupied.length)return [{html:'Aucune signature minérale importante détectée.',plain:'Aucune signature minérale importante détectée.'}];

    const results=[];
    const side=occupied.filter(t=>['fossil','artifact'].includes(MATERIALS[t.material].family));
    const geo=occupied.filter(t=>!['fossil','artifact'].includes(MATERIALS[t.material].family));

    if(level<3){
      const groups=new Map();
      geo.forEach(tile=>{
        const sig=MATERIALS[tile.material].signature;
        if(!groups.has(sig.id))groups.set(sig.id,{sig,count:0,types:new Set()});
        const g=groups.get(sig.id);g.count++;g.types.add(tile.depositType);
      });
      [...groups.values()].sort((a,b)=>b.count-a.count).forEach(g=>{
        const strength=signalStrength(g.count);
        const chemistry=`${g.sig.label}${g.sig.formula&&g.sig.formula!=='variable'?` · ${g.sig.formula}`:''}`;
        const extra=level>=2?` · ${depositPattern(g.types)}`:'';
        results.push({html:`<strong>${strength}</strong> signature de ${chemistry}${extra}`,plain:`${strength} signature de ${chemistry}${extra}`});
      });
      if(side.length){
        const msg=level===1?'Anomalie non classée détectée.':'Signature non minérale inhabituelle détectée.';
        results.push({html:`<strong>${msg}</strong>`,plain:msg});
      }
    }else{
      const groups=new Map();
      geo.forEach(tile=>{
        if(!groups.has(tile.material))groups.set(tile.material,{count:0,types:new Set()});
        const g=groups.get(tile.material);g.count++;g.types.add(tile.depositType);
      });
      [...groups.entries()].sort((a,b)=>b[1].count-a[1].count).forEach(([key,g])=>{
        const strength=signalStrength(g.count);
        results.push({html:`<strong>${strength} ${MATERIALS[key].name}</strong> · ${depositPattern(g.types)}`,plain:`${strength} ${MATERIALS[key].name} · ${depositPattern(g.types)}`});
      });
      const fossilCount=side.filter(t=>MATERIALS[t.material].family==='fossil').length;
      const artifactCount=side.filter(t=>MATERIALS[t.material].family==='artifact').length;
      if(fossilCount)results.push({html:'<strong>Signature fossile détectée.</strong>',plain:'Signature fossile détectée.'});
      if(artifactCount)results.push({html:'<strong>Signature d’objet historique détectée.</strong>',plain:'Signature d’objet historique détectée.'});
    }

    return results.length?results:[{html:'Aucune signature minérale importante détectée.',plain:'Aucune signature minérale importante détectée.'}];
  }

  function mineTile(index){
    const face=state.face,tile=face.tiles[index];
    if(!tile||tile.revealed||face.durability<=0)return;
    tile.revealed=true;
    face.durability--;
    state.meta.tilesMined++;

    const hadDoubleScan=(face.scanCounts?.[index]||0)>=2;
    const inMetalZone=(face.metalSignalTiles||[]).includes(index);

    if(tile.material){
      collectFind(tile.material);
      face.finds[tile.material]=(face.finds[tile.material]||0)+1;
      if(hadDoubleScan)state.meta.anomalyFinds++;
      if(inMetalZone&&isMetalTarget(tile.material))state.meta.metalSignalFinds++;
      if(face.durability===0)state.meta.lastSwingFinds++;
      const m=MATERIALS[tile.material];
      playTone('gem',tile.material);
      setMineMessage('✦',`${m.name}!`,findMessage(tile.material));
      showToast(`Nouvelle trouvaille : ${m.name}!`);
      maybeAnnounceDeposit(tile.depositId);
    }else{
      playTone('crunch');
      setMineMessage('🪨','Crac.','Rien dans cette case. Essaie ailleurs.');
    }

    if(face.durability<=0){
      state.meta.facesFinished++;
      setMineMessage('⛏️','Pioche usée.','Cette paroi est terminée. Retourne à la surface pour en obtenir une nouvelle; aucun temps d’attente.');
      showToast('Paroi terminée. Aucun temps d’attente.');
    }

    checkAchievements();
    saveState();
    renderMine();
    renderWorkbench();
  }

  function collectFind(k){
    const m=MATERIALS[k],stage=m.stages[0];
    state.inventory[k][stage]++;
    state.stats[k].found++;
    if(canAutoProcess(k) && state.settings.autoProcessByMaterial[k])autoProcessOne(k);
  }

  function canProcessMaterial(k){ return state.upgrades.workshop >= (MATERIALS[k].workshopRequired||0); }
  function canAutoProcess(k){ return hasProcessing(k) && isMastered(k) && canProcessMaterial(k); }

  function autoProcessOne(k){
    if(!canAutoProcess(k))return;
    const m=MATERIALS[k];
    let current=m.stages[0],guard=0;
    while(m.process?.[current] && state.inventory[k][current]>0 && guard<6){
      const next=m.process[current];
      state.inventory[k][current]--;
      state.inventory[k][next]++;
      state.stats[k].processed++;
      current=next;
      guard++;
    }
  }

  function maybeAnnounceDeposit(id){
    const d=state.face.deposits.find(x=>x.id===id);
    if(!d||d.announced||['isolated','side'].includes(d.type))return;
    const count=state.face.tiles.filter(t=>t.depositId===id&&t.revealed).length;
    const threshold=d.type==='large'?3:2;
    if(count>=threshold){
      d.announced=true;
      showToast(`${d.type==='large'?'Gros filon':'Filon'} découvert : ${MATERIALS[d.material].name}`);
    }
  }

  function findMessage(k){
    return ({
      quartz:'Un spécimen de quartz. Commun ne veut pas dire inutile.',
      amethyst:'Du quartz violet. Il y en a peut-être d’autres tout près.',
      hematite:'Hématite : un minerai de fer. Raffine-la ou garde le spécimen naturel.',
      chalcopyrite:'Chalcopyrite : un minerai contenant du cuivre.',
      garnet:'Un grenat provenant des Galeries basses.',
      topaz:'Topaze. Dure, brillante et à manipuler avec soin.',
      pyrite:'Pyrite. Métallique, couleur laiton, et absolument pas de l’or raté.',
      citrine:'Citrine : du quartz aux tons chauds de la Galerie profonde.',
      calcite:'Calcite. Commune, importante et bien plus tendre que le quartz.',
      fluorite:'Fluorite. Cristaux cubiques, couleurs folles et future vedette de la lampe UV.',
      aquamarine:'Aigue-marine : béryl bleu-vert. Il faudra du bon équipement pour la travailler.',
      sapphire:'Saphir : du corindon gemme, parmi les gemmes courantes les plus dures.',
      roseQuartz:'Quartz rose : encore du quartz, mais cette fois en rose.',
      malachite:'Malachite : minéral de cuivre vert vif aux bandes impossibles à manquer.',
      ruby:'Rubis : corindon rouge. Même famille minérale que le saphir, couleur très différente.',
      emerald:'Émeraude : béryl vert, de la même famille que l’aigue-marine.',
      cassiterite:'Cassitérite : le principal minerai d’étain.',
      galena:'Galène : minerai de plomb dense et métallique qui aime former des cubes.',
      sphalerite:'Sphalérite : le principal minerai de zinc.',
      trilobite:'Un fossile! L’aile des fossiles aimerait te parler.',
      ammonite:'Une ammonite! Un fossile en spirale venu d’une mer ancienne.',
      crinoidStem:'Une tige de crinoïde fossile : un petit morceau d’un ancien animal marin.',
      brachiopod:'Un brachiopode fossile. Ça ressemble à une palourde, mais ce n’en est vraiment pas une.',
      miningTag:'Une ancienne plaquette de mineur. Quelqu’un travaillait ici bien avant toi.',
      miningLamp:'Une vieille lampe de mineur. Un morceau de l’histoire humaine de la mine a survécu ici.',
      surveyMarker:'Un repère d’arpentage usé. Quelqu’un a cartographié cet endroit bien avant toi.',
      drillBit:'Un vieux trépan. L’exploitation de roche dure laisse du matériel derrière elle.'
    })[k]||'Something interesting came out of the rock.';
  }

  function setMineMessage(icon,title,body){
    els.mineMessage.innerHTML=`<span class="message-icon">${icon}</span><div><strong>${title}</strong><p>${body}</p></div>`;
  }

  function renderAll(){
    renderMine();renderWorkbench();renderMuseum();renderAchievements();renderUpgrades();renderSoundButton();renderMobileHud();
  }

  function renderMine(){
    const f=state.face,max=DURABILITY_LEVELS[state.upgrades.durability].swings;
    els.depthName.textContent=DEPTHS[state.currentDepth].name;
    els.depthNumber.textContent=`Profondeur ${state.currentDepth}`;
    els.durability.textContent=f.durability;
    els.maxDurability.textContent=max;
    els.durabilityMeter.style.width=`${Math.max(0,f.durability/max*100)}%`;
    els.surveyLevel.textContent=SURVEY_LEVELS[state.upgrades.surveying].name;
    els.mineBalance.textContent=formatMoney(state.credits);
    els.scanUseSummary.textContent=state.upgrades.surveying>0?`${f.scanUsesRemaining}/${currentMaxScans()} scans restants`:'verrouillé';
    renderDepthSelector();renderSurvey();renderMetalDetector();renderBoard();renderFaceFinds();renderMobileHud();
  }

  function renderDepthSelector(){
    els.depthSelector.innerHTML='';
    Object.keys(DEPTHS).forEach(x=>{
      const d=Number(x),b=document.createElement('button');
      b.type='button';b.className=`depth-chip ${d===state.currentDepth?'active':''}`;b.disabled=d>state.unlockedDepth;
      b.textContent=d<=state.unlockedDepth?`Profondeur ${d} · ${DEPTHS[d].name}`:`Profondeur ${d} · Verrouillée`;
      b.addEventListener('click',()=>setDepth(d));els.depthSelector.appendChild(b);
    });
  }

  function renderSurvey(){
    const level=state.upgrades.surveying,f=state.face;
    els.surveyReport.innerHTML='';
    els.scanButton.classList.toggle('active',scanMode);

    if(level===0){
      els.surveyTitle.textContent='Aucun scanner';
      els.scanButton.textContent='Verrouillé';els.scanButton.disabled=true;
      els.surveyReport.innerHTML='<span class="survey-pill">La mine te donne quand même quelques faibles indices visuels. Améliore le scanner pour analyser des zones 3×3.</span>';
      return;
    }

    els.scanButton.disabled=f.scanUsesRemaining<=0;
    els.scanButton.textContent=scanMode?'Annuler':(f.scanUsesRemaining>0?'Scanner la zone':'Aucun scan');

    if(scanMode){
      els.surveyTitle.textContent=`Touche une case · ${f.scanUsesRemaining} scan${f.scanUsesRemaining===1?'':'s'} restant${f.scanUsesRemaining===1?'':'s'}`;
      els.surveyReport.innerHTML='<span class="survey-pill">Les cases scannées restent marquées. Scanne la même zone deux fois et une case occupée cachée peut montrer une légère ombre de densité.</span>';
      return;
    }

    els.surveyTitle.textContent=`${SURVEY_LEVELS[level].name} · ${f.scanUsesRemaining}/${currentMaxScans()} scans restants`;

    if(!f.lastScan){
      els.surveyReport.innerHTML=`<span class="survey-pill">${level<3?'Les premiers niveaux du scanner indiquent la chimie, pas le nom exact des gemmes.':'Cet analyseur peut identifier les minéraux exacts et les signatures inhabituelles.'}</span><span class="survey-pill">Toutes les cases sondées restent marquées pendant toute la paroi.</span>`;
      return;
    }

    f.lastScan.results.forEach(result=>{
      const line=document.createElement('div');line.className='scan-result-line';line.innerHTML=result.html;els.surveyReport.appendChild(line);
    });
    const overlapCount=f.lastScan.indices.filter(i=>(f.scanCounts[i]||0)>=2).length;
    if(overlapCount){
      const line=document.createElement('div');line.className='scan-result-line subtle';line.textContent=`${overlapCount} case${overlapCount===1?'':'s'} de ce passage ${overlapCount===1?'a':'ont'} maintenant été scannée${overlapCount===1?'':'s'} au moins deux fois. Surveille les très faibles ombres de densité.`;els.surveyReport.appendChild(line);
    }
  }


  function renderMetalDetector(){
    if(!els.metalDetectorButton)return;
    if(!state.upgrades.metalDetector){
      els.detectorTitle.textContent='Non débloqué';
      els.metalDetectorButton.textContent='Verrouillé';
      els.metalDetectorButton.disabled=true;
      els.detectorReport.innerHTML='<span class="survey-pill">Débloque le détecteur de métaux après avoir atteint les Galeries basses.</span>';
      return;
    }

    const used=!!state.face.metalDetectorUsed;
    els.detectorTitle.textContent=used?'Balayage terminé':'Un balayage complet disponible';
    els.metalDetectorButton.textContent=used?'Utilisé':'Balayer la paroi';
    els.metalDetectorButton.disabled=used;

    const zones=(state.face.metalSignalTiles||[]).length;
    if(used){
      els.detectorReport.innerHTML=zones
        ?'<span class="survey-pill anomaly">Les grandes zones de signal métallique restent surlignées sur la paroi.</span>'
        :'<span class="survey-pill">Aucune cible métallique forte n’a été détectée sur cette paroi.</span>';
    }else{
      els.detectorReport.innerHTML='<span class="survey-pill">Un balayage par paroi. Il peut suggérer où se trouvent des cibles conductrices ou métalliques, y compris certains objets historiques.</span>';
    }
  }

  function buildIcon(key,forTile=false,stage=null){
    const m=MATERIALS[key],span=document.createElement('span');
    if(!forTile)span.classList.add('material-icon');
    m.iconClass.split(' ').forEach(c=>span.classList.add(c));
    if(!forTile&&stage==='refined'&&key==='hematite'){span.classList.remove('hematite');span.classList.add('iron');}
    if(!forTile&&stage==='refined'&&key==='chalcopyrite'){span.classList.remove('chalcopyrite');span.classList.add('copper');}
    if(!forTile&&stage==='refined'&&key==='cassiterite'){span.classList.remove('cassiterite');span.classList.add('tin');}
    if(!forTile&&stage==='refined'&&key==='galena'){span.classList.remove('galena');span.classList.add('lead');}
    if(!forTile&&stage==='refined'&&key==='sphalerite'){span.classList.remove('sphalerite');span.classList.add('zinc');}
    if(forTile&&m.family==='mineral')span.classList.add('gem');
    if(forTile&&m.family==='ore')span.classList.add('ore');
    if(m.iconText)span.textContent=m.iconText;
    return span;
  }

  function renderBoard(){
    els.mineBoard.innerHTML='';
    const hints=new Set(state.face.hints||[]);

    state.face.tiles.forEach(t=>{
      const b=document.createElement('button');
      b.type='button';b.className='rock';b.setAttribute('aria-label',`Case minière ${t.index+1}`);
      const scans=state.face.scanCounts?.[t.index]||0;
      if(scans>=1)b.classList.add('scan-area');
      if(scans>=2)b.classList.add('scan-overlap');
      if((state.face.metalSignalTiles||[]).includes(t.index)&&!t.revealed)b.classList.add('metal-signal');
      if(scanMode)b.classList.add('scan-selectable');

      if(t.revealed){
        b.classList.add('revealed');
        if(t.material){
          b.classList.add('find');
          const i=buildIcon(t.material,true);i.classList.remove('material-icon');i.classList.add('tile-find');b.appendChild(i);
          b.setAttribute('aria-label',`Révélé : ${MATERIALS[t.material].name}`);
        }else{
          b.classList.add('empty');b.setAttribute('aria-label','Roche vide révélée');
        }
        if(!scanMode)b.disabled=true;
      }else{
        if(hints.has(t.index)){
          const mark=document.createElement('span');mark.className='prospect-mark';mark.setAttribute('aria-hidden','true');b.appendChild(mark);
        }
        if(scans>=2&&t.material){
          const shadow=document.createElement('span');shadow.className='scan-anomaly-shadow';shadow.setAttribute('aria-hidden','true');b.appendChild(shadow);
        }
        b.disabled=!scanMode&&state.face.durability<=0;
      }

      if(!b.disabled)b.addEventListener('click',()=>handleTile(t.index));
      els.mineBoard.appendChild(b);
    });
  }

  function renderFaceFinds(){
    const list=Object.entries(state.face.finds).filter(([,n])=>n>0).map(([k,n])=>`${n} ${MATERIALS[k].name}`);
    els.faceFinds.textContent=list.length?list.join(' · '):'Rien pour l’instant';
  }

  function renderMobileHud(){
    if(!els.mobileMineHud)return;
    els.mobileMineHud.classList.toggle('hidden',activePanel!=='mine');
    const max=DURABILITY_LEVELS[state.upgrades.durability].swings;
    els.mobileDurability.textContent=`⛏️ ${state.face.durability} / ${max}`;
    els.mobileScans.textContent=state.upgrades.surveying>0?`⌁ ${state.face.scanUsesRemaining} / ${currentMaxScans()}`:'⌁ verrouillé';
  }

  function renderWorkbench(){
    const bulk=masteredSellSummary();
    if(els.masteredSellValue)els.masteredSellValue.textContent=`${formatMoney(bulk.value)} · ${bulk.items} article${bulk.items===1?'':'s'}`;
    if(els.sellAllMasteredButton){
      els.sellAllMasteredButton.disabled=bulk.items<1;
      els.sellAllMasteredButton.textContent=bulk.items>0?`Tout vendre · ${formatMoney(bulk.value)}`:'Tout vendre';
    }

    els.workbenchList.innerHTML='';
    Object.entries(MATERIALS).forEach(([k,m])=>{
      const stock=totalInventory(k),mastered=isMastered(k);
      const card=document.createElement('article');
      card.className=`workbench-card ${openWorkbenchKey===k?'open':''} ${stock>0?'has-stock':''} ${mastered?'mastered':''}`;

      const toggle=document.createElement('button');
      toggle.type='button';toggle.className='accordion-toggle';toggle.setAttribute('aria-expanded',openWorkbenchKey===k?'true':'false');

      const alert=document.createElement('span');
      alert.className=`inventory-alert ${stock>0?'visible':''}`;
      alert.textContent=stock>0?`✦ ${stock}`:'';
      alert.setAttribute('aria-hidden',stock>0?'false':'true');
      toggle.appendChild(alert);

      toggle.appendChild(buildIcon(k));

      const main=document.createElement('div');main.className='accordion-main';
      main.innerHTML=`<h3>${m.name}</h3><div class="summary-chips">${m.stages.map(s=>`<span class="summary-chip">${m.stageLabels[s]} ${state.inventory[k][s]} · ${formatMoney(m.prices[s])}</span>`).join('')}</div>`;
      toggle.appendChild(main);

      const chev=document.createElement('span');chev.className='chevron';chev.textContent='⌄';toggle.appendChild(chev);
      toggle.addEventListener('click',()=>{openWorkbenchKey=openWorkbenchKey===k?null:k;renderWorkbench();});
      card.appendChild(toggle);

      const details=document.createElement('div');details.className='workbench-details';details.innerHTML=workbenchDetails(k);card.appendChild(details);
      els.workbenchList.appendChild(card);
    });

    els.workbenchList.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',workbenchAction));
  }

  function workbenchDetails(k){
    const m=MATERIALS[k],s=state.stats[k],mastered=isMastered(k);
    let automation='';
    if(hasProcessing(k)){
      if(mastered){
        const on=!!state.settings.autoProcessByMaterial[k];
        const equipmentReady=canProcessMaterial(k);
        automation=`<div class="material-auto-footer ${equipmentReady?'':'locked'}"><div><strong>Traitement auto</strong><span>${equipmentReady?'Nouvelles trouvailles → étape la plus avancée disponible.':`Nécessite ${WORKSHOP_LEVELS[m.workshopRequired||0].name}.`}</span></div><button class="toggle-switch ${on&&equipmentReady?'on':''}" data-action="toggle-auto" data-material="${k}" type="button" aria-label="Activer ou désactiver le traitement auto de ${m.name}" aria-pressed="${on&&equipmentReady?'true':'false'}" ${equipmentReady?'':'disabled'}></button></div>`;
      }else{
        automation=`<div class="material-auto-footer locked"><div><strong>Traitement auto</strong><span>Se débloque lorsque cet ensemble du musée est complet.</span></div></div>`;
      }
    }

    const rows=m.stages.map(stage=>{
      const count=state.inventory[k][stage],next=m.process?.[stage],can=canProcessMaterial(k),donated=state.collection[k][stage];
      return `<div class="stage-row"><div class="stage-copy"><strong>${m.stageLabels[stage]} · ${count} en inventaire</strong><span>${formatMoney(m.prices[stage])} l’unité</span>${next&&!can?`<span class="process-lock">Nécessite ${WORKSHOP_LEVELS[m.workshopRequired||0].name}</span>`:''}</div><div class="stage-actions">${next?`<button class="mini-button accent" data-action="process" data-material="${k}" data-stage="${stage}" ${count<1||!can?'disabled':''}>${m.processLabels[stage]}</button>`:''}<button class="mini-button donate" data-action="donate" data-material="${k}" data-stage="${stage}" ${count<1||donated?'disabled':''}>${donated?'Au musée':'Donner'}</button><button class="mini-button" data-action="sell" data-material="${k}" data-stage="${stage}" ${count<1?'disabled':''}>Vendre ${formatMoney(m.prices[stage])}</button></div></div>`;
    }).join('');

    return `<p class="material-subtitle">${m.subtitle}</p><div class="stats-grid"><div class="stat-box"><span>Trouvé</span><strong>${s.found}</strong></div><div class="stat-box"><span>Vendu</span><strong>${s.sold}</strong></div><div class="stat-box"><span>Donné</span><strong>${s.donated}</strong></div><div class="stat-box"><span>Traité</span><strong>${s.processed}</strong></div><div class="stat-box"><span>Gagné</span><strong>${formatMoney(s.earned)}</strong></div></div>${rows}${automation}`;
  }

  function workbenchAction(e){
    const b=e.currentTarget,k=b.dataset.material,stage=b.dataset.stage;
    if(b.dataset.action==='process')processOne(k,stage);
    if(b.dataset.action==='donate')donateOne(k,stage);
    if(b.dataset.action==='sell')sellOne(k,stage);
    if(b.dataset.action==='toggle-auto')toggleAutoProcess(k);
  }

  function processOne(k,stage){
    const m=MATERIALS[k],next=m.process?.[stage];
    if(!next||!canProcessMaterial(k)||state.inventory[k][stage]<1)return;
    state.inventory[k][stage]--;state.inventory[k][next]++;state.stats[k].processed++;
    checkAchievements();saveState();playTone('process');renderWorkbench();renderAchievements();showToast(`${m.name}: ${m.stageLabels[stage]} → ${m.stageLabels[next]}`);
  }

  function donateOne(k,stage){
    if(state.collection[k][stage]||state.inventory[k][stage]<1)return;
    const wasMastered=isMastered(k);
    state.inventory[k][stage]--;state.collection[k][stage]=true;state.stats[k].donated++;
    const nowMastered=isMastered(k);
    if(!wasMastered&&nowMastered&&hasProcessing(k))state.settings.autoProcessByMaterial[k]=true;
    checkAchievements();saveState();playTone('collection',k);renderAll();
    if(!wasMastered&&nowMastered){
      showToast(hasProcessing(k)?`${MATERIALS[k].name} collection complète — traitement auto débloqué ✦`:`${MATERIALS[k].name} collection complète ✦`);
    }else{
      showToast(`${MATERIALS[k].name} ajouté au musée ✦`);
    }
  }

  function sellOne(k,stage){
    if(state.inventory[k][stage]<1)return;
    const value=MATERIALS[k].prices[stage];
    state.inventory[k][stage]--;state.credits+=value;state.stats[k].sold++;state.stats[k].earned+=value;
    checkAchievements();saveState();playTone('coin');renderAll();showToast(`Vendu pour ${formatMoney(value)}.`);
  }

  function sellAllMastered(){
    const bulk=masteredSellSummary();
    if(bulk.items<1)return;

    let sold=0,value=0;
    Object.entries(MATERIALS).forEach(([k,m])=>{
      if(!isBulkSellEligible(k))return;
      m.stages.forEach(stage=>{
        const qty=state.inventory[k][stage]||0;
        if(qty<1)return;
        const stageValue=qty*(m.prices[stage]||0);
        state.inventory[k][stage]=0;
        state.stats[k].sold+=qty;
        state.stats[k].earned+=stageValue;
        sold+=qty;
        value+=stageValue;
      });
    });

    state.credits+=value;
    state.meta.sellAllUses++;
    checkAchievements();
    saveState();playTone('coin');renderAll();
    showToast(`${sold} article${sold===1?'':'s'} vendu${sold===1?'':'s'} en vrac pour ${formatMoney(value)}.`);
  }

  function toggleAutoProcess(k){
    if(!canAutoProcess(k))return;
    state.settings.autoProcessByMaterial[k]=!state.settings.autoProcessByMaterial[k];
    saveState();renderWorkbench();showToast(`${MATERIALS[k].name} traitement auto ${state.settings.autoProcessByMaterial[k]?'activé':'désactivé'}.`);
  }

  function isMastered(k){
    const m=MATERIALS[k];
    return !!m.mastery && m.stages.every(stage=>state.collection[k][stage]);
  }

  function renderMuseum(){
    els.museumWings.innerHTML='';
    let filledTotal=0;
    const total=Object.values(MATERIALS).reduce((a,m)=>a+m.stages.length,0);

    WINGS.forEach(w=>{
      const pairs=Object.entries(MATERIALS).filter(([,m])=>m.wing===w.id);
      let wf=0,wt=0;
      pairs.forEach(([k,m])=>{wt+=m.stages.length;wf+=m.stages.filter(s=>state.collection[k][s]).length;});
      filledTotal+=wf;

      const wing=document.createElement('section');wing.className='museum-wing';
      wing.innerHTML=`<div class="wing-heading"><h3>${w.name}</h3><span>${wf} / ${wt} remplis</span></div>`;

      pairs.forEach(([k,m])=>{
        const group=document.createElement('div');
        const gf=m.stages.filter(s=>state.collection[k][s]).length,mastered=isMastered(k);
        group.className=`museum-group ${mastered?'mastered':''}`;
        group.innerHTML=`<div class="museum-group-title"><strong>${m.name}</strong><span>${gf} / ${m.stages.length}</span></div>`;

        const grid=document.createElement('div');
        grid.className=`museum-specimen-grid ${m.stages.length>=3?'three':m.stages.length===2?'two':'one'}`;

        m.stages.forEach(stage=>{
          const filled=state.collection[k][stage];
          const column=document.createElement('div');column.className=`museum-specimen-column ${filled?'filled':''}`;
          const specimen=document.createElement('div');specimen.className='museum-specimen';
          const visual=document.createElement('div');visual.className='slot-visual';visual.appendChild(buildIcon(k,false,stage));specimen.appendChild(visual);
          specimen.insertAdjacentHTML('beforeend',`<strong class="slot-stage">${m.stageLabels[stage]}</strong>${filled?'':'<span class="slot-state">Pas encore obtenu</span>'}`);
          const fact=document.createElement('div');fact.className='specimen-fact-card';
          fact.innerHTML=filled?`<p>${m.facts[stage]}</p>`:'<p class="locked-fact">Donne cette forme au musée pour débloquer son fait.</p>';
          column.appendChild(specimen);column.appendChild(fact);grid.appendChild(column);
        });

        group.appendChild(grid);

        if(mastered&&m.mastery){
          const mastery=document.createElement('div');mastery.className='mastery-panel';
          const unlock=hasProcessing(k)?`<span class="mastery-unlock">⚙ Traitement auto débloqué</span>`:'';
          mastery.innerHTML=`<strong>✦ Découverte bonus</strong><p>${m.mastery.fact}</p>${unlock}`;
          group.appendChild(mastery);
        }

        wing.appendChild(group);
      });

      els.museumWings.appendChild(wing);
    });

    els.museumCount.textContent=`${filledTotal} / ${total}`;
    els.museumMeter.style.width=`${filledTotal/total*100}%`;
  }


  function checkAchievements(silent=false){
    let newlyUnlocked=[];
    ACHIEVEMENTS.forEach(a=>{
      if(state.achievements[a.id])return;
      let unlocked=false;
      try{unlocked=!!a.condition(state);}catch{unlocked=false;}
      if(unlocked){
        state.achievements[a.id]={unlockedAt:new Date().toISOString()};
        newlyUnlocked.push(a);
      }
    });
    if(newlyUnlocked.length&&!silent){
      const a=newlyUnlocked[newlyUnlocked.length-1];
      showToast(`Succès débloqué : ${a.name} 🏆`);
      playTone('collection');
    }
    if(newlyUnlocked.length)saveState();
    return newlyUnlocked;
  }

  function renderAchievements(){
    if(!els.achievementGrid)return;
    checkAchievements(true);
    const unlocked=ACHIEVEMENTS.filter(a=>state.achievements[a.id]).length;
    els.achievementCount.textContent=`${unlocked} / ${ACHIEVEMENTS.length}`;
    els.achievementMeter.style.width=`${unlocked/ACHIEVEMENTS.length*100}%`;
    els.achievementGrid.innerHTML='';

    ACHIEVEMENTS.forEach(a=>{
      const earned=!!state.achievements[a.id];
      const card=document.createElement('article');
      card.className=`achievement-card ${earned?'unlocked':'locked'} ${a.hidden&&!earned?'hidden-achievement':''}`;
      const name=a.hidden&&!earned?'???':a.name;
      const desc=a.hidden&&!earned?'Un succès caché.':a.description;
      card.innerHTML=`<div class="achievement-icon">${earned?a.icon:'?'}</div><div><strong>${name}</strong><p>${desc}</p>${earned?'<span class="achievement-state">Débloqué</span>':''}</div>`;
      els.achievementGrid.appendChild(card);
    });
  }

  function renderUpgrades(){
    els.shopBalance.textContent=formatMoney(state.credits);els.upgradeList.innerHTML='';
    [depthCard(),durabilityCard(),surveyCard(),scannerUsesCard(),metalDetectorCard(),workshopCard()].forEach(c=>els.upgradeList.appendChild(c));
  }

  function upgradeCard({icon,eyebrow,title,description,current,cost,label,disabled,onClick}){
    const card=document.createElement('article');card.className='upgrade-card';
    card.innerHTML=`<div class="upgrade-icon">${icon}</div><div class="upgrade-copy"><span class="status-label">${eyebrow}</span><h3>${title}</h3><p>${description}</p><span class="upgrade-current">${current}</span></div><div class="upgrade-action"><span class="price-tag">${cost===null?'MAX':formatMoney(cost)}</span><button class="primary-button" type="button" ${disabled?'disabled':''}>${label}</button></div>`;
    const b=card.querySelector('button');if(!disabled&&onClick)b.addEventListener('click',onClick);return card;
  }

  function depthCard(){
    const nextDepth=state.unlockedDepth+1;
    if(nextDepth>4)return upgradeCard({icon:'🪜',eyebrow:'Profondeur de la mine',title:'Filons cristallins débloqués',description:'Les quatre profondeurs de la Bêta 1.1 sont disponibles.',current:'Profondeurs 1 à 4 disponibles',cost:null,label:'Maximum bêta',disabled:true});
    const up=DEPTH_UPGRADES[nextDepth];
    return upgradeCard({icon:'🪜',eyebrow:'Profondeur de la mine',title:`Débloquer la profondeur ${nextDepth}`,description:up.description,current:`Actuel : profondeurs 1 à ${state.unlockedDepth}`,cost:up.cost,label:'Descendre',disabled:state.credits<up.cost,onClick:buyDepth});
  }

  function durabilityCard(){
    const i=state.upgrades.durability,cur=DURABILITY_LEVELS[i],max=cur.cost===null,next=max?null:DURABILITY_LEVELS[i+1];
    return upgradeCard({icon:'⛏️',eyebrow:'Durabilité de la pioche',title:max?cur.label:`${cur.swings} → ${next.swings} coups`,description:max?'La pioche la plus solide de cette bêta.':'Plus de coups par paroi. Aucune énergie ni minuterie de recharge.',current:`Actuel : ${cur.label} · ${cur.swings} coups`,cost:cur.cost,label:max?'Maximum bêta':'Améliorer la pioche',disabled:max||state.credits<cur.cost,onClick:buyDurability});
  }

  function surveyCard(){
    const cur=SURVEY_LEVELS[state.upgrades.surveying],max=cur.cost===null;
    return upgradeCard({icon:'⌁',eyebrow:'Analyse du scanner',title:max?cur.name:`Débloquer ${cur.next}`,description:cur.description,current:`Actuel : ${cur.name}`,cost:cur.cost,label:max?'Maximum bêta':'Améliorer le scanner',disabled:max||state.credits<cur.cost,onClick:buySurvey});
  }

  function scannerUsesCard(){
    const cur=SCAN_CHARGE_LEVELS[state.upgrades.scannerUses],max=cur.cost===null,next=max?null:SCAN_CHARGE_LEVELS[state.upgrades.scannerUses+1],locked=state.upgrades.surveying===0;
    return upgradeCard({
      icon:'📡',eyebrow:'Charges du scanner',title:max?cur.label:`${cur.uses} → ${next.uses} scans par paroi`,
      description:locked?'Débloque d’abord le scanner de terrain.':'Achète plus de scans par paroi. Les scans superposés réduisent la couverture, mais donnent des indices de position beaucoup plus forts.',
      current:`Actuel : ${cur.uses} scan${cur.uses===1?'':'s'} par paroi`,cost:max?null:cur.cost,label:max?'Maximum bêta':(locked?'Scanner verrouillé':'Ajouter un scan'),
      disabled:max||locked||state.credits<cur.cost,onClick:buyScannerUse
    });
  }


  function metalDetectorCard(){
    const owned=!!state.upgrades.metalDetector;
    const depthReady=state.unlockedDepth>=2;
    const cost=275;
    return upgradeCard({
      icon:'🧲',eyebrow:'Outil de prospection',title:owned?'Détecteur de métaux':'Débloquer le détecteur de métaux',
      description:owned?'Un balayage complet par paroi révèle de larges zones de signal métallique.':'Balaye toute la paroi une fois et surligne des zones approximatives pouvant contenir des cibles métalliques ou des objets historiques.',
      current:owned?'Actuel : détecteur de métaux équipé':(depthReady?'Disponible après avoir atteint les Galeries basses':'Atteins d’abord la profondeur 2'),
      cost:owned?null:cost,label:owned?'Équipé':(depthReady?'Acheter le détecteur':'Profondeur 2 requise'),
      disabled:owned||!depthReady||state.credits<cost,onClick:buyMetalDetector
    });
  }

  function workshopCard(){
    const i=state.upgrades.workshop,cur=WORKSHOP_LEVELS[i],max=cur.cost===null;
    return upgradeCard({icon:'🛠️',eyebrow:'Équipement d’atelier',title:max?cur.name:`Débloquer ${cur.next}`,description:cur.description,current:`Actuel : ${cur.name}`,cost:cur.cost,label:max?'Maximum bêta':'Améliorer l’atelier',disabled:max||state.credits<cur.cost,onClick:buyWorkshop});
  }

  function buyDepth(){
    const nextDepth=state.unlockedDepth+1,up=DEPTH_UPGRADES[nextDepth];
    if(!up||state.credits<up.cost)return;
    state.credits-=up.cost;state.unlockedDepth=nextDepth;state.currentDepth=nextDepth;state.face=generateFace(nextDepth);
    checkAchievements();saveState();playTone('upgrade');renderAll();showToast(`Profondeur ${nextDepth} débloquée : ${DEPTHS[nextDepth].name}.`);
  }

  function buyDurability(){
    const i=state.upgrades.durability,cur=DURABILITY_LEVELS[i];
    if(cur.cost===null||state.credits<cur.cost)return;
    state.credits-=cur.cost;const old=cur.swings;state.upgrades.durability++;
    const newer=DURABILITY_LEVELS[state.upgrades.durability].swings;state.face.durability=Math.min(newer,state.face.durability+(newer-old));
    checkAchievements();saveState();playTone('upgrade');renderAll();showToast(`Durabilité de la pioche augmentée à ${newer} coups.`);
  }

  function buySurvey(){
    const cur=SURVEY_LEVELS[state.upgrades.surveying];
    if(cur.cost===null||state.credits<cur.cost)return;
    state.credits-=cur.cost;state.upgrades.surveying++;
    if(state.upgrades.surveying===1&&state.face.scanUsesRemaining===0)state.face.scanUsesRemaining=currentMaxScans();
    checkAchievements();saveState();playTone('upgrade');renderAll();showToast(`${SURVEY_LEVELS[state.upgrades.surveying].name} débloqué.`);
  }

  function buyScannerUse(){
    const i=state.upgrades.scannerUses,cur=SCAN_CHARGE_LEVELS[i];
    if(state.upgrades.surveying===0||cur.cost===null||state.credits<cur.cost)return;
    state.credits-=cur.cost;const oldUses=cur.uses;state.upgrades.scannerUses++;
    const newUses=SCAN_CHARGE_LEVELS[state.upgrades.scannerUses].uses;state.face.scanUsesRemaining+=newUses-oldUses;
    checkAchievements();saveState();playTone('upgrade');renderAll();showToast(`${newUses} scans par paroi débloqués.`);
  }


  function buyMetalDetector(){
    const cost=275;
    if(state.upgrades.metalDetector||state.unlockedDepth<2||state.credits<cost)return;
    state.credits-=cost;
    state.upgrades.metalDetector=true;
    checkAchievements();
    saveState();playTone('upgrade');renderAll();showToast('Détecteur de métaux débloqué.');
  }

  function buyWorkshop(){
    const cur=WORKSHOP_LEVELS[state.upgrades.workshop];
    if(cur.cost===null||state.credits<cur.cost)return;
    state.credits-=cur.cost;state.upgrades.workshop++;
    checkAchievements();saveState();playTone('upgrade');renderAll();showToast(`${WORKSHOP_LEVELS[state.upgrades.workshop].name} débloqué.`);
  }

  function resetGame(){
    if(!window.confirm('Réinitialiser toute la progression de Cherche-cailloux Bêta 1.1?'))return;
    localStorage.removeItem(SAVE_KEY);state=defaultState();state.face=generateFace(1);openWorkbenchKey=null;scanMode=false;
    saveState();renderAll();showToast('Sauvegarde Bêta 1.1 réinitialisée.');
  }

  function renderSoundButton(){
    els.soundToggle.textContent=state.sound?'🔊':'🔇';els.soundToggle.setAttribute('aria-label',state.sound?'Couper le son':'Activer le son');
  }

  function showToast(msg){
    clearTimeout(toastTimer);els.toast.textContent=msg;els.toast.classList.add('show');toastTimer=setTimeout(()=>els.toast.classList.remove('show'),1900);
  }

  function getAudioContext(){
    if(!state.sound)return null;const Ctx=window.AudioContext||window.webkitAudioContext;if(!Ctx)return null;
    if(!audioContext)audioContext=new Ctx();if(audioContext.state==='suspended')audioContext.resume();return audioContext;
  }

  function playTone(type,key='quartz'){
    const ctx=getAudioContext();if(!ctx)return;const now=ctx.currentTime;
    if(type==='crunch'){
      const len=Math.floor(ctx.sampleRate*.05),buffer=ctx.createBuffer(1,len,ctx.sampleRate),data=buffer.getChannelData(0);
      for(let i=0;i<len;i++)data[i]=(Math.random()*2-1)*(1-i/len);
      const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();
      src.buffer=buffer;filter.type='lowpass';filter.frequency.value=520;gain.gain.setValueAtTime(.13,now);gain.gain.exponentialRampToValueAtTime(.001,now+.055);
      src.connect(filter).connect(gain).connect(ctx.destination);src.start(now);src.stop(now+.06);return;
    }
    const base={quartz:440,amethyst:392,garnet:349,topaz:494,pyrite:554,citrine:466,calcite:415,fluorite:523,aquamarine:587,sapphire:622,roseQuartz:430,malachite:360,ruby:680,emerald:560,hematite:294,chalcopyrite:330,cassiterite:370,galena:250,sphalerite:315,trilobite:262,ammonite:277,crinoidStem:286,brachiopod:240,miningTag:247,miningLamp:220,surveyMarker:232,drillBit:205}[key]||440;
    const sets={gem:[base,base*1.25,base*1.5],process:[260,330],collection:[523,659,784],coin:[660,880],upgrade:[330,440,554,659],soft:[300]},freqs=sets[type]||sets.soft;
    freqs.forEach((freq,i)=>{
      const osc=ctx.createOscillator(),gain=ctx.createGain(),start=now+i*.05,duration=['upgrade','collection'].includes(type)?.17:.105;
      osc.type=type==='soft'?'sine':'triangle';osc.frequency.value=freq;gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(.05,start+.015);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
      osc.connect(gain).connect(ctx.destination);osc.start(start);osc.stop(start+duration+.02);
    });
  }
})();
