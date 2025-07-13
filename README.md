# 🚀 Exercícios Progressivos de TypeScript

Este projeto contém uma implementação completa dos exercícios progressivos para praticar TypeScript, Node.js, Express e conceitos de banco de dados.

## 📋 Estrutura dos Exercícios

### **Nível 1: Fundamentos de TypeScript**
- ✅ **1.1 Tipos Básicos**: Variáveis tipadas, arrays e tuplas
- ✅ **1.2 Funções Tipadas**: Funções com tipos de parâmetros e retorno
- ✅ **1.3 Interfaces**: Definição e implementação de interfaces

### **Nível 2: Classes e Orientação a Objetos**
- ✅ **2.1 Classe Carro**: Classe básica com propriedades e métodos
- ✅ **2.2 Herança**: Extensão de classes com `CarroEletrico`

### **Nível 3: Conceitos Express (Simulados)**
- ✅ **3.1 Health Check**: Simulação de rota de status
- ✅ **3.2 Validação de Middleware**: Validação de dados de entrada

### **Nível 4: Conceitos Prisma (Simulados)**
- ✅ **4.1 Query com Filtro**: Filtragem de dados por parâmetros
- ✅ **4.2 Soft Delete**: Marcação de itens como deletados

### **Nível 5: Conceitos Avançados**
- ✅ **5.1 Generics**: Funções genéricas reutilizáveis
- ✅ **5.2 Tratamento de Erros**: Sistema global de captura de erros
- ✅ **5.3 Decorators**: Conceito de decorators (simulado)

### **🎯 Desafio Final: Sistema de Biblioteca**
- ✅ **API Completa**: CRUD para sistema de biblioteca
- ✅ **Validações**: Regras de negócio implementadas
- ✅ **Filtros**: Busca por autor e disponibilidade

## 🛠️ Como Executar

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Instalação
```bash
npm install
```

### Executar os Exercícios
```bash
# Executar uma vez
npm run start

# Executar em modo de desenvolvimento (com reload automático)
npm run dev

# Compilar TypeScript
npm run build
```

## 📁 Estrutura do Projeto

```
Exercicio1TypeScript/
├── Exercicio1.ts       # Todos os exercícios implementados
├── package.json        # Dependências e scripts
├── tsconfig.json       # Configuração do TypeScript
└── README.md          # Este arquivo
```

## 🧩 Conceitos Implementados

### TypeScript Fundamentals
- **Tipos primitivos**: string, number, boolean
- **Arrays e Tuplas**: Coleções tipadas
- **Interfaces**: Contratos de tipos
- **Classes**: Programação orientada a objetos
- **Herança**: Extensão de classes
- **Generics**: Funções reutilizáveis

### Padrões de Desenvolvimento
- **Validação de dados**: Verificação de entrada
- **Tratamento de erros**: Captura e formatação de erros
- **Soft Delete**: Deleção lógica vs física
- **Filtragem de dados**: Query parameters simulados

### Arquitetura de Software
- **Separação de responsabilidades**: Classes especializadas
- **Interfaces bem definidas**: Contratos claros
- **Validações de negócio**: Regras implementadas
- **Responses padronizados**: Formato consistente

## 📚 Conceitos por Exercício

### 1.1 - Tipos Básicos
```typescript
const nome: string = "Wellington";
const idade: number = 30;
const ativo: boolean = true;
const hobbies: string[] = ["programação", "leitura"];
const ponto: [number, number] = [10, 20];
```

### 1.2 - Funções Tipadas
```typescript
function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}
```

### 1.3 - Interfaces
```typescript
interface Pessoa {
    nome: string;
    email?: string;
    idade: number;
}
```

### 2.1 - Classes
```typescript
class Carro {
    marca: string;
    modelo: string;
    ano: number;
    
    obterDetalhes(): string {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }
}
```

### 5.1 - Generics
```typescript
function retornarPrimeiro<T>(arr: T[]): T {
    return arr[0];
}
```

## 🎯 Próximos Passos

Para expandir este projeto, considere:

1. **Implementar Express real**: Criar API REST completa
2. **Adicionar Prisma**: Integração com banco de dados real
3. **Testes automatizados**: Jest para cobertura de testes
4. **Dockerização**: Container para facilitar deployment
5. **Validação com Zod**: Validações mais robustas
6. **Swagger/OpenAPI**: Documentação da API

## 📖 Recursos Adicionais

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [LuizTools Articles](https://www.luiztools.com.br/)

## 📝 Saída do Programa

O programa executa todos os exercícios em sequência e mostra:
- Demonstração de tipos básicos
- Cálculo de IMC com classificação
- Criação de objetos usando interfaces
- Funcionamento de classes e herança
- Simulação de APIs REST
- Implementação de sistema de biblioteca completo

**🎉 Projeto completo e funcional!**
