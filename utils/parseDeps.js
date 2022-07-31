module.exports = function(dep) {
  const packageName = dep.split(" ")[0];
  const unsafeInstalls = dep.includes(" unsafev: ")
  const version = dep.split(" v: ")[1] || dep.split(" unsafev: ")[1];
  
  return {
    packageName,
    unsafeInstalls,
    version
  }
}
