import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('hi') ? 'hi' : 'en'

  const toggle = () => {
    i18n.changeLanguage(current === 'en' ? 'hi' : 'en')
  }

  return (
    <button onClick={toggle} className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
      {current === 'en' ? 'हिंदी' : 'EN'}
    </button>
  )
}

export default LanguageSwitcher