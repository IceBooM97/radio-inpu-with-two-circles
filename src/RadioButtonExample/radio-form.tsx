'use client'

import { useForm } from 'react-hook-form'
import { Radio, RadioGroup, FormControlLabel, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.MuiRadio-root': {
    color: 'rgba(99, 91, 255, 0.6)', // Нормальное состояние - светло-фиолетовый
    '& .MuiSvgIcon-root': {
      fontSize: 24,
    },
    '&.Mui-checked': {
      color: 'rgb(99, 91, 255)', // Активное состояние - фиолетовый
      '& .MuiSvgIcon-root': {
        // Создаем эффект белого центра с фиолетовой точкой
       
        borderRadius: '50%',
        '& path:first-of-type': {
          transform: 'scale(1)',
        },
       
      }
    }
  }
}))

export default function RadioForm() {
  const { control } = useForm()

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Выберите опцию:
      </Typography>
      <RadioGroup defaultValue="option1" name="options">
        <FormControlLabel 
          value="option1" 
          control={<StyledRadio />} 
          label="Опция 1" 
        />
        <FormControlLabel 
          value="option2" 
          control={<StyledRadio />} 
          label="Опция 2" 
        />
        <FormControlLabel 
          value="option3" 
          control={<StyledRadio />} 
          label="Опция 3" 
        />
      </RadioGroup>
    </Box>
  )
}

