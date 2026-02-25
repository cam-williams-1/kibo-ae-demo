# Developer Log (AI Augmentation)

### READ THROUGH FULLY BEFORE SUBMITTING !!!!!!!!!

Date: 2026-02-25  
Author: cam-williams-1

## 1) AI Strategy (Context + Steering)

### Context I provided to the AI

- Project goal: A simple shopping web app using React that handles adding items to a shopping cart and manages state, API calls, UI changes, and testing.
- Non-goals / scope limits: Only front-end. Items from API. Single page application. Locally hosted. Detailed README for reviewer to test.
- Key repo paths / architecture notes:
- Data/API schemas shared: Items API: (https://fakestoreapi.com/products.)
- Validation + security rules:
- Performance constraints:
- Definition of done: Fully functioning web app that adds/removes items from a shopping cart and manages cart state and price in the cart.

### Prompting approach

1. Asked for a high-level plan and risk checklist.
2. Asked for a minimal implementation proposal that matches existing patterns.
3. Asked for tests, specifically requesting edge cases and failure-path coverage.
4. Iterated with targeted prompts when issues were found (see Human Audit).

## 2) Human Audit (Corrections / Refinements)

### Audit Item 1 — [Security] (e.g., Authorization / IDOR)

- AI suggestion:
- Issue:
- Fix applied:
- Verification (tests/tools):

### Audit Item 2 — [Security] (e.g., Input validation / injection)

- AI suggestion:
- Issue:
- Fix applied:
- Verification:

### Audit Item 3 — [Performance/Correctness] (e.g., N+1 query / caching / transaction)

- AI suggestion:
- Issue:
- Fix applied:
- Verification:

(Include more if you have them.)

## 3) Verification (AI-Assisted Testing for Edge Cases)

### How AI helped generate edge cases

- Prompt summary:
- Edge-case matrix produced:

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
