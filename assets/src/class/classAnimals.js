//CLASES HIJAS ANIMAL
import Animal from "./classAnimal.js";

class Leon extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Rugir(){
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Aullar(){
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Gruñir(){ 
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Sisear(){  
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Chillar(){  
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };