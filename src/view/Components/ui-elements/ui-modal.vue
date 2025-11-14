<script setup lang="ts">
import { RiCloseLine } from 'vue-remix-icons';
import pageHeading from '@/components/common/PageHeading.vue';
import Modal from './modal.vue';
import { ref } from 'vue';

const isModalOpen = ref(false);
function changeModal() {
    isModalOpen.value = !isModalOpen.value
}
const activeModal = ref<string | null>(null);

function openModal(modalId: string) {
    activeModal.value = modalId;
}

function closeModal() {
    activeModal.value = null;
}

const sizeActiveModal = ref<string | null>(null);

const modals = [
    { id: 'extraSmallModal', title: 'Extra Small Modal', size: 'modal-xs', buttonLabel: 'Extra small' },
    { id: 'smallModal', title: 'Small Modal', size: 'modal-sm', buttonLabel: 'Small' },
    { id: 'largeModal', title: 'Large Modal', size: 'modal-lg', buttonLabel: 'Large' },
    { id: 'extraLargeModal', title: 'Extra Large Modal', size: 'modal-xl', buttonLabel: 'Extra Large' },
    { id: 'extraExtraLargeModal', title: 'Extra Extra Large Modal', size: 'modal-2xl', buttonLabel: 'Extra Extra Large' },
];

function sizeOpenModal(modalId: string) {
    sizeActiveModal.value = modalId;
}

function sizeCloseModal(modalId: string) {
    if (sizeActiveModal.value === modalId) {
        sizeActiveModal.value = null;
    }
}

</script>
<template>
    <pageHeading title="Modal" sub-title="UI" />
    <div class="grid grid-cols-1 gap-x-space">
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Basic</h6>
            </div>
            <div class="card-body">
                <button @click="changeModal" type="button" class="btn btn-primary">Default Modal</button>
                <div id="defaultModal" :class="isModalOpen ? 'modal' : 'hidden modal show'">
                    <div class="modal-wrap modal-center">
                        <div class="modal-header">
                            <h6>Modal Heading</h6>
                            <button data-modal-close="defaultModal" class="link link-red">
                                <RiCloseLine class="w-5" @click="changeModal" />
                            </button>

                        </div>
                        <div class="modal-content">
                            <h6 class="mb-3">Modal Content</h6>
                            <p class="text-gray-500 dark:text-dark-500">They all have something to say beyond the words
                                on the page. They can come across as casual or neutral, exotic or graphic.</p>
                        </div>
                        <div class="modal-footer">
                            <h6>Modal Footer</h6>
                        </div>
                    </div>
                    <div id="backDropDiv" class="backdrop-overlay backdrop-blur-xs" @click="changeModal"></div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Modal Position</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap gap-2">
                    <button @click="openModal('centerModal')" type="button" class="btn btn-sub-gray">Center
                        Modal</button>
                    <button @click="openModal('topModal')" type="button" class="btn btn-sub-gray">Top Modal</button>
                    <button @click="openModal('topLeftModal')" type="button" class="btn btn-sub-gray">Top Left
                        Modal</button>
                    <button @click="openModal('topRightModal')" type="button" class="btn btn-sub-gray">Top Right
                        Modal</button>
                    <button @click="openModal('rightBottomModal')" type="button" class="btn btn-sub-gray">Bottom Right
                        Modal</button>
                    <button @click="openModal('leftBottomModal')" type="button" class="btn btn-sub-gray">Bottom Left
                        Modal</button>
                </div>

                <Modal v-if="activeModal === 'centerModal'" @close="closeModal" title="Center Modal"
                    position="modal-center">
                    <template #content>
                        <h6 class="mb-3">Modal Content</h6>
                        <p class="text-gray-500 dark:text-dark-500">
                            They all have something to say beyond the words on the page. They can come across as casual
                            or
                            neutral, exotic or graphic.
                        </p>
                    </template>
                </Modal>

                <Modal v-if="activeModal === 'topModal'" @close="closeModal" title="Top Modal" position="modal-top">
                    <template #content>
                        <h6 class="mb-3">Modal Content</h6>
                        <p class="text-gray-500 dark:text-dark-500">
                            They all have something to say beyond the words on the page. They can come across as casual
                            or
                            neutral, exotic or graphic.
                        </p>
                    </template>
                </Modal>

                <Modal v-if="activeModal === 'topLeftModal'" @close="closeModal" title="Top Left Modal"
                    position="modal-tl">
                    <template #content>
                        <h6 class="mb-3">Modal Content</h6>
                        <p class="text-gray-500 dark:text-dark-500">
                            They all have something to say beyond the words on the page. They can come across as casual
                            or
                            neutral, exotic or graphic.
                        </p>
                    </template>
                </Modal>

                <Modal v-if="activeModal === 'topRightModal'" @close="closeModal" title="Top Right Modal"
                    position="modal-tr" class="fixed right-0">
                    <template #content>
                        <h6 class="mb-3">Modal Content</h6>
                        <p class="text-gray-500 dark:text-dark-500">
                            They all have something to say beyond the words on the page. They can come across as casual
                            or
                            neutral, exotic or graphic.
                        </p>
                    </template>
                </Modal>

                <Modal v-if="activeModal === 'rightBottomModal'" @close="closeModal" title="Bottom Right Modal"
                    position="modal-br">
                    <template #content>
                        <h6 class="mb-3">Modal Content</h6>
                        <p class="text-gray-500 dark:text-dark-500">
                            They all have something to say beyond the words on the page. They can come across as casual
                            or
                            neutral, exotic or graphic.
                        </p>
                    </template>
                </Modal>

                <Modal v-if="activeModal === 'leftBottomModal'" @close="closeModal" title="Bottom Left Modal"
                    position="modal-bl">
                    <template #content>
                        <h6 class="mb-3">Modal Content</h6>
                        <p class="text-gray-500 dark:text-dark-500">
                            They all have something to say beyond the words on the page. They can come across as casual
                            or
                            neutral, exotic or graphic.
                        </p>
                    </template>
                </Modal>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Size Modal</h6>
            </div>
            <div class="card-body">
                <div class="flex flex-wrap items-center gap-2">
                    <button v-for="modal in modals" :key="modal.id" @click="sizeOpenModal(modal.id)" type="button"
                        class="btn btn-sub-gray">
                        {{ modal.buttonLabel }}
                    </button>
                </div>

                <div v-for="modal in modals" :key="modal.id" :id="modal.id" class="modal"
                    v-show="sizeActiveModal === modal.id">
                    <div :class="['modal-wrap', modal.size, 'modal-center']">
                        <div class="modal-header">
                            <h6>{{ modal.title }}</h6>
                            <button @click="sizeCloseModal(modal.id)" class="link link-red">
                                <span class="size-5">✖</span>
                            </button>
                        </div>
                        <div class="modal-content">
                            <h6 class="mb-2">Modal Content</h6>
                            <p class="text-gray-500 dark:text-dark-500">
                                They all have something to say beyond the words on the page. They can come across as
                                casual or
                                neutral, exotic or graphic.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <h6>Modal Footer</h6>
                        </div>
                    </div>
                    <div id="backDropDiv" class="backdrop-overlay backdrop-blur-xs" @click="sizeCloseModal(modal.id)"></div>
                </div>
            </div>
        </div>
    </div>
</template>
