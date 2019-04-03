require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5c9bb1b608c2b41634d19ff0', { age: 33}).then((user) => {
    console.log(user)

    return User.countDocuments({ age: 32 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})