import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-hen.png'
import user_2 from '../../assets/user-anbu.png'
import user_3 from '../../assets/user-ar.png'
import user_4 from '../../assets/user-sf.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                       <a href="https://www.instagram.com/henry_ahs?igsh=MWN3NWd1aHY1eHAxdA==" target='_blank'>
                       <img src={user_1} alt="" /></a>
                        <div>
                            <h3><a href="https://www.instagram.com/henry_ahs?igsh=MWN3NWd1aHY1eHAxdA==" target='_blank'>Henry Antony</a></h3>
                            <span>SPC, Mela</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at SPC was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <a href="https://www.instagram.com/an.bu_08?igsh=MWs2Y2tvajN2bHNjdg==" target='_blank'>
                            <img src={user_2} alt="" /></a>
                        <div>
                            <h3><a href="https://www.instagram.com/an.bu_08?igsh=MWs2Y2tvajN2bHNjdg==" target='_blank'>
                                Anbumani</a></h3>
                            <span>SPC, Melaneduvai</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at SPC was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <a href="https://www.instagram.com/the.arnold_?utm_source=qr&igsh=c2FlZ2N3OW03Z296" target='_blank'>
                            <img src={user_3} alt="" /></a>
                        <div>
                            <h3><a href="https://www.instagram.com/the.arnold_?utm_source=qr&igsh=c2FlZ2N3OW03Z296" target='_blank'>
                            Arnold Johnson</a></h3>
                            <span>SPC, Melaneduvai</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at SPC was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <a href="https://www.instagram.com/sf_07_lucifer?igsh=eGJydzN3ZmwyMGE3" target='_blank'>
                            <img src={user_4} alt="" /></a>
                        <div>
                            <h3><a href="https://www.instagram.com/sf_07_lucifer?igsh=eGJydzN3ZmwyMGE3" target='_blank'>
                            Stenis Franklin</a></h3>
                            <span>SPC, Melaneduvai</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at SPC was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
