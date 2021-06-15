import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import type { FooterComponentQuery } from '../../types/graphql-types';

export const Footer: React.FC = () => {
  const data = useStaticQuery<FooterComponentQuery>(graphql`
    query FooterComponent {
      site {
        siteMetadata {
          author
          email
        }
      }
    }
  `);

  return (
    <footer>
      <p>&copy; {data.site?.siteMetadata?.author ?? ''}</p>
      <ul>
        <li>
          <Link to="/aboutabout">About</Link>
        </li>
        <li>
          <a href={`mailto:${data.site?.siteMetadata?.email ?? ''}`}>Contact</a>
        </li>
      </ul>
    </footer>
  );
};
