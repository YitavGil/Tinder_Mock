import React, {useState} from 'react';
import './tinderCards.css';
import TinderCard from 'react-tinder-card';

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'Mr. T',
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxn7_p3a_THe0YKMY2gHZgBXM4k5nrhfYYiBWC6ZALJRG9lfGC8aZ5IVPGUXBKbMjUlo&usqp=CAU"
        },
        {
            name: 'geralt of rivia',
            url: "https://assets2.rockpapershotgun.com/the-witcher-3-best-rpgs.jpg/BROK/thumbnail/1200x1200/quality/100/the-witcher-3-best-rpgs.jpg"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      // setLastDirection(direction);
    };

    const outOfFrame = name => {
      console.log(name + " left the screen");
    };


  return (
    <div className='tinder-cards'>
        <div className="tinderCards-container">
      {people.map((person) => (
          <TinderCard
          className='swipe'
          key={person.name}
          preventSwipe={['up', 'down']}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
          >

            <div
            style={{backgroundImage: `url(${person.url})`}}
            className="card"
            >
              <h3>{person.name}</h3>

            </div>

          </TinderCard>
      ))}
        </div>
    </div>
  )
}

export default TinderCards