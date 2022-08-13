import React from "react"
import useFetch from "./useFetch"
import dice from "./images/icon-dice.svg"
// import gif from "./images/Infinity.gif"
import "./index.css"
const url = "https://api.adviceslip.com/advice"
const Body = () => {
  const { loading, quote } = useFetch(url)
  if (!loading) {
    return (
      <article className='wrapper'>
        <p className='header'>advice #{quote.slip.id} </p>
        <p className='quote'>
          <q>{quote.slip.advice}</q>
        </p>
        <div className='img-parent'></div>
        <div className='parent'>
          <div className='dice-container'>
            <img src={dice} alt='dice-img' className='dice' />
          </div>
        </div>
      </article>
    )
  } else {
    return (
      <div className='gif-parent'>
        {/* <img src={gif} alt='loading...' /> */}
      </div>
    )
  }
}

export default Body
