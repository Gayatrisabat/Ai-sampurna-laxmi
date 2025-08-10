import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        dashboard: 'Dashboard',
        modules: 'Modules',
        games: 'Games',
        leaderboard: 'Leaderboard',
        forum: 'Forum',
        resources: 'Resources',
        profile: 'Profile'
      },
      common: {
        welcome: 'Welcome to NariFinance',
        points: 'Points',
        badges: 'Badges',
        startLearning: 'Start Learning',
        continue: 'Continue'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        dashboard: 'डैशबोर्ड',
        modules: 'मॉड्यूल',
        games: 'खेल',
        leaderboard: 'लीडरबोर्ड',
        forum: 'चर्चा मंच',
        resources: 'संसाधन',
        profile: 'प्रोफ़ाइल'
      },
      common: {
        welcome: 'नारीफाइनेंस में आपका स्वागत है',
        points: 'अंक',
        badges: 'बैज',
        startLearning: 'सीखना शुरू करें',
        continue: 'जारी रखें'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n