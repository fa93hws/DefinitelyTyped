// Type definitions for parse-package-name 0.1.0
// Project: https://github.com/egoist/parse-package-name
// Definitions by: Eric Wang <https://github.com/fa93hws>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = parsePackageName;

interface PackageInfo {
  name: string;
  path: string;
  version: string;
}

declare const parsePackageName: (path: string) => PackageInfo;
