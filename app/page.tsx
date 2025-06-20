'use client';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <header className="text-center mb-8">
        <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Solana Wallet Connect Component</h1>
        <p className="text-lg text-muted-foreground mt-2">Single React component for Solana wallet connection using @solana/wallet-adapter-react-ui</p>
      </header>
      <main className="text-center">
        <p className="mb-6">Core Functionality: undefined</p>
        <WalletMultiButton className="!bg-primary !hover:bg-primary/90 !text-primary-foreground !px-6 !py-3 !rounded-lg !font-semibold" />
      </main>
      <footer className="mt-12 text-xs text-muted-foreground">
        Powered by AI & Solana
      </footer>
    </div>
  );
}