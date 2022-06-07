import { render, screen, fireEvent, waitFor  } from '@testing-library/react';
import { Provider } from 'react-redux';
import Link from './Link';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "../../store/reducers/rootReducer";

test('renders list control', () => {
    let list=[
        {
            createdDate: new Date(),
            linkName: "Stack Overflow",
            linkPoint: 6,
            linkUrl: "https://stackoverflow.com",
            updatedDate: new Date()
        }
    ]
    localStorage.setItem('links',JSON.stringify(list))
    const store = createStore(
        rootReducer,
        applyMiddleware(createPromise(), thunk, createLogger())
    
    );
    render(<Provider store={store}><Link point={list[0].linkPoint} title={list[0].linkName} url={list[0].linkUrl} index={0} orderStatus={null} /></Provider>)
    const point = screen.getByText(list[0].linkPoint);
    const title = screen.getByText(list[0].linkName);
    const url = screen.getByText('('+list[0].linkUrl+')');

    expect(point).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(url).toBeInTheDocument();

  });


