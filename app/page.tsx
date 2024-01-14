'use client'

import { useModal } from 'connectkit'
import { useAccount, useDisconnect } from 'wagmi'

export default function Home() {
  const { isConnected, address, isConnecting } = useAccount()
  const { setOpen } = useModal()
  const { disconnect } = useDisconnect()
  if (isConnecting) return <div>Connecting...</div>
  return (
    <div className='p-20'>
      {
        !isConnected && (
          <button onClick={() => setOpen(true)}>Open Modal</button>
        )
      }
      {
        isConnected && (
          <div>
            <div>Connected Wallet: {address}</div>
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        )
      }
    </div>
  )
}