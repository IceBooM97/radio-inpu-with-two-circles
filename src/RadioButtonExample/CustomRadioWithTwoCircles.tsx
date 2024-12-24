'use client'

import { Box, Radio, styled } from '@mui/material'

const CustomRadio = styled(Radio)(() => ({
  '&.MuiRadio-root': {
    padding: 8,
  },
  '& .MuiSvgIcon-root': {
    display: 'none',
  },
  '&::before': {
    content: '""',
    display: 'block',
    width: 16,
    height: 16,
    borderRadius: '50%',
    border: ' 3px solid #6366F1',
    transition: 'all 0.2s ease-in-out',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    display: 'block',
    width: 4,
    height: 4,
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0)',
    transition: 'transform 0.2s ease-in-out',
    backgroundColor: 'white',
    border: '3px solid #6366F1'
  },
  '&.Mui-checked': {
    '&::before': {
      borderColor: '#6366F1'      
    },
    '&::after': {
      transform: 'translate(-50%, -50%) scale(1)'
    },
  },
}))

export default function CustomRadioWithTwoCircles() {
  return (  
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <CustomRadio /> 
      <CustomRadio />    
    </Box>       
  )
}

