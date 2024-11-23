// src/app/aprendiz.ts
export class Aprendiz {
    nombre: string;
    apellido: string;
    ficha: string;

    constructor(nombre:string, apellido:string, ficha:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ficha = ficha;
    }
}