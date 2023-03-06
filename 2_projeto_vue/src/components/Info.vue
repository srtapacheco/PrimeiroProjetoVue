

<template>
  <div>
    <p v-if="estaTrabalhando"> Estou trabalhando no momento.</p>
    <p v-else> Nao estou trabalhando no momento.</p>
    <p> Utilizo as seguintes tecnologias: </p>
    <ul>
      <li>JavaScript</li>
      <li>Python</li>
      <li>C</li>
      <li>Dart</li>
    </ul>
    <p v-show="mostrarEmail"> Mande uma mensagem para: {{email}}</p>
    <!-- v-bind serve pra url dinamicas -->
    <p> Acesse o portifolio <a v-bind:href="meu_link">aqui</a> </p>
    <Picture> </Picture>
  </div>
</template>

<script>
import Picture from './Picture.vue';

export default {
    name: "Info",
    data() {
        return {
            estaTrabalhando: false,
            mostrarEmail: false,
            email: "karenpacheco16@poli.ufrj.br",
            meu_link: "https://htmlcolorcodes.com/"
        };
    },
    components: { Picture }
}
</script>