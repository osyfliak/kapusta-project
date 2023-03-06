import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename="/kapusta-project">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          < ToastContainer /> 
        </PersistGate>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
