currentDirectory:: /home/src/workspace/projects useCaseSensitiveFileNames:: false
Input::
//// [/home/src/workspace/projects/project1/utils.d.ts]
export const y = 10;

//// [/home/src/workspace/projects/project1/file.ts]
export const file = 10;

//// [/home/src/workspace/projects/project1/core.d.ts]
export const core = 10;

//// [/home/src/workspace/projects/project1/index.ts]
export const x = "type1";

//// [/home/src/workspace/projects/project1/file2.ts]
/// <reference lib="webworker"/>
/// <reference lib="scripthost"/>
/// <reference lib="es5"/>


//// [/home/src/workspace/projects/project1/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "typeRoots": [
      "./typeroot1"
    ],
    "lib": [
      "es5",
      "dom"
    ],
    "traceResolution": true,
    "libReplacement": true
  }
}

//// [/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts]
export type TheNum = "type1";

//// [/home/src/workspace/projects/project2/utils.d.ts]
export const y = 10;

//// [/home/src/workspace/projects/project2/index.ts]
export const y = 10

//// [/home/src/workspace/projects/project2/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "lib": [
      "es5",
      "dom"
    ],
    "traceResolution": true,
    "libReplacement": true
  }
}

//// [/home/src/workspace/projects/project3/utils.d.ts]
export const y = 10;

//// [/home/src/workspace/projects/project3/index.ts]
export const z = 10

//// [/home/src/workspace/projects/project3/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "lib": [
      "es5",
      "dom"
    ],
    "traceResolution": true,
    "libReplacement": true
  }
}

//// [/home/src/workspace/projects/project4/utils.d.ts]
export const y = 10;

//// [/home/src/workspace/projects/project4/index.ts]
export const z = 10

//// [/home/src/workspace/projects/project4/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "lib": [
      "esnext",
      "dom",
      "webworker"
    ],
    "traceResolution": true,
    "libReplacement": true
  }
}

//// [/home/src/tslibs/TS/Lib/lib.dom.d.ts]
interface DOMInterface { }

//// [/home/src/tslibs/TS/Lib/lib.webworker.d.ts]
interface WebWorkerInterface { }

//// [/home/src/tslibs/TS/Lib/lib.scripthost.d.ts]
interface ScriptHostInterface { }

//// [/home/src/workspace/projects/node_modules/@typescript/unlreated/index.d.ts]
export const unrelated = 10;

//// [/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts]
interface DOMInterface { }

//// [/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts]
interface WebWorkerInterface { }

//// [/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.d.ts]
interface ScriptHostInterface { }

//// [/home/src/tslibs/TS/Lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/home/src/tslibs/TS/Lib/tsc.js -b -w project1 project2 project3 project4 --verbose --explainFiles --extendedDiagnostics
Output::
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Projects in this build: 
    * project1/tsconfig.json
    * project2/tsconfig.json
    * project3/tsconfig.json
    * project4/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'project1/tsconfig.json' is out of date because output file 'project1/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/workspace/projects/project1/tsconfig.json'...

======== Resolving module '@typescript/lib-webworker' from '/home/src/workspace/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
File '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/package.json' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-webworker.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-webworker.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-webworker.d.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts', result '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
======== Module name '@typescript/lib-webworker' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist.
File '/home/src/workspace/projects/node_modules/package.json' does not exist.
File '/home/src/workspace/projects/package.json' does not exist.
File '/home/src/workspace/package.json' does not exist.
File '/home/src/package.json' does not exist.
File '/home/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module '@typescript/lib-scripthost' from '/home/src/workspace/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-scripthost' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
File '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/package.json' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost.d.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.d.ts', result '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
======== Module name '@typescript/lib-scripthost' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module '@typescript/lib-es5' from '/home/src/workspace/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-es5' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-es5'
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5/package.json' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5.d.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts', result '/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts'.
======== Module name '@typescript/lib-es5' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving type reference directive 'sometype', containing file '/home/src/workspace/projects/project1/__inferred type names__.ts', root directory '/home/src/workspace/projects/project1/typeroot1'. ========
Resolving with primary search path '/home/src/workspace/projects/project1/typeroot1'.
File '/home/src/workspace/projects/project1/typeroot1/sometype.d.ts' does not exist.
File '/home/src/workspace/projects/project1/typeroot1/sometype/package.json' does not exist.
File '/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts', result '/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts'.
======== Type reference directive 'sometype' was successfully resolved to '/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts', primary: true. ========
======== Resolving module '@typescript/lib-dom' from '/home/src/workspace/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom/package.json' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom.d.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts', result '/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
node_modules/@typescript/lib-webworker/index.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
node_modules/@typescript/lib-scripthost/index.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
node_modules/@typescript/lib-es5/index.d.ts
  Library referenced via 'es5' from file 'project1/file2.ts'
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project1/core.d.ts
  Matched by default include pattern '**/*'
project1/file.ts
  Matched by default include pattern '**/*'
project1/file2.ts
  Matched by default include pattern '**/*'
project1/index.ts
  Matched by default include pattern '**/*'
project1/utils.d.ts
  Matched by default include pattern '**/*'
project1/typeroot1/sometype/index.d.ts
  Matched by default include pattern '**/*'
  Entry point for implicit type library 'sometype'
[[90mHH:MM:SS AM[0m] Project 'project2/tsconfig.json' is out of date because output file 'project2/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/workspace/projects/project2/tsconfig.json'...

======== Resolving module '@typescript/lib-es5' from '/home/src/workspace/projects/project2/__lib_node_modules_lookup_lib.es5.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-es5' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project2/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-es5'
Resolution for module '@typescript/lib-es5' was found in cache from location '/home/src/workspace/projects'.
======== Module name '@typescript/lib-es5' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module '@typescript/lib-dom' from '/home/src/workspace/projects/project2/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project2/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Resolution for module '@typescript/lib-dom' was found in cache from location '/home/src/workspace/projects'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
node_modules/@typescript/lib-es5/index.d.ts
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project2/index.ts
  Matched by default include pattern '**/*'
project2/utils.d.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Project 'project3/tsconfig.json' is out of date because output file 'project3/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/workspace/projects/project3/tsconfig.json'...

======== Resolving module '@typescript/lib-es5' from '/home/src/workspace/projects/project3/__lib_node_modules_lookup_lib.es5.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-es5' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project3/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-es5'
Resolution for module '@typescript/lib-es5' was found in cache from location '/home/src/workspace/projects'.
======== Module name '@typescript/lib-es5' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-es5/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module '@typescript/lib-dom' from '/home/src/workspace/projects/project3/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project3/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Resolution for module '@typescript/lib-dom' was found in cache from location '/home/src/workspace/projects'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
node_modules/@typescript/lib-es5/index.d.ts
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project3/index.ts
  Matched by default include pattern '**/*'
project3/utils.d.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Project 'project4/tsconfig.json' is out of date because output file 'project4/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/workspace/projects/project4/tsconfig.json'...

======== Resolving module '@typescript/lib-esnext' from '/home/src/workspace/projects/project4/__lib_node_modules_lookup_lib.esnext.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-esnext' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project4/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-esnext'
File '/home/src/workspace/projects/node_modules/@typescript/lib-esnext/package.json' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-esnext.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-esnext.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-esnext.d.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.ts' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.tsx' does not exist.
File '/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.d.ts', result '/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.d.ts'.
======== Module name '@typescript/lib-esnext' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-esnext/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module '@typescript/lib-dom' from '/home/src/workspace/projects/project4/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project4/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Resolution for module '@typescript/lib-dom' was found in cache from location '/home/src/workspace/projects'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-dom/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module '@typescript/lib-webworker' from '/home/src/workspace/projects/project4/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/workspace/projects/project4/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Resolution for module '@typescript/lib-webworker' was found in cache from location '/home/src/workspace/projects'.
======== Module name '@typescript/lib-webworker' was successfully resolved to '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts'. ========
File '/home/src/workspace/projects/node_modules/@typescript/lib-webworker/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/@typescript/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/node_modules/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/workspace/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
node_modules/@typescript/lib-esnext/index.d.ts
  Library 'lib.esnext.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
node_modules/@typescript/lib-webworker/index.d.ts
  Library 'lib.webworker.d.ts' specified in compilerOptions
project4/index.ts
  Matched by default include pattern '**/*'
project4/utils.d.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.

FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1/tsconfig.json 2000 undefined Config file /home/src/workspace/projects/project1/tsconfig.json
DirectoryWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1 1 undefined Wild card directory /home/src/workspace/projects/project1/tsconfig.json
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1 1 undefined Wild card directory /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1/core.d.ts 250 undefined Source file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1/file.ts 250 undefined Source file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1/file2.ts 250 undefined Source file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1/index.ts 250 undefined Source file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1/utils.d.ts 250 undefined Source file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts 250 undefined Source file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/node_modules/@typescript/lib-webworker/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/node_modules/@typescript/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/node_modules/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/node_modules/@typescript/lib-scripthost/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/node_modules/@typescript/lib-es5/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project1/typeroot1/sometype/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/node_modules/@typescript/lib-dom/package.json 2000 undefined package.json file /home/src/workspace/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project2/tsconfig.json 2000 undefined Config file /home/src/workspace/projects/project2/tsconfig.json
DirectoryWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project2 1 undefined Wild card directory /home/src/workspace/projects/project2/tsconfig.json
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project2 1 undefined Wild card directory /home/src/workspace/projects/project2/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project2/index.ts 250 undefined Source file /home/src/workspace/projects/project2/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project2/utils.d.ts 250 undefined Source file /home/src/workspace/projects/project2/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project3/tsconfig.json 2000 undefined Config file /home/src/workspace/projects/project3/tsconfig.json
DirectoryWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project3 1 undefined Wild card directory /home/src/workspace/projects/project3/tsconfig.json
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project3 1 undefined Wild card directory /home/src/workspace/projects/project3/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project3/index.ts 250 undefined Source file /home/src/workspace/projects/project3/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project3/utils.d.ts 250 undefined Source file /home/src/workspace/projects/project3/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project4/tsconfig.json 2000 undefined Config file /home/src/workspace/projects/project4/tsconfig.json
DirectoryWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project4 1 undefined Wild card directory /home/src/workspace/projects/project4/tsconfig.json
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project4 1 undefined Wild card directory /home/src/workspace/projects/project4/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project4/index.ts 250 undefined Source file /home/src/workspace/projects/project4/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/project4/utils.d.ts 250 undefined Source file /home/src/workspace/projects/project4/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/workspace/projects/node_modules/@typescript/lib-esnext/package.json 2000 undefined package.json file /home/src/workspace/projects/project4/tsconfig.json


//// [/home/src/workspace/projects/project1/file.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.file = void 0;
exports.file = 10;


//// [/home/src/workspace/projects/project1/file.d.ts]
export declare const file = 10;


//// [/home/src/workspace/projects/project1/file2.js]
/// <reference lib="webworker"/>
/// <reference lib="scripthost"/>
/// <reference lib="es5"/>


//// [/home/src/workspace/projects/project1/file2.d.ts]


//// [/home/src/workspace/projects/project1/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = "type1";


//// [/home/src/workspace/projects/project1/index.d.ts]
export declare const x = "type1";


//// [/home/src/workspace/projects/project1/tsconfig.tsbuildinfo]
{"fileNames":["../node_modules/@typescript/lib-webworker/index.d.ts","../node_modules/@typescript/lib-scripthost/index.d.ts","../node_modules/@typescript/lib-es5/index.d.ts","../node_modules/@typescript/lib-dom/index.d.ts","./core.d.ts","./file.ts","./file2.ts","./index.ts","./utils.d.ts","./typeroot1/sometype/index.d.ts"],"fileInfos":[{"version":"-3990185033-interface WebWorkerInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5403980302-interface ScriptHostInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-8673759361-interface DOMInterface { }","affectsGlobalScope":true,"impliedFormat":1},"-15683237936-export const core = 10;",{"version":"-16628394009-export const file = 10;","signature":"-9025507999-export declare const file = 10;\n"},{"version":"-11916614574-/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n","signature":"5381-"},{"version":"-11532698187-export const x = \"type1\";","signature":"-5899226897-export declare const x = \"type1\";\n"},"-13729955264-export const y = 10;","-12476477079-export type TheNum = \"type1\";"],"root":[[5,10]],"options":{"composite":true},"latestChangedDtsFile":"./index.d.ts","version":"FakeTSVersion"}

//// [/home/src/workspace/projects/project1/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../node_modules/@typescript/lib-webworker/index.d.ts",
    "../node_modules/@typescript/lib-scripthost/index.d.ts",
    "../node_modules/@typescript/lib-es5/index.d.ts",
    "../node_modules/@typescript/lib-dom/index.d.ts",
    "./core.d.ts",
    "./file.ts",
    "./file2.ts",
    "./index.ts",
    "./utils.d.ts",
    "./typeroot1/sometype/index.d.ts"
  ],
  "fileInfos": {
    "../node_modules/@typescript/lib-webworker/index.d.ts": {
      "original": {
        "version": "-3990185033-interface WebWorkerInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-3990185033-interface WebWorkerInterface { }",
      "signature": "-3990185033-interface WebWorkerInterface { }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../node_modules/@typescript/lib-scripthost/index.d.ts": {
      "original": {
        "version": "-5403980302-interface ScriptHostInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-5403980302-interface ScriptHostInterface { }",
      "signature": "-5403980302-interface ScriptHostInterface { }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../node_modules/@typescript/lib-es5/index.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../node_modules/@typescript/lib-dom/index.d.ts": {
      "original": {
        "version": "-8673759361-interface DOMInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-8673759361-interface DOMInterface { }",
      "signature": "-8673759361-interface DOMInterface { }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./core.d.ts": {
      "version": "-15683237936-export const core = 10;",
      "signature": "-15683237936-export const core = 10;"
    },
    "./file.ts": {
      "original": {
        "version": "-16628394009-export const file = 10;",
        "signature": "-9025507999-export declare const file = 10;\n"
      },
      "version": "-16628394009-export const file = 10;",
      "signature": "-9025507999-export declare const file = 10;\n"
    },
    "./file2.ts": {
      "original": {
        "version": "-11916614574-/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n",
        "signature": "5381-"
      },
      "version": "-11916614574-/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n",
      "signature": "5381-"
    },
    "./index.ts": {
      "original": {
        "version": "-11532698187-export const x = \"type1\";",
        "signature": "-5899226897-export declare const x = \"type1\";\n"
      },
      "version": "-11532698187-export const x = \"type1\";",
      "signature": "-5899226897-export declare const x = \"type1\";\n"
    },
    "./utils.d.ts": {
      "version": "-13729955264-export const y = 10;",
      "signature": "-13729955264-export const y = 10;"
    },
    "./typeroot1/sometype/index.d.ts": {
      "version": "-12476477079-export type TheNum = \"type1\";",
      "signature": "-12476477079-export type TheNum = \"type1\";"
    }
  },
  "root": [
    [
      [
        5,
        10
      ],
      [
        "./core.d.ts",
        "./file.ts",
        "./file2.ts",
        "./index.ts",
        "./utils.d.ts",
        "./typeroot1/sometype/index.d.ts"
      ]
    ]
  ],
  "options": {
    "composite": true
  },
  "latestChangedDtsFile": "./index.d.ts",
  "version": "FakeTSVersion",
  "size": 1752
}

//// [/home/src/workspace/projects/project2/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = void 0;
exports.y = 10;


//// [/home/src/workspace/projects/project2/index.d.ts]
export declare const y = 10;


//// [/home/src/workspace/projects/project2/tsconfig.tsbuildinfo]
{"fileNames":["../node_modules/@typescript/lib-es5/index.d.ts","../node_modules/@typescript/lib-dom/index.d.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-8673759361-interface DOMInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-11999455899-export const y = 10","signature":"-7152472870-export declare const y = 10;\n"},"-13729955264-export const y = 10;"],"root":[3,4],"options":{"composite":true},"latestChangedDtsFile":"./index.d.ts","version":"FakeTSVersion"}

//// [/home/src/workspace/projects/project2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../node_modules/@typescript/lib-es5/index.d.ts",
    "../node_modules/@typescript/lib-dom/index.d.ts",
    "./index.ts",
    "./utils.d.ts"
  ],
  "fileInfos": {
    "../node_modules/@typescript/lib-es5/index.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../node_modules/@typescript/lib-dom/index.d.ts": {
      "original": {
        "version": "-8673759361-interface DOMInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-8673759361-interface DOMInterface { }",
      "signature": "-8673759361-interface DOMInterface { }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./index.ts": {
      "original": {
        "version": "-11999455899-export const y = 10",
        "signature": "-7152472870-export declare const y = 10;\n"
      },
      "version": "-11999455899-export const y = 10",
      "signature": "-7152472870-export declare const y = 10;\n"
    },
    "./utils.d.ts": {
      "version": "-13729955264-export const y = 10;",
      "signature": "-13729955264-export const y = 10;"
    }
  },
  "root": [
    [
      3,
      "./index.ts"
    ],
    [
      4,
      "./utils.d.ts"
    ]
  ],
  "options": {
    "composite": true
  },
  "latestChangedDtsFile": "./index.d.ts",
  "version": "FakeTSVersion",
  "size": 995
}

//// [/home/src/workspace/projects/project3/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.z = void 0;
exports.z = 10;


//// [/home/src/workspace/projects/project3/index.d.ts]
export declare const z = 10;


//// [/home/src/workspace/projects/project3/tsconfig.tsbuildinfo]
{"fileNames":["../node_modules/@typescript/lib-es5/index.d.ts","../node_modules/@typescript/lib-dom/index.d.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-8673759361-interface DOMInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-11960320506-export const z = 10","signature":"-7483702853-export declare const z = 10;\n"},"-13729955264-export const y = 10;"],"root":[3,4],"options":{"composite":true},"latestChangedDtsFile":"./index.d.ts","version":"FakeTSVersion"}

//// [/home/src/workspace/projects/project3/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../node_modules/@typescript/lib-es5/index.d.ts",
    "../node_modules/@typescript/lib-dom/index.d.ts",
    "./index.ts",
    "./utils.d.ts"
  ],
  "fileInfos": {
    "../node_modules/@typescript/lib-es5/index.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../node_modules/@typescript/lib-dom/index.d.ts": {
      "original": {
        "version": "-8673759361-interface DOMInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-8673759361-interface DOMInterface { }",
      "signature": "-8673759361-interface DOMInterface { }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./index.ts": {
      "original": {
        "version": "-11960320506-export const z = 10",
        "signature": "-7483702853-export declare const z = 10;\n"
      },
      "version": "-11960320506-export const z = 10",
      "signature": "-7483702853-export declare const z = 10;\n"
    },
    "./utils.d.ts": {
      "version": "-13729955264-export const y = 10;",
      "signature": "-13729955264-export const y = 10;"
    }
  },
  "root": [
    [
      3,
      "./index.ts"
    ],
    [
      4,
      "./utils.d.ts"
    ]
  ],
  "options": {
    "composite": true
  },
  "latestChangedDtsFile": "./index.d.ts",
  "version": "FakeTSVersion",
  "size": 995
}

//// [/home/src/workspace/projects/project4/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.z = void 0;
exports.z = 10;


//// [/home/src/workspace/projects/project4/index.d.ts]
export declare const z = 10;


//// [/home/src/workspace/projects/project4/tsconfig.tsbuildinfo]
{"fileNames":["../node_modules/@typescript/lib-esnext/index.d.ts","../node_modules/@typescript/lib-dom/index.d.ts","../node_modules/@typescript/lib-webworker/index.d.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-8673759361-interface DOMInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-3990185033-interface WebWorkerInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-11960320506-export const z = 10","signature":"-7483702853-export declare const z = 10;\n"},"-13729955264-export const y = 10;"],"root":[4,5],"options":{"composite":true},"latestChangedDtsFile":"./index.d.ts","version":"FakeTSVersion"}

//// [/home/src/workspace/projects/project4/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../node_modules/@typescript/lib-esnext/index.d.ts",
    "../node_modules/@typescript/lib-dom/index.d.ts",
    "../node_modules/@typescript/lib-webworker/index.d.ts",
    "./index.ts",
    "./utils.d.ts"
  ],
  "fileInfos": {
    "../node_modules/@typescript/lib-esnext/index.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../node_modules/@typescript/lib-dom/index.d.ts": {
      "original": {
        "version": "-8673759361-interface DOMInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-8673759361-interface DOMInterface { }",
      "signature": "-8673759361-interface DOMInterface { }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "../node_modules/@typescript/lib-webworker/index.d.ts": {
      "original": {
        "version": "-3990185033-interface WebWorkerInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-3990185033-interface WebWorkerInterface { }",
      "signature": "-3990185033-interface WebWorkerInterface { }",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./index.ts": {
      "original": {
        "version": "-11960320506-export const z = 10",
        "signature": "-7483702853-export declare const z = 10;\n"
      },
      "version": "-11960320506-export const z = 10",
      "signature": "-7483702853-export declare const z = 10;\n"
    },
    "./utils.d.ts": {
      "version": "-13729955264-export const y = 10;",
      "signature": "-13729955264-export const y = 10;"
    }
  },
  "root": [
    [
      4,
      "./index.ts"
    ],
    [
      5,
      "./utils.d.ts"
    ]
  ],
  "options": {
    "composite": true
  },
  "latestChangedDtsFile": "./index.d.ts",
  "version": "FakeTSVersion",
  "size": 1156
}


PolledWatches::
/home/package.json: *new*
  {"pollingInterval":2000}
/home/src/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/projects/node_modules/@typescript/lib-dom/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/projects/node_modules/@typescript/lib-es5/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/projects/node_modules/@typescript/lib-esnext/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/projects/node_modules/@typescript/lib-webworker/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/projects/node_modules/@typescript/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/projects/node_modules/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/projects/package.json: *new*
  {"pollingInterval":2000}
/home/src/workspace/projects/project1/typeroot1/sometype/package.json: *new*
  {"pollingInterval":2000}
/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/home/src/workspace/projects/project1/core.d.ts: *new*
  {}
/home/src/workspace/projects/project1/file.ts: *new*
  {}
/home/src/workspace/projects/project1/file2.ts: *new*
  {}
/home/src/workspace/projects/project1/index.ts: *new*
  {}
/home/src/workspace/projects/project1/tsconfig.json: *new*
  {}
/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts: *new*
  {}
/home/src/workspace/projects/project1/utils.d.ts: *new*
  {}
/home/src/workspace/projects/project2/index.ts: *new*
  {}
/home/src/workspace/projects/project2/tsconfig.json: *new*
  {}
/home/src/workspace/projects/project2/utils.d.ts: *new*
  {}
/home/src/workspace/projects/project3/index.ts: *new*
  {}
/home/src/workspace/projects/project3/tsconfig.json: *new*
  {}
/home/src/workspace/projects/project3/utils.d.ts: *new*
  {}
/home/src/workspace/projects/project4/index.ts: *new*
  {}
/home/src/workspace/projects/project4/tsconfig.json: *new*
  {}
/home/src/workspace/projects/project4/utils.d.ts: *new*
  {}

FsWatchesRecursive::
/home/src/workspace/projects/project1: *new*
  {}
/home/src/workspace/projects/project2: *new*
  {}
/home/src/workspace/projects/project3: *new*
  {}
/home/src/workspace/projects/project4: *new*
  {}

Program root files: [
  "/home/src/workspace/projects/project1/core.d.ts",
  "/home/src/workspace/projects/project1/file.ts",
  "/home/src/workspace/projects/project1/file2.ts",
  "/home/src/workspace/projects/project1/index.ts",
  "/home/src/workspace/projects/project1/utils.d.ts",
  "/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts"
]
Program options: {
  "composite": true,
  "typeRoots": [
    "/home/src/workspace/projects/project1/typeroot1"
  ],
  "lib": [
    "lib.es5.d.ts",
    "lib.dom.d.ts"
  ],
  "traceResolution": true,
  "libReplacement": true,
  "watch": true,
  "explainFiles": true,
  "extendedDiagnostics": true,
  "tscBuild": true,
  "configFilePath": "/home/src/workspace/projects/project1/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/workspace/projects/project1/core.d.ts
/home/src/workspace/projects/project1/file.ts
/home/src/workspace/projects/project1/file2.ts
/home/src/workspace/projects/project1/index.ts
/home/src/workspace/projects/project1/utils.d.ts
/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/workspace/projects/project1/core.d.ts
/home/src/workspace/projects/project1/file.ts
/home/src/workspace/projects/project1/file2.ts
/home/src/workspace/projects/project1/index.ts
/home/src/workspace/projects/project1/utils.d.ts
/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts

Shape signatures in builder refreshed for::
/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts (used version)
/home/src/workspace/projects/node_modules/@typescript/lib-scripthost/index.d.ts (used version)
/home/src/workspace/projects/project1/core.d.ts (used version)
/home/src/workspace/projects/project1/file.ts (computed .d.ts during emit)
/home/src/workspace/projects/project1/file2.ts (computed .d.ts during emit)
/home/src/workspace/projects/project1/index.ts (computed .d.ts during emit)
/home/src/workspace/projects/project1/utils.d.ts (used version)
/home/src/workspace/projects/project1/typeroot1/sometype/index.d.ts (used version)
/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts (used version)
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)

Program root files: [
  "/home/src/workspace/projects/project2/index.ts",
  "/home/src/workspace/projects/project2/utils.d.ts"
]
Program options: {
  "composite": true,
  "lib": [
    "lib.es5.d.ts",
    "lib.dom.d.ts"
  ],
  "traceResolution": true,
  "libReplacement": true,
  "watch": true,
  "explainFiles": true,
  "extendedDiagnostics": true,
  "tscBuild": true,
  "configFilePath": "/home/src/workspace/projects/project2/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/workspace/projects/project2/index.ts
/home/src/workspace/projects/project2/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/workspace/projects/project2/index.ts
/home/src/workspace/projects/project2/utils.d.ts

Shape signatures in builder refreshed for::
/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts (used version)
/home/src/workspace/projects/project2/index.ts (computed .d.ts during emit)
/home/src/workspace/projects/project2/utils.d.ts (used version)
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)

Program root files: [
  "/home/src/workspace/projects/project3/index.ts",
  "/home/src/workspace/projects/project3/utils.d.ts"
]
Program options: {
  "composite": true,
  "lib": [
    "lib.es5.d.ts",
    "lib.dom.d.ts"
  ],
  "traceResolution": true,
  "libReplacement": true,
  "watch": true,
  "explainFiles": true,
  "extendedDiagnostics": true,
  "tscBuild": true,
  "configFilePath": "/home/src/workspace/projects/project3/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/workspace/projects/project3/index.ts
/home/src/workspace/projects/project3/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/workspace/projects/project3/index.ts
/home/src/workspace/projects/project3/utils.d.ts

Shape signatures in builder refreshed for::
/home/src/workspace/projects/node_modules/@typescript/lib-es5/index.d.ts (used version)
/home/src/workspace/projects/project3/index.ts (computed .d.ts during emit)
/home/src/workspace/projects/project3/utils.d.ts (used version)
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)

Program root files: [
  "/home/src/workspace/projects/project4/index.ts",
  "/home/src/workspace/projects/project4/utils.d.ts"
]
Program options: {
  "composite": true,
  "lib": [
    "lib.esnext.d.ts",
    "lib.dom.d.ts",
    "lib.webworker.d.ts"
  ],
  "traceResolution": true,
  "libReplacement": true,
  "watch": true,
  "explainFiles": true,
  "extendedDiagnostics": true,
  "tscBuild": true,
  "configFilePath": "/home/src/workspace/projects/project4/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/workspace/projects/project4/index.ts
/home/src/workspace/projects/project4/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/workspace/projects/project4/index.ts
/home/src/workspace/projects/project4/utils.d.ts

Shape signatures in builder refreshed for::
/home/src/workspace/projects/node_modules/@typescript/lib-esnext/index.d.ts (used version)
/home/src/workspace/projects/project4/index.ts (computed .d.ts during emit)
/home/src/workspace/projects/project4/utils.d.ts (used version)
/home/src/workspace/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)
/home/src/workspace/projects/node_modules/@typescript/lib-webworker/index.d.ts (used version)

exitCode:: ExitStatus.undefined
