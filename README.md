# QA Engineer Technical Assessment

This repository contains my submission for the QA Engineer Technical Assessment. The assessment covers exploratory testing, UI automation, and API testing.

## Assessment Scope

### 1. Exploratory Testing and Defect Reporting
Exploratory testing was carried out on the SauceDemo e-commerce web application for the following features:
- Login
- Add and remove products from cart
- Filter products by all available options
- View cart
- Checkout

### Here are the links to the Testcase, Test Stratergy and Default Report
Test Case: https://docs.google.com/spreadsheets/d/1rrNn1pBnzBBSAq92SoFDECIe5ruq_8z6CjK9TO4PT7k/edit?usp=sharing    
Test Stratergy, Default Report and Improvent Suggestions: https://docs.google.com/document/d/1DC3mjU0eZLLBFsECLFdrXh3ewHVfu3_dZdelkofhkg4/edit?usp=sharing

## How to Execute Manual Testing
1. Open the SauceDemo website in a browser
2. Log in with the provided credentials:
3. problem_user / secret_sauce
4. standard_user / secret_sauce
5. Execute the documented test cases
6. Record outcomes in the test execution report
7. Log defects where applicable
8. Review improvement suggestions
9. UI Automation

### 2. UI Automation
High-priority user flows from the SauceDemo application were automated using Cypress.

### 3. API Testing
API tests were written in Postman for the **Users endpoint** in the Swagger Petstore API collection, as required in the assessment.

---

## Tools Used
Postman
Cypress
Git and GitHub
Google Chrome
VS Code
Excel / Google Sheets


## Notes 

## Prerequisites Note

Execution of this assessment depends on access to the SauceDemo website, Swagger Petstore API, internet connectivity, and the required testing tools being installed locally.

## Observations
1. SauceDemo provides multiple test accounts with different simulated behaviors
2. The problem_user account exposes inconsistent UI behavior that is useful during exploratory testing
3. The standard_user account provides a more stable baseline for validating core flows
4. The Swagger Petstore Users endpoint supports major user operations such as create, retrieve, update, login, logout, and delete

## Blockers
1. No major blocker prevented completion of the assessment
2. Temporary network issues or third-party endpoint instability may affect execution results
3. Some SauceDemo behaviors may be intentionally simulated as part of the test environment

## Additional Notes
1. Only the Users endpoint was tested for the API section, based on the assessment instruction
2. UI automation was implemented only for selected high-priority flows
3. All tests were written and executed locally before being pushed to GitHub

## Repository Structure

```text
qa-engineer-technical-assessment/
├── README.md
├── api-testing/
├── ui-automation/
├── Saucedemo Testing/


