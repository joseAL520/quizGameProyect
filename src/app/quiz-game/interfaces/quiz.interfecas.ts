export interface Quiz {
    id:                 number;
    pregunta:           string;
    opciones:           Opciones;
    respuesta_correcta: RespuestaCorrecta;
}

export interface Opciones {
    a: string;
    b: string;
    c: string;
    d: string;
}

export enum RespuestaCorrecta {
    B = "b",
    D = "d",
}


///
export interface Categoria {
    id: number;
    nombre: string;
}
  

  