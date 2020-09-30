import React from "react"
import Row from "./Row"
import requests from "../Request"
import "./App.css"
import Banner from "./Banner"
import NavBar from "./NavBar"

function Netflix() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflix} isLargeRow />
      <Row title="TREDNING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComdeyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default Netflix
