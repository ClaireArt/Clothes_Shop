import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main_Home from './components/Main_Home/Main_Home';
import Main_New_Brand from './components/Main_New_Brand/Main_New_Brand';
import Main_Female from './components/Main_Female/Main_Female';
import Main_Male from './components/Main_Male/Main_Male';
import Home_Wrapper from './components/Page/Home_Wrapper';
import Product from './components/Product/Product';
import Login_Page from './components/Login_Page/Login_Page';
import { useState } from 'react';
import Admin_Page from './components/Admin_Page/Admin_Page';
import Cart from './components/Cart/Cart';
import Error_Page from './components/Error_Page/Error_Page';

function App() {
  const [activeAdmin, setActiveAdmin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home_Wrapper />}>
          <Route index element={<Main_Home />} />
          <Route path='new_brand'>
            <Route index element={<Main_New_Brand />} />
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='female'>
            <Route index element={<Main_Female />} />
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='male'>
            <Route index element={<Main_Male />} />
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='cart' element={<Cart />} />
        </Route>
        <Route path='/auth'>
          {activeAdmin && <Route path='admin' element={<Admin_Page {...{ setActiveAdmin }} />} />}
          <Route path='login/admin' element={<Login_Page {...{ setActiveAdmin }} />} />
        </Route>
        <Route path='*' element={<Error_Page />} />
      </Routes>
    </div>
  );
}

export default App;
