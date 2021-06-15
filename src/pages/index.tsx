import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/layout';

const Page: React.FC = () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello, GatsbyJS!</p>
    <Link to="/aboutabout">About this blog</Link>
  </Layout>
);
export default Page;
