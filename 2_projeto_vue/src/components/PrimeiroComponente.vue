<template>
  <div>
    <h1> Olá vue! </h1>
    <p> Meu nome é {{nome}} e trabalho com {{profissao}}  </p>
  </div>

</template>

<script>
//exportando para o mundo o componente, através da nomeacao do mesmo, é possivel acessá-lo em outros lugares
export default {
  name: 'PrimeiroComponente',
  data(){
    return{
      nome: "karen",
      profissao: "front web",
    }
  }
}
</script>