const bcrypt = require("bcrypt");

async function run(){
    const salt = await bcrypt.genSalt(1234);
    const result = await bcrypt.hash("1234",salt);
    console.log(salt);
}

run();