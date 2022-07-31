const { latest } = require("./utils/getLatestVersion.js");
const locateSFD = require("./utils/locateSFD.js");
const parseDependencies = require("./utils/parseDeps.js");
const install = require("./utils/installPackage.js");

const fs = require("fs");
async function main() {
  let dependencies = await locateSFD();
  
  for (const dependency of dependencies) {
    const parsed = parseDependencies(dependency);
    
    const Latest = await latest(parsed.packageName);
    if (parsed.unsafeInstalls) {
      console.log("UNSAFE getting ", parsed.packageName, parsed.version)
      await install(parsed.packageName, parsed.version);
    } 
    
    if (!parsed.unsafeInstalls && parsed.version !== Latest) {
      console.log("UPDATE", parsed.packageName, parsed.version, "->", Latest)
      await install(parsed.packageName, Latest)

      dependencies = dependencies.map(dep => {
        if (dep === dependency) {
          return `${parsed.packageName} v: ${Latest}`
        }

        return dep
      })

      fs.writeFileSync("./sfpack.json", JSON.stringify(dependencies, null, 4));
    }
    
  }
}

main().then(() => {
  console.log("INFO installations started")
})
