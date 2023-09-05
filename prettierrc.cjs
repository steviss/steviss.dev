module.export = {
  printWidth: 140,
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  importOrder: [
    '^src/types|src/utilities(.*)$',
    '^src/components/store(.*)$',
    '^src/pages(.*)$',
    '^src/components/organisms(.*)$',
    '^src/components/molecules(.*)$',
    '^src/components/atoms(.*)$',
    '^src/store(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve('prettier-plugin-astro'), require.resolve('@trivago/prettier-plugin-sort-imports')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
