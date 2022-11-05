import * as fs from "fs";

const toJSON = (csv) => {
    const lines = csv.split("\n");
    const json = [];
    const headers = lines.shift().split(",");

    lines.map((line) => {
        const obj = {};
        const lineArr = line.split(",");

        headers.map((h, i) => {
            obj[h] = lineArr[i];
        });

        console.log(obj);

        if (obj.topic !== "") {
            json.push(obj);
        }
    });

    return JSON.stringify(json);
};

const csv = fs.readFileSync("./topics.csv");

console.log(csv);

const data = toJSON(csv.toString());

fs.writeFileSync("bruh.json", data);
