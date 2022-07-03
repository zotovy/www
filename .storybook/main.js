const path = require("path");

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    staticDirs: ["../static/"],
    webpackFinal: async config => {
        // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
        config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
        // use babel-plugin-remove-graphql-queries
        // to remove static queries from components when rendering in storybook
        config.module.rules[0].use[0].options.plugins.push(
            require.resolve("babel-plugin-remove-graphql-queries")
        )

        config.resolve.alias = {
            '@src': path.resolve(__dirname, '../src'),
            '@/components': path.resolve(__dirname, '../src/components'),
        }

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        return config
    },
}