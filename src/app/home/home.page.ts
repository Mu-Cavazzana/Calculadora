import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string = "0";
  memoria: string = "";
  verifica_zero: boolean = true;
  operador_inserido: boolean = false;
  is_segundo_elemento: boolean = false;
  primeiro_elemento: string = "";
  segundo_elemento: string = "";
  operador: string = "";
  is_novo_calculo: boolean = false;
  


  constructor() { }

  digitos(valor: string) {
    if (this.is_novo_calculo) {
      this.resetar();
      if(this.is_segundo_elemento){
        this.segundo_elemento += valor;
        this.resultado += valor;
      } else {
        if (this.verifica_zero) {
          this.resultado = valor;
          this.verifica_zero = false;
        } else {
          this.resultado += valor;
        }
      }
    } else {
      if(this.is_segundo_elemento){
        this.segundo_elemento += valor;
        this.resultado += valor;
      } else {
        if (this.verifica_zero) {
          this.resultado = valor;
          this.verifica_zero = false;
        } else {
          this.resultado += valor;
        }
      }
    }

  }

  operadores(operador: string) {
    if (!this.operador_inserido && this.verifica_zero == false) {
      this.primeiro_elemento = this.resultado;
      this.resultado += operador;
      this.operador_inserido = true;
      this.operador = operador;
      this.is_segundo_elemento = true;
    }
  }

  calcular() {

    if (this.operador == "+" && this.segundo_elemento != "") {
      //this.memoria = this.resultado;
      this.resultado = (parseFloat(this.primeiro_elemento) + parseFloat(this.segundo_elemento)).toString();
      //this.memoria += "=" + this.resultado;
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "-" && this.segundo_elemento != "") {
      this.resultado = (parseFloat(this.primeiro_elemento) - parseFloat(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "*" && this.segundo_elemento != "") {
      this.resultado = (parseFloat(this.primeiro_elemento) * parseFloat(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else if (this.operador == "/" && this.segundo_elemento != "") {
      this.resultado = (parseFloat(this.primeiro_elemento) / parseFloat(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;
    } else {
      if (this.operador == "") {
        alert("Nenhum operador foi selecionado.")
      } /*else if (this.segundo_elemento == "" && this.operador == "") {
        alert("Nenhum elemento foi definido.")
      }*/ else {
        alert("O segundo elemento não foi definido.")
      }
    }
  }

  resetar() {
    this.resultado = "0";
    //this.memoria = ""
    this.verifica_zero = true;
    this.operador_inserido = false;
    this.is_segundo_elemento = false;
    this.primeiro_elemento = "";
    this.segundo_elemento = "";
    this.operador = "";
    this.is_novo_calculo = false;
  }

  calcularRaizQuadrada() {
    this.primeiro_elemento = this.resultado;
    if (parseFloat(this.primeiro_elemento) >= 0) {
      this.verifica_zero = false;
      this.operador_inserido = true;
      this.is_segundo_elemento = true;
      this.is_novo_calculo = true;
      this.resultado = Math.sqrt(parseFloat(this.primeiro_elemento)).toString();
      this.memoria = "√" + this.primeiro_elemento + "=" + this.resultado;

    } else {
      // Se o número for negativo, não deixar calcular
      alert('Não é possível calcular a raiz quadrada de um número negativo.');
    }
  }

  calcularQuadrado(){
    this.primeiro_elemento = this.resultado;
    if (parseFloat(this.primeiro_elemento) != 0) {
      this.verifica_zero = false;
      this.operador_inserido = true;
      this.is_segundo_elemento = true;
      this.is_novo_calculo = true;
      this.resultado = Math.pow(parseFloat(this.primeiro_elemento), 2).toString();
      this.memoria = this.primeiro_elemento + "²" + "=" + this.resultado;

    } else {
      // Se o numero for zero, não deixar calcular
      alert('Não é possível calcular zero ao quadrado.');
    }
  }

  calcularseno(){
    this.primeiro_elemento = this.resultado;
    if (parseFloat(this.primeiro_elemento) != 0) {
      this.verifica_zero = false;
      this.operador_inserido = true;
      this.is_segundo_elemento = true;
      this.is_novo_calculo = true;
      this.resultado = Math.sin(parseFloat(this.primeiro_elemento)).toString();
      this.memoria = "sen " + this.primeiro_elemento + "=" + this.resultado;

    }
  }

  calcularcosseno(){
    this.primeiro_elemento = this.resultado;
    if (parseFloat(this.primeiro_elemento) != 0) {
      this.verifica_zero = false;
      this.operador_inserido = true;
      this.is_segundo_elemento = true;
      this.is_novo_calculo = true;
      this.resultado = Math.cos(parseFloat(this.primeiro_elemento)).toString();
      this.memoria = "cos " + this.primeiro_elemento + "=" + this.resultado;

    }
  }

  calculartangente(){
    this.primeiro_elemento = this.resultado;
    if (parseFloat(this.primeiro_elemento) != 0) {
      this.verifica_zero = false;
      this.operador_inserido = true;
      this.is_segundo_elemento = true;
      this.is_novo_calculo = true;
      this.resultado = Math.tan(parseFloat(this.primeiro_elemento)).toString();
      this.memoria = "tan " + this.primeiro_elemento + "=" + this.resultado;

    }
  }
}