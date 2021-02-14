const os = require("os");

// console.log(os.arch());

// const freemerory = os.freemem();
// console.log(`${freemerory / Math.pow(2, 30)}`);

// const totalmemory = os.totalmem();
// console.log(`${totalmemory / Math.pow(2, 30)}`);

console.log(JSON.stringify(os.EOL));
// console.log(os.constants);
console.log(os.arch());
// console.log(os.cpus());
console.log(os.endianness());
console.log(`${os.freemem() / Math.pow(2, 30)}`);
console.log(os.getPriority());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
// console.log(os.setPriority());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.version());
