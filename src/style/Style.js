import { createTheme } from "@mui/material/styles";


const Colors = {
    primary : '#FFFF',

}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        }
    }
});


export default theme;