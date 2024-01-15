# ViTeeDeeDee

Vite/st & Playwright [TDD] setup

## Dev setup

Requires [Node.js] v20 ("Iron" LTS, `^20.9`) and [NPM] v10 (bundled with Node).

- [Create][github-create] a repository from this template
- [Clone][github-clone] your new repository to your local machine
- Run `npm ci` to install the dependencies
- Run `npx playwright install` to install browsers for end-to-end tests
- Run `npm run ship` to ensure everything is working

## Deployment

The CI pipeline defined in `.github/workflows/push.yml` will automatically push the built site to the `gh-pages` branch for any successful build on the `main` branch. To serve this via GitHub Pages:

- [Configure][github-publish] GitHub to deploy from `gh-pages` branch
- [Set][vite-deploy] the `base` value in `vite.config.js` to either:
    - `"/<repo_name>/"` for a _project site_; or
    - `"/"` for a _user site_ (i.e. a repo named `<user_name>.github.io`).
- Push your changes and wait for the various builds to run, then you should be able to [visit][github-visit] your site.

## Tools

The following tools are in use if you need further documentation:

- [React] application
- [Vite] dev server and bundling
- [ESLint] linting rules
- [Vitest] low-level tests (unit/integration)
    - [React Testing Library] to render and interact with React
    - [MSW] to allow mocking of network requests
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
    - `npm run test:cover`: Run the tests and report [coverage][vitest-coverage]
    - `npm run test:watch`: Run the tests in watch mode

[eslint]: https://eslint.org/
[github-clone]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
[github-create]: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template
[github-publish]: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch
[github-visit]: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site
[msw]: https://mswjs.io/
[node.js]: https://nodejs.org/en
[npm]: https://www.npmjs.com/
[playwright]: https://playwright.dev/
[react]: https://react.dev/
[react testing library]: https://testing-library.com/docs/react-testing-library/intro/
[tdd]: https://testdriven.io/test-driven-development/
[vite]: https://vitejs.dev/
[vite-deploy]: https://vitejs.dev/guide/static-deploy.html#github-pages
[vitest]: https://vitest.dev/
[vitest-coverage]: https://vitest.dev/guide/coverage.html
