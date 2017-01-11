'use strict';

var app = new Vue({
    el: '.container',
    data: {
        nuevaTarea: null,
        editandoTarea: null,
        tareas: [{ titulo: "Ir al Gym", completado: false }, { titulo: "Cocinar Sopa", completado: false }, { titulo: "Banar Perros", completado: false }]
    },

    methods: {
        addTarea: function addTarea(tarea) {
            this.tareas.push({ titulo: tarea, completado: false });
            this.nuevaTarea = '';
        },

        removeTarea: function removeTarea(index) {
            this.tareas.splice(index, 1);
        },

        editTarea: function editTarea() {
            console.info(tarea);
        }
    }
});