"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var template = document.getElementsByTagName('div');
console.log(template);

var _default = Vue.component('HOME', {
  data: function data() {
    return {
      count: 0
    };
  },
  template: "<el-container>\n    <el-header>Header</el-header>\n    <el-container>\n      <el-aside width=\"200px\">Aside</el-aside>\n      <el-container>\n        <el-main>Main</el-main>\n        <el-footer>Footer</el-footer>\n      </el-container>\n    </el-container>\n  </el-container>"
});

exports["default"] = _default;