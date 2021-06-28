import React, { useState } from 'react'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
//import Advanced from './pages/Advanced'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import MenuListItems from './pages/MenuListItems'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f9683a',
      main: '#bf360c',
      dark: '#870000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a7c0cd',
      main: '#78909c',
      dark: '#4b636e',
      contrastText: '#f5f5f5',
    },
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paperContent: {
    padding: 10,
    margin: 10,
  },
  paper: {
    margin: 8,
  }
}))

export default function App() {

  const [drawer, setDrawer] = useState(false)
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" onClick={() => setDrawer(true)} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            HotPot
          </Typography>
        </Toolbar>
      </AppBar>
    <div className={classes.paper}>
      <Paper>
        <Drawer open={drawer} onClose={() => setDrawer(false)}>
           <div
            tabIndex={0}
            onClick={() => setDrawer(false)}
            onKeyDown={() => setDrawer(false)}
          >
            <List><MenuListItems/></List>
          </div>
        </Drawer>
        <div className={classes.paperContent}>
          <Switch>
            <Redirect from='/index.html' to='/'/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </Paper>
    </div> 

    </ThemeProvider>
  )
}
