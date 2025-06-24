// 1. Variáveis com tipos e valores
const produto: string = 'Mouse';
const preco: number = 59.90;
const disponivel: boolean = true;

const disponibilidadeTexto = disponivel ? 'Sim' : 'Não';
console.log(`Produto: ${produto} - Preço: R$${preco.toFixed(2)} - Disponível: ${disponibilidadeTexto}`);

// 2. Array de cidades e função para listar
const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre'];

function listarCidades(cidades: string[]): void {
  for (const cidade of cidades) {
    console.log(cidade);
  }
}

listarCidades(cidades);

// 3. Interface Livro, objeto e função para exibir
interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

const livro: Livro = {
  titulo: 'Aprendendo TypeScript',
  autor: 'João Silva',
  anoPublicacao: 2023
};

function exibirLivro(l: Livro): void {
  console.log(`Título: ${l.titulo}`);
  console.log(`Autor: ${l.autor}`);
  console.log(`Ano de Publicação: ${l.anoPublicacao}`);
}

exibirLivro(livro);
