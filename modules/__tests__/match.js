import React, {Component} from 'react';
// import {renderToStaticMarkup, renderToString} from 'react-dom/server'

import Susanin from 'susanin';
import extendRoutes from '../extendRoutes';
import {createMemoryHistory} from 'react-router';
import match from '../match';

const ReactDOMServer = require('react-dom/server');
import {RouterContext} from 'react-router';

describe('match', function() {

    class App extends Component {
        render() {
            return (<div className="App">{this.props.children}</div>);
        };
    }

    class AppSection extends Component {
        render() {
            return (<div className="AppSection">{this.props.children}</div>);
        };
    }

    class AppSectionPage extends Component {
        render() {
            return (<div className="AppSectionPage">{this.props.children}</div>);
        };
    }

    const routes = [
        {
            name: "foo",
            pattern: '/foo/<section>/',
            defaults: {category: 'cars'},
            data: {react: true}
        }
    ];
    const reactData = {
        foo: [AppSection, AppSectionPage]
    };

    beforeEach(function() {
        const url = '/foo/all/?test=1';
        this.memoryHistory = createMemoryHistory({
            entries: [url]
        });

        const reactRoutes = extendRoutes(routes, reactData);
        this.susanin = new Susanin();

        reactRoutes.forEach((route) => {
            this.susanin.addRoute(route);
        });
    });

    describe('renderProps ->', function() {

        it('should has route params', function(done) {
            match({
                history: this.memoryHistory,
                susanin: this.susanin
            }, (error, redirectLocation, renderProps) => {
                expect(renderProps.params).to.be.eql({section: 'all', category: 'cars'});
                done();
            })
        });

        it('should has query params', function(done) {
            match({
                history: this.memoryHistory,
                susanin: this.susanin
            }, (error, redirectLocation, renderProps) => {
                expect(renderProps.location.query).to.be.eql({test: '1'});
                done();
            })
        });
    });

    it('should render route', function() {
        match({
            history: this.memoryHistory,
            susanin: this.susanin
        }, (error, redirectLocation, renderProps) => {
            const result = ReactDOMServer.renderToStaticMarkup(
                React.createElement(RouterContext, renderProps)
            );
            expect(result).to.be.equal('<div class="AppSection"><div class="AppSectionPage"></div></div>');
        })
    });

});
