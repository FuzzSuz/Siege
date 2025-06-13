import javax.swing.*;
import javax.swing.border.*;
import java.awt.*;
import java.awt.event.*;
import java.util.List;

public class SiegePickerGUI extends JFrame {
    private SiegePicker siegePicker;
    private JPanel contentPanel;
    private JPanel menuPanel;
    private CardLayout cardLayout;

    // Constants for card names
    private static final String ALL_OPERATORS_PANEL = "ALL_OPERATORS";
    private static final String RANDOM_ATTACKER_PANEL = "RANDOM_ATTACKER";
    private static final String RANDOM_DEFENDER_PANEL = "RANDOM_DEFENDER";
    private static final String RANDOM_STRATEGIES_PANEL = "RANDOM_STRATEGIES";
    private static final String FILTER_SPEED_PANEL = "FILTER_SPEED";
    private static final String FILTER_ARMOR_PANEL = "FILTER_ARMOR";

    public SiegePickerGUI() {
        siegePicker = new SiegePicker();

        // Set up the frame
        setTitle("Rainbow Six Siege Operator Picker");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1000, 700);
        setLocationRelativeTo(null);

        // Create the main layout
        setLayout(new BorderLayout());

        // Create the menu panel
        createMenuPanel();

        // Create the content panel with CardLayout
        cardLayout = new CardLayout();
        contentPanel = new JPanel(cardLayout);

        // Create all the panels for different functionalities
        createAllOperatorsPanel();
        createRandomStrategiesPanel();
        createRandomAttackerPanel();
        createRandomDefenderPanel();
        createFilterSpeedPanel();
        createFilterArmorPanel();

        // Add the panels to the main frame
        add(menuPanel, BorderLayout.WEST);
        add(contentPanel, BorderLayout.CENTER);

        // Show the all operators panel by default
        cardLayout.show(contentPanel, ALL_OPERATORS_PANEL);
    }

    private void createMenuPanel() {
        menuPanel = new JPanel();
        menuPanel.setLayout(new BoxLayout(menuPanel, BoxLayout.Y_AXIS));
        menuPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        menuPanel.setBackground(new Color(50, 50, 50));
        menuPanel.setPreferredSize(new Dimension(200, getHeight()));

        JLabel titleLabel = new JLabel("R6S Operator Picker");
        titleLabel.setForeground(Color.WHITE);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 16));
        titleLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        menuPanel.add(titleLabel);

        menuPanel.add(Box.createRigidArea(new Dimension(0, 20)));

        // Create menu buttons
        String[] buttonLabels = {
            "View All Operators", 
            "Random Attacker", 
            "Random Defender", 
            "Random Strategies", 
            "Filter by Speed", 
            "Filter by Armor"
        };

        String[] cardNames = {
            ALL_OPERATORS_PANEL, 
            RANDOM_ATTACKER_PANEL, 
            RANDOM_DEFENDER_PANEL, 
            RANDOM_STRATEGIES_PANEL, 
            FILTER_SPEED_PANEL, 
            FILTER_ARMOR_PANEL
        };

        for (int i = 0; i < buttonLabels.length; i++) {
            JButton button = createMenuButton(buttonLabels[i], cardNames[i]);
            menuPanel.add(button);
            menuPanel.add(Box.createRigidArea(new Dimension(0, 10)));
        }
    }

    private JButton createMenuButton(String text, String cardName) {
        JButton button = new JButton(text);
        button.setAlignmentX(Component.CENTER_ALIGNMENT);
        button.setMaximumSize(new Dimension(180, 40));
        button.setBackground(new Color(70, 70, 70));
        button.setForeground(Color.WHITE);
        button.setFocusPainted(false);
        button.setBorder(BorderFactory.createEmptyBorder(5, 10, 5, 10));

        button.addActionListener(e -> cardLayout.show(contentPanel, cardName));

        return button;
    }

    private void createAllOperatorsPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBackground(new Color(240, 240, 240));

        JLabel titleLabel = new JLabel("All Operators", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 20));
        titleLabel.setBorder(BorderFactory.createEmptyBorder(10, 0, 10, 0));
        panel.add(titleLabel, BorderLayout.NORTH);

        // Create a tabbed pane for attackers and defenders
        JTabbedPane tabbedPane = new JTabbedPane();

        // Create attacker panel
        JPanel attackerPanel = createOperatorGridPanel(siegePicker.getAttackers());
        JScrollPane attackerScrollPane = new JScrollPane(attackerPanel);
        attackerScrollPane.getVerticalScrollBar().setUnitIncrement(16);
        tabbedPane.addTab("Attackers", attackerScrollPane);

        // Create defender panel
        JPanel defenderPanel = createOperatorGridPanel(siegePicker.getDefenders());
        JScrollPane defenderScrollPane = new JScrollPane(defenderPanel);
        defenderScrollPane.getVerticalScrollBar().setUnitIncrement(16);
        tabbedPane.addTab("Defenders", defenderScrollPane);

        panel.add(tabbedPane, BorderLayout.CENTER);

        contentPanel.add(panel, ALL_OPERATORS_PANEL);
    }

    private JPanel createOperatorGridPanel(List<Operator> operators) {
        JPanel panel = new JPanel(new GridLayout(0, 4, 10, 10));
        panel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        panel.setBackground(new Color(240, 240, 240));

        for (Operator operator : operators) {
            panel.add(createOperatorCard(operator));
        }

        return panel;
    }

    private JPanel createOperatorCard(Operator operator) {
        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBorder(BorderFactory.createCompoundBorder(
            new LineBorder(Color.GRAY, 1),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)
        ));

        // Set background color based on side
        if (operator.getSide().equals("Attacker")) {
            card.setBackground(new Color(255, 230, 230));
        } else {
            card.setBackground(new Color(230, 230, 255));
        }

        JLabel nameLabel = new JLabel(operator.getName());
        nameLabel.setFont(new Font("Arial", Font.BOLD, 14));
        nameLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel sideLabel = new JLabel(operator.getSide());
        sideLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel abilityLabel = new JLabel("Ability: " + operator.getSpecialAbility());
        abilityLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        JPanel statsPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
        statsPanel.setOpaque(false);

        JLabel speedLabel = new JLabel("Speed: " + operator.getSpeed());
        JLabel armorLabel = new JLabel("Armor: " + operator.getArmor());

        statsPanel.add(speedLabel);
        statsPanel.add(armorLabel);

        card.add(nameLabel);
        card.add(Box.createRigidArea(new Dimension(0, 5)));
        card.add(sideLabel);
        card.add(Box.createRigidArea(new Dimension(0, 5)));
        card.add(abilityLabel);
        card.add(Box.createRigidArea(new Dimension(0, 5)));
        card.add(statsPanel);

        return card;
    }

    private void createRandomStrategiesPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBackground(new Color(240, 240, 240));

        JLabel titleLabel = new JLabel("Random Strategies", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 20));
        titleLabel.setBorder(BorderFactory.createEmptyBorder(10, 0, 10, 0));
        panel.add(titleLabel, BorderLayout.NORTH);

        JPanel centerPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
        centerPanel.setBackground(new Color(240, 240, 240));

        JPanel strategyPanel = new JPanel();
        strategyPanel.setLayout(new BoxLayout(strategyPanel, BoxLayout.Y_AXIS));
        strategyPanel.setBackground(new Color(240, 240, 240));

        // Create toggle buttons for attack/defend
        JPanel togglePanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
        togglePanel.setBackground(new Color(240, 240, 240));

        JToggleButton attackButton = new JToggleButton("Attack");
        attackButton.setSelected(true);
        JToggleButton defendButton = new JToggleButton("Defend");

        // Create button group to ensure only one toggle is selected
        ButtonGroup buttonGroup = new ButtonGroup();
        buttonGroup.add(attackButton);
        buttonGroup.add(defendButton);

        togglePanel.add(attackButton);
        togglePanel.add(defendButton);

        strategyPanel.add(togglePanel);
        strategyPanel.add(Box.createRigidArea(new Dimension(0, 10)));

        JButton randomButton = new JButton("Get Random Strategy");
        randomButton.setAlignmentX(Component.CENTER_ALIGNMENT);
        randomButton.setFont(new Font("Arial", Font.BOLD, 14));

        JPanel strategyCardPanel = new JPanel();
        strategyCardPanel.setLayout(new BoxLayout(strategyCardPanel, BoxLayout.Y_AXIS));
        strategyCardPanel.setBackground(new Color(240, 240, 240));
        strategyCardPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        randomButton.addActionListener(e -> {
            Strategy strategy;
            if (attackButton.isSelected()) {
                strategy = siegePicker.getRandomAttackStrategy();
            } else {
                strategy = siegePicker.getRandomDefenseStrategy();
            }

            strategyCardPanel.removeAll();

            JPanel card = createStrategyCard(strategy);
            strategyCardPanel.add(card);

            strategyCardPanel.revalidate();
            strategyCardPanel.repaint();
        });

        strategyPanel.add(randomButton);
        strategyPanel.add(Box.createRigidArea(new Dimension(0, 20)));
        strategyPanel.add(strategyCardPanel);

        centerPanel.add(strategyPanel);
        panel.add(centerPanel, BorderLayout.CENTER);

        contentPanel.add(panel, RANDOM_STRATEGIES_PANEL);
    }

    private JPanel createStrategyCard(Strategy strategy) {
        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBorder(BorderFactory.createCompoundBorder(
            new LineBorder(Color.GRAY, 1),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)
        ));

        // Set background color based on side
        if (strategy.getSide().equals("Attacker")) {
            card.setBackground(new Color(255, 230, 230));
        } else {
            card.setBackground(new Color(230, 230, 255));
        }

        JLabel nameLabel = new JLabel(strategy.getName());
        nameLabel.setFont(new Font("Arial", Font.BOLD, 16));
        nameLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel sideLabel = new JLabel(strategy.getSide());
        sideLabel.setFont(new Font("Arial", Font.ITALIC, 14));
        sideLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        JTextArea descriptionArea = new JTextArea(strategy.getDescription());
        descriptionArea.setWrapStyleWord(true);
        descriptionArea.setLineWrap(true);
        descriptionArea.setEditable(false);
        descriptionArea.setBackground(card.getBackground());
        descriptionArea.setAlignmentX(Component.CENTER_ALIGNMENT);
        descriptionArea.setFont(new Font("Arial", Font.PLAIN, 14));

        card.add(nameLabel);
        card.add(Box.createRigidArea(new Dimension(0, 5)));
        card.add(sideLabel);
        card.add(Box.createRigidArea(new Dimension(0, 10)));
        card.add(descriptionArea);

        return card;
    }

    private void createRandomAttackerPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBackground(new Color(240, 240, 240));

        JLabel titleLabel = new JLabel("Random Attacker", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 20));
        titleLabel.setBorder(BorderFactory.createEmptyBorder(10, 0, 10, 0));
        panel.add(titleLabel, BorderLayout.NORTH);

        JPanel centerPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
        centerPanel.setBackground(new Color(240, 240, 240));

        JPanel operatorPanel = new JPanel();
        operatorPanel.setLayout(new BoxLayout(operatorPanel, BoxLayout.Y_AXIS));
        operatorPanel.setBackground(new Color(240, 240, 240));

        JPanel operatorCardPanel = new JPanel(new BorderLayout());
        operatorCardPanel.setBackground(new Color(240, 240, 240));

        JButton randomButton = new JButton("Get Random Attacker");
        randomButton.setAlignmentX(Component.CENTER_ALIGNMENT);
        randomButton.setFont(new Font("Arial", Font.BOLD, 14));

        randomButton.addActionListener(e -> {
            Operator operator = siegePicker.getRandomAttacker();
            operatorCardPanel.removeAll();
            operatorCardPanel.add(createOperatorCard(operator), BorderLayout.CENTER);
            operatorCardPanel.revalidate();
            operatorCardPanel.repaint();
        });

        operatorPanel.add(randomButton);
        operatorPanel.add(Box.createRigidArea(new Dimension(0, 20)));
        operatorPanel.add(operatorCardPanel);

        centerPanel.add(operatorPanel);
        panel.add(centerPanel, BorderLayout.CENTER);

        contentPanel.add(panel, RANDOM_ATTACKER_PANEL);
    }

    private void createRandomDefenderPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBackground(new Color(240, 240, 240));

        JLabel titleLabel = new JLabel("Random Defender", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 20));
        titleLabel.setBorder(BorderFactory.createEmptyBorder(10, 0, 10, 0));
        panel.add(titleLabel, BorderLayout.NORTH);

        JPanel centerPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
        centerPanel.setBackground(new Color(240, 240, 240));

        JPanel operatorPanel = new JPanel();
        operatorPanel.setLayout(new BoxLayout(operatorPanel, BoxLayout.Y_AXIS));
        operatorPanel.setBackground(new Color(240, 240, 240));

        JPanel operatorCardPanel = new JPanel(new BorderLayout());
        operatorCardPanel.setBackground(new Color(240, 240, 240));

        JButton randomButton = new JButton("Get Random Defender");
        randomButton.setAlignmentX(Component.CENTER_ALIGNMENT);
        randomButton.setFont(new Font("Arial", Font.BOLD, 14));

        randomButton.addActionListener(e -> {
            Operator operator = siegePicker.getRandomDefender();
            operatorCardPanel.removeAll();
            operatorCardPanel.add(createOperatorCard(operator), BorderLayout.CENTER);
            operatorCardPanel.revalidate();
            operatorCardPanel.repaint();
        });

        operatorPanel.add(randomButton);
        operatorPanel.add(Box.createRigidArea(new Dimension(0, 20)));
        operatorPanel.add(operatorCardPanel);

        centerPanel.add(operatorPanel);
        panel.add(centerPanel, BorderLayout.CENTER);

        contentPanel.add(panel, RANDOM_DEFENDER_PANEL);
    }

    private void createFilterSpeedPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBackground(new Color(240, 240, 240));

        JLabel titleLabel = new JLabel("Filter by Speed", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 20));
        titleLabel.setBorder(BorderFactory.createEmptyBorder(10, 0, 10, 0));
        panel.add(titleLabel, BorderLayout.NORTH);

        JPanel controlPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
        controlPanel.setBackground(new Color(240, 240, 240));

        JLabel speedLabel = new JLabel("Select Speed Rating (1-3): ");
        JComboBox<Integer> speedComboBox = new JComboBox<>(new Integer[]{1, 2, 3});
        JButton filterButton = new JButton("Filter");

        controlPanel.add(speedLabel);
        controlPanel.add(speedComboBox);
        controlPanel.add(filterButton);

        JPanel resultPanel = new JPanel(new BorderLayout());
        resultPanel.setBackground(new Color(240, 240, 240));

        filterButton.addActionListener(e -> {
            int speed = (Integer) speedComboBox.getSelectedItem();
            List<Operator> operators = siegePicker.getOperatorsBySpeed(speed);

            resultPanel.removeAll();

            if (operators.isEmpty()) {
                JLabel noResultsLabel = new JLabel("No operators found with speed rating " + speed, SwingConstants.CENTER);
                resultPanel.add(noResultsLabel, BorderLayout.CENTER);
            } else {
                // Create a tabbed pane for attackers and defenders
                JTabbedPane tabbedPane = new JTabbedPane();

                // Filter attackers with the selected speed
                List<Operator> attackers = operators.stream()
                    .filter(op -> op.getSide().equals("Attacker"))
                    .toList();

                // Filter defenders with the selected speed
                List<Operator> defenders = operators.stream()
                    .filter(op -> op.getSide().equals("Defender"))
                    .toList();

                // Create attacker panel
                if (!attackers.isEmpty()) {
                    JPanel attackerPanel = createOperatorGridPanel(attackers);
                    JScrollPane attackerScrollPane = new JScrollPane(attackerPanel);
                    attackerScrollPane.getVerticalScrollBar().setUnitIncrement(16);
                    tabbedPane.addTab("Attackers (" + attackers.size() + ")", attackerScrollPane);
                }

                // Create defender panel
                if (!defenders.isEmpty()) {
                    JPanel defenderPanel = createOperatorGridPanel(defenders);
                    JScrollPane defenderScrollPane = new JScrollPane(defenderPanel);
                    defenderScrollPane.getVerticalScrollBar().setUnitIncrement(16);
                    tabbedPane.addTab("Defenders (" + defenders.size() + ")", defenderScrollPane);
                }

                resultPanel.add(tabbedPane, BorderLayout.CENTER);
            }

            resultPanel.revalidate();
            resultPanel.repaint();
        });

        panel.add(controlPanel, BorderLayout.NORTH);
        panel.add(resultPanel, BorderLayout.CENTER);

        contentPanel.add(panel, FILTER_SPEED_PANEL);
    }

    private void createFilterArmorPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBackground(new Color(240, 240, 240));

        JLabel titleLabel = new JLabel("Filter by Armor", SwingConstants.CENTER);
        titleLabel.setFont(new Font("Arial", Font.BOLD, 20));
        titleLabel.setBorder(BorderFactory.createEmptyBorder(10, 0, 10, 0));
        panel.add(titleLabel, BorderLayout.NORTH);

        JPanel controlPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
        controlPanel.setBackground(new Color(240, 240, 240));

        JLabel armorLabel = new JLabel("Select Armor Rating (1-3): ");
        JComboBox<Integer> armorComboBox = new JComboBox<>(new Integer[]{1, 2, 3});
        JButton filterButton = new JButton("Filter");

        controlPanel.add(armorLabel);
        controlPanel.add(armorComboBox);
        controlPanel.add(filterButton);

        JPanel resultPanel = new JPanel(new BorderLayout());
        resultPanel.setBackground(new Color(240, 240, 240));

        filterButton.addActionListener(e -> {
            int armor = (Integer) armorComboBox.getSelectedItem();
            List<Operator> operators = siegePicker.getOperatorsByArmor(armor);

            resultPanel.removeAll();

            if (operators.isEmpty()) {
                JLabel noResultsLabel = new JLabel("No operators found with armor rating " + armor, SwingConstants.CENTER);
                resultPanel.add(noResultsLabel, BorderLayout.CENTER);
            } else {
                // Create a tabbed pane for attackers and defenders
                JTabbedPane tabbedPane = new JTabbedPane();

                // Filter attackers with the selected armor
                List<Operator> attackers = operators.stream()
                    .filter(op -> op.getSide().equals("Attacker"))
                    .toList();

                // Filter defenders with the selected armor
                List<Operator> defenders = operators.stream()
                    .filter(op -> op.getSide().equals("Defender"))
                    .toList();

                // Create attacker panel
                if (!attackers.isEmpty()) {
                    JPanel attackerPanel = createOperatorGridPanel(attackers);
                    JScrollPane attackerScrollPane = new JScrollPane(attackerPanel);
                    attackerScrollPane.getVerticalScrollBar().setUnitIncrement(16);
                    tabbedPane.addTab("Attackers (" + attackers.size() + ")", attackerScrollPane);
                }

                // Create defender panel
                if (!defenders.isEmpty()) {
                    JPanel defenderPanel = createOperatorGridPanel(defenders);
                    JScrollPane defenderScrollPane = new JScrollPane(defenderPanel);
                    defenderScrollPane.getVerticalScrollBar().setUnitIncrement(16);
                    tabbedPane.addTab("Defenders (" + defenders.size() + ")", defenderScrollPane);
                }

                resultPanel.add(tabbedPane, BorderLayout.CENTER);
            }

            resultPanel.revalidate();
            resultPanel.repaint();
        });

        panel.add(controlPanel, BorderLayout.NORTH);
        panel.add(resultPanel, BorderLayout.CENTER);

        contentPanel.add(panel, FILTER_ARMOR_PANEL);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            SiegePickerGUI gui = new SiegePickerGUI();
            gui.setVisible(true);
        });
    }
}
