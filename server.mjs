import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000

let users = []

const randomNumber = () => {

  return Math.floor(Math.random() * 10000)

}

app.post('/user', (req, res) => {

  console.log(req.body);

  let newUser = {

    id: randomNumber(),
    Email: req.body.email,
    Password: req.body.password

  }

  users.push(newUser)

  res.send('user created')
})

app.get('/user/:userId', (req, res) => { //get single user

  let userId = req.params.userId;
  let isFound = false

  for (let i = 0; i < users.length; i++) {

    if (users[i].id == userId) {
      res.send(users[i])
      isFound = true
      break;
    }
  }
  if (!isFound) { res.send('user not found') }

})


app.get('/users', (req, res) => { // get multiple user

  res.send(users)

})

app.put('/user/:userId', (req, res) => { // modify single user

  let userId = req.params.userId;
  let userIndex = -1
  for (let i = 0; i < users.length; i++) {

    if (users[i].id == userId) {
      userIndex = i
      break;
    }
  }
    
   if(userIndex === -1){
    res.send('user not found')
   }else{
 
     if(req.body.email) users[userIndex].email = req.body.email
     if(req.body.password) users[userIndex].password = req.body.password
   
       res.send(users[userIndex])
   }
})


app.delete('/user/:userId', (req, res) => { //delete single user

  let userId = req.params.userId;
  let userIndex = -1
  for (let i = 0; i < users.length; i++) {

    if (users[i].id == userId) {
      userIndex = i
      break;
    }
  }
    
   if(userIndex === -1){
    res.send('user not found')
   }else{
    delete users[userIndex]
   }

})

app.delete('/users', (req, res) => { //delete multiple user
 
   users = []
   
   res.send('All Users Deleted')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})