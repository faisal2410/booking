"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"Provider\": () => (/* binding */ Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n// import\n\n// reducer\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case 'LOGIN':\n            return {\n                ...state,\n                user: action.payload\n            };\n        case 'LOGOUT':\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n};\n// initial state\nconst initialState = {\n    user: null\n};\n// create context\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\n// create Provider\nconst Provider = ({ children  })=>{\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\next\\\\ryan dhungel\\\\registration-system\\\\client\\\\context\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 12\n    }, undefined));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxFQUFTO0FBQ3NDO0FBRS9DLEVBQVU7QUFFVixLQUFLLENBQUNFLE9BQU8sSUFBRUMsS0FBSyxFQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUMzQixNQUFNLENBQUNBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNkLElBQUksQ0FBQyxDQUFPO1lBQ1IsTUFBTSxDQUFDLENBQUM7bUJBQUdGLEtBQUs7Z0JBQUVHLElBQUksRUFBQ0YsTUFBTSxDQUFDRyxPQUFPO1lBQUEsQ0FBQztRQUMxQyxJQUFJLENBQUMsQ0FBUTtZQUNULE1BQU0sQ0FBQyxDQUFDO21CQUFHSixLQUFLO2dCQUFFRyxJQUFJLEVBQUMsSUFBSTtZQUFBLENBQUM7O1lBRTVCLE1BQU0sQ0FBQ0gsS0FBSzs7QUFHeEIsQ0FBQztBQUVELEVBQWdCO0FBQ2hCLEtBQUssQ0FBQ0ssWUFBWSxHQUFDLENBQUM7SUFDaEJGLElBQUksRUFBQyxJQUFJO0FBQ2IsQ0FBQztBQUVELEVBQWlCO0FBQ2pCLEtBQUssQ0FBQ0csT0FBTyxpQkFBRVQsb0RBQWEsQ0FBQyxDQUFDLENBQUM7QUFFL0IsRUFBa0I7QUFDbEIsS0FBSyxDQUFDVSxRQUFRLElBQUcsQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFDLEdBQUcsQ0FBQztJQUMzQixLQUFLLE1BQUVSLEtBQUssTUFBRVMsUUFBUSxNQUFFWCxpREFBVSxDQUFDQyxPQUFPLEVBQUVNLFlBQVk7SUFDeEQsS0FBSyxDQUFDSyxLQUFLLEdBQUMsQ0FBQ1Y7UUFBQUEsS0FBSztRQUFFUyxRQUFRO0lBQUEsQ0FBQztJQUM3QixNQUFNLDZFQUFFSCxPQUFPLENBQUNDLFFBQVE7UUFBQ0csS0FBSyxFQUFHQSxLQUFLO2tCQUFHRixRQUFROzs7Ozs7QUFDckQsQ0FBQztBQUV3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRcclxuaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyByZWR1Y2VyXHJcblxyXG5jb25zdCByZWR1Y2VyPShzdGF0ZSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ0xPR0lOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcjphY3Rpb24ucGF5bG9hZH1cclxuICAgICAgICBjYXNlICdMT0dPVVQnOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB1c2VyOm51bGx9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gaW5pdGlhbCBzdGF0ZVxyXG5jb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgdXNlcjpudWxsXHJcbn1cclxuXHJcbi8vIGNyZWF0ZSBjb250ZXh0XHJcbmNvbnN0IENvbnRleHQgPWNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG4vLyBjcmVhdGUgUHJvdmlkZXJcclxuY29uc3QgUHJvdmlkZXIgPSh7Y2hpbGRyZW59KT0+e1xyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF09dXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gICAgY29uc3QgdmFsdWU9e3N0YXRlLCBkaXNwYXRjaH1cclxuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZSA9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQge0NvbnRleHQsIFByb3ZpZGVyfTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidXNlciIsInBheWxvYWQiLCJpbml0aWFsU3RhdGUiLCJDb250ZXh0IiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ()=>{\n    const { state  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Home Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\next\\\\ryan dhungel\\\\registration-system\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            JSON.stringify(state),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\next\\\\ryan dhungel\\\\registration-system\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ0Y7QUFDaEMsS0FBSyxDQUFDRSxJQUFJLE9BQUssQ0FBQztJQUVaLEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxLQUFLLEdBQUMsR0FBQ0YsaURBQVUsQ0FBQ0QsNkNBQU87SUFDaEMsTUFBTSw2RUFDREksQ0FBRzs7d0ZBQ0NDLENBQUU7MEJBQUUsQ0FBUzs7Ozs7O1lBQ2JDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixLQUFLO1lBQUUsQ0FDM0I7Ozs7Ozs7QUFFUixDQUFDO0FBRUQsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0JztcclxuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IEhvbWU9KCk9PntcclxuXHJcbiAgICBjb25zdCB7c3RhdGV9PXVzZUNvbnRleHQoQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiA+SG9tZSBQYWdlPC9oMj5cclxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0YXRlKX07XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSG9tZSIsInN0YXRlIiwiZGl2IiwiaDIiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();