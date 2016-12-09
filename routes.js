// 1) <App> добавлять всем, а не писать руками?
// 2) Хотим ли сусанине аналог иерархии: <Route> <Route> </Route>?
// 3)
//     const App = require('components/App');
//     const DealersMarkFilter = require('components/DealersMarkFilter');
//     {
//        components: [App, DealersMarkFilter]
//     }
//

const routes = [
    {
        name: 'dealers-mark',
        pattern: '/dealers-mark/',
        data: {
            components: ['App', 'DealersMarkFilter']
            /*
             <Router component={App}>
                <Route name='dealers-marks' path='/dealers-marks/' component={DealersMarkFilter}/>
             </Router>

             render() {
                <App>
                  <DealersMarkFilter/>
                </App>
             }
            */
        }
    },
    {
        name: 'dealers-listing',
        pattern: '/dilery/(cars/)(:mark/(:model:/(:super_gen/(:configuration_id/(:tech_param_id/))))):section/',
        data: {
            components: ['App', 'DealersListingPage']
        }
    },
    {
        name: 'catalog-index',
        pattern: '(/:category)/catalog/',
        data: {
            components: ['App', 'CatalogApp', 'CatalogIndexPage']
            /*
             <Router component={App}>
                <Route component={CatalogApp} path="(/:category)/catalog/"/>
                    <IndexRoute name='catalog-index' component={CatalogIndexPage}/>
                </Route>
             </Router>

             render() {
                <App>
                    <CatalogApp>
                        <CatalogIndexPage/>
                    </CatalogApp>
                </App>
             }
             */
        }
    },
    {
        name: 'catalog-model-listing',
        pattern: '(/:category)/catalog/all/',
        data: {
            components: ['App', 'CatalogApp', 'CatalogModelListingPage']
        }
    },
    {
        name: 'atalog-mmm-filters',
        pattern: '(/:category)/catalog/marks/',
        data: {
            components: ['App', 'CatalogApp', 'CatalogMarkFilter']
        }
    },
    {
        name: 'catalog-model-listing',
        pattern: '(/:category)/catalog/:mark/',
        data: {
            components: ['App', 'CatalogApp', 'CatalogModelListingPage']
        }
    },
    {
        name: 'catalog-model-listing',
        pattern: '(/:category)/catalog/:mark/:model/',
        data: {
            components: ['App', 'CatalogApp', 'CatalogGenerationListingPage']
        }
    }
];
