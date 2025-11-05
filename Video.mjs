import {__esmMin as e} from "./rolldown-runtime.DynScBln.mjs";
import {X as t, init_jsx_runtime as n, init_npm_react_18_2 as r, p as i, pe as a, se as o, te as s, ue as c, ye as l} from "./react.lkV_lvYc.mjs";
import {init_framer_motion_H2BOCUWP as u, isMotionValue as d, useInView as f} from "./motion.DHq4p1Q_.mjs";
import {ControlType as p, RenderTarget as ee, addPropertyControls as m, init_framer_7VXLDRS7 as h, useIsInCurrentNavigationTarget as te} from "./framer.B9xl_8nV.mjs";
import {borderRadiusControl as g, defaultEvents as _, init_colorFromToken as ne, init_constants as v, init_isBrowser as y, init_isMotionValue as b, init_propUtils as x, init_useAutoMotionValue as S, init_useConstant as C, init_useControlledState as w, init_useFontControls as T, init_useOnChange as E, init_useOnNavigationTargetChange as D, init_useRenderTarget as O, init_useUniqueClassName as k, init_variantUtils as A, useIsBrowserSafari as re, useIsOnCanvas as j, useOnEnter as M, useOnExit as N, useRadius as P, useRenderTarget as F} from "./propUtils.CC3x3YEY.mjs";
var I = e(( () => {
    v(),
    D(),
    C(),
    ne(),
    b(),
    k(),
    A(),
    y(),
    E(),
    S(),
    T(),
    O(),
    w(),
    x()
}
));
function L(e) {
    let {width: t, height: n, topLeft: r, topRight: i, bottomRight: a, bottomLeft: o, id: s, children: c, ...l} = e;
    return l
}
function R(e) {
    let t = L(e);
    return i(W, {
        ...t
    })
}
function ie(e) {
    let t = te()
      , n = a(!1)
      , r = a(!1)
      , i = s(t => {
        if (!e.current)
            return;
        let n = (t === 1 ? .999 : t) * e.current.duration
          , r = Math.abs(e.current.currentTime - n) < .1;
        e.current.duration > 0 && !r && (e.current.currentTime = n)
    }
    , [])
      , o = s( () => {
        let i = e.current;
        i && (i.preload = `auto`,
        !(i.currentTime > 0 && i.onplaying && !i.paused && !i.ended && i.readyState >= i.HAVE_CURRENT_DATA) && i && !n.current && t && (n.current = !0,
        r.current = !0,
        i.play().catch(e => {}
        ).finally( () => n.current = !1)))
    }
    , [])
      , c = s( () => {
        !e.current || n.current || (e.current.pause(),
        r.current = !1)
    }
    , []);
    return {
        play: o,
        pause: c,
        setProgress: i,
        isPlaying: r
    }
}
function ae({playingProp: e, muted: t, loop: n, playsinline: r, controls: i}) {
    let[a] = l( () => e)
      , [o,s] = l(!1);
    e !== a && !o && s(!0);
    let c = a && t && n && r && !i && !o, u;
    return u = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`,
    u
}
function z(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function B(e) {
    return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(z).join(` `)
}
var V, H, U, W, G, K = e(( () => {
    n(),
    h(),
    u(),
    I(),
    r(),
    (function(e) {
        e.Fill = `fill`,
        e.Contain = `contain`,
        e.Cover = `cover`,
        e.None = `none`,
        e.ScaleDown = `scale-down`
    }
    )(V ||= {}),
    (function(e) {
        e.Video = `Upload`,
        e.Url = `URL`
    }
    )(H ||= {}),
    U = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
    W = t(function(e) {
        let {srcType: t=`URL`, srcUrl: n, srcFile: r=``, posterEnabled: s=!1, controls: l=!1, playing: u=!0, loop: p=!0, muted: m=!0, playsinline: h=!0, restartOnEnter: te=!1, objectFit: g=`cover`, backgroundColor: _=`rgba(0,0,0,0)`, radius: ne=0, volume: v=25, startTime: y=0, poster: b, playing: x, progress: S, onSeeked: C, onPause: w, onPlay: T, onEnd: E, onClick: D, onMouseEnter: O, onMouseLeave: k, onMouseDown: A, onMouseUp: I} = e
          , L = a()
          , R = re()
          , z = a(null)
          , B = a(null)
          , V = j()
          , H = F()
          , W = V || H === ee.export
          , G = P(e)
          , K = W ? `no-autoplay` : ae({
            playingProp: x,
            muted: m,
            loop: p,
            playsinline: h,
            controls: l
        })
          , q = W ? !0 : f(L)
          , oe = W ? !1 : f(L, {
            margin: `10%`,
            once: !0
        })
          , J = y === 100 ? 99.9 : y
          , {play: Y, pause: X, setProgress: Z, isPlaying: Q} = ie(L);
        c( () => {
            W || K !== `on-viewport` && (x ? Y() : X())
        }
        , [K, x]),
        c( () => {
            W || (q && x && K !== `no-autoplay` && Y(),
            K === `on-viewport` && X())
        }
        , [K, q, x]),
        c( () => {
            !V || b || s || J || !L.current || (L.current.currentTime = .01)
        }
        , [s, b, J]);
        let $ = a(!1);
        c( () => {
            if (!$.current) {
                $.current = !0;
                return
            }
            let e = d(S) ? S.get() : (S ?? 0) * .01;
            Z((e ?? 0) || (J ?? 0) / 100)
        }
        , [J, r, n, S]),
        c( () => {
            if (d(S))
                return S.on(`change`, e => Z(e))
        }
        , [S]),
        M( () => {
            z.current !== null && L.current && (!B && p || !z.current) && Y()
        }
        ),
        N( () => {
            L.current && (B.current = L.current.ended,
            z.current = L.current.paused,
            X())
        }
        );
        let se = o( () => {
            if (t === `URL`)
                return n + ``;
            if (t === `Upload`)
                return r + ``
        }
        , [t, r, n, J]);
        return c( () => {
            R && L.current && K === `on-mount` && setTimeout( () => Y(), 50)
        }
        , []),
        c( () => {
            L.current && !m && (L.current.volume = (v ?? 0) / 100)
        }
        , [v]),
        i(`video`, {
            onClick: D,
            onMouseEnter: O,
            onMouseLeave: k,
            onMouseDown: A,
            onMouseUp: I,
            src: se,
            loop: p,
            ref: L,
            onSeeked: e => C?.(e),
            onPause: e => w?.(e),
            onPlay: e => T?.(e),
            onEnded: e => E?.(e),
            autoPlay: Q.current || K === `on-mount` || x && K === `on-viewport` && q,
            preload: Q.current ? `auto` : W && !b ? `metadata` : K !== `on-mount` && !oe ? `none` : `metadata`,
            poster: s && !r && n === U ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg` : s && b ? b : void 0,
            onLoadedData: () => {
                let e = L.current;
                e && (e.currentTime < .3 && J > 0 && Z((J ?? 0) * .01),
                (Q.current || K === `on-mount` || x && K === `on-viewport` && q) && Y())
            }
            ,
            controls: l,
            muted: W ? !0 : m,
            playsInline: h,
            style: {
                cursor: D ? `pointer` : `auto`,
                width: `100%`,
                height: `100%`,
                borderRadius: G,
                display: `block`,
                objectFit: g,
                backgroundColor: _,
                objectPosition: `50% 50%`
            }
        })
    }),
    R.displayName = `Video`,
    G = [`cover`, `fill`, `contain`, `scale-down`, `none`],
    m(R, {
        srcType: {
            type: p.Enum,
            displaySegmentedControl: !0,
            title: `Source`,
            options: [`URL`, `Upload`]
        },
        srcUrl: {
            type: p.String,
            title: `URL`,
            defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
            hidden(e) {
                return e.srcType === `Upload`
            }
        },
        srcFile: {
            type: p.File,
            title: `File`,
            allowedFileTypes: [`mp4`, `webm`],
            hidden(e) {
                return e.srcType === `URL`
            }
        },
        playing: {
            type: p.Boolean,
            title: `Playing`,
            enabledTitle: `Yes`,
            disabledTitle: `No`
        },
        ...g,
        posterEnabled: {
            type: p.Boolean,
            title: `Poster`,
            enabledTitle: `Yes`,
            disabledTitle: `No`
        },
        poster: {
            type: p.Image,
            title: `Image`,
            hidden: ({posterEnabled: e}) => !e,
            description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`
        },
        backgroundColor: {
            type: p.Color,
            title: `Background`,
            defaultValue: `rgba(0,0,0,0)`
        },
        startTime: {
            title: `Start Time`,
            type: p.Number,
            min: 0,
            max: 100,
            step: .1,
            unit: `%`
        },
        loop: {
            type: p.Boolean,
            title: `Loop`,
            enabledTitle: `Yes`,
            disabledTitle: `No`
        },
        objectFit: {
            type: p.Enum,
            title: `Fit`,
            options: G,
            optionTitles: G.map(B)
        },
        controls: {
            type: p.Boolean,
            title: `Controls`,
            enabledTitle: `Show`,
            disabledTitle: `Hide`,
            defaultValue: !1
        },
        muted: {
            type: p.Boolean,
            title: `Muted`,
            enabledTitle: `Yes`,
            disabledTitle: `No`
        },
        volume: {
            type: p.Number,
            max: 100,
            min: 0,
            unit: `%`,
            hidden: ({muted: e}) => e,
            defaultValue: 25
        },
        onEnd: {
            type: p.EventHandler
        },
        onSeeked: {
            type: p.EventHandler
        },
        onPause: {
            type: p.EventHandler
        },
        onPlay: {
            type: p.EventHandler
        },
        ..._
    })
}
));
export {R as Video, K as init_Video};
//# sourceMappingURL=Video.GGt4sAWo.mjs.map
