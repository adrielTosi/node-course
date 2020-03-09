const path = require("path")
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicPath = path.join(__dirname, "../public") 
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// This use .static as a middleware to serve static files in the directory described.
// all the files inside have a /file.hmtl route
app.use(express.static(publicPath))

// This sets the path for when the templates/views are located. "views" is the default value
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.get('', (req, res) => {
  res.render('index', {
    title: 'My App'
  })
})

app.listen(3000, () => {
  console.log('Serve up on port 3000.')
})

