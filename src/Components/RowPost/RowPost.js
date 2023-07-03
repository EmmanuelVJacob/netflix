import React from 'react'
import './RowPost.css'
import {useEffect,useState} from 'react'
import axios from '../../Axios'
import {  imageUrl,API_KEY } from '../../Constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies,setMOvies]=useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMOvies(response.data.results)
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const [urlId,setUrlId]= useState('')
      function handleMovies(id){
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-us`).then((response)=>{
            if(response.data.results.length!=0){
                setUrlId(response.data.results[0])
            }else{
                console.log('no vedio');
            }
        })
        console.log(id);
      }
  return (
    
    <div className='row'>
        <h2 >{props.title}</h2>
        <div className="posters">
            {
                movies.map((obj)=>
                <img onClick={()=>handleMovies(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
                )
            }
            
        </div>
       { urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
