import React, {useContext,useState } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { green, purple } from '@material-ui/core/colors';

import theme from '../theme';
import darkTheme from '../darkTheme'
import SimpleCard from '../Card'

//default val of the context is theme, aka white theme
type ContextTypes = {
    theme:Theme,
    setTheme:React.Dispatch<React.SetStateAction<Theme>>
}

const ThemeContext = React.createContext<ContextTypes>({
    theme:theme,
    setTheme:()=>{}
});


function CardHolder() {
    const contextValues = useContext(ThemeContext);
    return(
        <React.Fragment>
            <div>
                Current theme is {contextValues.theme.palette.type} mode
            </div>
            <ThemeProvider theme={contextValues.theme}>
                <Grid container >
                    <Grid container item xs={12} >
                        <SimpleCard/>
                        <SimpleCard/>
                        <SimpleCard/>
                    </Grid>
                </Grid>
            </ThemeProvider>
          
          
        </React.Fragment>
    )
}

function UseContextDemo() {

    //Here we force it to darktheme default 
    const [themeToUse, setTheme] = useState(darkTheme);
    function toggleTheme() {
        setTheme(themeToUse.palette.type === 'dark'? theme: darkTheme)
    }
    return (
 
        <React.Fragment>
            <h1>
                useContext
            </h1>
           
            <Button variant="contained" color="primary" onClick={()=>toggleTheme()}>Toggle Theme</Button>

            <ThemeContext.Provider value={{theme:themeToUse,setTheme:setTheme}}>
                <CardHolder />
            </ThemeContext.Provider>
        </React.Fragment>
    )
}

export default UseContextDemo