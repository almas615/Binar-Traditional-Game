import React, { Fragment, useState, useEffect, Component } from 'react'
import { useRouter, withRouter, NextRouter } from 'next/router'

import style from '../../styles/DetailGame.module.css'

function renderTableData(leaderboard) {
    return leaderboard.map((e, index) => {
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{e.detail_user.username}</td>
                <td>{e.detail_user.first_name}</td>
                <td>{e.score}</td>
            </tr>
        )
    })
}
function detail() {
    let [leaderboard, setLeaderboard] = useState([])
    let [game, setGame] = useState({})
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const id = router.query.id;
        console.log(id)

        const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        console.log(apiUrl);

        fetch(`${apiUrl}/game/${id}`)
            .then(response => response.json())
            .then(result => {
                setGame(result.data)
                console.log(game)
                fetch(`${apiUrl}/game/${id}/leaderboard`)
                    .then(response => response.json())
                    .then(result => {
                        setLeaderboard(result.data)
                        console.log(leaderboard)
                    });
            });

    }, [router.isReady])
    return (
        <Fragment>
    
            <section id={style["judul"]}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                        <div className="col-11 d-flex flex-column justify-content-center">
                            <h1 className="text-center text-uppercase mt-5" style={{ color: "white" }}> SELAMAT DATANG DI GAME <br></br><p style={{ fontSize: "70px" }}>{game.name}</p> </h1>

                            <a href="/game/1" className="btn  mt-5"
                                style={{ color: "white", backgroundColor: "#0a1f30", marginLeft: "auto", marginRight: "auto" }}>MAIN
                                SEKARANG</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="waves">

                <svg style={{ backgroundColor: "#7f909d" }} xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path fill="#334756" fill-opacity="1"
                        d="M0,160L360,224L720,224L1080,288L1440,224L1440,0L1080,0L720,0L360,0L0,0Z"></path>
                </svg>
            </div>
            <section id={style["list-game"]}>
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-start align-items-center" style={{ height: "50vh" }}>
                        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                            <h1 className="text-center text-uppercase" style={{ color: "white" }}>JADILAH JUARA DI GAME INI</h1>

                        </div>
                        <div className="col-6 mt-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Rangking</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderTableData(leaderboard)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </section>


        </Fragment>
    );
}


export default detail;

