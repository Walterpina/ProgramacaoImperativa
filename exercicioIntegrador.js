/**
 * Exercício Integrador
 */
//Crie um objeto literal com as informações: nome, preco e quantidade de vendas
let vendas = [
		{
			nome: "Alface",
			preco: 2.00,
			qtdVendida: 4
		},
		{
			nome: "Alho",
			preco: 4.00,
			qtdVendida: 6
		},
		{
			nome: "Feijão",
			preco: 7.00,
			qtdVendida: 7
		},
		{
			nome: "Arroz",
			preco: 25.00,
			qtdVendida: 25
		}
	];

	//1. Calcular o lucro total de todos os produtos
	function lucroTotal(valor) {
		return vendas.reduce((acc, valor) => {
			return acc + (valor.preco * valor.qtdVendida);
			}, 0);
	};
	console.log(lucroTotal(vendas));

	//Função criada para pesquisa de produto
	function pesquisaNome(produto) {
		return vendas.filter((prod) => prod.nome === produto);
	};
	console.log(pesquisaNome("Alho"));
	
	//2. Permitir pesquisar um produto pelo nome e calcular seu lucro total
	function vendaProduto(element) {
		// console.log(element)
		const produto = pesquisaNome(element);
		// console.log(produto[0].qtdVendida);
		return produto[0].preco * produto[0].qtdVendida;
	}
	console.log(vendaProduto('Feijão'));
	
	//3. Permite receber um valor e indicar todos os produtos que venderam mais que esse valor
	function filtroValor(valor) {
		return vendas.filter((produto) => (produto.preco * produto.qtdVendida) > valor );
	}
	console.log(filtroValor(25));
	
	//4. Classifique todos os produtos pela quantidade de dinheiro que geraram
	function ordenarVendas(valor) {
		return valor.sort(function(a, b) {
			return (a.preco * a.qtdVendida) - (b.preco * b.qtdVendida) });
	}
	console.log(ordenarVendas(vendas));
	
	//5. Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome)
	function alteraProduto(nome, valor) {
		const produto = pesquisaNome(nome);
		produto.preco = valor;
		return produto.preco;
	};
	console.log(alteraProduto('Feijão', 8.00));
	
	//6. Calcule o lucro total após pagar 45% do lucro em impostos
	function impostos(valor) {
		const lucro = lucroTotal(valor);
		return lucro - ((lucro * 45) / 100);
	};
	console.log(impostos(vendas));