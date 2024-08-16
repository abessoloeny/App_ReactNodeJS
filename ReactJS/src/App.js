
import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes,useNavigate } from 'react-router-dom';
import P404 from './pages/P404';
import FormPaciente from './pages/Form';
import Delete from './pages/Delete';
import ChangePaciente from './pages/Update';
import Login from './pages/Login';
import ProtectPaRoute from './pages/ProtectPaRoute';
import Forbidden from './pages/Forbidden';

const TablaPaciente = React.lazy (() => import('./pages/Table'));

function App() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (nombre) => {
    setUser({name:`${nombre}`,
            role: 'paciente'
    })
    navigate('/');
  }
  const handleLogout = () => {
    setUser(null);
    navigate('/');
  }

  return (
    <div className='container'>
    <Header user={user}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
    />
    <div className="App">  
        <div className='container_app'>
          <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='pacientes' element={
               <ProtectPaRoute user={user}>
                <React.Suspense fallback={
                  <p style={{textAlign: 'center'}}>Cargando ...</p>
                  }>
                  <TablaPaciente />
                </React.Suspense>
              </ProtectPaRoute>
            }/>
            <Route path='formulario' element={<FormPaciente />} />
            <Route path='login' element={
                                  <Login user={user}
                                         handleLogin={handleLogin}
                                  />}  
            />
            <Route path='pacientes/update/:dni' element={<ChangePaciente />} />
            <Route path='pacientes/delete/:dni' element={<Delete />} />
            <Route path='forbidden' element={<Forbidden />} />
            <Route path='*' element={<P404 />} />
          </Routes>
        </div>
      <div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
