import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { MicrocmsContentsQuery } from '../../types/graphql-types';

type Props = {
  data: MicrocmsContentsQuery;
};

const Page: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello, GatsbyJS!</p>
      {data.allMicrocmsRule.edges.map(({ node }) => (
        <li key={node.cat}>{node.sub_cat}</li>
      ))}
      <Link to="/aboutabout">About this blog</Link>
    </Layout>
  );
};
export default Page;

export const query = graphql`
  query MicrocmsContents {
    allMicrocmsRule {
      edges {
        node {
          cat
          sub_cat
        }
      }
    }
  }
`;
