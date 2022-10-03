import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/navbar.scss';

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
  { icon: <HomeIcon />, name: 'Home', link:'#navbar' },
  { icon: <SettingsIcon />, name: 'Skills', link:'#skills' },
  { icon: <TipsAndUpdatesIcon />, name: 'Projetos', link:'#projects' },
];

export function Navbar() {
    const [direction] = React.useState('down');
    const [hidden] = React.useState(false);

    return (
        <div id="navbar">
          <div className="navMenu">
            <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
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
      );
}