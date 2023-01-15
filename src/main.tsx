import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
     <BrowserRouter>
          <ChakraProvider>
               <Provider store={store}>
                    <App />
               </Provider>
          </ChakraProvider>
     </BrowserRouter>
)
