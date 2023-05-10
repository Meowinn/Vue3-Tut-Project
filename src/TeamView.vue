<script setup>
import TeamHeader from '../src/components/TeamHeader.vue'
import TeamMembers from '../src/components/TeamMembers.vue'
import TeamFooter from '../src/components/TeamFooter.vue'
import { useTeamStore } from '../src/stores/TeamStore'
import Modal from '../src/components/Modal.vue'
import { ref } from 'vue'

let team = useTeamStore()
team.fill()

let showModal = ref(false)
</script>

<template >
  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamHeader @add="showModal = true" />
    <TeamMembers />
    <TeamFooter />

    <Teleport to="body">
      <Modal :show="showModal" @closeEvent="showModal = false">
        <template #default>
          <p>Need to add a new member to your team?</p>
          <form class="mt-6">
            <div class="flex gap-2">
              <input type="email" placeholder="Email Address..." class="flex-1" />
              <button>Add</button>
            </div>
          </form>
        </template>
      </Modal>
    </Teleport>
  </div>
</template>