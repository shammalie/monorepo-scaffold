module.exports = {
  '[project]/apps/core/postcss.config.mjs/transform.ts { CONFIG => "[project]/apps/core/postcss.config.mjs [postcss] (ecmascript)" } [postcss] (ecmascript, async loader)':
    (__turbopack_context__) => {
      var { g: global, __dirname } = __turbopack_context__;
      {
        __turbopack_context__.v((parentImport) => {
          return Promise.all(
            [
              "build/chunks/node_modules__pnpm_ec38a98b._.js",
              "build/chunks/[root-of-the-server]__f361ee85._.js",
            ].map((chunk) => __turbopack_context__.l(chunk))
          ).then(() => {
            return parentImport(
              '[project]/apps/core/postcss.config.mjs/transform.ts { CONFIG => "[project]/apps/core/postcss.config.mjs [postcss] (ecmascript)" } [postcss] (ecmascript)'
            );
          });
        });
      }
    },
};
