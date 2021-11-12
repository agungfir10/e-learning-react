import React from 'react';
import { Link } from 'react-router-dom';
class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5 px-5" style={styles.hero}>
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                Move beyond the limitations of e-Learning
              </h1>
              <p>Anytime, anywhere to do discover yourself.</p>
              <Link to="/get-started" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/instructor" style={styles.linkBecomeInstructor}>
                Become an instructor
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src="https://picsum.photos/400"
                alt=""
                style={styles.imageHero}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  hero: {
    backgroundColor: '#F7F6EE',
  },
  imageHero: {
    width: '100%',
  },
  linkBecomeInstructor: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
    margin: '0 14px',
  },
};

export default Hero;
