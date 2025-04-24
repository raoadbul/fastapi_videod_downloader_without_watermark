import sb, { forwardRef as qS, createElement as ab, useState as gp, useRef as dS, useEffect as y2, StrictMode as p2 } from "react";
import _S from "react-dom";
var yg = { exports: {} }, dp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hS;
function g2() {
  if (hS) return dp;
  hS = 1;
  var h = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function b(g, E, D) {
    var x = null;
    if (D !== void 0 && (x = "" + D), E.key !== void 0 && (x = "" + E.key), "key" in E) {
      D = {};
      for (var k in E)
        k !== "key" && (D[k] = E[k]);
    } else D = E;
    return E = D.ref, {
      $$typeof: h,
      type: g,
      key: x,
      ref: E !== void 0 ? E : null,
      props: D
    };
  }
  return dp.Fragment = p, dp.jsx = b, dp.jsxs = b, dp;
}
var hp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mS;
function v2() {
  return mS || (mS = 1, process.env.NODE_ENV !== "production" && function() {
    function h(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === xt ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case he:
          return "Fragment";
        case Se:
          return "Profiler";
        case le:
          return "StrictMode";
        case ft:
          return "Suspense";
        case ct:
          return "SuspenseList";
        case me:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case ae:
            return "Portal";
          case Me:
            return (j.displayName || "Context") + ".Provider";
          case We:
            return (j._context.displayName || "Context") + ".Consumer";
          case Pe:
            var de = j.render;
            return j = j.displayName, j || (j = de.displayName || de.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case Be:
            return de = j.displayName || null, de !== null ? de : h(j.type) || "Memo";
          case Dt:
            de = j._payload, j = j._init;
            try {
              return h(j(de));
            } catch {
            }
        }
      return null;
    }
    function p(j) {
      return "" + j;
    }
    function b(j) {
      try {
        p(j);
        var de = !1;
      } catch {
        de = !0;
      }
      if (de) {
        de = console;
        var ue = de.error, Te = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return ue.call(
          de,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Te
        ), p(j);
      }
    }
    function g(j) {
      if (j === he) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === Dt)
        return "<...>";
      try {
        var de = h(j);
        return de ? "<" + de + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function E() {
      var j = nt.A;
      return j === null ? null : j.getOwner();
    }
    function D() {
      return Error("react-stack-top-frame");
    }
    function x(j) {
      if (Ue.call(j, "key")) {
        var de = Object.getOwnPropertyDescriptor(j, "key").get;
        if (de && de.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function k(j, de) {
      function ue() {
        Qt || (Qt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          de
        ));
      }
      ue.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: ue,
        configurable: !0
      });
    }
    function G() {
      var j = h(this.type);
      return U[j] || (U[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function I(j, de, ue, Te, Le, pt, Ke, qu) {
      return ue = pt.ref, j = {
        $$typeof: pe,
        type: j,
        key: de,
        props: pt,
        _owner: Le
      }, (ue !== void 0 ? ue : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: G
      }) : Object.defineProperty(j, "ref", { enumerable: !1, value: null }), j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(j, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(j, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ke
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: qu
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function W(j, de, ue, Te, Le, pt, Ke, qu) {
      var Ct = de.children;
      if (Ct !== void 0)
        if (Te)
          if (el(Ct)) {
            for (Te = 0; Te < Ct.length; Te++)
              te(Ct[Te]);
            Object.freeze && Object.freeze(Ct);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else te(Ct);
      if (Ue.call(de, "key")) {
        Ct = h(j);
        var sl = Object.keys(de).filter(function(xi) {
          return xi !== "key";
        });
        Te = 0 < sl.length ? "{key: someKey, " + sl.join(": ..., ") + ": ...}" : "{key: someKey}", be[Ct + Te] || (sl = 0 < sl.length ? "{" + sl.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Te,
          Ct,
          sl,
          Ct
        ), be[Ct + Te] = !0);
      }
      if (Ct = null, ue !== void 0 && (b(ue), Ct = "" + ue), x(de) && (b(de.key), Ct = "" + de.key), "key" in de) {
        ue = {};
        for (var Aa in de)
          Aa !== "key" && (ue[Aa] = de[Aa]);
      } else ue = de;
      return Ct && k(
        ue,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), I(
        j,
        Ct,
        pt,
        Le,
        E(),
        ue,
        Ke,
        qu
      );
    }
    function te(j) {
      typeof j == "object" && j !== null && j.$$typeof === pe && j._store && (j._store.validated = 1);
    }
    var ce = sb, pe = Symbol.for("react.transitional.element"), ae = Symbol.for("react.portal"), he = Symbol.for("react.fragment"), le = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), We = Symbol.for("react.consumer"), Me = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), ft = Symbol.for("react.suspense"), ct = Symbol.for("react.suspense_list"), Be = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), me = Symbol.for("react.activity"), xt = Symbol.for("react.client.reference"), nt = ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ue = Object.prototype.hasOwnProperty, el = Array.isArray, Cl = console.createTask ? console.createTask : function() {
      return null;
    };
    ce = {
      "react-stack-bottom-frame": function(j) {
        return j();
      }
    };
    var Qt, U = {}, F = ce["react-stack-bottom-frame"].bind(
      ce,
      D
    )(), ee = Cl(g(D)), be = {};
    hp.Fragment = he, hp.jsx = function(j, de, ue, Te, Le) {
      var pt = 1e4 > nt.recentlyCreatedOwnerStacks++;
      return W(
        j,
        de,
        ue,
        !1,
        Te,
        Le,
        pt ? Error("react-stack-top-frame") : F,
        pt ? Cl(g(j)) : ee
      );
    }, hp.jsxs = function(j, de, ue, Te, Le) {
      var pt = 1e4 > nt.recentlyCreatedOwnerStacks++;
      return W(
        j,
        de,
        ue,
        !0,
        Te,
        Le,
        pt ? Error("react-stack-top-frame") : F,
        pt ? Cl(g(j)) : ee
      );
    };
  }()), hp;
}
var yS;
function b2() {
  return yS || (yS = 1, process.env.NODE_ENV === "production" ? yg.exports = g2() : yg.exports = v2()), yg.exports;
}
var vt = b2(), pg = { exports: {} }, mp = {}, gg = { exports: {} }, Iv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pS;
function S2() {
  return pS || (pS = 1, function(h) {
    function p(U, F) {
      var ee = U.length;
      U.push(F);
      e: for (; 0 < ee; ) {
        var be = ee - 1 >>> 1, j = U[be];
        if (0 < E(j, F))
          U[be] = F, U[ee] = j, ee = be;
        else break e;
      }
    }
    function b(U) {
      return U.length === 0 ? null : U[0];
    }
    function g(U) {
      if (U.length === 0) return null;
      var F = U[0], ee = U.pop();
      if (ee !== F) {
        U[0] = ee;
        e: for (var be = 0, j = U.length, de = j >>> 1; be < de; ) {
          var ue = 2 * (be + 1) - 1, Te = U[ue], Le = ue + 1, pt = U[Le];
          if (0 > E(Te, ee))
            Le < j && 0 > E(pt, Te) ? (U[be] = pt, U[Le] = ee, be = Le) : (U[be] = Te, U[ue] = ee, be = ue);
          else if (Le < j && 0 > E(pt, ee))
            U[be] = pt, U[Le] = ee, be = Le;
          else break e;
        }
      }
      return F;
    }
    function E(U, F) {
      var ee = U.sortIndex - F.sortIndex;
      return ee !== 0 ? ee : U.id - F.id;
    }
    if (h.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      h.unstable_now = function() {
        return D.now();
      };
    } else {
      var x = Date, k = x.now();
      h.unstable_now = function() {
        return x.now() - k;
      };
    }
    var G = [], I = [], W = 1, te = null, ce = 3, pe = !1, ae = !1, he = !1, le = !1, Se = typeof setTimeout == "function" ? setTimeout : null, We = typeof clearTimeout == "function" ? clearTimeout : null, Me = typeof setImmediate < "u" ? setImmediate : null;
    function Pe(U) {
      for (var F = b(I); F !== null; ) {
        if (F.callback === null) g(I);
        else if (F.startTime <= U)
          g(I), F.sortIndex = F.expirationTime, p(G, F);
        else break;
        F = b(I);
      }
    }
    function ft(U) {
      if (he = !1, Pe(U), !ae)
        if (b(G) !== null)
          ae = !0, ct || (ct = !0, Ue());
        else {
          var F = b(I);
          F !== null && Qt(ft, F.startTime - U);
        }
    }
    var ct = !1, Be = -1, Dt = 5, me = -1;
    function xt() {
      return le ? !0 : !(h.unstable_now() - me < Dt);
    }
    function nt() {
      if (le = !1, ct) {
        var U = h.unstable_now();
        me = U;
        var F = !0;
        try {
          e: {
            ae = !1, he && (he = !1, We(Be), Be = -1), pe = !0;
            var ee = ce;
            try {
              t: {
                for (Pe(U), te = b(G); te !== null && !(te.expirationTime > U && xt()); ) {
                  var be = te.callback;
                  if (typeof be == "function") {
                    te.callback = null, ce = te.priorityLevel;
                    var j = be(
                      te.expirationTime <= U
                    );
                    if (U = h.unstable_now(), typeof j == "function") {
                      te.callback = j, Pe(U), F = !0;
                      break t;
                    }
                    te === b(G) && g(G), Pe(U);
                  } else g(G);
                  te = b(G);
                }
                if (te !== null) F = !0;
                else {
                  var de = b(I);
                  de !== null && Qt(
                    ft,
                    de.startTime - U
                  ), F = !1;
                }
              }
              break e;
            } finally {
              te = null, ce = ee, pe = !1;
            }
            F = void 0;
          }
        } finally {
          F ? Ue() : ct = !1;
        }
      }
    }
    var Ue;
    if (typeof Me == "function")
      Ue = function() {
        Me(nt);
      };
    else if (typeof MessageChannel < "u") {
      var el = new MessageChannel(), Cl = el.port2;
      el.port1.onmessage = nt, Ue = function() {
        Cl.postMessage(null);
      };
    } else
      Ue = function() {
        Se(nt, 0);
      };
    function Qt(U, F) {
      Be = Se(function() {
        U(h.unstable_now());
      }, F);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, h.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Dt = 0 < U ? Math.floor(1e3 / U) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return ce;
    }, h.unstable_next = function(U) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = ce;
      }
      var ee = ce;
      ce = F;
      try {
        return U();
      } finally {
        ce = ee;
      }
    }, h.unstable_requestPaint = function() {
      le = !0;
    }, h.unstable_runWithPriority = function(U, F) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var ee = ce;
      ce = U;
      try {
        return F();
      } finally {
        ce = ee;
      }
    }, h.unstable_scheduleCallback = function(U, F, ee) {
      var be = h.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? be + ee : be) : ee = be, U) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = ee + j, U = {
        id: W++,
        callback: F,
        priorityLevel: U,
        startTime: ee,
        expirationTime: j,
        sortIndex: -1
      }, ee > be ? (U.sortIndex = ee, p(I, U), b(G) === null && U === b(I) && (he ? (We(Be), Be = -1) : he = !0, Qt(ft, ee - be))) : (U.sortIndex = j, p(G, U), ae || pe || (ae = !0, ct || (ct = !0, Ue()))), U;
    }, h.unstable_shouldYield = xt, h.unstable_wrapCallback = function(U) {
      var F = ce;
      return function() {
        var ee = ce;
        ce = F;
        try {
          return U.apply(this, arguments);
        } finally {
          ce = ee;
        }
      };
    };
  }(Iv)), Iv;
}
var Pv = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gS;
function T2() {
  return gS || (gS = 1, function(h) {
    process.env.NODE_ENV !== "production" && function() {
      function p() {
        if (ft = !1, me) {
          var U = h.unstable_now();
          Ue = U;
          var F = !0;
          try {
            e: {
              Me = !1, Pe && (Pe = !1, Be(xt), xt = -1), We = !0;
              var ee = Se;
              try {
                t: {
                  for (x(U), le = g(pe); le !== null && !(le.expirationTime > U && G()); ) {
                    var be = le.callback;
                    if (typeof be == "function") {
                      le.callback = null, Se = le.priorityLevel;
                      var j = be(
                        le.expirationTime <= U
                      );
                      if (U = h.unstable_now(), typeof j == "function") {
                        le.callback = j, x(U), F = !0;
                        break t;
                      }
                      le === g(pe) && E(pe), x(U);
                    } else E(pe);
                    le = g(pe);
                  }
                  if (le !== null) F = !0;
                  else {
                    var de = g(ae);
                    de !== null && I(
                      k,
                      de.startTime - U
                    ), F = !1;
                  }
                }
                break e;
              } finally {
                le = null, Se = ee, We = !1;
              }
              F = void 0;
            }
          } finally {
            F ? el() : me = !1;
          }
        }
      }
      function b(U, F) {
        var ee = U.length;
        U.push(F);
        e: for (; 0 < ee; ) {
          var be = ee - 1 >>> 1, j = U[be];
          if (0 < D(j, F))
            U[be] = F, U[ee] = j, ee = be;
          else break e;
        }
      }
      function g(U) {
        return U.length === 0 ? null : U[0];
      }
      function E(U) {
        if (U.length === 0) return null;
        var F = U[0], ee = U.pop();
        if (ee !== F) {
          U[0] = ee;
          e: for (var be = 0, j = U.length, de = j >>> 1; be < de; ) {
            var ue = 2 * (be + 1) - 1, Te = U[ue], Le = ue + 1, pt = U[Le];
            if (0 > D(Te, ee))
              Le < j && 0 > D(pt, Te) ? (U[be] = pt, U[Le] = ee, be = Le) : (U[be] = Te, U[ue] = ee, be = ue);
            else if (Le < j && 0 > D(pt, ee))
              U[be] = pt, U[Le] = ee, be = Le;
            else break e;
          }
        }
        return F;
      }
      function D(U, F) {
        var ee = U.sortIndex - F.sortIndex;
        return ee !== 0 ? ee : U.id - F.id;
      }
      function x(U) {
        for (var F = g(ae); F !== null; ) {
          if (F.callback === null) E(ae);
          else if (F.startTime <= U)
            E(ae), F.sortIndex = F.expirationTime, b(pe, F);
          else break;
          F = g(ae);
        }
      }
      function k(U) {
        if (Pe = !1, x(U), !Me)
          if (g(pe) !== null)
            Me = !0, me || (me = !0, el());
          else {
            var F = g(ae);
            F !== null && I(
              k,
              F.startTime - U
            );
          }
      }
      function G() {
        return ft ? !0 : !(h.unstable_now() - Ue < nt);
      }
      function I(U, F) {
        xt = ct(function() {
          U(h.unstable_now());
        }, F);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), h.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var W = performance;
        h.unstable_now = function() {
          return W.now();
        };
      } else {
        var te = Date, ce = te.now();
        h.unstable_now = function() {
          return te.now() - ce;
        };
      }
      var pe = [], ae = [], he = 1, le = null, Se = 3, We = !1, Me = !1, Pe = !1, ft = !1, ct = typeof setTimeout == "function" ? setTimeout : null, Be = typeof clearTimeout == "function" ? clearTimeout : null, Dt = typeof setImmediate < "u" ? setImmediate : null, me = !1, xt = -1, nt = 5, Ue = -1;
      if (typeof Dt == "function")
        var el = function() {
          Dt(p);
        };
      else if (typeof MessageChannel < "u") {
        var Cl = new MessageChannel(), Qt = Cl.port2;
        Cl.port1.onmessage = p, el = function() {
          Qt.postMessage(null);
        };
      } else
        el = function() {
          ct(p, 0);
        };
      h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(U) {
        U.callback = null;
      }, h.unstable_forceFrameRate = function(U) {
        0 > U || 125 < U ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : nt = 0 < U ? Math.floor(1e3 / U) : 5;
      }, h.unstable_getCurrentPriorityLevel = function() {
        return Se;
      }, h.unstable_next = function(U) {
        switch (Se) {
          case 1:
          case 2:
          case 3:
            var F = 3;
            break;
          default:
            F = Se;
        }
        var ee = Se;
        Se = F;
        try {
          return U();
        } finally {
          Se = ee;
        }
      }, h.unstable_requestPaint = function() {
        ft = !0;
      }, h.unstable_runWithPriority = function(U, F) {
        switch (U) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            U = 3;
        }
        var ee = Se;
        Se = U;
        try {
          return F();
        } finally {
          Se = ee;
        }
      }, h.unstable_scheduleCallback = function(U, F, ee) {
        var be = h.unstable_now();
        switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? be + ee : be) : ee = be, U) {
          case 1:
            var j = -1;
            break;
          case 2:
            j = 250;
            break;
          case 5:
            j = 1073741823;
            break;
          case 4:
            j = 1e4;
            break;
          default:
            j = 5e3;
        }
        return j = ee + j, U = {
          id: he++,
          callback: F,
          priorityLevel: U,
          startTime: ee,
          expirationTime: j,
          sortIndex: -1
        }, ee > be ? (U.sortIndex = ee, b(ae, U), g(pe) === null && U === g(ae) && (Pe ? (Be(xt), xt = -1) : Pe = !0, I(k, ee - be))) : (U.sortIndex = j, b(pe, U), Me || We || (Me = !0, me || (me = !0, el()))), U;
      }, h.unstable_shouldYield = G, h.unstable_wrapCallback = function(U) {
        var F = Se;
        return function() {
          var ee = Se;
          Se = F;
          try {
            return U.apply(this, arguments);
          } finally {
            Se = ee;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Pv)), Pv;
}
var vS;
function YS() {
  return vS || (vS = 1, process.env.NODE_ENV === "production" ? gg.exports = S2() : gg.exports = T2()), gg.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bS;
function E2() {
  if (bS) return mp;
  bS = 1;
  var h = YS(), p = sb, b = _S;
  function g(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function E(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function D(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function x(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function k(l) {
    if (D(l) !== l)
      throw Error(g(188));
  }
  function G(l) {
    var n = l.alternate;
    if (!n) {
      if (n = D(l), n === null) throw Error(g(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return k(s), l;
          if (r === c) return k(s), n;
          r = r.sibling;
        }
        throw Error(g(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var y = !1, v = s.child; v; ) {
          if (v === u) {
            y = !0, u = s, c = r;
            break;
          }
          if (v === c) {
            y = !0, c = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!y) {
          for (v = r.child; v; ) {
            if (v === u) {
              y = !0, u = r, c = s;
              break;
            }
            if (v === c) {
              y = !0, c = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!y) throw Error(g(189));
        }
      }
      if (u.alternate !== c) throw Error(g(190));
    }
    if (u.tag !== 3) throw Error(g(188));
    return u.stateNode.current === u ? l : n;
  }
  function I(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = I(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var W = Object.assign, te = Symbol.for("react.element"), ce = Symbol.for("react.transitional.element"), pe = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), he = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), Se = Symbol.for("react.provider"), We = Symbol.for("react.consumer"), Me = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), ft = Symbol.for("react.suspense"), ct = Symbol.for("react.suspense_list"), Be = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), me = Symbol.for("react.activity"), xt = Symbol.for("react.memo_cache_sentinel"), nt = Symbol.iterator;
  function Ue(l) {
    return l === null || typeof l != "object" ? null : (l = nt && l[nt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var el = Symbol.for("react.client.reference");
  function Cl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === el ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ae:
        return "Fragment";
      case le:
        return "Profiler";
      case he:
        return "StrictMode";
      case ft:
        return "Suspense";
      case ct:
        return "SuspenseList";
      case me:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case pe:
          return "Portal";
        case Me:
          return (l.displayName || "Context") + ".Provider";
        case We:
          return (l._context.displayName || "Context") + ".Consumer";
        case Pe:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Be:
          return n = l.displayName || null, n !== null ? n : Cl(l.type) || "Memo";
        case Dt:
          n = l._payload, l = l._init;
          try {
            return Cl(l(n));
          } catch {
          }
      }
    return null;
  }
  var Qt = Array.isArray, U = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, be = [], j = -1;
  function de(l) {
    return { current: l };
  }
  function ue(l) {
    0 > j || (l.current = be[j], be[j] = null, j--);
  }
  function Te(l, n) {
    j++, be[j] = l.current, l.current = n;
  }
  var Le = de(null), pt = de(null), Ke = de(null), qu = de(null);
  function Ct(l, n) {
    switch (Te(Ke, n), Te(pt, l), Te(Le, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ru(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ru(n), l = No(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    ue(Le), Te(Le, l);
  }
  function sl() {
    ue(Le), ue(pt), ue(Ke);
  }
  function Aa(l) {
    l.memoizedState !== null && Te(qu, l);
    var n = Le.current, u = No(n, l.type);
    n !== u && (Te(pt, l), Te(Le, u));
  }
  function xi(l) {
    pt.current === l && (ue(Le), ue(pt)), qu.current === l && (ue(qu), aa._currentValue = ee);
  }
  var $s = Object.prototype.hasOwnProperty, Ci = h.unstable_scheduleCallback, Sh = h.unstable_cancelCallback, xg = h.unstable_shouldYield, Hi = h.unstable_requestPaint, ia = h.unstable_now, af = h.unstable_getCurrentPriorityLevel, Tp = h.unstable_ImmediatePriority, Th = h.unstable_UserBlockingPriority, nf = h.unstable_NormalPriority, Eh = h.unstable_LowPriority, jc = h.unstable_IdlePriority, Cg = h.log, Ep = h.unstable_setDisableYieldValue, Vc = null, Hl = null;
  function tu(l) {
    if (typeof Cg == "function" && Ep(l), Hl && typeof Hl.setStrictMode == "function")
      try {
        Hl.setStrictMode(Vc, l);
      } catch {
      }
  }
  var Xl = Math.clz32 ? Math.clz32 : Hg, Ah = Math.log, Ap = Math.LN2;
  function Hg(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ah(l) / Ap | 0) | 0;
  }
  var Lc = 256, lu = 4194304;
  function ca(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function _u(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var v = c & 134217727;
    return v !== 0 ? (c = v & ~r, c !== 0 ? s = ca(c) : (y &= v, y !== 0 ? s = ca(y) : u || (u = v & ~l, u !== 0 && (s = ca(u))))) : (v = c & ~r, v !== 0 ? s = ca(v) : y !== 0 ? s = ca(y) : u || (u = c & ~l, u !== 0 && (s = ca(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function rn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function tl(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Yu() {
    var l = Lc;
    return Lc <<= 1, (Lc & 4194048) === 0 && (Lc = 256), l;
  }
  function Ni() {
    var l = lu;
    return lu <<= 1, (lu & 62914560) === 0 && (lu = 4194304), l;
  }
  function ju(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function wi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Rp(l, n, u, c, s, r) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, A = l.expirationTimes, N = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var J = 31 - Xl(u), $ = 1 << J;
      v[J] = 0, A[J] = -1;
      var B = N[J];
      if (B !== null)
        for (N[J] = null, J = 0; J < B.length; J++) {
          var _ = B[J];
          _ !== null && (_.lane &= -536870913);
        }
      u &= ~$;
    }
    c !== 0 && uf(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(y & ~n));
  }
  function uf(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Xl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function cf(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Xl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Qa(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Ws(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Op() {
    var l = F.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : zy(l.type));
  }
  function Ng(l, n) {
    var u = F.p;
    try {
      return F.p = l, n();
    } finally {
      F.p = u;
    }
  }
  var Zt = Math.random().toString(36).slice(2), ll = "__reactFiber$" + Zt, Nl = "__reactProps$" + Zt, Gc = "__reactContainer$" + Zt, Fs = "__reactEvents$" + Zt, Dp = "__reactListeners$" + Zt, Is = "__reactHandles$" + Zt, zp = "__reactResources$" + Zt, fe = "__reactMarker$" + Zt;
  function of(l) {
    delete l[ll], delete l[Nl], delete l[Fs], delete l[Dp], delete l[Is];
  }
  function rl(l) {
    var n = l[ll];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Gc] || u[ll]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = vl(l); l !== null; ) {
            if (u = l[ll]) return u;
            l = vl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Bi(l) {
    if (l = l[ll] || l[Gc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function ff(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(g(33));
  }
  function au(l) {
    var n = l[zp];
    return n || (n = l[zp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Jt(l) {
    l[fe] = !0;
  }
  var sf = /* @__PURE__ */ new Set(), oa = {};
  function Vu(l, n) {
    Lu(l, n), Lu(l + "Capture", n);
  }
  function Lu(l, n) {
    for (oa[l] = n, l = 0; l < n.length; l++)
      sf.add(n[l]);
  }
  var Mp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ps = {}, Rh = {};
  function Up(l) {
    return $s.call(Rh, l) ? !0 : $s.call(Ps, l) ? !1 : Mp.test(l) ? Rh[l] = !0 : (Ps[l] = !0, !1);
  }
  function nu(l, n, u) {
    if (Up(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function rf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function dn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var er, Oh;
  function qi(l) {
    if (er === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        er = n && n[1] || "", Oh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + er + l + Oh;
  }
  var wl = !1;
  function Gu(l, n) {
    if (!l || wl) return "";
    wl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (_) {
                  var B = _;
                }
                Reflect.construct(l, [], $);
              } else {
                try {
                  $.call();
                } catch (_) {
                  B = _;
                }
                l.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                B = _;
              }
              ($ = l()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (_) {
            if (_ && B && typeof _.stack == "string")
              return [_.stack, B.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), y = r[0], v = r[1];
      if (y && v) {
        var A = y.split(`
`), N = v.split(`
`);
        for (s = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < N.length && !N[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === A.length || s === N.length)
          for (c = A.length - 1, s = N.length - 1; 1 <= c && 0 <= s && A[c] !== N[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (A[c] !== N[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || A[c] !== N[s]) {
                  var J = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", l.displayName)), J;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      wl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? qi(u) : "";
  }
  function _i(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return qi(l.type);
      case 16:
        return qi("Lazy");
      case 13:
        return qi("Suspense");
      case 19:
        return qi("SuspenseList");
      case 0:
      case 15:
        return Gu(l.type, !1);
      case 11:
        return Gu(l.type.render, !1);
      case 1:
        return Gu(l.type, !0);
      case 31:
        return qi("Activity");
      default:
        return "";
    }
  }
  function Dh(l) {
    try {
      var n = "";
      do
        n += _i(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Al(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function df(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function zh(l) {
    var n = df(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          c = "" + y, r.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function Xu(l) {
    l._valueTracker || (l._valueTracker = zh(l));
  }
  function Yi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = df(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Xc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var wg = /[\n"\\]/g;
  function Ra(l) {
    return l.replace(
      wg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tr(l, n, u, c, s, r, y, v) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Al(n)) : l.value !== "" + Al(n) && (l.value = "" + Al(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? hf(l, y, Al(n)) : u != null ? hf(l, y, Al(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Al(v) : l.removeAttribute("name");
  }
  function lr(l, n, u, c, s, r, y, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + Al(u) : "", n = n != null ? "" + Al(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function hf(l, n, u) {
    n === "number" && Xc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function ji(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Al(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Mh(l, n, u) {
    if (n != null && (n = "" + Al(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Al(u) : "";
  }
  function Uh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(g(92));
        if (Qt(c)) {
          if (1 < c.length) throw Error(g(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Al(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Qc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var xp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ar(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || xp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function mf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(g(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && ar(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && ar(l, r, n[r]);
  }
  function Vi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Cp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yf(l) {
    return Cp.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Li = null;
  function nr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Zc = null, Jc = null;
  function Hp(l) {
    var n = Bi(l);
    if (n && (l = n.stateNode)) {
      var u = l[Nl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (tr(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ra(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Nl] || null;
                if (!s) throw Error(g(90));
                tr(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Yi(c);
          }
          break e;
        case "textarea":
          Mh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && ji(l, !!u.multiple, n, !1);
      }
    }
  }
  var xh = !1;
  function Kc(l, n, u) {
    if (xh) return l(n, u);
    xh = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (xh = !1, (Zc !== null || Jc !== null) && (bc(), Zc && (n = Zc, l = Jc, Jc = Zc = null, Hp(n), l)))
        for (n = 0; n < l.length; n++) Hp(l[n]);
    }
  }
  function Gi(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Nl] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        g(231, n, typeof u)
      );
    return u;
  }
  var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ur = !1;
  if (hn)
    try {
      var uu = {};
      Object.defineProperty(uu, "passive", {
        get: function() {
          ur = !0;
        }
      }), window.addEventListener("test", uu, uu), window.removeEventListener("test", uu, uu);
    } catch {
      ur = !1;
    }
  var iu = null, kc = null, Xi = null;
  function Ch() {
    if (Xi) return Xi;
    var l, n = kc, u = n.length, c, s = "value" in iu ? iu.value : iu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === s[r - c]; c++) ;
    return Xi = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function dl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function ir() {
    return !0;
  }
  function cr() {
    return !1;
  }
  function Bl(l) {
    function n(u, c, s, r, y) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = y, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? ir : cr, this.isPropagationStopped = cr, this;
    }
    return W(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = ir);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = ir);
      },
      persist: function() {
      },
      isPersistent: ir
    }), n;
  }
  var Qu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, or = Bl(Qu), pf = W({}, Qu, { view: 0, detail: 0 }), Np = Bl(pf), Hh, fr, gf, Qi = W({}, pf, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== gf && (gf && l.type === "mousemove" ? (Hh = l.screenX - gf.screenX, fr = l.screenY - gf.screenY) : fr = Hh = 0, gf = l), Hh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : fr;
    }
  }), Nh = Bl(Qi), wp = W({}, Qi, { dataTransfer: 0 }), Bp = Bl(wp), qg = W({}, pf, { relatedTarget: 0 }), wh = Bl(qg), _g = W({}, Qu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yg = Bl(_g), jg = W({}, Qu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), vf = Bl(jg), qp = W({}, Qu, { data: 0 }), Bh = Bl(qp), _p = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Yp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, qh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jp(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = qh[l]) ? !!n[l] : !1;
  }
  function cu() {
    return jp;
  }
  var Zi = W({}, pf, {
    key: function(l) {
      if (l.key) {
        var n = _p[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = dl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Yp[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cu,
    charCode: function(l) {
      return l.type === "keypress" ? dl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? dl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Za = Bl(Zi), fa = W({}, Qi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), bf = Bl(fa), sr = W({}, pf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cu
  }), _h = Bl(sr), Ql = W({}, Qu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Vp = Bl(Ql), rr = W({}, Qi, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ji = Bl(rr), Yh = W({}, Qu, {
    newState: 0,
    oldState: 0
  }), Lp = Bl(Yh), Gp = [9, 13, 27, 32], Sf = hn && "CompositionEvent" in window, Tf = null;
  hn && "documentMode" in document && (Tf = document.documentMode);
  var jh = hn && "TextEvent" in window && !Tf, mn = hn && (!Sf || Tf && 8 < Tf && 11 >= Tf), Vh = " ", dr = !1;
  function Ef(l, n) {
    switch (l) {
      case "keyup":
        return Gp.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zu(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ju = !1;
  function Lh(l, n) {
    switch (l) {
      case "compositionend":
        return Zu(n);
      case "keypress":
        return n.which !== 32 ? null : (dr = !0, Vh);
      case "textInput":
        return l = n.data, l === Vh && dr ? null : l;
      default:
        return null;
    }
  }
  function Ki(l, n) {
    if (Ju)
      return l === "compositionend" || !Sf && Ef(l, n) ? (l = Ch(), Xi = kc = iu = null, Ju = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return mn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Xp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function hr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Xp[l.type] : n === "textarea";
  }
  function mr(l, n, u, c) {
    Zc ? Jc ? Jc.push(c) : Jc = [c] : Zc = c, n = Ho(n, "onChange"), 0 < n.length && (u = new or(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Ja = null, Ka = null;
  function Gh(l) {
    Ac(l, 0);
  }
  function yn(l) {
    var n = ff(l);
    if (Yi(n)) return l;
  }
  function Xh(l, n) {
    if (l === "change") return n;
  }
  var Qh = !1;
  if (hn) {
    var ki;
    if (hn) {
      var $i = "oninput" in document;
      if (!$i) {
        var Zh = document.createElement("div");
        Zh.setAttribute("oninput", "return;"), $i = typeof Zh.oninput == "function";
      }
      ki = $i;
    } else ki = !1;
    Qh = ki && (!document.documentMode || 9 < document.documentMode);
  }
  function $c() {
    Ja && (Ja.detachEvent("onpropertychange", Jh), Ka = Ja = null);
  }
  function Jh(l) {
    if (l.propertyName === "value" && yn(Ka)) {
      var n = [];
      mr(
        n,
        Ka,
        l,
        nr(l)
      ), Kc(Gh, n);
    }
  }
  function yr(l, n, u) {
    l === "focusin" ? ($c(), Ja = n, Ka = u, Ja.attachEvent("onpropertychange", Jh)) : l === "focusout" && $c();
  }
  function Ku(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return yn(Ka);
  }
  function ou(l, n) {
    if (l === "click") return yn(n);
  }
  function Kh(l, n) {
    if (l === "input" || l === "change")
      return yn(n);
  }
  function kh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var hl = typeof Object.is == "function" ? Object.is : kh;
  function ku(l, n) {
    if (hl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!$s.call(n, s) || !hl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function $u(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function bt(l, n) {
    var u = $u(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = $u(u);
    }
  }
  function Af(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Af(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function $h(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Xc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Xc(l.document);
    }
    return n;
  }
  function Rf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Wi = hn && "documentMode" in document && 11 >= document.documentMode, pn = null, ka = null, Wu = null, Fi = !1;
  function pr(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Fi || pn == null || pn !== Xc(c) || (c = pn, "selectionStart" in c && Rf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Wu && ku(Wu, c) || (Wu = c, c = Ho(ka, "onSelect"), 0 < c.length && (n = new or(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = pn)));
  }
  function fu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Ii = {
    animationend: fu("Animation", "AnimationEnd"),
    animationiteration: fu("Animation", "AnimationIteration"),
    animationstart: fu("Animation", "AnimationStart"),
    transitionrun: fu("Transition", "TransitionRun"),
    transitionstart: fu("Transition", "TransitionStart"),
    transitioncancel: fu("Transition", "TransitionCancel"),
    transitionend: fu("Transition", "TransitionEnd")
  }, Oa = {}, $a = {};
  hn && ($a = document.createElement("div").style, "AnimationEvent" in window || (delete Ii.animationend.animation, delete Ii.animationiteration.animation, delete Ii.animationstart.animation), "TransitionEvent" in window || delete Ii.transitionend.transition);
  function gn(l) {
    if (Oa[l]) return Oa[l];
    if (!Ii[l]) return l;
    var n = Ii[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in $a)
        return Oa[l] = n[u];
    return l;
  }
  var Qp = gn("animationend"), Wh = gn("animationiteration"), Zp = gn("animationstart"), Fh = gn("transitionrun"), gr = gn("transitionstart"), Jp = gn("transitioncancel"), Ih = gn("transitionend"), Ph = /* @__PURE__ */ new Map(), Wc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Wc.push("scrollEnd");
  function Da(l, n) {
    Ph.set(l, n), Vu(n, [l]);
  }
  var em = /* @__PURE__ */ new WeakMap();
  function sa(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = em.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Dh(n)
      }, em.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Dh(n)
    };
  }
  var Zl = [], Fu = 0, vn = 0;
  function Wa() {
    for (var l = Fu, n = vn = Fu = 0; n < l; ) {
      var u = Zl[n];
      Zl[n++] = null;
      var c = Zl[n];
      Zl[n++] = null;
      var s = Zl[n];
      Zl[n++] = null;
      var r = Zl[n];
      if (Zl[n++] = null, c !== null && s !== null) {
        var y = c.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), c.pending = s;
      }
      r !== 0 && Ic(u, s, r);
    }
  }
  function Iu(l, n, u, c) {
    Zl[Fu++] = l, Zl[Fu++] = n, Zl[Fu++] = u, Zl[Fu++] = c, vn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Fc(l, n, u, c) {
    return Iu(l, n, u, c), Of(l);
  }
  function bn(l, n) {
    return Iu(l, null, null, n), Of(l);
  }
  function Ic(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Xl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Of(l) {
    if (50 < Do)
      throw Do = 0, ey = null, Error(g(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Pc = {};
  function Kp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Jl(l, n, u, c) {
    return new Kp(l, n, u, c);
  }
  function Df(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Fa(l, n) {
    var u = l.alternate;
    return u === null ? (u = Jl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Ye(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function P(l, n, u, c, s, r) {
    var y = 0;
    if (c = l, typeof l == "function") Df(l) && (y = 1);
    else if (typeof l == "string")
      y = z0(
        l,
        u,
        Le.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case me:
          return l = Jl(31, u, n, s), l.elementType = me, l.lanes = r, l;
        case ae:
          return za(u.children, s, r, n);
        case he:
          y = 8, s |= 24;
          break;
        case le:
          return l = Jl(12, u, n, s | 2), l.elementType = le, l.lanes = r, l;
        case ft:
          return l = Jl(13, u, n, s), l.elementType = ft, l.lanes = r, l;
        case ct:
          return l = Jl(19, u, n, s), l.elementType = ct, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Se:
              case Me:
                y = 10;
                break e;
              case We:
                y = 9;
                break e;
              case Pe:
                y = 11;
                break e;
              case Be:
                y = 14;
                break e;
              case Dt:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            g(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Jl(y, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function za(l, n, u, c) {
    return l = Jl(7, l, c, n), l.lanes = u, l;
  }
  function eo(l, n, u) {
    return l = Jl(6, l, null, n), l.lanes = u, l;
  }
  function zt(l, n, u) {
    return n = Jl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Pu = [], ei = 0, zf = null, to = 0, Ma = [], Kl = 0, su = null, Ia = 1, Ht = "";
  function ke(l, n) {
    Pu[ei++] = to, Pu[ei++] = zf, zf = l, to = n;
  }
  function vr(l, n, u) {
    Ma[Kl++] = Ia, Ma[Kl++] = Ht, Ma[Kl++] = su, su = l;
    var c = Ia;
    l = Ht;
    var s = 32 - Xl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Xl(n) + s;
    if (30 < r) {
      var y = s - s % 5;
      r = (c & (1 << y) - 1).toString(32), c >>= y, s -= y, Ia = 1 << 32 - Xl(n) + s | u << s | c, Ht = r + l;
    } else
      Ia = 1 << r | u << s | c, Ht = l;
  }
  function Pi(l) {
    l.return !== null && (ke(l, 1), vr(l, 1, 0));
  }
  function Sn(l) {
    for (; l === zf; )
      zf = Pu[--ei], Pu[ei] = null, to = Pu[--ei], Pu[ei] = null;
    for (; l === su; )
      su = Ma[--Kl], Ma[Kl] = null, Ht = Ma[--Kl], Ma[Kl] = null, Ia = Ma[--Kl], Ma[Kl] = null;
  }
  var Vt = null, et = null, Ie = !1, Ua = null, xa = !1, ec = Error(g(519));
  function ru(l) {
    var n = Error(g(418, ""));
    throw no(sa(n, l)), ec;
  }
  function Mf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[ll] = l, n[Nl] = c, u) {
      case "dialog":
        Ce("cancel", n), Ce("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ce("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < hs.length; u++)
          Ce(hs[u], n);
        break;
      case "source":
        Ce("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ce("error", n), Ce("load", n);
        break;
      case "details":
        Ce("toggle", n);
        break;
      case "input":
        Ce("invalid", n), lr(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), Xu(n);
        break;
      case "select":
        Ce("invalid", n);
        break;
      case "textarea":
        Ce("invalid", n), Uh(n, c.value, c.defaultValue, c.children), Xu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || my(n.textContent, u) ? (c.popover != null && (Ce("beforetoggle", n), Ce("toggle", n)), c.onScroll != null && Ce("scroll", n), c.onScrollEnd != null && Ce("scrollend", n), c.onClick != null && (n.onclick = Md), n = !0) : n = !1, n || ru(l);
  }
  function tm(l) {
    for (Vt = l.return; Vt; )
      switch (Vt.tag) {
        case 5:
        case 13:
          xa = !1;
          return;
        case 27:
        case 3:
          xa = !0;
          return;
        default:
          Vt = Vt.return;
      }
  }
  function lo(l) {
    if (l !== Vt) return !1;
    if (!Ie) return tm(l), Ie = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Vn(l.type, l.memoizedProps)), u = !u), u && et && ru(l), tm(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(g(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                et = nn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        et = null;
      }
    } else
      n === 27 ? (n = et, vi(l.type) ? (l = bi, bi = null, et = l) : et = n) : et = Vt ? nn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ao() {
    et = Vt = null, Ie = !1;
  }
  function lm() {
    var l = Ua;
    return l !== null && (Pl === null ? Pl = l : Pl.push.apply(
      Pl,
      l
    ), Ua = null), l;
  }
  function no(l) {
    Ua === null ? Ua = [l] : Ua.push(l);
  }
  var Uf = de(null), du = null, Pa = null;
  function hu(l, n, u) {
    Te(Uf, n._currentValue), n._currentValue = u;
  }
  function Tn(l) {
    l._currentValue = Uf.current, ue(Uf);
  }
  function br(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function am(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var y = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var A = 0; A < n.length; A++)
            if (v.context === n[A]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), br(
                r.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(g(341));
        y.lanes |= u, r = y.alternate, r !== null && (r.lanes |= u), br(y, u, l), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function uo(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(g(387));
        if (y = y.memoizedProps, y !== null) {
          var v = s.type;
          hl(s.pendingProps.value, y.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === qu.current) {
        if (y = s.alternate, y === null) throw Error(g(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(aa) : l = [aa]);
      }
      s = s.return;
    }
    l !== null && am(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function xf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!hl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ti(l) {
    du = l, Pa = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function al(l) {
    return nm(du, l);
  }
  function Cf(l, n) {
    return du === null && ti(l), nm(l, n);
  }
  function nm(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Pa === null) {
      if (l === null) throw Error(g(308));
      Pa = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Pa = Pa.next = n;
    return u;
  }
  var io = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Sr = h.unstable_scheduleCallback, kp = h.unstable_NormalPriority, Kt = {
    $$typeof: Me,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function co() {
    return {
      controller: new io(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function En(l) {
    l.refCount--, l.refCount === 0 && Sr(kp, function() {
      l.controller.abort();
    });
  }
  var li = null, Hf = 0, Ca = 0, kt = null;
  function Tr(l, n) {
    if (li === null) {
      var u = li = [];
      Hf = 0, Ca = Ec(), kt = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Hf++, n.then(Er, Er), n;
  }
  function Er() {
    if (--Hf === 0 && li !== null) {
      kt !== null && (kt.status = "fulfilled");
      var l = li;
      li = null, Ca = 0, kt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function $p(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Ar = U.S;
  U.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Tr(l, n), Ar !== null && Ar(l, n);
  };
  var An = de(null);
  function Nf() {
    var l = An.current;
    return l !== null ? l : yt.pooledCache;
  }
  function tc(l, n) {
    n === null ? Te(An, An.current) : Te(An, n.pool);
  }
  function Rr() {
    var l = Nf();
    return l === null ? null : { parent: Kt._currentValue, pool: l };
  }
  var ai = Error(g(460)), Or = Error(g(474)), wf = Error(g(542)), Dr = { then: function() {
  } };
  function zr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Bf() {
  }
  function um(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Bf, Bf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, cm(l), l;
      default:
        if (typeof n.status == "string") n.then(Bf, Bf);
        else {
          if (l = yt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(g(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, cm(l), l;
        }
        throw lc = n, ai;
    }
  }
  var lc = null;
  function im() {
    if (lc === null) throw Error(g(459));
    var l = lc;
    return lc = null, l;
  }
  function cm(l) {
    if (l === ai || l === wf)
      throw Error(g(483));
  }
  var Rn = !1;
  function Mr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ur(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function kl(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function On(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (it & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Of(l), Ic(l, null, u), n;
    }
    return Iu(l, c, n, u), Of(l);
  }
  function ac(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cf(l, u);
    }
  }
  function om(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = y : r = r.next = y, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var fm = !1;
  function oo() {
    if (fm) {
      var l = kt;
      if (l !== null) throw l;
    }
  }
  function mu(l, n, u, c) {
    fm = !1;
    var s = l.updateQueue;
    Rn = !1;
    var r = s.firstBaseUpdate, y = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var A = v, N = A.next;
      A.next = null, y === null ? r = N : y.next = N, y = A;
      var J = l.alternate;
      J !== null && (J = J.updateQueue, v = J.lastBaseUpdate, v !== y && (v === null ? J.firstBaseUpdate = N : v.next = N, J.lastBaseUpdate = A));
    }
    if (r !== null) {
      var $ = s.baseState;
      y = 0, J = N = A = null, v = r;
      do {
        var B = v.lane & -536870913, _ = B !== v.lane;
        if (_ ? (Qe & B) === B : (c & B) === B) {
          B !== 0 && B === Ca && (fm = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var ge = l, ve = v;
            B = n;
            var lt = u;
            switch (ve.tag) {
              case 1:
                if (ge = ve.payload, typeof ge == "function") {
                  $ = ge.call(lt, $, B);
                  break e;
                }
                $ = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = ve.payload, B = typeof ge == "function" ? ge.call(lt, $, B) : ge, B == null) break e;
                $ = W({}, $, B);
                break e;
              case 2:
                Rn = !0;
            }
          }
          B = v.callback, B !== null && (l.flags |= 64, _ && (l.flags |= 8192), _ = s.callbacks, _ === null ? s.callbacks = [B] : _.push(B));
        } else
          _ = {
            lane: B,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, J === null ? (N = J = _, A = $) : J = J.next = _, y |= B;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          _ = v, v = _.next, _.next = null, s.lastBaseUpdate = _, s.shared.pending = null;
        }
      } while (!0);
      J === null && (A = $), s.baseState = A, s.firstBaseUpdate = N, s.lastBaseUpdate = J, r === null && (s.shared.lanes = 0), Tu |= y, l.lanes = y, l.memoizedState = $;
    }
  }
  function xr(l, n) {
    if (typeof l != "function")
      throw Error(g(191, l));
    l.call(n);
  }
  function qf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        xr(u[l], n);
  }
  var nc = de(null), _f = de(0);
  function nl(l, n) {
    l = Su, Te(_f, l), Te(nc, n), Su = l | n.baseLanes;
  }
  function fo() {
    Te(_f, Su), Te(nc, nc.current);
  }
  function so() {
    Su = _f.current, ue(nc), ue(_f);
  }
  var Ha = 0, xe = null, ut = null, Mt = null, Yf = !1, ra = !1, ni = !1, en = 0, da = 0, yu = null, sm = 0;
  function Ut() {
    throw Error(g(321));
  }
  function Cr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!hl(l[u], n[u])) return !1;
    return !0;
  }
  function Hr(l, n, u, c, s, r) {
    return Ha = r, xe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, U.H = l === null || l.memoizedState === null ? Om : Dm, ni = !1, r = u(c, s), ni = !1, ra && (r = rm(
      n,
      u,
      c,
      s
    )), ui(l), r;
  }
  function ui(l) {
    U.H = $r;
    var n = ut !== null && ut.next !== null;
    if (Ha = 0, Mt = ut = xe = null, Yf = !1, da = 0, yu = null, n) throw Error(g(300));
    l === null || $t || (l = l.dependencies, l !== null && xf(l) && ($t = !0));
  }
  function rm(l, n, u, c) {
    xe = l;
    var s = 0;
    do {
      if (ra && (yu = null), da = 0, ra = !1, 25 <= s) throw Error(g(301));
      if (s += 1, Mt = ut = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      U.H = pu, r = n(u, c);
    } while (ra);
    return r;
  }
  function Wp() {
    var l = U.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Vf(n) : n, l = l.useState()[0], (ut !== null ? ut.memoizedState : null) !== l && (xe.flags |= 1024), n;
  }
  function Nr() {
    var l = en !== 0;
    return en = 0, l;
  }
  function ro(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function wr(l) {
    if (Yf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Yf = !1;
    }
    Ha = 0, Mt = ut = xe = null, ra = !1, da = en = 0, yu = null;
  }
  function Rl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Mt === null ? xe.memoizedState = Mt = l : Mt = Mt.next = l, Mt;
  }
  function Nt() {
    if (ut === null) {
      var l = xe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ut.next;
    var n = Mt === null ? xe.memoizedState : Mt.next;
    if (n !== null)
      Mt = n, ut = l;
    else {
      if (l === null)
        throw xe.alternate === null ? Error(g(467)) : Error(g(310));
      ut = l, l = {
        memoizedState: ut.memoizedState,
        baseState: ut.baseState,
        baseQueue: ut.baseQueue,
        queue: ut.queue,
        next: null
      }, Mt === null ? xe.memoizedState = Mt = l : Mt = Mt.next = l;
    }
    return Mt;
  }
  function jf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vf(l) {
    var n = da;
    return da += 1, yu === null && (yu = []), l = um(yu, l, n), n = xe, (Mt === null ? n.memoizedState : Mt.next) === null && (n = n.alternate, U.H = n === null || n.memoizedState === null ? Om : Dm), l;
  }
  function Lt(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Vf(l);
      if (l.$$typeof === Me) return al(l);
    }
    throw Error(g(438, String(l)));
  }
  function Br(l) {
    var n = null, u = xe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = xe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = jf(), xe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = xt;
    return n.index++, u;
  }
  function Dn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Lf(l) {
    var n = Nt();
    return qr(n, ut, l);
  }
  function qr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(g(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = r.next, r.next = y;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = y = null, A = null, N = n, J = !1;
      do {
        var $ = N.lane & -536870913;
        if ($ !== N.lane ? (Qe & $) === $ : (Ha & $) === $) {
          var B = N.revertLane;
          if (B === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), $ === Ca && (J = !0);
          else if ((Ha & B) === B) {
            N = N.next, B === Ca && (J = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, A === null ? (v = A = $, y = r) : A = A.next = $, xe.lanes |= B, Tu |= B;
          $ = N.action, ni && u(r, $), r = N.hasEagerState ? N.eagerState : u(r, $);
        } else
          B = {
            lane: $,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, A === null ? (v = A = B, y = r) : A = A.next = B, xe.lanes |= $, Tu |= $;
        N = N.next;
      } while (N !== null && N !== n);
      if (A === null ? y = r : A.next = v, !hl(r, l.memoizedState) && ($t = !0, J && (u = kt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = y, l.baseQueue = A, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function _r(l) {
    var n = Nt(), u = n.queue;
    if (u === null) throw Error(g(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var y = s = s.next;
      do
        r = l(r, y.action), y = y.next;
      while (y !== s);
      hl(r, n.memoizedState) || ($t = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function Gf(l, n, u) {
    var c = xe, s = Nt(), r = Ie;
    if (r) {
      if (u === void 0) throw Error(g(407));
      u = u();
    } else u = n();
    var y = !hl(
      (ut || s).memoizedState,
      u
    );
    y && (s.memoizedState = u, $t = !0), s = s.queue;
    var v = hm.bind(null, c, s, l);
    if (dt(2048, 8, v, [l]), s.getSnapshot !== n || y || Mt !== null && Mt.memoizedState.tag & 1) {
      if (c.flags |= 2048, $l(
        9,
        Zf(),
        dm.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), yt === null) throw Error(g(349));
      r || (Ha & 124) !== 0 || Yr(c, n, u);
    }
    return u;
  }
  function Yr(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = xe.updateQueue, n === null ? (n = jf(), xe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function dm(l, n, u, c) {
    n.value = u, n.getSnapshot = c, mm(n) && jr(l);
  }
  function hm(l, n, u) {
    return u(function() {
      mm(n) && jr(l);
    });
  }
  function mm(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !hl(l, u);
    } catch {
      return !0;
    }
  }
  function jr(l) {
    var n = bn(l, 2);
    n !== null && ya(n, l, 2);
  }
  function Xf(l) {
    var n = Rl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ni) {
        tu(!0);
        try {
          u();
        } finally {
          tu(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dn,
      lastRenderedState: l
    }, n;
  }
  function Vr(l, n, u, c) {
    return l.baseState = u, qr(
      l,
      ut,
      typeof c == "function" ? c : Dn
    );
  }
  function Fp(l, n, u, c, s) {
    if (oc(l)) throw Error(g(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          r.listeners.push(y);
        }
      };
      U.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Lr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Lr(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = U.T, y = {};
      U.T = y;
      try {
        var v = u(s, c), A = U.S;
        A !== null && A(y, v), Qf(l, n, v);
      } catch (N) {
        Xr(l, n, N);
      } finally {
        U.T = r;
      }
    } else
      try {
        r = u(s, c), Qf(l, n, r);
      } catch (N) {
        Xr(l, n, N);
      }
  }
  function Qf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Gr(l, n, c);
      },
      function(c) {
        return Xr(l, n, c);
      }
    ) : Gr(l, n, u);
  }
  function Gr(l, n, u) {
    n.status = "fulfilled", n.value = u, ym(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Lr(l, u)));
  }
  function Xr(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, ym(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function ym(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Qr(l, n) {
    return n;
  }
  function pm(l, n) {
    if (Ie) {
      var u = yt.formState;
      if (u !== null) {
        e: {
          var c = xe;
          if (Ie) {
            if (et) {
              t: {
                for (var s = et, r = xa; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = nn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                et = nn(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            ru(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Rl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: n
    }, u.queue = c, u = Am.bind(
      null,
      xe,
      c
    ), c.dispatch = u, c = Xf(!1), r = kf.bind(
      null,
      xe,
      !1,
      c.queue
    ), c = Rl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Fp.bind(
      null,
      xe,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function zn(l) {
    var n = Nt();
    return Zr(n, ut, l);
  }
  function Zr(l, n, u) {
    if (n = qr(
      l,
      n,
      Qr
    )[0], l = Lf(Dn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Vf(n);
      } catch (y) {
        throw y === ai ? wf : y;
      }
    else c = n;
    n = Nt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (xe.flags |= 2048, $l(
      9,
      Zf(),
      Vg.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function Vg(l, n) {
    l.action = n;
  }
  function Jr(l) {
    var n = Nt(), u = ut;
    if (u !== null)
      return Zr(n, u, l);
    Nt(), n = n.memoizedState, u = Nt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function $l(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = xe.updateQueue, n === null && (n = jf(), xe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Zf() {
    return { destroy: void 0, resource: void 0 };
  }
  function Jf() {
    return Nt().memoizedState;
  }
  function ii(l, n, u, c) {
    var s = Rl();
    c = c === void 0 ? null : c, xe.flags |= l, s.memoizedState = $l(
      1 | n,
      Zf(),
      u,
      c
    );
  }
  function dt(l, n, u, c) {
    var s = Nt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    ut !== null && c !== null && Cr(c, ut.memoizedState.deps) ? s.memoizedState = $l(n, r, u, c) : (xe.flags |= l, s.memoizedState = $l(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Ip(l, n) {
    ii(8390656, 8, l, n);
  }
  function Pp(l, n) {
    dt(2048, 8, l, n);
  }
  function gm(l, n) {
    return dt(4, 2, l, n);
  }
  function tn(l, n) {
    return dt(4, 4, l, n);
  }
  function vm(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Kr(l, n, u) {
    u = u != null ? u.concat([l]) : null, dt(4, 4, vm.bind(null, n, l), u);
  }
  function uc() {
  }
  function ic(l, n) {
    var u = Nt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Cr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function bm(l, n) {
    var u = Nt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Cr(n, c[1]))
      return c[0];
    if (c = l(), ni) {
      tu(!0);
      try {
        l();
      } finally {
        tu(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Kf(l, n, u) {
    return u === void 0 || (Ha & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = ty(), xe.lanes |= l, Tu |= l, u);
  }
  function Sm(l, n, u, c) {
    return hl(u, n) ? u : nc.current !== null ? (l = Kf(l, u, c), hl(l, n) || ($t = !0), l) : (Ha & 42) === 0 ? ($t = !0, l.memoizedState = u) : (l = ty(), xe.lanes |= l, Tu |= l, n);
  }
  function e0(l, n, u, c, s) {
    var r = F.p;
    F.p = r !== 0 && 8 > r ? r : 8;
    var y = U.T, v = {};
    U.T = v, kf(l, !1, n, u);
    try {
      var A = s(), N = U.S;
      if (N !== null && N(v, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var J = $p(
          A,
          c
        );
        cc(
          l,
          n,
          J,
          ma(l)
        );
      } else
        cc(
          l,
          n,
          c,
          ma(l)
        );
    } catch ($) {
      cc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: $ },
        ma()
      );
    } finally {
      F.p = r, U.T = y;
    }
  }
  function Lg() {
  }
  function kr(l, n, u, c) {
    if (l.tag !== 5) throw Error(g(476));
    var s = t0(l).queue;
    e0(
      l,
      s,
      n,
      ee,
      u === null ? Lg : function() {
        return ho(l), u(c);
      }
    );
  }
  function t0(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ee,
      baseState: ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: ee
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function ho(l) {
    var n = t0(l).next.queue;
    cc(l, n, {}, ma());
  }
  function Na() {
    return al(aa);
  }
  function Tm() {
    return Nt().memoizedState;
  }
  function l0() {
    return Nt().memoizedState;
  }
  function a0(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = ma();
          l = kl(u);
          var c = On(n, l, u);
          c !== null && (ya(c, n, u), ac(c, n, u)), n = { cache: co() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Em(l, n, u) {
    var c = ma();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, oc(l) ? n0(n, u) : (u = Fc(l, n, u, c), u !== null && (ya(u, l, c), Rm(u, n, c)));
  }
  function Am(l, n, u) {
    var c = ma();
    cc(l, n, u, c);
  }
  function cc(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (oc(l)) n0(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var y = n.lastRenderedState, v = r(y, u);
          if (s.hasEagerState = !0, s.eagerState = v, hl(v, y))
            return Iu(l, n, s, 0), yt === null && Wa(), !1;
        } catch {
        } finally {
        }
      if (u = Fc(l, n, s, c), u !== null)
        return ya(u, l, c), Rm(u, n, c), !0;
    }
    return !1;
  }
  function kf(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Ec(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, oc(l)) {
      if (n) throw Error(g(479));
    } else
      n = Fc(
        l,
        u,
        c,
        2
      ), n !== null && ya(n, l, 2);
  }
  function oc(l) {
    var n = l.alternate;
    return l === xe || n !== null && n === xe;
  }
  function n0(l, n) {
    ra = Yf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Rm(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, cf(l, u);
    }
  }
  var $r = {
    readContext: al,
    use: Lt,
    useCallback: Ut,
    useContext: Ut,
    useEffect: Ut,
    useImperativeHandle: Ut,
    useLayoutEffect: Ut,
    useInsertionEffect: Ut,
    useMemo: Ut,
    useReducer: Ut,
    useRef: Ut,
    useState: Ut,
    useDebugValue: Ut,
    useDeferredValue: Ut,
    useTransition: Ut,
    useSyncExternalStore: Ut,
    useId: Ut,
    useHostTransitionStatus: Ut,
    useFormState: Ut,
    useActionState: Ut,
    useOptimistic: Ut,
    useMemoCache: Ut,
    useCacheRefresh: Ut
  }, Om = {
    readContext: al,
    use: Lt,
    useCallback: function(l, n) {
      return Rl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: al,
    useEffect: Ip,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, ii(
        4194308,
        4,
        vm.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return ii(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      ii(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Rl();
      n = n === void 0 ? null : n;
      var c = l();
      if (ni) {
        tu(!0);
        try {
          l();
        } finally {
          tu(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Rl();
      if (u !== void 0) {
        var s = u(n);
        if (ni) {
          tu(!0);
          try {
            u(n);
          } finally {
            tu(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Em.bind(
        null,
        xe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Rl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Xf(l);
      var n = l.queue, u = Am.bind(null, xe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: uc,
    useDeferredValue: function(l, n) {
      var u = Rl();
      return Kf(u, l, n);
    },
    useTransition: function() {
      var l = Xf(!1);
      return l = e0.bind(
        null,
        xe,
        l.queue,
        !0,
        !1
      ), Rl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = xe, s = Rl();
      if (Ie) {
        if (u === void 0)
          throw Error(g(407));
        u = u();
      } else {
        if (u = n(), yt === null)
          throw Error(g(349));
        (Qe & 124) !== 0 || Yr(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Ip(hm.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, $l(
        9,
        Zf(),
        dm.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Rl(), n = yt.identifierPrefix;
      if (Ie) {
        var u = Ht, c = Ia;
        u = (c & ~(1 << 32 - Xl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = en++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = sm++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Na,
    useFormState: pm,
    useActionState: pm,
    useOptimistic: function(l) {
      var n = Rl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = kf.bind(
        null,
        xe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Br,
    useCacheRefresh: function() {
      return Rl().memoizedState = a0.bind(
        null,
        xe
      );
    }
  }, Dm = {
    readContext: al,
    use: Lt,
    useCallback: ic,
    useContext: al,
    useEffect: Pp,
    useImperativeHandle: Kr,
    useInsertionEffect: gm,
    useLayoutEffect: tn,
    useMemo: bm,
    useReducer: Lf,
    useRef: Jf,
    useState: function() {
      return Lf(Dn);
    },
    useDebugValue: uc,
    useDeferredValue: function(l, n) {
      var u = Nt();
      return Sm(
        u,
        ut.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Lf(Dn)[0], n = Nt().memoizedState;
      return [
        typeof l == "boolean" ? l : Vf(l),
        n
      ];
    },
    useSyncExternalStore: Gf,
    useId: Tm,
    useHostTransitionStatus: Na,
    useFormState: zn,
    useActionState: zn,
    useOptimistic: function(l, n) {
      var u = Nt();
      return Vr(u, ut, l, n);
    },
    useMemoCache: Br,
    useCacheRefresh: l0
  }, pu = {
    readContext: al,
    use: Lt,
    useCallback: ic,
    useContext: al,
    useEffect: Pp,
    useImperativeHandle: Kr,
    useInsertionEffect: gm,
    useLayoutEffect: tn,
    useMemo: bm,
    useReducer: _r,
    useRef: Jf,
    useState: function() {
      return _r(Dn);
    },
    useDebugValue: uc,
    useDeferredValue: function(l, n) {
      var u = Nt();
      return ut === null ? Kf(u, l, n) : Sm(
        u,
        ut.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = _r(Dn)[0], n = Nt().memoizedState;
      return [
        typeof l == "boolean" ? l : Vf(l),
        n
      ];
    },
    useSyncExternalStore: Gf,
    useId: Tm,
    useHostTransitionStatus: Na,
    useFormState: Jr,
    useActionState: Jr,
    useOptimistic: function(l, n) {
      var u = Nt();
      return ut !== null ? Vr(u, ut, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Br,
    useCacheRefresh: l0
  }, fc = null, mo = 0;
  function Wr(l) {
    var n = mo;
    return mo += 1, fc === null && (fc = []), um(fc, l, n);
  }
  function sc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Ol(l, n) {
    throw n.$$typeof === te ? Error(g(525)) : (l = Object.prototype.toString.call(n), Error(
      g(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function zm(l) {
    var n = l._init;
    return n(l._payload);
  }
  function Wl(l) {
    function n(C, M) {
      if (l) {
        var H = C.deletions;
        H === null ? (C.deletions = [M], C.flags |= 16) : H.push(M);
      }
    }
    function u(C, M) {
      if (!l) return null;
      for (; M !== null; )
        n(C, M), M = M.sibling;
      return null;
    }
    function c(C) {
      for (var M = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? M.set(C.key, C) : M.set(C.index, C), C = C.sibling;
      return M;
    }
    function s(C, M) {
      return C = Fa(C, M), C.index = 0, C.sibling = null, C;
    }
    function r(C, M, H) {
      return C.index = H, l ? (H = C.alternate, H !== null ? (H = H.index, H < M ? (C.flags |= 67108866, M) : H) : (C.flags |= 67108866, M)) : (C.flags |= 1048576, M);
    }
    function y(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function v(C, M, H, K) {
      return M === null || M.tag !== 6 ? (M = eo(H, C.mode, K), M.return = C, M) : (M = s(M, H), M.return = C, M);
    }
    function A(C, M, H, K) {
      var oe = H.type;
      return oe === ae ? J(
        C,
        M,
        H.props.children,
        K,
        H.key
      ) : M !== null && (M.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Dt && zm(oe) === M.type) ? (M = s(M, H.props), sc(M, H), M.return = C, M) : (M = P(
        H.type,
        H.key,
        H.props,
        null,
        C.mode,
        K
      ), sc(M, H), M.return = C, M);
    }
    function N(C, M, H, K) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== H.containerInfo || M.stateNode.implementation !== H.implementation ? (M = zt(H, C.mode, K), M.return = C, M) : (M = s(M, H.children || []), M.return = C, M);
    }
    function J(C, M, H, K, oe) {
      return M === null || M.tag !== 7 ? (M = za(
        H,
        C.mode,
        K,
        oe
      ), M.return = C, M) : (M = s(M, H), M.return = C, M);
    }
    function $(C, M, H) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = eo(
          "" + M,
          C.mode,
          H
        ), M.return = C, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ce:
            return H = P(
              M.type,
              M.key,
              M.props,
              null,
              C.mode,
              H
            ), sc(H, M), H.return = C, H;
          case pe:
            return M = zt(
              M,
              C.mode,
              H
            ), M.return = C, M;
          case Dt:
            var K = M._init;
            return M = K(M._payload), $(C, M, H);
        }
        if (Qt(M) || Ue(M))
          return M = za(
            M,
            C.mode,
            H,
            null
          ), M.return = C, M;
        if (typeof M.then == "function")
          return $(C, Wr(M), H);
        if (M.$$typeof === Me)
          return $(
            C,
            Cf(C, M),
            H
          );
        Ol(C, M);
      }
      return null;
    }
    function B(C, M, H, K) {
      var oe = M !== null ? M.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return oe !== null ? null : v(C, M, "" + H, K);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ce:
            return H.key === oe ? A(C, M, H, K) : null;
          case pe:
            return H.key === oe ? N(C, M, H, K) : null;
          case Dt:
            return oe = H._init, H = oe(H._payload), B(C, M, H, K);
        }
        if (Qt(H) || Ue(H))
          return oe !== null ? null : J(C, M, H, K, null);
        if (typeof H.then == "function")
          return B(
            C,
            M,
            Wr(H),
            K
          );
        if (H.$$typeof === Me)
          return B(
            C,
            M,
            Cf(C, H),
            K
          );
        Ol(C, H);
      }
      return null;
    }
    function _(C, M, H, K, oe) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return C = C.get(H) || null, v(M, C, "" + K, oe);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case ce:
            return C = C.get(
              K.key === null ? H : K.key
            ) || null, A(M, C, K, oe);
          case pe:
            return C = C.get(
              K.key === null ? H : K.key
            ) || null, N(M, C, K, oe);
          case Dt:
            var je = K._init;
            return K = je(K._payload), _(
              C,
              M,
              H,
              K,
              oe
            );
        }
        if (Qt(K) || Ue(K))
          return C = C.get(H) || null, J(M, C, K, oe, null);
        if (typeof K.then == "function")
          return _(
            C,
            M,
            H,
            Wr(K),
            oe
          );
        if (K.$$typeof === Me)
          return _(
            C,
            M,
            H,
            Cf(M, K),
            oe
          );
        Ol(M, K);
      }
      return null;
    }
    function ge(C, M, H, K) {
      for (var oe = null, je = null, ye = M, Ae = M = 0, cl = null; ye !== null && Ae < H.length; Ae++) {
        ye.index > Ae ? (cl = ye, ye = null) : cl = ye.sibling;
        var Fe = B(
          C,
          ye,
          H[Ae],
          K
        );
        if (Fe === null) {
          ye === null && (ye = cl);
          break;
        }
        l && ye && Fe.alternate === null && n(C, ye), M = r(Fe, M, Ae), je === null ? oe = Fe : je.sibling = Fe, je = Fe, ye = cl;
      }
      if (Ae === H.length)
        return u(C, ye), Ie && ke(C, Ae), oe;
      if (ye === null) {
        for (; Ae < H.length; Ae++)
          ye = $(C, H[Ae], K), ye !== null && (M = r(
            ye,
            M,
            Ae
          ), je === null ? oe = ye : je.sibling = ye, je = ye);
        return Ie && ke(C, Ae), oe;
      }
      for (ye = c(ye); Ae < H.length; Ae++)
        cl = _(
          ye,
          C,
          Ae,
          H[Ae],
          K
        ), cl !== null && (l && cl.alternate !== null && ye.delete(
          cl.key === null ? Ae : cl.key
        ), M = r(
          cl,
          M,
          Ae
        ), je === null ? oe = cl : je.sibling = cl, je = cl);
      return l && ye.forEach(function(Ri) {
        return n(C, Ri);
      }), Ie && ke(C, Ae), oe;
    }
    function ve(C, M, H, K) {
      if (H == null) throw Error(g(151));
      for (var oe = null, je = null, ye = M, Ae = M = 0, cl = null, Fe = H.next(); ye !== null && !Fe.done; Ae++, Fe = H.next()) {
        ye.index > Ae ? (cl = ye, ye = null) : cl = ye.sibling;
        var Ri = B(C, ye, Fe.value, K);
        if (Ri === null) {
          ye === null && (ye = cl);
          break;
        }
        l && ye && Ri.alternate === null && n(C, ye), M = r(Ri, M, Ae), je === null ? oe = Ri : je.sibling = Ri, je = Ri, ye = cl;
      }
      if (Fe.done)
        return u(C, ye), Ie && ke(C, Ae), oe;
      if (ye === null) {
        for (; !Fe.done; Ae++, Fe = H.next())
          Fe = $(C, Fe.value, K), Fe !== null && (M = r(Fe, M, Ae), je === null ? oe = Fe : je.sibling = Fe, je = Fe);
        return Ie && ke(C, Ae), oe;
      }
      for (ye = c(ye); !Fe.done; Ae++, Fe = H.next())
        Fe = _(ye, C, Ae, Fe.value, K), Fe !== null && (l && Fe.alternate !== null && ye.delete(Fe.key === null ? Ae : Fe.key), M = r(Fe, M, Ae), je === null ? oe = Fe : je.sibling = Fe, je = Fe);
      return l && ye.forEach(function(Pg) {
        return n(C, Pg);
      }), Ie && ke(C, Ae), oe;
    }
    function lt(C, M, H, K) {
      if (typeof H == "object" && H !== null && H.type === ae && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case ce:
            e: {
              for (var oe = H.key; M !== null; ) {
                if (M.key === oe) {
                  if (oe = H.type, oe === ae) {
                    if (M.tag === 7) {
                      u(
                        C,
                        M.sibling
                      ), K = s(
                        M,
                        H.props.children
                      ), K.return = C, C = K;
                      break e;
                    }
                  } else if (M.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === Dt && zm(oe) === M.type) {
                    u(
                      C,
                      M.sibling
                    ), K = s(M, H.props), sc(K, H), K.return = C, C = K;
                    break e;
                  }
                  u(C, M);
                  break;
                } else n(C, M);
                M = M.sibling;
              }
              H.type === ae ? (K = za(
                H.props.children,
                C.mode,
                K,
                H.key
              ), K.return = C, C = K) : (K = P(
                H.type,
                H.key,
                H.props,
                null,
                C.mode,
                K
              ), sc(K, H), K.return = C, C = K);
            }
            return y(C);
          case pe:
            e: {
              for (oe = H.key; M !== null; ) {
                if (M.key === oe)
                  if (M.tag === 4 && M.stateNode.containerInfo === H.containerInfo && M.stateNode.implementation === H.implementation) {
                    u(
                      C,
                      M.sibling
                    ), K = s(M, H.children || []), K.return = C, C = K;
                    break e;
                  } else {
                    u(C, M);
                    break;
                  }
                else n(C, M);
                M = M.sibling;
              }
              K = zt(H, C.mode, K), K.return = C, C = K;
            }
            return y(C);
          case Dt:
            return oe = H._init, H = oe(H._payload), lt(
              C,
              M,
              H,
              K
            );
        }
        if (Qt(H))
          return ge(
            C,
            M,
            H,
            K
          );
        if (Ue(H)) {
          if (oe = Ue(H), typeof oe != "function") throw Error(g(150));
          return H = oe.call(H), ve(
            C,
            M,
            H,
            K
          );
        }
        if (typeof H.then == "function")
          return lt(
            C,
            M,
            Wr(H),
            K
          );
        if (H.$$typeof === Me)
          return lt(
            C,
            M,
            Cf(C, H),
            K
          );
        Ol(C, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, M !== null && M.tag === 6 ? (u(C, M.sibling), K = s(M, H), K.return = C, C = K) : (u(C, M), K = eo(H, C.mode, K), K.return = C, C = K), y(C)) : u(C, M);
    }
    return function(C, M, H, K) {
      try {
        mo = 0;
        var oe = lt(
          C,
          M,
          H,
          K
        );
        return fc = null, oe;
      } catch (ye) {
        if (ye === ai || ye === wf) throw ye;
        var je = Jl(29, ye, null, C.mode);
        return je.lanes = K, je.return = C, je;
      } finally {
      }
    };
  }
  var rc = Wl(!0), Mn = Wl(!1), ha = de(null), Dl = null;
  function gu(l) {
    var n = l.alternate;
    Te(ht, ht.current & 1), Te(ha, l), Dl === null && (n === null || nc.current !== null || n.memoizedState !== null) && (Dl = l);
  }
  function Un(l) {
    if (l.tag === 22) {
      if (Te(ht, ht.current), Te(ha, l), Dl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Dl = l);
      }
    } else xn();
  }
  function xn() {
    Te(ht, ht.current), Te(ha, ha.current);
  }
  function ln(l) {
    ue(ha), Dl === l && (Dl = null), ue(ht);
  }
  var ht = de(0);
  function $f(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || vs(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function ci(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : W({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Fr = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = ma(), s = kl(c);
      s.payload = n, u != null && (s.callback = u), n = On(l, s, c), n !== null && (ya(n, l, c), ac(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = ma(), s = kl(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = On(l, s, c), n !== null && (ya(n, l, c), ac(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = ma(), c = kl(u);
      c.tag = 2, n != null && (c.callback = n), n = On(l, c, u), n !== null && (ya(n, l, u), ac(n, l, u));
    }
  };
  function yo(l, n, u, c, s, r, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, y) : n.prototype && n.prototype.isPureReactComponent ? !ku(u, c) || !ku(s, r) : !0;
  }
  function dc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Fr.enqueueReplaceState(n, n.state, null);
  }
  function oi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = W({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var Wf = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function po(l) {
    Wf(l);
  }
  function Mm(l) {
    console.error(l);
  }
  function Ff(l) {
    Wf(l);
  }
  function If(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Um(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function xm(l, n, u) {
    return u = kl(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      If(l, n);
    }, u;
  }
  function Cm(l) {
    return l = kl(l), l.tag = 3, l;
  }
  function Fl(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        Um(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      Um(n, u, c), typeof s != "function" && (di === null ? di = /* @__PURE__ */ new Set([this]) : di.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function u0(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && uo(
        n,
        u,
        s,
        !0
      ), u = ha.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Dl === null ? Tc() : u.alternate === null && _t === 0 && (_t = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Dr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Ad(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Dr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Ad(l, c, s)), !1;
        }
        throw Error(g(435, u.tag));
      }
      return Ad(l, c, s), Tc(), !1;
    }
    if (Ie)
      return n = ha.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== ec && (l = Error(g(422), { cause: c }), no(sa(l, u)))) : (c !== ec && (n = Error(g(423), {
        cause: c
      }), no(
        sa(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = sa(c, u), s = xm(
        l.stateNode,
        c,
        s
      ), om(l, s), _t !== 4 && (_t = 2)), !1;
    var r = Error(g(520), { cause: c });
    if (r = sa(r, u), Ao === null ? Ao = [r] : Ao.push(r), _t !== 4 && (_t = 2), n === null) return !0;
    c = sa(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = xm(u.stateNode, c, l), om(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (di === null || !di.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Cm(s), Fl(
              s,
              l,
              u,
              c
            ), om(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var wt = Error(g(461)), $t = !1;
  function ul(l, n, u, c) {
    n.child = l === null ? Mn(n, null, u, c) : rc(
      n,
      l.child,
      u,
      c
    );
  }
  function i0(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var v in c)
        v !== "ref" && (y[v] = c[v]);
    } else y = c;
    return ti(n), c = Hr(
      l,
      n,
      u,
      y,
      r,
      s
    ), v = Nr(), l !== null && !$t ? (ro(l, n, s), Cn(l, n, s)) : (Ie && v && Pi(n), n.flags |= 1, ul(l, n, c, s), n.child);
  }
  function vu(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Df(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, hc(
        l,
        n,
        r,
        c,
        s
      )) : (l = P(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !cd(l, s)) {
      var y = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ku, u(y, c) && l.ref === n.ref)
        return Cn(l, n, s);
    }
    return n.flags |= 1, l = Fa(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function hc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (ku(r, c) && l.ref === n.ref)
        if ($t = !1, n.pendingProps = c = r, cd(l, s))
          (l.flags & 131072) !== 0 && ($t = !0);
        else
          return n.lanes = l.lanes, Cn(l, n, s);
    }
    return Pr(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Ir(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return mc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && tc(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? nl(n, r) : fo(), Un(n);
      else
        return n.lanes = n.childLanes = 536870912, mc(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (tc(n, r.cachePool), nl(n, r), xn(), n.memoizedState = null) : (l !== null && tc(n, null), fo(), xn());
    return ul(l, n, s, u), n.child;
  }
  function mc(l, n, u, c) {
    var s = Nf();
    return s = s === null ? null : { parent: Kt._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && tc(n, null), fo(), Un(n), l !== null && uo(l, n, c, !0), null;
  }
  function Pf(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(g(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Pr(l, n, u, c, s) {
    return ti(n), u = Hr(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Nr(), l !== null && !$t ? (ro(l, n, s), Cn(l, n, s)) : (Ie && c && Pi(n), n.flags |= 1, ul(l, n, u, s), n.child);
  }
  function Hm(l, n, u, c, s, r) {
    return ti(n), n.updateQueue = null, u = rm(
      n,
      c,
      u,
      s
    ), ui(l), c = Nr(), l !== null && !$t ? (ro(l, n, r), Cn(l, n, r)) : (Ie && c && Pi(n), n.flags |= 1, ul(l, n, u, r), n.child);
  }
  function ed(l, n, u, c, s) {
    if (ti(n), n.stateNode === null) {
      var r = Pc, y = u.contextType;
      typeof y == "object" && y !== null && (r = al(y)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Fr, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Mr(n), y = u.contextType, r.context = typeof y == "object" && y !== null ? al(y) : Pc, r.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (ci(
        n,
        u,
        y,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (y = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), y !== r.state && Fr.enqueueReplaceState(r, r.state, null), mu(n, c, r, s), oo(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, A = oi(u, v);
      r.props = A;
      var N = r.context, J = u.contextType;
      y = Pc, typeof J == "object" && J !== null && (y = al(J));
      var $ = u.getDerivedStateFromProps;
      J = typeof $ == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, J || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || N !== y) && dc(
        n,
        r,
        c,
        y
      ), Rn = !1;
      var B = n.memoizedState;
      r.state = B, mu(n, c, r, s), oo(), N = n.memoizedState, v || B !== N || Rn ? (typeof $ == "function" && (ci(
        n,
        u,
        $,
        c
      ), N = n.memoizedState), (A = Rn || yo(
        n,
        u,
        A,
        c,
        B,
        N,
        y
      )) ? (J || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = N), r.props = c, r.state = N, r.context = y, c = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Ur(l, n), y = n.memoizedProps, J = oi(u, y), r.props = J, $ = n.pendingProps, B = r.context, N = u.contextType, A = Pc, typeof N == "object" && N !== null && (A = al(N)), v = u.getDerivedStateFromProps, (N = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y !== $ || B !== A) && dc(
        n,
        r,
        c,
        A
      ), Rn = !1, B = n.memoizedState, r.state = B, mu(n, c, r, s), oo();
      var _ = n.memoizedState;
      y !== $ || B !== _ || Rn || l !== null && l.dependencies !== null && xf(l.dependencies) ? (typeof v == "function" && (ci(
        n,
        u,
        v,
        c
      ), _ = n.memoizedState), (J = Rn || yo(
        n,
        u,
        J,
        c,
        B,
        _,
        A
      ) || l !== null && l.dependencies !== null && xf(l.dependencies)) ? (N || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, _, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        _,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = _), r.props = c, r.state = _, r.context = A, c = J) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Pf(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = rc(
      n,
      l.child,
      null,
      s
    ), n.child = rc(
      n,
      null,
      u,
      s
    )) : ul(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Cn(
      l,
      n,
      s
    ), l;
  }
  function td(l, n, u, c) {
    return ao(), n.flags |= 256, ul(l, n, u, c), n.child;
  }
  var ld = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Nm(l) {
    return { baseLanes: l, cachePool: Rr() };
  }
  function wm(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= qa), l;
  }
  function Bm(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, y;
    if ((y = r) || (y = l !== null && l.memoizedState === null ? !1 : (ht.current & 2) !== 0), y && (s = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (Ie) {
        if (s ? gu(n) : xn(), Ie) {
          var v = et, A;
          if (A = v) {
            e: {
              for (A = v, v = xa; A.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (A = nn(
                  A.nextSibling
                ), A === null) {
                  v = null;
                  break e;
                }
              }
              v = A;
            }
            v !== null ? (n.memoizedState = {
              dehydrated: v,
              treeContext: su !== null ? { id: Ia, overflow: Ht } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, A = Jl(
              18,
              null,
              null,
              0
            ), A.stateNode = v, A.return = n, n.child = A, Vt = n, et = null, A = !0) : A = !1;
          }
          A || ru(n);
        }
        if (v = n.memoizedState, v !== null && (v = v.dehydrated, v !== null))
          return vs(v) ? n.lanes = 32 : n.lanes = 536870912, null;
        ln(n);
      }
      return v = c.children, c = c.fallback, s ? (xn(), s = n.mode, v = nd(
        { mode: "hidden", children: v },
        s
      ), c = za(
        c,
        s,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, s = n.child, s.memoizedState = Nm(u), s.childLanes = wm(
        l,
        y,
        u
      ), n.memoizedState = ld, c) : (gu(n), ad(n, v));
    }
    if (A = l.memoizedState, A !== null && (v = A.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (gu(n), n.flags &= -257, n = fi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (xn(), n.child = l.child, n.flags |= 128, n = null) : (xn(), s = c.fallback, v = n.mode, c = nd(
          { mode: "visible", children: c.children },
          v
        ), s = za(
          s,
          v,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, rc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Nm(u), c.childLanes = wm(
          l,
          y,
          u
        ), n.memoizedState = ld, n = s);
      else if (gu(n), vs(v)) {
        if (y = v.nextSibling && v.nextSibling.dataset, y) var N = y.dgst;
        y = N, c = Error(g(419)), c.stack = "", c.digest = y, no({ value: c, source: null, stack: null }), n = fi(
          l,
          n,
          u
        );
      } else if ($t || uo(l, n, u, !1), y = (u & l.childLanes) !== 0, $t || y) {
        if (y = yt, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : Qa(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, bn(l, c), ya(y, l, c), wt;
        v.data === "$?" || Tc(), n = fi(
          l,
          n,
          u
        );
      } else
        v.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, et = nn(
          v.nextSibling
        ), Vt = n, Ie = !0, Ua = null, xa = !1, l !== null && (Ma[Kl++] = Ia, Ma[Kl++] = Ht, Ma[Kl++] = su, Ia = l.id, Ht = l.overflow, su = n), n = ad(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (xn(), s = c.fallback, v = n.mode, A = l.child, N = A.sibling, c = Fa(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, N !== null ? s = Fa(N, s) : (s = za(
      s,
      v,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, v = l.child.memoizedState, v === null ? v = Nm(u) : (A = v.cachePool, A !== null ? (N = Kt._currentValue, A = A.parent !== N ? { parent: N, pool: N } : A) : A = Rr(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: A
    }), s.memoizedState = v, s.childLanes = wm(
      l,
      y,
      u
    ), n.memoizedState = ld, c) : (gu(n), u = l.child, l = u.sibling, u = Fa(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function ad(l, n) {
    return n = nd(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function nd(l, n) {
    return l = Jl(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function fi(l, n, u) {
    return rc(n, l.child, null, u), l = ad(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function es(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), br(l.return, n, u);
  }
  function ud(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function id(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (ul(l, n, c.children, u), c = ht.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && es(l, u, n);
          else if (l.tag === 19)
            es(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (Te(ht, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && $f(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), ud(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && $f(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        ud(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        ud(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Cn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Tu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (uo(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(g(153));
    if (n.child !== null) {
      for (l = n.child, u = Fa(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Fa(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function cd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && xf(l)));
  }
  function c0(l, n, u) {
    switch (n.tag) {
      case 3:
        Ct(n, n.stateNode.containerInfo), hu(n, Kt, l.memoizedState.cache), ao();
        break;
      case 27:
      case 5:
        Aa(n);
        break;
      case 4:
        Ct(n, n.stateNode.containerInfo);
        break;
      case 10:
        hu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (gu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Bm(l, n, u) : (gu(n), l = Cn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        gu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (uo(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return id(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Te(ht, ht.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Ir(l, n, u);
      case 24:
        hu(n, Kt, l.memoizedState.cache);
    }
    return Cn(l, n, u);
  }
  function o0(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        $t = !0;
      else {
        if (!cd(l, u) && (n.flags & 128) === 0)
          return $t = !1, c0(
            l,
            n,
            u
          );
        $t = (l.flags & 131072) !== 0;
      }
    else
      $t = !1, Ie && (n.flags & 1048576) !== 0 && vr(n, to, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            Df(c) ? (l = oi(c, l), n.tag = 1, n = ed(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Pr(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === Pe) {
                n.tag = 11, n = i0(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Be) {
                n.tag = 14, n = vu(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Cl(c) || c, Error(g(306, n, ""));
          }
        }
        return n;
      case 0:
        return Pr(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = oi(
          c,
          n.pendingProps
        ), ed(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Ct(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(g(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Ur(l, n), mu(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, hu(n, Kt, c), c !== r.cache && am(
            n,
            [Kt],
            u,
            !0
          ), oo(), c = y.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = td(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = sa(
                Error(g(424)),
                n
              ), no(s), n = td(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (et = nn(l.firstChild), Vt = n, Ie = !0, Ua = null, xa = !0, u = Mn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (ao(), c === s) {
              n = Cn(
                l,
                n,
                u
              );
              break e;
            }
            ul(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Pf(l, n), l === null ? (u = R0(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : Ie || (u = n.type, l = n.pendingProps, c = Ya(
          Ke.current
        ).createElement(u), c[ll] = n, c[Nl] = l, Re(c, u, l), Jt(c), n.stateNode = c) : n.memoizedState = R0(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Aa(n), l === null && Ie && (c = n.stateNode = ie(
          n.type,
          n.pendingProps,
          Ke.current
        ), Vt = n, xa = !0, s = et, vi(n.type) ? (bi = s, et = nn(
          c.firstChild
        )) : et = s), ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), Pf(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && Ie && ((s = c = et) && (c = Bo(
          c,
          n.type,
          n.pendingProps,
          xa
        ), c !== null ? (n.stateNode = c, Vt = n, et = nn(
          c.firstChild
        ), xa = !1, s = !0) : s = !1), s || ru(n)), Aa(n), s = n.type, r = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = r.children, Vn(s, r) ? c = null : y !== null && Vn(s, y) && (n.flags |= 32), n.memoizedState !== null && (s = Hr(
          l,
          n,
          Wp,
          null,
          null,
          u
        ), aa._currentValue = s), Pf(l, n), ul(l, n, c, u), n.child;
      case 6:
        return l === null && Ie && ((l = u = et) && (u = Wg(
          u,
          n.pendingProps,
          xa
        ), u !== null ? (n.stateNode = u, Vt = n, et = null, l = !0) : l = !1), l || ru(n)), null;
      case 13:
        return Bm(l, n, u);
      case 4:
        return Ct(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = rc(
          n,
          null,
          c,
          u
        ) : ul(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return i0(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return ul(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, hu(n, n.type, c.value), ul(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, ti(n), s = al(s), c = c(s), n.flags |= 1, ul(l, n, c, u), n.child;
      case 14:
        return vu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return hc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return id(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = nd(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = Fa(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return Ir(l, n, u);
      case 24:
        return ti(n), c = al(Kt), l === null ? (s = Nf(), s === null && (s = yt, r = co(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, Mr(n), hu(n, Kt, s)) : ((l.lanes & u) !== 0 && (Ur(l, n), mu(n, null, null, u), oo()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), hu(n, Kt, c)) : (c = r.cache, hu(n, Kt, c), c !== s.cache && am(
          n,
          [Kt],
          u,
          !0
        ))), ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(g(156, n.tag));
  }
  function Hn(l) {
    l.flags |= 4;
  }
  function go(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !vy(n)) {
      if (n = ha.current, n !== null && ((Qe & 4194048) === Qe ? Dl !== null : (Qe & 62914560) !== Qe && (Qe & 536870912) === 0 || n !== Dl))
        throw lc = Dr, Or;
      l.flags |= 8192;
    }
  }
  function ts(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Ni() : 536870912, l.lanes |= n, Eo |= n);
  }
  function vo(l, n) {
    if (!Ie)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ee(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function qm(l, n, u) {
    var c = n.pendingProps;
    switch (Sn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ee(n), null;
      case 1:
        return Ee(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Tn(Kt), sl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (lo(n) ? Hn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, lm())), Ee(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Hn(n), u !== null ? (Ee(n), go(n, u)) : (Ee(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Hn(n), Ee(n), go(n, u)) : (Ee(n), n.flags &= -16777217) : (l.memoizedProps !== c && Hn(n), Ee(n), n.flags &= -16777217), null;
      case 27:
        xi(n), u = Ke.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Hn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(g(166));
            return Ee(n), null;
          }
          l = Le.current, lo(n) ? Mf(n) : (l = ie(s, c, u), n.stateNode = l, Hn(n));
        }
        return Ee(n), null;
      case 5:
        if (xi(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Hn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(g(166));
            return Ee(n), null;
          }
          if (l = Le.current, lo(n))
            Mf(n);
          else {
            switch (s = Ya(
              Ke.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[ll] = n, l[Nl] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (Re(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Hn(n);
          }
        }
        return Ee(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Hn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(g(166));
          if (l = Ke.current, lo(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Vt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[ll] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || my(l.nodeValue, u)), l || ru(n);
          } else
            l = Ya(l).createTextNode(
              c
            ), l[ll] = n, n.stateNode = l;
        }
        return Ee(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = lo(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(g(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(g(317));
              s[ll] = n;
            } else
              ao(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ee(n), s = !1;
          } else
            s = lm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (ln(n), n) : (ln(n), null);
        }
        if (ln(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), ts(n, n.updateQueue), Ee(n), null;
      case 4:
        return sl(), l === null && dy(n.stateNode.containerInfo), Ee(n), null;
      case 10:
        return Tn(n.type), Ee(n), null;
      case 19:
        if (ue(ht), s = n.memoizedState, s === null) return Ee(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) vo(s, !1);
          else {
            if (_t !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = $f(l), r !== null) {
                  for (n.flags |= 128, vo(s, !1), l = r.updateQueue, n.updateQueue = l, ts(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Ye(u, l), u = u.sibling;
                  return Te(
                    ht,
                    ht.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && ia() > pd && (n.flags |= 128, c = !0, vo(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = $f(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, ts(n, l), vo(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !Ie)
                return Ee(n), null;
            } else
              2 * ia() - s.renderingStartTime > pd && u !== 536870912 && (n.flags |= 128, c = !0, vo(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = ia(), n.sibling = null, l = ht.current, Te(ht, c ? l & 1 | 2 : l & 1), n) : (Ee(n), null);
      case 22:
      case 23:
        return ln(n), so(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ee(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ee(n), u = n.updateQueue, u !== null && ts(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && ue(An), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Tn(Kt), Ee(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(g(156, n.tag));
  }
  function Gg(l, n) {
    switch (Sn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Tn(Kt), sl(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return xi(n), null;
      case 13:
        if (ln(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(g(340));
          ao();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return ue(ht), null;
      case 4:
        return sl(), null;
      case 10:
        return Tn(n.type), null;
      case 22:
      case 23:
        return ln(n), so(), l !== null && ue(An), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Tn(Kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _m(l, n) {
    switch (Sn(n), n.tag) {
      case 3:
        Tn(Kt), sl();
        break;
      case 26:
      case 27:
      case 5:
        xi(n);
        break;
      case 4:
        sl();
        break;
      case 13:
        ln(n);
        break;
      case 19:
        ue(ht);
        break;
      case 10:
        Tn(n.type);
        break;
      case 22:
      case 23:
        ln(n), so(), l !== null && ue(An);
        break;
      case 24:
        Tn(Kt);
    }
  }
  function ls(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, y = u.inst;
            c = r(), y.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      st(n, n.return, v);
    }
  }
  function si(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, v = y.destroy;
            if (v !== void 0) {
              y.destroy = void 0, s = n;
              var A = u, N = v;
              try {
                N();
              } catch (J) {
                st(
                  s,
                  A,
                  J
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (J) {
      st(n, n.return, J);
    }
  }
  function od(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        qf(n, u);
      } catch (c) {
        st(l, l.return, c);
      }
    }
  }
  function Ym(l, n, u) {
    u.props = oi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      st(l, n, c);
    }
  }
  function bo(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      st(l, n, s);
    }
  }
  function an(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          st(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          st(l, n, s);
        }
      else u.current = null;
  }
  function So(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      st(l, l.return, s);
    }
  }
  function jm(l, n, u) {
    try {
      var c = l.stateNode;
      Kg(c, l.type, u, n), c[Nl] = n;
    } catch (s) {
      st(l, l.return, s);
    }
  }
  function f0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && vi(l.type) || l.tag === 4;
  }
  function wa(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || f0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && vi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function yc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Md));
    else if (c !== 4 && (c === 27 && vi(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (yc(l, n, u), l = l.sibling; l !== null; )
        yc(l, n, u), l = l.sibling;
  }
  function fd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && vi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (fd(l, n, u), l = l.sibling; l !== null; )
        fd(l, n, u), l = l.sibling;
  }
  function sd(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Re(n, c, u), n[ll] = l, n[Nl] = u;
    } catch (r) {
      st(l, l.return, r);
    }
  }
  var Nn = !1, Bt = !1, rd = !1, dd = typeof WeakSet == "function" ? WeakSet : Set, Wt = null;
  function Vm(l, n) {
    if (l = l.containerInfo, ys = Ts, l = $h(l), Rf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, v = -1, A = -1, N = 0, J = 0, $ = l, B = null;
            t: for (; ; ) {
              for (var _; $ !== u || s !== 0 && $.nodeType !== 3 || (v = y + s), $ !== r || c !== 0 && $.nodeType !== 3 || (A = y + c), $.nodeType === 3 && (y += $.nodeValue.length), (_ = $.firstChild) !== null; )
                B = $, $ = _;
              for (; ; ) {
                if ($ === l) break t;
                if (B === u && ++N === s && (v = y), B === r && ++J === c && (A = y), (_ = $.nextSibling) !== null) break;
                $ = B, B = $.parentNode;
              }
              $ = _;
            }
            u = v === -1 || A === -1 ? null : { start: v, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (ps = { focusedElem: l, selectionRange: u }, Ts = !1, Wt = n; Wt !== null; )
      if (n = Wt, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, Wt = l;
      else
        for (; Wt !== null; ) {
          switch (n = Wt, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ge = oi(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ge,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ve) {
                  st(
                    u,
                    u.return,
                    ve
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  gs(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gs(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(g(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Wt = l;
            break;
          }
          Wt = n.return;
        }
  }
  function Lm(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Bn(l, u), c & 4 && ls(5, u);
        break;
      case 1:
        if (Bn(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              st(u, u.return, y);
            }
          else {
            var s = oi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              st(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && od(u), c & 512 && bo(u, u.return);
        break;
      case 3:
        if (Bn(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            qf(l, n);
          } catch (y) {
            st(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && sd(u);
      case 26:
      case 5:
        Bn(l, u), n === null && c & 4 && So(u), c & 512 && bo(u, u.return);
        break;
      case 12:
        Bn(l, u);
        break;
      case 13:
        Bn(l, u), c & 4 && hd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Xg.bind(
          null,
          u
        ), Fg(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Nn, !c) {
          n = n !== null && n.memoizedState !== null || Bt, s = Nn;
          var r = Bt;
          Nn = c, (Bt = n) && !r ? ri(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Bn(l, u), Nn = s, Bt = r;
        }
        break;
      case 30:
        break;
      default:
        Bn(l, u);
    }
  }
  function Gm(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Gm(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && of(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Et = null, ml = !1;
  function wn(l, n, u) {
    for (u = u.child; u !== null; )
      Ge(l, n, u), u = u.sibling;
  }
  function Ge(l, n, u) {
    if (Hl && typeof Hl.onCommitFiberUnmount == "function")
      try {
        Hl.onCommitFiberUnmount(Vc, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Bt || an(u, n), wn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Bt || an(u, n);
        var c = Et, s = ml;
        vi(u.type) && (Et = u.stateNode, ml = !1), wn(
          l,
          n,
          u
        ), ta(u.stateNode), Et = c, ml = s;
        break;
      case 5:
        Bt || an(u, n);
      case 6:
        if (c = Et, s = ml, Et = null, wn(
          l,
          n,
          u
        ), Et = c, ml = s, Et !== null)
          if (ml)
            try {
              (Et.nodeType === 9 ? Et.body : Et.nodeName === "HTML" ? Et.ownerDocument.body : Et).removeChild(u.stateNode);
            } catch (r) {
              st(
                u,
                n,
                r
              );
            }
          else
            try {
              Et.removeChild(u.stateNode);
            } catch (r) {
              st(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        Et !== null && (ml ? (l = Et, xd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Xn(l)) : xd(Et, u.stateNode));
        break;
      case 4:
        c = Et, s = ml, Et = u.stateNode.containerInfo, ml = !0, wn(
          l,
          n,
          u
        ), Et = c, ml = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bt || si(2, u, n), Bt || si(4, u, n), wn(
          l,
          n,
          u
        );
        break;
      case 1:
        Bt || (an(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Ym(
          u,
          n,
          c
        )), wn(
          l,
          n,
          u
        );
        break;
      case 21:
        wn(
          l,
          n,
          u
        );
        break;
      case 22:
        Bt = (c = Bt) || u.memoizedState !== null, wn(
          l,
          n,
          u
        ), Bt = c;
        break;
      default:
        wn(
          l,
          n,
          u
        );
    }
  }
  function hd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Xn(l);
      } catch (u) {
        st(n, n.return, u);
      }
  }
  function Xm(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new dd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new dd()), n;
      default:
        throw Error(g(435, l.tag));
    }
  }
  function md(l, n) {
    var u = Xm(l);
    n.forEach(function(c) {
      var s = Qg.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function ql(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, y = n, v = y;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (vi(v.type)) {
                Et = v.stateNode, ml = !1;
                break e;
              }
              break;
            case 5:
              Et = v.stateNode, ml = !1;
              break e;
            case 3:
            case 4:
              Et = v.stateNode.containerInfo, ml = !0;
              break e;
          }
          v = v.return;
        }
        if (Et === null) throw Error(g(160));
        Ge(r, y, s), Et = null, ml = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        as(n, l), n = n.sibling;
  }
  var _l = null;
  function as(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ql(n, l), il(l), c & 4 && (si(3, l, l.return), ls(3, l), si(5, l, l.return));
        break;
      case 1:
        ql(n, l), il(l), c & 512 && (Bt || u === null || an(u, u.return)), c & 64 && Nn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = _l;
        if (ql(n, l), il(l), c & 512 && (Bt || u === null || an(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[fe] || r[ll] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), Re(r, c, u), r[ll] = l, Jt(r), c = r;
                      break e;
                    case "link":
                      var y = py(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var v = 0; v < y.length; v++)
                          if (r = y[v], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), Re(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (y = py(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < y.length; v++)
                          if (r = y[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(v, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), Re(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(g(468, c));
                  }
                  r[ll] = l, Jt(r), c = r;
                }
                l.stateNode = c;
              } else
                gy(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = D0(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? gy(
              s,
              l.type,
              l.stateNode
            ) : D0(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && jm(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ql(n, l), il(l), c & 512 && (Bt || u === null || an(u, u.return)), u !== null && c & 4 && jm(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ql(n, l), il(l), c & 512 && (Bt || u === null || an(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Qc(s, "");
          } catch (_) {
            st(l, l.return, _);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, jm(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (rd = !0);
        break;
      case 6:
        if (ql(n, l), il(l), c & 4) {
          if (l.stateNode === null)
            throw Error(g(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (_) {
            st(l, l.return, _);
          }
        }
        break;
      case 3:
        if (Ei = null, s = _l, _l = Cd(n.containerInfo), ql(n, l), _l = s, il(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Xn(n.containerInfo);
          } catch (_) {
            st(l, l.return, _);
          }
        rd && (rd = !1, Qm(l));
        break;
      case 4:
        c = _l, _l = Cd(
          l.stateNode.containerInfo
        ), ql(n, l), il(l), _l = c;
        break;
      case 12:
        ql(n, l), il(l);
        break;
      case 13:
        ql(n, l), il(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Im = ia()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, md(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, N = Nn, J = Bt;
        if (Nn = N || s, Bt = J || A, ql(n, l), Bt = J, Nn = N, il(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || Nn || Bt || At(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    y = r.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    v = A.stateNode;
                    var $ = A.memoizedProps.style, B = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    v.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (_) {
                  st(A, A.return, _);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (_) {
                  st(A, A.return, _);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, md(l, u))));
        break;
      case 19:
        ql(n, l), il(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, md(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ql(n, l), il(l);
    }
  }
  function il(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (f0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(g(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = wa(l);
            fd(l, r, s);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Qc(y, ""), u.flags &= -33);
            var v = wa(l);
            fd(l, v, y);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, N = wa(l);
            yc(
              l,
              N,
              A
            );
            break;
          default:
            throw Error(g(161));
        }
      } catch (J) {
        st(l, l.return, J);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Qm(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Qm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Bn(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Lm(l, n.alternate, n), n = n.sibling;
  }
  function At(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          si(4, n, n.return), At(n);
          break;
        case 1:
          an(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Ym(
            n,
            n.return,
            u
          ), At(n);
          break;
        case 27:
          ta(n.stateNode);
        case 26:
        case 5:
          an(n, n.return), At(n);
          break;
        case 22:
          n.memoizedState === null && At(n);
          break;
        case 30:
          At(n);
          break;
        default:
          At(n);
      }
      l = l.sibling;
    }
  }
  function ri(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, y = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ri(
            s,
            r,
            u
          ), ls(4, r);
          break;
        case 1:
          if (ri(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (N) {
              st(c, c.return, N);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var v = c.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  xr(A[s], v);
            } catch (N) {
              st(c, c.return, N);
            }
          }
          u && y & 64 && od(r), bo(r, r.return);
          break;
        case 27:
          sd(r);
        case 26:
        case 5:
          ri(
            s,
            r,
            u
          ), u && c === null && y & 4 && So(r), bo(r, r.return);
          break;
        case 12:
          ri(
            s,
            r,
            u
          );
          break;
        case 13:
          ri(
            s,
            r,
            u
          ), u && y & 4 && hd(s, r);
          break;
        case 22:
          r.memoizedState === null && ri(
            s,
            r,
            u
          ), bo(r, r.return);
          break;
        case 30:
          break;
        default:
          ri(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Ba(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && En(u));
  }
  function yd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && En(l));
  }
  function yl(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Zm(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Zm(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        yl(
          l,
          n,
          u,
          c
        ), s & 2048 && ls(9, n);
        break;
      case 1:
        yl(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        yl(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && En(l)));
        break;
      case 12:
        if (s & 2048) {
          yl(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, y = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            st(n, n.return, A);
          }
        } else
          yl(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        yl(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, y = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? yl(
          l,
          n,
          u,
          c
        ) : tt(l, n) : r._visibility & 2 ? yl(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, bu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && Ba(y, n);
        break;
      case 24:
        yl(
          l,
          n,
          u,
          c
        ), s & 2048 && yd(n.alternate, n);
        break;
      default:
        yl(
          l,
          n,
          u,
          c
        );
    }
  }
  function bu(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, y = n, v = u, A = c, N = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          bu(
            r,
            y,
            v,
            A,
            s
          ), ls(8, y);
          break;
        case 23:
          break;
        case 22:
          var J = y.stateNode;
          y.memoizedState !== null ? J._visibility & 2 ? bu(
            r,
            y,
            v,
            A,
            s
          ) : tt(
            r,
            y
          ) : (J._visibility |= 2, bu(
            r,
            y,
            v,
            A,
            s
          )), s && N & 2048 && Ba(
            y.alternate,
            y
          );
          break;
        case 24:
          bu(
            r,
            y,
            v,
            A,
            s
          ), s && N & 2048 && yd(y.alternate, y);
          break;
        default:
          bu(
            r,
            y,
            v,
            A,
            s
          );
      }
      n = n.sibling;
    }
  }
  function tt(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            tt(u, c), s & 2048 && Ba(
              c.alternate,
              c
            );
            break;
          case 24:
            tt(u, c), s & 2048 && yd(c.alternate, c);
            break;
          default:
            tt(u, c);
        }
        n = n.sibling;
      }
  }
  var pc = 8192;
  function qt(l) {
    if (l.subtreeFlags & pc)
      for (l = l.child; l !== null; )
        s0(l), l = l.sibling;
  }
  function s0(l) {
    switch (l.tag) {
      case 26:
        qt(l), l.flags & pc && l.memoizedState !== null && U0(
          _l,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        qt(l);
        break;
      case 3:
      case 4:
        var n = _l;
        _l = Cd(l.stateNode.containerInfo), qt(l), _l = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = pc, pc = 16777216, qt(l), pc = n) : qt(l));
        break;
      default:
        qt(l);
    }
  }
  function Jm(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function gc(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Wt = c, km(
            c,
            l
          );
        }
      Jm(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Km(l), l = l.sibling;
  }
  function Km(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        gc(l), l.flags & 2048 && si(9, l, l.return);
        break;
      case 3:
        gc(l);
        break;
      case 12:
        gc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Yl(l)) : gc(l);
        break;
      default:
        gc(l);
    }
  }
  function Yl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Wt = c, km(
            c,
            l
          );
        }
      Jm(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          si(8, n, n.return), Yl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Yl(n));
          break;
        default:
          Yl(n);
      }
      l = l.sibling;
    }
  }
  function km(l, n) {
    for (; Wt !== null; ) {
      var u = Wt;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          si(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          En(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Wt = c;
      else
        e: for (u = l; Wt !== null; ) {
          c = Wt;
          var s = c.sibling, r = c.return;
          if (Gm(c), c === u) {
            Wt = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Wt = s;
            break e;
          }
          Wt = r;
        }
    }
  }
  var $m = {
    getCacheForType: function(l) {
      var n = al(Kt), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, r0 = typeof WeakMap == "function" ? WeakMap : Map, it = 0, yt = null, Xe = null, Qe = 0, ot = 0, Il = null, qn = !1, To = !1, Wm = !1, Su = 0, _t = 0, Tu = 0, vc = 0, _n = 0, qa = 0, Eo = 0, Ao = null, Pl = null, Fm = !1, Im = 0, pd = 1 / 0, Ro = null, di = null, pl = 0, Yn = null, Oo = null, gl = 0, gd = 0, vd = null, Pm = null, Do = 0, ey = null;
  function ma() {
    if ((it & 2) !== 0 && Qe !== 0)
      return Qe & -Qe;
    if (U.T !== null) {
      var l = Ca;
      return l !== 0 ? l : Ec();
    }
    return Op();
  }
  function ty() {
    qa === 0 && (qa = (Qe & 536870912) === 0 || Ie ? Yu() : 536870912);
    var l = ha.current;
    return l !== null && (l.flags |= 32), qa;
  }
  function ya(l, n, u) {
    (l === yt && (ot === 2 || ot === 9) || l.cancelPendingCommit !== null) && (jn(l, 0), Eu(
      l,
      Qe,
      qa,
      !1
    )), wi(l, u), ((it & 2) === 0 || l !== yt) && (l === yt && ((it & 2) === 0 && (vc |= u), _t === 4 && Eu(
      l,
      Qe,
      qa,
      !1
    )), ea(l));
  }
  function zo(l, n, u) {
    if ((it & 6) !== 0) throw Error(g(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || rn(l, n), s = c ? ay(l, n) : bd(l, n, !0), r = c;
    do {
      if (s === 0) {
        To && !c && Eu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !d0(u)) {
          s = bd(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var v = l;
              s = Ao;
              var A = v.current.memoizedState.isDehydrated;
              if (A && (jn(v, y).flags |= 256), y = bd(
                v,
                y,
                !1
              ), y !== 2) {
                if (Wm && !A) {
                  v.errorRecoveryDisabledLanes |= r, vc |= r, s = 4;
                  break e;
                }
                r = Pl, Pl = s, r !== null && (Pl === null ? Pl = r : Pl.push.apply(
                  Pl,
                  r
                ));
              }
              s = y;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          jn(l, 0), Eu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(g(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Eu(
                c,
                n,
                qa,
                !qn
              );
              break e;
            case 2:
              Pl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(g(329));
          }
          if ((n & 62914560) === n && (s = Im + 300 - ia(), 10 < s)) {
            if (Eu(
              c,
              n,
              qa,
              !qn
            ), _u(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Ud(
              ns.bind(
                null,
                c,
                u,
                Pl,
                Ro,
                Fm,
                n,
                qa,
                vc,
                Eo,
                qn,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          ns(
            c,
            u,
            Pl,
            Ro,
            Fm,
            n,
            qa,
            vc,
            Eo,
            qn,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ea(l);
  }
  function ns(l, n, u, c, s, r, y, v, A, N, J, $, B, _) {
    if (l.timeoutHandle = -1, $ = n.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (jo = { stylesheets: null, count: 0, unsuspend: M0 }, s0(n), $ = by(), $ !== null)) {
      l.cancelPendingCommit = $(
        y0.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          y,
          v,
          A,
          J,
          1,
          B,
          _
        )
      ), Eu(l, r, y, !N);
      return;
    }
    y0(
      l,
      n,
      r,
      u,
      c,
      s,
      y,
      v,
      A
    );
  }
  function d0(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!hl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Eu(l, n, u, c) {
    n &= ~_n, n &= ~vc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Xl(s), y = 1 << r;
      c[r] = -1, s &= ~y;
    }
    u !== 0 && uf(l, u, n);
  }
  function bc() {
    return (it & 6) === 0 ? (os(0), !1) : !0;
  }
  function hi() {
    if (Xe !== null) {
      if (ot === 0)
        var l = Xe.return;
      else
        l = Xe, Pa = du = null, wr(l), fc = null, mo = 0, l = Xe;
      for (; l !== null; )
        _m(l.alternate, l), l = l.return;
      Xe = null;
    }
  }
  function jn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, kg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), hi(), yt = l, Xe = u = Fa(l.current, null), Qe = n, ot = 0, Il = null, qn = !1, To = rn(l, n), Wm = !1, Eo = qa = _n = vc = Tu = _t = 0, Pl = Ao = null, Fm = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Xl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Su = n, Wa(), u;
  }
  function ly(l, n) {
    xe = null, U.H = $r, n === ai || n === wf ? (n = im(), ot = 3) : n === Or ? (n = im(), ot = 4) : ot = n === wt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Il = n, Xe === null && (_t = 1, If(
      l,
      sa(n, l.current)
    ));
  }
  function h0() {
    var l = U.H;
    return U.H = $r, l === null ? $r : l;
  }
  function Sc() {
    var l = U.A;
    return U.A = $m, l;
  }
  function Tc() {
    _t = 4, qn || (Qe & 4194048) !== Qe && ha.current !== null || (To = !0), (Tu & 134217727) === 0 && (vc & 134217727) === 0 || yt === null || Eu(
      yt,
      Qe,
      qa,
      !1
    );
  }
  function bd(l, n, u) {
    var c = it;
    it |= 2;
    var s = h0(), r = Sc();
    (yt !== l || Qe !== n) && (Ro = null, jn(l, n)), n = !1;
    var y = _t;
    e: do
      try {
        if (ot !== 0 && Xe !== null) {
          var v = Xe, A = Il;
          switch (ot) {
            case 8:
              hi(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ha.current === null && (n = !0);
              var N = ot;
              if (ot = 0, Il = null, Mo(l, v, A, N), u && To) {
                y = 0;
                break e;
              }
              break;
            default:
              N = ot, ot = 0, Il = null, Mo(l, v, A, N);
          }
        }
        Sd(), y = _t;
        break;
      } catch (J) {
        ly(l, J);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Pa = du = null, it = c, U.H = s, U.A = r, Xe === null && (yt = null, Qe = 0, Wa()), y;
  }
  function Sd() {
    for (; Xe !== null; ) uy(Xe);
  }
  function ay(l, n) {
    var u = it;
    it |= 2;
    var c = h0(), s = Sc();
    yt !== l || Qe !== n ? (Ro = null, pd = ia() + 500, jn(l, n)) : To = rn(
      l,
      n
    );
    e: do
      try {
        if (ot !== 0 && Xe !== null) {
          n = Xe;
          var r = Il;
          t: switch (ot) {
            case 1:
              ot = 0, Il = null, Mo(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (zr(r)) {
                ot = 0, Il = null, iy(n);
                break;
              }
              n = function() {
                ot !== 2 && ot !== 9 || yt !== l || (ot = 7), ea(l);
              }, r.then(n, n);
              break e;
            case 3:
              ot = 7;
              break e;
            case 4:
              ot = 5;
              break e;
            case 7:
              zr(r) ? (ot = 0, Il = null, iy(n)) : (ot = 0, Il = null, Mo(l, n, r, 7));
              break;
            case 5:
              var y = null;
              switch (Xe.tag) {
                case 26:
                  y = Xe.memoizedState;
                case 5:
                case 27:
                  var v = Xe;
                  if (!y || vy(y)) {
                    ot = 0, Il = null;
                    var A = v.sibling;
                    if (A !== null) Xe = A;
                    else {
                      var N = v.return;
                      N !== null ? (Xe = N, us(N)) : Xe = null;
                    }
                    break t;
                  }
              }
              ot = 0, Il = null, Mo(l, n, r, 5);
              break;
            case 6:
              ot = 0, Il = null, Mo(l, n, r, 6);
              break;
            case 8:
              hi(), _t = 6;
              break e;
            default:
              throw Error(g(462));
          }
        }
        ny();
        break;
      } catch (J) {
        ly(l, J);
      }
    while (!0);
    return Pa = du = null, U.H = c, U.A = s, it = u, Xe !== null ? 0 : (yt = null, Qe = 0, Wa(), _t);
  }
  function ny() {
    for (; Xe !== null && !xg(); )
      uy(Xe);
  }
  function uy(l) {
    var n = o0(l.alternate, l, Su);
    l.memoizedProps = l.pendingProps, n === null ? us(l) : Xe = n;
  }
  function iy(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Hm(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Qe
        );
        break;
      case 11:
        n = Hm(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Qe
        );
        break;
      case 5:
        wr(n);
      default:
        _m(u, n), n = Xe = Ye(n, Su), n = o0(u, n, Su);
    }
    l.memoizedProps = l.pendingProps, n === null ? us(l) : Xe = n;
  }
  function Mo(l, n, u, c) {
    Pa = du = null, wr(n), fc = null, mo = 0;
    var s = n.return;
    try {
      if (u0(
        l,
        s,
        n,
        u,
        Qe
      )) {
        _t = 1, If(
          l,
          sa(u, l.current)
        ), Xe = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Xe = s, r;
      _t = 1, If(
        l,
        sa(u, l.current)
      ), Xe = null;
      return;
    }
    n.flags & 32768 ? (Ie || c === 1 ? l = !0 : To || (Qe & 536870912) !== 0 ? l = !1 : (qn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ha.current, c !== null && c.tag === 13 && (c.flags |= 16384))), m0(n, l)) : us(n);
  }
  function us(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        m0(
          n,
          qn
        );
        return;
      }
      l = n.return;
      var u = qm(
        n.alternate,
        n,
        Su
      );
      if (u !== null) {
        Xe = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Xe = n;
        return;
      }
      Xe = n = l;
    } while (n !== null);
    _t === 0 && (_t = 5);
  }
  function m0(l, n) {
    do {
      var u = Gg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Xe = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Xe = l;
        return;
      }
      Xe = l = u;
    } while (l !== null);
    _t = 6, Xe = null;
  }
  function y0(l, n, u, c, s, r, y, v, A) {
    l.cancelPendingCommit = null;
    do
      Ed();
    while (pl !== 0);
    if ((it & 6) !== 0) throw Error(g(327));
    if (n !== null) {
      if (n === l.current) throw Error(g(177));
      if (r = n.lanes | n.childLanes, r |= vn, Rp(
        l,
        u,
        r,
        y,
        v,
        A
      ), l === yt && (Xe = yt = null, Qe = 0), Oo = n, Yn = l, gl = u, gd = r, vd = s, Pm = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Zg(nf, function() {
        return cy(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = U.T, U.T = null, s = F.p, F.p = 2, y = it, it |= 4;
        try {
          Vm(l, n, u);
        } finally {
          it = y, F.p = s, U.T = c;
        }
      }
      pl = 1, p0(), is(), Td();
    }
  }
  function p0() {
    if (pl === 1) {
      pl = 0;
      var l = Yn, n = Oo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = U.T, U.T = null;
        var c = F.p;
        F.p = 2;
        var s = it;
        it |= 4;
        try {
          as(n, l);
          var r = ps, y = $h(l.containerInfo), v = r.focusedElem, A = r.selectionRange;
          if (y !== v && v && v.ownerDocument && Af(
            v.ownerDocument.documentElement,
            v
          )) {
            if (A !== null && Rf(v)) {
              var N = A.start, J = A.end;
              if (J === void 0 && (J = N), "selectionStart" in v)
                v.selectionStart = N, v.selectionEnd = Math.min(
                  J,
                  v.value.length
                );
              else {
                var $ = v.ownerDocument || document, B = $ && $.defaultView || window;
                if (B.getSelection) {
                  var _ = B.getSelection(), ge = v.textContent.length, ve = Math.min(A.start, ge), lt = A.end === void 0 ? ve : Math.min(A.end, ge);
                  !_.extend && ve > lt && (y = lt, lt = ve, ve = y);
                  var C = bt(
                    v,
                    ve
                  ), M = bt(
                    v,
                    lt
                  );
                  if (C && M && (_.rangeCount !== 1 || _.anchorNode !== C.node || _.anchorOffset !== C.offset || _.focusNode !== M.node || _.focusOffset !== M.offset)) {
                    var H = $.createRange();
                    H.setStart(C.node, C.offset), _.removeAllRanges(), ve > lt ? (_.addRange(H), _.extend(M.node, M.offset)) : (H.setEnd(M.node, M.offset), _.addRange(H));
                  }
                }
              }
            }
            for ($ = [], _ = v; _ = _.parentNode; )
              _.nodeType === 1 && $.push({
                element: _,
                left: _.scrollLeft,
                top: _.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < $.length; v++) {
              var K = $[v];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Ts = !!ys, ps = ys = null;
        } finally {
          it = s, F.p = c, U.T = u;
        }
      }
      l.current = n, pl = 2;
    }
  }
  function is() {
    if (pl === 2) {
      pl = 0;
      var l = Yn, n = Oo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = U.T, U.T = null;
        var c = F.p;
        F.p = 2;
        var s = it;
        it |= 4;
        try {
          Lm(l, n.alternate, n);
        } finally {
          it = s, F.p = c, U.T = u;
        }
      }
      pl = 3;
    }
  }
  function Td() {
    if (pl === 4 || pl === 3) {
      pl = 0, Hi();
      var l = Yn, n = Oo, u = gl, c = Pm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? pl = 5 : (pl = 0, Oo = Yn = null, g0(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (di = null), Ws(u), n = n.stateNode, Hl && typeof Hl.onCommitFiberRoot == "function")
        try {
          Hl.onCommitFiberRoot(
            Vc,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = U.T, s = F.p, F.p = 2, U.T = null;
        try {
          for (var r = l.onRecoverableError, y = 0; y < c.length; y++) {
            var v = c[y];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          U.T = n, F.p = s;
        }
      }
      (gl & 3) !== 0 && Ed(), ea(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === ey ? Do++ : (Do = 0, ey = l) : Do = 0, os(0);
    }
  }
  function g0(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, En(n)));
  }
  function Ed(l) {
    return p0(), is(), Td(), cy();
  }
  function cy() {
    if (pl !== 5) return !1;
    var l = Yn, n = gd;
    gd = 0;
    var u = Ws(gl), c = U.T, s = F.p;
    try {
      F.p = 32 > u ? 32 : u, U.T = null, u = vd, vd = null;
      var r = Yn, y = gl;
      if (pl = 0, Oo = Yn = null, gl = 0, (it & 6) !== 0) throw Error(g(331));
      var v = it;
      if (it |= 4, Km(r.current), Zm(
        r,
        r.current,
        y,
        u
      ), it = v, os(0, !1), Hl && typeof Hl.onPostCommitFiberRoot == "function")
        try {
          Hl.onPostCommitFiberRoot(Vc, r);
        } catch {
        }
      return !0;
    } finally {
      F.p = s, U.T = c, g0(l, n);
    }
  }
  function oy(l, n, u) {
    n = sa(u, n), n = xm(l.stateNode, n, 2), l = On(l, n, 2), l !== null && (wi(l, 2), ea(l));
  }
  function st(l, n, u) {
    if (l.tag === 3)
      oy(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          oy(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (di === null || !di.has(c))) {
            l = sa(u, l), u = Cm(2), c = On(n, u, 2), c !== null && (Fl(
              u,
              c,
              n,
              l
            ), wi(c, 2), ea(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ad(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new r0();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (Wm = !0, s.add(u), l = fy.bind(null, l, n, u), n.then(l, l));
  }
  function fy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, yt === l && (Qe & u) === u && (_t === 4 || _t === 3 && (Qe & 62914560) === Qe && 300 > ia() - Im ? (it & 2) === 0 && jn(l, 0) : _n |= u, Eo === Qe && (Eo = 0)), ea(l);
  }
  function sy(l, n) {
    n === 0 && (n = Ni()), l = bn(l, n), l !== null && (wi(l, n), ea(l));
  }
  function Xg(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), sy(l, u);
  }
  function Qg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(g(314));
    }
    c !== null && c.delete(n), sy(l, u);
  }
  function Zg(l, n) {
    return Ci(l, n);
  }
  var Rd = null, mi = null, cs = !1, Uo = !1, Od = !1, yi = 0;
  function ea(l) {
    l !== mi && l.next === null && (mi === null ? Rd = mi = l : mi = mi.next = l), Uo = !0, cs || (cs = !0, S0());
  }
  function os(l, n) {
    if (!Od && Uo) {
      Od = !0;
      do
        for (var u = !1, c = Rd; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var y = c.suspendedLanes, v = c.pingedLanes;
              r = (1 << 31 - Xl(42 | l) + 1) - 1, r &= s & ~(y & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, ss(c, r));
          } else
            r = Qe, r = _u(
              c,
              c === yt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || rn(c, r) || (u = !0, ss(c, r));
          c = c.next;
        }
      while (u);
      Od = !1;
    }
  }
  function v0() {
    fs();
  }
  function fs() {
    Uo = cs = !1;
    var l = 0;
    yi !== 0 && (Ou() && (l = yi), yi = 0);
    for (var n = ia(), u = null, c = Rd; c !== null; ) {
      var s = c.next, r = ry(c, n);
      r === 0 ? (c.next = null, u === null ? Rd = s : u.next = s, s === null && (mi = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Uo = !0)), c = s;
    }
    os(l);
  }
  function ry(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var y = 31 - Xl(r), v = 1 << y, A = s[y];
      A === -1 ? ((v & u) === 0 || (v & c) !== 0) && (s[y] = tl(v, n)) : A <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = yt, u = Qe, u = _u(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (ot === 2 || ot === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Sh(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || rn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Sh(c), Ws(u)) {
        case 2:
        case 8:
          u = Th;
          break;
        case 32:
          u = nf;
          break;
        case 268435456:
          u = jc;
          break;
        default:
          u = nf;
      }
      return c = b0.bind(null, l), u = Ci(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Sh(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function b0(l, n) {
    if (pl !== 0 && pl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Ed() && l.callbackNode !== u)
      return null;
    var c = Qe;
    return c = _u(
      l,
      l === yt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (zo(l, c, n), ry(l, ia()), l.callbackNode != null && l.callbackNode === u ? b0.bind(null, l) : null);
  }
  function ss(l, n) {
    if (Ed()) return null;
    zo(l, n, !0);
  }
  function S0() {
    $g(function() {
      (it & 6) !== 0 ? Ci(
        Tp,
        v0
      ) : fs();
    });
  }
  function Ec() {
    return yi === 0 && (yi = Yu()), yi;
  }
  function Dd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : yf("" + l);
  }
  function rs(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function T0(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Dd(
        (s[Nl] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Nl] || null) ? Dd(n.formAction) : y.getAttribute("formAction"), n !== null && (r = n, y = null));
      var v = new or(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (yi !== 0) {
                  var A = y ? rs(s, y) : new FormData(s);
                  kr(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: s.method,
                      action: r
                    },
                    null,
                    A
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), A = y ? rs(s, y) : new FormData(s), kr(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: s.method,
                    action: r
                  },
                  r,
                  A
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Yt = 0; Yt < Wc.length; Yt++) {
    var ds = Wc[Yt], Jg = ds.toLowerCase(), qe = ds[0].toUpperCase() + ds.slice(1);
    Da(
      Jg,
      "on" + qe
    );
  }
  Da(Qp, "onAnimationEnd"), Da(Wh, "onAnimationIteration"), Da(Zp, "onAnimationStart"), Da("dblclick", "onDoubleClick"), Da("focusin", "onFocus"), Da("focusout", "onBlur"), Da(Fh, "onTransitionRun"), Da(gr, "onTransitionStart"), Da(Jp, "onTransitionCancel"), Da(Ih, "onTransitionEnd"), Lu("onMouseEnter", ["mouseout", "mouseover"]), Lu("onMouseLeave", ["mouseout", "mouseover"]), Lu("onPointerEnter", ["pointerout", "pointerover"]), Lu("onPointerLeave", ["pointerout", "pointerover"]), Vu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Vu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Vu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Vu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Vu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Vu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var hs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), pi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hs)
  );
  function Ac(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var v = c[y], A = v.instance, N = v.currentTarget;
            if (v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = N;
            try {
              r(s);
            } catch (J) {
              Wf(J);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (v = c[y], A = v.instance, N = v.currentTarget, v = v.listener, A !== r && s.isPropagationStopped())
              break e;
            r = v, s.currentTarget = N;
            try {
              r(s);
            } catch (J) {
              Wf(J);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function Ce(l, n) {
    var u = n[Fs];
    u === void 0 && (u = n[Fs] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (zd(n, l, 2, !1), u.add(c));
  }
  function xo(l, n, u) {
    var c = 0;
    n && (c |= 4), zd(
      u,
      l,
      c,
      n
    );
  }
  var Co = "_reactListening" + Math.random().toString(36).slice(2);
  function dy(l) {
    if (!l[Co]) {
      l[Co] = !0, sf.forEach(function(u) {
        u !== "selectionchange" && (pi.has(u) || xo(u, !1, l), xo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Co] || (n[Co] = !0, xo("selectionchange", !1, n));
    }
  }
  function zd(l, n, u, c) {
    switch (zy(n)) {
      case 2:
        var s = x0;
        break;
      case 8:
        s = C0;
        break;
      default:
        s = Oy;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ur || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function _a(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var v = c.stateNode.containerInfo;
          if (v === s) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var A = y.tag;
              if ((A === 3 || A === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; v !== null; ) {
            if (y = rl(v), y === null) return;
            if (A = y.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = r = y;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    Kc(function() {
      var N = r, J = nr(u), $ = [];
      e: {
        var B = Ph.get(l);
        if (B !== void 0) {
          var _ = or, ge = l;
          switch (l) {
            case "keypress":
              if (dl(u) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Za;
              break;
            case "focusin":
              ge = "focus", _ = wh;
              break;
            case "focusout":
              ge = "blur", _ = wh;
              break;
            case "beforeblur":
            case "afterblur":
              _ = wh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = Nh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = Bp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = _h;
              break;
            case Qp:
            case Wh:
            case Zp:
              _ = Yg;
              break;
            case Ih:
              _ = Vp;
              break;
            case "scroll":
            case "scrollend":
              _ = Np;
              break;
            case "wheel":
              _ = Ji;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = vf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = bf;
              break;
            case "toggle":
            case "beforetoggle":
              _ = Lp;
          }
          var ve = (n & 4) !== 0, lt = !ve && (l === "scroll" || l === "scrollend"), C = ve ? B !== null ? B + "Capture" : null : B;
          ve = [];
          for (var M = N, H; M !== null; ) {
            var K = M;
            if (H = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || H === null || C === null || (K = Gi(M, C), K != null && ve.push(
              Au(M, K, H)
            )), lt) break;
            M = M.return;
          }
          0 < ve.length && (B = new _(
            B,
            ge,
            null,
            u,
            J
          ), $.push({ event: B, listeners: ve }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (B = l === "mouseover" || l === "pointerover", _ = l === "mouseout" || l === "pointerout", B && u !== Li && (ge = u.relatedTarget || u.fromElement) && (rl(ge) || ge[Gc]))
            break e;
          if ((_ || B) && (B = J.window === J ? J : (B = J.ownerDocument) ? B.defaultView || B.parentWindow : window, _ ? (ge = u.relatedTarget || u.toElement, _ = N, ge = ge ? rl(ge) : null, ge !== null && (lt = D(ge), ve = ge.tag, ge !== lt || ve !== 5 && ve !== 27 && ve !== 6) && (ge = null)) : (_ = null, ge = N), _ !== ge)) {
            if (ve = Nh, K = "onMouseLeave", C = "onMouseEnter", M = "mouse", (l === "pointerout" || l === "pointerover") && (ve = bf, K = "onPointerLeave", C = "onPointerEnter", M = "pointer"), lt = _ == null ? B : ff(_), H = ge == null ? B : ff(ge), B = new ve(
              K,
              M + "leave",
              _,
              u,
              J
            ), B.target = lt, B.relatedTarget = H, K = null, rl(J) === N && (ve = new ve(
              C,
              M + "enter",
              ge,
              u,
              J
            ), ve.target = H, ve.relatedTarget = lt, K = ve), lt = K, _ && ge)
              t: {
                for (ve = _, C = ge, M = 0, H = ve; H; H = gi(H))
                  M++;
                for (H = 0, K = C; K; K = gi(K))
                  H++;
                for (; 0 < M - H; )
                  ve = gi(ve), M--;
                for (; 0 < H - M; )
                  C = gi(C), H--;
                for (; M--; ) {
                  if (ve === C || C !== null && ve === C.alternate)
                    break t;
                  ve = gi(ve), C = gi(C);
                }
                ve = null;
              }
            else ve = null;
            _ !== null && ms(
              $,
              B,
              _,
              ve,
              !1
            ), ge !== null && lt !== null && ms(
              $,
              lt,
              ge,
              ve,
              !0
            );
          }
        }
        e: {
          if (B = N ? ff(N) : window, _ = B.nodeName && B.nodeName.toLowerCase(), _ === "select" || _ === "input" && B.type === "file")
            var oe = Xh;
          else if (hr(B))
            if (Qh)
              oe = Kh;
            else {
              oe = Ku;
              var je = yr;
            }
          else
            _ = B.nodeName, !_ || _.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? N && Vi(N.elementType) && (oe = Xh) : oe = ou;
          if (oe && (oe = oe(l, N))) {
            mr(
              $,
              oe,
              u,
              J
            );
            break e;
          }
          je && je(l, B, N), l === "focusout" && N && B.type === "number" && N.memoizedProps.value != null && hf(B, "number", B.value);
        }
        switch (je = N ? ff(N) : window, l) {
          case "focusin":
            (hr(je) || je.contentEditable === "true") && (pn = je, ka = N, Wu = null);
            break;
          case "focusout":
            Wu = ka = pn = null;
            break;
          case "mousedown":
            Fi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Fi = !1, pr($, u, J);
            break;
          case "selectionchange":
            if (Wi) break;
          case "keydown":
          case "keyup":
            pr($, u, J);
        }
        var ye;
        if (Sf)
          e: {
            switch (l) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          Ju ? Ef(l, u) && (Ae = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (mn && u.locale !== "ko" && (Ju || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && Ju && (ye = Ch()) : (iu = J, kc = "value" in iu ? iu.value : iu.textContent, Ju = !0)), je = Ho(N, Ae), 0 < je.length && (Ae = new Bh(
          Ae,
          l,
          null,
          u,
          J
        ), $.push({ event: Ae, listeners: je }), ye ? Ae.data = ye : (ye = Zu(u), ye !== null && (Ae.data = ye)))), (ye = jh ? Lh(l, u) : Ki(l, u)) && (Ae = Ho(N, "onBeforeInput"), 0 < Ae.length && (je = new Bh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          J
        ), $.push({
          event: je,
          listeners: Ae
        }), je.data = ye)), T0(
          $,
          l,
          N,
          u,
          J
        );
      }
      Ac($, n);
    });
  }
  function Au(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Ho(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Gi(l, u), s != null && c.unshift(
        Au(l, s, r)
      ), s = Gi(l, n), s != null && c.push(
        Au(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function gi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function ms(l, n, u, c, s) {
    for (var r = n._reactName, y = []; u !== null && u !== c; ) {
      var v = u, A = v.alternate, N = v.stateNode;
      if (v = v.tag, A !== null && A === c) break;
      v !== 5 && v !== 26 && v !== 27 || N === null || (A = N, s ? (N = Gi(u, r), N != null && y.unshift(
        Au(u, N, A)
      )) : s || (N = Gi(u, r), N != null && y.push(
        Au(u, N, A)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var pa = /\r\n?/g, hy = /\u0000|\uFFFD/g;
  function E0(l) {
    return (typeof l == "string" ? l : "" + l).replace(pa, `
`).replace(hy, "");
  }
  function my(l, n) {
    return n = E0(n), E0(l) === n;
  }
  function Md() {
  }
  function De(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Qc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Qc(l, "" + c);
        break;
      case "className":
        rf(l, "class", c);
        break;
      case "tabIndex":
        rf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        rf(l, u, c);
        break;
      case "style":
        mf(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          rf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = yf("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && De(l, n, "name", s.name, s, null), De(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), De(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), De(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (De(l, n, "encType", s.encType, s, null), De(l, n, "method", s.method, s, null), De(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = yf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Md);
        break;
      case "onScroll":
        c != null && Ce("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ce("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(g(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(g(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = yf("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ce("beforetoggle", l), Ce("toggle", l), nu(l, "popover", c);
        break;
      case "xlinkActuate":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        nu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Bg.get(u) || u, nu(l, u, c));
    }
  }
  function Y(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        mf(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(g(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(g(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Qc(l, c) : (typeof c == "number" || typeof c == "bigint") && Qc(l, "" + c);
        break;
      case "onScroll":
        c != null && Ce("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ce("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Md);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!oa.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Nl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : nu(l, u, c);
          }
    }
  }
  function Re(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ce("error", l), Ce("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var y = u[r];
            if (y != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(g(137, n));
                default:
                  De(l, n, r, y, u, null);
              }
          }
        s && De(l, n, "srcSet", u.srcSet, u, null), c && De(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ce("invalid", l);
        var v = r = y = s = null, A = null, N = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var J = u[c];
            if (J != null)
              switch (c) {
                case "name":
                  s = J;
                  break;
                case "type":
                  y = J;
                  break;
                case "checked":
                  A = J;
                  break;
                case "defaultChecked":
                  N = J;
                  break;
                case "value":
                  r = J;
                  break;
                case "defaultValue":
                  v = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null)
                    throw Error(g(137, n));
                  break;
                default:
                  De(l, n, c, J, u, null);
              }
          }
        lr(
          l,
          r,
          v,
          A,
          N,
          y,
          s,
          !1
        ), Xu(l);
        return;
      case "select":
        Ce("invalid", l), c = y = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                y = v;
                break;
              case "multiple":
                c = v;
              default:
                De(l, n, s, v, u, null);
            }
        n = r, u = y, l.multiple = !!c, n != null ? ji(l, !!c, n, !1) : u != null && ji(l, !!c, u, !0);
        return;
      case "textarea":
        Ce("invalid", l), r = s = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (v = u[y], v != null))
            switch (y) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(g(91));
                break;
              default:
                De(l, n, y, v, u, null);
            }
        Uh(l, c, s, r), Xu(l);
        return;
      case "option":
        for (A in u)
          if (u.hasOwnProperty(A) && (c = u[A], c != null))
            switch (A) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                De(l, n, A, c, u, null);
            }
        return;
      case "dialog":
        Ce("beforetoggle", l), Ce("toggle", l), Ce("cancel", l), Ce("close", l);
        break;
      case "iframe":
      case "object":
        Ce("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < hs.length; c++)
          Ce(hs[c], l);
        break;
      case "image":
        Ce("error", l), Ce("load", l);
        break;
      case "details":
        Ce("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ce("error", l), Ce("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in u)
          if (u.hasOwnProperty(N) && (c = u[N], c != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(137, n));
              default:
                De(l, n, N, c, u, null);
            }
        return;
      default:
        if (Vi(n)) {
          for (J in u)
            u.hasOwnProperty(J) && (c = u[J], c !== void 0 && Y(
              l,
              n,
              J,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && De(l, n, v, c, u, null));
  }
  function Kg(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, y = null, v = null, A = null, N = null, J = null;
        for (_ in u) {
          var $ = u[_];
          if (u.hasOwnProperty(_) && $ != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = $;
              default:
                c.hasOwnProperty(_) || De(l, n, _, null, c, $);
            }
        }
        for (var B in c) {
          var _ = c[B];
          if ($ = u[B], c.hasOwnProperty(B) && (_ != null || $ != null))
            switch (B) {
              case "type":
                r = _;
                break;
              case "name":
                s = _;
                break;
              case "checked":
                N = _;
                break;
              case "defaultChecked":
                J = _;
                break;
              case "value":
                y = _;
                break;
              case "defaultValue":
                v = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(g(137, n));
                break;
              default:
                _ !== $ && De(
                  l,
                  n,
                  B,
                  _,
                  c,
                  $
                );
            }
        }
        tr(
          l,
          y,
          v,
          A,
          N,
          J,
          r,
          s
        );
        return;
      case "select":
        _ = y = v = B = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                _ = A;
              default:
                c.hasOwnProperty(r) || De(
                  l,
                  n,
                  r,
                  null,
                  c,
                  A
                );
            }
        for (s in c)
          if (r = c[s], A = u[s], c.hasOwnProperty(s) && (r != null || A != null))
            switch (s) {
              case "value":
                B = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                y = r;
              default:
                r !== A && De(
                  l,
                  n,
                  s,
                  r,
                  c,
                  A
                );
            }
        n = v, u = y, c = _, B != null ? ji(l, !!u, B, !1) : !!c != !!u && (n != null ? ji(l, !!u, n, !0) : ji(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        _ = B = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                De(l, n, v, null, c, s);
            }
        for (y in c)
          if (s = c[y], r = u[y], c.hasOwnProperty(y) && (s != null || r != null))
            switch (y) {
              case "value":
                B = s;
                break;
              case "defaultValue":
                _ = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(g(91));
                break;
              default:
                s !== r && De(l, n, y, s, c, r);
            }
        Mh(l, B, _);
        return;
      case "option":
        for (var ge in u)
          if (B = u[ge], u.hasOwnProperty(ge) && B != null && !c.hasOwnProperty(ge))
            switch (ge) {
              case "selected":
                l.selected = !1;
                break;
              default:
                De(
                  l,
                  n,
                  ge,
                  null,
                  c,
                  B
                );
            }
        for (A in c)
          if (B = c[A], _ = u[A], c.hasOwnProperty(A) && B !== _ && (B != null || _ != null))
            switch (A) {
              case "selected":
                l.selected = B && typeof B != "function" && typeof B != "symbol";
                break;
              default:
                De(
                  l,
                  n,
                  A,
                  B,
                  c,
                  _
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ve in u)
          B = u[ve], u.hasOwnProperty(ve) && B != null && !c.hasOwnProperty(ve) && De(l, n, ve, null, c, B);
        for (N in c)
          if (B = c[N], _ = u[N], c.hasOwnProperty(N) && B !== _ && (B != null || _ != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(g(137, n));
                break;
              default:
                De(
                  l,
                  n,
                  N,
                  B,
                  c,
                  _
                );
            }
        return;
      default:
        if (Vi(n)) {
          for (var lt in u)
            B = u[lt], u.hasOwnProperty(lt) && B !== void 0 && !c.hasOwnProperty(lt) && Y(
              l,
              n,
              lt,
              void 0,
              c,
              B
            );
          for (J in c)
            B = c[J], _ = u[J], !c.hasOwnProperty(J) || B === _ || B === void 0 && _ === void 0 || Y(
              l,
              n,
              J,
              B,
              c,
              _
            );
          return;
        }
    }
    for (var C in u)
      B = u[C], u.hasOwnProperty(C) && B != null && !c.hasOwnProperty(C) && De(l, n, C, null, c, B);
    for ($ in c)
      B = c[$], _ = u[$], !c.hasOwnProperty($) || B === _ || B == null && _ == null || De(l, n, $, B, c, _);
  }
  var ys = null, ps = null;
  function Ya(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ru(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function No(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Vn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var wo = null;
  function Ou() {
    var l = window.event;
    return l && l.type === "popstate" ? l === wo ? !1 : (wo = l, !0) : (wo = null, !1);
  }
  var Ud = typeof setTimeout == "function" ? setTimeout : void 0, kg = typeof clearTimeout == "function" ? clearTimeout : void 0, A0 = typeof Promise == "function" ? Promise : void 0, $g = typeof queueMicrotask == "function" ? queueMicrotask : typeof A0 < "u" ? function(l) {
    return A0.resolve(null).then(l).catch(Ln);
  } : Ud;
  function Ln(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function vi(l) {
    return l === "head";
  }
  function xd(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && ta(y.documentElement), u & 2 && ta(y.body), u & 4)
              for (u = y.head, ta(u), y = u.firstChild; y; ) {
                var v = y.nextSibling, A = y.nodeName;
                y[fe] || A === "SCRIPT" || A === "STYLE" || A === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = v;
              }
          }
          if (s === 0) {
            l.removeChild(r), Xn(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    Xn(n);
  }
  function gs(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gs(u), of(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Bo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[fe])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = nn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Wg(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = nn(l.nextSibling), l === null)) return null;
    return l;
  }
  function vs(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Fg(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function nn(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var bi = null;
  function vl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ie(l, n, u) {
    switch (n = Ya(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(g(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(g(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(g(454));
        return l;
      default:
        throw Error(g(451));
    }
  }
  function ta(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    of(l);
  }
  var jt = /* @__PURE__ */ new Map(), zl = /* @__PURE__ */ new Set();
  function Cd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Du = F.d;
  F.d = {
    f: Hd,
    r: Nd,
    D: zu,
    C: wd,
    L: Si,
    m: Ml,
    X: Ti,
    S: la,
    M: yy
  };
  function Hd() {
    var l = Du.f(), n = bc();
    return l || n;
  }
  function Nd(l) {
    var n = Bi(l);
    n !== null && n.tag === 5 && n.type === "form" ? ho(n) : Du.r(l);
  }
  var bl = typeof document > "u" ? null : document;
  function un(l, n, u) {
    var c = bl;
    if (c && typeof n == "string" && n) {
      var s = Ra(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), zl.has(s) || (zl.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), Re(n, "link", l), Jt(n), c.head.appendChild(n)));
    }
  }
  function zu(l) {
    Du.D(l), un("dns-prefetch", l, null);
  }
  function wd(l, n) {
    Du.C(l, n), un("preconnect", l, n);
  }
  function Si(l, n, u) {
    Du.L(l, n, u);
    var c = bl;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Ra(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Ra(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Ra(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Ra(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = qo(l);
          break;
        case "script":
          r = ja(l);
      }
      jt.has(r) || (l = W(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), jt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(_o(r)) || n === "script" && c.querySelector(Rc(r)) || (n = c.createElement("link"), Re(n, "link", l), Jt(n), c.head.appendChild(n)));
    }
  }
  function Ml(l, n) {
    Du.m(l, n);
    var u = bl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Ra(c) + '"][href="' + Ra(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = ja(l);
      }
      if (!jt.has(r) && (l = W({ rel: "modulepreload", href: l }, n), jt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Rc(r)))
              return;
        }
        c = u.createElement("link"), Re(c, "link", l), Jt(c), u.head.appendChild(c);
      }
    }
  }
  function la(l, n, u) {
    Du.S(l, n, u);
    var c = bl;
    if (c && l) {
      var s = au(c).hoistableStyles, r = qo(l);
      n = n || "default";
      var y = s.get(r);
      if (!y) {
        var v = { loading: 0, preload: null };
        if (y = c.querySelector(
          _o(r)
        ))
          v.loading = 5;
        else {
          l = W(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = jt.get(r)) && qd(l, u);
          var A = y = c.createElement("link");
          Jt(A), Re(A, "link", l), A._p = new Promise(function(N, J) {
            A.onload = N, A.onerror = J;
          }), A.addEventListener("load", function() {
            v.loading |= 1;
          }), A.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Bd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: v
        }, s.set(r, y);
      }
    }
  }
  function Ti(l, n) {
    Du.X(l, n);
    var u = bl;
    if (u && l) {
      var c = au(u).hoistableScripts, s = ja(l), r = c.get(s);
      r || (r = u.querySelector(Rc(s)), r || (l = W({ src: l, async: !0 }, n), (n = jt.get(s)) && _d(l, n), r = u.createElement("script"), Jt(r), Re(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function yy(l, n) {
    Du.M(l, n);
    var u = bl;
    if (u && l) {
      var c = au(u).hoistableScripts, s = ja(l), r = c.get(s);
      r || (r = u.querySelector(Rc(s)), r || (l = W({ src: l, async: !0, type: "module" }, n), (n = jt.get(s)) && _d(l, n), r = u.createElement("script"), Jt(r), Re(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function R0(l, n, u, c) {
    var s = (s = Ke.current) ? Cd(s) : null;
    if (!s) throw Error(g(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = qo(u.href), u = au(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = qo(u.href);
          var r = au(
            s
          ).hoistableStyles, y = r.get(l);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, y), (r = s.querySelector(
            _o(l)
          )) && !r._p && (y.instance = r, y.state.loading = 5), jt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, jt.set(l, u), r || O0(
            s,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(g(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(g(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = ja(u), u = au(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(g(444, l));
    }
  }
  function qo(l) {
    return 'href="' + Ra(l) + '"';
  }
  function _o(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Yo(l) {
    return W({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function O0(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Re(n, "link", u), Jt(n), l.head.appendChild(n));
  }
  function ja(l) {
    return '[src="' + Ra(l) + '"]';
  }
  function Rc(l) {
    return "script[async]" + l;
  }
  function D0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ra(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Jt(c), c;
          var s = W({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Jt(c), Re(c, "style", s), Bd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = qo(u.href);
          var r = l.querySelector(
            _o(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Jt(r), r;
          c = Yo(u), (s = jt.get(s)) && qd(c, s), r = (l.ownerDocument || l).createElement("link"), Jt(r);
          var y = r;
          return y._p = new Promise(function(v, A) {
            y.onload = v, y.onerror = A;
          }), Re(r, "link", c), n.state.loading |= 4, Bd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = ja(u.src), (s = l.querySelector(
            Rc(r)
          )) ? (n.instance = s, Jt(s), s) : (c = u, (s = jt.get(r)) && (c = W({}, u), _d(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Jt(s), Re(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(g(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Bd(c, u.precedence, l));
    return n.instance;
  }
  function Bd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, y = 0; y < c.length; y++) {
      var v = c[y];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function qd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function _d(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Ei = null;
  function py(l, n, u) {
    if (Ei === null) {
      var c = /* @__PURE__ */ new Map(), s = Ei = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Ei, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[fe] || r[ll] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = r.getAttribute(n) || "";
        y = l + y;
        var v = c.get(y);
        v ? v.push(r) : c.set(y, [r]);
      }
    }
    return c;
  }
  function gy(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function z0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function vy(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var jo = null;
  function M0() {
  }
  function U0(l, n, u) {
    if (jo === null) throw Error(g(475));
    var c = jo;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = qo(u.href), r = l.querySelector(
          _o(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = bs.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Jt(r);
          return;
        }
        r = l.ownerDocument || l, u = Yo(u), (s = jt.get(s)) && qd(u, s), r = r.createElement("link"), Jt(r);
        var y = r;
        y._p = new Promise(function(v, A) {
          y.onload = v, y.onerror = A;
        }), Re(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = bs.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function by() {
    if (jo === null) throw Error(g(475));
    var l = jo;
    return l.stylesheets && l.count === 0 && Ss(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && Ss(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function bs() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ss(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Vo = null;
  function Ss(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Vo = /* @__PURE__ */ new Map(), n.forEach(ga, l), Vo = null, bs.call(l));
  }
  function ga(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Vo.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Vo.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var y = s[r];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      s = n.instance, y = s.getAttribute("data-precedence"), r = u.get(y) || c, r === c && u.set(null, s), u.set(y, s), this.count++, c = bs.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var aa = {
    $$typeof: Me,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0
  };
  function Ig(l, n, u, c, s, r, y, v) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ju(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ju(0), this.hiddenUpdates = ju(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Sy(l, n, u, c, s, r, y, v, A, N, J, $) {
    return l = new Ig(
      l,
      n,
      u,
      y,
      v,
      A,
      N,
      $
    ), n = 1, r === !0 && (n |= 24), r = Jl(3, null, null, n), l.current = r, r.stateNode = l, n = co(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Mr(r), l;
  }
  function Ty(l) {
    return l ? (l = Pc, l) : Pc;
  }
  function Ey(l, n, u, c, s, r) {
    s = Ty(s), c.context === null ? c.context = s : c.pendingContext = s, c = kl(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = On(l, c, n), u !== null && (ya(u, l, n), ac(u, l, n));
  }
  function Ay(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Yd(l, n) {
    Ay(l, n), (l = l.alternate) && Ay(l, n);
  }
  function Ry(l) {
    if (l.tag === 13) {
      var n = bn(l, 67108864);
      n !== null && ya(n, l, 67108864), Yd(l, 67108864);
    }
  }
  var Ts = !0;
  function x0(l, n, u, c) {
    var s = U.T;
    U.T = null;
    var r = F.p;
    try {
      F.p = 2, Oy(l, n, u, c);
    } finally {
      F.p = r, U.T = s;
    }
  }
  function C0(l, n, u, c) {
    var s = U.T;
    U.T = null;
    var r = F.p;
    try {
      F.p = 8, Oy(l, n, u, c);
    } finally {
      F.p = r, U.T = s;
    }
  }
  function Oy(l, n, u, c) {
    if (Ts) {
      var s = jd(c);
      if (s === null)
        _a(
          l,
          n,
          c,
          Vd,
          u
        ), Oc(l, c);
      else if (N0(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Oc(l, c), n & 4 && -1 < H0.indexOf(l)) {
        for (; s !== null; ) {
          var r = Bi(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var y = ca(r.pendingLanes);
                  if (y !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; y; ) {
                      var A = 1 << 31 - Xl(y);
                      v.entanglements[1] |= A, y &= ~A;
                    }
                    ea(r), (it & 6) === 0 && (pd = ia() + 500, os(0));
                  }
                }
                break;
              case 13:
                v = bn(r, 2), v !== null && ya(v, r, 2), bc(), Yd(r, 2);
            }
          if (r = jd(c), r === null && _a(
            l,
            n,
            c,
            Vd,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        _a(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function jd(l) {
    return l = nr(l), Dy(l);
  }
  var Vd = null;
  function Dy(l) {
    if (Vd = null, l = rl(l), l !== null) {
      var n = D(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = x(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Vd = l, null;
  }
  function zy(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (af()) {
          case Tp:
            return 2;
          case Th:
            return 8;
          case nf:
          case Eh:
            return 32;
          case jc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lo = !1, Gn = null, Mu = null, Uu = null, Es = /* @__PURE__ */ new Map(), As = /* @__PURE__ */ new Map(), Ai = [], H0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Oc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Gn = null;
        break;
      case "dragenter":
      case "dragleave":
        Mu = null;
        break;
      case "mouseover":
      case "mouseout":
        Uu = null;
        break;
      case "pointerover":
      case "pointerout":
        Es.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        As.delete(n.pointerId);
    }
  }
  function Dc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Bi(n), n !== null && Ry(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function N0(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Gn = Dc(
          Gn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Mu = Dc(
          Mu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Uu = Dc(
          Uu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Es.set(
          r,
          Dc(
            Es.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, As.set(
          r,
          Dc(
            As.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function My(l) {
    var n = rl(l.target);
    if (n !== null) {
      var u = D(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = x(u), n !== null) {
            l.blockedOn = n, Ng(l.priority, function() {
              if (u.tag === 13) {
                var c = ma();
                c = Qa(c);
                var s = bn(u, c);
                s !== null && ya(s, u, c), Yd(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rs(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = jd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Li = c, u.target.dispatchEvent(c), Li = null;
      } else
        return n = Bi(u), n !== null && Ry(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Os(l, n, u) {
    Rs(l) && u.delete(n);
  }
  function Go() {
    Lo = !1, Gn !== null && Rs(Gn) && (Gn = null), Mu !== null && Rs(Mu) && (Mu = null), Uu !== null && Rs(Uu) && (Uu = null), Es.forEach(Os), As.forEach(Os);
  }
  function Ld(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Lo || (Lo = !0, h.unstable_scheduleCallback(
      h.unstable_NormalPriority,
      Go
    )));
  }
  var zc = null;
  function Uy(l) {
    zc !== l && (zc = l, h.unstable_scheduleCallback(
      h.unstable_NormalPriority,
      function() {
        zc === l && (zc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Dy(c || u) === null)
              continue;
            break;
          }
          var r = Bi(u);
          r !== null && (l.splice(n, 3), n -= 3, kr(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Xn(l) {
    function n(A) {
      return Ld(A, l);
    }
    Gn !== null && Ld(Gn, l), Mu !== null && Ld(Mu, l), Uu !== null && Ld(Uu, l), Es.forEach(n), As.forEach(n);
    for (var u = 0; u < Ai.length; u++) {
      var c = Ai[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ai.length && (u = Ai[0], u.blockedOn === null); )
      My(u), u.blockedOn === null && Ai.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], y = s[Nl] || null;
        if (typeof r == "function")
          y || Uy(u);
        else if (y) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, y = r[Nl] || null)
              v = y.formAction;
            else if (Dy(s) !== null) continue;
          } else v = y.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), Uy(u);
        }
      }
  }
  function xy(l) {
    this._internalRoot = l;
  }
  Gd.prototype.render = xy.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(g(409));
    var u = n.current, c = ma();
    Ey(u, c, l, n, null, null);
  }, Gd.prototype.unmount = xy.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Ey(l.current, 2, null, l, null, null), bc(), n[Gc] = null;
    }
  };
  function Gd(l) {
    this._internalRoot = l;
  }
  Gd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Op();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ai.length && n !== 0 && n < Ai[u].priority; u++) ;
      Ai.splice(u, 0, l), u === 0 && My(l);
    }
  };
  var Cy = p.version;
  if (Cy !== "19.1.0")
    throw Error(
      g(
        527,
        Cy,
        "19.1.0"
      )
    );
  F.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(g(188)) : (l = Object.keys(l).join(","), Error(g(268, l)));
    return l = G(n), l = l !== null ? I(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var jl = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ds.isDisabled && Ds.supportsFiber)
      try {
        Vc = Ds.inject(
          jl
        ), Hl = Ds;
      } catch {
      }
  }
  return mp.createRoot = function(l, n) {
    if (!E(l)) throw Error(g(299));
    var u = !1, c = "", s = po, r = Mm, y = Ff, v = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (v = n.unstable_transitionCallbacks)), n = Sy(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      y,
      v,
      null
    ), l[Gc] = n.current, dy(l), new xy(n);
  }, mp.hydrateRoot = function(l, n, u) {
    if (!E(l)) throw Error(g(299));
    var c = !1, s = "", r = po, y = Mm, v = Ff, A = null, N = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (A = u.unstable_transitionCallbacks), u.formState !== void 0 && (N = u.formState)), n = Sy(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      y,
      v,
      A,
      N
    ), n.context = Ty(null), u = n.current, c = ma(), c = Qa(c), s = kl(c), s.callback = null, On(u, s, c), u = c, n.current.lanes = u, wi(n, u), ea(n), l[Gc] = n.current, dy(l), new Gd(n);
  }, mp.version = "19.1.0", mp;
}
var yp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var SS;
function A2() {
  return SS || (SS = 1, process.env.NODE_ENV !== "production" && function() {
    function h(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function p(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = De(e) ? e.slice() : qe({}, e);
      return f[o] = p(e[o], t, a + 1, i), f;
    }
    function b(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return g(e, t, a, 0);
      }
    }
    function g(e, t, a, i) {
      var o = t[i], f = De(e) ? e.slice() : qe({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], De(f) ? f.splice(o, 1) : delete f[o]) : f[o] = g(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function E(e, t, a) {
      var i = t[a], o = De(e) ? e.slice() : qe({}, e);
      return a + 1 === t.length ? (De(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = E(e[i], t, a + 1), o);
    }
    function D() {
      return !1;
    }
    function x() {
      return null;
    }
    function k() {
    }
    function G() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function I() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function W() {
    }
    function te(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function ce(e, t, a, i) {
      return new Tf(e, t, a, i);
    }
    function pe(e, t) {
      e.context === Xo && (st(e.current, 2, t, e, null, null), hc());
    }
    function ae(e, t) {
      if (Zn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, go(), Sf(
          e.current,
          t,
          a
        ), hc();
      }
    }
    function he(e) {
      Zn = e;
    }
    function le(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Se(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function We(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Me(e) {
      if (Se(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Pe(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Se(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Me(o), e;
            if (f === i) return Me(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, m = o.child; m; ) {
            if (m === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (m === i) {
              d = !0, i = o, a = f;
              break;
            }
            m = m.sibling;
          }
          if (!d) {
            for (m = f.child; m; ) {
              if (m === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (m === i) {
                d = !0, i = f, a = o;
                break;
              }
              m = m.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ft(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ft(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ct(e) {
      return e === null || typeof e != "object" ? null : (e = my && e[my] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Be(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Md ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ce:
          return "Fragment";
        case Co:
          return "Profiler";
        case xo:
          return "StrictMode";
        case Ho:
          return "Suspense";
        case gi:
          return "SuspenseList";
        case hy:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Ac:
            return "Portal";
          case _a:
            return (e.displayName || "Context") + ".Provider";
          case zd:
            return (e._context.displayName || "Context") + ".Consumer";
          case Au:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ms:
            return t = e.displayName || null, t !== null ? t : Be(e.type) || "Memo";
          case pa:
            t = e._payload, e = e._init;
            try {
              return Be(e(t));
            } catch {
            }
        }
      return null;
    }
    function Dt(e) {
      return typeof e.tag == "number" ? me(e) : typeof e.name == "string" ? e.name : null;
    }
    function me(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Be(t);
        case 8:
          return t === xo ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return me(e.return);
      }
      return null;
    }
    function xt(e) {
      return { current: e };
    }
    function nt(e, t) {
      0 > Ya ? console.error("Unexpected pop.") : (t !== ps[Ya] && console.error("Unexpected Fiber popped."), e.current = ys[Ya], ys[Ya] = null, ps[Ya] = null, Ya--);
    }
    function Ue(e, t, a) {
      Ya++, ys[Ya] = e.current, ps[Ya] = a, e.current = t;
    }
    function el(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Cl(e, t) {
      Ue(Vn, t, e), Ue(No, e, e), Ue(Ru, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? ot(t) : qc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = ot(t), t = Il(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = ph;
                break;
              case "math":
                t = og;
                break;
              default:
                t = qc;
            }
      }
      a = a.toLowerCase(), a = Mh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, nt(Ru, e), Ue(Ru, a, e);
    }
    function Qt(e) {
      nt(Ru, e), nt(No, e), nt(Vn, e);
    }
    function U() {
      return el(Ru.current);
    }
    function F(e) {
      e.memoizedState !== null && Ue(wo, e, e);
      var t = el(Ru.current), a = e.type, i = Il(t.context, a);
      a = Mh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ue(No, e, e), Ue(Ru, i, e));
    }
    function ee(e) {
      No.current === e && (nt(Ru, e), nt(No, e)), wo.current === e && (nt(wo, e), fp._currentValue = Zs);
    }
    function be(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function j(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ue(e, t) {
      if (j(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          be(e)
        ), de(e);
    }
    function Te(e, t) {
      if (j(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          be(e)
        ), de(e);
    }
    function Le(e) {
      if (j(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          be(e)
        ), de(e);
    }
    function pt(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        bi = t.inject(e), vl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ke(e) {
      if (typeof Fg == "function" && nn(e), vl && typeof vl.setStrictMode == "function")
        try {
          vl.setStrictMode(bi, e);
        } catch (t) {
          ta || (ta = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function qu(e) {
      ie = e;
    }
    function Ct() {
      ie !== null && typeof ie.markCommitStopped == "function" && ie.markCommitStopped();
    }
    function sl(e) {
      ie !== null && typeof ie.markComponentRenderStarted == "function" && ie.markComponentRenderStarted(e);
    }
    function Aa() {
      ie !== null && typeof ie.markComponentRenderStopped == "function" && ie.markComponentRenderStopped();
    }
    function xi(e) {
      ie !== null && typeof ie.markRenderStarted == "function" && ie.markRenderStarted(e);
    }
    function $s() {
      ie !== null && typeof ie.markRenderStopped == "function" && ie.markRenderStopped();
    }
    function Ci(e, t) {
      ie !== null && typeof ie.markStateUpdateScheduled == "function" && ie.markStateUpdateScheduled(e, t);
    }
    function Sh(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Cd(e) / Du | 0) | 0;
    }
    function xg(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Hi(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function ia(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var m = i & 134217727;
      return m !== 0 ? (i = m & ~f, i !== 0 ? o = Hi(i) : (d &= m, d !== 0 ? o = Hi(d) : a || (a = m & ~e, a !== 0 && (o = Hi(a))))) : (m = i & ~f, m !== 0 ? o = Hi(m) : d !== 0 ? o = Hi(d) : a || (a = i & ~e, a !== 0 && (o = Hi(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function af(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Tp(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Th() {
      var e = Hd;
      return Hd <<= 1, (Hd & 4194048) === 0 && (Hd = 256), e;
    }
    function nf() {
      var e = Nd;
      return Nd <<= 1, (Nd & 62914560) === 0 && (Nd = 4194304), e;
    }
    function Eh(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function jc(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Cg(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var m = e.entanglements, S = e.expirationTimes, T = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var q = 31 - zl(a), L = 1 << q;
        m[q] = 0, S[q] = -1;
        var w = T[q];
        if (w !== null)
          for (T[q] = null, q = 0; q < w.length; q++) {
            var X = w[q];
            X !== null && (X.lane &= -536870913);
          }
        a &= ~L;
      }
      i !== 0 && Ep(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Ep(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - zl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function Vc(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - zl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Hl(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function tu(e, t, a) {
      if (jt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - zl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Xl(e, t) {
      if (jt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - zl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Ah(e) {
      return e &= -e, bl < e ? un < e ? (e & 134217727) !== 0 ? zu : wd : un : bl;
    }
    function Ap() {
      var e = Re.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? zu : Od(e.type));
    }
    function Hg(e, t) {
      var a = Re.p;
      try {
        return Re.p = e, t();
      } finally {
        Re.p = a;
      }
    }
    function Lc(e) {
      delete e[Ml], delete e[la], delete e[yy], delete e[R0], delete e[qo];
    }
    function lu(e) {
      var t = e[Ml];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ti] || a[Ml]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Do(e); e !== null; ) {
              if (a = e[Ml])
                return a;
              e = Do(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ca(e) {
      if (e = e[Ml] || e[Ti]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function _u(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function rn(e) {
      var t = e[_o];
      return t || (t = e[_o] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function tl(e) {
      e[Yo] = !0;
    }
    function Yu(e, t) {
      Ni(e, t), Ni(e + "Capture", t);
    }
    function Ni(e, t) {
      ja[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), ja[e] = t;
      var a = e.toLowerCase();
      for (Rc[a] = e, e === "onDoubleClick" && (Rc.ondblclick = e), e = 0; e < t.length; e++)
        O0.add(t[e]);
    }
    function ju(e, t) {
      D0[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function wi(e) {
      return Ou.call(_d, e) ? !0 : Ou.call(qd, e) ? !1 : Bd.test(e) ? _d[e] = !0 : (qd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Rp(e, t, a) {
      if (wi(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (ue(a, t), e === "" + a ? a : e);
      }
    }
    function uf(e, t, a) {
      if (wi(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          ue(a, t), e.setAttribute(t, "" + a);
        }
    }
    function cf(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        ue(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Qa(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        ue(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Ws() {
    }
    function Op() {
      if (Ei === 0) {
        py = console.log, gy = console.info, z0 = console.warn, vy = console.error, jo = console.group, M0 = console.groupCollapsed, U0 = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ws,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Ei++;
    }
    function Ng() {
      if (Ei--, Ei === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: qe({}, e, { value: py }),
          info: qe({}, e, { value: gy }),
          warn: qe({}, e, { value: z0 }),
          error: qe({}, e, { value: vy }),
          group: qe({}, e, { value: jo }),
          groupCollapsed: qe({}, e, { value: M0 }),
          groupEnd: qe({}, e, { value: U0 })
        });
      }
      0 > Ei && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Zt(e) {
      if (by === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          by = t && t[1] || "", bs = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + by + e + bs;
    }
    function ll(e, t) {
      if (!e || Vo) return "";
      var a = Ss.get(e);
      if (a !== void 0) return a;
      Vo = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = Y.H, Y.H = null, Op();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var w = function() {
                  throw Error();
                };
                if (Object.defineProperty(w.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(w, []);
                  } catch (se) {
                    var X = se;
                  }
                  Reflect.construct(e, [], w);
                } else {
                  try {
                    w.call();
                  } catch (se) {
                    X = se;
                  }
                  e.call(w.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (se) {
                  X = se;
                }
                (w = e()) && typeof w.catch == "function" && w.catch(function() {
                });
              }
            } catch (se) {
              if (se && X && typeof se.stack == "string")
                return [se.stack, X.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), m = d[0], S = d[1];
        if (m && S) {
          var T = m.split(`
`), q = S.split(`
`);
          for (d = f = 0; f < T.length && !T[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < q.length && !q[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === T.length || d === q.length)
            for (f = T.length - 1, d = q.length - 1; 1 <= f && 0 <= d && T[f] !== q[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (T[f] !== q[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || T[f] !== q[d]) {
                    var L = `
` + T[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && Ss.set(e, L), L;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Vo = !1, Y.H = i, Ng(), Error.prepareStackTrace = a;
      }
      return T = (T = e ? e.displayName || e.name : "") ? Zt(T) : "", typeof e == "function" && Ss.set(e, T), T;
    }
    function Nl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Gc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Zt(e.type);
        case 16:
          return Zt("Lazy");
        case 13:
          return Zt("Suspense");
        case 19:
          return Zt("SuspenseList");
        case 0:
        case 15:
          return ll(e.type, !1);
        case 11:
          return ll(e.type.render, !1);
        case 1:
          return ll(e.type, !0);
        case 31:
          return Zt("Activity");
        default:
          return "";
      }
    }
    function Fs(e) {
      try {
        var t = "";
        do {
          t += Gc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, m = Zt(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + m;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (S) {
        return `
Error generating stack: ` + S.message + `
` + S.stack;
      }
    }
    function Dp(e) {
      return (e = e ? e.displayName || e.name : "") ? Zt(e) : "";
    }
    function Is() {
      if (ga === null) return null;
      var e = ga._debugOwner;
      return e != null ? Dt(e) : null;
    }
    function zp() {
      if (ga === null) return "";
      var e = ga;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += Zt(e.type);
            break;
          case 13:
            t += Zt("Suspense");
            break;
          case 19:
            t += Zt("SuspenseList");
            break;
          case 31:
            t += Zt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Dp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Dp(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Nl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Nl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function fe(e, t, a, i, o, f, d) {
      var m = ga;
      of(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        of(m);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function of(e) {
      Y.getCurrentStack = e === null ? null : zp, aa = !1, ga = e;
    }
    function rl(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Le(e), e;
        default:
          return "";
      }
    }
    function Bi(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ff(e) {
      var t = Bi(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Le(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Le(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            Le(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function au(e) {
      e._valueTracker || (e._valueTracker = ff(e));
    }
    function Jt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Bi(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function sf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function oa(e) {
      return e.replace(
        Ig,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Vu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Ty || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Is() || "A component",
        t.type
      ), Ty = !0), t.value === void 0 || t.defaultValue === void 0 || Sy || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Is() || "A component",
        t.type
      ), Sy = !0);
    }
    function Lu(e, t, a, i, o, f, d, m) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (ue(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + rl(t)) : e.value !== "" + rl(t) && (e.value = "" + rl(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ps(e, d, rl(t)) : a != null ? Ps(e, d, rl(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? (ue(m, "name"), e.name = "" + rl(m)) : e.removeAttribute("name");
    }
    function Mp(e, t, a, i, o, f, d, m) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (ue(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + rl(a) : "", t = t != null ? "" + rl(t) : a, m || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = m ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (ue(d, "name"), e.name = d);
    }
    function Ps(e, t, a) {
      t === "number" && sf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Rh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ds.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Ay || (Ay = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Yd || (Yd = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Ey || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Ey = !0);
    }
    function Up() {
      var e = Is();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function nu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + rl(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function rf(e, t) {
      for (e = 0; e < Ts.length; e++) {
        var a = Ts[e];
        if (t[a] != null) {
          var i = De(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Up()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Up()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Ry || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Ry = !0);
    }
    function dn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || x0 || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Is() || "A component"
      ), x0 = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function er(e, t, a) {
      if (t != null && (t = "" + rl(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + rl(a) : "";
    }
    function Oh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (De(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = rl(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function qi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? qi(e.children[0], t) : e;
    }
    function wl(e) {
      return "  " + "  ".repeat(e);
    }
    function Gu(e) {
      return "+ " + "  ".repeat(e);
    }
    function _i(e) {
      return "- " + "  ".repeat(e);
    }
    function Dh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Al(e, t) {
      return C0.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function df(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Gu(a) + Al(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Gu(a) + Al(e, i) + `
` + _i(a) + Al(t, i) + `
`;
      }
      return wl(a) + Al(e, i) + `
`;
    }
    function zh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Xu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (De(e)) return "[...]";
          if (e.$$typeof === pi)
            return (t = Be(e.type)) ? "<" + t + ">" : "<...>";
          var a = zh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Xu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Yi(e, t) {
      return typeof e != "string" || C0.test(e) ? "{" + Xu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Xc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Yi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function wg(e, t, a) {
      var i = "", o = qe({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, m = Xu(e[f], d);
          t.hasOwnProperty(f) ? (d = Xu(t[f], d), i += Gu(a) + f + ": " + m + `
`, i += _i(a) + f + ": " + d + `
`) : i += Gu(a) + f + ": " + m + `
`;
        }
      for (var S in o)
        o.hasOwnProperty(S) && (e = Xu(
          o[S],
          120 - 2 * a - S.length - 2
        ), i += _i(a) + S + ": " + e + `
`);
      return i;
    }
    function Ra(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (T in a)
        a.hasOwnProperty(T) && f.set(
          T.toLowerCase(),
          T
        );
      if (f.size === 1 && f.has("children"))
        o += Xc(
          e,
          t,
          wl(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var m = 120 - 2 * (i + 1) - d.length - 1, S = f.get(d.toLowerCase());
            if (S !== void 0) {
              f.delete(d.toLowerCase());
              var T = t[d];
              S = a[S];
              var q = Yi(
                T,
                m
              );
              m = Yi(
                S,
                m
              ), typeof T == "object" && T !== null && typeof S == "object" && S !== null && zh(T) === "Object" && zh(S) === "Object" && (2 < Object.keys(T).length || 2 < Object.keys(S).length || -1 < q.indexOf("...") || -1 < m.indexOf("...")) ? o += wl(i + 1) + d + `={{
` + wg(
                T,
                S,
                i + 2
              ) + wl(i + 1) + `}}
` : (o += Gu(i + 1) + d + "=" + q + `
`, o += _i(i + 1) + d + "=" + m + `
`);
            } else
              o += wl(i + 1) + d + "=" + Yi(t[d], m) + `
`;
          }
        f.forEach(function(L) {
          if (L !== "children") {
            var w = 120 - 2 * (i + 1) - L.length - 1;
            o += _i(i + 1) + L + "=" + Yi(a[L], w) + `
`;
          }
        }), o = o === "" ? wl(i) + "<" + e + `>
` : wl(i) + "<" + e + `
` + o + wl(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += df(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + df("" + t, null, i + 1) : o + df("" + t, void 0, i + 1)), o;
    }
    function tr(e, t) {
      var a = Dh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += tr(e, t), e = e.sibling;
        return a;
      }
      return wl(t) + "<" + a + `>
`;
    }
    function lr(e, t) {
      var a = qi(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return wl(t) + `...
` + lr(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += wl(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = df(o, e.serverProps, t), t++;
      else if (f = Dh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, m = "";
          for (T in o)
            if (o.hasOwnProperty(T) && T !== "children") {
              var S = Yi(o[T], 15);
              if (d -= T.length + S.length + 2, 0 > d) {
                m += " ...";
                break;
              }
              m += " " + T + "=" + S;
            }
          i = wl(i) + "<" + f + m + `>
`, t++;
        } else
          e.serverProps === null ? (i = Xc(
            f,
            o,
            Gu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Ra(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var T = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (T += lr(d, t), f++) : T += tr(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (T += wl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], T = typeof f == "string" ? T + (_i(t) + Al(f, 120 - 2 * t) + `
`) : T + Xc(
          f.type,
          f.props,
          _i(t)
        );
      return a + i + T;
    }
    function hf(e) {
      try {
        return `

` + lr(e, 0);
      } catch {
        return "";
      }
    }
    function ji(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? hf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Mh(e, t) {
      var a = qe({}, e || zy), i = { tag: t };
      return jd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Vd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Oy.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Uh(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Dy.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Qc(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function xp(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function ar(e, t) {
      t = t || zy;
      var a = t.current;
      if (t = (a = Uh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Qc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, Lo[t]) return !1;
      Lo[t] = !0;
      var o = (t = ga) ? xp(t.return, i) : null, f = t !== null && o !== null ? ji(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || fe(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function mf(e, t, a) {
      if (a || Uh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, Lo[a]) return !1;
      Lo[a] = !0;
      var i = (a = ga) ? xp(a, t) : null;
      return a = a !== null && i !== null ? ji(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Vi(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Bg(e) {
      return e.replace(Ai, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Cp(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Oc.hasOwnProperty(t) && Oc[t] || (Oc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Bg(t.replace(As, "ms-"))
      )) : Es.test(t) ? Oc.hasOwnProperty(t) && Oc[t] || (Oc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !H0.test(a) || Dc.hasOwnProperty(a) && Dc[a] || (Dc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(H0, "")
      )), typeof a == "number" && (isNaN(a) ? N0 || (N0 = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || My || (My = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Rs.has(t) ? t === "float" ? e.cssFloat = a : (Te(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function yf(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Gn[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var m in t)
            if (t.hasOwnProperty(m) && (!a || a[m] !== t[m]))
              for (o = Gn[m] || [m], f = 0; f < o.length; f++)
                i[o[f]] = m;
          m = {};
          for (var S in t)
            for (o = Gn[S] || [S], f = 0; f < o.length; f++)
              m[o[f]] = S;
          S = {};
          for (var T in i)
            if (o = i[T], (f = m[T]) && o !== f && (d = o + "," + f, !S[d])) {
              S[d] = !0, d = console;
              var q = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                q == null || typeof q == "boolean" || q === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var L in a)
          !a.hasOwnProperty(L) || t != null && t.hasOwnProperty(L) || (L.indexOf("--") === 0 ? e.setProperty(L, "") : L === "float" ? e.cssFloat = "" : e[L] = "");
        for (var w in t)
          T = t[w], t.hasOwnProperty(w) && a[w] !== T && Cp(e, w, T);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Cp(e, i, t[i]);
    }
    function Li(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function nr(e) {
      return Ld.get(e) || e;
    }
    function Zc(e, t) {
      if (Ou.call(Xn, t) && Xn[t])
        return !0;
      if (Gd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Uy.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Xn[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Xn[t] = !0;
      }
      if (xy.test(t)) {
        if (e = t.toLowerCase(), e = Uy.hasOwnProperty(e) ? e : null, e == null) return Xn[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Xn[t] = !0);
      }
      return !0;
    }
    function Jc(e, t) {
      var a = [], i;
      for (i in t)
        Zc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Hp(e, t, a, i) {
      if (Ou.call(jl, t) && jl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), jl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), jl[t] = !0;
        if (Ds.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), jl[t] = !0;
      } else if (Ds.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), jl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), jl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), jl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), jl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), jl[t] = !0;
      if (zc.hasOwnProperty(o)) {
        if (o = zc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), jl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), jl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), jl[t] = !0);
          }
        case "function":
        case "symbol":
          return jl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), jl[t] = !0;
          }
      }
      return !0;
    }
    function xh(e, t, a) {
      var i = [], o;
      for (o in t)
        Hp(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Kc(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Gi(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function hn(e) {
      var t = ca(e);
      if (t && (e = t.stateNode)) {
        var a = e[la] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Lu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (ue(t, "name"), a = a.querySelectorAll(
                'input[name="' + oa(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[la] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Lu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Jt(i);
            }
            break e;
          case "textarea":
            er(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && nu(e, !!a.multiple, t, !1);
        }
      }
    }
    function ur(e, t, a) {
      if (v) return e(t, a);
      v = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (v = !1, (r !== null || y !== null) && (hc(), r && (t = r, e = y, y = r = null, hn(t), e)))
          for (t = 0; t < e.length; t++) hn(e[t]);
      }
    }
    function uu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[la] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function iu() {
      if (_) return _;
      var e, t = B, a = t.length, i, o = "value" in $ ? $.value : $.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return _ = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function kc(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Xi() {
      return !0;
    }
    function Ch() {
      return !1;
    }
    function dl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var m in e)
          e.hasOwnProperty(m) && (a = e[m], this[m] = a ? a(f) : f[m]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Xi : Ch, this.isPropagationStopped = Ch, this;
      }
      return qe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Xi);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Xi);
        },
        persist: function() {
        },
        isPersistent: Xi
      }), t;
    }
    function ir(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = pT[e]) ? !!t[e] : !1;
    }
    function cr() {
      return ir;
    }
    function Bl(e, t) {
      switch (e) {
        case "keyup":
          return MT.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== pb;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Qu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function or(e, t) {
      switch (e) {
        case "compositionend":
          return Qu(t);
        case "keypress":
          return t.which !== vb ? null : (Sb = !0, bb);
        case "textInput":
          return e = t.data, e === bb && Sb ? null : e;
        default:
          return null;
      }
    }
    function pf(e, t) {
      if (Xd)
        return e === "compositionend" || !ev && Bl(e, t) ? (e = iu(), _ = B = $ = null, Xd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return gb && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Np(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!xT[e.type] : t === "textarea";
    }
    function Hh(e) {
      if (!A) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function fr(e, t, a, i) {
      r ? y ? y.push(i) : y = [i] : r = i, t = as(t, "onChange"), 0 < t.length && (a = new ve(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function gf(e) {
      wn(e, 0);
    }
    function Qi(e) {
      var t = _u(e);
      if (Jt(t)) return e;
    }
    function Nh(e, t) {
      if (e === "change") return t;
    }
    function wp() {
      Ny && (Ny.detachEvent("onpropertychange", Bp), wy = Ny = null);
    }
    function Bp(e) {
      if (e.propertyName === "value" && Qi(wy)) {
        var t = [];
        fr(
          t,
          wy,
          e,
          Gi(e)
        ), ur(gf, t);
      }
    }
    function qg(e, t, a) {
      e === "focusin" ? (wp(), Ny = t, wy = a, Ny.attachEvent("onpropertychange", Bp)) : e === "focusout" && wp();
    }
    function wh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Qi(wy);
    }
    function _g(e, t) {
      if (e === "click") return Qi(t);
    }
    function Yg(e, t) {
      if (e === "input" || e === "change")
        return Qi(t);
    }
    function jg(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function vf(e, t) {
      if (va(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Ou.call(t, o) || !va(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function qp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Bh(e, t) {
      var a = qp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = qp(a);
      }
    }
    function _p(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _p(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Yp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = sf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = sf(e.document);
      }
      return t;
    }
    function qh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function jp(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      lv || Qd == null || Qd !== sf(i) || (i = Qd, "selectionStart" in i && qh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), By && vf(By, i) || (By = i, i = as(tv, "onSelect"), 0 < i.length && (t = new ve(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Qd)));
    }
    function cu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Zi(e) {
      if (av[e]) return av[e];
      if (!Zd[e]) return e;
      var t = Zd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in Eb)
          return av[e] = t[a];
      return e;
    }
    function Za(e, t) {
      zb.set(e, t), Yu(t, [e]);
    }
    function fa(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = uv.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Fs(t)
        }, uv.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Fs(t)
      };
    }
    function bf() {
      for (var e = Jd, t = cv = Jd = 0; t < e; ) {
        var a = Qn[t];
        Qn[t++] = null;
        var i = Qn[t];
        Qn[t++] = null;
        var o = Qn[t];
        Qn[t++] = null;
        var f = Qn[t];
        if (Qn[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Vp(a, o, f);
      }
    }
    function sr(e, t, a, i) {
      Qn[Jd++] = e, Qn[Jd++] = t, Qn[Jd++] = a, Qn[Jd++] = i, cv |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function _h(e, t, a, i) {
      return sr(e, t, a, i), rr(e);
    }
    function Ql(e, t) {
      return sr(e, null, null, t), rr(e);
    }
    function Vp(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & iv || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - zl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function rr(e) {
      if (ap > PT)
        throw Vs = ap = 0, np = _v = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Vs > e2 && (Vs = 0, np = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && an(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && an(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Ji(e) {
      if (Zn === null) return e;
      var t = Zn(e);
      return t === void 0 ? e : t.current;
    }
    function Yh(e) {
      if (Zn === null) return e;
      var t = Zn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Ji(e.render), e.render !== t) ? (t = { $$typeof: Au, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Lp(e, t) {
      if (Zn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === pa) && (i = !0);
          break;
        case 11:
          (o === Au || o === pa) && (i = !0);
          break;
        case 14:
        case 15:
          (o === ms || o === pa) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Zn(a), e !== void 0 && e === Zn(t)));
    }
    function Gp(e) {
      Zn !== null && typeof WeakSet == "function" && (Kd === null && (Kd = /* @__PURE__ */ new WeakSet()), Kd.add(e));
    }
    function Sf(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, m = e.type, S = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          S = m;
          break;
        case 11:
          S = m.render;
      }
      if (Zn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var T = !1;
      m = !1, S !== null && (S = Zn(S), S !== void 0 && (a.has(S) ? m = !0 : t.has(S) && (d === 1 ? m = !0 : T = !0))), Kd !== null && (Kd.has(e) || i !== null && Kd.has(i)) && (m = !0), m && (e._debugNeedsRemount = !0), (m || T) && (i = Ql(e, 2), i !== null && wt(i, e, 2)), o === null || m || Sf(
        o,
        t,
        a
      ), f !== null && Sf(
        f,
        t,
        a
      );
    }
    function Tf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Ub || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function jh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function mn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = ce(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Ji(e.type);
          break;
        case 1:
          a.type = Ji(e.type);
          break;
        case 11:
          a.type = Yh(e.type);
      }
      return a;
    }
    function Vh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function dr(e, t, a, i, o, f) {
      var d = 0, m = e;
      if (typeof e == "function")
        jh(e) && (d = 1), m = Ji(m);
      else if (typeof e == "string")
        d = U(), d = Mo(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case hy:
            return t = ce(31, a, t, o), t.elementType = hy, t.lanes = f, t;
          case Ce:
            return Zu(
              a.children,
              o,
              f,
              t
            );
          case xo:
            d = 8, o |= na, o |= xu;
            break;
          case Co:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = ce(12, e, t, i | Vl), t.elementType = Co, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Ho:
            return t = ce(13, a, t, o), t.elementType = Ho, t.lanes = f, t;
          case gi:
            return t = ce(19, a, t, o), t.elementType = gi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case dy:
                case _a:
                  d = 10;
                  break e;
                case zd:
                  d = 9;
                  break e;
                case Au:
                  d = 11, m = Yh(m);
                  break e;
                case ms:
                  d = 14;
                  break e;
                case pa:
                  d = 16, m = null;
                  break e;
              }
            m = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : De(e) ? a = "array" : e !== void 0 && e.$$typeof === pi ? (a = "<" + (Be(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Dt(i) : null) && (m += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + m)
            ), m = null;
        }
      return t = ce(d, a, t, o), t.elementType = e, t.type = m, t.lanes = f, t._debugOwner = i, t;
    }
    function Ef(e, t, a) {
      return t = dr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Zu(e, t, a, i) {
      return e = ce(7, e, i, t), e.lanes = a, e;
    }
    function Ju(e, t, a) {
      return e = ce(6, e, null, t), e.lanes = a, e;
    }
    function Lh(e, t, a) {
      return t = ce(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Ki(e, t) {
      Ja(), kd[$d++] = B0, kd[$d++] = w0, w0 = e, B0 = t;
    }
    function Xp(e, t, a) {
      Ja(), Jn[Kn++] = Mc, Jn[Kn++] = Uc, Jn[Kn++] = Ms, Ms = e;
      var i = Mc;
      e = Uc;
      var o = 32 - zl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - zl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Mc = 1 << 32 - zl(t) + o | a << o | i, Uc = f + e;
      } else
        Mc = 1 << f | a << o | i, Uc = e;
    }
    function hr(e) {
      Ja(), e.return !== null && (Ki(e, 1), Xp(e, 1, 0));
    }
    function mr(e) {
      for (; e === w0; )
        w0 = kd[--$d], kd[$d] = null, B0 = kd[--$d], kd[$d] = null;
      for (; e === Ms; )
        Ms = Jn[--Kn], Jn[Kn] = null, Uc = Jn[--Kn], Jn[Kn] = null, Mc = Jn[--Kn], Jn[Kn] = null;
    }
    function Ja() {
      at || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Ka(e, t) {
      if (e.return === null) {
        if (kn === null)
          kn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (kn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          kn.distanceFromLeaf > t && (kn.distanceFromLeaf = t);
        }
        return kn;
      }
      var a = Ka(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Gh(e, t) {
      xc || (e = Ka(e, 0), e.serverProps = null, t !== null && (t = gd(t), e.serverTail.push(t)));
    }
    function yn(e) {
      var t = "", a = kn;
      throw a !== null && (kn = null, t = hf(a)), $c(
        fa(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), ov;
    }
    function Xh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Ml] = e, t[la] = i, Bn(a, i), a) {
        case "dialog":
          Ge("cancel", t), Ge("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ge("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < up.length; a++)
            Ge(up[a], t);
          break;
        case "source":
          Ge("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ge("error", t), Ge("load", t);
          break;
        case "details":
          Ge("toggle", t);
          break;
        case "input":
          ju("input", i), Ge("invalid", t), Vu(t, i), Mp(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), au(t);
          break;
        case "option":
          Rh(t, i);
          break;
        case "select":
          ju("select", i), Ge("invalid", t), rf(t, i);
          break;
        case "textarea":
          ju("textarea", i), Ge("invalid", t), dn(t, i), Oh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), au(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Zm(t.textContent, a) ? (i.popover != null && (Ge("beforetoggle", t), Ge("toggle", t)), i.onScroll != null && Ge("scroll", t), i.onScrollEnd != null && Ge("scrollend", t), i.onClick != null && (t.onclick = bu), t = !0) : t = !1, t || yn(e);
    }
    function Qh(e) {
      for (ba = e.return; ba; )
        switch (ba.tag) {
          case 5:
          case 13:
            Oi = !1;
            return;
          case 27:
          case 3:
            Oi = !0;
            return;
          default:
            ba = ba.return;
        }
    }
    function ki(e) {
      if (e !== ba) return !1;
      if (!at)
        return Qh(e), at = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || qn(e.type, e.memoizedProps)), a = !a), a && Gt) {
        for (a = Gt; a; ) {
          var i = Ka(e, 0), o = gd(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Pm(a) : gl(a.nextSibling);
        }
        yn(e);
      }
      if (Qh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Gt = Pm(e);
      } else
        t === 27 ? (t = Gt, _n(e.type) ? (e = $v, $v = null, Gt = e) : Gt = t) : Gt = ba ? gl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function $i() {
      Gt = ba = null, xc = at = !1;
    }
    function Zh() {
      var e = Us;
      return e !== null && (Ea === null ? Ea = e : Ea.push.apply(
        Ea,
        e
      ), Us = null), e;
    }
    function $c(e) {
      Us === null ? Us = [e] : Us.push(e);
    }
    function Jh() {
      var e = kn;
      if (e !== null) {
        kn = null;
        for (var t = hf(e); 0 < e.children.length; )
          e = e.children[0];
        fe(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function yr() {
      Wd = q0 = null, Fd = !1;
    }
    function Ku(e, t, a) {
      Ue(fv, t._currentValue, e), t._currentValue = a, Ue(sv, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Nb && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = Nb;
    }
    function ou(e, t) {
      e._currentValue = fv.current;
      var a = sv.current;
      nt(sv, t), e._currentRenderer = a, nt(fv, t);
    }
    function Kh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function kh(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var m = f;
            f = o;
            for (var S = 0; S < t.length; S++)
              if (m.context === t[S]) {
                f.lanes |= a, m = f.alternate, m !== null && (m.lanes |= a), Kh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = m.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Kh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function hl(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var m = o.type;
            va(o.pendingProps.value, d.value) || (e !== null ? e.push(m) : e = [m]);
          }
        } else if (o === wo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(fp) : e = [fp]);
        }
        o = o.return;
      }
      e !== null && kh(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ku(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!va(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function $u(e) {
      q0 = e, Wd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function bt(e) {
      return Fd && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), $h(q0, e);
    }
    function Af(e, t) {
      return q0 === null && $u(e), $h(e, t);
    }
    function $h(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Wd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Wd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Wd = Wd.next = t;
      return a;
    }
    function Rf() {
      return {
        controller: new YT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Wi(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function pn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && jT(VT, function() {
        e.controller.abort();
      });
    }
    function ka() {
      var e = xs;
      return xs = 0, e;
    }
    function Wu(e) {
      var t = xs;
      return xs = e, t;
    }
    function Fi(e) {
      var t = xs;
      return xs += e, t;
    }
    function pr(e) {
      Va = Id(), 0 > e.actualStartTime && (e.actualStartTime = Va);
    }
    function fu(e) {
      if (0 <= Va) {
        var t = Id() - Va;
        e.actualDuration += t, e.selfBaseDuration = t, Va = -1;
      }
    }
    function Ii(e) {
      if (0 <= Va) {
        var t = Id() - Va;
        e.actualDuration += t, Va = -1;
      }
    }
    function Oa() {
      if (0 <= Va) {
        var e = Id() - Va;
        Va = -1, xs += e;
      }
    }
    function $a() {
      Va = Id();
    }
    function gn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Qp(e, t) {
      if (qy === null) {
        var a = qy = [];
        rv = 0, Cs = Vm(), Pd = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return rv++, t.then(Wh, Wh), t;
    }
    function Wh() {
      if (--rv === 0 && qy !== null) {
        Pd !== null && (Pd.status = "fulfilled");
        var e = qy;
        qy = null, Cs = 0, Pd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Zp(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Fh() {
      var e = Hs.current;
      return e !== null ? e : St.pooledCache;
    }
    function gr(e, t) {
      t === null ? Ue(Hs, Hs.current, e) : Ue(Hs, t.pool, e);
    }
    function Jp() {
      var e = Fh();
      return e === null ? null : { parent: Sl._currentValue, pool: e };
    }
    function Ih() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Ph(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Wc() {
    }
    function Da(e, t, a) {
      Y.actQueue !== null && (Y.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Wc, Wc), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, sa(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Wc, Wc);
          else {
            if (e = St, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, sa(e), e;
          }
          throw Qy = t, G0 = !0, Xy;
      }
    }
    function em() {
      if (Qy === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Qy;
      return Qy = null, G0 = !1, e;
    }
    function sa(e) {
      if (e === Xy || e === L0)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Zl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Fu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function vn(e) {
      return {
        lane: e,
        tag: Yb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Wa(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, mv === i && !Lb) {
        var o = me(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Lb = !0;
      }
      return (rt & Ta) !== cn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = rr(e), Vp(e, null, a), t) : (sr(e, i, t, a), rr(e));
    }
    function Iu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Vc(e, a);
      }
    }
    function Fc(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function bn() {
      if (yv) {
        var e = Pd;
        if (e !== null) throw e;
      }
    }
    function Ic(e, t, a, i) {
      yv = !1;
      var o = e.updateQueue;
      Qo = !1, mv = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, m = o.shared.pending;
      if (m !== null) {
        o.shared.pending = null;
        var S = m, T = S.next;
        S.next = null, d === null ? f = T : d.next = T, d = S;
        var q = e.alternate;
        q !== null && (q = q.updateQueue, m = q.lastBaseUpdate, m !== d && (m === null ? q.firstBaseUpdate = T : m.next = T, q.lastBaseUpdate = S));
      }
      if (f !== null) {
        var L = o.baseState;
        d = 0, q = T = S = null, m = f;
        do {
          var w = m.lane & -536870913, X = w !== m.lane;
          if (X ? (Je & w) === w : (i & w) === w) {
            w !== 0 && w === Cs && (yv = !0), q !== null && (q = q.next = {
              lane: 0,
              tag: m.tag,
              payload: m.payload,
              callback: null,
              next: null
            });
            e: {
              w = e;
              var se = m, Oe = t, Tt = a;
              switch (se.tag) {
                case jb:
                  if (se = se.payload, typeof se == "function") {
                    Fd = !0;
                    var $e = se.call(
                      Tt,
                      L,
                      Oe
                    );
                    if (w.mode & na) {
                      Ke(!0);
                      try {
                        se.call(Tt, L, Oe);
                      } finally {
                        Ke(!1);
                      }
                    }
                    Fd = !1, L = $e;
                    break e;
                  }
                  L = se;
                  break e;
                case hv:
                  w.flags = w.flags & -65537 | 128;
                case Yb:
                  if ($e = se.payload, typeof $e == "function") {
                    if (Fd = !0, se = $e.call(
                      Tt,
                      L,
                      Oe
                    ), w.mode & na) {
                      Ke(!0);
                      try {
                        $e.call(Tt, L, Oe);
                      } finally {
                        Ke(!1);
                      }
                    }
                    Fd = !1;
                  } else se = $e;
                  if (se == null) break e;
                  L = qe({}, L, se);
                  break e;
                case Vb:
                  Qo = !0;
              }
            }
            w = m.callback, w !== null && (e.flags |= 64, X && (e.flags |= 8192), X = o.callbacks, X === null ? o.callbacks = [w] : X.push(w));
          } else
            X = {
              lane: w,
              tag: m.tag,
              payload: m.payload,
              callback: m.callback,
              next: null
            }, q === null ? (T = q = X, S = L) : q = q.next = X, d |= w;
          if (m = m.next, m === null) {
            if (m = o.shared.pending, m === null)
              break;
            X = m, m = X.next, X.next = null, o.lastBaseUpdate = X, o.shared.pending = null;
          }
        } while (!0);
        q === null && (S = L), o.baseState = S, o.firstBaseUpdate = T, o.lastBaseUpdate = q, f === null && (o.shared.lanes = 0), ko |= d, e.lanes = d, e.memoizedState = L;
      }
      mv = null;
    }
    function Of(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Pc(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Of(a[e], t);
    }
    function Kp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Of(a[e], t);
    }
    function Jl(e, t) {
      var a = Mi;
      Ue(X0, a, e), Ue(eh, t, e), Mi = a | t.baseLanes;
    }
    function Df(e) {
      Ue(X0, Mi, e), Ue(
        eh,
        eh.current,
        e
      );
    }
    function Fa(e) {
      Mi = X0.current, nt(eh, e), nt(X0, e);
    }
    function Ye() {
      var e = V;
      Fn === null ? Fn = [e] : Fn.push(e);
    }
    function P() {
      var e = V;
      if (Fn !== null && (Hc++, Fn[Hc] !== e)) {
        var t = me(ze);
        if (!Gb.has(t) && (Gb.add(t), Fn !== null)) {
          for (var a = "", i = 0; i <= Hc; i++) {
            var o = Fn[i], f = i === Hc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function za(e) {
      e == null || De(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        V,
        typeof e
      );
    }
    function eo() {
      var e = me(ze);
      Qb.has(e) || (Qb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function zt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Pu(e, t) {
      if (Jy) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          V
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        V,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!va(e[a], t[a])) return !1;
      return !0;
    }
    function ei(e, t, a, i, o, f) {
      Zo = f, ze = t, Fn = e !== null ? e._debugHookTypes : null, Hc = -1, Jy = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = me(ze), pv.has(f) || (pv.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e !== null && e.memoizedState !== null ? vv : Fn !== null ? Zb : gv, ws = f = (t.mode & na) !== Rt;
      var d = bv(a, i, o);
      if (ws = !1, lh && (d = to(
        t,
        a,
        i,
        o
      )), f) {
        Ke(!0);
        try {
          d = to(
            t,
            a,
            i,
            o
          );
        } finally {
          Ke(!1);
        }
      }
      return zf(e, t), d;
    }
    function zf(e, t) {
      t._debugHookTypes = Fn, t.dependencies === null ? Cc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Cc
      }) : t.dependencies._debugThenableState = Cc, Y.H = J0;
      var a = gt !== null && gt.next !== null;
      if (Zo = 0, Fn = V = ol = gt = ze = null, Hc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Q0 = !1, Zy = 0, Cc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Ul || (e = e.dependencies, e !== null && ku(e) && (Ul = !0)), G0 ? (G0 = !1, e = !0) : e = !1, e && (t = me(t) || "Unknown", Xb.has(t) || pv.has(t) || (Xb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function to(e, t, a, i) {
      ze = e;
      var o = 0;
      do {
        if (lh && (Cc = null), Zy = 0, lh = !1, o >= GT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Jy = !1, ol = gt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Hc = -1, Y.H = Jb, f = bv(t, a, i);
      } while (lh);
      return f;
    }
    function Ma() {
      var e = Y.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Pi(t) : t, e = e.useState()[0], (gt !== null ? gt.memoizedState : null) !== e && (ze.flags |= 1024), t;
    }
    function Kl() {
      var e = Z0 !== 0;
      return Z0 = 0, e;
    }
    function su(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & xu) !== Rt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Ia(e) {
      if (Q0) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Q0 = !1;
      }
      Zo = 0, Fn = ol = gt = ze = null, Hc = -1, V = null, lh = !1, Zy = Z0 = 0, Cc = null;
    }
    function Ht() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ol === null ? ze.memoizedState = ol = e : ol = ol.next = e, ol;
    }
    function ke() {
      if (gt === null) {
        var e = ze.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = gt.next;
      var t = ol === null ? ze.memoizedState : ol.next;
      if (t !== null)
        ol = t, gt = e;
      else {
        if (e === null)
          throw ze.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        gt = e, e = {
          memoizedState: gt.memoizedState,
          baseState: gt.baseState,
          baseQueue: gt.baseQueue,
          queue: gt.queue,
          next: null
        }, ol === null ? ze.memoizedState = ol = e : ol = ol.next = e;
      }
      return ol;
    }
    function vr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Pi(e) {
      var t = Zy;
      return Zy += 1, Cc === null && (Cc = Ih()), e = Da(Cc, e, t), t = ze, (ol === null ? t.memoizedState : ol.next) === null && (t = t.alternate, Y.H = t !== null && t.memoizedState !== null ? vv : gv), e;
    }
    function Sn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Pi(e);
        if (e.$$typeof === _a) return bt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Vt(e) {
      var t = null, a = ze.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = ze.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = vr(), ze.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Jy)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = E0;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function et(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ie(e, t, a) {
      var i = Ht();
      if (a !== void 0) {
        var o = a(t);
        if (ws) {
          Ke(!0);
          try {
            a(t);
          } finally {
            Ke(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = fm.bind(
        null,
        ze,
        e
      ), [i.memoizedState, e];
    }
    function Ua(e) {
      var t = ke();
      return xa(t, gt, e);
    }
    function xa(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var m = d = null, S = null, T = t, q = !1;
        do {
          var L = T.lane & -536870913;
          if (L !== T.lane ? (Je & L) === L : (Zo & L) === L) {
            var w = T.revertLane;
            if (w === 0)
              S !== null && (S = S.next = {
                lane: 0,
                revertLane: 0,
                action: T.action,
                hasEagerState: T.hasEagerState,
                eagerState: T.eagerState,
                next: null
              }), L === Cs && (q = !0);
            else if ((Zo & w) === w) {
              T = T.next, w === Cs && (q = !0);
              continue;
            } else
              L = {
                lane: 0,
                revertLane: T.revertLane,
                action: T.action,
                hasEagerState: T.hasEagerState,
                eagerState: T.eagerState,
                next: null
              }, S === null ? (m = S = L, d = f) : S = S.next = L, ze.lanes |= w, ko |= w;
            L = T.action, ws && a(f, L), f = T.hasEagerState ? T.eagerState : a(f, L);
          } else
            w = {
              lane: L,
              revertLane: T.revertLane,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, S === null ? (m = S = w, d = f) : S = S.next = w, ze.lanes |= L, ko |= L;
          T = T.next;
        } while (T !== null && T !== t);
        if (S === null ? d = f : S.next = m, !va(f, e.memoizedState) && (Ul = !0, q && (a = Pd, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = S, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function ec(e) {
      var t = ke(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        va(f, t.memoizedState) || (Ul = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function ru(e, t, a) {
      var i = ze, o = Ht();
      if (at) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        th || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), th = !0);
      } else {
        if (f = t(), th || (a = t(), va(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), th = !0)), St === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Je & 124) !== 0 || tm(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Tr(
        ao.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, En(
        Wn | Tl,
        li(),
        lo.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Mf(e, t, a) {
      var i = ze, o = ke(), f = at;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !th) {
        var d = t();
        va(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), th = !0);
      }
      (d = !va(
        (gt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Ul = !0), o = o.queue;
      var m = ao.bind(null, i, o, e);
      if (kt(2048, Tl, m, [e]), o.getSnapshot !== t || d || ol !== null && ol.memoizedState.tag & Wn) {
        if (i.flags |= 2048, En(
          Wn | Tl,
          li(),
          lo.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), St === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Zo & 124) !== 0 || tm(i, t, a);
      }
      return a;
    }
    function tm(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ze.updateQueue, t === null ? (t = vr(), ze.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function lo(e, t, a, i) {
      t.value = a, t.getSnapshot = i, lm(t) && no(e);
    }
    function ao(e, t, a) {
      return a(function() {
        lm(t) && no(e);
      });
    }
    function lm(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !va(e, a);
      } catch {
        return !0;
      }
    }
    function no(e) {
      var t = Ql(e, 2);
      t !== null && wt(t, e, 2);
    }
    function Uf(e) {
      var t = Ht();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), ws) {
          Ke(!0);
          try {
            a();
          } finally {
            Ke(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: et,
        lastRenderedState: e
      }, t;
    }
    function du(e) {
      e = Uf(e);
      var t = e.queue, a = oo.bind(null, ze, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Pa(e) {
      var t = Ht();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = xr.bind(
        null,
        ze,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function hu(e, t) {
      var a = ke();
      return Tn(a, gt, e, t);
    }
    function Tn(e, t, a, i) {
      return e.baseState = a, xa(
        e,
        gt,
        typeof i == "function" ? i : et
      );
    }
    function br(e, t) {
      var a = ke();
      return gt !== null ? Tn(a, gt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function am(e, t, a, i, o) {
      if (qf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        Y.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, uo(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function uo(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = Y.T, d = {};
        Y.T = d, Y.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var m = a(o, i), S = Y.S;
          S !== null && S(d, m), xf(e, t, m);
        } catch (T) {
          al(e, t, T);
        } finally {
          Y.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), xf(e, t, d);
        } catch (T) {
          al(e, t, T);
        }
    }
    function xf(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          ti(e, t, i);
        },
        function(i) {
          return al(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ti(e, t, a);
    }
    function ti(e, t, a) {
      t.status = "fulfilled", t.value = a, Cf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, uo(e, a)));
    }
    function al(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Cf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Cf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function nm(e, t) {
      return t;
    }
    function io(e, t) {
      if (at) {
        var a = St.formState;
        if (a !== null) {
          e: {
            var i = ze;
            if (at) {
              if (Gt) {
                t: {
                  for (var o = Gt, f = Oi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = gl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === Zv || f === Q1 ? o : null;
                }
                if (o) {
                  Gt = gl(
                    o.nextSibling
                  ), i = o.data === Zv;
                  break e;
                }
              }
              yn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Ht(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nm,
        lastRenderedState: t
      }, a.queue = i, a = oo.bind(
        null,
        ze,
        i
      ), i.dispatch = a, i = Uf(!1), f = xr.bind(
        null,
        ze,
        !1,
        i.queue
      ), i = Ht(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = am.bind(
        null,
        ze,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Sr(e) {
      var t = ke();
      return kp(t, gt, e);
    }
    function kp(e, t, a) {
      if (t = xa(
        e,
        t,
        nm
      )[0], e = Ua(et)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Pi(t);
        } catch (d) {
          throw d === Xy ? L0 : d;
        }
      else i = t;
      t = ke();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (ze.flags |= 2048, En(
        Wn | Tl,
        li(),
        Kt.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function Kt(e, t) {
      e.action = t;
    }
    function co(e) {
      var t = ke(), a = gt;
      if (a !== null)
        return kp(t, a, e);
      ke(), t = t.memoizedState, a = ke();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function En(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = ze.updateQueue, t === null && (t = vr(), ze.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function li() {
      return { destroy: void 0, resource: void 0 };
    }
    function Hf(e) {
      var t = Ht();
      return e = { current: e }, t.memoizedState = e;
    }
    function Ca(e, t, a, i) {
      var o = Ht();
      i = i === void 0 ? null : i, ze.flags |= e, o.memoizedState = En(
        Wn | t,
        li(),
        a,
        i
      );
    }
    function kt(e, t, a, i) {
      var o = ke();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      gt !== null && i !== null && Pu(i, gt.memoizedState.deps) ? o.memoizedState = En(t, f, a, i) : (ze.flags |= e, o.memoizedState = En(
        Wn | t,
        f,
        a,
        i
      ));
    }
    function Tr(e, t) {
      (ze.mode & xu) !== Rt && (ze.mode & Mb) === Rt ? Ca(276826112, Tl, e, t) : Ca(8390656, Tl, e, t);
    }
    function Er(e, t) {
      var a = 4194308;
      return (ze.mode & xu) !== Rt && (a |= 134217728), Ca(a, Ll, e, t);
    }
    function $p(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Ar(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (ze.mode & xu) !== Rt && (i |= 134217728), Ca(
        i,
        Ll,
        $p.bind(null, t, e),
        a
      );
    }
    function An(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, kt(
        4,
        Ll,
        $p.bind(null, t, e),
        a
      );
    }
    function Nf(e, t) {
      return Ht().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function tc(e, t) {
      var a = ke();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Pu(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Rr(e, t) {
      var a = Ht();
      t = t === void 0 ? null : t;
      var i = e();
      if (ws) {
        Ke(!0);
        try {
          e();
        } finally {
          Ke(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function ai(e, t) {
      var a = ke();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Pu(t, i[1]))
        return i[0];
      if (i = e(), ws) {
        Ke(!0);
        try {
          e();
        } finally {
          Ke(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Or(e, t) {
      var a = Ht();
      return zr(a, e, t);
    }
    function wf(e, t) {
      var a = ke();
      return Bf(
        a,
        gt.memoizedState,
        e,
        t
      );
    }
    function Dr(e, t) {
      var a = ke();
      return gt === null ? zr(a, e, t) : Bf(
        a,
        gt.memoizedState,
        e,
        t
      );
    }
    function zr(e, t, a) {
      return a === void 0 || (Zo & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = u0(), ze.lanes |= e, ko |= e, a);
    }
    function Bf(e, t, a, i) {
      return va(a, t) ? a : eh.current !== null ? (e = zr(e, a, i), va(e, t) || (Ul = !0), e) : (Zo & 42) === 0 ? (Ul = !0, e.memoizedState = a) : (e = u0(), ze.lanes |= e, ko |= e, t);
    }
    function um(e, t, a, i, o) {
      var f = Re.p;
      Re.p = f !== 0 && f < un ? f : un;
      var d = Y.T, m = {};
      Y.T = m, xr(e, !1, t, a), m._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var S = o(), T = Y.S;
        if (T !== null && T(m, S), S !== null && typeof S == "object" && typeof S.then == "function") {
          var q = Zp(
            S,
            i
          );
          mu(
            e,
            t,
            q,
            Fl(e)
          );
        } else
          mu(
            e,
            t,
            i,
            Fl(e)
          );
      } catch (L) {
        mu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: L },
          Fl(e)
        );
      } finally {
        Re.p = f, Y.T = d, d === null && m._updatedFibers && (e = m._updatedFibers.size, m._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function lc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = im(e).queue;
      um(
        e,
        o,
        t,
        Zs,
        a === null ? W : function() {
          return cm(e), a(i);
        }
      );
    }
    function im(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Zs,
        baseState: Zs,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: et,
          lastRenderedState: Zs
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: et,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function cm(e) {
      Y.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = im(e).next.queue;
      mu(
        e,
        t,
        {},
        Fl(e)
      );
    }
    function Rn() {
      var e = Uf(!1);
      return e = um.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), Ht().memoizedState = e, [!1, e];
    }
    function Mr() {
      var e = Ua(et)[0], t = ke().memoizedState;
      return [
        typeof e == "boolean" ? e : Pi(e),
        t
      ];
    }
    function Ur() {
      var e = ec(et)[0], t = ke().memoizedState;
      return [
        typeof e == "boolean" ? e : Pi(e),
        t
      ];
    }
    function kl() {
      return bt(fp);
    }
    function On() {
      var e = Ht(), t = St.identifierPrefix;
      if (at) {
        var a = Uc, i = Mc;
        a = (i & ~(1 << 32 - zl(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Z0++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = LT++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function ac() {
      return Ht().memoizedState = om.bind(
        null,
        ze
      );
    }
    function om(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Fl(a);
            e = vn(i);
            var o = Wa(a, e, i);
            o !== null && (wt(o, a, i), Iu(o, a, i)), a = Rf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function fm(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Fl(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      qf(e) ? nc(t, o) : (o = _h(e, t, o, i), o !== null && (wt(o, e, i), _f(o, t, i))), Ci(e, i);
    }
    function oo(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Fl(e), mu(e, t, a, i), Ci(e, i);
    }
    function mu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (qf(e)) nc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = Y.H;
          Y.H = Hu;
          try {
            var m = t.lastRenderedState, S = f(m, a);
            if (o.hasEagerState = !0, o.eagerState = S, va(S, m))
              return sr(e, t, o, 0), St === null && bf(), !1;
          } catch {
          } finally {
            Y.H = d;
          }
        }
        if (a = _h(e, t, o, i), a !== null)
          return wt(a, e, i), _f(a, t, i), !0;
      }
      return !1;
    }
    function xr(e, t, a, i) {
      if (Y.T === null && Cs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Vm(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, qf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = _h(
          e,
          a,
          i,
          2
        ), t !== null && wt(t, e, 2);
      Ci(e, 2);
    }
    function qf(e) {
      var t = e.alternate;
      return e === ze || t !== null && t === ze;
    }
    function nc(e, t) {
      lh = Q0 = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function _f(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Vc(e, a);
      }
    }
    function nl(e) {
      var t = Ve;
      return e != null && (Ve = t === null ? e : t.concat(e)), t;
    }
    function fo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Ef(e, a.mode, 0), t._debugInfo = Ve, t.return = a), fe(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function so(e) {
      var t = Ky;
      return Ky += 1, ah === null && (ah = Ih()), Da(ah, e, t);
    }
    function Ha(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function xe(e, t) {
      throw t.$$typeof === hs ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function ut(e, t) {
      var a = me(e) || "Component";
      c1[a] || (c1[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Mt(e, t) {
      var a = me(e) || "Component";
      o1[a] || (o1[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Yf(e) {
      function t(R, O) {
        if (e) {
          var z = R.deletions;
          z === null ? (R.deletions = [O], R.flags |= 16) : z.push(O);
        }
      }
      function a(R, O) {
        if (!e) return null;
        for (; O !== null; )
          t(R, O), O = O.sibling;
        return null;
      }
      function i(R) {
        for (var O = /* @__PURE__ */ new Map(); R !== null; )
          R.key !== null ? O.set(R.key, R) : O.set(R.index, R), R = R.sibling;
        return O;
      }
      function o(R, O) {
        return R = mn(R, O), R.index = 0, R.sibling = null, R;
      }
      function f(R, O, z) {
        return R.index = z, e ? (z = R.alternate, z !== null ? (z = z.index, z < O ? (R.flags |= 67108866, O) : z) : (R.flags |= 67108866, O)) : (R.flags |= 1048576, O);
      }
      function d(R) {
        return e && R.alternate === null && (R.flags |= 67108866), R;
      }
      function m(R, O, z, Z) {
        return O === null || O.tag !== 6 ? (O = Ju(
          z,
          R.mode,
          Z
        ), O.return = R, O._debugOwner = R, O._debugTask = R._debugTask, O._debugInfo = Ve, O) : (O = o(O, z), O.return = R, O._debugInfo = Ve, O);
      }
      function S(R, O, z, Z) {
        var ne = z.type;
        return ne === Ce ? (O = q(
          R,
          O,
          z.props.children,
          Z,
          z.key
        ), fo(z, O, R), O) : O !== null && (O.elementType === ne || Lp(O, z) || typeof ne == "object" && ne !== null && ne.$$typeof === pa && Jo(ne) === O.type) ? (O = o(O, z.props), Ha(O, z), O.return = R, O._debugOwner = z._owner, O._debugInfo = Ve, O) : (O = Ef(z, R.mode, Z), Ha(O, z), O.return = R, O._debugInfo = Ve, O);
      }
      function T(R, O, z, Z) {
        return O === null || O.tag !== 4 || O.stateNode.containerInfo !== z.containerInfo || O.stateNode.implementation !== z.implementation ? (O = Lh(z, R.mode, Z), O.return = R, O._debugInfo = Ve, O) : (O = o(O, z.children || []), O.return = R, O._debugInfo = Ve, O);
      }
      function q(R, O, z, Z, ne) {
        return O === null || O.tag !== 7 ? (O = Zu(
          z,
          R.mode,
          Z,
          ne
        ), O.return = R, O._debugOwner = R, O._debugTask = R._debugTask, O._debugInfo = Ve, O) : (O = o(O, z), O.return = R, O._debugInfo = Ve, O);
      }
      function L(R, O, z) {
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return O = Ju(
            "" + O,
            R.mode,
            z
          ), O.return = R, O._debugOwner = R, O._debugTask = R._debugTask, O._debugInfo = Ve, O;
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case pi:
              return z = Ef(
                O,
                R.mode,
                z
              ), Ha(z, O), z.return = R, R = nl(O._debugInfo), z._debugInfo = Ve, Ve = R, z;
            case Ac:
              return O = Lh(
                O,
                R.mode,
                z
              ), O.return = R, O._debugInfo = Ve, O;
            case pa:
              var Z = nl(O._debugInfo);
              return O = Jo(O), R = L(R, O, z), Ve = Z, R;
          }
          if (De(O) || ct(O))
            return z = Zu(
              O,
              R.mode,
              z,
              null
            ), z.return = R, z._debugOwner = R, z._debugTask = R._debugTask, R = nl(O._debugInfo), z._debugInfo = Ve, Ve = R, z;
          if (typeof O.then == "function")
            return Z = nl(O._debugInfo), R = L(
              R,
              so(O),
              z
            ), Ve = Z, R;
          if (O.$$typeof === _a)
            return L(
              R,
              Af(R, O),
              z
            );
          xe(R, O);
        }
        return typeof O == "function" && ut(R, O), typeof O == "symbol" && Mt(R, O), null;
      }
      function w(R, O, z, Z) {
        var ne = O !== null ? O.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return ne !== null ? null : m(R, O, "" + z, Z);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case pi:
              return z.key === ne ? (ne = nl(z._debugInfo), R = S(
                R,
                O,
                z,
                Z
              ), Ve = ne, R) : null;
            case Ac:
              return z.key === ne ? T(R, O, z, Z) : null;
            case pa:
              return ne = nl(z._debugInfo), z = Jo(z), R = w(
                R,
                O,
                z,
                Z
              ), Ve = ne, R;
          }
          if (De(z) || ct(z))
            return ne !== null ? null : (ne = nl(z._debugInfo), R = q(
              R,
              O,
              z,
              Z,
              null
            ), Ve = ne, R);
          if (typeof z.then == "function")
            return ne = nl(z._debugInfo), R = w(
              R,
              O,
              so(z),
              Z
            ), Ve = ne, R;
          if (z.$$typeof === _a)
            return w(
              R,
              O,
              Af(R, z),
              Z
            );
          xe(R, z);
        }
        return typeof z == "function" && ut(R, z), typeof z == "symbol" && Mt(R, z), null;
      }
      function X(R, O, z, Z, ne) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
          return R = R.get(z) || null, m(O, R, "" + Z, ne);
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case pi:
              return z = R.get(
                Z.key === null ? z : Z.key
              ) || null, R = nl(Z._debugInfo), O = S(
                O,
                z,
                Z,
                ne
              ), Ve = R, O;
            case Ac:
              return R = R.get(
                Z.key === null ? z : Z.key
              ) || null, T(O, R, Z, ne);
            case pa:
              var He = nl(Z._debugInfo);
              return Z = Jo(Z), O = X(
                R,
                O,
                z,
                Z,
                ne
              ), Ve = He, O;
          }
          if (De(Z) || ct(Z))
            return z = R.get(z) || null, R = nl(Z._debugInfo), O = q(
              O,
              z,
              Z,
              ne,
              null
            ), Ve = R, O;
          if (typeof Z.then == "function")
            return He = nl(Z._debugInfo), O = X(
              R,
              O,
              z,
              so(Z),
              ne
            ), Ve = He, O;
          if (Z.$$typeof === _a)
            return X(
              R,
              O,
              z,
              Af(O, Z),
              ne
            );
          xe(O, Z);
        }
        return typeof Z == "function" && ut(O, Z), typeof Z == "symbol" && Mt(O, Z), null;
      }
      function se(R, O, z, Z) {
        if (typeof z != "object" || z === null) return Z;
        switch (z.$$typeof) {
          case pi:
          case Ac:
            k(R, O, z);
            var ne = z.key;
            if (typeof ne != "string") break;
            if (Z === null) {
              Z = /* @__PURE__ */ new Set(), Z.add(ne);
              break;
            }
            if (!Z.has(ne)) {
              Z.add(ne);
              break;
            }
            fe(O, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ne
              );
            });
            break;
          case pa:
            z = Jo(z), se(R, O, z, Z);
        }
        return Z;
      }
      function Oe(R, O, z, Z) {
        for (var ne = null, He = null, re = null, Ne = O, we = O = 0, Ot = null; Ne !== null && we < z.length; we++) {
          Ne.index > we ? (Ot = Ne, Ne = null) : Ot = Ne.sibling;
          var It = w(
            R,
            Ne,
            z[we],
            Z
          );
          if (It === null) {
            Ne === null && (Ne = Ot);
            break;
          }
          ne = se(
            R,
            It,
            z[we],
            ne
          ), e && Ne && It.alternate === null && t(R, Ne), O = f(It, O, we), re === null ? He = It : re.sibling = It, re = It, Ne = Ot;
        }
        if (we === z.length)
          return a(R, Ne), at && Ki(R, we), He;
        if (Ne === null) {
          for (; we < z.length; we++)
            Ne = L(R, z[we], Z), Ne !== null && (ne = se(
              R,
              Ne,
              z[we],
              ne
            ), O = f(
              Ne,
              O,
              we
            ), re === null ? He = Ne : re.sibling = Ne, re = Ne);
          return at && Ki(R, we), He;
        }
        for (Ne = i(Ne); we < z.length; we++)
          Ot = X(
            Ne,
            R,
            we,
            z[we],
            Z
          ), Ot !== null && (ne = se(
            R,
            Ot,
            z[we],
            ne
          ), e && Ot.alternate !== null && Ne.delete(
            Ot.key === null ? we : Ot.key
          ), O = f(
            Ot,
            O,
            we
          ), re === null ? He = Ot : re.sibling = Ot, re = Ot);
        return e && Ne.forEach(function(Yc) {
          return t(R, Yc);
        }), at && Ki(R, we), He;
      }
      function Tt(R, O, z, Z) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var ne = null, He = null, re = O, Ne = O = 0, we = null, Ot = null, It = z.next(); re !== null && !It.done; Ne++, It = z.next()) {
          re.index > Ne ? (we = re, re = null) : we = re.sibling;
          var Yc = w(R, re, It.value, Z);
          if (Yc === null) {
            re === null && (re = we);
            break;
          }
          Ot = se(
            R,
            Yc,
            It.value,
            Ot
          ), e && re && Yc.alternate === null && t(R, re), O = f(Yc, O, Ne), He === null ? ne = Yc : He.sibling = Yc, He = Yc, re = we;
        }
        if (It.done)
          return a(R, re), at && Ki(R, Ne), ne;
        if (re === null) {
          for (; !It.done; Ne++, It = z.next())
            re = L(R, It.value, Z), re !== null && (Ot = se(
              R,
              re,
              It.value,
              Ot
            ), O = f(
              re,
              O,
              Ne
            ), He === null ? ne = re : He.sibling = re, He = re);
          return at && Ki(R, Ne), ne;
        }
        for (re = i(re); !It.done; Ne++, It = z.next())
          we = X(
            re,
            R,
            Ne,
            It.value,
            Z
          ), we !== null && (Ot = se(
            R,
            we,
            It.value,
            Ot
          ), e && we.alternate !== null && re.delete(
            we.key === null ? Ne : we.key
          ), O = f(
            we,
            O,
            Ne
          ), He === null ? ne = we : He.sibling = we, He = we);
        return e && re.forEach(function(m2) {
          return t(R, m2);
        }), at && Ki(R, Ne), ne;
      }
      function $e(R, O, z, Z) {
        if (typeof z == "object" && z !== null && z.type === Ce && z.key === null && (fo(z, null, R), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case pi:
              var ne = nl(z._debugInfo);
              e: {
                for (var He = z.key; O !== null; ) {
                  if (O.key === He) {
                    if (He = z.type, He === Ce) {
                      if (O.tag === 7) {
                        a(
                          R,
                          O.sibling
                        ), Z = o(
                          O,
                          z.props.children
                        ), Z.return = R, Z._debugOwner = z._owner, Z._debugInfo = Ve, fo(z, Z, R), R = Z;
                        break e;
                      }
                    } else if (O.elementType === He || Lp(
                      O,
                      z
                    ) || typeof He == "object" && He !== null && He.$$typeof === pa && Jo(He) === O.type) {
                      a(
                        R,
                        O.sibling
                      ), Z = o(O, z.props), Ha(Z, z), Z.return = R, Z._debugOwner = z._owner, Z._debugInfo = Ve, R = Z;
                      break e;
                    }
                    a(R, O);
                    break;
                  } else t(R, O);
                  O = O.sibling;
                }
                z.type === Ce ? (Z = Zu(
                  z.props.children,
                  R.mode,
                  Z,
                  z.key
                ), Z.return = R, Z._debugOwner = R, Z._debugTask = R._debugTask, Z._debugInfo = Ve, fo(z, Z, R), R = Z) : (Z = Ef(
                  z,
                  R.mode,
                  Z
                ), Ha(Z, z), Z.return = R, Z._debugInfo = Ve, R = Z);
              }
              return R = d(R), Ve = ne, R;
            case Ac:
              e: {
                for (ne = z, z = ne.key; O !== null; ) {
                  if (O.key === z)
                    if (O.tag === 4 && O.stateNode.containerInfo === ne.containerInfo && O.stateNode.implementation === ne.implementation) {
                      a(
                        R,
                        O.sibling
                      ), Z = o(
                        O,
                        ne.children || []
                      ), Z.return = R, R = Z;
                      break e;
                    } else {
                      a(R, O);
                      break;
                    }
                  else t(R, O);
                  O = O.sibling;
                }
                Z = Lh(
                  ne,
                  R.mode,
                  Z
                ), Z.return = R, R = Z;
              }
              return d(R);
            case pa:
              return ne = nl(z._debugInfo), z = Jo(z), R = $e(
                R,
                O,
                z,
                Z
              ), Ve = ne, R;
          }
          if (De(z))
            return ne = nl(z._debugInfo), R = Oe(
              R,
              O,
              z,
              Z
            ), Ve = ne, R;
          if (ct(z)) {
            if (ne = nl(z._debugInfo), He = ct(z), typeof He != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var re = He.call(z);
            return re === z ? (R.tag !== 0 || Object.prototype.toString.call(R.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(re) !== "[object Generator]") && (u1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), u1 = !0) : z.entries !== He || Tv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Tv = !0), R = Tt(
              R,
              O,
              re,
              Z
            ), Ve = ne, R;
          }
          if (typeof z.then == "function")
            return ne = nl(z._debugInfo), R = $e(
              R,
              O,
              so(z),
              Z
            ), Ve = ne, R;
          if (z.$$typeof === _a)
            return $e(
              R,
              O,
              Af(R, z),
              Z
            );
          xe(R, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (ne = "" + z, O !== null && O.tag === 6 ? (a(
          R,
          O.sibling
        ), Z = o(O, ne), Z.return = R, R = Z) : (a(R, O), Z = Ju(
          ne,
          R.mode,
          Z
        ), Z.return = R, Z._debugOwner = R, Z._debugTask = R._debugTask, Z._debugInfo = Ve, R = Z), d(R)) : (typeof z == "function" && ut(R, z), typeof z == "symbol" && Mt(R, z), a(R, O));
      }
      return function(R, O, z, Z) {
        var ne = Ve;
        Ve = null;
        try {
          Ky = 0;
          var He = $e(
            R,
            O,
            z,
            Z
          );
          return ah = null, He;
        } catch (Ot) {
          if (Ot === Xy || Ot === L0) throw Ot;
          var re = ce(29, Ot, null, R.mode);
          re.lanes = Z, re.return = R;
          var Ne = re._debugInfo = Ve;
          if (re._debugOwner = R._debugOwner, re._debugTask = R._debugTask, Ne != null) {
            for (var we = Ne.length - 1; 0 <= we; we--)
              if (typeof Ne[we].stack == "string") {
                re._debugOwner = Ne[we], re._debugTask = Ne[we].debugTask;
                break;
              }
          }
          return re;
        } finally {
          Ve = ne;
        }
      };
    }
    function ra(e) {
      var t = e.alternate;
      Ue(
        El,
        El.current & uh,
        e
      ), Ue(In, e, e), zi === null && (t === null || eh.current !== null || t.memoizedState !== null) && (zi = e);
    }
    function ni(e) {
      if (e.tag === 22) {
        if (Ue(El, El.current, e), Ue(In, e, e), zi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (zi = e);
        }
      } else en(e);
    }
    function en(e) {
      Ue(El, El.current, e), Ue(
        In,
        In.current,
        e
      );
    }
    function da(e) {
      nt(In, e), zi === e && (zi = null), nt(El, e);
    }
    function yu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Bc || Yn(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function sm(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        S1.has(t) || (S1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Ut(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & na) {
        Ke(!0);
        try {
          f = a(i, o);
        } finally {
          Ke(!1);
        }
      }
      f === void 0 && (t = Be(t) || "Component", p1.has(t) || (p1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : qe({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Cr(e, t, a, i, o, f, d) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        if (a = m.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & na) {
          Ke(!0);
          try {
            a = m.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            Ke(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Be(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !vf(a, i) || !vf(o, f) : !0;
    }
    function Hr(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = me(e) || "Component", r1.has(e) || (r1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Ev.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function ui(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = qe({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function rm(e) {
      Av(e), console.warn(
        `%s

%s
`,
        ih ? "An error occurred in the <" + ih + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Wp(e) {
      var t = ih ? "The above error occurred in the <" + ih + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Rv || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          I1 + e[0],
          P1,
          rg + i + rg,
          eS
        ) : e.splice(
          0,
          0,
          I1,
          P1,
          rg + i + rg,
          eS
        ), e.unshift(console), i = d2.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Nr(e) {
      Av(e);
    }
    function ro(e, t) {
      try {
        ih = t.source ? me(t.source) : null, Rv = null;
        var a = t.value;
        if (Y.actQueue !== null)
          Y.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function wr(e, t, a) {
      try {
        ih = a.source ? me(a.source) : null, Rv = me(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Rl(e, t, a) {
      return a = vn(a), a.tag = hv, a.payload = { element: null }, a.callback = function() {
        fe(t.source, ro, e, t);
      }, a;
    }
    function Nt(e) {
      return e = vn(e), e.tag = hv, e;
    }
    function jf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Gp(a), fe(
            i.source,
            wr,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Gp(a), fe(
          i.source,
          wr,
          t,
          a,
          i
        ), typeof o != "function" && (Wo === null ? Wo = /* @__PURE__ */ new Set([this]) : Wo.add(this)), XT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          me(a) || "Unknown"
        );
      });
    }
    function Vf(e, t, a, i, o) {
      if (a.flags |= 32768, jt && So(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && hl(
          t,
          a,
          o,
          !0
        ), at && (xc = !0), a = In.current, a !== null) {
          switch (a.tag) {
            case 13:
              return zi === null ? ed() : a.alternate === null && Xt === wc && (Xt = Mv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === dv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), qm(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === dv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), qm(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return qm(e, i, o), ed(), !1;
      }
      if (at)
        return xc = !0, t = In.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== ov && $c(
          fa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== ov && $c(
          fa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = fa(i, a), o = Rl(
          e.stateNode,
          i,
          o
        ), Fc(e, o), Xt !== Bs && (Xt = sh)), !1;
      var f = fa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (tp === null ? tp = [f] : tp.push(f), Xt !== Bs && (Xt = sh), t === null) return !0;
      i = fa(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Rl(
              a.stateNode,
              i,
              e
            ), Fc(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Wo === null || !Wo.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Nt(o), jf(
                o,
                e,
                a,
                i
              ), Fc(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Lt(e, t, a, i) {
      t.child = e === null ? f1(t, null, a, i) : nh(
        t,
        e.child,
        a,
        i
      );
    }
    function Br(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var m in i)
          m !== "ref" && (d[m] = i[m]);
      } else d = i;
      return $u(t), sl(t), i = ei(
        e,
        t,
        a,
        d,
        f,
        o
      ), m = Kl(), Aa(), e !== null && !Ul ? (su(e, t, o), zn(e, t, o)) : (at && m && hr(t), t.flags |= 1, Lt(e, t, i, o), t.child);
    }
    function Dn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !jh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Ji(f), t.tag = 15, t.type = a, jr(t, f), Lf(
          e,
          t,
          a,
          i,
          o
        )) : (e = dr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Zr(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : vf, a(d, i) && e.ref === t.ref)
          return zn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = mn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Lf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (vf(f, i) && e.ref === t.ref && t.type === e.type)
          if (Ul = !1, t.pendingProps = i = f, Zr(e, o))
            (e.flags & 131072) !== 0 && (Ul = !0);
          else
            return t.lanes = e.lanes, zn(e, t, o);
      }
      return Yr(
        e,
        t,
        a,
        i,
        o
      );
    }
    function qr(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return _r(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && gr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Jl(t, f) : Df(t), ni(t);
        else
          return t.lanes = t.childLanes = 536870912, _r(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (gr(t, f.cachePool), Jl(t, f), en(t), t.memoizedState = null) : (e !== null && gr(t, null), Df(t), en(t));
      return Lt(e, t, o, a), t.child;
    }
    function _r(e, t, a, i) {
      var o = Fh();
      return o = o === null ? null : {
        parent: Sl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && gr(t, null), Df(t), ni(t), e !== null && hl(e, t, i, !0), null;
    }
    function Gf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Yr(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Be(a) || "Unknown";
        E1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), E1[f] = !0);
      }
      return t.mode & na && Cu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (jr(t, t.type), a.contextTypes && (f = Be(a) || "Unknown", R1[f] || (R1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), $u(t), sl(t), a = ei(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Kl(), Aa(), e !== null && !Ul ? (su(e, t, o), zn(e, t, o)) : (at && i && hr(t), t.flags |= 1, Lt(e, t, a, o), t.child);
    }
    function dm(e, t, a, i, o, f) {
      return $u(t), sl(t), Hc = -1, Jy = e !== null && e.type !== t.type, t.updateQueue = null, a = to(
        t,
        i,
        a,
        o
      ), zf(e, t), i = Kl(), Aa(), e !== null && !Ul ? (su(e, t, f), zn(e, t, f)) : (at && i && hr(t), t.flags |= 1, Lt(e, t, a, f), t.child);
    }
    function hm(e, t, a, i, o) {
      switch (x(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var m = o & -o;
          if (t.lanes |= m, d = St, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          m = Nt(m), jf(
            m,
            d,
            t,
            fa(f, t)
          ), Fc(t, m);
      }
      if ($u(t), t.stateNode === null) {
        if (d = Xo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== _a) && !b1.has(a) && (b1.add(a), m = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === zd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Be(a) || "Component",
          m
        )), typeof f == "object" && f !== null && (d = bt(f)), f = new a(i, d), t.mode & na) {
          Ke(!0);
          try {
            f = new a(i, d);
          } finally {
            Ke(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Ev, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = s1, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Be(a) || "Component", d1.has(d) || (d1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var S = m = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? m = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (m = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? S = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (S = "UNSAFE_componentWillUpdate"), d !== null || m !== null || S !== null) {
            f = Be(a) || "Component";
            var T = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            m1.has(f) || (m1.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              T,
              d !== null ? `
  ` + d : "",
              m !== null ? `
  ` + m : "",
              S !== null ? `
  ` + S : ""
            ));
          }
        }
        f = t.stateNode, d = Be(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !v1.has(a) && (v1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !g1.has(a) && (g1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Be(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), m = f.props !== i, f.props !== void 0 && m && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || h1.has(a) || (h1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Be(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (m = f.state) && (typeof m != "object" || De(m)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Zl(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? bt(d) : Xo, f.state === i && (d = Be(a) || "Component", y1.has(d) || (y1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & na && Cu.recordLegacyContextWarning(
          t,
          f
        ), Cu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Ut(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          me(t) || "Component"
        ), Ev.enqueueReplaceState(
          f,
          f.state,
          null
        )), Ic(t, i, f, o), bn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & xu) !== Rt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var q = t.memoizedProps;
        m = ui(a, q), f.props = m;
        var L = f.context;
        S = a.contextType, d = Xo, typeof S == "object" && S !== null && (d = bt(S)), T = a.getDerivedStateFromProps, S = typeof T == "function" || typeof f.getSnapshotBeforeUpdate == "function", q = t.pendingProps !== q, S || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (q || L !== d) && Hr(
          t,
          f,
          i,
          d
        ), Qo = !1;
        var w = t.memoizedState;
        f.state = w, Ic(t, i, f, o), bn(), L = t.memoizedState, q || w !== L || Qo ? (typeof T == "function" && (Ut(
          t,
          a,
          T,
          i
        ), L = t.memoizedState), (m = Qo || Cr(
          t,
          a,
          m,
          i,
          w,
          L,
          d
        )) ? (S || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & xu) !== Rt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & xu) !== Rt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = L), f.props = i, f.state = L, f.context = d, f = m) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & xu) !== Rt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Fu(e, t), d = t.memoizedProps, S = ui(a, d), f.props = S, T = t.pendingProps, w = f.context, L = a.contextType, m = Xo, typeof L == "object" && L !== null && (m = bt(L)), q = a.getDerivedStateFromProps, (L = typeof q == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== T || w !== m) && Hr(
          t,
          f,
          i,
          m
        ), Qo = !1, w = t.memoizedState, f.state = w, Ic(t, i, f, o), bn();
        var X = t.memoizedState;
        d !== T || w !== X || Qo || e !== null && e.dependencies !== null && ku(e.dependencies) ? (typeof q == "function" && (Ut(
          t,
          a,
          q,
          i
        ), X = t.memoizedState), (S = Qo || Cr(
          t,
          a,
          S,
          i,
          w,
          X,
          m
        ) || e !== null && e.dependencies !== null && ku(e.dependencies)) ? (L || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, X, m), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          X,
          m
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = X), f.props = i, f.state = X, f.context = m, f = S) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (m = f, Gf(e, t), d = (t.flags & 128) !== 0, m || d) {
        if (m = t.stateNode, of(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Va = -1;
        else {
          if (sl(t), a = $b(m), t.mode & na) {
            Ke(!0);
            try {
              $b(m);
            } finally {
              Ke(!1);
            }
          }
          Aa();
        }
        t.flags |= 1, e !== null && d ? (t.child = nh(
          t,
          e.child,
          null,
          o
        ), t.child = nh(
          t,
          null,
          a,
          o
        )) : Lt(e, t, a, o), t.memoizedState = m.state, e = t.child;
      } else
        e = zn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (ch || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        me(t) || "a component"
      ), ch = !0), e;
    }
    function mm(e, t, a, i) {
      return $i(), t.flags |= 256, Lt(e, t, a, i), t.child;
    }
    function jr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Be(t) || "Unknown", O1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), O1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Be(t) || "Unknown", A1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), A1[t] = !0));
    }
    function Xf(e) {
      return { baseLanes: e, cachePool: Jp() };
    }
    function Vr(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= fn), e;
    }
    function Fp(e, t, a) {
      var i, o = t.pendingProps;
      D(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (El.current & ky) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (at) {
          if (f ? ra(t) : en(t), at) {
            var m = Gt, S;
            if (!(S = !m)) {
              e: {
                var T = m;
                for (S = Oi; T.nodeType !== 8; ) {
                  if (!S) {
                    S = null;
                    break e;
                  }
                  if (T = gl(T.nextSibling), T === null) {
                    S = null;
                    break e;
                  }
                }
                S = T;
              }
              S !== null ? (Ja(), t.memoizedState = {
                dehydrated: S,
                treeContext: Ms !== null ? { id: Mc, overflow: Uc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, T = ce(18, null, null, Rt), T.stateNode = S, T.return = t, t.child = T, ba = t, Gt = null, S = !0) : S = !1, S = !S;
            }
            S && (Gh(
              t,
              m
            ), yn(t));
          }
          if (m = t.memoizedState, m !== null && (m = m.dehydrated, m !== null))
            return Yn(m) ? t.lanes = 32 : t.lanes = 536870912, null;
          da(t);
        }
        return m = o.children, o = o.fallback, f ? (en(t), f = t.mode, m = Qf(
          {
            mode: "hidden",
            children: m
          },
          f
        ), o = Zu(
          o,
          f,
          a,
          null
        ), m.return = t, o.return = t, m.sibling = o, t.child = m, f = t.child, f.memoizedState = Xf(a), f.childLanes = Vr(
          e,
          i,
          a
        ), t.memoizedState = Dv, o) : (ra(t), Lr(
          t,
          m
        ));
      }
      var q = e.memoizedState;
      if (q !== null && (m = q.dehydrated, m !== null)) {
        if (d)
          t.flags & 256 ? (ra(t), t.flags &= -257, t = Gr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (en(t), t.child = e.child, t.flags |= 128, t = null) : (en(t), f = o.fallback, m = t.mode, o = Qf(
            {
              mode: "visible",
              children: o.children
            },
            m
          ), f = Zu(
            f,
            m,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, nh(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Xf(a), o.childLanes = Vr(
            e,
            i,
            a
          ), t.memoizedState = Dv, t = f);
        else if (ra(t), at && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Yn(m)) {
          if (i = m.nextSibling && m.nextSibling.dataset, i) {
            S = i.dgst;
            var L = i.msg;
            T = i.stck;
            var w = i.cstck;
          }
          m = L, i = S, o = T, S = f = w, f = Error(m || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = S === void 0 ? null : S, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && uv.set(
            f,
            o
          ), $c(o), t = Gr(
            e,
            t,
            a
          );
        } else if (Ul || hl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Ul || i) {
          if (i = St, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Hl(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== q.retryLane))
            throw q.retryLane = o, Ql(
              e,
              o
            ), wt(
              i,
              e,
              o
            ), T1;
          m.data === Bc || ed(), t = Gr(
            e,
            t,
            a
          );
        } else
          m.data === Bc ? (t.flags |= 192, t.child = e.child, t = null) : (e = q.treeContext, Gt = gl(
            m.nextSibling
          ), ba = t, at = !0, Us = null, xc = !1, kn = null, Oi = !1, e !== null && (Ja(), Jn[Kn++] = Mc, Jn[Kn++] = Uc, Jn[Kn++] = Ms, Mc = e.id, Uc = e.overflow, Ms = t), t = Lr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (en(t), f = o.fallback, m = t.mode, S = e.child, T = S.sibling, o = mn(
        S,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = S.subtreeFlags & 65011712, T !== null ? f = mn(
        T,
        f
      ) : (f = Zu(
        f,
        m,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, m = e.child.memoizedState, m === null ? m = Xf(a) : (S = m.cachePool, S !== null ? (T = Sl._currentValue, S = S.parent !== T ? { parent: T, pool: T } : S) : S = Jp(), m = {
        baseLanes: m.baseLanes | a,
        cachePool: S
      }), f.memoizedState = m, f.childLanes = Vr(
        e,
        i,
        a
      ), t.memoizedState = Dv, o) : (ra(t), a = e.child, e = a.sibling, a = mn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Lr(e, t) {
      return t = Qf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Qf(e, t) {
      return e = ce(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: iv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Gr(e, t, a) {
      return nh(t, e.child, null, a), e = Lr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Xr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Kh(
        e.return,
        t,
        a
      );
    }
    function ym(e, t) {
      var a = De(e);
      return e = !a && typeof ct(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Qr(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function pm(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !D1[o])
        if (D1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || Ov[f] || (f !== "collapsed" && f !== "hidden" ? (Ov[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (Ov[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (De(i)) {
          for (var d = 0; d < i.length; d++)
            if (!ym(i[d], d)) break e;
        } else if (d = ct(i), typeof d == "function") {
          if (d = d.call(i))
            for (var m = d.next(), S = 0; !m.done; m = d.next()) {
              if (!ym(m.value, S)) break e;
              S++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Lt(e, t, i, a), i = El.current, (i & ky) !== 0)
        i = i & uh | ky, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Xr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Xr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= uh;
      }
      switch (Ue(El, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && yu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Qr(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && yu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Qr(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Qr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function zn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Va = -1, ko |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (hl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = mn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = mn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Zr(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ku(e)));
    }
    function Vg(e, t, a) {
      switch (t.tag) {
        case 3:
          Cl(
            t,
            t.stateNode.containerInfo
          ), Ku(
            t,
            Sl,
            e.memoizedState.cache
          ), $i();
          break;
        case 27:
        case 5:
          F(t);
          break;
        case 4:
          Cl(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Ku(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ra(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Fp(
              e,
              t,
              a
            ) : (ra(t), e = zn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ra(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (hl(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return pm(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ue(
            El,
            El.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, qr(e, t, a);
        case 24:
          Ku(
            t,
            Sl,
            e.memoizedState.cache
          );
      }
      return zn(e, t, a);
    }
    function Jr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = dr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Ul = !0;
        else {
          if (!Zr(e, a) && (t.flags & 128) === 0)
            return Ul = !1, Vg(
              e,
              t,
              a
            );
          Ul = (e.flags & 131072) !== 0;
        }
      else
        Ul = !1, (i = at) && (Ja(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Ja(), Xp(t, B0, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Jo(t.elementType), t.type = e, typeof e == "function")
            jh(e) ? (i = ui(
              e,
              i
            ), t.tag = 1, t.type = e = Ji(e), t = hm(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, jr(t, e), t.type = e = Ji(e), t = Yr(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Au) {
                t.tag = 11, t.type = e = Yh(e), t = Br(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === ms) {
                t.tag = 14, t = Dn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === pa && (t = " Did you wrap a component in React.lazy() more than once?"), e = Be(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Yr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = ui(
            i,
            t.pendingProps
          ), hm(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Cl(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Fu(e, t), Ic(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Ku(t, Sl, i), i !== f.cache && kh(
              t,
              [Sl],
              a,
              !0
            ), bn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = mm(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = fa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), $c(o), t = mm(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Gt = gl(e.firstChild), ba = t, at = !0, Us = null, xc = !1, kn = null, Oi = !0, e = f1(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if ($i(), i === o) {
                t = zn(
                  e,
                  t,
                  a
                );
                break e;
              }
              Lt(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Gf(e, t), e === null ? (e = Eu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : at || (e = t.type, a = t.pendingProps, i = el(
            Vn.current
          ), i = Qe(
            i
          ).createElement(e), i[Ml] = t, i[la] = a, qt(i, e, a), tl(i), t.stateNode = i) : t.memoizedState = Eu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return F(t), e === null && at && (i = el(Vn.current), o = U(), i = t.stateNode = ty(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), xc || (o = yt(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Ka(t, 0).serverProps = o)), ba = t, Oi = !0, o = Gt, _n(t.type) ? ($v = o, Gt = gl(
            i.firstChild
          )) : Gt = o), Lt(
            e,
            t,
            t.pendingProps.children,
            a
          ), Gf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && at && (f = U(), i = ar(
            t.type,
            f.ancestorInfo
          ), o = Gt, (d = !o) || (d = di(
            o,
            t.type,
            t.pendingProps,
            Oi
          ), d !== null ? (t.stateNode = d, xc || (f = yt(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Ka(t, 0).serverProps = f)), ba = t, Gt = gl(
            d.firstChild
          ), Oi = !1, f = !0) : f = !1, d = !f), d && (i && Gh(t, o), yn(t))), F(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, qn(o, f) ? i = null : d !== null && qn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ei(
            e,
            t,
            Ma,
            null,
            null,
            a
          ), fp._currentValue = o), Gf(e, t), Lt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && at && (e = t.pendingProps, a = U(), i = a.ancestorInfo.current, e = i != null ? mf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = Gt, (i = !a) || (i = pl(
            a,
            t.pendingProps,
            Oi
          ), i !== null ? (t.stateNode = i, ba = t, Gt = null, i = !0) : i = !1, i = !i), i && (e && Gh(t, a), yn(t))), null;
        case 13:
          return Fp(e, t, a);
        case 4:
          return Cl(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = nh(
            t,
            null,
            i,
            a
          ) : Lt(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Br(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Lt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Lt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Lt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || z1 || (z1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Ku(t, i, f), Lt(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), $u(t), o = bt(o), sl(t), i = bv(
            i,
            o,
            void 0
          ), Aa(), t.flags |= 1, Lt(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Dn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Lf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return pm(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Qf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = mn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return qr(e, t, a);
        case 24:
          return $u(t), i = bt(Sl), e === null ? (o = Fh(), o === null && (o = St, f = Rf(), o.pooledCache = f, Wi(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Zl(t), Ku(t, Sl, o)) : ((e.lanes & a) !== 0 && (Fu(e, t), Ic(t, null, null, a), bn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Ku(t, Sl, i)) : (i = f.cache, Ku(t, Sl, i), i !== o.cache && kh(
            t,
            [Sl],
            a,
            !0
          ))), Lt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function $l(e) {
      e.flags |= 4;
    }
    function Zf(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Pn) !== Qs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !us(t)) {
        if (t = In.current, t !== null && ((Je & 4194048) === Je ? zi !== null : (Je & 62914560) !== Je && (Je & 536870912) === 0 || t !== zi))
          throw Qy = dv, _b;
        e.flags |= 8192;
      }
    }
    function Jf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? nf() : 536870912, e.lanes |= t, Ys |= t);
    }
    function ii(e, t) {
      if (!at)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function dt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Vl) !== Rt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Vl) !== Rt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Ip(e, t, a) {
      var i = t.pendingProps;
      switch (mr(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return dt(t), null;
        case 1:
          return dt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), ou(Sl, t), Qt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ki(t) ? (Jh(), $l(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Zh())), dt(t), null;
        case 26:
          return a = t.memoizedState, e === null ? ($l(t), a !== null ? (dt(t), Zf(
            t,
            a
          )) : (dt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? ($l(t), dt(t), Zf(
            t,
            a
          )) : (dt(t), t.flags &= -16777217) : (e.memoizedProps !== i && $l(t), dt(t), t.flags &= -16777217), null;
        case 27:
          ee(t), a = el(Vn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && $l(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return dt(t), null;
            }
            e = U(), ki(t) ? Xh(t) : (e = ty(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, $l(t));
          }
          return dt(t), null;
        case 5:
          if (ee(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && $l(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return dt(t), null;
            }
            if (o = U(), ki(t))
              Xh(t);
            else {
              switch (e = el(Vn.current), ar(a, o.ancestorInfo), o = o.context, e = Qe(e), o) {
                case ph:
                  e = e.createElementNS(Go, a);
                  break;
                case og:
                  e = e.createElementNS(
                    Os,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Go,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Os,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Ou.call(
                        J1,
                        a
                      ) || (J1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Ml] = t, e[la] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (qt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && $l(t);
            }
          }
          return dt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && $l(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = el(Vn.current), a = U(), ki(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !xc, i = null;
              var f = ba;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = vd(
                      e,
                      a,
                      i
                    ), o !== null && (Ka(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = vd(
                      e,
                      a,
                      i
                    ), o !== null && (Ka(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Ml] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Zm(e.nodeValue, a)), e || yn(t);
            } else
              o = a.ancestorInfo.current, o != null && mf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Qe(e).createTextNode(
                i
              ), e[Ml] = t, t.stateNode = e;
          }
          return dt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = ki(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Ml] = t, dt(t), (t.mode & Vl) !== Rt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Jh(), $i(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, dt(t), (t.mode & Vl) !== Rt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Zh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (da(t), t) : (da(t), null);
          }
          return da(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Vl) !== Rt && gn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Jf(t, t.updateQueue), dt(t), (t.mode & Vl) !== Rt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return Qt(t), e === null && Xm(
            t.stateNode.containerInfo
          ), dt(t), null;
        case 10:
          return ou(t.type, t), dt(t), null;
        case 19:
          if (nt(El, t), o = t.memoizedState, o === null) return dt(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) ii(o, !1);
            else {
              if (Xt !== wc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = yu(e), f !== null) {
                    for (t.flags |= 128, ii(o, !1), e = f.updateQueue, t.updateQueue = e, Jf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Vh(a, e), a = a.sibling;
                    return Ue(
                      El,
                      El.current & uh | ky,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Ln() > W0 && (t.flags |= 128, i = !0, ii(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = yu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Jf(t, e), ii(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !at)
                  return dt(t), null;
              } else
                2 * Ln() - o.renderingStartTime > W0 && a !== 536870912 && (t.flags |= 128, i = !0, ii(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Ln(), e.sibling = null, a = El.current, a = i ? a & uh | ky : a & uh, Ue(El, a, t), e) : (dt(t), null);
        case 22:
        case 23:
          return da(t), Fa(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t), a = t.updateQueue, a !== null && Jf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && nt(Hs, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ou(Sl, t), dt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Pp(e, t) {
      switch (mr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Vl) !== Rt && gn(t), t) : null;
        case 3:
          return ou(Sl, t), Qt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return ee(t), null;
        case 13:
          if (da(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            $i();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Vl) !== Rt && gn(t), t) : null;
        case 19:
          return nt(El, t), null;
        case 4:
          return Qt(t), null;
        case 10:
          return ou(t.type, t), null;
        case 22:
        case 23:
          return da(t), Fa(t), e !== null && nt(Hs, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Vl) !== Rt && gn(t), t) : null;
        case 24:
          return ou(Sl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function gm(e, t) {
      switch (mr(t), t.tag) {
        case 3:
          ou(Sl, t), Qt(t);
          break;
        case 26:
        case 27:
        case 5:
          ee(t);
          break;
        case 4:
          Qt(t);
          break;
        case 13:
          da(t);
          break;
        case 19:
          nt(El, t);
          break;
        case 10:
          ou(t.type, t);
          break;
        case 22:
        case 23:
          da(t), Fa(t), e !== null && nt(Hs, t);
          break;
        case 24:
          ou(Sl, t);
      }
    }
    function tn(e) {
      return (e.mode & Vl) !== Rt;
    }
    function vm(e, t) {
      tn(e) ? ($a(), uc(t, e), Oa()) : uc(t, e);
    }
    function Kr(e, t, a) {
      tn(e) ? ($a(), ic(
        a,
        e,
        t
      ), Oa()) : ic(
        a,
        e,
        t
      );
    }
    function uc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & Tl) !== $n ? ie !== null && typeof ie.markComponentPassiveEffectMountStarted == "function" && ie.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Ll) !== $n && ie !== null && typeof ie.markComponentLayoutEffectMountStarted == "function" && ie.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Sa) !== $n && (mh = !0), i = fe(
              t,
              QT,
              a
            ), (e & Sa) !== $n && (mh = !1), (e & Tl) !== $n ? ie !== null && typeof ie.markComponentPassiveEffectMountStopped == "function" && ie.markComponentPassiveEffectMountStopped() : (e & Ll) !== $n && ie !== null && typeof ie.markComponentLayoutEffectMountStopped == "function" && ie.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & Ll) !== 0 ? "useLayoutEffect" : (a.tag & Sa) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, fe(
                t,
                function(m, S) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    m,
                    S
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (m) {
        Ee(t, t.return, m);
      }
    }
    function ic(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, m = d.destroy;
              m !== void 0 && (d.destroy = void 0, (e & Tl) !== $n ? ie !== null && typeof ie.markComponentPassiveEffectUnmountStarted == "function" && ie.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Ll) !== $n && ie !== null && typeof ie.markComponentLayoutEffectUnmountStarted == "function" && ie.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Sa) !== $n && (mh = !0), o = t, fe(
                o,
                ZT,
                o,
                a,
                m
              ), (e & Sa) !== $n && (mh = !1), (e & Tl) !== $n ? ie !== null && typeof ie.markComponentPassiveEffectUnmountStopped == "function" && ie.markComponentPassiveEffectUnmountStopped() : (e & Ll) !== $n && ie !== null && typeof ie.markComponentLayoutEffectUnmountStopped == "function" && ie.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (S) {
        Ee(t, t.return, S);
      }
    }
    function bm(e, t) {
      tn(e) ? ($a(), uc(t, e), Oa()) : uc(t, e);
    }
    function Kf(e, t, a) {
      tn(e) ? ($a(), ic(
        a,
        e,
        t
      ), Oa()) : ic(
        a,
        e,
        t
      );
    }
    function Sm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || ch || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          me(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          me(e) || "instance"
        ));
        try {
          fe(
            e,
            Kp,
            t,
            a
          );
        } catch (i) {
          Ee(e, e.return, i);
        }
      }
    }
    function e0(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Lg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || ch || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        me(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        me(e) || "instance"
      ));
      try {
        var o = ui(
          e.type,
          a,
          e.elementType === e.type
        ), f = fe(
          e,
          e0,
          t,
          o,
          i
        );
        a = M1, f !== void 0 || a.has(e.type) || (a.add(e.type), fe(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            me(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Ee(e, e.return, d);
      }
    }
    function kr(e, t, a) {
      a.props = ui(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, tn(e) ? ($a(), fe(
        e,
        t1,
        e,
        t,
        a
      ), Oa()) : fe(
        e,
        t1,
        e,
        t,
        a
      );
    }
    function t0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (tn(e))
            try {
              $a(), e.refCleanup = t(a);
            } finally {
              Oa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            me(e)
          ), t.current = a;
      }
    }
    function ho(e, t) {
      try {
        fe(e, t0, e);
      } catch (a) {
        Ee(e, t, a);
      }
    }
    function Na(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (tn(e))
              try {
                $a(), fe(e, i);
              } finally {
                Oa(e);
              }
            else fe(e, i);
          } catch (o) {
            Ee(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (tn(e))
              try {
                $a(), fe(e, a, null);
              } finally {
                Oa(e);
              }
            else fe(e, a, null);
          } catch (o) {
            Ee(e, t, o);
          }
        else a.current = null;
    }
    function Tm(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Y0 && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function l0(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Y0 && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function a0(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        fe(
          e,
          Su,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Ee(e, e.return, o);
      }
    }
    function Em(e, t, a) {
      try {
        fe(
          e,
          _t,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ee(e, e.return, i);
      }
    }
    function Am(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && _n(e.type) || e.tag === 4;
    }
    function cc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Am(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && _n(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function kf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = bu));
      else if (i !== 4 && (i === 27 && _n(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (kf(e, t, a), e = e.sibling; e !== null; )
          kf(e, t, a), e = e.sibling;
    }
    function oc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && _n(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (oc(e, t, a), e = e.sibling; e !== null; )
          oc(e, t, a), e = e.sibling;
    }
    function n0(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Am(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = cc(e), oc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Tu(a), t.flags &= -33), t = cc(e), oc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = cc(e), kf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Rm(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        fe(
          e,
          ya,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ee(e, e.return, i);
      }
    }
    function $r(e, t) {
      if (e = e.containerInfo, Jv = dg, e = Yp(e), qh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, m = -1, S = -1, T = 0, q = 0, L = e, w = null;
              t: for (; ; ) {
                for (var X; L !== a || o !== 0 && L.nodeType !== 3 || (m = d + o), L !== f || i !== 0 && L.nodeType !== 3 || (S = d + i), L.nodeType === 3 && (d += L.nodeValue.length), (X = L.firstChild) !== null; )
                  w = L, L = X;
                for (; ; ) {
                  if (L === e) break t;
                  if (w === a && ++T === o && (m = d), w === f && ++q === i && (S = d), (X = L.nextSibling) !== null) break;
                  L = w, w = L.parentNode;
                }
                L = X;
              }
              a = m === -1 || S === -1 ? null : { start: m, end: S };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (Kv = {
        focusedElem: e,
        selectionRange: a
      }, dg = !1, xl = t; xl !== null; )
        if (t = xl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, xl = e;
        else
          for (; xl !== null; ) {
            switch (e = t = xl, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Lg(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Ro(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Ro(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, xl = e;
              break;
            }
            xl = t.return;
          }
    }
    function Om(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Mn(e, a), i & 4 && vm(a, Ll | Wn);
          break;
        case 1:
          if (Mn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || ch || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                me(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                me(a) || "instance"
              )), tn(a) ? ($a(), fe(
                a,
                Sv,
                a,
                e
              ), Oa()) : fe(
                a,
                Sv,
                a,
                e
              );
            else {
              var o = ui(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || ch || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                me(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                me(a) || "instance"
              )), tn(a) ? ($a(), fe(
                a,
                Ib,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Oa()) : fe(
                a,
                Ib,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && Sm(a), i & 512 && ho(a, a.return);
          break;
        case 3:
          if (t = ka(), Mn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              fe(
                a,
                Kp,
                i,
                o
              );
            } catch (d) {
              Ee(a, a.return, d);
            }
          }
          e.effectDuration += Wu(t);
          break;
        case 27:
          t === null && i & 4 && Rm(a);
        case 26:
        case 5:
          Mn(e, a), t === null && i & 4 && a0(a), i & 512 && ho(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = ka(), Mn(e, a), e = a.stateNode, e.effectDuration += Fi(i);
            try {
              fe(
                a,
                Tm,
                a,
                t,
                _0,
                e.effectDuration
              );
            } catch (d) {
              Ee(a, a.return, d);
            }
          } else Mn(e, a);
          break;
        case 13:
          Mn(e, a), i & 4 && mo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = ls.bind(
            null,
            a
          ), Oo(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || Nc, !i) {
            t = t !== null && t.memoizedState !== null || Ft, o = Nc;
            var f = Ft;
            Nc = i, (Ft = t) && !f ? Un(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Mn(e, a), Nc = o, Ft = f;
          }
          break;
        case 30:
          break;
        default:
          Mn(e, a);
      }
    }
    function Dm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Dm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Lc(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function pu(e, t, a) {
      for (a = a.child; a !== null; )
        fc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function fc(e, t, a) {
      if (vl && typeof vl.onCommitFiberUnmount == "function")
        try {
          vl.onCommitFiberUnmount(bi, a);
        } catch (f) {
          ta || (ta = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          Ft || Na(a, t), pu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          Ft || Na(a, t);
          var i = fl, o = La;
          _n(a.type) && (fl = a.stateNode, La = !1), pu(
            e,
            t,
            a
          ), fe(
            a,
            zo,
            a.stateNode
          ), fl = i, La = o;
          break;
        case 5:
          Ft || Na(a, t);
        case 6:
          if (i = fl, o = La, fl = null, pu(
            e,
            t,
            a
          ), fl = i, La = o, fl !== null)
            if (La)
              try {
                fe(
                  a,
                  Eo,
                  fl,
                  a.stateNode
                );
              } catch (f) {
                Ee(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                fe(
                  a,
                  qa,
                  fl,
                  a.stateNode
                );
              } catch (f) {
                Ee(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          fl !== null && (La ? (e = fl, Ao(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Ec(e)) : Ao(fl, a.stateNode));
          break;
        case 4:
          i = fl, o = La, fl = a.stateNode.containerInfo, La = !0, pu(
            e,
            t,
            a
          ), fl = i, La = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ft || ic(
            Sa,
            a,
            t
          ), Ft || Kr(
            a,
            t,
            Ll
          ), pu(
            e,
            t,
            a
          );
          break;
        case 1:
          Ft || (Na(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && kr(
            a,
            t,
            i
          )), pu(
            e,
            t,
            a
          );
          break;
        case 21:
          pu(
            e,
            t,
            a
          );
          break;
        case 22:
          Ft = (i = Ft) || a.memoizedState !== null, pu(
            e,
            t,
            a
          ), Ft = i;
          break;
        default:
          pu(
            e,
            t,
            a
          );
      }
    }
    function mo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          fe(
            t,
            ma,
            e
          );
        } catch (a) {
          Ee(t, t.return, a);
        }
    }
    function Wr(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new U1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new U1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function sc(e, t) {
      var a = Wr(e);
      t.forEach(function(i) {
        var o = si.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), jt)
            if (oh !== null && fh !== null)
              So(fh, oh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Ol(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], m = f;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 27:
                if (_n(m.type)) {
                  fl = m.stateNode, La = !1;
                  break e;
                }
                break;
              case 5:
                fl = m.stateNode, La = !1;
                break e;
              case 3:
              case 4:
                fl = m.stateNode.containerInfo, La = !0;
                break e;
            }
            m = m.return;
          }
          if (fl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          fc(o, f, d), fl = null, La = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          zm(t, e), t = t.sibling;
    }
    function zm(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ol(t, e), Wl(e), i & 4 && (ic(
            Sa | Wn,
            e,
            e.return
          ), uc(Sa | Wn, e), Kr(
            e,
            e.return,
            Ll | Wn
          ));
          break;
        case 1:
          Ol(t, e), Wl(e), i & 512 && (Ft || a === null || Na(a, a.return)), i & 64 && Nc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Nu;
          if (Ol(t, e), Wl(e), i & 512 && (Ft || a === null || Na(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Yo] || o[Ml] || o.namespaceURI === Go || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), qt(o, i, a), o[Ml] = e, tl(o), i = o;
                        break e;
                      case "link":
                        var f = uy(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), qt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = uy(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], ue(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), qt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Ml] = e, tl(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  iy(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = bd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? iy(
                o,
                e.type,
                e.stateNode
              ) : bd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Em(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          Ol(t, e), Wl(e), i & 512 && (Ft || a === null || Na(a, a.return)), a !== null && i & 4 && Em(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (Ol(t, e), Wl(e), i & 512 && (Ft || a === null || Na(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              fe(e, Tu, t);
            } catch (q) {
              Ee(e, e.return, q);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Em(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (zv = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Ol(t, e), Wl(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              fe(
                e,
                vc,
                t,
                a,
                i
              );
            } catch (q) {
              Ee(e, e.return, q);
            }
          }
          break;
        case 3:
          if (o = ka(), fg = null, f = Nu, Nu = ns(t.containerInfo), Ol(t, e), Nu = f, Wl(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              fe(
                e,
                ey,
                t.containerInfo
              );
            } catch (q) {
              Ee(e, e.return, q);
            }
          zv && (zv = !1, rc(e)), t.effectDuration += Wu(o);
          break;
        case 4:
          i = Nu, Nu = ns(
            e.stateNode.containerInfo
          ), Ol(t, e), Wl(e), Nu = i;
          break;
        case 12:
          i = ka(), Ol(t, e), Wl(e), e.stateNode.effectDuration += Fi(i);
          break;
        case 13:
          Ol(t, e), Wl(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Nv = Ln()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, sc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var m = a !== null && a.memoizedState !== null, S = Nc, T = Ft;
          if (Nc = S || o, Ft = T || m, Ol(t, e), Ft = T, Nc = S, Wl(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | iv, o && (a === null || m || Nc || Ft || Dl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  m = a = t;
                  try {
                    f = m.stateNode, o ? fe(m, Pl, f) : fe(
                      m,
                      Im,
                      m.stateNode,
                      m.memoizedProps
                    );
                  } catch (q) {
                    Ee(m, m.return, q);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  m = t;
                  try {
                    d = m.stateNode, o ? fe(m, Fm, d) : fe(
                      m,
                      pd,
                      d,
                      m.memoizedProps
                    );
                  } catch (q) {
                    Ee(m, m.return, q);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, sc(e, a))));
          break;
        case 19:
          Ol(t, e), Wl(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, sc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Ol(t, e), Wl(e);
      }
    }
    function Wl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          fe(e, n0, e);
        } catch (a) {
          Ee(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function rc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          rc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Mn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Om(e, t.alternate, t), t = t.sibling;
    }
    function ha(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Kr(
            e,
            e.return,
            Ll
          ), Dl(e);
          break;
        case 1:
          Na(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && kr(
            e,
            e.return,
            t
          ), Dl(e);
          break;
        case 27:
          fe(
            e,
            zo,
            e.stateNode
          );
        case 26:
        case 5:
          Na(e, e.return), Dl(e);
          break;
        case 22:
          e.memoizedState === null && Dl(e);
          break;
        case 30:
          Dl(e);
          break;
        default:
          Dl(e);
      }
    }
    function Dl(e) {
      for (e = e.child; e !== null; )
        ha(e), e = e.sibling;
    }
    function gu(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Un(
            e,
            a,
            i
          ), vm(a, Ll);
          break;
        case 1:
          if (Un(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && fe(
            a,
            Sv,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              fe(
                a,
                Pc,
                t,
                e
              );
            } catch (f) {
              Ee(a, a.return, f);
            }
          }
          i && o & 64 && Sm(a), ho(a, a.return);
          break;
        case 27:
          Rm(a);
        case 26:
        case 5:
          Un(
            e,
            a,
            i
          ), i && t === null && o & 4 && a0(a), ho(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = ka(), Un(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Fi(o);
            try {
              fe(
                a,
                Tm,
                a,
                t,
                _0,
                i.effectDuration
              );
            } catch (f) {
              Ee(a, a.return, f);
            }
          } else
            Un(
              e,
              a,
              i
            );
          break;
        case 13:
          Un(
            e,
            a,
            i
          ), i && o & 4 && mo(e, a);
          break;
        case 22:
          a.memoizedState === null && Un(
            e,
            a,
            i
          ), ho(a, a.return);
          break;
        case 30:
          break;
        default:
          Un(
            e,
            a,
            i
          );
      }
    }
    function Un(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        gu(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function xn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Wi(e), a != null && pn(a));
    }
    function ln(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Wi(t), e != null && pn(e));
    }
    function ht(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          $f(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function $f(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ht(
            e,
            t,
            a,
            i
          ), o & 2048 && bm(t, Tl | Wn);
          break;
        case 1:
          ht(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = ka();
          ht(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (Wi(t), a != null && pn(a))), e.passiveEffectDuration += Wu(f);
          break;
        case 12:
          if (o & 2048) {
            o = ka(), ht(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += Fi(o);
            try {
              fe(
                t,
                l0,
                t,
                t.alternate,
                _0,
                e.passiveEffectDuration
              );
            } catch (m) {
              Ee(t, t.return, m);
            }
          } else
            ht(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          ht(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & zs ? ht(
            e,
            t,
            a,
            i
          ) : yo(
            e,
            t
          ) : f._visibility & zs ? ht(
            e,
            t,
            a,
            i
          ) : (f._visibility |= zs, ci(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && xn(d, t);
          break;
        case 24:
          ht(
            e,
            t,
            a,
            i
          ), o & 2048 && ln(t.alternate, t);
          break;
        default:
          ht(
            e,
            t,
            a,
            i
          );
      }
    }
    function ci(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        Fr(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function Fr(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ci(
            e,
            t,
            a,
            i,
            o
          ), bm(t, Tl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & zs ? ci(
            e,
            t,
            a,
            i,
            o
          ) : yo(
            e,
            t
          ) : (d._visibility |= zs, ci(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && xn(
            t.alternate,
            t
          );
          break;
        case 24:
          ci(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && ln(t.alternate, t);
          break;
        default:
          ci(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function yo(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              yo(
                a,
                i
              ), o & 2048 && xn(
                i.alternate,
                i
              );
              break;
            case 24:
              yo(
                a,
                i
              ), o & 2048 && ln(
                i.alternate,
                i
              );
              break;
            default:
              yo(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function dc(e) {
      if (e.subtreeFlags & $y)
        for (e = e.child; e !== null; )
          oi(e), e = e.sibling;
    }
    function oi(e) {
      switch (e.tag) {
        case 26:
          dc(e), e.flags & $y && e.memoizedState !== null && y0(
            Nu,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          dc(e);
          break;
        case 3:
        case 4:
          var t = Nu;
          Nu = ns(
            e.stateNode.containerInfo
          ), dc(e), Nu = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = $y, $y = 16777216, dc(e), $y = t) : dc(e));
          break;
        default:
          dc(e);
      }
    }
    function Wf(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function po(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            xl = i, Um(
              i,
              e
            );
          }
        Wf(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Mm(e), e = e.sibling;
    }
    function Mm(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          po(e), e.flags & 2048 && Kf(
            e,
            e.return,
            Tl | Wn
          );
          break;
        case 3:
          var t = ka();
          po(e), e.stateNode.passiveEffectDuration += Wu(t);
          break;
        case 12:
          t = ka(), po(e), e.stateNode.passiveEffectDuration += Fi(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & zs && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ff(e)) : po(e);
          break;
        default:
          po(e);
      }
    }
    function Ff(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            xl = i, Um(
              i,
              e
            );
          }
        Wf(e);
      }
      for (e = e.child; e !== null; )
        If(e), e = e.sibling;
    }
    function If(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Kf(
            e,
            e.return,
            Tl
          ), Ff(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & zs && (t._visibility &= -3, Ff(e));
          break;
        default:
          Ff(e);
      }
    }
    function Um(e, t) {
      for (; xl !== null; ) {
        var a = xl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Kf(
              i,
              t,
              Tl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && Wi(i));
            break;
          case 24:
            pn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, xl = i;
        else
          e: for (a = e; xl !== null; ) {
            i = xl;
            var o = i.sibling, f = i.return;
            if (Dm(i), i === a) {
              xl = null;
              break e;
            }
            if (o !== null) {
              o.return = f, xl = o;
              break e;
            }
            xl = f;
          }
      }
    }
    function xm() {
      KT.forEach(function(e) {
        return e();
      });
    }
    function Cm() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || Y.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Fl(e) {
      if ((rt & Ta) !== cn && Je !== 0)
        return Je & -Je;
      var t = Y.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Cs, e !== 0 ? e : Vm()) : Ap();
    }
    function u0() {
      fn === 0 && (fn = (Je & 536870912) === 0 || at ? Th() : 536870912);
      var e = In.current;
      return e !== null && (e.flags |= 32), fn;
    }
    function wt(e, t, a) {
      if (mh && console.error("useInsertionEffect must not schedule updates."), Yv && (F0 = !0), (e === St && (mt === qs || mt === _s) || e.cancelPendingCommit !== null) && (mc(e, 0), vu(
        e,
        Je,
        fn,
        !1
      )), jc(e, a), (rt & Ta) !== 0 && e === St) {
        if (aa)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Ze && me(Ze) || "Unknown", j1.has(e) || (j1.add(e), t = me(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              Y1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Y1 = !0);
          }
      } else
        jt && tu(e, t, a), f0(t), e === St && ((rt & Ta) === cn && ($o |= a), Xt === Bs && vu(
          e,
          Je,
          fn,
          !1
        )), wa(e);
    }
    function $t(e, t, a) {
      if ((rt & (Ta | wu)) !== cn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || af(e, t), o = i ? Nm(e, t) : td(e, t, !0), f = i;
      do {
        if (o === wc) {
          dh && !i && vu(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !i0(a)) {
            o = td(e, t, !1), f = !1;
            continue;
          }
          if (o === sh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var m = d;
                d = tp;
                var S = o.current.memoizedState.isDehydrated;
                if (S && (mc(
                  o,
                  m
                ).flags |= 256), m = td(
                  o,
                  m,
                  !1
                ), m !== sh) {
                  if (Cv && !S) {
                    o.errorRecoveryDisabledLanes |= f, $o |= f, o = Bs;
                    break e;
                  }
                  o = Ea, Ea = d, o !== null && (Ea === null ? Ea = o : Ea.push.apply(
                    Ea,
                    o
                  ));
                }
                o = m;
              }
              if (f = !1, o !== sh) continue;
            }
          }
          if (o === Fy) {
            mc(e, 0), vu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case wc:
              case Fy:
                throw Error("Root did not complete. This is a bug in React.");
              case Bs:
                if ((t & 4194048) !== t) break;
              case k0:
                vu(
                  i,
                  t,
                  fn,
                  !Ko
                );
                break e;
              case sh:
                Ea = null;
                break;
              case Mv:
              case x1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (Y.actQueue !== null)
              id(
                i,
                a,
                t,
                Ea,
                lp,
                $0,
                fn,
                $o,
                Ys
              );
            else {
              if ((t & 62914560) === t && (f = Nv + H1 - Ln(), 10 < f)) {
                if (vu(
                  i,
                  t,
                  fn,
                  !Ko
                ), ia(i, 0, !0) !== 0) break e;
                i.timeoutHandle = K1(
                  ul.bind(
                    null,
                    i,
                    a,
                    Ea,
                    lp,
                    $0,
                    t,
                    fn,
                    $o,
                    Ys,
                    Ko,
                    o,
                    FT,
                    wb,
                    0
                  ),
                  f
                );
                break e;
              }
              ul(
                i,
                a,
                Ea,
                lp,
                $0,
                t,
                fn,
                $o,
                Ys,
                Ko,
                o,
                $T,
                wb,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      wa(e);
    }
    function ul(e, t, a, i, o, f, d, m, S, T, q, L, w, X) {
      if (e.timeoutHandle = Xs, L = t.subtreeFlags, (L & 8192 || (L & 16785408) === 16785408) && (op = { stylesheets: null, count: 0, unsuspend: m0 }, oi(t), L = p0(), L !== null)) {
        e.cancelPendingCommit = L(
          id.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            m,
            S,
            q,
            WT,
            w,
            X
          )
        ), vu(
          e,
          f,
          d,
          !T
        );
        return;
      }
      id(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        m,
        S
      );
    }
    function i0(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!va(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function vu(e, t, a, i) {
      t &= ~Hv, t &= ~$o, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - zl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Ep(e, a, t);
    }
    function hc() {
      return (rt & (Ta | wu)) === cn ? (yc(0), !1) : !0;
    }
    function Ir() {
      if (Ze !== null) {
        if (mt === Ga)
          var e = Ze.return;
        else
          e = Ze, yr(), Ia(e), ah = null, Ky = 0, e = Ze;
        for (; e !== null; )
          gm(e.alternate, e), e = e.return;
        Ze = null;
      }
    }
    function mc(e, t) {
      var a = e.timeoutHandle;
      a !== Xs && (e.timeoutHandle = Xs, s2(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ir(), St = e, Ze = a = mn(e.current, null), Je = t, mt = Ga, on = null, Ko = !1, dh = af(e, t), Cv = !1, Xt = wc, Ys = fn = Hv = $o = ko = 0, Ea = tp = null, $0 = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - zl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Mi = t, bf(), t = Hb(), 1e3 < t - Cb && (Y.recentlyCreatedOwnerStacks = 0, Cb = t), Cu.discardPendingWarnings(), a;
    }
    function Pf(e, t) {
      ze = null, Y.H = J0, Y.getCurrentStack = null, aa = !1, ga = null, t === Xy || t === L0 ? (t = em(), mt = Py) : t === _b ? (t = em(), mt = C1) : mt = t === T1 ? xv : t !== null && typeof t == "object" && typeof t.then == "function" ? rh : Iy, on = t;
      var a = Ze;
      if (a === null)
        Xt = Fy, ro(
          e,
          fa(t, e.current)
        );
      else
        switch (a.mode & Vl && fu(a), Aa(), mt) {
          case Iy:
            ie !== null && typeof ie.markComponentErrored == "function" && ie.markComponentErrored(
              a,
              t,
              Je
            );
            break;
          case qs:
          case _s:
          case Py:
          case rh:
          case ep:
            ie !== null && typeof ie.markComponentSuspended == "function" && ie.markComponentSuspended(
              a,
              t,
              Je
            );
        }
    }
    function Pr() {
      var e = Y.H;
      return Y.H = J0, e === null ? J0 : e;
    }
    function Hm() {
      var e = Y.A;
      return Y.A = JT, e;
    }
    function ed() {
      Xt = Bs, Ko || (Je & 4194048) !== Je && In.current !== null || (dh = !0), (ko & 134217727) === 0 && ($o & 134217727) === 0 || St === null || vu(
        St,
        Je,
        fn,
        !1
      );
    }
    function td(e, t, a) {
      var i = rt;
      rt |= Ta;
      var o = Pr(), f = Hm();
      if (St !== e || Je !== t) {
        if (jt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (So(e, Je), d.clear()), Xl(e, t);
        }
        lp = null, mc(e, t);
      }
      xi(t), t = !1, d = Xt;
      e: do
        try {
          if (mt !== Ga && Ze !== null) {
            var m = Ze, S = on;
            switch (mt) {
              case xv:
                Ir(), d = k0;
                break e;
              case Py:
              case qs:
              case _s:
              case rh:
                In.current === null && (t = !0);
                var T = mt;
                if (mt = Ga, on = null, fi(e, m, S, T), a && dh) {
                  d = wc;
                  break e;
                }
                break;
              default:
                T = mt, mt = Ga, on = null, fi(e, m, S, T);
            }
          }
          ld(), d = Xt;
          break;
        } catch (q) {
          Pf(e, q);
        }
      while (!0);
      return t && e.shellSuspendCounter++, yr(), rt = i, Y.H = o, Y.A = f, $s(), Ze === null && (St = null, Je = 0, bf()), d;
    }
    function ld() {
      for (; Ze !== null; ) Bm(Ze);
    }
    function Nm(e, t) {
      var a = rt;
      rt |= Ta;
      var i = Pr(), o = Hm();
      if (St !== e || Je !== t) {
        if (jt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (So(e, Je), f.clear()), Xl(e, t);
        }
        lp = null, W0 = Ln() + N1, mc(e, t);
      } else
        dh = af(
          e,
          t
        );
      xi(t);
      e: do
        try {
          if (mt !== Ga && Ze !== null)
            t: switch (t = Ze, f = on, mt) {
              case Iy:
                mt = Ga, on = null, fi(
                  e,
                  t,
                  f,
                  Iy
                );
                break;
              case qs:
              case _s:
                if (Ph(f)) {
                  mt = Ga, on = null, ad(t);
                  break;
                }
                t = function() {
                  mt !== qs && mt !== _s || St !== e || (mt = ep), wa(e);
                }, f.then(t, t);
                break e;
              case Py:
                mt = ep;
                break e;
              case C1:
                mt = Uv;
                break e;
              case ep:
                Ph(f) ? (mt = Ga, on = null, ad(t)) : (mt = Ga, on = null, fi(
                  e,
                  t,
                  f,
                  ep
                ));
                break;
              case Uv:
                var d = null;
                switch (Ze.tag) {
                  case 26:
                    d = Ze.memoizedState;
                  case 5:
                  case 27:
                    var m = Ze;
                    if (!d || us(d)) {
                      mt = Ga, on = null;
                      var S = m.sibling;
                      if (S !== null) Ze = S;
                      else {
                        var T = m.return;
                        T !== null ? (Ze = T, es(T)) : Ze = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                mt = Ga, on = null, fi(
                  e,
                  t,
                  f,
                  Uv
                );
                break;
              case rh:
                mt = Ga, on = null, fi(
                  e,
                  t,
                  f,
                  rh
                );
                break;
              case xv:
                Ir(), Xt = k0;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          Y.actQueue !== null ? ld() : wm();
          break;
        } catch (q) {
          Pf(e, q);
        }
      while (!0);
      return yr(), Y.H = i, Y.A = o, rt = a, Ze !== null ? (ie !== null && typeof ie.markRenderYielded == "function" && ie.markRenderYielded(), wc) : ($s(), St = null, Je = 0, bf(), Xt);
    }
    function wm() {
      for (; Ze !== null && !A0(); )
        Bm(Ze);
    }
    function Bm(e) {
      var t = e.alternate;
      (e.mode & Vl) !== Rt ? (pr(e), t = fe(
        e,
        Jr,
        t,
        e,
        Mi
      ), fu(e)) : t = fe(
        e,
        Jr,
        t,
        e,
        Mi
      ), e.memoizedProps = e.pendingProps, t === null ? es(e) : Ze = t;
    }
    function ad(e) {
      var t = fe(e, nd, e);
      e.memoizedProps = e.pendingProps, t === null ? es(e) : Ze = t;
    }
    function nd(e) {
      var t = e.alternate, a = (e.mode & Vl) !== Rt;
      switch (a && pr(e), e.tag) {
        case 15:
        case 0:
          t = dm(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Je
          );
          break;
        case 11:
          t = dm(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Je
          );
          break;
        case 5:
          Ia(e);
        default:
          gm(t, e), e = Ze = Vh(e, Mi), t = Jr(t, e, Mi);
      }
      return a && fu(e), t;
    }
    function fi(e, t, a, i) {
      yr(), Ia(t), ah = null, Ky = 0;
      var o = t.return;
      try {
        if (Vf(
          e,
          o,
          t,
          a,
          Je
        )) {
          Xt = Fy, ro(
            e,
            fa(a, e.current)
          ), Ze = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Ze = o, f;
        Xt = Fy, ro(
          e,
          fa(a, e.current)
        ), Ze = null;
        return;
      }
      t.flags & 32768 ? (at || i === Iy ? e = !0 : dh || (Je & 536870912) !== 0 ? e = !1 : (Ko = e = !0, (i === qs || i === _s || i === Py || i === rh) && (i = In.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ud(t, e)) : es(t);
    }
    function es(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          ud(
            t,
            Ko
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, pr(t), a = fe(
          t,
          Ip,
          a,
          t,
          Mi
        ), (t.mode & Vl) !== Rt && Ii(t), a !== null) {
          Ze = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Ze = t;
          return;
        }
        Ze = t = e;
      } while (t !== null);
      Xt === wc && (Xt = x1);
    }
    function ud(e, t) {
      do {
        var a = Pp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Ze = a;
          return;
        }
        if ((e.mode & Vl) !== Rt) {
          Ii(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Ze = e;
          return;
        }
        Ze = e = a;
      } while (e !== null);
      Xt = k0, Ze = null;
    }
    function id(e, t, a, i, o, f, d, m, S) {
      e.cancelPendingCommit = null;
      do
        go();
      while (Gl !== js);
      if (Cu.flushLegacyContextWarning(), Cu.flushPendingUnsafeLifecycleWarnings(), (rt & (Ta | wu)) !== cn)
        throw Error("Should not already be working.");
      if (ie !== null && typeof ie.markCommitStarted == "function" && ie.markCommitStarted(a), t === null) Ct();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= cv, Cg(
          e,
          a,
          f,
          d,
          m,
          S
        ), e === St && (Ze = St = null, Je = 0), hh = t, Fo = e, Io = a, Bv = f, qv = o, _1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, jm(Bo, function() {
          return ts(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), _0 = Id(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = Y.T, Y.T = null, o = Re.p, Re.p = bl, d = rt, rt |= wu;
          try {
            $r(e, t, a);
          } finally {
            rt = d, Re.p = o, Y.T = i;
          }
        }
        Gl = w1, Cn(), cd(), c0();
      }
    }
    function Cn() {
      if (Gl === w1) {
        Gl = js;
        var e = Fo, t = hh, a = Io, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = Y.T, Y.T = null;
          var o = Re.p;
          Re.p = bl;
          var f = rt;
          rt |= wu;
          try {
            oh = a, fh = e, zm(t, e), fh = oh = null, a = Kv;
            var d = Yp(e.containerInfo), m = a.focusedElem, S = a.selectionRange;
            if (d !== m && m && m.ownerDocument && _p(
              m.ownerDocument.documentElement,
              m
            )) {
              if (S !== null && qh(m)) {
                var T = S.start, q = S.end;
                if (q === void 0 && (q = T), "selectionStart" in m)
                  m.selectionStart = T, m.selectionEnd = Math.min(
                    q,
                    m.value.length
                  );
                else {
                  var L = m.ownerDocument || document, w = L && L.defaultView || window;
                  if (w.getSelection) {
                    var X = w.getSelection(), se = m.textContent.length, Oe = Math.min(
                      S.start,
                      se
                    ), Tt = S.end === void 0 ? Oe : Math.min(S.end, se);
                    !X.extend && Oe > Tt && (d = Tt, Tt = Oe, Oe = d);
                    var $e = Bh(
                      m,
                      Oe
                    ), R = Bh(
                      m,
                      Tt
                    );
                    if ($e && R && (X.rangeCount !== 1 || X.anchorNode !== $e.node || X.anchorOffset !== $e.offset || X.focusNode !== R.node || X.focusOffset !== R.offset)) {
                      var O = L.createRange();
                      O.setStart($e.node, $e.offset), X.removeAllRanges(), Oe > Tt ? (X.addRange(O), X.extend(R.node, R.offset)) : (O.setEnd(R.node, R.offset), X.addRange(O));
                    }
                  }
                }
              }
              for (L = [], X = m; X = X.parentNode; )
                X.nodeType === 1 && L.push({
                  element: X,
                  left: X.scrollLeft,
                  top: X.scrollTop
                });
              for (typeof m.focus == "function" && m.focus(), m = 0; m < L.length; m++) {
                var z = L[m];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            dg = !!Jv, Kv = Jv = null;
          } finally {
            rt = f, Re.p = o, Y.T = i;
          }
        }
        e.current = t, Gl = B1;
      }
    }
    function cd() {
      if (Gl === B1) {
        Gl = js;
        var e = Fo, t = hh, a = Io, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = Y.T, Y.T = null;
          var o = Re.p;
          Re.p = bl;
          var f = rt;
          rt |= wu;
          try {
            ie !== null && typeof ie.markLayoutEffectsStarted == "function" && ie.markLayoutEffectsStarted(a), oh = a, fh = e, Om(
              e,
              t.alternate,
              t
            ), fh = oh = null, ie !== null && typeof ie.markLayoutEffectsStopped == "function" && ie.markLayoutEffectsStopped();
          } finally {
            rt = f, Re.p = o, Y.T = i;
          }
        }
        Gl = q1;
      }
    }
    function c0() {
      if (Gl === IT || Gl === q1) {
        Gl = js, $g();
        var e = Fo, t = hh, a = Io, i = _1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? Gl = wv : (Gl = js, hh = Fo = null, Hn(e, e.pendingLanes), Vs = 0, np = null);
        var f = e.pendingLanes;
        if (f === 0 && (Wo = null), o || bo(e), o = Ah(a), t = t.stateNode, vl && typeof vl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case bl:
                var m = xd;
                break;
              case un:
                m = gs;
                break;
              case zu:
                m = Bo;
                break;
              case wd:
                m = vs;
                break;
              default:
                m = Bo;
            }
            vl.onCommitFiberRoot(
              bi,
              t,
              m,
              d
            );
          } catch (L) {
            ta || (ta = !0, console.error(
              "React instrumentation encountered an error: %s",
              L
            ));
          }
        if (jt && e.memoizedUpdaters.clear(), xm(), i !== null) {
          d = Y.T, m = Re.p, Re.p = bl, Y.T = null;
          try {
            var S = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var T = i[t], q = o0(T.stack);
              fe(
                T.source,
                S,
                T.value,
                q
              );
            }
          } finally {
            Y.T = d, Re.p = m;
          }
        }
        (Io & 3) !== 0 && go(), wa(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (j0 = !0, e === _v ? ap++ : (ap = 0, _v = e)) : ap = 0, yc(0), Ct();
      }
    }
    function o0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Hn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pn(t)));
    }
    function go(e) {
      return Cn(), cd(), c0(), ts();
    }
    function ts() {
      if (Gl !== wv) return !1;
      var e = Fo, t = Bv;
      Bv = 0;
      var a = Ah(Io), i = zu > a ? zu : a;
      a = Y.T;
      var o = Re.p;
      try {
        Re.p = i, Y.T = null, i = qv, qv = null;
        var f = Fo, d = Io;
        if (Gl = js, hh = Fo = null, Io = 0, (rt & (Ta | wu)) !== cn)
          throw Error("Cannot flush passive effects while already rendering.");
        Yv = !0, F0 = !1, ie !== null && typeof ie.markPassiveEffectsStarted == "function" && ie.markPassiveEffectsStarted(d);
        var m = rt;
        if (rt |= wu, Mm(f.current), $f(
          f,
          f.current,
          d,
          i
        ), ie !== null && typeof ie.markPassiveEffectsStopped == "function" && ie.markPassiveEffectsStopped(), bo(f), rt = m, yc(0, !1), F0 ? f === np ? Vs++ : (Vs = 0, np = f) : Vs = 0, F0 = Yv = !1, vl && typeof vl.onPostCommitFiberRoot == "function")
          try {
            vl.onPostCommitFiberRoot(bi, f);
          } catch (T) {
            ta || (ta = !0, console.error(
              "React instrumentation encountered an error: %s",
              T
            ));
          }
        var S = f.current.stateNode;
        return S.effectDuration = 0, S.passiveEffectDuration = 0, !0;
      } finally {
        Re.p = o, Y.T = a, Hn(e, t);
      }
    }
    function vo(e, t, a) {
      t = fa(a, t), t = Rl(e.stateNode, t, 2), e = Wa(e, t, 2), e !== null && (jc(e, 2), wa(e));
    }
    function Ee(e, t, a) {
      if (mh = !1, e.tag === 3)
        vo(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            vo(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Wo === null || !Wo.has(i))) {
              e = fa(a, e), a = Nt(2), i = Wa(t, a, 2), i !== null && (jf(
                a,
                i,
                t,
                e
              ), jc(i, 2), wa(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function qm(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new kT();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (Cv = !0, o.add(a), i = Gg.bind(null, e, t, a), jt && So(e, a), t.then(i, i));
    }
    function Gg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Cm() && Y.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), St === e && (Je & a) === a && (Xt === Bs || Xt === Mv && (Je & 62914560) === Je && Ln() - Nv < H1 ? (rt & Ta) === cn && mc(e, 0) : Hv |= a, Ys === Je && (Ys = 0)), wa(e);
    }
    function _m(e, t) {
      t === 0 && (t = nf()), e = Ql(e, t), e !== null && (jc(e, t), wa(e));
    }
    function ls(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), _m(e, a);
    }
    function si(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), _m(e, a);
    }
    function od(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === xo;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && fe(
            o,
            Ym,
            i,
            o,
            (o.mode & Mb) === Rt
          ) : od(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? fe(
            o,
            Ym,
            i,
            o
          ) : o.subtreeFlags & 67108864 && fe(
            o,
            od,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function Ym(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      Ke(!0);
      try {
        ha(t), a && If(t), gu(e, t.alternate, t, !1), a && Fr(e, t, 0, null, !1, 0);
      } finally {
        Ke(!1);
      }
    }
    function bo(e) {
      var t = !0;
      e.current.mode & (na | xu) || (t = !1), od(
        e,
        e.current,
        t
      );
    }
    function an(e) {
      if ((rt & Ta) === cn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = me(e) || "ReactComponent", I0 !== null) {
            if (I0.has(t)) return;
            I0.add(t);
          } else I0 = /* @__PURE__ */ new Set([t]);
          fe(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function So(e, t) {
      jt && e.memoizedUpdaters.forEach(function(a) {
        tu(e, a, t);
      });
    }
    function jm(e, t) {
      var a = Y.actQueue;
      return a !== null ? (a.push(t), t2) : Ud(e, t);
    }
    function f0(e) {
      Cm() && Y.actQueue === null && fe(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          me(e)
        );
      });
    }
    function wa(e) {
      e !== yh && e.next === null && (yh === null ? P0 = yh = e : yh = yh.next = e), eg = !0, Y.actQueue !== null ? Vv || (Vv = !0, Wt()) : jv || (jv = !0, Wt());
    }
    function yc(e, t) {
      if (!Lv && eg) {
        Lv = !0;
        do
          for (var a = !1, i = P0; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, m = i.pingedLanes;
                f = (1 << 31 - zl(42 | e) + 1) - 1, f &= o & ~(d & ~m), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, rd(i, f));
            } else
              f = Je, f = ia(
                i,
                i === St ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Xs
              ), (f & 3) === 0 || af(i, f) || (a = !0, rd(i, f));
            i = i.next;
          }
        while (a);
        Lv = !1;
      }
    }
    function fd() {
      sd();
    }
    function sd() {
      eg = Vv = jv = !1;
      var e = 0;
      Ls !== 0 && (To() && (e = Ls), Ls = 0);
      for (var t = Ln(), a = null, i = P0; i !== null; ) {
        var o = i.next, f = Nn(i, t);
        f === 0 ? (i.next = null, a === null ? P0 = o : a.next = o, o === null && (yh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (eg = !0)), i = o;
      }
      yc(e);
    }
    function Nn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - zl(f), m = 1 << d, S = o[d];
        S === -1 ? ((m & a) === 0 || (m & i) !== 0) && (o[d] = Tp(m, t)) : S <= t && (e.expiredLanes |= m), f &= ~m;
      }
      if (t = St, a = Je, a = ia(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Xs
      ), i = e.callbackNode, a === 0 || e === t && (mt === qs || mt === _s) || e.cancelPendingCommit !== null)
        return i !== null && dd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || af(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || Y.actQueue !== null && i !== Gv)
          dd(i);
        else return t;
        switch (Ah(a)) {
          case bl:
          case un:
            a = gs;
            break;
          case zu:
            a = Bo;
            break;
          case wd:
            a = vs;
            break;
          default:
            a = Bo;
        }
        return i = Bt.bind(null, e), Y.actQueue !== null ? (Y.actQueue.push(i), a = Gv) : a = Ud(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && dd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Bt(e, t) {
      if (j0 = Y0 = !1, Gl !== js && Gl !== wv)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (go() && e.callbackNode !== a)
        return null;
      var i = Je;
      return i = ia(
        e,
        e === St ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Xs
      ), i === 0 ? null : ($t(
        e,
        i,
        t
      ), Nn(e, Ln()), e.callbackNode != null && e.callbackNode === a ? Bt.bind(null, e) : null);
    }
    function rd(e, t) {
      if (go()) return null;
      Y0 = j0, j0 = !1, $t(e, t, !0);
    }
    function dd(e) {
      e !== Gv && e !== null && kg(e);
    }
    function Wt() {
      Y.actQueue !== null && Y.actQueue.push(function() {
        return sd(), null;
      }), r2(function() {
        (rt & (Ta | wu)) !== cn ? Ud(
          xd,
          fd
        ) : sd();
      });
    }
    function Vm() {
      return Ls === 0 && (Ls = Th()), Ls;
    }
    function Lm(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (ue(e, "action"), Kc("" + e));
    }
    function Gm(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Et(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Lm(
          (o[la] || null).action
        ), d = i.submitter;
        d && (t = (t = d[la] || null) ? Lm(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var m = new ve(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: m,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Ls !== 0) {
                    var S = d ? Gm(
                      o,
                      d
                    ) : new FormData(o), T = {
                      pending: !0,
                      data: S,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(T), lc(
                      a,
                      T,
                      null,
                      S
                    );
                  }
                } else
                  typeof f == "function" && (m.preventDefault(), S = d ? Gm(
                    o,
                    d
                  ) : new FormData(o), T = {
                    pending: !0,
                    data: S,
                    method: o.method,
                    action: f
                  }, Object.freeze(T), lc(
                    a,
                    T,
                    f,
                    S
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function ml(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        Av(i);
      }
      e.currentTarget = null;
    }
    function wn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var m = i[d], S = m.instance, T = m.currentTarget;
              if (m = m.listener, S !== o && f.isPropagationStopped())
                break e;
              S !== null ? fe(
                S,
                ml,
                f,
                m,
                T
              ) : ml(f, m, T), o = S;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (m = i[d], S = m.instance, T = m.currentTarget, m = m.listener, S !== o && f.isPropagationStopped())
                break e;
              S !== null ? fe(
                S,
                ml,
                f,
                m,
                T
              ) : ml(f, m, T), o = S;
            }
        }
      }
    }
    function Ge(e, t) {
      Xv.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[yy];
      a === void 0 && (a = t[yy] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (md(t, e, 2, !1), a.add(i));
    }
    function hd(e, t, a) {
      Xv.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), md(
        a,
        e,
        i,
        t
      );
    }
    function Xm(e) {
      if (!e[tg]) {
        e[tg] = !0, O0.forEach(function(a) {
          a !== "selectionchange" && (Xv.has(a) || hd(a, !1, e), hd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[tg] || (t[tg] = !0, hd("selectionchange", !1, t));
      }
    }
    function md(e, t, a, i) {
      switch (Od(t)) {
        case bl:
          var o = Zg;
          break;
        case un:
          o = Rd;
          break;
        default:
          o = mi;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !N || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function ql(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var m = i.stateNode.containerInfo;
            if (m === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var S = d.tag;
                if ((S === 3 || S === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; m !== null; ) {
              if (d = lu(m), d === null) return;
              if (S = d.tag, S === 5 || S === 6 || S === 26 || S === 27) {
                i = f = d;
                continue e;
              }
              m = m.parentNode;
            }
          }
          i = i.return;
        }
      ur(function() {
        var T = f, q = Gi(a), L = [];
        e: {
          var w = zb.get(e);
          if (w !== void 0) {
            var X = ve, se = e;
            switch (e) {
              case "keypress":
                if (kc(a) === 0) break e;
              case "keydown":
              case "keyup":
                X = vT;
                break;
              case "focusin":
                se = "focus", X = Fe;
                break;
              case "focusout":
                se = "blur", X = Fe;
                break;
              case "beforeblur":
              case "afterblur":
                X = Fe;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                X = je;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                X = Ae;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                X = TT;
                break;
              case Ab:
              case Rb:
              case Ob:
                X = Pg;
                break;
              case Db:
                X = AT;
                break;
              case "scroll":
              case "scrollend":
                X = C;
                break;
              case "wheel":
                X = OT;
                break;
              case "copy":
              case "cut":
              case "paste":
                X = rT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                X = yb;
                break;
              case "toggle":
              case "beforetoggle":
                X = zT;
            }
            var Oe = (t & 4) !== 0, Tt = !Oe && (e === "scroll" || e === "scrollend"), $e = Oe ? w !== null ? w + "Capture" : null : w;
            Oe = [];
            for (var R = T, O; R !== null; ) {
              var z = R;
              if (O = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || O === null || $e === null || (z = uu(R, $e), z != null && Oe.push(
                _l(
                  R,
                  z,
                  O
                )
              )), Tt) break;
              R = R.return;
            }
            0 < Oe.length && (w = new X(
              w,
              se,
              null,
              a,
              q
            ), L.push({
              event: w,
              listeners: Oe
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (w = e === "mouseover" || e === "pointerover", X = e === "mouseout" || e === "pointerout", w && a !== s && (se = a.relatedTarget || a.fromElement) && (lu(se) || se[Ti]))
              break e;
            if ((X || w) && (w = q.window === q ? q : (w = q.ownerDocument) ? w.defaultView || w.parentWindow : window, X ? (se = a.relatedTarget || a.toElement, X = T, se = se ? lu(se) : null, se !== null && (Tt = Se(se), Oe = se.tag, se !== Tt || Oe !== 5 && Oe !== 27 && Oe !== 6) && (se = null)) : (X = null, se = T), X !== se)) {
              if (Oe = je, z = "onMouseLeave", $e = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (Oe = yb, z = "onPointerLeave", $e = "onPointerEnter", R = "pointer"), Tt = X == null ? w : _u(X), O = se == null ? w : _u(se), w = new Oe(
                z,
                R + "leave",
                X,
                a,
                q
              ), w.target = Tt, w.relatedTarget = O, z = null, lu(q) === T && (Oe = new Oe(
                $e,
                R + "enter",
                se,
                a,
                q
              ), Oe.target = O, Oe.relatedTarget = Tt, z = Oe), Tt = z, X && se)
                t: {
                  for (Oe = X, $e = se, R = 0, O = Oe; O; O = il(O))
                    R++;
                  for (O = 0, z = $e; z; z = il(z))
                    O++;
                  for (; 0 < R - O; )
                    Oe = il(Oe), R--;
                  for (; 0 < O - R; )
                    $e = il($e), O--;
                  for (; R--; ) {
                    if (Oe === $e || $e !== null && Oe === $e.alternate)
                      break t;
                    Oe = il(Oe), $e = il($e);
                  }
                  Oe = null;
                }
              else Oe = null;
              X !== null && Qm(
                L,
                w,
                X,
                Oe,
                !1
              ), se !== null && Tt !== null && Qm(
                L,
                Tt,
                se,
                Oe,
                !0
              );
            }
          }
          e: {
            if (w = T ? _u(T) : window, X = w.nodeName && w.nodeName.toLowerCase(), X === "select" || X === "input" && w.type === "file")
              var Z = Nh;
            else if (Np(w))
              if (Tb)
                Z = Yg;
              else {
                Z = wh;
                var ne = qg;
              }
            else
              X = w.nodeName, !X || X.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? T && Li(T.elementType) && (Z = Nh) : Z = _g;
            if (Z && (Z = Z(e, T))) {
              fr(
                L,
                Z,
                a,
                q
              );
              break e;
            }
            ne && ne(e, w, T), e === "focusout" && T && w.type === "number" && T.memoizedProps.value != null && Ps(w, "number", w.value);
          }
          switch (ne = T ? _u(T) : window, e) {
            case "focusin":
              (Np(ne) || ne.contentEditable === "true") && (Qd = ne, tv = T, By = null);
              break;
            case "focusout":
              By = tv = Qd = null;
              break;
            case "mousedown":
              lv = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              lv = !1, jp(
                L,
                a,
                q
              );
              break;
            case "selectionchange":
              if (CT) break;
            case "keydown":
            case "keyup":
              jp(
                L,
                a,
                q
              );
          }
          var He;
          if (ev)
            e: {
              switch (e) {
                case "compositionstart":
                  var re = "onCompositionStart";
                  break e;
                case "compositionend":
                  re = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  re = "onCompositionUpdate";
                  break e;
              }
              re = void 0;
            }
          else
            Xd ? Bl(e, a) && (re = "onCompositionEnd") : e === "keydown" && a.keyCode === pb && (re = "onCompositionStart");
          re && (gb && a.locale !== "ko" && (Xd || re !== "onCompositionStart" ? re === "onCompositionEnd" && Xd && (He = iu()) : ($ = q, B = "value" in $ ? $.value : $.textContent, Xd = !0)), ne = as(
            T,
            re
          ), 0 < ne.length && (re = new mb(
            re,
            e,
            null,
            a,
            q
          ), L.push({
            event: re,
            listeners: ne
          }), He ? re.data = He : (He = Qu(a), He !== null && (re.data = He)))), (He = UT ? or(e, a) : pf(e, a)) && (re = as(
            T,
            "onBeforeInput"
          ), 0 < re.length && (ne = new hT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            q
          ), L.push({
            event: ne,
            listeners: re
          }), ne.data = He)), Et(
            L,
            e,
            T,
            a,
            q
          );
        }
        wn(L, t);
      });
    }
    function _l(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function as(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = uu(e, a), o != null && i.unshift(
          _l(e, o, f)
        ), o = uu(e, t), o != null && i.push(
          _l(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function il(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Qm(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var m = a, S = m.alternate, T = m.stateNode;
        if (m = m.tag, S !== null && S === i) break;
        m !== 5 && m !== 26 && m !== 27 || T === null || (S = T, o ? (T = uu(a, f), T != null && d.unshift(
          _l(a, T, S)
        )) : o || (T = uu(a, f), T != null && d.push(
          _l(a, T, S)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Bn(e, t) {
      Jc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Cy || (Cy = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: ja,
        possibleRegistrationNames: Rc
      };
      Li(e) || typeof t.is == "string" || xh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function At(e, t, a, i) {
      t !== a && (a = yl(a), yl(t) !== a && (i[e] = t));
    }
    function ri(e, t, a) {
      t.forEach(function(i) {
        a[Jm(i)] = i === "style" ? gc(e) : e.getAttribute(i);
      });
    }
    function Ba(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function yd(e, t) {
      return e = e.namespaceURI === Os || e.namespaceURI === Go ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function yl(e) {
      return j(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        be(e)
      ), de(e)), (typeof e == "string" ? e : "" + e).replace(l2, `
`).replace(a2, "");
    }
    function Zm(e, t) {
      return t = yl(t), yl(e) === t;
    }
    function bu() {
    }
    function tt(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (mf(i, t, !1), t === "body" || t === "textarea" && i === "" || Vi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (mf("" + i, t, !1), t !== "body" && Vi(e, "" + i));
          break;
        case "className":
          cf(e, "class", i);
          break;
        case "tabIndex":
          cf(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          cf(e, a, i);
          break;
        case "style":
          yf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            cf(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          ue(i, a), i = Kc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || ng || (ng = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || ag || (ag = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || lg ? t !== "button" || o.type == null || o.type === "submit" || lg ? typeof i == "function" && (o.name == null || G1 || (G1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || ng || (ng = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || ag || (ag = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (lg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (lg = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && tt(e, t, "name", o.name, o, null), tt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), tt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), tt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (tt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), tt(e, t, "method", o.method, o, null), tt(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          ue(i, a), i = Kc("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ba(a, i), e.onclick = bu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ba(a, i), Ge("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ba(a, i), Ge("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          ue(i, a), a = Kc("" + i), e.setAttributeNS(Gs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (ue(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || ug[a] || (ug[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (ue(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (ue(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (ue(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Ge("beforetoggle", e), Ge("toggle", e), uf(e, "popover", i);
          break;
        case "xlinkActuate":
          Qa(
            e,
            Gs,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Qa(
            e,
            Gs,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Qa(
            e,
            Gs,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Qa(
            e,
            Gs,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Qa(
            e,
            Gs,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Qa(
            e,
            Gs,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Qa(
            e,
            Qv,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Qa(
            e,
            Qv,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Qa(
            e,
            Qv,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), uf(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          X1 || i == null || typeof i != "object" || (X1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = nr(a), uf(e, a, i)) : ja.hasOwnProperty(a) && i != null && typeof i != "function" && Ba(a, i);
      }
    }
    function pc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          yf(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Vi(e, i) : (typeof i == "number" || typeof i == "bigint") && Vi(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ba(a, i), Ge("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ba(a, i), Ge("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ba(a, i), e.onclick = bu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (ja.hasOwnProperty(a))
            i != null && typeof i != "function" && Ba(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[la] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : uf(e, a, i);
            }
      }
    }
    function qt(e, t, a) {
      switch (Bn(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ge("error", e), Ge("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    tt(e, t, f, d, a, null);
                }
            }
          o && tt(e, t, "srcSet", a.srcSet, a, null), i && tt(e, t, "src", a.src, a, null);
          return;
        case "input":
          ju("input", a), Ge("invalid", e);
          var m = f = d = o = null, S = null, T = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var q = a[i];
              if (q != null)
                switch (i) {
                  case "name":
                    o = q;
                    break;
                  case "type":
                    d = q;
                    break;
                  case "checked":
                    S = q;
                    break;
                  case "defaultChecked":
                    T = q;
                    break;
                  case "value":
                    f = q;
                    break;
                  case "defaultValue":
                    m = q;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (q != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    tt(e, t, i, q, a, null);
                }
            }
          Vu(e, a), Mp(
            e,
            f,
            m,
            S,
            T,
            d,
            o,
            !1
          ), au(e);
          return;
        case "select":
          ju("select", a), Ge("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (m = a[o], m != null))
              switch (o) {
                case "value":
                  f = m;
                  break;
                case "defaultValue":
                  d = m;
                  break;
                case "multiple":
                  i = m;
                default:
                  tt(
                    e,
                    t,
                    o,
                    m,
                    a,
                    null
                  );
              }
          rf(e, a), t = f, a = d, e.multiple = !!i, t != null ? nu(e, !!i, t, !1) : a != null && nu(e, !!i, a, !0);
          return;
        case "textarea":
          ju("textarea", a), Ge("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (m = a[d], m != null))
              switch (d) {
                case "value":
                  i = m;
                  break;
                case "defaultValue":
                  o = m;
                  break;
                case "children":
                  f = m;
                  break;
                case "dangerouslySetInnerHTML":
                  if (m != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  tt(
                    e,
                    t,
                    d,
                    m,
                    a,
                    null
                  );
              }
          dn(e, a), Oh(e, i, o, f), au(e);
          return;
        case "option":
          Rh(e, a);
          for (S in a)
            if (a.hasOwnProperty(S) && (i = a[S], i != null))
              switch (S) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  tt(e, t, S, i, a, null);
              }
          return;
        case "dialog":
          Ge("beforetoggle", e), Ge("toggle", e), Ge("cancel", e), Ge("close", e);
          break;
        case "iframe":
        case "object":
          Ge("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < up.length; i++)
            Ge(up[i], e);
          break;
        case "image":
          Ge("error", e), Ge("load", e);
          break;
        case "details":
          Ge("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ge("error", e), Ge("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (T in a)
            if (a.hasOwnProperty(T) && (i = a[T], i != null))
              switch (T) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  tt(e, t, T, i, a, null);
              }
          return;
        default:
          if (Li(t)) {
            for (q in a)
              a.hasOwnProperty(q) && (i = a[q], i !== void 0 && pc(
                e,
                t,
                q,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (m in a)
        a.hasOwnProperty(m) && (i = a[m], i != null && tt(e, t, m, i, a, null));
    }
    function s0(e, t, a, i) {
      switch (Bn(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, m = null, S = null, T = null, q = null;
          for (X in a) {
            var L = a[X];
            if (a.hasOwnProperty(X) && L != null)
              switch (X) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  S = L;
                default:
                  i.hasOwnProperty(X) || tt(
                    e,
                    t,
                    X,
                    null,
                    i,
                    L
                  );
              }
          }
          for (var w in i) {
            var X = i[w];
            if (L = a[w], i.hasOwnProperty(w) && (X != null || L != null))
              switch (w) {
                case "type":
                  f = X;
                  break;
                case "name":
                  o = X;
                  break;
                case "checked":
                  T = X;
                  break;
                case "defaultChecked":
                  q = X;
                  break;
                case "value":
                  d = X;
                  break;
                case "defaultValue":
                  m = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  X !== L && tt(
                    e,
                    t,
                    w,
                    X,
                    i,
                    L
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || L1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), L1 = !0), !t || i || V1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), V1 = !0), Lu(
            e,
            d,
            m,
            S,
            T,
            q,
            f,
            o
          );
          return;
        case "select":
          X = d = m = w = null;
          for (f in a)
            if (S = a[f], a.hasOwnProperty(f) && S != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  X = S;
                default:
                  i.hasOwnProperty(f) || tt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    S
                  );
              }
          for (o in i)
            if (f = i[o], S = a[o], i.hasOwnProperty(o) && (f != null || S != null))
              switch (o) {
                case "value":
                  w = f;
                  break;
                case "defaultValue":
                  m = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== S && tt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    S
                  );
              }
          i = m, t = d, a = X, w != null ? nu(e, !!t, w, !1) : !!a != !!t && (i != null ? nu(e, !!t, i, !0) : nu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          X = w = null;
          for (m in a)
            if (o = a[m], a.hasOwnProperty(m) && o != null && !i.hasOwnProperty(m))
              switch (m) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  tt(e, t, m, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  w = o;
                  break;
                case "defaultValue":
                  X = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && tt(e, t, d, o, i, f);
              }
          er(e, w, X);
          return;
        case "option":
          for (var se in a)
            if (w = a[se], a.hasOwnProperty(se) && w != null && !i.hasOwnProperty(se))
              switch (se) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  tt(
                    e,
                    t,
                    se,
                    null,
                    i,
                    w
                  );
              }
          for (S in i)
            if (w = i[S], X = a[S], i.hasOwnProperty(S) && w !== X && (w != null || X != null))
              switch (S) {
                case "selected":
                  e.selected = w && typeof w != "function" && typeof w != "symbol";
                  break;
                default:
                  tt(
                    e,
                    t,
                    S,
                    w,
                    i,
                    X
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var Oe in a)
            w = a[Oe], a.hasOwnProperty(Oe) && w != null && !i.hasOwnProperty(Oe) && tt(
              e,
              t,
              Oe,
              null,
              i,
              w
            );
          for (T in i)
            if (w = i[T], X = a[T], i.hasOwnProperty(T) && w !== X && (w != null || X != null))
              switch (T) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (w != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  tt(
                    e,
                    t,
                    T,
                    w,
                    i,
                    X
                  );
              }
          return;
        default:
          if (Li(t)) {
            for (var Tt in a)
              w = a[Tt], a.hasOwnProperty(Tt) && w !== void 0 && !i.hasOwnProperty(Tt) && pc(
                e,
                t,
                Tt,
                void 0,
                i,
                w
              );
            for (q in i)
              w = i[q], X = a[q], !i.hasOwnProperty(q) || w === X || w === void 0 && X === void 0 || pc(
                e,
                t,
                q,
                w,
                i,
                X
              );
            return;
          }
      }
      for (var $e in a)
        w = a[$e], a.hasOwnProperty($e) && w != null && !i.hasOwnProperty($e) && tt(e, t, $e, null, i, w);
      for (L in i)
        w = i[L], X = a[L], !i.hasOwnProperty(L) || w === X || w == null && X == null || tt(e, t, L, w, i, X);
    }
    function Jm(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function gc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Km(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Te(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Rs.has(f) ? (Te(d, f), i += o + f.replace(Mu, "-$1").toLowerCase().replace(Uu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Mu, "-$1").toLowerCase().replace(Uu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = yl(i), yl(t) !== i && (a.style = gc(e)));
      }
    }
    function Yl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ue(i, t), e === "" + i)
              return;
        }
      At(t, e, i, f);
    }
    function km(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      At(t, e, i, f);
    }
    function $m(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (ue(i, a), e === "" + i)
              return;
        }
      At(t, e, i, f);
    }
    function r0(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (ue(i, t), e === "" + i))
              return;
        }
      At(t, e, i, f);
    }
    function it(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ue(i, t), a = Kc("" + i), e === a)
              return;
        }
      At(t, e, i, f);
    }
    function yt(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, m = 0; m < d.length; m++)
        switch (d[m].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[m].name);
        }
      if (Li(t)) {
        for (var S in a)
          if (a.hasOwnProperty(S)) {
            var T = a[S];
            if (T != null) {
              if (ja.hasOwnProperty(S))
                typeof T != "function" && Ba(S, T);
              else if (a.suppressHydrationWarning !== !0)
                switch (S) {
                  case "children":
                    typeof T != "string" && typeof T != "number" || At(
                      "children",
                      e.textContent,
                      T,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, T = T ? T.__html : void 0, T != null && (T = yd(e, T), At(
                      S,
                      d,
                      T,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(S), Km(e, T, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(S.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      S
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Rp(
                      e,
                      "class",
                      T
                    ), At(
                      "className",
                      d,
                      T,
                      o
                    );
                    continue;
                  default:
                    i.context === qc && t !== "svg" && t !== "math" ? f.delete(S.toLowerCase()) : f.delete(S), d = Rp(
                      e,
                      S,
                      T
                    ), At(
                      S,
                      d,
                      T,
                      o
                    );
                }
            }
          }
      } else
        for (T in a)
          if (a.hasOwnProperty(T) && (S = a[T], S != null)) {
            if (ja.hasOwnProperty(T))
              typeof S != "function" && Ba(T, S);
            else if (a.suppressHydrationWarning !== !0)
              switch (T) {
                case "children":
                  typeof S != "string" && typeof S != "number" || At(
                    "children",
                    e.textContent,
                    S,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, S = S ? S.__html : void 0, S != null && (S = yd(e, S), d !== S && (o[T] = { __html: d }));
                  continue;
                case "className":
                  Yl(
                    e,
                    T,
                    "class",
                    S,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Yl(
                    e,
                    T,
                    "tabindex",
                    S,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(T), Km(e, S, o);
                  continue;
                case "multiple":
                  f.delete(T), At(
                    T,
                    e.multiple,
                    S,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(T), At(
                    T,
                    e.muted,
                    S,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), At(
                    T,
                    e.autofocus,
                    S,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(T), d = e.getAttribute("data"), At(
                      T,
                      d,
                      S,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(S !== "" || t === "a" && T === "href" || t === "object" && T === "data")) {
                    console.error(
                      T === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      T,
                      T
                    );
                    continue;
                  }
                  it(
                    e,
                    T,
                    T,
                    S,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(T), typeof S == "function") {
                    f.delete(T.toLowerCase()), T === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === n2) {
                    f.delete(T.toLowerCase()), At(
                      T,
                      "function",
                      S,
                      o
                    );
                    continue;
                  }
                  it(
                    e,
                    T,
                    T.toLowerCase(),
                    S,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  it(
                    e,
                    T,
                    "xlink:href",
                    S,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  $m(
                    e,
                    T,
                    "contenteditable",
                    S,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  $m(
                    e,
                    T,
                    "spellcheck",
                    S,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  $m(
                    e,
                    T,
                    T,
                    S,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  km(
                    e,
                    T,
                    T.toLowerCase(),
                    S,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    m = e;
                    var q = d = T, L = o;
                    if (f.delete(q), m = m.getAttribute(q), m === null)
                      switch (typeof S) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (S === !1) break e;
                      }
                    else if (S != null)
                      switch (typeof S) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (S === !0 && m === "") break e;
                          break;
                        default:
                          if (ue(S, d), m === "" + S)
                            break e;
                      }
                    At(
                      d,
                      m,
                      S,
                      L
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (m = e, q = d = T, L = o, f.delete(q), m = m.getAttribute(q), m === null)
                      switch (typeof S) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(S) || 1 > S) break e;
                      }
                    else if (S != null)
                      switch (typeof S) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(S) || 1 > S) && (ue(S, d), m === "" + S))
                            break e;
                      }
                    At(
                      d,
                      m,
                      S,
                      L
                    );
                  }
                  continue;
                case "rowSpan":
                  r0(
                    e,
                    T,
                    "rowspan",
                    S,
                    f,
                    o
                  );
                  continue;
                case "start":
                  r0(
                    e,
                    T,
                    T,
                    S,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Yl(
                    e,
                    T,
                    "x-height",
                    S,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Yl(
                    e,
                    T,
                    "xlink:actuate",
                    S,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Yl(
                    e,
                    T,
                    "xlink:arcrole",
                    S,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Yl(
                    e,
                    T,
                    "xlink:role",
                    S,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Yl(
                    e,
                    T,
                    "xlink:show",
                    S,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Yl(
                    e,
                    T,
                    "xlink:title",
                    S,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Yl(
                    e,
                    T,
                    "xlink:type",
                    S,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Yl(
                    e,
                    T,
                    "xml:base",
                    S,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Yl(
                    e,
                    T,
                    "xml:lang",
                    S,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Yl(
                    e,
                    T,
                    "xml:space",
                    S,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  S !== "" || ug[T] || (ug[T] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    T
                  )), km(
                    e,
                    T,
                    T,
                    S,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < T.length) || T[0] !== "o" && T[0] !== "O" || T[1] !== "n" && T[1] !== "N") {
                    m = nr(T), d = !1, i.context === qc && t !== "svg" && t !== "math" ? f.delete(m.toLowerCase()) : (q = T.toLowerCase(), q = zc.hasOwnProperty(
                      q
                    ) && zc[q] || null, q !== null && q !== T && (d = !0, f.delete(q)), f.delete(m));
                    e: if (q = e, L = m, m = S, wi(L))
                      if (q.hasAttribute(L))
                        q = q.getAttribute(
                          L
                        ), ue(
                          m,
                          L
                        ), m = q === "" + m ? m : q;
                      else {
                        switch (typeof m) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (q = L.toLowerCase().slice(0, 5), q !== "data-" && q !== "aria-")
                              break e;
                        }
                        m = m === void 0 ? void 0 : null;
                      }
                    else m = void 0;
                    d || At(
                      T,
                      m,
                      S,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ri(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Xe(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Qe(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function ot(e) {
      switch (e) {
        case Go:
          return ph;
        case Os:
          return og;
        default:
          return qc;
      }
    }
    function Il(e, t) {
      if (e === qc)
        switch (t) {
          case "svg":
            return ph;
          case "math":
            return og;
          default:
            return qc;
        }
      return e === ph && t === "foreignObject" ? qc : e;
    }
    function qn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function To() {
      var e = window.event;
      return e && e.type === "popstate" ? e === kv ? !1 : (kv = e, !0) : (kv = null, !1);
    }
    function Wm(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Su(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function _t(e, t, a, i) {
      s0(e, t, a, i), e[la] = i;
    }
    function Tu(e) {
      Vi(e, "");
    }
    function vc(e, t, a) {
      e.nodeValue = a;
    }
    function _n(e) {
      return e === "head";
    }
    function qa(e, t) {
      e.removeChild(t);
    }
    function Eo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Ao(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === cg) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & i2 && zo(d.documentElement), a & c2 && zo(d.body), a & o2)
                for (a = d.head, zo(a), d = a.firstChild; d; ) {
                  var m = d.nextSibling, S = d.nodeName;
                  d[Yo] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = m;
                }
            }
            if (o === 0) {
              e.removeChild(f), Ec(t);
              return;
            }
            o--;
          } else
            a === ig || a === Bc || a === ip ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      Ec(t);
    }
    function Pl(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Fm(e) {
      e.nodeValue = "";
    }
    function Im(e, t) {
      t = t[f2], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function pd(e, t) {
      e.nodeValue = t;
    }
    function Ro(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Ro(a), Lc(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function di(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Yo])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          ue(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = gl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function pl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = gl(e.nextSibling), e === null)) return null;
      return e;
    }
    function Yn(e) {
      return e.data === ip || e.data === Bc && e.ownerDocument.readyState === Z1;
    }
    function Oo(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Bc || a.readyState === Z1)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function gl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === ig || t === ip || t === Bc || t === Zv || t === Q1)
            break;
          if (t === cg) return null;
        }
      }
      return e;
    }
    function gd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Jm(f.name)] = f.name.toLowerCase() === "style" ? gc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function vd(e, t, a) {
      return a === null || a[u2] !== !0 ? (e.nodeValue === t ? e = null : (t = yl(t), e = yl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Pm(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === cg) {
            if (t === 0)
              return gl(e.nextSibling);
            t--;
          } else
            a !== ig && a !== ip && a !== Bc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Do(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === ig || a === ip || a === Bc) {
            if (t === 0) return e;
            t--;
          } else a === cg && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ey(e) {
      Ec(e);
    }
    function ma(e) {
      Ec(e);
    }
    function ty(e, t, a, i, o) {
      switch (o && ar(e, i.ancestorInfo), t = Qe(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function ya(e, t, a, i) {
      if (!a[Ti] && ca(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      qt(a, e, t), a[Ml] = i, a[la] = t;
    }
    function zo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Lc(e);
    }
    function ns(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function d0(e, t, a) {
      var i = gh;
      if (i && typeof t == "string" && t) {
        var o = oa(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), F1.has(o) || (F1.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), qt(t, "link", e), tl(t), i.head.appendChild(t)));
      }
    }
    function Eu(e, t, a, i) {
      var o = (o = Vn.current) ? ns(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = hi(a.href), t = rn(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = hi(a.href);
            var f = rn(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Qs, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              jn(e)
            )) && !f._p && (d.instance = f, d.state.loading = cp | Pn), !eu.has(e))) {
              var m = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              eu.set(e, m), f || h0(
                o,
                e,
                m,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + bc(t) + `
  + ` + bc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + bc(t) + `
  + ` + bc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Sc(a), t = rn(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function bc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Ou.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Ou.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Ou.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function hi(e) {
      return 'href="' + oa(e) + '"';
    }
    function jn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function ly(e) {
      return qe({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function h0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = cp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= cp;
      }), t.addEventListener("error", function() {
        return i.loading |= $1;
      }), qt(t, "link", a), tl(t), e.head.appendChild(t));
    }
    function Sc(e) {
      return '[src="' + oa(e) + '"]';
    }
    function Tc(e) {
      return "script[async]" + e;
    }
    function bd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + oa(a.href) + '"]'
            );
            if (i)
              return t.instance = i, tl(i), i;
            var o = qe({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), tl(i), qt(i, "style", o), Sd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = hi(a.href);
            var f = e.querySelector(
              jn(o)
            );
            if (f)
              return t.state.loading |= Pn, t.instance = f, tl(f), f;
            i = ly(a), (o = eu.get(o)) && ay(i, o), f = (e.ownerDocument || e).createElement("link"), tl(f);
            var d = f;
            return d._p = new Promise(function(m, S) {
              d.onload = m, d.onerror = S;
            }), qt(f, "link", i), t.state.loading |= Pn, Sd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Sc(a.src), (o = e.querySelector(
              Tc(f)
            )) ? (t.instance = o, tl(o), o) : (i = a, (o = eu.get(f)) && (i = qe({}, a), ny(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), tl(o), qt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Pn) === Qs && (i = t.instance, t.state.loading |= Pn, Sd(i, a.precedence, e));
      return t.instance;
    }
    function Sd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var m = i[d];
        if (m.dataset.precedence === t) f = m;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function ay(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function ny(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function uy(e, t, a) {
      if (fg === null) {
        var i = /* @__PURE__ */ new Map(), o = fg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = fg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Yo] || f[Ml] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Go) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var m = i.get(d);
          m ? m.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function iy(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Mo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === ph || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Xe(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function us(e) {
      return !(e.type === "stylesheet" && (e.state.loading & W1) === Qs);
    }
    function m0() {
    }
    function y0(e, t, a) {
      if (op === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = op;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & Pn) === Qs) {
        if (t.instance === null) {
          var o = hi(a.href), f = e.querySelector(
            jn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = is.bind(i), e.then(i, i)), t.state.loading |= Pn, t.instance = f, tl(f);
            return;
          }
          f = e.ownerDocument || e, a = ly(a), (o = eu.get(o)) && ay(a, o), f = f.createElement("link"), tl(f);
          var d = f;
          d._p = new Promise(function(m, S) {
            d.onload = m, d.onerror = S;
          }), qt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & W1) === Qs && (i.count++, t = is.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function p0() {
      if (op === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = op;
      return e.stylesheets && e.count === 0 && Td(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Td(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function is() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Td(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Td(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, sg = /* @__PURE__ */ new Map(), t.forEach(g0, e), sg = null, is.call(e));
    }
    function g0(e, t) {
      if (!(t.state.loading & Pn)) {
        var a = sg.get(e);
        if (a) var i = a.get(Wv);
        else {
          a = /* @__PURE__ */ new Map(), sg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Wv, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(Wv, o), a.set(d, o), this.count++, i = is.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Pn;
      }
    }
    function Ed(e, t, a, i, o, f, d, m) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Xs, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Eh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Eh(0), this.hiddenUpdates = Eh(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function cy(e, t, a, i, o, f, d, m, S, T, q, L) {
      return e = new Ed(
        e,
        t,
        a,
        d,
        m,
        S,
        T,
        L
      ), t = BT, f === !0 && (t |= na | xu), jt && (t |= Vl), f = ce(3, null, null, t), e.current = f, f.stateNode = e, t = Rf(), Wi(t), e.pooledCache = t, Wi(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Zl(f), e;
    }
    function oy(e) {
      return e ? (e = Xo, e) : Xo;
    }
    function st(e, t, a, i, o, f) {
      if (vl && typeof vl.onScheduleFiberRoot == "function")
        try {
          vl.onScheduleFiberRoot(bi, i, a);
        } catch (d) {
          ta || (ta = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      ie !== null && typeof ie.markRenderScheduled == "function" && ie.markRenderScheduled(t), o = oy(o), i.context === null ? i.context = o : i.pendingContext = o, aa && ga !== null && !tS && (tS = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        me(ga) || "Unknown"
      )), i = vn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Wa(e, i, t), a !== null && (wt(a, e, t), Iu(a, e, t));
    }
    function Ad(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function fy(e, t) {
      Ad(e, t), (e = e.alternate) && Ad(e, t);
    }
    function sy(e) {
      if (e.tag === 13) {
        var t = Ql(e, 67108864);
        t !== null && wt(t, e, 67108864), fy(e, 67108864);
      }
    }
    function Xg() {
      return ga;
    }
    function Qg() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = xg(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Zg(e, t, a, i) {
      var o = Y.T;
      Y.T = null;
      var f = Re.p;
      try {
        Re.p = bl, mi(e, t, a, i);
      } finally {
        Re.p = f, Y.T = o;
      }
    }
    function Rd(e, t, a, i) {
      var o = Y.T;
      Y.T = null;
      var f = Re.p;
      try {
        Re.p = un, mi(e, t, a, i);
      } finally {
        Re.p = f, Y.T = o;
      }
    }
    function mi(e, t, a, i) {
      if (dg) {
        var o = cs(i);
        if (o === null)
          ql(
            e,
            t,
            i,
            hg,
            a
          ), yi(e, i);
        else if (os(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (yi(e, i), t & 4 && -1 < h2.indexOf(e)) {
          for (; o !== null; ) {
            var f = ca(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Hi(f.pendingLanes);
                    if (d !== 0) {
                      var m = f;
                      for (m.pendingLanes |= 2, m.entangledLanes |= 2; d; ) {
                        var S = 1 << 31 - zl(d);
                        m.entanglements[1] |= S, d &= ~S;
                      }
                      wa(f), (rt & (Ta | wu)) === cn && (W0 = Ln() + N1, yc(0));
                    }
                  }
                  break;
                case 13:
                  m = Ql(f, 2), m !== null && wt(m, f, 2), hc(), fy(f, 2);
              }
            if (f = cs(i), f === null && ql(
              e,
              t,
              i,
              hg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          ql(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function cs(e) {
      return e = Gi(e), Uo(e);
    }
    function Uo(e) {
      if (hg = null, e = lu(e), e !== null) {
        var t = Se(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = We(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return hg = e, null;
    }
    function Od(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return bl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return un;
        case "message":
          switch (vi()) {
            case xd:
              return bl;
            case gs:
              return un;
            case Bo:
            case Wg:
              return zu;
            case vs:
              return wd;
            default:
              return zu;
          }
        default:
          return zu;
      }
    }
    function yi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Po = null;
          break;
        case "dragenter":
        case "dragleave":
          ef = null;
          break;
        case "mouseover":
        case "mouseout":
          tf = null;
          break;
        case "pointerover":
        case "pointerout":
          sp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          rp.delete(t.pointerId);
      }
    }
    function ea(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ca(t), t !== null && sy(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function os(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Po = ea(
            Po,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return ef = ea(
            ef,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return tf = ea(
            tf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return sp.set(
            f,
            ea(
              sp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, rp.set(
            f,
            ea(
              rp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function v0(e) {
      var t = lu(e.target);
      if (t !== null) {
        var a = Se(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = We(a), t !== null) {
              e.blockedOn = t, Hg(e.priority, function() {
                if (a.tag === 13) {
                  var i = Fl(a);
                  i = Hl(i);
                  var o = Ql(
                    a,
                    i
                  );
                  o !== null && wt(o, a, i), fy(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function fs(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = cs(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(i), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = ca(a), t !== null && sy(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function ry(e, t, a) {
      fs(e) && a.delete(t);
    }
    function b0() {
      Fv = !1, Po !== null && fs(Po) && (Po = null), ef !== null && fs(ef) && (ef = null), tf !== null && fs(tf) && (tf = null), sp.forEach(ry), rp.forEach(ry);
    }
    function ss(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Fv || (Fv = !0, Yt.unstable_scheduleCallback(
        Yt.unstable_NormalPriority,
        b0
      )));
    }
    function S0(e) {
      mg !== e && (mg = e, Yt.unstable_scheduleCallback(
        Yt.unstable_NormalPriority,
        function() {
          mg === e && (mg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Uo(i || a) === null)
                continue;
              break;
            }
            var f = ca(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), lc(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Ec(e) {
      function t(S) {
        return ss(S, e);
      }
      Po !== null && ss(Po, e), ef !== null && ss(ef, e), tf !== null && ss(tf, e), sp.forEach(t), rp.forEach(t);
      for (var a = 0; a < lf.length; a++) {
        var i = lf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < lf.length && (a = lf[0], a.blockedOn === null); )
        v0(a), a.blockedOn === null && lf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[la] || null;
          if (typeof f == "function")
            d || S0(a);
          else if (d) {
            var m = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[la] || null)
                m = d.formAction;
              else if (Uo(o) !== null) continue;
            } else m = d.action;
            typeof m == "function" ? a[i + 1] = m : (a.splice(i, 3), i -= 3), S0(a);
          }
        }
    }
    function Dd(e) {
      this._internalRoot = e;
    }
    function rs(e) {
      this._internalRoot = e;
    }
    function T0(e) {
      e[Ti] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Yt = YS(), ds = sb, Jg = _S, qe = Object.assign, hs = Symbol.for("react.element"), pi = Symbol.for("react.transitional.element"), Ac = Symbol.for("react.portal"), Ce = Symbol.for("react.fragment"), xo = Symbol.for("react.strict_mode"), Co = Symbol.for("react.profiler"), dy = Symbol.for("react.provider"), zd = Symbol.for("react.consumer"), _a = Symbol.for("react.context"), Au = Symbol.for("react.forward_ref"), Ho = Symbol.for("react.suspense"), gi = Symbol.for("react.suspense_list"), ms = Symbol.for("react.memo"), pa = Symbol.for("react.lazy"), hy = Symbol.for("react.activity"), E0 = Symbol.for("react.memo_cache_sentinel"), my = Symbol.iterator, Md = Symbol.for("react.client.reference"), De = Array.isArray, Y = ds.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Re = Jg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Kg = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), ys = [], ps = [], Ya = -1, Ru = xt(null), No = xt(null), Vn = xt(null), wo = xt(null), Ou = Object.prototype.hasOwnProperty, Ud = Yt.unstable_scheduleCallback, kg = Yt.unstable_cancelCallback, A0 = Yt.unstable_shouldYield, $g = Yt.unstable_requestPaint, Ln = Yt.unstable_now, vi = Yt.unstable_getCurrentPriorityLevel, xd = Yt.unstable_ImmediatePriority, gs = Yt.unstable_UserBlockingPriority, Bo = Yt.unstable_NormalPriority, Wg = Yt.unstable_LowPriority, vs = Yt.unstable_IdlePriority, Fg = Yt.log, nn = Yt.unstable_setDisableYieldValue, bi = null, vl = null, ie = null, ta = !1, jt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", zl = Math.clz32 ? Math.clz32 : Sh, Cd = Math.log, Du = Math.LN2, Hd = 256, Nd = 4194304, bl = 2, un = 8, zu = 32, wd = 268435456, Si = Math.random().toString(36).slice(2), Ml = "__reactFiber$" + Si, la = "__reactProps$" + Si, Ti = "__reactContainer$" + Si, yy = "__reactEvents$" + Si, R0 = "__reactListeners$" + Si, qo = "__reactHandles$" + Si, _o = "__reactResources$" + Si, Yo = "__reactMarker$" + Si, O0 = /* @__PURE__ */ new Set(), ja = {}, Rc = {}, D0 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Bd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), qd = {}, _d = {}, Ei = 0, py, gy, z0, vy, jo, M0, U0;
    Ws.__reactDisabledLog = !0;
    var by, bs, Vo = !1, Ss = new (typeof WeakMap == "function" ? WeakMap : Map)(), ga = null, aa = !1, Ig = /[\n"\\]/g, Sy = !1, Ty = !1, Ey = !1, Ay = !1, Yd = !1, Ry = !1, Ts = ["value", "defaultValue"], x0 = !1, C0 = /["'&<>\n\t]|^\s|\s$/, Oy = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), jd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Vd = jd.concat(["button"]), Dy = "dd dt li option optgroup p rp rt".split(" "), zy = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, Lo = {}, Gn = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Mu = /([A-Z])/g, Uu = /^ms-/, Es = /^(?:webkit|moz|o)[A-Z]/, As = /^-ms-/, Ai = /-(.)/g, H0 = /;\s*$/, Oc = {}, Dc = {}, N0 = !1, My = !1, Rs = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Os = "http://www.w3.org/1998/Math/MathML", Go = "http://www.w3.org/2000/svg", Ld = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), zc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Uy = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Xn = {}, xy = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Gd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Cy = !1, jl = {}, Ds = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, y = null, v = !1, A = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = !1;
    if (A)
      try {
        var J = {};
        Object.defineProperty(J, "passive", {
          get: function() {
            N = !0;
          }
        }), window.addEventListener("test", J, J), window.removeEventListener("test", J, J);
      } catch {
        N = !1;
      }
    var $ = null, B = null, _ = null, ge = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ve = dl(ge), lt = qe({}, ge, { view: 0, detail: 0 }), C = dl(lt), M, H, K, oe = qe({}, lt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: cr,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== K && (K && e.type === "mousemove" ? (M = e.screenX - K.screenX, H = e.screenY - K.screenY) : H = M = 0, K = e), M);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : H;
      }
    }), je = dl(oe), ye = qe({}, oe, { dataTransfer: 0 }), Ae = dl(ye), cl = qe({}, lt, { relatedTarget: 0 }), Fe = dl(cl), Ri = qe({}, ge, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pg = dl(Ri), sT = qe({}, ge, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), rT = dl(sT), dT = qe({}, ge, { data: 0 }), mb = dl(
      dT
    ), hT = mb, mT = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, yT = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, pT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, gT = qe({}, lt, {
      key: function(e) {
        if (e.key) {
          var t = mT[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = kc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yT[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cr,
      charCode: function(e) {
        return e.type === "keypress" ? kc(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? kc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vT = dl(gT), bT = qe({}, oe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), yb = dl(bT), ST = qe({}, lt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cr
    }), TT = dl(ST), ET = qe({}, ge, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), AT = dl(ET), RT = qe({}, oe, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), OT = dl(RT), DT = qe({}, ge, {
      newState: 0,
      oldState: 0
    }), zT = dl(DT), MT = [9, 13, 27, 32], pb = 229, ev = A && "CompositionEvent" in window, Hy = null;
    A && "documentMode" in document && (Hy = document.documentMode);
    var UT = A && "TextEvent" in window && !Hy, gb = A && (!ev || Hy && 8 < Hy && 11 >= Hy), vb = 32, bb = String.fromCharCode(vb), Sb = !1, Xd = !1, xT = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Ny = null, wy = null, Tb = !1;
    A && (Tb = Hh("input") && (!document.documentMode || 9 < document.documentMode));
    var va = typeof Object.is == "function" ? Object.is : jg, CT = A && "documentMode" in document && 11 >= document.documentMode, Qd = null, tv = null, By = null, lv = !1, Zd = {
      animationend: cu("Animation", "AnimationEnd"),
      animationiteration: cu("Animation", "AnimationIteration"),
      animationstart: cu("Animation", "AnimationStart"),
      transitionrun: cu("Transition", "TransitionRun"),
      transitionstart: cu("Transition", "TransitionStart"),
      transitioncancel: cu("Transition", "TransitionCancel"),
      transitionend: cu("Transition", "TransitionEnd")
    }, av = {}, Eb = {};
    A && (Eb = document.createElement("div").style, "AnimationEvent" in window || (delete Zd.animationend.animation, delete Zd.animationiteration.animation, delete Zd.animationstart.animation), "TransitionEvent" in window || delete Zd.transitionend.transition);
    var Ab = Zi("animationend"), Rb = Zi("animationiteration"), Ob = Zi("animationstart"), HT = Zi("transitionrun"), NT = Zi("transitionstart"), wT = Zi("transitioncancel"), Db = Zi("transitionend"), zb = /* @__PURE__ */ new Map(), nv = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    nv.push("scrollEnd");
    var uv = /* @__PURE__ */ new WeakMap(), iv = 1, zs = 2, Qn = [], Jd = 0, cv = 0, Xo = {};
    Object.freeze(Xo);
    var Zn = null, Kd = null, Rt = 0, BT = 1, Vl = 2, na = 8, xu = 16, Mb = 64, Ub = !1;
    try {
      var xb = Object.preventExtensions({});
    } catch {
      Ub = !0;
    }
    var kd = [], $d = 0, w0 = null, B0 = 0, Jn = [], Kn = 0, Ms = null, Mc = 1, Uc = "", ba = null, Gt = null, at = !1, xc = !1, kn = null, Us = null, Oi = !1, ov = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Cb = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var qT = performance, Hb = function() {
        return qT.now();
      };
    else {
      var _T = Date;
      Hb = function() {
        return _T.now();
      };
    }
    var fv = xt(null), sv = xt(null), Nb = {}, q0 = null, Wd = null, Fd = !1, YT = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, jT = Yt.unstable_scheduleCallback, VT = Yt.unstable_NormalPriority, Sl = {
      $$typeof: _a,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Id = Yt.unstable_now, wb = -0, _0 = -0, Va = -1.1, xs = -0, Y0 = !1, j0 = !1, qy = null, rv = 0, Cs = 0, Pd = null, Bb = Y.S;
    Y.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Qp(e, t), Bb !== null && Bb(e, t);
    };
    var Hs = xt(null), Cu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, _y = [], Yy = [], jy = [], Vy = [], Ly = [], Gy = [], Ns = /* @__PURE__ */ new Set();
    Cu.recordUnsafeLifecycleWarnings = function(e, t) {
      Ns.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && _y.push(e), e.mode & na && typeof t.UNSAFE_componentWillMount == "function" && Yy.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && jy.push(e), e.mode & na && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vy.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ly.push(e), e.mode & na && typeof t.UNSAFE_componentWillUpdate == "function" && Gy.push(e));
    }, Cu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < _y.length && (_y.forEach(function(m) {
        e.add(
          me(m) || "Component"
        ), Ns.add(m.type);
      }), _y = []);
      var t = /* @__PURE__ */ new Set();
      0 < Yy.length && (Yy.forEach(function(m) {
        t.add(
          me(m) || "Component"
        ), Ns.add(m.type);
      }), Yy = []);
      var a = /* @__PURE__ */ new Set();
      0 < jy.length && (jy.forEach(function(m) {
        a.add(
          me(m) || "Component"
        ), Ns.add(m.type);
      }), jy = []);
      var i = /* @__PURE__ */ new Set();
      0 < Vy.length && (Vy.forEach(
        function(m) {
          i.add(
            me(m) || "Component"
          ), Ns.add(m.type);
        }
      ), Vy = []);
      var o = /* @__PURE__ */ new Set();
      0 < Ly.length && (Ly.forEach(function(m) {
        o.add(
          me(m) || "Component"
        ), Ns.add(m.type);
      }), Ly = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Gy.length && (Gy.forEach(function(m) {
        f.add(
          me(m) || "Component"
        ), Ns.add(m.type);
      }), Gy = []), 0 < t.size) {
        var d = te(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = te(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = te(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = te(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = te(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = te(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var V0 = /* @__PURE__ */ new Map(), qb = /* @__PURE__ */ new Set();
    Cu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & na && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !qb.has(e.type) && (i = V0.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], V0.set(a, i)), i.push(e));
    }, Cu.flushLegacyContextWarning = function() {
      V0.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(me(o) || "Component"), qb.add(o.type);
          });
          var i = te(a);
          fe(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Cu.discardPendingWarnings = function() {
      _y = [], Yy = [], jy = [], Vy = [], Ly = [], Gy = [], V0 = /* @__PURE__ */ new Map();
    };
    var Xy = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), _b = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), L0 = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), dv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Qy = null, G0 = !1, $n = 0, Wn = 1, Sa = 2, Ll = 4, Tl = 8, Yb = 0, jb = 1, Vb = 2, hv = 3, Qo = !1, Lb = !1, mv = null, yv = !1, eh = xt(null), X0 = xt(0), th, Gb = /* @__PURE__ */ new Set(), Xb = /* @__PURE__ */ new Set(), pv = /* @__PURE__ */ new Set(), Qb = /* @__PURE__ */ new Set(), Zo = 0, ze = null, gt = null, ol = null, Q0 = !1, lh = !1, ws = !1, Z0 = 0, Zy = 0, Cc = null, LT = 0, GT = 25, V = null, Fn = null, Hc = -1, Jy = !1, J0 = {
      readContext: bt,
      use: Sn,
      useCallback: zt,
      useContext: zt,
      useEffect: zt,
      useImperativeHandle: zt,
      useLayoutEffect: zt,
      useInsertionEffect: zt,
      useMemo: zt,
      useReducer: zt,
      useRef: zt,
      useState: zt,
      useDebugValue: zt,
      useDeferredValue: zt,
      useTransition: zt,
      useSyncExternalStore: zt,
      useId: zt,
      useHostTransitionStatus: zt,
      useFormState: zt,
      useActionState: zt,
      useOptimistic: zt,
      useMemoCache: zt,
      useCacheRefresh: zt
    }, gv = null, Zb = null, vv = null, Jb = null, Di = null, Hu = null, K0 = null;
    gv = {
      readContext: function(e) {
        return bt(e);
      },
      use: Sn,
      useCallback: function(e, t) {
        return V = "useCallback", Ye(), za(t), Nf(e, t);
      },
      useContext: function(e) {
        return V = "useContext", Ye(), bt(e);
      },
      useEffect: function(e, t) {
        return V = "useEffect", Ye(), za(t), Tr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return V = "useImperativeHandle", Ye(), za(a), Ar(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        V = "useInsertionEffect", Ye(), za(t), Ca(4, Sa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", Ye(), za(t), Er(e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", Ye(), za(t);
        var a = Y.H;
        Y.H = Di;
        try {
          return Rr(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        V = "useReducer", Ye();
        var i = Y.H;
        Y.H = Di;
        try {
          return Ie(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function(e) {
        return V = "useRef", Ye(), Hf(e);
      },
      useState: function(e) {
        V = "useState", Ye();
        var t = Y.H;
        Y.H = Di;
        try {
          return du(e);
        } finally {
          Y.H = t;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", Ye();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", Ye(), Or(e, t);
      },
      useTransition: function() {
        return V = "useTransition", Ye(), Rn();
      },
      useSyncExternalStore: function(e, t, a) {
        return V = "useSyncExternalStore", Ye(), ru(
          e,
          t,
          a
        );
      },
      useId: function() {
        return V = "useId", Ye(), On();
      },
      useFormState: function(e, t) {
        return V = "useFormState", Ye(), eo(), io(e, t);
      },
      useActionState: function(e, t) {
        return V = "useActionState", Ye(), io(e, t);
      },
      useOptimistic: function(e) {
        return V = "useOptimistic", Ye(), Pa(e);
      },
      useHostTransitionStatus: kl,
      useMemoCache: Vt,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", Ye(), ac();
      }
    }, Zb = {
      readContext: function(e) {
        return bt(e);
      },
      use: Sn,
      useCallback: function(e, t) {
        return V = "useCallback", P(), Nf(e, t);
      },
      useContext: function(e) {
        return V = "useContext", P(), bt(e);
      },
      useEffect: function(e, t) {
        return V = "useEffect", P(), Tr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return V = "useImperativeHandle", P(), Ar(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        V = "useInsertionEffect", P(), Ca(4, Sa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", P(), Er(e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", P();
        var a = Y.H;
        Y.H = Di;
        try {
          return Rr(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        V = "useReducer", P();
        var i = Y.H;
        Y.H = Di;
        try {
          return Ie(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function(e) {
        return V = "useRef", P(), Hf(e);
      },
      useState: function(e) {
        V = "useState", P();
        var t = Y.H;
        Y.H = Di;
        try {
          return du(e);
        } finally {
          Y.H = t;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", P(), Or(e, t);
      },
      useTransition: function() {
        return V = "useTransition", P(), Rn();
      },
      useSyncExternalStore: function(e, t, a) {
        return V = "useSyncExternalStore", P(), ru(
          e,
          t,
          a
        );
      },
      useId: function() {
        return V = "useId", P(), On();
      },
      useActionState: function(e, t) {
        return V = "useActionState", P(), io(e, t);
      },
      useFormState: function(e, t) {
        return V = "useFormState", P(), eo(), io(e, t);
      },
      useOptimistic: function(e) {
        return V = "useOptimistic", P(), Pa(e);
      },
      useHostTransitionStatus: kl,
      useMemoCache: Vt,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", P(), ac();
      }
    }, vv = {
      readContext: function(e) {
        return bt(e);
      },
      use: Sn,
      useCallback: function(e, t) {
        return V = "useCallback", P(), tc(e, t);
      },
      useContext: function(e) {
        return V = "useContext", P(), bt(e);
      },
      useEffect: function(e, t) {
        V = "useEffect", P(), kt(2048, Tl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return V = "useImperativeHandle", P(), An(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return V = "useInsertionEffect", P(), kt(4, Sa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", P(), kt(4, Ll, e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", P();
        var a = Y.H;
        Y.H = Hu;
        try {
          return ai(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        V = "useReducer", P();
        var i = Y.H;
        Y.H = Hu;
        try {
          return Ua(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return V = "useRef", P(), ke().memoizedState;
      },
      useState: function() {
        V = "useState", P();
        var e = Y.H;
        Y.H = Hu;
        try {
          return Ua(et);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", P(), wf(e, t);
      },
      useTransition: function() {
        return V = "useTransition", P(), Mr();
      },
      useSyncExternalStore: function(e, t, a) {
        return V = "useSyncExternalStore", P(), Mf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return V = "useId", P(), ke().memoizedState;
      },
      useFormState: function(e) {
        return V = "useFormState", P(), eo(), Sr(e);
      },
      useActionState: function(e) {
        return V = "useActionState", P(), Sr(e);
      },
      useOptimistic: function(e, t) {
        return V = "useOptimistic", P(), hu(e, t);
      },
      useHostTransitionStatus: kl,
      useMemoCache: Vt,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", P(), ke().memoizedState;
      }
    }, Jb = {
      readContext: function(e) {
        return bt(e);
      },
      use: Sn,
      useCallback: function(e, t) {
        return V = "useCallback", P(), tc(e, t);
      },
      useContext: function(e) {
        return V = "useContext", P(), bt(e);
      },
      useEffect: function(e, t) {
        V = "useEffect", P(), kt(2048, Tl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return V = "useImperativeHandle", P(), An(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return V = "useInsertionEffect", P(), kt(4, Sa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", P(), kt(4, Ll, e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", P();
        var a = Y.H;
        Y.H = K0;
        try {
          return ai(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        V = "useReducer", P();
        var i = Y.H;
        Y.H = K0;
        try {
          return ec(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return V = "useRef", P(), ke().memoizedState;
      },
      useState: function() {
        V = "useState", P();
        var e = Y.H;
        Y.H = K0;
        try {
          return ec(et);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", P(), Dr(e, t);
      },
      useTransition: function() {
        return V = "useTransition", P(), Ur();
      },
      useSyncExternalStore: function(e, t, a) {
        return V = "useSyncExternalStore", P(), Mf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return V = "useId", P(), ke().memoizedState;
      },
      useFormState: function(e) {
        return V = "useFormState", P(), eo(), co(e);
      },
      useActionState: function(e) {
        return V = "useActionState", P(), co(e);
      },
      useOptimistic: function(e, t) {
        return V = "useOptimistic", P(), br(e, t);
      },
      useHostTransitionStatus: kl,
      useMemoCache: Vt,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", P(), ke().memoizedState;
      }
    }, Di = {
      readContext: function(e) {
        return I(), bt(e);
      },
      use: function(e) {
        return G(), Sn(e);
      },
      useCallback: function(e, t) {
        return V = "useCallback", G(), Ye(), Nf(e, t);
      },
      useContext: function(e) {
        return V = "useContext", G(), Ye(), bt(e);
      },
      useEffect: function(e, t) {
        return V = "useEffect", G(), Ye(), Tr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return V = "useImperativeHandle", G(), Ye(), Ar(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        V = "useInsertionEffect", G(), Ye(), Ca(4, Sa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", G(), Ye(), Er(e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", G(), Ye();
        var a = Y.H;
        Y.H = Di;
        try {
          return Rr(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        V = "useReducer", G(), Ye();
        var i = Y.H;
        Y.H = Di;
        try {
          return Ie(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function(e) {
        return V = "useRef", G(), Ye(), Hf(e);
      },
      useState: function(e) {
        V = "useState", G(), Ye();
        var t = Y.H;
        Y.H = Di;
        try {
          return du(e);
        } finally {
          Y.H = t;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", G(), Ye();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", G(), Ye(), Or(e, t);
      },
      useTransition: function() {
        return V = "useTransition", G(), Ye(), Rn();
      },
      useSyncExternalStore: function(e, t, a) {
        return V = "useSyncExternalStore", G(), Ye(), ru(
          e,
          t,
          a
        );
      },
      useId: function() {
        return V = "useId", G(), Ye(), On();
      },
      useFormState: function(e, t) {
        return V = "useFormState", G(), Ye(), io(e, t);
      },
      useActionState: function(e, t) {
        return V = "useActionState", G(), Ye(), io(e, t);
      },
      useOptimistic: function(e) {
        return V = "useOptimistic", G(), Ye(), Pa(e);
      },
      useMemoCache: function(e) {
        return G(), Vt(e);
      },
      useHostTransitionStatus: kl,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", Ye(), ac();
      }
    }, Hu = {
      readContext: function(e) {
        return I(), bt(e);
      },
      use: function(e) {
        return G(), Sn(e);
      },
      useCallback: function(e, t) {
        return V = "useCallback", G(), P(), tc(e, t);
      },
      useContext: function(e) {
        return V = "useContext", G(), P(), bt(e);
      },
      useEffect: function(e, t) {
        V = "useEffect", G(), P(), kt(2048, Tl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return V = "useImperativeHandle", G(), P(), An(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return V = "useInsertionEffect", G(), P(), kt(4, Sa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", G(), P(), kt(4, Ll, e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", G(), P();
        var a = Y.H;
        Y.H = Hu;
        try {
          return ai(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        V = "useReducer", G(), P();
        var i = Y.H;
        Y.H = Hu;
        try {
          return Ua(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return V = "useRef", G(), P(), ke().memoizedState;
      },
      useState: function() {
        V = "useState", G(), P();
        var e = Y.H;
        Y.H = Hu;
        try {
          return Ua(et);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", G(), P();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", G(), P(), wf(e, t);
      },
      useTransition: function() {
        return V = "useTransition", G(), P(), Mr();
      },
      useSyncExternalStore: function(e, t, a) {
        return V = "useSyncExternalStore", G(), P(), Mf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return V = "useId", G(), P(), ke().memoizedState;
      },
      useFormState: function(e) {
        return V = "useFormState", G(), P(), Sr(e);
      },
      useActionState: function(e) {
        return V = "useActionState", G(), P(), Sr(e);
      },
      useOptimistic: function(e, t) {
        return V = "useOptimistic", G(), P(), hu(e, t);
      },
      useMemoCache: function(e) {
        return G(), Vt(e);
      },
      useHostTransitionStatus: kl,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", P(), ke().memoizedState;
      }
    }, K0 = {
      readContext: function(e) {
        return I(), bt(e);
      },
      use: function(e) {
        return G(), Sn(e);
      },
      useCallback: function(e, t) {
        return V = "useCallback", G(), P(), tc(e, t);
      },
      useContext: function(e) {
        return V = "useContext", G(), P(), bt(e);
      },
      useEffect: function(e, t) {
        V = "useEffect", G(), P(), kt(2048, Tl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return V = "useImperativeHandle", G(), P(), An(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return V = "useInsertionEffect", G(), P(), kt(4, Sa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return V = "useLayoutEffect", G(), P(), kt(4, Ll, e, t);
      },
      useMemo: function(e, t) {
        V = "useMemo", G(), P();
        var a = Y.H;
        Y.H = Hu;
        try {
          return ai(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        V = "useReducer", G(), P();
        var i = Y.H;
        Y.H = Hu;
        try {
          return ec(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return V = "useRef", G(), P(), ke().memoizedState;
      },
      useState: function() {
        V = "useState", G(), P();
        var e = Y.H;
        Y.H = Hu;
        try {
          return ec(et);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        V = "useDebugValue", G(), P();
      },
      useDeferredValue: function(e, t) {
        return V = "useDeferredValue", G(), P(), Dr(e, t);
      },
      useTransition: function() {
        return V = "useTransition", G(), P(), Ur();
      },
      useSyncExternalStore: function(e, t, a) {
        return V = "useSyncExternalStore", G(), P(), Mf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return V = "useId", G(), P(), ke().memoizedState;
      },
      useFormState: function(e) {
        return V = "useFormState", G(), P(), co(e);
      },
      useActionState: function(e) {
        return V = "useActionState", G(), P(), co(e);
      },
      useOptimistic: function(e, t) {
        return V = "useOptimistic", G(), P(), br(e, t);
      },
      useMemoCache: function(e) {
        return G(), Vt(e);
      },
      useHostTransitionStatus: kl,
      useCacheRefresh: function() {
        return V = "useCacheRefresh", P(), ke().memoizedState;
      }
    };
    var Kb = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = aa;
        aa = !0;
        try {
          return e(t, a);
        } finally {
          aa = i;
        }
      }
    }, bv = Kb["react-stack-bottom-frame"].bind(Kb), kb = {
      "react-stack-bottom-frame": function(e) {
        var t = aa;
        aa = !0;
        try {
          return e.render();
        } finally {
          aa = t;
        }
      }
    }, $b = kb["react-stack-bottom-frame"].bind(kb), Wb = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Ee(e, e.return, a);
        }
      }
    }, Sv = Wb["react-stack-bottom-frame"].bind(Wb), Fb = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Ee(e, e.return, f);
        }
      }
    }, Ib = Fb["react-stack-bottom-frame"].bind(Fb), Pb = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, XT = Pb["react-stack-bottom-frame"].bind(Pb), e1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Ee(e, t, i);
        }
      }
    }, t1 = e1["react-stack-bottom-frame"].bind(e1), l1 = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, QT = l1["react-stack-bottom-frame"].bind(l1), a1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          Ee(e, t, i);
        }
      }
    }, ZT = a1["react-stack-bottom-frame"].bind(a1), n1 = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Jo = n1["react-stack-bottom-frame"].bind(n1), ah = null, Ky = 0, Ve = null, Tv, u1 = Tv = !1, i1 = {}, c1 = {}, o1 = {};
    k = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = me(e), o = i || "null";
        if (!i1[o]) {
          i1[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = me(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = me(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), fe(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var nh = Yf(!0), f1 = Yf(!1), In = xt(null), zi = null, uh = 1, ky = 2, El = xt(0), s1 = {}, r1 = /* @__PURE__ */ new Set(), d1 = /* @__PURE__ */ new Set(), h1 = /* @__PURE__ */ new Set(), m1 = /* @__PURE__ */ new Set(), y1 = /* @__PURE__ */ new Set(), p1 = /* @__PURE__ */ new Set(), g1 = /* @__PURE__ */ new Set(), v1 = /* @__PURE__ */ new Set(), b1 = /* @__PURE__ */ new Set(), S1 = /* @__PURE__ */ new Set();
    Object.freeze(s1);
    var Ev = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Fl(e), o = vn(i);
        o.payload = t, a != null && (sm(a), o.callback = a), t = Wa(e, o, i), t !== null && (wt(t, e, i), Iu(t, e, i)), Ci(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Fl(e), o = vn(i);
        o.tag = jb, o.payload = t, a != null && (sm(a), o.callback = a), t = Wa(e, o, i), t !== null && (wt(t, e, i), Iu(t, e, i)), Ci(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Fl(e), i = vn(a);
        i.tag = Vb, t != null && (sm(t), i.callback = t), t = Wa(e, i, a), t !== null && (wt(t, e, a), Iu(t, e, a)), ie !== null && typeof ie.markForceUpdateScheduled == "function" && ie.markForceUpdateScheduled(e, a);
      }
    }, Av = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, ih = null, Rv = null, T1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Ul = !1, E1 = {}, A1 = {}, R1 = {}, O1 = {}, ch = !1, D1 = {}, Ov = {}, Dv = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, z1 = !1, M1 = null;
    M1 = /* @__PURE__ */ new Set();
    var Nc = !1, Ft = !1, zv = !1, U1 = typeof WeakSet == "function" ? WeakSet : Set, xl = null, oh = null, fh = null, fl = null, La = !1, Nu = null, $y = 8192, JT = {
      getCacheForType: function(e) {
        var t = bt(Sl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return ga;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Wy = Symbol.for;
      Wy("selector.component"), Wy("selector.has_pseudo_class"), Wy("selector.role"), Wy("selector.test_id"), Wy("selector.text");
    }
    var KT = [], kT = typeof WeakMap == "function" ? WeakMap : Map, cn = 0, Ta = 2, wu = 4, wc = 0, Fy = 1, sh = 2, Mv = 3, Bs = 4, k0 = 6, x1 = 5, rt = cn, St = null, Ze = null, Je = 0, Ga = 0, Iy = 1, qs = 2, Py = 3, C1 = 4, Uv = 5, rh = 6, ep = 7, xv = 8, _s = 9, mt = Ga, on = null, Ko = !1, dh = !1, Cv = !1, Mi = 0, Xt = wc, ko = 0, $o = 0, Hv = 0, fn = 0, Ys = 0, tp = null, Ea = null, $0 = !1, Nv = 0, H1 = 300, W0 = 1 / 0, N1 = 500, lp = null, Wo = null, $T = 0, WT = 1, FT = 2, js = 0, w1 = 1, B1 = 2, q1 = 3, IT = 4, wv = 5, Gl = 0, Fo = null, hh = null, Io = 0, Bv = 0, qv = null, _1 = null, PT = 50, ap = 0, _v = null, Yv = !1, F0 = !1, e2 = 50, Vs = 0, np = null, mh = !1, I0 = null, Y1 = !1, j1 = /* @__PURE__ */ new Set(), t2 = {}, P0 = null, yh = null, jv = !1, Vv = !1, eg = !1, Lv = !1, Ls = 0, Gv = {};
    (function() {
      for (var e = 0; e < nv.length; e++) {
        var t = nv[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Za(a, "on" + t);
      }
      Za(Ab, "onAnimationEnd"), Za(Rb, "onAnimationIteration"), Za(Ob, "onAnimationStart"), Za("dblclick", "onDoubleClick"), Za("focusin", "onFocus"), Za("focusout", "onBlur"), Za(HT, "onTransitionRun"), Za(NT, "onTransitionStart"), Za(wT, "onTransitionCancel"), Za(Db, "onTransitionEnd");
    })(), Ni("onMouseEnter", ["mouseout", "mouseover"]), Ni("onMouseLeave", ["mouseout", "mouseover"]), Ni("onPointerEnter", ["pointerout", "pointerover"]), Ni("onPointerLeave", ["pointerout", "pointerover"]), Yu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Yu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Yu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Yu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Yu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Yu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var up = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), Xv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(up)
    ), tg = "_reactListening" + Math.random().toString(36).slice(2), V1 = !1, L1 = !1, lg = !1, G1 = !1, ag = !1, ng = !1, X1 = !1, ug = {}, l2 = /\r\n?/g, a2 = /\u0000|\uFFFD/g, Gs = "http://www.w3.org/1999/xlink", Qv = "http://www.w3.org/XML/1998/namespace", n2 = "javascript:throw new Error('React form unexpectedly submitted.')", u2 = "suppressHydrationWarning", ig = "$", cg = "/$", Bc = "$?", ip = "$!", i2 = 1, c2 = 2, o2 = 4, Zv = "F!", Q1 = "F", Z1 = "complete", f2 = "style", qc = 0, ph = 1, og = 2, Jv = null, Kv = null, J1 = { dialog: !0, webview: !0 }, kv = null, K1 = typeof setTimeout == "function" ? setTimeout : void 0, s2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Xs = -1, k1 = typeof Promise == "function" ? Promise : void 0, r2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof k1 < "u" ? function(e) {
      return k1.resolve(null).then(e).catch(Wm);
    } : K1, $v = null, Qs = 0, cp = 1, $1 = 2, W1 = 3, Pn = 4, eu = /* @__PURE__ */ new Map(), F1 = /* @__PURE__ */ new Set(), _c = Re.d;
    Re.d = {
      f: function() {
        var e = _c.f(), t = hc();
        return e || t;
      },
      r: function(e) {
        var t = ca(e);
        t !== null && t.tag === 5 && t.type === "form" ? cm(t) : _c.r(e);
      },
      D: function(e) {
        _c.D(e), d0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        _c.C(e, t), d0("preconnect", e, t);
      },
      L: function(e, t, a) {
        _c.L(e, t, a);
        var i = gh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + oa(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + oa(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + oa(
            a.imageSizes
          ) + '"]')) : o += '[href="' + oa(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = hi(e);
              break;
            case "script":
              f = Sc(e);
          }
          eu.has(f) || (e = qe(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), eu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            jn(f)
          ) || t === "script" && i.querySelector(Tc(f)) || (t = i.createElement("link"), qt(t, "link", e), tl(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        _c.m(e, t);
        var a = gh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + oa(i) + '"][href="' + oa(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Sc(e);
          }
          if (!eu.has(f) && (e = qe({ rel: "modulepreload", href: e }, t), eu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Tc(f)))
                  return;
            }
            i = a.createElement("link"), qt(i, "link", e), tl(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        _c.X(e, t);
        var a = gh;
        if (a && e) {
          var i = rn(a).hoistableScripts, o = Sc(e), f = i.get(o);
          f || (f = a.querySelector(
            Tc(o)
          ), f || (e = qe({ src: e, async: !0 }, t), (t = eu.get(o)) && ny(e, t), f = a.createElement("script"), tl(f), qt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        _c.S(e, t, a);
        var i = gh;
        if (i && e) {
          var o = rn(i).hoistableStyles, f = hi(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var m = { loading: Qs, preload: null };
            if (d = i.querySelector(
              jn(f)
            ))
              m.loading = cp | Pn;
            else {
              e = qe(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = eu.get(f)) && ay(e, a);
              var S = d = i.createElement("link");
              tl(S), qt(S, "link", e), S._p = new Promise(function(T, q) {
                S.onload = T, S.onerror = q;
              }), S.addEventListener("load", function() {
                m.loading |= cp;
              }), S.addEventListener("error", function() {
                m.loading |= $1;
              }), m.loading |= Pn, Sd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: m
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        _c.M(e, t);
        var a = gh;
        if (a && e) {
          var i = rn(a).hoistableScripts, o = Sc(e), f = i.get(o);
          f || (f = a.querySelector(
            Tc(o)
          ), f || (e = qe({ src: e, async: !0, type: "module" }, t), (t = eu.get(o)) && ny(e, t), f = a.createElement("script"), tl(f), qt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var gh = typeof document > "u" ? null : document, fg = null, op = null, Wv = null, sg = null, Zs = Kg, fp = {
      $$typeof: _a,
      Provider: null,
      Consumer: null,
      _currentValue: Zs,
      _currentValue2: Zs,
      _threadCount: 0
    }, I1 = "%c%s%c ", P1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", eS = "", rg = " ", d2 = Function.prototype.bind, tS = !1, lS = null, aS = null, nS = null, uS = null, iS = null, cS = null, oS = null, fS = null, sS = null;
    lS = function(e, t, a, i) {
      t = h(e, t), t !== null && (a = p(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = qe({}, e.memoizedProps), a = Ql(e, 2), a !== null && wt(a, e, 2));
    }, aS = function(e, t, a) {
      t = h(e, t), t !== null && (a = E(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = qe({}, e.memoizedProps), a = Ql(e, 2), a !== null && wt(a, e, 2));
    }, nS = function(e, t, a, i) {
      t = h(e, t), t !== null && (a = b(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = qe({}, e.memoizedProps), a = Ql(e, 2), a !== null && wt(a, e, 2));
    }, uS = function(e, t, a) {
      e.pendingProps = p(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ql(e, 2), t !== null && wt(t, e, 2);
    }, iS = function(e, t) {
      e.pendingProps = E(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ql(e, 2), t !== null && wt(t, e, 2);
    }, cS = function(e, t, a) {
      e.pendingProps = b(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ql(e, 2), t !== null && wt(t, e, 2);
    }, oS = function(e) {
      var t = Ql(e, 2);
      t !== null && wt(t, e, 2);
    }, fS = function(e) {
      x = e;
    }, sS = function(e) {
      D = e;
    };
    var dg = !0, hg = null, Fv = !1, Po = null, ef = null, tf = null, sp = /* @__PURE__ */ new Map(), rp = /* @__PURE__ */ new Map(), lf = [], h2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), mg = null;
    if (rs.prototype.render = Dd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : le(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = Fl(i);
      st(i, o, a, t, null, null);
    }, rs.prototype.unmount = Dd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (rt & (Ta | wu)) !== cn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), st(e.current, 2, null, e, null, null), hc(), t[Ti] = null;
      }
    }, rs.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Ap();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < lf.length && t !== 0 && t < lf[a].priority; a++) ;
        lf.splice(a, 0, e), a === 0 && v0(e);
      }
    }, function() {
      var e = ds.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Re.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Pe(t), e = e !== null ? ft(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: Y,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = lS, e.overrideHookStateDeletePath = aS, e.overrideHookStateRenamePath = nS, e.overrideProps = uS, e.overridePropsDeletePath = iS, e.overridePropsRenamePath = cS, e.scheduleUpdate = oS, e.setErrorHandler = fS, e.setSuspenseHandler = sS, e.scheduleRefresh = ae, e.scheduleRoot = pe, e.setRefreshHandler = he, e.getCurrentFiber = Xg, e.getLaneLabelMap = Qg, e.injectProfilingHooks = qu, pt(e);
    }() && A && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var rS = window.location.protocol;
      /^(https?|file):$/.test(rS) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (rS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    yp.createRoot = function(e, t) {
      if (!le(e))
        throw Error("Target container is not a DOM element.");
      T0(e);
      var a = !1, i = "", o = rm, f = Wp, d = Nr, m = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === pi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)), t = cy(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        m,
        null
      ), e[Ti] = t.current, Xm(e), new Dd(t);
    }, yp.hydrateRoot = function(e, t, a) {
      if (!le(e))
        throw Error("Target container is not a DOM element.");
      T0(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = rm, d = Wp, m = Nr, S = null, T = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (m = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (S = a.unstable_transitionCallbacks), a.formState !== void 0 && (T = a.formState)), t = cy(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        m,
        S,
        T
      ), t.context = oy(null), a = t.current, i = Fl(a), i = Hl(i), o = vn(i), o.callback = null, Wa(a, o, i), a = i, t.current.lanes = a, jc(t, a), wa(t), e[Ti] = t.current, Xm(e), new rs(t);
    }, yp.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), yp;
}
var TS;
function R2() {
  if (TS) return pg.exports;
  TS = 1;
  function h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (p) {
        console.error(p);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (h(), pg.exports = E2()) : pg.exports = A2(), pg.exports;
}
var O2 = R2();
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D2 = (h) => h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), z2 = (h) => h.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (p, b, g) => g ? g.toUpperCase() : b.toLowerCase()
), ES = (h) => {
  const p = z2(h);
  return p.charAt(0).toUpperCase() + p.slice(1);
}, jS = (...h) => h.filter((p, b, g) => !!p && p.trim() !== "" && g.indexOf(p) === b).join(" ").trim(), M2 = (h) => {
  for (const p in h)
    if (p.startsWith("aria-") || p === "role" || p === "title")
      return !0;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var U2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = qS(
  ({
    color: h = "currentColor",
    size: p = 24,
    strokeWidth: b = 2,
    absoluteStrokeWidth: g,
    className: E = "",
    children: D,
    iconNode: x,
    ...k
  }, G) => ab(
    "svg",
    {
      ref: G,
      ...U2,
      width: p,
      height: p,
      stroke: h,
      strokeWidth: g ? Number(b) * 24 / Number(p) : b,
      className: jS("lucide", E),
      ...!D && !M2(k) && { "aria-hidden": "true" },
      ...k
    },
    [
      ...x.map(([I, W]) => ab(I, W)),
      ...Array.isArray(D) ? D : [D]
    ]
  )
);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = (h, p) => {
  const b = qS(
    ({ className: g, ...E }, D) => ab(x2, {
      ref: D,
      iconNode: p,
      className: jS(
        `lucide-${D2(ES(h))}`,
        `lucide-${h}`,
        g
      ),
      ...E
    })
  );
  return b.displayName = ES(h), b;
};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C2 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
], H2 = Ag("clipboard-check", C2);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N2 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
], w2 = Ag("clipboard", N2);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B2 = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], q2 = Ag("download", B2);
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _2 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Y2 = Ag("x", _2);
function VS(h, p) {
  return function() {
    return h.apply(p, arguments);
  };
}
const { toString: j2 } = Object.prototype, { getPrototypeOf: rb } = Object, Rg = /* @__PURE__ */ ((h) => (p) => {
  const b = j2.call(p);
  return h[b] || (h[b] = b.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Bu = (h) => (h = h.toLowerCase(), (p) => Rg(p) === h), Og = (h) => (p) => typeof p === h, { isArray: vh } = Array, vp = Og("undefined");
function V2(h) {
  return h !== null && !vp(h) && h.constructor !== null && !vp(h.constructor) && sn(h.constructor.isBuffer) && h.constructor.isBuffer(h);
}
const LS = Bu("ArrayBuffer");
function L2(h) {
  let p;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? p = ArrayBuffer.isView(h) : p = h && h.buffer && LS(h.buffer), p;
}
const G2 = Og("string"), sn = Og("function"), GS = Og("number"), Dg = (h) => h !== null && typeof h == "object", X2 = (h) => h === !0 || h === !1, vg = (h) => {
  if (Rg(h) !== "object")
    return !1;
  const p = rb(h);
  return (p === null || p === Object.prototype || Object.getPrototypeOf(p) === null) && !(Symbol.toStringTag in h) && !(Symbol.iterator in h);
}, Q2 = Bu("Date"), Z2 = Bu("File"), J2 = Bu("Blob"), K2 = Bu("FileList"), k2 = (h) => Dg(h) && sn(h.pipe), $2 = (h) => {
  let p;
  return h && (typeof FormData == "function" && h instanceof FormData || sn(h.append) && ((p = Rg(h)) === "formdata" || // detect form-data instance
  p === "object" && sn(h.toString) && h.toString() === "[object FormData]"));
}, W2 = Bu("URLSearchParams"), [F2, I2, P2, eE] = ["ReadableStream", "Request", "Response", "Headers"].map(Bu), tE = (h) => h.trim ? h.trim() : h.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function bp(h, p, { allOwnKeys: b = !1 } = {}) {
  if (h === null || typeof h > "u")
    return;
  let g, E;
  if (typeof h != "object" && (h = [h]), vh(h))
    for (g = 0, E = h.length; g < E; g++)
      p.call(null, h[g], g, h);
  else {
    const D = b ? Object.getOwnPropertyNames(h) : Object.keys(h), x = D.length;
    let k;
    for (g = 0; g < x; g++)
      k = D[g], p.call(null, h[k], k, h);
  }
}
function XS(h, p) {
  p = p.toLowerCase();
  const b = Object.keys(h);
  let g = b.length, E;
  for (; g-- > 0; )
    if (E = b[g], p === E.toLowerCase())
      return E;
  return null;
}
const Js = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, QS = (h) => !vp(h) && h !== Js;
function nb() {
  const { caseless: h } = QS(this) && this || {}, p = {}, b = (g, E) => {
    const D = h && XS(p, E) || E;
    vg(p[D]) && vg(g) ? p[D] = nb(p[D], g) : vg(g) ? p[D] = nb({}, g) : vh(g) ? p[D] = g.slice() : p[D] = g;
  };
  for (let g = 0, E = arguments.length; g < E; g++)
    arguments[g] && bp(arguments[g], b);
  return p;
}
const lE = (h, p, b, { allOwnKeys: g } = {}) => (bp(p, (E, D) => {
  b && sn(E) ? h[D] = VS(E, b) : h[D] = E;
}, { allOwnKeys: g }), h), aE = (h) => (h.charCodeAt(0) === 65279 && (h = h.slice(1)), h), nE = (h, p, b, g) => {
  h.prototype = Object.create(p.prototype, g), h.prototype.constructor = h, Object.defineProperty(h, "super", {
    value: p.prototype
  }), b && Object.assign(h.prototype, b);
}, uE = (h, p, b, g) => {
  let E, D, x;
  const k = {};
  if (p = p || {}, h == null) return p;
  do {
    for (E = Object.getOwnPropertyNames(h), D = E.length; D-- > 0; )
      x = E[D], (!g || g(x, h, p)) && !k[x] && (p[x] = h[x], k[x] = !0);
    h = b !== !1 && rb(h);
  } while (h && (!b || b(h, p)) && h !== Object.prototype);
  return p;
}, iE = (h, p, b) => {
  h = String(h), (b === void 0 || b > h.length) && (b = h.length), b -= p.length;
  const g = h.indexOf(p, b);
  return g !== -1 && g === b;
}, cE = (h) => {
  if (!h) return null;
  if (vh(h)) return h;
  let p = h.length;
  if (!GS(p)) return null;
  const b = new Array(p);
  for (; p-- > 0; )
    b[p] = h[p];
  return b;
}, oE = /* @__PURE__ */ ((h) => (p) => h && p instanceof h)(typeof Uint8Array < "u" && rb(Uint8Array)), fE = (h, p) => {
  const g = (h && h[Symbol.iterator]).call(h);
  let E;
  for (; (E = g.next()) && !E.done; ) {
    const D = E.value;
    p.call(h, D[0], D[1]);
  }
}, sE = (h, p) => {
  let b;
  const g = [];
  for (; (b = h.exec(p)) !== null; )
    g.push(b);
  return g;
}, rE = Bu("HTMLFormElement"), dE = (h) => h.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(b, g, E) {
    return g.toUpperCase() + E;
  }
), AS = (({ hasOwnProperty: h }) => (p, b) => h.call(p, b))(Object.prototype), hE = Bu("RegExp"), ZS = (h, p) => {
  const b = Object.getOwnPropertyDescriptors(h), g = {};
  bp(b, (E, D) => {
    let x;
    (x = p(E, D, h)) !== !1 && (g[D] = x || E);
  }), Object.defineProperties(h, g);
}, mE = (h) => {
  ZS(h, (p, b) => {
    if (sn(h) && ["arguments", "caller", "callee"].indexOf(b) !== -1)
      return !1;
    const g = h[b];
    if (sn(g)) {
      if (p.enumerable = !1, "writable" in p) {
        p.writable = !1;
        return;
      }
      p.set || (p.set = () => {
        throw Error("Can not rewrite read-only method '" + b + "'");
      });
    }
  });
}, yE = (h, p) => {
  const b = {}, g = (E) => {
    E.forEach((D) => {
      b[D] = !0;
    });
  };
  return vh(h) ? g(h) : g(String(h).split(p)), b;
}, pE = () => {
}, gE = (h, p) => h != null && Number.isFinite(h = +h) ? h : p;
function vE(h) {
  return !!(h && sn(h.append) && h[Symbol.toStringTag] === "FormData" && h[Symbol.iterator]);
}
const bE = (h) => {
  const p = new Array(10), b = (g, E) => {
    if (Dg(g)) {
      if (p.indexOf(g) >= 0)
        return;
      if (!("toJSON" in g)) {
        p[E] = g;
        const D = vh(g) ? [] : {};
        return bp(g, (x, k) => {
          const G = b(x, E + 1);
          !vp(G) && (D[k] = G);
        }), p[E] = void 0, D;
      }
    }
    return g;
  };
  return b(h, 0);
}, SE = Bu("AsyncFunction"), TE = (h) => h && (Dg(h) || sn(h)) && sn(h.then) && sn(h.catch), JS = ((h, p) => h ? setImmediate : p ? ((b, g) => (Js.addEventListener("message", ({ source: E, data: D }) => {
  E === Js && D === b && g.length && g.shift()();
}, !1), (E) => {
  g.push(E), Js.postMessage(b, "*");
}))(`axios@${Math.random()}`, []) : (b) => setTimeout(b))(
  typeof setImmediate == "function",
  sn(Js.postMessage)
), EE = typeof queueMicrotask < "u" ? queueMicrotask.bind(Js) : typeof process < "u" && process.nextTick || JS, Q = {
  isArray: vh,
  isArrayBuffer: LS,
  isBuffer: V2,
  isFormData: $2,
  isArrayBufferView: L2,
  isString: G2,
  isNumber: GS,
  isBoolean: X2,
  isObject: Dg,
  isPlainObject: vg,
  isReadableStream: F2,
  isRequest: I2,
  isResponse: P2,
  isHeaders: eE,
  isUndefined: vp,
  isDate: Q2,
  isFile: Z2,
  isBlob: J2,
  isRegExp: hE,
  isFunction: sn,
  isStream: k2,
  isURLSearchParams: W2,
  isTypedArray: oE,
  isFileList: K2,
  forEach: bp,
  merge: nb,
  extend: lE,
  trim: tE,
  stripBOM: aE,
  inherits: nE,
  toFlatObject: uE,
  kindOf: Rg,
  kindOfTest: Bu,
  endsWith: iE,
  toArray: cE,
  forEachEntry: fE,
  matchAll: sE,
  isHTMLForm: rE,
  hasOwnProperty: AS,
  hasOwnProp: AS,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ZS,
  freezeMethods: mE,
  toObjectSet: yE,
  toCamelCase: dE,
  noop: pE,
  toFiniteNumber: gE,
  findKey: XS,
  global: Js,
  isContextDefined: QS,
  isSpecCompliantForm: vE,
  toJSONObject: bE,
  isAsyncFn: SE,
  isThenable: TE,
  setImmediate: JS,
  asap: EE
};
function _e(h, p, b, g, E) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = h, this.name = "AxiosError", p && (this.code = p), b && (this.config = b), g && (this.request = g), E && (this.response = E, this.status = E.status ? E.status : null);
}
Q.inherits(_e, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: Q.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const KS = _e.prototype, kS = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((h) => {
  kS[h] = { value: h };
});
Object.defineProperties(_e, kS);
Object.defineProperty(KS, "isAxiosError", { value: !0 });
_e.from = (h, p, b, g, E, D) => {
  const x = Object.create(KS);
  return Q.toFlatObject(h, x, function(G) {
    return G !== Error.prototype;
  }, (k) => k !== "isAxiosError"), _e.call(x, h.message, p, b, g, E), x.cause = h, x.name = h.name, D && Object.assign(x, D), x;
};
const AE = null;
function ub(h) {
  return Q.isPlainObject(h) || Q.isArray(h);
}
function $S(h) {
  return Q.endsWith(h, "[]") ? h.slice(0, -2) : h;
}
function RS(h, p, b) {
  return h ? h.concat(p).map(function(E, D) {
    return E = $S(E), !b && D ? "[" + E + "]" : E;
  }).join(b ? "." : "") : p;
}
function RE(h) {
  return Q.isArray(h) && !h.some(ub);
}
const OE = Q.toFlatObject(Q, {}, null, function(p) {
  return /^is[A-Z]/.test(p);
});
function zg(h, p, b) {
  if (!Q.isObject(h))
    throw new TypeError("target must be an object");
  p = p || new FormData(), b = Q.toFlatObject(b, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(he, le) {
    return !Q.isUndefined(le[he]);
  });
  const g = b.metaTokens, E = b.visitor || W, D = b.dots, x = b.indexes, G = (b.Blob || typeof Blob < "u" && Blob) && Q.isSpecCompliantForm(p);
  if (!Q.isFunction(E))
    throw new TypeError("visitor must be a function");
  function I(ae) {
    if (ae === null) return "";
    if (Q.isDate(ae))
      return ae.toISOString();
    if (!G && Q.isBlob(ae))
      throw new _e("Blob is not supported. Use a Buffer instead.");
    return Q.isArrayBuffer(ae) || Q.isTypedArray(ae) ? G && typeof Blob == "function" ? new Blob([ae]) : Buffer.from(ae) : ae;
  }
  function W(ae, he, le) {
    let Se = ae;
    if (ae && !le && typeof ae == "object") {
      if (Q.endsWith(he, "{}"))
        he = g ? he : he.slice(0, -2), ae = JSON.stringify(ae);
      else if (Q.isArray(ae) && RE(ae) || (Q.isFileList(ae) || Q.endsWith(he, "[]")) && (Se = Q.toArray(ae)))
        return he = $S(he), Se.forEach(function(Me, Pe) {
          !(Q.isUndefined(Me) || Me === null) && p.append(
            // eslint-disable-next-line no-nested-ternary
            x === !0 ? RS([he], Pe, D) : x === null ? he : he + "[]",
            I(Me)
          );
        }), !1;
    }
    return ub(ae) ? !0 : (p.append(RS(le, he, D), I(ae)), !1);
  }
  const te = [], ce = Object.assign(OE, {
    defaultVisitor: W,
    convertValue: I,
    isVisitable: ub
  });
  function pe(ae, he) {
    if (!Q.isUndefined(ae)) {
      if (te.indexOf(ae) !== -1)
        throw Error("Circular reference detected in " + he.join("."));
      te.push(ae), Q.forEach(ae, function(Se, We) {
        (!(Q.isUndefined(Se) || Se === null) && E.call(
          p,
          Se,
          Q.isString(We) ? We.trim() : We,
          he,
          ce
        )) === !0 && pe(Se, he ? he.concat(We) : [We]);
      }), te.pop();
    }
  }
  if (!Q.isObject(h))
    throw new TypeError("data must be an object");
  return pe(h), p;
}
function OS(h) {
  const p = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(h).replace(/[!'()~]|%20|%00/g, function(g) {
    return p[g];
  });
}
function db(h, p) {
  this._pairs = [], h && zg(h, this, p);
}
const WS = db.prototype;
WS.append = function(p, b) {
  this._pairs.push([p, b]);
};
WS.toString = function(p) {
  const b = p ? function(g) {
    return p.call(this, g, OS);
  } : OS;
  return this._pairs.map(function(E) {
    return b(E[0]) + "=" + b(E[1]);
  }, "").join("&");
};
function DE(h) {
  return encodeURIComponent(h).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function FS(h, p, b) {
  if (!p)
    return h;
  const g = b && b.encode || DE;
  Q.isFunction(b) && (b = {
    serialize: b
  });
  const E = b && b.serialize;
  let D;
  if (E ? D = E(p, b) : D = Q.isURLSearchParams(p) ? p.toString() : new db(p, b).toString(g), D) {
    const x = h.indexOf("#");
    x !== -1 && (h = h.slice(0, x)), h += (h.indexOf("?") === -1 ? "?" : "&") + D;
  }
  return h;
}
class DS {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(p, b, g) {
    return this.handlers.push({
      fulfilled: p,
      rejected: b,
      synchronous: g ? g.synchronous : !1,
      runWhen: g ? g.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(p) {
    this.handlers[p] && (this.handlers[p] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(p) {
    Q.forEach(this.handlers, function(g) {
      g !== null && p(g);
    });
  }
}
const IS = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zE = typeof URLSearchParams < "u" ? URLSearchParams : db, ME = typeof FormData < "u" ? FormData : null, UE = typeof Blob < "u" ? Blob : null, xE = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zE,
    FormData: ME,
    Blob: UE
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, hb = typeof window < "u" && typeof document < "u", ib = typeof navigator == "object" && navigator || void 0, CE = hb && (!ib || ["ReactNative", "NativeScript", "NS"].indexOf(ib.product) < 0), HE = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", NE = hb && window.location.href || "http://localhost", wE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: hb,
  hasStandardBrowserEnv: CE,
  hasStandardBrowserWebWorkerEnv: HE,
  navigator: ib,
  origin: NE
}, Symbol.toStringTag, { value: "Module" })), ua = {
  ...wE,
  ...xE
};
function BE(h, p) {
  return zg(h, new ua.classes.URLSearchParams(), Object.assign({
    visitor: function(b, g, E, D) {
      return ua.isNode && Q.isBuffer(b) ? (this.append(g, b.toString("base64")), !1) : D.defaultVisitor.apply(this, arguments);
    }
  }, p));
}
function qE(h) {
  return Q.matchAll(/\w+|\[(\w*)]/g, h).map((p) => p[0] === "[]" ? "" : p[1] || p[0]);
}
function _E(h) {
  const p = {}, b = Object.keys(h);
  let g;
  const E = b.length;
  let D;
  for (g = 0; g < E; g++)
    D = b[g], p[D] = h[D];
  return p;
}
function PS(h) {
  function p(b, g, E, D) {
    let x = b[D++];
    if (x === "__proto__") return !0;
    const k = Number.isFinite(+x), G = D >= b.length;
    return x = !x && Q.isArray(E) ? E.length : x, G ? (Q.hasOwnProp(E, x) ? E[x] = [E[x], g] : E[x] = g, !k) : ((!E[x] || !Q.isObject(E[x])) && (E[x] = []), p(b, g, E[x], D) && Q.isArray(E[x]) && (E[x] = _E(E[x])), !k);
  }
  if (Q.isFormData(h) && Q.isFunction(h.entries)) {
    const b = {};
    return Q.forEachEntry(h, (g, E) => {
      p(qE(g), E, b, 0);
    }), b;
  }
  return null;
}
function YE(h, p, b) {
  if (Q.isString(h))
    try {
      return (p || JSON.parse)(h), Q.trim(h);
    } catch (g) {
      if (g.name !== "SyntaxError")
        throw g;
    }
  return (b || JSON.stringify)(h);
}
const Sp = {
  transitional: IS,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(p, b) {
    const g = b.getContentType() || "", E = g.indexOf("application/json") > -1, D = Q.isObject(p);
    if (D && Q.isHTMLForm(p) && (p = new FormData(p)), Q.isFormData(p))
      return E ? JSON.stringify(PS(p)) : p;
    if (Q.isArrayBuffer(p) || Q.isBuffer(p) || Q.isStream(p) || Q.isFile(p) || Q.isBlob(p) || Q.isReadableStream(p))
      return p;
    if (Q.isArrayBufferView(p))
      return p.buffer;
    if (Q.isURLSearchParams(p))
      return b.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), p.toString();
    let k;
    if (D) {
      if (g.indexOf("application/x-www-form-urlencoded") > -1)
        return BE(p, this.formSerializer).toString();
      if ((k = Q.isFileList(p)) || g.indexOf("multipart/form-data") > -1) {
        const G = this.env && this.env.FormData;
        return zg(
          k ? { "files[]": p } : p,
          G && new G(),
          this.formSerializer
        );
      }
    }
    return D || E ? (b.setContentType("application/json", !1), YE(p)) : p;
  }],
  transformResponse: [function(p) {
    const b = this.transitional || Sp.transitional, g = b && b.forcedJSONParsing, E = this.responseType === "json";
    if (Q.isResponse(p) || Q.isReadableStream(p))
      return p;
    if (p && Q.isString(p) && (g && !this.responseType || E)) {
      const x = !(b && b.silentJSONParsing) && E;
      try {
        return JSON.parse(p);
      } catch (k) {
        if (x)
          throw k.name === "SyntaxError" ? _e.from(k, _e.ERR_BAD_RESPONSE, this, null, this.response) : k;
      }
    }
    return p;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ua.classes.FormData,
    Blob: ua.classes.Blob
  },
  validateStatus: function(p) {
    return p >= 200 && p < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
Q.forEach(["delete", "get", "head", "post", "put", "patch"], (h) => {
  Sp.headers[h] = {};
});
const jE = Q.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), VE = (h) => {
  const p = {};
  let b, g, E;
  return h && h.split(`
`).forEach(function(x) {
    E = x.indexOf(":"), b = x.substring(0, E).trim().toLowerCase(), g = x.substring(E + 1).trim(), !(!b || p[b] && jE[b]) && (b === "set-cookie" ? p[b] ? p[b].push(g) : p[b] = [g] : p[b] = p[b] ? p[b] + ", " + g : g);
  }), p;
}, zS = Symbol("internals");
function pp(h) {
  return h && String(h).trim().toLowerCase();
}
function bg(h) {
  return h === !1 || h == null ? h : Q.isArray(h) ? h.map(bg) : String(h);
}
function LE(h) {
  const p = /* @__PURE__ */ Object.create(null), b = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let g;
  for (; g = b.exec(h); )
    p[g[1]] = g[2];
  return p;
}
const GE = (h) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(h.trim());
function eb(h, p, b, g, E) {
  if (Q.isFunction(g))
    return g.call(this, p, b);
  if (E && (p = b), !!Q.isString(p)) {
    if (Q.isString(g))
      return p.indexOf(g) !== -1;
    if (Q.isRegExp(g))
      return g.test(p);
  }
}
function XE(h) {
  return h.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (p, b, g) => b.toUpperCase() + g);
}
function QE(h, p) {
  const b = Q.toCamelCase(" " + p);
  ["get", "set", "has"].forEach((g) => {
    Object.defineProperty(h, g + b, {
      value: function(E, D, x) {
        return this[g].call(this, p, E, D, x);
      },
      configurable: !0
    });
  });
}
let Xa = class {
  constructor(p) {
    p && this.set(p);
  }
  set(p, b, g) {
    const E = this;
    function D(k, G, I) {
      const W = pp(G);
      if (!W)
        throw new Error("header name must be a non-empty string");
      const te = Q.findKey(E, W);
      (!te || E[te] === void 0 || I === !0 || I === void 0 && E[te] !== !1) && (E[te || G] = bg(k));
    }
    const x = (k, G) => Q.forEach(k, (I, W) => D(I, W, G));
    if (Q.isPlainObject(p) || p instanceof this.constructor)
      x(p, b);
    else if (Q.isString(p) && (p = p.trim()) && !GE(p))
      x(VE(p), b);
    else if (Q.isHeaders(p))
      for (const [k, G] of p.entries())
        D(G, k, g);
    else
      p != null && D(b, p, g);
    return this;
  }
  get(p, b) {
    if (p = pp(p), p) {
      const g = Q.findKey(this, p);
      if (g) {
        const E = this[g];
        if (!b)
          return E;
        if (b === !0)
          return LE(E);
        if (Q.isFunction(b))
          return b.call(this, E, g);
        if (Q.isRegExp(b))
          return b.exec(E);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(p, b) {
    if (p = pp(p), p) {
      const g = Q.findKey(this, p);
      return !!(g && this[g] !== void 0 && (!b || eb(this, this[g], g, b)));
    }
    return !1;
  }
  delete(p, b) {
    const g = this;
    let E = !1;
    function D(x) {
      if (x = pp(x), x) {
        const k = Q.findKey(g, x);
        k && (!b || eb(g, g[k], k, b)) && (delete g[k], E = !0);
      }
    }
    return Q.isArray(p) ? p.forEach(D) : D(p), E;
  }
  clear(p) {
    const b = Object.keys(this);
    let g = b.length, E = !1;
    for (; g--; ) {
      const D = b[g];
      (!p || eb(this, this[D], D, p, !0)) && (delete this[D], E = !0);
    }
    return E;
  }
  normalize(p) {
    const b = this, g = {};
    return Q.forEach(this, (E, D) => {
      const x = Q.findKey(g, D);
      if (x) {
        b[x] = bg(E), delete b[D];
        return;
      }
      const k = p ? XE(D) : String(D).trim();
      k !== D && delete b[D], b[k] = bg(E), g[k] = !0;
    }), this;
  }
  concat(...p) {
    return this.constructor.concat(this, ...p);
  }
  toJSON(p) {
    const b = /* @__PURE__ */ Object.create(null);
    return Q.forEach(this, (g, E) => {
      g != null && g !== !1 && (b[E] = p && Q.isArray(g) ? g.join(", ") : g);
    }), b;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([p, b]) => p + ": " + b).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(p) {
    return p instanceof this ? p : new this(p);
  }
  static concat(p, ...b) {
    const g = new this(p);
    return b.forEach((E) => g.set(E)), g;
  }
  static accessor(p) {
    const g = (this[zS] = this[zS] = {
      accessors: {}
    }).accessors, E = this.prototype;
    function D(x) {
      const k = pp(x);
      g[k] || (QE(E, x), g[k] = !0);
    }
    return Q.isArray(p) ? p.forEach(D) : D(p), this;
  }
};
Xa.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
Q.reduceDescriptors(Xa.prototype, ({ value: h }, p) => {
  let b = p[0].toUpperCase() + p.slice(1);
  return {
    get: () => h,
    set(g) {
      this[b] = g;
    }
  };
});
Q.freezeMethods(Xa);
function tb(h, p) {
  const b = this || Sp, g = p || b, E = Xa.from(g.headers);
  let D = g.data;
  return Q.forEach(h, function(k) {
    D = k.call(b, D, E.normalize(), p ? p.status : void 0);
  }), E.normalize(), D;
}
function eT(h) {
  return !!(h && h.__CANCEL__);
}
function bh(h, p, b) {
  _e.call(this, h ?? "canceled", _e.ERR_CANCELED, p, b), this.name = "CanceledError";
}
Q.inherits(bh, _e, {
  __CANCEL__: !0
});
function tT(h, p, b) {
  const g = b.config.validateStatus;
  !b.status || !g || g(b.status) ? h(b) : p(new _e(
    "Request failed with status code " + b.status,
    [_e.ERR_BAD_REQUEST, _e.ERR_BAD_RESPONSE][Math.floor(b.status / 100) - 4],
    b.config,
    b.request,
    b
  ));
}
function ZE(h) {
  const p = /^([-+\w]{1,25})(:?\/\/|:)/.exec(h);
  return p && p[1] || "";
}
function JE(h, p) {
  h = h || 10;
  const b = new Array(h), g = new Array(h);
  let E = 0, D = 0, x;
  return p = p !== void 0 ? p : 1e3, function(G) {
    const I = Date.now(), W = g[D];
    x || (x = I), b[E] = G, g[E] = I;
    let te = D, ce = 0;
    for (; te !== E; )
      ce += b[te++], te = te % h;
    if (E = (E + 1) % h, E === D && (D = (D + 1) % h), I - x < p)
      return;
    const pe = W && I - W;
    return pe ? Math.round(ce * 1e3 / pe) : void 0;
  };
}
function KE(h, p) {
  let b = 0, g = 1e3 / p, E, D;
  const x = (I, W = Date.now()) => {
    b = W, E = null, D && (clearTimeout(D), D = null), h.apply(null, I);
  };
  return [(...I) => {
    const W = Date.now(), te = W - b;
    te >= g ? x(I, W) : (E = I, D || (D = setTimeout(() => {
      D = null, x(E);
    }, g - te)));
  }, () => E && x(E)];
}
const Tg = (h, p, b = 3) => {
  let g = 0;
  const E = JE(50, 250);
  return KE((D) => {
    const x = D.loaded, k = D.lengthComputable ? D.total : void 0, G = x - g, I = E(G), W = x <= k;
    g = x;
    const te = {
      loaded: x,
      total: k,
      progress: k ? x / k : void 0,
      bytes: G,
      rate: I || void 0,
      estimated: I && k && W ? (k - x) / I : void 0,
      event: D,
      lengthComputable: k != null,
      [p ? "download" : "upload"]: !0
    };
    h(te);
  }, b);
}, MS = (h, p) => {
  const b = h != null;
  return [(g) => p[0]({
    lengthComputable: b,
    total: h,
    loaded: g
  }), p[1]];
}, US = (h) => (...p) => Q.asap(() => h(...p)), kE = ua.hasStandardBrowserEnv ? /* @__PURE__ */ ((h, p) => (b) => (b = new URL(b, ua.origin), h.protocol === b.protocol && h.host === b.host && (p || h.port === b.port)))(
  new URL(ua.origin),
  ua.navigator && /(msie|trident)/i.test(ua.navigator.userAgent)
) : () => !0, $E = ua.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(h, p, b, g, E, D) {
      const x = [h + "=" + encodeURIComponent(p)];
      Q.isNumber(b) && x.push("expires=" + new Date(b).toGMTString()), Q.isString(g) && x.push("path=" + g), Q.isString(E) && x.push("domain=" + E), D === !0 && x.push("secure"), document.cookie = x.join("; ");
    },
    read(h) {
      const p = document.cookie.match(new RegExp("(^|;\\s*)(" + h + ")=([^;]*)"));
      return p ? decodeURIComponent(p[3]) : null;
    },
    remove(h) {
      this.write(h, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function WE(h) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(h);
}
function FE(h, p) {
  return p ? h.replace(/\/?\/$/, "") + "/" + p.replace(/^\/+/, "") : h;
}
function lT(h, p, b) {
  let g = !WE(p);
  return h && (g || b == !1) ? FE(h, p) : p;
}
const xS = (h) => h instanceof Xa ? { ...h } : h;
function ks(h, p) {
  p = p || {};
  const b = {};
  function g(I, W, te, ce) {
    return Q.isPlainObject(I) && Q.isPlainObject(W) ? Q.merge.call({ caseless: ce }, I, W) : Q.isPlainObject(W) ? Q.merge({}, W) : Q.isArray(W) ? W.slice() : W;
  }
  function E(I, W, te, ce) {
    if (Q.isUndefined(W)) {
      if (!Q.isUndefined(I))
        return g(void 0, I, te, ce);
    } else return g(I, W, te, ce);
  }
  function D(I, W) {
    if (!Q.isUndefined(W))
      return g(void 0, W);
  }
  function x(I, W) {
    if (Q.isUndefined(W)) {
      if (!Q.isUndefined(I))
        return g(void 0, I);
    } else return g(void 0, W);
  }
  function k(I, W, te) {
    if (te in p)
      return g(I, W);
    if (te in h)
      return g(void 0, I);
  }
  const G = {
    url: D,
    method: D,
    data: D,
    baseURL: x,
    transformRequest: x,
    transformResponse: x,
    paramsSerializer: x,
    timeout: x,
    timeoutMessage: x,
    withCredentials: x,
    withXSRFToken: x,
    adapter: x,
    responseType: x,
    xsrfCookieName: x,
    xsrfHeaderName: x,
    onUploadProgress: x,
    onDownloadProgress: x,
    decompress: x,
    maxContentLength: x,
    maxBodyLength: x,
    beforeRedirect: x,
    transport: x,
    httpAgent: x,
    httpsAgent: x,
    cancelToken: x,
    socketPath: x,
    responseEncoding: x,
    validateStatus: k,
    headers: (I, W, te) => E(xS(I), xS(W), te, !0)
  };
  return Q.forEach(Object.keys(Object.assign({}, h, p)), function(W) {
    const te = G[W] || E, ce = te(h[W], p[W], W);
    Q.isUndefined(ce) && te !== k || (b[W] = ce);
  }), b;
}
const aT = (h) => {
  const p = ks({}, h);
  let { data: b, withXSRFToken: g, xsrfHeaderName: E, xsrfCookieName: D, headers: x, auth: k } = p;
  p.headers = x = Xa.from(x), p.url = FS(lT(p.baseURL, p.url, p.allowAbsoluteUrls), h.params, h.paramsSerializer), k && x.set(
    "Authorization",
    "Basic " + btoa((k.username || "") + ":" + (k.password ? unescape(encodeURIComponent(k.password)) : ""))
  );
  let G;
  if (Q.isFormData(b)) {
    if (ua.hasStandardBrowserEnv || ua.hasStandardBrowserWebWorkerEnv)
      x.setContentType(void 0);
    else if ((G = x.getContentType()) !== !1) {
      const [I, ...W] = G ? G.split(";").map((te) => te.trim()).filter(Boolean) : [];
      x.setContentType([I || "multipart/form-data", ...W].join("; "));
    }
  }
  if (ua.hasStandardBrowserEnv && (g && Q.isFunction(g) && (g = g(p)), g || g !== !1 && kE(p.url))) {
    const I = E && D && $E.read(D);
    I && x.set(E, I);
  }
  return p;
}, IE = typeof XMLHttpRequest < "u", PE = IE && function(h) {
  return new Promise(function(b, g) {
    const E = aT(h);
    let D = E.data;
    const x = Xa.from(E.headers).normalize();
    let { responseType: k, onUploadProgress: G, onDownloadProgress: I } = E, W, te, ce, pe, ae;
    function he() {
      pe && pe(), ae && ae(), E.cancelToken && E.cancelToken.unsubscribe(W), E.signal && E.signal.removeEventListener("abort", W);
    }
    let le = new XMLHttpRequest();
    le.open(E.method.toUpperCase(), E.url, !0), le.timeout = E.timeout;
    function Se() {
      if (!le)
        return;
      const Me = Xa.from(
        "getAllResponseHeaders" in le && le.getAllResponseHeaders()
      ), ft = {
        data: !k || k === "text" || k === "json" ? le.responseText : le.response,
        status: le.status,
        statusText: le.statusText,
        headers: Me,
        config: h,
        request: le
      };
      tT(function(Be) {
        b(Be), he();
      }, function(Be) {
        g(Be), he();
      }, ft), le = null;
    }
    "onloadend" in le ? le.onloadend = Se : le.onreadystatechange = function() {
      !le || le.readyState !== 4 || le.status === 0 && !(le.responseURL && le.responseURL.indexOf("file:") === 0) || setTimeout(Se);
    }, le.onabort = function() {
      le && (g(new _e("Request aborted", _e.ECONNABORTED, h, le)), le = null);
    }, le.onerror = function() {
      g(new _e("Network Error", _e.ERR_NETWORK, h, le)), le = null;
    }, le.ontimeout = function() {
      let Pe = E.timeout ? "timeout of " + E.timeout + "ms exceeded" : "timeout exceeded";
      const ft = E.transitional || IS;
      E.timeoutErrorMessage && (Pe = E.timeoutErrorMessage), g(new _e(
        Pe,
        ft.clarifyTimeoutError ? _e.ETIMEDOUT : _e.ECONNABORTED,
        h,
        le
      )), le = null;
    }, D === void 0 && x.setContentType(null), "setRequestHeader" in le && Q.forEach(x.toJSON(), function(Pe, ft) {
      le.setRequestHeader(ft, Pe);
    }), Q.isUndefined(E.withCredentials) || (le.withCredentials = !!E.withCredentials), k && k !== "json" && (le.responseType = E.responseType), I && ([ce, ae] = Tg(I, !0), le.addEventListener("progress", ce)), G && le.upload && ([te, pe] = Tg(G), le.upload.addEventListener("progress", te), le.upload.addEventListener("loadend", pe)), (E.cancelToken || E.signal) && (W = (Me) => {
      le && (g(!Me || Me.type ? new bh(null, h, le) : Me), le.abort(), le = null);
    }, E.cancelToken && E.cancelToken.subscribe(W), E.signal && (E.signal.aborted ? W() : E.signal.addEventListener("abort", W)));
    const We = ZE(E.url);
    if (We && ua.protocols.indexOf(We) === -1) {
      g(new _e("Unsupported protocol " + We + ":", _e.ERR_BAD_REQUEST, h));
      return;
    }
    le.send(D || null);
  });
}, eA = (h, p) => {
  const { length: b } = h = h ? h.filter(Boolean) : [];
  if (p || b) {
    let g = new AbortController(), E;
    const D = function(I) {
      if (!E) {
        E = !0, k();
        const W = I instanceof Error ? I : this.reason;
        g.abort(W instanceof _e ? W : new bh(W instanceof Error ? W.message : W));
      }
    };
    let x = p && setTimeout(() => {
      x = null, D(new _e(`timeout ${p} of ms exceeded`, _e.ETIMEDOUT));
    }, p);
    const k = () => {
      h && (x && clearTimeout(x), x = null, h.forEach((I) => {
        I.unsubscribe ? I.unsubscribe(D) : I.removeEventListener("abort", D);
      }), h = null);
    };
    h.forEach((I) => I.addEventListener("abort", D));
    const { signal: G } = g;
    return G.unsubscribe = () => Q.asap(k), G;
  }
}, tA = function* (h, p) {
  let b = h.byteLength;
  if (b < p) {
    yield h;
    return;
  }
  let g = 0, E;
  for (; g < b; )
    E = g + p, yield h.slice(g, E), g = E;
}, lA = async function* (h, p) {
  for await (const b of aA(h))
    yield* tA(b, p);
}, aA = async function* (h) {
  if (h[Symbol.asyncIterator]) {
    yield* h;
    return;
  }
  const p = h.getReader();
  try {
    for (; ; ) {
      const { done: b, value: g } = await p.read();
      if (b)
        break;
      yield g;
    }
  } finally {
    await p.cancel();
  }
}, CS = (h, p, b, g) => {
  const E = lA(h, p);
  let D = 0, x, k = (G) => {
    x || (x = !0, g && g(G));
  };
  return new ReadableStream({
    async pull(G) {
      try {
        const { done: I, value: W } = await E.next();
        if (I) {
          k(), G.close();
          return;
        }
        let te = W.byteLength;
        if (b) {
          let ce = D += te;
          b(ce);
        }
        G.enqueue(new Uint8Array(W));
      } catch (I) {
        throw k(I), I;
      }
    },
    cancel(G) {
      return k(G), E.return();
    }
  }, {
    highWaterMark: 2
  });
}, Mg = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", nT = Mg && typeof ReadableStream == "function", nA = Mg && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((h) => (p) => h.encode(p))(new TextEncoder()) : async (h) => new Uint8Array(await new Response(h).arrayBuffer())), uT = (h, ...p) => {
  try {
    return !!h(...p);
  } catch {
    return !1;
  }
}, uA = nT && uT(() => {
  let h = !1;
  const p = new Request(ua.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return h = !0, "half";
    }
  }).headers.has("Content-Type");
  return h && !p;
}), HS = 64 * 1024, cb = nT && uT(() => Q.isReadableStream(new Response("").body)), Eg = {
  stream: cb && ((h) => h.body)
};
Mg && ((h) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !Eg[p] && (Eg[p] = Q.isFunction(h[p]) ? (b) => b[p]() : (b, g) => {
      throw new _e(`Response type '${p}' is not supported`, _e.ERR_NOT_SUPPORT, g);
    });
  });
})(new Response());
const iA = async (h) => {
  if (h == null)
    return 0;
  if (Q.isBlob(h))
    return h.size;
  if (Q.isSpecCompliantForm(h))
    return (await new Request(ua.origin, {
      method: "POST",
      body: h
    }).arrayBuffer()).byteLength;
  if (Q.isArrayBufferView(h) || Q.isArrayBuffer(h))
    return h.byteLength;
  if (Q.isURLSearchParams(h) && (h = h + ""), Q.isString(h))
    return (await nA(h)).byteLength;
}, cA = async (h, p) => {
  const b = Q.toFiniteNumber(h.getContentLength());
  return b ?? iA(p);
}, oA = Mg && (async (h) => {
  let {
    url: p,
    method: b,
    data: g,
    signal: E,
    cancelToken: D,
    timeout: x,
    onDownloadProgress: k,
    onUploadProgress: G,
    responseType: I,
    headers: W,
    withCredentials: te = "same-origin",
    fetchOptions: ce
  } = aT(h);
  I = I ? (I + "").toLowerCase() : "text";
  let pe = eA([E, D && D.toAbortSignal()], x), ae;
  const he = pe && pe.unsubscribe && (() => {
    pe.unsubscribe();
  });
  let le;
  try {
    if (G && uA && b !== "get" && b !== "head" && (le = await cA(W, g)) !== 0) {
      let ft = new Request(p, {
        method: "POST",
        body: g,
        duplex: "half"
      }), ct;
      if (Q.isFormData(g) && (ct = ft.headers.get("content-type")) && W.setContentType(ct), ft.body) {
        const [Be, Dt] = MS(
          le,
          Tg(US(G))
        );
        g = CS(ft.body, HS, Be, Dt);
      }
    }
    Q.isString(te) || (te = te ? "include" : "omit");
    const Se = "credentials" in Request.prototype;
    ae = new Request(p, {
      ...ce,
      signal: pe,
      method: b.toUpperCase(),
      headers: W.normalize().toJSON(),
      body: g,
      duplex: "half",
      credentials: Se ? te : void 0
    });
    let We = await fetch(ae);
    const Me = cb && (I === "stream" || I === "response");
    if (cb && (k || Me && he)) {
      const ft = {};
      ["status", "statusText", "headers"].forEach((me) => {
        ft[me] = We[me];
      });
      const ct = Q.toFiniteNumber(We.headers.get("content-length")), [Be, Dt] = k && MS(
        ct,
        Tg(US(k), !0)
      ) || [];
      We = new Response(
        CS(We.body, HS, Be, () => {
          Dt && Dt(), he && he();
        }),
        ft
      );
    }
    I = I || "text";
    let Pe = await Eg[Q.findKey(Eg, I) || "text"](We, h);
    return !Me && he && he(), await new Promise((ft, ct) => {
      tT(ft, ct, {
        data: Pe,
        headers: Xa.from(We.headers),
        status: We.status,
        statusText: We.statusText,
        config: h,
        request: ae
      });
    });
  } catch (Se) {
    throw he && he(), Se && Se.name === "TypeError" && /fetch/i.test(Se.message) ? Object.assign(
      new _e("Network Error", _e.ERR_NETWORK, h, ae),
      {
        cause: Se.cause || Se
      }
    ) : _e.from(Se, Se && Se.code, h, ae);
  }
}), ob = {
  http: AE,
  xhr: PE,
  fetch: oA
};
Q.forEach(ob, (h, p) => {
  if (h) {
    try {
      Object.defineProperty(h, "name", { value: p });
    } catch {
    }
    Object.defineProperty(h, "adapterName", { value: p });
  }
});
const NS = (h) => `- ${h}`, fA = (h) => Q.isFunction(h) || h === null || h === !1, iT = {
  getAdapter: (h) => {
    h = Q.isArray(h) ? h : [h];
    const { length: p } = h;
    let b, g;
    const E = {};
    for (let D = 0; D < p; D++) {
      b = h[D];
      let x;
      if (g = b, !fA(b) && (g = ob[(x = String(b)).toLowerCase()], g === void 0))
        throw new _e(`Unknown adapter '${x}'`);
      if (g)
        break;
      E[x || "#" + D] = g;
    }
    if (!g) {
      const D = Object.entries(E).map(
        ([k, G]) => `adapter ${k} ` + (G === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let x = p ? D.length > 1 ? `since :
` + D.map(NS).join(`
`) : " " + NS(D[0]) : "as no adapter specified";
      throw new _e(
        "There is no suitable adapter to dispatch the request " + x,
        "ERR_NOT_SUPPORT"
      );
    }
    return g;
  },
  adapters: ob
};
function lb(h) {
  if (h.cancelToken && h.cancelToken.throwIfRequested(), h.signal && h.signal.aborted)
    throw new bh(null, h);
}
function wS(h) {
  return lb(h), h.headers = Xa.from(h.headers), h.data = tb.call(
    h,
    h.transformRequest
  ), ["post", "put", "patch"].indexOf(h.method) !== -1 && h.headers.setContentType("application/x-www-form-urlencoded", !1), iT.getAdapter(h.adapter || Sp.adapter)(h).then(function(g) {
    return lb(h), g.data = tb.call(
      h,
      h.transformResponse,
      g
    ), g.headers = Xa.from(g.headers), g;
  }, function(g) {
    return eT(g) || (lb(h), g && g.response && (g.response.data = tb.call(
      h,
      h.transformResponse,
      g.response
    ), g.response.headers = Xa.from(g.response.headers))), Promise.reject(g);
  });
}
const cT = "1.8.4", Ug = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((h, p) => {
  Ug[h] = function(g) {
    return typeof g === h || "a" + (p < 1 ? "n " : " ") + h;
  };
});
const BS = {};
Ug.transitional = function(p, b, g) {
  function E(D, x) {
    return "[Axios v" + cT + "] Transitional option '" + D + "'" + x + (g ? ". " + g : "");
  }
  return (D, x, k) => {
    if (p === !1)
      throw new _e(
        E(x, " has been removed" + (b ? " in " + b : "")),
        _e.ERR_DEPRECATED
      );
    return b && !BS[x] && (BS[x] = !0, console.warn(
      E(
        x,
        " has been deprecated since v" + b + " and will be removed in the near future"
      )
    )), p ? p(D, x, k) : !0;
  };
};
Ug.spelling = function(p) {
  return (b, g) => (console.warn(`${g} is likely a misspelling of ${p}`), !0);
};
function sA(h, p, b) {
  if (typeof h != "object")
    throw new _e("options must be an object", _e.ERR_BAD_OPTION_VALUE);
  const g = Object.keys(h);
  let E = g.length;
  for (; E-- > 0; ) {
    const D = g[E], x = p[D];
    if (x) {
      const k = h[D], G = k === void 0 || x(k, D, h);
      if (G !== !0)
        throw new _e("option " + D + " must be " + G, _e.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (b !== !0)
      throw new _e("Unknown option " + D, _e.ERR_BAD_OPTION);
  }
}
const Sg = {
  assertOptions: sA,
  validators: Ug
}, Ui = Sg.validators;
let Ks = class {
  constructor(p) {
    this.defaults = p, this.interceptors = {
      request: new DS(),
      response: new DS()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(p, b) {
    try {
      return await this._request(p, b);
    } catch (g) {
      if (g instanceof Error) {
        let E = {};
        Error.captureStackTrace ? Error.captureStackTrace(E) : E = new Error();
        const D = E.stack ? E.stack.replace(/^.+\n/, "") : "";
        try {
          g.stack ? D && !String(g.stack).endsWith(D.replace(/^.+\n.+\n/, "")) && (g.stack += `
` + D) : g.stack = D;
        } catch {
        }
      }
      throw g;
    }
  }
  _request(p, b) {
    typeof p == "string" ? (b = b || {}, b.url = p) : b = p || {}, b = ks(this.defaults, b);
    const { transitional: g, paramsSerializer: E, headers: D } = b;
    g !== void 0 && Sg.assertOptions(g, {
      silentJSONParsing: Ui.transitional(Ui.boolean),
      forcedJSONParsing: Ui.transitional(Ui.boolean),
      clarifyTimeoutError: Ui.transitional(Ui.boolean)
    }, !1), E != null && (Q.isFunction(E) ? b.paramsSerializer = {
      serialize: E
    } : Sg.assertOptions(E, {
      encode: Ui.function,
      serialize: Ui.function
    }, !0)), b.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? b.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : b.allowAbsoluteUrls = !0), Sg.assertOptions(b, {
      baseUrl: Ui.spelling("baseURL"),
      withXsrfToken: Ui.spelling("withXSRFToken")
    }, !0), b.method = (b.method || this.defaults.method || "get").toLowerCase();
    let x = D && Q.merge(
      D.common,
      D[b.method]
    );
    D && Q.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (ae) => {
        delete D[ae];
      }
    ), b.headers = Xa.concat(x, D);
    const k = [];
    let G = !0;
    this.interceptors.request.forEach(function(he) {
      typeof he.runWhen == "function" && he.runWhen(b) === !1 || (G = G && he.synchronous, k.unshift(he.fulfilled, he.rejected));
    });
    const I = [];
    this.interceptors.response.forEach(function(he) {
      I.push(he.fulfilled, he.rejected);
    });
    let W, te = 0, ce;
    if (!G) {
      const ae = [wS.bind(this), void 0];
      for (ae.unshift.apply(ae, k), ae.push.apply(ae, I), ce = ae.length, W = Promise.resolve(b); te < ce; )
        W = W.then(ae[te++], ae[te++]);
      return W;
    }
    ce = k.length;
    let pe = b;
    for (te = 0; te < ce; ) {
      const ae = k[te++], he = k[te++];
      try {
        pe = ae(pe);
      } catch (le) {
        he.call(this, le);
        break;
      }
    }
    try {
      W = wS.call(this, pe);
    } catch (ae) {
      return Promise.reject(ae);
    }
    for (te = 0, ce = I.length; te < ce; )
      W = W.then(I[te++], I[te++]);
    return W;
  }
  getUri(p) {
    p = ks(this.defaults, p);
    const b = lT(p.baseURL, p.url, p.allowAbsoluteUrls);
    return FS(b, p.params, p.paramsSerializer);
  }
};
Q.forEach(["delete", "get", "head", "options"], function(p) {
  Ks.prototype[p] = function(b, g) {
    return this.request(ks(g || {}, {
      method: p,
      url: b,
      data: (g || {}).data
    }));
  };
});
Q.forEach(["post", "put", "patch"], function(p) {
  function b(g) {
    return function(D, x, k) {
      return this.request(ks(k || {}, {
        method: p,
        headers: g ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: D,
        data: x
      }));
    };
  }
  Ks.prototype[p] = b(), Ks.prototype[p + "Form"] = b(!0);
});
let rA = class oT {
  constructor(p) {
    if (typeof p != "function")
      throw new TypeError("executor must be a function.");
    let b;
    this.promise = new Promise(function(D) {
      b = D;
    });
    const g = this;
    this.promise.then((E) => {
      if (!g._listeners) return;
      let D = g._listeners.length;
      for (; D-- > 0; )
        g._listeners[D](E);
      g._listeners = null;
    }), this.promise.then = (E) => {
      let D;
      const x = new Promise((k) => {
        g.subscribe(k), D = k;
      }).then(E);
      return x.cancel = function() {
        g.unsubscribe(D);
      }, x;
    }, p(function(D, x, k) {
      g.reason || (g.reason = new bh(D, x, k), b(g.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(p) {
    if (this.reason) {
      p(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(p) : this._listeners = [p];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(p) {
    if (!this._listeners)
      return;
    const b = this._listeners.indexOf(p);
    b !== -1 && this._listeners.splice(b, 1);
  }
  toAbortSignal() {
    const p = new AbortController(), b = (g) => {
      p.abort(g);
    };
    return this.subscribe(b), p.signal.unsubscribe = () => this.unsubscribe(b), p.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let p;
    return {
      token: new oT(function(E) {
        p = E;
      }),
      cancel: p
    };
  }
};
function dA(h) {
  return function(b) {
    return h.apply(null, b);
  };
}
function hA(h) {
  return Q.isObject(h) && h.isAxiosError === !0;
}
const fb = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(fb).forEach(([h, p]) => {
  fb[p] = h;
});
function fT(h) {
  const p = new Ks(h), b = VS(Ks.prototype.request, p);
  return Q.extend(b, Ks.prototype, p, { allOwnKeys: !0 }), Q.extend(b, p, null, { allOwnKeys: !0 }), b.create = function(E) {
    return fT(ks(h, E));
  }, b;
}
const Pt = fT(Sp);
Pt.Axios = Ks;
Pt.CanceledError = bh;
Pt.CancelToken = rA;
Pt.isCancel = eT;
Pt.VERSION = cT;
Pt.toFormData = zg;
Pt.AxiosError = _e;
Pt.Cancel = Pt.CanceledError;
Pt.all = function(p) {
  return Promise.all(p);
};
Pt.spread = dA;
Pt.isAxiosError = hA;
Pt.mergeConfig = ks;
Pt.AxiosHeaders = Xa;
Pt.formToJSON = (h) => PS(Q.isHTMLForm(h) ? new FormData(h) : h);
Pt.getAdapter = iT.getAdapter;
Pt.HttpStatusCode = fb;
Pt.default = Pt;
const {
  Axios: TA,
  AxiosError: EA,
  CanceledError: AA,
  isCancel: RA,
  CancelToken: OA,
  VERSION: DA,
  all: zA,
  Cancel: MA,
  isAxiosError: UA,
  spread: xA,
  toFormData: CA,
  AxiosHeaders: HA,
  HttpStatusCode: NA,
  formToJSON: wA,
  getAdapter: BA,
  mergeConfig: qA
} = Pt, mA = "https://video-downloader.duckdns.org/", yA = () => {
  const [h, p] = gp(""), [b, g] = gp(!1), [E, D] = gp(!1), [x, k] = gp(""), G = dS(null), I = dS(null), W = async () => {
    try {
      const pe = await navigator.clipboard.readText();
      p(pe), g(!0), setTimeout(() => g(!1), 2e3);
    } catch (pe) {
      console.error("Failed to read clipboard contents: ", pe);
    }
  }, te = () => {
    if (!h.trim()) {
      alert("Please enter a valid URL");
      return;
    }
    D(!0);
  }, ce = async (pe) => {
    if (pe.preventDefault(), !h.trim()) {
      alert("Please enter a valid URL");
      return;
    }
    if (!x) {
      alert("Please select a download mode");
      return;
    }
    const ae = new URLSearchParams({
      url: h,
      mode: x
    });
    try {
      const he = await Pt.get(`${mA}download/?${ae}`, {
        responseType: "blob"
        // ⚠️ this is required for binary files
      }), le = he.headers["content-disposition"], Se = le == null ? void 0 : le.match(/filename\*=UTF-8''(.+)/), We = Se ? decodeURIComponent(Se[1]) : "download", Me = he.data, Pe = document.createElement("a");
      Pe.href = URL.createObjectURL(Me), Pe.download = We, document.body.appendChild(Pe), Pe.click(), Pe.remove(), D(!1);
    } catch (he) {
      console.error("Download error:", he), alert("An error occurred while downloading. Check the console for details.");
    }
  };
  return y2(() => {
    const pe = (ae) => {
      I.current && !I.current.contains(ae.target) && D(!1);
    };
    return E && document.addEventListener("mousedown", pe), () => {
      document.removeEventListener("mousedown", pe);
    };
  }, [E]), /* @__PURE__ */ vt.jsxs("div", { className: "w-full max-w-md mx-auto p-4 bg-purple-500 rounded-lg shadow-md", children: [
    /* @__PURE__ */ vt.jsxs("div", { className: "relative mb-4", children: [
      /* @__PURE__ */ vt.jsx(
        "input",
        {
          ref: G,
          type: "text",
          value: h,
          onChange: (pe) => p(pe.target.value),
          placeholder: "Paste your link here...",
          className: "w-full p-3 pr-12 border bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      ),
      /* @__PURE__ */ vt.jsx(
        "button",
        {
          onClick: W,
          className: "absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-blue-600",
          title: "Paste from clipboard",
          children: b ? /* @__PURE__ */ vt.jsx(H2, { className: "w-5 h-5 text-green-500" }) : /* @__PURE__ */ vt.jsx(w2, { className: "w-5 h-5" })
        }
      )
    ] }),
    /* @__PURE__ */ vt.jsxs(
      "button",
      {
        onClick: te,
        className: "w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors",
        children: [
          /* @__PURE__ */ vt.jsx(q2, { className: "w-5 h-5" }),
          "Download"
        ]
      }
    ),
    E && /* @__PURE__ */ vt.jsx("div", { className: "fixed bg-opacity-50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ vt.jsxs(
      "div",
      {
        ref: I,
        className: "bg-white rounded-lg shadow-xl w-full max-w-md",
        children: [
          /* @__PURE__ */ vt.jsxs("div", { className: "flex justify-between items-center border-b p-4", children: [
            /* @__PURE__ */ vt.jsx("h3", { className: "text-lg font-semibold", children: "Download Options" }),
            /* @__PURE__ */ vt.jsx(
              "button",
              {
                onClick: () => D(!1),
                className: "text-gray-500 hover:text-gray-700",
                children: /* @__PURE__ */ vt.jsx(Y2, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ vt.jsxs("form", { onSubmit: ce, className: "p-4 space-y-4", children: [
            /* @__PURE__ */ vt.jsx("div", { children: /* @__PURE__ */ vt.jsxs(
              "select",
              {
                name: "mode",
                onChange: (pe) => k(pe.target.value),
                className: "w-full p-2 border border-gray-300 rounded-md",
                children: [
                  /* @__PURE__ */ vt.jsx("option", { value: "mp3", children: "Download mp3" }),
                  /* @__PURE__ */ vt.jsx("option", { value: "with_watermark", children: "Download with watermark" }),
                  /* @__PURE__ */ vt.jsx("option", { value: "no_watermark", children: "Download without watermark" })
                ]
              }
            ) }),
            /* @__PURE__ */ vt.jsxs("div", { className: "flex justify-end gap-3 pt-4", children: [
              /* @__PURE__ */ vt.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => D(!1),
                  className: "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ vt.jsx(
                "button",
                {
                  type: "submit",
                  className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                  children: "Start Download"
                }
              )
            ] })
          ] })
        ]
      }
    ) })
  ] });
};
function pA() {
  const [h, p] = gp(0);
  return /* @__PURE__ */ vt.jsx(vt.Fragment, { children: /* @__PURE__ */ vt.jsx(yA, {}) });
}
window.renderVideoDownloaderWidget = (h = "#video-downloader-widget") => {
  const p = document.querySelector(h);
  if (!p) {
    console.error("Widget mount container not found");
    return;
  }
  O2.createRoot(p).render(
    /* @__PURE__ */ vt.jsx(p2, { children: /* @__PURE__ */ vt.jsx(pA, {}) })
  );
};
