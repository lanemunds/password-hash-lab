const users = []
const bcryptjs = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcryptjs.compareSync(password, users[i].password)) {
          return res.status(200).send(users[i])
          
        }
      }
      res.status(400).send("User not found.")
    },
    
    
    
    
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        const {password , email, firstName, lastName,username}= req.body

const salt =bcryptjs.genSaltSync(5)
const passwordHash = bcryptjs.hashSync(password,salt)
        
let userObj = {
  username : username,
  email :email,
  firstName: firstName,
  lastName:lastName,
  password : passwordHash

}

users.push(userObj)

console.log(userObj)


        res.status(200).send(req.body)
    }
}