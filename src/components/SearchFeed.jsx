import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import  Videos from './Videos';
import { fetchFromAPI } from '../utilz/fetchFromAPI';

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect( () =>{
     fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
     .then((data) => setVideos(data.items))
  }, [searchTerm]);


  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh' }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}} >
       Search results for: <span style= {{color: '#F31503'}}>{searchTerm}</span> Videos
    </Typography>
    <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed;


