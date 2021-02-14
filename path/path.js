const path = require("path");
// console.log(path);
// process.on("beforeExit", (code) => {
//   console.log("Process beforeExit event with code: ", code);
// });
console.log(path.dirname("Desktop/nodejs/path/path.js"));
// console.log(path.extname("Desktop/nodejs/path/path.js"));
// console.log(path.basename("Desktop/nodejs/path/path.js"));
// console.log(path.basename("Desktop/nodejs/path/path.js", "js"));
// console.log(path.basename("Desktop/nodejs"));
// console.log(process.env.(Desktop / nodejs / path / path.js));
// console.log(path.basename("Desktop/nodejs/path/path.js"));
console.log(
  path.format({
    root: "/ignored",
    dir: "/home/user/dir",
    base: "file.txt",
  })
);
console.log(
  path.format({
    root: "/",
    base: "file.txt",
    ext: "ignored",
  })
);
console.log(
  path.format({
    root: "/",
    name: "file",
    ext: ".txt",
  })
);
console.log(path.isAbsolute("\\\\Desktopnodejs"));
console.log(path.normalize("/foo/bar//baz/asdf/quux/."));
console.log(path.parse("/home/user/dir/file.txt"));
