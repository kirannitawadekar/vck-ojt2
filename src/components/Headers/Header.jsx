import {Link} from 'react-router-dom'

const Header =() =>{
    return(
        <header>
            <nav style={{display:"flex",alignItems:"right",gap:"20px",backgroundColor:"black",padding:"10px",color:"white"}}> 
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default Header