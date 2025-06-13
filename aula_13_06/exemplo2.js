class ContaBancaria {
    #saldo = 0;
 
    depositar(valor) {
      if (valor > 0) this.#saldo += valor;
    }
    get saldo() {
        return this.#saldo;
      }
   
      set saldo(valor) {
        console.log("Use o método depositar().");
      }
    }
const conta = new ContaBancaria();
conta.depositar(500);
console.log(conta.saldo);

conta.saldo(1000);
console.log(conta.saldo);