class Email {
    #conteudo;
    constructor(mensagem) {
        this.setMensagem(mensagem);
    }

    getMensagem() {
        return this.#conteudo;
    }

    setMensagem(novaMensagem) {
        if (novaMensagem.length > 140) {
            console.log('Mensagem muito longa! Por favor, envie uma mensagem com até 140 caracteres.');
        } else {
            this.#conteudo = novaMensagem;
        }
    }
}

 
const email = new Email('Olá, tudo bem?');
console.log(email.getMensagem());  
email.setMensagem('Esta mensagem está dentro do limite de caracteres.');
console.log(email.getMensagem());  

email.setMensagem('Esta mensagem é muito longa e ultrapassa o limite de 140 caracteres, então deve ser rejeitada pelo setter.');

console.log(email.getMensagem()); 