(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div>\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadeosio3d/cadeosio3d.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadeosio3d/cadeosio3d.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n  <head>\r\n\r\n    <title>CADEOS.io</title>\r\n    <link rel=\"shortcut icon\" href=\"imgs/CADEOS Logo transparent background2.png\" type=\"image/x-png\">\r\n\r\n  </head>\r\n  <body>\r\n    <script src=\"dist/index.js\"></script>\r\n<!-- top left header (logo and error message) -->\r\n    <div id=\"header\">\r\n      <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"imgs/cadeosico.png\" />   CADEOS.io</a>\r\n    </div>\r\n    <p>\r\n<!-- sliding tab (help, links, examples, options, etc) -->\r\n    <div id=\"menu\">\r\n      <img id=\"menuHandle\" src=\"imgs/menuHandleVLIn.png\">\r\n      <nav>\r\n        <div id=\"menuVersion\"></div>\r\n        <p>\r\n        <table class=\"info\">\r\n          <tr><td class=\"infoView\" colspan=2>Editor</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Render Code</td><td class=\"infoKey\">F5 or SHIFT + Return</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Save To Cache</td><td class=\"infoKey\">CTRL + S</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Load From Cache</td><td class=\"infoKey\">CTRL + L</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Clear Cache</td><td class=\"infoKey\">CTRL + SHIFT + \\</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Download Code</td><td class=\"infoKey\">CTRL + SHIFT + S</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Reset View</td><td class=\"infoKey\">CRTL + Return</td></tr>\r\n          <tr><td class=\"infoView\" colspan=2>3D View</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Rotate XZ</td><td class=\"infoKey\">Left Mouse</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Pan</td><td class=\"infoKey\">Middle Mouse or SHIFT + Left Mouse</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Rotate XY</td><td class=\"infoKey\">Right Mouse or ALT + Left Mouse</td></tr>\r\n          <tr><td align=\"right\" class=\"infoOperation\">Zoom In/Out</td><td class=\"infoKey\">Wheel Mouse or CTRL + Left Mouse</td></tr>\r\n        </table>\r\n        <p>\r\n          <a class=\"navlink\" href=\"https://openjscad.org/dokuwiki/doku.php\" target=\"_blank\" rel=\"noopener\">User Guide / Documentation <img src=\"imgs/externalLink.png\" ></a>\r\n          <br/><span class=\"menuSubInfo\">How to program with OpenJSCAD: online, offline &amp; CLI</span>\r\n        </p>\r\n        <p>\r\n          <a class=\"navlink\" href=\"https://plus.google.com/communities/114958480887231067224\" rel=\"publisher\" target=\"_blank\" rel=\"noopener\">Recent Updates <img src=\"imgs/externalLink.png\"></a>\r\n          <br/><span class=\"menuSubInfo\">Announcements of recent developments</span>\r\n        </p>\r\n        <p>\r\n          <a class=\"navlink\" href=\"https://plus.google.com/communities/114958480887231067224\" target=\"_blank\" rel=\"noopener\">Google+ Community <img src=\"imgs/externalLink.png\"></a>\r\n          <br/><span class=\"menuSubInfo\">Discuss with other users &amp; developers</span>\r\n        </p>\r\n        <div id=\"examplesTitle\" class=\"navlink\"><a href='#' onclick='return false'>Examples</a></div>\r\n        <div id=\"examples\"></div>\r\n        <span class=\"menuSubInfo\">Dozens of examples to learn from</span>\r\n        <p>\r\n<!--\r\n        <div id=\"optionsTitle\" class=\"navlink\"><a href='#' onclick='return false'>Options</a></div>\r\n        <div id=\"options\"></div>\r\n        <span class=\"menuSubInfo\">Your personal settings</span></p>\r\n -->\r\n        <p>\r\n        <b>Supported Formats</b>\r\n        <table class=\"info\">\r\n          <tr><td align=\"right\"><b>jscad</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"https://openjscad.org/dokuwiki/doku.php\">OpenJSCAD</a> (native, import/export)</td></tr>\r\n          <tr><td align=\"right\"><b>scad</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"http://openscad.org\">OpenSCAD</a> (<a target=_blank href=\"https://openjscad.org/dokuwiki/doku.php\">experimental</a>, import)</td></tr>\r\n          <tr><td align=\"right\"><b>stl</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"http://en.wikipedia.org/wiki/STL_(file_format)\">STL format</a> (experimental, import/export)</td></tr>\r\n          <tr><td align=\"right\"><b>amf</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"http://en.wikipedia.org/wiki/Additive_Manufacturing_File_Format\">AMF format</a> (experimental, import/export)</td></tr>\r\n          <tr><td align=\"right\"><b>dxf</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"https://en.wikipedia.org/wiki/AutoCAD_DXF\">DXF format</a> (experimental, import/export)</td></tr>\r\n          <tr><td align=\"right\"><b>x3d</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"https://en.wikipedia.org/wiki/X3D\">X3D format</a> (experimental, export)</td></tr>\r\n          <tr><td align=\"right\"><b>svg</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"https://en.wikipedia.org/wiki/Scalable_Vector_Graphics\">SVG format</a> (experimental, import/export)</td></tr>\r\n        </table>\r\n        <p><a class=\"navlink about\" href=\"#\">About</a></p>\r\n      </nav>\r\n    </div> <!-- /menu -->\r\n\r\n<!-- about dialog -->\r\n    <div id=\"about\">\r\n      <img src=\"imgs/title.png\">\r\n      <div id=\"aboutVersion\" ></div>\r\n\r\n      <p>\r\n\r\n\r\n<p>\r\nLicense: MIT License<br>\r\nGet your copy/clone/fork from <a href=\"https://github.com/CADEOS\" target=\"_blank\" rel=\"noopener\">GitHub: CADEOS.io</a>\r\n      </p>\r\n      <p>\r\n        <br/><a class=\"okButton\" href='#'> OK </a>\r\n      </p>\r\n    </div> <!-- about -->\r\n\r\n<!-- editor -->\r\n    <div id=\"editFrame\">\r\n      <div>\r\n        <img id=\"editHandle\" src=\"imgs/editHandleIn.png\">\r\n      </div>\r\n      <div id=\"editor\">\r\n\r\n      </div>\r\n    </div> <!-- editor -->\r\n\r\n<!-- design viewer -->\r\n    <div oncontextmenu=\"return false;\" id=\"viewerContext\"></div> <!-- avoiding popup when right mouse is clicked -->\r\n\r\n<!-- design parameters -->\r\n    <div id=\"parametersdiv\"></div>\r\n    <div id=\"selectdiv\"></div>\r\n\r\n<!-- design information (status message, download buttons, drag and drop area, etc) -->\r\n    <div id=\"tail\">\r\n      <div id=\"statusdiv\"></div>\r\n      <div id=\"filedropzone\">\r\n        <div id=\"filedropzone_empty\">\r\n        </div>\r\n        <div id=\"filedropzone_input\">\r\n          <p>\r\n            <label class=\"input-control\">Add Supported Files: <input type=\"file\" id=\"files-input\" accept=\"*/*\" multiple=\"1\"></label>\r\n          </p>\r\n        </div>\r\n        <div id=\"filedropzone_filled\">\r\n          <span id=\"currentfile\">...</span>\r\n          <div id=\"filebuttons\">\r\n            <button id=\"getstlbutton\" style=\"display:none\" onclick=\"getStl();\">Get STL</button>\r\n            <button id=\"reloadAllFiles\">Reload</button>\r\n           <!--button onclick=\"parseFile(gCurrentFile,true,false);\">Debug (see below)</button-->\r\n            <label for=\"autoreload\">Auto Reload</label><input type=\"checkbox\" name=\"autoreload\" value=\"\" id=\"autoreload\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> <!-- tail -->\r\n\r\n\r\n  </body>\r\n</html>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exchanges/exchanges.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exchanges/exchanges.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron-fluid\">\r\n  <div class=\"container\">\r\n  </div>\r\n</div>\r\n\r\n<section>\r\n  <div class=\"container\">\r\n\r\n    <!--features-->\r\n    <mat-pages title=\"Trade your ADE tokens\">\r\n\r\n      <!--1-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Nedex\"></mat-page-outlook>\r\n        <mat-page-content>\r\n\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--2-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Findex\"></mat-page-outlook>\r\n        <mat-page-content>\r\n\r\n\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--3-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Token Store\"></mat-page-outlook>\r\n        <mat-page-content>\r\n\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--4-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Yolo\"></mat-page-outlook>\r\n        <mat-page-content>\r\n\r\n\r\n\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n      <!--5-->\r\n      <mat-page-loader>\r\n        <mat-page-outlook title=\"Mydex\"></mat-page-outlook>\r\n        <mat-page-content>\r\n\r\n\r\n\r\n        </mat-page-content>\r\n      </mat-page-loader>\r\n\r\n    </mat-pages>\r\n\r\n  </div>\r\n</section>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style type=\"text/css\">\r\n  /*Rules for sizing the icon*/\r\n  .material-icons.md-18 { font-size: 18px; }\r\n  .material-icons.md-24 { font-size: 24px; }\r\n  .material-icons.md-36 { font-size: 36px; }\r\n  .material-icons.md-48 { font-size: 1000%; text-shadow: -1px 0 rgb(197, 81, 252), 0 1px rgb(197, 81, 252), 1px 0 rgb(197, 81, 252), 0 -1px rgb(197, 81, 252);}\r\n\r\n  </style>\r\n\r\n\r\n<div class=\"backstretch animated\"></div>\r\n\r\n<img src=\"assets/ADE burning background.png\" class=\"\" style=\" width: 100%;\">\r\n\r\n<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"full-width-row\">\r\n      <div class=\"col-sm-2 d-flex justify-content-center justify-content-md-end content-around\">\r\n      </div>\r\n        <p class=\"buttons text-center\">\r\n          <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://github.com/CADEOS\"\r\n             target=\"_blank\" ><i class=\"fa fa-github fa-lg\" ></i> Code on Github</a>\r\n          <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://web.facebook.com/cadeos.io\" target=\"_blank\"><i\r\n            class=\"fa fa-facebook-official fa-lg\"></i> Facebook</a>\r\n            <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://twitter.com/cadeosi\" target=\"_blank\"><i\r\n              class=\"fa fa-twitter fa-lg\"></i> Twitter</a>\r\n          <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://t.me/cadeos\" target=\"_blank\"><i\r\n              class=\"fa fa-telegram fa-lg\"></i> Telegram</a>\r\n         <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://medium.com/cadeos-io\" target=\"_blank\"><i\r\n             class=\"fa fa-medium fa-lg\"></i> Medium</a>\r\n         <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" routerLink=\"/exchanges\" target=\"_blank\"><i\r\n              class=\"fa fa-bitcoin fa-lg\"></i> Exchanges</a>\r\n      </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n        <!--toolbar-->\r\n        <mat-toolbar [color]=\"color\">\r\n          <span>DECENTRALIZED CAD.FILES & PROJECT MANAGEMENT PLATFORM</span>\r\n          <span class=\"fill-remaining\"></span>\r\n          <ngx-auth-firebaseui-avatar></ngx-auth-firebaseui-avatar>\r\n        </mat-toolbar>\r\n\r\n        <div class=\"mbr-table-cell mbr-valign-center justify-content-center align-items-center text-center backstretch animated \">\r\n            <div class=\"container justify-content-center align-items-center text-center overlay1\">\r\n            <div class=\"row\"> \r\n            <div class=\"col-md-12 text-center justify-content-center align-items-center overlay1\">\r\n        </div>\r\n        \r\n        <div class=\"row col-md-12 align-items-center\" style=\"margin-top: 3%; margin-left: 6%; text-align: center;\">\r\n          \r\n\r\n        <div class=\"col-md-1 justify-content-center align-items-center overlay1\" >\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://newdex.io/trade/cadeositoken-ade-eos\" target=\"_blank\">\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/Newdex.jpg\" class=\"\" style= \" margin-bottom: 10%;  color:black; width: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <h2 class=\"padding-bottom-title text-center\"><b>Nedex</b></h2>\r\n\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://findex.pro/trade/cadeositoken_ADE-eosio.token_EOS\" target=\"_blank\">\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/Findex.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <h2 class=\"padding-bottom-title text-center\"><b>Findex</b></h2>\r\n\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://token.store/\" target=\"_blank\">\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/TokenStore.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <h2 class=\"padding-bottom-title text-center\"><b>TokenStore</b></h2>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://mydex.win/\" target=\"_blank\">\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/Mydex.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <h2 class=\"padding-bottom-title text-center\"><b>Mydex</b></h2>\r\n\r\n        </div> \r\n        <div class=\"col-md-1 align-items-center\">\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://akdex.io/trade/ADE_EOS\" target=\"_blank\">\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/Akkadex.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <h2 class=\"padding-bottom-title text-center\"><b>Akdex</b></h2>\r\n\r\n      </div> \r\n      <div class=\"col-md-1 align-items-center\">\r\n      <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://lynxwallet.io/\" target=\"_blank\">\r\n        <img srcset=\"\" alt=\"\" src=\"/assets/Lynx.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n      </a>\r\n      <h2 class=\"padding-bottom-title text-center\"><b>Lynx</b></h2>\r\n\r\n    </div> \r\n    <div class=\"col-md-1 align-items-center\">\r\n    <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://meet.one/\" target=\"_blank\">\r\n      <img srcset=\"\" alt=\"\" src=\"/assets/meet.one.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n    </a>\r\n    <h2 class=\"padding-bottom-title text-center\"><b>MEET.one</b></h2>\r\n        \r\n\r\n  </div> \r\n  <div class=\"col-md-1 align-items-center\">\r\n  <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://tokenbank.co.kr/\" target=\"_blank\">\r\n    <img srcset=\"\" alt=\"\" src=\"/assets/tokenbank.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n  </a>\r\n  <h2 class=\"padding-bottom-title text-center\"><b>TokenBank</b></h2>\r\n\r\n</div> \r\n<div class=\"col-md-1 align-items-center\">\r\n<a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"http://more.one/\" target=\"_blank\">\r\n  <img srcset=\"\" alt=\"\" src=\"/assets/moreone.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n</a>\r\n<h2 class=\"padding-bottom-title text-center\"><b>MoreOne</b></h2>\r\n\r\n</div> \r\n<div class=\"col-md-1 align-items-center\">\r\n<a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.tokenpocket.pro/\" target=\"_blank\">\r\n  <img srcset=\"\" alt=\"\" src=\"/assets/tokenpoket.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n</a>\r\n<h2 class=\"padding-bottom-title text-center\"><b>TokenPoket</b></h2>\r\n\r\n    </div>\r\n\r\n        </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n\r\n        <div class=\"mbr-table-cell mbr-valign-center content-size backstretch animated\">\r\n          <div class=\"container \">\r\n          <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n          <h1 class=\"mbr-section-title padding-top-title text-center\">\r\n          FROM YOUR IDEA TO YOUR PRODUCT\r\n          </h1>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n          <p class=\"padding-top-subtitle text-center\">\r\n            <img srcset=\"\" alt=\"\" src=\"\" class=\" fa fa-server material-icons md-48\" style= \" margin-bottom: 10%; color:black;\">\r\n          </p>\r\n          <h2 class=\"padding-bottom-title text-center\"><b>BlockChain Database</b></h2>\r\n\r\n          <h3 class=\"padding-bottom-title text-center\" style=\" padding-bottom: 20%;\">\r\n          Powered by blockchain resources\r\n          </h3>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n          <p class=\"padding-top-subtitle text-center\">\r\n            <img srcset=\"\" alt=\"\" src=\"\" class=\" fa fa-user material-icons md-48\" style= \" margin-bottom: 10%; color:black;\">\r\n          </p>\r\n          <h2 class=\"padding-bottom-title text-center\"><b>User Friendly</b></h2>\r\n\r\n          <h3 class=\"padding-bottom-title text-center\" style=\" padding-bottom: 10%;\">\r\n          Intuintive enviroment multi-tool\r\n          </h3>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n          <p class=\"padding-top-subtitle text-center\">\r\n            <img srcset=\"\" alt=\"\" src=\"\" class=\" fa fa-rocket material-icons md-48\" style= \" margin-bottom: 10%; color:black;\">\r\n          </p>\r\n          <h2 class=\"padding-bottom-title text-center\"><b>Product launcher</b></h2>\r\n          <h3 class=\"padding-bottom-title text-center\" style=\" padding-bottom: 10%;\">\r\n            Your product promotion\r\n          </h3>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n          <p class=\"padding-top-subtitle text-center\">\r\n            <img srcset=\"\" alt=\"\" src=\"\" class=\" fa fa-pie-chart material-icons md-48\" style= \" margin-bottom: 10%; color:black;\">\r\n          </p>\r\n          <h2 class=\"padding-bottom-title text-center\"><b>Economic System</b></h2>\r\n          <h3 class=\"padding-bottom-title text-center\" style=\" padding-bottom: 10%;\">\r\n          PLM Economic Workplace  \r\n          </h3>\r\n          </div>\r\n          </div>\r\n          </div>\r\n          </div>\r\n\r\n        <div>\r\n        \r\n\r\n            <div id=\"slider\" class=\"carousel slide infinite backstretch animated\" data-ride=\"carousel\" data-interval=\"3000\" data-wrap=\"true\">\r\n                <ol class=\"carousel-indicators align-items-center justify-content-center\">\r\n                    <li data-target=\"#slider\" data-slide-to=\"0\" class=\"active\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"1\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"2\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"3\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"4\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"5\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"6\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"7\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"8\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"9\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"10\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"11\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"12\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"13\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"14\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"15\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"16\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"17\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"18\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"19\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"20\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"21\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"22\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"23\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"24\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"25\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"26\"></li>\r\n                    <li data-target=\"#slider\" data-slide-to=\"27\"></li>\r\n                </ol>\r\n                <div class=\"carousel-inner\" data-ride=\"carousel\" data-interval=\"50000\" data-pause=\"hover\" data-wrap=\"false\">\r\n                    <div class=\"carousel-item\"style= \"width: 40%; margin-left: 30%;\">\r\n                        <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper1.png\" title=\"1\" alt=\"1\" href=\"#carousel\" >\r\n                    </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                        <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper2.png\" title=\"2\" alt=\"2\" href=\"#carousel\">\r\n                    </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                        <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper3.png\" title=\"3\" alt=\"3\" href=\"#carousel\" >\r\n                    </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                        <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper4.png\" title=\"4\" alt=\"4\" href=\"#carousel\" >\r\n                    </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                        <img class=\"d-block w-100 \" src=\"./assets/CADEOS - Whitepaper5.png\" title=\"5\" alt=\"5\" href=\"#carousel\" >\r\n                    </div> \r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                      <img class=\"d-block w-100 \" src=\"./assets/ADE EXCHANGES ANNOUNCE.png\" title=\"6\" alt=\"6\" href=\"#carousel\" >\r\n                  </div>\r\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/ADE Token Store.png\" title=\"6\" alt=\"6\" href=\"#carousel\" >\r\n                  </div>\r\n                  <div class=\"carousel-item active\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3 (2).png\" title=\"7\" alt=\"7\" href=\"#carousel\" >\r\n                  </div>\r\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3 - Dexeos (1).jpg\" title=\"8\" alt=\"8\" href=\"#carousel\" >\r\n                  </div>\r\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3 - FINDEX.jpg\" title=\"9\" alt=\"9\" href=\"#carousel\" >\r\n                  </div>\r\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3 - Mydex 3.jpg\" title=\"10\" alt=\"10\" href=\"#carousel\" >\r\n                  </div>\r\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3-newdex2.jpg\" title=\"11\" alt=\"11\" href=\"#carousel\" >\r\n                  </div>\r\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - EOSdaq.jpg\" title=\"12\" alt=\"12\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper1.png\" title=\"13\" alt=\"13\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper2.png\" title=\"14\" alt=\"14\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper3.png\" title=\"15\" alt=\"15\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper4.png\" title=\"16\" alt=\"16\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper5.png\" title=\"17\" alt=\"17\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper6.png\" title=\"18\" alt=\"18\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS.jpg\" title=\"19\" alt=\"19\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS2.jpg\" title=\"20\" alt=\"20\" href=\"#carousel\" >\r\n                  </div>          \r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3.jpg\" title=\"21\" alt=\"21\" href=\"#carousel\" >\r\n                  </div> \r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS4.jpg\" title=\"22\" alt=\"22\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS5.jpg\" title=\"23\" alt=\"23\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS6.jpg\" title=\"24\" alt=\"24\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS7.jpg\" title=\"25\" alt=\"25\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                     <img class=\"d-block w-100\" src=\"./assets/CADEOS8.jpg\" title=\"26\" alt=\"26\" href=\"#carousel\" >\r\n                  </div>\r\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\r\n                     <img class=\"d-block w-100\" src=\"./assets/CADEOS9.jpg\" title=\"27\" alt=\"27\" href=\"#carousel\" >\r\n                  </div>\r\n\r\n                    <a class=\"left carousel-control\" role=\"button\" data-slide=\"prev\">\r\n                        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                      </a>\r\n                      <a class=\"right carousel-control\" role=\"button\" data-slide=\"next\">\r\n                        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                      </a>\r\n                    </div>\r\n              </div>\r\n\r\n\r\n      <div class=\"backstretch animated\">\r\n         \r\n      <div class=\"container\"></div>\r\n\r\n      <div class=\"col-sm-2 d-flex justify-content-center justify-content-md-end content-around\" ></div>\r\n\r\n         <h1>ELIMINATING OBSTACLES FOR CREATORS</h1>\r\n\r\n         <h2>Today one of the biggest consttrains for entrepreneurs and creators are the expensive software licenses and, with CADEOS, we want to facilitate this process to everyone by getting rid of the problem with our decentralised software. We will make the creation process and product launch affordable and very easy within an intuitive and user friendly environment.\r\n\r\n\r\n\r\n          By tokenising all kind of projects our users can see their ideas and effort successfully implemented. Our platform would will bring an opportunity to those brilliant minds that are stopped by the market barriers.\r\n          \r\n          \r\n          \r\n          From the first sketch to the manufacture process, the users can monitor the state of your design in our Product Lifecycle Manager (PLM) platform. Factories, suppliers and all the 3rd parties interested will be able to review your Request for Quotation (RfQ) in our platform and send the manufacture price for each component.\r\n          \r\n          \r\n          \r\n          With CADEOS you can design any mechanical and electronic component with our decentralised CAD software and promote it in our Community, under the watchful eye of thousands of investors looking for the best idea.\r\n          \r\n          \r\n          \r\n          CADEOS platform will host a large gallery of components from thousands of different brands and will be responsible of providing the most extensive resources as possible for an easy product composition.\r\n          \r\n          \r\n          \r\n          By creating your portfolio of suppliers you will have the best advice and direct communication with the best professionals in any industry around the world. Each area will have their own communication channels and chatrooms.\r\n          \r\n           \r\n          \r\n          With every creation within your dynamic user profile, you will add value to all your products, 3D models, 3D printer parts, electronic schemes, etc., favouring the bids and sales which will be a success in CADEOS Platform. Your work will never be lost or forgotten and will be revaluated from time to time with our token ADE.</h2>\r\n\r\n        </div>\r\n\r\n          <div class=\"mbr-table-cell mbr-valign-center justify-content-center align-items-center text-center backstretch animated overlay1\">\r\n            <div class=\"container justify-content-center align-items-center text-center overlay1\">\r\n            <div class=\"row\"> \r\n            <div class=\"col-md-12 text-center justify-content-center align-items-center overlay1\">\r\n            <h1 class=\"mbr-section-title text-center justify-content-center align-items-center\" style=\" margin-top: 3%; margin-bottom: 3%;\">\r\n            TEAM\r\n          </h1>\r\n        </div>\r\n        <div class=\"col-md-3 justify-content-center align-items-center overlay1\">\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center overlay1\" href=\"https://www.linkedin.com/in/maria-jose-arroyo-gerez-36907991/\" target=\"_blank\" >\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/majo.jpeg\" class=\"\" href=\"https://newdex.io/trade/cadeositoken-ade-eos\" target=\"_blank\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <p class=\"padding-bottom-title text-center\"><b>Maria Jose Arroyo</b></p>\r\n\r\n        <p class=\"padding-bottom-title text-center\">\r\n        Marketing Director\r\n        </p>\r\n        </div>\r\n        <div class=\"col-md-3 \">\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/guillermo-galindo-saeta-749a2557/\" target=\"_blank\" >\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/guille.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <p class=\"padding-bottom-title text-center\"><b>Guillermo Galindo</b></p>\r\n\r\n        <p class=\"padding-bottom-title text-center justify-content-center align-items-center\">\r\n        CEO & Full Stack Developer\r\n        </p>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/jes%C3%BAs-moya-galindo-bb24861a/\" target=\"_blank\" >\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/jesus.jpeg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <p class=\"padding-bottom-title text-center\"><b>Jesus Moya</b></p>\r\n\r\n        <p class=\"padding-bottom-title text-center\">\r\n        Program Manager\r\n        </p>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/javier-saeta-hidalgo/\" target=\"_blank\" >\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/javi.jpeg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <p class=\"padding-bottom-title text-center\"><b>Javier Saeta</b></p>\r\n        <p class=\"padding-bottom-title text-center\">Junior Developer</p>\r\n        </div> \r\n\r\n        <div class=\"row col-md-12 align-items-center\" style=\" margin-left: 13%; text-align: center; margin-top: 5%; margin-bottom: 5%;\">\r\n\r\n        <div class=\"col-md-3 align-items-center\">\r\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/h%C3%A9ctor-garz%C3%B3n-6914ba69/\" target=\"_blank\" >\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/hector.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n        </a>\r\n        <p class=\"padding-bottom-title text-center\"><b>Hector Garzon</b></p>\r\n        <p class=\"padding-bottom-title text-center\">Mobile APP Developer</p> \r\n        \r\n      </div>\r\n      <div class=\"col-md-3\">\r\n      <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/dgalindosaeta/\" target=\"_blank\" >\r\n        <img srcset=\"\" alt=\"\" src=\"/assets/diego.jpeg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n      </a>\r\n      <p class=\"padding-bottom-title text-center\"><b>Diego Galindo</b></p>\r\n      <p class=\"padding-bottom-title text-center\">Advisor</p>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n    <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\"href=\"https://www.linkedin.com/in/antonio-galindo/\" target=\"_blank\"  >\r\n      <img srcset=\"\" alt=\"\" src=\"/assets/antonio.jpeg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n    </a>\r\n    <p class=\"padding-bottom-title text-center\"><b>Antonio Galindo</b></p>\r\n    <p class=\"padding-bottom-title text-center\">Business Expert</p>\r\n    </div>\r\n\r\n        </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n            <div class=\"backstretch animated\">\r\n\r\n            <h1>TOKENIZING THE WORK</h1>\r\n\r\n            <h2>CADEOS.io developing a real time processing Computer Aided Design (CAD) and a Product Lifecycle Management (PLM) platform based on EOS blockchain architecture. It provides the best real time design tools to the community, including data sharing, video calls, instant messenger and screen sharing for the best collaborative experience, showing progress of the project management work and helping to grow your network. \r\n\r\n\r\n\r\n              All this within an intuitive, user friendly and fast environment where the user can feel that they are part of the Cadeos Community, with interactive galleries and video tutorials that will help you to improve your technical knowledge as you move on in the process.\r\n              \r\n              \r\n              \r\n              With this great software and product design experience CADEOS platform will be a revolution on how the companies spend their capital, saving time and resources, unifying every daily task in this unique and secure platform.\r\n              \r\n              \r\n              \r\n              Our roadmap will start with the launch of CADEOS.io platform; then we will build a CAD. file sharing platform for each industrial sector. The Community will be able to upload their models in their own galleries, and the users will be able to download them to be used in their own designs accordingly to their needs.\r\n              \r\n              \r\n              \r\n              CADEOS.io will support the following extensions in the first release: .stp, .igs, stl.\r\n              \r\n              \r\n              \r\n              The next releases in our roadmap will be mainly focused on adding new design modules and galleries to the existing platform.\r\n              \r\n              \r\n              \r\n              As added value to the community we want to create a job network where companies will be able to post their job offers to professionals seeking job in all the areas involved such as CAD, 3D printers parts, software development, etc. Being part of this network will be free for the jobseekers creating a huge benefit to the EOS ecosystem.\r\n              \r\n              \r\n              \r\n              Companies will just have to pay a fee for the service they will use or the duration. All invoices will be linked to a smart contract associated to their corresponding wallet. Data protection and security are guaranteed by Block.one/EOS reliability.</h2>\r\n\r\n            </div>\r\n      \r\n\r\n            <div class=\"mbr-table-cell mbr-valign-center justify-content-center align-items-center text-center backstretch animated overlay1\">\r\n                <div class=\"container justify-content-center align-items-center text-center overlay1\">\r\n                <div class=\"row\"> \r\n                <div class=\"col-md-12 text-center justify-content-center align-items-center overlay1\">\r\n            <h1 class=\"mbr-section-title text-center justify-content-center align-items-center\" >\r\n                THANKS TO\r\n              </h1>\r\n            </div>\r\n\r\n            <div class=\"row col-md-12 align-items-center\" style=\" margin-left: 6%; text-align: center;\">\r\n              \r\n    \r\n            <div class=\"col-md-1 justify-content-center align-items-center overlay1\">\r\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center overlay1\">\r\n              <img srcset=\"\" alt=\"\" src=\"/assets/eosnewyork.jpeg\" class=\"\" style= \" margin-bottom: 10%;  color:black; width: 80%; border-radius: 50%;\">\r\n            </p>\r\n            <h2 class=\"padding-bottom-title text-center\"><b>EOSNewYork</b></h2>\r\n    \r\n            </div>\r\n            <div class=\"col-md-1\">\r\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\r\n              <img srcset=\"\" alt=\"\" src=\"/assets/scatter.png\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n            </p>\r\n            <h2 class=\"padding-bottom-title text-center\"><b>Scatter</b></h2>\r\n    \r\n            </div>\r\n            <div class=\"col-md-1\">\r\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\r\n              <img srcset=\"\" alt=\"\" src=\"/assets/bigone.png\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n            </p>\r\n            <h2 class=\"padding-bottom-title text-center\"><b>BigOne</b></h2>\r\n    \r\n    \r\n            </div>\r\n            <div class=\"col-md-1\">\r\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\r\n              <img srcset=\"\" alt=\"\" src=\"/assets/nebula.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\r\n            </p>\r\n            <h2 class=\"padding-bottom-title text-center\"><b>Nebula</b></h2>\r\n    \r\n            </div> \r\n            <div class=\"col-md-1 align-items-center\">\r\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\r\n              <img srcset=\"\" alt=\"\" src=\"/assets/blocks.png\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n            </p>\r\n            <h2 class=\"padding-bottom-title text-center\"><b>Bloks.io</b></h2>\r\n    \r\n          </div> \r\n          <div class=\"col-md-1 align-items-center\">\r\n          <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\r\n            <img srcset=\"\" alt=\"\" src=\"/assets/eosstudio.png\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n          </p>\r\n          <h2 class=\"padding-bottom-title text-center\"><b>EOStudio</b></h2>\r\n    \r\n        </div> \r\n        <div class=\"col-md-1 align-items-center\">\r\n        <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\r\n          <img srcset=\"\" alt=\"\" src=\"/assets/greymass.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n        </p>\r\n        <h2 class=\"padding-bottom-title text-center\"><b>Greymass</b></h2>\r\n            \r\n    \r\n      </div> \r\n      <div class=\"col-md-1 align-items-center\">\r\n      <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\r\n        <img srcset=\"\" alt=\"\" src=\"/assets/eosphere.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n      </p>\r\n      <h2 class=\"padding-bottom-title text-center\"><b>EOSphere</b></h2>\r\n    \r\n    </div> \r\n    <div class=\"col-md-1 align-items-center\">\r\n    <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\r\n      <img srcset=\"\" alt=\"\" src=\"/assets/tokenrocket.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n    </p>\r\n    <h2 class=\"padding-bottom-title text-center\"><b>TokenRocket</b></h2>\r\n    \r\n    </div> \r\n    <div class=\"col-md-1 align-items-center\">\r\n    <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\r\n      <img srcset=\"\" alt=\"\" src=\"/assets/eosindex.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\r\n    </p>\r\n    <h2 class=\"padding-bottom-title text-center\"><b>EOSindex</b></h2>\r\n    \r\n            </div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n            <div class=\"backstretch animated\" style=\"padding-bottom: 5%;\">\r\n\r\n              <h1>WHY WE CHOSE EOS BLOCKCHAIN?</h1>\r\n  \r\n              <h2>EOS poses an entirely different ideological perspective on blockchain consensus, decentralization, and how smart contracts should be executed and operated. Being a completely new platform, EOS is attempting to not make what it considers to be fundamental mistakes made by its predecessors.\r\n\r\n                EOS.IO Software\r\n                One unique feature of EOS is that it will rely on the users of the platform to make their own blockchains, rather than creating and managing a centralized chain themselves. Each blockchain running the EOS.IO Software is expected to begin its chain with an EOS ‘genesis block’. The genesis block will be a snapshot of the Ethereum blockchain taken on June 1, 2018 at 22:59:59 UTC that will record ownership of the temporary ERC-20 EOS tokens that have been distributed throughout the platform’s ICO. From this point, it is theorized that new blockchains running the EOS.IO software will compete against one another until the most popular chain becomes the main chain used on the platform.\r\n                \r\n                Token Cap\r\n                EOS is its approach to token distribution. block.one has put a one billion token cap on the release of its ERC-20 token on the platform, a significantly higher number than most other cryptocurrency platforms (e.g. Bitcoin’s cap is 21 million).\r\n                \r\n                Despite being larger than most, token caps of any size have been argued to serve as an important means of protecting token holders against inflation in ways that unlimited token cap platform’s like Ethereum do not.\r\n                \r\n                Programming Language and Dapp Development\r\n                EOS.IO aims to be a more efficient and easy-to-use platform for dapp developers than those that have come before it. To that end, EOS.IO includes support for C++ programming, which is historically one of the most popular coding languages. C++ is compatible with hundreds of thousands of pre-existing libraries currently on the web for EOS developers to reference while building their dapps. This is a potential advantage over a platform like Ethereum which uses a proprietary language called Solidity.\r\n                \r\n                EOS.IO will also come pre-equipped with numerous useful features, including account creation and recovery, multi-signature accounts, account messaging, role-based permissions, and many other commonly used tools in application development.\r\n                \r\n                Transaction Speed\r\n                EOS will have a block time of 0.5 seconds and claims to support a transaction speed of thousands, if not millions, of transactions per second. This is perhaps the most exciting feature of EOS and is a feat yet to be achieved by any other platform on the market.\r\n                \r\n                DPoS Algorithm\r\n                One of the key elements to EOS’s security and speed is Daniel Larimer’s unique consensus algorithm called Delegated Proof of Stake (DPoS). Larimer has been refining DPoS since 2013 and has successfully implemented it in his previous blockchain projects, Bitshares and Steem.\r\n                \r\n                Through the use of DPoS, EOS aims to address concerns surrounding decentralization, safety, and scalability by allowing network token holders to cast votes in proportion to the size of their stake in the network to elect 21 block producers. DPoS in effect democratizes the process of whose work is chosen to be added to the network’s blockchain.\r\n                \r\n                Because EOS token holders are voting for who is elected into the group of block producers, the block producers are held accountable to the quality of their performance. In theory, the competition between block producers to earn the votes of the stakeholders will spur on increased speed and scalability while creating a barrier for entry that will prevent hackers from acquiring sufficient votes to have their fraudulent work added to the chain.\r\n                \r\n                DPoS is built on the idea that the barrier of entry block producers need to get through in order to be elected as adds an additional layer of security that a PoS model doesn’t have, and leads to faster transaction speeds than Ethereum’s overly complex sharding system can deliver.</h2>\r\n  \r\n              </div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/badges/badges.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/badges/badges.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--NPM VERSION-->\r\n<a href=\"https://badge.fury.io/js/ngx-auth-firebaseui\">\r\n  <img src=\"https://badge.fury.io/js/ngx-auth-firebaseui.svg\" alt=\"npm version\">\r\n</a>\r\n\r\n<!--CIRCLECI-->\r\n<a href=\"https://badge.fury.io/js/ngx-auth-firebaseui\">\r\n  <img src=\"https://img.shields.io/circleci/project/github/AnthonyNahas/ngx-auth-firebaseui/master.svg?label=circleci\"\r\n       alt=\"circleci build status\">\r\n</a>\r\n\r\n<!--DOWNLOADS-->\r\n<a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\">\r\n  <img src=\"https://img.shields.io/npm/dt/ngx-auth-firebaseui.svg?style=flat-square\" alt=\"downloads\">\r\n</a>\r\n\r\n<!--FORK-->\r\n<a href=\"https://github.com/anthonynahas/ngx-auth-firebaseui\">\r\n  <img alt=\"github forks\"\r\n       src=\"https://img.shields.io/github/forks/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Fork\">\r\n</a>\r\n\r\n<!--STAR-->\r\n<a href=\"https://github.com/anthonynahas/ngx-auth-firebaseui\">\r\n  <img alt=\"github stars\"\r\n       src=\"https://img.shields.io/github/stars/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Star\">\r\n</a>\r\n\r\n<!--FOLLOWER-->\r\n<a href=\"https://github.com/anthonynahas/ngx-auth-firebaseui\">\r\n  <img alt=\"github followers\"\r\n       src=\"https://img.shields.io/github/followers/anthonynahas.svg?style=social&label=Follow\">\r\n</a>\r\n\r\n<!--LICENSE-->\r\n<a href=\"https://github.com/anthonynahas/ngx-auth-firebaseui/blob/master/LICENSE\">\r\n  <img alt=\"license\"\r\n       src=\"https://img.shields.io/github/license/anthonynahas/ngx-auth-firebaseui.svg?style=flat-square\">\r\n</a>\r\n\r\n<!--TWITTER-->\r\n<a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\">\r\n  <img src=\"https://img.shields.io/twitter/url/http/shields.io.svg?style=social\" alt=\"twitter\">\r\n</a>\r\n\r\n<!--TWITTER FOLLOWERS-->\r\n<a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\">\r\n  <img src=\"https://img.shields.io/twitter/follow/ngAnthonyy.svg?style=social&label=Follow\" alt=\"twitter followers\">\r\n</a>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/content-wrapper/content-wrapper.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/content-wrapper/content-wrapper.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\r\n\t<div class=\"container\">\r\n\t\t<h1>{{ component }}</h1>\r\n\t</div>\r\n</div>\r\n<div class=\"container\">\r\n\t<div class=\"col-md-9 col-md-float-3\">\r\n\t\t<ng-content></ng-content>\r\n\t</div>\r\n\t<div class=\"col-md-3 col-md-push-9\">\r\n\t\t<!--<ngbd-side-nav></ngbd-side-nav>-->\r\n\t</div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<footer class=\"bd-footer text-muted\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <p><a routerLink=\"legal/tos\">Terms of services </a><img srcset=\"\" alt=\"\" src=\"/assets/espana.webp\" class=\"\" style= \" margin-left: 70%; width: 10%; \"></p>\r\n    <p><a routerLink=\"legal/privacy\">Private Policy </a></p>\r\n    <p> Coded by <a href=\"https://github.com/CADEOS\" target=\"_blank\">CADEOS.io<img srcset=\"\" alt=\"\" src=\"/assets/patentes.webp\" class=\"\" style= \" margin-left: 70%; width: 10%;\"></a></p>\r\n    <p> Code licensed under <a href=\"https://github.com/CADEOS\"\r\n                               target=\"_blank\">MIT license conditions.</a></p>\r\n\r\n</div>\r\n</footer>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container-fluid\">\r\n    <div class=”row”>\r\n  <header class=\"navbar navbar-light navbar-fixed-top navbar-expand-lg full-width-row\">\r\n      <a class=\"navbar-brand\" style=\" font-family: 'Anton', sans-serif; font-size: 40px; \" routerLink=\"/\"><img src=\"/assets/cadeosico.png\"  />   CADEOS.io</a>\r\n\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\"\r\n            [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n      \r\n    </button>\r\n\r\n    <div class=\"navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/getting-started\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">PLM</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/features\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">TOOLS</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\"> \r\n          <a class=\"nav-link\" routerLink=\"/examples\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">CAMPUS</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/i18n\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">LOGIN</a>\r\n        </li>\r\n        <li class=\"full-width-row\" style=\"object-position: right;\">\r\n          <a class=\"nav-link\" routerLink=\"/providers\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">WALLET</a>\r\n        </li>\r\n        <li class=\"full-width-row\" style=\"object-position: right;\">\r\n          <a class=\"nav-link\" routerLink=\"/cadeosio3d\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">3D</a>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </header>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/regenerator-runtime/runtime.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/regenerator-runtime/runtime.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            /**
             * Copyright (c) 2014-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var runtime = (function (exports) {
                "use strict";
                var Op = Object.prototype;
                var hasOwn = Op.hasOwnProperty;
                var undefined; // More compressible than void 0.
                var $Symbol = typeof Symbol === "function" ? Symbol : {};
                var iteratorSymbol = $Symbol.iterator || "@@iterator";
                var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
                var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
                function wrap(innerFn, outerFn, self, tryLocsList) {
                    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                    var generator = Object.create(protoGenerator.prototype);
                    var context = new Context(tryLocsList || []);
                    // The ._invoke method unifies the implementations of the .next,
                    // .throw, and .return methods.
                    generator._invoke = makeInvokeMethod(innerFn, self, context);
                    return generator;
                }
                exports.wrap = wrap;
                // Try/catch helper to minimize deoptimizations. Returns a completion
                // record like context.tryEntries[i].completion. This interface could
                // have been (and was previously) designed to take a closure to be
                // invoked without arguments, but in all the cases we care about we
                // already have an existing method we want to call, so there's no need
                // to create a new function object. We can even get away with assuming
                // the method takes exactly one argument, since that happens to be true
                // in every case, so we don't have to touch the arguments object. The
                // only additional allocation required is the completion record, which
                // has a stable shape and so hopefully should be cheap to allocate.
                function tryCatch(fn, obj, arg) {
                    try {
                        return { type: "normal", arg: fn.call(obj, arg) };
                    }
                    catch (err) {
                        return { type: "throw", arg: err };
                    }
                }
                var GenStateSuspendedStart = "suspendedStart";
                var GenStateSuspendedYield = "suspendedYield";
                var GenStateExecuting = "executing";
                var GenStateCompleted = "completed";
                // Returning this object from the innerFn has the same effect as
                // breaking out of the dispatch switch statement.
                var ContinueSentinel = {};
                // Dummy constructor functions that we use as the .constructor and
                // .constructor.prototype properties for functions that return Generator
                // objects. For full spec compliance, you may wish to configure your
                // minifier not to mangle the names of these two functions.
                function Generator() { }
                function GeneratorFunction() { }
                function GeneratorFunctionPrototype() { }
                // This is a polyfill for %IteratorPrototype% for environments that
                // don't natively support it.
                var IteratorPrototype = {};
                IteratorPrototype[iteratorSymbol] = function () {
                    return this;
                };
                var getProto = Object.getPrototypeOf;
                var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
                if (NativeIteratorPrototype &&
                    NativeIteratorPrototype !== Op &&
                    hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                    // This environment has a native %IteratorPrototype%; use it instead
                    // of the polyfill.
                    IteratorPrototype = NativeIteratorPrototype;
                }
                var Gp = GeneratorFunctionPrototype.prototype =
                    Generator.prototype = Object.create(IteratorPrototype);
                GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
                GeneratorFunctionPrototype.constructor = GeneratorFunction;
                GeneratorFunctionPrototype[toStringTagSymbol] =
                    GeneratorFunction.displayName = "GeneratorFunction";
                // Helper for defining the .next, .throw, and .return methods of the
                // Iterator interface in terms of a single ._invoke method.
                function defineIteratorMethods(prototype) {
                    ["next", "throw", "return"].forEach(function (method) {
                        prototype[method] = function (arg) {
                            return this._invoke(method, arg);
                        };
                    });
                }
                exports.isGeneratorFunction = function (genFun) {
                    var ctor = typeof genFun === "function" && genFun.constructor;
                    return ctor
                        ? ctor === GeneratorFunction ||
                            // For the native GeneratorFunction constructor, the best we can
                            // do is to check its .name property.
                            (ctor.displayName || ctor.name) === "GeneratorFunction"
                        : false;
                };
                exports.mark = function (genFun) {
                    if (Object.setPrototypeOf) {
                        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                    }
                    else {
                        genFun.__proto__ = GeneratorFunctionPrototype;
                        if (!(toStringTagSymbol in genFun)) {
                            genFun[toStringTagSymbol] = "GeneratorFunction";
                        }
                    }
                    genFun.prototype = Object.create(Gp);
                    return genFun;
                };
                // Within the body of any async function, `await x` is transformed to
                // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
                // `hasOwn.call(value, "__await")` to determine if the yielded value is
                // meant to be awaited.
                exports.awrap = function (arg) {
                    return { __await: arg };
                };
                function AsyncIterator(generator) {
                    function invoke(method, arg, resolve, reject) {
                        var record = tryCatch(generator[method], generator, arg);
                        if (record.type === "throw") {
                            reject(record.arg);
                        }
                        else {
                            var result = record.arg;
                            var value = result.value;
                            if (value &&
                                typeof value === "object" &&
                                hasOwn.call(value, "__await")) {
                                return Promise.resolve(value.__await).then(function (value) {
                                    invoke("next", value, resolve, reject);
                                }, function (err) {
                                    invoke("throw", err, resolve, reject);
                                });
                            }
                            return Promise.resolve(value).then(function (unwrapped) {
                                // When a yielded Promise is resolved, its final value becomes
                                // the .value of the Promise<{value,done}> result for the
                                // current iteration.
                                result.value = unwrapped;
                                resolve(result);
                            }, function (error) {
                                // If a rejected Promise was yielded, throw the rejection back
                                // into the async generator function so it can be handled there.
                                return invoke("throw", error, resolve, reject);
                            });
                        }
                    }
                    var previousPromise;
                    function enqueue(method, arg) {
                        function callInvokeWithMethodAndArg() {
                            return new Promise(function (resolve, reject) {
                                invoke(method, arg, resolve, reject);
                            });
                        }
                        return previousPromise =
                            // If enqueue has been called before, then we want to wait until
                            // all previous Promises have been resolved before calling invoke,
                            // so that results are always delivered in the correct order. If
                            // enqueue has not been called before, then it is important to
                            // call invoke immediately, without waiting on a callback to fire,
                            // so that the async generator function has the opportunity to do
                            // any necessary setup in a predictable way. This predictability
                            // is why the Promise constructor synchronously invokes its
                            // executor callback, and why async functions synchronously
                            // execute code before the first await. Since we implement simple
                            // async functions in terms of async generators, it is especially
                            // important to get this right, even though it requires care.
                            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, 
                            // Avoid propagating failures to Promises returned by later
                            // invocations of the iterator.
                            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                    }
                    // Define the unified helper method that is used to implement .next,
                    // .throw, and .return (see defineIteratorMethods).
                    this._invoke = enqueue;
                }
                defineIteratorMethods(AsyncIterator.prototype);
                AsyncIterator.prototype[asyncIteratorSymbol] = function () {
                    return this;
                };
                exports.AsyncIterator = AsyncIterator;
                // Note that simple async functions are implemented on top of
                // AsyncIterator objects; they just return a Promise for the value of
                // the final result produced by the iterator.
                exports.async = function (innerFn, outerFn, self, tryLocsList) {
                    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
                    return exports.isGeneratorFunction(outerFn)
                        ? iter // If outerFn is a generator, return the full iterator.
                        : iter.next().then(function (result) {
                            return result.done ? result.value : iter.next();
                        });
                };
                function makeInvokeMethod(innerFn, self, context) {
                    var state = GenStateSuspendedStart;
                    return function invoke(method, arg) {
                        if (state === GenStateExecuting) {
                            throw new Error("Generator is already running");
                        }
                        if (state === GenStateCompleted) {
                            if (method === "throw") {
                                throw arg;
                            }
                            // Be forgiving, per 25.3.3.3.3 of the spec:
                            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                            return doneResult();
                        }
                        context.method = method;
                        context.arg = arg;
                        while (true) {
                            var delegate = context.delegate;
                            if (delegate) {
                                var delegateResult = maybeInvokeDelegate(delegate, context);
                                if (delegateResult) {
                                    if (delegateResult === ContinueSentinel)
                                        continue;
                                    return delegateResult;
                                }
                            }
                            if (context.method === "next") {
                                // Setting context._sent for legacy support of Babel's
                                // function.sent implementation.
                                context.sent = context._sent = context.arg;
                            }
                            else if (context.method === "throw") {
                                if (state === GenStateSuspendedStart) {
                                    state = GenStateCompleted;
                                    throw context.arg;
                                }
                                context.dispatchException(context.arg);
                            }
                            else if (context.method === "return") {
                                context.abrupt("return", context.arg);
                            }
                            state = GenStateExecuting;
                            var record = tryCatch(innerFn, self, context);
                            if (record.type === "normal") {
                                // If an exception is thrown from innerFn, we leave state ===
                                // GenStateExecuting and loop back for another invocation.
                                state = context.done
                                    ? GenStateCompleted
                                    : GenStateSuspendedYield;
                                if (record.arg === ContinueSentinel) {
                                    continue;
                                }
                                return {
                                    value: record.arg,
                                    done: context.done
                                };
                            }
                            else if (record.type === "throw") {
                                state = GenStateCompleted;
                                // Dispatch the exception by looping back around to the
                                // context.dispatchException(context.arg) call above.
                                context.method = "throw";
                                context.arg = record.arg;
                            }
                        }
                    };
                }
                // Call delegate.iterator[context.method](context.arg) and handle the
                // result, either by returning a { value, done } result from the
                // delegate iterator, or by modifying context.method and context.arg,
                // setting context.delegate to null, and returning the ContinueSentinel.
                function maybeInvokeDelegate(delegate, context) {
                    var method = delegate.iterator[context.method];
                    if (method === undefined) {
                        // A .throw or .return when the delegate iterator has no .throw
                        // method always terminates the yield* loop.
                        context.delegate = null;
                        if (context.method === "throw") {
                            // Note: ["return"] must be used for ES3 parsing compatibility.
                            if (delegate.iterator["return"]) {
                                // If the delegate iterator has a return method, give it a
                                // chance to clean up.
                                context.method = "return";
                                context.arg = undefined;
                                maybeInvokeDelegate(delegate, context);
                                if (context.method === "throw") {
                                    // If maybeInvokeDelegate(context) changed context.method from
                                    // "return" to "throw", let that override the TypeError below.
                                    return ContinueSentinel;
                                }
                            }
                            context.method = "throw";
                            context.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return ContinueSentinel;
                    }
                    var record = tryCatch(method, delegate.iterator, context.arg);
                    if (record.type === "throw") {
                        context.method = "throw";
                        context.arg = record.arg;
                        context.delegate = null;
                        return ContinueSentinel;
                    }
                    var info = record.arg;
                    if (!info) {
                        context.method = "throw";
                        context.arg = new TypeError("iterator result is not an object");
                        context.delegate = null;
                        return ContinueSentinel;
                    }
                    if (info.done) {
                        // Assign the result of the finished delegate to the temporary
                        // variable specified by delegate.resultName (see delegateYield).
                        context[delegate.resultName] = info.value;
                        // Resume execution at the desired location (see delegateYield).
                        context.next = delegate.nextLoc;
                        // If context.method was "throw" but the delegate handled the
                        // exception, let the outer generator proceed normally. If
                        // context.method was "next", forget context.arg since it has been
                        // "consumed" by the delegate iterator. If context.method was
                        // "return", allow the original .return call to continue in the
                        // outer generator.
                        if (context.method !== "return") {
                            context.method = "next";
                            context.arg = undefined;
                        }
                    }
                    else {
                        // Re-yield the result returned by the delegate method.
                        return info;
                    }
                    // The delegate iterator is finished, so forget it and continue with
                    // the outer generator.
                    context.delegate = null;
                    return ContinueSentinel;
                }
                // Define Generator.prototype.{next,throw,return} in terms of the
                // unified ._invoke helper method.
                defineIteratorMethods(Gp);
                Gp[toStringTagSymbol] = "Generator";
                // A Generator should always return itself as the iterator object when the
                // @@iterator function is called on it. Some browsers' implementations of the
                // iterator prototype chain incorrectly implement this, causing the Generator
                // object to not be returned from this call. This ensures that doesn't happen.
                // See https://github.com/facebook/regenerator/issues/274 for more details.
                Gp[iteratorSymbol] = function () {
                    return this;
                };
                Gp.toString = function () {
                    return "[object Generator]";
                };
                function pushTryEntry(locs) {
                    var entry = { tryLoc: locs[0] };
                    if (1 in locs) {
                        entry.catchLoc = locs[1];
                    }
                    if (2 in locs) {
                        entry.finallyLoc = locs[2];
                        entry.afterLoc = locs[3];
                    }
                    this.tryEntries.push(entry);
                }
                function resetTryEntry(entry) {
                    var record = entry.completion || {};
                    record.type = "normal";
                    delete record.arg;
                    entry.completion = record;
                }
                function Context(tryLocsList) {
                    // The root entry object (effectively a try statement without a catch
                    // or a finally block) gives us a place to store values thrown from
                    // locations where there is no enclosing try statement.
                    this.tryEntries = [{ tryLoc: "root" }];
                    tryLocsList.forEach(pushTryEntry, this);
                    this.reset(true);
                }
                exports.keys = function (object) {
                    var keys = [];
                    for (var key in object) {
                        keys.push(key);
                    }
                    keys.reverse();
                    // Rather than returning an object with a next method, we keep
                    // things simple and return the next function itself.
                    return function next() {
                        while (keys.length) {
                            var key = keys.pop();
                            if (key in object) {
                                next.value = key;
                                next.done = false;
                                return next;
                            }
                        }
                        // To avoid creating an additional object, we just hang the .value
                        // and .done properties off the next function object itself. This
                        // also ensures that the minifier will not anonymize the function.
                        next.done = true;
                        return next;
                    };
                };
                function values(iterable) {
                    if (iterable) {
                        var iteratorMethod = iterable[iteratorSymbol];
                        if (iteratorMethod) {
                            return iteratorMethod.call(iterable);
                        }
                        if (typeof iterable.next === "function") {
                            return iterable;
                        }
                        if (!isNaN(iterable.length)) {
                            var i = -1, next = function next() {
                                while (++i < iterable.length) {
                                    if (hasOwn.call(iterable, i)) {
                                        next.value = iterable[i];
                                        next.done = false;
                                        return next;
                                    }
                                }
                                next.value = undefined;
                                next.done = true;
                                return next;
                            };
                            return next.next = next;
                        }
                    }
                    // Return an iterator with no values.
                    return { next: doneResult };
                }
                exports.values = values;
                function doneResult() {
                    return { value: undefined, done: true };
                }
                Context.prototype = {
                    constructor: Context,
                    reset: function (skipTempReset) {
                        this.prev = 0;
                        this.next = 0;
                        // Resetting context._sent for legacy support of Babel's
                        // function.sent implementation.
                        this.sent = this._sent = undefined;
                        this.done = false;
                        this.delegate = null;
                        this.method = "next";
                        this.arg = undefined;
                        this.tryEntries.forEach(resetTryEntry);
                        if (!skipTempReset) {
                            for (var name in this) {
                                // Not sure about the optimal order of these conditions:
                                if (name.charAt(0) === "t" &&
                                    hasOwn.call(this, name) &&
                                    !isNaN(+name.slice(1))) {
                                    this[name] = undefined;
                                }
                            }
                        }
                    },
                    stop: function () {
                        this.done = true;
                        var rootEntry = this.tryEntries[0];
                        var rootRecord = rootEntry.completion;
                        if (rootRecord.type === "throw") {
                            throw rootRecord.arg;
                        }
                        return this.rval;
                    },
                    dispatchException: function (exception) {
                        if (this.done) {
                            throw exception;
                        }
                        var context = this;
                        function handle(loc, caught) {
                            record.type = "throw";
                            record.arg = exception;
                            context.next = loc;
                            if (caught) {
                                // If the dispatched exception was caught by a catch block,
                                // then let that catch block handle the exception normally.
                                context.method = "next";
                                context.arg = undefined;
                            }
                            return !!caught;
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            var record = entry.completion;
                            if (entry.tryLoc === "root") {
                                // Exception thrown outside of any try block that could handle
                                // it, so set the completion value of the entire function to
                                // throw the exception.
                                return handle("end");
                            }
                            if (entry.tryLoc <= this.prev) {
                                var hasCatch = hasOwn.call(entry, "catchLoc");
                                var hasFinally = hasOwn.call(entry, "finallyLoc");
                                if (hasCatch && hasFinally) {
                                    if (this.prev < entry.catchLoc) {
                                        return handle(entry.catchLoc, true);
                                    }
                                    else if (this.prev < entry.finallyLoc) {
                                        return handle(entry.finallyLoc);
                                    }
                                }
                                else if (hasCatch) {
                                    if (this.prev < entry.catchLoc) {
                                        return handle(entry.catchLoc, true);
                                    }
                                }
                                else if (hasFinally) {
                                    if (this.prev < entry.finallyLoc) {
                                        return handle(entry.finallyLoc);
                                    }
                                }
                                else {
                                    throw new Error("try statement without catch or finally");
                                }
                            }
                        }
                    },
                    abrupt: function (type, arg) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc <= this.prev &&
                                hasOwn.call(entry, "finallyLoc") &&
                                this.prev < entry.finallyLoc) {
                                var finallyEntry = entry;
                                break;
                            }
                        }
                        if (finallyEntry &&
                            (type === "break" ||
                                type === "continue") &&
                            finallyEntry.tryLoc <= arg &&
                            arg <= finallyEntry.finallyLoc) {
                            // Ignore the finally entry if control is not jumping to a
                            // location outside the try/catch block.
                            finallyEntry = null;
                        }
                        var record = finallyEntry ? finallyEntry.completion : {};
                        record.type = type;
                        record.arg = arg;
                        if (finallyEntry) {
                            this.method = "next";
                            this.next = finallyEntry.finallyLoc;
                            return ContinueSentinel;
                        }
                        return this.complete(record);
                    },
                    complete: function (record, afterLoc) {
                        if (record.type === "throw") {
                            throw record.arg;
                        }
                        if (record.type === "break" ||
                            record.type === "continue") {
                            this.next = record.arg;
                        }
                        else if (record.type === "return") {
                            this.rval = this.arg = record.arg;
                            this.method = "return";
                            this.next = "end";
                        }
                        else if (record.type === "normal" && afterLoc) {
                            this.next = afterLoc;
                        }
                        return ContinueSentinel;
                    },
                    finish: function (finallyLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.finallyLoc === finallyLoc) {
                                this.complete(entry.completion, entry.afterLoc);
                                resetTryEntry(entry);
                                return ContinueSentinel;
                            }
                        }
                    },
                    "catch": function (tryLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc === tryLoc) {
                                var record = entry.completion;
                                if (record.type === "throw") {
                                    var thrown = record.arg;
                                    resetTryEntry(entry);
                                }
                                return thrown;
                            }
                        }
                        // The context.catch method must only be called with a location
                        // argument that corresponds to a known catch block.
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (iterable, resultName, nextLoc) {
                        this.delegate = {
                            iterator: values(iterable),
                            resultName: resultName,
                            nextLoc: nextLoc
                        };
                        if (this.method === "next") {
                            // Deliberately forget the last sent value so that we don't
                            // accidentally pass it on to the delegate.
                            this.arg = undefined;
                        }
                        return ContinueSentinel;
                    }
                };
                // Regardless of whether this script is executing as a CommonJS module
                // or not, return the runtime object so that we can declare the variable
                // regeneratorRuntime in the outer scope, which allows this module to be
                // injected easily by `bin/regenerator --include-runtime script.js`.
                return exports;
            }(
            // If this script is executing as a CommonJS module, use module.exports
            // as the regeneratorRuntime namespace. Otherwise create a new empty
            // object. Either way, the resulting object will be used to initialize
            // the regeneratorRuntime variable at the top of this file.
            true ? module.exports : undefined));
            try {
                regeneratorRuntime = runtime;
            }
            catch (accidentalStrictMode) {
                // This module should not be running in strict mode, so the above
                // assignment should always work unless something is misconfigured. Just
                // in case runtime.js accidentally runs in strict mode, we can escape
                // strict mode using a global Function call. This could conceivably fail
                // if a Content Security Policy forbids using Function, but in that case
                // the proper solution is to fix the accidental strict mode problem. If
                // you've misconfigured your bundler to force strict mode and applied a
                // CSP to forbid Function, and you're not willing to fix either of those
                // problems, please detail your unique predicament in a GitHub issue.
                Function("r", "regeneratorRuntime = r")(runtime);
            }
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./node_modules/webpack/buildin/global.js": 
        /*!***********************************!*\
          !*** (webpack)/buildin/global.js ***!
          \***********************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var g;
            // This works in non-strict mode
            g = (function () {
                return this;
            })();
            try {
                // This works if eval is allowed (see CSP)
                g = g || new Function("return this")();
            }
            catch (e) {
                // This works if the window reference is available
                if (typeof window === "object")
                    g = window;
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            module.exports = g;
            /***/ 
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive": 
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            var routes = [
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'getting-started',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./getting-started/getting-started.module */ "./src/app/getting-started/getting-started.module.ts")).then(function (m) { return m.GettingStartedModule; }); }
                },
                {
                    path: 'features',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./features/features.module */ "./src/app/features/features.module.ts")).then(function (m) { return m.FeaturesModule; }); }
                },
                {
                    path: 'i18n',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./i18n/i18n.module */ "./src/app/i18n/i18n.module.ts")).then(function (m) { return m.I18nModule; }); }
                },
                {
                    path: 'legal',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./legal/legal.module */ "./src/app/legal/legal.module.ts")).then(function (m) { return m.LegalModule; }); }
                },
                {
                    path: 'providers',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./faq/faq.module */ "./src/app/faq/faq.module.ts")).then(function (m) { return m.FaqModule; }); }
                },
                {
                    path: 'exchanges',
                    loadChildren: function () { return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./exchanges/exchanges.module */ "./src/app/exchanges/exchanges.module.ts")).then(function (m) { return m.ExchangesModule; }); },
                },
                {
                    path: 'cadeosio3d',
                    loadChildren: function () { return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./cadeosio3d/cadeosio3d.module */ "./src/app/cadeosio3d/cadeosio3d.module.ts")).then(function (m) { return m.Cadeosio3dModule; }); },
                },
                {
                    path: 'secured',
                    loadChildren: function () { return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./faq/faq.module */ "./src/app/faq/faq.module.ts")).then(function (m) { return m.FaqModule; }); },
                    canActivate: [ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_3__["LoggedInGuard"]]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, platformId) {
                    var _this = this;
                    this.router = router;
                    this.platformId = platformId;
                    this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(_this.platformId)) {
                            window.scroll(0, 0);
                        }
                    });
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: hljsLanguages, firebaseAppNameFactory, createTranslateLoader, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function () { return hljsLanguages; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseAppNameFactory", function () { return firebaseAppNameFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () { return createTranslateLoader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
            /* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm2015/angulartics2.js");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            /* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./firebase.config */ "./src/app/firebase.config.ts");
            /* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
            /* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
            /* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
            /* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular-material-extensions/pages */ "./node_modules/@angular-material-extensions/pages/fesm2015/angular-material-extensions-pages.js");
            /* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
            /* harmony import */ var _exchanges_exchanges_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./exchanges/exchanges.module */ "./src/app/exchanges/exchanges.module.ts");
            /* harmony import */ var _cadeosio3d_cadeosio3d_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cadeosio3d/cadeosio3d.module */ "./src/app/cadeosio3d/cadeosio3d.module.ts");
            /* harmony import */ var _services_scatter_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/scatter.service */ "./src/app/services/scatter.service.ts");
            function hljsLanguages() {
                return [
                    { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18___default.a },
                    { name: 'scss', func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_19___default.a },
                    { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_20___default.a }
                ];
            }
            function firebaseAppNameFactory() {
                return "cadeosio";
            }
            function createTranslateLoader(http) {
                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    ],
                    imports: [
                        // Add .withServerTransition() to support Universal rendering.
                        // The application ID can be any identifier which is unique on
                        // the page.
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: '1:260992003477:web:912c91001d96d6053b9a9c' }),
                        angulartics2__WEBPACK_IMPORTED_MODULE_13__["Angulartics2Module"].forRoot(),
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
                        _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_firebase_config__WEBPACK_IMPORTED_MODULE_17__["firebaseKey"]),
                        ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_16__["NgxAuthFirebaseUIModule"].forRoot(_firebase_config__WEBPACK_IMPORTED_MODULE_17__["firebaseKey"], firebaseAppNameFactory, {
                            enableFirestoreSync: true,
                            toastMessageOnAuthSuccess: true,
                            toastMessageOnAuthError: true,
                            authGuardFallbackURL: 'examples/logged-out',
                            authGuardLoggedInURL: 'examples/logged-in',
                        }),
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"].forRoot({
                            loader: {
                                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateLoader"],
                                useFactory: (createTranslateLoader),
                                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                            }
                        }),
                        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__["HighlightModule"].forRoot({
                            languages: hljsLanguages
                        }),
                        ngx_markdown__WEBPACK_IMPORTED_MODULE_24__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }),
                        _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__["MatPagesModule"].forRoot(),
                        ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"],
                        _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                        _exchanges_exchanges_module__WEBPACK_IMPORTED_MODULE_25__["ExchangesModule"],
                        _cadeosio3d_cadeosio3d_module__WEBPACK_IMPORTED_MODULE_26__["Cadeosio3dModule"],
                        ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_16__["NgxAuthFirebaseUIModule"].forRoot(_firebase_config__WEBPACK_IMPORTED_MODULE_17__["firebaseKey"]),
                    ],
                    providers: [
                        _services_scatter_service__WEBPACK_IMPORTED_MODULE_27__["ScatterService"],
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/cadeosio3d/cadeosio3d-routing.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/cadeosio3d/cadeosio3d-routing.module.ts ***!
          \*********************************************************/
        /*! exports provided: Cadeosio3dRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cadeosio3dRoutingModule", function () { return Cadeosio3dRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _cadeosio3d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadeosio3d.component */ "./src/app/cadeosio3d/cadeosio3d.component.ts");
            var Cadeosio3dRoutingModule = /** @class */ (function () {
                function Cadeosio3dRoutingModule() {
                }
                return Cadeosio3dRoutingModule;
            }());
            Cadeosio3dRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                            { path: 'cadeosio3d', component: _cadeosio3d_component__WEBPACK_IMPORTED_MODULE_3__["Cadeosio3dComponent"] }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], Cadeosio3dRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/cadeosio3d/cadeosio3d.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/cadeosio3d/cadeosio3d.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none black;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  font-family: \"Anton\", sans-serif;\n  /* ensure that the document uses the whole width and height of the browser */\n  min-height: 100%;\n  height: 100%;\n  min-width: 100%;\n  width: 100%;\n  /* viewer/canvas is full screen so when window\n     is resized all remains intact, but we make sure no scrollbar appears */\n  overflow: hidden;\n}\n\na {\n  text-decoration: none;\n  color: #000000;\n  font-weight: bold;\n  text-align: center;\n  font-family: \"Anton\", sans-serif;\n  font-size: 100%;\n  align-content: center;\n  text-align: center;\n  align-items: center;\n}\n\na:visited {\n  color: #6020a0;\n}\n\n#header {\n  position: absolute;\n  top: 1em;\n  left: 1em;\n  z-index: 20;\n}\n\n#editFrame {\n  /*  display: none; */\n  margin: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  /*  left: 0; */\n  right: 0;\n  width: 40%;\n  font-weight: normal;\n}\n\n#editHandle {\n  left: -25px;\n  top: 45%;\n  position: absolute;\n  z-index: 6;\n  opacity: 0.9;\n}\n\n#editFrame {\n  transition: width 0.4s;\n  -o-transition: width 0.4s;\n  -moz-transition: width 0.4s;\n  -webkit-transition: width 0.4s;\n}\n\n.ace_gutter {\n  border-left: 1px solid #380042;\n  background: transparent !important;\n}\n\n#editor {\n  margin: inherit;\n  position: inherit;\n  top: inherit;\n  bottom: inherit;\n  left: inherit;\n  right: inherit;\n  width: 100%;\n  z-index: 6;\n  /*\n     background: transparent;\n  */\n  background: rgba(255, 255, 255, 0.15);\n}\n\n#viewerContext {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none #4b006e;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  /* ensure that the canvas uses the whole width and height of the document */\n  background: #e5b9fd;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  bottom: 0px;\n}\n\ncanvas {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none #5c005a;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  /* ensure that the canvas uses the whole width and height of the document */\n  height: 100%;\n  width: 100%;\n  cursor: move;\n  /* show that we can change orientation of view */\n}\n\n#about {\n  position: absolute;\n  width: 30%;\n  left: 30%;\n  top: 10%;\n  font-size: 0.75em;\n  box-shadow: 0px 0px 20px black;\n  color: #404040;\n  border-radius: 20px;\n  background: white;\n  display: none;\n  padding: 1.5em;\n  text-align: center;\n  z-index: 100;\n}\n\n.okButton {\n  border: 2px solid #808080;\n  border-radius: 4px;\n  padding: 0.5em;\n  padding-left: 2em;\n  padding-right: 2em;\n  margin-top: 3em;\n  background: #eee;\n}\n\n.okButton:hover {\n  background: #ccc;\n}\n\n#footer {\n  font-size: 0.7em;\n  text-align: left;\n  position: absolute;\n  margin-left: 1.5em;\n  bottom: 0.5em;\n  opacity: 0.5;\n  -moz-opacity: 0.5;\n  /* css mess (why do it simple, when we can do it complicate!) */\n}\n\n#tail {\n  z-index: 4;\n  position: absolute;\n  bottom: 1em;\n  margin: 1em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 95%;\n}\n\n#busy {\n  vertical-align: middle;\n}\n\n#menu, #menu nav a {\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n}\n\n#menu {\n  background: white;\n  opacity: 0.8;\n  -moz-opacity: 0.8;\n  border-right: 1px solid black;\n  height: inherit;\n  width: 250px;\n  padding-left: 20px;\n  padding-right: 10px;\n  position: fixed;\n  z-index: 5;\n  font-size: 0.9em;\n  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);\n  -moz-box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);\n  -webkit-box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);\n}\n\n#menu {\n  left: 0;\n}\n\n#menuHandle {\n  right: -25px;\n  top: 45%;\n  position: absolute;\n  z-index: 6;\n}\n\n#menu nav {\n  position: relative;\n  top: 50px;\n}\n\n#menu #examples {\n  font-size: 0.6em;\n}\n\n#menu #examples .newExample {\n  border-radius: 5px;\n  background: yellow;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n#menu #examples, #menu #examples a {\n  margin-top: 0px;\n}\n\n#menu .info {\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin-bottom: 0.5em;\n}\n\n#menu .info td {\n  margin: 0px;\n  padding-left: 2px;\n  padding-right: 2px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  font-size: 0.6em;\n}\n\n.info .infoView {\n  text-align: center;\n  font-weight: bold;\n  color: #444;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.info .infoOperation {\n  font-weight: bold;\n  color: #602080;\n}\n\n.info .infoKey {\n  font-weight: bold;\n  color: #808080;\n}\n\n#menuVersion {\n  text-align: center;\n  font-size: 0.6em;\n  color: #666;\n}\n\n.menuSubInfo {\n  font-size: 0.6em;\n  color: #666;\n}\n\n#examples {\n  /* width: 60em; */\n  width: auto;\n  z-index: 12;\n  position: absolute;\n  display: none;\n  background: #f8e8ff;\n  border: solid 1px #888;\n  padding: 1em;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px #849;\n}\n\n#examples td {\n  white-space: nowrap;\n}\n\n#examples li {\n  list-style-type: none;\n}\n\n#examplesHandle {\n  bottom: 0px;\n  left: 45%;\n  position: relative;\n  z-index: 10;\n}\n\n#options {\n  width: auto;\n  z-index: 12;\n  position: absolute;\n  display: none;\n  background: #f8e8ff;\n  border: solid 1px #888;\n  padding: 0.5em;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px #849;\n  font-size: 0.8em;\n}\n\n.optionGroup {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 0.5em;\n  margin: 0.5em;\n  background: white;\n}\n\n.optionGroup input, .optionGroup select {\n  background: #fea;\n  border: none;\n}\n\n.optionInfo {\n  font-size: 0.8em;\n  color: #888;\n}\n\n/* arrows */\n\n.shift-scene {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  border: 5px dotted #999;\n  width: 160px;\n  height: 160px;\n  margin-top: -80px;\n  margin-left: -80px;\n  background: transparent;\n  cursor: move;\n  opacity: 0.8;\n  display: none;\n}\n\n.shift-scene.active {\n  display: block;\n}\n\n.arrow {\n  width: 0px;\n  height: 0px;\n  border: 50px solid transparent;\n  position: absolute;\n  z-index: 100;\n  margin-left: 30px;\n  margin-top: 30px;\n}\n\n.arrow-left {\n  border-right-color: #666;\n  margin-left: -90px;\n}\n\n.arrow-right {\n  border-left-color: #666;\n  margin-left: 150px;\n}\n\n.arrow-top {\n  border-bottom-color: #666;\n  margin-top: -90px;\n}\n\n.arrow-bottom {\n  border-top-color: #666;\n  margin-top: 150px;\n}\n\n.shift-vertical .arrow-left,\n.shift-vertical .arrow-right,\n.shift-horizontal .arrow-top,\n.shift-horizontal .arrow-bottom {\n  display: none;\n}\n\ntable {\n  display: table;\n  border-collapse: separate;\n  border-spacing: 2px;\n  border-color: #310030;\n}\n\n/*\n* min.css for OpenJSCAD.org viewer\n*/\n\n.jscad-container {\n  margin: 5px 15px 5px 5px;\n  /* not inherited */\n  padding: 20px;\n  /* not inherited */\n  color: Black;\n  font-weight: bold;\n  font-family: Helvetica, Arial, Sans;\n  border: thin solid black;\n  min-width: 410px;\n}\n\n#header {\n  margin: 5px;\n  /* not inherited */\n  font-family: \"Anton\", sans-serif;\n  align-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n#viewerContext {\n  margin: 5px;\n  /* not inherited */\n  border: thin solid gray;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  background: white;\n  width: 400px;\n  height: 300px;\n  top: 0px;\n  bottom: 0px;\n}\n\ncanvas {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none gray;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  width: 100%;\n  height: 100%;\n  cursor: move;\n}\n\n#parametersdiv {\n  margin: 5px;\n  /* not inherited */\n  border: thin solid #c8c8c8;\n  border-radius: 1em;\n  padding: 10px;\n  background: white;\n  opacity: 0.8;\n}\n\n#parametersdiv table {\n  margin-bottom: 5px;\n  text-align: left;\n  font-size: 0.8em;\n  font-weight: normal;\n}\n\n#parametersdiv th {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none gray;\n  /* not inherited */\n  padding: 5px;\n  /* not inherited */\n  font-weight: bold;\n}\n\n#parametersdiv th.caption {\n  text-decoration: underline;\n}\n\n#parametersdiv td.caption {\n  text-align: right;\n  font-weight: bold;\n}\n\n#parametersdiv td {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none gray;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n}\n\n#parametersdiv input, #parametersdiv textarea, #parametersdiv select {\n  font-size: 0.9em;\n  background: #fea;\n  border: none;\n}\n\n#updateButton {\n  margin: 5px;\n  /* not inherited */\n  border: thin solid Black;\n  /* not inherited */\n  padding: 2px;\n  /* not inherited */\n  border-radius: 4px;\n  background: white;\n  margin-left: 1em;\n}\n\n#tail {\n  margin: 5px;\n  /* not inherited */\n}\n\n#busy {\n  vertical-align: middle;\n}\n\n/* openjscad.css, originally written by Joost Nieuwenhuijse\n*    few changes made by Rene K. Mueller for OpenSCAD.org\n*/\n\n#filedropzone {\n  border: 2px dashed #480063;\n  border-radius: 5px;\n  padding: 15px;\n  color: black;\n  width: 100%;\n  background: rgba(255, 255, 255, 0);\n  margin-top: 0.5em;\n}\n\n#filedropzone_empty {\n  text-align: center;\n  color: #888;\n}\n\n#filedropzone_filled {\n  color: black;\n  display: none;\n}\n\n#filebuttons {\n  /* float: right; */\n  margin-left: 2em;\n  display: inline;\n}\n\ncanvas {\n  cursor: move;\n}\n\n.downloadOutputFileLink {\n  padding: 2px;\n  padding-left: 8px;\n  padding-right: 8px;\n  border: 1px solid black;\n  border-radius: 4px;\n  /* css mess */\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  background: #d8f;\n  background: -moz-linear-gradient(top, #eaf, #c6f);\n  text-decoration: none;\n  color: black;\n  font-size: 0.9em;\n  font-weight: bold;\n  box-shadow: 0px 0px 8px black;\n}\n\n#parametersdiv {\n  /* display: inline-block;     ineffective since we do control in openjscad.js */\n  position: absolute;\n  bottom: 9em;\n  /* draggable via jQuery cannot move bottom: align, stick at the bottom (bug!!) */\n  left: 1em;\n  /* top: 2em;                if draggable, but must be left/top oriented, cannot be aligned bottom which looks nicer\n     left: 16em;\n   */\n  z-index: 4;\n  border: 1px solid #2c003a;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  /* css mess */\n  -webkit-border-radius: 5px;\n  margin: 5px 0px 5px 0px;\n  padding: 10px;\n  background: #f9d5ff;\n  /* rgba(255,255,255,0.7); */\n  opacity: 0.8;\n  /* box-shadow: 0px 0px 15px black;  no shadow, it would indicate moveable/dragable */\n  /* cursor: move;     moveable now */\n}\n\n#parametersdiv th {\n  text-align: left;\n  font-size: 1em;\n  font-weight: bold;\n}\n\n#parametersdiv td {\n  text-align: right;\n  font-size: 0.8em;\n}\n\n#parametersdiv input, #parametersdiv textarea, #parametersdiv select {\n  font-size: 0.9em;\n  background: #fea;\n  border: none;\n}\n\n#instantUpdate {\n  margin-left: 1em;\n}\n\n#instantUpdateLabel {\n  font-size: 0.9em;\n}\n\n#statusspan {\n  margin-right: 2em;\n}\n\n#statusbuttons {\n  float: right;\n}\n\n#selectdiv {\n  position: fixed;\n  top: 0.5em;\n  right: 0.5em;\n  z-index: 4;\n  background: transparent;\n  opacity: 0.8;\n  border: none;\n  display: inline;\n}\n\n#startRange {\n  margin: 2px;\n  padding: 2px;\n}\n\n#endRange {\n  margin: 2px;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkZW9zaW8zZC9DOlxcVXNlcnNcXGdnYWxpbmQxXFxjYWRlb3Npby9zcmNcXGFwcFxcY2FkZW9zaW8zZFxcY2FkZW9zaW8zZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FkZW9zaW8zZC9jYWRlb3NpbzNkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBQ0csV0FBQTtFQUF5QixrQkFBQTtFQUN6QixzQkFBQTtFQUF5QixrQkFBQTtFQUN6QixZQUFBO0VBQXlCLGtCQUFBO0VBQ3pCLGdDQUFBO0VBRUEsNEVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUVBOzJFQUFBO0VBRUEsZ0JBQUE7QUNBSjs7QURHQztFQUNHLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQztFQUNHLGNBQUE7QUNBSjs7QURHQztFQUNHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0M7RUFDQSxvQkFBQTtFQUVFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0YsY0FBQTtFQUNFLFFBQUE7RUFFQSxVQUFBO0VBQ0EsbUJBQUE7QUNGSDs7QURLQztFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0ZIOztBREtDO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNGSDs7QURLQztFQUNHLDhCQUFBO0VBQ0Esa0NBQUE7QUNGSjs7QURLQztFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNGOztHQUFBO0VBR0UscUNBQUE7QUNGSDs7QURLQztFQUNHLFdBQUE7RUFBeUIsa0JBQUE7RUFDekIsd0JBQUE7RUFBbUMsa0JBQUE7RUFDbkMsWUFBQTtFQUF5QixrQkFBQTtFQUV6QiwyRUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxRQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElDO0VBQ0csV0FBQTtFQUF3QixrQkFBQTtFQUN4Qix3QkFBQTtFQUFpQyxrQkFBQTtFQUNqQyxZQUFBO0VBQXdCLGtCQUFBO0VBRXhCLDJFQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQXFCLGdEQUFBO0FDQ3pCOztBREVDO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVDO0VBQ0cseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUM7RUFDRyxnQkFBQTtBQ0NKOztBREVDO0VBQ0csZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBQXdCLCtEQUFBO0FDQTVCOztBREdDO0VBQ0csVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFVBQUE7QUNBSjs7QURHQztFQUNHLHNCQUFBO0FDQUo7O0FER0M7RUFDRyxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdDO0VBQ0csaUJBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFFQSwwQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7QUNKSjs7QURPQztFQUNHLE9BQUE7QUNKSjs7QURPQztFQUNHLFlBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSko7O0FET0M7RUFDRyxrQkFBQTtFQUNBLFNBQUE7QUNKSjs7QURhQztFQUNHLGdCQUFBO0FDVko7O0FEYUM7RUFDRyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBRGFDO0VBQ0csZUFBQTtBQ1ZKOztBRGFDO0VBQ0csaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDVko7O0FEYUM7RUFDRyxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRGFDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQ1ZKOztBRGFDO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDVko7O0FEYUM7RUFDRyxpQkFBQTtFQUNBLGNBQUE7QUNWSjs7QURhQztFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDVko7O0FEYUM7RUFDRyxnQkFBQTtFQUNBLFdBQUE7QUNWSjs7QURhQztFQUNHLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNWSjs7QURhQztFQUNHLG1CQUFBO0FDVko7O0FEYUM7RUFDRyxxQkFBQTtBQ1ZKOztBRGFDO0VBQ0csV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNWSjs7QURnQkM7RUFDRyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDYko7O0FEZ0JDO0VBQ0csc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNiSjs7QURnQkM7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNiSDs7QURnQkM7RUFDRyxnQkFBQTtFQUNBLFdBQUE7QUNiSjs7QURnQkMsV0FBQTs7QUFFQTtFQUNHLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNkSjs7QURnQkM7RUFDRyxjQUFBO0FDYko7O0FEZUM7RUFDRyxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1pKOztBRGNDO0VBQ0csd0JBQUE7RUFDQSxrQkFBQTtBQ1hKOztBRGFDO0VBQ0csdUJBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBRFlDO0VBQ0cseUJBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFdDO0VBQ0csc0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFVDOzs7O0VBSUcsYUFBQTtBQ1BKOztBRFVDO0VBQ0csY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1BKOztBRFVDOztDQUFBOztBQUlEO0VBQ0ksd0JBQUE7RUFBMEIsa0JBQUE7RUFDMUIsYUFBQTtFQUFlLGtCQUFBO0VBQ2YsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDTko7O0FEU0U7RUFDRSxXQUFBO0VBQWEsa0JBQUE7RUFDYixnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFFFO0VBQ0UsV0FBQTtFQUFhLGtCQUFBO0VBQ2IsdUJBQUE7RUFBeUIsa0JBQUE7RUFDekIsWUFBQTtFQUFjLGtCQUFBO0VBRWQsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFFBQUE7RUFDQSxXQUFBO0FDSko7O0FET0U7RUFDRSxXQUFBO0VBQWEsa0JBQUE7RUFDYixxQkFBQTtFQUF1QixrQkFBQTtFQUN2QixZQUFBO0VBQWMsa0JBQUE7RUFFZCxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUNISjs7QURNRTtFQUNFLFdBQUE7RUFBYSxrQkFBQTtFQUNiLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9FO0VBQ0UsV0FBQTtFQUFjLGtCQUFBO0VBQ2QscUJBQUE7RUFBd0Isa0JBQUE7RUFDeEIsWUFBQTtFQUFjLGtCQUFBO0VBRWQsaUJBQUE7QUNGSjs7QURLRTtFQUNFLDBCQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0VBQWMsa0JBQUE7RUFDZCxxQkFBQTtFQUF3QixrQkFBQTtFQUN4QixZQUFBO0VBQWMsa0JBQUE7QUNDbEI7O0FERUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUFjLGtCQUFBO0VBQ2Qsd0JBQUE7RUFBMkIsa0JBQUE7RUFDM0IsWUFBQTtFQUFjLGtCQUFBO0VBQ2Qsa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0FDR0o7O0FEQUU7RUFDRSxXQUFBO0VBQWEsa0JBQUE7QUNJakI7O0FEREU7RUFDRSxzQkFBQTtBQ0lKOztBREFFOztDQUFBOztBQUlGO0VBQ0ksMEJBQUE7RUFHQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFBcUIsYUFBQTtFQUNyQiwwQkFBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7RUFFQSxpREFBQTtFQUVBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ0RMOztBRElFO0VBQ0UsK0VBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFBNEIsZ0ZBQUE7RUFDNUIsU0FBQTtFQUNBOztJQUFBO0VBSUEsVUFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUE0QixhQUFBO0VBQzVCLDBCQUFBO0VBRUEsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFBZ0MsMkJBQUE7RUFDaEMsWUFBQTtFQUVBLG9GQUFBO0VBRUEsbUNBQUE7QUNKSjs7QURNRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSEo7O0FES0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElFO0VBQ0csZ0JBQUE7QUNETDs7QURHRTtFQUNHLGdCQUFBO0FDQUw7O0FES0U7RUFDRyxpQkFBQTtBQ0ZMOztBRElFO0VBQ0csWUFBQTtBQ0RMOztBRElFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRko7O0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NhZGVvc2lvM2QvY2FkZW9zaW8zZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuIGh0bWwsIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwcHg7ICAgICAgICAgICAgIC8qIG5vdCBpbmhlcml0ZWQgKi9cclxuICAgIGJvcmRlcjogMHB4IG5vbmUgYmxhY2s7ICAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgICBwYWRkaW5nOiAwcHg7ICAgICAgICAgICAgLyogbm90IGluaGVyaXRlZCAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XHJcbiBcclxuICAgIC8qIGVuc3VyZSB0aGF0IHRoZSBkb2N1bWVudCB1c2VzIHRoZSB3aG9sZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBicm93c2VyICovXHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiBcclxuICAgIC8qIHZpZXdlci9jYW52YXMgaXMgZnVsbCBzY3JlZW4gc28gd2hlbiB3aW5kb3dcclxuICAgICAgIGlzIHJlc2l6ZWQgYWxsIHJlbWFpbnMgaW50YWN0LCBidXQgd2UgbWFrZSBzdXJlIG5vIHNjcm9sbGJhciBhcHBlYXJzICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gfVxyXG4gXHJcbiBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gfVxyXG4gXHJcbiBhOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICM2MDIwYTA7XHJcbiB9XHJcbiBcclxuICNoZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxZW07XHJcbiAgICBsZWZ0OiAxZW07XHJcbiAgICB6LWluZGV4OiAyMDtcclxuIH1cclxuIFxyXG4gI2VkaXRGcmFtZSB7XHJcbiAvKiAgZGlzcGxheTogbm9uZTsgKi9cclxuIFxyXG4gICBtYXJnaW46IDA7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOiAwO1xyXG4gICBib3R0b206IDA7XHJcbiAvKiAgbGVmdDogMDsgKi9cclxuICAgcmlnaHQ6IDA7XHJcbiBcclxuICAgd2lkdGg6IDQwJTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuIH1cclxuIFxyXG4gI2VkaXRIYW5kbGUge1xyXG4gICBsZWZ0OiAtMjVweDtcclxuICAgdG9wOiA0NSU7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgei1pbmRleDogNjtcclxuICAgb3BhY2l0eTogMC45O1xyXG4gfVxyXG4gXHJcbiAjZWRpdEZyYW1lIHtcclxuICAgdHJhbnNpdGlvbjogd2lkdGggMC40cztcclxuICAgLW8tdHJhbnNpdGlvbjogd2lkdGggMC40cztcclxuICAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xyXG4gICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNHM7XHJcbiB9XHJcbiBcclxuIC5hY2VfZ3V0dGVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDU2LCAwLCA2Nik7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAjZWRpdG9yIHtcclxuICAgbWFyZ2luOiBpbmhlcml0O1xyXG4gICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgdG9wOiAgICBpbmhlcml0O1xyXG4gICBib3R0b206IGluaGVyaXQ7XHJcbiAgIGxlZnQ6ICAgaW5oZXJpdDtcclxuICAgcmlnaHQ6ICBpbmhlcml0O1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgei1pbmRleDogNjtcclxuIC8qXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICovXHJcbiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xNSk7XHJcbiB9XHJcbiBcclxuICN2aWV3ZXJDb250ZXh0IHtcclxuICAgIG1hcmdpbjogMHB4OyAgICAgICAgICAgICAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgICBib3JkZXI6IDBweCBub25lIHJnYig3NSwgMCwgMTEwKTsgIC8qIG5vdCBpbmhlcml0ZWQgKi9cclxuICAgIHBhZGRpbmc6IDBweDsgICAgICAgICAgICAvKiBub3QgaW5oZXJpdGVkICovXHJcbiBcclxuICAgIC8qIGVuc3VyZSB0aGF0IHRoZSBjYW52YXMgdXNlcyB0aGUgd2hvbGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgKi9cclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjksIDE4NSwgMjUzKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gXHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gfVxyXG4gXHJcbiBjYW52YXMge1xyXG4gICAgbWFyZ2luOiAwcHg7ICAgICAgICAgICAgLyogbm90IGluaGVyaXRlZCAqL1xyXG4gICAgYm9yZGVyOiAwcHggbm9uZSByZ2IoOTIsIDAsIDkwKTsgLyogbm90IGluaGVyaXRlZCAqL1xyXG4gICAgcGFkZGluZzogMHB4OyAgICAgICAgICAgLyogbm90IGluaGVyaXRlZCAqL1xyXG4gXHJcbiAgICAvKiBlbnN1cmUgdGhhdCB0aGUgY2FudmFzIHVzZXMgdGhlIHdob2xlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGRvY3VtZW50ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuIFxyXG4gICAgY3Vyc29yOiBtb3ZlOyAgICAgICAgLyogc2hvdyB0aGF0IHdlIGNhbiBjaGFuZ2Ugb3JpZW50YXRpb24gb2YgdmlldyAqL1xyXG4gfVxyXG4gXHJcbiAjYWJvdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggYmxhY2s7XHJcbiAgICBjb2xvcjogIzQwNDA0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuIH1cclxuIFxyXG4gLm9rQnV0dG9uIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuIH1cclxuIFxyXG4gLm9rQnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiB9XHJcbiBcclxuICNmb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiBcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjVlbTtcclxuICAgIGJvdHRvbTogMC41ZW07XHJcbiBcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIC1tb3otb3BhY2l0eTogMC41OyAgICAgIC8qIGNzcyBtZXNzICh3aHkgZG8gaXQgc2ltcGxlLCB3aGVuIHdlIGNhbiBkbyBpdCBjb21wbGljYXRlISkgKi9cclxuIH1cclxuIFxyXG4gI3RhaWwge1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMWVtO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiB9XHJcbiBcclxuICNidXN5IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiB9XHJcbiBcclxuICNtZW51LCAjbWVudSBuYXYgYSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiB9XHJcbiBcclxuICNtZW51IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gXHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAtbW96LW9wYWNpdHk6IDAuODtcclxuIFxyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogNTtcclxuIFxyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuIFxyXG4gICAgYm94LXNoYWRvdzogNHB4IDAgMTBweCByZ2JhKDAsMCwwLDAuMjUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiA0cHggMCAxMHB4IHJnYmEoMCwwLDAsMC4yNSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCAwIDEwcHggcmdiYSgwLDAsMCwwLjI1KTtcclxuIH1cclxuIFxyXG4gI21lbnUge1xyXG4gICAgbGVmdDogMDtcclxuIH1cclxuIFxyXG4gI21lbnVIYW5kbGUge1xyXG4gICAgcmlnaHQ6IC0yNXB4O1xyXG4gICAgdG9wOiA0NSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gfVxyXG4gXHJcbiAjbWVudSBuYXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gfVxyXG4gXHJcbiAjbWVudSBuYXYgLm5hdmxpbmsge1xyXG4gfVxyXG4gXHJcbiAjbWVudSBuYXYgLm5hdmxpbms6aG92ZXIge1xyXG4gfVxyXG4gXHJcbiAjbWVudSAjZXhhbXBsZXMge1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuIH1cclxuIFxyXG4gI21lbnUgI2V4YW1wbGVzIC5uZXdFeGFtcGxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gfVxyXG4gXHJcbiAjbWVudSAjZXhhbXBsZXMsICNtZW51ICNleGFtcGxlcyBhIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuIH1cclxuIFxyXG4gI21lbnUgLmluZm8ge1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiB9XHJcbiBcclxuICNtZW51IC5pbmZvIHRkIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiB9XHJcbiBcclxuIC5pbmZvIC5pbmZvVmlldyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xyXG4gfVxyXG4gXHJcbiAuaW5mbyAuaW5mb09wZXJhdGlvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNjAyMDgwO1xyXG4gfVxyXG4gXHJcbiAuaW5mbyAuaW5mb0tleSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gfVxyXG4gXHJcbiAjbWVudVZlcnNpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gfVxyXG4gXHJcbiAubWVudVN1YkluZm8ge1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gfVxyXG4gXHJcbiAjZXhhbXBsZXMge1xyXG4gICAgLyogd2lkdGg6IDYwZW07ICovXHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHotaW5kZXg6IDEyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGU4ZmY7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjODg4O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM4NDk7XHJcbiB9XHJcbiBcclxuICNleGFtcGxlcyB0ZCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gfVxyXG4gXHJcbiAjZXhhbXBsZXMgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gfVxyXG4gXHJcbiAjZXhhbXBsZXNIYW5kbGUge1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuIH1cclxuIFxyXG4gLmV4YW1wbGVzU2VwYXJhdG9yIHtcclxuIH1cclxuIFxyXG4gI29wdGlvbnMge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhlOGZmO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzg4ODtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM4NDk7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gfVxyXG4gXHJcbiAub3B0aW9uR3JvdXAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gfVxyXG4gXHJcbiAub3B0aW9uR3JvdXAgaW5wdXQsIC5vcHRpb25Hcm91cCBzZWxlY3Qge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmVhO1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiB9XHJcbiBcclxuIC5vcHRpb25JbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogIzg4ODtcclxuIH1cclxuIFxyXG4gLyogYXJyb3dzICovXHJcbiBcclxuIC5zaGlmdC1zY2VuZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogNXB4IGRvdHRlZCAjOTk5O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIG1hcmdpbi10b3A6IC04MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4gLnNoaWZ0LXNjZW5lLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuIH1cclxuIC5hcnJvdyB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXI6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiB9XHJcbiAuYXJyb3ctbGVmdCB7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICM2NjY7XHJcbiAgICBtYXJnaW4tbGVmdDogLTkwcHg7XHJcbiB9XHJcbiAuYXJyb3ctcmlnaHQge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM2NjY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiB9XHJcbiAuYXJyb3ctdG9wIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2NjY7XHJcbiAgICBtYXJnaW4tdG9wOiAtOTBweDtcclxuIH1cclxuIC5hcnJvdy1ib3R0b20ge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzY2NjtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gfVxyXG4gLnNoaWZ0LXZlcnRpY2FsIC5hcnJvdy1sZWZ0LFxyXG4gLnNoaWZ0LXZlcnRpY2FsIC5hcnJvdy1yaWdodCxcclxuIC5zaGlmdC1ob3Jpem9udGFsIC5hcnJvdy10b3AsXHJcbiAuc2hpZnQtaG9yaXpvbnRhbCAuYXJyb3ctYm90dG9tIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiBcclxuIHRhYmxlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig0OSwgMCwgNDgpO1xyXG4gfVxyXG5cclxuIC8qXHJcbiAqIG1pbi5jc3MgZm9yIE9wZW5KU0NBRC5vcmcgdmlld2VyXHJcbiAqL1xyXG5cclxuLmpzY2FkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDVweCAxNXB4IDVweCA1cHg7IC8qIG5vdCBpbmhlcml0ZWQgKi9cclxuICAgIHBhZGRpbmc6IDIwcHg7IC8qIG5vdCBpbmhlcml0ZWQgKi9cclxuICAgIGNvbG9yOiBCbGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIFNhbnM7XHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XHJcbiAgICBtaW4td2lkdGg6IDQxMHB4O1xyXG4gIH1cclxuICBcclxuICAjaGVhZGVyIHtcclxuICAgIG1hcmdpbjogNXB4OyAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICN2aWV3ZXJDb250ZXh0IHtcclxuICAgIG1hcmdpbjogNXB4OyAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgICBib3JkZXI6IHRoaW4gc29saWQgZ3JheTsgLyogbm90IGluaGVyaXRlZCAqL1xyXG4gICAgcGFkZGluZzogMHB4OyAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgXHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBcclxuICBjYW52YXMgeyBcclxuICAgIG1hcmdpbjogMHB4OyAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgICBib3JkZXI6IDBweCBub25lIGdyYXk7IC8qIG5vdCBpbmhlcml0ZWQgKi9cclxuICAgIHBhZGRpbmc6IDBweDsgLyogbm90IGluaGVyaXRlZCAqL1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgICBjdXJzb3I6IG1vdmU7IFxyXG4gIH1cclxuICBcclxuICAjcGFyYW1ldGVyc2RpdiB7XHJcbiAgICBtYXJnaW46IDVweDsgLyogbm90IGluaGVyaXRlZCAqL1xyXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIHJnYigyMDAsMjAwLDIwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07ICAgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgXHJcbiAgI3BhcmFtZXRlcnNkaXYgdGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAjcGFyYW1ldGVyc2RpdiB0aCB7XHJcbiAgICBtYXJnaW46ICAwcHg7IC8qIG5vdCBpbmhlcml0ZWQgKi9cclxuICAgIGJvcmRlcjogIDBweCBub25lIGdyYXk7IC8qIG5vdCBpbmhlcml0ZWQgKi9cclxuICAgIHBhZGRpbmc6IDVweDsgLyogbm90IGluaGVyaXRlZCAqL1xyXG4gIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gICNwYXJhbWV0ZXJzZGl2IHRoLmNhcHRpb24ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gICNwYXJhbWV0ZXJzZGl2IHRkLmNhcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgI3BhcmFtZXRlcnNkaXYgdGQge1xyXG4gICAgbWFyZ2luOiAgMHB4OyAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgICBib3JkZXI6ICAwcHggbm9uZSBncmF5OyAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgICBwYWRkaW5nOiAwcHg7IC8qIG5vdCBpbmhlcml0ZWQgKi9cclxuICB9XHJcbiAgXHJcbiAgI3BhcmFtZXRlcnNkaXYgaW5wdXQsICNwYXJhbWV0ZXJzZGl2IHRleHRhcmVhLCAjcGFyYW1ldGVyc2RpdiBzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZWE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICN1cGRhdGVCdXR0b24ge1xyXG4gICAgbWFyZ2luOiAgNXB4OyAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgICBib3JkZXI6ICB0aGluIHNvbGlkIEJsYWNrOyAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgICBwYWRkaW5nOiAycHg7IC8qIG5vdCBpbmhlcml0ZWQgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICB9XHJcbiAgXHJcbiAgI3RhaWwgeyBcclxuICAgIG1hcmdpbjogNXB4OyAvKiBub3QgaW5oZXJpdGVkICovXHJcbiAgfVxyXG4gIFxyXG4gICNidXN5IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAvKiBvcGVuanNjYWQuY3NzLCBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgSm9vc3QgTmlldXdlbmh1aWpzZVxyXG4gKiAgICBmZXcgY2hhbmdlcyBtYWRlIGJ5IFJlbmUgSy4gTXVlbGxlciBmb3IgT3BlblNDQUQub3JnXHJcbiAqL1xyXG5cclxuI2ZpbGVkcm9wem9uZSB7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiKDcyLCAwLCA5OSk7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgfVxyXG4gIFxyXG4gICNmaWxlZHJvcHpvbmVfZW1wdHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgfVxyXG4gIFxyXG4gICNmaWxlZHJvcHpvbmVfZmlsbGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICNmaWxlYnV0dG9ucyB7XHJcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICBcclxuICBjYW52YXMgeyBcclxuICAgIGN1cnNvcjogbW92ZTsgXHJcbiAgfVxyXG4gIFxyXG4gIC5kb3dubG9hZE91dHB1dEZpbGVMaW5rIHtcclxuICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIFxyXG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDsgIC8qIGNzcyBtZXNzICovXHJcbiAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgXHJcbiAgICAgYmFja2dyb3VuZDogI2Q4ZjtcclxuICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNlYWYpLCB0bygjYzZmKSk7XHJcbiAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2VhZiwgICNjNmYpO1xyXG4gIFxyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgI3BhcmFtZXRlcnNkaXYge1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICAgaW5lZmZlY3RpdmUgc2luY2Ugd2UgZG8gY29udHJvbCBpbiBvcGVuanNjYWQuanMgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICBcclxuICBcclxuICAgIGJvdHRvbTogOWVtOyAgICAgICAgICAgICAgICAvKiBkcmFnZ2FibGUgdmlhIGpRdWVyeSBjYW5ub3QgbW92ZSBib3R0b206IGFsaWduLCBzdGljayBhdCB0aGUgYm90dG9tIChidWchISkgKi9cclxuICAgIGxlZnQ6IDFlbTtcclxuICAgIC8qIHRvcDogMmVtOyAgICAgICAgICAgICAgICBpZiBkcmFnZ2FibGUsIGJ1dCBtdXN0IGJlIGxlZnQvdG9wIG9yaWVudGVkLCBjYW5ub3QgYmUgYWxpZ25lZCBib3R0b20gd2hpY2ggbG9va3MgbmljZXJcclxuICAgICAgIGxlZnQ6IDE2ZW07XHJcbiAgICAgKi9cclxuICAgIFxyXG4gICAgei1pbmRleDogNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig0NCwgMCwgNTgpO1xyXG4gICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgICAgIFxyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7ICAgIC8qIGNzcyBtZXNzICovXHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBcclxuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDksIDIxMywgMjU1KTsgLyogcmdiYSgyNTUsMjU1LDI1NSwwLjcpOyAqL1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgXHJcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggYmxhY2s7ICBubyBzaGFkb3csIGl0IHdvdWxkIGluZGljYXRlIG1vdmVhYmxlL2RyYWdhYmxlICovXHJcbiAgICBcclxuICAgIC8qIGN1cnNvcjogbW92ZTsgICAgIG1vdmVhYmxlIG5vdyAqL1xyXG4gIH1cclxuICAjcGFyYW1ldGVyc2RpdiB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgI3BhcmFtZXRlcnNkaXYgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gIH1cclxuICAjcGFyYW1ldGVyc2RpdiBpbnB1dCwgI3BhcmFtZXRlcnNkaXYgdGV4dGFyZWEsICNwYXJhbWV0ZXJzZGl2IHNlbGVjdCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZlYTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI2luc3RhbnRVcGRhdGUge1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgfVxyXG4gICNpbnN0YW50VXBkYXRlTGFiZWwge1xyXG4gICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG4gIFxyXG4gICNzdGF0dXNkaXYge1xyXG4gIH1cclxuICAjc3RhdHVzc3BhbiB7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgfVxyXG4gICNzdGF0dXNidXR0b25zIHtcclxuICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gICNzZWxlY3RkaXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwLjVlbTtcclxuICAgIHJpZ2h0OiAwLjVlbTtcclxuICBcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbiAgI3N0YXJ0UmFuZ2Uge1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgfVxyXG4gICNlbmRSYW5nZSB7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgIiwiaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGJvcmRlcjogMHB4IG5vbmUgYmxhY2s7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGZvbnQtZmFtaWx5OiBcIkFudG9uXCIsIHNhbnMtc2VyaWY7XG4gIC8qIGVuc3VyZSB0aGF0IHRoZSBkb2N1bWVudCB1c2VzIHRoZSB3aG9sZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBicm93c2VyICovXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLyogdmlld2VyL2NhbnZhcyBpcyBmdWxsIHNjcmVlbiBzbyB3aGVuIHdpbmRvd1xuICAgICBpcyByZXNpemVkIGFsbCByZW1haW5zIGludGFjdCwgYnV0IHdlIG1ha2Ugc3VyZSBubyBzY3JvbGxiYXIgYXBwZWFycyAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYTp2aXNpdGVkIHtcbiAgY29sb3I6ICM2MDIwYTA7XG59XG5cbiNoZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xuICBsZWZ0OiAxZW07XG4gIHotaW5kZXg6IDIwO1xufVxuXG4jZWRpdEZyYW1lIHtcbiAgLyogIGRpc3BsYXk6IG5vbmU7ICovXG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgLyogIGxlZnQ6IDA7ICovXG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDAlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4jZWRpdEhhbmRsZSB7XG4gIGxlZnQ6IC0yNXB4O1xuICB0b3A6IDQ1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA2O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbiNlZGl0RnJhbWUge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDAuNHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cztcbn1cblxuLmFjZV9ndXR0ZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzODAwNDI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNlZGl0b3Ige1xuICBtYXJnaW46IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICB0b3A6IGluaGVyaXQ7XG4gIGJvdHRvbTogaW5oZXJpdDtcbiAgbGVmdDogaW5oZXJpdDtcbiAgcmlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA2O1xuICAvKlxuICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbn1cblxuI3ZpZXdlckNvbnRleHQge1xuICBtYXJnaW46IDBweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBib3JkZXI6IDBweCBub25lICM0YjAwNmU7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIC8qIGVuc3VyZSB0aGF0IHRoZSBjYW52YXMgdXNlcyB0aGUgd2hvbGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgKi9cbiAgYmFja2dyb3VuZDogI2U1YjlmZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5jYW52YXMge1xuICBtYXJnaW46IDBweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBib3JkZXI6IDBweCBub25lICM1YzAwNWE7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIC8qIGVuc3VyZSB0aGF0IHRoZSBjYW52YXMgdXNlcyB0aGUgd2hvbGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBtb3ZlO1xuICAvKiBzaG93IHRoYXQgd2UgY2FuIGNoYW5nZSBvcmllbnRhdGlvbiBvZiB2aWV3ICovXG59XG5cbiNhYm91dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwJTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDEwJTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCBibGFjaztcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5va0J1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLm9rQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuI2Zvb3RlciB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xuICBib3R0b206IDAuNWVtO1xuICBvcGFjaXR5OiAwLjU7XG4gIC1tb3otb3BhY2l0eTogMC41O1xuICAvKiBjc3MgbWVzcyAod2h5IGRvIGl0IHNpbXBsZSwgd2hlbiB3ZSBjYW4gZG8gaXQgY29tcGxpY2F0ZSEpICovXG59XG5cbiN0YWlsIHtcbiAgei1pbmRleDogNDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFlbTtcbiAgbWFyZ2luOiAxZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aWR0aDogOTUlO1xufVxuXG4jYnVzeSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbiNtZW51LCAjbWVudSBuYXYgYSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuI21lbnUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xuICAtbW96LW9wYWNpdHk6IDAuODtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNoYWRvdzogNHB4IDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDRweCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbiNtZW51IHtcbiAgbGVmdDogMDtcbn1cblxuI21lbnVIYW5kbGUge1xuICByaWdodDogLTI1cHg7XG4gIHRvcDogNDUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDY7XG59XG5cbiNtZW51IG5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MHB4O1xufVxuXG4jbWVudSAjZXhhbXBsZXMge1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4jbWVudSAjZXhhbXBsZXMgLm5ld0V4YW1wbGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuI21lbnUgI2V4YW1wbGVzLCAjbWVudSAjZXhhbXBsZXMgYSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuI21lbnUgLmluZm8ge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbiNtZW51IC5pbmZvIHRkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG5cbi5pbmZvIC5pbmZvVmlldyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDQ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pbmZvIC5pbmZvT3BlcmF0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjAyMDgwO1xufVxuXG4uaW5mbyAuaW5mb0tleSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuI21lbnVWZXJzaW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBjb2xvcjogIzY2Njtcbn1cblxuLm1lbnVTdWJJbmZvIHtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbiNleGFtcGxlcyB7XG4gIC8qIHdpZHRoOiA2MGVtOyAqL1xuICB3aWR0aDogYXV0bztcbiAgei1pbmRleDogMTI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2Y4ZThmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzg4ODtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjODQ5O1xufVxuXG4jZXhhbXBsZXMgdGQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4jZXhhbXBsZXMgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbiNleGFtcGxlc0hhbmRsZSB7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiA0NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbiNvcHRpb25zIHtcbiAgd2lkdGg6IGF1dG87XG4gIHotaW5kZXg6IDEyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmOGU4ZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICM4ODg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjODQ5O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ub3B0aW9uR3JvdXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW46IDAuNWVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm9wdGlvbkdyb3VwIGlucHV0LCAub3B0aW9uR3JvdXAgc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogI2ZlYTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ub3B0aW9uSW5mbyB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjODg4O1xufVxuXG4vKiBhcnJvd3MgKi9cbi5zaGlmdC1zY2VuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDVweCBkb3R0ZWQgIzk5OTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtYXJnaW4tdG9wOiAtODBweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBvcGFjaXR5OiAwLjg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGlmdC1zY2VuZS5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFycm93IHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlcjogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYXJyb3ctbGVmdCB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IC05MHB4O1xufVxuXG4uYXJyb3ctcmlnaHQge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuXG4uYXJyb3ctdG9wIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzY2NjtcbiAgbWFyZ2luLXRvcDogLTkwcHg7XG59XG5cbi5hcnJvdy1ib3R0b20ge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNjY2O1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuLnNoaWZ0LXZlcnRpY2FsIC5hcnJvdy1sZWZ0LFxuLnNoaWZ0LXZlcnRpY2FsIC5hcnJvdy1yaWdodCxcbi5zaGlmdC1ob3Jpem9udGFsIC5hcnJvdy10b3AsXG4uc2hpZnQtaG9yaXpvbnRhbCAuYXJyb3ctYm90dG9tIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjMzEwMDMwO1xufVxuXG4vKlxuKiBtaW4uY3NzIGZvciBPcGVuSlNDQUQub3JnIHZpZXdlclxuKi9cbi5qc2NhZC1jb250YWluZXIge1xuICBtYXJnaW46IDVweCAxNXB4IDVweCA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBjb2xvcjogQmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgU2FucztcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGJsYWNrO1xuICBtaW4td2lkdGg6IDQxMHB4O1xufVxuXG4jaGVhZGVyIHtcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc2Fucy1zZXJpZjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN2aWV3ZXJDb250ZXh0IHtcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgYm9yZGVyOiB0aGluIHNvbGlkIGdyYXk7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbn1cblxuY2FudmFzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgYm9yZGVyOiAwcHggbm9uZSBncmF5O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIHBhZGRpbmc6IDBweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbiNwYXJhbWV0ZXJzZGl2IHtcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgYm9yZGVyOiB0aGluIHNvbGlkICNjOGM4Yzg7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuI3BhcmFtZXRlcnNkaXYgdGFibGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbiNwYXJhbWV0ZXJzZGl2IHRoIHtcbiAgbWFyZ2luOiAwcHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgYm9yZGVyOiAwcHggbm9uZSBncmF5O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIHBhZGRpbmc6IDVweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3BhcmFtZXRlcnNkaXYgdGguY2FwdGlvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jcGFyYW1ldGVyc2RpdiB0ZC5jYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jcGFyYW1ldGVyc2RpdiB0ZCB7XG4gIG1hcmdpbjogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGJvcmRlcjogMHB4IG5vbmUgZ3JheTtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBwYWRkaW5nOiAwcHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbn1cblxuI3BhcmFtZXRlcnNkaXYgaW5wdXQsICNwYXJhbWV0ZXJzZGl2IHRleHRhcmVhLCAjcGFyYW1ldGVyc2RpdiBzZWxlY3Qge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBiYWNrZ3JvdW5kOiAjZmVhO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiN1cGRhdGVCdXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBib3JkZXI6IHRoaW4gc29saWQgQmxhY2s7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMnB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbiN0YWlsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbn1cblxuI2J1c3kge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiBvcGVuanNjYWQuY3NzLCBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgSm9vc3QgTmlldXdlbmh1aWpzZVxuKiAgICBmZXcgY2hhbmdlcyBtYWRlIGJ5IFJlbmUgSy4gTXVlbGxlciBmb3IgT3BlblNDQUQub3JnXG4qL1xuI2ZpbGVkcm9wem9uZSB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjNDgwMDYzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbiNmaWxlZHJvcHpvbmVfZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4jZmlsZWRyb3B6b25lX2ZpbGxlZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2ZpbGVidXR0b25zIHtcbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICBtYXJnaW4tbGVmdDogMmVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmNhbnZhcyB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmRvd25sb2FkT3V0cHV0RmlsZUxpbmsge1xuICBwYWRkaW5nOiAycHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8qIGNzcyBtZXNzICovXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2Q4ZjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZWFmKSwgdG8oI2M2ZikpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYWYsICNjNmYpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IGJsYWNrO1xufVxuXG4jcGFyYW1ldGVyc2RpdiB7XG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgIGluZWZmZWN0aXZlIHNpbmNlIHdlIGRvIGNvbnRyb2wgaW4gb3BlbmpzY2FkLmpzICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA5ZW07XG4gIC8qIGRyYWdnYWJsZSB2aWEgalF1ZXJ5IGNhbm5vdCBtb3ZlIGJvdHRvbTogYWxpZ24sIHN0aWNrIGF0IHRoZSBib3R0b20gKGJ1ZyEhKSAqL1xuICBsZWZ0OiAxZW07XG4gIC8qIHRvcDogMmVtOyAgICAgICAgICAgICAgICBpZiBkcmFnZ2FibGUsIGJ1dCBtdXN0IGJlIGxlZnQvdG9wIG9yaWVudGVkLCBjYW5ub3QgYmUgYWxpZ25lZCBib3R0b20gd2hpY2ggbG9va3MgbmljZXJcbiAgICAgbGVmdDogMTZlbTtcbiAgICovXG4gIHotaW5kZXg6IDQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYzAwM2E7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIGNzcyBtZXNzICovXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2Y5ZDVmZjtcbiAgLyogcmdiYSgyNTUsMjU1LDI1NSwwLjcpOyAqL1xuICBvcGFjaXR5OiAwLjg7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCBibGFjazsgIG5vIHNoYWRvdywgaXQgd291bGQgaW5kaWNhdGUgbW92ZWFibGUvZHJhZ2FibGUgKi9cbiAgLyogY3Vyc29yOiBtb3ZlOyAgICAgbW92ZWFibGUgbm93ICovXG59XG5cbiNwYXJhbWV0ZXJzZGl2IHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jcGFyYW1ldGVyc2RpdiB0ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4jcGFyYW1ldGVyc2RpdiBpbnB1dCwgI3BhcmFtZXRlcnNkaXYgdGV4dGFyZWEsICNwYXJhbWV0ZXJzZGl2IHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJhY2tncm91bmQ6ICNmZWE7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2luc3RhbnRVcGRhdGUge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4jaW5zdGFudFVwZGF0ZUxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuI3N0YXR1c3NwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuI3N0YXR1c2J1dHRvbnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNzZWxlY3RkaXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMC41ZW07XG4gIHJpZ2h0OiAwLjVlbTtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDAuODtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNzdGFydFJhbmdlIHtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuI2VuZFJhbmdlIHtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/cadeosio3d/cadeosio3d.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/cadeosio3d/cadeosio3d.component.ts ***!
          \****************************************************/
        /*! exports provided: Cadeosio3dComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cadeosio3dComponent", function () { return Cadeosio3dComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Cadeosio3dComponent = /** @class */ (function () {
                function Cadeosio3dComponent() {
                }
                Cadeosio3dComponent.prototype.ngOnInit = function () {
                };
                return Cadeosio3dComponent;
            }());
            Cadeosio3dComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cadeosio3d',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cadeosio3d.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadeosio3d/cadeosio3d.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cadeosio3d.component.scss */ "./src/app/cadeosio3d/cadeosio3d.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], Cadeosio3dComponent);
            /***/ 
        }),
        /***/ "./src/app/cadeosio3d/cadeosio3d.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/cadeosio3d/cadeosio3d.module.ts ***!
          \*************************************************/
        /*! exports provided: Cadeosio3dModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cadeosio3dModule", function () { return Cadeosio3dModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _cadeosio3d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadeosio3d.component */ "./src/app/cadeosio3d/cadeosio3d.component.ts");
            /* harmony import */ var _cadeosio3d_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadeosio3d-routing.module */ "./src/app/cadeosio3d/cadeosio3d-routing.module.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            var Cadeosio3dModule = /** @class */ (function () {
                function Cadeosio3dModule() {
                }
                return Cadeosio3dModule;
            }());
            Cadeosio3dModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _cadeosio3d_routing_module__WEBPACK_IMPORTED_MODULE_4__["Cadeosio3dRoutingModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                    ],
                    declarations: [_cadeosio3d_component__WEBPACK_IMPORTED_MODULE_3__["Cadeosio3dComponent"]]
                })
            ], Cadeosio3dModule);
            /***/ 
        }),
        /***/ "./src/app/exchanges/exchanges-routing.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/exchanges/exchanges-routing.module.ts ***!
          \*******************************************************/
        /*! exports provided: ExchangesRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesRoutingModule", function () { return ExchangesRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _exchanges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchanges.component */ "./src/app/exchanges/exchanges.component.ts");
            var ExchangesRoutingModule = /** @class */ (function () {
                function ExchangesRoutingModule() {
                }
                return ExchangesRoutingModule;
            }());
            ExchangesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                            { path: 'exchanges', component: _exchanges_component__WEBPACK_IMPORTED_MODULE_3__["ExchangesComponent"] }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], ExchangesRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/exchanges/exchanges.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/exchanges/exchanges.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-button {\n  white-space: normal !important;\n}\n\nvideo {\n  max-width: 100%;\n}\n\nbutton:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjaGFuZ2VzL0M6XFxVc2Vyc1xcZ2dhbGluZDFcXGNhZGVvc2lvL3NyY1xcYXBwXFxleGNoYW5nZXNcXGV4Y2hhbmdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhjaGFuZ2VzL2V4Y2hhbmdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9leGNoYW5nZXMvZXhjaGFuZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1idXR0b24ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICB2aWRlbyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAiLCIubWF0LWJ1dHRvbiB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/exchanges/exchanges.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/exchanges/exchanges.component.ts ***!
          \**************************************************/
        /*! exports provided: ExchangesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesComponent", function () { return ExchangesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ExchangesComponent = /** @class */ (function () {
                function ExchangesComponent() {
                }
                ExchangesComponent.prototype.ngOnInit = function () {
                };
                return ExchangesComponent;
            }());
            ExchangesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-exchanges',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exchanges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exchanges/exchanges.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exchanges.component.scss */ "./src/app/exchanges/exchanges.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ExchangesComponent);
            /***/ 
        }),
        /***/ "./src/app/exchanges/exchanges.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/exchanges/exchanges.module.ts ***!
          \***********************************************/
        /*! exports provided: ExchangesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesModule", function () { return ExchangesModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _exchanges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchanges.component */ "./src/app/exchanges/exchanges.component.ts");
            /* harmony import */ var _exchanges_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exchanges-routing.module */ "./src/app/exchanges/exchanges-routing.module.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            var ExchangesModule = /** @class */ (function () {
                function ExchangesModule() {
                }
                return ExchangesModule;
            }());
            ExchangesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _exchanges_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExchangesRoutingModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"]
                    ],
                    declarations: [_exchanges_component__WEBPACK_IMPORTED_MODULE_3__["ExchangesComponent"]]
                })
            ], ExchangesModule);
            /***/ 
        }),
        /***/ "./src/app/firebase.config.ts": 
        /*!************************************!*\
          !*** ./src/app/firebase.config.ts ***!
          \************************************/
        /*! exports provided: firebaseKey */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseKey", function () { return firebaseKey; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var firebaseKey = {
                apiKey: 'AIzaSyAF4ENpoY_9Dyaj6pQez2WnxrWmpGBJD98',
                authDomain: 'cadeosio.firebaseapp.com',
                databaseURL: 'https://cadeosio.firebaseio.com',
                projectId: 'cadeosio',
                storageBucket: 'cadeosio.appspot.com',
                messagingSenderId: '260992003477',
                appId: '1:260992003477:web:912c91001d96d6053b9a9c',
                measurementId: 'G-K8B7064RJY'
            };
            /***/ 
        }),
        /***/ "./src/app/home/home-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/home/home-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: HomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () { return HomeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            var HomeRoutingModule = /** @class */ (function () {
                function HomeRoutingModule() {
                }
                return HomeRoutingModule;
            }());
            HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                            { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], HomeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".logo {\n  width: 256px;\n  height: 256px;\n  margin-top: 0rem;\n}\n\n.home {\n  margin-top: 0rem;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nmat-toolbar {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.stand-alone-providers ngx-auth-firebaseui-providers:not(:last-child) {\n  margin-bottom: 2rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGdnYWxpbmQxXFxjYWRlb3Npby9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREdFO0VBQ0UsOEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICB3aWR0aDogMjU2cHg7XHJcbiAgaGVpZ2h0OiAyNTZweDtcclxuICBtYXJnaW4tdG9wOiAwcmVtO1xyXG59XHJcblxyXG4uaG9tZSB7XHJcbiAgbWFyZ2luLXRvcDogMHJlbTtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uc3RhbmQtYWxvbmUtcHJvdmlkZXJzIHtcclxuICBuZ3gtYXV0aC1maXJlYmFzZXVpLXByb3ZpZGVyczpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLmxvZ28ge1xuICB3aWR0aDogMjU2cHg7XG4gIGhlaWdodDogMjU2cHg7XG4gIG1hcmdpbi10b3A6IDByZW07XG59XG5cbi5ob21lIHtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubWF0LXRvb2xiYXIge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnN0YW5kLWFsb25lLXByb3ZpZGVycyBuZ3gtYXV0aC1maXJlYmFzZXVpLXByb3ZpZGVyczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(titleService, auth, router, snackbar) {
                    this.titleService = titleService;
                    this.auth = auth;
                    this.router = router;
                    this.snackbar = snackbar;
                    this.title = 'app';
                    this.userComponent = "<ngx-auth-firebaseui-user></ngx-auth-firebaseui-user>";
                    this.registerComponent = "<ngx-auth-firebaseui-register></ngx-auth-firebaseui-register>";
                    this.loginComponent = "<ngx-auth-firebaseui-login></ngx-auth-firebaseui-login>";
                    this.element = "<ngx-auth-firebaseui></ngx-auth-firebaseui>";
                    this.providersRow = "<ngx-auth-firebaseui-providers></ngx-auth-firebaseui-providers>";
                    this.providersColumn = "<ngx-auth-firebaseui-providers layout=\"column\"></ngx-auth-firebaseui-providers>";
                    this.providersThemes = "\n              <ngx-auth-firebaseui-providers [theme]=\"themes.CLASSIC\"></ngx-auth-firebaseui-providers>\n              <ngx-auth-firebaseui-providers [theme]=\"themes.STROKED\"></ngx-auth-firebaseui-providers>\n              <ngx-auth-firebaseui-providers [theme]=\"themes.RAISED\"></ngx-auth-firebaseui-providers>\n              <ngx-auth-firebaseui-providers [theme]=\"themes.FAB\"></ngx-auth-firebaseui-providers>\n              <ngx-auth-firebaseui-providers [theme]=\"themes.MINI_FAB\"></ngx-auth-firebaseui-providers>";
                    this.code = "\n  import {Component} from '@angular/core';\n\n  @Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n  })\n  export class AppComponent {\n\n   printUser(event) {\n     console.log(event);\n   }\n\n   printError(event) {\n    console.error(event);\n   }\n  }";
                    this.appComponentTS = "\n  import {Component} from '@angular/core';\n  import {AuthProvider, Theme} from 'ngx-auth-firebaseui';\n\n  @Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n  })\n  export class AppComponent {\n\n  themes = Theme;\n  }";
                    this.html = "<ngx-auth-firebaseui\n             (onSuccess)=\"printUser($event)\"\n             (onError)=\"printError($event)\">\n        </ngx-auth-firebaseui>";
                    this.providers = [ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"].Facebook];
                    this.themes = ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__["Theme"];
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.titleService.setTitle('CADEOS.io - Home');
                };
                Object.defineProperty(HomeComponent.prototype, "color", {
                    get: function () {
                        return this.error ? 'warn' : 'primary';
                    },
                    enumerable: true,
                    configurable: true
                });
                HomeComponent.prototype.printUser = function (event) {
                    console.log('onSuccess event ->', event);
                    this.error = false;
                    this.index = 2;
                };
                HomeComponent.prototype.printError = function (event) {
                    console.error('onError event --> ', event);
                    this.error = true;
                    // this.snackbar.open(event.message, 'OK', {duration: 5000});
                };
                HomeComponent.prototype.onTabChange = function (event) {
                    console.log('on tab change: ', event);
                };
                HomeComponent.prototype.showMessage = function () {
                    var _this = this;
                    console.log('on show message');
                    var snackbarReference = this.snackbar.open('onConfirmActionButtonClicked\'s event has been emitted', 'See more examples', {
                        duration: 3000
                    });
                    this.snackbarSubscription = snackbarReference
                        .onAction().subscribe(function () { return _this.router.navigate(['/examples']); });
                };
                HomeComponent.prototype.ngOnDestroy = function () {
                    if (this.snackbarSubscription) {
                        this.snackbarSubscription.unsubscribe();
                    }
                };
                HomeComponent.prototype.onSignOut = function () {
                    console.log('Sign-out successful!');
                };
                HomeComponent.prototype.onAccountDeleted = function () {
                    console.log('Account Delete successful!');
                };
                HomeComponent.prototype.createAccount = function () {
                    console.log('create account has beeen requested');
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    ],
                    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
                })
            ], HomeModule);
            /***/ 
        }),
        /***/ "./src/app/services/scatter.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/scatter.service.ts ***!
          \*********************************************/
        /*! exports provided: ScatterService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterService", function () { return ScatterService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/dist/index.js");
            /* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var eosjs_dist_eosjs_jssig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! eosjs/dist/eosjs-jssig */ "./node_modules/eosjs/dist/eosjs-jssig.js");
            /* harmony import */ var eosjs_dist_eosjs_jssig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(eosjs_dist_eosjs_jssig__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scatterjs-core */ "./node_modules/scatterjs-core/dist/index.js");
            /* harmony import */ var scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(scatterjs_core__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scatterjs-plugin-eosjs */ "./node_modules/scatterjs-plugin-eosjs/dist/index.js");
            /* harmony import */ var scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _scatterjs_lynx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @scatterjs/lynx */ "./node_modules/@scatterjs/lynx/dist/index.js");
            /* harmony import */ var _scatterjs_lynx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_scatterjs_lynx__WEBPACK_IMPORTED_MODULE_8__);
            var defaultPrivateKey = '5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr'; // bob
            var signatureProvider = new eosjs_dist_eosjs_jssig__WEBPACK_IMPORTED_MODULE_3__["JsSignatureProvider"]([defaultPrivateKey]);
            var rpc = new eosjs__WEBPACK_IMPORTED_MODULE_2__["JsonRpc"]('http://127.0.0.1:8888', { fetch: fetch });
            var api = new eosjs__WEBPACK_IMPORTED_MODULE_2__["Api"]({ rpc: rpc, signatureProvider: signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
            var result = api.transact({});
            // Don't forget to tell ScatterJS which plugins you are using.
            scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default.a.plugins(new scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_7___default.a(), new _scatterjs_lynx__WEBPACK_IMPORTED_MODULE_8___default.a(eosjs__WEBPACK_IMPORTED_MODULE_2__ || { Api: eosjs__WEBPACK_IMPORTED_MODULE_2__["Api"], JsonRpc: eosjs__WEBPACK_IMPORTED_MODULE_2__["JsonRpc"] }));
            // Networks are used to reference certain blockchains.
            // They let you get accounts and help you build signature providers.
            var network = scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default.a.Network.fromJson({
                blockchain: 'eos',
                chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                host: 'nodes.get-scatter.com',
                port: 443,
                protocol: 'https'
            });
            // First we need to connect to the user's Scatter.
            scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default.a.scatter.connect('cadeosiocode').then(function (connected) {
                // If the user does not have Scatter or it is Locked or Closed this will return false;
                if (!connected) {
                    return false;
                }
                var scatter = scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default.a.scatter;
                // Now we need to get an identity from the user.
                // We're also going to require an account that is connected to the network we're using.
                var requiredFields = { accounts: [network] };
                scatter.getIdentity(requiredFields).then(function () {
                    // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
                    // the user for their account name beforehand. They could still give you a different account.
                    var account = scatter.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                    // You can pass in any additional options you want into the eosjs reference.
                    var eosOptions = { expireInSeconds: 60 };
                    // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
                    var eos = scatter.eos(network, eosjs__WEBPACK_IMPORTED_MODULE_2__, eosOptions);
                    // ----------------------------
                    // Now that we have an identity,
                    // an EOSIO account, and a reference
                    // to an eosjs object we can send a transaction.
                    // ----------------------------
                    // Never assume the account's permission/authority. Always take it from the returned account.
                    var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                    eos.transfer(account.name, 'cadeosiocode', '1.0000 EOS', 'memo', transactionOptions).then(function (trx) {
                        // That's it!
                        console.log("Transaction ID: " + trx.transaction_id);
                    }).catch(function (error) {
                        console.error(error);
                    });
                }).catch(function (error) {
                    // The user rejected this request, or doesn't have the appropriate requirements.
                    console.error(error);
                });
            });
            var Blockchains = {
                EOSIO: 'eos',
            };
            var blockchain = Blockchains.EOSIO;
            scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default.a.plugins(new scatterjs_plugin_eosjs__WEBPACK_IMPORTED_MODULE_7___default.a());
            scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default.a.scatter.connect('CADEOS.io').then(function (connected) {
                // User does not have Scatter Desktop, Mobile or Classic installed.
                if (!connected) {
                    return false;
                }
                var scatter = scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default.a.scatter;
            });
            var ScatterService = /** @class */ (function () {
                function ScatterService() {
                }
                ScatterService.prototype.load = function () {
                    console.log(this.identity);
                    this.scatter = window.scatter;
                    if (this.identity) {
                        this.scatter.useIdentity(this.identity.hash);
                    }
                    var host = '127.0.0.1:50005';
                    var socket = new WebSocket("ws://" + host + "/socket.io/?EIO=3&transport=websocket");
                    socket.onopen = function () {
                        socket.send('40/scatter');
                    };
                    var account = scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default.a.identity.accounts.find(function (x) {
                        return x.blockchain === 'eos';
                    });
                    scatterjs_core__WEBPACK_IMPORTED_MODULE_6___default.a.login().then();
                    this.network = {
                        blockchain: 'eos',
                        host: 'nodes.get-scatter.com',
                        port: 443,
                        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
                        protocol: 'https'
                    };
                    this.eos = this.scatter.eos(this.network, eosjs__WEBPACK_IMPORTED_MODULE_2__, {}, _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].eosProtocol);
                };
                ScatterService.prototype.login = function (successCallback, errorCallbak) {
                    var requirements = { accounts: [this.network] };
                    var that = this;
                    this.scatter.getIdentity(requirements).then(function (identity) {
                        if (!identity) {
                            return errorCallbak(null);
                        }
                        that.identity = identity;
                        that.scatter.useIdentity(identity.hash);
                        successCallback();
                    }).catch(function (error) {
                        errorCallbak(error);
                    });
                };
                ScatterService.prototype.logout = function () {
                };
                ScatterService.prototype.transfer = function (to, amount, memo, successCallback, errorCallback) {
                    if (memo === void 0) { memo = ''; }
                    var that = this;
                    this.login(function () {
                        that.eos.transfer(that.identity.accounts[0].name, to, (amount).toString() + ' EOS', memo, []).then(function (transaction) {
                            successCallback(transaction);
                        }).catch(function (error) {
                            errorCallback(error);
                        });
                    }, function (error) {
                        errorCallback(error);
                    });
                };
                return ScatterService;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], ScatterService.prototype, "identity", void 0);
            ScatterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ScatterService);
            window.global = window;
            /***/ 
        }),
        /***/ "./src/app/shared/badges/badges.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/badges/badges.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 0.5em;\n  flex-wrap: wrap;\n}\n:host > * {\n  margin: 0 3px;\n  height: 20px;\n}\n:host iframe {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JhZGdlcy9DOlxcVXNlcnNcXGdnYWxpbmQxXFxjYWRlb3Npby9zcmNcXGFwcFxcc2hhcmVkXFxiYWRnZXNcXGJhZGdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2JhZGdlcy9iYWRnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQ0U7RUFDRSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFkZ2VzL2JhZGdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAwLjVlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgPiAqIHtcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpZnJhbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAuNWVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG46aG9zdCA+ICoge1xuICBtYXJnaW46IDAgM3B4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG46aG9zdCBpZnJhbWUge1xuICBtYXJnaW4tdG9wOiAycHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/badges/badges.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/badges/badges.component.ts ***!
          \***************************************************/
        /*! exports provided: BadgesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function () { return BadgesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BadgesComponent = /** @class */ (function () {
                function BadgesComponent() {
                }
                return BadgesComponent;
            }());
            BadgesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-badges',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./badges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/badges/badges.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./badges.component.scss */ "./src/app/shared/badges/badges.component.scss")).default]
                })
            ], BadgesComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/content-wrapper/content-wrapper.component.scss": 
        /*!***********************************************************************!*\
          !*** ./src/app/shared/content-wrapper/content-wrapper.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250ZW50LXdyYXBwZXIvY29udGVudC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/content-wrapper/content-wrapper.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/shared/content-wrapper/content-wrapper.component.ts ***!
          \*********************************************************************/
        /*! exports provided: ContentWrapperComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapperComponent", function () { return ContentWrapperComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContentWrapperComponent = /** @class */ (function () {
                function ContentWrapperComponent() {
                }
                ContentWrapperComponent.prototype.ngOnInit = function () {
                };
                return ContentWrapperComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], ContentWrapperComponent.prototype, "component", void 0);
            ContentWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-content-wrapper',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/content-wrapper/content-wrapper.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-wrapper.component.scss */ "./src/app/shared/content-wrapper/content-wrapper.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ContentWrapperComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/footer/footer.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/footer/footer.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("footer {\n  padding: 3rem 0;\n  font-size: 85%;\n  background-color: #000000;\n  text-align: left;\n}\nfooter p {\n  margin-bottom: 0;\n}\nfooter a {\n  font-weight: 500;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9DOlxcVXNlcnNcXGdnYWxpbmQxXFxjYWRlb3Npby9zcmNcXGFwcFxcc2hhcmVkXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgcGFkZGluZzogM3JlbSAwO1xyXG4gIGZvbnQtc2l6ZTogODUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxufSAgICIsImZvb3RlciB7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbiAgZm9udC1zaXplOiA4NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5mb290ZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5mb290ZXIgYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/footer/footer.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/footer/footer.component.ts ***!
          \***************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/header/header.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/header/header.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  background: #f2a6fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9DOlxcVXNlcnNcXGdnYWxpbmQxXFxjYWRlb3Npby9zcmNcXGFwcFxcc2hhcmVkXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDIsIDE2NiwgMjUyKTtcclxufVxyXG4iLCIubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogI2YyYTZmYztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/header/header.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/header/header.component.ts ***!
          \***************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                    this.navbarCollapsed = true;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/index.ts": 
        /*!*********************************!*\
          !*** ./src/app/shared/index.ts ***!
          \*********************************/
        /*! exports provided: AppSharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSharedModule", function () { return _shared_module__WEBPACK_IMPORTED_MODULE_1__["AppSharedModule"]; });
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: AppSharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSharedModule", function () { return AppSharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
            /* harmony import */ var _content_wrapper_content_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-wrapper/content-wrapper.component */ "./src/app/shared/content-wrapper/content-wrapper.component.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./badges/badges.component */ "./src/app/shared/badges/badges.component.ts");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            /* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
            /* harmony import */ var _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular-material-extensions/pages */ "./node_modules/@angular-material-extensions/pages/fesm2015/angular-material-extensions-pages.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            var AppSharedModule = /** @class */ (function () {
                function AppSharedModule() {
                }
                return AppSharedModule;
            }());
            AppSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapseModule"],
                        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_20__["HighlightModule"],
                        ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_19__["NgxAuthFirebaseUIModule"],
                        _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__["MatPagesModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
                    ],
                    exports: [
                        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                        _content_wrapper_content_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ContentWrapperComponent"],
                        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_20__["HighlightModule"],
                        ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_19__["NgxAuthFirebaseUIModule"],
                        _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__["MatPagesModule"],
                        _badges_badges_component__WEBPACK_IMPORTED_MODULE_18__["BadgesComponent"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"]
                    ],
                    declarations: [
                        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                        _content_wrapper_content_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ContentWrapperComponent"],
                        _badges_badges_component__WEBPACK_IMPORTED_MODULE_18__["BadgesComponent"]
                    ],
                    providers: [],
                })
            ], AppSharedModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `angular-cli.json`.
            var environment = {
                production: false,
                hmr: false,
                eosHost: 'nodes.get-scatter.com',
                apiUrl: '//api.cadeos.io',
                eosPort: 443,
                eosProtocol: 'https'
            };
            /***/ 
        }),
        /***/ "./src/hmr.ts": 
        /*!********************!*\
          !*** ./src/hmr.ts ***!
          \********************/
        /*! exports provided: hmrBootstrap */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function () { return hmrBootstrap; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
            /* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__);
            var hmrBootstrap = function (module, bootstrap) {
                var ngModule;
                module.hot.accept();
                bootstrap().then(function (mod) { return ngModule = mod; });
                module.hot.dispose(function () {
                    var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
                    var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
                    var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__["createNewHosts"])(elements);
                    ngModule.destroy();
                    makeVisible();
                });
            };
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]); };
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hmr) {
                if (false) { }
                else {
                    console.error('HMR is not enabled for webpack-dev-server!');
                    console.log('Are you using the --hmr flag for ng serve?');
                }
            }
            else {
                bootstrap().catch(function (err) { return console.log(err); });
            }
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\ggalind1\cadeosio\src\main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!**********************!*\
          !*** util (ignored) ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 2: 
        /*!**********************!*\
          !*** util (ignored) ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 3: 
        /*!************************!*\
          !*** crypto (ignored) ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map