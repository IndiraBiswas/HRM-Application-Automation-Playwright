## HRM-Application-Automation-Playwright

## Overview
This repository contains Playwright-based automation scripts for testing HR application workflows on the OrangeHRM platform. The tests cover various functionalities, ensuring reliability and efficiency in HR processes.

## Features
- Automated testing of key OrangeHRM workflows
- End-to-end testing scenarios using Playwright
- Validations for login, employee management
- Cross-browser testing support


## Prerequisites
Ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- Playwright (`npm install playwright`)
- Dependencies (`npm install`)

## Installation
Clone the repository and install dependencies:
```sh
https://github.com/IndiraBiswas/HRM-Application-Automation-Playwright.git
cd HRM-Application-Automation-Playwright
npm install
```

## Running Tests
To execute the test suite, use:
```sh
npx playwright test
```
Run tests in headed mode for debugging:
```sh
npx playwright test --headed
```
Run a specific test file:
```sh
npx playwright test tests/<filename>
```

## Reporting
Playwright provides built-in HTML reports. To generate and view reports:
```sh
npx playwright show-report
```

## Contribution
Contributions are welcome! Feel free to fork the repository and submit a pull request with improvements.


## Contact
For questions or discussions, feel free to reach out or open an issue in this repository.

