import Add from './Add';
import {connect} from 'react-redux';
import {addMovie} from '../actions/movie';

const AddMovie = ({addMovie, categoryId}) => (
  <Add movie onSubmitAction={addMovie} categoryId={categoryId} />
);

export default connect(null, {addMovie})(AddMovie);
