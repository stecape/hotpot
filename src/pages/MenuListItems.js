import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter, matchPath } from 'react-router'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import CachedIcon from '@material-ui/icons/Cached'

const isSelected = (pathName, path) => {
    const match = !!matchPath(pathName, {
      path: path,
      exact: true,
      strict: false
    })
    return match
}

function MenuListItems (props) {
    return(
      <div>
        <MenuItem button divider component={Link} to="/" selected={isSelected(props.location.pathname, "/")} >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </MenuItem>
        <MenuItem button component={Link} to="/Advanced" selected={isSelected(props.location.pathname, "/Advanced")}>
          <ListItemIcon>
            <CachedIcon />
          </ListItemIcon>
          <ListItemText primary="Advanced" />
        </MenuItem>
      </div>
    )
}

export default withRouter(MenuListItems)