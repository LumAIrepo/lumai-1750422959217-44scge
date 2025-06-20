# Solana Wallet Connect Component

A React component for connecting Solana wallets in your dApp using the Solana Wallet Adapter.

## Installation

First, install the required dependencies:

```bash
npm install @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets @solana/web3.js
```

## Setup

### 1. Wallet Provider Setup

Wrap your app with the wallet providers in your `_app.tsx` or main component:

```tsx
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';

// Import wallet adapter CSS
require('@solana/wallet-adapter-react-ui/styles.css');

function MyApp({ Component, pageProps }) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new BackpackWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
```

### 2. Component Usage

Import and use the `WalletConnectButton` component:

```tsx
import WalletConnectButton from './components/WalletConnectButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          My Solana dApp
        </h1>
        <WalletConnectButton />
      </div>
    </div>
  );
}
```

## Component Features

- **Wallet Connection**: Connect to popular Solana wallets (Phantom, Solflare, Backpack, etc.)
- **Wallet Disconnection**: Disconnect from connected wallet
- **Wallet Info Display**: Shows connected wallet's public key
- **Responsive Design**: Mobile-friendly interface
- **Professional Styling**: Matches purple-600 theme with Inter font
- **Error Handling**: Graceful error handling for connection issues

## Styling

The component uses Tailwind CSS with the following theme:
- Primary color: `purple-600`
- Background: `slate-50`
- Font: Inter
- Border radius: `0.5rem`
- Style: Professional light theme

## Wallet Support

The component supports all wallets compatible with the Solana Wallet Adapter, including:
- Phantom
- Solflare
- Backpack
- Sollet
- Ledger
- Torus
- And many more...

## Customization

You can customize the button appearance by modifying the Tailwind classes in the component. The component accepts standard button props and can be extended as needed.

## TypeScript Support

The component is fully typed with TypeScript for better development experience and type safety.

## Network Configuration

By default, the setup uses Devnet. For production, change the network to Mainnet:

```tsx
const network = WalletAdapterNetwork.Mainnet;
```

## Troubleshooting

### Common Issues

1. **CSS not loading**: Make sure to import the wallet adapter CSS:
   ```tsx
   require('@solana/wallet-adapter-react-ui/styles.css');
   ```

2. **Wallet not connecting**: Ensure the wallet extension is installed and the network matches your dApp configuration.

3. **Build errors**: Make sure all peer dependencies are installed and versions are compatible.

### Browser Compatibility

The component works in all modern browsers that support:
- ES2020+
- WebAssembly
- Crypto API

## License

MIT