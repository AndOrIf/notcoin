import {__esmMin as e} from "./rolldown-runtime.DynScBln.mjs";
import {B as t, Ga as n, I as r, J as i, L as a, X as o, Y as s, Z as c, ae as l, de as u, e as d, fe as f, ie as p, init_jsx_runtime as m, init_npm_react_18_2 as h, init_npm_react_dom_18_2 as g, init_ssg_sandbox_shims as _, j as v, l as y, navigator as b, p as x, pe as S, q as C, re as w, se as T, te as E, u as ee, ue as D, window as O, x as te, ye as ne, z as k} from "./react.lkV_lvYc.mjs";
import {AnimatePresence as re, LayoutGroup as ie, MotionConfig as ae, MotionConfigContext as oe, MotionGlobalConfig as se, MotionValue as ce, PresenceContext as le, SwitchLayoutGroupContext as ue, WillChangeMotionValue as de, __commonJS as fe, __decorateElement as A, __decoratorMetadata as pe, __decoratorStart as me, __privateAdd as j, __privateGet as M, __privateMethod as N, __privateSet as he, __publicField as P, __runInitializers as F, __toESM as ge, addScaleCorrector as _e, animate as ve, cancelFrame as ye, frame as be, inView as xe, init_chunk_QQPGYYDD as I, init_chunk_YI6JBCRS as Se, interpolate as Ce, isMotionComponent as we, isValidMotionProp as Te, motion as Ee, motionValue as De, resolveMotionValue as Oe, spring as ke, stagger as Ae, unwrapMotionComponent as je, useAnimation as Me, useInstantLayoutTransition as Ne, useInstantTransition as Pe, useMotionValue as Fe, useReducedMotionConfig as Ie, useResetProjection as Le, useSpring as Re, useTransform as ze, visualElementStore as Be} from "./motion.DHq4p1Q_.mjs";
function Ve(e) {
    return typeof e == `object` && !!e && !i(e) && Of in e
}
function He(e, t=`default`) {
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
        return x(r, {
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
function Ue(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function We(e) {
    return e === null || !(Af in e) ? !1 : typeof e.equals == `function`
}
function Ge(e, t) {
    return e === t ? !0 : e !== e && t !== t
}
function Ke(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!Ge(e[r], t[r]))
            return !1;
    return !0
}
function qe(e, t) {
    let n = e.length;
    if (n !== t.length)
        return !1;
    for (let r = n; r-- !== 0; )
        if (!$e(e[r], t[r], !0))
            return !1;
    return !0
}
function Je(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!Ge(r, t.get(n)))
            return !1;
    return !0
}
function Ye(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let[n,r] of e.entries())
        if (!$e(r, t.get(n), !0))
            return !1;
    return !0
}
function Xe(e, t) {
    if (e.size !== t.size)
        return !1;
    for (let n of e.keys())
        if (!t.has(n))
            return !1;
    return !0
}
function Ze(e, t) {
    let n = kf(e);
    if (n.length !== kf(t).length)
        return !1;
    for (let r of n) {
        if (!Ue(t, r))
            return !1;
        if (r === `_owner` && Ue(e, `$$typeof`) && e.$$typeof)
            continue;
        if (!Ge(e[r], t[r]))
            return !1
    }
    return !0
}
function Qe(e, t) {
    let n = kf(e);
    if (n.length !== kf(t).length)
        return !1;
    for (let r of n) {
        if (!Ue(t, r))
            return !1;
        if (r === `_owner` && Ue(e, `$$typeof`) && e.$$typeof)
            continue;
        if (!$e(e[r], t[r], !0))
            return !1
    }
    return !0
}
function $e(e, t, n) {
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
        return n ? qe(e, t) : Ke(e, t);
    if (i !== a)
        return !1;
    let o = e instanceof Map
      , s = t instanceof Map;
    if (o && s)
        return n ? Ye(e, t) : Je(e, t);
    if (o !== s)
        return !1;
    let c = e instanceof Set
      , l = t instanceof Set;
    if (c && l)
        return Xe(e, t);
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
    return f && p ? e.toString() === t.toString() : f === p ? We(e) && We(t) ? e.equals(t) : n ? Qe(e, t) : Ze(e, t) : !1
}
function et(e, t, n=!0) {
    try {
        return $e(e, t, n)
    } catch (e) {
        if (e instanceof Error && /stack|recursion/iu.exec(e.message))
            return console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
            !1;
        throw e
    }
}
function tt(e) {
    return d.useCallback(t => e[t], [e])
}
function nt({api: e, children: t}) {
    return x(jf.Provider, {
        value: e,
        children: t
    })
}
function rt() {
    return d.useContext(jf)
}
function it({routes: e, children: t}) {
    let n = tt(e)
      , r = T( () => ({
        getRoute: n
    }), [n]);
    return x(jf.Provider, {
        value: r,
        children: t
    })
}
function at() {
    let e = rt()
      , t = w(Mf)
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
function ot(e, t) {
    if (t && e)
        return e.elements && t in e.elements ? e.elements[t] : t
}
function st(e) {
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
function ct(e) {
    return typeof e == `function`
}
function lt(e) {
    return typeof e == `boolean`
}
function L(e) {
    return typeof e == `string`
}
function ut(e) {
    return Number.isFinite(e)
}
function dt(e) {
    return Array.isArray(e)
}
function R(e) {
    return typeof e == `object` && !!e && !dt(e)
}
function ft(e) {
    for (let t in e)
        return !1;
    return !0
}
function pt(e) {
    return e === void 0
}
function mt(e) {
    return e === null
}
function ht(e) {
    return e == null
}
function gt(e) {
    return e instanceof Date && !Number.isNaN(e.getTime())
}
function _t(e) {
    return R(e) && ct(e.return)
}
function vt(e) {
    return R(e) && ct(e.then)
}
function yt(e) {
    return e instanceof Promise
}
function bt(e) {
    return `url('data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`)}')`
}
function xt() {
    for (let e of Vf)
        e();
    Vf.clear()
}
function St(e) {
    return new Promise(t => {
        if (Vf.add(t),
        document.hidden) {
            xt();
            return
        }
        document.addEventListener(`visibilitychange`, xt),
        document.addEventListener(`pagehide`, xt),
        be.read( () => {
            wt(e).then( () => {
                Vf.delete(t),
                !e?.signal?.aborted && t()
            }
            )
        }
        )
    }
    )
}
function Ct(e) {
    return new Promise(t => {
        setTimeout(t, 100),
        be.read( () => {
            wt(e).then(t)
        }
        , !1, !0)
    }
    )
}
function wt(e) {
    let t = e?.priority;
    return zf || Bf ? t === `background` ? new Promise(e => {
        setTimeout(e, 1)
    }
    ) : zf ? G.scheduler.yield(e).catch(Pf) : G.scheduler.postTask( () => {}
    , e).catch(Pf) : t === `user-blocking` ? Promise.resolve() : new Promise(e => {
        setTimeout(e, t === `background` ? 1 : 0)
    }
    )
}
function Tt(e) {
    let {continueAfter: t, ensureContinueBeforeUnload: n, ...r} = e ?? {};
    return n ? St(r) : t === `paint` ? Ct(r) : wt(r)
}
function Et(e, t=!0) {
    let {getRoute: n} = rt();
    D( () => {
        if (!(!n || !t || !Hf))
            for (let t of e)
                Dt(n(t))
    }
    , [e, n, t])
}
async function Dt(e) {
    if (!Hf || !e)
        return;
    let t = e.page;
    if (!(!t || !Ve(t))) {
        await Tt();
        try {
            await t.preload()
        } catch {}
    }
}
function Ot(e, t, n=`lazy`) {
    var r;
    switch ((r = G.__framer_events) == null || r.push([e, t, n]),
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
function kt(e, t) {
    if (!e.startsWith(`/`) || !t.startsWith(`/`))
        throw Error(`from/to paths are expected to be absolute`);
    let[n] = At(e)
      , [r,i] = At(t)
      , a = jt(n, r);
    return a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
}
function At(e) {
    let t = e.lastIndexOf(`/`);
    return [e.substring(0, t + 1), e.substring(t + 1)]
}
function jt(e, t) {
    if (e === t || (e = `/` + Mt(e),
    t = `/` + Mt(t),
    e === t))
        return ``;
    let n = e.length
      , r = n - 1
      , i = t.length - 1
      , a = r < i ? r : i
      , o = -1
      , s = 0;
    for (; s < a; s++) {
        let n = Kf(e, 1 + s);
        if (n !== Kf(t, 1 + s))
            break;
        n === Gf && (o = s)
    }
    if (s === a)
        if (i > a) {
            if (Kf(t, 1 + s) === Gf)
                return Jf(t, 1 + s + 1);
            if (s === 0)
                return Jf(t, 1 + s)
        } else
            r > a && (Kf(e, 1 + s) === Gf ? o = s : s === 0 && (o = 0));
    let c = ``;
    for (s = 1 + o + 1; s <= n; ++s)
        (s === n || Kf(e, s) === Gf) && (c += c.length === 0 ? `..` : `/..`);
    return `${c}${Jf(t, 1 + o)}`
}
function Mt(e) {
    let t = ``
      , n = 0
      , r = -1
      , i = 0
      , a = 0;
    for (let o = 0; o <= e.length; ++o) {
        if (o < e.length)
            a = Kf(e, o);
        else if (Zf(a))
            break;
        else
            a = Gf;
        if (Zf(a)) {
            if (!(r === o - 1 || i === 1))
                if (i === 2) {
                    if (t.length < 2 || n !== 2 || Kf(t, t.length - 1) !== Wf || Kf(t, t.length - 2) !== Wf) {
                        if (t.length > 2) {
                            let e = qf(t, Xf);
                            e === -1 ? (t = ``,
                            n = 0) : (t = Jf(t, 0, e),
                            n = t.length - 1 - qf(t, Xf)),
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
                    Yf && (t += t.length > 0 ? `${Xf}..` : `..`,
                    n = 2)
                } else
                    t.length > 0 ? t += `${Xf}${Jf(e, r + 1, o)}` : t = Jf(e, r + 1, o),
                    n = o - r - 1;
            r = o,
            i = 0
        } else
            a === Wf && i !== -1 ? ++i : i = -1
    }
    return t
}
function Nt(e, t) {
    return e.replace($f, (e, n) => {
        let r = t[n];
        return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r)
    }
    )
}
function Pt(e) {
    let t = O === void 0 ? `` : O.location.search;
    return t ? Ft(t, e) : e
}
function Ft(e, t) {
    let n = t.indexOf(`#`)
      , r = n === -1 ? t : t.substring(0, n)
      , i = n === -1 ? `` : t.substring(n)
      , a = r.indexOf(`?`)
      , o = a === -1 ? r : r.substring(0, a)
      , s = a === -1 ? `` : r.substring(a)
      , c = new URLSearchParams(s)
      , l = new URLSearchParams(e);
    for (let[e,t] of l) {
        if (c.has(e) || e === ep)
            continue;
        c.append(e, t)
    }
    let u = c.toString();
    return u === `` ? r + i : o + `?` + u + i
}
async function It(e, t, n, r, i, a, o) {
    let s = e
      , c = !1
      , l = {
        ...a
    }
      , u = Array.from(s.matchAll($f))
      , d = await Promise.all(u.map(async e => {
        let s = e?.[0]
          , u = e?.[1];
        if (!s || !u)
            throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !L(d))
            throw Error(`No slug found for path variable ${u}`);
        let f = await (o?.[i])?.call(o);
        if (!f || !t)
            return d;
        let p = await f.getRecordIdBySlug(d, t);
        if (!p)
            return d;
        let m = await f.getSlugByRecordId(p, n);
        if (!m) {
            c = !0;
            let e = await f.getSlugByRecordId(p, r);
            return e && (l[u] = e),
            e ?? d
        }
        return l[u] = m,
        m
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
async function Lt({currentLocale: e, nextLocale: t, defaultLocale: n, route: r, pathVariables: i, collectionUtils: a, preserveQueryParams: o}) {
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
            u = await It(l, e, t, n, r.collectionId, i, a)
        } catch {}
    return t.slug && (u.path = `/` + t.slug + u.path),
    o && u.path && (u.path = Pt(u.path)),
    u
}
function Rt(e) {
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
function zt({children: e, value: t}) {
    return x(tp.Provider, {
        value: t,
        children: e
    })
}
function Bt() {
    return d.useContext(tp)
}
function Vt(e, t, {global: n, routes: r}) {
    return r[e]?.[t] || n
}
function Ht(e) {
    let t = np
      , n = e.next(0)
      , r = [n.value];
    for (; !n.done && t < rp; )
        n = e.next(t),
        r.push(n.value),
        t += np;
    return r.length === 1 && r.push(n.value),
    {
        easing: `linear(${r.join(`,`)})`,
        duration: t - np
    }
}
function Ut(e) {
    return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`]
}
function Wt(e) {
    let {innerWidth: t, innerHeight: n} = O
      , [r,i] = Ut(e.x)
      , [a,o] = Ut(e.y);
    return {
        x: i === `px` ? r : t * (r / 100),
        y: o === `px` ? a : n * (a / 100)
    }
}
function Gt(e, t, n, r) {
    let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
    return e.mask && (i += (r?.makeKeyframe)?.call(r, e.mask, t, n) || ``),
    i
}
function Kt(e) {
    return e ? ap[e] : void 0
}
function qt(e, {transition: t, ...n}) {
    let r = `view-transition-` + e
      , i = {
        duration: `0s`,
        easing: `linear`
    };
    if (t.type === `tween`)
        i.duration = t.duration + `s`,
        i.easing = `cubic-bezier(${t.ease.join(`,`)})`;
    else if (Jt(t)) {
        let {easing: e, duration: n} = Ht(ke({
            keyframes: [0, 1],
            ...Yt(t),
            restDelta: .001,
            restSpeed: 1e-4
        }));
        i.duration = n + `ms`,
        i.easing = e
    }
    let a = Kt(n?.mask?.type)
      , o = Gt(n, `start`, e, a)
      , s = Gt({
        ...op,
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
function Jt(e) {
    return e.type === `spring`
}
function Yt(e) {
    return e.durationBasedSpring ? {
        duration: e.duration * 1e3,
        bounce: e.bounce
    } : {
        stiffness: e.stiffness,
        damping: e.damping,
        mass: e.mass
    }
}
function Xt({exit: e=cp, enter: t}) {
    let n = document.createElement(`style`);
    n.id = sp;
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
    r += qt(`exit`, e),
    r += qt(`enter`, t),
    n.textContent = r,
    document.head.appendChild(n)
}
function Zt() {
    Rf( () => {
        be.render( () => {
            performance.mark(`framer-vt-remove`);
            let e = document.getElementById(sp);
            e && document.head.removeChild(e)
        }
        )
    }
    )
}
function Qt() {
    return !!document.startViewTransition
}
function $t(e) {
    return new Promise(t => {
        be.render( () => {
            performance.mark(`framer-vt-style`),
            Xt(e),
            t()
        }
        )
    }
    )
}
async function en(e, t, n) {
    if (!Qt()) {
        e();
        return
    }
    if (await $t(t),
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
    ).catch(lp),
    Promise.all([r.ready, r.finished]).then( () => {
        performance.mark(`framer-vt-finished`),
        Zt()
    }
    ).catch(lp),
    r
}
function tn() {
    let e = Bt()
      , t = S(void 0);
    return D( () => {
        t.current &&= (t.current(),
        void 0)
    }
    ),
    E( (n, r, i, a) => {
        let o = Vt(n, r, e);
        if (o) {
            let e = new Promise(e => {
                t.current = e
            }
            );
            return en(async () => {
                i(),
                await e
            }
            , o, a)
        }
        i()
    }
    , [e])
}
function nn(e, t) {
    Rf( () => {
        let n = document.querySelector(`link[rel='canonical']`);
        if (!n)
            return;
        let r = new URL(e,t);
        r.search = ``,
        n.setAttribute(`href`, r.toString())
    }
    )
}
function rn(e, t, n, r=f) {
    r( () => {
        let t = async e => (await Tt({
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
function an(e) {
    let t = S(void 0);
    return rn( () => {
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
async function on(e, t, {currentRoutePath: n, currentRoutePathLocalized: r, currentPathVariables: i, hash: a, pathVariables: o, localeId: s, preserveQueryParams: c, siteCanonicalURL: l}, u=!1) {
    let {path: d} = t;
    if (!d)
        return;
    let f = pn(t, {
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
        return await ln({
            routeId: e,
            hash: a,
            pathVariables: o,
            localeId: s
        }, f, u)
    } catch {}
}
function sn(e) {
    return R(e) && L(e.routeId)
}
function cn(e, t, n=!1) {
    performance.mark(`framer-history-replace`),
    (n ? O.history.__proto__.replaceState : O.history.replaceState).call(O.history, e, ``, t)
}
async function ln(e, t, n=!1) {
    if (performance.mark(`framer-history-push`),
    nn(t, O.location.href),
    !n) {
        O.history.pushState(e, ``, t);
        return
    }
    let r = !1, i;
    fp && (i = () => {
        if (r = !0,
        pp)
            return;
        let e = `Popstate called after intercept(). Please report this to the Framer team.`;
        console.error(e),
        Ot(`published_site_load_recoverable_error`, {
            message: e
        })
    }
    ,
    O.addEventListener(`popstate`, i, {
        once: !0
    })),
    pp && fp ? O.history.__proto__.pushState.call(O.history, e, ``, t) : O.history.pushState(e, ``, t),
    fp && queueMicrotask( () => {
        r || (fp = !1,
        O.removeEventListener(`popstate`, i))
    }
    )
}
function un({disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r}) {
    f( () => {
        e || (performance.mark(`framer-history-set-initial-state`),
        cn({
            routeId: t,
            pathVariables: n,
            localeId: r
        }, void 0, !0))
    }
    , [])
}
function dn(e, t) {
    let n = tn()
      , r = an(`framer-route-change`)
      , i = S(void 0)
      , a = E(async ({state: a}) => {
        if (O.navigation?.transition && O.navigation?.transition?.navigationType !== `traverse` || !R(a))
            return;
        let {routeId: o, hash: s, pathVariables: c, localeId: l} = a;
        if (!L(o))
            return;
        let u = r({
            popstate: !0
        })
          , d = st();
        u.promise.finally(d);
        let f = await n(e.current, o, () => {
            t(o, L(l) ? l : void 0, L(s) ? s : void 0, O.location.pathname + O.location.search + O.location.hash, R(c) ? c : void 0, !0, u, !1)
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
        dp(),
        nn(O.location.href)
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
    mp && O.navigation.addEventListener(`navigate`, o),
    () => {
        O.removeEventListener(`popstate`, a),
        mp && O.navigation.removeEventListener(`navigate`, o)
    }
    ), [a, o])
}
function fn(e, t, n) {
    let r = ot(t, e);
    if (!r)
        return;
    let i = Object.assign({}, t?.elements, n);
    return r.replace($f, (e, t) => i[t] ?? e)
}
function pn(e, {currentRoutePath: t, currentRoutePathLocalized: n, currentPathVariables: r, hash: i, pathVariables: a, hashVariables: o, relative: s=!0, preserveQueryParams: c, onlyHash: l=!1, siteCanonicalURL: u, localeId: d}) {
    let f = fn(i, e, o);
    if (l)
        return f ?? ``;
    let p = t ?? `/`;
    n && d && (p = n[d] ?? p),
    r && (p = p.replace($f, (e, t) => String(r[t] || e)));
    let m = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
    a && (m = m.replace($f, (e, t) => String(a[t] || e)));
    let h = p === m && f;
    if (s)
        if (Qf.has(p) && O !== void 0) {
            let e = Rt(u);
            m = kt(O.location.pathname, e + m)
        } else
            m = kt(p, m);
    return (c || h) && (m = Pt(m)),
    f && (m = `${m}#${f}`),
    m
}
async function mn(e, t, n) {
    if (!e.path || !t)
        return !1;
    let r = `${n.slug ? `/${n.slug}` : ``}${Nt(e.path, t)}`;
    return (await fetch(r, {
        method: `HEAD`,
        redirect: `manual`
    })).type === `opaqueredirect` ? (O.location.href = O.location.origin + r,
    !0) : !1
}
async function hn(e) {
    let t = await Lt(e);
    if (t) {
        try {
            localStorage.setItem(`preferredLocale`, e.nextLocale.code)
        } catch {}
        try {
            if (!L(t.path))
                throw Error(`Expected result.path to be a string`);
            if (t.isMissingInLocale && await mn(e.route, t.pathVariables, e.nextLocale))
                return
        } catch {}
        return t
    }
}
function gn() {
    let e = S(Promise.resolve())
      , t = S()
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
        if (!mp) {
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
function _n(e) {
    return e.toLowerCase().replace(hp, `-`).replace(gp, ``)
}
function vn() {
    return d.useContext(bp)
}
function yn() {
    if (!Sp)
        return;
    wp = !0,
    performance.mark(`framer-react-event-handling-start`);
    let e = {
        capture: !0
    }
      , t = document.body;
    Sp.forEach(n => t.addEventListener(n, Cp, e))
}
function bn() {
    return D( () => {
        if (!wp || !Sp)
            return;
        let e = {
            capture: !0
        }
          , t = document.body;
        Sp.forEach(n => t.removeEventListener(n, Cp, e)),
        Sp = void 0,
        performance.mark(`framer-react-event-handling-end`)
    }
    , []),
    null
}
function xn(e) {
    let t = !1;
    return function(...n) {
        if (!t)
            return t = !0,
            e.apply(this, n)
    }
}
function Sn(e, t, n) {
    try {
        performance.measure(e, t, n)
    } catch (t) {
        console.warn(`Could not measure ${e}`, t)
    }
}
function Cn() {
    Wp = new Up,
    Wp.render.markStart()
}
function wn() {
    p( () => {
        Wp?.useInsertionEffects.markRouterStart()
    }
    , []),
    f( () => {
        Wp?.useLayoutEffects.markRouterStart()
    }
    , []),
    D( () => {
        Wp?.useEffects.markRouterStart()
    }
    , [])
}
function Tn() {
    p( () => {
        Wp?.render.markEnd(),
        Wp?.useInsertionEffects.markStart()
    }
    , []),
    f( () => {
        if (Wp?.useLayoutEffects.markStart(),
        document.visibilityState !== `visible`) {
            Gp = !0;
            return
        }
        be.read( () => {
            Wp?.browserRendering.requestAnimationFrame.markStart(),
            Wp?.unattributedHydrationOverhead.measure()
        }
        )
    }
    , []),
    D( () => {
        Wp?.useEffects.markStart(),
        Wp?.browserRendering.hasStarted || (Wp?.mutationEffects.measure(),
        Wp?.useEffects.markAreSynchronous())
    }
    , [])
}
function En() {
    p( () => {
        Wp?.useInsertionEffects.markEnd()
    }
    , []),
    f( () => {
        Wp?.useLayoutEffects.markEnd(),
        !(Gp || document.visibilityState !== `visible`) && be.read( () => {
            Wp?.browserRendering.requestAnimationFrame.markEnd(),
            Tt().then( () => {
                Wp?.browserRendering.layoutStylePaint.markEnd()
            }
            )
        }
        )
    }
    , []),
    D( () => {
        Wp?.useEffects.markEnd()
    }
    , [])
}
function Dn() {
    return Tn(),
    null
}
function On() {
    return En(),
    null
}
function kn(e, t) {
    let n = {
        style: t,
        "data-framer-root": ``
    };
    return d.isValidElement(e) ? d.cloneElement(e, n) : x(e, {
        ...n
    })
}
function An(e) {
    if (Zp !== e) {
        Yp = {};
        for (let[t,{path: n}] of Object.entries(e))
            n && (Yp[n] = {
                path: n,
                depth: Mn(n),
                routeId: t
            });
        Xp = Object.values(Yp),
        Xp.sort( ({depth: e}, {depth: t}) => t - e),
        Zp = e
    }
    return [Yp, Xp]
}
function jn(e, t, n=!0, r=[]) {
    let[i,a] = An(e), o, s, c = t;
    if (r.length > 0) {
        let e = c.split(`/`).find(Boolean);
        if (e && (o = r.find( ({slug: t}) => t === e),
        o && (s = o.id,
        c = c.substring(o.slug.length + 1))),
        !s) {
            let e = r.find( ({slug: e}) => e === ``);
            e && (s = e.id)
        }
    }
    let l = i[c];
    if (l) {
        let e = Nn(c, l.path);
        if (e.isMatch)
            return {
                routeId: l.routeId,
                localeId: s,
                pathVariables: e.pathVariables
            }
    }
    for (let {path: e, routeId: t} of a) {
        let n = Nn(c, e);
        if (n.isMatch)
            return {
                routeId: t,
                localeId: s,
                pathVariables: n.pathVariables
            }
    }
    if (!n)
        throw Error(`No exact match found for path`);
    let u = i[`/`];
    if (u)
        return {
            routeId: u.routeId,
            localeId: s
        };
    let d = Object.keys(e)[0];
    if (!d)
        throw Error(`Router should not have undefined routes`);
    return {
        routeId: d,
        localeId: s
    }
}
function Mn(e) {
    let t = e.replace(/^\/|\/$/gu, ``);
    return t === `` ? 0 : t.split(`/`).length
}
function Nn(e, t) {
    let n = []
      , r = Pn(t).replace($f, (e, t) => (n.push(t),
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
function Pn(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`)
}
function Fn() {
    if (`PerformanceServerTiming`in O) {
        let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
        if (!e || e.length === 0)
            return new URLSearchParams;
        let t = e.find(e => e.name === `abtests`);
        return t ? new URLSearchParams(t.description) : new URLSearchParams
    }
    return new URLSearchParams
}
function In(e, t, n) {
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
function Ln(e, t) {
    for (let[n,r] of t)
        In(e, n, r)
}
function Rn(e) {
    for (let t in e)
        e[t]?.abTestingParentId && delete e[t]
}
function zn(e, t) {
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
function Bn(e, t) {
    if (O === void 0)
        return t;
    let n = t;
    if (t) {
        zn(e, t);
        let r = e[t]?.abTestingParentId;
        r && (n = r)
    }
    return Ln(e, Fn()),
    Rn(e),
    n
}
function z(e, ...t) {
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
function B(e, t) {
    throw t || Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`)
}
async function Vn(e, t, n=`beforeend`) {
    let r, i;
    switch (n) {
    case `beforebegin`:
        z(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        r = t.parentNode,
        i = t;
        break;
    case `afterend`:
        z(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
        B(n)
    }
    let a = document.createRange();
    a.selectNodeContents(r);
    let o = a.createContextualFragment(e);
    await Hn(o, r, i)
}
async function Hn(e, t, n) {
    for (let r = e.firstChild; r; r = r.nextSibling) {
        if (r instanceof HTMLScriptElement) {
            let e = Un(r, t, n);
            e !== void 0 && await e;
            continue
        }
        let e = r.cloneNode(!1);
        t.insertBefore(e, n),
        r.firstChild && await Hn(r, e, null)
    }
}
function Un(e, t, n) {
    let r = e.cloneNode(!0);
    if (!e.hasAttribute(`src`) || e.hasAttribute(`async`) || e.hasAttribute(`defer`) || e.getAttribute(`type`)?.toLowerCase() === `module`)
        t.insertBefore(r, n);
    else
        return Wn(r, t, n)
}
function Wn(e, t, n) {
    return new Promise(r => {
        e.onload = e.onerror = r,
        t.insertBefore(e, n)
    }
    )
}
function Gn(e) {
    let {isInitialNavigation: t} = rt();
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
        let n = document.getElementById(Qp);
        n && n.dataset[$p] !== void 0 || Kn(e.customHTMLHeadStart, e.customHTMLHeadEnd, e.customHTMLBodyStart, e.customHTMLBodyEnd)
    }
    , [])
}
async function Kn(e, t, n, r) {
    let i, a, o, s;
    if (e || t) {
        let {start: n, end: r} = qn(document.head.childNodes, e ? em : void 0, t ? tm : void 0);
        i = n,
        a = r
    }
    if (n || r) {
        let {start: e, end: t} = qn(document.body.childNodes, n ? nm : void 0, r ? rm : void 0);
        o = e,
        s = t
    }
    e && i && await Vn(e, i, `beforebegin`),
    t && a && await Vn(t, a, `beforebegin`),
    n && o && await Vn(n, o, `beforebegin`),
    r && s && await Vn(r, s, `beforebegin`)
}
function qn(e, t, n) {
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
function Jn(e, ...t) {
    im.has(e) || (im.add(e),
    console.warn(e, ...t))
}
function Yn(e, t, n) {
    let r = n ? `, use ${n} instead` : ``
      , i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
    Jn(i)
}
function Xn(e) {
    return typeof e == `object` && !!e && sm in e && e[sm]instanceof Function && cm in e && e[cm]instanceof Function
}
function Zn(e, t) {
    return {
        interpolate(e, n) {
            let r = e.get()
              , i = n.get()
              , a = om(r);
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
function Qn(e, t) {
    let n = 10 ** Math.round(Math.abs(t));
    return Math.round(e * n) / n
}
function $n(e, t) {
    return t === 0 ? Math.round(e) : (t -= t | 0,
    t < 0 && (t = 1 - t),
    Math.round(e - t) + t)
}
function er(e) {
    return Math.round(e * 2) / 2
}
function tr(e, t) {
    return {
        x: e,
        y: t
    }
}
function nr(e, t, n, r=!1) {
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
function rr(e) {
    return !Number.isNaN(e) && Number.isFinite(e)
}
function ir(e) {
    let t = ar(e);
    return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t
}
function ar(e) {
    let t = /\d?\.?\d+/u.exec(e);
    return t ? Number(t[0]) : void 0
}
function or(e, t, n) {
    return dm.rgb_r = e / 255,
    dm.rgb_g = t / 255,
    dm.rgb_b = n / 255,
    dm.rgbToHsluv(),
    {
        h: dm.hsluv_h,
        s: dm.hsluv_s,
        l: dm.hsluv_l
    }
}
function sr(e, t, n, r=1) {
    return dm.hsluv_h = e,
    dm.hsluv_s = t,
    dm.hsluv_l = n,
    dm.hsluvToRgb(),
    {
        r: dm.rgb_r * 255,
        g: dm.rgb_g * 255,
        b: dm.rgb_b * 255,
        a: r
    }
}
function cr(e, t, n, r) {
    let i = Math.round(e)
      , a = Math.round(t * 100)
      , o = Math.round(n * 100);
    return r === void 0 || r === 1 ? `hsv(` + i + `, ` + a + `%, ` + o + `%)` : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`
}
function lr(e, t, n) {
    return {
        r: rr(e) ? gr(e, 255) * 255 : 0,
        g: rr(t) ? gr(t, 255) * 255 : 0,
        b: rr(n) ? gr(n, 255) * 255 : 0
    }
}
function ur(e, t, n, r) {
    let i = [yr(Math.round(e).toString(16)), yr(Math.round(t).toString(16)), yr(Math.round(n).toString(16))];
    return r && i[0].charAt(0) === i[0].charAt(1) && i[1].charAt(0) === i[1].charAt(1) && i[2].charAt(0) === i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join(``)
}
function dr(e, t, n) {
    let r, i, a = gr(e, 255), o = gr(t, 255), s = gr(n, 255), c = Math.max(a, o, s), l = Math.min(a, o, s), u = i = r = (c + l) / 2;
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
function fr(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function pr(e, t, n) {
    let r, i, a;
    if (e = gr(e, 360),
    t = gr(t * 100, 100),
    n = gr(n * 100, 100),
    t === 0)
        r = i = a = n;
    else {
        let o = n < .5 ? n * (1 + t) : n + t - n * t
          , s = 2 * n - o;
        r = fr(s, o, e + 1 / 3),
        i = fr(s, o, e),
        a = fr(s, o, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: i * 255,
        b: a * 255
    }
}
function mr(e, t, n) {
    e = gr(e, 255),
    t = gr(t, 255),
    n = gr(n, 255);
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
function hr(e, t, n) {
    e = gr(e, 360) * 6,
    t = gr(t * 100, 100),
    n = gr(n * 100, 100);
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
function gr(e, t) {
    let n, r;
    if (n = typeof t == `string` ? parseFloat(t) : t,
    typeof e == `string`) {
        _r(e) && (e = `100%`);
        let t = vr(e);
        r = Math.min(n, Math.max(0, parseFloat(e))),
        t && (r = Math.floor(r * n) / 100)
    } else
        r = e;
    return Math.abs(r - n) < 1e-6 ? 1 : r % n / n
}
function _r(e) {
    return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1
}
function vr(e) {
    return typeof e == `string` && e.includes(`%`)
}
function yr(e) {
    return e.length === 1 ? `0` + e : `` + e
}
function br(e) {
    if (e.includes(`gradient(`) || e.includes(`var(`))
        return !1;
    let t = e.replace(/^[\s,#]+/u, ``).trimEnd().toLowerCase()
      , n = um[t];
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
    return (r = fm.rgb.exec(t)) ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`
    } : (r = fm.rgba.exec(t)) ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: parseFloat(r[4] ?? ``),
        format: `rgb`
    } : (r = fm.hsl.exec(t)) ? {
        h: parseInt(r[1] ?? ``),
        s: ir(r[2] ?? ``),
        l: ir(r[3] ?? ``),
        a: 1,
        format: `hsl`
    } : (r = fm.hsla.exec(t)) ? {
        h: parseInt(r[1] ?? ``),
        s: ir(r[2] ?? ``),
        l: ir(r[3] ?? ``),
        a: parseFloat(r[4] ?? ``),
        format: `hsl`
    } : (r = fm.hsv.exec(t)) ? {
        h: parseInt(r[1] ?? ``),
        s: ir(r[2] ?? ``),
        v: ir(r[3] ?? ``),
        a: 1,
        format: `hsv`
    } : (r = fm.hsva.exec(t)) ? {
        h: parseInt(r[1] ?? ``),
        s: ir(r[2] ?? ``),
        v: ir(r[3] ?? ``),
        a: parseFloat(r[4] ?? ``),
        format: `hsv`
    } : (r = fm.hex8.exec(t)) ? {
        r: xr(r[1] ?? ``),
        g: xr(r[2] ?? ``),
        b: xr(r[3] ?? ``),
        a: Sr(r[4] ?? ``),
        format: n ? `name` : `hex`
    } : (r = fm.hex6.exec(t)) ? {
        r: xr(r[1] ?? ``),
        g: xr(r[2] ?? ``),
        b: xr(r[3] ?? ``),
        a: 1,
        format: n ? `name` : `hex`
    } : (r = fm.hex4.exec(t)) ? {
        r: xr(`${r[1]}${r[1]}`),
        g: xr(`${r[2]}${r[2]}`),
        b: xr(`${r[3]}${r[3]}`),
        a: Sr(r[4] + `` + r[4]),
        format: n ? `name` : `hex`
    } : (r = fm.hex3.exec(t)) ? {
        r: xr(`${r[1]}${r[1]}`),
        g: xr(`${r[2]}${r[2]}`),
        b: xr(`${r[3]}${r[3]}`),
        a: 1,
        format: n ? `name` : `hex`
    } : !1
}
function xr(e) {
    return parseInt(e, 16)
}
function Sr(e) {
    return xr(e) / 255
}
function Cr(e) {
    let t = pm.exec(e);
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
function wr(e=0) {
    let t = Math.abs(e);
    return t <= .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4
}
function Tr({r: e, g: t, b: n, a: r}) {
    return {
        r: wr(e),
        g: wr(t),
        b: wr(n),
        a: r
    }
}
function Er(e=0) {
    let t = Math.abs(e);
    return t > .0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - .055) : e * 12.92
}
function Dr({r: e, g: t, b: n, a: r}) {
    return {
        r: Er(e),
        g: Er(t),
        b: Er(n),
        a: r
    }
}
function Or({r: e, g: t, b: n, a: r}) {
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
function kr(e) {
    return (e %= 360) < 0 ? e + 360 : e
}
function Ar({h: e=0, s: t=0, v: n=0, a: r=1}) {
    let i = kr(e)
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
function jr(e) {
    return _m(gm(e))
}
function Mr(e) {
    return hm(mm(e))
}
function Nr(e, t, n, r=1) {
    let i;
    return typeof e == `number` && !Number.isNaN(e) && typeof t == `number` && !Number.isNaN(t) && typeof n == `number` && !Number.isNaN(n) ? i = Ir({
        r: e,
        g: t,
        b: n,
        a: r
    }) : typeof e == `string` ? i = Pr(e) : typeof e == `object` && (i = e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`) ? Ir(e) : Lr(e)),
    i
}
function Pr(e) {
    let t = br(e);
    if (t)
        return t.format === `hsl` ? Lr(t) : t.format === `hsv` ? Fr(t) : Ir(t)
}
function Fr(e) {
    let t = hr(e.h, e.s, e.v);
    return {
        ...dr(t.r, t.g, t.b),
        ...t,
        format: `rgb`,
        a: e.a === void 0 ? 1 : Rr(e.a)
    }
}
function Ir(e) {
    let t = lr(e.r, e.g, e.b);
    return {
        ...dr(t.r, t.g, t.b),
        ...t,
        format: `rgb`,
        a: e.a === void 0 ? 1 : Rr(e.a)
    }
}
function Lr(e) {
    let t, n, r, i = {
        r: 0,
        g: 0,
        b: 0
    }, a = {
        h: 0,
        s: 0,
        l: 0
    };
    return t = rr(e.h) ? e.h : 0,
    t = (t + 360) % 360,
    n = rr(e.s) ? e.s : 1,
    typeof e.s == `string` && (n = ar(e.s)),
    r = rr(e.l) ? e.l : .5,
    typeof e.l == `string` && (r = ar(e.l)),
    i = pr(t, n, r),
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
function Rr(e) {
    return e = parseFloat(e),
    e < 0 && (e = 0),
    (Number.isNaN(e) || e > 1) && (e = 1),
    e
}
function zr({children: e}) {
    if (w(jm).top)
        return x(y, {
            children: e
        });
    let t = S({
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
      , n = S({
        byId: {},
        byName: {},
        byLastId: {},
        byPossibleId: {},
        byLastName: {},
        byLayoutId: {}
    })
      , r = S(new Set).current
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
                z(!!c, `duplicatedId must be defined`);
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
          , {layoutId: h, value: g} = Br(p, m, r);
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
      , o = S({
        getLayoutId: i,
        persistLayoutIdCache: a,
        top: !0,
        enabled: !0
    }).current;
    return x(jm.Provider, {
        value: o,
        children: e
    })
}
function Br(e, t, n) {
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
function Vr({enabled: e=!0, ...t}) {
    let n = w(jm)
      , r = T( () => ({
        ...n,
        enabled: e
    }), [e]);
    return x(jm.Provider, {
        ...t,
        value: r
    })
}
function Hr(e) {
    let t = S(null);
    return t.current === null && (t.current = e()),
    t.current
}
function Ur(e) {
    let {error: t, file: n} = e
      , r = n ? `Error in ${Wr(n)}` : `Error`
      , i = t instanceof Error ? t.message : `` + t;
    return ee(`div`, {
        style: Nm,
        children: [x(`div`, {
            className: `text`,
            style: Fm,
            children: r
        }), i && x(`div`, {
            className: `text`,
            style: Im,
            children: i
        })]
    })
}
function Wr(e) {
    return e.startsWith(`./`) ? e.replace(`./`, ``) : e
}
function V(e) {
    return Number.isFinite(e)
}
function Gr(e) {
    return !e || !Object.keys(e).length && e.constructor === Object
}
function Kr(e) {
    return typeof e != `string` && typeof e != `number`
}
function qr(e) {
    return e != null && typeof e != `boolean` && !Gr(e)
}
function Jr(e) {
    return e * (Math.PI / 180)
}
function Yr(e) {
    return pt(e) ? !1 : e === 2 || e === 5
}
function Xr(e) {
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
function Zr(e, t, n, r) {
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
                return Qr(e);
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
function Qr(e) {
    switch (e) {
    case `minWidth`:
    case `minHeight`:
        return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
        return 1 / 0;
    default:
        B(e, `unknown constraint key`)
    }
}
function $r(e, t, n, r) {
    return t.minHeight && (e = Math.max(Zr(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Zr(`maxHeight`, t.maxHeight, n, r), e)),
    e
}
function ei(e, t, n, r) {
    return t.minWidth && (e = Math.max(Zr(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Zr(`maxWidth`, t.maxWidth, n, r), e)),
    e
}
function ti(e, t, n, r, i) {
    let a = ei(V(e) ? e : Bm, n, r, i)
      , o = $r(V(t) ? t : Vm, n, r, i);
    return V(n.aspectRatio) && n.aspectRatio > 0 && (V(n.left) && V(n.right) ? o = a / n.aspectRatio : V(n.top) && V(n.bottom) || n.widthType === 0 ? a = o * n.aspectRatio : o = a / n.aspectRatio),
    {
        width: a,
        height: o
    }
}
function ni(e, t) {
    return !V(e) || !V(t) ? null : e + t
}
function ri(e) {
    return typeof e.right == `string` || typeof e.bottom == `string` || typeof e.left == `string` && (!e.center || e.center === `y`) || typeof e.top == `string` && (!e.center || e.center === `x`)
}
function ii(e) {
    return !e._constraints || ri(e) ? !1 : e._constraints.enabled
}
function ai(e) {
    let {size: t} = e
      , {width: n, height: r} = e;
    return V(t) && (n === void 0 && (n = t),
    r === void 0 && (r = t)),
    V(n) && V(r) ? {
        width: n,
        height: r
    } : null
}
function oi(e) {
    let t = ai(e);
    if (t === null)
        return null;
    let {left: n, top: r} = e;
    return V(n) && V(r) ? {
        x: n,
        y: r,
        ...t
    } : null
}
function si(e, t, n=!0) {
    if (e.positionFixed || e.positionAbsolute)
        return null;
    let r = t === 1 || t === 2;
    if (!ii(e) || r)
        return oi(e);
    let i = ci(e)
      , a = li(t)
      , o = a ? {
        sizing: a,
        positioning: a,
        viewport: null
    } : null;
    return zm.toRect(i, o, null, n, null)
}
function ci(e) {
    let {left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s} = e
      , {width: c, height: l} = e;
    c === void 0 && (c = s),
    l === void 0 && (l = s);
    let {aspectRatio: u, autoSize: d} = o
      , f = Rm.quickfix({
        left: V(t),
        right: V(n),
        top: V(r),
        bottom: V(i),
        widthType: Xr(c),
        heightType: Xr(l),
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
function li(e) {
    return e === 0 || e === 1 || e === 2 ? null : e
}
function ui() {
    return d.useContext(Hm).parentSize
}
function di(e) {
    return typeof e == `object`
}
function fi(e) {
    return di(e) ? e.width : e
}
function pi(e) {
    return di(e) ? e.height : e
}
function mi(e, t) {
    return x(Um, {
        parentSize: t,
        children: e
    })
}
function hi(e) {
    let t = ui();
    return si(e, t, !0)
}
function gi({width: e, height: t}) {
    return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`
}
function _i() {
    if (Gm !== void 0)
        return Gm;
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
    Gm = t,
    t
}
function vi() {
    qm || (qm = !0,
    !_i() && document.body.classList.add(Km))
}
function yi(e) {
    return typeof e == `number` ? e : e.startsWith(`--`) ? bi.variable(e) : e === `` ? `""` : e
}
function bi(e, t) {
    let n = ` `;
    for (let e in t) {
        let r = t[e];
        n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${yi(r)}; `
    }
    return e + ` {` + n + `}`
}
function xi(e, t) {
    return bi.variable(...e.flatMap(e => [`${e}-rgb`, e]), t)
}
function Si(e, t, n=uh) {
    if (!(!e || n.has(e) || typeof document > `u`)) {
        if (n.add(e),
        !t) {
            if (!dh) {
                let e = document.createElement(`style`);
                if (e.setAttribute(`type`, `text/css`),
                e.setAttribute(`data-framer-css`, `true`),
                !document.head) {
                    console.warn(`not injecting CSS: the document is missing a <head> element`);
                    return
                }
                if (document.head.appendChild(e),
                e.sheet)
                    dh = e.sheet;
                else {
                    console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
                    return
                }
            }
            t = dh
        }
        try {
            t.insertRule(e, t.cssRules.length)
        } catch {}
    }
}
function Ci() {
    if (Uh)
        return;
    Uh = !0;
    let e = q.current() === q.preview ? Hh : Vh;
    for (let t of e)
        Si(t, void 0, void 0)
}
function wi(e) {
    return R(e) || ct(e)
}
function Ti(e) {
    return !!e && Wh in e && e[Wh] === !0
}
function Ei(e) {
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
            return L(e.defaultValue) ? e.defaultValue : void 0;
        case `boolean`:
            return lt(e.defaultValue) ? e.defaultValue : void 0;
        case `enum`:
            return pt(e.defaultValue) ? void 0 : e.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        case `fusednumber`:
        case `number`:
            return ut(e.defaultValue) ? e.defaultValue : void 0;
        case `transition`:
            return R(e.defaultValue) ? e.defaultValue : void 0;
        case `border`:
            return R(e.defaultValue) ? e.defaultValue : void 0;
        case `font`:
            return R(e.defaultValue) ? e.defaultValue : void 0;
        case `linkrelvalues`:
            return dt(e.defaultValue) ? e.defaultValue : void 0;
        case `object`:
            {
                let t = R(e.defaultValue) ? e.defaultValue : {};
                return R(e.controls) && Di(t, e.controls),
                t
            }
        case `array`:
            return dt(e.defaultValue) ? e.defaultValue : void 0;
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
function Di(e, t) {
    for (let n in t) {
        let r = t[n];
        if (!r)
            continue;
        let i = e[n];
        if (!pt(i) || Ti(r))
            continue;
        let a = Ei(r);
        if (pt(a))
            continue;
        e[n] = a
    }
}
function Oi(e) {
    if (R(e.defaultProps))
        return e.defaultProps;
    let t = {};
    return e.defaultProps = t,
    t
}
function ki(e, t) {
    if (!wi(e))
        return;
    let n = Oi(e);
    Di(n, t)
}
function Ai(e, t) {
    Object.assign(e, {
        propertyControls: t
    }),
    ki(e, t)
}
function ji(e) {
    return e.propertyControls
}
function Mi() {
    let e = q.current();
    return e === q.canvas || e === q.export
}
function Ni() {
    let[e] = ne( () => Mi());
    return e
}
function Pi(e) {
    let t = Object.create(Object.prototype);
    return n => (t[n] === void 0 && (t[n] = e(n)),
    t[n])
}
function Fi() {
    return {
        backgroundRepeat: `repeat`,
        backgroundPosition: `left top`,
        backgroundSize: `64px auto`,
        backgroundImage: bt(X.imagePlaceholderSvg)
    }
}
function Ii(e) {
    switch (e) {
    case `fit`:
        return `contain`;
    case `stretch`:
        return `fill`;
    default:
        return `cover`
    }
}
function Li(e, t) {
    let n = e ?? `center`
      , r = t ?? `center`;
    return n === `center` && r === `center` ? `center` : n + ` ` + r
}
function Ri(e) {
    return {
        display: `block`,
        width: `100%`,
        height: `100%`,
        borderRadius: `inherit`,
        objectPosition: Li(e.positionX, e.positionY),
        objectFit: Ii(e.fit)
    }
}
function zi(e) {
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
function Bi({image: e, containerSize: t, nodeId: n, alt: r, draggable: i, avoidAsyncDecoding: a}) {
    let o = X.useImageSource(e, t, n)
      , s = Ri(e)
      , {decoding: c, onImageLoad: l, onImageMount: u} = zi(a);
    return x(`img`, {
        ref: u,
        decoding: c,
        fetchpriority: e.fetchPriority,
        loading: e.loading,
        width: e.pixelWidth,
        height: e.pixelHeight,
        sizes: e.sizes,
        srcSet: e.srcSet,
        src: o,
        onLoad: l,
        alt: r ?? e.alt ?? ``,
        style: s,
        draggable: i
    })
}
function Vi({image: e, containerSize: t, nodeId: n}) {
    let r = d.useRef(null)
      , i = X.useImageElement(e, t, n)
      , a = Ri(e);
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
    x(`div`, {
        ref: r,
        style: {
            display: `contents`,
            borderRadius: `inherit`
        }
    })
}
function Hi({nodeId: e, image: t, containerSize: n}) {
    let r = d.useRef(null)
      , i = X.useImageSource(t, n, e);
    return d.useLayoutEffect( () => {
        let n = r.current;
        if (n === null)
            return;
        let a = Ri(t);
        X.renderOptimizedCanvasImage(n, i, a, e)
    }
    , [e, t, i]),
    x(`div`, {
        ref: r,
        style: {
            display: `contents`,
            borderRadius: `inherit`
        }
    })
}
function Ui({layoutId: e, image: t, ...n}) {
    let {motionDivToDivBackgroundImage: r} = eg();
    e && (e += `-background`);
    let i = null
      , a = !!e
      , o = null;
    if (L(t.src))
        if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
            let e = ut(t.backgroundSize) ? t.backgroundSize : 1
              , n = {
                width: Math.round(e * t.pixelWidth),
                height: Math.round(e * t.pixelHeight)
            }
              , r = er(e * (t.pixelWidth / 2))
              , s = X.useImageSource(t, n);
            i = {
                ...tg,
                backgroundImage: `url(${s})`,
                backgroundRepeat: `repeat`,
                backgroundPosition: Li(t.positionX, t.positionY),
                opacity: void 0,
                border: 0,
                backgroundSize: `${r}px auto`
            },
            o = null,
            a = !0
        } else
            o = q.current() === q.canvas ? X.canRenderOptimizedCanvasImage(X.useImageSource(t)) ? x(Hi, {
                image: t,
                ...n
            }) : x(Vi, {
                image: t,
                ...n
            }) : x(Bi, {
                image: t,
                avoidAsyncDecoding: q.current() === q.export,
                ...n
            });
    let s = o ? tg : i ?? {
        ...tg,
        ...Fi()
    };
    return a || !r ? x(Ee.div, {
        layoutId: e,
        style: s,
        "data-framer-background-image-wrapper": !0,
        children: o
    }) : x(`div`, {
        style: s,
        "data-framer-background-image-wrapper": !0,
        children: o
    })
}
function Wi(e, t, n=!0) {
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
function Gi(e) {
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
    x(Ee.div, {
        style: n
    })) : (Wi(e, n, !1),
    x(Ee.div, {
        "data-frame-border": !0,
        style: n,
        layoutId: t
    }))
}
function Ki(e, t) {
    let {_forwardedOverrideId: n, _forwardedOverrides: r, id: i} = t
      , a = n ?? i
      , o = r && a ? r[a] : void 0;
    return o && typeof o == `string` && (e = {
        ...e,
        src: o
    }),
    e
}
function qi(e) {
    let {background: t, image: n} = e;
    if (n !== void 0 && t && !rg.isImageObject(t))
        return;
    let r = null;
    if (r = L(n) ? {
        alt: ``,
        src: n
    } : om.get(t, null),
    rg.isImageObject(r))
        return Ki(r, e)
}
function Ji(e) {
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
function Yi(e) {
    return e && e !== `search` && e !== `slot` && e !== `template` ? Ee[e] : Ee.div
}
function Xi(e, t) {
    e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0,
    e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` ? !0 : void 0
}
function Zi(e) {
    let t = {};
    return !e || !_g || q.current() !== q.canvas || Xi(t, e),
    t
}
function Qi(e) {
    return e.replace(/^id_/u, ``).replace(/\\/gu, ``)
}
function $i(e, t) {
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
function ea(e) {
    return (t, n) => e === !0 ? `translate(-50%, -50%) ${n}` : e === `x` ? `translateX(-50%) ${n}` : e === `y` ? `translateY(-50%) ${n}` : n || `none`
}
function ta(e, {specificLayoutId: t, postfix: n}={}) {
    let {name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o=!1, drag: s} = e
      , {getLayoutId: c, enabled: l} = w(jm);
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
function na() {
    let[e,t] = d.useState(0);
    return d.useCallback( () => t(e => e + 1), [])
}
function ra(e) {
    return [...e.firstElementChild && e.firstElementChild.hasAttribute(bg) ? e.firstElementChild.children : e.children].filter(ia).map(aa)
}
function ia(e) {
    return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? !1 : e instanceof HTMLElement || e instanceof SVGElement
}
function aa(e) {
    if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
        return e;
    let t = [...e.children].find(ia);
    return t ? aa(t) : e
}
function oa(e, t, n= () => [], r={}) {
    let {id: i, visible: a, _needsMeasure: o} = e
      , {skipHook: s=!1} = r
      , c = w(yg)
      , l = q.current() === q.canvas;
    vg( () => {
        !l || c || s || t.current && i && a && o && X.queueMeasureRequest(Qi(i), t.current, n(t.current))
    }
    )
}
function sa(e) {
    let t = e.closest(`[data-framer-component-container]`);
    t && X.queueMeasureRequest(Qi(t.id), t, ra(t))
}
function ca(e) {
    e.willChange = `transform`;
    let t = q.current() === q.canvas;
    Cg && t && (e.translateZ = xg)
}
function la(e) {
    e.willChange = `transform`,
    ua(e, !0)
}
function ua(e, t) {
    let n = q.current() === q.canvas;
    if (!Cg || !n)
        return;
    let r = L(e.transform) && e.transform || ``;
    t ? r.includes(Sg) || (e.transform = r + Sg) : e.transform = r.replace(Sg, ``)
}
function da(e, t, n, r=!0) {
    if (!e)
        return;
    let i = Gh(e.style)
      , a = n || i[t]
      , o = () => {
        fa(a) && (i[t] = a)
    }
    ;
    i[t] = null,
    r ? Promise.resolve().then(o) : setTimeout(o, 0)
}
function fa(e) {
    return L(e) || ut(e) || mt(e)
}
function pa(e, t) {
    if (e.size < t)
        return;
    let n = Math.round(Math.random());
    for (let t of e.keys()) {
        if ((++n & 1) == 1)
            continue;
        e.delete(t)
    }
}
function ma(e, t, n, r) {
    let i = t.get(n);
    if (i)
        return i;
    pa(t, e);
    let a = r(n);
    return t.set(n, a),
    a
}
function ha(e, t) {
    let n = [e, t];
    return Dg.test(e) ? e : ma(1e3, Og, n, () => Eg.multiplyAlpha(e, t))
}
function ga(e, t=1) {
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
        value: ha(e.value, t)
    }))
}
function _a(e, t) {
    let n = 0;
    return ga(e, t).forEach(e => {
        n ^= Tg(e.value) ^ e.position
    }
    ),
    n
}
function va(e) {
    return e && kg.every(t => t in e)
}
function ya(e) {
    return e && Ag.every(t => t in e)
}
function ba({background: e, backgroundColor: t}, n) {
    t ? typeof t == `string` || bm(t) ? n.backgroundColor = t : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e)) : e && (e = om.get(e, null),
    typeof e == `string` || bm(e) ? n.background = e : Mg.isLinearGradient(e) ? n.background = Mg.toCSS(e) : Pg.isRadialGradient(e) ? n.background = Pg.toCSS(e) : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e)))
}
function H(e, t, n, r) {
    if (r === void 0 && (r = t),
    e[t] !== void 0) {
        n[r] = e[t];
        return
    }
}
function xa(e) {
    return e ? e.left !== void 0 && e.right !== void 0 : !1
}
function Sa(e) {
    return e ? e.top !== void 0 && e.bottom !== void 0 : !1
}
function Ca(e) {
    if (!e)
        return {};
    let t = {};
    return e.preserve3d === !0 ? t.transformStyle = `preserve-3d` : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0 ? t.backfaceVisibility = `visible` : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent || (e.center === !0 ? (t.left = `50%`,
    t.top = `50%`) : e.center === `x` ? t.left = `50%` : e.center === `y` && (t.top = `50%`)),
    H(e, `size`, t),
    H(e, `width`, t),
    H(e, `height`, t),
    H(e, `minWidth`, t),
    H(e, `minHeight`, t),
    H(e, `top`, t),
    H(e, `right`, t),
    H(e, `bottom`, t),
    H(e, `left`, t),
    H(e, `position`, t),
    H(e, `overflow`, t),
    H(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && H(e, `border`, t),
    H(e, `borderRadius`, t),
    H(e, `radius`, t, `borderRadius`),
    H(e, `color`, t),
    H(e, `shadow`, t, `boxShadow`),
    H(e, `x`, t),
    H(e, `y`, t),
    H(e, `z`, t),
    H(e, `rotate`, t),
    H(e, `rotateX`, t),
    H(e, `rotateY`, t),
    H(e, `rotateZ`, t),
    H(e, `scale`, t),
    H(e, `scaleX`, t),
    H(e, `scaleY`, t),
    H(e, `skew`, t),
    H(e, `skewX`, t),
    H(e, `skewY`, t),
    H(e, `originX`, t),
    H(e, `originY`, t),
    H(e, `originZ`, t),
    ba(e, t),
    t
}
function wa(e) {
    for (let t in e)
        if (t === `drag` || t.startsWith(`while`) || typeof Gh(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
            return !0;
    return !1
}
function Ta(e) {
    if (e.drag)
        return `grab`;
    for (let t in e)
        if (Ig.has(t))
            return `pointer`
}
function Ea(e) {
    return Da(e) ? !0 : e.style ? !!Da(e.style) : !1
}
function Da(e) {
    return Lg in e && (e[Lg] === `scroll` || e[Lg] === `auto`)
}
function Oa(e) {
    let {left: t, top: n, bottom: r, right: i, width: a, height: o, center: s, _constraints: c, size: l, widthType: u, heightType: d, positionFixed: f, positionAbsolute: p} = e
      , m = Oe(e.minWidth)
      , h = Oe(e.minHeight)
      , g = Oe(e.maxWidth)
      , _ = Oe(e.maxHeight);
    return {
        top: Oe(n),
        left: Oe(t),
        bottom: Oe(r),
        right: Oe(i),
        width: Oe(a),
        height: Oe(o),
        size: Oe(l),
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
function ka(e) {
    d.useInsertionEffect( () => {
        Ci()
    }
    , []);
    let t = w(yg)
      , {style: n, _initialStyle: r, __fromCanvasComponent: i, size: a} = e
      , o = Oa(e)
      , s = hi(o)
      , c = {
        display: `block`,
        flex: n?.flex ?? `0 0 auto`,
        userSelect: q.current() === q.preview ? void 0 : `none`
    };
    e.__fromCanvasComponent || (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
    let l = !wa(e) && !e.__fromCanvasComponent && !Ea(e)
      , u = e.style ? !(`pointerEvents`in e.style) : !0;
    l && u && (c.pointerEvents = `none`);
    let f = d.Children.count(e.children) > 0 && d.Children.toArray(e.children).every(e => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`
    }
      , p = Ca(e);
    a === void 0 && !i && (xa(p) || (c.width = Rg.width),
    Sa(p) || (c.height = Rg.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight);
    let m = {};
    ii(o) && s && !gi(e) && (m = {
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
    wg.applyWillChange(e, c, !0);
    let h = c;
    c.transform || (h = {
        x: 0,
        y: 0,
        ...c
    });
    let g = Mi();
    return e.positionSticky ? (!g || X.isOnPageCanvas || t) && (h.position = `sticky`,
    h.willChange = `transform`,
    h.zIndex = 1,
    h.top = e.positionStickyTop,
    h.right = e.positionStickyRight,
    h.bottom = e.positionStickyBottom,
    h.left = e.positionStickyLeft) : g && (e.positionFixed ? h.position = X.isOnPageCanvas ? `fixed` : `absolute` : e.positionAbsolute && (h.position = `absolute`)),
    `rotate`in h && h.rotate === void 0 && delete h.rotate,
    [h, s]
}
function Aa(e) {
    let t = {};
    for (let n in e)
        (Te(n) || qh(n)) && !zg.has(n) ? t[n] = Gh(e)[n] : (n === `positionTransition` || n === `layoutTransition`) && (t.layout = !0,
        typeof Gh(e)[n] != `boolean` && !e.transition && (t.transition = Gh(e)[n]));
    return t
}
function ja(e) {
    return `data-framer-name`in e
}
function Ma(e, t, n, r) {
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
function Na(e) {
    return x(Ee.div, {
        layoutId: Hg,
        style: Gg,
        children: e.children
    })
}
function Pa(e, t) {
    let n = ne( () => ({
        inputs: t,
        result: e()
    }))[0]
      , r = S(!0)
      , i = S(n)
      , a = r.current || t && i.current.inputs && et(t, i.current.inputs, !1) ? i.current : {
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
function Fa(e, t) {
    ct(e) ? e(t) : Ia(e) && (e.current = t)
}
function Ia(e) {
    return R(e) && `current`in e
}
function La() {
    let e = Hr( () => new Set)
      , t = Hr( () => new Map);
    return Hr( () => (n, r) => ({
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
function Ra(e) {
    let t = S(null)
      , n = La();
    return Hr( () => Ia(e) ? n(e) : ct(e) ? n(t, e) : n(t))
}
function za(e, t, n) {
    let r = S()
      , i = S();
    Pa( () => {
        i.current !== void 0 && (i.current = !0)
    }
    , n ?? [{}]),
    e && i.current !== !1 && (i.current = !1,
    e.unobserve(r.current),
    e.observe(t),
    r.current = t)
}
function Ba(e, t, n, r, i, a, o) {
    let s = e.get(t);
    return (!s || s.root !== r?.current) && (s = new Kg({
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
function Va() {
    return w(Zg)
}
function Ha() {
    return new Map
}
function Ua() {
    return Hr(Ha)
}
function Wa(e, t=[]) {
    let {register: n, deregister: r} = w(Qg);
    D( () => {
        if (e)
            return n(e),
            () => r(e)
    }
    , [n, r, ...t])
}
function Ga(e, t) {
    return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed)
}
function Ka(e, t, n) {
    let r = {
        ...e
    };
    return t && (V(t.originX) && (r.originX = t.originX),
    V(t.originY) && (r.originY = t.originY),
    V(t.originZ) && (r.originZ = t.originZ)),
    n && (V(n.originX) && (r.originX = n.originX),
    V(n.originY) && (r.originY = n.originY),
    V(n.originZ) && (r.originZ = n.originZ)),
    r
}
function qa(e) {
    if (!e || !(`rotateX`in e || `rotateY`in e || `z`in e))
        return !1;
    let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0
      , n = (e?.transition)?.rotateX.from !== 0 || (e?.transition)?.rotateY.from !== 0 || (e?.transition)?.z.from !== 0;
    return t || n
}
function Ja(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
        return i_.PushLeft;
    case `left`:
        return i_.PushRight;
    case `bottom`:
        return i_.PushUp;
    case `top`:
        return i_.PushDown
    }
}
function Ya(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
        return i_.OverlayLeft;
    case `left`:
        return i_.OverlayRight;
    case `bottom`:
        return i_.OverlayUp;
    case `top`:
        return i_.OverlayDown
    }
}
function Xa(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
        return i_.FlipLeft;
    case `left`:
        return i_.FlipRight;
    case `bottom`:
        return i_.FlipUp;
    case `top`:
        return i_.FlipDown
    }
}
function Za(e, t) {
    switch (t.type) {
    case `addOverlay`:
        return $a(e, t.transition, t.component);
    case `removeOverlay`:
        return eo(e);
    case `add`:
        return to(e, t.key, t.transition, t.component);
    case `remove`:
        return io(e);
    case `update`:
        return Qa(e, t.key, t.component);
    case `back`:
        return no(e);
    case `forward`:
        return ro(e);
    default:
        return
    }
}
function Qa(e, t, n) {
    return {
        ...e,
        containers: {
            ...e.containers,
            [t]: n
        }
    }
}
function $a(e, t, n) {
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
function eo(e) {
    return {
        ...e,
        overlayStack: [],
        currentOverlay: -1,
        previousOverlay: e.currentOverlay
    }
}
function to(e, t, n, r) {
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
      , c = i?.key && n.withMagicMotion ? lo(t, o, s, e.history) : !0;
    e.history.push({
        key: t,
        transition: n,
        visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t]
    });
    let l = e.current + 1
      , u = e.current;
    for (let t in e.containerIndex)
        e.containerIndex[t] === l && (e.containerIndex[t] = so(t, e.history));
    e.containerIndex[t] = l;
    let {containerVisualIndex: d, containerIsRemoved: f} = ao(e, t, c)
      , p = co(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function no(e) {
    let t = {
        ...e.containers
    }
      , n = io(e);
    if (n)
        return n.containers = t,
        n
}
function ro(e) {
    let t = e.history[e.current + 1];
    if (!t)
        return;
    let {key: n, transition: r, component: i} = t
      , a = [...e.history]
      , o = to(e, n, r, i);
    if (o)
        return o.history = a,
        o
}
function io(e) {
    let t = [...e.history.slice(0, e.current + 1)];
    if (t.length === 1)
        return;
    let n = t.pop();
    if (!n)
        return;
    let r = t[t.length - 1];
    z(r, `The navigation history must have at least one component`),
    e.containerIndex[r.key] = t.length - 1,
    t.every(e => e.key !== n.key) && delete e.containers[n.key];
    let i = e.current - 1
      , a = e.current
      , {containerIsRemoved: o, containerVisualIndex: s, previousTransition: c, visualIndex: l} = oo(e, r, n)
      , u = co(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function ao(e, t, n) {
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
function oo(e, t, n) {
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
function so(e, t) {
    for (let n = t.length; n > t.length; n--)
        if (t[n]?.key === e)
            return n;
    return -1
}
function co(e, t, n, r, i) {
    let a = {
        ...i
    };
    for (let[i,o] of Object.entries(r)) {
        let r = uo(o, {
            current: e,
            previous: t,
            history: n
        });
        r && (a[i] = r)
    }
    return a
}
function lo(e, t, n, r) {
    return n || t === void 0 ? !0 : t === 0 ? !1 : r.slice(t, r.length).findIndex(t => t.key === e) > -1 ? !0 : !(r.slice(0, t - 1).findIndex(t => t.key === e) > -1)
}
function uo(e, t) {
    let {current: n, previous: r, history: i} = t;
    if (!(e !== n && e !== r)) {
        if (e === n && n > r) {
            let t = i[e];
            return fo(`enter`, t?.transition.enter, t?.transition.animation)
        }
        if (e === r && n > r) {
            let t = i[e + 1];
            return fo(`exit`, t?.transition.exit, t?.transition.animation)
        }
        if (e === n && n < r) {
            let t = i[e + 1];
            return fo(`enter`, t?.transition.exit, t?.transition.animation)
        }
        if (e === r && n < r) {
            let t = i[e];
            return fo(`exit`, t?.transition.enter, t?.transition.animation)
        }
    }
}
function fo(e, t, n) {
    let r = {}
      , i = {};
    return o_.forEach(e => {
        r[e] = t_[e],
        i[e] = {
            ...n,
            from: t_[e]
        }
    }
    ),
    t && Object.keys(t).forEach(a => {
        if (t[a] === void 0)
            return;
        let o = t[a]
          , s = typeof t[a] == `string` ? `${Gh(t_)[a]}%` : Gh(t_)[a];
        Gh(r)[a] = e === `enter` ? s : o,
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
function po(e) {
    let t, n;
    return e.current === -1 ? n = e.history[e.previous] : t = e.history[e.current],
    {
        currentOverlayItem: t,
        previousOverlayItem: n
    }
}
function mo({currentOverlayItem: e}) {
    return e && e.transition.exit
}
function ho({currentOverlayItem: e, previousOverlayItem: t}) {
    return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : u_
}
function go({currentOverlayItem: e, previousOverlayItem: t}) {
    return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible
}
function _o(e) {
    if (e.backdropColor)
        return e.backdropColor;
    if (e.overCurrentContext)
        return `rgba(4,4,15,.4)`
}
function vo(e, t) {
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
function yo(e, t) {
    let n = t.history[e];
    if (n)
        return n.transition.enter
}
function bo(e, t) {
    let {current: n, previous: r, history: i} = t;
    return e === r && n > r || e === n && n < r ? i[e + 1]?.transition?.backfaceVisible : i[e]?.transition?.backfaceVisible
}
function xo(e, t) {
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
function So(e, t) {
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
    return u_
}
function Co(e, t, n) {
    let {current: r, previous: i, history: a} = t;
    return !!(n && a.length > 1 || e !== i && e !== r || r === i)
}
function wo(e, t) {
    let {current: n, previous: r} = t;
    return e > n && e > r ? !1 : e === n
}
function To(e) {
    return d.Children.map(e.component, t => {
        if (!qr(t) || !Kr(t) || !t.props)
            return t;
        let n = {
            style: t.props.style ?? {}
        }
          , r = e?.transition?.position
          , i = !r || r.left !== void 0 && r.right !== void 0
          , a = !r || r.top !== void 0 && r.bottom !== void 0
          , o = `style`in t.props ? R(t.props.style) : !0;
        return i && (`width`in t.props && (n.width = `100%`),
        o && (n.style.width = `100%`)),
        a && (`height`in t.props && (n.height = `100%`),
        o && (n.style.height = `100%`)),
        d.cloneElement(t, n)
    }
    )
}
function Eo(e, t) {
    if (e.goBackOnTapOutside !== !1)
        return t
}
function Do(e) {
    let t = Le()
      , n = Ne();
    return d.useInsertionEffect( () => {
        Ci()
    }
    , []),
    x(l_, {
        ...e,
        resetProjection: t,
        skipLayoutAnimation: n,
        children: e.children
    })
}
function Oo(e) {
    let t = [];
    if (e && e.length) {
        let n = e.map(e => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
        t.push(...n)
    }
    return t
}
function ko(e, t) {
    if (!e.shadows || e.shadows.length === 0)
        return;
    let n = e.shadows.map(e => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
    n && (t.textShadow = n)
}
function Ao(e, t) {
    let n = [];
    V(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    V(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    V(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    V(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    V(e.invert) && n.push(`invert(${e.invert / 100})`),
    V(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    V(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    V(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Oo(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `))
}
function jo(e, t) {
    V(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`)
}
function Mo(e, t) {
    jo(e, t),
    Ao(e, t)
}
function No(e, t) {
    let n, r = (...r) => {
        G.clearTimeout(n),
        n = G.setTimeout(e, t, ...r)
    }
    ;
    return r.cancel = () => {
        G.clearTimeout(n)
    }
    ,
    r
}
function Po(...e) {
    return e.filter(Boolean).join(` `)
}
function Fo(e, t, n) {
    let r = v.map(e, e => i(e) ? C(e, t) : e);
    return n ? r : x(y, {
        children: r
    })
}
function Io(e) {
    let t = Hr( () => Lo(e));
    return t.useSetup(e),
    t.cloneAsElement
}
function Lo(e) {
    let t = {
        forwardedRef: e,
        childRef: null,
        ref: null
    };
    t.ref = Ro(t);
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
        r && (t.ref = Ro(t))
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
                let i = ct(o) ? o(e.props) : o;
                return C(e, t.ref === r ? i : {
                    ...i,
                    ref: t.ref
                })
            }
            return e
        }
        )
    }
    let o = function(e, t) {
        return x(y, {
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
function Ro(e) {
    if (!e.forwardedRef)
        return e.childRef;
    let {forwardedRef: t, childRef: n} = e;
    return e => {
        Fa(n, e),
        Fa(t, e)
    }
}
function zo(e, t, n, r, i, a, o, s) {
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
        if (!n || !Uo(l.props, n)) {
            f.push(t);
            continue
        }
        let r = Ho([t], a);
        r.length && u.push({
            variants: r,
            propOverrides: n
        })
    }
    if (u.length === 0)
        return o(l, n);
    let p = [i, ...f]
      , m = Ho(p, a);
    m.length && u.unshift({
        variants: m
    });
    let h = [];
    for (let {variants: e, propOverrides: t} of u) {
        if (s && !e.includes(s))
            continue;
        let c = e.join(`+`)
          , d = x(O_.Provider, {
            value: {
                primaryVariantId: i,
                variants: new Set(e)
            },
            children: o(l, t ? {
                ...n,
                ...t
            } : n)
        }, c)
          , f = Vo(e, a, r);
        f.length ? (z(u.length > 1, `Must branch out when there are hiddenClassNames`),
        d = x(`div`, {
            className: `${k_} ${f.join(` `)}`,
            children: d
        }, c)) : z(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
        h.push(d)
    }
    return z(!s || h.length === 1, `Must render exactly one branch when activeVariantId is given`),
    h
}
function Bo(e) {
    return e.split(`-`)[2]
}
function Vo(e, t, n) {
    let r = [];
    for (let[i,a] of Object.entries(n)) {
        let n = t && !t.has(i);
        if (e.includes(i) || n)
            continue;
        r.push(`hidden-${Bo(a)}`)
    }
    return r
}
function Ho(e, t) {
    return t ? e.filter(e => t.has(e)) : e
}
function Uo(e, t) {
    for (let n of Object.keys(t))
        if (!et(e[n], t[n], !0))
            return !0;
    return !1
}
function Wo(e, t, n) {
    return !n || !e ? t : {
        ...t,
        ...n[e]
    }
}
function Go() {
    return d.useContext(G_)
}
function Ko(e) {
    return e instanceof Error && (e.message.includes(`A component suspended while responding to synchronous input.`) || e.message.includes(`Minified React error #426`))
}
function qo() {
    if (O === void 0 || J_)
        return x(`div`, {
            hidden: !0,
            dangerouslySetInnerHTML: {
                __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->`
            }
        });
    throw X_
}
function Jo({children: e}) {
    return w(Q_) ? x(y, {
        children: e
    }) : x(a, {
        fallback: Z_,
        children: e
    })
}
function Yo() {
    return x(`div`, {
        hidden: !0,
        dangerouslySetInnerHTML: {
            __html: `<!-- Code boundary fallback rendered -->`
        }
    })
}
function Xo(e, t) {
    if (!Ff || Math.random() > .01)
        return;
    let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null
      , r = t?.componentStack;
    Ot(`published_site_load_recoverable_error`, {
        message: String(e),
        stack: n,
        componentStack: n ? void 0 : r
    })
}
function Zo(...e) {
    console.error(...e)
}
function Qo() {
    return q.current() !== q.canvas
}
function $o({getErrorMessage: e, fallback: t, children: n}) {
    return Qo() ? x(es, {
        fallback: t,
        children: x(ev, {
            fallback: t,
            getErrorMessage: e,
            children: n
        })
    }) : n
}
function es({children: e, fallback: t=$_}) {
    return O === void 0 ? x(a, {
        fallback: t,
        children: e
    }) : x(Jo, {
        children: e
    })
}
function ts() {
    return d.useContext(nv)
}
function ns() {
    let e = ts();
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
function rs({children: e, scopeId: t, nodeId: n}) {
    let r = ts()
      , i = d.useMemo( () => ({
        level: (r?.level ?? 0) + 1,
        scopeId: t,
        nodeId: n,
        parent: r
    }), [t, n, r]);
    return x(nv.Provider, {
        value: i,
        children: e
    })
}
function os(e, t) {
    return `${rv}${e}:${t}`
}
function ss(e, t) {
    return cs(`component`, e, t)
}
function cs(e, t, n) {
    return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${os(t, n)} \u2192 click \u201CShow Layer\u201D.`
}
function ls(e, t, n, r, i, a) {
    let o = us(e, t, n, a);
    return o && !i && r || o && i
}
function us(e, t, n, r) {
    return !!(pt(n) || n === 1 && r && e === t)
}
function ds(e, t, n, r, i, a) {
    let o = ts();
    return pt(t) || pt(n) ? x(tv, {
        children: e
    }) : (ls(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) && (e = x($o, {
        getErrorMessage: ss.bind(null, t, n),
        fallback: null,
        children: e
    })),
    i && (e = x(rs, {
        scopeId: t,
        nodeId: n,
        children: e
    })),
    e)
}
function fs(e, t, n) {
    let r = {};
    for (let[,i] of e)
        for (let e of i) {
            let i = r[e] ?? t[e] ?? n[e];
            i && (r[e] = i)
        }
    return r
}
function ps(e) {
    return !(!e || e.placement || e.alignment)
}
function ms(e) {
    switch (e) {
    case `start`:
        return `0%`;
    case `center`:
        return `-50%`;
    case `end`:
        return `-100%`;
    default:
        B(e)
    }
}
function hs(e, t=`center`) {
    switch (e) {
    case `top`:
        return `${ms(t)}, -100%`;
    case `right`:
        return `0%, ${ms(t)}`;
    case `bottom`:
        return `${ms(t)}, 0%`;
    case `left`:
        return `-100%, ${ms(t)}`;
    default:
        return `-50%, -50%`
    }
}
function gs(e, t) {
    let n = document.elementFromPoint(e, t);
    for (; n; ) {
        if (n === document.body)
            return;
        let e = n.getAttribute(`data-framer-cursor`);
        if (e)
            return e;
        if (n.hasAttribute(fv)) {
            let e = n.getAttribute(fv);
            n = n.parentElement,
            e && (n = document.getElementById(e) ?? n)
        } else
            n = n.parentElement
    }
}
function _s(e) {
    let {registerCursors: t} = w(ov)
      , n = Hr( () => e)
      , r = l();
    f( () => t(n, r), [t, r])
}
function vs(e) {
    return !!(e && typeof e == `object` && mv in e)
}
function ys(e) {
    return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`
}
function bs() {
    return q.current() === q.canvas
}
function xs(e) {
    return e === void 0 ? !1 : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`))
}
function Ss(e, t) {
    try {
        return !!new URL(e).protocol
    } catch {}
    return t
}
function Cs(e, t, n) {
    if (L(e)) {
        let r = xs(e);
        if (!t.routes || !t.getRoute || !n || !r)
            return;
        let[i] = e.split(`#`, 2);
        if (i === void 0)
            return;
        let[a] = i.split(`?`, 2);
        if (a === void 0)
            return;
        let {routeId: o} = jn(t.routes, a);
        return t.getRoute(o)
    }
    let {webPageId: r} = e;
    return t.getRoute?.call(t, r)
}
function ws(e) {
    return L(e) && e.startsWith(`data:${xv}`)
}
function Ts(e) {
    if (ws(e))
        try {
            let t = new URL(e), n = t.pathname.substring(xv.length), r = t.searchParams, i = r.has(_v) ? r.get(_v) : void 0, a, o = r.get(vv), s = r.get(yv), c = r.get(bv);
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
function Es(e, t, n) {
    let r = t.getAttribute(`data-framer-page-link-target`), i, a;
    if (r) {
        i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
        let e = t.getAttribute(`data-framer-page-link-path-variables`);
        e && (a = Object.fromEntries(new URLSearchParams(e).entries()))
    } else {
        let e = t.getAttribute(`href`);
        if (!e)
            return !1;
        let n = Ts(e);
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
function Ds(e) {
    if (!ws(e))
        return e;
    let t = Ts(e);
    if (!t)
        return;
    let {target: n, element: r, collectionItem: i} = t;
    if (n)
        return {
            webPageId: n,
            hash: r ?? void 0,
            pathVariables: Os(i)
        }
}
function Os(e) {
    if (!e)
        return;
    let t = {};
    for (let n in e.pathVariables) {
        let r = e.pathVariables[n];
        r && (t[n] = r)
    }
    return t
}
function ks(e, n, r, i, a, o) {
    let s = w(Sv)
      , c = ns()
      , l = T( () => ({
        scopeId: n,
        nodeId: r,
        furthestExternalComponent: c
    }), [n, r, c])
      , u = rt()
      , d = at()
      , f = T( () => {
        let e = vs(i) ? i : Ds(i);
        if (e)
            return Cs(e, u, d)
    }
    , [d, i, u])
      , p = !!(!bs() && s?.nodeId && l.nodeId)
      , m = E(e => {
        var t;
        if (a.href) {
            if (e.preventDefault(),
            e.stopPropagation(),
            /Mac|iPod|iPhone|iPad/u.test(b.userAgent) ? e.metaKey : e.ctrlKey) {
                Ms(a.href, ``, `_blank`);
                return
            }
            f ? (t = a.navigate) == null || t.call(a) : Ms(a.href, a.rel, a.target)
        }
    }
    , [a, f])
      , h = E(e => {
        a.href && (e.preventDefault(),
        e.stopPropagation(),
        Ms(a.href, ``, `_blank`))
    }
    , [a])
      , g = E(e => {
        var t;
        a.href && e.key === `Enter` && (e.preventDefault(),
        e.stopPropagation(),
        f ? (t = a.navigate) == null || t.call(a) : Ms(a.href, a.rel, a.target))
    }
    , [a, f]);
    za(o, e => {
        e !== null && p && (e.dataset.hydrated = `true`)
    }
    , [p]);
    let _ = e;
    return p && (v.forEach(e, e => {
        js(e) && (z(As(s), "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"),
        z(As(l), "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"),
        gv.collectNestedLink(s, l))
    }
    ),
    _ = v.map(e, e => {
        if (!js(e))
            return e;
        let n = Ns(e.type)
          , {children: r, ...i} = e.props
          , a = {
            ...i,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: m,
            onAuxClick: h,
            onKeyDown: g,
            as: i.as && Ns(i.as)
        }
          , o = `ref`in e ? e.ref : void 0;
        return t(n, {
            ...a,
            ref: o
        }, r)
    }
    )),
    x(Sv.Provider, {
        value: l,
        children: _
    })
}
function As(e) {
    return !pt(e?.nodeId)
}
function js(e) {
    return i(e) && (Ns(e.type) !== e.type || Ns(e.props.as) !== e.props.as)
}
function Ms(e, t, n) {
    let r = document.createElement(`a`);
    r.href = e,
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove()
}
function Ns(e) {
    return e === `a` ? `span` : we(e) && je(e) === `a` ? Ee.span : e
}
function Ps(e, t) {
    return e instanceof HTMLAnchorElement ? e : e instanceof Element ? e === t ? null : Ps(e.parentElement, t) : null
}
function Fs({children: e}) {
    return x(Jo, {
        children: e
    })
}
function Is(e) {
    return s(function(t, n) {
        return x(Fs, {
            children: x(e, {
                ...t,
                ref: n
            })
        })
    })
}
function Ls() {
    var e;
    let t = b.connection || b.mozConnection || b.webkitConnection || {}, n = b.deviceMemory && b.deviceMemory > Av, r, i, a;
    function o() {
        r = t.effectiveType || ``,
        i = t.saveData || r.includes(`2g`),
        a = r === `3g` || n ? jv : Mv
    }
    (e = t.addEventListener) == null || e.call(t, `change`, o),
    o();
    let s = new IntersectionObserver(u,{
        threshold: kv
    })
      , c = 0;
    async function l(e, t) {
        if (i)
            return;
        let n = Fv.get(e);
        if (!n?.size || Pv.has(e))
            return;
        ++c,
        Pv.add(e);
        let r = Dt(e).catch( () => {}
        );
        s.unobserve(t),
        Nv.delete(t);
        for (let e of n)
            s.unobserve(e),
            Nv.delete(e);
        n.clear(),
        Fv.delete(e),
        await r,
        --c
    }
    function u(e) {
        for (let t of e) {
            let e = t.target
              , n = Nv.get(e);
            if (!n || Pv.has(n)) {
                s.unobserve(e),
                Nv.delete(e);
                continue
            }
            let r = Fv.get(n)
              , i = Fv.get(n)?.size ?? 0;
            if (t.isIntersecting) {
                if (c >= a)
                    continue;
                r ? r.add(e) : Fv.set(n, new Set([e])),
                setTimeout(l.bind(void 0, n, e), Ov)
            } else
                r && r.delete(e),
                i <= 1 && Fv.delete(n)
        }
    }
    return (e, t) => {
        if (!Pv.has(e))
            return Nv.set(t, e),
            s.observe(t),
            () => {
                Nv.delete(t),
                s.unobserve(t)
            }
    }
}
function Rs(e, t, n) {
    let r = ((Rv?.get(n?.id ?? Lv))?.get(e.collectionId))?.get(e.collectionItemId);
    if (r)
        return r;
    let i = Rv.get(n?.id ?? Lv) ?? new Map;
    Rv.set(n?.id ?? Lv, i);
    let a = i.get(e.collectionId) ?? new Map;
    i.set(e.collectionId, a);
    let o = new Dv(async () => {
        try {
            let r = t[e.collectionId];
            if (!r)
                throw Error(`Key not found in collection utils for collection id: "${e.collectionId}"`);
            let i = await r();
            if (!i)
                throw Error(`Collection does not contain utility functions`);
            return await i.getSlugByRecordId(e.collectionItemId, n ?? void 0)
        } catch (e) {
            console.warn(`Failed to resolve slug: ${einstanceof Error ? e.message : `Unknown error`}`);
            return
        }
    }
    );
    return a.set(e.collectionItemId, o),
    o
}
function zs(e, t, n, r) {
    let i = [];
    function a(e) {
        if (!e || !n)
            return;
        let t = {};
        for (let a in e) {
            let o = e[a];
            z(o, `unresolvedSlug should be defined`);
            let s = Rs(o, n, r)
              , c = s.preload();
            if (c)
                i.push(c);
            else {
                let e = s.read();
                e && (t[a] = e)
            }
        }
        return t
    }
    let o = {
        path: a(e),
        hash: a(t)
    };
    if (i.length)
        throw Promise.allSettled(i);
    return o
}
function Bs(e, t, n, r, i) {
    let {webPageId: a, hash: o, pathVariables: s, hashVariables: c, unresolvedHashSlugs: l, unresolvedPathSlugs: u} = n
      , d = zs(u, l, e.collectionUtils, r);
    return Hs(e, t, a, o, i, s, c, d, r)
}
function Vs(e, t, n) {
    if (!(!e.routes || !e.getRoute) && xs(t))
        try {
            let[r,i] = t.split(`#`, 2);
            z(r !== void 0, `A href must have a defined pathname.`);
            let[a] = r.split(`?`, 2);
            z(a !== void 0, `A href must have a defined pathname.`);
            let {routeId: o, pathVariables: s} = jn(e.routes, a)
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
function Hs(e, t, n, r, i, a, o, s, c) {
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
      , f = pn(d, {
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
function Us() {
    let e = w(Bv)
      , t = at()?.pathVariables;
    return e || t
}
function Ws(e, {webPageId: t, hash: n, pathVariables: r}, i) {
    if (t !== e.id || n)
        return !1;
    if (e.path && e.pathVariables) {
        let t = Object.assign({}, i, r);
        for (let[,n] of e.path.matchAll(zv))
            if (!n || e.pathVariables[n] !== t[n])
                return !1
    }
    return !0
}
function Gs(e, t) {
    let n = xs(e)
      , r = {
        href: e === `` || Ss(e, n) ? e : `https://${e}`,
        target: Ks(t?.openInNewTab, n),
        rel: n ? void 0 : qs(`noopener`, t?.rel)
    };
    return t?.preserveParams && (r.href = Pt(r.href ?? e),
    r[`data-framer-preserve-params`] = !0),
    t?.trackLinkClick && (r.onClick = () => {
        t.trackLinkClick(e)
    }
    ),
    r
}
function Ks(e, t) {
    return e === void 0 ? t ? void 0 : `_blank` : e ? `_blank` : void 0
}
function qs(e, t) {
    if (e && !t)
        return e;
    if (!e && t)
        return t;
    if (e && t)
        return `${e} ${t}`
}
function Js({nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i}) {
    return E(async a => {
        var o;
        if (!n.pageviewEventData?.current)
            return;
        let s = n.pageviewEventData.current instanceof Promise ? await n.pageviewEventData.current : n.pageviewEventData.current
          , c = vs(r) ? r : Ds(r);
        if (!vs(c))
            return Ot(`published_site_click`, {
                ...s,
                href: a ? Ys(a) : null,
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
        if (u?.collectionId && c.pathVariables && n.collectionUtils?.[u.collectionId]) {
            let e = await (o = n.collectionUtils)[u.collectionId]?.call(o)
              , [t] = Object.values(c.pathVariables);
            e && typeof t == `string` && (f = await e.getRecordIdBySlug(t, i || void 0) ?? null)
        }
        return Ot(`published_site_click`, {
            ...s,
            href: a ? Ys(a) : null,
            nodeId: e ?? null,
            trackingId: t ?? null,
            targetRoutePath: d,
            targetWebPageId: l,
            targetCollectionItemId: f
        }, `eager`)
    }
    , [e, t, n, r, i])
}
function Ys(e) {
    try {
        let t = new URL(e,G.document.baseURI);
        return t.origin === G.location.origin ? t.pathname + t.search + t.hash : t.href
    } catch {
        return e
    }
}
function Xs(e, t, n, r, i, a) {
    var o;
    let s = e.getRoute?.call(e, t);
    s && Ve(s?.page) && s.page.preload(),
    (o = e.navigate) == null || o.call(e, t, n, r, i, a)
}
function Zs(e, t, n, r, i, a, o) {
    return async s => {
        let c = s.metaKey
          , l = Ps(s.target)
          , u = !l || l.getAttribute(`target`) === `_blank`
          , d = !c && !u
          , f = () => void r(n);
        if (!d) {
            await Tt({
                priority: `user-blocking`,
                ensureContinueBeforeUnload: !0,
                continueAfter: `paint`
            }),
            f();
            return
        }
        s.preventDefault(),
        Xs(e, t, i, a, o, f)
    }
}
function Qs(e, t, n, r, i, a) {
    if (!n)
        return Gs(e, r);
    let o = Vs(t, e, a);
    if (!o)
        return Gs(e, r);
    let {routeId: s, route: c, elementId: l, pathVariables: u} = o;
    if (!c)
        return Gs(e, r);
    let d = pn(c, {
        currentRoutePath: n.path,
        currentRoutePathLocalized: n.pathLocalized,
        currentPathVariables: n.pathVariables,
        hash: l,
        pathVariables: u,
        preserveQueryParams: t.preserveQueryParams && !If,
        siteCanonicalURL: t.siteCanonicalURL,
        localeId: i
    })
      , f = Ks(r.openInNewTab, !0);
    return {
        href: d,
        target: f,
        onClick: Zs(t, s, d, r.trackLinkClick, l, u, r.smoothScroll),
        navigate: () => Xs(t, s, l, u, r.smoothScroll),
        "data-framer-page-link-current": n && Ws(n, {
            webPageId: s,
            hash: l,
            pathVariables: u
        }, a) || void 0
    }
}
function $s(e, t, n) {
    let r = ec(e.style, t.style)
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
            ct(s) && s?.(e),
            o?.(e)
        }
        : void 0,
        onTap: a || c ? (e, t) => {
            ct(c) && c?.(e, t),
            a?.(e, t)
        }
        : void 0
    }
}
function ec(e, t) {
    let n = R(e) ? e : void 0
      , r = n && !ft(n)
      , i = t && !ft(t);
    if (!(!r && !i))
        return {
            ...n,
            ...t
        }
}
function tc(e, t, n) {
    if (!(t && pg()))
        return e;
    let {onClick: r, ...i} = e;
    return r ? n ? {
        ...i,
        onTap: r,
        onClick: nc
    } : {
        ...i,
        onTap: r
    } : e
}
function nc(e) {
    let t = Ps(e.target);
    !t || t.getAttribute(`target`) === `_blank` || e.preventDefault()
}
function rc(e, t, n, r, i, a) {
    let o = vs(e) ? e : Ds(e);
    if (!vs(o))
        return L(e) ? Gs(e).href : void 0;
    if (!t.getRoute || !t.currentRouteId)
        return;
    let s = t.getRoute(t.currentRouteId)
      , {webPageId: c, hash: l, pathVariables: u, hashVariables: d, unresolvedHashSlugs: f, unresolvedPathSlugs: p} = o
      , m = t.getRoute(c)
      , h = p || f ? a?.(p, f) : void 0
      , g = Object.assign({}, t.currentPathVariables, n, u, h?.path)
      , _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
    return pn(m, {
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
function ic({EditorBar: e, fast: t=!1}) {
    let n = eg()
      , r = w(Hv)
      , i = u(Jv, t ? Gv : Kv, qv)
      , o = T( () => {
        let e = {}, t;
        for (t in n)
            n.hasOwnProperty(t) && t.startsWith(`editorBar`) && (e[t] = n[t]);
        return e
    }
    , [n]);
    return !e || !r || !i ? null : x(Wv, {
        children: x(a, {
            children: x(e, {
                framerSiteId: r,
                features: o
            })
        })
    })
}
function ac(e, t) {
    if (e.routeId !== t.routeId)
        return !1;
    if (e.pathVariables === t.pathVariables)
        return !0;
    let n = e.pathVariables || {}
      , r = t.pathVariables || {};
    return n.length === r.length && Object.keys(n).every(e => n[e] === r[e])
}
function oc() {
    let e = Intl.DateTimeFormat().resolvedOptions();
    Yv = e.timeZone,
    Xv = e.locale
}
function sc() {
    let[e,t] = d.useState(0);
    return [e, d.useCallback( () => t(e => e + 1), [])]
}
function cc(e, t, n) {
    let r = e && document.getElementById(e);
    if (r) {
        mc(r, t);
        return
    }
    n || O.scrollTo(0, 0)
}
function lc(e) {
    let t = S([]);
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
function uc(e) {
    if (!e)
        return Pf;
    let t = !1;
    return () => {
        t || (t = !0,
        e?.())
    }
}
function dc() {
    let e = gn()
      , t = S(void 0);
    return E(async (n, r, i, a=!0) => {
        var o;
        let s = i !== void 0;
        (o = t.current) == null || o.abort();
        let c = a ? new AbortController : void 0;
        t.current = c;
        let l = c?.signal
          , u = st(l);
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
        ).catch(Pf);
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
        l?.aborted || dp()
    }
    , [e])
}
function fc({defaultPageStyle: e, disableHistory: t, initialPathVariables: n, initialRoute: r, notFoundPage: i, collectionUtils: a, routes: o, initialLocaleId: s, locales: l=Nf, preserveQueryParams: u=!1, LayoutTemplate: d, EditorBar: p, siteCanonicalURL: m, adaptLayoutToTextDirection: h}) {
    wn(),
    un({
        disabled: t,
        routeId: r,
        initialPathVariables: n,
        initialLocaleId: s
    });
    let g = tn()
      , [_,v] = sc()
      , y = lc(_)
      , b = dc()
      , C = an(`framer-route-change`)
      , {synchronousNavigationOnDesktop: w} = eg()
      , D = T( () => !w || !mg() ? c : e => e(), [w])
      , ne = S(!0)
      , k = S()
      , re = S(r)
      , ie = S(n)
      , ae = S(s)
      , oe = ae.current
      , se = T( () => l.find( ({id: e}) => oe ? e === oe : e === Qv) ?? null, [oe, l])
      , ce = se?.textDirection ?? `ltr`
      , le = h ? ce : `ltr`;
    f( () => {
        h && document.documentElement.setAttribute(`dir`, ce)
    }
    , [ce, h]);
    let ue = T( () => ({
        activeLocale: se,
        locales: l,
        setLocale: async e => {
            let t = C({
                localized: !0
            });
            await Tt({
                priority: `user-blocking`,
                continueAfter: `paint`
            });
            let n;
            L(e) ? n = e : R(e) && (n = e.id);
            let r = l.find( ({id: e}) => e === Qv)
              , i = l.find( ({id: e}) => e === n);
            if (!i)
                return;
            let s = re.current
              , c = o[s];
            if (c)
                try {
                    let e = await hn({
                        currentLocale: se,
                        nextLocale: i,
                        route: c,
                        routeId: s,
                        defaultLocale: r,
                        pathVariables: ie.current,
                        collectionUtils: a,
                        preserveQueryParams: u
                    });
                    if (!e)
                        return;
                    let n = sn(O.history.state) ? O.history.state.paginationInfo : void 0
                      , o = e.path;
                    ne.current = !1,
                    ie.current = e.pathVariables,
                    ae.current = i.id,
                    b( () => {
                        g(s, s, () => D(v))
                    }
                    , t, async (t=!1) => {
                        if (o)
                            return ln({
                                routeId: s,
                                pathVariables: e.pathVariables,
                                localeId: i.id,
                                paginationInfo: n
                            }, o, t)
                    }
                    , !1)
                } catch {}
        }
    }), [se, a, v, l, u, o, b, g, C, D])
      , de = E( (e, t, n, r, i, a, o, s=!1, c) => {
        ne.current = !1;
        let l = re.current;
        if (re.current = e,
        ie.current = i,
        ae.current = t,
        k.current = r,
        y( () => {
            cc(n, s, a)
        }
        ),
        a) {
            D(v);
            return
        }
        b(t => {
            g(l, e, () => D(v), t)
        }
        , o, c, !0)
    }
    , [v, y, b, g, D]);
    dn(re, de);
    let fe = E(async (e, n, r, i, a) => {
        var s;
        let c = o[e]
          , l = Ve(c?.page) ? c.page.getStatus() : void 0
          , d = l?.hasRendered
          , f = C({
            cached: d,
            preloaded: d ? void 0 : l?.hasLoaded
        })
          , p = uc(a);
        if (Tt({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`
        }).then(p),
        await Tt({
            priority: `user-blocking`,
            continueAfter: `paint`
        }),
        r) {
            let e = new Set
              , t = c?.path ?? `/`;
            for (let n of t.matchAll($f)) {
                let t = n[1];
                if (t === void 0)
                    throw Error(`A matching path variable should not be undefined`);
                e.add(t)
            }
            r = Object.fromEntries(Object.entries(r).filter( ([t]) => e.has(t)))
        }
        let h = ot(c, n)
          , g = ie.current
          , _ = ae.current;
        if (ac({
            routeId: re.current,
            pathVariables: g
        }, {
            routeId: e,
            pathVariables: r
        })) {
            (s = f.ignore) == null || s.call(f);
            let a = o[e];
            O.history.state?.hash !== n && !t && a && (p(),
            await on(e, a, {
                currentRoutePath: a.path,
                currentPathVariables: g,
                pathVariables: r,
                hash: n,
                localeId: _,
                preserveQueryParams: u,
                siteCanonicalURL: m,
                currentRoutePathLocalized: a.pathLocalized
            })),
            cc(h, i, !1);
            return
        }
        if (!c)
            return;
        let v = o[re.current]
          , y = async (t=!1) => (p(),
        on(e, c, {
            currentRoutePath: v?.path,
            currentPathVariables: g,
            currentRoutePathLocalized: v?.pathLocalized,
            hash: n,
            pathVariables: r,
            localeId: _,
            preserveQueryParams: u,
            siteCanonicalURL: m
        }, t))
          , b = Rt(m) + pn(c, {
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
        de(e, _, h, b, r, !1, f, i, t ? void 0 : y)
    }
    , [o, de, t, u, m, C])
      , A = tt(o)
      , pe = re.current
      , me = k.current
      , j = ie.current
      , M = o[pe]
      , N = M?.path
      , he = Zv(M, pe, me, j, a, se)
      , P = ne.current
      , F = T( () => ({
        navigate: fe,
        getRoute: A,
        currentRouteId: pe,
        currentPathVariables: j,
        routes: o,
        collectionUtils: a,
        preserveQueryParams: u,
        pageviewEventData: he,
        siteCanonicalURL: m,
        isInitialNavigation: P
    }), [fe, A, pe, j, o, a, u, m, he, P]);
    if (!M)
        throw Error(`Router cannot find route for ${pe}`);
    let ge = !se || !M.includedLocales || M.includedLocales.includes(se.id)
      , _e = N && j ? Nt(N, j) : N
      , ve = String(oe) + _e
      , ye = Hr( () => ({
        ...e,
        display: `contents`
    }));
    return x(nt, {
        api: F,
        children: x(bp.Provider, {
            value: ue,
            children: ee(xp.Provider, {
                value: le,
                children: [p && x(ic, {
                    EditorBar: p,
                    fast: !0
                }), x(Y_, {
                    children: ee(Jo, {
                        children: [ee(Jp, {
                            notFoundPage: i,
                            defaultPageStyle: e,
                            forceUpdateKey: _,
                            children: [x(Kp.Start, {}), x(pc, {
                                LayoutTemplate: d,
                                routeId: M?.abTestingVariantId ?? pe,
                                style: e,
                                children: t => x(te, {
                                    children: ge ? kn(M.page, t ? ye : e) : i && kn(i, e)
                                }, ve)
                            })]
                        }), p && x(ic, {
                            EditorBar: p
                        }), x(bn, {}), x(Kp.End, {})]
                    })
                })]
            })
        })
    })
}
function pc({LayoutTemplate: e, routeId: t, style: n, children: r}) {
    return e ? x(e, {
        routeId: t,
        style: n,
        children: r
    }) : r(!1)
}
function mc(e, t) {
    let n = t ? {
        behavior: `smooth`,
        block: `start`,
        inline: `nearest`
    } : void 0;
    e.scrollIntoView(n)
}
function hc(e) {
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
function gc(e) {
    return typeof e == `object` && !!e
}
function _c(e, t) {
    if (t === ``)
        return e;
    let n = t.split(/[.[\]]+/u).filter(e => e.length > 0)
      , r = e;
    for (let e of n) {
        if (!gc(r))
            return;
        r = r[e]
    }
    return r
}
function vc(e) {
    return `${e.credentials}:${e.url}`
}
function yc(e) {
    return L(e) && !Number.isNaN(Number(e))
}
function bc(e, t) {
    switch (e) {
    case `string`:
        return L(t) || ut(t);
    case `color`:
        return L(t);
    case `boolean`:
        return lt(t);
    case `number`:
        return ut(t) || yc(t);
    case `link`:
    case `image`:
        return L(t) && Ss(t, !1);
    default:
        return !1
    }
}
function xc(e, t) {
    if (e.status === `loading`)
        return t.fallbackValue;
    if (e.status === `error`)
        throw e.error;
    let n = _c(e.data, t.resultKeyPath);
    if (pt(n))
        throw Error(`Key '${t.resultKeyPath}' not found in response`);
    if (!bc(t.resultOutputType, n))
        throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
    return n
}
function Sc(e, t) {
    if (q.current() === q.canvas)
        return !1;
    let n = Math.max(t * 1e3, ey)
      , r = Date.now()
      , i = e + n;
    return r >= i
}
function Cc({RootComponent: e, isWebsite: t, routeId: n, framerSiteId: r, pathVariables: i, routes: a, collectionUtils: o, notFoundPage: s, isReducedMotion: c=!1, includeDataObserver: l=!1, localeId: u, locales: f, preserveQueryParams: p, EditorBar: m, defaultPageStyle: h, disableHistory: g, LayoutTemplate: _, siteCanonicalURL: v, adaptLayoutToTextDirection: y}) {
    if (d.useEffect( () => {
        t || Om.start()
    }
    , []),
    t)
        return x(ae, {
            reducedMotion: c ? `user` : `never`,
            children: x(fy, {
                children: x(uv, {
                    children: x(Hv.Provider, {
                        value: r,
                        children: x(fc, {
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
        });
    {
        let t = l ? y_ : d.Fragment;
        return x(t, {
            children: x(it, {
                routes: a,
                children: x(Do, {
                    children: d.isValidElement(e) ? e : d.createElement(e, {
                        key: n
                    })
                })
            })
        })
    }
}
function wc(e) {
    return {
        trace(...t) {
            return X.getLogger(e)?.trace(...t)
        },
        debug(...t) {
            return X.getLogger(e)?.debug(...t)
        },
        info(...t) {
            return X.getLogger(e)?.info(...t)
        },
        warn(...t) {
            return X.getLogger(e)?.warn(...t)
        },
        error(...t) {
            return X.getLogger(e)?.error(...t)
        },
        get enabled() {
            return X.getLogger(e) !== void 0
        }
    }
}
function Tc(e) {
    let t = e.next();
    return z(t.done, `Generator must not yield`),
    t.value
}
async function Ec(e, t=e.next()) {
    for (; !t.done; ) {
        let n = await t.value;
        t = e.next(n)
    }
    return t.value
}
function Dc(e) {
    let t = e.next();
    return t.done ? t.value : Ec(e, t)
}
function *U(e) {
    let t = {}
      , n = Object.keys(e)
      , r = [];
    for (let i of n) {
        let n = e[i];
        if (_t(n)) {
            let e = n.next();
            e.done ? t[i] = e.value : r.push(Ec(n, e).then(e => {
                t[i] = e
            }
            ))
        } else
            t[i] = n
    }
    return r.length > 0 && (yield Promise.all(r)),
    t
}
function *Oc(e) {
    let t = []
      , n = e.keys()
      , r = [];
    for (let i of n) {
        let n = e[i];
        if (_t(n)) {
            let e = n.next();
            e.done ? t[i] = e.value : r.push(Ec(n, e).then(e => {
                t[i] = e
            }
            ))
        } else
            t[i] = n
    }
    return r.length > 0 && (yield Promise.all(r)),
    t
}
function kc(e) {
    return Mc(e) || Fc(e)
}
function Ac(e) {
    return dt(e) && e.every(R)
}
function jc(e) {
    return R(e) && ct(e.read) && ct(e.preload)
}
function Mc(e) {
    return Ac(e) || jc(e)
}
function Nc(e) {
    return R(e) && R(e.schema)
}
function Pc(e) {
    return R(e) && R(e.collectionByLocaleId)
}
function Fc(e) {
    return Nc(e) || Pc(e)
}
function Ic(e, t, n) {
    let r = e.value.length
      , i = t.value.length;
    if (r < i)
        return -1;
    if (r > i)
        return 1;
    for (let i = 0; i < r; i++) {
        let r = e.value[i]
          , a = t.value[i]
          , o = dl(r, a, n);
        if (o !== 0)
            return o
    }
    return 0
}
function Lc(e, t) {
    switch (e?.type) {
    case `array`:
        return {
            type: `array`,
            value: e.value.map(e => Z.cast(e, t.definition))
        }
    }
    return null
}
function Rc(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function zc(e) {
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
function Bc(e) {
    return zc(e)?.value ?? !1
}
function Vc(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Hc(e) {
    switch (e?.type) {
    case `color`:
        return e
    }
    return null
}
function Uc(e, t) {
    let n = new Date(e.value)
      , r = new Date(t.value);
    return n < r ? -1 : n > r ? 1 : 0
}
function Wc(e) {
    switch (e?.type) {
    case `date`:
        return e;
    case `number`:
    case `string`:
        {
            let t = new Date(e.value);
            return gt(t) ? {
                type: `date`,
                value: t.toISOString()
            } : null
        }
    }
    return null
}
function Gc(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Kc(e) {
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
function qc(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Jc(e) {
    switch (e?.type) {
    case `file`:
        return e
    }
    return null
}
function Yc(e, t) {
    let n = JSON.stringify(e.value)
      , r = JSON.stringify(t.value);
    return n < r ? -1 : n > r ? 1 : 0
}
function Xc(e) {
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
function Zc(e, t) {
    return e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
function Qc(e) {
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
function $c(e) {
    return Qc(e)?.value ?? null
}
function el(e, t, n) {
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
          , u = dl(c, l, n);
        if (u !== 0)
            return u
    }
    return 0
}
function tl(e, t) {
    switch (e?.type) {
    case `object`:
        {
            let n = {}
              , r = Object.entries(t.definitions);
            for (let[t,i] of r) {
                let r = e.value[t] ?? null;
                n[t] = Z.cast(r, i)
            }
            return {
                type: `object`,
                value: n
            }
        }
    }
    return null
}
function nl(e, t) {
    let n = JSON.stringify(e.value)
      , r = JSON.stringify(t.value);
    return n < r ? -1 : n > r ? 1 : 0
}
function rl(e) {
    switch (e?.type) {
    case `responsiveimage`:
        return e
    }
    return null
}
function il(e, t) {
    let n = e.value
      , r = t.value;
    return n < r ? -1 : n > r ? 1 : 0
}
function al(e) {
    switch (e?.type) {
    case `richtext`:
        return e
    }
    return null
}
function ol(e, t) {
    let n = e.value
      , r = t.value;
    return n < r ? -1 : n > r ? 1 : 0
}
function sl(e) {
    switch (e?.type) {
    case `vectorsetitem`:
        return e
    }
    return null
}
function cl(e, t, n) {
    let r = e.value
      , i = t.value;
    return n.type === 0 && (r = e.value.toLowerCase(),
    i = t.value.toLowerCase()),
    r < i ? -1 : r > i ? 1 : 0
}
function ll(e) {
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
function ul(e) {
    return ll(e)?.value ?? null
}
function dl(e, t, n) {
    if (mt(e) || mt(t))
        return z(e === t),
        0;
    switch (e.type) {
    case `array`:
        return z(e.type === t.type),
        Ic(e, t, n);
    case `boolean`:
        return z(e.type === t.type),
        Rc(e, t);
    case `color`:
        return z(e.type === t.type),
        Vc(e, t);
    case `date`:
        return z(e.type === t.type),
        Uc(e, t);
    case `enum`:
        return z(e.type === t.type),
        Gc(e, t);
    case `file`:
        return z(e.type === t.type),
        qc(e, t);
    case `link`:
        return z(e.type === t.type),
        Yc(e, t);
    case `number`:
        return z(e.type === t.type),
        Zc(e, t);
    case `object`:
        return z(e.type === t.type),
        el(e, t, n);
    case `responsiveimage`:
        return z(e.type === t.type),
        nl(e, t);
    case `richtext`:
        return z(e.type === t.type),
        il(e, t);
    case `vectorsetitem`:
        return z(e.type === t.type),
        ol(e, t);
    case `string`:
        return z(e.type === t.type),
        cl(e, t, n);
    default:
        B(e)
    }
}
async function fl(e, t) {
    return jc(e) ? (await e.preload(t),
    e.read(t)) : e
}
function pl(e) {
    if (Fc(e) && e.id)
        return e.id;
    let t = gy.get(e);
    if (t)
        return t;
    let n = `${_y}${Math.random().toString(16).slice(2)}`;
    return gy.set(e, n),
    n
}
function ml(e, t) {
    if (Mc(e)) {
        let n = pl(e)
          , r = t?.id ?? Qv
          , i = n + r
          , a = vy.get(i);
        if (a)
            return a;
        let o = new hy(e,t);
        return vy.set(i, o),
        o
    }
    if (Nc(e))
        return e;
    if (Pc(e)) {
        for (; t; ) {
            let n = e.collectionByLocaleId[t.id];
            if (n)
                return n;
            t = t.fallback
        }
        return e.collectionByLocaleId.default
    }
    B(e, `Unsupported collection type`)
}
function hl() {
    return 25
}
function gl() {
    return 12500
}
function _l(e) {
    return e
}
function vl(e) {
    return e
}
function yl(e) {
    return R(e) && ct(e.getHash)
}
function W(e, ...t) {
    let n = t.map(e => {
        let t = e instanceof Dy;
        z(!t, `Pass CollectionMetadata.id instead`);
        let n = e instanceof Ay;
        z(!n, `Pass FieldMetadata.id instead`);
        let r = e instanceof Oy;
        z(!r, `Pass IndexMetadata.id instead`);
        let i = e instanceof Cy;
        z(!i, `Pass RelationalNode.group.id instead`);
        let a = e instanceof by;
        return z(!a, `Pass Group.id instead`),
        yl(e) ? e.getHash() : JSON.stringify(e)
    }
    );
    return vl(`${e}(${n.join(`, `)})`)
}
function bl(e, t) {
    return {
        collectionId: pl(e),
        pointer: t
    }
}
function xl(e) {
    return R(e) && L(e.collectionId)
}
function Sl(e, t) {
    return {
        collectionId: pl(e),
        pointer: t
    }
}
function Cl(e) {
    return R(e) && L(e.collectionId)
}
function wl(e, t) {
    let n = new Map;
    function r(e) {
        if (R(e))
            if (e.type === `Collection` && kc(e.data)) {
                let r = ml(e.data, t)
                  , i = pl(r);
                n.set(i, r)
            } else
                for (let t in e) {
                    let n = e[t];
                    r(n)
                }
        else if (dt(e))
            for (let t of e)
                r(t)
    }
    return r(e),
    n
}
function Tl(e) {
    return e
}
function El(e) {
    return e
}
function Dl(e) {
    return e
}
function Ol(e) {
    return Array(e).fill({
        type: `All`
    })
}
function kl(e) {
    return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`
}
function Al(e) {
    return typeof e.value == `string` ? `'${e.value}'` : e.value
}
function jl(e) {
    return `${e.functionName}(${e.arguments.map(e => Il(e)).join(`, `)})`
}
function Ml(e) {
    let t = `CASE`;
    e.value && (t += ` ${Il(e.value)}`);
    for (let n of e.conditions)
        t += ` WHEN ${Il(n.when)} THEN ${Il(n.then)}`;
    return e.else && (t += ` ELSE ${Il(e.else)}`),
    t += ` END`,
    t
}
function Nl(e) {
    let t = Il(e.value);
    return `${e.operator.toUpperCase()} ${t}`
}
function Pl(e) {
    let t = Il(e.left)
      , n = Il(e.right)
      , r = e.operator.toUpperCase();
    return `${t} ${r} ${n}`
}
function Fl(e) {
    return `CAST(${Il(e.value)} as ${e.dataType})`
}
function Il(e) {
    switch (e.type) {
    case `Identifier`:
        return kl(e);
    case `LiteralValue`:
        return Al(e);
    case `FunctionCall`:
        return jl(e);
    case `Case`:
        return Ml(e);
    case `UnaryOperation`:
        return Nl(e);
    case `BinaryOperation`:
        return Pl(e);
    case `TypeCast`:
        return Fl(e);
    case `Select`:
        return `${Vl(e)}`;
    default:
        B(e)
    }
}
function Ll(e) {
    return Nc(e.data) ? `Collection` : e.alias ? `"${e.data.displayName}" AS "${e.alias}"` : `"${e.data.displayName}"`
}
function Rl(e) {
    let t = `${zl(e.left)} LEFT JOIN ${zl(e.right)}`;
    return e.constraint && (t += ` ON ${Il(e.constraint)}`),
    t
}
function zl(e) {
    switch (e.type) {
    case `Collection`:
        return Ll(e);
    case `LeftJoin`:
        return Rl(e);
    default:
        B(e)
    }
}
function Bl(e) {
    let t = ``;
    return e.split(/\s+/u).forEach(e => {
        e !== `` && ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e) ? t += `
${e}` : [`AND`, `OR`].includes(e) ? t += `
	${e}` : t += ` ${e}`)
    }
    ),
    t.trim()
}
function Vl(e) {
    let t = ``;
    return t += `SELECT ${e.select.map(e => {
        let t = Il(e);
        return e.alias ? `${t} AS "${e.alias}"` : t
    }
    ).join(`, `)}`,
    t += ` FROM ${zl(e.from)}`,
    e.where && (t += ` WHERE ${Il(e.where)}`),
    e.orderBy && (t += ` ORDER BY ${e.orderBy.map(e => `${Il(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Il(e.limit)}`),
    e.offset && (t += ` OFFSET ${Il(e.offset)}`),
    Bl(t)
}
function Hl(e, t) {
    e.forEach(e => clearTimeout(e)),
    e.clear(),
    t.forEach(e => e?.(`Callback cancelled by variant change`)),
    t.clear()
}
function Ul() {
    return new Set
}
function Wl(e) {
    let t = Hr(Ul)
      , n = Hr(Ul);
    return Wa( () => () => Hl(n, t)),
    D( () => () => Hl(n, t), []),
    D( () => {
        Hl(n, t)
    }
    , [e]),
    S({
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
function Gl(e, t, n) {
    return d.useCallback(r => !n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}, [e, t, n])
}
function Kl(e) {
    for (let[t,n] of Object.entries(e))
        if (G.matchMedia(n).matches)
            return t
}
function ql(e) {
    let t = [];
    for (let {hash: n, mediaQuery: r} of e) {
        if (!r)
            continue;
        G.matchMedia(r).matches && t.push(n)
    }
    if (t.length > 0)
        return t;
    let n = e[0]?.hash;
    if (n)
        return [n]
}
function Jl(e, t, n=!0) {
    let r = w(c_)
      , i = Ni()
      , a = !i && ag()
      , o = S(a ? Kl(t) ?? e : e)
      , s = S(n && r ? e : o.current)
      , l = na()
      , u = Pe()
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
    return vg( () => {
        i && d(e)
    }
    , [e, i, d]),
    vg( () => {
        !n || r !== !0 || d(o.current)
    }
    , []),
    D( () => {
        let e = [];
        for (let[n,r] of Object.entries(t)) {
            let t = G.matchMedia(r)
              , i = e => {
                e.matches && d(n)
            }
            ;
            Yl(t, i),
            e.push([t, i])
        }
        return () => e.forEach( ([e,t]) => Xl(e, t))
    }
    , [t, d]),
    [o.current, s.current]
}
function Yl(e, t) {
    e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t)
}
function Xl(e, t) {
    e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t)
}
function Zl(e) {
    setTimeout(e, 1)
}
function Ql(e) {
    var t, n, r, i;
    let a = new Set
      , o = ql(e);
    if (o)
        for (let e of o)
            for (let n of document.querySelectorAll(`.hidden-` + e))
                $l(n.previousSibling) && a.add(n.previousSibling),
                (t = n.parentNode) == null || t.removeChild(n);
    (Lf ? G.requestIdleCallback : Zl)( () => {
        var e;
        (e = document.querySelector(Vb)) == null || e.remove()
    }
    );
    for (let e of document.querySelectorAll(`.ssr-variant:empty`))
        $l(e.previousSibling) && a.add(e.previousSibling),
        (n = e.parentNode) == null || n.removeChild(e);
    for (let e of a)
        eu(e.nextSibling) && ((r = e.parentNode) == null || r.removeChild(e.nextSibling),
        (i = e.parentNode) == null || i.removeChild(e))
}
function $l(e) {
    return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`
}
function eu(e) {
    return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`
}
function tu(e) {
    return R(e) && Hb in e && e.page !== void 0
}
function nu(e, t) {
    let n = Object.entries(e ?? {}).filter( ([,e]) => !(pt(e) || R(e))).map( ([e,n]) => ({
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
function ru(e, t) {
    return `${e}-${t}`
}
function iu(e, t) {
    let n = e.indexOf(t) + 1;
    n >= e.length && (n = 0);
    let r = e[n];
    return z(r !== void 0, `nextVariant should be defined`),
    r
}
function au(e, t) {
    if (e) {
        if (t) {
            let n = e[t];
            if (n)
                return n
        }
        return e.default
    }
}
function ou(e, t, n, r, i) {
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
function su(e, t) {
    return t[e] || `framer-v-${e}`
}
function cu(e, t, n) {
    return e && n.has(e) ? e : t
}
function lu() {
    let e = S()
      , t = S()
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
function uu() {
    let e = S()
      , t = S(!1)
      , n = S()
      , r = w(qg);
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
        e.current = Ba(r, `undefined`, a.current, null, e => {
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
function du(e) {
    let t = lu()
      , n = uu();
    return E( (r, i=!1) => {
        if (If) {
            r();
            return
        }
        t(i && e ? () => n(r, e) : r)
    }
    , [t, n, e])
}
async function fu() {
    return new Promise(e => {
        let t = e;
        setTimeout( () => {
            t && (performance.mark(`wait-for-click-fallback`),
            t())
        }
        , 150),
        Gb = () => {
            e(),
            t = void 0
        }
    }
    )
}
function pu(e) {
    e.button === 0 && (performance.mark(`pointerdown-listener`),
    Wb = fu())
}
function mu() {
    performance.mark(`click-received-listener`),
    Wb = void 0,
    Gb?.(),
    Gb = void 0
}
function hu(e=!1) {
    D( () => {
        e && (document.addEventListener(`pointerup`, pu, !0),
        document.__proto__.addEventListener.call(document, `click`, mu, !0))
    }
    , [e])
}
function gu({variant: e, defaultVariant: t, transitions: n, enabledGestures: r, cycleOrder: i=[], variantProps: a={}, variantClassNames: o={}, ref: s}) {
    let l = na()
      , u = bs()
      , d = Hr( () => new Set(i))
      , {pauseOffscreen: f, yieldOnTap: p} = eg();
    hu(p);
    let m = du(s)
      , h = S({
        isHovered: !1,
        isHoveredHasUpdated: !1,
        isPressed: !1,
        isPressedHasUpdated: !1,
        isError: !1,
        hasPressedVariants: !0,
        baseVariant: cu(e, t, d),
        lastVariant: e,
        gestureVariant: void 0,
        loadedBaseVariant: {},
        defaultVariant: t,
        enabledGestures: r,
        cycleOrder: i,
        transitions: n
    })
      , g = E(e => {
        let {isHovered: t, isPressed: n, isError: r, enabledGestures: i, defaultVariant: a} = h.current
          , o = cu(e, a, d)
          , s = ou(i?.[o], t, n, !1, r)
          , c = s ? ru(o, s) : void 0;
        return [o, c]
    }
    , [])
      , _ = E(async (e, t, n, r, i=!1, a=!1) => {
        let[o,s] = g(r);
        if (o === e && s === t)
            return;
        a && (h.current.isError = !1),
        h.current.baseVariant = o || n,
        h.current.gestureVariant = s;
        let u = p && h.current.isPressedHasUpdated;
        u && Wb && (performance.mark(`wait-for-tap-start`),
        await Wb,
        performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
        u && (performance.mark(`yield-on-tap-start`),
        await Tt({
            priority: `user-blocking`,
            continueAfter: `paint`
        }),
        performance.measure(`yield-on-tap`, `yield-on-tap-start`));
        let {isHovered: d, isPressed: _, isHoveredHasUpdated: v, isPressedHasUpdated: y} = h.current;
        if (d || v || _ || y) {
            c(l);
            return
        }
        m( () => c(l), f && i)
    }
    , [g, l, m, f, p])
      , v = E( ({isHovered: e, isPressed: t, isError: n}) => {
        let r = t !== h.current.isPressed
          , i = e !== h.current.isHovered;
        e !== void 0 && (h.current.isHovered = e),
        t !== void 0 && (h.current.isPressed = t),
        n !== void 0 && (h.current.isError = n);
        let {baseVariant: a, gestureVariant: o, defaultVariant: s} = h.current;
        h.current.isPressedHasUpdated = r,
        h.current.isHoveredHasUpdated = i,
        _(a, o, s, a, !1)
    }
    , [_])
      , y = E( (e, t=!1) => {
        let {defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a} = h.current
          , o = e === Ub ? iu(r || [], i || n) : e;
        _(i, a, n, o, t, !0)
    }
    , [_])
      , b = E( () => {
        let {baseVariant: e} = h.current;
        h.current.loadedBaseVariant[e] = !0,
        m( () => c(l), !0)
    }
    , [l, m]);
    if (e !== h.current.lastVariant) {
        let[t,n] = g(e);
        h.current.lastVariant = t,
        (t !== h.current.baseVariant || n !== h.current.gestureVariant) && (h.current.baseVariant = t,
        h.current.gestureVariant = n)
    }
    let {baseVariant: x, gestureVariant: C, defaultVariant: w, enabledGestures: ee, isHovered: D, isPressed: O, isError: te, loadedBaseVariant: ne} = h.current
      , k = Gl(h.current.baseVariant, h.current.gestureVariant, a);
    return T( () => {
        let e = [];
        x !== w && e.push(x);
        let t = ee?.[x]?.loading
          , n = !te && !u && !!t && !ne[x]
          , r = n ? ru(x, `loading`) : C;
        r && e.push(r);
        let i = ee?.[x]
          , a = {
            onMouseEnter: () => v({
                isHovered: !0
            }),
            onMouseLeave: () => v({
                isHovered: !1
            })
        };
        return i?.pressed && Object.assign(a, {
            onTapStart: () => v({
                isPressed: !0
            }),
            onTapCancel: () => v({
                isPressed: !1
            }),
            onTap: () => v({
                isPressed: !1
            })
        }),
        {
            variants: e,
            baseVariant: x,
            gestureVariant: r,
            isLoading: n,
            transition: au(h.current.transitions, x),
            setVariant: y,
            setGestureState: v,
            clearLoadingGesture: b,
            addVariantProps: k,
            gestureHandlers: a,
            classNames: Po(su(x, o), ou(i, D, O, n, te))
        }
    }
    , [x, C, D, O, ne, k, y, w, ee, v, b, o])
}
function _u(e) {
    return e.weight !== void 0 && e.style !== void 0
}
function vu(e, t) {
    let n = t === `normal` ? `Regular` : `Italic`;
    return e === 400 ? n : t === `normal` ? `${Zb[e]}` : `${Zb[e]} ${n}`
}
function yu(e, ...t) {
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
function bu() {
    return $b
}
function xu({error: e, tags: t, extras: n, critical: r, caller: i}) {
    yu(ex, `Set up an error callback with setErrorReporter, or configure Sentry with initializeEnvironment`);
    let a = Su(e, i);
    return ex({
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
function Su(e, t=Su) {
    return e instanceof Error ? e : new tx(e,t)
}
function Cu() {
    return O === void 0 ? {} : ax || (ax = wu(),
    ax)
}
function wu() {
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
function Tu(e, t=0, n=new Set) {
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
            return Tu(e.toJSON(), t + 1, n);
        if (Array.isArray(e))
            return e.map(e => Tu(e, t + 1, n));
        if (Object.getPrototypeOf(e) !== Object.prototype)
            return `[Object: ${`__class`in e && e.__class || e.constructor?.name}]`;
        {
            let r = {};
            for (let[i,a] of Object.entries(e))
                r[i] = Tu(a, t + 1, n);
            return r
        }
    } catch (e) {
        return `[Throws: ${einstanceof Error ? e.message : e}]`
    } finally {
        n.delete(e)
    }
}
function Eu(e, t) {
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
            let n = sx[t];
            if (n && e.endsWith(n)) {
                i = t,
                a && (i += 1),
                e = e.slice(0, e.length - n.length),
                e.length === 0 && (e = `*`);
                break
            }
        }
        let o = RegExp(`^` + Nu(e).replace(/\\\*/gu, `.*`) + `$`)
          , s = 0;
        for (let e of t)
            e.id.match(o) && (e.level = i,
            ++s);
        s === 0 && n.push(r)
    }
    return n
}
function Du(e, t, n) {
    let r = new lx(e,t,n);
    for (px.push(r),
    dx?.(r); px.length > mx; )
        px.shift();
    return r
}
function Ou(e) {
    return typeof e == `number` && (mx = e),
    px
}
function ku() {
    if (!(O === void 0 || !O.location))
        return gx ??= hx.exec(O.location.pathname)?.groups?.filename,
        gx
}
function Au(e) {
    let t = ku();
    e = (t ? t + `:` : ``) + e;
    let n = fx[e];
    if (n)
        return n;
    let r = new vx(e);
    return fx[e] = r,
    Eu(ux, [r]),
    dx?.(new lx(r,-1,[])),
    r
}
function ju(e, t=!0) {
    try {
        O !== void 0 && O.localStorage && (O.localStorage.logLevel = e)
    } catch {}
    let n = ux;
    ux = e;
    let r = Object.values(fx);
    for (let e of r)
        e.level = 3;
    let i = Eu(e, r);
    if (i.length > 0 && (console == null || console.warn(`Some log level specs matched no loggers:`, i)),
    t && px.length > 0) {
        console == null || console.log(`--- LOG REPLAY ---`);
        for (let e of px) {
            if (e.logger.level > e.level)
                continue;
            e.level >= 3 ? console == null || console.warn(...e.toMessage()) : console == null || console.log(...e.toMessage())
        }
        console == null || console.log(`--- END OF LOG REPLAY ---`)
    }
    return n
}
function Mu(e) {
    return Object.prototype.hasOwnProperty.call(e, `message`)
}
function Nu(e) {
    return e.replace(/[/\-\\^$*+?.()|[\]{}]/gu, `\\$&`)
}
function Pu(e, t) {
    return wx.call(e, t)
}
function Fu(e) {
    return e.key + e.extension
}
function Iu(e) {
    return `${Cu().userContent}/assets/${e}`
}
function Lu(e) {
    return Iu(Fu(e))
}
function Ru(e, t) {
    return t ? `${e} ${kx}` : e
}
function zu(e, t) {
    switch (t) {
    case `custom`:
        throw Error(`Custom fonts are not supported`);
    default:
        return Ru(e.name, e.isVariable)
    }
}
function Bu(e) {
    return !!(e && Array.isArray(e))
}
function Vu(e) {
    if (!e || !Array.isArray(e))
        return;
    let t = [];
    for (let n of e) {
        if (!Uu(n))
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
function Hu(e) {
    return !(typeof e != `object` || !e || !(`tag`in e) || typeof e.tag != `string` || `coverage`in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
}
function Uu(e) {
    return !(typeof e != `object` || !e || !(`tag`in e) || typeof e.tag != `string` || `name`in e && typeof e.name != `string` || !(`minValue`in e) || typeof e.minValue != `number` || !(`maxValue`in e) || typeof e.maxValue != `number` || !(`defaultValue`in e) || typeof e.defaultValue != `number`)
}
function Wu(e) {
    let t = Gu(e);
    return Mx[t]
}
function Gu(e) {
    return e.toLowerCase().replace(/\s+/gu, `-`)
}
function Ku(e) {
    return e = e.toLowerCase(),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
}
function qu(e, t) {
    return {
        ...Ju(e, t),
        ...Yu(e, t)
    }
}
function Ju(e, t) {
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
function Yu(e, t) {
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
function Xu(e) {
    return !!e.variationAxes
}
function Zu(e) {
    return Qu(e) || $u(e)
}
function Qu(e) {
    return e.startsWith(Fx)
}
function $u(e) {
    return e.startsWith(Px)
}
function ed(e, t) {
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
function td(e) {
    let {font: t} = e
      , n = t.fontFamily
      , r = Array.isArray(t.variationAxes);
    if (r && n.toLowerCase().includes(`variable`))
        return n;
    let i = r ? kx : t.fontSubFamily.trim();
    return i === `` ? n : `${n} ${i}`
}
function nd({fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r}) {
    let i = t.trim() || `Regular`
      , a = i.toLocaleLowerCase().includes(`variable`)
      , o = Vu(n) && !a ? `Variable ${i}` : i
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
function rd(e) {
    if (!(!e.weight || !e.style))
        return {
            weight: e.weight,
            style: e.style,
            isVariable: Xu(e),
            selector: e.selector
        }
}
function id(e) {
    let t = e.fonts.map(e => rd(e)).filter(e => e !== void 0);
    for (let n of e.fonts) {
        let e = rd(n);
        if (!e)
            continue;
        let r = qu(e, t);
        n.selectorVariable = r.variantVariable?.selector,
        n.selectorVariableItalic = r.variantVariableItalic?.selector,
        n.selectorBold = r.variantBold?.selector,
        n.selectorBoldItalic = r.variantBoldItalic?.selector,
        n.selectorItalic = r.variantItalic?.selector
    }
}
function ad(e) {
    return e.ownerType === `team` ? `team` : `project`
}
async function od(e) {
    switch (e) {
    case `google`:
        return (await import(`./google-KZPUDTN2.CwbGlNnS.mjs`))?.default;
    case `fontshare`:
        return (await import(`./fontshare-FXZWFT7E.CL4a_Nl-.mjs`))?.default;
    default:
        throw Error(`Unknown font source: ${e}`)
    }
}
async function sd(e) {
    switch (e) {
    case `google`:
        return (await import(`./google-MX3N35K3.Ke0H8I3F.mjs`))?.default;
    case `fontshare`:
        return (await import(`./fontshare-OQO4BJDD.BikmfH_h.mjs`))?.default;
    case `framer`:
        return (await import(`./framer-font-T5XNAHJ3.BEBeb4Gm.mjs`))?.default;
    default:
        throw Error(`Unknown font source: ${e}`)
    }
}
function cd(e) {
    return e.split(`,`).map(e => e.trim().toLowerCase()).filter(ld)
}
function ld(e) {
    return Lx.includes(e)
}
function ud(e) {
    let t = {
        serif: `serif`,
        sans: `sans-serif`,
        slab: `slab`,
        display: `display`,
        handwritten: `handwriting`,
        script: `handwriting`
    }
      , n = cd(e)[0];
    return n && t[n]
}
function dd(e) {
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
function fd(e, t) {
    return e.reduce( (e, n) => (e[t(n)] = n,
    e), {})
}
async function pd(e, t, n=0) {
    let {family: r, url: i, stretch: a, unicodeRange: o} = e
      , s = e.weight
      , c = e.style || `normal`
      , l = `${r}-${c}-${s}-${i}`;
    if (!$x.has(l) || n > 0) {
        let u = new FontFace(r,`url(${i})`,{
            weight: L(s) ? s : s?.toString(),
            style: c,
            stretch: a,
            unicodeRange: o
        })
          , d = u.load().then( () => (t.fonts.add(u),
        md(r, c, s))).catch(l => {
            if (l.name !== `NetworkError`)
                throw l;
            if (n < Zx)
                return pd(e, t, n + 1);
            throw new Qx(`Font loading failed after ${n} retries due to network error: ${JSON.stringify({
                family: r,
                style: c,
                weight: s,
                url: i,
                stretch: a,
                unicodeRange: o
            })}`)
        }
        );
        $x.set(l, d)
    }
    await $x.get(l)
}
async function md(e, t, n) {
    let r = `${e}-${t}-${n}`;
    if (!eS.has(r)) {
        let i = new Yx.default(e,{
            style: t,
            weight: n
        }).load(null, Xx);
        eS.set(r, i)
    }
    try {
        await eS.get(r)
    } catch {
        throw new Qx(`Failed to check if font is ready (${Xx}ms timeout exceeded): ${JSON.stringify({
            family: e,
            style: t,
            weight: n
        })}`)
    }
}
function hd(e) {
    try {
        if (e === `framer`)
            return gd(nS) ? nS : void 0;
        {
            let t = (async () => {
                switch (e) {
                case `google`:
                    return (await import(`./google-I65GYBZB.B6YL9roY.mjs`)).default;
                case `fontshare`:
                    return (await import(`./fontshare-IXII5VYB.DJPv1Agk.mjs`)).default;
                default:
                    B(e)
                }
            }
            )();
            return gd(t) ? t : void 0
        }
    } catch (e) {
        console.error(e);
        return
    }
}
function gd(e) {
    return R(e) && Object.values(e).every(vd)
}
function _d(e) {
    return R(e) && L(e.tag)
}
function vd(e) {
    return Array.isArray(e) && e.every(_d)
}
function yd(e, t) {
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
function bd(e, t, n, r) {
    let i = O.innerHeight - r
      , a = Math.min(O.innerWidth - n, t)
      , o = i / e;
    return Math.min(a, o)
}
function xd(e, {width: t, height: n}) {
    if (!e.src || !e.srcSet)
        return;
    let r = new O.Image;
    return r.src = e.src,
    r.srcset = e.srcSet,
    r.width = t,
    r.height = n,
    r.decode()
}
function Sd() {
    return document.getElementById(wv) ?? document.getElementById(Cv) ?? document.body
}
function Cd(e, t) {
    return ut(e) ? e : t ?? 0
}
function wd(e) {
    return Cd(e?.paddingTop, e?.padding) + Cd(e?.paddingBottom, e?.padding)
}
function Td(e) {
    return Cd(e?.paddingLeft, e?.padding) + Cd(e?.paddingRight, e?.padding)
}
function Ed(e) {
    let t = S(e);
    return t.current = e,
    E( (...e) => t.current(...e), [])
}
function Dd(e, t) {
    if (!e || !t || !t.src)
        return t;
    let n = new URL(t.src);
    return n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
        ...t,
        sizes: `min(100vw, ${e.maxWidth - Td(e)}px)`,
        srcSet: aS.map(e => {
            let t = new URL(n);
            return t.searchParams.set(`scale-down-to`, e.toString()),
            `${t.toString()} ${e}w`
        }
        ).join(`, `)
    }
}
function Od(e) {
    if (!e)
        return !1;
    for (let t in e) {
        if (!(t in oS))
            continue;
        let n = oS[t]
          , r = e[t];
        if (!ut(n) || !ut(r) || n === r)
            continue;
        return !0
    }
    return !1
}
function kd(e) {
    let t = Be.get(e.current);
    if (!t)
        return !1;
    if (Od(t.projection?.latestValues))
        return !0;
    let n = t.projection?.path;
    if (!n || n.length === 0)
        return !1;
    for (let e of n)
        if (Od(e.latestValues))
            return !0;
    return !1
}
function Ad(e) {
    return s(function({lightbox: t, lightboxClassName: r, onClick: i, ...a}, o) {
        let s = w(oe)
          , u = S(null)
          , d = o ?? u
          , f = S()
          , p = T( () => Dd(t, a.background), [t, a.background])
          , [m,h] = ne(!1)
          , [g,_] = ne()
          , v = E( () => {
            if (t) {
                if (m) {
                    c( () => {
                        h(!0)
                    }
                    );
                    return
                }
                be.read( () => {
                    if (!d.current)
                        return;
                    let e = getComputedStyle(d.current)
                      , n = d.current.getAttribute(`data-border`) === `true` ? getComputedStyle(d.current, `::after`) : void 0
                      , r = d.current.offsetWidth ?? 1
                      , i = d.current.offsetHeight ?? 1
                      , a = kd(d) ? {
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
          , C = Ed( () => {
            if (!t || !p || !p.src)
                return;
            let e = f.current?.[p.src];
            if (e)
                return e;
            let n = bd(b, t.maxWidth, Td(t), wd(t))
              , r = xd(p, {
                width: n,
                height: n * b
            });
            return f.current = {
                [p.src]: r
            },
            r
        }
        )
          , O = E(async e => {
            i?.(e),
            !(m || !t || !p) && (await C(),
            v())
        }
        , [i, v, m, p, t, C])
          , k = E(e => {
            e?.stopPropagation(),
            c( () => {
                h(!1)
            }
            )
        }
        , []);
        yd(m, k),
        D( () => {
            if (!t)
                return;
            let e;
            function n() {
                e = setTimeout( () => {
                    C()
                }
                , 50)
            }
            function r() {
                clearTimeout(e)
            }
            let i = d.current;
            return i?.addEventListener(`mouseenter`, n),
            i?.addEventListener(`mouseleave`, r),
            i?.addEventListener(`pointerdown`, C),
            () => {
                r(),
                i?.removeEventListener(`mouseenter`, n),
                i?.removeEventListener(`mouseleave`, r),
                i?.removeEventListener(`pointerdown`, C)
            }
        }
        , [C, d, t]);
        let ie = l()
          , ae = g?.transition ?? a.transition ?? s.transition
          , se = g?.borderRadius
          , ce = g?.imageRendering
          , le = g?.filter
          , ue = g?.borderTop
          , de = g?.borderRight
          , fe = g?.borderBottom
          , A = g?.borderLeft
          , pe = g?.borderStyle
          , me = g?.borderColor
          , j = !!(ue || de || fe || A || pe || me)
          , M = j ? {
            "--border-top-width": ue,
            "--border-right-width": de,
            "--border-bottom-width": fe,
            "--border-left-width": A,
            "--border-style": pe,
            "--border-color": me
        } : void 0
          , N = {
            [fv]: a.id
        }
          , he = Cd(t?.paddingTop, t?.padding)
          , P = Cd(t?.paddingBottom, t?.padding)
          , F = Cd(t?.paddingLeft, t?.padding)
          , ge = Cd(t?.paddingRight, t?.padding)
          , _e = g?.borderRadius ? {
            ...a.style,
            borderRadius: g.borderRadius
        } : a.style
          , ve = m ? a.layoutDependency ? `${a.layoutDependency}-open` : `open` : a.layoutDependency;
        return ee(y, {
            children: [x(e, {
                ...a,
                style: _e,
                onClick: O,
                layoutId: a.layoutId ?? (t ? ie : void 0),
                ref: d,
                layoutDependency: ve,
                transition: ae
            }), x(re, {
                children: m && t && p && x(te, {
                    children: n(ee(y, {
                        children: [x(Ee.div, {
                            ...N,
                            className: r,
                            onClick: k,
                            style: {
                                position: `fixed`,
                                inset: 0,
                                zIndex: t.zIndex,
                                backgroundColor: t.backdrop ?? `transparent`
                            },
                            transition: ae,
                            initial: sS,
                            animate: cS,
                            exit: sS,
                            onTransitionEnd: () => {
                                c( () => {
                                    _(void 0)
                                }
                                )
                            }
                        }), x(`div`, {
                            ...N,
                            className: r,
                            style: {
                                alignItems: `center`,
                                display: `flex`,
                                inset: `${he}px ${ge}px ${P}px ${F}px`,
                                justifyContent: `center`,
                                pointerEvents: `none`,
                                position: `fixed`,
                                zIndex: t.zIndex
                            },
                            children: x(`div`, {
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
                                children: x(Ee.div, {
                                    layoutId: a.layoutId ?? ie,
                                    transition: ae,
                                    onClick: v,
                                    className: `framer-lightbox-container`,
                                    "data-border": j,
                                    style: {
                                        aspectRatio: b,
                                        borderRadius: se,
                                        bottom: 0,
                                        position: `absolute`,
                                        top: 0,
                                        userSelect: `none`,
                                        imageRendering: ce,
                                        filter: le,
                                        ...M
                                    },
                                    children: x(Ui, {
                                        image: p,
                                        alt: p.alt,
                                        draggable: a.draggable
                                    })
                                })
                            })
                        })]
                    }), Sd())
                }, `backdrop`)
            })]
        })
    })
}
function jd(e, t) {
    return dS && !t ? Document.parseHTMLUnsafe(e) : (uS ??= new DOMParser,
    uS.parseFromString(e, t ?? `text/html`))
}
function Md(e) {
    return e.replaceAll(`&`, `&amp;`).replaceAll(`<`, `&lt;`).replaceAll(`>`, `&gt;`).replaceAll(`"`, `&quot;`).replaceAll(`'`, `&#39;`)
}
function Nd(e, t, n, r) {
    return e.replace(fS, (e, i, a, o, s, c, l) => {
        if (a.toLowerCase() !== `a`)
            return e;
        let u = s || c
          , d = Ts(u.replace(/&amp;/gu, `&`));
        if (!d || !d.target)
            return e;
        let f = t(d.target);
        if (!tu(f) || !tu(n))
            return e;
        let p = f.path
          , m = n.path;
        if (!p || !m)
            return e;
        let h = ` data-framer-page-link-target="${d.target}"`
          , g = ot(f, d.element ?? void 0);
        g && (h += ` data-framer-page-link-element="${d.element}"`);
        let _ = Ds(u);
        if (!_ || L(_))
            return e;
        Ws(n, _, r) && (h += ` data-framer-page-link-current`);
        let v = p
          , y = Object.assign({}, r, d.collectionItem?.pathVariables);
        if (Object.keys(y).length > 0 && (v = v.replace(zv, (e, t) => `` + y[t])),
        d.collectionItem?.pathVariables) {
            let e = new URLSearchParams(d.collectionItem.pathVariables);
            h += ` data-framer-page-link-path-variables="${e}"`
        }
        return v = kt(m, v),
        i + o + `"${Md(v + (g ? `#${g}` : ``))}"` + h + l
    }
    )
}
function Pd(e, t) {
    return e.length === t.length && e.every( (e, n) => e === t[n])
}
function Fd(e) {
    switch (e) {
    case `top`:
        return `flex-start`;
    case `center`:
        return `center`;
    case `bottom`:
        return `flex-end`
    }
}
function Id(e, t, n) {
    let r = S([]);
    Pd(r.current, e) || (r.current = e,
    iS.loadFonts(e).then( ({newlyLoadedFontCount: e}) => {
        !t || !n.current || q.current() !== q.canvas || e > 0 && sa(n.current)
    }
    ))
}
function Ld() {
    return {
        current: null
    }
}
async function Rd(e, t) {
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
function zd(e) {
    return e in gS
}
function Bd(e, t) {
    let n = {};
    for (let r in e) {
        if (!zd(r))
            continue;
        let i = e[r]
          , a = gS[r];
        if (pt(i) || pt(a) || t && r !== `opacity`)
            continue;
        n[r] = [i, a]
    }
    return n
}
function Vd(e, t=`character`, n, r, i) {
    if (r) {
        let t = Ld();
        return n.add(t),
        x(`span`, {
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
                return ee(te, {
                    children: [x(`span`, {
                        style: {
                            whiteSpace: o ? `nowrap` : `unset`
                        },
                        children: e.match(_S)?.map( (e, t) => {
                            let r = Ld();
                            return n.add(r),
                            x(`span`, {
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
                  , o = Ld();
                return n.add(o),
                ee(te, {
                    children: [x(`span`, {
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
function Hd(e) {
    let t = e.type;
    switch (t) {
    case `appear`:
        return e.tokenization ?? `character`;
    default:
        B(t)
    }
}
function Ud(e) {
    let t = [];
    return ut(e.x) && t.push(`translateX(${e.x}px)`),
    ut(e.y) && t.push(`translateY(${e.y}px)`),
    ut(e.scale) && t.push(`scale(${e.scale})`),
    ut(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    ut(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    ut(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    ut(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    ut(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
}
function Wd(e, t, n, r) {
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
                transform: r ? void 0 : Ud(n.effect)
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
                transform: r ? void 0 : Ud(n.effect)
            }
        }
    default:
        B(i)
    }
}
function Gd(e, t, n) {
    let r = Hr( () => new Set)
      , i = Mi()
      , a = n || !i
      , o = Ie()
      , s = S({
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
                    return qd(a, e.effect, r, t, n, i, o, () => {
                        Object.assign(s.current, {
                            isAnimating: !1
                        })
                    }
                    , c),
                    () => c.current?.call(c)
                }
            default:
                B(t)
            }
        }
        switch (c) {
        case `onMount`:
            e();
            return;
        case `onInView`:
            {
                let n = t?.current;
                return n ? xe(n, e, {
                    amount: u ?? 0
                }) : void 0
            }
        case `onScrollTarget`:
            {
                let t = l?.ref.current;
                return t ? xe(t, e, {
                    amount: u ?? 0,
                    root: document,
                    margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0
                }) : void 0
            }
        default:
            B(c)
        }
    }
    , [a, r, n, t, l, u, c]);
    let d = !!e
      , f = e ? Hd(e) : void 0;
    return T( () => ({
        getTokenizer: () => {
            if (r.clear(),
            !d)
                return;
            let {hasMounted: e, hasAnimatedOnce: t, effect: i} = s.current
              , c = Wd(a, n || Kd(e, t, i), s.current.effect, o);
            return {
                text: e => Vd(e, f, r, o, c),
                props: e => {
                    if (i?.tokenization !== `element`)
                        return;
                    let t = Ld();
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
                    qd(f, e.effect, r, t, n, !1, o);
                    break
                }
            default:
                B(t)
            }
        }
    }), [a, d, r, n, f])
}
function Kd(e, t, n) {
    return !(e && n?.trigger === `onMount` || t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
}
async function qd(e=`character`, t, n, r, i=0, a=!1, o, s, c) {
    let l = Bd(t, o)
      , u = new AbortController;
    switch (c && (c.current = () => u.abort()),
    e) {
    case `character`:
    case `element`:
    case `word`:
        {
            let e = await Jd(n, u);
            if (e === null || (ve(e, l, {
                ...r,
                restDelta: .001,
                delay: Ae(r?.delay ?? 0, {
                    startDelay: i
                })
            }).then( () => s?.()),
            !a || !c))
                return;
            c.current = () => {
                let n = o ? {
                    opacity: t.opacity
                } : t;
                ve(e, n, {
                    ...r,
                    restDelta: .001,
                    delay: Ae(r?.delay ?? 0, {
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
                    await Rd(e, u)
            } catch {
                return
            }
            let e;
            if (be.read( () => {
                e = Yd(n),
                e.length !== 0 && be.update( () => {
                    let t = e.map( (e, t) => ve(e, l, {
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
                    ve(e, n, {
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
        B(e)
    }
}
async function Jd(e, t) {
    if (e.size === 0)
        return null;
    let n = [];
    for (let r of e)
        try {
            let e = await Rd(r, t);
            e && n.push(e)
        } catch {
            return null
        }
    return n
}
function Yd(e) {
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
function Xd(e) {
    return e.type === te
}
function Zd(e) {
    return e.type === `br`
}
function Qd(e, t, n, r, a={}, o, s=Xd(e) ? -1 : 0) {
    let c = v.toArray(e.props.children);
    L(n) && (c = c.slice(0, 1));
    let l = !0;
    c = c.map(e => {
        if ((!i(e) || !Zd(e)) && (l = !1),
        i(e))
            return Qd(e, t, n, r, a, o, s + 1);
        let c = L(n) ? n : e;
        return L(c) && o ? o.text(c) : c
    }
    );
    let {"data-preset-tag": u, ...d} = e.props;
    if (L(e.type) || we(e.type)) {
        let n = je(e.type) || e.type
          , i = u || n
          , f = L(i) ? t?.[i] : void 0;
        d.className = Po(`framer-text`, d.className, f),
        o && s === 0 && !l && Object.assign(d, o.props(d.style));
        let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`
          , m = t?.anchor;
        if (p && m) {
            let e = $d(c, a);
            d.id = e;
            let t = Po(`framer-text`, m)
              , n = x(`a`, {
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
    return C(e, d, ...c)
}
function $d(e, t) {
    let n = e.map(ef).join(``)
      , r = _n(n)
      , i = t[r] ?? 0;
    return i > 0 && (r += `-${i}`),
    t[r] = i + 1,
    r
}
function ef(e) {
    return L(e) || ut(e) ? e.toString() : i(e) ? ef(e.props.children) : Array.isArray(e) ? e.map(ef).join(``) : ``
}
function tf(e) {
    try {
        let t = jd(e).getElementsByTagName(`svg`)[0];
        if (!t)
            throw Error(`no svg element found`);
        return t
    } catch {
        return
    }
}
function nf(e, t) {
    let n = rf(t);
    af(e, n)
}
function rf(e) {
    return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``)
}
function af(e, t) {
    sf(e, t),
    Array.from(e.children).forEach(e => {
        af(e, t)
    }
    )
}
function sf(e, t) {
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
function cf(e) {
    if (!e)
        return;
    let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
    if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
        return Math.round(parseFloat(t[1]) * (AS[t[2]] || 1))
}
function lf(e) {
    let t = cf(e.getAttribute(`width`))
      , n = cf(e.getAttribute(`height`));
    if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
        return {
            width: t,
            height: n
        }
}
function uf(e) {
    return e > jS ? `lazy` : void 0
}
function df(e, t, n) {
    let r = mf(t);
    !n?.supportsExplicitInterCodegen && !r.some(e => e.explicitInter === !1) && r.push({
        explicitInter: !1,
        fonts: []
    }),
    Object.assign(e, {
        fonts: r
    })
}
function ff(e) {
    return e ? e.fonts ?? bu() : bu()
}
function pf(e) {
    return e.length === 0 ? [{
        explicitInter: !1,
        fonts: []
    }] : mf(e)
}
function mf(e) {
    let t = {
        explicitInter: !1,
        fonts: []
    }
      , n = [];
    for (let r of e)
        hf(r) ? n.push({
            explicitInter: r.explicitInter,
            fonts: r.fonts.map(gf)
        }) : t.fonts.push(gf(r));
    return t.fonts.length > 0 && n.push(t),
    n
}
function hf(e) {
    return MS in e
}
function gf(e) {
    let t = _f(e) || vf(e) ? e : yf(e);
    return vf(t) ? t : bf(t)
}
function _f(e) {
    return `source`in e
}
function vf(e) {
    return `cssFamilyName`in e
}
function yf(e) {
    let t;
    return t = e.url.startsWith(`https://fonts.gstatic.com/s/`) ? `google` : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`) ? `fontshare` : `custom`,
    {
        ...e,
        source: t
    }
}
function bf(e) {
    let {family: t, ...n} = e
      , r = e.variationAxes && e.source !== `custom` ? `${t} ${kx}` : t;
    return {
        ...n,
        uiFamilyName: t,
        cssFamilyName: r
    }
}
function xf(e, t) {
    let n = `${e}-start`;
    performance.mark(n),
    t();
    let r = `${e}-end`;
    performance.mark(r),
    performance.measure(e, n, r)
}
var Sf, Cf, wf, Tf, Ef, Df, Of, kf, Af, jf, Mf, Nf, Pf, Ff, If, Lf, Rf, G, zf, Bf, Vf, Hf, Uf, Wf, Gf, Kf, qf, Jf, Yf, Xf, Zf, Qf, $f, ep, tp, np, rp, ip, ap, op, sp, cp, lp, up, dp, fp, pp, mp, hp, gp, _p, vp, yp, bp, xp, Sp, Cp, wp, Tp, Ep, Dp, Op, kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp, Bp, Vp, Hp, Up, Wp, Gp, Kp, qp, Jp, Yp, Xp, Zp, Qp, $p, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m, vm, ym, K, bm, xm, Sm, Cm, wm, Tm, Em, Dm, Om, km, q, Am, jm, Mm, Nm, Pm, Fm, Im, Lm, J, Rm, zm, Bm, Vm, Hm, Um, Wm, Gm, Km, qm, Jm, Ym, Y, Xm, Zm, Qm, $m, eh, th, nh, rh, ih, ah, oh, sh, ch, lh, uh, dh, fh, ph, mh, hh, gh, _h, vh, yh, bh, xh, Sh, Ch, wh, Th, Eh, Dh, Oh, kh, Ah, jh, Mh, Nh, Ph, Fh, Ih, Lh, Rh, zh, Bh, Vh, Hh, Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, X, Qh, $h, eg, tg, ng, rg, ig, ag, og, sg, cg, lg, ug, dg, fg, pg, mg, hg, gg, _g, vg, yg, bg, xg, Sg, Cg, wg, Tg, Eg, Dg, Og, kg, Ag, jg, Mg, Ng, Pg, Fg, Ig, Lg, Rg, zg, Bg, Vg, Hg, Ug, Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_, m_, h_, g_, __, v_, y_, b_, x_, S_, C_, w_, T_, E_, D_, O_, k_, A_, j_, M_, N_, P_, F_, I_, L_, R_, z_, B_, V_, H_, U_, W_, G_, K_, q_, J_, Y_, X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv, dv, fv, pv, mv, hv, gv, _v, vv, yv, bv, xv, Sv, Cv, wv, Tv, Ev, Dv, Ov, kv, Av, jv, Mv, Nv, Pv, Fv, Iv, Lv, Rv, zv, Bv, Vv, Hv, Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv, Zv, Qv, $v, ey, ty, ny, ry, iy, ay, oy, sy, cy, ly, uy, dy, fy, py, Z, my, hy, gy, _y, vy, yy, Q, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky, Ay, $, jy, My, Ny, Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb, gb, _b, vb, yb, bb, xb, Sb, Cb, wb, Tb, Eb, Db, Ob, kb, Ab, jb, Mb, Nb, Pb, Fb, Ib, Lb, Rb, zb, Bb, Vb, Hb, Ub, Wb, Gb, Kb, qb, Jb, Yb, Xb, Zb, Qb, $b, ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, _x, vx, yx, bx, xx, Sx, Cx, wx, Tx, Ex, Dx, Ox, kx, Ax, jx, Mx, Nx, Px, Fx, Ix, Lx, Rx, zx, Bx, Vx, Hx, Ux, Wx, Gx, Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS, tS, nS, rS, iS, aS, oS, sS, cS, lS, uS, dS, fS, pS, mS, hS, gS, _S, vS, yS, bS, xS, SS, CS, wS, TS, ES, DS, OS, kS, AS, jS, MS, NS = e(( () => {
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
    I(),
    Se(),
    h(),
    m(),
    g(),
    Sf = fe({
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
    Cf = fe({
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
    wf = fe({
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
    Tf = fe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports, t) {
            t.exports = wf()
        }
    }),
    Ef = fe({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, t) {
            var n = Tf()
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
    Df = fe({
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
    Of = `preload`,
    kf = Object.keys,
    Af = `equals`,
    jf = ( () => d.createContext({}))(),
    Mf = ( () => d.createContext({}))(),
    Nf = [],
    Pf = () => {}
    ,
    Ff = O !== void 0,
    If = ( () => Ff && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(b.userAgent))(),
    Lf = Ff && typeof O.requestIdleCallback == `function`,
    Rf = ( () => Lf ? O.requestIdleCallback : setTimeout)(),
    G = Ff ? O : {
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
    zf = ( () => G.scheduler && `yield`in G.scheduler)(),
    Bf = ( () => G.scheduler && `postTask`in G.scheduler)(),
    Vf = new Set,
    Hf = !If,
    Uf = 2,
    Wf = 46,
    Gf = 47,
    Kf = (e, t) => e.charCodeAt(t),
    qf = (e, t) => e.lastIndexOf(t),
    Jf = (e, t, n) => e.slice(t, n),
    Yf = !1,
    Xf = `/`,
    Zf = e => e === Gf,
    Qf = new Set([`/404.html`, `/404`, `/404/`]),
    $f = RegExp(`:([a-z]\\w*)`, `gi`),
    ep = `framer_variant`,
    tp = d.createContext({
        global: void 0,
        routes: {}
    }),
    np = 10,
    rp = 1e4,
    ip = e => `--view-transition-${e}`,
    ap = {
        circle: {
            makeKeyframe: (e, t) => {
                let {x: n, y: r} = Wt(e);
                return t === `start` ? `clip-path: circle(0 at ${n}px ${r}px);` : `clip-path: circle(${Math.hypot(Math.max(n, O.innerWidth - n), Math.max(r, O.innerHeight - r))}px at ${n}px ${r}px);`
            }
        },
        conic: {
            makeKeyframe: (e, t, n) => {
                let r = 0;
                return (n === `exit` && e.angularDirection === `clockwise` && t === `start` || n === `exit` && e.angularDirection === `counter-clockwise` && t === `end` || n === `enter` && e.angularDirection === `counter-clockwise` && t === `start` || n === `enter` && e.angularDirection === `clockwise` && t === `end`) && (r = e.sweepAngle / 360 * 100),
                `${ip(`conic-offset`)}: ${r}%;`
            }
            ,
            makeStyles: (e, t) => {
                let n = `var(${ip(`conic-offset`)})`
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
        @property ${ip(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `
        },
        inset: {
            makeKeyframe: (e, t) => {
                let {x: n, y: r} = Wt(e)
                  , i = O.innerHeight - r
                  , a = O.innerWidth - n;
                return t === `start` ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);` : `clip-path: inset(0 round 0);`
            }
        },
        blinds: {
            makeKeyframe: (e, t, n) => {
                let[,r] = Ut(e.width)
                  , i = `0${r}`;
                return (t === `start` && n === `exit` || t === `end` && n === `enter`) && (i = e.width),
                `${ip(`blinds-width`)}: ${i};`
            }
            ,
            makeStyles: (e, t) => {
                let n = `var(${ip(`blinds-width`)})`
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
            @property ${ip(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `
        },
        wipe: {
            makeKeyframe: (e, t, n) => {
                let r = t === `start` && n === `exit` || t === `end` && n === `enter` ? 1 : 0;
                return `${ip(`wipe-offset`)}: ${r};`
            }
            ,
            makeStyles: (e, t) => {
                let n = `var(${ip(`wipe-offset`)})`
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
            @property ${ip(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `
        }
    },
    op = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0
    },
    sp = `view-transition-styles`,
    cp = {
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
    lp = () => {}
    ,
    dp = () => {
        up || (up = document.createElement(`div`),
        up.setAttribute(`aria-live`, `assertive`),
        up.setAttribute(`aria-atomic`, `true`),
        up.style.position = `absolute`,
        up.style.transform = `scale(0)`,
        document.body.append(up)),
        setTimeout( () => {
            up.textContent = document.title
        }
        , 60)
    }
    ,
    fp = !0,
    pp = ( () => {
        if (b === void 0)
            return !1;
        let e = b.userAgent
          , t = e.indexOf(`Chrome/`)
          , n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128
    }
    )(),
    mp = ( () => Ff && typeof O.navigation?.back == `function`)(),
    hp = /[^\p{Letter}\p{Number}()]+/gu,
    gp = /^-+|-+$/gu,
    _p = d.createContext(null),
    vp = async () => {}
    ,
    yp = {
        activeLocale: null,
        locales: [],
        setLocale: vp
    },
    bp = ( () => {
        let e = d.createContext(yp);
        return e.displayName = `LocaleInfoContext`,
        e
    }
    )(),
    xp = ( () => {
        let e = d.createContext(`ltr`);
        return e.displayName = `LayoutDirectionContext`,
        e
    }
    )(),
    Sp = `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(`.`),
    Cp = e => {
        var t;
        ((t = e.target)?.closest)?.call(t, `#main`) && (e.stopPropagation(),
        performance.mark(`framer-react-event-handling-prevented`))
    }
    ,
    wp = !1,
    Vp = [xn],
    Bp = [xn],
    zp = [xn],
    Rp = [xn],
    Lp = [xn],
    Ip = [xn],
    Fp = [xn],
    Pp = [xn],
    Np = [xn],
    Mp = [xn],
    jp = [xn],
    Ap = [xn],
    kp = [xn],
    Op = [xn],
    Dp = [xn],
    Ep = [xn],
    Tp = [xn],
    Up = class {
        constructor() {
            F(Hp, 5, this),
            P(this, `render`, {
                markStart: () => this.markRenderStart(),
                markEnd: () => this.markRenderEnd()
            }),
            P(this, `mutationEffects`, {
                measure: () => this.measureMutationEffects()
            }),
            P(this, `useInsertionEffects`, {
                markStart: () => this.markUseInsertionEffectsStart(),
                markRouterStart: () => this.markUseInsertionEffectRouterStart(),
                markEnd: () => this.markUseInsertionEffectsEnd()
            }),
            P(this, `useLayoutEffects`, {
                markStart: () => this.markUseLayoutEffectsStart(),
                markRouterStart: () => this.markRouterUseLayoutEffectStart(),
                markEnd: () => this.markUseLayoutEffectsEnd()
            }),
            P(this, `useEffects`, {
                markStart: () => this.markUseEffectsStart(),
                markRouterStart: () => this.markUseEffectsRouterStart(),
                markEnd: () => this.markUseEffectsEnd(),
                markAreSynchronous: () => this.markUseEffectsAreSynchronous()
            }),
            P(this, `browserRendering`, {
                hasStarted: !1,
                requestAnimationFrame: {
                    markStart: () => this.markRafStart(),
                    markEnd: () => this.markRafEnd()
                },
                layoutStylePaint: {
                    markEnd: () => this.markLayoutStylePaintEnd()
                }
            }),
            P(this, `unattributedHydrationOverhead`, {
                measure: () => this.measureUnattributedHydrationOverhead()
            })
        }
        markRenderStart() {
            performance.mark(`framer-hydration-start`)
        }
        markRenderEnd() {
            performance.mark(`framer-hydration-render-end`),
            Sn(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`)
        }
        markUseInsertionEffectsStart() {
            performance.mark(`framer-hydration-insertion-effects-start`)
        }
        markUseInsertionEffectRouterStart() {
            performance.mark(`framer-hydration-router-insertion-effect`)
        }
        markUseInsertionEffectsEnd() {
            performance.mark(`framer-hydration-insertion-effects-end`),
            Sn(`framer-hydration-insertion-effects`, `framer-hydration-insertion-effects-start`, `framer-hydration-insertion-effects-end`)
        }
        markUseLayoutEffectsStart() {
            performance.mark(`framer-hydration-layout-effects-start`)
        }
        markRouterUseLayoutEffectStart() {
            performance.mark(`framer-hydration-router-layout-effect`)
        }
        markUseLayoutEffectsEnd() {
            performance.mark(`framer-hydration-layout-effects-end`),
            Sn(`framer-hydration-layout-effects`, `framer-hydration-layout-effects-start`, `framer-hydration-layout-effects-end`)
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
            Sn(`framer-hydration-effects`, performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ?? performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name, `framer-hydration-effects-end`)
        }
        markRafStart() {
            this.browserRendering.hasStarted = !0,
            performance.mark(`framer-hydration-browser-render-start`)
        }
        markRafEnd() {
            performance.mark(`framer-hydration-browser-raf-end`),
            Sn(`framer-hydration-raf`, `framer-hydration-browser-render-start`, `framer-hydration-browser-raf-end`)
        }
        markLayoutStylePaintEnd() {
            performance.mark(`framer-hydration-first-paint`),
            Sn(`framer-hydration-time-to-first-paint`, `framer-hydration-start`, `framer-hydration-first-paint`),
            Sn(`framer-hydration-browser-render`, `framer-hydration-browser-raf-end`, `framer-hydration-first-paint`)
        }
        measureMutationEffects() {
            Sn(`framer-hydration-commit`, `framer-hydration-layout-effects-end`, `framer-hydration-effects-start`)
        }
        measureUnattributedHydrationOverhead() {
            Sn(`framer-hydration-uho`, performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ?? performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name, `framer-hydration-browser-render-start`)
        }
    }
    ,
    Hp = me(null),
    A(Hp, 1, `markRenderStart`, Vp, Up),
    A(Hp, 1, `markRenderEnd`, Bp, Up),
    A(Hp, 1, `markUseInsertionEffectsStart`, zp, Up),
    A(Hp, 1, `markUseInsertionEffectRouterStart`, Rp, Up),
    A(Hp, 1, `markUseInsertionEffectsEnd`, Lp, Up),
    A(Hp, 1, `markUseLayoutEffectsStart`, Ip, Up),
    A(Hp, 1, `markRouterUseLayoutEffectStart`, Fp, Up),
    A(Hp, 1, `markUseLayoutEffectsEnd`, Pp, Up),
    A(Hp, 1, `markUseEffectsStart`, Np, Up),
    A(Hp, 1, `markUseEffectsRouterStart`, Mp, Up),
    A(Hp, 1, `markUseEffectsAreSynchronous`, jp, Up),
    A(Hp, 1, `markUseEffectsEnd`, Ap, Up),
    A(Hp, 1, `markRafStart`, kp, Up),
    A(Hp, 1, `markRafEnd`, Op, Up),
    A(Hp, 1, `markLayoutStylePaintEnd`, Dp, Up),
    A(Hp, 1, `measureMutationEffects`, Ep, Up),
    A(Hp, 1, `measureUnattributedHydrationOverhead`, Tp, Up),
    pe(Hp, Up),
    Gp = !1,
    Kp = {
        Start: Dn,
        End: On
    },
    qp = class extends Error {
    }
    ,
    Jp = class extends r {
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
            if (!(this.state.error instanceof qp))
                throw this.state.error;
            let {notFoundPage: e, defaultPageStyle: t} = this.props;
            if (!e)
                throw this.state.error;
            return kn(e, t)
        }
    }
    ,
    Qp = `main`,
    $p = `framerGeneratedPage`,
    em = `<!-- End of headStart -->`,
    tm = `<!-- End of headEnd -->`,
    nm = `<!-- End of bodyStart -->`,
    rm = `<!-- End of bodyEnd -->`,
    im = new Set,
    am = class {
        constructor() {
            P(this, `observers`, new Set),
            P(this, `transactions`, {})
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
    om = ( () => {
        function e(e) {
            return Yn(`Animatable()`, `2.0.0`, `the new animation API (https://www.framer.com/api/animation/)`),
            Xn(e) ? e : new lm(e)
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
        e.get = (e, t) => e == null ? t : Xn(e) ? e.get() : e,
        e.objectToValues = e => {
            if (!e)
                return e;
            let t = {};
            for (let n in e) {
                let r = e[n];
                Xn(r) ? t[n] = r.get() : t[n] = r
            }
            return t
        }
        ,
        e
    }
    )(),
    sm = `onUpdate`,
    cm = `finishTransaction`,
    lm = class {
        constructor(e) {
            this.value = e,
            P(this, `observers`, new am)
        }
        static interpolationFor(e, t) {
            if (Xn(e))
                return Zn(e, t)
        }
        get() {
            return this.value
        }
        set(e, t) {
            let n = this.value;
            Xn(e) && (e = e.get()),
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
            x: $n(e.x, t.x),
            y: $n(e.y, t.y)
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
    )(tr ||= {}),
    um = {
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
    dm = new (( () => Sf().Hsluv)()),
    fm = ( () => {
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
    pm = /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u,
    mm = e => {
        let {r: t, g: n, b: r, a: i} = Tr(e);
        return {
            x: .486570948648216 * t + .265667693169093 * n + .1982172852343625 * r,
            y: .2289745640697487 * t + .6917385218365062 * n + .079286914093745 * r,
            z: 0 * t + .0451133818589026 * n + 1.043944368900976 * r,
            a: i
        }
    }
    ,
    hm = ({x: e=0, y: t=0, z: n=0, a: r=1}) => Dr({
        r: e * 3.2409699419045226 - t * 1.537383177570094 - .4986107602930034 * n,
        g: e * -.9692436362808796 + t * 1.8759675015077204 + .0415550574071756 * n,
        b: e * .0556300796969936 - t * .2039769588889765 + 1.0569715142428784 * n,
        a: r
    }),
    gm = e => {
        let {r: t, g: n, b: r, a: i} = Tr(e);
        return {
            x: .4123907992659593 * t + .357584339383878 * n + .1804807884018343 * r,
            y: .2126390058715102 * t + .715168678767756 * n + .0721923153607337 * r,
            z: .0193308187155918 * t + .119194779794626 * n + .9505321522496607 * r,
            a: i
        }
    }
    ,
    _m = ({x: e=0, y: t=0, z: n=0, a: r=1}) => Dr({
        r: e * 2.4934969119414263 - t * .9313836179191242 - .402710784450717 * n,
        g: e * -.8294889695615749 + t * 1.7626640603183465 + .0236246858419436 * n,
        b: e * .0358458302437845 - t * .0761723892680418 + .9568845240076871 * n,
        a: r
    }),
    vm = class e {
        constructor(e) {
            P(this, `format`, `p3`),
            P(this, `r`),
            P(this, `g`),
            P(this, `b`),
            P(this, `a`),
            this.r = e.r ?? 0,
            this.g = e.g ?? 0,
            this.b = e.b ?? 0,
            this.a = e.a ?? 1
        }
        hsv() {
            return Or(this)
        }
        rgb() {
            return Mr(this)
        }
        hsl() {
            return dr(this.r, this.g, this.b)
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
                return new e(Ar(t));
            case `srgb`:
                return new e(jr(Ar(t)))
            }
        }
        static fromRGB(t) {
            return new e(jr({
                r: Math.round(t.r / 255 * 1e4) / 1e4,
                g: Math.round(t.g / 255 * 1e4) / 1e4,
                b: Math.round(t.b / 255 * 1e4) / 1e4,
                a: t.a ?? 1
            }))
        }
        static fromRGBString(t) {
            let n = K(t);
            if (n)
                return e.fromRGB(n)
        }
        static fromString(t) {
            if (!e.isP3String(t))
                return;
            let n = Cr(t);
            if (n)
                return new e({
                    r: n.r,
                    g: n.g,
                    b: n.b,
                    a: n.a
                })
        }
        static srgbFromValue(t) {
            if (!L(t) || !K.isP3String(t))
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
    ym = new Map,
    K = ( () => {
        function e(n, r, i, a) {
            if (typeof n == `string`) {
                let r = ym.get(n);
                return r || (r = t(n),
                r === void 0 ? {
                    ...e(`black`),
                    isValid: !1
                } : (ym.set(n, r),
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
            let a = Nr(t, n, r, i);
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
        e.isColorString = e => typeof e == `string` ? br(e) !== !1 : !1,
        e.isColorObject = e => R(e) && typeof e.r == `number` && typeof e.g == `number` && typeof e.b == `number` && typeof e.h == `number` && typeof e.s == `number` && typeof e.l == `number` && typeof e.a == `number` && typeof e.roundA == `number` && typeof e.format == `string`,
        e.toString = t => e.toRgbString(t),
        e.toHex = (e, t=!1) => ur(e.r, e.g, e.b, t),
        e.toHexString = (t, n=!1) => `#${e.toHex(t, n)}`,
        e.isP3String = e => typeof e == `string` ? vm.isP3String(e) : !1,
        e.toRgbString = e => e.a === 1 ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)` : `rgba(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `, ` + e.roundA + `)`,
        e.toHusl = e => ({
            ...or(e.r, e.g, e.b),
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
            let t = mr(e.r, e.g, e.b);
            return {
                h: t.h * 360,
                s: t.s,
                v: t.v,
                a: e.a
            }
        }
        ,
        e.toHsvString = e => {
            let t = mr(e.r, e.g, e.b)
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
            let t = ur(e.r, e.g, e.b, !0);
            for (let e of Object.keys(um))
                if (um[e] === t)
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
                    r: nr(i, [0, 1], [t.r, r.r], a),
                    g: nr(i, [0, 1], [t.g, r.g], a),
                    b: nr(i, [0, 1], [t.b, r.b], a),
                    a: nr(i, [0, 1], [t.a, r.a], a)
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
                    h: nr(i, [0, 1], [u, u + f], a),
                    s: nr(i, [0, 1], [c.s, l.s], a),
                    l: nr(i, [0, 1], [c.l, l.l], a),
                    a: nr(i, [0, 1], [t.a, r.a], a)
                };
                s = n.isHSL(o) ? e(p) : e(sr(p.h, p.s, p.l, p.a))
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
        e.rgbToHsl = (e, t, n) => dr(e, t, n),
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
        let r = Ce([0, 255], [0, 1]);
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
    bm = e => e instanceof ce,
    xm = ( () => Cf().EventEmitter)(),
    Sm = class {
        constructor() {
            P(this, `_emitter`, new xm)
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
    Cm = e => {
        setTimeout(e, 1 / 60)
    }
    ,
    wm = ( () => G.requestAnimationFrame || Cm)(),
    Tm = e => wm(e),
    Em = ( () => 1 / 60)(),
    Dm = class extends Sm {
        constructor(e=!1) {
            super(),
            P(this, `_started`, !1),
            P(this, `_frame`, 0),
            P(this, `_frameTasks`, []),
            P(this, `tick`, () => {
                this._started && (Tm(this.tick),
                this.emit(`update`, this._frame, Em),
                this.emit(`render`, this._frame, Em),
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
            Em = e
        }
        static get TimeStep() {
            return Em
        }
        start() {
            return this._started ? this : (this._frame = 0,
            this._started = !0,
            Tm(this.tick),
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
            return this._frame * Em
        }
    }
    ,
    Om = new Dm,
    km = {
        target: G.location.origin === `https://screenshot.framer.invalid` ? `EXPORT` : `PREVIEW`,
        zoom: 1
    },
    q = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => km.target,
        hasRestrictions: () => {
            let e = km.target;
            return e === `CANVAS` || e === `EXPORT`
        }
    },
    Am = e => ({
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
    _e({
        borderTopWidth: Am(`y`),
        borderLeftWidth: Am(`x`),
        borderRightWidth: Am(`x`),
        borderBottomWidth: Am(`y`)
    }),
    jm = d.createContext({
        getLayoutId: e => null,
        persistLayoutIdCache: () => {}
        ,
        top: !1,
        enabled: !0
    }),
    Mm = {
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
    Nm = ( () => ({
        ...Mm,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`
    }))(),
    Pm = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`
    },
    Fm = ( () => ({
        ...Pm,
        fontWeight: 500
    }))(),
    Im = ( () => ({
        ...Pm,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`
    }))(),
    Lm = ( () => {
        function e(e, t) {
            return {
                a: e,
                b: t
            }
        }
        return e.offset = (t, n) => {
            let r = tr.angleFromX(t.a, t.b)
              , i = Jr(r)
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
              , a = tr(n.x - i, n.y + r);
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
        e.distance = e => tr.distance(e.a, e.b),
        e
    }
    )(),
    J = {
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
        divide: (e, t) => J.multiply(e, 1 / t),
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
            let n = Qn(e.x, t)
              , r = Qn(e.y, t)
              , i = Qn(e.width, t)
              , a = Qn(e.height, t);
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
            maxX: J.maxX(e),
            minY: e.y,
            midY: e.y + e.height / 2,
            maxY: J.maxY(e)
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
              , s = tr.distance(t, n)
              , c = tr.distance(t, i);
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
                x: Math.min(...e.map(J.minX)),
                y: Math.min(...e.map(J.minY))
            }
              , n = {
                x: Math.max(...e.map(J.maxX)),
                y: Math.max(...e.map(J.maxY))
            };
            return J.fromTwoPoints(t, n)
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
            x: J.minX(e),
            y: J.minY(e)
        }, {
            x: J.minX(e),
            y: J.maxY(e)
        }, {
            x: J.maxX(e),
            y: J.minY(e)
        }, {
            x: J.maxX(e),
            y: J.maxY(e)
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
        containsPoint: (e, t) => !(t.x < J.minX(e) || t.x > J.maxX(e) || t.y < J.minY(e) || t.y > J.maxY(e) || Number.isNaN(e.x) || Number.isNaN(e.y)),
        containsRect: (e, t) => {
            for (let n of J.points(t))
                if (!J.containsPoint(e, n))
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
        intersects: (e, t) => !(t.x >= J.maxX(e) || J.maxX(t) <= e.x || t.y >= J.maxY(e) || J.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
            let n = J.maxX(e)
              , r = J.maxX(t);
            return n > t.x && r > e.x
        }
        ,
        overlapVertically: (e, t) => {
            let n = J.maxY(e)
              , r = J.maxY(t);
            return n > t.y && r > e.y
        }
        ,
        doesNotIntersect: (e, t) => t.find(t => J.intersects(t, e)) === void 0,
        isEqual: (e, t) => J.equals(e, t),
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
            return t.x < e.x ? n = e.x - t.x : t.x > J.maxX(e) && (n = t.x - J.maxX(e)),
            t.y < e.y ? r = e.y - t.y : t.y > J.maxY(e) && (r = t.y - J.maxY(e)),
            tr.distance({
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
                x: J.minX(e),
                y: J.minY(e)
            }
              , r = {
                x: J.minX(t),
                y: J.minY(t)
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
            let n = J.minX(e)
              , r = J.minY(e)
              , i = J.maxX(e)
              , a = J.maxY(e);
            for (let e of t)
                if (e.x < n || e.x > i || e.y < r || e.y > a)
                    return !0;
            return !1
        }
        ,
        edges: e => {
            let[t,n,r,i] = J.cornerPoints(e);
            return [Lm(t, n), Lm(n, r), Lm(r, i), Lm(i, t)]
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
                    B(r)
                }
                break;
            case `left`:
                i.x = t.x - e.width;
                break;
            case `right`:
                i.x = t.x + t.width;
                break;
            default:
                B(n)
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
                    B(r)
                }
                break;
            case `top`:
                i.y = t.y - e.height;
                break;
            case `bottom`:
                i.y = t.y + t.height;
                break;
            default:
                B(n)
            }
            return i
        }
    },
    Rm = {
        quickfix: e => ((Yr(e.widthType) || Yr(e.heightType)) && (e.aspectRatio = null),
        V(e.aspectRatio) && (e.left && e.right && (e.widthType = 0),
        e.top && e.bottom && (e.heightType = 0),
        e.left && e.right && e.top && e.bottom && (e.bottom = !1),
        e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
        e.left && e.right && ((e.fixedSize || Yr(e.widthType) || V(e.maxWidth)) && (e.right = !1),
        e.widthType = 0),
        e.top && e.bottom && ((e.fixedSize || Yr(e.heightType) || V(e.maxHeight)) && (e.bottom = !1),
        e.heightType = 0),
        e)
    },
    zm = {
        fromProperties: e => {
            let {left: t, right: n, top: r, bottom: i, width: a, height: o, centerX: s, centerY: c, aspectRatio: l, autoSize: u} = e
              , d = Rm.quickfix({
                left: V(t) || Xn(t),
                right: V(n) || Xn(n),
                top: V(r) || Xn(r),
                bottom: V(i) || Xn(i),
                widthType: Xr(a),
                heightType: Xr(o),
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
                a !== void 0 && typeof a != `string` && (f = om.getNumber(a));
            if (d.heightType !== 0 && typeof o == `string`) {
                let e = parseFloat(o);
                o.endsWith(`fr`) ? (h = 3,
                p = e) : o === `auto` ? h = 2 : (h = 1,
                p = parseFloat(o) / 100)
            } else
                o !== void 0 && typeof o != `string` && (p = om.getNumber(o));
            let g = .5
              , _ = .5;
            return s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
                left: d.left ? om.getNumber(t) : null,
                right: d.right ? om.getNumber(n) : null,
                top: d.top ? om.getNumber(r) : null,
                bottom: d.bottom ? om.getNumber(i) : null,
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
              , o = t?.sizing ? om.getNumber(t?.sizing.width) : null
              , s = t?.sizing ? om.getNumber(t?.sizing.height) : null
              , c = ni(e.left, e.right);
            if (o && V(c))
                i = o - c;
            else if (n && Yr(e.widthType))
                i = n.width;
            else if (V(e.width))
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
                    B(e.widthType)
                }
            let l = ni(e.top, e.bottom);
            if (s && V(l))
                a = s - l;
            else if (n && Yr(e.heightType))
                a = n.height;
            else if (V(e.height))
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
                    B(e.heightType)
                }
            return ti(i, a, e, {
                height: s ?? 0,
                width: o ?? 0
            }, t?.viewport)
        }
        ,
        toRect: (e, t=null, n=null, r=!1, i=null) => {
            let a = e.left || 0
              , o = e.top || 0
              , {width: s, height: c} = zm.toSize(e, t, n, i)
              , l = t?.positioning ?? null
              , u = l ? om.getNumber(l.width) : null
              , d = l ? om.getNumber(l.height) : null;
            e.left === null ? u && e.right !== null ? a = u - e.right - s : u && (a = e.centerAnchorX * u - s / 2) : a = e.left,
            e.top === null ? d && e.bottom !== null ? o = d - e.bottom - c : d && (o = e.centerAnchorY * d - c / 2) : o = e.top;
            let f = {
                x: a,
                y: o,
                width: s,
                height: c
            };
            return r ? J.pixelAligned(f) : f
        }
    },
    Bm = 200,
    Vm = 200,
    Hm = d.createContext({
        parentSize: 0
    }),
    Um = e => {
        let t = ui()
          , {parentSize: n, children: r} = e
          , i = d.useMemo( () => ({
            parentSize: n
        }), [fi(n), pi(n)]);
        return t === 1 ? r ? x(y, {
            children: r
        }) : null : x(Hm.Provider, {
            value: i,
            children: r
        })
    }
    ,
    Wm = (e => (e.Boolean = `boolean`,
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
    e))(Wm || {}),
    Km = `flexbox-gap-not-supported`,
    qm = !1,
    Jm = [`[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`, `
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
    Ym = (e => (e.Padding = `--framer-input-padding`,
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
    e))(Ym || {}),
    Y = Ym,
    Xm = `framer-form-input`,
    Zm = `framer-form-input-wrapper`,
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
    )(bi ||= {}),
    bi(`.${Xm}`, {
        padding: bi.variable(Y.Padding),
        background: `transparent`,
        fontFamily: bi.variable(Y.FontFamily),
        fontWeight: bi.variable(Y.FontWeight),
        fontSize: bi.variable(Y.FontSize),
        fontStyle: bi.variable(Y.FontStyle),
        color: bi.variable(Y.FontColor),
        fontFeatureSettings: bi.variable(Y.FontOpenType),
        border: `none`,
        textOverflow: `ellipsis`,
        whiteSpace: `nowrap`,
        overflow: `hidden`,
        width: `100%`,
        height: bi.variable(Y.WrapperHeight, `100%`),
        letterSpacing: bi.variable(Y.FontLetterSpacing),
        textAlign: bi.variable(Y.FontTextAlignment),
        lineHeight: bi.variable(Y.FontLineHeight)
    }),
    bi(`.${Xm}:focus-visible`, {
        outline: `none`
    }),
    `${Y.BorderTopWidth}${Y.BorderRightWidth}${Y.BorderBottomWidth}${Y.BorderLeftWidth}`,
    `${Zm}${Y.BorderRadiusTopLeft}${Y.BorderRadiusTopRight}${Y.BorderRadiusBottomRight}${Y.BorderRadiusBottomLeft}${Y.BorderColor}${Y.BorderTopWidth}${Y.BorderRightWidth}${Y.BorderBottomWidth}${Y.BorderLeftWidth}${Y.BorderStyle}${Y.FocusedTransition}`,
    Qm = 16,
    `${Qm}`,
    bi.variable(Y.Padding),
    `${Qm}`,
    `${Qm}`,
    bi.variable(Y.IconColor),
    $m = {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`
    },
    eh = {
        display: `inline-block`
    },
    th = {
        display: `block`
    },
    nh = ( () => [`
        [data-framer-component-type="RichTextContainer"] {
            display: ${$m.display};
            flex-direction: ${$m.flexDirection};
            justify-content: ${$m.justifyContent};
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
                color: ${xi([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${xi([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${xi([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${eh.display};
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
                color: ${xi([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
            border-radius: var(--framer-link-text-background-radius, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `, `
        a.framer-text,
        span.framer-text[data-nested-link] {
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            a.framer-text span.framer-text:not([data-text-fill]),
            span.framer-text[data-nested-link],
            span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
                color: ${xi([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${xi([`--framer-link-text-background-color`], `initial`)};
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
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text,
            code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-nested-link],
            code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
                color: ${xi([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `, `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            color: ${xi([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${xi([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
        }
    }
    `, `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `, `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            color: ${xi([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
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
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `, `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            span.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${xi([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${xi([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${xi([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${xi([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            span.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${xi([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${xi([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial))));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial))));
        }
    `, `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${xi([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${xi([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `, `
        .framer-image.framer-text {
            display: ${th.display};
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
    rh = `--text-truncation-display-inline-for-safari-16`,
    ih = `--text-truncation-display-none-for-safari-16`,
    ah = `--text-truncation-line-break-for-safari-16`,
    oh = [`div.framer-text`, `p.framer-text`, `h1.framer-text`, `h2.framer-text`, `h3.framer-text`, `h4.framer-text`, `h5.framer-text`, `h6.framer-text`, `ol.framer-text`, `ul.framer-text`, `li.framer-text`, `blockquote.framer-text`, `.framer-text.framer-image`],
    sh = `(background: -webkit-named-image(i))`,
    ch = `(contain-intrinsic-size: inherit)`,
    lh = ( () => [`@supports ${sh} and (not ${ch}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${oh.join(`, `)} { display: var(${rh}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${oh.map(e => `${e}::after`).join(`, `)} { content: var(${ah}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${ih}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${rh}, ${eh.display}) }
    }`])(),
    uh = new Set,
    fh = [`[data-framer-component-type] { position: absolute; }`],
    ph = [`[data-framer-component-type="Text"] { cursor: inherit; }`, `[data-framer-component-text-autosized] * { white-space: pre; }`, `
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
    mh = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
    hh = ( () => [`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`, `.${Km} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`])(),
    gh = ( () => `
.${Km} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
    _h = ( () => `
.${Km}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Km}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
    vh = ( () => `
.${Km}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Km}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
    yh = ( () => [mh, gh, ...hh, _h, vh])(),
    bh = [`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`],
    xh = [`[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`, `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`],
    Sh = [`[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`, `[data-framer-component-type="NativeScroll"] > * { position: relative; }`, `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`, `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`, `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`, `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`, `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`, `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`],
    Ch = [`[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`],
    wh = [`[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`],
    Th = [`[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`],
    Eh = [`.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`],
    Dh = [`[data-framer-cursor="pointer"] { cursor: pointer; }`, `[data-framer-cursor="grab"] { cursor: grab; }`, `[data-framer-cursor="grab"]:active { cursor: grabbing; }`],
    Oh = [`[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`, `[data-framer-generated] * { pointer-events: unset }`],
    kh = [`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`],
    Ah = [`[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`, `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`, `[data-hide-scrollbars="true"] { scrollbar-width: none; }`],
    jh = `--framer-will-change-override`,
    Mh = `--framer-will-change-effect-override`,
    Nh = `(background: -webkit-named-image(i))`,
    Ph = `(grid-template-rows: subgrid)`,
    Fh = e => e ? [`body { ${jh}: none; }`, `@supports ${Nh} and (not ${Ph}) { body { ${jh}: transform; } }`] : [`body { ${jh}: none; ${Mh}: none; }`],
    Ih = e => e ? Oh : [],
    Lh = [`.svgContainer svg { display: block; }`],
    Rh = `--overflow-clip-fallback`,
    zh = ( () => [`@supports (not (overflow: clip)) {
        :root { ${Rh}: hidden; }
    }`])(),
    Bh = e => [...Fh(e), ...fh, ...ph, ...nh, ...Jm, ...yh, ...bh, ...xh, ...Sh, ...wh, ...Ch, ...Th, ...Dh, ...Ih(e), ...Lh, ...kh, ...Ah, ...zh, ...Eh, ...lh],
    Vh = Bh(!1),
    Hh = Bh(!0),
    Uh = !1,
    Wh = `optional`,
    Gh = e => e,
    Kh = /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
    qh = Pi(e => Kh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91),
    Jh = e => () => {
        Jn(e)
    }
    ,
    Yh = () => () => {}
    ,
    Xh = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
            return e.src ?? ``
        },
        useImageElement(e, t, n) {
            let r = X.useImageSource(e, t, n);
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
    Zh = !1,
    X = new Proxy(Xh,{
        get(e, t, n) {
            return Reflect.has(e, t) ? Reflect.get(e, t, n) : [`getLogger`].includes(String(t)) ? Yh() : Jh(Zh ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`)
        }
    }),
    Qh = d.createContext(void 0),
    Qh.displayName = `LibraryFeaturesContext`,
    $h = ( () => Qh.Provider)(),
    eg = () => d.useContext(Qh) ?? {},
    tg = {
        position: `absolute`,
        borderRadius: `inherit`,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    ng = `src`,
    rg = {
        isImageObject: function(e) {
            return !e || typeof e == `string` ? !1 : typeof e == `object` && ng in e
        }
    },
    ig = b === void 0 ? void 0 : b,
    ag = () => typeof document == `object`,
    og = () => ig && /Chrome/u.test(ig.userAgent) && /Google Inc/u.test(ig.vendor) && !ug(),
    sg = () => ig && /Safari/u.test(ig.userAgent) && /Apple Computer/u.test(ig.vendor),
    cg = () => ig && /Firefox\/\d+\.\d+$/u.test(ig.userAgent),
    lg = () => ig && /FramerX/u.test(ig.userAgent),
    ug = () => ig && /Edg\//u.test(ig.userAgent),
    dg = /iPhone|iPod|iPad/iu,
    fg = /MacIntel/iu,
    pg = () => ig ? dg.test(ig.platform) ? !0 : fg.test(ig.platform) && ig.maxTouchPoints && ig.maxTouchPoints > 2 : !1,
    mg = () => gg() === `desktop`,
    hg = () => !1,
    gg = () => ig && /tablet|iPad|Nexus 9/i.test(ig.userAgent) ? `tablet` : ig && /mobi/iu.test(ig.userAgent) ? `phone` : `desktop`,
    _g = og(),
    vg = typeof document < `u` ? f : D,
    yg = d.createContext(!1),
    bg = `data-framer-size-compatibility-wrapper`,
    xg = `0.000001px`,
    Sg = ( () => ` translateZ(${xg})`)(),
    Cg = ( () => lg() || sg() || hg())(),
    wg = ( () => {
        class e extends r {
            constructor() {
                super(...arguments),
                P(this, `layerElement`, null),
                P(this, `setLayerElement`, e => {
                    this.layerElement = e
                }
                )
            }
            static applyWillChange(e, t, n) {
                e.willChangeTransform && (n ? ca(t) : la(t))
            }
            shouldComponentUpdate(e, t) {
                return e._needsMeasure || this.state !== t || !et(this.props, e)
            }
            componentDidUpdate(e) {
                Gh(this.props).clip && Gh(this.props).radius === 0 && Gh(e).radius !== 0 && da(this.layerElement, `overflow`, `hidden`, !1)
            }
        }
        return P(e, `defaultProps`, {}),
        e
    }
    )(),
    Tg = e => {
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
    Eg = {
        hueRotate: (e, t) => K.toHslString(K.hueRotate(K(e), t)),
        setAlpha: (e, t) => K.toRgbString(K.alpha(K(e), t)),
        getAlpha: e => {
            let t = br(e);
            return t ? t.a : 1
        }
        ,
        multiplyAlpha: (e, t) => K.toRgbString(K.multiplyAlpha(K(e), t)),
        toHexValue: e => K.toHex(K(e)).toUpperCase(),
        toHex: e => K.toHexString(K(e)).toUpperCase(),
        toRgb: e => K.toRgb(K(e)),
        toRgbString: e => K.toRgbString(K(e)),
        toHSV: e => K.toHsv(K(e)),
        toHSL: e => K.toHsl(K(e)),
        toHslString: e => K.toHslString(K(e)),
        toHsvString: e => K.toHsvString(K(e)),
        hsvToHSLString: e => K.toHslString(K(cr(e.h, e.s, e.v, e.a))),
        hsvToHexValue: e => K.toHex(K(cr(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: e => K.toHexString(K(cr(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: e => K.toRgbString(K(cr(e.h, e.s, e.v, e.a))),
        hsvToString: e => cr(e.h, e.s, e.v),
        rgbaToString: e => K.toRgbString(K(e)),
        rgbToHexValue: e => K.toHex(K(e)),
        rgbToHexString: e => K.toHexString(K(e)),
        hslToString: e => K.toHslString(K(e)),
        hslToRgbString: e => K.toRgbString(K(e)),
        toColorPickerSquare: e => K.toRgbString(K({
            h: e,
            s: 1,
            l: .5,
            a: 1
        })),
        isValid: e => K(e).isValid !== !1,
        equals: (e, t) => K.isP3String(e) || K.isP3String(t) ? e === t : (typeof e == `string` && (e = K(e)),
        typeof t == `string` && (t = K(t)),
        K.equal(e, t)),
        toHexOrRgbaString: e => {
            let t = K(e);
            return t.a === 1 ? K.toHexString(t) : K.toRgbString(t)
        }
        ,
        toFormatString: e => K.isP3String(e) ? e : K.toRgbString(K(e))
    },
    Dg = /var\(.+\)/u,
    Og = new Map,
    kg = [`stops`],
    Ag = [`start`, `end`],
    jg = [`angle`, `alpha`],
    Mg = {
        isLinearGradient: e => R(e) && jg.every(t => t in e) && (ya(e) || va(e)),
        hash: e => e.angle ^ _a(e, e.alpha),
        toCSS: (e, t, n) => {
            let r = ga(e, e.alpha)
              , i = t === void 0 ? e.angle : t
              , a = r.map(e => `${n?.(e.value) ?? e.value} ${e.position * 100}%`);
            return `linear-gradient(${i}deg, ${a.join(`, `)})`
        }
    },
    Ng = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`],
    Pg = {
        isRadialGradient: e => R(e) && Ng.every(t => t in e) && (ya(e) || va(e)),
        hash: e => e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ _a(e, e.alpha),
        toCSS: (e, t) => {
            let {alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o} = e
              , s = ga(e, n)
              , c = s.map( (e, n) => {
                let r = s[n + 1]
                  , i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
                return `${t?.(e.value) ?? e.value} ${i * 100}%`
            }
            );
            return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`
        }
    },
    Fg = [`onClick`, `onDoubleClick`, `onMouse`, `onMouseDown`, `onMouseUp`, `onTapDown`, `onTap`, `onTapUp`, `onPointer`, `onPointerDown`, `onPointerUp`, `onTouch`, `onTouchDown`, `onTouchUp`],
    Ig = ( () => new Set([...Fg, ...Fg.map(e => `${e}Capture`)]))(),
    Lg = `overflow`,
    Rg = {
        x: 0,
        y: 0,
        width: 200,
        height: 200
    },
    zg = new Set([`width`, `height`, `opacity`, `overflow`, `radius`, `background`, `color`, `x`, `y`, `z`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `scale`, `scaleX`, `scaleY`, `skew`, `skewX`, `skewY`, `originX`, `originY`, `originZ`]),
    Bg = s(function(e, t) {
        let {name: n, center: r, border: i, _border: a, __portal: o} = e
          , {props: s, children: c} = $i(e)
          , l = Aa(s)
          , u = ta(e)
          , d = Ta(e)
          , f = S(null)
          , p = t ?? f
          , m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` ? !0 : void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": Gh(e)[`data-framer-offset-parent-id`]
        };
        !ja(e) && n && (Gh(m)[`data-framer-name`] = n);
        let[h,g] = ka(s)
          , _ = Oa(s)
          , v = gi(_);
        r && !(g && !v && ii(_)) ? (l.transformTemplate ||= ea(r),
        Object.assign(m, Zi(r))) : l.transformTemplate ||= void 0,
        oa(e, p);
        let b = qi(e)
          , C = w(yg)
          , T = Ma(s, _, g, C)
          , E = mi(ee(y, {
            children: [b ? x(Ui, {
                alt: e.alt ?? ``,
                image: b,
                containerSize: g ?? void 0,
                nodeId: e.id && Qi(e.id),
                layoutId: u
            }) : null, c, x(Gi, {
                ...a,
                border: i,
                layoutId: u
            })]
        }), T)
          , D = Yi(e.as)
          , O = Ji(b);
        return e.fitImageDimension && O && (h[e.fitImageDimension] = `auto`,
        h.aspectRatio = O.width / O.height),
        ee(D, {
            ...m,
            ...l,
            layoutId: u,
            style: h,
            ref: p,
            children: [E, o]
        })
    }),
    Vg = s(function(e, t) {
        let {visible: n=!0} = e;
        return n ? x(Bg, {
            ...e,
            ref: t
        }) : null
    }),
    Hg = `__LAYOUT_TREE_ROOT`,
    Ug = d.createContext({
        schedulePromoteTree: () => {}
        ,
        scheduleProjectionDidUpdate: () => {}
        ,
        initLead: () => {}
    }),
    Wg = class extends r {
        constructor() {
            super(...arguments),
            P(this, `shouldAnimate`, !1),
            P(this, `transition`),
            P(this, `lead`),
            P(this, `follow`),
            P(this, `scheduledPromotion`, !1),
            P(this, `scheduledDidUpdate`, !1),
            P(this, `scheduleProjectionDidUpdate`, () => {
                this.scheduledDidUpdate = !0
            }
            ),
            P(this, `schedulePromoteTree`, (e, t, n) => {
                this.follow = this.lead,
                this.shouldAnimate = n,
                this.lead = e,
                this.transition = t,
                this.scheduledPromotion = !0
            }
            ),
            P(this, `initLead`, (e, t) => {
                this.follow = this.lead,
                this.lead = e,
                this.follow && t && (this.follow.layoutMaybeMutated = !0)
            }
            ),
            P(this, `sharedLayoutContext`, {
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
                    preserveFollowOpacity: t.options.layoutId === Hg && !this.follow?.isExiting
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
            return x(Ug.Provider, {
                value: this.sharedLayoutContext,
                children: this.props.children
            })
        }
    }
    ,
    Gg = {
        width: `100%`,
        height: `100%`,
        backgroundColor: `none`
    },
    Kg = class {
        constructor(e) {
            P(this, `sharedIntersectionObserver`),
            P(this, `callbacks`, new WeakMap),
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
    qg = k(new Map),
    Jg = d.createContext(null),
    Yg = class extends r {
        constructor() {
            super(...arguments),
            P(this, `layoutMaybeMutated`, !1),
            P(this, `projectionNodes`, new Map),
            P(this, `rootProjectionNode`),
            P(this, `isExiting`),
            P(this, `shouldPreserveFollowOpacity`, e => e.options.layoutId === Hg && !this.props.isExiting),
            P(this, `switchLayoutGroupContext`, {
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
            return x(ue.Provider, {
                value: this.switchLayoutGroupContext,
                children: this.props.children
            })
        }
    }
    ,
    Xg = e => {
        let t = d.useContext(Ug);
        return x(Yg, {
            ...e,
            sharedLayoutContext: t
        })
    }
    ,
    Zg = d.createContext(!0),
    Qg = k({
        register: () => {}
        ,
        deregister: () => {}
    }),
    $g = ({isCurrent: e, isOverlayed: t, children: n}) => {
        let r = Ua()
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
          , o = S({
            register: i,
            deregister: a
        }).current;
        return D( () => (r.forEach( (n, i) => {
            let a = i(e, t);
            r.set(i, ct(a) ? a : void 0)
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
        x(Qg.Provider, {
            value: o,
            children: n
        })
    }
    ,
    e_ = d.memo(function({isLayeredContainer: e, isCurrent: t, isPrevious: n, isOverlayed: r=!1, visible: i, transitionProps: a, children: o, backdropColor: s, onTapBackdrop: c, backfaceVisible: l, exitBackfaceVisible: u, animation: d, exitAnimation: f, instant: p, initialProps: m, exitProps: h, position: g={
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, withMagicMotion: _, index: v, areMagicMotionLayersPresent: y, id: b, isInitial: C}) {
        let T = Me()
          , E = w(le)
          , {persistLayoutIdCache: O} = w(jm)
          , te = S({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Ka({}, m, a)
        })
          , ne = S(null)
          , k = E !== null && !E.isPresent;
        t && te.current.wasCurrent === void 0 && O(),
        D( () => {
            if (e || !T)
                return;
            if (k) {
                te.current = {
                    ...te.current,
                    wasBeingRemoved: k
                };
                return
            }
            let {wasPrevious: r, wasCurrent: i} = te.current
              , o = t && !i || !k && te.current.wasBeingRemoved && t
              , s = n && !r
              , c = Ka(te.current.origins, m, a)
              , l = te.current.wasReset;
            o || s ? (T.stop(),
            T.start({
                zIndex: v,
                ...c,
                ...a
            }),
            l = !1) : l === !1 && (T.stop(),
            T.set({
                zIndex: v,
                ...t_,
                opacity: 0
            }),
            l = !0),
            te.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c
            }
        }
        , [t, n, k]);
        let re = p ? {
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
        let oe = (qa(a) || qa(m)) && (e || t || n) ? 1200 : void 0
          , se = {
            ...t_,
            ...te.current.origins
        }
          , ce = e ? {
            initial: {
                ...se,
                ...m
            },
            animate: {
                ...se,
                ...a,
                transition: re
            },
            exit: {
                ...se,
                ...h,
                transition: d
            }
        } : {
            animate: T,
            exit: {
                ...se,
                ...h,
                transition: ie
            }
        }
          , ue = !(k || y === !1)
          , de = !!t && ue
          , fe = t && C;
        return ee(Vg, {
            "data-framer-component-type": `NavigationContainerWrapper`,
            width: `100%`,
            height: `100%`,
            style: {
                position: `absolute`,
                transformStyle: `flat`,
                backgroundColor: `transparent`,
                overflow: `hidden`,
                zIndex: e || k || t && _ ? v : void 0,
                pointerEvents: void 0,
                visibility: i ? `visible` : `hidden`,
                perspective: oe
            },
            children: [e && x(Vg, {
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
                onTap: k ? void 0 : c
            }), x(Vg, {
                ...ae,
                ...ce,
                transition: {
                    default: re,
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
                backfaceVisible: k ? u : l,
                "data-framer-component-type": `NavigationContainer`,
                "data-framer-is-current-navigation-target": !!t,
                style: {
                    pointerEvents: void 0,
                    opacity: fe || e || t && _ ? 1 : 0
                },
                "data-is-present": ue ? void 0 : !1,
                ref: ne,
                children: x(Jg.Provider, {
                    value: ne,
                    children: x(Zg.Provider, {
                        value: de,
                        children: x($g, {
                            isCurrent: de,
                            isOverlayed: r,
                            children: x(Xg, {
                                isLead: t,
                                animatesLayout: !!_,
                                transition: re,
                                isExiting: !ue,
                                isOverlayed: r,
                                id: b,
                                children: o
                            })
                        })
                    })
                })
            })]
        })
    }, Ga),
    t_ = {
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
    n_ = class {
        constructor() {
            P(this, `warning`, () => {
                Jn(`The Navigator API is only available inside of Framer: https://www.framer.com/`)
            }
            ),
            P(this, `goBack`, () => this.warning()),
            P(this, `instant`, () => this.warning()),
            P(this, `fade`, () => this.warning()),
            P(this, `push`, () => this.warning()),
            P(this, `modal`, () => this.warning()),
            P(this, `overlay`, () => this.warning()),
            P(this, `flip`, () => this.warning()),
            P(this, `customTransition`, () => this.warning()),
            P(this, `magicMotion`, () => this.warning())
        }
    }
    ,
    r_ = k(new n_),
    i_ = {
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
    a_ = () => ({
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
    o_ = kf(t_),
    s_ = d.createContext(void 0),
    c_ = d.createContext(void 0),
    l_ = ( () => {
        var e, t, n, i, a, o, s;
        return t = class extends r {
            constructor(t) {
                super(t),
                j(this, n),
                j(this, e, null),
                P(this, `state`, a_()),
                j(this, o, e => {
                    if (!this.props.enabled && this.state.history.length > 0)
                        return;
                    let t = Za(this.state, e);
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
                P(this, `goBack`, () => {
                    if (!N(this, n, a).call(this))
                        return he(this, e, globalThis.event?.timeStamp || null),
                        this.state.currentOverlay === -1 ? M(this, o).call(this, {
                            type: `remove`
                        }) : M(this, o).call(this, {
                            type: `removeOverlay`
                        })
                }
                );
                let r = this.props.children;
                if (!r || !qr(r) || !Kr(r))
                    return;
                let i = {
                    ...i_.Instant
                }
                  , s = {
                    type: `add`,
                    key: r.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                    transition: i,
                    component: r
                }
                  , c = Za(this.state, s);
                c && (this.state = c)
            }
            componentDidMount() {
                var e;
                let t = this.state.history[this.state.current];
                t && ((e = this.context) == null || e.call(this, t.key))
            }
            UNSAFE_componentWillReceiveProps(e) {
                let t = e.children;
                if (!qr(t) || !Kr(t))
                    return;
                let r = t.key?.toString();
                r && (this.state.history.length === 0 ? N(this, n, s).call(this, t, i_.Instant) : M(this, o).call(this, {
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
                N(this, n, s).call(this, e, i_.Instant, void 0)
            }
            fade(e, t) {
                N(this, n, s).call(this, e, i_.Fade, t)
            }
            push(e, t) {
                N(this, n, s).call(this, e, Ja(t), t)
            }
            modal(e, t) {
                N(this, n, s).call(this, e, i_.Modal, t)
            }
            overlay(e, t) {
                N(this, n, s).call(this, e, Ya(t), t)
            }
            flip(e, t) {
                N(this, n, s).call(this, e, Xa(t), t)
            }
            magicMotion(e, t) {
                N(this, n, s).call(this, e, i_.MagicMotion, t)
            }
            customTransition(e, t) {
                N(this, n, s).call(this, e, t)
            }
            render() {
                let e = N(this, n, i).call(this, {
                    overCurrentContext: !1
                })
                  , t = N(this, n, i).call(this, {
                    overCurrentContext: !0
                })
                  , r = po(t)
                  , a = t.current > -1
                  , o = this.state.history.length === 1
                  , s = [];
                for (let[t,n] of Object.entries(this.state.containers)) {
                    let r = this.state.containerIndex[t];
                    z(r !== void 0, `Container's index must be registered`);
                    let i = this.state.containerVisualIndex[t];
                    z(i !== void 0, `Container's visual index must be registered`);
                    let c = this.state.containerIsRemoved[t]
                      , l = this.state.history[r]
                      , u = this.state.transitionForContainer[t]
                      , d = r === this.state.current
                      , f = r === this.state.previous
                      , p = d ? !1 : c
                      , m = l?.transition?.withMagicMotion || d && !!this.state.previousTransition;
                    s.push(x(e_, {
                        id: t,
                        index: i,
                        isInitial: o,
                        isCurrent: d,
                        isPrevious: f,
                        isOverlayed: a,
                        visible: d || f,
                        position: l?.transition?.position,
                        instant: Co(r, e),
                        transitionProps: u,
                        animation: So(r, e),
                        backfaceVisible: bo(r, e),
                        exitAnimation: l?.transition?.animation,
                        exitBackfaceVisible: l?.transition?.backfaceVisible,
                        exitProps: l?.transition?.enter,
                        withMagicMotion: m,
                        areMagicMotionLayersPresent: p ? !1 : void 0,
                        children: x(Na, {
                            children: To({
                                component: n,
                                transition: l?.transition
                            })
                        })
                    }, t))
                }
                let c = this.state.overlayStack.map( (e, n) => x(e_, {
                    isLayeredContainer: !0,
                    isCurrent: n === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: yo(n, t),
                    transitionProps: xo(n, t),
                    instant: Co(n, t, !0),
                    animation: So(n, t),
                    exitProps: e.transition.enter,
                    visible: wo(n, t),
                    backdropColor: _o(e.transition),
                    backfaceVisible: vo(n, t),
                    onTapBackdrop: Eo(e.transition, this.goBack),
                    index: this.state.current + 1 + n,
                    children: To({
                        component: e.component,
                        transition: e.transition
                    })
                }, e.key));
                return x(Vg, {
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
                    children: x(r_.Provider, {
                        value: this,
                        children: ee(c_.Provider, {
                            value: o,
                            children: [x(e_, {
                                isLayeredContainer: !0,
                                position: void 0,
                                initialProps: {},
                                instant: !1,
                                transitionProps: mo(r),
                                animation: ho(r),
                                backfaceVisible: go(r),
                                visible: !0,
                                backdropColor: void 0,
                                onTapBackdrop: void 0,
                                index: 0,
                                children: x(zr, {
                                    children: x(Wg, {
                                        children: x(re, {
                                            presenceAffectsLayout: !1,
                                            children: s
                                        })
                                    })
                                })
                            }), x(re, {
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
            return globalThis.event ? M(this, e) === globalThis.event.timeStamp : !1
        }
        ,
        o = new WeakMap,
        s = function(t, r, i) {
            if (N(this, n, a).call(this) || (he(this, e, globalThis.event?.timeStamp || null),
            !t || !qr(t) || !Kr(t)))
                return;
            let s = {
                ...r,
                ...i
            };
            if (s.overCurrentContext)
                return M(this, o).call(this, {
                    type: `addOverlay`,
                    transition: s,
                    component: t
                });
            let c = t.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            M(this, o).call(this, {
                type: `add`,
                key: c,
                transition: s,
                component: t
            })
        }
        ,
        P(t, `defaultProps`, {
            enabled: !0
        }),
        P(t, `contextType`, s_),
        t
    }
    )(),
    u_ = {
        stiffness: 500,
        damping: 50,
        restDelta: 1,
        type: `spring`
    },
    ge(Ef(), 1),
    ge(Ef(), 1),
    ge(Ef(), 1),
    d_ = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    f_ = Symbol(`private`),
    p_ = ( () => {
        function e(e={}, t=!1, n=!0) {
            let r = {
                [f_]: {
                    makeAnimatables: t,
                    observeAnimatables: n,
                    observers: new am,
                    reset() {
                        for (let t in i)
                            if (d_(i, t)) {
                                let n = d_(e, t) ? Gh(e)[t] : void 0;
                                n === void 0 ? delete i[t] : i[t] = n
                            }
                    },
                    transactions: new Set
                }
            }
              , i = new Proxy(r,h_);
            return Object.assign(i, e),
            i
        }
        return e.resetObject = e => e[f_].reset(),
        e.addObserver = (e, t) => e[f_].observers.add(t),
        e
    }
    )(),
    m_ = class {
        constructor() {
            P(this, `set`, (e, t, n, r) => {
                if (t === f_)
                    return !1;
                let i = e[f_], a, o;
                if (Xn(n) ? (a = n,
                o = a.get()) : o = n,
                i.makeAnimatables && typeof n != `function` && typeof n != `object` && !a && (a = om(n)),
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
                  , l = Gh(e)[t];
                if (l !== void 0) {
                    Xn(l) ? (c = l.get() !== o,
                    l.set(o)) : (c = l !== o,
                    Gh(e)[t] = o);
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
            P(this, `get`, (e, t, n) => {
                if (t === f_)
                    return Gh(e)[t];
                let r = Reflect.get(e, t, n);
                return typeof r == `function` ? r.bind(n) : r
            }
            )
        }
        deleteProperty(e, t) {
            let n = Reflect.deleteProperty(e, t);
            return e[f_].observers.notify({
                value: e
            }),
            n
        }
        ownKeys(e) {
            let t = Reflect.ownKeys(e)
              , n = t.indexOf(f_);
            return n !== -1 && t.splice(n, 1),
            t
        }
        getOwnPropertyDescriptor(e, t) {
            if (t !== f_)
                return Reflect.getOwnPropertyDescriptor(e, t)
        }
    }
    ,
    h_ = new m_,
    g_ = ( () => {
        function e(t={}) {
            let n = p_(t, !1, !1);
            return e.addData(n),
            n
        }
        return e._stores = [],
        e.addData = t => {
            e._stores.push(t)
        }
        ,
        e.reset = () => {
            e._stores.forEach(e => p_.resetObject(e))
        }
        ,
        e.addObserver = (e, t) => p_.addObserver(e, t),
        e
    }
    )(),
    __ = {
        update: 0
    },
    v_ = d.createContext({
        update: NaN
    }),
    y_ = class extends r {
        constructor() {
            super(...arguments),
            P(this, `observers`, []),
            P(this, `state`, __),
            P(this, `taskAdded`, !1),
            P(this, `frameTask`, () => {
                this.setState({
                    update: this.state.update + 1
                }),
                this.taskAdded = !1
            }
            ),
            P(this, `observer`, () => {
                this.taskAdded || (this.taskAdded = !0,
                Om.addFrameTask(this.frameTask))
            }
            )
        }
        componentWillUnmount() {
            this.observers.map(e => e()),
            g_.reset()
        }
        render() {
            let {children: e} = this.props;
            return this.observers.map(e => e()),
            this.observers = [],
            g_._stores.forEach(e => {
                let t = g_.addObserver(e, this.observer);
                this.observers.push(t)
            }
            ),
            x(v_.Provider, {
                value: {
                    ...this.state
                },
                children: e
            })
        }
    }
    ,
    ge(Ef(), 1),
    b_ = d.createContext(void 0),
    x_ = d.createContext(void 0),
    S_ = `style[data-framer-css-ssr-minified]`,
    C_ = ( () => {
        if (!ag())
            return new Set;
        let e = document.querySelector(S_)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set
    }
    )(),
    w_ = `data-framer-css-ssr`,
    T_ = (e, t, n) => d.forwardRef( (r, i) => {
        let {sheet: a, cache: o} = d.useContext(x_) ?? {}
          , s = n;
        if (!ag()) {
            ct(t) && (t = t(q.current(), r));
            let e = Array.isArray(t) ? t.join(`
`) : t;
            D_.add(e, s)
        }
        return p( () => {
            s && C_.has(s) || (ct(t) ? t(q.current(), r) : Array.isArray(t) ? t : t.split(`
`)).forEach(e => e && Si(e, a, o))
        }
        , []),
        x(e, {
            ...r,
            ref: i
        })
    }
    ),
    E_ = class {
        constructor() {
            P(this, `styles`, new Set),
            P(this, `componentIds`, new Set)
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
    D_ = new E_,
    O_ = d.createContext(void 0),
    k_ = `ssr-variant`,
    A_ = () => () => {}
    ,
    j_ = () => !0,
    M_ = () => !1,
    N_ = d.forwardRef(function(e, t) {
        let n = Io(t)
          , r = d.useContext(O_)
          , i = d.useSyncExternalStore(A_, M_, j_)
          , a = Hr( () => i ? ag() ? 1 : 2 : 0)
          , o = d.useContext(b_);
        return Pa( () => {
            let {breakpoint: t, overrides: i, children: s, ...c} = e;
            if (!o)
                return console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
                n(s, c);
            let {primaryVariantId: l, variantClassNames: u} = o
              , d = r?.primaryVariantId === l ? r?.variants : void 0;
            switch (a) {
            case 0:
                return n(s, Wo(t, c, i));
            case 1:
                return zo(i, s, c, u, l, d, n, t);
            case 2:
                return zo(i, s, c, u, l, d, Fo, void 0);
            default:
                B(a)
            }
        }
        , [o, r, n, e])
    }),
    P_ = ( () => T_(N_, `.${k_} { display: contents }`, `PropertyOverrides`))(),
    F_ = `default`,
    I_ = new Set([F_]),
    R_ = class {
        constructor() {
            P(this, `entries`, new Map),
            j(this, L_, {})
        }
        set(e, t, n, r) {
            switch (t) {
            case `transformTemplate`:
                z(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, {
                    transformTemplate: n,
                    legacy: !0
                });
                break;
            case `initial`:
            case `animate`:
                z(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, {
                    [t]: n,
                    legacy: !0
                });
                break;
            default:
                break
            }
        }
        setHash(e, t=F_, n) {
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
                return F_;
            let n = M(this, L_)[e];
            if (n)
                return n;
            let r = t?.variantClassNames[e];
            return r ? M(this, L_)[e] = Bo(r) : F_
        }
        setAll(e, t=I_, n, r) {
            if (n === null) {
                for (let n of t)
                    this.setHash(e, this.variantHash(n, r), null);
                return
            }
            let i = ct(n.transformTemplate) ? n.transformTemplate?.call(n, {}, B_) : void 0
              , a = n.__framer__presenceInitial ?? n.initial
              , o = n.__framer__presenceAnimate ?? n.animate
              , s = {
                initial: R(a) ? a : void 0,
                animate: R(o) ? o : void 0,
                transformTemplate: L(i) ? i : void 0
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
    L_ = new WeakMap,
    z_ = new R_,
    B_ = `__Appear_Animation_Transform__`,
    V_ = `data-framer-appear-id`,
    H_ = `data-framer-appear-animation`,
    U_ = {
        willChange: `transform`
    },
    Object.freeze(U_),
    W_ = {},
    Object.freeze(W_),
    G_ = d.createContext({}),
    K_ = d.forwardRef(function({width: e, height: t, y: n, children: r, ...i}, a) {
        let o = d.useMemo( () => ({
            width: e,
            height: t,
            y: n
        }), [e, t, n])
          , s = Io(a);
        return x(G_.Provider, {
            value: o,
            children: s(r, i)
        })
    }),
    q_ = e => d.forwardRef( (t, n) => {
        let r = ta(t);
        return x(e, {
            layoutId: r,
            ...t,
            layoutIdKey: void 0,
            duplicatedFrom: void 0,
            ref: n
        })
    }
    ),
    J_ = !1,
    Y_ = class extends r {
        constructor() {
            super(...arguments),
            P(this, `state`, {
                error: void 0
            })
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        componentDidCatch(e, t) {
            if (!Ko(e))
                return;
            let n = t?.componentStack;
            console.error(`Caught an error in SynchronousSuspenseErrorBoundary:

`, e, `

Component stack:
`, n, `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. If you are the author of this website, update external components and check recently added custom code or code overrides. In case the issue persists, report it to the Framer team via https://www.framer.com/contact/.`);
            let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
            Ot(`published_site_load_recoverable_error`, {
                message: String(e),
                stack: r,
                componentStack: r ? void 0 : n
            })
        }
        render() {
            let e = this.state.error;
            if (e === void 0)
                return this.props.children;
            if (!Ko(e))
                throw e;
            return J_ = !0,
            this.props.children
        }
    }
    ,
    X_ = ( () => O === void 0 ? null : new Promise( () => {}
    ))(),
    Z_ = x(qo, {}),
    Q_ = k(!1),
    Q_.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`,
    $_ = x(Yo, {}),
    ev = class extends r {
        constructor() {
            super(...arguments),
            P(this, `state`, {
                hasError: !1
            })
        }
        static getDerivedStateFromError() {
            return {
                hasError: !0
            }
        }
        componentDidCatch(e, t) {
            Zo(this.props.getErrorMessage(), t?.componentStack),
            Xo(e, t)
        }
        render() {
            let {children: e, fallback: t=$_} = this.props
              , {hasError: n} = this.state;
            return n ? t : e
        }
    }
    ,
    tv = class extends r {
        constructor() {
            super(...arguments),
            P(this, `state`, {
                hasError: !1
            })
        }
        componentDidCatch(e, t) {
            let n = t?.componentStack;
            console.error(`Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`, n),
            this.setState({
                hasError: !0
            }),
            Xo(e, t)
        }
        render() {
            let {children: e} = this.props
              , {hasError: t} = this.state;
            return t ? null : e
        }
    }
    ,
    nv = ( () => d.createContext(void 0))(),
    rv = `code-crash:`,
    iv = q_(d.forwardRef( ({children: e, layoutId: t, as: n, scopeId: r, nodeId: i, isAuthoredByUser: a, isModuleExternal: o, inComponentSlot: s, ...c}, l) => {
        let u = Hr( () => t ? `${t}-container` : void 0)
          , f = Yi(n)
          , p = d.Children.map(e, e => d.isValidElement(e) ? d.cloneElement(e, {
            layoutId: t
        }) : e)
          , m = ds(p, r, i, a, o, s);
        return x(f, {
            layoutId: u,
            ...c,
            ref: l,
            children: x(yg.Provider, {
                value: !0,
                children: x(_p.Provider, {
                    value: i ?? null,
                    children: x(Vr, {
                        enabled: !1,
                        children: x(ie, {
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
    av = d.forwardRef( (e, t) => {
        let {as: n, children: r, scopeId: i, nodeId: a, isAuthoredByUser: o, rendersWithMotion: s, isModuleExternal: c, inComponentSlot: l, ...u} = e
          , d = ds(r, i, a, o, c, l)
          , f = e.as ?? `div`;
        if (e.rendersWithMotion) {
            let n = Yi(f);
            return x(_p.Provider, {
                value: a ?? null,
                children: x(n, {
                    ...u,
                    ref: t,
                    style: e.style,
                    children: d
                })
            })
        } else {
            let n = f
              , {layoutId: r, layoutDependency: i, ...o} = u;
            return x(_p.Provider, {
                value: a ?? null,
                children: x(n, {
                    ...o,
                    ref: t,
                    style: e.style,
                    children: d
                })
            })
        }
    }
    ),
    ov = k({
        onRegisterCursors: () => () => {}
        ,
        registerCursors: () => {}
    }),
    sv = `framer-cursor-none`,
    cv = `framer-pointer-events-none`,
    lv = o(function({children: e}) {
        let t = Hr( () => {
            let e = new Set
              , t = {}
              , n = new Map;
            return {
                onRegisterCursors: n => (n(t),
                e.add(n),
                () => e.delete(n)),
                registerCursors: (r, i) => {
                    n.set(i, Object.keys(r)),
                    t = fs(n, t, r);
                    for (let n of e)
                        n(t);
                    return () => {
                        n.delete(i)
                    }
                }
            }
        }
        )
          , n = Ie();
        return ee(ov.Provider, {
            value: t,
            children: [e, !n && x(pv, {})]
        })
    }),
    uv = ( () => T_(lv, [`.${sv}, .${sv} * { cursor: none !important; }`, `.${cv}, .${cv} * { pointer-events: none !important; }`], `framer-lib-cursors-host`))(),
    dv = ( () => ({
        position: `fixed`,
        top: 0,
        left: 0,
        zIndex: 13,
        pointerEvents: `none`
    }))(),
    fv = `data-framer-portal-id`,
    pv = o(function() {
        let {onRegisterCursors: e} = w(ov)
          , [t,n] = ne(!1)
          , r = Fe(0)
          , i = Fe(0)
          , o = Fe(0)
          , s = S(null)
          , l = S({
            cursors: {},
            cursorHash: void 0
        })
          , u = na();
        f( () => {
            let e = G.matchMedia(`(any-hover: none)`);
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
                ve(o, 1, {
                    type: `tween`,
                    duration: .2
                })
            }
            let c = () => {
                if (ft(l.current.cursors))
                    return;
                let t = gs(e, n);
                t !== l.current.cursorHash && (l.current.cursorHash = t,
                be.update( () => u()))
            }
            ;
            function d(t) {
                if (t.pointerType === `touch`) {
                    ye(c);
                    return
                }
                be.read(c, !0),
                e = t.clientX,
                n = t.clientY,
                be.update(a)
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
                be.update( () => {
                    var e;
                    (e = s.current) == null || e.dispatchEvent(t)
                }
                )
            }
            return G.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            be.read(c, !0),
            () => {
                G.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                ye(c)
            }
        }
        , [o, r, i, u, t]),
        D( () => {
            if (!t)
                return;
            function e() {
                ve(o, 0, {
                    type: `tween`,
                    duration: .2
                })
            }
            return document.addEventListener(`mouseleave`, e),
            G.addEventListener(`blur`, e),
            () => {
                document.removeEventListener(`mouseleave`, e),
                G.removeEventListener(`blur`, e)
            }
        }
        , [o, t]),
        f( () => {
            function t(e) {
                l.current.cursors = e,
                l.current.cursorHash = ft(e) ? null : gs(r.get(), i.get()),
                u()
            }
            let n = e(t);
            return () => {
                n(),
                document.body.classList.toggle(sv, !1)
            }
        }
        , [r, i, e, u]);
        let {cursors: d, cursorHash: p} = l.current
          , m = p ? d[p] : null
          , h = ps(m);
        f( () => {
            t && document.body.classList.toggle(sv, h)
        }
        , [h, t]);
        let g = m?.component
          , _ = m?.transition ?? {
            duration: 0
        }
          , v = Re(r, _)
          , y = Re(i, _)
          , b = ze( () => v.get() + (m?.offset?.x ?? 0))
          , C = ze( () => y.get() + (m?.offset?.y ?? 0))
          , T = m?.alignment
          , ee = m?.placement
          , O = E( (e, t) => `translate(${hs(ee, T)}) ${t}`, [T, ee]);
        return !t || !m || !g ? null : x(a, {
            children: x(g, {
                transformTemplate: O,
                style: {
                    ...dv,
                    x: b,
                    y: C,
                    opacity: o
                },
                globalTapTarget: !0,
                variant: m?.variant,
                ref: s,
                className: cv
            })
        })
    }),
    mv = `webPageId`,
    hv = class {
        constructor() {
            P(this, `collectedLinks`, new Map),
            P(this, `nestingInfo`, new Map)
        }
        clear() {
            this.collectedLinks.clear(),
            this.nestingInfo.clear()
        }
        getLinks() {
            let e = new Map;
            for (let[t,n] of this.nestingInfo) {
                let r = this.collectedLinks.get(t);
                z(r, `Outer link not found: ${t}`);
                let i = Array.from(n).map(e => {
                    let t = this.collectedLinks.get(e);
                    return z(t, `Inner link not found: ${e}`),
                    t
                }
                );
                e.set(r, i)
            }
            return e
        }
        collectNestedLink(e, t) {
            if (Ff && !hg() || !e.nodeId || !t.nodeId)
                return;
            this.collectedLinks.set(ys(e), e),
            this.collectedLinks.set(ys(t), t);
            let n = this.nestingInfo.get(ys(e)) ?? new Set;
            n.add(ys(t)),
            this.nestingInfo.set(ys(e), n)
        }
    }
    ,
    gv = new hv,
    _v = `element`,
    vv = `collection`,
    yv = `collectionItemId`,
    bv = `pathVariables`,
    xv = `framer/page-link,`,
    Sv = k(void 0),
    Cv = `overlay`,
    wv = `template-overlay`,
    Tv = class extends r {
        constructor() {
            super(...arguments),
            P(this, `state`, {
                error: void 0
            }),
            P(this, `message`, `Made UI non-interactive due to an error`),
            P(this, `messageFatal`, `Fatal error`),
            P(this, `messageReport`, `If you are the author of this website, please report this issue to the Framer team via https://www.framer.com/contact/`)
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            }
        }
        componentDidCatch(e) {
            if (O.__framer_hadFatalError = !0,
            `cause`in e && (e = e.cause),
            console.error(`${If ? this.message : this.messageFatal}. ${this.messageReport}. Error:

`, e),
            Math.random() > .5)
                return;
            let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
            Ot(`published_site_load_error`, {
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
              , r = If && document.getElementById(`main`)?.innerHTML || ``;
            return x(`div`, {
                style: {
                    display: `contents`
                },
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: {
                    __html: `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${this.messageReport}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` + r
                }
            })
        }
    }
    ,
    Ev = {
        Pending: `pending`,
        Fulfilled: `fulfilled`,
        Rejected: `rejected`
    },
    Dv = class e {
        constructor(e) {
            this.resolver = e,
            P(this, `promiseState`, Ev.Pending),
            P(this, `preloadPromise`),
            P(this, `value`),
            P(this, `reason`),
            P(this, `read`, () => {
                if (this.promiseState === Ev.Fulfilled)
                    return this.value;
                throw this.promiseState === Ev.Rejected ? this.reason : Error(`Need to call preload() before read()`)
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
            return this.promiseState === Ev.Fulfilled ? Promise.resolve(this.value).then(e, t) : this.promiseState === Ev.Rejected ? Promise.reject(this.reason).then(e, t) : this.readAsync().then(e, t)
        }
        preload() {
            if (this.promiseState !== Ev.Pending)
                return;
            if (this.preloadPromise)
                return this.preloadPromise;
            let e = e => {
                this.promiseState = Ev.Fulfilled,
                this.value = e
            }
            , t = e => {
                this.promiseState = Ev.Rejected,
                this.reason = e
            }
            , n;
            try {
                n = this.resolver()
            } catch (e) {
                t(e);
                return
            }
            if (!yt(n)) {
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
    Ov = 500,
    kv = .9,
    Av = 1.7,
    jv = 4,
    Mv = 1 / 0,
    Nv = new WeakMap,
    Pv = new Set,
    Fv = new Map,
    Iv = !Hf || typeof IntersectionObserver > `u` ? null : Ls(),
    Lv = Symbol(`noLocale`),
    Rv = new Map,
    zv = /:([a-z]\w*)/gi,
    Bv = k(void 0),
    Vv = Is(s(function({children: e, href: t, openInNewTab: n, smoothScroll: r, clickTrackingId: a, relValues: o, preserveParams: s, nodeId: c, scopeId: l, motionChild: u, ...d}, f) {
        let p = rt()
          , m = at()
          , h = Us()
          , {activeLocale: g} = vn()
          , _ = Js({
            nodeId: c,
            clickTrackingId: a,
            router: p,
            href: t,
            activeLocale: g
        })
          , v = T( () => {
            if (!t)
                return {};
            let e = vs(t) ? t : Ds(t);
            if (!e)
                return {};
            if (L(e))
                return Qs(e, p, m, {
                    openInNewTab: n,
                    trackLinkClick: _,
                    rel: o?.join(` `),
                    preserveParams: s,
                    smoothScroll: r
                }, g?.id, h);
            let {routeId: i, href: a, elementId: c, pathVariables: l} = Bs(p, m, e, g, h)
              , u = Ks(n, !0);
            return {
                href: a,
                target: u,
                onClick: Zs(p, i, a, _, c, l, r),
                navigate: () => Xs(p, i, c, l, r),
                "data-framer-page-link-current": m && Ws(m, e, h) || void 0
            }
        }
        , [t, p, g, h, n, m, r, _, o, s])
          , y = i(e) && `ref`in e
          , b = Ra(y ? e.ref : void 0);
        za(b, e => {
            if (e === null)
                return;
            let n = vs(t) ? t : Ds(t);
            if (!n)
                return;
            let r = Cs(n, p, m);
            if (r)
                return Iv?.(r, e)
        }
        , [m, t, p]);
        let x = e
          , {navigate: S, ...C} = v
          , w = !!S;
        return x = Io(f).cloneAsArray(x, e => $s(e, {
            ...d,
            ...tc(C, u, w)
        }, b)),
        x = ks(x, l, c, t, v, b),
        x
    })),
    Hv = d.createContext(void 0),
    Uv = `__framer_force_showing_editorbar_since`,
    Wv = class extends r {
        constructor() {
            super(...arguments),
            P(this, `state`, {
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
    Gv = () => {
        try {
            return !!localStorage[Uv]
        } catch {
            return !1
        }
    }
    ,
    Kv = () => !Gv(),
    qv = () => !1,
    Jv = () => () => {}
    ,
    Yv = null,
    Xv = null,
    Rf(oc),
    Zv = (e, t, n, r, i, a) => {
        let o = w(Hv)
          , s = S()
          , c = S(!0);
        return D( () => {
            function l() {
                (!Yv || !Xv) && oc();
                let s = n ? new URL(G.location.origin + n) : G.location
                  , c = {
                    version: Uf,
                    abTestId: e?.abTestId,
                    framerSiteId: o ?? null,
                    webPageId: e?.abTestingVariantId ?? t,
                    routePath: e?.path || `/`,
                    collectionItemId: null,
                    framerLocale: a?.code || null,
                    referrer: null,
                    url: s.href,
                    hostname: s.hostname,
                    pathname: s.pathname,
                    search: s.search || null,
                    hash: s.hash || null,
                    timezone: Yv,
                    locale: Xv
                };
                return e?.collectionId && i && r ? (async () => {
                    let t = null
                      , n = e.collectionId && await i[e.collectionId]?.call(i)
                      , [o] = Object.values(r);
                    return n && typeof o == `string` && (t = await n.getRecordIdBySlug(o, a || void 0) ?? null),
                    {
                        ...c,
                        collectionItemId: t
                    }
                }
                )() : c
            }
            (async () => {
                let e = s.current = l()
                  , t = e instanceof Promise ? await e : e;
                s.current = t,
                c.current ? c.current = !1 : Ot(`published_site_pageview`, t, `eager`)
            }
            )();
            let u = async e => {
                if (e.persisted) {
                    let e = s.current = l()
                      , t = e instanceof Promise ? await e : e;
                    s.current = t,
                    Ot(`published_site_pageview`, t, `eager`)
                }
            }
            ;
            return O.addEventListener(`pageshow`, u),
            () => {
                O.removeEventListener(`pageshow`, u)
            }
        }
        , [e, t, n, r, i, a, o]),
        s
    }
    ,
    Qv = `default`,
    $v = {
        status: `loading`,
        data: void 0
    },
    ey = 5e3,
    ty = () => {}
    ,
    cy = class e {
        constructor() {
            P(this, `responseValues`, new Map),
            j(this, ny, new Map),
            j(this, ry, new Set),
            j(this, iy, new Map),
            j(this, ay, new Map),
            j(this, oy, new Map),
            j(this, sy, new Map),
            P(this, `persistCache`, No( () => {
                let t = {};
                for (let[e,n] of this.responseValues) {
                    if (!n || n.status !== `success`)
                        continue;
                    let r = M(this, iy).get(e);
                    if (!r || r === 0)
                        continue;
                    let i = M(this, ay).get(e);
                    if (!i || i && Sc(i, r))
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
            for (let[e,t] of M(this, sy))
                clearInterval(t),
                M(this, sy).delete(e)
        }
        stopQueryRefetching(e) {
            let t = vc(e)
              , n = M(this, sy).get(t);
            n && (clearInterval(n),
            M(this, sy).delete(t))
        }
        startQueryRefetching(e) {
            let t = vc(e)
              , n = M(this, sy).get(t)
              , r = M(this, iy).get(t);
            if (n || !r)
                return;
            let i = G.setInterval( () => {
                if (document.visibilityState === `hidden`)
                    return;
                let n = M(this, ay).get(t);
                !r || !n || this.fetchWithCache({
                    ...e,
                    cacheDuration: r
                })
            }
            , r);
            M(this, sy).set(t, i)
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
                    if (Sc(r, i))
                        continue;
                    M(this, ay).set(e, r),
                    M(this, iy).set(e, i),
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
            let n = M(this, ny).get(e);
            if (n)
                for (let e of n)
                    e()
        }
        async prefetch(e) {
            if (!ag() || !Ss(e.url, !1))
                return;
            let t = vc(e);
            M(this, ry).add(t),
            await this.fetchWithCache(e);
            let n = this.getValue(t);
            if (!n || n.status === `loading`)
                throw Error(`Unexpected result status for prefetch`);
            let r = M(this, ny).get(t);
            for (let e of r ?? [])
                e();
            let i = xc(n, e);
            return e.resultOutputType === `image` && L(i) && await hc(i).catch(ty),
            i
        }
        async fetchWithCache(e) {
            if (!ag())
                return;
            let t = vc(e)
              , n = M(this, oy).get(t);
            if (n)
                return n;
            let r = M(this, ay).get(t)
              , i = r && Sc(r, e.cacheDuration);
            if (this.responseValues.has(t) && !i)
                return;
            this.responseValues.get(t) || this.setResponseValue(t, $v);
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
                    M(this, ay).set(t, Date.now())
                } catch (e) {
                    this.setResponseValue(t, {
                        status: `error`,
                        error: e,
                        data: void 0
                    })
                }
            }
            )();
            return M(this, oy).set(t, a),
            a.finally( () => {
                M(this, oy).delete(t)
            }
            ),
            a
        }
        getValue(e, t=!1) {
            if (!(t && !M(this, ry).has(e)))
                return this.responseValues.get(e)
        }
        subscribe(e, t, n=!1) {
            let {url: r, cacheDuration: i} = e;
            if (!Ss(r, !1))
                return ty;
            let a = vc(e)
              , o = M(this, iy).get(a);
            (!o || i < o) && M(this, iy).set(a, i),
            n || (this.startQueryRefetching(e),
            this.fetchWithCache(e));
            let s = M(this, ny).get(a) ?? new Set;
            return s.add(t),
            M(this, ny).set(a, s),
            () => {
                let n = M(this, ny).get(a);
                n && (n.delete(t),
                n.size === 0 && M(this, ny).delete(a),
                M(this, ny).size === 0 && this.stopQueryRefetching(e))
            }
        }
    }
    ,
    ny = new WeakMap,
    ry = new WeakMap,
    iy = new WeakMap,
    ay = new WeakMap,
    oy = new WeakMap,
    sy = new WeakMap,
    P(cy, `cacheKey`, `framer-fetch-client-cache`),
    ly = cy,
    uy = k(void 0),
    dy = k(!0),
    fy = ({children: e, client: t}) => {
        let[n] = ne( () => t ?? new ly)
          , [r,i] = ne(!0);
        return D( () => (n.hydrateCache(),
        c( () => {
            i(!1)
        }
        ),
        () => n.unmount()), [n]),
        x(dy.Provider, {
            value: r,
            children: x(uy.Provider, {
                value: n,
                children: e
            })
        })
    }
    ,
    se.WillChange = de,
    py = Is(s(function({links: e, children: t, ...n}, r) {
        let i = rt()
          , {activeLocale: a} = vn()
          , o = Io(r)
          , s = []
          , c = e.map(e => {
            if (e)
                return L(e) ? rc(e, i, void 0, void 0, a) : rc(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => {
                    function n(e) {
                        let t = {};
                        for (let n in e) {
                            let r = e[n];
                            z(i.collectionUtils, `collectionUtils should be defined`),
                            z(r, `unresolvedSlug be defined`);
                            let o = Rs(r, i.collectionUtils, a)
                              , c = o.preload();
                            if (c)
                                s.push(c);
                            else {
                                let e = o.read();
                                e && (t[n] = e)
                            }
                        }
                        return t
                    }
                    return {
                        path: n(e),
                        hash: n(t)
                    }
                }
                )
        }
        );
        if (s.length > 0)
            throw Promise.allSettled(s);
        let l = t(c);
        return o(l, n)
    })),
    Z = {
        cast(e, t) {
            switch (t.type) {
            case `array`:
                return Lc(e, t);
            case `boolean`:
                return zc(e);
            case `color`:
                return Hc(e);
            case `date`:
                return Wc(e);
            case `enum`:
                return Kc(e);
            case `file`:
                return Jc(e);
            case `link`:
                return Xc(e);
            case `number`:
                return Qc(e);
            case `object`:
                return tl(e, t);
            case `responsiveimage`:
                return rl(e);
            case `richtext`:
                return al(e);
            case `string`:
                return ll(e);
            case `vectorsetitem`:
                return sl(e);
            case `unknown`:
                return e;
            default:
                B(t, `Unsupported cast`)
            }
        },
        parse(e) {
            return lt(e) ? {
                type: `boolean`,
                value: e
            } : gt(e) ? {
                type: `date`,
                value: e.toISOString()
            } : ut(e) ? {
                type: `number`,
                value: e
            } : L(e) ? {
                type: `string`,
                value: e
            } : dt(e) ? {
                type: `array`,
                value: e.map(Z.parse)
            } : null
        },
        equal(e, t, n) {
            return e?.type === t?.type ? dl(e, t, n) === 0 : !1
        },
        lessThan(e, t, n) {
            return e?.type === t?.type ? dl(e, t, n) < 0 : !1
        },
        lessThanOrEqual(e, t, n) {
            return e?.type === t?.type ? dl(e, t, n) <= 0 : !1
        },
        greaterThan(e, t, n) {
            return e?.type === t?.type ? dl(e, t, n) > 0 : !1
        },
        greaterThanOrEqual(e, t, n) {
            return e?.type === t?.type ? dl(e, t, n) >= 0 : !1
        },
        in(e, t, n) {
            return t?.type === `array` ? t.value.some(t => Z.equal(t, e, n)) : !1
        },
        indexOf(e, t, n) {
            return e?.type === `array` ? e.value.findIndex(e => Z.equal(e, t, n)) : -1
        },
        contains(e, t, n) {
            let r = ul(e)
              , i = ul(t);
            return mt(r) || mt(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(),
            i = i.toLowerCase()),
            r.includes(i))
        },
        startsWith(e, t, n) {
            let r = ul(e)
              , i = ul(t);
            return mt(r) || mt(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(),
            i = i.toLowerCase()),
            r.startsWith(i))
        },
        endsWith(e, t, n) {
            let r = ul(e)
              , i = ul(t);
            return mt(r) || mt(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(),
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
                return `[${e.value.map(Z.stringify).join(`, `)}]`;
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
                return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
                return `Object`;
            default:
                B(e)
            }
        }
    },
    my = {
        type: `unknown`,
        isNullable: !0
    },
    hy = class {
        constructor(e, t) {
            this.collection = e,
            this.locale = t,
            P(this, `schema`),
            P(this, `indexes`, []);
            let n = ji(e);
            z(n, `Collection does not have properties`);
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
                z(n !== `array`, `Array properties are not supported`),
                z(n !== `object`, `Object properties are not supported`),
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
                if (ht(i))
                    continue;
                let a = this.schema[t];
                if (pt(a))
                    continue;
                if (z(a.type !== `unknown`, `Invalid definition type`),
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
              , r = (await fl(this.collection, this.locale))[t]?.[n];
            return Dv.is(r) ? r.readMaybeAsync() : r
        }
        async scanItems() {
            return (await fl(this.collection, this.locale)).map( (e, t) => {
                let n = String(t);
                return this.getDatabaseItem(e, n)
            }
            )
        }
        async resolveItems(e) {
            let t = await fl(this.collection, this.locale);
            return e.map(e => {
                let n = t[Number(e)];
                return z(n, `Can't find collection item`),
                this.getDatabaseItem(n, e)
            }
            )
        }
        compareItems(e, t) {
            return Number(e.pointer) - Number(t.pointer)
        }
    }
    ,
    gy = new WeakMap,
    _y = `$r_`,
    vy = new Map,
    yy = 1e3,
    Q = class e {
        constructor(e) {
            this.network = e
        }
        static estimate(t, n) {
            let r = hl()
              , i = gl()
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
    by = class {
        constructor(e, t) {
            this.id = e,
            this.relational = t,
            P(this, `nodes`, []),
            P(this, `winners`, new Map)
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
            let r = new xy;
            return this.winners.set(t, r),
            r
        }
        getOptimized(e) {
            let t = this.getWinner(e);
            z(t.node, `Group not optimized`);
            let n = t.node.getOptimized(e);
            return n.setGroup(this),
            n
        }
    }
    ,
    xy = class {
        constructor() {
            P(this, `node`),
            P(this, `cost`, new Q(1 / 0)),
            P(this, `nodes`, [])
        }
        update(e, t) {
            this.nodes.push(e),
            Q.compare(t, this.cost) < 0 && (this.node = e,
            this.cost = t)
        }
    }
    ,
    Sy = class {
        constructor(e) {
            this.isSynchronous = e
        }
    }
    ,
    Cy = class extends Sy {
        constructor() {
            super(...arguments),
            P(this, `group`)
        }
        getGroup() {
            return z(this.group, `Node must be in a group`),
            this.group
        }
        setGroup(e) {
            z(!this.group, `Node is already in a group`),
            this.group = e
        }
        evaluateSync() {
            let e = this.evaluate(void 0);
            return Tc(e)
        }
        evaluateAsync() {
            let e = this.evaluate(void 0);
            return Ec(e)
        }
    }
    ,
    wy = class {
        constructor(e, t) {
            P(this, `collections`),
            P(this, `richTextCache`, new WeakMap),
            P(this, `vectorSetItemCache`, new WeakMap),
            this.collections = wl(e, t)
        }
        *resolveArrayValue(e) {
            return yield*Oc(e.value.map(e => this.resolveValue(e)))
        }
        *resolveObjectValue(e) {
            let t = {};
            for (let n in e.value) {
                let r = e.value[n];
                t[n] = this.resolveValue(r)
            }
            return yield*U(t)
        }
        loadRichTextValue(e) {
            let t = e.value;
            z(xl(t), `Rich text pointer must be wrapped`);
            let n = this.collections.get(t.collectionId);
            z(n, `Can't find collection for rich text pointer`);
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
            return vt(t) ? yield t : t
        }
        loadVectorSetItemValue(e) {
            let t = e.value;
            z(Cl(t), `Vector set item pointer must be wrapped`);
            let n = this.collections.get(t.collectionId);
            z(n, `Can't find collection for vector set item pointer`),
            z(n.resolveVectorSetItem, `Can't resolve vector set item pointer`);
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
            return vt(t) ? yield t : t
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
    Ty = `index`,
    Ey = class extends Set {
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
            W(this.name, ...e)
        }
    }
    ,
    Dy = class {
        constructor(e, t, n) {
            this.id = e,
            this.name = t,
            this.data = n,
            P(this, `indexes`, new ky),
            P(this, `fields`, new $)
        }
    }
    ,
    Oy = class {
        constructor(e, t, n, r, i, a) {
            for (let o in this.id = e,
            this.data = t,
            this.collection = n,
            this.lookupNodes = r,
            this.constraint = i,
            this.ordering = a,
            P(this, `resolvedFields`, new $),
            t.schema)
                for (let e of n.fields)
                    e.name === o && this.resolvedFields.add(e)
        }
    }
    ,
    ky = class extends Ey {
        constructor() {
            super(...arguments),
            P(this, `name`, `Indexes`)
        }
    }
    ,
    Ay = class {
        constructor(e, t, n, r) {
            this.id = e,
            this.name = t,
            this.definition = n,
            this.collection = r
        }
        getValue(e) {
            z(this.name, `Can only get value of field with a name`);
            let t = e.data[this.name];
            switch (t?.type) {
            case `richtext`:
                return z(this.collection, `Rich text field must have a collection`),
                {
                    type: `richtext`,
                    value: bl(this.collection.data, t.value)
                };
            case `vectorsetitem`:
                return z(this.collection, `Vector set item field must have a collection`),
                {
                    type: `vectorsetitem`,
                    value: Sl(this.collection.data, t.value)
                }
            }
            return t ?? null
        }
    }
    ,
    $ = class extends Ey {
        constructor() {
            super(...arguments),
            P(this, `name`, `Fields`)
        }
    }
    ,
    jy = class {
        constructor(e, t=`asc`) {
            this.field = e,
            this.direction = t
        }
        getHash() {
            return W(`OrderingField`, this.field.id, this.direction)
        }
    }
    ,
    My = class {
        constructor(e) {
            P(this, `fields`, []),
            e && this.merge(e)
        }
        get length() {
            return this.fields.length
        }
        getHash() {
            return W(`Ordering`, ...this.fields)
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
                if (e.has(t) || t.name === Ty)
                    continue;
                return !1
            }
            return !0
        }
    }
    ,
    Ny = class {
        constructor(e, t) {
            this.ordering = e,
            this.resolvedFields = t
        }
        getHash() {
            return W(`RequiredProps`, this.ordering, this.resolvedFields)
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
    Py = class e {
        constructor(e) {
            this.parent = e,
            P(this, `node`),
            P(this, `ordering`),
            P(this, `fields`, [])
        }
        takeNode() {
            let e = this.node;
            return z(e, `Node is missing`),
            this.node = void 0,
            e
        }
        setNode(e) {
            z(!this.node, `Node already set`),
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
            return this.ordering ?? new My
        }
        getRequiredResolvedFields() {
            let e = new $;
            for (let {field: t} of this.fields)
                t.collection && e.add(t);
            return e
        }
        getRequiredProps() {
            let e = this.getRequiredOrdering()
              , t = this.getRequiredResolvedFields();
            return new Ny(e,t)
        }
        getNamedFields() {
            let e = {};
            for (let {name: t, field: n} of this.fields)
                e[t] = n;
            return e
        }
        getSingleField() {
            z(this.fields.length === 1, `Scope must contain exactly one field`);
            let e = this.fields[0];
            return z(e, `Field must exist`),
            e.field
        }
    }
    ,
    Fy = class {
        constructor() {
            P(this, `pointers`, new Map),
            P(this, `values`, new Map)
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
    Iy = class e {
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
            let n = new $;
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
            let n = new $;
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
    Ly = class {
        constructor(e, t) {
            this.input = e,
            this.field = t
        }
        getHash() {
            return W(`ProjectionField`, this.input, this.field.id)
        }
    }
    ,
    Ry = class e extends Cy {
        constructor(e, t, n) {
            let r = e.isSynchronous;
            for (let e of t)
                r &&= e.input.isSynchronous;
            super(r),
            this.input = e,
            this.projections = t,
            this.passthrough = n,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return W(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough)
        }
        getOutputFields() {
            let e = new $;
            e.merge(this.passthrough);
            for (let t of this.projections)
                e.add(t.field);
            return e
        }
        canProvideOrdering(e) {
            let t = new $;
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
            let t = new $(e.resolvedFields);
            for (let e of this.projections)
                t.merge(e.input.referencedFields),
                t.delete(e.field);
            return new Ny(e.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = new Q(0);
            for (let t of this.projections) {
                let n = t.input.optimize(e);
                i = Q.max(i, n)
            }
            return new Q(0).add(Q.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.projections.map(e => {
                let t = e.input.getOptimized();
                return new Ly(t,e.field)
            }
            );
            return new e(r,i,this.passthrough)
        }
        *evaluate(e) {
            let t = this.getOutputFields()
              , n = yield*this.input.evaluate(e)
              , r = yield*Oc(n.tuples.map(t => Oc(this.projections.map(n => U({
                field: n.field,
                value: n.input.evaluate(e, t)
            })))));
            return n.map(t, (e, t) => {
                let n = new Fy;
                n.mergePointers(e);
                for (let t of this.passthrough) {
                    let r = e.getValue(t);
                    n.addValue(t, r)
                }
                let i = r[t];
                z(i, `Projections must exist`);
                for (let {field: e, value: t} of i)
                    n.addValue(e, t);
                return n
            }
            )
        }
    }
    ,
    zy = {
        type: 0
    },
    By = class extends Sy {
        constructor(e, t, n) {
            super(n),
            this.referencedFields = e,
            this.referencedOuterFields = t,
            this.isSynchronous = n
        }
        evaluateSync() {
            let e = this.evaluate(void 0, void 0);
            return Tc(e)
        }
        evaluateAsync() {
            let e = this.evaluate(void 0, void 0);
            return Ec(e)
        }
    }
    ,
    Vy = {
        type: 0
    },
    Hy = class {
        constructor(e, t) {
            this.when = e,
            this.then = t
        }
        getHash() {
            return W(`CaseCondition`, this.when, this.then)
        }
    }
    ,
    Uy = class e extends By {
        constructor(e, t, n) {
            let r = new $
              , i = new $
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
            P(this, `definition`, {
                type: `unknown`,
                isNullable: !0
            })
        }
        getHash() {
            return W(`ScalarCase`, this.input, ...this.conditions, this.otherwise)
        }
        optimize(e) {
            var t, n;
            (t = this.input) == null || t.optimize(e);
            for (let t of this.conditions)
                t.when.optimize(e),
                t.then.optimize(e);
            return (n = this.otherwise) == null || n.optimize(e),
            new Q(0)
        }
        getOptimized() {
            let t = this.input?.getOptimized()
              , n = this.conditions.map(e => {
                let t = e.when.getOptimized()
                  , n = e.then.getOptimized();
                return new Hy(t,n)
            }
            )
              , r = this.otherwise?.getOptimized();
            return new e(t,n,r)
        }
        *evaluate(e, t) {
            let {input: n, conditions: r, otherwise: i} = yield*U({
                input: this.input?.evaluate(e, t) ?? null,
                conditions: Oc(this.conditions.map(n => U({
                    when: n.when.evaluate(e, t),
                    then: n.then.evaluate(e, t)
                }))),
                otherwise: this.otherwise?.evaluate(e, t) ?? null
            });
            if (this.input) {
                for (let {when: e, then: t} of r)
                    if (Z.equal(n, e, Vy))
                        return t
            } else
                for (let {when: e, then: t} of r)
                    if (Bc(e))
                        return t;
            return i
        }
    }
    ,
    Wy = class {
        constructor(e, t, n) {
            this.normalizer = e,
            this.query = t,
            this.locale = n,
            P(this, `collectionId`, 0),
            P(this, `indexId`, 0),
            P(this, `fieldId`, 0),
            P(this, `subqueries`, [])
        }
        build() {
            let e = new Py;
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
            let i = [], a = new $, o;
            if (t.orderBy) {
                o = new My;
                for (let e of t.orderBy)
                    if (e.type === `Identifier`) {
                        let t = n.resolveField(e.name, e.collection);
                        if (pt(t))
                            continue;
                        a.add(t.field);
                        let r = new jy(t.field,e.direction);
                        o.push(r)
                    } else {
                        let t = this.buildExpression(n, e)
                          , r = Dl(this.fieldId++)
                          , a = new Ay(r,void 0,t.definition,void 0)
                          , s = new Ly(t,a);
                        i.push(s);
                        let c = new jy(a,e.direction);
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
              , a = new $(n)
              , o = [...r];
            for (let n of t)
                if (n.type === `Identifier`) {
                    let t = e.resolveField(n.name, n.collection);
                    if (pt(t))
                        continue;
                    a.add(t.field),
                    i.addField({
                        ...t,
                        name: n.alias ?? t.name
                    })
                } else {
                    let t = this.buildExpression(e, n);
                    z(n.alias, `Subqueries should have an alias`);
                    let r = Dl(this.fieldId++)
                      , a = n.alias
                      , s = new Ay(r,a,t.definition,void 0)
                      , c = new Ly(t,s);
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
                B(t, `Unsupported from type`)
            }
        }
        buildCollection(e, t) {
            let n = e.push()
              , r = ml(t.data, this.locale)
              , i = t.alias
              , a = Tl(this.collectionId++)
              , o = new Dy(a,i,r);
            for (let[e,t] of Object.entries(r.schema)) {
                let r = Dl(this.fieldId++)
                  , a = new Ay(r,e,t,o);
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
                  , t = Dl(this.fieldId++)
                  , r = new Ay(t,Ty,e,o);
                n.addField({
                    field: r,
                    name: Ty,
                    collectionName: i
                });
                let a = new My
                  , s = new jy(r);
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
                let i = new My
                  , a = El(this.indexId++)
                  , s = new Oy(a,e,o,t,r,i);
                o.indexes.add(s)
            }
            let s = this.normalizer.newRelationalScan(o);
            return n.setNode(s),
            n
        }
        buildJoin(e, t) {
            let n = this.buildFrom(e, t.left)
              , r = this.buildFrom(e, t.right)
              , i = new My
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
                B(t.type, `Unsupported join type`)
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
                B(t, `Unsupported expression`)
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
            return this.normalizer.newScalarConstant(my, null)
        }
        buildLiteralValue(e) {
            let t = Z.parse(e.value);
            return this.normalizer.newScalarConstant(my, t)
        }
        buildFunctionCall(e, t) {
            let n = n => {
                let r = t.arguments[n];
                return z(r, `Missing argument`),
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
                    return z(n, `Missing argument`),
                    z(n.type === `Select`, `Subqueries require a select expression`),
                    this.buildSubqueryArray(e, n)
                }
            case `FLAT_ARRAY`:
                {
                    let n = t.arguments[0];
                    return z(n, `Missing argument`),
                    z(n.type === `Select`, `Subqueries require a select expression`),
                    this.buildSubqueryFlatArray(e, n)
                }
            default:
                throw Error(`Unsupported function name`)
            }
        }
        buildSubqueryArray(e, t) {
            try {
                let n = new Gy(e);
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
                let n = new Gy(e);
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
                return new Hy(n,r)
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
                B(t.operator, `Unsupported unary operator`)
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
                B(t.operator, `Unsupported binary operator`)
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
    Gy = class {
        constructor(e) {
            this.inScope = e,
            P(this, `referencedFields`, new $),
            P(this, `referencedOuterFields`, new $)
        }
    }
    ,
    Ky = class e extends Cy {
        constructor(e, t) {
            super(e.isSynchronous && t.isSynchronous),
            this.input = e,
            this.predicate = t,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return W(`RelationalFilter`, this.inputGroup.id, this.predicate)
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
            let t = new $(e.resolvedFields);
            return t.merge(this.predicate.referencedFields),
            new Ny(e.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = this.predicate.optimize(e);
            return new Q(0).add(Q.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.predicate.getOptimized();
            return new e(r,i)
        }
        *evaluate(e) {
            let t = yield*this.input.evaluate(e)
              , n = yield*Oc(t.tuples.map(t => this.predicate.evaluate(e, t)));
            return t.filter( (e, t) => {
                let r = n[t] ?? null;
                return Bc(r)
            }
            )
        }
    }
    ,
    qy = class e extends Cy {
        constructor(e, t) {
            super(!1),
            this.index = e,
            this.query = t
        }
        getHash() {
            return W(`RelationalIndexLookup`, this.index.id, ...this.query)
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
            return Q.estimate(1, e ? 100 * yy : 50 * yy)
        }
        getOptimized() {
            return new e(this.index,this.query)
        }
        *evaluate() {
            let e = this.index
              , t = e.collection
              , n = this.getOutputFields()
              , r = (yield e.data.lookupItems(this.query)).map(n => {
                let r = new Fy;
                for (let i of e.resolvedFields) {
                    let e = i.getValue(n);
                    r.addPointer(t, n.pointer),
                    r.addValue(i, e)
                }
                return r
            }
            );
            return new Iy(n,r)
        }
    }
    ,
    Jy = class e extends Cy {
        constructor(e, t) {
            super(e.isSynchronous && t.isSynchronous),
            this.left = e,
            this.right = t,
            P(this, `leftGroup`),
            P(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return W(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id)
        }
        getOutputFields() {
            let e = new $
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
            let t = new My;
            return new Ny(t,e.resolvedFields)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(t)
              , a = e.optimizeGroup(this.rightGroup, i);
            return Q.max(r, a)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(t)
              , a = this.rightGroup.getOptimized(i);
            return new e(r,a)
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*U({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            return t.intersection(n)
        }
    }
    ,
    Yy = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarEquals`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.equal(n, r, zy)
            }
        }
    }
    ,
    Xy = class e extends Cy {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            this.left = e,
            this.right = t,
            this.constraint = n,
            P(this, `leftGroup`),
            P(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return W(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint)
        }
        getOutputFields() {
            let e = new $;
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
            let n = new $
              , r = e.relational.outputFields;
            for (let e of t.resolvedFields)
                r.has(e) && n.add(e);
            for (let e of this.constraint.referencedFields)
                r.has(e) && n.add(e);
            let i = new My;
            return new Ny(i,n)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = e.optimizeGroup(this.rightGroup, i)
              , o = this.constraint.optimize(e);
            return Q.max(Q.max(r, a), o)
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
              , s = new Iy(o);
            for (let t of e.tuples) {
                let e = yield*n.evaluate(i, t)
                  , r = JSON.stringify(e?.value ?? null)
                  , o = a.get(r) ?? [];
                if (o.length === 0)
                    s.push(t);
                else
                    for (let e of o) {
                        let n = new Fy;
                        n.merge(t),
                        n.merge(e),
                        s.push(n)
                    }
            }
            return s
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*U({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            if (this.constraint instanceof Yy) {
                if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.left, this.constraint.right, e);
                if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.right, this.constraint.left, e)
            }
            let r = this.getOutputFields()
              , i = new Iy(r);
            for (let r of t.tuples) {
                let t = !1;
                for (let a of n.tuples) {
                    let n = new Fy;
                    n.merge(r),
                    n.merge(a);
                    let o = yield*this.constraint.evaluate(e, n);
                    Bc(o) && (i.push(n),
                    t = !0)
                }
                t || i.push(r)
            }
            return i
        }
    }
    ,
    Zy = class e extends Cy {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            this.left = e,
            this.right = t,
            this.constraint = n,
            P(this, `leftGroup`),
            P(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return W(`RelationalRightJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint)
        }
        getOutputFields() {
            let e = new $;
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
            let n = new $
              , r = e.relational.outputFields;
            for (let e of t.resolvedFields)
                r.has(e) && n.add(e);
            for (let e of this.constraint.referencedFields)
                r.has(e) && n.add(e);
            let i = new My;
            return new Ny(i,n)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(this.leftGroup, t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(this.rightGroup, t)
              , a = e.optimizeGroup(this.rightGroup, i)
              , o = this.constraint.optimize(e);
            return Q.max(Q.max(r, a), o)
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
              , s = new Iy(o);
            for (let e of t.tuples) {
                let t = yield*r.evaluate(i, e)
                  , n = JSON.stringify(t?.value ?? null)
                  , o = a.get(n) ?? [];
                if (o.length === 0)
                    s.push(e);
                else
                    for (let t of o) {
                        let n = new Fy;
                        n.merge(e),
                        n.merge(t),
                        s.push(n)
                    }
            }
            return s
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*U({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            if (this.constraint instanceof Yy) {
                if (this.constraint.left.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.right.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.left, this.constraint.right, e);
                if (this.constraint.right.referencedFields.subsetOf(this.leftGroup.relational.outputFields) && this.constraint.left.referencedFields.subsetOf(this.rightGroup.relational.outputFields))
                    return yield*this.evaluateScalarEquals(t, n, this.constraint.right, this.constraint.left, e)
            }
            let r = this.getOutputFields()
              , i = new Iy(r);
            for (let r of n.tuples) {
                let n = !1;
                for (let a of t.tuples) {
                    let t = new Fy;
                    t.merge(r),
                    t.merge(a);
                    let o = yield*this.constraint.evaluate(e, t);
                    Bc(o) && (i.push(t),
                    n = !0)
                }
                n || i.push(r)
            }
            return i
        }
    }
    ,
    Qy = class e extends Cy {
        constructor(e) {
            super(!1),
            this.collection = e
        }
        getHash() {
            return W(`RelationalScan`, this.collection.id)
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
            return Q.estimate(1, 200 * yy)
        }
        getOptimized() {
            return new e(this.collection)
        }
        *evaluate() {
            let e = this.collection
              , t = this.getOutputFields()
              , n = (yield e.data.scanItems()).map(n => {
                let r = new Fy;
                for (let i of t) {
                    let t = i.getValue(n);
                    r.addPointer(e, n.pointer),
                    r.addValue(i, t)
                }
                return r
            }
            );
            return new Iy(t,n)
        }
    }
    ,
    $y = class e extends Cy {
        constructor(e, t) {
            super(e.isSynchronous && t.isSynchronous),
            this.left = e,
            this.right = t,
            P(this, `leftGroup`),
            P(this, `rightGroup`),
            this.leftGroup = e.getGroup(),
            this.rightGroup = t.getGroup()
        }
        getHash() {
            return W(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id)
        }
        getOutputFields() {
            let e = new $
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
            let t = new My;
            return new Ny(t,e.resolvedFields)
        }
        optimize(e, t) {
            let n = this.getChildRequiredProps(t)
              , r = e.optimizeGroup(this.leftGroup, n)
              , i = this.getChildRequiredProps(t)
              , a = e.optimizeGroup(this.rightGroup, i);
            return Q.max(r, a)
        }
        getOptimized(t) {
            let n = this.getChildRequiredProps(t)
              , r = this.leftGroup.getOptimized(n)
              , i = this.getChildRequiredProps(t)
              , a = this.rightGroup.getOptimized(i);
            return new e(r,a)
        }
        *evaluate(e) {
            let {left: t, right: n} = yield*U({
                left: this.left.evaluate(e),
                right: this.right.evaluate(e)
            });
            return t.union(n)
        }
    }
    ,
    eb = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarAnd`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Bc(n) && Bc(r)
            }
        }
    }
    ,
    tb = class extends By {
        constructor(e, t) {
            let n = new $
              , r = new $;
            super(n, r, !0),
            this.definition = e,
            this.value = t
        }
        getHash() {
            return W(`ScalarConstant`, this.definition, this.value)
        }
        optimize() {
            return new Q(0)
        }
        getOptimized() {
            return this
        }
        *evaluate() {
            return this.value
        }
    }
    ,
    nb = {
        type: 0
    },
    rb = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarContains`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*U({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.contains(n, r, nb)
            }
        }
    }
    ,
    ib = {
        type: 0
    },
    ab = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarEndsWith`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*U({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.endsWith(n, r, ib)
            }
        }
    }
    ,
    ob = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarGreaterThan`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.greaterThan(n, r, zy)
            }
        }
    }
    ,
    sb = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarGreaterThanOrEqual`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.greaterThanOrEqual(n, r, zy)
            }
        }
    }
    ,
    cb = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarLessThan`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.lessThan(n, r, zy)
            }
        }
    }
    ,
    lb = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarLessThanOrEqual`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.lessThanOrEqual(n, r, zy)
            }
        }
    }
    ,
    ub = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarNotEquals`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: !Z.equal(n, r, zy)
            }
        }
    }
    ,
    db = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarOr`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Bc(n) || Bc(r)
            }
        }
    }
    ,
    fb = {
        type: 0
    },
    pb = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarStartsWith`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*U({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.startsWith(n, r, fb)
            }
        }
    }
    ,
    mb = class {
        constructor(e) {
            this.normalizer = e,
            P(this, `memo`),
            this.memo = e.memo
        }
        explore(e) {
            let t = e.getGroup();
            if (e instanceof Xy) {
                let n = new Zy(e.right,e.left,e.constraint);
                this.memo.addRelational(n, t)
            }
            if (e instanceof Ky) {
                if (e.predicate instanceof eb) {
                    let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left)
                      , r = this.normalizer.newRelationalFilter(e.input, e.predicate.right)
                      , i = new Jy(n,r);
                    this.memo.addRelational(i, t)
                }
                if (e.predicate instanceof db) {
                    let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left)
                      , r = this.normalizer.newRelationalFilter(e.input, e.predicate.right)
                      , i = new $y(n,r);
                    this.memo.addRelational(i, t)
                }
            }
            if (e instanceof Qy)
                for (let n of e.collection.indexes) {
                    if (n.constraint)
                        continue;
                    let e = Ol(n.lookupNodes.length)
                      , r = new qy(n,e);
                    this.memo.addRelational(r, t)
                }
            if (e instanceof Ky) {
                for (let n of e.inputGroup.nodes)
                    if (n instanceof Qy)
                        for (let r of n.collection.indexes) {
                            if (e.predicate instanceof Yy && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tb && r.data.supportedLookupTypes.includes(`Equals`)) {
                                let n = Ol(r.lookupNodes.length);
                                n[0] = {
                                    type: `Equals`,
                                    value: e.predicate.right.value
                                };
                                let i = new qy(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof ub && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tb && r.data.supportedLookupTypes.includes(`NotEquals`)) {
                                let n = Ol(r.lookupNodes.length);
                                n[0] = {
                                    type: `NotEquals`,
                                    value: e.predicate.right.value
                                };
                                let i = new qy(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof cb && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tb && r.data.supportedLookupTypes.includes(`LessThan`)) {
                                let n = Ol(r.lookupNodes.length);
                                n[0] = {
                                    type: `LessThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !1
                                };
                                let i = new qy(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof lb && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tb && r.data.supportedLookupTypes.includes(`LessThan`)) {
                                let n = Ol(r.lookupNodes.length);
                                n[0] = {
                                    type: `LessThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !0
                                };
                                let i = new qy(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof ob && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tb && r.data.supportedLookupTypes.includes(`GreaterThan`)) {
                                let n = Ol(r.lookupNodes.length);
                                n[0] = {
                                    type: `GreaterThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !1
                                };
                                let i = new qy(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof sb && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof tb && r.data.supportedLookupTypes.includes(`GreaterThan`)) {
                                let n = Ol(r.lookupNodes.length);
                                n[0] = {
                                    type: `GreaterThan`,
                                    value: e.predicate.right.value,
                                    inclusive: !0
                                };
                                let i = new qy(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof rb && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof tb && r.data.supportedLookupTypes.includes(`Contains`)) {
                                let n = Ol(r.lookupNodes.length);
                                n[0] = {
                                    type: `Contains`,
                                    value: e.predicate.target.value
                                };
                                let i = new qy(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof pb && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof tb && r.data.supportedLookupTypes.includes(`StartsWith`)) {
                                let n = Ol(r.lookupNodes.length);
                                n[0] = {
                                    type: `StartsWith`,
                                    value: e.predicate.target.value
                                };
                                let i = new qy(r,n);
                                this.memo.addRelational(i, t)
                            }
                            if (e.predicate instanceof ab && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof tb && r.data.supportedLookupTypes.includes(`EndsWith`)) {
                                let n = Ol(r.lookupNodes.length);
                                n[0] = {
                                    type: `EndsWith`,
                                    value: e.predicate.target.value
                                };
                                let i = new qy(r,n);
                                this.memo.addRelational(i, t)
                            }
                        }
            }
        }
    }
    ,
    hb = class {
        constructor(e) {
            this.outputFields = e
        }
        isCompatible(e) {
            return this.outputFields.equals(e.outputFields)
        }
    }
    ,
    gb = class {
        constructor() {
            P(this, `nodes`, new Map),
            P(this, `groups`, [])
        }
        addGroup(e) {
            let t = _l(this.groups.length)
              , n = new by(t,e);
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
              , a = new hb(i);
            return t ??= this.addGroup(a),
            t.addNode(e),
            z(a.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
        }
        addScalar(e) {
            let t = e.getHash();
            return this.nodes.get(t) || (this.nodes.set(t, e),
            e)
        }
    }
    ,
    _b = class e extends Cy {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous),
            this.input = e,
            this.limit = t,
            this.ordering = n,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return W(`RelationalLimit`, this.inputGroup.id, this.limit)
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
            let t = new $(e.resolvedFields);
            return t.merge(this.limit.referencedFields),
            new Ny(this.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = this.limit.optimize(e);
            return new Q(0).add(Q.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.limit.getOptimized();
            return new e(r,i,this.ordering)
        }
        *evaluate(e) {
            let {input: t, limit: n} = yield*U({
                input: this.input.evaluate(e),
                limit: this.limit.evaluate(e, void 0)
            })
              , r = $c(n) ?? 1 / 0;
            return r === 1 / 0 ? t : t.slice(0, r)
        }
    }
    ,
    vb = class e extends Cy {
        constructor(e, t, n) {
            super(e.isSynchronous && t.isSynchronous),
            this.input = e,
            this.offset = t,
            this.ordering = n,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return W(`RelationalOffset`, this.inputGroup.id, this.offset)
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
            let t = new $(e.resolvedFields);
            return t.merge(this.offset.referencedFields),
            new Ny(this.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n)
              , i = this.offset.optimize(e);
            return new Q(0).add(Q.max(r, i))
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n)
              , i = this.offset.getOptimized();
            return new e(r,i,this.ordering)
        }
        *evaluate(e) {
            let {input: t, offset: n} = yield*U({
                input: this.input.evaluate(e),
                offset: this.offset.evaluate(e, void 0)
            })
              , r = $c(n) ?? 0;
            return r === 0 ? t : t.slice(r)
        }
    }
    ,
    yb = class e extends By {
        constructor(e, t, n, r, i) {
            super(r, i, e.isSynchronous),
            this.input = e,
            this.namedFields = t,
            this.ordering = n,
            this.referencedFields = r,
            this.referencedOuterFields = i,
            P(this, `inputGroup`),
            P(this, `definition`),
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
            return W(`ScalarArray`, this.inputGroup.id, e, this.ordering, this.referencedFields, this.referencedOuterFields)
        }
        getInputRequiredProps() {
            let e = new $
              , t = Object.values(this.namedFields);
            for (let n of t) {
                if (pt(n.collection))
                    continue;
                e.add(n)
            }
            return new Ny(this.ordering,e)
        }
        optimize(e) {
            let t = this.getInputRequiredProps()
              , n = e.optimizeGroup(this.inputGroup, t);
            return new Q(0).add(n)
        }
        getOptimized() {
            let t = this.getInputRequiredProps()
              , n = this.inputGroup.getOptimized(t);
            return new e(n,this.namedFields,this.ordering,this.referencedFields,this.referencedOuterFields)
        }
        *evaluate(e, t) {
            let n = new Fy;
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
    bb = class e extends By {
        constructor(e, t) {
            super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            this.input = e,
            this.definition = t,
            z(t.isNullable, `Unsupported non-nullable cast`)
        }
        getHash() {
            return W(`ScalarCast`, this.input, this.definition)
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
            return Z.cast(n, this.definition)
        }
    }
    ,
    xb = class e extends By {
        constructor(e, t, n, r, i) {
            super(r, i, e.isSynchronous),
            this.input = e,
            this.field = t,
            this.ordering = n,
            this.referencedFields = r,
            this.referencedOuterFields = i,
            P(this, `inputGroup`),
            P(this, `definition`),
            this.inputGroup = e.getGroup(),
            this.definition = {
                type: `array`,
                isNullable: !1,
                definition: t.definition
            }
        }
        getHash() {
            return W(`ScalarFlatArray`, this.inputGroup.id, this.field.id, this.ordering, this.referencedFields, this.referencedOuterFields)
        }
        getInputRequiredProps() {
            let e = new $;
            return pt(this.field.collection) || e.add(this.field),
            new Ny(this.ordering,e)
        }
        optimize(e) {
            let t = this.getInputRequiredProps()
              , n = e.optimizeGroup(this.inputGroup, t);
            return new Q(0).add(n)
        }
        getOptimized() {
            let t = this.getInputRequiredProps()
              , n = this.inputGroup.getOptimized(t);
            return new e(n,this.field,this.ordering,this.referencedFields,this.referencedOuterFields)
        }
        *evaluate(e, t) {
            let n = new Fy;
            return e && n.merge(e),
            t && n.merge(t),
            {
                type: `array`,
                value: (yield*this.input.evaluate(n)).tuples.map(e => e.getValue(this.field))
            }
        }
    }
    ,
    Sb = {
        type: 0
    },
    Cb = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarIn`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: Z.in(n, r, Sb)
            }
        }
    }
    ,
    wb = {
        type: 1
    },
    Tb = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.source = e,
            this.target = t,
            P(this, `definition`, {
                type: `number`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarIndexOf`, this.source, this.target)
        }
        optimize(e) {
            let t = this.source.optimize(e)
              , n = this.target.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.source.getOptimized()
              , n = this.target.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {source: n, target: r} = yield*U({
                source: this.source.evaluate(e, t),
                target: this.target.evaluate(e, t)
            });
            return {
                type: `number`,
                value: Z.indexOf(n, r, wb)
            }
        }
    }
    ,
    Eb = class e extends By {
        constructor(e) {
            super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            this.input = e,
            P(this, `definition`, {
                type: `number`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarLength`, this.input)
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
                value: Z.length(n)
            }
        }
    }
    ,
    Db = class e extends By {
        constructor(e) {
            super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            this.input = e,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarNot`, this.input)
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
                value: !Bc(n)
            }
        }
    }
    ,
    Ob = {
        type: 0
    },
    kb = class e extends By {
        constructor(e, t) {
            let n = new $;
            n.merge(e.referencedFields),
            n.merge(t.referencedFields);
            let r = new $;
            r.merge(e.referencedOuterFields),
            r.merge(t.referencedOuterFields);
            let i = e.isSynchronous && t.isSynchronous;
            super(n, r, i),
            this.left = e,
            this.right = t,
            P(this, `definition`, {
                type: `boolean`,
                isNullable: !1
            })
        }
        getHash() {
            return W(`ScalarNotIn`, this.left, this.right)
        }
        optimize(e) {
            let t = this.left.optimize(e)
              , n = this.right.optimize(e);
            return Q.max(t, n)
        }
        getOptimized() {
            let t = this.left.getOptimized()
              , n = this.right.getOptimized();
            return new e(t,n)
        }
        *evaluate(e, t) {
            let {left: n, right: r} = yield*U({
                left: this.left.evaluate(e, t),
                right: this.right.evaluate(e, t)
            });
            return {
                type: `boolean`,
                value: !Z.in(n, r, Ob)
            }
        }
    }
    ,
    Ab = class extends By {
        constructor(e, t) {
            z(e.name !== Ty, `Invalid field name`);
            let n = new $
              , r = new $;
            t ? r.add(e) : n.add(e),
            super(n, r, !0),
            this.field = e,
            this.isOuterField = t,
            P(this, `definition`),
            this.definition = e.definition
        }
        getHash() {
            return W(`ScalarVariable`, this.field.id, this.isOuterField)
        }
        optimize() {
            return new Q(0)
        }
        getOptimized() {
            return this
        }
        *evaluate(e, t) {
            return this.isOuterField ? (z(e, `Context must exist`),
            e.getValue(this.field)) : (z(t, `Tuple must exist`),
            t.getValue(this.field))
        }
    }
    ,
    jb = class {
        constructor(e) {
            this.memo = e
        }
        finishRelational(e) {
            return this.memo.addRelational(e)
        }
        newRelationalScan(e) {
            let t = new Qy(e);
            return this.finishRelational(t)
        }
        newRelationalIndexLookup(e, t) {
            let n = new qy(e,t);
            return this.finishRelational(n)
        }
        newRelationalLeftJoin(e, t, n) {
            let r = new Xy(e,t,n);
            return this.finishRelational(r)
        }
        newRelationalRightJoin(e, t, n) {
            return this.newRelationalLeftJoin(t, e, n)
        }
        newRelationalFilter(e, t) {
            if (e instanceof Xy && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
                let n = this.newRelationalFilter(e.left, t);
                return this.newRelationalLeftJoin(n, e.right, e.constraint)
            }
            if (e instanceof Zy && t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)) {
                let n = this.newRelationalFilter(e.right, t);
                return this.newRelationalLeftJoin(e.left, n, e.constraint)
            }
            let n = new Ky(e,t);
            return this.finishRelational(n)
        }
        newRelationalProject(e, t, n) {
            let r = new Ry(e,t,n);
            return this.finishRelational(r)
        }
        newRelationalLimit(e, t, n) {
            if (e instanceof Ry && t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) && n.providedByFields(e.inputGroup.relational.outputFields)) {
                let r = this.newRelationalLimit(e.input, t, n);
                return this.newRelationalProject(r, e.projections, e.passthrough)
            }
            let r = new _b(e,t,n);
            return this.finishRelational(r)
        }
        newRelationalOffset(e, t, n) {
            let r = new vb(e,t,n);
            return this.finishRelational(r)
        }
        finishScalar(e) {
            if (!(e instanceof tb) && e.isSynchronous && e.referencedFields.size === 0 && e.referencedOuterFields.size === 0) {
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
            let n = new Ab(e,t);
            return this.finishScalar(n)
        }
        newScalarConstant(e, t) {
            let n = new tb(e,t);
            return this.finishScalar(n)
        }
        newScalarNot(e) {
            if (e instanceof Db)
                return e.input.definition.type === `boolean` ? e.input : this.newScalarCast(e.input, {
                    type: `boolean`,
                    isNullable: !0
                });
            if (e instanceof Yy)
                return this.newScalarNotEquals(e.left, e.right);
            if (e instanceof ub)
                return this.newScalarEquals(e.left, e.right);
            if (e instanceof cb)
                return this.newScalarGreaterThanOrEqual(e.left, e.right);
            if (e instanceof lb)
                return this.newScalarGreaterThan(e.left, e.right);
            if (e instanceof ob)
                return this.newScalarLessThanOrEqual(e.left, e.right);
            if (e instanceof sb)
                return this.newScalarLessThan(e.left, e.right);
            if (e instanceof eb) {
                let t = this.newScalarNot(e.left)
                  , n = this.newScalarNot(e.right);
                return this.newScalarOr(t, n)
            }
            if (e instanceof db) {
                let t = this.newScalarNot(e.left)
                  , n = this.newScalarNot(e.right);
                return this.newScalarAnd(t, n)
            }
            let t = new Db(e);
            return this.finishScalar(t)
        }
        newScalarAnd(e, t) {
            let n = new eb(e,t);
            return this.finishScalar(n)
        }
        newScalarOr(e, t) {
            let n = new db(e,t);
            return this.finishScalar(n)
        }
        newScalarEquals(e, t) {
            let n = e instanceof Ab;
            if (t instanceof Ab && !n)
                return this.newScalarEquals(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new Yy(e,t);
            return this.finishScalar(r)
        }
        newScalarNotEquals(e, t) {
            let n = e instanceof Ab;
            if (t instanceof Ab && !n)
                return this.newScalarNotEquals(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new ub(e,t);
            return this.finishScalar(r)
        }
        newScalarLessThan(e, t) {
            let n = e instanceof Ab;
            if (t instanceof Ab && !n)
                return this.newScalarGreaterThan(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new cb(e,t);
            return this.finishScalar(r)
        }
        newScalarLessThanOrEqual(e, t) {
            let n = e instanceof Ab;
            if (t instanceof Ab && !n)
                return this.newScalarGreaterThanOrEqual(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new lb(e,t);
            return this.finishScalar(r)
        }
        newScalarGreaterThan(e, t) {
            let n = e instanceof Ab;
            if (t instanceof Ab && !n)
                return this.newScalarLessThan(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new ob(e,t);
            return this.finishScalar(r)
        }
        newScalarGreaterThanOrEqual(e, t) {
            let n = e instanceof Ab;
            if (t instanceof Ab && !n)
                return this.newScalarLessThanOrEqual(t, e);
            e = this.removeUnknown(e, t.definition),
            t = this.removeUnknown(t, e.definition);
            let r = new sb(e,t);
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
            let r = new Cb(e,t);
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
            let r = new kb(e,t);
            return this.finishScalar(r)
        }
        newScalarCase(e, t, n) {
            if (e) {
                let n = [];
                for (let {when: r, then: i} of t) {
                    let t = this.removeUnknown(r, e.definition)
                      , a = new Hy(t,i);
                    n.push(a)
                }
                t = n
            }
            let r = new Uy(e,t,n);
            return this.finishScalar(r)
        }
        newScalarContains(e, t) {
            let n = new rb(e,t);
            return this.finishScalar(n)
        }
        newScalarStartsWith(e, t) {
            let n = new pb(e,t);
            return this.finishScalar(n)
        }
        newScalarEndsWith(e, t) {
            let n = new ab(e,t);
            return this.finishScalar(n)
        }
        newScalarLength(e) {
            let t = new Eb(e);
            return this.finishScalar(t)
        }
        newScalarIndexOf(e, t) {
            let n = new Tb(e,t);
            return this.finishScalar(n)
        }
        newScalarArray(e, t, n, r, i) {
            let a = new yb(e,t,n,r,i);
            return this.finishScalar(a)
        }
        newScalarFlatArray(e, t, n, r, i) {
            let a = new xb(e,t,n,r,i);
            return this.finishScalar(a)
        }
        newScalarCast(e, t) {
            if (e.definition.type === t.type)
                return e;
            let n = new bb(e,t);
            return this.finishScalar(n)
        }
    }
    ,
    Mb = class extends Cy {
    }
    ,
    Nb = class e extends Mb {
        constructor(e, t, n) {
            super(!1),
            this.input = e,
            this.fields = t,
            this.resolver = n,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return W(`EnforcerResolve`, this.inputGroup.id, this.fields)
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
            let t = new $;
            return new Ny(e.ordering,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n);
            return Q.estimate(0, 100 * yy).add(r)
        }
        getOptimized(t) {
            let n = this.getInputRequiredProps(t)
              , r = this.inputGroup.getOptimized(n);
            return new e(r,this.fields,this.resolver)
        }
        *evaluate(e) {
            let t = yield*this.input.evaluate(e);
            z(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
            let n = new Set;
            for (let e of this.fields)
                z(e.collection, `Collection required to resolve field`),
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
                return z(r.length === n.length, `Invalid number of items`),
                [e, r]
            }
            ));
            return t.map(t.fields, e => {
                let t = new Fy;
                t.merge(e);
                for (let[n,i] of r) {
                    let r = e.getPointer(n);
                    if (!r)
                        continue;
                    let a = i.shift();
                    z(a, `Item not found`),
                    z(a.pointer === r, `Pointer mismatch`);
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
    Pb = {
        type: 0
    },
    Fb = class e extends Mb {
        constructor(e, t) {
            super(e.isSynchronous),
            this.input = e,
            this.ordering = t,
            P(this, `inputGroup`),
            this.inputGroup = e.getGroup()
        }
        getHash() {
            return W(`EnforcerSort`, this.inputGroup.id, this.ordering)
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
            let t = new $(e.resolvedFields);
            for (let {field: e} of this.ordering.fields) {
                if (e.name === Ty || pt(e.collection))
                    continue;
                t.add(e)
            }
            let n = new My;
            return new Ny(n,t)
        }
        optimize(e, t) {
            let n = this.getInputRequiredProps(t)
              , r = e.optimizeGroup(this.inputGroup, n);
            return new Q(0).add(r)
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
                    if (n.name === Ty) {
                        let r = n.collection;
                        z(r, `Collection required for sorting`);
                        let a = e.getPointer(r);
                        z(a, `Pointer required for sorting`);
                        let o = {
                            pointer: a,
                            data: {}
                        }
                          , s = t.getPointer(r);
                        z(s, `Pointer required for sorting`);
                        let c = {
                            pointer: s,
                            data: {}
                        }
                          , l = r.data.compareItems(o, c);
                        return i ? l : -l
                    }
                    let a = e.getValue(n)
                      , o = t.getValue(n);
                    if (Z.equal(a, o, Pb))
                        continue;
                    if (mt(a) || Z.lessThan(a, o, Pb))
                        return i ? -1 : 1;
                    if (mt(o) || Z.greaterThan(a, o, Pb))
                        return i ? 1 : -1;
                    throw Error(`Invalid comparison`)
                }
                return 0
            }
            )
        }
    }
    ,
    Ib = class {
        constructor(e, t, n) {
            this.query = e,
            this.locale = t,
            this.resolver = n,
            P(this, `memo`, new gb),
            P(this, `normalizer`, new jb(this.memo)),
            P(this, `explorer`, new mb(this.normalizer))
        }
        optimize() {
            let e = new Wy(this.normalizer,this.query,this.locale).build()
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
            z(r, `Normalized node not found`),
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
                let r = new Nb(t,n.resolvedFields,this.resolver)
                  , i = r.optimize(this, n);
                e.update(r, i)
            }
            if (n.ordering.length > 0) {
                let r = new Fb(t,n.ordering)
                  , i = r.optimize(this, n);
                e.update(r, i)
            }
        }
    }
    ,
    Lb = wc(`query-engine`),
    Rb = class {
        async evalQuery(e, t, n) {
            Lb.enabled && Lb.debug(`Query:
${Vl(e)}`);
            let r = new wy(e,t)
              , [i,a] = new Ib(e,t,r).optimize()
              , o = await i.evaluateAsync()
              , s = Object.entries(a)
              , c = []
              , l = Dc(Oc(o.tuples.map(e => {
                let t = {}
                  , i = {};
                for (let[a,o] of s) {
                    let s = e.getValue(o);
                    t[a] = r.resolveValue(s),
                    n && (i[a] = s)
                }
                return n && c.push(i),
                U(t)
            }
            )));
            return n ? [yt(l) ? await l : l, c] : l
        }
        async serializeableQuery(e, t) {
            return this.evalQuery(e, t, !0)
        }
        async query(e, t) {
            return this.evalQuery(e, t, !1)
        }
        resolveSerializableQueryResult(e, t, n) {
            let r = new wy(t,n);
            return Dc(Oc(e.map(e => {
                let t = {}, n;
                for (n in e) {
                    let i = e[n];
                    t[n] = r.resolveValue(i)
                }
                return U(t)
            }
            )))
        }
    }
    ,
    zb = class {
        constructor() {
            P(this, `dataByKey`, new Map)
        }
        register(e, t) {
            this.dataByKey.set(e, t)
        }
        [Symbol.iterator]() {
            return this.dataByKey.entries()
        }
        size() {
            return this.dataByKey.size
        }
        clear() {
            this.dataByKey.clear()
        }
    }
    ,
    Bb = O === void 0 ? new zb : void 0,
    Vb = `style[data-framer-breakpoint-css]`,
    Hb = `page`,
    Ub = Symbol(`cycle`),
    Kb = {
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
    qb = {
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
    Jb = Kb,
    Yb = `System Default`,
    Xb = class {
        constructor() {
            P(this, `name`, `local`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map),
            P(this, `fontAliasBySelector`, new Map),
            P(this, `fontAliases`, new Map)
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
            for (let t of Object.keys(Jb)) {
                let n = Jb[t];
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
            for (let[e,t] of Object.entries(qb))
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
                name: Yb,
                fonts: [],
                source: this.name
            }
              , t = new Map
              , n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
            for (let r of [`normal`, `italic`])
                for (let i of n) {
                    let n = vu(i, r)
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
    Zb = {
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
    Qb = class extends Map {
        constructor() {
            super(...arguments),
            P(this, `_hash`, 0)
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
    $b = Object.freeze([]),
    tx = class extends Error {
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
    nx = O === void 0 ? void 0 : O.location.hostname,
    rx = !!(nx && [`web.framerlocal.com`, `localhost`, `127.0.0.1`, `[::1]`].includes(nx)),
    ix = ( () => {
        if (!nx)
            return;
        if (rx)
            return {
                main: nx,
                previewLink: void 0
            };
        let e = nx.match(/^(([^.]+\.)?beta\.)?((?:development\.)?framer\.com)$/u);
        if (!(!e || !e[3]))
            return {
                previewLink: e[2] && e[0],
                main: e[3]
            }
    }
    )(),
    ix?.main,
    ix?.main,
    ox = [`trace`, `debug`, `info`, `warn`, `error`],
    sx = [`:trace`, `:debug`, `:info`, `:warn`, `:error`],
    cx = class e {
        constructor(t, n, r) {
            this.logger = t,
            this.level = n,
            this.parts = r,
            P(this, `id`),
            P(this, `time`),
            P(this, `stringPrefix`),
            this.id = e.nextId++,
            this.time = Date.now()
        }
        toMessage() {
            if (this.stringPrefix)
                return this.parts;
            let e = [new Date(this.time).toISOString().substr(-14, 14), ox[this.level] + `: [` + this.logger.id + `]`]
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
                let n = JSON.stringify(Tu(e));
                return n?.length > 253 ? n.slice(0, 250) + `...` : n
            }
            ).join(` `)
        }
    }
    ,
    P(cx, `nextId`, 0),
    lx = cx,
    ux = `*:app:info,app:info`,
    typeof process < `u` && process.kill && (ux = ``);
    try {
        O !== void 0 && O.localStorage && (ux = O.localStorage.logLevel || ux)
    } catch {}
    try {
        typeof process < `u` && (ux = process.env.DEBUG || ux)
    } catch {}
    try {
        O !== void 0 && Object.assign(O, {
            setLogLevel: ju
        })
    } catch {}
    try {
        O !== void 0 && O.postMessage && O.top === O && O.addEventListener(`message`, e => {
            if (!e.data || typeof e.data != `object`)
                return;
            let {loggerId: t, level: n, parts: r, printed: i} = e.data;
            if (typeof t != `string` || !Array.isArray(r) || r.length < 1 || typeof n != `number`)
                return;
            let a = Au(t);
            if (n < 0 || n > 5)
                return;
            r[0] = r[0].replace(`[`, `*[`);
            let o = new lx(a,n,r);
            o.stringPrefix = r[0],
            px.push(o),
            !i && (a.level > n || console == null || console.log(...o.toMessage()))
        }
        )
    } catch {}
    try {
        O !== void 0 && O.postMessage && O.parent !== O && !O.location.pathname.startsWith(`/edit`) && (dx = e => {
            var t;
            try {
                let n = e.toMessage().map(e => Tu(e))
                  , r = e.logger
                  , i = e.level
                  , a = r.level <= e.level
                  , o = {
                    loggerId: r.id,
                    level: i,
                    parts: n,
                    printed: a
                };
                (t = O.parent) == null || t.postMessage(o, Cu().app)
            } catch {}
        }
        )
    } catch {}
    fx = {},
    px = [],
    mx = 1e3,
    hx = /\/(?<filename>[^/.]+)(?=\.(?:debug\.)?html$)/u,
    _x = e => {
        let t = {
            ...e,
            logs: Ou().slice(-50).map(e => e.toString().slice(0, 600)).join(`
`)
        };
        return e.logs && (console == null || console.warn(`extras.logs is reserved for log replay buffer, use another key`)),
        t
    }
    ,
    vx = class {
        constructor(e, t) {
            this.id = e,
            P(this, `level`, 3),
            P(this, `didLog`, {}),
            P(this, `errorIsCritical`),
            P(this, `trace`, (...e) => {
                if (this.level > 0)
                    return;
                let t = Du(this, 0, e);
                console == null || console.log(...t.toMessage())
            }
            ),
            P(this, `debug`, (...e) => {
                let t = Du(this, 1, e);
                this.level > 1 || console == null || console.log(...t.toMessage())
            }
            ),
            P(this, `info`, (...e) => {
                let t = Du(this, 2, e);
                this.level > 2 || console == null || console.info(...t.toMessage())
            }
            ),
            P(this, `warn`, (...e) => {
                let t = Du(this, 3, e);
                this.level > 3 || console == null || console.warn(...t.toMessage())
            }
            ),
            P(this, `warnOncePerMinute`, (e, ...t) => {
                let n = this.didLog[e];
                if (n && n > Date.now())
                    return;
                this.didLog[e] = Date.now() + 1e3 * 60,
                t.unshift(e);
                let r = Du(this, 3, t);
                this.level > 3 || console == null || console.warn(...r.toMessage())
            }
            ),
            P(this, `error`, (...e) => {
                let t = Du(this, 4, e);
                this.level > 4 || console == null || console.error(...t.toMessage())
            }
            ),
            P(this, `errorOncePerMinute`, (e, ...t) => {
                let n = this.didLog[e];
                if (n && n > Date.now())
                    return;
                this.didLog[e] = Date.now() + 1e3 * 60,
                t.unshift(e);
                let r = Du(this, 4, t);
                this.level > 4 || console == null || console.error(...r.toMessage())
            }
            ),
            P(this, `reportWithoutLogging`, (e, t, n, r) => {
                let i = _x(t ?? {})
                  , a = xu({
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
            P(this, `reportError`, (e, t, n, r) => {
                let[i,a] = this.reportWithoutLogging(e, t, n, r);
                i ? this.error(a, i) : this.error(a)
            }
            ),
            P(this, `reportErrorOncePerMinute`, (e, t) => {
                if (!Mu(e))
                    return;
                let n = this.didLog[e.message];
                n && n > Date.now() || (this.didLog[e.message] = Date.now() + 1e3 * 60,
                this.reportError(e, t))
            }
            ),
            P(this, `reportCriticalError`, (e, t, n) => this.reportError(e, t, n, !0)),
            this.errorIsCritical = t ?? (e === `fatal` || e.endsWith(`:fatal`))
        }
        extend(e) {
            let t = this.id + `:` + e;
            return Au(t)
        }
        getBufferedMessages() {
            return px.filter(e => e.logger === this)
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
    yx = `config/dependencies`,
    bx = `importMap.json`,
    xx = `dependencies.json`,
    `${yx}${bx}`,
    `${yx}${xx}`,
    Sx = !1,
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
    )(Cx ||= {}),
    wx = Object.prototype.hasOwnProperty,
    (e => {
        function t(e, t) {
            for (let n of Object.keys(e))
                Pu(t, n) || delete e[n];
            for (let n of Object.keys(t))
                e[n] === void 0 && (e[n] = t[n]);
            return Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            Sx && Object.freeze(e),
            e
        }
        e.morphUsingTemplate = t;
        function n(e, t) {
            t && Object.assign(e, t),
            Sx && Object.freeze(e)
        }
        e.writeOnce = n;
        function r(e, t) {
            let n = Object.assign(Object.create(Object.getPrototypeOf(e)), e, t);
            return Sx && Object.freeze(n),
            n
        }
        e.update = r
    }
    )(Tx ||= {}),
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
    )(Ex ||= {}),
    (e => {
        function t(e, t, n) {
            let r = new Map(e);
            return r.set(t, n),
            r
        }
        e.set = t;
        function n(e, t) {
            let n = new Map(e);
            return n.delete(t),
            n
        }
        e.remove = n
    }
    )(Dx ||= {}),
    Ox = class extends Promise {
        constructor() {
            let e, t;
            super( (n, r) => {
                e = n,
                t = r
            }
            ),
            P(this, `_state`, `initial`),
            P(this, `resolve`),
            P(this, `reject`),
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
    Ox.prototype.constructor = Promise,
    O !== void 0 && O.scheduler && (`yield`in O.scheduler,
    `postTask`in O.scheduler,
    `isInputPending`in O.scheduler),
    Au(`task-queue`),
    kx = `Variable`,
    Ax = `BI;`,
    jx = class {
        constructor() {
            P(this, `name`, `builtIn`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map),
            P(this, `assetByKey`, new Map)
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
                  , l = Lu(n)
                  , u = {
                    assetKey: n.key,
                    family: i,
                    selector: this.createSelector(r, c, e.font.fontVersion),
                    variant: c,
                    file: l,
                    hasOpenTypeFeatures: Bu(a),
                    variationAxes: Vu(o),
                    category: e.font.fontCategory,
                    weight: Wu(c),
                    style: Ku(c),
                    cssFamilyName: Ru(r, s)
                };
                i.fonts.push(u),
                this.assetByKey.set(n.key, n),
                t.push(u)
            }
            for (let e of this.fontFamilies)
                e.fonts.sort( (e, t) => {
                    let n = Wu(e.variant)
                      , r = Wu(t.variant);
                    return !n || !r ? 1 : n - r
                }
                );
            return t
        }
        static parseVariant(e) {
            let t = Gu(e)
              , n = Mx[t]
              , r = Ku(e);
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
            z(e.assetKey, `Font must have an asset key`);
            let t = this.assetByKey.get(e.assetKey)
              , n = t?.properties?.font?.openTypeData;
            return Bu(n) ? n?.map(e => {
                if (Hu(e))
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
            return `${Ax}${e}/${t}/${n}`
        }
        parseSelector(e) {
            if (!e.startsWith(Ax))
                return null;
            let[t,n] = e.split(Ax);
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
    Mx = {
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
    Nx = wc(`custom-font-source`),
    Px = `CUSTOM;`,
    Fx = `CUSTOMV2;`,
    Ix = class e {
        constructor() {
            P(this, `name`, `custom`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map),
            P(this, `assetsByKey`, new Map)
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
                  , a = td(r.properties)
                  , o = this.createFontFamily(a)
                  , s = r.properties?.font.openTypeData
                  , c = i ? `variable` : this.inferVariantName(a)
                  , l = Lu(r)
                  , u = e.createLegacySelector(a)
                  , {family: d, variant: f} = nd(r.properties.font)
                  , p = e.createSelector(d, f)
                  , m = {
                    assetKey: r.key,
                    family: o,
                    selector: u,
                    variant: c,
                    file: l,
                    hasOpenTypeFeatures: Bu(s),
                    variationAxes: Vu(t),
                    owner: ad(r),
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
                let {family: t, variant: i, weight: a, style: o} = nd(n.properties.font)
                  , s = n.properties.font.variationAxes
                  , c = Array.isArray(s)
                  , l = n.properties.font.openTypeData
                  , u = Lu(n)
                  , d = ad(n)
                  , f = td(n.properties)
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
                    hasOpenTypeFeatures: Bu(l),
                    variationAxes: Vu(s),
                    owner: d,
                    alternativeSelectors: {
                        [p]: {
                            variant: c ? `variable` : this.inferVariantName(f),
                            cssFamilyName: e.cssFontFamilyFromSelector(p)
                        }
                    },
                    cssFamilyName: e.cssFontFamilyFromSelector(h)
                }
                  , _ = ed(m.fonts, g);
                if (_?.projectDuplicate)
                    g.owner === `project` && (m.fonts[_.index] = g,
                    r[h] = g);
                else if (_) {
                    Nx.warn(`Duplicate font found for:`, g, `with existing font:`, _.existingFont);
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
                e.fonts.length > 0 && id(e);
            return Object.values(r)
        }
        static createSelector(e, t) {
            return `${Fx}${e}${t ? ` ${t}` : ``}`
        }
        static createLegacySelector(e) {
            return `${Px}${e}`
        }
        static cssFontFamilyFromSelector(e) {
            return z(Zu(e), `Selector must be a custom font selector`),
            $u(e) ? e.slice(Px.length) : e.slice(Fx.length)
        }
        isValidCustomFontAsset(e) {
            return !e.mimeType.startsWith(`font/`) || e.properties?.kind !== `font` || !e.properties.font ? !1 : `fontFamily`in e.properties.font
        }
        getOpenTypeFeatures(e) {
            z(e.assetKey, `Font must have an asset key`);
            let t = this.assetsByKey.get(e.assetKey)
              , n = t?.properties?.font?.openTypeData;
            return Bu(n) ? n?.map(e => {
                if (Hu(e))
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
    Lx = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`],
    Rx = `FS;`,
    zx = {
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
    Bx = Object.keys(zx),
    Vx = ( () => RegExp(`^(?:${[...Bx, `italic`, `variable`].join(`|`)})`, `u`))(),
    Hx = class e {
        constructor() {
            P(this, `name`, `fontshare`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map)
        }
        getFontFamilyByName(e) {
            return this.byFamilyName.get(e) ?? null
        }
        static parseVariant(e) {
            let t = e.toLowerCase().split(` `)
              , n = Bx.find(e => t.includes(e))
              , r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
            return {
                weight: n && zx[n] || 400,
                style: r === `italic` ? r : `normal`
            }
        }
        parseSelector(e) {
            if (!e.startsWith(Rx))
                return null;
            let t = e.split(`-`);
            if (t.length !== 2)
                return null;
            let[n,r] = t;
            return !n || !r ? null : {
                name: n.replace(Rx, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`)
            }
        }
        static createSelector(e, t) {
            return `${Rx}${e}-${t.toLowerCase()}`
        }
        static createMetadataSelector(e) {
            return `${Rx}${e}`
        }
        addFontFamily(e) {
            this.fontFamilies.push(e),
            this.byFamilyName.set(e.name, e)
        }
        async importFonts(t, n) {
            this.fontFamilies.length = 0,
            this.byFamilyName.clear();
            let r = await od(`fontshare`)
              , i = [];
            for (let a of t) {
                let t = a.font_styles.filter(e => {
                    let t = e.name.toLowerCase();
                    return !(!Vx.exec(t) || t.split(` `).includes(`wide`))
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
                    let {variantBold: n, variantBoldItalic: r, variantItalic: o, variantVariable: c, variantVariableItalic: u} = qu(e, t)
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
                        category: ud(a.category),
                        hasOpenTypeFeatures: d,
                        variationAxes: e.isVariable ? s : void 0,
                        cssFamilyName: Ru(l.name, e.isVariable)
                    };
                    l.fonts.push(f),
                    i.push(f)
                }
            }
            return i
        }
        async getOpenTypeFeatures(t) {
            let n = await sd(`fontshare`)
              , r = e.createMetadataSelector(t.family.name);
            return n[r]
        }
    }
    ,
    Ux = `Inter`,
    Wx = `FR;`,
    Gx = {
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
    Kx = class e {
        constructor() {
            P(this, `name`, `framer`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map)
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
            if (!e.startsWith(Wx) && !e.startsWith(Ux))
                return null;
            let[t,n=``] = e.split(`-`);
            if (!t)
                return null;
            let r = n.includes(`Italic`) ? `italic` : `normal`
              , i = n.replace(`Italic`, ``)
              , a = i && Gx[i] || 400;
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
            return `${Wx}${e}`
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
            let n = await sd(`framer`)
              , r = e.createMetadataSelector(t.family.name);
            return n[r]
        }
    }
    ,
    qx = `GF;`,
    Jx = class e {
        constructor() {
            P(this, `name`, `google`),
            P(this, `fontFamilies`, []),
            P(this, `byFamilyName`, new Map)
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
            if (!e.startsWith(qx))
                return null;
            let t = e.includes(`-variable-`)
              , n = t ? e.split(`-variable-`) : e.split(`-`);
            if (n.length !== 2)
                return null;
            let[r,i] = n;
            return !r || !i ? null : {
                name: r.replace(qx, ``),
                variant: i,
                source: this.name,
                isVariable: t
            }
        }
        static createSelector(e, t, n) {
            return `${qx}${e}-${n ? `variable-` : ``}${t}`
        }
        static createMetadataSelector(e) {
            return `${qx}${e}`
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
            let i = await od(`google`)
              , a = []
              , o = fd(t, e => e.family)
              , s = fd(n, e => e.family);
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
                  , h = m.filter(_u)
                  , g = e.createMetadataSelector(t)
                  , _ = i[g];
                for (let e of m) {
                    let {weight: t, style: r, selector: i, googleFontsVariantName: o} = e
                      , {variantBold: s, variantItalic: l, variantBoldItalic: u, variantVariable: d, variantVariableItalic: f} = (_u(e) ? qu(e, h) : void 0) ?? {}
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
                        category: dd(n.category),
                        file: e.file?.replace(`http://`, `https://`),
                        variationAxes: e.isVariable ? p : void 0,
                        hasOpenTypeFeatures: _,
                        cssFamilyName: Ru(c.name, e.isVariable)
                    };
                    c.fonts.push(m),
                    a.push(m)
                }
            }
            return a
        }
        async getOpenTypeFeatures(t) {
            let n = await sd(`google`)
              , r = e.createMetadataSelector(t.family.name);
            return n[r]
        }
    }
    ,
    Yx = ge(Df(), 1),
    Xx = 5e3,
    Zx = 3,
    Qx = class extends Error {
        constructor(e) {
            super(e),
            this.name = `FontLoadingError`
        }
    }
    ,
    $x = new Map,
    eS = new Map,
    tS = (e, t) => pd(e, t),
    nS = {
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
    rS = class {
        constructor() {
            P(this, `enabled`, !1),
            P(this, `bySelector`, new Qb),
            P(this, `loadedSelectors`, new Set),
            P(this, `getGoogleFontsListPromise`),
            P(this, `getFontshareFontsListPromise`),
            P(this, `getBuiltInFontsListPromise`),
            P(this, `customFontsImportPromise`, new Promise(e => {
                this.resolveCustomFontsImportPromise = e
            }
            )),
            P(this, `local`),
            P(this, `google`),
            P(this, `fontshare`),
            P(this, `builtIn`),
            P(this, `framer`),
            P(this, `custom`),
            P(this, `bySelectorValuesCache`),
            P(this, `testing`, {
                addFont: this.addFont.bind(this)
            }),
            this.local = new Xb,
            this.google = new Jx,
            this.fontshare = new Hx,
            this.framer = new Kx,
            this.custom = new Ix,
            this.builtIn = new jx,
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
                let {staticFonts: e, variableFonts: t} = await X.fetchGoogleFontsList()
                  , n = await hd(`google`);
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
                this.getFontshareFontsListPromise = X.fetchFontshareFontsList();
                let e = await this.getFontshareFontsListPromise
                  , t = await hd(`fontshare`);
                for (let n of await this.fontshare.importFonts(e, t))
                    this.addFont(n)
            }
            return this.getFontshareFontsListPromise
        }
        async importBuiltInFonts() {
            if (!this.getBuiltInFontsListPromise) {
                this.getBuiltInFontsListPromise = X.fetchBuiltInFontsList();
                let e = await this.getBuiltInFontsListPromise;
                for (let t of await this.builtIn.importFonts(e))
                    this.addFont(t)
            }
            return this.getBuiltInFontsListPromise
        }
        importFramerFonts(e) {
            let t = hd(`framer`);
            this.framer.importFonts(e, t).forEach(e => {
                this.addFont(e)
            }
            )
        }
        importCustomFonts(e, t) {
            this.bySelector.forEach( (e, t) => {
                Zu(t) && this.bySelector.delete(t)
            }
            );
            let n = this.custom.importFonts(e, t);
            for (let e of n)
                this.addFont(e);
            n.length > 0 && this.resolveCustomFontsImportPromise()
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
                let e = Jx.parseVariant(n.variant);
                if (_u(e))
                    return {
                        style: e.style,
                        weight: e.weight,
                        variant: n.variant,
                        cssFamilyName: zu(n, `google`),
                        source: `google`,
                        category: void 0
                    }
            }
            let r = this.fontshare.parseSelector(e);
            if (r) {
                let e = Hx.parseVariant(r.variant);
                if (_u(e))
                    return {
                        style: e.style,
                        weight: e.weight,
                        variant: r.variant,
                        cssFamilyName: zu(r, `fontshare`),
                        source: `fontshare`,
                        category: void 0
                    }
            }
            let i = this.builtIn.parseSelector(e);
            if (i) {
                let e = jx.parseVariant(i.variant);
                if (_u(e))
                    return {
                        style: e.style,
                        weight: e.weight,
                        variant: i.variant,
                        cssFamilyName: zu(i, `builtIn`),
                        source: `builtIn`,
                        category: void 0
                    }
            }
            return Kx.getDraftFontPropertiesBySelector(e) || null
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
              , i = Xu(t);
            switch (r) {
            case `local`:
                return this.loadedSelectors.add(e),
                1;
            case `framer`:
                if (hg() || await md(t.family.name, t.style, t.weight),
                i) {
                    if (!t.file)
                        return Promise.reject(`Unable to load font: ${e}`);
                    await tS({
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
                return t.file ? (await tS({
                    family: n,
                    url: t.file,
                    weight: t.weight,
                    style: t.style
                }, document),
                this.loadedSelectors.add(e),
                1) : Promise.reject(`Unable to load font: ${e}`);
            default:
                B(r)
            }
        }
        async loadFontsFromSelectors(e) {
            if (!this.enabled)
                return [];
            let t = [];
            e.some(e => e.startsWith(Rx)) && t.push(this.importFontshareFonts().catch(e => {
                Jn(`Failed to load Fontshare fonts:`, e)
            }
            )),
            e.some(e => e.startsWith(qx)) && t.push(this.importGoogleFonts().catch(e => {
                Jn(`Failed to load Google fonts:`, e)
            }
            )),
            e.some(e => e.startsWith(Ax)) && t.push(this.importBuiltInFonts().catch(e => {
                Jn(`Failed to load built-in fonts:`, e)
            }
            )),
            e.some(Zu) && t.push(this.customFontsImportPromise.catch(e => {
                Jn(`Failed to load custom fonts:`, e)
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
            let n = e.filter(e => !iS.loadedSelectors.has(e));
            n.length !== 0 && (await iS.loadWebFontsFromSelectors(n),
            n.every(e => iS.loadedSelectors.has(e)) && t && t())
        }
        async loadWebFontsFromSelectors(e) {
            return this.loadFontsFromSelectors(e)
        }
        get defaultFont() {
            let e = this.getFontBySelector(`Inter`);
            return z(e, `Can’t find Inter font`),
            e
        }
    }
    ,
    iS = new rS,
    aS = [512, 1024, 2048, 4096],
    oS = ( () => ({
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
    sS = {
        opacity: 0
    },
    cS = {
        opacity: 1
    },
    lS = Ad(d.forwardRef(function(e, t) {
        let {background: n, children: r, alt: i, draggable: a, fitImageDimension: o, style: s, ...c} = e
          , l = {
            ...s
        }
          , u = T( () => Ji(n), [n])
          , [f,p] = ne();
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
        let h = Yi(e.as);
        return ee(h, {
            ...c,
            style: l,
            ref: t,
            children: [n && x(Ui, {
                image: n,
                alt: i,
                draggable: a
            }), r]
        })
    })),
    dS = ( () => !cg() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)(),
    fS = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi,
    pS = `{{ text-placeholder }}`,
    mS = `rich-text-wrapper`,
    hS = s(function(e, t) {
        let {id: n, name: r, html: i, htmlFromDesign: a, text: o, textFromDesign: s, fonts: c=[], width: l, height: u, left: d, right: f, top: m, bottom: h, center: g, className: _, stylesPresetsClassName: v, visible: y=!0, opacity: b, rotation: C=0, verticalAlignment: E=`top`, isEditable: ee=!1, environment: O=q.current, withExternalLayout: te=!1, positionSticky: ne, positionStickyTop: k, positionStickyRight: re, positionStickyBottom: ie, positionStickyLeft: ae, __htmlStructure: oe, __fromCanvasComponent: se=!1, _forwardedOverrideId: ce, _forwardedOverrides: le, _usesDOMRect: ue, children: de, ...fe} = e
          , A = ui()
          , pe = ta(e)
          , me = S(null)
          , j = t ?? me
          , {navigate: M, getRoute: N} = rt()
          , he = at();
        Et(e.preload ?? []),
        oa(e, j);
        let P = w(yg)
          , F = bs()
          , ge = o
          , _e = ce ?? n;
        if (_e && le) {
            let e = le[_e];
            typeof e == `string` && (ge = e)
        }
        let ve = ``;
        if (ge) {
            let e = Md(ge);
            ve = oe ? oe.replace(pS, e) : `<p>${e}</p>`
        } else if (i)
            ve = i;
        else if (s) {
            let e = Md(s);
            ve = oe ? oe.replace(pS, e) : `<p>${e}</p>`
        } else
            a && (ve = a);
        let ye = Us()
          , be = T( () => F || !N || !he ? ve : Nd(ve, N, he, ye), [ve, N, he, ye]);
        if (D( () => {
            let e = j.current;
            if (e === null)
                return;
            function t(e) {
                let t = Ps(e.target, j.current);
                e.metaKey || !M || !t || t.getAttribute(`target`) === `_blank` || Es(M, t, ye) && e.preventDefault()
            }
            return e.addEventListener(`click`, t),
            () => {
                e.removeEventListener(`click`, t)
            }
        }
        , [M, ye]),
        Id(c, se, j),
        p( () => {
            Ci()
        }
        , []),
        !y)
            return null;
        let xe = ee && O() === q.canvas
          , I = {
            outline: `none`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: Fd(E),
            opacity: xe ? 0 : b,
            flexShrink: 0
        }
          , Se = q.hasRestrictions()
          , Ce = si(e, A || 0, !1)
          , we = ue && (l === `auto` || u === `auto`)
          , Te = e.transformTemplate || !Ce || !Se || se || we ? e.transformTemplate ?? ea(g) : void 0;
        if (!te) {
            if (Ce && Se && !we) {
                let e = om.getNumber(C).toFixed(4);
                I.transform = `translate(${Ce.x}px, ${Ce.y}px) rotate(${e}deg)`,
                I.width = Ce.width,
                I.minWidth = Ce.width,
                I.height = Ce.height
            } else
                I.left = d,
                I.right = f,
                I.top = m,
                I.bottom = h,
                I.width = l,
                I.height = u,
                I.rotate = C;
            ne ? (!F || P) && (I.position = `sticky`,
            I.willChange = `transform`,
            I.zIndex = 1,
            I.top = k,
            I.right = re,
            I.bottom = ie,
            I.left = ae) : F && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`)
        }
        return Mo(e, I),
        ko(e, I),
        Object.assign(I, e.style),
        x(Ee.div, {
            id: n,
            ref: j,
            ...fe,
            style: I,
            layoutId: pe,
            "data-framer-name": r,
            "data-framer-component-type": `DeprecatedRichText`,
            "data-center": g,
            className: Po(_, v, mS),
            transformTemplate: Te,
            dangerouslySetInnerHTML: {
                __html: be
            }
        })
    }),
    gS = {
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
    _S = ( () => RegExp(`\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`, `gu`))(),
    vS = s(function(e, t) {
        return x(`svg`, {
            ...e,
            ref: t,
            children: e.children
        })
    }),
    yS = Ee.create(vS),
    bS = s(function({viewBoxScale: e, viewBox: t, children: n, ...r}, i) {
        return x(yS, {
            ...r,
            ref: i,
            viewBox: t,
            children: x(Ee.foreignObject, {
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
    xS = [],
    SS = `RichTextContainer`,
    CS = s(function(e, t) {
        let {__fromCanvasComponent: n=!1, _forwardedOverrideId: r, _forwardedOverrides: i, _usesDOMRect: a, anchorLinkOffsetY: o, as: s, bottom: c, center: l, children: u, environment: d=q.current, fonts: f=xS, height: m, isEditable: h=!1, left: g, name: _, opacity: v, positionSticky: y, positionStickyBottom: b, positionStickyLeft: C, positionStickyRight: E, positionStickyTop: ee, right: D, rotation: O=0, style: te, _initialStyle: ne, stylesPresetsClassNames: k, text: re, top: ie, verticalAlignment: ae=`top`, visible: oe=!0, width: se, withExternalLayout: ce=!1, viewBox: le, viewBoxScale: ue=1, effect: de, ...fe} = e
          , A = ui()
          , pe = bs()
          , me = w(yg)
          , j = ta(e)
          , M = S(null)
          , N = t ?? M;
        oa(e, N),
        Id(f, n, N),
        p( () => {
            Ci()
        }
        , []);
        let he = Gd(de, N)
          , P = T( () => {
            if (u)
                return Qd(u, k, re, o, void 0, he.getTokenizer())
        }
        , [u, k, re, o, he]);
        if (!oe)
            return null;
        let F = {
            opacity: h && d() === q.canvas ? 0 : v
        }
          , ge = Fd(ae);
        ge !== $m.justifyContent && (F.justifyContent = ge);
        let _e = {}
          , ve = q.hasRestrictions()
          , ye = si(e, A || 0, !1)
          , be = a && (se === `auto` || m === `auto`)
          , xe = e.transformTemplate || !ye || !ve || n || be ? e.transformTemplate ?? ea(l) : void 0;
        ce || (ye && ve && !be ? (_e.x = ye.x + (ut(te?.x) ? te.x : 0),
        _e.y = ye.y + (ut(te?.y) ? te.y : 0),
        F.rotate = om.getNumber(O),
        F.width = ye.width,
        F.minWidth = ye.width,
        F.height = ye.height) : (F.left = g,
        F.right = D,
        F.top = ie,
        F.bottom = c,
        F.width = se,
        F.height = m,
        F.rotate = O),
        y ? (!pe || me) && (F.position = `sticky`,
        F.willChange = `transform`,
        F.zIndex = 1,
        F.top = ee,
        F.right = E,
        F.bottom = b,
        F.left = C) : pe && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`)),
        Mo(e, F),
        ko(e, F),
        Object.assign(F, ne, te, _e),
        j && (fe.layout = `preserve-aspect`);
        let I = Yi(e.as)
          , Se = fe[`data-framer-name`] ?? _;
        return L(e.viewBox) ? e.as === void 0 ? x(bS, {
            ...fe,
            ref: N,
            style: F,
            layoutId: j,
            viewBox: le,
            viewBoxScale: ue,
            transformTemplate: xe,
            "data-framer-name": Se,
            "data-framer-component-type": SS,
            children: P
        }) : x(I, {
            ...fe,
            ref: N,
            style: F,
            layoutId: j,
            transformTemplate: xe,
            "data-framer-name": Se,
            "data-framer-component-type": SS,
            children: x(bS, {
                viewBox: le,
                viewBoxScale: ue,
                style: {
                    width: `100%`,
                    height: `100%`
                },
                children: P
            })
        }) : x(I, {
            ...fe,
            ref: N,
            style: F,
            layoutId: j,
            transformTemplate: xe,
            "data-framer-name": Se,
            "data-framer-component-type": SS,
            children: P
        })
    }),
    wS = s(function({children: e, html: t, htmlFromDesign: n, ...r}, a) {
        let o = t || e || n;
        if (L(o)) {
            !r.stylesPresetsClassName && R(r.stylesPresetsClassNames) && (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = {
                [L(t) ? `html` : `htmlFromDesign`]: o
            };
            return x(hS, {
                ...r,
                ...e,
                ref: a
            })
        }
        if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let[e,t,n,i,a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0 ? console.warn(`Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`) : r.stylesPresetsClassNames = {
                h1: e,
                h2: t,
                h3: n,
                p: i,
                a
            }
        }
        return x(CS, {
            ...r,
            ref: a,
            children: i(o) ? o : void 0
        })
    }),
    TS = ag(),
    ES = class {
        constructor(e, t, n, r, i=0) {
            this.id = e,
            this.svg = t,
            this.innerHTML = n,
            this.viewBox = r,
            this.count = i
        }
    }
    ,
    DS = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`,
    OS = class {
        constructor() {
            P(this, `entries`, new Map),
            P(this, `vectorSetItems`, new Map)
        }
        debugGetEntries() {
            return this.entries
        }
        subscribe(e, t, n, r) {
            if (!e || e === ``)
                return ``;
            let i = this.entries.get(e);
            if (!i) {
                n ||= `svg${String(Tg(e))}_${String(e.length)}`;
                let a = e, o, s = tf(e);
                s && (t && nf(s, n),
                s.id = n,
                o = lf(s),
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
            TS && (document == null ? void 0 : document.getElementById(e.id))?.remove()
        }
        getOrCreateTemplateContainer() {
            let e = document.getElementById(`svg-templates`);
            if (e)
                return e;
            let t = document.createElement(`div`);
            return t.id = `svg-templates`,
            t.ariaHidden = `true`,
            t.style.cssText = DS,
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
            TS && this.maybeAppendTemplate(t, e);
            let i = n ? `0 0 ${n.width} ${n.height}` : void 0
              , a = i ? ` viewBox="${i}"` : ``
              , o = `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`;
            return new ES(t,e,o,i)
        }
        template(e, t) {
            return this.vectorSetItems.get(e) || (this.vectorSetItems.set(e, {
                svg: t,
                count: 0
            }),
            !TS) || this.maybeAppendTemplate(e, t),
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
                        TS && ((t = document == null ? void 0 : document.getElementById(e)) == null || t.remove()))
                    }
                    , 5e3))
                }
        }
        clear() {
            this.entries.clear()
        }
        generateTemplates() {
            let e = [];
            return e.push(`<div id="svg-templates" style="${DS}" aria-hidden="true">`),
            this.entries.forEach(t => e.push(t.svg)),
            this.vectorSetItems.forEach(t => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
        }
    }
    ,
    kS = new OS,
    AS = ( () => ({
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
    jS = 1e3,
    MS = `explicitInter`,
    ce.prototype.addChild = function({transformer: e=e => e}) {
        let t = De(e(this.get()));
        return this.onChange(n => t.set(e(n))),
        t
    }
}
));
export {K_ as ComponentViewportProvider, iv as Container, Wm as ControlType, Ur as ErrorPlaceholder, b_ as GeneratedComponentContext, Tv as GracefullyDegradingErrorBoundary, lS as Image3, $h as LibraryFeaturesProvider, Vv as Link, zt as PageEffectsProvider, Cc as PageRoot, P_ as PropertyOverrides2, Rb as QueryEngine, q as RenderTarget, py as ResolveLinks, wS as RichText, av as SmartComponentScopedContainer, df as addFonts, Ai as addPropertyControls, Bb as cmsDataCollector, Hh as combinedCSSRulesForPreview, D_ as cssCollector, Po as cx, iS as fontStore, H_ as framerAppearAnimationScriptKey, z_ as framerAppearEffects, V_ as framerAppearIdKey, B_ as framerAppearTransformTemplateToken, w_ as framerCSSMarker, ff as getFonts, pf as getFontsFromSharedStyle, uf as getLoadingLazyAtYPosition, ji as getPropertyControls, nu as getWhereExpressionFromPathVariables, jn as inferInitialRouteFromPath, NS as init_framer_BEVHCO6E, vi as installFlexboxGapWorkaroundIfNeeded, He as lazy, Cn as markHydrationStart, gv as nestedLinksCollector, Bn as patchRoutesForABTesting, Ql as removeHiddenBreakpointLayersV2, kS as sharedSVGManager, yn as turnOffReactEventHandling, Wl as useActiveVariantCallback, Go as useComponentViewport, at as useCurrentRoute, _s as useCustomCursors, Jl as useHydratedBreakpointVariants, Va as useIsInCurrentNavigationTarget, bs as useIsOnFramerCanvas, vn as useLocaleInfo, Gn as useMetadata, rt as useRouter, gu as useVariantState, T_ as withCSS, xf as withPerformanceMarks, Tt as yieldToMain};
//# sourceMappingURL=framer.BBkeV5vw.mjs.map
