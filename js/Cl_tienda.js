export default class Cl_tienda {
  constructor(montoCaja, porcIncremento) {
    this.montoCaja = +montoCaja;
    this.porcIncremento = +porcIncremento;
    this.ventas = [];
    //this.iTienda = [];
  }

  //iniTienda(tienda){
  //  this.iTienda.push(tienda);
  //}

  agregarVenta(venta) {
    this.ventas.push(venta);
  }

  eliminarVenta(factura) {
    factura = +factura;
    let indexVenta = -1;
    for (let i = 0; i < this.ventas.length; i++)
      if (this.ventas[i].factura == factura) indexVenta = i;
    if (indexVenta !== -1) this.ventas.splice(indexVenta, 1);
    return indexVenta !== -1;
  }

  modificarVenta(facturaM, venta) {
    let factura = +facturaM;
    let indexVenta = -1;
    for (let i = 0; i < this.ventas.length; i++)
      if (this.ventas[i].factura == factura) indexVenta = i;
    if (indexVenta !== -1) this.ventas[indexVenta] = venta;
    return indexVenta !== -1;
  }
 }
