import { Box } from '@mui/material'
import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApiData } from '../Utils/FetchFromApi'
import ChannalCard from './ChannalCard'
import Videos from './Videos'

const ChannelDetails = () => {
  const [channelDetails, setchannelDetails] = useState(null)
  const [videos, setvideos] = useState([])
  const {id} = useParams()
  console.log(videos)
  console.log(ChannelDetails)

  useEffect(() => {
    const FetchData = async() => {

     const data =  await fetchApiData(`channels?part=snippet&id=${id}`)
      setchannelDetails(data?.items[0])
     const Videodata =  await fetchApiData(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      setvideos(Videodata?.items)
    }
    FetchData()
  }, [id])
    return (
    <Box>
      <Box>
      <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannalCard channelDetail={channelDetails}  marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails