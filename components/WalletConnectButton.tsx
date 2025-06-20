```tsx
'use client'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface WalletConnectButtonProps {
  className?: string
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  showBalance?: boolean
}

export default function WalletConnectButton({
  className,
  variant = 'default',
  size = 'md',
  showBalance = false
}: WalletConnectButtonProps) {
  const { connected, publicKey, wallet } = useWallet()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
        'bg-purple-600 text-white hover:bg-purple-700',
        {
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-sm': size === 'md',
          'h-12 px-6 text-base': size === 'lg'
        },
        className
      )}>
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
        Loading...
      </div>
    )
  }

  const baseStyles = cn(
    'wallet-adapter-button-trigger',
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    {
      'h-8 px-3 text-sm': size === 'sm',
      'h-10 px-4 text-sm': size === 'md',
      'h-12 px-6 text-base': size === 'lg'
    }
  )

  const variantStyles = {
    default: 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800',
    outline: 'border border-purple-600 text-purple-600 hover:bg-purple-50 active:bg-purple-100',
    ghost: 'text-purple-600 hover:bg-purple-50 active:bg-purple-100'
  }

  return (
    <div className={cn('wallet-connect-button', className)}>
      <style jsx global>{`
        .wallet-adapter-button-trigger {
          ${baseStyles} ${variantStyles[variant]}
        }
        .wallet-adapter-button-trigger:not([disabled]):hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(147, 51, 234, 0.15);
        }
        .wallet-adapter-button {
          background: none !important;
          border: none !important;
          padding: 0 !important;
          font: inherit !important;
        }
        .wallet-adapter-button-start-icon,
        .wallet-adapter-button-end-icon {
          width: 16px !important;
          height: 16px !important;
        }
        .wallet-adapter-modal-overlay {
          background-color: rgba(0, 0, 0, 0.5) !important;
        }
        .wallet-adapter-modal {
          background-color: #f8fafc !important;
          border-radius: 0.5rem !important;
          border: 1px solid #e2e8f0 !important;
        }
        .wallet-adapter-modal-title {
          color: #1e293b !important;
          font-family: Inter, sans-serif !important;
          font-weight: 600 !important;
        }
        .wallet-adapter-modal-list {
          padding: 0 !important;
        }
        .wallet-adapter-modal-list-more {
          border-top: 1px solid #e2e8f0 !important;
        }
        .wallet-adapter-modal-list li {
          border-radius: 0.5rem !important;
          margin: 0.25rem !important;
        }
        .wallet-adapter-modal-list li:hover {
          background-color: #f1f5f9 !important;
        }
        .wallet-adapter-modal-list li button {
          border-radius: 0.5rem !important;
          font-family: Inter, sans-serif !important;
        }
      `}</style>
      
      <WalletMultiButton className={cn(baseStyles, variantStyles[variant])} />
      
      {connected && showBalance && publicKey && (
        <div className="mt-2 text-xs text-slate-600 font-mono">
          {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
        </div>
      )}
    </div>
  )
}
```