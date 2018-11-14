/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orders',
  data: {
    orders: [],
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  
  methods: {
	finish_button: function(key) {
		document.getElementById('finish_button'+key).disabled=true;
		document.getElementById('prepare_button'+key).disabled=false;
		this.orders[key].mode = "finish";
		socket.emit("change_mode",{
			id:key,
			mode:"finish"
		});		
	},
	prepare_button: function(key) {
		document.getElementById('prepare_button'+key).disabled=true;
		document.getElementById('finish_button'+key).disabled=false;
		this.orders[key].mode = "preparing";
		socket.emit("change_mode",{
			id:key,
			mode:"preparing"
		});
	}
  }
});

