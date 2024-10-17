import './estilo.css'
import logo from '../../imagens/logo.png'

function Logo(){
    return(
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo de jia books' 
                className='logo-img'>

            </img>
            <p><strong>JLIA</strong>Books</p>
        </div>
    )
}
export default Logo;