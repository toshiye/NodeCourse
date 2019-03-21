const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')
const msg = getNotes()
const command = process.argv[2]
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note!',
    handler: function () {
        console.log('Adding a new Note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note!',
    handler: function () {
        console.log('Removing the Note!')
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List out the Notes!',
    handler: function () {
        console.log('Listing out the Notes!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a Note!',
    handler: function () {
        console.log('Reading a Note!')
    }
})

console.log(yargs.argv)

// add, remove, read, list

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// console.log(msg)
//
// console.log(validator.isEmail('sara@sasaki.com'))
//
// console.log(validator.isURL('https://www.alguma.coisa.com'))
//
// console.log(chalk.green.bold('Success!'))
//
// console.log(process.argv[2])

