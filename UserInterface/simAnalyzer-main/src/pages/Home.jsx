import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import * as React from 'react';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  { useState } from 'react';
import Typography from '@mui/material/Typography';

const StyledButton = styled(Button)`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 50px;
`;
const StyledText = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px !important;
  width: 300px !important;
`;
const StyledTextField = styled(TextField)`
  width: 800px;
  height: 200px;
`;

// let  requirement_id="UAV-000"
// let text = 'Please selecton the requirement Identifier';
// // function TextDisplay() {
// //   const [selectedValue, setSelectedValue] = useState('');

//   const handleReqIdChange = (event) => {
//     alert(event.target.value)
//   if (event.target.value === 1) {
//     text = '301 Requirement';
//   } else if (event.target.value === 2) {
//     text = '302 Requirement';
//   } else if (event.target.value === 3) {
//     text = '303 Requirement';
//   }
//   };

  
// }

const Home = () => {
  const [selectedvalue, setSelectedValue] = useState('');
  const [text, setText] = useState('Please select a requirement identifier');
  const [title, setTitle] = useState('');
  let requirement_id="";
  const handleReqIdChange = (event) => {
    setSelectedValue(event.target.value);
    // requirement_id=event.target.value;
    // alert(event.target.value)
    if (event.target.value === "UAV-301") {
      setText('Two sUAS (Small Unmanned Aircraft System) shall be able to complete a circular and square flight mission  in windy weather conditions without colliding with stationary objects, the terrain, or other aircraft and drifting from its planned path by more than 10 meters.');
      setTitle("Circular and Square Flight Mission in Windy Weather")
    } else if (event.target.value === "UAV-302") {
      setText('Two sUAS (Small Unmanned Aircraft Systems) shall be able to complete their  missions in windy weather conditions while maintaining a minimum separation distance of at least 5 meters between each other and without drifting by more than 5 meters.');
      setTitle("sUAS Mission Coordination in Windy Weather")
    } else if (event.target.value === "UAV-303") {
      setText('Two sUAS (Small Unmanned Aircraft Systems) shall be able to complete their respective missions in windy weather conditions without drifting from their planned path by more than 15 meters.');
      setTitle("sUAS Mission in Windy Weather with Path Accuracy")
    } 
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexDirection: 'column',
        '& > :not(style)': {
          m: 1,
          width: 1000,
          height: 350,
        },
      }}
    >
      {
        <React.Fragment>
        <FormControl>
          
        <InputLabel id="demo-simple-select-label">Requirement ID</InputLabel>
        <Select
          labelId="req-id"
          id="req-id"
          value={selectedvalue}
          label="Requirement ID"
          onChange={handleReqIdChange}
        >
          <MenuItem value="UAV-301">UAV-301: Circular Flight Mission in Windy Weather</MenuItem>
          <MenuItem value="UAV-302">UAV-302: sUAS Mission Coordination in Windy Weather</MenuItem>
          <MenuItem value="UAV-303">UAV-303: sUAS Mission in Windy Weather with Path Accuracy</MenuItem>
        </Select>
        <div style={{ marginTop: '3em' }}>
        <Typography variant="h6" component="h4">
        {selectedvalue == '' ? <React.Fragment> {text}</React.Fragment> : null}
        </Typography>
        </div>
        {/* <h3>{text}</h3> */}
        <div style={{ marginTop: '3em' }}>
        <Typography variant="h5" component="h4">
          {selectedvalue != '' ? <React.Fragment>Title: {title}</React.Fragment> : null}
        </Typography>
        </div>
        <div style={{ marginTop: '3em' }}>
        <Typography variant="h6" component="h4">
        {selectedvalue != '' ? <React.Fragment>Description: {text}</React.Fragment> : null}
        </Typography>
        </div>
        
      </FormControl>
      </React.Fragment>
      
      }
      <StyledLink to='/simulation' state={{req:selectedvalue.toString(), descs:text.toString(), title:title.toString()}}>
        <StyledButton variant='contained' disabled={text=="Please select a requirement identifier"? true : false}>Start Scenario Configuration</StyledButton>
      </StyledLink>
    </Box>
  );
};

export default Home;