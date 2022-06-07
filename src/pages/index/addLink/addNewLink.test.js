import { render, screen, fireEvent, waitFor  } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddNewLink from './AddNewLink';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "../../../store/reducers/rootReducer";

const setup = () => {
    
    const store = createStore(
        rootReducer,
        applyMiddleware(createPromise(), thunk, createLogger())
    
    );
    const utils = render(<Provider store={store}><AddNewLink /></Provider>)
    const nameInput = utils.getByLabelText('linkName');
    const urlInput = utils.getByLabelText('linkUrl');
    const submitButton = utils.getByLabelText('submit');
    return {
      nameInput,
      urlInput,
      submitButton,
      ...utils,
    }
  }

test('add new link', async () => {
    const {submitButton, nameInput, urlInput} = setup()
    fireEvent.change(nameInput, {target: {value: 'Stack Overflow'}})
    fireEvent.change(urlInput, {target: {value: 'https://www.google.com'}})
    fireEvent.click(submitButton)
    const successToast = screen.getByText('Stack Overflow added.')
    expect(successToast).toBeInTheDocument()
    expect((localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : []).length).toBe(1)
  });

test('null control link', async () => {
    const {submitButton, nameInput, urlInput} = setup()
    fireEvent.change(nameInput, {target: {value: 'Stack Overflow'}})
    fireEvent.click(submitButton)
    const successToast = screen.getByText('Link Name ve Link URL alanları doldurunuz.')
    expect(successToast).toBeInTheDocument()
  });

  test('null control name', async () => {
    const {submitButton, nameInput, urlInput} = setup()
    fireEvent.change(urlInput, {target: {value: 'https://www.google.com'}})
    fireEvent.click(submitButton)
    const successToast = screen.getByText('Link Name ve Link URL alanları doldurunuz.')
    expect(successToast).toBeInTheDocument()
  });