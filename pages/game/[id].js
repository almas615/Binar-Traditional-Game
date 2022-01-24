/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState, useEffect, useRef, Component } from 'react';
import { useRouter, withRouter, NextRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
import ReactPlayer from 'react-player';

import prsPict from '../../public/img/RockPaperScissor.jpg';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';

import style from '../../styles/DetailGame.module.css';

const sources = ''

function renderTableData(leaderboard) {
  return leaderboard.map((e, index) => {
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{e.detail_user.username}</td>
        <td>{e.detail_user.first_name}</td>
        <td>{e.score}</td>
      </tr>
    );
  });
}

function renderVidio(props) {
  const ref = useRef();

  const source = props.thumbnail_url;
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(0.5);
  const [loop, setLoop] = useState(true);
  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);
  const mute = () => setMuted(true);
  const unmute = () => setMuted(false);

  const faster = () => {
    if (playbackRate < 10) {
      setPlaybackRate(playbackRate + 1)
    }
  };

  const slower = () => {
    if (playbackRate > 0) {
      setPlaybackRate(playbackRate - 1)
    }
  };

  const louder = () => {
    if (volume < 0.9) {
      setVolume(volume + 0.1)
      console.log(volume)
    }
  };

  const quieter = () => {
    if (volume > 0.1) {
      setVolume(volume - 0.1)
      console.log(volume)
    }
  };
  if (source) {
    return (
      <div className={style['containerVidio']}>
        <ReactPlayer
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          className={style['vidio']}
          ref={ref}
          url={source}
          playing={playing}
          muted={muted}
          volume={volume}
          playbackRate={playbackRate}
          loop={loop}
          controls='true'
        />
      </div>
    );
  }
}
function detail() {
  let [leaderboard, setLeaderboard] = useState([]);
  let [game, setGame] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const id = router.query.id;
    console.log(id);

    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log(apiUrl);

    fetch(`${apiUrl}/game/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setGame(result.data);
        console.log(game);
        fetch(`${apiUrl}/game/${id}/leaderboard`)
          .then((response) => response.json())
          .then((result) => {
            setLeaderboard(result.data);
            console.log(leaderboard);
          });
      });
  }, [router.isReady]);
  return (
    <Fragment>
      <Layout title={`Game | ${game.name}`}>
        <div id={style['content-container']}>
          <section id={style['judul']}>
            <div className="container">
              <div
                className="row d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: '100vh' }}
              >
                <div className="col-11">
                  {/* <Image
                    src={prsPict}
                    className="img d-block w-100"
                    alt="..."
                    layout="responsive"
                  ></Image> */}
                  {renderVidio(game)}
                </div>
                <div className="col-11 d-flex flex-column justify-content-center">
                  <h1
                    className="text-center text-uppercase mt-5"
                    style={{ color: 'black' }}
                  >
                    {' '}
                    SELAMAT DATANG DI GAME <br></br>
                    <p style={{ fontSize: '70px' }}>{game.name}</p>{' '}
                  </h1>

                  <a
                    href={game.game_url}
                    className="btn  mt-3"
                    style={{
                      color: 'white',
                      backgroundColor: '#0a1f30',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    MAIN SEKARANG
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id={style['list-game']}>
            <div className="container">
              <div
                className="row d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: '100vh' }}
              >
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1
                    className="text-center text-uppercase"
                    style={{ color: 'black' }}
                  >
                    LEADERBOARD
                  </h1>
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
                    <tbody>{renderTableData(leaderboard)}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={`${style['sticky']} container-flluid`}>
          <div className={` row d-flex flex-column align-items-end`}>
            <FacebookShareButton
              style={{ width: '32px', marginRight: '20px' }}
              url={'https://binar-team-one-ch10-server.herokuapp.com/docs/'}
              quote={
                'next-share is a social share buttons for your next React apps.'
              }
              hashtag={'#nextshare'}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              style={{ width: '32px', marginRight: '20px' }}
              url={'https://binar-team-one-ch10-server.herokuapp.com/docs/'}
              title={
                'next-share is a social share buttons for your next React apps.'
              }
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
              style={{ width: '32px', marginRight: '20px' }}
              url={'https://binar-team-one-ch10-server.herokuapp.com/docs/'}
              title={
                'next-share is a social share buttons for your next React apps.'
              }
              separator=":: "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default detail;
