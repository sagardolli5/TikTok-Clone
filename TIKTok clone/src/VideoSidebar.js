import React,{useState} from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

function VideoSidebar({likes, shares, messages}) {
const [licked, setLicked] = useState(false);

    return (
        <div className="VideoSidebar">
            <div className="videoSidebar__button">
                {licked ? (
                    <FavoriteIcon fontSize="large" onClick={(e)=> setLicked(false)}/>
                ):(
                    <FavoriteBorderIcon fontSize="large" onClick={(e)=> setLicked(true)} />
                )}
                
                <p>{licked ? likes+1: likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
