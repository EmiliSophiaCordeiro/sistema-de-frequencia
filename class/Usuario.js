class Usuario {
    static totalUsuarios = 0
    #nome
    #idade
  
    constructor(nome, idade) {
      this.#nome = nome
      this.#idade = idade
      Usuario.totalUsuarios++
    }
  
    get nome() {
      return this.#nome
    }
  
    set nome(novoNome) {
      this.#nome = novoNome
    }
  
    get idade() {
      return this.#idade
    }
  
    set idade(novaIdade) {
      this.#idade = novaIdade
    }
  
    acessoPainel() {
      return "Acesso genérico ao sistema escolar"
    }
  
    static getTotalUsuarios() {
      return Usuario.totalUsuarios
    }
  }
  
  module.exports = Usuario
  