import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SolanaWalletAdapterProvider } from '@/components/wallet/wallet-adapter-provider';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Solana Wallet Connect Component',
  description: 'Solana dApp built with AI (Cost-Optimized)',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <SolanaWalletAdapterProvider>
          <main>{children}</main>
        </SolanaWalletAdapterProvider>
      </body>
    </html>
  );
}