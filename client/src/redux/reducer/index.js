import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from '../actions/types';

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, {type, payload }) => {
    switch(type){
        case ADD_FAV:
             
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.allCharacters, payload],
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(({id}) => id !== Number(payload)),
                };
        case FILTER_CARDS:
            return {
                ...state,
                myFavorites: [...state.allCharacters].filter((char) => char.gender === (payload)),
            };
        case ORDER_CARDS:
            return {
                ...state,
                myFavorites: [...state.allCharacters].sort((a, b) => {
                    if (payload === 'A'){
                        return a.id > b.id ? 1 : -1
                    }else {
                        return a.id < b.id ? 1 : -1
                    }
                })
                    
            };
        default:
            return { ...state };   
    }
}

export default rootReducer;


