import Add from './Add';
import {connect} from 'react-redux';
import {addCategory} from '../actions/category';
const AddCategory = ({addCategory}) => (
  <Add category onSubmitAction={addCategory} />
);

export default connect(null, {addCategory})(AddCategory);
