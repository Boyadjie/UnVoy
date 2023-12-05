import './globals.css';

import Head from './Head';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <Head />
      <body>{children}</body>
    </html>
  );
}
