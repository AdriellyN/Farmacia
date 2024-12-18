import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    // CRUD da Farmácia
    criarProduto(produto: Produto): void;
    listarProduto(): void;
    consultarProdutoPorId(id: number): void;
    atualizarProduto(produto: Produto): void;
    deletarProduto(id: number): void;
}