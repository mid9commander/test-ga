// Copyright 2012 Google Inc. All rights reserved.
// Container Version: QUICK_PREVIEW
(function(w, g) {
    w[g] = w[g] || {};
})(window, 'google_tag_manager');
(function() {


    var ya = this,
        za = function() {
            var a = YT.Player,
                b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        Aa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ba = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ca = function(a) {
            if (null == a) return String(a);
            var b = Ba.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ea = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        fa = function(a) {
            if (!a || "object" != Ca(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ea(a, "constructor") && !Ea(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ea(a, b)
        },
        Fa = function(a, b) {
            var c = b || ("array" == Ca(a) ? [] : {}),
                d;
            for (d in a)
                if (Ea(a, d)) {
                    var e = a[d];
                    "array" == Ca(e) ? ("array" != Ca(c[d]) && (c[d] = []), c[d] = Fa(e, c[d])) : fa(e) ? (fa(c[d]) || (c[d] = {}), c[d] = Fa(e, c[d])) : c[d] = e
                }
            return c
        };
    var la = null,
        Ga = Math.random(),
        Ha = null,
        Ia = null,
        Ja = {};
    var Ka, La, Ma, Na, Oa, Pa, Ra, Ta, Ua, Va, Wa, Q, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, jb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec, R, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd, cd, dd, gd, hd, kd, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d,
        ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, we, xe, ye, ze, Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le, Me, Ne, Oe, Pe, Qe, Re;
    (function() {
        var a = function(a) {
            return {
                toString: function() {
                    return a
                }
            }
        };
        Ka = a("");
        La = a("0");
        Ma = a("");
        Na = a("");
        Oa = a("");
        Pa = a("");
        Ra = a("");
        Ta = a("");
        Ua = a("");
        Va = a("");
        Wa = a("2");
        Q = a("3");
        Xa = a("");
        Ya = a("");
        Za = a("");
        $a = a("");
        ab = a("");
        bb = a("");
        cb = a("");
        db = a("");
        eb = a("");
        fb = a("");
        gb = a("");
        hb = a("");
        jb = a("");
        lb = a("");
        mb = a("");
        nb = a("");
        ob = a("");
        pb = a("");
        qb = a("");
        rb = a("");
        sb = a("");
        tb = a("");
        ub = a("");
        vb = a("4");
        wb = a("");
        xb = a("");
        yb = a("");
        zb = a("");
        Ab = a("");
        Db = a("");
        Eb = a("");
        Fb = a("");
        Gb = a("");
        Hb = a("");
        Ib = a("");
        Jb = a("");
        Kb = a("");
        Lb = a("");
        Mb = a("");
        Nb = a("");
        Ob = a("");
        Pb = a("");
        Qb = a("5");
        Rb = a("");
        Sb = a("");
        Tb = a("6");
        Ub = a("");
        Vb = a("");
        Wb = a("");
        Xb = a("");
        Yb = a("");
        Zb = a("");
        $b = a("");
        ac = a("");
        bc = a("7");
        cc = a("");
        dc = a("8");
        ec = a("");
        fc = a("");
        gc = a("");
        hc = a("");
        ic = a("");
        jc = a("");
        lc = a("9");
        mc = a("");
        nc = a("");
        oc = a("");
        pc = a("");
        qc = a("");
        rc = a("");
        sc = a("");
        tc = a("");
        uc = a("");
        vc = a("");
        wc = a("");
        xc = a("");
        yc = a("");
        zc = a("10");
        Ac = a("");
        Bc = a("17");
        Cc = a("18");
        Dc = a("");
        Ec = a("");
        R = a("");
        Fc = a("");
        Gc = a("");
        Hc = a("");
        Ic = a("");
        Jc = a("11");
        Kc = a("");
        Lc = a("");
        Mc = a("");
        Nc = a("");
        Oc = a("");
        Pc = a("");
        Qc = a("");
        Rc = a("");
        Sc = a("");
        Tc = a("");
        Uc = a("12");
        Vc = a("");
        Wc = a("");
        Xc = a("");
        Yc = a("");
        Zc = a("");
        $c = a("");
        ad = a("");
        bd = a("");
        cd = a("");
        dd = a("");
        gd = a("13");
        hd = a("");
        kd = a("");
        ld = a("");
        md = a("");
        nd = a("");
        od = a("");
        pd = a("");
        qd = a("");
        rd = a("");
        sd = a("");
        td = a("");
        ud = a("");
        vd = a("");
        wd = a("");
        xd = a("");
        yd =
            a("");
        zd = a("");
        Ad = a("");
        Bd = a("");
        Cd = a("");
        Dd = a("");
        Ed = a("");
        Fd = a("");
        Gd = a("");
        Hd = a("");
        Id = a("");
        Jd = a("");
        Kd = a("");
        Ld = a("");
        Md = a("");
        Nd = a("");
        Od = a("");
        Pd = a("");
        Qd = a("");
        Rd = a("");
        Sd = a("");
        Td = a("");
        Ud = a("");
        Vd = a("");
        Wd = a("");
        Xd = a("");
        Yd = a("");
        Zd = a("");
        $d = a("");
        ae = a("");
        be = a("");
        ce = a("15");
        de = a("");
        ee = a("");
        fe = a("");
        ge = a("");
        he = a("");
        ie = a("");
        je = a("");
        ke = a("");
        le = a("");
        me = a("");
        ne = a("");
        oe = a("");
        pe = a("");
        qe = a("");
        re = a("");
        se = a("");
        te = a("");
        ue = a("");
        ve = a("");
        we = a("");
        xe = a("");
        ye = a("");
        ze = a("");
        Ae = "";
        Be = a("");
        Ce = a("");
        De = a("");
        Ee = a("");
        Fe = a("");
        Ge = a("16");
        He = a("");
        Ie = a("");
        Je = a("");
        Ke = a("");
        Le = a("");
        Me = a("");
        Ne = a("");
        Oe = a("");
        Pe = a("");
        Qe = a("");
        Re = a("")
    })();
    var Se = function() {},
        I = function(a) {
            return "function" == typeof a
        },
        S = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        Te = function(a) {
            return "number" == Ca(a) && !isNaN(a)
        },
        Ue = function(a) {
            return /^[0-9]+$/.test(a)
        },
        Ve = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        We = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        J = function(a) {
            return Math.round(+a) || 0
        },
        ha = function(a) {
            return "false" ==
                String(a).toLowerCase() ? !1 : !!a
        },
        Xe = function(a) {
            var b = [];
            if (S(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        C = function() {
            return new Date
        },
        Ye = function(a, b) {
            if (!Te(a) || !Te(b) || a > b) a = 0, b = 2147483647;
            return Math.round(Math.random() * (b - a) + a)
        },
        Ze = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ze.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ze.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    Ze.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var $e = function(a, b, c) {
            try {
                if (!a[Zc]) return a[zc](a, b || Se, c || Se);
                c && c()
            } catch (d) {}
            return !1
        },
        af = function(a, b) {
            function c(b, c) {
                a.contains(b) || a.set(b, []);
                a.get(b).push(c)
            }
            for (var d = We(b).split("&"), e = 0; e < d.length; e++)
                if (d[e]) {
                    var f = d[e].indexOf("=");
                    0 > f ? c(d[e], "1") : c(d[e].substring(0, f), d[e].substring(f + 1))
                }
        },
        bf = function(a) {
            var b = a ? a.length : 0;
            return 0 < b ? a[b - 1] : ""
        },
        cf = function(a) {
            for (var b = 0; b < a.length; b++) a[b]()
        },
        ba = C().getTime(),
        ga = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        kf = function(a,
            b, c) {
            a.prototype["gtm_proxy_" + b] = a.prototype[b];
            a.prototype[b] = c
        },
        lf = function(a) {
            return null !== a && void 0 !== a && void 0 !== a.length
        },
        ea = function(a, b, c) {
            if (!(b && c && lf(a) && S(a) && 0 != a.length)) return null;
            for (var d = {}, e = 0; e < a.length; e++) a[e] && a[e].hasOwnProperty(b) && a[e].hasOwnProperty(c) && (d[a[e][b]] = a[e][c]);
            return d
        },
        mf = function(a, b) {
            0 == b ? a.Ma = !0 : a.complete = !0;
            var c = a.g;
            a.i && (a.i.ja[c] = b);
            Ja[c] && (Ja[c].state = b)
        },
        nf = function(a, b) {
            a.sort(function(a, d) {
                return b(a, d) ? -1 : b(d, a) ? 1 : 0
            })
        };
    var A = window,
        P = document,
        qf = navigator,
        u = function(a, b, c) {
            var d = A[a];
            A[a] = void 0 === d || c ? b : d;
            return A[a]
        },
        L = function(a, b, c, d) {
            return (d || "http:" != A.location.protocol ? a : b) + c
        },
        rf = function(a) {
            var b = P.getElementsByTagName("script")[0] || P.body || P.head;
            b.parentNode.insertBefore(a, b)
        },
        ka = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        p = function(a, b, c) {
            var d = P.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            ka(d, b);
            c && (d.onerror = c);
            rf(d)
        },
        ra = function(a, b) {
            var c = P.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            rf(c);
            ka(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        O = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        U = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        q = function(a) {
            A.setTimeout(a, 0)
        },
        na = !1,
        oa = [],
        sf = function(a) {
            if (!na) {
                var b = P.createEventObject,
                    c = "complete" == P.readyState,
                    d = "interactive" == P.readyState;
                if (!a || "readystatechange" != a.type || c || !b && d) {
                    na = !0;
                    for (var e = 0; e < oa.length; e++) oa[e]()
                }
            }
        },
        tf = 0,
        uf = function() {
            if (!na && 140 > tf) {
                tf++;
                try {
                    P.documentElement.doScroll("left"), sf()
                } catch (a) {
                    A.setTimeout(uf, 50)
                }
            }
        },
        wf = function(a) {
            var b = P.getElementById(a);
            if (b && vf(b, "id") != a)
                for (var c = 1; c < document.all[a].length; c++)
                    if (vf(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        },
        vf = function(a,
            b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        xf = function(a) {
            return a.target || a.srcElement || {}
        },
        sa = function(a) {
            var b = P.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            for (var b = b.lastChild, c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        yf = function(a, b) {
            for (var c = {}, d = 0; d < b.length; d++) c[b[d]] = !0;
            for (var e = a, d = 0; e && !c[String(e.tagName).toLowerCase()] && 100 > d; d++) e = e.parentElement;
            e && !c[String(e.tagName).toLowerCase()] && (e = null);
            return e
        },
        zf = !1,
        Af = [],
        Bf = function() {
            if (!zf) {
                zf = !0;
                for (var a = 0; a < Af.length; a++) Af[a]()
            }
        },
        Cf = function(a) {
            a = a || A;
            var b = a.location.href,
                c = b.indexOf("#");
            return 0 > c ? "" : b.substring(c + 1)
        },
        pa = function(a) {
            window.console && window.console.log && window.console.log(a)
        };
    var Df = function(a, b, c, d, e) {
            var f, g = (a.protocol.replace(":", "") || A.location.protocol.replace(":", "")).toLowerCase();
            switch (b) {
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = (a.hostname || A.location.hostname).split(":")[0].toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(1 * (a.hostname ? a.port : A.location.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= Ve(d || [], l[l.length -
                        1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    if (e) a: {
                        for (var m = f.split("&"), k = 0; k < m.length; k++) {
                            var n = m[k].split("=");
                            if (decodeURIComponent(n[0]).replace("+", " ") == e) {
                                var r = n.slice(1).join("=");
                                f = decodeURIComponent(r).replace("+", " ");
                                break a
                            }
                        }
                        f = void 0
                    }
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Ef = function(a) {
            var b = "";
            a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
            return b
        },
        ta = function(a) {
            var b = P.createElement("a");
            a && (b.href = a);
            return b
        };
    var wa = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var ua = function(a) {
        var b = ["veinteractive.com", "ve-interactive.cn"];
        if (!a) return !1;
        var c = Df(ta(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var va = function(a, b) {
            p("//bat.bing.com/bat.js", a, b)
        },
        N = A,
        ja = function(a, b, c) {
            b && (void 0 === N[a] || c && !N[a]) && (N[a] = b);
            return N[a]
        };
    var Ff = new Ze,
        Gf = {},
        If = {
            set: function(a, b) {
                Fa(Hf(a, b), Gf)
            },
            get: function(a) {
                return H(a, 2)
            },
            reset: function() {
                Ff = new Ze;
                Gf = {}
            }
        },
        H = function(a, b) {
            if (2 == b) {
                for (var c = Gf, d = a.split("."), e = 0; e < d.length; e++) {
                    if (void 0 === c[d[e]]) return;
                    c = c[d[e]]
                }
                return c
            }
            return Ff.get(a)
        },
        Hf = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        };
    var Jf = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Kf = {
            customPixels: ["nonGooglePixels"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Lf = {
            customPixels: ["customScripts", "html"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels",
                "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Mf = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Nf = function() {
            var a = H("gtm.whitelist");
            var b = a && Mf(Xe(a), Kf),
                c = H("gtm.blacklist") || H("tagTypeBlacklist") || [];
            Jf.test(A.location && A.location.hostname) && (c = Xe(c), c.push("nonGooglePixels", "nonGoogleScripts"));
            var d = c && Mf(Xe(c), Lf),
                e = {};
            return function(f) {
                var g = f && f[zc];
                if (!g) return !0;
                if (void 0 !== e[g.a]) return e[g.a];
                var h = !0;
                if (a) a: {
                    if (0 > Ve(b, g.a))
                        if (g.b && 0 < g.b.length)
                            for (var l = 0; l < g.b.length; l++) {
                                if (0 > Ve(b,
                                        g.b[l])) {
                                    h = !1;
                                    break a
                                }
                            } else {
                                h = !1;
                                break a
                            }
                        h = !0
                }
                var m = !1;
                if (c) {
                    var k;
                    if (!(k = 0 <= Ve(d, g.a))) a: {
                        for (var n = g.b || [], r = new Ze, t = 0; t < d.length; t++) r.set(d[t], !0);
                        for (t = 0; t < n.length; t++)
                            if (r.get(n[t])) {
                                k = !0;
                                break a
                            }
                        k = !1
                    }
                    m = k
                }
                return e[g.a] = !h || m
            }
        };
    var of = function(a) {
            var b = P;
            return Of ? b.querySelectorAll(a) : null
        },
        Pf;
    a: {
        var Qf = /MSIE +([\d\.]+)/.exec(qf.userAgent);
        if (Qf && Qf[1]) {
            var Rf = P.documentMode;
            Rf || (Rf = "CSS1Compat" == P.compatMode ? parseInt(Qf[1], 10) : 5);
            if (!Rf || 8 >= Rf) {
                Pf = !1;
                break a
            }
        }
        Pf = !!P.querySelectorAll
    }
    var Of = Pf;
    var Sf = void 0,
        Tf = "",
        Uf = 0,
        Vf = void 0,
        _et = function(a) {
            var b, c = H("gtm.element"),
                d = H("event"),
                e = +C();
            if (Sf === c && Tf === d && Uf > e - 250) b = Vf;
            else {
                var f;
                if (c) {
                    var g = c.innerText || c.textContent || "";
                    g && " " != g && (g = g.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
                    g && (g = g.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
                    f = g
                } else f = "";
                Vf = b = f;
                Sf = c;
                Tf = d
            }
            Uf = e;
            return b ? b : a[Wb]
        };
    _et.a = "et";
    _et.b = ["google"];
    var _eu = function(a) {
        var b = String(H("gtm.elementUrl") || a[Wb] || ""),
            c = ta(b);
        return b
    };
    _eu.a = "eu";
    _eu.b = ["google"];
    var _e = function() {
        return Ia
    };
    _e.a = "e";
    _e.b = ["google"];
    var Wf = /(^|\.)doubleclick\.net$/i,
        Xf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Yf = function(a) {
            for (var b = String(P.cookie).split(";"), c = [], d = 0; d < b.length; d++) {
                var e = b[d].split("="),
                    f = We(e[0]);
                if (f && f == a) {
                    var g = We(e.slice(1).join("="));
                    g && (g = decodeURIComponent(g));
                    c.push(g)
                }
            }
            return c
        },
        Zf = function(a, b, c, d, e) {
            if (Wf.test(P.location.hostname) || "/" == c && Xf.test(d)) return !1;
            var f = a + "=" + b + "; ";
            c && (f += "path=" + c + "; ");
            e && (f += "expires=" + e.toGMTString() + "; ");
            d && (f += "domain=" + d + ";");
            var g = P.cookie;
            P.cookie = f;
            return g !=
                P.cookie || 0 <= Ve(Yf(a), b)
        },
        $f = function(a) {
            if ("none" == a) return 0;
            0 == a.indexOf(".") && (a = a.substr(1));
            return a.split(".").length
        },
        ag = function(a) {
            var b = a;
            b ? (1 < b.length && b.lastIndexOf("/") == b.length - 1 && (b = b.substr(0, b.length - 1)), 0 != b.indexOf("/") && (b = "/" + b), a = b) : a = "/";
            return "/" == a ? 1 : a.split("/").length
        },
        bg = function() {
            var a = Df(A.location, "host", !0).split(".");
            if (4 == a.length && /^[0-9]*$/.exec(a[3])) return ["none"];
            for (var b = [], c = a.length - 2; 0 <= c; c--) b.push(a.slice(c).join("."));
            b.push("none");
            return b
        };
    var cg = function(a, b) {
        this.f = a;
        this.j = b
    };
    cg.prototype.toString = function() {
        var a = "" + this.f;
        1 < this.j && (a = a + "-" + this.j);
        return a
    };
    var dg = function(a, b) {
        this.ya = a;
        this.Y = b
    };
    dg.prototype.toString = function() {
        return "" + this.Y + "." + this.ya
    };
    var gg = function(a, b) {
            var c = new eg(null, a, b);
            fg(c);
            return c
        },
        eg = function(a, b, c) {
            this.Fa = Math.floor(C().getTime() / 864E5);
            this.X = b || "auto";
            this.P = c || "/";
            var d = $f(this.X),
                e = ag(this.P);
            this.B = a || new cg(d, e);
            this.h = [];
            this.w = new Ze
        },
        ig = function(a, b, c) {
            b && ("" == c.ya ? hg(a, b) : (a.w.contains(b) || a.h.push(b), a.w.set(b, c)))
        },
        jg = function(a, b) {
            for (var c = 0; c < b.length; c++) ig(a, b[c][0], b[c][1])
        },
        hg = function(a, b) {
            var c = Ve(a.h, b);
            0 <= c && a.h.splice(c, 1);
            a.w.set(b, void 0)
        },
        kg = function(a) {
            for (var b = [], c = 0; c < a.h.length; c++) {
                var d =
                    a.h[c];
                b.push([d, a.w.get(d)])
            }
            return b
        },
        lg = function(a) {
            for (var b = 0, c = 0; c < a.h.length; c++) b = Math.max(b, a.w.get(a.h[c]).Y);
            return 864E5 * b
        };
    eg.prototype.toString = function() {
        if (0 == this.h.length) return "";
        for (var a = [], b = 0; b < this.h.length; b++) {
            var c = this.h[b];
            a.push("" + c + "." + this.w.get(c).toString())
        }
        return "GAX1." + this.B.toString() + "." + a.join("!")
    };
    var mg = function(a, b) {
            for (var c = new Date, d = ag(a.P), e = [], f = 0; f < a.h.length; f++) {
                var g = a.h[f];
                a.w.get(g).Y < a.Fa && e.push(g)
            }
            for (f = 0; f < e.length; f++) hg(a, e[f]);
            if (a.h.length > (b || 10)) return !1;
            c.setTime(lg(a));
            if ("auto" != a.X) return Zf("_gaexp", a.toString(), a.P, a.X, c);
            for (var h = bg(), l = 0; l < h.length; l++)
                if ("none" != h[l] && (a.B = new cg($f(h[l]), d), Zf("_gaexp", a.toString(), a.P, h[l], c))) return !0;
            return !1
        },
        fg = function(a) {
            for (var b = a.B.f, c = a.B.j, d = Yf("_gaexp"), e = [], f = 0; f < d.length; f++) {
                var g = ng(a, d[f]);
                g && e.push(g)
            }
            nf(e,
                function(a, d) {
                    var e = a.B,
                        f = d.B;
                    return e.f == f.f && e.j == f.j ? !1 : e.f == b && e.j == c ? !0 : f.f == b && f.j == c ? !1 : e.f == b ? f.f != b || e.j < f.j : f.f == b ? !1 : e.j == c ? f.f != b && (f.j != c || e.f < f.f) : f.j == c ? !1 : e.f < f.f || e.f == f.f && e.j < f.j
                });
            a.B = 0 < e.length ? e[0].B : new cg(b, c);
            for (f = e.length - 1; 0 <= f; f--) jg(a, kg(e[f]))
        },
        ng = function(a, b) {
            var c = b.match(/GAX1\.([^.]+).(.*)/);
            if (c) {
                var d;
                a: {
                    var e = (c[1] || "").split("-");
                    if (!(0 == e.length || 2 < e.length)) {
                        var f = We(e[0]);
                        if (0 != f.length) {
                            var g = 2 == e.length ? We(e[1]) : "1";
                            if (Ue(f) && Ue(g)) {
                                d = new cg(J(f), J(g));
                                break a
                            }
                        }
                    }
                    d = void 0
                }
                if (d) {
                    for (var h = new eg(d, a.X, a.P), l = (c[2] || "").split("!"), m = 0; m < l.length; m++) {
                        var k = l[m].split(".");
                        if (3 == k.length) {
                            if (!Ue(k[1])) return;
                            ig(h, k[0], new dg(k[2], J(k[1])))
                        }
                    }
                    return h
                }
            }
        };
    var _v = function(a) {
        var b = H(a[gd].replace(/\\\./g, "."), a[Ob]);
        return void 0 !== b ? b : a[Wb]
    };
    _v.a = "v";
    _v.b = ["google"];
    var _f = function(a) {
        var b = String(H("gtm.referrer") || P.referrer);
        if (!b) return b;
        var c = ta(b);
        return b
    };
    _f.a = "f";
    _f.b = ["google"];
    var xa = function(a) {
            var b = A.location,
                c;
            (c = a[Lb] ? a[Lb] : H("gtm.url")) && (b = ta(String(c)));
            var d = b.href,
                e = d.indexOf("#"),
                f = 0 > e ? d : d.substr(0, e);
            a[vb] && (f = Df(b, a[vb], a[Xd], a[Vb], a[Kd]));
            return f
        },
        _u = xa;
    _u.a = "u";
    _u.b = ["google"];
    var _cn = function(a) {
        return 0 <= String(a[Wa]).indexOf(String(a[Q]))
    };
    _cn.a = "cn";
    _cn.b = ["google"];
    var _eq = function(a) {
        return String(a[Wa]) == String(a[Q])
    };
    _eq.a = "eq";
    _eq.b = ["google"];
    var xg = Math.random(),
        yg = "1.000000" > xg;
    var zg = Se;
    var Ag = Se,
        Bg = [],
        Cg = !1,
        Dg = function(a) {
            return A["dataLayer"].push(a)
        },
        Eg = function(a) {
            var b = !1;
            return function() {
                !b && I(a) && q(a);
                b = !0
            }
        },
        Kg = function() {
            for (var a = !1; !Cg && 0 < Bg.length;) {
                Cg = !0;
                var b = Bg.shift();
                if (I(b)) try {
                        b.call(If)
                    } catch (Sa) {} else if (S(b)) a: {
                        var c = b;
                        if ("string" == Ca(c[0])) {
                            for (var d = c[0].split("."), e = d.pop(), f = c.slice(1), g = Gf, h = 0; h < d.length; h++) {
                                if (void 0 === g[d[h]]) break a;
                                g = g[d[h]]
                            }
                            try {
                                g[e].apply(g, f)
                            } catch (Sa) {}
                        }
                    }
                    else {
                        var l = b,
                            m = void 0;
                        for (m in l)
                            if (l.hasOwnProperty(m)) {
                                var k = m,
                                    n = l[m];
                                Ff.set(k, n);
                                Fa(Hf(k, n), Gf)
                            }
                        var r = !1,
                            t = l.event,
                            v = void 0;
                        if (t) {
                            v = ba++;
                            Ia = t;
                            if (!l["gtm.uniqueEventId"]) {
                                var w = v;
                                Ff.set("gtm.uniqueEventId", w);
                                Fa(Hf("gtm.uniqueEventId", w), Gf)
                            }
                            var z = Eg(l.eventCallback),
                                D = l.eventTimeout;
                            D && A.setTimeout(z, +D);
                            r = Ag(v, t, z, l.eventReporter)
                        }
                        Ha || (Ha = l["gtm.start"]) && zg();
                        var E = l,
                            F = v,
                            y = t,
                            B = Gf;
                        var x = Fg("DATA_LAYER", F, y);
                        x.message = Fa(E);
                        x.abstractModel = Fa(B);
                        x.macroInfo = Gg();
                        Hg(x);
                        if (!r) {
                            var G = v,
                                M = t;
                            Hg(Fg("EVENT_COMPLETED", G, M));
                        }
                        Ig.macroInfo = Gg();
                        Ia = null;
                        a = r || a
                    }
                var W = b,
                    K = Gf;
                Ig.message = Fa(W), Ig.abstractModel = Fa(K);
                Jg();
                Cg = !1
            }
            return !a
        };
    var Lg, Mg, Ng, Og = /(Firefox\D28\D)/g.test(qf.userAgent),
        Ug = function(a, b) {
            return function(c) {
                c = c || A.event;
                var d = xf(c),
                    e = !1;
                if (3 !== c.which || "LINK_CLICK" != a) {
                    "LINK_CLICK" == a && (d = yf(d, ["a", "area"]), e = !d || !d.href || Pg(d.href) || 2 === c.which || null == c.which && 4 == c.button || c.ctrlKey || c.shiftKey || c.altKey || !0 === c.metaKey);
                    var f = "FORM_SUBMIT" == a ? Ng : Mg;
                    if (c.defaultPrevented || !1 === c.returnValue || c.na && c.na()) {
                        if (d) {
                            var g = {
                                    simulateDefault: !1
                                },
                                h = Qg(f, ["wnc", "nwnc"]);
                            h && Rg(a, d, g, f.wt, h)
                        }
                    } else {
                        if (d) {
                            var g = {},
                                l = !0,
                                m = Qg(f, ["wnc", "nwnc", "nwc", "wc"]);
                            (l = Rg(a, d, g, f.wt, m)) || (Sg(g.eventReport, f) ? b = !0 : e = !0);
                            e = e || l || "LINK_CLICK" == a && Og;
                            g.simulateDefault = !l && b && !e;
                            g.simulateDefault && (e = Tg(d, g) || e, !e && c.preventDefault && c.preventDefault());
                            c.returnValue = l || !b || e;
                            return c.returnValue
                        }
                        return !0
                    }
                }
            }
        },
        Rg = function(a, b, c, d, e) {
            var f = d || 2E3,
                g = {
                    "gtm.element": b,
                    "gtm.elementClasses": b.className,
                    "gtm.elementId": b["for"] || vf(b, "id") || "",
                    "gtm.elementTarget": b.formTarget || b.target || ""
                };
            switch (a) {
                case "LINK_CLICK":
                    g["gtm.triggers"] = e || "";
                    g.event =
                        "gtm.linkClick";
                    g["gtm.elementUrl"] = b.href;
                    g.eventTimeout = f;
                    g.eventCallback = Vg(b, c);
                    g.eventReporter = function(a) {
                        c.eventReport = a
                    };
                    break;
                case "FORM_SUBMIT":
                    g["gtm.triggers"] = e || "";
                    g.event = "gtm.formSubmit";
                    g["gtm.elementUrl"] = Wg(b);
                    g.eventTimeout = f;
                    g.eventCallback = Xg(b, c);
                    g.eventReporter = function(a) {
                        c.eventReport = a
                    };
                    break;
                case "CLICK":
                    g.event = "gtm.click";
                    g["gtm.elementUrl"] = b.formAction || b.action || b.href || b.src || b.code || b.codebase || "";
                    break;
                default:
                    return !0
            }
            return Dg(g)
        },
        Wg = function(a) {
            var b = a.action;
            b && b.tagName && (b = a.cloneNode(!1).action);
            return b
        },
        Yg = function(a) {
            var b = a.target;
            if (!b) switch (String(a.tagName).toLowerCase()) {
                case "a":
                case "area":
                case "form":
                    b = "_self"
            }
            return b
        },
        Tg = function(a, b) {
            var c = !1,
                d = /(iPad|iPhone|iPod)/g.test(qf.userAgent),
                e = Yg(a).toLowerCase();
            switch (e) {
                case "":
                case "_self":
                case "_parent":
                case "_top":
                    var f;
                    f = (e || "_self").substring(1);
                    b.targetWindow = A.frames && A.frames[f] || A[f];
                    break;
                case "_blank":
                    d ? (b.simulateDefault = !1, c = !0) : (b.targetWindowName = "gtm_autoEvent_" + C().getTime(),
                        b.targetWindow = A.open("", b.targetWindowName));
                    break;
                default:
                    d && !A.frames[e] ? (b.simulateDefault = !1, c = !0) : (A.frames[e] || (b.targetWindowName = e), b.targetWindow = A.frames[e] || A.open("", e))
            }
            return c
        },
        Vg = function(a, b, c) {
            return function() {
                b.simulateDefault && (b.targetWindow ? b.targetWindow.location.href = a.href : (c = c || C().getTime(), 500 > C().getTime() - c && A.setTimeout(Vg(a, b, c), 25)))
            }
        },
        Xg = function(a, b, c) {
            return function() {
                if (b.simulateDefault)
                    if (b.targetWindow) {
                        var d;
                        b.targetWindowName && (d = a.target, a.target = b.targetWindowName);
                        P.gtmSubmitFormNow = !0;
                        Zg(a).call(a);
                        b.targetWindowName && (a.target = d)
                    } else c = c || C().getTime(), 500 > C().getTime() - c && A.setTimeout(Xg(a, b, c), 25)
            }
        },
        Qg = function(a, b) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = a[b[d]],
                    f;
                for (f in e) e.hasOwnProperty(f) && e[f] && c.push(f)
            }
            return c.join(",")
        },
        $g = function(a, b, c, d, e) {
            var f = e;
            if (!f || "0" == f) {
                if (a.l) return;
                a.l = !0;
                f = "0"
            }
            var g = a.wt;
            b && (!g || g > d) && (a.wt = d);
            a[b ? c ? "wc" : "wnc" : c ? "nwc" : "nwnc"][f] = !0
        },
        Sg = function(a, b) {
            if (b.wnc["0"] || b.wc["0"]) return !0;
            for (var c = 0; c < ah.length; c++)
                if (a.passingRules[c]) {
                    var d =
                        ah[c],
                        e = bh[c],
                        f = e && e[0] && e[0][0] || e[1] && e[1][0];
                    if (f && "0" != f && (b.wc[f] || b.wnc[f]))
                        for (var g = d[1], h = 0; h < g.length; h++)
                            if (a.resolvedTags[g[h]]) return !0
                }
            return !1
        },
        ch = function(a, b, c, d, e) {
            var f, g, h = !1;
            switch (a) {
                case "CLICK":
                    if (P.gtmHasClickListenerTag) return;
                    P.gtmHasClickListenerTag = !0;
                    f = "click";
                    g = function(a) {
                        var b = xf(a);
                        b && Rg("CLICK", b, {}, d)
                    };
                    h = !0;
                    break;
                case "LINK_CLICK":
                    b && !Lg && (Lg = Ef(P.location));
                    $g(Mg, b || !1, c || !1, d, e);
                    if (P.gtmHasLinkClickListenerTag) return;
                    P.gtmHasLinkClickListenerTag = !0;
                    f = "click";
                    g = Ug(a, b || !1);
                    break;
                case "FORM_SUBMIT":
                    $g(Ng, b || !1, c || !1, d, e);
                    if (P.gtmHasFormSubmitListenerTag) return;
                    P.gtmHasFormSubmitListenerTag = !0;
                    f = "submit";
                    g = Ug(a, b || !1);
                    break;
                default:
                    return
            }
            U(P, f, g, h)
        },
        Pg = function(a) {
            if (!Lg) return !0;
            var b = a.indexOf("#");
            if (0 > b) return !1;
            if (0 == b) return !0;
            var c = ta(a);
            return Lg == Ef(c)
        },
        Zg = function(a) {
            try {
                if (a.constructor && a.constructor.prototype) return a.constructor.prototype.submit
            } catch (b) {}
            if (a.gtmReplacedFormSubmit) return a.gtmReplacedFormSubmit;
            P.gtmFormElementSubmitter ||
                (P.gtmFormElementSubmitter = P.createElement("form"));
            return P.gtmFormElementSubmitter.submit.call ? P.gtmFormElementSubmitter.submit : a.submit
        };
    var og = new String("undefined"),
        kh = function(a) {
            this.resolve = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === og ? b : a[d]);
                return c.join("")
            }
        };
    kh.prototype.toString = function() {
        return this.resolve("undefined")
    };
    kh.prototype.valueOf = kh.prototype.toString;
    var lh = {},
        mh = function(a, b) {
            var c = ba++;
            lh[c] = [a, b];
            return c
        },
        nh = function(a) {
            var b = a ? 0 : 1;
            return function(a) {
                var d = lh[a];
                if (d && I(d[b])) d[b]();
                lh[a] = void 0
            }
        };
    var oh = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        ph = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var qh;
    a: {
        var rh = ya.navigator;
        if (rh) {
            var sh = rh.userAgent;
            if (sh) {
                qh = sh;
                break a
            }
        }
        qh = ""
    }
    var V = function(a) {
        return -1 != qh.indexOf(a)
    };
    var th = V("Opera") || V("OPR"),
        uh = V("Trident") || V("MSIE"),
        vh = V("Edge"),
        wh;
    if (wh = V("Gecko")) wh = !(-1 != qh.toLowerCase().indexOf("webkit") && !V("Edge"));
    var xh = wh && !(V("Trident") || V("MSIE")) && !V("Edge"),
        yh = -1 != qh.toLowerCase().indexOf("webkit") && !V("Edge");
    yh && V("Mobile");
    V("Macintosh");
    V("Windows");
    V("Linux") || V("CrOS");
    var zh = ya.navigator || null;
    zh && (zh.appVersion || "").indexOf("X11");
    V("Android");
    !V("iPhone") || V("iPod") || V("iPad");
    V("iPad");
    var Ah = function() {
            var a = qh;
            if (xh) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (vh) return /Edge\/([\d\.]+)/.exec(a);
            if (uh) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (yh) return /WebKit\/(\S+)/.exec(a)
        },
        Bh = function() {
            var a = ya.document;
            return a ? a.documentMode : void 0
        },
        Ch = function() {
            if (th && ya.opera) {
                var a;
                var b = ya.opera.version;
                try {
                    a = b()
                } catch (f) {
                    a = b
                }
                return a
            }
            var c = "",
                d = Ah();
            d && (c = d ? d[1] : "");
            if (uh) {
                var e = Bh();
                if (e > parseFloat(c)) return String(e)
            }
            return c
        }(),
        Dh = {},
        Eh = function(a) {
            var b;
            if (!(b = Dh[a])) {
                for (var c =
                        0, d = oh(String(Ch)).split("."), e = oh(String(a)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                    var h = d[g] || "",
                        l = e[g] || "",
                        m = RegExp("(\\d*)(\\D*)", "g"),
                        k = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var n = m.exec(h) || ["", "", ""],
                            r = k.exec(l) || ["", "", ""];
                        if (0 == n[0].length && 0 == r[0].length) break;
                        c = ph(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || ph(0 == n[2].length, 0 == r[2].length) || ph(n[2], r[2])
                    } while (0 == c)
                }
                b = Dh[a] = 0 <= c
            }
            return b
        },
        Fh = ya.document,
        Gh = Fh && uh ? Bh() || ("CSS1Compat" == Fh.compatMode ?
            parseInt(Ch, 10) : 5) : void 0;
    var Hh;
    if (!(Hh = !xh && !uh)) {
        var Ih;
        if (Ih = uh) Ih = 9 <= +Gh;
        Hh = Ih
    }
    Hh || xh && Eh("1.9.1");
    uh && Eh("9");
    var Jh = function(a) {
        Jh[" "](a);
        return a
    };
    Jh[" "] = function() {};
    var qa = function(a, b) {
            var c = "";
            uh && !Kh(a) && (c = '<script>document.domain="' + document.domain + '";\x3c/script>' + c);
            var d = "<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>" + c + "</head><body>" + b + "</body></html>";
            if (Lh) a.srcdoc = d;
            else if (Mh) {
                var e = a.contentWindow.document;
                e.open("text/html", "replace");
                e.write(d);
                e.close()
            } else Nh(a, d)
        },
        Lh = yh && "srcdoc" in document.createElement("iframe"),
        Mh = xh || yh || uh && Eh(11),
        Nh = function(a, b) {
            uh && Eh(7) && !Eh(10) && 6 > Oh() && Ph(b) && (b = Qh(b));
            var c = function() {
                a.contentWindow.goog_content =
                    b;
                a.contentWindow.location.replace("javascript:window.goog_content")
            };
            uh && !Kh(a) ? Rh(a, c) : c()
        },
        Oh = function() {
            var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
            return a ? parseFloat(a[1]) : 0
        },
        Kh = function(a) {
            try {
                var b;
                var c = a.contentWindow;
                try {
                    var d;
                    if (d = !!c && null != c.location.href) b: {
                        try {
                            Jh(c.foo);
                            d = !0;
                            break b
                        } catch (e) {}
                        d = !1
                    }
                    b = d
                } catch (e) {
                    b = !1
                }
                return b
            } catch (e) {
                return !1
            }
        },
        Sh = 0,
        Rh = function(a, b) {
            var c = "goog_rendering_callback" + Sh++;
            window[c] = b;
            a.src = "javascript:'<script>(function() {document.domain = \"" +
                document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
        },
        Ph = function(a) {
            for (var b = 0; b < a.length; ++b)
                if (127 < a.charCodeAt(b)) return !0;
            return !1
        },
        Qh = function(a) {
            for (var b = unescape(encodeURIComponent(a)), c = Math.floor(b.length / 2), d = [], e = 0; e < c; ++e) d[e] = String.fromCharCode(256 * b.charCodeAt(2 * e + 1) + b.charCodeAt(2 * e));
            1 == b.length % 2 && (d[c] = b.charAt(b.length - 1));
            return d.join("")
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var hi = function(a, b, c, d) {
            var e = b + ": " + c + (d ? " !important" : ""),
                f = document;
            if (f.createStyleSheet) {
                var g = ei(f),
                    h = g.rules.length;
                g.addRule(a, e);
                return function() {
                    g.removeRule ? g.removeRule(h) : g.deleteRule(h);
                    g.addRule("x", "-", h)
                }
            }
            var l = fi(a + "{" + e + "}", f);
            gi(l, f);
            var m = l.parentNode;
            return function() {
                m.removeChild(l)
            }
        },
        ii = null,
        ei = function(a) {
            if (ii) return ii;
            for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
                var c = a.styleSheets[b],
                    d = c.ownerNode;
                if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return ii = c
            }
            0 == a.styleSheets.length &&
                a.createStyleSheet();
            return ii = a.styleSheets[0]
        },
        fi = function(a, b) {
            var c = (b || document).createElement("style");
            void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
            return c
        },
        gi = function(a, b) {
            var c = b || document,
                d = c.getElementsByTagName("head")[0];
            d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
            d.appendChild(a)
        };
    var pi = {},
        X = void 0,
        qi = function(a) {
            var b = pi[a];
            b || (b = {
                id: a,
                L: [],
                ba: 0,
                Aa: null,
                ta: void 0
            }, pi[a] = b);
            X = b
        },
        si = function(a, b, c, d) {
            var e = X;
            if (!Of || !e) return !1;
            var f = {
                id: e.id + ":" + e.L.length,
                Ua: b,
                xa: [],
                Pa: c,
                K: a,
                la: 0,
                ia: d || null,
                Ea: 0,
                aa: !1
            };
            e.L.push(f);
            null === a ? (f.aa = !0, b(null)) : ri(e);
            return !0
        },
        ti = function(a) {
            var b = hi(a, "visibility", "hidden", !0);
            return function() {
                I(b) && b.apply();
                b = null
            }
        },
        ui = function(a, b, c, d) {
            var e = b;
            if (!na) {
                var f = ti(a.u);
                oa.push(f);
                e = function(a, c) {
                    var d = b(a, c);
                    f();
                    return d
                }
            }
            return si(a, e, c, d)
        },
        ri = function(a) {
            for (var b = a.ba; b < a.L.length; b++) {
                var c = a.L[b],
                    d = b == a.ba;
                if (!c.aa && !vi(d, c)) break;
                c.aa && d && a.ba++
            }
            a.L.length > a.ba && (a.Aa || (a.Aa = A.setTimeout(function() {
                a.Aa = null;
                ri(a)
            }, 80)), na || a.ta || (a.ta = function() {
                ri(a)
            }, oa.push(a.ta)))
        },
        vi = function(a, b) {
            var c = [];
            if (b.K) {
                var d = wi(b.K, b.id),
                    e = null;
                b.ia && (e = wi(b.ia, b.id + "-t"));
                for (var f = 0; f < d.length; f++) {
                    var g = d[f],
                        h;
                    if (null != e && (h = e.length > f ? e[f] : null, !h && !na && (null === b.ia.o || b.Ea + c.length < b.ia.o))) break;
                    c.push({
                        element: g,
                        ub: h
                    })
                }
            }
            if (!na && b.Pa && (!a ||
                    null == b.K.o || b.K.o != b.la + c.length)) return !1;
            for (var l = 0; l < c.length; l++) {
                var m = c[l].element,
                    k = c[l].ub,
                    n;
                b.la++;
                xi(m, b.id);
                k && (b.Ea++, n = b.id + "-t", xi(k, n));
                var r = b.Ua(m, k);
                I(r) && b.xa.push(r);
                b.xa.push(yi(m, b.id));
                k && n && b.xa.push(yi(k, n))
            }
            if (b.K.o && b.K.o == b.la || na) b.aa = !0;
            return !0
        },
        xi = function(a, b) {
            a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
            a.gtmProgressiveApplied[b] = !0
        },
        yi = function(a, b) {
            return function() {
                a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
            }
        },
        wi = function(a, b) {
            for (var c =
                    of(a.u) || [], d = [], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                    if (a.A && !zi(f)) break;
                    d.push(f)
                }
            }
            return d
        },
        zi = function(a) {
            if (na) return !0;
            for (; a;) {
                if (a.nextSibling) return !0;
                a = a.parentNode
            }
            return !1
        };
    var _cl = function(a, b) {
        ch("CLICK");
        q(b)
    };
    _cl.a = "cl";
    _cl.b = ["google"];
    var Ci, Di;
    var Ni = function(a) {
            return function() {}
        },
        Oi = function(a) {
            return function() {}
        };
    var mj = function(a) {
        var b = A || ya,
            c = b.onerror,
            d = !1;
        yh && !Eh("535.3") && (d = !d);
        b.onerror = function(b, f, g, h, l) {
            c && c(b, f, g, h, l);
            a({
                message: b,
                fileName: f,
                nb: g,
                Kb: h,
                error: l
            });
            return d
        }
    };
    var Ij = 47,
        Jj = [],
        Kj = [],
        Lj = [],
        Mj = new Ze,
        Nj = [],
        Z = [],
        ah = [],
        bh = [],
        Oj = function() {
            this.D = []
        };
    Oj.prototype.set = function(a, b) {
        this.D.push([a, b]);
        return this
    };
    Oj.prototype.resolve = function(a, b) {
        for (var c = {}, d = 0; d < this.D.length; d++) {
            var e = Pj(this.D[d][0], a, b),
                f = Pj(this.D[d][1], a, b);
            c[e] = f
        }
        return c
    };
    var Qj = function(a) {
        this.index = a
    };
    Qj.prototype.resolve = function(a, b) {
        var c = Lj[this.index];
        if (c && !b(c)) {
            var d = c[Jc];
            if (a) {
                if (a.get(d)) return;
                a.set(d, !0)
            }
            c = Pj(c, a, b);
            a && a.set(d, !1);
            return $e(c)
        }
    };
    var _M = function(a) {
            return new Qj(a)
        },
        Rj = function(a) {
            this.Ba = [].slice.call(a);
            this.resolve = function(b, c) {
                for (var d = [], e = !1, f = 0; f < a.length; f++) {
                    var g = Pj(Jj[a[f]], b, c);
                    g === og && (e = !0);
                    d.push(g)
                }
                return e ? new kh(d) : d.join("")
            }
        },
        _T = function(a) {
            return new Rj(arguments)
        },
        Sj = function(a) {
            function b(b) {
                for (var d = 1; d < a.length; d++)
                    if (a[d] == b) return !0;
                return !1
            }
            this.value = a[0];
            this.resolve =
                function(c, d) {
                    var e = Pj(a[0], c, d);
                    if (a[0] instanceof Qj && b(8) && b(16)) {
                        if (e === og) return e;
                        var f = "gtm" + ba++;
                        Mj.set(f, e);
                        return 'google_tag_manager["GTM-NVWLF6"].macro(\'' + f + "')"
                    }
                    for (var e = String(e), g = 1; g < a.length; g++) e = Y[a[g]](e);
                    return e
                }
        },
        _E = function(a, b) {
            return new Sj(arguments)
        },
        Tj = function(a, b) {
            this.s = a;
            this.ha = b
        },
        _R = function(a, b) {
            return new Tj(a, b)
        },
        Uj = function(a, b) {
            return Pj(a, new Ze, b)
        },
        Pj = function(a, b, c) {
            var d = a;
            if (a instanceof Qj || a instanceof Oj || a instanceof Rj || a instanceof Sj) return a.resolve(b,
                c);
            if (!(a instanceof Tj))
                if (S(a))
                    for (var d = [], e = 0; e < a.length; e++) d[e] = Pj(a[e], b, c);
                else if (a && "object" == typeof a) {
                var d = {},
                    f;
                for (f in a) a.hasOwnProperty(f) && (d[f] = Pj(a[f], b, c))
            }
            return d
        },
        Vj = function(a, b) {
            var c = b[a],
                d = c;
            if (c instanceof Qj || c instanceof Sj || c instanceof Rj || c instanceof Tj) d = c;
            else if (S(c))
                for (var d = [], e = 0; e < c.length; e++) d[e] = Vj(c[e], b);
            else if ("object" == typeof c) {
                var d = new Oj,
                    f;
                for (f in c) c.hasOwnProperty(f) && d.set(b[f], Vj(c[f], b))
            }
            return d
        },
        Xj = function(a, b) {
            for (var c = b ? b.split(",") : [], d = 0; d < c.length; d++) {
                var e = c[d] = c[d].split(":");
                0 == a && (e[1] = Jj[e[1]]);
                if (1 == a)
                    for (var f = Wj(e[0]), e = c[d] = {}, g = 0; g < f.length; g++) {
                        var h = Kj[f[g]];
                        e[h[0]] = h[1]
                    }
                if (2 == a)
                    for (g = 0; 4 > g; g++) e[g] = Wj(e[g]);
                3 == a && (c[d] = Jj[e[0]]);
                if (4 == a)
                    for (g = 0; 2 > g; g++)
                        if (e[g]) {
                            e[g] = e[g].split(".");
                            for (var l = 0; l < e[g].length; l++) e[g][l] = Jj[e[g][l]]
                        } else e[g] = [];
                5 == a && (c[d] = e[0])
            }
            return c
        },
        Wj = function(a) {
            var b = [];
            if (!a) return b;
            for (var c = 0, d = 0; d < a.length && c < Ij; c += 6, d++) {
                var e = a && a.charCodeAt(d) || 65;
                if (65 != e) {
                    var f = 0,
                        f = 65 < e && 90 >=
                        e ? e - 65 : 97 <= e && 122 >= e ? e - 97 + 26 : 95 == e ? 63 : 48 <= e ? e - 48 + 52 : 62;
                    1 & f && b.push(c);
                    2 & f && b.push(c + 1);
                    4 & f && b.push(c + 2);
                    8 & f && b.push(c + 3);
                    16 & f && b.push(c + 4);
                    32 & f && b.push(c + 5)
                }
            }
            return b
        },
        Yj = function(a, b, c) {
            a.push.apply(a, Xj(b, c))
        };
    p("//tagmanager.google.com/debug");
    var Ig = {},
        Zj = [],
        ak = [],
        bk = [],
        ck = [],
        dk = function(a) {
            var b = {};
            if (a instanceof Qj) b.type = "macro", b.name = Zj[a.index];
            else if (a instanceof Oj) {
                b.type = "map";
                b.pairs = [];
                for (var c = 0; c < a.D.length; c++) b.pairs.push([dk(a.D[c][0]), dk(a.D[c][1])])
            } else if (a instanceof Rj)
                for (b.type = "template", b.tokens = [], c = 0; c < a.Ba.length; c++) b.tokens.push(dk(Jj[a.Ba[c]]));
            else if (a instanceof Sj) b = dk(a.value);
            else if (S(a))
                for (b = [], c = 0; c < a.length; c++) b.push(dk(a[c]));
            else b = a;
            return b
        },
        ek = function(a, b) {
            var c = {},
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = ck[d];
                    e && (c[e] = "function" == e ? b[d].a : [dk(a[d]), b[d]])
                }
            return c
        },
        Fg = function(a, b, c, d) {
            var e = {},
                f = {
                    publicId: "GTM-NVWLF6"
                };
            void 0 !== b && null != b && (f.eventId = b);
            c && (f.eventName = c);
            d && (f.tagName = d);
            e.key = f;
            e.version = "QUICK_PREVIEW";
            e.messageType = a;
            return e
        };
    var Gg = function() {
            for (var a = [], b = Nf(), c = 0; c < Lj.length; c++)
                if (Lj[c]) {
                    var d = Lj[c],
                        e = "",
                        f;
                    for (f in d) d.hasOwnProperty(f) && "function" == ck[f] && (e = d[f].a);
                    a.push({
                        name: Zj[c],
                        resolvedValue: Uj(_M(c), b),
                        type: e
                    })
                }
            return a;
        },
        gk = function(a) {
            for (var b = [], c = 0; c < ah.length; c++) {
                for (var d = ah[c], e = bk[c], f = fk(a, d), g = [], h = d[0], l = 0; l < h.length; l++) {
                    var m = ek(Nj[h[l]], a.I(h[l], a.c)[1]);
                    m.pass = a.I(h[l], a.c)[0];
                    g.push(m)
                }
                for (var k =
                        d[2], l = 0; l < k.length; l++) m = ek(Nj[k[l]], a.I(k[l], a.c)[1]), m.negative = !0, m.pass = !a.I(k[l], a.c)[0], g.push(m);
                b.push({
                    name: e && e[0] && e[0][0] || e[1] && e[1][0],
                    predicates: g,
                    pass: f,
                    firingTags: d[1],
                    blockingTags: d[3]
                })
            }
            return b;
        },
        Jg = function() {
            A["google.tagmanager.debugui2.queue"] = A["google.tagmanager.debugui2.queue"] || [], A["google.tagmanager.debugui2.queue"].push(Ig), Ig = {};
        },
        hk = function(a) {
            for (var b = [], c = 0; c < Z.length; c++) b[c] = {
                name: ak[c]
            };
            for (c = 0; c < Z.length; c++)
                if (b[c]) {
                    var d = Z[c],
                        e = b[c],
                        f;
                    if (a) f = ek(d, Uj(d, a.c));
                    else {
                        var g = d,
                            h = {},
                            l = void 0;
                        for (l in g)
                            if (g.hasOwnProperty(l)) {
                                var m = ck[l];
                                m && (h[m] = dk(g[l]))
                            }
                        f = h
                    }
                    e.tagData = f
                }
            return b;
        },
        ik = function(a, b) {
            var c = Fg("MACRO_RESOLVED", a.id, a.name, void 0 === b ? null : ak[b]);
            c.macroInfo = Gg();
            c.ruleInfo = gk(a);
            Hg(c);
        },
        jk = function(a, b) {
            var c = Fg("TAG_BLACKLISTED", a.id, a.name, ak[b]),
                d = {
                    name: ak[b]
                },
                e = Z[b];
            if (e[Zc]) d.execute = "malware";
            else if (a.c(e)) d.execute = "blacklisted";
            else return;
            c.tagInfo = [d];
            Hg(c);
        },
        Hg = function(a) {
            A["google.tagmanager.debugui2.queue"] = A["google.tagmanager.debugui2.queue"] || [], A["google.tagmanager.debugui2.queue"].push(a);
        };
    var kk = function(a) {
            var b = this;
            this.g = a;
            this.complete = this.Ma = !1;
            this.ga = [];
            this.Z = [];
            this.O = function() {
                if (b.i && b.i.event) {
                    var a = b.i.event,
                        d = b.g;
                    Hg(Fg("TAG_SUCCEEDED", a.id, a.name, ak[d]));
                }
                b.complete || cf(b.ga);
                mf(b, 1)
            };
            this.N = function() {
                if (b.i && b.i.event) {
                    var a = b.i.event,
                        d = b.g;
                    Hg(Fg("TAG_FAILED", a.id, a.name, ak[d]));
                }
                b.complete || cf(b.Z);
                mf(b, 2)
            };
            this.v = Se
        },
        lk = function(a, b) {
            a.ga.push(b)
        },
        mk = function(a, b) {
            a.Z.push(b)
        },
        nk = function(a) {
            this.F = [];
            this.za = [];
            this.Ga = {};
            this.ra = [];
            this.M = 0;
            this.Ka = {};
            this.Na = {};
            this.ja = {};
            this.event = a
        };
    nk.prototype.addListener = function(a) {
        this.ra.push(a)
    };
    var ok = function(a, b, c, d, e, f) {
            if (!c.complete) {
                a.F[b] = c;
                void 0 == d && (d = []);
                void 0 == e && (e = []);
                void 0 == f && (f = []);
                d = S(d) ? d.slice() : ["or", d];
                e = S(e) ? e.slice() : [e];
                f = S(f) ? f.slice() : [f];
                a.Ga[b] = d;
                a.Ka[b] = 0 < e.length;
                a.Na[b] = 0 < f.length;
                a.M++;
                var g = function() {
                    0 < a.M && a.M--;
                    0 < a.M || cf(a.ra)
                };
                lk(c, g);
                mk(c, g)
            }
        },
        pk = function(a, b, c) {
            a.F[b] && (lk(a.F[b], function() {
                c(b, !0)
            }), mk(a.F[b], function() {
                c(b, !1)
            }))
        },
        qk = function(a, b) {
            var c = !1;
            return function(d, e) {
                var f;
                a: {
                    for (var g = 0; g < a.length; g++)
                        if (a[g] instanceof Tj && a[g].s ===
                            d || a[g] === d) {
                            f = g;
                            break a
                        }
                    f = -1
                }
                c || 0 > f || ("or" == a[0] ? e ? (c = !0, b()) : (a.splice(f, 1), 1 == a.length && (c = !0)) : e ? (a.splice(f, 1), 1 == a.length && (c = !0, b())) : c = !0)
            }
        },
        uk = function(a, b) {
            var c = [],
                d = !1,
                e = function(b) {
                    var f, g, h = Z[b];
                    if (a.event.c(h)) {
                        jk(a.event, b);
                    } else g = rk(h, b, a);
                    if (f = g) {
                        var k = sk(b, !0);
                        0 < k.length && e(k[0].s);
                        c.push(f);
                        var l = sk(b, !1);
                        0 < l.length && e(l[0].s)
                    } else d = !0
                };
            e(b);
            if (!d) {
                for (var f = 0; f < c.length; f++) {
                    var g = c[f],
                        h = sk(g.g, !0);
                    if (0 < h.length) {
                        var l = c[f - 1],
                            m = tk(g);
                        lk(l, m);
                        0 == h[0].ha && mk(l, m)
                    }
                    var k = sk(g.g, !1);
                    0 < k.length && (m = tk(c[f + 1]), lk(g, m), 0 == k[0].ha && mk(g, m))
                }
                a.za.push(c)
            }
        },
        sk = function(a, b) {
            var c = b ? Ud : ke,
                d = Z[a],
                e = void 0 === d[c] ? [] : d[c];
            return S(e) ? e : [e]
        },
        tk = function(a) {
            return function() {
                a.v()
            }
        },
        wk = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [],
                    f = function(a) {
                        var b = sk(a, !0);
                        0 < b.length && f(b[0].s);
                        e.push(a);
                        var c = sk(a, !1);
                        0 < c.length && f(c[0].s)
                    };
                f(d.g);
                b[d.g] = e
            }
            vk(a, b);
            return b
        },
        vk = function(a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c].g,
                    e;
                for (e in b)
                    if (b.hasOwnProperty(e) && e != d && -1 < Ve(b[e], d)) {
                        delete b[d];
                        break
                    }
            }
        };
    var yk = function(a, b) {
            return function() {
                a[Bc] = b.O;
                a[Cc] = b.N;
                var c = b.g,
                    d = b.i && b.i.ja[c],
                    e = Ja[c] && Ja[c].state,
                    f = d ? void 0 !== d : b.Ma,
                    g = Ja[c] && Ja[c].firingOption,
                    h = g && 2 == g,
                    l = g && 1 == g;
                if ((f || e && 0 != e) && (f || h) && (h || l)) h && Ja[c] && 1 == Ja[c].state || l && b.i && 1 == b.i.ja[c] ? b.O() : b.N();
                else {
                    var m = b.i ? b.i.event : void 0;
                    a = xk(a, m ? m.c : Nf());
                    mf(b, 0);
                    if (m) {
                        var k = a;
                        var n = Fg("TAG_STARTED", m.id, m.name, ak[c]),
                            r = {
                                name: ak[c]
                            },
                            t = Z[c];
                        t[Zc] ? r.execute = "malware" : m.c(t) ? r.execute = "blacklisted" : (r.execute =
                            t[Vc] ? "suppressed" : "execute", r.tagData = ek(t, k));
                        n.tagInfo = [r];
                        Hg(n);
                        ik(m, c)
                    }
                    $e(a, b.O, b.N)
                }
            }
        },
        xk = function(a, b) {
            a = Uj(a, b);
            return a
        },
        rk = function(a, b, c) {
            var d = new kk(b);
            d.i = c;
            lk(d, Ni(a));
            mk(d, Oi(a));
            d.v = yk(a, d);
            return d
        };
    var Ck = !1,
        _ua = function(a, b, c) {
            function d(a) {
                var b = [].slice.call(arguments, 0);
                b[0] = n + b[0];
                A[m()].apply(window, b)
            }

            function e(b, c) {
                void 0 !== a[c] && d("set", b, a[c])
            }

            function f(a, b) {
                return void 0 === b ? b : a(b)
            }

            function g(a, b) {
                if (b)
                    for (var c in b) b.hasOwnProperty(c) && d("set", a + c, b[c])
            }

            function h() {
                var b = function(a, b, c) {
                        if (!fa(b)) return !1;
                        for (var e = ga(Object(b), c, []), f = 0; e && f < e.length; f++) d(a, e[f]);
                        return !!e && 0 < e.length
                    },
                    c;
                a[dc] ? c = H("ecommerce") :
                    a[cc] && (c = a[cc].ecommerce);
                if (!fa(c)) return;
                c = Object(c);
                var e = ga(a[wc], "currencyCode", c.currencyCode);
                void 0 !== e && d("set", "&cu", e);
                b("ec:addImpression", c, "impressions");
                if (b("ec:addPromo", c[c.promoClick ? "promoClick" : "promoView"], "promotions") && c.promoClick) {
                    d("ec:setAction", "promo_click", c.promoClick.actionField);
                    return
                }
                for (var f = "detail checkout checkout_option click add remove purchase refund".split(" "), g = 0; g < f.length; g++) {
                    var h = c[f[g]];
                    if (h) {
                        b("ec:addProduct", h, "products");
                        d("ec:setAction", f[g],
                            h.actionField);
                        break
                    }
                }
            }

            function l(a, b, c) {
                var d = 0;
                if (void 0 !== a)
                    for (var e in a)
                        if (a.hasOwnProperty(e) && (c && v[e] || !c && void 0 === v[e])) {
                            var f = w[e] ? ha(a[e]) : a[e];
                            "anonymizeIp" != e || f || (f = void 0);
                            b[e] = f;
                            d++
                        }
                return d
            }
            u("GoogleAnalyticsObject", a[gd] || "ga", !1);
            var m = function() {
                    return A.GoogleAnalyticsObject
                },
                k = u(m(), function() {
                    var a = A[m()];
                    a.q = a.q || [];
                    a.q.push(arguments)
                }, !1);
            k.l = +C();
            var n = "",
                r = "";
            void 0 == a[xe] ? (r = "gtm" + ba++, n = r + ".") : "" !== a[xe] &&
                (r = a[xe], n = r + ".");
            var t = !1;
            var z = {
                name: r
            };
            k("create", a[La], z);
            d("set", "&gtm", "GTM-NVWLF6");
            a[Uc] && d("require", "linkid", "linkid.js");
            d("set", "hitCallback", function() {
                if (I(a[Dc])) a[Dc]();
                else {
                    var c = a[wc],
                        d = c && c.hitCallback;
                    I(d) && d()
                }
                b()
            });
            if (a[te]) {} else if (a[ue]) {} else if (a[we]) {} else if (a[ve]) {} else if (a[Ub]) {} else if (a[Sb]) {} else if (a[se]) {} else {
                a[lc] && (d("require", "ec", "ec.js"), h());
                if (a[bc] && !a[nc]) {
                    var M = "_dc_gtm_" + String(a[La]).replace(/[^A-Za-z0-9-]/g,
                        "");
                    d("require", "displayfeatures", void 0, {
                        cookieName: M
                    })
                }
                d("send", "pageview");
            }
            if (!Ck) {
                var K = a[Qb] ? "u/analytics_debug.js" : "analytics.js";
                a[Kc] && !a[Qb] && (K = "internal/" + K);
                Ck = !0;
                p(L("https:", "http:", "//www.google-analytics.com/" + K, t), function() {
                    A[m()].loaded || c()
                }, c)
            }
        };
    _ua.a = "ua";
    _ua.b = ["google"];
    var Dk, Ek;
    var Nk = function() {
            var a = [];
            return function(b, c) {
                if (void 0 === a[b]) {
                    var d = Nj[b] && Uj(Nj[b], c),
                        e = d;
                    if (d)
                        if (d[Va] && S(d[Q]))
                            for (var f = d[Q], e = !1, g = 0; !e && g < f.length; g++) d[Q] = f[g], e = $e(d);
                        else e = $e(d);
                    a[b] = [e, d]
                }
                return a[b]
            }
        },
        fk = function(a, b) {
            for (var c = b[0], d = 0; d < c.length; d++)
                if (!a.I(c[d], a.c)[0]) return !1;
            for (var e = b[2], d = 0; d < e.length; d++)
                if (a.I(e[d], a.c)[0]) return !1;
            return !0
        },
        Ok = !1,
        Ag = function(a, b, c, d) {
            switch (b) {
                case "gtm.js":
                    if (Ok) return !1;
                    Ok = !0;
                    break;
                case "gtm.sync":
                    if (H("gtm.snippet") != Ga) return !1
            }
            H("tagTypeBlacklist");
            for (var e = {
                    id: a,
                    name: b,
                    V: c || Se,
                    U: Wj(),
                    fa: Wj(),
                    I: Nk(),
                    c: Nf()
                }, f = [], g = 0; g < ah.length; g++)
                if (fk(e, ah[g])) {
                    f[g] = !0;
                    for (var h = e, l = ah[g], m = l[1], k = 0; k < m.length; k++) h.U[m[k]] = !0;
                    for (var n = l[3], k = 0; k < n.length; k++) h.fa[n[k]] = !0
                } else f[g] = !1;
            var r = Fg("EVENT_STARTED", e.id, e.name);
            r.tagInfo = hk(e);
            Hg(r);
            ik(e);
            var t = [];
            for (var v = 0; v < Ij; v++)
                if (e.U[v] && !e.fa[v])
                    if (e.c(Z[v])) {} else {
                        t[v] = Z[v];
                    }
            e.J = t;
            for (var w = new nk(e), z = 0; z < Ij; z++)
                if (e.U[z] && !e.fa[z])
                    if (e.c(Z[z])) {
                        jk(e, z);
                    } else {
                        if (Z[z][Vc]) continue;
                        var D = e.J[z],
                            E = rk(D, z, w);
                        ok(w, z, E, D[Xb], D[Ud], D[ke]);
                        if (D[Ka]) break
                    }
            w.addListener(e.V);
            for (var F = [], y =
                    0; y < w.F.length; y++) {
                var B = w.F[y];
                if (B) {
                    var x = w.Ga[y],
                        G = w.Ka[y],
                        M = w.Na[y];
                    if (0 != x.length || G || M) {
                        if (0 < x.length)
                            for (var W = qk(x, B.v), K = 0; K < x.length; K++) x[K] instanceof Tj && x[K].s != y && pk(w, x[K].s, W);
                        (G || M) && uk(w, y)
                    } else F.push(y)
                }
            }
            for (y = 0; y < F.length; y++) w.F[F[y]].v();
            for (y = 0; y < w.za.length; y++) {
                for (var Sa = w.za[y], aa = Sa, da = [], ca = 0; ca < aa.length; ca++) {
                    var kb = aa[ca],
                        ib = kb.g,
                        Cb = Ja[ib],
                        id = Cb.firingOption;
                    0 != id && (1 == id && void 0 !== kb.i.ja[ib] || 2 == id && void 0 !== Cb.state) && da.push(kb)
                }
                var jd = wk(da),
                    kc = void 0;
                for (kc in jd)
                    if (jd.hasOwnProperty(kc)) {
                        for (var df =
                                void 0, $i = void 0, ed = jd[kc], al = ed[0], aj = ed[ed.length - 1], bj, Da = 0; Da < aa.length; Da++) {
                            var fd = aa[Da];
                            !df && fd.g == al && 0 < Da && (df = aa[Da - 1]);
                            fd.g == aj && Da < aa.length - 1 && ($i = aa[Da + 1]);
                            if (-1 < Ve(ed, fd.g))
                                if (bj = aa.splice(Da, 1)[0], fd.g == aj) break;
                                else Da--
                        }
                        if (bj) {
                            var cj = +kc,
                                ia = df,
                                ef = $i;
                            if (ia) {
                                var bl = ia.ga[0],
                                    cl = ia.Z[0],
                                    dj = ia;
                                dj.ga = [];
                                dj.Z = [];
                                lk(ia, bl);
                                mk(ia, cl)
                            }
                            if (ia && ef) {
                                var ff = tk(ef);
                                lk(ia, ff);
                                var gf = sk(ia.g, !1);
                                0 < gf.length && gf[0].s != cj && 0 == gf[0].ha && mk(ia, ff);
                                var hf = sk(ef.g, !0);
                                0 < hf.length && hf[0].s != cj && 0 == hf[0].ha &&
                                    mk(ia, ff)
                            }
                        }
                    }
                0 < Sa.length && Sa[0].v()
            }
            0 < w.M || cf(w.ra);
            for (var Qa = [], T = 0; T < Z.length; T++) Qa[T] = {
                name: ak[T]
            };
            for (T = 0; T < Z.length; T++)
                if (Qa[T]) {
                    var Bb = Z[T];
                    e.U[T] && !e.fa[T] ? Bb[Zc] ? Qa[T].execute = "malware" : e.c(Bb) ? Qa[T].execute = "blacklisted" : (Qa[T].execute = Bb[Vc] ? "suppressed" : "execute", Qa[T].tagData = ek(Bb, xk(e.J[T], e.c))) : Qa[T].tagData = ek(Bb, Uj(Bb, e.c))
                }
            Ig.tagInfo = Qa;
            Ig.ruleInfo = gk(e);
            Ig.eventName = e.name;
            d && I(d) && d({
                passingRules: f,
                resolvedTags: e.J
            });
            for (var ej in e.J)
                if (e.J.hasOwnProperty(ej)) {
                    var fj = e.J[ej],
                        jf;
                    if (!(jf = void 0 == fj[Jc])) {
                        var gj = fj[Jc];
                        jf = !("function" != typeof String.prototype.startsWith ? 0 === gj.indexOf("_implicit") : gj.startsWith("_implicit"))
                    }
                    if (jf) return !0
                }
            return !1
        };
    var Pk = {
        macro: function(a) {
            if (Mj.contains(a)) return Mj.get(a)
        }
    };
    Pk.dataLayer = If;
    Pk.onHtmlSuccess = nh(!0);
    Pk.onHtmlFailure = nh(!1);
    Pk.Ya = function() {
        var a = A.google_tag_manager;
        a || (a = A.google_tag_manager = {});
        a["GTM-NVWLF6"] || (a["GTM-NVWLF6"] = Pk);
        la = a
    };
    (function() {
        var a = function(a) {
            var c = u("google_tag_manager", {}, !1),
                d = c[a];
            d || (d = c[a] = {}, d.nwnc = {}, d.nwc = {}, d.wnc = {}, d.wc = {}, d.wt = null, d.l = !1);
            return d
        };
        Mg = a("linkClickMap");
        Ng = a("formSubmitMap")
    })();
    Jj.push.apply(Jj, function() {
        for (var a = [_cn, _et, 'Click Text', _M(0), 'Back', _eq, _e, '_event', _M(1), 'gtm.click', 'All Elements', '1927101_4', 'gtm.js', 'All Pages', '1927101_2147479553', _ua, 'Universal Analytics', true, 'UA-73413741-1', false, '\x26tid', {
                20: 18
            }, 1, '1927101_5', _cl, '_implicit_Click Listener All Elements', 2, _u, 'Page URL', 'Page Hostname', 'host', 'Page Path', 'path', _f, 'Referrer', 'Event', _v, 'Click Element', 'gtm.element', 'Click Classes', 'gtm.elementClasses', 'Click ID', 'gtm.elementId', 'Click Target', 'gtm.elementTarget', 'Click URL', 'gtm.elementUrl'], b = [], c = 0; c < a.length; c++) b[c] = Vj(c, a);
        return b
    }());
    Yj(Kj, 0, "10:0,10:1,11:2,2:3,3:4,10:5,10:6,11:7,2:8,3:9,3:12,10:15,11:16,14:17,0:18,9:19,8:19,16:19,5:19,6:19,1:21,12:19,7:17,15:22,10:24,11:25,15:26,10:27,11:28,11:29,4:30,11:31,4:32,10:33,11:34,11:35,10:36,11:37,13:38,11:39,13:40,11:41,13:42,11:43,13:44,11:45,13:46");
    Yj(Lj, 1, "G,AD,AAAAY,AAAAoB,AAAAIG,AAAAAY,ABAAAg,AAAAAAH,AAAAAAZ,AAAAAAhB,AAAAAABG,AAAAAABY");
    Yj(Nj, 1, "Z,gM,gU");
    Yj(Z, 1, "Ag__,AAAAH");
    Yj(ah, 2, "D:B::,E:B::,E:C::");
    Yj(bh, 4, "11:,14:,23:");
    for (var Qk = 0; Qk < Z.length; Qk++) {
        var Rk = Z[Qk],
            Sk = 1;
        Rk[pd] ? Sk = 2 : Rk[De] && (Sk = 0);
        Ja[Qk] = {
            firingOption: Sk,
            state: void 0
        }
    }
    Yj(Zj, 3, "2,7,28,29,31,34,35,37,39,41,43,45"), Yj(ak, 3, "16,25"), Yj(bk, 4, "10:,13:,10:"), Yj(ck, 5, "account,analytics_fields,arg0,arg1,component,debug,decorate_forms_auto_link,double_click,ecommerce_use_data_layer,enable_ecommerce,function,instance_name,link_id,name,once_per_event,tag_id,use_hash");
    Ig.publicId = "GTM-NVWLF6", Ig.version = "QUICK_PREVIEW", Jg();
    var Tk = Fg("INIT"),
        Uk;
    a: {
        var Vk = [];Nf();
        for (var Wk = 0; Wk < Lj.length; Wk++)
            if (Lj[Wk]) {
                var Xk = Lj[Wk],
                    Yk = "",
                    Zk;
                for (Zk in Xk) Xk.hasOwnProperty(Zk) && "function" == ck[Zk] && (Yk = Xk[Zk].a);
                Vk.push({
                    name: Zj[Wk],
                    unresolvedValue: dk(Xk[Zk]),
                    type: Yk
                })
            }
        Uk = Vk;
        break a;Uk = void 0
    }
    Tk.macroInfo = Uk;
    Tk.tagInfo = hk();
    Hg(Tk);
    Pk.Ya();
    (function(a) {})("async");
    (function() {
        var a = u("dataLayer", [], !1),
            b = u("google_tag_manager", {}, !1),
            b = b["dataLayer"] = b["dataLayer"] || {};
        oa.push(function() {
            b.gtmDom || (b.gtmDom = !0, a.push({
                event: "gtm.dom"
            }))
        });
        Af.push(function() {
            b.gtmLoad || (b.gtmLoad = !0, a.push({
                event: "gtm.load"
            }))
        });
        var c = a.push;
        a.push = function() {
            var b = [].slice.call(arguments, 0);
            c.apply(a, b);
            for (Bg.push.apply(Bg, b); 300 < this.length;) this.shift();
            return Kg()
        };
        Bg.push.apply(Bg, a.slice(0));
        q(Kg)
    })();
    if ("interactive" == P.readyState && !P.createEventObject || "complete" == P.readyState) sf();
    else {
        U(P, "DOMContentLoaded", sf);
        U(P, "readystatechange", sf);
        if (P.createEventObject && P.documentElement.doScroll) {
            var $k = !0;
            try {
                $k = !A.frameElement
            } catch (a) {}
            $k && uf()
        }
        U(A, "load", sf)
    }
    "complete" === P.readyState ? Bf() : U(A, "load", Bf);
    (function(a) {})("async");
    (function() {})();
    var _vs = "res_ts:1454795740656000,srv_cl:113341666,ds:prev,dbg:T,cv:QUICK_PREVIEW";
})():
