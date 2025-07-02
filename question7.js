import fs from "fs";

function checkFileExists(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", ((err, data) => {
            if (err) {
                reject(false);
            }
            else{
                resolve(true);
            }
        }));
    });
}
const path = "./aaa.txt";// not exists
const path1 = "./question1.js";// exists
checkFileExists(path).then(res => console.log(res)).catch(rej => console.log(rej));
checkFileExists(path1).then(res => console.log(res)).catch(rej => console.log(rej));