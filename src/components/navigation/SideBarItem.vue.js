import { computed } from 'vue';
const props = defineProps();
const itemIcon = computed(() => props.active ? props.icon : `${props.icon}-outline`);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: (['sidebar-item', __VLS_ctx.active && 'active']) },
    to: ({ name: __VLS_ctx.route }),
}));
const __VLS_2 = __VLS_1({
    ...{ class: (['sidebar-item', __VLS_ctx.active && 'active']) },
    to: ({ name: __VLS_ctx.route }),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    icon: (__VLS_ctx.itemIcon),
    size: "32",
}));
const __VLS_7 = __VLS_6({
    icon: (__VLS_ctx.itemIcon),
    size: "32",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['sidebar-item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            itemIcon: itemIcon,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=SideBarItem.vue.js.map