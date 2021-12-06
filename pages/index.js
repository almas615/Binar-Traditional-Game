import React, { Fragment } from 'react'


import style from '../styles/LandingPage.module.css'


function LendingPage() {
    return (
        <Fragment>
        
            <section id={ style["judul"]}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <h1 className="text-center text-uppercase" style={{ color: "white" }}>WEBSITE UNTUK MAIN GAME TERKEREN DI
                                DUNIA</h1>

                            <a href="/game" className="btn  mt-5"
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
            <section id={ style["list-game"]}>
                <div className="container">
                    <div className="row d-flex justify-content-start align-items-center" style={{ height: "50vh" }}>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h1 className=" text-uppercase" style={{ color: "white" }}>PILIH RIBUAN GAMES KEREN YANG BISA KAMU MAINKAN SEKARANG</h1>

                            <a href="/listgames" className="btn  mt-5" style={{ color: "white", backgroundColor: "#0a1f30", width: "200px" }}>PILIH GAME</a>
                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="" className="d-block w-100" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="" className="d-block w-100" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="" className="d-block w-100" alt="..."></img>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "#7f909d" }} viewBox="0 0 1440 320"><path fill="#334756" fill-opacity="1" d="M0,96L288,160L576,160L864,64L1152,160L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
            <section id={ style["register-page"]}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <h1 className="text-center text-uppercase" style={{ color: "white" }}>TUNGGU APALAGI?</h1>

                            <a href="/register" className="btn  mt-5"
                                style={{ color: "white", backgroundColor: "#0a1f30", marginLeft: "auto", marginRight: "auto" }}>DAFTAR
                                SEKARANG</a>
                        </div>
                    </div>
                </div>

            </section>

        </Fragment>
    )
}

export default LendingPage
