import React from 'react'

function Pokecard(props) {

    const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

    return (
        <div>
            <h4>{ props.name }</h4>
            <img src={`imgURL/${props.id}`} href="pokemon image" />
            <h4>Type: { props.type} </h4>
            <h4>Exp: <span>{ props.exp }</span></h4>
        </div>
    )
}

export default Pokecard
