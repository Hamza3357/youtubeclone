import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { ChannelCard} from "./";
import Videos from "./Videos";
import { fetchFromAPI } from "../utilz/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const {id} = useParams();
  useEffect(()=> {
               fetchFromAPI(`channels?part=snippet&id=${id}`)
               .then((data) => setChannelDetail(data?.items[0]))

               fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
               .then((data) => setVideos(data?.items))
               
                         
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
      <div style={{background: 'linear-gradient(61deg, rgba(2,0,36,1) 0%, rgba(4,70,7,1) 0%, rgba(4,44,32,1) 0%, rgba(4,50,37,1) 0%, rgba(4,59,17,1) 0%, rgba(4,54,29,1) 0%, rgba(0,236,255,1) 0%, rgba(255,5,216,1) 100%, rgba(5,7,69,1) 100%, rgba(5,4,72,1) 100%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)',
           zIndex: 10,
           height: '300px'  
    }}  
      />
      <ChannelCard channelDetail={channelDetail}
      marginTop="-110px" />
      </Box>
      <Box display="flex" p="2" >
        <Box sx={{mr: {sm: '100px'}}} />
          <Videos videos={videos} />


      </Box>
    </Box>
  )
}

export default ChannelDetail
