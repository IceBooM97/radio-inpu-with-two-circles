import { useForm } from 'react-hook-form';
import { CustomRadioButton } from './CustomRadioButton';
import { Box, Typography } from '@mui/material';

export default function RadioButtonExample() {
  const { control } = useForm();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Выберите опцию:
      </Typography>
      <CustomRadioButton
        control={control}
        name="option"
        value="option1"
        label="Опция 1"
        innerColor="#FF5722"
      />
      <CustomRadioButton
        control={control}
        name="option"
        value="option2"
        label="Опция 2"
        innerColor="#4CAF50"
      />
      <CustomRadioButton
        control={control}
        name="option"
        value="option3"
        label="Опция 3"
        innerColor="#2196F3"
      />
    </Box>
  );
}

