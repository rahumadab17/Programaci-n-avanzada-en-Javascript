//CLASE PADRE ANIMAL
class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        let Nombre = nombre;
        this.getNombre = () => Nombre;

        let Edad = edad;
        this.getEdad = () => Edad;

        let Img = img;
        this.getImg = () => Img;

        let Comentarios = comentarios;
        this.getComentarios = () => Comentarios;

        let Sonido = sonido;
        this.getSonido = () => Sonido;
    }

    //METODOS

    get nombre() {
        return this.getNombre();
    }

    get edad() {
        return this.getEdad();
    }

    get img() {
        return this.getImg();
    }

    get comentarios() {
        return this.getComentarios();
    }

    get sonido() {
        return this.getSonido();
    }
}

export default Animal;