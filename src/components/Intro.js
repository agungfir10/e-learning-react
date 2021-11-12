import React from 'react';
import '../styles/index.css';

class Intro extends React.Component {
  render() {
    return (
      <div className="col-md-6" style={styles.box450}>
        <h4 style={styles.greyText}>{this.props.content}</h4>
        <a href="#" className="btn btnAction">
          Pelajari Detail Program
        </a>
      </div>
    );
  }
}

const styles = {
  box450: {
    height: '450px',
  },
  greyText: {
    color: '#808080',
  },
};

export default Intro;
