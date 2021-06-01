# How to setup Cypress with TypeScript?

In this project we will do the following: -
1. Create a Cypress Project using npm install cypress typescript mocha cypress-multi-reporters mochawesome mochawesome-merge mochawesome-report-generator
2. Convert the default support and plugins JS files into respective TS files.
3. Add TSCONFIG.JSON file to setup our project to work with TypeScript.
4. Write Test cases using Data-Driven, POM approach and generate Mochawesome HTML report at the end. Also, we would write one test case to cover cy.task.
5. We would write custom command and enable intellisense for the same.

## So, let's begin

1. Create a Cypress Project and add the following dependencies -
```
npm install cypress typescript mocha cypress-multi-reporters mochawesome mochawesome-merge mochawesome-report-generator
```
2. Replace the plugins/index.js file with an index.ts file and change the existing code
```
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on("task", {
    // Define task functions
  });
  return config;
};
```
to the following
```
export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  // No more webpack preprocessor here for TS support! Yay!

  on('task', {
    // Define task functions
  });

  return config;
};
```
3. Replace the support/commands.js file with a commands.ts file
4. Replace the support/index.js file with an index.ts file
5. Create tsconfig.json file at the root of your project
```
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */
    /* Basic Options */
    // "incremental": true,                         /* Enable incremental compilation */
    "target": "es6", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "CommonJS", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "lib": [
      "es6",
      "dom"
    ], /* Specify library files to be included in the compilation. */
    // "allowJs": false, /* Allow javascript files to be compiled. */
    // "checkJs": true,                             /* Report errors in .js files. */
    // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
    // "declaration": true,                         /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                           /* Generates corresponding '.map' file. */
    // "outFile": "./",                             /* Concatenate and emit output to single file. */
    // "outDir": "./",                              /* Redirect output structure to the directory. */
    // "rootDir": "./",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                           /* Enable project compilation */
    // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information */
    // "removeComments": true,                      /* Do not emit comments to output. */
    // "noEmit": true,                              /* Do not emit outputs. */
    // "importHelpers": true,                       /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
    /* Strict Type-Checking Options */
    "strict": true, /* Enable all strict type-checking options. */
    "noImplicitAny": true, /* Raise error on expressions and declarations with an implied 'any' type. */
    "strictNullChecks": true, /* Enable strict null checks. */
    "strictFunctionTypes": true, /* Enable strict checking of function types. */
    "strictBindCallApply": true, /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    "strictPropertyInitialization": true, /* Enable strict checking of property initialization in classes. */
    "noImplicitThis": true, /* Raise error on 'this' expressions with an implied 'any' type. */
    "alwaysStrict": true, /* Parse in strict mode and emit "use strict" for each source file. */
    /* Additional Checks */
    "noUnusedLocals": true, /* Report errors on unused locals. */
    "noUnusedParameters": true, /* Report errors on unused parameters. */
    "noImplicitReturns": true, /* Report error when not all code paths in function return a value. */
    "noFallthroughCasesInSwitch": true, /* Report errors for fallthrough cases in switch statement. */
    "noUncheckedIndexedAccess": true, /* Include 'undefined' in index signature results */
    "noPropertyAccessFromIndexSignature": true, /* Require undeclared properties from index signatures to use element accesses. */
    /* Module Resolution Options */
    // "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. */
    // "paths": {},                                 /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                             /* List of folders to include type definitions from. */
    "types": [
      "cypress",
      "cypress-file-upload",
      "./cypress/support/"
    ], /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true, /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. */
    /* Source Map Options */
    // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
    /* Experimental Options */
    // "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */
    /* Advanced Options */
    "skipLibCheck": true, /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
  "include": [
    "cypress/"
  ],
  "exclude": [
    "node_modules"
  ]
}
```
6. Add Custom Command Intelisense -
  - For intellisense on custom commands, add an index.d.ts file under cypress/support folder and mention the commands like login custom command is done inside interface Chainable.
```
declare namespace Cypress {

    interface Chainable {
        /**
         * Login to the website.
         *
         * @see https://www.youtube.com/c/qaboxletstest/playlists
         * @example
         *    cy.login('email', 'password').click()          // Click on button
         */
        login(email: string, password: string): void
    }

}
```
  - In types flag of tscongig.json mention cypress/support/index.d.ts file 
  ```
  "types": [
      "cypress",
      "./cypress/support/"
    ]
   ```
