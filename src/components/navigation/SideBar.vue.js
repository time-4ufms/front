import SideBarItem from './SideBarItem.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: "sidebar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "items-container" },
});
/** @type {[typeof SideBarItem, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(SideBarItem, new SideBarItem({
    icon: "mdi-chart-box",
    route: "Dashboard",
    title: "Dashboard",
}));
const __VLS_1 = __VLS_0({
    icon: "mdi-chart-box",
    route: "Dashboard",
    title: "Dashboard",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof SideBarItem, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(SideBarItem, new SideBarItem({
    icon: "mdi-account",
    route: "Descricao",
    title: "Descrição",
}));
const __VLS_4 = __VLS_3({
    icon: "mdi-account",
    route: "Descricao",
    title: "Descrição",
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['items-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            SideBarItem: SideBarItem,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=SideBar.vue.js.map