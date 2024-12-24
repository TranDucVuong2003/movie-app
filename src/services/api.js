import axios from "axios";

export const onGetMovie = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=vi&page=1', {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
    })
    return response.data;
}

export const onGetRatingMovie = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1', {
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzM0MTliNDliZGUxMTI2OGU2Yzg5M2MzOTIwZjQ3ZSIsIm5iZiI6MTczMjUxODI4Ny4xMDA5OTk4LCJzdWIiOiI2NzQ0MjE4ZmNjMWQ2OTk4NmJkOWQwMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2nnNhUC8lCaeNle7ZWWAkFbmAhnpUHkIGq-_qI7YdPg'
        }
    })
    return response.data;
}
