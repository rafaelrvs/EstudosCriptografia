import jwt from 'jsonwebtoken'
const chaveSecreta = "chaveSuperSecreta"

const token = jwt.sign({
  apelido:"rafa",
  curso:"segurança e node.js",
}, chaveSecreta)
console.log(token)

// decodificar

const tokenDecodificado = jwt.verify(token, chaveSecreta)
console.log(tokenDecodificado)
