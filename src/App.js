// Commons imports
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
// Styles
import './App.css';
// Assets
import title from './images/title.jpeg'
// Components
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';

function App() {

   const [characters, setCharacters] = useState([]);

   // const onSearch = (character) => {
   //    setCharacters([...characters, character])
   // }

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
         <div className='header'>
            <img className='titulo' src={title} alt='titulo'/>
         </div>
         <div className='container'>
            <Nav onSearch={onSearch} />
         </div>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
         
         
      </div>
   );
}

export default App;
