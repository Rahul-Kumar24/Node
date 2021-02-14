const fs = require("fs");
const bioData = {
  name: "Rahul Kumar",
  age: 20,
  village: "Gopkita",
  city: "Patna",
};

// const jsonData = JSON.stringify(bioData);
// fs.writeFile("jsonfile.json", jsonData, (err) => {
//   console.log("done");
// });

fs.readFile("jsonfile.json", "utf-8", (err, data) => {
  console.log(data);
  const orgdata = JSON.parse(data);
  console.log(orgdata);
});
