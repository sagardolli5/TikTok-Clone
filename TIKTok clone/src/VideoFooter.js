import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
//import Ticker from "react-ticker" //problems installig npm i react-ticker package

function VideoFooter({channel, description, /*song*/}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3> 
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                        {/* <Ticker mode="smooth">
                            {({index}) =>(
                                <>
                                    <p>I Am A SongS</p>
                                </>
                            )}
                        </Ticker> */}
                </div>
            </div>
            <img 
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
            />
        </div>
    )
}

export default VideoFooter
