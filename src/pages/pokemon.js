import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Pokemon = () => {
    const [details, setDetails] = useState([])
    const id = new URLSearchParams(useLocation().search).get('id');

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+id+"/")
            .then(function (res) {
                setDetails(res.data.abilities)
                // console.log(res.data.abilities)
            })
            .catch(function (err) {
                // handle error
                console.log(err);
            })
    }, [])

    // console.log(details)

    return (
        <>
            <div>
                {details.map((item, index) => {
                    return <p key={index}>{item.ability.name}</p>
                })}
            </div>
        < />
    );
}

export {Pokemon};