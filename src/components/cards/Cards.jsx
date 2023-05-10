import style from './Cards.module.css'
import Card from '../card/Card';

export default function Cards(props) {

   const { characters, onClose } = props;

   return(
      <div className={style.container} >
         {characters.map((character) => {
            return <div className={style.container}  >
                      <Card
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        // status={character.status}
                        species={character.species}
                        gender={character.gender}
                        // origin={character.origin.name}
                        image={character.image}
                        onClose={onClose}
                      />
                  </div>
         })}   
      </div>
   ) 
}
