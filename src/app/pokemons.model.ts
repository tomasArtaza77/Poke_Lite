export class Pokemons{
    nombre: string = "";
    tipo: string = "";
    nivel: number = 0;

    constructor(nombre: string, tipo: string, nivel: number){
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
    }
}