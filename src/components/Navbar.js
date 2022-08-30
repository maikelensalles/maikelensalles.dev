import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/navbar.scss';

const imagem = ['https://maikelensalles.site/images/maikelensalles2.png']

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <AssignmentIcon />, name: 'Projetos', link:'#projects' },
  { icon: <SettingsIcon />, name: 'Skills', link:'#skills' },
  { icon: <HomeIcon />, name: 'Home', link:'#navbar' },
];

export function Navbar() {

    const [direction, setDirection] = React.useState('left');
    const [hidden, setHidden] = React.useState(false);

    const handleDirectionChange = (event) => {
      setDirection(event.target.value);
    };

    const handleHiddenChange = (event) => {
      setHidden(event.target.checked);
    };

    return (
        <div id="navbar">
          <div className="navbar--container">
            <img src={imagem} />
            
            <div className="navMenu">
              <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                <FormControlLabel
                  control={
                    <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
                  }
                  label="Hidden"
                />
                <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
                  <FormLabel component="legend">Direction</FormLabel>
                  <RadioGroup
                    aria-label="direction"
                    name="direction"
                    value={direction}
                    onChange={handleDirectionChange}
                    row
                  >
                    <FormControlLabel value="up" control={<Radio />} label="Up" />
                    <FormControlLabel value="right" control={<Radio />} label="Right" />
                    <FormControlLabel value="down" control={<Radio />} label="Down" />
                    <FormControlLabel value="left" control={<Radio />} label="Left" />
                  </RadioGroup>
                </FormControl>
                <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
                  <StyledSpeedDial
                    ariaLabel="SpeedDial playground example"
                    hidden={hidden}
                    icon={<SpeedDialIcon openIcon={<CloseIcon />} icon={<MenuIcon />} />}
                    direction={direction}
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        href={action.link}
                        icon={action.icon}
                        tooltipTitle={action.name}
                      />
                    ))}
                  </StyledSpeedDial>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      );
}