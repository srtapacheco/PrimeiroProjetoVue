
const MeuNomeApp = {
    data() {
        return {
            nome: "",
            idade: 23,
            campoNome: ""
        }
    },

    //funcoes da aplicacao
    methods :{
        //e resgata a acao do evento
        enviaFormulario (e){
            e.preventDefault(); //impede que o formulario seja enviado e pagina recarregue
            this.nome = this.campoNome;
            return false;
        }

    }
}

Vue.createApp(MeuNomeApp).mount("#app")