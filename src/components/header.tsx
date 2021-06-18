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
        <Link to="/">{data.site?.siteMetadata?.title ?? ''}</Link>
      </h1>
    </header>
  );
};
