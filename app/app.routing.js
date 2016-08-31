"use strict";
var router_1 = require('@angular/router');
var login_routing_1 = require('./login/login.routing');
var appRoutes = login_routing_1.loginRoutes.slice();
// The Routes is an array of routes that describe how to navigate. Each Route maps a URL path to a component.
// There are no leading slashes in our path. The router parses and builds the URL for us, allowing us to use relative and absolute paths when navigating between application views.
// The data property in the second route is a place to store arbitrary data associated to each specific route. This data is accessible with each activated route and can be used to store items such as page titles, breadcrumb text and other read-only data. We'll use the resolve guard to retrieve additional data later in the chapter.
// The :id in the third route is a token for a route parameter. In a URL such as /hero/42, "42" is the value of the id parameter. The corresponding HeroDetailComponent will use that value to find and present the hero whose id is 42. We'll learn more about route parameters later in this chapter.
// The ** in the fourth route denotes a wildcard path for our route. The router will match this route if the URL requested doesn't match any paths for routes defined in our configuration. This is useful for displaying a 404 page or redirecting to another route.
exports.appRoutingProviders = [
    login_routing_1.authProviders
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map