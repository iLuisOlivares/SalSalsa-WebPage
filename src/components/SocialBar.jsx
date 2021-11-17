import React from 'react'
import "../assets/styles/components/SocialBar.css"
function SocialBar() {
    return (
        <div class="social--bar">
        <a class="social-icon" href="https://www.facebook.com/"><i class="fab fa-facebook-square icon"></i></a>
        <a class="social-icon" href="https://www.instagram.com/"><i class="fab fa-instagram-square icon"></i></a>
        <a class="social-icon" href="https://twitter.com/"><i class="fab fa-twitter-square icon"></i></a>
        <a class="social-icon" href="https://www.youtube.com/user/"><i class="fab fa-youtube-square icon"></i></a>
        <a class="social-icon" href="https://api.whatsapp.com/send?phone=3116291954&text=Hablamos%20para%20saber%20en%20qu%C3%A9%20estas%20interesad@"><i class="fab fa-whatsapp-square icon"></i></a>
        </div>
    )
}

export default SocialBar
