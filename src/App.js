// Commons imports
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// Styles
import './App.css';
// Assets
import title from './images/title.jpeg'
// Components
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import NotFound from './components/notfound/NotFound';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

function App() {

   const { pathname } = useLocation();
   
   const [characters, setCharacters] = useState([]);
   
   const [access, setAccess] = useState(false);
   const EMAIL = 'jaime.tablet25@gmail.com';
   const PASSWORD = 'mito1234';
   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() =>{
      !access && navigate('/');
   }, [access])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== Number(id)))
   }

   return (
      <div className='App'>
       <section className='wrapper'>
         <div className='header'>
            <img className='titulo' src={title} alt='titulo'/>
         </div>

         <div className='container'>
           {pathname !== '/' && <Nav onSearch={onSearch} />}
         </div>
       </section>
         
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
