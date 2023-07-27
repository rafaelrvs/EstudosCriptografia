import {createHash} from 'crypto'

class Usuario{
  constructor(nome,senha){
    this.nome = nome;
    this.hash = this.criaHash(senha)
  }

  criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
  }

  autentica(nome,senha){
    if (nome === this.nome && this.hash === this.criaHash(senha)){
      console.log("Usuario autenticado")
      return true
    }
    //console.log("Usuario não autenticado")
    return false
  }

}

const us = new Usuario('rafael', '2000')

//-------------------caso valido --------------------//
   for(let senhaTest=0; senhaTest<10000; senhaTest++){
    if(us.autentica("rafael", senhaTest.toString() ) ){
      console.log(`A sua senha do usuario é ${senhaTest}`)
    }
  }

