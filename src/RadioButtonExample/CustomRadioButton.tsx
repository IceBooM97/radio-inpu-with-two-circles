import React from 'react';
import { useController, Control } from 'react-hook-form';
import { Radio, RadioProps, FormControlLabel } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

interface CustomRadioButtonProps extends Omit<RadioProps, 'control'> {
  control: Control<any>;
  name: string;
  label: string;
  value: string;
  innerColor?: string;
}

const StyledRadio = styled(Radio, {
  shouldForwardProp: (prop) => prop !== 'innerColor'
})<{ innerColor?: string }>(({ theme, innerColor }) => ({
  '&.MuiRadio-root': {
    padding: 9,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 24,
    color: theme.palette.primary.main, // Добавляем цвет для видимости
  },
  '& .MuiSvgIcon-root .RadioButtonUnchecked': {
    fill: theme.palette.action.disabled,
  },
  '& .MuiSvgIcon-root .RadioButtonChecked': {
    fill: theme.palette.primary.main,
  },
  '& .MuiSvgIcon-root .RadioButtonInner': {
    fill: innerColor || theme.palette.background.paper,
  },
  // Добавляем стили для улучшения видимости
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
  },
  '&.Mui-checked': {
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
  },
}));

const CustomRadio: React.FC<{ innerColor?: string }> = ({ innerColor }) => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="12" r="8" fill="currentColor" />
    <circle cx="12" cy="12" r="5" fill={innerColor || 'white'} /> 
    {/* Здесь используем innerColor либо white */}
  </svg>
);

export const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  control,
  name,
  label,
  value,
  innerColor,
  ...props
}) => {
  const {
    field: { onChange, value: fieldValue, ref },
  } = useController({
    name,
    control,
  });

  return (
    <FormControlLabel
      control={
        <StyledRadio
          checked={fieldValue === value}
          onChange={() => onChange(value)}
          value={value}
          name={name}
          inputRef={ref}
          icon={<CustomRadio innerColor={innerColor} />}
          checkedIcon={<CustomRadio innerColor={innerColor} />}
          innerColor={innerColor}
          {...props}
        />
      }
      label={label}
    />
  );
};

