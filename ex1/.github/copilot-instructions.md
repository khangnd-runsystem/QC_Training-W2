# Copilot Instructions for AI Coding Agents

## Project Overview
This is a minimal TypeScript project, structured for clarity and strict type safety. The main entry point is `src/index.ts`. The project uses TypeScript configuration options to enforce strict type checking and modern module standards.

## Architecture
- **Single-module structure:** All code resides in `src/`, with `index.ts` as the main file.
- **No frameworks or external dependencies** are present by default. If you add dependencies, update this document.
- **Output directory:** Compiled files are emitted to `dist/`.

## TypeScript Conventions
- **Strict type safety:**
  - `strict`, `strictNullChecks`, and `exactOptionalPropertyTypes` are enabled in `tsconfig.json`.
  - Always handle `null` and `undefined` explicitly in code.
- **Module system:** Uses `nodenext` and targets `esnext` for compatibility with modern Node.js and ECMAScript features.
- **Source maps and declarations:** Both are generated for debugging and type support.

## Developer Workflows
- **Build:** Use `tsc` to compile TypeScript files. Output goes to `dist/`.
- **Debug:** Use source maps for debugging in Node.js or compatible editors.
- **No test framework is present.** If you add tests, document the workflow here.

## Patterns and Practices
- **Function signatures:** Always specify types for parameters and return values.
- **Error handling:** Handle possible `null`/`undefined` values due to strict type settings.
- **No custom conventions** beyond strict TypeScript usage.

## Key Files
- `src/index.ts`: Main entry point. Example pattern:
  ```typescript
  function greet(name: string) {
      console.log("HELLO" + name.toUpperCase());
  }
  greet("world");
  ```
- `tsconfig.json`: Enforces strict type safety and modern module settings.

## Integration Points
- If you add external libraries, document their usage and integration patterns here.

---
**Update this file if you introduce new workflows, dependencies, or architectural changes.**
