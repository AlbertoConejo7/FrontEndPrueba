export interface IDet {

  PRECIO: number;
  CODIGO_ARTICULO: string;
  LINEA: number;
  ARTICULO : string;
  CANTIDAD : number;
  TOTAL_LINEA : Number;

  
}

export interface RESPUESTA {

  DETALLES: IDet[];
  ALERTA: string;

}