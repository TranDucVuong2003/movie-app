import { createContext, useState } from "react";
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import axios from "axios";

export const MovieContext = createContext();

export const AppProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState('')
    const [movieSearch, setMovieSearch] = useState([])
    const [inputSearchValue, setInputSearchValue] = useState('')

    const customStyles = {
        overlay: {
          zIndex: 50,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          zIndex: 60,
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleTrailer = async (id) => {
        try {
            setTrailerUrl('')
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
                }
            })
            setTrailerUrl(response.data.results[0].key)
            setModalIsOpen(true)
            console.log('youtube videos', response.data);
            return response.data;

        } catch (error) {
            console.error(error);
            setModalIsOpen(false)
        }
    }

    return (
        <MovieContext.Provider value={{movieSearch, setMovieSearch,inputSearchValue, setInputSearchValue , handleTrailer}}>
            {children}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerUrl} opts={opts} />
            </Modal>
        </MovieContext.Provider>
    )
}