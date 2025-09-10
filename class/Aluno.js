const Usuario = require("./Usuario")

class Aluno extends Usuario {
  constructor(nome, idade, matricula) {
    super(nome, idade)
    this.matricula = matricula
    this.frequencia = []
  }

  registrarFrequencia(dia, presente) {
    this.frequencia.push({ dia, presente })
  }

  acessoPainel() {
    return "Acesso ao painel do aluno"
  }
}

module.exports = Aluno
