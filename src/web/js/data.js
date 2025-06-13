/**
 * Rainbow Six Siege Operator Picker - Data
 * This file contains all the data for operators and strategies
 */

// Operator class equivalent
class Operator {
    constructor(name, side, specialAbility, primaryWeapon, speed, armor) {
        this.name = name;
        this.side = side;
        this.specialAbility = specialAbility;
        this.primaryWeapon = primaryWeapon;
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
        this.operators.push(new Operator("Ash", "Attacker", "Breaching Round", "R4-C", 3, 1));
        this.operators.push(new Operator("Thermite", "Attacker", "Exothermic Charge", "556xi", 2, 2));
        this.operators.push(new Operator("Thatcher", "Attacker", "EMP Grenade", "AR33", 2, 2));
        this.operators.push(new Operator("Sledge", "Attacker", "Tactical Breaching Hammer", "L85A2", 2, 2));
        this.operators.push(new Operator("IQ", "Attacker", "Electronics Detector", "AUG A2", 3, 1));
        this.operators.push(new Operator("Montagne", "Attacker", "Extendable Shield", "P9", 1, 3));
        this.operators.push(new Operator("Twitch", "Attacker", "Shock Drone", "F2", 2, 2));
        this.operators.push(new Operator("Blitz", "Attacker", "Flash Shield", "P12", 2, 2));
        this.operators.push(new Operator("Fuze", "Attacker", "Cluster Charge", "AK-12", 1, 3));
        this.operators.push(new Operator("Glaz", "Attacker", "Flip Sight", "OTs-03", 2, 2));
        this.operators.push(new Operator("Hibana", "Attacker", "X-KAIROS", "Type-89", 3, 1));
        this.operators.push(new Operator("Buck", "Attacker", "Skeleton Key", "C8-SFW", 2, 2));
        this.operators.push(new Operator("Blackbeard", "Attacker", "Rifle Shield", "Mk17 CQB", 2, 2));
        this.operators.push(new Operator("Capitao", "Attacker", "Tactical Crossbow", "PARA-308", 3, 1));
        this.operators.push(new Operator("Jackal", "Attacker", "Eyenox Model III", "C7E", 2, 2));
        this.operators.push(new Operator("Ying", "Attacker", "Candela", "T-95 LSW", 2, 2));
        this.operators.push(new Operator("Zofia", "Attacker", "KS79 Lifeline", "M762", 2, 2));
        this.operators.push(new Operator("Dokkaebi", "Attacker", "Logic Bomb", "Mk 14 EBR", 2, 2));
        this.operators.push(new Operator("Lion", "Attacker", "EE-ONE-D", "V308", 2, 2));
        this.operators.push(new Operator("Finka", "Attacker", "Adrenal Surge", "Spear .308", 2, 2));
        this.operators.push(new Operator("Maverick", "Attacker", "Breaching Torch", "M4", 3, 1));

        // Defenders
        this.operators.push(new Operator("Smoke", "Defender", "Remote Gas Grenade", "FMG-9", 2, 2));
        this.operators.push(new Operator("Mute", "Defender", "Signal Disruptor", "MP5K", 2, 2));
        this.operators.push(new Operator("Castle", "Defender", "Armor Panel", "UMP45", 2, 2));
        this.operators.push(new Operator("Pulse", "Defender", "Heartbeat Sensor", "UMP45", 3, 1));
        this.operators.push(new Operator("Doc", "Defender", "Stim Pistol", "MP5", 1, 3));
        this.operators.push(new Operator("Rook", "Defender", "Armor Pack", "MP5", 1, 3));
        this.operators.push(new Operator("Kapkan", "Defender", "Entry Denial Device", "9x19VSN", 2, 2));
        this.operators.push(new Operator("Tachanka", "Defender", "Mounted LMG", "9x19VSN", 1, 3));
        this.operators.push(new Operator("Jäger", "Defender", "Active Defense System", "416-C", 3, 1));
        this.operators.push(new Operator("Bandit", "Defender", "Shock Wire", "MP7", 3, 1));
        this.operators.push(new Operator("Frost", "Defender", "Welcome Mat", "9mm C1", 2, 2));
        this.operators.push(new Operator("Valkyrie", "Defender", "Black Eye", "MPX", 2, 2));
        this.operators.push(new Operator("Caveira", "Defender", "Silent Step", "M12", 3, 1));
        this.operators.push(new Operator("Echo", "Defender", "Yokai", "MP5SD", 1, 3));
        this.operators.push(new Operator("Mira", "Defender", "Black Mirror", "Vector .45 ACP", 1, 3));
        this.operators.push(new Operator("Lesion", "Defender", "Gu Mine", "T-5 SMG", 2, 2));
        this.operators.push(new Operator("Ela", "Defender", "Grzmot Mine", "Scorpion EVO 3 A1", 3, 1));
        this.operators.push(new Operator("Vigil", "Defender", "ERC-7", "K1A", 3, 1));
        this.operators.push(new Operator("Maestro", "Defender", "Evil Eye", "ALDA 5.56", 1, 3));
        this.operators.push(new Operator("Alibi", "Defender", "Prisma", "Mx4 Storm", 3, 1));
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