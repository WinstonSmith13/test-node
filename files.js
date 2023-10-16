const fs = require('fs')

// fs.readFile('./docs/test1.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log('there is an error')
        }
        console.log('folder deleted')
    })
}