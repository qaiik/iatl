const { latest } = require("./utils/getLatestVersion.js");
const locateSFD = require("./utils/locateSFD.js");
const parseDependencies = require("./utils/parseDeps.js");
const install = require("./utils/installPackage.js");

async function main() {
  const dependencies = await locateSFD();
  
  for (const dependency of dependencies) {
    const parsed = parseDependencies(dependency);
    
    const Latest = await latest(parsed.packageName);
    if (Latest !== parsed.version && !parsed.unsafeInstalls) {
      await install(parsed.packageName, Latest);
    } else {
      await install(parsed.packageName, parsed.version)
    }
    
  }
}

main().then(() => {
  console.log("INFO installations started")
})
