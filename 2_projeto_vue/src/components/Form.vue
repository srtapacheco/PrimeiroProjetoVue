<template>
  <div>
    <h2> Meu formulario: </h2>
    <form action="">
      <InputText></InputText>
      <InputText></InputText>
      <Submit></Submit>
    </form>
  </div>
</template>

<script>
import InputText from "@/components/form/InputText.vue";
import Submit from "@/components/form/Submit.vue";

export default {
  name: 'Form',
  components: {
    InputText,
    Submit,
  },
}

</script>