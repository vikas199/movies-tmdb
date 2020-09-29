import React, { useState, useEffect } from 'react'
import axios from '../axios'
import { imageUrl } from '../VideoCard'

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
      async function fetchData(){
          const request = await axios.get(fetchUrl)
        //   console.log(request)
        setMovies(request.data.results)
        return request
      }
      fetchData()
    },[fetchUrl])
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
            {movies.map(movie => (
                <img className="row__poster" src={`${imageUrl}${movie.poster_path}`} loading="lazy" alt={movie.name} />
            ))}
            </div>
        </div>
    )
}

export default Row
 