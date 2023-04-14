import { mergeConfig } from 'vite';

export default {
    stories: ["../src/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    framework: "@storybook/react-vite",
    core: {
        builder: "@storybook/builder-vite",
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            optimizeDeps: {
                include: ["storybook-dark-mode"],
            },
        });
    },
};
