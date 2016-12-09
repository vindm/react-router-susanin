import extendRoutes from '../extendRoutes';

describe('extendRoutes', function() {

    it('should extend react route with components', function() {
        const routes = [
            {name: 'foo', pattern: '/foo/', data: {react: true}}
        ];
        const reactData = {
            foo: ['App', 'FooPage']
        };
        const extendedRoutes = extendRoutes(routes, reactData);
        expect(extendedRoutes[0].data.components).to.be.equal(reactData.foo);
    });

    it('should throw error for missed declarations', function() {
        const routes = [
            {name: 'foo', pattern: '/foo/', data: {react: true}}
        ];
        const reactData = {};
        expect(() => extendRoutes(routes, reactData)).to.throw(Error);
    });

    it('should not extend non react route', function() {
        const routes = [
            {name: 'foo', pattern: '/foo/'}
        ];
        const reactData = {
            bar: ['App', 'BarPage']
        };
        const extendedRoutes = extendRoutes(routes, reactData);
        expect(extendedRoutes[0]).to.be.eql({name: 'foo', pattern: '/foo/'});
    });

});
