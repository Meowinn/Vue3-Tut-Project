<script setup>

defineProps({
    show: Boolean
});


</script>

<template>
    <Transition
    enter-from-class="transition duration-300 opacity-0"
    enter-to-class=" transition duration-300 opacity-100"
    leave-from-class="transition duration-200 opacity-100"
    leave-to-class="transition duration-150 opacity-0"
    >
        <div class="modal-mask" v-if="show == true">
            <div class="modal-container">
                <div>
                    <slot>default body</slot>
                </div>
                <footer class="modal-footer">
                    <slot name="footer">
                        <button class="closeBtn" @click="$emit('closeEvent')"> Default Close</button>
                    </slot>
                </footer>
            </div>
        </div>
    </Transition>
</template>

<style scoped>

.modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0, .5);
    display: grid;
    place-items: center;
    display: grid;
    place-items: center;
}

.modal-container {
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 7px;
}

.closeBtn {
    background-color: rgb(216, 103, 103);
    padding: .25rem .75rem;
    border-radius: 25px;
    color: rgb(218, 213, 213);
}

.closeBtn:hover {
    background-color: rgb(143, 64, 64);
    cursor: pointer;
}

.modal-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 0.5rem;
    font-size: .8rem;
}
</style>