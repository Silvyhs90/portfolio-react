self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./pages/github.js":
/*!*************************!*\
  !*** ./pages/github.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Silvina\\Desktop\\proyecto-react\\pages\\github.js",
    _this = undefined;



var Github = function Github(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-4 offset-md-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card card-body text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: user.avatar_url,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: user.bio
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: user.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: user.blog
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: user.blog,
            target: "_blank",
            className: "btn btn-outline-secondary my-2",
            children: "Mi Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: user.html_url,
            target: "_blank",
            className: "btn btn-outline-secondary my-2",
            children: "ir a Github"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, _this);
};

_c = Github;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Github);

var _c;

$RefreshReg$(_c, "Github");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0aHViLmpzIl0sIm5hbWVzIjpbIkdpdGh1YiIsInVzZXIiLCJuYW1lIiwiYXZhdGFyX3VybCIsImJpbyIsImxvY2F0aW9uIiwiYmxvZyIsImh0bWxfdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBWTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUN2QixzQkFDSSw4REFBQyx1REFBRDtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBQSxrQ0FDSTtBQUFBLHNCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUssZUFBRyxFQUFFRCxJQUFJLENBQUNFLFVBQWY7QUFBMkIsZUFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLHNCQUFJRixJQUFJLENBQUNHO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUEsc0JBQUlILElBQUksQ0FBQ0k7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBQSxzQkFBSUosSUFBSSxDQUFDSztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFNSTtBQUFHLGdCQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBZDtBQUFvQixrQkFBTSxFQUFDLFFBQTNCO0FBQW9DLHFCQUFTLEVBQUMsZ0NBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBUUk7QUFBRyxnQkFBSSxFQUFFTCxJQUFJLENBQUNNLFFBQWQ7QUFBd0Isa0JBQU0sRUFBQyxRQUEvQjtBQUF3QyxxQkFBUyxFQUFDLGdDQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1CSCxDQXBCRDs7S0FBTVAsTTs7QUFtQ04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2l0aHViLjYyYjdjNmM2MjQzOWMwMzIyOGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuY29uc3QgR2l0aHViID0gKHt1c2VyfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgb2Zmc2V0LW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3VzZXIubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dXNlci5iaW99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLmxvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dXNlci5ibG9nfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt1c2VyLmJsb2d9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNaSBCbG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VzZXIuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgbXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpciBhIEdpdGh1YjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9zaWx2eWhzOTAnKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgICAgIHVzZXI6IGRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdGh1YjsiXSwic291cmNlUm9vdCI6IiJ9