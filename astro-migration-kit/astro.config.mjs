import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    partytown({
      // Adds party town for third-party scripts (HubSpot etc)
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});
