"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_Css=require("../../hoc/Css"),_Css2=_interopRequireDefault(_Css),_notification=require("./notification.css"),_notification2=_interopRequireDefault(_notification),propTypes={type:_react.PropTypes.oneOf(["success","info","error"]),children:_react.PropTypes.node},defaultProps={type:"info"},Notification=function(e){var t=e.type,i=e.children;return _react2.default.createElement("div",{styleName:"notification "+t},_react2.default.createElement("div",{styleName:"icon"},"icon"),_react2.default.createElement("span",{styleName:"content"},i))};Notification.defaultProps=defaultProps,Notification.propTypes=propTypes,exports.default=(0,_Css2.default)(Notification,_notification2.default);