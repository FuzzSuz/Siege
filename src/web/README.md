# Rainbow Six Siege Operator Picker - Web Version

This is a web-based version of the Rainbow Six Siege Operator Picker application, converted from a Java Swing desktop application to a web application using HTML, CSS, and JavaScript.

## Features

- View all operators (attackers and defenders)
- Get a random attacker
- Get a random defender
- Get a random strategy (attack or defense)
- Filter operators by speed rating
- Filter operators by armor rating

## Project Structure

```
src/web/
├── index.html         # Main HTML file
├── css/
│   └── styles.css     # CSS styles
├── js/
│   ├── data.js        # Data models and initialization
│   └── app.js         # Application logic
└── README.md          # This file
```

## How to Run Locally

1. Simply open the `index.html` file in a web browser.

   ```
   # Using a local web server (recommended)
   # If you have Python installed:
   cd src/web
   python -m http.server
   # Then open http://localhost:8000 in your browser

   # Or just double-click the index.html file to open it directly in a browser
   ```

## Deployment Options

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

### Vercel (Free Tier)

1. Sign up for a [Vercel](https://vercel.com/) account.
2. Click "Import Project".
3. Import your Git repository.
4. Set the root directory to `src/web`.
5. Click "Deploy".
6. Your site will be published with a Vercel subdomain.
7. You can set up a custom domain in the project settings.

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
   - Set the public directory to the current directory (where your index.html is).
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
2. Upload all the files in this directory to your hosting account using FTP or the hosting provider's file manager.
3. Your site will be accessible at your domain or subdomain.

## Implementation Details

### Data Models

The application uses JavaScript classes to represent the data models:

- `Operator`: Represents a Rainbow Six Siege operator with properties for name, side (Attacker/Defender), special ability, primary weapon, speed, and armor.
- `Strategy`: Represents an attack or defense strategy with properties for name, description, and side.
- `SiegePicker`: Manages the operators and strategies, providing methods to retrieve them based on various criteria.

### User Interface

The user interface is built using HTML and CSS, with JavaScript handling the dynamic content and user interactions. The interface includes:

- A sidebar for navigation
- Panels for each feature
- Tabs for separating attackers and defenders
- Cards for displaying operator and strategy information
- Action buttons for triggering random selections and filters

## Converting from Java to Web

This web application is a direct port of the Java Swing application, with the following mappings:

- Java classes → JavaScript classes
- Swing panels → HTML div elements with CSS
- Swing buttons → HTML buttons with JavaScript event listeners
- Swing tabs → Custom tab implementation using HTML, CSS, and JavaScript
- Swing cards → HTML templates with CSS styling

## Future Improvements

Potential improvements for the web application:

1. Add operator images
2. Implement a responsive design for mobile devices
3. Add a search functionality
4. Add more filtering options (e.g., by weapon type)
5. Add a map selection feature
6. Implement user accounts to save favorite operators and strategies
