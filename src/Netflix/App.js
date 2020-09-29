import React from 'react'
import Row from './Row'
import requests from '../Request'

function Netflix() {
    return (
        <div>
          <h1>Hello world</h1>
          <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflix} />
          <Row title="TREDNING NOW" fetchUrl={requests.fetchTrending}/>
        </div>
    )
}


export default Netflix
