export default function locationToState(routeMatcher, location) {
    const match = routeMatcher(location);
    if (match) {
        const {route, params} = match;
        const routeData = route.getData();

        // RouterContext requires "route" object for every component
        // in fact it's fake because susanin do all stuff
        const fakeRoute = {name: route.getName(), data: routeData};
        const routes = routeData.components.map(function() {
            return fakeRoute
        });

        return {
            routes: routes,
            components: routeData.components,
            params: params
        };
    }
}
