import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Pokemon = () => {
    const [details, setDetails] = useState([])
    const [profileImage, setProfileImage] = useState("")
    const [name, setName] = useState("")
    const id = new URLSearchParams(useLocation().search).get('id');


    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+id+"/")
            .then(function (res) {
                const pokeName = new URLSearchParams(useLocation().search).get('name');

                setDetails(res.data.abilities)
                setProfileImage(res.data.sprites.other.dream_world.front_default)
                setName(pokeName)
                // console.log(res.data.abilities)
            })
            .catch(function (err) {
                // handle error
                console.log(err);
            })
    }, [id])

    // console.log(details)

    return (
        <>
            <div className="flex flex-row w-4/5 mt-32 m-auto h-auto border-8 rounded-lg border-green-300 bg-white bg-opacity-75">
                <div className="detailLeft flew flex-col">
                    <h1 className="text-3xl text-center">{name}</h1>
                    <img src={profileImage} alt=""/>
                </div>
                <div className="detailRight">
                    {details.map((item, index) => {
                        return <p key={index}>{item.ability.name}</p>
                    })}
                </div>
            </div>
        < />
    );
}

export {Pokemon};