const generateTeam = require("./generateHtml");
const fs = require('fs');

const team = [manager1, engineer1]

fs.writeFile("index.html", generateTeam(team), (err) =>
    err ? console.log(err) : console.log('Success!')
);

