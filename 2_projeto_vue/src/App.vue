<template>
  <div>
    <Header></Header>
    <PrimeiroComponente> </PrimeiroComponente>
    <LifeCycle></LifeCycle>
    <Pessoa></Pessoa>
    <Form></Form>
  </div>

</template>


<script>
  import PrimeiroComponente from "@/components/PrimeiroComponente.vue";
  import LifeCycle from "@/components/LifeCycle.vue";
  import Pessoa from "@/components/Pessoa.vue";
  import Form from "@/components/Form.vue";
  import Header from "/home/karen/projetos/PrimeiroProjetoVue/2_projeto_vue/src/components/Header.vue";
  export default {
    name: 'App',
    components: {
      Header,
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Form,
    }
  }
</script>

<!-- definicao global de estibilizacao da aplicacao -->
<style>
  body{
    background-color: blueviolet;
  }

  a{
    color: red;
  }

  .textoPortifolio{
    background-color: gray;
  }

</style>