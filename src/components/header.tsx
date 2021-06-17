import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import type { HeaderComponentQuery } from '../../types/graphql-types';

export const Header: React.FC = () => {
  const data = useStaticQuery<HeaderComponentQuery>(graphql`
    query HeaderComponent {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <h1>
        <p>{process.env.GATSBY_API_URL}</p>
        <p>{process.env.X_API_KEY}</p>
        <p>{process.env.SERVICE_ID}</p>
        <Link to="/">{data.site?.siteMetadata?.title ?? ''}</Link>
      </h1>
    </header>
  );
};
