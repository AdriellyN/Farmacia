import { Produto } from "./Produto";

export class Cosmetico extends Produto {
    private _fragrancia: string;

    constructor(id: number, nome: string, tipo: number, preco:number, fragrancia: string) {
        super(id, nome, tipo, preco);
        this._fragrancia = fragrancia;
    }

    public get fragrancia(): string {
        return this._fragrancia;
    }

    public set fragrancia(fragrancia: string) {
        this._fragrancia = fragrancia;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Fragrância");
    }

}