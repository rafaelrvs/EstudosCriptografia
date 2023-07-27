import {createHash} from 'crypto'

function criaHash(senha){
  return createHash('sha256').update(senha).digest('hex')
}

class Usuario{
  constructor(nome,senha){
    this.nome = nome;
    this.hash = criaHash(senha)
  }
  autentica(nome,senha){
    if (nome === this.nome && this.hash === criaHash(senha)){
      console.log("Usuario autenticado")
      return true
    }
    console.log("Usuario não autenticado")
    
  }

}

const usuario = new Usuario('rafael', 'arroz')

//-------------------caso valido --------------------//
usuario.autentica('rafael','arroz')
//-------------------caso invalido --------------------//
usuario.autentica('rafael','123456789')