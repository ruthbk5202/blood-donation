import React from 'react'
import "./share.css";
const Share = () => {
  return (
    <div >
        <div className='share-stories-container'>
            <div className='share-stories-description'>
            <h1>Share Your Story </h1>
            <span>Has your life been transformed by blood donation? Or Did you or someone you love need a blood donation?</span>
            <p>Your story may inspire someone to donate blood! Share your story with us!</p>
            <button className='share-your-story-btn'>Share Your Story</button>
            </div>
            <div className="svg-box">
                <img src="	https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/sharestory.png"></img>

            </div>

        </div>

    </div>
  )
};
export default Share;

