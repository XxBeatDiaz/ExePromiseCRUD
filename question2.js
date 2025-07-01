import fs from "fs";

function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                rej(err);
                return;
            }else{
                res(data);
                return;
            }
        });
    });
}

const path = "./justText.txt";
readFile(path).then(res => {
    console.log(res);
});