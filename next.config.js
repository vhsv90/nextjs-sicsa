const { i18n } = require('./next-i18next.config');

module.exports =
{
    i18n,
    reactStrictMode: true,
    optimizeFonts: false,
    // disable eslint
    eslint: {
        ignoreDuringBuilds: true,
    },
}