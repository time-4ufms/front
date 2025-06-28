<template>
  <div class="readme-container" v-html="readmeHtml"></div>
</template>

<script>
import { marked } from 'marked';

export default {
  data() {
    return {
      readmeHtml: '',
    };
  },
  mounted() {
    fetch('/estban.md')
      .then((res) => res.text())
      .then((md) => {
        this.readmeHtml = marked(md);
      });
  },
};
</script>

<style>
.readme-container {
  max-width: 80%;
  margin: 0 auto; /* Centraliza horizontalmente */
  padding: 20px;
  font-size: 1.2rem; /* Aumenta o tamanho padrão da fonte */
  line-height: 1.6;  /* Melhora o espaçamento entre linhas */
}

.readme-container h1,
.readme-container h2,
.readme-container h3 {
  text-align: left; /* Centraliza os títulos */
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.readme-container p,
.readme-container ul,
.readme-container table {
  text-align: justify; /* Justifica os parágrafos e listas */
}

.readme-container img {
  display: block;
  margin: 20px auto; /* Centraliza imagens */
  max-width: 100%;
  height: auto;
}

.readme-container table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.readme-container table, 
.readme-container th, 
.readme-container td {
  border: 1px solid #ccc;
  padding: 8px;
}

.readme-container th {
  background-color: #f2f2f2;
  text-align: center;
}

</style>
