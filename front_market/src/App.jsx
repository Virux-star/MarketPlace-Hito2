import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UserProvider, UserContext } from './context/UserContext';
import { PostsProvider } from './context/PostsContext';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Profile from './views/Profile';
import PostDetail from './views/PostDetail';
import CreatePost from './views/CreatePost';

function NavigationBar() {
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Vel-Art Marketplace</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">Inicio</Link>
          
          {token ? (
            <>
              <Link className="nav-link" to="/profile">Perfil</Link>
              <Link className="nav-link" to="/create-post">Nueva Publicación</Link>
              <button onClick={logout} className="btn btn-outline-light btn-sm ms-2">Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Registro</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <UserProvider>
      <PostsProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </UserProvider>
  );
}

export default App;
