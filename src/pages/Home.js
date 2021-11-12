import React from 'react';
import Hero from '../components/Hero';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Hero />
      </div>
    );
  }
}

const styles = {
  imageCover: {
    width: '100%',
    height: '70vh',
    objectFit: 'cover',
  },
  blockText: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  },
};

export default Home;
