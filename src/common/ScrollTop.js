import { Component } from 'react';
import { withRouter  } from 'react-router-dom';

class ScrollTop extends Component {


    ComponentWillReceiveProps = (nextProps) => {
        if(this.props.location !== nextProps.location){
            window.scrollTo(0, 0);
        }
    }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollTop);
