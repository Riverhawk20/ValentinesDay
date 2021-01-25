import "./App.css";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  toggle = true;
  constructor(props) {
    super(props);
    this.state = {
      src: `../Images/GRACEEEEE.png`,
      toggleText: "Happy Valentine's Day buddy <3 I Love you",
    };
    this.pictureToggleClick = this.pictureToggleClick.bind(this);
  }
  pictureToggleClick(e) {
    this.setState({
      src: this.toggle ? `../Images/angry.png` : `../Images/GRACEEEEE.png`,
      toggleText: this.toggle
        ? "Rawr XD"
        : "Happy Valentine's Day buddy <3 I Love you",
    });
    this.toggle = !this.toggle;
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">HAPPY VALENTINE'S DAY</h1>
        <Carousel interval={null} indicators={false}>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/Cheeks.png`}
              alt="First slide"
            />
            <p className="Caption">
              Happy Valentine's day beautiful! Hit the arrow on the right side
              of the screen (:
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/StoleMyHeart.png`}
              alt="First slide"
            />
            <p className="Caption">
              It's safe to say you stole my heart from day 1. I'll never forget
              how nervous I was to approach you and really get to know you, but
              I'm glad I did.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/OGSelfieTOgether.jpg`}
              alt="First slide"
            />
            <p className="Caption">
              Despite me awkwardly tapping you as I zoomed past you every
              warmup, we started to get to know eachother. We bonded over our
              love for Chipotle and we went there 3 times in barely over a week.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/UsPEar.jpg`}
              alt="First slide"
            />
            <p className="Caption">
              You put up with me being stupid and awkward, and eventually we
              became best friends. You quickly became my favorite person ever
              and I fell in love very quickly.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/DogsCuddloin.jpg`}
              alt="First slide"
            />
            <p className="Caption">
              It was surreal. How could I get such a beautiful, smart, funny,
              kind, goofy, loving, athletic, no BS girl like you. It's like I
              hit the lottery. And best of all, YOU HAD DOGS!!
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/GraceBracelet.png`}
              alt="First slide"
            />
            <p className="Caption">
              I've never had such a serious and real relationship like ours that
              I could never go to anything else. You make the happiest person
              ever, that something as small as dropping something off to you
              makes my day. Something that once seemed so silly to me like
              making a friendship bracelet for someone felt right because well,
              I'd do anything for you and I don't know how to express it
              sometimes.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/GraceSelfie.png`}
              alt="First slide"
            />
            <p className="Caption">
              You are so so beautiful and amazing that words can't possibly
              describe any of it. You're everything I have ever dreamed of and
              more. I wish you truly truly knew how I felt (I'm trying with this
              website!). It is so so real to me and I don't know what I would do
              without you.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/GraceDukeFart.png`}
              alt="First slide"
            />
            <p className="Caption">
              You could smell like a Duke fart and I'd still love you the same.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/GraceJumping.png`}
              alt="First slide"
            />
            <p className="Caption">
              You make jump for joy (it translates into Just Dance success)
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/RAA.jpg`}
              alt="First slide"
            />
            <p className="Caption">
              I can't wait to make more memories with you. We have so much ahead
              in life that I (almost) can't wait. It's hard to not enjoy what I
              have today when I'm with you, so I'm gladly savoring every moment
              until we get there.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="cImage"
              src={`../Images/MeGraceDuke.png`}
              alt="First slide"
            />
            <p className="Caption">
              Grace Elizabeth Klein I love you so so much and I hope I'm being
              the best boyfriend I can be. If I'm not you need to let me know
              because you deserve the world and I want to give you every ounce
              of love an life I have.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="pictureToggle"
              className="cImage"
              src={this.state.src}
              alt="First slide"
            />
            <p className="Caption">{this.state.toggleText}</p>
            <button onClick={this.pictureToggleClick}>Click for suprise</button>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default App;
