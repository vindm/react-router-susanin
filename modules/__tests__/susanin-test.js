import expect from 'expect'
import {create, locationToState} from '../locationToState';

describe('susanin', function() {

    const route_AppSection1Page1 = {
        name: 'AppSection1Page1',
        path: '/page1/',
        component: 'AppSection1Page1'
    };

    const route_AppSection1Page2 = {
        name: 'AppSection1Page2',
        path: '/page2/(:id)',
        component: 'AppSection1Page2'
    };

    const route_AppSection2Page1SubPage1 = {
        name: 'AppSection2Page1SubPage1',
        path: '/subpage1/',
        component: 'AppSection2Page1SubPage1'
    };

    const route_AppSection2Page1 = {
        name: 'AppSection2Page1',
        path: '/page1/',
        component: 'AppSection2Page1',
        childRoutes: [route_AppSection2Page1SubPage1]
    };

    const route_AppSection2Page2 = {
        name: 'AppSection2Page2',
        path: '/page2/:id',
        component: 'AppSection2Page2'
    };

    const route_AppSection1 = {
        name: 'AppSection1',
        path: '/section1/',
        indexRoute: {
            name: 'AppSection1Index',
            component: 'AppSection1Index'
        },
        component: 'AppSection1',
        childRoutes: [route_AppSection1Page1, route_AppSection1Page2]
    };

    const route_AppSection2 = {
        name: 'AppSection2',
        path: '/section2/',
        component: 'AppSection2',
        childRoutes: [route_AppSection2Page1, route_AppSection2Page2]
    };

    const routes = {
        name: 'App',
        path: '/',
        indexRoute: {
            name: 'Index',
            component: 'Index'
        },
        component: 'App',
        childRoutes: [route_AppSection1, route_AppSection2]
    };

    beforeEach(function() {
        this.susanin = create([routes]);
    });

    describe('build', function() {
        it('Index -> /', function() {
            expect(this.susanin.getRouteByName('Index').build()).toEqual('/')
        });

        it('AppSection1 -> /section1/', function() {
            expect(this.susanin.getRouteByName('AppSection1').build()).toEqual('/section1/')
        });

        it('AppSection2 -> /section2/', function() {
            expect(this.susanin.getRouteByName('AppSection2').build()).toEqual('/section2/')
        });

        it('AppSection1Page1 -> /section1/page1/', function() {
            expect(this.susanin.getRouteByName('AppSection1Page1').build()).toEqual('/section1/page1/')
        });

        it('AppSection1Page2 -> /section1/page2/', function() {
            expect(this.susanin.getRouteByName('AppSection1Page2').build()).toEqual('/section1/page2/')
        });

        it('AppSection1Page2 {id: "foo"} -> /section1/page2/foo', function() {
            expect(this.susanin.getRouteByName('AppSection1Page2').build({id: 'foo'})).toEqual('/section1/page2/foo')
        });

        it('AppSection2Page1 -> /section1/page1/', function() {
            expect(this.susanin.getRouteByName('AppSection2Page1').build()).toEqual('/section2/page1/')
        });

        it('AppSection2Page2 -> /section1/page2/', function() {
            expect(this.susanin.getRouteByName('AppSection2Page2').build()).toEqual('/section2/page2/')
        });

        it('AppSection2Page2 {id: "foo"} -> /section1/page2/foo', function() {
            expect(this.susanin.getRouteByName('AppSection2Page2').build({id: "foo"})).toEqual('/section2/page2/foo')
        });
    });

    describe('match', function() {
        it('/', function() {
            const state = locationToState(this.susanin, {pathname: '/'});
            expect({
                routes: extractComponents(state.routes),
                params: state.params
            }).toEqual({
                routes: ['App', 'Index'],
                params: {}
            })
        });

        it('/section1/', function() {
            const state = locationToState(this.susanin, {pathname: '/section1/'});
            expect({
                routes: extractComponents(state.routes),
                params: state.params
            }).toEqual({
                routes: ['App', 'AppSection1', 'AppSection1Index'],
                params: {}
            })
        });

        it('/section1/page1/', function() {
            const state = locationToState(this.susanin, {pathname: '/section1/page1/'});
            expect({
                routes: extractComponents(state.routes),
                params: state.params
            }).toEqual({
                routes: ['App', 'AppSection1', 'AppSection1Page1'],
                params: {}
            });
        });

        it('/section1/page2/', function() {
            const state = locationToState(this.susanin, {pathname: '/section1/page2/'});
            expect({
                routes: extractComponents(state.routes),
                params: state.params
            }).toEqual({
                routes: ['App', 'AppSection1', 'AppSection1Page2'],
                params: {}
            });
        });

        it('/section1/page2/foo', function() {
            const state = locationToState(this.susanin, {pathname: '/section1/page2/foo'});
            expect({
                routes: extractComponents(state.routes),
                params: state.params
            }).toEqual({
                routes: ['App', 'AppSection1', 'AppSection1Page2'],
                params: {id: 'foo'}
            });
        });

        it('/section2/page1/subpage1/', function() {
            const state = locationToState(this.susanin, {pathname: '/section2/page1/subpage1/'});
            expect({
                routes: extractComponents(state.routes),
                params: state.params
            }).toEqual({
                routes: ['App', 'AppSection2', 'AppSection2Page1', 'AppSection2Page1SubPage1'],
                params: {}
            });
        });
    });

    function extractComponents(routes) {
        return routes.map((route) => route.component);
    }
});
