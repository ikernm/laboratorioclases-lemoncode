import "./style.css";
import { reservas, reservasDesayuno } from "./model";
import { Subtotal, TourOperador, ClienteParticularDesafio, TourOperadorDesafio, ClienteParticularEjercicioAdicional, TourOperadorDesafioEjercicioAdicional } from "./utils";


// Caso 1 - Cliente particular
const clienteParticular = new Subtotal (reservas);
clienteParticular.calculaSubtotal();
clienteParticular.calculaTotal();
console.log("Particular - subtotal: ", clienteParticular.subtotal);
console.log("Particular - total: ", clienteParticular.total.toFixed(2));


// Caso 2 - Tour operador
const tourOperador = new TourOperador(reservas);
tourOperador.calculaSubtotal();
tourOperador.calculaTotal();
console.log("Tour operador - Subtotal:", tourOperador.subtotal);
console.log("Tour operador - Total:", tourOperador.total.toFixed(2));


// Desafío
const clienteParticularDesafio = new ClienteParticularDesafio(reservas);
clienteParticularDesafio.calculaSubtotal();
clienteParticularDesafio.calculaTotal();
console.log("clienteParticularDesafio - Subtotal: ", clienteParticularDesafio.subtotal);
console.log("clienteParticularDesafio - Total: ", clienteParticularDesafio.total.toFixed(2));

const tourOperadorDesafio = new TourOperadorDesafio(reservas);
tourOperadorDesafio.calculaSubtotal();
tourOperadorDesafio.calculaTotal();
console.log("tourOperadorDesafio - Subtotal: ", tourOperadorDesafio.subtotal);
console.log("tourOperadorDesafio - Total: ", tourOperadorDesafio.total.toFixed(2));


// Ejercicio adicional
const clienteParticularEjercicioAdicional = new ClienteParticularEjercicioAdicional(reservasDesayuno);
clienteParticularEjercicioAdicional.calculaSubtotal();
clienteParticularEjercicioAdicional.calculaTotal();
console.log("clienteParticularEjercicioAdicional - Subtotal: ", clienteParticularEjercicioAdicional.subtotal);
console.log("clienteParticularEjercicioAdicional - Total: ", clienteParticularEjercicioAdicional.total.toFixed(2));

const tourOperadorDesafioEjercicioAdicional = new TourOperadorDesafioEjercicioAdicional(reservasDesayuno);
tourOperadorDesafioEjercicioAdicional.calculaSubtotal();
tourOperadorDesafioEjercicioAdicional.calculaTotal();
console.log("tourOperadorDesafioEjercicioAdicional - Subtotal: ", tourOperadorDesafioEjercicioAdicional.subtotal);
console.log("tourOperadorDesafioEjercicioAdicional - Total: ", tourOperadorDesafioEjercicioAdicional.total.toFixed(2));