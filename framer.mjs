import {__esmMin as e} from "./rolldown-runtime.C0sJWP3_.mjs";
import {B as t, Ga as n, I as r, J as i, L as a, X as o, Y as s, Z as c, ae as l, de as u, e as d, fe as f, ie as p, init_jsx_runtime as m, init_npm_react_18_2 as h, init_npm_react_dom_18_2 as g, init_ssg_sandbox_shims as _, j as v, l as y, navigator as b, oe as x, p as S, pe as C, q as ee, re as w, se as T, te as E, u as te, ue as D, window as O, x as ne, ye as re, z as k} from "./react.DP2tJod5.mjs";
import {AnimatePresence as ie, LayoutGroup as ae, MotionConfig as oe, MotionConfigContext as se, MotionGlobalConfig as ce, MotionValue as le, PresenceContext as ue, SwitchLayoutGroupContext as de, WillChangeMotionValue as fe, __commonJS as pe, __decorateElement as A, __decoratorMetadata as me, __decoratorStart as he, __privateAdd as ge, __privateGet as j, __privateMethod as M, __privateSet as _e, __publicField as N, __runInitializers as ve, __toESM as ye, addScaleCorrector as be, animate as xe, cancelFrame as Se, frame as Ce, inView as P, init_chunk_QQPGYYDD as we, init_chunk_YI6JBCRS as Te, interpolate as Ee, isMotionComponent as De, isValidMotionProp as Oe, motion as ke, motionValue as Ae, resolveMotionValue as je, spring as Me, stagger as Ne, unwrapMotionComponent as Pe, useAnimation as Fe, useInstantLayoutTransition as Ie, useInstantTransition as Le, useMotionValue as Re, useReducedMotionConfig as ze, useResetProjection as Be, useSpring as Ve, useTransform as He, visualElementStore as Ue} from "./motion.BfL4ecB8.mjs";
function We(e) {
    return typeof e == `object` && !!e && !i(e) && up in e
}
function Ge(e, t=`default`) {
    let n, r, i = !1, a, o = () => (n ||= e().then(e => {
        if (!(t in e))
            throw Error(`Module does not contain export '${t}'`);
        return r = e[t],
        r
    }
    ).catch(e => {
        a = e
    }
    ),
    n), c = s(function(e, t) {
        if (D( () => {
            i = !0
        }
        , []),
        a)
            throw a;
        if (!r)
            throw o();
        return S(r, {
            ref: t,
            ...e
        })
    });
    return c.preload = o,
    c.getStatus = () => ({
        hasLoaded: r !== void 0,
        hasRendered: i
    }),
    c
}
function Ke(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function qe(e) {
    return e === null || !(fp in e) ? !1 : typeof e.equals == `function`
}
function Je(e, t) {
    return e === t ? !0 : e !== e && t !== t
}
function Ye(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!Je(e[r], t[r]))
            return !1;
    return !0
}
function Xe(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!nt(e[r], t[r], !0))
            return !1;
    return !0
}
function Ze(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!Je(r, t.get(n)))
            return !1;
    return !0
}
function Qe(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!nt(r, t.get(n), !0))
            return !1;
    return !0
}
function $e(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let n of e.keys())
        if (!t.has(n))
            return !1;
    return !0
}
function et(e, t) {
    let n = dp(e);
    if (n.length !== dp(t).length)
        return !1;
    for (let r of n) {
        if (!Ke(t, r))
            return !1;
        if (r === `_owner` && Ke(e, `$$typeof`) && e.$$typeof)
            continue;
        if (!Je(e[r], t[r]))
            return !1
    }
    return !0
}
function tt(e, t) {
    let n = dp(e);
    if (n.length !== dp(t).length)
        return !1;
    for (let r of n) {
        if (!Ke(t, r))
            return !1;
        if (r === `_owner` && Ke(e, `$$typeof`) && e.$$typeof)
            continue;
        if (!nt(e[r], t[r], !0))
            return !1
    }
    return !0
}
function nt(e, t, n) {
    if (e === t)
        return !0;
    if (!e || !t)
        return e !== e && t !== t;
    let r = typeof e;
    if (r !== typeof t || r !== `object`)
        return !1;
    let i = Array.isArray(e)
      , a = Array.isArray(t);
    if (i && a)
        return n ? Xe(e, t) : Ye(e, t);
    if (i !== a)
        return !1;
    let o = e instanceof Map
      , s = t instanceof Map;
    if (o && s)
        return n ? Qe(e, t) : Ze(e, t);
    if (o !== s)
        return !1;
    let c = e instanceof Set
      , l = t instanceof Set;
    if (c && l)
        return $e(e, t);
    if (c !== l)
        return !1;
    let u = e instanceof Date
      , d = t instanceof Date;
    if (u && d)
        return e.getTime() === t.getTime();
    if (u !== d)
        return !1;
    let f = e instanceof RegExp
      , p = t instanceof RegExp;
    return f && p ? e.toString() === t.toString() : f === p ? qe(e) && qe(t) ? e.equals(t) : n ? tt(e, t) : et(e, t) : !1
}
function rt(e, t, n=!0) {
    try {
        return nt(e, t, n)
    } catch (e) {
        if (e instanceof Error && /stack|recursion/iu.exec(e.message))
            return console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
            !1;
        throw e
    }
}
function it(e) {
    return d.useCallback(t => e[t], [e])
}
function at({api: e, children: t}) {
    return S(pp.Provider, {
        value: e,
        children: t
    })
}
function ot() {
    return d.useContext(pp)
}
function st({routes: e, children: t}) {
    let n = it(e)
      , r = T( () => ({
        getRoute: n
    }), [n]);
    return S(pp.Provider, {
        value: r,
        children: t
    })
}
function ct() {
    let e = ot()
      , t = w(mp)
      , n = t?.routeId ?? e.currentRouteId
      , r = t?.routeId ? t.pathVariables : e.currentPathVariables
      , i = n ? e.getRoute?.call(e, n) : void 0;
    return T( () => {
        if (!(!n || !i))
            return {
                ...i,
                id: n,
                pathVariables: r
            }
    }
    , [n, r, i])
}
function lt(e, t) {
    if (t && e)
        return e.elements && t in e.elements ? e.elements[t] : t
}
function ut(e) {
    let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`]
      , n = e => {
        let n = e.type;
        t.includes(n) && performance.mark(`framer-navigation-input`, {
            detail: {
                type: n
            }
        })
    }
    ;
    for (let r = 0; r < t.length; r++)
        document.addEventListener(t[r], n, {
            signal: e
        });
    return () => {
        for (let e = 0; e < t.length; e++)
            document.removeEventListener(t[e], n)
    }
}
function dt(e) {
    return typeof e == `function`
}
function ft(e) {
    return typeof e == `boolean`
}
function F(e) {
    return typeof e == `string`
}
function pt(e) {
    return Number.isFinite(e)
}
function mt(e) {
    return Array.isArray(e)
}
function I(e) {
    return typeof e == `object` && !!e && !mt(e)
}
function ht(e) {
    for (let t in e)
        return !1;
    return !0
}
function gt(e) {
    return e === void 0
}
function _t(e) {
    return e === null
}
function vt(e) {
    return e == null
}
function yt(e) {
    return e instanceof Date && !Number.isNaN(e.getTime())
}
function bt(e) {
    return I(e) && dt(e.return)
}
function xt(e) {
    return I(e) && dt(e.then)
}
function St(e) {
    return e instanceof Promise
}
function Ct(e) {
    return `url('data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`)}')`
}
function wt(e, t) {
    return `${e ? `${e}
` : ``}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${t ? `:
` : `.`}`
}
function Tt() {
    for (let e of Cp)
        e();
    Cp.clear()
}
function Et(e) {
    return new Promise(t => {
        if (Cp.add(t),
        document.hidden) {
            Tt();
            return
        }
        document.addEventListener(`visibilitychange`, Tt),
        document.addEventListener(`pagehide`, Tt),
        Ce.read( () => {
            Ot(e).then( () => {
                Cp.delete(t),
                !e?.signal?.aborted && t()
            }
            )
        }
        )
    }
    )
}
function Dt(e) {
    return new Promise(t => {
        setTimeout(t, 100),
        Ce.read( () => {
            Ot(e).then(t)
        }
        , !1, !0)
    }
    )
}
function Ot(e) {
    let t = e?.priority;
    return xp || Sp ? t === `background` ? new Promise(e => {
        setTimeout(e, 1)
    }
    ) : xp ? W.scheduler.yield(e).catch(gp) : W.scheduler.postTask( () => {}
    , e).catch(gp) : t === `user-blocking` ? Promise.resolve() : new Promise(e => {
        setTimeout(e, t === `background` ? 1 : 0)
    }
    )
}
function kt(e) {
    let {continueAfter: t, ensureContinueBeforeUnload: n, ...r} = e ?? {};
    return n ? Et(r) : t === `paint` ? Dt(r) : Ot(r)
}
function At(e, t=!0) {
    let {getRoute: n} = ot();
    D( () => {
        if (!(!n || !t || !wp))
            for (let t of e)
                jt(n(t))
    }
    , [e, n, t])
}
async function jt(e) {
    if (!wp || !e)
        return;
    let t = e.page;
    if (!(!t || !We(t))) {
        await kt();
        try {
            await t.preload()
        } catch {}
    }
}
function L(e, ...t) {
    if (e)
        return;
    let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
    if (n.stack)
        try {
            let e = n.stack.split(`
`);
            e[1]?.includes(`assert`) ? (e.splice(1, 1),
            n.stack = e.join(`
`)) : e[0]?.includes(`assert`) && (e.splice(0, 1),
            n.stack = e.join(`
`))
        } catch {}
    throw n
}
function R(e, t) {
    throw t || Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`)
}
function Mt(e) {
    return Object(e) !== e
}
function Nt(e) {
    let t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null || Object.getPrototypeOf(t) === null || Object.getOwnPropertyNames(t).sort().join(`\0`) === kp
}
function Pt(e) {
    return Object.prototype.toString.call(e).slice(8, -1)
}
function Ft(e) {
    switch (e) {
    case `"`:
        return `\\"`;
    case `<`:
        return `\\u003C`;
    case `\\`:
        return `\\\\`;
    case `
`:
        return `\\n`;
    case `\r`:
        return `\\r`;
    case `	`:
        return `\\t`;
    case `\b`:
        return `\\b`;
    case `\f`:
        return `\\f`;
    case `\u2028`:
        return `\\u2028`;
    case `\u2029`:
        return `\\u2029`;
    default:
        return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``
    }
}
function It(e) {
    let t = ``
      , n = 0
      , r = e.length;
    for (let i = 0; i < r; i += 1) {
        let r = e[i]
          , a = Ft(r);
        a && (t += e.slice(n, i) + a,
        n = i + 1)
    }
    return `"${n === 0 ? e : t + e.slice(n)}"`
}
function Lt(e) {
    return Object.getOwnPropertySymbols(e).filter(t => Object.getOwnPropertyDescriptor(e, t).enumerable)
}
function Rt(e) {
    return Ap.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`
}
function zt(e) {
    let t = new DataView(e)
      , n = ``;
    for (let r = 0; r < e.byteLength; r++)
        n += String.fromCharCode(t.getUint8(r));
    return Ht(n)
}
function Bt(e) {
    let t = Vt(e)
      , n = new ArrayBuffer(t.length)
      , r = new DataView(n);
    for (let e = 0; e < n.byteLength; e++)
        r.setUint8(e, t.charCodeAt(e));
    return n
}
function Vt(e) {
    e.length % 4 == 0 && (e = e.replace(/==?$/, ``));
    let t = ``
      , n = 0
      , r = 0;
    for (let i = 0; i < e.length; i++)
        n <<= 6,
        n |= jp.indexOf(e[i]),
        r += 6,
        r === 24 && (t += String.fromCharCode((n & 16711680) >> 16),
        t += String.fromCharCode((n & 65280) >> 8),
        t += String.fromCharCode(n & 255),
        n = r = 0);
    return r === 12 ? (n >>= 4,
    t += String.fromCharCode(n)) : r === 18 && (n >>= 2,
    t += String.fromCharCode((n & 65280) >> 8),
    t += String.fromCharCode(n & 255)),
    t
}
function Ht(e) {
    let t = ``;
    for (let n = 0; n < e.length; n += 3) {
        let r = [void 0, void 0, void 0, void 0];
        r[0] = e.charCodeAt(n) >> 2,
        r[1] = (e.charCodeAt(n) & 3) << 4,
        e.length > n + 1 && (r[1] |= e.charCodeAt(n + 1) >> 4,
        r[2] = (e.charCodeAt(n + 1) & 15) << 2),
        e.length > n + 2 && (r[2] |= e.charCodeAt(n + 2) >> 6,
        r[3] = e.charCodeAt(n + 2) & 63);
        for (let e = 0; e < r.length; e++)
            r[e] === void 0 ? t += `=` : t += jp[r[e]]
    }
    return t
}
function Ut(e, t) {
    return Wt(JSON.parse(e), t)
}
function Wt(e, t) {
    if (typeof e == `number`)
        return i(e, !0);
    if (!Array.isArray(e) || e.length === 0)
        throw Error(`Invalid input`);
    let n = e
      , r = Array(n.length);
    function i(e, a=!1) {
        if (e === Mp)
            return;
        if (e === Pp)
            return NaN;
        if (e === Fp)
            return 1 / 0;
        if (e === Ip)
            return -1 / 0;
        if (e === Lp)
            return -0;
        if (a || typeof e != `number`)
            throw Error(`Invalid input`);
        if (e in r)
            return r[e];
        let o = n[e];
        if (!o || typeof o != `object`)
            r[e] = o;
        else if (Array.isArray(o))
            if (typeof o[0] == `string`) {
                let a = o[0]
                  , s = t?.[a];
                if (s) {
                    let t = o[1];
                    return typeof t != `number` && (t = n.push(o[1]) - 1),
                    r[e] = s(i(t))
                }
                switch (a) {
                case `Date`:
                    r[e] = new Date(o[1]);
                    break;
                case `Set`:
                    let t = new Set;
                    r[e] = t;
                    for (let e = 1; e < o.length; e += 1)
                        t.add(i(o[e]));
                    break;
                case `Map`:
                    let n = new Map;
                    r[e] = n;
                    for (let e = 1; e < o.length; e += 2)
                        n.set(i(o[e]), i(o[e + 1]));
                    break;
                case `RegExp`:
                    r[e] = new RegExp(o[1],o[2]);
                    break;
                case `Object`:
                    r[e] = Object(o[1]);
                    break;
                case `BigInt`:
                    r[e] = BigInt(o[1]);
                    break;
                case `null`:
                    let s = Object.create(null);
                    r[e] = s;
                    for (let e = 1; e < o.length; e += 2)
                        s[o[e]] = i(o[e + 1]);
                    break;
                case `Int8Array`:
                case `Uint8Array`:
                case `Uint8ClampedArray`:
                case `Int16Array`:
                case `Uint16Array`:
                case `Int32Array`:
                case `Uint32Array`:
                case `Float32Array`:
                case `Float64Array`:
                case `BigInt64Array`:
                case `BigUint64Array`:
                    {
                        let t = globalThis[a]
                          , n = new t(i(o[1]));
                        r[e] = o[2] === void 0 ? n : n.subarray(o[2], o[3]);
                        break
                    }
                case `ArrayBuffer`:
                    {
                        let t = o[1];
                        r[e] = Bt(t);
                        break
                    }
                case `Temporal.Duration`:
                case `Temporal.Instant`:
                case `Temporal.PlainDate`:
                case `Temporal.PlainTime`:
                case `Temporal.PlainDateTime`:
                case `Temporal.PlainMonthDay`:
                case `Temporal.PlainYearMonth`:
                case `Temporal.ZonedDateTime`:
                    {
                        let t = a.slice(9);
                        r[e] = Temporal[t].from(o[1]);
                        break
                    }
                case `URL`:
                    r[e] = new URL(o[1]);
                    break;
                case `URLSearchParams`:
                    r[e] = new URLSearchParams(o[1]);
                    break;
                default:
                    throw Error(`Unknown type ${a}`)
                }
            } else {
                let t = Array(o.length);
                r[e] = t;
                for (let e = 0; e < o.length; e += 1) {
                    let n = o[e];
                    n !== Np && (t[e] = i(n))
                }
            }
        else {
            let t = {};
            for (let n in r[e] = t,
            o) {
                if (n === `__proto__`)
                    throw Error("Cannot parse an object with a `__proto__` property");
                let e = o[n];
                t[n] = i(e)
            }
        }
        return r[e]
    }
    return i(0)
}
function Gt(e, t) {
    let n = []
      , r = new Map
      , i = [];
    if (t)
        for (let e of Object.getOwnPropertyNames(t))
            i.push({
                key: e,
                fn: t[e]
            });
    let a = []
      , o = 0;
    function s(e) {
        if (typeof e == `function`)
            throw new Op(`Cannot stringify a function`,a);
        if (e === void 0)
            return Mp;
        if (Number.isNaN(e))
            return Pp;
        if (e === 1 / 0)
            return Fp;
        if (e === -1 / 0)
            return Ip;
        if (e === 0 && 1 / e < 0)
            return Lp;
        if (r.has(e))
            return r.get(e);
        let t = o++;
        r.set(e, t);
        for (let {key: r, fn: a} of i) {
            let i = a(e);
            if (i)
                return n[t] = `["${r}",${s(i)}]`,
                t
        }
        let c = ``;
        if (Mt(e))
            c = Kt(e);
        else {
            let t = Pt(e);
            switch (t) {
            case `Number`:
            case `String`:
            case `Boolean`:
                c = `["Object",${Kt(e)}]`;
                break;
            case `BigInt`:
                c = `["BigInt",${e}]`;
                break;
            case `Date`:
                c = `["Date","${isNaN(e.getDate()) ? `` : e.toISOString()}"]`;
                break;
            case `URL`:
                c = `["URL",${It(e.toString())}]`;
                break;
            case `URLSearchParams`:
                c = `["URLSearchParams",${It(e.toString())}]`;
                break;
            case `RegExp`:
                let {source: n, flags: r} = e;
                c = r ? `["RegExp",${It(n)},"${r}"]` : `["RegExp",${It(n)}]`;
                break;
            case `Array`:
                c = `[`;
                for (let t = 0; t < e.length; t += 1)
                    t > 0 && (c += `,`),
                    t in e ? (a.push(`[${t}]`),
                    c += s(e[t]),
                    a.pop()) : c += Np;
                c += `]`;
                break;
            case `Set`:
                c = `["Set"`;
                for (let t of e)
                    c += `,${s(t)}`;
                c += `]`;
                break;
            case `Map`:
                c = `["Map"`;
                for (let[t,n] of e)
                    a.push(`.get(${Mt(t) ? Kt(t) : `...`})`),
                    c += `,${s(t)},${s(n)}`,
                    a.pop();
                c += `]`;
                break;
            case `Int8Array`:
            case `Uint8Array`:
            case `Uint8ClampedArray`:
            case `Int16Array`:
            case `Uint16Array`:
            case `Int32Array`:
            case `Uint32Array`:
            case `Float32Array`:
            case `Float64Array`:
            case `BigInt64Array`:
            case `BigUint64Array`:
                {
                    let n = e;
                    c = `["` + t + `",` + s(n.buffer);
                    let r = e.byteOffset
                      , i = r + e.byteLength;
                    if (r > 0 || i !== n.buffer.byteLength) {
                        let e = /(\d+)/.exec(t)[1] / 8;
                        c += `,${r / e},${i / e}`
                    }
                    c += `]`;
                    break
                }
            case `ArrayBuffer`:
                c = `["ArrayBuffer","${zt(e)}"]`;
                break;
            case `Temporal.Duration`:
            case `Temporal.Instant`:
            case `Temporal.PlainDate`:
            case `Temporal.PlainTime`:
            case `Temporal.PlainDateTime`:
            case `Temporal.PlainMonthDay`:
            case `Temporal.PlainYearMonth`:
            case `Temporal.ZonedDateTime`:
                c = `["${t}",${It(e.toString())}]`;
                break;
            default:
                if (!Nt(e))
                    throw new Op(`Cannot stringify arbitrary non-POJOs`,a);
                if (Lt(e).length > 0)
                    throw new Op(`Cannot stringify POJOs with symbolic keys`,a);
                if (Object.getPrototypeOf(e) === null) {
                    for (let t in c = `["null"`,
                    e)
                        a.push(Rt(t)),
                        c += `,${It(t)},${s(e[t])}`,
                        a.pop();
                    c += `]`
                } else {
                    c = `{`;
                    let t = !1;
                    for (let n in e)
                        t && (c += `,`),
                        t = !0,
                        a.push(Rt(n)),
                        c += `${It(n)}:${s(e[n])}`,
                        a.pop();
                    c += `}`
                }
            }
        }
        return n[t] = c,
        t
    }
    let c = s(e);
    return c < 0 ? `${c}` : `[${n.join(`,`)}]`
}
function Kt(e) {
    let t = typeof e;
    return t === `string` ? It(e) : e instanceof String ? It(e.toString()) : e === void 0 ? Mp.toString() : e === 0 && 1 / e < 0 ? Lp.toString() : t === `bigint` ? `["BigInt","${e}"]` : String(e)
}
function qt(e, t, n=`lazy`) {
    var r;
    switch ((r = W.__framer_events) == null || r.push([e, t, n]),
    e) {
    case `published_site_click`:
        {
            let {trackingId: e, href: n} = t;
            e && document.dispatchEvent(new CustomEvent(`framer:click`,{
                detail: {
                    trackingId: e,
                    href: n
                }
            }));
            break
        }
    case `published_site_form_submit`:
        {
            let {trackingId: e} = t;
            e && document.dispatchEvent(new CustomEvent(`framer:formsubmit`,{
                detail: {
                    trackingId: e
                }
            }));
            break
        }
    case `published_site_pageview`:
        {
            let {framerLocale: e} = t;
            document.dispatchEvent(new CustomEvent(`framer:pageview`,{
                detail: {
                    framerLocale: e
                }
            }));
            break
        }
    }
}
function Jt() {
    return {
        [zp.QueryCache]: new Map,
        [zp.CollectionUtilsCache]: new Map
    }
}
function Yt() {
    if (!_p)
        return;
    if (Bp !== void 0)
        return Bp;
    let e = document.getElementById(`__framer__handoverData`);
    if (e) {
        try {
            Bp = Ut(e.text) ?? Jt()
        } catch (e) {
            Bp = Jt(),
            console.warn(`Failed to parse handover data. Falling back to network.`, e)
        }
        return bp( () => {
            e?.remove(),
            e = null
        }
        ),
        Bp
    }
}
function Xt(e, t) {
    let n = Yt();
    return n ? n[e].has(t) : !1
}
function Zt(e, t) {
    let n = Yt();
    if (!n)
        return;
    let r = n[e];
    if (!r.has(t))
        return;
    let i = r.get(t);
    return r.delete(t),
    i
}
function Qt(e) {
    return e?.id ?? Tp
}
function $t(e, t, n, r) {
    return `${e}|${t}|${n}|${r}`
}
function en(e) {
    return t => {
        if (!e)
            return;
        let n = e[t];
        if (!n)
            return;
        if (Wp.has(n))
            return Wp.get(n);
        let r = new Kp(n,t);
        return Wp.set(n, r),
        r
    }
}
function tn({children: e, collectionUtils: t}) {
    let n = T( () => ({
        get: en(t)
    }), [t]);
    return S(Gp.Provider, {
        value: n,
        children: e
    })
}
function nn() {
    return w(Gp)
}
function rn(e, t) {
    if (!e.startsWith(`/`) || !t.startsWith(`/`))
        throw Error(`from/to paths are expected to be absolute`);
    let[n] = an(e)
      , [r,i] = an(t)
      , a = on(n, r);
    return a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
}
function an(e) {
    let t = e.lastIndexOf(`/`);
    return [e.substring(0, t + 1), e.substring(t + 1)]
}
function on(e, t) {
    if (e === t || (e = `/` + sn(e),
    t = `/` + sn(t),
    e === t))
        return ``;
    let n = e.length
      , r = n - 1
      , i = t.length - 1
      , a = r < i ? r : i
      , o = -1
      , s = 0;
    for (; s < a; s++) {
        let n = Yp(e, 1 + s);
        if (n !== Yp(t, 1 + s))
            break;
        n === Jp && (o = s)
    }
    if (s === a)
        if (i > a) {
            if (Yp(t, 1 + s) === Jp)
                return Zp(t, 1 + s + 1);
            if (s === 0)
                return Zp(t, 1 + s)
        } else
            r > a && (Yp(e, 1 + s) === Jp ? o = s : s === 0 && (o = 0));
    let c = ``;
    for (s = 1 + o + 1; s <= n; ++s)
        (s === n || Yp(e, s) === Jp) && (c += c.length === 0 ? `..` : `/..`);
    return `${c}${Zp(t, 1 + o)}`
}
function sn(e) {
    let t = ``
      , n = 0
      , r = -1
      , i = 0
      , a = 0;
    for (let o = 0; o <= e.length; ++o) {
        if (o < e.length)
            a = Yp(e, o);
        else if (em(a))
            break;
        else
            a = Jp;
        if (em(a)) {
            if (!(r === o - 1 || i === 1))
                if (i === 2) {
                    if (t.length < 2 || n !== 2 || Yp(t, t.length - 1) !== qp || Yp(t, t.length - 2) !== qp) {
                        if (t.length > 2) {
                            let e = Xp(t, $p);
                            e === -1 ? (t = ``,
                            n = 0) : (t = Zp(t, 0, e),
                            n = t.length - 1 - Xp(t, $p)),
                            r = o,
                            i = 0;
                            continue
                        } else if (t.length !== 0) {
                            t = ``,
                            n = 0,
                            r = o,
                            i = 0;
                            continue
                        }
                    }
                    Qp && (t += t.length > 0 ? `${$p}..` : `..`,
                    n = 2)
                } else
                    t.length > 0 ? t += `${$p}${Zp(e, r + 1, o)}` : t = Zp(e, r + 1, o),
                    n = o - r - 1;
            r = o,
            i = 0
        } else
            a === qp && i !== -1 ? ++i : i = -1
    }
    return t
}
function cn(e, t) {
    return e.replace(nm, (e, n) => {
        let r = t[n];
        return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r)
    }
    )
}
function ln(e) {
    let t = O === void 0 ? `` : O.location.search;
    return t ? un(t, e) : e
}
function un(e, t) {
    let n = t.indexOf(`#`)
      , r = n === -1 ? t : t.substring(0, n)
      , i = n === -1 ? `` : t.substring(n)
      , a = r.indexOf(`?`)
      , o = a === -1 ? r : r.substring(0, a)
      , s = a === -1 ? `` : r.substring(a)
      , c = new URLSearchParams(s)
      , l = new URLSearchParams(e);
    for (let[e,t] of l) {
        if (c.has(e) || e === rm)
            continue;
        c.append(e, t)
    }
    let u = c.toString();
    return u === `` ? r + i : o + `?` + u + i
}
async function dn(e, t, n, r, i, a, o) {
    let s = e
      , c = !1
      , l = {
        ...a
    }
      , u = Array.from(s.matchAll(nm))
      , d = await Promise.all(u.map(async e => {
        let s = e?.[0]
          , u = e?.[1];
        if (!s || !u)
            throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !F(d))
            throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t)
            return d;
        let p = f.getRecordIdBySlug(d, t)
          , m = St(p) ? await p : p;
        if (!m)
            return d;
        let h = f.getSlugByRecordId(m, n)
          , g = St(h) ? await h : h;
        if (!g) {
            c = !0;
            let e = f.getSlugByRecordId(m, r)
              , t = St(e) ? await e : e;
            return t && (l[u] = t),
            t ?? d
        }
        return l[u] = g,
        g
    }
    ))
      , f = 0
      , p = ``
      , m = !1;
    for (let e = 0; e < u.length; e++) {
        let t = u[e]
          , n = d[e];
        !t || !n || (p += s.substring(f, t.index),
        f = (t.index ?? 0) + (t[0]?.length ?? 0),
        p += d[e],
        m = !0)
    }
    return m && (p += s.substring(f),
    s = p),
    {
        path: s,
        pathVariables: l,
        isMissingInLocale: c
    }
}
async function fn({currentLocale: e, nextLocale: t, defaultLocale: n, route: r, pathVariables: i, collectionUtils: a, preserveQueryParams: o}) {
    let {path: s, pathLocalized: c} = r
      , l = c?.[t.id] ?? s
      , u = {
        path: l,
        pathVariables: i,
        isMissingInLocale: !1
    };
    if (!l)
        return u;
    if (i && r.collectionId)
        try {
            u = await dn(l, e, t, n, r.collectionId, i, a)
        } catch {}
    return t.slug && (u.path = `/` + t.slug + u.path),
    o && u.path && (u.path = ln(u.path)),
    u
}
function pn(e) {
    if (!e)
        return ``;
    let t;
    try {
        t = new URL(e)
    } catch {
        return ``
    }
    return t.pathname === `/` || O.location.origin !== t.origin ? `` : t.pathname.endsWith(`/`) ? t.pathname.slice(0, -1) : t.pathname
}
function mn({children: e, value: t}) {
    return S(im.Provider, {
        value: t,
        children: e
    })
}
function hn() {
    return d.useContext(im)
}
function gn(e, t, {global: n, routes: r}) {
    return r[e]?.[t] || n
}
function _n(e) {
    let t = am
      , n = e.next(0)
      , r = [n.value];
    for (; !n.done && t < om; )
        n = e.next(t),
        r.push(n.value),
        t += am;
    return r.length === 1 && r.push(n.value),
    {
        easing: `linear(${r.join(`,`)})`,
        duration: t - am
    }
}
function vn(e) {
    return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`]
}
function yn(e) {
    let {innerWidth: t, innerHeight: n} = O
      , [r,i] = vn(e.x)
      , [a,o] = vn(e.y);
    return {
        x: i === `px` ? r : t * (r / 100),
        y: o === `px` ? a : n * (a / 100)
    }
}
function bn(e, t, n, r) {
    let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
    return e.mask && (i += (r?.makeKeyframe)?.call(r, e.mask, t, n) || ``),
    i
}
function xn(e) {
    return e ? cm[e] : void 0
}
function Sn(e, {transition: t, ...n}) {
    let r = `view-transition-` + e
      , i = {
        duration: `0s`,
        easing: `linear`
    };
    if (t.type === `tween`)
        i.duration = t.duration + `s`,
        i.easing = `cubic-bezier(${t.ease.join(`,`)})`;
    else if (Cn(t)) {
        let {easing: e, duration: n} = _n(Me({
            keyframes: [0, 1],
            ...wn(t),
            restDelta: .001,
            restSpeed: 1e-4
        }));
        i.duration = n + `ms`,
        i.easing = e
    }
    let a = xn(n?.mask?.type)
      , o = bn(n, `start`, e, a)
      , s = bn({
        ...lm,
        mask: n.mask
    }, `end`, e, a);
    return e === `exit` && ([o,s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
}
function Cn(e) {
    return e.type === `spring`
}
function wn(e) {
    return e.durationBasedSpring ? {
        duration: e.duration * 1e3,
        bounce: e.bounce
    } : {
        stiffness: e.stiffness,
        damping: e.damping,
        mass: e.mass
    }
}
function Tn({exit: e=dm, enter: t}) {
    let n = document.createElement(`style`);
    n.id = um;
    let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
    (e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) && (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `,
    r += Sn(`exit`, e),
    r += Sn(`enter`, t),
    n.textContent = r,
    document.head.appendChild(n)
}
function En() {
    bp( () => {
        Ce.render( () => {
            performance.mark(`framer-vt-remove`);
            let e = document.getElementById(um);
            e && document.head.removeChild(e)
        }
        )
    }
    )
}
function Dn() {
    return !!document.startViewTransition
}
function On(e) {
    return new Promise(t => {
        Ce.render( () => {
            performance.mark(`framer-vt-style`),
            Tn(e),
            t()
        }
        )
    }
    )
}
async function kn(e, t, n) {
    if (!Dn()) {
        e();
        return
    }
    if (await On(t),
    n?.aborted)
        return;
    performance.mark(`framer-vt`);
    let r = document.startViewTransition(async () => {
        performance.mark(`framer-vt-freeze`),
        !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()),
        await e())
    }
    );
    return r.updateCallbackDone.then( () => {
        performance.mark(`framer-vt-unfreeze`)
    }
    ).catch(fm),
    Promise.all([r.ready, r.finished]).then( () => {
        performance.mark(`framer-vt-finished`),
        En()
    }
    ).catch(fm),
    r
}
function An() {
    let e = hn()
      , t = C(void 0);
    return D( () => {
        t.current &&= (t.current(),
        void 0)
    }
    ),
    E( (n, r, i, a) => {
        let o = gn(n, r, e);
        if (o) {
            let e = new Promise(e => {
                t.current = e
            }
            );
            return kn(async () => {
                i(),
                await e
            }
            , o, a)
        }
        i()
    }
    , [e])
}
function jn(e, t) {
    bp( () => {
        let n = document.querySelector(`link[rel='canonical']`);
        if (!n)
            return;
        let r = new URL(e,t);
        r.search = ``,
        n.setAttribute(`href`, r.toString())
    }
    )
}
function Mn(e, t, n, r=f) {
    r( () => {
        let t = async e => (await kt({
            ...n,
            continueAfter: `paint`
        }),
        e())
          , r = t(e);
        return () => {
            (async () => {
                let e = await r;
                e && t(e)
            }
            )()
        }
    }
    , t)
}
function Nn(e) {
    let t = C(void 0);
    return Mn( () => {
        t.current &&= (t.current(),
        void 0)
    }
    , void 0, {
        priority: `user-blocking`
    }),
    E(n => {
        let r = new Promise(e => {
            t.current = e
        }
        );
        if (!e)
            return {
                promise: r,
                measureDetail: n,
                ignore: null
            };
        let i = `${e}-start`
          , a = `${e}-end`
          , o = !1;
        return performance.mark(i),
        r.finally( () => {
            o || (performance.mark(a),
            performance.measure(e, {
                start: i,
                end: a,
                detail: n
            }))
        }
        ).catch(e => {
            console.error(e)
        }
        ),
        {
            promise: r,
            measureDetail: n,
            ignore: () => {
                var e;
                o = !0,
                (e = t.current) == null || e.call(t),
                t.current = void 0
            }
        }
    }
    , [e])
}
async function Pn(e, t, {currentRoutePath: n, currentRoutePathLocalized: r, currentPathVariables: i, hash: a, pathVariables: o, localeId: s, preserveQueryParams: c, siteCanonicalURL: l}, u=!1) {
    let {path: d} = t;
    if (!d)
        return;
    let f = Vn(t, {
        currentRoutePath: n,
        currentRoutePathLocalized: r,
        currentPathVariables: i,
        hash: a,
        pathVariables: o,
        preserveQueryParams: c,
        siteCanonicalURL: l,
        localeId: s
    });
    try {
        return await Ln({
            routeId: e,
            hash: a,
            pathVariables: o,
            localeId: s
        }, f, u)
    } catch {}
}
function Fn(e) {
    return I(e) && F(e.routeId)
}
function In(e, t, n=!1) {
    performance.mark(`framer-history-replace`),
    (n ? O.history.__proto__.replaceState : O.history.replaceState).call(O.history, e, ``, t)
}
async function Ln(e, t, n=!1) {
    if (performance.mark(`framer-history-push`),
    jn(t, O.location.href),
    !n) {
        O.history.pushState(e, ``, t);
        return
    }
    let r = !1, i;
    hm && (i = () => {
        if (r = !0,
        gm)
            return;
        let e = `Popstate called after intercept(). Please report this to the Framer team.`;
        console.error(e),
        qt(`published_site_load_recoverable_error`, {
            message: e
        })
    }
    ,
    O.addEventListener(`popstate`, i, {
        once: !0
    })),
    gm && hm ? O.history.__proto__.pushState.call(O.history, e, ``, t) : O.history.pushState(e, ``, t),
    hm && queueMicrotask( () => {
        r || (hm = !1,
        O.removeEventListener(`popstate`, i))
    }
    )
}
function Rn({disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r}) {
    f( () => {
        e || (performance.mark(`framer-history-set-initial-state`),
        In({
            routeId: t,
            pathVariables: n,
            localeId: r
        }, void 0, !0))
    }
    , [])
}
function zn(e, t) {
    let n = An()
      , r = Nn(`framer-route-change`)
      , i = C(void 0)
      , a = E(async ({state: a}) => {
        if (O.navigation?.transition && O.navigation?.transition?.navigationType !== `traverse` || !I(a))
            return;
        let {routeId: o, hash: s, pathVariables: c, localeId: l} = a;
        if (!F(o))
            return;
        let u = r({
            popstate: !0
        })
          , d = ut();
        u.promise.finally(d);
        let f = await n(e.current, o, () => {
            t(o, F(l) ? l : void 0, F(s) ? s : void 0, O.location.pathname + O.location.search + O.location.hash, I(c) ? c : void 0, !0, u, !1)
        }
        )
          , p = O.navigation?.transition;
        await (f?.updateCallbackDone ?? Promise.resolve()).then(i.current?.resolve).catch(i.current?.reject),
        await u.promise;
        try {
            await p?.finished
        } catch (e) {
            console.warn(`Popstate transition failed`, e)
        }
        mm(),
        jn(O.location.href)
    }
    , [e, r, t, n])
      , o = E(e => {
        e.navigationType !== `traverse` || !e.canIntercept || e.intercept({
            async handler() {
                await new Promise( (e, t) => {
                    i.current = {
                        resolve: e,
                        reject: t
                    }
                }
                ),
                i.current = void 0
            },
            scroll: `after-transition`
        })
    }
    , []);
    D( () => (O.addEventListener(`popstate`, a),
    _m && O.navigation.addEventListener(`navigate`, o),
    () => {
        O.removeEventListener(`popstate`, a),
        _m && O.navigation.removeEventListener(`navigate`, o)
    }
    ), [a, o])
}
function Bn(e, t, n) {
    let r = lt(t, e);
    if (!r)
        return;
    let i = Object.assign({}, t?.elements, n);
    return r.replace(nm, (e, t) => i[t] ?? e)
}
function Vn(e, {currentRoutePath: t, currentRoutePathLocalized: n, currentPathVariables: r, hash: i, pathVariables: a, hashVariables: o, relative: s=!0, preserveQueryParams: c, onlyHash: l=!1, siteCanonicalURL: u, localeId: d}) {
    let f = Bn(i, e, o);
    if (l)
        return f ?? ``;
    let p = t ?? `/`;
    n && d && (p = n[d] ?? p),
    r && (p = p.replace(nm, (e, t) => String(r[t] || e)));
    let m = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
    a && (m = m.replace(nm, (e, t) => String(a[t] || e)));
    let h = p === m && f;
    if (s)
        if (tm.has(p) && O !== void 0) {
            let e = pn(u);
            m = rn(O.location.pathname, e + m)
        } else
            m = rn(p, m);
    return (c || h) && (m = ln(m)),
    f && (m = `${m}#${f}`),
    m
}
async function Hn(e, t, n) {
    if (!e.path || !t)
        return !1;
    let r = `${n.slug ? `/${n.slug}` : ``}${cn(e.path, t)}`;
    return (await fetch(r, {
        method: `HEAD`,
        redirect: `manual`
    })).type === `opaqueredirect` ? (O.location.href = O.location.origin + r,
    !0) : !1
}
function Un() {
    let e = nn();
    return E(t => Wn({
        ...t,
        collectionUtils: e
    }), [e])
}
async function Wn(e) {
    let t = await fn(e);
    if (t) {
        try {
            localStorage.setItem(`preferredLocale`, e.nextLocale.code)
        } catch {}
        try {
            if (!F(t.path))
                throw Error(`Expected result.path to be a string`);
            if (t.isMissingInLocale && await Hn(e.route, t.pathVariables, e.nextLocale))
                return
        } catch {}
        return t
    }
}
function Gn() {
    let e = C(Promise.resolve())
      , t = C()
      , n = E(n => {
        if (n.navigationType === `traverse` || !n.canIntercept)
            return;
        let r = t.current;
        r?.signal.addEventListener(`abort`, () => {
            r.abort(`user aborted`)
        }
        ),
        n.intercept({
            handler: () => e.current
        })
    }
    , []);
    return E( (r, i, a) => {
        if (!_m) {
            i();
            return
        }
        e.current = r,
        t.current = a,
        O.navigation.addEventListener(`navigate`, n),
        i(!0),
        r.finally( () => {
            O.navigation.removeEventListener(`navigate`, n)
        }
        )
    }
    , [n])
}
function Kn(e) {
    return e.toLowerCase().replace(vm, `-`).replace(ym, ``)
}
function qn(e, t) {
    let n = re( () => ({
        inputs: t,
        result: e()
    }))[0]
      , r = C(!0)
      , i = C(n)
      , a = r.current || t && i.current.inputs && rt(t, i.current.inputs, !1) ? i.current : {
        inputs: t,
        result: e()
    };
    return D( () => {
        r.current = !1,
        i.current = a
    }
    , [a]),
    a.result
}
function Jn({children: e}) {
    let t = C(null)
      , n = u(e => {
        t.current = e;
        let n = () => {
            e()
        }
        ;
        return O.addEventListener(`popstate`, n),
        () => {
            t.current = null,
            O.removeEventListener(`popstate`, n)
        }
    }
    , () => O.location.search, () => ``)
      , r = x(n)
      , i = E( () => {
        var e;
        (e = t.current) == null || e.call(t)
    }
    , [])
      , a = qn( () => ({
        urlSearchParams: new URLSearchParams(r),
        triggerUpdate: i
    }), [r, i]);
    return S(xm.Provider, {
        value: a,
        children: e
    })
}
function Yn() {
    return d.useContext(wm)
}
function Xn() {
    if (!Em)
        return;
    Om = !0,
    performance.mark(`framer-react-event-handling-start`);
    let e = {
        capture: !0
    }
      , t = document.body;
    Em.forEach(n => t.addEventListener(n, Dm, e))
}
function Zn() {
    return D( () => {
        if (!Om || !Em)
            return;
        let e = {
            capture: !0
        }
          , t = document.body;
        Em.forEach(n => t.removeEventListener(n, Dm, e)),
        Em = void 0,
        performance.mark(`framer-react-event-handling-end`)
    }
    , []),
    null
}
function Qn(e) {
    let t = !1;
    return function(...n) {
        if (!t)
            return t = !0,
            e.apply(this, n)
    }
}
function $n(e, t, n) {
    try {
        performance.measure(e, t, n)
    } catch (t) {
        console.warn(`Could not measure ${e}`, t)
    }
}
function er() {
    Jm = new qm,
    Jm.render.markStart()
}
function tr() {
    p( () => {
        Jm?.useInsertionEffects.markRouterStart()
    }
    , []),
    f( () => {
        Jm?.useLayoutEffects.markRouterStart()
    }
    , []),
    D( () => {
        Jm?.useEffects.markRouterStart()
    }
    , [])
}
function nr() {
    p( () => {
        Jm?.render.markEnd(),
        Jm?.useInsertionEffects.markStart()
    }
    , []),
    f( () => {
        if (Jm?.useLayoutEffects.markStart(),
        document.visibilityState !== `visible`) {
            Ym = !0;
            return
        }
        Ce.read( () => {
            Jm?.browserRendering.requestAnimationFrame.markStart(),
            Jm?.unattributedHydrationOverhead.measure()
        }
        )
    }
    , []),
    D( () => {
        Jm?.useEffects.markStart(),
        Jm?.browserRendering.hasStarted || (Jm?.mutationEffects.measure(),
        Jm?.useEffects.markAreSynchronous())
    }
    , [])
}
function rr() {
    p( () => {
        Jm?.useInsertionEffects.markEnd()
    }
    , []),
    f( () => {
        Jm?.useLayoutEffects.markEnd(),
        !(Ym || document.visibilityState !== `visible`) && Ce.read( () => {
            Jm?.browserRendering.requestAnimationFrame.markEnd(),
            kt().then( () => {
                Jm?.browserRendering.layoutStylePaint.markEnd()
            }
            )
        }
        )
    }
    , []),
    D( () => {
        Jm?.useEffects.markEnd()
    }
    , [])
}
function ir() {
    return nr(),
    null
}
function ar() {
    return rr(),
    null
}
function or(e, t) {
    let n = {
        style: t,
        "data-framer-root": ``
    };
    return d.isValidElement(e) ? d.cloneElement(e, n) : S(e, {
        ...n
    })
}
function sr() {
    return $m
}
function cr(e) {
    if (eh?.lastRoutes !== e) {
        let t = {}
          , n = {}
          , r = []
          , i = {}
          , a = e;
        for (let r in e) {
            let i = e[r];
            L(i, `route must be defined`);
            let {path: a, pathLocalized: o} = i;
            if (!a)
                continue;
            let s = dr(a);
            if (t[a] = {
                path: a,
                depth: s,
                routeId: r
            },
            !o)
                continue;
            for (let e in o) {
                let t = o[e];
                L(t, `localizedPath must be defined`);
                let i = dr(t)
                  , a = n[e] ||= {};
                a[t] = {
                    path: t,
                    depth: i,
                    routeId: r
                }
            }
        }
        for (let e in r = Object.values(t),
        r.sort( ({depth: e}, {depth: t}) => t - e),
        n) {
            let t = n[e];
            if (!t)
                continue;
            let r = Object.values(t);
            r.sort( ({depth: e}, {depth: t}) => t - e),
            i[e] = r
        }
        eh = {
            pathRoutes: t,
            pathRoutesLocalized: n,
            paths: r,
            pathsLocalized: i,
            lastRoutes: a
        }
    }
    return {
        pathRoutes: eh.pathRoutes,
        paths: eh.paths,
        pathRoutesLocalized: eh.pathRoutesLocalized,
        pathsLocalized: eh.pathsLocalized
    }
}
function lr(e, t, n=!0, r=sr()) {
    return ur(e, t, r, n)
}
function ur(e, t, n, r=!0) {
    let {pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s} = cr(e), c, l, u = !1;
    if (n.length > 0) {
        let e = t.split(`/`).find(Boolean);
        if (e && (c = n.find( ({slug: t}) => t === e),
        c && (l = c.id,
        t = t.substring(c.slug.length + 1),
        u = !0)),
        !l) {
            let e = n.find( ({slug: e}) => e === ``);
            e && (l = e.id)
        }
    }
    if (l && u) {
        let e = o[l]
          , n = e ? e[t] : void 0;
        if (n) {
            let e = fr(t, n.path);
            if (e.isMatch)
                return {
                    routeId: n.routeId,
                    localeId: l,
                    pathVariables: e.pathVariables
                }
        }
    }
    let d = i[t];
    if (d) {
        let e = fr(t, d.path);
        if (e.isMatch)
            return {
                routeId: d.routeId,
                localeId: l,
                pathVariables: e.pathVariables
            }
    }
    if (l && u) {
        let e = s[l];
        if (e)
            for (let {path: n, routeId: r} of e) {
                let e = fr(t, n);
                if (e.isMatch)
                    return {
                        routeId: r,
                        localeId: l,
                        pathVariables: e.pathVariables
                    }
            }
    }
    for (let {path: e, routeId: n} of a) {
        let r = fr(t, e);
        if (r.isMatch)
            return {
                routeId: n,
                localeId: l,
                pathVariables: r.pathVariables
            }
    }
    if (!r)
        throw Error(`No exact match found for path`);
    let f = i[`/`];
    if (f)
        return {
            routeId: f.routeId,
            localeId: l
        };
    let p = Object.keys(e)[0];
    if (!p)
        throw Error(`Router should not have undefined routes`);
    return {
        routeId: p,
        localeId: l
    }
}
function dr(e) {
    let t = e.replace(/^\/|\/$/gu, ``);
    return t === `` ? 0 : t.split(`/`).length
}
function fr(e, t) {
    let n = []
      , r = pr(t).replace(nm, (e, t) => (n.push(t),
    `([^/]+)`))
      , i = RegExp(r + `$`)
      , a = e.match(i);
    if (!a)
        return {
            isMatch: !1
        };
    if (a.length === 1)
        return {
            isMatch: !0
        };
    let o = {}
      , s = a.slice(1);
    for (let e = 0; e < n.length; ++e) {
        let t = n[e];
        if (t === void 0)
            continue;
        let r = s[e]
          , i = o[t];
        if (i) {
            if (i !== r)
                return {
                    isMatch: !1
                };
            continue
        }
        if (r === void 0)
            throw Error(`Path variable values cannot be undefined`);
        o[t] = r
    }
    return {
        isMatch: !0,
        pathVariables: o
    }
}
function pr(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`)
}
function mr() {
    if (`PerformanceServerTiming`in O) {
        let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
        if (!e || e.length === 0)
            return new URLSearchParams;
        let t = e.find(e => e.name === `abtests`);
        return t ? new URLSearchParams(t.description) : new URLSearchParams
    }
    return new URLSearchParams
}
function hr(e, t, n) {
    let r = e[n];
    if (!r)
        return;
    let i = r.abTestingParentId ?? n;
    if (!e[i])
        return;
    let {abTestingParentId: a, ...o} = r
      , s = e[i].elements || r.elements ? {
        ...e[i].elements,
        ...r.elements
    } : void 0;
    e[i] = {
        ...o,
        elements: s,
        abTestingVariantId: n,
        abTestId: t
    }
}
function gr(e, t) {
    for (let[n,r] of t)
        hr(e, n, r)
}
function _r(e) {
    for (let t in e)
        e[t]?.abTestingParentId && delete e[t]
}
function vr(e, t) {
    if (!e[t] || !e[t].abTestingParentId)
        return;
    let n = e[t].abTestingParentId
      , {abTestingParentId: r, ...i} = e[t]
      , a = e[n]?.elements || i.elements ? {
        ...e[n]?.elements,
        ...i.elements
    } : void 0;
    e[n] = {
        ...i,
        elements: a,
        abTestingVariantId: t
    }
}
function yr(e, t) {
    if (O === void 0)
        return t;
    let n = t;
    if (t) {
        vr(e, t);
        let r = e[t]?.abTestingParentId;
        r && (n = r)
    }
    return gr(e, mr()),
    _r(e),
    n
}
async function br(e, t, n=`beforeend`) {
    let r, i;
    switch (n) {
    case `beforebegin`:
        L(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        r = t.parentNode,
        i = t;
        break;
    case `afterend`:
        L(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        r = t.parentNode,
        i = t.nextSibling;
        break;
    case `afterbegin`:
        r = t,
        i = t.firstChild;
        break;
    case `beforeend`:
        r = t,
        i = null;
        break;
    default:
        R(n)
    }
    let a = document.createRange();
    a.selectNodeContents(r);
    let o = a.createContextualFragment(e);
    await xr(o, r, i)
}
async function xr(e, t, n) {
    for (let r = e.firstChild; r; r = r.nextSibling) {
        if (r instanceof HTMLScriptElement) {
            let e = Sr(r, t, n);
            e !== void 0 && await e;
            continue
        }
        let e = r.cloneNode(!1);
        t.insertBefore(e, n),
        r.firstChild && await xr(r, e, null)
    }
}
function Sr(e, t, n) {
    let r = e.cloneNode(!0);
    if (!e.hasAttribute(`src`) || e.hasAttribute(`async`) || e.hasAttribute(`defer`) || e.getAttribute(`type`)?.toLowerCase() === `module`)
        t.insertBefore(r, n);
    else
        return Cr(r, t, n)
}
function Cr(e, t, n) {
    return new Promise(r => {
        e.onload = e.onerror = r,
        t.insertBefore(e, n)
    }
    )
}
function wr(e) {
    let {isInitialNavigation: t} = ot();
    D( () => {
        if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t ? t.setAttribute(`content`, e.robots) : (t = document.createElement(`meta`),
            t.setAttribute(`name`, `robots`),
            t.setAttribute(`content`, e.robots),
            document.head.appendChild(t))
        }
    }
    , [e.robots]),
    p( () => {
        var t;
        document.title = e.title || ``,
        e.viewport && ((t = document.querySelector(`meta[name="viewport"]`)) == null || t.setAttribute(`content`, e.viewport))
    }
    , [e.title, e.viewport]),
    D( () => {
        if (!t)
            return;
        let n = document.getElementById(th);
        n && n.dataset[nh] !== void 0 || Tr(e.customHTMLHeadStart, e.customHTMLHeadEnd, e.customHTMLBodyStart, e.customHTMLBodyEnd)
    }
    , [])
}
async function Tr(e, t, n, r) {
    let i, a, o, s;
    if (e || t) {
        let {start: n, end: r} = Er(document.head.childNodes, e ? rh : void 0, t ? ih : void 0);
        i = n,
        a = r
    }
    if (n || r) {
        let {start: e, end: t} = Er(document.body.childNodes, n ? ah : void 0, r ? oh : void 0);
        o = e,
        s = t
    }
    e && i && await br(e, i, `beforebegin`),
    t && a && await br(t, a, `beforebegin`),
    n && o && await br(n, o, `beforebegin`),
    r && s && await br(r, s, `beforebegin`)
}
function Er(e, t, n) {
    if (!t && !n)
        return {
            start: void 0,
            end: void 0
        };
    let r, i, a = 0, o = e.length - 1;
    for (; a <= o; ) {
        let s = e[a]
          , c = e[o];
        if (!r && s?.nodeType === Node.COMMENT_NODE && t && `<!--${s.nodeValue}-->` === t && (r = s,
        !n) || !i && c?.nodeType === Node.COMMENT_NODE && n && `<!--${c.nodeValue}-->` === n && (i = c,
        !t) || r && i)
            break;
        a++,
        o--
    }
    return {
        start: r,
        end: i
    }
}
function Dr(e, ...t) {
    sh.has(e) || (sh.add(e),
    console.warn(e, ...t))
}
function Or(e, t, n) {
    let r = n ? `, use ${n} instead` : ``
      , i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
    Dr(i)
}
function kr(e) {
    return typeof e == `object` && !!e && uh in e && e[uh]instanceof Function && dh in e && e[dh]instanceof Function
}
function Ar(e, t) {
    return {
        interpolate(e, n) {
            let r = e.get()
              , i = n.get()
              , a = lh(r);
            return e => {
                let n = t.interpolate(r, i)(e);
                return a.set(n),
                a
            }
        },
        difference(e, n) {
            let r = e.get();
            return t.difference(r, n.get())
        }
    }
}
function jr(e, t) {
    let n = 10 ** Math.round(Math.abs(t));
    return Math.round(e * n) / n
}
function Mr(e, t) {
    return t === 0 ? Math.round(e) : (t -= t | 0,
    t < 0 && (t = 1 - t),
    Math.round(e - t) + t)
}
function Nr(e) {
    return Math.round(e * 2) / 2
}
function Pr(e, t) {
    return {
        x: e,
        y: t
    }
}
function Fr(e, t, n, r=!1) {
    let[i,a] = t
      , [o,s] = n
      , c = a - i;
    if (c === 0)
        return (s + o) / 2;
    let l = s - o;
    if (l === 0)
        return o;
    let u = o + (e - i) / c * l;
    if (r === !0)
        if (o < s) {
            if (u < o)
                return o;
            if (u > s)
                return s
        } else {
            if (u > o)
                return o;
            if (u < s)
                return s
        }
    return u
}
function Ir(e) {
    return !Number.isNaN(e) && Number.isFinite(e)
}
function Lr(e) {
    let t = Rr(e);
    return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t
}
function Rr(e) {
    let t = /\d?\.?\d+/u.exec(e);
    return t ? Number(t[0]) : void 0
}
function zr(e, t, n) {
    return mh.rgb_r = e / 255,
    mh.rgb_g = t / 255,
    mh.rgb_b = n / 255,
    mh.rgbToHsluv(),
    {
        h: mh.hsluv_h,
        s: mh.hsluv_s,
        l: mh.hsluv_l
    }
}
function Br(e, t, n, r=1) {
    return mh.hsluv_h = e,
    mh.hsluv_s = t,
    mh.hsluv_l = n,
    mh.hsluvToRgb(),
    {
        r: mh.rgb_r * 255,
        g: mh.rgb_g * 255,
        b: mh.rgb_b * 255,
        a: r
    }
}
function Vr(e, t, n, r) {
    let i = Math.round(e)
      , a = Math.round(t * 100)
      , o = Math.round(n * 100);
    return r === void 0 || r === 1 ? `hsv(` + i + `, ` + a + `%, ` + o + `%)` : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`
}
function Hr(e, t, n) {
    return {
        r: Ir(e) ? Yr(e, 255) * 255 : 0,
        g: Ir(t) ? Yr(t, 255) * 255 : 0,
        b: Ir(n) ? Yr(n, 255) * 255 : 0
    }
}
function Ur(e, t, n, r) {
    let i = [Qr(Math.round(e).toString(16)), Qr(Math.round(t).toString(16)), Qr(Math.round(n).toString(16))];
    return r && i[0].charAt(0) === i[0].charAt(1) && i[1].charAt(0) === i[1].charAt(1) && i[2].charAt(0) === i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join(``)
}
function Wr(e, t, n) {
    let r, i, a = Yr(e, 255), o = Yr(t, 255), s = Yr(n, 255), c = Math.max(a, o, s), l = Math.min(a, o, s), u = i = r = (c + l) / 2;
    if (c === l)
        u = i = 0;
    else {
        let e = c - l;
        switch (i = r > .5 ? e / (2 - c - l) : e / (c + l),
        c) {
        case a:
            u = (o - s) / e + (o < s ? 6 : 0);
            break;
        case o:
            u = (s - a) / e + 2;
            break;
        case s:
            u = (a - o) / e + 4;
            break
        }
        u /= 6
    }
    return {
        h: u * 360,
        s: i,
        l: r
    }
}
function Gr(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Kr(e, t, n) {
    let r, i, a;
    if (e = Yr(e, 360),
    t = Yr(t * 100, 100),
    n = Yr(n * 100, 100),
    t === 0)
        r = i = a = n;
    else {
        let o = n < .5 ? n * (1 + t) : n + t - n * t
          , s = 2 * n - o;
        r = Gr(s, o, e + 1 / 3),
        i = Gr(s, o, e),
        a = Gr(s, o, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: i * 255,
        b: a * 255
    }
}
function qr(e, t, n) {
    e = Yr(e, 255),
    t = Yr(t, 255),
    n = Yr(n, 255);
    let r = Math.max(e, t, n)
      , i = Math.min(e, t, n)
      , a = r - i
      , o = 0
      , s = r === 0 ? 0 : a / r
      , c = r;
    if (r === i)
        o = 0;
    else {
        switch (r) {
        case e:
            o = (t - n) / a + (t < n ? 6 : 0);
            break;
        case t:
            o = (n - e) / a + 2;
            break;
        case n:
            o = (e - t) / a + 4;
            break
        }
        o /= 6
    }
    return {
        h: o,
        s,
        v: c
    }
}
function Jr(e, t, n) {
    e = Yr(e, 360) * 6,
    t = Yr(t * 100, 100),
    n = Yr(n * 100, 100);
    let r = Math.floor(e)
      , i = e - r
      , a = n * (1 - t)
      , o = n * (1 - i * t)
      , s = n * (1 - (1 - i) * t)
      , c = r % 6
      , l = [n, o, a, a, s, n][c]
      , u = [s, n, n, o, a, a][c]
      , d = [a, a, s, n, n, o][c];
    return {
        r: l * 255,
        g: u * 255,
        b: d * 255
    }
}
function Yr(e, t) {
    let n, r;
    if (n = typeof t == `string` ? parseFloat(t) : t,
    typeof e == `string`) {
        Xr(e) && (e = `100%`);
        let t = Zr(e);
        r = Math.min(n, Math.max(0, parseFloat(e))),
        t && (r = Math.floor(r * n) / 100)
    } else
        r = e;
    return Math.abs(r - n) < 1e-6 ? 1 : r % n / n
}
function Xr(e) {
    return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1
}
function Zr(e) {
    return typeof e == `string` && e.includes(`%`)
}
function Qr(e) {
    return e.length === 1 ? `0` + e : `` + e
}
function $r(e) {
    if (e.includes(`gradient(`) || e.includes(`var(`))
        return !1;
    let t = e.replace(/^[\s,#]+/u, ``).trimEnd().toLowerCase()
      , n = ph[t];
    if (n && (t = n),
    t === `transparent`)
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: `name`
        };
    let r;
    return (r = hh.rgb.exec(t)) ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`
    } : (r = hh.rgba.exec(t)) ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: parseFloat(r[4] ?? ``),
        format: `rgb`
    } : (r = hh.hsl.exec(t)) ? {
        h: parseInt(r[1] ?? ``),
        s: Lr(r[2] ?? ``),
        l: Lr(r[3] ?? ``),
        a: 1,
        format: `hsl`
    } : (r = hh.hsla.exec(t)) ? {
        h: parseInt(r[1] ?? ``),
        s: Lr(r[2] ?? ``),
        l: Lr(r[3] ?? ``),
        a: parseFloat(r[4] ?? ``),
        format: `hsl`
    } : (r = hh.hsv.exec(t)) ? {
        h: parseInt(r[1] ?? ``),
        s: Lr(r[2] ?? ``),
        v: Lr(r[3] ?? ``),
        a: 1,
        format: `hsv`
    } : (r = hh.hsva.exec(t)) ? {
        h: parseInt(r[1] ?? ``),
        s: Lr(r[2] ?? ``),
        v: Lr(r[3] ?? ``),
        a: parseFloat(r[4] ?? ``),
        format: `hsv`
    } : (r = hh.hex8.exec(t)) ? {
        r: ei(r[1] ?? ``),
        g: ei(r[2] ?? ``),
        b: ei(r[3] ?? ``),
        a: ti(r[4] ?? ``),
        format: n ? `name` : `hex`
    } : (r = hh.hex6.exec(t)) ? {
        r: ei(r[1] ?? ``),
        g: ei(r[2] ?? ``),
        b: ei(r[3] ?? ``),
        a: 1,
        format: n ? `name` : `hex`
    } : (r = hh.hex4.exec(t)) ? {
        r: ei(`${r[1]}${r[1]}`),
        g: ei(`${r[2]}${r[2]}`),
        b: ei(`${r[3]}${r[3]}`),
        a: ti(r[4] + `` + r[4]),
        format: n ? `name` : `hex`
    } : (r = hh.hex3.exec(t)) ? {
        r: ei(`${r[1]}${r[1]}`),
        g: ei(`${r[2]}${r[2]}`),
        b: ei(`${r[3]}${r[3]}`),
        a: 1,
        format: n ? `name` : `hex`
    } : !1
}
function ei(e) {
    return parseInt(e, 16)
}
function ti(e) {
    return ei(e) / 255
}
function ni(e) {
    let t = gh.exec(e);
    if (!t)
        return null;
    let {r: n=`0`, g: r=`0`, b: i=`0`, a} = t.groups ?? {};
    return {
        r: parseFloat(n),
        g: parseFloat(r),
        b: parseFloat(i),
        a: a ? parseFloat(a) : 1
    }
}
function ri(e=0) {
    let t = Math.abs(e);
    return t <= .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4
}
function ii({r: e, g: t, b: n, a: r}) {
    return {
        r: ri(e),
        g: ri(t),
        b: ri(n),
        a: r
    }
}
function ai(e=0) {
    let t = Math.abs(e);
    return t > .0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - .055) : e * 12.92
}
function oi({r: e, g: t, b: n, a: r}) {
    return {
        r: ai(e),
        g: ai(t),
        b: ai(n),
        a: r
    }
}
function si({r: e, g: t, b: n, a: r}) {
    let i = Math.max(e, t, n)
      , a = Math.min(e, t, n)
      , o = {
        h: 0,
        s: i === 0 ? 0 : 1 - a / i,
        v: i,
        a: r
    };
    return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n ? 6 : 0) : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60),
    o
}
function ci(e) {
    return (e %= 360) < 0 ? e + 360 : e
}
function li({h: e=0, s: t=0, v: n=0, a: r=1}) {
    let i = ci(e)
      , a = Math.abs(i / 60 % 2 - 1);
    switch (Math.floor(i / 60)) {
    case 0:
        return {
            r: n,
            g: n * (1 - t * a),
            b: n * (1 - t),
            a: r
        };
    case 1:
        return {
            r: n * (1 - t * a),
            g: n,
            b: n * (1 - t),
            a: r
        };
    case 2:
        return {
            r: n * (1 - t),
            g: n,
            b: n * (1 - t * a),
            a: r
        };
    case 3:
        return {
            r: n * (1 - t),
            g: n * (1 - t * a),
            b: n,
            a: r
        };
    case 4:
        return {
            r: n * (1 - t * a),
            g: n * (1 - t),
            b: n,
            a: r
        };
    case 5:
        return {
            r: n,
            g: n * (1 - t),
            b: n * (1 - t * a),
            a: r
        };
    default:
        return {
            r: n * (1 - t),
            g: n * (1 - t),
            b: n * (1 - t),
            a: r
        }
    }
}
function ui(e) {
    return bh(yh(e))
}
function di(e) {
    return vh(_h(e))
}
function fi(e, t, n, r=1) {
    let i;
    return typeof e == `number` && !Number.isNaN(e) && typeof t == `number` && !Number.isNaN(t) && typeof n == `number` && !Number.isNaN(n) ? i = hi({
        r: e,
        g: t,
        b: n,
        a: r
    }) : typeof e == `string` ? i = pi(e) : typeof e == `object` && (i = e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`) ? hi(e) : gi(e)),
    i
}
function pi(e) {
    let t = $r(e);
    if (t)
        return t.format === `hsl` ? gi(t) : t.format === `hsv` ? mi(t) : hi(t)
}
function mi(e) {
    let t = Jr(e.h, e.s, e.v);
    return {
        ...Wr(t.r, t.g, t.b),
        ...t,
        format: `rgb`,
        a: e.a === void 0 ? 1 : _i(e.a)
    }
}
function hi(e) {
    let t = Hr(e.r, e.g, e.b);
    return {
        ...Wr(t.r, t.g, t.b),
        ...t,
        format: `rgb`,
        a: e.a === void 0 ? 1 : _i(e.a)
    }
}
function gi(e) {
    let t, n, r, i = {
        r: 0,
        g: 0,
        b: 0
    }, a = {
        h: 0,
        s: 0,
        l: 0
    };
    return t = Ir(e.h) ? e.h : 0,
    t = (t + 360) % 360,
    n = Ir(e.s) ? e.s : 1,
    typeof e.s == `string` && (n = Rr(e.s)),
    r = Ir(e.l) ? e.l : .5,
    typeof e.l == `string` && (r = Rr(e.l)),
    i = Kr(t, n, r),
    a = {
        h: t,
        s: n,
        l: r
    },
    {
        ...i,
        ...a,
        a: e.a === void 0 ? 1 : e.a,
        format: `hsl`
    }
}
function _i(e) {
    return e = parseFloat(e),
    e < 0 && (e = 0),
    (Number.isNaN(e) || e > 1) && (e = 1),
    e
}
function vi({children: e}) {
    if (w(Ph).top)
        return S(y, {
            children: e
        });
    let t = C({
        byId: {},
        byName: {},
        byLastId: {},
        byPossibleId: {},
        byLastName: {},
        byLayoutId: {},
        count: {
            byId: {},
            byName: {}
        }
    })
      , n = C({
        byId: {},
        byName: {},
        byLastId: {},
        byPossibleId: {},
        byLastName: {},
        byLayoutId: {}
    })
      , r = C(new Set).current
      , i = E( ({id: e, name: i, duplicatedFrom: a}) => {
        if (!e)
            return null;
        let o = i ? `byName` : `byId`
          , s = t.current[o][e];
        if (s)
            return s;
        let c = i || e;
        if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
            return t.current.count[o][c] === void 0 && (t.current.count[o][c] = 0,
            t.current.byLayoutId[c] = c,
            n.current[o][e] = c),
            r.add(c),
            c;
        let l;
        if (a?.length)
            for (let s = a.length - 1; s >= 0; s--) {
                let c = a[s];
                L(!!c, `duplicatedId must be defined`);
                let u = t.current[o][c]
                  , d = t.current.byLastId[c];
                if (d && !l) {
                    let e = t.current.byLayoutId[d]
                      , n = !e || e === i;
                    d && !r.has(d) && (!i || n) && (l = [d, c])
                }
                let f = u ? t.current.byLayoutId[u] : void 0
                  , p = !f || f === i;
                if (u && !r.has(u) && (!i || p))
                    return n.current[o][e] = u,
                    n.current.byLastId[c] = u,
                    r.add(u),
                    u
            }
        let u = t.current.byLastId[e];
        if (u && !r.has(u))
            return r.add(u),
            n.current.byId[e] = u,
            u;
        if (l) {
            let[t,i] = l;
            return n.current[o][e] = t,
            n.current.byLastId[i] = t,
            r.add(t),
            t
        }
        let d = t.current.byPossibleId[e];
        if (d && !r.has(d))
            return r.add(d),
            n.current.byId[e] = d,
            d;
        let f = a?.[0]
          , p = i || f || e
          , m = (t.current.count[o][p] ?? -1) + 1
          , {layoutId: h, value: g} = yi(p, m, r);
        if (t.current.count[o][p] = g,
        n.current[o][e] = h,
        a?.length && !i) {
            let e = a[a.length - 1];
            if (e && (n.current.byLastId[e] = h),
            a.length > 1)
                for (let e = 0; e < a.length - 1; e++) {
                    let t = a[e];
                    t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = h))
                }
        }
        return n.current.byLayoutId[h] = c,
        r.add(h),
        h
    }
    , [])
      , a = E( () => {
        t.current = {
            byId: {
                ...t.current.byId,
                ...n.current.byId
            },
            byLastId: {
                ...t.current.byLastId,
                ...n.current.byLastId
            },
            byPossibleId: {
                ...t.current.byPossibleId,
                ...n.current.byPossibleId
            },
            byName: {
                ...t.current.byName,
                ...n.current.byName
            },
            byLastName: {
                ...t.current.byLastName,
                ...n.current.byLastName
            },
            byLayoutId: {
                ...t.current.byLayoutId,
                ...n.current.byLayoutId
            },
            count: {
                ...t.current.count,
                byName: {}
            }
        },
        n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {}
        },
        r.clear()
    }
    , [])
      , o = C({
        getLayoutId: i,
        persistLayoutIdCache: a,
        top: !0,
        enabled: !0
    }).current;
    return S(Ph.Provider, {
        value: o,
        children: e
    })
}
function yi(e, t, n) {
    let r = t
      , i = r ? `${e}-${r}` : e;
    for (; n.has(i); )
        r++,
        i = `${e}-${r}`;
    return {
        layoutId: i,
        value: r
    }
}
function bi({enabled: e=!0, ...t}) {
    let n = w(Ph)
      , r = T( () => ({
        ...n,
        enabled: e
    }), [e]);
    return S(Ph.Provider, {
        ...t,
        value: r
    })
}
function xi(e) {
    let t = C(null);
    return t.current === null && (t.current = e()),
    t.current
}
function Si(e) {
    let {error: t, file: n} = e
      , r = n ? `Error in ${Ci(n)}` : `Error`
      , i = t instanceof Error ? t.message : `` + t;
    return te(`div`, {
        style: Ih,
        children: [S(`div`, {
            className: `text`,
            style: Rh,
            children: r
        }), i && S(`div`, {
            className: `text`,
            style: zh,
            children: i
        })]
    })
}
function Ci(e) {
    return e.startsWith(`./`) ? e.replace(`./`, ``) : e
}
function z(e) {
    return Number.isFinite(e)
}
function wi(e) {
    return !e || !Object.keys(e).length && e.constructor === Object
}
function Ti(e) {
    return typeof e != `string` && typeof e != `number`
}
function Ei(e) {
    return e != null && typeof e != `boolean` && !wi(e)
}
function Di(e) {
    return e * (Math.PI / 180)
}
function Oi(e) {
    return gt(e) ? !1 : e === 2 || e === 5
}
function ki(e) {
    if (typeof e == `string`) {
        let t = e.trim();
        if (t === `auto`)
            return 2;
        if (t.endsWith(`fr`))
            return 3;
        if (t.endsWith(`%`))
            return 1;
        if (t.endsWith(`vw`) || t.endsWith(`vh`))
            return 4
    }
    return 0
}
function Ai(e, t, n, r) {
    if (typeof t == `string`) {
        if (t.endsWith(`%`) && n)
            switch (e) {
            case `maxWidth`:
            case `minWidth`:
                return parseFloat(t) / 100 * n.width;
            case `maxHeight`:
            case `minHeight`:
                return parseFloat(t) / 100 * n.height;
            default:
                break
            }
        if (t.endsWith(`vh`)) {
            if (!r)
                return ji(e);
            switch (e) {
            case `maxWidth`:
            case `minWidth`:
                return parseFloat(t) / 100 * r.width;
            case `maxHeight`:
            case `minHeight`:
                return parseFloat(t) / 100 * r.height;
            default:
                break
            }
        }
        return parseFloat(t)
    }
    return t
}
function ji(e) {
    switch (e) {
    case `minWidth`:
    case `minHeight`:
        return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
        return 1 / 0;
    default:
        R(e, `unknown constraint key`)
    }
}
function Mi(e, t, n, r) {
    return t.minHeight && (e = Math.max(Ai(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Ai(`maxHeight`, t.maxHeight, n, r), e)),
    e
}
function Ni(e, t, n, r) {
    return t.minWidth && (e = Math.max(Ai(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Ai(`maxWidth`, t.maxWidth, n, r), e)),
    e
}
function Pi(e, t, n, r, i) {
    let a = Ni(z(e) ? e : Uh, n, r, i)
      , o = Mi(z(t) ? t : Wh, n, r, i);
    return z(n.aspectRatio) && n.aspectRatio > 0 && (z(n.left) && z(n.right) ? o = a / n.aspectRatio : z(n.top) && z(n.bottom) || n.widthType === 0 ? a = o * n.aspectRatio : o = a / n.aspectRatio),
    {
        width: a,
        height: o
    }
}
function Fi(e, t) {
    return !z(e) || !z(t) ? null : e + t
}
function Ii(e) {
    return typeof e.right == `string` || typeof e.bottom == `string` || typeof e.left == `string` && (!e.center || e.center === `y`) || typeof e.top == `string` && (!e.center || e.center === `x`)
}
function Li(e) {
    return !e._constraints || Ii(e) ? !1 : e._constraints.enabled
}
function Ri(e) {
    let {size: t} = e
      , {width: n, height: r} = e;
    return z(t) && (n === void 0 && (n = t),
    r === void 0 && (r = t)),
    z(n) && z(r) ? {
        width: n,
        height: r
    } : null
}
function zi(e) {
    let t = Ri(e);
    if (t === null)
        return null;
    let {left: n, top: r} = e;
    return z(n) && z(r) ? {
        x: n,
        y: r,
        ...t
    } : null
}
function Bi(e, t, n=!0) {
    if (e.positionFixed || e.positionAbsolute)
        return null;
    let r = t === 1 || t === 2;
    if (!Li(e) || r)
        return zi(e);
    let i = Vi(e)
      , a = Hi(t)
      , o = a ? {
        sizing: a,
        positioning: a,
        viewport: null
    } : null;
    return Hh.toRect(i, o, null, n, null)
}
function Vi(e) {
    let {left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s} = e
      , {width: c, height: l} = e;
    c === void 0 && (c = s),
    l === void 0 && (l = s);
    let {aspectRatio: u, autoSize: d} = o
      , f = Vh.quickfix({
        left: z(t),
        right: z(n),
        top: z(r),
        bottom: z(i),
        widthType: ki(c),
        heightType: ki(l),
        aspectRatio: u || null,
        fixedSize: d === !0
    })
      , p = null
      , m = null
      , h = 0
      , g = 0;
    if (f.widthType !== 0 && typeof c == `string`) {
        let e = parseFloat(c);
        c.endsWith(`fr`) ? (h = 3,
        p = e) : c === `auto` ? h = 2 : (h = 1,
        p = e / 100)
    } else
        c !== void 0 && typeof c != `string` && (p = c);
    if (f.heightType !== 0 && typeof l == `string`) {
        let e = parseFloat(l);
        l.endsWith(`fr`) ? (g = 3,
        m = e) : l === `auto` ? g = 2 : (g = 1,
        m = parseFloat(l) / 100)
    } else
        l !== void 0 && typeof l != `string` && (m = l);
    let _ = .5
      , v = .5;
    return (a === !0 || a === `x`) && (f.left = !1,
    typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && (f.top = !1,
    typeof r == `string` && (v = parseFloat(r) / 100)),
    {
        left: f.left ? t : null,
        right: f.right ? n : null,
        top: f.top ? r : null,
        bottom: f.bottom ? i : null,
        widthType: h,
        heightType: g,
        width: p,
        height: m,
        aspectRatio: f.aspectRatio || null,
        centerAnchorX: _,
        centerAnchorY: v,
        minHeight: e.minHeight,
        maxHeight: e.maxHeight,
        minWidth: e.minWidth,
        maxWidth: e.maxWidth
    }
}
function Hi(e) {
    return e === 0 || e === 1 || e === 2 ? null : e
}
function Ui() {
    return d.useContext(Gh).parentSize
}
function Wi(e) {
    return typeof e == `object`
}
function Gi(e) {
    return Wi(e) ? e.width : e
}
function Ki(e) {
    return Wi(e) ? e.height : e
}
function qi(e, t) {
    return S(Kh, {
        parentSize: t,
        children: e
    })
}
function Ji(e) {
    let t = Ui();
    return Bi(e, t, !0)
}
function Yi({width: e, height: t}) {
    return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`
}
function Xi() {
    if (Jh !== void 0)
        return Jh;
    let e = document.createElement(`div`);
    Object.assign(e.style, {
        position: `absolute`,
        display: `flex`,
        flexDirection: `column`,
        rowGap: `1px`
    }),
    e.appendChild(document.createElement(`div`)),
    e.appendChild(document.createElement(`div`)),
    document.body.appendChild(e);
    let t = e.scrollHeight === 1;
    return e.parentNode && e.parentNode.removeChild(e),
    Jh = t,
    t
}
function Zi() {
    Xh || (Xh = !0,
    !Xi() && document.body.classList.add(Yh))
}
function Qi(e) {
    return typeof e == `number` ? e : e.startsWith(`--`) ? $i.variable(e) : e === `` ? `""` : e
}
function $i(e, t) {
    let n = ` `;
    for (let e in t) {
        let r = t[e];
        n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Qi(r)}; `
    }
    return e + ` {` + n + `}`
}
function B(e, t) {
    return $i.variable(...e.flatMap(e => [`${e}-rgb`, e]), t)
}
function ea(e, t, n=pg) {
    if (!(!e || n.has(e) || typeof document > `u`)) {
        if (n.add(e),
        !t) {
            if (!mg) {
                let e = document.createElement(`style`);
                if (e.setAttribute(`type`, `text/css`),
                e.setAttribute(`data-framer-css`, `true`),
                !document.head) {
                    console.warn(`not injecting CSS: the document is missing a <head> element`);
                    return
                }
                if (document.head.appendChild(e),
                e.sheet)
                    mg = e.sheet;
                else {
                    console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
                    return
                }
            }
            t = mg
        }
        try {
            t.insertRule(e, t.cssRules.length)
        } catch {}
    }
}
function ta() {
    if (Yg)
        return;
    Yg = !0;
    let e = K.current() === K.preview ? Jg : qg;
    for (let t of e)
        ea(t, void 0, void 0)
}
function na(e) {
    return I(e) || dt(e)
}
function ra(e) {
    return !!e && Xg in e && e[Xg] === !0
}
function ia(e) {
    try {
        switch (e.type) {
        case `string`:
        case `collectionreference`:
        case `multicollectionreference`:
        case `color`:
        case `date`:
        case `link`:
        case `boxshadow`:
        case `padding`:
        case `borderradius`:
        case `gap`:
            return F(e.defaultValue) ? e.defaultValue : void 0;
        case `boolean`:
            return ft(e.defaultValue) ? e.defaultValue : void 0;
        case `enum`:
            return gt(e.defaultValue) ? void 0 : e.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        case `fusednumber`:
        case `number`:
            return pt(e.defaultValue) ? e.defaultValue : void 0;
        case `transition`:
            return I(e.defaultValue) ? e.defaultValue : void 0;
        case `border`:
            return I(e.defaultValue) ? e.defaultValue : void 0;
        case `font`:
            return I(e.defaultValue) ? e.defaultValue : void 0;
        case `linkrelvalues`:
            return mt(e.defaultValue) ? e.defaultValue : void 0;
        case `object`:
            {
                let t = I(e.defaultValue) ? e.defaultValue : {};
                return I(e.controls) && aa(t, e.controls),
                t
            }
        case `array`:
            return mt(e.defaultValue) ? e.defaultValue : void 0;
        case `file`:
        case `image`:
        case `richtext`:
        case `pagescope`:
        case `eventhandler`:
        case `segmentedenum`:
        case `responsiveimage`:
        case `componentinstance`:
        case `slot`:
        case `scrollsectionref`:
        case `customcursor`:
        case `cursor`:
        case `trackingid`:
        case `vectorsetitem`:
            return;
        default:
            return
        }
    } catch {
        return
    }
}
function aa(e, t) {
    for (let n in t) {
        let r = t[n];
        if (!r)
            continue;
        let i = e[n];
        if (!gt(i) || ra(r))
            continue;
        let a = ia(r);
        if (gt(a))
            continue;
        e[n] = a
    }
}
function oa(e) {
    if (I(e.defaultProps))
        return e.defaultProps;
    let t = {};
    return e.defaultProps = t,
    t
}
function sa(e, t) {
    if (!na(e))
        return;
    let n = oa(e);
    aa(n, t)
}
function ca(e, t) {
    Object.assign(e, {
        propertyControls: t
    }),
    sa(e, t)
}
function la(e) {
    return e.propertyControls
}
function ua() {
    let e = K.current();
    return e === K.canvas || e === K.export
}
function da() {
    let[e] = re( () => ua());
    return e
}
function fa(e) {
    let t = Object.create(Object.prototype);
    return n => (t[n] === void 0 && (t[n] = e(n)),
    t[n])
}
function pa(e, ...t) {
    if (e)
        return;
    let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
    if (n.stack)
        try {
            let e = n.stack.split(`
`);
            e[1]?.includes(`assert`) ? (e.splice(1, 1),
            n.stack = e.join(`
`)) : e[0]?.includes(`assert`) && (e.splice(0, 1),
            n.stack = e.join(`
`))
        } catch {}
    throw n
}
function ma({error: e, tags: t, extras: n, critical: r, caller: i}) {
    pa(i_, `Set up an error callback with setErrorReporter, or configure Sentry with initializeEnvironment`);
    let a = ha(e, i);
    return i_({
        error: a,
        tags: {
            ...a.tags,
            ...t
        },
        extras: {
            ...a.extras,
            ...n
        },
        critical: !!r
    }),
    a
}
function ha(e, t=ha) {
    return e instanceof Error ? e : new a_(e,t)
}
function ga() {
    return O === void 0 ? {} : l_ || (l_ = _a(),
    l_)
}
function _a() {
    let e = O.location
      , t = O?.bootstrap?.services;
    if (t)
        return t;
    let n;
    try {
        if (n = O.top.location.origin,
        t = O.top?.bootstrap?.services,
        t)
            return t
    } catch {}
    if (n && n !== e.origin)
        throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
    if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
        throw Error(`ServiceMap data was not provided in document`);
    try {
        let n = new URLSearchParams(e.search).get(`services`) || new URLSearchParams(e.hash.substring(1)).get(`services`);
        n && (t = JSON.parse(n))
    } catch {}
    if (t && typeof t == `object` && t.api)
        return t;
    throw Error(`ServiceMap requested but not available`)
}
function va(e, t=0, n=new Set) {
    if (e === null)
        return e;
    if (typeof e == `function`)
        return `[Function: ${e.name ?? `unknown`}]`;
    if (typeof e != `object`)
        return e;
    if (e instanceof Error)
        return `[${e.toString()}]`;
    if (n.has(e))
        return `[Circular]`;
    if (t > 2)
        return `...`;
    n.add(e);
    try {
        if (`toJSON`in e && typeof e.toJSON == `function`)
            return va(e.toJSON(), t + 1, n);
        if (Array.isArray(e))
            return e.map(e => va(e, t + 1, n));
        if (Object.getPrototypeOf(e) !== Object.prototype)
            return `[Object: ${`__class`in e && e.__class || e.constructor?.name}]`;
        {
            let r = {};
            for (let[i,a] of Object.entries(e))
                r[i] = va(a, t + 1, n);
            return r
        }
    } catch (e) {
        return `[Throws: ${einstanceof Error ? e.message : e}]`
    } finally {
        n.delete(e)
    }
}
function ya(e, t) {
    let n = [];
    for (let r of e.split(/[ ,]/u)) {
        let e = r.trim();
        if (e.length === 0)
            continue;
        let i = 1
          , a = !1;
        e.startsWith(`-`) && (e = e.slice(1),
        i = 3,
        a = !0);
        for (let t = 0; t <= 4; t++) {
            let n = d_[t];
            if (n && e.endsWith(n)) {
                i = t,
                a && (i += 1),
                e = e.slice(0, e.length - n.length),
                e.length === 0 && (e = `*`);
                break
            }
        }
        let o = RegExp(`^` + Ea(e).replace(/\\\*/gu, `.*`) + `$`)
          , s = 0;
        for (let e of t)
            e.id.match(o) && (e.level = i,
            ++s);
        s === 0 && n.push(r)
    }
    return n
}
function ba(e, t, n) {
    let r = new p_(e,t,n);
    for (__.push(r),
    h_?.(r); __.length > v_; )
        __.shift();
    return r
}
function xa(e) {
    return typeof e == `number` && (v_ = e),
    __
}
function Sa() {
    if (!(O === void 0 || !O.location))
        return b_ ??= y_.exec(O.location.pathname)?.groups?.filename,
        b_
}
function Ca(e) {
    let t = Sa();
    e = (t ? t + `:` : ``) + e;
    let n = g_[e];
    if (n)
        return n;
    let r = new S_(e);
    return g_[e] = r,
    ya(m_, [r]),
    h_?.(new p_(r,-1,[])),
    r
}
function wa(e, t=!0) {
    try {
        O !== void 0 && O.localStorage && (O.localStorage.logLevel = e)
    } catch {}
    let n = m_;
    m_ = e;
    let r = Object.values(g_);
    for (let e of r)
        e.level = 3;
    let i = ya(e, r);
    if (i.length > 0 && (console == null || console.warn(`Some log level specs matched no loggers:`, i)),
    t && __.length > 0) {
        console == null || console.log(`--- LOG REPLAY ---`);
        for (let e of __) {
            if (e.logger.level > e.level)
                continue;
            e.level >= 3 ? console == null || console.warn(...e.toMessage()) : console == null || console.log(...e.toMessage())
        }
        console == null || console.log(`--- END OF LOG REPLAY ---`)
    }
    return n
}
function Ta(e) {
    return Object.prototype.hasOwnProperty.call(e, `message`)
}
function Ea(e) {
    return e.replace(/[/\-\\^$*+?.()|[\]{}]/gu, `\\$&`)
}
function Da(e, t) {
    return O_.call(e, t)
}
function Oa(e) {
    return e.key + e.extension
}
function ka(e) {
    return `${ga().userContent}/assets/${e}`
}
function Aa(e) {
    return ka(Oa(e))
}
function ja(e, t) {
    if (e === void 0 || t === void 0)
        return;
    let n = e
      , r = t
      , i = 0;
    t > e && (n = t,
    r = e,
    i = 1);
    let a = n / r
      , o = [];
    for (let e of P_) {
        if (n <= e)
            return o;
        o.push({
            maxSideSize: e,
            width: i === 0 ? e : Math.trunc(e / a)
        })
    }
    return o
}
function Ma(e, t, n) {
    if (!n || n.length === 0 || !t.pixelWidth)
        return;
    let r = [];
    for (let i of n)
        if (i.width >= F_) {
            let n = new URL(e);
            i.maxSideSize < t.pixelWidth && n.searchParams.set(`scale-down-to`, `${i.maxSideSize}`),
            r.push(`${n.toString()} ${i.width}w`)
        }
    return r.push(`${e} ${t.pixelWidth}w`),
    r.join(`, `) || void 0
}
function Na(e, t, n) {
    if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height)
        return;
    let r = []
      , i = Math.max(t.pixelWidth, t.pixelHeight)
      , a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
    for (let t of N_) {
        let n = Math.round(i * t * a)
          , o = new URL(e);
        n < i && o.searchParams.set(`scale-down-to`, `${n}`),
        r.push({
            src: o.toString(),
            scale: t
        })
    }
    return r
}
function Pa(e, t, n) {
    if (![`auto`, `lossless`].includes(t.preferredSize ?? ``))
        return {
            src: n,
            srcSet: void 0
        };
    if (e) {
        let r = Na(n, t, e);
        if (!r?.length)
            return {
                src: n,
                srcSet: void 0
            };
        let[i,...a] = r;
        return {
            src: i?.src,
            srcSet: a.map( ({src: e, scale: t}) => `${e} ${t}x`).join(`, `)
        }
    } else {
        let e = ja(t.pixelWidth, t.pixelHeight);
        return {
            src: n,
            srcSet: Ma(n, t, e)
        }
    }
}
function Fa() {
    return {
        backgroundRepeat: `repeat`,
        backgroundPosition: `left top`,
        backgroundSize: `64px auto`,
        backgroundImage: Ct(Y.imagePlaceholderSvg)
    }
}
function Ia(e) {
    switch (e) {
    case `fit`:
        return `contain`;
    case `stretch`:
        return `fill`;
    default:
        return `cover`
    }
}
function La(e, t) {
    let n = e ?? `center`
      , r = t ?? `center`;
    return n === `center` && r === `center` ? `center` : n + ` ` + r
}
function Ra(e) {
    return {
        display: `block`,
        width: `100%`,
        height: `100%`,
        borderRadius: `inherit`,
        objectPosition: La(e.positionX, e.positionY),
        objectFit: Ia(e.fit)
    }
}
function za(e) {
    let t = d.useRef(e ? `auto` : `async`)
      , n = E(e => {
        t.current = `auto`,
        e.decoding = `auto`
    }
    , [])
      , r = E(e => {
        n(e.currentTarget)
    }
    , [n])
      , i = E(e => {
        e?.complete && n(e)
    }
    , [n]);
    return {
        decoding: t.current,
        onImageLoad: r,
        onImageMount: i
    }
}
function Ba({image: e, containerSize: t, nodeId: n, alt: r, draggable: i, avoidAsyncDecoding: a}) {
    let o = Y.useImageSource(e, t, n)
      , s = Ra(e)
      , {decoding: c, onImageLoad: l, onImageMount: u} = za(a)
      , {srcSet: d, src: f} = `srcSet`in e ? {
        src: o,
        srcSet: e.srcSet
    } : Pa(e.nodeFixedSize, e, o);
    return S(`img`, {
        ref: u,
        decoding: c,
        fetchpriority: e.fetchPriority,
        loading: e.loading,
        width: e.pixelWidth,
        height: e.pixelHeight,
        sizes: e.sizes,
        srcSet: d,
        src: f,
        onLoad: l,
        alt: r ?? e.alt ?? ``,
        style: s,
        draggable: i
    })
}
function Va({image: e, containerSize: t, nodeId: n}) {
    let r = d.useRef(null)
      , i = Y.useImageElement(e, t, n)
      , a = Ra(e);
    return d.useLayoutEffect( () => {
        let e = r.current;
        if (e !== null)
            return e.appendChild(i),
            () => {
                e.removeChild(i)
            }
    }
    , [i]),
    Object.assign(i.style, a),
    S(`div`, {
        ref: r,
        style: {
            display: `contents`,
            borderRadius: `inherit`
        }
    })
}
function Ha({nodeId: e, image: t, containerSize: n}) {
    let r = d.useRef(null)
      , i = Y.useImageSource(t, n, e);
    return d.useLayoutEffect( () => {
        let n = r.current;
        if (n === null)
            return;
        let a = Ra(t);
        Y.renderOptimizedCanvasImage(n, i, a, e)
    }
    , [e, t, i]),
    S(`div`, {
        ref: r,
        style: {
            display: `contents`,
            borderRadius: `inherit`
        }
    })
}
function Ua({layoutId: e, image: t, ...n}) {
    e && (e += `-background`);
    let r = null
      , i = !!e
      , a = null;
    if (F(t.src))
        if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
            let e = pt(t.backgroundSize) ? t.backgroundSize : 1
              , n = {
                width: Math.round(e * t.pixelWidth),
                height: Math.round(e * t.pixelHeight)
            }
              , o = Nr(e * (t.pixelWidth / 2))
              , s = Y.useImageSource(t, n);
            r = {
                ...I_,
                backgroundImage: `url(${s})`,
                backgroundRepeat: `repeat`,
                backgroundPosition: La(t.positionX, t.positionY),
                opacity: void 0,
                border: 0,
                backgroundSize: `${o}px auto`
            },
            a = null,
            i = !0
        } else
            a = K.current() === K.canvas ? Y.canRenderOptimizedCanvasImage(Y.useImageSource(t)) ? S(Ha, {
                image: t,
                ...n
            }) : S(Va, {
                image: t,
                ...n
            }) : S(Ba, {
                image: t,
                avoidAsyncDecoding: K.current() === K.export,
                ...n
            });
    let o = a ? I_ : r ?? {
        ...I_,
        ...Fa()
    };
    return i ? S(ke.div, {
        layoutId: e,
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a
    }) : S(`div`, {
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a
    })
}
function Wa(e, t, n=!0) {
    let {borderWidth: r, borderStyle: i, borderColor: a} = e;
    if (!r)
        return;
    let o, s, c, l;
    if (typeof r == `number` ? o = s = c = l = r : (o = r.top || 0,
    s = r.bottom || 0,
    c = r.left || 0,
    l = r.right || 0),
    !(o === 0 && s === 0 && c === 0 && l === 0)) {
        if (n && o === s && o === c && o === l) {
            t.border = `${o}px ${i} ${a}`;
            return
        }
        t.borderStyle = e.borderStyle,
        t.borderColor = e.borderColor,
        t.borderTopWidth = `${o}px`,
        t.borderBottomWidth = `${s}px`,
        t.borderLeftWidth = `${c}px`,
        t.borderRightWidth = `${l}px`
    }
}
function Ga(e) {
    let t = e.layoutId ? `${e.layoutId}-border` : void 0;
    if (!e.borderWidth)
        return null;
    let n = {
        position: `absolute`,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: `inherit`,
        pointerEvents: `none`
    };
    return e.border ? (n.border = e.border,
    S(ke.div, {
        style: n
    })) : (Wa(e, n, !1),
    S(ke.div, {
        "data-frame-border": !0,
        style: n,
        layoutId: t
    }))
}
function Ka(e, t) {
    let {_forwardedOverrideId: n, _forwardedOverrides: r, id: i} = t
      , a = n ?? i
      , o = r && a ? r[a] : void 0;
    return o && typeof o == `string` && (e = {
        ...e,
        src: o
    }),
    e
}
function qa(e) {
    let {background: t, image: n} = e;
    if (n !== void 0 && t && !R_.isImageObject(t))
        return;
    let r = null;
    if (r = F(n) ? {
        alt: ``,
        src: n
    } : lh.get(t, null),
    R_.isImageObject(r))
        return Ka(r, e)
}
function Ja(e) {
    if (e) {
        if (e.pixelHeight && e.pixelWidth)
            return {
                width: e.pixelWidth,
                height: e.pixelHeight
            };
        if (e.src === void 0)
            return {
                width: 1,
                height: 1
            }
    }
}
function Ya(e) {
    return e && e !== `search` && e !== `slot` && e !== `template` ? ke[e] : ke.div
}
function Xa(e, t) {
    e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0,
    e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` ? !0 : void 0
}
function Za(e) {
    let t = {};
    return !e || !Q_ || K.current() !== K.canvas || Xa(t, e),
    t
}
function Qa(e) {
    return e.replace(/^id_/u, ``).replace(/\\/gu, ``)
}
function $a(e, t) {
    if (!t && (t = e.children,
    !t))
        return {
            props: e,
            children: t
        };
    let n = e._forwardedOverrides;
    return n && (t = d.Children.map(t, e => d.isValidElement(e) ? d.cloneElement(e, {
        _forwardedOverrides: n
    }) : e)),
    {
        props: e,
        children: t
    }
}
function eo(e) {
    return (t, n) => e === !0 ? `translate(-50%, -50%) ${n}` : e === `x` ? `translateX(-50%) ${n}` : e === `y` ? `translateY(-50%) ${n}` : n || `none`
}
function to(e, {specificLayoutId: t, postfix: n}={}) {
    let {name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o=!1, drag: s} = e
      , {getLayoutId: c, enabled: l} = w(Ph);
    return T( () => {
        if (!l)
            return e.layoutId;
        let u = t || e.layoutId;
        if (!u && (s || !i || o))
            return;
        let d = u || c({
            id: i,
            name: r,
            duplicatedFrom: a
        });
        if (d)
            return n ? `${d}-${n}` : d
    }
    , [l])
}
function no() {
    let[e,t] = d.useState(0);
    return d.useCallback( () => t(e => e + 1), [])
}
function ro(e) {
    return [...e.firstElementChild && e.firstElementChild.hasAttribute(tv) ? e.firstElementChild.children : e.children].filter(io).map(ao)
}
function io(e) {
    return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? !1 : e instanceof HTMLElement || e instanceof SVGElement
}
function ao(e) {
    if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
        return e;
    let t = [...e.children].find(io);
    return t ? ao(t) : e
}
function oo(e, t, n= () => [], r={}) {
    let {id: i, visible: a, _needsMeasure: o} = e
      , {skipHook: s=!1} = r
      , c = w(ev)
      , l = K.current() === K.canvas;
    $_( () => {
        !l || c || s || t.current && i && a && o && Y.queueMeasureRequest(Qa(i), t.current, n(t.current))
    }
    )
}
function so(e) {
    let t = e.closest(`[data-framer-component-container]`);
    t && Y.queueMeasureRequest(Qa(t.id), t, ro(t))
}
function co(e) {
    e.willChange = `transform`;
    let t = K.current() === K.canvas;
    iv && t && (e.translateZ = nv)
}
function lo(e) {
    e.willChange = `transform`,
    uo(e, !0)
}
function uo(e, t) {
    let n = K.current() === K.canvas;
    if (!iv || !n)
        return;
    let r = F(e.transform) && e.transform || ``;
    t ? r.includes(rv) || (e.transform = r + rv) : e.transform = r.replace(rv, ``)
}
function fo(e, t, n, r=!0) {
    if (!e)
        return;
    let i = Zg(e.style)
      , a = n || i[t]
      , o = () => {
        po(a) && (i[t] = a)
    }
    ;
    i[t] = null,
    r ? Promise.resolve().then(o) : setTimeout(o, 0)
}
function po(e) {
    return F(e) || pt(e) || _t(e)
}
function mo(e, t) {
    if (e.size < t)
        return;
    let n = Math.round(Math.random());
    for (let t of e.keys()) {
        if ((++n & 1) == 1)
            continue;
        e.delete(t)
    }
}
function ho(e, t, n, r) {
    let i = t.get(n);
    if (i)
        return i;
    mo(t, e);
    let a = r(n);
    return t.set(n, a),
    a
}
function go(e, t) {
    let n = [e, t];
    return cv.test(e) ? e : ho(1e3, lv, n, () => sv.multiplyAlpha(e, t))
}
function _o(e, t=1) {
    let n;
    return n = `stops`in e ? e.stops : [{
        value: e.start,
        position: 0
    }, {
        value: e.end,
        position: 1
    }],
    t === 1 ? n : n.map(e => ({
        ...e,
        value: go(e.value, t)
    }))
}
function vo(e, t) {
    let n = 0;
    return _o(e, t).forEach(e => {
        n ^= ov(e.value) ^ e.position
    }
    ),
    n
}
function yo(e) {
    return e && uv.every(t => t in e)
}
function bo(e) {
    return e && dv.every(t => t in e)
}
function xo({background: e, backgroundColor: t}, n) {
    t ? typeof t == `string` || Ch(t) ? n.backgroundColor = t : G.isColorObject(e) && (n.backgroundColor = e.initialValue || G.toRgbString(e)) : e && (e = lh.get(e, null),
    typeof e == `string` || Ch(e) ? n.background = e : pv.isLinearGradient(e) ? n.background = pv.toCSS(e) : hv.isRadialGradient(e) ? n.background = hv.toCSS(e) : G.isColorObject(e) && (n.backgroundColor = e.initialValue || G.toRgbString(e)))
}
function V(e, t, n, r) {
    if (r === void 0 && (r = t),
    e[t] !== void 0) {
        n[r] = e[t];
        return
    }
}
function So(e) {
    return e ? e.left !== void 0 && e.right !== void 0 : !1
}
function Co(e) {
    return e ? e.top !== void 0 && e.bottom !== void 0 : !1
}
function wo(e) {
    if (!e)
        return {};
    let t = {};
    return e.preserve3d === !0 ? t.transformStyle = `preserve-3d` : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0 ? t.backfaceVisibility = `visible` : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent || (e.center === !0 ? (t.left = `50%`,
    t.top = `50%`) : e.center === `x` ? t.left = `50%` : e.center === `y` && (t.top = `50%`)),
    V(e, `size`, t),
    V(e, `width`, t),
    V(e, `height`, t),
    V(e, `minWidth`, t),
    V(e, `minHeight`, t),
    V(e, `top`, t),
    V(e, `right`, t),
    V(e, `bottom`, t),
    V(e, `left`, t),
    V(e, `position`, t),
    V(e, `overflow`, t),
    V(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && V(e, `border`, t),
    V(e, `borderRadius`, t),
    V(e, `radius`, t, `borderRadius`),
    V(e, `color`, t),
    V(e, `shadow`, t, `boxShadow`),
    V(e, `x`, t),
    V(e, `y`, t),
    V(e, `z`, t),
    V(e, `rotate`, t),
    V(e, `rotateX`, t),
    V(e, `rotateY`, t),
    V(e, `rotateZ`, t),
    V(e, `scale`, t),
    V(e, `scaleX`, t),
    V(e, `scaleY`, t),
    V(e, `skew`, t),
    V(e, `skewX`, t),
    V(e, `skewY`, t),
    V(e, `originX`, t),
    V(e, `originY`, t),
    V(e, `originZ`, t),
    xo(e, t),
    t
}
function To(e) {
    for (let t in e)
        if (t === `drag` || t.startsWith(`while`) || typeof Zg(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
            return !0;
    return !1
}
function Eo(e) {
    if (e.drag)
        return `grab`;
    for (let t in e)
        if (_v.has(t))
            return `pointer`
}
function Do(e) {
    return Oo(e) ? !0 : e.style ? !!Oo(e.style) : !1
}
function Oo(e) {
    return vv in e && (e[vv] === `scroll` || e[vv] === `auto`)
}
function ko(e) {
    let {left: t, top: n, bottom: r, right: i, width: a, height: o, center: s, _constraints: c, size: l, widthType: u, heightType: d, positionFixed: f, positionAbsolute: p} = e
      , m = je(e.minWidth)
      , h = je(e.minHeight)
      , g = je(e.maxWidth)
      , _ = je(e.maxHeight);
    return {
        top: je(n),
        left: je(t),
        bottom: je(r),
        right: je(i),
        width: je(a),
        height: je(o),
        size: je(l),
        center: s,
        _constraints: c,
        widthType: u,
        heightType: d,
        positionFixed: f,
        positionAbsolute: p,
        minWidth: m,
        minHeight: h,
        maxWidth: g,
        maxHeight: _
    }
}
function Ao(e) {
    d.useInsertionEffect( () => {
        ta()
    }
    , []);
    let t = w(ev)
      , {style: n, _initialStyle: r, __fromCanvasComponent: i, size: a} = e
      , o = ko(e)
      , s = Ji(o)
      , c = {
        display: `block`,
        flex: n?.flex ?? `0 0 auto`,
        userSelect: K.current() === K.preview ? void 0 : `none`
    };
    e.__fromCanvasComponent || (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
    let l = !To(e) && !e.__fromCanvasComponent && !Do(e)
      , u = e.style ? !(`pointerEvents`in e.style) : !0;
    l && u && (c.pointerEvents = `none`);
    let f = d.Children.count(e.children) > 0 && d.Children.toArray(e.children).every(e => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`
    }
      , p = wo(e);
    a === void 0 && !i && (So(p) || (c.width = yv.width),
    Co(p) || (c.height = yv.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight);
    let m = {};
    Li(o) && s && !Yi(e) && (m = {
        left: s.x,
        top: s.y,
        width: s.width,
        height: s.height,
        right: void 0,
        bottom: void 0
    }),
    Object.assign(c, f, r, p, m, n),
    Object.assign(c, {
        overflowX: c.overflowX ?? c.overflow,
        overflowY: c.overflowY ?? c.overflow,
        overflow: void 0
    }),
    av.applyWillChange(e, c, !0);
    let h = c;
    c.transform || (h = {
        x: 0,
        y: 0,
        ...c
    });
    let g = ua();
    return e.positionSticky ? (!g || Y.isOnPageCanvas || t) && (h.position = `sticky`,
    h.willChange = `transform`,
    h.zIndex = 1,
    h.top = e.positionStickyTop,
    h.right = e.positionStickyRight,
    h.bottom = e.positionStickyBottom,
    h.left = e.positionStickyLeft) : g && (e.positionFixed ? h.position = Y.isOnPageCanvas ? `fixed` : `absolute` : e.positionAbsolute && (h.position = `absolute`)),
    `rotate`in h && h.rotate === void 0 && delete h.rotate,
    [h, s]
}
function jo(e) {
    let t = {};
    for (let n in e)
        (Oe(n) || $g(n)) && !bv.has(n) ? t[n] = Zg(e)[n] : (n === `positionTransition` || n === `layoutTransition`) && (t.layout = !0,
        typeof Zg(e)[n] != `boolean` && !e.transition && (t.transition = Zg(e)[n]));
    return t
}
function Mo(e) {
    return `data-framer-name`in e
}
function No(e, t, n, r) {
    if (r)
        return n ? {
            width: n.width,
            height: n.height
        } : 1;
    let {_usesDOMRect: i} = e
      , {widthType: a=0, heightType: o=0, width: s, height: c} = t;
    return n && !i ? n : a === 0 && o === 0 && typeof s == `number` && typeof c == `number` ? {
        width: s,
        height: c
    } : i || e.positionFixed || e.positionAbsolute ? 2 : 0
}
function Po(e) {
    return S(ke.div, {
        layoutId: Cv,
        style: Ev,
        children: e.children
    })
}
function Fo(e, t) {
    dt(e) ? e(t) : Io(e) && (e.current = t)
}
function Io(e) {
    return I(e) && `current`in e
}
function Lo() {
    let e = xi( () => new Set)
      , t = xi( () => new Map);
    return xi( () => (n, r) => ({
        get current() {
            return n.current
        },
        set current(i) {
            if (i !== n.current) {
                if (n.current = i,
                r && r(i),
                t.forEach( (e, t) => {
                    e ? e() : t(null)
                }
                ),
                i === null) {
                    t.clear(),
                    e.clear();
                    return
                }
                e.forEach(e => {
                    let n = e(i);
                    t.set(e, n)
                }
                )
            }
        },
        observe(r) {
            e.add(r);
            let i = n.current;
            if (i) {
                let e = r(i);
                t.set(r, e)
            }
        },
        unobserve(n) {
            if (!n || (e.delete(n),
            !t.has(n)))
                return;
            let r = t.get(n);
            r ? r() : n(null),
            t.delete(n)
        }
    }))
}
function Ro(e) {
    let t = C(null)
      , n = Lo();
    return xi( () => Io(e) ? n(e) : dt(e) ? n(t, e) : n(t))
}
function zo(e, t, n) {
    let r = C()
      , i = C();
    qn( () => {
        i.current !== void 0 && (i.current = !0)
    }
    , n ?? [{}]),
    e && i.current !== !1 && (i.current = !1,
    e.unobserve(r.current),
    e.observe(t),
    r.current = t)
}
function Bo(e, t, n, r, i, a, o) {
    let s = e.get(t);
    return (!s || s.root !== r?.current) && (s = new Dv({
        root: r?.current,
        rootMargin: a,
        threshold: o
    }),
    e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
        s.unobserve(n)
    }
}
function Vo() {
    return w(Mv)
}
function Ho() {
    return new Map
}
function Uo() {
    return xi(Ho)
}
function Wo(e, t=[]) {
    let {register: n, deregister: r} = w(Nv);
    D( () => {
        if (e)
            return n(e),
            () => r(e)
    }
    , [n, r, ...t])
}
function Go(e, t) {
    return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed)
}
function Ko(e, t, n) {
    let r = {
        ...e
    };
    return t && (z(t.originX) && (r.originX = t.originX),
    z(t.originY) && (r.originY = t.originY),
    z(t.originZ) && (r.originZ = t.originZ)),
    n && (z(n.originX) && (r.originX = n.originX),
    z(n.originY) && (r.originY = n.originY),
    z(n.originZ) && (r.originZ = n.originZ)),
    r
}
function qo(e) {
    if (!e || !(`rotateX`in e || `rotateY`in e || `z`in e))
        return !1;
    let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0
      , n = (e?.transition)?.rotateX.from !== 0 || (e?.transition)?.rotateY.from !== 0 || (e?.transition)?.z.from !== 0;
    return t || n
}
function Jo(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
        return zv.PushLeft;
    case `left`:
        return zv.PushRight;
    case `bottom`:
        return zv.PushUp;
    case `top`:
        return zv.PushDown
    }
}
function Yo(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
        return zv.OverlayLeft;
    case `left`:
        return zv.OverlayRight;
    case `bottom`:
        return zv.OverlayUp;
    case `top`:
        return zv.OverlayDown
    }
}
function Xo(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
        return zv.FlipLeft;
    case `left`:
        return zv.FlipRight;
    case `bottom`:
        return zv.FlipUp;
    case `top`:
        return zv.FlipDown
    }
}
function Zo(e, t) {
    switch (t.type) {
    case `addOverlay`:
        return $o(e, t.transition, t.component);
    case `removeOverlay`:
        return es(e);
    case `add`:
        return ts(e, t.key, t.transition, t.component);
    case `remove`:
        return os(e);
    case `update`:
        return Qo(e, t.key, t.component);
    case `back`:
        return ns(e);
    case `forward`:
        return rs(e);
    default:
        return
    }
}
function Qo(e, t, n) {
    return {
        ...e,
        containers: {
            ...e.containers,
            [t]: n
        }
    }
}
function $o(e, t, n) {
    let r = e.overlayStack[e.currentOverlay];
    if (r && r.component === n)
        return;
    let i = e.overlayItemId + 1
      , a = [...e.overlayStack, {
        key: `stack-${i}`,
        component: n,
        transition: t
    }];
    return {
        ...e,
        overlayStack: a,
        overlayItemId: i,
        currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
        previousOverlay: e.currentOverlay
    }
}
function es(e) {
    return {
        ...e,
        overlayStack: [],
        currentOverlay: -1,
        previousOverlay: e.currentOverlay
    }
}
function ts(e, t, n, r) {
    e.containers[t] || (e.containers[t] = r),
    e.history = e.history.slice(0, e.current + 1),
    e.visualIndex = Math.max(e.history.length, 0);
    let i = e.history[e.history.length - 1]
      , a = i && i.key === t;
    if (e.overlayStack = [],
    a && e.currentOverlay > -1)
        return {
            ...e,
            currentOverlay: -1,
            previousOverlay: e.currentOverlay
        };
    if (a)
        return;
    let o = e.containerVisualIndex[t]
      , s = e.containerIsRemoved[t]
      , c = i?.key && n.withMagicMotion ? ds(t, o, s, e.history) : !0;
    e.history.push({
        key: t,
        transition: n,
        visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t]
    });
    let l = e.current + 1
      , u = e.current;
    for (let t in e.containerIndex)
        e.containerIndex[t] === l && (e.containerIndex[t] = ls(t, e.history));
    e.containerIndex[t] = l;
    let {containerVisualIndex: d, containerIsRemoved: f} = ss(e, t, c)
      , p = us(l, u, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: l,
        previous: u,
        containerVisualIndex: d,
        containerIsRemoved: f,
        transitionForContainer: p,
        previousTransition: null,
        currentOverlay: -1,
        historyItemId: e.historyItemId + 1,
        previousOverlay: e.currentOverlay
    }
}
function ns(e) {
    let t = {
        ...e.containers
    }
      , n = os(e);
    if (n)
        return n.containers = t,
        n
}
function rs(e) {
    let t = e.history[e.current + 1];
    if (!t)
        return;
    let {key: n, transition: r, component: i} = t
      , a = [...e.history]
      , o = ts(e, n, r, i);
    if (o)
        return o.history = a,
        o
}
function os(e) {
    let t = [...e.history.slice(0, e.current + 1)];
    if (t.length === 1)
        return;
    let n = t.pop();
    if (!n)
        return;
    let r = t[t.length - 1];
    L(r, `The navigation history must have at least one component`),
    e.containerIndex[r.key] = t.length - 1,
    t.every(e => e.key !== n.key) && delete e.containers[n.key];
    let i = e.current - 1
      , a = e.current
      , {containerIsRemoved: o, containerVisualIndex: s, previousTransition: c, visualIndex: l} = cs(e, r, n)
      , u = us(i, a, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: i,
        previous: a,
        containerIsRemoved: o,
        containerVisualIndex: s,
        previousTransition: c,
        visualIndex: l,
        transitionForContainer: u
    }
}
function ss(e, t, n) {
    let r = {
        containerVisualIndex: {
            ...e.containerVisualIndex
        },
        containerIsRemoved: {
            ...e.containerIsRemoved
        }
    };
    if (n)
        r.containerVisualIndex[t] = e.history.length - 1,
        r.containerIsRemoved[t] = !1;
    else {
        let n = e.containerVisualIndex[t];
        for (let[t,i] of Object.entries(e.containerVisualIndex))
            n !== void 0 && i > n && (r.containerIsRemoved[t] = !0)
    }
    return r
}
function cs(e, t, n) {
    let r = [t.key, n.key]
      , i = e.history[e.history.length - 2]
      , a = e.previousTransition === null ? null : {
        ...e.previousTransition
    }
      , o = {
        containerIsRemoved: {
            ...e.containerIsRemoved
        },
        containerVisualIndex: {
            ...e.containerVisualIndex
        },
        previousTransition: a,
        visualIndex: e.visualIndex
    };
    i && r.push(i.key);
    let s = e.containerVisualIndex[t.key]
      , c = e.containerVisualIndex[n.key]
      , l = s !== void 0 && c !== void 0 && s <= c || t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1
      , u = t.visualIndex;
    return l ? (o.containerIsRemoved[n.key] = !0,
    o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u) : (o.visualIndex = e.visualIndex + 1,
    o.containerVisualIndex[t.key] = e.visualIndex + 1),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    e.containerIsRemoved[t.key] = !1,
    o
}
function ls(e, t) {
    for (let n = t.length; n > t.length; n--)
        if (t[n]?.key === e)
            return n;
    return -1
}
function us(e, t, n, r, i) {
    let a = {
        ...i
    };
    for (let[i,o] of Object.entries(r)) {
        let r = fs(o, {
            current: e,
            previous: t,
            history: n
        });
        r && (a[i] = r)
    }
    return a
}
function ds(e, t, n, r) {
    return n || t === void 0 ? !0 : t === 0 ? !1 : r.slice(t, r.length).findIndex(t => t.key === e) > -1 ? !0 : !(r.slice(0, t - 1).findIndex(t => t.key === e) > -1)
}
function fs(e, t) {
    let {current: n, previous: r, history: i} = t;
    if (!(e !== n && e !== r)) {
        if (e === n && n > r) {
            let t = i[e];
            return ps(`enter`, t?.transition.enter, t?.transition.animation)
        }
        if (e === r && n > r) {
            let t = i[e + 1];
            return ps(`exit`, t?.transition.exit, t?.transition.animation)
        }
        if (e === n && n < r) {
            let t = i[e + 1];
            return ps(`enter`, t?.transition.exit, t?.transition.animation)
        }
        if (e === r && n < r) {
            let t = i[e];
            return ps(`exit`, t?.transition.enter, t?.transition.animation)
        }
    }
}
function ps(e, t, n) {
    let r = {}
      , i = {};
    return Vv.forEach(e => {
        r[e] = Iv[e],
        i[e] = {
            ...n,
            from: Iv[e]
        }
    }
    ),
    t && Object.keys(t).forEach(a => {
        if (t[a] === void 0)
            return;
        let o = t[a]
          , s = typeof t[a] == `string` ? `${Zg(Iv)[a]}%` : Zg(Iv)[a];
        Zg(r)[a] = e === `enter` ? s : o,
        i[a] = {
            ...n,
            from: e === `enter` ? o : s,
            velocity: 0
        }
    }
    ),
    {
        ...r,
        transition: {
            ...i
        }
    }
}
function ms(e) {
    let t, n;
    return e.current === -1 ? n = e.history[e.previous] : t = e.history[e.current],
    {
        currentOverlayItem: t,
        previousOverlayItem: n
    }
}
function hs({currentOverlayItem: e}) {
    return e && e.transition.exit
}
function gs({currentOverlayItem: e, previousOverlayItem: t}) {
    return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : Gv
}
function _s({currentOverlayItem: e, previousOverlayItem: t}) {
    return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible
}
function vs(e) {
    if (e.backdropColor)
        return e.backdropColor;
    if (e.overCurrentContext)
        return `rgba(4,4,15,.4)`
}
function ys(e, t) {
    let {current: n, history: r} = t;
    if (e === n) {
        let t = r[e];
        return t && t.transition ? t.transition.backfaceVisible : !0
    } else if (e < n) {
        let t = r[e + 1];
        return t && t.transition ? t.transition.backfaceVisible : !0
    } else {
        let t = r[e];
        return t && t.transition ? t.transition.backfaceVisible : !0
    }
}
function bs(e, t) {
    let n = t.history[e];
    if (n)
        return n.transition.enter
}
function xs(e, t) {
    let {current: n, previous: r, history: i} = t;
    return e === r && n > r || e === n && n < r ? i[e + 1]?.transition?.backfaceVisible : i[e]?.transition?.backfaceVisible
}
function Ss(e, t) {
    let {current: n, history: r} = t;
    if (e !== n)
        if (e < n) {
            let t = r[e + 1];
            if (t && t.transition)
                return t.transition.exit
        } else {
            let t = r[e];
            if (t && t.transition)
                return t.transition.enter
        }
}
function Cs(e, t) {
    let {current: n, previous: r, history: i} = t
      , a = r > n ? r : n;
    if (e < a) {
        let t = i[e + 1];
        if (t && t.transition.animation)
            return t.transition.animation
    } else if (e !== a) {
        let t = i[e];
        if (t && t.transition.animation)
            return t.transition.animation
    } else {
        let t = i[e];
        if (t?.transition.animation)
            return t.transition.animation
    }
    return Gv
}
function ws(e, t, n) {
    let {current: r, previous: i, history: a} = t;
    return !!(n && a.length > 1 || e !== i && e !== r || r === i)
}
function Ts(e, t) {
    let {current: n, previous: r} = t;
    return e > n && e > r ? !1 : e === n
}
function Es(e) {
    return d.Children.map(e.component, t => {
        if (!Ei(t) || !Ti(t) || !t.props)
            return t;
        let n = {
            style: t.props.style ?? {}
        }
          , r = e?.transition?.position
          , i = !r || r.left !== void 0 && r.right !== void 0
          , a = !r || r.top !== void 0 && r.bottom !== void 0
          , o = `style`in t.props ? I(t.props.style) : !0;
        return i && (`width`in t.props && (n.width = `100%`),
        o && (n.style.width = `100%`)),
        a && (`height`in t.props && (n.height = `100%`),
        o && (n.style.height = `100%`)),
        d.cloneElement(t, n)
    }
    )
}
function Ds(e, t) {
    if (e.goBackOnTapOutside !== !1)
        return t
}
function Os(e) {
    let t = Be()
      , n = Ie();
    return d.useInsertionEffect( () => {
        ta()
    }
    , []),
    S(Wv, {
        ...e,
        resetProjection: t,
        skipLayoutAnimation: n,
        children: e.children
    })
}
function ks(e) {
    let t = [];
    if (e && e.length) {
        let n = e.map(e => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
        t.push(...n)
    }
    return t
}
function As(e, t) {
    if (!e.shadows || e.shadows.length === 0)
        return;
    let n = e.shadows.map(e => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
    n && (t.textShadow = n)
}
function js(e, t) {
    let n = [];
    z(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    z(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    z(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    z(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    z(e.invert) && n.push(`invert(${e.invert / 100})`),
    z(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    z(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    z(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...ks(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `))
}
function Ms(e, t) {
    z(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`)
}
function Ns(e, t) {
    Ms(e, t),
    js(e, t)
}
function Ps(e, t) {
    let n, r = (...r) => {
        W.clearTimeout(n),
        n = W.setTimeout(e, t, ...r)
    }
    ;
    return r.cancel = () => {
        W.clearTimeout(n)
    }
    ,
    r
}
function Fs(...e) {
    return e.filter(Boolean).join(` `)
}
function Is(e, t, n) {
    let r = v.map(e, e => i(e) ? ee(e, t) : e);
    return n ? r : S(y, {
        children: r
    })
}
function Ls(e) {
    let t = xi( () => Rs(e));
    return t.useSetup(e),
    t.cloneAsElement
}
function Rs(e) {
    let t = {
        forwardedRef: e,
        childRef: null,
        ref: null
    };
    t.ref = zs(t);
    let n = (e, n) => {
        if (!t.forwardedRef && t.forwardedRef === e) {
            t.ref = n;
            return
        }
        let r = !1;
        t.childRef !== n && (t.childRef = n,
        r = !0),
        t.forwardedRef !== e && (t.forwardedRef = e,
        r = !0),
        r && (t.ref = zs(t))
    }
      , r = !1;
    function a(a, o) {
        if (r)
            throw ReferenceError(`useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`);
        return r = !0,
        v.count(a) > 1 && e && (t.forwardedRef = void 0,
        t.ref = t.childRef),
        v.map(a, e => {
            if (i(e)) {
                let r = `ref`in e ? e.ref : void 0;
                n(t.forwardedRef, r);
                let i = dt(o) ? o(e.props) : o;
                return ee(e, t.ref === r ? i : {
                    ...i,
                    ref: t.ref
                })
            }
            return e
        }
        )
    }
    let o = function(e, t) {
        return S(y, {
            children: a(e, t)
        })
    };
    return o.cloneAsArray = a,
    {
        useSetup: e => {
            r = !1,
            n(e, t.childRef)
        }
        ,
        cloneAsElement: o
    }
}
function zs(e) {
    if (!e.forwardedRef)
        return e.childRef;
    let {forwardedRef: t, childRef: n} = e;
    return e => {
        Fo(n, e),
        Fo(t, e)
    }
}
function Bs(e, t, n, r, i, a, o, s) {
    let c = d.Children.toArray(t)
      , l = c[0];
    if (c.length !== 1 || !d.isValidElement(l))
        return console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
        o(t, n);
    let u = []
      , f = [];
    for (let[t] of Object.entries(r)) {
        if (t === i)
            continue;
        let n = e[t];
        if (!n || !Ws(l.props, n)) {
            f.push(t);
            continue
        }
        let r = Us([t], a);
        r.length && u.push({
            variants: r,
            propOverrides: n
        })
    }
    if (u.length === 0)
        return o(l, n);
    let p = [i, ...f]
      , m = Us(p, a);
    m.length && u.unshift({
        variants: m
    });
    let h = [];
    for (let {variants: e, propOverrides: t} of u) {
        if (s && !e.includes(s))
            continue;
        let c = e.join(`+`)
          , d = S(ly.Provider, {
            value: {
                primaryVariantId: i,
                variants: new Set(e)
            },
            children: o(l, t ? {
                ...n,
                ...t
            } : n)
        }, c)
          , f = Hs(e, a, r);
        f.length ? (L(u.length > 1, `Must branch out when there are hiddenClassNames`),
        d = S(`div`, {
            className: `${uy} ${f.join(` `)}`,
            children: d
        }, c)) : L(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
        h.push(d)
    }
    return L(!s || h.length === 1, `Must render exactly one branch when activeVariantId is given`),
    h
}
function Vs(e) {
    return e.split(`-`)[2]
}
function Hs(e, t, n) {
    let r = [];
    for (let[i,a] of Object.entries(n)) {
        let n = t && !t.has(i);
        if (e.includes(i) || n)
            continue;
        r.push(`hidden-${Vs(a)}`)
    }
    return r
}
function Us(e, t) {
    return t ? e.filter(e => t.has(e)) : e
}
function Ws(e, t) {
    for (let n of Object.keys(t))
        if (!rt(e[n], t[n], !0))
            return !0;
    return !1
}
function Gs(e, t, n) {
    return !n || !e ? t : {
        ...t,
        ...n[e]
    }
}
function Ks() {
    return d.useContext(Ey)
}
function qs(e) {
    return e instanceof Error && (e.message.includes(`A component suspended while responding to synchronous input.`) || e.message.includes(`Minified React error #426`))
}
function Js() {
    if (O === void 0 || ky)
        return S(`div`, {
            hidden: !0,
            dangerouslySetInnerHTML: {
                __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->`
            }
        });
    throw jy
}
function Ys({children: e}) {
    return w(Ny) ? S(y, {
        children: e
    }) : S(a, {
        fallback: My,
        children: e
    })
}
function Xs() {
    return S(`div`, {
        hidden: !0,
        dangerouslySetInnerHTML: {
            __html: `<!-- Code boundary fallback rendered -->`
        }
    })
}
function Zs(e, t) {
    if (!_p || Math.random() > .01)
        return;
    let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null
      , r = t?.componentStack;
    qt(`published_site_load_recoverable_error`, {
        message: String(e),
        stack: n,
        componentStack: n ? void 0 : r
    })
}
function Qs(...e) {
    console.error(...e)
}
function $s() {
    return K.current() !== K.canvas
}
function ec({getErrorMessage: e, fallback: t, children: n}) {
    return $s() ? S(tc, {
        fallback: t,
        children: S(Fy, {
            fallback: t,
            getErrorMessage: e,
            children: n
        })
    }) : n
}
function tc({children: e, fallback: t=Py}) {
    return O === void 0 ? S(a, {
        fallback: t,
        children: e
    }) : S(Ys, {
        children: e
    })
}
function nc() {
    return d.useContext(Ly)
}
function rc() {
    let e = nc();
    return d.useMemo( () => {
        if (!e)
            return;
        let t = e;
        for (; t.parent && t.parent.level > 0; )
            t = t.parent;
        return t
    }
    , [e])
}
function ic({children: e, scopeId: t, nodeId: n}) {
    let r = nc()
      , i = d.useMemo( () => ({
        level: (r?.level ?? 0) + 1,
        scopeId: t,
        nodeId: n,
        parent: r
    }), [t, n, r]);
    return S(Ly.Provider, {
        value: i,
        children: e
    })
}
function ac(e, t) {
    return `${Ry}${e}:${t}`
}
function oc(e, t) {
    return sc(`component`, e, t)
}
function sc(e, t, n) {
    return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${ac(t, n)} \u2192 click \u201CShow Layer\u201D.`
}
function cc(e, t, n, r, i, a) {
    let o = lc(e, t, n, a);
    return o && !i && r || o && i
}
function lc(e, t, n, r) {
    return !!(gt(n) || n === 1 && r && e === t)
}
function uc(e, t, n, r, i, a) {
    let o = nc();
    return gt(t) || gt(n) ? S(Iy, {
        children: e
    }) : (cc(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) && (e = S(ec, {
        getErrorMessage: oc.bind(null, t, n),
        fallback: null,
        children: e
    })),
    i && (e = S(ic, {
        scopeId: t,
        nodeId: n,
        children: e
    })),
    e)
}
function dc(e, t, n) {
    let r = {};
    for (let[,i] of e)
        for (let e of i) {
            let i = r[e] ?? t[e] ?? n[e];
            i && (r[e] = i)
        }
    return r
}
function fc(e) {
    return !(!e || e.placement || e.alignment)
}
function pc(e) {
    switch (e) {
    case `start`:
        return `0%`;
    case `center`:
        return `-50%`;
    case `end`:
        return `-100%`;
    default:
        R(e)
    }
}
function mc(e, t=`center`) {
    switch (e) {
    case `top`:
        return `${pc(t)}, -100%`;
    case `right`:
        return `0%, ${pc(t)}`;
    case `bottom`:
        return `${pc(t)}, 0%`;
    case `left`:
        return `-100%, ${pc(t)}`;
    default:
        return `-50%, -50%`
    }
}
function hc(e, t) {
    let n = document.elementFromPoint(e, t);
    for (; n; ) {
        if (n === document.body)
            return;
        let e = n.getAttribute(`data-framer-cursor`);
        if (e)
            return e;
        if (n.hasAttribute(qy)) {
            let e = n.getAttribute(qy);
            n = n.parentElement,
            e && (n = document.getElementById(e) ?? n)
        } else
            n = n.parentElement
    }
}
function gc(e) {
    let {registerCursors: t} = w(Vy)
      , n = xi( () => e)
      , r = l();
    f( () => t(n, r), [t, r])
}
function _c(e) {
    return !!(e && typeof e == `object` && Yy in e)
}
function vc(e) {
    return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`
}
function yc() {
    return K.current() === K.canvas
}
function bc(e) {
    return e === void 0 ? !1 : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`))
}
function xc(e, t) {
    try {
        return !!new URL(e).protocol
    } catch {}
    return t
}
function Sc(e, t, n) {
    if (F(e)) {
        let r = bc(e);
        if (!t.routes || !t.getRoute || !n || !r)
            return;
        let[i] = e.split(`#`, 2);
        if (i === void 0)
            return;
        let[a] = i.split(`?`, 2);
        if (a === void 0)
            return;
        let {routeId: o} = lr(t.routes, a);
        return t.getRoute(o)
    }
    let {webPageId: r} = e;
    return t.getRoute?.call(t, r)
}
function Cc(e) {
    return F(e) && e.startsWith(`data:${nb}`)
}
function wc(e) {
    if (Cc(e))
        try {
            let t = new URL(e), n = t.pathname.substring(nb.length), r = t.searchParams, i = r.has(Qy) ? r.get(Qy) : void 0, a, o = r.get($y), s = r.get(eb), c = r.get(tb);
            if (o && s && c) {
                let e = Object.fromEntries(new URLSearchParams(c).entries());
                a = {
                    collection: o,
                    collectionItemId: s,
                    pathVariables: e
                }
            }
            return {
                target: n === `none` ? null : n,
                element: i === `none` ? void 0 : i,
                collectionItem: a
            }
        } catch {
            return
        }
}
function Tc(e, t, n) {
    let r = t.getAttribute(`data-framer-page-link-target`), i, a;
    if (r) {
        i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
        let e = t.getAttribute(`data-framer-page-link-path-variables`);
        e && (a = Object.fromEntries(new URLSearchParams(e).entries()))
    } else {
        let e = t.getAttribute(`href`);
        if (!e)
            return !1;
        let n = wc(e);
        if (!n || !n.target)
            return !1;
        r = n.target,
        i = n.element ?? void 0,
        a = n.collectionItem?.pathVariables
    }
    let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
    return e(r, i, Object.assign({}, n, a), o),
    !0
}
function Ec(e) {
    if (!Cc(e))
        return e;
    let t = wc(e);
    if (!t)
        return;
    let {target: n, element: r, collectionItem: i} = t;
    if (n)
        return {
            webPageId: n,
            hash: r ?? void 0,
            pathVariables: Dc(i)
        }
}
function Dc(e) {
    if (!e)
        return;
    let t = {};
    for (let n in e.pathVariables) {
        let r = e.pathVariables[n];
        r && (t[n] = r)
    }
    return t
}
function Oc(e, n, r, i, a, o) {
    let s = w(rb)
      , c = rc()
      , l = T( () => ({
        scopeId: n,
        nodeId: r,
        furthestExternalComponent: c
    }), [n, r, c])
      , u = ot()
      , d = ct()
      , f = T( () => {
        let e = _c(i) ? i : Ec(i);
        if (e)
            return Sc(e, u, d)
    }
    , [d, i, u])
      , p = !!(!yc() && s?.nodeId && l.nodeId)
      , m = E(e => {
        var t;
        if (a.href) {
            if (e.preventDefault(),
            e.stopPropagation(),
            /Mac|iPod|iPhone|iPad/u.test(b.userAgent) ? e.metaKey : e.ctrlKey) {
                jc(a.href, ``, `_blank`);
                return
            }
            f ? (t = a.navigate) == null || t.call(a) : jc(a.href, a.rel, a.target)
        }
    }
    , [a, f])
      , h = E(e => {
        a.href && (e.preventDefault(),
        e.stopPropagation(),
        jc(a.href, ``, `_blank`))
    }
    , [a])
      , g = E(e => {
        var t;
        a.href && e.key === `Enter` && (e.preventDefault(),
        e.stopPropagation(),
        f ? (t = a.navigate) == null || t.call(a) : jc(a.href, a.rel, a.target))
    }
    , [a, f]);
    zo(o, e => {
        e !== null && p && (e.dataset.hydrated = `true`)
    }
    , [p]);
    let _ = e;
    return p && (v.forEach(e, e => {
        Ac(e) && (L(kc(s), "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"),
        L(kc(l), "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"),
        Zy.collectNestedLink(s, l))
    }
    ),
    _ = v.map(e, e => {
        if (!Ac(e))
            return e;
        let n = Mc(e.type)
          , {children: r, ...i} = e.props
          , a = {
            ...i,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: m,
            onAuxClick: h,
            onKeyDown: g,
            as: i.as && Mc(i.as)
        }
          , o = `ref`in e ? e.ref : void 0;
        return t(n, {
            ...a,
            ref: o
        }, r)
    }
    )),
    S(rb.Provider, {
        value: l,
        children: _
    })
}
function kc(e) {
    return !gt(e?.nodeId)
}
function Ac(e) {
    return i(e) && (Mc(e.type) !== e.type || Mc(e.props.as) !== e.props.as)
}
function jc(e, t, n) {
    let r = document.createElement(`a`);
    r.href = e,
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove()
}
function Mc(e) {
    return e === `a` ? `span` : De(e) && Pe(e) === `a` ? ke.span : e
}
function Nc(e, t) {
    return e instanceof HTMLAnchorElement ? e : e instanceof Element ? e === t ? null : Nc(e.parentElement, t) : null
}
function Pc({children: e}) {
    return S(Ys, {
        children: e
    })
}
function Fc(e) {
    return s(function(t, n) {
        return S(Pc, {
            children: S(e, {
                ...t,
                ref: n
            })
        })
    })
}
function Ic() {
    var e;
    let t = b.connection || b.mozConnection || b.webkitConnection || {}, n = b.deviceMemory && b.deviceMemory > fb, r, i, a;
    function o() {
        r = t.effectiveType || ``,
        i = t.saveData || r.includes(`2g`),
        a = r === `3g` || n ? pb : mb
    }
    (e = t.addEventListener) == null || e.call(t, `change`, o),
    o();
    let s = new IntersectionObserver(u,{
        threshold: db
    })
      , c = 0;
    async function l(e, t) {
        if (i)
            return;
        let n = _b.get(e);
        if (!n?.size || gb.has(e))
            return;
        ++c,
        gb.add(e);
        let r = jt(e).catch( () => {}
        );
        s.unobserve(t),
        hb.delete(t);
        for (let e of n)
            s.unobserve(e),
            hb.delete(e);
        n.clear(),
        _b.delete(e),
        await r,
        --c
    }
    function u(e) {
        for (let t of e) {
            let e = t.target
              , n = hb.get(e);
            if (!n || gb.has(n)) {
                s.unobserve(e),
                hb.delete(e);
                continue
            }
            let r = _b.get(n)
              , i = _b.get(n)?.size ?? 0;
            if (t.isIntersecting) {
                if (c >= a)
                    continue;
                r ? r.add(e) : _b.set(n, new Set([e])),
                setTimeout(l.bind(void 0, n, e), ub)
            } else
                r && r.delete(e),
                i <= 1 && _b.delete(n)
        }
    }
    return (e, t) => {
        if (!gb.has(e))
            return hb.set(t, e),
            s.observe(t),
            () => {
                hb.delete(t),
                s.unobserve(t)
            }
    }
}
function Lc(e, t, n, r, i, a) {
    let {webPageId: o, hash: s, pathVariables: c, hashVariables: l} = n;
    return zc(e, t, o, s, a, c, l, i, r)
}
function Rc(e, t, n) {
    if (!(!e.routes || !e.getRoute) && bc(t))
        try {
            let[r,i] = t.split(`#`, 2);
            L(r !== void 0, `A href must have a defined pathname.`);
            let[a] = r.split(`?`, 2);
            L(a !== void 0, `A href must have a defined pathname.`);
            let {routeId: o, pathVariables: s} = lr(e.routes, a)
              , c = e.getRoute(o);
            if (c) {
                let e = Object.assign({}, n, s);
                return {
                    routeId: o,
                    route: c,
                    href: t,
                    elementId: i,
                    pathVariables: e
                }
            }
        } catch {}
}
function zc(e, t, n, r, i, a, o, s, c) {
    let l = {
        ...i,
        ...a,
        ...s?.path
    }
      , u = {
        ...i,
        ...o,
        ...s?.hash
    }
      , d = e.getRoute?.call(e, n)
      , f = Vn(d, {
        currentRoutePath: t?.path,
        currentRoutePathLocalized: t?.pathLocalized,
        currentPathVariables: t?.pathVariables,
        hash: r,
        pathVariables: l,
        hashVariables: u,
        preserveQueryParams: e.preserveQueryParams,
        siteCanonicalURL: e.siteCanonicalURL,
        localeId: c?.id
    })
      , p = f.split(`#`, 2)[1];
    return {
        routeId: n,
        route: d,
        href: f,
        elementId: p,
        pathVariables: l
    }
}
function Bc() {
    let e = w(bb)
      , t = ct()?.pathVariables;
    return e || t
}
function Vc(e, {webPageId: t, hash: n, pathVariables: r}, i) {
    if (t !== e.id || n)
        return !1;
    if (e.path && e.pathVariables) {
        let t = Object.assign({}, i, r);
        for (let[,n] of e.path.matchAll(yb))
            if (!n || e.pathVariables[n] !== t[n])
                return !1
    }
    return !0
}
function Hc(e, t) {
    let n = bc(e)
      , r = {
        href: e === `` || xc(e, n) ? e : `https://${e}`,
        target: Uc(t?.openInNewTab, n),
        rel: n ? void 0 : Wc(`noopener`, t?.rel)
    };
    return t?.preserveParams && (r.href = ln(r.href ?? e),
    r[`data-framer-preserve-params`] = !0),
    t?.trackLinkClick && (r.onClick = () => {
        t.trackLinkClick(e)
    }
    ),
    r
}
function Uc(e, t) {
    return e === void 0 ? t ? void 0 : `_blank` : e ? `_blank` : void 0
}
function Wc(e, t) {
    if (e && !t)
        return e;
    if (!e && t)
        return t;
    if (e && t)
        return `${e} ${t}`
}
function Gc(e, t) {
    console.warn(wt(`Failed to resolve slug: ${einstanceof Error ? e.message : t ?? `Unknown error`}`))
}
function Kc(e, t, n) {
    try {
        let r = t?.get(e.collectionId);
        if (!r)
            return Gc(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
        let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
        return St(i) ? i.catch(Gc) : i
    } catch (e) {
        Gc(e)
    }
}
function qc(e, t, n, r, i=[]) {
    function a(e) {
        if (!e)
            return;
        let t = {};
        for (let a in e) {
            let o = e[a];
            if (!o)
                continue;
            let s = Kc(o, r, n);
            St(s) ? i.push(s) : s && (t[a] = s)
        }
        return t
    }
    let o = {
        path: a(e),
        hash: a(t)
    };
    return i.length > 0 ? Promise.allSettled(i) : o
}
function Jc() {
    let e = nn();
    return E( (t, n, r, i=[]) => qc(t, n, r, e, i), [e])
}
function Yc({nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i}) {
    let a = nn();
    return E(async o => {
        if (!n.pageviewEventData?.current)
            return;
        let s = n.pageviewEventData.current instanceof Promise ? await n.pageviewEventData.current : n.pageviewEventData.current
          , c = _c(r) ? r : Ec(r);
        if (!_c(c))
            return qt(`published_site_click`, {
                ...s,
                href: o ? Xc(o) : null,
                nodeId: e ?? null,
                trackingId: t || null,
                targetRoutePath: null,
                targetWebPageId: null,
                targetCollectionItemId: null
            }, `eager`);
        let l = c.webPageId
          , u = (n?.getRoute)?.call(n, l)
          , d = u?.path ?? null
          , f = null;
        if (u?.collectionId && c.pathVariables) {
            let e = a?.get(u.collectionId);
            if (!e)
                return;
            let[t] = Object.values(c.pathVariables);
            if (F(t)) {
                let n = e.getRecordIdBySlug(t, i || void 0);
                f = (St(n) ? await n : n) ?? null
            }
        }
        return qt(`published_site_click`, {
            ...s,
            href: o ? Xc(o) : null,
            nodeId: e ?? null,
            trackingId: t ?? null,
            targetRoutePath: d,
            targetWebPageId: l,
            targetCollectionItemId: f
        }, `eager`)
    }
    , [e, t, n, r, i, a])
}
function Xc(e) {
    try {
        let t = new URL(e,W.document.baseURI);
        return t.origin === W.location.origin ? t.pathname + t.search + t.hash : t.href
    } catch {
        return e
    }
}
function Zc(e, t, n, r, i, a) {
    var o;
    let s = e.getRoute?.call(e, t);
    s && We(s?.page) && s.page.preload(),
    (o = e.navigate) == null || o.call(e, t, n, r, i, a)
}
function Qc(e, t, n, r, i, a, o) {
    return async s => {
        let c = s.metaKey
          , l = Nc(s.target)
          , u = !l || l.getAttribute(`target`) === `_blank`
          , d = !c && !u
          , f = () => void r(n);
        if (!d) {
            await kt({
                priority: `user-blocking`,
                ensureContinueBeforeUnload: !0,
                continueAfter: `paint`
            }),
            f();
            return
        }
        s.preventDefault(),
        Zc(e, t, i, a, o, f)
    }
}
function $c(e, t, n, r, i, a) {
    if (!n)
        return Hc(e, r);
    let o = Rc(t, e, a);
    if (!o)
        return Hc(e, r);
    let {routeId: s, route: c, elementId: l, pathVariables: u} = o;
    if (!c)
        return Hc(e, r);
    let d = Vn(c, {
        currentRoutePath: n.path,
        currentRoutePathLocalized: n.pathLocalized,
        currentPathVariables: n.pathVariables,
        hash: l,
        pathVariables: u,
        preserveQueryParams: t.preserveQueryParams && !vp,
        siteCanonicalURL: t.siteCanonicalURL,
        localeId: i
    })
      , f = Uc(r.openInNewTab, !0);
    return {
        href: d,
        target: f,
        onClick: Qc(t, s, d, r.trackLinkClick, l, u, r.smoothScroll),
        navigate: () => Zc(t, s, l, u, r.smoothScroll),
        "data-framer-page-link-current": n && Vc(n, {
            webPageId: s,
            hash: l,
            pathVariables: u
        }, a) || void 0
    }
}
function el(e, t, n) {
    let r = tl(e.style, t.style)
      , i = {
        ...e,
        ...t,
        ...r && {
            style: r
        },
        ref: n
    }
      , {onTap: a, onClick: o} = t;
    if (!a && !o)
        return i;
    let {onClick: s, onTap: c} = e;
    return {
        ...i,
        onClick: o || s ? e => {
            dt(s) && s?.(e),
            o?.(e)
        }
        : void 0,
        onTap: a || c ? (e, t) => {
            dt(c) && c?.(e, t),
            a?.(e, t)
        }
        : void 0
    }
}
function tl(e, t) {
    let n = I(e) ? e : void 0
      , r = n && !ht(n)
      , i = t && !ht(t);
    if (!(!r && !i))
        return {
            ...n,
            ...t
        }
}
function nl(e, t, n) {
    if (!(t && J_()))
        return e;
    let {onClick: r, ...i} = e;
    return r ? n ? {
        ...i,
        onTap: r,
        onClick: rl
    } : {
        ...i,
        onTap: r
    } : e
}
function rl(e) {
    let t = Nc(e.target);
    !t || t.getAttribute(`target`) === `_blank` || e.preventDefault()
}
function il(e, t, n, r, i, a) {
    let o = _c(e) ? e : Ec(e);
    if (!_c(o))
        return F(e) ? Hc(e).href : void 0;
    if (!t.getRoute || !t.currentRouteId)
        return;
    let s = t.getRoute(t.currentRouteId)
      , {webPageId: c, hash: l, pathVariables: u, hashVariables: d, unresolvedHashSlugs: f, unresolvedPathSlugs: p} = o
      , m = t.getRoute(c)
      , h = p || f ? a?.(p, f) : void 0;
    if (St(h))
        return;
    let g = Object.assign({}, t.currentPathVariables, n, u, h?.path)
      , _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
    return Vn(m, {
        currentRoutePath: s?.path,
        currentRoutePathLocalized: s?.pathLocalized,
        currentPathVariables: t.currentPathVariables,
        hash: l,
        pathVariables: g,
        hashVariables: _,
        relative: !1,
        preserveQueryParams: t.preserveQueryParams,
        onlyHash: r,
        siteCanonicalURL: t.siteCanonicalURL,
        localeId: i?.id
    })
}
function al({EditorBar: e, fast: t=!1}) {
    let n = lb()
      , r = w(Sb)
      , i = u(Ob, t ? Tb : Eb, Db)
      , o = T( () => {
        let e = {}, t;
        for (t in n)
            n.hasOwnProperty(t) && (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) && (e[t] = n[t]);
        return e
    }
    , [n]);
    return !e || !r || !i ? null : S(wb, {
        children: S(a, {
            children: S(e, {
                framerSiteId: r,
                features: o
            })
        })
    })
}
function ol(e, t) {
    if (e.routeId !== t.routeId)
        return !1;
    if (e.pathVariables === t.pathVariables)
        return !0;
    let n = e.pathVariables || {}
      , r = t.pathVariables || {};
    return n.length === r.length && Object.keys(n).every(e => n[e] === r[e])
}
function sl() {
    let e = Intl.DateTimeFormat().resolvedOptions();
    kb = e.timeZone,
    Ab = e.locale
}
function cl() {
    let[e,t] = d.useState(0);
    return [e, d.useCallback( () => t(e => e + 1), [])]
}
function ll(e, t, n) {
    let r = e && document.getElementById(e);
    if (r) {
        hl(r, t);
        return
    }
    n || O.scrollTo(0, 0)
}
function ul(e) {
    let t = C([]);
    return f( () => {
        t.current?.length && (t.current.forEach(e => e()),
        t.current = [])
    }
    , [e]),
    E(e => {
        t.current.push(e)
    }
    , [])
}
function dl(e) {
    if (!e)
        return gp;
    let t = !1;
    return () => {
        t || (t = !0,
        e?.())
    }
}
function fl() {
    let e = Gn()
      , t = C(void 0);
    return E(async (n, r, i, a=!0) => {
        var o;
        let s = i !== void 0;
        (o = t.current) == null || o.abort();
        let c = a ? new AbortController : void 0;
        t.current = c;
        let l = c?.signal
          , u = ut(l);
        if (r.promise.finally(u),
        !s)
            return t.current = void 0,
            n(l),
            r.promise;
        n(l);
        let d, f = new Promise( (e, t) => {
            d = e,
            l?.addEventListener(`abort`, t)
        }
        ).catch(gp);
        if (e(f, i, c),
        await r.promise,
        l?.aborted)
            return;
        let p = O.navigation?.transition;
        d();
        try {
            await p?.finished
        } catch (e) {
            console.error(`Navigation transition failed`, e)
        }
        l?.aborted || mm()
    }
    , [e])
}
function pl({defaultPageStyle: e, disableHistory: t, initialPathVariables: n, initialRoute: r, notFoundPage: i, collectionUtils: a, routes: o, initialLocaleId: s, locales: l=hp, preserveQueryParams: u=!1, LayoutTemplate: d, EditorBar: p, siteCanonicalURL: m, adaptLayoutToTextDirection: h}) {
    tr(),
    Rn({
        disabled: t,
        routeId: r,
        initialPathVariables: n,
        initialLocaleId: s
    });
    let g = An()
      , [_,v] = cl()
      , y = ul(_)
      , b = fl()
      , x = Nn(`framer-route-change`)
      , {synchronousNavigationOnDesktop: ee} = lb()
      , w = T( () => !ee || !Y_() ? c : e => e(), [ee])
      , D = C(!0)
      , re = C()
      , k = C(r)
      , ie = C(n)
      , ae = C(s)
      , oe = ae.current
      , se = T( () => l.find( ({id: e}) => oe ? e === oe : e === Tp) ?? null, [oe, l])
      , ce = se?.textDirection ?? `ltr`
      , le = h ? ce : `ltr`;
    f( () => {
        h && document.documentElement.setAttribute(`dir`, ce)
    }
    , [ce, h]);
    let ue = Un()
      , de = T( () => ({
        activeLocale: se,
        locales: l,
        setLocale: async e => {
            let t = x({
                localized: !0
            });
            await kt({
                priority: `user-blocking`,
                continueAfter: `paint`
            });
            let n;
            F(e) ? n = e : I(e) && (n = e.id);
            let r = l.find( ({id: e}) => e === Tp)
              , i = l.find( ({id: e}) => e === n);
            if (!i)
                return;
            let a = k.current
              , s = o[a];
            if (s)
                try {
                    let e = await ue({
                        currentLocale: se,
                        nextLocale: i,
                        route: s,
                        routeId: a,
                        defaultLocale: r,
                        pathVariables: ie.current,
                        preserveQueryParams: u
                    });
                    if (!e)
                        return;
                    let n = Fn(O.history.state) ? O.history.state.paginationInfo : void 0
                      , o = e.path;
                    D.current = !1,
                    ie.current = e.pathVariables,
                    ae.current = i.id,
                    b( () => {
                        g(a, a, () => w(v))
                    }
                    , t, async (t=!1) => {
                        if (o)
                            return Ln({
                                routeId: a,
                                pathVariables: e.pathVariables,
                                localeId: i.id,
                                paginationInfo: n
                            }, o, t)
                    }
                    , !1)
                } catch {}
        }
    }), [se, v, l, u, o, b, g, x, w, ue])
      , fe = E( (e, t, n, r, i, a, o, s=!1, c) => {
        D.current = !1;
        let l = k.current;
        if (k.current = e,
        ie.current = i,
        ae.current = t,
        re.current = r,
        y( () => {
            ll(n, s, a)
        }
        ),
        a) {
            w(v);
            return
        }
        b(t => {
            g(l, e, () => w(v), t)
        }
        , o, c, !0)
    }
    , [v, y, b, g, w]);
    zn(k, fe);
    let pe = E(async (e, n, r, i, a) => {
        var s;
        let c = o[e]
          , l = We(c?.page) ? c.page.getStatus() : void 0
          , d = l?.hasRendered
          , f = x({
            cached: d,
            preloaded: d ? void 0 : l?.hasLoaded
        })
          , p = dl(a);
        if (kt({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`
        }).then(p),
        await kt({
            priority: `user-blocking`,
            continueAfter: `paint`
        }),
        r) {
            let e = new Set
              , t = c?.path ?? `/`;
            for (let n of t.matchAll(nm)) {
                let t = n[1];
                if (t === void 0)
                    throw Error(`A matching path variable should not be undefined`);
                e.add(t)
            }
            r = Object.fromEntries(Object.entries(r).filter( ([t]) => e.has(t)))
        }
        let h = lt(c, n)
          , g = ie.current
          , _ = ae.current;
        if (ol({
            routeId: k.current,
            pathVariables: g
        }, {
            routeId: e,
            pathVariables: r
        })) {
            (s = f.ignore) == null || s.call(f);
            let a = o[e];
            O.history.state?.hash !== n && !t && a && (p(),
            await Pn(e, a, {
                currentRoutePath: a.path,
                currentPathVariables: g,
                pathVariables: r,
                hash: n,
                localeId: _,
                preserveQueryParams: u,
                siteCanonicalURL: m,
                currentRoutePathLocalized: a.pathLocalized
            })),
            ll(h, i, !1);
            return
        }
        if (!c)
            return;
        let v = o[k.current]
          , y = async (t=!1) => (p(),
        Pn(e, c, {
            currentRoutePath: v?.path,
            currentPathVariables: g,
            currentRoutePathLocalized: v?.pathLocalized,
            hash: n,
            pathVariables: r,
            localeId: _,
            preserveQueryParams: u,
            siteCanonicalURL: m
        }, t))
          , b = pn(m) + Vn(c, {
            currentRoutePath: v?.path,
            currentRoutePathLocalized: v?.pathLocalized,
            currentPathVariables: g,
            hash: n,
            pathVariables: r,
            localeId: _,
            preserveQueryParams: u,
            siteCanonicalURL: m,
            relative: !1
        });
        fe(e, _, h, b, r, !1, f, i, t ? void 0 : y)
    }
    , [o, fe, t, u, m, x])
      , A = it(o)
      , me = k.current
      , he = re.current
      , ge = ie.current
      , j = o[me]
      , M = j?.path
      , _e = jb(j, me, he, ge, se)
      , N = D.current
      , ve = T( () => ({
        navigate: pe,
        getRoute: A,
        currentRouteId: me,
        currentPathVariables: ge,
        routes: o,
        collectionUtils: a,
        preserveQueryParams: u,
        pageviewEventData: _e,
        siteCanonicalURL: m,
        isInitialNavigation: N
    }), [pe, A, me, ge, o, a, u, m, _e, N]);
    if (!j)
        throw Error(`Router cannot find route for ${me}`);
    let ye = !se || !j.includedLocales || j.includedLocales.includes(se.id)
      , be = M && ge ? cn(M, ge) : M
      , xe = String(oe) + be
      , Se = xi( () => ({
        ...e,
        display: `contents`
    }));
    return S(at, {
        api: ve,
        children: S(wm.Provider, {
            value: de,
            children: S(Tm.Provider, {
                value: le,
                children: te(Jn, {
                    children: [p && S(al, {
                        EditorBar: p,
                        fast: !0
                    }), S(Ay, {
                        children: te(Ys, {
                            children: [te(Qm, {
                                notFoundPage: i,
                                defaultPageStyle: e,
                                forceUpdateKey: _,
                                children: [S(Xm.Start, {}), S(ml, {
                                    LayoutTemplate: d,
                                    webPageId: j?.abTestingVariantId ?? me,
                                    style: e,
                                    children: t => S(ne, {
                                        children: ye ? or(j.page, t ? Se : e) : i && or(i, e)
                                    }, xe)
                                })]
                            }), p && S(al, {
                                EditorBar: p
                            }), S(Zn, {}), S(Xm.End, {})]
                        })
                    })]
                })
            })
        })
    })
}
function ml({LayoutTemplate: e, webPageId: t, style: n, children: r}) {
    return e ? S(e, {
        webPageId: t,
        style: n,
        children: r
    }) : r(!1)
}
function hl(e, t) {
    let n = t ? {
        behavior: `smooth`,
        block: `start`,
        inline: `nearest`
    } : void 0;
    e.scrollIntoView(n)
}
function gl(e) {
    return new Promise( (t, n) => {
        try {
            new URL(e);
            let r = new Image;
            r.onload = () => t(),
            r.onerror = n,
            r.src = e
        } catch (e) {
            n(e)
        }
    }
    )
}
function _l(e) {
    return typeof e == `object` && !!e
}
function vl(e, t) {
    if (t === ``)
        return e;
    let n = t.split(/[.[\]]+/u).filter(e => e.length > 0)
      , r = e;
    for (let e of n) {
        if (!_l(r))
            return;
        r = r[e]
    }
    return r
}
function yl(e) {
    return `${e.credentials}:${e.url}`
}
function bl(e) {
    return F(e) && !Number.isNaN(Number(e))
}
function xl(e, t) {
    switch (e) {
    case `string`:
        return F(t) || pt(t);
    case `color`:
        return F(t);
    case `boolean`:
        return ft(t);
    case `number`:
        return pt(t) || bl(t);
    case `link`:
    case `image`:
        return F(t) && xc(t, !1);
    default:
        return !1
    }
}
function Sl(e, t) {
    if (e.status === `loading`)
        return t.fallbackValue;
    if (e.status === `error`)
        throw e.error;
    let n = vl(e.data, t.resultKeyPath);
    if (gt(n))
        throw Error(`Key '${t.resultKeyPath}' not found in response`);
    if (!xl(t.resultOutputType, n))
        throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
    return n
}
function Cl(e, t) {
    if (K.current() === K.canvas)
        return !1;
    let n = Math.max(t * 1e3, Nb)
      , r = Date.now()
      , i = e + n;
    return r >= i
}
function wl({RootComponent: e, isWebsite: t, routeId: n, framerSiteId: r, pathVariables: i, routes: a, collectionUtils: o, notFoundPage: s, isReducedMotion: c=!1, includeDataObserver: l=!1, localeId: u, locales: f, preserveQueryParams: p, EditorBar: m, defaultPageStyle: h, disableHistory: g, LayoutTemplate: _, siteCanonicalURL: v, adaptLayoutToTextDirection: y}) {
    if (d.useEffect( () => {
        t || jh.start()
    }
    , []),
    t)
        return S(oe, {
            reducedMotion: c ? `user` : `never`,
            children: S(tn, {
                collectionUtils: o,
                children: S(Gb, {
                    children: S(Gy, {
                        children: S(Sb.Provider, {
                            value: r,
                            children: S(pl, {
                                initialRoute: n,
                                initialPathVariables: i,
                                initialLocaleId: u,
                                routes: a,
                                collectionUtils: o,
                                notFoundPage: s,
                                locales: f,
                                defaultPageStyle: h ?? {
                                    minHeight: `100vh`,
                                    width: `auto`
                                },
                                preserveQueryParams: p,
                                EditorBar: m,
                                disableHistory: g,
                                LayoutTemplate: _,
                                siteCanonicalURL: v,
                                adaptLayoutToTextDirection: y
                            })
                        })
                    })
                })
            })
        });
    {
        let t = l ? ey : d.Fragment;
        return S(t, {
            children: S(st, {
                routes: a,
                children: S(Os, {
                    children: d.isValidElement(e) ? e : d.createElement(e, {
                        key: n
                    })
                })
            })
        })
    }
}
function Tl(e) {
    return {
        trace(...t) {
            return Y.getLogger(e)?.trace(...t)
        },
        debug(...t) {
            return Y.getLogger(e)?.debug(...t)
        },
        info(...t) {
            return Y.getLogger(e)?.info(...t)
        },
        warn(...t) {
            return Y.getLogger(e)?.warn(...t)
        },
        error(...t) {
            return Y.getLogger(e)?.error(...t)
        },
        get enabled() {
            return Y.getLogger(e) !== void 0
        }
    }
}
function El(e) {
    let t = e.next();
    return L(t.done, `Generator must not yield`),
    t.value
}
async function Dl(e, t=e.next()) {
    for (; !t.done; ) {
        let n = await t.value;
        t = e.next(n)
    }
    return t.value
}
function Ol(e) {
    let t = e.next();
    return t.done ? t.value : Dl(e, t)
}
function *H(e) {
    let t = {}
      , n = Object.keys(e)
      , r = [];
    for (let i of n) {
        let n = e[i];
        if (bt(n)) {
            let e = n.next();
            e.done ? t[i] = e.value : r.push(Dl(n, e).then(e => {
                t[i] = e
            }
            ))
        } else
            t[i] = n
    }
    return r.length > 0 && (yield Promise.all(r)),
    t
}
function *kl(e) {
    let t = []
      , n = e.keys()
      , r = [];
    for (let i of n) {
        let n = e[i];
        if (bt(n)) {
            let e = n.next();
            e.done ? t[i] = e.value : r.push(Dl(n, e).then(e => {
                t[i] = e
            }
            ))
        } else
            t[i] = n
    }
    return r.length > 0 && (yield Promise.all(r)),
    t
}
function Al(e) {
    return Nl(e) || Il(e)
}
function jl(e) {
    return mt(e) && e.every(I)
}
function Ml(e) {
    return I(e) && dt(e.read) && dt(e.preload)
}
function Nl(e) {
    return jl(e) || Ml(e)
}
function Pl(e) {
    return I(e) && I(e.schema)
}
function Fl(e) {
    return I(e) && I(e.collectionByLocaleId)
}
function Il(e) {
    return Pl(e) || Fl(e)
}
function Ll(e, t, n) {
    let r = e.value.length
      , i = t.value.length;
    if (r < i)
        return -1;
    if (r > i)
        return 1;
    for (let i = 0; i < r; i++) {
        let r = e.value[i]
          , a = t.value[i]
          , o = fu(r, a, n);
        if (o !== 0)
            return o
    }
    return 0
}
function Rl(e, t) {
    switch (e?.type) {
    case `array`:
        return {
            type: `array`,
            value: e.value.map(e => X.cast(e, t.definition))
        }
    }
    return null
}
function zl(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Bl(e) {
    switch (e?.type) {
    case `boolean`:
        return e;
    case `number`:
    case `string`:
        return {
            type: `boolean`,
            value: !!e.value
        }
    }
    return null
}
function Vl(e) {
    return Bl(e)?.value ?? !1
}
function Hl(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Ul(e) {
    switch (e?.type) {
    case `color`:
        return e
    }
    return null
}
function Wl(e, t) {
    let n = new Date(e.value)
      , r = new Date(t.value);
    return n < r ? -1 : n > r ? 1 : 0
}
function Gl(e) {
    switch (e?.type) {
    case `date`:
        return e;
    case `number`:
    case `string`:
        {
            let t = new Date(e.value);
            return yt(t) ? {
                type: `date`,
                value: t.toISOString()
            } : null
        }
    }
    return null
}
function Kl(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function ql(e) {
    switch (e?.type) {
    case `enum`:
        return e;
    case `string`:
        return {
            type: `enum`,
            value: e.value
        }
    }
    return null
}
function Jl(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Yl(e) {
    switch (e?.type) {
    case `file`:
        return e
    }
    return null
}
function Xl(e, t) {
    let n = JSON.stringify(e.value)
      , r = JSON.stringify(t.value);
    return n < r ? -1 : n > r ? 1 : 0
}
function Zl(e) {
    switch (e?.type) {
    case `link`:
        return e;
    case `string`:
        try {
            let {protocol: t} = new URL(e.value);
            return t === `http:` || t === `https:` ? {
                type: `link`,
                value: e.value
            } : null
        } catch {
            return null
        }
    }
    return null
}
function Ql(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function $l(e) {
    switch (e?.type) {
    case `number`:
    case `string`:
        {
            let t = Number(e.value);
            return Number.isFinite(t) ? {
                type: `number`,
                value: t
            } : null
        }
    }
    return null
}
function eu(e) {
    return $l(e)?.value ?? null
}
function tu(e, t, n) {
    let r = Object.keys(e.value).sort()
      , i = Object.keys(t.value).sort();
    if (r.length < i.length)
        return -1;
    if (r.length > i.length)
        return 1;
    for (let a = 0; a < r.length; a++) {
        let o = r[a]
          , s = i[a];
        if (o < s)
            return -1;
        if (o > s)
            return 1;
        let c = e.value[o] ?? null
          , l = t.value[s] ?? null
          , u = fu(c, l, n);
        if (u !== 0)
            return u
    }
    return 0
}
function nu(e, t) {
    switch (e?.type) {
    case `object`:
        {
            let n = {}
              , r = Object.entries(t.definitions);
            for (let[t,i] of r) {
                let r = e.value[t] ?? null;
                n[t] = X.cast(r, i)
            }
            return {
                type: `object`,
                value: n
            }
        }
    }
    return null
}
function ru(e, t) {
    let n = JSON.stringify(e.value)
      , r = JSON.stringify(t.value);
    return n < r ? -1 : n > r ? 1 : 0
}
function iu(e) {
    switch (e?.type) {
    case `responsiveimage`:
        return e
    }
    return null
}
function au(e, t) {
    let n = e.value
      , r = t.value;
    return n < r ? -1 : n > r ? 1 : 0
}
function ou(e) {
    switch (e?.type) {
    case `richtext`:
        return e
    }
    return null
}
function su(e, t) {
    let n = e.value
      , r = t.value;
    return n < r ? -1 : n > r ? 1 : 0
}
function cu(e) {
    switch (e?.type) {
    case `vectorsetitem`:
        return e
    }
    return null
}
function lu(e, t, n) {
    let r = e.value
      , i = t.value;
    return n.type === 0 && (r = e.value.toLowerCase(),
    i = t.value.toLowerCase()),
    r < i ? -1 : r > i ? 1 : 0
}
function uu(e) {
    switch (e?.type) {
    case `string`:
        return e;
    case `number`:
        return {
            type: `string`,
            value: String(e.value)
        }
    }
    return null
}
function du(e) {
    return uu(e)?.value ?? null
}
function fu(e, t, n) {
    if (_t(e) || _t(t))
        return L(e === t),
        0;
    switch (e.type) {
    case `array`:
        return L(e.type === t.type),
        Ll(e, t, n);
    case `boolean`:
        return L(e.type === t.type),
        zl(e, t);
    case `color`:
        return L(e.type === t.type),
        Hl(e, t);
    case `date`:
        return L(e.type === t.type),
        Wl(e, t);
    case `enum`:
        return L(e.type === t.type),
        Kl(e, t);
    case `file`:
        return L(e.type === t.type),
        Jl(e, t);
    case `link`:
        return L(e.type === t.type),
        Xl(e, t);
    case `number`:
        return L(e.type === t.type),
        Ql(e, t);
    case `object`:
        return L(e.type === t.type),
        tu(e, t, n);
    case `responsiveimage`:
        return L(e.type === t.type),
        ru(e, t);
    case `richtext`:
        return L(e.type === t.type),
        au(e, t);
    case `vectorsetitem`:
        return L(e.type === t.type),
        su(e, t);
    case `string`:
        return L(e.type === t.type),
        lu(e, t, n);
    default:
        R(e)
    }
}
async function pu(e, t) {
    return Ml(e) ? (await e.preload(t),
    e.read(t)) : e
}
function mu(e) {
    if (Il(e) && e.id)
        return e.id;
    let t = Yb.get(e);
    if (t)
        return t;
    let n = `${Xb}${Math.random().toString(16).slice(2)}`;
    return Yb.set(e, n),
    n
}
function hu(e, t) {
    if (Nl(e)) {
        let n = mu(e)
          , r = t?.id ?? Tp
          , i = n + r
          , a = Zb.get(i);
        if (a)
            return a;
        let o = new Jb(e,t);
        return Zb.set(i, o),
        o
    }
    if (Pl(e))
        return e;
    if (Fl(e)) {
        for (; t; ) {
            let n = e.collectionByLocaleId[t.id];
            if (n)
                return n;
            t = t.fallback
        }
        return e.collectionByLocaleId.default
    }
    R(e, `Unsupported collection type`)
}
function gu() {
    return 25
}
function _u() {
    return 12500
}
function vu(e) {
    return e
}
function yu(e) {
    return e
}
function bu(e) {
    return I(e) && dt(e.getHash)
}
function U(e, ...t) {
    let n = t.map(e => {
        let t = e instanceof ox;
        L(!t, `Pass CollectionMetadata.id instead`);
        let n = e instanceof lx;
        L(!n, `Pass FieldMetadata.id instead`);
        let r = e instanceof sx;
        L(!r, `Pass IndexMetadata.id instead`);
        let i = e instanceof nx;
        L(!i, `Pass RelationalNode.group.id instead`);
        let a = e instanceof $b;
        return L(!a, `Pass Group.id instead`),
        bu(e) ? e.getHash() : JSON.stringify(e)
    }
    );
    return yu(`${e}(${n.join(`, `)})`)
}
function xu(e, t) {
    return {
        collectionId: mu(e),
        pointer: t
    }
}
function Su(e) {
    return I(e) && F(e.collectionId)
}
function Cu(e, t) {
    return {
        collectionId: mu(e),
        pointer: t
    }
}
function wu(e) {
    return I(e) && F(e.collectionId)
}
function Tu(e, t) {
    let n = new Map;
    function r(e) {
        if (I(e))
            if (e.type === `Collection` && Al(e.data)) {
                let r = hu(e.data, t)
                  , i = mu(r);
                n.set(i, r)
            } else
                for (let t in e) {
                    let n = e[t];
                    r(n)
                }
        else if (mt(e))
            for (let t of e)
                r(t)
    }
    return r(e),
    n
}
function Eu(e) {
    return e
}
function Du(e) {
    return e
}
function Ou(e) {
    return e
}
function ku(e) {
    return Array(e).fill({
        type: `All`
    })
}
function Au(e) {
    return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`
}
function ju(e) {
    return typeof e.value == `string` ? `'${e.value}'` : e.value
}
function Mu(e) {
    return `${e.functionName}(${e.arguments.map(e => Lu(e)).join(`, `)})`
}
function Nu(e) {
    let t = `CASE`;
    e.value && (t += ` ${Lu(e.value)}`);
    for (let n of e.conditions)
        t += ` WHEN ${Lu(n.when)} THEN ${Lu(n.then)}`;
    return e.else && (t += ` ELSE ${Lu(e.else)}`),
    t += ` END`,
    t
}
function Pu(e) {
    let t = Lu(e.value);
    return `${e.operator.toUpperCase()} ${t}`
}
function Fu(e) {
    let t = Lu(e.left)
      , n = Lu(e.right)
      , r = e.operator.toUpperCase();
    return `${t} ${r} ${n}`
}
function Iu(e) {
    return `CAST(${Lu(e.value)} as ${e.dataType})`
}
function Lu(e) {
    switch (e.type) {
    case `Identifier`:
        return Au(e);
    case `LiteralValue`:
        return ju(e);
    case `FunctionCall`:
        return Mu(e);
    case `Case`:
        return Nu(e);
    case `UnaryOperation`:
        return Pu(e);
    case `BinaryOperation`:
        return Fu(e);
    case `TypeCast`:
        return Iu(e);
    case `Select`:
        return `${Hu(e)}`;
    default:
        R(e)
    }
}
function Ru(e) {
    return Pl(e.data) ? `Collection` : e.alias ? `"${e.data.displayName}" AS "${e.alias}"` : `"${e.data.displayName}"`
}
function zu(e) {
    let t = `${Bu(e.left)} LEFT JOIN ${Bu(e.right)}`;
    return e.constraint && (t += ` ON ${Lu(e.constraint)}`),
    t
}
function Bu(e) {
    switch (e.type) {
    case `Collection`:
        return Ru(e);
    case `LeftJoin`:
        return zu(e);
    default:
        R(e)
    }
}
function Vu(e) {
    let t = ``;
    return e.split(/\s+/u).forEach(e => {
        e !== `` && ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e) ? t += `
${e}` : [`AND`, `OR`].includes(e) ? t += `
	${e}` : t += ` ${e}`)
    }
    ),
    t.trim()
}
function Hu(e) {
    let t = ``;
    return t += `SELECT ${e.select.map(e => {
        let t = Lu(e);
        return e.alias ? `${t} AS "${e.alias}"` : t
    }
    ).join(`, `)}`,
    t += ` FROM ${Bu(e.from)}`,
    e.where && (t += ` WHERE ${Lu(e.where)}`),
    e.orderBy && (t += ` ORDER BY ${e.orderBy.map(e => `${Lu(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Lu(e.limit)}`),
    e.offset && (t += ` OFFSET ${Lu(e.offset)}`),
    Vu(t)
}
function Uu(e, t) {
    e.forEach(e => clearTimeout(e)),
    e.clear(),
    t.forEach(e => e?.(`Callback cancelled by variant change`)),
    t.clear()
}
function Wu() {
    return new Set
}
function Gu(e) {
    let t = xi(Wu)
      , n = xi(Wu);
    return Wo( () => () => Uu(n, t)),
    D( () => () => Uu(n, t), []),
    D( () => {
        Uu(n, t)
    }
    , [e]),
    C({
        activeVariantCallback: e => async (...n) => new Promise( (r, i) => {
            t.add(i),
            e(...n).then(r)
        }
        ).catch( () => {}
        ),
        delay: async (e, t) => {
            await new Promise(e => {
                n.add(globalThis.setTimeout( () => e(!0), t))
            }
            ),
            e()
        }
    }).current
}
function Ku(e, t, n) {
    return d.useCallback(r => !n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}, [e, t, n])
}
function qu(e) {
    for (let[t,n] of Object.entries(e))
        if (W.matchMedia(n).matches)
            return t
}
function Ju(e) {
    let t = [];
    for (let {hash: n, mediaQuery: r} of e) {
        if (!r)
            continue;
        W.matchMedia(r).matches && t.push(n)
    }
    if (t.length > 0)
        return t;
    let n = e[0]?.hash;
    if (n)
        return [n]
}
function Yu(e, t, n=!0) {
    let r = w(Uv)
      , i = da()
      , a = !i && B_()
      , o = C(a ? qu(t) ?? e : e)
      , s = C(n && r ? e : o.current)
      , l = no()
      , u = Le()
      , d = E(e => {
        if (e !== o.current || e !== s.current) {
            let t = function() {
                o.current = s.current = e,
                c( () => {
                    l()
                }
                )
            };
            i ? t() : u( () => {
                t()
            }
            )
        }
    }
    , [u, l, i]);
    return $_( () => {
        i && d(e)
    }
    , [e, i, d]),
    $_( () => {
        !n || r !== !0 || d(o.current)
    }
    , []),
    D( () => {
        let e = [];
        for (let[n,r] of Object.entries(t)) {
            let t = W.matchMedia(r)
              , i = e => {
                e.matches && d(n)
            }
            ;
            Xu(t, i),
            e.push([t, i])
        }
        return () => e.forEach( ([e,t]) => Zu(e, t))
    }
    , [t, d]),
    [o.current, s.current]
}
function Xu(e, t) {
    e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t)
}
function Zu(e, t) {
    e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t)
}
function Qu(e) {
    setTimeout(e, 1)
}
function $u(e) {
    var t, n, r, i;
    let a = new Set
      , o = Ju(e);
    if (o)
        for (let e of o)
            for (let n of document.querySelectorAll(`.hidden-` + e))
                ed(n.previousSibling) && a.add(n.previousSibling),
                (t = n.parentNode) == null || t.removeChild(n);
    (yp ? W.requestIdleCallback : Qu)( () => {
        var e;
        (e = document.querySelector(_S)) == null || e.remove()
    }
    );
    for (let e of document.querySelectorAll(`.ssr-variant:empty`))
        ed(e.previousSibling) && a.add(e.previousSibling),
        (n = e.parentNode) == null || n.removeChild(e);
    for (let e of a)
        td(e.nextSibling) && ((r = e.parentNode) == null || r.removeChild(e.nextSibling),
        (i = e.parentNode) == null || i.removeChild(e))
}
function ed(e) {
    return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`
}
function td(e) {
    return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`
}
function nd(e) {
    return I(e) && vS in e && e.page !== void 0
}
function rd(e, t) {
    let n = Object.entries(e ?? {}).filter( ([,e]) => !(gt(e) || I(e))).map( ([e,n]) => ({
        type: `BinaryOperation`,
        operator: `==`,
        left: {
            type: `TypeCast`,
            value: {
                type: `Identifier`,
                name: e,
                collection: t
            },
            dataType: `STRING`
        },
        right: {
            type: `LiteralValue`,
            value: String(n)
        }
    }));
    return n.length === 0 ? {
        type: `LiteralValue`,
        value: !1
    } : n.reduce( (e, t) => ({
        type: `BinaryOperation`,
        operator: `and`,
        left: e,
        right: t
    }))
}
function id(e, t) {
    return `${e}-${t}`
}
function ad(e, t) {
    let n = e.indexOf(t) + 1;
    n >= e.length && (n = 0);
    let r = e[n];
    return L(r !== void 0, `nextVariant should be defined`),
    r
}
function od(e, t) {
    if (e) {
        if (t) {
            let n = e[t];
            if (n)
                return n
        }
        return e.default
    }
}
function sd(e, t, n, r, i) {
    let {hover: a, pressed: o, loading: s, error: c} = e || {};
    if (c && i)
        return `error`;
    if (s && r)
        return `loading`;
    if (o && n)
        return `pressed`;
    if (a && t)
        return `hover`
}
function cd(e, t) {
    return t[e] || `framer-v-${e}`
}
function ld(e, t, n) {
    return e && n.has(e) ? e : t
}
function ud() {
    let e = C()
      , t = C()
      , n = E( () => {
        e.current && (document.removeEventListener(`visibilitychange`, e.current),
        e.current = void 0,
        t.current = void 0)
    }
    , []);
    return D( () => () => {
        n()
    }
    , [n]),
    E(r => {
        if (!document.hidden) {
            r(),
            n();
            return
        }
        if (t.current = r,
        e.current)
            return;
        let i = () => {
            var e;
            document.hidden || ((e = t.current) == null || e.call(t),
            n())
        }
        ;
        e.current = i,
        document.addEventListener(`visibilitychange`, i)
    }
    , [n])
}
function dd() {
    let e = C()
      , t = C(!1)
      , n = C()
      , r = w(Ov);
    return D( () => () => {
        var t;
        (t = e.current) == null || t.call(e),
        n.current = void 0,
        e.current = void 0
    }
    , []),
    E( (i, a) => {
        if (!a?.current || t.current) {
            i();
            return
        }
        if (n.current = i,
        e.current)
            return;
        let o = !1;
        e.current = Bo(r, `undefined`, a.current, null, e => {
            t.current = e.isIntersecting,
            !o && (o = !0,
            queueMicrotask( () => {
                var e;
                o = !1,
                t.current && ((e = n.current) == null || e.call(n))
            }
            ))
        }
        )
    }
    , [r])
}
function fd(e) {
    let t = ud()
      , n = dd();
    return E( (r, i=!1) => {
        if (vp) {
            r();
            return
        }
        t(i && e ? () => n(r, e) : r)
    }
    , [t, n, e])
}
async function pd() {
    return new Promise(e => {
        let t = e;
        setTimeout( () => {
            t && (performance.mark(`wait-for-click-fallback`),
            t())
        }
        , 150),
        xS = () => {
            e(),
            t = void 0
        }
    }
    )
}
function md(e) {
    e.button === 0 && (performance.mark(`pointerdown-listener`),
    bS = pd())
}
function hd() {
    performance.mark(`click-received-listener`),
    bS = void 0,
    xS?.(),
    xS = void 0
}
function gd(e=!1) {
    D( () => {
        e && (document.addEventListener(`pointerup`, md, !0),
        document.__proto__.addEventListener.call(document, `click`, hd, !0))
    }
    , [e])
}
function _d({variant: e, defaultVariant: t, transitions: n, enabledGestures: r, cycleOrder: i=[], variantProps: a={}, variantClassNames: o={}, ref: s}) {
    let l = no()
      , u = yc()
      , d = xi( () => new Set(i))
      , {yieldOnTap: f} = lb();
    gd(f);
    let p = fd(s)
      , m = C({
        isHovered: !1,
        isHoveredHasUpdated: !1,
        isPressed: !1,
        isPressedHasUpdated: !1,
        isError: !1,
        hasPressedVariants: !0,
        baseVariant: ld(e, t, d),
        lastVariant: e,
        gestureVariant: void 0,
        loadedBaseVariant: {},
        defaultVariant: t,
        enabledGestures: r,
        cycleOrder: i,
        transitions: n
    })
      , h = E(e => {
        let {isHovered: t, isPressed: n, isError: r, enabledGestures: i, defaultVariant: a} = m.current
          , o = ld(e, a, d)
          , s = sd(i?.[o], t, n, !1, r)
          , c = s ? id(o, s) : void 0;
        return [o, c]
    }
    , [])
      , g = E(async (e, t, n, r, i=!1, a=!1) => {
        let[o,s] = h(r);
        if (o === e && s === t)
            return;
        a && (m.current.isError = !1),
        m.current.baseVariant = o || n,
        m.current.gestureVariant = s;
        let u = f && m.current.isPressedHasUpdated;
        u && bS && (performance.mark(`wait-for-tap-start`),
        await bS,
        performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
        u && (performance.mark(`yield-on-tap-start`),
        await kt({
            priority: `user-blocking`,
            continueAfter: `paint`
        }),
        performance.measure(`yield-on-tap`, `yield-on-tap-start`));
        let {isHovered: d, isPressed: g, isHoveredHasUpdated: _, isPressedHasUpdated: v} = m.current;
        if (d || _ || g || v) {
            c(l);
            return
        }
        p( () => c(l), i)
    }
    , [h, l, p, f])
      , _ = E( ({isHovered: e, isPressed: t, isError: n}) => {
        let r = t !== m.current.isPressed
          , i = e !== m.current.isHovered;
        e !== void 0 && (m.current.isHovered = e),
        t !== void 0 && (m.current.isPressed = t),
        n !== void 0 && (m.current.isError = n);
        let {baseVariant: a, gestureVariant: o, defaultVariant: s} = m.current;
        m.current.isPressedHasUpdated = r,
        m.current.isHoveredHasUpdated = i,
        g(a, o, s, a, !1)
    }
    , [g])
      , v = E( (e, t=!1) => {
        let {defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a} = m.current
          , o = e === yS ? ad(r || [], i || n) : e;
        g(i, a, n, o, t, !0)
    }
    , [g])
      , y = E( () => {
        let {baseVariant: e} = m.current;
        m.current.loadedBaseVariant[e] = !0,
        p( () => c(l), !0)
    }
    , [l, p]);
    if (e !== m.current.lastVariant) {
        let[t,n] = h(e);
        m.current.lastVariant = t,
        (t !== m.current.baseVariant || n !== m.current.gestureVariant) && (m.current.baseVariant = t,
        m.current.gestureVariant = n)
    }
    let {baseVariant: b, gestureVariant: x, defaultVariant: S, enabledGestures: ee, isHovered: w, isPressed: te, isError: D, loadedBaseVariant: O} = m.current
      , ne = Ku(m.current.baseVariant, m.current.gestureVariant, a);
    return T( () => {
        let e = [];
        b !== S && e.push(b);
        let t = ee?.[b]?.loading
          , n = !D && !u && !!t && !O[b]
          , r = n ? id(b, `loading`) : x;
        r && e.push(r);
        let i = ee?.[b]
          , a = {
            onMouseEnter: () => _({
                isHovered: !0
            }),
            onMouseLeave: () => _({
                isHovered: !1
            })
        };
        return i?.pressed && Object.assign(a, {
            onTapStart: () => _({
                isPressed: !0
            }),
            onTapCancel: () => _({
                isPressed: !1
            }),
            onTap: () => _({
                isPressed: !1
            })
        }),
        {
            variants: e,
            baseVariant: b,
            gestureVariant: r,
            isLoading: n,
            transition: od(m.current.transitions, b),
            setVariant: v,
            setGestureState: _,
            clearLoadingGesture: y,
            addVariantProps: ne,
            gestureHandlers: a,
            classNames: Fs(cd(b, o), sd(i, w, te, n, D))
        }
    }
    , [b, x, w, te, O, ne, v, S, ee, _, y, o])
}
function vd(e) {
    return e.weight !== void 0 && e.style !== void 0
}
function yd(e, t) {
    let n = t === `normal` ? `Regular` : `Italic`;
    return e === 400 ? n : t === `normal` ? `${DS[e]}` : `${DS[e]} ${n}`
}
function bd(e, t) {
    return t ? `${e} ${kS}` : e
}
function xd(e, t) {
    switch (t) {
    case `custom`:
        throw Error(`Custom fonts are not supported`);
    default:
        return bd(e.name, e.isVariable)
    }
}
function Sd(e) {
    return !!(e && Array.isArray(e))
}
function Cd(e) {
    if (!e || !Array.isArray(e))
        return;
    let t = [];
    for (let n of e) {
        if (!Td(n))
            continue;
        t.push({
            tag: n.tag,
            name: n.name,
            minValue: n.minValue,
            maxValue: n.maxValue,
            defaultValue: n.defaultValue
        })
    }
    return t
}
function wd(e) {
    return !(typeof e != `object` || !e || !(`tag`in e) || typeof e.tag != `string` || `coverage`in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
}
function Td(e) {
    return !(typeof e != `object` || !e || !(`tag`in e) || typeof e.tag != `string` || `name`in e && typeof e.name != `string` || !(`minValue`in e) || typeof e.minValue != `number` || !(`maxValue`in e) || typeof e.maxValue != `number` || !(`defaultValue`in e) || typeof e.defaultValue != `number`)
}
function Ed(e) {
    let t = Dd(e);
    return MS[t]
}
function Dd(e) {
    return e.toLowerCase().replace(/\s+/gu, `-`)
}
function Od(e) {
    return e = e.toLowerCase(),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
}
function kd(e, t) {
    return {
        ...Ad(e, t),
        ...jd(e, t)
    }
}
function Ad(e, t) {
    if (t.length === 0)
        return {
            variantBold: void 0,
            variantBoldItalic: void 0,
            variantItalic: void 0
        };
    let {weight: n, style: r} = e
      , i = new Map
      , a = new Map;
    for (let r of t) {
        if (r.isVariable !== e.isVariable || (i.set(`${r.weight}-${r.style}`, r),
        r.weight <= n))
            continue;
        a.has(r.style) || a.set(r.style, r)
    }
    let o = a.get(r)
      , s = a.get(`italic`)
      , c = e.weight;
    c <= 300 ? (o = i.get(`400-${r}`) ?? o,
    s = i.get(`400-italic`) ?? s) : c <= 500 ? (o = i.get(`700-${r}`) ?? o,
    s = i.get(`700-italic`) ?? s) : (o = i.get(`900-${r}`) ?? o,
    s = i.get(`900-italic`) ?? s);
    let l = i.get(`${n}-italic`);
    return {
        variantBold: o,
        variantItalic: l,
        variantBoldItalic: s
    }
}
function jd(e, t) {
    if (t.length === 0)
        return {
            variantVariable: void 0,
            variantVariableItalic: void 0
        };
    let n, r, i, a;
    for (let o of t) {
        if (!o.isVariable)
            continue;
        let t = o.weight === e.weight
          , s = o.weight === 400;
        o.style === `normal` ? t ? n = o : s ? i = o : i ||= o : o.style === `italic` && (t ? r = o : s ? a = o : a ||= o)
    }
    return {
        variantVariable: n ?? i,
        variantVariableItalic: r ?? a
    }
}
function Md(e) {
    return !!e.variationAxes
}
function Nd(e) {
    return Pd(e) || Fd(e)
}
function Pd(e) {
    return e.startsWith(FS)
}
function Fd(e) {
    return e.startsWith(PS)
}
function Id(e, t) {
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (r) {
            if (r.owner !== t.owner && r.file === t.file)
                return {
                    existingFont: r,
                    index: n,
                    projectDuplicate: !0
                };
            if (r && r.selector === t.selector)
                return {
                    existingFont: r,
                    index: n,
                    projectDuplicate: !1
                }
        }
    }
}
function Ld(e) {
    let {font: t} = e
      , n = t.fontFamily
      , r = Array.isArray(t.variationAxes);
    if (r && n.toLowerCase().includes(`variable`))
        return n;
    let i = r ? kS : t.fontSubFamily.trim();
    return i === `` ? n : `${n} ${i}`
}
function Rd({fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r}) {
    let i = t.trim() || `Regular`
      , a = i.toLocaleLowerCase().includes(`variable`)
      , o = Cd(n) && !a ? `Variable ${i}` : i
      , s = `normal`
      , c = 400;
    return r && (c = r.weight,
    s = r.italic || r.oblique ? `italic` : `normal`),
    {
        family: e,
        variant: o,
        weight: c,
        style: s
    }
}
function zd(e) {
    if (!(!e.weight || !e.style))
        return {
            weight: e.weight,
            style: e.style,
            isVariable: Md(e),
            selector: e.selector
        }
}
function Bd(e) {
    let t = e.fonts.map(e => zd(e)).filter(e => e !== void 0);
    for (let n of e.fonts) {
        let e = zd(n);
        if (!e)
            continue;
        let r = kd(e, t);
        n.selectorVariable = r.variantVariable?.selector,
        n.selectorVariableItalic = r.variantVariableItalic?.selector,
        n.selectorBold = r.variantBold?.selector,
        n.selectorBoldItalic = r.variantBoldItalic?.selector,
        n.selectorItalic = r.variantItalic?.selector
    }
}
function Vd(e) {
    return e.ownerType === `team` ? `team` : `project`
}
async function Hd(e) {
    switch (e) {
    case `google`:
        return (await import(`./google-EG6NI4GX.uQolp8zJ.mjs`))?.default;
    case `fontshare`:
        return (await import(`./fontshare-FXZWFT7E.B7xIJO_F.mjs`))?.default;
    default:
        throw Error(`Unknown font source: ${e}`)
    }
}
async function Ud(e) {
    switch (e) {
    case `google`:
        return (await import(`./google-3CBHXOZP.CRtzlWv7.mjs`))?.default;
    case `fontshare`:
        return (await import(`./fontshare-OQO4BJDD.6jdp8wGC.mjs`))?.default;
    case `framer`:
        return (await import(`./framer-font-T5XNAHJ3.RZb7_hpZ.mjs`))?.default;
    default:
        throw Error(`Unknown font source: ${e}`)
    }
}
function Wd(e) {
    return e.split(`,`).map(e => e.trim().toLowerCase()).filter(Gd)
}
function Gd(e) {
    return LS.includes(e)
}
function Kd(e) {
    let t = {
        serif: `serif`,
        sans: `sans-serif`,
        slab: `slab`,
        display: `display`,
        handwritten: `handwriting`,
        script: `handwriting`
    }
      , n = Wd(e)[0];
    return n && t[n]
}
function qd(e) {
    let t = {
        serif: `serif`,
        "sans-serif": `sans-serif`,
        display: `display`,
        handwriting: `handwriting`,
        monospace: `monospace`
    };
    if (e)
        return t[e]
}
function Jd(e, t) {
    return e.reduce( (e, n) => (e[t(n)] = n,
    e), {})
}
async function Yd(e, t, n=0) {
    let {family: r, url: i, stretch: a, unicodeRange: o} = e
      , s = e.weight
      , c = e.style || `normal`
      , l = `${r}-${c}-${s}-${i}`;
    if (!$S.has(l) || n > 0) {
        let u = new FontFace(r,`url(${i})`,{
            weight: F(s) ? s : s?.toString(),
            style: c,
            stretch: a,
            unicodeRange: o
        })
          , d = u.load().then( () => (t.fonts.add(u),
        Xd(r, c, s))).catch(l => {
            if (l.name !== `NetworkError`)
                throw l;
            if (n < ZS)
                return Yd(e, t, n + 1);
            throw new QS(`Font loading failed after ${n} retries due to network error: ${JSON.stringify({
                family: r,
                style: c,
                weight: s,
                url: i,
                stretch: a,
                unicodeRange: o
            })}`)
        }
        );
        $S.set(l, d)
    }
    await $S.get(l)
}
async function Xd(e, t, n) {
    let r = `${e}-${t}-${n}`;
    if (!eC.has(r)) {
        let i = new YS.default(e,{
            style: t,
            weight: n
        }).load(null, XS);
        eC.set(r, i)
    }
    try {
        await eC.get(r)
    } catch {
        throw new QS(`Failed to check if font is ready (${XS}ms timeout exceeded): ${JSON.stringify({
            family: e,
            style: t,
            weight: n
        })}`)
    }
}
function Zd(e) {
    try {
        if (e === `framer`)
            return Qd(nC) ? nC : void 0;
        {
            let t = (async () => {
                switch (e) {
                case `google`:
                    return (await import(`./google-IKKKVJ3J.OfYUM7Mk.mjs`)).default;
                case `fontshare`:
                    return (await import(`./fontshare-IXII5VYB.UNLZ851l.mjs`)).default;
                default:
                    R(e)
                }
            }
            )();
            return Qd(t) ? t : void 0
        }
    } catch (e) {
        console.error(e);
        return
    }
}
function Qd(e) {
    return I(e) && Object.values(e).every(ef)
}
function $d(e) {
    return I(e) && F(e.tag)
}
function ef(e) {
    return Array.isArray(e) && e.every($d)
}
function tf(e, t) {
    D( () => {
        function n(n) {
            n.key === `Escape` && e && (n.preventDefault(),
            n.stopPropagation(),
            t())
        }
        return O.addEventListener(`keyup`, n),
        () => O.removeEventListener(`keyup`, n)
    }
    , [e, t])
}
function nf(e, t, n, r) {
    let i = O.innerHeight - r
      , a = Math.min(O.innerWidth - n, t)
      , o = i / e;
    return Math.min(a, o)
}
function rf(e, {width: t, height: n}) {
    if (!e.src || !e.srcSet)
        return;
    let r = new O.Image;
    return r.src = e.src,
    r.srcset = e.srcSet,
    r.width = t,
    r.height = n,
    r.decode()
}
function af() {
    return document.getElementById(ab) ?? document.getElementById(ib) ?? document.body
}
function sf(e, t) {
    return pt(e) ? e : t ?? 0
}
function cf(e) {
    return sf(e?.paddingTop, e?.padding) + sf(e?.paddingBottom, e?.padding)
}
function lf(e) {
    return sf(e?.paddingLeft, e?.padding) + sf(e?.paddingRight, e?.padding)
}
function uf(e) {
    let t = C(e);
    return t.current = e,
    E( (...e) => t.current(...e), [])
}
function df(e, t) {
    if (!e || !t || !t.src)
        return t;
    let n = new URL(t.src);
    return n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
        ...t,
        sizes: `min(100vw, ${e.maxWidth - lf(e)}px)`,
        srcSet: aC.map(e => {
            let t = new URL(n);
            return t.searchParams.set(`scale-down-to`, e.toString()),
            `${t.toString()} ${e}w`
        }
        ).join(`, `)
    }
}
function ff(e) {
    if (!e)
        return !1;
    for (let t in e) {
        if (!(t in oC))
            continue;
        let n = oC[t]
          , r = e[t];
        if (!pt(n) || !pt(r) || n === r)
            continue;
        return !0
    }
    return !1
}
function pf(e) {
    let t = Ue.get(e.current);
    if (!t)
        return !1;
    if (ff(t.projection?.latestValues))
        return !0;
    let n = t.projection?.path;
    if (!n || n.length === 0)
        return !1;
    for (let e of n)
        if (ff(e.latestValues))
            return !0;
    return !1
}
function mf(e) {
    return s(function({lightbox: t, lightboxClassName: r, onClick: i, ...a}, o) {
        let s = w(se)
          , u = C(null)
          , d = o ?? u
          , f = C()
          , p = T( () => df(t, a.background), [t, a.background])
          , [m,h] = re(!1)
          , [g,_] = re()
          , v = E( () => {
            if (t) {
                if (m) {
                    c( () => {
                        h(!0)
                    }
                    );
                    return
                }
                Ce.read( () => {
                    if (!d.current)
                        return;
                    let e = getComputedStyle(d.current)
                      , n = d.current.getAttribute(`data-border`) === `true` ? getComputedStyle(d.current, `::after`) : void 0
                      , r = d.current.offsetWidth ?? 1
                      , i = d.current.offsetHeight ?? 1
                      , a = pf(d) ? {
                        duration: 0
                    } : t.transition;
                    c( () => {
                        _({
                            borderRadius: e.borderRadius,
                            aspectRatio: r / (i || 1),
                            borderTop: n?.borderTopWidth,
                            borderRight: n?.borderRightWidth,
                            borderBottom: n?.borderBottomWidth,
                            borderLeft: n?.borderLeftWidth,
                            borderStyle: n?.borderStyle,
                            borderColor: n?.borderColor,
                            transition: a,
                            imageRendering: e.imageRendering,
                            filter: e.filter
                        }),
                        h(!0)
                    }
                    )
                }
                )
            }
        }
        , [t, m, d])
          , b = g?.aspectRatio ?? 1
          , x = uf( () => {
            if (!t || !p || !p.src)
                return;
            let e = f.current?.[p.src];
            if (e)
                return e;
            let n = nf(b, t.maxWidth, lf(t), cf(t))
              , r = rf(p, {
                width: n,
                height: n * b
            });
            return f.current = {
                [p.src]: r
            },
            r
        }
        )
          , ee = E(async e => {
            i?.(e),
            !(m || !t || !p) && (await x(),
            v())
        }
        , [i, v, m, p, t, x])
          , O = E(e => {
            e?.stopPropagation(),
            c( () => {
                h(!1)
            }
            )
        }
        , []);
        tf(m, O),
        D( () => {
            if (!t)
                return;
            let e;
            function n() {
                e = setTimeout( () => {
                    x()
                }
                , 50)
            }
            function r() {
                clearTimeout(e)
            }
            let i = d.current;
            return i?.addEventListener(`mouseenter`, n),
            i?.addEventListener(`mouseleave`, r),
            i?.addEventListener(`pointerdown`, x),
            () => {
                r(),
                i?.removeEventListener(`mouseenter`, n),
                i?.removeEventListener(`mouseleave`, r),
                i?.removeEventListener(`pointerdown`, x)
            }
        }
        , [x, d, t]);
        let k = l()
          , ae = g?.transition ?? a.transition ?? s.transition
          , oe = g?.borderRadius
          , ce = g?.imageRendering
          , le = g?.filter
          , ue = g?.borderTop
          , de = g?.borderRight
          , fe = g?.borderBottom
          , pe = g?.borderLeft
          , A = g?.borderStyle
          , me = g?.borderColor
          , he = !!(ue || de || fe || pe || A || me)
          , ge = he ? {
            "--border-top-width": ue,
            "--border-right-width": de,
            "--border-bottom-width": fe,
            "--border-left-width": pe,
            "--border-style": A,
            "--border-color": me
        } : void 0
          , j = {
            [qy]: a.id
        }
          , M = sf(t?.paddingTop, t?.padding)
          , _e = sf(t?.paddingBottom, t?.padding)
          , N = sf(t?.paddingLeft, t?.padding)
          , ve = sf(t?.paddingRight, t?.padding)
          , ye = g?.borderRadius ? {
            ...a.style,
            borderRadius: g.borderRadius
        } : a.style
          , be = m ? a.layoutDependency ? `${a.layoutDependency}-open` : `open` : a.layoutDependency;
        return te(y, {
            children: [S(e, {
                ...a,
                style: ye,
                onClick: ee,
                layoutId: a.layoutId ?? (t ? k : void 0),
                ref: d,
                layoutDependency: be,
                transition: ae
            }), S(ie, {
                children: m && t && p && S(ne, {
                    children: n(te(y, {
                        children: [S(ke.div, {
                            ...j,
                            className: r,
                            onClick: O,
                            style: {
                                position: `fixed`,
                                inset: 0,
                                zIndex: t.zIndex,
                                backgroundColor: t.backdrop ?? `transparent`
                            },
                            transition: ae,
                            initial: sC,
                            animate: cC,
                            exit: sC,
                            onTransitionEnd: () => {
                                c( () => {
                                    _(void 0)
                                }
                                )
                            }
                        }), S(`div`, {
                            ...j,
                            className: r,
                            style: {
                                alignItems: `center`,
                                display: `flex`,
                                inset: `${M}px ${ve}px ${_e}px ${N}px`,
                                justifyContent: `center`,
                                pointerEvents: `none`,
                                position: `fixed`,
                                zIndex: t.zIndex
                            },
                            children: S(`div`, {
                                style: {
                                    alignItems: `center`,
                                    aspectRatio: b,
                                    display: `flex`,
                                    justifyContent: `center`,
                                    maxHeight: `100%`,
                                    position: `relative`,
                                    width: `100%`,
                                    maxWidth: t.maxWidth
                                },
                                children: S(ke.div, {
                                    layoutId: a.layoutId ?? k,
                                    transition: ae,
                                    onClick: v,
                                    className: `framer-lightbox-container`,
                                    "data-border": he,
                                    style: {
                                        aspectRatio: b,
                                        borderRadius: oe,
                                        bottom: 0,
                                        position: `absolute`,
                                        top: 0,
                                        userSelect: `none`,
                                        imageRendering: ce,
                                        filter: le,
                                        ...ge
                                    },
                                    children: S(Ua, {
                                        image: p,
                                        alt: p.alt,
                                        draggable: a.draggable
                                    })
                                })
                            })
                        })]
                    }), af())
                }, `backdrop`)
            })]
        })
    })
}
function hf(e, t) {
    return dC && !t ? Document.parseHTMLUnsafe(e) : (uC ??= new DOMParser,
    uC.parseFromString(e, t ?? `text/html`))
}
function gf(e) {
    return e.replaceAll(`&`, `&amp;`).replaceAll(`<`, `&lt;`).replaceAll(`>`, `&gt;`).replaceAll(`"`, `&quot;`).replaceAll(`'`, `&#39;`)
}
function _f(e, t, n, r) {
    return e.replace(fC, (e, i, a, o, s, c, l) => {
        if (a.toLowerCase() !== `a`)
            return e;
        let u = s || c
          , d = wc(u.replace(/&amp;/gu, `&`));
        if (!d || !d.target)
            return e;
        let f = t(d.target);
        if (!nd(f) || !nd(n))
            return e;
        let p = f.path
          , m = n.path;
        if (!p || !m)
            return e;
        let h = ` data-framer-page-link-target="${d.target}"`
          , g = lt(f, d.element ?? void 0);
        g && (h += ` data-framer-page-link-element="${d.element}"`);
        let _ = Ec(u);
        if (!_ || F(_))
            return e;
        Vc(n, _, r) && (h += ` data-framer-page-link-current`);
        let v = p
          , y = Object.assign({}, r, d.collectionItem?.pathVariables);
        if (Object.keys(y).length > 0 && (v = v.replace(yb, (e, t) => `` + y[t])),
        d.collectionItem?.pathVariables) {
            let e = new URLSearchParams(d.collectionItem.pathVariables);
            h += ` data-framer-page-link-path-variables="${e}"`
        }
        return v = rn(m, v),
        i + o + `"${gf(v + (g ? `#${g}` : ``))}"` + h + l
    }
    )
}
function vf(e, t) {
    return e.length === t.length && e.every( (e, n) => e === t[n])
}
function yf(e) {
    switch (e) {
    case `top`:
        return `flex-start`;
    case `center`:
        return `center`;
    case `bottom`:
        return `flex-end`
    }
}
function bf(e, t, n) {
    let r = C([]);
    vf(r.current, e) || (r.current = e,
    iC.loadFonts(e).then( ({newlyLoadedFontCount: e}) => {
        !t || !n.current || K.current() !== K.canvas || e > 0 && so(n.current)
    }
    ))
}
function xf() {
    return {
        current: null
    }
}
async function Sf(e, t) {
    let n = e.current;
    if (n)
        return n;
    let r, i = new Promise( (e, n) => {
        r = e,
        t.signal.addEventListener(`abort`, () => n())
    }
    );
    return Object.defineProperty(e, `current`, {
        get() {
            return n
        },
        set(e) {
            if (n = e,
            e === null) {
                t.abort();
                return
            }
            r(e)
        },
        configurable: !0
    }),
    i
}
function Cf(e) {
    return e in gC
}
function wf(e, t) {
    let n = {};
    for (let r in e) {
        if (!Cf(r))
            continue;
        let i = e[r]
          , a = gC[r];
        if (gt(i) || gt(a) || t && r !== `opacity`)
            continue;
        n[r] = [i, a]
    }
    return n
}
function Tf(e, t=`character`, n, r, i) {
    if (r) {
        let t = xf();
        return n.add(t),
        S(`span`, {
            ref: t,
            style: i,
            children: e
        })
    }
    switch (t) {
    case `character`:
    case `line`:
        {
            let t = e.split(` `)
              , r = t.length - 1;
            return t.map( (e, t) => {
                let a = t === r
                  , o = e.length <= 12;
                return te(ne, {
                    children: [S(`span`, {
                        style: {
                            whiteSpace: o ? `nowrap` : `unset`
                        },
                        children: e.match(_C)?.map( (e, t) => {
                            let r = xf();
                            return n.add(r),
                            S(`span`, {
                                ref: r,
                                style: i,
                                children: e
                            }, e + t)
                        }
                        )
                    }), a ? null : ` `]
                }, e + t + a)
            }
            )
        }
    case `word`:
        {
            let t = e.split(` `)
              , r = t.length - 1;
            return t.map( (e, t) => {
                let a = t === r
                  , o = xf();
                return n.add(o),
                te(ne, {
                    children: [S(`span`, {
                        ref: o,
                        style: i,
                        children: e
                    }), a ? null : ` `]
                }, e + t + a)
            }
            )
        }
    case `element`:
    default:
        return e
    }
}
function Ef(e) {
    let t = e.type;
    switch (t) {
    case `appear`:
        return e.tokenization ?? `character`;
    default:
        R(t)
    }
}
function Df(e) {
    let t = [];
    return pt(e.x) && t.push(`translateX(${e.x}px)`),
    pt(e.y) && t.push(`translateY(${e.y}px)`),
    pt(e.scale) && t.push(`scale(${e.scale})`),
    pt(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    pt(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    pt(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    pt(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    pt(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
}
function Of(e, t, n, r) {
    if (!n || !n.effect)
        return;
    let i = n.type;
    switch (i) {
    case `appear`:
        switch (n.tokenization) {
        case `element`:
            return !e || !t ? void 0 : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Df(n.effect)
            };
        case `line`:
        case `word`:
        case `character`:
        default:
            return !e || !t ? {
                display: `inline-block`
            } : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Df(n.effect)
            }
        }
    default:
        R(i)
    }
}
function kf(e, t, n) {
    let r = xi( () => new Set)
      , i = ua()
      , a = n || !i
      , o = ze()
      , s = C({
        hasMounted: !1,
        hasAnimatedOnce: !1,
        isAnimating: !1,
        effect: e
    });
    s.current.effect = e;
    let c = e?.trigger ?? `onMount`
      , l = e?.target
      , u = e?.threshold;
    D( () => {
        if (!a || n)
            return;
        s.current.hasMounted = !0;
        function e() {
            let {effect: e} = s.current;
            if (!a || !e || e?.repeat !== !0 && s.current.hasAnimatedOnce || e?.type === `appear` && s.current.isAnimating)
                return;
            Object.assign(s.current, {
                hasAnimatedOnce: !0,
                isAnimating: !0
            });
            let t = e.type;
            switch (t) {
            case `appear`:
                {
                    let {transition: t, startDelay: n, repeat: i, tokenization: a} = e
                      , c = {
                        current: void 0
                    };
                    return jf(a, e.effect, r, t, n, i, o, () => {
                        Object.assign(s.current, {
                            isAnimating: !1
                        })
                    }
                    , c),
                    () => c.current?.call(c)
                }
            default:
                R(t)
            }
        }
        switch (c) {
        case `onMount`:
            e();
            return;
        case `onInView`:
            {
                let n = t?.current;
                return n ? P(n, e, {
                    amount: u ?? 0
                }) : void 0
            }
        case `onScrollTarget`:
            {
                let t = l?.ref.current;
                return t ? P(t, e, {
                    amount: u ?? 0,
                    root: document,
                    margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0
                }) : void 0
            }
        default:
            R(c)
        }
    }
    , [a, r, n, t, l, u, c]);
    let d = !!e
      , f = e ? Ef(e) : void 0;
    return T( () => ({
        getTokenizer: () => {
            if (r.clear(),
            !d)
                return;
            let {hasMounted: e, hasAnimatedOnce: t, effect: i} = s.current
              , c = Of(a, n || Af(e, t, i), s.current.effect, o);
            return {
                text: e => Tf(e, f, r, o, c),
                props: e => {
                    if (i?.tokenization !== `element`)
                        return;
                    let t = xf();
                    return r.add(t),
                    {
                        ref: t,
                        style: {
                            ...e,
                            ...c
                        }
                    }
                }
            }
        }
        ,
        play: () => {
            let {effect: e} = s.current;
            if (!e)
                return;
            let t = e.type;
            switch (t) {
            case `appear`:
                {
                    let {transition: t, startDelay: n} = e;
                    jf(f, e.effect, r, t, n, !1, o);
                    break
                }
            default:
                R(t)
            }
        }
    }), [a, d, r, n, f])
}
function Af(e, t, n) {
    return !(e && n?.trigger === `onMount` || t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
}
async function jf(e=`character`, t, n, r, i=0, a=!1, o, s, c) {
    let l = wf(t, o)
      , u = new AbortController;
    switch (c && (c.current = () => u.abort()),
    e) {
    case `character`:
    case `element`:
    case `word`:
        {
            let e = await Mf(n, u);
            if (e === null || (xe(e, l, {
                ...r,
                restDelta: .001,
                delay: Ne(r?.delay ?? 0, {
                    startDelay: i
                })
            }).then( () => s?.()),
            !a || !c))
                return;
            c.current = () => {
                let n = o ? {
                    opacity: t.opacity
                } : t;
                xe(e, n, {
                    ...r,
                    restDelta: .001,
                    delay: Ne(r?.delay ?? 0, {
                        startDelay: i
                    })
                })
            }
            ;
            return
        }
    case `line`:
        {
            try {
                for (let e of n)
                    await Sf(e, u)
            } catch {
                return
            }
            let e;
            if (Ce.read( () => {
                e = Nf(n),
                e.length !== 0 && Ce.update( () => {
                    let t = e.map( (e, t) => xe(e, l, {
                        ...r,
                        restDelta: .001,
                        delay: i + t * (r?.delay ?? 0)
                    }));
                    Promise.all(t).then( () => s?.())
                }
                )
            }
            ),
            !a || !c)
                return;
            c.current = () => {
                if (e.length === 0)
                    return;
                let n = o ? {
                    opacity: t.opacity
                } : t;
                e.forEach( (e, t) => {
                    xe(e, n, {
                        ...r,
                        restDelta: .001,
                        delay: i + t * (r?.delay ?? 0)
                    })
                }
                )
            }
            ;
            return
        }
    default:
        R(e)
    }
}
async function Mf(e, t) {
    if (e.size === 0)
        return null;
    let n = [];
    for (let r of e)
        try {
            let e = await Sf(r, t);
            e && n.push(e)
        } catch {
            return null
        }
    return n
}
function Nf(e) {
    let t = []
      , n = []
      , r = null;
    for (let i of e) {
        if (!i.current)
            continue;
        let e = i.current.offsetTop
          , a = i.current.offsetHeight;
        !a || r === null || e === r ? n.push(i.current) : (t.push(n),
        n = [i.current]),
        a && (r = e)
    }
    return t.push(n),
    t
}
function Pf(e) {
    return e.type === ne
}
function Ff(e) {
    return e.type === `br`
}
function If(e, t, n, r, a={}, o, s=Pf(e) ? -1 : 0) {
    let c = v.toArray(e.props.children);
    gt(n) || (c = c.slice(0, 1));
    let l = !0;
    c = c.map(e => {
        if ((!i(e) || !Ff(e)) && (l = !1),
        i(e))
            return If(e, t, n, r, a, o, s + 1);
        let c = gt(n) ? e : n;
        return F(c) && o ? o.text(c) : c
    }
    );
    let {"data-preset-tag": u, ...d} = e.props;
    if (F(e.type) || De(e.type)) {
        let n = Pe(e.type) || e.type
          , i = u || n
          , f = F(i) ? t?.[i] : void 0;
        d.className = Fs(`framer-text`, d.className, f),
        o && s === 0 && !l && Object.assign(d, o.props(d.style));
        let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`
          , m = t?.anchor;
        if (p && m) {
            let e = Lf(c, a);
            d.id = e;
            let t = Fs(`framer-text`, m)
              , n = S(`a`, {
                href: `#${e}`,
                className: t,
                children: c
            });
            d.style = {
                ...d.style ?? {},
                scrollMarginTop: r
            },
            c = [n]
        }
    }
    return ee(e, d, ...c)
}
function Lf(e, t) {
    let n = e.map(Rf).join(``)
      , r = Kn(n)
      , i = t[r] ?? 0;
    return i > 0 && (r += `-${i}`),
    t[r] = i + 1,
    r
}
function Rf(e) {
    return F(e) || pt(e) ? e.toString() : i(e) ? Rf(e.props.children) : Array.isArray(e) ? e.map(Rf).join(``) : ``
}
function zf(e) {
    try {
        let t = hf(e).getElementsByTagName(`svg`)[0];
        if (!t)
            throw Error(`no svg element found`);
        return t
    } catch {
        return
    }
}
function Bf(e, t) {
    let n = Vf(t);
    Hf(e, n)
}
function Vf(e) {
    return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``)
}
function Hf(e, t) {
    Uf(e, t),
    Array.from(e.children).forEach(e => {
        Hf(e, t)
    }
    )
}
function Uf(e, t) {
    e.getAttributeNames().forEach(n => {
        let r = e.getAttribute(n);
        if (!r)
            return;
        if (n === `id` && e.setAttribute(n, `${t}_${r}`),
        n === `href` || n === `xlink:href`) {
            let[i,a] = r.split(`#`);
            if (i)
                return;
            e.setAttribute(n, `#${t}_${a}`);
            return
        }
        let i = `url(#`;
        if (r.includes(i)) {
            let a = r.replace(i, `${i}${t}_`);
            e.setAttribute(n, a)
        }
    }
    )
}
function Wf(e) {
    if (!e)
        return;
    let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
    if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
        return Math.round(parseFloat(t[1]) * (AC[t[2]] || 1))
}
function Gf(e) {
    let t = Wf(e.getAttribute(`width`))
      , n = Wf(e.getAttribute(`height`));
    if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
        return {
            width: t,
            height: n
        }
}
function Kf(e) {
    return e > jC ? `lazy` : void 0
}
function qf(e, t, n) {
    let r = Xf(t);
    !n?.supportsExplicitInterCodegen && !r.some(e => e.explicitInter === !1) && r.push({
        explicitInter: !1,
        fonts: []
    }),
    Object.assign(e, {
        fonts: r
    })
}
function Jf(e) {
    return e ? e.fonts ?? sr() : sr()
}
function Yf(e) {
    return e.length === 0 ? [{
        explicitInter: !1,
        fonts: []
    }] : Xf(e)
}
function Xf(e) {
    let t = {
        explicitInter: !1,
        fonts: []
    }
      , n = [];
    for (let r of e)
        Zf(r) ? n.push({
            explicitInter: r.explicitInter,
            fonts: r.fonts.map(Qf)
        }) : t.fonts.push(Qf(r));
    return t.fonts.length > 0 && n.push(t),
    n
}
function Zf(e) {
    return MC in e
}
function Qf(e) {
    let t = $f(e) || ep(e) ? e : tp(e);
    return ep(t) ? t : np(t)
}
function $f(e) {
    return `source`in e
}
function ep(e) {
    return `cssFamilyName`in e
}
function tp(e) {
    let t;
    return t = e.url.startsWith(`https://fonts.gstatic.com/s/`) ? `google` : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`) ? `fontshare` : `custom`,
    {
        ...e,
        source: t
    }
}
function np(e) {
    let {family: t, ...n} = e
      , r = e.variationAxes && e.source !== `custom` ? `${t} ${kS}` : t;
    return {
        ...n,
        uiFamilyName: t,
        cssFamilyName: r
    }
}
function rp(e, t) {
    let n = `${e}-start`;
    performance.mark(n),
    t();
    let r = `${e}-end`;
    performance.mark(r),
    performance.measure(e, n, r)
}
var ip, ap, op, sp, cp, lp, up, dp, fp, pp, mp, hp, gp, _p, vp, yp, bp, W, xp, Sp, Cp, wp, Tp, Ep, Dp, Op, kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp, Bp, Vp, Hp, Up, Wp, Gp, Kp, qp, Jp, Yp, Xp, Zp, Qp, $p, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m, vm, ym, bm, xm, Sm, Cm, wm, Tm, Em, Dm, Om, km, Am, jm, Mm, Nm, Pm, Fm, Im, Lm, Rm, zm, Bm, Vm, Hm, Um, Wm, Gm, Km, qm, Jm, Ym, Xm, Zm, Qm, $m, eh, th, nh, rh, ih, ah, oh, sh, ch, lh, uh, dh, fh, ph, mh, hh, gh, _h, vh, yh, bh, xh, Sh, G, Ch, wh, Th, Eh, Dh, Oh, kh, Ah, jh, Mh, K, Nh, Ph, Fh, Ih, Lh, Rh, zh, Bh, q, Vh, Hh, Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, Qh, J, $h, eg, tg, ng, rg, ig, ag, og, sg, cg, lg, ug, dg, fg, pg, mg, hg, gg, _g, vg, yg, bg, xg, Sg, Cg, wg, Tg, Eg, Dg, Og, kg, Ag, jg, Mg, Ng, Pg, Fg, Ig, Lg, Rg, zg, Bg, Vg, Hg, Ug, Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, Y, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_, m_, h_, g_, __, v_, y_, b_, x_, S_, C_, w_, T_, E_, D_, O_, k_, A_, j_, M_, N_, P_, F_, I_, L_, R_, z_, B_, V_, H_, U_, W_, G_, K_, q_, J_, Y_, X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv, dv, fv, pv, mv, hv, gv, _v, vv, yv, bv, xv, Sv, Cv, wv, Tv, Ev, Dv, Ov, kv, Av, jv, Mv, Nv, Pv, Fv, Iv, Lv, Rv, zv, Bv, Vv, Hv, Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv, Zv, Qv, $v, ey, ty, ny, ry, iy, ay, oy, sy, cy, ly, uy, dy, fy, py, my, hy, gy, _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky, Ay, jy, My, Ny, Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb, gb, _b, vb, yb, bb, xb, Sb, Cb, wb, Tb, Eb, Db, Ob, kb, Ab, jb, Mb, Nb, Pb, Fb, Ib, Lb, Rb, zb, Bb, Vb, Hb, Ub, Wb, Gb, Kb, X, qb, Jb, Yb, Xb, Zb, Qb, Z, $b, ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, Q, ux, dx, fx, px, mx, hx, gx, _x, vx, $, yx, bx, xx, Sx, Cx, wx, Tx, Ex, Dx, Ox, kx, Ax, jx, Mx, Nx, Px, Fx, Ix, Lx, Rx, zx, Bx, Vx, Hx, Ux, Wx, Gx, Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS, tS, nS, rS, iS, aS, oS, sS, cS, lS, uS, dS, fS, pS, mS, hS, gS, _S, vS, yS, bS, xS, SS, CS, wS, TS, ES, DS, OS, kS, AS, jS, MS, NS, PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS, JS, YS, XS, ZS, QS, $S, eC, tC, nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC, hC, gC, _C, vC, yC, bC, xC, SC, CC, wC, TC, EC, DC, OC, kC, AC, jC, MC, NC = e(( () => {
    _(//! Credit to Astro | MIT License
    /**
* @license Emotion v11.0.0
* MIT License
*
* Copyright (c) Emotion team and other contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
    /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
    ),
    we(),
    Te(),
    h(),
    m(),
    g(),
    ip = pe({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(exports) {
            Object.defineProperty(exports, `__esModule`, {
                value: !0
            }),
            exports.Hsluv = void 0;
            var t = class e {
                constructor() {
                    this.hex = `#000000`,
                    this.rgb_r = 0,
                    this.rgb_g = 0,
                    this.rgb_b = 0,
                    this.xyz_x = 0,
                    this.xyz_y = 0,
                    this.xyz_z = 0,
                    this.luv_l = 0,
                    this.luv_u = 0,
                    this.luv_v = 0,
                    this.lch_l = 0,
                    this.lch_c = 0,
                    this.lch_h = 0,
                    this.hsluv_h = 0,
                    this.hsluv_s = 0,
                    this.hsluv_l = 0,
                    this.hpluv_h = 0,
                    this.hpluv_p = 0,
                    this.hpluv_l = 0,
                    this.r0s = 0,
                    this.r0i = 0,
                    this.r1s = 0,
                    this.r1i = 0,
                    this.g0s = 0,
                    this.g0i = 0,
                    this.g1s = 0,
                    this.g1i = 0,
                    this.b0s = 0,
                    this.b0i = 0,
                    this.b1s = 0,
                    this.b1i = 0
                }
                static fromLinear(e) {
                    return e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055
                }
                static toLinear(e) {
                    return e > .04045 ? ((e + .055) / 1.055) ** 2.4 : e / 12.92
                }
                static yToL(t) {
                    return t <= e.epsilon ? t / e.refY * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16
                }
                static lToY(t) {
                    return t <= 8 ? e.refY * t / e.kappa : e.refY * ((t + 16) / 116) ** 3
                }
                static rgbChannelToHex(t) {
                    let n = Math.round(t * 255)
                      , r = n % 16
                      , i = (n - r) / 16 | 0;
                    return e.hexChars.charAt(i) + e.hexChars.charAt(r)
                }
                static hexToRgbChannel(t, n) {
                    let r = e.hexChars.indexOf(t.charAt(n))
                      , i = e.hexChars.indexOf(t.charAt(n + 1));
                    return (r * 16 + i) / 255
                }
                static distanceFromOriginAngle(e, t, n) {
                    let r = t / (Math.sin(n) - e * Math.cos(n));
                    return r < 0 ? 1 / 0 : r
                }
                static distanceFromOrigin(e, t) {
                    return Math.abs(t) / Math.sqrt(e ** 2 + 1)
                }
                static min6(e, t, n, r, i, a) {
                    return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))))
                }
                rgbToHex() {
                    this.hex = `#`,
                    this.hex += e.rgbChannelToHex(this.rgb_r),
                    this.hex += e.rgbChannelToHex(this.rgb_g),
                    this.hex += e.rgbChannelToHex(this.rgb_b)
                }
                hexToRgb() {
                    this.hex = this.hex.toLowerCase(),
                    this.rgb_r = e.hexToRgbChannel(this.hex, 1),
                    this.rgb_g = e.hexToRgbChannel(this.hex, 3),
                    this.rgb_b = e.hexToRgbChannel(this.hex, 5)
                }
                xyzToRgb() {
                    this.rgb_r = e.fromLinear(e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z),
                    this.rgb_g = e.fromLinear(e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z),
                    this.rgb_b = e.fromLinear(e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z)
                }
                rgbToXyz() {
                    let t = e.toLinear(this.rgb_r)
                      , n = e.toLinear(this.rgb_g)
                      , r = e.toLinear(this.rgb_b);
                    this.xyz_x = .41239079926595 * t + .35758433938387 * n + .18048078840183 * r,
                    this.xyz_y = .21263900587151 * t + .71516867876775 * n + .072192315360733 * r,
                    this.xyz_z = .019330818715591 * t + .11919477979462 * n + .95053215224966 * r
                }
                xyzToLuv() {
                    let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z
                      , n = 4 * this.xyz_x
                      , r = 9 * this.xyz_y;
                    t === 0 ? (n = NaN,
                    r = NaN) : (n /= t,
                    r /= t),
                    this.luv_l = e.yToL(this.xyz_y),
                    this.luv_l === 0 ? (this.luv_u = 0,
                    this.luv_v = 0) : (this.luv_u = 13 * this.luv_l * (n - e.refU),
                    this.luv_v = 13 * this.luv_l * (r - e.refV))
                }
                luvToXyz() {
                    if (this.luv_l === 0) {
                        this.xyz_x = 0,
                        this.xyz_y = 0,
                        this.xyz_z = 0;
                        return
                    }
                    let t = this.luv_u / (13 * this.luv_l) + e.refU
                      , n = this.luv_v / (13 * this.luv_l) + e.refV;
                    this.xyz_y = e.lToY(this.luv_l),
                    this.xyz_x = 0 - 9 * this.xyz_y * t / ((t - 4) * n - t * n),
                    this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)
                }
                luvToLch() {
                    this.lch_l = this.luv_l,
                    this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v),
                    this.lch_c < 1e-8 ? this.lch_h = 0 : (this.lch_h = Math.atan2(this.luv_v, this.luv_u) * 180 / Math.PI,
                    this.lch_h < 0 && (this.lch_h = 360 + this.lch_h))
                }
                lchToLuv() {
                    let e = this.lch_h / 180 * Math.PI;
                    this.luv_l = this.lch_l,
                    this.luv_u = Math.cos(e) * this.lch_c,
                    this.luv_v = Math.sin(e) * this.lch_c
                }
                calculateBoundingLines(t) {
                    let n = (t + 16) ** 3 / 1560896
                      , r = n > e.epsilon ? n : t / e.kappa
                      , i = r * (284517 * e.m_r0 - 94839 * e.m_r2)
                      , a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0)
                      , o = r * (632260 * e.m_r2 - 126452 * e.m_r1)
                      , s = r * (284517 * e.m_g0 - 94839 * e.m_g2)
                      , c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0)
                      , l = r * (632260 * e.m_g2 - 126452 * e.m_g1)
                      , u = r * (284517 * e.m_b0 - 94839 * e.m_b2)
                      , d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0)
                      , f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
                    this.r0s = i / o,
                    this.r0i = a * t / o,
                    this.r1s = i / (o + 126452),
                    this.r1i = (a - 769860) * t / (o + 126452),
                    this.g0s = s / l,
                    this.g0i = c * t / l,
                    this.g1s = s / (l + 126452),
                    this.g1i = (c - 769860) * t / (l + 126452),
                    this.b0s = u / f,
                    this.b0i = d * t / f,
                    this.b1s = u / (f + 126452),
                    this.b1i = (d - 769860) * t / (f + 126452)
                }
                calcMaxChromaHpluv() {
                    let t = e.distanceFromOrigin(this.r0s, this.r0i)
                      , n = e.distanceFromOrigin(this.r1s, this.r1i)
                      , r = e.distanceFromOrigin(this.g0s, this.g0i)
                      , i = e.distanceFromOrigin(this.g1s, this.g1i)
                      , a = e.distanceFromOrigin(this.b0s, this.b0i)
                      , o = e.distanceFromOrigin(this.b1s, this.b1i);
                    return e.min6(t, n, r, i, a, o)
                }
                calcMaxChromaHsluv(t) {
                    let n = t / 360 * Math.PI * 2
                      , r = e.distanceFromOriginAngle(this.r0s, this.r0i, n)
                      , i = e.distanceFromOriginAngle(this.r1s, this.r1i, n)
                      , a = e.distanceFromOriginAngle(this.g0s, this.g0i, n)
                      , o = e.distanceFromOriginAngle(this.g1s, this.g1i, n)
                      , s = e.distanceFromOriginAngle(this.b0s, this.b0i, n)
                      , c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
                    return e.min6(r, i, a, o, s, c)
                }
                hsluvToLch() {
                    this.hsluv_l > 99.9999999 ? (this.lch_l = 100,
                    this.lch_c = 0) : this.hsluv_l < 1e-8 ? (this.lch_l = 0,
                    this.lch_c = 0) : (this.lch_l = this.hsluv_l,
                    this.calculateBoundingLines(this.hsluv_l),
                    this.lch_c = this.calcMaxChromaHsluv(this.hsluv_h) / 100 * this.hsluv_s),
                    this.lch_h = this.hsluv_h
                }
                lchToHsluv() {
                    if (this.lch_l > 99.9999999)
                        this.hsluv_s = 0,
                        this.hsluv_l = 100;
                    else if (this.lch_l < 1e-8)
                        this.hsluv_s = 0,
                        this.hsluv_l = 0;
                    else {
                        this.calculateBoundingLines(this.lch_l);
                        let e = this.calcMaxChromaHsluv(this.lch_h);
                        this.hsluv_s = this.lch_c / e * 100,
                        this.hsluv_l = this.lch_l
                    }
                    this.hsluv_h = this.lch_h
                }
                hpluvToLch() {
                    this.hpluv_l > 99.9999999 ? (this.lch_l = 100,
                    this.lch_c = 0) : this.hpluv_l < 1e-8 ? (this.lch_l = 0,
                    this.lch_c = 0) : (this.lch_l = this.hpluv_l,
                    this.calculateBoundingLines(this.hpluv_l),
                    this.lch_c = this.calcMaxChromaHpluv() / 100 * this.hpluv_p),
                    this.lch_h = this.hpluv_h
                }
                lchToHpluv() {
                    if (this.lch_l > 99.9999999)
                        this.hpluv_p = 0,
                        this.hpluv_l = 100;
                    else if (this.lch_l < 1e-8)
                        this.hpluv_p = 0,
                        this.hpluv_l = 0;
                    else {
                        this.calculateBoundingLines(this.lch_l);
                        let e = this.calcMaxChromaHpluv();
                        this.hpluv_p = this.lch_c / e * 100,
                        this.hpluv_l = this.lch_l
                    }
                    this.hpluv_h = this.lch_h
                }
                hsluvToRgb() {
                    this.hsluvToLch(),
                    this.lchToLuv(),
                    this.luvToXyz(),
                    this.xyzToRgb()
                }
                hpluvToRgb() {
                    this.hpluvToLch(),
                    this.lchToLuv(),
                    this.luvToXyz(),
                    this.xyzToRgb()
                }
                hsluvToHex() {
                    this.hsluvToRgb(),
                    this.rgbToHex()
                }
                hpluvToHex() {
                    this.hpluvToRgb(),
                    this.rgbToHex()
                }
                rgbToHsluv() {
                    this.rgbToXyz(),
                    this.xyzToLuv(),
                    this.luvToLch(),
                    this.lchToHpluv(),
                    this.lchToHsluv()
                }
                rgbToHpluv() {
                    this.rgbToXyz(),
                    this.xyzToLuv(),
                    this.luvToLch(),
                    this.lchToHpluv(),
                    this.lchToHpluv()
                }
                hexToHsluv() {
                    this.hexToRgb(),
                    this.rgbToHsluv()
                }
                hexToHpluv() {
                    this.hexToRgb(),
                    this.rgbToHpluv()
                }
            }
            ;
            exports.Hsluv = t,
            t.hexChars = `0123456789abcdef`,
            t.refY = 1,
            t.refU = .19783000664283,
            t.refV = .46831999493879,
            t.kappa = 903.2962962,
            t.epsilon = .0088564516,
            t.m_r0 = 3.240969941904521,
            t.m_r1 = -1.537383177570093,
            t.m_r2 = -.498610760293,
            t.m_g0 = -.96924363628087,
            t.m_g1 = 1.87596750150772,
            t.m_g2 = .041555057407175,
            t.m_b0 = .055630079696993,
            t.m_b1 = -.20397695888897,
            t.m_b2 = 1.056971514242878
        }
    }),
    ap = pe({
        "../../../node_modules/eventemitter3/index.js"(exports, t) {
            var n = Object.prototype.hasOwnProperty
              , r = `~`;
            function i() {}
            Object.create && (i.prototype = Object.create(null),
            new i().__proto__ || (r = !1));
            function a(e, t, n) {
                this.fn = e,
                this.context = t,
                this.once = n || !1
            }
            function o(e, t, n, i, o) {
                if (typeof n != `function`)
                    throw TypeError(`The listener must be a function`);
                var s = new a(n,i || e,o)
                  , c = r ? r + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s,
                e._eventsCount++),
                e
            }
            function s(e, t) {
                --e._eventsCount === 0 ? e._events = new i : delete e._events[t]
            }
            function c() {
                this._events = new i,
                this._eventsCount = 0
            }
            c.prototype.eventNames = function() {
                var e = [], t, i;
                if (this._eventsCount === 0)
                    return e;
                for (i in t = this._events)
                    n.call(t, i) && e.push(r ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
            }
            ,
            c.prototype.listeners = function(e) {
                var t = r ? r + e : e
                  , n = this._events[t];
                if (!n)
                    return [];
                if (n.fn)
                    return [n.fn];
                for (var i = 0, a = n.length, o = Array(a); i < a; i++)
                    o[i] = n[i].fn;
                return o
            }
            ,
            c.prototype.listenerCount = function(e) {
                var t = r ? r + e : e
                  , n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }
            ,
            c.prototype.emit = function(e, t, n, i, a, o) {
                var s = r ? r + e : e;
                if (!this._events[s])
                    return !1;
                var c = this._events[s], l = arguments.length, u, d;
                if (c.fn) {
                    switch (c.once && this.removeListener(e, c.fn, void 0, !0),
                    l) {
                    case 1:
                        return c.fn.call(c.context),
                        !0;
                    case 2:
                        return c.fn.call(c.context, t),
                        !0;
                    case 3:
                        return c.fn.call(c.context, t, n),
                        !0;
                    case 4:
                        return c.fn.call(c.context, t, n, i),
                        !0;
                    case 5:
                        return c.fn.call(c.context, t, n, i, a),
                        !0;
                    case 6:
                        return c.fn.call(c.context, t, n, i, a, o),
                        !0
                    }
                    for (d = 1,
                    u = Array(l - 1); d < l; d++)
                        u[d - 1] = arguments[d];
                    c.fn.apply(c.context, u)
                } else {
                    var f = c.length, p;
                    for (d = 0; d < f; d++)
                        switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0),
                        l) {
                        case 1:
                            c[d].fn.call(c[d].context);
                            break;
                        case 2:
                            c[d].fn.call(c[d].context, t);
                            break;
                        case 3:
                            c[d].fn.call(c[d].context, t, n);
                            break;
                        case 4:
                            c[d].fn.call(c[d].context, t, n, i);
                            break;
                        default:
                            if (!u)
                                for (p = 1,
                                u = Array(l - 1); p < l; p++)
                                    u[p - 1] = arguments[p];
                            c[d].fn.apply(c[d].context, u)
                        }
                }
                return !0
            }
            ,
            c.prototype.on = function(e, t, n) {
                return o(this, e, t, n, !1)
            }
            ,
            c.prototype.once = function(e, t, n) {
                return o(this, e, t, n, !0)
            }
            ,
            c.prototype.removeListener = function(e, t, n, i) {
                var a = r ? r + e : e;
                if (!this._events[a])
                    return this;
                if (!t)
                    return s(this, a),
                    this;
                var o = this._events[a];
                if (o.fn)
                    o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
                else {
                    for (var c = 0, l = [], u = o.length; c < u; c++)
                        (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
                    l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a)
                }
                return this
            }
            ,
            c.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = r ? r + e : e,
                this._events[t] && s(this, t)) : (this._events = new i,
                this._eventsCount = 0),
                this
            }
            ,
            c.prototype.off = c.prototype.removeListener,
            c.prototype.addListener = c.prototype.on,
            c.prefixed = r,
            c.EventEmitter = c,
            t !== void 0 && (t.exports = c)
        }
    }),
    op = pe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
            var t = typeof Symbol == `function` && Symbol.for
              , n = t ? Symbol.for(`react.element`) : 60103
              , r = t ? Symbol.for(`react.portal`) : 60106
              , i = t ? Symbol.for(`react.fragment`) : 60107
              , a = t ? Symbol.for(`react.strict_mode`) : 60108
              , o = t ? Symbol.for(`react.profiler`) : 60114
              , s = t ? Symbol.for(`react.provider`) : 60109
              , c = t ? Symbol.for(`react.context`) : 60110
              , l = t ? Symbol.for(`react.async_mode`) : 60111
              , u = t ? Symbol.for(`react.concurrent_mode`) : 60111
              , d = t ? Symbol.for(`react.forward_ref`) : 60112
              , f = t ? Symbol.for(`react.suspense`) : 60113
              , p = t ? Symbol.for(`react.suspense_list`) : 60120
              , m = t ? Symbol.for(`react.memo`) : 60115
              , h = t ? Symbol.for(`react.lazy`) : 60116
              , g = t ? Symbol.for(`react.block`) : 60121
              , _ = t ? Symbol.for(`react.fundamental`) : 60117
              , v = t ? Symbol.for(`react.responder`) : 60118
              , y = t ? Symbol.for(`react.scope`) : 60119;
            function b(e) {
                if (typeof e == `object` && e) {
                    var t = e.$$typeof;
                    switch (t) {
                    case n:
                        switch (e = e.type,
                        e) {
                        case l:
                        case u:
                        case i:
                        case o:
                        case a:
                        case f:
                            return e;
                        default:
                            switch (e &&= e.$$typeof,
                            e) {
                            case c:
                            case d:
                            case h:
                            case m:
                            case s:
                                return e;
                            default:
                                return t
                            }
                        }
                    case r:
                        return t
                    }
                }
            }
            function x(e) {
                return b(e) === u
            }
            exports.AsyncMode = l,
            exports.ConcurrentMode = u,
            exports.ContextConsumer = c,
            exports.ContextProvider = s,
            exports.Element = n,
            exports.ForwardRef = d,
            exports.Fragment = i,
            exports.Lazy = h,
            exports.Memo = m,
            exports.Portal = r,
            exports.Profiler = o,
            exports.StrictMode = a,
            exports.Suspense = f,
            exports.isAsyncMode = function(e) {
                return x(e) || b(e) === l
            }
            ,
            exports.isConcurrentMode = x,
            exports.isContextConsumer = function(e) {
                return b(e) === c
            }
            ,
            exports.isContextProvider = function(e) {
                return b(e) === s
            }
            ,
            exports.isElement = function(e) {
                return typeof e == `object` && !!e && e.$$typeof === n
            }
            ,
            exports.isForwardRef = function(e) {
                return b(e) === d
            }
            ,
            exports.isFragment = function(e) {
                return b(e) === i
            }
            ,
            exports.isLazy = function(e) {
                return b(e) === h
            }
            ,
            exports.isMemo = function(e) {
                return b(e) === m
            }
            ,
            exports.isPortal = function(e) {
                return b(e) === r
            }
            ,
            exports.isProfiler = function(e) {
                return b(e) === o
            }
            ,
            exports.isStrictMode = function(e) {
                return b(e) === a
            }
            ,
            exports.isSuspense = function(e) {
                return b(e) === f
            }
            ,
            exports.isValidElementType = function(e) {
                return typeof e == `string` || typeof e == `function` || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == `object` && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g)
            }
            ,
            exports.typeOf = b
        }
    }),
    sp = pe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, t) {
            t.exports = op()
        }
    }),
    cp = pe({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, t) {
            var n = sp()
              , r = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }
              , i = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            }
              , a = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }
              , o = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            }
              , s = {};
            s[n.ForwardRef] = a,
            s[n.Memo] = o;
            function c(e) {
                return n.isMemo(e) ? o : s[e.$$typeof] || r
            }
            var l = Object.defineProperty
              , u = Object.getOwnPropertyNames
              , d = Object.getOwnPropertySymbols
              , f = Object.getOwnPropertyDescriptor
              , p = Object.getPrototypeOf
              , m = Object.prototype;
            function h(e, t, n) {
                if (typeof t != `string`) {
                    if (m) {
                        var r = p(t);
                        r && r !== m && h(e, r, n)
                    }
                    var a = u(t);
                    d && (a = a.concat(d(t)));
                    for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                        var _ = a[g];
                        if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                            var v = f(t, _);
                            try {
                                l(e, _, v)
                            } catch {}
                        }
                    }
                }
                return e
            }
            t.exports = h
        }
    }),
    lp = pe({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(exports, t) {
            (function() {
                function e(e, t) {
                    document.addEventListener ? e.addEventListener(`scroll`, t, !1) : e.attachEvent(`scroll`, t)
                }
                function n(e) {
                    document.body ? e() : document.addEventListener ? document.addEventListener(`DOMContentLoaded`, function t() {
                        document.removeEventListener(`DOMContentLoaded`, t),
                        e()
                    }) : document.attachEvent(`onreadystatechange`, function t() {
                        (document.readyState == `interactive` || document.readyState == `complete`) && (document.detachEvent(`onreadystatechange`, t),
                        e())
                    })
                }
                function r(e) {
                    this.g = document.createElement(`div`),
                    this.g.setAttribute(`aria-hidden`, `true`),
                    this.g.appendChild(document.createTextNode(e)),
                    this.h = document.createElement(`span`),
                    this.i = document.createElement(`span`),
                    this.m = document.createElement(`span`),
                    this.j = document.createElement(`span`),
                    this.l = -1,
                    this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`,
                    this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`,
                    this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`,
                    this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`,
                    this.h.appendChild(this.m),
                    this.i.appendChild(this.j),
                    this.g.appendChild(this.h),
                    this.g.appendChild(this.i)
                }
                function i(e, t) {
                    e.g.style.cssText = `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` + t + `;`
                }
                function a(e) {
                    var t = e.g.offsetWidth
                      , n = t + 100;
                    return e.j.style.width = n + `px`,
                    e.i.scrollLeft = n,
                    e.h.scrollLeft = e.h.scrollWidth + 100,
                    e.l === t ? !1 : (e.l = t,
                    !0)
                }
                function o(t, n) {
                    function r() {
                        var e = i;
                        a(e) && e.g.parentNode !== null && n(e.l)
                    }
                    var i = t;
                    e(t.h, r),
                    e(t.i, r),
                    a(t)
                }
                function s(e, t, n) {
                    t ||= {},
                    n ||= O,
                    this.family = e,
                    this.style = t.style || `normal`,
                    this.weight = t.weight || `normal`,
                    this.stretch = t.stretch || `normal`,
                    this.context = n
                }
                var c = null
                  , l = null
                  , u = null
                  , d = null;
                function f(e) {
                    return l === null && (p(e) && /Apple/.test(O.navigator.vendor) ? (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(O.navigator.userAgent),
                    l = !!e && 603 > parseInt(e[1], 10)) : l = !1),
                    l
                }
                function p(e) {
                    return d === null && (d = !!e.document.fonts),
                    d
                }
                function m(e, t) {
                    var n = e.style
                      , r = e.weight;
                    if (u === null) {
                        var i = document.createElement(`div`);
                        try {
                            i.style.font = `condensed 100px sans-serif`
                        } catch {}
                        u = i.style.font !== ``
                    }
                    return [n, r, u ? e.stretch : ``, `100px`, t].join(` `)
                }
                s.prototype.load = function(e, t) {
                    var a = this
                      , s = e || `BESbswy`
                      , l = 0
                      , u = t || 3e3
                      , d = new Date().getTime();
                    return new Promise(function(e, t) {
                        if (p(a.context) && !f(a.context)) {
                            var h = new Promise(function(e, t) {
                                function n() {
                                    new Date().getTime() - d >= u ? t(Error(`` + u + `ms timeout exceeded`)) : a.context.document.fonts.load(m(a, `"` + a.family + `"`), s).then(function(t) {
                                        1 <= t.length ? e() : setTimeout(n, 25)
                                    }, t)
                                }
                                n()
                            }
                            )
                              , g = new Promise(function(e, t) {
                                l = setTimeout(function() {
                                    t(Error(`` + u + `ms timeout exceeded`))
                                }, u)
                            }
                            );
                            Promise.race([g, h]).then(function() {
                                clearTimeout(l),
                                e(a)
                            }, t)
                        } else
                            n(function() {
                                function n() {
                                    var t;
                                    (t = _ != -1 && v != -1 || _ != -1 && y != -1 || v != -1 && y != -1) && ((t = _ != v && _ != y && v != y) || (c === null && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(O.navigator.userAgent),
                                    c = !!t && (536 > parseInt(t[1], 10) || parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))),
                                    t = c && (_ == b && v == b && y == b || _ == x && v == x && y == x || _ == S && v == S && y == S)),
                                    t = !t),
                                    t && (C.parentNode !== null && C.parentNode.removeChild(C),
                                    clearTimeout(l),
                                    e(a))
                                }
                                function f() {
                                    if (new Date().getTime() - d >= u)
                                        C.parentNode !== null && C.parentNode.removeChild(C),
                                        t(Error(`` + u + `ms timeout exceeded`));
                                    else {
                                        var e = a.context.document.hidden;
                                        (!0 === e || e === void 0) && (_ = p.g.offsetWidth,
                                        v = h.g.offsetWidth,
                                        y = g.g.offsetWidth,
                                        n()),
                                        l = setTimeout(f, 50)
                                    }
                                }
                                var p = new r(s)
                                  , h = new r(s)
                                  , g = new r(s)
                                  , _ = -1
                                  , v = -1
                                  , y = -1
                                  , b = -1
                                  , x = -1
                                  , S = -1
                                  , C = document.createElement(`div`);
                                C.dir = `ltr`,
                                i(p, m(a, `sans-serif`)),
                                i(h, m(a, `serif`)),
                                i(g, m(a, `monospace`)),
                                C.appendChild(p.g),
                                C.appendChild(h.g),
                                C.appendChild(g.g),
                                a.context.document.body.appendChild(C),
                                b = p.g.offsetWidth,
                                x = h.g.offsetWidth,
                                S = g.g.offsetWidth,
                                f(),
                                o(p, function(e) {
                                    _ = e,
                                    n()
                                }),
                                i(p, m(a, `"` + a.family + `",sans-serif`)),
                                o(h, function(e) {
                                    v = e,
                                    n()
                                }),
                                i(h, m(a, `"` + a.family + `",serif`)),
                                o(g, function(e) {
                                    y = e,
                                    n()
                                }),
                                i(g, m(a, `"` + a.family + `",monospace`))
                            })
                    }
                    )
                }
                ,
                typeof t == `object` ? t.exports = s : (O.FontFaceObserver = s,
                O.FontFaceObserver.prototype.load = s.prototype.load)
            }
            )()
        }
    }),
    up = `preload`,
    dp = Object.keys,
    fp = `equals`,
    pp = ( () => d.createContext({}))(),
    mp = ( () => d.createContext({}))(),
    hp = [],
    gp = () => {}
    ,
    _p = O !== void 0,
    vp = ( () => _p && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(b.userAgent))(),
    yp = _p && typeof O.requestIdleCallback == `function`,
    bp = ( () => yp ? O.requestIdleCallback : setTimeout)(),
    W = _p ? O : {
        addEventListener: () => {}
        ,
        removeEventListener: () => {}
        ,
        dispatchEvent: () => !1,
        ResizeObserver: void 0,
        onpointerdown: !1,
        onpointermove: !1,
        onpointerup: !1,
        ontouchstart: !1,
        ontouchmove: !1,
        ontouchend: !1,
        onmousedown: !1,
        onmousemove: !1,
        onmouseup: !1,
        devicePixelRatio: 1,
        scrollX: 0,
        scrollY: 0,
        location: {
            hash: ``,
            hostname: ``,
            href: ``,
            origin: ``,
            pathname: ``,
            search: ``
        },
        document: {
            baseURI: ``,
            cookie: ``,
            referrer: null
        },
        setTimeout: () => 0,
        clearTimeout: () => {}
        ,
        setInterval: () => 0,
        clearInterval: () => {}
        ,
        requestAnimationFrame: () => 0,
        cancelAnimationFrame: () => {}
        ,
        requestIdleCallback: () => 0,
        getSelection: () => null,
        matchMedia: e => ({
            matches: !1,
            media: e,
            onchange: () => {}
            ,
            addEventListener: () => {}
            ,
            removeEventListener: () => {}
            ,
            addListener: () => {}
            ,
            removeListener: () => {}
            ,
            dispatchEvent: () => !1
        }),
        innerHeight: 0,
        innerWidth: 0,
        SVGSVGElement: {},
        scheduler: void 0,
        open: function(e, t, n) {},
        __framer_events: []
    },
    xp = ( () => W.scheduler && `yield`in W.scheduler)(),
    Sp = ( () => W.scheduler && `postTask`in W.scheduler)(),
    Cp = new Set,
    wp = !vp,
    Tp = `default`,
    Ep = {
        Pending: `pending`,
        Fulfilled: `fulfilled`,
        Rejected: `rejected`
    },
    Dp = class e {
        constructor(e) {
            this.resolver = e,
            N(this, `promiseState`, Ep.Pending),
            N(this, `preloadPromise`),
            N(this, `value`),
            N(this, `reason`),
            N(this, `read`, () => {
                if (this.promiseState === Ep.Fulfilled)
                    return this.value;
                throw this.promiseState === Ep.Rejected ? this.reason : Error(`Need to call preload() before read()`)
            }
            )
        }
        static is(t) {
            return t instanceof e
        }
        get status() {
            return this.preload(),
            this.state
        }
        get state() {
            return this.promiseState
        }
        then(e, t) {
            return this.promiseState === Ep.Fulfilled ? Promise.resolve(this.value).then(e, t) : this.promiseState === Ep.Rejected ? Promise.reject(this.reason).then(e, t) : this.readAsync().then(e, t)
        }
        preload() {
            if (this.promiseState !== Ep.Pending)
                return;
            if (this.preloadPromise)
                return this.preloadPromise;
            let e = e => {
                this.promiseState = Ep.Fulfilled,
                this.value = e
            }
            , t = e => {
                this.promiseState = Ep.Rejected,
                this.reason = e
            }
            , n;
            try {
                n = this.resolver()
            } catch (e) {
                t(e);
                return
            }
            if (!St(n)) {
                e(n);
                return
            }
            let r = n.then(e, e => {
                t(e)
            }
            );
            return this.preloadPromise = r,
            r
        }
        async readAsync() {
            return this.readMaybeAsync()
        }
        readMaybeAsync() {
            let e = this.preload();
            return e ? e.then(this.read) : this.read()
        }
        use() {
            let e = this.preload();
            if (e)
                throw e;
            return this.read()
        }
    }
    ,
    Op = class extends Error {
        constructor(e, t) {
            super(e),
            this.name = `DevalueError`,
            this.path = t.join(``)
        }
    }
    ,
    kp = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`),
    Ap = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/,
    jp = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
    Mp = -1,
    Np = -2,
    Pp = -3,
    Fp = -4,
    Ip = -5,
    Lp = -6,
    Rp = 2,
    zp = {
        QueryCache: 0,
        CollectionUtilsCache: 1
    },
    Vp = class {
        constructor() {
            N(this, `payload`, Jt()),
            N(this, `isEmpty`, !0)
        }
        set(e, t, n) {
            this.payload[e].set(t, n),
            this.isEmpty = !1
        }
        has(e, t) {
            return this.payload[e].has(t)
        }
        get(e, t) {
            return this.payload[e].get(t)
        }
        toString() {
            if (!this.isEmpty)
                try {
                    return Gt(this.payload)
                } catch (e) {
                    console.error(`Failed to serialize handover data.`, e);
                    return
                }
        }
        clear() {
            for (let e of Object.values(this.payload))
                e.clear();
            this.isEmpty = !0
        }
    }
    ,
    Hp = ( () => _p ? void 0 : new Vp)(),
    Up = ( () => zp.CollectionUtilsCache)(),
    Wp = new WeakMap,
    Gp = k(void 0),
    Kp = class {
        constructor(e, t) {
            this.collectionId = t,
            N(this, `module`),
            N(this, `cacheMap`, new Map),
            this.module = new Dp(async () => {
                try {
                    let t = await e();
                    return L(t, `Couldn't find CollectionUtils`),
                    t
                } catch (e) {
                    console.error(wt(`Failed to import collection module.`, e));
                    return
                }
            }
            )
        }
        callUtilsMethod(e, t, n) {
            let r = Qt(n)
              , i = $t(e, this.collectionId, r, t);
            if (this.cacheMap.has(i)) {
                let e = this.cacheMap.get(i)
                  , t = e?.readMaybeAsync();
                if (Hp !== void 0) {
                    if (St(t))
                        return t.then(e => (Hp.set(Up, i, e),
                        e));
                    Hp.set(Up, i, t)
                }
                return t
            }
            if (Xt(Up, i)) {
                let e = Zt(Up, i);
                return this.cacheMap.set(i, new Dp( () => e)),
                e
            }
            let a = this.module.readMaybeAsync(), o = St(a), s;
            try {
                s = o ? a.then(r => r?.[e](t, n)) : a?.[e](t, n)
            } catch (e) {
                console.error(wt(`Failed to call CollectionUtils method.`, e)),
                s = void 0
            }
            if (s === void 0) {
                Hp !== void 0 && Hp.set(Up, i, s),
                this.cacheMap.set(i, s);
                return
            }
            let c = new Dp( () => s.then(e => (Hp !== void 0 && Hp.set(Up, i, e),
            e)).catch(e => {
                console.error(wt(`Failed to call CollectionUtils method.`, e))
            }
            ));
            return this.cacheMap.set(i, c),
            c.readMaybeAsync()
        }
        getSlugByRecordId(e, t) {
            return this.callUtilsMethod(`getSlugByRecordId`, e, t)
        }
        getRecordIdBySlug(e, t) {
            return this.callUtilsMethod(`getRecordIdBySlug`, e, t)
        }
    }
    ,
    qp = 46,
    Jp = 47,
    Yp = (e, t) => e.charCodeAt(t),
    Xp = (e, t) => e.lastIndexOf(t),
    Zp = (e, t, n) => e.slice(t, n),
    Qp = !1,
    $p = `/`,
    em = e => e === Jp,
    tm = new Set([`/404.html`, `/404`, `/404/`]),
    nm = RegExp(`:([a-z]\\w*)`, `gi`),
    rm = `framer_variant`,
    im = d.createContext({
        global: void 0,
        routes: {}
    }),
    am = 10,
    om = 1e4,
    sm = e => `--view-transition-${e}`,
    cm = {
        circle: {
            makeKeyframe: (e, t) => {
                let {x: n, y: r} = yn(e);
                return t === `start` ? `clip-path: circle(0 at ${n}px ${r}px);` : `clip-path: circle(${Math.hypot(Math.max(n, O.innerWidth - n), Math.max(r, O.innerHeight - r))}px at ${n}px ${r}px);`
            }
        },
        conic: {
            makeKeyframe: (e, t, n) => {
                let r = 0;
                return (n === `exit` && e.angularDirection === `clockwise` && t === `start` || n === `exit` && e.angularDirection === `counter-clockwise` && t === `end` || n === `enter` && e.angularDirection === `counter-clockwise` && t === `start` || n === `enter` && e.angularDirection === `clockwise` && t === `end`) && (r = e.sweepAngle / 360 * 100),
                `${sm(`conic-offset`)}: ${r}%;`
            }
            ,
            makeStyles: (e, t) => {
                let n = `var(${sm(`conic-offset`)})`
                  , r = t === `exit` && e.angularDirection === `clockwise` || t === `enter` && e.angularDirection === `counter-clockwise`
                  , i = r ? `transparent` : `black`
                  , a = r ? `black` : `transparent`
                  , o = `conic-gradient(from `;
                return o += `${e.angle}deg at ${e.x} ${e.y}, `,
                o += `${i} 0%, ${i} ${n}, `,
                o += `${a} ${n}, ${a} 100%)`,
                `mask-image: ${o}; -webkit-mask-image: ${o};`
            }
            ,
            makePropertyRules: () => `
        @property ${sm(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `
        },
        inset: {
            makeKeyframe: (e, t) => {
                let {x: n, y: r} = yn(e)
                  , i = O.innerHeight - r
                  , a = O.innerWidth - n;
                return t === `start` ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);` : `clip-path: inset(0 round 0);`
            }
        },
        blinds: {
            makeKeyframe: (e, t, n) => {
                let[,r] = vn(e.width)
                  , i = `0${r}`;
                return (t === `start` && n === `exit` || t === `end` && n === `enter`) && (i = e.width),
                `${sm(`blinds-width`)}: ${i};`
            }
            ,
            makeStyles: (e, t) => {
                let n = `var(${sm(`blinds-width`)})`
                  , r = t === `exit` ? `transparent` : `black`
                  , i = t === `exit` ? `black` : `transparent`
                  , a = `repeating-linear-gradient(`;
                return a += e.angle + 90 + `deg, `,
                a += `${r} 0px, ${r} ${n}, `,
                a += `${i} ${n}, ${i} ${e.width})`,
                `mask-image: ${a}; -webkit-mask-image: ${a};`
            }
            ,
            makePropertyRules: () => `
            @property ${sm(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `
        },
        wipe: {
            makeKeyframe: (e, t, n) => {
                let r = t === `start` && n === `exit` || t === `end` && n === `enter` ? 1 : 0;
                return `${sm(`wipe-offset`)}: ${r};`
            }
            ,
            makeStyles: (e, t) => {
                let n = `var(${sm(`wipe-offset`)})`
                  , r = t === `exit` ? `transparent` : `black`
                  , i = t === `exit` ? `black` : `transparent`
                  , a = `linear-gradient(`;
                return a += e.angle + 90 + `deg, `,
                a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `,
                a += `${i} calc(calc(100% + ${e.width}) * ${n}))`,
                `mask-image: ${a}; -webkit-mask-image: ${a};`
            }
            ,
            makePropertyRules: () => `
            @property ${sm(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `
        }
    },
    lm = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0
    },
    um = `view-transition-styles`,
    dm = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
            type: `tween`,
            delay: 0,
            duration: .2,
            ease: [.27, 0, .51, 1],
            stiffness: 400,
            damping: 30,
            mass: 1
        }
    },
    fm = () => {}
    ,
    mm = () => {
        pm || (pm = document.createElement(`div`),
        pm.setAttribute(`aria-live`, `assertive`),
        pm.setAttribute(`aria-atomic`, `true`),
        pm.style.position = `absolute`,
        pm.style.transform = `scale(0)`,
        document.body.append(pm)),
        setTimeout( () => {
            pm.textContent = document.title
        }
        , 60)
    }
    ,
    hm = !0,
    gm = ( () => {
        if (b === void 0)
            return !1;
        let e = b.userAgent
          , t = e.indexOf(`Chrome/`)
          , n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128
    }
    )(),
    _m = ( () => _p && typeof O.navigation?.back == `function`)(),
    vm = /[^\p{Letter}\p{Number}()]+/gu,
    ym = /^-+|-+$/gu,
    bm = d.createContext(null),
    xm = ( () => {
        let e = k({
            urlSearchParams: new URLSearchParams,
            triggerUpdate: () => {}
        });
        return e.displayName = `URLSearchParamsContext`,
        e
    }
    )(),
    Sm = async () => {}
    ,
    Cm = {
        activeLocale: null,
        locales: [],
        setLocale: Sm
    },
    wm = ( () => {
        let e = d.createContext(Cm);
        return e.displayName = `LocaleInfoContext`,
        e
    }
    )(),
    Tm = ( () => {
        let e = d.createContext(`ltr`);
        return e.displayName = `LayoutDirectionContext`,
        e
    }
    )(),
    Em = `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(`.`),
    Dm = e => {
        var t;
        ((t = e.target)?.closest)?.call(t, `#main`) && (e.stopPropagation(),
        performance.mark(`framer-react-event-handling-prevented`))
    }
    ,
    Om = !1,
    Gm = [Qn],
    Wm = [Qn],
    Um = [Qn],
    Hm = [Qn],
    Vm = [Qn],
    Bm = [Qn],
    zm = [Qn],
    Rm = [Qn],
    Lm = [Qn],
    Im = [Qn],
    Fm = [Qn],
    Pm = [Qn],
    Nm = [Qn],
    Mm = [Qn],
    jm = [Qn],
    Am = [Qn],
    km = [Qn],
    qm = class {
        constructor() {
            ve(Km, 5, this),
            N(this, `render`, {
                markStart: () => this.markRenderStart(),
                markEnd: () => this.markRenderEnd()
            }),
            N(this, `mutationEffects`, {
                measure: () => this.measureMutationEffects()
            }),
            N(this, `useInsertionEffects`, {
                markStart: () => this.markUseInsertionEffectsStart(),
                markRouterStart: () => this.markUseInsertionEffectRouterStart(),
                markEnd: () => this.markUseInsertionEffectsEnd()
            }),
            N(this, `useLayoutEffects`, {
                markStart: () => this.markUseLayoutEffectsStart(),
                markRouterStart: () => this.markRouterUseLayoutEffectStart(),
                markEnd: () => this.markUseLayoutEffectsEnd()
            }),
            N(this, `useEffects`, {
                markStart: () => this.markUseEffectsStart(),
                markRouterStart: () => this.markUseEffectsRouterStart(),
                markEnd: () => this.markUseEffectsEnd(),
                markAreSynchronous: () => this.markUseEffectsAreSynchronous()
            }),
            N(this, `browserRendering`, {
                hasStarted: !1,
                requestAnimationFrame: {
                    markStart: () => this.markRafStart(),
                    markEnd: () => this.markRafEnd()
                },
                layoutStylePaint: {
                    markEnd: () => this.markLayoutStylePaintEnd()
                }
            }),
            N(this, `unattributedHydrationOverhead`, {
                measure: () => this.measureUnattributedHydrationOverhead()
            })
        }
        markRenderStart() {
            performance.mark(`framer-hydration-start`)
        }
        markRenderEnd() {
            performance.mark(`framer-hydration-render-end`),
            $n(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`)
        }
        markUseInsertionEffectsStart() {
            performance.mark(`framer-hydration-insertion-effects-start`)
        }
        markUseInsertionEffectRouterStart() {
            performance.mark(`framer-hydration-router-insertion-effect`)
        }
        markUseInsertionEffectsEnd() {
            performance.mark(`framer-hydration-insertion-effects-end`),
            $n(`framer-hydration-insertion-effects`, `framer-hydration-insertion-effects-start`, `framer-hydration-insertion-effects-end`)
        }
        markUseLayoutEffectsStart() {
            performance.mark(`framer-hydration-layout-effects-start`)
        }
        markRouterUseLayoutEffectStart() {
            performance.mark(`framer-hydration-router-layout-effect`)
        }
        markUseLayoutEffectsEnd() {
            performance.mark(`framer-hydration-layout-effects-end`),
            $n(`framer-hydration-layout-effects`, `framer-hydration-layout-effects-start`, `framer-hydration-layout-effects-end`)
        }
        markUseEffectsStart() {
            performance.mark(`framer-hydration-effects-start`)
        }
        markUseEffectsRouterStart() {
            performance.mark(`framer-hydration-router-effect`)
        }
        markUseEffectsAreSynchronous() {
            performance.mark(`framer-hydration-effects-sync`)
        }
        markUseEffectsEnd() {
            performance.mark(`framer-hydration-effects-end`),
            $n(`framer-hydration-effects`, performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ?? performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name, `framer-hydration-effects-end`)
        }
        markRafStart() {
            this.browserRendering.hasStarted = !0,
            performance.mark(`framer-hydration-browser-render-start`)
        }
        markRafEnd() {
            performance.mark(`framer-hydration-browser-raf-end`),
            $n(`framer-hydration-raf`, `framer-hydration-browser-render-start`, `framer-hydration-browser-raf-end`)
        }
        markLayoutStylePaintEnd() {
            performance.mark(`framer-hydration-first-paint`),
            $n(`framer-hydration-time-to-first-paint`, `framer-hydration-start`, `framer-hydration-first-paint`),
            $n(`framer-hydration-browser-render`, `framer-hydration-browser-raf-end`, `framer-hydration-first-paint`)
        }
        measureMutationEffects() {
            $n(`framer-hydration-commit`, `framer-hydration-layout-effects-end`, `framer-hydration-effects-start`)
        }
        measureUnattributedHydrationOverhead() {
            $n(`framer-hydration-uho`, performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ?? performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name, `framer-hydration-browser-render-start`)
        }
    }
    ,
    Km = he(null),
    A(Km, 1, `markRenderStart`, Gm, qm),
    A(Km, 1, `markRenderEnd`, Wm, qm),
    A(Km, 1, `markUseInsertionEffectsStart`, Um, qm),
    A(Km, 1, `markUseInsertionEffectRouterStart`, Hm, qm),
    A(Km, 1, `markUseInsertionEffectsEnd`, Vm, qm),
    A(Km, 1, `markUseLayoutEffectsStart`, Bm, qm),
    A(Km, 1, `markRouterUseLayoutEffectStart`, zm, qm),
    A(Km, 1, `markUseLayoutEffectsEnd`, Rm, qm),
    A(Km, 1, `markUseEffectsStart`, Lm, qm),
    A(Km, 1, `markUseEffectsRouterStart`, Im, qm),
    A(Km, 1, `markUseEffectsAreSynchronous`, Fm, qm),
    A(Km, 1, `markUseEffectsEnd`, Pm, qm),
    A(Km, 1, `markRafStart`, Nm, qm),
    A(Km, 1, `markRafEnd`, Mm, qm),
    A(Km, 1, `markLayoutStylePaintEnd`, jm, qm),
    A(Km, 1, `measureMutationEffects`, Am, qm),
    A(Km, 1, `measureUnattributedHydrationOverhead`, km, qm),
    me(Km, qm),
    Ym = !1,
    Xm = {
        Start: ir,
        End: ar
    },
    Zm = class extends Error {
    }
    ,
    Qm = class extends r {
        constructor(e) {
            super(e),
            this.state = {
                error: void 0,
                forceUpdateKey: e.forceUpdateKey
            }
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        static getDerivedStateFromProps(e, t) {
            if (e.forceUpdateKey !== t.forceUpdateKey) {
                let n = {
                    forceUpdateKey: e.forceUpdateKey
                };
                return t.error && (n.error = void 0),
                n
            }
            return null
        }
        render() {
            if (this.state.error === void 0)
                return this.props.children;
            if (!(this.state.error instanceof Zm))
                throw this.state.error;
            let {notFoundPage: e, defaultPageStyle: t} = this.props;
            if (!e)
                throw this.state.error;
            return or(e, t)
        }
    }
    ,
    $m = Object.freeze([]),
    th = `main`,
    nh = `framerGeneratedPage`,
    rh = `<!-- End of headStart -->`,
    ih = `<!-- End of headEnd -->`,
    ah = `<!-- End of bodyStart -->`,
    oh = `<!-- End of bodyEnd -->`,
    sh = new Set,
    ch = class {
        constructor() {
            N(this, `observers`, new Set),
            N(this, `transactions`, {})
        }
        add(e) {
            this.observers.add(e);
            let t = !1;
            return () => {
                t || (t = !0,
                this.remove(e))
            }
        }
        remove(e) {
            this.observers.delete(e)
        }
        notify(e, t) {
            if (t) {
                let n = this.transactions[t] || e;
                n.value = e.value,
                this.transactions[t] = n
            } else
                this.callObservers(e)
        }
        finishTransaction(e) {
            let t = this.transactions[e];
            return delete this.transactions[e],
            this.callObservers(t, e)
        }
        callObservers(e, t) {
            let n = [];
            return new Set(this.observers).forEach(r => {
                typeof r == `function` ? r(e, t) : (r.update(e, t),
                n.push(r.finish))
            }
            ),
            n
        }
    }
    ,
    lh = ( () => {
        function e(e) {
            return Or(`Animatable()`, `2.0.0`, `the new animation API (https://www.framer.com/api/animation/)`),
            kr(e) ? e : new fh(e)
        }
        return e.transaction = e => {
            let t = Math.random()
              , n = new Set;
            e( (e, r) => {
                e.set(r, t),
                n.add(e)
            }
            , t);
            let r = [];
            n.forEach(e => {
                r.push(...e.finishTransaction(t))
            }
            ),
            r.forEach(e => {
                e(t)
            }
            )
        }
        ,
        e.getNumber = (t, n=0) => e.get(t, n),
        e.get = (e, t) => e == null ? t : kr(e) ? e.get() : e,
        e.objectToValues = e => {
            if (!e)
                return e;
            let t = {};
            for (let n in e) {
                let r = e[n];
                kr(r) ? t[n] = r.get() : t[n] = r
            }
            return t
        }
        ,
        e
    }
    )(),
    uh = `onUpdate`,
    dh = `finishTransaction`,
    fh = class {
        constructor(e) {
            this.value = e,
            N(this, `observers`, new ch)
        }
        static interpolationFor(e, t) {
            if (kr(e))
                return Ar(e, t)
        }
        get() {
            return this.value
        }
        set(e, t) {
            let n = this.value;
            kr(e) && (e = e.get()),
            this.value = e;
            let r = {
                value: e,
                oldValue: n
            };
            this.observers.notify(r, t)
        }
        finishTransaction(e) {
            return this.observers.finishTransaction(e)
        }
        onUpdate(e) {
            return this.observers.add(e)
        }
    }
    ,
    (e => {
        e.isQuadrilateralPoints = e => e?.length === 4,
        e.add = (...e) => e.reduce( (e, t) => ({
            x: e.x + t.x,
            y: e.y + t.y
        }), {
            x: 0,
            y: 0
        }),
        e.subtract = (e, t) => ({
            x: e.x - t.x,
            y: e.y - t.y
        }),
        e.multiply = (e, t) => ({
            x: e.x * t,
            y: e.y * t
        }),
        e.divide = (e, t) => ({
            x: e.x / t,
            y: e.y / t
        }),
        e.absolute = e => ({
            x: Math.abs(e.x),
            y: Math.abs(e.y)
        }),
        e.reverse = e => ({
            x: e.x * -1,
            y: e.y * -1
        }),
        e.pixelAligned = (e, t={
            x: 0,
            y: 0
        }) => ({
            x: Mr(e.x, t.x),
            y: Mr(e.y, t.y)
        }),
        e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x)
              , r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r)
        }
        ,
        e.angle = (e, t) => Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI - 90,
        e.angleFromX = (e, t) => Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI,
        e.isEqual = (e, t) => e.x === t.x && e.y === t.y,
        e.rotationNormalizer = () => {
            let e;
            return t => {
                typeof e != `number` && (e = t);
                let n = e - t
                  , r = Math.abs(n) + 180
                  , i = Math.floor(r / 360);
                return n < 180 && (t -= i * 360),
                n > 180 && (t += i * 360),
                e = t,
                t
            }
        }
        ;
        function t(e, t) {
            return {
                x: (e.x + t.x) / 2,
                y: (e.y + t.y) / 2
            }
        }
        e.center = t;
        function n(e) {
            let t = 0
              , n = 0;
            e.forEach(e => {
                t += e.x,
                n += e.y
            }
            );
            let r = t / e.length
              , i = n / e.length;
            return {
                x: r,
                y: i
            }
        }
        e.centroid = n;
        function r(t) {
            let n = e.centroid(t)
              , r = new Map;
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x))
            }
            return t.sort( (e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0))
        }
        e.sortClockwise = r
    }
    )(Pr ||= {}),
    ph = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`
    },
    mh = new (( () => ip().Hsluv)()),
    hh = ( () => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`
          , t = `[\\s|\\(]+(` + e + `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
          , n = `[\\s|\\(]+(` + e + `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
        return {
            rgb: RegExp(`rgb` + t),
            rgba: RegExp(`rgba` + n),
            hsl: RegExp(`hsl` + t),
            hsla: RegExp(`hsla` + n),
            hsv: RegExp(`hsv` + t),
            hsva: RegExp(`hsva` + n),
            hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
            hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
            hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
            hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu
        }
    }
    )(),
    gh = /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u,
    _h = e => {
        let {r: t, g: n, b: r, a: i} = ii(e);
        return {
            x: .486570948648216 * t + .265667693169093 * n + .1982172852343625 * r,
            y: .2289745640697487 * t + .6917385218365062 * n + .079286914093745 * r,
            z: 0 * t + .0451133818589026 * n + 1.043944368900976 * r,
            a: i
        }
    }
    ,
    vh = ({x: e=0, y: t=0, z: n=0, a: r=1}) => oi({
        r: e * 3.2409699419045226 - t * 1.537383177570094 - .4986107602930034 * n,
        g: e * -.9692436362808796 + t * 1.8759675015077204 + .0415550574071756 * n,
        b: e * .0556300796969936 - t * .2039769588889765 + 1.0569715142428784 * n,
        a: r
    }),
    yh = e => {
        let {r: t, g: n, b: r, a: i} = ii(e);
        return {
            x: .4123907992659593 * t + .357584339383878 * n + .1804807884018343 * r,
            y: .2126390058715102 * t + .715168678767756 * n + .0721923153607337 * r,
            z: .0193308187155918 * t + .119194779794626 * n + .9505321522496607 * r,
            a: i
        }
    }
    ,
    bh = ({x: e=0, y: t=0, z: n=0, a: r=1}) => oi({
        r: e * 2.4934969119414263 - t * .9313836179191242 - .402710784450717 * n,
        g: e * -.8294889695615749 + t * 1.7626640603183465 + .0236246858419436 * n,
        b: e * .0358458302437845 - t * .0761723892680418 + .9568845240076871 * n,
        a: r
    }),
    xh = class e {
        constructor(e) {
            N(this, `format`, `p3`),
            N(this, `r`),
            N(this, `g`),
            N(this, `b`),
            N(this, `a`),
            this.r = e.r ?? 0,
            this.g = e.g ?? 0,
            this.b = e.b ?? 0,
            this.a = e.a ?? 1
        }
        hsv() {
            return si(this)
        }
        rgb() {
            return di(this)
        }
        hsl() {
            return Wr(this.r, this.g, this.b)
        }
        toString(e=`p3`, t) {
            switch (e) {
            case `p3`:
                {
                    let e = t?.r ?? this.r
                      , n = t?.g ?? this.g
                      , r = t?.b ?? this.b
                      , i = t?.a ?? this.a;
                    return i === 1 ? `color(display-p3 ${e} ${n} ${r})` : `color(display-p3 ${e} ${n} ${r} / ${i})`
                }
            case `srgb`:
                {
                    let e = this.rgb()
                      , n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100
                      , r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100
                      , i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100
                      , a = t?.r ?? n * 255
                      , o = t?.g ?? r * 255
                      , s = t?.b ?? i * 255
                      , c = t?.a ?? e.a ?? 1;
                    return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`
                }
            }
        }
        static isP3String(e) {
            return e.startsWith(`color(display-p3`)
        }
        static fromHSV(t, n=`p3`) {
            switch (n) {
            case `p3`:
                return new e(li(t));
            case `srgb`:
                return new e(ui(li(t)))
            }
        }
        static fromRGB(t) {
            return new e(ui({
                r: Math.round(t.r / 255 * 1e4) / 1e4,
                g: Math.round(t.g / 255 * 1e4) / 1e4,
                b: Math.round(t.b / 255 * 1e4) / 1e4,
                a: t.a ?? 1
            }))
        }
        static fromRGBString(t) {
            let n = G(t);
            if (n)
                return e.fromRGB(n)
        }
        static fromString(t) {
            if (!e.isP3String(t))
                return;
            let n = ni(t);
            if (n)
                return new e({
                    r: n.r,
                    g: n.g,
                    b: n.b,
                    a: n.a
                })
        }
        static srgbFromValue(t) {
            if (!F(t) || !G.isP3String(t))
                return t;
            let n = e.fromString(t);
            return n ? n.toString(`srgb`) : t
        }
        static multiplyAlpha(t, n) {
            return new e({
                r: t.r,
                g: t.g,
                b: t.b,
                a: t.a * n
            })
        }
    }
    ,
    Sh = new Map,
    G = ( () => {
        function e(n, r, i, a) {
            if (typeof n == `string`) {
                let r = Sh.get(n);
                return r || (r = t(n),
                r === void 0 ? {
                    ...e(`black`),
                    isValid: !1
                } : (Sh.set(n, r),
                r))
            }
            let o = t(n, r, i, a);
            return o === void 0 ? {
                ...e(`black`),
                isValid: !1
            } : o
        }
        function t(t, n, r, i) {
            if (t === ``)
                return;
            let a = fi(t, n, r, i);
            if (a) {
                let n = {
                    r: a.r,
                    g: a.g,
                    b: a.b,
                    a: a.a,
                    h: a.h,
                    s: a.s,
                    l: a.l,
                    initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
                    roundA: Math.round(100 * a.a) / 100,
                    format: a.format,
                    mix: e.mix,
                    toValue: () => e.toRgbString(n)
                };
                return n
            } else
                return
        }
        let n = {
            isRGB(e) {
                return e === `rgb` || e === `rgba`
            },
            isHSL(e) {
                return e === `hsl` || e === `hsla`
            }
        };
        e.inspect = (e, t) => e.format === `hsl` ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>` : e.format === `hex` || e.format === `name` ? `<${e.constructor.name} "${t}">` : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`,
        e.isColor = t => typeof t == `string` ? e.isColorString(t) : e.isColorObject(t),
        e.isColorString = e => typeof e == `string` ? $r(e) !== !1 : !1,
        e.isColorObject = e => I(e) && typeof e.r == `number` && typeof e.g == `number` && typeof e.b == `number` && typeof e.h == `number` && typeof e.s == `number` && typeof e.l == `number` && typeof e.a == `number` && typeof e.roundA == `number` && typeof e.format == `string`,
        e.toString = t => e.toRgbString(t),
        e.toHex = (e, t=!1) => Ur(e.r, e.g, e.b, t),
        e.toHexString = (t, n=!1) => `#${e.toHex(t, n)}`,
        e.isP3String = e => typeof e == `string` ? xh.isP3String(e) : !1,
        e.toRgbString = e => e.a === 1 ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)` : `rgba(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `, ` + e.roundA + `)`,
        e.toHusl = e => ({
            ...zr(e.r, e.g, e.b),
            a: e.roundA
        }),
        e.toHslString = t => {
            let n = e.toHsl(t)
              , r = Math.round(n.h)
              , i = Math.round(n.s * 100)
              , a = Math.round(n.l * 100);
            return t.a === 1 ? `hsl(` + r + `, ` + i + `%, ` + a + `%)` : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`
        }
        ,
        e.toHsv = e => {
            let t = qr(e.r, e.g, e.b);
            return {
                h: t.h * 360,
                s: t.s,
                v: t.v,
                a: e.a
            }
        }
        ,
        e.toHsvString = e => {
            let t = qr(e.r, e.g, e.b)
              , n = Math.round(t.h * 360)
              , r = Math.round(t.s * 100)
              , i = Math.round(t.v * 100);
            return e.a === 1 ? `hsv(` + n + `, ` + r + `%, ` + i + `%)` : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`
        }
        ,
        e.toName = e => {
            if (e.a === 0)
                return `transparent`;
            if (e.a < 1)
                return !1;
            let t = Ur(e.r, e.g, e.b, !0);
            for (let e of Object.keys(ph))
                if (ph[e] === t)
                    return e;
            return !1
        }
        ,
        e.toHsl = e => ({
            h: Math.round(e.h),
            s: e.s,
            l: e.l,
            a: e.a
        }),
        e.toRgb = e => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a
        }),
        e.brighten = (t, n=10) => {
            let r = e.toRgb(t);
            return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100)))),
            r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100)))),
            r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100)))),
            e(r)
        }
        ,
        e.lighten = (t, n=10) => {
            let r = e.toHsl(t);
            return r.l += n / 100,
            r.l = Math.min(1, Math.max(0, r.l)),
            e(r)
        }
        ,
        e.darken = (t, n=10) => {
            let r = e.toHsl(t);
            return r.l -= n / 100,
            r.l = Math.min(1, Math.max(0, r.l)),
            e(r)
        }
        ,
        e.saturate = (t, n=10) => {
            let r = e.toHsl(t);
            return r.s += n / 100,
            r.s = Math.min(1, Math.max(0, r.s)),
            e(r)
        }
        ,
        e.desaturate = (t, n=10) => {
            let r = e.toHsl(t);
            return r.s -= n / 100,
            r.s = Math.min(1, Math.max(0, r.s)),
            e(r)
        }
        ,
        e.grayscale = t => e.desaturate(t, 100),
        e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return r.h += n,
            r.h = r.h > 360 ? r.h - 360 : r.h,
            e(r)
        }
        ,
        e.alpha = (t, n=1) => e({
            r: t.r,
            g: t.g,
            b: t.b,
            a: n
        }),
        e.transparent = t => e.alpha(t, 0),
        e.multiplyAlpha = (t, n=1) => e({
            r: t.r,
            g: t.g,
            b: t.b,
            a: t.a * n
        }),
        e.interpolate = (t, n, r=`rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
                throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return i => e.mixAsColor(t, n, i, !1, r)
        }
        ,
        e.mix = (t, n, {model: r=`rgb`}={}) => {
            let i = typeof t == `string` ? e(t) : t
              , a = e.interpolate(i, n, r);
            return t => e.toRgbString(a(t))
        }
        ,
        e.mixAsColor = (t, r, i=.5, a=!1, o=`rgb`) => {
            let s = null;
            if (n.isRGB(o))
                s = e({
                    r: Fr(i, [0, 1], [t.r, r.r], a),
                    g: Fr(i, [0, 1], [t.g, r.g], a),
                    b: Fr(i, [0, 1], [t.b, r.b], a),
                    a: Fr(i, [0, 1], [t.a, r.a], a)
                });
            else {
                let c, l;
                n.isHSL(o) ? (c = e.toHsl(t),
                l = e.toHsl(r)) : (c = e.toHusl(t),
                l = e.toHusl(r)),
                c.s === 0 ? c.h = l.h : l.s === 0 && (l.h = c.h);
                let u = c.h
                  , d = l.h
                  , f = d - u;
                f > 180 ? f = d - 360 - u : f < -180 && (f = d + 360 - u);
                let p = {
                    h: Fr(i, [0, 1], [u, u + f], a),
                    s: Fr(i, [0, 1], [c.s, l.s], a),
                    l: Fr(i, [0, 1], [c.l, l.l], a),
                    a: Fr(i, [0, 1], [t.a, r.a], a)
                };
                s = n.isHSL(o) ? e(p) : e(Br(p.h, p.s, p.l, p.a))
            }
            return s
        }
        ,
        e.random = (t=1) => {
            function n() {
                return Math.floor(Math.random() * 255)
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`)
        }
        ,
        e.grey = (t=.5, n=1) => (t = Math.floor(t * 255),
        e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)),
        e.gray = e.grey,
        e.rgbToHsl = (e, t, n) => Wr(e, t, n),
        e.isValidColorProperty = (t, n) => !!((t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) && typeof n == `string` && e.isColorString(n)),
        e.difference = (e, t) => {
            let n = (e.r + t.r) / 2
              , r = e.r - t.r
              , i = e.g - t.g
              , a = e.b - t.b
              , o = r ** 2
              , s = i ** 2
              , c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + n * (o - c) / 256)
        }
        ,
        e.equal = (e, t, n=.1) => !(Math.abs(e.r - t.r) >= n || Math.abs(e.g - t.g) >= n || Math.abs(e.b - t.b) >= n || Math.abs(e.a - t.a) * 256 >= n);
        let r = Ee([0, 255], [0, 1]);
        function i(e) {
            e = r(e);
            let t = Math.abs(e);
            return t < .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4
        }
        return e.luminance = t => {
            let {r: n, g: r, b: a} = e.toRgb(t);
            return .2126 * i(n) + .7152 * i(r) + .0722 * i(a)
        }
        ,
        e.contrast = (t, n) => {
            let r = e.luminance(t)
              , i = e.luminance(n);
            return (Math.max(r, i) + .05) / (Math.min(r, i) + .05)
        }
        ,
        e
    }
    )(),
    Ch = e => e instanceof le,
    wh = ( () => ap().EventEmitter)(),
    Th = class {
        constructor() {
            N(this, `_emitter`, new wh)
        }
        eventNames() {
            return this._emitter.eventNames()
        }
        eventListeners() {
            let e = {};
            for (let t of this._emitter.eventNames())
                e[t] = this._emitter.listeners(t);
            return e
        }
        on(e, t) {
            this.addEventListener(e, t, !1, !1, this)
        }
        off(e, t) {
            this.removeEventListeners(e, t)
        }
        once(e, t) {
            this.addEventListener(e, t, !0, !1, this)
        }
        unique(e, t) {
            this.addEventListener(e, t, !1, !0, this)
        }
        addEventListener(e, t, n, r, i) {
            if (r) {
                for (let e of this._emitter.eventNames())
                    if (t === this._emitter.listeners(e))
                        return
            }
            n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i)
        }
        removeEventListeners(e, t) {
            e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners()
        }
        removeAllEventListeners() {
            this._emitter.removeAllListeners()
        }
        countEventListeners(e) {
            if (e)
                return this._emitter.listeners(e).length;
            {
                let e = 0;
                for (let t of this._emitter.eventNames())
                    e += this._emitter.listeners(t).length;
                return e
            }
        }
        emit(e, ...t) {
            this._emitter.emit(e, ...t)
        }
    }
    ,
    Eh = e => {
        setTimeout(e, 1 / 60)
    }
    ,
    Dh = ( () => W.requestAnimationFrame || Eh)(),
    Oh = e => Dh(e),
    kh = ( () => 1 / 60)(),
    Ah = class extends Th {
        constructor(e=!1) {
            super(),
            N(this, `_started`, !1),
            N(this, `_frame`, 0),
            N(this, `_frameTasks`, []),
            N(this, `tick`, () => {
                this._started && (Oh(this.tick),
                this.emit(`update`, this._frame, kh),
                this.emit(`render`, this._frame, kh),
                this._processFrameTasks(),
                this._frame++)
            }
            ),
            e && this.start()
        }
        addFrameTask(e) {
            this._frameTasks.push(e)
        }
        _processFrameTasks() {
            var e;
            let t = this._frameTasks
              , n = t.length;
            if (n !== 0) {
                for (let r = 0; r < n; r++)
                    (e = t[r]) == null || e.call(t);
                t.length = 0
            }
        }
        static set TimeStep(e) {
            kh = e
        }
        static get TimeStep() {
            return kh
        }
        start() {
            return this._started ? this : (this._frame = 0,
            this._started = !0,
            Oh(this.tick),
            this)
        }
        stop() {
            return this._started = !1,
            this
        }
        get frame() {
            return this._frame
        }
        get time() {
            return this._frame * kh
        }
    }
    ,
    jh = new Ah,
    Mh = {
        target: W.location.origin === `https://screenshot.framer.invalid` ? `EXPORT` : `PREVIEW`,
        zoom: 1
    },
    K = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Mh.target,
        hasRestrictions: () => {
            let e = Mh.target;
            return e === `CANVAS` || e === `EXPORT`
        }
    },
    Nh = e => ({
        correct: (t, {delta: n, treeScale: r}) => {
            if (typeof t == `string` && (t = parseFloat(t)),
            t === 0)
                return `0px`;
            let i = t;
            return n && r && (i = Math.round(t / n[e].scale / r[e]),
            i = Math.max(i, 1)),
            i + `px`
        }
    }),
    be({
        borderTopWidth: Nh(`y`),
        borderLeftWidth: Nh(`x`),
        borderRightWidth: Nh(`x`),
        borderBottomWidth: Nh(`y`)
    }),
    Ph = d.createContext({
        getLayoutId: e => null,
        persistLayoutIdCache: () => {}
        ,
        top: !1,
        enabled: !0
    }),
    Fh = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`
    },
    Ih = ( () => ({
        ...Fh,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`
    }))(),
    Lh = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`
    },
    Rh = ( () => ({
        ...Lh,
        fontWeight: 500
    }))(),
    zh = ( () => ({
        ...Lh,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`
    }))(),
    Bh = ( () => {
        function e(e, t) {
            return {
                a: e,
                b: t
            }
        }
        return e.offset = (t, n) => {
            let r = Pr.angleFromX(t.a, t.b)
              , i = Di(r)
              , a = n * Math.sin(i)
              , o = n * Math.cos(i);
            return e({
                x: t.a.x + a,
                y: t.a.y - o
            }, {
                x: t.b.x + a,
                y: t.b.y - o
            })
        }
        ,
        e.intersection = (e, t, n) => {
            let r = e.a.x
              , i = e.a.y
              , a = e.b.x
              , o = e.b.y
              , s = t.a.x
              , c = t.a.y
              , l = t.b.x
              , u = t.b.y
              , d = (l - s) * (c - i) - (u - c) * (s - r)
              , f = (l - s) * (o - i) - (u - c) * (a - r)
              , p = (a - r) * (c - i) - (o - i) * (s - r);
            if (d === 0 && f === 0 || f === 0)
                return null;
            let m = d / f
              , h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1) ? null : {
                x: r + m * (a - r),
                y: i + m * (o - i)
            }
        }
        ,
        e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x
              , r = e.b.y - e.a.y
              , i = t.b.x - t.a.x
              , a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI)
        }
        ,
        e.isOrthogonal = e => e.a.x === e.b.x || e.a.y === e.b.y,
        e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x
              , i = t.a.y - t.b.y
              , a = Pr(n.x - i, n.y + r);
            return e(a, n)
        }
        ,
        e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r)
        }
        ,
        e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t)
              , i = n * r / r;
            return {
                x: i * t.b.x + (1 - i) * t.a.x,
                y: i * t.b.y + (1 - i) * t.a.y
            }
        }
        ,
        e.distance = e => Pr.distance(e.a, e.b),
        e
    }
    )(),
    q = {
        equals: function(e, t) {
            return e === t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
        },
        from: e => ({
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height
        }),
        atOrigin: e => ({
            x: 0,
            y: 0,
            width: e.width,
            height: e.height
        }),
        fromTwoPoints: (e, t) => ({
            x: Math.min(e.x, t.x),
            y: Math.min(e.y, t.y),
            width: Math.abs(e.x - t.x),
            height: Math.abs(e.y - t.y)
        }),
        fromRect: e => ({
            x: e.left,
            y: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }),
        multiply: (e, t) => ({
            x: e.x * t,
            y: e.y * t,
            width: e.width * t,
            height: e.height * t
        }),
        divide: (e, t) => q.multiply(e, 1 / t),
        offset: (e, t) => {
            let n = typeof t.x == `number` ? t.x : 0
              , r = typeof t.y == `number` ? t.y : 0;
            return {
                ...e,
                x: e.x + n,
                y: e.y + r
            }
        }
        ,
        inflate: (e, t) => {
            if (t === 0)
                return e;
            let n = 2 * t;
            return {
                x: e.x - t,
                y: e.y - t,
                width: e.width + n,
                height: e.height + n
            }
        }
        ,
        pixelAligned: e => {
            let t = Math.round(e.x)
              , n = Math.round(e.y)
              , r = Math.round(e.x + e.width)
              , i = Math.round(e.y + e.height)
              , a = Math.max(r - t, 0)
              , o = Math.max(i - n, 0);
            return {
                x: t,
                y: n,
                width: a,
                height: o
            }
        }
        ,
        halfPixelAligned: e => {
            let t = Math.round(e.x * 2) / 2
              , n = Math.round(e.y * 2) / 2
              , r = Math.round((e.x + e.width) * 2) / 2
              , i = Math.round((e.y + e.height) * 2) / 2
              , a = Math.max(r - t, 1)
              , o = Math.max(i - n, 1);
            return {
                x: t,
                y: n,
                width: a,
                height: o
            }
        }
        ,
        round: (e, t=0) => {
            let n = jr(e.x, t)
              , r = jr(e.y, t)
              , i = jr(e.width, t)
              , a = jr(e.height, t);
            return {
                x: n,
                y: r,
                width: i,
                height: a
            }
        }
        ,
        roundToOutside: e => {
            let t = Math.floor(e.x)
              , n = Math.floor(e.y)
              , r = Math.ceil(e.x + e.width)
              , i = Math.ceil(e.y + e.height)
              , a = Math.max(r - t, 0)
              , o = Math.max(i - n, 0);
            return {
                x: t,
                y: n,
                width: a,
                height: o
            }
        }
        ,
        minX: e => e.x,
        maxX: e => e.x + e.width,
        minY: e => e.y,
        maxY: e => e.y + e.height,
        positions: e => ({
            minX: e.x,
            midX: e.x + e.width / 2,
            maxX: q.maxX(e),
            minY: e.y,
            midY: e.y + e.height / 2,
            maxY: q.maxY(e)
        }),
        center: e => ({
            x: e.x + e.width / 2,
            y: e.y + e.height / 2
        }),
        boundingRectFromPoints: e => {
            let t = 1 / 0
              , n = -1 / 0
              , r = 1 / 0
              , i = -1 / 0;
            for (let a = 0; a < e.length; a++) {
                let o = e[a];
                t = Math.min(t, o.x),
                n = Math.max(n, o.x),
                r = Math.min(r, o.y),
                i = Math.max(i, o.y)
            }
            return {
                x: t,
                y: r,
                width: n - t,
                height: i - r
            }
        }
        ,
        fromPoints: e => {
            let[t,n,r,i] = e
              , {x: a, y: o} = t
              , s = Pr.distance(t, n)
              , c = Pr.distance(t, i);
            return {
                x: a,
                y: o,
                width: s,
                height: c
            }
        }
        ,
        merge: (...e) => {
            let t = {
                x: Math.min(...e.map(q.minX)),
                y: Math.min(...e.map(q.minY))
            }
              , n = {
                x: Math.max(...e.map(q.maxX)),
                y: Math.max(...e.map(q.maxY))
            };
            return q.fromTwoPoints(t, n)
        }
        ,
        intersection: (e, t) => {
            let n = Math.max(e.x, t.x)
              , r = Math.min(e.x + e.width, t.x + t.width)
              , i = Math.max(e.y, t.y)
              , a = Math.min(e.y + e.height, t.y + t.height);
            return {
                x: n,
                y: i,
                width: r - n,
                height: a - i
            }
        }
        ,
        points: e => [{
            x: q.minX(e),
            y: q.minY(e)
        }, {
            x: q.minX(e),
            y: q.maxY(e)
        }, {
            x: q.maxX(e),
            y: q.minY(e)
        }, {
            x: q.maxX(e),
            y: q.maxY(e)
        }],
        pointsAtOrigin: e => [{
            x: 0,
            y: 0
        }, {
            x: e.width,
            y: 0
        }, {
            x: e.width,
            y: e.height
        }, {
            x: 0,
            y: e.height
        }],
        transform: (e, t) => {
            let {x: n, y: r} = t.transformPoint({
                x: e.x,
                y: e.y
            })
              , {x: i, y: a} = t.transformPoint({
                x: e.x + e.width,
                y: e.y
            })
              , {x: o, y: s} = t.transformPoint({
                x: e.x + e.width,
                y: e.y + e.height
            })
              , {x: c, y: l} = t.transformPoint({
                x: e.x,
                y: e.y + e.height
            })
              , u = Math.min(n, i, o, c)
              , d = Math.max(n, i, o, c) - u
              , f = Math.min(r, a, s, l)
              , p = Math.max(r, a, s, l) - f;
            return {
                x: u,
                y: f,
                width: d,
                height: p
            }
        }
        ,
        containsPoint: (e, t) => !(t.x < q.minX(e) || t.x > q.maxX(e) || t.y < q.minY(e) || t.y > q.maxY(e) || Number.isNaN(e.x) || Number.isNaN(e.y)),
        containsRect: (e, t) => {
            for (let n of q.points(t))
                if (!q.containsPoint(e, n))
                    return !1;
            return !0
        }
        ,
        toCSS: e => ({
            display: `block`,
            transform: `translate(${e.x}px, ${e.y}px)`,
            width: `${e.width}px`,
            height: `${e.height}px`
        }),
        inset: (e, t) => ({
            x: e.x + t,
            y: e.y + t,
            width: Math.max(0, e.width - 2 * t),
            height: Math.max(0, e.height - 2 * t)
        }),
        intersects: (e, t) => !(t.x >= q.maxX(e) || q.maxX(t) <= e.x || t.y >= q.maxY(e) || q.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
            let n = q.maxX(e)
              , r = q.maxX(t);
            return n > t.x && r > e.x
        }
        ,
        overlapVertically: (e, t) => {
            let n = q.maxY(e)
              , r = q.maxY(t);
            return n > t.y && r > e.y
        }
        ,
        doesNotIntersect: (e, t) => t.find(t => q.intersects(t, e)) === void 0,
        isEqual: (e, t) => q.equals(e, t),
        cornerPoints: e => {
            let t = e.x
              , n = e.x + e.width
              , r = e.y
              , i = e.y + e.height;
            return [{
                x: t,
                y: r
            }, {
                x: n,
                y: r
            }, {
                x: n,
                y: i
            }, {
                x: t,
                y: i
            }]
        }
        ,
        midPoints: e => {
            let t = e.x
              , n = e.x + e.width / 2
              , r = e.x + e.width
              , i = e.y
              , a = e.y + e.height / 2
              , o = e.y + e.height;
            return [{
                x: n,
                y: i
            }, {
                x: r,
                y: a
            }, {
                x: n,
                y: o
            }, {
                x: t,
                y: a
            }]
        }
        ,
        pointDistance: (e, t) => {
            let n = 0
              , r = 0;
            return t.x < e.x ? n = e.x - t.x : t.x > q.maxX(e) && (n = t.x - q.maxX(e)),
            t.y < e.y ? r = e.y - t.y : t.y > q.maxY(e) && (r = t.y - q.maxY(e)),
            Pr.distance({
                x: n,
                y: r
            }, {
                x: 0,
                y: 0
            })
        }
        ,
        delta: (e, t) => {
            let n = {
                x: q.minX(e),
                y: q.minY(e)
            }
              , r = {
                x: q.minX(t),
                y: q.minY(t)
            };
            return {
                x: n.x - r.x,
                y: n.y - r.y
            }
        }
        ,
        withMinSize: (e, t) => {
            let {width: n, height: r} = t
              , i = e.width - n
              , a = e.height - r;
            return {
                width: Math.max(e.width, n),
                height: Math.max(e.height, r),
                x: e.width < n ? e.x + i / 2 : e.x,
                y: e.height < r ? e.y + a / 2 : e.y
            }
        }
        ,
        anyPointsOutsideRect: (e, t) => {
            let n = q.minX(e)
              , r = q.minY(e)
              , i = q.maxX(e)
              , a = q.maxY(e);
            for (let e of t)
                if (e.x < n || e.x > i || e.y < r || e.y > a)
                    return !0;
            return !1
        }
        ,
        edges: e => {
            let[t,n,r,i] = q.cornerPoints(e);
            return [Bh(t, n), Bh(n, r), Bh(r, i), Bh(i, t)]
        }
        ,
        rebaseRectOnto: (e, t, n, r) => {
            let i = {
                ...e
            };
            switch (n) {
            case `bottom`:
            case `top`:
                switch (r) {
                case `start`:
                    i.x = t.x;
                    break;
                case `center`:
                    i.x = t.x + t.width / 2 - e.width / 2;
                    break;
                case `end`:
                    i.x = t.x + t.width - e.width;
                    break;
                default:
                    R(r)
                }
                break;
            case `left`:
                i.x = t.x - e.width;
                break;
            case `right`:
                i.x = t.x + t.width;
                break;
            default:
                R(n)
            }
            switch (n) {
            case `left`:
            case `right`:
                switch (r) {
                case `start`:
                    i.y = t.y;
                    break;
                case `center`:
                    i.y = t.y + t.height / 2 - e.height / 2;
                    break;
                case `end`:
                    i.y = t.y + t.height - e.height;
                    break;
                default:
                    R(r)
                }
                break;
            case `top`:
                i.y = t.y - e.height;
                break;
            case `bottom`:
                i.y = t.y + t.height;
                break;
            default:
                R(n)
            }
            return i
        }
    },
    Vh = {
        quickfix: e => ((Oi(e.widthType) || Oi(e.heightType)) && (e.aspectRatio = null),
        z(e.aspectRatio) && (e.left && e.right && (e.widthType = 0),
        e.top && e.bottom && (e.heightType = 0),
        e.left && e.right && e.top && e.bottom && (e.bottom = !1),
        e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
        e.left && e.right && ((e.fixedSize || Oi(e.widthType) || z(e.maxWidth)) && (e.right = !1),
        e.widthType = 0),
        e.top && e.bottom && ((e.fixedSize || Oi(e.heightType) || z(e.maxHeight)) && (e.bottom = !1),
        e.heightType = 0),
        e)
    },
    Hh = {
        fromProperties: e => {
            let {left: t, right: n, top: r, bottom: i, width: a, height: o, centerX: s, centerY: c, aspectRatio: l, autoSize: u} = e
              , d = Vh.quickfix({
                left: z(t) || kr(t),
                right: z(n) || kr(n),
                top: z(r) || kr(r),
                bottom: z(i) || kr(i),
                widthType: ki(a),
                heightType: ki(o),
                aspectRatio: l || null,
                fixedSize: u === !0
            })
              , f = null
              , p = null
              , m = 0
              , h = 0;
            if (d.widthType !== 0 && typeof a == `string`) {
                let e = parseFloat(a);
                a.endsWith(`fr`) ? (m = 3,
                f = e) : a === `auto` ? m = 2 : (m = 1,
                f = e / 100)
            } else
                a !== void 0 && typeof a != `string` && (f = lh.getNumber(a));
            if (d.heightType !== 0 && typeof o == `string`) {
                let e = parseFloat(o);
                o.endsWith(`fr`) ? (h = 3,
                p = e) : o === `auto` ? h = 2 : (h = 1,
                p = parseFloat(o) / 100)
            } else
                o !== void 0 && typeof o != `string` && (p = lh.getNumber(o));
            let g = .5
              , _ = .5;
            return s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
                left: d.left ? lh.getNumber(t) : null,
                right: d.right ? lh.getNumber(n) : null,
                top: d.top ? lh.getNumber(r) : null,
                bottom: d.bottom ? lh.getNumber(i) : null,
                widthType: m,
                heightType: h,
                width: f,
                height: p,
                aspectRatio: d.aspectRatio || null,
                centerAnchorX: g,
                centerAnchorY: _
            }
        }
        ,
        toSize: (e, t, n, r) => {
            let i = null
              , a = null
              , o = t?.sizing ? lh.getNumber(t?.sizing.width) : null
              , s = t?.sizing ? lh.getNumber(t?.sizing.height) : null
              , c = Fi(e.left, e.right);
            if (o && z(c))
                i = o - c;
            else if (n && Oi(e.widthType))
                i = n.width;
            else if (z(e.width))
                switch (e.widthType) {
                case 0:
                    i = e.width;
                    break;
                case 3:
                    i = r ? r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width * e.width : null;
                    break;
                case 1:
                case 4:
                    o && (i = o * e.width);
                    break;
                case 2:
                case 5:
                    break;
                default:
                    R(e.widthType)
                }
            let l = Fi(e.top, e.bottom);
            if (s && z(l))
                a = s - l;
            else if (n && Oi(e.heightType))
                a = n.height;
            else if (z(e.height))
                switch (e.heightType) {
                case 0:
                    a = e.height;
                    break;
                case 3:
                    a = r ? r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height * e.height : null;
                    break;
                case 1:
                case 4:
                    s && (a = s * e.height);
                    break;
                case 2:
                case 5:
                    break;
                default:
                    R(e.heightType)
                }
            return Pi(i, a, e, {
                height: s ?? 0,
                width: o ?? 0
            }, t?.viewport)
        }
        ,
        toRect: (e, t=null, n=null, r=!1, i=null) => {
            let a = e.left || 0
              , o = e.top || 0
              , {width: s, height: c} = Hh.toSize(e, t, n, i)
              , l = t?.positioning ?? null
              , u = l ? lh.getNumber(l.width) : null
              , d = l ? lh.getNumber(l.height) : null;
            e.left === null ? u && e.right !== null ? a = u - e.right - s : u && (a = e.centerAnchorX * u - s / 2) : a = e.left,
            e.top === null ? d && e.bottom !== null ? o = d - e.bottom - c : d && (o = e.centerAnchorY * d - c / 2) : o = e.top;
            let f = {
                x: a,
                y: o,
                width: s,
                height: c
            };
            return r ? q.pixelAligned(f) : f
        }
    },
    Uh = 200,
    Wh = 200,
    Gh = d.createContext({
        parentSize: 0
    }),
    Kh = e => {
        let t = Ui()
          , {parentSize: n, children: r} = e
          , i = d.useMemo( () => ({
            parentSize: n
        }), [Gi(n), Ki(n)]);
        return t === 1 ? r ? S(y, {
            children: r
        }) : null : S(Gh.Provider, {
            value: i,
            children: r
        })
    }
    ,
    qh = (e => (e.Boolean = `boolean`,
    e.Number = `number`,
    e.String = `string`,
    e.RichText = `richtext`,
    e.FusedNumber = `fusednumber`,
    e.Enum = `enum`,
    e.SegmentedEnum = `segmentedenum`,
    e.Color = `color`,
    e.Image = `image`,
    e.ResponsiveImage = `responsiveimage`,
    e.File = `file`,
    e.ComponentInstance = `componentinstance`,
    e.Slot = `slot`,
    e.Array = `array`,
    e.EventHandler = `eventhandler`,
    e.Transition = `transition`,
    e.BoxShadow = `boxshadow`,
    e.Link = `link`,
    e.Date = `date`,
    e.Object = `object`,
    e.Font = `font`,
    e.PageScope = `pagescope`,
    e.ScrollSectionRef = `scrollsectionref`,
    e.CustomCursor = `customcursor`,
    e.Border = `border`,
    e.Cursor = `cursor`,
    e.Padding = `padding`,
    e.BorderRadius = `borderradius`,
    e.Gap = `gap`,
    e.CollectionReference = `collectionreference`,
    e.MultiCollectionReference = `multicollectionreference`,
    e.TrackingId = `trackingid`,
    e.VectorSetItem = `vectorsetitem`,
    e.LinkRelValues = `linkrelvalues`,
    e))(qh || {}),
    Yh = `flexbox-gap-not-supported`,
    Xh = !1,
    Zh = [`[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`, `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`, `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`, `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`, `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`, `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`, `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`, `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`, `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`, `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`, `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`, `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`, `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`, `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`, `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`],
    Qh = (e => (e.Padding = `--framer-input-padding`,
    e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`,
    e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`,
    e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`,
    e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`,
    e.BorderColor = `--framer-input-border-color`,
    e.BorderTopWidth = `--framer-input-border-top-width`,
    e.BorderRightWidth = `--framer-input-border-right-width`,
    e.BorderBottomWidth = `--framer-input-border-bottom-width`,
    e.BorderLeftWidth = `--framer-input-border-left-width`,
    e.BorderStyle = `--framer-input-border-style`,
    e.Background = `--framer-input-background`,
    e.FontFamily = `--framer-input-font-family`,
    e.FontWeight = `--framer-input-font-weight`,
    e.FontSize = `--framer-input-font-size`,
    e.FontColor = `--framer-input-font-color`,
    e.FontStyle = `--framer-input-font-style`,
    e.FontLetterSpacing = `--framer-input-font-letter-spacing`,
    e.FontTextAlignment = `--framer-input-font-text-alignment`,
    e.FontLineHeight = `--framer-input-font-line-height`,
    e.FontOpenType = `--framer-input-font-open-type-features`,
    e.PlaceholderColor = `--framer-input-placeholder-color`,
    e.BoxShadow = `--framer-input-box-shadow`,
    e.FocusedBorderColor = `--framer-input-focused-border-color`,
    e.FocusedBorderWidth = `--framer-input-focused-border-width`,
    e.FocusedBorderStyle = `--framer-input-focused-border-style`,
    e.FocusedBackground = `--framer-input-focused-background`,
    e.FocusedBoxShadow = `--framer-input-focused-box-shadow`,
    e.FocusedTransition = `--framer-input-focused-transition`,
    e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`,
    e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`,
    e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`,
    e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`,
    e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`,
    e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`,
    e.InvalidTextColor = `--framer-input-invalid-text-color`,
    e.IconBackgroundImage = `--framer-input-icon-image`,
    e.IconMaskImage = `--framer-input-icon-mask-image`,
    e.IconColor = `--framer-input-icon-color`,
    e.WrapperHeight = `--framer-input-wrapper-height`,
    e))(Qh || {}),
    J = Qh,
    $h = `framer-form-input`,
    eg = `framer-form-input-wrapper`,
    (e => {
        function t(...e) {
            let t = e[e.length - 1]
              , n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--)
                n = `var(${e[t]}, ${n})`;
            return n
        }
        e.variable = t
    }
    )($i ||= {}),
    $i(`.${$h}`, {
        padding: $i.variable(J.Padding),
        background: `transparent`,
        fontFamily: $i.variable(J.FontFamily),
        fontWeight: $i.variable(J.FontWeight),
        fontSize: $i.variable(J.FontSize),
        fontStyle: $i.variable(J.FontStyle),
        color: $i.variable(J.FontColor),
        fontFeatureSettings: $i.variable(J.FontOpenType),
        border: `none`,
        textOverflow: `ellipsis`,
        whiteSpace: `nowrap`,
        overflow: `hidden`,
        width: `100%`,
        height: $i.variable(J.WrapperHeight, `100%`),
        letterSpacing: $i.variable(J.FontLetterSpacing),
        textAlign: $i.variable(J.FontTextAlignment),
        lineHeight: $i.variable(J.FontLineHeight)
    }),
    $i(`.${$h}:focus-visible`, {
        outline: `none`
    }),
    `${J.BorderTopWidth}${J.BorderRightWidth}${J.BorderBottomWidth}${J.BorderLeftWidth}`,
    `${eg}${J.BorderRadiusTopLeft}${J.BorderRadiusTopRight}${J.BorderRadiusBottomRight}${J.BorderRadiusBottomLeft}${J.BorderColor}${J.BorderTopWidth}${J.BorderRightWidth}${J.BorderBottomWidth}${J.BorderLeftWidth}${J.BorderStyle}${J.FocusedTransition}`,
    tg = 16,
    `${tg}`,
    $i.variable(J.Padding),
    `${tg}`,
    `${tg}`,
    $i.variable(J.IconColor),
    ng = {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`
    },
    rg = {
        display: `inline-block`
    },
    ig = {
        display: `block`
    },
    ag = ( () => [`
        [data-framer-component-type="RichTextContainer"] {
            display: ${ng.display};
            flex-direction: ${ng.flexDirection};
            justify-content: ${ng.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `, `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `, `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes, normal);
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `, `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${B([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${B([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${B([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `, `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `, `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `, `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `, `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `, `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `, `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `, `
        .framer-text[data-text-fill] {
            display: ${rg.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `, `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${B([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `, `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `, `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `, `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${B([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${B([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${B([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `, `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`, `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`, `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${B([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`, `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `, `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${B([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${B([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${B([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `, `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${B([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `, `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `, `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${B([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${B([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${B([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${B([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${B([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${B([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${B([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${B([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${B([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${B([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `, `
        .framer-image.framer-text {
            display: ${ig.display};
            max-width: 100%;
            height: auto;
        }
    `, `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-padding: initial;
        }
    `, `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `, `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `, `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `, `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 10),
        ol.framer-text > li.framer-text:nth-last-child(n + 10) ~ li {
            padding-inline-start: 3ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-inline-start: 4ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-inline-start: 5ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-inline-start: 6ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-inline-start: 7ch;
        }
    `, `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-inline-start: 8ch;
        }
    `, `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `, `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `, `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `, `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            vertical-align: top;
        }
    `, `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `])(),
    og = `--text-truncation-display-inline-for-safari-16`,
    sg = `--text-truncation-display-none-for-safari-16`,
    cg = `--text-truncation-line-break-for-safari-16`,
    lg = [`div.framer-text`, `p.framer-text`, `h1.framer-text`, `h2.framer-text`, `h3.framer-text`, `h4.framer-text`, `h5.framer-text`, `h6.framer-text`, `ol.framer-text`, `ul.framer-text`, `li.framer-text`, `blockquote.framer-text`, `.framer-text.framer-image`],
    ug = `(background: -webkit-named-image(i))`,
    dg = `(contain-intrinsic-size: inherit)`,
    fg = ( () => [`@supports ${ug} and (not ${dg}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${lg.join(`, `)} { display: var(${og}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${lg.map(e => `${e}::after`).join(`, `)} { content: var(${cg}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${sg}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${og}, ${rg.display}) }
    }`])(),
    pg = new Set,
    hg = [`[data-framer-component-type] { position: absolute; }`],
    gg = [`[data-framer-component-type="Text"] { cursor: inherit; }`, `[data-framer-component-text-autosized] * { white-space: pre; }`, `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`, `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`, `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`, `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`, `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`, `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`, `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`, `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`],
    _g = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
    vg = ( () => [`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`, `.${Yh} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`])(),
    yg = ( () => `
.${Yh} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
    bg = ( () => `
.${Yh}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Yh}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
    xg = ( () => `
.${Yh}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Yh}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
    Sg = ( () => [_g, yg, ...vg, bg, xg])(),
    Cg = [`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`],
    wg = [`[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`, `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`],
    Tg = [`[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`, `[data-framer-component-type="NativeScroll"] > * { position: relative; }`, `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`, `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`, `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`, `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`, `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`, `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`],
    Eg = [`[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`],
    Dg = [`[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`],
    Og = [`[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`],
    kg = [`.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`],
    Ag = [`[data-framer-cursor="pointer"] { cursor: pointer; }`, `[data-framer-cursor="grab"] { cursor: grab; }`, `[data-framer-cursor="grab"]:active { cursor: grabbing; }`],
    jg = [`[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`, `[data-framer-generated] * { pointer-events: unset }`],
    Mg = [`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`],
    Ng = [`[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`, `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`, `[data-hide-scrollbars="true"] { scrollbar-width: none; }`],
    Pg = `--framer-will-change-override`,
    Fg = `--framer-will-change-effect-override`,
    Ig = `--framer-will-change-filter-override`,
    Lg = `(background: -webkit-named-image(i))`,
    Rg = `(grid-template-rows: subgrid)`,
    zg = `(position-area: top right)`,
    Bg = e => e ? [`body { ${Pg}: none; }`, `@supports ${Lg} and (not ${Rg}) { body { ${Pg}: transform; } }`] : [`body { ${Pg}: none; ${Fg}: none; }`],
    Vg = e => e ? [`body { ${Ig}: none; }`, `@supports ${Lg} and (not ${zg}) { body { ${Ig}: filter; } }`] : [`body { ${Ig}: none; }`],
    Hg = e => e ? jg : [],
    Ug = [`.svgContainer svg { display: block; }`],
    Wg = `--overflow-clip-fallback`,
    Gg = ( () => [`@supports (not (overflow: clip)) {
        :root { ${Wg}: hidden; }
    }`])(),
    Kg = e => [...Bg(e), ...Vg(e), ...hg, ...gg, ...ag, ...Zh, ...Sg, ...Cg, ...wg, ...Tg, ...Dg, ...Eg, ...Og, ...Ag, ...Hg(e), ...Ug, ...Mg, ...Ng, ...Gg, ...kg, ...fg],
    qg = Kg(!1),
    Jg = Kg(!0),
    Yg = !1,
    Xg = `optional`,
    Zg = e => e,
    Qg = /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
    $g = fa(e => Qg.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91),
    e_ = e => () => {
        Dr(e)
    }
    ,
    t_ = () => () => {}
    ,
    n_ = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
            return e.src ?? ``
        },
        useImageElement(e, t, n) {
            let r = Y.useImageSource(e, t, n);
            return T( () => {
                let t = new Image;
                return t.src = r,
                e.srcSet && (t.srcset = e.srcSet),
                t
            }
            , [r, e.srcSet])
        },
        canRenderOptimizedCanvasImage() {
            return !1
        },
        isOnPageCanvas: !1
    },
    r_ = !1,
    Y = new Proxy(n_,{
        get(e, t, n) {
            return Reflect.has(e, t) ? Reflect.get(e, t, n) : [`getLogger`].includes(String(t)) ? t_() : e_(r_ ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`)
        }
    }),
    a_ = class extends Error {
        constructor(e, t) {
            let n = e ? JSON.stringify(e) : `No error message provided`;
            if (super(n),
            this.message = n,
            t && Error.captureStackTrace)
                Error.captureStackTrace(this, t);
            else
                try {
                    throw Error()
                } catch (e) {
                    this.stack = e.stack
                }
        }
    }
    ,
    o_ = O === void 0 ? void 0 : O.location.hostname,
    s_ = !!(o_ && [`web.framerlocal.com`, `localhost`, `127.0.0.1`, `[::1]`].includes(o_)),
    c_ = ( () => {
        if (!o_)
            return;
        if (s_)
            return {
                main: o_,
                previewLink: void 0
            };
        let e = o_.match(/^(([^.]+\.)?beta\.)?((?:development\.)?framer\.com)$/u);
        if (!(!e || !e[3]))
            return {
                previewLink: e[2] && e[0],
                main: e[3]
            }
    }
    )(),
    c_?.main,
    c_?.main,
    u_ = [`trace`, `debug`, `info`, `warn`, `error`],
    d_ = [`:trace`, `:debug`, `:info`, `:warn`, `:error`],
    f_ = class e {
        constructor(t, n, r) {
            this.logger = t,
            this.level = n,
            this.parts = r,
            N(this, `id`),
            N(this, `time`),
            N(this, `stringPrefix`),
            this.id = e.nextId++,
            this.time = Date.now()
        }
        toMessage() {
            if (this.stringPrefix)
                return this.parts;
            let e = [new Date(this.time).toISOString().substr(-14, 14), u_[this.level] + `: [` + this.logger.id + `]`]
              , t = 0;
            for (; t < this.parts.length; t++) {
                let n = this.parts[t];
                if (typeof n == `string`) {
                    e.push(n);
                    continue
                }
                break
            }
            return this.stringPrefix = e.join(` `),
            this.parts.splice(0, t, this.stringPrefix),
            this.parts
        }
        toString() {
            return this.toMessage().map(e => {
                let t = typeof e;
                if (t === `string`)
                    return e;
                if (t === `function`)
                    return `[Function: ${e.name ?? `unknown`}]`;
                if (e instanceof Error)
                    return e.stack ?? e.toString();
                let n = JSON.stringify(va(e));
                return n?.length > 253 ? n.slice(0, 250) + `...` : n
            }
            ).join(` `)
        }
    }
    ,
    N(f_, `nextId`, 0),
    p_ = f_,
    m_ = `*:app:info,app:info`,
    typeof process < `u` && process.kill && (m_ = ``);
    try {
        O !== void 0 && O.localStorage && (m_ = O.localStorage.logLevel || m_)
    } catch {}
    try {
        typeof process < `u` && (m_ = process.env.DEBUG || m_)
    } catch {}
    try {
        O !== void 0 && Object.assign(O, {
            setLogLevel: wa
        })
    } catch {}
    try {
        O !== void 0 && O.postMessage && O.top === O && O.addEventListener(`message`, e => {
            if (!e.data || typeof e.data != `object`)
                return;
            let {loggerId: t, level: n, parts: r, printed: i} = e.data;
            if (typeof t != `string` || !Array.isArray(r) || r.length < 1 || typeof n != `number`)
                return;
            let a = Ca(t);
            if (n < 0 || n > 5)
                return;
            r[0] = r[0].replace(`[`, `*[`);
            let o = new p_(a,n,r);
            o.stringPrefix = r[0],
            __.push(o),
            !i && (a.level > n || console == null || console.log(...o.toMessage()))
        }
        )
    } catch {}
    try {
        O !== void 0 && O.postMessage && O.parent !== O && !O.location.pathname.startsWith(`/edit`) && (h_ = e => {
            var t;
            try {
                let n = e.toMessage().map(e => va(e))
                  , r = e.logger
                  , i = e.level
                  , a = r.level <= e.level
                  , o = {
                    loggerId: r.id,
                    level: i,
                    parts: n,
                    printed: a
                };
                (t = O.parent) == null || t.postMessage(o, ga().app)
            } catch {}
        }
        )
    } catch {}
    g_ = {},
    __ = [],
    v_ = 1e3,
    y_ = /\/(?<filename>[^/.]+)(?=\.(?:debug\.)?html$)/u,
    x_ = e => {
        let t = {
            ...e,
            logs: xa().slice(-50).map(e => e.toString().slice(0, 600)).join(`
`)
        };
        return e.logs && (console == null || console.warn(`extras.logs is reserved for log replay buffer, use another key`)),
        t
    }
    ,
    S_ = class {
        constructor(e, t) {
            this.id = e,
            N(this, `level`, 3),
            N(this, `didLog`, {}),
            N(this, `errorIsCritical`),
            N(this, `trace`, (...e) => {
                if (this.level > 0)
                    return;
                let t = ba(this, 0, e);
                console == null || console.log(...t.toMessage())
            }
            ),
            N(this, `debug`, (...e) => {
                let t = ba(this, 1, e);
                this.level > 1 || console == null || console.log(...t.toMessage())
            }
            ),
            N(this, `info`, (...e) => {
                let t = ba(this, 2, e);
                this.level > 2 || console == null || console.info(...t.toMessage())
            }
            ),
            N(this, `warn`, (...e) => {
                let t = ba(this, 3, e);
                this.level > 3 || console == null || console.warn(...t.toMessage())
            }
            ),
            N(this, `warnOncePerMinute`, (e, ...t) => {
                let n = this.didLog[e];
                if (n && n > Date.now())
                    return;
                this.didLog[e] = Date.now() + 1e3 * 60,
                t.unshift(e);
                let r = ba(this, 3, t);
                this.level > 3 || console == null || console.warn(...r.toMessage())
            }
            ),
            N(this, `error`, (...e) => {
                let t = ba(this, 4, e);
                this.level > 4 || console == null || console.error(...t.toMessage())
            }
            ),
            N(this, `errorOncePerMinute`, (e, ...t) => {
                let n = this.didLog[e];
                if (n && n > Date.now())
                    return;
                this.didLog[e] = Date.now() + 1e3 * 60,
                t.unshift(e);
                let r = ba(this, 4, t);
                this.level > 4 || console == null || console.error(...r.toMessage())
            }
            ),
            N(this, `reportWithoutLogging`, (e, t, n, r) => {
                let i = x_(t ?? {})
                  , a = ma({
                    caller: this.reportWithoutLogging,
                    error: e,
                    tags: {
                        ...n,
                        handler: `logger`,
                        where: this.id
                    },
                    extras: t,
                    critical: r ?? this.errorIsCritical
                });
                return [i, a]
            }
            ),
            N(this, `reportError`, (e, t, n, r) => {
                let[i,a] = this.reportWithoutLogging(e, t, n, r);
                i ? this.error(a, i) : this.error(a)
            }
            ),
            N(this, `reportErrorOncePerMinute`, (e, t) => {
                if (!Ta(e))
                    return;
                let n = this.didLog[e.message];
                n && n > Date.now() || (this.didLog[e.message] = Date.now() + 1e3 * 60,
                this.reportError(e, t))
            }
            ),
            N(this, `reportCriticalError`, (e, t, n) => this.reportError(e, t, n, !0)),
            this.errorIsCritical = t ?? (e === `fatal` || e.endsWith(`:fatal`))
        }
        extend(e) {
            let t = this.id + `:` + e;
            return Ca(t)
        }
        getBufferedMessages() {
            return __.filter(e => e.logger === this)
        }
        setLevel(e) {
            let t = this.level;
            return this.level = e,
            t
        }
        isLoggingTraceMessages() {
            return this.level >= 0
        }
    }
    ,
    C_ = `config/dependencies`,
    w_ = `importMap.json`,
    T_ = `dependencies.json`,
    `${C_}${w_}`,
    `${C_}${T_}`,
    E_ = !1,
    (e => {
        function t(e, ...t) {
            return e.concat(t)
        }
        e.push = t;
        function n(e) {
            return e.slice(0, -1)
        }
        e.pop = n;
        function r(e, ...t) {
            return t.concat(e)
        }
        e.unshift = r;
        function i(e, t, ...n) {
            let r = e.length;
            if (t < 0 || t > r)
                throw Error(`index out of range: ` + t);
            let i = e.slice();
            return i.splice(t, 0, ...n),
            i
        }
        e.insert = i;
        function a(e, t, n) {
            let r = e.length;
            if (t < 0 || t >= r)
                throw Error(`index out of range: ` + t);
            let i = Array.isArray(n) ? n : [n]
              , a = e.slice();
            return a.splice(t, 1, ...i),
            a
        }
        e.replace = a;
        function o(e, t) {
            let n = e.length;
            if (t < 0 || t >= n)
                throw Error(`index out of range: ` + t);
            let r = e.slice();
            return r.splice(t, 1),
            r
        }
        e.remove = o;
        function s(e, t, n) {
            let r = e.length;
            if (t < 0 || t >= r)
                throw Error(`from index out of range: ` + t);
            if (n < 0 || n >= r)
                throw Error(`to index out of range: ` + n);
            let i = e.slice();
            if (n === t)
                return i;
            let a = i[t];
            return t < n ? (i.splice(n + 1, 0, a),
            i.splice(t, 1)) : (i.splice(t, 1),
            i.splice(n, 0, a)),
            i
        }
        e.move = s;
        function c(e, t) {
            let n = []
              , r = Math.min(e.length, t.length);
            for (let i = 0; i < r; i++)
                n.push([e[i], t[i]]);
            return n
        }
        e.zip = c;
        function l(e, t, n) {
            let r = e.slice()
              , i = r[t];
            return i === void 0 || (r[t] = n(i)),
            r
        }
        e.update = l;
        function u(e) {
            return Array.from(new Set(e))
        }
        e.unique = u;
        function d(e, ...t) {
            return Array.from(new Set([...e, ...t.flat()]))
        }
        e.union = d;
        function f(e, t) {
            return e.filter(t)
        }
        e.filter = f
    }
    )(D_ ||= {}),
    O_ = Object.prototype.hasOwnProperty,
    (e => {
        function t(e, t) {
            for (let n of Object.keys(e))
                Da(t, n) || delete e[n];
            for (let n of Object.keys(t))
                e[n] === void 0 && (e[n] = t[n]);
            return Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            E_ && Object.freeze(e),
            e
        }
        e.morphUsingTemplate = t;
        function n(e, t) {
            t && Object.assign(e, t),
            E_ && Object.freeze(e)
        }
        e.writeOnce = n;
        function r(e, t) {
            let n = Object.assign(Object.create(Object.getPrototypeOf(e)), e, t);
            return E_ && Object.freeze(n),
            n
        }
        e.update = r
    }
    )(k_ ||= {}),
    (e => {
        function t(e, ...t) {
            return new Set([...e, ...t])
        }
        e.add = t;
        function n(e, ...t) {
            let n = new Set(e);
            for (let e of t)
                n.delete(e);
            return n
        }
        e.remove = n;
        function r(...e) {
            let t = new Set;
            for (let n of e)
                for (let e of n)
                    t.add(e);
            return t
        }
        e.union = r;
        function i(t, n) {
            return t.has(n) ? e.remove(t, n) : e.add(t, n)
        }
        e.toggle = i
    }
    )(A_ ||= {}),
    (e => {
        function t(e, ...t) {
            let n = new Map;
            e.forEach( (e, t) => n.set(t, e));
            let r = !1;
            for (let e of t) {
                if (!e)
                    continue;
                e.forEach( (e, t) => n.set(t, e)),
                r = !0
            }
            return r ? n : e
        }
        e.merge = t;
        function n(e, t, n) {
            let r = new Map(e);
            return r.set(t, n),
            r
        }
        e.set = n;
        function r(e, t) {
            let n = new Map(e);
            return n.delete(t),
            n
        }
        e.remove = r
    }
    )(j_ ||= {}),
    M_ = class extends Promise {
        constructor() {
            let e, t;
            super( (n, r) => {
                e = n,
                t = r
            }
            ),
            N(this, `_state`, `initial`),
            N(this, `resolve`),
            N(this, `reject`),
            this.resolve = t => {
                this._state = `fulfilled`,
                e(t)
            }
            ,
            this.reject = e => {
                this._state = `rejected`,
                t(e)
            }
        }
        get state() {
            return this._state
        }
        pending() {
            return this._state = `pending`,
            this
        }
        isResolved() {
            return this._state === `fulfilled` || this._state === `rejected`
        }
    }
    ,
    M_.prototype.constructor = Promise,
    O !== void 0 && O.scheduler && (`yield`in O.scheduler,
    `postTask`in O.scheduler,
    `isInputPending`in O.scheduler),
    Ca(`task-queue`),
    N_ = [1, 2, 2.2],
    P_ = [512, 1024, 2048, 4096],
    F_ = 512,
    I_ = {
        position: `absolute`,
        borderRadius: `inherit`,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    L_ = `src`,
    R_ = {
        isImageObject: function(e) {
            return !e || typeof e == `string` ? !1 : typeof e == `object` && L_ in e
        }
    },
    z_ = b === void 0 ? void 0 : b,
    B_ = () => typeof document == `object`,
    V_ = () => z_ && /Chrome/u.test(z_.userAgent) && /Google Inc/u.test(z_.vendor) && !G_(),
    H_ = () => z_ && /Safari/u.test(z_.userAgent) && /Apple Computer/u.test(z_.vendor),
    U_ = () => z_ && /Firefox\/\d+\.\d+$/u.test(z_.userAgent),
    W_ = () => z_ && /FramerX/u.test(z_.userAgent),
    G_ = () => z_ && /Edg\//u.test(z_.userAgent),
    K_ = /iPhone|iPod|iPad/iu,
    q_ = /MacIntel/iu,
    J_ = () => z_ ? K_.test(z_.platform) ? !0 : q_.test(z_.platform) && z_.maxTouchPoints && z_.maxTouchPoints > 2 : !1,
    Y_ = () => Z_() === `desktop`,
    X_ = () => !1,
    Z_ = () => z_ && /tablet|iPad|Nexus 9/i.test(z_.userAgent) ? `tablet` : z_ && /mobi/iu.test(z_.userAgent) ? `phone` : `desktop`,
    Q_ = V_(),
    $_ = typeof document < `u` ? f : D,
    ev = d.createContext(!1),
    tv = `data-framer-size-compatibility-wrapper`,
    nv = `0.000001px`,
    rv = ( () => ` translateZ(${nv})`)(),
    iv = ( () => W_() || H_() || X_())(),
    av = ( () => {
        class e extends r {
            constructor() {
                super(...arguments),
                N(this, `layerElement`, null),
                N(this, `setLayerElement`, e => {
                    this.layerElement = e
                }
                )
            }
            static applyWillChange(e, t, n) {
                e.willChangeTransform && (n ? co(t) : lo(t))
            }
            shouldComponentUpdate(e, t) {
                return e._needsMeasure || this.state !== t || !rt(this.props, e)
            }
            componentDidUpdate(e) {
                Zg(this.props).clip && Zg(this.props).radius === 0 && Zg(e).radius !== 0 && fo(this.layerElement, `overflow`, `hidden`, !1)
            }
        }
        return N(e, `defaultProps`, {}),
        e
    }
    )(),
    ov = e => {
        let t = 0, n, r;
        if (e.length === 0)
            return t;
        for (n = 0; n < e.length; n++)
            r = e.charCodeAt(n),
            t = (t << 5) - t + r,
            t |= 0;
        return t
    }
    ,
    sv = {
        hueRotate: (e, t) => G.toHslString(G.hueRotate(G(e), t)),
        setAlpha: (e, t) => G.toRgbString(G.alpha(G(e), t)),
        getAlpha: e => {
            let t = $r(e);
            return t ? t.a : 1
        }
        ,
        multiplyAlpha: (e, t) => G.toRgbString(G.multiplyAlpha(G(e), t)),
        toHexValue: e => G.toHex(G(e)).toUpperCase(),
        toHex: e => G.toHexString(G(e)).toUpperCase(),
        toRgb: e => G.toRgb(G(e)),
        toRgbString: e => G.toRgbString(G(e)),
        toHSV: e => G.toHsv(G(e)),
        toHSL: e => G.toHsl(G(e)),
        toHslString: e => G.toHslString(G(e)),
        toHsvString: e => G.toHsvString(G(e)),
        hsvToHSLString: e => G.toHslString(G(Vr(e.h, e.s, e.v, e.a))),
        hsvToHexValue: e => G.toHex(G(Vr(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: e => G.toHexString(G(Vr(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: e => G.toRgbString(G(Vr(e.h, e.s, e.v, e.a))),
        hsvToString: e => Vr(e.h, e.s, e.v),
        rgbaToString: e => G.toRgbString(G(e)),
        rgbToHexValue: e => G.toHex(G(e)),
        rgbToHexString: e => G.toHexString(G(e)),
        hslToString: e => G.toHslString(G(e)),
        hslToRgbString: e => G.toRgbString(G(e)),
        toColorPickerSquare: e => G.toRgbString(G({
            h: e,
            s: 1,
            l: .5,
            a: 1
        })),
        isValid: e => G(e).isValid !== !1,
        equals: (e, t) => G.isP3String(e) || G.isP3String(t) ? e === t : (typeof e == `string` && (e = G(e)),
        typeof t == `string` && (t = G(t)),
        G.equal(e, t)),
        toHexOrRgbaString: e => {
            let t = G(e);
            return t.a === 1 ? G.toHexString(t) : G.toRgbString(t)
        }
        ,
        toFormatString: e => G.isP3String(e) ? e : G.toRgbString(G(e))
    },
    cv = /var\(.+\)/u,
    lv = new Map,
    uv = [`stops`],
    dv = [`start`, `end`],
    fv = [`angle`, `alpha`],
    pv = {
        isLinearGradient: e => I(e) && fv.every(t => t in e) && (bo(e) || yo(e)),
        hash: e => e.angle ^ vo(e, e.alpha),
        toCSS: (e, t, n) => {
            let r = _o(e, e.alpha)
              , i = t === void 0 ? e.angle : t
              , a = r.map(e => `${n?.(e.value) ?? e.value} ${e.position * 100}%`);
            return `linear-gradient(${i}deg, ${a.join(`, `)})`
        }
    },
    mv = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`],
    hv = {
        isRadialGradient: e => I(e) && mv.every(t => t in e) && (bo(e) || yo(e)),
        hash: e => e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ vo(e, e.alpha),
        toCSS: (e, t) => {
            let {alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o} = e
              , s = _o(e, n)
              , c = s.map( (e, n) => {
                let r = s[n + 1]
                  , i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
                return `${t?.(e.value) ?? e.value} ${i * 100}%`
            }
            );
            return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`
        }
    },
    gv = [`onClick`, `onDoubleClick`, `onMouse`, `onMouseDown`, `onMouseUp`, `onTapDown`, `onTap`, `onTapUp`, `onPointer`, `onPointerDown`, `onPointerUp`, `onTouch`, `onTouchDown`, `onTouchUp`],
    _v = ( () => new Set([...gv, ...gv.map(e => `${e}Capture`)]))(),
    vv = `overflow`,
    yv = {
        x: 0,
        y: 0,
        width: 200,
        height: 200
    },
    bv = new Set([`width`, `height`, `opacity`, `overflow`, `radius`, `background`, `color`, `x`, `y`, `z`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `scale`, `scaleX`, `scaleY`, `skew`, `skewX`, `skewY`, `originX`, `originY`, `originZ`]),
    xv = s(function(e, t) {
        let {name: n, center: r, border: i, _border: a, __portal: o} = e
          , {props: s, children: c} = $a(e)
          , l = jo(s)
          , u = to(e)
          , d = Eo(e)
          , f = C(null)
          , p = t ?? f
          , m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` ? !0 : void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": Zg(e)[`data-framer-offset-parent-id`]
        };
        !Mo(e) && n && (Zg(m)[`data-framer-name`] = n);
        let[h,g] = Ao(s)
          , _ = ko(s)
          , v = Yi(_);
        r && !(g && !v && Li(_)) ? (l.transformTemplate ||= eo(r),
        Object.assign(m, Za(r))) : l.transformTemplate ||= void 0,
        oo(e, p);
        let b = qa(e)
          , x = w(ev)
          , ee = No(s, _, g, x)
          , T = qi(te(y, {
            children: [b ? S(Ua, {
                alt: e.alt ?? ``,
                image: b,
                containerSize: g ?? void 0,
                nodeId: e.id && Qa(e.id),
                layoutId: u
            }) : null, c, S(Ga, {
                ...a,
                border: i,
                layoutId: u
            })]
        }), ee)
          , E = Ya(e.as)
          , D = Ja(b);
        return e.fitImageDimension && D && (h[e.fitImageDimension] = `auto`,
        h.aspectRatio = D.width / D.height),
        te(E, {
            ...m,
            ...l,
            layoutId: u,
            style: h,
            ref: p,
            children: [T, o]
        })
    }),
    Sv = s(function(e, t) {
        let {visible: n=!0} = e;
        return n ? S(xv, {
            ...e,
            ref: t
        }) : null
    }),
    Cv = `__LAYOUT_TREE_ROOT`,
    wv = d.createContext({
        schedulePromoteTree: () => {}
        ,
        scheduleProjectionDidUpdate: () => {}
        ,
        initLead: () => {}
    }),
    Tv = class extends r {
        constructor() {
            super(...arguments),
            N(this, `shouldAnimate`, !1),
            N(this, `transition`),
            N(this, `lead`),
            N(this, `follow`),
            N(this, `scheduledPromotion`, !1),
            N(this, `scheduledDidUpdate`, !1),
            N(this, `scheduleProjectionDidUpdate`, () => {
                this.scheduledDidUpdate = !0
            }
            ),
            N(this, `schedulePromoteTree`, (e, t, n) => {
                this.follow = this.lead,
                this.shouldAnimate = n,
                this.lead = e,
                this.transition = t,
                this.scheduledPromotion = !0
            }
            ),
            N(this, `initLead`, (e, t) => {
                this.follow = this.lead,
                this.lead = e,
                this.follow && t && (this.follow.layoutMaybeMutated = !0)
            }
            ),
            N(this, `sharedLayoutContext`, {
                schedulePromoteTree: this.schedulePromoteTree,
                scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
                initLead: this.initLead
            })
        }
        getSnapshotBeforeUpdate() {
            if (!this.scheduledPromotion || !this.lead || !this.follow)
                return null;
            let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
            return this.lead.projectionNodes.forEach(t => {
                t?.promote({
                    needsReset: e,
                    transition: this.shouldAnimate ? this.transition : void 0,
                    preserveFollowOpacity: t.options.layoutId === Cv && !this.follow?.isExiting
                })
            }
            ),
            this.shouldAnimate ? this.follow.layoutMaybeMutated = !0 : this.scheduleProjectionDidUpdate(),
            this.lead.layoutMaybeMutated = !1,
            this.transition = void 0,
            this.scheduledPromotion = !1,
            null
        }
        componentDidUpdate() {
            var e;
            if (!this.lead)
                return null;
            this.scheduledDidUpdate &&= ((e = this.lead.rootProjectionNode?.root) == null || e.didUpdate(),
            !1)
        }
        render() {
            return S(wv.Provider, {
                value: this.sharedLayoutContext,
                children: this.props.children
            })
        }
    }
    ,
    Ev = {
        width: `100%`,
        height: `100%`,
        backgroundColor: `none`
    },
    Dv = class {
        constructor(e) {
            N(this, `sharedIntersectionObserver`),
            N(this, `callbacks`, new WeakMap),
            this.sharedIntersectionObserver = new IntersectionObserver(this.intersectionObserverCallback.bind(this),e)
        }
        intersectionObserverCallback(e, t) {
            for (let n of e) {
                let e = this.callbacks.get(n.target);
                e && e(n, t)
            }
        }
        observeElementWithCallback(e, t) {
            this.sharedIntersectionObserver && (this.sharedIntersectionObserver.observe(e),
            this.callbacks.set(e, t))
        }
        unobserve(e) {
            this.sharedIntersectionObserver && (this.sharedIntersectionObserver.unobserve(e),
            this.callbacks.delete(e))
        }
        get root() {
            return this.sharedIntersectionObserver?.root
        }
    }
    ,
    Ov = k(new Map),
    kv = d.createContext(null),
    Av = class extends r {
        constructor() {
            super(...arguments),
            N(this, `layoutMaybeMutated`, !1),
            N(this, `projectionNodes`, new Map),
            N(this, `rootProjectionNode`),
            N(this, `isExiting`),
            N(this, `shouldPreserveFollowOpacity`, e => e.options.layoutId === Cv && !this.props.isExiting),
            N(this, `switchLayoutGroupContext`, {
                register: e => this.addChild(e),
                deregister: e => this.removeChild(e),
                transition: this.props.isLead !== void 0 && this.props.animatesLayout ? this.props.transition : void 0,
                shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity
            })
        }
        componentDidMount() {
            this.props.isLead && this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout)
        }
        shouldComponentUpdate(e) {
            let {isLead: t, isExiting: n, isOverlayed: r, animatesLayout: i, transition: a, sharedLayoutContext: o} = e;
            if (this.isExiting = n,
            t === void 0)
                return !0;
            let s = !this.props.isLead && t
              , c = this.props.isExiting && !n
              , l = s || c
              , u = !!this.props.isLead && !t
              , d = this.props.isOverlayed !== r;
            return (l || u) && this.projectionNodes.forEach(e => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
        }
        addChild(e) {
            let t = e.options.layoutId;
            t && (this.projectionNodes.set(t, e),
            this.setRootChild(e))
        }
        setRootChild(e) {
            if (!this.rootProjectionNode)
                return this.rootProjectionNode = e;
            this.rootProjectionNode = this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e
        }
        removeChild(e) {
            let t = e.options.layoutId;
            t && this.projectionNodes.delete(t)
        }
        render() {
            return S(de.Provider, {
                value: this.switchLayoutGroupContext,
                children: this.props.children
            })
        }
    }
    ,
    jv = e => {
        let t = d.useContext(wv);
        return S(Av, {
            ...e,
            sharedLayoutContext: t
        })
    }
    ,
    Mv = d.createContext(!0),
    Nv = k({
        register: () => {}
        ,
        deregister: () => {}
    }),
    Pv = ({isCurrent: e, isOverlayed: t, children: n}) => {
        let r = Uo()
          , i = E(e => {
            if (r.has(e)) {
                console.warn(`NavigationTargetWrapper: already registered`);
                return
            }
            r.set(e, void 0)
        }
        , [r])
          , a = E(e => {
            r.get(e)?.(),
            r.delete(e)
        }
        , [r])
          , o = C({
            register: i,
            deregister: a
        }).current;
        return D( () => (r.forEach( (n, i) => {
            let a = i(e, t);
            r.set(i, dt(a) ? a : void 0)
        }
        ),
        () => {
            r.forEach( (e, t) => {
                e && (e(),
                r.set(t, void 0))
            }
            )
        }
        ), [e, t, r]),
        S(Nv.Provider, {
            value: o,
            children: n
        })
    }
    ,
    Fv = d.memo(function({isLayeredContainer: e, isCurrent: t, isPrevious: n, isOverlayed: r=!1, visible: i, transitionProps: a, children: o, backdropColor: s, onTapBackdrop: c, backfaceVisible: l, exitBackfaceVisible: u, animation: d, exitAnimation: f, instant: p, initialProps: m, exitProps: h, position: g={
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, withMagicMotion: _, index: v, areMagicMotionLayersPresent: y, id: b, isInitial: x}) {
        let ee = Fe()
          , T = w(ue)
          , {persistLayoutIdCache: E} = w(Ph)
          , O = C({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Ko({}, m, a)
        })
          , ne = C(null)
          , re = T !== null && !T.isPresent;
        t && O.current.wasCurrent === void 0 && E(),
        D( () => {
            if (e || !ee)
                return;
            if (re) {
                O.current = {
                    ...O.current,
                    wasBeingRemoved: re
                };
                return
            }
            let {wasPrevious: r, wasCurrent: i} = O.current
              , o = t && !i || !re && O.current.wasBeingRemoved && t
              , s = n && !r
              , c = Ko(O.current.origins, m, a)
              , l = O.current.wasReset;
            o || s ? (ee.stop(),
            ee.start({
                zIndex: v,
                ...c,
                ...a
            }),
            l = !1) : l === !1 && (ee.stop(),
            ee.set({
                zIndex: v,
                ...Iv,
                opacity: 0
            }),
            l = !0),
            O.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c
            }
        }
        , [t, n, re]);
        let k = p ? {
            type: !1
        } : `velocity`in d ? {
            ...d,
            velocity: 0
        } : d
          , ie = p ? {
            type: !1
        } : f || d
          , ae = {
            ...g
        };
        (ae.left === void 0 || ae.right === void 0) && (ae.width = `auto`),
        (ae.top === void 0 || ae.bottom === void 0) && (ae.height = `auto`);
        let oe = (qo(a) || qo(m)) && (e || t || n) ? 1200 : void 0
          , se = {
            ...Iv,
            ...O.current.origins
        }
          , ce = e ? {
            initial: {
                ...se,
                ...m
            },
            animate: {
                ...se,
                ...a,
                transition: k
            },
            exit: {
                ...se,
                ...h,
                transition: d
            }
        } : {
            animate: ee,
            exit: {
                ...se,
                ...h,
                transition: ie
            }
        }
          , le = !(re || y === !1)
          , de = !!t && le
          , fe = t && x;
        return te(Sv, {
            "data-framer-component-type": `NavigationContainerWrapper`,
            width: `100%`,
            height: `100%`,
            style: {
                position: `absolute`,
                transformStyle: `flat`,
                backgroundColor: `transparent`,
                overflow: `hidden`,
                zIndex: e || re || t && _ ? v : void 0,
                pointerEvents: void 0,
                visibility: i ? `visible` : `hidden`,
                perspective: oe
            },
            children: [e && S(Sv, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: {
                    opacity: p && i ? 1 : 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                backgroundColor: s || `transparent`,
                onTap: re ? void 0 : c
            }), S(Sv, {
                ...ae,
                ...ce,
                transition: {
                    default: k,
                    originX: {
                        type: !1
                    },
                    originY: {
                        type: !1
                    },
                    originZ: {
                        type: !1
                    }
                },
                backgroundColor: `transparent`,
                backfaceVisible: re ? u : l,
                "data-framer-component-type": `NavigationContainer`,
                "data-framer-is-current-navigation-target": !!t,
                style: {
                    pointerEvents: void 0,
                    opacity: fe || e || t && _ ? 1 : 0
                },
                "data-is-present": le ? void 0 : !1,
                ref: ne,
                children: S(kv.Provider, {
                    value: ne,
                    children: S(Mv.Provider, {
                        value: de,
                        children: S(Pv, {
                            isCurrent: de,
                            isOverlayed: r,
                            children: S(jv, {
                                isLead: t,
                                animatesLayout: !!_,
                                transition: k,
                                isExiting: !le,
                                isOverlayed: r,
                                id: b,
                                children: o
                            })
                        })
                    })
                })
            })]
        })
    }, Go),
    Iv = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: .5,
        originY: .5,
        originZ: 0,
        opacity: 1
    },
    Lv = class {
        constructor() {
            N(this, `warning`, () => {
                Dr(`The Navigator API is only available inside of Framer: https://www.framer.com/`)
            }
            ),
            N(this, `goBack`, () => this.warning()),
            N(this, `instant`, () => this.warning()),
            N(this, `fade`, () => this.warning()),
            N(this, `push`, () => this.warning()),
            N(this, `modal`, () => this.warning()),
            N(this, `overlay`, () => this.warning()),
            N(this, `flip`, () => this.warning()),
            N(this, `customTransition`, () => this.warning()),
            N(this, `magicMotion`, () => this.warning())
        }
    }
    ,
    Rv = k(new Lv),
    zv = {
        Fade: {
            exit: {
                opacity: 0
            },
            enter: {
                opacity: 0
            }
        },
        PushLeft: {
            exit: {
                x: `-30%`
            },
            enter: {
                x: `100%`
            }
        },
        PushRight: {
            exit: {
                x: `30%`
            },
            enter: {
                x: `-100%`
            }
        },
        PushUp: {
            exit: {
                y: `-30%`
            },
            enter: {
                y: `100%`
            }
        },
        PushDown: {
            exit: {
                y: `30%`
            },
            enter: {
                y: `-100%`
            }
        },
        Instant: {
            animation: {
                type: !1
            },
            enter: {
                opacity: 0
            }
        },
        Modal: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                center: !0
            },
            enter: {
                opacity: 0,
                scale: 1.2
            }
        },
        OverlayLeft: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                right: 0,
                top: 0,
                bottom: 0
            },
            enter: {
                x: `100%`
            }
        },
        OverlayRight: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                left: 0,
                top: 0,
                bottom: 0
            },
            enter: {
                x: `-100%`
            }
        },
        OverlayUp: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                bottom: 0,
                left: 0,
                right: 0
            },
            enter: {
                y: `100%`
            }
        },
        OverlayDown: {
            overCurrentContext: !0,
            goBackOnTapOutside: !0,
            position: {
                top: 0,
                left: 0,
                right: 0
            },
            enter: {
                y: `-100%`
            }
        },
        FlipLeft: {
            backfaceVisible: !1,
            exit: {
                rotateY: -180
            },
            enter: {
                rotateY: 180
            }
        },
        FlipRight: {
            backfaceVisible: !1,
            exit: {
                rotateY: 180
            },
            enter: {
                rotateY: -180
            }
        },
        FlipUp: {
            backfaceVisible: !1,
            exit: {
                rotateX: 180
            },
            enter: {
                rotateX: -180
            }
        },
        FlipDown: {
            backfaceVisible: !1,
            exit: {
                rotateX: -180
            },
            enter: {
                rotateX: 180
            }
        },
        MagicMotion: {
            withMagicMotion: !0
        }
    },
    Bv = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null
    }),
    Vv = dp(Iv),
    Hv = d.createContext(void 0),
    Uv = d.createContext(void 0),
    Wv = ( () => {
        var e, t, n, i, a, o, s;
        return t = class extends r {
            constructor(t) {
                super(t),
                ge(this, n),
                ge(this, e, null),
                N(this, `state`, Bv()),
                ge(this, o, e => {
                    if (!this.props.enabled && this.state.history.length > 0)
                        return;
                    let t = Zo(this.state, e);
                    if (!t)
                        return;
                    let {skipLayoutAnimation: n} = this.props
                      , r = t.history[t.current]
                      , i = e.type === `add` && e.transition.withMagicMotion || e.type === `forward` && r?.transition.withMagicMotion || e.type === `remove` && !!t.previousTransition
                      , a = () => {
                        var e;
                        this.setState(t),
                        r?.key && ((e = this.context) == null || e.call(this, r.key))
                    }
                    ;
                    n && !i ? n(a) : a()
                }
                ),
                N(this, `goBack`, () => {
                    if (!M(this, n, a).call(this))
                        return _e(this, e, globalThis.event?.timeStamp || null),
                        this.state.currentOverlay === -1 ? j(this, o).call(this, {
                            type: `remove`
                        }) : j(this, o).call(this, {
                            type: `removeOverlay`
                        })
                }
                );
                let r = this.props.children;
                if (!r || !Ei(r) || !Ti(r))
                    return;
                let i = {
                    ...zv.Instant
                }
                  , s = {
                    type: `add`,
                    key: r.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                    transition: i,
                    component: r
                }
                  , c = Zo(this.state, s);
                c && (this.state = c)
            }
            componentDidMount() {
                var e;
                let t = this.state.history[this.state.current];
                t && ((e = this.context) == null || e.call(this, t.key))
            }
            UNSAFE_componentWillReceiveProps(e) {
                let t = e.children;
                if (!Ei(t) || !Ti(t))
                    return;
                let r = t.key?.toString();
                r && (this.state.history.length === 0 ? M(this, n, s).call(this, t, zv.Instant) : j(this, o).call(this, {
                    type: `update`,
                    key: r,
                    component: t
                }))
            }
            componentWillUnmount() {
                var e, t;
                (t = (e = this.props).resetProjection) == null || t.call(e)
            }
            instant(e) {
                M(this, n, s).call(this, e, zv.Instant, void 0)
            }
            fade(e, t) {
                M(this, n, s).call(this, e, zv.Fade, t)
            }
            push(e, t) {
                M(this, n, s).call(this, e, Jo(t), t)
            }
            modal(e, t) {
                M(this, n, s).call(this, e, zv.Modal, t)
            }
            overlay(e, t) {
                M(this, n, s).call(this, e, Yo(t), t)
            }
            flip(e, t) {
                M(this, n, s).call(this, e, Xo(t), t)
            }
            magicMotion(e, t) {
                M(this, n, s).call(this, e, zv.MagicMotion, t)
            }
            customTransition(e, t) {
                M(this, n, s).call(this, e, t)
            }
            render() {
                let e = M(this, n, i).call(this, {
                    overCurrentContext: !1
                })
                  , t = M(this, n, i).call(this, {
                    overCurrentContext: !0
                })
                  , r = ms(t)
                  , a = t.current > -1
                  , o = this.state.history.length === 1
                  , s = [];
                for (let[t,n] of Object.entries(this.state.containers)) {
                    let r = this.state.containerIndex[t];
                    L(r !== void 0, `Container's index must be registered`);
                    let i = this.state.containerVisualIndex[t];
                    L(i !== void 0, `Container's visual index must be registered`);
                    let c = this.state.containerIsRemoved[t]
                      , l = this.state.history[r]
                      , u = this.state.transitionForContainer[t]
                      , d = r === this.state.current
                      , f = r === this.state.previous
                      , p = d ? !1 : c
                      , m = l?.transition?.withMagicMotion || d && !!this.state.previousTransition;
                    s.push(S(Fv, {
                        id: t,
                        index: i,
                        isInitial: o,
                        isCurrent: d,
                        isPrevious: f,
                        isOverlayed: a,
                        visible: d || f,
                        position: l?.transition?.position,
                        instant: ws(r, e),
                        transitionProps: u,
                        animation: Cs(r, e),
                        backfaceVisible: xs(r, e),
                        exitAnimation: l?.transition?.animation,
                        exitBackfaceVisible: l?.transition?.backfaceVisible,
                        exitProps: l?.transition?.enter,
                        withMagicMotion: m,
                        areMagicMotionLayersPresent: p ? !1 : void 0,
                        children: S(Po, {
                            children: Es({
                                component: n,
                                transition: l?.transition
                            })
                        })
                    }, t))
                }
                let c = this.state.overlayStack.map( (e, n) => S(Fv, {
                    isLayeredContainer: !0,
                    isCurrent: n === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: bs(n, t),
                    transitionProps: Ss(n, t),
                    instant: ws(n, t, !0),
                    animation: Cs(n, t),
                    exitProps: e.transition.enter,
                    visible: Ts(n, t),
                    backdropColor: vs(e.transition),
                    backfaceVisible: ys(n, t),
                    onTapBackdrop: Ds(e.transition, this.goBack),
                    index: this.state.current + 1 + n,
                    children: Es({
                        component: e.component,
                        transition: e.transition
                    })
                }, e.key));
                return S(Sv, {
                    "data-framer-component-type": `NavigationRoot`,
                    top: 0,
                    left: 0,
                    width: `100%`,
                    height: `100%`,
                    position: `relative`,
                    style: {
                        overflow: `hidden`,
                        backgroundColor: `unset`,
                        pointerEvents: void 0,
                        ...this.props.style
                    },
                    children: S(Rv.Provider, {
                        value: this,
                        children: te(Uv.Provider, {
                            value: o,
                            children: [S(Fv, {
                                isLayeredContainer: !0,
                                position: void 0,
                                initialProps: {},
                                instant: !1,
                                transitionProps: hs(r),
                                animation: gs(r),
                                backfaceVisible: _s(r),
                                visible: !0,
                                backdropColor: void 0,
                                onTapBackdrop: void 0,
                                index: 0,
                                children: S(vi, {
                                    children: S(Tv, {
                                        children: S(ie, {
                                            presenceAffectsLayout: !1,
                                            children: s
                                        })
                                    })
                                })
                            }), S(ie, {
                                children: c
                            })]
                        })
                    })
                })
            }
        }
        ,
        e = new WeakMap,
        n = new WeakSet,
        i = function(e) {
            let {current: t, previous: n, currentOverlay: r, previousOverlay: i} = this.state;
            return e.overCurrentContext ? {
                current: r,
                previous: i,
                history: this.state.overlayStack
            } : {
                current: t,
                previous: n,
                history: this.state.history
            }
        }
        ,
        a = function() {
            return globalThis.event ? j(this, e) === globalThis.event.timeStamp : !1
        }
        ,
        o = new WeakMap,
        s = function(t, r, i) {
            if (M(this, n, a).call(this) || (_e(this, e, globalThis.event?.timeStamp || null),
            !t || !Ei(t) || !Ti(t)))
                return;
            let s = {
                ...r,
                ...i
            };
            if (s.overCurrentContext)
                return j(this, o).call(this, {
                    type: `addOverlay`,
                    transition: s,
                    component: t
                });
            let c = t.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            j(this, o).call(this, {
                type: `add`,
                key: c,
                transition: s,
                component: t
            })
        }
        ,
        N(t, `defaultProps`, {
            enabled: !0
        }),
        N(t, `contextType`, Hv),
        t
    }
    )(),
    Gv = {
        stiffness: 500,
        damping: 50,
        restDelta: 1,
        type: `spring`
    },
    ye(cp(), 1),
    ye(cp(), 1),
    ye(cp(), 1),
    Kv = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    qv = Symbol(`private`),
    Jv = ( () => {
        function e(e={}, t=!1, n=!0) {
            let r = {
                [qv]: {
                    makeAnimatables: t,
                    observeAnimatables: n,
                    observers: new ch,
                    reset() {
                        for (let t in i)
                            if (Kv(i, t)) {
                                let n = Kv(e, t) ? Zg(e)[t] : void 0;
                                n === void 0 ? delete i[t] : i[t] = n
                            }
                    },
                    transactions: new Set
                }
            }
              , i = new Proxy(r,Xv);
            return Object.assign(i, e),
            i
        }
        return e.resetObject = e => e[qv].reset(),
        e.addObserver = (e, t) => e[qv].observers.add(t),
        e
    }
    )(),
    Yv = class {
        constructor() {
            N(this, `set`, (e, t, n, r) => {
                if (t === qv)
                    return !1;
                let i = e[qv], a, o;
                if (kr(n) ? (a = n,
                o = a.get()) : o = n,
                i.makeAnimatables && typeof n != `function` && typeof n != `object` && !a && (a = lh(n)),
                i.observeAnimatables && a) {
                    let e = i.transactions;
                    a.onUpdate({
                        update: (t, n) => {
                            n && e.add(n),
                            i.observers.notify({
                                value: r
                            }, n)
                        }
                        ,
                        finish: t => {
                            e.delete(t) && i.observers.finishTransaction(t)
                        }
                    })
                }
                let s = !1
                  , c = !0
                  , l = Zg(e)[t];
                if (l !== void 0) {
                    kr(l) ? (c = l.get() !== o,
                    l.set(o)) : (c = l !== o,
                    Zg(e)[t] = o);
                    let n = typeof o == `object` && !!o;
                    (Array.isArray(o) || n) && (c = !0),
                    s = !0
                } else
                    a && (n = a),
                    s = Reflect.set(e, t, n);
                return c && i.observers.notify({
                    value: r
                }),
                s
            }
            ),
            N(this, `get`, (e, t, n) => {
                if (t === qv)
                    return Zg(e)[t];
                let r = Reflect.get(e, t, n);
                return typeof r == `function` ? r.bind(n) : r
            }
            )
        }
        deleteProperty(e, t) {
            let n = Reflect.deleteProperty(e, t);
            return e[qv].observers.notify({
                value: e
            }),
            n
        }
        ownKeys(e) {
            let t = Reflect.ownKeys(e)
              , n = t.indexOf(qv);
            return n !== -1 && t.splice(n, 1),
            t
        }
        getOwnPropertyDescriptor(e, t) {
            if (t !== qv)
                return Reflect.getOwnPropertyDescriptor(e, t)
        }
    }
    ,
    Xv = new Yv,
    Zv = ( () => {
        function e(t={}) {
            let n = Jv(t, !1, !1);
            return e.addData(n),
            n
        }
        return e._stores = [],
        e.addData = t => {
            e._stores.push(t)
        }
        ,
        e.reset = () => {
            e._stores.forEach(e => Jv.resetObject(e))
        }
        ,
        e.addObserver = (e, t) => Jv.addObserver(e, t),
        e
    }
    )(),
    Qv = {
        update: 0
    },
    $v = d.createContext({
        update: NaN
    }),
    ey = class extends r {
        constructor() {
            super(...arguments),
            N(this, `observers`, []),
            N(this, `state`, Qv),
            N(this, `taskAdded`, !1),
            N(this, `frameTask`, () => {
                this.setState({
                    update: this.state.update + 1
                }),
                this.taskAdded = !1
            }
            ),
            N(this, `observer`, () => {
                this.taskAdded || (this.taskAdded = !0,
                jh.addFrameTask(this.frameTask))
            }
            )
        }
        componentWillUnmount() {
            this.observers.map(e => e()),
            Zv.reset()
        }
        render() {
            let {children: e} = this.props;
            return this.observers.map(e => e()),
            this.observers = [],
            Zv._stores.forEach(e => {
                let t = Zv.addObserver(e, this.observer);
                this.observers.push(t)
            }
            ),
            S($v.Provider, {
                value: {
                    ...this.state
                },
                children: e
            })
        }
    }
    ,
    ye(cp(), 1),
    ty = d.createContext(void 0),
    ny = d.createContext(void 0),
    ry = `style[data-framer-css-ssr-minified]`,
    iy = ( () => {
        if (!B_())
            return new Set;
        let e = document.querySelector(ry)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set
    }
    )(),
    ay = `data-framer-css-ssr`,
    oy = (e, t, n) => d.forwardRef( (r, i) => {
        let {sheet: a, cache: o} = d.useContext(ny) ?? {}
          , s = n;
        if (!B_()) {
            dt(t) && (t = t(K.current(), r));
            let e = Array.isArray(t) ? t.join(`
`) : t;
            cy.add(e, s)
        }
        return p( () => {
            s && iy.has(s) || (dt(t) ? t(K.current(), r) : Array.isArray(t) ? t : t.split(`
`)).forEach(e => e && ea(e, a, o))
        }
        , []),
        S(e, {
            ...r,
            ref: i
        })
    }
    ),
    sy = class {
        constructor() {
            N(this, `styles`, new Set),
            N(this, `componentIds`, new Set)
        }
        add(e, t) {
            this.styles.add(e),
            t && this.componentIds.add(t)
        }
        getStyles() {
            return this.styles
        }
        getComponentIds() {
            return this.componentIds
        }
        clear() {
            this.styles.clear(),
            this.componentIds.clear()
        }
    }
    ,
    cy = new sy,
    ly = d.createContext(void 0),
    uy = `ssr-variant`,
    dy = () => () => {}
    ,
    fy = () => !0,
    py = () => !1,
    my = d.forwardRef(function(e, t) {
        let n = Ls(t)
          , r = d.useContext(ly)
          , i = d.useSyncExternalStore(dy, py, fy)
          , a = xi( () => i ? B_() ? 1 : 2 : 0)
          , o = d.useContext(ty);
        return qn( () => {
            let {breakpoint: t, overrides: i, children: s, ...c} = e;
            if (!o)
                return console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
                n(s, c);
            let {primaryVariantId: l, variantClassNames: u} = o
              , d = r?.primaryVariantId === l ? r?.variants : void 0;
            switch (a) {
            case 0:
                return n(s, Gs(t, c, i));
            case 1:
                return Bs(i, s, c, u, l, d, n, t);
            case 2:
                return Bs(i, s, c, u, l, d, Is, void 0);
            default:
                R(a)
            }
        }
        , [o, r, n, e])
    }),
    hy = ( () => oy(my, `.${uy} { display: contents }`, `PropertyOverrides`))(),
    gy = `default`,
    _y = new Set([gy]),
    yy = class {
        constructor() {
            N(this, `entries`, new Map),
            ge(this, vy, {})
        }
        set(e, t, n, r) {
            switch (t) {
            case `transformTemplate`:
                L(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, {
                    transformTemplate: n,
                    legacy: !0
                });
                break;
            case `initial`:
            case `animate`:
                L(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, {
                    [t]: n,
                    legacy: !0
                });
                break;
            default:
                break
            }
        }
        setHash(e, t=gy, n) {
            let r = this.entries.get(e) ?? {}
              , i = r[t] ?? {};
            r[t] = n === null ? null : {
                ...i,
                ...n
            },
            this.entries.set(e, r)
        }
        variantHash(e, t) {
            if (e === t?.primaryVariantId)
                return gy;
            let n = j(this, vy)[e];
            if (n)
                return n;
            let r = t?.variantClassNames[e];
            return r ? j(this, vy)[e] = Vs(r) : gy
        }
        setAll(e, t=_y, n, r) {
            if (n === null) {
                for (let n of t)
                    this.setHash(e, this.variantHash(n, r), null);
                return
            }
            let i = dt(n.transformTemplate) ? n.transformTemplate?.call(n, {}, xy) : void 0
              , a = n.__framer__presenceInitial ?? n.initial
              , o = n.__framer__presenceAnimate ?? n.animate
              , s = {
                initial: I(a) ? a : void 0,
                animate: I(o) ? o : void 0,
                transformTemplate: F(i) ? i : void 0
            };
            for (let n of t)
                this.setHash(e, this.variantHash(n, r), s)
        }
        clear() {
            this.entries.clear()
        }
        toObject() {
            return Object.fromEntries(this.entries)
        }
    }
    ,
    vy = new WeakMap,
    by = new yy,
    xy = `__Appear_Animation_Transform__`,
    Sy = `data-framer-appear-id`,
    Cy = `data-framer-appear-animation`,
    wy = {
        willChange: `transform`
    },
    Object.freeze(wy),
    Ty = {},
    Object.freeze(Ty),
    Ey = d.createContext({}),
    Dy = d.forwardRef(function({width: e, height: t, y: n, children: r, ...i}, a) {
        let o = d.useMemo( () => ({
            width: e,
            height: t,
            y: n
        }), [e, t, n])
          , s = Ls(a);
        return S(Ey.Provider, {
            value: o,
            children: s(r, i)
        })
    }),
    Oy = e => d.forwardRef( (t, n) => {
        let r = to(t);
        return S(e, {
            layoutId: r,
            ...t,
            layoutIdKey: void 0,
            duplicatedFrom: void 0,
            ref: n
        })
    }
    ),
    ky = !1,
    Ay = class extends r {
        constructor() {
            super(...arguments),
            N(this, `state`, {
                error: void 0
            })
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        componentDidCatch(e, t) {
            if (!qs(e))
                return;
            let n = t?.componentStack;
            console.error(`Caught an error in SynchronousSuspenseErrorBoundary:

`, e, `

Component stack:
`, n, `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` + wt(`If you are the author of this website, update external components and check recently added custom code or code overrides.`));
            let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
            qt(`published_site_load_recoverable_error`, {
                message: String(e),
                stack: r,
                componentStack: r ? void 0 : n
            })
        }
        render() {
            let e = this.state.error;
            if (e === void 0)
                return this.props.children;
            if (!qs(e))
                throw e;
            return ky = !0,
            this.props.children
        }
    }
    ,
    jy = ( () => O === void 0 ? null : new Promise( () => {}
    ))(),
    My = S(Js, {}),
    Ny = k(!1),
    Ny.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`,
    Py = S(Xs, {}),
    Fy = class extends r {
        constructor() {
            super(...arguments),
            N(this, `state`, {
                hasError: !1
            })
        }
        static getDerivedStateFromError() {
            return {
                hasError: !0
            }
        }
        componentDidCatch(e, t) {
            Qs(this.props.getErrorMessage(), t?.componentStack),
            Zs(e, t)
        }
        render() {
            let {children: e, fallback: t=Py} = this.props
              , {hasError: n} = this.state;
            return n ? t : e
        }
    }
    ,
    Iy = class extends r {
        constructor() {
            super(...arguments),
            N(this, `state`, {
                hasError: !1
            })
        }
        componentDidCatch(e, t) {
            let n = t?.componentStack;
            console.error(`Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`, n),
            this.setState({
                hasError: !0
            }),
            Zs(e, t)
        }
        render() {
            let {children: e} = this.props
              , {hasError: t} = this.state;
            return t ? null : e
        }
    }
    ,
    Ly = ( () => d.createContext(void 0))(),
    Ry = `code-crash:`,
    zy = Oy(d.forwardRef( ({children: e, layoutId: t, as: n, scopeId: r, nodeId: i, isAuthoredByUser: a, isModuleExternal: o, inComponentSlot: s, ...c}, l) => {
        let u = xi( () => t ? `${t}-container` : void 0)
          , f = Ya(n)
          , p = d.Children.map(e, e => d.isValidElement(e) ? d.cloneElement(e, {
            layoutId: t
        }) : e)
          , m = uc(p, r, i, a, o, s);
        return S(f, {
            layoutId: u,
            ...c,
            ref: l,
            children: S(ev.Provider, {
                value: !0,
                children: S(bm.Provider, {
                    value: i ?? null,
                    children: S(bi, {
                        enabled: !1,
                        children: S(ae, {
                            id: t ?? ``,
                            inherit: `id`,
                            children: m
                        })
                    })
                })
            })
        })
    }
    )),
    By = d.forwardRef( (e, t) => {
        let {as: n, children: r, scopeId: i, nodeId: a, isAuthoredByUser: o, rendersWithMotion: s, isModuleExternal: c, inComponentSlot: l, ...u} = e
          , d = uc(r, i, a, o, c, l)
          , f = e.as ?? `div`;
        if (e.rendersWithMotion) {
            let n = Ya(f);
            return S(bm.Provider, {
                value: a ?? null,
                children: S(n, {
                    ...u,
                    ref: t,
                    style: e.style,
                    children: d
                })
            })
        } else {
            let n = f
              , {layoutId: r, layoutDependency: i, ...o} = u;
            return S(bm.Provider, {
                value: a ?? null,
                children: S(n, {
                    ...o,
                    ref: t,
                    style: e.style,
                    children: d
                })
            })
        }
    }
    ),
    Vy = k({
        onRegisterCursors: () => () => {}
        ,
        registerCursors: () => {}
    }),
    Hy = `framer-cursor-none`,
    Uy = `framer-pointer-events-none`,
    Wy = o(function({children: e}) {
        let t = xi( () => {
            let e = new Set
              , t = {}
              , n = new Map;
            return {
                onRegisterCursors: n => (n(t),
                e.add(n),
                () => e.delete(n)),
                registerCursors: (r, i) => {
                    n.set(i, Object.keys(r)),
                    t = dc(n, t, r);
                    for (let n of e)
                        n(t);
                    return () => {
                        n.delete(i)
                    }
                }
            }
        }
        )
          , n = ze();
        return te(Vy.Provider, {
            value: t,
            children: [e, !n && S(Jy, {})]
        })
    }),
    Gy = ( () => oy(Wy, [`.${Hy}, .${Hy} * { cursor: none !important; }`, `.${Uy}, .${Uy} * { pointer-events: none !important; }`], `framer-lib-cursors-host`))(),
    Ky = ( () => ({
        position: `fixed`,
        top: 0,
        left: 0,
        zIndex: 13,
        pointerEvents: `none`
    }))(),
    qy = `data-framer-portal-id`,
    Jy = o(function() {
        let {onRegisterCursors: e} = w(Vy)
          , [t,n] = re(!1)
          , r = Re(0)
          , i = Re(0)
          , o = Re(0)
          , s = C(null)
          , l = C({
            cursors: {},
            cursorHash: void 0
        })
          , u = no();
        f( () => {
            let e = W.matchMedia(`(any-hover: none)`);
            function t(e) {
                e.matches ? c( () => n(!1)) : n(!0)
            }
            return e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
                e.removeEventListener(`change`, t)
            }
        }
        , []),
        D( () => {
            if (!t)
                return;
            let e = 0
              , n = 0;
            function a() {
                r.set(e),
                i.set(n),
                xe(o, 1, {
                    type: `tween`,
                    duration: .2
                })
            }
            let c = () => {
                if (ht(l.current.cursors))
                    return;
                let t = hc(e, n);
                t !== l.current.cursorHash && (l.current.cursorHash = t,
                Ce.update( () => u()))
            }
            ;
            function d(t) {
                if (t.pointerType === `touch`) {
                    Se(c);
                    return
                }
                Ce.read(c, !0),
                e = t.clientX,
                n = t.clientY,
                Ce.update(a)
            }
            function f(e) {
                if (e.target === s.current || !s.current)
                    return;
                let t = new PointerEvent(e.type,{
                    bubbles: !0,
                    cancelable: e.cancelable,
                    pointerType: e.pointerType,
                    pointerId: e.pointerId,
                    composed: e.composed,
                    isPrimary: e.isPrimary,
                    buttons: e.buttons,
                    button: e.button
                });
                Ce.update( () => {
                    var e;
                    (e = s.current) == null || e.dispatchEvent(t)
                }
                )
            }
            return W.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            Ce.read(c, !0),
            () => {
                W.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                Se(c)
            }
        }
        , [o, r, i, u, t]),
        D( () => {
            if (!t)
                return;
            function e() {
                xe(o, 0, {
                    type: `tween`,
                    duration: .2
                })
            }
            return document.addEventListener(`mouseleave`, e),
            W.addEventListener(`blur`, e),
            () => {
                document.removeEventListener(`mouseleave`, e),
                W.removeEventListener(`blur`, e)
            }
        }
        , [o, t]),
        f( () => {
            function t(e) {
                l.current.cursors = e,
                l.current.cursorHash = ht(e) ? null : hc(r.get(), i.get()),
                u()
            }
            let n = e(t);
            return () => {
                n(),
                document.body.classList.toggle(Hy, !1)
            }
        }
        , [r, i, e, u]);
        let {cursors: d, cursorHash: p} = l.current
          , m = p ? d[p] : null
          , h = fc(m);
        f( () => {
            t && document.body.classList.toggle(Hy, h)
        }
        , [h, t]);
        let g = m?.component
          , _ = m?.transition ?? {
            duration: 0
        }
          , v = Ve(r, _)
          , y = Ve(i, _)
          , b = He( () => v.get() + (m?.offset?.x ?? 0))
          , x = He( () => y.get() + (m?.offset?.y ?? 0))
          , ee = m?.alignment
          , T = m?.placement
          , te = E( (e, t) => `translate(${mc(T, ee)}) ${t}`, [ee, T]);
        return !t || !m || !g ? null : S(a, {
            children: S(g, {
                transformTemplate: te,
                style: {
                    ...Ky,
                    x: b,
                    y: x,
                    opacity: o
                },
                globalTapTarget: !0,
                variant: m?.variant,
                ref: s,
                className: Uy
            })
        })
    }),
    Yy = `webPageId`,
    Xy = class {
        constructor() {
            N(this, `collectedLinks`, new Map),
            N(this, `nestingInfo`, new Map)
        }
        clear() {
            this.collectedLinks.clear(),
            this.nestingInfo.clear()
        }
        getLinks() {
            let e = new Map;
            for (let[t,n] of this.nestingInfo) {
                let r = this.collectedLinks.get(t);
                L(r, `Outer link not found: ${t}`);
                let i = Array.from(n).map(e => {
                    let t = this.collectedLinks.get(e);
                    return L(t, `Inner link not found: ${e}`),
                    t
                }
                );
                e.set(r, i)
            }
            return e
        }
        collectNestedLink(e, t) {
            if (_p && !X_() || !e.nodeId || !t.nodeId)
                return;
            this.collectedLinks.set(vc(e), e),
            this.collectedLinks.set(vc(t), t);
            let n = this.nestingInfo.get(vc(e)) ?? new Set;
            n.add(vc(t)),
            this.nestingInfo.set(vc(e), n)
        }
    }
    ,
    Zy = new Xy,
    Qy = `element`,
    $y = `collection`,
    eb = `collectionItemId`,
    tb = `pathVariables`,
    nb = `framer/page-link,`,
    rb = k(void 0),
    ib = `overlay`,
    ab = `template-overlay`,
    ob = class extends r {
        constructor() {
            super(...arguments),
            N(this, `state`, {
                error: void 0
            }),
            N(this, `message`, `Made UI non-interactive due to an error.`),
            N(this, `messageFatal`, `Fatal error.`)
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        componentDidCatch(e) {
            if (O.__framer_hadFatalError = !0,
            `cause`in e && (e = e.cause),
            console.error(wt(vp ? this.message : this.messageFatal, e)),
            Math.random() > .5)
                return;
            let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
            qt(`published_site_load_error`, {
                message: String(e),
                stack: t
            })
        }
        render() {
            let e = this.state.error;
            if (!e)
                return this.props.children;
            let t = `cause`in e ? e.cause : e
              , n = /-->/gu
              , r = vp && document.getElementById(`main`)?.innerHTML || ``;
            return S(`div`, {
                style: {
                    display: `contents`
                },
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                    __html: `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${wt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` + r
                }
            })
        }
    }
    ,
    sb = d.createContext(void 0),
    sb.displayName = `LibraryFeaturesContext`,
    cb = ( () => sb.Provider)(),
    lb = () => d.useContext(sb) ?? {},
    ub = 500,
    db = .9,
    fb = 1.7,
    pb = 4,
    mb = 1 / 0,
    hb = new WeakMap,
    gb = new Set,
    _b = new Map,
    vb = !wp || typeof IntersectionObserver > `u` ? null : Ic(),
    yb = /:([a-z]\w*)/gi,
    bb = k(void 0),
    xb = Fc(s(function({children: e, href: t, openInNewTab: n, smoothScroll: r, clickTrackingId: a, relValues: o, preserveParams: s, nodeId: c, scopeId: l, motionChild: u, ...d}, f) {
        let p = ot()
          , m = ct()
          , h = Bc()
          , {activeLocale: g} = Yn()
          , _ = Jc()
          , v = Yc({
            nodeId: c,
            clickTrackingId: a,
            router: p,
            href: t,
            activeLocale: g
        })
          , y = T( () => {
            if (!t)
                return {};
            let e = _c(t) ? t : Ec(t);
            if (!e)
                return {};
            if (F(e))
                return $c(e, p, m, {
                    openInNewTab: n,
                    trackLinkClick: v,
                    rel: o?.join(` `),
                    preserveParams: s,
                    smoothScroll: r
                }, g?.id, h);
            let {unresolvedPathSlugs: i, unresolvedHashSlugs: a} = e
              , c = _(i, a, g);
            if (St(c))
                throw c;
            let {routeId: l, href: u, elementId: d, pathVariables: f} = Lc(p, m, e, g, c, h)
              , y = Uc(n, !0);
            return {
                href: u,
                target: y,
                onClick: Qc(p, l, u, v, d, f, r),
                navigate: () => Zc(p, l, d, f, r),
                "data-framer-page-link-current": m && Vc(m, e, h) || void 0
            }
        }
        , [t, p, g, h, n, m, r, v, o, s, _])
          , b = i(e) && `ref`in e
          , x = Ro(b ? e.ref : void 0);
        zo(x, e => {
            if (e === null)
                return;
            let n = _c(t) ? t : Ec(t);
            if (!n)
                return;
            let r = Sc(n, p, m);
            if (r)
                return vb?.(r, e)
        }
        , [m, t, p]);
        let {navigate: S, ...C} = y
          , ee = !!S
          , w = Ls(f).cloneAsArray(e, e => el(e, {
            ...d,
            ...nl(C, u, ee)
        }, x));
        return Oc(w, l, c, t, y, x)
    })),
    Sb = d.createContext(void 0),
    Cb = `__framer_force_showing_editorbar_since`,
    wb = class extends r {
        constructor() {
            super(...arguments),
            N(this, `state`, {
                error: void 0
            })
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        render() {
            return this.state.error ? null : this.props.children
        }
    }
    ,
    Tb = () => {
        try {
            return !!localStorage[Cb]
        } catch {
            return !1
        }
    }
    ,
    Eb = () => !Tb(),
    Db = () => !1,
    Ob = () => () => {}
    ,
    kb = null,
    Ab = null,
    bp(sl),
    jb = (e, t, n, r, i) => {
        let a = w(Sb)
          , o = C()
          , s = nn()
          , c = C(!0);
        return D( () => {
            function l() {
                (!kb || !Ab) && sl();
                let o = n ? new URL(W.location.origin + n) : W.location
                  , c = {
                    version: Rp,
                    abTestId: e?.abTestId,
                    framerSiteId: a ?? null,
                    webPageId: e?.abTestingVariantId ?? t,
                    routePath: e?.path || `/`,
                    collectionItemId: null,
                    framerLocale: i?.code || null,
                    referrer: null,
                    url: o.href,
                    hostname: o.hostname,
                    pathname: o.pathname,
                    search: o.search || null,
                    hash: o.hash || null,
                    timezone: kb,
                    locale: Ab
                };
                return e?.collectionId && r ? (async () => {
                    let t = null
                      , n = e.collectionId && s?.get(e.collectionId)
                      , [a] = Object.values(r);
                    if (n && F(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (St(e) ? await e : e) ?? null
                    }
                    return {
                        ...c,
                        collectionItemId: t
                    }
                }
                )() : c
            }
            (async () => {
                let e = o.current = l()
                  , t = e instanceof Promise ? await e : e;
                o.current = t,
                c.current ? c.current = !1 : qt(`published_site_pageview`, t, `eager`)
            }
            )();
            let u = async e => {
                if (e.persisted) {
                    let e = o.current = l()
                      , t = e instanceof Promise ? await e : e;
                    o.current = t,
                    qt(`published_site_pageview`, t, `eager`)
                }
            }
            ;
            return O.addEventListener(`pageshow`, u),
            () => {
                O.removeEventListener(`pageshow`, u)
            }
        }
        , [e, t, n, r, i, a, s]),
        o
    }
    ,
    Mb = {
        status: `loading`,
        data: void 0
    },
    Nb = 5e3,
    Pb = () => {}
    ,
    Vb = class e {
        constructor() {
            N(this, `responseValues`, new Map),
            ge(this, Fb, new Map),
            ge(this, Ib, new Set),
            ge(this, Lb, new Map),
            ge(this, Rb, new Map),
            ge(this, zb, new Map),
            ge(this, Bb, new Map),
            N(this, `persistCache`, Ps( () => {
                let t = {};
                for (let[e,n] of this.responseValues) {
                    if (!n || n.status !== `success`)
                        continue;
                    let r = j(this, Lb).get(e);
                    if (!r || r === 0)
                        continue;
                    let i = j(this, Rb).get(e);
                    if (!i || i && Cl(i, r))
                        continue;
                    t[e] = [i, r, n.data]
                }
                try {
                    localStorage.setItem(e.cacheKey, JSON.stringify(t))
                } catch {}
            }
            , 500))
        }
        unmount() {
            for (let[e,t] of j(this, Bb))
                clearInterval(t),
                j(this, Bb).delete(e)
        }
        stopQueryRefetching(e) {
            let t = yl(e)
              , n = j(this, Bb).get(t);
            n && (clearInterval(n),
            j(this, Bb).delete(t))
        }
        startQueryRefetching(e) {
            let t = yl(e)
              , n = j(this, Bb).get(t)
              , r = j(this, Lb).get(t);
            if (n || !r)
                return;
            let i = W.setInterval( () => {
                if (document.visibilityState === `hidden`)
                    return;
                let n = j(this, Rb).get(t);
                !r || !n || this.fetchWithCache({
                    ...e,
                    cacheDuration: r
                })
            }
            , r);
            j(this, Bb).set(t, i)
        }
        hydrateCache() {
            try {
                let t = localStorage.getItem(e.cacheKey);
                if (!t)
                    return;
                let n = JSON.parse(t);
                if (typeof n != `object`)
                    throw Error(`Invalid cache data`);
                for (let e in n) {
                    let t = n[e];
                    if (!Array.isArray(t) || t.length !== 3)
                        throw Error(`Invalid cache data`);
                    let[r,i,a] = t;
                    if (Cl(r, i))
                        continue;
                    j(this, Rb).set(e, r),
                    j(this, Lb).set(e, i),
                    this.responseValues.set(e, {
                        status: `success`,
                        data: a
                    })
                }
            } catch {
                try {
                    localStorage.removeItem(e.cacheKey)
                } catch {}
            }
        }
        setResponseValue(e, t) {
            this.responseValues.set(e, t),
            this.persistCache();
            let n = j(this, Fb).get(e);
            if (n)
                for (let e of n)
                    e()
        }
        async prefetch(e) {
            if (!B_() || !xc(e.url, !1))
                return;
            let t = yl(e);
            j(this, Ib).add(t),
            await this.fetchWithCache(e);
            let n = this.getValue(t);
            if (!n || n.status === `loading`)
                throw Error(`Unexpected result status for prefetch`);
            let r = j(this, Fb).get(t);
            for (let e of r ?? [])
                e();
            let i = Sl(n, e);
            return e.resultOutputType === `image` && F(i) && await gl(i).catch(Pb),
            i
        }
        async fetchWithCache(e) {
            if (!B_())
                return;
            let t = yl(e)
              , n = j(this, zb).get(t);
            if (n)
                return n;
            let r = j(this, Rb).get(t)
              , i = r && Cl(r, e.cacheDuration);
            if (this.responseValues.has(t) && !i)
                return;
            this.responseValues.get(t) || this.setResponseValue(t, Mb);
            let a = (async () => {
                try {
                    let n = await fetch(e.url, {
                        method: `GET`,
                        credentials: e.credentials
                    });
                    if (!n.ok) {
                        this.setResponseValue(t, {
                            status: `error`,
                            error: Error(`Invalid Response Status`),
                            data: void 0
                        });
                        return
                    }
                    let r = await n.json();
                    this.setResponseValue(t, {
                        status: `success`,
                        data: r
                    }),
                    j(this, Rb).set(t, Date.now())
                } catch (e) {
                    this.setResponseValue(t, {
                        status: `error`,
                        error: e,
                        data: void 0
                    })
                }
            }
            )();
            return j(this, zb).set(t, a),
            a.finally( () => {
                j(this, zb).delete(t)
            }
            ),
            a
        }
        getValue(e, t=!1) {
            if (!(t && !j(this, Ib).has(e)))
                return this.responseValues.get(e)
        }
        subscribe(e, t, n=!1) {
            let {url: r, cacheDuration: i} = e;
            if (!xc(r, !1))
                return Pb;
            let a = yl(e)
              , o = j(this, Lb).get(a);
            (!o || i < o) && j(this, Lb).set(a, i),
            n || (this.startQueryRefetching(e),
            this.fetchWithCache(e));
            let s = j(this, Fb).get(a) ?? new Set;
            return s.add(t),
            j(this, Fb).set(a, s),
            () => {
                let n = j(this, Fb).get(a);
                n && (n.delete(t),
                n.size === 0 && j(this, Fb).delete(a),
                j(this, Fb).size === 0 && this.stopQueryRefetching(e))
            }
        }
    }
    ,
    Fb = new WeakMap,
    Ib = new WeakMap,
    Lb = new WeakMap,
    Rb = new WeakMap,
    zb = new WeakMap,
    Bb = new WeakMap,
    N(Vb, `cacheKey`, `framer-fetch-client-cache`),
    Hb = Vb,
    Ub = k(void 0),
    Wb = k(!0),
    Gb = ({children: e, client: t}) => {
        let[n] = re( () => t ?? new Hb)
          , [r,i] = re(!0);
        return D( () => (n.hydrateCache(),
        c( () => {
            i(!1)
        }
        ),
        () => n.unmount()), [n]),
        S(Wb.Provider, {
            value: r,
            children: S(Ub.Provider, {
                value: n,
                children: e
            })
        })
    }
    ,
    ce.WillChange = fe,
    Kb = Fc(s(function({links: e, children: t, ...n}, r) {
        let i = ot()
          , {activeLocale: a} = Yn()
          , o = Ls(r)
          , s = Jc()
          , c = []
          , l = e.map(e => {
            if (e)
                return F(e) ? il(e, i, void 0, void 0, a) : il(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => s(e, t, a, c))
        }
        );
        if (c.length > 0)
            throw Promise.allSettled(c);
        let u = t(l);
        return o(u, n)
    })),
    X = {
        cast(e, t) {
            switch (t.type) {
            case `array`:
                return Rl(e, t);
            case `boolean`:
                return Bl(e);
            case `color`:
                return Ul(e);
            case `date`:
                return Gl(e);
            case `enum`:
                return ql(e);
            case `file`:
                return Yl(e);
            case `link`:
                return Zl(e);
            case `number`:
                return $l(e);
            case `object`:
                return nu(e, t);
            case `responsiveimage`:
                return iu(e);
            case `richtext`:
                return ou(e);
            case `string`:
                return uu(e);
            case `vectorsetitem`:
                return cu(e);
            case `unknown`:
                return e;
            default:
                R(t, `Unsupported cast`)
            }
        },
        parse(e) {
            return ft(e) ? {
                type: `boolean`,
                value: e
            } : yt(e) ? {
                type: `date`,
                value: e.toISOString()
            } : pt(e) ? {
                type: `number`,
                value: e
            } : F(e) ? {
                type: `string`,
                value: e
            } : mt(e) ? {
                type: `array`,
                value: e.map(X.parse)
            } : null
        },
        equal(e, t, n) {
            return e?.type === t?.type ? fu(e, t, n) === 0 : !1
        },
        lessThan(e, t, n) {
            return e?.type === t?.type ? fu(e, t, n) < 0 : !1
        },
        lessThanOrEqual(e, t, n) {
            return e?.type === t?.type ? fu(e, t, n) <= 0 : !1
        },
        greaterThan(e, t, n) {
            return e?.type === t?.type ? fu(e, t, n) > 0 : !1
        },
        greaterThanOrEqual(e, t, n) {
            return e?.type === t?.type ? fu(e, t, n) >= 0 : !1
        },
        in(e, t, n) {
            return t?.type === `array` ? t.value.some(t => X.equal(t, e, n)) : !1
        },
        indexOf(e, t, n) {
            return e?.type === `array` ? e.value.findIndex(e => X.equal(e, t, n)) : -1
        },
        contains(e, t, n) {
            let r = du(e)
              , i = du(t);
            return _t(r) || _t(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(),
            i = i.toLowerCase()),
            r.includes(i))
        },
        startsWith(e, t, n) {
            let r = du(e)
              , i = du(t);
            return _t(r) || _t(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(),
            i = i.toLowerCase()),
            r.startsWith(i))
        },
        endsWith(e, t, n) {
            let r = du(e)
              , i = du(t);
            return _t(r) || _t(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(),
            i = i.toLowerCase()),
            r.endsWith(i))
        },
        length(e) {
            switch (e?.type) {
            case `array`:
                return e.value.length
            }
            return 0
        },
        stringify(e) {
            if (e === null)
                return `null`;
            switch (e.type) {
            case `array`:
                return `[${e.value.map(X.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
                return String(e.value);
            case `string`:
                return `'${e.value}'`;
            case `enum`:
                return `'${e.value}' /* Enum */`;
            case `color`:
                return `'${e.value}' /* Color */`;
            case `date`:
                return `'${e.value}' /* Date */`;
            case `richtext`:
                return `RichText`;
            case `vectorsetitem`:
                return `VectorSetItem`;
            case `responsiveimage`:
                return `ResponsiveImage`;
            case `file`:
                return `File`;
            case `link`:
                return F(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
                return `Object`;
            default:
                R(e)
            }
        }
    },
    qb = {
        type: `unknown`,
        isNullable: !0
    },
    Jb = class {
        constructor(e, t) {
            this.collection = e,
            this.locale = t,
            N(this, `schema`),
            N(this, `indexes`, []);
            let n = la(e);
            L(n, `Collection does not have properties`);
            let r = {
                id: {
                    type: `string`,
                    isNullable: !1
                }
            }
              , i = Object.entries(n);
            for (let[e,t] of i) {
                if (!t)
                    continue;
                let n = t.type;
                L(n !== `array`, `Array properties are not supported`),
                L(n !== `object`, `Object properties are not supported`),
                r[e] = {
                    type: n,
                    isNullable: !0
                }
            }
            this.schema = r
        }
        getDatabaseItem(e, t) {
            let n = {}
              , r = Number(t);
            for (let t in this.schema) {
                let i = e[t];
                if (vt(i))
                    continue;
                let a = this.schema[t];
                if (gt(a))
                    continue;
                if (L(a.type !== `unknown`, `Invalid definition type`),
                a.type === `richtext`) {
                    n[t] = {
                        type: a.type,
                        value: {
                            itemIndex: r,
                            key: t
                        }
                    };
                    continue
                }
                n[t] = {
                    type: a.type,
                    value: i
                }
            }
            return {
                pointer: t,
                data: n
            }
        }
        async resolveRichText(e) {
            let {itemIndex: t, key: n} = e
              , r = (await pu(this.collection, this.locale))[t]?.[n];
            return Dp.is(r) ? r.readMaybeAsync() : r
        }
        async scanItems() {
            return (await pu(this.collection, this.locale)).map( (e, t) => {
                let n = String(t);
                return this.getDatabaseItem(e, n)
            }
            )
        }
        async resolveItems(e) {
            let t = await pu(this.collection, this.locale);
            return e.map(e => {
                let n = t[Number(e)];
                return L(n, `Can't find collection item`),
                this.getDatabaseItem(n, e)
            }
            )
        }
        compareItems(e, t) {
            return Number(e.pointer) - Number(t.pointer)
        }
    }
    ,
    Yb = new WeakMap,
    Xb = `$r_`,
    Zb = new Map,
    Qb = 1e3,
    Z = class e {
        constructor(e) {
            this.network = e
        }
        static estimate(t, n) {
            let r = gu()
              , i = _u()
              , a = t * r + n / i;
            return new e(a)
        }
        static max(t, n) {
            let r = Math.max(t.network, n.network);
            return new e(r)
        }
        static compare(e, t) {
            return e.network < t.network ? -1 : e.network > t.network ? 1 : 0
        }
        add(e) {
            return this.network += e.network,
            this
        }
        toString() {
            return `${this.network}ms`
        }
    }
    ,
    $b = class {
        constructor(e, t) {
            this.id = e,
            this.relational = t,
            N(this, `nodes`, []),
            N(this, `winners`, new Map)
        }
        addNode(e) {
            this.nodes.push(e),
            e.setGroup(this)
        }
        getWinner(e) {
            let t = e.getHash()
              , n = this.winners.get(t);
            if (n)
                return n;
            let r = new ex;
            return this.winners.set(t, r),
            r
        }
        getOptimized(e) {
            let t = this.getWinner(e);
            L(t.node, `Group not optimized`);
            let n = t.node.getOptimized(e);
            return n.setGroup(this),
            n
        }
    }
    ,
    ex = class {
        constructor() {
            N(this, `node`),
            N(this, `cost`, new Z(1 / 0)),
            N(this, `nodes`, [])
        }
        update(e, t) {
            this.nodes.push(e),
            Z.compare(t, this.cost) < 0 && (this.node = e,
            this.cost = t)
        }
    }
    ,
    tx = class {
        constructor(e) {
            this.isSynchronous = e
        }
    }
    ,
    nx = class extends tx {
        constructor() {
            super(...arguments),
            N(this, `group`)
        }
        getGroup() {
            return L(this.group, `Node must be in a group`),
            this.group
        }
        setGroup(e) {
            L(!this.group, `Node is already in a group`),
            this.group = e
        }
        evaluateSync() {
            let e = this.evaluate(void 0);
            return El(e)
        }
        evaluateAsync() {
            let e = this.evaluate(void 0);
            return Dl(e)
        }
    }
    ,
    rx = class {
        constructor(e, t) {
            N(this, `collections`),
            N(this, `richTextCache`, new WeakMap),
            N(this, `vectorSetItemCache`, new WeakMap),
            this.collections = Tu(e, t)
        }
        *resolveArrayValue(e) {
            return yield*kl(e.value.map(e => this.resolveValue(e)))
        }
        *resolveObjectValue(e) {
            let t = {};
            for (let n in e.value) {
                let r = e.value[n];
                t[n] = this.resolveValue(r)
            }
            return yield*H(t)
        }
        loadRichTextValue(e) {
            let t = e.value;
            L(Su(t), `Rich text pointer must be wrapped`);
            let n = this.collections.get(t.collectionId);
            L(n, `Can't find collection for rich text pointer`);
            let r = this.richTextCache.get(n) ?? new Map;
            this.richTextCache.set(n, r);
            let i = r.get(t.pointer);
            if (i)
                return i;
            let a = n.resolveRichText(t.pointer);
            return r.set(t.pointer, a),
            a
        }
        preloadRichTextValue(e) {
            this.loadRichTextValue(e)
        }
        *resolveRichTextValue(e) {
            let t = this.loadRichTextValue(e);
            return xt(t) ? yield t : t
        }
        loadVectorSetItemValue(e) {
            let t = e.value;
            L(wu(t), `Vector set item pointer must be wrapped`);
            let n = this.collections.get(t.collectionId);
            L(n, `Can't find collection for vector set item pointer`),
            L(n.resolveVectorSetItem, `Can't resolve vector set item pointer`);
            let r = this.vectorSetItemCache.get(n) ?? new Map;
            this.vectorSetItemCache.set(n, r);
            let i = r.get(t.pointer);
            if (i)
                return i;
            let a = n.resolveVectorSetItem(t.pointer);
            return r.set(t.pointer, a),
            a
        }
        preloadVectorSetItemValue(e) {
            this.loadVectorSetItemValue(e)
        }
        *resolveVectorSetItemValue(e) {
            let t = this.loadVectorSetItemValue(e);
            return xt(t) ? yield t : t
        }
        *resolveValue(e) {
            switch (e?.type) {
            case `array`:
                return yield*this.resolveArrayValue(e);
            case `object`:
                return yield*this.resolveObjectValue(e);
            case `richtext`:
                return yield*this.resolveRichTextValue(e);
            case `vectorsetitem`:
                return yield*this.resolveVectorSetItemValue(e)
            }
            return e?.value ?? null
        }
    }
    ,
    ix = `index`,
    ax = class extends Set {
        merge(e) {
            for (let t of e)
                this.add(t)
        }
        equals(e) {
            if (this === e)
                return !0;
            if (this.size !== e.size)
                return !1;
            for (let t of this)
                if (!e.has(t))
                    return !1;
            return !0
        }
        subsetOf(e) {
            if (this === e)
                return !0;
            if (this.size > e.size)
                return !1;
            for (let t of this)
                if (!e.has(t))
                    return !1;
            return !0
        }
        getHash() {
            let e = [];
            for (let t of this)
                e.push(t.id);
            return e.sort( (e, t) => e - t),
            U(this.name, ...e)
        }
    }
    ,
    ox = class {
        constructor(e, t, n) {
            this.id = e,
            this.name = t,
            this.data = n,
            N(this, `indexes`, new cx),
            N(this, `fields`, new Q)
        }
    }
    ,
    sx = class {
        constructor(e, t, n, r, i, a) {
            for (let o in this.id = e,
            this.data = t,
            this.collection = n,
            this.lookupNodes = r,
            this.constraint = i,
            this.ordering = a,
            N(this, `resolvedFields`, new Q),
            t.schema)
                for (let e of n.fields)
                    e.name === o && this.resolvedFields.add(e)
        }
    }
    ,
    cx = class extends ax {
        constructor() {
            super(...arguments),
            N(this, `name`, `Indexes`)
        }
    }
    ,
    lx = class {
        constructor(e, t, n, r) {
            this.id = e,
            this.name = t,
            this.definition = n,
            this.collection = r
        }
        getValue(e) {
            L(this.name, `Can only get value of field with a name`);
            let t = e.data[this.name];
            switch (t?.type) {
            case `richtext`:
                return L(this.collection, `Rich text field must have a collection`),
                {
                    type: `richtext`,
                    value: xu(this.collection.data, t.value)
                };
            case `vectorsetitem`:
                return L(this.collection, `Vector set item field must have a collection`),
                {
                    type: `vectorsetitem`,
                    value: Cu(this.collection.data, t.value)
                }
            }
            return t ?? null
        }
    }
    ,
    Q = class extends ax {
        constructor() {
            super(...arguments),
            N(this, `name`, `Fields`)
        }
    }
    ,
    ux = class {
        constructor(e, t=`asc`) {
            this.field = e,
            this.direction = t
        }
        getHash() {
            return U(`OrderingField`, this.field.id, this.direction)
        }
    }
    ,
    dx = class {
        constructor(e) {
            N(this, `fields`, []),
            e && this.merge(e)
        }
        get length() {
            return this.fields.length
        }
        getHash() {
            return U(`Ordering`, ...this.fields)
        }
        push(e) {
            this.fields.push(e)
        }
        merge(e) {
            this.fields.push(...e.fields)
        }
        equals(e) {
            return this === e ? !0 : this.length === e.length ? this.getHash() === e.getHash() : !1
        }
        providedByFields(e) {
            for (let {field: t} of this.fields) {
                if (e.has(t) || t.name === ix)
                    continue;
                return !1
            }
            return !0
        }
    }
    ,
    fx = class {
        constructor(e, t) {
            this.ordering = e,
            this.resolvedFields = t
        }
        getHash() {
            return U(`RequiredProps`, this.ordering, this.resolvedFields)
        }
        get isMinimal() {
            return this.ordering.length === 0 && this.resolvedFields.size === 0
        }
        canProvide(e) {
            return this.canProvideOrdering(e) && this.canProvideResolvedFields(e)
        }
        canProvideOrdering(e) {
            return this.ordering.length === 0 ? !0 : e.canProvideOrdering(this.ordering)
        }
        canProvideResolvedFields(e) {
            return this.resolvedFields.size === 0 ? !0 : e.canProvideResolvedFields(this.resolvedFields)
        }
    }
    ,
    px = class e {
        constructor(e) {
            this.parent = e,
            N(this, `node`),
            N(this, `ordering`),
            N(this, `fields`, [])
        }
        takeNode() {
            let e = this.node;
            return L(e, `Node is missing`),
            this.node = void 0,
            e
        }
        setNode(e) {
            L(!this.node, `Node already set`),
            this.node = e
        }
        setOrdering(e) {
            this.ordering = e
        }
        push() {
            return new e(this)
        }
        replace() {
            return new e(this.parent)
        }
        addField(e) {
            this.fields.push(e)
        }
        addFieldsFromScope(e) {
            for (let t of e.fields)
                this.addField(t)
        }
        resolveField(e, t) {
            let n = [];
            for (let r of this.fields) {
                if (r.name !== e || t && r.collectionName !== t)
                    continue;
                n.push(r)
            }
            if (n.length === 1)
                return n[0];
            if (n.length > 1)
                throw Error(`Ambiguous fields`);
            return this.parent?.resolveField(e, t)
        }
        has(e) {
            return this.fields.includes(e) ? !0 : this.parent?.has(e) ?? !1
        }
        getRequiredOrdering() {
            return this.ordering ?? new dx
        }
        getRequiredResolvedFields() {
            let e = new Q;
            for (let {field: t} of this.fields)
                t.collection && e.add(t);
            return e
        }
        getRequiredProps() {
            let e = this.getRequiredOrdering()
              , t = this.getRequiredResolvedFields();
            return new fx(e,t)
        }
        getNamedFields() {
            let e = {};
            for (let {name: t, field: n} of this.fields)
                e[t] = n;
            return e
        }
        getSingleField() {
            L(this.fields.length === 1, `Scope must contain exactly one field`);
            let e = this.fields[0];
            return L(e, `Field must exist`),
            e.field
        }
    }
    ,
    mx = class {
        constructor() {
            N(this, `pointers`, new Map),
            N(this, `values`, new Map)
        }
        getKey() {
            let e = [];
            for (let[t,n] of this.pointers)
                e.push(`${t.id}-${n}`);
            return e.sort().join(`-`)
        }
        addValue(e, t) {
            this.values.set(e, t)
        }
        getValue(e) {
            return this.values.get(e) ?? null
        }
        mergeValues(e) {
            for (let[t,n] of e.values)
                this.addValue(t, n)
        }
        addPointer(e, t) {
            this.pointers.set(e, t)
        }
        getPointer(e) {
            return this.pointers.get(e)
        }
        mergePointers(e) {
            for (let[t,n] of e.pointers)
                this.addPointer(t, n)
        }
        merge(e) {
            this.mergeValues(e),
            this.mergePointers(e)
        }
    }
    ,
    hx = class e {
        constructor(e, t=[]) {
            this.fields = e,
            this.tuples = t
        }
        push(e) {
            this.tuples.push(e)
        }
        filter(t) {
            let n = this.tuples.filter(t);
            return new e(this.fields,n)
        }
        map(t, n) {
            let r = this.tuples.map(n);
            return new e(t,r)
        }
        sort(t) {
            let n = Array.from(this.tuples).sort(t);
            return new e(this.fields,n)
        }
        slice(t, n) {
            let r = this.tuples.slice(t, n);
            return new e(this.fields,r)
        }
        union(t) {
            let n = new Q;
            for (let e of this.fields)
                t.fields.has(e) && n.add(e);
            let r = new Set
              , i = new e(n);
            for (let e of this.tuples) {
                let t = e.getKey();
                r.add(t),
                i.push(e)
            }
            for (let e of t.tuples) {
                let t = e.getKey();
                if (r.has(t))
                    continue;
                i.push(e)
            }
            return i
        }
        intersection(t) {
            let n = new Q;
            for (let e of this.fields)
                t.fields.has(e) && n.add(e);
            let r = new Set
              , i = new e(n);
            for (let e of this.tuples) {
                let t = e.getKey();
                r.add(t)
            }
            for (let e of t.tuples) {
                let t = e.getKey();
                if (!r.has(t))
                    continue;
                i.push(e)
            }
            return i
        }
    }
    ,
    gx = class {
        constructor(e, t) {
            this.input = e,
            this.field = t
        }
        getHash() {
            return U(`ProjectionField`, this.input, this.field.id)
        }
    }
    ,
    _x = class e extends nx {
        constructor(e, t, n) {
            let r = e.isSynchronous;
            for (let e of t)
                r &&= e.input.isSynchronous;
            super(r),
            this.input = e,
            this.projections = t,
            this.passthrough = n,
            N(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return U(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough)
        }
        getOutputFields() {
            let e = new Q;
            e.merge(this.passthrough);
            for (let t of this.projections)
                e.add(t.field);
            return e
        }
        canProvideOrdering(e) {
            let t = new Q;
            for (let e of this.projections)
                t.add(e.field);
            for (let {field: n} of e.fields)
                if (t.has(n))
                    return !1;
            return !0
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new Q(e.resolvedFields);
            for (let e of this.projections)
                t.merge(e.input.referencedFields),
                t.delete(e.field);
            return new fx(e.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = new Z(0);
            for (let t of this.projections) {
                let n = t.input.optimize(e);
                i = Z.max(i, n)
            }
            return new Z(0).add(Z.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.projections.map(e => {
                let t = e.input.getOptimized();
                return new gx(t,e.field)
            }
            );
            return new e(r,i,this.passthrough)
        }
        *evaluate(e) {
            let t = this.getOutputFields()
              , n = yield*this.input.evaluate(e)
              , r = yield*kl(n.tuples.map(t => kl(this.projections.map(n => H({
                field: n.field,
                value: n.input.evaluate(e, t)
            })))));
            return n.map(t, (e, t) => {
                let n = new mx;
                n.mergePointers(e);
                for (let t of this.passthrough) {
                    let r = e.getValue(t);
                    n.addValue(t, r)
                }
                let i = r[t];
                L(i, `Projections must exist`);
                for (let {field: e, value: t} of i)
                    n.addValue(e, t);
                return n
            }
            )
        }
    }
    ,
    vx = {
        type: 0
    },
    $ = class extends tx {
        constructor(e, t, n) {
            super(n),
            this.referencedFields = e,
            this.referencedOuterFields = t,
            this.isSynchronous = n
        }
        evaluateSync() {
            let e = this.evaluate(void 0, void 0);
            return El(e)
        }
        evaluateAsync() {
            let e = this.evaluate(void 0, void 0);
            return Dl(e)
        }
    }
    ,
    yx = {
        type: 0
    },
    bx = class {
        constructor(e, t) {
            this.when = e,
            this.then = t
        }
        getHash() {
            return U(`CaseCondition`, this.when, this.then)
        }
    }
    ,
    xx = class e extends $ {
        constructor(e, t, n) {
            let r = new Q
              , i = new Q
              , a = !0;
            e && (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            a &&= e.isSynchronous);
            for (let {when: e, then: n} of t)
                r.merge(e.referencedFields),
                i.merge(e.referencedOuterFields),
                a &&= e.isSynchronous,
                r.merge(n.referencedFields),
                i.merge(n.referencedOuterFields),
                a &&= n.isSynchronous;
            n && (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            a &&= n.isSynchronous),
            super(r, i, a),
            this.input = e,
            this.conditions = t,
            this.otherwise = n,
            N(this, `definition`, {
                type: `unknown`,
                isNullable: !0
            })
        }
        getHash() {
            return U(`ScalarCase`, this.input, ...this.conditions, this.otherwise)
        }
        optimize(e) {
            var t, n;
            (t = this.input) == null || t.optimize(e);
            for (let t of this.conditions)
                t.when.optimize(e),
                t.then.optimize(e);
            return (n = this.otherwise) == null || n.optimize(e),
            new Z(0)
        }
        getOptimized() {
            let t = this.input?.getOptimized()
              , n = this.conditions.map(e => {
                let t = e.when.getOptimized()
                  , n = e.then.getOptimized();
                return new bx(t,n)
            }
            )
              , r = this.otherwise?.getOptimized();
            return new e(t,n,r)
        }
        *evaluate(e, t) {
            let {input: n, conditions: r, otherwise: i} = yield*H({
                input: this.input?.evaluate(e, t) ?? null,
                conditions: kl(this.conditions.map(n => H({
                    when: n.when.evaluate(e, t),
                    then: n.then.evaluate(e, t)
                }))),
                otherwise: this.otherwise?.evaluate(e, t) ?? null
            });
            if (this.input) {
                for (let {when: e, then: t} of r)
                    if (X.equal(n, e, yx))
                        return t
            } else
                for (let {when: e, then: t} of r)
                    if (Vl(e))
                        return t;
            return i
        }
    }
    ,
    Sx = class {
        constructor(e, t, n) {
            this.normalizer = e,
            this.query = t,
            this.locale = n,
            N(this, `collectionId`, 0),
            N(this, `indexId`, 0),
            N(this, `fieldId`, 0),
            N(this, `subqueries`, [])
        }
        build() {
            let e = new px;
            return this.buildQuery(e, this.query)
        }
        buildQuery(e, t) {
            let n = {
                type: `Select`,
                ...t
            };
            return this.buildSelect(e, n)
        }
        buildSelect(e, t) {
            let n = this.buildFrom(e, t.from)
              , r = n.getRequiredOrdering();
            if (t.where) {
                let e = n.takeNode()
                  , r = this.buildExpression(n, t.where)
                  , i = this.normalizer.newRelationalFilter(e, r);
                n.setNode(i)
            }
            let i = [], a = new Q, o;
            if (t.orderBy) {
                o = new dx;
                for (let e of t.orderBy)
                    if (e.type === `Identifier`) {
                        let t = n.resolveField(e.name, e.collection);
                        if (gt(t))
                            continue;
                        a.add(t.field);
                        let r = new ux(t.field,e.direction);
                        o.push(r)
                    } else {
                        let t = this.buildExpression(n, e)
                          , r = Ou(this.fieldId++)
                          , a = new lx(r,void 0,t.definition,void 0)
                          , s = new gx(t,a);
                        i.push(s);
                        let c = new ux(a,e.direction);
                        o.push(c)
                    }
                o.merge(r)
            } else
                o = r;
            let s = this.buildSelectList(n, t.select, a, i);
            if (s.setOrdering(o),
            t.offset) {
                let n = s.takeNode()
                  , r = this.buildExpression(e, t.offset)
                  , i = this.normalizer.newRelationalOffset(n, r, o);
                s.setNode(i)
            }
            if (t.limit) {
                let n = s.takeNode()
                  , r = this.buildExpression(e, t.limit)
                  , i = this.normalizer.newRelationalLimit(n, r, o);
                s.setNode(i)
            }
            return s
        }
        buildSelectList(e, t, n, r) {
            let i = e.push()
              , a = new Q(n)
              , o = [...r];
            for (let n of t)
                if (n.type === `Identifier`) {
                    let t = e.resolveField(n.name, n.collection);
                    if (gt(t))
                        continue;
                    a.add(t.field),
                    i.addField({
                        ...t,
                        name: n.alias ?? t.name
                    })
                } else {
                    let t = this.buildExpression(e, n);
                    L(n.alias, `Subqueries should have an alias`);
                    let r = Ou(this.fieldId++)
                      , a = n.alias
                      , s = new lx(r,a,t.definition,void 0)
                      , c = new gx(t,s);
                    o.push(c),
                    i.addField({
                        field: s,
                        name: a
                    })
                }
            let s = e.takeNode()
              , c = this.normalizer.newRelationalProject(s, o, a);
            return i.setNode(c),
            i
        }
        buildFrom(e, t) {
            switch (t.type) {
            case `Collection`:
                return this.buildCollection(e, t);
            case `LeftJoin`:
                return this.buildJoin(e, t);
            default:
                R(t, `Unsupported from type`)
            }
        }
        buildCollection(e, t) {
            let n = e.push()
              , r = hu(t.data, this.locale)
              , i = t.alias
              , a = Eu(this.collectionId++)
              , o = new ox(a,i,r);
            for (let[e,t] of Object.entries(r.schema)) {
                let r = Ou(this.fieldId++)
                  , a = new lx(r,e,t,o);
                n.addField({
                    field: a,
                    name: e,
                    collectionName: i
                }),
                o.fields.add(a)
            }
            {
                let e = {
                    type: `number`,
                    isNullable: !1
                }
                  , t = Ou(this.fieldId++)
                  , r = new lx(t,ix,e,o);
                n.addField({
                    field: r,
                    name: ix,
                    collectionName: i
                });
                let a = new dx
                  , s = new ux(r);
                a.push(s),
                n.setOrdering(a)
            }
            for (let e of r.indexes) {
                let t = [];
                for (let r of e.fields) {
                    let e = this.buildExpression(n, r);
                    t.push(e)
                }
                let r;
                e.where && (r = this.buildExpression(n, e.where));
                let i = new dx
                  , a = Du(this.indexId++)
                  , s = new sx(a,e,o,t,r,i);
                o.indexes.add(s)
            }
            let s = this.normalizer.newRelationalScan(o);
            return n.setNode(s),
            n
        }
        buildJoin(e, t) {
            let n = this.buildFrom(e, t.left)
              , r = this.buildFrom(e, t.right)
              , i = new dx
              , a = n.getRequiredOrdering();
            i.merge(a);
            let o = r.getRequiredOrdering();
            i.merge(o);
            let s = e.push();
            s.addFieldsFromScope(n),
            s.addFieldsFromScope(r),
            s.setOrdering(i);
            let c = this.buildExpression(s, t.constraint), l = n.takeNode(), u = r.takeNode(), d;
            switch (t.type) {
            case `LeftJoin`:
                d = this.normalizer.newRelationalLeftJoin(l, u, c);
                break;
            default:
                R(t.type, `Unsupported join type`)
            }
            return s.setNode(d),
            s
        }
        buildExpression(e, t) {
            switch (t.type) {
            case `Identifier`:
                return this.buildIdentifier(e, t);
            case `LiteralValue`:
                return this.buildLiteralValue(t);
            case `FunctionCall`:
                return this.buildFunctionCall(e, t);
            case `Case`:
                return this.buildCase(e, t);
            case `UnaryOperation`:
                return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
                return this.buildBinaryOperation(e, t);
            case `TypeCast`:
                return this.buildTypeCast(e, t);
            case `Select`:
                throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
                R(t, `Unsupported expression`)
            }
        }
        buildIdentifier(e, t) {
            let n = e.resolveField(t.name, t.collection);
            if (n) {
                let e = !1;
                for (let t of this.subqueries)
                    e ? t.referencedOuterFields.add(n.field) : (e = t.inScope.has(n),
                    e && t.referencedFields.add(n.field));
                return this.normalizer.newScalarVariable(n.field, e)
            }
            return this.normalizer.newScalarConstant(qb, null)
        }
        buildLiteralValue(e) {
            let t = X.parse(e.value);
            return this.normalizer.newScalarConstant(qb, t)
        }
        buildFunctionCall(e, t) {
            let n = n => {
                let r = t.arguments[n];
                return L(r, `Missing argument`),
                this.buildExpression(e, r)
            }
            ;
            switch (t.functionName) {
            case `CONTAINS`:
                {
                    let e = n(0)
                      , t = n(1);
                    return this.normalizer.newScalarContains(e, t)
                }
            case `STARTS_WITH`:
                {
                    let e = n(0)
                      , t = n(1);
                    return this.normalizer.newScalarStartsWith(e, t)
                }
            case `ENDS_WITH`:
                {
                    let e = n(0)
                      , t = n(1);
                    return this.normalizer.newScalarEndsWith(e, t)
                }
            case `LENGTH`:
                {
                    let e = n(0);
                    return this.normalizer.newScalarLength(e)
                }
            case `INDEX_OF`:
                {
                    let e = n(0)
                      , t = n(1);
                    return this.normalizer.newScalarIndexOf(e, t)
                }
            case `ARRAY`:
                {
                    let n = t.arguments[0];
                    return L(n, `Missing argument`),
                    L(n.type === `Select`, `Subqueries require a select expression`),
                    this.buildSubqueryArray(e, n)
                }
            case `FLAT_ARRAY`:
                {
                    let n = t.arguments[0];
                    return L(n, `Missing argument`),
                    L(n.type === `Select`, `Subqueries require a select expression`),
                    this.buildSubqueryFlatArray(e, n)
                }
            default:
                throw Error(`Unsupported function name`)
            }
        }
        buildSubqueryArray(e, t) {
            try {
                let n = new Cx(e);
                this.subqueries.push(n);
                let r = this.buildSelect(e, t)
                  , i = r.takeNode()
                  , a = r.getNamedFields()
                  , o = r.getRequiredOrdering()
                  , s = n.referencedFields
                  , c = n.referencedOuterFields;
                return this.normalizer.newScalarArray(i, a, o, s, c)
            } finally {
                this.subqueries.pop()
            }
        }
        buildSubqueryFlatArray(e, t) {
            try {
                let n = new Cx(e);
                this.subqueries.push(n);
                let r = this.buildSelect(e, t)
                  , i = r.takeNode()
                  , a = r.getSingleField()
                  , o = r.getRequiredOrdering()
                  , s = n.referencedFields
                  , c = n.referencedOuterFields;
                return this.normalizer.newScalarFlatArray(i, a, o, s, c)
            } finally {
                this.subqueries.pop()
            }
        }
        buildCase(e, t) {
            let n;
            t.value && (n = this.buildExpression(e, t.value));
            let r = t.conditions.map(t => {
                let n = this.buildExpression(e, t.when)
                  , r = this.buildExpression(e, t.then);
                return new bx(n,r)
            }
            ), i;
            return t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
        }
        buildUnaryOperation(e, t) {
            let n = this.buildExpression(e, t.value);
            switch (t.operator) {
            case `not`:
                return this.normalizer.newScalarNot(n);
            default:
                R(t.operator, `Unsupported unary operator`)
            }
        }
        buildBinaryOperation(e, t) {
            let n = this.buildExpression(e, t.left)
              , r = this.buildExpression(e, t.right);
            switch (t.operator) {
            case `and`:
                return this.normalizer.newScalarAnd(n, r);
            case `or`:
                return this.normalizer.newScalarOr(n, r);
            case `==`:
                return this.normalizer.newScalarEquals(n, r);
            case `!=`:
                return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
                return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
                return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
                return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
                return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
                return this.normalizer.newScalarIn(n, r);
            default:
                R(t.operator, `Unsupported binary operator`)
            }
        }
        buildTypeCast(e, t) {
            let n = this.buildExpression(e, t.value);
            switch (t.dataType) {
            case `BOOLEAN`:
                return this.normalizer.newScalarCast(n, {
                    type: `boolean`,
                    isNullable: !0
                });
            case `DATE`:
                return this.normalizer.newScalarCast(n, {
                    type: `date`,
                    isNullable: !0
                });
            case `NUMBER`:
                return this.normalizer.newScalarCast(n, {
                    type: `number`,
                    isNullable: !0
                });
            case `STRING`:
                return this.normalizer.newScalarCast(n, {
                    type: `string`,
                    isNullable: !0
                });
            default:
                throw Error(`Unsupported data type`)
            }
        }
    }
    ,
    Cx = class {
        constructor(e) {
            this.inScope = e,
            N(this, `referencedFields`, new Q),
            N(this, `referencedOuterFields`, new Q)
        }
    }
    ,
    wx = class e extends nx {
        constructor(e, t) {
            super(e.isSynchronous && t.isSynchronous),
            this.input = e,
            this.predicate = t,
            N(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return U(`RelationalFilter`, this.inputGroup.id, this.predicate)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering() {
            return !0
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new Q(e.resolvedFields);
            return t.merge(this.predicate.referencedFields),
            new fx(e.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = this.predicate.optimize(e);
            return new Z(0).add(Z.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.predicate.getOptimized();
            return new e(r,i)
        }
        *evaluate(e) {
            let t = yield*this.input.evaluate(e)
              , n = yield*kl(t.tuples.map(t => this.predicate.evaluate(e, t)));
            return t.filter( (e, t) => {
                let r = n[t] ?? null;
                return Vl(r)
            }
            )
        }
    }
    ,
    Tx = class e extends nx {
        constructor(e, t) {
            super(!1),
            this.index = e,
            this.query = t
        }
        getHash() {
            return U(`RelationalIndexLookup`, this.index.id, ...this.query)
        }
        getOutputFields() {
            return this.index.collection.fields
        }
        canProvideOrdering(e) {
            return e.equals(this.index.ordering)
        }
        canProvideResolvedFields(e) {
            return e.subsetOf(this.index.resolvedFields)
        }
        optimize() {
            let e = this.query.every(e => e.type === `All`);
            return Z.estimate(1, e ? 100 * Qb : 50 * Qb)
        }
        getOptimized() {
            return new e(this.index,this.query)
        }
        *evaluate() {
            let e = this.index
              , t = e.collection
              , n = this.getOutputFields()
              , r = (yield e.data.lookupItems(this.query)).map(n => {
                let r = new mx;
                for (let i of e.resolvedFields) {
                    let e = i.getValue(n);
                    r.addPointer(t, n.pointer),
                    r.addValue(i, e)
                }
                return r
            }
            );
            return new hx(n,r)
        }
    }
    ,
    Ex = class e extends nx {
        constructor(e, t) {
            super(e.isSynchronous && t.isSynchronous),
            this.left = e,
            this.right = t,
            N(this, `leftGroup`),
            N(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return U(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id)
        }
        getOutputFields() {
            let e = new Q
              , t = this.leftGroup.relational.outputFields
              , n = this.rightGroup.relational.outputFields;
            for (let r of t)
                n.has(r) && e.add(r);
            return e
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields() {
            return !0
        }
        getChildRequiredProps(e) {
            let t = new dx;
            return new fx(t,e.resolvedFields)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(t)
              , a = e.optimizeGroup(this.rightGroup, i);
            return Z.max(r, a)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(t)
              , a = this.rightGroup.getOptimized(i);
            return new e(r,a)
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*H({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            return t.intersection(n)
        }
    }
    ,
    Dx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarEquals`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: X.equal(n, r, vx)
            }
        }
    }
    ,
    Ox = class e extends nx {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            this.left = e,
            this.right = t,
            this.constraint = n,
            N(this, `leftGroup`),
            N(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return U(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint)
        }
        getOutputFields() {
            let e = new Q;
            return e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields() {
            return !0
        }
        getChildRequiredProps(e, t) {
            let n = new Q
              , r = e.relational.outputFields;
            for (let e of t.resolvedFields)
                r.has(e) && n.add(e);
            for (let e of this.constraint.referencedFields)
                r.has(e) && n.add(e);
            let i = new dx;
            return new fx(i,n)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = e.optimizeGroup(this.rightGroup, i)
              , o = this.constraint.optimize(e);
            return Z.max(Z.max(r, a), o)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = this.rightGroup.getOptimized(i)
              , o = this.constraint.getOptimized();
            return new e(r,a,o)
        }
        *evaluateScalarEquals(e, t, n, r, i) {
            let a = new Map;
            for (let e of t.tuples) {
                let t = yield*r.evaluate(i, e)
                  , n = JSON.stringify(t?.value ?? null)
                  , o = a.get(n) ?? [];
                o.push(e),
                a.set(n, o)
            }
            let o = this.getOutputFields()
              , s = new hx(o);
            for (let t of e.tuples) {
                let e = yield*n.evaluate(i, t)
                  , r = JSON.stringify(e?.value ?? null)
                  , o = a.get(r) ?? [];
                if (o.length === 0)
                    s.push(t);
                else
                    for (let e of o) {
                        let n = new mx;
                        n.merge(t),
                        n.merge(e),
                        s.push(n)
                    }
            }
            return s
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*H({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            if (this.constraint instanceof Dx) {
                if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.left, this.constraint.right, e);
                if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.right, this.constraint.left, e)
            }
            let r = this.getOutputFields()
              , i = new hx(r);
            for (let r of t.tuples) {
                let t = !1;
                for (let a of n.tuples) {
                    let n = new mx;
                    n.merge(r),
                    n.merge(a);
                    let o = yield*this.constraint.evaluate(e, n);
                    Vl(o) && (i.push(n),
                    t = !0)
                }
                t || i.push(r)
            }
            return i
        }
    }
    ,
    kx = class e extends nx {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            this.left = e,
            this.right = t,
            this.constraint = n,
            N(this, `leftGroup`),
            N(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return U(`RelationalRightJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint)
        }
        getOutputFields() {
            let e = new Q;
            return e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields() {
            return !0
        }
        getChildRequiredProps(e, t) {
            let n = new Q
              , r = e.relational.outputFields;
            for (let e of t.resolvedFields)
                r.has(e) && n.add(e);
            for (let e of this.constraint.referencedFields)
                r.has(e) && n.add(e);
            let i = new dx;
            return new fx(i,n)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = e.optimizeGroup(this.rightGroup, i)
              , o = this.constraint.optimize(e);
            return Z.max(Z.max(r, a), o)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = this.rightGroup.getOptimized(i)
              , o = this.constraint.getOptimized();
            return new e(r,a,o)
        }
        *evaluateScalarEquals(e, t, n, r, i) {
            let a = new Map;
            for (let t of e.tuples) {
                let e = yield*n.evaluate(i, t)
                  , r = JSON.stringify(e?.value ?? null)
                  , o = a.get(r) ?? [];
                o.push(t),
                a.set(r, o)
            }
            let o = this.getOutputFields()
              , s = new hx(o);
            for (let e of t.tuples) {
                let t = yield*r.evaluate(i, e)
                  , n = JSON.stringify(t?.value ?? null)
                  , o = a.get(n) ?? [];
                if (o.length === 0)
                    s.push(e);
                else
                    for (let t of o) {
                        let n = new mx;
                        n.merge(e),
                        n.merge(t),
                        s.push(n)
                    }
            }
            return s
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*H({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            if (this.constraint instanceof Dx) {
                if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.left, this.constraint.right, e);
                if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.right, this.constraint.left, e)
            }
            let r = this.getOutputFields()
              , i = new hx(r);
            for (let r of n.tuples) {
                let n = !1;
                for (let a of t.tuples) {
                    let t = new mx;
                    t.merge(r),
                    t.merge(a);
                    let o = yield*this.constraint.evaluate(e, t);
                    Vl(o) && (i.push(t),
                    n = !0)
                }
                n || i.push(r)
            }
            return i
        }
    }
    ,
    Ax = class e extends nx {
        constructor(e) {
            super(!1),
            this.collection = e
        }
        getHash() {
            return U(`RelationalScan`, this.collection.id)
        }
        getOutputFields() {
            return this.collection.fields
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields(e) {
            return e.subsetOf(this.collection.fields)
        }
        optimize() {
            return Z.estimate(1, 200 * Qb)
        }
        getOptimized() {
            return new e(this.collection)
        }
        *evaluate() {
            let e = this.collection
              , t = this.getOutputFields()
              , n = (yield e.data.scanItems()).map(n => {
                let r = new mx;
                for (let i of t) {
                    let t = i.getValue(n);
                    r.addPointer(e, n.pointer),
                    r.addValue(i, t)
                }
                return r
            }
            );
            return new hx(t,n)
        }
    }
    ,
    jx = class e extends nx {
        constructor(e, t) {
            super(e.isSynchronous && t.isSynchronous),
            this.left = e,
            this.right = t,
            N(this, `leftGroup`),
            N(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return U(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id)
        }
        getOutputFields() {
            let e = new Q
              , t = this.leftGroup.relational.outputFields
              , n = this.rightGroup.relational.outputFields;
            for (let r of t)
                n.has(r) && e.add(r);
            return e
        }
        canProvideOrdering() {
            return !1
        }
        canProvideResolvedFields() {
            return !0
        }
        getChildRequiredProps(e) {
            let t = new dx;
            return new fx(t,e.resolvedFields)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(t)
              , a = e.optimizeGroup(this.rightGroup, i);
            return Z.max(r, a)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(t)
              , a = this.rightGroup.getOptimized(i);
            return new e(r,a)
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*H({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            return t.union(n)
        }
    }
    ,
    Mx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarAnd`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Vl(n) && Vl(r)
            }
        }
    }
    ,
    Nx = class extends $ {
        constructor(e, t) {
            let n = new Q
              , r = new Q;
            super(n, r, !0),
            this.definition = e,
            this.value = t
        }
        getHash() {
            return U(`ScalarConstant`, this.definition, this.value)
        }
        optimize() {
            return new Z(0)
        }
        getOptimized() {
            return this
        }
        *evaluate() {
            return this.value
        }
    }
    ,
    Px = {
        type: 0
    },
    Fx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarContains`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*H({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: X.contains(n, r, Px)
            }
        }
    }
    ,
    Ix = {
        type: 0
    },
    Lx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarEndsWith`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*H({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: X.endsWith(n, r, Ix)
            }
        }
    }
    ,
    Rx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarGreaterThan`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: X.greaterThan(n, r, vx)
            }
        }
    }
    ,
    zx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarGreaterThanOrEqual`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: X.greaterThanOrEqual(n, r, vx)
            }
        }
    }
    ,
    Bx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarLessThan`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: X.lessThan(n, r, vx)
            }
        }
    }
    ,
    Vx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarLessThanOrEqual`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: X.lessThanOrEqual(n, r, vx)
            }
        }
    }
    ,
    Hx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarNotEquals`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: !X.equal(n, r, vx)
            }
        }
    }
    ,
    Ux = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarOr`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Vl(n) || Vl(r)
            }
        }
    }
    ,
    Wx = {
        type: 0
    },
    Gx = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarStartsWith`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*H({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: X.startsWith(n, r, Wx)
            }
        }
    }
    ,
    Kx = class {
        constructor(e) {
            this.normalizer = e,
            N(this, `memo`),
            this.memo = e.memo
        }
        explore(e) {
            let t = e.getGroup();
            if (e instanceof Ox) {
                let n = new kx(e.right,e.left,e.constraint);
                this.memo.addRelational(n, t)
            }
            if (e instanceof wx) {
                if (e.predicate instanceof Mx) {
                    let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left)
                      , r = this.normalizer.newRelationalFilter(e.input, e.predicate.right)
                      , i = new Ex(n,r);
                    this.memo.addRelational(i, t)
                }
                if (e.predicate instanceof Ux) {
                    let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left)
                      , r = this.normalizer.newRelationalFilter(e.input, e.predicate.right)
                      , i = new jx(n,r);
                    this.memo.addRelational(i, t)
                }
            }
            if (e instanceof Ax)
                for (let n of e.collection.indexes) {
                    if (n.constraint)
                        continue;
                    let e = ku(n.lookupNodes.length)
                      , r = new Tx(n,e);
                    this.memo.addRelational(r, t)
                }
            if (e instanceof wx) {
                for (let n of e.inputGroup.nodes)
                    if (n instanceof Ax)
                        for (let r of n.collection.indexes) {
                            if (e.predicate instanceof Dx && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof Nx && r.data.supportedLookupTypes.includes(`Equals`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `Equals`,
                                    value: e.predicate.right.value
                                };
                                let i = new Tx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof Hx && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof Nx && r.data.supportedLookupTypes.includes(`NotEquals`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `NotEquals`,
                                    value: e.predicate.right.value
                                };
                                let i = new Tx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof Bx && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof Nx && r.data.supportedLookupTypes.includes(`LessThan`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `LessThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !1
                                };
                                let i = new Tx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof Vx && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof Nx && r.data.supportedLookupTypes.includes(`LessThan`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `LessThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !0
                                };
                                let i = new Tx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof Rx && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof Nx && r.data.supportedLookupTypes.includes(`GreaterThan`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `GreaterThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !1
                                };
                                let i = new Tx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof zx && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof Nx && r.data.supportedLookupTypes.includes(`GreaterThan`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `GreaterThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !0
                                };
                                let i = new Tx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof Fx && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof Nx && r.data.supportedLookupTypes.includes(`Contains`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `Contains`,
                                    value: e.predicate.target.value
                                };
                                let i = new Tx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof Gx && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof Nx && r.data.supportedLookupTypes.includes(`StartsWith`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `StartsWith`,
                                    value: e.predicate.target.value
                                };
                                let i = new Tx(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof Lx && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof Nx && r.data.supportedLookupTypes.includes(`EndsWith`)) {
                                let n = ku(r.lookupNodes.length);
                                n[0] = {
                                    type: `EndsWith`,
                                    value: e.predicate.target.value
                                };
                                let i = new Tx(r,n);
                                this.memo.addRelational(i, t)
                            }
                        }
            }
        }
    }
    ,
    qx = class {
        constructor(e) {
            this.outputFields = e
        }
        isCompatible(e) {
            return this.outputFields.equals(e.outputFields)
        }
    }
    ,
    Jx = class {
        constructor() {
            N(this, `nodes`, new Map),
            N(this, `groups`, [])
        }
        addGroup(e) {
            let t = vu(this.groups.length)
              , n = new $b(t,e);
            return this.groups.push(n),
            n
        }
        addRelational(e, t) {
            let n = e.getHash()
              , r = this.nodes.get(n);
            if (r)
                return r;
            this.nodes.set(n, e);
            let i = e.getOutputFields()
              , a = new qx(i);
            return t ??= this.addGroup(a),
            t.addNode(e),
            L(a.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
        }
        addScalar(e) {
            let t = e.getHash();
            return this.nodes.get(t) || (this.nodes.set(t, e),
            e)
        }
    }
    ,
    Yx = class e extends nx {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous),
            this.input = e,
            this.limit = t,
            this.ordering = n,
            N(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return U(`RelationalLimit`, this.inputGroup.id, this.limit)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering(e) {
            return e.equals(this.ordering)
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new Q(e.resolvedFields);
            return t.merge(this.limit.referencedFields),
            new fx(this.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = this.limit.optimize(e);
            return new Z(0).add(Z.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.limit.getOptimized();
            return new e(r,i,this.ordering)
        }
        *evaluate(e) {
            let {input: t, limit: n} = yield*H({
                input: this.input.evaluate(e),
                limit: this.limit.evaluate(e, void 0)
            })
              , r = eu(n) ?? 1 / 0;
            return r === 1 / 0 ? t : t.slice(0, r)
        }
    }
    ,
    Xx = class e extends nx {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous),
            this.input = e,
            this.offset = t,
            this.ordering = n,
            N(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return U(`RelationalOffset`, this.inputGroup.id, this.offset)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering(e) {
            return e.equals(this.ordering)
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new Q(e.resolvedFields);
            return t.merge(this.offset.referencedFields),
            new fx(this.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = this.offset.optimize(e);
            return new Z(0).add(Z.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.offset.getOptimized();
            return new e(r,i,this.ordering)
        }
        *evaluate(e) {
            let {input: t, offset: n} = yield*H({
                input: this.input.evaluate(e),
                offset: this.offset.evaluate(e, void 0)
            })
              , r = eu(n) ?? 0;
            return r === 0 ? t : t.slice(r)
        }
    }
    ,
    Zx = class e extends $ {
        constructor(e, t, n, r, i) {
            super(r, i, e.isSynchronous),
            this.input = e,
            this.namedFields = t,
            this.ordering = n,
            this.referencedFields = r,
            this.referencedOuterFields = i,
            N(this, `inputGroup`),
            N(this, `definition`),
            this.inputGroup = e.getGroup();
            let a = {}
              , o = Object.entries(t);
            for (let[e,t] of o)
                a[e] = t.definition;
            this.definition = {
                type: `array`,
                isNullable: !1,
                definition: {
                    type: `object`,
                    isNullable: !1,
                    definitions: a
                }
            }
        }
        getHash() {
            let e = {}
              , t = Object.entries(this.namedFields);
            for (let[n,r] of t)
                e[n] = r.id;
            return U(`ScalarArray`, this.inputGroup.id, e, this.ordering, this.referencedFields, this.referencedOuterFields)
        }
        getInputRequiredProps() {
            let e = new Q
              , t = Object.values(this.namedFields);
            for (let n of t) {
                if (gt(n.collection))
                    continue;
                e.add(n)
            }
            return new fx(this.ordering,e)
        }
        optimize(e) {
            let t = this.getInputRequiredProps()
              , n = e.optimizeGroup(this.inputGroup, t);
            return new Z(0).add(n)
        }
        getOptimized() {
            let t = this.getInputRequiredProps()
              , n = this.inputGroup.getOptimized(t);
            return new e(n,this.namedFields,this.ordering,this.referencedFields,this.referencedOuterFields)
        }
        *evaluate(e, t) {
            let n = new mx;
            e && n.merge(e),
            t && n.merge(t);
            let r = yield*this.input.evaluate(n)
              , i = Object.entries(this.namedFields);
            return {
                type: `array`,
                value: r.tuples.map(e => {
                    let t = {};
                    for (let[n,r] of i)
                        t[n] = e.getValue(r);
                    return {
                        type: `object`,
                        value: t
                    }
                }
                )
            }
        }
    }
    ,
    Qx = class e extends $ {
        constructor(e, t) {
            super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            this.input = e,
            this.definition = t,
            L(t.isNullable, `Unsupported non-nullable cast`)
        }
        getHash() {
            return U(`ScalarCast`, this.input, this.definition)
        }
        optimize(e) {
            return this.input.optimize(e)
        }
        getOptimized() {
            let t = this.input.getOptimized();
            return new e(t,this.definition)
        }
        *evaluate(e, t) {
            let n = yield*this.input.evaluate(e, t);
            return X.cast(n, this.definition)
        }
    }
    ,
    $x = class e extends $ {
        constructor(e, t, n, r, i) {
            super(r, i, e.isSynchronous),
            this.input = e,
            this.field = t,
            this.ordering = n,
            this.referencedFields = r,
            this.referencedOuterFields = i,
            N(this, `inputGroup`),
            N(this, `definition`),
            this.inputGroup = e.getGroup(),
            this.definition = {
                type: `array`,
                isNullable: !1,
                definition: t.definition
            }
        }
        getHash() {
            return U(`ScalarFlatArray`, this.inputGroup.id, this.field.id, this.ordering, this.referencedFields, this.referencedOuterFields)
        }
        getInputRequiredProps() {
            let e = new Q;
            return gt(this.field.collection) || e.add(this.field),
            new fx(this.ordering,e)
        }
        optimize(e) {
            let t = this.getInputRequiredProps()
              , n = e.optimizeGroup(this.inputGroup, t);
            return new Z(0).add(n)
        }
        getOptimized() {
            let t = this.getInputRequiredProps()
              , n = this.inputGroup.getOptimized(t);
            return new e(n,this.field,this.ordering,this.referencedFields,this.referencedOuterFields)
        }
        *evaluate(e, t) {
            let n = new mx;
            return e && n.merge(e),
            t && n.merge(t),
            {
                type: `array`,
                value: (yield*this.input.evaluate(n)).tuples.map(e => e.getValue(this.field))
            }
        }
    }
    ,
    eS = {
        type: 0
    },
    tS = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarIn`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: X.in(n, r, eS)
            }
        }
    }
    ,
    nS = {
        type: 1
    },
    rS = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            N(this, `definition`, {
                type: `number`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarIndexOf`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*H({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `number`,
                value: X.indexOf(n, r, nS)
            }
        }
    }
    ,
    iS = class e extends $ {
        constructor(e) {
            super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            this.input = e,
            N(this, `definition`, {
                type: `number`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarLength`, this.input)
        }
        optimize(e) {
            return this.input.optimize(e)
        }
        getOptimized() {
            let t = this.input.getOptimized();
            return new e(t)
        }
        *evaluate(e, t) {
            let n = yield*this.input.evaluate(e, t);
            return {
                type: `number`,
                value: X.length(n)
            }
        }
    }
    ,
    aS = class e extends $ {
        constructor(e) {
            super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            this.input = e,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarNot`, this.input)
        }
        optimize(e) {
            return this.input.optimize(e)
        }
        getOptimized() {
            let t = this.input.getOptimized();
            return new e(t)
        }
        *evaluate(e, t) {
            let n = yield*this.input.evaluate(e, t);
            return {
                type: `boolean`,
                value: !Vl(n)
            }
        }
    }
    ,
    oS = {
        type: 0
    },
    sS = class e extends $ {
        constructor(e, t) {
            let n = new Q;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new Q;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            N(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return U(`ScalarNotIn`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Z.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*H({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: !X.in(n, r, oS)
            }
        }
    }
    ,
    cS = class extends $ {
        constructor(e, t) {
            L(e.name !== ix, `Invalid field name`);
            let n = new Q
              , r = new Q;
            t ? r.add(e) : n.add(e),
            super(n, r, !0),
            this.field = e,
            this.isOuterField = t,
            N(this, `definition`),
            this.definition = e.definition
        }
        getHash() {
            return U(`ScalarVariable`, this.field.id, this.isOuterField)
        }
        optimize() {
            return new Z(0)
        }
        getOptimized() {
            return this
        }
        *evaluate(e, t) {
            return this.isOuterField ? (L(e, `Context must exist`),
            e.getValue(this.field)) : (L(t, `Tuple must exist`),
            t.getValue(this.field))
        }
    }
    ,
    lS = class {
        constructor(e) {
            this.memo = e
        }
        finishRelational(e) {
            return this.memo.addRelational(e)
        }
        newRelationalScan(e) {
            let t = new Ax(e);
            return this.finishRelational(t)
        }
        newRelationalIndexLookup(e, t) {
            let n = new Tx(e,t);
            return this.finishRelational(n)
        }
        newRelationalLeftJoin(e, t, n) {
            let r = new Ox(e,t,n);
            return this.finishRelational(r)
        }
        newRelationalRightJoin(e, t, n) {
            return this.newRelationalLeftJoin(t, e, n)
        }
        newRelationalFilter(e, t) {
            if (e instanceof Ox && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
                let n = this.newRelationalFilter(e.left, t);
                return this.newRelationalLeftJoin(n, e.right, e.constraint)
            }
            if (e instanceof kx && t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)) {
                let n = this.newRelationalFilter(e.right, t);
                return this.newRelationalLeftJoin(e.left, n, e.constraint)
            }
            let n = new wx(e,t);
            return this.finishRelational(n)
        }
        newRelationalProject(e, t, n) {
            let r = new _x(e,t,n);
            return this.finishRelational(r)
        }
        newRelationalLimit(e, t, n) {
            if (e instanceof _x && t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) && n.providedByFields(e.inputGroup.relational.outputFields)) {
                let r = this.newRelationalLimit(e.input, t, n);
                return this.newRelationalProject(r, e.projections, e.passthrough)
            }
            let r = new Yx(e,t,n);
            return this.finishRelational(r)
        }
        newRelationalOffset(e, t, n) {
            let r = new Xx(e,t,n);
            return this.finishRelational(r)
        }
        finishScalar(e) {
            if (!(e instanceof Nx) && e.isSynchronous && e.referencedFields.size === 0 && e.referencedOuterFields.size === 0) {
                let t = e.evaluateSync();
                return this.newScalarConstant(e.definition, t)
            }
            return this.memo.addScalar(e)
        }
        removeUnknown(e, t) {
            if (e.definition.type !== `unknown` || t.type === `unknown`)
                return e;
            let n = {
                ...t,
                isNullable: !0
            };
            return this.newScalarCast(e, n)
        }
        newScalarVariable(e, t) {
            let n = new cS(e,t);
            return this.finishScalar(n)
        }
        newScalarConstant(e, t) {
            let n = new Nx(e,t);
            return this.finishScalar(n)
        }
        newScalarNot(e) {
            if (e instanceof aS)
                return e.input.definition.type === `boolean` ? e.input : this.newScalarCast(e.input, {
                    type: `boolean`,
                    isNullable: !0
                });
            if (e instanceof Dx)
                return this.newScalarNotEquals(e.left, e.right);
            if (e instanceof Hx)
                return this.newScalarEquals(e.left, e.right);
            if (e instanceof Bx)
                return this.newScalarGreaterThanOrEqual(e.left, e.right);
            if (e instanceof Vx)
                return this.newScalarGreaterThan(e.left, e.right);
            if (e instanceof Rx)
                return this.newScalarLessThanOrEqual(e.left, e.right);
            if (e instanceof zx)
                return this.newScalarLessThan(e.left, e.right);
            if (e instanceof Mx) {
                let t = this.newScalarNot(e.left)
                  , n = this.newScalarNot(e.right);
                return this.newScalarOr(t, n)
            }
            if (e instanceof Ux) {
                let t = this.newScalarNot(e.left)
                  , n = this.newScalarNot(e.right);
                return this.newScalarAnd(t, n)
            }
            let t = new aS(e);
            return this.finishScalar(t)
        }
        newScalarAnd(e, t) {
            let n = new Mx(e,t);
            return this.finishScalar(n)
        }
        newScalarOr(e, t) {
            let n = new Ux(e,t);
            return this.finishScalar(n)
        }
        newScalarEquals(e, t) {
            let n = e instanceof cS;
            if (t instanceof cS && !n)
                return this.newScalarEquals(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new Dx(e,t);
            return this.finishScalar(r)
        }
        newScalarNotEquals(e, t) {
            let n = e instanceof cS;
            if (t instanceof cS && !n)
                return this.newScalarNotEquals(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new Hx(e,t);
            return this.finishScalar(r)
        }
        newScalarLessThan(e, t) {
            let n = e instanceof cS;
            if (t instanceof cS && !n)
                return this.newScalarGreaterThan(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new Bx(e,t);
            return this.finishScalar(r)
        }
        newScalarLessThanOrEqual(e, t) {
            let n = e instanceof cS;
            if (t instanceof cS && !n)
                return this.newScalarGreaterThanOrEqual(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new Vx(e,t);
            return this.finishScalar(r)
        }
        newScalarGreaterThan(e, t) {
            let n = e instanceof cS;
            if (t instanceof cS && !n)
                return this.newScalarLessThan(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new Rx(e,t);
            return this.finishScalar(r)
        }
        newScalarGreaterThanOrEqual(e, t) {
            let n = e instanceof cS;
            if (t instanceof cS && !n)
                return this.newScalarLessThanOrEqual(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new zx(e,t);
            return this.finishScalar(r)
        }
        newScalarIn(e, t) {
            t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
            let n = {
                type: `array`,
                isNullable: !0,
                definition: e.definition
            };
            t = this.removeUnknown(t, n);
            let r = new tS(e,t);
            return this.finishScalar(r)
        }
        newScalarNotIn(e, t) {
            t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
            let n = {
                type: `array`,
                isNullable: !0,
                definition: e.definition
            };
            t = this.removeUnknown(t, n);
            let r = new sS(e,t);
            return this.finishScalar(r)
        }
        newScalarCase(e, t, n) {
            if (e) {
                let n = [];
                for (let {when: r, then: i} of t) {
                    let t = this.removeUnknown(r, e.definition)
                      , a = new bx(t,i);
                    n.push(a)
                }
                t = n
            }
            let r = new xx(e,t,n);
            return this.finishScalar(r)
        }
        newScalarContains(e, t) {
            let n = new Fx(e,t);
            return this.finishScalar(n)
        }
        newScalarStartsWith(e, t) {
            let n = new Gx(e,t);
            return this.finishScalar(n)
        }
        newScalarEndsWith(e, t) {
            let n = new Lx(e,t);
            return this.finishScalar(n)
        }
        newScalarLength(e) {
            let t = new iS(e);
            return this.finishScalar(t)
        }
        newScalarIndexOf(e, t) {
            let n = new rS(e,t);
            return this.finishScalar(n)
        }
        newScalarArray(e, t, n, r, i) {
            let a = new Zx(e,t,n,r,i);
            return this.finishScalar(a)
        }
        newScalarFlatArray(e, t, n, r, i) {
            let a = new $x(e,t,n,r,i);
            return this.finishScalar(a)
        }
        newScalarCast(e, t) {
            if (e.definition.type === t.type)
                return e;
            let n = new Qx(e,t);
            return this.finishScalar(n)
        }
    }
    ,
    uS = class extends nx {
    }
    ,
    dS = class e extends uS {
        constructor(e, t, n) {
            super(!1),
            this.input = e,
            this.fields = t,
            this.resolver = n,
            N(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return U(`EnforcerResolve`, this.inputGroup.id, this.fields)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering() {
            return !0
        }
        canProvideResolvedFields(e) {
            return e.subsetOf(this.fields)
        }
        getInputRequiredProps(e) {
            let t = new Q;
            return new fx(e.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n);
            return Z.estimate(0, 100 * Qb).add(r)
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n);
            return new e(r,this.fields,this.resolver)
        }
        *evaluate(e) {
            let t = yield*this.input.evaluate(e);
            L(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
            let n = new Set;
            for (let e of this.fields)
                L(e.collection, `Collection required to resolve field`),
                n.add(e.collection);
            for (let e of t.tuples)
                for (let t of this.fields) {
                    let n = e.getValue(t);
                    n?.type === `richtext` ? this.resolver.preloadRichTextValue(n) : n?.type === `vectorsetitem` && this.resolver.preloadVectorSetItemValue(n)
                }
            let r = yield Promise.all(Array.from(n).map(async e => {
                let n = [];
                for (let r of t.tuples) {
                    let t = r.getPointer(e);
                    t && n.push(t)
                }
                let r = await e.data.resolveItems(n);
                return L(r.length === n.length, `Invalid number of items`),
                [e, r]
            }
            ));
            return t.map(t.fields, e => {
                let t = new mx;
                t.merge(e);
                for (let[n,i] of r) {
                    let r = e.getPointer(n);
                    if (!r)
                        continue;
                    let a = i.shift();
                    L(a, `Item not found`),
                    L(a.pointer === r, `Pointer mismatch`);
                    for (let e of n.fields) {
                        let n = e.getValue(a);
                        t.addValue(e, n)
                    }
                }
                return t
            }
            )
        }
    }
    ,
    fS = {
        type: 0
    },
    pS = class e extends uS {
        constructor(e, t) {
            super(e.isSynchronous),
            this.input = e,
            this.ordering = t,
            N(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return U(`EnforcerSort`, this.inputGroup.id, this.ordering)
        }
        getOutputFields() {
            return this.inputGroup.relational.outputFields
        }
        canProvideOrdering(e) {
            return e.equals(this.ordering)
        }
        canProvideResolvedFields() {
            return !0
        }
        getInputRequiredProps(e) {
            let t = new Q(e.resolvedFields);
            for (let {field: e} of this.ordering.fields) {
                if (e.name === ix || gt(e.collection))
                    continue;
                t.add(e)
            }
            let n = new dx;
            return new fx(n,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n);
            return new Z(0).add(r)
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n);
            return new e(r,this.ordering)
        }
        *evaluate(e) {
            return (yield*this.input.evaluate(e)).sort( (e, t) => {
                for (let {field: n, direction: r} of this.ordering.fields) {
                    let i = r === `asc`;
                    if (n.name === ix) {
                        let r = n.collection;
                        L(r, `Collection required for sorting`);
                        let a = e.getPointer(r);
                        L(a, `Pointer required for sorting`);
                        let o = {
                            pointer: a,
                            data: {}
                        }
                          , s = t.getPointer(r);
                        L(s, `Pointer required for sorting`);
                        let c = {
                            pointer: s,
                            data: {}
                        }
                          , l = r.data.compareItems(o, c);
                        return i ? l : -l
                    }
                    let a = e.getValue(n)
                      , o = t.getValue(n);
                    if (X.equal(a, o, fS))
                        continue;
                    if (_t(a) || X.lessThan(a, o, fS))
                        return i ? -1 : 1;
                    if (_t(o) || X.greaterThan(a, o, fS))
                        return i ? 1 : -1;
                    throw Error(`Invalid comparison`)
                }
                return 0
            }
            )
        }
    }
    ,
    mS = class {
        constructor(e, t, n) {
            this.query = e,
            this.locale = t,
            this.resolver = n,
            N(this, `memo`, new Jx),
            N(this, `normalizer`, new lS(this.memo)),
            N(this, `explorer`, new Kx(this.normalizer))
        }
        optimize() {
            let e = new Sx(this.normalizer,this.query,this.locale).build()
              , t = e.takeNode().getGroup()
              , n = e.getRequiredProps();
            this.optimizeGroup(t, n);
            let r = t.getOptimized(n)
              , i = e.getNamedFields();
            return [r, i]
        }
        optimizeGroup(e, t) {
            let n = e.getWinner(t);
            if (n.node)
                return n.cost;
            let r = e.nodes[0];
            L(r, `Normalized node not found`),
            this.createEnforcer(n, r, t);
            for (let r of e.nodes) {
                if (t.canProvide(r)) {
                    let e = r.optimize(this, t);
                    n.update(r, e)
                }
                t.isMinimal && this.explorer.explore(r)
            }
            return n.cost
        }
        createEnforcer(e, t, n) {
            if (n.resolvedFields.size > 0) {
                let r = new dS(t,n.resolvedFields,this.resolver)
                  , i = r.optimize(this, n);
                e.update(r, i)
            }
            if (n.ordering.length > 0) {
                let r = new pS(t,n.ordering)
                  , i = r.optimize(this, n);
                e.update(r, i)
            }
        }
    }
    ,
    hS = Tl(`query-engine`),
    gS = class {
        async evalQuery(e, t, n) {
            hS.enabled && hS.debug(`Query:
${Hu(e)}`);
            let r = new rx(e,t)
              , [i,a] = new mS(e,t,r).optimize()
              , o = await i.evaluateAsync()
              , s = Object.entries(a)
              , c = []
              , l = Ol(kl(o.tuples.map(e => {
                let t = {}
                  , i = {};
                for (let[a,o] of s) {
                    let s = e.getValue(o);
                    t[a] = r.resolveValue(s),
                    n && (i[a] = s)
                }
                return n && c.push(i),
                H(t)
            }
            )));
            return n ? [St(l) ? await l : l, c] : l
        }
        async serializeableQuery(e, t) {
            return this.evalQuery(e, t, !0)
        }
        async query(e, t) {
            return this.evalQuery(e, t, !1)
        }
        resolveSerializableQueryResult(e, t, n) {
            let r = new rx(t,n);
            return Ol(kl(e.map(e => {
                let t = {}, n;
                for (n in e) {
                    let i = e[n];
                    t[n] = r.resolveValue(i)
                }
                return H(t)
            }
            )))
        }
    }
    ,
    _S = `style[data-framer-breakpoint-css]`,
    vS = `page`,
    yS = Symbol(`cycle`),
    SS = {
        Arial: {
            Regular: {
                selector: `Arial`,
                weight: void 0
            },
            Black: {
                selector: `Arial-Black`,
                weight: void 0
            },
            Narrow: {
                selector: `Arial Narrow`,
                weight: void 0
            },
            "Rounded Bold": {
                selector: `Arial Rounded MT Bold`,
                weight: void 0
            }
        },
        Avenir: {
            Book: {
                selector: `Avenir`,
                weight: void 0
            },
            Light: {
                selector: `Avenir-Light`,
                weight: void 0
            },
            Medium: {
                selector: `Avenir-Medium`,
                weight: void 0
            },
            Heavy: {
                selector: `Avenir-Heavy`,
                weight: void 0
            },
            Black: {
                selector: `Avenir-Black`,
                weight: void 0
            }
        },
        "Avenir Next": {
            Regular: {
                selector: `Avenir Next`,
                weight: void 0
            },
            "Ultra Light": {
                selector: `AvenirNext-UltraLight`,
                weight: void 0
            },
            Medium: {
                selector: `AvenirNext-Medium`,
                weight: void 0
            },
            "Demi Bold": {
                selector: `AvenirNext-DemiBold`,
                weight: void 0
            },
            Heavy: {
                selector: `AvenirNext-Heavy`,
                weight: void 0
            }
        },
        "Avenir Next Condensed": {
            Regular: {
                selector: `Avenir Next Condensed`,
                weight: void 0
            },
            "Ultra Light": {
                selector: `AvenirNextCondensed-UltraLight`,
                weight: void 0
            },
            Medium: {
                selector: `AvenirNextCondensed-Medium`,
                weight: void 0
            },
            "Demi Bold": {
                selector: `AvenirNextCondensed-DemiBold`,
                weight: void 0
            },
            Heavy: {
                selector: `AvenirNextCondensed-Heavy`,
                weight: void 0
            }
        },
        Baskerville: {
            Regular: {
                selector: `Baskerville`,
                weight: void 0
            },
            "Semi Bold": {
                selector: `Baskerville-SemiBold`,
                weight: void 0
            }
        },
        "Bodoni 72": {
            Book: {
                selector: `Bodoni 72`,
                weight: void 0
            },
            Oldstyle: {
                selector: `Bodoni 72 Oldstyle`,
                weight: void 0
            },
            Smallcaps: {
                selector: `Bodoni 72 Smallcaps`,
                weight: void 0
            }
        },
        Courier: {
            Regular: {
                selector: `Courier`,
                weight: void 0
            }
        },
        "Courier New": {
            Regular: {
                selector: `Courier New`,
                weight: void 0
            }
        },
        Futura: {
            Medium: {
                selector: `Futura`,
                weight: void 0
            },
            Condensed: {
                selector: `Futura-CondensedMedium`,
                weight: void 0
            },
            "Condensed ExtraBold": {
                selector: `Futura-CondensedExtraBold`,
                weight: void 0
            }
        },
        Georgia: {
            Regular: {
                selector: `Georgia`,
                weight: void 0
            }
        },
        "Gill Sans": {
            Regular: {
                selector: `Gill Sans`,
                weight: void 0
            },
            Light: {
                selector: `GillSans-Light`,
                weight: void 0
            },
            SemiBold: {
                selector: `GillSans-SemiBold`,
                weight: void 0
            },
            UltraBold: {
                selector: `GillSans-UltraBold`,
                weight: void 0
            }
        },
        Helvetica: {
            Regular: {
                selector: `Helvetica`,
                weight: void 0
            },
            Light: {
                selector: `Helvetica-Light`,
                weight: void 0
            },
            Bold: {
                selector: `Helvetica-Bold`,
                weight: void 0
            },
            Oblique: {
                selector: `Helvetica-Oblique`,
                weight: void 0
            },
            "Light Oblique": {
                selector: `Helvetica-LightOblique`,
                weight: void 0
            },
            "Bold Oblique": {
                selector: `Helvetica-BoldOblique`,
                weight: void 0
            }
        },
        "Helvetica Neue": {
            Regular: {
                selector: `Helvetica Neue`,
                weight: void 0
            },
            UltraLight: {
                selector: `HelveticaNeue-UltraLight`,
                weight: void 0
            },
            Thin: {
                selector: `HelveticaNeue-Thin`,
                weight: void 0
            },
            Light: {
                selector: `HelveticaNeue-Light`,
                weight: void 0
            },
            Medium: {
                selector: `HelveticaNeue-Medium`,
                weight: void 0
            },
            Bold: {
                selector: `HelveticaNeue-Bold`,
                weight: void 0
            },
            Italic: {
                selector: `HelveticaNeue-Italic`,
                weight: void 0
            },
            "UltraLight Italic": {
                selector: `HelveticaNeue-UltraLightItalic`,
                weight: void 0
            },
            "Thin Italic": {
                selector: `HelveticaNeue-ThinItalic`,
                weight: void 0
            },
            "Light Italic": {
                selector: `HelveticaNeue-LightItalic`,
                weight: void 0
            },
            "Medium Italic": {
                selector: `HelveticaNeue-MediumItalic`,
                weight: void 0
            },
            "Bold Italic": {
                selector: `HelveticaNeue-BoldItalic`,
                weight: void 0
            },
            "Condensed Bold": {
                selector: `HelveticaNeue-CondensedBold`,
                weight: void 0
            },
            "Condensed Black": {
                selector: `HelveticaNeue-CondensedBlack`,
                weight: void 0
            }
        },
        "Hoefler Text": {
            Regular: {
                selector: `Hoefler Text`,
                weight: void 0
            }
        },
        Impact: {
            Regular: {
                selector: `Impact`,
                weight: void 0
            }
        },
        "Lucida Grande": {
            Regular: {
                selector: `Lucida Grande`,
                weight: void 0
            }
        },
        Menlo: {
            Regular: {
                selector: `Menlo`,
                weight: void 0
            }
        },
        Monaco: {
            Regular: {
                selector: `Monaco`,
                weight: void 0
            }
        },
        Optima: {
            Regular: {
                selector: `Optima`,
                weight: void 0
            },
            ExtraBlack: {
                selector: `Optima-ExtraBlack`,
                weight: void 0
            }
        },
        Palatino: {
            Regular: {
                selector: `Palatino`,
                weight: void 0
            }
        },
        "SF Pro Display": {
            Regular: {
                selector: `__SF-UI-Display-Regular__`,
                weight: 400
            },
            Ultralight: {
                selector: `__SF-UI-Display-Ultralight__`,
                weight: 100
            },
            Thin: {
                selector: `__SF-UI-Display-Thin__`,
                weight: 200
            },
            Light: {
                selector: `__SF-UI-Display-Light__`,
                weight: 300
            },
            Medium: {
                selector: `__SF-UI-Display-Medium__`,
                weight: 500
            },
            Semibold: {
                selector: `__SF-UI-Display-Semibold__`,
                weight: 600
            },
            Bold: {
                selector: `__SF-UI-Display-Bold__`,
                weight: 700
            },
            Heavy: {
                selector: `__SF-UI-Display-Heavy__`,
                weight: 800
            },
            Black: {
                selector: `__SF-UI-Display-Black__`,
                weight: 900
            },
            Italic: {
                selector: `__SF-UI-Display-Italic__`,
                weight: 400
            },
            "Ultralight Italic": {
                selector: `__SF-UI-Display-Ultralight-Italic__`,
                weight: 100
            },
            "Thin Italic": {
                selector: `__SF-UI-Display-Thin-Italic__`,
                weight: 200
            },
            "Light Italic": {
                selector: `__SF-UI-Display-Light-Italic__`,
                weight: 300
            },
            "Medium Italic": {
                selector: `__SF-UI-Display-Medium-Italic__`,
                weight: 500
            },
            "Semibold Italic": {
                selector: `__SF-UI-Display-Semibold-Italic__`,
                weight: 600
            },
            "Bold Italic": {
                selector: `__SF-UI-Display-Bold-Italic__`,
                weight: 700
            },
            "Heavy Italic": {
                selector: `__SF-UI-Display-Heavy-Italic__`,
                weight: 800
            },
            "Black Italic": {
                selector: `__SF-UI-Display-Black-Italic__`,
                weight: 900
            }
        },
        "SF Pro Display Condensed": {
            Regular: {
                selector: `__SF-UI-Display-Condensed-Regular__`,
                weight: 400
            },
            Ultralight: {
                selector: `__SF-UI-Display-Condensed-Ultralight__`,
                weight: 100
            },
            Thin: {
                selector: `__SF-UI-Display-Condensed-Thin__`,
                weight: 200
            },
            Light: {
                selector: `__SF-UI-Display-Condensed-Light__`,
                weight: 300
            },
            Medium: {
                selector: `__SF-UI-Display-Condensed-Medium__`,
                weight: 500
            },
            Semibold: {
                selector: `__SF-UI-Display-Condensed-Semibold__`,
                weight: 600
            },
            Bold: {
                selector: `__SF-UI-Display-Condensed-Bold__`,
                weight: 700
            },
            Heavy: {
                selector: `__SF-UI-Display-Condensed-Heavy__`,
                weight: 800
            },
            Black: {
                selector: `__SF-UI-Display-Condensed-Black__`,
                weight: 900
            }
        },
        "SF Pro Text": {
            Regular: {
                selector: `__SF-UI-Text-Regular__`,
                weight: 400
            },
            Light: {
                selector: `__SF-UI-Text-Light__`,
                weight: 200
            },
            Medium: {
                selector: `__SF-UI-Text-Medium__`,
                weight: 500
            },
            Semibold: {
                selector: `__SF-UI-Text-Semibold__`,
                weight: 600
            },
            Bold: {
                selector: `__SF-UI-Text-Bold__`,
                weight: 700
            },
            Heavy: {
                selector: `__SF-UI-Text-Heavy__`,
                weight: 800
            },
            Italic: {
                selector: `__SF-UI-Text-Italic__`,
                weight: 400
            },
            "Light Italic": {
                selector: `__SF-UI-Text-Light-Italic__`,
                weight: 200
            },
            "Medium Italic": {
                selector: `__SF-UI-Text-Medium-Italic__`,
                weight: 500
            },
            "Semibold Italic": {
                selector: `__SF-UI-Text-Semibold-Italic__`,
                weight: 600
            },
            "Bold Italic": {
                selector: `__SF-UI-Text-Bold-Italic__`,
                weight: 700
            },
            "Heavy Italic": {
                selector: `__SF-UI-Text-Heavy-Italic__`,
                weight: 800
            }
        },
        "SF Pro Text Condensed": {
            Regular: {
                selector: `__SF-UI-Text-Condensed-Regular__`,
                weight: 400
            },
            Light: {
                selector: `__SF-UI-Text-Condensed-Light__`,
                weight: 200
            },
            Medium: {
                selector: `__SF-UI-Text-Condensed-Medium__`,
                weight: 500
            },
            Semibold: {
                selector: `__SF-UI-Text-Condensed-Semibold__`,
                weight: 600
            },
            Bold: {
                selector: `__SF-UI-Text-Condensed-Bold__`,
                weight: 700
            },
            Heavy: {
                selector: `__SF-UI-Text-Condensed-Heavy__`,
                weight: 800
            }
        },
        Tahoma: {
            Regular: {
                selector: `Tahoma`,
                weight: void 0
            }
        },
        Times: {
            Regular: {
                selector: `Times`,
                weight: void 0
            }
        },
        "Times New Roman": {
            Regular: {
                selector: `Times New Roman`,
                weight: void 0
            }
        },
        Trebuchet: {
            Regular: {
                selector: `Trebuchet MS`,
                weight: void 0
            }
        },
        Verdana: {
            Regular: {
                selector: `Verdana`,
                weight: void 0
            }
        }
    },
    CS = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`
    },
    wS = SS,
    TS = `System Default`,
    ES = class {
        constructor() {
            N(this, `name`, `local`),
            N(this, `fontFamilies`, []),
            N(this, `byFamilyName`, new Map),
            N(this, `fontAliasBySelector`, new Map),
            N(this, `fontAliases`, new Map)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        createFontFamily(e) {
            let t = {
                name: e,
                fonts: [],
                source: this.name
            };
            return this.addFontFamily(t),
            t
        }
        addFontFamily(e) {
            this.fontFamilies.push(e),
            this.byFamilyName.set(e.name, e)
        }
        importFonts() {
            let e = [];
            for (let t of Object.keys(wS)) {
                let n = wS[t];
                if (!n)
                    continue;
                let r = this.createFontFamily(t);
                for (let e of Object.keys(n)) {
                    let t = n[e];
                    if (!t)
                        continue;
                    let {selector: i, weight: a} = t
                      , o = {
                        variant: e,
                        selector: i,
                        weight: a,
                        family: r,
                        cssFamilyName: r.name
                    };
                    r.fonts.push(o)
                }
                e.push(...r.fonts)
            }
            for (let[e,t] of Object.entries(CS))
                this.addFontAlias(e, t);
            let {fontFamily: t, aliases: n} = this.getSystemFontFamily();
            this.addFontFamily(t);
            for (let[e,t] of n)
                this.addFontAlias(e, t);
            return e.push(...t.fonts),
            e
        }
        addFontAlias(e, t) {
            this.fontAliases.set(e, t),
            this.fontAliasBySelector.set(t, e)
        }
        getSystemFontFamily() {
            let e = {
                name: TS,
                fonts: [],
                source: this.name
            }
              , t = new Map
              , n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
            for (let r of [`normal`, `italic`])
                for (let i of n) {
                    let n = yd(i, r)
                      , a = `__SystemDefault-${i}-${r}__`
                      , o = {
                        variant: n,
                        selector: a,
                        style: r,
                        weight: i,
                        family: e,
                        cssFamilyName: e.name
                    };
                    e.fonts.push(o),
                    t.set(a, `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`)
                }
            return {
                fontFamily: e,
                aliases: t
            }
        }
        getFontAliasBySelector(e) {
            return this.fontAliasBySelector.get(e) || null
        }
        getFontSelectorByAlias(e) {
            return this.fontAliases.get(e) || null
        }
        isFontFamilyAlias(e) {
            return !!(e && /^__.*__$/u.exec(e))
        }
    }
    ,
    DS = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`
    },
    OS = class extends Map {
        constructor() {
            super(...arguments),
            N(this, `_hash`, 0)
        }
        get hash() {
            return this._hash
        }
        set(e, t) {
            return this._hash++,
            super.set(e, t)
        }
        delete(e) {
            return this._hash++,
            super.delete(e)
        }
        clear() {
            return this._hash++,
            super.clear()
        }
    }
    ,
    kS = `Variable`,
    AS = `BI;`,
    jS = class {
        constructor() {
            N(this, `name`, `builtIn`),
            N(this, `fontFamilies`, []),
            N(this, `byFamilyName`, new Map),
            N(this, `assetByKey`, new Map)
        }
        importFonts(e) {
            this.fontFamilies.length = 0,
            this.byFamilyName.clear(),
            this.assetByKey.clear();
            let t = [];
            for (let n of e) {
                if (!this.isValidBuiltInFont(n))
                    continue;
                let {properties: e} = n
                  , r = e.font.fontFamily
                  , i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion)
                  , a = e.font.openTypeData
                  , o = e.font.variationAxes
                  , s = Array.isArray(o)
                  , c = s ? `variable` : e.font.fontSubFamily || `regular`
                  , l = Aa(n)
                  , u = {
                    assetKey: n.key,
                    family: i,
                    selector: this.createSelector(r, c, e.font.fontVersion),
                    variant: c,
                    file: l,
                    hasOpenTypeFeatures: Sd(a),
                    variationAxes: Cd(o),
                    category: e.font.fontCategory,
                    weight: Ed(c),
                    style: Od(c),
                    cssFamilyName: bd(r, s)
                };
                i.fonts.push(u),
                this.assetByKey.set(n.key, n),
                t.push(u)
            }
            for (let e of this.fontFamilies)
                e.fonts.sort( (e, t) => {
                    let n = Ed(e.variant)
                      , r = Ed(t.variant);
                    return !n || !r ? 1 : n - r
                }
                );
            return t
        }
        static parseVariant(e) {
            let t = Dd(e)
              , n = MS[t]
              , r = Od(e);
            return {
                weight: n,
                style: r
            }
        }
        getFontBySelector(e) {
            let t = this.parseSelector(e);
            if (!t)
                return;
            let n = this.getFontFamilyByName(t.name);
            if (n)
                return n.fonts.find(t => t.selector === e)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        createFontFamily(e, t, n) {
            let r = this.byFamilyName.get(e);
            if (r && r.version === n)
                return r;
            let i = {
                source: this.name,
                name: e,
                fonts: [],
                foundryName: t,
                version: n
            };
            return this.addFontFamily(i),
            i
        }
        getOpenTypeFeatures(e) {
            L(e.assetKey, `Font must have an asset key`);
            let t = this.assetByKey.get(e.assetKey)
              , n = t?.properties?.font?.openTypeData;
            return Sd(n) ? n?.map(e => {
                if (wd(e))
                    return {
                        tag: e.tag,
                        coverage: e.coverage
                    }
            }
            ) : []
        }
        isValidBuiltInFont(e) {
            return !e.mimeType.startsWith(`font/`) || e.properties?.kind !== `font` || !e.properties.font || !e.properties.font.fontVersion || !e.properties.font.fontFamily ? !1 : `fontFamily`in e.properties.font
        }
        createSelector(e, t, n) {
            return `${AS}${e}/${t}/${n}`
        }
        parseSelector(e) {
            if (!e.startsWith(AS))
                return null;
            let[t,n] = e.split(AS);
            if (n === void 0)
                return null;
            let[r,i,a] = n.split(`/`);
            return !r || !i || !a ? null : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`)
            }
        }
        addFontFamily(e) {
            this.fontFamilies.push(e),
            this.byFamilyName.set(e.name, e)
        }
    }
    ,
    MS = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        variable: 1e3,
        "variable-italic": 1e3
    },
    NS = Tl(`custom-font-source`),
    PS = `CUSTOM;`,
    FS = `CUSTOMV2;`,
    IS = class e {
        constructor() {
            N(this, `name`, `custom`),
            N(this, `fontFamilies`, []),
            N(this, `byFamilyName`, new Map),
            N(this, `assetsByKey`, new Map)
        }
        deprecatedImportFonts(t) {
            this.fontFamilies.length = 0,
            this.byFamilyName.clear(),
            this.assetsByKey.clear();
            let n = [];
            for (let r of t) {
                if (!this.isValidCustomFontAsset(r))
                    continue;
                let t = r.properties?.font.variationAxes
                  , i = Array.isArray(t)
                  , a = Ld(r.properties)
                  , o = this.createFontFamily(a)
                  , s = r.properties?.font.openTypeData
                  , c = i ? `variable` : this.inferVariantName(a)
                  , l = Aa(r)
                  , u = e.createLegacySelector(a)
                  , {family: d, variant: f} = Rd(r.properties.font)
                  , p = e.createSelector(d, f)
                  , m = {
                    assetKey: r.key,
                    family: o,
                    selector: u,
                    variant: c,
                    file: l,
                    hasOpenTypeFeatures: Sd(s),
                    variationAxes: Cd(t),
                    owner: Vd(r),
                    cssFamilyName: e.cssFontFamilyFromSelector(u),
                    alternativeSelectors: {
                        [p]: {
                            variant: f,
                            cssFamilyName: e.cssFontFamilyFromSelector(p)
                        }
                    }
                };
                o.fonts.push(m),
                this.assetsByKey.set(r.key, r),
                n.push(...o.fonts)
            }
            return n
        }
        importFonts(t, n) {
            if (!n)
                return this.deprecatedImportFonts(t);
            this.fontFamilies.length = 0,
            this.byFamilyName.clear(),
            this.assetsByKey.clear();
            let r = {};
            for (let n of t) {
                if (!this.isValidCustomFontAsset(n))
                    continue;
                let {family: t, variant: i, weight: a, style: o} = Rd(n.properties.font)
                  , s = n.properties.font.variationAxes
                  , c = Array.isArray(s)
                  , l = n.properties.font.openTypeData
                  , u = Aa(n)
                  , d = Vd(n)
                  , f = Ld(n.properties)
                  , p = e.createLegacySelector(f)
                  , m = this.createFontFamily(t)
                  , h = e.createSelector(m.name, i)
                  , g = {
                    assetKey: n.key,
                    family: m,
                    selector: h,
                    variant: i,
                    weight: a,
                    style: o,
                    file: u,
                    hasOpenTypeFeatures: Sd(l),
                    variationAxes: Cd(s),
                    owner: d,
                    alternativeSelectors: {
                        [p]: {
                            variant: c ? `variable` : this.inferVariantName(f),
                            cssFamilyName: e.cssFontFamilyFromSelector(p)
                        }
                    },
                    cssFamilyName: e.cssFontFamilyFromSelector(h)
                }
                  , _ = Id(m.fonts, g);
                if (_?.projectDuplicate)
                    g.owner === `project` && (m.fonts[_.index] = g,
                    r[h] = g);
                else if (_) {
                    NS.warn(`Duplicate font found for:`, g, `with existing font:`, _.existingFont);
                    let e = _.existingFont
                      , t = g.file?.endsWith(`.woff2`) ?? !1
                      , n = e.file?.endsWith(`.woff2`) ?? !1;
                    t && !n && (m.fonts[_.index] = g,
                    r[h] = g)
                } else
                    m.fonts.push(g),
                    r[h] = g;
                this.assetsByKey.set(n.key, n)
            }
            for (let e of this.fontFamilies)
                e.fonts.length > 0 && Bd(e);
            return Object.values(r)
        }
        static createSelector(e, t) {
            return `${FS}${e}${t ? ` ${t}` : ``}`
        }
        static createLegacySelector(e) {
            return `${PS}${e}`
        }
        static cssFontFamilyFromSelector(e) {
            return L(Nd(e), `Selector must be a custom font selector`),
            Fd(e) ? e.slice(PS.length) : e.slice(FS.length)
        }
        isValidCustomFontAsset(e) {
            return !e.mimeType.startsWith(`font/`) || e.properties?.kind !== `font` || !e.properties.font ? !1 : `fontFamily`in e.properties.font
        }
        getOpenTypeFeatures(e) {
            L(e.assetKey, `Font must have an asset key`);
            let t = this.assetsByKey.get(e.assetKey)
              , n = t?.properties?.font?.openTypeData;
            return Sd(n) ? n?.map(e => {
                if (wd(e))
                    return {
                        tag: e.tag,
                        coverage: e.coverage
                    }
            }
            ) : []
        }
        inferVariantName(e) {
            let t = [`thin`, `ultra light`, `extra light`, `light`, `normal`, `medium`, `semi bold`, `bold`, `extra bold`, `black`]
              , n = [...t.map(e => `${e} italic`), ...t]
              , r = e.toLowerCase()
              , i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)]
              , a = n.find(e => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
            return a ? a.replace(/^\w|\s\w/gu, e => e.toUpperCase()) : `Regular`
        }
        createFontFamily(e) {
            let t = this.byFamilyName.get(e);
            if (t)
                return t;
            let n = {
                source: this.name,
                name: e,
                fonts: []
            };
            return this.addFontFamily(n),
            n
        }
        addFontFamily(e) {
            this.fontFamilies.push(e),
            this.byFamilyName.set(e.name, e)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) || null
        }
    }
    ,
    LS = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`],
    RS = `FS;`,
    zS = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900
    },
    BS = Object.keys(zS),
    VS = ( () => RegExp(`^(?:${[...BS, `italic`, `variable`].join(`|`)})`, `u`))(),
    HS = class e {
        constructor() {
            N(this, `name`, `fontshare`),
            N(this, `fontFamilies`, []),
            N(this, `byFamilyName`, new Map)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        static parseVariant(e) {
            let t = e.toLowerCase().split(` `)
              , n = BS.find(e => t.includes(e))
              , r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
            return {
                weight: n && zS[n] || 400,
                style: r === `italic` ? r : `normal`
            }
        }
        parseSelector(e) {
            if (!e.startsWith(RS))
                return null;
            let t = e.split(`-`);
            if (t.length !== 2)
                return null;
            let[n,r] = t;
            return !n || !r ? null : {
                name: n.replace(RS, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`)
            }
        }
        static createSelector(e, t) {
            return `${RS}${e}-${t.toLowerCase()}`
        }
        static createMetadataSelector(e) {
            return `${RS}${e}`
        }
        addFontFamily(e) {
            this.fontFamilies.push(e),
            this.byFamilyName.set(e.name, e)
        }
        async importFonts(t, n) {
            this.fontFamilies.length = 0,
            this.byFamilyName.clear();
            let r = await Hd(`fontshare`)
              , i = [];
            for (let a of t) {
                let t = a.font_styles.filter(e => {
                    let t = e.name.toLowerCase();
                    return !(!VS.exec(t) || t.split(` `).includes(`wide`))
                }
                ).map(t => ({
                    ...e.parseVariant(t.name),
                    selector: e.createSelector(a.name, t.name),
                    isVariable: t.is_variable,
                    fontshareVariantName: t.name,
                    file: t.file
                }))
                  , o = e.createMetadataSelector(a.name)
                  , s = n?.[o]
                  , c = a.name
                  , l = this.getFontFamilyByName(c);
                l || (l = {
                    name: c,
                    fonts: [],
                    source: this.name
                },
                this.addFontFamily(l));
                let u = e.createMetadataSelector(a.name)
                  , d = r[u];
                for (let e of t) {
                    let {variantBold: n, variantBoldItalic: r, variantItalic: o, variantVariable: c, variantVariableItalic: u} = kd(e, t)
                      , f = {
                        family: l,
                        variant: e.fontshareVariantName.toLowerCase(),
                        selector: e.selector,
                        selectorBold: n?.selector,
                        selectorBoldItalic: r?.selector,
                        selectorItalic: o?.selector,
                        selectorVariable: c?.selector,
                        selectorVariableItalic: u?.selector,
                        weight: e.weight,
                        style: e.style,
                        file: e.file,
                        category: Kd(a.category),
                        hasOpenTypeFeatures: d,
                        variationAxes: e.isVariable ? s : void 0,
                        cssFamilyName: bd(l.name, e.isVariable)
                    };
                    l.fonts.push(f),
                    i.push(f)
                }
            }
            return i
        }
        async getOpenTypeFeatures(t) {
            let n = await Ud(`fontshare`)
              , r = e.createMetadataSelector(t.family.name);
            return n[r]
        }
    }
    ,
    US = `Inter`,
    WS = `FR;`,
    GS = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900
    },
    KS = class e {
        constructor() {
            N(this, `name`, `framer`),
            N(this, `fontFamilies`, []),
            N(this, `byFamilyName`, new Map)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        addFontFamily(e) {
            let t = {
                name: e,
                fonts: [],
                source: this.name
            };
            return this.fontFamilies.push(t),
            this.byFamilyName.set(t.name, t),
            t
        }
        static getDraftFontPropertiesBySelector(e) {
            if (!e.startsWith(WS) && !e.startsWith(US))
                return null;
            let[t,n=``] = e.split(`-`);
            if (!t)
                return null;
            let r = n.includes(`Italic`) ? `italic` : `normal`
              , i = n.replace(`Italic`, ``)
              , a = i && GS[i] || 400;
            return {
                cssFamilyName: t,
                style: r,
                weight: a,
                source: `framer`,
                variant: void 0,
                category: `sans-serif`
            }
        }
        static createMetadataSelector(e) {
            return `${WS}${e}`
        }
        importFonts(t, n) {
            this.fontFamilies.length = 0,
            this.byFamilyName.clear();
            let r = [];
            return t.forEach(t => {
                let {uiFamilyName: i, ...a} = t
                  , o = e.createMetadataSelector(t.uiFamilyName)
                  , s = n?.[o]
                  , c = this.getFontFamilyByName(i);
                c ||= this.addFontFamily(i);
                let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic
                  , u = {
                    ...a,
                    family: c,
                    variationAxes: l ? s : void 0
                };
                c.fonts.push(u),
                r.push(u)
            }
            ),
            r
        }
        async getOpenTypeFeatures(t) {
            let n = await Ud(`framer`)
              , r = e.createMetadataSelector(t.family.name);
            return n[r]
        }
    }
    ,
    qS = `GF;`,
    JS = class e {
        constructor() {
            N(this, `name`, `google`),
            N(this, `fontFamilies`, []),
            N(this, `byFamilyName`, new Map)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        static parseVariant(e) {
            if (e === `regular`)
                return {
                    style: `normal`,
                    weight: 400
                };
            let t = /(\d*)(normal|italic)?/u.exec(e);
            if (!t)
                return {};
            let n = parseInt(t[1] || `400`)
              , r = t[2] === `italic` ? `italic` : `normal`;
            return {
                weight: n,
                style: r
            }
        }
        parseSelector(e) {
            if (!e.startsWith(qS))
                return null;
            let t = e.includes(`-variable-`)
              , n = t ? e.split(`-variable-`) : e.split(`-`);
            if (n.length !== 2)
                return null;
            let[r,i] = n;
            return !r || !i ? null : {
                name: r.replace(qS, ``),
                variant: i,
                source: this.name,
                isVariable: t
            }
        }
        static createSelector(e, t, n) {
            return `${qS}${e}-${n ? `variable-` : ``}${t}`
        }
        static createMetadataSelector(e) {
            return `${qS}${e}`
        }
        addFontFamily(e) {
            let t = {
                name: e,
                fonts: [],
                source: this.name
            };
            return this.fontFamilies.push(t),
            this.byFamilyName.set(t.name, t),
            t
        }
        async importFonts(t, n, r) {
            this.fontFamilies.length = 0,
            this.byFamilyName.clear();
            let i = await Hd(`google`)
              , a = []
              , o = Jd(t, e => e.family)
              , s = Jd(n, e => e.family);
            for (let t in o) {
                let n = o[t];
                if (!n)
                    continue;
                let c = this.getFontFamilyByName(n.family);
                c ||= this.addFontFamily(n.family);
                let l = n.variants.map(r => ({
                    ...e.parseVariant(r),
                    googleFontsVariantName: r,
                    selector: e.createSelector(t, r, !1),
                    isVariable: !1,
                    file: n.files[r]
                }))
                  , u = s[t]
                  , d = u?.axes ? u.variants.map(n => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n]
                })) : []
                  , f = e.createMetadataSelector(n.family)
                  , p = r?.[f]
                  , m = [...l, ...d]
                  , h = m.filter(vd)
                  , g = e.createMetadataSelector(t)
                  , _ = i[g];
                for (let e of m) {
                    let {weight: t, style: r, selector: i, googleFontsVariantName: o} = e
                      , {variantBold: s, variantItalic: l, variantBoldItalic: u, variantVariable: d, variantVariableItalic: f} = (vd(e) ? kd(e, h) : void 0) ?? {}
                      , m = {
                        family: c,
                        variant: o,
                        selector: i,
                        selectorBold: s?.selector,
                        selectorBoldItalic: u?.selector,
                        selectorItalic: l?.selector,
                        selectorVariable: d?.selector,
                        selectorVariableItalic: f?.selector,
                        weight: t,
                        style: r,
                        category: qd(n.category),
                        file: e.file?.replace(`http://`, `https://`),
                        variationAxes: e.isVariable ? p : void 0,
                        hasOpenTypeFeatures: _,
                        cssFamilyName: bd(c.name, e.isVariable)
                    };
                    c.fonts.push(m),
                    a.push(m)
                }
            }
            return a
        }
        async getOpenTypeFeatures(t) {
            let n = await Ud(`google`)
              , r = e.createMetadataSelector(t.family.name);
            return n[r]
        }
    }
    ,
    YS = ye(lp(), 1),
    XS = 5e3,
    ZS = 3,
    QS = class extends Error {
        constructor(e) {
            super(e),
            this.name = `FontLoadingError`
        }
    }
    ,
    $S = new Map,
    eC = new Map,
    tC = (e, t) => Yd(e, t),
    nC = {
        "FR;Inter": [{
            tag: `opsz`,
            minValue: 14,
            maxValue: 32,
            defaultValue: 14,
            name: `Optical size`
        }, {
            tag: `wght`,
            minValue: 100,
            maxValue: 900,
            defaultValue: 400,
            name: `Weight`
        }]
    },
    rC = class {
        constructor() {
            N(this, `enabled`, !1),
            N(this, `bySelector`, new OS),
            N(this, `loadedSelectors`, new Set),
            N(this, `getGoogleFontsListPromise`),
            N(this, `getFontshareFontsListPromise`),
            N(this, `getBuiltInFontsListPromise`),
            N(this, `customFontsImportPromise`, new Promise(e => {
                this.resolveCustomFontsImportPromise = e
            }
            )),
            N(this, `local`),
            N(this, `google`),
            N(this, `fontshare`),
            N(this, `builtIn`),
            N(this, `framer`),
            N(this, `custom`),
            N(this, `bySelectorValuesCache`),
            N(this, `testing`, {
                addFont: this.addFont.bind(this)
            }),
            this.local = new ES,
            this.google = new JS,
            this.fontshare = new HS,
            this.framer = new KS,
            this.custom = new IS,
            this.builtIn = new jS,
            this.importLocalFonts()
        }
        get hash() {
            return this.bySelector.hash
        }
        addFont(e) {
            if (this.bySelector.set(e.selector, e),
            e.alternativeSelectors)
                for (let t of Object.keys(e.alternativeSelectors))
                    this.bySelector.set(t, e)
        }
        getAvailableFonts() {
            if (!this.bySelectorValuesCache || this.bySelectorValuesCache.hash !== this.bySelector.hash) {
                let e = new Map;
                for (let t of this.bySelector.values())
                    e.set(t, !0);
                this.bySelectorValuesCache = {
                    result: Array.from(e.keys()),
                    hash: this.bySelector.hash
                }
            }
            return this.bySelectorValuesCache.result
        }
        importLocalFonts() {
            for (let e of this.local.importFonts())
                this.addFont(e),
                this.loadFont(e.selector)
        }
        async importGoogleFonts() {
            return this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
                let {staticFonts: e, variableFonts: t} = await Y.fetchGoogleFontsList()
                  , n = await Zd(`google`);
                for (let r of await this.google.importFonts(e, t, n))
                    this.addFont(r);
                return {
                    staticFonts: e,
                    variableFonts: t
                }
            }
            ),
            this.getGoogleFontsListPromise
        }
        async importFontshareFonts() {
            if (!this.getFontshareFontsListPromise) {
                this.getFontshareFontsListPromise = Y.fetchFontshareFontsList();
                let e = await this.getFontshareFontsListPromise
                  , t = await Zd(`fontshare`);
                for (let n of await this.fontshare.importFonts(e, t))
                    this.addFont(n)
            }
            return this.getFontshareFontsListPromise
        }
        async importBuiltInFonts() {
            if (!this.getBuiltInFontsListPromise) {
                this.getBuiltInFontsListPromise = Y.fetchBuiltInFontsList();
                let e = await this.getBuiltInFontsListPromise;
                for (let t of await this.builtIn.importFonts(e))
                    this.addFont(t)
            }
            return this.getBuiltInFontsListPromise
        }
        importFramerFonts(e) {
            let t = Zd(`framer`);
            this.framer.importFonts(e, t).forEach(e => {
                this.addFont(e)
            }
            )
        }
        importCustomFonts(e, t) {
            this.bySelector.forEach( (e, t) => {
                Nd(t) && this.bySelector.delete(t)
            }
            );
            let n = this.custom.importFonts(e, t);
            for (let e of n)
                this.addFont(e);
            this.resolveCustomFontsImportPromise()
        }
        getCustomFontsImportPromise() {
            return this.customFontsImportPromise
        }
        getFontFamily(e) {
            return this[e.source].getFontFamilyByName(e.name)
        }
        getFontBySelector(e) {
            if (!e)
                return;
            let t;
            if (t = this.bySelector.get(e),
            t)
                return t.alternativeSelectors && e in t.alternativeSelectors ? {
                    ...t,
                    ...t.alternativeSelectors[e]
                } : t
        }
        getDraftPropertiesBySelector(e) {
            let t = this.getFontBySelector(e);
            if (t)
                return {
                    style: t.style,
                    weight: t.weight,
                    variant: t.variant,
                    cssFamilyName: t.cssFamilyName,
                    source: t.family.source,
                    category: t.category
                };
            let n = this.google.parseSelector(e);
            if (n) {
                let e = JS.parseVariant(n.variant);
                if (vd(e))
                    return {
                        style: e.style,
                        weight: e.weight,
                        variant: n.variant,
                        cssFamilyName: xd(n, `google`),
                        source: `google`,
                        category: void 0
                    }
            }
            let r = this.fontshare.parseSelector(e);
            if (r) {
                let e = HS.parseVariant(r.variant);
                if (vd(e))
                    return {
                        style: e.style,
                        weight: e.weight,
                        variant: r.variant,
                        cssFamilyName: xd(r, `fontshare`),
                        source: `fontshare`,
                        category: void 0
                    }
            }
            let i = this.builtIn.parseSelector(e);
            if (i) {
                let e = jS.parseVariant(i.variant);
                if (vd(e))
                    return {
                        style: e.style,
                        weight: e.weight,
                        variant: i.variant,
                        cssFamilyName: xd(i, `builtIn`),
                        source: `builtIn`,
                        category: void 0
                    }
            }
            return KS.getDraftFontPropertiesBySelector(e) || null
        }
        isSelectorLoaded(e) {
            return this.loadedSelectors.has(e)
        }
        async loadFont(e) {
            let t = this.getFontBySelector(e);
            if (!t)
                return 2;
            if (this.loadedSelectors.has(e))
                return 0;
            let n = t.cssFamilyName
              , r = t.family.source
              , i = Md(t);
            switch (r) {
            case `local`:
                return this.loadedSelectors.add(e),
                1;
            case `framer`:
                if (X_() || await Xd(t.family.name, t.style, t.weight),
                i) {
                    if (!t.file)
                        return Promise.reject(`Unable to load font: ${e}`);
                    await tC({
                        family: n,
                        url: t.file,
                        weight: t.weight,
                        style: t.style
                    }, document)
                }
                return this.loadedSelectors.add(e),
                1;
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`:
                return t.file ? (await tC({
                    family: n,
                    url: t.file,
                    weight: t.weight,
                    style: t.style
                }, document),
                this.loadedSelectors.add(e),
                1) : Promise.reject(`Unable to load font: ${e}`);
            default:
                R(r)
            }
        }
        async loadFontsFromSelectors(e) {
            if (!this.enabled)
                return [];
            let t = [];
            e.some(e => e.startsWith(RS)) && t.push(this.importFontshareFonts().catch(e => {
                Dr(`Failed to load Fontshare fonts:`, e)
            }
            )),
            e.some(e => e.startsWith(qS)) && t.push(this.importGoogleFonts().catch(e => {
                Dr(`Failed to load Google fonts:`, e)
            }
            )),
            e.some(e => e.startsWith(AS)) && t.push(this.importBuiltInFonts().catch(e => {
                Dr(`Failed to load built-in fonts:`, e)
            }
            )),
            e.some(Nd) && t.push(this.customFontsImportPromise.catch(e => {
                Dr(`Failed to load custom fonts:`, e)
            }
            )),
            t.length > 0 && await Promise.all(t);
            let n = [];
            for (let t of e)
                n.push(this.loadFont(t));
            return Promise.allSettled(n)
        }
        async loadFonts(e) {
            return {
                newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(e => e.status === `fulfilled` && e.value === 1).length
            }
        }
        async loadMissingFonts(e, t) {
            let n = e.filter(e => !iC.loadedSelectors.has(e));
            n.length !== 0 && (await iC.loadWebFontsFromSelectors(n),
            n.every(e => iC.loadedSelectors.has(e)) && t && t())
        }
        async loadWebFontsFromSelectors(e) {
            return this.loadFontsFromSelectors(e)
        }
        get defaultFont() {
            let e = this.getFontBySelector(`Inter`);
            return L(e, `Can’t find Inter font`),
            e
        }
    }
    ,
    iC = new rC,
    aC = [512, 1024, 2048, 4096],
    oC = ( () => ({
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0
    }))(),
    sC = {
        opacity: 0
    },
    cC = {
        opacity: 1
    },
    lC = mf(d.forwardRef(function(e, t) {
        let {background: n, children: r, alt: i, draggable: a, fitImageDimension: o, style: s, ...c} = e
          , l = {
            ...s
        }
          , u = T( () => Ja(n), [n])
          , [f,p] = re();
        d.useLayoutEffect( () => {
            if (!n?.src || !o || u)
                return;
            let e = document.createElement(`img`);
            e.onload = () => {
                e.naturalWidth && e.naturalHeight && p({
                    width: e.naturalWidth,
                    height: e.naturalHeight
                })
            }
            ,
            e.src = n.src
        }
        , [n?.src, o, u]);
        let m = u ?? f;
        o && m && (l[o] = `auto`,
        l.aspectRatio = m.width / m.height),
        n && delete l.background;
        let h = Ya(e.as);
        return te(h, {
            ...c,
            style: l,
            ref: t,
            children: [n && S(Ua, {
                image: n,
                alt: i,
                draggable: a
            }), r]
        })
    })),
    dC = ( () => !U_() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)(),
    fC = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi,
    pC = `{{ text-placeholder }}`,
    mC = `rich-text-wrapper`,
    hC = s(function(e, t) {
        let {id: n, name: r, html: i, htmlFromDesign: a, text: o, textFromDesign: s, fonts: c=[], width: l, height: u, left: d, right: f, top: m, bottom: h, center: g, className: _, stylesPresetsClassName: v, visible: y=!0, opacity: b, rotation: x=0, verticalAlignment: ee=`top`, isEditable: E=!1, environment: te=K.current, withExternalLayout: O=!1, positionSticky: ne, positionStickyTop: re, positionStickyRight: k, positionStickyBottom: ie, positionStickyLeft: ae, __htmlStructure: oe, __fromCanvasComponent: se=!1, _forwardedOverrideId: ce, _forwardedOverrides: le, _usesDOMRect: ue, children: de, ...fe} = e
          , pe = Ui()
          , A = to(e)
          , me = C(null)
          , he = t ?? me
          , {navigate: ge, getRoute: j} = ot()
          , M = ct();
        At(e.preload ?? []),
        oo(e, he);
        let _e = w(ev)
          , N = yc()
          , ve = o
          , ye = ce ?? n;
        if (ye && le) {
            let e = le[ye];
            typeof e == `string` && (ve = e)
        }
        let be = ``;
        if (ve) {
            let e = gf(ve);
            be = oe ? oe.replace(pC, e) : `<p>${e}</p>`
        } else if (i)
            be = i;
        else if (s) {
            let e = gf(s);
            be = oe ? oe.replace(pC, e) : `<p>${e}</p>`
        } else
            a && (be = a);
        let xe = Bc()
          , Se = T( () => N || !j || !M ? be : _f(be, j, M, xe), [be, j, M, xe]);
        if (D( () => {
            let e = he.current;
            if (e === null)
                return;
            function t(e) {
                let t = Nc(e.target, he.current);
                e.metaKey || !ge || !t || t.getAttribute(`target`) === `_blank` || Tc(ge, t, xe) && e.preventDefault()
            }
            return e.addEventListener(`click`, t),
            () => {
                e.removeEventListener(`click`, t)
            }
        }
        , [ge, xe]),
        bf(c, se, he),
        p( () => {
            ta()
        }
        , []),
        !y)
            return null;
        let Ce = E && te() === K.canvas
          , P = {
            outline: `none`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: yf(ee),
            opacity: Ce ? 0 : b,
            flexShrink: 0
        }
          , we = K.hasRestrictions()
          , Te = Bi(e, pe || 0, !1)
          , Ee = ue && (l === `auto` || u === `auto`)
          , De = e.transformTemplate || !Te || !we || se || Ee ? e.transformTemplate ?? eo(g) : void 0;
        if (!O) {
            if (Te && we && !Ee) {
                let e = lh.getNumber(x).toFixed(4);
                P.transform = `translate(${Te.x}px, ${Te.y}px) rotate(${e}deg)`,
                P.width = Te.width,
                P.minWidth = Te.width,
                P.height = Te.height
            } else
                P.left = d,
                P.right = f,
                P.top = m,
                P.bottom = h,
                P.width = l,
                P.height = u,
                P.rotate = x;
            ne ? (!N || _e) && (P.position = `sticky`,
            P.willChange = `transform`,
            P.zIndex = 1,
            P.top = re,
            P.right = k,
            P.bottom = ie,
            P.left = ae) : N && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`)
        }
        return Ns(e, P),
        As(e, P),
        Object.assign(P, e.style),
        S(ke.div, {
            id: n,
            ref: he,
            ...fe,
            style: P,
            layoutId: A,
            "data-framer-name": r,
            "data-framer-component-type": `DeprecatedRichText`,
            "data-center": g,
            className: Fs(_, v, mC),
            transformTemplate: De,
            dangerouslySetInnerHTML: {
                __html: Se
            }
        })
    }),
    gC = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`
    },
    _C = ( () => RegExp(`\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`, `gu`))(),
    vC = s(function(e, t) {
        return S(`svg`, {
            ...e,
            ref: t,
            children: e.children
        })
    }),
    yC = ke.create(vC),
    bC = s(function({viewBoxScale: e, viewBox: t, children: n, ...r}, i) {
        return S(yC, {
            ...r,
            ref: i,
            viewBox: t,
            children: S(ke.foreignObject, {
                width: `100%`,
                height: `100%`,
                className: `framer-fit-text`,
                transform: `scale(${e})`,
                style: {
                    overflow: `visible`,
                    transformOrigin: `center center`
                },
                children: n
            })
        })
    }),
    xC = [],
    SC = `RichTextContainer`,
    CC = s(function(e, t) {
        let {__fromCanvasComponent: n=!1, _forwardedOverrideId: r, _forwardedOverrides: i, _usesDOMRect: a, anchorLinkOffsetY: o, as: s, bottom: c, center: l, children: u, environment: d=K.current, fonts: f=xC, height: m, isEditable: h=!1, left: g, name: _, opacity: v, positionSticky: y, positionStickyBottom: b, positionStickyLeft: x, positionStickyRight: ee, positionStickyTop: E, right: te, rotation: D=0, style: O, _initialStyle: ne, stylesPresetsClassNames: re, text: k, top: ie, verticalAlignment: ae=`top`, visible: oe=!0, width: se, withExternalLayout: ce=!1, viewBox: le, viewBoxScale: ue=1, effect: de, ...fe} = e
          , pe = Ui()
          , A = yc()
          , me = w(ev)
          , he = to(e)
          , ge = C(null)
          , j = t ?? ge;
        oo(e, j),
        bf(f, n, j),
        p( () => {
            ta()
        }
        , []);
        let M = kf(de, j)
          , _e = T( () => {
            if (u)
                return If(u, re, k, o, void 0, M.getTokenizer())
        }
        , [u, re, k, o, M]);
        if (!oe)
            return null;
        let N = {
            opacity: h && d() === K.canvas ? 0 : v
        }
          , ve = yf(ae);
        ve !== ng.justifyContent && (N.justifyContent = ve);
        let ye = {}
          , be = K.hasRestrictions()
          , xe = Bi(e, pe || 0, !1)
          , Se = a && (se === `auto` || m === `auto`)
          , Ce = e.transformTemplate || !xe || !be || n || Se ? e.transformTemplate ?? eo(l) : void 0;
        ce || (xe && be && !Se ? (ye.x = xe.x + (pt(O?.x) ? O.x : 0),
        ye.y = xe.y + (pt(O?.y) ? O.y : 0),
        N.rotate = lh.getNumber(D),
        N.width = xe.width,
        N.minWidth = xe.width,
        N.height = xe.height) : (N.left = g,
        N.right = te,
        N.top = ie,
        N.bottom = c,
        N.width = se,
        N.height = m,
        N.rotate = D),
        y ? (!A || me) && (N.position = `sticky`,
        N.willChange = `transform`,
        N.zIndex = 1,
        N.top = E,
        N.right = ee,
        N.bottom = b,
        N.left = x) : A && (e.positionFixed || e.positionAbsolute) && (N.position = `absolute`)),
        Ns(e, N),
        As(e, N),
        Object.assign(N, ne, O, ye),
        he && (fe.layout = `preserve-aspect`);
        let P = Ya(e.as)
          , we = fe[`data-framer-name`] ?? _;
        return F(e.viewBox) ? e.as === void 0 ? S(bC, {
            ...fe,
            ref: j,
            style: N,
            layoutId: he,
            viewBox: le,
            viewBoxScale: ue,
            transformTemplate: Ce,
            "data-framer-name": we,
            "data-framer-component-type": SC,
            children: _e
        }) : S(P, {
            ...fe,
            ref: j,
            style: N,
            layoutId: he,
            transformTemplate: Ce,
            "data-framer-name": we,
            "data-framer-component-type": SC,
            children: S(bC, {
                viewBox: le,
                viewBoxScale: ue,
                style: {
                    width: `100%`,
                    height: `100%`
                },
                children: _e
            })
        }) : S(P, {
            ...fe,
            ref: j,
            style: N,
            layoutId: he,
            transformTemplate: Ce,
            "data-framer-name": we,
            "data-framer-component-type": SC,
            children: _e
        })
    }),
    wC = s(function({children: e, html: t, htmlFromDesign: n, ...r}, a) {
        let o = t || e || n;
        if (F(o)) {
            !r.stylesPresetsClassName && I(r.stylesPresetsClassNames) && (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = {
                [F(t) ? `html` : `htmlFromDesign`]: o
            };
            return S(hC, {
                ...r,
                ...e,
                ref: a
            })
        }
        if (!r.stylesPresetsClassNames && F(r.stylesPresetsClassName)) {
            let[e,t,n,i,a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0 ? console.warn(`Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`) : r.stylesPresetsClassNames = {
                h1: e,
                h2: t,
                h3: n,
                p: i,
                a
            }
        }
        return S(CC, {
            ...r,
            ref: a,
            children: i(o) ? o : void 0
        })
    }),
    TC = B_(),
    EC = class {
        constructor(e, t, n, r, i=0) {
            this.id = e,
            this.svg = t,
            this.innerHTML = n,
            this.viewBox = r,
            this.count = i
        }
    }
    ,
    DC = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`,
    OC = class {
        constructor() {
            N(this, `entries`, new Map),
            N(this, `vectorSetItems`, new Map)
        }
        debugGetEntries() {
            return this.entries
        }
        subscribe(e, t, n, r) {
            if (!e || e === ``)
                return ``;
            let i = this.entries.get(e);
            if (!i) {
                n ||= `svg${String(ov(e))}_${String(e.length)}`;
                let a = e, o, s = zf(e);
                s && (t && Bf(s, n),
                s.id = n,
                o = Gf(s),
                s.removeAttribute(`xmlns`),
                s.removeAttribute(`xlink`),
                s.removeAttribute(`xmlns:xlink`),
                a = s.outerHTML),
                i = this.createDOMElementFor(a, n, o, r),
                this.entries.set(e, i)
            }
            return i.count += 1,
            i.innerHTML
        }
        getViewBox(e) {
            return !e || e === `` ? void 0 : this.entries.get(e)?.viewBox
        }
        unsubscribe(e) {
            if (!e || e === ``)
                return;
            let t = this.entries.get(e);
            t && (--t.count,
            !(t.count > 0) && setTimeout( () => this.maybeRemoveEntry(e), 5e3))
        }
        maybeRemoveEntry(e) {
            let t = this.entries.get(e);
            t && (t.count > 0 || (this.entries.delete(e),
            this.removeDOMElement(t)))
        }
        removeDOMElement(e) {
            TC && (document == null ? void 0 : document.getElementById(e.id))?.remove()
        }
        getOrCreateTemplateContainer() {
            let e = document.getElementById(`svg-templates`);
            if (e)
                return e;
            let t = document.createElement(`div`);
            return t.id = `svg-templates`,
            t.ariaHidden = `true`,
            t.style.cssText = DC,
            document.body.appendChild(t),
            t
        }
        maybeAppendTemplate(e, t) {
            if (document.getElementById(e))
                return;
            let n = document.createElement(`div`);
            n.innerHTML = t;
            let r = n.firstElementChild;
            r && (r.id = e,
            this.getOrCreateTemplateContainer().appendChild(r))
        }
        createDOMElementFor(e, t, n, r) {
            TC && this.maybeAppendTemplate(t, e);
            let i = n ? `0 0 ${n.width} ${n.height}` : void 0
              , a = i ? ` viewBox="${i}"` : ``
              , o = `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`;
            return new EC(t,e,o,i)
        }
        template(e, t) {
            return this.vectorSetItems.get(e) || (this.vectorSetItems.set(e, {
                svg: t,
                count: 0
            }),
            !TC) || this.maybeAppendTemplate(e, t),
            `#${e}`
        }
        subscribeToTemplate(e) {
            let t = this.vectorSetItems.get(e);
            if (t)
                return t.count++,
                () => {
                    let t = this.vectorSetItems.get(e);
                    t && (t.count--,
                    !(t.count > 0) && setTimeout( () => {
                        var t;
                        this.vectorSetItems.get(e)?.count || (this.vectorSetItems.delete(e),
                        TC && ((t = document == null ? void 0 : document.getElementById(e)) == null || t.remove()))
                    }
                    , 5e3))
                }
        }
        clear() {
            this.entries.clear()
        }
        generateTemplates() {
            let e = [];
            return e.push(`<div id="svg-templates" style="${DC}" aria-hidden="true">`),
            this.entries.forEach(t => e.push(t.svg)),
            this.vectorSetItems.forEach(t => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
        }
    }
    ,
    kC = new OC,
    AC = ( () => ({
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16
    }))(),
    jC = 1e3,
    MC = `explicitInter`,
    le.prototype.addChild = function({transformer: e=e => e}) {
        let t = Ae(e(this.get()));
        return this.onChange(n => t.set(e(n))),
        t
    }
}
));
export {Dy as ComponentViewportProvider, zy as Container, qh as ControlType, Si as ErrorPlaceholder, ty as GeneratedComponentContext, ob as GracefullyDegradingErrorBoundary, lC as Image3, cb as LibraryFeaturesProvider, xb as Link, mn as PageEffectsProvider, wl as PageRoot, hy as PropertyOverrides2, gS as QueryEngine, K as RenderTarget, Kb as ResolveLinks, wC as RichText, By as SmartComponentScopedContainer, qf as addFonts, ca as addPropertyControls, Jg as combinedCSSRulesForPreview, cy as cssCollector, Fs as cx, iC as fontStore, Cy as framerAppearAnimationScriptKey, by as framerAppearEffects, Sy as framerAppearIdKey, xy as framerAppearTransformTemplateToken, ay as framerCSSMarker, Jf as getFonts, Yf as getFontsFromSharedStyle, Kf as getLoadingLazyAtYPosition, la as getPropertyControls, rd as getWhereExpressionFromPathVariables, Hp as handoverCollector, lr as inferInitialRouteFromPath, NC as init_framer_SBH3UIZ4, Zi as installFlexboxGapWorkaroundIfNeeded, Ge as lazy, er as markHydrationStart, Zy as nestedLinksCollector, yr as patchRoutesForABTesting, $u as removeHiddenBreakpointLayersV2, kC as sharedSVGManager, Xn as turnOffReactEventHandling, Gu as useActiveVariantCallback, Ks as useComponentViewport, ct as useCurrentRoute, gc as useCustomCursors, Yu as useHydratedBreakpointVariants, Vo as useIsInCurrentNavigationTarget, yc as useIsOnFramerCanvas, Yn as useLocaleInfo, wr as useMetadata, ot as useRouter, _d as useVariantState, oy as withCSS, rp as withPerformanceMarks, kt as yieldToMain};
//# sourceMappingURL=framer.wRbNHDvw.mjs.map
