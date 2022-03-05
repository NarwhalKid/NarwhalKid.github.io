var bigInt = function(n) {
    function k(a, c) {
        this.value = a;
        this.sign = c;
        this.isSmall = !1
    }
    function h(a) {
        this.value = a;
        this.sign = 0 > a;
        this.isSmall = !0
    }
    function u(a) {
        return -9007199254740992 < a && 9007199254740992 > a
    }
    function x(a) {
        return 1E7 > a ? [a] : 1E14 > a ? [a % 1E7, Math.floor(a / 1E7)] : [a % 1E7, Math.floor(a / 1E7) % 1E7, Math.floor(a / 1E14)]
    }
    function y(a) {
        w(a);
        var c = a.length;
        if (4 > c && 0 > z(a, L))
            switch (c) {
            case 0:
                return 0;
            case 1:
                return a[0];
            case 2:
                return a[0] + 1E7 * a[1];
            default:
                return a[0] + 1E7 * (a[1] + 1E7 * a[2])
            }
        return a
    }
    function w(a) {
        for (var c = a.length; 0 === a[--c]; )
            ;
        a.length = c + 1
    }
    function B(a) {
        for (var c = Array(a), b = -1; ++b < a; )
            c[b] = 0;
        return c
    }
    function A(a) {
        return 0 < a ? Math.floor(a) : Math.ceil(a)
    }
    function E(a, c) {
        var b = a.length, f = c.length, e = Array(b), d = 0, g, l;
        for (l = 0; l < f; l++)
            g = a[l] + c[l] + d,
            d = 1E7 <= g ? 1 : 0,
            e[l] = g - 1E7 * d;
        for (; l < b; )
            g = a[l] + d,
            d = 1E7 === g ? 1 : 0,
            e[l++] = g - 1E7 * d;
        0 < d && e.push(d);
        return e
    }
    function F(a, c) {
        var b = a.length, f = Array(b), e, d;
        for (d = 0; d < b; d++)
            e = a[d] - 1E7 + c,
            c = Math.floor(e / 1E7),
            f[d] = e - 1E7 * c,
            c += 1;
        for (; 0 < c; )
            f[d++] = c % 1E7,
            c = Math.floor(c / 1E7);
        return f
    }
    function G(a, c) {
        var b = a.length, f = c.length, e = Array(b), d = 0, g, l;
        for (g = 0; g < f; g++)
            l = a[g] - d - c[g],
            0 > l ? (l += 1E7,
            d = 1) : d = 0,
            e[g] = l;
        for (g = f; g < b; g++) {
            l = a[g] - d;
            if (0 > l)
                l += 1E7;
            else {
                e[g++] = l;
                break
            }
            e[g] = l
        }
        for (; g < b; g++)
            e[g] = a[g];
        w(e);
        return e
    }
    function H(a, c, b) {
        var f = a.length
          , e = Array(f);
        c = -c;
        var d, g;
        for (d = 0; d < f; d++)
            g = a[d] + c,
            c = Math.floor(g / 1E7),
            e[d] = 0 > g ? g % 1E7 + 1E7 : g;
        e = y(e);
        return "number" === typeof e ? (b && (e = -e),
        new h(e)) : new k(e,b)
    }
    function I(a, c) {
        var b = a.length, f = c.length, e = B(b + f), d, g, l;
        for (g = 0; g < b; ++g) {
            d = a[g];
            for (var h = 0; h < f; ++h)
                l = c[h],
                e[g + h] += d * l;
            if (0 == (g + 1) % 90 || g + 1 == b)
                for (h = g - g % 90; h < g + f; h++)
                    d = Math.floor(e[h] / 1E7),
                    e[h] -= 1E7 * d,
                    e[h + 1] += d
        }
        w(e);
        return e
    }
    function C(a, c) {
        var b = a.length, f = Array(b), e = 0, d, g;
        for (g = 0; g < b; g++)
            d = a[g] * c + e,
            e = Math.floor(d / 1E7),
            f[g] = d - 1E7 * e;
        for (; 0 < e; )
            f[g++] = e % 1E7,
            e = Math.floor(e / 1E7);
        return f
    }
    function J(a) {
        var c = a.length, b = B(c + c), f, e, d, g;
        for (d = 0; d < c; d++) {
            g = a[d];
            for (var h = 0; h < c; h++)
                f = a[h],
                f = g * f + b[d + h],
                e = Math.floor(f / 1E7),
                b[d + h] = f - 1E7 * e,
                b[d + h + 1] += e
        }
        w(b);
        return b
    }
    function K(a, c) {
        var b = a.length, f = B(b), e, d;
        d = 0;
        for (--b; 0 <= b; --b)
            d = 1E7 * d + a[b],
            e = A(d / c),
            d -= e * c,
            f[b] = e | 0;
        return [f, d | 0]
    }
    function M(a, c) {
        var b, f = r(c), e = a.value, d = f.value;
        if (0 === d)
            throw Error("Div 0");
        if (a.isSmall)
            return f.isSmall ? [new h(A(e / d)), new h(e % d)] : [m[0], a];
        if (f.isSmall) {
            if (1 === d)
                return [a, m[0]];
            if (-1 == d)
                return [a.neg(), m[0]];
            d = Math.abs(d);
            if (1E7 > d)
                return b = K(e, d),
                d = y(b[0]),
                b = b[1],
                a.sign && (b = -b),
                "number" === typeof d ? (a.sign !== f.sign && (d = -d),
                [new h(d), new h(b)]) : [new k(d,a.sign !== f.sign), new h(b)];
            d = x(d)
        }
        b = z(e, d);
        if (-1 === b)
            return [m[0], a];
        if (0 === b)
            return [m[a.sign === f.sign ? 1 : -1], m[0]];
        var g = d
          , l = e.length
          , d = g.length;
        b = B(g.length);
        var n = g[d - 1], u = Math.ceil(1E7 / (2 * n)), e = C(e, u), g = C(g, u), t, p, v, q, w, D;
        e.length <= l && e.push(0);
        g.push(0);
        n = g[d - 1];
        for (t = l - d; 0 <= t; t--) {
            l = Math.floor((1E7 * e[t + d] + e[t + d - 1]) / n);
            v = p = 0;
            w = g.length;
            for (q = 0; q < w; q++)
                p += l * g[q],
                D = Math.floor(p / 1E7),
                v += e[t + q] - (p - 1E7 * D),
                p = D,
                0 > v ? (e[t + q] = v + 1E7,
                v = -1) : (e[t + q] = v,
                v = 0);
            for (; 0 !== v; ) {
                --l;
                for (q = p = 0; q < w; q++)
                    p += e[t + q] - 1E7 + g[q],
                    0 > p ? (e[t + q] = p + 1E7,
                    p = 0) : (e[t + q] = p,
                    p = 1);
                v += p
            }
            b[t] = l
        }
        e = K(e, u)[0];
        b = [y(b), y(e)];
        d = b[0];
        f = a.sign !== f.sign;
        b = b[1];
        n = a.sign;
        "number" === typeof d ? (f && (d = -d),
        d = new h(d)) : d = new k(d,f);
        "number" === typeof b ? (n && (b = -b),
        b = new h(b)) : b = new k(b,n);
        return [d, b]
    }
    function z(a, c) {
        if (a.length !== c.length)
            return a.length > c.length ? 1 : -1;
        for (var b = a.length - 1; 0 <= b; b--)
            if (a[b] !== c[b])
                return a[b] > c[b] ? 1 : -1;
        return 0
    }
    function r(a) {
        if (a instanceof k || a instanceof h)
            return a;
        if ("number" === typeof a) {
            if (u(a))
                return new h(a);
            a = String(a)
        }
        if ("string" === typeof a) {
            if (u(+a)) {
                var c = +a;
                if (c === A(c))
                    return new h(c);
                throw Error("Bad int");
            }
            (c = "-" === a[0]) && (a = a.slice(1));
            var b = a.split(/e/i);
            if (2 < b.length)
                throw Error("Bad int");
            if (2 === b.length) {
                a = b[1];
                "+" === a[0] && (a = a.slice(1));
                a = +a;
                if (a !== A(a) || !u(a))
                    throw Error("Bad exp");
                var b = b[0]
                  , f = b.indexOf(".");
                0 <= f && (a -= b.length - f,
                b = b.slice(0, f) + b.slice(f + 1));
                if (0 > a)
                    throw Error("No e-");
                a = b += Array(a + 1).join("0")
            }
            if (!/^([0-9][0-9]*)$/.test(a))
                throw Error("Bad int");
            for (var b = [], f = a.length, e = f - 7; 0 < f; )
                b.push(+a.slice(e, f)),
                e -= 7,
                0 > e && (e = 0),
                f -= 7;
            w(b);
            return new k(b,c)
        }
    }
    "https://github.com/peterolson/BigInteger.js";
    var L = x(9007199254740992);
    k.prototype.add = function(a) {
        a = r(a);
        if (this.sign !== a.sign)
            return this.sub(a.neg());
        var c = this.value
          , b = a.value;
        if (a.isSmall)
            return new k(F(c, Math.abs(b)),this.sign);
        a = c.length >= b.length ? E(c, b) : E(b, c);
        return new k(a,this.sign)
    }
    ;
    h.prototype.add = function(a) {
        a = r(a);
        var c = this.value;
        if (0 > c !== a.sign)
            return this.sub(a.neg());
        var b = a.value;
        if (a.isSmall) {
            if (u(c + b))
                return new h(c + b);
            b = x(Math.abs(b))
        }
        return new k(F(b, Math.abs(c)),0 > c)
    }
    ;
    k.prototype.sub = function(a) {
        var c = r(a);
        if (this.sign !== c.sign)
            return this.add(c.neg());
        a = this.value;
        var b = c.value;
        if (c.isSmall)
            return H(a, Math.abs(b), this.sign);
        c = this.sign;
        0 <= z(a, b) ? a = G(a, b) : (a = G(b, a),
        c = !c);
        a = y(a);
        "number" === typeof a ? (c && (a = -a),
        a = new h(a)) : a = new k(a,c);
        return a
    }
    ;
    h.prototype.sub = function(a) {
        a = r(a);
        var c = this.value;
        if (0 > c !== a.sign)
            return this.add(a.neg());
        var b = a.value;
        return a.isSmall ? new h(c - b) : H(b, Math.abs(c), 0 <= c)
    }
    ;
    k.prototype.neg = function() {
        return new k(this.value,!this.sign)
    }
    ;
    h.prototype.neg = function() {
        var a = this.sign
          , c = new h(-this.value);
        c.sign = !a;
        return c
    }
    ;
    k.prototype.abs = function() {
        return new k(this.value,!1)
    }
    ;
    h.prototype.abs = function() {
        return new h(Math.abs(this.value))
    }
    ;
    k.prototype.mul = function(a) {
        var c = r(a);
        a = this.value;
        var b = c.value
          , f = this.sign !== c.sign;
        if (c.isSmall) {
            if (0 === b)
                return m[0];
            if (1 === b)
                return this;
            if (-1 === b)
                return this.neg();
            c = Math.abs(b);
            if (1E7 > c)
                return new k(C(a, c),f);
            b = x(c)
        }
        return new k(I(a, b),f)
    }
    ;
    h.prototype.mul = function(a) {
        a = r(a);
        var c = this.value
          , b = a.value;
        if (0 === c)
            return m[0];
        if (1 === c)
            return a;
        if (-1 === c)
            return a.neg();
        if (a.isSmall) {
            if (u(c * b))
                return new h(c * b);
            b = x(Math.abs(b))
        }
        c = Math.abs(c);
        return 1E7 > c ? new k(C(b, c),this.sign !== a.sign) : new k(I(b, x(c)),this.sign !== a.sign)
    }
    ;
    k.prototype.sqr = function() {
        return new k(J(this.value),!1)
    }
    ;
    h.prototype.sqr = function() {
        var a = this.value * this.value;
        return u(a) ? new h(a) : new k(J(x(Math.abs(this.value))),!1)
    }
    ;
    k.prototype.divmod = function(a) {
        a = M(this, a);
        return {
            quo: a[0],
            rem: a[1]
        }
    }
    ;
    h.prototype.divmod = k.prototype.divmod;
    k.prototype.pow = function(a) {
        var c = r(a)
          , b = this.value;
        a = c.value;
        var f;
        if (0 === a)
            return m[1];
        if (0 === b)
            return m[0];
        if (1 === b)
            return m[1];
        if (c.sign)
            return m[0];
        if (!c.isSmall)
            throw Error("Exp too large");
        if (this.isSmall && u(f = Math.pow(b, a)))
            return new h(A(f));
        f = this;
        for (c = m[1]; ; ) {
            a & 1 && (c = c.mul(f),
            --a);
            if (0 === a)
                break;
            a /= 2;
            f = f.sqr()
        }
        return c
    }
    ;
    h.prototype.pow = k.prototype.pow;
    k.prototype.cmpAbs = function(a) {
        a = r(a);
        return a.isSmall ? 1 : z(this.value, a.value)
    }
    ;
    h.prototype.cmpAbs = function(a) {
        a = r(a);
        var c = Math.abs(this.value)
          , b = a.value;
        return a.isSmall ? (b = Math.abs(b),
        c === b ? 0 : c > b ? 1 : -1) : -1
    }
    ;
    k.prototype.cmp = function(a) {
        a = r(a);
        return this.sign !== a.sign ? a.sign ? 1 : -1 : a.isSmall ? this.sign ? -1 : 1 : z(this.value, a.value) * (this.sign ? -1 : 1)
    }
    ;
    h.prototype.cmp = function(a) {
        a = r(a);
        var c = this.value
          , b = a.value;
        return a.isSmall ? c == b ? 0 : c > b ? 1 : -1 : 0 > c !== a.sign ? 0 > c ? -1 : 1 : 0 > c ? 1 : -1
    }
    ;
    k.prototype.toString = function() {
        for (var a = this.value, c = a.length, b = String(a[--c]), f; 0 <= --c; )
            f = String(a[c]),
            b += "0000000".slice(f.length) + f;
        return (this.sign ? "-" : "") + b
    }
    ;
    h.prototype.toString = function() {
        return String(this.value)
    }
    ;
    var m = function(a) {
        return "undefined" === typeof a ? m[0] : r(a)
    };
    for (n = 0; 10 > n; n++)
        m[n] = new h(n),
        0 < n && (m[-n] = new h(-n));
    m.isInstance = function(a) {
        return a instanceof k || a instanceof h
    }
    ;
    return m
}();
"undefined" !== typeof module && module.hasOwnProperty("exports") && (module.exports = bigInt);
