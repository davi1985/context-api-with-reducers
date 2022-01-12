import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from './pages/Form';
import { ShowData } from './pages/ShowData';
import { UserContextProvider } from './contexts/UserContext';

export const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <h1>Context API with Reducers</h1>

        <hr />

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/list" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};
