public class Strategy {
    private String name;
    private String description;
    private String side; // "Attacker" or "Defender"
    
    public Strategy(String name, String description, String side) {
        this.name = name;
        this.description = description;
        this.side = side;
    }
    
    // Getters
    public String getName() {
        return name;
    }
    
    public String getDescription() {
        return description;
    }
    
    public String getSide() {
        return side;
    }
    
    @Override
    public String toString() {
        return name + " (" + side + ")\n" +
               "Description: " + description;
    }
}