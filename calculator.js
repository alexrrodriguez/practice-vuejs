/*global Vue*/

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Compute Sum!",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
    };
  },
  methods: {
    computeSum: function () {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
  },
});

var app2 = new Vue({
  el: "#app2",
  data: function () {
    return {
      message: "Compute Product!",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
    };
  },
  methods: {
    computeProduct: function () {
      this.sum = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
    },
  },
});

var app3 = new Vue({
  el: "#app3",
  data: function () {
    return {
      message: "Compute Percent!",
      number1: 0,
      number2: 0,
      sum: 0,
    };
  },
  methods: {
    computePercent: function () {
      this.sum = (parseInt(this.number2) / parseInt(this.number1)) * 100;
    },
  },
});
