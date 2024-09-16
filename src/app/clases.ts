export class Ubicacion{
    nombreUbicacion : string = "";
    listaEstancias : Estancia[] = [];
}

export class Estancia{
    nombreEstancia : string = "";
    listaContenedores: Contenedor[] = [];

}

export class Contenedor{
    nombreContenedor : string = ""
    listaObjetos : Objeto[]= [];
}

export class Objeto{

}