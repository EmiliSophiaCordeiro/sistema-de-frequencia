class Turma {
    #nome
    #alunos
  
    constructor(nome) {
      this.#nome = nome
      this.#alunos = []
    }
  
    get nome() {
      return this.#nome
    }
  
    adicionarAluno(aluno) {
      this.#alunos.push(aluno)
    }
  
    buscarAluno(matricula) {
      return this.#alunos.find(a => a.matricula === matricula)
    }
  
    listarAlunos() {
      return this.#alunos
    }
  }
  
  module.exports = Turma
  