const bcrypt = require('bcrypt')
const secretString = 'abcdef'

module.exports = {
  set: (email) => {
    if(!email){
      return null
    }

    let password = email + secretString
    let hash = bcrypt.hashSync(password, 10)
  
    return hash
  },

  consulta: (hash, email) => {
    if(!hash || !email){
      return false
    }

    let password = email + secretString
    let compare = bcrypt.compareSync(password, hash)

    return compare
  }
} 
