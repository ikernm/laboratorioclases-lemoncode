import { Reserva, ReservaDesayuno } from "./model";

// Caso 1 - Cliente particular

export class Subtotal {
    reservas: Reserva[];
    subtotal: number;
    total: number;

    constructor(reservas: Reserva[]) {
        this.reservas = reservas;
        this.subtotal = 0;
        this.total = 0;

    }

    calculaSubtotal() {
        this.subtotal = this.reservas.reduce((acc, reserva) => acc + ((reserva.tipoHabitacion === "standard" ? 100 : 150) + (40*(reserva.pax-1)))* reserva.noches, 0);
    }

    calculaTotal () {
        this.total = this.subtotal * 1.21;
    }
}

// Caso 2 - Tour operador

export class TourOperador extends Subtotal {
    precio: number;
    descuento: number;

    constructor(reservas: Reserva[]) {
        super(reservas);
        this.precio = 100;
        this.descuento = 0.85;
    }

    calculaSubtotal(): void {
        this.subtotal = this.reservas.reduce((acc, reserva) => acc + (( 100 + (40*(reserva.pax-1)))* reserva.noches)*this.descuento, 0);

    }

}

// Desafío

export class SubtotalBase {
    reservas: Reserva[];
    precioStandard: number;
    precioSuite: number;
    subtotal: number;
    total: number;
    
    constructor(reservas: Reserva[], precioStandard: number, precioSuite: number) {
        this.reservas = reservas;
        this.precioStandard = precioStandard;
        this.precioSuite = precioSuite;
        this.subtotal = 0;
        this.total = 0;
    }

    calculaSubtotal() {
        this.subtotal = this.reservas.reduce((acc, reserva) => acc + ((reserva.tipoHabitacion === "standard" ? this.precioStandard : this.precioSuite) + (40*(reserva.pax-1)))* reserva.noches, 0);
    }

    calculaTotal () {
        this.total = this.subtotal * 1.21;
    }

}

export class ClienteParticularDesafio extends SubtotalBase {
    constructor(reservas:Reserva[]) {
        super(reservas, 100, 150);
    }

}

export class TourOperadorDesafio extends SubtotalBase {
    descuento: number;

    constructor(reservas:Reserva[]) {
        super(reservas, 100, 100);
        this.descuento = 0.85;
    }

    calculaSubtotal() {
        this.subtotal = this.reservas.reduce((acc, reserva) => acc + (((reserva.tipoHabitacion === "standard" ? this.precioStandard : this.precioSuite) + (40*(reserva.pax-1)))* reserva.noches)*this.descuento, 0);
    }
}

// Ejercicio adicional

export class SubtotalBase2 {
    reservas: ReservaDesayuno[];
    precioStandard: number;
    precioSuite: number;
    subtotal: number;
    total: number;
    
    constructor(reservas: ReservaDesayuno[], precioStandard: number, precioSuite: number) {
        this.reservas = reservas;
        this.precioStandard = precioStandard;
        this.precioSuite = precioSuite;
        this.subtotal = 0;
        this.total = 0;
    }

    calculaSubtotal() {
        this.subtotal = this.reservas.reduce((acc, reserva) => acc + (((reserva.tipoHabitacion === "standard" ? this.precioStandard : this.precioSuite) + ((40*(reserva.pax-1)))+(reserva.desayuno? 15* reserva.pax : 0))* reserva.noches), 0);
    }

    calculaTotal () {
        this.total = this.subtotal * 1.21;
    }

}

export class ClienteParticularEjercicioAdicional extends SubtotalBase2 {
    constructor(reservas:ReservaDesayuno[]) {
        super(reservas, 100, 150);
    }

}

export class TourOperadorDesafioEjercicioAdicional extends SubtotalBase2 {
    descuento: number;

    constructor(reservas:ReservaDesayuno[]) {
        super(reservas, 100, 100);
        this.descuento = 0.85;
    }

    calculaSubtotal() {
        this.subtotal = this.reservas.reduce((acc, reserva) => acc + (((reserva.tipoHabitacion === "standard" ? this.precioStandard : this.precioSuite) + ((40*(reserva.pax-1)))+(reserva.desayuno? 15* reserva.pax : 0))* reserva.noches)*this.descuento, 0);
    }
}