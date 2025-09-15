'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

type Props = {
  children: ReactNode;
  initialLocale?: string;
};

export default function LocaleProvider({ children, initialLocale = 'bg' }: Props) {
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    if (locale) {
      import(`../../messages/${locale}.json`).then((msgs) => {
        setMessages(msgs.default);
      });
    }
  }, [locale]);

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
