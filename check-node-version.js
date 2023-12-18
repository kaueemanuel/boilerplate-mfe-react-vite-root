import semver from "semver";
import packageData from "./package.json" assert { type: "json" };

const version = packageData.engines.node;
if (!semver.satisfies(process.version, version)) {
  console.log(
    `Required node version ${version} not satisfied with current version ${process.version}.`
  );
  console.log("Use command:", `\x1b[32m nvm use ${version}\x1b[0m`);
  process.exit(1);
}
