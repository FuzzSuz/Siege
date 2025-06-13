/**
 * Rainbow Six Siege Operator Picker - Data
 * This file contains all the data for operators and strategies
 */

// Operator class equivalent
class Operator {
    constructor(name, side, specialAbility, speed, armor) {
        this.name = name;
        this.side = side;
        this.specialAbility = specialAbility;
        this.speed = speed;
        this.armor = armor;
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
        this.operators.push(new Operator("Ash", "Attacker", "Breaching Round", 3, 1));
        this.operators.push(new Operator("Thermite", "Attacker", "Exothermic Charge", 2, 2));
        this.operators.push(new Operator("Thatcher", "Attacker", "EMP Grenade", 2, 2));
        this.operators.push(new Operator("Sledge", "Attacker", "Tactical Breaching Hammer", 2, 2));
        this.operators.push(new Operator("IQ", "Attacker", "Electronics Detector", 3, 1));
        this.operators.push(new Operator("Montagne", "Attacker", "Extendable Shield", 1, 3));
        this.operators.push(new Operator("Twitch", "Attacker", "Shock Drone", 2, 2));
        this.operators.push(new Operator("Blitz", "Attacker", "Flash Shield", 2, 2));
        this.operators.push(new Operator("Fuze", "Attacker", "Cluster Charge", 1, 3));
        this.operators.push(new Operator("Glaz", "Attacker", "Flip Sight", 2, 2));
        this.operators.push(new Operator("Hibana", "Attacker", "X-KAIROS", 3, 1));
        this.operators.push(new Operator("Buck", "Attacker", "Skeleton Key", 2, 2));
        this.operators.push(new Operator("Blackbeard", "Attacker", "Rifle Shield", 2, 2));
        this.operators.push(new Operator("Capitao", "Attacker", "Tactical Crossbow", 3, 1));
        this.operators.push(new Operator("Jackal", "Attacker", "Eyenox Model III", 2, 2));
        this.operators.push(new Operator("Ying", "Attacker", "Candela", 2, 2));
        this.operators.push(new Operator("Zofia", "Attacker", "KS79 Lifeline", 2, 2));
        this.operators.push(new Operator("Dokkaebi", "Attacker", "Logic Bomb", 2, 2));
        this.operators.push(new Operator("Lion", "Attacker", "EE-ONE-D", 2, 2));
        this.operators.push(new Operator("Finka", "Attacker", "Adrenal Surge", 2, 2));
        this.operators.push(new Operator("Maverick", "Attacker", "Breaching Torch", 3, 1));
        this.operators.push(new Operator("Nomad", "Attacker", "Airjab", 2, 2));
        this.operators.push(new Operator("Gridlock", "Attacker", "Trax Stingers", 1, 3));
        this.operators.push(new Operator("Nøkk", "Attacker", "HEL Presence Reduction", 2, 2));
        this.operators.push(new Operator("Amaru", "Attacker", "Garra Hook", 2, 2));
        this.operators.push(new Operator("Kali", "Attacker", "LV Explosive Lance", 2, 2));
        this.operators.push(new Operator("Iana", "Attacker", "Gemini Replicator", 2, 2));
        this.operators.push(new Operator("Ace", "Attacker", "SELMA Aqua Breacher", 2, 2));
        this.operators.push(new Operator("Zero", "Attacker", "Argus Launcher", 3, 1));
        this.operators.push(new Operator("Flores", "Attacker", "RCE-Ratero Drones", 2, 2));
        this.operators.push(new Operator("Osa", "Attacker", "Talon-8 Clear Shield", 1, 3));
        this.operators.push(new Operator("Sens", "Attacker", "R.O.U. Projector System", 3, 1));
        this.operators.push(new Operator("Grim", "Attacker", "Kawan Hive Launcher", 3, 1));
        this.operators.push(new Operator("Brava", "Attacker", "Kludge Drone", 3, 1));
        this.operators.push(new Operator("Ram", "Attacker", "BU-GI Auto Breacher", 1, 3));
        this.operators.push(new Operator("Deimos", "Attacker", "Deathmark Tracker", 2, 2));
        this.operators.push(new Operator("Rauora", "Attacker", "DOM Camouflage Panels", 2, 2));
        this.operators.push(new Operator("Striker", "Attacker", "Gadget Kit", 2, 2));

        // Defenders
        this.operators.push(new Operator("Smoke", "Defender", "Remote Gas Grenade", 2, 2));
        this.operators.push(new Operator("Mute", "Defender", "Signal Disruptor", 2, 2));
        this.operators.push(new Operator("Castle", "Defender", "Armor Panel", 2, 2));
        this.operators.push(new Operator("Pulse", "Defender", "Heartbeat Sensor", 3, 1));
        this.operators.push(new Operator("Doc", "Defender", "Stim Pistol", 1, 3));
        this.operators.push(new Operator("Rook", "Defender", "Armor Pack", 1, 3));
        this.operators.push(new Operator("Kapkan", "Defender", "Entry Denial Device", 2, 2));
        this.operators.push(new Operator("Tachanka", "Defender", "Mounted LMG", 1, 3));
        this.operators.push(new Operator("Jäger", "Defender", "Active Defense System", 3, 1));
        this.operators.push(new Operator("Bandit", "Defender", "Shock Wire", 3, 1));
        this.operators.push(new Operator("Frost", "Defender", "Welcome Mat", 2, 2));
        this.operators.push(new Operator("Valkyrie", "Defender", "Black Eye", 2, 2));
        this.operators.push(new Operator("Caveira", "Defender", "Silent Step", 3, 1));
        this.operators.push(new Operator("Echo", "Defender", "Yokai", 1, 3));
        this.operators.push(new Operator("Mira", "Defender", "Black Mirror", 1, 3));
        this.operators.push(new Operator("Lesion", "Defender", "Gu Mine", 2, 2));
        this.operators.push(new Operator("Ela", "Defender", "Grzmot Mine", 3, 1));
        this.operators.push(new Operator("Vigil", "Defender", "ERC-7", 3, 1));
        this.operators.push(new Operator("Maestro", "Defender", "Evil Eye", 1, 3));
        this.operators.push(new Operator("Alibi", "Defender", "Prisma", 3, 1));
        this.operators.push(new Operator("Clash", "Defender", "Electro Shield", 1, 3));
        this.operators.push(new Operator("Kaid", "Defender", "Electroclaws", 1, 3));
        this.operators.push(new Operator("Mozzie", "Defender", "Pest Launcher", 2, 2));
        this.operators.push(new Operator("Warden", "Defender", "Glance Smart Glasses", 1, 3));
        this.operators.push(new Operator("Goyo", "Defender", "Volcán Canisters", 2, 2));
        this.operators.push(new Operator("Wamai", "Defender", "Mag-NET Systems", 2, 2));
        this.operators.push(new Operator("Oryx", "Defender", "Remah Dash", 2, 2));
        this.operators.push(new Operator("Melusi", "Defender", "Banshee Sonic Defense", 1, 3));
        this.operators.push(new Operator("Aruni", "Defender", "Surya Gates", 1, 3));
        this.operators.push(new Operator("Thunderbird", "Defender", "Kona Station", 2, 2));
        this.operators.push(new Operator("Thorn", "Defender", "Razorbloom Shell", 2, 2));
        this.operators.push(new Operator("Azami", "Defender", "Kiba Barrier", 2, 2));
        this.operators.push(new Operator("Solis", "Defender", "SPEC-IO Electro Sensor", 2, 2));
        this.operators.push(new Operator("Fenrir", "Defender", "F-NATT Dread Mines", 2, 2));
        this.operators.push(new Operator("Tubarão", "Defender", "Zoto Canisters", 2, 2));
        this.operators.push(new Operator("Skopos", "Defender", "Pantheon V10", 2, 2));
        this.operators.push(new Operator("Sentry", "Defender", "Gadget Kit", 2, 2));
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
