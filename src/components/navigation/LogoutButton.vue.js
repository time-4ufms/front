import { ref } from 'vue';
import { useI18n } from '@/composables/useI18n';
import ConfirmationModal from '@/components/modals/ConfirmationModal.vue';
import LogoutOutline from '../icons/LogoutOutline.vue';
const { t } = useI18n();
const modalOpen = ref(false);
const showLogoutModal = () => {
    modalOpen.value = true;
};
const logoutConfirm = () => {
    modalOpen.value = false;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    type: "button",
    ...{ class: "logoutButton" },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    type: "button",
    ...{ class: "logoutButton" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (__VLS_ctx.showLogoutModal)
};
__VLS_3.slots.default;
const __VLS_8 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    icon: (__VLS_ctx.LogoutOutline),
    size: "32",
}));
const __VLS_10 = __VLS_9({
    icon: (__VLS_ctx.LogoutOutline),
    size: "32",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_3;
/** @type {[typeof ConfirmationModal, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(ConfirmationModal, new ConfirmationModal({
    ...{ 'onConfirm': {} },
    modelValue: (__VLS_ctx.modalOpen),
    title: (__VLS_ctx.t('components.modals.logoutModal.title')),
    body: (__VLS_ctx.t('components.modals.logoutModal.body')),
}));
const __VLS_13 = __VLS_12({
    ...{ 'onConfirm': {} },
    modelValue: (__VLS_ctx.modalOpen),
    title: (__VLS_ctx.t('components.modals.logoutModal.title')),
    body: (__VLS_ctx.t('components.modals.logoutModal.body')),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
let __VLS_15;
let __VLS_16;
let __VLS_17;
const __VLS_18 = {
    onConfirm: (__VLS_ctx.logoutConfirm)
};
var __VLS_14;
/** @type {__VLS_StyleScopedClasses['logoutButton']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ConfirmationModal: ConfirmationModal,
            LogoutOutline: LogoutOutline,
            t: t,
            modalOpen: modalOpen,
            showLogoutModal: showLogoutModal,
            logoutConfirm: logoutConfirm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=LogoutButton.vue.js.map