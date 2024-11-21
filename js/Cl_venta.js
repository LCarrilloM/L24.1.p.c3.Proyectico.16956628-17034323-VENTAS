export default class Cl_venta {
    constructor(cliente, factura , costo, cnArticulos) {
        this.factura = factura;
        this.cliente = cliente;
        this.costo = costo;
        this.cnArticulos = cnArticulos;
    }
    
    set factura(factura) {
        this._factura = +factura;
    }
    get factura() {
        return this._factura;
    }   
    set cliente(cliente) {
        this._cliente = cliente;
    }
    get cliente() {
        return this._cliente;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    set cnArticulos(cnArt) {
        this._cnArt = +cnArt;
    }
    get cnArticulos() {
        return this._cnArt;
    }
}