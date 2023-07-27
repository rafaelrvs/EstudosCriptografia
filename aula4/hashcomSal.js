import {scryptSync, randomBytes, timingSafeEqual} from 'crypto';
/*--------------criando função-------------------*/

function criaHashComSal(senha){
  /*--------------quantidade de bytes desejada  e passando para string e formatar para hex-------------------*/
  const sal = randomBytes(16).toString('hex');
  const senhaHasheada =  scryptSync(senha,sal,64).toString('hex');
  
  return `${sal}:${senhaHasheada}`
}


class Usuario{
  constructor(nome, senha){
    this.nome = nome;
    [this.sal, this.hash] = criaHashComSal(senha).split(':')
  }
  autentica(nome, senha){
      if(nome === this.nome){
        /*-----cria uma hash e verifica se ela é real ou semelhante---*/
        const testeHash = scryptSync(senha, this.sal,64);
        const hashReal = Buffer.from(this.hash,'hex');
        const hashCorrrespondem = timingSafeEqual(testeHash,hashReal)

        if(hashCorrrespondem){
          console.log("Usuario autenticado com sucesso");
          return true;
        }
      }
      console.log('Usuario ou senha incorretos')
      return false
  }
}

  const ra = new Usuario('rafael', '123456')

  //teste valido 
  console.log(ra)
//ra.autentica('rafael', '123456')
//teste invalido
ra.autentica('rafael', 'erro') 