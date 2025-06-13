import javax.swing.SwingUtilities;

public class Main {
    public static void main(String[] args) {
        // Launch the graphical user interface
        SwingUtilities.invokeLater(() -> {
            SiegePickerGUI gui = new SiegePickerGUI();
            gui.setVisible(true);
        });
    }
}
