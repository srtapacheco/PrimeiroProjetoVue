<template>
    <ul>
        <li> <a href="#">Home</a></li>
        <li> <a href="#">Projetos</a></li>
        <li> <a href="#">Contato</a></li>
    </ul>
    
</template>

<script>
export default{
    name: 'Header',
}

</script>

<style scoped>
    ul{
        list-style-type: none;
        display: flex;  /* coloca uma lista na horizontal */
        background-color: #ccc;
    }
    li{
        margin-right: 10px;  /* espaco entre itens de uma lista */
    }
    a{
        color: #DDD;
        text-decoration: none;  /* tira o sublinhado */
        transform: .5s;

    }
    a:hover{
        color: #000;
    }
</style>