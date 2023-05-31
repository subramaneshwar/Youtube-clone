import { Box,Stack,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchApi } from '../utills/Fetchapi'
import {Sidebar,Viedos} from './'

function Feed() {
  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([])
  useEffect(() =>{
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {setvideos(data.data.items)})
  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:"92vh"},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory }/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:"#FFF"}}>
        Copyright © 2022  SR Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}} >
         {selectedCategory} <span style={{color:'#fc1503'}}>videos</span>
        </Typography>
        <Viedos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed