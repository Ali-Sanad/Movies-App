import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getApiData} from '../actions/category';

import Accordion from '../components/Accordion';
import AddCategory from '../components/AddCategory';

function MovieApp({getApiData, data}) {
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <div className='category'>
        <AddCategory />
      </div>
      <div className='movies-data'>
        <div className='accordion'>
          <h3> Movies Data</h3>
          {data?.map(({name, movies, id}) => (
            <Accordion title={name} content={movies} categoryId={id} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.AppData.data,
  };
};

export default connect(mapStateToProps, {getApiData})(MovieApp);
