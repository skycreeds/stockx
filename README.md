# StockX - Paper Trading Application

StockX is a simple **paper trading** application built with **React**. It allows users to simulate stock trading using virtual currency, making it a great tool for learning about the stock market without financial risk.

## Features

- Simulate buying and selling stocks with virtual money.
- Track your portfolio performance over time.
- View real-time stock data and interactive charts.
- User-friendly interface for a seamless trading experience.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS recommended) [Download here](https://nodejs.org/)
- **Git** (optional, for cloning the repository) [Download here](https://git-scm.com/)

### Steps to Install

1. **Clone the Repository**
   ```bash
   git clone https://github.com/skycreeds/stockx.git
   cd stockx
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```

## Running the Application

### Start Development Server
Run the following command to start the development server:
```bash
npm start
```
This will launch the application at `http://localhost:3000` in your browser.

### Build for Production
To create an optimized production build, run:
```bash
npm run build
```
This will generate a `build/` folder with the optimized static files.

### Running Tests
To run tests for the project, execute:
```bash
npm test
```

## Folder Structure
```
stockx/
│-- src/                # Source code
│   │-- components/      # Reusable React components
│   │-- pages/           # Application pages
│   │-- services/        # API and data fetching services
│   │-- styles/          # CSS/SCSS files
│-- public/             # Static files
│-- package.json        # Dependencies and scripts
│-- README.md           # Project documentation
```

## Technologies Used

- **React** - Frontend UI framework
- **JavaScript (ES6+)** - Main programming language
- **CSS/SASS** - Styling and layout
- **Axios** - API requests
- **Chart.js** - Stock charts and data visualization
- **React Router** - Navigation and routing

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Create a Pull Request for review.

## License
This project is licensed under the **MIT License**.

---

🚀 **Happy Trading!**
