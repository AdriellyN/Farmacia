import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    // CRUD da Farmácia
    criarProduto(produto: Produto): void;
    listarProduto(): void;
    consultarProdutoPorId(numero: number): void;
    atualizarProduto(produto: Produto): void;
    deletarProduto(numero: number): void;
}