'use client';

import Feature from '@/Components/FeatureSection/Feature';
import Header from '@/Components/HeaderSection/Header.section';
import Footer from '@/Components/FooterSection/FooterSection';
import Simulasi from '@/Components/SimulasiSection/Simulasi.section';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import { useRef } from 'react';

export default function Home({
  dataNavbar,
  dataNavbarMenu,
}: {
  dataNavbar: any;
  dataNavbarMenu: any;
}) {
  const tawkMessengerRef = useRef();

  return (
    <div className="">
      <Header dataNavbar={dataNavbar} dataNavbarMenu={dataNavbarMenu} />
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

