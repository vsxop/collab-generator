<svelte:head>
	<title>Collab Generator</title>
</svelte:head>

<script>
	import { onMount, onDestroy } from 'svelte';

	// console.log('Collab Generator 2025');

	var windowWidth = 0;
	const breakpoint = {
		xs: 320,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	}
	var cgbp = '';

	const allBrands = [
		{ name: 'welcome 1',				img: 'welcome1.png' },
		{ name: 'welcome 2',				img: 'welcome2.png' },
		{ name: 'welcome 3',				img: 'welcome3.png' },

		{ name: '4chan',					img: 'brands/4chan.png' },
		{ name: 'ACLU',						img: 'brands/aclu.png' },
		{ name: 'Allbirds',					img: 'brands/allbirds.png' },
		{ name: 'American Spirit',			img: 'brands/americanspirit.png' },
		{ name: 'Anne Taylor Loft',			img: 'brands/annetaylorloft.png' },
		{ name: 'Avocados From Mexico',		img: 'brands/avocadosfrommexico.png' },
		{ name: 'Balenciaga',				img: 'brands/balenciaga.png' },
		{ name: 'Bard College',				img: 'brands/bardcollege.png' },
		{ name: 'Barstool Sports',			img: 'brands/barstoolsports.png' },
		{ name: 'Beyond Meat',				img: 'brands/beyondmeat.png' },
		{ name: 'Bill & Melinda Gates Foundation', img: 'brands/bill&melindagatesfoundation.png' },
		{ name: 'The Blackstone Group Inc.', img: 'brands/blackstonegroup.png' },
		{ name: 'Boeing',					img: 'brands/boeing.png' },
		{ name: 'The Boring Company',		img: 'brands/boringcompany.png' },
		{ name: 'Bumble',					img: 'brands/bumble.png' },
		{ name: 'Carnival Cruises',			img: 'brands/carnival.png' },
		{ name: 'Catholic Church',			img: 'brands/catholicchurch.png' },
		{ name: 'Cheez-It',					img: 'brands/cheezit.png' },
		{ name: 'Chick-fil-A',				img: 'brands/chickfila.png' },
		{ name: 'Ciudad Juarez',			img: 'brands/ciudadjuarez.png' },
		{ name: 'Clorox',					img: 'brands/clorox.png' },
		{ name: 'Cost Plus World Market',	img: 'brands/costplusworldmarket.png' },
		{ name: 'Country Crock Butter',		img: 'brands/countrycrock.png' },
		{ name: 'Courvoisier',				img: 'brands/courvoisier.png' },
		{ name: 'Credit Karma',				img: 'brands/creditkarma.png' },
		{ name: 'Diageo',					img: 'brands/diageo.png' },
		{ name: 'DiGiorno',					img: 'brands/digiorno.png' },
		{ name: 'Dollar Shave Club',		img: 'brands/dollarshaveclub.png' },
		{ name: 'Doritos',					img: 'brands/doritos.png' },
		{ name: 'Dosist',					img: 'brands/dosist.png' },
		{ name: 'Dow',						img: 'brands/dow.png' },
		{ name: 'Dyson',					img: 'brands/dyson.png' },
		{ name: 'Ecko Unltd.',				img: 'brands/eckounltd.png' },
		{ name: 'El Pollo Loco',			img: 'brands/elpolloloco.png' },
		{ name: 'Erewhon',					img: 'brands/erewhon.png' },
		{ name: 'Eros.com',					img: 'brands/eroscom.png' },
		{ name: 'Everlane',					img: 'brands/everlane.png' },
		{ name: 'Fenty',					img: 'brands/fenty.png' },
		{ name: 'Fiji Water',				img: 'brands/fijiwater.png' },
		{ name: 'The Flat Earth Society',	img: 'brands/flatearthsociety.png' },
		{ name: 'Food Network',				img: 'brands/foodnetwork.png' },
		{ name: 'Funko Pop',				img: 'brands/funkopop.png' },
		{ name: 'Gimlet',					img: 'brands/gimlet.png' },
		{ name: 'Goldman Sachs',			img: 'brands/goldmansachs.png' },
		{ name: 'The Goodyear Blimp',		img: 'brands/goodyearblimp.png' },
		{ name: 'Goop',						img: 'brands/goop.png' },
		{ name: 'Hasbro',					img: 'brands/hasbro.png' },
		{ name: 'Hims',						img: 'brands/hims.png' },
		{ name: 'Huff Post',				img: 'brands/huffpost.png' },
		{ name: 'The Humane Society',		img: 'brands/humanesociety.png' },
		{ name: 'Ikon Pass',				img: 'brands/ikonpass.png' },
		{ name: 'Juul',						img: 'brands/juul.png' },
		{ name: 'LaCroix',					img: 'brands/lacroix.png' },
		{ name: 'Layne Bryant',				img: 'brands/laynebryant.png' },
		{ name: 'LeLabo',					img: 'brands/lelabo.png' },
		{ name: "Levi's",					img: 'brands/levis.png' },
		{ name: 'Levitra',					img: 'brands/levitra.png' },
		{ name: 'Live Nation',				img: 'brands/livenation.png' },
		{ name: 'Lululemon',				img: 'brands/lululemon.png' },
		{ name: 'MeUndies',					img: 'brands/meundies.png' },
		{ name: 'Monster Energy',			img: 'brands/monsterenergy.png' },
		{ name: 'Nike',						img: 'brands/nike.png' },
		{ name: 'Oatly',					img: 'brands/oatly.png' },
		{ name: 'Off-White',				img: 'brands/offwhite.png' },
		{ name: 'Patagonia',				img: 'brands/patagonia.png' },
		{ name: "P.F. Chang's",				img: 'brands/pfchangs.png' },
		{ name: 'PGA Tour',					img: 'brands/pgatour.png' },
		{ name: 'Pier 1 Imports',			img: 'brands/pier1imports.png' },
		{ name: 'Pillsbury Crescent',		img: 'brands/pillsburycrescent.png' },
		{ name: "Pink's Hot Dogs",			img: 'brands/pinkshotdogs.png' },
		{ name: 'Pornhub',					img: 'brands/pornhub.png' },
		{ name: 'Quibi',					img: 'brands/quibi.png' },
		{ name: 'Raya',						img: 'brands/raya.png' },
		{ name: 'Rikers Island',			img: 'brands/rikersisland.png' },
		{ name: 'Ritual Vitamins',			img: 'brands/ritual.png' },
		{ name: "Sam's Club",				img: 'brands/samsclub.png' },
		{ name: 'The Church of Scientology', img: 'brands/scientology.png' },
		{ name: 'Shen Yun',					img: 'brands/shenyun.png' },
		{ name: 'Soylent',					img: 'brands/soylent.png' },
		{ name: 'Steve Madden',				img: 'brands/stevemadden.png' },
		{ name: 'Supreme',					img: 'brands/supreme.png' },
		{ name: 'Synergy Kombucha',			img: 'brands/synergykombucha.png' },
		{ name: 'Teva',						img: 'brands/teva.png' },
		{ name: 'Tommy Bahama',				img: 'brands/tommybahama.png' },
		{ name: 'Turkish Airlines',			img: 'brands/turkishairlines.png' },
		{ name: 'Twitch',					img: 'brands/twitch.png' },
		{ name: "Uncle Ben's",				img: 'brands/unclebens.png' },
		{ name: 'Uniqlo',					img: 'brands/uniqlo.png' },
		{ name: 'Vaseline',					img: 'brands/vaseline.png' },
		{ name: 'Velveeta Shells & Cheese',	img: 'brands/velveetashells&cheese.png' },
		{ name: 'Venmo',					img: 'brands/venmo.png' },
		{ name: "Vicks VapoRub",			img: 'brands/vicksvaporub.png' },
		{ name: 'Virgin Galactic',			img: 'brands/virgingalactic.png' },
		{ name: 'WeWork',					img: 'brands/wework.png' },
		{ name: 'The Wonderful Company',	img: 'brands/wonderfulcompany.png' },
		{ name: "Yoo-Hoo",					img: 'brands/yoohoo.png' },
		{ name: "Zatarain's",				img: 'brands/zatarains.png' },
		{ name: "Zoom",						img: 'brands/zoom.png' }
	];

	const allNames = [
		{ name: 'Ezra Klein',					img: 'names/ezraklein.png' },
		{ name: 'Gordon Ramsey',				img: 'names/gordonramsey.png' },
		{ name: 'Her Majesty Queen Elizabeth',	img: 'names/hermajestyqueenelizabeth.png' },
		{ name: 'Joel Osteen',					img: 'names/joelosteen.png' },
		{ name: 'The Mafia',					img: 'names/mafia.png' },
		{ name: 'Tyson Fury',					img: 'names/tysonfury.png' }
	];

// when to pluralize?
	const allCategories = [
		{ name: 'air force 1s',						img: 'categories/airforce1s.png' },
		{ name: 'app filter',						img: 'categories/appfilter.png' },
		{ name: 'ark',								img: 'categories/ark.png' },
		{ name: 'aromatherapy candle',				img: 'categories/aromatherapycandle.png' },
		{ name: 'dairy replacement formula', 		img: 'categories/dairyreplacementformula.png' },
		{ name: 'blunt rolls', 						img: 'categories/bluntrolls.png' },
		{ name: 'briefs',							img: 'categories/briefs.png' },
		{ name: 'canned cocktail',					img: 'categories/cannedcocktail.png' },
		{ name: 'cbd cream',						img: 'categories/cbdcream.png' },
		{ name: 'chocolate oat milk',				img: 'categories/chocolateoatmilk.png' },
		{ name: 'communion wafer',					img: 'categories/communionwafer.png' },
		{ name: 'compression socks',				img: 'categories/compressionsocks.png' },
		{ name: 'cpap machine',						img: 'categories/cpapmachine.png' },
		{ name: 'dipping sauce',					img: 'categories/dippingsauce.png' },
		{ name: 'easy bake oven',					img: 'categories/easybakeoven.png' },
		{ name: 'flame thrower',					img: 'categories/flamethrower.png' },
		{ name: 'fleshlight',						img: 'categories/flesh-light.png' },
		{ name: 'form fitting boots',				img: 'categories/formfittingboots.png' },
		{ name: 'free credit report',				img: 'categories/freecreditreport.png' },
		{ name: 'fruit leather',					img: 'categories/fruitleather.png' },
		{ name: 'golf club cover',					img: 'categories/golfclubcover.png' },
		{ name: 'high tops',						img: 'categories/hightops.png' },
		{ name: 'japanese toilet',					img: 'categories/japanesetoilet.png' },
		{ name: 'jeans',							img: 'categories/jeans.png' },
		{ name: 'juul pod',							img: 'categories/juulpod.png' },
		{ name: 'lettuce cup',						img: 'categories/lettucecup.png' },
		{ name: 'life jackets',						img: 'categories/lifejackets.png' },
		{ name: 'lightbulbs',						img: 'categories/lightbulbs.png' },
		{ name: 'lip balm',							img: 'categories/lipbalm.png' },
		{ name: 'live laugh love picture frame',	img: 'categories/livelaughlovepictureframe.png' },
		{ name: 'micro-apartment',					img: 'categories/microapartment.png' },
		{ name: 'microtransaction for charity',		img: 'categories/microtransactionforcharity.png' },
		{ name: 'mosquito net',						img: 'categories/mosquitonet.png' },
		{ name: 'mylar balloon',					img: 'categories/mylarballoon.png' },
		{ name: 'nasal spray',						img: 'categories/nasalspray.png' },
		{ name: 'pangolin jerky',					img: 'categories/pangolinjerky.png' },
		{ name: 'pasta',							img: 'categories/pasta.png' },
		{ name: 'pickup truck decal',				img: 'categories/pickuptruckdecal.png' },
		{ name: 'frozen pizza',						img: 'categories/frozenpizza.png' },
		{ name: 'plug and play burning man camp',	img: 'categories/plugandplayburningmancamp.png' },
		{ name: 'poultrywear',						img: 'categories/poultrywear.png' },
		{ name: 'quail pie',						img: 'categories/quailpie.png' },
		{ name: 'rosé',								img: 'categories/rose.png' },
		// { name: 'salmon jerky',						img: 'categories/salmonjerky.png' },
		{ name: 'service animal carrier',			img: 'categories/serviceanimalcarrier.png' },
		{ name: 'seven ply toilet paper',			img: 'categories/sevenplytoiletpaper.png' },
		{ name: 'sex lube',							img: 'categories/sexlube.png' },
		{ name: 'shaving foam',						img: 'categories/shavingfoam.png' },
		{ name: 'ski wax kit',						img: 'categories/skiwaxkit.png' },
		{ name: 'smart toothbrush',					img: 'categories/smarttoothbrush.png' },
		{ name: 'sports hijab',						img: 'categories/sportshijab.png' },
		{ name: 'stilettos',						img: 'categories/stilettos.png' },
		{ name: 'talcum powder',					img: 'categories/talcumpowder.png' },
		{ name: 'tighty whities',					img: 'categories/tightywhities.png' },
		{ name: 'travel guide',						img: 'categories/travelguide.png' },
		{ name: 'vape pen',							img: 'categories/vapepen.png' },
		{ name: 'vinyl figurine',					img: 'categories/vinylfigurine.png' },
		{ name: 'voice changing implant',			img: 'categories/voicechangingimplant.png' },
		{ name: 'weighted blanket',					img: 'categories/weightedblanket.png' },
		{ name: 'yoga pants',						img: 'categories/yogapants.png' }
	];

	const allCollabs = [
		// id not used for anything atm
		{id: 'welcome',								items: [{ type:'misc',	name:'welcome 1' },							{ type:'misc',	name:'welcome 2' },						{ type:'misc',		name:'welcome 3' }],							description: 'Welcome!'},

		{id: '4chan_chickfila',						items: [{ type:'brand',	name:'4chan' },								{ type:'brand',	name:'Chick-fil-A' },					{ type:'category',	name:'dipping sauce' }],					description: "New Incel-icious™ sauce recipe crafted by the hot Goth girlfriend you'll never have."},
		{id: 'aclu_bumble',							items: [{ type:'brand',	name:'ACLU' },								{ type:'brand',	name:'Bumble' },						{ type:'category',	name:'app filter' }],						description: "App filter to instantly weed out potential mates who can't quote Ta-Nehisi Coates from memory."},
		{id: 'allbirds_ciudadjuarez',				items: [{ type:'brand',	name:'Allbirds' },							{ type:'brand',	name:'Ciudad Juarez' },					{ type:'category',	name:'high tops' }],						description: "High tops made from sustainably sourced Alpaca fur recovered from El Chapo's third most secret compound."},
		{id: 'allbirds_elpolloloco',				items: [{ type:'brand',	name:'Allbirds' },							{ type:'brand',	name:'El Pollo Loco' },					{ type:'category',	name:'poultrywear' }],						description: 'Wool Runner Mizzles™ for chickens on those chilly Topanga mornings.'},
		{id: 'americanspirit_pillsburycrescent',	items: [{ type:'brand',	name:'American Spirit' },					{ type:'brand',	name:'Pillsbury Crescent' },			{ type:'category',	name:'blunt rolls' }],						description: 'Additive-free, olfactory pleasure in a gluteny tobac-dough wrap.'},
		{id: 'americanspirit_raya',					items: [{ type:'brand',	name:'American Spirit' },					{ type:'brand',	name:'Raya' },							{ type:'category',	name:'plug and play burning man camp' }],	description: '$10,000 per head Plug and Play Burning Man camp with unlimited blue label American Spirits and free magnum condoms.'},
		{id: 'annetaylorloft_goodyear',				items: [{ type:'brand',	name:'Anne Taylor Loft' },					{ type:'brand',	name:'The Goodyear Blimp' },			{ type:'category',	name:'live laugh love picture frame' }],	description: "Custom aerial photo of you living your best life doing beach yoga in Goa after a mid-30's mental crisis. All encased in a snarky, custom-matte picture frame."},
		{id: 'avocadosfrommexico_dyson',			items: [{ type:'brand',	name:'Avocados From Mexico' },				{ type:'brand',	name:'Dyson' },							{ type:'category',	name:'fleshlight' }],						description: 'The masters of suction™ and the favorite thing you put on toast combine into a powerful, ball-draining, avo-bio-diesel powered fuck sleeve.'},
		{id: 'avocadosfrommexico_levis',			items: [{ type:'brand',	name:'Avocados From Mexico' },				{ type:'brand',	name:"Levi's" },						{ type:'category',	name:'jeans' }],							description: 'Blue Jeans with Avocado shaped Penny Pockets™ sewn by Real Mexican Avocado Farmers®.'},
		// {id: 'balenciaga_countrycrock',				items: [{ type:'brand',	name:'Balenciaga' },						{ type:'brand',	name:'Country Crock Butter' },			{ type:'category',	name:'salmon jerky' }],						description: 'Omega-rich, Alaskan king salmon butter sticks in a handy Italian leather, $1,800 carrying pouch.'},
// ok with two identical IDs? at least for now when they're not used
		{id: 'balenciaga_digiorno',					items: [{ type:'brand',	name:'Balenciaga' },						{ type:'brand',	name:'DiGiorno' },						{ type:'category',	name:'stilettos' }],						description: 'Balenciaga stilettos with DiGornio Rise™ technology for maximum comfort on a night out.'},
		{id: 'balenciaga_digiorno',					items: [{ type:'brand',	name:'Balenciaga' },						{ type:'brand',	name:'DiGiorno' },						{ type:'category',	name:'frozen pizza' }],						description: 'Special 12" frozen Seaside Heights Pizza™ with laser-cut Balenciaga stilleto meatballs.'},
		{id: 'bard_lululemon',						items: [{ type:'brand',	name:'Bard College' },						{ type:'brand',	name:'Lululemon' },						{ type:'category',	name:'yoga pants' }],						description: 'Reversable stretchy pants for transitioning genitals.'},
		{id: 'barstoolsports_blackstone',			items: [{ type:'brand',	name:'Barstool Sports' },					{ type:'brand',	name:'The Blackstone Group Inc.' },		{ type:'category',	name:'cpap machine' }],						description: "After a tough day of toxic masculinity you need a restful, oxygenated night's sleep that's billable through Insuramed (a Blackstone Company)."},
		{id: 'barstoolsports_quibi',				items: [{ type:'brand',	name:'Barstool Sports' },					{ type:'brand',	name:'Quibi' },							{ type:'category',	name:'rosé' }],								description: 'Slam a sixer of Barstool Chuggable Hammertime Rosé Wine-Shots™ in exactly the length of one snackable Quibi TV episode.'},
		{id: 'beyondmeat_dollarshaveclub',			items: [{ type:'brand',	name:'Beyond Meat' },						{ type:'brand',	name:'Dollar Shave Club' },				{ type:'category',	name:'shaving foam' }],						description: 'A limited-edition subscription to Beyond Lamb™ shaving foam. For a smooth, cruelty-free shave every time.'},
		{id: 'beyondmeat_doritos',					items: [{ type:'brand',	name:'Beyond Meat' },						{ type:'brand',	name:'Doritos' },						{ type:'category',	name:'pangolin jerky' }],					description: 'Nacho Cheesier™ Pangolin meat substitute keeps you satisfied at the Wuhan wet market without all the "global pandemic" bullshit.'},
		{id: 'beyondmeat_dowchemical',				items: [{ type:'brand',	name:'Beyond Meat' },						{ type:'brand',	name:'Dow' },							{ type:'category',	name:'mylar balloon' }],					description: "Celebrate life's big events minus the Earth murdering mylar with Beyond Balloons. Available in Pork and Beef polymer flavors."},
		{id: 'billandmelindagatesfoundation_nike',	items: [{ type:'brand',	name:'Bill & Melinda Gates Foundation' },	{ type:'brand',	name:'Nike' },							{ type:'category',	name:'mosquito net' }],						description: 'Nike Flyknit® technology keeps malaria at bay while making you the envy of your village or Burning Man camp.'},
		{id: 'boeing_lacroix',						items: [{ type:'brand',	name:'Boeing' },							{ type:'brand',	name:'LaCroix' },						{ type:'category',	name:'japanese toilet' }],					description: 'A long-haul flight toilet with AI pamplemousse-scented butt spritzer.'},
		{id: 'boeing_tommybahama',					items: [{ type:'brand',	name:'Boeing' },							{ type:'brand',	name:'Tommy Bahama' },					{ type:'category',	name:'life jackets' }],						description: 'For when your trip to Turks & Caicos falls a little bit short.'},
		{id: 'boringcompany_synergy',				items: [{ type:'brand',	name:'The Boring Company' },				{ type:'brand',	name:'Synergy Kombucha' },				{ type:'category',	name:'flame thrower' }],					description: 'A kombucha fueled flame thrower spewing flavored fire (Mystic Mango™)'},
		{id: 'carnivalcruises_joelosteen',			items: [{ type:'brand',	name:'Carnival Cruises' },					{ type:'brand',	name:'Joel Osteen' },					{ type:'category',	name:'ark' }],								description: 'Let sinners drown in the rains of judgement as you cruise the seas in Mega Church style and comfort. Unlimited buffet included.'},
		{id: 'catholicchurch_cheezit',				items: [{ type:'brand',	name:'Catholic Church' },					{ type:'brand',	name:'Cheez-It' },						{ type:'category',	name:'communion wafer' }],					description: 'Jeez-Its Cheez-Its™'},
		{id: 'ciudadjuarez_monsterenergy',			items: [{ type:'brand',	name:'Ciudad Juarez' },						{ type:'brand',	name:'Monster Energy' },				{ type:'category',	name:'pickup truck decal' }],				description: 'Already a partnership.'},
		{id: 'clorox_diageo',						items: [{ type:'brand',	name:'Clorox' },							{ type:'brand',	name:'Diageo' },						{ type:'category',	name:'sex lube' }],							description: 'Captain Morgan Spiced Rum™ adds an irresistible aroma to your general milieu with a 99.99% Chlamydia kill rate.'},
		{id: 'costplusworldmarket_wonderfulcompany',items: [{ type:'brand',	name:'Cost Plus World Market' },			{ type:'brand',	name:'The Wonderful Company' },			{ type:'category',	name:'lightbulbs' }],						description: '120 watts of anti-oxidant rich POM™ goodness oozes out in a sexy crimson hue, setting the tone for intimate moments.'},
		{id: 'countrycrock_ikonpass',				items: [{ type:'brand',	name:'Country Crock Butter' },				{ type:'brand',	name:'Ikon Pass' },						{ type:'category',	name:'ski wax kit' }],						description: 'Butter up your glide with this universal wax kit for ultimate slope shredding.'},
		{id: 'courvoisier_twitch',					items: [{ type:'brand',	name:'Courvoisier' },						{ type:'brand',	name:'Twitch' },						{ type:'category',	name:'canned cocktail' }],					description: 'Pre-batched French 75s in easy-to-sip gaming containers.'},
		{id: 'creditkarma_eroscom',					items: [{ type:'brand',	name:'Credit Karma' },						{ type:'brand',	name:'Eros.com' },						{ type:'category',	name:'free credit report' }],				description: 'Credit-matching AI software: the better your score, the better your whore.'},
		{id: 'digiorno_nike',						items: [{ type:'brand',	name:'DiGiorno' },							{ type:'brand',	name:'Nike' },							{ type:'category',	name:'air force 1s' }],						description: 'Air Force 1s® with the ability to "rise" to the occasion with real packaged rising crust technology crafted from flour and yeast.'},
		{id: 'dosoist_soylent',						items: [{ type:'brand',	name:'Dosist' },							{ type:'brand',	name:'Soylent' },						{ type:'category',	name:'smart toothbrush' }],					description: 'Wake and bake and suck down breakfast with this 250-dose electric toothbrush / vape / Soylent snack dispenser.'},
		{id: 'dyson_gimlet',						items: [{ type:'brand',	name:'Dyson'},								{ type:'brand',	name:'Gimlet'},							{ type:'category',	name:'voice changing implant'}],			description: 'Surgically-implanted, suction-powered Vocal Fry Eliminator to teach smug-ass Brooklynites how to talk.'},
		{id: 'dyson_juul',							items: [{ type:'brand',	name:'Dyson' },								{ type:'brand',	name:'Juul' },							{ type:'category',	name:'vape pen' }],							description: 'DeathSuck MegaVape®'},
		{id: 'eckounltd_pinkshotdogs',				items: [{ type:'brand',	name:'Ecko Unltd.' },						{ type:'brand',	name:"Pink's Hot Dogs" },				{ type:'category',	name:'weighted blanket' }],					description: '43-lbs of premium Tubesteak™ encased in a relaxed-denim weighted blanket for a most restorative rest.'},
		{id: 'erewhon_rikersisland',				items: [{ type:'brand',	name:'Erewhon' },							{ type:'brand',	name:'Rikers Island' },					{ type:'category',	name:'fruit leather' }],					description: 'Organic inmate-crafted fruit leather grounded in the realities of felony life. Available in apricot, rasberry, and blood orange.'},
		{id: 'everlane_wework',						items: [{ type:'brand',	name:'Everlane' },							{ type:'brand',	name:'WeWork' },						{ type:'category',	name:'sports hijab' }],						description: 'Reversible bamboo hijab for switching it up from Badass Girlboss™ to Olympic fencing champion.'},
		{id: 'ezraklein_nike',						items: [{ type:'brand',	name:'Ezra Klein' },						{ type:'brand',	name:'Nike' },							{ type:'category',	name:'high tops' }],						description: 'A high-performance sneaker designed for intersectional trans-feminists to hijack catered lunch from patriarchical, white-male-dominated Fortune 500™ board rooms.'},
		{id: 'fenty_oatly',							items: [{ type:'brand',	name:'Fenty' },								{ type:'brand',	name:'Oatly' },							{ type:'category',	name:'dairy replacement formula' }],		description: 'For only $799 a month, Rihanna will personally examine your stool sample to produce a bespoke Go With Your Gut™ Oat Milk formula for your morning coffee.'},
		{id: 'fijiwater_venmo',						items: [{ type:'brand',	name:'Fiji Water' },						{ type:'brand',	name:'Venmo' },							{ type:'category',	name:'microtransaction for charity' }],		description: 'Free one cent microtransaction for the benefit of the disenfranchised tribes of Waulai (right next to Fiji).'},
		{id: 'flatearthsociety_pfchangs',			items: [{ type:'brand',	name:'The Flat Earth Society' },			{ type:'brand',	name:"P.F. Chang's" },					{ type:'category',	name:'lettuce cup' }],						description: 'Hoisin-sauce powered, self-inflatable lettuce cup for edge of the world expedition cruising.'},
		{id: 'foodnetwork_queenelizabeth',			items: [{ type:'brand',	name:'Food Network' },						{ type:'brand',	name:'Her Majesty Queen Elizabeth' },	{ type:'category',	name:'quail pie' }],						description: "Liz's signature Quail Pie, the original (Anglo Saxon) recipe."},
		{id: 'funkopop_virgingalactic',				items: [{ type:'brand',	name:'Funko Pop' },							{ type:'brand',	name:'Virgin Galactic' },				{ type:'category',	name:'vinyl figurine' }],					description: 'Action figure of Richard Branson shooting heroin for pharmacuetical purposes whilst orbiting Andromeda 3.'},
		{id: 'goldmansachs_supreme',				items: [{ type:'brand',	name:'Goldman Sachs' },						{ type:'brand',	name:'Supreme' },						{ type:'category',	name:'micro-apartment' }],					description: 'Live, work, play communal domeciles in sustainable next-gen style. Micro-financing available.'},
		{id: 'goodyear_laynebryant',				items: [{ type:'brand',	name:'The Goodyear Blimp' },				{ type:'brand',	name:'Layne Bryant' },					{ type:'category',	name:'yoga pants' }],						description: "Layne Bryant's Real Women Have Curves™ tights demonstrate their unlimited elasticity by stretching around the Goodyear Blimp in this viral stunt."},
		{id: 'goop_samsclub',						items: [{ type:'brand',	name:'Goop' },								{ type:'brand',	name:"Sam's Club" },					{ type:'category',	name:'cbd cream' }],						description: 'An industrial-sized vat of CBD infused topical cream for ultimate vaginal relaxation and self-care™ for only $3.99.'},
		{id: 'gordonramsey_hasbro',					items: [{ type:'brand',	name:'Gordon Ramsey' },						{ type:'brand',	name:'Hasbro' },						{ type:'category',	name:'easy bake oven' }],					description: 'Children can delve into the art of cooking while being "motivated" by custom admonishings recorded by Gordon Ramsey.'},
		{id: 'hims_mafia',							items: [{ type:'brand',	name:'Hims' },								{ type:'brand',	name:'The Mafia' },						{ type:'category',	name:'talcum powder' }],					description: "Keep you and your \"associates'\" stugots powdery fresh and virile when you're out running numbers."},
		{id: 'huffpost_tommybahama',				items: [{ type:'brand',	name:'Huff Post' },							{ type:'brand',	name:'Tommy Bahama' },					{ type:'category',	name:'travel guide' }],						description: 'A travel & leisure guidebook for lefty boomers into Thai sex cruising and biocontributive travel.'},
		{id: 'humanesociety_pier1imports',			items: [{ type:'brand',	name:'The Humane Society' },				{ type:'brand',	name:'Pier 1 Imports' },				{ type:'category',	name:'service animal carrier' }],			description: "Rattan service animal carrier crafted in a Tanzanian sweatshop by chimpanzees shift-supervised by Harambe's uncle."},
		{id: 'lelabo_shenyun',						items: [{ type:'brand',	name:'LeLabo' },							{ type:'brand',	name:'Shen Yun' },						{ type:'category',	name:'aromatherapy candle' }],				description: 'The essence of the Falong Gong, finally reduced to candle form.'},
		{id: 'levis_monsterenergy',					items: [{ type:'brand',	name:"Levi's" },							{ type:'brand',	name:'Monster Energy' },				{ type:'category',	name:'jeans' }],							description: 'A slim-fit, caffeinated-corduroy-cut for people into MMA.'},
		{id: 'levitra_livenation',					items: [{ type:'brand',	name:'Levitra' },							{ type:'brand',	name:'Live Nation' },					{ type:'category',	name:'nasal spray' }],						description: 'Fast-Acting vaso-dilator designed for powerful festival circuit erections.'},
		{id: 'meundies_scientology',				items: [{ type:'brand',	name:'MeUndies' },							{ type:'brand',	name:'The Church of Scientology' },		{ type:'category',	name:'tighty whities' }],					description: 'Matching Top Gun® tighty whities with Thetan repelling forcefield for your genitals.'},
		{id: 'oatly_yoohoo',						items: [{ type:'brand',	name:'Oatly'},								{ type:'brand',	name:'Yoo-Hoo'},						{ type:'category',	name:'chocolate oat milk'}],				description: 'Original High Low™ recipe ensures both brands reach new key demos of basic people, both rich and poor.'},
		{id: 'offwhite_turkishairlines',			items: [{ type:'brand',	name:'Off-White' },							{ type:'brand',	name:'Turkish Airlines' },				{ type:'category',	name:'seven ply toilet paper' }],			description: 'Airplane toilet paper sheets with "TOILET PAPER"™ wordmarque contemplating the nature of consumerism.'},
		{id: 'patagonia_raya',						items: [{ type:'brand',	name:'Patagonia' },							{ type:'brand',	name:'Raya' },							{ type:'category',	name:'compression socks' }],				description: 'Smartwool® Compression socks for medium-intensity hikes and collaborative fucking.'},
		{id: 'pgatour_pornhub',						items: [{ type:'brand',	name:'PGA Tour' },							{ type:'brand',	name:'Pornhub' },						{ type:'category',	name:'golf club cover' }],					description: '9 iron cover with built-in fleshlight.'},
		{id: 'ritualvitamins_velveetashells&cheese',items: [{ type:'brand',	name:'Ritual Vitamins' },					{ type:'brand',	name:'Velveeta Shells & Cheese' },		{ type:'category',	name:'pasta' }],							description: "Unique Pills n' Cheese™ homestyle comfort for SSRI amplification with added Vitamin D."},
		{id: 'stevemadden_unclebens',				items: [{ type:'brand',	name:'Steve Madden' },						{ type:'brand',	name:"Uncle Ben's" },					{ type:'category',	name:'form fitting boots' }],				description: 'Cognac suede addy boots with form fitting, limited-edition, sticky rice insoles for sophisticated style and carb-based comfort.'},
		{id: 'supreme_vaseline',					items: [{ type:'brand',	name:'Supreme' },							{ type:'brand',	name:'Vaseline' },						{ type:'category',	name:'lip balm' }],							description: "Limited Supreme red petroleum lip balm laced with Barbara Kruger's real stolen saliva for $8,500."},
		{id: 'teva_zoom',							items: [{ type:'brand',	name:'Teva' },								{ type:'brand',	name:'Zoom' },							{ type:'category',	name:'weighted blanket' }],					description: 'Teva Strap Technology™ enhances blanket tightness to prevent emotional breakdowns during your 17th quarantine Zoom meeting of the day.'},
		{id: 'tysonfury_zatarains',					items: [{ type:'brand',	name:'Tyson Fury' },						{ type:'brand',	name:"Zatarain's" },					{ type:'category',	name:'juul pod' }],							description: "Get whiff of the authentic gypsy life in a 75mg-strength spiced vape pod that'll knock you the fuck out."},
		{id: 'uniqlo_vicksvaporub',					items: [{ type:'brand',	name:'Uniqlo' },							{ type:'brand',	name:'Vicks VapoRub' },					{ type:'category',	name:'briefs' }],							description: 'Ball tingling eucalyptus Supima™ boxer briefs for hentai enthusiasts.'}

		// { id: '',									items: [{ type:'brand',	name:'' },									{ type:'brand', name:'' },								{ type:'category',	name:'' }],									description: ''}
	];

	let spinLines = ['duh', 'weeeeee!', 'rad', 'suck down that dizzy', 'rotations happening', 'to win!', 'yeah', 'like a dreidel', 'right round baby', 'to cure cancer', 'feels so gooood', 'deez nuts', 'with Oprah', 'for America', 'for the world', 'round dat dance pole', 'out in your car', 'your mom', 'big money big money', 'branding in progress', 'here we go!'];

	// mixed brands and categories
	// do they need to have a type defined?
	let allItems1;
	let allItems2;
	let allItems3;

	// the collab currently showing on the spinners. only on init?
	// rename? selected maybe? no?
	let currentCollab;

	// names of items in collab
	let itemName1;
	let itemName2;
	let itemName3;

	// index of each item in their respective allItemsX array
	// current items on spinners[?]
	// updated when spinning
	let n1indexCurrent;
	let n2indexCurrent;
	let n3indexCurrent;

	// stop on these items after spin. set by getCollabData()
	let n1indexNext;
	let n2indexNext;
	let n3indexNext;

	let collabDescription;

	var distToNextItem1;   // distance btw items in array
	var distToNextItem2;
	var distToNextItem3;

	var spinItemCount1 = 0;   // incremented by moveSpinners. set to 0 when done.
	var spinItemCount2 = 0;
	var spinItemCount3 = 0;


	var spinButtonEnabled = true;
	let spinnersActive;
	var theOutput = "click spin";
	// var theOutput = "collabgenerator.com";
	var theOutputAnim;
	let outputInterval;

	// set by updateWindowSize()
	var itemH;
	var spinInc;

	let onSpinner1 = [];
	let onSpinner2 = [];
	let onSpinner3 = [];

	// items offset pos on spinner
	let itemOffset = [2, 1, 0, -1];   // helps in loop in incY. will be more helpful if need to be longer

	// spinners
	let spinner1;
	let spinner2;
	let spinner3;

	var yPos1 = 0;   // this is the y pos of spinner, which contains items
	var yPos2 = 0;
	var yPos3 = 0;

	var yInterval1;
	var yInterval2;
	var yInterval3;


	function getRandomInt( max ) {
		return Math.floor(Math.random() * max);   // btw 0 and max-1
	}


	function spinStart() {
		// console.log('--- spinStart()');

		spinButtonEnabled = false;

		// theOutput = 'spinning... ('+spinLines[ getRandomInt(spinLines.length) ]+')';
		theOutput = 'spinning... ('+spinLines[ getRandomInt(spinLines.length) ]+')<br>';

		getCollabData('spin');

		if( n1indexNext > n1indexCurrent ) { distToNextItem1 = n1indexNext-n1indexCurrent; }
		else { distToNextItem1 = allItems1.length-n1indexCurrent + n1indexNext; }
		// if( distToNextItem1 < 10 ) { distToNextItem1 += allItems1.length; }
		// console.log('distToNextItem1: '+distToNextItem1);

		if( n2indexNext > n2indexCurrent ) { distToNextItem2 = n2indexNext-n2indexCurrent; }
		else { distToNextItem2 = allItems2.length-n2indexCurrent + n2indexNext; }
		// if( distToNextItem2 < 10 ) { distToNextItem2 += allItems2.length; }
		// console.log('distToNextItem2: '+distToNextItem2);

		if( n3indexNext > n3indexCurrent ) { distToNextItem3 = n3indexNext-n3indexCurrent; }
		else { distToNextItem3 = allItems3.length-n3indexCurrent + n3indexNext; }
		// if( distToNextItem3 < 10 ) { distToNextItem3 += allItems3.length; }
		// console.log('distToNextItem3: '+distToNextItem3);

// calc timing based on distToNextItem
// currently allItems1.length is 138 [will change]
// add extra fast option for longer than.. 100?
// or do something based on exact distance?

		let int1, int2, int3;

		if( distToNextItem1 < 11 ) int1 = 12;
		else if( distToNextItem1 > 99 ) int1 = 2;
		else int1 = 5;

		if( distToNextItem2 < 11 ) int2 = 16;
		else if( distToNextItem2 > 99 ) int2 = 3;
		else int2 = 6;

		if( distToNextItem3 < 11 ) int3 = 20;
		else if( distToNextItem3 > 99 ) int3 = 4;
		else int3 = 7;

		// int1 = distToNextItem1 < 10 ? 20 : 5;
		// int2 = distToNextItem2 < 10 ? 25 : 6;
		// int3 = distToNextItem3 < 10 ? 30 : 7;

		yInterval1 = setInterval( moveSpinners, int1, 1 );   // interval, spinner #
		yInterval2 = setInterval( moveSpinners, int2, 2 );
		yInterval3 = setInterval( moveSpinners, int3, 3 );   // set delay or diff speed for offset spin

		spinnersActive = 3;
	}


	function shuffle( array ) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));   // random index from 0 to i
			[array[i], array[j]] = [array[j], array[i]];
		}
	}


	function mixBrandsAndCategories() {
		// console.log('--- onMount, step 1: mixBrandsAndCategories()');
		// mix all items in allBrands and allCategories
		// this is just for placement of items of spinner wheels

		allItems1 = allBrands.concat(allCategories).concat(allNames);

		// console.log('allBrands.length: '+allBrands.length);
		// console.log('allCategories.length: '+allCategories.length);
//		console.log('allItems1.length: '+allItems1.length);

		// console.log('allItems[0]: '+allItems1[0].name );
//		console.log('shuffle array');
		shuffle(allItems1);
		// console.log('allItems[0]: '+allItems1[0].name );

		allItems2 = allBrands.concat(allCategories).concat(allNames);
		// allItems2 = allItems1;   // variables connected and ends up in same order even after shuffle
		shuffle(allItems2);
		allItems3 = allBrands.concat(allCategories).concat(allNames);
		// allItems3 = allItems2;
		shuffle(allItems3);
	}


	function getCollabData( mode ) {   // set current items (onMount), and get next items and description on spinStart
		// console.log('--- step 2: getCollabData('+mode+')');

		// let rInt = getRandomInt( allCollabs.length );
		// prevent 0/welcome from happening
		let rInt = getRandomInt( allCollabs.length-1 ) + 1;

		if( mode == 'init' ) rInt = 0;

		currentCollab = allCollabs[rInt];

		// get the 3 items from the collab
		let currentCollabItems = currentCollab.items;

		shuffle( currentCollabItems );

		itemName1 = currentCollabItems[0].name;
		itemName2 = currentCollabItems[1].name;
		itemName3 = currentCollabItems[2].name;

//		console.log('currentCollab.id: '+currentCollab.id);
		// console.log('itemNames: '+itemName1+', '+itemName2+', '+itemName3);

//		console.log( 'currentCollabItems: '+currentCollabItems );

		if( mode == 'init' ) {
			// int of each item in their respective allItemsX array
			let obj1 = allItems1.find(o => o.name === itemName1);
			n1indexCurrent = allItems1.indexOf(obj1);
			// console.log('n1indexCurrent: '+n1indexCurrent);

			let obj2 = allItems2.find(o => o.name === itemName2);
			n2indexCurrent = allItems2.indexOf(obj2);
			// console.log('n2indexCurrent: '+n2indexCurrent);

			let obj3 = allItems3.find(o => o.name === itemName3);
			n3indexCurrent = allItems3.indexOf(obj3);
			// console.log('n3indexCurrent: '+n3indexCurrent);

			// nXindexCurrent are incremented until they become same as nXindexNext by moveSpinners()
		}
		else {   // mode == 'spin'
			let obj1 = allItems1.find(o => o.name === itemName1);
			n1indexNext = allItems1.indexOf(obj1);
			// console.log('n1indexNext: '+n1indexNext);

			let obj2 = allItems2.find(o => o.name === itemName2);
			n2indexNext = allItems2.indexOf(obj2);
			// console.log('n2indexNext: '+n2indexNext);

			let obj3 = allItems3.find(o => o.name === itemName3);
			n3indexNext = allItems3.indexOf(obj3);
			// console.log('n3indexNext: '+n3indexNext);

			collabDescription = currentCollab.description;
//			console.log('collabDescription: '+collabDescription);
		}
	}


	function updateSpinnerItems( spinner ) {   // called by interval
		// update all visible items on spinners
		if( spinner == 1 ) {
			for( var i=0; i<itemOffset.length; i++ ) {   // itemOffset has length of number of items visible on the spinner
				var offsetItem = n1indexCurrent + itemOffset[i];
				if( offsetItem > allItems1.length-1 ) {
					offsetItem -= allItems1.length;
				}
				else if( offsetItem < 0 ) {
					offsetItem = allItems1.length+offsetItem;
				}
				onSpinner1[i] = { name: allItems1[offsetItem].name, img: allItems1[offsetItem].img };   // img null for categories atm
			}
		}
		else if( spinner == 2 ) {
			for( var i=0; i<itemOffset.length; i++ ) {
				var offsetItem = n2indexCurrent + itemOffset[i];
				if( offsetItem > allItems2.length-1 ) {
					offsetItem -= allItems2.length;
				}
				else if( offsetItem < 0 ) {
					offsetItem = allItems2.length+offsetItem;
				}
				onSpinner2[i] = { name: allItems2[offsetItem].name, img: allItems2[offsetItem].img };
			}
		}
		else if( spinner == 3 ) {
			for( var i=0; i<itemOffset.length; i++ ) {
				var offsetItem = n3indexCurrent + itemOffset[i];
				if( offsetItem > allItems3.length-1 ) {
					offsetItem -= allItems3.length;
				}
				else if( offsetItem < 0 ) {
					offsetItem = allItems3.length+offsetItem;
				}
				onSpinner3[i] = { name: allItems3[offsetItem].name, img: allItems3[offsetItem].img };
			}
		}
	}


	function moveSpinners( spinner ) {
		if( spinner == 1 ) {
			if( yPos1 < itemH ) { yPos1 += spinInc; }
			else {
				yPos1 = 0;
				spinItemCount1++;
				n1indexCurrent < allItems1.length-1 ? n1indexCurrent++ : n1indexCurrent = 0;
				updateSpinnerItems(1);
				if( spinItemCount1 == distToNextItem1 ) {
					clearInterval(yInterval1);
					spinItemCount1 = 0;
					spinnerStopped();
				}
			}
			spinner1.style.setProperty('top', yPos1+'px');
		}
		else if( spinner == 2 ) {
			if( yPos2 < itemH ) { yPos2 += spinInc; }
			else {
				yPos2 = 0;
				spinItemCount2++;
				n2indexCurrent < allItems2.length-1 ? n2indexCurrent++ : n2indexCurrent = 0;
				updateSpinnerItems(2);
				if( spinItemCount2 == distToNextItem2 ) {
					clearInterval(yInterval2);
					spinItemCount2 = 0;
					spinnerStopped();
				}
			}
			spinner2.style.setProperty('top', yPos2+'px');
		}
		else if( spinner == 3 ) {
			if( yPos3 < itemH ) { yPos3 += spinInc; }
			else {
				yPos3 = 0;
				spinItemCount3++;
				n3indexCurrent < allItems3.length-1 ? n3indexCurrent++ : n3indexCurrent = 0;
				updateSpinnerItems(3);
				if( spinItemCount3 == distToNextItem3 ) {
					clearInterval(yInterval3);
					spinItemCount3 = 0;
					spinnerStopped();
				}
			}
			spinner3.style.setProperty('top', yPos3+'px');
		}
	}


	function spinnerStopped() {
		spinnersActive--;
		if( !spinnersActive ) {
			theOutputAnim = collabDescription;
			theOutput = '';
			// set interval for outputAnim();
			outputInterval = setInterval( outputAnim, 20 );
		}
	}

	function outputAnim() {
//		console.log('outputAnim()');
		// char by char anim for output
		// if( theOutputAnim.length < theOutput.length ) {
		if( theOutput.length < theOutputAnim.length ) {
			// base on length of Anim to avoid extra counter variable?
			theOutput += theOutputAnim.substr( theOutput.length, 1 );
		}
		else {
			clearInterval(outputInterval);
			spinButtonEnabled = true;
		}
	}


	function updateWindowSize() {
		// console.log('updateWindowSize()');
		windowWidth = window.innerWidth;
		if( windowWidth < breakpoint.sm ) cgbp = 'xs';
		else if( windowWidth < breakpoint.md ) cgbp = 'sm';
		else if( windowWidth < breakpoint.lg ) cgbp = 'md';
		else if( windowWidth < breakpoint.xl ) cgbp = 'lg';
		else cgbp = 'xl';
		// console.log('updateWindowSize('+cgbp+')');

		if( cgbp == 'xs' ){
			itemH = 58;   // 15x4=60. -spinInc. can also do this in moveSpinners
			spinInc = 6;   // /10
		}
		else if( cgbp == 'sm' ) {
			itemH = 116;   // 30x4=120 -spinInc
			spinInc = 12;   // /10
		}
		else if( cgbp == 'md' ) {
			itemH = 128;   // 33x4=132 -spinInc
			spinInc = 13.2;   // 10
		}
		else {
			itemH = 140;   // 36x4=144 -spinInc
			spinInc = 14.4;   // 10
		}
	}


	onMount( async () => {
		// console.log('onMount');

		updateWindowSize();
		window.addEventListener('resize', updateWindowSize);

		spinner1 = document.getElementById('spinner1');
		spinner2 = document.getElementById('spinner2');
		spinner3 = document.getElementById('spinner3');

		mixBrandsAndCategories();

		getCollabData('init');

		updateSpinnerItems(1);
		updateSpinnerItems(2);
		updateSpinnerItems(3);
	});

	onDestroy( () => {
		return () => {
			window.removeEventListener('resize', updateWindowSize);
		}
	});
</script>


<main>
	<section class="mx-auto w-80 sm:w-160 md:w-175 lg:w-190 text-white flex-grow">
		<div class="mx-1-1/2  sm:mx-3  py-8">
			<img src="img/logo-CollabGenerator.png" alt="Collab Generator" class="mx-auto h-10 sm:h-16">
		</div>
		<div class="mx-1-1/2 sm:mx-3  py-1 sm:py-2  h-39  sm:h-78  md:h-87  lg:h-96  bg-black">

			<div class="px-1 sm:px-2  h-37 sm:h-74  md:h-83  lg:h-92  overflow-hidden">

				<div id="spinner1" class="float-left w-1/3  -mt-19  sm:-mt-38  md:-mt-41  lg:-mt-44  relative  bg-white">
					{#each onSpinner1 as item, i}
						<div class="h-15 sm:h-30 md:h-33 lg:h-36 bg-cover bg-center text-center" style="background-image: url('img/{item.img}')"></div>
					{/each}
				</div>
				<div id="spinner2" class="float-left w-1/3  -mt-19  sm:-mt-38  md:-mt-41  lg:-mt-44  relative  bg-white">
					{#each onSpinner2 as item, i}
						<div class="h-15 sm:h-30 md:h-33 lg:h-36 bg-cover bg-center text-center" style="background-image: url('img/{item.img}')"></div>
					{/each}
				</div>
				<div id="spinner3" class="float-left w-1/3  -mt-19  sm:-mt-38  md:-mt-41  lg:-mt-44  relative  bg-white">
					{#each onSpinner3 as item, i}
						<div class="h-15 sm:h-30 md:h-33 lg:h-36 bg-cover bg-center text-center" style="background-image: url('img/{item.img}')"></div>
					{/each}
				</div>

				<div class="absolute">
					<img src="img/gradient_top.png" alt="" class="w-78 sm:w-150 md:w-165 lg:w-180 h-10 sm:h-20 md:h-23 lg:h-26">

					{#if !spinnersActive}
						<div class="w-80 -mx-1 sm:-mx-2 sm:w-154 md:w-169 lg:w-184 h-17 sm:h-34 md:h-37 lg:h-40  border-solid border-green-400 border-4 sm:border-8 rounded sm:rounded-lg">
							<img src="img/edges.png" alt="" class="h-15 sm:h-30 md:h-33 lg:h-36 mx-auto absolute">
							<img src="img/xx.png" alt="" class="h-15 sm:h-30 md:h-33 lg:h-36 mx-auto">
						</div>
					{:else}
						<div class="w-80 -mx-1 sm:-mx-2 sm:w-154 md:w-169 lg:w-184 h-17 sm:h-34 md:h-37 lg:h-40  border-solid  border-yellow-300  border-4 sm:border-8 rounded sm:rounded-lg">
							<img src="img/edges.png" alt="" class="h-15 sm:h-30 md:h-33 lg:h-36 mx-auto">
						</div>
					{/if}

					<img src="img/gradient_bottom.png" alt="" class="w-78 sm:w-150 md:w-165 lg:w-180 h-10 sm:h-20 md:h-23 lg:h-26">
				</div>

			</div>

		</div>

		<!-- output -->
		<div class="mx-1-1/2 sm:mx-3  px-5 sm:px-10  py-5 h-36 sm:h-34 text-sm sm:text-lg text-center text-yellow-300 bg-black">
			<!-- html fixes issue on mobile w. text not being removed -->
			{@html theOutput}
		</div>

		<!-- controls -->
		<div class="mx-1-1/2 sm:mx-3  px-1 sm:px-2  text-xs  bg-black">
			<div class="hidden md:block md:w-1/3 float-left h-20">
			</div>
			<div class="w-full md:w-1/3 pb-8 sm:pb-12 md:px-2 float-left">

				<button on:click={spinButtonEnabled?spinStart:null} class='h-14 sm:h-20 w-full bg-fuchsia-500 hover:bg-fuchsia-600 active:bg-fuchsia-600 focus:outline-none block rounded sm:rounded-lg'>
					<img src="img/spin.png" alt="SPIN" class="h-6 sm:h-10 mx-auto">
				</button>

			</div>
			<div class="hidden md:block md:w-1/3 float-left h-20">
			</div>
		</div>
	</section>

	<!-- credits centered w. CTA -->
	<div class="mx-auto w-80 sm:w-160 md:w-175 lg:w-190 px-2-1/2 sm:px-5 pt-8 pb-4 text-sm text-gray-700 text-center clear-both">

		We've reached peak brand collab.<br>
		It's gotten so silly somebody had to parody it.
		
		<br><br>

		Copy by <a href="https://petermegler.com/" target="_blank">Peter</a>,
		Isaac and <a href="https://twitter.com/Callhoun" target="_blank">Chris</a>.
		<br>
		Code by <a href="https://vsxop.com">Bjorn</a>.
	</div>
</main>
