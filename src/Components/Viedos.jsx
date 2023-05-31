import React from 'react'
import {Stack,Box } from '@mui/material'
import {Videocard, Channelcard} from './'
function Viedos({videos,direction }) {
  if(!videos?.length) return "<Loader/>"
  console.log(videos);
  return (
    <Stack direction={direction || "row"} flexWrap='wrap'  justifyContent='start' gap={2}>
      {
        videos.map((item,idx)=>(
          
          <Box key={idx}>
            {item.id.videoId && <Videocard video={item} />}
            {console.log(item.id.videoId)}
            {item.id.channelId && <Channelcard channelDetail={item}/>}
            {console.log(item.id.channelId,"channel")}
          </Box>

        ))
      }
      
    </Stack>
  )
}

export default Viedos