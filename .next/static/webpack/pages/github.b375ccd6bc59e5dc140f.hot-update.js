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
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Silvina\\Desktop\\proyecto-react\\pages\\github.js",
    _this = undefined;




var Github = function Github(_ref) {
  var user = _ref.user,
      statusCode = _ref.statusCode;

  if (statusCode) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_error__WEBPACK_IMPORTED_MODULE_2__.default, {
      statusCode: statusCode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 16
    }, _this);
  }

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
            lineNumber: 14,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: user.avatar_url,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: user.bio
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: user.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: user.blog,
            target: "_blank",
            className: "btn btn-outline-secondary my-2",
            children: "Mi LinkedIn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: user.html_url,
            target: "_blank",
            className: "btn btn-outline-secondary my-2",
            children: "ir a Github"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2l0aHViLmpzIl0sIm5hbWVzIjpbIkdpdGh1YiIsInVzZXIiLCJzdGF0dXNDb2RlIiwibmFtZSIsImF2YXRhcl91cmwiLCJiaW8iLCJsb2NhdGlvbiIsImJsb2ciLCJodG1sX3VybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXdCO0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBRW5DLE1BQUdBLFVBQUgsRUFBYztBQUNWLHdCQUFPLDhEQUFDLDJDQUFEO0FBQU8sZ0JBQVUsRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0g7O0FBQ0Qsc0JBQ0ksOERBQUMsdURBQUQ7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLDRCQUFmO0FBQUEsa0NBQ0k7QUFBQSxzQkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFLLGVBQUcsRUFBRUYsSUFBSSxDQUFDRyxVQUFmO0FBQTJCLGVBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBQSxzQkFBSUgsSUFBSSxDQUFDSTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSTtBQUFBLHNCQUFJSixJQUFJLENBQUNLO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQUcsZ0JBQUksRUFBRUwsSUFBSSxDQUFDTSxJQUFkO0FBQW9CLGtCQUFNLEVBQUMsUUFBM0I7QUFBb0MscUJBQVMsRUFBQyxnQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFPSTtBQUFHLGdCQUFJLEVBQUVOLElBQUksQ0FBQ08sUUFBZDtBQUF3QixrQkFBTSxFQUFDLFFBQS9CO0FBQXdDLHFCQUFTLEVBQUMsZ0NBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBdkJEOztLQUFNUixNOztBQXdDTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRodWIuYjM3NWNjZDZiYzU5ZTVkYzE0MGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcic7XHJcblxyXG5jb25zdCBHaXRodWIgPSAoe3VzZXIsIHN0YXR1c0NvZGV9KSA9PiB7XHJcblxyXG4gICAgaWYoc3RhdHVzQ29kZSl7XHJcbiAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSAvPlxyXG4gICAgfSBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG9mZnNldC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPnt1c2VyLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3VzZXIuYmlvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD57dXNlci5sb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXNlci5ibG9nfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWkgTGlua2VkSW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXNlci5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlyIGEgR2l0aHViPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKXtcclxuICAgICAgICBcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3NpbHZ5aHM5MCcpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzLnN0YXR1cyA+IDIwMCA/IHJlcy5zdGF0dXMgOiBmYWxzZTtcclxuICAgIFxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2l0aHViOyJdLCJzb3VyY2VSb290IjoiIn0=