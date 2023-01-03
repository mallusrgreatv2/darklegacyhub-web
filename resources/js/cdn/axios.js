function e(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: t } = Object.prototype,
  { getPrototypeOf: n } = Object,
  r =
    ((o = Object.create(null)),
    (e) => {
      const n = t.call(e);
      return o[n] || (o[n] = n.slice(8, -1).toLowerCase());
    });
var o;
const s = (e) => ((e = e.toLowerCase()), (t) => r(t) === e),
  i = (e) => (t) => typeof t === e,
  { isArray: a } = Array,
  c = i("undefined");
const u = s("ArrayBuffer");
const l = i("string"),
  f = i("function"),
  d = i("number"),
  h = (e) => null !== e && "object" == typeof e,
  p = (e) => {
    if ("object" !== r(e)) return !1;
    const t = n(e);
    return !(
      (null !== t &&
        t !== Object.prototype &&
        null !== Object.getPrototypeOf(t)) ||
      Symbol.toStringTag in e ||
      Symbol.iterator in e
    );
  },
  m = s("Date"),
  y = s("File"),
  g = s("Blob"),
  b = s("FileList"),
  E = s("URLSearchParams");
function w(e, t, { allOwnKeys: n = !1 } = {}) {
  if (null == e) return;
  let r, o;
  if (("object" != typeof e && (e = [e]), a(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let i;
    for (r = 0; r < s; r++) (i = o[r]), t.call(null, e[i], i, e);
  }
}
function O(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r,
    o = n.length;
  for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
  return null;
}
const S =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : global,
  R = (e) => !c(e) && e !== S;
const A =
  ((T = "undefined" != typeof Uint8Array && n(Uint8Array)),
  (e) => T && e instanceof T);
var T;
const N = s("HTMLFormElement"),
  j = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  C = s("RegExp"),
  v = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    w(n, (n, o) => {
      !1 !== t(n, o, e) && (r[o] = n);
    }),
      Object.defineProperties(e, r);
  },
  x = {
    isArray: a,
    isArrayBuffer: u,
    isBuffer: function (e) {
      return (
        null !== e &&
        !c(e) &&
        null !== e.constructor &&
        !c(e.constructor) &&
        f(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: (e) => {
      const n = "[object FormData]";
      return (
        e &&
        (("function" == typeof FormData && e instanceof FormData) ||
          t.call(e) === n ||
          (f(e.toString) && e.toString() === n))
      );
    },
    isArrayBufferView: function (e) {
      let t;
      return (
        (t =
          "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && u(e.buffer)),
        t
      );
    },
    isString: l,
    isNumber: d,
    isBoolean: (e) => !0 === e || !1 === e,
    isObject: h,
    isPlainObject: p,
    isUndefined: c,
    isDate: m,
    isFile: y,
    isBlob: g,
    isRegExp: C,
    isFunction: f,
    isStream: (e) => h(e) && f(e.pipe),
    isURLSearchParams: E,
    isTypedArray: A,
    isFileList: b,
    forEach: w,
    merge: function e() {
      const { caseless: t } = (R(this) && this) || {},
        n = {},
        r = (r, o) => {
          const s = (t && O(n, o)) || o;
          p(n[s]) && p(r)
            ? (n[s] = e(n[s], r))
            : p(r)
            ? (n[s] = e({}, r))
            : a(r)
            ? (n[s] = r.slice())
            : (n[s] = r);
        };
      for (let e = 0, t = arguments.length; e < t; e++)
        arguments[e] && w(arguments[e], r);
      return n;
    },
    extend: (t, n, r, { allOwnKeys: o } = {}) => (
      w(
        n,
        (n, o) => {
          r && f(n) ? (t[o] = e(n, r)) : (t[o] = n);
        },
        { allOwnKeys: o }
      ),
      t
    ),
    trim: (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
    inherits: (e, t, n, r) => {
      (e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        n && Object.assign(e.prototype, n);
    },
    toFlatObject: (e, t, r, o) => {
      let s, i, a;
      const c = {};
      if (((t = t || {}), null == e)) return t;
      do {
        for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
          (a = s[i]),
            (o && !o(a, e, t)) || c[a] || ((t[a] = e[a]), (c[a] = !0));
        e = !1 !== r && n(e);
      } while (e && (!r || r(e, t)) && e !== Object.prototype);
      return t;
    },
    kindOf: r,
    kindOfTest: s,
    endsWith: (e, t, n) => {
      (e = String(e)),
        (void 0 === n || n > e.length) && (n = e.length),
        (n -= t.length);
      const r = e.indexOf(t, n);
      return -1 !== r && r === n;
    },
    toArray: (e) => {
      if (!e) return null;
      if (a(e)) return e;
      let t = e.length;
      if (!d(t)) return null;
      const n = new Array(t);
      for (; t-- > 0; ) n[t] = e[t];
      return n;
    },
    forEachEntry: (e, t) => {
      const n = (e && e[Symbol.iterator]).call(e);
      let r;
      for (; (r = n.next()) && !r.done; ) {
        const n = r.value;
        t.call(e, n[0], n[1]);
      }
    },
    matchAll: (e, t) => {
      let n;
      const r = [];
      for (; null !== (n = e.exec(t)); ) r.push(n);
      return r;
    },
    isHTMLForm: N,
    hasOwnProperty: j,
    hasOwnProp: j,
    reduceDescriptors: v,
    freezeMethods: (e) => {
      v(e, (t, n) => {
        if (f(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
          return !1;
        const r = e[n];
        f(r) &&
          ((t.enumerable = !1),
          "writable" in t
            ? (t.writable = !1)
            : t.set ||
              (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'");
              }));
      });
    },
    toObjectSet: (e, t) => {
      const n = {},
        r = (e) => {
          e.forEach((e) => {
            n[e] = !0;
          });
        };
      return a(e) ? r(e) : r(String(e).split(t)), n;
    },
    toCamelCase: (e) =>
      e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (e, t, n) {
        return t.toUpperCase() + n;
      }),
    noop: () => {},
    toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    findKey: O,
    global: S,
    isContextDefined: R,
    toJSONObject: (e) => {
      const t = new Array(10),
        n = (e, r) => {
          if (h(e)) {
            if (t.indexOf(e) >= 0) return;
            if (!("toJSON" in e)) {
              t[r] = e;
              const o = a(e) ? [] : {};
              return (
                w(e, (e, t) => {
                  const s = n(e, r + 1);
                  !c(s) && (o[t] = s);
                }),
                (t[r] = void 0),
                o
              );
            }
          }
          return e;
        };
      return n(e, 0);
    },
  };
function P(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
x.inherits(P, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const U = P.prototype,
  _ = {};
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
  "ERR_INVALID_URL",
].forEach((e) => {
  _[e] = { value: e };
}),
  Object.defineProperties(P, _),
  Object.defineProperty(U, "isAxiosError", { value: !0 }),
  (P.from = (e, t, n, r, o, s) => {
    const i = Object.create(U);
    return (
      x.toFlatObject(
        e,
        i,
        function (e) {
          return e !== Error.prototype;
        },
        (e) => "isAxiosError" !== e
      ),
      P.call(i, e.message, t, n, r, o),
      (i.cause = e),
      (i.name = e.name),
      s && Object.assign(i, s),
      i
    );
  });
const F = "object" == typeof self ? self.FormData : window.FormData;
function B(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function D(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function L(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (e, t) {
          return (e = D(e)), !n && t ? "[" + e + "]" : e;
        })
        .join(n ? "." : "")
    : t;
}
const k = x.toFlatObject(x, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function q(e, t, n) {
  if (!x.isObject(e)) throw new TypeError("target must be an object");
  t = t || new (F || FormData)();
  const r = (n = x.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (e, t) {
        return !x.isUndefined(t[e]);
      }
    )).metaTokens,
    o = n.visitor || l,
    s = n.dots,
    i = n.indexes,
    a =
      (n.Blob || ("undefined" != typeof Blob && Blob)) &&
      (c = t) &&
      x.isFunction(c.append) &&
      "FormData" === c[Symbol.toStringTag] &&
      c[Symbol.iterator];
  var c;
  if (!x.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(e) {
    if (null === e) return "";
    if (x.isDate(e)) return e.toISOString();
    if (!a && x.isBlob(e))
      throw new P("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(e) || x.isTypedArray(e)
      ? a && "function" == typeof Blob
        ? new Blob([e])
        : Buffer.from(e)
      : e;
  }
  function l(e, n, o) {
    let a = e;
    if (e && !o && "object" == typeof e)
      if (x.endsWith(n, "{}"))
        (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
      else if (
        (x.isArray(e) &&
          (function (e) {
            return x.isArray(e) && !e.some(B);
          })(e)) ||
        x.isFileList(e) ||
        (x.endsWith(n, "[]") && (a = x.toArray(e)))
      )
        return (
          (n = D(n)),
          a.forEach(function (e, r) {
            !x.isUndefined(e) &&
              null !== e &&
              t.append(
                !0 === i ? L([n], r, s) : null === i ? n : n + "[]",
                u(e)
              );
          }),
          !1
        );
    return !!B(e) || (t.append(L(o, n, s), u(e)), !1);
  }
  const f = [],
    d = Object.assign(k, {
      defaultVisitor: l,
      convertValue: u,
      isVisitable: B,
    });
  if (!x.isObject(e)) throw new TypeError("data must be an object");
  return (
    (function e(n, r) {
      if (!x.isUndefined(n)) {
        if (-1 !== f.indexOf(n))
          throw Error("Circular reference detected in " + r.join("."));
        f.push(n),
          x.forEach(n, function (n, s) {
            !0 ===
              (!(x.isUndefined(n) || null === n) &&
                o.call(t, n, x.isString(s) ? s.trim() : s, r, d)) &&
              e(n, r ? r.concat(s) : [s]);
          }),
          f.pop();
      }
    })(e),
    t
  );
}
function M(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
    return t[e];
  });
}
function I(e, t) {
  (this._pairs = []), e && q(e, this, t);
}
const z = I.prototype;
function J(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function H(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || J,
    o = n && n.serialize;
  let s;
  if (
    ((s = o
      ? o(t, n)
      : x.isURLSearchParams(t)
      ? t.toString()
      : new I(t, n).toString(r)),
    s)
  ) {
    const t = e.indexOf("#");
    -1 !== t && (e = e.slice(0, t)),
      (e += (-1 === e.indexOf("?") ? "?" : "&") + s);
  }
  return e;
}
(z.append = function (e, t) {
  this._pairs.push([e, t]);
}),
  (z.toString = function (e) {
    const t = e
      ? function (t) {
          return e.call(this, t, M);
        }
      : M;
    return this._pairs
      .map(function (e) {
        return t(e[0]) + "=" + t(e[1]);
      }, "")
      .join("&");
  });
const V = class {
    constructor() {
      this.handlers = [];
    }
    use(e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(e) {
      x.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }
  },
  W = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  K = "undefined" != typeof URLSearchParams ? URLSearchParams : I,
  $ = FormData,
  G = (() => {
    let e;
    return (
      ("undefined" == typeof navigator ||
        ("ReactNative" !== (e = navigator.product) &&
          "NativeScript" !== e &&
          "NS" !== e)) &&
      "undefined" != typeof window &&
      "undefined" != typeof document
    );
  })(),
  X =
    "undefined" != typeof WorkerGlobalScope &&
    self instanceof WorkerGlobalScope &&
    "function" == typeof self.importScripts,
  Q = {
    isBrowser: !0,
    classes: { URLSearchParams: K, FormData: $, Blob: Blob },
    isStandardBrowserEnv: G,
    isStandardBrowserWebWorkerEnv: X,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function Z(e) {
  function t(e, n, r, o) {
    let s = e[o++];
    const i = Number.isFinite(+s),
      a = o >= e.length;
    if (((s = !s && x.isArray(r) ? r.length : s), a))
      return x.hasOwnProp(r, s) ? (r[s] = [r[s], n]) : (r[s] = n), !i;
    (r[s] && x.isObject(r[s])) || (r[s] = []);
    return (
      t(e, n, r[s], o) &&
        x.isArray(r[s]) &&
        (r[s] = (function (e) {
          const t = {},
            n = Object.keys(e);
          let r;
          const o = n.length;
          let s;
          for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
          return t;
        })(r[s])),
      !i
    );
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return (
      x.forEachEntry(e, (e, r) => {
        t(
          (function (e) {
            return x
              .matchAll(/\w+|\[(\w*)]/g, e)
              .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
          })(e),
          r,
          n,
          0
        );
      }),
      n
    );
  }
  return null;
}
const Y = { "Content-Type": void 0 };
const ee = {
  transitional: W,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (e, t) {
      const n = t.getContentType() || "",
        r = n.indexOf("application/json") > -1,
        o = x.isObject(e);
      o && x.isHTMLForm(e) && (e = new FormData(e));
      if (x.isFormData(e)) return r && r ? JSON.stringify(Z(e)) : e;
      if (
        x.isArrayBuffer(e) ||
        x.isBuffer(e) ||
        x.isStream(e) ||
        x.isFile(e) ||
        x.isBlob(e)
      )
        return e;
      if (x.isArrayBufferView(e)) return e.buffer;
      if (x.isURLSearchParams(e))
        return (
          t.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let s;
      if (o) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return (function (e, t) {
            return q(
              e,
              new Q.classes.URLSearchParams(),
              Object.assign(
                {
                  visitor: function (e, t, n, r) {
                    return Q.isNode && x.isBuffer(e)
                      ? (this.append(t, e.toString("base64")), !1)
                      : r.defaultVisitor.apply(this, arguments);
                  },
                },
                t
              )
            );
          })(e, this.formSerializer).toString();
        if ((s = x.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
          const t = this.env && this.env.FormData;
          return q(s ? { "files[]": e } : e, t && new t(), this.formSerializer);
        }
      }
      return o || r
        ? (t.setContentType("application/json", !1),
          (function (e, t, n) {
            if (x.isString(e))
              try {
                return (t || JSON.parse)(e), x.trim(e);
              } catch (e) {
                if ("SyntaxError" !== e.name) throw e;
              }
            return (n || JSON.stringify)(e);
          })(e))
        : e;
    },
  ],
  transformResponse: [
    function (e) {
      const t = this.transitional || ee.transitional,
        n = t && t.forcedJSONParsing,
        r = "json" === this.responseType;
      if (e && x.isString(e) && ((n && !this.responseType) || r)) {
        const n = !(t && t.silentJSONParsing) && r;
        try {
          return JSON.parse(e);
        } catch (e) {
          if (n) {
            if ("SyntaxError" === e.name)
              throw P.from(e, P.ERR_BAD_RESPONSE, this, null, this.response);
            throw e;
          }
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Q.classes.FormData, Blob: Q.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
x.forEach(["delete", "get", "head"], function (e) {
  ee.headers[e] = {};
}),
  x.forEach(["post", "put", "patch"], function (e) {
    ee.headers[e] = x.merge(Y);
  });
const te = ee,
  ne = x.toObjectSet([
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
    "user-agent",
  ]),
  re = Symbol("internals");
function oe(e) {
  return e && String(e).trim().toLowerCase();
}
function se(e) {
  return !1 === e || null == e ? e : x.isArray(e) ? e.map(se) : String(e);
}
function ie(e, t, n, r) {
  return x.isFunction(r)
    ? r.call(this, t, n)
    : x.isString(t)
    ? x.isString(r)
      ? -1 !== t.indexOf(r)
      : x.isRegExp(r)
      ? r.test(t)
      : void 0
    : void 0;
}
class ae {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, n) {
    const r = this;
    function o(e, t, n) {
      const o = oe(t);
      if (!o) throw new Error("header name must be a non-empty string");
      const s = x.findKey(r, o);
      (!s || void 0 === r[s] || !0 === n || (void 0 === n && !1 !== r[s])) &&
        (r[s || t] = se(e));
    }
    const s = (e, t) => x.forEach(e, (e, n) => o(e, n, t));
    return (
      x.isPlainObject(e) || e instanceof this.constructor
        ? s(e, t)
        : x.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z]+$/.test(e.trim())
        ? s(
            ((e) => {
              const t = {};
              let n, r, o;
              return (
                e &&
                  e.split("\n").forEach(function (e) {
                    (o = e.indexOf(":")),
                      (n = e.substring(0, o).trim().toLowerCase()),
                      (r = e.substring(o + 1).trim()),
                      !n ||
                        (t[n] && ne[n]) ||
                        ("set-cookie" === n
                          ? t[n]
                            ? t[n].push(r)
                            : (t[n] = [r])
                          : (t[n] = t[n] ? t[n] + ", " + r : r));
                  }),
                t
              );
            })(e),
            t
          )
        : null != e && o(t, e, n),
      this
    );
  }
  get(e, t) {
    if ((e = oe(e))) {
      const n = x.findKey(this, e);
      if (n) {
        const e = this[n];
        if (!t) return e;
        if (!0 === t)
          return (function (e) {
            const t = Object.create(null),
              n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let r;
            for (; (r = n.exec(e)); ) t[r[1]] = r[2];
            return t;
          })(e);
        if (x.isFunction(t)) return t.call(this, e, n);
        if (x.isRegExp(t)) return t.exec(e);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if ((e = oe(e))) {
      const n = x.findKey(this, e);
      return !(!n || (t && !ie(0, this[n], n, t)));
    }
    return !1;
  }
  delete(e, t) {
    const n = this;
    let r = !1;
    function o(e) {
      if ((e = oe(e))) {
        const o = x.findKey(n, e);
        !o || (t && !ie(0, n[o], o, t)) || (delete n[o], (r = !0));
      }
    }
    return x.isArray(e) ? e.forEach(o) : o(e), r;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(e) {
    const t = this,
      n = {};
    return (
      x.forEach(this, (r, o) => {
        const s = x.findKey(n, o);
        if (s) return (t[s] = se(r)), void delete t[o];
        const i = e
          ? (function (e) {
              return e
                .trim()
                .toLowerCase()
                .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
            })(o)
          : String(o).trim();
        i !== o && delete t[o], (t[i] = se(r)), (n[i] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = Object.create(null);
    return (
      x.forEach(this, (n, r) => {
        null != n && !1 !== n && (t[r] = e && x.isArray(n) ? n.join(", ") : n);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([e, t]) => e + ": " + t)
      .join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const n = new this(e);
    return t.forEach((e) => n.set(e)), n;
  }
  static accessor(e) {
    const t = (this[re] = this[re] = { accessors: {} }).accessors,
      n = this.prototype;
    function r(e) {
      const r = oe(e);
      t[r] ||
        (!(function (e, t) {
          const n = x.toCamelCase(" " + t);
          ["get", "set", "has"].forEach((r) => {
            Object.defineProperty(e, r + n, {
              value: function (e, n, o) {
                return this[r].call(this, t, e, n, o);
              },
              configurable: !0,
            });
          });
        })(n, e),
        (t[r] = !0));
    }
    return x.isArray(e) ? e.forEach(r) : r(e), this;
  }
}
ae.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
]),
  x.freezeMethods(ae.prototype),
  x.freezeMethods(ae);
const ce = ae;
function ue(e, t) {
  const n = this || te,
    r = t || n,
    o = ce.from(r.headers);
  let s = r.data;
  return (
    x.forEach(e, function (e) {
      s = e.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function le(e) {
  return !(!e || !e.__CANCEL__);
}
function fe(e, t, n) {
  P.call(this, null == e ? "canceled" : e, P.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
x.inherits(fe, P, { __CANCEL__: !0 });
const de = Q.isStandardBrowserEnv
  ? {
      write: function (e, t, n, r, o, s) {
        const i = [];
        i.push(e + "=" + encodeURIComponent(t)),
          x.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          x.isString(r) && i.push("path=" + r),
          x.isString(o) && i.push("domain=" + o),
          !0 === s && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read: function (e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function (e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write: function () {},
      read: function () {
        return null;
      },
      remove: function () {},
    };
function he(e, t) {
  return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
    ? (function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      })(e, t)
    : t;
}
const pe = Q.isStandardBrowserEnv
  ? (function () {
      const e = /(msie|trident)/i.test(navigator.userAgent),
        t = document.createElement("a");
      let n;
      function r(n) {
        let r = n;
        return (
          e && (t.setAttribute("href", r), (r = t.href)),
          t.setAttribute("href", r),
          {
            href: t.href,
            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
            host: t.host,
            search: t.search ? t.search.replace(/^\?/, "") : "",
            hash: t.hash ? t.hash.replace(/^#/, "") : "",
            hostname: t.hostname,
            port: t.port,
            pathname:
              "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
          }
        );
      }
      return (
        (n = r(window.location.href)),
        function (e) {
          const t = x.isString(e) ? r(e) : e;
          return t.protocol === n.protocol && t.host === n.host;
        }
      );
    })()
  : function () {
      return !0;
    };
function me(e, t) {
  let n = 0;
  const r = (function (e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let o,
      s = 0,
      i = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (a) {
        const c = Date.now(),
          u = r[i];
        o || (o = c), (n[s] = a), (r[s] = c);
        let l = i,
          f = 0;
        for (; l !== s; ) (f += n[l++]), (l %= e);
        if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), c - o < t))
          return;
        const d = u && c - u;
        return d ? Math.round((1e3 * f) / d) : void 0;
      }
    );
  })(50, 250);
  return (o) => {
    const s = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      a = s - n,
      c = r(a);
    n = s;
    const u = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && i && s <= i ? (i - s) / c : void 0,
      event: o,
    };
    (u[t ? "download" : "upload"] = !0), e(u);
  };
}
const ye = {
  http: null,
  xhr:
    "undefined" != typeof XMLHttpRequest &&
    function (e) {
      return new Promise(function (t, n) {
        let r = e.data;
        const o = ce.from(e.headers).normalize(),
          s = e.responseType;
        let i;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(i),
            e.signal && e.signal.removeEventListener("abort", i);
        }
        x.isFormData(r) &&
          (Q.isStandardBrowserEnv || Q.isStandardBrowserWebWorkerEnv) &&
          o.setContentType(!1);
        let c = new XMLHttpRequest();
        if (e.auth) {
          const t = e.auth.username || "",
            n = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(t + ":" + n));
        }
        const u = he(e.baseURL, e.url);
        function l() {
          if (!c) return;
          const r = ce.from(
            "getAllResponseHeaders" in c && c.getAllResponseHeaders()
          );
          !(function (e, t, n) {
            const r = n.config.validateStatus;
            n.status && r && !r(n.status)
              ? t(
                  new P(
                    "Request failed with status code " + n.status,
                    [P.ERR_BAD_REQUEST, P.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                    ],
                    n.config,
                    n.request,
                    n
                  )
                )
              : e(n);
          })(
            function (e) {
              t(e), a();
            },
            function (e) {
              n(e), a();
            },
            {
              data:
                s && "text" !== s && "json" !== s ? c.response : c.responseText,
              status: c.status,
              statusText: c.statusText,
              headers: r,
              config: e,
              request: c,
            }
          ),
            (c = null);
        }
        if (
          (c.open(
            e.method.toUpperCase(),
            H(u, e.params, e.paramsSerializer),
            !0
          ),
          (c.timeout = e.timeout),
          "onloadend" in c
            ? (c.onloadend = l)
            : (c.onreadystatechange = function () {
                c &&
                  4 === c.readyState &&
                  (0 !== c.status ||
                    (c.responseURL && 0 === c.responseURL.indexOf("file:"))) &&
                  setTimeout(l);
              }),
          (c.onabort = function () {
            c &&
              (n(new P("Request aborted", P.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            n(new P("Network Error", P.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let t = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const r = e.transitional || W;
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(
                new P(
                  t,
                  r.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          Q.isStandardBrowserEnv)
        ) {
          const t =
            (e.withCredentials || pe(u)) &&
            e.xsrfCookieName &&
            de.read(e.xsrfCookieName);
          t && o.set(e.xsrfHeaderName, t);
        }
        void 0 === r && o.setContentType(null),
          "setRequestHeader" in c &&
            x.forEach(o.toJSON(), function (e, t) {
              c.setRequestHeader(t, e);
            }),
          x.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          s && "json" !== s && (c.responseType = e.responseType),
          "function" == typeof e.onDownloadProgress &&
            c.addEventListener("progress", me(e.onDownloadProgress, !0)),
          "function" == typeof e.onUploadProgress &&
            c.upload &&
            c.upload.addEventListener("progress", me(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((i = (t) => {
              c &&
                (n(!t || t.type ? new fe(null, e, c) : t),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(i),
            e.signal &&
              (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
        const f = (function (e) {
          const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return (t && t[1]) || "";
        })(u);
        f && -1 === Q.protocols.indexOf(f)
          ? n(new P("Unsupported protocol " + f + ":", P.ERR_BAD_REQUEST, e))
          : c.send(r || null);
      });
    },
};
x.forEach(ye, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (e) {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ge = (e) => {
  e = x.isArray(e) ? e : [e];
  const { length: t } = e;
  let n, r;
  for (
    let o = 0;
    o < t && ((n = e[o]), !(r = x.isString(n) ? ye[n.toLowerCase()] : n));
    o++
  );
  if (!r) {
    if (!1 === r)
      throw new P(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      );
    throw new Error(
      x.hasOwnProp(ye, n)
        ? `Adapter '${n}' is not available in the build`
        : `Unknown adapter '${n}'`
    );
  }
  if (!x.isFunction(r)) throw new TypeError("adapter is not a function");
  return r;
};
function be(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new fe(null, e);
}
function Ee(e) {
  be(e),
    (e.headers = ce.from(e.headers)),
    (e.data = ue.call(e, e.transformRequest)),
    -1 !== ["post", "put", "patch"].indexOf(e.method) &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1);
  return ge(e.adapter || te.adapter)(e).then(
    function (t) {
      return (
        be(e),
        (t.data = ue.call(e, e.transformResponse, t)),
        (t.headers = ce.from(t.headers)),
        t
      );
    },
    function (t) {
      return (
        le(t) ||
          (be(e),
          t &&
            t.response &&
            ((t.response.data = ue.call(e, e.transformResponse, t.response)),
            (t.response.headers = ce.from(t.response.headers)))),
        Promise.reject(t)
      );
    }
  );
}
const we = (e) => (e instanceof ce ? e.toJSON() : e);
function Oe(e, t) {
  t = t || {};
  const n = {};
  function r(e, t, n) {
    return x.isPlainObject(e) && x.isPlainObject(t)
      ? x.merge.call({ caseless: n }, e, t)
      : x.isPlainObject(t)
      ? x.merge({}, t)
      : x.isArray(t)
      ? t.slice()
      : t;
  }
  function o(e, t, n) {
    return x.isUndefined(t)
      ? x.isUndefined(e)
        ? void 0
        : r(void 0, e, n)
      : r(e, t, n);
  }
  function s(e, t) {
    if (!x.isUndefined(t)) return r(void 0, t);
  }
  function i(e, t) {
    return x.isUndefined(t)
      ? x.isUndefined(e)
        ? void 0
        : r(void 0, e)
      : r(void 0, t);
  }
  function a(n, o, s) {
    return s in t ? r(n, o) : s in e ? r(void 0, n) : void 0;
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (e, t) => o(we(e), we(t), !0),
  };
  return (
    x.forEach(Object.keys(e).concat(Object.keys(t)), function (r) {
      const s = c[r] || o,
        i = s(e[r], t[r], r);
      (x.isUndefined(i) && s !== a) || (n[r] = i);
    }),
    n
  );
}
const Se = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Se[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Re = {};
Se.transitional = function (e, t, n) {
  function r(e, t) {
    return (
      "[Axios v1.2.2] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
    );
  }
  return (n, o, s) => {
    if (!1 === e)
      throw new P(
        r(o, " has been removed" + (t ? " in " + t : "")),
        P.ERR_DEPRECATED
      );
    return (
      t &&
        !Re[o] &&
        ((Re[o] = !0),
        console.warn(
          r(
            o,
            " has been deprecated since v" +
              t +
              " and will be removed in the near future"
          )
        )),
      !e || e(n, o, s)
    );
  };
};
const Ae = {
    assertOptions: function (e, t, n) {
      if ("object" != typeof e)
        throw new P("options must be an object", P.ERR_BAD_OPTION_VALUE);
      const r = Object.keys(e);
      let o = r.length;
      for (; o-- > 0; ) {
        const s = r[o],
          i = t[s];
        if (i) {
          const t = e[s],
            n = void 0 === t || i(t, s, e);
          if (!0 !== n)
            throw new P(
              "option " + s + " must be " + n,
              P.ERR_BAD_OPTION_VALUE
            );
        } else if (!0 !== n)
          throw new P("Unknown option " + s, P.ERR_BAD_OPTION);
      }
    },
    validators: Se,
  },
  Te = Ae.validators;
class Ne {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new V(), response: new V() });
  }
  request(e, t) {
    "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
      (t = Oe(this.defaults, t));
    const { transitional: n, paramsSerializer: r, headers: o } = t;
    let s;
    void 0 !== n &&
      Ae.assertOptions(
        n,
        {
          silentJSONParsing: Te.transitional(Te.boolean),
          forcedJSONParsing: Te.transitional(Te.boolean),
          clarifyTimeoutError: Te.transitional(Te.boolean),
        },
        !1
      ),
      void 0 !== r &&
        Ae.assertOptions(
          r,
          { encode: Te.function, serialize: Te.function },
          !0
        ),
      (t.method = (t.method || this.defaults.method || "get").toLowerCase()),
      (s = o && x.merge(o.common, o[t.method])),
      s &&
        x.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete o[e];
          }
        ),
      (t.headers = ce.concat(s, o));
    const i = [];
    let a = !0;
    this.interceptors.request.forEach(function (e) {
      ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
        ((a = a && e.synchronous), i.unshift(e.fulfilled, e.rejected));
    });
    const c = [];
    let u;
    this.interceptors.response.forEach(function (e) {
      c.push(e.fulfilled, e.rejected);
    });
    let l,
      f = 0;
    if (!a) {
      const e = [Ee.bind(this), void 0];
      for (
        e.unshift.apply(e, i),
          e.push.apply(e, c),
          l = e.length,
          u = Promise.resolve(t);
        f < l;

      )
        u = u.then(e[f++], e[f++]);
      return u;
    }
    l = i.length;
    let d = t;
    for (f = 0; f < l; ) {
      const e = i[f++],
        t = i[f++];
      try {
        d = e(d);
      } catch (e) {
        t.call(this, e);
        break;
      }
    }
    try {
      u = Ee.call(this, d);
    } catch (e) {
      return Promise.reject(e);
    }
    for (f = 0, l = c.length; f < l; ) u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(e) {
    return H(
      he((e = Oe(this.defaults, e)).baseURL, e.url),
      e.params,
      e.paramsSerializer
    );
  }
}
x.forEach(["delete", "get", "head", "options"], function (e) {
  Ne.prototype[e] = function (t, n) {
    return this.request(
      Oe(n || {}, { method: e, url: t, data: (n || {}).data })
    );
  };
}),
  x.forEach(["post", "put", "patch"], function (e) {
    function t(t) {
      return function (n, r, o) {
        return this.request(
          Oe(o || {}, {
            method: e,
            headers: t ? { "Content-Type": "multipart/form-data" } : {},
            url: n,
            data: r,
          })
        );
      };
    }
    (Ne.prototype[e] = t()), (Ne.prototype[e + "Form"] = t(!0));
  });
const je = Ne;
class Ce {
  constructor(e) {
    if ("function" != typeof e)
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    const n = this;
    this.promise.then((e) => {
      if (!n._listeners) return;
      let t = n._listeners.length;
      for (; t-- > 0; ) n._listeners[t](e);
      n._listeners = null;
    }),
      (this.promise.then = (e) => {
        let t;
        const r = new Promise((e) => {
          n.subscribe(e), (t = e);
        }).then(e);
        return (
          (r.cancel = function () {
            n.unsubscribe(t);
          }),
          r
        );
      }),
      e(function (e, r, o) {
        n.reason || ((n.reason = new fe(e, r, o)), t(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    this.reason
      ? e(this.reason)
      : this._listeners
      ? this._listeners.push(e)
      : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const t = this._listeners.indexOf(e);
    -1 !== t && this._listeners.splice(t, 1);
  }
  static source() {
    let e;
    return {
      token: new Ce(function (t) {
        e = t;
      }),
      cancel: e,
    };
  }
}
const ve = Ce;
const xe = {
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
  NetworkAuthenticationRequired: 511,
};
Object.entries(xe).forEach(([e, t]) => {
  xe[t] = e;
});
const Pe = xe;
const Ue = (function t(n) {
  const r = new je(n),
    o = e(je.prototype.request, r);
  return (
    x.extend(o, je.prototype, r, { allOwnKeys: !0 }),
    x.extend(o, r, null, { allOwnKeys: !0 }),
    (o.create = function (e) {
      return t(Oe(n, e));
    }),
    o
  );
})(te);
(Ue.Axios = je),
  (Ue.CanceledError = fe),
  (Ue.CancelToken = ve),
  (Ue.isCancel = le),
  (Ue.VERSION = "1.2.2"),
  (Ue.toFormData = q),
  (Ue.AxiosError = P),
  (Ue.Cancel = Ue.CanceledError),
  (Ue.all = function (e) {
    return Promise.all(e);
  }),
  (Ue.spread = function (e) {
    return function (t) {
      return e.apply(null, t);
    };
  }),
  (Ue.isAxiosError = function (e) {
    return x.isObject(e) && !0 === e.isAxiosError;
  }),
  (Ue.mergeConfig = Oe),
  (Ue.AxiosHeaders = ce),
  (Ue.formToJSON = (e) => Z(x.isHTMLForm(e) ? new FormData(e) : e)),
  (Ue.HttpStatusCode = Pe),
  (Ue.default = Ue);
const _e = Ue,
  {
    Axios: Fe,
    AxiosError: Be,
    CanceledError: De,
    isCancel: Le,
    CancelToken: ke,
    VERSION: qe,
    all: Me,
    Cancel: Ie,
    isAxiosError: ze,
    spread: Je,
    toFormData: He,
    AxiosHeaders: Ve,
    HttpStatusCode: We,
    formToJSON: Ke,
    mergeConfig: $e,
  } = _e;
export {
  Fe as Axios,
  Be as AxiosError,
  Ve as AxiosHeaders,
  Ie as Cancel,
  ke as CancelToken,
  De as CanceledError,
  We as HttpStatusCode,
  qe as VERSION,
  Me as all,
  _e as default,
  Ke as formToJSON,
  ze as isAxiosError,
  Le as isCancel,
  $e as mergeConfig,
  Je as spread,
  He as toFormData,
};
//# sourceMappingURL=axios.min.js.map
