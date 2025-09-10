const Aluno = require("./Aluno")
const Professor = require("./Professor")

class UsuarioFactory {
  static criarUsuario(tipo, ...params) {
    if (tipo === "aluno") {
      return new Aluno(...params)
    }
    if (tipo === "professor") {
      return new Professor(...params)
    }
    throw new Error("Tipo de usuário inválido")
  }
}

module.exports = UsuarioFactory
