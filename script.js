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
      stages:['raw'], stageLabels:{raw:'Natural spécimen'}, prices:{raw:11}, process:{},
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
      mastery:{fact:'The word fluorescence comes from fluorite. Some spécimens glow vividly under ultraviolet light, although not every fluorite spécimen fluoresces.'}
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
      mastery:{fact:'Some sphalerite can glow under ultraviolet light, and certain spécimens show especially bright fluorescence.'}
    },




    scheelite: {
      name:'Scheelite', subtitle:'Tungsten ore → Tungsten', family:'ore', wing:'ores', iconClass:'ore scheelite',
      signature:{id:'calcium-tungstate',label:'Calcium tungstate',formula:'CaWO₄'},
      stages:['ore','refined'], stageLabels:{ore:'Scheelite ore',refined:'Tungsten'}, prices:{ore:58,refined:128},
      process:{ore:'refined'}, processLabels:{ore:'Refine to tungsten'}, workshopRequired:4,
      facts:{
        ore:'Scheelite is calcium tungstate and an important ore of tungsten. Many spécimens fluoresce blue-white under shortwave ultraviolet light.',
        refined:'Tungsten has the highest melting point of any pure metal and is valued where heat resistance and hardness matter.'
      },
      mastery:{fact:'Scheelite fluorescence comes from its tungstate groups. Small chemical substitutions can shift the colour and brightness of the glow.'}
    },
    willemite: {
      name:'Willemite', subtitle:'Zinc silicate · Zn₂SiO₄', family:'mineral', wing:'minerals', iconClass:'gem willemite',
      signature:{id:'zinc-silicate',label:'Zinc silicate',formula:'Zn₂SiO₄'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:54,tumbled:100,cut:188},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:4,
      facts:{
        raw:'Willemite is a zinc silicate mineral. Manganese-bearing spécimens can produce an intensely bright green fluorescence under ultraviolet light.',
        tumbled:'Polishing can reveal willemite’s glassy lustre while preserving the chemistry responsible for fluorescence.',
        cut:'Transparent willemite is uncommon, but suitable crystals can be faceted into distinctive collector stones.'
      },
      mastery:{fact:'Willemite became famous among fluorescent-mineral collectors because some spécimens glow a striking neon green under shortwave UV.'}
    },
    hackmanite: {
      name:'Hackmanite', subtitle:'Tenebrescent sodalite variety', family:'mineral', wing:'minerals', iconClass:'gem hackmanite',
      signature:{id:'sodalite-group',label:'Sodalite-group aluminosilicate',formula:'variable'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:62,tumbled:116,cut:220},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:4,
      facts:{
        raw:'Hackmanite is a sulfur-bearing variety of sodalite famous for tenebrescence: ultraviolet light can temporarily deepen or change its colour.',
        tumbled:'A polished surface makes hackmanite’s reversible colour change easier to see, though the strength varies from spécimen to spécimen.',
        cut:'Transparent hackmanite can be faceted, but collectors often prize its light-sensitive colour behaviour as much as its appearance.'
      },
      mastery:{fact:'Tenebrescence is reversible photochromism. A hackmanite spécimen can change colour after UV exposure and gradually fade back in ordinary light.'}
    },
    apatite: {
      name:'Apatite', subtitle:'Calcium phosphate mineral group', family:'mineral', wing:'minerals', iconClass:'gem apatite',
      signature:{id:'apatite-group',label:'Calcium phosphate',formula:'Ca₅(PO₄)₃(F,Cl,OH)'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:48,tumbled:88,cut:168},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:4,
      facts:{
        raw:'Apatite is a group of phosphate minerals that can occur in many colours. It defines hardness 5 on the Mohs scale.',
        tumbled:'Apatite can take a bright polish, but its moderate hardness means polished pieces can scratch more easily than quartz.',
        cut:'Transparent apatite can be faceted into vivid gems, though it is usually better suited to careful wear than everyday rings.'
      },
      mastery:{fact:'The name apatite comes from a Greek word meaning “to deceive,” because its crystals can resemble several other minerals.'}
    },
    opal: {
      name:'Opal', subtitle:'Hydrated silica mineraloid', family:'mineral', wing:'minerals', iconClass:'gem opal',
      signature:{id:'hydrated-silica',label:'Hydrated amorphous silica',formula:'SiO₂·nH₂O'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:68,tumbled:126,cut:242},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:4,
      facts:{
        raw:'Opal is a mineraloid rather than a true mineral because it lacks a regular crystal structure. It contains variable amounts of water.',
        tumbled:'Some opal shows play-of-colour caused by light interacting with an orderly arrangement of microscopic silica spheres.',
        cut:'Opal is usually cut as a cabochon rather than faceted so its colour effects can be viewed across a broad curved surface.'
      },
      mastery:{fact:'Not every opal shows play-of-colour. Common opal can still be beautiful even when it lacks the shifting spectral flashes associated with precious opal.'}
    },








    diamond: {
      name:'Diamond', subtitle:'Carbon · C', family:'mineral', wing:'minerals', iconClass:'gem diamond',
      signature:{id:'native-carbon',label:'Native carbon',formula:'C'},
      stages:['rough','cleaved','cut'], stageLabels:{rough:'Rough',cleaved:'Cleaved',cut:'Cut'}, prices:{rough:125,cleaved:235,cut:440},
      process:{rough:'cleaved',cleaved:'cut'}, processLabels:{rough:'Cleave 1',cleaved:'Cut 1'}, workshopRequired:5,
      facts:{
        rough:'Diamond is crystalline carbon formed under very high pressures deep in Earth. It reaches the surface only through unusual geologic transport.',
        cleaved:'Diamond is extremely hard, but hardness is not the same as toughness. Its perfect cleavage means a well-placed blow can split it.',
        cut:'A diamond\'s cut controls how light travels through the stone. Brilliant faceting is an optical design, not a natural crystal shape.'
      },
      mastery:{fact:'Diamonds form far deeper than an epithermal system. In this fictional composite mine, ancient volcanic material has carried mantle-derived crystals upward into rocks later overprinted by hydrothermal activity.'}
    },
    obsidian: {
      name:'Obsidian', subtitle:'Volcanic glass', family:'mineral', wing:'minerals', iconClass:'gem obsidian',
      signature:{id:'volcanic-glass',label:'Silica-rich volcanic glass',formula:'variable'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:44,tumbled:82,cut:150},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:4,
      facts:{
        raw:'Obsidian is volcanic glass, not a true mineral. It forms when silica-rich lava cools too quickly for an ordered crystal structure to grow.',
        tumbled:'Fresh obsidian breaks with conchoidal fracture, producing smooth curved surfaces and exceptionally sharp edges.',
        cut:'Obsidian is usually polished or shaped as a decorative stone rather than faceted for brilliance.'
      },
      mastery:{fact:'Because obsidian lacks a regular crystal lattice, geologists classify it as a natural glass rather than a mineral species.'}
    },
    olivine: {
      name:'Olivine / Peridot', subtitle:'Magnesium-iron silicate', family:'mineral', wing:'minerals', iconClass:'gem olivine',
      signature:{id:'olivine-group',label:'Magnesium-iron silicate',formula:'(Mg,Fe)₂SiO₄'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw Olivine',tumbled:'Tumbled Olivine',cut:'Cut Peridot'}, prices:{raw:72,tumbled:132,cut:248},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut as peridot'}, workshopRequired:5,
      facts:{
        raw:'Olivine is a group of green magnesium-iron silicate minerals common in Earth\'s mantle and in many mafic volcanic rocks.',
        tumbled:'Olivine-rich rocks can weather quickly at Earth\'s surface, but fresh grains may keep a vivid yellow-green colour.',
        cut:'Gem-quality olivine is called peridot. The gemstone and the common rock-forming mineral are the same mineral family.'
      },
      mastery:{fact:'Peridot is one of the few gemstones whose characteristic colour comes from an element essential to its chemistry: iron, rather than a trace impurity.'}
    },
    nativeSulfur: {
      name:'Native Sulfur', subtitle:'Elemental sulfur · S', family:'mineral', wing:'minerals', iconClass:'gem native-sulfur',
      signature:{id:'native-sulfur',label:'Elemental sulfur',formula:'S'},
      stages:['raw'], stageLabels:{raw:'Natural spécimen'}, prices:{raw:76}, process:{},
      facts:{raw:'Native sulfur can form around volcanic fumaroles, hot springs, and other settings where sulfur-bearing gases or fluids react near the surface.'},
      mastery:{fact:'Sulfur is an element, not a silicate or metal ore. Its vivid yellow colour can occur naturally without pigment or polishing.'}
    },
    rhodochrosite: {
      name:'Rhodochrosite', subtitle:'Manganese carbonate · MnCO₃', family:'mineral', wing:'minerals', iconClass:'gem rhodochrosite',
      signature:{id:'manganese-carbonate',label:'Manganese carbonate',formula:'MnCO₃'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:82,tumbled:150,cut:286},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:5,
      facts:{
        raw:'Rhodochrosite is a manganese carbonate mineral known for pink to red colour and, in some deposits, striking bands.',
        tumbled:'Banded rhodochrosite can show layers produced as mineral-rich fluids changed through time.',
        cut:'Transparent crystals can be faceted, but much rhodochrosite is cut as cabochons or polished slabs to show its colour patterns.'
      },
      mastery:{fact:'Rhodochrosite commonly occurs in hydrothermal veins alongside sulfide minerals, making it an excellent fit for epithermal-style mineralization.'}
    },
    adularia: {
      name:'Adularia', subtitle:'Low-temperature potassium feldspar', family:'mineral', wing:'minerals', iconClass:'gem adularia',
      signature:{id:'potassium-feldspar',label:'Potassium feldspar',formula:'KAlSi₃O₈'},
      stages:['raw','tumbled','cut'], stageLabels:{raw:'Raw',tumbled:'Tumbled',cut:'Cut'}, prices:{raw:74,tumbled:138,cut:260},
      process:{raw:'tumbled',tumbled:'cut'}, processLabels:{raw:'Tumble 1',tumbled:'Cut 1'}, workshopRequired:5,
      facts:{
        raw:'Adularia is a low-temperature variety and growth habit of potassium feldspar that commonly forms in hydrothermal veins.',
        tumbled:'Feldspars are among the most abundant mineral groups in Earth\'s crust, but hydrothermal adularia records a very specific fluid environment.',
        cut:'Some adularia-related feldspar material can show attractive optical effects, although collector crystals are often valued in their natural form.'
      },
      mastery:{fact:'Adularia is so characteristic of some low-sulfidation epithermal systems that geologists use it as an important clue to the conditions under which a vein formed.'}
    },
    acanthite: {
      name:'Acanthite', subtitle:'Silver ore → Silver', family:'ore', wing:'ores', iconClass:'ore acanthite', metalDetectable:true,
      signature:{id:'silver-sulfide',label:'Silver sulfide',formula:'Ag₂S'},
      stages:['ore','refined'], stageLabels:{ore:'Acanthite ore',refined:'Silver'}, prices:{ore:108,refined:248},
      process:{ore:'refined'}, processLabels:{ore:'Refine to silver'}, workshopRequired:5,
      facts:{
        ore:'Acanthite is silver sulfide and an important silver mineral in many hydrothermal ore deposits.',
        refined:'Silver is an excellent electrical conductor and is used in electronics, jewellery, mirrors, and many specialized technologies.'
      },
      mastery:{fact:'Acanthite is stable at lower temperatures; at higher temperatures the same Ag₂S composition adopts a different crystal structure called argentite.'}
    },
    nativeGold: {
      name:'Native Gold', subtitle:'Elemental gold · Au', family:'ore', wing:'ores', iconClass:'ore native-gold', metalDetectable:true,
      signature:{id:'native-gold',label:'Elemental gold',formula:'Au'},
      stages:['found'], stageLabels:{found:'Native gold'}, prices:{found:315}, process:{},
      facts:{found:'Gold commonly occurs as the native metal rather than as a simple “gold ore.” Hydrothermal fluids can concentrate it in veins and fractures.'},
      mastery:{fact:'Gold is extremely dense, highly malleable, and chemically resistant. Those traits make it useful for everything from jewellery to electronics, but its softness limits where it works structurally.'}
    },
    trilobite: {
      name:'Trilobite', subtitle:'Fossil arthropod', family:'fossil', wing:'fossils', iconClass:'round trilobite', iconText:'≋',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil spécimen'}, prices:{found:40}, process:{},
      facts:{found:'Trilobites were marine arthropods that lived for hundreds of millions of years and disappeared in the end-Permian mass extinction.'}
    },
    ammonite: {
      name:'Ammonite', subtitle:'Fossil marine cephalopod', family:'fossil', wing:'fossils', iconClass:'round ammonite', iconText:'◉',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil spécimen'}, prices:{found:85}, process:{},
      facts:{found:'Ammonites were shelled marine cephalopods related to modern squid and octopuses. Their rapidly changing forms make many species useful index fossils.'}
    },




    crinoidStem: {
      name:'Crinoid Stem', subtitle:'Fossil marine animal fragment', family:'fossil', wing:'fossils', iconClass:'round crinoid-stem', iconText:'✣',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil spécimen'}, prices:{found:70}, process:{},
      facts:{found:'Crinoids are marine animals related to starfish. Their stems often break into small disk-shaped pieces that fossilize readily.'}
    },
    brachiopod: {
      name:'Brachiopod', subtitle:'Fossil marine animal', family:'fossil', wing:'fossils', iconClass:'round brachiopod', iconText:'◒',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil spécimen'}, prices:{found:140}, process:{},
      facts:{found:'Brachiopods are marine animals with two shells. They can resemble clams, but their anatomy and evolutionary history are very different.'}
    },
belemnite: {
      name:'Belemnite', subtitle:'Fossil squid-like cephalopod', family:'fossil', wing:'fossils', iconClass:'round belemnite', iconText:'▸',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil spécimen'}, prices:{found:210}, process:{},
      facts:{found:'Belemnites were extinct squid-like cephalopods. Their hard internal guards often fossilize as distinctive bullet-shaped objects.'}
    },




    fernImpression: {
      name:'Fern Impression', subtitle:'Fossil plant impression', family:'fossil', wing:'fossils', iconClass:'round fern-impression', iconText:'❧',
      signature:{id:'fossil',label:'Fossilized biological material',formula:''},
      stages:['found'], stageLabels:{found:'Fossil spécimen'}, prices:{found:96}, process:{},
      facts:{found:'Plant impressions can preserve the shape and venation of leaves even when little original plant material remains.'}
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




    railSpike: {
      name:'Old Rail Spike', subtitle:'Historical mine-haulage hardware', family:'artifact', wing:'history', iconClass:'tag rail-spike', iconText:'⌟', metalDetectable:true,
      signature:{id:'artifact',label:'Historical object',formula:''},
      stages:['found'], stageLabels:{found:'Historical artifact'}, prices:{found:235}, process:{},
      facts:{found:'Underground rail systems carried ore, waste rock, people, and supplies. Hardware such as spikes and fasteners helped keep those haulage tracks in place.'}
    },




    surveyCompass: {
      name:'Brass Survey Compass', subtitle:'Historical underground surveying instrument', family:'artifact', wing:'history', iconClass:'tag survey-compass', iconText:'✥', metalDetectable:true,
      signature:{id:'artifact',label:'Historical object',formula:''},
      stages:['found'], stageLabels:{found:'Historical artifact'}, prices:{found:310}, process:{},
      facts:{found:'Mine surveyors used compasses, levels, chains, and later more precise instruments to map underground workings and keep new excavations tied to known reference points.'}
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




  const SPARKLE_KEYS = new Set(['quartz','amethyst','garnet','topaz','citrine','calcite','fluorite','aquamarine','sapphire','roseQuartz','malachite','ruby','emerald','willemite','hackmanite','apatite','opal','diamond','obsidian','olivine','nativeSulfur','rhodochrosite','adularia']);
  const UV_CLASSES = {
    fluorite:'uv-fluorite',
    calcite:'uv-calcite',
    ruby:'uv-ruby',
    sphalerite:'uv-sphalerite',
    scheelite:'uv-scheelite',
    willemite:'uv-willemite',
    hackmanite:'uv-hackmanite',
    apatite:'uv-apatite'
  };








  const EXCEPTIONAL_BASE_CHANCE = 0.05;
  const EXCEPTIONAL_KIT_CHANCE = 0.50;
  const EXCEPTIONAL_MASTER_KIT_CHANCE = 0.80;
  const COLLECTOR_FOCUS_WEIGHT = 0.60;
  const PROSPECTING_SUPPLIES = {
    prospectorKit:{label:"Prospector's Kit",icon:'🎒',cost:4000,description:'Arm it for a fresh face. When you commit that face by mining the first tile, its exceptional-specimen chance rises from 5% to 50%.'},
    masterProspectorKit:{label:"Master Prospector's Kit",icon:'🧰',cost:10000,description:'A high-end kit for a serious hunt. On a committed fresh face, it raises the exceptional-specimen chance from 5% to 80%.'},
    collectorsFocus:{label:"Collector's Focus",icon:'◎',cost:4000,description:'Arm it with a target for a fresh face. If an exceptional spécimen spawns and that material is present, the target receives a 60% weighting.'}
  };




  const EXCEPTIONAL_VARIANTS = {
    quartz:[
      {id:'waterClearPoint',label:'Water-clear Quartz Point',sellValue:2800,detail:'An unusually transparent quartz crystal with clean faces and very little internal cloudiness.'},
      {id:'phantomQuartz',label:'Phantom Quartz',sellValue:3600,detail:'Earlier stages of crystal growth remain visible inside the quartz as ghost-like internal outlines.'},
      {id:'quartzCluster',label:'Quartz Crystal Cluster',sellValue:4200,detail:'Several quartz crystals grew together on the same piece of matrix, each competing for space.'}
    ],
    amethyst:[
      {id:'amethystSceptre',label:'Amethyst Sceptre',sellValue:4400,detail:'A later crystal generation widened near the tip, producing the distinctive sceptre-shaped habit.'},
      {id:'deepPurpleCluster',label:'Deep-purple Amethyst Cluster',sellValue:3800,detail:'Strong colour developed across a tightly packed group of quartz crystals.'}
    ],
    calcite:[
      {id:'dogtoothCalcite',label:'Dogtooth Calcite Cluster',sellValue:3200,detail:'Sharp scalenohedral calcite crystals form the classic pointed habit often nicknamed dogtooth spar.'},
      {id:'opticalCalcite',label:'Optical Calcite Crystal',sellValue:3600,detail:'An unusually clear calcite crystal shows strong double refraction through its rhombohedral structure.'}
    ],
    fluorite:[
      {id:'zonedFluorite',label:'Colour-zoned Fluorite',sellValue:4800,detail:'Changes in chemistry during growth produced visible bands of colour inside the same crystal.'},
      {id:'fluoriteCubes',label:'Fluorite Cube Cluster',sellValue:4200,detail:'A group of sharply formed cubic fluorite crystals grew together along a vein surface.'}
    ],
    pyrite:[
      {id:'pyriteCubeCluster',label:'Pyrite Cube Cluster',sellValue:4600,detail:'Intergrown brassy cubes show the crisp geometry that makes pyrite crystals so distinctive.'}
    ],
    malachite:[
      {id:'botryoidalMalachite',label:'Botryoidal Malachite',sellValue:5200,detail:'Rounded grape-like surfaces formed as malachite grew outward in many tiny radiating fibres.'},
      {id:'fibrousMalachite',label:'Fibrous Malachite',sellValue:4600,detail:'Fine radiating fibres give this spécimen a silky texture very different from polished banded material.'}
    ],
    obsidian:[
      {id:'snowflakeObsidian',label:'Snowflake Obsidian',sellValue:3000,detail:'Pale spherulites crystallized inside volcanic glass, producing the familiar snowflake pattern.'},
      {id:'rainbowSheenObsidian',label:'Rainbow-sheen Obsidian',sellValue:4200,detail:'Microscopic structures inside the volcanic glass reflect light as subtle bands of iridescent colour.'}
    ],
    olivine:[
      {id:'gemmyOlivine',label:'Gemmy Olivine Crystal',sellValue:5800,detail:'An unusually transparent olivine crystal is good enough to show why gem-quality olivine is called peridot.'}
    ],
    rhodochrosite:[
      {id:'bandedRhodochrosite',label:'Banded Rhodochrosite',sellValue:5000,detail:'Repeated mineral deposition produced distinct pink and pale bands through the spécimen.'}
    ],
    nativeSulfur:[
      {id:'sulfurCluster',label:'Native Sulfur Crystal Cluster',sellValue:3500,detail:'Bright yellow sulfur crystals formed together in a geothermal environment.'}
    ],
    ruby:[
      {id:'rubyMatrix',label:'Ruby in Matrix',sellValue:6500,detail:'Red corundum remains attached to the host rock it crystallized within instead of being separated as a loose gem.'}
    ],
    emerald:[
      {id:'emeraldMatrix',label:'Emerald in Matrix',sellValue:6800,detail:'Green beryl crystals remain embedded in contrasting host rock, preserving more of their geological context.'}
    ],
    hematite:[
      {id:'specularHematite',label:'Specular Hematite',sellValue:3600,detail:'Tiny platy hematite crystals create a glittering metallic surface known as specularite.'}
    ],
    nativeGold:[
      {id:'dendriticGold',label:'Dendritic Native Gold',sellValue:7500,detail:'Native gold grew in branching, tree-like forms along tiny fractures rather than as a rounded nugget.'}
    ]
  };


  const SPRITE_SLUGS = {
    roseQuartz:'rose-quartz', nativeSulfur:'native-sulfur', nativeGold:'native-gold'
  };
  const EXCEPTIONAL_SPRITES = {
    waterClearPoint:'water-clear-quartz-point',
    phantomQuartz:'phantom-quartz',
    quartzCluster:'quartz-crystal-cluster',
    amethystSceptre:'amethyst-sceptre',
    deepPurpleCluster:'deep-purple-amethyst-cluster',
    dogtoothCalcite:'dogtooth-calcite-cluster',
    opticalCalcite:'optical-calcite-crystal',
    zonedFluorite:'colour-zoned-fluorite',
    fluoriteCubes:'fluorite-cube-cluster',
    pyriteCubeCluster:'pyrite-cube-cluster',
    botryoidalMalachite:'botryoidal-malachite',
    fibrousMalachite:'fibrous-malachite',
    snowflakeObsidian:'snowflake-obsidian',
    rainbowSheenObsidian:'rainbow-sheen-obsidian',
    gemmyOlivine:'gemmy-olivine-crystal',
    bandedRhodochrosite:'banded-rhodochrosite',
    sulfurCluster:'native-sulfur-crystal-cluster',
    rubyMatrix:'ruby-in-matrix',
    emeraldMatrix:'emerald-in-matrix',
    specularHematite:'specular-hematite',
    dendriticGold:'dendritic-native-gold'
  };


  function spriteSlug(key){ return SPRITE_SLUGS[key]||key; }
  function miniSpriteSrc(key){
    const m=MATERIALS[key];
    if(m?.family==='fossil')return 'images/sprites/mini/fossil.png';
    if(m?.family==='artifact')return 'images/sprites/mini/artifact.png';
    return `images/sprites/mini/${spriteSlug(key)}.png`;
  }
  function detailSpriteSrc(key,stage){ return `images/sprites/detail/${spriteSlug(key)}-${stage}.webp`; }
  function exceptionalSpriteSrc(item){
    const slug=EXCEPTIONAL_SPRITES[item?.variantId];
    return slug?`images/sprites/exceptional/${slug}.webp`:detailSpriteSrc(item?.key,MATERIALS[item?.key]?.stages?.[0]||'raw');
  }




  const WINGS = [
    {id:'minerals',name:'Mineral Hall'},
    {id:'ores',name:'Ores & Metals'},
    {id:'fossils',name:'Fossil Wing'},
    {id:'history',name:'History Wing'}
  ];




  const DEPTHS = {
    1:{
      name:'Upper Seam',
      note:'Near-surface workings where common minerals and oxidized ores are easiest to reach. Weathering and groundwater can alter minerals considerably this close to the surface.',
      materials:{quartz:42,amethyst:22,hematite:20,chalcopyrite:16},
      sideFinds:[{key:'miningTag',weight:72},{key:'trilobite',weight:28}]
    },
    2:{
      name:'Lower Works',
      note:'Older, deeper workings cut through several mineral-bearing layers. Changes in pressure, temperature, and host rock create different mineral assemblages.',
      materials:{quartz:18,amethyst:13,hematite:13,chalcopyrite:13,garnet:15,topaz:12,pyrite:16},
      sideFinds:[{key:'trilobite',weight:40},{key:'crinoidStem',weight:24},{key:'fernImpression',weight:18},{key:'miningTag',weight:18}]
    },
    3:{
      name:'Deep Gallery',
      note:'Deeper fractures provided pathways for mineral-rich fluids, leaving crystals and metal-bearing ores behind as conditions changed.',
      materials:{quartz:8,amethyst:7,hematite:5,chalcopyrite:5,garnet:8,topaz:7,pyrite:6,citrine:12,calcite:10,fluorite:10,aquamarine:7,sapphire:4,cassiterite:5},
      sideFinds:[{key:'ammonite',weight:36},{key:'crinoidStem',weight:16},{key:'fernImpression',weight:12},{key:'trilobite',weight:10},{key:'surveyMarker',weight:12},{key:'miningLamp',weight:8},{key:'miningTag',weight:6}]
    },
    4:{
      name:'Crystal Veins',
      note:'Fractures remplis by mineral-bearing fluids can produce veins rich in crystals. Different elements and growth conditions give related minerals dramatically different colours.',
      materials:{quartz:4,amethyst:4,hematite:3,chalcopyrite:3,garnet:5,topaz:5,pyrite:4,citrine:6,calcite:5,fluorite:6,aquamarine:7,sapphire:6,cassiterite:4,roseQuartz:9,malachite:8,ruby:5,emerald:4,galena:6,sphalerite:6},
      sideFinds:[{key:'brachiopod',weight:33},{key:'ammonite',weight:20},{key:'crinoidStem',weight:10},{key:'drillBit',weight:18},{key:'surveyMarker',weight:11},{key:'miningLamp',weight:8}]
    },
    5:{
      name:'Luminous Zone',
      note:'Some minerals absorb ultraviolet radiation and release part of that energy as visible light: fluorescence. The effect depends on mineral chemistry and trace impurities.',
      materials:{quartz:3,amethyst:2,calcite:5,fluorite:6,aquamarine:3,sapphire:3,roseQuartz:3,ruby:3,sphalerite:4,scheelite:11,willemite:10,hackmanite:8,apatite:10,opal:7},
      sideFinds:[{key:'belemnite',weight:42},{key:'railSpike',weight:28},{key:'brachiopod',weight:10},{key:'drillBit',weight:9},{key:'surveyMarker',weight:6},{key:'miningLamp',weight:5}]
    },
    6:{
      name:'Epithermal Zone',
      note:'Epithermal deposits form when hot, mineral-rich hydrothermal fluids circulate through shallow volcanic rocks. As those fluids cool, boil, or react with surrounding rock, they can leave spectacular veins of minerals and metal ores.',
      materials:{calcite:4,fluorite:4,pyrite:4,galena:3,sphalerite:3,scheelite:4,obsidian:10,olivine:9,nativeSulfur:8,rhodochrosite:10,adularia:10,diamond:3,acanthite:7,nativeGold:3},
      sideFinds:[{key:'surveyCompass',weight:52},{key:'drillBit',weight:18},{key:'railSpike',weight:18},{key:'surveyMarker',weight:12}]
    }
  };




const DURABILITY_LEVELS = [
    {swings:28,cost:60,label:'Basic pick'},
    {swings:34,cost:140,label:'Reinforced handle'},
    {swings:40,cost:320,label:'Steel pick'},
    {swings:48,cost:780,label:'Geologist’s pick'},
    {swings:56,cost:3600,label:'Deep-work pick'},
    {swings:68,cost:null,label:'Carbide rock pick'}
  ];




  const SURVEY_LEVELS = [
    {name:'None',cost:75,next:'Field Scanner',description:'Unlocks the 3×3 area scanner. Early scans report chemical signatures rather than exact gem names.'},
    {name:'Field Scanner',cost:160,next:'Spectral Scanner',description:'Reports chemistry and signal strength inside the selected 3×3 area. Scanned tiles stay marked.'},
    {name:'Spectral Scanner',cost:360,next:'Mineral Analyzer',description:'Adds deposit-pattern information and notices unusual non-mineral signatures.'},
    {name:'Mineral Analyzer',cost:null,next:null,description:'Identifies exact minerals and distinguishes fossil signatures from historical objects.'}
  ];




  const SCAN_CHARGE_LEVELS = [
    {uses:1,cost:80,label:'1 scan par paroi'},
    {uses:2,cost:170,label:'2 scans par paroi'},
    {uses:3,cost:340,label:'3 scans par paroi'},
    {uses:4,cost:560,label:'4 scans par paroi'},
    {uses:5,cost:850,label:'5 scans par paroi'},
    {uses:6,cost:null,label:'6 scans par paroi'}
  ];




  const WORKSHOP_LEVELS = [
    {name:'Basic Workshop',cost:180,next:'Precision Workshop',description:'Handles your earliest processable minerals and ores.'},
    {name:'Precision Workshop',cost:650,next:'Advanced Lapidary',description:'Adds support for a broader range of mid-game minerals and ores.'},
    {name:'Advanced Lapidary',cost:1250,next:'Master Lapidary',description:'Handles tougher gemstones and deeper metal-bearing ores.'},
    {name:'Master Lapidary',cost:2400,next:'Specialist Lapidary',description:'Handles demanding deep-zone gemstones and prepares the workshop for unusual material.'},
    {name:'Specialist Lapidary',cost:4200,next:'Master Cutter’s Bench',description:'Adds the precision and abrasives needed for the final-zone gemstones, mineraloids, and metal-bearing ores.'},
    {name:'Master Cutter’s Bench',cost:null,next:null,description:'A precision bench built to handle every processable spécimen in the mine.'}
  ];




  const DEPTH_UPGRADES = {
    2:{cost:225,description:'Débloquer la profondeur 2: the Lower Works, adding new gemstones, metallic minerals, and more fossil hunting.'},
    3:{cost:850,description:'Débloquer la profondeur 3: the Deep Gallery, adding new crystal families, colourful minerals, another metal-bearing ore, and deeper historical finds.'},
    4:{cost:1800,description:'Débloquer la profondeur 4: the Crystal Veins, adding high-grade gemstones, new metal-bearing ores, fossils, and artifacts.'},
    5:{cost:3600,description:'Débloquer la profondeur 5: the Luminous Zone, adding fluorescent minerals, an unusual heavy-metal ore, a mineraloid, belemnites, and deeper mining history.'},
    6:{cost:5200,description:'Open the final route into Depth 6: the Epithermal Zone, a hot volcanic-hydrothermal environment where boiling fluids deposited unusual minerals and metals.'}
  };








  const ACHIEVEMENTS = [
    {id:'firstCrunch',icon:'⛏️',name:'First Crunch',description:'Mine your first tile.',condition:s=>s.meta.tilesMined>=1},
    {id:'shiny',icon:'✦',name:'Shiny!',description:'Find your first mineral or ore.',condition:s=>Object.entries(MATERIALS).some(([k,m])=>['mineral','ore'].includes(m.family)&&(s.stats[k]?.found||0)>0)},
    {id:'museumPiece',icon:'🏛️',name:'Museum Piece',description:'Donate your first spécimen.',condition:s=>Object.values(s.stats).some(x=>(x.donated||0)>0)},
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
    {id:'sellout',icon:'💰',name:'Sellout',description:'Use Tout vendre ten times.',condition:s=>s.meta.sellAllUses>=10},
    {id:'fourFloorsDown',icon:'🪜',name:'Four Floors Down',description:'Débloquer la profondeur 4.',condition:s=>s.unlockedDepth>=4},
    {id:'shinyGoblin',icon:'💎',name:'Shiny Goblin',description:'Find 100 total spécimens.',condition:s=>totalFound()>=100},
    {id:'fullCoverage',icon:'▦',name:'Broad Coverage',description:'Survey at least half of one rock face.',condition:s=>s.meta.fullSurveyFaces>=1},
    {id:'allThatGlitters',icon:'🌟',name:'All That Glitters',description:'Master citrine, topaz, and pyrite.',condition:s=>['citrine','topaz','pyrite'].every(k=>isMastered(k))},
    {id:'glowUp',icon:'🔦',name:'Glow Up',description:'View a fluorescent museum spécimen under UV.',condition:s=>s.meta.uvViews>=1&&countCollectedUvMaterials()>=1},
    {id:'glowShow',icon:'✨',name:'The Glow Show',description:'Have five different fluorescent materials represented in the museum.',condition:s=>s.meta.uvViews>=1&&countCollectedUvMaterials()>=5},
    {id:'fiveFloorsDown',icon:'🔦',name:'Lights Below',description:'Débloquer la profondeur 5: the Luminous Zone.',condition:s=>s.unlockedDepth>=5},
    {id:'heatRated',icon:'🥵',name:'Dress for the Job',description:'Equip geothermal protective gear.',condition:s=>!!s.upgrades.geothermalGear},
    {id:'epithermal',icon:'🌋',name:'The Mine Ends Here',description:'Débloquer la profondeur 6: the Epithermal Zone.',condition:s=>s.unlockedDepth>=6},
    {id:'diamondRough',icon:'💎',name:'Not Invincible',description:'Find your first diamond.',condition:s=>(s.stats.diamond?.found||0)>0},
    {id:'actualGold',icon:'🟡',name:'Okay, This One Is Gold',description:'Find native gold.',condition:s=>(s.stats.nativeGold?.found||0)>0},
    {id:'yellowRock',icon:'🟨',name:'Aggressively Yellow',description:'Find native sulfur.',condition:s=>(s.stats.nativeSulfur?.found||0)>0},
    {id:'silverLining',icon:'🥈',name:'Silver Lining',description:'Refine acanthite into silver.',condition:s=>(s.stats.acanthite?.processed||0)>0},
    {id:'peridotProper',icon:'💚',name:'Same Rock, Fancy Name',description:'Cut olivine into peridot.',condition:s=>(s.inventory.olivine?.cut||0)>0||!!s.collection.olivine?.cut},
    {id:'adulariaClue',icon:'🌙',name:'Low Temperature, High Drama',description:'Find adularia in the Epithermal Zone.',condition:s=>(s.stats.adularia?.found||0)>0},
    {id:'pinkVein',icon:'🩷',name:'Pink Vein',description:'Find rhodochrosite.',condition:s=>(s.stats.rhodochrosite?.found||0)>0},
    {id:'fossilRecord',icon:'🦴',name:'The Whole Fossil Record',description:'Complete every fossil display in the museum.',condition:s=>Object.entries(MATERIALS).filter(([,m])=>m.family==='fossil').every(([k,m])=>m.stages.every(st=>!!s.collection[k]?.[st]))},
    {id:'historyBuff',icon:'🧭',name:'Mine Historian',description:'Complete every historical-artifact display.',condition:s=>Object.entries(MATERIALS).filter(([,m])=>m.family==='artifact').every(([k,m])=>m.stages.every(st=>!!s.collection[k]?.[st]))},
    {id:'mineralHall',icon:'🔷',name:'Mineral Hall Complete',description:'Complete every mineral and gem display.',condition:s=>Object.entries(MATERIALS).filter(([,m])=>m.family==='mineral').every(([k,m])=>m.stages.every(st=>!!s.collection[k]?.[st]))},
    {id:'oreHall',icon:'⚙️',name:'Ores & Metals Complete',description:'Complete every ore and metal display.',condition:s=>Object.entries(MATERIALS).filter(([,m])=>m.family==='ore').every(([k,m])=>m.stages.every(st=>!!s.collection[k]?.[st]))},
    {id:'sixDeep',icon:'⬇️',name:'Six Deep',description:'Mine at least one rock tile on every depth.',condition:s=>allDepthsMined()},
    {id:'exceptionalTaste',icon:'✨',name:'Now THAT Is a Specimen',description:'Find your first exceptional spécimen.',condition:s=>(s.postgame?.exceptionalFound||0)>=1},
    {id:'curator',icon:'🖼️',name:'Your Turn, Curator',description:'Place your first exceptional spécimen in the Collection personnelle display case.',condition:s=>(s.postgame?.personalSlots||[]).some(Boolean)},
    {id:'preparedProspector',icon:'🎒',name:'Going Prepared',description:"Use a Prospector's Kit and Collector's Focus on the same rock face.",condition:s=>(s.meta?.fullProspectingStacks||0)>=1},
    {id:'focusedFind',icon:'◎',name:'Exactly What I Was Looking For',description:"Find an exceptional spécimen that matches your Collector's Focus.",condition:s=>(s.meta?.focusedExceptionalFinds||0)>=1},
    {id:'specimenSeller',icon:'💵',name:'I Can Let This One Go',description:'Sell an exceptional spécimen from Réserve de spécimens.',condition:s=>(s.postgame?.exceptionalSold||0)>=1},
    {id:'tenExceptional',icon:'✦',name:'Dragon Instinct',description:'Find ten exceptional spécimens after museum completion.',condition:s=>(s.postgame?.exceptionalFound||0)>=10},
    {id:'allMetals',icon:'🔩',name:'Heavy Metal',description:'Refine iron, copper, tin, lead, zinc, tungsten, and silver.',condition:s=>['hematite','chalcopyrite','cassiterite','galena','sphalerite','scheelite','acanthite'].every(k=>(s.stats[k]?.processed||0)>0)},
    {id:'finalVein',icon:'🌋',name:'Epithermal Set',description:'Complete every new core spécimen introduced by the Epithermal Zone.',condition:s=>['diamond','obsidian','olivine','nativeSulfur','rhodochrosite','adularia','acanthite','nativeGold'].every(k=>isMastered(k))},
    {id:'trueRockhound',icon:'🏆',name:'TRUE ROCKHOUND',description:'Complete the entire museum. No reset. No prestige. You finished the game.',condition:s=>!!s.postgame?.completed},
    {id:'rockaholic',icon:'💎',name:'CAILLOUXHOLIQUE',description:'Complete the museum, max every permanent upgrade, discover every core subject, and earn every other achievement.',hidden:true,condition:s=>{
      const upgradesMaxed =
        s.unlockedDepth>=6 &&
        s.upgrades.durability>=DURABILITY_LEVELS.length-1 &&
        s.upgrades.surveying>=SURVEY_LEVELS.length-1 &&
        s.upgrades.scannerUses>=SCAN_CHARGE_LEVELS.length-1 &&
        s.upgrades.workshop>=WORKSHOP_LEVELS.length-1 &&
        !!s.upgrades.metalDetector &&
        !!s.upgrades.uvLamp &&
        !!s.upgrades.geothermalGear &&
        !!s.upgrades.scannerHeatShield &&
        !!s.upgrades.detectorHeatShield;
      const everythingDiscovered=Object.keys(MATERIALS).every(k=>!!s.discovery[k]?.discovered);
      const everyOtherAchievement=ACHIEVEMENTS.filter(a=>a.id!=='rockaholic').every(a=>!!s.achievements[a.id]);
      return !!s.postgame?.completed&&upgradesMaxed&&everythingDiscovered&&everyOtherAchievement;
    }}
  ];




  


  /* French-Canadian content overrides for the dedicated Cherche-cailloux edition. */
  const FR_MATERIALS = {"quartz":{"name":"Quartz","subtitle":"Dioxyde de silicium · SiO₂","signatureLabel":"Dioxyde de silicium","stageLabels":{"raw":"Brut","tumbled":"Roulé","cut":"Taillé"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"Le quartz forme souvent des cristaux à six faces et compte parmi les minéraux les plus abondants de la croûte terrestre.","tumbled":"Le polissage au tonneau arrondit peu à peu les arêtes grâce à l’abrasion, au grain et à l’eau.","cut":"Le quartz transparent peut être facetté, même s’il est beaucoup plus tendre que le diamant."},"mastery":"Le quartz est piézoélectrique : une pression ou une vibration peut y produire une charge électrique. C’est l’une des raisons pour lesquelles on l’utilise dans les montres, les horloges et l’électronique."},"amethyst":{"name":"Améthyste","subtitle":"Quartz violet · SiO₂","signatureLabel":"Dioxyde de silicium","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"L’améthyste est une variété violette de quartz. Sa couleur est liée à des traces de fer et à l’irradiation naturelle.","tumbled":"Le polissage peut rendre plus visibles les zones de couleur et les motifs internes de l’améthyste.","cut":"L’améthyste est souvent facettée pour mettre en valeur sa couleur et son éclat."},"mastery":"La chaleur peut modifier la couleur de l’améthyste. Une partie de la citrine vendue sur le marché est obtenue en chauffant soigneusement de l’améthyste."},"garnet":{"name":"Grenat","subtitle":"Une famille de minéraux silicatés","signatureLabel":"Chimie du groupe des silicates","stageLabels":{"raw":"Brut","tumbled":"Roulé","cut":"Taillé"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"Le grenat n’est pas un seul minéral, mais un groupe de minéraux apparentés dont la structure cristalline est semblable.","tumbled":"Les grenats existent en plusieurs couleurs : rouge profond, vert, orange et bien d’autres.","cut":"Le grenat de qualité gemme peut être facetté, tandis que les variétés plus opaques sont souvent simplement polies."},"mastery":"Le grenat sert aussi en dehors de la joaillerie. Sa dureté en fait un abrasif industriel utile, notamment dans certains systèmes de découpe au jet d’eau."},"topaz":{"name":"Topaze","subtitle":"Fluorosilicate d’aluminium","signatureLabel":"Fluorosilicate d’aluminium","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"La topaze peut être de plusieurs couleurs. Les cristaux naturels sont souvent incolores, pâles ou légèrement colorés.","tumbled":"La topaze est dure, mais possède un clivage parfait : un choc mal placé peut la fendre selon des plans bien nets.","cut":"Les lapidaires orientent la topaze avec soin, puisque son clivage influence la façon dont on peut la tailler sans la briser."},"mastery":"Une grande partie de la topaze bleu vif vendue en joaillerie commence sous forme pâle ou incolore, puis est traitée par irradiation et chauffage pour produire une couleur bleue stable."},"pyrite":{"name":"Pyrite","subtitle":"Sulfure de fer · FeS₂","signatureLabel":"Sulfure de fer","stageLabels":{"raw":"Spécimen naturel"},"processLabels":{},"facts":{"raw":"La pyrite est un sulfure de fer au lustre métallique, célèbre sous le surnom d’« or des fous »."},"mastery":"La pyrite forme souvent des cubes, des pyritoèdres et d’autres cristaux très géométriques. Elle peut être spectaculaire même lorsqu’il n’y a absolument aucun or."},"citrine":{"name":"Citrine","subtitle":"Quartz jaune à orangé · SiO₂","signatureLabel":"Dioxyde de silicium","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"La citrine est une variété jaune à orangée de quartz. La citrine naturelle est beaucoup moins commune que l’améthyste.","tumbled":"Le polissage révèle ses tons chauds tout en conservant la dureté du quartz.","cut":"La citrine transparente peut devenir très lumineuse lorsqu’elle est facettée, surtout dans les pierres de grande taille."},"mastery":"La citrine, l’améthyste et le quartz incolore sont tous la même espèce minérale : le quartz. Leurs couleurs différentes viennent des impuretés, des défauts cristallins et parfois des traitements."},"calcite":{"name":"Calcite","subtitle":"Carbonate de calcium · CaCO₃","signatureLabel":"Carbonate de calcium","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"La calcite est un constituant majeur du calcaire et du marbre, et l’un des carbonates les plus courants.","tumbled":"La calcite est assez tendre; les pièces polies se rayent donc plus facilement que le quartz.","cut":"La calcite transparente peut être taillée, mais son clivage parfait la rend bien plus délicate à facetter que les gemmes plus résistantes."},"mastery":"Certaines calcites transparentes montrent une forte biréfringence : une seule ligne observée à travers le cristal peut paraître doublée."},"fluorite":{"name":"Fluorite","subtitle":"Fluorure de calcium · CaF₂","signatureLabel":"Fluorure de calcium","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"La fluorite forme souvent des cristaux cubiques et peut présenter une gamme étonnante de couleurs.","tumbled":"Elle peut prendre un très beau poli, mais elle est plus tendre que le quartz et demande davantage de délicatesse.","cut":"La fluorite gemme peut être facettée, mais sa tendreté et son clivage la rendent peu adaptée aux bijoux soumis à beaucoup d’usure."},"mastery":"Le mot fluorescence vient de la fluorite. Certains spécimens brillent vivement sous la lumière ultraviolette, même si toutes les fluorites ne fluoreschent pas."},"aquamarine":{"name":"Aigue-marine","subtitle":"Béryl bleu-vert · Be₃Al₂Si₆O₁₈","signatureLabel":"Silicate de béryllium et d’aluminium","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"L’aigue-marine est la variété bleue à bleu-vert du béryl, la même famille minérale que l’émeraude.","tumbled":"Elle est assez dure pour des bijoux durables, bien que les inclusions et fractures influencent toujours sa résistance.","cut":"L’aigue-marine est souvent taillée pour mettre en valeur sa transparence et son bleu frais plutôt que pour maximiser les éclats arc-en-ciel."},"mastery":"L’aigue-marine et l’émeraude sont toutes deux du béryl. De petites quantités d’éléments traces différents produisent leurs couleurs très différentes."},"sapphire":{"name":"Saphir","subtitle":"Corindon · Al₂O₃","signatureLabel":"Oxyde d’aluminium","stageLabels":{"raw":"Brut","tumbled":"Roulé","cut":"Taillé"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"Le saphir est du corindon de qualité gemme. Le bleu est le plus célèbre, mais les saphirs existent dans de nombreuses couleurs.","tumbled":"Le corindon est très dur : 9 sur l’échelle de Mohs, juste sous le diamant parmi les minéraux de référence courants.","cut":"L’orientation de la taille compte, car la couleur d’un saphir peut varier selon la direction du cristal."},"mastery":"Le rubis et le saphir sont la même espèce minérale : le corindon. Le corindon gemme rouge s’appelle rubis; les autres couleurs sont généralement appelées saphirs."},"roseQuartz":{"name":"Quartz rose","subtitle":"Quartz rose · SiO₂","signatureLabel":"Dioxyde de silicium","stageLabels":{"raw":"Brut","tumbled":"Roulé","cut":"Taillé"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"Le quartz rose est une variété rose de quartz. Sa couleur est liée à des inclusions microscopiques et à des caractéristiques de sa structure plutôt qu’à une seule impureté.","tumbled":"Il est souvent poli en galets ou sculpté, puisque beaucoup de quartz rose est translucide plutôt que parfaitement transparent.","cut":"Le quartz rose transparent est rare, mais les morceaux qui s’y prêtent peuvent être facettés en gemmes rose pâle."},"mastery":"Quartz, améthyste, citrine et quartz rose partagent tous la même chimie de base : SiO₂. Leurs couleurs proviennent pourtant de causes microscopiques très différentes."},"malachite":{"name":"Malachite","subtitle":"Carbonate hydroxylé de cuivre","signatureLabel":"Carbonate hydroxylé de cuivre","stageLabels":{"raw":"Brute","tumbled":"Roulée","polished":"Polie"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Polir ×1"},"facts":{"raw":"La malachite est un minéral de cuivre vert vif qui se forme souvent dans les zones altérées des gisements de cuivre.","tumbled":"Ses bandes deviennent particulièrement frappantes lorsque la pierre est polie en formes arrondies.","polished":"La malachite est relativement tendre; on la polit ou on la sculpte donc plus souvent qu’on ne la facette comme une gemme transparente dure."},"mastery":"La malachite a aussi servi de pigment. Réduite en poudre fine, elle a autrefois fourni un vert éclatant pour la peinture."},"ruby":{"name":"Rubis","subtitle":"Corindon rouge · Al₂O₃","signatureLabel":"Oxyde d’aluminium","stageLabels":{"raw":"Brut","tumbled":"Roulé","cut":"Taillé"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"Le rubis est du corindon rouge de qualité gemme. Le chrome est le principal élément responsable de sa couleur.","tumbled":"Le corindon est extrêmement dur; le rubis prend donc un poli durable et résiste mieux aux rayures que la plupart des gemmes.","cut":"Un beau rubis est taillé pour équilibrer couleur, éclat et poids, surtout parce qu’un matériau très coloré peut être précieux même en petite taille."},"mastery":"Rubis et saphir sont la même espèce minérale : le corindon. Le nom rubis est réservé au corindon gemme rouge; les autres couleurs gemmes sont généralement appelées saphirs."},"emerald":{"name":"Émeraude","subtitle":"Béryl vert · Be₃Al₂Si₆O₁₈","signatureLabel":"Silicate de béryllium et d’aluminium","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"L’émeraude est la variété verte du béryl. Le chrome, et parfois le vanadium, est responsable de sa couleur.","tumbled":"Les émeraudes contiennent souvent des inclusions et des fractures visibles; elles demandent donc plus de soin que leur dureté seule pourrait le laisser croire.","cut":"La taille émeraude classique a été développée en partie pour protéger les coins fragiles tout en mettant en valeur la couleur et la clarté."},"mastery":"Émeraude et aigue-marine sont toutes deux du béryl. Leurs couleurs radicalement différentes viennent d’éléments traces différents dans la même structure cristalline."},"hematite":{"name":"Hématite","subtitle":"Minerai de fer → Fer","signatureLabel":"Oxyde de fer","stageLabels":{"ore":"Minerai d’hématite","refined":"Fer"},"processLabels":{"ore":"Raffiner en fer"},"facts":{"ore":"L’hématite est un oxyde de fer et l’un des minerais de fer les plus importants au monde.","refined":"Le fer extrait du minerai est devenu l’un des métaux les plus importants pour les outils, les structures et les machines."},"mastery":"L’hématite peut paraître gris métallique, rouge terreux ou presque noire, mais sa trace en poudre est typiquement brun rougeâtre."},"chalcopyrite":{"name":"Chalcopyrite","subtitle":"Minerai de cuivre → Cuivre","signatureLabel":"Sulfure de cuivre et de fer","stageLabels":{"ore":"Minerai de chalcopyrite","refined":"Cuivre"},"processLabels":{"ore":"Raffiner en cuivre"},"facts":{"ore":"La chalcopyrite est un sulfure de cuivre et de fer et l’un des minéraux cuprifères les plus répandus.","refined":"Le cuivre est apprécié pour sa conductivité, sa résistance à la corrosion et sa facilité de mise en forme."},"mastery":"La chalcopyrite fraîche est jaune laiton, mais l’altération peut produire des irisations colorées parfois confondues avec celles de la bornite."},"cassiterite":{"name":"Cassitérite","subtitle":"Minerai d’étain → Étain","signatureLabel":"Oxyde d’étain","stageLabels":{"ore":"Minerai de cassitérite","refined":"Étain"},"processLabels":{"ore":"Raffiner en étain"},"facts":{"ore":"La cassitérite est un oxyde d’étain et le principal minerai dont on tire la majorité de l’étain.","refined":"L’étain est un métal mou et résistant à la corrosion, utilisé dans les soudures, les revêtements et des alliages comme le bronze."},"mastery":"L’étain a transformé la métallurgie : allié au cuivre, il produit le bronze, matériau essentiel à de nombreuses technologies anciennes."},"galena":{"name":"Galène","subtitle":"Minerai de plomb → Plomb","signatureLabel":"Sulfure de plomb","stageLabels":{"ore":"Minerai de galène","refined":"Plomb"},"processLabels":{"ore":"Raffiner en plomb"},"facts":{"ore":"La galène est un sulfure de plomb et le principal minerai de plomb. Elle forme souvent des cristaux cubiques au lustre métallique.","refined":"Le plomb est dense, mou et facile à façonner, mais il est aussi toxique et doit être manipulé avec prudence dans la vraie vie."},"mastery":"La galène peut contenir de petites quantités d’argent; certains gisements de plomb ont donc aussi été d’importantes sources d’argent."},"sphalerite":{"name":"Sphalérite","subtitle":"Minerai de zinc → Zinc","signatureLabel":"Sulfure de zinc","stageLabels":{"ore":"Minerai de sphalérite","refined":"Zinc"},"processLabels":{"ore":"Raffiner en zinc"},"facts":{"ore":"La sphalérite est un sulfure de zinc et le principal minerai de zinc. Sa couleur va du jaune-brun pâle jusqu’au presque noir.","refined":"Le zinc sert beaucoup à protéger l’acier contre la corrosion par galvanisation et entre aussi dans la composition du laiton."},"mastery":"Certaines sphalérites brillent sous la lumière ultraviolette, et quelques spécimens montrent une fluorescence particulièrement vive."},"scheelite":{"name":"Scheelite","subtitle":"Minerai de tungstène → Tungstène","signatureLabel":"Tungstate de calcium","stageLabels":{"ore":"Minerai de scheelite","refined":"Tungstène"},"processLabels":{"ore":"Raffiner en tungstène"},"facts":{"ore":"La scheelite est un tungstate de calcium et un important minerai de tungstène. Beaucoup de spécimens fluorescent en bleu-blanc sous une lumière ultraviolette à ondes courtes.","refined":"Le tungstène possède le point de fusion le plus élevé de tous les métaux purs et est recherché lorsqu’on a besoin de résistance à la chaleur et de grande dureté."},"mastery":"La fluorescence de la scheelite vient de ses groupes tungstate. De petites substitutions chimiques peuvent modifier la couleur et l’intensité de sa lueur."},"willemite":{"name":"Willemite","subtitle":"Silicate de zinc · Zn₂SiO₄","signatureLabel":"Silicate de zinc","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"La willemite est un silicate de zinc. Les spécimens contenant du manganèse peuvent produire une fluorescence verte extrêmement vive sous lumière ultraviolette.","tumbled":"Le polissage peut révéler son éclat vitreux tout en conservant la chimie responsable de sa fluorescence.","cut":"La willemite transparente est rare, mais certains cristaux convenables peuvent être facettés en pierres de collection très distinctives."},"mastery":"La willemite est devenue célèbre chez les collectionneurs de minéraux fluorescents parce que certains spécimens brillent d’un vert néon saisissant sous UV à ondes courtes."},"hackmanite":{"name":"Hackmanite","subtitle":"Variété ténébrescente de sodalite","signatureLabel":"Aluminosilicate du groupe de la sodalite","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"L’hackmanite est une variété de sodalite contenant du soufre, connue pour sa ténébrescence : la lumière ultraviolette peut temporairement intensifier ou modifier sa couleur.","tumbled":"Une surface polie rend le changement de couleur réversible plus facile à voir, même si son intensité varie d’un spécimen à l’autre.","cut":"L’hackmanite transparente peut être facettée, mais les collectionneurs apprécient souvent autant son comportement à la lumière que son apparence."},"mastery":"La ténébrescence est une forme réversible de photochromisme. Un spécimen d’hackmanite peut changer de couleur après une exposition aux UV, puis revenir graduellement à sa teinte d’origine sous une lumière ordinaire."},"apatite":{"name":"Apatite","subtitle":"Groupe de phosphates de calcium","signatureLabel":"Phosphate de calcium","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"L’apatite est un groupe de minéraux phosphatés qui existe en plusieurs couleurs. Elle définit la dureté 5 sur l’échelle de Mohs.","tumbled":"L’apatite peut prendre un beau poli, mais sa dureté modérée fait qu’elle se raye plus facilement que le quartz.","cut":"L’apatite transparente peut être facettée en gemmes très colorées, mais elle convient mieux à un port prudent qu’aux bagues de tous les jours."},"mastery":"Le nom apatite vient d’un mot grec signifiant « tromper », parce que ses cristaux peuvent ressembler à plusieurs autres minéraux."},"opal":{"name":"Opale","subtitle":"Minéraloïde de silice hydratée","signatureLabel":"Silice amorphe hydratée","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"L’opale est un minéraloïde plutôt qu’un véritable minéral parce qu’elle ne possède pas de structure cristalline régulière. Elle contient une quantité variable d’eau.","tumbled":"Certaines opales montrent un jeu de couleurs produit par l’interaction de la lumière avec un arrangement ordonné de sphères microscopiques de silice.","cut":"L’opale est généralement taillée en cabochon plutôt que facettée afin que ses effets de couleur puissent être vus sur une large surface courbe."},"mastery":"Toutes les opales ne montrent pas de jeu de couleurs. L’opale commune peut quand même être magnifique sans les éclats spectraux changeants associés à l’opale précieuse."},"diamond":{"name":"Diamant","subtitle":"Carbone · C","signatureLabel":"Carbone natif","stageLabels":{"rough":"Brut","cleaved":"Clivé","cut":"Taillé"},"processLabels":{"rough":"Cliver ×1","cleaved":"Tailler ×1"},"facts":{"rough":"Le diamant est du carbone cristallin formé sous de très fortes pressions en profondeur dans la Terre. Il n’atteint la surface que grâce à des mécanismes géologiques inhabituels.","cleaved":"Le diamant est extrêmement dur, mais dureté et ténacité ne sont pas la même chose. Son clivage parfait permet à un coup bien placé de le fendre.","cut":"La taille d’un diamant détermine la façon dont la lumière traverse la pierre. Le facettage brillant est une conception optique, pas une forme cristalline naturelle."},"mastery":"Les diamants se forment beaucoup plus profondément qu’un système épithermal. Dans cette mine composite fictive, d’anciens matériaux volcaniques ont transporté vers le haut des cristaux issus du manteau, puis les roches ont été modifiées plus tard par l’activité hydrothermale."},"obsidian":{"name":"Obsidienne","subtitle":"Verre volcanique","signatureLabel":"Verre volcanique riche en silice","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"L’obsidienne est un verre volcanique, pas un véritable minéral. Elle se forme quand une lave riche en silice refroidit trop vite pour qu’une structure cristalline ordonnée ait le temps de se former.","tumbled":"L’obsidienne fraîche se brise par fracture conchoïdale, produisant des surfaces courbes lisses et des arêtes exceptionnellement tranchantes.","cut":"L’obsidienne est généralement polie ou façonnée comme pierre décorative plutôt que facettée pour produire de la brillance."},"mastery":"Comme l’obsidienne ne possède pas de réseau cristallin régulier, les géologues la classent comme un verre naturel plutôt que comme une espèce minérale."},"olivine":{"name":"Olivine / Péridot","subtitle":"Silicate de magnésium et de fer","signatureLabel":"Silicate de magnésium et de fer","stageLabels":{"raw":"Olivine brute","tumbled":"Olivine roulée","cut":"Péridot taillé"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler en péridot"},"facts":{"raw":"L’olivine est un groupe de silicates verts de magnésium et de fer, communs dans le manteau terrestre et dans de nombreuses roches volcaniques mafiques.","tumbled":"Les roches riches en olivine peuvent s’altérer rapidement à la surface de la Terre, mais les grains frais peuvent conserver une couleur jaune-vert vive.","cut":"L’olivine de qualité gemme s’appelle péridot. La gemme et le minéral courant qui forme les roches appartiennent à la même famille minérale."},"mastery":"Le péridot est l’une des rares gemmes dont la couleur caractéristique vient d’un élément essentiel à sa chimie : le fer, plutôt que d’une impureté en traces."},"nativeSulfur":{"name":"Soufre natif","subtitle":"Soufre élémentaire · S","signatureLabel":"Soufre élémentaire","stageLabels":{"raw":"Spécimen naturel"},"processLabels":{},"facts":{"raw":"Le soufre natif peut se former autour de fumerolles volcaniques, de sources chaudes et d’autres milieux où des gaz ou fluides contenant du soufre réagissent près de la surface."},"mastery":"Le soufre est un élément, pas un silicate ni un minerai métallique. Sa couleur jaune vive peut être entièrement naturelle, sans pigment ni polissage."},"rhodochrosite":{"name":"Rhodochrosite","subtitle":"Carbonate de manganèse · MnCO₃","signatureLabel":"Carbonate de manganèse","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"La rhodochrosite est un carbonate de manganèse connu pour ses teintes roses à rouges et, dans certains gisements, ses bandes très marquées.","tumbled":"La rhodochrosite rubanée peut montrer des couches formées au fil des changements dans les fluides riches en minéraux.","cut":"Les cristaux transparents peuvent être facettés, mais une grande partie de la rhodochrosite est taillée en cabochons ou en plaques polies pour montrer ses motifs de couleur."},"mastery":"La rhodochrosite se rencontre souvent dans des filons hydrothermaux avec des minéraux sulfurés, ce qui en fait un excellent minéral pour un contexte de minéralisation épithermale."},"adularia":{"name":"Adulaire","subtitle":"Feldspath potassique de basse température","signatureLabel":"Feldspath potassique","stageLabels":{"raw":"Brute","tumbled":"Roulée","cut":"Taillée"},"processLabels":{"raw":"Polir au tonneau ×1","tumbled":"Tailler ×1"},"facts":{"raw":"L’adulaire est une variété et un habitus de croissance du feldspath potassique formés à basse température, souvent dans des filons hydrothermaux.","tumbled":"Les feldspaths comptent parmi les groupes minéraux les plus abondants de la croûte terrestre, mais l’adulaire hydrothermale témoigne d’un environnement fluide très particulier.","cut":"Certains feldspaths apparentés à l’adulaire peuvent montrer de beaux effets optiques, même si les cristaux de collection sont souvent appréciés dans leur forme naturelle."},"mastery":"L’adulaire est si caractéristique de certains systèmes épithermaux à faible sulfuration que les géologues l’utilisent comme indice important des conditions dans lesquelles un filon s’est formé."},"acanthite":{"name":"Acanthite","subtitle":"Minerai d’argent → Argent","signatureLabel":"Sulfure d’argent","stageLabels":{"ore":"Minerai d’acanthite","refined":"Argent"},"processLabels":{"ore":"Raffiner en argent"},"facts":{"ore":"L’acanthite est un sulfure d’argent et un minéral argentifère important dans de nombreux gisements hydrothermaux.","refined":"L’argent est un excellent conducteur électrique et sert en électronique, en joaillerie, dans les miroirs et dans de nombreuses technologies spécialisées."},"mastery":"L’acanthite est stable à basse température; à plus haute température, la même composition Ag₂S adopte une autre structure cristalline appelée argentite."},"nativeGold":{"name":"Or natif","subtitle":"Or élémentaire · Au","signatureLabel":"Or élémentaire","stageLabels":{"found":"Or natif"},"processLabels":{},"facts":{"found":"L’or se rencontre souvent sous forme de métal natif plutôt que comme un simple « minerai d’or ». Les fluides hydrothermaux peuvent le concentrer dans les filons et les fractures."},"mastery":"L’or est extrêmement dense, très malléable et chimiquement résistant. Ces propriétés le rendent utile de la joaillerie à l’électronique, mais sa tendreté limite ses usages structuraux."},"trilobite":{"name":"Trilobite","subtitle":"Arthropode fossile","signatureLabel":"Matière biologique fossilisée","stageLabels":{"found":"Spécimen fossile"},"processLabels":{},"facts":{"found":"Les trilobites étaient des arthropodes marins présents pendant des centaines de millions d’années. Ils ont disparu lors de l’extinction de masse de la fin du Permien."}},"ammonite":{"name":"Ammonite","subtitle":"Céphalopode marin fossile","signatureLabel":"Matière biologique fossilisée","stageLabels":{"found":"Spécimen fossile"},"processLabels":{},"facts":{"found":"Les ammonites étaient des céphalopodes marins à coquille, apparentés aux calmars et aux pieuvres modernes. Leurs formes changeant rapidement, plusieurs espèces servent de fossiles repères."}},"crinoidStem":{"name":"Tige de crinoïde","subtitle":"Fragment d’animal marin fossile","signatureLabel":"Matière biologique fossilisée","stageLabels":{"found":"Spécimen fossile"},"processLabels":{},"facts":{"found":"Les crinoïdes sont des animaux marins apparentés aux étoiles de mer. Leurs tiges se brisent souvent en petits disques qui se fossilisent facilement."}},"brachiopod":{"name":"Brachiopode","subtitle":"Animal marin fossile","signatureLabel":"Matière biologique fossilisée","stageLabels":{"found":"Spécimen fossile"},"processLabels":{},"facts":{"found":"Les brachiopodes sont des animaux marins à deux coquilles. Ils peuvent ressembler à des palourdes, mais leur anatomie et leur histoire évolutive sont très différentes."}},"belemnite":{"name":"Bélemnite","subtitle":"Céphalopode fossile apparenté aux calmars","signatureLabel":"Matière biologique fossilisée","stageLabels":{"found":"Spécimen fossile"},"processLabels":{},"facts":{"found":"Les bélemnites étaient des céphalopodes disparus apparentés aux calmars. Leurs rostres internes durs se fossilisent souvent en objets caractéristiques en forme de balle."}},"fernImpression":{"name":"Empreinte de fougère","subtitle":"Empreinte végétale fossile","signatureLabel":"Matière biologique fossilisée","stageLabels":{"found":"Spécimen fossile"},"processLabels":{},"facts":{"found":"Les empreintes végétales peuvent préserver la forme et les nervures des feuilles même lorsqu’il reste très peu de matière végétale d’origine."}},"surveyMarker":{"name":"Repère d’arpentage usé","subtitle":"Ancien repère d’arpentage minier","signatureLabel":"Objet historique","stageLabels":{"found":"Objet historique"},"processLabels":{},"facts":{"found":"Les repères d’arpentage servent à conserver des positions mesurées sous terre afin de cartographier précisément les galeries et de les relier au plan général de la mine."}},"drillBit":{"name":"Vieux trépan","subtitle":"Ancien équipement de forage","signatureLabel":"Objet historique","stageLabels":{"found":"Objet historique"},"processLabels":{},"facts":{"found":"Les outils de forage ont transformé l’exploitation de la roche dure en accélérant le perçage des trous destinés au dynamitage et à l’excavation."}},"railSpike":{"name":"Vieux crampon de rail","subtitle":"Ancienne quincaillerie du transport minier","signatureLabel":"Objet historique","stageLabels":{"found":"Objet historique"},"processLabels":{},"facts":{"found":"Les réseaux de rails souterrains servaient à transporter le minerai, les stériles, les travailleurs et le matériel. Des pièces comme les crampons et les attaches maintenaient les voies en place."}},"surveyCompass":{"name":"Boussole d’arpentage en laiton","subtitle":"Instrument historique d’arpentage souterrain","signatureLabel":"Objet historique","stageLabels":{"found":"Objet historique"},"processLabels":{},"facts":{"found":"Les arpenteurs miniers utilisaient des boussoles, des niveaux, des chaînes, puis des instruments plus précis pour cartographier les galeries et relier les nouvelles excavations à des points de référence connus."}},"miningTag":{"name":"Plaquette de mineur","subtitle":"Ancienne plaquette de contrôle","signatureLabel":"Objet historique","stageLabels":{"found":"Objet historique"},"processLabels":{},"facts":{"found":"Certaines mines utilisaient des plaquettes numérotées pour savoir qui se trouvait sous terre. Les systèmes variaient d’une exploitation à l’autre."}},"miningLamp":{"name":"Vieille lampe de mineur","subtitle":"Ancien équipement souterrain","signatureLabel":"Objet historique","stageLabels":{"found":"Objet historique"},"processLabels":{},"facts":{"found":"L’éclairage souterrain a beaucoup évolué : flammes nues, lampes de sûreté, puis éclairage électrique. Les modèles plus sûrs étaient essentiels là où des gaz inflammables pouvaient s’accumuler."}}};
  Object.entries(FR_MATERIALS).forEach(([key,fr])=>{const m=MATERIALS[key];if(!m)return;m.name=fr.name;m.subtitle=fr.subtitle;if(m.signature&&fr.signatureLabel)m.signature.label=fr.signatureLabel;if(fr.stageLabels)m.stageLabels={...m.stageLabels,...fr.stageLabels};if(fr.processLabels)m.processLabels={...m.processLabels,...fr.processLabels};if(fr.facts)m.facts={...m.facts,...fr.facts};if(fr.mastery&&m.mastery)m.mastery.fact=fr.mastery;});
  const FR_EXCEPTIONAL_VARIANTS = {"waterClearPoint":["Pointe de quartz limpide","Un cristal de quartz exceptionnellement transparent, aux faces nettes et avec très peu de zones troubles à l’intérieur."],"phantomQuartz":["Quartz fantôme","Des étapes antérieures de croissance restent visibles à l’intérieur du quartz sous forme de contours fantomatiques."],"quartzCluster":["Amas de cristaux de quartz","Plusieurs cristaux de quartz ont poussé ensemble sur la même matrice, chacun se disputant l’espace."],"amethystSceptre":["Sceptre d’améthyste","Une génération plus tardive de cristal s’est élargie près de la pointe, créant la forme caractéristique en sceptre."],"deepPurpleCluster":["Amas d’améthyste violet profond","Une couleur intense s’est développée dans un groupe très serré de cristaux de quartz."],"dogtoothCalcite":["Amas de calcite en dents de chien","Des cristaux scalénoédriques pointus forment l’habitus classique souvent surnommé « dents de chien »."],"opticalCalcite":["Cristal de calcite optique","Un cristal de calcite exceptionnellement clair montre une forte biréfringence liée à sa structure rhomboédrique."],"zonedFluorite":["Fluorite zonée en couleur","Des changements chimiques pendant la croissance ont produit des bandes de couleur visibles dans le même cristal."],"fluoriteCubes":["Amas de cubes de fluorite","Un groupe de cristaux cubiques de fluorite bien formés a poussé ensemble sur la surface d’un filon."],"pyriteCubeCluster":["Amas de cubes de pyrite","Des cubes couleur laiton imbriqués montrent la géométrie nette qui rend les cristaux de pyrite si distinctifs."],"botryoidalMalachite":["Malachite botryoïdale","Des surfaces arrondies en grappes se sont formées pendant la croissance de nombreuses fibres minuscules rayonnantes."],"fibrousMalachite":["Malachite fibreuse","De fines fibres rayonnantes donnent à ce spécimen une texture soyeuse très différente de la malachite rubanée polie."],"snowflakeObsidian":["Obsidienne flocon de neige","Des sphérulites pâles ont cristallisé dans le verre volcanique, créant le motif caractéristique en flocons."],"rainbowSheenObsidian":["Obsidienne à reflets arc-en-ciel","Des structures microscopiques dans le verre volcanique réfléchissent la lumière en bandes d’irisation subtiles."],"gemmyOlivine":["Cristal d’olivine gemme","Un cristal d’olivine exceptionnellement transparent montre pourquoi l’olivine de qualité gemme porte le nom de péridot."],"bandedRhodochrosite":["Rhodochrosite rubanée","Des dépôts minéraux répétés ont produit des bandes roses et pâles bien distinctes dans le spécimen."],"sulfurCluster":["Amas de cristaux de soufre natif","Des cristaux de soufre jaune vif se sont formés ensemble dans un environnement géothermal."],"rubyMatrix":["Rubis dans sa matrice","Le corindon rouge est resté attaché à la roche encaissante dans laquelle il a cristallisé au lieu d’être séparé comme gemme libre."],"emeraldMatrix":["Émeraude dans sa matrice","Des cristaux de béryl vert restent enchâssés dans une roche encaissante contrastante, préservant davantage leur contexte géologique."],"specularHematite":["Hématite spéculaire","De minuscules cristaux lamellaires d’hématite créent une surface métallique scintillante appelée spécularite."],"dendriticGold":["Or natif dendritique","L’or natif a poussé en formes ramifiées, comme de petits arbres, le long de fractures plutôt qu’en pépite arrondie."]};
  Object.values(EXCEPTIONAL_VARIANTS).flat().forEach(v=>{const fr=FR_EXCEPTIONAL_VARIANTS[v.id];if(fr){v.label=fr[0];v.detail=fr[1];}});
  const FR_ACHIEVEMENTS = {"firstCrunch":["Premier crac","Mine ta première case."],"shiny":["Ça brille!","Trouve ton premier minéral ou minerai."],"museumPiece":["Pièce de musée","Fais ton premier don au musée."],"shelfRespect":["Respect de l’étagère","Complète ton premier ensemble de matériau."],"fossilFever":["Fièvre fossile","Donne trois fossiles différents."],"oldStuff":["Vieilles affaires","Donne trois objets historiques différents."],"foolMeOnce":["Pas de l’or","Trouve de la pyrite. Ce n’est toujours pas de l’or."],"sio2Enjoyer":["Fan de SiO₂","Trouve du quartz, de l’améthyste, de la citrine et du quartz rose."],"familyResemblance":["Un air de famille","Maîtrise le saphir et le rubis."],"berylBuddies":["Copains de béryl","Maîtrise l’aigue-marine et l’émeraude."],"metalhead":["Métalleux","Raffine au moins une fois du fer, du cuivre, de l’étain, du plomb et du zinc."],"prospector":["Prospecteur","Utilise le scanner de zone 25 fois."],"dejaVu":["Déjà vu","Scanne dix cases au moins deux fois."],"xrayish":["Presque des rayons X","Déterre quelque chose après avoir scanné sa case deux fois."],"beepBeep":["Bip bip","Utilise le détecteur de métaux pour la première fois."],"detectorist":["Détectoriste","Déterre une cible métallique dans une zone signalée par le détecteur."],"barelyThere":["Jusqu’au bout","Utilise le tout dernier point de durabilité d’une pioche."],"lastSwingLuck":["Coup de chance final","Trouve quelque chose avec le dernier coup de pioche."],"sellout":["Liquidation","Utilise Tout vendre dix fois."],"fourFloorsDown":["Quatre niveaux plus bas","Débloque la profondeur 4."],"shinyGoblin":["Gobelin à brillants","Trouve 100 spécimens au total."],"fullCoverage":["Large couverture","Scanne au moins la moitié d’une paroi rocheuse."],"allThatGlitters":["Tout ce qui brille","Maîtrise la citrine, la topaze et la pyrite."],"glowUp":["Coup d’éclat","Observe un spécimen fluorescent du musée sous UV."],"glowShow":["Le spectacle fluorescent","Aie cinq matériaux fluorescents différents représentés au musée."],"fiveFloorsDown":["Lumières d’en bas","Débloque la profondeur 5 : la Zone lumineuse."],"heatRated":["Habillé pour la job","Équipe la tenue de protection géothermale."],"epithermal":["La mine s’arrête ici","Débloque la profondeur 6 : la Zone épithermale."],"diamondRough":["Pas invincible","Trouve ton premier diamant."],"actualGold":["OK, celui-là, c’est de l’or","Trouve de l’or natif."],"yellowRock":["Agressivement jaune","Trouve du soufre natif."],"silverLining":["Une lueur d’argent","Raffine de l’acanthite en argent."],"peridotProper":["Même roche, nom chic","Taille de l’olivine en péridot."],"adulariaClue":["Basse température, gros drame","Trouve de l’adulaire dans la Zone épithermale."],"pinkVein":["Filon rose","Trouve de la rhodochrosite."],"fossilRecord":["Toute l’histoire fossile","Complète toutes les vitrines de fossiles du musée."],"historyBuff":["Historien de la mine","Complète toutes les vitrines d’objets historiques."],"mineralHall":["Salle des minéraux complète","Complète toutes les vitrines de minéraux et de gemmes."],"oreHall":["Minerais et métaux complets","Complète toutes les vitrines de minerais et de métaux."],"sixDeep":["Six profondeurs","Mine au moins une case rocheuse à chaque profondeur."],"exceptionalTaste":["ÇA, c’est un spécimen","Trouve ton premier spécimen exceptionnel."],"curator":["À toi la vitrine","Place ton premier spécimen exceptionnel dans la vitrine de la Collection personnelle."],"preparedProspector":["Bien préparé","Utilise une trousse de prospecteur et la Cible du collectionneur sur la même paroi."],"focusedFind":["Exactement ce que je cherchais","Trouve un spécimen exceptionnel correspondant à ta Cible du collectionneur."],"specimenSeller":["Je peux laisser partir celui-là","Vends un spécimen exceptionnel de la Réserve de spécimens."],"tenExceptional":["Instinct de dragon","Trouve dix spécimens exceptionnels après avoir complété le musée."],"allMetals":["Métal lourd","Raffine du fer, du cuivre, de l’étain, du plomb, du zinc, du tungstène et de l’argent."],"finalVein":["Ensemble épithermal","Complète tous les nouveaux spécimens de base introduits dans la Zone épithermale."],"trueRockhound":["VRAI CHERCHE-CAILLOUX","Complète tout le musée. Aucune réinitialisation. Aucun prestige. Tu as fini le jeu."],"rockaholic":["CAILLOUXHOLIQUE","Complète le musée, maximise chaque amélioration permanente, découvre tous les sujets de base et gagne tous les autres succès."]};
  ACHIEVEMENTS.forEach(a=>{const fr=FR_ACHIEVEMENTS[a.id];if(fr){a.name=fr[0];a.description=fr[1];}});
  WINGS[0].name='Salle des minéraux';WINGS[1].name='Minerais et métaux';WINGS[2].name='Aile des fossiles';WINGS[3].name='Aile historique';
  DEPTHS[1].name="Filon supérieur";DEPTHS[1].note="Travaux proches de la surface où les minéraux communs et les minerais oxydés sont les plus faciles à atteindre. L’altération et les eaux souterraines peuvent modifier considérablement les minéraux si près de la surface.";
  DEPTHS[2].name="Galeries basses";DEPTHS[2].note="Des galeries plus anciennes et plus profondes recoupent plusieurs couches minéralisées. Les changements de pression, de température et de roche encaissante créent des assemblages minéraux différents.";
  DEPTHS[3].name="Galerie profonde";DEPTHS[3].note="Des fractures plus profondes ont servi de voies aux fluides riches en minéraux, laissant derrière eux des cristaux et des minerais métallifères à mesure que les conditions changeaient.";
  DEPTHS[4].name="Filons cristallins";DEPTHS[4].note="Des fractures remplies de fluides minéralisateurs peuvent produire des filons riches en cristaux. Des éléments et conditions de croissance différents donnent aux minéraux apparentés des couleurs radicalement différentes.";
  DEPTHS[5].name="Zone lumineuse";DEPTHS[5].note="Certains minéraux absorbent le rayonnement ultraviolet et restituent une partie de cette énergie sous forme de lumière visible : la fluorescence. L’effet dépend de la chimie du minéral et des impuretés en traces.";
  DEPTHS[6].name="Zone épithermale";DEPTHS[6].note="Les gisements épithermaux se forment lorsque des fluides hydrothermaux chauds et riches en minéraux circulent dans des roches volcaniques peu profondes. En refroidissant, en bouillant ou en réagissant avec la roche environnante, ces fluides peuvent laisser des filons spectaculaires de minéraux et de minerais métalliques.";
  DURABILITY_LEVELS[0].label="Pioche de base";
  DURABILITY_LEVELS[1].label="Manche renforcé";
  DURABILITY_LEVELS[2].label="Pioche d’acier";
  DURABILITY_LEVELS[3].label="Pioche de géologue";
  DURABILITY_LEVELS[4].label="Pioche pour travaux profonds";
  DURABILITY_LEVELS[5].label="Pioche à roche au carbure";
  SURVEY_LEVELS[0]={...SURVEY_LEVELS[0],name:"Aucun",next:"Scanner de terrain",description:"Débloque le scanner de zone 3×3. Les premiers scans indiquent les signatures chimiques plutôt que le nom exact des gemmes."};
  SURVEY_LEVELS[1]={...SURVEY_LEVELS[1],name:"Scanner de terrain",next:"Scanner spectral",description:"Indique la chimie et l’intensité du signal dans la zone 3×3 choisie. Les cases scannées restent marquées."};
  SURVEY_LEVELS[2]={...SURVEY_LEVELS[2],name:"Scanner spectral",next:"Analyseur minéral",description:"Ajoute des renseignements sur la forme du dépôt et repère les signatures inhabituelles non minérales."};
  SURVEY_LEVELS[3]={...SURVEY_LEVELS[3],name:"Analyseur minéral",next:null,description:"Identifie les minéraux exacts et distingue les signatures fossiles des objets historiques."};
  SCAN_CHARGE_LEVELS.forEach(x=>x.label=`${x.uses} scan${x.uses===1?'':'s'} par paroi`);
  WORKSHOP_LEVELS[0]={...WORKSHOP_LEVELS[0],name:"Atelier de base",next:"Atelier de précision",description:"Traite tes premiers minéraux et minerais transformables."};
  WORKSHOP_LEVELS[1]={...WORKSHOP_LEVELS[1],name:"Atelier de précision",next:"Atelier lapidaire avancé",description:"Ajoute la prise en charge d’un plus grand éventail de minéraux et minerais de milieu de partie."};
  WORKSHOP_LEVELS[2]={...WORKSHOP_LEVELS[2],name:"Atelier lapidaire avancé",next:"Atelier lapidaire maître",description:"Traite des gemmes plus résistantes et des minerais métallifères plus profonds."};
  WORKSHOP_LEVELS[3]={...WORKSHOP_LEVELS[3],name:"Atelier lapidaire maître",next:"Atelier lapidaire spécialisé",description:"Traite des gemmes exigeantes des zones profondes et prépare l’atelier aux matériaux inhabituels."};
  WORKSHOP_LEVELS[4]={...WORKSHOP_LEVELS[4],name:"Atelier lapidaire spécialisé",next:"Banc de taille maître",description:"Ajoute la précision et les abrasifs nécessaires aux gemmes, minéraloïdes et minerais métallifères de la zone finale."};
  WORKSHOP_LEVELS[5]={...WORKSHOP_LEVELS[5],name:"Banc de taille maître",next:null,description:"Un banc de précision conçu pour traiter tous les spécimens transformables de la mine."};
  DEPTH_UPGRADES[2].description="Débloque la profondeur 2 : les Galeries basses, avec de nouvelles gemmes, des minéraux métalliques et davantage de fossiles à trouver.";
  DEPTH_UPGRADES[3].description="Débloque la profondeur 3 : la Galerie profonde, avec de nouvelles familles cristallines, des minéraux colorés, un autre minerai métallifère et des traces historiques plus profondes.";
  DEPTH_UPGRADES[4].description="Débloque la profondeur 4 : les Filons cristallins, avec des gemmes de grande qualité, de nouveaux minerais métallifères, des fossiles et des objets historiques.";
  DEPTH_UPGRADES[5].description="Débloque la profondeur 5 : la Zone lumineuse, avec des minéraux fluorescents, un minerai inhabituel de métal lourd, un minéraloïde, des bélemnites et des traces plus profondes de l’histoire minière.";
  DEPTH_UPGRADES[6].description="Ouvre la route finale vers la profondeur 6 : la Zone épithermale, un environnement volcanique-hydrothermal chaud où des fluides en ébullition ont déposé des minéraux et des métaux inhabituels.";
  Object.assign(PROSPECTING_SUPPLIES.prospectorKit,{"label":"Trousse de prospecteur","description":"Arme-la pour une nouvelle paroi. Quand tu engages cette paroi en minant la première case, la chance de spécimen exceptionnel passe de 5 % à 50 %."});
  Object.assign(PROSPECTING_SUPPLIES.masterProspectorKit,{"label":"Trousse de maître prospecteur","description":"Une trousse haut de gamme pour une chasse sérieuse. Sur une nouvelle paroi engagée, elle fait passer la chance de spécimen exceptionnel de 5 % à 80 %."});
  Object.assign(PROSPECTING_SUPPLIES.collectorsFocus,{"label":"Cible du collectionneur","description":"Arme-la en choisissant une cible pour une nouvelle paroi. Si un spécimen exceptionnel apparaît et que ce matériau est présent, la cible reçoit une pondération de 60 %."});


  const emptyInventory = () => Object.fromEntries(Object.entries(MATERIALS).map(([k,m]) => [k,Object.fromEntries(m.stages.map(s => [s,0]))]));
  const emptyCollection = () => Object.fromEntries(Object.entries(MATERIALS).map(([k,m]) => [k,Object.fromEntries(m.stages.map(s => [s,false]))]));
  const emptyStats = () => Object.fromEntries(Object.keys(MATERIALS).map(k => [k,{found:0,sold:0,donated:0,processed:0,earned:0}]));
  const emptyDiscovery = () => Object.fromEntries(Object.keys(MATERIALS).map(k => [k,{discovered:false,depths:[]}]));




  const defaultState = () => ({
    credits:0,
    unlockedDepth:1,
    currentDepth:1,
    upgrades:{durability:0,surveying:0,workshop:0,scannerUses:0,metalDetector:false,uvLamp:false,geothermalGear:false,scannerHeatShield:false,detectorHeatShield:false},
    settings:{autoProcessByMaterial:{},museumUv:false},
    inventory:emptyInventory(),
    collection:emptyCollection(),
    stats:emptyStats(),
    discovery:emptyDiscovery(),
    achievements:{},
    postgame:{
      completed:false,completedAt:null,completionSeen:false,exceptionalFound:0,exceptionalSold:0,nextCollectibleId:1,
      specimenStorage:[],personalSlots:Array(21).fill(null),
      supplies:{prospectorKit:0,masterProspectorKit:0,collectorsFocus:0},
      armedSupplies:{prospectorKit:false,masterProspectorKit:false,collectorsFocus:false,focusTarget:null},
      geodeRetiredMigration:false,chalkRetiredMigration:false
    },
    meta:{
      tilesMined:0,scansUsed:0,doubleScans:0,anomalyFinds:0,metalSweeps:0,metalSignalFinds:0,
      facesFinished:0,lastSwingFinds:0,sellAllUses:0,fullSurveyFaces:0,taglineTaps:0,uvViews:0,fullProspectingStacks:0,focusedExceptionalFinds:0,depthsMined:{}
    },
    face:null
  });




  let state = loadState();
  let openWorkbenchKey = null;
  let toastTimer = null;
  let scanMode = false;
  let activePanel = 'mine';
  let heatWarningVisible = false;
  let focusPickerOpen = false;
  const openStorageKeys = new Set();
  const panelScrollPositions = Object.create(null);




  const $ = id => document.getElementById(id);
  const els = {
    depthName:$('depthName'), depthNumber:$('depthNumber'), durability:$('durability'), maxDurability:$('maxDurability'), durabilityMeter:$('durabilityMeter'),
    surveyLevel:$('surveyLevel'), scanUseSummary:$('scanUseSummary'), mineBalance:$('mineBalance'), depthSelector:$('depthSelector'), depthFieldNote:$('depthFieldNote'), scanButton:$('scanButton'), scanButtonStatus:$('scanButtonStatus'),
    metalDetectorButton:$('metalDetectorButton'), detectorButtonStatus:$('detectorButtonStatus'),
    postgameProspectingTools:$('postgameProspectingTools'), prospectorKitButton:$('prospectorKitButton'), prospectorKitStatus:$('prospectorKitStatus'), masterProspectorKitButton:$('masterProspectorKitButton'), masterProspectorKitStatus:$('masterProspectorKitStatus'), collectorsFocusButton:$('collectorsFocusButton'), collectorsFocusStatus:$('collectorsFocusStatus'), collectorFocusPicker:$('collectorFocusPicker'), collectorFocusMineSelect:$('collectorFocusMineSelect'), applyCollectorFocusButton:$('applyCollectorFocusButton'),
    mineBoard:$('mineBoard'), faceFinds:$('faceFinds'), newFaceButton:$('newFaceButton'), surfaceButton:$('surfaceButton'), mineMessage:$('mineMessage'),
    workbenchList:$('workbenchList'), workbenchDiscoveryCount:$('workbenchDiscoveryCount'), masteredSellValue:$('masteredSellValue'), sellAllMasteredButton:$('sellAllMasteredButton'), postgameWorkbench:$('postgameWorkbench'), museumWings:$('museumWings'), museumCount:$('museumCount'), museumMeter:$('museumMeter'), completionPlaque:$('completionPlaque'), personalCollectionPanel:$('personalCollectionPanel'), personalCollectionSection:$('personalCollectionSection'), personalCollectionGrid:$('personalCollectionGrid'), specimenStorageSection:$('specimenStorageSection'), collectionNavButton:$('collectionNavButton'), bottomNav:document.querySelector('.bottom-nav'),
    museumLighting:$('museumLighting'), normalLightButton:$('normalLightButton'), uvLightButton:$('uvLightButton'),
    achievementGrid:$('achievementGrid'), achievementCount:$('achievementCount'), achievementMeter:$('achievementMeter'),
    shopBalance:$('shopBalance'), upgradeList:$('upgradeList'), prospectingShop:$('prospectingShop'), resetButton:$('resetButton'), toast:$('toast'),
    mobileMineHud:$('mobileMineHud'), mobileDurability:$('mobileDurability'), mobileScans:$('mobileScans'),
    gameTitle:$('gameTitle'), gameTagline:$('gameTagline'), completionModal:$('completionModal'), completionBody:$('completionBody'), keepMiningButton:$('keepMiningButton'),
    specimenInspectModal:$('specimenInspectModal'), specimenInspectImage:$('specimenInspectImage'), specimenInspectTitle:$('specimenInspectTitle'), specimenInspectDetail:$('specimenInspectDetail'), specimenInspectMeta:$('specimenInspectMeta'), specimenInspectClose:$('specimenInspectClose')
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
    // A single delegated click handler covers mouse, keyboard, and touch.
    // The earlier touch-specific patches were masking a scanner analysis error,
    // not an input problem.
    els.mineBoard.addEventListener('click',handleBoardClick);
    els.metalDetectorButton.addEventListener('click',useMetalDetector);
    els.prospectorKitButton?.addEventListener('click',useProspectorKit);
    els.masterProspectorKitButton?.addEventListener('click',useMasterProspectorKit);
    els.collectorsFocusButton?.addEventListener('click',toggleCollectorFocusPicker);
    els.applyCollectorFocusButton?.addEventListener('click',()=>useCollectorsFocus(els.collectorFocusMineSelect?.value));
    els.normalLightButton.addEventListener('click',()=>setMuseumLighting(false));
    els.uvLightButton.addEventListener('click',()=>setMuseumLighting(true));
    els.sellAllMasteredButton.addEventListener('click',sellAllMastered);
    els.resetButton.addEventListener('click',resetGame);
    if(els.keepMiningButton)els.keepMiningButton.addEventListener('click',closeCompletionModal);
    els.specimenInspectClose?.addEventListener('click',closeExceptionalInspect);
    els.specimenInspectModal?.addEventListener('click',event=>{if(event.target===els.specimenInspectModal)closeExceptionalInspect();});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!els.specimenInspectModal?.classList.contains('hidden'))closeExceptionalInspect();});




    renderAll();
    if(state.postgame?.completed&&!state.postgame.completionSeen)setTimeout(openCompletionModal,120);
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
        discovery:fresh.discovery,
        achievements:{...(parsed.achievements||{})},
        meta:{...fresh.meta,...(parsed.meta||{}),depthsMined:{...(fresh.meta.depthsMined||{}),...(parsed.meta?.depthsMined||{})}},
        postgame:{...fresh.postgame,...(parsed.postgame||{}),specimenStorage:Array.isArray(parsed.postgame?.specimenStorage)?[...parsed.postgame.specimenStorage]:Array.isArray(parsed.postgame?.vault)?[...parsed.postgame.vault]:[],personalSlots:Array.isArray(parsed.postgame?.personalSlots)?parsed.postgame.personalSlots.slice(0,21):Array(21).fill(null),supplies:{...fresh.postgame.supplies,...(parsed.postgame?.supplies||{})},armedSupplies:{...fresh.postgame.armedSupplies,...(parsed.postgame?.armedSupplies||{})}}
      };




      Object.entries(MATERIALS).forEach(([k,m]) => {
        m.stages.forEach(stage => {
          merged.inventory[k][stage] = parsed.inventory?.[k]?.[stage] ?? 0;
          merged.collection[k][stage] = parsed.collection?.[k]?.[stage] ?? false;
        });
        merged.stats[k] = {...fresh.stats[k],...(parsed.stats?.[k]||{})};




        const priorDiscovery=parsed.discovery?.[k];
        const hasHistoricalEvidence=(merged.stats[k].found||0)>0 || (merged.stats[k].sold||0)>0 || (merged.stats[k].donated||0)>0 || (merged.stats[k].processed||0)>0 || m.stages.some(stage=>(merged.inventory[k][stage]||0)>0 || !!merged.collection[k][stage]);
const discovered=!!priorDiscovery?.discovered || hasHistoricalEvidence;
        let depths=Array.isArray(priorDiscovery?.depths)?priorDiscovery.depths.map(Number).filter(d=>DEPTHS[d]&&d<=merged.unlockedDepth):[];




        // Beta 1.2.2 begins tracking where each discovery was actually encountered.
        // Older saves did not store that history, so seed useful known locations for
        // already-discovered items from the depths the old save had débloqué.
        if(discovered && !depths.length){
          const currentFaceSawIt=parsed.face?.finds?.[k]>0 ? Number(parsed.face?.depth||parsed.currentDepth||1) : null;
          if(currentFaceSawIt && DEPTHS[currentFaceSawIt])depths=[currentFaceSawIt];
          else depths=spawnDepthsFor(k).filter(d=>d<=Math.max(1,Math.min(6,merged.unlockedDepth||1)));
        }
        merged.discovery[k]={discovered,depths:[...new Set(depths)].sort((a,b)=>a-b)};
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




      merged.unlockedDepth = Math.max(1,Math.min(6,merged.unlockedDepth||1));
      merged.currentDepth = Math.max(1,Math.min(merged.unlockedDepth,merged.currentDepth||1));
      merged.upgrades.workshop = Math.max(0,Math.min(WORKSHOP_LEVELS.length-1,merged.upgrades.workshop||0));
      merged.upgrades.scannerUses = Math.max(0,Math.min(SCAN_CHARGE_LEVELS.length-1,merged.upgrades.scannerUses||0));
      merged.upgrades.surveying = Math.max(0,Math.min(SURVEY_LEVELS.length-1,merged.upgrades.surveying||0));
      merged.upgrades.durability = Math.max(0,Math.min(DURABILITY_LEVELS.length-1,merged.upgrades.durability||0));
      merged.upgrades.metalDetector = !!merged.upgrades.metalDetector;
      merged.upgrades.uvLamp = !!merged.upgrades.uvLamp;
      merged.upgrades.geothermalGear = !!merged.upgrades.geothermalGear;
      merged.upgrades.scannerHeatShield = !!merged.upgrades.scannerHeatShield;
      merged.upgrades.detectorHeatShield = !!merged.upgrades.detectorHeatShield;
      merged.postgame.completed = !!merged.postgame.completed;
      merged.postgame.completionSeen = !!merged.postgame.completionSeen;
      merged.postgame.exceptionalFound = Math.max(0,merged.postgame.exceptionalFound||0);
      merged.postgame.exceptionalSold = Math.max(0,merged.postgame.exceptionalSold||0);
      merged.postgame.nextCollectibleId = Math.max(1,merged.postgame.nextCollectibleId||1);
      merged.postgame.supplies = {...fresh.postgame.supplies,...(merged.postgame.supplies||{})};
      Object.keys(merged.postgame.supplies).forEach(k=>merged.postgame.supplies[k]=Math.max(0,Math.floor(Number(merged.postgame.supplies[k])||0)));
      // Beta 1.4.4 restores next-face arming, but supplies are only consumed when
      // the player commits a prepared face by mining its first tile.
      merged.postgame.armedSupplies = {...fresh.postgame.armedSupplies,...(parsed.postgame?.armedSupplies||{})};
      ['prospectorKit','masterProspectorKit','collectorsFocus'].forEach(k=>merged.postgame.armedSupplies[k]=!!merged.postgame.armedSupplies[k]&&(merged.postgame.supplies[k]||0)>0);
      if(merged.postgame.armedSupplies.masterProspectorKit)merged.postgame.armedSupplies.prospectorKit=false;
      if(!merged.postgame.armedSupplies.collectorsFocus)merged.postgame.armedSupplies.focusTarget=null;
      // Beta 1.5.1 trims the display case from 30 to 21 spaces. Anything that
      // occupied retired slots is preserved instead of disappearing.
      if(Array.isArray(parsed.postgame?.personalSlots) && parsed.postgame.personalSlots.length>21){
        parsed.postgame.personalSlots.slice(21).filter(Boolean).forEach(item=>{
          if(item?.kind==='exceptional')merged.postgame.specimenStorage.push(item);
          else if(item?.kind==='regular'&&item.key&&item.stage&&merged.inventory[item.key]?.[item.stage]!==undefined)merged.inventory[item.key][item.stage]++;
          else if(item?.kind==='geode')merged.credits+=Math.max(0,Number(item.sellValue)||1000);
        });
      }
      while(merged.postgame.personalSlots.length<21)merged.postgame.personalSlots.push(null);
      if(merged.postgame.personalSlots.length>21)merged.postgame.personalSlots=merged.postgame.personalSlots.slice(0,21);




      // Beta 1.5.6 retires Survey Chalk because the completion pickaxe makes its
      // vague location hint largely redundant. Refund any unused Chalk at full price
      // once, then clear old armed/prepared Chalk state without changing the save key.
      if(!parsed.postgame?.chalkRetiredMigration){
        const oldChalk=Math.max(0,Math.floor(Number(parsed.postgame?.supplies?.surveyChalk)||0));
        merged.credits+=oldChalk*2000;
        merged.postgame.chalkRetiredMigration=true;
      }
      delete merged.postgame.supplies.surveyChalk;
      delete merged.postgame.armedSupplies.surveyChalk;
      if(merged.face?.preparedSupplies)delete merged.face.preparedSupplies.surveyChalk;
      if(merged.face?.prospectingEffects)delete merged.face.prospectingEffects.surveyChalk;
      if(Array.isArray(merged.face?.exceptionalHintTiles))merged.face.exceptionalHintTiles=[];




      // Beta 1.4.2 retires the geode experiment. Preserve exceptional spécimens,
      // return ordinary display spécimens to inventory, and convert retired geode
      // items / remaining cartridges to ordinary money once so old beta saves are safe.
      if(!parsed.postgame?.geodeRetiredMigration){
        let refund=0;
        refund+=Math.max(0,Number(parsed.postgame?.geodeCartridges)||0)*2000;
        refund+=Math.max(0,Number(parsed.postgame?.uncrackedGeodes)||0)*600;
        const oldStored=Array.isArray(parsed.postgame?.specimenStorage)?parsed.postgame.specimenStorage:Array.isArray(parsed.postgame?.vault)?parsed.postgame.vault:[];
        oldStored.forEach(item=>{if(item?.kind==='geode')refund+=Math.max(0,Number(item.sellValue)||1000);});
        merged.postgame.personalSlots.forEach((item,i)=>{
          if(!item)return;
          if(item.kind==='regular'&&item.key&&item.stage&&merged.inventory[item.key]?.[item.stage]!==undefined){
            merged.inventory[item.key][item.stage]++;
            merged.postgame.personalSlots[i]=null;
          }else if(item.kind==='geode'){
            refund+=Math.max(0,Number(item.sellValue)||1000);
            merged.postgame.personalSlots[i]=null;
          }
        });
        merged.credits+=refund;
        merged.postgame.geodeRetiredMigration=true;
        delete merged.achievements.rockaholic;
      }
      merged.postgame.specimenStorage=(merged.postgame.specimenStorage||[]).filter(item=>item?.kind==='exceptional');
      merged.postgame.personalSlots=merged.postgame.personalSlots.map(item=>item?.kind==='exceptional'?item:null);
      delete merged.postgame.vault;
      delete merged.postgame.uncrackedGeodes;
      delete merged.postgame.geodesCracked;
      delete merged.postgame.geodeCartridges;
      delete merged.postgame.lastGeode;
      delete merged.achievements.geodeFound;
      delete merged.achievements.crackAttack;
      delete merged.achievements.tenGeodes;
      delete merged.achievements.fullHouse;
      merged.settings.museumUv = !!merged.settings.museumUv && merged.upgrades.uvLamp;




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
  function spawnDepthsFor(k){
    return Object.entries(DEPTHS).filter(([,cfg])=>Object.prototype.hasOwnProperty.call(cfg.materials||{},k) || (cfg.sideFinds||[]).some(x=>x.key===k)).map(([d])=>Number(d));
  }
  function isDiscovered(k){ return !!state.discovery?.[k]?.discovered || (state.stats?.[k]?.found||0)>0; }
  function shouldObscureIdentity(k){
    const family=MATERIALS[k]?.family;
    return !isDiscovered(k) && ['mineral','ore','fossil','artifact'].includes(family);
  }
  function discoveredDepths(k){ return [...new Set((state.discovery?.[k]?.depths||[]).map(Number).filter(d=>DEPTHS[d]))].sort((a,b)=>a-b); }
  function depthKnowledgeText(k){
    const depths=discoveredDepths(k);
    if(!depths.length)return 'Profondeur non enregistrée';
    const prefix=depths.length===1?'Profondeur':'Profondeurs';
    return `${prefix} ${depths.join(', ')}`;
  }
  function museumSearchHint(k){
    const material=MATERIALS[k];
    if(!material || !['fossil','artifact'].includes(material.family))return '';
    const eligible=spawnDepthsFor(k);
    const available=eligible.filter(d=>d<=state.unlockedDepth);
    if(!available.length)return '<span class="museum-search-hint">Cherche plus profond…</span>';
    const labels=available.map(d=>`Profondeur ${d}`);
    return `<span class="museum-search-hint">Chercher : ${labels.join(', ')}</span>`;
  }
  function maskUndiscoveredNames(text){
    let out=String(text||'');
    Object.entries(MATERIALS).forEach(([k,m])=>{
      if(!shouldObscureIdentity(k))return;
      const names=[m.name];
      Object.values(m.stageLabels||{}).forEach(label=>{
        if(/^[A-Z][A-Za-z -]+$/.test(label) && !['Raw','Tumbled','Cut','Polished','Natural spécimen'].includes(label))names.push(label);
      });
      names.sort((a,b)=>b.length-a.length).forEach(name=>{
        if(!name)return;
        out=out.replace(new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi'),'???');
      });
    });
    return out;
  }
  function isBulkSellEligible(k){
    const m=MATERIALS[k];
    if(m.family==='fossil'||m.family==='artifact')return m.stages.every(stage=>!!state.collection[k]?.[stage]);
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
  function currentPickSwings(){ return state.postgame?.completed?GRID_SIZE*GRID_SIZE:DURABILITY_LEVELS[state.upgrades.durability].swings; }
  function currentPickLabel(){ return state.postgame?.completed?'Pioche d’acier doré':DURABILITY_LEVELS[state.upgrades.durability].label; }
  function isMuseumComplete(){ return Object.entries(MATERIALS).every(([k,m])=>m.stages.every(stage=>!!state.collection[k]?.[stage])); }
  function firstEmptyPersonalSlot(){ return state.postgame.personalSlots.findIndex(x=>!x); }
  function postgameItemId(){ const id=`pg${state.postgame.nextCollectibleId++}`; return id; }
  function exceptionalEligible(k){ return !!EXCEPTIONAL_VARIANTS[k] && ['mineral','ore'].includes(MATERIALS[k]?.family); }
  function exceptionalVariantsFor(k){ return EXCEPTIONAL_VARIANTS[k]||[]; }
  function exceptionalKeysForDepth(depth){
    return Object.keys(DEPTHS[depth]?.materials||{}).filter(k=>exceptionalEligible(k)&&isDiscovered(k));
  }
  function variantById(k,id){ return exceptionalVariantsFor(k).find(v=>v.id===id)||null; }
  function makeExceptional(k,variantId=null){
    const choices=exceptionalVariantsFor(k);
    if(!choices.length)return null;
    const variant=variantById(k,variantId)||choices[randInt(0,choices.length-1)];
    return {id:postgameItemId(),kind:'exceptional',key:k,variantId:variant.id,label:variant.label,icon:'✦',detail:variant.detail,sellValue:variant.sellValue,foundDepth:state.currentDepth,foundAt:new Date().toISOString()};
  }
  function specialItemSellValue(item){ return item?.kind==='exceptional'?Math.max(0,Number(item.sellValue)||2500):0; }
  function placeExceptionalOnFace(tiles,depth,effects,chanceOverride=null){
    const eligibleTiles=tiles.filter(t=>!t.revealed&&t.material&&exceptionalEligible(t.material)&&isDiscovered(t.material));
    if(!eligibleTiles.length)return null;
    const chance=chanceOverride??(effects.masterProspectorKit?EXCEPTIONAL_MASTER_KIT_CHANCE:effects.prospectorKit?EXCEPTIONAL_KIT_CHANCE:EXCEPTIONAL_BASE_CHANCE);
    if(Math.random()>=chance)return null;
    let pool=eligibleTiles;
    if(effects.collectorsFocus&&effects.focusTarget){
      const focused=eligibleTiles.filter(t=>t.material===effects.focusTarget);
      if(focused.length&&Math.random()<COLLECTOR_FOCUS_WEIGHT)pool=focused;
    }
    const tile=pool[randInt(0,pool.length-1)];
    const variants=exceptionalVariantsFor(tile.material);
    if(!variants.length)return null;
    const variant=variants[randInt(0,variants.length-1)];
    tile.exceptionalVariantId=variant.id;
    return {index:tile.index,key:tile.material,variantId:variant.id};
  }
  function currentExceptionalTile(){
    const i=state.face?.exceptionalTileIndex;
    return Number.isInteger(i)?state.face.tiles?.[i]||null:null;
  }
  function exceptionalAlreadyFound(){
    const tile=currentExceptionalTile();
    return !!tile?.revealed;
  }
  function emptyProspectingEffects(){
    return {prospectorKit:false,masterProspectorKit:false,collectorsFocus:false,focusTarget:null};
  }
  function faceHasMinedTile(face=state.face){
    return !!face?.tiles?.some(t=>t.revealed);
  }
  function preparedSuppliesForDepth(depth){
    const armed=state.postgame?.armedSupplies||emptyProspectingEffects();
    const stock=state.postgame?.supplies||{};
    const focusValid=!!armed.collectorsFocus&&!!armed.focusTarget&&exceptionalKeysForDepth(depth).includes(armed.focusTarget)&&(stock.collectorsFocus||0)>0;
    const master=!!armed.masterProspectorKit&&(stock.masterProspectorKit||0)>0;
    return {
      prospectorKit:!master&&!!armed.prospectorKit&&(stock.prospectorKit||0)>0,
      masterProspectorKit:master,
      collectorsFocus:focusValid,
      focusTarget:focusValid?armed.focusTarget:null
    };
  }
  function markFullProspectingStack(){
    const fx=state.face?.prospectingEffects||{};
    if((fx.prospectorKit||fx.masterProspectorKit)&&fx.collectorsFocus&&!state.face.fullProspectingStackCounted){
      state.face.fullProspectingStackCounted=true;
      state.meta.fullProspectingStacks=(state.meta.fullProspectingStacks||0)+1;
    }
  }
  function removePreparedSupplyFromCurrentFace(key){
    const face=state.face;
    if(!face||face.prospectingCommitted||faceHasMinedTile(face)||!face.preparedSupplies)return;
    face.preparedSupplies[key]=false;
    if(key==='collectorsFocus')face.preparedSupplies.focusTarget=null;
  }
  function toggleProspectingSupply(key){
    if(!state.postgame?.completed)return;
    const armed=state.postgame.armedSupplies;
    const stock=state.postgame.supplies||{};
    if(armed[key]){
      armed[key]=false;
      if(key==='collectorsFocus')armed.focusTarget=null;
      removePreparedSupplyFromCurrentFace(key);
      focusPickerOpen=false;
      saveState();renderProspectingTools();
      setMineMessage('⛏️','Fourniture désarmée.','Rien n’a été dépensé. Toute fourniture encore armée attendra la prochaine nouvelle paroi.');
      showToast(`${PROSPECTING_SUPPLIES[key].label} désarmée.`);
      return;
    }
    if((stock[key]||0)<1){showToast(`No ${PROSPECTING_SUPPLIES[key].label} en stock dans la Boutique.`);return;}
    const otherKit=key==='prospectorKit'?'masterProspectorKit':key==='masterProspectorKit'?'prospectorKit':null;
    if(otherKit){
      armed[otherKit]=false;
      removePreparedSupplyFromCurrentFace(otherKit);
    }
    armed[key]=true;
    saveState();renderProspectingTools();
    setMineMessage(PROSPECTING_SUPPLIES[key].icon,`${PROSPECTING_SUPPLIES[key].label} armée.`,'Elle s’appliquera à la prochaine nouvelle paroi et ne sera dépensée qu’au moment où tu mines la première case.');
    showToast(`${PROSPECTING_SUPPLIES[key].label} armée pour la prochaine paroi.`);
  }
  function useProspectorKit(){ toggleProspectingSupply('prospectorKit'); }
  function useMasterProspectorKit(){ toggleProspectingSupply('masterProspectorKit'); }
  function toggleCollectorFocusPicker(){
    if(!state.postgame?.completed)return;
    const armed=state.postgame.armedSupplies;
    if(armed.collectorsFocus){
      toggleProspectingSupply('collectorsFocus');
      return;
    }
    if((state.postgame.supplies.collectorsFocus||0)<1){showToast("Aucune Cible du collectionneur en stock dans la Boutique.");return;}
    const eligible=exceptionalKeysForDepth(state.currentDepth);
    if(!eligible.length){showToast('Aucun matériau exceptionnel admissible à cette profondeur.');return;}
    focusPickerOpen=!focusPickerOpen;
    renderProspectingTools();
  }
  function useCollectorsFocus(target){
    if(!state.postgame?.completed||!target)return;
    if((state.postgame.supplies.collectorsFocus||0)<1)return;
    const eligible=exceptionalKeysForDepth(state.currentDepth);
    if(!eligible.includes(target)){showToast('Choisis un matériau admissible à cette profondeur.');return;}
    state.postgame.armedSupplies.collectorsFocus=true;
    state.postgame.armedSupplies.focusTarget=target;
    focusPickerOpen=false;
    saveState();renderProspectingTools();
    setMineMessage('◎',"Cible du collectionneur armée.",`${MATERIALS[target].name} sera favorisé sur la prochaine nouvelle paroi si un spécimen exceptionnel apparaît et que ce matériau est présent.`);
    showToast(`Cible armée pour ${MATERIALS[target].name}.`);
  }
  function commitProspectingFace(){
    const face=state.face;
    if(!state.postgame?.completed||!face||face.prospectingCommitted)return null;
    const prepared={...emptyProspectingEffects(),...(face.preparedSupplies||{})};
    const effects={...emptyProspectingEffects(),...prepared};
    const chance=effects.masterProspectorKit?EXCEPTIONAL_MASTER_KIT_CHANCE:effects.prospectorKit?EXCEPTIONAL_KIT_CHANCE:EXCEPTIONAL_BASE_CHANCE;
    if(!face.exceptionalResolved){
      const exceptional=placeExceptionalOnFace(face.tiles,state.currentDepth,effects,chance);
      face.exceptionalTileIndex=exceptional?.index??null;
      face.exceptionalResolved=true;
    }
    face.prospectingEffects=effects;
    face.prospectingCommitted=true;
    const stock=state.postgame.supplies||{};
    const armed=state.postgame.armedSupplies||emptyProspectingEffects();
    ['prospectorKit','masterProspectorKit','collectorsFocus'].forEach(key=>{
      if(!effects[key])return;
      stock[key]=Math.max(0,(stock[key]||0)-1);
      armed[key]=false;
      if(key==='collectorsFocus')armed.focusTarget=null;
    });
    markFullProspectingStack();
    checkAchievements();
    return null;
  }
  function freshFaceMessage(face){
    if(state.postgame?.completed){
      const p=face?.preparedSupplies||{};
      const prepared=[p.masterProspectorKit&&'Trousse maître',p.prospectorKit&&'Kit',p.collectorsFocus&&`Focus: ${MATERIALS[p.focusTarget]?.name||'target'}`].filter(Boolean);
      if(prepared.length){
        setMineMessage('🎒','Fournitures de prospection préparées.',`${prepared.join(' · ')}. Rien n’est dépensé avant que tu mines la première case, donc tu peux encore changer de profondeur sans les perdre.`);
        return;
      }
      const a=state.postgame?.armedSupplies||{};
      if(a.prospectorKit||a.masterProspectorKit||a.collectorsFocus){
        setMineMessage('🎒','Fournitures toujours armées.','Elles attendent la prochaine nouvelle paroi.');
        return;
      }
    }
    setMineMessage('⛏️','Nouvelle paroi rocheuse.','Observe les faibles indices géologiques, sonde les zones prometteuses, puis commence à creuser.');
  }




  function totalFound(){ return Object.values(state.stats).reduce((sum,x)=>sum+(x.found||0),0); }
  function allDepthsMined(){ return Object.keys(DEPTHS).every(d=>(state.meta.depthsMined?.[d]||0)>0); }
  function countCollectedFamily(family){
    return Object.entries(MATERIALS).filter(([,m])=>m.family===family).reduce((sum,[k,m])=>sum+m.stages.filter(stage=>state.collection[k]?.[stage]).length,0);
  }
  function countCollectedUvMaterials(){
    return Object.keys(UV_CLASSES).filter(k=>MATERIALS[k]?.stages.some(stage=>state.collection[k]?.[stage])).length;
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








  function exceptionalHintArea(index){
    const targetRow=Math.floor(index/GRID_SIZE),targetCol=index%GRID_SIZE;
    const centerRow=Math.max(1,Math.min(GRID_SIZE-2,targetRow));
    const centerCol=Math.max(1,Math.min(GRID_SIZE-2,targetCol));
    const out=[];
    for(let r=centerRow-1;r<=centerRow+1;r++)for(let c=centerCol-1;c<=centerCol+1;c++)out.push(r*GRID_SIZE+c);
    return out;
  }




  function normalizeFace(face){
    if(Array.isArray(face.tiles))face.tiles.forEach(t=>{if(t?.special==='geode')t.special=null;});
    if(!Array.isArray(face.hints)) face.hints = generateProspectHints(face);
    if(!face.finds) face.finds = {};
    if(!Array.isArray(face.scanHistory)) face.scanHistory = [];
    if(face.lastScan === undefined) face.lastScan = null;
    if(face.metalDetectorUsed === undefined) face.metalDetectorUsed = false;
    if(!Array.isArray(face.metalSignalTiles)) face.metalSignalTiles = [];
    if(!Array.isArray(face.exceptionalHintTiles)) face.exceptionalHintTiles = [];
    if(face.exceptionalTileIndex === undefined) face.exceptionalTileIndex = null;
    face.prospectingEffects={...emptyProspectingEffects(),...(face.prospectingEffects||{})};
    face.preparedSupplies={...emptyProspectingEffects(),...(face.preparedSupplies||{})};
    delete face.prospectingEffects.surveyChalk;
    delete face.preparedSupplies.surveyChalk;
    face.exceptionalHintTiles=[];
    if(face.prospectingEffects.masterProspectorKit)face.prospectingEffects.prospectorKit=false;
    if(face.preparedSupplies.masterProspectorKit)face.preparedSupplies.prospectorKit=false;
    if(face.prospectingCommitted === undefined){
      // Faces saved before 1.4.4 already resolved their exceptional roll at generation
      // or when a 1.4.3 supply was used. Preserve that result without charging twice.
      face.prospectingCommitted = !!(face.prospectingEffects.prospectorKit||face.prospectingEffects.masterProspectorKit||face.prospectingEffects.collectorsFocus||faceHasMinedTile(face));
    }
    if(face.exceptionalResolved === undefined) face.exceptionalResolved = true;
    if(face.fullProspectingStackCounted === undefined) face.fullProspectingStackCounted = !!((face.prospectingEffects.prospectorKit||face.prospectingEffects.masterProspectorKit)&&face.prospectingEffects.collectorsFocus);
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
    const occupied=face.tiles.filter(t=>t.material);
    if(!occupied.length)return [];
    const count=Math.min(randInt(1,3),occupied.length);
    const pool=[...occupied];
    for(let i=pool.length-1;i>0;i--){
      const j=randInt(0,i);
      [pool[i],pool[j]]=[pool[j],pool[i]];
    }
    return pool.slice(0,count).map(t=>t.index);
  }




  function generateFace(depth){
    const tiles=Array.from({length:GRID_SIZE*GRID_SIZE},(_,i)=>({index:i,revealed:false,material:null,special:null,depositId:null,depositType:null}));
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


    // Une fois le musée complété, les nouvelles parois d’après-jeu contiennent
    // 50 % plus de cases de minéraux/minerais ordinaires. Les poids propres à
    // chaque profondeur restent identiques et les chances exceptionnelles ne changent pas.
    if(state.postgame?.completed){
      const baseMaterialTiles=tiles.filter(t=>t.material).length;
      const targetMaterialTiles=Math.min(GRID_SIZE*GRID_SIZE,Math.ceil(baseMaterialTiles*1.5));
      let occupiedMaterialTiles=baseMaterialTiles;
      while(occupiedMaterialTiles<targetMaterialTiles){
        const remaining=targetMaterialTiles-occupiedMaterialTiles;
        const bonusSize=Math.min(remaining,remaining>=3?randInt(2,4):1);
        if(placeDeposit(weightedChoice(cfg.materials),bonusSize,bonusSize===1?'isolated':'small')){
          occupiedMaterialTiles+=bonusSize;
        }else if(bonusSize>1&&placeDeposit(weightedChoice(cfg.materials),1,'isolated')){
          occupiedMaterialTiles+=1;
        }else{
          break;
        }
      }
    }
    if(Math.random()<(depth>=3?.32:depth===2?.27:.24))placeDeposit(weightedChoice(cfg.sideFinds),1,'side');
    if(Math.random()<(depth>=3?.085:depth===2?.055:.045))placeDeposit(weightedChoice(cfg.sideFinds),1,'side');




    const prospectingEffects=emptyProspectingEffects();
    const preparedSupplies=state.postgame?.completed?preparedSuppliesForDepth(depth):emptyProspectingEffects();




    const face={
      depth,size:GRID_SIZE,
      durability:currentPickSwings(),
      finds:{},tiles,deposits,hints:[],
      scanUsesRemaining:state.upgrades.surveying>0?currentMaxScans():0,
      scanHistory:[],scanCounts:Array(GRID_SIZE*GRID_SIZE).fill(0),lastScan:null,
      metalDetectorUsed:false,metalSignalTiles:[],fullCoverageAwarded:false,
      prospectingEffects,preparedSupplies,prospectingCommitted:false,exceptionalResolved:!state.postgame?.completed,
      exceptionalTileIndex:null,exceptionalHintTiles:[],fullProspectingStackCounted:false
    };
    face.hints=generateProspectHints(face);
    return face;
  }




  function syncMuseumUvPage(){
    document.body.classList.toggle('museum-uv-active',activePanel==='museum'&&!!state.upgrades.uvLamp&&!!state.settings.museumUv);
  }




  function switchPanel(btn){
    const target=btn.dataset.target;
    if(target==='collection'&&!state.postgame?.completed)return;
    if(target===activePanel)return;


    // Remember where the player was in each tab before its DOM is redrawn.
    // The Museum is long enough that jumping back to the top is especially
    // disruptive, but keeping this per-panel makes every tab behave the same.
    panelScrollPositions[activePanel]=window.scrollY||window.pageYOffset||0;
    activePanel=target;
    scanMode=false;
    document.querySelectorAll('.nav-button').forEach(b=>b.classList.toggle('active',b===btn));
    document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',p.dataset.panel===target));
    if(target==='workbench')renderWorkbench();
    if(target==='museum')renderMuseum();
    if(target==='collection'){renderPostgameWorkbench();renderPersonalCollection();renderSpecimenStorage();}
    if(target==='achievements')renderAchievements();
    if(target==='upgrades')renderUpgrades();
    syncMuseumUvPage();
    renderMobileHud();


    const remembered=Math.max(0,panelScrollPositions[target]||0);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      const maxScroll=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
      window.scrollTo(0,Math.min(remembered,maxScroll));
    }));
  }




  function renderPostgameAccess(){
    const unlocked=!!state.postgame?.completed;
    els.collectionNavButton?.classList.toggle('hidden',!unlocked);
    els.personalCollectionPanel?.classList.toggle('hidden',!unlocked);
    els.bottomNav?.classList.toggle('postgame-nav',unlocked);
  }




  function startNewFace(){
    scanMode=false;
    focusPickerOpen=false;
    heatWarningVisible=false;
    state.face=generateFace(state.currentDepth);
    saveState();
    freshFaceMessage(state.face);
    checkAchievements();
    renderMine();
    showToast('Nouvelle paroi rocheuse.');
  }




  function setDepth(d){
    if(d>state.unlockedDepth||d===state.currentDepth)return;
    scanMode=false;
    focusPickerOpen=false;
    heatWarningVisible=false;
    state.currentDepth=d;
    state.face=generateFace(d);
    saveState();
    freshFaceMessage(state.face);
    checkAchievements();
    renderMine();
    showToast(`${DEPTHS[d].name} sélectionnée.`);
}




  function toggleScanMode(){
    if(state.currentDepth===6&&!state.upgrades.scannerHeatShield){showToast('Le scanner a besoin d’un boîtier thermoprotégé dans la Zone épithermale.');return;}
    if(state.upgrades.surveying===0){showToast('Débloque d’abord le scanner de terrain.');return;}
    if(state.face.scanUsesRemaining<=0){showToast('Aucun scan restant sur cette paroi.');return;}
    scanMode=!scanMode;
    if(scanMode){
      setMineMessage('⌁','Scanner prêt.','Touche une case pour scanner la zone 3×3 autour. Scanne une zone deux fois et les cases occupées cachées peuvent montrer une très légère ombre de densité.');
    }else{
      setMineMessage('⛏️','Scan annulé.','Retour au minage.');
    }
    renderMine();
  }




  function boardTileFromEvent(event){
    const target=event.target;
    if(!(target instanceof Element))return null;
    const tileButton=target.closest('.rock');
    if(!tileButton||!els.mineBoard.contains(tileButton))return null;
    const index=Number(tileButton.dataset.index);
    if(!Number.isInteger(index))return null;
    return {tileButton,index};
  }




  function handleBoardClick(event){
    const hit=boardTileFromEvent(event);
    if(!hit)return;


    if(scanMode){
      event.preventDefault();
      scanAt(hit.index);
      return;
    }


    if(hit.tileButton.disabled)return;
    mineTile(hit.index);
  }




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
    setMineMessage('⌁','Scan terminé.',results.length?results.map(r=>r.plain).join(' · '):'Aucune signature importante détectée.');
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
    if(state.currentDepth===6&&!state.upgrades.detectorHeatShield){showToast('Le détecteur de métaux a besoin d’un boîtier thermoprotégé dans la Zone épithermale.');return;}
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
    sélectionnée.forEach(tile=>metalSignalZone(tile.index).forEach(i=>marked.add(i)));
    state.face.metalSignalTiles=[...marked];




    checkAchievements();
    saveState();
    if(selected.length){
      setMineMessage('🧲','Balayage métallique terminé.',`${selected.length} zone de signal large${selected.length===1?'':'s'} détectée. Les zones surlignées sont volontairement imprécises.`);
      showToast(`${selected.length} zone de signal métallique${selected.length===1?'':'s'} détectée.`);
    }else{
      setMineMessage('🧲','Balayage métallique terminé.','Aucune cible métallique forte détectée sur cette paroi.');
      showToast('Aucun signal métallique fort détecté.');
    }
    renderMine();
  }












  function signalStrength(count){
    if(count>=5)return 'Strong';
    if(count>=3)return 'Modéré';
    return 'Faint';
  }




  function depositPattern(types){
    const set=types instanceof Set?types:new Set(types||[]);
    if(set.has('large'))return set.size>1?'grand filon aux contours mixtes':'motif de grand filon';
    if(set.has('small'))return set.size>1?'amas avec traces isolées':'motif de poche groupée';
    if(set.has('isolated'))return 'occurrence isolée';
    if(set.has('side'))return 'anomalie isolée';
    return 'motif de dépôt mixte';
  }




  function analyzeScan(indices,level){
    const scannedTiles=indices.map(i=>state.face.tiles[i]).filter(Boolean);
    const occupied=scannedTiles.filter(t=>t.material);
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
        results.push({html:`<strong>${strength}</strong> ${chemistry} signature${extra}`,plain:`${strength} ${chemistry} signature${extra}`});
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
        const identified=isDiscovered(key)?MATERIALS[key].name:'Minéral inconnu';
        results.push({html:`<strong>${strength} ${identified}</strong> · ${depositPattern(g.types)}`,plain:`${strength} ${identified} · ${depositPattern(g.types)}`});
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
    if(state.currentDepth===6&&!state.upgrades.geothermalGear){
      heatWarningVisible=true;
      setMineMessage('🌡️','Trop chaud pour travailler en sécurité.','Il te faut la tenue de protection géothermale avant de pouvoir miner dans la Zone épithermale.');
      renderMine();
      return;
    }
    const prospectingReport=!face.prospectingCommitted?commitProspectingFace():null;
    tile.revealed=true;
    if(!state.postgame?.completed)face.durability--;
    state.meta.tilesMined++;
    state.meta.depthsMined=state.meta.depthsMined||{};
    state.meta.depthsMined[state.currentDepth]=(state.meta.depthsMined[state.currentDepth]||0)+1;




    const hadDoubleScan=(face.scanCounts?.[index]||0)>=2;
    const inMetalZone=(face.metalSignalTiles||[]).includes(index);




    if(tile.material){
      const exceptional=collectFind(tile.material,tile.exceptionalVariantId||null);
      face.finds[tile.material]=(face.finds[tile.material]||0)+1;
      if(hadDoubleScan)state.meta.anomalyFinds++;
      if(inMetalZone&&isMetalTarget(tile.material))state.meta.metalSignalFinds++;
      if(face.durability===0)state.meta.lastSwingFinds++;
      const m=MATERIALS[tile.material];
      if(exceptional){
        setMineMessage('✨','Spécimen exceptionnel!',exceptional.label);
        showToast(`Spécimen exceptionnel : ${exceptional.label} ✨`);
      }else{
        setMineMessage('✦',`${m.name}!`,findMessage(tile.material));
        showToast(`Found ${m.name}!`);
      }
      maybeAnnounceDeposit(tile.depositId);
    }else{
      setMineMessage('🪨','Crac.','Rien dans cette case. Essaie ailleurs.');
    }
    if(prospectingReport&&!tile.exceptionalVariantId)showToast(prospectingReport);




    if(face.durability<=0){
      state.meta.facesFinished++;
      setMineMessage('⛏️','Pioche usée.','Cette paroi est terminée. Retourne à la surface pour en obtenir une nouvelle.');
      showToast('Paroi terminée.');
    }




    checkAchievements();
    saveState();
    renderMine();
    renderWorkbench();
  }




  function collectFind(k,exceptionalVariantId=null){
    const m=MATERIALS[k],stage=m.stages[0];
    state.stats[k].found++;
    if(!state.discovery)state.discovery=emptyDiscovery();
    if(!state.discovery[k])state.discovery[k]={discovered:false,depths:[]};
    state.discovery[k].discovered=true;
    if(!state.discovery[k].depths.includes(state.currentDepth))state.discovery[k].depths.push(state.currentDepth);
    state.discovery[k].depths.sort((a,b)=>a-b);




    if(state.postgame?.completed&&exceptionalVariantId&&exceptionalEligible(k)){
      const item=makeExceptional(k,exceptionalVariantId);
      if(item){
        state.postgame.specimenStorage.push(item);
        state.postgame.exceptionalFound++;
        if(state.face?.prospectingEffects?.collectorsFocus&&state.face.prospectingEffects.focusTarget===k){
          state.meta.focusedExceptionalFinds=(state.meta.focusedExceptionalFinds||0)+1;
        }
        return item;
      }
    }




    state.inventory[k][stage]++;
    if(canAutoProcess(k) && state.settings.autoProcessByMaterial[k])autoProcessOne(k);
    return null;
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
      showToast(`${d.type==='large'?'Gros filon':'Vein'} découvert : ${MATERIALS[d.material].name}`);
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
      fluorite:'Fluorite. Cristaux cubiques, couleurs folles et excellente vedette sous la lampe UV.',
      aquamarine:'Aigue-marine : béryl bleu-vert. Il faudra du bon équipement pour la travailler.',
      sapphire:'Saphir : du corindon gemme, parmi les gemmes courantes les plus dures.',
      roseQuartz:'Quartz rose : encore du quartz, mais cette fois en rose.',
      malachite:'Malachite : minéral de cuivre vert vif aux bandes impossibles à manquer.',
      ruby:'Rubis : corindon rouge. Même famille minérale que le saphir, couleur très différente.',
      emerald:'Émeraude : béryl vert, de la même famille que l’aigue-marine.',
      cassiterite:'Cassitérite : le principal minerai d’étain.',
      galena:'Galène : minerai de plomb dense et métallique qui aime former des cubes.',
      sphalerite:'Sphalérite : le principal minerai de zinc.',
      scheelite:'Scheelite : minerai de tungstène avec une fameuse surprise bleu-blanc sous UV.',
      willemite:'Willemite. Sous UV, certains spécimens brillent d’un vert presque absurde; fluorescence ne veut pas dire radioactivité.',
      hackmanite:'Hackmanite : une cousine de la sodalite qui peut temporairement changer de couleur après une exposition aux UV.',
      apatite:'Apatite. Dureté 5 sur l’échelle de Mohs, et très douée pour se faire passer pour d’autres minéraux.',
      opal:'Opale : silice hydratée, techniquement un minéraloïde plutôt qu’un véritable minéral.',
      diamond:'Diamant : carbone cristallin formé beaucoup plus profondément, transporté vers le haut par une ancienne activité volcanique.',
      obsidian:'Obsidienne : verre volcanique figé avant que les cristaux aient le temps de pousser.',
      olivine:'Olivine. Si le matériau est de qualité gemme, la pierre taillée porte un autre nom : péridot.',
      nativeSulfur:'Soufre natif : du soufre élémentaire jaune impossible à confondre, formé dans un environnement géothermal.',
      rhodochrosite:'Rhodochrosite : carbonate de manganèse rose provenant d’un filon hydrothermal.',
      adularia:'Adulaire : feldspath potassique de basse température et indice classique de certains systèmes épithermaux.',
      acanthite:'Acanthite : sulfure d’argent. Il y a vraiment de l’argent caché dans ce minerai sombre.',
      nativeGold:'Or natif. Pas besoin de minerai d’or de dessin animé; parfois, le métal se trouve tout simplement sous sa forme native.',
      fernImpression:'Une empreinte de fougère : une vie végétale préservée en motif délicat dans la pierre.',
      surveyCompass:'Une boussole d’arpentage en laiton. Quelqu’un cartographiait ces galeries bien avant toi.',
      trilobite:'Un fossile! L’aile des fossiles aimerait te parler.',
      ammonite:'Une ammonite! Un fossile en spirale venu d’une mer ancienne.',
      crinoidStem:'Une tige de crinoïde fossile : un petit morceau d’un ancien animal marin.',
      brachiopod:'Un brachiopode fossile. Ça ressemble à une palourde, mais ce n’en est vraiment pas une.',
      belemnite:'Un rostre de bélemnite : le fossile en forme de balle d’un animal disparu apparenté aux calmars.',
      miningTag:'Une ancienne plaquette de mineur. Quelqu’un travaillait ici bien avant toi.',
      miningLamp:'Une vieille lampe de mineur. Un morceau de l’histoire humaine de la mine a survécu ici.',
      surveyMarker:'Un repère d’arpentage usé. Quelqu’un a cartographié cet endroit bien avant toi.',
      drillBit:'Un vieux trépan. L’exploitation de roche dure laisse du matériel derrière elle.',
      railSpike:'Un vieux crampon de rail du système de transport de la mine. Le détecteur a bien mérité son bip.'
    })[k]||'Quelque chose d’intéressant est sorti de la roche.';
  }




  function setMineMessage(icon,title,body){
    els.mineMessage.innerHTML=`<span class="message-icon">${icon}</span><div><strong>${title}</strong><p>${body}</p></div>`;
  }




  function renderAll(){
    renderPostgameAccess();renderMine();renderWorkbench();renderMuseum();renderPostgameWorkbench();renderPersonalCollection();renderSpecimenStorage();renderAchievements();renderUpgrades();renderMobileHud();
  }




  function renderMine(){
    const f=state.face,max=currentPickSwings();
    els.depthName.textContent=DEPTHS[state.currentDepth].name;
    els.depthNumber.textContent=`Profondeur ${state.currentDepth}`;
    els.durability.textContent=state.postgame?.completed?'∞':f.durability;
    els.maxDurability.textContent=state.postgame?.completed?'∞':max;
    els.durabilityMeter.style.width=state.postgame?.completed?'100%':`${Math.max(0,f.durability/max*100)}%`;
    if(els.depthFieldNote)els.depthFieldNote.innerHTML=`<span class="status-label">Note de terrain</span><p>${DEPTHS[state.currentDepth].note}</p>`;
    els.mineBoard.classList.toggle('epithermal-board',state.currentDepth===6);
    els.surveyLevel.textContent=SURVEY_LEVELS[state.upgrades.surveying].name;
    els.mineBalance.textContent=formatMoney(state.credits);
    els.scanUseSummary.textContent=state.currentDepth===6&&!state.upgrades.scannerHeatShield?'boîtier thermique requis':state.upgrades.surveying>0?`${f.scanUsesRemaining}/${currentMaxScans()} scans restants`:'verrouillé';
    renderDepthSelector();renderSurvey();renderMetalDetector();renderProspectingTools();renderBoard();renderFaceFinds();renderMobileHud();
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
    els.scanButton.classList.toggle('active',scanMode);




    if(state.currentDepth===6&&!state.upgrades.scannerHeatShield){
      els.scanButton.disabled=true;
      els.scanButton.querySelector('strong').textContent='Scanner la zone';
      els.scanButtonStatus.textContent='Boîtier thermique requis';
      return;
    }




    if(level===0){
      els.scanButton.disabled=true;
      els.scanButton.querySelector('strong').textContent='Scanner la zone';
      els.scanButtonStatus.textContent='Verrouillé';
      return;
    }




    els.scanButton.disabled=f.scanUsesRemaining<=0;
    els.scanButton.querySelector('strong').textContent=scanMode?'Annuler le scan':'Scanner la zone';
    els.scanButtonStatus.textContent=scanMode?`Touche une case · ${f.scanUsesRemaining} restant${f.scanUsesRemaining===1?'':'s'}`:`${f.scanUsesRemaining}/${currentMaxScans()} scans`;
  }




  function renderMetalDetector(){
    if(state.currentDepth===6&&!state.upgrades.detectorHeatShield){
      els.metalDetectorButton.disabled=true;
      els.metalDetectorButton.querySelector('strong').textContent='Balayer la paroi';
      els.detectorButtonStatus.textContent='Boîtier thermique requis';
      return;
    }
    if(!state.upgrades.metalDetector){
      els.metalDetectorButton.disabled=true;
      els.metalDetectorButton.querySelector('strong').textContent='Balayer la paroi';
      els.detectorButtonStatus.textContent='Verrouillé';
      return;
    }




    const used=!!state.face.metalDetectorUsed;
    els.metalDetectorButton.disabled=used;
    els.metalDetectorButton.querySelector('strong').textContent='Balayer la paroi';
    els.detectorButtonStatus.textContent=used?'Utilisé sur cette paroi':'1/1 balayage';
  }




  function renderProspectingTools(){
    if(!els.postgameProspectingTools)return;
    const unlocked=!!state.postgame?.completed;
    els.postgameProspectingTools.classList.toggle('hidden',!unlocked);
    els.collectorFocusPicker?.classList.toggle('hidden',!unlocked||!focusPickerOpen);
    if(!unlocked)return;
    const stock=state.postgame.supplies||{};
    const armed=state.postgame.armedSupplies||emptyProspectingEffects();
    const prepared=(!state.face?.prospectingCommitted&&state.face?.preparedSupplies)||emptyProspectingEffects();
    const setButton=(button,status,key,extra='')=>{
      const count=stock[key]||0,isArmed=!!armed[key],isPrepared=!!prepared[key];
      button.classList.toggle('armed',isArmed);
      button.classList.toggle('prepared',isPrepared);
      button.classList.remove('used');
      button.disabled=!isArmed&&count<1;
      if(isPrepared)status.textContent=key==='prospectorKit'?'Prêt · 50%':key==='masterProspectorKit'?'Prêt · 80%':`Prêt · ${MATERIALS[prepared.focusTarget]?.name||'target'}`;
      else if(isArmed)status.textContent=key==='collectorsFocus'?`Armé · ${MATERIALS[armed.focusTarget]?.name||'target'}`:'Armé · prochaine paroi';
      else status.textContent=`${count} en stock${extra}`;
    };
    setButton(els.prospectorKitButton,els.prospectorKitStatus,'prospectorKit',' · 50%');
    setButton(els.masterProspectorKitButton,els.masterProspectorKitStatus,'masterProspectorKit',' · 80%');
    setButton(els.collectorsFocusButton,els.collectorsFocusStatus,'collectorsFocus');
    if(els.collectorFocusMineSelect){
      const eligible=exceptionalKeysForDepth(state.currentDepth);
      const prior=els.collectorFocusMineSelect.value;
      els.collectorFocusMineSelect.innerHTML=eligible.map(k=>`<option value="${k}">${MATERIALS[k].name}</option>`).join('');
      const preferred=armed.focusTarget&&eligible.includes(armed.focusTarget)?armed.focusTarget:prior;
      if(eligible.includes(preferred))els.collectorFocusMineSelect.value=preferred;
      els.applyCollectorFocusButton.disabled=!eligible.length||(stock.collectorsFocus||0)<1;
      els.applyCollectorFocusButton.textContent='Armer la cible';
    }
  }








  function buildIcon(key,forTile=false,stage=null){
    const m=MATERIALS[key],wrap=document.createElement('span');
    wrap.className=forTile?'tile-sprite sprite-wrap':'material-icon sprite-wrap';
    const img=document.createElement('img');
    img.className='sprite-image';img.src=miniSpriteSrc(key);img.alt='';img.loading='lazy';img.decoding='async';
    wrap.appendChild(img);
    return wrap;
  }


  function buildDetailSprite(key,stage){
    const img=document.createElement('img');
    img.className='detail-sprite';img.src=detailSpriteSrc(key,stage);img.alt='';img.loading='lazy';img.decoding='async';
    if(UV_CLASSES[key])img.classList.add('uv-reactive',UV_CLASSES[key]);
    return img;
  }


  function buildExceptionalSprite(item,compact=false){
    const img=document.createElement('img');
    img.className=`exceptional-sprite${compact?' compact':''}`;img.src=exceptionalSpriteSrc(item);img.alt='';img.loading='lazy';img.decoding='async';
    return img;
  }




  function renderBoard(){
    els.mineBoard.innerHTML='';
    const hints=new Set(state.face.hints||[]);




    state.face.tiles.forEach(t=>{
      const b=document.createElement('button');
      b.type='button';b.className='rock';b.dataset.index=String(t.index);b.setAttribute('aria-label',`Case minière ${t.index+1}`);
      const scans=state.face.scanCounts?.[t.index]||0;
if(scans>=1)b.classList.add('scan-area');
      if(scans>=2)b.classList.add('scan-overlap');
      if((state.face.metalSignalTiles||[]).includes(t.index)&&!t.revealed)b.classList.add('metal-signal');
      if((state.face.exceptionalHintTiles||[]).includes(t.index)&&!t.revealed)b.classList.add('exceptional-zone-hint');
      if(scanMode)b.classList.add('scan-selectable');




      if(t.revealed){
        b.classList.add('revealed');
        if(t.material){
          b.classList.add('find');
          if(t.exceptionalVariantId)b.classList.add('exceptional-find-tile');
          const i=buildIcon(t.material,true);i.classList.remove('material-icon');i.classList.add('tile-find');b.appendChild(i);
          if(t.exceptionalVariantId){const mark=document.createElement('span');mark.className='exceptional-find-mark';mark.textContent='✦';mark.setAttribute('aria-hidden','true');b.appendChild(mark);}
          b.setAttribute('aria-label',`Révélé : ${t.exceptionalVariantId?'exceptional ':''}${MATERIALS[t.material].name}`);
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




      els.mineBoard.appendChild(b);
    });




    if(heatWarningVisible&&state.currentDepth===6&&!state.upgrades.geothermalGear){
      const warning=document.createElement('div');
      warning.className='mine-heat-warning';
      warning.setAttribute('role','status');
      warning.innerHTML='<strong>🌡️ Trop chaud pour miner en sécurité</strong><span>Tenue de protection géothermale requise.</span>';
      els.mineBoard.appendChild(warning);
    }
  }




  function renderFaceFinds(){
    const list=Object.entries(state.face.finds).filter(([,n])=>n>0);
    els.faceFinds.innerHTML='';
    if(!list.length){
      const empty=document.createElement('span');empty.className='face-find-empty';empty.textContent='Rien pour l’instant';els.faceFinds.appendChild(empty);return;
    }
    list.forEach(([k,n])=>{
      const pill=document.createElement('span');pill.className='face-find-pill';pill.textContent=`${MATERIALS[k].name} ×${n}`;els.faceFinds.appendChild(pill);
    });
  }




  function renderMobileHud(){
    if(!els.mobileMineHud)return;
    els.mobileMineHud.classList.toggle('hidden',activePanel!=='mine');
    const max=currentPickSwings();
    els.mobileDurability.textContent=state.postgame?.completed?'⛏️ ∞ · acier doré':`⛏️ ${state.face.durability} / ${max}`;
    els.mobileScans.textContent=state.upgrades.surveying>0?`⌁ ${state.face.scanUsesRemaining} / ${currentMaxScans()}`:'⌁ verrouillé';
  }




  function renderWorkbench(){
    const discoveredCount=Object.keys(MATERIALS).filter(k=>isDiscovered(k)).length;
    const totalSubjects=Object.keys(MATERIALS).length;
    if(els.workbenchDiscoveryCount){
      els.workbenchDiscoveryCount.textContent=`${discoveredCount} / ${totalSubjects} spécimens découverts${discoveredCount===totalSubjects?' ✦':''}`;
      els.workbenchDiscoveryCount.closest('.workbench-discovery-card')?.classList.toggle('complete',discoveredCount===totalSubjects);
    }
    const bulk=masteredSellSummary();
    if(els.masteredSellValue)els.masteredSellValue.textContent=`${formatMoney(bulk.value)} · ${bulk.items} article${bulk.items===1?'':'s'}`;
    if(els.sellAllMasteredButton){
      els.sellAllMasteredButton.disabled=bulk.items<1;
      els.sellAllMasteredButton.textContent=bulk.items>0?`Tout vendre · ${formatMoney(bulk.value)}`:'Tout vendre';
    }




    els.workbenchList.innerHTML='';
    const discoveredEntries=Object.entries(MATERIALS).filter(([k])=>isDiscovered(k));
    if(!discoveredEntries.length){
      els.workbenchList.innerHTML='<div class="workbench-empty"><strong>Ton carnet de terrain est vide.</strong><p>Trouve ton premier spécimen dans la mine et sa fiche apparaîtra ici dans l’Établi.</p></div>';
      return;
    }
    discoveredEntries.forEach(([k,m])=>{
      const stock=totalInventory(k),mastered=isMastered(k),silverMastered=mastered&&['fossil','artifact'].includes(m.family);
      const card=document.createElement('article');
      card.className=`workbench-card ${openWorkbenchKey===k?'open':''} ${stock>0?'has-stock':''} ${mastered?(silverMastered?'silver-mastered':'mastered'):''}`;




      const toggle=document.createElement('button');
      toggle.type='button';toggle.className='accordion-toggle';toggle.setAttribute('aria-expanded',openWorkbenchKey===k?'true':'false');




      const alert=document.createElement('span');
      alert.className=`inventory-alert ${stock>0?'visible':''}`;
      alert.textContent=stock>0?`✦ ${stock}`:'';
      alert.setAttribute('aria-hidden',stock>0?'false':'true');
      toggle.appendChild(alert);




      toggle.appendChild(buildIcon(k));




      const main=document.createElement('div');main.className='accordion-main';
      main.innerHTML=`<h3>${m.name}</h3><div class="material-depths"><span>⌖</span> Trouvé à : <strong>${depthKnowledgeText(k)}</strong></div><div class="summary-chips">${m.stages.map(s=>`<span class="summary-chip">${m.stageLabels[s]} ${state.inventory[k][s]} · ${formatMoney(m.prices[s])}</span>`).join('')}</div>`;
      toggle.appendChild(main);




      const chev=document.createElement('span');chev.className='chevron';chev.textContent='⌄';toggle.appendChild(chev);
      toggle.addEventListener('click',()=>{openWorkbenchKey=openWorkbenchKey===k?null:k;renderWorkbench();});
      card.appendChild(toggle);




      const details=document.createElement('div');details.className='workbench-details';details.innerHTML=workbenchDetails(k);card.appendChild(details);
      els.workbenchList.appendChild(card);
    });




    els.workbenchList.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',workbenchAction));
  }




  function renderPostgameWorkbench(){
    if(!els.postgameWorkbench)return;
    if(!state.postgame?.completed){els.postgameWorkbench.classList.add('hidden');els.postgameWorkbench.innerHTML='';return;}
    els.postgameWorkbench.classList.remove('hidden');
    const storage=state.postgame.specimenStorage||[];
    const displayed=(state.postgame.personalSlots||[]).filter(Boolean).length;
    els.postgameWorkbench.innerHTML=`
      <div class="collection-overview">
        <div class="collection-mini-stat"><span class="status-label">Réserve de spécimens</span><strong>${storage.length}</strong></div>
        <div class="collection-mini-stat"><span class="status-label">Exposés</span><strong>${displayed} / 21</strong></div>
        <div class="collection-mini-stat"><span class="status-label">Trouvailles exceptionnelles</span><strong>${state.postgame.exceptionalFound||0}</strong></div>
      </div>`;
  }


  function renderSpecimenStorage(){
    if(!els.specimenStorageSection)return;
    if(!state.postgame?.completed){els.specimenStorageSection.classList.add('hidden');els.specimenStorageSection.innerHTML='';return;}
    els.specimenStorageSection.classList.remove('hidden');
    const storage=state.postgame.specimenStorage||[];
    const groups=new Map();
    storage.forEach(item=>{
      const key=item.key||'unknown';
      if(!groups.has(key))groups.set(key,[]);
      groups.get(key).push(item);
    });
    const sorted=[...groups.entries()].sort((a,b)=>(MATERIALS[a[0]]?.name||a[0]).localeCompare(MATERIALS[b[0]]?.name||b[0]));
    els.specimenStorageSection.innerHTML=`<div class="postgame-vault-heading"><div><span class="status-label">Garde-en autant que tu veux</span><strong>Réserve de spécimens</strong></div><span>${storage.length} gardé${storage.length===1?'':'s'}</span></div><p class="vault-help">Ouvre un tiroir de matériau lorsque tu veux inspecter, exposer ou vendre l’un de ses spécimens exceptionnels. Il n’y a aucun pourcentage de complétion.</p>`;
    const host=document.createElement('div');host.className='storage-drawers';els.specimenStorageSection.appendChild(host);
    if(!storage.length){host.innerHTML='<div class="vault-empty">Rien en réserve pour l’instant. La mine est encore pleine de roches qui ont des opinions.</div>';return;}
    sorted.forEach(([key,items])=>{
      const drawer=document.createElement('details');drawer.className='storage-drawer';drawer.open=openStorageKeys.has(key);
      drawer.addEventListener('toggle',()=>{if(drawer.open)openStorageKeys.add(key);else openStorageKeys.delete(key);});
      const summary=document.createElement('summary');
      const icon=document.createElement('span');icon.className='storage-drawer-icon';if(MATERIALS[key])icon.appendChild(buildIcon(key));else icon.textContent='✦';
      const title=document.createElement('span');title.className='storage-drawer-title';title.innerHTML=`<strong>${MATERIALS[key]?.name||'Spécimens exceptionnels'}</strong><small>${items.length} spécimen${items.length===1?'':'s'}</small>`;
      const chev=document.createElement('span');chev.className='storage-drawer-chevron';chev.textContent='⌄';
      summary.append(icon,title,chev);drawer.appendChild(summary);
      const rows=document.createElement('div');rows.className='storage-drawer-rows';
      items.forEach(item=>{
        const value=specialItemSellValue(item),row=document.createElement('div');row.className='storage-specimen-row';
        const rowIcon=document.createElement('div');rowIcon.className='storage-specimen-icon';rowIcon.appendChild(buildExceptionalSprite(item,true));
        const copy=document.createElement('div');copy.className='storage-specimen-copy';
        const foundDepth=item.foundDepth&&DEPTHS[item.foundDepth]?`Profondeur ${item.foundDepth} · ${DEPTHS[item.foundDepth].name}`:'Trouvaille d’après-jeu';
        let foundDate='';
        try{if(item.foundAt)foundDate=new Date(item.foundAt).toLocaleDateString('fr-CA',{year:'numeric',month:'short',day:'numeric'});}catch{foundDate='';}
        copy.innerHTML=`<strong>${item.label}</strong><span>${foundDepth} · ${formatMoney(value)}</span><div class="storage-inspect-detail hidden"><img class="storage-inspect-image" src="${exceptionalSpriteSrc(item)}" alt="" loading="lazy">${foundDate?`<span>Trouvé le ${foundDate}</span>`:''}<p>${item.detail||'Un exemple particulièrement remarquable qui mérite d’être gardé, parce que les roches, c’est cool.'}</p></div>`;
        const actions=document.createElement('div');actions.className='storage-specimen-actions';
        const inspect=document.createElement('button');inspect.type='button';inspect.className='mini-button';inspect.textContent='Inspecter';inspect.addEventListener('click',()=>{const detail=copy.querySelector('.storage-inspect-detail');detail.classList.toggle('hidden');inspect.textContent=detail.classList.contains('hidden')?'Inspecter':'Fermer';});
        const display=document.createElement('button');display.type='button';display.className='mini-button personal-display';display.textContent='Exposer';display.disabled=firstEmptyPersonalSlot()<0;display.addEventListener('click',()=>displayStoredSpecimen(item.id));
        const sell=document.createElement('button');sell.type='button';sell.className='mini-button vault-sell';sell.textContent='Vendre';sell.addEventListener('click',()=>sellStoredSpecimen(item.id));
        actions.append(inspect,display,sell);row.append(rowIcon,copy,actions);rows.appendChild(row);
      });
      drawer.appendChild(rows);host.appendChild(drawer);
    });
  }


  function buyProspectingSupply(key){
    const cfg=PROSPECTING_SUPPLIES[key];
    if(!state.postgame?.completed||!cfg||state.credits<cfg.cost)return;
    state.credits-=cfg.cost;
    state.postgame.supplies[key]=(state.postgame.supplies[key]||0)+1;
    saveState();refreshShopPurchaseUi();renderAll();showToast(`${cfg.label} ajoutée à tes fournitures.`);
  }




  function sellStoredSpecimen(id){
    const i=(state.postgame.specimenStorage||[]).findIndex(x=>x.id===id);if(i<0)return;
    const item=state.postgame.specimenStorage[i],value=specialItemSellValue(item);if(value<1)return;
    state.postgame.specimenStorage.splice(i,1);
    state.postgame.exceptionalSold=(state.postgame.exceptionalSold||0)+1;
state.credits+=value;
    checkAchievements();saveState();renderAll();showToast(`${item.label} vendu pour ${formatMoney(value)}.`);
  }




  function displayStoredSpecimen(id){
    const slot=firstEmptyPersonalSlot();if(slot<0){showToast('La Collection personnelle est pleine. Range d’abord quelque chose.');return;}
    const i=state.postgame.specimenStorage.findIndex(x=>x.id===id);if(i<0)return;
    state.postgame.personalSlots[slot]=state.postgame.specimenStorage.splice(i,1)[0];
    checkAchievements();saveState();renderAll();showToast('Ajouté à la vitrine.');
  }




  function removePersonalSlot(index){
    const item=state.postgame.personalSlots[index];if(!item)return;
    state.postgame.personalSlots[index]=null;
    if(item.kind==='exceptional')state.postgame.specimenStorage.push(item);
    saveState();renderAll();showToast('Remis dans la Réserve de spécimens.');
  }




  function openExceptionalInspect(item){
    if(!item||item.kind!=='exceptional'||!els.specimenInspectModal)return;
    const foundDepth=item.foundDepth&&DEPTHS[item.foundDepth]?`Profondeur ${item.foundDepth} · ${DEPTHS[item.foundDepth].name}`:'Trouvaille d’après-jeu';
    let foundDate='';
    try{if(item.foundAt)foundDate=new Date(item.foundAt).toLocaleDateString('fr-CA',{year:'numeric',month:'short',day:'numeric'});}catch{foundDate='';}
    els.specimenInspectImage.src=exceptionalSpriteSrc(item);
    els.specimenInspectImage.alt=item.label||'Spécimen exceptionnel';
    els.specimenInspectTitle.textContent=item.label||'Spécimen exceptionnel';
    els.specimenInspectDetail.textContent=item.detail||'Un exemple particulièrement remarquable qui mérite d’être gardé, parce que les roches, c’est cool.';
    els.specimenInspectMeta.innerHTML=`<span>${foundDepth}</span>${foundDate?`<span>Trouvé le ${foundDate}</span>`:''}<span>Valeur du spécimen : ${formatMoney(specialItemSellValue(item))}</span>`;
    els.specimenInspectModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    els.specimenInspectClose?.focus({preventScroll:true});
  }




  function closeExceptionalInspect(){
    if(!els.specimenInspectModal)return;
    els.specimenInspectModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }




  function renderPersonalCollection(){
    if(!els.personalCollectionSection||!els.personalCollectionGrid)return;
    if(!state.postgame?.completed){els.personalCollectionSection.classList.add('hidden');return;}
    els.personalCollectionSection.classList.remove('hidden');
    els.personalCollectionGrid.innerHTML='';
    state.postgame.personalSlots.forEach((item,index)=>{
      const slot=document.createElement('div');slot.className=`personal-slot ${item?'filled':''}`;
      if(!item){slot.innerHTML=`<span class="personal-slot-number">${String(index+1).padStart(2,'0')}</span><span class="personal-empty">Emplacement vide</span>`;}
      else{
        const visual=document.createElement('div');visual.className='personal-slot-visual';
        visual.appendChild(buildExceptionalSprite(item));
        const copy=document.createElement('div');copy.className='personal-slot-copy';copy.innerHTML=`<strong>${item.label}</strong><span class="specimen-note">${item.detail||'Une forme naturelle inhabituelle d’un matériau familier.'}</span>`;
        const actions=document.createElement('div');actions.className='personal-slot-actions';
        const inspect=document.createElement('button');inspect.type='button';inspect.className='mini-button personal-inspect';inspect.textContent='Inspecter';inspect.addEventListener('click',()=>openExceptionalInspect(item));
        const remove=document.createElement('button');remove.type='button';remove.className='mini-button';remove.textContent='Ranger';remove.addEventListener('click',()=>removePersonalSlot(index));
        actions.append(inspect,remove);slot.append(visual,copy,actions);
      }
      els.personalCollectionGrid.appendChild(slot);
    });
  }




  function checkGameCompletion(){
    if(state.postgame?.completed||!isMuseumComplete())return false;
    state.postgame.completed=true;
    state.postgame.completedAt=new Date().toISOString();
    state.postgame.completionSeen=false;
    state.upgrades.scannerHeatShield=true;
    state.upgrades.detectorHeatShield=true;
    state.face=generateFace(state.currentDepth);
    checkAchievements();
    saveState();
    return true;
  }




  function completionDate(){
    if(!state.postgame?.completedAt)return 'Complété';
    try{return new Date(state.postgame.completedAt).toLocaleDateString('fr-CA',{year:'numeric',month:'long',day:'numeric'});}catch{return 'Complété';}
  }




  function renderCompletionPlaque(){
    if(!els.completionPlaque)return;
    if(!state.postgame?.completed){els.completionPlaque.classList.add('hidden');els.completionPlaque.innerHTML='';return;}
    els.completionPlaque.classList.remove('hidden');
    els.completionPlaque.innerHTML=`<div><span class="status-label">Plaque permanente du musée</span><strong>🏆 Vrai cherche-cailloux</strong><p>Collection complétée le ${completionDate()} · ${state.meta.tilesMined.toLocaleString()} cases rocheuses minées · ${totalFound().toLocaleString()} spécimens trouvés</p></div><button id="reopenCompletionButton" class="secondary-button" type="button">Voir les récompenses</button>`;
    els.completionPlaque.querySelector('#reopenCompletionButton')?.addEventListener('click',openCompletionModal);
  }




  function openCompletionModal(){
    if(!state.postgame?.completed||!els.completionModal)return;
    els.completionBody.innerHTML=`
      <p>Tous les spécimens requis du musée ont été récoltés. Toutes les profondeurs ont été ouvertes.</p>
      <p><strong>Tu es officiellement un vrai cherche-cailloux.</strong></p>
      <p><strong>Tu as mérité chaque morceau de cette victoire. Rien ne se réinitialise. Rien ne t’est retiré.</strong></p>
      <div class="completion-rewards">
        <div>🏆 <strong>Plaque de complétion du musée</strong><span>Une preuve permanente que tu as vraiment terminé.</span></div>
        <div>⛏️ <strong>Pioche d’acier doré</strong><span>Pratiquement incassable. On a envisagé l’or massif. L’or est mou, lourd et franchement mauvais pour une pioche.</span></div>
        <div>🖼️ <strong>Collection personnelle</strong><span>Un nouvel onglet d’après-jeu avec une Réserve de spécimens illimitée et vingt et un emplacements d’exposition. Aucune liste. Aucun pourcentage. Tes roches, tes règles.</span></div>
        <div>✨ <strong>Exceptional Specimens</strong><span>Des versions choisies et exceptionnellement belles de minéraux familiers peuvent maintenant apparaître à toutes les profondeurs.</span></div>
        <div>🪨 <strong>Prospecteur d’expérience</strong><span>Les nouvelles parois d’après-jeu contiennent 50 % plus de spécimens ordinaires de minéraux et de minerais. Tu sais reconnaître un terrain productif quand tu en vois un.</span></div>
        <div>🎒 <strong>Fournitures de prospection</strong><span>Des consommables optionnels permettent d’améliorer les chances ou de cibler la recherche vers un minéral préféré. Choisis une seule trousse à la fois; chacune peut se combiner avec la Cible du collectionneur, et des spécimens exceptionnels peuvent toujours apparaître sans fournitures.</span></div>
        <div>🌋 <strong>Prospection d’après-jeu</strong><span>Toutes les profondeurs restent ouvertes. Il ne te reste plus rien que tu dois trouver.</span></div>
      </div>
      <p class="completion-line"><strong>Il ne te reste plus rien que tu dois trouver.</strong><br>Mais il y a toujours une autre roche.</p>
      <div class="avery-thanks"><span class="status-label">Une dernière chose</span><p>Merci d’avoir accompagné Cherche-cailloux jusqu’au fond. J’ai créé ce jeu parce que les roches, c’est cool, qu’apprendre est le fun, et que je voulais un jeu incrémental qui te laisse vraiment le finir.</p><p><strong>Je suis vraiment content que tu aies joué. 🩵</strong></p><span>— Avery</span></div>`;
    els.completionModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }




  function closeCompletionModal(){
    if(!els.completionModal)return;
    els.completionModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    state.postgame.completionSeen=true;
    saveState();renderAll();showToast('Après-jeu débloqué. La roche fait encore crac. ✦');
  }




  function workbenchDetails(k){
    const m=MATERIALS[k],s=state.stats[k],mastered=isMastered(k);
    let automation='';
    if(hasProcessing(k)){
      if(mastered){
        const on=!!state.settings.autoProcessByMaterial[k];
        const equipmentReady=canProcessMaterial(k);
        automation=`<div class="material-auto-footer ${equipmentReady?'':'locked'}"><div><strong>Traitement auto</strong><span>${equipmentReady?'Nouvelles trouvailles → étape la plus avancée disponible.':`Nécessite ${WORKSHOP_LEVELS[m.workshopRequired||0].name}.`}</span></div><button class="toggle-switch ${on&&equipmentReady?'on':''}" data-action="toggle-auto" data-material="${k}" type="button" aria-label="Activer ou désactiver ${m.name} traitement auto" aria-pressed="${on&&equipmentReady?'true':'false'}" ${equipmentReady?'':'disabled'}></button></div>`;
      }else{
        automation=`<div class="material-auto-footer locked"><div><strong>Traitement auto</strong><span>Se débloque lorsque cet ensemble du musée est complet.</span></div></div>`;
      }
    }




    const rows=m.stages.map(stage=>{
      const count=state.inventory[k][stage],next=m.process?.[stage],can=canProcessMaterial(k),donated=state.collection[k][stage];
      return `<div class="stage-row"><div class="stage-art"><img src="${detailSpriteSrc(k,stage)}" alt="" loading="lazy" decoding="async"></div><div class="stage-copy"><strong>${m.stageLabels[stage]} · ${count} en stock</strong><span>${formatMoney(m.prices[stage])} l’unité</span>${next&&!can?`<span class="process-lock">Needs ${WORKSHOP_LEVELS[m.workshopRequired||0].name}</span>`:''}</div><div class="stage-actions">${next?`<button class="mini-button accent" data-action="process" data-material="${k}" data-stage="${stage}" ${count<1||!can?'disabled':''}>${m.processLabels[stage]}</button>`:''}<button class="mini-button donate" data-action="donate" data-material="${k}" data-stage="${stage}" ${count<1||donated?'disabled':''}>${donated?'Au musée':'Donner'}</button><button class="mini-button" data-action="sell" data-material="${k}" data-stage="${stage}" ${count<1?'disabled':''}>Vendre ${formatMoney(m.prices[stage])}</button></div></div>`;
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
    checkAchievements();saveState();renderWorkbench();renderAchievements();showToast(`${m.name}: ${m.stageLabels[stage]} → ${m.stageLabels[next]}`);
  }




  function donateOne(k,stage){
    if(state.collection[k][stage]||state.inventory[k][stage]<1)return;
    const wasMastered=isMastered(k);
    state.inventory[k][stage]--;state.collection[k][stage]=true;state.stats[k].donated++;
    const nowMastered=isMastered(k);
    if(!wasMastered&&nowMastered&&hasProcessing(k))state.settings.autoProcessByMaterial[k]=true;
    checkAchievements();
    const justComplété=checkGameCompletion();
    saveState();renderAll();
    if(justComplété){openCompletionModal();return;}
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
    checkAchievements();saveState();renderAll();showToast(`Vendu pour ${formatMoney(value)}.`);
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
    saveState();renderAll();
    showToast(`Sold ${sold} article vendu en vrac${sold===1?'':'s'} for ${formatMoney(value)}.`);
  }




  function toggleAutoProcess(k){
    if(!canAutoProcess(k))return;
    state.settings.autoProcessByMaterial[k]=!state.settings.autoProcessByMaterial[k];
    saveState();renderWorkbench();showToast(`${MATERIALS[k].name} traitement auto ${state.settings.autoProcessByMaterial[k]?'on':'off'}.`);
  }




  function isMastered(k){
    const m=MATERIALS[k];
    const complete=m.stages.every(stage=>!!state.collection[k][stage]);
    return complete && (!!m.mastery || m.family==='fossil' || m.family==='artifact');
  }




  function setMuseumLighting(useUv){
    if(useUv&&!state.upgrades.uvLamp)return;
    const switchingOn=!!useUv&&!state.settings.museumUv;
    state.settings.museumUv=!!useUv;
    if(switchingOn)state.meta.uvViews=(state.meta.uvViews||0)+1;
    checkAchievements();
    saveState();
    renderMuseum();
  }




  function renderMuseum(){
    els.museumWings.innerHTML='';
const uvAvailable=!!state.upgrades.uvLamp;
    els.museumLighting.classList.toggle('hidden',!uvAvailable);
    if(!uvAvailable)state.settings.museumUv=false;
    els.museumWings.classList.toggle('uv-mode',uvAvailable&&state.settings.museumUv);
    els.normalLightButton.classList.toggle('active',!state.settings.museumUv);
    els.uvLightButton.classList.toggle('active',!!state.settings.museumUv);
    syncMuseumUvPage();
    let remplisTotal=0;
    const total=Object.values(MATERIALS).reduce((a,m)=>a+m.stages.length,0);




    WINGS.forEach(w=>{
      const pairs=Object.entries(MATERIALS).filter(([,m])=>m.wing===w.id);
      let wf=0,wt=0;
      pairs.forEach(([k,m])=>{wt+=m.stages.length;wf+=m.stages.filter(s=>state.collection[k][s]).length;});
      remplisTotal+=wf;




      const wing=document.createElement('section');
      const compactWing=w.id==='fossils'||w.id==='history';
      wing.className=`museum-wing ${compactWing?'compact-wing':''}`;
      wing.innerHTML=`<div class="wing-heading"><h3>${w.name}</h3><span>${wf} / ${wt} remplis</span></div>`;
      const groupHost=document.createElement('div');
      groupHost.className=compactWing?'museum-groups-grid':'';
      wing.appendChild(groupHost);




      pairs.forEach(([k,m])=>{
        const group=document.createElement('div');
        const gf=m.stages.filter(s=>state.collection[k][s]).length,mastered=isMastered(k),silverMastered=mastered&&['fossil','artifact'].includes(m.family),obscured=shouldObscureIdentity(k);
        const compactDiscovery=['fossil','artifact'].includes(m.family);
        const hiddenName=m.family==='fossil'?'Fossile non découvert':m.family==='artifact'?'Objet historique non découvert':'???';
        group.className=`museum-group ${mastered?(silverMastered?'silver-mastered':'mastered'):''} ${obscured?'undiscovered':''}`;
        group.innerHTML=`<div class="museum-group-title"><strong>${obscured?hiddenName:m.name}</strong><span>${compactDiscovery?`${gf} / ${m.stages.length}`:obscured?'Non identifié':`${gf} / ${m.stages.length}`}</span></div>`;




        const grid=document.createElement('div');
        grid.className=`museum-specimen-grid ${m.stages.length>=3?'three':m.stages.length===2?'two':'one'}`;




        m.stages.forEach(stage=>{
          const remplis=state.collection[k][stage];
          const column=document.createElement('div');column.className=`museum-specimen-column ${filled?'filled':''} ${obscured?'unknown-specimen':''}`;
          const spécimen=document.createElement('div');specimen.className='museum-specimen';
          const visual=document.createElement('div');visual.className='slot-visual';
          if(obscured){
            const mystery=document.createElement('span');mystery.className='unknown-material-icon';mystery.textContent='?';visual.appendChild(mystery);
          }else visual.appendChild(buildDetailSprite(k,stage));
          spécimen.appendChild(visual);
          if(compactDiscovery){
            if(!filled)specimen.insertAdjacentHTML('beforeend','<span class="slot-state">Pas encore obtenu</span>');
          }else{
            spécimen.insertAdjacentHTML('beforeend',obscured?'<strong class="slot-stage">Spécimen inconnu</strong><span class="slot-state">Non identifié</span>':`<strong class="slot-stage">${m.stageLabels[stage]}</strong>${filled?'':'<span class="slot-state">Pas encore obtenu</span>'}`);
          }
          const fact=document.createElement('div');fact.className='specimen-fact-card';
          const searchHint=!filled?museumSearchHint(k):'';
          const identityNoun=m.family==='fossil'?'fossil':m.family==='artifact'?'artifact':'specimen';
          fact.innerHTML=obscured?`<p class="locked-fact">Trouve ce ${identityNoun} dans la mine pour l’identifier.${searchHint}</p>`:filled?`<p>${m.facts[stage]}</p>`:`<p class="locked-fact">Donne cette forme au musée pour débloquer son fait.${searchHint}</p>`;
          column.appendChild(specimen);column.appendChild(fact);grid.appendChild(column);
        });




        group.appendChild(grid);




        if(mastered&&m.mastery){
          const mastery=document.createElement('div');mastery.className='mastery-panel';
          const unlock=hasProcessing(k)?`<span class="mastery-unlock">⚙ Traitement auto débloqué</span>`:'';
          mastery.innerHTML=`<strong>✦ Découverte bonus</strong><p>${m.mastery.fact}</p>${unlock}`;
          group.appendChild(mastery);
        }




        groupHost.appendChild(group);
      });




      els.museumWings.appendChild(wing);
    });




    els.museumCount.textContent=`${filledTotal} / ${total}`;
    els.museumMeter.style.width=`${filledTotal/total*100}%`;
    renderCompletionPlaque();
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




    const special=new Set(['rockaholic','trueRockhound']);




    ACHIEVEMENTS.forEach(a=>{
      const earned=!!state.achievements[a.id];
      const tier=special.has(a.id)?'tier-special':'tier-small';
      const card=document.createElement('article');
      card.className=`achievement-card ${tier} ${earned?'unlocked':'locked'} ${!earned?'hidden-achievement':''}`;
      const name=earned?a.name:'???';
      const desc=earned?maskUndiscoveredNames(a.description):'???';
      card.innerHTML=`<div class="achievement-icon"><span class="achievement-badge-glyph">${earned?a.icon:'?'}</span></div><div><strong>${name}</strong><p>${desc}</p></div>`;
      els.achievementGrid.appendChild(card);
    });
  }




  function renderUpgrades(){
    els.shopBalance.textContent=formatMoney(state.credits);
    els.upgradeList.innerHTML='';




    const addCard=(builder,label)=>{
      try{
        const card=builder();
        if(card)els.upgradeList.appendChild(card);
      }catch(err){
        console.error(`Upgrade card failed: ${label}`,err);
      }
    };




    addCard(depthCard,'mine depth');
    if(state.unlockedDepth>=6)addCard(geothermalGearCard,'geothermal gear');
    addCard(durabilityCard,'pick durability');
    addCard(surveyCard,'scanner analysis');
    addCard(scannerUsesCard,'scanner charges');
    addCard(metalDetectorCard,'metal detector');
    if(state.unlockedDepth>=6){
      addCard(scannerHeatShieldCard,'scanner heat shielding');
      addCard(detectorHeatShieldCard,'detector heat shielding');
    }
    if(state.unlockedDepth>=5)addCard(uvLampCard,'UV lamp');
    addCard(workshopCard,'workshop');
    renderProspectingShop();
  }




  function renderProspectingShop(){
    if(!els.prospectingShop)return;
    const unlocked=!!state.postgame?.completed;
    els.prospectingShop.classList.toggle('hidden',!unlocked);
    if(!unlocked){els.prospectingShop.innerHTML='';return;}
    const stock=state.postgame.supplies||{};
    els.prospectingShop.innerHTML=`<div class="shop-section-heading"><div><span class="status-label">Prospection d’après-jeu</span><h3>Fournitures de prospection</h3></div><span>Optionnel · trousse + cible</span></div><p class="vault-help">Achète les fournitures ici, puis arme-les dans la Mine. Choisis une seule trousse à la fois; l’une ou l’autre peut se combiner avec la Cible du collectionneur. Les fournitures ne sont consommées qu’au premier coup de pioche sur une nouvelle paroi préparée.</p><div class="shop-supply-list"></div>`;
    const host=els.prospectingShop.querySelector('.shop-supply-list');
    Object.entries(PROSPECTING_SUPPLIES).forEach(([key,cfg])=>{
      const card=document.createElement('article');card.className='shop-supply-card';
      card.innerHTML=`<div class="supply-icon">${cfg.icon}</div><div class="supply-copy"><span class="status-label">Consommable d’après-jeu</span><strong>${cfg.label}</strong><p>${cfg.description}</p><span class="supply-stock">${stock[key]||0} en stock</span></div><div class="shop-supply-action"><span class="price-tag">${formatMoney(cfg.cost)}</span><button class="primary-button" type="button" ${state.credits<cfg.cost?'disabled':''}>Acheter</button></div>`;
      card.querySelector('button')?.addEventListener('click',()=>buyProspectingSupply(key));host.appendChild(card);
    });
  }


  function upgradeCard({icon,eyebrow,title,description,current,cost,label,disabled,onClick,maxText=null}){
    const card=document.createElement('article');card.className='upgrade-card';
    const action=maxText
      ?`<div class="upgrade-action"><span class="max-state">${maxText}</span></div>`
      :`<div class="upgrade-action"><span class="price-tag">${formatMoney(cost)}</span><button class="primary-button" type="button" ${disabled?'disabled':''}>${label}</button></div>`;
    card.innerHTML=`<div class="upgrade-icon">${icon}</div><div class="upgrade-copy"><span class="status-label">${eyebrow}</span><h3>${title}</h3><p>${description}</p><span class="upgrade-current">${current}</span></div>${action}`;
    const b=card.querySelector('button');if(b&&!disabled&&onClick)b.addEventListener('click',onClick);return card;
  }




  function depthCard(){
    const nextDepth=state.unlockedDepth+1;
    if(nextDepth>6)return upgradeCard({icon:'🪜',eyebrow:'Profondeur de la mine',title:'Toutes les profondeurs débloquées',description:'Du Filon supérieur à la Zone épithermale, toutes les profondeurs sont accessibles.',current:'Profondeurs 1 à 6 disponibles',maxText:'MAX'});
const up=DEPTH_UPGRADES[nextDepth];
    return upgradeCard({icon:'🪜',eyebrow:'Profondeur de la mine',title:`Débloquer la profondeur ${nextDepth}`,description:up.description,current:`Actuel : profondeurs 1 à ${state.unlockedDepth}`,cost:up.cost,label:'Descendre',disabled:state.credits<up.cost,onClick:buyDepth});
  }




  function geothermalGearCard(){
    const owned=!!state.upgrades.geothermalGear,cost=2400;
    const description='Vêtements et équipement résistants à la chaleur pour travailler en sécurité dans la Zone épithermale.';
    if(owned)return upgradeCard({icon:'🥽',eyebrow:'Accès à la profondeur 6',title:'Tenue de protection géothermale',description,current:'Actuel : homologuée pour la Zone épithermale',maxText:'MAX'});
    return upgradeCard({icon:'🥽',eyebrow:'Accès à la profondeur 6',title:'Tenue de protection géothermale',description,current:'Requise pour miner dans la Zone épithermale',cost,label:'Équiper la tenue',disabled:state.unlockedDepth<6||state.credits<cost,onClick:buyGeothermalGear});
  }




  function durabilityCard(){
    if(state.postgame?.completed)return upgradeCard({icon:'⛏️',eyebrow:'Récompense de complétion',title:'Pioche d’acier doré',description:'Pratiquement incassable. Une pioche en or massif aurait été molle, lourde et objectivement terrible pour travailler.',current:'Actuel : pioche d’acier doré · durabilité ∞',maxText:'À TOI'});
    const i=state.upgrades.durability,cur=DURABILITY_LEVELS[i],max=cur.cost===null,next=max?null:DURABILITY_LEVELS[i+1];
    if(max)return upgradeCard({icon:'⛏️',eyebrow:'Durabilité de la pioche',title:cur.label,description:'Conçue pour la roche la plus dure des galeries les plus profondes.',current:`Actuel : ${cur.label} · ${cur.swings} coups`,maxText:'MAX'});
    return upgradeCard({icon:'⛏️',eyebrow:'Durabilité de la pioche',title:`${cur.swings} → ${next.swings} coups`,description:'Plus de coups par paroi rocheuse.',current:`Actuel : ${cur.label} · ${cur.swings} coups`,cost:cur.cost,label:'Améliorer la pioche',disabled:state.credits<cur.cost,onClick:buyDurability});
  }




  function surveyCard(){
    const cur=SURVEY_LEVELS[state.upgrades.surveying],max=cur.cost===null;
    const mechanics='Le scanner cible une zone 3×3. Les cases sondées restent marquées pour toute la paroi, et scanner deux fois la même zone peut révéler une faible ombre de densité générique sur les cases occupées.';
    if(max)return upgradeCard({icon:'⌁',eyebrow:'Analyse du scanner',title:cur.name,description:`${mechanics} ${cur.description}`,current:`Actuel : ${cur.name}`,maxText:'MAX'});
    return upgradeCard({icon:'⌁',eyebrow:'Analyse du scanner',title:`Débloquer ${cur.next}`,description:`${mechanics} ${cur.description}`,current:`Actuel : ${cur.name}`,cost:cur.cost,label:'Améliorer le scanner',disabled:state.credits<cur.cost,onClick:buySurvey});
  }




  function scannerUsesCard(){
    const cur=SCAN_CHARGE_LEVELS[state.upgrades.scannerUses],max=cur.cost===null,next=max?null:SCAN_CHARGE_LEVELS[state.upgrades.scannerUses+1],locked=state.upgrades.surveying===0;
    if(max)return upgradeCard({icon:'📡',eyebrow:'Charges du scanner',title:cur.label,description:'Chaque charge scanne une zone 3×3 choisie.',current:`Actuel : ${cur.uses} scans par paroi`,maxText:'MAX'});
    return upgradeCard({icon:'📡',eyebrow:'Charges du scanner',title:`${cur.uses} → ${next.uses} scans par paroi`,description:locked?'Débloque d’abord le scanner de terrain.':'Ajoute un scan 3×3 de plus par paroi rocheuse.',current:`Actuel : ${cur.uses} scan${cur.uses===1?'':'s'} par paroi`,cost:cur.cost,label:locked?'Scanner verrouillé':'Ajouter un scan',disabled:locked||state.credits<cur.cost,onClick:buyScannerUse});
  }




  function metalDetectorCard(){
    const owned=!!state.upgrades.metalDetector,depthReady=state.unlockedDepth>=2,cost=275;
    const description='Le détecteur balaie toute la paroi une seule fois. Il marque volontairement de grandes zones de signal imprécises pour les cibles métalliques ou conductrices, y compris certains objets historiques; il n’indique jamais une case exacte.';
    if(owned)return upgradeCard({icon:'🧲',eyebrow:'Outil de prospection',title:'Détecteur de métaux',description,current:'Actuel : détecteur de métaux équipé',maxText:'MAX'});
    return upgradeCard({icon:'🧲',eyebrow:'Outil de prospection',title:'Débloquer le détecteur de métaux',description,current:depthReady?'Disponible après avoir atteint les Galeries basses':'Atteins d’abord la profondeur 2',cost,label:depthReady?'Acheter le détecteur':'Profondeur 2 requise',disabled:!depthReady||state.credits<cost,onClick:buyMetalDetector});
  }




  function scannerHeatShieldCard(){
    const owned=!!state.upgrades.scannerHeatShield,gear=!!state.upgrades.geothermalGear,scanner=state.upgrades.surveying>0,cost=800;
    const ready=gear&&scanner;
    const description='Isole l’électronique du scanner contre les températures et conditions géothermales de la Zone épithermale. Cela ne change pas sa puissance ailleurs.';
    if(owned)return upgradeCard({icon:'📡',eyebrow:'Adaptation environnementale',title:'Boîtier thermoprotégé du scanner',description,current:'Actuel : scanner homologué pour la profondeur 6',maxText:'MAX'});
    return upgradeCard({icon:'📡',eyebrow:'Adaptation environnementale',title:'Boîtier thermoprotégé du scanner',description,current:ready?'Prêt à installer':!gear?'Nécessite la tenue de protection géothermale':'Nécessite le scanner de terrain',cost,label:ready?'Installer le boîtier':'Verrouillé',disabled:!ready||state.credits<cost,onClick:buyScannerHeatShield});
  }




  function detectorHeatShieldCard(){
    const owned=!!state.upgrades.detectorHeatShield,gear=!!state.upgrades.geothermalGear,detector=!!state.upgrades.metalDetector,cost=650;
    const ready=gear&&detector;
    const description='Protège la bobine et l’électronique du détecteur contre la chaleur de la Zone épithermale. Le détecteur donne toujours un seul balayage volontairement vague de toute la paroi.';
    if(owned)return upgradeCard({icon:'🧲',eyebrow:'Adaptation environnementale',title:'Boîtier thermoprotégé du détecteur',description,current:'Actuel : détecteur homologué pour la profondeur 6',maxText:'MAX'});
    return upgradeCard({icon:'🧲',eyebrow:'Adaptation environnementale',title:'Boîtier thermoprotégé du détecteur',description,current:ready?'Prêt à installer':!gear?'Nécessite la tenue de protection géothermale':'Nécessite le détecteur de métaux',cost,label:ready?'Installer le boîtier':'Verrouillé',disabled:!ready||state.credits<cost,onClick:buyDetectorHeatShield});
  }




  function uvLampCard(){
    const owned=!!state.upgrades.uvLamp,depthReady=state.unlockedDepth>=5,cost=950;
    const description='Ajoute un mode d’éclairage Normal / UV pour tout le musée. Les spécimens fluorescents révèlent leur éclat sous UV tandis que la majorité de la collection reste sombre.';
    if(owned)return upgradeCard({icon:'🔦',eyebrow:'Équipement du musée',title:'Lampe UV de fluorescence',description,current:'Actuel : éclairage UV installé au musée',maxText:'MAX'});
    return upgradeCard({icon:'🔦',eyebrow:'Équipement du musée',title:'Débloquer la lampe UV de fluorescence',description,current:depthReady?'Disponible après avoir atteint la Zone lumineuse':'Atteins d’abord la profondeur 5',cost,label:depthReady?'Installer la lampe UV':'Profondeur 5 requise',disabled:!depthReady||state.credits<cost,onClick:buyUvLamp});
  }




  function workshopCard(){
    const i=state.upgrades.workshop,cur=WORKSHOP_LEVELS[i],max=cur.cost===null;
    if(max)return upgradeCard({icon:'🛠️',eyebrow:'Équipement d’atelier',title:cur.name,description:cur.description,current:`Actuel : ${cur.name}`,maxText:'MAX'});
    return upgradeCard({icon:'🛠️',eyebrow:'Équipement d’atelier',title:`Débloquer ${cur.next}`,description:cur.description,current:`Actuel : ${cur.name}`,cost:cur.cost,label:'Améliorer l’atelier',disabled:state.credits<cur.cost,onClick:buyWorkshop});
  }








  function refreshShopPurchaseUi(){
    renderUpgrades();
    requestAnimationFrame(()=>renderUpgrades());
  }




  function buyDepth(){
    const nextDepth=state.unlockedDepth+1,up=DEPTH_UPGRADES[nextDepth];
    if(!up||state.credits<up.cost)return;
    state.credits-=up.cost;state.unlockedDepth=nextDepth;state.currentDepth=nextDepth;heatWarningVisible=false;state.face=generateFace(nextDepth);
    checkAchievements();saveState();refreshShopPurchaseUi();renderAll();showToast(`Profondeur ${nextDepth} débloquée : ${DEPTHS[nextDepth].name}.`);
  }
  function buyGeothermalGear(){
    const cost=2400;if(state.upgrades.geothermalGear||state.unlockedDepth<6||state.credits<cost)return;
    state.credits-=cost;state.upgrades.geothermalGear=true;heatWarningVisible=false;checkAchievements();saveState();refreshShopPurchaseUi();renderAll();showToast('Tenue de protection géothermale équipée.');
  }


  function buyScannerHeatShield(){
    const cost=800;if(state.upgrades.scannerHeatShield||!state.upgrades.geothermalGear||state.upgrades.surveying===0||state.credits<cost)return;
    state.credits-=cost;state.upgrades.scannerHeatShield=true;saveState();refreshShopPurchaseUi();renderAll();showToast('Protection thermique du scanner installée.');
  }


  function buyDetectorHeatShield(){
    const cost=650;if(state.upgrades.detectorHeatShield||!state.upgrades.geothermalGear||!state.upgrades.metalDetector||state.credits<cost)return;
    state.credits-=cost;state.upgrades.detectorHeatShield=true;saveState();refreshShopPurchaseUi();renderAll();showToast('Protection thermique du détecteur installée.');
  }


  function buyDurability(){
    const i=state.upgrades.durability,cur=DURABILITY_LEVELS[i];
    if(cur.cost===null||state.credits<cur.cost)return;
    state.credits-=cur.cost;const old=cur.swings;state.upgrades.durability++;
    const newer=DURABILITY_LEVELS[state.upgrades.durability].swings;state.face.durability=Math.min(newer,state.face.durability+(newer-old));
    checkAchievements();saveState();refreshShopPurchaseUi();renderAll();showToast(`Durabilité de la pioche augmentée à ${newer} coups.`);
  }


  function buySurvey(){
    const cur=SURVEY_LEVELS[state.upgrades.surveying];
    if(cur.cost===null||state.credits<cur.cost)return;
    state.credits-=cur.cost;state.upgrades.surveying++;
    if(state.upgrades.surveying===1&&state.face.scanUsesRemaining===0)state.face.scanUsesRemaining=currentMaxScans();
    checkAchievements();saveState();refreshShopPurchaseUi();renderAll();showToast(`${SURVEY_LEVELS[state.upgrades.surveying].name} débloqué.`);
  }


  function buyScannerUse(){
    const i=state.upgrades.scannerUses,cur=SCAN_CHARGE_LEVELS[i];
    if(state.upgrades.surveying===0||cur.cost===null||state.credits<cur.cost)return;
    state.credits-=cur.cost;const oldUses=cur.uses;state.upgrades.scannerUses++;
    const newUses=SCAN_CHARGE_LEVELS[state.upgrades.scannerUses].uses;state.face.scanUsesRemaining+=newUses-oldUses;
    checkAchievements();saveState();refreshShopPurchaseUi();renderAll();showToast(`${newUses} scans par paroi débloqués.`);
  }




  function buyMetalDetector(){
    const cost=275;
    if(state.upgrades.metalDetector||state.unlockedDepth<2||state.credits<cost)return;
    state.credits-=cost;
    state.upgrades.metalDetector=true;
    checkAchievements();
    saveState();refreshShopPurchaseUi();renderAll();showToast('Détecteur de métaux débloqué.');
  }


  function buyUvLamp(){
    const cost=950;
    if(state.upgrades.uvLamp||state.unlockedDepth<5||state.credits<cost)return;
    state.credits-=cost;state.upgrades.uvLamp=true;
    saveState();refreshShopPurchaseUi();renderAll();showToast('Lampe UV de fluorescence installée au musée.');
  }


  function buyWorkshop(){
    const cur=WORKSHOP_LEVELS[state.upgrades.workshop];
    if(cur.cost===null||state.credits<cur.cost)return;
    state.credits-=cur.cost;state.upgrades.workshop++;
    checkAchievements();saveState();refreshShopPurchaseUi();renderAll();showToast(`${WORKSHOP_LEVELS[state.upgrades.workshop].name} débloqué.`);
  }




  function resetGame(){
    if(!window.confirm('Réinitialiser toute la progression de Cherche-cailloux Bêta 1.5.8?'))return;
    localStorage.removeItem(SAVE_KEY);state=defaultState();state.face=generateFace(1);openWorkbenchKey=null;scanMode=false;
    saveState();renderAll();showToast('Sauvegarde Bêta 1.5.8 réinitialisée.');
  }


  function showToast(msg){
    clearTimeout(toastTimer);els.toast.textContent=msg;els.toast.classList.add('show');toastTimer=setTimeout(()=>els.toast.classList.remove('show'),1900);
  }


})();