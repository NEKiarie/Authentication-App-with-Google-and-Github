"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"serverSideProps\": function() { return /* binding */ serverSideProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_nekiarie_Desktop_NextjsAuth_App_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_nekiarie_Desktop_NextjsAuth_App_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_nekiarie_Desktop_NextjsAuth_App_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)(), session1 = ref.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Home Page\"\n                }, void 0, false, {\n                    fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            session1 ? User({\n                session: session1\n            }) : Guest()\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"DoscxLJ0iWeGM5tfuH+hsht3qGw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Home;\n//Guest\nfunction Guest() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"container mx-auto text-center py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"text-4xl font-bold\",\n                children: \"Guest HomePage\"\n            }, void 0, false, {\n                fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        className: \"mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray\",\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 33\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Guest;\n//Authorized user\nfunction User(param) {\n    var session1 = param.session;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: \"container mx-auto text-center py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"text-4xl font-bold\",\n                children: \"Authorized User HomePage\"\n            }, void 0, false, {\n                fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"details\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                        children: session1.user.name\n                    }, void 0, false, {\n                        fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                        children: session1.user.email\n                    }, void 0, false, {\n                        fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50\",\n                    children: \"Sign Out\"\n                }, void 0, false, {\n                    fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    href: \"/profile\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        className: \"mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray\",\n                        children: \"Profile page\"\n                    }, void 0, false, {\n                        fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 33\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nekiarie/Desktop/NextjsAuth App/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_c2 = User;\nfunction serverSideProps(_) {\n    return _serverSideProps.apply(this, arguments);\n}\nfunction _serverSideProps() {\n    _serverSideProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_nekiarie_Desktop_NextjsAuth_App_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var req;\n        return _home_nekiarie_Desktop_NextjsAuth_App_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    req = param.req;\n                    _ctx.next = 3;\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getSession)({\n                        req: req\n                    });\n                case 3:\n                    constsession = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            session: session\n                        }\n                    });\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _serverSideProps.apply(this, arguments);\n}\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Guest\");\n$RefreshReg$(_c2, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Y7V0FOcUJnQixnQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiBcblxuICBjb25zdCB7ZGF0YTpzZXNzaW9ufSA9IHVzZVNlc3Npb24oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIFBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAge3Nlc3Npb24gPyBVc2VyKHtzZXNzaW9ufSk6IEd1ZXN0KCl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9HdWVzdFxuZnVuY3Rpb24gR3Vlc3QoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdGV4dC1jZW50ZXIgcHktMjBcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCc+R3Vlc3QgSG9tZVBhZ2U8L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgIDxMaW5rIGhyZWYgPSB7XCIvbG9naW5cIn0+PGEgY2xhc3NOYW1lPSdtdC01IHB4LTEwIHB5LTEgcm91bmRlZC1zbSBiZy1pbmRpZ28tNTAwIHRleHQtZ3JheSc+U2lnbiBJbjwvYT48L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cblxuLy9BdXRob3JpemVkIHVzZXJcblxuZnVuY3Rpb24gVXNlcih7IHNlc3Npb259KXtcbiAgcmV0dXJuKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyIHB5LTIwXCI+XG4gICAgPGgzIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkJz5BdXRob3JpemVkIFVzZXIgSG9tZVBhZ2U8L2gzPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMnPlxuICAgICA8aDU+e3Nlc3Npb24udXNlci5uYW1lfTwvaDU+XG4gICAgIDxoNT57c2Vzc2lvbi51c2VyLmVtYWlsfTwvaDU+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXQtNSBweC0xMCBweS0xIHJvdW5kZWQtc20gYmctaW5kaWdvLTUwMCBiZy1ncmF5LTUwJz5TaWduIE91dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgPExpbmsgaHJlZiA9IHtcIi9wcm9maWxlXCJ9PjxhIGNsYXNzTmFtZT0nbXQtNSBweC0xMCBweS0xIHJvdW5kZWQtc20gYmctaW5kaWdvLTUwMCB0ZXh0LWdyYXknPlByb2ZpbGUgcGFnZTwvYT48L0xpbms+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VydmVyU2lkZVByb3BzKHtyZXF9KXtcbiAgY29uc3RzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7c2Vzc2lvbn1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsIkxpbmsiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwic2Vzc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwiVXNlciIsIkd1ZXN0IiwibWFpbiIsImgzIiwiaHJlZiIsImEiLCJoNSIsInVzZXIiLCJuYW1lIiwiZW1haWwiLCJidXR0b24iLCJzZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJjb25zdHNlc3Npb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});