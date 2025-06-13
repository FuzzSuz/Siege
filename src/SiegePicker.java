import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class SiegePicker {
    private List<Operator> operators;
    private List<Strategy> strategies;
    private Random random;

    public SiegePicker() {
        operators = new ArrayList<>();
        strategies = new ArrayList<>();
        random = new Random();
        initializeOperators();
        initializeStrategies();
    }

    private void initializeOperators() {
        // Attackers
        operators.add(new Operator("Ash", "Attacker", "Breaching Round", 3, 1));
        operators.add(new Operator("Thermite", "Attacker", "Exothermic Charge", 2, 2));
        operators.add(new Operator("Thatcher", "Attacker", "EMP Grenade", 2, 2));
        operators.add(new Operator("Sledge", "Attacker", "Tactical Breaching Hammer", 2, 2));
        operators.add(new Operator("IQ", "Attacker", "Electronics Detector", 3, 1));
        operators.add(new Operator("Montagne", "Attacker", "Extendable Shield", 1, 3));
        operators.add(new Operator("Twitch", "Attacker", "Shock Drone", 2, 2));
        operators.add(new Operator("Blitz", "Attacker", "Flash Shield", 2, 2));
        operators.add(new Operator("Fuze", "Attacker", "Cluster Charge", 1, 3));
        operators.add(new Operator("Glaz", "Attacker", "Flip Sight", 2, 2));
        operators.add(new Operator("Hibana", "Attacker", "X-KAIROS", 3, 1));
        operators.add(new Operator("Buck", "Attacker", "Skeleton Key", 2, 2));
        operators.add(new Operator("Blackbeard", "Attacker", "Rifle Shield", 2, 2));
        operators.add(new Operator("Capitao", "Attacker", "Tactical Crossbow", 3, 1));
        operators.add(new Operator("Jackal", "Attacker", "Eyenox Model III", 2, 2));
        operators.add(new Operator("Ying", "Attacker", "Candela", 2, 2));
        operators.add(new Operator("Zofia", "Attacker", "KS79 Lifeline", 2, 2));
        operators.add(new Operator("Dokkaebi", "Attacker", "Logic Bomb", 2, 2));
        operators.add(new Operator("Lion", "Attacker", "EE-ONE-D", 2, 2));
        operators.add(new Operator("Finka", "Attacker", "Adrenal Surge", 2, 2));
        operators.add(new Operator("Maverick", "Attacker", "Breaching Torch", 3, 1));
        operators.add(new Operator("Nomad", "Attacker", "Airjab", 2, 2));
        operators.add(new Operator("Gridlock", "Attacker", "Trax Stingers", 1, 3));
        operators.add(new Operator("Nøkk", "Attacker", "HEL Presence Reduction", 2, 2));
        operators.add(new Operator("Amaru", "Attacker", "Garra Hook", 2, 2));
        operators.add(new Operator("Kali", "Attacker", "LV Explosive Lance", 2, 2));
        operators.add(new Operator("Iana", "Attacker", "Gemini Replicator", 2, 2));
        operators.add(new Operator("Ace", "Attacker", "SELMA Aqua Breacher", 2, 2));
        operators.add(new Operator("Zero", "Attacker", "Argus Launcher", 3, 1));
        operators.add(new Operator("Flores", "Attacker", "RCE-Ratero Drones", 2, 2));
        operators.add(new Operator("Osa", "Attacker", "Talon-8 Clear Shield", 1, 3));
        operators.add(new Operator("Sens", "Attacker", "R.O.U. Projector System", 3, 1));
        operators.add(new Operator("Grim", "Attacker", "Kawan Hive Launcher", 3, 1));
        operators.add(new Operator("Brava", "Attacker", "Kludge Drone", 3, 1));
        operators.add(new Operator("Ram", "Attacker", "BU-GI Auto Breacher", 1, 3));
        operators.add(new Operator("Deimos", "Attacker", "Deathmark Tracker", 2, 2));
        operators.add(new Operator("Rauora", "Attacker", "DOM Camouflage Panels", 2, 2));
        operators.add(new Operator("Striker", "Attacker", "Gadget Kit", 2, 2));

        // Defenders
        operators.add(new Operator("Smoke", "Defender", "Remote Gas Grenade", 2, 2));
        operators.add(new Operator("Mute", "Defender", "Signal Disruptor", 2, 2));
        operators.add(new Operator("Castle", "Defender", "Armor Panel", 2, 2));
        operators.add(new Operator("Pulse", "Defender", "Heartbeat Sensor", 3, 1));
        operators.add(new Operator("Doc", "Defender", "Stim Pistol", 1, 3));
        operators.add(new Operator("Rook", "Defender", "Armor Pack", 1, 3));
        operators.add(new Operator("Kapkan", "Defender", "Entry Denial Device", 2, 2));
        operators.add(new Operator("Tachanka", "Defender", "Mounted LMG", 1, 3));
        operators.add(new Operator("Jäger", "Defender", "Active Defense System", 3, 1));
        operators.add(new Operator("Bandit", "Defender", "Shock Wire", 3, 1));
        operators.add(new Operator("Frost", "Defender", "Welcome Mat", 2, 2));
        operators.add(new Operator("Valkyrie", "Defender", "Black Eye", 2, 2));
        operators.add(new Operator("Caveira", "Defender", "Silent Step", 3, 1));
        operators.add(new Operator("Echo", "Defender", "Yokai", 1, 3));
        operators.add(new Operator("Mira", "Defender", "Black Mirror", 1, 3));
        operators.add(new Operator("Lesion", "Defender", "Gu Mine", 2, 2));
        operators.add(new Operator("Ela", "Defender", "Grzmot Mine", 3, 1));
        operators.add(new Operator("Vigil", "Defender", "ERC-7", 3, 1));
        operators.add(new Operator("Maestro", "Defender", "Evil Eye", 1, 3));
        operators.add(new Operator("Alibi", "Defender", "Prisma", 3, 1));
        operators.add(new Operator("Clash", "Defender", "Electro Shield", 1, 3));
        operators.add(new Operator("Kaid", "Defender", "Electroclaws", 1, 3));
        operators.add(new Operator("Mozzie", "Defender", "Pest Launcher", 2, 2));
        operators.add(new Operator("Warden", "Defender", "Glance Smart Glasses", 1, 3));
        operators.add(new Operator("Goyo", "Defender", "Volcán Canisters", 2, 2));
        operators.add(new Operator("Wamai", "Defender", "Mag-NET Systems", 2, 2));
        operators.add(new Operator("Oryx", "Defender", "Remah Dash", 2, 2));
        operators.add(new Operator("Melusi", "Defender", "Banshee Sonic Defense", 1, 3));
        operators.add(new Operator("Aruni", "Defender", "Surya Gates", 1, 3));
        operators.add(new Operator("Thunderbird", "Defender", "Kona Station", 2, 2));
        operators.add(new Operator("Thorn", "Defender", "Razorbloom Shell", 2, 2));
        operators.add(new Operator("Azami", "Defender", "Kiba Barrier", 2, 2));
        operators.add(new Operator("Solis", "Defender", "SPEC-IO Electro Sensor", 2, 2));
        operators.add(new Operator("Fenrir", "Defender", "F-NATT Dread Mines", 2, 2));
        operators.add(new Operator("Tubarão", "Defender", "Zoto Canisters", 2, 2));
        operators.add(new Operator("Skopos", "Defender", "Pantheon V10", 2, 2));
        operators.add(new Operator("Sentry", "Defender", "Gadget Kit", 2, 2));
    }

    public List<Operator> getAllOperators() {
        return new ArrayList<>(operators);
    }

    public List<Operator> getAttackers() {
        return operators.stream()
                .filter(op -> op.getSide().equals("Attacker"))
                .collect(Collectors.toList());
    }

    public List<Operator> getDefenders() {
        return operators.stream()
                .filter(op -> op.getSide().equals("Defender"))
                .collect(Collectors.toList());
    }

    public Operator getRandomOperator() {
        return operators.get(random.nextInt(operators.size()));
    }

    public Operator getRandomAttacker() {
        List<Operator> attackers = getAttackers();
        return attackers.get(random.nextInt(attackers.size()));
    }

    public Operator getRandomDefender() {
        List<Operator> defenders = getDefenders();
        return defenders.get(random.nextInt(defenders.size()));
    }

    public List<Operator> getOperatorsBySpeed(int speed) {
        return operators.stream()
                .filter(op -> op.getSpeed() == speed)
                .collect(Collectors.toList());
    }

    public List<Operator> getOperatorsByArmor(int armor) {
        return operators.stream()
                .filter(op -> op.getArmor() == armor)
                .collect(Collectors.toList());
    }

    private void initializeStrategies() {
        // Attack strategies
        strategies.add(new Strategy("Rush", "Quick entry through multiple points to overwhelm defenders", "Attacker"));
        strategies.add(new Strategy("Hard Breach", "Focus on breaching reinforced walls with Thermite/Hibana", "Attacker"));
        strategies.add(new Strategy("Vertical Play", "Attack from above/below using Buck/Sledge", "Attacker"));
        strategies.add(new Strategy("Shield Push", "Use shield operators to push objectives", "Attacker"));
        strategies.add(new Strategy("Intel Gathering", "Use drones and operators like IQ to gather information", "Attacker"));
        strategies.add(new Strategy("Flank Watch", "Set up flank watch with Nomad/Gridlock", "Attacker"));
        strategies.add(new Strategy("Split Push", "Attack from multiple angles simultaneously", "Attacker"));
        strategies.add(new Strategy("Thatcher & Thermite", "Classic combo to open reinforced walls", "Attacker"));


        // Defense strategies
        strategies.add(new Strategy("Anchor", "Hold the objective with heavy operators", "Defender"));
        strategies.add(new Strategy("Roam", "Roam around the map to flank attackers", "Defender"));
        strategies.add(new Strategy("Trap Setup", "Use trap operators like Kapkan, Frost, and Lesion", "Defender"));
        strategies.add(new Strategy("Intel Denial", "Deny attacker intel with Mute, Mozzie", "Defender"));
        strategies.add(new Strategy("Bulletproof Setup", "Use bulletproof gadgets for protection", "Defender"));
        strategies.add(new Strategy("Crossfire", "Set up crossfire angles to catch attackers", "Defender"));
        strategies.add(new Strategy("Spawn Peek", "Attempt early kills with spawn peeks", "Defender"));
        strategies.add(new Strategy("Extended Hold", "Hold areas outside the objective", "Defender"));
    }

    public List<Strategy> getAllStrategies() {
        return new ArrayList<>(strategies);
    }

    public List<Strategy> getAttackStrategies() {
        return strategies.stream()
                .filter(s -> s.getSide().equals("Attacker"))
                .collect(Collectors.toList());
    }

    public List<Strategy> getDefenseStrategies() {
        return strategies.stream()
                .filter(s -> s.getSide().equals("Defender"))
                .collect(Collectors.toList());
    }

    public Strategy getRandomStrategy() {
        return strategies.get(random.nextInt(strategies.size()));
    }

    public Strategy getRandomAttackStrategy() {
        List<Strategy> attackStrategies = getAttackStrategies();
        return attackStrategies.get(random.nextInt(attackStrategies.size()));
    }

    public Strategy getRandomDefenseStrategy() {
        List<Strategy> defenseStrategies = getDefenseStrategies();
        return defenseStrategies.get(random.nextInt(defenseStrategies.size()));
    }
}
