import React from 'react';
import '../styles/index.css';

class Card extends React.Component {
  render() {
    return (
      <div className="col-md-4 my-2">
        <div className="card text-center">
          <img src={this.props.imageUrl} alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.subtitle}</p>
            <a href="#" className="btn btnAction">
              Mulai
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
