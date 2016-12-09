import React from 'react';
import invariant from 'invariant';
import {Router as ReactRouter} from 'react-router';
import createTransitionManager from './createTransitionManager';

class Router extends ReactRouter {

  createTransitionManager() {
    const {matchContext} = this.props;
    if (matchContext) {
      return matchContext.transitionManager;
    }

    const {history, susanin} = this.props;

    invariant(
      history.getCurrentLocation,
      'You have provided a history object created with history v2.x or ' +
      'earlier. This version of React Router is only compatible with v3 ' +
      'history objects. Please upgrade to history v3.x.'
    );

    return createTransitionManager(
      history,
      susanin
    )
  }
}

export default Router;
