export class Pokemons{
    nombre: string = "";
    tipo: string = "";
    nivel: number = 0;
    img: string = '';

    constructor(nombre: string, tipo: string, nivel: number, img: string){
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
        this.img = img;
    }
}