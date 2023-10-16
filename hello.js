const {people} = require('./modules.js')
const os = require('os')

console.log(os.platform())

const nameTest = (name) => {
    console.log(`hello, ${name}`)
}

nameTest(people);