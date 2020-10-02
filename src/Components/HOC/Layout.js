import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/index';

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
