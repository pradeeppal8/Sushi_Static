# My React App

A small starter project created with Vite and React (TypeScript). Includes a responsive header, mobile menu, banner, and footer.

## Prerequisites

- Node.js (LTS) installed. Verify with:

```powershell
node -v
npm -v
```

## Quick start (Windows PowerShell)

```powershell
# from the project root
cd "D:\pradeep\Icon show\Ai-website\my-react-app"

# install dependencies
npm install

# start dev server (HMR)
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

Notes
- The project was scaffolded with Vite and uses TypeScript (.tsx files). If you prefer JavaScript files, convert the files accordingly.
- The `test` and `lint` scripts are optional. CI will run `npm run test --if-present` so the workflow won't fail if you don't have tests yet.

## CI

This repo includes a GitHub Actions workflow at `.github/workflows/ci.yml` that installs dependencies, runs a production build, and runs tests (if present) on every push and pull request.

## Deploy

You can deploy the `dist/` (or `build/`) output to static hosts like Vercel, Netlify, or GitHub Pages. Vercel works out of the box with Vite projects.

## License

Choose a license and add it to the repo (e.g., MIT). This project is unlicensed by default.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
