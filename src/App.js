import './App.scss';

import { LayoutContainer } from './containers/layoutContainer/layoutContainer';
import { LoginContainer } from './containers/login/loginContainer/loginContainer';

function App() {
  return (
    <div className="App">
      <LayoutContainer />
      <LoginContainer />
    </div>
  );
}

export default App;
