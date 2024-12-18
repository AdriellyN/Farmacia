import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";
import { ProdutoController } from "./src/controller/ProdutoController";
import { read } from "fs";
import { Medicamento } from "./src/model/Medicamento";
import { Cosmetico } from "./src/model/Cosmetico";

export function main() {

    // Instância da Classe ProdutoController
    let produtos: ProdutoController = new ProdutoController();

    // Variáveis para execução dos métodos na Classe Menu
    let opcao, numero, id, tipo, preco: number;
    let nome: string;
    const tipoProdutos = ['Generico', 'Fragrancia'];

    while (true) {
        console.log(colors.bg.whitebright, colors.fg.cyanstrong);
        console.log("**************************************************************");
        console.log("                                                              ");
        console.log("                     Sistema FarmaVila                        ");
        console.log("                                                              ");
        console.log("**************************************************************");
        console.log("                                                              ");
        console.log("               1 - Criar Produto                              ");
        console.log("               2 - Listar Todos os Produtos                   ");
        console.log("               3 - Consultar Produto por Id                   ");
        console.log("               4 - Atualizar Produto                          ");
        console.log("               5 - Deletar Produto                            ");
        console.log("               0 - Sair                                       ");
        console.log("                                                              ");
        console.log("**************************************************************");
        console.log(colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.black, "\nPrograma Finalizado.");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.bluestrong, "\nCriar Produto \n", colors.reset);

                console.log("Digite o Nome do Produto: ");
                nome = readlinesync.question();

                console.log("Digite o Preço do Produto: ");
                preco = readlinesync.questionFloat();

                console.log("Digite o Tipo do Produto: ");
                tipo = readlinesync.keyInSelect(tipoProdutos, "", {cancel: false}) + 1;

                switch (tipo) {
                    case 1:
                        produtos.criarProduto(new Medicamento(produtos.gerarId(), nome, tipo, preco, tipoProdutos[1]));
                        break;
                    case 2:
                        produtos.criarProduto(new Cosmetico(produtos.gerarId(), nome, tipo, preco, tipoProdutos[2]));
                        break;
                }
                keyPress();
                break;

            case 2:
                console.log(colors.fg.bluestrong, "\nListar Todos os Produtos \n",
                    colors.reset);
                produtos.listarProduto();
                keyPress();
                break;

            case 3:
                console.log(colors.fg.bluestrong, "\nConsultar Produto por Id \n",
                    colors.reset);

                console.log("ID do Produto: ");
                numero = readlinesync.questionInt();
                produtos.consultarProdutoPorId(numero);
                keyPress();
                break;


            case 4:
                console.log(colors.fg.bluestrong, "\nAtualizar dados do Produto \n", colors.reset);

                console.log("ID do Produto: ");
                numero = readlinesync.questionInt();

                let produto = produtos.buscarNoArray(numero);

                if (produto != null) {

                    console.log("Digite o Nome do Produto: ");
                    nome = readlinesync.question();

                    console.log("Digite o Preço do Produto: ");
                    preco = readlinesync.questionFloat();

                    tipo = produto.tipo;
                    
                    switch (tipo) {
                        case 1:
                            produtos.atualizarProduto(new Medicamento(numero, nome, tipo, preco, "generico"));
                            break;
                        case 2:
                            produtos.atualizarProduto(new Cosmetico(numero, nome, tipo, preco, "fragrancia"));
                            break;
                    }
                }
                keyPress();
                break;

            case 5:
                console.log(colors.fg.bluestrong, "\nDeletar Produto \n", colors.reset);
                console.log("Digite o ID do produto: ");
                numero = readlinesync.questionInt();
                produtos.deletarProduto(numero);
                keyPress();
                break;

            default:
                console.log(colors.fg.redstrong, "\nOpção Inválida! \n", colors.reset);
                keyPress();
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Adrielly do Nascimento - adriellynr@gmail.com");
    console.log("github.com/AdriellyN");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();