<script setup>
import { useTaskStore } from './stores/taskStore'
import { useI18n } from 'vue-i18n'
import BaseCard from './components/BaseCard.vue'

const store = useTaskStore()
const { t, locale } = useI18n()
</script>

<template>
  <v-app>
    <router-view>
      <v-main class="bg-grey-darken-4 d-flex flex-column align-center min-h-screen pa-4">
        <v-container class="pa-0" style="width: 80%; max-width: 1000px">
          <h2 class="text-white text-center mb-6">{{ t('title') }}</h2>

          <v-slide-y-transition group>
            <BaseCard
              v-for="task in store.tasks"
              :key="task.id"
            >
              <template #left>
                <v-checkbox
                  :model-value="store.checkedTaskIds.has(task.id)"
                  @update:modelValue="() => store.toggleTask(task.id)"
                  class="me-3"
                  hide-details
                  color="white"
                  density="compact"
                />
              </template>

              <template #default>
                <span
                  class="text-white text-body-1"
                  :class="{ 'text-decoration-line-through': store.checkedTaskIds.has(task.id) }"
                >
                  {{ task.text }}
                </span>
              </template>

              <template #right>
                <v-btn icon color="red" size="x-small" @click="store.deleteTask(task.id)">
                  <v-icon size="16">mdi-close</v-icon>
                </v-btn>
              </template>
            </BaseCard>
          </v-slide-y-transition>

          <div class="position-relative mt-4">
            <div
              class="bg-grey-darken-4 rounded-pill px-2 py-1 d-flex align-center"
              style="position: absolute; inset: 0; z-index: 1"
            ></div>
            <div class="d-flex align-center" style="position: relative; z-index: 2">
              <v-text-field
                v-model="store.newTaskText"
                :placeholder="t('placeholder')"
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

          <div class="mt-6 d-flex justify-center">
            <v-btn class="me-2" @click="locale = 'ru'" :variant="locale === 'ru' ? 'flat' : 'outlined'">RU</v-btn>
            <v-btn @click="locale = 'en'" :variant="locale === 'en' ? 'flat' : 'outlined'">EN</v-btn>
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
