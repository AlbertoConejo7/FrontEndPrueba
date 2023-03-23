export interface IProduct {

  PRECIO: number;
  CODIGO_ARTICULO: string;
  DESCRIPCION: string;
  
}


export interface Respuesta {

  PRODUCTOS: IProduct[];
  ALERTA: string;

}