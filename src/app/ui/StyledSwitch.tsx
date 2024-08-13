import Switch, {SwitchProps} from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: 'var(--MC-Grey)', // Color of the thumb when checked
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        backgroundColor: 'var(--MC-ExceptionOverlay)', // Background when checked (on)
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'var(--MC-Grey)', // Thumb color (circle) in both states
    width: 24,
    height: 24,
    borderRadius: '50%',
    transform: 'translateY(2px)',
  },
  '& .MuiSwitch-track': {
    width: 40,
    height: 16,
    borderRadius: 20 / 2,
    backgroundColor: 'var(--MC-SuccessOverlay)', // Background when not checked (off)
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default CustomSwitch;
