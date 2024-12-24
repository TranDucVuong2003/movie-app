import axios from 'axios';
import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';

// modal hiện lên youtube
// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };

// const opts = {
//     height: '390',
//     width: '640',
//     playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//     },
// };
function MovieSearch() {
    const {handleTrailer, movieSearch, inputSearchValue} = useContext(MovieContext)
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [trailerUrl, setTrailerUrl] = useState('')

    // const handleTrailer = async (id) => {
    //     try {
    //         setTrailerUrl('')
    //         const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
    //             headers: {
    //                 Accept: 'application/json',
    //                 Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    //             }
    //         })
    //         setTrailerUrl(response.data.results[0].key)
    //         setModalIsOpen(true)
    //         console.log('youtube videos', response.data);
    //         return response.data;

    //     } catch (error) {
    //         console.error(error);
    //         setModalIsOpen(false)
    //     }
    // }
    return (
        <div>
            <div className="text-white mb-10 pt-10">
                <h2 className="uppercase text-3xl mb-4">Phim tìm kiếm</h2>
                {inputSearchValue != "" && movieSearch.length == 0 ?
                    <> <h2 className="uppercase text-xl mb-4 text-orange-400">Không có kết quả tìm kiếm bởi "{inputSearchValue}"</h2></> :
                    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xs:grid-cols-12'>
                        {movieSearch && movieSearch.map((movie) =>
                            <div
                                key={movie.id}
                                className="h-[300px] w-[200px] relative group"
                                onClick={() => handleTrailer(movie.id)}
                            >
                                <div className="group-hover:scale-105 duration-500 ease-in-out w-full h-full cursor-pointer transition-transform">
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <p className="uppercase text-[16px] absolute bottom-[6px] left-2">
                                        {movie.title}
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>
                }
                {/* <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <YouTube videoId={trailerUrl} opts={opts} />;
                </Modal> */}
            </div>
        </div>
    );
}

export default MovieSearch;
