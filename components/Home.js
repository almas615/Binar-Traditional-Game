/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

const Home = () => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
  });

  const { first_name, last_name } = user;

  useEffect(async () => {
    try {
      const config = {
        headers: {
          authorization: `${localStorage.getItem('accessToken')}`,
        },
      };
      const result = await axios.get('http://localhost:4000/api/me', config);
      setUser({
        first_name: result.data.user.first_name,
        last_name: result.data.user.last_name,
      });
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  return (
    <div className="home-bg-image">
      <div className="home-background">
        <br />
        <div className="container home-box text-center">
          <br />
          <h1>
            Hello, {first_name} {last_name}!
          </h1>
          <br />
          <p>Welcome to Binar Games.</p>
          <p>We've got hundreds of free online games for you to play.</p>
          <br />
          <Link href="/game">
            <a className="btn">START BROWSING</a>
          </Link>
          <br />
          <br />
        </div>
        <br />
        <br />
        <div className="container home-img text-center">
          <a href="/game/1">
            <img
              src="https://media.istockphoto.com/photos/rock-scissor-and-paper-hand-sign-isolated-on-white-background-picture-id1324377832?b=1&k=20&m=1324377832&s=170667a&w=0&h=cn23PKQDQajBX_RVMzY3vilLlzBxj7znb8fsa7gmuhs="
              className="image"
            />
          </a>
          <a href="/game/2">
            <img
              className="img-margin"
              src="https://asset.kompas.com/crops/LZYS1M-_rfd47PMkITSGw2lUIWE=/0x0:900x600/750x500/data/photo/2018/11/05/3194613935.jpeg"
            />
          </a>
          <a href="/game/3">
            <img
              className="img-margin"
              src="https://indonesia.go.id/assets/upload/headline//1546567662_4013_foto_imaginesyawordpresscom.jpg "
            />
          </a>
        </div>
        <div className="container text-center">
          <h3>
            <strong>...and more!</strong>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
