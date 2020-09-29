import React, { forwardRef } from "react"
import "./VideoCard.css"
import TextTruncate from "react-text-truncate"
import { ThumbUpSharp } from "@material-ui/icons"

export const imageUrl = "https://image.tmdb.org/t/p/original/"

const  VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img src={`${imageUrl}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" />
      <TextTruncate
        line={1}
        truncateText="..."
        text={movie.overview}
        //textTruncateChild={<a href="#">Read on</a>}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type}`}
        {movie.release_date || movie.first_air_date}
        <ThumbUpSharp /> {''}
        {movie.vote_count}
      </p>
    </div>
  )
})

export default VideoCard
