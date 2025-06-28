<template>
    <div style="width: 80%; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="margin-bottom: 20px;">Time 4 🌟</h1>
        <p style="font-size: 20px; margin-bottom: 20px;">
            Bem-vindo ao Time 4! Aqui você encontrará informações sobre o nosso time, projeto e nossa organização🚀.
            Esse projeto é destinado ao programa
            <a href="https://content.b3.com.br/pantanal-dev/" target="_blank"
                style="text-decoration: none; color: blue; font-size: 20px;">
                Pantanal Dev
            </a>.
        </p>

        <div style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 20px;">
            <img src="/img/1746591003814.jpeg" alt="foto do time" style="width: 80%;" />
        </div>

        <h2>Sobre o desafio</h2>
        <p style="font-size: 20px; margin-bottom: 20px;">
            O desafio do time 4 é desenvolver um projeto de Data Science que visa analisar e prever tendências de
            mercado utilizando dados financeiros.
            O objetivo é criar um modelo preditivo que possa auxiliar na tomada de decisões estratégicas para a
            organização.</p>
        <h2 style="margin-bottom: 20px;">Participantes 🙋‍♀️🙋‍♂️</h2>
        <p style="font-size: 20px;">O time Comitiva Esperança é composto por 4 pessoas, de áreas multidisciplinares.
            Todos atuam como Data Scientist, porém exercem o papel primário descrito abaixo:</p>

        <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin-top: 20px;">
            <div v-for="participante in participantes" :key="participante.nome"
                style="text-align: center; margin: 8px; cursor: pointer; font-size: 16px;">
                <a :href="participante.linkedin" target="_blank" style="text-decoration: none; color: inherit;">
                    <strong style="color: blue;">{{ participante.nome }}</strong>
                    <div style="color: blue;">{{ participante.formacao }}</div>
                    <div style="color: blue;">{{ participante.cargo }}</div>
                </a>
            </div>

        </div>
    </div>
</template>

<script setup>
const participantes = [
     {
        nome: "Catarina Ludmila Nogueira Freisleben",
        formacao: "Engenharia de Software",
        cargo: "Engenheira de Software",
        linkedin: "https://www.linkedin.com/in/catarina-freisleben/"
    },
    {
        nome: "Fabio Bastista Rodrigues",
        formacao: "Sistemas de Informação",
        cargo: "Data Engineer",
        linkedin: "https://www.linkedin.com/in/fabiobrodrigues/"
    },
    {
        nome: "Freddy William Okino Guedes",
        formacao: "Engenharia de Software",
        cargo: "Frontend Engineer",
        linkedin: "https://www.linkedin.com/in/freddy-william-okino-guedes-4638a2267/"
    },
    {
        nome: "Leonardo Vargas de Paula",
        formacao: "Sistemas de Informação",
        cargo: "Backend Engineer",
        linkedin: "https://www.linkedin.com/in/leonardo-vargas-de-paula/"
    },
    {
        nome: "Rafael de Azevedo Borges",
        formacao: "Engenharia de Software",
        cargo: "Frontend Engineer",
        linkedin: "https://www.linkedin.com/in/rafaelborgesazevedo/"
    },
    {
        nome: "Paula O Gomes Abrahão",
        formacao: "Sistemas de Informação",
        cargo: "👑 Mentora",
        linkedin: "https://www.linkedin.com/in/paula-abrahao"
    }
]
</script>
