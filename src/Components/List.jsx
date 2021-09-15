import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const ListBirthDays = () => {
    const classes = useStyles();
    return (
        
        <div className=" birth-day">
           <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/59208992?s=48&v=4" className={classes.large} />
             <div className="person-info">
             <label className="label-name">Jeanndo</label><br/>
              <label className="label-years"> 120 years old</label>
             </div>
        </div>
       
    )
}

export default ListBirthDays