import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import './assets/style/project.css';
import store from './store/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

