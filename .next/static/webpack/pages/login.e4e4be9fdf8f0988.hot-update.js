"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./lib/validate.js":
/*!*************************!*\
  !*** ./lib/validate.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ login_validate; },\n/* harmony export */   \"registerValidate\": function() { return /* binding */ registerValidate; }\n/* harmony export */ });\nfunction login_validate(values) {\n    var errors = {};\n    if (!values.email) {\n        errors.email = \"Required\";\n    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(values.email)) {\n        errors.email = \"Invalid email address\";\n    }\n    //Validation for password\n    if (!values.password) {\n        errors.password = \"Required\";\n    } else if (!values.password.length < 8 || !values.password.length > 20) {\n        errors.password = \"Must be greater than 8 and less than 20 characters\";\n    } else if (!values.password.includes(\"\")) {\n        errors.password = \"Invalid password\";\n    }\n    return errors;\n};\nfunction registerValidate(values) {\n    var errors = {};\n    if (!values.username) {\n        errors.username = \"Required\";\n    } else if (values.username.includes(\"\")) {\n        errors.username = \"Invalid username..\";\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdmFsaWRhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZSxTQUFTQSxjQUFjLENBQUNDLE1BQU0sRUFBRTtJQUMzQyxJQUFNQyxNQUFNLEdBQUcsRUFBRTtJQUVqQixJQUFJLENBQUNELE1BQU0sQ0FBQ0UsS0FBSyxFQUFFO1FBQ2ZELE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLFVBQVUsQ0FBQztLQUM3QixNQUFNLElBQUksQ0FBQyw0Q0FBNENDLElBQUksQ0FBQ0gsTUFBTSxDQUFDRSxLQUFLLENBQUMsRUFBRTtRQUN4RUQsTUFBTSxDQUFDQyxLQUFLLEdBQUcsdUJBQXVCLENBQUM7S0FDMUM7SUFFRCx5QkFBeUI7SUFDekIsSUFBSSxDQUFDRixNQUFNLENBQUNJLFFBQVEsRUFBRTtRQUNsQkgsTUFBTSxDQUFDRyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQ2hDLE1BQU0sSUFBSSxDQUFDSixNQUFNLENBQUNJLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDTCxNQUFNLENBQUNJLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsRUFBRTtRQUNwRUosTUFBTSxDQUFDRyxRQUFRLEdBQUcsb0RBQW9EO0tBQ3pFLE1BQU0sSUFBSSxDQUFDSixNQUFNLENBQUNJLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3hDTCxNQUFNLENBQUNHLFFBQVEsR0FBRyxrQkFBa0I7S0FDckM7SUFFRCxPQUFPSCxNQUFNLENBQUM7Q0FDakI7QUFFTSxTQUFTTSxnQkFBZ0IsQ0FBQ1AsTUFBTSxFQUFDO0lBQ3RDLElBQU1DLE1BQU0sR0FBRyxFQUFFO0lBRWpCLElBQUcsQ0FBQ0QsTUFBTSxDQUFDUSxRQUFRLEVBQUM7UUFDbEJQLE1BQU0sQ0FBQ08sUUFBUSxHQUFHLFVBQVUsQ0FBQztLQUM5QixNQUNJLElBQUdSLE1BQU0sQ0FBQ1EsUUFBUSxDQUFDRixRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUM7UUFDbkNMLE1BQU0sQ0FBQ08sUUFBUSxHQUFHLG9CQUFvQjtLQUN2QztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi92YWxpZGF0ZS5qcz8wMDkwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luX3ZhbGlkYXRlKHZhbHVlcykge1xuICAgIGNvbnN0IGVycm9ycyA9IHt9XG5cbiAgICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAgICAgICBlcnJvcnMuZW1haWwgPSAnUmVxdWlyZWQnO1xuICAgIH0gZWxzZSBpZiAoIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWVzLmVtYWlsKSkge1xuICAgICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJztcbiAgICB9XG5cbiAgICAvL1ZhbGlkYXRpb24gZm9yIHBhc3N3b3JkXG4gICAgaWYgKCF2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gJ1JlcXVpcmVkJztcbiAgICB9IGVsc2UgaWYgKCF2YWx1ZXMucGFzc3dvcmQubGVuZ3RoIDwgOCB8fCAhdmFsdWVzLnBhc3N3b3JkLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgIGVycm9ycy5wYXNzd29yZCA9IFwiTXVzdCBiZSBncmVhdGVyIHRoYW4gOCBhbmQgbGVzcyB0aGFuIDIwIGNoYXJhY3RlcnNcIlxuICAgIH0gZWxzZSBpZiAoIXZhbHVlcy5wYXNzd29yZC5pbmNsdWRlcyhcIlwiKSkge1xuICAgICAgZXJyb3JzLnBhc3N3b3JkID0gXCJJbnZhbGlkIHBhc3N3b3JkXCJcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZGF0ZSh2YWx1ZXMpe1xuICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICBpZighdmFsdWVzLnVzZXJuYW1lKXtcbiAgICBlcnJvcnMudXNlcm5hbWUgPSAnUmVxdWlyZWQnO1xuICB9XG4gIGVsc2UgaWYodmFsdWVzLnVzZXJuYW1lLmluY2x1ZGVzKFwiXCIpKXtcbiAgICBlcnJvcnMudXNlcm5hbWUgPSBcIkludmFsaWQgdXNlcm5hbWUuLlwiXG4gIH1cbn0iXSwibmFtZXMiOlsibG9naW5fdmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJlbWFpbCIsInRlc3QiLCJwYXNzd29yZCIsImxlbmd0aCIsImluY2x1ZGVzIiwicmVnaXN0ZXJWYWxpZGF0ZSIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/validate.js\n"));

/***/ })

});