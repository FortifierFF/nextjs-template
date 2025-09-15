'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from './LocaleProvider';

/**
 * LanguageSwitcher - Simple language switching component
 * 
 * This component provides buttons to switch between available languages.
 * It uses the LocaleProvider context to manage the current locale.
 * 
 * To add more languages:
 * 1. Add new translation files in messages/ directory
 * 2. Add new button in this component
 * 3. Update the handleLanguageChange function
 */

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const { locale, setLocale } = useLocale();
  
  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale);
  };
  
  return (
    <div className="mt-6">
      <p className="text-sm text-gray-400 mb-3">{t('chooseLanguage')}</p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            locale === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {t('english')}
        </button>
        <button
          onClick={() => handleLanguageChange('bg')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            locale === 'bg'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {t('bulgarian')}
        </button>
      </div>
    </div>
  );
}
