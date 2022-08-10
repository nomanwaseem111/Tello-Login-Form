import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000

let user = []

app.post('/', (req, res) => {

    console.log(req.body);

    user.push(req.body)

  res.send('Agent Logged in!')
})

app.get('/', (req, res) => {
    res.send(user)
  })

  app.put('/', (req, res) => {
    res.send('Hello World!')
  })


  app.delete('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})