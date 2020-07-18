import React from 'react';
import { NextPage, NextPageContext } from 'next';

//Material UI stuff
import { makeStyles, withStyles, createStyles, Theme, WithStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




interface Props extends WithStyles<typeof styles> {
  stars:number
}

class HomePage extends React.Component<Props> {

  static async getInitialProps(ctx: any) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
   
    await timeout(5000)

    return { stars: json.stargazers_count }
  }

  render() {
    const {classes,stars} = this.props
    return (
      <React.Fragment>
        Stars:{stars}
      </React.Fragment>      
    )
  }
}

const styles:any = (theme:Theme) => ({
  test: {
    //backgroundColor:'dodgerblue'
  }
});

export default withStyles(styles)(HomePage);
