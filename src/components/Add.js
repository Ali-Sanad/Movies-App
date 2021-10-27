import {useState} from 'react';
import PropTypes from 'prop-types';

const Add = ({onSubmitAction, category = false, movie = false, categoryId}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const {name, description} = formData;

  const onChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch actions
    onSubmitAction({name, description, categoryId});
    setFormData({
      name: '',
      description: '',
    });
  };
  return (
    <div className='form-container'>
      {category ? 'Add Category' : 'Add Movie'}
      <form onSubmit={handleSubmit} className='form'>
        <input
          value={name}
          onChange={onChange}
          type='text'
          name='name'
          placeholder='English Name*'
        />
        <textarea
          value={description}
          onChange={onChange}
          name='description'
          placeholder='English Description'
          rows={2}
        />
        <button type='submit'>
          {category ? 'Create Category' : 'Create Movie'}
        </button>
      </form>
    </div>
  );
};

Add.propTypes = {
  onSubmitAction: PropTypes.func.isRequired,
  category: PropTypes.bool,
  movie: PropTypes.bool,
  categoryId: PropTypes.number,
};

export default Add;
