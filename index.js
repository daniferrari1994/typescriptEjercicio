"use strict";
var TipoOperacion;
(function (TipoOperacion) {
    TipoOperacion[TipoOperacion["Debito"] = 0] = "Debito";
    TipoOperacion[TipoOperacion["Credito"] = 1] = "Credito";
})(TipoOperacion || (TipoOperacion = {}));
class Cuenta {
    constructor(id, cuit, saldo, transacciones) {
        this.id = id;
        this.cuit = cuit;
        this.saldo = saldo;
        this.transacciones = transacciones;
    }
    agregarTransaccion(transaccion) {
        if (transaccion.operacion === TipoOperacion.Debito) {
            this.saldo = this.saldo - transaccion.monto;
        }
        else {
            this.saldo = this.saldo + transaccion.monto;
        }
        this.transacciones.push(transaccion);
    }
}
const cuenta = new Cuenta(1, '30-62839461-9', 5000, []);
cuenta.agregarTransaccion({ id: 11, cuenta: 1, fecha: '2021-11-22', operacion: TipoOperacion.Debito, monto: 100, });
console.log(cuenta);
