
import React, {Component} from 'react';
import gridContext from './util/context';

export default function observeGrid(DumbComponent) {
  return class extends Component {
    static displayName = 'Grid' + (DumbComponent.displayName || DumbComponent.name);

    static contextTypes = gridContext;

    render() {
      return (<DumbComponent
        breakPoint={this.context.breakPoint}
        colWidth={this.context.colWidth}
        colMinPixelWidth={this.context.colMinPixelWidth}
        colMaxPixelWidth={this.context.colMaxPixelWidth}
        {... this.props}
      />);
    }
  };
}
