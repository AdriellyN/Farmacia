import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";


export class ProdutoController implements ProdutoRepository {

    private listaDeProduto: Array<Produto> = new Array<Produto>();
    numero: number = 0;

    criarProduto(produto: Produto): void {
        this.listaDeProduto.push(produto);
        console.log("\nO Produto " + produto.id + " foi cadastrado.")
    }
    listarProduto(): void {
        for (let produto of this.listaDeProduto) {
            produto.visualizar();
        }
    }
    consultarProdutoPorId(numero: number): void {
        let buscaId = this.buscarNoArray(numero);

        if (buscaId != null){
            buscaId.visualizar();
        }else{
            console.log("\nO Produto Id: " + numero + " não foi encontrado.")
        }
    }
    atualizarProduto(produto: Produto): void {
        let buscaId = this.buscarNoArray(produto.id);

        if(buscaId != null) {
            this.listaDeProduto[this.listaDeProduto.indexOf(buscaId)] = produto;
            console.log("\nO produto do Id: " + produto.id + " foi atualizado.");
        }
        else{
            console.log("\nO produto do Id: " + produto.id + " não foi encontrado.");
        }
    }
    deletarProduto(numero: number): void {
        let buscaId = this.buscarNoArray(numero);

        if (buscaId != null) {
            this.listaDeProduto.splice(this.listaDeProduto.indexOf(buscaId), 1);
            console.log("\nO produto do Id: " + numero + " foi deletado.");
        }
        else{
            console.log("\nO produto do Id: " + numero + " não foi encontrado.");
        }
    }

    // Gerador de Id's
    public gerarId(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Produto | null {
        for (let produto of this.listaDeProduto) {
            if (produto.id === numero)
                return produto;
        }
        return null;
    }
}

