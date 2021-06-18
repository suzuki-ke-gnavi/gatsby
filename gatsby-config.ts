import type { GatsbyConfig } from 'gatsby';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.SERVICE_ID,
        apis: [
          {
            endpoint: 'rule',
          },
        ],
      },
    },
  ],
};
export default config;
