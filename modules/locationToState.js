export default function locationToState(susanin, location) {
    const route = susanin.findFirst(location.pathname);
    if (route) {
        return {
            routes: route[0].getData().components,
            params: route[1]
        };
    }
}
