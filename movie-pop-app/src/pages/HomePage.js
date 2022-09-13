import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading/Loading';
import ShowCard from '../components/Scroll/ShowCard';
import Logo from '../assets/Logo.png';
// import Render from '../components/Render/Render';

// http://api.tvmaze.com/search/shows?q=star%20wars

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [idShow, setIdShow] = useState(1);
  // const [info, setInfo] = useState(null);

  const getMovies = async () => {
    setIsLoading(true);
    const { data } = await axios('https://api.tvmaze.com/shows');
    setShows(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log(shows);
  // console.log(idShow);

  const getShowById = async () => {
    const { data } = await axios(`https://api.tvmaze.com/shows/${idShow}`);
    console.log(data);
  };

  useEffect(() => {
    getShowById();
  }, [idShow]);

  return (
    <div className="container">
        <div className="row">
            <div className="col col-4">
              <img src={Logo} alt="logo movie-pop" />
            </div>
            <div className="col col-4">
              <h3 className="text-center mb-4">Shows</h3>
              { isLoading && <Loading /> }
              { shows?.map(show => <ShowCard show={show} key={show.id} setIdShow={setIdShow}/>) }
            </div>
            <div className="col col-4">{idShow}</div>
        </div>
    </div>
  );
};

export default HomePage;
