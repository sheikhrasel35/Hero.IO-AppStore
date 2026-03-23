📱 Hero.IO APP Store
Hero.IO is your ultimate destination for discovering and managing PC applications effortlessly. Explore a wide range of software—from productivity tools and creative apps to entertainment and utilities—all in one place. With Hero.IO, you can easily search for apps, install them with a single click, and uninstall them just as quickly, keeping your PC organized and optimized. Whether you’re a casual user or a power user, Hero.IO makes managing your software simple, fast, and convenient.

🔗 Live Demo
🚀 https://69c0be528945e4e7c83fe321--cute-churros-f0c64c.netlify.app/

📲 App Features
Browse & Discover Apps: Explore a wide range of software, including productivity, entertainment, and utilities.

Search Functionality: Quickly find the apps you need with an intuitive search feature.

Install & Uninstall: Easily install and uninstall apps with a single click.

Cross-Device Compatibility: Works seamlessly on PCs, laptops, and tablets.

User-Friendly Interface: Simple, fast, and easy-to-navigate design for all users.

Install & Uninstall: Easily install and uninstall apps with a single click.

Install & Uninstall Notifications: Get instant success alerts when you install or uninstall apps using React-Toastify.

Cross-Device Compatibility: Works seamlessly on PCs, laptops, and tablets.

User-Friendly Interface: Simple, fast, and easy-to-navigate design for all users.

UI Toggle System
Simple form switching between different features (App Store, App Install, Uninstall, Search, etc.)
Active button highlighting

🛠️ Tech Stack

Frontend: React.js
Routing & Layouts: React Router, nested layouts
Components: Reusable React components for UI elements
Styling: Tailwind CSS
Charts & Data Visualization: Recharts (for bar/vertical charts)
Animations & Feedback: CSS animations, React loading components, React-Toastify for notifications
State Management: React Hooks (useState, useEffect, etc.)

📂 Project Structure
/project-folder 
├── public/               # Public assets like index.html
├── src/
│ ├── assets/             # Images, icons, and other media
│ ├── components/         # Reusable React components
│ ├── hooks/              # Custom React hooks
│ ├── Layouts/            # Layout components for different pages
│ ├── Pages/              # Individual page components
│ ├── Routes/             # Routing configuration files
│ ├── App.jsx             # Main App component
│ ├── App.css             # Global styles
│ ├── index.css           # Base CSS
│ └── main.jsx            # Entry point for React
├── .gitignore            # Git ignore file
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency tree lock
├── README.md             # Project documentation
└── vite.config.js        # Vite configuration

⚙️ How It Works
Initial Balance → Starts with available balance shown on UI.

User Actions → Choose feature (Add Money, Cash Out, Transfer, Pay Bill, Bonus).

Validation

Account numbers must be 11+ digits.
Amounts must be greater than 0 (and not exceed available balance).
PIN must match the predefined validPin (Default 1234).
Transaction Updates

Balance is updated dynamically.
Transaction log is updated in history.


📌 Future Improvements
Persistent storage with localStorage or database
Responsive design improvements
Dark mode UI
