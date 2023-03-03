import React from 'react'
import HeroBanner from './herroBanner/HeroBanner'
import Trending from './trending/Trending'
import "./Home.scss"
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import NowPlaying from './nowplaying/NowPlaying'
const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <NowPlaying/>
    </div>
  )
}

export default Home