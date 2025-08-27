const Turma = require("./Turma")

class Sistema {
  #turmas

  constructor() {
    this.#turmas = []
  }

  criarTurma(nome) {
    let turma = new Turma(nome)
    this.#turmas.push(turma)
    return turma
  }

  turma(nome) {
    return this.#turmas.find(t => t.nome === nome)
  }

  relatorio(nome) {
    let turma = this.turma(nome)
    return turma.listarAlunos().map(a => ({
      nome: a.nome,
      matricula: a.matricula,
      frequencia: a.frequencia() + "%"
    }))
  }
}

module.exports = Sistema
