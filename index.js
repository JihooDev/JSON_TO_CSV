const json2csv = require('json2csv');
const fs = require('fs');

// JSON 데이터
const jsonData =
    [
        {
            "value": "1",
        }
        ,
        {
            "value": "2",
        },
        {
            "value": "3",
        },
        {
            "value": "4",
        }
    ]

const csvData = json2csv.parse(jsonData);

const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
const fileName = `data_${timestamp}.csv`;

fs.writeFileSync(fileName, csvData);

console.log(`CSV file "${fileName}" has been created.`);