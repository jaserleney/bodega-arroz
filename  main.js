var app = new Vue({
  el: "#app",
  data: {
    company: "Distribuidora De Arroz",

    bodegaUno: 100000,
    bodegaDos: 230000,

    cantidad: "",
    cantidad2: "",

    selected1: null,
    selected2: null,

    ventasBodegaUno: 0,
    ventasBodegaDos: 0,

    messageUno: null,
    messageDos: null,

    msBd: false,
    msBd2: false,

    seeTotal1: false,
    seeTotal2: false,

    contarCantidadBod1: 0,
    contarCantidadBod2: 0,
  },

  methods: {
    verifyBodegaUno() {
      this.cantidad = parseFloat(this.cantidad);
      if (isNaN(this.cantidad)) {
        alert("Debe ingresar un número");
        this.cantidad = "";
        return false;
      }
      if (this.cantidad > this.bodegaUno) {
        alert(
          `Es imposible vender mas de la cantidad con la que cuenta la bodega #1:  ${this.bodegaUno}`
        );
        return false;
      }

      if (this.selected1 === null || this.cantidad === "") {
        alert("Debes Ingresar una cantidad de arroz y seleccionar la medida");
        return false;
      }

      if (this.bodegaUno <= 50000) {
        this.msBd = true;
        this.messageUno =
          "La bodega #1 cuenta con solo el 50% de la cantidad de arroz";
      }

      if (this.bodegaUno <= 10000) {
        this.msBd = true;
        this.messageUno =
          "La bodega #1 cuenta con solo el 10% de la cantidad de arroz";
      }

      if (this.selected1 === "kg") {
        this.bodegaUno = this.bodegaUno - this.cantidad;
        this.contarCantidadBod1 += this.cantidad;
        localStorage.setItem("bodegaUno", this.bodegaUno);
        localStorage.setItem("totalVentaUno", this.contarCantidadBod1);
        console.log(this.bodegaUno);
        console.log(this.contarCantidadBod1);
      }

      if (this.selected1 === "lb") {
        let convert = this.cantidad / 2;
        this.bodegaUno = this.bodegaUno - convert;
        this.contarCantidadBod1 += this.cantidad;
        localStorage.setItem("bodegaUno", this.bodegaUno);
        localStorage.setItem("totalVentaUno", this.contarCantidadBod1);
        console.log(this.bodegaUno);
      }

      if (this.selected1 === "g") {
        let convert = this.cantidad / 1000;
        this.bodegaUno = this.bodegaUno - convert;
        this.contarCantidadBod1 += this.cantidad;
        localStorage.setItem("bodegaUno", this.bodegaUno);
        localStorage.setItem("totalVentaUno", this.contarCantidadBod1);
        console.log(this.bodegaUno);
      }
    },

    verifyBodegaDos() {
      this.cantidad2 = parseFloat(this.cantidad2);
      if (isNaN(this.cantidad2)) {
        alert("Debe ingresar un número");
        this.cantidad2 = "";
        return false;
      }
      if (this.cantidad2 > this.bodegaDos) {
        alert(
          `Es imposible vender mas de la cantidad con la que cuenta la bodega #2  ${this.bodegaDos}`
        );
        return false;
      }

      if (this.selected2 === null || this.cantidad2 === "") {
        alert("Debes Ingresar una cantidad de arroz y seleccionar la medida");
        return false;
      }

      if (this.bodegaDos <= 115000) {
        this.msBd2 = true;
        this.messageDos =
          "La bodega #2 cuenta con solo el 50% de la cantidad de arroz";
      }

      if (this.bodegaDos <= 23000) {
        this.msBd2 = true;
        this.messageDos =
          "La bodega #2 cuenta con solo el 10% de la cantidad de arroz";
      }

      if (this.selected2 === "kg") {
        this.bodegaDos = this.bodegaDos - this.cantidad2;
        this.contarCantidadBod2 += this.cantidad2;
        localStorage.setItem("bodegaDos", this.bodegaDos);
        localStorage.setItem("totalVentaDos", this.contarCantidadBod2);
      }

      if (this.selected2 === "lb") {
        let convert = this.cantidad2 / 2;
        this.bodegaDos = this.bodegaDos - convert;
        this.contarCantidadBod2 += this.cantidad2;
        localStorage.setItem("bodegaDos", this.bodegaDos);
        localStorage.setItem("totalVentaDos", this.contarCantidadBod2);
      }

      if (this.selected2 === "g") {
        let convert = this.cantidad2 / 1000;
        this.bodegaDos = this.bodegaDos - convert;
        this.contarCantidadBod2 += this.cantidad2;
        localStorage.setItem("bodegaDos", this.bodegaDos);
        localStorage.setItem("totalVentaDos", this.contarCantidadBod2);
      }
    },

    showAmount1() {
      this.seeTotal1 = true;
    },

    showAmount2() {
      this.seeTotal2 = true;
    },
  },

  created() {
    let bodegaUno = localStorage.getItem("bodegaUno");
    let totalVentaUno = localStorage.getItem("totalVentaUno");
    let bodegaDos = localStorage.getItem("bodegaDos");
    let totalVentaDos = localStorage.getItem("totalVentaDos");

    if (bodegaUno !== null) {
      this.bodegaUno = parseFloat(bodegaUno);
    }

    if (totalVentaUno !== null) {
      this.contarCantidadBod1 = parseFloat(totalVentaUno);
    }
    if (bodegaDos !== null) {
      this.bodegaDos = bodegaDos;
    }

    if (totalVentaDos !== null) {
      this.contarCantidadBod2 = totalVentaDos;
    }
  },
});
