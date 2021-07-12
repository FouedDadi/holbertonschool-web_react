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
  html: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.getLatestNotification)()
}];

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.code === 72) {
          alert('Logging you out');
          this.props.logOut();
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'h') {
          alert('Logging you out');
          this.props.logOut();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var listNotifications = this.listNotifications;
      var isLoggedIn = this.props.isLoggedIn;
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
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  logOut: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};
App.defaultProps = {
  isLoggedIn: true,
  logOut: function logOut() {
    return void 0;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0767dd32889f5723cd98")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbImxpc3RDb3Vyc2VzIiwiaWQiLCJuYW1lIiwiY3JlZGl0IiwibGlzdE5vdGlmaWNhdGlvbnMiLCJ0eXBlIiwidmFsdWUiLCJodG1sIiwiZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIiwiQXBwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdHJsS2V5IiwiY29kZSIsImFsZXJ0IiwicHJvcHMiLCJsb2dPdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5IiwiaXNMb2dnZWRJbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsS0FBZjtBQUFzQkMsUUFBTSxFQUFFO0FBQTlCLENBRGtCLEVBRWxCO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxRQUFNLEVBQUU7QUFBbEMsQ0FGa0IsRUFHbEI7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLE9BQWY7QUFBd0JDLFFBQU0sRUFBRTtBQUFoQyxDQUhrQixDQUFwQjtBQUtBLElBQU1DLGlCQUFpQixHQUFHLENBQ3hCO0FBQUVILElBQUUsRUFBRSxDQUFOO0FBQVNJLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxPQUFLLEVBQUU7QUFBakMsQ0FEd0IsRUFFeEI7QUFBRUwsSUFBRSxFQUFFLENBQU47QUFBU0ksTUFBSSxFQUFFLFFBQWY7QUFBeUJDLE9BQUssRUFBRTtBQUFoQyxDQUZ3QixFQUd4QjtBQUFFTCxJQUFFLEVBQUUsQ0FBTjtBQUFTSSxNQUFJLEVBQUUsUUFBZjtBQUF5QkUsTUFBSSxFQUFFQyxtRUFBcUI7QUFBcEQsQ0FId0IsQ0FBMUI7O0lBS01DLEc7Ozs7Ozs7Ozs7Ozs7V0FDSiw2QkFBb0I7QUFDbEJDLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBVUMsS0FBVixFQUFpQjtBQUNwRCxZQUFJQSxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQUssQ0FBQ0UsSUFBTixLQUFlLEVBQXBDLEVBQXdDO0FBQ3RDQyxlQUFLLENBQUMsaUJBQUQsQ0FBTDtBQUNBLGVBQUtDLEtBQUwsQ0FBV0MsTUFBWDtBQUNEO0FBQ0YsT0FMRDtBQU1EOzs7V0FFRCxnQ0FBdUI7QUFDckJQLGNBQVEsQ0FBQ1EsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsVUFBVU4sS0FBVixFQUFpQjtBQUN2RCxZQUFJQSxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQUssQ0FBQ08sR0FBTixLQUFjLEdBQW5DLEVBQXdDO0FBQ3RDSixlQUFLLENBQUMsaUJBQUQsQ0FBTDtBQUNBLGVBQUtDLEtBQUwsQ0FBV0MsTUFBWDtBQUNEO0FBQ0YsT0FMRDtBQU1EOzs7V0FDRCxrQkFBUztBQUNQLFVBQU1iLGlCQUFpQixHQUFHLEtBQUtBLGlCQUEvQjtBQUNBLFVBQVFnQixVQUFSLEdBQXVCLEtBQUtKLEtBQTVCLENBQVFJLFVBQVI7QUFDQSwwQkFDRSxpSEFDRSxpREFBQyxpRUFBRDtBQUFlLHlCQUFpQixFQUFFaEI7QUFBbEMsUUFERixlQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLGlEQUFDLG1EQUFELE9BREYsZUFFRSw0REFGRixFQUdHZ0IsVUFBVSxnQkFBRyxpREFBQywyREFBRDtBQUFZLG1CQUFXLEVBQUVwQjtBQUF6QixRQUFILGdCQUE4QyxpREFBQyxpREFBRCxPQUgzRCxlQUlFLDREQUpGLGVBS0UsaURBQUMsbURBQUQsT0FMRixDQUZGLENBREY7QUFZRDs7OztFQWpDZXFCLDRDOztBQW9DbEJaLEdBQUcsQ0FBQ2EsU0FBSixHQUFnQjtBQUNkRixZQUFVLEVBQUVHLHdEQURFO0FBRWROLFFBQU0sRUFBRU0sd0RBQWNDO0FBRlIsQ0FBaEI7QUFLQWYsR0FBRyxDQUFDZ0IsWUFBSixHQUFtQjtBQUNqQkwsWUFBVSxFQUFFLElBREs7QUFFakJILFFBQU0sRUFBRTtBQUFBLFdBQU0sS0FBSyxDQUFYO0FBQUE7QUFGUyxDQUFuQjtBQUtBLGlFQUFlUixHQUFmLEU7Ozs7Ozs7Ozs7VUNsRUEsc0QiLCJmaWxlIjoibWFpbi45N2ZjMWMzODJjM2VlNWU0YmUzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vQXBwL0FwcC5jc3MnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbi9Mb2dpbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBDb3Vyc2VMaXN0IGZyb20gJy4uL0NvdXJzZUxpc3QvQ291cnNlTGlzdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG5jb25zdCBsaXN0Q291cnNlcyA9IFtcbiAgeyBpZDogMSwgbmFtZTogJ0VTNicsIGNyZWRpdDogNjAgfSxcbiAgeyBpZDogMiwgbmFtZTogJ1dlYnBhY2snLCBjcmVkaXQ6IDIwIH0sXG4gIHsgaWQ6IDMsIG5hbWU6ICdSZWFjdCcsIGNyZWRpdDogNDAgfSxcbl07XG5jb25zdCBsaXN0Tm90aWZpY2F0aW9ucyA9IFtcbiAgeyBpZDogMSwgdHlwZTogJ2RlZmF1bHQnLCB2YWx1ZTogJ05ldyBjb3Vyc2UgYXZhaWxhYmxlJyB9LFxuICB7IGlkOiAyLCB0eXBlOiAndXJnZW50JywgdmFsdWU6ICdOZXcgcmVzdW1lIGF2YWlsYWJsZScgfSxcbiAgeyBpZDogMywgdHlwZTogJ3VyZ2VudCcsIGh0bWw6IGdldExhdGVzdE5vdGlmaWNhdGlvbigpIH0sXG5dO1xuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgZXZlbnQuY29kZSA9PT0gNzIpIHtcbiAgICAgICAgYWxlcnQoJ0xvZ2dpbmcgeW91IG91dCcpO1xuICAgICAgICB0aGlzLnByb3BzLmxvZ091dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgZXZlbnQua2V5ID09PSAnaCcpIHtcbiAgICAgICAgYWxlcnQoJ0xvZ2dpbmcgeW91IG91dCcpO1xuICAgICAgICB0aGlzLnByb3BzLmxvZ091dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaXN0Tm90aWZpY2F0aW9ucyA9IHRoaXMubGlzdE5vdGlmaWNhdGlvbnM7XG4gICAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Tm90aWZpY2F0aW9ucyBsaXN0Tm90aWZpY2F0aW9ucz17bGlzdE5vdGlmaWNhdGlvbnN9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IDxDb3Vyc2VMaXN0IGxpc3RDb3Vyc2VzPXtsaXN0Q291cnNlc30gLz4gOiA8TG9naW4gLz59XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxvZ091dDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5BcHAuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiB0cnVlLFxuICBsb2dPdXQ6ICgpID0+IHZvaWQgMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA3NjdkZDMyODg5ZjU3MjNjZDk4XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==