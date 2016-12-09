import React, {createElement} from 'react';
import {Route, IndexRoute} from 'react-router';

export default function generateReactRoutes(routes, AppComponent) {
    return (
        <Route component={AppComponent}>
            {routes.map(susaninRouteToReactRoute).filter(Boolean)}
        </Route>
    );
}

function susaninRouteToReactRoute(route) {
    if (!route.data || !route.data.react) {
        return null;
    }

    const components = route.data.components;
    const componentsLength = components.length;
    return components.reduceRight((result, component, i) => {
        if (i === componentsLength - 1) {
            return createElement(IndexRoute, {
                component: component
            });

        } else if (i > 0) {
            return createElement(Route, {
                component: component
            }, result);

        } else {
            return createElement(Route, {
                component: component,
                path: pattern2Path(route.pattern)
            }, result);
        }
    }, null);
}

const SUSANIN_PARAM_RE = /<([-_a-z0-9]+)>/ig;
function pattern2Path(pattern) {
    return pattern.replace(SUSANIN_PARAM_RE, ':$1');
}
