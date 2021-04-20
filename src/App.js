import React from 'react';
import Styled from 'styled-components';

const AppDiv = Styled.div`
  text-align: center;

  header {
    margin-top: 48px;
  }
`

const App = () => {
  return (
    <AppDiv>
      <header className="greeting">Happy Birthday Cue!</header>
      <div className="picture">INSERT PICTURE HERE</div>
      <section className="message">Birthday message</section>
    </AppDiv>
  );
}

export default App;
