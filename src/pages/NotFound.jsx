import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/img/arrow.svg'
import Top from '../components/Top'



const notFound = () => {

  const data = {
    title: '404',
    subtitle: 'Page Not Found'
  }

  return (
    <>
        <div className="notFound">
           <Top data={data}/>
        </div>
    </>
  )
}

export default notFound