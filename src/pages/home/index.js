let template = document.getElementsByTagName('div');

console.log(template);

export default Vue.component('HOME', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>`
})