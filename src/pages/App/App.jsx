import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../App/AuthPage/AuthPage';
import NewOrderPage from '../App/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../App/OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage user={user} setUser={setUser} />
            </Route>
            <Route path="/orders">
              <OrderHistoryPage />
            </Route>
            <Redirect to="/orders" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}