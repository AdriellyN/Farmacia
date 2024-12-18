export abstract class Produto {
    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;

    constructor(id: number, nome: string, tipo: number, preco: number) {
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
    }

    public get id(): number {
        return this._id;
    }

    public get nome(): string {
        return this._nome;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public get preco(): number {
        return this._preco;
    }

    public set id(id: number) {
        this._id = id;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public visualizar(): void {

        let tipo: string = "";
        switch (this._tipo) {
            case 1:
                tipo = "Medicamento";
            break;
            case 2:
                tipo = "Cosmético";
            break;
        }

        console.log("\n\n-----------------------------------------");
        console.log("              Dados do Produto           ");
        console.log("-----------------------------------------");
        console.log(`Código do Produto (ID): ${this._id}`);
        console.log(`Nome do Produto: ${this._nome}`);
        console.log("Tipo: " + tipo);
        console.log(`Preço (R$): ${this._preco.toFixed(2)}`);
    }

}