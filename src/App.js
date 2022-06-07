import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Index from './pages/index/Index';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware';


const store = createStore(
	rootReducer,
	applyMiddleware(createPromise(), thunk, createLogger())

);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='container'>
          <Header />
          <Index />
        </div>
      </div>
    </Provider>
  );
}

export default App;
