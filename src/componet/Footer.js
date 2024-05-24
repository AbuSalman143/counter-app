import { FaGithub,FaLinkedin,FaSquareInstagram,FaEnvelope  } from "react-icons/fa6";


const Footer=()=>{
   
    return(
        <div className="footer">
            <h1>Counter App</h1>
            <p>Create by <b>Abu Salman</b></p>
            <div className="social-icon">
                {/* <a href="https://github.com/AbuSalman143"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/abu-salman-8aa47a276/"><FaLinkedin /></a>
                <a href="https://www.instagram.com/codehicode12/"><FaSquareInstagram /></a>
                <a href="mailto:abusalman4852@gmail.com"><FaEnvelope /></a> */}
                <FaGithub  className="icon"/>
                <FaLinkedin className="icon"/>
                <FaSquareInstagram className="icon"/>
                <FaEnvelope className="icon"/>
            </div>
        </div>
    )
}

export default Footer;