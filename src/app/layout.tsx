import type { Metadata } from 'next';
import './globals.css';



export const metadata: Metadata = {
  title: 'HomeFunding - Investasi Terbaikmu',
  description: 'Find your best investment',
  icons: {
    icon: '/Logo.png',
  },
  keywords: [
    'HomeFunding',
    'Investasi',
    'Rumah',
    'Properti',
    'Saham',
    'Murah',
    'Jakarta',
    'Indonesia',
    'Depok',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <head>
        <body >{children}</body>
      </head>
    </html>
  );
}
