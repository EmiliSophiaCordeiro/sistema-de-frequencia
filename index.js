const prompt = require("prompt-sync")()
const Aluno = require("./class/Aluno")
const Sistema = require("./class/Sistema")

const sistema = new Sistema()
let turma = sistema.criarTurma("2º Ano DS")

while (true) {
  console.log("\n1 Cadastrar aluno")
  console.log("2 Marcar presença")
  console.log("3 Relatório")
  console.log("4 Sair")
  let op = prompt("Opção: ")

  if (op == "1") {
    let nome = prompt("Nome: ")
    let mat = prompt("Matrícula: ")
    turma.adicionarAluno(new Aluno(nome, mat))
    console.log("Aluno cadastrado")
  }

  else if (op == "2") {
    let mat = prompt("Matrícula: ")
    let data = prompt("Data (aaaa-mm-dd): ")
    let pres = prompt("Presente? (s/n): ")
    let aluno = turma.buscarAluno(mat)
    if (aluno) {
      aluno.marcarPresenca(data, pres.toLowerCase() == "s")
      console.log("Registro feito")
    } else {
      console.log("Aluno não encontrado")
    }
  }

  else if (op == "3") {
    console.table(sistema.relatorio("2º Ano DS"))
  }

  else if (op == "4") {
    break
  }

  else {
    console.log("Opção inválida")
  }
}
