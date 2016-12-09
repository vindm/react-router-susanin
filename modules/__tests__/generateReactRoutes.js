import React, {Component} from 'react';
import extendRoutes from '../extendRoutes';
import generateReactRoutes from '../generateReactRoutes';
import {renderToStaticMarkup, renderToString} from 'react-dom/server'

import {createMemoryHistory, Router} from 'react-router';

describe('generateReactRoutes', function() {

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
        {name: "foo", pattern: '/foo/', data: {react: true}}
    ];
    const reactData = {
        foo: [AppSection, AppSectionPage]
    };

    it('should generate markup without AppComponent', function() {
        const reactRoutes = extendRoutes(routes, reactData);
        const browserString = renderToStaticMarkup(
            <Router history={createMemoryHistory('/foo/')} routes={generateReactRoutes(reactRoutes)} />
        );
        expect(browserString).to.be.equal('<div class="AppSection"><div class="AppSectionPage"></div></div>');
    });

    it('should generate markup with AppComponent', function() {
        const reactRoutes = extendRoutes(routes, reactData);
        const browserString = renderToStaticMarkup(
            <Router history={createMemoryHistory('/foo/')} routes={generateReactRoutes(reactRoutes, App)} />
        );
        expect(browserString).to.be.equal('<div class="App"><div class="AppSection"><div class="AppSectionPage"></div></div></div>');
    });

});
