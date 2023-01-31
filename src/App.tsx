import { Counter } from './components/Counter';
import { Avatar } from './components/Avatar';

import './App.css';

import { AsyncCounter } from './components/AsyncCounter';
import { Users } from './components/Users';

function App() {
  return (
    <div className='App'>
      <Avatar />
      <div>Counter</div>
      <Counter />
      <br />
      <br />
      <div>AsyncCounter</div>
      <AsyncCounter />
      <br />
      <br />
      <div>Users</div>
      <Users />
    </div>
  );
}

export default App;
