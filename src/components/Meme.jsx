import React from 'react'
import { useEffect } from 'react'

export default function Meme() {

const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})

const [allMemes, setAllMemes] = React.useState([])


useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])


function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

  return (
    <main>
    <div id="meme-section">
      <div className='input-section'>
        <input 
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
        />
        <input 
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
        />
      </div>
      <button 
          onClick={getMemeImage}
      >
          Get a new meme image
      </button>
      <div className="meme">
          <img src={meme.randomImage} />
          <div className='meme-text'>
            <h2 className="top">{meme.topText}</h2>
            <h2 className="bottom">{meme.bottomText}</h2>
          </div>
      </div>
    </div>
</main>
  )
}