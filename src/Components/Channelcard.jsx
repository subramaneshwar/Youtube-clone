import React from 'react'
import { Typography,Card, CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utills/constant'
import { Box } from '@mui/system'
function Channelcard({channelDetail,marginTop}) {
    console.log(channelDetail)
  return (
    <Box sx={{boxShadow:'none',
    boderRadius:'20px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // border:'2px solid green',
    width:{xs:'356px',md:'300px'},height:'326px',margin:'auto',marginTop}
    }>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
                <CardMedia 
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture } 
                alt={channelDetail?.snippet?.title}
                sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3' }}/>
            <Typography variant='h6'>
                {channelDetail?.snippet?.title}
                <CheckCircle sx={{fontSize:"14px",color:'gray',ml:'5px'}}/>

            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
                <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
                </Typography>
            )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default Channelcard