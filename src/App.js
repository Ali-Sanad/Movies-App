import {Provider} from 'react-redux';
import store from './store';
import MovieApp from './containers/MovieApp';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <MovieApp />
    </Provider>
  );
}

export default App;
