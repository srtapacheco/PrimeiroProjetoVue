<template>
  <div>
    <PrimeiroComponente> </PrimeiroComponente>
    <p> O dado de app é: {{testando}}</p>
    <LifeCycle></LifeCycle>
  </div>

</template>


<script>
  import PrimeiroComponente from "@/components/PrimeiroComponente.vue";
  import LifeCycle from "@/components/LifeCycle.vue";
  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle
    }
  }
</script>