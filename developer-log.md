# Developer Log (AI Augmentation)

### READ THROUGH FULLY BEFORE SUBMITTING !!!!!!!!!

Date: 2026-02-25  
Author: cam-williams-1

## 1) AI Strategy (Context + Steering)

### Context I provided to the AI

- Project goal: A simple shopping web app using React that handles adding items to a shopping cart and manages state, API calls, UI changes, and testing.
- Scope limits: Only front-end. Items from API. Single page application. Locally hosted.
- Data/API schemas shared: Items API: (https://fakestoreapi.com/products.)
- Validation + security rules:
- Performance constraints: Asked to use BEM Methodology. Never delete anything without my permission.
- Definition of done: Fully functioning web app that adds/removes items from a shopping cart and manages cart state and price in the cart.

### Prompting approach

1. Asked for a high-level plan and risk checklist.
2. After creating the file structure that I wanted, I prompted Copilot to build each component using BEM Methodology and I then refactored as needed.
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

## 3) Verification (AI-Assisted Testing for Edge Cases)

### How AI helped generate edge cases

- Suggested Jest and Babel for testing and I walked it through setting up dependencies.

### Tests I added based on AI suggestions

- Test 1:
- Test 2:
- Test 3:
- Notes on determinism (fixed time, seeded data, mocks):

## 4) Final Checklist

- [ ] All tests passing
- [ ] Lint/format passing
- [ ] No secrets in logs
- [ ] Error handling reviewed
