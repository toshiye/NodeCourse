const path = require('path')
const express = require('express')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setupa static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sarinha'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About something',
        name: 'Toshiye'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        helpText: 'What can i do to help you out?'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is not snowing',
        location: 'Elói Mendes'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})