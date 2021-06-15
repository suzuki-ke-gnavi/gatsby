import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: '読み込んだデータMy blog',
    author: 'John Doeeee',
    description: 'Example blog using GatsbyJS',
    email: 'doe@example.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
        documentPaths: ['src/**/*.{ts,tsx}'],
      },
    },
  ],
};
export default config;
