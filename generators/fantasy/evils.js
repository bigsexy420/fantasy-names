function generator$fantasy$evils(type) {
	var namesMale = ["Ashton", "Chaol", "Arthur", "Crowley", "Sepitus", "Sceledrus", "Anthrax", "Caecilius", "Quintus", "Grumio", "Ecthrois", "Zegrath", "Vorkalth", "Oklarth", "Wendrake", "Venkalth", "Avandth", "Iluz", "Eukithor", "Bludwan", "Adoranz", "Adaranth", "Abraham", "Acheron", "Adam", "Alabaster", "Alder", "Alex", "Alistair", "Amada", "Amarant", "Amaranth", "Antone", "Arc", "Arch", "Archer", "Argent", "Aries", "Ark", "Arlin", "Artemis", "Asema", "Ashes", "Auron", "Autar", "Axel", "Babbage", "Balo", "Balsam", "Balthier", "Bane", "Bartholomew", "Bartram", "Belzebob", "Blade", "Blight", "Brink", "Bryce", "Butler", "Caesar", "Camus", "Carmine", "Chadli", "Chalice", "Chandler", "Chaos", "Charles", "Chrom", "Cidolfus", "Cloven", "Colton", "Crowley", "Cyran", "Damien", "Damon", "Dante", "Dario", "Darren", "Darth", "Davon", "Demien", "Desmond", "Devdan", "Dexter", "Dhampir", "Dominic", "Dommik", "Drace", "Drachen", "Draegan", "Drake", "Drakkar", "Draven", "Dred", "Dreven", "Driscoll", "Duke", "Duradel", "Edge", "Eike", "Eldon", "Eldritch", "Elliot", "Emmit", "Enigma", "Eoin", "Ephraim", "Ethel", "Eulisses", "Everit", "Fane", "Fark", "Finch", "Firion", "Forrest", "Franz", "Frederik", "Freed", "Fromir", "Gabranth", "Gabriel", "Gail", "Gastly", "Gattas", "Glacier", "Gloom", "Gnash", "Godfrey", "Gossom", "Gotham", "Grail", "Granger", "Granite", "Grendel", "Griffin", "Grim", "Grissom", "Hades", "Hamlet", "Hanzel", "Heinrik", "Heskel", "Hitch", "Hogan", "Holmes", "Holstein", "Hunter", "Icas", "Ike", "Incubus", "Inigo", "Irvine", "Isaac", "Isaiah", "Jacques", "Jasper", "Jayden", "Jaymes", "Jeronimo", "Jett", "Jinx", "Joshua", "Jude", "Kaiser", "Kapral", "Karayan", "Karn", "Karver", "Keetes", "Kellam", "Kieran", "Kirnon", "Klark", "Klaus", "Klyn", "Kragen", "Labyrinth", "Laguna", "Landis", "Larc", "Larsa", "Lauden", "Law", "Layre", "Lazarus", "Lennix", "Leviathan", "Lexx", "Lincoln", "Link", "Loki", "Loom", "Lore", "Louis", "Lucifer", "Lucius", "Luke", "Luther", "Lux", "Lynk", "Lynx", "Mace", "Maggard", "Maggart", "Marth", "Mathian", "Maxim", "Mazus", "Mitch", "Mitrik", "Moldark", "Morden", "Morren", "Morrow", "Mortas", "Nadir", "Nash", "Nayte", "Nealuchi", "Nebula", "Neclord", "Nicholai", "Nicolas", "Nictis", "Nightshade", "Noire", "Norman", "Norrix", "Obsidian", "Omar", "Omen", "Orfeo", "Otto", "Panther", "Parch", "Parrish", "Payne", "Peregrine", "Petrik", "Prince", "Pritchard", "Prysm", "Puck", "Quint", "Quway", "Quye", "Ragnor", "Rakshasas", "Ramin", "Rassler", "Rave", "Raven", "Redcap", "Reks", "Requiem", "Rexx", "Reyson", "Rhazien", "Rhys", "Richard", "Richmond", "Ridley", "Riskel", "Rogue", "Romulus", "Ross", "Rumlar", "Sabre", "Salem", "Salvodor", "Salvodore", "Salvotor", "Salvotore", "Samuel", "Satan", "Savant", "Sax", "Scias", "Seifer", "Semias", "Sephiran", "Seskel", "Seth", "Seymour", "Shadow", "Shayde", "Sherlock", "Sid", "Sisk", "Sliske", "Smoky", "Soran", "Soren", "Steele", "Stone", "Storm", "Stryker", "Synth", "Tack", "Talon", "Tempest", "Theodor", "Theodore", "Theodoric", "Thor", "Thorne", "Thunder", "Thyme", "Tidus", "Treznor", "Tristan", "Trixter", "Uberto", "Ulrik", "Umbri", "Upir", "Vail", "Valhalla", "Vance", "Vaughn", "Vayne", "Vesh", "Vexacion", "Vexx", "Victor", "Viktor", "Virion", "Viscardi", "Vome", "Voss", "Vossler", "Weiss", "Wendell", "Winmore", "Wolf", "Wright", "Xander", "Xensor", "Xix", "Yao", "Ymo", "Yulis", "Zadicus", "Zadimus", "Zaff", "Zain", "Zaine", "Zamza", "Zander", "Zane", "Zaros", "Zayin", "Zayn", "Zayne", "Zeddicus", "Zeidan", "Zeke", "Zelgius", "Zell", "Zelroth", "Zen", "Zeph", "Zero", "Zindo", "Zorander", "Zul", "Zulu", "Zyler"];
	var namesFamily = ["Kobe", "Barkridge", "Skinner", "Serphent", "Caligari", "Bloodworth", "Vonner", "Morelli", "Sharpe", "Sangrey", "Lobo", "Norwood", "Christanti", "Mock", "Le Torneau", "Murik", "Le Doux", "La Croix", "Drach", "Orlando", "Krauss", "Vossen", "Blackman", "Vandran", "Drabek", "Cross", "Von Stein", "Lobo", "Shade", "Crane", "Bloodgood", "Roseberg", "Le Blank", "Borges", "Morgan", "Delacroix", "Cane", "Church", "Villalobos", "Vigil", "Lestat", "Dupree", "Maganti", "Devonshire", "Le Rouge", "Victor", "Delarosa", "Breedlove", "Moriarty", "Ash", "Talbot", "Creighton", "Christian", "Barlow", "Carpathia", "Addington", "Aimes", "Angelsin", "Argent", "Aura", "Autumn", "Barclay", "Black", "Blackwood", "Blankley", "Brack", "Brevil", "Calarook", "Chainsaw", "Chalice", "Cloven", "Craft", "Crane", "Crimson", "Cromwell", "Crowe", "Crypt", "Darkmore", "Deamonne", "Denholm", "Depraysie", "Diablo", "Diablos", "Digby", "Dread", "Dred", "Duke", "Dukes", "Ebonywood", "Everbleed", "Evilian", "Fade", "Fadington", "Fang", "Frost", "Geulimja", "Gnash", "Graeme", "Grail", "Graves", "Grim", "Grimm", "Grimsbane", "Grove", "Hallewell", "Hart", "Helion", "Heliot", "Highmore", "Hook", "Howler", "Hunt", "Interfector", "Jinx", "Jones", "Kane", "Keeling", "Killian", "Killoran", "Knotley", "Labyrinth", "Latimer", "Lovelace", "Lynx", "Magnus", "Maleficum", "Mallor", "Malum", "Manglyeong", "Marth", "Monroe", "Moonfall", "Morgan", "Mortem", "Natas", "Naxxremis", "Nox", "Onyx", "Panther", "Payne", "Periculum", "Pickerin", "Quinn", "Rathmore", "Razor", "Redwood", "Rex", "Riddle", "Ripper", "Sanguine", "Scarletwound", "Sephiran", "Shackleton", "Shade", "Shadowend", "Shadowmend", "Shadowsoul", "Shadowwalker", "Snow", "Soulton", "Steros", "Stone", "Storm", "Strain", "Tempest", "Tenebris", "Thornheart", "Thornton", "Tombend", "Trevil", "Trevils", "Umbra", "Vexx", "Vixen", "Void", "Whisper", "White", "Whitmore", "Willow", "Winter", "Wolf", "Wolfmoon", "Wood", "Woods", "Wraith", "Wright", "Wyrm", "Zayne", "Zorander", "Zul"];
	var namesFemale = ["Galexialyn", "Crisenth", "Avandth", "Iluz", "Yizla", "Adrienne", "Agnes", "Almedha", "Amelia", "Ameria", "Angeline", "Annallee", "Armenia", "Arora", "Asema", "Ashen", "Ashera", "Aswang", "Athena", "Aura", "Autumn", "Ayda", "Beatrix", "Belinda", "Belladonna", "Belle", "Brie", "Bruxa", "Caeda", "Calamity", "Carmilla", "Carmina", "Cassara", "Cat", "Cellica", "Chalice", "Chein", "Cherry", "Churel", "Cinder", "Clarita", "Crimson", "Cyan", "Damsel", "Davon", "Dementia", "Demonia", "Diadora", "Diamanda", "Dream", "Ebony", "Echo", "Elaine", "Eldia", "Eleanore", "Elegia", "Elenor", "Elissa", "Ellena", "Elphina", "Elza", "Emilia", "Emily", "Emma", "Entropy", "Essence", "Estella", "Eternity", "Eusmil", "Fatima", "Floris", "Frita", "Garnet", "Gem", "Genevere", "Glimmer", "Gossamer", "Grimina", "Gwin", "Habitha", "Haera", "Harley", "Harlot", "Hazelmere", "Hebkya", "Hegna", "Herma", "Hortensia", "Ilene", "Ilta", "Imeena", "Imperia", "Iona", "Ivory", "Jayde", "Jezebel", "Jillia", "Jocelyn", "Julienne", "Juniper", "Kaige", "Kali", "Kallee", "Kandyl", "Karlene", "Karmin", "Katia", "Katreena", "Kenia", "Kindle", "Lace", "Lament", "Leeta", "Leona", "Leora", "Lilith", "Lillith", "Lirit", "Lithia", "Lorelei", "Loren", "Luce", "Lucia", "Lucretia", "Lulu", "Luna", "Lusha", "Lycia", "Lyndis", "Lyra", "Magwina", "Maleficent", "Marcia", "Margorie", "Maxine", "Mayze", "Memory", "Mercy", "Mirage", "Misericordia", "Mist", "Mizette", "Moon", "Moonlight", "Morrin", "Morticia", "Mystery", "Narween", "Neira", "Nereza", "Nifsara", "Noira", "Norway", "Nylora", "Oma", "Opal", "Ophelia", "Pamela", "Pandora", "Pearl", "Persephone", "Porcelain", "Princessa", "Quintessa", "Quistis", "Quota", "Qutie", "Rain", "Ramona", "Rapture", "Raura", "Riley", "Romani", "Rosary", "Roshia", "Rubia", "Sable", "Samantha", "Sana", "Sarah", "Satin", "Savina", "Scarlet", "Scarlett", "Secret", "Selena", "Senka", "Seraphim", "Seren", "Servillah", "Severa", "Severina", "Siouxsie", "Sisuca", "Strawberri", "Sully", "Suspiria", "Sybil", "Tabitha", "Theda", "Thessalia", "Thistle", "Trik", "Twilight", "Ukara", "Ulsa", "Umona", "Upiorzyca", "Ursula", "Valaine", "Velorina", "Velvet", "Veronika", "Vervain", "Viessa", "Viktoria", "Violet", "Whisper", "Willow", "Winona", "Wish", "Wysteria", "Xenia", "Xoxo", "Xyla", "Yellow", "Yoko", "Yureka", "Zada", "Zaphara", "Zeldalia", "Zen", "Zephyr", "Zillah", "Zima", "Zofia", "Zola", "Zolona", "Zunda"];

	var names1 = type === 1 ? namesFemale : namesMale;

	i = Math.floor(Math.random() * 10); {
		rnd0 = Math.floor(Math.random() * names1.length);
		rnd1 = Math.floor(Math.random() * namesFamily.length);
		names = names1[rnd0] + " " + namesFamily[rnd1];
		return names;
	}

}