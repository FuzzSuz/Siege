public class Operator {
    private String name;
    private String side; // "Attacker" or "Defender"
    private String specialAbility;
    private int speed;
    private int armor;

    public Operator(String name, String side, String specialAbility, int speed, int armor) {
        this.name = name;
        this.side = side;
        this.specialAbility = specialAbility;
        this.speed = speed;
        this.armor = armor;
    }

    // Getters
    public String getName() {
        return name;
    }

    public String getSide() {
        return side;
    }

    public String getSpecialAbility() {
        return specialAbility;
    }


    public int getSpeed() {
        return speed;
    }

    public int getArmor() {
        return armor;
    }

    @Override
    public String toString() {
        return name + " (" + side + ")\n" +
               "Special Ability: " + specialAbility + "\n" +
               "Speed: " + speed + ", Armor: " + armor;
    }
}
