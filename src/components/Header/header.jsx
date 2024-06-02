import './Header.css'

import logo from '../../assets/img/logo/Escudo.png'
import homeIcon from '../../assets/img/icones/feed/home.svg'
import perfil from '../../assets/img/icones/feed/meu_perfil.svg'
import whritePost from '../../assets/img/icones/feed/lapis.svg'
import sairIcon from '../../assets/img/icones/menu_sair/sair.svg'
import Post from '../UserPost/Post'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

    const [isPostBoxOpen, setIsPostBoxOpen] = useState(false);

    const togglePostBox = () => {
        setIsPostBoxOpen(!isPostBoxOpen);
    };

    return (
        <div className='headerLine'>
            <div className='headerContent'>
                <div className='headerLogo'>
                    <img src={logo} alt='Logo' />
                </div>

                <div className='toolsBar'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/homepage">
                                    <img alt="Home Icon" src={homeIcon} />
                                </Link>
                            </li>

                            <li>
                                <img alt='Publicar' src={whritePost} onClick={togglePostBox} />
                            </li>

                            <li>
                                <Link to="/perfil">
                                    <img alt="Perfil Icon" src={perfil} />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='logout'>
                    <img alt='Sair' src={sairIcon} />
                </div>
            </div>
            {isPostBoxOpen && <Post />}
        </div>
    )
}

export default Header