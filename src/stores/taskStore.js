import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([{ id: 1, text: 'Пример задачи' }])
  const checkedTaskIds = ref(new Set())

  const newTaskText = ref('')

  function addTask() {
    const text = newTaskText.value.trim()
    if (!text) return
    tasks.value.push({ id: Date.now(), text })
    newTaskText.value = ''
  }

  function toggleTask(id) {
    if (checkedTaskIds.value.has(id)) {
      checkedTaskIds.value.delete(id)
    } else {
      checkedTaskIds.value.add(id)
    }
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id)
    checkedTaskIds.value.delete(id)
  }

  return {
    tasks,
    checkedTaskIds,
    newTaskText,
    addTask,
    toggleTask,
    deleteTask,
  }
})
