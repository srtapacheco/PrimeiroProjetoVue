<template>
  <div>
    <h2> Esta é a descricao da pessoa: {{nome}} </h2>
    <Info></Info>
  </div>

</template>
<script>
  import Info from "@/components/Info.vue";

  export default {
    name: 'Pessoa',
    components: {
      Info
    },
    data(){
      return{
        nome: 'Henrique',
      }
    }
  }
</script>