import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {editMovie} from '../actions/movie';

const Edit = ({name, description, id, categoryId, editMovie}) => {
  const [formData, setFormData] = useState({
    name: name,
    description: description,
  });
  useEffect(() => {
    setFormData({name, description});
  }, [name, description]);

  const onChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch edit movie action
    editMovie({...formData, id, categoryId});
  };
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          <p>Name*</p>
          <input
            type='text'
            className='edit-input'
            value={formData.name}
            name='name'
            onChange={onChange}
          />
        </label>
        <label>
          <p>Description</p>
          <input
            type='text'
            className='edit-input'
            value={formData.description}
            name='description'
            onChange={onChange}
          />
        </label>
        <button className='save-edit' type='submit' onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default connect(null, {editMovie})(Edit);
