import React from 'react'
import { useOpenConnectModal } from '@0xsequence/kit'
import { useDisconnect, useAccount } from 'wagmi'
import MyPage from './MyPage.jsx'

import { KitProvider } from '@0xsequence/kit'
import { getDefaultConnectors } from '@0xsequence/kit-connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createConfig, http, WagmiConfig } from 'wagmi'
import { mainnet, polygon, Chain } from 'wagmi/chains'

const queryClient = new QueryClient() 

function App() {
  const chains = [mainnet, polygon]
  const projectAccessKey = ENV.projectAccessKey

  const connectors = getDefaultConnectors({
    walletConnectProjectId: ENV.walletConnectId,
    defaultChainId: 137,
    appName: 'demo app',
    projectAccessKey
  })

  const transports = {}

  chains.forEach(chain => {
    transports[chain.id] = http()
  })
  
  const config = createConfig({
    transports,
    connectors,
    chains
  })

  return (
    <WagmiConfig config={config}>
        <QueryClientProvider client={queryClient}> 
        <KitProvider config={{defaultTheme: 'dark'}}>
          <MyPage/>
        </KitProvider>
        </QueryClientProvider>
    </WagmiConfig>
  );
}

export default App;