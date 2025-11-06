import {__esmMin as e} from "./rolldown-runtime.DynScBln.mjs";
import {Y as t, ae as n, init_jsx_runtime as r, init_npm_react_18_2 as i, p as a, pe as o, se as s, u as c} from "./react.lkV_lvYc.mjs";
import {LayoutGroup as l, init_framer_motion_H2BOCUWP as u, motion as d} from "./motion.DHq4p1Q_.mjs";
import {ComponentViewportProvider as f, Container as p, GeneratedComponentContext as m, PropertyOverrides2 as h, addFonts as g, cx as _, getFonts as v, init_framer_BEVHCO6E as y, useComponentViewport as b, useCustomCursors as x, useHydratedBreakpointVariants as S, useIsOnFramerCanvas as C, useLocaleInfo as w, useMetadata as T, withCSS as E} from "./framer.BBkeV5vw.mjs";
import {Video as D, init_Video as O} from "./Video.Cl5Ui7yI.mjs";
import {init_wGSKRChAG as k, metadata as A} from "./wGSKRChAG.CWv6D1S3.mjs";
var j, M, N, P, F, I, L, R, z, B;
e(( () => {
    r(),
    y(),
    u(),
    i(),
    O(),
    k(),
    j = v(D),
    M = {
        Bg1IN2Fgd: `(min-width: 810px) and (max-width: 1199.98px)`,
        dBWfcs5om: `(min-width: 1200px)`,
        oU8OhhDnM: `(max-width: 809.98px)`
    },
    N = `framer-XtMR5`,
    P = {
        Bg1IN2Fgd: `framer-v-t77e9k`,
        dBWfcs5om: `framer-v-dpaout`,
        oU8OhhDnM: `framer-v-1m1bmed`
    },
    F = ({value: e}) => C() ? null : a(`style`, {
        dangerouslySetInnerHTML: {
            __html: e
        },
        "data-framer-html-style": ``
    }),
    I = {
        Desktop: `dBWfcs5om`,
        Phone: `oU8OhhDnM`,
        Tablet: `Bg1IN2Fgd`
    },
    L = ({height: e, id: t, width: n, ...r}) => ({
        ...r,
        variant: I[r.variant] ?? r.variant ?? `oU8OhhDnM`
    }),
    R = E(t(function(e, t) {
        let r = o(null)
          , i = t ?? r
          , u = n()
          , {activeLocale: g, setLocale: v} = w();
        b();
        let {style: y, className: C, layoutId: E, variant: O, ...k} = L(e)
          , j = s( () => A({}, g), [g]);
        T(j);
        let[I,R] = S(O, M, !1)
          , z = _(N);
        return x({}),
        a(m.Provider, {
            value: {
                primaryVariantId: `oU8OhhDnM`,
                variantClassNames: P
            },
            children: c(l, {
                id: E ?? u,
                children: [a(F, {
                    value: `html body { background: rgb(0, 0, 0); }`
                }), a(d.div, {
                    ...k,
                    className: _(z, `framer-1m1bmed`, C),
                    ref: i,
                    style: {
                        ...y
                    },
                    children: a(`div`, {
                        className: `framer-1xzewbw`,
                        children: a(f, {
                            children: a(p, {
                                className: `framer-1edegkp-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `tHZKOl_xr`,
                                scopeId: `wGSKRChAG`,
                                children: a(h, {
                                    breakpoint: I,
                                    overrides: {
                                        dBWfcs5om: {
                                            srcUrl: `https://not.ams3.cdn.digitaloceanspaces.com/probablynothing/kyoto/desktop/3.mp4`
                                        }
                                    },
                                    children: a(D, {
                                        backgroundColor: `rgba(0, 0, 0, 0)`,
                                        borderRadius: 0,
                                        bottomLeftRadius: 0,
                                        bottomRightRadius: 0,
                                        controls: !1,
                                        height: `100%`,
                                        id: `tHZKOl_xr`,
                                        isMixedBorderRadius: !1,
                                        layoutId: `tHZKOl_xr`,
                                        loop: !0,
                                        muted: !0,
                                        objectFit: `cover`,
                                        playing: !0,
                                        posterEnabled: !0,
                                        srcType: `URL`,
                                        srcUrl: `https://not.ams3.cdn.digitaloceanspaces.com/probablynothing/kyoto/mobile/3.mp4`,
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
                        })
                    })
                }), a(`div`, {
                    id: `overlay`
                })]
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-XtMR5.framer-1esu0co, .framer-XtMR5 .framer-1esu0co { display: block; }`, `.framer-XtMR5.framer-1m1bmed { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 393px; }`, `.framer-XtMR5 .framer-1xzewbw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-XtMR5 .framer-1edegkp-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; z-index: 0; }`, `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-XtMR5.framer-1m1bmed { width: 810px; }}`, `@media (min-width: 1200px) { .framer-XtMR5.framer-1m1bmed { width: 1200px; }}`], `framer-XtMR5`),
    z = R,
    R.displayName = `Page`,
    R.defaultProps = {
        height: 800,
        width: 393
    },
    g(R, [{
        explicitInter: !0,
        fonts: []
    }, ...j], {
        supportsExplicitInterCodegen: !0
    }),
    B = {
        exports: {
            Props: {
                type: `tsType`,
                annotations: {
                    framerContractVersion: `1`
                }
            },
            default: {
                type: `reactComponent`,
                name: `FramerwGSKRChAG`,
                slots: [],
                annotations: {
                    framerContractVersion: `1`,
                    framerIntrinsicWidth: `393`,
                    framerComponentViewportWidth: `true`,
                    framerAcceptsLayoutTemplate: `true`,
                    framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Bg1IN2Fgd":{"layout":["fixed","auto"]},"dBWfcs5om":{"layout":["fixed","auto"]}}}`,
                    framerImmutableVariables: `true`,
                    framerDisplayContentsDiv: `false`,
                    framerScrollSections: `* @framerResponsiveScreen`,
                    framerAutoSizeImages: `true`,
                    framerColorSyntax: `true`,
                    framerIntrinsicHeight: `800`
                }
            },
            __FramerMetadata__: {
                type: `variable`
            }
        }
    }
}
))();
export {B as __FramerMetadata__, z as default};
//# sourceMappingURL=DOLSZocbg0JZwHTL6WeUNuGuH0KasFW0O3ZBYBqRZ7A.febU5Igh.mjs.map
