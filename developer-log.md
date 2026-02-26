# Developer Log (AI Augmentation)

Date: 2026-02-26  
Author: cam-williams-1

## 1) AI Strategy (Context + Steering)

### Context I provided to the AI

- Project goal: A simple shopping web app using React that handles adding items to a shopping cart and manages state, API calls, UI changes, and testing.
- Scope limits: Only front-end. Items from API. Single page application. Locally hosted.
- Data/API schemas shared: Items API: (https://fakestoreapi.com/products.)
- Definition of done: Fully functioning web app that adds/removes items from a shopping cart and manages cart state and price in the cart.

### Prompting approach

1. Asked for a high-level plan and risk checklist.
2. After creating the file structure that I wanted, I prompted Copilot to build each component then I refactored as needed.
3. Asked Copilot to create tests for the api calls and refactored as needed - ensuring failure-path coverage.
4. Iterated with targeted prompts when issues were found (see Human Audit).

## 2) Human Audit (Corrections / Refinements)

### Audit Item 1 —

- AI suggestion: Installing more dependencies for a syntax error.
- Issue: Jest testing suite was failing due to syntax error.
- Fix applied: Justed needed an update to the code itself.

### Audit Item 2 -

- AI suggestion: adding a function to rename the api title to name.
- Issue: I wrote item.name instead of title.
- Fix Applied: Changed it to title. No need for a whole function for that.

### Audit Item 3 -

- AI Suggestion: update the testing suite to use mock items so the tests will pass
- Issue: Testing suite is failing
- Fix Applied: Updated tests to accurately test the data from the API.

### Audit Item 4 -

- AI Suggestion: Chaning my entire code base to be compatible with ESM rules.
- Issue: Testing was failing.
- Fix Applied: Uninstalled node-fetch and installed node-fetch@2. Everything passed.

## 3) Verification (AI-Assisted Testing for Edge Cases)

### How AI helped generate edge cases

- AI suggested Jest and Babel for testing and I walked it through setting up dependencies and then created tests for the api and seperate tests for the cart functionality. Both of with can be run using npm test.
