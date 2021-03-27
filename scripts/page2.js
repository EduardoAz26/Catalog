var app = new Vue({
    el: '#app',
    data: {
        variavelX: 'Outro texto',
        intNumber: 0
    },
    methods: {
        add() {
            this.intNumber++;
        }
    },
    mounted() {
        console.log('Esse metodo é chamado quando o componente/pagina termina de carregar, ideal para carregar dados de uma api por exemplo para preencher a tela')
    }
})
