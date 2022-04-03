'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ionic-app-base documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccessoriesPageModule.html" data-type="entity-link" >AccessoriesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccessoriesPageModule-c1abb36670f876166ac9d713041f1ee568a96633d022fcd98c98b90f1719f2eec88984f6fb6621525b41dbef719d6f334ae6855986dd2aac3598e213fdfcd925"' : 'data-target="#xs-components-links-module-AccessoriesPageModule-c1abb36670f876166ac9d713041f1ee568a96633d022fcd98c98b90f1719f2eec88984f6fb6621525b41dbef719d6f334ae6855986dd2aac3598e213fdfcd925"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccessoriesPageModule-c1abb36670f876166ac9d713041f1ee568a96633d022fcd98c98b90f1719f2eec88984f6fb6621525b41dbef719d6f334ae6855986dd2aac3598e213fdfcd925"' :
                                            'id="xs-components-links-module-AccessoriesPageModule-c1abb36670f876166ac9d713041f1ee568a96633d022fcd98c98b90f1719f2eec88984f6fb6621525b41dbef719d6f334ae6855986dd2aac3598e213fdfcd925"' }>
                                            <li class="link">
                                                <a href="components/AccessoriesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessoriesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccessoriesPageRoutingModule.html" data-type="entity-link" >AccessoriesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AddPlantPageModule.html" data-type="entity-link" >AddPlantPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddPlantPageModule-9a6e3d6b88a9fbeb9c8936ab968b65db87549d6d7a13448e65346763433470ef876bab3baa1c45907ca3bbe23a2ecb7f1727c2d21697c605382f34fe62c659b1"' : 'data-target="#xs-components-links-module-AddPlantPageModule-9a6e3d6b88a9fbeb9c8936ab968b65db87549d6d7a13448e65346763433470ef876bab3baa1c45907ca3bbe23a2ecb7f1727c2d21697c605382f34fe62c659b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddPlantPageModule-9a6e3d6b88a9fbeb9c8936ab968b65db87549d6d7a13448e65346763433470ef876bab3baa1c45907ca3bbe23a2ecb7f1727c2d21697c605382f34fe62c659b1"' :
                                            'id="xs-components-links-module-AddPlantPageModule-9a6e3d6b88a9fbeb9c8936ab968b65db87549d6d7a13448e65346763433470ef876bab3baa1c45907ca3bbe23a2ecb7f1727c2d21697c605382f34fe62c659b1"' }>
                                            <li class="link">
                                                <a href="components/AddPlantPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddPlantPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddPlantPageRoutingModule.html" data-type="entity-link" >AddPlantPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d94479928f555d9e1bf00c78a6e258426ef12a3a26c0a0eb740977a26fa64bf3ee0956cb02827ab713cadf57acea11b86baaa6a6213cd5f962d48790724f00b7"' : 'data-target="#xs-components-links-module-AppModule-d94479928f555d9e1bf00c78a6e258426ef12a3a26c0a0eb740977a26fa64bf3ee0956cb02827ab713cadf57acea11b86baaa6a6213cd5f962d48790724f00b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d94479928f555d9e1bf00c78a6e258426ef12a3a26c0a0eb740977a26fa64bf3ee0956cb02827ab713cadf57acea11b86baaa6a6213cd5f962d48790724f00b7"' :
                                            'id="xs-components-links-module-AppModule-d94479928f555d9e1bf00c78a6e258426ef12a3a26c0a0eb740977a26fa64bf3ee0956cb02827ab713cadf57acea11b86baaa6a6213cd5f962d48790724f00b7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuFirstComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuFirstComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuSecondComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuSecondComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-1fa0731d9afadd463803df33c7df6fb7e7d31c1d524065e01fcebcb0435117d802b63164f2dacb341a972e9a28462e2c1a135675cda7d804ffc3990e26393ec3"' : 'data-target="#xs-components-links-module-HomePageModule-1fa0731d9afadd463803df33c7df6fb7e7d31c1d524065e01fcebcb0435117d802b63164f2dacb341a972e9a28462e2c1a135675cda7d804ffc3990e26393ec3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-1fa0731d9afadd463803df33c7df6fb7e7d31c1d524065e01fcebcb0435117d802b63164f2dacb341a972e9a28462e2c1a135675cda7d804ffc3990e26393ec3"' :
                                            'id="xs-components-links-module-HomePageModule-1fa0731d9afadd463803df33c7df6fb7e7d31c1d524065e01fcebcb0435117d802b63164f2dacb341a972e9a28462e2c1a135675cda7d804ffc3990e26393ec3"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ListPlantPageModule.html" data-type="entity-link" >ListPlantPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListPlantPageModule-cfe7c52f77a329f341566176a72c8527e2d395a80db55f0a59213d1b8f3c9a67dfb4c124263c765fde3d8fbab40e5cd1c25ce26b9e69248f95735d89ff9dcce4"' : 'data-target="#xs-components-links-module-ListPlantPageModule-cfe7c52f77a329f341566176a72c8527e2d395a80db55f0a59213d1b8f3c9a67dfb4c124263c765fde3d8fbab40e5cd1c25ce26b9e69248f95735d89ff9dcce4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListPlantPageModule-cfe7c52f77a329f341566176a72c8527e2d395a80db55f0a59213d1b8f3c9a67dfb4c124263c765fde3d8fbab40e5cd1c25ce26b9e69248f95735d89ff9dcce4"' :
                                            'id="xs-components-links-module-ListPlantPageModule-cfe7c52f77a329f341566176a72c8527e2d395a80db55f0a59213d1b8f3c9a67dfb4c124263c765fde3d8fbab40e5cd1c25ce26b9e69248f95735d89ff9dcce4"' }>
                                            <li class="link">
                                                <a href="components/ListPlantPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPlantPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListPlantPageRoutingModule.html" data-type="entity-link" >ListPlantPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlantsPageModule.html" data-type="entity-link" >PlantsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PlantsPageModule-a547e02ccfb8c521d069c39a7173b86b991650ac07b602bb2107e4040fd5e1eff815b1d559427834226a3219e1577df28c980a91d298f327b4981d55ff7c9c5d"' : 'data-target="#xs-components-links-module-PlantsPageModule-a547e02ccfb8c521d069c39a7173b86b991650ac07b602bb2107e4040fd5e1eff815b1d559427834226a3219e1577df28c980a91d298f327b4981d55ff7c9c5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlantsPageModule-a547e02ccfb8c521d069c39a7173b86b991650ac07b602bb2107e4040fd5e1eff815b1d559427834226a3219e1577df28c980a91d298f327b4981d55ff7c9c5d"' :
                                            'id="xs-components-links-module-PlantsPageModule-a547e02ccfb8c521d069c39a7173b86b991650ac07b602bb2107e4040fd5e1eff815b1d559427834226a3219e1577df28c980a91d298f327b4981d55ff7c9c5d"' }>
                                            <li class="link">
                                                <a href="components/PlantsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlantsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlantsPageRoutingModule.html" data-type="entity-link" >PlantsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchPlantPageModule.html" data-type="entity-link" >SearchPlantPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchPlantPageModule-c2ad006c86eaf3b126dbef101f86c84755f9be17321c6a1bb0ba2238708a90799df0930c9d41ac3f3824749eb49f135b77cf56140a5d6c414fd52d90d34bb961"' : 'data-target="#xs-components-links-module-SearchPlantPageModule-c2ad006c86eaf3b126dbef101f86c84755f9be17321c6a1bb0ba2238708a90799df0930c9d41ac3f3824749eb49f135b77cf56140a5d6c414fd52d90d34bb961"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchPlantPageModule-c2ad006c86eaf3b126dbef101f86c84755f9be17321c6a1bb0ba2238708a90799df0930c9d41ac3f3824749eb49f135b77cf56140a5d6c414fd52d90d34bb961"' :
                                            'id="xs-components-links-module-SearchPlantPageModule-c2ad006c86eaf3b126dbef101f86c84755f9be17321c6a1bb0ba2238708a90799df0930c9d41ac3f3824749eb49f135b77cf56140a5d6c414fd52d90d34bb961"' }>
                                            <li class="link">
                                                <a href="components/SearchPlantPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPlantPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchPlantPageRoutingModule.html" data-type="entity-link" >SearchPlantPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});