import { Box, Typography , CardContent, CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../Utils/Constants'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const ChannalCard = ({channelDetail , marginTop}) => {
  return (
    <Box   sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop : marginTop,
      }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}  sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}/>
                <Typography  variant="h6">
                    {channelDetail?.snippet?.title }
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }}/>
                </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>)}
           </CardContent>
        </Link>

    </Box>
  )
}

export default ChannalCard