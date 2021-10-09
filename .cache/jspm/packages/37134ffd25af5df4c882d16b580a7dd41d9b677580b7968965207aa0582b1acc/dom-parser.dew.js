import { dew as _saxDewDew } from "./sax.dew.js";
import { dew as _domDewDew } from "./dom.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function DOMParser(options) {
    (this || _global).options = options || {
      locator: {}
    };
  }

  DOMParser.prototype.parseFromString = function (source, mimeType) {
    var options = (this || _global).options;
    var sax = new XMLReader();
    var domBuilder = options.domBuilder || new DOMHandler(); //contentHandler and LexicalHandler

    var errorHandler = options.errorHandler;
    var locator = options.locator;
    var defaultNSMap = options.xmlns || {};
    var entityMap = {
      'lt': '<',
      'gt': '>',
      'amp': '&',
      'quot': '"',
      'apos': "'"
    };

    if (locator) {
      domBuilder.setDocumentLocator(locator);
    }

    sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
    sax.domBuilder = options.domBuilder || domBuilder;

    if (/\/x?html?$/.test(mimeType)) {
      entityMap.nbsp = '\xa0';
      entityMap.copy = '\xa9';
      defaultNSMap[''] = 'http://www.w3.org/1999/xhtml';
    }

    defaultNSMap.xml = defaultNSMap.xml || 'http://www.w3.org/XML/1998/namespace';

    if (source) {
      sax.parse(source, defaultNSMap, entityMap);
    } else {
      sax.errorHandler.error("invalid doc source");
    }

    return domBuilder.doc;
  };

  function buildErrorHandler(errorImpl, domBuilder, locator) {
    if (!errorImpl) {
      if (domBuilder instanceof DOMHandler) {
        return domBuilder;
      }

      errorImpl = domBuilder;
    }

    var errorHandler = {};
    var isCallback = errorImpl instanceof Function;
    locator = locator || {};

    function build(key) {
      var fn = errorImpl[key];

      if (!fn && isCallback) {
        fn = errorImpl.length == 2 ? function (msg) {
          errorImpl(key, msg);
        } : errorImpl;
      }

      errorHandler[key] = fn && function (msg) {
        fn('[xmldom ' + key + ']\t' + msg + _locator(locator));
      } || function () {};
    }

    build('warning');
    build('error');
    build('fatalError');
    return errorHandler;
  } //console.log('#\n\n\n\n\n\n\n####')

  /**
   * +ContentHandler+ErrorHandler
   * +LexicalHandler+EntityResolver2
   * -DeclHandler-DTDHandler 
   * 
   * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
   * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
   * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
   */


  function DOMHandler() {
    (this || _global).cdata = false;
  }

  function position(locator, node) {
    node.lineNumber = locator.lineNumber;
    node.columnNumber = locator.columnNumber;
  }
  /**
   * @see org.xml.sax.ContentHandler#startDocument
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
   */


  DOMHandler.prototype = {
    startDocument: function () {
      (this || _global).doc = new DOMImplementation().createDocument(null, null, null);

      if ((this || _global).locator) {
        (this || _global).doc.documentURI = (this || _global).locator.systemId;
      }
    },
    startElement: function (namespaceURI, localName, qName, attrs) {
      var doc = (this || _global).doc;
      var el = doc.createElementNS(namespaceURI, qName || localName);
      var len = attrs.length;
      appendElement(this || _global, el);
      (this || _global).currentElement = el;
      (this || _global).locator && position((this || _global).locator, el);

      for (var i = 0; i < len; i++) {
        var namespaceURI = attrs.getURI(i);
        var value = attrs.getValue(i);
        var qName = attrs.getQName(i);
        var attr = doc.createAttributeNS(namespaceURI, qName);
        (this || _global).locator && position(attrs.getLocator(i), attr);
        attr.value = attr.nodeValue = value;
        el.setAttributeNode(attr);
      }
    },
    endElement: function (namespaceURI, localName, qName) {
      var current = (this || _global).currentElement;
      var tagName = current.tagName;
      (this || _global).currentElement = current.parentNode;
    },
    startPrefixMapping: function (prefix, uri) {},
    endPrefixMapping: function (prefix) {},
    processingInstruction: function (target, data) {
      var ins = (this || _global).doc.createProcessingInstruction(target, data);

      (this || _global).locator && position((this || _global).locator, ins);
      appendElement(this || _global, ins);
    },
    ignorableWhitespace: function (ch, start, length) {},
    characters: function (chars, start, length) {
      chars = _toString.apply(this || _global, arguments); //console.log(chars)

      if (chars) {
        if ((this || _global).cdata) {
          var charNode = (this || _global).doc.createCDATASection(chars);
        } else {
          var charNode = (this || _global).doc.createTextNode(chars);
        }

        if ((this || _global).currentElement) {
          (this || _global).currentElement.appendChild(charNode);
        } else if (/^\s*$/.test(chars)) {
          (this || _global).doc.appendChild(charNode); //process xml

        }

        (this || _global).locator && position((this || _global).locator, charNode);
      }
    },
    skippedEntity: function (name) {},
    endDocument: function () {
      (this || _global).doc.normalize();
    },
    setDocumentLocator: function (locator) {
      if ((this || _global).locator = locator) {
        // && !('lineNumber' in locator)){
        locator.lineNumber = 0;
      }
    },
    //LexicalHandler
    comment: function (chars, start, length) {
      chars = _toString.apply(this || _global, arguments);

      var comm = (this || _global).doc.createComment(chars);

      (this || _global).locator && position((this || _global).locator, comm);
      appendElement(this || _global, comm);
    },
    startCDATA: function () {
      //used in characters() methods
      (this || _global).cdata = true;
    },
    endCDATA: function () {
      (this || _global).cdata = false;
    },
    startDTD: function (name, publicId, systemId) {
      var impl = (this || _global).doc.implementation;

      if (impl && impl.createDocumentType) {
        var dt = impl.createDocumentType(name, publicId, systemId);
        (this || _global).locator && position((this || _global).locator, dt);
        appendElement(this || _global, dt);
      }
    },

    /**
     * @see org.xml.sax.ErrorHandler
     * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
     */
    warning: function (error) {
      console.warn('[xmldom warning]\t' + error, _locator((this || _global).locator));
    },
    error: function (error) {
      console.error('[xmldom error]\t' + error, _locator((this || _global).locator));
    },
    fatalError: function (error) {
      console.error('[xmldom fatalError]\t' + error, _locator((this || _global).locator));
      throw error;
    }
  };

  function _locator(l) {
    if (l) {
      return '\n@' + (l.systemId || '') + '#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
    }
  }

  function _toString(chars, start, length) {
    if (typeof chars == 'string') {
      return chars.substr(start, length);
    } else {
      //java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
      if (chars.length >= start + length || start) {
        return new java.lang.String(chars, start, length) + '';
      }

      return chars;
    }
  }
  /*
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
   * used method of org.xml.sax.ext.LexicalHandler:
   *  #comment(chars, start, length)
   *  #startCDATA()
   *  #endCDATA()
   *  #startDTD(name, publicId, systemId)
   *
   *
   * IGNORED method of org.xml.sax.ext.LexicalHandler:
   *  #endDTD()
   *  #startEntity(name)
   *  #endEntity(name)
   *
   *
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
   * IGNORED method of org.xml.sax.ext.DeclHandler
   * 	#attributeDecl(eName, aName, type, mode, value)
   *  #elementDecl(name, model)
   *  #externalEntityDecl(name, publicId, systemId)
   *  #internalEntityDecl(name, value)
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
   * IGNORED method of org.xml.sax.EntityResolver2
   *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
   *  #resolveEntity(publicId, systemId)
   *  #getExternalSubset(name, baseURI)
   * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
   * IGNORED method of org.xml.sax.DTDHandler
   *  #notationDecl(name, publicId, systemId) {};
   *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
   */


  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (key) {
    DOMHandler.prototype[key] = function () {
      return null;
    };
  });
  /* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */

  function appendElement(hander, node) {
    if (!hander.currentElement) {
      hander.doc.appendChild(node);
    } else {
      hander.currentElement.appendChild(node);
    }
  } //appendChild and setAttributeNS are preformance key
  //if(typeof require == 'function'){


  var XMLReader = _saxDewDew().XMLReader;

  var DOMImplementation = exports.DOMImplementation = _domDewDew().DOMImplementation;

  exports.XMLSerializer = _domDewDew().XMLSerializer;
  exports.DOMParser = DOMParser; //}

  return exports;
}