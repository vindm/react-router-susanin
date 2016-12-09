import {REPLACE} from 'history/lib/Actions'
import invariant from 'invariant'

import createTransitionManager from './createTransitionManager'
import {createRouterObject} from 'react-router/lib/RouterUtils'

/**
 * A high-level API to be used for server-side rendering.
 *
 * This function matches a location to a set of routes and calls
 * callback(error, redirectLocation, renderProps) when finished.
 *
 * Note: You probably don't want to use this in a browser unless you're using
 * server-side rendering with async routes.
 */
function match({history, susanin, location}, callback) {
    invariant(
        history || location,
        'match needs a history or a location'
    );
    invariant(
        susanin,
        'match needs a Susanin instance'
    );

    const transitionManager = createTransitionManager(history, susanin);

    if (location) {
        // Allow match({ location: '/the/path', ... })
        location = history.createLocation(location)
    } else {
        location = history.getCurrentLocation()
    }

    transitionManager.match(location, (error, redirectLocation, nextState) => {
        let renderProps;

        if (nextState) {
            const router = createRouterObject(history, transitionManager, nextState);
            renderProps = {
                ...nextState,
                router,
                matchContext: {transitionManager, router}
            }
        }

        callback(
            error,
            redirectLocation && history.createLocation(redirectLocation, REPLACE),
            renderProps
        )
    })
}

export default match
