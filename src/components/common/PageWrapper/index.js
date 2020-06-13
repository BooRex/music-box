import React from 'react';

const styles = {
  height: '100vh',
  background: '#222'
};


const PageWrapper = ({children}) => (
  <div style={styles}>{children}</div>
);

export default PageWrapper;
