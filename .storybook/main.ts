import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (storybookWebpackConfig: any) => {
    if (!storybookWebpackConfig.resolve.alias) {
      storybookWebpackConfig.resolve.alias = {};
    }
    storybookWebpackConfig.resolve.alias['@'] = path.resolve(
      __dirname,
      '../src',
    );
    return storybookWebpackConfig;
  },
};
export default config;
