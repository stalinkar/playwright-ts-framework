# Enterprise Playwright Automation Framework 🎭

![Playwright](https://img.shields.io/badge/Playwright-1.40+-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CI/CD](https://img.shields.io/badge/GitHub%20Actions-CI-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

A robust, scalable, and maintainable test automation framework built with **Playwright** and **TypeScript**. Designed for high-performance UI and API testing in enterprise environments.

## 🚀 Key Features

* **Page Object Model (POM):** Clear separation between test logic and page interaction logic using a solid base class inheritance structure.
* **Dependency Injection (Fixtures):** Custom Playwright fixtures to automatically initialize and inject Page Objects and API Clients into tests.
* **Hybrid Testing (UI + API):** Built-in `APIClient` to handle backend state setup (e.g., login, cart manipulation) for faster UI tests.
* **Smart Configuration:** Centralized `Config` management supporting multiple environments (QA, Staging, Prod) via `.env` files.
* **Robust Reporting:** Integrated **Allure Report** for rich visualization and standard HTML reports for quick feedback.
* **Observability:** Structured logging (Winston), automatic screenshots on failure, video recording, and Trace Viewer integration.
* **CI/CD Ready:** Pre-configured GitHub Actions workflow for automated execution on Pull Requests.

---

## 📂 Project Structure

```text
my-framework/
├── .github/workflows/   # CI/CD Pipeline configurations
├── config/              # Environment-specific configuration files
├── src/
│   ├── fixtures/        # Custom Playwright Fixtures (Dependency Injection)
│   ├── pages/           # Page Object Models (Locators & Methods)
│   ├── resources/       # Test Data (JSONs)
│   ├── tests/           # Spec files (Tests)
│   └── utils/           # Utilities (APIClient, Logger, Config)
├── .env                 # Local secrets (Not committed to repo)
├── playwright.config.ts # Main Playwright Configuration
└── tsconfig.json        # TypeScript Configuration
```
🛠️ Prerequisites
Node.js: v18 or higher

npm: v9 or higher

⚙️ Installation
1. Clone the repository:

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install dependencies:

```
npm install
```
3. Install Playwright browsers:
```
npx playwright install --with-deps
```
