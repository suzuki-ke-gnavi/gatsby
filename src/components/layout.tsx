import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Layout: React.FC = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </div>
);
