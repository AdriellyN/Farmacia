import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";


export class ProdutoController implements ProdutoRepository {

    private listaDeProdutos = new Array<Produto>();
    
    id: number = 0;

    criarProduto(produto: Produto): void {
        this.listaDeProdutos.push(produto);
        console.log("\nO Produto " + produto.nome + " foi cadastrado.");
    }
    listarProduto(): void {
        for (let produto of this.listaDeProdutos) {
            produto.visualizar();
        }
    }
    consultarProdutoPorId(id: number): void {
        let buscaId = this.buscarNoArray(id);

        if (buscaId != null){
            buscaId.visualizar();
        }else{
            console.log(colors.fg.red,"\nO Produto Id: " + id + " não foi encontrado.",colors.reset);
        }
    }
    atualizarProduto(produto: Produto): void {
        let buscaId = this.buscarNoArray(produto.id);

        if(buscaId != null) {
            this.listaDeProdutos[this.listaDeProdutos.indexOf(buscaId)] = produto;
            console.log("\nO produto do Id: " + produto.id + " foi atualizado.");
        }
        else{
            console.log(colors.fg.red,"\nO produto do Id: " + produto.id + " não foi encontrado.",colors.reset);
        }
    }
    deletarProduto(id: number): void {
        let buscaId = this.buscarNoArray(id);

        if (buscaId != null) {
            this.listaDeProdutos.splice(this.listaDeProdutos.indexOf(buscaId), 1);
            console.log("\nO produto do Id: " + id + " foi deletado.");
        }
        else{
            console.log(colors.fg.red,"\nO produto do Id: " + id + " não foi encontrado.", colors.reset);
        }
    }

    // Gerador de Id's
    public gerarId(): number {
        return ++this.id;
    }

    // Checa se o produto existe no Array
    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaDeProdutos) {
            if (produto.id === id)
                return produto;
        }
        return null;
    }
}

