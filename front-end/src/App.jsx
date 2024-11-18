import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Login from './pages/Login';
import Container from './components/Container';
import SignUp from './pages/SignUp';
import FormProvider from './contexts/FormProvider';
import { DialogsProvider } from '@toolpad/core';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <FormProvider>
        <DialogsProvider>
          <ToastContainer theme="light" autoClose={3500} hideProgressBar />
          <GlobalStyle />
          <Container>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Container>
        </DialogsProvider>
      </FormProvider>
    </Router>
  );
}

export default App;
