'use client';

import {useTranslations} from 'next-intl';
import LanguageSwitcher from '../components/LanguageSwitcher';

/**
 * Home Page - Example of using internationalization
 * 
 * This page demonstrates how to use the i18n system:
 * 1. Import useTranslations from 'next-intl'
 * 2. Use t('key') to get translated strings
 * 3. Translation keys are defined in messages/*.json files
 */

export default function Home() {
  const t = useTranslations('HomePage');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-900 text-white">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
        <p className="text-gray-300">{t('welcome')}</p>
       <LanguageSwitcher />
      </div>
    </main>
  );
}
