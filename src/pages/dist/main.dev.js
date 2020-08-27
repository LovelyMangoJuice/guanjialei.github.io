"use strict";

var _index = _interopRequireDefault(require("./home/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var vue = new Vue({
  el: '#app',
  data: function data() {
    return {
      visible: false
    };
  },
  components: {
    Home: _index["default"]
  }
});
console.log(_index["default"]);