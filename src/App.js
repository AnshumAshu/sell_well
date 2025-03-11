import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import { useState } from 'react';
import LoginPage from './utils/signInContext';

function App() {
  const [signInPage,setsignInPage] = useState(false);
  
  return (
    <div>
      <Provider store={appStore}>
        <LoginPage.Provider value={{isSignInPage: signInPage, setsignInPage}}>
          <Body />
        </LoginPage.Provider>
      </Provider>
    </div>
  );
}

export default App;
