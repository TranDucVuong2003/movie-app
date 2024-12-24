
import React, { useContext, useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'
import useGetMovie from './hooks/useGetMovie'
import useGetRatingMovie from './hooks/useGetRatingMovie'
import axios from 'axios'
import MovieSearch from './components/MovieSearch'
import { AppProvider, MovieContext } from './context/MovieContext'

function App() {
  const {movieSearch, inputSearchValue, setMovieSearch} = useContext(MovieContext)
  const { data, isPending } = useGetMovie();
  const { data: dataRatingMovie, isPending: isPendingDataMovie } = useGetRatingMovie()
  // const [movieSearch, setMovieSearch] = useState([])
  // const [inputSearchValue, setInputSearchValue] = useState('')


  const handleSearch = async (nameSearch) => {
    try {

      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${nameSearch}&include_adult=false&language=vi&page=1`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      })
      setMovieSearch(response.data.results);
      console.log(response.data);
      
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='bg-black pb-10'>
      <Header handleSearch={handleSearch} />
      <Banner />
      {(inputSearchValue != "" && movieSearch.length > 0 )|| (inputSearchValue != "" && movieSearch.length == 0 ) ? <MovieSearch /> :
        <>
          {
            isPending? "Loading...":
              <>
                <MovieList movies={data.results} dataRatingMovie={dataRatingMovie.results} />
              </>
          }
        </>
      }

    </div>
  )
}

export default App
