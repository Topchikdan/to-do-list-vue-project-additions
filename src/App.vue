<script setup>
import { useTaskStore } from './stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <v-app>
    <router-view>
      <v-main class="bg-grey-darken-4 d-flex flex-column align-center min-h-screen pa-4">
        <v-container class="pa-0" style="width: 80%; max-width: 1000px">
          <h2 class="text-white text-center mb-6">Сегодняшние задачи</h2>

          <v-slide-y-transition group>
            <v-card
              v-for="task in store.tasks"
              :key="task.id"
              class="d-flex align-center justify-space-between px-4 py-2 mb-3 mx-auto"
              elevation="3"
              rounded="xl"
              color="grey-darken-2"
              max-width="100%"
            >
              <v-checkbox
                :model-value="store.checkedTaskIds.has(task.id)"
                @update:modelValue="() => store.toggleTask(task.id)"
                class="me-3"
                hide-details
                color="white"
                density="compact"
              />
              <div class="flex-grow-1 text-white text-body-1">
                <span :class="{ 'text-decoration-line-through': store.checkedTaskIds.has(task.id) }">
                  {{ task.text }}
                </span>
              </div>
              <v-btn icon color="red" size="x-small" @click="store.deleteTask(task.id)">
                <v-icon size="16">mdi-close</v-icon>
              </v-btn>
            </v-card>
          </v-slide-y-transition>

          <div class="position-relative mt-4">
            <div
              class="bg-grey-darken-4 rounded-pill px-2 py-1 d-flex align-center"
              style="position: absolute; inset: 0; z-index: 1"
            ></div>
            <div class="d-flex align-center" style="position: relative; z-index: 2">
              <v-text-field
                v-model="store.newTaskText"
                placeholder="Введите задачу"
                variant="solo"
                hide-details
                density="comfortable"
                bg-color="white"
                color="black"
                class="flex-grow-1 me-3"
                rounded
                style="border-radius: 999px; background-color: white; color: black"
                @keyup.enter="store.addTask"
              />
              <v-btn icon color="purple" size="large" @click="store.addTask">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </v-container>
      </v-main>
    </router-view>
  </v-app>
</template>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
