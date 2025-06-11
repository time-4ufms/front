const participantes = [
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
        nome: "",
        formacao: "",
        cargo: "👑 Mentora",
        linkedin: ""
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    href: "https://content.b3.com.br/pantanal-dev/",
    target: "_blank",
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "/img/1746591003814.jpeg",
    alt: "foto do time",
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
for (const [participante] of __VLS_getVForSourceType((__VLS_ctx.participantes))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (participante.nome),
        ...{ style: {} },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: (participante.linkedin),
        target: "_blank",
        ...{ style: {} },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({
        ...{ style: {} },
    });
    (participante.nome);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: {} },
    });
    (participante.formacao);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: {} },
    });
    (participante.cargo);
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            participantes: participantes,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=home.vue.js.map