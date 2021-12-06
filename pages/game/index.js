import React, { Fragment, useState, useEffect, Component } from 'react'
import Image from 'next/image'
import axios from 'axios'

import Pic1 from '../../public/img/Coolsoccer.jpg'
// import Pic2 from '../images/Coolsoccer.jpg'
// import Pic3 from '../images/Spaceinvaders.jpg'
// import Pic4 from '../images/Streetfighter.jpeg'

import { connect } from 'react-redux';
import { getPlayedGame } from '../../redux/actions';

import style from '../../styles/listGame.module.css'
import { width } from 'dom-helpers';

const mapStateToPros = (state) => {
    return {
        playedGames: state.playedGames
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlayedGame: () => dispatch(getPlayedGame())
    };
}

const playedTag = () => {
    return (
        <p>sudah dimainkan</p>
    )
}

const renderGameData = (game, playedGame) => {

    return game.map((game, index) => {
        let isPlayed = false
        playedGame.map((played) => {
            if (game.id == played.gameId) {
                isPlayed = true
            }
        })
        console.log(isPlayed)
        return (
            <div className={"card",style["card-container"]} style={{ width: '300px',marginTop:"20px" }}>
                <Image className="card-img-top mt-3" src={Pic1}></Image>
                <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <p className="card-text">{game.description}</p>
                    <a href={`/game/${game.id}`} className="btn" style={{ backgroundColor:"#6984CF" }}>Play Game</a>
                    { isPlayed ? playedTag():null}
                </div>
            </div>

        )
    })
}

const ListGame = (props) => {
    const [game, setGame] = useState([]);

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    useEffect(() => {
        props.getPlayedGame();
    }, []);

    useEffect(() => {
        fetch(`${apiUrl}/game`)
            .then(response => response.json())
            .then(result => {
                setGame(result.data)
                console.log(result.data)
            });
    }, [apiUrl])

    return (
        <Fragment>
            <div className={"container-fluid"} style={{ backgroundColor:"#F6F8FF", height:"100vh", paddingTop:"20px" }}>
                <div className="row d-flex justify-content-around">
                    {
                        renderGameData(game, props.playedGames)
                    }

                </div>
            </div>
        </Fragment>
    );
}
const ShowGame = connect(mapStateToPros, mapDispatchToProps)(ListGame);

export default ShowGame