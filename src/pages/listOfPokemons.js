import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";

const ListOfPokemons = () => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(function (res) {
                setPokemon(res.data.results)
                // console.log(res.data.results)
            })
            .catch(function (err) {
                // handle error
                console.log(err);
            })

    },[]);

    useEffect(() => {

    }, [])

    return (
        <>
            <div>
                {pokemon.map((item, index) => {
                    return <li key={index}><Link to={"pokemon?id="+index+"&name="+item.name} details={item.url} >{item.name}</Link></li>
                })}
            </div>
        < />
    );
}

export {ListOfPokemons};