import React, {useEffect, useState} from 'react';
import './index.css'
import youtube from "./api/youtube";
import {Grid} from "@mui/material";
import {SearchBar,VideoDetail,VideoList} from "./components";
const App = () => {
    const [videoItems,setVideoItems]=useState([])
    const [selectedVideo,setSelectedVideo]=useState([])
    const handleSubmit =async (e,searchTerm) => {
        e.preventDefault()
        const res=await youtube.get('search',{params:{q:searchTerm}});
        setVideoItems(res?.data?.items)
        setSelectedVideo(res?.data?.items[0])
        console.log(res.data.items)
    }
    const onVideoSelect = (video) => {
      setSelectedVideo(video)
    }
    useEffect( ()=>{
       const fetch =async () => {
           const res=await youtube.get('search',{params:{q:'javascript'}});
           setVideoItems(res?.data?.items)
           setSelectedVideo(res?.data?.items[0])
       }
       fetch()
    },[])
    return (
        <Grid justifyContent={'center'} container spacing={16}>
            <Grid item xs={11}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <SearchBar handleSubmit={handleSubmit}></SearchBar>
                    </Grid>
                    {
                        videoItems.length>0&&<>
                            <Grid item xs={12} xl={8}>
                                <VideoDetail video={selectedVideo}></VideoDetail>
                            </Grid>
                            <Grid item xs={12} xl={4}>
                                <VideoList onVideoSelect={onVideoSelect} videos={videoItems}></VideoList>
                            </Grid></>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default App;