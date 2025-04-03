import './globals.css';

// src/app/layout.tsx
import { ReduxProvider } from '../lib/redux/provider';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        {/* Script to remove attributes added by browser extensions */}
        <Script id="remove-extension-attributes" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', () => {
              // Remove Grammarly attributes or other extension attributes
              const body = document.querySelector('body');
              if (body) {
                body.removeAttribute('data-new-gr-c-s-check-loaded');
                body.removeAttribute('data-gr-ext-installed');
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}