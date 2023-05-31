import './App.css';
import {Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom';
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed } from './Components';

function App() {
  return (
   <Box sx={{backgroundColor:"#000"}}>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Feed/>} />
      <Route path='/video/:id' exact element={<VideoDetail/>} />
      <Route path='/Channel/:id' exact element={<ChannelDetail/>} />
      <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
    </Routes>

   </Box>
  );
}

export default App;
