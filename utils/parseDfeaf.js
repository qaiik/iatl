module.exports = function(dep) {
  const packageName = dep.split(" ")[0];
  const unsafe = !dep.split(" v: ").length > 0;
  const version = dep.split(" v: ")[1] || dep.split(" unsafev: ")[1];
  
  return {
    packageName,
    unsafe,
    version
  }
}
