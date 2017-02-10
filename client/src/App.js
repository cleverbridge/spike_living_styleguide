import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false,
      open: false,
      value: 3
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleChange = (event, index, value) => this.setState({value});

  handleShowSnackbar = () => {
    this.setState({
      snackbarOpen: true,
    });
  };

  handleSnackbarRequestClose = () => {
    this.setState({
      snackbarOpen: false,
    });
  };

  render() {
    return (
      <div>
        <AppBar
          title="Client Admin Panel"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />

        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <List>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar>J</Avatar>
              }
            >
              Hello John Doe
            </ListItem>
          </List>
          <Divider />
          <MenuItem onTouchTap={this.handleClose}>Menu Item 1</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 3</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 4</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 5</MenuItem>
        </Drawer>

        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="All Broadcasts" />
              <MenuItem value={2} primaryText="All Voice" />
              <MenuItem value={3} primaryText="All Text" />
              <MenuItem value={4} primaryText="Complete Voice" />
              <MenuItem value={5} primaryText="Complete Text" />
              <MenuItem value={6} primaryText="Active Voice" />
              <MenuItem value={7} primaryText="Active Text" />
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <RaisedButton label="Add new Client" primary={true} />
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Download" />
              <MenuItem primaryText="More Info" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>5</TableRowColumn>
              <TableRowColumn>John Doe</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

        <RaisedButton
          onTouchTap={this.handleShowSnackbar}
          label="Show me a snackbar!"
          primary
        />

        <br /><br />
        <TextField hintText="I have also Textfields" />
        <br /><br />
        <LinearProgress mode="indeterminate" />

        <Snackbar
          open={this.state.snackbarOpen}
          message="This is the Snackbar!!"
          autoHideDuration={4000}
          onRequestClose={this.handleSnackbarRequestClose}
          action="cool!"
        />

      </div>
    )
  }
}

export default App;
