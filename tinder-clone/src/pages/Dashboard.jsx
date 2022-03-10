import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from '../comps/ChatContainer';

const Dashboard = () => {

  const persons = [
    {
      name: 'Richard Hendricks',
      url: 'https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=800,534'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://cdn.vox-cdn.com/thumbor/prZDWmD_4e4Js7KCRJ2JDrJOqO0=/0x0:939x704/1400x1050/filters:focal(0x0:939x704):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49610677/homersimpson.0.0.jpg'
    },
    {
      name: 'Monica Hall',
      url: 'https://pbs.twimg.com/profile_images/573831582856933376/8D1yODk4_400x400.jpeg'
    },
    {
      name: 'Captain',
      url: 'https://optimistic-chandrasekhar-a9f5eb.netlify.app/captain/Annicent.jpeg'
    },
    {
      name: 'Homer Simpson',
      url: 'https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=800,534'
    }
  ]

  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }


  const outOfFrame = (name) => {
    console.log(name + 'left the screen!');
  }

 
  return (
    <div className='dashboard'>
      <ChatContainer />
      <div className='swiper-container'>
          <div className='card-container'>
         
          {persons.map((person) =>
            <TinderCard 
              className='swipe'
              key={person.name}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}>
              <div style={{ backgroundImage: 'url(' + person.url + ')' }} className='card'>
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
            )}
            </div>
      </div>
      <div className='swipe-info'>
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
           </div> 

    </div>
  )
}

export default Dashboard