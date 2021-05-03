import React, { useContext } from 'react';
import { settingsContext } from './SettingsContext';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});



export default function () {
  const settings = useContext(settingsContext);

  const changeSettingsSize = (value) => {
      console.log(value);
    settings.changeSettings('size', value);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div>שינוי הגדרות</div>
      <label>בחר את גודל הגופן</label>
      {/* <input type="number" placeholder = {settings.size}  onBlur={e => changeSettingsSize(e.target.value)}/> */}

      <Typography id="discrete-slider" gutterBottom>
        בחר גודל גופן
      </Typography>
      <Slider
        defaultValue={16}
        valueLabelDisplay="auto"
        step={2}
        marks
        min={10}
        max={30}
        onChange={(e,val) => changeSettingsSize(val)}
      />
    </div>
  );
};