/**
 * Rainbow Six Siege Operator Picker - Data
 * This file contains all the data for operators and strategies
 */

// Operator class equivalent
class Operator {
    constructor(name, side, specialAbility, speed, armor, organization = "", birthplace = "", biography = "", imagePath = "") {
        this.name = name;
        this.side = side;
        this.specialAbility = specialAbility;
        this.speed = speed;
        this.armor = armor;
        this.organization = organization;
        this.birthplace = birthplace;
        this.biography = biography;

        // If no image path is provided, generate one based on the operator's name and side
        if (!imagePath) {
            const folder = side === "Attacker" ? "attackers" : "defenders";
            this.imagePath = `images/${folder}/${name.toLowerCase().replace(/\s+/g, '_')}.png`;
        } else {
            this.imagePath = imagePath;
        }
    }
}

// Strategy class equivalent
class Strategy {
    constructor(name, description, side) {
        this.name = name;
        this.description = description;
        this.side = side;
    }
}

// SiegePicker class equivalent
class SiegePicker {
    constructor() {
        this.operators = [];
        this.strategies = [];
        this.initializeOperators();
        this.initializeStrategies();
    }

    initializeOperators() {
        // Attackers
        this.operators.push(new Operator("Striker", "Attacker", "Gadget Kit", 2, 2, "Rainbow", "Global", "Customizable recruit-style defender with access to a wide selection of gadgets."));
        this.operators.push(new Operator("Sledge", "Attacker", "Tactical Breaching Hammer", 2, 2, "SAS", "UK (Scotland)", "Explosive force with his hammer, ideal for creating paths and destroying gadgets silently."));
        this.operators.push(new Operator("Thatcher", "Attacker", "EMP Grenade", 2, 2, "SAS", "UK", "EMP specialist, vital support operator who neutralizes defender electronics before a push."));
        this.operators.push(new Operator("Ash", "Attacker", "Breaching Round", 3, 1, "FBI SWAT / Israeli Defense Forces", "USA / Israel", "High-speed entry expert with ranged breaching rounds—emphasizes swift strikes over slow breakdowns."));
        this.operators.push(new Operator("Thermite", "Attacker", "Exothermic Charge", 2, 2, "FBI SWAT", "USA", "Hard-breach pioneer; his exothermic charges melt through reinforced walls to open strategic entry points."));
        this.operators.push(new Operator("Twitch", "Attacker", "Shock Drone", 2, 2, "French GIGN", "France", 'Anti-gadget specialist using shock drones to disable traps and cameras from afar.'));
        this.operators.push(new Operator("Montagne", "Attacker", "Extendable Shield", 1, 3, "GIGN", "France", "Walking tank—his extendable shield makes him a human fortress leading charges. There's little threat he can't soak up."));
        this.operators.push(new Operator("Glaz", "Attacker", "Flip Sight", 2, 2, "Spetsnaz", "Russia", "A cold, meticulous sniper specializing in long-range reconnaissance with his HDS scope—ideal for sighting through smoke or over ranges."));
        this.operators.push(new Operator("Fuze", "Attacker", "Cluster Charge", 1, 3, "Spetsnaz", "Russia", "Explosives expert known for rugged reliability under fire. Deploys cluster charges that flush defenders from cover."));
        this.operators.push(new Operator("Blitz", "Attacker", "Flash Shield", 2, 2, "GSG-9", "Germany", "Close-quarters shield operator with a flash shield to blind defenders at chokepoints. "));
        this.operators.push(new Operator("IQ", "Attacker", "Electronics Detector", 3, 1, "German GSG-9", "Germany", "Tech specialist using her scanner to locate enemy electronics—great for intel gathering."));
        this.operators.push(new Operator("Buck", "Attacker", "Skeleton Key", 2, 2, "JTF2", "Canada", "Versatile entry fragger with underbarrel shotgun—a unique soft breacher."));
        this.operators.push(new Operator("Blackbeard", "Attacker", "Rifle Shield", 2, 2, "Navy SEAL", "USA", "Protective marksman with a rifle-mounted shield—built for aggressive peeking."));
        this.operators.push(new Operator("Capitao", "Attacker", "Tactical Crossbow", 3, 1, "BOPE", "Brazil", "Tactical crossbow user applying fire and smoke tactically—excellent for area denial/control."));
        this.operators.push(new Operator("Hibana", "Attacker", "X-KAIROS", 3, 1, "SAT", "Japan", "Long-range hard breacher; her X-KAIROS pellets open reinforced barriers with precision."));
        this.operators.push(new Operator("Jackal", "Attacker", "Eyenox Model III", 2, 2, "GEO", "Spain (Ceuta)", "Mobile tracker who uses footstep scanning to hunt roamers."));
        this.operators.push(new Operator("Ying", "Attacker", "Candela", 2, 2, "SDU", "Hong Kong (China)", "Entry fragger with Lumen clusters—throws dazzling flashes to blind defenders."));
        this.operators.push(new Operator("Zofia", "Attacker", "KS79 Lifeline", 2, 2, "GROM", "Poland", "Resilient dual fragger/gadget disabler with impact and concussion grenades."));
        this.operators.push(new Operator("Dokkaebi", "Attacker", "Logic Bomb", 2, 2, "707th SMB", "South Korea", "Tech infiltrator who uses phone hacking to expose defender positions and cameras."));
        this.operators.push(new Operator("Lion", "Attacker", "EE-ONE-D", 2, 2, "GIGN", "France", "Aerial seeker—his drone reveals moving defenders for synchronized takedowns."));
        this.operators.push(new Operator("Finka", "Attacker", "Adrenal Surge", 2, 2, "Spetsnaz", "Russia", "Field medic utilizing nanobots for team-wide boosts and revives—great for aggressive pushes."));
        this.operators.push(new Operator("Maverick", "Attacker", "Breaching Torch", 3, 1, "Delta Force", "USA", "Hard-breacher expert with his stealth blowtorch—creates precise holes in reinforced surfaces."));
        this.operators.push(new Operator("Nomad", "Attacker", "Airjab", 2, 2, "GIGR", "Morocco", "Ranged area controller—disrupts defender positioning with airjab traps."));
        this.operators.push(new Operator("Gridlock", "Attacker", "Trax Stingers", 1, 3, "SASR", "Australia", "Zone controller using sticky Trax Stingers to slow and damage through choke points."));
        this.operators.push(new Operator("Nøkk", "Attacker", "HEL Presence Reduction", 2, 2, "Jægerkorpset", "Denmark", "Stealth operator cloaked from cameras and drones—silent and lethal."));
        this.operators.push(new Operator("Amaru", "Attacker", "Garra Hook", 2, 2, "APCA", "Peru", "Vertical seamer with grappling hook—exposes unexpected angles by climbing."));
        this.operators.push(new Operator("Kali", "Attacker", "LV Explosive Lance", 2, 2, "Nighthaven", "India", "Anti-gadget sniper who also breaches with her LV Explosive Lance."));
        this.operators.push(new Operator("Iana", "Attacker", "Gemini Replicator", 2, 2, "Dutch Army", "Netherlands", "Holo-doppelgänger expert—confuses defenders with replicator drones."));
        this.operators.push(new Operator("Ace", "Attacker", "SELMA Aqua Breacher", 2, 2, "Nighthaven", "Norway", "Charged breacher—throws powerful SELMA water charges through reinforced walls."));
        this.operators.push(new Operator("Zero", "Attacker", "Argus Launcher", 3, 1, "Nighthaven / Third Echelon", "USA", "From Splinter Cell—launches Argus cameras for intel-gathering through walls."));
        this.operators.push(new Operator("Flores", "Attacker", "RCE-Ratero Drones", 2, 2, "Nighthaven", "Argentina", "Ex-thief turned asset; uses explosive drones for flexible breaching and chaos."));
        this.operators.push(new Operator("Osa", "Attacker", "Talon-8 Clear Shield", 1, 3, "BH / Nighthaven", "Croatia", "Shield operator with deployable bulletproof barriers—marks new utility class."));
        this.operators.push(new Operator("Sens", "Attacker", "R.O.U. Projector System", 3, 1, "Nighthaven", "Belgium", "Projector specialist—deploys walls of light to block vision and lasers."));
        this.operators.push(new Operator("Grim", "Attacker", "Kawan Hive Launcher", 3, 1, "Nighthaven", "Singapore", "Hive specialist—spawns tracking bee swarms to harass defenders."));
        this.operators.push(new Operator("Brava", "Attacker", "Kludge Drone", 3, 1, "Nighthaven", "Brazil", "Drone hacker—disrupts defender tech like shields, cams, and traps."));
        this.operators.push(new Operator("Ram", "Attacker", "BU-GI Auto Breacher", 1, 3, "Nighthaven", "South Korea", "Bulldozer breacher—clears barricades and walls with his mini-ram."));
        this.operators.push(new Operator("Deimos", "Attacker", "Deathmark Tracker", 2, 2, "Nighthaven", "USA", "Hunter-drone expert—tags defenders with sonar for team tracking."));
        this.operators.push(new Operator("Rauora", "Attacker", "DOM Camouflage Panels", 2, 2, "Nighthaven", "New Zealand", "Mobile cover operator—deploys portable panels for tactical repositioning."));

        // Defenders
        this.operators.push(new Operator("Sentry", "Defender", "Gadget Kit", 2, 2, "Rainbow", "Global", "Customizable recruit-style defender with access to a wide selection of gadgets."));
        this.operators.push(new Operator("Smoke", "Defender", "Remote Gas Grenade", 2, 2, "SAS", "UK", "Area denial operator using remote gas grenades to control space."));
        this.operators.push(new Operator("Mute", "Defender", "Signal Disruptor", 2, 2, "SAS", "UK", "Anti-drone specialist; deploys jammers that disable electronic devices."));
        this.operators.push(new Operator("Castle", "Defender", "Armor Panel", 2, 2, "FBI SWAT", "USA", "Fortification specialist; deploys bulletproof barricades to lock down routes."));
        this.operators.push(new Operator("Pulse", "Defender", "Heartbeat Sensor", 3, 1, "FBI SWAT", "USA", "Intel gatherer using heartbeat sensor to locate enemies through walls."));
        this.operators.push(new Operator("Doc", "Defender", "Stim Pistol", 1, 3, "GIGN", "France", "Team medic; revives or heals teammates (and himself) with his Stim Pistol."));
        this.operators.push(new Operator("Rook", "Defender", "Armor Pack", 1, 3, "GIGN", "France", "Defensive support; provides armor plates to teammates, increasing survivability."));
        this.operators.push(new Operator("Kapkan", "Defender", "Entry Denial Device", 2, 2, "Spetsnaz", "Russia", "Trapper who places explosive devices on doorframes and windows."));
        this.operators.push(new Operator("Tachanka", "Defender", "Mounted LMG", 1, 3, "Spetsnaz", "Russia", "Heavy weapons specialist with a deployable LMG turret."));
        this.operators.push(new Operator("Jäger", "Defender", "Active Defense System", 3, 1, "GSG-9", "Germany", "Anti-projectile defender who places ADS to intercept grenades."));
        this.operators.push(new Operator("Bandit", "Defender", "Shock Wire", 3, 1, "GSG-9", "Germany", "Electrifies reinforced walls and barbed wire to deny breaching and entry."));
        this.operators.push(new Operator("Frost", "Defender", "Welcome Mat", 2, 2, "JTF2", "Canada", "Trapper who places mechanical leg-hold traps near entry points."));
        this.operators.push(new Operator("Valkyrie", "Defender", "Black Eye", 2, 2, "Navy SEAL", "USA", "Intel gatherer; deploys throwable Black Eye cameras for extra vision."));
        this.operators.push(new Operator("Caveira", "Defender", "Silent Step", 3, 1, "BOPE", "Brazil", "Silent roamer; interrogates downed enemies to reveal enemy locations."));
        this.operators.push(new Operator("Echo", "Defender", "Yokai", 1, 3, "SAT", "Japan", "Drone controller; disrupts attackers with concussive Yokai drones."));
        this.operators.push(new Operator("Mira", "Defender", "Black Mirror", 1, 3, "GEO", "Spain", "Deploys Black Mirror one-way bulletproof windows to defend high-value zones."));
        this.operators.push(new Operator("Lesion", "Defender", "Gu Mine", 2, 2, "SDU", "Hong Kong", "Deploys GU mines that poison and slow attackers, revealing their location."));
        this.operators.push(new Operator("Ela", "Defender", "Grzmot Mine", 3, 1, "GROM", "Poland", "Throws Grzmot concussion mines that disorient attackers."));
        this.operators.push(new Operator("Vigil", "Defender", "ERC-7", 3, 1, "707th SMB", "South Korea", "Stealth roamer; cloaks himself from drones and cameras."));
        this.operators.push(new Operator("Maestro", "Defender", "Evil Eye", 1, 3, "GIS", "Italy", "Deploys Evil Eye bulletproof cameras that shoot lasers and provide intel."));
        this.operators.push(new Operator("Alibi", "Defender", "Prisma", 3, 1, "GIS", "Italy", "Deploys holographic decoys to confuse attackers and bait shots."));
        this.operators.push(new Operator("Clash", "Defender", "Electro Shield", 1, 3, "Scotland Yard (Metropolitan Police)", "UK", "The only defender with a shield; slows enemies with an electrified shield."));
        this.operators.push(new Operator("Kaid", "Defender", "Electroclaws", 1, 3, "GIGR", "Morocco", "Deploys Electroclaws that electrify reinforced walls, hatches, and barbed wire."));
        this.operators.push(new Operator("Mozzie", "Defender", "Pest Launcher", 2, 2, "SASR", "Australia", "Hacks attacker drones with Pest Launcher, stealing their intel tools."));
        this.operators.push(new Operator("Warden", "Defender", "Glance Smart Glasses", 1, 3, "Secret Service", "USA", "Uses smart glasses to see through smoke and resist flashbangs."));
        this.operators.push(new Operator("Goyo", "Defender", "Volcán Canisters", 2, 2, "FES", "Mexico", "Deploys Volcán gas canisters for explosive area denial."));
        this.operators.push(new Operator("Wamai", "Defender", "Mag-NET Systems", 2, 2, "NIGHTHAVEN", "Kenya", "Deploys magnetic devices that intercept and relocate grenades."));
        this.operators.push(new Operator("Oryx", "Defender", "Remah Dash", 2, 2, "Jordanian GIGR", "Jordan", "Charges through soft walls and hatches; can knock down enemies."));
        this.operators.push(new Operator("Melusi", "Defender", "Banshee Sonic Defense", 1, 3, "SANDF", "South Africa", "Uses Banshee sonic devices to slow attackers when triggered."));
        this.operators.push(new Operator("Aruni", "Defender", "Surya Gates", 1, 3, "NIGHTHAVEN", "Thailand", "Deploys laser gates that destroy projectiles and damage attackers."));
        this.operators.push(new Operator("Thunderbird", "Defender", "Kona Station", 2, 2, "Nakoda (Fictional Nakoda Nation for R6)", "Canada", "Places healing stations that automatically heal nearby allies."));
        this.operators.push(new Operator("Thorn", "Defender", "Razorbloom Shell", 2, 2, "Garda ERU", "Ireland", "Throws proximity-triggered explosive traps called Razorbloom Shells."));
        this.operators.push(new Operator("Azami", "Defender", "Kiba Barrier", 2, 2, "NIGHTHAVEN", "Japan", "Deploys Kiba Barriers — throwable expanding cover platforms."));
        this.operators.push(new Operator("Solis", "Defender", "SPEC-IO Electro Sensor", 2, 2, "NIGHTHAVEN", "Colombia", "Scans and detects electronic gadgets using her SPEC-IO device."));
        this.operators.push(new Operator("Fenrir", "Defender", "F-NATT Dread Mines", 2, 2, "NIGHTHAVEN", "Sweden", "Deploys fear gas mines that disable attackers' vision within range."));
        this.operators.push(new Operator("Tubarão", "Defender", "Zoto Canisters", 2, 2, "NIGHTHAVEN", "Portugal", "Throws Zoto Canisters that freeze surfaces and stop breaching."));
        this.operators.push(new Operator("Skopos", "Defender", "Pantheon V10", 2, 2, "NIGHTHAVEN", "Greece", "Deploys an auto-turret (Pantheon V10) to guard tight angles and objectives."));
    }

    initializeStrategies() {
        // Attack strategies
        this.strategies.push(new Strategy("Rush", "Quick entry through multiple points to overwhelm defenders", "Attacker"));
        this.strategies.push(new Strategy("Hard Breach", "Focus on breaching reinforced walls with Thermite/Hibana", "Attacker"));
        this.strategies.push(new Strategy("Vertical Play", "Attack from above/below using Buck/Sledge", "Attacker"));
        this.strategies.push(new Strategy("Shield Push", "Use shield operators to push objectives", "Attacker"));
        this.strategies.push(new Strategy("Intel Gathering", "Use drones and operators like IQ to gather information", "Attacker"));
        this.strategies.push(new Strategy("Flank Watch", "Set up flank watch with Nomad/Gridlock", "Attacker"));
        this.strategies.push(new Strategy("Split Push", "Attack from multiple angles simultaneously", "Attacker"));
        this.strategies.push(new Strategy("Thatcher & Thermite", "Classic combo to open reinforced walls", "Attacker"));

        // Defense strategies
        this.strategies.push(new Strategy("Anchor", "Hold the objective with heavy operators", "Defender"));
        this.strategies.push(new Strategy("Roam", "Roam around the map to flank attackers", "Defender"));
        this.strategies.push(new Strategy("Trap Setup", "Use trap operators like Kapkan, Frost, and Lesion", "Defender"));
        this.strategies.push(new Strategy("Intel Denial", "Deny attacker intel with Mute, Mozzie", "Defender"));
        this.strategies.push(new Strategy("Bulletproof Setup", "Use bulletproof gadgets for protection", "Defender"));
        this.strategies.push(new Strategy("Crossfire", "Set up crossfire angles to catch attackers", "Defender"));
        this.strategies.push(new Strategy("Spawn Peek", "Attempt early kills with spawn peeks", "Defender"));
        this.strategies.push(new Strategy("Extended Hold", "Hold areas outside the objective", "Defender"));
    }

    getAllOperators() {
        return [...this.operators];
    }

    getAttackers() {
        return this.operators.filter(op => op.side === "Attacker");
    }

    getDefenders() {
        return this.operators.filter(op => op.side === "Defender");
    }

    getRandomOperator() {
        const randomIndex = Math.floor(Math.random() * this.operators.length);
        return this.operators[randomIndex];
    }

    getRandomAttacker() {
        const attackers = this.getAttackers();
        const randomIndex = Math.floor(Math.random() * attackers.length);
        return attackers[randomIndex];
    }

    getRandomDefender() {
        const defenders = this.getDefenders();
        const randomIndex = Math.floor(Math.random() * defenders.length);
        return defenders[randomIndex];
    }

    getOperatorsBySpeed(speed) {
        return this.operators.filter(op => op.speed === speed);
    }

    getOperatorsByArmor(armor) {
        return this.operators.filter(op => op.armor === armor);
    }

    getAllStrategies() {
        return [...this.strategies];
    }

    getAttackStrategies() {
        return this.strategies.filter(s => s.side === "Attacker");
    }

    getDefenseStrategies() {
        return this.strategies.filter(s => s.side === "Defender");
    }

    getRandomStrategy() {
        const randomIndex = Math.floor(Math.random() * this.strategies.length);
        return this.strategies[randomIndex];
    }

    getRandomAttackStrategy() {
        const attackStrategies = this.getAttackStrategies();
        const randomIndex = Math.floor(Math.random() * attackStrategies.length);
        return attackStrategies[randomIndex];
    }

    getRandomDefenseStrategy() {
        const defenseStrategies = this.getDefenseStrategies();
        const randomIndex = Math.floor(Math.random() * defenseStrategies.length);
        return defenseStrategies[randomIndex];
    }
}

// Create a global instance of SiegePicker
const siegePicker = new SiegePicker();
