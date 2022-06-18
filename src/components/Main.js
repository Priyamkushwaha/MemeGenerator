import React from "react"

export default function Main() {

    const [info,setinfo] = React.useState({
        topText : "",
        bottomText:"",
        randomImage: "./meme.jpg"
    })
    const [allmemes,setallmemes]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(result=>setallmemes(result.data.memes))
    },[])
    
    function clickHandler(event){
        event.preventDefault()
        const randomNumber=Math.floor(Math.random()*100)
        setinfo(previnfo=>({
            ...previnfo,
            randomImage:allmemes[randomNumber].url
        }))
    }
    function changeHandler(event){
        const {value,name} = event.target
        setinfo(previnfo=>({
            ...previnfo,
            [name]:value
        }))
    }
    
    return (
        <div className="main">
            <div className="form">
                <input onChange={changeHandler} className="form-input" type="text" name="topText" value={info.topText} id="" placeholder="Top-Text"/>
                <input onChange={changeHandler} className="form-input" type="text" name="bottomText" value={info.bottomText} id="" placeholder="Bottom-Text"/>
                <button onClick={clickHandler} className="form-button">Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={info.randomImage} className="meme-image" alt="meme"/>
                <h2 className="meme-text top">{info.topText}</h2>
                <h2 className="meme-text bottom">{info.bottomText}</h2>
            </div>
        </div>
    )
}