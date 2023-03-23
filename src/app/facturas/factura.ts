export interface IFac {

  TOTAL: number;
  FECHA: string;
  NUMERO_FACTURA: number;
  USUARIO : string;
  
}

export interface RESPUESTA {

  FACTURA: IFac[];
  ALERTA: string;

}