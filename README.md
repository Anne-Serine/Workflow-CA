# Workflow CA

## Package Quality Improvement

This project aims to enhance the quality of an existing application by establishing efficient development workflows and implementing a robust testing strategy. The primary objectives include configuring the project with ESLint, Prettier, and commit hooks for code quality assurance, setting up GitHub Actions for continuous integration, and integrating Jest and Cypress for testing purposes.

---

[![Automated Unit Testing](https://github.com/Anne-Serine/Workflow-CA/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Anne-Serine/Workflow-CA/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/Anne-Serine/Workflow-CA/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Anne-Serine/Workflow-CA/actions/workflows/e2e-test.yml)

[![Deploy static content to Pages](https://github.com/Anne-Serine/Workflow-CA/actions/workflows/pages.yml/badge.svg)](https://github.com/Anne-Serine/Workflow-CA/actions/workflows/pages.yml)

---

## Table of Content

**Installation and configuration**

 - ESLint
 - Prettier
 - Pre-commit hooks
 - Jest
 - Cypress

**Tests**

 - Unit testing using Jest
 - e2e-testing with Cypress

 **Github Actions**

 - Workflow script for deploying static content to Github Pages
 - Workflow script for automated unit testing
 - Workflow script for automated e2e-testing

 ---

### Unit Testing

  - The login function stores a token when provided with valid credentials
  - The logout function clears the token from browser storage

### E2E Testing

  - The user can log in with the login form with valid credentials
  - The user cannot submit the login form with invalid credentials and is shown a message
  - The user can log out with the logout button

---

## Installation

To install and run this project locally, follow these steps:

1. Navigate to the project directory on your machine:
> cd your-project-folder

2. Clone this repository to your machine:
> git clone https://github.com/Anne-Serine/Workflow-CA.git

3. Install dependencies:
> npm install

## Test

Run the following command to start test with Jest and Cypress:
> npm run test