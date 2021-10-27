import {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteMovie} from '../actions/movie';
import Edit from './Edit';
import AddMovie from './AddMovie';

const MoviesList = ({content, categoryId, deleteMovie}) => {
  const [updateFields, setUpdateFields] = useState({
    name: '',
    description: '',
    id: 0,
  });

  return (
    <>
      <Edit {...updateFields} categoryId={categoryId} />
      <AddMovie categoryId={categoryId} />

      {content?.map(({name, description, id}) => (
        <div className='movie-title' onClick={() => ''} key={id}>
          <div className='icon-container'>
            <GiHamburgerMenu size={20} style={{margin: '0 10px'}} /> {name}
          </div>
          <div>
            <button
              className='edit'
              onClick={() => setUpdateFields({name, description, id})}
            >
              Edit
            </button>
            <button
              className='delete'
              onClick={() => deleteMovie({id, categoryId})}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

MoviesList.propTypes = {
  content: PropTypes.array,
  categoryId: PropTypes.number,
};

export default connect(null, {deleteMovie})(MoviesList);
