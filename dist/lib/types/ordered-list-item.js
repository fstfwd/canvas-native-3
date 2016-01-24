'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listItem = require('./list-item');

var _listItem2 = _interopRequireDefault(_listItem);

var _xregexp = require('xregexp');

var _xregexp2 = _interopRequireDefault(_xregexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A line representing an item in an ordered list
 *
 * @class OrderedListItem
 * @extends ListItem
 */

var OrderedListItem = function (_ListItem) {
  _inherits(OrderedListItem, _ListItem);

  function OrderedListItem() {
    _classCallCheck(this, OrderedListItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(OrderedListItem).apply(this, arguments));
  }

  _createClass(OrderedListItem, [{
    key: 'buildMarkdownDelimiter',
    value: function buildMarkdownDelimiter(_ref) {
      var groupIndex = _ref.groupIndex;

      return groupIndex + 1 + '.';
    }

    /**
     * @static
     * @see Type.markdownPattern
     */

  }], [{
    key: 'markdownPattern',
    get: function get() {
      return (0, _xregexp2.default)('^(?<meta_whitespace> *)\\d+\\. (?<content>.*)$');
    }

    /**
     * @static
     * @see Type.type
     */

  }, {
    key: 'type',
    get: function get() {
      return 'ordered-list-item';
    }
  }]);

  return OrderedListItem;
}(_listItem2.default);

exports.default = OrderedListItem;