import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchApi } from "../utills/Fetchapi";
import { Viedos, Channelcard } from "./"


function ChannelDetail() {
  const [channel, setchannel] = useState(null)
  const [videos, setvideos] = useState([])
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => {console.log(data); setchannel(data.data.items[0])})
    fetchApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) =>{ console.log(data);setvideos(data.data.items)})
  }, [id])

  return (
    <div>
      <Box minHeight='95vh' >
        <Box>
          <div style={{
            background: 'rgb(180,58,58)',
            background: 'linear-gradient(90deg, rgba(180,58,58,1) 0%, rgba(29,253,224,1) 56%, rgba(252,69,174,1) 100%)', zIndex: 10, height: '300px'
          }}/>
          <Channelcard channelDetail={channel} marginTop='-93px'/>
        </Box>
        <Box display='flex' p='2'>
          <Box sx={{mr:{sm:'100px'}}}/>
            <Viedos videos={videos}/>
        </Box>
      </Box>
    </div>
  )
}

export default ChannelDetail