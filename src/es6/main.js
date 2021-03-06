'use strict';

var app = new Vue({
   el: '.container',

    data: {
       addToList: '',
        fieldIndex: '',
      tareas: [
          {titulo: "Ir al Gym", completado: false},
          {titulo: "Cocinar Sopa", completado: false},
          {titulo: "Banar Perros", completado: false},
      ]
    },

    methods: {
        addTodo: function() {
            this.tareas.push({titulo: this.addToList, completado: false})
            this.addToList = '';
        },

        removeTask: function (index) {
            this.tareas.splice(index, 1);
        }

    }
});

