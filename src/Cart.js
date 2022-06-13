import React,{ useReducer, useEffect } from "react";

export const ACTIONS = {
    INIT: 'init',
    INCREMENT: 'incrementQuantity',
    DECREMENT: 'decrementQuantity',
    SELECT_ITEM: 'selectItem',
}

const initialState = {
  options: [
    { id: 1, name: "First", value: 10 },
    { id: 2, name: "Second", value: 50 },
    { id: 3, name: "Third", value: 70 },
  ],
  quantity: 0,
  selected: 1,
};

function reduceTotal(state) {
    const option = state.options.find(option => option.id === state.selected);
    return {...state,total: state.quantity * option.value}
}

function toggleDisableButton(state) {
    return {
        ...state,decrementDisable: state.quantity === 0
    }
}

function reducer(state,action) {
    let newState;
    switch(action.type) {
        case ACTIONS.INIT :
            newState = reduceTotal(state);
            return toggleDisableButton(newState);
        case ACTIONS.INCREMENT : 
            newState = {...state,quantity: state.quantity + 1 };
            newState = reduceTotal(newState) ;
            return toggleDisableButton(newState);
        case ACTIONS.DECREMENT :
            newState = {...state,quantity: state.quantity - 1 };
            newState = reduceTotal(newState);
            return toggleDisableButton(newState); 
        case ACTIONS.SELECT_ITEM : 
            newState = {...state, selected: parseInt(action.id)}
            return reduceTotal(newState);
        default: 
        throw new Error('Action specified does not exist')
    }
}

export default function Cart() {
   const [{options,selected,quantity,total,decrementDisable},dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        dispatch({type: ACTIONS.INIT})
    },[])

  return (
    <div className='hero-section'>
      <section>
        <button disabled={decrementDisable} onClick={() => dispatch({type: ACTIONS.DECREMENT})} className="btn" >-</button>
        <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}  className="btn" >+</button>
        <input readOnly value={quantity} ></input>
      </section>
      <section>
        <select value={selected} onChange={e => dispatch({type: ACTIONS.SELECT_ITEM, id: e.target.value})} >
            {options.map(item => (<option key={item.id} value={item.id}>{item.name} </option>))}
        </select>
      </section>
      <section>
        <h1>{total}</h1>
      </section>
    </div>
  );
}
