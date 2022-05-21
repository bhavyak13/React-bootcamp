import React, { Component } from "react";
import './Pokecard.css'

class Pokecard extends Component {
    render() {
        const props = this.props;
        let id = props.id;
        let add = "";
        if (id < 10) { add = '00'; }
        else if (id < 100) { add = '0'; }
        // or //let padToThree = num => (num <= 999 ? `00${num}`.slice(-3) : num);
        let src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${add}${id}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <div className="Pokecard-image">
                    <img src={src} />
                </div>
                <div className="Pokecard-data">type : {props.type}</div>
                <div className="Pokecard-data">EXP : {props.base_experience}</div>
            </div>
        )
    }
}
export default Pokecard;