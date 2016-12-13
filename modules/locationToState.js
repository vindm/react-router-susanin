export default function locationToState(susanin, location) {
    const match = susanin.findFirst(location.pathname);
    if (match) {
        const route = match[0];
        const params = match[1];
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
