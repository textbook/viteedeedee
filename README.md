# ViTeeDeeDee

Vite/st & Playwright [TDD] setup

## Dev setup

Requires [Node.js] v20 ("Iron" LTS, `^20.9`) and [NPM] v10 (bundled with Node).

- [Create][github-create] a repository from this template
- [Clone][github-clone] your new repository to your local machine
- Run `npm ci` to install the dependencies
- Run `npx playwright install` to install browsers for end-to-end tests
- Run `npm run ship` to ensure everything is working

## Tools

The following tools are in use if you need further documentation:

- [React] application
- [Vite] dev server and bundling
- [ESLint] linting rules
- [Vitest] and [React Testing Library] low-level tests (unit/integration)
- [Playwright] high-level tests (end-to-end)

## Scripts

The following scripts are the entrypoints you'll commonly use:

- `npm run dev`: Run the app in development mode
- `npm run e2e`: Run the high-level tests (also starts the app in production mode)
- `npm run lint`: Run the ESLint style checks
    - `npm run lint:fix`: Fix style issues where possible
- `npm run ship`: run `lint`, then `test`, then `e2e`
- `npm run start`: Start the app in production mode
- `npm run test`: Run the low-level tests once
    - `npm run lint:cover`: Run the tests and report [coverage][vitest-coverage]
    - `npm run lint:watch`: Run the tests in watch mode

[eslint]: https://eslint.org/
[github-clone]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
[github-create]: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template
[node]: https://nodejs.org/en
[npm]: https://www.npmjs.com/
[playwright]: https://playwright.dev/
[react]: https://react.dev/
[react testing library]: https://testing-library.com/docs/react-testing-library/intro/
[tdd]: https://testdriven.io/test-driven-development/
[vite]: https://vitejs.dev/
[vitest]: https://vitest.dev/
[vitest-coverage]: https://vitest.dev/guide/coverage.html
