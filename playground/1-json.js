const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
//
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// // console.log(bookJSON)
// //
// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData.author)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// // console.log(dataBuffer.toString())
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Sarinha'
user.age = 1

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)