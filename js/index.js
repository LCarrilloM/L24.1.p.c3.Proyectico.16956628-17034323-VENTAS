/*2. VENTAS
Se desea llevar un control de las ventas que realiza
una tienda. Se tiene por cada venta: nombre del cliente,
número de factura, costo y cantidad de artículos. Se
requiere de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
monto inicial en caja y el porcentaje de incremento para
el costo de cada venta.

Estructuras de datos recomendadas
-> Cl_tienda: montoCaja, porcIncremento
-> Cl_venta: cliente, factura, costo, cnArticulos

Primeros requerimientos
-> Los datos entrada vienen en un archivo (con
import... ver anexo)
-> Monto final en caja
-> Clientes que pagaron el monto mayor
-> Clientes que sólo llevaron 1 artículo
 */

import Cl_tienda from "./Cl_tienda.js";
import Cl_venta from  "./Cl_venta.js";
import Dt_ventas from "./Dt_ventas.js";
import Dt_tienda from "./Dt_tienda.js";
const tienda = new Cl_tienda();

Dt_ventas.forEach((venta) =>
  tienda.agregarVenta(
    new Cl_venta( venta.cliente, venta.factura, venta.costo, venta.cnArticulos)
  )
);

//Dt_tienda.forEach((tiend) =>
//  tiend.iniTienda(
//    new Cl_tienda( tiend.montoCaja, tiend.porcIncremento)
//  )
//);


let agregarVenta = (tienda) => {
  let cliente = prompt("Ingrese el nombre del cliente: ");
  let factura = prompt("Ingrese el número de la factura de la venta: ");
  let costo = prompt("Ingrese el costo de la venta: ");
  let cnArticulos = prompt("Ingrese la cantidad de artículos de la venta: ");
  tienda.agregarVenta(new Cl_venta( cliente, factura, costo, cnArticulos));
};

let eliminarVenta = (tienda) => {
  let factura = prompt("Ingrese el número de la factura de la venta a eliminar:");
  if (tienda.eliminarVenta(factura)) alert(`Se eliminó la venta con número de factura ${factura}`);
  else alert(`No existe la venta con el número de factura ${factura}`);
};

let modificarVenta = (tienda) => {
  let facturaM = prompt("Ingrese el número de la factura de la venta a modificar:");
  let cliente = prompt("Ingrese el nuevo nombre del cliente: ");
  let factura = prompt("Ingrese el nuevo número de la factura de la venta: ");
  let costo = prompt("Ingrese el nuevo costo de la venta: ");
  let cnArticulos = prompt("Ingrese la nueva cantidad de artículos de la venta: ");
  if (tienda.modificarVenta(facturaM, new Cl_venta( cliente, factura, costo, cnArticulos))) alert(`Se modificó la venta con número de factura ${factura}`);
  else alert(`No existe la venta con el número de factura ${factura}`);
};

let listarVentas = (tienda, salida) => {
  salida.innerHTML = "";
  tienda.ventas.forEach((venta) => {
    salida.innerHTML += `<br>${venta.factura} ${venta.cliente} ${
      venta.costo} ${venta.cnArticulos}`;
  });
};

let salida1 = document.getElementById("salida1"),
  salida2 = document.getElementById("salida2"),
  opciones = document.getElementById("opciones");

salida1.innerHTML = `<br>Seleccione una opción:
  <br>1= Agregar venta
  <br>2= Eliminar venta
  <br>3= Modificar venta
  <br>4= Listar ventas
  <br>5= Monto final en caja
  <br>6= Clientes que pagaron el monto mayor
  <br>7= Clientes que solo llevaron un artículo`;

opciones.onclick = () => {
  let opcion = +prompt("Seleccione su opción:");
  switch (opcion) {
    case 1:
      agregarVenta(tienda);
      break;
    case 2:
      eliminarVenta(tienda);
      break;
    case 3:
      modificarVenta(tienda)
      break;
    case 4:
      listarVentas(tienda, salida2);
      break;
    case 5:
      //montoFinalCaja(tienda, salida2);
      alert(`No listo`);
      break;
    case 6:
      //clientePagoMayor(tienda, salida2);
      alert(`No listo`);
      break;
    case 7:
      //clienteUnArticulo(tienda, salida2);
      alert(`No listo`);
      break;
  }
};
