import React, { useContext, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import { MovieContext } from '../context/MovieContext';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

function MovieList({ movies, dataRatingMovie }) {
const {handleTrailer} = useContext(MovieContext)
  return (
    <div className='text-white mb-10 pt-10'>
      <div className='container'>
        <div className='mb-10'>
          <h2 className='uppercase text-3xl mb-4'>Phim hot</h2>
          <Carousel responsive={responsive} className='flex items-center gap-4'>
            {/* <div className='flex items-center gap-4'> */}
            {movies.length > 0 ? movies.map((movie) =>
              <div
                key={movie.id}
                className='h-[300px] w-[200px] relative group'
                onClick={() => handleTrailer(movie.id)}
              >
                <div className='group-hover:scale-105 duration-500 ease-in-out w-full h-full cursor-pointer transition-transform'>
                  <div className='absolute top-0 left-0  w-full h-full bg-black/40'></div>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='w-full h-full object-cover ' />
                  <p className='uppercase text-[16px] absolute bottom-[6px] left-2'>{movie.title}</p>
                </div>
              </div>
            ) : "Không có phim !"}

            {/* </div> */}
          </Carousel>
        </div>

        <div>
          <h2 className='uppercase text-3xl mb-4'>Phim dề xuất </h2>
          <Carousel responsive={responsive} className='flex items-center gap-4'>
            {dataRatingMovie.length > 0 ? dataRatingMovie.map((ratingmovie) =>
              <div
                key={ratingmovie.id}
                className='h-[300px] w-[200px] relative group'
                onClick={() => handleTrailer(ratingmovie.id)}

              >
                <div className='group-hover:scale-105 duration-500 ease-in-out w-full h-full cursor-pointer transition-transform'>
                  <div className='absolute top-0 left-0  w-full h-full bg-black/40'></div>
                  <img src={`https://image.tmdb.org/t/p/w500${ratingmovie.poster_path}`} alt="" className='w-full h-full object-cover ' />
                  <p className='uppercase text-[16px] absolute bottom-[6px] left-2'>{ratingmovie.title}</p>
                </div>
              </div>
            ) : "Không có phim !"}

          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default MovieList
