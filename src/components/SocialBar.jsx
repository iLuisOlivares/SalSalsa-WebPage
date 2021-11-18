import React from 'react'
import "../assets/styles/components/SocialBar.css"
function SocialBar() {
    return (
        <div className="social--bar">
        <a className="social-icon" href="https://www.facebook.com/"><i className="fab fa-facebook-square icon"></i></a>
        <a className="social-icon" href="https://www.instagram.com/"><i className="fab fa-instagram-square icon"></i></a>
        <a className="social-icon" href="https://twitter.com/"><i className="fab fa-twitter-square icon"></i></a>
        <a className="social-icon" href="https://www.youtube.com/user/"><i className="fab fa-youtube-square icon"></i></a>
        <a className="social-icon" href="https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@"><i className="fab fa-whatsapp-square icon"></i></a>
        </div>
    )
}

export default SocialBar
