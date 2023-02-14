//tealium universal tag - utag.174 ut4.0.202302020220, Copyright 2023 Tealium.com Inc. All Rights Reserved.
var global_s = s_gi("wfg-wx-global-dev")
global_s.account = "wfg-wx-global-dev";
global_s.trackDownloadLinks = true;
global_s.trackExternalLinks = true;
global_s.trackInlineStats = false;
global_s.linkInternalFilters = "javascript:,woolworths.com.au";
global_s.linkLeaveQueryString = false;
global_s.linkTrackVars = "None";
global_s.linkTrackEvents = "None";
global_s.usePlugins = false;
global_s.currencyCode = "USD";
global_s.visitorNamespace = "";
global_s.trackingServer = "woolworthsfoodgroup.sc.omtrdc.net";
global_s.trackingServerSecure = "woolworthsfoodgroup.sc.omtrdc.net";
global_s.charSet = "UTF-8";
global_s.expectSupplementalData = true;
global_s.debugTracking = (utag.cfg) ? utag.cfg.utagdb : false;
function AppMeasurement(r) {
    var a = this;
    a.version = "2.23.0";
    var h = window;
    h.s_c_in || (h.s_c_il = [],
        h.s_c_in = 0);
    a._il = h.s_c_il;
    a._in = h.s_c_in;
    a._il[a._in] = a;
    h.s_c_in++;
    a._c = "s_c";
    var q = h.AppMeasurement.mc;
    q || (q = null);
    var p = h, m, s;
    try {
        for (m = p.parent,
                 s = p.location; m && m.location && s && "" + m.location !== "" + s && p.location && "" + m.location !== "" + p.location && m.location.host === s.host; )
            p = m,
                m = p.parent
    } catch (u) {}
    a.log = function(a) {
        try {
            console.log(a)
        } catch (c) {}
    }
    ;
    a.Sa = function(a) {
        return "" + parseInt(a) == "" + a
    }
    ;
    a.replace = function(a, c, d) {
        return !a || 0 > a.indexOf(c) ? a : a.split(c).join(d)
    }
    ;
    a.escape = function(b) {
        var c, d;
        if (!b)
            return b;
        b = encodeURIComponent(b);
        for (c = 0; 7 > c; c++)
            d = "+~!*()'".substring(c, c + 1),
            0 <= b.indexOf(d) && (b = a.replace(b, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return b
    }
    ;
    a.unescape = function(b) {
        if (!b)
            return b;
        b = 0 <= b.indexOf("+") ? a.replace(b, "+", " ") : b;
        try {
            return decodeURIComponent(b)
        } catch (c) {}
        return unescape(b)
    }
    ;
    a.Rb = function() {
        var b = h.location.hostname, c = a.fpCookieDomainPeriods, d;
        c || (c = a.cookieDomainPeriods);
        if (b && !a.La && !/^[0-9.]+$/.test(b) && (c = c ? parseInt(c) : 2,
            c = 2 < c ? c : 2,
            d = b.lastIndexOf("."),
        0 <= d)) {
            for (; 0 <= d && 1 < c; )
                d = b.lastIndexOf(".", d - 1),
                    c--;
            a.La = 0 < d ? b.substring(d) : b
        }
        return a.La
    }
    ;
    a.c_r = a.cookieRead = function(b) {
        b = a.escape(b);
        var c = " " + a.d.cookie
            , d = c.indexOf(" " + b + "=")
            , f = 0 > d ? d : c.indexOf(";", d);
        b = 0 > d ? "" : a.unescape(c.substring(d + 2 + b.length, 0 > f ? c.length : f));
        return "[[B]]" != b ? b : ""
    }
    ;
    a.c_w = a.cookieWrite = function(b, c, d) {
        var f = a.Rb(), e = a.cookieLifetime, g;
        c = "" + c;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" != e && "NONE" != e && ((g = "" != c ? parseInt(e ? e : 0) : -60) ? (d = new Date,
            d.setTime(d.getTime() + 1E3 * g)) : 1 === d && (d = new Date,
            g = d.getYear(),
            d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
        return b && "NONE" != e ? (a.d.cookie = a.escape(b) + "=" + a.escape("" != c ? c : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toUTCString() + ";" : "") + (f ? " domain=" + f + ";" : "") + (a.writeSecureCookies ? " secure;" : ""),
        a.cookieRead(b) == c) : 0
    }
    ;
    a.Ob = function() {
        var b = a.Util.getIeVersion();
        "number" === typeof b && 10 > b && (a.unsupportedBrowser = !0,
            a.Bb(a, function() {}))
    }
    ;
    a.za = function() {
        var a = navigator.userAgent;
        return "Microsoft Internet Explorer" === navigator.appName || 0 <= a.indexOf("MSIE ") || 0 <= a.indexOf("Trident/") && 0 <= a.indexOf("Windows NT 6") ? !0 : !1
    }
    ;
    a.Bb = function(a, c) {
        for (var d in a)
            Object.prototype.hasOwnProperty.call(a, d) && "function" === typeof a[d] && (a[d] = c)
    }
    ;
    a.K = [];
    a.fa = function(b, c, d) {
        if (a.Ma)
            return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0
            , e = (new Date).getTime() + a.maxDelay
            , g = a.d.visibilityState
            , k = ["webkitvisibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
            if (!a.ga)
                for (a.ga = 1,
                         d = 0; d < k.length; d++)
                    a.d.addEventListener(k[d], function() {
                        var b = a.d.visibilityState;
                        b || (b = a.d.webkitVisibilityState);
                        "visible" == b && (a.ga = 0,
                            a.delayReady())
                    });
            f = 1;
            e = 0
        } else
            d || a.u("_d") && (f = 1);
        f && (a.K.push({
            m: b,
            a: c,
            t: e
        }),
        a.ga || setTimeout(a.delayReady, a.maxDelay));
        return f
    }
    ;
    a.delayReady = function() {
        var b = (new Date).getTime(), c = 0, d;
        for (a.u("_d") ? c = 1 : a.Ba(); 0 < a.K.length; ) {
            d = a.K.shift();
            if (c && !d.t && d.t > b) {
                a.K.unshift(d);
                setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                break
            }
            a.Ma = 1;
            a[d.m].apply(a, d.a);
            a.Ma = 0
        }
    }
    ;
    a.setAccount = a.sa = function(b) {
        var c, d;
        if (!a.fa("setAccount", arguments))
            if (a.account = b,
                a.allAccounts)
                for (c = a.allAccounts.concat(b.split(",")),
                         a.allAccounts = [],
                         c.sort(),
                         d = 0; d < c.length; d++)
                    0 != d && c[d - 1] == c[d] || a.allAccounts.push(c[d]);
            else
                a.allAccounts = b.split(",")
    }
    ;
    a.foreachVar = function(b, c) {
        var d, f, e, g, k = "";
        e = f = "";
        if (a.lightProfileID)
            d = a.O,
            (k = a.lightTrackVars) && (k = "," + k + "," + a.la.join(",") + ",");
        else {
            d = a.g;
            if (a.pe || a.linkType)
                k = a.linkTrackVars,
                    f = a.linkTrackEvents,
                a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1),
                a[e] && (k = a[e].ic,
                    f = a[e].hc));
            k && (k = "," + k + "," + a.D.join(",") + ",");
            f && k && (k += ",events,")
        }
        c && (c = "," + c + ",");
        for (f = 0; f < d.length; f++)
            e = d[f],
            (g = a[e]) && (!k || 0 <= k.indexOf("," + e + ",")) && (!c || 0 <= c.indexOf("," + e + ",")) && b(e, g)
    }
    ;
    a.l = function(b, c, d, f, e) {
        var g = "", k, l, h, n, m = 0;
        "contextData" == b && (b = "c");
        "clientHints" == b && (b = "h");
        if (c) {
            for (k in c)
                if (!(Object.prototype[k] || e && k.substring(0, e.length) != e) && c[k] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + k + ","))) {
                    h = !1;
                    if (m)
                        for (l = 0; l < m.length; l++)
                            if (k.substring(0, m[l].length) == m[l]) {
                                h = !0;
                                break
                            }
                    if (!h && ("" == g && (g += "&" + b + "."),
                        l = c[k],
                    e && (k = k.substring(e.length)),
                    0 < k.length))
                        if (h = k.indexOf("."),
                        0 < h)
                            l = k.substring(0, h),
                                h = (e ? e : "") + l + ".",
                            m || (m = []),
                                m.push(h),
                                g += a.l(l, c, d, f, h);
                        else if ("boolean" == typeof l && (l = l ? "true" : "false"),
                            l) {
                            if ("retrieveLightData" == f && 0 > e.indexOf(".contextData."))
                                switch (h = k.substring(0, 4),
                                    n = k.substring(4),
                                    k) {
                                    case "transactionID":
                                        k = "xact";
                                        break;
                                    case "channel":
                                        k = "ch";
                                        break;
                                    case "campaign":
                                        k = "v0";
                                        break;
                                    default:
                                        a.Sa(n) && ("prop" == h ? k = "c" + n : "eVar" == h ? k = "v" + n : "list" == h ? k = "l" + n : "hier" == h && (k = "h" + n,
                                            l = l.substring(0, 255)))
                                }
                            g += "&" + a.escape(k) + "=" + a.escape(l)
                        }
                }
            "" != g && (g += "&." + b)
        }
        return g
    }
    ;
    a.usePostbacks = 0;
    a.Ub = function() {
        var b = "", c, d, f, e, g, k, l, h, n = "", m = "", p = e = "", r = a.T();
        if (a.lightProfileID)
            c = a.O,
            (n = a.lightTrackVars) && (n = "," + n + "," + a.la.join(",") + ",");
        else {
            c = a.g;
            if (a.pe || a.linkType)
                n = a.linkTrackVars,
                    m = a.linkTrackEvents,
                a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1),
                a[e] && (n = a[e].ic,
                    m = a[e].hc));
            n && (n = "," + n + "," + a.D.join(",") + ",");
            m && (m = "," + m + ",",
            n && (n += ",events,"));
            a.events2 && (p += ("" != p ? "," : "") + a.events2)
        }
        if (r && r.getCustomerIDs) {
            e = q;
            if (g = r.getCustomerIDs())
                for (d in g)
                    Object.prototype[d] || (f = g[d],
                    "object" == typeof f && (e || (e = {}),
                    f.id && (e[d + ".id"] = f.id),
                    f.authState && (e[d + ".as"] = f.authState)));
            e && (b += a.l("cid", e))
        }
        a.AudienceManagement && a.AudienceManagement.isReady() && (b += a.l("d", a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < c.length; d++) {
            e = c[d];
            g = a[e];
            f = e.substring(0, 4);
            k = e.substring(4);
            g || ("events" == e && p ? (g = p,
                p = "") : "marketingCloudOrgID" == e && r && a.V("ECID") && (g = r.marketingCloudOrgID));
            if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
                switch (e) {
                    case "customerPerspective":
                        e = "cp";
                        break;
                    case "marketingCloudOrgID":
                        e = "mcorgid";
                        break;
                    case "supplementalDataID":
                        e = "sdid";
                        break;
                    case "timestamp":
                        e = "ts";
                        break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e = "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g";
                        255 < g.length && (a.pageURLRest = g.substring(255),
                            g = g.substring(0, 255));
                        break;
                    case "pageURLRest":
                        e = "-g";
                        break;
                    case "referrer":
                        e = "r";
                        break;
                    case "vmk":
                    case "visitorMigrationKey":
                        e = "vmt";
                        break;
                    case "visitorMigrationServer":
                        e = "vmf";
                        a.ssl && a.visitorMigrationServerSecure && (g = "");
                        break;
                    case "visitorMigrationServerSecure":
                        e = "vmf";
                        !a.ssl && a.visitorMigrationServer && (g = "");
                        break;
                    case "charSet":
                        e = "ce";
                        break;
                    case "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e = "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e = "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        p && (g += ("" != g ? "," : "") + p);
                        if (m)
                            for (k = g.split(","),
                                     g = "",
                                     f = 0; f < k.length; f++)
                                l = k[f],
                                    h = l.indexOf("="),
                                0 <= h && (l = l.substring(0, h)),
                                    h = l.indexOf(":"),
                                0 <= h && (l = l.substring(0, h)),
                                0 <= m.indexOf("," + l + ",") && (g += (g ? "," : "") + k[f]);
                        break;
                    case "events2":
                        g = "";
                        break;
                    case "contextData":
                        b += a.l("c", a[e], n, e);
                        g = "";
                        break;
                    case "clientHints":
                        b += a.l("h", a[e], n, e);
                        g = "";
                        break;
                    case "lightProfileID":
                        e = "mtp";
                        break;
                    case "lightStoreForSeconds":
                        e = "mtss";
                        a.lightProfileID || (g = "");
                        break;
                    case "lightIncrementBy":
                        e = "mti";
                        a.lightProfileID || (g = "");
                        break;
                    case "retrieveLightProfiles":
                        e = "mtsr";
                        break;
                    case "deleteLightProfiles":
                        e = "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (b += a.l("mts", a[e], n, e));
                        g = "";
                        break;
                    default:
                        a.Sa(k) && ("prop" == f ? e = "c" + k : "eVar" == f ? e = "v" + k : "list" == f ? e = "l" + k : "hier" == f && (e = "h" + k,
                            g = g.substring(0, 255)))
                }
                g && (b += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.e && (b += a.e)
        }
        a.ka && (b += "&lrt=" + a.ka,
            a.ka = null);
        return b
    }
    ;
    a.B = function(a) {
        var c = a.tagName;
        if ("undefined" != "" + a.pc || "undefined" != "" + a.cc && "HTML" != ("" + a.cc).toUpperCase())
            return "";
        c = c && c.toUpperCase ? c.toUpperCase() : "";
        "SHAPE" == c && (c = "");
        c && (("INPUT" == c || "BUTTON" == c) && a.type && a.type.toUpperCase ? c = a.type.toUpperCase() : !c && a.href && (c = "A"));
        return c
    }
    ;
    a.Oa = function(a) {
        var c = h.location, d = a.href ? a.href : "", f, e, g;
        "string" !== typeof d && (d = "");
        f = d.indexOf(":");
        e = d.indexOf("?");
        g = d.indexOf("/");
        d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = a.protocol && 1 < a.protocol.length ? a.protocol : c.protocol ? c.protocol : "",
            f = c.pathname.lastIndexOf("/"),
            d = (e ? e + "//" : "") + (a.host ? a.host : c.host ? c.host : "") + ("/" != d.substring(0, 1) ? c.pathname.substring(0, 0 > f ? 0 : f) + "/" : "") + d);
        return d
    }
    ;
    a.L = function(b) {
        var c = a.B(b), d, f, e = "", g = 0;
        return c && (d = b.protocol,
            f = b.onclick,
            !b.href || "A" != c && "AREA" != c || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""),
                g = 2) : "INPUT" == c || "SUBMIT" == c ? (b.value ? e = b.value : b.innerText ? e = b.innerText : b.textContent && (e = b.textContent),
                g = 3) : "IMAGE" == c && b.src && (e = b.src) : e = a.Oa(b),
            e) ? {
            id: e.substring(0, 100),
            type: g
        } : 0
    }
    ;
    a.nc = function(b) {
        for (var c = a.B(b), d = a.L(b); b && !d && "BODY" != c; )
            if (b = b.parentElement ? b.parentElement : b.parentNode)
                c = a.B(b),
                    d = a.L(b);
        d && "BODY" != c || (b = 0);
        b && (c = b.onclick ? "" + b.onclick : "",
        0 <= c.indexOf(".tl(") || 0 <= c.indexOf(".trackLink(")) && (b = 0);
        return b
    }
    ;
    a.bc = function() {
        var b, c, d = a.linkObject, f = a.linkType, e = a.linkURL, g, k;
        a.ma = 1;
        d || (a.ma = 0,
            d = a.clickObject);
        if (d) {
            b = a.B(d);
            for (c = a.L(d); d && !c && "BODY" != b; )
                if (d = d.parentElement ? d.parentElement : d.parentNode)
                    b = a.B(d),
                        c = a.L(d);
            c && "BODY" != b || (d = 0);
            if (d && !a.linkObject) {
                var l = d.onclick ? "" + d.onclick : "";
                if (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink("))
                    d = 0
            }
        } else
            a.ma = 1;
        !e && d && (e = a.Oa(d));
        e && !a.linkLeaveQueryString && (g = e.indexOf("?"),
        0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
            var m = 0, n = 0, p;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (l = e.toLowerCase(),
                         g = l.indexOf("?"),
                         k = l.indexOf("#"),
                         0 <= g ? 0 <= k && k < g && (g = k) : g = k,
                     0 <= g && (l = l.substring(0, g)),
                         g = a.linkDownloadFileTypes.toLowerCase().split(","),
                         k = 0; k < g.length; k++)
                    (p = g[k]) && l.substring(l.length - (p.length + 1)) == "." + p && (f = "d");
            if (a.trackExternalLinks && !f && (l = e.toLowerCase(),
            a.Ra(l) && (a.linkInternalFilters || (a.linkInternalFilters = h.location.hostname),
                g = 0,
                a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","),
                    m = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")),
                g))) {
                for (k = 0; k < g.length; k++)
                    p = g[k],
                    0 <= l.indexOf(p) && (n = 1);
                n ? m && (f = "e") : m || (f = "e")
            }
        }
        a.linkObject = d;
        a.linkURL = e;
        a.linkType = f;
        if (a.trackClickMap || a.trackInlineStats)
            a.e = "",
            d && (f = a.pageName,
                e = 1,
                d = d.sourceIndex,
            f || (f = a.pageURL,
                e = 0),
            h.s_objectID && (c.id = h.s_objectID,
                d = c.type = 1),
            f && c && c.id && b && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(c.id.substring(0, 100)) + (c.type ? "&oidt=" + c.type : "") + "&ot=" + b + (d ? "&oi=" + d : "")))
    }
    ;
    a.Vb = function() {
        var b = a.ma
            , c = a.linkType
            , d = a.linkURL
            , f = a.linkName;
        c && (d || f) && (c = c.toLowerCase(),
        "d" != c && "e" != c && (c = "o"),
            a.pe = "lnk_" + c,
            a.pev1 = d ? a.escape(d) : "",
            a.pev2 = f ? a.escape(f) : "",
            b = 1);
        a.abort && (b = 0);
        if (a.trackClickMap || a.trackInlineStats || a.Yb()) {
            var c = {}, d = 0, e = a.vb(), g = e ? e.split("&") : 0, k, l, h, e = 0;
            if (g)
                for (k = 0; k < g.length; k++)
                    l = g[k].split("="),
                        f = a.unescape(l[0]).split(","),
                        l = a.unescape(l[1]),
                        c[l] = f;
            f = a.account.split(",");
            k = {};
            for (h in a.contextData)
                h && !Object.prototype[h] && "a.activitymap." == h.substring(0, 14) && (k[h] = a.contextData[h],
                    a.contextData[h] = "");
            a.e = a.l("c", k) + (a.e ? a.e : "");
            if (b || a.e) {
                b && !a.e && (e = 1);
                for (l in c)
                    if (!Object.prototype[l])
                        for (h = 0; h < f.length; h++)
                            for (e && (g = c[l].join(","),
                            g == a.account && (a.e += ("&" != l.charAt(0) ? "&" : "") + l,
                                c[l] = [],
                                d = 1)),
                                     k = 0; k < c[l].length; k++)
                                g = c[l][k],
                                g == f[h] && (e && (a.e += "&u=" + a.escape(g) + ("&" != l.charAt(0) ? "&" : "") + l + "&u=0"),
                                    c[l].splice(k, 1),
                                    d = 1);
                b || (d = 1);
                if (d) {
                    e = "";
                    k = 2;
                    !b && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e),
                        k = 1);
                    for (l in c)
                        !Object.prototype[l] && 0 < k && 0 < c[l].length && (e += (e ? "&" : "") + a.escape(c[l].join(",")) + "=" + a.escape(l),
                            k--);
                    a.Db(e)
                }
            }
        }
        return b
    }
    ;
    a.vb = function() {
        if (a.useLinkTrackSessionStorage) {
            if (a.Fa())
                return h.sessionStorage.getItem(a.P)
        } else
            return a.cookieRead(a.P)
    }
    ;
    a.Fa = function() {
        return h.sessionStorage ? !0 : !1
    }
    ;
    a.Db = function(b) {
        a.useLinkTrackSessionStorage ? a.Fa() && h.sessionStorage.setItem(a.P, b) : a.cookieWrite(a.P, b)
    }
    ;
    a.Wb = function() {
        if (!a.gc) {
            var b = new Date, c = p.location, d, f, e = f = d = "", g = "", k = "", l = "1.2", h = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N", m = "", q = "";
            if (b.setUTCDate && (l = "1.3",
            (0).toPrecision && (l = "1.5",
                b = [],
                b.forEach))) {
                l = "1.6";
                f = 0;
                d = {};
                try {
                    f = new Iterator(d),
                    f.next && (l = "1.7",
                    b.reduce && (l = "1.8",
                    l.trim && (l = "1.8.1",
                    Date.parse && (l = "1.8.2",
                    Object.create && (l = "1.8.5")))))
                } catch (r) {}
            }
            d = screen.width + "x" + screen.height;
            e = navigator.javaEnabled() ? "Y" : "N";
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
            k = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"),
                    m = a.b.oc(c) ? "Y" : "N"
            } catch (s) {}
            try {
                a.b.addBehavior("#default#clientCaps"),
                    q = a.b.connectionType
            } catch (t) {}
            a.resolution = d;
            a.colorDepth = f;
            a.javascriptVersion = l;
            a.javaEnabled = e;
            a.cookiesEnabled = h;
            a.browserWidth = g;
            a.browserHeight = k;
            a.connectionType = q;
            a.homepage = m;
            a.gc = 1
        }
    }
    ;
    a.ib = function() {
        if (a.collectHighEntropyUserAgentHints && !a.H && a.cb()) {
            a.H = !0;
            try {
                navigator.userAgentData.getHighEntropyValues(a.ta).then(function(b) {
                    a.clientHints = {};
                    a.ta.forEach(function(d) {
                        Object.prototype.hasOwnProperty.call(b, d) && (a.clientHints[d] = b[d])
                    })
                })["catch"](function(b) {
                    a.H = !1;
                    a.clientHints = {};
                    a.debugTracking && a.log(b.message)
                })
            } catch (b) {
                a.H = !1,
                    a.clientHints = {},
                a.debugTracking && a.log(b.message)
            }
        } else
            a.clientHints = {}
    }
    ;
    a.cb = function() {
        return "undefined" !== typeof navigator.userAgentData
    }
    ;
    a.Q = {};
    a.loadModule = function(b, c) {
        var d = a.Q[b];
        if (!d) {
            d = h["AppMeasurement_Module_" + b] ? new h["AppMeasurement_Module_" + b](a) : {};
            a.Q[b] = a[b] = d;
            d.ob = function() {
                return d.yb
            }
            ;
            d.Eb = function(c) {
                if (d.yb = c)
                    a[b + "_onLoad"] = c,
                    a.fa(b + "_onLoad", [a, d], 1) || c(a, d)
            }
            ;
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", {
                    get: d.ob,
                    set: d.Eb
                }) : d._olc = 1
            } catch (f) {
                d._olc = 1
            }
        }
        c && (a[b + "_onLoad"] = c,
        a.fa(b + "_onLoad", [a, d], 1) || c(a, d))
    }
    ;
    a.u = function(b) {
        var c, d;
        for (c in a.Q)
            if (!Object.prototype[c] && (d = a.Q[c]) && (d._olc && d.onLoad && (d._olc = 0,
                d.onLoad(a, d)),
            d[b] && d[b]()))
                return 1;
        return 0
    }
    ;
    a.Yb = function() {
        return a.ActivityMap && a.ActivityMap._c ? !0 : !1
    }
    ;
    a.Zb = function() {
        var b = Math.floor(1E13 * Math.random())
            , c = a.visitorSampling
            , d = a.visitorSamplingGroup
            , d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : "")
            , f = a.cookieRead(d);
        if (c) {
            c *= 100;
            f && (f = parseInt(f));
            if (!f) {
                if (!a.cookieWrite(d, b))
                    return 0;
                f = b
            }
            if (f % 1E4 > c)
                return 0
        }
        return 1
    }
    ;
    a.S = function(b, c) {
        var d, f, e, g, k, h, m;
        m = {};
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.Ha : a.g,
                     e = 0; e < f.length; e++)
                if (g = f[e],
                (k = b[g]) || b["!" + g]) {
                    if (k && !c && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (h in a[g])
                            k[h] || (k[h] = a[g][h]);
                    a[g] || (m["!" + g] = 1);
                    m[g] = a[g];
                    a[g] = k
                }
        return m
    }
    ;
    a.lc = function(b) {
        var c, d, f, e;
        for (c = 0; 2 > c; c++)
            for (d = 0 < c ? a.Ha : a.g,
                     f = 0; f < d.length; f++)
                e = d[f],
                    b[e] = a[e],
                b[e] || "prop" !== e.substring(0, 4) && "eVar" !== e.substring(0, 4) && "hier" !== e.substring(0, 4) && "list" !== e.substring(0, 4) && "channel" !== e && "events" !== e && "eventList" !== e && "products" !== e && "productList" !== e && "purchaseID" !== e && "transactionID" !== e && "state" !== e && "zip" !== e && "campaign" !== e && "events2" !== e && "latitude" !== e && "longitude" !== e && "ms_a" !== e && "contextData" !== e && "supplementalDataID" !== e && "tnt" !== e && "timestamp" !== e && "abort" !== e && "useBeacon" !== e && "linkObject" !== e && "clickObject" !== e && "linkType" !== e && "linkName" !== e && "linkURL" !== e && "bodyClickTarget" !== e && "bodyClickFunction" !== e || (b["!" + e] = 1)
    }
    ;
    a.Qb = function(a) {
        var c, d, f, e, g, k = 0, h, m = "", n = "";
        if (a && 255 < a.length && (c = "" + a,
            d = c.indexOf("?"),
        0 < d && (h = c.substring(d + 1),
            c = c.substring(0, d),
            e = c.toLowerCase(),
            f = 0,
            "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8),
            d = e.indexOf("/", f),
        0 < d && (e = e.substring(f, d),
            g = c.substring(d),
            c = c.substring(0, d),
            0 <= e.indexOf("google") ? k = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") ? k = ",p,ei," : 0 <= e.indexOf("baidu.") && (k = ",wd,word,"),
        k && h)))) {
            if ((a = h.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++)
                    e = a[f],
                        d = e.indexOf("="),
                        0 < d && 0 <= k.indexOf("," + e.substring(0, d) + ",") ? m += (m ? "&" : "") + e : n += (n ? "&" : "") + e;
                m && n ? h = m + "&" + n : n = ""
            }
            d = 253 - (h.length - n.length) - c.length;
            a = c + (0 < d ? g.substring(0, d) : "") + "?" + h
        }
        return a
    }
    ;
    a.gb = function(b) {
        var c = a.d.visibilityState
            , d = ["webkitvisibilitychange", "visibilitychange"];
        c || (c = a.d.webkitVisibilityState);
        if (c && "prerender" == c) {
            if (b)
                for (c = 0; c < d.length; c++)
                    a.d.addEventListener(d[c], function() {
                        var c = a.d.visibilityState;
                        c || (c = a.d.webkitVisibilityState);
                        "visible" == c && b()
                    });
            return !1
        }
        return !0
    }
    ;
    a.ca = !1;
    a.G = !1;
    a.Gb = function() {
        a.G = !0;
        a.p()
    }
    ;
    a.I = !1;
    a.Hb = function(b) {
        a.marketingCloudVisitorID = b.MCMID;
        a.visitorOptedOut = b.MCOPTOUT;
        a.analyticsVisitorID = b.MCAID;
        a.audienceManagerLocationHint = b.MCAAMLH;
        a.audienceManagerBlob = b.MCAAMB;
        a.I = !1;
        a.p()
    }
    ;
    a.fb = function(b) {
        a.maxDelay || (a.maxDelay = 250);
        return a.u("_d") ? (b && setTimeout(function() {
            b()
        }, a.maxDelay),
            !1) : !0
    }
    ;
    a.aa = !1;
    a.F = !1;
    a.Ba = function() {
        a.F = !0;
        a.p()
    }
    ;
    a.isReadyToTrack = function() {
        var b = !0;
        if (!a.sb() || !a.qb())
            return !1;
        a.ub() || (b = !1);
        a.xb() || (b = !1);
        a.hb() || (b = !1);
        return b
    }
    ;
    a.sb = function() {
        a.ca || a.G || (a.gb(a.Gb) ? a.G = !0 : a.ca = !0);
        return a.ca && !a.G ? !1 : !0
    }
    ;
    a.qb = function() {
        var b = a.xa();
        if (b)
            if (a.ua || a.ba)
                if (a.ua) {
                    if (!b.isApproved(b.Categories.ANALYTICS))
                        return !1
                } else
                    return !1;
            else
                return b.fetchPermissions(a.zb, !0),
                    a.ba = !0,
                    !1;
        return !0
    }
    ;
    a.V = function(b) {
        var c = a.xa();
        return c && !c.isApproved(c.Categories[b]) ? !1 : !0
    }
    ;
    a.xa = function() {
        return h.adobe && h.adobe.optIn ? h.adobe.optIn : null
    }
    ;
    a.Y = !0;
    a.ub = function() {
        var b = a.T();
        if (!b || !b.getVisitorValues)
            return !0;
        a.Y && (a.Y = !1,
        a.I || (a.I = !0,
            b.getVisitorValues(a.Hb)));
        return !a.I
    }
    ;
    a.T = function() {
        var b = a.visitor;
        b && !b.isAllowed() && (b = null);
        return b
    }
    ;
    a.xb = function() {
        a.aa || a.F || (a.fb(a.Ba) ? a.F = !0 : a.aa = !0);
        return a.aa && !a.F ? !1 : !0
    }
    ;
    a.hb = function() {
        a.H || a.clientHints || a.ib();
        return a.clientHints
    }
    ;
    a.ba = !1;
    a.zb = function() {
        a.ba = !1;
        a.ua = !0
    }
    ;
    a.j = q;
    a.q = 0;
    a.callbackWhenReadyToTrack = function(b, c, d) {
        var f;
        f = {};
        f.Lb = b;
        f.Kb = c;
        f.Ib = d;
        a.j == q && (a.j = []);
        a.j.push(f);
        0 == a.q && (a.q = setInterval(a.p, 100))
    }
    ;
    a.p = function() {
        var b;
        if (a.isReadyToTrack() && (a.Fb(),
        a.j != q))
            for (; 0 < a.j.length; )
                b = a.j.shift(),
                    b.Kb.apply(b.Lb, b.Ib)
    }
    ;
    a.Fb = function() {
        a.q && (clearInterval(a.q),
            a.q = 0)
    }
    ;
    a.va = function(b) {
        var c, d = {};
        a.lc(d);
        if (b != q)
            for (c in b)
                d[c] = b[c];
        a.callbackWhenReadyToTrack(a, a.Ga, [d]);
        a.Ea()
    }
    ;
    a.Sb = function() {
        var b = a.cookieRead("s_fid"), c = "", d = "", f;
        f = 8;
        var e = 4;
        if (!b || 0 > b.indexOf("-")) {
            for (b = 0; 16 > b; b++)
                f = Math.floor(Math.random() * f),
                    c += "0123456789ABCDEF".substring(f, f + 1),
                    f = Math.floor(Math.random() * e),
                    d += "0123456789ABCDEF".substring(f, f + 1),
                    f = e = 16;
            b = c + "-" + d
        }
        a.cookieWrite("s_fid", b, 1) || (b = 0);
        return b
    }
    ;
    a.Ga = function(b) {
        var c = new Date, d = "s" + Math.floor(c.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()), f = c.getYear(), f = "t=" + a.escape(c.getDate() + "/" + c.getMonth() + "/" + (1900 > f ? f + 1900 : f) + " " + c.getHours() + ":" + c.getMinutes() + ":" + c.getSeconds() + " " + c.getDay() + " " + c.getTimezoneOffset()), e = a.T(), g;
        b && (g = a.S(b, 1));
        a.Zb() && !a.visitorOptedOut && (a.ya() || (a.fid = a.Sb()),
            a.bc(),
        a.usePlugins && a.doPlugins && a.doPlugins(a),
        a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(c.getTime() / 1E3)),
            b = h.location,
        a.pageURL || (a.pageURL = b.href ? b.href : b),
        a.referrer || a.ab || (b = a.Util.getQueryParam("adobe_mc_ref", null, null, !0),
            a.referrer = b || void 0 === b ? void 0 === b ? "" : b : p.document.referrer),
            a.ab = 1,
        !a.referrer && a.Z && (a.referrer = a.Z),
            a.Z = 0,
            a.referrer = a.Qb(a.referrer),
            a.u("_g")),
        a.Vb() && !a.abort && (e && a.V("TARGET") && !a.supplementalDataID && e.getSupplementalDataID && (a.supplementalDataID = e.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)),
        a.V("AAM") || (a.contextData["cm.ssf"] = 1),
            a.Wb(),
            a.Ab(),
            f += a.Ub(),
            a.wb(d, f),
            a.u("_t"),
            a.referrer = "",
        a.contextData && a.contextData.excCodes && (a.contextData.excCodes = 0))));
        a.referrer && (a.Z = a.referrer);
        a.Ea();
        g && a.S(g, 1)
    }
    ;
    a.t = a.track = function(b, c) {
        c && a.S(c);
        a.Y = !0;
        a.isReadyToTrack() ? null != a.j && 0 < a.j.length ? (a.va(b),
            a.p()) : a.Ga(b) : a.va(b)
    }
    ;
    a.Ab = function() {
        a.writeSecureCookies && !a.ssl && a.bb()
    }
    ;
    a.bb = function() {
        a.contextData.excCodes = a.contextData.excCodes || [];
        a.contextData.excCodes.push(1)
    }
    ;
    a.Ea = function() {
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = h.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = a.useBeacon = a.referrer = 0
    }
    ;
    a.Da = [];
    a.registerPreTrackCallback = function(b) {
        for (var c = [], d = 1; d < arguments.length; d++)
            c.push(arguments[d]);
        "function" == typeof b ? a.Da.push([b, c]) : a.debugTracking && a.log("Warning, Non function type passed to registerPreTrackCallback")
    }
    ;
    a.lb = function(b) {
        a.wa(a.Da, b)
    }
    ;
    a.Ca = [];
    a.registerPostTrackCallback = function(b) {
        for (var c = [], d = 1; d < arguments.length; d++)
            c.push(arguments[d]);
        "function" == typeof b ? a.Ca.push([b, c]) : a.debugTracking && a.log("Warning, Non function type passed to registerPostTrackCallback")
    }
    ;
    a.kb = function(b) {
        a.wa(a.Ca, b)
    }
    ;
    a.wa = function(b, c) {
        if ("object" == typeof b)
            for (var d = 0; d < b.length; d++) {
                var f = b[d][0]
                    , e = b[d][1].slice();
                e.unshift(c);
                if ("function" == typeof f)
                    try {
                        f.apply(null, e)
                    } catch (g) {
                        a.debugTracking && a.log(g.message)
                    }
            }
    }
    ;
    a.tl = a.trackLink = function(b, c, d, f, e) {
        a.linkObject = b;
        a.linkType = c;
        a.linkName = d;
        e && (a.bodyClickTarget = b,
            a.bodyClickFunction = e);
        return a.track(f)
    }
    ;
    a.trackLight = function(b, c, d, f) {
        a.lightProfileID = b;
        a.lightStoreForSeconds = c;
        a.lightIncrementBy = d;
        return a.track(f)
    }
    ;
    a.clearVars = function() {
        var b, c;
        for (b = 0; b < a.g.length; b++)
            if (c = a.g[b],
            "prop" == c.substring(0, 4) || "eVar" == c.substring(0, 4) || "hier" == c.substring(0, 4) || "list" == c.substring(0, 4) || "channel" == c || "events" == c || "eventList" == c || "products" == c || "productList" == c || "purchaseID" == c || "transactionID" == c || "state" == c || "zip" == c || "campaign" == c)
                a[c] = void 0
    }
    ;
    a.tagContainerMarker = "";
    a.wb = function(b, c) {
        var d = a.mb() + "/" + b + "?AQB=1&ndh=1&pf=1&" + (a.Aa() ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + c + "&AQE=1";
        a.lb(d);
        a.jb(d);
        a.U()
    }
    ;
    a.mb = function() {
        var b = a.nb();
        return "http" + (a.ssl ? "s" : "") + "://" + b + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (a.Aa() ? "10" : "1") + "/JS-" + a.version + (a.fc ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "")
    }
    ;
    a.Aa = function() {
        return a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks
    }
    ;
    a.nb = function() {
        var b = a.dc
            , c = a.trackingServer;
        c ? a.trackingServerSecure && a.ssl && (c = a.trackingServerSecure) : (b = b ? ("" + b).toLowerCase() : "d1",
            "d1" == b ? b = "112" : "d2" == b && (b = "122"),
            c = a.pb() + "." + b + ".2o7.net");
        return c
    }
    ;
    a.pb = function() {
        var b = a.visitorNamespace;
        b || (b = a.account.split(",")[0],
            b = b.replace(/[^0-9a-z]/gi, ""));
        return b
    }
    ;
    a.$a = /{(%?)(.*?)(%?)}/;
    a.kc = RegExp(a.$a.source, "g");
    a.Pb = function(b) {
        if ("object" == typeof b.dests)
            for (var c = 0; c < b.dests.length; ++c) {
                var d = b.dests[c];
                if ("string" == typeof d.c && "aa." == d.id.substr(0, 3))
                    for (var f = d.c.match(a.kc), e = 0; e < f.length; ++e) {
                        var g = f[e]
                            , k = g.match(a.$a)
                            , h = "";
                        "%" == k[1] && "timezone_offset" == k[2] ? h = (new Date).getTimezoneOffset() : "%" == k[1] && "timestampz" == k[2] && (h = a.Tb());
                        d.c = d.c.replace(g, a.escape(h))
                    }
            }
    }
    ;
    a.Tb = function() {
        var b = new Date
            , c = new Date(6E4 * Math.abs(b.getTimezoneOffset()));
        return a.k(4, b.getFullYear()) + "-" + a.k(2, b.getMonth() + 1) + "-" + a.k(2, b.getDate()) + "T" + a.k(2, b.getHours()) + ":" + a.k(2, b.getMinutes()) + ":" + a.k(2, b.getSeconds()) + (0 < b.getTimezoneOffset() ? "-" : "+") + a.k(2, c.getUTCHours()) + ":" + a.k(2, c.getUTCMinutes())
    }
    ;
    a.k = function(a, c) {
        return (Array(a + 1).join(0) + c).slice(-a)
    }
    ;
    a.qa = {};
    a.doPostbacks = function(b) {
        if ("object" == typeof b)
            if (a.Pb(b),
            "object" == typeof a.AudienceManagement && "function" == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && "function" == typeof a.AudienceManagement.passData)
                a.AudienceManagement.passData(b);
            else if ("object" == typeof b && "object" == typeof b.dests)
                for (var c = 0; c < b.dests.length; ++c) {
                    var d = b.dests[c];
                    "object" == typeof d && "string" == typeof d.c && "string" == typeof d.id && "aa." == d.id.substr(0, 3) && (a.qa[d.id] = new Image,
                        a.qa[d.id].alt = "",
                        a.qa[d.id].src = d.c)
                }
    }
    ;
    a.jb = function(b) {
        a.i || a.Xb();
        a.i.push(b);
        a.ja = a.A();
        a.Za()
    }
    ;
    a.Xb = function() {
        a.i = a.$b();
        a.i || (a.i = [])
    }
    ;
    a.$b = function() {
        var b, c;
        if (a.pa()) {
            try {
                (c = h.localStorage.getItem(a.na())) && (b = h.JSON.parse(c))
            } catch (d) {}
            return b
        }
    }
    ;
    a.pa = function() {
        var b = !0;
        a.trackOffline && a.offlineFilename && h.localStorage && h.JSON || (b = !1);
        return b
    }
    ;
    a.Pa = function() {
        var b = 0;
        a.i && (b = a.i.length);
        a.o && b++;
        return b
    }
    ;
    a.U = function() {
        if (a.o && (a.v && a.v.complete && a.v.C && a.v.R(),
            a.o))
            return;
        a.Qa = q;
        if (a.oa)
            a.ja > a.N && a.Xa(a.i),
                a.ra(500);
        else {
            var b = a.Jb();
            if (0 < b)
                a.ra(b);
            else if (b = a.Na())
                a.o = 1,
                    a.ac(b),
                    a.ec(b)
        }
    }
    ;
    a.ra = function(b) {
        a.Qa || (b || (b = 0),
            a.Qa = setTimeout(a.U, b))
    }
    ;
    a.Jb = function() {
        var b;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay)
            return 0;
        b = a.A() - a.Va;
        return a.offlineThrottleDelay < b ? 0 : a.offlineThrottleDelay - b
    }
    ;
    a.Na = function() {
        if (0 < a.i.length)
            return a.i.shift()
    }
    ;
    a.ac = function(b) {
        if (a.debugTracking) {
            var c = "AppMeasurement Debug: " + b;
            b = b.split("&");
            var d;
            for (d = 0; d < b.length; d++)
                c += "\n\t" + a.unescape(b[d]);
            a.log(c)
        }
    }
    ;
    a.ya = function() {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    }
    ;
    a.X = !1;
    var t;
    try {
        t = JSON.parse('{"x":"y"}')
    } catch (v) {
        t = null
    }
    t && "y" == t.x ? (a.X = !0,
            a.W = function(a) {
                return JSON.parse(a)
            }
    ) : h.$ && h.$.parseJSON ? (a.W = function(a) {
        return h.$.parseJSON(a)
    }
        ,
        a.X = !0) : a.W = function() {
        return null
    }
    ;
    a.ec = function(b) {
        var c, d, f;
        a.rb(b) && (d = 1,
            c = {
                send: function(b) {
                    a.useBeacon = !1;
                    navigator.sendBeacon(b) ? c.R() : c.ha()
                }
            });
        !c && a.ya() && 2047 < b.length && (a.eb() && (d = 2,
            c = new XMLHttpRequest),
        c && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.X ? c.Ia = !0 : c = 0));
        !c && a.jc && (b = b.substring(0, 2047));
        !c && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (c = a.d.createElement("SCRIPT")) && "async"in c && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (c.type = "text/javascript",
            c.setAttribute("async", "async"),
            d = 3) : c = 0);
        c || (c = new Image,
            d = 4,
            c.alt = "",
        c.abort || "undefined" === typeof h.InstallTrigger || (c.abort = function() {
                c.src = q
            }
        ));
        c.Wa = Date.now();
        c.Ka = function() {
            try {
                c.C && (clearTimeout(c.C),
                    c.C = 0)
            } catch (a) {}
        }
        ;
        c.onload = c.R = function() {
            c.Wa && (a.ka = Date.now() - c.Wa);
            a.kb(b);
            c.Ka();
            a.Nb();
            a.da();
            a.o = 0;
            a.U();
            if (c.Ia) {
                c.Ia = !1;
                try {
                    a.doPostbacks(a.W(c.responseText))
                } catch (d) {}
            }
        }
        ;
        c.onabort = c.onerror = c.ha = function() {
            c.Ka();
            (a.trackOffline || a.oa) && a.o && a.i.unshift(a.Mb);
            a.o = 0;
            a.ja > a.N && a.Xa(a.i);
            a.da();
            a.ra(500)
        }
        ;
        c.onreadystatechange = function() {
            4 == c.readyState && (200 == c.status ? c.R() : c.ha())
        }
        ;
        a.Va = a.A();
        if (1 === d)
            c.send(b);
        else if (2 === d)
            f = b.indexOf("?"),
                d = b.substring(0, f),
                f = b.substring(f + 1),
                f = f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""),
                c.open("POST", d, !0),
                c.withCredentials = !0,
                c.send(f);
        else if (c.src = b,
        3 === d) {
            if (a.Ta)
                try {
                    f.removeChild(a.Ta)
                } catch (e) {}
            f.firstChild ? f.insertBefore(c, f.firstChild) : f.appendChild(c);
            a.Ta = a.v
        }
        c.C = setTimeout(function() {
            c.C && (c.complete ? c.R() : (a.trackOffline && c.abort && c.abort(),
                c.ha()))
        }, 5E3);
        a.Mb = b;
        a.v = h["s_i_" + a.replace(a.account, ",", "_")] = c;
        if (a.useForcedLinkTracking && a.J || a.bodyClickFunction)
            a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250),
                a.ea = setTimeout(a.da, a.forcedLinkTrackingTimeout)
    }
    ;
    a.rb = function(b) {
        var c = !1;
        navigator.sendBeacon && (a.tb(b) ? c = !0 : a.useBeacon && (c = !0));
        a.Cb(b) && (c = !1);
        return c
    }
    ;
    a.tb = function(a) {
        return a && 0 < a.indexOf("pe=lnk_e") ? !0 : !1
    }
    ;
    a.Cb = function(a) {
        return 64E3 <= a.length
    }
    ;
    a.eb = function() {
        return "undefined" !== typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest ? !0 : !1
    }
    ;
    a.Nb = function() {
        if (a.pa() && !(a.Ua > a.N))
            try {
                h.localStorage.removeItem(a.na()),
                    a.Ua = a.A()
            } catch (b) {}
    }
    ;
    a.Xa = function(b) {
        if (a.pa()) {
            a.Za();
            try {
                h.localStorage.setItem(a.na(), h.JSON.stringify(b)),
                    a.N = a.A()
            } catch (c) {}
        }
    }
    ;
    a.Za = function() {
        if (a.trackOffline) {
            if (!a.offlineLimit || 0 >= a.offlineLimit)
                a.offlineLimit = 10;
            for (; a.i.length > a.offlineLimit; )
                a.Na()
        }
    }
    ;
    a.forceOffline = function() {
        a.oa = !0
    }
    ;
    a.forceOnline = function() {
        a.oa = !1
    }
    ;
    a.na = function() {
        return a.offlineFilename + "-" + a.visitorNamespace + a.account
    }
    ;
    a.A = function() {
        return (new Date).getTime()
    }
    ;
    a.Ra = function(a) {
        a = a.toLowerCase();
        return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
    }
    ;
    a.setTagContainer = function(b) {
        var c, d, f;
        a.fc = b;
        for (c = 0; c < a._il.length; c++)
            if ((d = a._il[c]) && "s_l" == d._c && d.tagContainerName == b) {
                a.S(d);
                if (d.lmq)
                    for (c = 0; c < d.lmq.length; c++)
                        f = d.lmq[c],
                            a.loadModule(f.n);
                if (d.ml)
                    for (f in d.ml)
                        if (a[f])
                            for (c in b = a[f],
                                f = d.ml[f],
                                f)
                                !Object.prototype[c] && ("function" != typeof f[c] || 0 > ("" + f[c]).indexOf("s_c_il")) && (b[c] = f[c]);
                if (d.mmq)
                    for (c = 0; c < d.mmq.length; c++)
                        f = d.mmq[c],
                        a[f.m] && (b = a[f.m],
                        b[f.f] && "function" == typeof b[f.f] && (f.a ? b[f.f].apply(b, f.a) : b[f.f].apply(b)));
                if (d.tq)
                    for (c = 0; c < d.tq.length; c++)
                        a.track(d.tq[c]);
                d.s = a;
                break
            }
    }
    ;
    a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function(b, c, d, f) {
            var e, g = "";
            c || (c = a.pageURL ? a.pageURL : h.location);
            d = d ? d : "&";
            if (!b || !c)
                return g;
            c = "" + c;
            e = c.indexOf("?");
            if (0 > e)
                return g;
            c = d + c.substring(e + 1) + d;
            if (!f || !(0 <= c.indexOf(d + b + d) || 0 <= c.indexOf(d + b + "=" + d))) {
                e = c.indexOf("#");
                0 <= e && (c = c.substr(0, e) + d);
                e = c.indexOf(d + b + "=");
                if (0 > e)
                    return g;
                c = c.substring(e + d.length + b.length + 1);
                e = c.indexOf(d);
                0 <= e && (c = c.substring(0, e));
                0 < c.length && (g = a.unescape(c));
                return g
            }
        },
        getIeVersion: function() {
            return document.documentMode ? document.documentMode : a.za() ? 7 : null
        }
    };
    a.D = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData contextData.cm.ssf contextData.opt.dmp contextData.opt.sell clientHints currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
    a.g = a.D.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
    a.la = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
    a.O = a.la.slice(0);
    a.Ha = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage collectHighEntropyUserAgentHints trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" ");
    for (m = 0; 250 >= m; m++)
        76 > m && (a.g.push("prop" + m),
            a.O.push("prop" + m)),
            a.g.push("eVar" + m),
            a.O.push("eVar" + m),
        6 > m && a.g.push("hier" + m),
        4 > m && a.g.push("list" + m);
    m = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");
    a.g = a.g.concat(m);
    a.D = a.D.concat(m);
    a.ssl = 0 <= h.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
    a.contextData = {};
    a.ta = ["architecture", "bitness", "model", "platformVersion", "wow64"];
    a.writeSecureCookies = !1;
    a.collectHighEntropyUserAgentHints = !1;
    a.offlineThrottleDelay = 0;
    a.offlineFilename = "AppMeasurement.offline";
    a.P = "s_sq";
    a.Va = 0;
    a.ja = 0;
    a.N = 0;
    a.Ua = 0;
    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = h;
    a.d = h.document;
    a.da = function() {
        a.ea && (h.clearTimeout(a.ea),
            a.ea = q);
        a.bodyClickTarget && a.J && a.bodyClickTarget.dispatchEvent(a.J);
        a.bodyClickFunction && ("function" == typeof a.bodyClickFunction ? a.bodyClickFunction() : a.bodyClickTarget && a.bodyClickTarget.href && (a.d.location = a.bodyClickTarget.href));
        a.bodyClickTarget = a.J = a.bodyClickFunction = 0
    }
    ;
    a.Ya = function() {
        a.b = a.d.body;
        a.b ? (a.r = function(b) {
            var c, d, f, e, g;
            if (!(a.d && a.d.getElementById("cppXYctnr") || b && b["s_fe_" + a._in])) {
                if (a.Ja)
                    if (a.useForcedLinkTracking)
                        a.b.removeEventListener("click", a.r, !1);
                    else {
                        a.b.removeEventListener("click", a.r, !0);
                        a.Ja = a.useForcedLinkTracking = 0;
                        return
                    }
                else
                    a.useForcedLinkTracking = 0;
                a.clickObject = b.srcElement ? b.srcElement : b.target;
                try {
                    if (!a.clickObject || a.M && a.M == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode))
                        a.clickObject = 0;
                    else {
                        var k = a.M = a.clickObject;
                        a.ia && (clearTimeout(a.ia),
                            a.ia = 0);
                        a.ia = setTimeout(function() {
                            a.M == k && (a.M = 0)
                        }, 1E4);
                        f = a.Pa();
                        a.track();
                        if (f < a.Pa() && a.useForcedLinkTracking && b.target) {
                            for (e = b.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase(); )
                                e = e.parentNode;
                            if (e && (g = e.href,
                            a.Ra(g) || (g = 0),
                                d = e.target,
                            b.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || h.name && d == h.name))) {
                                try {
                                    c = a.d.createEvent("MouseEvents")
                                } catch (l) {
                                    c = new h.MouseEvent
                                }
                                if (c) {
                                    try {
                                        c.initMouseEvent("click", b.bubbles, b.cancelable, b.view, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget)
                                    } catch (m) {
                                        c = 0
                                    }
                                    c && (c["s_fe_" + a._in] = c.s_fe = 1,
                                        b.stopPropagation(),
                                    b.stopImmediatePropagation && b.stopImmediatePropagation(),
                                        b.preventDefault(),
                                        a.bodyClickTarget = b.target,
                                        a.J = c)
                                }
                            }
                        }
                    }
                } catch (n) {
                    a.clickObject = 0
                }
            }
        }
            ,
            a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.r) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && h.MouseEvent) && (a.Ja = 1,
                a.useForcedLinkTracking = 1,
                a.b.addEventListener("click", a.r, !0)),
                a.b.addEventListener("click", a.r, !1))) : setTimeout(a.Ya, 30)
    }
    ;
    a.jc = a.za();
    a.Ob();
    a.qc || (r ? a.setAccount(r) : a.log("Error, missing Report Suite ID in AppMeasurement initialization"),
        a.Ya(),
        a.loadModule("ActivityMap"))
}
function s_gi(r) {
    var a, h = window.s_c_il, q, p, m = r.split(","), s, u, t = 0;
    if (h)
        for (q = 0; !t && q < h.length; ) {
            a = h[q];
            if ("s_c" == a._c && (a.account || a.oun))
                if (a.account && a.account == r)
                    t = 1;
                else
                    for (p = a.account ? a.account : a.oun,
                             p = a.allAccounts ? a.allAccounts : p.split(","),
                             s = 0; s < m.length; s++)
                        for (u = 0; u < p.length; u++)
                            m[s] == p[u] && (t = 1);
            q++
        }
    t ? a.setAccount && a.setAccount(r) : a = new AppMeasurement(r);
    return a
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);
function s_pgicq() {
    var r = window, a = r.s_giq, h, q, p;
    if (a)
        for (h = 0; h < a.length; h++)
            q = a[h],
                p = s_gi(q.oun),
                p.setAccount(q.un),
                p.setTagContainer(q.tagContainerName);
    r.s_giq = 0
}
s_pgicq();
function AppMeasurement_Module_AudienceManagement(d) {
    var a = this;
    a.s = d;
    var b = window;
    b.s_c_in || (b.s_c_il = [],
        b.s_c_in = 0);
    a._il = b.s_c_il;
    a._in = b.s_c_in;
    a._il[a._in] = a;
    b.s_c_in++;
    a._c = "s_m";
    a.setup = function(c) {
        b.DIL && c && (c.disableDefaultRequest = !0,
            c.disableCORS = !0,
            c.secureDataCollection = !1,
            a.instance = b.DIL.create(c),
            a.tools = b.DIL.tools)
    }
    ;
    a.isReady = function() {
        return a.instance ? !0 : !1
    }
    ;
    a.getEventCallConfigParams = function() {
        return a.instance && a.instance.api && a.instance.api.getEventCallConfigParams ? a.instance.api.getEventCallConfigParams() : {}
    }
    ;
    a.passData = function(b) {
        a.instance && a.instance.api && a.instance.api.passData && a.instance.api.passData(b)
    }
}
!function() {
    "use strict";
    var r, o, a;
    "function" != typeof window.DIL && (window.DIL = function(n) {
        var c, e, I, r, u, h, t, o, s, i, a, d, y, l, f, g, p, m, b, v, D, O = [], C = {};
        function S(e) {
            return void 0 === e || !0 === e
        }
        n !== Object(n) && (n = {}),
            I = n.partner,
            r = n.containerNSID,
            u = n.mappings,
            h = n.uuidCookie,
            t = !0 === n.enableErrorReporting,
            o = n.visitorService,
            s = n.declaredId,
            i = !0 === n.delayAllUntilWindowLoad,
            a = S(n.secureDataCollection),
            d = "boolean" == typeof n.isCoopSafe ? n.isCoopSafe : null,
            y = S(n.enableHrefererParam),
            l = S(n.enableLogging),
            f = S(n.enableUrlDestinations),
            g = S(n.enableCookieDestinations),
            p = !0 === n.disableDefaultRequest,
            m = n.afterResultForDefaultRequest,
            b = n.visitorConstructor,
            v = !0 === n.disableCORS,
            D = !0 === n.ignoreHardDependencyOnVisitorAPI,
        t && DIL.errorModule.activate(),
        D && O.push("Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.");
        var w = !0 === window._dil_unit_tests;
        if ((c = arguments[1]) && O.push(c + ""),
        !I || "string" != typeof I) {
            var _ = {
                name: "error",
                message: c = "DIL partner is invalid or not specified in initConfig",
                filename: "dil.js"
            };
            return DIL.errorModule.handleError(_),
                new Error(c)
        }
        if (c = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0",
        !r && "number" != typeof r || (r = parseInt(r, 10),
        !isNaN(r) && 0 <= r && (c = "")),
        c && (r = 0,
            O.push(c),
            c = ""),
        (e = DIL.getDil(I, r))instanceof DIL && e.api.getPartner() === I && e.api.getContainerNSID() === r)
            return e;
        if (!(this instanceof DIL))
            return new DIL(n,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + I + " and containerNSID = " + r);
        DIL.registerDil(this, I, r);
        var R = {
            doesConsoleLogExist: window.console === Object(window.console) && "function" == typeof window.console.log,
            logMemo: {},
            log: function(e) {
                O.push(e),
                l && this.doesConsoleLogExist && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, arguments)
            },
            logOnce: function(e) {
                this.logMemo[e] || (this.logMemo[e] = !0,
                    R.log(e))
            }
        }
            , E = {
            IS_HTTPS: a || "https:" === document.location.protocol,
            SIX_MONTHS_IN_MINUTES: 259200,
            IE_VERSION: function() {
                if (document.documentMode)
                    return document.documentMode;
                for (var e = 7; 4 < e; e--) {
                    var t = document.createElement("div");
                    if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e",
                        t.getElementsByTagName("span").length)
                        return t = null,
                            e
                }
                return null
            }()
        };
        E.IS_IE_LESS_THAN_10 = "number" == typeof E.IE_VERSION && E.IE_VERSION < 10;
        var P = {
            stuffed: {}
        }
            , L = {}
            , A = {
            firingQueue: [],
            fired: [],
            firing: !1,
            sent: [],
            errored: [],
            reservedKeys: {
                sids: !0,
                pdata: !0,
                logdata: !0,
                callback: !0,
                postCallbackFn: !0,
                useImageRequest: !0
            },
            firstRequestHasFired: !1,
            abortRequests: !1,
            num_of_cors_responses: 0,
            num_of_cors_errors: 0,
            corsErrorSources: [],
            num_of_img_responses: 0,
            num_of_img_errors: 0,
            platformParams: {
                d_nsid: r + "",
                d_rtbd: "json",
                d_jsonv: DIL.jsonVersion + "",
                d_dst: "1"
            },
            nonModStatsParams: {
                d_rtbd: !0,
                d_dst: !0,
                d_cts: !0,
                d_rs: !0
            },
            modStatsParams: null,
            adms: {
                TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 3e4,
                calledBack: !1,
                mid: null,
                noVisitorAPI: null,
                VisitorAPI: null,
                instance: null,
                releaseType: "no VisitorAPI",
                isOptedOut: !0,
                isOptedOutCallbackCalled: !1,
                admsProcessingStarted: !1,
                process: function(e) {
                    try {
                        if (this.admsProcessingStarted)
                            return;
                        this.admsProcessingStarted = !0;
                        var t, n, s, i = o;
                        if ("function" != typeof e || "function" != typeof e.getInstance)
                            throw this.noVisitorAPI = !0,
                                new Error("Visitor does not exist.");
                        if (i !== Object(i) || !(t = i.namespace) || "string" != typeof t)
                            throw this.releaseType = "no namespace",
                                new Error("DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}");
                        if ((n = e.getInstance(t, {
                            idSyncContainerID: r
                        })) !== Object(n) || "function" != typeof n.isAllowed || "function" != typeof n.getMarketingCloudVisitorID || "function" != typeof n.getCustomerIDs || "function" != typeof n.isOptedOut || "function" != typeof n.publishDestinations)
                            throw this.releaseType = "invalid instance",
                                s = "Invalid Visitor instance.",
                            n === Object(n) && "function" != typeof n.publishDestinations && (s += " In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ ."),
                                new Error(s);
                        if (this.VisitorAPI = e,
                            !n.isAllowed())
                            return this.releaseType = "VisitorAPI is not allowed to write cookies",
                                void this.releaseRequests();
                        this.instance = n,
                            this.waitForMidToReleaseRequests()
                    } catch (e) {
                        if (!D)
                            throw new Error("Error in processing Visitor API, which is a hard dependency for DIL v8.0+: " + e.message);
                        this.releaseRequests()
                    }
                },
                waitForMidToReleaseRequests: function() {
                    var t = this;
                    this.instance && (this.instance.getMarketingCloudVisitorID(function(e) {
                        t.mid = e,
                            t.releaseType = "VisitorAPI",
                            t.releaseRequests()
                    }, !0),
                    (!N.exists || !N.isIabContext && N.isApproved() || N.isIabContext && B.hasGoSignal()) && setTimeout(function() {
                        "VisitorAPI" !== t.releaseType && (t.releaseType = "timeout",
                            t.releaseRequests())
                    }, this.getLoadTimeout()))
                },
                releaseRequests: function() {
                    this.calledBack = !0,
                        A.registerRequest()
                },
                getMarketingCloudVisitorID: function() {
                    return this.instance ? this.instance.getMarketingCloudVisitorID() : null
                },
                getMIDQueryString: function() {
                    var e = k.isPopulatedString
                        , t = this.getMarketingCloudVisitorID();
                    return e(this.mid) && this.mid === t || (this.mid = t),
                        e(this.mid) ? "d_mid=" + this.mid + "&" : ""
                },
                getCustomerIDs: function() {
                    return this.instance ? this.instance.getCustomerIDs() : null
                },
                getCustomerIDsQueryString: function(e) {
                    if (e !== Object(e))
                        return "";
                    var t, n, s, i, r = "", o = [], a = [];
                    for (t in e)
                        e.hasOwnProperty(t) && (n = e[a[0] = t]) === Object(n) && (a[1] = n.id || "",
                            a[2] = n.authState || 0,
                            o.push(a),
                            a = []);
                    if (i = o.length)
                        for (s = 0; s < i; s++)
                            r += "&d_cid_ic=" + x.encodeAndBuildRequest(o[s], "%01");
                    return r
                },
                getIsOptedOut: function() {
                    this.instance ? this.instance.isOptedOut([this, this.isOptedOutCallback], this.VisitorAPI.OptOut.GLOBAL, !0) : (this.isOptedOut = !1,
                        this.isOptedOutCallbackCalled = !0)
                },
                isOptedOutCallback: function(e) {
                    this.isOptedOut = e,
                        this.isOptedOutCallbackCalled = !0,
                        A.registerRequest(),
                    N.isIabContext() && B.checkQueryStringObject()
                },
                getLoadTimeout: function() {
                    var e = this.instance;
                    if (e) {
                        if ("function" == typeof e.getLoadTimeout)
                            return e.getLoadTimeout();
                        if (void 0 !== e.loadTimeout)
                            return e.loadTimeout
                    }
                    return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE
                }
            },
            declaredId: {
                declaredId: {
                    init: null,
                    request: null
                },
                declaredIdCombos: {},
                setDeclaredId: function(e, t) {
                    var n = k.isPopulatedString
                        , s = encodeURIComponent;
                    if (e === Object(e) && n(t)) {
                        var i = e.dpid
                            , r = e.dpuuid
                            , o = null;
                        if (n(i) && n(r))
                            return o = s(i) + "$" + s(r),
                                !0 === this.declaredIdCombos[o] ? "setDeclaredId: combo exists for type '" + t + "'" : (this.declaredIdCombos[o] = !0,
                                    this.declaredId[t] = {
                                        dpid: i,
                                        dpuuid: r
                                    },
                                "setDeclaredId: succeeded for type '" + t + "'")
                    }
                    return "setDeclaredId: failed for type '" + t + "'"
                },
                getDeclaredIdQueryString: function() {
                    var e = this.declaredId.request
                        , t = this.declaredId.init
                        , n = encodeURIComponent
                        , s = "";
                    return null !== e ? s = "&d_dpid=" + n(e.dpid) + "&d_dpuuid=" + n(e.dpuuid) : null !== t && (s = "&d_dpid=" + n(t.dpid) + "&d_dpuuid=" + n(t.dpuuid)),
                        s
                }
            },
            registerRequest: function(e) {
                var t, n = this.firingQueue;
                e === Object(e) && (n.push(e),
                e.isDefaultRequest || (p = !0)),
                this.firing || !n.length || i && !DIL.windowLoaded || (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(),
                this.adms.calledBack && !this.adms.isOptedOut && this.adms.isOptedOutCallbackCalled && (N.isApproved() || B.hasGoSignal()) && (this.adms.isOptedOutCallbackCalled = !1,
                    (t = n.shift()).src = t.src.replace(/&d_nsid=/, "&" + this.adms.getMIDQueryString() + B.getQueryString() + "d_nsid="),
                k.isPopulatedString(t.corsPostData) && (t.corsPostData = t.corsPostData.replace(/^d_nsid=/, this.adms.getMIDQueryString() + B.getQueryString() + "d_nsid=")),
                    V.fireRequest(t),
                this.firstRequestHasFired || "script" !== t.tag && "cors" !== t.tag || (this.firstRequestHasFired = !0)))
            },
            processVisitorAPI: function() {
                this.adms.process(b || window.Visitor)
            },
            getCoopQueryString: function() {
                var e = "";
                return !0 === d ? e = "&d_coop_safe=1" : !1 === d && (e = "&d_coop_unsafe=1"),
                    e
            }
        };
        C.requestController = A;
        var q, j, T = {
            sendingMessages: !1,
            messages: [],
            messagesPosted: [],
            destinations: [],
            destinationsPosted: [],
            jsonForComparison: [],
            jsonDuplicates: [],
            jsonWaiting: [],
            jsonProcessed: [],
            publishDestinationsVersion: null,
            requestToProcess: function(e, t) {
                var n, s = this;
                function i() {
                    s.jsonForComparison.push(e),
                        s.jsonWaiting.push([e, t])
                }
                if (e && !k.isEmptyObject(e))
                    if (n = JSON.stringify(e.dests || []),
                        this.jsonForComparison.length) {
                        var r, o, a, d = !1;
                        for (r = 0,
                                 o = this.jsonForComparison.length; r < o; r++)
                            if (a = this.jsonForComparison[r],
                            n === JSON.stringify(a.dests || [])) {
                                d = !0;
                                break
                            }
                        d ? this.jsonDuplicates.push(e) : i()
                    } else
                        i();
                if (this.jsonWaiting.length) {
                    var u = this.jsonWaiting.shift();
                    this.process(u[0], u[1]),
                        this.requestToProcess()
                }
                this.messages.length && !this.sendingMessages && this.sendMessages()
            },
            process: function(e) {
                if (f) {
                    var t, n, s, i, r, o, a = encodeURIComponent, d = this.getPublishDestinationsVersion(), u = !1;
                    if (-1 !== d) {
                        if ((t = e.dests) && t instanceof Array && (n = t.length)) {
                            for (s = 0; s < n; s++)
                                i = t[s],
                                    o = [a("dests"), a(i.id || ""), a(i.y || ""), a(i.c || "")].join("|"),
                                    this.addMessage(o),
                                    r = {
                                        url: i.c,
                                        hideReferrer: void 0 === i.hr || !!i.hr,
                                        message: o
                                    },
                                    this.addDestination(r),
                                void 0 !== i.hr && (u = !0);
                            1 === d && u && R.logOnce("Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.")
                        }
                        this.jsonProcessed.push(e)
                    }
                }
            },
            addMessage: function(e) {
                this.messages.push(e)
            },
            addDestination: function(e) {
                this.destinations.push(e)
            },
            sendMessages: function() {
                this.sendingMessages || (this.sendingMessages = !0,
                f && this.messages.length && this.publishDestinations())
            },
            publishDestinations: function() {
                function e(e) {
                    R.log("visitor.publishDestinations() result: " + (e.error || e.message)),
                        n.sendingMessages = !1,
                        n.requestToProcess()
                }
                function t() {
                    n.messages = [],
                        n.destinations = []
                }
                var n = this
                    , s = A.adms.instance
                    , i = []
                    , r = [];
                return 1 === this.publishDestinationsVersion ? (x.extendArray(i, this.messages),
                    x.extendArray(this.messagesPosted, this.messages),
                    t(),
                    s.publishDestinations(I, i, e),
                    "Called visitor.publishDestinations() version 1") : 1 < this.publishDestinationsVersion ? (x.extendArray(r, this.destinations),
                    x.extendArray(this.destinationsPosted, this.destinations),
                    t(),
                    s.publishDestinations({
                        subdomain: I,
                        callback: e,
                        urlDestinations: r
                    }),
                    "Called visitor.publishDestinations() version > 1") : void 0
            },
            getPublishDestinationsVersion: function() {
                if (null !== this.publishDestinationsVersion)
                    return this.publishDestinationsVersion;
                var e = A.adms.instance
                    , n = -1;
                return e.publishDestinations(null, null, function(e) {
                    if (e === Object(e)) {
                        var t = e.error;
                        "subdomain is not a populated string." === t ? n = 1 : "Invalid parameters passed." === t && (n = 2)
                    }
                }),
                    this.publishDestinationsVersion = n
            }
        }, M = {
            traits: function(e) {
                return k.isValidPdata(e) && (L.sids instanceof Array || (L.sids = []),
                    x.extendArray(L.sids, e)),
                    this
            },
            pixels: function(e) {
                return k.isValidPdata(e) && (L.pdata instanceof Array || (L.pdata = []),
                    x.extendArray(L.pdata, e)),
                    this
            },
            logs: function(e) {
                return k.isValidLogdata(e) && (L.logdata !== Object(L.logdata) && (L.logdata = {}),
                    x.extendObject(L.logdata, e)),
                    this
            },
            customQueryParams: function(e) {
                return k.isEmptyObject(e) || x.extendObject(L, e, A.reservedKeys),
                    this
            },
            signals: function(e, t) {
                var n, s = e;
                if (!k.isEmptyObject(s)) {
                    if (t && "string" == typeof t)
                        for (n in s = {},
                            e)
                            e.hasOwnProperty(n) && (s[t + n] = e[n]);
                    x.extendObject(L, s, A.reservedKeys)
                }
                return this
            },
            declaredId: function(e) {
                return A.declaredId.setDeclaredId(e, "request"),
                    this
            },
            result: function(e) {
                return "function" == typeof e && (L.callback = e),
                    this
            },
            afterResult: function(e) {
                return "function" == typeof e && (L.postCallbackFn = e),
                    this
            },
            useImageRequest: function() {
                return L.useImageRequest = !0,
                    this
            },
            clearData: function() {
                return L = {},
                    this
            },
            submit: function(e) {
                return L.isDefaultRequest = !!e,
                    V.submitRequest(L),
                    L = {},
                    this
            },
            getPartner: function() {
                return I
            },
            getContainerNSID: function() {
                return r
            },
            getEventLog: function() {
                return O
            },
            getState: function() {
                var e = {}
                    , t = {};
                return x.extendObject(e, A, {
                    registerRequest: !0
                }),
                    x.extendObject(t, T, {
                        requestToProcess: !0,
                        process: !0,
                        sendMessages: !0
                    }),
                    {
                        initConfig: n,
                        pendingRequest: L,
                        otherRequestInfo: e,
                        destinationPublishingInfo: t,
                        log: O
                    }
            },
            idSync: function() {
                throw new Error("Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance")
            },
            aamIdSync: function() {
                throw new Error("Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance")
            },
            passData: function(e) {
                return k.isEmptyObject(e) ? "Error: json is empty or not an object" : (V.defaultCallback(e),
                    e)
            },
            getPlatformParams: function() {
                return A.platformParams
            },
            getEventCallConfigParams: function() {
                var e, t = A, n = t.modStatsParams, s = t.platformParams;
                if (!n) {
                    for (e in n = {},
                        s)
                        s.hasOwnProperty(e) && !t.nonModStatsParams[e] && (n[e.replace(/^d_/, "")] = s[e]);
                    !0 === d ? n.coop_safe = 1 : !1 === d && (n.coop_unsafe = 1),
                        t.modStatsParams = n
                }
                return n
            },
            setAsCoopSafe: function() {
                return d = !0,
                    this
            },
            setAsCoopUnsafe: function() {
                return d = !1,
                    this
            },
            getEventCallIabSignals: function(e) {
                var t;
                return e !== Object(e) ? "Error: config is not an object" : "function" != typeof e.callback ? "Error: config.callback is not a function" : (t = parseInt(e.timeout, 10),
                isNaN(t) && (t = null),
                    void B.getQueryStringObject(e.callback, t))
            }
        }, V = {
            corsMetadata: (q = "none",
            "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && "withCredentials"in new XMLHttpRequest && (q = "XMLHttpRequest"),
                {
                    corsType: q
                }),
            getCORSInstance: function() {
                return "none" === this.corsMetadata.corsType ? null : new window[this.corsMetadata.corsType]
            },
            submitRequest: function(e) {
                return A.registerRequest(V.createQueuedRequest(e)),
                    !0
            },
            createQueuedRequest: function(e) {
                var t, n, s, i, r, o = e.callback, a = "img", d = e.isDefaultRequest;
                if (delete e.isDefaultRequest,
                    !k.isEmptyObject(u))
                    for (s in u)
                        if (u.hasOwnProperty(s)) {
                            if (null == (i = u[s]) || "" === i)
                                continue;
                            if (s in e && !(i in e) && !(i in A.reservedKeys)) {
                                if (null == (r = e[s]) || "" === r)
                                    continue;
                                e[i] = r
                            }
                        }
                return k.isValidPdata(e.sids) || (e.sids = []),
                k.isValidPdata(e.pdata) || (e.pdata = []),
                k.isValidLogdata(e.logdata) || (e.logdata = {}),
                    e.logdataArray = x.convertObjectToKeyValuePairs(e.logdata, "=", !0),
                    e.logdataArray.push("_ts=" + (new Date).getTime()),
                "function" != typeof o && (o = this.defaultCallback),
                    t = this.makeRequestSrcData(e),
                (n = this.getCORSInstance()) && !0 !== e.useImageRequest && (a = "cors"),
                    {
                        tag: a,
                        src: t.src,
                        corsSrc: t.corsSrc,
                        callbackFn: o,
                        postCallbackFn: e.postCallbackFn,
                        useImageRequest: !!e.useImageRequest,
                        requestData: e,
                        corsInstance: n,
                        corsPostData: t.corsPostData,
                        isDefaultRequest: d
                    }
            },
            defaultCallback: function(e, t) {
                var n, s, i, r, o, a, d, u, c;
                if (g && (n = e.stuff) && n instanceof Array && (s = n.length))
                    for (i = 0; i < s; i++)
                        (r = n[i]) && r === Object(r) && (o = r.cn,
                            a = r.cv,
                        void 0 !== (d = r.ttl) && "" !== d || (d = Math.floor(x.getMaxCookieExpiresInMinutes() / 60 / 24)),
                            u = r.dmn || "." + document.domain.replace(/^www\./, ""),
                            c = r.type,
                        o && (a || "number" == typeof a) && ("var" !== c && (d = parseInt(d, 10)) && !isNaN(d) && x.setCookie(o, a, 24 * d * 60, "/", u, !1),
                            P.stuffed[o] = a));
                var l, f, p = e.uuid;
                k.isPopulatedString(p) && (k.isEmptyObject(h) || ("string" == typeof (l = h.path) && l.length || (l = "/"),
                    f = parseInt(h.days, 10),
                isNaN(f) && (f = 100),
                    x.setCookie(h.name || "aam_did", p, 24 * f * 60, l, h.domain || "." + document.domain.replace(/^www\./, ""), !0 === h.secure))),
                A.abortRequests || T.requestToProcess(e, t)
            },
            makeRequestSrcData: function(r) {
                r.sids = k.removeEmptyArrayValues(r.sids || []),
                    r.pdata = k.removeEmptyArrayValues(r.pdata || []);
                var o = A
                    , e = o.platformParams
                    , t = x.encodeAndBuildRequest(r.sids, ",")
                    , n = x.encodeAndBuildRequest(r.pdata, ",")
                    , s = (r.logdataArray || []).join("&");
                delete r.logdataArray;
                var i, a, d = encodeURIComponent, u = E.IS_HTTPS ? "https://" : "http://", c = o.declaredId.getDeclaredIdQueryString(), l = o.adms.instance ? o.adms.getCustomerIDsQueryString(o.adms.getCustomerIDs()) : "", f = function() {
                    var e, t, n, s, i = [];
                    for (e in r)
                        if (!(e in o.reservedKeys) && r.hasOwnProperty(e))
                            if (t = r[e],
                                e = d(e),
                            t instanceof Array)
                                for (n = 0,
                                         s = t.length; n < s; n++)
                                    i.push(e + "=" + d(t[n]));
                            else
                                i.push(e + "=" + d(t));
                    return i.length ? "&" + i.join("&") : ""
                }(), p = "d_dil_ver=" + d(DIL.version), h = "d_nsid=" + e.d_nsid + o.getCoopQueryString() + c + l + (t.length ? "&d_sid=" + t : "") + (n.length ? "&d_px=" + n : "") + (s.length ? "&d_ld=" + d(s) : ""), g = "&d_rtbd=" + e.d_rtbd + "&d_jsonv=" + e.d_jsonv + "&d_dst=" + e.d_dst, m = y ? "&h_referer=" + d(location.href) : "";
                return a = (i = u + I + ".demdex.net/event") + "?" + p + "&" + h + g + f + m,
                    {
                        corsSrc: i + "?" + p + "&_ts=" + (new Date).getTime(),
                        src: a,
                        corsPostData: h + g + f + m,
                        isDeclaredIdCall: "" !== c
                    }
            },
            fireRequest: function(e) {
                if ("img" === e.tag)
                    this.fireImage(e);
                else {
                    var t = A.declaredId
                        , n = t.declaredId.request || t.declaredId.init || {}
                        , s = {
                        dpid: n.dpid || "",
                        dpuuid: n.dpuuid || ""
                    };
                    this.fireCORS(e, s)
                }
            },
            fireImage: function(t) {
                var e, n, s = A;
                s.abortRequests || (s.firing = !0,
                    e = new Image(0,0),
                    s.sent.push(t),
                    e.onload = function() {
                        s.firing = !1,
                            s.fired.push(t),
                            s.num_of_img_responses++,
                            s.registerRequest()
                    }
                    ,
                    n = function(e) {
                        c = "imgAbortOrErrorHandler received the event of type " + e.type,
                            R.log(c),
                            s.abortRequests = !0,
                            s.firing = !1,
                            s.errored.push(t),
                            s.num_of_img_errors++,
                            s.registerRequest()
                    }
                    ,
                    e.addEventListener("error", n),
                    e.addEventListener("abort", n),
                    e.src = t.src)
            },
            fireCORS: function(s, i) {
                var r = this
                    , o = A
                    , e = this.corsMetadata.corsType
                    , t = s.corsSrc
                    , n = s.corsInstance
                    , a = s.corsPostData
                    , d = s.postCallbackFn
                    , u = "function" == typeof d;
                if (!o.abortRequests && !v) {
                    o.firing = !0;
                    try {
                        n.open("post", t, !0),
                        "XMLHttpRequest" === e && (n.withCredentials = !0,
                                n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                                n.onreadystatechange = function() {
                                    4 === this.readyState && 200 === this.status && function(e) {
                                        var t;
                                        try {
                                            if ((t = JSON.parse(e)) !== Object(t))
                                                return r.handleCORSError(s, i, "Response is not JSON")
                                        } catch (e) {
                                            return r.handleCORSError(s, i, "Error parsing response as JSON")
                                        }
                                        try {
                                            var n = s.callbackFn;
                                            o.firing = !1,
                                                o.fired.push(s),
                                                o.num_of_cors_responses++,
                                                n(t, i),
                                            u && d(t, i)
                                        } catch (e) {
                                            e.message = "DIL handleCORSResponse caught error with message " + e.message,
                                                c = e.message,
                                                R.log(c),
                                                e.filename = e.filename || "dil.js",
                                                e.partner = I,
                                                DIL.errorModule.handleError(e);
                                            try {
                                                n({
                                                    error: e.name + "|" + e.message
                                                }, i),
                                                u && d({
                                                    error: e.name + "|" + e.message
                                                }, i)
                                            } catch (e) {}
                                        } finally {
                                            o.registerRequest()
                                        }
                                    }(this.responseText)
                                }
                        ),
                            n.onerror = function() {
                                r.handleCORSError(s, i, "onerror")
                            }
                            ,
                            n.ontimeout = function() {
                                r.handleCORSError(s, i, "ontimeout")
                            }
                            ,
                            n.send(a)
                    } catch (e) {
                        this.handleCORSError(s, i, "try-catch")
                    }
                    o.sent.push(s),
                        o.declaredId.declaredId.request = null
                }
            },
            handleCORSError: function(e, t, n) {
                A.num_of_cors_errors++,
                    A.corsErrorSources.push(n)
            }
        }, k = {
            isValidPdata: function(e) {
                return !!(e instanceof Array && this.removeEmptyArrayValues(e).length)
            },
            isValidLogdata: function(e) {
                return !this.isEmptyObject(e)
            },
            isEmptyObject: function(e) {
                if (e !== Object(e))
                    return !0;
                var t;
                for (t in e)
                    if (e.hasOwnProperty(t))
                        return !1;
                return !0
            },
            removeEmptyArrayValues: function(e) {
                var t, n = 0, s = e.length, i = [];
                for (n = 0; n < s; n++)
                    null != (t = e[n]) && "" !== t && i.push(t);
                return i
            },
            isPopulatedString: function(e) {
                return "string" == typeof e && e.length
            }
        }, x = {
            convertObjectToKeyValuePairs: function(e, t, n) {
                var s, i, r = [];
                for (s in t = t || "=",
                    e)
                    e.hasOwnProperty(s) && null != (i = e[s]) && "" !== i && r.push(s + t + (n ? encodeURIComponent(i) : i));
                return r
            },
            encodeAndBuildRequest: function(e, t) {
                return e.map(function(e) {
                    return encodeURIComponent(e)
                }).join(t)
            },
            getCookie: function(e) {
                var t, n, s, i = e + "=", r = document.cookie.split(";");
                for (t = 0,
                         n = r.length; t < n; t++) {
                    for (s = r[t]; " " === s.charAt(0); )
                        s = s.substring(1, s.length);
                    if (0 === s.indexOf(i))
                        return decodeURIComponent(s.substring(i.length, s.length))
                }
                return null
            },
            setCookie: function(e, t, n, s, i, r) {
                var o = new Date;
                n = n && 1e3 * n * 60,
                    document.cookie = e + "=" + encodeURIComponent(t) + (n ? ";expires=" + new Date(o.getTime() + n).toUTCString() : "") + (s ? ";path=" + s : "") + (i ? ";domain=" + i : "") + (r ? ";secure" : "")
            },
            extendArray: function(e, t) {
                return e instanceof Array && t instanceof Array && (Array.prototype.push.apply(e, t),
                    !0)
            },
            extendObject: function(e, t, n) {
                var s;
                if (e !== Object(e) || t !== Object(t))
                    return !1;
                for (s in t)
                    if (t.hasOwnProperty(s)) {
                        if (!k.isEmptyObject(n) && s in n)
                            continue;
                        e[s] = t[s]
                    }
                return !0
            },
            getMaxCookieExpiresInMinutes: function() {
                return E.SIX_MONTHS_IN_MINUTES
            },
            replaceMethodsWithFunction: function(e, t) {
                var n;
                if (e === Object(e) && "function" == typeof t)
                    for (n in e)
                        e.hasOwnProperty(n) && "function" == typeof e[n] && (e[n] = t)
            }
        }, N = (j = C.requestController,
            {
                exists: null,
                instance: null,
                aamIsApproved: null,
                init: function() {
                    var e = this;
                    this.checkIfExists() ? (this.exists = !0,
                        this.instance = window.adobe.optIn,
                        this.instance.fetchPermissions(function() {
                            e.callback()
                        }, !0)) : this.exists = !1
                },
                checkIfExists: function() {
                    return window.adobe === Object(window.adobe) && window.adobe.optIn === Object(window.adobe.optIn)
                },
                callback: function() {
                    this.aamIsApproved = this.instance.isApproved([this.instance.Categories.AAM]),
                        j.adms.waitForMidToReleaseRequests(),
                        j.adms.getIsOptedOut()
                },
                isApproved: function() {
                    return !this.isIabContext() && !j.adms.isOptedOut && (!this.exists || this.aamIsApproved)
                },
                isIabContext: function() {
                    return this.instance && this.instance.isIabContext
                }
            });
        C.optIn = N;
        var F, Q, H, U, B = (Q = (F = C).requestController,
            H = F.optIn,
            U = {
                isVendorConsented: null,
                doesGdprApply: null,
                consentString: null,
                queryStringObjectCallbacks: [],
                init: function() {
                    this.fetchConsentData()
                },
                hasGoSignal: function() {
                    return !(!(H.isIabContext() && this.isVendorConsented && this.doesGdprApply && "string" == typeof this.consentString && this.consentString.length) || Q.adms.isOptedOut)
                },
                fetchConsentData: function(n, e) {
                    var s = this
                        , t = {};
                    "function" != typeof n && (n = function() {}
                    ),
                        H.instance && H.isIabContext() ? (e && (t.timeout = e),
                            H.instance.execute({
                                command: "iabPlugin.fetchConsentData",
                                params: t,
                                callback: function(e, t) {
                                    t === Object(t) ? (s.doesGdprApply = !!t.gdprApplies,
                                        s.consentString = t.consentString || "") : (s.doesGdprApply = !1,
                                        s.consentString = ""),
                                        s.isVendorConsented = H.instance.isApproved(H.instance.Categories.AAM),
                                        e ? n({}) : s.checkQueryStringObject(n),
                                        Q.adms.waitForMidToReleaseRequests()
                                }
                            })) : n({})
                },
                getQueryString: function() {
                    return H.isIabContext() ? "gdpr=" + (this.doesGdprApply ? 1 : 0) + "&gdpr_consent=" + this.consentString + "&" : ""
                },
                getQueryStringObject: function(e, t) {
                    this.fetchConsentData(e, t)
                },
                checkQueryStringObject: function(e) {
                    U.hasGoSignal() && "function" == typeof e && e({
                        gdpr: this.doesGdprApply ? 1 : 0,
                        gdpr_consent: this.consentString
                    })
                }
            });
        C.iab = B,
        "error" === I && 0 === r && window.addEventListener("load", function() {
            DIL.windowLoaded = !0
        });
        function G() {
            W || (W = !0,
                A.registerRequest(),
                X())
        }
        var W = !1
            , X = function() {
            setTimeout(function() {
                p || A.firstRequestHasFired || ("function" == typeof m ? M.afterResult(m).submit(!0) : M.submit(!0))
            }, DIL.constants.TIME_TO_DEFAULT_REQUEST)
        }
            , K = document;
        "error" !== I && (DIL.windowLoaded ? G() : "complete" !== K.readyState && "loaded" !== K.readyState ? window.addEventListener("load", function() {
            DIL.windowLoaded = !0,
                G()
        }) : (DIL.windowLoaded = !0,
            G())),
            A.declaredId.setDeclaredId(s, "init"),
            N.init(),
            B.init(),
            A.processVisitorAPI();
        E.IS_IE_LESS_THAN_10 && x.replaceMethodsWithFunction(M, function() {
            return this
        }),
            this.api = M,
            this.getStuffedVariable = function(e) {
                var t = P.stuffed[e];
                return t || "number" == typeof t || (t = x.getCookie(e)) || "number" == typeof t || (t = ""),
                    t
            }
            ,
            this.validators = k,
            this.helpers = x,
            this.constants = E,
            this.log = O,
            this.pendingRequest = L,
            this.requestController = A,
            this.destinationPublishing = T,
            this.requestProcs = V,
            this.units = C,
            this.initConfig = n,
            this.logger = R,
        w && (this.variables = P,
            this.callWindowLoadFunctions = G)
    }
        ,
        DIL.extendStaticPropertiesAndMethods = function(e) {
            var t;
            if (e === Object(e))
                for (t in e)
                    e.hasOwnProperty(t) && (this[t] = e[t])
        }
        ,
        DIL.extendStaticPropertiesAndMethods({
            version: "9.4",
            jsonVersion: 1,
            constants: {
                TIME_TO_DEFAULT_REQUEST: 500
            },
            variables: {
                scriptNodeList: document.getElementsByTagName("script")
            },
            windowLoaded: !1,
            dils: {},
            isAddedPostWindowLoad: function() {
                var e = arguments[0];
                this.windowLoaded = "function" == typeof e ? !!e() : "boolean" != typeof e || e
            },
            create: function(e) {
                try {
                    return new DIL(e)
                } catch (e) {
                    throw new Error("Error in attempt to create DIL instance with DIL.create(): " + e.message)
                }
            },
            registerDil: function(e, t, n) {
                var s = t + "$" + n;
                s in this.dils || (this.dils[s] = e)
            },
            getDil: function(e, t) {
                var n;
                return "string" != typeof e && (e = ""),
                    (n = e + "$" + (t = t || 0))in this.dils ? this.dils[n] : new Error("The DIL instance with partner = " + e + " and containerNSID = " + t + " was not found")
            },
            dexGetQSVars: function(e, t, n) {
                var s = this.getDil(t, n);
                return s instanceof this ? s.getStuffedVariable(e) : ""
            }
        }),
        DIL.errorModule = (r = DIL.create({
            partner: "error",
            containerNSID: 0,
            ignoreHardDependencyOnVisitorAPI: !0
        }),
            a = !(o = {
                harvestererror: 14138,
                destpuberror: 14139,
                dpmerror: 14140,
                generalerror: 14137,
                error: 14137,
                noerrortypedefined: 15021,
                evalerror: 15016,
                rangeerror: 15017,
                referenceerror: 15018,
                typeerror: 15019,
                urierror: 15020
            }),
            {
                activate: function() {
                    a = !0
                },
                handleError: function(e) {
                    if (!a)
                        return "DIL error module has not been activated";
                    e !== Object(e) && (e = {});
                    var t = e.name ? (e.name + "").toLowerCase() : ""
                        , n = t in o ? o[t] : o.noerrortypedefined
                        , s = []
                        , i = {
                        name: t,
                        filename: e.filename ? e.filename + "" : "",
                        partner: e.partner ? e.partner + "" : "no_partner",
                        site: e.site ? e.site + "" : document.location.href,
                        message: e.message ? e.message + "" : ""
                    };
                    return s.push(n),
                        r.api.pixels(s).logs(i).useImageRequest().submit(),
                        "DIL error report sent"
                },
                pixelMap: o
            }),
        DIL.tools = {},
        DIL.modules = {
            helpers: {}
        })
}();
global_s.loadModule("AudienceManagement");
try {
    (function(id, loader) {
            window.utag.tagsettings = window.utag.tagsettings || {};
            window.utag.tagsettings.adobe = window.utag.tagsettings.adobe || {};
            var vAPI = window.utag.tagsettings.adobe.visitorAPI = window.utag.tagsettings.adobe.visitorAPI || (function() {
                return {
                    getInstance: function(orgID, callback) {
                        if (orgID) {
                            utag.DB("[" + u.id + "] OrgID used, but no 'Adobe Marketing Cloud ID Service' tag detected");
                        }
                        return callback();
                    }
                };
            }());
            var u = {
                "id": id
            };
            u.queue = [];
            utag.o[loader].sender[id] = u;
            u.ev = {
                'view': 1,
                'link': 1,
                'video': 1
            };
            u.o = global_s;
            u.varlist = {
                pageName: 'pageName',
                channel: 'ch',
                campaign: 'v0',
                hier1: 'h1',
                hier2: 'h2',
                hier3: 'h3',
                hier4: 'h4'
            };
            for (var i = 1; i < 76; i++) {
                u.varlist['prop' + i] = 'c' + i;
                u.varlist['eVar' + i] = 'v' + i;
            }
            u.combineLinkVar = false;
            u.pushlt = function(l, v) {
                if (typeof l != "undefined")
                    l.push(v)
            }
            ;
            if (utag.ut.typeOf === undefined) {
                u.typeOf = function(e) {
                    return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
                }
                ;
            } else {
                u.typeOf = utag.ut.typeOf;
            }
            u.typeCheck = function(linkTrack, type) {
                if (u.typeOf(linkTrack) === "string") {
                    u[type] = linkTrack.split(",");
                } else if (u.typeOf(linkTrack) === "array") {
                    u[type] = linkTrack;
                } else {
                    u[type] = [];
                }
            }
            u.hasadobeView = function() {
                if (utag.ut.adobeViewScriptRequested) {
                    return true;
                }
                var i, s = document.getElementsByTagName("script");
                for (i = 0; i < s.length; i++) {
                    if (s[i].src && s[i].src.indexOf("https://www.everestjs.net/static/le/last-event-tag-latest.min.js") >= 0) {
                        return true;
                    }
                }
                return false;
            }
            ;
            u.map = {
                "adobe_reportSuiteGlobal": "s_account",
                "dom.domain": "server",
                "dom.url": "pageURL",
                "adobe_pageNameGlobal": "pageName,eVar6,prop4,event1",
                "_sm_174_5": "prop1",
                "_sm_174_6": "prop2",
                "_sm_174_7": "prop3",
                "adobe_pagePath": "eVar9,prop6",
                "adobe_pageSuffix": "eVar10,prop7",
                "error.Message": "eVar13,event36",
                "adobe_d_mid": "eVar21",
                "user.ProfileCRNHash": "eVar22,eVar37",
                "user.ProfileID": "eVar23,SERIAL_event105",
                "user.ProfileLoggedInStatus": "eVar28",
                "qp.icmpid": "eVar41",
                "tealium_event:subscription_success": "event105",
                "tealium_event:video_start": "event117",
                "tealium_event:video_milestone50": "event119",
                "tealium_event:video_milestone90": "event120",
                "tealium_event:video_complete": "event118",
                "tealium_event:offer_impression": "event20",
                "tealium_event:offer_activation_success": "event21",
                "tealium_event:offer_activation_fail": "event22",
                "tealium_event:unsubscribed": "event106",
                "tealium_event:acs_content_impression": "event220",
                "tealium_event:acs_content_click": "event221",
                "tealium_event:acs_ad_impression": "event222",
                "tealium_event:acs_ad_click": "event223",
                "tealium_event:user_register": "event26",
                "tealium_event:acs_empty_impression": "event219",
                "tealium_event": "prop8,prop72",
                "tealium_event:du_reactivation_success": "event107",
                "event.Category": "eVar129",
                "event.Action": "eVar130",
                "event.Action:click": "event113",
                "event.Action:select": "event58",
                "event.Action:select-many": "event59",
                "event.Action:button_click": "event113",
                "event.Action:Button click": "event113",
                "event.Label": "eVar131",
                "event.Label:Choose later selected": "event77",
                "event.Label:Pickup Entry": "event78",
                "event.Label:Delivery Entry": "event79",
                "event.Label:AMAS address selection (New)": "event80",
                "event.Label:Time slots panel": "event81",
                "site.Section": "eVar7",
                "page.Type": "eVar8,prop5",
                "page.Type:productdetail": "prodView",
                "page.Type:recipedetail": "event123",
                "page.PreviousPageName": "eVar12",
                "error.Metadata": "eVar14",
                "user.StateSuburbPostCode": "eVar30",
                "user.AccessibilityPreference": "eVar31",
                "user.RewardsPointsEarned": "eVar34",
                "user.RewardsRedemptionSetting": "eVar35",
                "user.RewardsDetails": "eVar36",
                "search.Keyword": "eVar51,event15",
                "search.ResultsCount": "eVar54",
                "order.ID": "eVar61",
                "order.Status": "eVar63",
                "order.PaymentType": "eVar66",
                "order.IsCustomerPurchaseOrder": "eVar67",
                "order.PackagingType": "eVar68",
                "order.CheckoutTime": "eVar69,VALUE_event76",
                "order.TrackMyOrderDetails": "eVar70",
                "checkout.HasDoneCheckoutOnboarding": "eVar80",
                "product.Name": "PRODUCTS_eVar91",
                "product.Brand": "PRODUCTS_eVar92",
                "product.Category": "PRODUCTS_eVar94",
                "product.SubCategory": "PRODUCTS_eVar95",
                "product.SAPCategory": "PRODUCTS_eVar97",
                "product.SAPSubCategory": "PRODUCTS_eVar98",
                "product.SAPDepartment": "PRODUCTS_eVar99",
                "product.SAPSegment": "PRODUCTS_eVar100",
                "product.OutOfStock": "PRODUCTS_eVar101",
                "product.Source": "PRODUCTS_eVar104",
                "product.TileAvailability": "PRODUCTS_eVar105",
                "product.TilePosition": "PRODUCTS_eVar106",
                "product.TileType": "PRODUCTS_eVar107",
                "homepageBanner.Name": "eVar127",
                "adobe_list": "eVar128",
                "event.Value": "eVar132",
                "event.Value:Express": "event60",
                "event.Description": "eVar133",
                "event.Metadata": "eVar134",
                "business.Category": "eVar136",
                "business.SecondaryCategory": "eVar137",
                "business.Vertical": "eVar138",
                "visitor.ReferringDomain": "eVar139",
                "adobe_d_userAgent": "eVar146",
                "visitor.DeviceAdvID": "eVar149",
                "product.Vendor": "PRODUCTS_eVar194",
                "event.Name:search_success": "event16",
                "event.Name:2FA_Verification_Successful": "event35",
                "event.Name:user_login": "event28",
                "event.Name:user_register": "event26",
                "event.Name:checkout_notification": "event57",
                "event.Name:login 2FA success": "event186",
                "event.Name:login 2FA fail": "event187",
                "event.Name:login 2FA cancel": "event188",
                "event.Name:cart_add": "scAdd",
                "event.Name:cart_view": "scView",
                "event.Name:cart_remove": "scRemove",
                "event.Name:cart_add_all": "scAdd",
                "event.Name:edr_register": "event198",
                "event.Name:product_click": "event111",
                "event.Name:list_add": "event130",
                "event.Name:list_add_all": "event130",
                "event.Name:video_start": "event117",
                "event.Name:video_complete": "event118",
                "event.Name:video_milestone50": "event119",
                "event.Name:video_milestone90": "event120",
                "event.Name:video_pause": "event110",
                "event.Name:video_play": "event178",
                "checkout.AvailableDeliveryWindows": "VALUE_event64",
                "checkout.Step:4": "event48,scCheckout",
                "checkout.Step:5": "event49,scCheckout",
                "checkout.Step:2": "scCheckout,event47",
                "checkout.Step:3": "scCheckout,event47",
                "order.Total": "VALUE_event95,VALUE_event65",
                "order.TaxAmount": "VALUE_event69",
                "cart.AvailableDeliveryWindows": "VALUE_event63",
                "order.PackagingFee": "VALUE_event70",
                "adobe_contentType": "eVar120",
                "adobe_contentMetadata": "eVar121",
                "order.TotalRewardsPointsEarned": "VALUE_event75",
                "cart_add_value": "VALUE_event82",
                "cart_remove_value": "VALUE_event83",
                "reorder.ProductCount": "VALUE_event88",
                "reorder.TotalQuantity": "VALUE_event89",
                "reorder.ProductCount.AddAll": "VALUE_event93",
                "reorder.TotalQuantity.AddAll": "VALUE_event94",
                "performance.firstPaint": "VALUE_event109",
                "performance.firstContentfulPaint": "VALUE_event108",
                "order.MarketSubTotal": "VALUE_event303",
                "adobe_marketPlaceOrderVariables": "eVar197",
                "adobe_subscription_details": "eVar32",
                "product.AdID": "PRODUCTS_eVar108",
                "adobe_productPIES": "PRODUCTS_eVar102",
                "adobe_productRatings": "PRODUCTS_eVar103",
                "adobe_pageFilters": "PRODUCTS_eVar59",
                "product.HealthySwapProduct": "PRODUCTS_id",
                "checkout.ErrorMessage": "eVar13,event36",
                "order.ErrorMessage": "eVar13,event36",
                "search.ListKeywords": "eVar52",
                "search.KeywordType": "eVar53",
                "cp.adobe_grs": "eVar16",
                "cart.PromoCode": "eVar43",
                "order.PromoCode": "eVar43",
                "adobe_UTM": "eVar46",
                "adobe_productSAP": "PRODUCTS_eVar96",
                "product.Variant": "PRODUCTS_eVar93",
                "adobe_freshParams": "eVar123",
                "page.SortBy": "eVar17",
                "user.SegmentType": "eVar24",
                "user.ProfileStaffDiscount": "eVar27",
                "user.ProfileStatusCode": "eVar29",
                "checkout.ShippingMethod": "eVar64",
                "order.ShippingMethod": "eVar64",
                "adobe_deliveryWindow": "eVar65",
                "order.SubTotal": "event66",
                "order.TotalItems": "event67",
                "order.TaxRate": "event69",
                "adobe_OrderCountVars": "eVar62",
                "va_eventData": "eVar184",
                "acs.StitchID": "list2",
                "site.CurrencyCode": "currencyCode",
                "adobe_siteSection": "channel",
                "webPerformance.DomContentLoaded": "event215",
                "webPerformance.DomInteractive": "event216",
                "webPerformance.PageLoadTime": "event217",
                "webPerformance.TimeToFirstByte": "event218",
                "page.Number": "eVar18",
                "healthySwaps.CountOfSubs": "eVar118",
                "healthySwaps.CountOfSubs:0": "event90",
                "adobe_user_rewardsdetails": "eVar34",
                "adobe_subscription_signup": "eVar40",
                "tealium_visitor_id": "prop9",
                "adobe_healthy_swaps_available": "event91",
                "recipe.Keywords": "eVar122",
                "product.OutOfStockWithRestock": "PRODUCTS_event134",
                "adobe_siteBrand": "eVar1",
                "adobe_siteName": "eVar2",
                "adobe_sitePlatform": "eVar3",
                "tealium_datasource": "prop74",
                "adobe_catalogueParams": "eVar124",
                "product.EstimatedDeliveryDates": "PRODUCTS_eVar195",
                "qp.cmpid": "eVar42,campaign",
                "user.FulfilmentStoreID": "eVar162",
                "adobe_offerData": "eVar198",
                "product.TileAvailiabilityStatus:Unavailable": "PRODUCTS_event179",
                "product.TileRestockDate:true": "PRODUCTS_event180",
                "adobe_medallia_survey": "eVar33,event207",
                "medallia.DigitalAvailabilityOfDeliveryTimes": "VALUE_event200",
                "medallia.DigitalCheckingOutAndPayingForYourOrder": "VALUE_event201",
                "medallia.DigitalDeliveryCharge": "VALUE_event202",
                "medallia.DigitalOnlineShoppingExperience": "VALUE_event203",
                "medallia.DigitalRangeProducts": "VALUE_event204",
                "medallia.DigitalSpeedAndReliabilityOfTheWebsite": "VALUE_event205",
                "medallia.DigitalValueForMoney": "VALUE_event206",
                "medallia.WwDigitalBrandNps11Scale": "VALUE_event208",
                "medallia.Serial": "SERIAL_VALUE_event200,SERIAL_VALUE_event201,SERIAL_VALUE_event202,SERIAL_VALUE_event203,SERIAL_VALUE_event204,SERIAL_VALUE_event205,SERIAL_VALUE_event206,SERIAL_VALUE_event207,SERIAL_VALUE_event208",
                "adobe_pageLayout": "eVar11",
                "va.properties.6091": "eVar25",
                "page.navVersion": "eVar19",
                "browse.Toggle": "eVar52",
                "search.Toggle": "eVar52",
                "adobe_navigatorFlags": "eVar147",
                "user.RNLScoredCampaigns": "eVar203",
                "user.RNLActivatedCampaigns": "eVar202",
                "search.Type": "eVar56",
                "cart.TotalValue": "eVar81",
                "va.properties.7189": "eVar38",
                "user.WXID": "eVar211",
                "user.HasEdrAccount": "eVar212",
                "user.HasEcomAccount": "eVar213",
                "user.EdrHashCrnLinkedToEcom": "eVar214",
                "user.EDRTotalES": "eVar215",
                "user.EDRESSegment": "eVar216",
                "user.SupersEcomCFV": "eVar210",
                "user.SupersInstoreCFV": "eVar217"
            };
            u.extend = [function(a, b) {
                try {
                    b['_sm_174_5'] = "Woolworths";
                } catch (e) {
                    utag.DB(e);
                }
                try {
                    b['_sm_174_6'] = "Supermarkets";
                } catch (e) {
                    utag.DB(e);
                }
                try {
                    b['_sm_174_7'] = "Web";
                } catch (e) {
                    utag.DB(e);
                }
            }
                , function(a, b) {
                    try {
                        if (b['ut.event'].toString().toLowerCase() == 'link'.toLowerCase()) {
                            var s = u.o;
                            s.supplementalDataID = s.visitor._supplementalDataIDLast;
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                , function(a, b) {
                    try {
                        if (1) {
                            var s = u.o;
                            s.trackClickMap = false;
                            s.trackInlineStats = false;
                            if (typeof s.ActivityMap === 'object') {
                                s.ActivityMap.link = s.ActivityMap.region = function() {
                                    return false;
                                }
                                s.ActivityMap.linkExclusions = "";
                                s.ActivityMap.regionExclusions = "";
                            }
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                , function(a, b) {
                    try {
                        if ((typeof b['event.Name'] != 'undefined' && b['event.Name'].toString().toLowerCase() == 'button_click'.toLowerCase() && typeof b['event.Label'] != 'undefined' && b['event.Label'].toString().toLowerCase() == 'Create Account Existing EDR'.toLowerCase())) {
                            b['event.Name'] = 'edr_link'
                        }
                    } catch (e) {
                        utag.DB(e);
                    }
                }
                , function(a, b, c, d) {
                    try {
                        if ((typeof b['search.FacetTerm'] != 'undefined' && typeof b['search.FacetTerm'] != 'undefined' && b['search.FacetTerm'] != '')) {
                            c = [b['search.Keyword'], b['search.FacetTerm']];
                            b['search.Keyword'] = c.join(' | ')
                        }
                    } catch (e) {
                        utag.DB(e);
                    }
                }
                , function(a, b, c, d) {
                    try {
                        if ((typeof b['site.Section'] != 'undefined' && b['site.Section'].toString().toLowerCase() == 'shop:recipedetail'.toLowerCase()) || (typeof b['site.Section'] != 'undefined' && b['site.Section'].toString().toLowerCase() == 'shop:catalogue'.toLowerCase())) {
                            c = [b['list.Type'], b['list.ID'], b['list.ListName']];
                            b['adobe_list'] = c.join(':')
                        }
                    } catch (e) {
                        utag.DB(e);
                    }
                }
                , function(a, b) {
                    try {
                        if (1) {
                            utag.DB("Adobe Analytics: Config Settings");
                            u.o.cookieDomainPeriods = "3";
                            u.o.cookieDomain = "woolworths.com.au";
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                , function(a, b) {
                    try {
                        if (1) {
                            utag.DB("Adobe Analytics: doPlugins");
                            u.o.doPlugins = s_doPlugins;
                            u.o.usePlugins = true;
                            u.o.dynamicVariablePrefix = "D=";
                            b["adobe_d_userAgent"] = "D=User-Agent";
                            b["adobe_d_mid"] = "D=mid";
                            function s_doPlugins() {
                                var s = u.o;
                                s.AudienceManagement.setup({
                                    "partner": "wfg",
                                    "containerNSID": 0,
                                    "uuidCookie": {
                                        "name": "aam_uuid",
                                        "days": 30
                                    },
                                    "visitorService": {
                                        "namespace": "4353388057AC8D357F000101@AdobeOrg"
                                    }
                                });
                                var q = {}
                                    , l = {};
                                c = u.varlist;
                                for (d in utag.loader.GV(c)) {
                                    if (typeof s[d] != 'undefined' && s[d] != null && s[d] != '' && s[d].toString().indexOf('D=') != 0) {
                                        if (typeof l[s[d]] == 'undefined')
                                            l[s[d]] = c[d];
                                        else
                                            s[d] = 'D=' + l[s[d]];
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                , function(a, b) {
                    try {
                        if (1) {
                            b["adobe_siteBrand"] = "Woolworths";
                            b["adobe_siteName"] = "Supermarkets";
                            b["adobe_sitePlatform"] = "Web";
                            b["adobe_pagePath"] = function() {
                                return b["dom.pathname"] || location.pathname || "";
                            }();
                            b["adobe_pageSuffix"] = function() {
                                var pageUrl = b["dom.url"] || location.href;
                                return pageUrl.split('?')[1] || "";
                            }();
                            b["adobe_performanceValues"] = function() {
                                var perf = [b["performance.source"] || "", b["performance.rendering"] || ""];
                                return perf.join("") ? perf.join(":") : "";
                            }();
                            b["adobe_UTM"] = function() {
                                var params = [b["qp.utm_source"] || "", b["qp.utm_medium"] || "", b["qp.utm_campaign"] || "", b["qp.utm_term"] || "", b["qp.utm_content"] || ""];
                                return params.join("") ? params.join("|") : "";
                            }();
                            b["adobe_marketPlaceOrderVariables"] = function() {
                                if ((typeof b['page.Type'] != 'undefined' && b['page.Type'].toString().toLowerCase() == 'order'.toLowerCase())) {
                                    var params = [b["order.IsMarketPlaceOrder"] || "", b["order.HasGiftMessage"] || "", b["order.HasAlternateAddress"] || ""];
                                    return params.join("") ? params.join("|") : "";
                                }
                            }();
                            b["adobe_OrderCountVars"] = function() {
                                var orderCount = b["user.ProfileOrderCount"] ? b["user.ProfileOrderCount"] : 'none';
                                var marketOrderCount = b["user.ProfileMarketOrderCount"] ? b["user.ProfileMarketOrderCount"] : 'none';
                                if (orderCount === 0) {
                                    orderCount = 'none';
                                }
                                if (marketOrderCount === 0) {
                                    marketOrderCount = 'none';
                                }
                                var params = [orderCount || "", marketOrderCount || ""];
                                return params.join("") ? params.join("|") : "";
                            }();
                            (function(b) {
                                    var view = b["catalogue.View"] || [b["qp.view"]] || "";
                                    var id = b["catalogue.ID"] || [b["qp.saleId"]] || "";
                                    var area = b["catalogue.State"] || [b["qp.areaName"]] || "";
                                    var page = b["catalogue.Page"] || [b["qp.page"]] || "";
                                    var type = b["catalogue.Type"] || [b["qp.Type"]] || "";
                                    var offervalidity = b["catalogue.OfferValidity"] || [b["qp.OfferValidity"]] || "";
                                    if (b["site.Section"] == "shop:catalogue") {
                                        b["adobe_catalogueParams"] = [view, id, area, page, type, offervalidity].join("") ? [view, id, area, page, type, offervalidity].join("|") : "";
                                    }
                                    if (b["page.Name"] && b["page.Name"].match("fresh-magazine")) {
                                        delete b["adobe_catalogueParams"];
                                        b["adobe_freshParams"] = [view, id, page].join("") ? [view, id, page].join("|") : "";
                                    }
                                }
                            )(b);
                            (function(b) {
                                    var filterStrings = [];
                                    var filterParam = b["qp.filter"] || "";
                                    var filters = filterParam ? filterParam.split(";") : [];
                                    for (var f = 0; f < filters.length; f++) {
                                        var parts = filters[f].match(/^(.*)\((.*)\)$/);
                                        if (parts) {
                                            var filter = parts[1];
                                            var values = parts[2].split(",");
                                            for (var v = 0; v < values.length; v++) {
                                                filterStrings.push(filter + ": " + values[v]);
                                            }
                                        }
                                    }
                                    b["adobe_pageFilters"] = filterStrings.join();
                                }
                            )(b);
                            (function(b) {
                                    function cleanProductName(i) {
                                        if (typeof b["product.Name"] != "undefined" && b["product.Name"].constructor === Array) {
                                            b["product.Name"][i] = b["product.Name"][i].trim().replace(/[\,\;\|]/g, "")
                                        }
                                    }
                                    function getByIndex(bVar, i) {
                                        return (typeof bVar != "undefined" && bVar.constructor === Array) ? bVar[i].trim().replace(/\,/g, "+").replace(/[\;\|]/g, "") : ""
                                    }
                                    b["adobe_productSAP"] = [];
                                    b["adobe_productPIES"] = [];
                                    b["adobe_productRatings"] = [];
                                    for (var i = 0; i < (b["product.ID"] || []).length; i++) {
                                        cleanProductName(i);
                                        var SAP = [getByIndex(b["product.SAPDepartment"], i), getByIndex(b["product.SAPCategory"], i), getByIndex(b["product.SAPSubCategory"], i), getByIndex(b["product.SAPSegment"], i)];
                                        var PIES = [getByIndex(b["product.PIESDepartment"], i), getByIndex(b["product.PIESCategory"], i), getByIndex(b["product.PIESSubCategory"], i)];
                                        var Ratings = [getByIndex(b["product.RatingAverage"], i), getByIndex(b["product.RatingCount"], i), getByIndex(b["product.ReviewCount"], i).replace("null", "")]
                                        b["adobe_productSAP"][i] = (SAP.join("") ? SAP.join(":") : "");
                                        b["adobe_productPIES"][i] = (PIES.join("") ? PIES.join(":") : "");
                                        b["adobe_productRatings"][i] = (Ratings.join("") ? Ratings.join(":") : "");
                                    }
                                }
                            )(b);
                            b["adobe_deliveryWindow"] = function() {
                                var dDate = (b["order.DeliveryDate"] || b["checkout.DeliveryDate"] || "").replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$3/$2/$1");
                                var dTime = (b["order.DeliveryTimeWindow"] || b["checkout.DeliveryTimeWindow"] || "").replace(/-/, " and ");
                                var dWindow = (dDate && dTime) ? [dDate, dTime].join(" between ") : "";
                                return dWindow;
                            }();
                            b["adobe_list"] = function() {
                                var type = b["list.Type"] || "";
                                var id = b["list.ID"] || "";
                                var name = b["list.ListName"] || "";
                                return [type, id, name].join("") ? [type, id, name].join(":") : "";
                            }();
                            b["adobe_contentType"] = function() {
                                return b["recipe.ID"] ? "recipe" : b["video.ID"] ? "video" : "not set";
                            }();
                            b["adobe_contentMetadata"] = function() {
                                var params = '';
                                if (b["adobe_contentType"] == 'recipe') {
                                    params = [b["recipe.ID"] || "Unknown", b["recipe.Name"] || "Unknown|Unknown", b["recipe.TimeCook"] || "Unknown", b["recipe.Category"] || "Unknown", b["recipe.Author"] || "Unknown"];
                                } else if (b["adobe_contentType"] == 'video') {
                                    params = [b["video.ID"] || "Unknown", b["video.Name"] || "Unknown", "Unknown", b["video.Length"] || "Unknown", b["video.Platform"] || "Unknown", b["video.Type"] || "Unknown"];
                                } else if (b["event.Category"] == 'Recipe Videos') {
                                    params = [b["video.Id"] || "Unknown", b["video.Name"] || "Unknown", "Unknown", b["video.Length"] || "Unknown"];
                                }
                                if (params !== '') {
                                    return params.join("") ? params.join("|") : "";
                                } else {
                                    return params;
                                }
                            }();
                            b["adobe_offerData"] = function() {
                                var params = [(b["offer.Stream"] || []).join(), (b["offer.Code"] || []).join(), (b["offer.Channel"] || []).join(), (b["offer.Status"] || []).join(), (b["offer.Name"] || []).join()];
                                return params.join("") ? params.join("|") : "";
                            }();
                            b["adobe_navigatorFlags"] = function() {
                                function p(v) {
                                    return typeof v != "undefined" && v != null ? String(v) : ""
                                }
                                var params = [p(navigator.doNotTrack), p(navigator.globalPrivacyControl)];
                                return params.join("") ? params.join("|") : "";
                            }();
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
                , function(a, b) {
                    try {
                        if (b['ut.event'].toString().toLowerCase() == 'view'.toLowerCase()) {
                            var s = window.global_s;
                            function crossDomainLinks() {
                                var domainList = ["woolworthsrewards.com.au", "woolworthsatwork.com.au"];
                                for (var i = 0; i < domainList.length; i++) {
                                    document.querySelectorAll("a[href*='" + domainList[i] + "']:not([href*='adobe_mc'])").forEach(function(e) {
                                        e.setAttribute("href", Visitor.getInstance("4353388057AC8D357F000101@AdobeOrg").appendVisitorIDsTo(e.getAttribute("href")));
                                    })
                                }
                            }
                            ;crossDomainLinks();
                        }
                    } catch (e) {
                        utag.DB(e)
                    }
                }
            ];
            u.send = function(a, b, c, d, e, f, g, h, ev) {
                if (u.ev[a] || typeof u.ev.all != "undefined") {
                    utag.DB("send:174");
                    u.data = {
                        "adobe_org_id": "4353388057AC8D357F000101",
                        "cookieDomain": (function() {
                            return utag.loader.RC('utag_main').vapi_domain || (function() {
                                var i = 0
                                    , d = document.domain
                                    , p = d.split('.')
                                    , s = '_vapi' + new Date().getTime();
                                while (i < (p.length - 1) && document.cookie.indexOf(s + '=' + s) === -1) {
                                    d = p.slice(-1 - (++i)).join('.');
                                    document.cookie = s + '=' + s + ';domain=' + d + ';';
                                }
                                document.cookie = s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + d + ';';
                                utag.loader.SC('utag_main', {
                                    'vapi_domain': d
                                });
                                return d;
                            }());
                        }()),
                        "a": {},
                        "serial": {},
                        "linkName": "",
                        "linkType": "",
                        "runviewthrough": "no",
                        "viewthroughloaded": u.hasadobeView(),
                        "viewthroughinterval": 100,
                        "viewthroughmaxtries": 3,
                        "clearVars_in_RPTCallback": true,
                        "send_timestamp": "no",
                        "timestamp": ""
                    };
                    if (u.data.runviewthrough === "yes" && !u.data.viewthroughloaded) {
                        (function(el, script) {
                                el = document.createElement("script");
                                el.async = !0;
                                el.src = "https://www.everestjs.net/static/le/last-event-tag-latest.min.js";
                                script = document.getElementsByTagName("script")[0];
                                script.parentNode.insertBefore(el, script);
                            }
                        )();
                        utag.ut.adobeViewScriptRequested = true;
                        u.data.viewthroughloaded = true;
                    }
                    for (d in utag.loader.GV(u.map)) {
                        if (b[d] !== undefined && b[d] !== "") {
                            e = u.map[d].split(",");
                            for (f = 0; f < e.length; f++) {
                                if (e[f] === "adobe_org_id" || e[f] === "linkTrackVars" || e[f] === "linkTrackEvents" || e[f] === "linkType" || e[f] === "linkName") {
                                    u.data[e[f]] = b[d];
                                    if (e[f] === "linkName" && b[d] !== "" && b[d] !== null && b[d] !== undefined) {
                                        if (u.typeOf(window.tealium) !== "undefined" && u.typeOf(window.tealium.track) === "function") {
                                            utag.DB("Found mapping of linkName. Calling Adobe link tracking function tl().");
                                            a = "link";
                                        }
                                    }
                                } else if (e[f] === "combineLinkVar") {
                                    u.combineLinkVar = b[d];
                                }
                            }
                        }
                    }
                    if (u.typeOf(window.tealium) !== "undefined" && u.typeOf(window.tealium.track) === "function") {
                        if (window.utag_cfg_ovrd && window.utag_cfg_ovrd.link_attribute && b[window.utag_cfg_ovrd.link_attribute]) {
                            utag.DB("Config utag_cfg_ovrd.link_attribute property set. Calling Adobe link tracking function tl().");
                            a = "link";
                        }
                    }
                    u.queue.push({
                        "a": a,
                        "b": b,
                        "u.data": u.data
                    });
                    vAPI.getInstance(u.data.adobe_org_id, function(instance) {
                        var data = u.queue.shift();
                        a = data["a"];
                        b = data["b"];
                        u.data = data["u.data"];
                        u.a = a;
                        b.sc_events = b.sc_events || {};
                        u.addEvent = function(v, n) {
                            var t = [];
                            if (v instanceof Array) {
                                t = v.slice(0);
                            } else if (typeof n !== "undefined") {
                                t.push(v + "=" + n);
                            } else {
                                t.push(v);
                            }
                            for (var i = 0; i < t.length; i++) {
                                b.sc_events[t[i]] = 1;
                                u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
                            }
                            return b.sc_events;
                        }
                        ;
                        u.addProduct = function(v) {
                            u.data.sc_addProd = "";
                            if (v instanceof Array) {
                                u.data.sc_addProd = v.join(",");
                            } else {
                                u.data.sc_addProd = v;
                            }
                        }
                        ;
                        if (u.data.runviewthrough === "yes") {
                            var editedReportSuite = "wfg-wx-global-dev".toLowerCase();
                            editedReportSuite = editedReportSuite.replace(/\s/g, "");
                            var attempt_counter = 0;
                            var adcloud_interval = setInterval(function() {
                                attempt_counter++;
                                if (window["AdCloudEvent"]) {
                                    clearInterval(adcloud_interval);
                                    AdCloudEvent(u.data.adobe_org_id, editedReportSuite);
                                    processAnalytics();
                                } else if (attempt_counter > u.data.viewthroughmaxtries) {
                                    clearInterval(adcloud_interval);
                                    processAnalytics();
                                }
                            }, u.data.viewthroughinterval);
                        } else {
                            processAnalytics();
                        }
                        function processAnalytics() {
                            if (u.a === "link") {
                                u.ltflag = true;
                                if (typeof u.data.linkTrackVars === "undefined" && typeof b.linkTrackVars === "undefined") {
                                    u.ltv = [];
                                }
                                if (u.combineLinkVar && typeof u.data.linkTrackVars !== "undefined") {
                                    u.typeCheck(u.data.linkTrackVars, "ltv");
                                } else if (u.combineLinkVar && typeof b.linkTrackVars !== "undefined") {
                                    u.typeCheck(b.linkTrackVars, "ltv");
                                }
                                if (typeof u.data.linkTrackEvents === "undefined" && typeof b.linkTrackEvents === "undefined") {
                                    u.lte = [];
                                }
                                if (u.combineLinkVar && typeof u.data.linkTrackEvents !== "undefined") {
                                    u.typeCheck(u.data.linkTrackEvents, "lte");
                                } else if (u.combineLinkVar && typeof b.linkTrackEvents !== "undefined") {
                                    u.typeCheck(b.linkTrackEvents, "lte");
                                }
                            }
                            u.data.tagdevicetype = "standard";
                            u.data.detectserial = "no";
                            for (c = 0; c < u.extend.length; c++) {
                                try {
                                    d = u.extend[c](a, b);
                                    if (d == false)
                                        return
                                } catch (e) {
                                    if (typeof utag_err != 'undefined') {
                                        utag_err.push({
                                            e: 'extension error:' + e,
                                            s: utag.cfg.path + 'utag.' + id + '.js',
                                            l: c,
                                            t: 'ex'
                                        })
                                    }
                                }
                            }
                            ;try {
                                if (window.sessionStorage) {
                                    var standardDimensions = sessionStorage.getItem("s_dmdbase") || "";
                                    var customDimensions1 = sessionStorage.getItem("s_dmdbase_custom1") || "";
                                    var customDimensions2 = sessionStorage.getItem("s_dmdbase_custom2") || "";
                                    var customDimensions3 = sessionStorage.getItem("s_dmdbase_custom3") || "";
                                    var customDimensions4 = sessionStorage.getItem("s_dmdbase_custom4") || "";
                                    u.o.contextData.s_dmdbase = standardDimensions;
                                    u.o.contextData.s_dmdbase_custom1 = customDimensions1;
                                    u.o.contextData.s_dmdbase_custom2 = customDimensions2;
                                    u.o.contextData.s_dmdbase_custom3 = customDimensions3;
                                    u.o.contextData.s_dmdbase_custom4 = customDimensions4;
                                }
                            } catch (e) {
                                utag.DB("AppMeasurement Demandbase Error: " + e.message);
                            }
                            if (u.data.tagdevicetype === "mobile") {
                                u.data.timestamp = u.data.timestamp || b.timestamp || b.timestamp_unix;
                                if (isTrue(u.data.send_timestamp) && u.data.timestamp) {
                                    u.o.timestamp = u.data.timestamp;
                                }
                                u.data.a = {
                                    "AppID": b.app_id || "",
                                    "CarrierName": b.carrier || "",
                                    "DeviceName": b.device || "",
                                    "HourOfDay": b.lifecycle_hourofday_local || "",
                                    "DayOfWeek": b.lifecycle_dayofweek_local || "",
                                    "OSVersion": b.os_version || b.platform_version || "",
                                    "Resolution": b.device_resolution || ""
                                };
                                if (b.lifecycle_type) {
                                    u.data.a.disable_wake_track = false;
                                    u.data.a.disable_sleep_track = false;
                                    u.data.a.DaysSinceFirstUse = b.lifecycle_dayssincelaunch || "";
                                    u.data.a.DaysSinceLastUpgrade = b.lifecycle_dayssinceupdate || "";
                                    u.data.a.DaysSinceLastUse = b.lifecycle_dayssincelastwake || "";
                                    u.data.a.Launches = b.lifecycle_launchcount || "";
                                    u.data.a.InstallDate = b.lifecycle_firstlaunchdate_MMDDYYYY || "";
                                    u.data.a.UpgradeEvent = b.lifecycle_isfirstlaunchupdate || "";
                                    u.data.a.PrevSessionLength = b.lifecycle_priorsecondsawake || "";
                                }
                                if (b.lifecycle_isfirstlaunch) {
                                    u.data.a.InstallEvent = "InstallEvent";
                                }
                                if (b.lifecycle_diddetectcrash) {
                                    u.data.a.CrashEvent = "CrashEvent";
                                }
                                if (b.lifecycle_type === "launch") {
                                    u.data.a.LaunchEvent = "LaunchEvent";
                                }
                                if (b.lifecycle_isfirstlaunchupdate) {
                                    u.data.a.UpgradeEvent = "UpgradeEvent";
                                }
                            }
                            for (e in utag.loader.GV(u.map)) {
                                if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("SERIAL_") > -1) {
                                    f = u.map[e].split(",");
                                    for (g = 0; g < f.length; g++) {
                                        if (f[g].indexOf("SERIAL_") === 0) {
                                            u.data.serial[f[g].substring(7)] = b[e];
                                        }
                                    }
                                } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                                    f = u.map[e].split(",");
                                    for (g = 0; g < f.length; g++) {
                                        if (f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")) {
                                            u.data[f[g].substring(9)] = b[e];
                                        }
                                    }
                                }
                                if (u.data.tagdevicetype === "mobile") {
                                    if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("contextData.a.") > -1) {
                                        f = u.map[e].split(",");
                                        for (g = 0; g < f.length; g++) {
                                            if (f[g].indexOf("contextData.a.") === 0) {
                                                u.data.a[f[g].substring(14)] = b[e];
                                            }
                                        }
                                    }
                                }
                            }
                            if (u.data.a.disable_wake_track === true || u.data.a.disable_wake_track === "true") {
                                if (b.lifecycle_type === "wake") {
                                    return false;
                                }
                            }
                            if (u.data.a.disable_sleep_track === true || u.data.a.disable_sleep_track === "true") {
                                if (b.lifecycle_type === "sleep") {
                                    return false;
                                }
                            }
                            u.data.id = u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []);
                            u.data.category = u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []);
                            u.data.quantity = u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []);
                            u.data.price = u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []);
                            if (typeof u.data.id != "undefined" && u.data.id != "") {
                                c = [];
                                d = {};
                                ev = {};
                                for (e in utag.loader.GV(u.map)) {
                                    if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                                        f = u.map[e].split(",");
                                        for (g = 0; g < f.length; g++) {
                                            var pv = f[g].substring(9);
                                            if (f[g].indexOf("PRODUCTS_evar") == 0 || f[g].indexOf("PRODUCTS_eVar") == 0) {
                                                if (b[e]instanceof Array) {
                                                    b.sc_prodevars = b.sc_prodevars || [];
                                                    for (var i = 0; i < b[e].length; i++) {
                                                        var prodvars = {};
                                                        if (typeof b.sc_prodevars[i] != "undefined" && b.sc_prodevars[i] != "") {
                                                            b.sc_prodevars[i][pv] = b[e][i];
                                                        } else {
                                                            prodvars[pv] = b[e][i];
                                                            b.sc_prodevars.push(prodvars);
                                                        }
                                                    }
                                                } else {
                                                    d[pv] = (b[e] + "").split(",");
                                                }
                                            } else if (f[g].indexOf("PRODUCTS_event") == 0) {
                                                if (b[e]instanceof Array) {
                                                    b.sc_prodevents = b.sc_prodevents || [];
                                                    for (var i = 0; i < b[e].length; i++) {
                                                        var prodevents = {};
                                                        if (typeof b.sc_prodevents[i] != "undefined" && b.sc_prodevents[i] != "") {
                                                            b.sc_prodevents[i][pv] = b[e][i];
                                                        } else {
                                                            prodevents[pv] = b[e][i];
                                                            b.sc_prodevents.push(prodevents);
                                                        }
                                                    }
                                                    u.addEvent(pv);
                                                } else if (b[e] !== "") {
                                                    ev[pv] = b[e];
                                                    u.addEvent(pv);
                                                }
                                            }
                                        }
                                    }
                                }
                                e = "";
                                for (f in utag.loader.GV(d)) {
                                    for (g = 0; g < d[f].length; g++) {
                                        if (e != "") {
                                            e += "|" + f + "=" + d[f][g];
                                        } else {
                                            e = f + "=" + d[f][g];
                                        }
                                    }
                                }
                                h = "";
                                for (f in utag.loader.GV(ev)) {
                                    if (h) {
                                        h += "|" + f + "=" + ((isNaN(ev[f])) ? "1" : ev[f]);
                                    } else {
                                        h = f + "=" + ((isNaN(ev[f])) ? "1" : ev[f]);
                                    }
                                }
                                b.sc_prodevents = b.sc_prodevents || [];
                                b.sc_prodevars = b.sc_prodevars || [];
                                for (d = 0; d < u.data.id.length; d++) {
                                    var h2 = h;
                                    var h3 = e;
                                    if (typeof b.sc_prodevents != "undefined") {
                                        for (f in b.sc_prodevents[d]) {
                                            if (typeof b.sc_prodevents[d][f] != "undefined") {
                                                var l = b.sc_prodevents[d][f];
                                                if (typeof l != "undefined" && l != "" && isNaN(l) == false) {
                                                    if (h2) {
                                                        h2 += "|" + f + "=" + l;
                                                    } else {
                                                        h2 = f + "=" + l;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (typeof b.sc_prodevars != "undefined") {
                                        for (f in b.sc_prodevars[d]) {
                                            if (typeof b.sc_prodevars[d][f] != "undefined") {
                                                var l = b.sc_prodevars[d][f];
                                                if (typeof l != "undefined" && l != "") {
                                                    if (h3) {
                                                        h3 += "|" + f + '=' + l;
                                                    } else {
                                                        h3 = f + '=' + l;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    c.push((u.data.category[d] ? u.data.category[d] : "") + ";" + u.data.id[d] + ";" + (u.data.quantity[d] ? u.data.quantity[d] : "") + ";" + (u.data.price[d] ? ((u.data.quantity[d] ? parseInt(u.data.quantity[d]) : 1) * parseFloat(u.data.price[d])).toFixed(2) : "") + ";" + h2 + ";" + h3);
                                }
                                if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
                                    c.push(u.data.sc_addProd);
                                }
                                u.o.products = c.join(",");
                            } else {
                                u.o.products = "";
                            }
                            var evt = /^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;
                            for (c in utag.loader.GV(b)) {
                                if (b[c] !== "") {
                                    f = ("" + b[c]).split(",");
                                    for (g = 0; g < f.length; g++) {
                                        h = f[g].split(":");
                                        d = [];
                                        if (u.data.detectserial === "no") {
                                            if (typeof u.map[c + ":" + h.join(":")] != "undefined") {
                                                d = u.map[c + ":" + h.join(":")].split(",");
                                            } else if (typeof u.map[c] != "undefined") {
                                                d = u.map[c].split(",");
                                            }
                                        } else {
                                            if (h.length > 1) {
                                                var subTrigger = h[0];
                                                for (var i = 1; i < h.length - 1; i++) {
                                                    subTrigger += ":" + h[i];
                                                }
                                                h[0] = subTrigger;
                                                h[1] = h[h.length - 1];
                                            }
                                            if (typeof u.map[c + ":" + h[0]] != "undefined") {
                                                d = u.map[c + ":" + h[0]].split(",");
                                            } else if (typeof u.map[c] != "undefined") {
                                                d = u.map[c].split(",");
                                            }
                                        }
                                        for (e = 0; e < d.length; e++) {
                                            if (d[e] != "events" && evt.test(d[e]) && d[e].indexOf("SERIAL_") !== 0) {
                                                if (u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "") {
                                                    u.addEvent(d[e] + ":" + u.data.serial[d[e]]);
                                                } else {
                                                    if (u.data.detectserial === "yes") {
                                                        u.addEvent(d[e] + (h.length > 1 ? ":" + h[1] : ""));
                                                    } else {
                                                        u.addEvent(d[e]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            for (var m in u.data.a) {
                                u.o.contextData["a." + m] = u.data.a[m];
                                u.pushlt(u.ltv, "contextData.a." + m);
                            }
                            for (c in utag.loader.GV(b)) {
                                if (typeof u.map[c] != "undefined") {
                                    d = u.map[c].split(",");
                                    for (e = 0; e < d.length; e++) {
                                        if (d[e].indexOf("VALUE_") == 0) {
                                            if (u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "") {
                                                u.addEvent(d[e].substring(6), b[c] + ":" + u.data.serial[d[e]]);
                                            } else {
                                                u.addEvent(d[e].substring(6), b[c]);
                                            }
                                        } else if (d[e] == "doneAction") {
                                            b.doneAction = b[c];
                                            if (b.doneAction != "navigate") {
                                                b.doneAction = eval(b[c]);
                                            }
                                        } else if (d[e].indexOf("c.") == 0 || d[e].indexOf("contextData.") == 0) {
                                            d[e] = d[e].replace("contextData.", "c.");
                                            if (!(d[e][2] === "a" && d[e][3] === ".")) {
                                                u.o.contextData[d[e].substring(2)] = b[c];
                                                u.pushlt(u.ltv, "contextData." + d[e].substring(2))
                                            }
                                        } else if (d[e] === "clearVars_in_RPTCallback") {
                                            u.data[d[e]] = b[c];
                                        } else {
                                            if (c == "sc_events" || c == "sc_prodevents" || c == "sc_prodevars") {
                                                utag.DB("Error:174: Mapping reserved object name " + c)
                                            } else {
                                                u.o[d[e]] = b[c];
                                            }
                                            if (d[e] == "s_account") {
                                                u.o.account = b[c];
                                            } else if (d[e] == "linkTrackVars") {
                                                u.ltflag = false;
                                            } else {
                                                if (u.combineLinkVar) {
                                                    u.ltflag = true;
                                                }
                                                if (d[e] !== "combineLinkVar") {
                                                    u.pushlt(u.ltv, d[e]);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            d = [];
                            for (c in utag.loader.GV(b.sc_events)) {
                                if (b.sc_events[c]) {
                                    d.push(c)
                                }
                            }
                            if (d.length > 0) {
                                u.o.events = d.join(",");
                                u.pushlt(u.lte, u.o.events);
                            } else {
                                u.o.events = "";
                            }
                            if (b._ccurrency) {
                                u.o.currencyCode = b._ccurrency;
                            }
                            if (b._corder) {
                                u.pushlt(u.lte, "purchase");
                                u.pushlt(u.ltv, "purchaseID");
                                u.o.purchaseID = ((u.o.purchaseID) ? u.o.purchaseID : b._corder);
                                u.o.events = ((u.o.events) ? u.o.events : "purchase");
                                if (u.o.events.indexOf("purchase") < 0) {
                                    u.o.events += ",purchase";
                                }
                            }
                            if (instance) {
                                u.o.visitor = instance;
                            }
                            if (!u.o.visitor) {
                                if (typeof visitor !== "undefined") {
                                    u.o.visitor = window.visitor;
                                } else if (typeof Visitor !== "undefined" && typeof Visitor.getInstance !== "undefined") {
                                    u.o.visitor = Visitor.getInstance(u.data.adobe_org_id);
                                }
                            }
                            u.o.cookieDomain = u.o.visitor ? u.o.visitor.cookieDomain || u.data.cookieDomain : u.data.cookieDomain;
                            u.o.cookieDomainPeriods = u.o.cookieDomain.split('.').length;
                            if (u.a === "view") {
                                var img = u.o.t();
                                if (typeof img !== "undefined" && img !== "") {
                                    u.img = new Image();
                                    u.img.src = img.substring(img.indexOf("src=") + 5, img.indexOf("width=") - 2);
                                }
                            } else if (u.a === "link") {
                                if (typeof u.ltv !== "undefined" && u.ltflag) {
                                    if (u.o.events) {
                                        u.ltv.push("events");
                                    }
                                    if (u.o.products) {
                                        u.ltv.push("products");
                                    }
                                    b.linkTrackVars = u.ltv.join(",");
                                }
                                if (typeof u.lte !== "undefined" && u.ltflag) {
                                    b.linkTrackEvents = u.lte.join(",");
                                }
                                u.o.linkTrackVars = u.data.linkTrackVars || b.linkTrackVars || "None";
                                u.o.linkTrackEvents = u.data.linkTrackEvents || b.linkTrackEvents || "None";
                                if (!u.data.linkType) {
                                    if (b.link_type === "download link") {
                                        u.data.linkType = "d";
                                    } else if (b.link_type === "exit link") {
                                        u.data.linkType = "e";
                                    }
                                }
                                u.o.linkType = u.data.linkType || u.o.linkType || "o";
                                u.data.linkName = u.data.linkName || b.link_name || b.link_text || "no link_name";
                                u.o.tl(((b.link_obj) ? b.link_obj : true), u.o.linkType, u.data.linkName, null, (b.doneAction ? b.doneAction : null));
                            }
                            if ("yes" === "yes") {
                                if (u.data.clearVars_in_RPTCallback === true || u.data.clearVars_in_RPTCallback === "true") {
                                    u.o.registerPostTrackCallback(u.o.clearVars);
                                } else {
                                    u.o.clearVars();
                                }
                            }
                        }
                        utag.DB("send:174:COMPLETE");
                    });
                }
            }
            ;
            function isTrue(input) {
                if (typeof input === "boolean") {
                    return input;
                } else if (typeof input === "string" && (input.toLowerCase() === "yes" || input.toLowerCase() === "true")) {
                    return true;
                } else {
                    return false;
                }
            }
            try {
                utag.o[loader].loader.LOAD(id)
            } catch (e) {
                utag.loader.LOAD(id)
            }
        }
    )("174", "woolworths.supermarkets");
} catch (e) {
    utag.DB(e);
}
