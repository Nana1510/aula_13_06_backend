class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    apresentar() {
        console.log(`${this.nome} é um funcionário.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
    }

    reunir() {
        console.log(`${this.nome} está reunindo a equipe.`);
    }

    apresentar() {
        console.log(`${this.nome} é um gerente e está liderando a reunião.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
    }

    codar() {
        console.log(`${this.nome} está escrevendo código.`);
    }

    apresentar() {
        console.log(`${this.nome} é um desenvolvedor e está programando.`);
    }
}

const gerente = new Gerente('Ana', 8000);
const desenvolvedor = new Desenvolvedor('Carlos', 5000);

gerente.apresentar(); 
desenvolvedor.apresentar(); 

gerente.reunir(); 
desenvolvedor.codar(); 