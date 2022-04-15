import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";

const VideoItem = ({video,onVideoSelect}) => {
    return (
        <Grid style={{cursor:'pointer'}} item xs={12} mt={3} onClick={()=>onVideoSelect(video)}>
            <Paper style={{display:'flex',alignItems:'center'}}>
               <Grid container>
                 <Grid item xl={8}>
                     <img style={{maxWidth:'100%',marginRight:'20px'}} alt={'thumbnail'}
                          src={video?.snippet?.thumbnails?.medium?.url}/>
                 </Grid>
                 <Grid item xl={4}>
                     <Typography variant={"subtitle2"}><b>
                         {video?.snippet?.title}
                     </b></Typography>
                 </Grid>
               </Grid>
            </Paper>
        </Grid>
    );
};

export default VideoItem;