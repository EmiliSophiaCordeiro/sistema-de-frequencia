class Aluno {
    #nome
    #matricula
    #presencas
  
    constructor(nome, matricula) {
      this.#nome = nome
      this.#matricula = matricula
      this.#presencas = []
    }
  
    get nome() {
      return this.#nome
    }
  
    get matricula() {
      return this.#matricula
    }
  
    marcarPresenca(data, presente) {
      this.#presencas.push({ data, presente })
    }
  
    frequencia() {
      if (this.#presencas.length === 0) return 0
      let presencas = this.#presencas.filter(p => p.presente).length
      return ((presencas / this.#presencas.length) * 100).toFixed(2)
    }
  }
  
  module.exports = Aluno
  