import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  };
  
  class AvailabilityDrawer extends React.Component {
    state = {
        top: false
    }

    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
    };

    componentDidMount(){
        this.setState({top: true});
    }
  
    render() {
      const { classes } = this.props;
      const fullList = (
        <div className={classes.fullList}>
          <List>
          <h1>{`Availability for ${this.props.selected}`}</h1>
            {this.props.sources.map((source, index) => (
              <ListItem 
                button>
                <Button href={source.locations[0].url}>{source.locations[0].display_name}</Button>
              </ListItem>
            ))}
          </List>
        </div>
      );
  
      return (
        <div>
          <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('top', false)}
              onKeyDown={this.toggleDrawer('top', false)}
            >
              {fullList}
            </div>
          </Drawer>
        </div>
      );
    }
  }
  
  AvailabilityDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AvailabilityDrawer);