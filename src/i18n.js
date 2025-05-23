import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    title: 'Today\'s Tasks',
    placeholder: 'Enter a task',
  },
  ru: {
    title: 'Сегодняшние задачи',
    placeholder: 'Введите задачу',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
})

export default i18n
