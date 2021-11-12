import React from 'react';
import Card from '../components/Card';
import Intro from '../components/Intro';

const intro = {
  content:
    'Premium Online Course merupakan platform belajar coding yang dikemas secara interaktif dengan beragam media, Kamu bisa belajar mengembangkan skill pemrograman melalui platform premium.',
};
class Premium extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Premium Online Course</h1>
        <div className="row mx-2">
          <Intro content={intro.content} />
          <div className="col-md-6">
            {features.map((feature) => (
              <div>
                <h5>{feature.title}</h5>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          {cards.map((card) => (
            <Card imageUrl={card.imageUrl} title={card.title} />
          ))}
        </div>
      </div>
    );
  }
}

const features = [
  {
    title: 'Materi Belajar',
    desc: 'Materi belajar disusun secara sistematis dengan metode dan teknologi terbaru. Materi belajar menggunakan berbagai media.',
  },
  {
    title: 'Waktu Belajar',
    desc: 'Waktu belajar sangat fleksibel, Kamu bisa menyesuaikan waktu belajarmu dengan kesibukan yang kamu miliki.',
  },
  {
    title: 'Metode Belajar',
    desc: 'Kamu hanya perlu mengikuti alur belajar yang telah disediakan dengan membaca teks penjelasan, memutar video belajar dan mencoba sendiri.',
  },
];
const cards = [
  {
    title: 'React Fun',
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'React Fundamental',
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'React Advanced',
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'React Expert',
    imageUrl: 'https://picsum.photos/300/200',
  },
];

export default Premium;
