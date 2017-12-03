export default function locationToState(routeMatcher, location, section) {
    const match = routeMatcher(location);

    if (! match) {
        return;
    }

    const { route, params } = match;
    const routeName = route.getName();
    const routeData = route.getData();
    let components = routeData.components;

    if (section && typeof components === 'object' && ! Array.isArray(components)) {
        components = components[section];
    }

    const fake = typeof components === 'object' && ! Array.isArray(components) ?
        components[Object.keys(components)[0]] :
        components;

    // RouterContext requires "route" object for every component
    // in fact it's fake because susanin do all stuff
    const routes = fake.map(() =>
        ({ name: routeName, data: routeData, section }));

    return {
        params,
        routes,
        routeData,
        routeName,
        section,
        components
    };
}
