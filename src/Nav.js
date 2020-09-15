import React from 'react'
import './Nav.css'
import Request from './Request'

export default function Nav({ setSelectedTab }) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedTab(Request.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchComdeyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchMysteryMovies)}>Mystery</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchSciFiMovies)}> Sci-fi</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchWestrenMovies)}>Westren</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchAnimationMovies)}>Animation</h2>
            <h2 onClick={() => setSelectedTab(Request.fetchTv)}>Tv Movies</h2>
        </div>
    )
}
