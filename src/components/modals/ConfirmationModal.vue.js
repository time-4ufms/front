import TrkModal from './TrkModal.vue';
import TrkButton from '../TrkButton.vue';
import { useI18n } from '@/composables/useI18n';
import { computed } from 'vue';
const { t } = useI18n();
const props = defineProps();
const emit = defineEmits();
const open = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
        if (!value)
            emit('cancel');
    },
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof TrkModal, typeof TrkModal, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(TrkModal, new TrkModal({
    ...{ 'onShadowClick': {} },
    modelValue: (__VLS_ctx.open),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onShadowClick': {} },
    modelValue: (__VLS_ctx.open),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onShadowClick: (...[$event]) => {
        __VLS_ctx.open = false;
    }
};
var __VLS_7 = {};
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "modal-card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "modal-title" },
});
(__VLS_ctx.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "modal-content" },
});
(__VLS_ctx.body);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "modal-actions" },
});
/** @type {[typeof TrkButton, typeof TrkButton, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(TrkButton, new TrkButton({
    ...{ 'onClick': {} },
}));
const __VLS_9 = __VLS_8({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_11;
let __VLS_12;
let __VLS_13;
const __VLS_14 = {
    onClick: (...[$event]) => {
        __VLS_ctx.emit('confirm');
    }
};
__VLS_10.slots.default;
(__VLS_ctx.t('components.modals.confirmationModal.confirm'));
var __VLS_10;
/** @type {[typeof TrkButton, typeof TrkButton, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(TrkButton, new TrkButton({
    ...{ 'onClick': {} },
    variant: "plain",
    color: "danger",
}));
const __VLS_16 = __VLS_15({
    ...{ 'onClick': {} },
    variant: "plain",
    color: "danger",
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
let __VLS_18;
let __VLS_19;
let __VLS_20;
const __VLS_21 = {
    onClick: (...[$event]) => {
        __VLS_ctx.open = false;
    }
};
__VLS_17.slots.default;
(__VLS_ctx.t('components.modals.confirmationModal.cancel'));
var __VLS_17;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['modal-card']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-title']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
/** @type {__VLS_StyleScopedClasses['modal-actions']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            TrkModal: TrkModal,
            TrkButton: TrkButton,
            t: t,
            emit: emit,
            open: open,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ConfirmationModal.vue.js.map