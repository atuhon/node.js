/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      924: (e) => {
        e.exports = function (e) {
          var r = +e;
          return (
            r - r == 0 &&
            (r === e || ("string" == typeof e && (0 !== r || "" !== e.trim())))
          );
        };
      },
      724: (e, r, t) => {
        const o = t(924);
        e.exports = function (e) {
          const r = Math.abs(e);
          if (!o(r)) throw new TypeError("expected a number");
          if (!Number.isInteger(r)) throw new Error("expected an integer");
          if (!Number.isSafeInteger(r))
            throw new Error("value exceeds maximum safe integer");
          return r % 2 == 1;
        };
      },
    },
    r = {};
  function t(o) {
    var n = r[o];
    if (void 0 !== n) return n.exports;
    var s = (r[o] = { exports: {} });
    return e[o](s, s.exports, t), s.exports;
  }
  (() => {
    var e = t(724);
    console.log("hello, sub");
    const r = e(3);
    console.log(r);
  })();
})();
