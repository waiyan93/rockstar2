import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import TaskActions from './actions/TaskActions';

const styles = {
  bar: {
    marginBottom: 20
  },
  title: {
    marginLeft: 20,
    flexGrow: 1
  }
}

class Header extends React.Component {
  state = {
    anchorEl: null,
    open: false
  }
  menuOpen = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
      open: true
    })
  }

  menuClose = () => {
    this.setState({
      anchorEl: null,
      open: false
    })
  }

  render() {
    return (
      <AppBar position="static" style={styles.bar}>
        <Toolbar>
          <Badge badgeContent={this.props.count} color="secondary">
            <DoneAllIcon />
          </Badge>
          <Typography variant="h6" color="inherit" style={styles.title}>
            My Todos
          </Typography>
          <IconButton color="inherit" onClick={this.menuOpen}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onClose={this.menuClose}
          >
            <MenuItem onClick={() => {
              this.props.clear();
              this.menuClose();
            }}>
              Clear All Done
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    count: state.tasks.filter(task => task.status === 0).length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => { dispatch(TaskActions.clear()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);