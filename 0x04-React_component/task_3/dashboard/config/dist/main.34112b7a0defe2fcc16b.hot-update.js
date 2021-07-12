self["webpackHotUpdatedashboard"]("main",{

/***/ "./src/App/App.js":
/*!************************!*\
  !*** ./src/App/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _App_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App/App.css */ "./src/App/App.css");
/* harmony import */ var _Notifications_Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notifications/Notifications */ "./src/Notifications/Notifications.js");
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Login/Login */ "./src/Login/Login.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer/Footer */ "./src/Footer/Footer.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header/Header */ "./src/Header/Header.js");
/* harmony import */ var _CourseList_CourseList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CourseList/CourseList */ "./src/CourseList/CourseList.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var listCourses = [{
  id: 1,
  name: 'ES6',
  credit: 60
}, {
  id: 2,
  name: 'Webpack',
  credit: 20
}, {
  id: 3,
  name: 'React',
  credit: 40
}];
var listNotifications = [{
  id: 1,
  type: 'default',
  value: 'New course available'
}, {
  id: 2,
  type: 'urgent',
  value: 'New resume available'
}, {
  id: 3,
  type: 'urgent',
  html: htmlObj
}];

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var listNotifications = this.listNotifications.listNotifications;
      var isLoggedIn = this.props.isLoggedIn.isLoggedIn;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Notifications_Notifications__WEBPACK_IMPORTED_MODULE_2__.default, {
        listNotifications: listNotifications
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "App"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CourseList_CourseList__WEBPACK_IMPORTED_MODULE_6__.default, {
        listCourses: listCourses
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__.default, null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

App.propTypes = {
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
App.defaultProps = {
  isLoggedIn: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("42b20f56c2903b9c339f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbImxpc3RDb3Vyc2VzIiwiaWQiLCJuYW1lIiwiY3JlZGl0IiwibGlzdE5vdGlmaWNhdGlvbnMiLCJ0eXBlIiwidmFsdWUiLCJodG1sIiwiaHRtbE9iaiIsIkFwcCIsImlzTG9nZ2VkSW4iLCJwcm9wcyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsS0FBZjtBQUFzQkMsUUFBTSxFQUFFO0FBQTlCLENBRGtCLEVBRWxCO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxRQUFNLEVBQUU7QUFBbEMsQ0FGa0IsRUFHbEI7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLE9BQWY7QUFBd0JDLFFBQU0sRUFBRTtBQUFoQyxDQUhrQixDQUFwQjtBQUtBLElBQU1DLGlCQUFpQixHQUFHLENBQ3hCO0FBQUVILElBQUUsRUFBRSxDQUFOO0FBQVNJLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxPQUFLLEVBQUU7QUFBakMsQ0FEd0IsRUFFeEI7QUFBRUwsSUFBRSxFQUFFLENBQU47QUFBU0ksTUFBSSxFQUFFLFFBQWY7QUFBeUJDLE9BQUssRUFBRTtBQUFoQyxDQUZ3QixFQUd4QjtBQUFFTCxJQUFFLEVBQUUsQ0FBTjtBQUFTSSxNQUFJLEVBQUUsUUFBZjtBQUF5QkUsTUFBSSxFQUFFQztBQUEvQixDQUh3QixDQUExQjs7SUFLTUMsRzs7Ozs7Ozs7Ozs7OztXQUNKLGtCQUFTO0FBQ1AsVUFBUUwsaUJBQVIsR0FBOEIsS0FBS0EsaUJBQW5DLENBQVFBLGlCQUFSO0FBQ0EsVUFBUU0sVUFBUixHQUF1QixLQUFLQyxLQUFMLENBQVdELFVBQWxDLENBQVFBLFVBQVI7QUFDQSwwQkFDRSxpSEFDRSxpREFBQyxpRUFBRDtBQUFlLHlCQUFpQixFQUFFTjtBQUFsQyxRQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0UsaURBQUMsbURBQUQsT0FERixlQUVFLDREQUZGLEVBR0dNLFVBQVUsZ0JBQUcsaURBQUMsMkRBQUQ7QUFBWSxtQkFBVyxFQUFFVjtBQUF6QixRQUFILGdCQUE4QyxpREFBQyxpREFBRCxPQUgzRCxlQUlFLDREQUpGLGVBS0UsaURBQUMsbURBQUQsT0FMRixDQUZGLENBREY7QUFZRDs7OztFQWhCZVksNEM7O0FBbUJsQkgsR0FBRyxDQUFDSSxTQUFKLEdBQWdCO0FBQ2RILFlBQVUsRUFBRUksd0RBQWNDO0FBRFosQ0FBaEI7QUFJQU4sR0FBRyxDQUFDTyxZQUFKLEdBQW1CO0FBQ2pCTixZQUFVLEVBQUU7QUFESyxDQUFuQjtBQUlBLGlFQUFlRCxHQUFmLEU7Ozs7Ozs7Ozs7VUMvQ0Esc0QiLCJmaWxlIjoibWFpbi4zNDExMmI3YTBkZWZlMmZjYzE2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vQXBwL0FwcC5jc3MnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbi9Mb2dpbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBDb3Vyc2VMaXN0IGZyb20gJy4uL0NvdXJzZUxpc3QvQ291cnNlTGlzdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG5jb25zdCBsaXN0Q291cnNlcyA9IFtcbiAgeyBpZDogMSwgbmFtZTogJ0VTNicsIGNyZWRpdDogNjAgfSxcbiAgeyBpZDogMiwgbmFtZTogJ1dlYnBhY2snLCBjcmVkaXQ6IDIwIH0sXG4gIHsgaWQ6IDMsIG5hbWU6ICdSZWFjdCcsIGNyZWRpdDogNDAgfSxcbl07XG5jb25zdCBsaXN0Tm90aWZpY2F0aW9ucyA9IFtcbiAgeyBpZDogMSwgdHlwZTogJ2RlZmF1bHQnLCB2YWx1ZTogJ05ldyBjb3Vyc2UgYXZhaWxhYmxlJyB9LFxuICB7IGlkOiAyLCB0eXBlOiAndXJnZW50JywgdmFsdWU6ICdOZXcgcmVzdW1lIGF2YWlsYWJsZScgfSxcbiAgeyBpZDogMywgdHlwZTogJ3VyZ2VudCcsIGh0bWw6IGh0bWxPYmogfSxcbl07XG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsaXN0Tm90aWZpY2F0aW9ucyB9ID0gdGhpcy5saXN0Tm90aWZpY2F0aW9ucztcbiAgICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHRoaXMucHJvcHMuaXNMb2dnZWRJbjtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPE5vdGlmaWNhdGlvbnMgbGlzdE5vdGlmaWNhdGlvbnM9e2xpc3ROb3RpZmljYXRpb25zfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyA8Q291cnNlTGlzdCBsaXN0Q291cnNlcz17bGlzdENvdXJzZXN9IC8+IDogPExvZ2luIC8+fVxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxufTtcblxuQXBwLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MmIyMGY1NmMyOTAzYjljMzM5ZlwiKSJdLCJzb3VyY2VSb290IjoiIn0=