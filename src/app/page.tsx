'use client';

import Feature from '@/Components/FeatureSection/Feature';
import Header from '@/Components/HeaderSection/Header.section';
import Footer from '@/Components/FooterSection/FooterSection';
import Simulasi from '@/Components/SimulasiSection/Simulasi.section';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import { useRef } from 'react';

export default function Home() {
  const tawkMessengerRef = useRef();

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <div>
      <Header />
      <Feature />
      <Footer />
      <TawkMessengerReact
        propertyId="65813f6a07843602b80389b9"
        widgetId="1hi0dve8l"
        ref={tawkMessengerRef}
      />
    </div>
  );
}
