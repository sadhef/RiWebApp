// client/owner/src/App.jsx
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import router from "./router";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster position="bottom-center" />
      </PersistGate>
    </Provider>
  );
}

export default App;