import { WagmiConfig, createConfig } from 'wagmi';
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from 'connectkit';

const config = createConfig(
  getDefaultConfig({
    // API keys
    infuraId: process.env.INFURA_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID || '',

    // App info
    appName: 'ConnectKit Demo',
    appDescription: 'ConnectKit Demo App',
    appUrl: 'https://family.co',
    appIcon: 'https://family.co/logo.png',
  }),
);

export const ConnectkitProvider = ({ children }: any) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        {children}
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}