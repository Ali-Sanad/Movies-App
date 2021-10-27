import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import MoviesList from './MoviesList';

const Accordion = ({title, content, categoryId}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
        <GiHamburgerMenu size={30} style={{margin: '0 10px'}} /> {title}
      </div>
      {isActive && (
        <div className='accordion-content'>
          <MoviesList content={content} categoryId={categoryId} />
        </div>
      )}
    </div>
  );
};

export default Accordion;
