import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter()
  const data = (prof)=>{
    if(prof === 'Dentist'){
      router.push('/Dentist')
    } else if(prof === 'Gynecologist/Obstetrician'){
      router.push('/Gynecologist')
    } else {
      router.push('/Nutrition')
    }
  }

  const category = [
    {prof:"Dentist" , detail:"Teething troubles?Schedule a dental checkup" ,image:'dentist.jpg'},
    {prof:"Gynecologist/Obstetrician" , detail:"Explore for women's health, pregnancy and infertility treatments" ,image:'gyno.jpg'},
    {prof:"Dietitian/Nutrition" , detail:"Get guidance on eating right,weight management and sports nutrition" ,image:'nut.jpg'}
  ]

  return (
    <>
    <Stack flexDirection='column' minHeight='90vh' height='100%' bgcolor='#fff' gap='0.7em' justifyContent='center' alignItems='center'>
      <Stack flexDirection='column' gap='0.2em' >
     <Typography fontWeight='900' fontSize='22px' textAlign='start'>Book an appointment for an in-clinic consultation</Typography>
     <Typography fontSize='16px'>Find experienced doctors all specialties</Typography>
    
     <Stack flexDirection='row' gap='0.5em' justifyContent='center' alignItems='start' marginTop='0.2em' flexWrap={{lg:"none" , xs:"wrap"}} >
       {
        category.map((cat , index)=>(
            <Box onClick={()=> data(cat.prof)} className='hover' key={index} sx={{display:"flex" , flexDirection:"column" , gap:"0.5em" ,padding:"1.2em 0em" , borderRadius:"7px"}}>
              <Box component='img' src={cat.image} sx={{width:"300px" , minHeight:"230px" , borderRadius:"13px" , padding:"0.5em 0.5em" , alignSelf:"center"}}/>
              <Typography fontWeight='700'  padding='0 0.5em'>{cat.prof}</Typography>
              <Typography fontSize='16px' width='20em' padding='0 0.5em'>{cat.detail}</Typography>
            </Box>
        ))
       }
     </Stack>
     </Stack>
    </Stack>
    </>
  )
}
