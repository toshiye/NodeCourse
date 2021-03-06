//const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')
//const msg = getNotes()
//const command = process.argv[2]
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List out the Notes!',
    handler() {
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a Note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

//console.log(yargs.argv)

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

