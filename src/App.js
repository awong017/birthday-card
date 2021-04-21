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
      <section className="message">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur eu pretium metus. Suspendisse elementum, velit eu posuere ultricies, 
        nisi sem tincidunt lectus, nec vulputate diam nunc placerat eros. Pellentesque 
        molestie convallis ligula, maximus porttitor felis consectetur eu. Cras vel dolor ultricies,
        blandit ante in, congue sapien. Vivamus ut porta nunc. Interdum et malesuada fames ac ante 
        ipsum primis in faucibus. In a viverra lorem, vitae interdum dui. Quisque pharetra risus quis
        efficitur blandit. Proin tristique elementum lectus, at blandit leo tincidunt convallis. Suspendisse 
        potenti. Ut cursus ex vel lobortis lobortis. Morbi imperdiet erat sit amet cursus commodo. Suspendisse 
        eros erat, pharetra sed nunc vulputate, finibus dapibus lacus. Quisque velit ipsum, facilisis et semper 
        et, rhoncus vel ligula. Donec accumsan eu augue sed fermentum. Nullam posuere pharetra elit imperdiet tincidunt.
      </section>
    </AppDiv>
  );
}

export default App;
