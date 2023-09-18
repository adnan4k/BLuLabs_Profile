import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = () => {
  return (
    <div className='card-list-container'>
      <Card
        title="Software Development"
        description="Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor."
        image="/assets/software.png"
      />
      <Card
        title="System Development"
        description="Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor."
        image="/assets/system.png"
      />
      <Card
        title="Web Solution  Enterprises "
        description="Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor."
        image="/assets/web1.png"
      />
      <Card
        title=" App Development "
        description="Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor."
        image="/assets/mobile.png"
      />
      <Card
        title="UI/UX Design "
        description="Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor."
        image="/assets/ui.png"
      />
      <Card
        title="IT Consulting "
        description="Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor."
        image="/assets/it.png"
      />
    </div>
  );
};

export default CardList;
