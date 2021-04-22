const fs = require('fs')

const path1 = './index.js'
const path2 = './package.json'
const path3 = './package-lock.json'
const path4 = './build'
const path5 = './commands'

for (var i = 1; i<5; i++){
    try{
        if(fs.existsSync(`${path[i]}`)){
            console.log(`${path[i]} exists.`)
        }
    } catch (err) {
        console.log(err)
    }
}