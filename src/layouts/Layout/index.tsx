import Navigation from '@layouts/Navigation';
import Header from '@layouts/Header';
import React from 'react';
import { StyledLayout, StyledInnerContainer } from './style';

interface ILayoutProperties {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProperties) => {
  return (
    <>
      <Header />
      <StyledLayout>
        <StyledInnerContainer>{children}</StyledInnerContainer>
      </StyledLayout>
      <Navigation />
    </>
  );
};

export default Layout;
