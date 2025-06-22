import { marked } from 'marked';
export default (await import('vue')).defineComponent({
    data() {
        return {
            readmeHtml: '',
        };
    },
    mounted() {
        fetch('/README.md')
            .then((res) => res.text())
            .then((md) => {
            this.readmeHtml = marked(md);
        });
    },
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "readme-container" },
});
__VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.readmeHtml) }, null, null);
/** @type {__VLS_StyleScopedClasses['readme-container']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=descricao.vue.js.map