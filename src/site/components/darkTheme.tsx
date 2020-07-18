import { createMuiTheme } from '@material-ui/core/styles';
import { red,green } from '@material-ui/core/colors';

// Create a theme instance.
const darkTheme = createMuiTheme({
  typography: {
    fontFamily: "Roboto"
  },
  palette: {
    type:'dark',
    primary: green,
  },
});

export default darkTheme;
