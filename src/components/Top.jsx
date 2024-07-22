import { useContext } from 'react'
import Banner from './Banner'
import Sidebar from './Slidebar';
import sun from '../assets/img/sun.png'
import moon from '../assets/img/moon.png'
import portfolioContext from '../context/portfolioContext';
import photo from '../assets/img/me.png'
import photoWhite from '../assets/img/meWhite.png'


const Top = ({ data }) => {

  const { theme, changeTheme } = useContext(portfolioContext)

  return (
    <>
      <div className={`top ${theme}`}>
      <img className='top__img' src={theme == 'light' ? photoWhite : photo} />

        <div className="container">
          <div className="top__header">
            <Sidebar /><div className="top__header__btns" data-aos='fade-right'>
              <img
                className='top__header__btn-switchTheme'
                onClick={() => changeTheme()}
                src={theme == 'light' ? moon : sun} />
            </div>

          </div>

          <Banner data={data} />
        </div>

      </div>

    </>
  )
}

export default Top