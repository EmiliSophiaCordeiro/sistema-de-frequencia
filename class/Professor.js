const Usuario = require("./Usuario")

class Professor extends Usuario {
  constructor(nome, idade, disciplina) {
    super(nome, idade)
    this.disciplina = disciplina
  }

  marcarFrequencia(aluno, dia, presente) {
    aluno.registrarFrequencia(dia, presente)
  }

  acessoPainel() {
    return "Acesso ao painel do professor"
  }
}

module.exports = Professor
