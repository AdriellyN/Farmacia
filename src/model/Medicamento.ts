import { Produto } from "./Produto";

export class Medicamento extends Produto {
    private _generico: string;

    constructor(id: number, nome: string, tipo: number, preco: number, generico: string) {
        super(id, nome, tipo, preco);
        this._generico = generico;
    }

    public get generico(): string {
        return this._generico;
    }

    public set generico(generico: string) {
        this._generico = generico;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Genérico: " + this._generico);
    }

}