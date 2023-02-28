<template>
  <h1> Meu nome é: {{nome}} </h1>
</template>

<script>
export default {
  name: 'LifeCycle',
  data(){
    return{
      nome: "ainda nao sei"
    }
  },
  created() {
    setTimeout (
        args => {
          this.nome = "Karina"
        }, 2000
    )

  },
  mounted() {
    setTimeout (
        args => {
          this.nome = "Larissa"
        }, 1000
    )

  }
}

</script>