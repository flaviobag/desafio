import PaginaPrincipal from "./Pages/PaginaPrincipal/PaginaPrincipal";
import Post from "./Pages/Postagem/Postagem";
import Usuario from "./Pages/Usuarios/Usuarios";
import { Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <>
      <main>
        <Routes>
          <Route path="/" Component={PaginaPrincipal}/>
          <Route path="/posts" Component={Post}/>
          <Route path="/users" Component={Usuario}/>
        </Routes>        
      </main>
    </>
  );
}

export default App;
