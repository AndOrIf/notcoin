import {__esmMin as e} from "./rolldown-runtime.DvaNjN55.mjs";
import {X as t, Y as n, ae as r, init_jsx_runtime as i, init_npm_react_18_2 as a, init_ssg_sandbox_shims as o, p as s, pe as c, se as l, te as u, u as d, ue as f, window as p, ye as m} from "./react.D_-swqe5.mjs";
import {LayoutGroup as ee, init_framer_motion_H2BOCUWP as h, isMotionValue as g, motion as te, useInView as _} from "./motion.CwyU5xLf.mjs";
import {ComponentViewportProvider as v, Container as y, ControlType as b, GeneratedComponentContext as x, PropertyOverrides2 as S, RenderTarget as ne, addFonts as C, addPropertyControls as w, cx as T, getFonts as E, init_framer_7VXLDRS7 as D, useComponentViewport as re, useCustomCursors as ie, useHydratedBreakpointVariants as ae, useIsInCurrentNavigationTarget as oe, useIsOnFramerCanvas as O, useLocaleInfo as se, useMetadata as k, withCSS as A} from "./framer.mjs";
import {borderRadiusControl as j, containerStyles as M, defaultEvents as N, emptyStateStyle as ce, init_colorFromToken as P, init_constants as F, init_isBrowser as I, init_isMotionValue as L, init_propUtils as R, init_useAutoMotionValue as z, init_useConstant as B, init_useControlledState as V, init_useFontControls as H, init_useOnChange as U, init_useOnNavigationTargetChange as le, init_useRenderTarget as W, init_useUniqueClassName as ue, init_variantUtils as de, useIsBrowserSafari as fe, useIsOnCanvas as pe, useOnEnter as me, useOnExit as he, useRadius as ge, useRenderTarget as _e} from "./propUtils.DHiA7p22.mjs";
import {init_kY9xcxt8P as ve, metadata as ye} from "./kY9xcxt8P.VTKATQO1.mjs";
var be = e(( () => {
    F(),
    le(),
    B(),
    P(),
    L(),
    ue(),
    de(),
    I(),
    U(),
    z(),
    H(),
    W(),
    V(),
    R()
}
));
function xe(e) {
    let {width: t, height: n, topLeft: r, topRight: i, bottomRight: a, bottomLeft: o, id: s, children: c, ...l} = e;
    return l
}
function G(e) {
    let t = xe(e);
    return s(ke, {
        ...t
    })
}
function Se(e) {
    let t = oe()
      , n = c(!1)
      , r = c(!1)
      , i = u(t => {
        if (!e.current)
            return;
        let n = (t === 1 ? .999 : t) * e.current.duration
          , r = Math.abs(e.current.currentTime - n) < .1;
        e.current.duration > 0 && !r && (e.current.currentTime = n)
    }
    , [])
      , a = u( () => {
        let i = e.current;
        i && (i.preload = `auto`,
        !(i.currentTime > 0 && i.onplaying && !i.paused && !i.ended && i.readyState >= i.HAVE_CURRENT_DATA) && i && !n.current && t && (n.current = !0,
        r.current = !0,
        i.play().catch(e => {}
        ).finally( () => n.current = !1)))
    }
    , [])
      , o = u( () => {
        !e.current || n.current || (e.current.pause(),
        r.current = !1)
    }
    , []);
    return {
        play: a,
        pause: o,
        setProgress: i,
        isPlaying: r
    }
}
function Ce({playingProp: e, muted: t, loop: n, playsinline: r, controls: i}) {
    let[a] = m( () => e)
      , [o,s] = m(!1);
    e !== a && !o && s(!0);
    let c = a && t && n && r && !i && !o, l;
    return l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`,
    l
}
function we(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function Te(e) {
    return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(we).join(` `)
}
var Ee, De, Oe, ke, K, Ae = e(( () => {
    i(),
    D(),
    h(),
    be(),
    a(),
    (function(e) {
        e.Fill = `fill`,
        e.Contain = `contain`,
        e.Cover = `cover`,
        e.None = `none`,
        e.ScaleDown = `scale-down`
    }
    )(Ee ||= {}),
    (function(e) {
        e.Video = `Upload`,
        e.Url = `URL`
    }
    )(De ||= {}),
    Oe = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
    ke = t(function(e) {
        let {srcType: t=`URL`, srcUrl: n, srcFile: r=``, posterEnabled: i=!1, controls: a=!1, playing: o=!0, loop: u=!0, muted: d=!0, playsinline: p=!0, restartOnEnter: m=!1, objectFit: ee=`cover`, backgroundColor: h=`rgba(0,0,0,0)`, radius: te=0, volume: v=25, startTime: y=0, poster: b, playing: x, progress: S, onSeeked: C, onPause: w, onPlay: T, onEnd: E, onClick: D, onMouseEnter: re, onMouseLeave: ie, onMouseDown: ae, onMouseUp: oe} = e
          , O = c()
          , se = fe()
          , k = c(null)
          , A = c(null)
          , j = pe()
          , M = _e()
          , N = j || M === ne.export
          , ce = ge(e)
          , P = N ? `no-autoplay` : Ce({
            playingProp: x,
            muted: d,
            loop: u,
            playsinline: p,
            controls: a
        })
          , F = N ? !0 : _(O)
          , I = N ? !1 : _(O, {
            margin: `10%`,
            once: !0
        })
          , L = y === 100 ? 99.9 : y
          , {play: R, pause: z, setProgress: B, isPlaying: V} = Se(O);
        f( () => {
            N || P !== `on-viewport` && (x ? R() : z())
        }
        , [P, x]),
        f( () => {
            N || (F && x && P !== `no-autoplay` && R(),
            P === `on-viewport` && z())
        }
        , [P, F, x]),
        f( () => {
            !j || b || i || L || !O.current || (O.current.currentTime = .01)
        }
        , [i, b, L]);
        let H = c(!1);
        f( () => {
            if (!H.current) {
                H.current = !0;
                return
            }
            let e = g(S) ? S.get() : (S ?? 0) * .01;
            B((e ?? 0) || (L ?? 0) / 100)
        }
        , [L, r, n, S]),
        f( () => {
            if (g(S))
                return S.on(`change`, e => B(e))
        }
        , [S]),
        me( () => {
            k.current !== null && O.current && (!A && u || !k.current) && R()
        }
        ),
        he( () => {
            O.current && (A.current = O.current.ended,
            k.current = O.current.paused,
            z())
        }
        );
        let U = l( () => {
            if (t === `URL`)
                return n + ``;
            if (t === `Upload`)
                return r + ``
        }
        , [t, r, n, L]);
        return f( () => {
            se && O.current && P === `on-mount` && setTimeout( () => R(), 50)
        }
        , []),
        f( () => {
            O.current && !d && (O.current.volume = (v ?? 0) / 100)
        }
        , [v]),
        s(`video`, {
            onClick: D,
            onMouseEnter: re,
            onMouseLeave: ie,
            onMouseDown: ae,
            onMouseUp: oe,
            src: U,
            loop: u,
            ref: O,
            onSeeked: e => C?.(e),
            onPause: e => w?.(e),
            onPlay: e => T?.(e),
            onEnded: e => E?.(e),
            autoPlay: V.current || P === `on-mount` || x && P === `on-viewport` && F,
            preload: V.current ? `auto` : N && !b ? `metadata` : P !== `on-mount` && !I ? `none` : `metadata`,
            poster: i && !r && n === Oe ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg` : i && b ? b : void 0,
            onLoadedData: () => {
                let e = O.current;
                e && (e.currentTime < .3 && L > 0 && B((L ?? 0) * .01),
                (V.current || P === `on-mount` || x && P === `on-viewport` && F) && R())
            }
            ,
            controls: a,
            muted: N ? !0 : d,
            playsInline: p,
            style: {
                cursor: D ? `pointer` : `auto`,
                width: `100%`,
                height: `100%`,
                borderRadius: ce,
                display: `block`,
                objectFit: ee,
                backgroundColor: h,
                objectPosition: `50% 50%`
            }
        })
    }),
    G.displayName = `Video`,
    K = [`cover`, `fill`, `contain`, `scale-down`, `none`],
    w(G, {
        srcType: {
            type: b.Enum,
            displaySegmentedControl: !0,
            title: `Source`,
            options: [`URL`, `Upload`]
        },
        srcUrl: {
            type: b.String,
            title: `URL`,
            defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
            hidden(e) {
                return e.srcType === `Upload`
            }
        },
        srcFile: {
            type: b.File,
            title: `File`,
            allowedFileTypes: [`mp4`, `webm`],
            hidden(e) {
                return e.srcType === `URL`
            }
        },
        playing: {
            type: b.Boolean,
            title: `Playing`,
            enabledTitle: `Yes`,
            disabledTitle: `No`
        },
        ...j,
        posterEnabled: {
            type: b.Boolean,
            title: `Poster`,
            enabledTitle: `Yes`,
            disabledTitle: `No`
        },
        poster: {
            type: b.Image,
            title: `Image`,
            hidden: ({posterEnabled: e}) => !e,
            description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`
        },
        backgroundColor: {
            type: b.Color,
            title: `Background`,
            defaultValue: `rgba(0,0,0,0)`
        },
        startTime: {
            title: `Start Time`,
            type: b.Number,
            min: 0,
            max: 100,
            step: .1,
            unit: `%`
        },
        loop: {
            type: b.Boolean,
            title: `Loop`,
            enabledTitle: `Yes`,
            disabledTitle: `No`
        },
        objectFit: {
            type: b.Enum,
            title: `Fit`,
            options: K,
            optionTitles: K.map(Te)
        },
        controls: {
            type: b.Boolean,
            title: `Controls`,
            enabledTitle: `Show`,
            disabledTitle: `Hide`,
            defaultValue: !1
        },
        muted: {
            type: b.Boolean,
            title: `Muted`,
            enabledTitle: `Yes`,
            disabledTitle: `No`
        },
        volume: {
            type: b.Number,
            max: 100,
            min: 0,
            unit: `%`,
            hidden: ({muted: e}) => e,
            defaultValue: 25
        },
        onEnd: {
            type: b.EventHandler
        },
        onSeeked: {
            type: b.EventHandler
        },
        onPause: {
            type: b.EventHandler
        },
        onPlay: {
            type: b.EventHandler
        },
        ...N
    })
}
)), je = e(( () => {
    F(),
    le(),
    B(),
    P(),
    L(),
    ue(),
    de(),
    I(),
    U(),
    z(),
    H(),
    W(),
    V(),
    R()
}
));
function q({type: e, url: t, html: n, zoom: r, radius: i, border: a, style: o={}}) {
    return e === `url` && t ? s(Ne, {
        url: t,
        zoom: r,
        radius: i,
        border: a,
        style: o
    }) : e === `html` && n ? s(Fe, {
        html: n,
        style: o
    }) : s(Me, {
        style: o
    })
}
function Me({style: e}) {
    return s(`div`, {
        style: {
            minHeight: Ve(e),
            ...ce,
            overflow: `hidden`,
            ...e
        },
        children: s(`div`, {
            style: Z,
            children: `To embed a website or widget, add it to the properties\xA0panel.`
        })
    })
}
function Ne({url: e, zoom: t, radius: n, border: r, style: i}) {
    let a = !i.height;
    /[a-z]+:\/\//.test(e) || (e = `https://` + e);
    let o = pe()
      , [c,l] = m(o ? void 0 : !1);
    if (f( () => {
        if (!o)
            return;
        let t = !0;
        l(void 0);
        async function n() {
            let n = await fetch(`https://api.framer.com/functions/check-iframe-url?url=` + encodeURIComponent(e));
            if (n.status == 200) {
                let {isBlocked: e} = await n.json();
                t && l(e)
            } else {
                let e = await n.text();
                console.error(e),
                l(Error(`This site can’t be reached.`))
            }
        }
        return n().catch(e => {
            console.error(e),
            l(e)
        }
        ),
        () => {
            t = !1
        }
    }
    , [e]),
    o && a)
        return s(J, {
            message: `URL embeds do not support auto height.`,
            style: i
        });
    if (!e.startsWith(`https://`))
        return s(J, {
            message: `Unsupported protocol.`,
            style: i
        });
    if (c === void 0)
        return s(Be, {});
    if (c instanceof Error)
        return s(J, {
            message: c.message,
            style: i
        });
    if (c === !0) {
        let t = `Can’t embed ${e} due to its content security policy.`;
        return s(J, {
            message: t,
            style: i
        })
    }
    return s(`iframe`, {
        src: e,
        style: {
            ...Y,
            ...i,
            ...r,
            zoom: t,
            borderRadius: n,
            transformOrigin: `top center`
        },
        loading: `lazy`,
        fetchPriority: o ? `low` : `auto`,
        referrerPolicy: `no-referrer`,
        sandbox: Pe(o)
    })
}
function Pe(e) {
    let t = [`allow-same-origin`, `allow-scripts`];
    return e || t.push(`allow-downloads`, `allow-forms`, `allow-modals`, `allow-orientation-lock`, `allow-pointer-lock`, `allow-popups`, `allow-popups-to-escape-sandbox`, `allow-presentation`, `allow-storage-access-by-user-activation`, `allow-top-navigation-by-user-activation`),
    t.join(` `)
}
function Fe({html: e, ...t}) {
    if (e.includes(`<\/script>`)) {
        let n = e.includes(`</spline-viewer>`)
          , r = e.includes(`<!-- framer-direct-embed -->`);
        return s(n || r ? Le : Ie, {
            html: e,
            ...t
        })
    }
    return s(Re, {
        html: e,
        ...t
    })
}
function Ie({html: e, style: t}) {
    let n = c()
      , [r,i] = m(0);
    f( () => {
        let e = n.current?.contentWindow;
        function t(t) {
            if (t.source !== e)
                return;
            let n = t.data;
            if (typeof n != `object` || !n)
                return;
            let r = n.embedHeight;
            typeof r == `number` && i(r)
        }
        return p.addEventListener(`message`, t),
        e?.postMessage(`getEmbedHeight`, `*`),
        () => {
            p.removeEventListener(`message`, t)
        }
    }
    , []);
    let a = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`
      , o = {
        ...Y,
        ...t
    };
    return t.height || (o.height = r + `px`),
    s(`iframe`, {
        ref: n,
        style: o,
        srcDoc: a
    })
}
function Le({html: e, style: t}) {
    let n = c();
    return f( () => {
        let t = n.current;
        if (t)
            return t.innerHTML = e,
            ze(t),
            () => {
                t.innerHTML = ``
            }
    }
    , [e]),
    s(`div`, {
        ref: n,
        style: {
            ...X,
            ...t
        }
    })
}
function Re({html: e, style: t}) {
    return s(`div`, {
        style: {
            ...X,
            ...t
        },
        dangerouslySetInnerHTML: {
            __html: e
        }
    })
}
function ze(e) {
    if (e instanceof Element && e.tagName === `SCRIPT`) {
        let t = document.createElement(`script`);
        t.text = e.innerHTML;
        for (let {name: n, value: r} of e.attributes)
            t.setAttribute(n, r);
        e.parentElement.replaceChild(t, e)
    } else
        for (let t of e.childNodes)
            ze(t)
}
function Be() {
    return s(`div`, {
        className: `framerInternalUI-componentPlaceholder`,
        style: {
            ...M,
            overflow: `hidden`
        },
        children: s(`div`, {
            style: Z,
            children: `Loading…`
        })
    })
}
function J({message: e, style: t}) {
    return s(`div`, {
        className: `framerInternalUI-errorPlaceholder`,
        style: {
            minHeight: Ve(t),
            ...M,
            overflow: `hidden`,
            ...t
        },
        children: s(`div`, {
            style: Z,
            children: e
        })
    })
}
function Ve(e) {
    if (!e.height)
        return 200
}
var Y, X, Z, He = e(( () => {
    o(),
    i(),
    a(),
    D(),
    je(),
    w(q, {
        type: {
            type: b.Enum,
            defaultValue: `url`,
            displaySegmentedControl: !0,
            options: [`url`, `html`],
            optionTitles: [`URL`, `HTML`]
        },
        url: {
            title: `URL`,
            type: b.String,
            description: `Some websites don’t support embedding.`,
            hidden(e) {
                return e.type !== `url`
            }
        },
        html: {
            title: `HTML`,
            type: b.String,
            displayTextArea: !0,
            hidden(e) {
                return e.type !== `html`
            }
        },
        border: {
            title: `Border`,
            type: b.Border,
            optional: !0,
            hidden(e) {
                return e.type !== `url`
            }
        },
        radius: {
            type: b.BorderRadius,
            title: `Radius`,
            hidden(e) {
                return e.type !== `url`
            }
        },
        zoom: {
            title: `Zoom`,
            defaultValue: 1,
            type: b.Number,
            hidden(e) {
                return e.type !== `url`
            },
            min: .1,
            max: 1,
            step: .1,
            displayStepper: !0
        }
    }),
    Y = {
        width: `100%`,
        height: `100%`,
        border: `none`
    },
    X = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`
    },
    Z = {
        textAlign: `center`,
        minWidth: 140
    }
}
)), Ue, We, Ge, Q, Ke, qe, Je, Ye, $, Xe, Ze;
e(( () => {
    i(),
    D(),
    h(),
    a(),
    Ae(),
    He(),
    ve(),
    Ue = E(G),
    We = E(q),
    Ge = {
        fNHy1H14T: `(max-width: 809.98px)`,
        jlAYS0D_h: `(min-width: 1200px)`,
        oLbYOAPyd: `(min-width: 810px) and (max-width: 1199.98px)`
    },
    Q = `framer-dnObC`,
    Ke = {
        fNHy1H14T: `framer-v-1crqt70`,
        jlAYS0D_h: `framer-v-dz44m5`,
        oLbYOAPyd: `framer-v-1vc0yuw`
    },
    qe = ({value: e}) => O() ? null : s(`style`, {
        dangerouslySetInnerHTML: {
            __html: e
        },
        "data-framer-html-style": ``
    }),
    Je = {
        Desktop: `jlAYS0D_h`,
        Phone: `fNHy1H14T`,
        Tablet: `oLbYOAPyd`
    },
    Ye = ({height: e, id: t, width: n, ...r}) => ({
        ...r,
        variant: Je[r.variant] ?? r.variant ?? `fNHy1H14T`
    }),
    $ = A(n(function(e, t) {
        let n = c(null)
          , i = t ?? n
          , a = r()
          , {activeLocale: o, setLocale: u} = se();
        re();
        let {style: f, className: p, layoutId: m, variant: h, ...g} = Ye(e)
          , _ = l( () => ye({}, o), [o]);
        k(_);
        let[b,ne] = ae(h, Ge, !1)
          , C = T(Q);
        return ie({}),
        s(x.Provider, {
            value: {
                primaryVariantId: `fNHy1H14T`,
                variantClassNames: Ke
            },
            children: d(ee, {
                id: m ?? a,
                children: [s(qe, {
                    value: `html body { background: rgb(0, 0, 0); }`
                }), d(te.div, {
                    ...g,
                    className: T(C, `framer-1crqt70`, p),
                    ref: i,
                    style: {
                        ...f
                    },
                    children: [s(`div`, {
                        className: `framer-ykdg8r`
                    }), s(v, {
                        children: s(y, {
                            className: `framer-cl5tvy-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `liKec5FYx`,
                            scopeId: `kY9xcxt8P`,
                            children: s(S, {
                                breakpoint: b,
                                overrides: {
                                    jlAYS0D_h: {
                                        srcUrl: `https://not.ams3.cdn.digitaloceanspaces.com/probablynothing/desktop_hd/2.mp4`
                                    }
                                },
                                children: s(G, {
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    controls: !1,
                                    height: `100%`,
                                    id: `liKec5FYx`,
                                    isMixedBorderRadius: !1,
                                    layoutId: `liKec5FYx`,
                                    loop: !0,
                                    muted: !0,
                                    objectFit: `cover`,
                                    playing: !0,
                                    posterEnabled: !0,
                                    srcType: `URL`,
                                    srcUrl: `https://not.ams3.cdn.digitaloceanspaces.com/probablynothing/mobile_hd/2.mp4`,
                                    startTime: 0,
                                    style: {
                                        height: `100%`,
                                        width: `100%`
                                    },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    volume: 25,
                                    width: `100%`
                                })
                            })
                        })
                    }), s(v, {
                        children: s(y, {
                            className: `framer-jkd6lj-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `rO6aE_3i4`,
                            scopeId: `kY9xcxt8P`,
                            children: s(S, {
                                breakpoint: b,
                                overrides: {
                                    jlAYS0D_h: {
                                        html: `<iframe
  src="https://player.mux.com/YkF6gsrNSWvgXpkgaEa01s1oPbWz401HxalJl1BBBZkS8?metadata-video-title=probablynothing2&video-title=probablynothing2&autoplay=1"
  style="width: 1px; height: 1px; position: absolute; opacity: 0; pointer-events: none; border: none;"
  allow="encrypted-media; autoplay;"
></iframe>`
                                    }
                                },
                                children: s(q, {
                                    height: `100%`,
                                    html: `<iframe
  src="https://player.mux.com/YkF6gsrNSWvgXpkgaEa01s1oPbWz401HxalJl1BBBZkS8?metadata-video-title=probablynothing2&video-title=probablynothing2&autoplay=1"
  style="width: 1px; height: 1px; position: absolute; opacity: 0; pointer-events: none; border: none;"
  allow="autoplay; encrypted-media;"
></iframe>`,
                                    id: `rO6aE_3i4`,
                                    layoutId: `rO6aE_3i4`,
                                    radius: `0px`,
                                    style: {
                                        height: `100%`,
                                        width: `100%`
                                    },
                                    type: `html`,
                                    url: ``,
                                    width: `100%`,
                                    zoom: 1
                                })
                            })
                        })
                    })]
                }), s(`div`, {
                    id: `overlay`
                })]
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-dnObC.framer-13h6lzf, .framer-dnObC .framer-13h6lzf { display: block; }`, `.framer-dnObC.framer-1crqt70 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 393px; }`, `.framer-dnObC .framer-ykdg8r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-dnObC .framer-cl5tvy-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`, `.framer-dnObC .framer-jkd6lj-container { flex: none; height: 1px; position: relative; width: 1px; }`, `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-dnObC.framer-1crqt70 { width: 810px; } .framer-dnObC .framer-ykdg8r { order: 3; } .framer-dnObC .framer-cl5tvy-container { order: 2; } .framer-dnObC .framer-jkd6lj-container { order: 4; }}`, `@media (min-width: 1200px) { .framer-dnObC.framer-1crqt70 { width: 1200px; }}`], `framer-dnObC`),
    Xe = $,
    $.displayName = `Page`,
    $.defaultProps = {
        height: 801,
        width: 393
    },
    C($, [{
        explicitInter: !0,
        fonts: []
    }, ...Ue, ...We], {
        supportsExplicitInterCodegen: !0
    }),
    Ze = {
        exports: {
            default: {
                type: `reactComponent`,
                name: `FramerkY9xcxt8P`,
                slots: [],
                annotations: {
                    framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"oLbYOAPyd":{"layout":["fixed","auto"]},"jlAYS0D_h":{"layout":["fixed","auto"]}}}`,
                    framerContractVersion: `1`,
                    framerScrollSections: `* @framerResponsiveScreen`,
                    framerIntrinsicWidth: `393`,
                    framerImmutableVariables: `true`,
                    framerIntrinsicHeight: `801`,
                    framerDisplayContentsDiv: `false`,
                    framerAutoSizeImages: `true`,
                    framerComponentViewportWidth: `true`,
                    framerColorSyntax: `true`,
                    framerAcceptsLayoutTemplate: `true`
                }
            },
            Props: {
                type: `tsType`,
                annotations: {
                    framerContractVersion: `1`
                }
            },
            __FramerMetadata__: {
                type: `variable`
            }
        }
    }
}
))();
export {Ze as __FramerMetadata__, Xe as default};
//# sourceMappingURL=7xGvqVTq6WfbVcoilsQAmi0T8Erp7ltAiW53X6KVM-I.C7hDu_xg.mjs.map
