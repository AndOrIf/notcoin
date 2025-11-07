import {__esmMin as e} from "./rolldown-runtime.DynScBln.mjs";
import {Y as t, ae as n, init_jsx_runtime as r, init_npm_react_18_2 as i, init_ssg_sandbox_shims as a, p as o, pe as s, se as c, u as l, ue as u, window as d, ye as f} from "./react.lkV_lvYc.mjs";
import {LayoutGroup as ee, init_framer_motion_H2BOCUWP as p, motion as te} from "./motion.DHq4p1Q_.mjs";
import {ComponentViewportProvider as m, Container as h, ControlType as g, GeneratedComponentContext as ne, PropertyOverrides2 as re, addFonts as _, addPropertyControls as v, cx as y, getFonts as b, init_framer_BEVHCO6E as x, useComponentViewport as ie, useCustomCursors as S, useHydratedBreakpointVariants as ae, useIsOnFramerCanvas as oe, useLocaleInfo as se, useMetadata as ce, withCSS as C} from "./framer.BBkeV5vw.mjs";
import {containerStyles as w, emptyStateStyle as le, init_colorFromToken as ue, init_constants as de, init_isBrowser as fe, init_isMotionValue as pe, init_propUtils as me, init_useAutoMotionValue as he, init_useConstant as ge, init_useControlledState as _e, init_useFontControls as ve, init_useOnChange as ye, init_useOnNavigationTargetChange as T, init_useRenderTarget as E, init_useUniqueClassName as D, init_variantUtils as O, useIsOnCanvas as k} from "./propUtils.BhWWet5k.mjs";
import {Video as A, init_Video as j} from "./Video.Cl5Ui7yI.mjs";
import {init_kY9xcxt8P as M, metadata as N} from "./kY9xcxt8P.B_apVuCU.mjs";
var P = e(( () => {
    de(),
    T(),
    ge(),
    ue(),
    pe(),
    D(),
    O(),
    fe(),
    ye(),
    he(),
    ve(),
    E(),
    _e(),
    me()
}
));
function F({type: e, url: t, html: n, zoom: r, radius: i, border: a, style: s={}}) {
    return e === `url` && t ? o(xe, {
        url: t,
        zoom: r,
        radius: i,
        border: a,
        style: s
    }) : e === `html` && n ? o(I, {
        html: n,
        style: s
    }) : o(be, {
        style: s
    })
}
function be({style: e}) {
    return o(`div`, {
        style: {
            minHeight: z(e),
            ...le,
            overflow: `hidden`,
            ...e
        },
        children: o(`div`, {
            style: H,
            children: `To embed a website or widget, add it to the properties\xA0panel.`
        })
    })
}
function xe({url: e, zoom: t, radius: n, border: r, style: i}) {
    let a = !i.height;
    /[a-z]+:\/\//.test(e) || (e = `https://` + e);
    let s = k()
      , [c,l] = f(s ? void 0 : !1);
    if (u( () => {
        if (!s)
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
    s && a)
        return o(R, {
            message: `URL embeds do not support auto height.`,
            style: i
        });
    if (!e.startsWith(`https://`))
        return o(R, {
            message: `Unsupported protocol.`,
            style: i
        });
    if (c === void 0)
        return o(Ee, {});
    if (c instanceof Error)
        return o(R, {
            message: c.message,
            style: i
        });
    if (c === !0) {
        let t = `Can’t embed ${e} due to its content security policy.`;
        return o(R, {
            message: t,
            style: i
        })
    }
    return o(`iframe`, {
        src: e,
        style: {
            ...B,
            ...i,
            ...r,
            zoom: t,
            borderRadius: n,
            transformOrigin: `top center`
        },
        loading: `lazy`,
        fetchPriority: s ? `low` : `auto`,
        referrerPolicy: `no-referrer`,
        sandbox: Se(s)
    })
}
function Se(e) {
    let t = [`allow-same-origin`, `allow-scripts`];
    return e || t.push(`allow-downloads`, `allow-forms`, `allow-modals`, `allow-orientation-lock`, `allow-pointer-lock`, `allow-popups`, `allow-popups-to-escape-sandbox`, `allow-presentation`, `allow-storage-access-by-user-activation`, `allow-top-navigation-by-user-activation`),
    t.join(` `)
}
function I({html: e, ...t}) {
    if (e.includes(`<\/script>`)) {
        let n = e.includes(`</spline-viewer>`)
          , r = e.includes(`<!-- framer-direct-embed -->`);
        return o(n || r ? we : Ce, {
            html: e,
            ...t
        })
    }
    return o(Te, {
        html: e,
        ...t
    })
}
function Ce({html: e, style: t}) {
    let n = s()
      , [r,i] = f(0);
    u( () => {
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
        return d.addEventListener(`message`, t),
        e?.postMessage(`getEmbedHeight`, `*`),
        () => {
            d.removeEventListener(`message`, t)
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
      , c = {
        ...B,
        ...t
    };
    return t.height || (c.height = r + `px`),
    o(`iframe`, {
        ref: n,
        style: c,
        srcDoc: a
    })
}
function we({html: e, style: t}) {
    let n = s();
    return u( () => {
        let t = n.current;
        if (t)
            return t.innerHTML = e,
            L(t),
            () => {
                t.innerHTML = ``
            }
    }
    , [e]),
    o(`div`, {
        ref: n,
        style: {
            ...V,
            ...t
        }
    })
}
function Te({html: e, style: t}) {
    return o(`div`, {
        style: {
            ...V,
            ...t
        },
        dangerouslySetInnerHTML: {
            __html: e
        }
    })
}
function L(e) {
    if (e instanceof Element && e.tagName === `SCRIPT`) {
        let t = document.createElement(`script`);
        t.text = e.innerHTML;
        for (let {name: n, value: r} of e.attributes)
            t.setAttribute(n, r);
        e.parentElement.replaceChild(t, e)
    } else
        for (let t of e.childNodes)
            L(t)
}
function Ee() {
    return o(`div`, {
        className: `framerInternalUI-componentPlaceholder`,
        style: {
            ...w,
            overflow: `hidden`
        },
        children: o(`div`, {
            style: H,
            children: `Loading…`
        })
    })
}
function R({message: e, style: t}) {
    return o(`div`, {
        className: `framerInternalUI-errorPlaceholder`,
        style: {
            minHeight: z(t),
            ...w,
            overflow: `hidden`,
            ...t
        },
        children: o(`div`, {
            style: H,
            children: e
        })
    })
}
function z(e) {
    if (!e.height)
        return 200
}
var B, V, H, De = e(( () => {
    a(),
    r(),
    i(),
    x(),
    P(),
    v(F, {
        type: {
            type: g.Enum,
            defaultValue: `url`,
            displaySegmentedControl: !0,
            options: [`url`, `html`],
            optionTitles: [`URL`, `HTML`]
        },
        url: {
            title: `URL`,
            type: g.String,
            description: `Some websites don’t support embedding.`,
            hidden(e) {
                return e.type !== `url`
            }
        },
        html: {
            title: `HTML`,
            type: g.String,
            displayTextArea: !0,
            hidden(e) {
                return e.type !== `html`
            }
        },
        border: {
            title: `Border`,
            type: g.Border,
            optional: !0,
            hidden(e) {
                return e.type !== `url`
            }
        },
        radius: {
            type: g.BorderRadius,
            title: `Radius`,
            hidden(e) {
                return e.type !== `url`
            }
        },
        zoom: {
            title: `Zoom`,
            defaultValue: 1,
            type: g.Number,
            hidden(e) {
                return e.type !== `url`
            },
            min: .1,
            max: 1,
            step: .1,
            displayStepper: !0
        }
    }),
    B = {
        width: `100%`,
        height: `100%`,
        border: `none`
    },
    V = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`
    },
    H = {
        textAlign: `center`,
        minWidth: 140
    }
}
)), U, W, G, K, q, J, Y, X, Z, Q, $;
e(( () => {
    r(),
    x(),
    p(),
    i(),
    j(),
    De(),
    M(),
    U = b(A),
    W = b(F),
    G = {
        fNHy1H14T: `(max-width: 809.98px)`,
        jlAYS0D_h: `(min-width: 1200px)`,
        oLbYOAPyd: `(min-width: 810px) and (max-width: 1199.98px)`
    },
    K = `framer-fnp6O`,
    q = {
        fNHy1H14T: `framer-v-1crqt70`,
        jlAYS0D_h: `framer-v-dz44m5`,
        oLbYOAPyd: `framer-v-1vc0yuw`
    },
    J = ({value: e}) => oe() ? null : o(`style`, {
        dangerouslySetInnerHTML: {
            __html: e
        },
        "data-framer-html-style": ``
    }),
    Y = {
        Desktop: `jlAYS0D_h`,
        Phone: `fNHy1H14T`,
        Tablet: `oLbYOAPyd`
    },
    X = ({height: e, id: t, width: n, ...r}) => ({
        ...r,
        variant: Y[r.variant] ?? r.variant ?? `fNHy1H14T`
    }),
    Z = C(t(function(e, t) {
        let r = s(null)
          , i = t ?? r
          , a = n()
          , {activeLocale: u, setLocale: d} = se();
        ie();
        let {style: f, className: p, layoutId: g, variant: _, ...v} = X(e)
          , b = c( () => N({}, u), [u]);
        ce(b);
        let[x,oe] = ae(_, G, !1)
          , C = y(K);
        return S({}),
        o(ne.Provider, {
            value: {
                primaryVariantId: `fNHy1H14T`,
                variantClassNames: q
            },
            children: l(ee, {
                id: g ?? a,
                children: [o(J, {
                    value: `html body { background: rgb(0, 0, 0); }`
                }), l(te.div, {
                    ...v,
                    className: y(C, `framer-1crqt70`, p),
                    ref: i,
                    style: {
                        ...f
                    },
                    children: [o(`div`, {
                        className: `framer-ykdg8r`
                    }), o(m, {
                        children: o(h, {
                            className: `framer-cl5tvy-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `liKec5FYx`,
                            scopeId: `kY9xcxt8P`,
                            children: o(re, {
                                breakpoint: x,
                                overrides: {
                                    jlAYS0D_h: {
                                        srcUrl: `https://not.ams3.cdn.digitaloceanspaces.com/probablynothing/desktop_hd/3.mp4`
                                    }
                                },
                                children: o(A, {
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
                                    srcUrl: `https://not.ams3.cdn.digitaloceanspaces.com/probablynothing/mobile_hd/3.mp4`,
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
                    }), o(m, {
                        children: o(h, {
                            className: `framer-jkd6lj-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `rO6aE_3i4`,
                            scopeId: `kY9xcxt8P`,
                            children: o(F, {
                                height: `100%`,
                                html: `<iframe src="https://player.mux.com/Q1c75gwV9k3EP7ZpPjlhIZPO4kyCy8ryr8g00175BdCs?metadata-video-title=probablynothing3&video-title=probablynothing3&autoplay=1" style="width: 1px; height: 1px; position: absolute; opacity: 0; pointer-events: none; border: none;" allow="autoplay; encrypted-media;"
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
                    })]
                }), o(`div`, {
                    id: `overlay`
                })]
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-fnp6O.framer-13h6lzf, .framer-fnp6O .framer-13h6lzf { display: block; }`, `.framer-fnp6O.framer-1crqt70 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 393px; }`, `.framer-fnp6O .framer-ykdg8r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-fnp6O .framer-cl5tvy-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`, `.framer-fnp6O .framer-jkd6lj-container { flex: none; height: 1px; position: relative; width: 1px; }`, `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-fnp6O.framer-1crqt70 { width: 810px; } .framer-fnp6O .framer-ykdg8r { order: 3; } .framer-fnp6O .framer-cl5tvy-container { order: 2; } .framer-fnp6O .framer-jkd6lj-container { order: 4; }}`, `@media (min-width: 1200px) { .framer-fnp6O.framer-1crqt70 { width: 1200px; }}`], `framer-fnp6O`),
    Q = Z,
    Z.displayName = `Page`,
    Z.defaultProps = {
        height: 801,
        width: 393
    },
    _(Z, [{
        explicitInter: !0,
        fonts: []
    }, ...U, ...W], {
        supportsExplicitInterCodegen: !0
    }),
    $ = {
        exports: {
            default: {
                type: `reactComponent`,
                name: `FramerkY9xcxt8P`,
                slots: [],
                annotations: {
                    framerContractVersion: `1`,
                    framerAutoSizeImages: `true`,
                    framerAcceptsLayoutTemplate: `true`,
                    framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"oLbYOAPyd":{"layout":["fixed","auto"]},"jlAYS0D_h":{"layout":["fixed","auto"]}}}`,
                    framerIntrinsicHeight: `801`,
                    framerScrollSections: `* @framerResponsiveScreen`,
                    framerComponentViewportWidth: `true`,
                    framerIntrinsicWidth: `393`,
                    framerDisplayContentsDiv: `false`,
                    framerColorSyntax: `true`,
                    framerImmutableVariables: `true`
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
export {$ as __FramerMetadata__, Q as default};
//# sourceMappingURL=PDsrMi01Y58y2kq1KguL0C5tS6C-A9Uu6nWHpWGODBo.DJh89hRf.mjs.map
