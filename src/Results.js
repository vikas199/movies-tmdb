import React, { useState, useEffect } from "react"
import "./Results.css"
import VideoCard from "./VideoCard"
import axios from "./axios"
import FlipMove from "react-flip-move"

export default function Results({ selectedTab }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedTab)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [selectedTab])
  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  )
}
