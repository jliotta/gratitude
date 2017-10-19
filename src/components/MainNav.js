import Vue from 'vue';
import {Menu, Submenu, MenuItem} from 'element-ui';

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);

module.exports = Vue.component('main-nav', {
	template: `
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1">Gratitude</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">Teams</template>
		    <el-menu-item index="2-1">Team 1</el-menu-item>
		    <el-menu-item index="2-2">Team 2</el-menu-item>
		    <el-menu-item index="2-3">Team 3</el-menu-item>
		  </el-submenu>
		  <el-menu-item index="3"><a href="#" target="_blank">Home</a></el-menu-item>
		</el-menu>`,
	created: function() {
		console.log('CREATED MAIN NAV')
	}
});


