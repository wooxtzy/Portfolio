import React, { useContext } from 'react'
import portfolioContext from '../context/portfolioContext';

const Banner = ({ data }) => {
  const { theme, changeTheme } = useContext(portfolioContext)

  return (
    <>
      <div className={`banner ${theme}`}>
        <h1 className='banner__title'>{data.title}</h1>
        <h2 className='banner__text'>{data.subtitle}</h2>
      </div>


    </>
  )
}

export default Banner