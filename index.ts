

enum TipoOperacion{
    Debito,
    Credito
}

interface Transaccion {
    id: number;
    cuenta: number;
    fecha: string;
    operacion: TipoOperacion;
    monto: number

}


class Cuenta {
    constructor(
        public id: number,
        public cuit: string,
        public saldo: number,
        public transacciones: Transaccion[]
    ) {}

    agregarTransaccion(transaccion: Transaccion){
        if (transaccion.operacion === TipoOperacion.Debito){
            this.saldo = this.saldo - transaccion.monto;
        } else {
            this.saldo = this.saldo + transaccion.monto;
        }

        this.transacciones.push(transaccion);
    } 
}

const cuenta = new Cuenta(1, '30-62839461-9', 5000, []);
cuenta.agregarTransaccion({id: 11, cuenta: 1, fecha: '2021-11-22', operacion: TipoOperacion.Debito, monto: 100,})
console.log(cuenta);