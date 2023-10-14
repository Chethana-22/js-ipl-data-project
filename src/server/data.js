const fs = require('fs');
const Papa = require("papaparse");

function readCsv(file){
    const csvData = fs.readFileSync(file, 'utf-8');
    const {data } = Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
    });
    return data;
}

const matches = readCsv('src/data/matches.csv');
const deliveries = readCsv('src/data/deliveries.csv');

module.exports.matches = matches;
module.exports.deliveries = deliveries;

