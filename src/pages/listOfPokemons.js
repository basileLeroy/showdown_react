import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";

const ListOfPokemons = () => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=96')
            .then(function (res) {
                setPokemon(res.data.results)
                // console.log(res.data.results)
            })
            .catch(function (err) {
                // handle error
                console.log(err);
            })

    },[]);


    return (
        <>
            <div className='ListOfPokemons'>
                <div className="list mx-auto w-4/5 flex flex-wrap justify-around">
                    {pokemon.map((item, index) => {
                        return (
                            <Link key={index} to={"pokemon?id="+(index+1)+"&name="+item.name} details={item.url} className="w-52 m-14 border-8 rounded-lg border-green-300 hover:border-green-500 bg-white hover:bg-opacity-75 bg-opacity-40" >
                                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+ (index+1) +".svg"} className="p-6" alt=""/>
                            </Link>
                         )
                    })}
                </div>

            </div>
        < />
    );
}

export {ListOfPokemons};