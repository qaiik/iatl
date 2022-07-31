const spawn = require('child_process').spawn;

module.exports = function install(package, version) {
  return new Promise((res,rej) => {
    const proc = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["install", `${package}@${version}`], { stdio: "inherit" })
    proc.on("close", (code) => {
      res(code)
    })
  })
    
}
