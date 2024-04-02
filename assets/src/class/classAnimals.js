//CLASES HIJAS ANIMAL
import Animal from "./classAnimal.js";

const audioPlayer = document.getElementById("player");

class Leon extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Rugir(){
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Aullar(){
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Gruñir(){ 
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Sisear(){  
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido);
    }

    Chillar(){
        audioPlayer.src = `assets/sounds/${this.getSonido()}`;
        audioPlayer.play();  
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };