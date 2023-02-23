
const MeuNomeApp = {
    data() {
        return {
            nome: "Karen",
            idade: 23,
        }
    }
}

Vue.createApp(MeuNomeApp).mount("#app")