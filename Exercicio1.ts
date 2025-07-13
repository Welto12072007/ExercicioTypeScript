// ============================================================================
// EXERCÍCIOS TYPESCRIPT - PROGRESSIVOS
// ============================================================================

// ============================================================================
// NÍVEL 1: FUNDAMENTOS DE TYPESCRIPT
// ============================================================================

// 1.1 Tipos Básicos
console.log("=== 1.1 Tipos Básicos ===");

const nome: string = "Wellington";
const idade: number = 30;
const ativo: boolean = true;
const hobbies: string[] = ["programação", "leitura", "games"];
const ponto: [number, number] = [10, 20];

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Ponto: [${ponto[0]}, ${ponto[1]}]`);

// 1.2 Funções Tipadas
console.log("\n=== 1.2 Funções Tipadas ===");

function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
    if (imc < 18.5) return "Baixo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

const meuIMC = calcularIMC(70, 1.75);
console.log(`IMC: ${meuIMC.toFixed(2)} - Classificação: ${classificarIMC(meuIMC)}`);

// 1.3 Interfaces
console.log("\n=== 1.3 Interfaces ===");

interface Pessoa {
    nome: string;
    email?: string;
    idade: number;
}

const pessoa: Pessoa = {
    nome: "João Silva",
    email: "joao@email.com",
    idade: 25
};

console.log(`Pessoa: ${pessoa.nome}, ${pessoa.idade} anos, Email: ${pessoa.email || "Não informado"}`);

// ============================================================================
// NÍVEL 2: CLASSES E ORIENTAÇÃO A OBJETOS
// ============================================================================

// 2.1 Classe Carro
console.log("\n=== 2.1 Classe Carro ===");

class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    obterDetalhes(): string {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }
}

const meuCarro = new Carro("Toyota", "Corolla", 2023);
console.log(meuCarro.obterDetalhes());

// 2.2 Herança
console.log("\n=== 2.2 Herança ===");

class CarroEletrico extends Carro {
    autonomiaBateria: number;

    constructor(marca: string, modelo: string, ano: number, autonomiaBateria: number) {
        super(marca, modelo, ano);
        this.autonomiaBateria = autonomiaBateria;
    }

    obterDetalhes(): string {
        return `${super.obterDetalhes()} - Autonomia: ${this.autonomiaBateria}km`;
    }
}

const carroEletrico = new CarroEletrico("Tesla", "Model 3", 2024, 500);
console.log(carroEletrico.obterDetalhes());

// ============================================================================
// NÍVEL 3: SIMULAÇÃO EXPRESS (sem framework real)
// ============================================================================

console.log("\n=== 3.1 Simulação Rota Health Check ===");

// Simulando uma resposta de API
function simulateHealthCheck(): object {
    return {
        status: "ok",
        timestamp: new Date().toISOString()
    };
}

console.log("GET /status:", JSON.stringify(simulateHealthCheck(), null, 2));

// 3.2 Validação de Middleware (simulada)
console.log("\n=== 3.2 Validação de Middleware ===");

interface TarefaRequest {
    titulo?: string;
}

function validarTarefa(body: TarefaRequest): { valid: boolean; message?: string } {
    if (!body.titulo || body.titulo.trim() === "") {
        return {
            valid: false,
            message: "Campo 'titulo' é obrigatório e não pode estar vazio"
        };
    }
    return { valid: true };
}

// Testando validação
const tarefaValida = { titulo: "Estudar TypeScript" };
const tarefaInvalida = { titulo: "" };

console.log("Tarefa válida:", validarTarefa(tarefaValida));
console.log("Tarefa inválida:", validarTarefa(tarefaInvalida));

// ============================================================================
// NÍVEL 4: SIMULAÇÃO PRISMA (sem banco real)
// ============================================================================

console.log("\n=== 4.1 Query com Filtro (simulado) ===");

interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
    criadoEm: Date;
    deletadoEm?: Date;
}

// Dados simulados
const tarefasSimuladas: Tarefa[] = [
    { id: 1, titulo: "Estudar TypeScript", concluida: true, criadoEm: new Date() },
    { id: 2, titulo: "Fazer exercícios", concluida: false, criadoEm: new Date() },
    { id: 3, titulo: "Revisar código", concluida: true, criadoEm: new Date() }
];

function buscarTarefas(concluida?: boolean): Tarefa[] {
    if (concluida === undefined) {
        return tarefasSimuladas.filter(t => !t.deletadoEm);
    }
    return tarefasSimuladas.filter(t => t.concluida === concluida && !t.deletadoEm);
}

console.log("Todas as tarefas:", buscarTarefas());
console.log("Tarefas concluídas:", buscarTarefas(true));
console.log("Tarefas pendentes:", buscarTarefas(false));

// 4.2 Soft Delete
console.log("\n=== 4.2 Soft Delete ===");

function deletarTarefa(id: number): { success: boolean; message: string } {
    const tarefa = tarefasSimuladas.find(t => t.id === id);
    if (!tarefa) {
        return { success: false, message: "Tarefa não encontrada" };
    }
    
    tarefa.deletadoEm = new Date();
    return { success: true, message: "Tarefa marcada como deletada" };
}

console.log("Deletando tarefa 1:", deletarTarefa(1));
console.log("Tarefas após deleção:", buscarTarefas());

// ============================================================================
// NÍVEL 5: AVANÇADO
// ============================================================================

// 5.1 Generics
console.log("\n=== 5.1 Generics ===");

function retornarPrimeiro<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error("Array não pode estar vazio");
    }
    return arr[0];
}

const numeros = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c"];

console.log("Primeiro número:", retornarPrimeiro(numeros));
console.log("Primeira string:", retornarPrimeiro(strings));

// 5.2 Tratamento de Erros Global (simulado)
console.log("\n=== 5.2 Tratamento de Erros Global ===");

interface ErrorResponse {
    error: string;
    code: number;
}

function globalErrorHandler(error: Error): ErrorResponse {
    console.error("Erro capturado:", error.message);
    return {
        error: error.message,
        code: 500
    };
}

// Simulando um erro
try {
    throw new Error("Algo deu errado!");
} catch (error) {
    const errorResponse = globalErrorHandler(error as Error);
    console.log("Resposta de erro:", JSON.stringify(errorResponse, null, 2));
}

// 5.3 Decorators (simulado - TypeScript precisa de configuração específica)
console.log("\n=== 5.3 Decorators (Conceitual) ===");

// Função que simula um decorator de log de tempo
function logTempoExecucao(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        const inicio = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = performance.now();
        console.log(`Método ${propertyName} executado em ${(fim - inicio).toFixed(2)}ms`);
        return resultado;
    };
    
    return descriptor;
}

// Aplicando conceito de decorator manualmente
class CarroComLog extends Carro {
    obterDetalhes(): string {
        const inicio = performance.now();
        const resultado = super.obterDetalhes();
        const fim = performance.now();
        console.log(`Método obterDetalhes executado em ${(fim - inicio).toFixed(2)}ms`);
        return resultado;
    }
}

const carroComLog = new CarroComLog("Honda", "Civic", 2023);
console.log(carroComLog.obterDetalhes());

// ============================================================================
// DESAFIO FINAL: SISTEMA DE BIBLIOTECA (SIMULADO)
// ============================================================================

console.log("\n=== DESAFIO FINAL: Sistema de Biblioteca ===");

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    disponivel: boolean;
}

class BibliotecaService {
    private livros: Livro[] = [];
    private proximoId = 1;

    criarLivro(titulo: string, autor: string, anoPublicacao: number): { success: boolean; livro?: Livro; error?: string } {
        // Validação: ano não pode ser futuro
        const anoAtual = new Date().getFullYear();
        if (anoPublicacao > anoAtual) {
            return { success: false, error: "Ano de publicação não pode ser futuro" };
        }

        const novoLivro: Livro = {
            id: this.proximoId++,
            titulo,
            autor,
            anoPublicacao,
            disponivel: true
        };

        this.livros.push(novoLivro);
        return { success: true, livro: novoLivro };
    }

    listarLivros(autor?: string, disponivel?: boolean): Livro[] {
        let resultado = this.livros;

        if (autor) {
            resultado = resultado.filter(livro => 
                livro.autor.toLowerCase().includes(autor.toLowerCase())
            );
        }

        if (disponivel !== undefined) {
            resultado = resultado.filter(livro => livro.disponivel === disponivel);
        }

        return resultado;
    }

    emprestarLivro(id: number): { success: boolean; message: string } {
        const livro = this.livros.find(l => l.id === id);
        
        if (!livro) {
            return { success: false, message: "Livro não encontrado" };
        }

        if (!livro.disponivel) {
            return { success: false, message: "Livro não está disponível para empréstimo" };
        }

        livro.disponivel = false;
        return { success: true, message: `Livro "${livro.titulo}" emprestado com sucesso` };
    }
}

// Testando o sistema de biblioteca
const biblioteca = new BibliotecaService();

console.log("=== Criando livros ===");
console.log(biblioteca.criarLivro("1984", "George Orwell", 1949));
console.log(biblioteca.criarLivro("Dom Casmurro", "Machado de Assis", 1899));
console.log(biblioteca.criarLivro("Futuro Impossível", "Autor Fictício", 2030)); // Deve falhar

console.log("\n=== Listando todos os livros ===");
console.log(biblioteca.listarLivros());

console.log("\n=== Filtrando por autor ===");
console.log(biblioteca.listarLivros("Orwell"));

console.log("\n=== Emprestando livro ===");
console.log(biblioteca.emprestarLivro(1));
console.log(biblioteca.emprestarLivro(1)); // Deve falhar - já emprestado

console.log("\n=== Livros disponíveis ===");
console.log(biblioteca.listarLivros(undefined, true));

console.log("\n=== Livros emprestados ===");
console.log(biblioteca.listarLivros(undefined, false));

console.log("\n🎉 Todos os exercícios foram executados com sucesso!");
console.log("Para rodar este arquivo: npx ts-node Exercicio1.ts");