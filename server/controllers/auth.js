const bcrypt = require('bcryptjs');

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {

        const existing = bcrypt.compareSync(password, users[i].pinHash)
        console.log(existing);

        if (users[i].username === username && existing === true) {
          res.status(200).send(users[i])
          return
        }

      }
      res.status(400).send("User not found.")
      
    },
    register: (req, res) => {
        console.log('Registering User')
        // console.log(req.body)

        const {username, email, firstName, lastName, password} = req.body;

        const salt = bcrypt.genSaltSync(5);
        const pinHash = bcrypt.hashSync(password, salt);

        let userInfo = {
          username,
          email,
          firstName,
          lastName,
          pinHash
        }

        users.push(userInfo);

        let passwordReturn = {...userInfo};

        delete passwordReturn.pinHash;


        console.log(users);
        console.log(userInfo);
        console.log(passwordReturn);
        // users.push(req.body)
        res.status(200).send(passwordReturn)
    }
}