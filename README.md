# Rainbow Six Siege Operator Picker

A tool for Rainbow Six Siege players to browse operators, get random operator suggestions, and explore strategies.

## Project Overview

This project includes two versions of the Rainbow Six Siege Operator Picker:

1. **Java Swing Desktop Application**: The original version built with Java Swing.
2. **Web Application**: A web-based version built with HTML, CSS, and JavaScript.

Both versions provide the same core functionality but with different user interfaces.

## Features

- View all operators (attackers and defenders)
- Get a random attacker
- Get a random defender
- Get a random strategy (attack or defense)
- Filter operators by speed rating
- Filter operators by armor rating

## Project Structure

```
Siege_Picker/
├── src/
│   ├── Main.java                # Entry point for the Java application
│   ├── Operator.java            # Operator data model
│   ├── SiegePicker.java         # Core functionality
│   ├── SiegePickerGUI.java      # Java Swing GUI
│   ├── Strategy.java            # Strategy data model
│   └── web/                     # Web application
│       ├── index.html           # Main HTML file
│       ├── css/
│       │   └── styles.css       # CSS styles
│       ├── js/
│       │   ├── data.js          # Data models and initialization
│       │   └── app.js           # Application logic
│       └── README.md            # Web application documentation
└── README.md                    # This file
```

## Java Application

### Requirements

- Java Development Kit (JDK) 8 or higher

### How to Run

1. Compile the Java files:
   ```
   javac src/*.java
   ```

2. Run the application:
   ```
   java -cp src Main
   ```

## Web Application

### How to Run Locally

1. Navigate to the web directory:
   ```
   cd src/web
   ```

2. Open the `index.html` file in a web browser:
   ```
   # Using a local web server (recommended)
   # If you have Python installed:
   python -m http.server
   # Then open http://localhost:8000 in your browser

   # Or just double-click the index.html file to open it directly in a browser
   ```

For more details about the web application, see the [Web Application README](src/web/README.md).

## Deploying the Web Application

To make the web application accessible to others online, you can deploy it to a static website hosting service. Here are several options:

### GitHub Pages (Free)

1. Create a GitHub repository for your project.
2. Push your code to the repository.
3. Go to the repository settings.
4. Scroll down to the "GitHub Pages" section.
5. Select the branch you want to deploy (usually `main` or `master`).
6. Set the folder to `/src/web`.
7. Click "Save".
8. Your site will be published at `https://yourusername.github.io/repositoryname`.

### Netlify (Free Tier)

1. Sign up for a [Netlify](https://www.netlify.com/) account.
2. Click "New site from Git".
3. Connect your GitHub/GitLab/Bitbucket account and select your repository.
4. Set the build command to blank (not needed for this static site).
5. Set the publish directory to `src/web`.
6. Click "Deploy site".
7. Your site will be published with a Netlify subdomain (e.g., `your-site-name.netlify.app`).
8. You can set up a custom domain in the site settings.


### Firebase Hosting (Free Tier)

1. Sign up for a [Firebase](https://firebase.google.com/) account.
2. Install the Firebase CLI:
   ```
   npm install -g firebase-tools
   ```
3. Log in to Firebase:
   ```
   firebase login
   ```
4. Initialize your project:
   ```
   firebase init
   ```
   - Select "Hosting" when prompted.
   - Set the public directory to `src/web`.
   - Configure as a single-page app: No.
   - Set up automatic builds and deploys: No.
5. Deploy your site:
   ```
   firebase deploy
   ```
6. Your site will be published at `https://your-project-id.web.app`.

### Traditional Web Hosting

If you prefer traditional web hosting:

1. Sign up for a web hosting service (e.g., Bluehost, HostGator, DreamHost).
2. Upload the contents of the `src/web` directory to your hosting account using FTP or the hosting provider's file manager.
3. Your site will be accessible at your domain or subdomain.

## Converting from Java to Web

The web application is a direct port of the Java Swing application, with the following mappings:

- Java classes → JavaScript classes
- Swing panels → HTML div elements with CSS
- Swing buttons → HTML buttons with JavaScript event listeners
- Swing tabs → Custom tab implementation using HTML, CSS, and JavaScript
- Swing cards → HTML templates with CSS styling

## Future Improvements

Potential improvements for both applications:

1. Add operator images
2. Implement a responsive design for the web version
3. Add a search functionality
4. Add more filtering options (e.g., by weapon type)
5. Add a map selection feature
6. Implement user accounts to save favorite operators and strategies

## License

This project is for educational purposes only. Rainbow Six Siege is a trademark of Ubisoft Entertainment.
