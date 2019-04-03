require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndRemove('5c9bbbb927b314276098d774').then((task) => {
    console.log(task)

    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})