class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
 
    saudacao() {
      console.log(`${this.nome} diz oi!`);
    }
  }
class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
      super(nome, idade);
      this.matricula = matricula;
    }
 
    apresentar() {
      console.log(`Sou o aluno ${this.nome}, matrícula ${this.matricula}`);
    }
  }
const p1= new Pessoa ("Ygor");
p1.saudacao;
const p2 = new Aluno ("Nana");
p2.apresentar;

