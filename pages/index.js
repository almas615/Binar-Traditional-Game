/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { Fragment, useEffect, useState } from 'react';

import Layout from '../components/layout/Layout.js';
import Image from 'next/image';
import analogPict from '../public/img/analog.png';
import prsPict from '../public/img/RockPaperScissor.jpg';

import style from '../styles/LandingPage.module.css';

function LendingPage() {
  const [game, setGame] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  useEffect(() => {
    fetch(`${apiUrl}/game/recomendation`)
      .then((response) => response.json())
      .then((result) => {
        setGame(result.data);
        console.log(result.data);
      });
  }, [apiUrl]);

  return (
    <Fragment>
      <Layout>
        <div id={style['content-container']}>
          <section id={style['judul']}>
            <div
              className="container-fluid d-flex flex-column justify-content-center"
              style={{ height: '100vh', backgroundColor: '#f6f8ffe3' }}
            >
              <div className="row d-flex flex-row justify-content-center align-items-center">
                <div className="col-11 col-sm-5 col-lg-4 d-flex flex-column justify-content-center">
                  <Image
                    className={style['img-btn-console']}
                    src={analogPict}
                    alt=""
                  ></Image>
                </div>
                <div
                  className={`col-11 col-sm-7 col-lg-6 mt-5 mt-lg-0 judul-container d-flex flex-column justify-content-start ${style['judul-container']}`}
                >
                  <p
                    className="text-uppercase"
                    style={{ color: 'rgb(0, 0, 0)' }}
                  >
                    Bring Memories Back
                  </p>
                  <p style={{ fontSize: '1.5rem' }}>
                    Find your favorite traditional games and be the champion
                  </p>
                  <a
                    href="/game"
                    className={`btn mt-2 ${style['btn']}`}
                    style={{
                      color: 'white',
                      backgroundColor: '#0a1f30',
                      width: '200px',
                    }}
                  >
                    PLAY NOW
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id={style['slider']}>
            <div className={style['waves-1']}>
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  className={style['shape-fill']}
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  className={style['shape-fill']}
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  className={style['shape-fill']}
                ></path>
              </svg>
            </div>
            <div
              className="container-fluid d-flex flex-column justify-content-center"
              style={{ height: '100vh' }}
            >
              <div className="row d-flex flex-column align-items-center">
                <div className="col-6 ">
                  <div
                    id="carouselExampleDark"
                    className={`carousel carousel-dark slide ${style['carousel']}`}
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      {game.map((game, i) => {
                        let active = '';
                        if (i == 0) {
                          active = 'active';
                        }
                        return (
                          <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={i}
                            className={active}
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                        );
                      })}
                      {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                            className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                            aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                            aria-label="Slide 3"></button> */}
                    </div>
                    <div className="carousel-inner">
                      {game.map((game, i) => {
                        let active = '';
                        if (i == 0) {
                          active = 'active';
                        }
                        return (
                          <div
                            className={`carousel-item ${active}`}
                            data-bs-interval={`${i + 1}0000`}
                          >
                            <Image
                              src={prsPict}
                              className="d-block w-100"
                              alt="..."
                            ></Image>
                            <div
                              className={`carousel-caption d-none d-md-block ${style['carousel-caption']}`}
                            >
                              <h5>{game.name}</h5>
                              <p>
                                Some representative placeholder content for the
                                first slide.
                              </p>
                              <p className="btn btn-primary">
                                played {game.play_count} times
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      {/* <div className="carousel-item active" data-bs-interval="10000">
                                            <Image src={prsPict} className="d-block w-100" alt="..."></Image>
                                            <div className={`carousel-caption d-none d-md-block ${style["carousel-caption"]}`}>
                                                <h5>Paper Rock Scissors1</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <Image src={prsPict} className="d-block w-100" alt="..."></Image>
                                            <div className={`carousel-caption d-none d-md-block ${style["carousel-caption"]}`}>
                                                <h5>Second slide label2</h5>
                                                <p>Some representative placeholder content for the second slide.</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="3000">
                                            <Image src={prsPict} className="d-block w-100" alt="..."></Image>
                                            <div className={`carousel-caption d-none d-md-block ${style["carousel-caption"]}`}>
                                                <h5>Third slide label3</h5>
                                                <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                        </div>
                                        */}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-6 mt-5  text-center">
                  <p className={style['f1']}> Top 3 most played games</p>
                  <a
                    href="/game"
                    className={`btn mt-2 ${style['btn']}`}
                    style={{
                      color: 'white',
                      backgroundColor: '#0a1f30',
                      width: '200px',
                    }}
                  >
                    SHOW MORE GAMES
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </Fragment>
  );
}

export default LendingPage;
