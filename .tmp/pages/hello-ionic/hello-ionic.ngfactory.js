/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './hello-ionic';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/toolbar/toolbar';
import * as import11 from 'ionic-angular/components/navbar/navbar';
import * as import12 from 'ionic-angular/components/button/button';
import * as import13 from 'ionic-angular/components/menu/menu-toggle';
import * as import14 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from 'ionic-angular/components/icon/icon';
import * as import17 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import18 from 'ionic-angular/components/content/content';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from 'ionic-angular/navigation/nav-controller';
import * as import25 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import26 from 'ionic-angular/components/menu/menu-controller';
import * as import27 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import28 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import29 from 'ionic-angular/util/keyboard';
import * as import30 from '@angular/core/src/zone/ng_zone';
import * as import31 from 'ionic-angular/components/tabs/tabs';
var renderType_HelloIonicPage_Host = null;
var _View_HelloIonicPage_Host0 = (function (_super) {
    __extends(_View_HelloIonicPage_Host0, _super);
    function _View_HelloIonicPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HelloIonicPage_Host0, renderType_HelloIonicPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HelloIonicPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HelloIonicPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HelloIonicPage_0_4 = new import3.HelloIonicPage();
        this._appEl_0.initComponent(this._HelloIonicPage_0_4, [], compView_0);
        compView_0.create(this._HelloIonicPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HelloIonicPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.HelloIonicPage) && (0 === requestNodeIndex))) {
            return this._HelloIonicPage_0_4;
        }
        return notFoundResult;
    };
    return _View_HelloIonicPage_Host0;
}(import1.AppView));
function viewFactory_HelloIonicPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HelloIonicPage_Host === null)) {
        (renderType_HelloIonicPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_HelloIonicPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var HelloIonicPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_HelloIonicPage_Host0, import3.HelloIonicPage);
var styles_HelloIonicPage = [];
var renderType_HelloIonicPage = null;
var _View_HelloIonicPage0 = (function (_super) {
    __extends(_View_HelloIonicPage0, _super);
    function _View_HelloIonicPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HelloIonicPage0, renderType_HelloIonicPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HelloIonicPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Header(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import21.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import22.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Navbar(this.parentInjector.get(import23.App), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import24.NavController, null), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_4, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_4, 'menuToggle', '');
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import25.viewFactory_Button0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Button_4_4 = new import12.Button('', '', this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_4), this.renderer);
        this._MenuToggle_4_5 = new import13.MenuToggle(this.parentInjector.get(import26.MenuController), new import20.ElementRef(this._el_4), this.parentInjector.get(import21.ViewController, null), this._Navbar_2_4);
        this._ToolbarItem_4_6 = new import14.ToolbarItem(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._query_Button_4_0 = new import15.QueryList();
        this._appEl_4.initComponent(this._Button_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_6, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_6, 'role', 'img');
        this._Icon_6_3 = new import16.Icon(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '\n    ', null);
        compView_4.create(this._Button_4_4, [[].concat([
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_9 = new import2.AppElement(9, 2, this, this._el_9);
        var compView_9 = import27.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(9), this._appEl_9);
        this._ToolbarTitle_9_4 = new import17.ToolbarTitle(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import10.Toolbar, null), this._Navbar_2_4);
        this._appEl_9.initComponent(this._ToolbarTitle_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, 'Hello Ionic', null);
        compView_9.create(this._ToolbarTitle_9_4, [[].concat([this._text_10])], null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [].concat([this._el_4]),
            [],
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11
            ])
        ], null);
        this._text_12 = this.renderer.createText(this._el_0, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_14 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_14, 'padding', '');
        this._appEl_14 = new import2.AppElement(14, null, this, this._el_14);
        var compView_14 = import28.viewFactory_Content0(this.viewUtils, this.injector(14), this._appEl_14);
        this._Content_14_4 = new import18.Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_14), this.renderer, this.parentInjector.get(import23.App), this.parentInjector.get(import29.Keyboard), this.parentInjector.get(import30.NgZone), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import31.Tabs, null));
        this._appEl_14.initComponent(this._Content_14_4, [], compView_14);
        this._text_15 = this.renderer.createText(null, '\n\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'h3', null);
        this._text_17 = this.renderer.createText(this._el_16, 'Welcome to your first Ionic app!', null);
        this._text_18 = this.renderer.createText(null, '\n\n  ', null);
        this._el_19 = this.renderer.createElement(null, 'p', null);
        this._text_20 = this.renderer.createText(this._el_19, '\n    This starter project is our way of helping you get a functional app running in record time.\n  ', null);
        this._text_21 = this.renderer.createText(null, '\n  ', null);
        this._el_22 = this.renderer.createElement(null, 'p', null);
        this._text_23 = this.renderer.createText(this._el_22, '\n    Follow along on the tutorial section of the Ionic docs!\n  ', null);
        this._text_24 = this.renderer.createText(null, '\n  ', null);
        this._el_25 = this.renderer.createElement(null, 'p', null);
        this._text_26 = this.renderer.createText(this._el_25, '\n    ', null);
        this._el_27 = this.renderer.createElement(this._el_25, 'button', null);
        this.renderer.setElementAttribute(this._el_27, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_27, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_27, 'menuToggle', '');
        this._appEl_27 = new import2.AppElement(27, 25, this, this._el_27);
        var compView_27 = import25.viewFactory_Button0(this.viewUtils, this.injector(27), this._appEl_27);
        this._Button_27_4 = new import12.Button('', '', this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_27), this.renderer);
        this._MenuToggle_27_5 = new import13.MenuToggle(this.parentInjector.get(import26.MenuController), new import20.ElementRef(this._el_27), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import11.Navbar, null));
        this._ToolbarItem_27_6 = new import14.ToolbarItem(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_27), this.renderer, this.parentInjector.get(import10.Toolbar, null), this.parentInjector.get(import11.Navbar, null));
        this._query_Button_27_0 = new import15.QueryList();
        this._appEl_27.initComponent(this._Button_27_4, [], compView_27);
        this._text_28 = this.renderer.createText(null, 'Toggle Menu', null);
        compView_27.create(this._Button_27_4, [[].concat([this._text_28])], null);
        this._text_29 = this.renderer.createText(this._el_25, '\n  ', null);
        this._text_30 = this.renderer.createText(null, '\n\n', null);
        compView_14.create(this._Content_14_4, [
            [],
            [].concat([
                this._text_15,
                this._el_16,
                this._text_18,
                this._el_19,
                this._text_21,
                this._el_22,
                this._text_24,
                this._el_25,
                this._text_30
            ]),
            []
        ], null);
        this._text_31 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'click', this.eventHandler(this._handle_click_4_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._text_31
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_HelloIonicPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.Icon) && (6 === requestNodeIndex))) {
            return this._Icon_6_3;
        }
        if (((token === import12.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_4_4;
        }
        if (((token === import13.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._MenuToggle_4_5;
        }
        if (((token === import14.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarItem_4_6;
        }
        if (((token === import17.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarTitle_9_4;
        }
        if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Navbar_2_4;
        }
        if (((token === import10.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Header_0_3;
        }
        if (((token === import12.Button) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Button_27_4;
        }
        if (((token === import13.MenuToggle) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._MenuToggle_27_5;
        }
        if (((token === import14.ToolbarItem) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._ToolbarItem_27_6;
        }
        if (((token === import18.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._Content_14_4;
        }
        return notFoundResult;
    };
    _View_HelloIonicPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var currVal_3 = '';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._MenuToggle_4_5.menuToggle = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_5 = 'menu';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Icon_6_3.name = currVal_5;
            this._expr_5 = currVal_5;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_14_4.ngOnInit();
        }
        changed = false;
        var currVal_9 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this._Button_27_4.color = currVal_9;
            changed = true;
            this._expr_9 = currVal_9;
        }
        if (changed) {
            this._appEl_27.componentView.markAsCheckOnce();
        }
        var currVal_10 = '';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._MenuToggle_27_5.menuToggle = currVal_10;
            this._expr_10 = currVal_10;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_4_0.dirty) {
                this._query_Button_4_0.reset([this._Button_4_4]);
                this._ToolbarItem_4_6._buttons = this._query_Button_4_0;
                this._query_Button_4_0.notifyOnChanges();
            }
            if (this._query_Button_27_0.dirty) {
                this._query_Button_27_0.reset([this._Button_27_4]);
                this._ToolbarItem_27_6._buttons = this._query_Button_27_0;
                this._query_Button_27_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_4_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_27_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_4_5.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_4, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_6_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_6, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._Content_14_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_14, 'statusbar-padding', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_11 = this._MenuToggle_27_5.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementProperty(this._el_27, 'hidden', currVal_11);
            this._expr_11 = currVal_11;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_HelloIonicPage0.prototype.destroyInternal = function () {
        this._Icon_6_3.ngOnDestroy();
        this._Content_14_4.ngOnDestroy();
    };
    _View_HelloIonicPage0.prototype._handle_click_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_4_5.toggle() !== false);
        return (true && pd_0);
    };
    _View_HelloIonicPage0.prototype._handle_click_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_27_5.toggle() !== false);
        return (true && pd_0);
    };
    return _View_HelloIonicPage0;
}(import1.AppView));
export function viewFactory_HelloIonicPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HelloIonicPage === null)) {
        (renderType_HelloIonicPage = viewUtils.createRenderComponentType('D:/Surya/GitHub/testChillOut/.tmp/pages/hello-ionic/hello-ionic.html', 0, import8.ViewEncapsulation.None, styles_HelloIonicPage, {}));
    }
    return new _View_HelloIonicPage0(viewUtils, parentInjector, declarationEl);
}
