import React from 'react';
import Styled from 'styled-components';
import bruery from './images/bruery.jpg';
import balloons from './images/balloons-three.png';
import heart from './images/heart.png';

const AppDiv = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');


  .heading {
    margin-top: 96px;
    margin-left: 24px;

    .date {
      font-size: 24px;
      font-family: 'Amatic SC', cursive;
    }

    .greeting {
      font-size: 48px;
      font-family: 'Dancing Script', cursive;
    }
  }

  .message {
    margin-top: 96px;
    padding-left: 48px;
    padding-right: 16px;
    font-size: 24px;
    font-family: 'Amatic SC', cursive;
  }

  .closing {
    display: grid;
    grid-template-columns: 35% 65%;
    margin-top: 48px;
    margin-bottom: 24px;

    .bruery-pic {
      margin-left: 150px;
      border: 2px solid gray;
      border-radius: 50%;
      width: 300px;
      height: 400px;
    }

    .sign-off {
      padding-left: 200px;
      padding-right: 16px;
      font-size: 48px;
      font-family: 'Dancing Script', cursive;

      .signature {
        display: flex;

        .heart {
          margin-top: 48px;
          width: 48px;
          height: 48px;
          background-image: url(${heart});
          background-size: cover; 
        }
      }

      .ps {
        font-size: 24px;
        font-family: 'Amatic SC', cursive;
      }
    }
  }

  @media screen and (max-width: 430px) {
    .heading {
      margin-top: 48px;
  
      .date {
        text-align: center;
        font-size: 20px;
      }
  
      .greeting {
        text-align: center;
        font-size: 36px;
      }

      .balloons {
        margin: auto;
        height: 250px;
        width: 200px;
        background-image: url(${balloons});
        background-size: cover; 
      }
    }
  
    .message {
      margin-top: 48px;
      padding-left: 24px;
      font-size: 20px;
    }
  
    .closing {
      grid-template-columns: 50% 50%;
      margin-top: 24px;
      margin-bottom: 24px;
  
      .bruery-pic {
        margin-left: 24px;
        border: 2px solid gray;
        border-radius: 50%;
        width: 200px;
        height: 275px;
      }
  
      .sign-off {
        padding-left: 48px;
        font-size: 36px;

        .signature {
  
          .heart {
            margin-top: 32px;
          }
        }

        .ps {
          font-size: 20px;
        }
      }
    }
  }

`

const App = () => {
  return (
    <AppDiv>
      <header className="heading">
        <p className="date">April 23rd, 2021</p>
        <p className="greeting">Happy Birthday Cue!</p>
        <div className="balloons" />
      </header>
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
        <div className="closing">
          <div>
            <img className="bruery-pic" src={bruery} alt="bruery-pic"/> 
          </div>
          <div className="sign-off">
            <p>Love you always,</p>
            <div className="signature">
              <p>Cue</p>
              <div className="heart" />
            </div>
            <p className="ps">
              P.S: I hope you love SD as much as you claim because I
              got us an airbnb =)
            </p>
          </div>
        </div>
    </AppDiv>
  );
}

export default App;
