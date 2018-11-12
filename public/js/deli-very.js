/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#dots',
  data: {
    orders: {details:{x:0,y:0}},
	key:"T"
  },
  methods: {

    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.orders = {
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y }
                              };
    }
  }
});
