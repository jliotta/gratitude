import Vue from 'vue';
import MainNav from './components/MainNav.js';

var vm = new Vue({
  el: '#root',
  data: {
    message: 'Hello Vue!'
  },
  template: `
  <div>
	  <main-nav></main-nav>
	  <h3> {{ this.message }} </h3>
  </div>
  `,
  beforeMount: function() {
  	console.log('BEFORE MOUNT');
  }
});