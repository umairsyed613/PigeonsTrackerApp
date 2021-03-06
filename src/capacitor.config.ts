import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pigeonstracker.app',
  appName: 'PigeonsTracker',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    },
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "32162898136-2dnfe9k3b397kkmglhv3bftes9sik46n.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
