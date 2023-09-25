import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import EventIcon from '@mui/icons-material/Event';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Blocks } from "react-loader-spinner";
const dentist = () => {
    const[loader , setLoader] = useState(true)
    const [data , setData] = useState([])

  const dentistdata = async()=>{
    setLoader(true)
  const response = await axios.get('https://clinic-backend-0qc7.onrender.com/doctors/dentists')
  console.log(response.data);
  setData(response.data)
  setLoader(false)
    }

    useEffect(()=>{
     dentistdata()
    },[])

    return ( 
        <>
      <Stack flexDirection='column' margin={{md:"1em 12em" ,xs:"1em 0em"}} gap='1em' justifyContent='center' alignItems='center' minHeight='100vh' height='100%' bgcolor='#fff'>
        {
            loader ? (<Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
              />):(
        <>
       {
        data.map((dat , index)=>(
        <Box key={index} sx={{display:"flex" , flexDirection:"column" , gap:"0.5em" , width:"100%"}}>
             <Divider sx={{width:"100%" , borderColor:"grey"}}/>
             <Stack padding='1em 0em' flexDirection='row' justifyContent={{lg:"space-evenly" ,xs:"center"}} alignItems='center' width='100%' flexWrap={{lg:"none" , xs:"wrap"}}>
              <Avatar sx={{width:"9em" , height:"9em"}}  src={dat.avatar}/>
              <Stack width={{lg:"50%" ,xs:"100%"}} flexDirection='column' alignItems={{lg:"start" ,xs:"center"}} > 
                 <Typography color='#5ebbe5' fontWeight='700' fontSize='20px'>{dat.name}</Typography>
                 <Typography color='#babbb7' fontSize='14px'>{dat.profession}</Typography>
                 <Typography color='#babbb7' fontSize='14px' >{dat.experience}</Typography>
                 <Typography color='#000' fontSize='14px' fontWeight='700' marginTop='0.4em'>{dat.address}</Typography>
                 <Typography color='#000' fontSize='14px'>{dat.price}</Typography>
                 <Divider sx={{width:"100%" , borderColor:"grey", marginTop:"0.8em"}}/>
                 <Box sx={{display:"flex" ,gap:"1em" , alignItems:"center" , marginTop:"1em"}}>
                 <Typography bgcolor='#00a400' borderRadius='5px' padding='0.5em 0.5em' color='#fff' fontSize='14px' display='flex' flexDirection='row' alignItems='center' gap='0.5em'><ThumbUpIcon fontSize="16px" color="#00a400"/> {dat.rating}</Typography>
                 <Typography color='#000' fontWeight='700' sx={{textDecoration:"underline"}} fontSize='14px'>{dat.story}</Typography>
                 </Box>
              </Stack>
              <Stack width={{lg:"20%" ,xs:"100%"}} flexDirection='column' alignItems='center' gap='1em' marginTop={{lg:"4em" , xs:"1.2em"}}> 
                  <Typography color="#00a400" fontWeight='700' display='flex' flexDirection='row' alignItems='center' gap='0.5em'> <EventIcon/> Available Today</Typography>
                  <Button sx={{fontSize:"16px" , textTransform:"none" , flexDirection:"column" , width:"16em" , height:"3.2em"}} variant="contained">Book Appointment <span style={{fontSize:"13px"}}>No Booking Fee</span></Button>
                 </Stack>
             </Stack>
        </Box>
        ))
       }
       <Divider sx={{width:"100%" , border:"2px solid #000" , justifyContent:"center"}}/>  
       </>
       )
    }
      </Stack>
        </>
     );
}
 
export default dentist;