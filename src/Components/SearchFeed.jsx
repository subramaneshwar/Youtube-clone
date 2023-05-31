import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Viedos } from "./";
import { fetchApi } from '../utills/Fetchapi';
import { useEffect } from "react";
function SearchFeed() {
  const [videos, setvideos] = useState(null)
  const {searchTerm} = useParams();
  console.log(searchTerm,"hhhhhhhhhh")

  useEffect(() => {
    console.log('he')
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) => {console.log(data);;setvideos(data.data.items)})
  }, [searchTerm]);

  return (
    <Box p={2} minHeight='95vh'>
        <Typography variant='h4' fontWeight={900} color='white' mb={3} ml={{sm:'100px'}}>
        Search Results for <span style={{color:'#fc1503'}}>{searchTerm}</span> Videos
        </Typography>
      <Box display='flex'>
        <Box sx={{mr:{sm:'100px'}}}/>
        <Viedos videos={videos}/>

      </Box>
    
    </Box>
  )
}

export default SearchFeed