import React from 'react';

//Material UI stuff
import { makeStyles, withStyles, createStyles, Theme, WithStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface Props extends WithStyles<typeof styles> {
}

class HomePage extends React.Component<Props> {
  render() {
    const {classes} = this.props
    return (
      <React.Fragment>
        <div className={classes.test}>
          <Button variant="contained">Default</Button>
        </div>
      </React.Fragment>      
    )
  }
}

const styles:any = (theme:Theme) => ({
  test: {
    backgroundColor:'dodgerblue'
  }
});


export default withStyles(styles)(HomePage);
