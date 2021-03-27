var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        list: [],
        filter: ''
    },
    methods: {
        listElementos() {
            var h = '1';
            this.list = database.filter((e) => { 
                return e.nome.toLowerCase().includes(this.filter.toLowerCase()) }
            );
            this.message = 'Registros ' + database.length;
            this.alterarFiltro();
            h = '2';

        },
        alterarFiltro() {
            this.filter = 'mudei';
        }
    }
})
