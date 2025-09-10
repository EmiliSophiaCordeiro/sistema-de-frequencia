const prompt = require("prompt-sync")()
const UsuarioFactory = require("./class/UsuarioFactory")
const Usuario = require("./class/Usuario")

console.log("=== Sistema de Frequência Escolar ===")

const tipo = prompt("Digite o tipo de usuário (aluno/professor): ")
const nome = prompt("Nome: ")
const idade = Number(prompt("Idade: "))

let usuario

if (tipo === "aluno") {
  const matricula = prompt("Matrícula: ")
  usuario = UsuarioFactory.criarUsuario("aluno", nome, idade, matricula)
  usuario.registrarFrequencia("09/09/2025", true)
} else if (tipo === "professor") {
  const disciplina = prompt("Disciplina: ")
  usuario = UsuarioFactory.criarUsuario("professor", nome, idade, disciplina)
} else {
  console.log("Tipo inválido")
  process.exit()
}

console.log("\n--- Resultado ---")
console.log(usuario.acessoPainel())
console.log("Total de usuários cadastrados:", Usuario.getTotalUsuarios())
console.log(usuario)
