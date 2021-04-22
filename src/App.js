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

    .balloons {
      height: 250px;
      width: 200px;
      background-image: url(${balloons});
      background-size: cover; 
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
        margin-left: 24px;

        .heart {
          margin-top: 48px;
          width: 48px;
          height: 48px;
          background-image: url(${heart});
          background-size: cover; 
        }
      }

      .ps {
        margin-left: 24px;
        font-size: 24px;
        font-family: 'Amatic SC', cursive;
      }
    }
  }

  @media screen and (max-width: 450px) {
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
          Words cannot describe how I've been feeling after I met you. I still think about
          how lucky I am that you decided to angrily swipe through Hinge one late Saturday
          night haha. Your empathy, passion, and beauty instantly made me gravitate toward
          you. Often times you apologize about talking about work too much, but little do
          you know, hearing you talk about your kiddos truly melts my heart. I hope you know I
          am listening and that your remarkable work ethic has not gone unnoticed. It scares
          me how much I think about you. There are times where I have to stop and catch
          my breath just from the thought of you, but I know that just means that I've
          fallen in love. Thank you for finding me and showing me what it's like to
          have such a loving and supportive partner. Thank you for trusting me and
          believing in me on my journey to becoming a software developer even when
          there are days that I don't believe in myself. You are the light that
          shines through even my darkest days. I can't wait to see what the future has
          in store for us and I'm so excited to continue on this adventure with you that
          is life. I love you and wish you the happiest of birthdays!
        </section>
        <div className="closing">
          <div>
            <img className="bruery-pic" src={bruery} alt="bruery-pic"/> 
          </div>
          <div className="sign-off">
            <p>Love always,</p>
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
