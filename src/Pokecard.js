import React from 'react'

function Pokecard({ name, id, type, exp }) {

    const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

    return (
        <div>
            <h4>{ name }</h4>
            <img src={`imgURL/${ id }.png`} href="pokemon image" />
            <h4>Type: { type } </h4>
            <h4>Exp: <span>{ exp }</span></h4>
        </div>
    )
}

export default Pokecard
