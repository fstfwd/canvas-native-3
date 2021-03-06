'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _xregexp = require('../../vendor/xregexp');

var _xregexp2 = _interopRequireDefault(_xregexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A line representing a URL that will be referenced and linked elsewhere in the
 * document
 *
 * @class LinkDefinition
 * @extends Type
 */

var LinkDefinition = function (_Type) {
  _inherits(LinkDefinition, _Type);

  function LinkDefinition() {
    _classCallCheck(this, LinkDefinition);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LinkDefinition).apply(this, arguments));
  }

  _createClass(LinkDefinition, [{
    key: 'toMarkdown',
    value: function toMarkdown(prev, next) {
      var markdown = '[' + this.meta.id + ']: ' + this.meta.url;

      if (this.meta.title) {
        markdown += ' "' + this.meta.title + '"';
      }

      return markdown + (next ? '\n' : '');
    }

    /**
     * @static
     * @see Type.markdownPattern
     */

  }, {
    key: 'isSummarized',
    get: function get() {
      return false;
    }
  }], [{
    key: 'markdownPattern',
    get: function get() {
      return (0, _xregexp2.default)('^\n      \\[(?<meta_id>\\S+)\\]:\\s+\n      (?<meta_url>[\\S]+)\n      (?:\\s+"(?<meta_title>[^"]+)")?', 'x');
    }

    /**
     * @static
     * @see Type.type
     */

  }, {
    key: 'type',
    get: function get() {
      return 'link-definition';
    }
  }]);

  return LinkDefinition;
}(_type2.default);

exports.default = LinkDefinition;