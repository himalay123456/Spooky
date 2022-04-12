import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { buttonStyles } from './ButtonStyles';
import Add from '../../../../../../../Assets/Svg/add.svg';

export default function Button1() {
  const classes = buttonStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        // onClick={onButtonClick('right', true)}
        className={classes.button}
      >
        <Icon className={classes.icon}>
          <img alt="imageAlt" src={Add} />
        </Icon>
      </Button>
    </div>

  );
}
