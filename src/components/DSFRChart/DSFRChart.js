var Fp = Object.defineProperty;
var Ip = (e, t, n) => t in e ? Fp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var U = (e, t, n) => Ip(e, typeof t != "symbol" ? t + "" : t, n);
var Eu = {};
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const xt = Eu.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ts = Eu.NODE_ENV !== "production" ? Object.freeze([]) : [], zt = () => {
}, Du = () => !1, zi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wo = (e) => e.startsWith("onUpdate:"), Ot = Object.assign, _a = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Vp = Object.prototype.hasOwnProperty, gt = (e, t) => Vp.call(e, t), J = Array.isArray, ss = (e) => ji(e) === "[object Map]", Er = (e) => ji(e) === "[object Set]", Ac = (e) => ji(e) === "[object Date]", st = (e) => typeof e == "function", At = (e) => typeof e == "string", rn = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", Ma = (e) => (vt(e) || st(e)) && st(e.then) && st(e.catch), Au = Object.prototype.toString, ji = (e) => Au.call(e), Ca = (e) => ji(e).slice(8, -1), Dr = (e) => ji(e) === "[object Object]", Pa = (e) => At(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, mi = /* @__PURE__ */ Cn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bp = /* @__PURE__ */ Cn(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $p = /-\w/g, Yt = Ar(
  (e) => e.replace($p, (t) => t.slice(1).toUpperCase())
), Hp = /\B([A-Z])/g, ve = Ar(
  (e) => e.replace(Hp, "-$1").toLowerCase()
), fs = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xn = Ar(
  (e) => e ? `on${fs(e)}` : ""
), On = (e, t) => !Object.is(e, t), Ds = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, qo = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Nu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Nc = (e) => {
  const t = At(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Oc;
const Wi = () => Oc || (Oc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function P(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = At(s) ? qp(s) : P(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (At(e) || vt(e))
    return e;
}
const zp = /;(?![^(]*\))/g, jp = /:([^]+)/, Wp = /\/\*[^]*?\*\//g;
function qp(e) {
  const t = {};
  return e.replace(Wp, "").split(zp).forEach((n) => {
    if (n) {
      const s = n.split(jp);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function re(e) {
  let t = "";
  if (At(e))
    t = e;
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const s = re(e[n]);
      s && (t += s + " ");
    }
  else if (vt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Yp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Up = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Gp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Xp = /* @__PURE__ */ Cn(Yp), Kp = /* @__PURE__ */ Cn(Up), Jp = /* @__PURE__ */ Cn(Gp), Zp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qp = /* @__PURE__ */ Cn(Zp);
function Ou(e) {
  return !!e || e === "";
}
function t2(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Nr(e[s], t[s]);
  return n;
}
function Nr(e, t) {
  if (e === t) return !0;
  let n = Ac(e), s = Ac(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = rn(e), s = rn(t), n || s)
    return e === t;
  if (n = J(e), s = J(t), n || s)
    return n && s ? t2(e, t) : !1;
  if (n = vt(e), s = vt(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !Nr(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function e2(e, t) {
  return e.findIndex((n) => Nr(n, t));
}
const Ru = (e) => !!(e && e.__v_isRef === !0), X = (e) => At(e) ? e : e == null ? "" : J(e) || vt(e) && (e.toString === Au || !st(e.toString)) ? Ru(e) ? X(e.value) : JSON.stringify(e, Tu, 2) : String(e), Tu = (e, t) => Ru(t) ? Tu(e, t.value) : ss(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[Jr(s, r) + " =>"] = i, n),
    {}
  )
} : Er(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jr(n))
} : rn(t) ? Jr(t) : vt(t) && !J(t) && !Dr(t) ? String(t) : t, Jr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    rn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var St = {};
function Ve(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ue;
class n2 {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ue, !t && ue && (this.index = (ue.scopes || (ue.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ue;
      try {
        return ue = this, t();
      } finally {
        ue = n;
      }
    } else St.NODE_ENV !== "production" && Ve("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ue, ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ue = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function s2() {
  return ue;
}
let yt;
const Zr = /* @__PURE__ */ new WeakSet();
class Lu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && ue.active && ue.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Zr.has(this) && (Zr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Iu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Rc(this), Vu(this);
    const t = yt, n = Le;
    yt = this, Le = !0;
    try {
      return this.fn();
    } finally {
      St.NODE_ENV !== "production" && yt !== this && Ve(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Bu(this), yt = t, Le = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Da(t);
      this.deps = this.depsTail = void 0, Rc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Bl(this) && this.run();
  }
  get dirty() {
    return Bl(this);
  }
}
let Fu = 0, bi, vi;
function Iu(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = vi, vi = e;
    return;
  }
  e.next = bi, bi = e;
}
function Sa() {
  Fu++;
}
function Ea() {
  if (--Fu > 0)
    return;
  if (vi) {
    let t = vi;
    for (vi = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; bi; ) {
    let t = bi;
    for (bi = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Vu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Bu(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Da(s), i2(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Bl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($u(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $u(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ei) || (e.globalVersion = Ei, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Bl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = yt, s = Le;
  yt = e, Le = !0;
  try {
    Vu(e);
    const i = e.fn(e._value);
    (t.version === 0 || On(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    yt = n, Le = s, Bu(e), e.flags &= -3;
  }
}
function Da(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), St.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Da(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function i2(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Le = !0;
const Hu = [];
function Be() {
  Hu.push(Le), Le = !1;
}
function $e() {
  const e = Hu.pop();
  Le = e === void 0 ? !0 : e;
}
function Rc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = yt;
    yt = void 0;
    try {
      t();
    } finally {
      yt = n;
    }
  }
}
let Ei = 0;
class o2 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Aa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, St.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!yt || !Le || yt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== yt)
      n = this.activeLink = new o2(yt, this), yt.deps ? (n.prevDep = yt.depsTail, yt.depsTail.nextDep = n, yt.depsTail = n) : yt.deps = yt.depsTail = n, zu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = yt.depsTail, n.nextDep = void 0, yt.depsTail.nextDep = n, yt.depsTail = n, yt.deps === n && (yt.deps = s);
    }
    return St.NODE_ENV !== "production" && yt.onTrack && yt.onTrack(
      Ot(
        {
          effect: yt
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Ei++, this.notify(t);
  }
  notify(t) {
    Sa();
    try {
      if (St.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Ot(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ea();
    }
  }
}
function zu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        zu(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), St.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const $l = /* @__PURE__ */ new WeakMap(), is = Symbol(
  St.NODE_ENV !== "production" ? "Object iterate" : ""
), Hl = Symbol(
  St.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Di = Symbol(
  St.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Ht(e, t, n) {
  if (Le && yt) {
    let s = $l.get(e);
    s || $l.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Aa()), i.map = s, i.key = n), St.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Ke(e, t, n, s, i, r) {
  const o = $l.get(e);
  if (!o) {
    Ei++;
    return;
  }
  const l = (a) => {
    a && (St.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: i,
      oldTarget: r
    }) : a.trigger());
  };
  if (Sa(), t === "clear")
    o.forEach(l);
  else {
    const a = J(e), c = a && Pa(n);
    if (a && n === "length") {
      const h = Number(s);
      o.forEach((d, u) => {
        (u === "length" || u === Di || !rn(u) && u >= h) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(Di)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(is)), ss(e) && l(o.get(Hl)));
          break;
        case "delete":
          a || (l(o.get(is)), ss(e) && l(o.get(Hl)));
          break;
        case "set":
          ss(e) && l(o.get(is));
          break;
      }
  }
  Ea();
}
function ys(e) {
  const t = ct(e);
  return t === e ? t : (Ht(t, "iterate", Di), ae(e) ? t : t.map(Xt));
}
function Or(e) {
  return Ht(e = ct(e), "iterate", Di), e;
}
const r2 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Qr(this, Symbol.iterator, Xt);
  },
  concat(...e) {
    return ys(this).concat(
      ...e.map((t) => J(t) ? ys(t) : t)
    );
  },
  entries() {
    return Qr(this, "entries", (e) => (e[1] = Xt(e[1]), e));
  },
  every(e, t) {
    return dn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return dn(this, "filter", e, t, (n) => n.map(Xt), arguments);
  },
  find(e, t) {
    return dn(this, "find", e, t, Xt, arguments);
  },
  findIndex(e, t) {
    return dn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return dn(this, "findLast", e, t, Xt, arguments);
  },
  findLastIndex(e, t) {
    return dn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return dn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return tl(this, "includes", e);
  },
  indexOf(...e) {
    return tl(this, "indexOf", e);
  },
  join(e) {
    return ys(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return tl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return dn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ti(this, "pop");
  },
  push(...e) {
    return ti(this, "push", e);
  },
  reduce(e, ...t) {
    return Tc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Tc(this, "reduceRight", e, t);
  },
  shift() {
    return ti(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return dn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ti(this, "splice", e);
  },
  toReversed() {
    return ys(this).toReversed();
  },
  toSorted(e) {
    return ys(this).toSorted(e);
  },
  toSpliced(...e) {
    return ys(this).toSpliced(...e);
  },
  unshift(...e) {
    return ti(this, "unshift", e);
  },
  values() {
    return Qr(this, "values", Xt);
  }
};
function Qr(e, t, n) {
  const s = Or(e), i = s[t]();
  return s !== e && !ae(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const l2 = Array.prototype;
function dn(e, t, n, s, i, r) {
  const o = Or(e), l = o !== e && !ae(e), a = o[t];
  if (a !== l2[t]) {
    const d = a.apply(e, r);
    return l ? Xt(d) : d;
  }
  let c = n;
  o !== e && (l ? c = function(d, u) {
    return n.call(this, Xt(d), u, e);
  } : n.length > 2 && (c = function(d, u) {
    return n.call(this, d, u, e);
  }));
  const h = a.call(o, c, s);
  return l && i ? i(h) : h;
}
function Tc(e, t, n, s) {
  const i = Or(e);
  let r = n;
  return i !== e && (ae(e) ? n.length > 3 && (r = function(o, l, a) {
    return n.call(this, o, l, a, e);
  }) : r = function(o, l, a) {
    return n.call(this, o, Xt(l), a, e);
  }), i[t](r, ...s);
}
function tl(e, t, n) {
  const s = ct(e);
  Ht(s, "iterate", Di);
  const i = s[t](...n);
  return (i === -1 || i === !1) && Yo(n[0]) ? (n[0] = ct(n[0]), s[t](...n)) : i;
}
function ti(e, t, n = []) {
  Be(), Sa();
  const s = ct(e)[t].apply(e, n);
  return Ea(), $e(), s;
}
const a2 = /* @__PURE__ */ Cn("__proto__,__v_isRef,__isVue"), ju = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rn)
);
function c2(e) {
  rn(e) || (e = String(e));
  const t = ct(this);
  return Ht(t, "has", e), t.hasOwnProperty(e);
}
class Wu {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (i ? r ? Ku : Xu : r ? Gu : Uu).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = J(t);
    if (!i) {
      let a;
      if (o && (a = r2[n]))
        return a;
      if (n === "hasOwnProperty")
        return c2;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(t) ? t : s
    );
    if ((rn(n) ? ju.has(n) : a2(n)) || (i || Ht(t, "get", n), r))
      return l;
    if ($t(l)) {
      const a = o && Pa(n) ? l : l.value;
      return i && vt(a) ? jl(a) : a;
    }
    return vt(l) ? i ? jl(l) : Na(l) : l;
  }
}
class qu extends Wu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    if (!this._isShallow) {
      const a = ln(r);
      if (!ae(s) && !ln(s) && (r = ct(r), s = ct(s)), !J(t) && $t(r) && !$t(s))
        return a ? (St.NODE_ENV !== "production" && Ve(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = s, !0);
    }
    const o = J(t) && Pa(n) ? Number(n) < t.length : gt(t, n), l = Reflect.set(
      t,
      n,
      s,
      $t(t) ? t : i
    );
    return t === ct(i) && (o ? On(s, r) && Ke(t, "set", n, s, r) : Ke(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = gt(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && Ke(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!rn(n) || !ju.has(n)) && Ht(t, "has", n), s;
  }
  ownKeys(t) {
    return Ht(
      t,
      "iterate",
      J(t) ? "length" : is
    ), Reflect.ownKeys(t);
  }
}
class Yu extends Wu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return St.NODE_ENV !== "production" && Ve(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return St.NODE_ENV !== "production" && Ve(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const h2 = /* @__PURE__ */ new qu(), d2 = /* @__PURE__ */ new Yu(), u2 = /* @__PURE__ */ new qu(!0), f2 = /* @__PURE__ */ new Yu(!0), zl = (e) => e, to = (e) => Reflect.getPrototypeOf(e);
function p2(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = ct(i), o = ss(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = i[e](...s), h = n ? zl : t ? Uo : Xt;
    return !t && Ht(
      r,
      "iterate",
      a ? Hl : is
    ), {
      // iterator protocol
      next() {
        const { value: d, done: u } = c.next();
        return u ? { value: d, done: u } : {
          value: l ? [h(d[0]), h(d[1])] : h(d),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function eo(e) {
  return function(...t) {
    if (St.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ve(
        `${fs(e)} operation ${n}failed: target is readonly.`,
        ct(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function g2(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = ct(r), l = ct(i);
      e || (On(i, l) && Ht(o, "get", i), Ht(o, "get", l));
      const { has: a } = to(o), c = t ? zl : e ? Uo : Xt;
      if (a.call(o, i))
        return c(r.get(i));
      if (a.call(o, l))
        return c(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ht(ct(i), "iterate", is), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = ct(r), l = ct(i);
      return e || (On(i, l) && Ht(o, "has", i), Ht(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = ct(l), c = t ? zl : e ? Uo : Xt;
      return !e && Ht(a, "iterate", is), l.forEach((h, d) => i.call(r, c(h), c(d), o));
    }
  };
  return Ot(
    n,
    e ? {
      add: eo("add"),
      set: eo("set"),
      delete: eo("delete"),
      clear: eo("clear")
    } : {
      add(i) {
        !t && !ae(i) && !ln(i) && (i = ct(i));
        const r = ct(this);
        return to(r).has.call(r, i) || (r.add(i), Ke(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !ae(r) && !ln(r) && (r = ct(r));
        const o = ct(this), { has: l, get: a } = to(o);
        let c = l.call(o, i);
        c ? St.NODE_ENV !== "production" && Lc(o, l, i) : (i = ct(i), c = l.call(o, i));
        const h = a.call(o, i);
        return o.set(i, r), c ? On(r, h) && Ke(o, "set", i, r, h) : Ke(o, "add", i, r), this;
      },
      delete(i) {
        const r = ct(this), { has: o, get: l } = to(r);
        let a = o.call(r, i);
        a ? St.NODE_ENV !== "production" && Lc(r, o, i) : (i = ct(i), a = o.call(r, i));
        const c = l ? l.call(r, i) : void 0, h = r.delete(i);
        return a && Ke(r, "delete", i, void 0, c), h;
      },
      clear() {
        const i = ct(this), r = i.size !== 0, o = St.NODE_ENV !== "production" ? ss(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return r && Ke(
          i,
          "clear",
          void 0,
          void 0,
          o
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = p2(i, e, t);
  }), n;
}
function Rr(e, t) {
  const n = g2(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    gt(n, i) && i in s ? n : s,
    i,
    r
  );
}
const m2 = {
  get: /* @__PURE__ */ Rr(!1, !1)
}, b2 = {
  get: /* @__PURE__ */ Rr(!1, !0)
}, v2 = {
  get: /* @__PURE__ */ Rr(!0, !1)
}, y2 = {
  get: /* @__PURE__ */ Rr(!0, !0)
};
function Lc(e, t, n) {
  const s = ct(n);
  if (s !== n && t.call(e, s)) {
    const i = Ca(e);
    Ve(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Uu = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap(), Ku = /* @__PURE__ */ new WeakMap();
function x2(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function w2(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : x2(Ca(e));
}
function Na(e) {
  return ln(e) ? e : Tr(
    e,
    !1,
    h2,
    m2,
    Uu
  );
}
function k2(e) {
  return Tr(
    e,
    !1,
    u2,
    b2,
    Gu
  );
}
function jl(e) {
  return Tr(
    e,
    !0,
    d2,
    v2,
    Xu
  );
}
function Ze(e) {
  return Tr(
    e,
    !0,
    f2,
    y2,
    Ku
  );
}
function Tr(e, t, n, s, i) {
  if (!vt(e))
    return St.NODE_ENV !== "production" && Ve(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = w2(e);
  if (r === 0)
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, l), l;
}
function os(e) {
  return ln(e) ? os(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ln(e) {
  return !!(e && e.__v_isReadonly);
}
function ae(e) {
  return !!(e && e.__v_isShallow);
}
function Yo(e) {
  return e ? !!e.__v_raw : !1;
}
function ct(e) {
  const t = e && e.__v_raw;
  return t ? ct(t) : e;
}
function _2(e) {
  return !gt(e, "__v_skip") && Object.isExtensible(e) && qo(e, "__v_skip", !0), e;
}
const Xt = (e) => vt(e) ? Na(e) : e, Uo = (e) => vt(e) ? jl(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function no(e) {
  return M2(e, !1);
}
function M2(e, t) {
  return $t(e) ? e : new C2(e, t);
}
class C2 {
  constructor(t, n) {
    this.dep = new Aa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ct(t), this._value = n ? t : Xt(t), this.__v_isShallow = n;
  }
  get value() {
    return St.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || ae(t) || ln(t);
    t = s ? t : ct(t), On(t, n) && (this._rawValue = t, this._value = s ? t : Xt(t), St.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ts(e) {
  return $t(e) ? e.value : e;
}
const P2 = {
  get: (e, t, n) => t === "__v_raw" ? e : ts(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return $t(i) && !$t(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ju(e) {
  return os(e) ? e : new Proxy(e, P2);
}
class S2 {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Aa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ei - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    yt !== this)
      return Iu(this, !0), !0;
  }
  get value() {
    const t = St.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return $u(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : St.NODE_ENV !== "production" && Ve("Write operation failed: computed value is readonly");
  }
}
function E2(e, t, n = !1) {
  let s, i;
  return st(e) ? s = e : (s = e.get, i = e.set), new S2(s, i, n);
}
const so = {}, Go = /* @__PURE__ */ new WeakMap();
let Kn;
function D2(e, t = !1, n = Kn) {
  if (n) {
    let s = Go.get(n);
    s || Go.set(n, s = []), s.push(e);
  } else St.NODE_ENV !== "production" && !t && Ve(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function A2(e, t, n = xt) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = n, c = (w) => {
    (n.onWarn || Ve)(
      "Invalid watch source: ",
      w,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, h = (w) => i ? w : ae(w) || i === !1 || i === 0 ? xn(w, 1) : xn(w);
  let d, u, f, m, p = !1, b = !1;
  if ($t(e) ? (u = () => e.value, p = ae(e)) : os(e) ? (u = () => h(e), p = !0) : J(e) ? (b = !0, p = e.some((w) => os(w) || ae(w)), u = () => e.map((w) => {
    if ($t(w))
      return w.value;
    if (os(w))
      return h(w);
    if (st(w))
      return a ? a(w, 2) : w();
    St.NODE_ENV !== "production" && c(w);
  })) : st(e) ? t ? u = a ? () => a(e, 2) : e : u = () => {
    if (f) {
      Be();
      try {
        f();
      } finally {
        $e();
      }
    }
    const w = Kn;
    Kn = d;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      Kn = w;
    }
  } : (u = zt, St.NODE_ENV !== "production" && c(e)), t && i) {
    const w = u, D = i === !0 ? 1 / 0 : i;
    u = () => xn(w(), D);
  }
  const v = s2(), x = () => {
    d.stop(), v && v.active && _a(v.effects, d);
  };
  if (r && t) {
    const w = t;
    t = (...D) => {
      w(...D), x();
    };
  }
  let C = b ? new Array(e.length).fill(so) : so;
  const S = (w) => {
    if (!(!(d.flags & 1) || !d.dirty && !w))
      if (t) {
        const D = d.run();
        if (i || p || (b ? D.some((_, E) => On(_, C[E])) : On(D, C))) {
          f && f();
          const _ = Kn;
          Kn = d;
          try {
            const E = [
              D,
              // pass undefined as the old value when it's changed for the first time
              C === so ? void 0 : b && C[0] === so ? [] : C,
              m
            ];
            C = D, a ? a(t, 3, E) : (
              // @ts-expect-error
              t(...E)
            );
          } finally {
            Kn = _;
          }
        }
      } else
        d.run();
  };
  return l && l(S), d = new Lu(u), d.scheduler = o ? () => o(S, !1) : S, m = (w) => D2(w, !1, d), f = d.onStop = () => {
    const w = Go.get(d);
    if (w) {
      if (a)
        a(w, 4);
      else
        for (const D of w) D();
      Go.delete(d);
    }
  }, St.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? S(!0) : C = d.run() : o ? o(S.bind(null, !0), !0) : d.run(), x.pause = d.pause.bind(d), x.resume = d.resume.bind(d), x.stop = x, x;
}
function xn(e, t = 1 / 0, n) {
  if (t <= 0 || !vt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, $t(e))
    xn(e.value, t, n);
  else if (J(e))
    for (let s = 0; s < e.length; s++)
      xn(e[s], t, n);
  else if (Er(e) || ss(e))
    e.forEach((s) => {
      xn(s, t, n);
    });
  else if (Dr(e)) {
    for (const s in e)
      xn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && xn(e[s], t, n);
  }
  return e;
}
var M = {};
const rs = [];
function Do(e) {
  rs.push(e);
}
function Ao() {
  rs.pop();
}
let el = !1;
function H(e, ...t) {
  if (el) return;
  el = !0, Be();
  const n = rs.length ? rs[rs.length - 1].component : null, s = n && n.appContext.config.warnHandler, i = N2();
  if (s)
    qs(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var o, l;
          return (l = (o = r.toString) == null ? void 0 : o.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${$r(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...O2(i)), console.warn(...r);
  }
  $e(), el = !1;
}
function N2() {
  let e = rs[rs.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function O2(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...R2(n));
  }), t;
}
function R2({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, i = ` at <${$r(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [i, ...T2(e.props), r] : [i + r];
}
function T2(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Zu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Zu(e, t, n) {
  return At(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : $t(t) ? (t = Zu(e, ct(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : st(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ct(t), n ? t : [`${e}=`, t]);
}
const Oa = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function qs(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    qi(i, t, n);
  }
}
function an(e, t, n, s) {
  if (st(e)) {
    const i = qs(e, t, n, s);
    return i && Ma(i) && i.catch((r) => {
      qi(r, t, n);
    }), i;
  }
  if (J(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(an(e[r], t, n, s));
    return i;
  } else M.NODE_ENV !== "production" && H(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function qi(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || xt;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = M.NODE_ENV !== "production" ? Oa[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const h = l.ec;
      if (h) {
        for (let d = 0; d < h.length; d++)
          if (h[d](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Be(), qs(r, null, 10, [
        e,
        a,
        c
      ]), $e();
      return;
    }
  }
  L2(e, n, i, s, o);
}
function L2(e, t, n, s = !0, i = !1) {
  if (M.NODE_ENV !== "production") {
    const r = Oa[t];
    if (n && Do(n), H(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Ao(), s)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const le = [];
let Ge = -1;
const Ls = [];
let En = null, As = 0;
const Qu = /* @__PURE__ */ Promise.resolve();
let Xo = null;
const F2 = 100;
function Ra(e) {
  const t = Xo || Qu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function I2(e) {
  let t = Ge + 1, n = le.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = le[s], r = Ai(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Lr(e) {
  if (!(e.flags & 1)) {
    const t = Ai(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ai(n) ? le.push(e) : le.splice(I2(t), 0, e), e.flags |= 1, tf();
  }
}
function tf() {
  Xo || (Xo = Qu.then(sf));
}
function ef(e) {
  J(e) ? Ls.push(...e) : En && e.id === -1 ? En.splice(As + 1, 0, e) : e.flags & 1 || (Ls.push(e), e.flags |= 1), tf();
}
function Fc(e, t, n = Ge + 1) {
  for (M.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < le.length; n++) {
    const s = le[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || M.NODE_ENV !== "production" && Ta(t, s))
        continue;
      le.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function nf(e) {
  if (Ls.length) {
    const t = [...new Set(Ls)].sort(
      (n, s) => Ai(n) - Ai(s)
    );
    if (Ls.length = 0, En) {
      En.push(...t);
      return;
    }
    for (En = t, M.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), As = 0; As < En.length; As++) {
      const n = En[As];
      M.NODE_ENV !== "production" && Ta(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    En = null, As = 0;
  }
}
const Ai = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function sf(e) {
  M.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = M.NODE_ENV !== "production" ? (n) => Ta(e, n) : zt;
  try {
    for (Ge = 0; Ge < le.length; Ge++) {
      const n = le[Ge];
      if (n && !(n.flags & 8)) {
        if (M.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), qs(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ge < le.length; Ge++) {
      const n = le[Ge];
      n && (n.flags &= -2);
    }
    Ge = -1, le.length = 0, nf(e), Xo = null, (le.length || Ls.length) && sf(e);
  }
}
function Ta(e, t) {
  const n = e.get(t) || 0;
  if (n > F2) {
    const s = t.i, i = s && ja(s.type);
    return qi(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Te = !1;
const No = /* @__PURE__ */ new Map();
M.NODE_ENV !== "production" && (Wi().__VUE_HMR_RUNTIME__ = {
  createRecord: nl(of),
  rerender: nl($2),
  reload: nl(H2)
});
const ps = /* @__PURE__ */ new Map();
function V2(e) {
  const t = e.type.__hmrId;
  let n = ps.get(t);
  n || (of(t, e.type), n = ps.get(t)), n.instances.add(e);
}
function B2(e) {
  ps.get(e.type.__hmrId).instances.delete(e);
}
function of(e, t) {
  return ps.has(e) ? !1 : (ps.set(e, {
    initialDef: Ko(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ko(e) {
  return zf(e) ? e.__vccOpts : e;
}
function $2(e, t) {
  const n = ps.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Ko(s.type).render = t), s.renderCache = [], Te = !0, s.job.flags & 8 || s.update(), Te = !1;
  }));
}
function H2(e, t) {
  const n = ps.get(e);
  if (!n) return;
  t = Ko(t), Ic(n.initialDef, t);
  const s = [...n.instances];
  for (let i = 0; i < s.length; i++) {
    const r = s[i], o = Ko(r.type);
    let l = No.get(o);
    l || (o !== n.initialDef && Ic(o, t), No.set(o, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Lr(() => {
      r.job.flags & 8 || (Te = !0, r.parent.update(), Te = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(o);
  }
  ef(() => {
    No.clear();
  });
}
function Ic(e, t) {
  Ot(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function nl(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Je, ai = [], Wl = !1;
function Yi(e, ...t) {
  Je ? Je.emit(e, ...t) : Wl || ai.push({ event: e, args: t });
}
function rf(e, t) {
  var n, s;
  Je = e, Je ? (Je.enabled = !0, ai.forEach(({ event: i, args: r }) => Je.emit(i, ...r)), ai = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    rf(r, t);
  }), setTimeout(() => {
    Je || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Wl = !0, ai = []);
  }, 3e3)) : (Wl = !0, ai = []);
}
function z2(e, t) {
  Yi("app:init", e, t, {
    Fragment: ht,
    Text: Ui,
    Comment: xe,
    Static: To
  });
}
function j2(e) {
  Yi("app:unmount", e);
}
const W2 = /* @__PURE__ */ La(
  "component:added"
  /* COMPONENT_ADDED */
), lf = /* @__PURE__ */ La(
  "component:updated"
  /* COMPONENT_UPDATED */
), q2 = /* @__PURE__ */ La(
  "component:removed"
  /* COMPONENT_REMOVED */
), Y2 = (e) => {
  Je && typeof Je.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Je.cleanupBuffer(e) && q2(e);
};
// @__NO_SIDE_EFFECTS__
function La(e) {
  return (t) => {
    Yi(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const U2 = /* @__PURE__ */ af(
  "perf:start"
  /* PERFORMANCE_START */
), G2 = /* @__PURE__ */ af(
  "perf:end"
  /* PERFORMANCE_END */
);
function af(e) {
  return (t, n, s) => {
    Yi(e, t.appContext.app, t.uid, t, n, s);
  };
}
function X2(e, t, n) {
  Yi(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Zt = null, cf = null;
function Jo(e) {
  const t = Zt;
  return Zt = e, cf = e && e.type.__scopeId || null, t;
}
function K2(e, t = Zt, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && eh(-1);
    const r = Jo(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Jo(r), s._d && eh(1);
    }
    return M.NODE_ENV !== "production" && lf(t), o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function hf(e) {
  Bp(e) && H("Do not use built-in directive ids as custom directive id: " + e);
}
function J2(e, t) {
  if (Zt === null)
    return M.NODE_ENV !== "production" && H("withDirectives can only be used inside render functions."), e;
  const n = Br(Zt), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = xt] = t[i];
    r && (st(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && xn(o), s.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Wn(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (Be(), an(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), $e());
  }
}
const df = Symbol("_vte"), Z2 = (e) => e.__isTeleport, ls = (e) => e && (e.disabled || e.disabled === ""), Vc = (e) => e && (e.defer || e.defer === ""), Bc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, $c = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ql = (e, t) => {
  const n = e && e.to;
  if (At(n))
    if (t) {
      const s = t(n);
      return M.NODE_ENV !== "production" && !s && !ls(e) && H(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return M.NODE_ENV !== "production" && H(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return M.NODE_ENV !== "production" && !n && !ls(e) && H(`Invalid Teleport target: ${n}`), n;
}, uf = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, i, r, o, l, a, c) {
    const {
      mc: h,
      pc: d,
      pbc: u,
      o: { insert: f, querySelector: m, createText: p, createComment: b }
    } = c, v = ls(t.props);
    let { shapeFlag: x, children: C, dynamicChildren: S } = t;
    if (M.NODE_ENV !== "production" && Te && (a = !1, S = null), e == null) {
      const w = t.el = M.NODE_ENV !== "production" ? b("teleport start") : p(""), D = t.anchor = M.NODE_ENV !== "production" ? b("teleport end") : p("");
      f(w, n, s), f(D, n, s);
      const _ = (N, I) => {
        x & 16 && h(
          C,
          N,
          I,
          i,
          r,
          o,
          l,
          a
        );
      }, E = () => {
        const N = t.target = ql(t.props, m), I = ff(N, t, p, f);
        N ? (o !== "svg" && Bc(N) ? o = "svg" : o !== "mathml" && $c(N) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(N), v || (_(N, I), Oo(t, !1))) : M.NODE_ENV !== "production" && !v && H(
          "Invalid Teleport target on mount:",
          N,
          `(${typeof N})`
        );
      };
      v && (_(n, D), Oo(t, !0)), Vc(t.props) ? (t.el.__isMounted = !1, oe(() => {
        E(), delete t.el.__isMounted;
      }, r)) : E();
    } else {
      if (Vc(t.props) && e.el.__isMounted === !1) {
        oe(() => {
          uf.process(
            e,
            t,
            n,
            s,
            i,
            r,
            o,
            l,
            a,
            c
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const w = t.anchor = e.anchor, D = t.target = e.target, _ = t.targetAnchor = e.targetAnchor, E = ls(e.props), N = E ? n : D, I = E ? w : _;
      if (o === "svg" || Bc(D) ? o = "svg" : (o === "mathml" || $c(D)) && (o = "mathml"), S ? (u(
        e.dynamicChildren,
        S,
        N,
        i,
        r,
        o,
        l
      ), wi(e, t, M.NODE_ENV === "production")) : a || d(
        e,
        t,
        N,
        I,
        i,
        r,
        o,
        l,
        !1
      ), v)
        E ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : io(
          t,
          n,
          w,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = ql(
          t.props,
          m
        );
        R ? io(
          t,
          R,
          null,
          c,
          0
        ) : M.NODE_ENV !== "production" && H(
          "Invalid Teleport target on update:",
          D,
          `(${typeof D})`
        );
      } else E && io(
        t,
        D,
        _,
        c,
        1
      );
      Oo(t, v);
    }
  },
  remove(e, t, n, { um: s, o: { remove: i } }, r) {
    const {
      shapeFlag: o,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: h,
      target: d,
      props: u
    } = e;
    if (d && (i(c), i(h)), r && i(a), o & 16) {
      const f = r || !ls(u);
      for (let m = 0; m < l.length; m++) {
        const p = l[m];
        s(
          p,
          t,
          n,
          f,
          !!p.dynamicChildren
        );
      }
    }
  },
  move: io,
  hydrate: Q2
};
function io(e, t, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: a, children: c, props: h } = e, d = r === 2;
  if (d && s(o, t, n), (!d || ls(h)) && a & 16)
    for (let u = 0; u < c.length; u++)
      i(
        c[u],
        t,
        n,
        2
      );
  d && s(l, t, n);
}
function Q2(e, t, n, s, i, r, {
  o: { nextSibling: o, parentNode: l, querySelector: a, insert: c, createText: h }
}, d) {
  function u(p, b, v, x) {
    b.anchor = d(
      o(p),
      b,
      l(p),
      n,
      s,
      i,
      r
    ), b.targetStart = v, b.targetAnchor = x;
  }
  const f = t.target = ql(
    t.props,
    a
  ), m = ls(t.props);
  if (f) {
    const p = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        u(
          e,
          t,
          p,
          p && o(p)
        );
      else {
        t.anchor = o(e);
        let b = p;
        for (; b; ) {
          if (b && b.nodeType === 8) {
            if (b.data === "teleport start anchor")
              t.targetStart = b;
            else if (b.data === "teleport anchor") {
              t.targetAnchor = b, f._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          b = o(b);
        }
        t.targetAnchor || ff(f, t, h, c), d(
          p && o(p),
          t,
          f,
          n,
          s,
          i,
          r
        );
      }
    Oo(t, m);
  } else m && t.shapeFlag & 16 && u(e, t, e, o(e));
  return t.anchor && o(t.anchor);
}
const ke = uf;
function Oo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, i;
    for (t ? (s = e.el, i = e.anchor) : (s = e.targetStart, i = e.targetAnchor); s && s !== i; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function ff(e, t, n, s) {
  const i = t.targetStart = n(""), r = t.targetAnchor = n("");
  return i[df] = r, e && (s(i, e), s(r, e)), r;
}
const tg = Symbol("_leaveCb");
function Fa(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Fa(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function eg(e, t) {
  return st(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ot({ name: e.name }, t, { setup: e })
  ) : e;
}
function pf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Hc = /* @__PURE__ */ new WeakSet(), Zo = /* @__PURE__ */ new WeakMap();
function yi(e, t, n, s, i = !1) {
  if (J(e)) {
    e.forEach(
      (p, b) => yi(
        p,
        t && (J(t) ? t[b] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (xi(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && yi(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Br(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e;
  if (M.NODE_ENV !== "production" && !l) {
    H(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, h = l.refs === xt ? l.refs = {} : l.refs, d = l.setupState, u = ct(d), f = d === xt ? Du : (p) => M.NODE_ENV !== "production" && (gt(u, p) && !$t(u[p]) && H(
    `Template ref "${p}" used on a non-ref value. It will not work in the production build.`
  ), Hc.has(u[p])) ? !1 : gt(u, p), m = (p) => M.NODE_ENV === "production" || !Hc.has(p);
  if (c != null && c !== a) {
    if (zc(t), At(c))
      h[c] = null, f(c) && (d[c] = null);
    else if ($t(c)) {
      m(c) && (c.value = null);
      const p = t;
      p.k && (h[p.k] = null);
    }
  }
  if (st(a))
    qs(a, l, 12, [o, h]);
  else {
    const p = At(a), b = $t(a);
    if (p || b) {
      const v = () => {
        if (e.f) {
          const x = p ? f(a) ? d[a] : h[a] : m(a) || !e.k ? a.value : h[e.k];
          if (i)
            J(x) && _a(x, r);
          else if (J(x))
            x.includes(r) || x.push(r);
          else if (p)
            h[a] = [r], f(a) && (d[a] = h[a]);
          else {
            const C = [r];
            m(a) && (a.value = C), e.k && (h[e.k] = C);
          }
        } else p ? (h[a] = o, f(a) && (d[a] = o)) : b ? (m(a) && (a.value = o), e.k && (h[e.k] = o)) : M.NODE_ENV !== "production" && H("Invalid template ref type:", a, `(${typeof a})`);
      };
      if (o) {
        const x = () => {
          v(), Zo.delete(e);
        };
        x.id = -1, Zo.set(e, x), oe(x, n);
      } else
        zc(e), v();
    } else M.NODE_ENV !== "production" && H("Invalid template ref type:", a, `(${typeof a})`);
  }
}
function zc(e) {
  const t = Zo.get(e);
  t && (t.flags |= 8, Zo.delete(e));
}
Wi().requestIdleCallback;
Wi().cancelIdleCallback;
const xi = (e) => !!e.type.__asyncLoader, Ia = (e) => e.type.__isKeepAlive;
function ng(e, t) {
  gf(e, "a", t);
}
function sg(e, t) {
  gf(e, "da", t);
}
function gf(e, t, n = qt) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Fr(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Ia(i.parent.vnode) && ig(s, t, n, i), i = i.parent;
  }
}
function ig(e, t, n, s) {
  const i = Fr(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  mf(() => {
    _a(s[t], i);
  }, n);
}
function Fr(e, t, n = qt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Be();
      const l = Gi(n), a = an(t, n, e, o);
      return l(), $e(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  } else if (M.NODE_ENV !== "production") {
    const i = Xn(Oa[e].replace(/ hook$/, ""));
    H(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Pn = (e) => (t, n = qt) => {
  (!Oi || e === "sp") && Fr(e, (...s) => t(...s), n);
}, og = Pn("bm"), rg = Pn("m"), lg = Pn(
  "bu"
), ag = Pn("u"), cg = Pn(
  "bum"
), mf = Pn("um"), hg = Pn(
  "sp"
), dg = Pn("rtg"), ug = Pn("rtc");
function fg(e, t = qt) {
  Fr("ec", e, t);
}
const pg = "components";
function Xe(e, t) {
  return mg(pg, e, !0, t) || e;
}
const gg = Symbol.for("v-ndc");
function mg(e, t, n = !0, s = !1) {
  const i = Zt || qt;
  if (i) {
    const r = i.type;
    {
      const l = ja(
        r,
        !1
      );
      if (l && (l === t || l === Yt(t) || l === fs(Yt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      jc(i[e] || r[e], t) || // global registration
      jc(i.appContext[e], t)
    );
    return !o && s ? r : (M.NODE_ENV !== "production" && n && !o && H(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), o);
  } else M.NODE_ENV !== "production" && H(
    `resolve${fs(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function jc(e, t) {
  return e && (e[t] || e[Yt(t)] || e[fs(Yt(t))]);
}
function wt(e, t, n, s) {
  let i;
  const r = n, o = J(e);
  if (o || At(e)) {
    const l = o && os(e);
    let a = !1, c = !1;
    l && (a = !ae(e), c = ln(e), e = Or(e)), i = new Array(e.length);
    for (let h = 0, d = e.length; h < d; h++)
      i[h] = t(
        a ? c ? Uo(Xt(e[h])) : Xt(e[h]) : e[h],
        h,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    M.NODE_ENV !== "production" && !Number.isInteger(e) && H(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (vt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const h = l[a];
        i[a] = t(e[h], h, a, r);
      }
    }
  else
    i = [];
  return i;
}
const Yl = (e) => e ? $f(e) ? Br(e) : Yl(e.parent) : null, as = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ot(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => M.NODE_ENV !== "production" ? Ze(e.props) : e.props,
    $attrs: (e) => M.NODE_ENV !== "production" ? Ze(e.attrs) : e.attrs,
    $slots: (e) => M.NODE_ENV !== "production" ? Ze(e.slots) : e.slots,
    $refs: (e) => M.NODE_ENV !== "production" ? Ze(e.refs) : e.refs,
    $parent: (e) => Yl(e.parent),
    $root: (e) => Yl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => yf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Lr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ra.bind(e.proxy)),
    $watch: (e) => Xg.bind(e)
  })
), Va = (e) => e === "_" || e === "$", sl = (e, t) => e !== xt && !e.__isScriptSetup && gt(e, t), bf = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: a } = e;
    if (M.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const f = o[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (sl(s, t))
          return o[t] = 1, s[t];
        if (i !== xt && gt(i, t))
          return o[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && gt(c, t)
        )
          return o[t] = 3, r[t];
        if (n !== xt && gt(n, t))
          return o[t] = 4, n[t];
        Ul && (o[t] = 0);
      }
    }
    const h = as[t];
    let d, u;
    if (h)
      return t === "$attrs" ? (Ht(e.attrs, "get", ""), M.NODE_ENV !== "production" && er()) : M.NODE_ENV !== "production" && t === "$slots" && Ht(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== xt && gt(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      u = a.config.globalProperties, gt(u, t)
    )
      return u[t];
    M.NODE_ENV !== "production" && Zt && (!At(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== xt && Va(t[0]) && gt(i, t) ? H(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Zt && H(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return sl(i, t) ? (i[t] = n, !0) : M.NODE_ENV !== "production" && i.__isScriptSetup && gt(i, t) ? (H(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== xt && gt(s, t) ? (s[t] = n, !0) : gt(e.props, t) ? (M.NODE_ENV !== "production" && H(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (M.NODE_ENV !== "production" && H(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (M.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: r, type: o }
  }, l) {
    let a, c;
    return !!(n[l] || e !== xt && l[0] !== "$" && gt(e, l) || sl(t, l) || (a = r[0]) && gt(a, l) || gt(s, l) || gt(as, l) || gt(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : gt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
M.NODE_ENV !== "production" && (bf.ownKeys = (e) => (H(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function bg(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(as).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => as[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: zt
    });
  }), t;
}
function vg(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: zt
    });
  });
}
function yg(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ct(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Va(s[0])) {
        H(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: zt
      });
    }
  });
}
function Wc(e) {
  return J(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function xg() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? H(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ul = !0;
function wg(e) {
  const t = yf(e), n = e.proxy, s = e.ctx;
  Ul = !1, t.beforeCreate && qc(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: h,
    beforeMount: d,
    mounted: u,
    beforeUpdate: f,
    updated: m,
    activated: p,
    deactivated: b,
    beforeDestroy: v,
    beforeUnmount: x,
    destroyed: C,
    unmounted: S,
    render: w,
    renderTracked: D,
    renderTriggered: _,
    errorCaptured: E,
    serverPrefetch: N,
    // public API
    expose: I,
    inheritAttrs: R,
    // assets
    components: W,
    directives: Z,
    filters: kt
  } = t, it = M.NODE_ENV !== "production" ? xg() : null;
  if (M.NODE_ENV !== "production") {
    const [G] = e.propsOptions;
    if (G)
      for (const Q in G)
        it("Props", Q);
  }
  if (c && kg(c, s, it), o)
    for (const G in o) {
      const Q = o[G];
      st(Q) ? (M.NODE_ENV !== "production" ? Object.defineProperty(s, G, {
        value: Q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[G] = Q.bind(n), M.NODE_ENV !== "production" && it("Methods", G)) : M.NODE_ENV !== "production" && H(
        `Method "${G}" has type "${typeof Q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    M.NODE_ENV !== "production" && !st(i) && H(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const G = i.call(n, n);
    if (M.NODE_ENV !== "production" && Ma(G) && H(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !vt(G))
      M.NODE_ENV !== "production" && H("data() should return an object.");
    else if (e.data = Na(G), M.NODE_ENV !== "production")
      for (const Q in G)
        it("Data", Q), Va(Q[0]) || Object.defineProperty(s, Q, {
          configurable: !0,
          enumerable: !0,
          get: () => G[Q],
          set: zt
        });
  }
  if (Ul = !0, r)
    for (const G in r) {
      const Q = r[G], dt = st(Q) ? Q.bind(n, n) : st(Q.get) ? Q.get.bind(n, n) : zt;
      M.NODE_ENV !== "production" && dt === zt && H(`Computed property "${G}" has no getter.`);
      const Ae = !st(Q) && st(Q.set) ? Q.set.bind(n) : M.NODE_ENV !== "production" ? () => {
        H(
          `Write operation failed: computed property "${G}" is readonly.`
        );
      } : zt, Me = Qn({
        get: dt,
        set: Ae
      });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (ee) => Me.value = ee
      }), M.NODE_ENV !== "production" && it("Computed", G);
    }
  if (l)
    for (const G in l)
      vf(l[G], s, n, G);
  if (a) {
    const G = st(a) ? a.call(n) : a;
    Reflect.ownKeys(G).forEach((Q) => {
      Eg(Q, G[Q]);
    });
  }
  h && qc(h, e, "c");
  function nt(G, Q) {
    J(Q) ? Q.forEach((dt) => G(dt.bind(n))) : Q && G(Q.bind(n));
  }
  if (nt(og, d), nt(rg, u), nt(lg, f), nt(ag, m), nt(ng, p), nt(sg, b), nt(fg, E), nt(ug, D), nt(dg, _), nt(cg, x), nt(mf, S), nt(hg, N), J(I))
    if (I.length) {
      const G = e.exposed || (e.exposed = {});
      I.forEach((Q) => {
        Object.defineProperty(G, Q, {
          get: () => n[Q],
          set: (dt) => n[Q] = dt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === zt && (e.render = w), R != null && (e.inheritAttrs = R), W && (e.components = W), Z && (e.directives = Z), N && pf(e);
}
function kg(e, t, n = zt) {
  J(e) && (e = Gl(e));
  for (const s in e) {
    const i = e[s];
    let r;
    vt(i) ? "default" in i ? r = Ro(
      i.from || s,
      i.default,
      !0
    ) : r = Ro(i.from || s) : r = Ro(i), $t(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r, M.NODE_ENV !== "production" && n("Inject", s);
  }
}
function qc(e, t, n) {
  an(
    J(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function vf(e, t, n, s) {
  let i = s.includes(".") ? Nf(n, s) : () => n[s];
  if (At(e)) {
    const r = t[e];
    st(r) ? ol(i, r) : M.NODE_ENV !== "production" && H(`Invalid watch handler specified by key "${e}"`, r);
  } else if (st(e))
    ol(i, e.bind(n));
  else if (vt(e))
    if (J(e))
      e.forEach((r) => vf(r, t, n, s));
    else {
      const r = st(e.handler) ? e.handler.bind(n) : t[e.handler];
      st(r) ? ol(i, r, e) : M.NODE_ENV !== "production" && H(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else M.NODE_ENV !== "production" && H(`Invalid watch option: "${s}"`, e);
}
function yf(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !n && !s ? a = t : (a = {}, i.length && i.forEach(
    (c) => Qo(a, c, o, !0)
  ), Qo(a, t, o)), vt(t) && r.set(t, a), a;
}
function Qo(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && Qo(e, r, n, !0), i && i.forEach(
    (o) => Qo(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      M.NODE_ENV !== "production" && H(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = _g[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const _g = {
  data: Yc,
  props: Uc,
  emits: Uc,
  // objects
  methods: ci,
  computed: ci,
  // lifecycle
  beforeCreate: ie,
  created: ie,
  beforeMount: ie,
  mounted: ie,
  beforeUpdate: ie,
  updated: ie,
  beforeDestroy: ie,
  beforeUnmount: ie,
  destroyed: ie,
  unmounted: ie,
  activated: ie,
  deactivated: ie,
  errorCaptured: ie,
  serverPrefetch: ie,
  // assets
  components: ci,
  directives: ci,
  // watch
  watch: Cg,
  // provide / inject
  provide: Yc,
  inject: Mg
};
function Yc(e, t) {
  return t ? e ? function() {
    return Ot(
      st(e) ? e.call(this, this) : e,
      st(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Mg(e, t) {
  return ci(Gl(e), Gl(t));
}
function Gl(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ci(e, t) {
  return e ? Ot(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Uc(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ot(
    /* @__PURE__ */ Object.create(null),
    Wc(e),
    Wc(t ?? {})
  ) : t;
}
function Cg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ot(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ie(e[s], t[s]);
  return n;
}
function xf() {
  return {
    app: null,
    config: {
      isNativeTag: Du,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Pg = 0;
function Sg(e, t) {
  return function(s, i = null) {
    st(s) || (s = Ot({}, s)), i != null && !vt(i) && (M.NODE_ENV !== "production" && H("root props passed to app.mount() must be an object."), i = null);
    const r = xf(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: Pg++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: oh,
      get config() {
        return r.config;
      },
      set config(h) {
        M.NODE_ENV !== "production" && H(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(h, ...d) {
        return o.has(h) ? M.NODE_ENV !== "production" && H("Plugin has already been applied to target app.") : h && st(h.install) ? (o.add(h), h.install(c, ...d)) : st(h) ? (o.add(h), h(c, ...d)) : M.NODE_ENV !== "production" && H(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(h) {
        return r.mixins.includes(h) ? M.NODE_ENV !== "production" && H(
          "Mixin has already been applied to target app" + (h.name ? `: ${h.name}` : "")
        ) : r.mixins.push(h), c;
      },
      component(h, d) {
        return M.NODE_ENV !== "production" && Ql(h, r.config), d ? (M.NODE_ENV !== "production" && r.components[h] && H(`Component "${h}" has already been registered in target app.`), r.components[h] = d, c) : r.components[h];
      },
      directive(h, d) {
        return M.NODE_ENV !== "production" && hf(h), d ? (M.NODE_ENV !== "production" && r.directives[h] && H(`Directive "${h}" has already been registered in target app.`), r.directives[h] = d, c) : r.directives[h];
      },
      mount(h, d, u) {
        if (a)
          M.NODE_ENV !== "production" && H(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          M.NODE_ENV !== "production" && h.__vue_app__ && H(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const f = c._ceVNode || Tt(s, i);
          return f.appContext = r, u === !0 ? u = "svg" : u === !1 && (u = void 0), M.NODE_ENV !== "production" && (r.reload = () => {
            const m = Ln(f);
            m.el = null, e(m, h, u);
          }), e(f, h, u), a = !0, c._container = h, h.__vue_app__ = c, M.NODE_ENV !== "production" && (c._instance = f.component, z2(c, oh)), Br(f.component);
        }
      },
      onUnmount(h) {
        M.NODE_ENV !== "production" && typeof h != "function" && H(
          `Expected function as first argument to app.onUnmount(), but got ${typeof h}`
        ), l.push(h);
      },
      unmount() {
        a ? (an(
          l,
          c._instance,
          16
        ), e(null, c._container), M.NODE_ENV !== "production" && (c._instance = null, j2(c)), delete c._container.__vue_app__) : M.NODE_ENV !== "production" && H("Cannot unmount an app that is not mounted.");
      },
      provide(h, d) {
        return M.NODE_ENV !== "production" && h in r.provides && (gt(r.provides, h) ? H(
          `App already provides property with key "${String(h)}". It will be overwritten with the new value.`
        ) : H(
          `App already provides property with key "${String(h)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[h] = d, c;
      },
      runWithContext(h) {
        const d = Fs;
        Fs = c;
        try {
          return h();
        } finally {
          Fs = d;
        }
      }
    };
    return c;
  };
}
let Fs = null;
function Eg(e, t) {
  if (!qt)
    M.NODE_ENV !== "production" && H("provide() can only be used inside setup().");
  else {
    let n = qt.provides;
    const s = qt.parent && qt.parent.provides;
    s === n && (n = qt.provides = Object.create(s)), n[e] = t;
  }
}
function Ro(e, t, n = !1) {
  const s = Bf();
  if (s || Fs) {
    let i = Fs ? Fs._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && st(t) ? t.call(s && s.proxy) : t;
    M.NODE_ENV !== "production" && H(`injection "${String(e)}" not found.`);
  } else M.NODE_ENV !== "production" && H("inject() can only be used inside setup() or functional components.");
}
const wf = {}, kf = () => Object.create(wf), _f = (e) => Object.getPrototypeOf(e) === wf;
function Dg(e, t, n, s = !1) {
  const i = {}, r = kf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Mf(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  M.NODE_ENV !== "production" && Pf(t || {}, i, e), n ? e.props = s ? i : k2(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Ag(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ng(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = ct(i), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(M.NODE_ENV !== "production" && Ag(e)) && (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const h = e.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let u = h[d];
        if (Ir(e.emitsOptions, u))
          continue;
        const f = t[u];
        if (a)
          if (gt(r, u))
            f !== r[u] && (r[u] = f, c = !0);
          else {
            const m = Yt(u);
            i[m] = Xl(
              a,
              l,
              m,
              f,
              e,
              !1
            );
          }
        else
          f !== r[u] && (r[u] = f, c = !0);
      }
    }
  } else {
    Mf(e, t, i, r) && (c = !0);
    let h;
    for (const d in l)
      (!t || // for camelCase
      !gt(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = ve(d)) === d || !gt(t, h))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[h] !== void 0) && (i[d] = Xl(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !gt(t, d)) && (delete r[d], c = !0);
  }
  c && Ke(e.attrs, "set", ""), M.NODE_ENV !== "production" && Pf(t || {}, i, e);
}
function Mf(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (mi(a))
        continue;
      const c = t[a];
      let h;
      i && gt(i, h = Yt(a)) ? !r || !r.includes(h) ? n[h] = c : (l || (l = {}))[h] = c : Ir(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (r) {
    const a = ct(n), c = l || xt;
    for (let h = 0; h < r.length; h++) {
      const d = r[h];
      n[d] = Xl(
        i,
        a,
        d,
        c[d],
        e,
        !gt(c, d)
      );
    }
  }
  return o;
}
function Xl(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = gt(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && st(a)) {
        const { propsDefaults: c } = i;
        if (n in c)
          s = c[n];
        else {
          const h = Gi(i);
          s = c[n] = a.call(
            null,
            t
          ), h();
        }
      } else
        s = a;
      i.ce && i.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ve(n)) && (s = !0));
  }
  return s;
}
const Og = /* @__PURE__ */ new WeakMap();
function Cf(e, t, n = !1) {
  const s = n ? Og : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!st(e)) {
    const h = (d) => {
      a = !0;
      const [u, f] = Cf(d, t, !0);
      Ot(o, u), f && l.push(...f);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!r && !a)
    return vt(e) && s.set(e, Ts), Ts;
  if (J(r))
    for (let h = 0; h < r.length; h++) {
      M.NODE_ENV !== "production" && !At(r[h]) && H("props must be strings when using array syntax.", r[h]);
      const d = Yt(r[h]);
      Gc(d) && (o[d] = xt);
    }
  else if (r) {
    M.NODE_ENV !== "production" && !vt(r) && H("invalid props options", r);
    for (const h in r) {
      const d = Yt(h);
      if (Gc(d)) {
        const u = r[h], f = o[d] = J(u) || st(u) ? { type: u } : Ot({}, u), m = f.type;
        let p = !1, b = !0;
        if (J(m))
          for (let v = 0; v < m.length; ++v) {
            const x = m[v], C = st(x) && x.name;
            if (C === "Boolean") {
              p = !0;
              break;
            } else C === "String" && (b = !1);
          }
        else
          p = st(m) && m.name === "Boolean";
        f[
          0
          /* shouldCast */
        ] = p, f[
          1
          /* shouldCastTrue */
        ] = b, (p || gt(f, "default")) && l.push(d);
      }
    }
  }
  const c = [o, l];
  return vt(e) && s.set(e, c), c;
}
function Gc(e) {
  return e[0] !== "$" && !mi(e) ? !0 : (M.NODE_ENV !== "production" && H(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Rg(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Pf(e, t, n) {
  const s = ct(t), i = n.propsOptions[0], r = Object.keys(e).map((o) => Yt(o));
  for (const o in i) {
    let l = i[o];
    l != null && Tg(
      o,
      s[o],
      l,
      M.NODE_ENV !== "production" ? Ze(s) : s,
      !r.includes(o)
    );
  }
}
function Tg(e, t, n, s, i) {
  const { type: r, required: o, validator: l, skipCheck: a } = n;
  if (o && i) {
    H('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (r != null && r !== !0 && !a) {
      let c = !1;
      const h = J(r) ? r : [r], d = [];
      for (let u = 0; u < h.length && !c; u++) {
        const { valid: f, expectedType: m } = Fg(t, h[u]);
        d.push(m || ""), c = f;
      }
      if (!c) {
        H(Ig(e, t, d));
        return;
      }
    }
    l && !l(t, s) && H('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Lg = /* @__PURE__ */ Cn(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Fg(e, t) {
  let n;
  const s = Rg(t);
  if (s === "null")
    n = e === null;
  else if (Lg(s)) {
    const i = typeof e;
    n = i === s.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else s === "Object" ? n = vt(e) : s === "Array" ? n = J(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Ig(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(fs).join(" | ")}`;
  const i = n[0], r = Ca(t), o = Xc(t, i), l = Xc(t, r);
  return n.length === 1 && Kc(i) && !Vg(i, r) && (s += ` with value ${o}`), s += `, got ${r} `, Kc(r) && (s += `with value ${l}.`), s;
}
function Xc(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Kc(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Vg(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ba = (e) => e === "_" || e === "_ctx" || e === "$stable", $a = (e) => J(e) ? e.map(Oe) : [Oe(e)], Bg = (e, t, n) => {
  if (t._n)
    return t;
  const s = K2((...i) => (M.NODE_ENV !== "production" && qt && !(n === null && Zt) && !(n && n.root !== qt.root) && H(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), $a(t(...i))), n);
  return s._c = !1, s;
}, Sf = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Ba(i)) continue;
    const r = e[i];
    if (st(r))
      t[i] = Bg(i, r, s);
    else if (r != null) {
      M.NODE_ENV !== "production" && H(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const o = $a(r);
      t[i] = () => o;
    }
  }
}, Ef = (e, t) => {
  M.NODE_ENV !== "production" && !Ia(e.vnode) && H(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = $a(t);
  e.slots.default = () => n;
}, Kl = (e, t, n) => {
  for (const s in t)
    (n || !Ba(s)) && (e[s] = t[s]);
}, $g = (e, t, n) => {
  const s = e.slots = kf();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Kl(s, t, n), n && qo(s, "_", i, !0)) : Sf(t, s);
  } else t && Ef(e, t);
}, Hg = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = xt;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? M.NODE_ENV !== "production" && Te ? (Kl(i, t, n), Ke(e, "set", "$slots")) : n && l === 1 ? r = !1 : Kl(i, t, n) : (r = !t.$stable, Sf(t, i)), o = t;
  } else t && (Ef(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !Ba(l) && o[l] == null && delete i[l];
};
let ei, bn;
function xs(e, t) {
  e.appContext.config.performance && tr() && bn.mark(`vue-${t}-${e.uid}`), M.NODE_ENV !== "production" && U2(e, t, tr() ? bn.now() : Date.now());
}
function ws(e, t) {
  if (e.appContext.config.performance && tr()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end", i = `<${$r(e, e.type)}> ${t}`;
    bn.mark(s), bn.measure(i, n, s), bn.clearMeasures(i), bn.clearMarks(n), bn.clearMarks(s);
  }
  M.NODE_ENV !== "production" && G2(e, t, tr() ? bn.now() : Date.now());
}
function tr() {
  return ei !== void 0 || (typeof window < "u" && window.performance ? (ei = !0, bn = window.performance) : ei = !1), ei;
}
function zg() {
  const e = [];
  if (M.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const oe = sm;
function jg(e) {
  return Wg(e);
}
function Wg(e, t) {
  zg();
  const n = Wi();
  n.__VUE__ = !0, M.NODE_ENV !== "production" && rf(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: h,
    parentNode: d,
    nextSibling: u,
    setScopeId: f = zt,
    insertStaticContent: m
  } = e, p = (y, k, A, V = null, T = null, L = null, q = void 0, j = null, z = M.NODE_ENV !== "production" && Te ? !1 : !!k.dynamicChildren) => {
    if (y === k)
      return;
    y && !ni(y, k) && (V = Qi(y), Wt(y, T, L, !0), y = null), k.patchFlag === -2 && (z = !1, k.dynamicChildren = null);
    const { type: B, ref: et, shapeFlag: Y } = k;
    switch (B) {
      case Ui:
        b(y, k, A, V);
        break;
      case xe:
        v(y, k, A, V);
        break;
      case To:
        y == null ? x(k, A, V, q) : M.NODE_ENV !== "production" && C(y, k, A, q);
        break;
      case ht:
        Z(
          y,
          k,
          A,
          V,
          T,
          L,
          q,
          j,
          z
        );
        break;
      default:
        Y & 1 ? D(
          y,
          k,
          A,
          V,
          T,
          L,
          q,
          j,
          z
        ) : Y & 6 ? kt(
          y,
          k,
          A,
          V,
          T,
          L,
          q,
          j,
          z
        ) : Y & 64 || Y & 128 ? B.process(
          y,
          k,
          A,
          V,
          T,
          L,
          q,
          j,
          z,
          Zs
        ) : M.NODE_ENV !== "production" && H("Invalid VNode type:", B, `(${typeof B})`);
    }
    et != null && T ? yi(et, y && y.ref, L, k || y, !k) : et == null && y && y.ref != null && yi(y.ref, null, L, y, !0);
  }, b = (y, k, A, V) => {
    if (y == null)
      s(
        k.el = l(k.children),
        A,
        V
      );
    else {
      const T = k.el = y.el;
      k.children !== y.children && c(T, k.children);
    }
  }, v = (y, k, A, V) => {
    y == null ? s(
      k.el = a(k.children || ""),
      A,
      V
    ) : k.el = y.el;
  }, x = (y, k, A, V) => {
    [y.el, y.anchor] = m(
      y.children,
      k,
      A,
      V,
      y.el,
      y.anchor
    );
  }, C = (y, k, A, V) => {
    if (k.children !== y.children) {
      const T = u(y.anchor);
      w(y), [k.el, k.anchor] = m(
        k.children,
        A,
        T,
        V
      );
    } else
      k.el = y.el, k.anchor = y.anchor;
  }, S = ({ el: y, anchor: k }, A, V) => {
    let T;
    for (; y && y !== k; )
      T = u(y), s(y, A, V), y = T;
    s(k, A, V);
  }, w = ({ el: y, anchor: k }) => {
    let A;
    for (; y && y !== k; )
      A = u(y), i(y), y = A;
    i(k);
  }, D = (y, k, A, V, T, L, q, j, z) => {
    k.type === "svg" ? q = "svg" : k.type === "math" && (q = "mathml"), y == null ? _(
      k,
      A,
      V,
      T,
      L,
      q,
      j,
      z
    ) : I(
      y,
      k,
      T,
      L,
      q,
      j,
      z
    );
  }, _ = (y, k, A, V, T, L, q, j) => {
    let z, B;
    const { props: et, shapeFlag: Y, transition: tt, dirs: ot } = y;
    if (z = y.el = o(
      y.type,
      L,
      et && et.is,
      et
    ), Y & 8 ? h(z, y.children) : Y & 16 && N(
      y.children,
      z,
      null,
      V,
      T,
      il(y, L),
      q,
      j
    ), ot && Wn(y, null, V, "created"), E(z, y, y.scopeId, q, V), et) {
      for (const Et in et)
        Et !== "value" && !mi(Et) && r(z, Et, null, et[Et], L, V);
      "value" in et && r(z, "value", null, et.value, L), (B = et.onVnodeBeforeMount) && qe(B, V, y);
    }
    M.NODE_ENV !== "production" && (qo(z, "__vnode", y, !0), qo(z, "__vueParentComponent", V, !0)), ot && Wn(y, null, V, "beforeMount");
    const mt = qg(T, tt);
    mt && tt.beforeEnter(z), s(z, k, A), ((B = et && et.onVnodeMounted) || mt || ot) && oe(() => {
      B && qe(B, V, y), mt && tt.enter(z), ot && Wn(y, null, V, "mounted");
    }, T);
  }, E = (y, k, A, V, T) => {
    if (A && f(y, A), V)
      for (let L = 0; L < V.length; L++)
        f(y, V[L]);
    if (T) {
      let L = T.subTree;
      if (M.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && (L = Ha(L.children) || L), k === L || Tf(L.type) && (L.ssContent === k || L.ssFallback === k)) {
        const q = T.vnode;
        E(
          y,
          q,
          q.scopeId,
          q.slotScopeIds,
          T.parent
        );
      }
    }
  }, N = (y, k, A, V, T, L, q, j, z = 0) => {
    for (let B = z; B < y.length; B++) {
      const et = y[B] = j ? Dn(y[B]) : Oe(y[B]);
      p(
        null,
        et,
        k,
        A,
        V,
        T,
        L,
        q,
        j
      );
    }
  }, I = (y, k, A, V, T, L, q) => {
    const j = k.el = y.el;
    M.NODE_ENV !== "production" && (j.__vnode = k);
    let { patchFlag: z, dynamicChildren: B, dirs: et } = k;
    z |= y.patchFlag & 16;
    const Y = y.props || xt, tt = k.props || xt;
    let ot;
    if (A && qn(A, !1), (ot = tt.onVnodeBeforeUpdate) && qe(ot, A, k, y), et && Wn(k, y, A, "beforeUpdate"), A && qn(A, !0), M.NODE_ENV !== "production" && Te && (z = 0, q = !1, B = null), (Y.innerHTML && tt.innerHTML == null || Y.textContent && tt.textContent == null) && h(j, ""), B ? (R(
      y.dynamicChildren,
      B,
      j,
      A,
      V,
      il(k, T),
      L
    ), M.NODE_ENV !== "production" && wi(y, k)) : q || dt(
      y,
      k,
      j,
      null,
      A,
      V,
      il(k, T),
      L,
      !1
    ), z > 0) {
      if (z & 16)
        W(j, Y, tt, A, T);
      else if (z & 2 && Y.class !== tt.class && r(j, "class", null, tt.class, T), z & 4 && r(j, "style", Y.style, tt.style, T), z & 8) {
        const mt = k.dynamicProps;
        for (let Et = 0; Et < mt.length; Et++) {
          const _t = mt[Et], ce = Y[_t], he = tt[_t];
          (he !== ce || _t === "value") && r(j, _t, ce, he, T, A);
        }
      }
      z & 1 && y.children !== k.children && h(j, k.children);
    } else !q && B == null && W(j, Y, tt, A, T);
    ((ot = tt.onVnodeUpdated) || et) && oe(() => {
      ot && qe(ot, A, k, y), et && Wn(k, y, A, "updated");
    }, V);
  }, R = (y, k, A, V, T, L, q) => {
    for (let j = 0; j < k.length; j++) {
      const z = y[j], B = k[j], et = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === ht || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ni(z, B) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 198) ? d(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      p(
        z,
        B,
        et,
        null,
        V,
        T,
        L,
        q,
        !0
      );
    }
  }, W = (y, k, A, V, T) => {
    if (k !== A) {
      if (k !== xt)
        for (const L in k)
          !mi(L) && !(L in A) && r(
            y,
            L,
            k[L],
            null,
            T,
            V
          );
      for (const L in A) {
        if (mi(L)) continue;
        const q = A[L], j = k[L];
        q !== j && L !== "value" && r(y, L, j, q, T, V);
      }
      "value" in A && r(y, "value", k.value, A.value, T);
    }
  }, Z = (y, k, A, V, T, L, q, j, z) => {
    const B = k.el = y ? y.el : l(""), et = k.anchor = y ? y.anchor : l("");
    let { patchFlag: Y, dynamicChildren: tt, slotScopeIds: ot } = k;
    M.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Te || Y & 2048) && (Y = 0, z = !1, tt = null), ot && (j = j ? j.concat(ot) : ot), y == null ? (s(B, A, V), s(et, A, V), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      k.children || [],
      A,
      et,
      T,
      L,
      q,
      j,
      z
    )) : Y > 0 && Y & 64 && tt && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren ? (R(
      y.dynamicChildren,
      tt,
      A,
      T,
      L,
      q,
      j
    ), M.NODE_ENV !== "production" ? wi(y, k) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (k.key != null || T && k === T.subTree) && wi(
        y,
        k,
        !0
        /* shallow */
      )
    )) : dt(
      y,
      k,
      A,
      et,
      T,
      L,
      q,
      j,
      z
    );
  }, kt = (y, k, A, V, T, L, q, j, z) => {
    k.slotScopeIds = j, y == null ? k.shapeFlag & 512 ? T.ctx.activate(
      k,
      A,
      V,
      q,
      z
    ) : it(
      k,
      A,
      V,
      T,
      L,
      q,
      z
    ) : nt(y, k, z);
  }, it = (y, k, A, V, T, L, q) => {
    const j = y.component = hm(
      y,
      V,
      T
    );
    if (M.NODE_ENV !== "production" && j.type.__hmrId && V2(j), M.NODE_ENV !== "production" && (Do(y), xs(j, "mount")), Ia(y) && (j.ctx.renderer = Zs), M.NODE_ENV !== "production" && xs(j, "init"), um(j, !1, q), M.NODE_ENV !== "production" && ws(j, "init"), M.NODE_ENV !== "production" && Te && (y.el = null), j.asyncDep) {
      if (T && T.registerDep(j, G, q), !y.el) {
        const z = j.subTree = Tt(xe);
        v(null, z, k, A), y.placeholder = z.el;
      }
    } else
      G(
        j,
        y,
        k,
        A,
        T,
        L,
        q
      );
    M.NODE_ENV !== "production" && (Ao(), ws(j, "mount"));
  }, nt = (y, k, A) => {
    const V = k.component = y.component;
    if (em(y, k, A))
      if (V.asyncDep && !V.asyncResolved) {
        M.NODE_ENV !== "production" && Do(k), Q(V, k, A), M.NODE_ENV !== "production" && Ao();
        return;
      } else
        V.next = k, V.update();
    else
      k.el = y.el, V.vnode = k;
  }, G = (y, k, A, V, T, L, q) => {
    const j = () => {
      if (y.isMounted) {
        let { next: Y, bu: tt, u: ot, parent: mt, vnode: Et } = y;
        {
          const je = Df(y);
          if (je) {
            Y && (Y.el = Et.el, Q(y, Y, q)), je.asyncDep.then(() => {
              y.isUnmounted || j();
            });
            return;
          }
        }
        let _t = Y, ce;
        M.NODE_ENV !== "production" && Do(Y || y.vnode), qn(y, !1), Y ? (Y.el = Et.el, Q(y, Y, q)) : Y = Et, tt && Ds(tt), (ce = Y.props && Y.props.onVnodeBeforeUpdate) && qe(ce, mt, Y, Et), qn(y, !0), M.NODE_ENV !== "production" && xs(y, "render");
        const he = Zc(y);
        M.NODE_ENV !== "production" && ws(y, "render");
        const ze = y.subTree;
        y.subTree = he, M.NODE_ENV !== "production" && xs(y, "patch"), p(
          ze,
          he,
          // parent may have changed if it's in a teleport
          d(ze.el),
          // anchor may have changed if it's in a fragment
          Qi(ze),
          y,
          T,
          L
        ), M.NODE_ENV !== "production" && ws(y, "patch"), Y.el = he.el, _t === null && nm(y, he.el), ot && oe(ot, T), (ce = Y.props && Y.props.onVnodeUpdated) && oe(
          () => qe(ce, mt, Y, Et),
          T
        ), M.NODE_ENV !== "production" && lf(y), M.NODE_ENV !== "production" && Ao();
      } else {
        let Y;
        const { el: tt, props: ot } = k, { bm: mt, m: Et, parent: _t, root: ce, type: he } = y, ze = xi(k);
        qn(y, !1), mt && Ds(mt), !ze && (Y = ot && ot.onVnodeBeforeMount) && qe(Y, _t, k), qn(y, !0);
        {
          ce.ce && // @ts-expect-error _def is private
          ce.ce._def.shadowRoot !== !1 && ce.ce._injectChildStyle(he), M.NODE_ENV !== "production" && xs(y, "render");
          const je = y.subTree = Zc(y);
          M.NODE_ENV !== "production" && ws(y, "render"), M.NODE_ENV !== "production" && xs(y, "patch"), p(
            null,
            je,
            A,
            V,
            y,
            T,
            L
          ), M.NODE_ENV !== "production" && ws(y, "patch"), k.el = je.el;
        }
        if (Et && oe(Et, T), !ze && (Y = ot && ot.onVnodeMounted)) {
          const je = k;
          oe(
            () => qe(Y, _t, je),
            T
          );
        }
        (k.shapeFlag & 256 || _t && xi(_t.vnode) && _t.vnode.shapeFlag & 256) && y.a && oe(y.a, T), y.isMounted = !0, M.NODE_ENV !== "production" && W2(y), k = A = V = null;
      }
    };
    y.scope.on();
    const z = y.effect = new Lu(j);
    y.scope.off();
    const B = y.update = z.run.bind(z), et = y.job = z.runIfDirty.bind(z);
    et.i = y, et.id = y.uid, z.scheduler = () => Lr(et), qn(y, !0), M.NODE_ENV !== "production" && (z.onTrack = y.rtc ? (Y) => Ds(y.rtc, Y) : void 0, z.onTrigger = y.rtg ? (Y) => Ds(y.rtg, Y) : void 0), B();
  }, Q = (y, k, A) => {
    k.component = y;
    const V = y.vnode.props;
    y.vnode = k, y.next = null, Ng(y, k.props, V, A), Hg(y, k.children, A), Be(), Fc(y), $e();
  }, dt = (y, k, A, V, T, L, q, j, z = !1) => {
    const B = y && y.children, et = y ? y.shapeFlag : 0, Y = k.children, { patchFlag: tt, shapeFlag: ot } = k;
    if (tt > 0) {
      if (tt & 128) {
        Me(
          B,
          Y,
          A,
          V,
          T,
          L,
          q,
          j,
          z
        );
        return;
      } else if (tt & 256) {
        Ae(
          B,
          Y,
          A,
          V,
          T,
          L,
          q,
          j,
          z
        );
        return;
      }
    }
    ot & 8 ? (et & 16 && Js(B, T, L), Y !== B && h(A, Y)) : et & 16 ? ot & 16 ? Me(
      B,
      Y,
      A,
      V,
      T,
      L,
      q,
      j,
      z
    ) : Js(B, T, L, !0) : (et & 8 && h(A, ""), ot & 16 && N(
      Y,
      A,
      V,
      T,
      L,
      q,
      j,
      z
    ));
  }, Ae = (y, k, A, V, T, L, q, j, z) => {
    y = y || Ts, k = k || Ts;
    const B = y.length, et = k.length, Y = Math.min(B, et);
    let tt;
    for (tt = 0; tt < Y; tt++) {
      const ot = k[tt] = z ? Dn(k[tt]) : Oe(k[tt]);
      p(
        y[tt],
        ot,
        A,
        null,
        T,
        L,
        q,
        j,
        z
      );
    }
    B > et ? Js(
      y,
      T,
      L,
      !0,
      !1,
      Y
    ) : N(
      k,
      A,
      V,
      T,
      L,
      q,
      j,
      z,
      Y
    );
  }, Me = (y, k, A, V, T, L, q, j, z) => {
    let B = 0;
    const et = k.length;
    let Y = y.length - 1, tt = et - 1;
    for (; B <= Y && B <= tt; ) {
      const ot = y[B], mt = k[B] = z ? Dn(k[B]) : Oe(k[B]);
      if (ni(ot, mt))
        p(
          ot,
          mt,
          A,
          null,
          T,
          L,
          q,
          j,
          z
        );
      else
        break;
      B++;
    }
    for (; B <= Y && B <= tt; ) {
      const ot = y[Y], mt = k[tt] = z ? Dn(k[tt]) : Oe(k[tt]);
      if (ni(ot, mt))
        p(
          ot,
          mt,
          A,
          null,
          T,
          L,
          q,
          j,
          z
        );
      else
        break;
      Y--, tt--;
    }
    if (B > Y) {
      if (B <= tt) {
        const ot = tt + 1, mt = ot < et ? k[ot].el : V;
        for (; B <= tt; )
          p(
            null,
            k[B] = z ? Dn(k[B]) : Oe(k[B]),
            A,
            mt,
            T,
            L,
            q,
            j,
            z
          ), B++;
      }
    } else if (B > tt)
      for (; B <= Y; )
        Wt(y[B], T, L, !0), B++;
    else {
      const ot = B, mt = B, Et = /* @__PURE__ */ new Map();
      for (B = mt; B <= tt; B++) {
        const ne = k[B] = z ? Dn(k[B]) : Oe(k[B]);
        ne.key != null && (M.NODE_ENV !== "production" && Et.has(ne.key) && H(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), Et.set(ne.key, B));
      }
      let _t, ce = 0;
      const he = tt - mt + 1;
      let ze = !1, je = 0;
      const Qs = new Array(he);
      for (B = 0; B < he; B++) Qs[B] = 0;
      for (B = ot; B <= Y; B++) {
        const ne = y[B];
        if (ce >= he) {
          Wt(ne, T, L, !0);
          continue;
        }
        let We;
        if (ne.key != null)
          We = Et.get(ne.key);
        else
          for (_t = mt; _t <= tt; _t++)
            if (Qs[_t - mt] === 0 && ni(ne, k[_t])) {
              We = _t;
              break;
            }
        We === void 0 ? Wt(ne, T, L, !0) : (Qs[We - mt] = B + 1, We >= je ? je = We : ze = !0, p(
          ne,
          k[We],
          A,
          null,
          T,
          L,
          q,
          j,
          z
        ), ce++);
      }
      const Sc = ze ? Yg(Qs) : Ts;
      for (_t = Sc.length - 1, B = he - 1; B >= 0; B--) {
        const ne = mt + B, We = k[ne], Ec = k[ne + 1], Dc = ne + 1 < et ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ec.el || Ec.placeholder
        ) : V;
        Qs[B] === 0 ? p(
          null,
          We,
          A,
          Dc,
          T,
          L,
          q,
          j,
          z
        ) : ze && (_t < 0 || B !== Sc[_t] ? ee(We, A, Dc, 2) : _t--);
      }
    }
  }, ee = (y, k, A, V, T = null) => {
    const { el: L, type: q, transition: j, children: z, shapeFlag: B } = y;
    if (B & 6) {
      ee(y.component.subTree, k, A, V);
      return;
    }
    if (B & 128) {
      y.suspense.move(k, A, V);
      return;
    }
    if (B & 64) {
      q.move(y, k, A, Zs);
      return;
    }
    if (q === ht) {
      s(L, k, A);
      for (let Y = 0; Y < z.length; Y++)
        ee(z[Y], k, A, V);
      s(y.anchor, k, A);
      return;
    }
    if (q === To) {
      S(y, k, A);
      return;
    }
    if (V !== 2 && B & 1 && j)
      if (V === 0)
        j.beforeEnter(L), s(L, k, A), oe(() => j.enter(L), T);
      else {
        const { leave: Y, delayLeave: tt, afterLeave: ot } = j, mt = () => {
          y.ctx.isUnmounted ? i(L) : s(L, k, A);
        }, Et = () => {
          L._isLeaving && L[tg](
            !0
            /* cancelled */
          ), Y(L, () => {
            mt(), ot && ot();
          });
        };
        tt ? tt(L, mt, Et) : Et();
      }
    else
      s(L, k, A);
  }, Wt = (y, k, A, V = !1, T = !1) => {
    const {
      type: L,
      props: q,
      ref: j,
      children: z,
      dynamicChildren: B,
      shapeFlag: et,
      patchFlag: Y,
      dirs: tt,
      cacheIndex: ot
    } = y;
    if (Y === -2 && (T = !1), j != null && (Be(), yi(j, null, A, y, !0), $e()), ot != null && (k.renderCache[ot] = void 0), et & 256) {
      k.ctx.deactivate(y);
      return;
    }
    const mt = et & 1 && tt, Et = !xi(y);
    let _t;
    if (Et && (_t = q && q.onVnodeBeforeUnmount) && qe(_t, k, y), et & 6)
      hn(y.component, A, V);
    else {
      if (et & 128) {
        y.suspense.unmount(A, V);
        return;
      }
      mt && Wn(y, null, k, "beforeUnmount"), et & 64 ? y.type.remove(
        y,
        k,
        A,
        Zs,
        V
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== ht || Y > 0 && Y & 64) ? Js(
        B,
        k,
        A,
        !1,
        !0
      ) : (L === ht && Y & 384 || !T && et & 16) && Js(z, k, A), V && Ne(y);
    }
    (Et && (_t = q && q.onVnodeUnmounted) || mt) && oe(() => {
      _t && qe(_t, k, y), mt && Wn(y, null, k, "unmounted");
    }, A);
  }, Ne = (y) => {
    const { type: k, el: A, anchor: V, transition: T } = y;
    if (k === ht) {
      M.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && T && !T.persisted ? y.children.forEach((q) => {
        q.type === xe ? i(q.el) : Ne(q);
      }) : jn(A, V);
      return;
    }
    if (k === To) {
      w(y);
      return;
    }
    const L = () => {
      i(A), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (y.shapeFlag & 1 && T && !T.persisted) {
      const { leave: q, delayLeave: j } = T, z = () => q(A, L);
      j ? j(y.el, L, z) : z();
    } else
      L();
  }, jn = (y, k) => {
    let A;
    for (; y !== k; )
      A = u(y), i(y), y = A;
    i(k);
  }, hn = (y, k, A) => {
    M.NODE_ENV !== "production" && y.type.__hmrId && B2(y);
    const { bum: V, scope: T, job: L, subTree: q, um: j, m: z, a: B } = y;
    Jc(z), Jc(B), V && Ds(V), T.stop(), L && (L.flags |= 8, Wt(q, y, k, A)), j && oe(j, k), oe(() => {
      y.isUnmounted = !0;
    }, k), M.NODE_ENV !== "production" && Y2(y);
  }, Js = (y, k, A, V = !1, T = !1, L = 0) => {
    for (let q = L; q < y.length; q++)
      Wt(y[q], k, A, V, T);
  }, Qi = (y) => {
    if (y.shapeFlag & 6)
      return Qi(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const k = u(y.anchor || y.el), A = k && k[df];
    return A ? u(A) : k;
  };
  let Kr = !1;
  const Pc = (y, k, A) => {
    y == null ? k._vnode && Wt(k._vnode, null, null, !0) : p(
      k._vnode || null,
      y,
      k,
      null,
      null,
      null,
      A
    ), k._vnode = y, Kr || (Kr = !0, Fc(), nf(), Kr = !1);
  }, Zs = {
    p,
    um: Wt,
    m: ee,
    r: Ne,
    mt: it,
    mc: N,
    pc: dt,
    pbc: R,
    n: Qi,
    o: e
  };
  return {
    render: Pc,
    hydrate: void 0,
    createApp: Sg(Pc)
  };
}
function il({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function qg(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wi(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (J(s) && J(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Dn(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && wi(o, l)), l.type === Ui && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === xe && !l.el && (l.el = o.el), M.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Yg(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < c ? r = l + 1 : o = l;
      c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Df(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Df(t);
}
function Jc(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ug = Symbol.for("v-scx"), Gg = () => {
  {
    const e = Ro(Ug);
    return e || M.NODE_ENV !== "production" && H(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ol(e, t, n) {
  return M.NODE_ENV !== "production" && !st(t) && H(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Af(e, t, n);
}
function Af(e, t, n = xt) {
  const { immediate: s, deep: i, flush: r, once: o } = n;
  M.NODE_ENV !== "production" && !t && (s !== void 0 && H(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && H(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && H(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = Ot({}, n);
  M.NODE_ENV !== "production" && (l.onWarn = H);
  const a = t && s || !t && r !== "post";
  let c;
  if (Oi) {
    if (r === "sync") {
      const f = Gg();
      c = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!a) {
      const f = () => {
      };
      return f.stop = zt, f.resume = zt, f.pause = zt, f;
    }
  }
  const h = qt;
  l.call = (f, m, p) => an(f, h, m, p);
  let d = !1;
  r === "post" ? l.scheduler = (f) => {
    oe(f, h && h.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (f, m) => {
    m ? f() : Lr(f);
  }), l.augmentJob = (f) => {
    t && (f.flags |= 4), d && (f.flags |= 2, h && (f.id = h.uid, f.i = h));
  };
  const u = A2(e, t, l);
  return Oi && (c ? c.push(u) : a && u()), u;
}
function Xg(e, t, n) {
  const s = this.proxy, i = At(e) ? e.includes(".") ? Nf(s, e) : () => s[e] : e.bind(s, s);
  let r;
  st(t) ? r = t : (r = t.handler, n = t);
  const o = Gi(this), l = Af(i, r.bind(s), n);
  return o(), l;
}
function Nf(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const Kg = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Yt(t)}Modifiers`] || e[`${ve(t)}Modifiers`];
function Jg(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || xt;
  if (M.NODE_ENV !== "production") {
    const {
      emitsOptions: h,
      propsOptions: [d]
    } = e;
    if (h)
      if (!(t in h))
        (!d || !(Xn(Yt(t)) in d)) && H(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Xn(Yt(t))}" prop.`
        );
      else {
        const u = h[t];
        st(u) && (u(...n) || H(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), o = r && Kg(s, t.slice(7));
  if (o && (o.trim && (i = n.map((h) => At(h) ? h.trim() : h)), o.number && (i = n.map(Nu))), M.NODE_ENV !== "production" && X2(e, t, i), M.NODE_ENV !== "production") {
    const h = t.toLowerCase();
    h !== t && s[Xn(h)] && H(
      `Event "${h}" is emitted in component ${$r(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ve(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Xn(t)] || // also try camelCase event handler (#2249)
  s[l = Xn(Yt(t))];
  !a && r && (a = s[l = Xn(ve(t))]), a && an(
    a,
    e,
    6,
    i
  );
  const c = s[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, an(
      c,
      e,
      6,
      i
    );
  }
}
const Zg = /* @__PURE__ */ new WeakMap();
function Of(e, t, n = !1) {
  const s = n ? Zg : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!st(e)) {
    const a = (c) => {
      const h = Of(c, t, !0);
      h && (l = !0, Ot(o, h));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (vt(e) && s.set(e, null), null) : (J(r) ? r.forEach((a) => o[a] = null) : Ot(o, r), vt(e) && s.set(e, o), o);
}
function Ir(e, t) {
  return !e || !zi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), gt(e, t[0].toLowerCase() + t.slice(1)) || gt(e, ve(t)) || gt(e, t));
}
let Jl = !1;
function er() {
  Jl = !0;
}
function Zc(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: c,
    renderCache: h,
    props: d,
    data: u,
    setupState: f,
    ctx: m,
    inheritAttrs: p
  } = e, b = Jo(e);
  let v, x;
  M.NODE_ENV !== "production" && (Jl = !1);
  try {
    if (n.shapeFlag & 4) {
      const w = i || s, D = M.NODE_ENV !== "production" && f.__isScriptSetup ? new Proxy(w, {
        get(_, E, N) {
          return H(
            `Property '${String(
              E
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(_, E, N);
        }
      }) : w;
      v = Oe(
        c.call(
          D,
          w,
          h,
          M.NODE_ENV !== "production" ? Ze(d) : d,
          f,
          u,
          m
        )
      ), x = l;
    } else {
      const w = t;
      M.NODE_ENV !== "production" && l === d && er(), v = Oe(
        w.length > 1 ? w(
          M.NODE_ENV !== "production" ? Ze(d) : d,
          M.NODE_ENV !== "production" ? {
            get attrs() {
              return er(), Ze(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : w(
          M.NODE_ENV !== "production" ? Ze(d) : d,
          null
        )
      ), x = t.props ? l : Qg(l);
    }
  } catch (w) {
    ki.length = 0, qi(w, e, 1), v = Tt(xe);
  }
  let C = v, S;
  if (M.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && ([C, S] = Rf(v)), x && p !== !1) {
    const w = Object.keys(x), { shapeFlag: D } = C;
    if (w.length) {
      if (D & 7)
        r && w.some(Wo) && (x = tm(
          x,
          r
        )), C = Ln(C, x, !1, !0);
      else if (M.NODE_ENV !== "production" && !Jl && C.type !== xe) {
        const _ = Object.keys(l), E = [], N = [];
        for (let I = 0, R = _.length; I < R; I++) {
          const W = _[I];
          zi(W) ? Wo(W) || E.push(W[2].toLowerCase() + W.slice(3)) : N.push(W);
        }
        N.length && H(
          `Extraneous non-props attributes (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), E.length && H(
          `Extraneous non-emits event listeners (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (M.NODE_ENV !== "production" && !Qc(C) && H(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), C = Ln(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && (M.NODE_ENV !== "production" && !Qc(C) && H(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Fa(C, n.transition)), M.NODE_ENV !== "production" && S ? S(C) : v = C, Jo(b), v;
}
const Rf = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ha(t, !1);
  if (s) {
    if (M.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return Rf(s);
  } else return [e, void 0];
  const i = t.indexOf(s), r = n ? n.indexOf(s) : -1, o = (l) => {
    t[i] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Oe(s), o];
};
function Ha(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (Vr(i)) {
      if (i.type !== xe || i.children === "v-if") {
        if (n)
          return;
        if (n = i, M.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ha(n.children);
      }
    } else
      return;
  }
  return n;
}
const Qg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zi(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, tm = (e, t) => {
  const n = {};
  for (const s in e)
    (!Wo(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Qc = (e) => e.shapeFlag & 7 || e.type === xe;
function em(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (M.NODE_ENV !== "production" && (i || l) && Te || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? th(s, o, c) : !!o;
    if (a & 8) {
      const h = t.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const u = h[d];
        if (o[u] !== s[u] && !Ir(c, u))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? th(s, o, c) : !0 : !!o;
  return !1;
}
function th(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !Ir(n, r))
      return !0;
  }
  return !1;
}
function nm({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Tf = (e) => e.__isSuspense;
function sm(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : ef(e);
}
const ht = Symbol.for("v-fgt"), Ui = Symbol.for("v-txt"), xe = Symbol.for("v-cmt"), To = Symbol.for("v-stc"), ki = [];
let ye = null;
function O(e = !1) {
  ki.push(ye = e ? null : []);
}
function im() {
  ki.pop(), ye = ki[ki.length - 1] || null;
}
let Ni = 1;
function eh(e, t = !1) {
  Ni += e, e < 0 && ye && t && (ye.hasOnce = !0);
}
function Lf(e) {
  return e.dynamicChildren = Ni > 0 ? ye || Ts : null, im(), Ni > 0 && ye && ye.push(e), e;
}
function F(e, t, n, s, i, r) {
  return Lf(
    g(
      e,
      t,
      n,
      s,
      i,
      r,
      !0
    )
  );
}
function me(e, t, n, s, i) {
  return Lf(
    Tt(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Vr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ni(e, t) {
  if (M.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = No.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const om = (...e) => If(
  ...e
), Ff = ({ key: e }) => e ?? null, Lo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? At(e) || $t(e) || st(e) ? { i: Zt, r: e, k: t, f: !!n } : e : null);
function g(e, t = null, n = null, s = 0, i = null, r = e === ht ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ff(t),
    ref: t && Lo(t),
    scopeId: cf,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Zt
  };
  return l ? (za(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= At(n) ? 8 : 16), M.NODE_ENV !== "production" && a.key !== a.key && H("VNode created with invalid key (NaN). VNode type:", a.type), Ni > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ye.push(a), a;
}
const Tt = M.NODE_ENV !== "production" ? om : If;
function If(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === gg) && (M.NODE_ENV !== "production" && !e && H(`Invalid vnode type when creating vnode: ${e}.`), e = xe), Vr(e)) {
    const l = Ln(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && za(l, n), Ni > 0 && !r && ye && (l.shapeFlag & 6 ? ye[ye.indexOf(e)] = l : ye.push(l)), l.patchFlag = -2, l;
  }
  if (zf(e) && (e = e.__vccOpts), t) {
    t = rm(t);
    let { class: l, style: a } = t;
    l && !At(l) && (t.class = re(l)), vt(a) && (Yo(a) && !J(a) && (a = Ot({}, a)), t.style = P(a));
  }
  const o = At(e) ? 1 : Tf(e) ? 128 : Z2(e) ? 64 : vt(e) ? 4 : st(e) ? 2 : 0;
  return M.NODE_ENV !== "production" && o & 4 && Yo(e) && (e = ct(e), H(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), g(
    e,
    t,
    n,
    s,
    i,
    o,
    r,
    !0
  );
}
function rm(e) {
  return e ? Yo(e) || _f(e) ? Ot({}, e) : e : null;
}
function Ln(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, c = t ? lm(i || {}, t) : i, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ff(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? J(r) ? r.concat(Lo(t)) : [r, Lo(t)] : Lo(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: M.NODE_ENV !== "production" && o === -1 && J(l) ? l.map(Vf) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ht ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ln(e.ssContent),
    ssFallback: e.ssFallback && Ln(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Fa(
    h,
    a.clone(h)
  ), h;
}
function Vf(e) {
  const t = Ln(e);
  return J(e.children) && (t.children = e.children.map(Vf)), t;
}
function Ns(e = " ", t = 0) {
  return Tt(Ui, null, e, t);
}
function Mt(e = "", t = !1) {
  return t ? (O(), me(xe, null, e)) : Tt(xe, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? Tt(xe) : J(e) ? Tt(
    ht,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vr(e) ? Dn(e) : Tt(Ui, null, String(e));
}
function Dn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ln(e);
}
function za(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (J(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), za(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !_f(t) ? t._ctx = Zt : i === 3 && Zt && (Zt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else st(t) ? (t = { default: t, _ctx: Zt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Ns(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function lm(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = re([t.class, s.class]));
      else if (i === "style")
        t.style = P([t.style, s.style]);
      else if (zi(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(J(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function qe(e, t, n, s = null) {
  an(e, t, 7, [
    n,
    s
  ]);
}
const am = xf();
let cm = 0;
function hm(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || am, r = {
    uid: cm++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new n2(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Cf(s, i),
    emitsOptions: Of(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xt,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: xt,
    data: xt,
    props: xt,
    attrs: xt,
    slots: xt,
    refs: xt,
    setupState: xt,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return M.NODE_ENV !== "production" ? r.ctx = bg(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Jg.bind(null, r), e.ce && e.ce(r), r;
}
let qt = null;
const Bf = () => qt || Zt;
let nr, Zl;
{
  const e = Wi(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  nr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => qt = n
  ), Zl = t(
    "__VUE_SSR_SETTERS__",
    (n) => Oi = n
  );
}
const Gi = (e) => {
  const t = qt;
  return nr(e), e.scope.on(), () => {
    e.scope.off(), nr(t);
  };
}, nh = () => {
  qt && qt.scope.off(), nr(null);
}, dm = /* @__PURE__ */ Cn("slot,component");
function Ql(e, { isNativeTag: t }) {
  (dm(e) || t(e)) && H(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function $f(e) {
  return e.vnode.shapeFlag & 4;
}
let Oi = !1;
function um(e, t = !1, n = !1) {
  t && Zl(t);
  const { props: s, children: i } = e.vnode, r = $f(e);
  Dg(e, s, r, t), $g(e, i, n || t);
  const o = r ? fm(e, t) : void 0;
  return t && Zl(!1), o;
}
function fm(e, t) {
  var n;
  const s = e.type;
  if (M.NODE_ENV !== "production") {
    if (s.name && Ql(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let o = 0; o < r.length; o++)
        Ql(r[o], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let o = 0; o < r.length; o++)
        hf(r[o]);
    }
    s.compilerOptions && pm() && H(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bf), M.NODE_ENV !== "production" && vg(e);
  const { setup: i } = s;
  if (i) {
    Be();
    const r = e.setupContext = i.length > 1 ? mm(e) : null, o = Gi(e), l = qs(
      i,
      e,
      0,
      [
        M.NODE_ENV !== "production" ? Ze(e.props) : e.props,
        r
      ]
    ), a = Ma(l);
    if ($e(), o(), (a || e.sp) && !xi(e) && pf(e), a) {
      if (l.then(nh, nh), t)
        return l.then((c) => {
          sh(e, c, t);
        }).catch((c) => {
          qi(c, e, 0);
        });
      if (e.asyncDep = l, M.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        H(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      sh(e, l, t);
  } else
    Hf(e, t);
}
function sh(e, t, n) {
  st(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) ? (M.NODE_ENV !== "production" && Vr(t) && H(
    "setup() should not return VNodes directly - return a render function instead."
  ), M.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ju(t), M.NODE_ENV !== "production" && yg(e)) : M.NODE_ENV !== "production" && t !== void 0 && H(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Hf(e, n);
}
const pm = () => !0;
function Hf(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || zt);
  {
    const i = Gi(e);
    Be();
    try {
      wg(e);
    } finally {
      $e(), i();
    }
  }
  M.NODE_ENV !== "production" && !s.render && e.render === zt && !t && (s.template ? H(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : H("Component is missing template or render function: ", s));
}
const ih = M.NODE_ENV !== "production" ? {
  get(e, t) {
    return er(), Ht(e, "get", ""), e[t];
  },
  set() {
    return H("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return H("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Ht(e, "get", ""), e[t];
  }
};
function gm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Ht(e, "get", "$slots"), t[n];
    }
  });
}
function mm(e) {
  const t = (n) => {
    if (M.NODE_ENV !== "production" && (e.exposed && H("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (J(n) ? s = "array" : $t(n) && (s = "ref")), s !== "object" && H(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (M.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ih));
      },
      get slots() {
        return s || (s = gm(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ih),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Br(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ju(_2(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in as)
        return as[n](e);
    },
    has(t, n) {
      return n in t || n in as;
    }
  })) : e.proxy;
}
const bm = /(?:^|[-_])\w/g, vm = (e) => e.replace(bm, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ja(e, t = !0) {
  return st(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $r(e, t, n = !1) {
  let s = ja(t);
  if (!s && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (s = i[1]);
  }
  if (!s && e && e.parent) {
    const i = (r) => {
      for (const o in r)
        if (r[o] === t)
          return o;
    };
    s = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return s ? vm(s) : n ? "App" : "Anonymous";
}
function zf(e) {
  return st(e) && "__vccOpts" in e;
}
const Qn = (e, t) => {
  const n = E2(e, t, Oi);
  if (M.NODE_ENV !== "production") {
    const s = Bf();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function ym() {
  if (M.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!vt(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if ($t(d)) {
        Be();
        const u = d.value;
        return $e(), [
          "div",
          {},
          ["span", e, h(d)],
          "<",
          l(u),
          ">"
        ];
      } else {
        if (os(d))
          return [
            "div",
            {},
            ["span", e, ae(d) ? "ShallowReactive" : "Reactive"],
            "<",
            l(d),
            `>${ln(d) ? " (readonly)" : ""}`
          ];
        if (ln(d))
          return [
            "div",
            {},
            ["span", e, ae(d) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(d),
            ">"
          ];
      }
      return null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const u = [];
    d.type.props && d.props && u.push(o("props", ct(d.props))), d.setupState !== xt && u.push(o("setup", d.setupState)), d.data !== xt && u.push(o("data", ct(d.data)));
    const f = a(d, "computed");
    f && u.push(o("computed", f));
    const m = a(d, "inject");
    return m && u.push(o("injected", m)), u.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), u;
  }
  function o(d, u) {
    return u = Ot({}, u), Object.keys(u).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(u).map((f) => [
          "div",
          {},
          ["span", s, f + ": "],
          l(u[f], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, u = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : vt(d) ? ["object", { object: u ? ct(d) : d }] : ["span", n, String(d)];
  }
  function a(d, u) {
    const f = d.type;
    if (st(f))
      return;
    const m = {};
    for (const p in d.ctx)
      c(f, p, u) && (m[p] = d.ctx[p]);
    return m;
  }
  function c(d, u, f) {
    const m = d[f];
    if (J(m) && m.includes(u) || vt(m) && u in m || d.extends && c(d.extends, u, f) || d.mixins && d.mixins.some((p) => c(p, u, f)))
      return !0;
  }
  function h(d) {
    return ae(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const oh = "3.5.22", we = M.NODE_ENV !== "production" ? H : zt;
var Gt = {};
let ta;
const rh = typeof window < "u" && window.trustedTypes;
if (rh)
  try {
    ta = /* @__PURE__ */ rh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Gt.NODE_ENV !== "production" && we(`Error creating trusted types policy: ${e}`);
  }
const jf = ta ? (e) => ta.createHTML(e) : (e) => e, xm = "http://www.w3.org/2000/svg", wm = "http://www.w3.org/1998/Math/MathML", mn = typeof document < "u" ? document : null, lh = mn && /* @__PURE__ */ mn.createElement("template"), km = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? mn.createElementNS(xm, e) : t === "mathml" ? mn.createElementNS(wm, e) : n ? mn.createElement(e, { is: n }) : mn.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => mn.createTextNode(e),
  createComment: (e) => mn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => mn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      lh.innerHTML = jf(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = lh.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, _m = Symbol("_vtc");
function Mm(e, t, n) {
  const s = e[_m];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ah = Symbol("_vod"), Cm = Symbol("_vsh"), Pm = Symbol(Gt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Sm = /(?:^|;)\s*display\s*:/;
function Em(e, t, n) {
  const s = e.style, i = At(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (At(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Fo(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Fo(s, o, "");
    for (const o in n)
      o === "display" && (r = !0), Fo(s, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = s[Pm];
      o && (n += ";" + o), s.cssText = n, r = Sm.test(n);
    }
  } else t && e.removeAttribute("style");
  ah in e && (e[ah] = r ? s.display : "", e[Cm] && (s.display = "none"));
}
const Dm = /[^\\];\s*$/, ch = /\s*!important$/;
function Fo(e, t, n) {
  if (J(n))
    n.forEach((s) => Fo(e, t, s));
  else if (n == null && (n = ""), Gt.NODE_ENV !== "production" && Dm.test(n) && we(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Am(e, t);
    ch.test(n) ? e.setProperty(
      ve(s),
      n.replace(ch, ""),
      "important"
    ) : e[s] = n;
  }
}
const hh = ["Webkit", "Moz", "ms"], rl = {};
function Am(e, t) {
  const n = rl[t];
  if (n)
    return n;
  let s = Yt(t);
  if (s !== "filter" && s in e)
    return rl[t] = s;
  s = fs(s);
  for (let i = 0; i < hh.length; i++) {
    const r = hh[i] + s;
    if (r in e)
      return rl[t] = r;
  }
  return t;
}
const dh = "http://www.w3.org/1999/xlink";
function uh(e, t, n, s, i, r = Qp(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(dh, t.slice(6, t.length)) : e.setAttributeNS(dh, t, n) : n == null || r && !Ou(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : rn(n) ? String(n) : n
  );
}
function fh(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? jf(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ou(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    Gt.NODE_ENV !== "production" && !o && we(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  o && e.removeAttribute(i || t);
}
function Wf(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Nm(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ph = Symbol("_vei");
function Om(e, t, n, s, i = null) {
  const r = e[ph] || (e[ph] = {}), o = r[t];
  if (s && o)
    o.value = Gt.NODE_ENV !== "production" ? mh(s, t) : s;
  else {
    const [l, a] = Rm(t);
    if (s) {
      const c = r[t] = Fm(
        Gt.NODE_ENV !== "production" ? mh(s, t) : s,
        i
      );
      Wf(e, l, c, a);
    } else o && (Nm(e, l, o, a), r[t] = void 0);
  }
}
const gh = /(?:Once|Passive|Capture)$/;
function Rm(e) {
  let t;
  if (gh.test(e)) {
    t = {};
    let s;
    for (; s = e.match(gh); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ve(e.slice(2)), t];
}
let ll = 0;
const Tm = /* @__PURE__ */ Promise.resolve(), Lm = () => ll || (Tm.then(() => ll = 0), ll = Date.now());
function Fm(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    an(
      Im(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Lm(), n;
}
function mh(e, t) {
  return st(e) || J(e) ? e : (we(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), zt);
}
function Im(e, t) {
  if (J(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (i) => !i._stopped && s && s(i)
    );
  } else
    return t;
}
const bh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vm = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Mm(e, s, o) : t === "style" ? Em(e, n, s) : zi(t) ? Wo(t) || Om(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bm(e, t, s, o)) ? (fh(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && uh(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !At(s)) ? fh(e, Yt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), uh(e, t, s, o));
};
function Bm(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bh(t) && st(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return bh(t) && At(n) ? !1 : t in e;
}
const vh = {};
// @__NO_SIDE_EFFECTS__
function _e(e, t, n) {
  let s = /* @__PURE__ */ eg(e, t);
  Dr(s) && (s = Ot({}, s, t));
  class i extends Wa {
    constructor(o) {
      super(s, o, n);
    }
  }
  return i.def = s, i;
}
const $m = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Wa extends $m {
  constructor(t, n = {}, s = kh) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== kh ? this._root = this.shadowRoot : (Gt.NODE_ENV !== "production" && this.shadowRoot && we(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      Ot({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Wa) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Ra(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (s, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: o } = s;
      let l;
      if (r && !J(r))
        for (const a in r) {
          const c = r[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = Nc(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Yt(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(o) : Gt.NODE_ENV !== "production" && o && we(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    Gt.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        gt(this, s) ? Gt.NODE_ENV !== "production" && we(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ts(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = J(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i]);
    for (const i of s.map(Yt))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : vh;
    const i = Yt(t);
    n && this._numberProps && this._numberProps[i] && (s = Nc(s)), this._setProp(i, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, i = !1) {
    if (n !== this._props[t] && (n === vh ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const r = this._ob;
      r && (this._processMutations(r.takeRecords()), r.disconnect()), n === !0 ? this.setAttribute(ve(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ve(t), n + "") : n || this.removeAttribute(ve(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), jm(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Tt(this._def, Ot(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, Gt.NODE_ENV !== "production" && (s.ceReload = (r) => {
        this._styles && (this._styles.forEach((o) => this._root.removeChild(o)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            Dr(o[0]) ? Ot({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      s.emit = (r, ...o) => {
        i(r, o), ve(r) !== r && i(ve(r), o);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = document.createElement("style");
      if (s && r.setAttribute("nonce", s), r.textContent = t[i], this.shadowRoot.prepend(r), Gt.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let o = this._childStyles.get(n.__hmrId);
            o || this._childStyles.set(n.__hmrId, o = []), o.push(r);
          }
        } else
          (this._styles || (this._styles = [])).push(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const i = t[s], r = i.getAttribute("name") || "default", o = this._slots[r], l = i.parentNode;
      if (o)
        for (const a of o) {
          if (n && a.nodeType === 1) {
            const c = n + "-s", h = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let d;
            for (; d = h.nextNode(); )
              d.setAttribute(c, "");
          }
          l.insertBefore(a, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    return this._teleportTargets && t.push(...this._teleportTargets), t.reduce((n, s) => (n.push(...Array.from(s.querySelectorAll("slot"))), n), []);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (Gt.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
const yh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (n) => Ds(t, n) : t;
}, al = Symbol("_assign"), Hm = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const i = Er(t);
    Wf(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Nu(sr(o)) : sr(o)
      );
      e[al](
        e.multiple ? i ? new Set(r) : r : r[0]
      ), e._assigning = !0, Ra(() => {
        e._assigning = !1;
      });
    }), e[al] = yh(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    xh(e, t);
  },
  beforeUpdate(e, t, n) {
    e[al] = yh(n);
  },
  updated(e, { value: t }) {
    e._assigning || xh(e, t);
  }
};
function xh(e, t) {
  const n = e.multiple, s = J(t);
  if (n && !s && !Er(t)) {
    Gt.NODE_ENV !== "production" && we(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, r = e.options.length; i < r; i++) {
    const o = e.options[i], l = sr(o);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = e2(t, l) > -1;
      } else
        o.selected = t.has(l);
    else if (Nr(sr(o), t)) {
      e.selectedIndex !== i && (e.selectedIndex = i);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function sr(e) {
  return "_value" in e ? e._value : e.value;
}
const zm = /* @__PURE__ */ Ot({ patchProp: Vm }, km);
let wh;
function qf() {
  return wh || (wh = jg(zm));
}
const jm = ((...e) => {
  qf().render(...e);
}), kh = ((...e) => {
  const t = qf().createApp(...e);
  Gt.NODE_ENV !== "production" && (qm(t), Ym(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const i = Um(s);
    if (!i) return;
    const r = t._component;
    !st(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Wm(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function Wm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function qm(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Xp(t) || Kp(t) || Jp(t),
    writable: !1
  });
}
function Ym(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        we(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return we(s), n;
      },
      set() {
        we(s);
      }
    });
  }
}
function Um(e) {
  if (At(e)) {
    const t = document.querySelector(e);
    return Gt.NODE_ENV !== "production" && !t && we(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Gt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && we(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Gm = {};
function Xm() {
  ym();
}
Gm.NODE_ENV !== "production" && Xm();
function Km(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), s = n.createElement("base"), i = n.createElement("a");
  return n.head.appendChild(s), n.body.appendChild(i), t && (s.href = t), i.href = e, i.href;
}
const Jm = /* @__PURE__ */ (() => {
  let e = 0;
  const t = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${t()}${e}`);
})();
function Rn(e) {
  const t = [];
  for (let n = 0, s = e.length; n < s; n++)
    t.push(e[n]);
  return t;
}
let ks = null;
function Yf(e = {}) {
  return ks || (e.includeStyleProperties ? (ks = e.includeStyleProperties, ks) : (ks = Rn(window.getComputedStyle(document.documentElement)), ks));
}
function ir(e, t) {
  const s = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return s ? parseFloat(s.replace("px", "")) : 0;
}
function Zm(e) {
  const t = ir(e, "border-left-width"), n = ir(e, "border-right-width");
  return e.clientWidth + t + n;
}
function Qm(e) {
  const t = ir(e, "border-top-width"), n = ir(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function Uf(e, t = {}) {
  const n = t.width || Zm(e), s = t.height || Qm(e);
  return { width: n, height: s };
}
function t3() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const be = 16384;
function e3(e) {
  (e.width > be || e.height > be) && (e.width > be && e.height > be ? e.width > e.height ? (e.height *= be / e.width, e.width = be) : (e.width *= be / e.height, e.height = be) : e.width > be ? (e.height *= be / e.width, e.width = be) : (e.width *= be / e.height, e.height = be));
}
function or(e) {
  return new Promise((t, n) => {
    const s = new Image();
    s.onload = () => {
      s.decode().then(() => {
        requestAnimationFrame(() => t(s));
      });
    }, s.onerror = n, s.crossOrigin = "anonymous", s.decoding = "async", s.src = e;
  });
}
async function n3(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function s3(e, t, n) {
  const s = "http://www.w3.org/2000/svg", i = document.createElementNS(s, "svg"), r = document.createElementNS(s, "foreignObject");
  return i.setAttribute("width", `${t}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${t} ${n}`), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.setAttribute("x", "0"), r.setAttribute("y", "0"), r.setAttribute("externalResourcesRequired", "true"), i.appendChild(r), r.appendChild(e), n3(i);
}
const ge = (e, t) => {
  if (e instanceof t)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === t.name || ge(n, t);
};
function i3(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function o3(e, t) {
  return Yf(t).map((n) => {
    const s = e.getPropertyValue(n), i = e.getPropertyPriority(n);
    return `${n}: ${s}${i ? " !important" : ""};`;
  }).join(" ");
}
function r3(e, t, n, s) {
  const i = `.${e}:${t}`, r = n.cssText ? i3(n) : o3(n, s);
  return document.createTextNode(`${i}{${r}}`);
}
function _h(e, t, n, s) {
  const i = window.getComputedStyle(e, n), r = i.getPropertyValue("content");
  if (r === "" || r === "none")
    return;
  const o = Jm();
  try {
    t.className = `${t.className} ${o}`;
  } catch {
    return;
  }
  const l = document.createElement("style");
  l.appendChild(r3(o, n, i, s)), t.appendChild(l);
}
function l3(e, t, n) {
  _h(e, t, ":before", n), _h(e, t, ":after", n);
}
const Mh = "application/font-woff", Ch = "image/jpeg", a3 = {
  woff: Mh,
  woff2: Mh,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Ch,
  jpeg: Ch,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function c3(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function qa(e) {
  const t = c3(e).toLowerCase();
  return a3[t] || "";
}
function h3(e) {
  return e.split(/,/)[1];
}
function ea(e) {
  return e.search(/^(data:)/) !== -1;
}
function d3(e, t) {
  return `data:${t};base64,${e}`;
}
async function Gf(e, t, n) {
  const s = await fetch(e, t);
  if (s.status === 404)
    throw new Error(`Resource "${s.url}" not found`);
  const i = await s.blob();
  return new Promise((r, o) => {
    const l = new FileReader();
    l.onerror = o, l.onloadend = () => {
      try {
        r(n({ res: s, result: l.result }));
      } catch (a) {
        o(a);
      }
    }, l.readAsDataURL(i);
  });
}
const cl = {};
function u3(e, t, n) {
  let s = e.replace(/\?.*/, "");
  return n && (s = e), /ttf|otf|eot|woff2?/i.test(s) && (s = s.replace(/.*\//, "")), t ? `[${t}]${s}` : s;
}
async function Ya(e, t, n) {
  const s = u3(e, t, n.includeQueryParams);
  if (cl[s] != null)
    return cl[s];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let i;
  try {
    const r = await Gf(e, n.fetchRequestInit, ({ res: o, result: l }) => (t || (t = o.headers.get("Content-Type") || ""), h3(l)));
    i = d3(r, t);
  } catch (r) {
    i = n.imagePlaceholder || "";
    let o = `Failed to fetch resource: ${e}`;
    r && (o = typeof r == "string" ? r : r.message), o && console.warn(o);
  }
  return cl[s] = i, i;
}
async function f3(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : or(t);
}
async function p3(e, t) {
  if (e.currentSrc) {
    const r = document.createElement("canvas"), o = r.getContext("2d");
    r.width = e.clientWidth, r.height = e.clientHeight, o == null || o.drawImage(e, 0, 0, r.width, r.height);
    const l = r.toDataURL();
    return or(l);
  }
  const n = e.poster, s = qa(n), i = await Ya(n, s, t);
  return or(i);
}
async function g3(e, t) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await Hr(e.contentDocument.body, t, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function m3(e, t) {
  return ge(e, HTMLCanvasElement) ? f3(e) : ge(e, HTMLVideoElement) ? p3(e, t) : ge(e, HTMLIFrameElement) ? g3(e, t) : e.cloneNode(Xf(e));
}
const b3 = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Xf = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function v3(e, t, n) {
  var s, i;
  if (Xf(t))
    return t;
  let r = [];
  return b3(e) && e.assignedNodes ? r = Rn(e.assignedNodes()) : ge(e, HTMLIFrameElement) && (!((s = e.contentDocument) === null || s === void 0) && s.body) ? r = Rn(e.contentDocument.body.childNodes) : r = Rn(((i = e.shadowRoot) !== null && i !== void 0 ? i : e).childNodes), r.length === 0 || ge(e, HTMLVideoElement) || await r.reduce((o, l) => o.then(() => Hr(l, n)).then((a) => {
    a && t.appendChild(a);
  }), Promise.resolve()), t;
}
function y3(e, t, n) {
  const s = t.style;
  if (!s)
    return;
  const i = window.getComputedStyle(e);
  i.cssText ? (s.cssText = i.cssText, s.transformOrigin = i.transformOrigin) : Yf(n).forEach((r) => {
    let o = i.getPropertyValue(r);
    r === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), ge(e, HTMLIFrameElement) && r === "display" && o === "inline" && (o = "block"), r === "d" && t.getAttribute("d") && (o = `path(${t.getAttribute("d")})`), s.setProperty(r, o, i.getPropertyPriority(r));
  });
}
function x3(e, t) {
  ge(e, HTMLTextAreaElement) && (t.innerHTML = e.value), ge(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function w3(e, t) {
  if (ge(e, HTMLSelectElement)) {
    const n = t, s = Array.from(n.children).find((i) => e.value === i.getAttribute("value"));
    s && s.setAttribute("selected", "");
  }
}
function k3(e, t, n) {
  return ge(t, Element) && (y3(e, t, n), l3(e, t, n), x3(e, t), w3(e, t)), t;
}
async function _3(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const s = {};
  for (let r = 0; r < n.length; r++) {
    const l = n[r].getAttribute("xlink:href");
    if (l) {
      const a = e.querySelector(l), c = document.querySelector(l);
      !a && c && !s[l] && (s[l] = await Hr(c, t, !0));
    }
  }
  const i = Object.values(s);
  if (i.length) {
    const r = "http://www.w3.org/1999/xhtml", o = document.createElementNS(r, "svg");
    o.setAttribute("xmlns", r), o.style.position = "absolute", o.style.width = "0", o.style.height = "0", o.style.overflow = "hidden", o.style.display = "none";
    const l = document.createElementNS(r, "defs");
    o.appendChild(l);
    for (let a = 0; a < i.length; a++)
      l.appendChild(i[a]);
    e.appendChild(o);
  }
  return e;
}
async function Hr(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((s) => m3(s, t)).then((s) => v3(e, s, t)).then((s) => k3(e, s, t)).then((s) => _3(s, t));
}
const Kf = /url\((['"]?)([^'"]+?)\1\)/g, M3 = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, C3 = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function P3(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function S3(e) {
  const t = [];
  return e.replace(Kf, (n, s, i) => (t.push(i), n)), t.filter((n) => !ea(n));
}
async function E3(e, t, n, s, i) {
  try {
    const r = n ? Km(t, n) : t, o = qa(t);
    let l;
    return i || (l = await Ya(r, o, s)), e.replace(P3(t), `$1${l}$3`);
  } catch {
  }
  return e;
}
function D3(e, { preferredFontFormat: t }) {
  return t ? e.replace(C3, (n) => {
    for (; ; ) {
      const [s, , i] = M3.exec(n) || [];
      if (!i)
        return "";
      if (i === t)
        return `src: ${s};`;
    }
  }) : e;
}
function Jf(e) {
  return e.search(Kf) !== -1;
}
async function Zf(e, t, n) {
  if (!Jf(e))
    return e;
  const s = D3(e, n);
  return S3(s).reduce((r, o) => r.then((l) => E3(l, o, t, n)), Promise.resolve(s));
}
async function _s(e, t, n) {
  var s;
  const i = (s = t.style) === null || s === void 0 ? void 0 : s.getPropertyValue(e);
  if (i) {
    const r = await Zf(i, null, n);
    return t.style.setProperty(e, r, t.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function A3(e, t) {
  await _s("background", e, t) || await _s("background-image", e, t), await _s("mask", e, t) || await _s("-webkit-mask", e, t) || await _s("mask-image", e, t) || await _s("-webkit-mask-image", e, t);
}
async function N3(e, t) {
  const n = ge(e, HTMLImageElement);
  if (!(n && !ea(e.src)) && !(ge(e, SVGImageElement) && !ea(e.href.baseVal)))
    return;
  const s = n ? e.src : e.href.baseVal, i = await Ya(s, qa(s), t);
  await new Promise((r, o) => {
    e.onload = r, e.onerror = t.onImageErrorHandler ? (...a) => {
      try {
        r(t.onImageErrorHandler(...a));
      } catch (c) {
        o(c);
      }
    } : o;
    const l = e;
    l.decode && (l.decode = r), l.loading === "lazy" && (l.loading = "eager"), n ? (e.srcset = "", e.src = i) : e.href.baseVal = i;
  });
}
async function O3(e, t) {
  const s = Rn(e.childNodes).map((i) => Qf(i, t));
  await Promise.all(s).then(() => e);
}
async function Qf(e, t) {
  ge(e, Element) && (await A3(e, t), await N3(e, t), await O3(e, t));
}
function R3(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const s = t.style;
  return s != null && Object.keys(s).forEach((i) => {
    n[i] = s[i];
  }), e;
}
const Ph = {};
async function Sh(e) {
  let t = Ph[e];
  if (t != null)
    return t;
  const s = await (await fetch(e)).text();
  return t = { url: e, cssText: s }, Ph[e] = t, t;
}
async function Eh(e, t) {
  let n = e.cssText;
  const s = /url\(["']?([^"')]+)["']?\)/g, r = (n.match(/url\([^)]+\)/g) || []).map(async (o) => {
    let l = o.replace(s, "$1");
    return l.startsWith("https://") || (l = new URL(l, e.url).href), Gf(l, t.fetchRequestInit, ({ result: a }) => (n = n.replace(o, `url(${a})`), [o, a]));
  });
  return Promise.all(r).then(() => n);
}
function Dh(e) {
  if (e == null)
    return [];
  const t = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let s = e.replace(n, "");
  const i = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const a = i.exec(s);
    if (a === null)
      break;
    t.push(a[0]);
  }
  s = s.replace(i, "");
  const r = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, o = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", l = new RegExp(o, "gi");
  for (; ; ) {
    let a = r.exec(s);
    if (a === null) {
      if (a = l.exec(s), a === null)
        break;
      r.lastIndex = l.lastIndex;
    } else
      l.lastIndex = r.lastIndex;
    t.push(a[0]);
  }
  return t;
}
async function T3(e, t) {
  const n = [], s = [];
  return e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Rn(i.cssRules || []).forEach((r, o) => {
          if (r.type === CSSRule.IMPORT_RULE) {
            let l = o + 1;
            const a = r.href, c = Sh(a).then((h) => Eh(h, t)).then((h) => Dh(h).forEach((d) => {
              try {
                i.insertRule(d, d.startsWith("@import") ? l += 1 : i.cssRules.length);
              } catch (u) {
                console.error("Error inserting rule from remote css", {
                  rule: d,
                  error: u
                });
              }
            })).catch((h) => {
              console.error("Error loading remote css", h.toString());
            });
            s.push(c);
          }
        });
      } catch (r) {
        const o = e.find((l) => l.href == null) || document.styleSheets[0];
        i.href != null && s.push(Sh(i.href).then((l) => Eh(l, t)).then((l) => Dh(l).forEach((a) => {
          o.insertRule(a, o.cssRules.length);
        })).catch((l) => {
          console.error("Error loading remote stylesheet", l);
        })), console.error("Error inlining remote css file", r);
      }
  }), Promise.all(s).then(() => (e.forEach((i) => {
    if ("cssRules" in i)
      try {
        Rn(i.cssRules || []).forEach((r) => {
          n.push(r);
        });
      } catch (r) {
        console.error(`Error while reading CSS rules from ${i.href}`, r);
      }
  }), n));
}
function L3(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => Jf(t.style.getPropertyValue("src")));
}
async function F3(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Rn(e.ownerDocument.styleSheets), s = await T3(n, t);
  return L3(s);
}
function t1(e) {
  return e.trim().replace(/["']/g, "");
}
function I3(e) {
  const t = /* @__PURE__ */ new Set();
  function n(s) {
    (s.style.fontFamily || getComputedStyle(s).fontFamily).split(",").forEach((r) => {
      t.add(t1(r));
    }), Array.from(s.children).forEach((r) => {
      r instanceof HTMLElement && n(r);
    });
  }
  return n(e), t;
}
async function V3(e, t) {
  const n = await F3(e, t), s = I3(e);
  return (await Promise.all(n.filter((r) => s.has(t1(r.style.fontFamily))).map((r) => {
    const o = r.parentStyleSheet ? r.parentStyleSheet.href : null;
    return Zf(r.cssText, o, t);
  }))).join(`
`);
}
async function B3(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await V3(e, t);
  if (n) {
    const s = document.createElement("style"), i = document.createTextNode(n);
    s.appendChild(i), e.firstChild ? e.insertBefore(s, e.firstChild) : e.appendChild(s);
  }
}
async function $3(e, t = {}) {
  const { width: n, height: s } = Uf(e, t), i = await Hr(e, t, !0);
  return await B3(i, t), await Qf(i, t), R3(i, t), await s3(i, n, s);
}
async function H3(e, t = {}) {
  const { width: n, height: s } = Uf(e, t), i = await $3(e, t), r = await or(i), o = document.createElement("canvas"), l = o.getContext("2d"), a = t.pixelRatio || t3(), c = t.canvasWidth || n, h = t.canvasHeight || s;
  return o.width = c * a, o.height = h * a, t.skipAutoScale || e3(o), o.style.width = `${c}`, o.style.height = `${h}`, t.backgroundColor && (l.fillStyle = t.backgroundColor, l.fillRect(0, 0, o.width, o.height)), l.drawImage(r, 0, 0, o.width, o.height), o;
}
async function z3(e, t = {}) {
  return (await H3(e, t)).toDataURL();
}
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Xi(e) {
  return e + 0.5 | 0;
}
const An = (e, t, n) => Math.max(Math.min(e, n), t);
function hi(e) {
  return An(Xi(e * 2.55), 0, 255);
}
function Tn(e) {
  return An(Xi(e * 255), 0, 255);
}
function vn(e) {
  return An(Xi(e / 2.55) / 100, 0, 1);
}
function Ah(e) {
  return An(Xi(e * 100), 0, 100);
}
const Ce = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, na = [..."0123456789ABCDEF"], j3 = (e) => na[e & 15], W3 = (e) => na[(e & 240) >> 4] + na[e & 15], oo = (e) => (e & 240) >> 4 === (e & 15), q3 = (e) => oo(e.r) && oo(e.g) && oo(e.b) && oo(e.a);
function Y3(e) {
  var t = e.length, n;
  return e[0] === "#" && (t === 4 || t === 5 ? n = {
    r: 255 & Ce[e[1]] * 17,
    g: 255 & Ce[e[2]] * 17,
    b: 255 & Ce[e[3]] * 17,
    a: t === 5 ? Ce[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (n = {
    r: Ce[e[1]] << 4 | Ce[e[2]],
    g: Ce[e[3]] << 4 | Ce[e[4]],
    b: Ce[e[5]] << 4 | Ce[e[6]],
    a: t === 9 ? Ce[e[7]] << 4 | Ce[e[8]] : 255
  })), n;
}
const U3 = (e, t) => e < 255 ? t(e) : "";
function G3(e) {
  var t = q3(e) ? j3 : W3;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + U3(e.a, t) : void 0;
}
const X3 = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function e1(e, t, n) {
  const s = t * Math.min(n, 1 - n), i = (r, o = (r + e / 30) % 12) => n - s * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [i(0), i(8), i(4)];
}
function K3(e, t, n) {
  const s = (i, r = (i + e / 60) % 6) => n - n * t * Math.max(Math.min(r, 4 - r, 1), 0);
  return [s(5), s(3), s(1)];
}
function J3(e, t, n) {
  const s = e1(e, 1, 0.5);
  let i;
  for (t + n > 1 && (i = 1 / (t + n), t *= i, n *= i), i = 0; i < 3; i++)
    s[i] *= 1 - t - n, s[i] += t;
  return s;
}
function Z3(e, t, n, s, i) {
  return e === i ? (t - n) / s + (t < n ? 6 : 0) : t === i ? (n - e) / s + 2 : (e - t) / s + 4;
}
function Ua(e) {
  const n = e.r / 255, s = e.g / 255, i = e.b / 255, r = Math.max(n, s, i), o = Math.min(n, s, i), l = (r + o) / 2;
  let a, c, h;
  return r !== o && (h = r - o, c = l > 0.5 ? h / (2 - r - o) : h / (r + o), a = Z3(n, s, i, h, r), a = a * 60 + 0.5), [a | 0, c || 0, l];
}
function Ga(e, t, n, s) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, s)).map(Tn);
}
function Xa(e, t, n) {
  return Ga(e1, e, t, n);
}
function Q3(e, t, n) {
  return Ga(J3, e, t, n);
}
function t0(e, t, n) {
  return Ga(K3, e, t, n);
}
function n1(e) {
  return (e % 360 + 360) % 360;
}
function e0(e) {
  const t = X3.exec(e);
  let n = 255, s;
  if (!t)
    return;
  t[5] !== s && (n = t[6] ? hi(+t[5]) : Tn(+t[5]));
  const i = n1(+t[2]), r = +t[3] / 100, o = +t[4] / 100;
  return t[1] === "hwb" ? s = Q3(i, r, o) : t[1] === "hsv" ? s = t0(i, r, o) : s = Xa(i, r, o), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: n
  };
}
function n0(e, t) {
  var n = Ua(e);
  n[0] = n1(n[0] + t), n = Xa(n), e.r = n[0], e.g = n[1], e.b = n[2];
}
function s0(e) {
  if (!e)
    return;
  const t = Ua(e), n = t[0], s = Ah(t[1]), i = Ah(t[2]);
  return e.a < 255 ? `hsla(${n}, ${s}%, ${i}%, ${vn(e.a)})` : `hsl(${n}, ${s}%, ${i}%)`;
}
const Nh = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Oh = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function i0() {
  const e = {}, t = Object.keys(Oh), n = Object.keys(Nh);
  let s, i, r, o, l;
  for (s = 0; s < t.length; s++) {
    for (o = l = t[s], i = 0; i < n.length; i++)
      r = n[i], l = l.replace(r, Nh[r]);
    r = parseInt(Oh[o], 16), e[l] = [r >> 16 & 255, r >> 8 & 255, r & 255];
  }
  return e;
}
let ro;
function o0(e) {
  ro || (ro = i0(), ro.transparent = [0, 0, 0, 0]);
  const t = ro[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const r0 = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function l0(e) {
  const t = r0.exec(e);
  let n = 255, s, i, r;
  if (t) {
    if (t[7] !== s) {
      const o = +t[7];
      n = t[8] ? hi(o) : An(o * 255, 0, 255);
    }
    return s = +t[1], i = +t[3], r = +t[5], s = 255 & (t[2] ? hi(s) : An(s, 0, 255)), i = 255 & (t[4] ? hi(i) : An(i, 0, 255)), r = 255 & (t[6] ? hi(r) : An(r, 0, 255)), {
      r: s,
      g: i,
      b: r,
      a: n
    };
  }
}
function a0(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${vn(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const hl = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, Ms = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function c0(e, t, n) {
  const s = Ms(vn(e.r)), i = Ms(vn(e.g)), r = Ms(vn(e.b));
  return {
    r: Tn(hl(s + n * (Ms(vn(t.r)) - s))),
    g: Tn(hl(i + n * (Ms(vn(t.g)) - i))),
    b: Tn(hl(r + n * (Ms(vn(t.b)) - r))),
    a: e.a + n * (t.a - e.a)
  };
}
function lo(e, t, n) {
  if (e) {
    let s = Ua(e);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * n, t === 0 ? 360 : 1)), s = Xa(s), e.r = s[0], e.g = s[1], e.b = s[2];
  }
}
function s1(e, t) {
  return e && Object.assign(t || {}, e);
}
function Rh(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = Tn(e[3]))) : (t = s1(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = Tn(t.a)), t;
}
function h0(e) {
  return e.charAt(0) === "r" ? l0(e) : e0(e);
}
let i1 = class sa {
  constructor(t) {
    if (t instanceof sa)
      return t;
    const n = typeof t;
    let s;
    n === "object" ? s = Rh(t) : n === "string" && (s = Y3(t) || o0(t) || h0(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = s1(this._rgb);
    return t && (t.a = vn(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Rh(t);
  }
  rgbString() {
    return this._valid ? a0(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? G3(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? s0(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const s = this.rgb, i = t.rgb;
      let r;
      const o = n === r ? 0.5 : n, l = 2 * o - 1, a = s.a - i.a, c = ((l * a === -1 ? l : (l + a) / (1 + l * a)) + 1) / 2;
      r = 1 - c, s.r = 255 & c * s.r + r * i.r + 0.5, s.g = 255 & c * s.g + r * i.g + 0.5, s.b = 255 & c * s.b + r * i.b + 0.5, s.a = o * s.a + (1 - o) * i.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = c0(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new sa(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Tn(t), this;
  }
  clearer(t) {
    const n = this._rgb;
    return n.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, n = Xi(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = n, this;
  }
  opaquer(t) {
    const n = this._rgb;
    return n.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return lo(this._rgb, 2, t), this;
  }
  darken(t) {
    return lo(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return lo(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return lo(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return n0(this._rgb, t), this;
  }
};
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function un() {
}
const d0 = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function bt(e) {
  return e == null;
}
function Dt(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function ut(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function Ut(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function Ye(e, t) {
  return Ut(e) ? e : t;
}
function pt(e, t) {
  return typeof e > "u" ? t : e;
}
const u0 = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t, o1 = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function Rt(e, t, n) {
  if (e && typeof e.call == "function")
    return e.apply(n, t);
}
function Ct(e, t, n, s) {
  let i, r, o;
  if (Dt(e))
    for (r = e.length, i = 0; i < r; i++)
      t.call(n, e[i], i);
  else if (ut(e))
    for (o = Object.keys(e), r = o.length, i = 0; i < r; i++)
      t.call(n, e[o[i]], o[i]);
}
function rr(e, t) {
  let n, s, i, r;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (n = 0, s = e.length; n < s; ++n)
    if (i = e[n], r = t[n], i.datasetIndex !== r.datasetIndex || i.index !== r.index)
      return !1;
  return !0;
}
function lr(e) {
  if (Dt(e))
    return e.map(lr);
  if (ut(e)) {
    const t = /* @__PURE__ */ Object.create(null), n = Object.keys(e), s = n.length;
    let i = 0;
    for (; i < s; ++i)
      t[n[i]] = lr(e[n[i]]);
    return t;
  }
  return e;
}
function r1(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function f0(e, t, n, s) {
  if (!r1(e))
    return;
  const i = t[e], r = n[e];
  ut(i) && ut(r) ? Ri(i, r, s) : t[e] = lr(r);
}
function Ri(e, t, n) {
  const s = Dt(t) ? t : [
    t
  ], i = s.length;
  if (!ut(e))
    return e;
  n = n || {};
  const r = n.merger || f0;
  let o;
  for (let l = 0; l < i; ++l) {
    if (o = s[l], !ut(o))
      continue;
    const a = Object.keys(o);
    for (let c = 0, h = a.length; c < h; ++c)
      r(a[c], e, o, n);
  }
  return e;
}
function _i(e, t) {
  return Ri(e, t, {
    merger: p0
  });
}
function p0(e, t, n) {
  if (!r1(e))
    return;
  const s = t[e], i = n[e];
  ut(s) && ut(i) ? _i(s, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = lr(i));
}
const Th = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function g0(e) {
  const t = e.split("."), n = [];
  let s = "";
  for (const i of t)
    s += i, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (n.push(s), s = "");
  return n;
}
function m0(e) {
  const t = g0(e);
  return (n) => {
    for (const s of t) {
      if (s === "")
        break;
      n = n && n[s];
    }
    return n;
  };
}
function Fn(e, t) {
  return (Th[t] || (Th[t] = m0(t)))(e);
}
function Ka(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Bs = (e) => typeof e < "u", In = (e) => typeof e == "function", Lh = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
};
function b0(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Pt = Math.PI, Nt = 2 * Pt, v0 = Nt + Pt, ar = Number.POSITIVE_INFINITY, y0 = Pt / 180, Lt = Pt / 2, Yn = Pt / 4, Fh = Pt * 2 / 3, l1 = Math.log10, en = Math.sign;
function Mi(e, t, n) {
  return Math.abs(e - t) < n;
}
function Ih(e) {
  const t = Math.round(e);
  e = Mi(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(l1(e))), s = e / n;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * n;
}
function x0(e) {
  const t = [], n = Math.sqrt(e);
  let s;
  for (s = 1; s < n; s++)
    e % s === 0 && (t.push(s), t.push(e / s));
  return n === (n | 0) && t.push(n), t.sort((i, r) => i - r).pop(), t;
}
function w0(e) {
  return typeof e == "symbol" || typeof e == "object" && e !== null && !(Symbol.toPrimitive in e || "toString" in e || "valueOf" in e);
}
function gs(e) {
  return !w0(e) && !isNaN(parseFloat(e)) && isFinite(e);
}
function k0(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function _0(e, t, n) {
  let s, i, r;
  for (s = 0, i = e.length; s < i; s++)
    r = e[s][n], isNaN(r) || (t.min = Math.min(t.min, r), t.max = Math.max(t.max, r));
}
function Qe(e) {
  return e * (Pt / 180);
}
function Ja(e) {
  return e * (180 / Pt);
}
function Vh(e) {
  if (!Ut(e))
    return;
  let t = 1, n = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, n++;
  return n;
}
function a1(e, t) {
  const n = t.x - e.x, s = t.y - e.y, i = Math.sqrt(n * n + s * s);
  let r = Math.atan2(s, n);
  return r < -0.5 * Pt && (r += Nt), {
    angle: r,
    distance: i
  };
}
function ia(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function M0(e, t) {
  return (e - t + v0) % Nt - Pt;
}
function Jt(e) {
  return (e % Nt + Nt) % Nt;
}
function Ti(e, t, n, s) {
  const i = Jt(e), r = Jt(t), o = Jt(n), l = Jt(r - i), a = Jt(o - i), c = Jt(i - r), h = Jt(i - o);
  return i === r || i === o || s && r === o || l > a && c < h;
}
function Qt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function C0(e) {
  return Qt(e, -32768, 32767);
}
function Li(e, t, n, s = 1e-6) {
  return e >= Math.min(t, n) - s && e <= Math.max(t, n) + s;
}
function Za(e, t, n) {
  n = n || ((o) => e[o] < t);
  let s = e.length - 1, i = 0, r;
  for (; s - i > 1; )
    r = i + s >> 1, n(r) ? i = r : s = r;
  return {
    lo: i,
    hi: s
  };
}
const es = (e, t, n, s) => Za(e, n, s ? (i) => {
  const r = e[i][t];
  return r < n || r === n && e[i + 1][t] === n;
} : (i) => e[i][t] < n), P0 = (e, t, n) => Za(e, n, (s) => e[s][t] >= n);
function S0(e, t, n) {
  let s = 0, i = e.length;
  for (; s < i && e[s] < t; )
    s++;
  for (; i > s && e[i - 1] > n; )
    i--;
  return s > 0 || i < e.length ? e.slice(s, i) : e;
}
const c1 = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function E0(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), c1.forEach((n) => {
    const s = "_onData" + Ka(n), i = e[n];
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      value(...r) {
        const o = i.apply(this, r);
        return e._chartjs.listeners.forEach((l) => {
          typeof l[s] == "function" && l[s](...r);
        }), o;
      }
    });
  });
}
function Bh(e, t) {
  const n = e._chartjs;
  if (!n)
    return;
  const s = n.listeners, i = s.indexOf(t);
  i !== -1 && s.splice(i, 1), !(s.length > 0) && (c1.forEach((r) => {
    delete e[r];
  }), delete e._chartjs);
}
function h1(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const d1 = (function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
})();
function u1(e, t) {
  let n = [], s = !1;
  return function(...i) {
    n = i, s || (s = !0, d1.call(window, () => {
      s = !1, e.apply(t, n);
    }));
  };
}
function D0(e, t) {
  let n;
  return function(...s) {
    return t ? (clearTimeout(n), n = setTimeout(e, t, s)) : e.apply(this, s), t;
  };
}
const A0 = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", $h = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2;
function f1(e, t, n) {
  const s = t.length;
  let i = 0, r = s;
  if (e._sorted) {
    const { iScale: o, vScale: l, _parsed: a } = e, c = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null, h = o.axis, { min: d, max: u, minDefined: f, maxDefined: m } = o.getUserBounds();
    if (f) {
      if (i = Math.min(
        // @ts-expect-error Need to type _parsed
        es(a, h, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        n ? s : es(t, h, o.getPixelForValue(d)).lo
      ), c) {
        const p = a.slice(0, i + 1).reverse().findIndex((b) => !bt(b[l.axis]));
        i -= Math.max(0, p);
      }
      i = Qt(i, 0, s - 1);
    }
    if (m) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        es(a, o.axis, u, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        n ? 0 : es(t, h, o.getPixelForValue(u), !0).hi + 1
      );
      if (c) {
        const b = a.slice(p - 1).findIndex((v) => !bt(v[l.axis]));
        p += Math.max(0, b);
      }
      r = Qt(p, i, s) - i;
    } else
      r = s - i;
  }
  return {
    start: i,
    count: r
  };
}
function p1(e) {
  const { xScale: t, yScale: n, _scaleRanges: s } = e, i = {
    xmin: t.min,
    xmax: t.max,
    ymin: n.min,
    ymax: n.max
  };
  if (!s)
    return e._scaleRanges = i, !0;
  const r = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== n.min || s.ymax !== n.max;
  return Object.assign(s, i), r;
}
const ao = (e) => e === 0 || e === 1, Hh = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * Nt / n)), zh = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * Nt / n) + 1, Ci = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => -e * (e - 2),
  easeInOutQuad: (e) => (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => (e -= 1) * e * e + 1,
  easeInOutCubic: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
  easeInOutQuart: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
  easeInOutQuint: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
  easeInSine: (e) => -Math.cos(e * Lt) + 1,
  easeOutSine: (e) => Math.sin(e * Lt),
  easeInOutSine: (e) => -0.5 * (Math.cos(Pt * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => ao(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => ao(e) ? e : Hh(e, 0.075, 0.3),
  easeOutElastic: (e) => ao(e) ? e : zh(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return ao(e) ? e : e < 0.5 ? 0.5 * Hh(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * zh(e * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(e) {
    return e * e * ((1.70158 + 1) * e - 1.70158);
  },
  easeOutBack(e) {
    return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
  },
  easeInOutBack(e) {
    let t = 1.70158;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  },
  easeInBounce: (e) => 1 - Ci.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? Ci.easeInBounce(e * 2) * 0.5 : Ci.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function Qa(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function jh(e) {
  return Qa(e) ? e : new i1(e);
}
function dl(e) {
  return Qa(e) ? e : new i1(e).saturate(0.5).darken(0.1).hexString();
}
const N0 = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], O0 = [
  "color",
  "borderColor",
  "backgroundColor"
];
function R0(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), e.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), e.set("animations", {
    colors: {
      type: "color",
      properties: O0
    },
    numbers: {
      type: "number",
      properties: N0
    }
  }), e.describe("animations", {
    _fallback: "animation"
  }), e.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function T0(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Wh = /* @__PURE__ */ new Map();
function L0(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let s = Wh.get(n);
  return s || (s = new Intl.NumberFormat(e, t), Wh.set(n, s)), s;
}
function tc(e, t, n) {
  return L0(t, n).format(e);
}
const F0 = {
  values(e) {
    return Dt(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0)
      return "0";
    const s = this.chart.options.locale;
    let i, r = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), r = I0(e, n);
    }
    const o = l1(Math.abs(r)), l = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0), a = {
      notation: i,
      minimumFractionDigits: l,
      maximumFractionDigits: l
    };
    return Object.assign(a, this.options.ticks.format), tc(e, s, a);
  }
};
function I0(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var ec = {
  formatters: F0
};
function V0(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: ec.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), e.describe("scales", {
    _fallback: "scale"
  }), e.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const ms = /* @__PURE__ */ Object.create(null), oa = /* @__PURE__ */ Object.create(null);
function Pi(e, t) {
  if (!t)
    return e;
  const n = t.split(".");
  for (let s = 0, i = n.length; s < i; ++s) {
    const r = n[s];
    e = e[r] || (e[r] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function ul(e, t, n) {
  return typeof t == "string" ? Ri(Pi(e, t), n) : Ri(Pi(e, ""), t);
}
class B0 {
  constructor(t, n) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (s, i) => dl(i.backgroundColor), this.hoverBorderColor = (s, i) => dl(i.borderColor), this.hoverColor = (s, i) => dl(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(n);
  }
  set(t, n) {
    return ul(this, t, n);
  }
  get(t) {
    return Pi(this, t);
  }
  describe(t, n) {
    return ul(oa, t, n);
  }
  override(t, n) {
    return ul(ms, t, n);
  }
  route(t, n, s, i) {
    const r = Pi(this, t), o = Pi(this, s), l = "_" + n;
    Object.defineProperties(r, {
      [l]: {
        value: r[n],
        writable: !0
      },
      [n]: {
        enumerable: !0,
        get() {
          const a = this[l], c = o[i];
          return ut(a) ? Object.assign({}, c, a) : pt(a, c);
        },
        set(a) {
          this[l] = a;
        }
      }
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var Ft = /* @__PURE__ */ new B0({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  R0,
  T0,
  V0
]);
function $0(e) {
  return !e || bt(e.size) || bt(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function cr(e, t, n, s, i) {
  let r = t[i];
  return r || (r = t[i] = e.measureText(i).width, n.push(i)), r > s && (s = r), s;
}
function H0(e, t, n, s) {
  s = s || {};
  let i = s.data = s.data || {}, r = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (i = s.data = {}, r = s.garbageCollect = [], s.font = t), e.save(), e.font = t;
  let o = 0;
  const l = n.length;
  let a, c, h, d, u;
  for (a = 0; a < l; a++)
    if (d = n[a], d != null && !Dt(d))
      o = cr(e, i, r, o, d);
    else if (Dt(d))
      for (c = 0, h = d.length; c < h; c++)
        u = d[c], u != null && !Dt(u) && (o = cr(e, i, r, o, u));
  e.restore();
  const f = r.length / 2;
  if (f > n.length) {
    for (a = 0; a < f; a++)
      delete i[r[a]];
    r.splice(0, f);
  }
  return o;
}
function Un(e, t, n) {
  const s = e.currentDevicePixelRatio, i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - i) * s) / s + i;
}
function qh(e, t) {
  !t && !e || (t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function ra(e, t, n, s) {
  z0(e, t, n, s);
}
function z0(e, t, n, s, i) {
  let r, o, l, a, c, h, d, u;
  const f = t.pointStyle, m = t.rotation, p = t.radius;
  let b = (m || 0) * y0;
  if (f && typeof f == "object" && (r = f.toString(), r === "[object HTMLImageElement]" || r === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(n, s), e.rotate(b), e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), e.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (e.beginPath(), f) {
      // Default includes circle
      default:
        e.arc(n, s, p, 0, Nt), e.closePath();
        break;
      case "triangle":
        h = p, e.moveTo(n + Math.sin(b) * h, s - Math.cos(b) * p), b += Fh, e.lineTo(n + Math.sin(b) * h, s - Math.cos(b) * p), b += Fh, e.lineTo(n + Math.sin(b) * h, s - Math.cos(b) * p), e.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, a = p - c, o = Math.cos(b + Yn) * a, d = Math.cos(b + Yn) * a, l = Math.sin(b + Yn) * a, u = Math.sin(b + Yn) * a, e.arc(n - d, s - l, c, b - Pt, b - Lt), e.arc(n + u, s - o, c, b - Lt, b), e.arc(n + d, s + l, c, b, b + Lt), e.arc(n - u, s + o, c, b + Lt, b + Pt), e.closePath();
        break;
      case "rect":
        if (!m) {
          a = Math.SQRT1_2 * p, h = a, e.rect(n - h, s - a, 2 * h, 2 * a);
          break;
        }
        b += Yn;
      /* falls through */
      case "rectRot":
        d = Math.cos(b) * p, o = Math.cos(b) * p, l = Math.sin(b) * p, u = Math.sin(b) * p, e.moveTo(n - d, s - l), e.lineTo(n + u, s - o), e.lineTo(n + d, s + l), e.lineTo(n - u, s + o), e.closePath();
        break;
      case "crossRot":
        b += Yn;
      /* falls through */
      case "cross":
        d = Math.cos(b) * p, o = Math.cos(b) * p, l = Math.sin(b) * p, u = Math.sin(b) * p, e.moveTo(n - d, s - l), e.lineTo(n + d, s + l), e.moveTo(n + u, s - o), e.lineTo(n - u, s + o);
        break;
      case "star":
        d = Math.cos(b) * p, o = Math.cos(b) * p, l = Math.sin(b) * p, u = Math.sin(b) * p, e.moveTo(n - d, s - l), e.lineTo(n + d, s + l), e.moveTo(n + u, s - o), e.lineTo(n - u, s + o), b += Yn, d = Math.cos(b) * p, o = Math.cos(b) * p, l = Math.sin(b) * p, u = Math.sin(b) * p, e.moveTo(n - d, s - l), e.lineTo(n + d, s + l), e.moveTo(n + u, s - o), e.lineTo(n - u, s + o);
        break;
      case "line":
        o = Math.cos(b) * p, l = Math.sin(b) * p, e.moveTo(n - o, s - l), e.lineTo(n + o, s + l);
        break;
      case "dash":
        e.moveTo(n, s), e.lineTo(n + Math.cos(b) * p, s + Math.sin(b) * p);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function wn(e, t, n) {
  return n = n || 0.5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function zr(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function jr(e) {
  e.restore();
}
function j0(e, t, n, s, i) {
  if (!t)
    return e.lineTo(n.x, n.y);
  if (i === "middle") {
    const r = (t.x + n.x) / 2;
    e.lineTo(r, t.y), e.lineTo(r, n.y);
  } else i === "after" != !!s ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function W0(e, t, n, s) {
  if (!t)
    return e.lineTo(n.x, n.y);
  e.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? n.cp2x : n.cp1x, s ? n.cp2y : n.cp1y, n.x, n.y);
}
function q0(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), bt(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function Y0(e, t, n, s, i) {
  if (i.strikethrough || i.underline) {
    const r = e.measureText(s), o = t - r.actualBoundingBoxLeft, l = t + r.actualBoundingBoxRight, a = n - r.actualBoundingBoxAscent, c = n + r.actualBoundingBoxDescent, h = i.strikethrough ? (a + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(o, h), e.lineTo(l, h), e.stroke();
  }
}
function U0(e, t) {
  const n = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function hr(e, t, n, s, i, r = {}) {
  const o = Dt(t) ? t : [
    t
  ], l = r.strokeWidth > 0 && r.strokeColor !== "";
  let a, c;
  for (e.save(), e.font = i.string, q0(e, r), a = 0; a < o.length; ++a)
    c = o[a], r.backdrop && U0(e, r.backdrop), l && (r.strokeColor && (e.strokeStyle = r.strokeColor), bt(r.strokeWidth) || (e.lineWidth = r.strokeWidth), e.strokeText(c, n, s, r.maxWidth)), e.fillText(c, n, s, r.maxWidth), Y0(e, n, s, c, r), s += Number(i.lineHeight);
  e.restore();
}
function Fi(e, t) {
  const { x: n, y: s, w: i, h: r, radius: o } = t;
  e.arc(n + o.topLeft, s + o.topLeft, o.topLeft, 1.5 * Pt, Pt, !0), e.lineTo(n, s + r - o.bottomLeft), e.arc(n + o.bottomLeft, s + r - o.bottomLeft, o.bottomLeft, Pt, Lt, !0), e.lineTo(n + i - o.bottomRight, s + r), e.arc(n + i - o.bottomRight, s + r - o.bottomRight, o.bottomRight, Lt, 0, !0), e.lineTo(n + i, s + o.topRight), e.arc(n + i - o.topRight, s + o.topRight, o.topRight, 0, -Lt, !0), e.lineTo(n + o.topLeft, s);
}
const G0 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, X0 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function K0(e, t) {
  const n = ("" + e).match(G0);
  if (!n || n[1] === "normal")
    return t * 1.2;
  switch (e = +n[2], n[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const J0 = (e) => +e || 0;
function nc(e, t) {
  const n = {}, s = ut(t), i = s ? Object.keys(t) : t, r = ut(e) ? s ? (o) => pt(e[o], e[t[o]]) : (o) => e[o] : () => e;
  for (const o of i)
    n[o] = J0(r(o));
  return n;
}
function sc(e) {
  return nc(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function cs(e) {
  return nc(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Ee(e) {
  const t = sc(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function jt(e, t) {
  e = e || {}, t = t || Ft.font;
  let n = pt(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let s = pt(e.style, t.style);
  s && !("" + s).match(X0) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const i = {
    family: pt(e.family, t.family),
    lineHeight: K0(pt(e.lineHeight, t.lineHeight), n),
    size: n,
    style: s,
    weight: pt(e.weight, t.weight),
    string: ""
  };
  return i.string = $0(i), i;
}
function co(e, t, n, s) {
  let i, r, o;
  for (i = 0, r = e.length; i < r; ++i)
    if (o = e[i], o !== void 0 && o !== void 0)
      return o;
}
function Z0(e, t, n) {
  const { min: s, max: i } = e, r = o1(t, (i - s) / 2), o = (l, a) => n && l === 0 ? 0 : l + a;
  return {
    min: o(s, -Math.abs(r)),
    max: o(i, r)
  };
}
function Vn(e, t) {
  return Object.assign(Object.create(e), t);
}
function ic(e, t = [
  ""
], n, s, i = () => e[0]) {
  const r = n || e;
  typeof s > "u" && (s = v1("_fallback", e));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: r,
    _fallback: s,
    _getTarget: i,
    override: (l) => ic([
      l,
      ...e
    ], t, r, s)
  };
  return new Proxy(o, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(l, a) {
      return delete l[a], delete l._keys, delete e[0][a], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(l, a) {
      return m1(l, a, () => rb(a, t, e, l));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(l, a) {
      return Reflect.getOwnPropertyDescriptor(l._scopes[0], a);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(l, a) {
      return Uh(l).includes(a);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(l) {
      return Uh(l);
    },
    /**
    * A trap for setting property values.
    */
    set(l, a, c) {
      const h = l._storage || (l._storage = i());
      return l[a] = h[a] = c, delete l._keys, !0;
    }
  });
}
function $s(e, t, n, s) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: g1(e, s),
    setContext: (r) => $s(e, r, n, s),
    override: (r) => $s(e.override(r), t, n, s)
  };
  return new Proxy(i, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(r, o) {
      return delete r[o], delete e[o], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(r, o, l) {
      return m1(r, o, () => tb(r, o, l));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(r, o) {
      return r._descriptors.allKeys ? Reflect.has(e, o) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(e, o);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    /**
    * A trap for the in operator.
    */
    has(r, o) {
      return Reflect.has(e, o);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    /**
    * A trap for setting property values.
    */
    set(r, o, l) {
      return e[o] = l, delete r[o], !0;
    }
  });
}
function g1(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: n = t.scriptable, _indexable: s = t.indexable, _allKeys: i = t.allKeys } = e;
  return {
    allKeys: i,
    scriptable: n,
    indexable: s,
    isScriptable: In(n) ? n : () => n,
    isIndexable: In(s) ? s : () => s
  };
}
const Q0 = (e, t) => e ? e + Ka(t) : t, oc = (e, t) => ut(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function m1(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const s = n();
  return e[t] = s, s;
}
function tb(e, t, n) {
  const { _proxy: s, _context: i, _subProxy: r, _descriptors: o } = e;
  let l = s[t];
  return In(l) && o.isScriptable(t) && (l = eb(t, l, e, n)), Dt(l) && l.length && (l = nb(t, l, e, o.isIndexable)), oc(t, l) && (l = $s(l, i, r && r[t], o)), l;
}
function eb(e, t, n, s) {
  const { _proxy: i, _context: r, _subProxy: o, _stack: l } = n;
  if (l.has(e))
    throw new Error("Recursion detected: " + Array.from(l).join("->") + "->" + e);
  l.add(e);
  let a = t(r, o || s);
  return l.delete(e), oc(e, a) && (a = rc(i._scopes, i, e, a)), a;
}
function nb(e, t, n, s) {
  const { _proxy: i, _context: r, _subProxy: o, _descriptors: l } = n;
  if (typeof r.index < "u" && s(e))
    return t[r.index % t.length];
  if (ut(t[0])) {
    const a = t, c = i._scopes.filter((h) => h !== a);
    t = [];
    for (const h of a) {
      const d = rc(c, i, e, h);
      t.push($s(d, r, o && o[e], l));
    }
  }
  return t;
}
function b1(e, t, n) {
  return In(e) ? e(t, n) : e;
}
const sb = (e, t) => e === !0 ? t : typeof e == "string" ? Fn(t, e) : void 0;
function ib(e, t, n, s, i) {
  for (const r of t) {
    const o = sb(n, r);
    if (o) {
      e.add(o);
      const l = b1(o._fallback, n, i);
      if (typeof l < "u" && l !== n && l !== s)
        return l;
    } else if (o === !1 && typeof s < "u" && n !== s)
      return null;
  }
  return !1;
}
function rc(e, t, n, s) {
  const i = t._rootScopes, r = b1(t._fallback, n, s), o = [
    ...e,
    ...i
  ], l = /* @__PURE__ */ new Set();
  l.add(s);
  let a = Yh(l, o, n, r || n, s);
  return a === null || typeof r < "u" && r !== n && (a = Yh(l, o, r, a, s), a === null) ? !1 : ic(Array.from(l), [
    ""
  ], i, r, () => ob(t, n, s));
}
function Yh(e, t, n, s, i) {
  for (; n; )
    n = ib(e, t, n, s, i);
  return n;
}
function ob(e, t, n) {
  const s = e._getTarget();
  t in s || (s[t] = {});
  const i = s[t];
  return Dt(i) && ut(n) ? n : i || {};
}
function rb(e, t, n, s) {
  let i;
  for (const r of t)
    if (i = v1(Q0(r, e), n), typeof i < "u")
      return oc(e, i) ? rc(n, s, e, i) : i;
}
function v1(e, t) {
  for (const n of t) {
    if (!n)
      continue;
    const s = n[e];
    if (typeof s < "u")
      return s;
  }
}
function Uh(e) {
  let t = e._keys;
  return t || (t = e._keys = lb(e._scopes)), t;
}
function lb(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const s of Object.keys(n).filter((i) => !i.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function ab(e, t, n, s) {
  const { iScale: i } = e, { key: r = "r" } = this._parsing, o = new Array(s);
  let l, a, c, h;
  for (l = 0, a = s; l < a; ++l)
    c = l + n, h = t[c], o[l] = {
      r: i.parse(Fn(h, r), c)
    };
  return o;
}
const cb = Number.EPSILON || 1e-14, Hs = (e, t) => t < e.length && !e[t].skip && e[t], y1 = (e) => e === "x" ? "y" : "x";
function hb(e, t, n, s) {
  const i = e.skip ? t : e, r = t, o = n.skip ? t : n, l = ia(r, i), a = ia(o, r);
  let c = l / (l + a), h = a / (l + a);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = s * c, u = s * h;
  return {
    previous: {
      x: r.x - d * (o.x - i.x),
      y: r.y - d * (o.y - i.y)
    },
    next: {
      x: r.x + u * (o.x - i.x),
      y: r.y + u * (o.y - i.y)
    }
  };
}
function db(e, t, n) {
  const s = e.length;
  let i, r, o, l, a, c = Hs(e, 0);
  for (let h = 0; h < s - 1; ++h)
    if (a = c, c = Hs(e, h + 1), !(!a || !c)) {
      if (Mi(t[h], 0, cb)) {
        n[h] = n[h + 1] = 0;
        continue;
      }
      i = n[h] / t[h], r = n[h + 1] / t[h], l = Math.pow(i, 2) + Math.pow(r, 2), !(l <= 9) && (o = 3 / Math.sqrt(l), n[h] = i * o * t[h], n[h + 1] = r * o * t[h]);
    }
}
function ub(e, t, n = "x") {
  const s = y1(n), i = e.length;
  let r, o, l, a = Hs(e, 0);
  for (let c = 0; c < i; ++c) {
    if (o = l, l = a, a = Hs(e, c + 1), !l)
      continue;
    const h = l[n], d = l[s];
    o && (r = (h - o[n]) / 3, l[`cp1${n}`] = h - r, l[`cp1${s}`] = d - r * t[c]), a && (r = (a[n] - h) / 3, l[`cp2${n}`] = h + r, l[`cp2${s}`] = d + r * t[c]);
  }
}
function fb(e, t = "x") {
  const n = y1(t), s = e.length, i = Array(s).fill(0), r = Array(s);
  let o, l, a, c = Hs(e, 0);
  for (o = 0; o < s; ++o)
    if (l = a, a = c, c = Hs(e, o + 1), !!a) {
      if (c) {
        const h = c[t] - a[t];
        i[o] = h !== 0 ? (c[n] - a[n]) / h : 0;
      }
      r[o] = l ? c ? en(i[o - 1]) !== en(i[o]) ? 0 : (i[o - 1] + i[o]) / 2 : i[o - 1] : i[o];
    }
  db(e, i, r), ub(e, r, t);
}
function ho(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function pb(e, t) {
  let n, s, i, r, o, l = wn(e[0], t);
  for (n = 0, s = e.length; n < s; ++n)
    o = r, r = l, l = n < s - 1 && wn(e[n + 1], t), r && (i = e[n], o && (i.cp1x = ho(i.cp1x, t.left, t.right), i.cp1y = ho(i.cp1y, t.top, t.bottom)), l && (i.cp2x = ho(i.cp2x, t.left, t.right), i.cp2y = ho(i.cp2y, t.top, t.bottom)));
}
function gb(e, t, n, s, i) {
  let r, o, l, a;
  if (t.spanGaps && (e = e.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    fb(e, i);
  else {
    let c = s ? e[e.length - 1] : e[0];
    for (r = 0, o = e.length; r < o; ++r)
      l = e[r], a = hb(c, l, e[Math.min(r + 1, o - (s ? 0 : 1)) % o], t.tension), l.cp1x = a.previous.x, l.cp1y = a.previous.y, l.cp2x = a.next.x, l.cp2y = a.next.y, c = l;
  }
  t.capBezierPoints && pb(e, n);
}
function lc() {
  return typeof window < "u" && typeof document < "u";
}
function ac(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function dr(e, t, n) {
  let s;
  return typeof e == "string" ? (s = parseInt(e, 10), e.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[n])) : s = e, s;
}
const Wr = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function mb(e, t) {
  return Wr(e).getPropertyValue(t);
}
const bb = [
  "top",
  "right",
  "bottom",
  "left"
];
function hs(e, t, n) {
  const s = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const r = bb[i];
    s[r] = parseFloat(e[t + "-" + r + n]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const vb = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function yb(e, t) {
  const n = e.touches, s = n && n.length ? n[0] : e, { offsetX: i, offsetY: r } = s;
  let o = !1, l, a;
  if (vb(i, r, e.target))
    l = i, a = r;
  else {
    const c = t.getBoundingClientRect();
    l = s.clientX - c.left, a = s.clientY - c.top, o = !0;
  }
  return {
    x: l,
    y: a,
    box: o
  };
}
function Jn(e, t) {
  if ("native" in e)
    return e;
  const { canvas: n, currentDevicePixelRatio: s } = t, i = Wr(n), r = i.boxSizing === "border-box", o = hs(i, "padding"), l = hs(i, "border", "width"), { x: a, y: c, box: h } = yb(e, n), d = o.left + (h && l.left), u = o.top + (h && l.top);
  let { width: f, height: m } = t;
  return r && (f -= o.width + l.width, m -= o.height + l.height), {
    x: Math.round((a - d) / f * n.width / s),
    y: Math.round((c - u) / m * n.height / s)
  };
}
function xb(e, t, n) {
  let s, i;
  if (t === void 0 || n === void 0) {
    const r = e && ac(e);
    if (!r)
      t = e.clientWidth, n = e.clientHeight;
    else {
      const o = r.getBoundingClientRect(), l = Wr(r), a = hs(l, "border", "width"), c = hs(l, "padding");
      t = o.width - c.width - a.width, n = o.height - c.height - a.height, s = dr(l.maxWidth, r, "clientWidth"), i = dr(l.maxHeight, r, "clientHeight");
    }
  }
  return {
    width: t,
    height: n,
    maxWidth: s || ar,
    maxHeight: i || ar
  };
}
const uo = (e) => Math.round(e * 10) / 10;
function wb(e, t, n, s) {
  const i = Wr(e), r = hs(i, "margin"), o = dr(i.maxWidth, e, "clientWidth") || ar, l = dr(i.maxHeight, e, "clientHeight") || ar, a = xb(e, t, n);
  let { width: c, height: h } = a;
  if (i.boxSizing === "content-box") {
    const u = hs(i, "border", "width"), f = hs(i, "padding");
    c -= f.width + u.width, h -= f.height + u.height;
  }
  return c = Math.max(0, c - r.width), h = Math.max(0, s ? c / s : h - r.height), c = uo(Math.min(c, o, a.maxWidth)), h = uo(Math.min(h, l, a.maxHeight)), c && !h && (h = uo(c / 2)), (t !== void 0 || n !== void 0) && s && a.height && h > a.height && (h = a.height, c = uo(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function Gh(e, t, n) {
  const s = t || 1, i = Math.floor(e.height * s), r = Math.floor(e.width * s);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const o = e.canvas;
  return o.style && (n || !o.style.height && !o.style.width) && (o.style.height = `${e.height}px`, o.style.width = `${e.width}px`), e.currentDevicePixelRatio !== s || o.height !== i || o.width !== r ? (e.currentDevicePixelRatio = s, o.height = i, o.width = r, e.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const kb = (function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    lc() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
})();
function Xh(e, t) {
  const n = mb(e, t), s = n && n.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Zn(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y: e.y + n * (t.y - e.y)
  };
}
function _b(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y: s === "middle" ? n < 0.5 ? e.y : t.y : s === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
  };
}
function Mb(e, t, n, s) {
  const i = {
    x: e.cp2x,
    y: e.cp2y
  }, r = {
    x: t.cp1x,
    y: t.cp1y
  }, o = Zn(e, i, n), l = Zn(i, r, n), a = Zn(r, t, n), c = Zn(o, l, n), h = Zn(l, a, n);
  return Zn(c, h, n);
}
const Cb = function(e, t) {
  return {
    x(n) {
      return e + e + t - n;
    },
    setWidth(n) {
      t = n;
    },
    textAlign(n) {
      return n === "center" ? n : n === "right" ? "left" : "right";
    },
    xPlus(n, s) {
      return n - s;
    },
    leftForLtr(n, s) {
      return n - s;
    }
  };
}, Pb = function() {
  return {
    x(e) {
      return e;
    },
    setWidth(e) {
    },
    textAlign(e) {
      return e;
    },
    xPlus(e, t) {
      return e + t;
    },
    leftForLtr(e, t) {
      return e;
    }
  };
};
function fl(e, t, n) {
  return e ? Cb(t, n) : Pb();
}
function Sb(e, t) {
  let n, s;
  (t === "ltr" || t === "rtl") && (n = e.canvas.style, s = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", t, "important"), e.prevTextDirection = s);
}
function Eb(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
function x1(e) {
  return e === "angle" ? {
    between: Ti,
    compare: M0,
    normalize: Jt
  } : {
    between: Li,
    compare: (t, n) => t - n,
    normalize: (t) => t
  };
}
function Kh({ start: e, end: t, count: n, loop: s, style: i }) {
  return {
    start: e % n,
    end: t % n,
    loop: s && (t - e + 1) % n === 0,
    style: i
  };
}
function Db(e, t, n) {
  const { property: s, start: i, end: r } = n, { between: o, normalize: l } = x1(s), a = t.length;
  let { start: c, end: h, loop: d } = e, u, f;
  if (d) {
    for (c += a, h += a, u = 0, f = a; u < f && o(l(t[c % a][s]), i, r); ++u)
      c--, h--;
    c %= a, h %= a;
  }
  return h < c && (h += a), {
    start: c,
    end: h,
    loop: d,
    style: e.style
  };
}
function w1(e, t, n) {
  if (!n)
    return [
      e
    ];
  const { property: s, start: i, end: r } = n, o = t.length, { compare: l, between: a, normalize: c } = x1(s), { start: h, end: d, loop: u, style: f } = Db(e, t, n), m = [];
  let p = !1, b = null, v, x, C;
  const S = () => a(i, C, v) && l(i, C) !== 0, w = () => l(r, v) === 0 || a(r, C, v), D = () => p || S(), _ = () => !p || w();
  for (let E = h, N = h; E <= d; ++E)
    x = t[E % o], !x.skip && (v = c(x[s]), v !== C && (p = a(v, i, r), b === null && D() && (b = l(v, i) === 0 ? E : N), b !== null && _() && (m.push(Kh({
      start: b,
      end: E,
      loop: u,
      count: o,
      style: f
    })), b = null), N = E, C = v));
  return b !== null && m.push(Kh({
    start: b,
    end: d,
    loop: u,
    count: o,
    style: f
  })), m;
}
function k1(e, t) {
  const n = [], s = e.segments;
  for (let i = 0; i < s.length; i++) {
    const r = w1(s[i], e.points, t);
    r.length && n.push(...r);
  }
  return n;
}
function Ab(e, t, n, s) {
  let i = 0, r = t - 1;
  if (n && !s)
    for (; i < t && !e[i].skip; )
      i++;
  for (; i < t && e[i].skip; )
    i++;
  for (i %= t, n && (r += i); r > i && e[r % t].skip; )
    r--;
  return r %= t, {
    start: i,
    end: r
  };
}
function Nb(e, t, n, s) {
  const i = e.length, r = [];
  let o = t, l = e[t], a;
  for (a = t + 1; a <= n; ++a) {
    const c = e[a % i];
    c.skip || c.stop ? l.skip || (s = !1, r.push({
      start: t % i,
      end: (a - 1) % i,
      loop: s
    }), t = o = c.stop ? a : null) : (o = a, l.skip && (t = a)), l = c;
  }
  return o !== null && r.push({
    start: t % i,
    end: o % i,
    loop: s
  }), r;
}
function Ob(e, t) {
  const n = e.points, s = e.options.spanGaps, i = n.length;
  if (!i)
    return [];
  const r = !!e._loop, { start: o, end: l } = Ab(n, i, r, s);
  if (s === !0)
    return Jh(e, [
      {
        start: o,
        end: l,
        loop: r
      }
    ], n, t);
  const a = l < o ? l + i : l, c = !!e._fullLoop && o === 0 && l === i - 1;
  return Jh(e, Nb(n, o, a, c), n, t);
}
function Jh(e, t, n, s) {
  return !s || !s.setContext || !n ? t : Rb(e, t, n, s);
}
function Rb(e, t, n, s) {
  const i = e._chart.getContext(), r = Zh(e.options), { _datasetIndex: o, options: { spanGaps: l } } = e, a = n.length, c = [];
  let h = r, d = t[0].start, u = d;
  function f(m, p, b, v) {
    const x = l ? -1 : 1;
    if (m !== p) {
      for (m += a; n[m % a].skip; )
        m -= x;
      for (; n[p % a].skip; )
        p += x;
      m % a !== p % a && (c.push({
        start: m % a,
        end: p % a,
        loop: b,
        style: v
      }), h = v, d = p % a);
    }
  }
  for (const m of t) {
    d = l ? d : m.start;
    let p = n[d % a], b;
    for (u = d + 1; u <= m.end; u++) {
      const v = n[u % a];
      b = Zh(s.setContext(Vn(i, {
        type: "segment",
        p0: p,
        p1: v,
        p0DataIndex: (u - 1) % a,
        p1DataIndex: u % a,
        datasetIndex: o
      }))), Tb(b, h) && f(d, u - 1, m.loop, h), p = v, h = b;
    }
    d < u - 1 && f(d, u - 1, m.loop, h);
  }
  return c;
}
function Zh(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor
  };
}
function Tb(e, t) {
  if (!t)
    return !1;
  const n = [], s = function(i, r) {
    return Qa(r) ? (n.includes(r) || n.push(r), n.indexOf(r)) : r;
  };
  return JSON.stringify(e, s) !== JSON.stringify(t, s);
}
function fo(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function Lb(e, t) {
  const { xScale: n, yScale: s } = e;
  return n && s ? {
    left: fo(n, t, "left"),
    right: fo(n, t, "right"),
    top: fo(s, t, "top"),
    bottom: fo(s, t, "bottom")
  } : t;
}
function _1(e, t) {
  const n = t._clip;
  if (n.disabled)
    return !1;
  const s = Lb(t, e.chartArea);
  return {
    left: n.left === !1 ? 0 : s.left - (n.left === !0 ? 0 : n.left),
    right: n.right === !1 ? e.width : s.right + (n.right === !0 ? 0 : n.right),
    top: n.top === !1 ? 0 : s.top - (n.top === !0 ? 0 : n.top),
    bottom: n.bottom === !1 ? e.height : s.bottom + (n.bottom === !0 ? 0 : n.bottom)
  };
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class Fb {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, n, s, i) {
    const r = n.listeners[i], o = n.duration;
    r.forEach((l) => l({
      chart: t,
      initial: n.initial,
      numSteps: o,
      currentStep: Math.min(s - n.start, o)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = d1.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((s, i) => {
      if (!s.running || !s.items.length)
        return;
      const r = s.items;
      let o = r.length - 1, l = !1, a;
      for (; o >= 0; --o)
        a = r[o], a._active ? (a._total > s.duration && (s.duration = a._total), a.tick(t), l = !0) : (r[o] = r[r.length - 1], r.pop());
      l && (i.draw(), this._notify(i, s, t, "progress")), r.length || (s.running = !1, this._notify(i, s, t, "complete"), s.initial = !1), n += r.length;
    }), this._lastDate = t, n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let s = n.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, n.set(t, s)), s;
  }
  listen(t, n, s) {
    this._getAnims(t).listeners[n].push(s);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n && (n.running = !0, n.start = Date.now(), n.duration = n.items.reduce((s, i) => Math.max(s, i._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length)
      return;
    const s = n.items;
    let i = s.length - 1;
    for (; i >= 0; --i)
      s[i].cancel();
    n.items = [], this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var pn = /* @__PURE__ */ new Fb();
const Qh = "transparent", Ib = {
  boolean(e, t, n) {
    return n > 0.5 ? t : e;
  },
  color(e, t, n) {
    const s = jh(e || Qh), i = s.valid && jh(t || Qh);
    return i && i.valid ? i.mix(s, n).hexString() : t;
  },
  number(e, t, n) {
    return e + (t - e) * n;
  }
};
class Vb {
  constructor(t, n, s, i) {
    const r = n[s];
    i = co([
      t.to,
      i,
      r,
      t.from
    ]);
    const o = co([
      t.from,
      r,
      i
    ]);
    this._active = !0, this._fn = t.fn || Ib[t.type || typeof o], this._easing = Ci[t.easing] || Ci.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = n, this._prop = s, this._from = o, this._to = i, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, n, s) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop], r = s - this._start, o = this._duration - r;
      this._start = s, this._duration = Math.floor(Math.max(o, t.duration)), this._total += r, this._loop = !!t.loop, this._to = co([
        t.to,
        n,
        i,
        t.from
      ]), this._from = co([
        t.from,
        i,
        n
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const n = t - this._start, s = this._duration, i = this._prop, r = this._from, o = this._loop, l = this._to;
    let a;
    if (this._active = r !== l && (o || n < s), !this._active) {
      this._target[i] = l, this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[i] = r;
      return;
    }
    a = n / s % 2, a = o && a > 1 ? 2 - a : a, a = this._easing(Math.min(1, Math.max(0, a))), this._target[i] = this._fn(r, l, a);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, s) => {
      t.push({
        res: n,
        rej: s
      });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej", s = this._promises || [];
    for (let i = 0; i < s.length; i++)
      s[i][n]();
  }
}
class M1 {
  constructor(t, n) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(n);
  }
  configure(t) {
    if (!ut(t))
      return;
    const n = Object.keys(Ft.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const r = t[i];
      if (!ut(r))
        return;
      const o = {};
      for (const l of n)
        o[l] = r[l];
      (Dt(r.properties) && r.properties || [
        i
      ]).forEach((l) => {
        (l === i || !s.has(l)) && s.set(l, o);
      });
    });
  }
  _animateOptions(t, n) {
    const s = n.options, i = $b(t, s);
    if (!i)
      return [];
    const r = this._createAnimations(i, s);
    return s.$shared && Bb(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), r;
  }
  _createAnimations(t, n) {
    const s = this._properties, i = [], r = t.$animations || (t.$animations = {}), o = Object.keys(n), l = Date.now();
    let a;
    for (a = o.length - 1; a >= 0; --a) {
      const c = o[a];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        i.push(...this._animateOptions(t, n));
        continue;
      }
      const h = n[c];
      let d = r[c];
      const u = s.get(c);
      if (d)
        if (u && d.active()) {
          d.update(u, h, l);
          continue;
        } else
          d.cancel();
      if (!u || !u.duration) {
        t[c] = h;
        continue;
      }
      r[c] = d = new Vb(u, t, c, h), i.push(d);
    }
    return i;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const s = this._createAnimations(t, n);
    if (s.length)
      return pn.add(this._chart, s), !0;
  }
}
function Bb(e, t) {
  const n = [], s = Object.keys(t);
  for (let i = 0; i < s.length; i++) {
    const r = e[s[i]];
    r && r.active() && n.push(r.wait());
  }
  return Promise.all(n);
}
function $b(e, t) {
  if (!t)
    return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return n.$shared && (e.options = n = Object.assign({}, n, {
    $shared: !1,
    $animations: {}
  })), n;
}
function td(e, t) {
  const n = e && e.options || {}, s = n.reverse, i = n.min === void 0 ? t : 0, r = n.max === void 0 ? t : 0;
  return {
    start: s ? r : i,
    end: s ? i : r
  };
}
function Hb(e, t, n) {
  if (n === !1)
    return !1;
  const s = td(e, n), i = td(t, n);
  return {
    top: i.end,
    right: s.end,
    bottom: i.start,
    left: s.start
  };
}
function zb(e) {
  let t, n, s, i;
  return ut(e) ? (t = e.top, n = e.right, s = e.bottom, i = e.left) : t = n = s = i = e, {
    top: t,
    right: n,
    bottom: s,
    left: i,
    disabled: e === !1
  };
}
function C1(e, t) {
  const n = [], s = e._getSortedDatasetMetas(t);
  let i, r;
  for (i = 0, r = s.length; i < r; ++i)
    n.push(s[i].index);
  return n;
}
function ed(e, t, n, s = {}) {
  const i = e.keys, r = s.mode === "single";
  let o, l, a, c;
  if (t === null)
    return;
  let h = !1;
  for (o = 0, l = i.length; o < l; ++o) {
    if (a = +i[o], a === n) {
      if (h = !0, s.all)
        continue;
      break;
    }
    c = e.values[a], Ut(c) && (r || t === 0 || en(t) === en(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function jb(e, t) {
  const { iScale: n, vScale: s } = t, i = n.axis === "x" ? "x" : "y", r = s.axis === "x" ? "x" : "y", o = Object.keys(e), l = new Array(o.length);
  let a, c, h;
  for (a = 0, c = o.length; a < c; ++a)
    h = o[a], l[a] = {
      [i]: h,
      [r]: e[h]
    };
  return l;
}
function pl(e, t) {
  const n = e && e.options.stacked;
  return n || n === void 0 && t.stack !== void 0;
}
function Wb(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function qb(e) {
  const { min: t, max: n, minDefined: s, maxDefined: i } = e.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY
  };
}
function Yb(e, t, n) {
  const s = e[t] || (e[t] = {});
  return s[n] || (s[n] = {});
}
function nd(e, t, n, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const r = e[i.index];
    if (n && r > 0 || !n && r < 0)
      return i.index;
  }
  return null;
}
function sd(e, t) {
  const { chart: n, _cachedMeta: s } = e, i = n._stacks || (n._stacks = {}), { iScale: r, vScale: o, index: l } = s, a = r.axis, c = o.axis, h = Wb(r, o, s), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const m = t[f], { [a]: p, [c]: b } = m, v = m._stacks || (m._stacks = {});
    u = v[c] = Yb(i, h, p), u[l] = b, u._top = nd(u, o, !0, s.type), u._bottom = nd(u, o, !1, s.type);
    const x = u._visualValues || (u._visualValues = {});
    x[l] = b;
  }
}
function gl(e, t) {
  const n = e.scales;
  return Object.keys(n).filter((s) => n[s].axis === t).shift();
}
function Ub(e, t) {
  return Vn(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Gb(e, t, n) {
  return Vn(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data"
  });
}
function si(e, t) {
  const n = e.controller.index, s = e.vScale && e.vScale.axis;
  if (s) {
    t = t || e._parsed;
    for (const i of t) {
      const r = i._stacks;
      if (!r || r[s] === void 0 || r[s][n] === void 0)
        return;
      delete r[s][n], r[s]._visualValues !== void 0 && r[s]._visualValues[n] !== void 0 && delete r[s]._visualValues[n];
    }
  }
}
const ml = (e) => e === "reset" || e === "none", id = (e, t) => t ? e : Object.assign({}, e), Xb = (e, t, n) => e && !t.hidden && t._stacked && {
  keys: C1(n, !0),
  values: null
};
class nn {
  constructor(t, n) {
    this.chart = t, this._ctx = t.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = pl(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && si(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, n = this._cachedMeta, s = this.getDataset(), i = (d, u, f, m) => d === "x" ? u : d === "r" ? m : f, r = n.xAxisID = pt(s.xAxisID, gl(t, "x")), o = n.yAxisID = pt(s.yAxisID, gl(t, "y")), l = n.rAxisID = pt(s.rAxisID, gl(t, "r")), a = n.indexAxis, c = n.iAxisID = i(a, r, o, l), h = n.vAxisID = i(a, o, r, l);
    n.xScale = this.getScaleForId(r), n.yScale = this.getScaleForId(o), n.rScale = this.getScaleForId(l), n.iScale = this.getScaleForId(c), n.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Bh(this._data, this), t._stacked && si(t);
  }
  _dataCheck() {
    const t = this.getDataset(), n = t.data || (t.data = []), s = this._data;
    if (ut(n)) {
      const i = this._cachedMeta;
      this._data = jb(n, i);
    } else if (s !== n) {
      if (s) {
        Bh(s, this);
        const i = this._cachedMeta;
        si(i), i._parsed = [];
      }
      n && Object.isExtensible(n) && E0(n, this), this._syncList = [], this._data = n;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta, s = this.getDataset();
    let i = !1;
    this._dataCheck();
    const r = n._stacked;
    n._stacked = pl(n.vScale, n), n.stack !== s.stack && (i = !0, si(n), n.stack = s.stack), this._resyncElements(t), (i || r !== n._stacked) && (sd(this, n._parsed), n._stacked = pl(n.vScale, n));
  }
  configure() {
    const t = this.chart.config, n = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), n, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, n) {
    const { _cachedMeta: s, _data: i } = this, { iScale: r, _stacked: o } = s, l = r.axis;
    let a = t === 0 && n === i.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
    if (this._parsing === !1)
      s._parsed = i, s._sorted = !0, u = i;
    else {
      Dt(i[t]) ? u = this.parseArrayData(s, i, t, n) : ut(i[t]) ? u = this.parseObjectData(s, i, t, n) : u = this.parsePrimitiveData(s, i, t, n);
      const f = () => d[l] === null || c && d[l] < c[l];
      for (h = 0; h < n; ++h)
        s._parsed[h + t] = d = u[h], a && (f() && (a = !1), c = d);
      s._sorted = a;
    }
    o && sd(this, u);
  }
  parsePrimitiveData(t, n, s, i) {
    const { iScale: r, vScale: o } = t, l = r.axis, a = o.axis, c = r.getLabels(), h = r === o, d = new Array(i);
    let u, f, m;
    for (u = 0, f = i; u < f; ++u)
      m = u + s, d[u] = {
        [l]: h || r.parse(c[m], m),
        [a]: o.parse(n[m], m)
      };
    return d;
  }
  parseArrayData(t, n, s, i) {
    const { xScale: r, yScale: o } = t, l = new Array(i);
    let a, c, h, d;
    for (a = 0, c = i; a < c; ++a)
      h = a + s, d = n[h], l[a] = {
        x: r.parse(d[0], h),
        y: o.parse(d[1], h)
      };
    return l;
  }
  parseObjectData(t, n, s, i) {
    const { xScale: r, yScale: o } = t, { xAxisKey: l = "x", yAxisKey: a = "y" } = this._parsing, c = new Array(i);
    let h, d, u, f;
    for (h = 0, d = i; h < d; ++h)
      u = h + s, f = n[u], c[h] = {
        x: r.parse(Fn(f, l), u),
        y: o.parse(Fn(f, a), u)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, s) {
    const i = this.chart, r = this._cachedMeta, o = n[t.axis], l = {
      keys: C1(i, !0),
      values: n._stacks[t.axis]._visualValues
    };
    return ed(l, o, r.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, n, s, i) {
    const r = s[n.axis];
    let o = r === null ? NaN : r;
    const l = i && s._stacks[n.axis];
    i && l && (i.values = l, o = ed(i, r, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o);
  }
  getMinMax(t, n) {
    const s = this._cachedMeta, i = s._parsed, r = s._sorted && t === s.iScale, o = i.length, l = this._getOtherScale(t), a = Xb(n, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = qb(l);
    let u, f;
    function m() {
      f = i[u];
      const p = f[l.axis];
      return !Ut(f[t.axis]) || h > p || d < p;
    }
    for (u = 0; u < o && !(!m() && (this.updateRangeFromParsed(c, t, f, a), r)); ++u)
      ;
    if (r) {
      for (u = o - 1; u >= 0; --u)
        if (!m()) {
          this.updateRangeFromParsed(c, t, f, a);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed, s = [];
    let i, r, o;
    for (i = 0, r = n.length; i < r; ++i)
      o = n[i][t.axis], Ut(o) && s.push(o);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = n.iScale, i = n.vScale, r = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(r[s.axis]) : "",
      value: i ? "" + i.getLabelForValue(r[i.axis]) : ""
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"), n._clip = zb(pt(this.options.clip, Hb(n.xScale, n.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, n = this.chart, s = this._cachedMeta, i = s.data || [], r = n.chartArea, o = [], l = this._drawStart || 0, a = this._drawCount || i.length - l, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, r, l, a), h = l; h < l + a; ++h) {
      const d = i[h];
      d.hidden || (d.active && c ? o.push(d) : d.draw(t, r));
    }
    for (h = 0; h < o.length; ++h)
      o[h].draw(t, r);
  }
  getStyle(t, n) {
    const s = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, n, s) {
    const i = this.getDataset();
    let r;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[t];
      r = o.$context || (o.$context = Gb(this.getContext(), t, o)), r.parsed = this.getParsed(t), r.raw = i.data[t], r.index = r.dataIndex = t;
    } else
      r = this.$context || (this.$context = Ub(this.chart.getContext(), this.index)), r.dataset = i, r.index = r.datasetIndex = this.index;
    return r.active = !!n, r.mode = s, r;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", s) {
    const i = n === "active", r = this._cachedDataOpts, o = t + "-" + n, l = r[o], a = this.enableOptionSharing && Bs(s);
    if (l)
      return id(l, a);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(Ft.elements[t]), m = () => this.getContext(s, i, n), p = c.resolveNamedOptions(u, f, m, d);
    return p.$shared && (p.$shared = a, r[o] = Object.freeze(id(p, a))), p;
  }
  _resolveAnimations(t, n, s) {
    const i = this.chart, r = this._cachedDataOpts, o = `animation-${n}`, l = r[o];
    if (l)
      return l;
    let a;
    if (i.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, n), u = h.getOptionScopes(this.getDataset(), d);
      a = h.createResolver(u, this.getContext(t, s, n));
    }
    const c = new M1(i, a && a.animations);
    return a && a._cacheable && (r[o] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, n) {
    return !n || ml(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const s = this.resolveDataElementOptions(t, n), i = this._sharedOptions, r = this.getSharedOptions(s), o = this.includeOptions(n, r) || r !== i;
    return this.updateSharedOptions(r, n, s), {
      sharedOptions: r,
      includeOptions: o
    };
  }
  updateElement(t, n, s, i) {
    ml(i) ? Object.assign(t, s) : this._resolveAnimations(n, i).update(t, s);
  }
  updateSharedOptions(t, n, s) {
    t && !ml(n) && this._resolveAnimations(void 0, n).update(t, s);
  }
  _setStyle(t, n, s, i) {
    t.active = i;
    const r = this.getStyle(n, i);
    this._resolveAnimations(n, s, i).update(t, {
      options: !i && this.getSharedOptions(r) || r
    });
  }
  removeHoverStyle(t, n, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, n, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data, s = this._cachedMeta.data;
    for (const [l, a, c] of this._syncList)
      this[l](a, c);
    this._syncList = [];
    const i = s.length, r = n.length, o = Math.min(r, i);
    o && this.parse(0, o), r > i ? this._insertElements(i, r - i, t) : r < i && this._removeElements(r, i - r);
  }
  _insertElements(t, n, s = !0) {
    const i = this._cachedMeta, r = i.data, o = t + n;
    let l;
    const a = (c) => {
      for (c.length += n, l = c.length - 1; l >= o; l--)
        c[l] = c[l - n];
    };
    for (a(r), l = t; l < o; ++l)
      r[l] = new this.dataElementType();
    this._parsing && a(i._parsed), this.parse(t, n), s && this.updateElements(r, t, n, "reset");
  }
  updateElements(t, n, s, i) {
  }
  _removeElements(t, n) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const i = s._parsed.splice(t, n);
      s._stacked && si(s, i);
    }
    s.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [n, s, i] = t;
      this[n](s, i);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, n) {
    n && this._sync([
      "_removeElements",
      t,
      n
    ]);
    const s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
U(nn, "defaults", {}), U(nn, "datasetElementType", null), U(nn, "dataElementType", null);
function Kb(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t);
    let s = [];
    for (let i = 0, r = n.length; i < r; i++)
      s = s.concat(n[i].controller.getAllParsedValues(e));
    e._cache.$bar = h1(s.sort((i, r) => i - r));
  }
  return e._cache.$bar;
}
function Jb(e) {
  const t = e.iScale, n = Kb(t, e.type);
  let s = t._length, i, r, o, l;
  const a = () => {
    o === 32767 || o === -32768 || (Bs(l) && (s = Math.min(s, Math.abs(o - l) || s)), l = o);
  };
  for (i = 0, r = n.length; i < r; ++i)
    o = t.getPixelForValue(n[i]), a();
  for (l = void 0, i = 0, r = t.ticks.length; i < r; ++i)
    o = t.getPixelForTick(i), a();
  return s;
}
function Zb(e, t, n, s) {
  const i = n.barThickness;
  let r, o;
  return bt(i) ? (r = t.min * n.categoryPercentage, o = n.barPercentage) : (r = i * s, o = 1), {
    chunk: r / s,
    ratio: o,
    start: t.pixels[e] - r / 2
  };
}
function Qb(e, t, n, s) {
  const i = t.pixels, r = i[e];
  let o = e > 0 ? i[e - 1] : null, l = e < i.length - 1 ? i[e + 1] : null;
  const a = n.categoryPercentage;
  o === null && (o = r - (l === null ? t.end - t.start : l - r)), l === null && (l = r + r - o);
  const c = r - (r - Math.min(o, l)) / 2 * a;
  return {
    chunk: Math.abs(l - o) / 2 * a / s,
    ratio: n.barPercentage,
    start: c
  };
}
function tv(e, t, n, s) {
  const i = n.parse(e[0], s), r = n.parse(e[1], s), o = Math.min(i, r), l = Math.max(i, r);
  let a = o, c = l;
  Math.abs(o) > Math.abs(l) && (a = l, c = o), t[n.axis] = c, t._custom = {
    barStart: a,
    barEnd: c,
    start: i,
    end: r,
    min: o,
    max: l
  };
}
function P1(e, t, n, s) {
  return Dt(e) ? tv(e, t, n, s) : t[n.axis] = n.parse(e, s), t;
}
function od(e, t, n, s) {
  const i = e.iScale, r = e.vScale, o = i.getLabels(), l = i === r, a = [];
  let c, h, d, u;
  for (c = n, h = n + s; c < h; ++c)
    u = t[c], d = {}, d[i.axis] = l || i.parse(o[c], c), a.push(P1(u, d, r, c));
  return a;
}
function bl(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function ev(e, t, n) {
  return e !== 0 ? en(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
}
function nv(e) {
  let t, n, s, i, r;
  return e.horizontal ? (t = e.base > e.x, n = "left", s = "right") : (t = e.base < e.y, n = "bottom", s = "top"), t ? (i = "end", r = "start") : (i = "start", r = "end"), {
    start: n,
    end: s,
    reverse: t,
    top: i,
    bottom: r
  };
}
function sv(e, t, n, s) {
  let i = t.borderSkipped;
  const r = {};
  if (!i) {
    e.borderSkipped = r;
    return;
  }
  if (i === !0) {
    e.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: o, end: l, reverse: a, top: c, bottom: h } = nv(e);
  i === "middle" && n && (e.enableBorderRadius = !0, (n._top || 0) === s ? i = c : (n._bottom || 0) === s ? i = h : (r[rd(h, o, l, a)] = !0, i = c)), r[rd(i, o, l, a)] = !0, e.borderSkipped = r;
}
function rd(e, t, n, s) {
  return s ? (e = iv(e, t, n), e = ld(e, n, t)) : e = ld(e, t, n), e;
}
function iv(e, t, n) {
  return e === t ? n : e === n ? t : e;
}
function ld(e, t, n) {
  return e === "start" ? t : e === "end" ? n : e;
}
function ov(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === "auto" ? n === 1 ? 0.33 : 0 : t;
}
class Io extends nn {
  parsePrimitiveData(t, n, s, i) {
    return od(t, n, s, i);
  }
  parseArrayData(t, n, s, i) {
    return od(t, n, s, i);
  }
  parseObjectData(t, n, s, i) {
    const { iScale: r, vScale: o } = t, { xAxisKey: l = "x", yAxisKey: a = "y" } = this._parsing, c = r.axis === "x" ? l : a, h = o.axis === "x" ? l : a, d = [];
    let u, f, m, p;
    for (u = s, f = s + i; u < f; ++u)
      p = n[u], m = {}, m[r.axis] = r.parse(Fn(p, c), u), d.push(P1(Fn(p, h), m, o, u));
    return d;
  }
  updateRangeFromParsed(t, n, s, i) {
    super.updateRangeFromParsed(t, n, s, i);
    const r = s._custom;
    r && n === this._cachedMeta.vScale && (t.min = Math.min(t.min, r.min), t.max = Math.max(t.max, r.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, { iScale: s, vScale: i } = n, r = this.getParsed(t), o = r._custom, l = bl(o) ? "[" + o.start + ", " + o.end + "]" : "" + i.getLabelForValue(r[i.axis]);
    return {
      label: "" + s.getLabelForValue(r[s.axis]),
      value: l
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const n = this._cachedMeta;
    this.updateElements(n.data, 0, n.data.length, t);
  }
  updateElements(t, n, s, i) {
    const r = i === "reset", { index: o, _cachedMeta: { vScale: l } } = this, a = l.getBasePixel(), c = l.isHorizontal(), h = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(n, i);
    for (let f = n; f < n + s; f++) {
      const m = this.getParsed(f), p = r || bt(m[l.axis]) ? {
        base: a,
        head: a
      } : this._calculateBarValuePixels(f), b = this._calculateBarIndexPixels(f, h), v = (m._stacks || {})[l.axis], x = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !v || bl(m._custom) || o === v._top || o === v._bottom,
        x: c ? p.head : b.center,
        y: c ? b.center : p.head,
        height: c ? b.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : b.size
      };
      u && (x.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : i));
      const C = x.options || t[f].options;
      sv(x, C, v, o), ov(x, C, h.ratio), this.updateElement(t[f], f, x, i);
    }
  }
  _getStacks(t, n) {
    const { iScale: s } = this._cachedMeta, i = s.getMatchingVisibleMetas(this._type).filter((h) => h.controller.options.grouped), r = s.options.stacked, o = [], l = this._cachedMeta.controller.getParsed(n), a = l && l[s.axis], c = (h) => {
      const d = h._parsed.find((f) => f[s.axis] === a), u = d && d[h.vScale.axis];
      if (bt(u) || isNaN(u))
        return !0;
    };
    for (const h of i)
      if (!(n !== void 0 && c(h)) && ((r === !1 || o.indexOf(h.stack) === -1 || r === void 0 && h.stack === void 0) && o.push(h.stack), h.index === t))
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getAxisCount() {
    return this._getAxis().length;
  }
  getFirstScaleIdForIndexAxis() {
    const t = this.chart.scales, n = this.chart.options.indexAxis;
    return Object.keys(t).filter((s) => t[s].axis === n).shift();
  }
  _getAxis() {
    const t = {}, n = this.getFirstScaleIdForIndexAxis();
    for (const s of this.chart.data.datasets)
      t[pt(this.chart.options.indexAxis === "x" ? s.xAxisID : s.yAxisID, n)] = !0;
    return Object.keys(t);
  }
  _getStackIndex(t, n, s) {
    const i = this._getStacks(t, s), r = n !== void 0 ? i.indexOf(n) : -1;
    return r === -1 ? i.length - 1 : r;
  }
  _getRuler() {
    const t = this.options, n = this._cachedMeta, s = n.iScale, i = [];
    let r, o;
    for (r = 0, o = n.data.length; r < o; ++r)
      i.push(s.getPixelForValue(this.getParsed(r)[s.axis], r));
    const l = t.barThickness;
    return {
      min: l || Jb(n),
      pixels: i,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: l ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: n, _stacked: s, index: i }, options: { base: r, minBarLength: o } } = this, l = r || 0, a = this.getParsed(t), c = a._custom, h = bl(c);
    let d = a[n.axis], u = 0, f = s ? this.applyStack(n, a, s) : d, m, p;
    f !== d && (u = f - d, f = d), h && (d = c.barStart, f = c.barEnd - c.barStart, d !== 0 && en(d) !== en(c.barEnd) && (u = 0), u += d);
    const b = !bt(r) && !h ? r : u;
    let v = n.getPixelForValue(b);
    if (this.chart.getDataVisibility(t) ? m = n.getPixelForValue(u + f) : m = v, p = m - v, Math.abs(p) < o) {
      p = ev(p, n, l) * o, d === l && (v -= p / 2);
      const x = n.getPixelForDecimal(0), C = n.getPixelForDecimal(1), S = Math.min(x, C), w = Math.max(x, C);
      v = Math.max(Math.min(v, w), S), m = v + p, s && !h && (a._stacks[n.axis]._visualValues[i] = n.getValueForPixel(m) - n.getValueForPixel(v));
    }
    if (v === n.getPixelForValue(l)) {
      const x = en(p) * n.getLineWidthForValue(l) / 2;
      v += x, p -= x;
    }
    return {
      size: p,
      base: v,
      head: m,
      center: m + p / 2
    };
  }
  _calculateBarIndexPixels(t, n) {
    const s = n.scale, i = this.options, r = i.skipNull, o = pt(i.maxBarThickness, 1 / 0);
    let l, a;
    const c = this._getAxisCount();
    if (n.grouped) {
      const h = r ? this._getStackCount(t) : n.stackCount, d = i.barThickness === "flex" ? Qb(t, n, i, h * c) : Zb(t, n, i, h * c), u = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(pt(u, this.getFirstScaleIdForIndexAxis())), m = this._getStackIndex(this.index, this._cachedMeta.stack, r ? t : void 0) + f;
      l = d.start + d.chunk * m + d.chunk / 2, a = Math.min(o, d.chunk * d.ratio);
    } else
      l = s.getPixelForValue(this.getParsed(t)[s.axis], t), a = Math.min(o, n.min * n.ratio);
    return {
      base: l - a / 2,
      head: l + a / 2,
      center: l,
      size: a
    };
  }
  draw() {
    const t = this._cachedMeta, n = t.vScale, s = t.data, i = s.length;
    let r = 0;
    for (; r < i; ++r)
      this.getParsed(r)[n.axis] !== null && !s[r].hidden && s[r].draw(this._ctx);
  }
}
U(Io, "id", "bar"), U(Io, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), U(Io, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
function rv(e, t, n) {
  let s = 1, i = 1, r = 0, o = 0;
  if (t < Nt) {
    const l = e, a = l + t, c = Math.cos(l), h = Math.sin(l), d = Math.cos(a), u = Math.sin(a), f = (C, S, w) => Ti(C, l, a, !0) ? 1 : Math.max(S, S * n, w, w * n), m = (C, S, w) => Ti(C, l, a, !0) ? -1 : Math.min(S, S * n, w, w * n), p = f(0, c, d), b = f(Lt, h, u), v = m(Pt, c, d), x = m(Pt + Lt, h, u);
    s = (p - v) / 2, i = (b - x) / 2, r = -(p + v) / 2, o = -(b + x) / 2;
  }
  return {
    ratioX: s,
    ratioY: i,
    offsetX: r,
    offsetY: o
  };
}
class Os extends nn {
  constructor(t, n) {
    super(t, n), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, n) {
    const s = this.getDataset().data, i = this._cachedMeta;
    if (this._parsing === !1)
      i._parsed = s;
    else {
      let r = (a) => +s[a];
      if (ut(s[t])) {
        const { key: a = "value" } = this._parsing;
        r = (c) => +Fn(s[c], a);
      }
      let o, l;
      for (o = t, l = t + n; o < l; ++o)
        i._parsed[o] = r(o);
    }
  }
  _getRotation() {
    return Qe(this.options.rotation - 90);
  }
  _getCircumference() {
    return Qe(this.options.circumference);
  }
  _getRotationExtents() {
    let t = Nt, n = -Nt;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
        const i = this.chart.getDatasetMeta(s).controller, r = i._getRotation(), o = i._getCircumference();
        t = Math.min(t, r), n = Math.max(n, r + o);
      }
    return {
      rotation: t,
      circumference: n - t
    };
  }
  update(t) {
    const n = this.chart, { chartArea: s } = n, i = this._cachedMeta, r = i.data, o = this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing, l = Math.max((Math.min(s.width, s.height) - o) / 2, 0), a = Math.min(u0(this.options.cutout, l), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: m, offsetY: p } = rv(d, h, a), b = (s.width - o) / u, v = (s.height - o) / f, x = Math.max(Math.min(b, v) / 2, 0), C = o1(this.options.radius, x), S = Math.max(C * a, 0), w = (C - S) / this._getVisibleDatasetWeightTotal();
    this.offsetX = m * C, this.offsetY = p * C, i.total = this.calculateTotal(), this.outerRadius = C - w * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - w * c, 0), this.updateElements(r, 0, r.length, t);
  }
  _circumference(t, n) {
    const s = this.options, i = this._cachedMeta, r = this._getCircumference();
    return n && s.animation.animateRotate || !this.chart.getDataVisibility(t) || i._parsed[t] === null || i.data[t].hidden ? 0 : this.calculateCircumference(i._parsed[t] * r / Nt);
  }
  updateElements(t, n, s, i) {
    const r = i === "reset", o = this.chart, l = o.chartArea, c = o.options.animation, h = (l.left + l.right) / 2, d = (l.top + l.bottom) / 2, u = r && c.animateScale, f = u ? 0 : this.innerRadius, m = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: b } = this._getSharedOptions(n, i);
    let v = this._getRotation(), x;
    for (x = 0; x < n; ++x)
      v += this._circumference(x, r);
    for (x = n; x < n + s; ++x) {
      const C = this._circumference(x, r), S = t[x], w = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: v,
        endAngle: v + C,
        circumference: C,
        outerRadius: m,
        innerRadius: f
      };
      b && (w.options = p || this.resolveDataElementOptions(x, S.active ? "active" : i)), v += C, this.updateElement(S, x, w, i);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, n = t.data;
    let s = 0, i;
    for (i = 0; i < n.length; i++) {
      const r = t._parsed[i];
      r !== null && !isNaN(r) && this.chart.getDataVisibility(i) && !n[i].hidden && (s += Math.abs(r));
    }
    return s;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? Nt * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart, i = s.data.labels || [], r = tc(n._parsed[t], s.options.locale);
    return {
      label: i[t] || "",
      value: r
    };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const s = this.chart;
    let i, r, o, l, a;
    if (!t) {
      for (i = 0, r = s.data.datasets.length; i < r; ++i)
        if (s.isDatasetVisible(i)) {
          o = s.getDatasetMeta(i), t = o.data, l = o.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (i = 0, r = t.length; i < r; ++i)
      a = l.resolveDataElementOptions(i), a.borderAlign !== "inner" && (n = Math.max(n, a.borderWidth || 0, a.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let s = 0, i = t.length; s < i; ++s) {
      const r = this.resolveDataElementOptions(s);
      n = Math.max(n, r.offset || 0, r.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (n += this._getRingWeight(s));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(pt(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
U(Os, "id", "doughnut"), U(Os, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), U(Os, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), U(Os, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: s, color: i } } = t.legend.options;
            return n.labels.map((r, o) => {
              const a = t.getDatasetMeta(0).controller.getStyle(o);
              return {
                text: r,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                fontColor: i,
                lineWidth: a.borderWidth,
                pointStyle: s,
                hidden: !t.getDataVisibility(o),
                index: o
              };
            });
          }
          return [];
        }
      },
      onClick(t, n, s) {
        s.chart.toggleDataVisibility(n.index), s.chart.update();
      }
    }
  }
});
class Is extends nn {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const n = this._cachedMeta, { dataset: s, data: i = [], _dataset: r } = n, o = this.chart._animationsDisabled;
    let { start: l, count: a } = f1(n, i, o);
    this._drawStart = l, this._drawCount = a, p1(n) && (l = 0, a = i.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!r._decimated, s.points = i;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !o,
      options: c
    }, t), this.updateElements(i, l, a, t);
  }
  updateElements(t, n, s, i) {
    const r = i === "reset", { iScale: o, vScale: l, _stacked: a, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(n, i), u = o.axis, f = l.axis, { spanGaps: m, segment: p } = this.options, b = gs(m) ? m : Number.POSITIVE_INFINITY, v = this.chart._animationsDisabled || r || i === "none", x = n + s, C = t.length;
    let S = n > 0 && this.getParsed(n - 1);
    for (let w = 0; w < C; ++w) {
      const D = t[w], _ = v ? D : {};
      if (w < n || w >= x) {
        _.skip = !0;
        continue;
      }
      const E = this.getParsed(w), N = bt(E[f]), I = _[u] = o.getPixelForValue(E[u], w), R = _[f] = r || N ? l.getBasePixel() : l.getPixelForValue(a ? this.applyStack(l, E, a) : E[f], w);
      _.skip = isNaN(I) || isNaN(R) || N, _.stop = w > 0 && Math.abs(E[u] - S[u]) > b, p && (_.parsed = E, _.raw = c.data[w]), d && (_.options = h || this.resolveDataElementOptions(w, D.active ? "active" : i)), v || this.updateElement(D, w, _, i), S = E;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, n = t.dataset, s = n.options && n.options.borderWidth || 0, i = t.data || [];
    if (!i.length)
      return s;
    const r = i[0].size(this.resolveDataElementOptions(0)), o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(s, r, o) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
U(Is, "id", "line"), U(Is, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), U(Is, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class la extends Os {
}
U(la, "id", "pie"), U(la, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class Vo extends nn {
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale, s = this.getParsed(t);
    return {
      label: n.getLabels()[t],
      value: "" + n.getLabelForValue(s[n.axis])
    };
  }
  parseObjectData(t, n, s, i) {
    return ab.bind(this)(t, n, s, i);
  }
  update(t) {
    const n = this._cachedMeta, s = n.dataset, i = n.data || [], r = n.iScale.getLabels();
    if (s.points = i, t !== "resize") {
      const o = this.resolveDatasetElementOptions(t);
      this.options.showLine || (o.borderWidth = 0);
      const l = {
        _loop: !0,
        _fullLoop: r.length === i.length,
        options: o
      };
      this.updateElement(s, void 0, l, t);
    }
    this.updateElements(i, 0, i.length, t);
  }
  updateElements(t, n, s, i) {
    const r = this._cachedMeta.rScale, o = i === "reset";
    for (let l = n; l < n + s; l++) {
      const a = t[l], c = this.resolveDataElementOptions(l, a.active ? "active" : i), h = r.getPointPositionForValue(l, this.getParsed(l).r), d = o ? r.xCenter : h.x, u = o ? r.yCenter : h.y, f = {
        x: d,
        y: u,
        angle: h.angle,
        skip: isNaN(d) || isNaN(u),
        options: c
      };
      this.updateElement(a, l, f, i);
    }
  }
}
U(Vo, "id", "radar"), U(Vo, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), U(Vo, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class Bo extends nn {
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart.data.labels || [], { xScale: i, yScale: r } = n, o = this.getParsed(t), l = i.getLabelForValue(o.x), a = r.getLabelForValue(o.y);
    return {
      label: s[t] || "",
      value: "(" + l + ", " + a + ")"
    };
  }
  update(t) {
    const n = this._cachedMeta, { data: s = [] } = n, i = this.chart._animationsDisabled;
    let { start: r, count: o } = f1(n, s, i);
    if (this._drawStart = r, this._drawCount = o, p1(n) && (r = 0, o = s.length), this.options.showLine) {
      this.datasetElementType || this.addElements();
      const { dataset: l, _dataset: a } = n;
      l._chart = this.chart, l._datasetIndex = this.index, l._decimated = !!a._decimated, l.points = s;
      const c = this.resolveDatasetElementOptions(t);
      c.segment = this.options.segment, this.updateElement(l, void 0, {
        animated: !i,
        options: c
      }, t);
    } else this.datasetElementType && (delete n.dataset, this.datasetElementType = !1);
    this.updateElements(s, r, o, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(t, n, s, i) {
    const r = i === "reset", { iScale: o, vScale: l, _stacked: a, _dataset: c } = this._cachedMeta, h = this.resolveDataElementOptions(n, i), d = this.getSharedOptions(h), u = this.includeOptions(i, d), f = o.axis, m = l.axis, { spanGaps: p, segment: b } = this.options, v = gs(p) ? p : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || r || i === "none";
    let C = n > 0 && this.getParsed(n - 1);
    for (let S = n; S < n + s; ++S) {
      const w = t[S], D = this.getParsed(S), _ = x ? w : {}, E = bt(D[m]), N = _[f] = o.getPixelForValue(D[f], S), I = _[m] = r || E ? l.getBasePixel() : l.getPixelForValue(a ? this.applyStack(l, D, a) : D[m], S);
      _.skip = isNaN(N) || isNaN(I) || E, _.stop = S > 0 && Math.abs(D[f] - C[f]) > v, b && (_.parsed = D, _.raw = c.data[S]), u && (_.options = d || this.resolveDataElementOptions(S, w.active ? "active" : i)), x || this.updateElement(w, S, _, i), C = D;
    }
    this.updateSharedOptions(d, i, h);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, n = t.data || [];
    if (!this.options.showLine) {
      let l = 0;
      for (let a = n.length - 1; a >= 0; --a)
        l = Math.max(l, n[a].size(this.resolveDataElementOptions(a)) / 2);
      return l > 0 && l;
    }
    const s = t.dataset, i = s.options && s.options.borderWidth || 0;
    if (!n.length)
      return i;
    const r = n[0].size(this.resolveDataElementOptions(0)), o = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(i, r, o) / 2;
  }
}
U(Bo, "id", "scatter"), U(Bo, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), U(Bo, "overrides", {
  interaction: {
    mode: "point"
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function Gn() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class cc {
  constructor(t) {
    U(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(cc.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return Gn();
  }
  parse() {
    return Gn();
  }
  format() {
    return Gn();
  }
  add() {
    return Gn();
  }
  diff() {
    return Gn();
  }
  startOf() {
    return Gn();
  }
  endOf() {
    return Gn();
  }
}
var lv = {
  _date: cc
};
function av(e, t, n, s) {
  const { controller: i, data: r, _sorted: o } = e, l = i._cachedMeta.iScale, a = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null;
  if (l && t === l.axis && t !== "r" && o && r.length) {
    const c = l._reversePixels ? P0 : es;
    if (s) {
      if (i._sharedOptions) {
        const h = r[0], d = typeof h.getRange == "function" && h.getRange(t);
        if (d) {
          const u = c(r, t, n - d), f = c(r, t, n + d);
          return {
            lo: u.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const h = c(r, t, n);
      if (a) {
        const { vScale: d } = i._cachedMeta, { _parsed: u } = e, f = u.slice(0, h.lo + 1).reverse().findIndex((p) => !bt(p[d.axis]));
        h.lo -= Math.max(0, f);
        const m = u.slice(h.hi).findIndex((p) => !bt(p[d.axis]));
        h.hi += Math.max(0, m);
      }
      return h;
    }
  }
  return {
    lo: 0,
    hi: r.length - 1
  };
}
function qr(e, t, n, s, i) {
  const r = e.getSortedVisibleDatasetMetas(), o = n[t];
  for (let l = 0, a = r.length; l < a; ++l) {
    const { index: c, data: h } = r[l], { lo: d, hi: u } = av(r[l], t, o, i);
    for (let f = d; f <= u; ++f) {
      const m = h[f];
      m.skip || s(m, c, f);
    }
  }
}
function cv(e) {
  const t = e.indexOf("x") !== -1, n = e.indexOf("y") !== -1;
  return function(s, i) {
    const r = t ? Math.abs(s.x - i.x) : 0, o = n ? Math.abs(s.y - i.y) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
  };
}
function vl(e, t, n, s, i) {
  const r = [];
  return !i && !e.isPointInArea(t) || qr(e, n, t, function(l, a, c) {
    !i && !wn(l, e.chartArea, 0) || l.inRange(t.x, t.y, s) && r.push({
      element: l,
      datasetIndex: a,
      index: c
    });
  }, !0), r;
}
function hv(e, t, n, s) {
  let i = [];
  function r(o, l, a) {
    const { startAngle: c, endAngle: h } = o.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = a1(o, {
      x: t.x,
      y: t.y
    });
    Ti(d, c, h) && i.push({
      element: o,
      datasetIndex: l,
      index: a
    });
  }
  return qr(e, n, t, r), i;
}
function dv(e, t, n, s, i, r) {
  let o = [];
  const l = cv(n);
  let a = Number.POSITIVE_INFINITY;
  function c(h, d, u) {
    const f = h.inRange(t.x, t.y, i);
    if (s && !f)
      return;
    const m = h.getCenterPoint(i);
    if (!(!!r || e.isPointInArea(m)) && !f)
      return;
    const b = l(t, m);
    b < a ? (o = [
      {
        element: h,
        datasetIndex: d,
        index: u
      }
    ], a = b) : b === a && o.push({
      element: h,
      datasetIndex: d,
      index: u
    });
  }
  return qr(e, n, t, c), o;
}
function yl(e, t, n, s, i, r) {
  return !r && !e.isPointInArea(t) ? [] : n === "r" && !s ? hv(e, t, n, i) : dv(e, t, n, s, i, r);
}
function ad(e, t, n, s, i) {
  const r = [], o = n === "x" ? "inXRange" : "inYRange";
  let l = !1;
  return qr(e, n, t, (a, c, h) => {
    a[o] && a[o](t[n], i) && (r.push({
      element: a,
      datasetIndex: c,
      index: h
    }), l = l || a.inRange(t.x, t.y, i));
  }), s && !l ? [] : r;
}
var uv = {
  modes: {
    index(e, t, n, s) {
      const i = Jn(t, e), r = n.axis || "x", o = n.includeInvisible || !1, l = n.intersect ? vl(e, i, r, s, o) : yl(e, i, r, !1, s, o), a = [];
      return l.length ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = l[0].index, d = c.data[h];
        d && !d.skip && a.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), a) : [];
    },
    dataset(e, t, n, s) {
      const i = Jn(t, e), r = n.axis || "xy", o = n.includeInvisible || !1;
      let l = n.intersect ? vl(e, i, r, s, o) : yl(e, i, r, !1, s, o);
      if (l.length > 0) {
        const a = l[0].datasetIndex, c = e.getDatasetMeta(a).data;
        l = [];
        for (let h = 0; h < c.length; ++h)
          l.push({
            element: c[h],
            datasetIndex: a,
            index: h
          });
      }
      return l;
    },
    point(e, t, n, s) {
      const i = Jn(t, e), r = n.axis || "xy", o = n.includeInvisible || !1;
      return vl(e, i, r, s, o);
    },
    nearest(e, t, n, s) {
      const i = Jn(t, e), r = n.axis || "xy", o = n.includeInvisible || !1;
      return yl(e, i, r, n.intersect, s, o);
    },
    x(e, t, n, s) {
      const i = Jn(t, e);
      return ad(e, i, "x", n.intersect, s);
    },
    y(e, t, n, s) {
      const i = Jn(t, e);
      return ad(e, i, "y", n.intersect, s);
    }
  }
};
const S1 = [
  "left",
  "top",
  "right",
  "bottom"
];
function ii(e, t) {
  return e.filter((n) => n.pos === t);
}
function cd(e, t) {
  return e.filter((n) => S1.indexOf(n.pos) === -1 && n.box.axis === t);
}
function oi(e, t) {
  return e.sort((n, s) => {
    const i = t ? s : n, r = t ? n : s;
    return i.weight === r.weight ? i.index - r.index : i.weight - r.weight;
  });
}
function fv(e) {
  const t = [];
  let n, s, i, r, o, l;
  for (n = 0, s = (e || []).length; n < s; ++n)
    i = e[n], { position: r, options: { stack: o, stackWeight: l = 1 } } = i, t.push({
      index: n,
      box: i,
      pos: r,
      horizontal: i.isHorizontal(),
      weight: i.weight,
      stack: o && r + o,
      stackWeight: l
    });
  return t;
}
function pv(e) {
  const t = {};
  for (const n of e) {
    const { stack: s, pos: i, stackWeight: r } = n;
    if (!s || !S1.includes(i))
      continue;
    const o = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    o.count++, o.weight += r;
  }
  return t;
}
function gv(e, t) {
  const n = pv(e), { vBoxMaxWidth: s, hBoxMaxHeight: i } = t;
  let r, o, l;
  for (r = 0, o = e.length; r < o; ++r) {
    l = e[r];
    const { fullSize: a } = l.box, c = n[l.stack], h = c && l.stackWeight / c.weight;
    l.horizontal ? (l.width = h ? h * s : a && t.availableWidth, l.height = i) : (l.width = s, l.height = h ? h * i : a && t.availableHeight);
  }
  return n;
}
function mv(e) {
  const t = fv(e), n = oi(t.filter((c) => c.box.fullSize), !0), s = oi(ii(t, "left"), !0), i = oi(ii(t, "right")), r = oi(ii(t, "top"), !0), o = oi(ii(t, "bottom")), l = cd(t, "x"), a = cd(t, "y");
  return {
    fullSize: n,
    leftAndTop: s.concat(r),
    rightAndBottom: i.concat(a).concat(o).concat(l),
    chartArea: ii(t, "chartArea"),
    vertical: s.concat(i).concat(a),
    horizontal: r.concat(o).concat(l)
  };
}
function hd(e, t, n, s) {
  return Math.max(e[n], t[n]) + Math.max(e[s], t[s]);
}
function E1(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function bv(e, t, n, s) {
  const { pos: i, box: r } = n, o = e.maxPadding;
  if (!ut(i)) {
    n.size && (e[i] -= n.size);
    const d = s[n.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, n.horizontal ? r.height : r.width), n.size = d.size / d.count, e[i] += n.size;
  }
  r.getPadding && E1(o, r.getPadding());
  const l = Math.max(0, t.outerWidth - hd(o, e, "left", "right")), a = Math.max(0, t.outerHeight - hd(o, e, "top", "bottom")), c = l !== e.w, h = a !== e.h;
  return e.w = l, e.h = a, n.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function vv(e) {
  const t = e.maxPadding;
  function n(s) {
    const i = Math.max(t[s] - e[s], 0);
    return e[s] += i, i;
  }
  e.y += n("top"), e.x += n("left"), n("right"), n("bottom");
}
function yv(e, t) {
  const n = t.maxPadding;
  function s(i) {
    const r = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return i.forEach((o) => {
      r[o] = Math.max(t[o], n[o]);
    }), r;
  }
  return s(e ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function di(e, t, n, s) {
  const i = [];
  let r, o, l, a, c, h;
  for (r = 0, o = e.length, c = 0; r < o; ++r) {
    l = e[r], a = l.box, a.update(l.width || t.w, l.height || t.h, yv(l.horizontal, t));
    const { same: d, other: u } = bv(t, n, l, s);
    c |= d && i.length, h = h || u, a.fullSize || i.push(l);
  }
  return c && di(i, t, n, s) || h;
}
function po(e, t, n, s, i) {
  e.top = n, e.left = t, e.right = t + s, e.bottom = n + i, e.width = s, e.height = i;
}
function dd(e, t, n, s) {
  const i = n.padding;
  let { x: r, y: o } = t;
  for (const l of e) {
    const a = l.box, c = s[l.stack] || {
      placed: 0,
      weight: 1
    }, h = l.stackWeight / c.weight || 1;
    if (l.horizontal) {
      const d = t.w * h, u = c.size || a.height;
      Bs(c.start) && (o = c.start), a.fullSize ? po(a, i.left, o, n.outerWidth - i.right - i.left, u) : po(a, t.left + c.placed, o, d, u), c.start = o, c.placed += d, o = a.bottom;
    } else {
      const d = t.h * h, u = c.size || a.width;
      Bs(c.start) && (r = c.start), a.fullSize ? po(a, r, i.top, u, n.outerHeight - i.bottom - i.top) : po(a, r, t.top + c.placed, u, d), c.start = r, c.placed += d, r = a.right;
    }
  }
  t.x = r, t.y = o;
}
var go = {
  addBox(e, t) {
    e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(n) {
            t.draw(n);
          }
        }
      ];
    }, e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    t.fullSize = n.fullSize, t.position = n.position, t.weight = n.weight;
  },
  update(e, t, n, s) {
    if (!e)
      return;
    const i = Ee(e.options.layout.padding), r = Math.max(t - i.width, 0), o = Math.max(n - i.height, 0), l = mv(e.boxes), a = l.vertical, c = l.horizontal;
    Ct(e.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = a.reduce((p, b) => b.box.options && b.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: n,
      padding: i,
      availableWidth: r,
      availableHeight: o,
      vBoxMaxWidth: r / 2 / h,
      hBoxMaxHeight: o / 2
    }), u = Object.assign({}, i);
    E1(u, Ee(s));
    const f = Object.assign({
      maxPadding: u,
      w: r,
      h: o,
      x: i.left,
      y: i.top
    }, i), m = gv(a.concat(c), d);
    di(l.fullSize, f, d, m), di(a, f, d, m), di(c, f, d, m) && di(a, f, d, m), vv(f), dd(l.leftAndTop, f, d, m), f.x += f.w, f.y += f.h, dd(l.rightAndBottom, f, d, m), e.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, Ct(l.chartArea, (p) => {
      const b = p.box;
      Object.assign(b, e.chartArea), b.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class D1 {
  acquireContext(t, n) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, s) {
  }
  removeEventListener(t, n, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, s, i) {
    return n = Math.max(0, n || t.width), s = s || t.height, {
      width: n,
      height: Math.max(0, i ? Math.floor(n / i) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class xv extends D1 {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const $o = "$chartjs", wv = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, ud = (e) => e === null || e === "";
function kv(e, t) {
  const n = e.style, s = e.getAttribute("height"), i = e.getAttribute("width");
  if (e[$o] = {
    initial: {
      height: s,
      width: i,
      style: {
        display: n.display,
        height: n.height,
        width: n.width
      }
    }
  }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", ud(i)) {
    const r = Xh(e, "width");
    r !== void 0 && (e.width = r);
  }
  if (ud(s))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const r = Xh(e, "height");
      r !== void 0 && (e.height = r);
    }
  return e;
}
const A1 = kb ? {
  passive: !0
} : !1;
function _v(e, t, n) {
  e && e.addEventListener(t, n, A1);
}
function Mv(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, A1);
}
function Cv(e, t) {
  const n = wv[e.type] || e.type, { x: s, y: i } = Jn(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null
  };
}
function ur(e, t) {
  for (const n of e)
    if (n === t || n.contains(t))
      return !0;
}
function Pv(e, t, n) {
  const s = e.canvas, i = new MutationObserver((r) => {
    let o = !1;
    for (const l of r)
      o = o || ur(l.addedNodes, s), o = o && !ur(l.removedNodes, s);
    o && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
function Sv(e, t, n) {
  const s = e.canvas, i = new MutationObserver((r) => {
    let o = !1;
    for (const l of r)
      o = o || ur(l.removedNodes, s), o = o && !ur(l.addedNodes, s);
    o && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
const Ii = /* @__PURE__ */ new Map();
let fd = 0;
function N1() {
  const e = window.devicePixelRatio;
  e !== fd && (fd = e, Ii.forEach((t, n) => {
    n.currentDevicePixelRatio !== e && t();
  }));
}
function Ev(e, t) {
  Ii.size || window.addEventListener("resize", N1), Ii.set(e, t);
}
function Dv(e) {
  Ii.delete(e), Ii.size || window.removeEventListener("resize", N1);
}
function Av(e, t, n) {
  const s = e.canvas, i = s && ac(s);
  if (!i)
    return;
  const r = u1((l, a) => {
    const c = i.clientWidth;
    n(l, a), c < i.clientWidth && n();
  }, window), o = new ResizeObserver((l) => {
    const a = l[0], c = a.contentRect.width, h = a.contentRect.height;
    c === 0 && h === 0 || r(c, h);
  });
  return o.observe(i), Ev(e, r), o;
}
function xl(e, t, n) {
  n && n.disconnect(), t === "resize" && Dv(e);
}
function Nv(e, t, n) {
  const s = e.canvas, i = u1((r) => {
    e.ctx !== null && n(Cv(r, e));
  }, e);
  return _v(s, t, i), i;
}
class Ov extends D1 {
  acquireContext(t, n) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (kv(t, n), s) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[$o])
      return !1;
    const s = n[$o].initial;
    [
      "height",
      "width"
    ].forEach((r) => {
      const o = s[r];
      bt(o) ? n.removeAttribute(r) : n.setAttribute(r, o);
    });
    const i = s.style || {};
    return Object.keys(i).forEach((r) => {
      n.style[r] = i[r];
    }), n.width = n.width, delete n[$o], !0;
  }
  addEventListener(t, n, s) {
    this.removeEventListener(t, n);
    const i = t.$proxies || (t.$proxies = {}), o = {
      attach: Pv,
      detach: Sv,
      resize: Av
    }[n] || Nv;
    i[n] = o(t, n, s);
  }
  removeEventListener(t, n) {
    const s = t.$proxies || (t.$proxies = {}), i = s[n];
    if (!i)
      return;
    ({
      attach: xl,
      detach: xl,
      resize: xl
    }[n] || Mv)(t, n, i), s[n] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, s, i) {
    return wb(t, n, s, i);
  }
  isAttached(t) {
    const n = t && ac(t);
    return !!(n && n.isConnected);
  }
}
function Rv(e) {
  return !lc() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? xv : Ov;
}
var Eo;
let Bn = (Eo = class {
  constructor() {
    U(this, "x");
    U(this, "y");
    U(this, "active", !1);
    U(this, "options");
    U(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: n, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: n,
      y: s
    };
  }
  hasValue() {
    return gs(this.x) && gs(this.y);
  }
  getProps(t, n) {
    const s = this.$animations;
    if (!n || !s)
      return this;
    const i = {};
    return t.forEach((r) => {
      i[r] = s[r] && s[r].active() ? s[r]._to : this[r];
    }), i;
  }
}, U(Eo, "defaults", {}), U(Eo, "defaultRoutes"), Eo);
function Tv(e, t) {
  const n = e.options.ticks, s = Lv(e), i = Math.min(n.maxTicksLimit || s, s), r = n.major.enabled ? Iv(t) : [], o = r.length, l = r[0], a = r[o - 1], c = [];
  if (o > i)
    return Vv(t, c, r, o / i), c;
  const h = Fv(r, t, i);
  if (o > 0) {
    let d, u;
    const f = o > 1 ? Math.round((a - l) / (o - 1)) : null;
    for (mo(t, c, h, bt(f) ? 0 : l - f, l), d = 0, u = o - 1; d < u; d++)
      mo(t, c, h, r[d], r[d + 1]);
    return mo(t, c, h, a, bt(f) ? t.length : a + f), c;
  }
  return mo(t, c, h), c;
}
function Lv(e) {
  const t = e.options.offset, n = e._tickSize(), s = e._length / n + (t ? 0 : 1), i = e._maxLength / n;
  return Math.floor(Math.min(s, i));
}
function Fv(e, t, n) {
  const s = Bv(e), i = t.length / n;
  if (!s)
    return Math.max(i, 1);
  const r = x0(s);
  for (let o = 0, l = r.length - 1; o < l; o++) {
    const a = r[o];
    if (a > i)
      return a;
  }
  return Math.max(i, 1);
}
function Iv(e) {
  const t = [];
  let n, s;
  for (n = 0, s = e.length; n < s; n++)
    e[n].major && t.push(n);
  return t;
}
function Vv(e, t, n, s) {
  let i = 0, r = n[0], o;
  for (s = Math.ceil(s), o = 0; o < e.length; o++)
    o === r && (t.push(e[o]), i++, r = n[i * s]);
}
function mo(e, t, n, s, i) {
  const r = pt(s, 0), o = Math.min(pt(i, e.length), e.length);
  let l = 0, a, c, h;
  for (n = Math.ceil(n), i && (a = i - s, n = a / Math.floor(a / n)), h = r; h < 0; )
    l++, h = Math.round(r + l * n);
  for (c = Math.max(r, 0); c < o; c++)
    c === h && (t.push(e[c]), l++, h = Math.round(r + l * n));
}
function Bv(e) {
  const t = e.length;
  let n, s;
  if (t < 2)
    return !1;
  for (s = e[0], n = 1; n < t; ++n)
    if (e[n] - e[n - 1] !== s)
      return !1;
  return s;
}
const $v = (e) => e === "left" ? "right" : e === "right" ? "left" : e, pd = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n, gd = (e, t) => Math.min(t || e, e);
function md(e, t) {
  const n = [], s = e.length / t, i = e.length;
  let r = 0;
  for (; r < i; r += s)
    n.push(e[Math.floor(r)]);
  return n;
}
function Hv(e, t, n) {
  const s = e.ticks.length, i = Math.min(t, s - 1), r = e._startPixel, o = e._endPixel, l = 1e-6;
  let a = e.getPixelForTick(i), c;
  if (!(n && (s === 1 ? c = Math.max(a - r, o - a) : t === 0 ? c = (e.getPixelForTick(1) - a) / 2 : c = (a - e.getPixelForTick(i - 1)) / 2, a += i < t ? c : -c, a < r - l || a > o + l)))
    return a;
}
function zv(e, t) {
  Ct(e, (n) => {
    const s = n.gc, i = s.length / 2;
    let r;
    if (i > t) {
      for (r = 0; r < i; ++r)
        delete n.data[s[r]];
      s.splice(0, i);
    }
  });
}
function ri(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function bd(e, t) {
  if (!e.display)
    return 0;
  const n = jt(e.font, t), s = Ee(e.padding);
  return (Dt(e.text) ? e.text.length : 1) * n.lineHeight + s.height;
}
function jv(e, t) {
  return Vn(e, {
    scale: t,
    type: "scale"
  });
}
function Wv(e, t, n) {
  return Vn(e, {
    tick: n,
    index: t,
    type: "tick"
  });
}
function qv(e, t, n) {
  let s = A0(e);
  return (n && t !== "right" || !n && t === "right") && (s = $v(s)), s;
}
function Yv(e, t, n, s) {
  const { top: i, left: r, bottom: o, right: l, chart: a } = e, { chartArea: c, scales: h } = a;
  let d = 0, u, f, m;
  const p = o - i, b = l - r;
  if (e.isHorizontal()) {
    if (f = $h(s, r, l), ut(n)) {
      const v = Object.keys(n)[0], x = n[v];
      m = h[v].getPixelForValue(x) + p - t;
    } else n === "center" ? m = (c.bottom + c.top) / 2 + p - t : m = pd(e, n, t);
    u = l - r;
  } else {
    if (ut(n)) {
      const v = Object.keys(n)[0], x = n[v];
      f = h[v].getPixelForValue(x) - b + t;
    } else n === "center" ? f = (c.left + c.right) / 2 - b + t : f = pd(e, n, t);
    m = $h(s, o, i), d = n === "left" ? -Lt : Lt;
  }
  return {
    titleX: f,
    titleY: m,
    maxWidth: u,
    rotation: d
  };
}
class Ys extends Bn {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: s, _suggestedMax: i } = this;
    return t = Ye(t, Number.POSITIVE_INFINITY), n = Ye(n, Number.NEGATIVE_INFINITY), s = Ye(s, Number.POSITIVE_INFINITY), i = Ye(i, Number.NEGATIVE_INFINITY), {
      min: Ye(t, s),
      max: Ye(n, i),
      minDefined: Ut(t),
      maxDefined: Ut(n)
    };
  }
  getMinMax(t) {
    let { min: n, max: s, minDefined: i, maxDefined: r } = this.getUserBounds(), o;
    if (i && r)
      return {
        min: n,
        max: s
      };
    const l = this.getMatchingVisibleMetas();
    for (let a = 0, c = l.length; a < c; ++a)
      o = l[a].controller.getMinMax(this, t), i || (n = Math.min(n, o.min)), r || (s = Math.max(s, o.max));
    return n = r && n > s ? s : n, s = i && n > s ? n : s, {
      min: Ye(n, Ye(s, n)),
      max: Ye(s, Ye(n, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    Rt(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, n, s) {
    const { beginAtZero: i, grace: r, ticks: o } = this.options, l = o.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = n, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Z0(this, r, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const a = l < this.ticks.length;
    this._convertTicksToLabels(a ? md(this.ticks, l) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || o.source === "auto") && (this.ticks = Tv(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), a && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, n, s;
    this.isHorizontal() ? (n = this.left, s = this.right) : (n = this.top, s = this.bottom, t = !t), this._startPixel = n, this._endPixel = s, this._reversePixels = t, this._length = s - n, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Rt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Rt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Rt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Rt(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Rt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let s, i, r;
    for (s = 0, i = t.length; s < i; s++)
      r = t[s], r.label = Rt(n.callback, [
        r.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    Rt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Rt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, n = t.ticks, s = gd(this.ticks.length, t.ticks.maxTicksLimit), i = n.minRotation || 0, r = n.maxRotation;
    let o = i, l, a, c;
    if (!this._isVisible() || !n.display || i >= r || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = Qt(this.chart.width - d, 0, this.maxWidth);
    l = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > l && (l = f / (s - (t.offset ? 0.5 : 1)), a = this.maxHeight - ri(t.grid) - n.padding - bd(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), o = Ja(Math.min(Math.asin(Qt((h.highest.height + 6) / l, -1, 1)), Math.asin(Qt(a / c, -1, 1)) - Math.asin(Qt(u / c, -1, 1)))), o = Math.max(i, Math.min(r, o))), this.labelRotation = o;
  }
  afterCalculateLabelRotation() {
    Rt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Rt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: n, options: { ticks: s, title: i, grid: r } } = this, o = this._isVisible(), l = this.isHorizontal();
    if (o) {
      const a = bd(i, n.options.font);
      if (l ? (t.width = this.maxWidth, t.height = ri(r) + a) : (t.height = this.maxHeight, t.width = ri(r) + a), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, m = Qe(this.labelRotation), p = Math.cos(m), b = Math.sin(m);
        if (l) {
          const v = s.mirror ? 0 : b * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + v + f);
        } else {
          const v = s.mirror ? 0 : p * d.width + b * u.height;
          t.width = Math.min(this.maxWidth, t.width + v + f);
        }
        this._calculatePadding(c, h, b, p);
      }
    }
    this._handleMargins(), l ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, n, s, i) {
    const { ticks: { align: r, padding: o }, position: l } = this.options, a = this.labelRotation !== 0, c = l !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      a ? c ? (u = i * t.width, f = s * n.height) : (u = s * t.height, f = i * n.width) : r === "start" ? f = n.width : r === "end" ? u = t.width : r !== "inner" && (u = t.width / 2, f = n.width / 2), this.paddingLeft = Math.max((u - h + o) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + o) * this.width / (this.width - d), 0);
    } else {
      let h = n.height / 2, d = t.height / 2;
      r === "start" ? (h = 0, d = t.height) : r === "end" && (h = n.height, d = 0), this.paddingTop = h + o, this.paddingBottom = d + o;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    Rt(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, s;
    for (n = 0, s = t.length; n < s; n++)
      bt(t[n].label) && (t.splice(n, 1), s--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let s = this.ticks;
      n < s.length && (s = md(s, n)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, n, s) {
    const { ctx: i, _longestTextCache: r } = this, o = [], l = [], a = Math.floor(n / gd(n, s));
    let c = 0, h = 0, d, u, f, m, p, b, v, x, C, S, w;
    for (d = 0; d < n; d += a) {
      if (m = t[d].label, p = this._resolveTickFontOptions(d), i.font = b = p.string, v = r[b] = r[b] || {
        data: {},
        gc: []
      }, x = p.lineHeight, C = S = 0, !bt(m) && !Dt(m))
        C = cr(i, v.data, v.gc, C, m), S = x;
      else if (Dt(m))
        for (u = 0, f = m.length; u < f; ++u)
          w = m[u], !bt(w) && !Dt(w) && (C = cr(i, v.data, v.gc, C, w), S += x);
      o.push(C), l.push(S), c = Math.max(C, c), h = Math.max(S, h);
    }
    zv(r, n);
    const D = o.indexOf(c), _ = l.indexOf(h), E = (N) => ({
      width: o[N] || 0,
      height: l[N] || 0
    });
    return {
      first: E(0),
      last: E(n - 1),
      widest: E(D),
      highest: E(_),
      widths: o,
      heights: l
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return C0(this._alignToPixels ? Un(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const s = n[t];
      return s.$context || (s.$context = Wv(this.getContext(), t, s));
    }
    return this.$context || (this.$context = jv(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, n = Qe(this.labelRotation), s = Math.abs(Math.cos(n)), i = Math.abs(Math.sin(n)), r = this._getLabelSizes(), o = t.autoSkipPadding || 0, l = r ? r.widest.width + o : 0, a = r ? r.highest.height + o : 0;
    return this.isHorizontal() ? a * s > l * i ? l / s : a / i : a * i < l * s ? a / s : l / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis, s = this.chart, i = this.options, { grid: r, position: o, border: l } = i, a = r.offset, c = this.isHorizontal(), d = this.ticks.length + (a ? 1 : 0), u = ri(r), f = [], m = l.setContext(this.getContext()), p = m.display ? m.width : 0, b = p / 2, v = function(nt) {
      return Un(s, nt, p);
    };
    let x, C, S, w, D, _, E, N, I, R, W, Z;
    if (o === "top")
      x = v(this.bottom), _ = this.bottom - u, N = x - b, R = v(t.top) + b, Z = t.bottom;
    else if (o === "bottom")
      x = v(this.top), R = t.top, Z = v(t.bottom) - b, _ = x + b, N = this.top + u;
    else if (o === "left")
      x = v(this.right), D = this.right - u, E = x - b, I = v(t.left) + b, W = t.right;
    else if (o === "right")
      x = v(this.left), I = t.left, W = v(t.right) - b, D = x + b, E = this.left + u;
    else if (n === "x") {
      if (o === "center")
        x = v((t.top + t.bottom) / 2 + 0.5);
      else if (ut(o)) {
        const nt = Object.keys(o)[0], G = o[nt];
        x = v(this.chart.scales[nt].getPixelForValue(G));
      }
      R = t.top, Z = t.bottom, _ = x + b, N = _ + u;
    } else if (n === "y") {
      if (o === "center")
        x = v((t.left + t.right) / 2);
      else if (ut(o)) {
        const nt = Object.keys(o)[0], G = o[nt];
        x = v(this.chart.scales[nt].getPixelForValue(G));
      }
      D = x - b, E = D - u, I = t.left, W = t.right;
    }
    const kt = pt(i.ticks.maxTicksLimit, d), it = Math.max(1, Math.ceil(d / kt));
    for (C = 0; C < d; C += it) {
      const nt = this.getContext(C), G = r.setContext(nt), Q = l.setContext(nt), dt = G.lineWidth, Ae = G.color, Me = Q.dash || [], ee = Q.dashOffset, Wt = G.tickWidth, Ne = G.tickColor, jn = G.tickBorderDash || [], hn = G.tickBorderDashOffset;
      S = Hv(this, C, a), S !== void 0 && (w = Un(s, S, dt), c ? D = E = I = W = w : _ = N = R = Z = w, f.push({
        tx1: D,
        ty1: _,
        tx2: E,
        ty2: N,
        x1: I,
        y1: R,
        x2: W,
        y2: Z,
        width: dt,
        color: Ae,
        borderDash: Me,
        borderDashOffset: ee,
        tickWidth: Wt,
        tickColor: Ne,
        tickBorderDash: jn,
        tickBorderDashOffset: hn
      }));
    }
    return this._ticksLength = d, this._borderValue = x, f;
  }
  _computeLabelItems(t) {
    const n = this.axis, s = this.options, { position: i, ticks: r } = s, o = this.isHorizontal(), l = this.ticks, { align: a, crossAlign: c, padding: h, mirror: d } = r, u = ri(s.grid), f = u + h, m = d ? -h : f, p = -Qe(this.labelRotation), b = [];
    let v, x, C, S, w, D, _, E, N, I, R, W, Z = "middle";
    if (i === "top")
      D = this.bottom - m, _ = this._getXAxisLabelAlignment();
    else if (i === "bottom")
      D = this.top + m, _ = this._getXAxisLabelAlignment();
    else if (i === "left") {
      const it = this._getYAxisLabelAlignment(u);
      _ = it.textAlign, w = it.x;
    } else if (i === "right") {
      const it = this._getYAxisLabelAlignment(u);
      _ = it.textAlign, w = it.x;
    } else if (n === "x") {
      if (i === "center")
        D = (t.top + t.bottom) / 2 + f;
      else if (ut(i)) {
        const it = Object.keys(i)[0], nt = i[it];
        D = this.chart.scales[it].getPixelForValue(nt) + f;
      }
      _ = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center")
        w = (t.left + t.right) / 2 - f;
      else if (ut(i)) {
        const it = Object.keys(i)[0], nt = i[it];
        w = this.chart.scales[it].getPixelForValue(nt);
      }
      _ = this._getYAxisLabelAlignment(u).textAlign;
    }
    n === "y" && (a === "start" ? Z = "top" : a === "end" && (Z = "bottom"));
    const kt = this._getLabelSizes();
    for (v = 0, x = l.length; v < x; ++v) {
      C = l[v], S = C.label;
      const it = r.setContext(this.getContext(v));
      E = this.getPixelForTick(v) + r.labelOffset, N = this._resolveTickFontOptions(v), I = N.lineHeight, R = Dt(S) ? S.length : 1;
      const nt = R / 2, G = it.color, Q = it.textStrokeColor, dt = it.textStrokeWidth;
      let Ae = _;
      o ? (w = E, _ === "inner" && (v === x - 1 ? Ae = this.options.reverse ? "left" : "right" : v === 0 ? Ae = this.options.reverse ? "right" : "left" : Ae = "center"), i === "top" ? c === "near" || p !== 0 ? W = -R * I + I / 2 : c === "center" ? W = -kt.highest.height / 2 - nt * I + I : W = -kt.highest.height + I / 2 : c === "near" || p !== 0 ? W = I / 2 : c === "center" ? W = kt.highest.height / 2 - nt * I : W = kt.highest.height - R * I, d && (W *= -1), p !== 0 && !it.showLabelBackdrop && (w += I / 2 * Math.sin(p))) : (D = E, W = (1 - R) * I / 2);
      let Me;
      if (it.showLabelBackdrop) {
        const ee = Ee(it.backdropPadding), Wt = kt.heights[v], Ne = kt.widths[v];
        let jn = W - ee.top, hn = 0 - ee.left;
        switch (Z) {
          case "middle":
            jn -= Wt / 2;
            break;
          case "bottom":
            jn -= Wt;
            break;
        }
        switch (_) {
          case "center":
            hn -= Ne / 2;
            break;
          case "right":
            hn -= Ne;
            break;
          case "inner":
            v === x - 1 ? hn -= Ne : v > 0 && (hn -= Ne / 2);
            break;
        }
        Me = {
          left: hn,
          top: jn,
          width: Ne + ee.width,
          height: Wt + ee.height,
          color: it.backdropColor
        };
      }
      b.push({
        label: S,
        font: N,
        textOffset: W,
        options: {
          rotation: p,
          color: G,
          strokeColor: Q,
          strokeWidth: dt,
          textAlign: Ae,
          textBaseline: Z,
          translation: [
            w,
            D
          ],
          backdrop: Me
        }
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-Qe(this.labelRotation))
      return t === "top" ? "left" : "right";
    let i = "center";
    return n.align === "start" ? i = "left" : n.align === "end" ? i = "right" : n.align === "inner" && (i = "inner"), i;
  }
  _getYAxisLabelAlignment(t) {
    const { position: n, ticks: { crossAlign: s, mirror: i, padding: r } } = this.options, o = this._getLabelSizes(), l = t + r, a = o.widest.width;
    let c, h;
    return n === "left" ? i ? (h = this.right + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h += a / 2) : (c = "right", h += a)) : (h = this.right - l, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= a / 2) : (c = "left", h = this.left)) : n === "right" ? i ? (h = this.left + r, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= a / 2) : (c = "left", h -= a)) : (h = this.left + l, s === "near" ? c = "left" : s === "center" ? (c = "center", h += a / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, n = this.options.position;
    if (n === "left" || n === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (n === "top" || n === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: n }, left: s, top: i, width: r, height: o } = this;
    n && (t.save(), t.fillStyle = n, t.fillRect(s, i, r, o), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display)
      return 0;
    const i = this.ticks.findIndex((r) => r.value === t);
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid, s = this.ctx, i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let r, o;
    const l = (a, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(a.x, a.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (n.display)
      for (r = 0, o = i.length; r < o; ++r) {
        const a = i[r];
        n.drawOnChartArea && l({
          x: a.x1,
          y: a.y1
        }, {
          x: a.x2,
          y: a.y2
        }, a), n.drawTicks && l({
          x: a.tx1,
          y: a.ty1
        }, {
          x: a.tx2,
          y: a.ty2
        }, {
          color: a.tickColor,
          width: a.tickWidth,
          borderDash: a.tickBorderDash,
          borderDashOffset: a.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: n, options: { border: s, grid: i } } = this, r = s.setContext(this.getContext()), o = s.display ? r.width : 0;
    if (!o)
      return;
    const l = i.setContext(this.getContext(0)).lineWidth, a = this._borderValue;
    let c, h, d, u;
    this.isHorizontal() ? (c = Un(t, this.left, o) - o / 2, h = Un(t, this.right, l) + l / 2, d = u = a) : (d = Un(t, this.top, o) - o / 2, u = Un(t, this.bottom, l) + l / 2, c = h = a), n.save(), n.lineWidth = r.width, n.strokeStyle = r.color, n.beginPath(), n.moveTo(c, d), n.lineTo(h, u), n.stroke(), n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, i = this._computeLabelArea();
    i && zr(s, i);
    const r = this.getLabelItems(t);
    for (const o of r) {
      const l = o.options, a = o.font, c = o.label, h = o.textOffset;
      hr(s, c, 0, h, a, l);
    }
    i && jr(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: n, title: s, reverse: i } } = this;
    if (!s.display)
      return;
    const r = jt(s.font), o = Ee(s.padding), l = s.align;
    let a = r.lineHeight / 2;
    n === "bottom" || n === "center" || ut(n) ? (a += o.bottom, Dt(s.text) && (a += r.lineHeight * (s.text.length - 1))) : a += o.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = Yv(this, a, n, l);
    hr(t, s.text, 0, 0, r, {
      color: s.color,
      maxWidth: d,
      rotation: u,
      textAlign: qv(l, n, i),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, n = t.ticks && t.ticks.z || 0, s = pt(t.grid && t.grid.z, -1), i = pt(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Ys.prototype.draw ? [
      {
        z: n,
        draw: (r) => {
          this.draw(r);
        }
      }
    ] : [
      {
        z: s,
        draw: (r) => {
          this.drawBackground(), this.drawGrid(r), this.drawTitle();
        }
      },
      {
        z: i,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: n,
        draw: (r) => {
          this.drawLabels(r);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", i = [];
    let r, o;
    for (r = 0, o = n.length; r < o; ++r) {
      const l = n[r];
      l[s] === this.id && (!t || l.type === t) && i.push(l);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return jt(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class bo {
  constructor(t, n, s) {
    this.type = t, this.scope = n, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let s;
    Xv(n) && (s = this.register(n));
    const i = this.items, r = t.id, o = this.scope + "." + r;
    if (!r)
      throw new Error("class does not have id: " + t);
    return r in i || (i[r] = t, Uv(t, o, s), this.override && Ft.override(t.id, t.overrides)), o;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items, s = t.id, i = this.scope;
    s in n && delete n[s], i && s in Ft[i] && (delete Ft[i][s], this.override && delete ms[s]);
  }
}
function Uv(e, t, n) {
  const s = Ri(/* @__PURE__ */ Object.create(null), [
    n ? Ft.get(n) : {},
    Ft.get(t),
    e.defaults
  ]);
  Ft.set(t, s), e.defaultRoutes && Gv(t, e.defaultRoutes), e.descriptors && Ft.describe(t, e.descriptors);
}
function Gv(e, t) {
  Object.keys(t).forEach((n) => {
    const s = n.split("."), i = s.pop(), r = [
      e
    ].concat(s).join("."), o = t[n].split("."), l = o.pop(), a = o.join(".");
    Ft.route(r, i, a, l);
  });
}
function Xv(e) {
  return "id" in e && "defaults" in e;
}
class Kv {
  constructor() {
    this.controllers = new bo(nn, "datasets", !0), this.elements = new bo(Bn, "elements"), this.plugins = new bo(Object, "plugins"), this.scales = new bo(Ys, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, s) {
    [
      ...n
    ].forEach((i) => {
      const r = s || this._getRegistryForType(i);
      s || r.isForType(i) || r === this.plugins && i.id ? this._exec(t, r, i) : Ct(i, (o) => {
        const l = s || this._getRegistryForType(o);
        this._exec(t, l, o);
      });
    });
  }
  _exec(t, n, s) {
    const i = Ka(t);
    Rt(s["before" + i], [], s), n[t](s), Rt(s["after" + i], [], s);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const s = this._typedRegistries[n];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, n, s) {
    const i = n.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return i;
  }
}
var Pe = /* @__PURE__ */ new Kv();
class Jv {
  constructor() {
    this._init = [];
  }
  notify(t, n, s, i) {
    n === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const r = i ? this._descriptors(t).filter(i) : this._descriptors(t), o = this._notify(r, t, n, s);
    return n === "afterDestroy" && (this._notify(r, t, "stop"), this._notify(this._init, t, "uninstall")), o;
  }
  _notify(t, n, s, i) {
    i = i || {};
    for (const r of t) {
      const o = r.plugin, l = o[s], a = [
        n,
        i,
        r.options
      ];
      if (Rt(l, a, o) === !1 && i.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    bt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const n = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const s = t && t.config, i = pt(s.options && s.options.plugins, {}), r = Zv(s);
    return i === !1 && !n ? [] : t4(t, r, i, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [], s = this._cache, i = (r, o) => r.filter((l) => !o.some((a) => l.plugin.id === a.plugin.id));
    this._notify(i(n, s), t, "stop"), this._notify(i(s, n), t, "start");
  }
}
function Zv(e) {
  const t = {}, n = [], s = Object.keys(Pe.plugins.items);
  for (let r = 0; r < s.length; r++)
    n.push(Pe.getPlugin(s[r]));
  const i = e.plugins || [];
  for (let r = 0; r < i.length; r++) {
    const o = i[r];
    n.indexOf(o) === -1 && (n.push(o), t[o.id] = !0);
  }
  return {
    plugins: n,
    localIds: t
  };
}
function Qv(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function t4(e, { plugins: t, localIds: n }, s, i) {
  const r = [], o = e.getContext();
  for (const l of t) {
    const a = l.id, c = Qv(s[a], i);
    c !== null && r.push({
      plugin: l,
      options: e4(e.config, {
        plugin: l,
        local: n[a]
      }, c, o)
    });
  }
  return r;
}
function e4(e, { plugin: t, local: n }, s, i) {
  const r = e.pluginScopeKeys(t), o = e.getOptionScopes(s, r);
  return n && t.defaults && o.push(t.defaults), e.createResolver(o, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function aa(e, t) {
  const n = Ft.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x";
}
function n4(e, t) {
  let n = e;
  return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n;
}
function s4(e, t) {
  return e === t ? "_index_" : "_value_";
}
function vd(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function i4(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function ca(e, ...t) {
  if (vd(e))
    return e;
  for (const n of t) {
    const s = n.axis || i4(n.position) || e.length > 1 && vd(e[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function yd(e, t, n) {
  if (n[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function o4(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((s) => s.xAxisID === e || s.yAxisID === e);
    if (n.length)
      return yd(e, "x", n[0]) || yd(e, "y", n[0]);
  }
  return {};
}
function r4(e, t) {
  const n = ms[e.type] || {
    scales: {}
  }, s = t.scales || {}, i = aa(e.type, t), r = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((o) => {
    const l = s[o];
    if (!ut(l))
      return console.error(`Invalid scale configuration for scale: ${o}`);
    if (l._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
    const a = ca(o, l, o4(o, e), Ft.scales[l.type]), c = s4(a, i), h = n.scales || {};
    r[o] = _i(/* @__PURE__ */ Object.create(null), [
      {
        axis: a
      },
      l,
      h[a],
      h[c]
    ]);
  }), e.data.datasets.forEach((o) => {
    const l = o.type || e.type, a = o.indexAxis || aa(l, t), h = (ms[l] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const u = n4(d, a), f = o[u + "AxisID"] || u;
      r[f] = r[f] || /* @__PURE__ */ Object.create(null), _i(r[f], [
        {
          axis: u
        },
        s[f],
        h[d]
      ]);
    });
  }), Object.keys(r).forEach((o) => {
    const l = r[o];
    _i(l, [
      Ft.scales[l.type],
      Ft.scale
    ]);
  }), r;
}
function O1(e) {
  const t = e.options || (e.options = {});
  t.plugins = pt(t.plugins, {}), t.scales = r4(e, t);
}
function R1(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function l4(e) {
  return e = e || {}, e.data = R1(e.data), O1(e), e;
}
const xd = /* @__PURE__ */ new Map(), T1 = /* @__PURE__ */ new Set();
function vo(e, t) {
  let n = xd.get(e);
  return n || (n = t(), xd.set(e, n), T1.add(n)), n;
}
const li = (e, t, n) => {
  const s = Fn(t, n);
  s !== void 0 && e.add(s);
};
class a4 {
  constructor(t) {
    this._config = l4(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = R1(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), O1(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return vo(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, n) {
    return vo(`${t}.transition.${n}`, () => [
      [
        `datasets.${t}.transitions.${n}`,
        `transitions.${n}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return vo(`${t}-${n}`, () => [
      [
        `datasets.${t}.elements.${n}`,
        `datasets.${t}`,
        `elements.${n}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id, s = this.type;
    return vo(`${s}-plugin-${n}`, () => [
      [
        `plugins.${n}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, n) {
    const s = this._scopeCache;
    let i = s.get(t);
    return (!i || n) && (i = /* @__PURE__ */ new Map(), s.set(t, i)), i;
  }
  getOptionScopes(t, n, s) {
    const { options: i, type: r } = this, o = this._cachedScopes(t, s), l = o.get(n);
    if (l)
      return l;
    const a = /* @__PURE__ */ new Set();
    n.forEach((h) => {
      t && (a.add(t), h.forEach((d) => li(a, t, d))), h.forEach((d) => li(a, i, d)), h.forEach((d) => li(a, ms[r] || {}, d)), h.forEach((d) => li(a, Ft, d)), h.forEach((d) => li(a, oa, d));
    });
    const c = Array.from(a);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), T1.has(n) && o.set(n, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [
      t,
      ms[n] || {},
      Ft.datasets[n] || {},
      {
        type: n
      },
      Ft,
      oa
    ];
  }
  resolveNamedOptions(t, n, s, i = [
    ""
  ]) {
    const r = {
      $shared: !0
    }, { resolver: o, subPrefixes: l } = wd(this._resolverCache, t, i);
    let a = o;
    if (h4(o, n)) {
      r.$shared = !1, s = In(s) ? s() : s;
      const c = this.createResolver(t, s, l);
      a = $s(o, s, c);
    }
    for (const c of n)
      r[c] = a[c];
    return r;
  }
  createResolver(t, n, s = [
    ""
  ], i) {
    const { resolver: r } = wd(this._resolverCache, t, s);
    return ut(n) ? $s(r, n, void 0, i) : r;
  }
}
function wd(e, t, n) {
  let s = e.get(t);
  s || (s = /* @__PURE__ */ new Map(), e.set(t, s));
  const i = n.join();
  let r = s.get(i);
  return r || (r = {
    resolver: ic(t, n),
    subPrefixes: n.filter((l) => !l.toLowerCase().includes("hover"))
  }, s.set(i, r)), r;
}
const c4 = (e) => ut(e) && Object.getOwnPropertyNames(e).some((t) => In(e[t]));
function h4(e, t) {
  const { isScriptable: n, isIndexable: s } = g1(e);
  for (const i of t) {
    const r = n(i), o = s(i), l = (o || r) && e[i];
    if (r && (In(l) || c4(l)) || o && Dt(l))
      return !0;
  }
  return !1;
}
var d4 = "4.5.0";
const u4 = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function kd(e, t) {
  return e === "top" || e === "bottom" || u4.indexOf(e) === -1 && t === "x";
}
function _d(e, t) {
  return function(n, s) {
    return n[e] === s[e] ? n[t] - s[t] : n[e] - s[e];
  };
}
function Md(e) {
  const t = e.chart, n = t.options.animation;
  t.notifyPlugins("afterRender"), Rt(n && n.onComplete, [
    e
  ], t);
}
function f4(e) {
  const t = e.chart, n = t.options.animation;
  Rt(n && n.onProgress, [
    e
  ], t);
}
function L1(e) {
  return lc() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const Ho = {}, Cd = (e) => {
  const t = L1(e);
  return Object.values(Ho).filter((n) => n.canvas === t).pop();
};
function p4(e, t, n) {
  const s = Object.keys(e);
  for (const i of s) {
    const r = +i;
    if (r >= t) {
      const o = e[i];
      delete e[i], (n > 0 || r > t) && (e[r + n] = o);
    }
  }
}
function g4(e, t, n, s) {
  return !n || e.type === "mouseout" ? null : s ? t : e;
}
class lt {
  static register(...t) {
    Pe.add(...t), Pd();
  }
  static unregister(...t) {
    Pe.remove(...t), Pd();
  }
  constructor(t, n) {
    const s = this.config = new a4(n), i = L1(t), r = Cd(i);
    if (r)
      throw new Error("Canvas is already in use. Chart with ID '" + r.id + "' must be destroyed before the canvas with ID '" + r.canvas.id + "' can be reused.");
    const o = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || Rv(i))(), this.platform.updateConfig(s);
    const l = this.platform.acquireContext(i, o.aspectRatio), a = l && l.canvas, c = a && a.height, h = a && a.width;
    if (this.id = d0(), this.ctx = l, this.canvas = a, this.width = h, this.height = c, this._options = o, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Jv(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = D0((d) => this.update(d), o.resizeDelay || 0), this._dataChanges = [], Ho[this.id] = this, !l || !a) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    pn.listen(this, "complete", Md), pn.listen(this, "progress", f4), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: n }, width: s, height: i, _aspectRatio: r } = this;
    return bt(t) ? n && r ? r : i ? s / i : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Pe;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Gh(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return qh(this.canvas, this.ctx), this;
  }
  stop() {
    return pn.stop(this), this;
  }
  resize(t, n) {
    pn.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: n
    } : this._resize(t, n);
  }
  _resize(t, n) {
    const s = this.options, i = this.canvas, r = s.maintainAspectRatio && this.aspectRatio, o = this.platform.getMaximumSize(i, t, n, r), l = s.devicePixelRatio || this.platform.getDevicePixelRatio(), a = this.width ? "resize" : "attach";
    this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, Gh(this, l, !0) && (this.notifyPlugins("resize", {
      size: o
    }), Rt(s.onResize, [
      this,
      o
    ], this), this.attached && this._doResize(a) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    Ct(n, (s, i) => {
      s.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, n = t.scales, s = this.scales, i = Object.keys(s).reduce((o, l) => (o[l] = !1, o), {});
    let r = [];
    n && (r = r.concat(Object.keys(n).map((o) => {
      const l = n[o], a = ca(o, l), c = a === "r", h = a === "x";
      return {
        options: l,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), Ct(r, (o) => {
      const l = o.options, a = l.id, c = ca(a, l), h = pt(l.type, o.dtype);
      (l.position === void 0 || kd(l.position, c) !== kd(o.dposition)) && (l.position = o.dposition), i[a] = !0;
      let d = null;
      if (a in s && s[a].type === h)
        d = s[a];
      else {
        const u = Pe.getScale(h);
        d = new u({
          id: a,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(l, t);
    }), Ct(i, (o, l) => {
      o || delete s[l];
    }), Ct(s, (o) => {
      go.configure(this, o, o.options), go.addBox(this, o);
    });
  }
  _updateMetasets() {
    const t = this._metasets, n = this.data.datasets.length, s = t.length;
    if (t.sort((i, r) => i.index - r.index), s > n) {
      for (let i = n; i < s; ++i)
        this._destroyDatasetMeta(i);
      t.splice(n, s - n);
    }
    this._sortedMetasets = t.slice(0).sort(_d("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: n } } = this;
    t.length > n.length && delete this._stacks, t.forEach((s, i) => {
      n.filter((r) => r === s._dataset).length === 0 && this._destroyDatasetMeta(i);
    });
  }
  buildOrUpdateControllers() {
    const t = [], n = this.data.datasets;
    let s, i;
    for (this._removeUnreferencedMetasets(), s = 0, i = n.length; s < i; s++) {
      const r = n[s];
      let o = this.getDatasetMeta(s);
      const l = r.type || this.config.type;
      if (o.type && o.type !== l && (this._destroyDatasetMeta(s), o = this.getDatasetMeta(s)), o.type = l, o.indexAxis = r.indexAxis || aa(l, this.options), o.order = r.order || 0, o.index = s, o.label = "" + r.label, o.visible = this.isDatasetVisible(s), o.controller)
        o.controller.updateIndex(s), o.controller.linkScales();
      else {
        const a = Pe.getController(l), { datasetElementType: c, dataElementType: h } = Ft.datasets[l];
        Object.assign(a, {
          dataElementType: Pe.getElement(h),
          datasetElementType: c && Pe.getElement(c)
        }), o.controller = new a(this, s), t.push(o.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    Ct(this.data.datasets, (t, n) => {
      this.getDatasetMeta(n).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const n = this.config;
    n.update();
    const s = this._options = n.createResolver(n.chartOptionScopes(), this.getContext()), i = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const r = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let o = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), u = !i && r.indexOf(d) === -1;
      d.buildOrUpdateElements(u), o = Math.max(+d.getMaxOverflow(), o);
    }
    o = this._minPadding = s.layout.autoPadding ? o : 0, this._updateLayout(o), i || Ct(r, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(_d("z", "_idx"));
    const { _active: l, _lastEvent: a } = this;
    a ? this._eventHandler(a, !0) : l.length && this._updateHoverStyles(l, l, !0), this.render();
  }
  _updateScales() {
    Ct(this.scales, (t) => {
      go.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, n = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!Lh(n, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, n = this._getUniformDataChanges() || [];
    for (const { method: s, start: i, count: r } of n) {
      const o = s === "_removeElements" ? -r : r;
      p4(t, i, o);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const n = this.data.datasets.length, s = (r) => new Set(t.filter((o) => o[0] === r).map((o, l) => l + "," + o.splice(1).join(","))), i = s(0);
    for (let r = 1; r < n; r++)
      if (!Lh(i, s(r)))
        return;
    return Array.from(i).map((r) => r.split(",")).map((r) => ({
      method: r[1],
      start: +r[2],
      count: +r[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    go.update(this, this.width, this.height, t);
    const n = this.chartArea, s = n.width <= 0 || n.height <= 0;
    this._layers = [], Ct(this.boxes, (i) => {
      s && i.position === "chartArea" || (i.configure && i.configure(), this._layers.push(...i._layers()));
    }, this), this._layers.forEach((i, r) => {
      i._idx = r;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let n = 0, s = this.data.datasets.length; n < s; ++n)
        this.getDatasetMeta(n).controller.configure();
      for (let n = 0, s = this.data.datasets.length; n < s; ++n)
        this._updateDataset(n, In(t) ? t({
          datasetIndex: n
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, n) {
    const s = this.getDatasetMeta(t), i = {
      meta: s,
      index: t,
      mode: n,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", i) !== !1 && (s.controller._update(n), i.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", i));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (pn.has(this) ? this.attached && !pn.running(this) && pn.start(this) : (this.draw(), Md({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: i } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(s, i);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const n = this._layers;
    for (t = 0; t < n.length && n[t].z <= 0; ++t)
      n[t].draw(this.chartArea);
    for (this._drawDatasets(); t < n.length; ++t)
      n[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const n = this._sortedMetasets, s = [];
    let i, r;
    for (i = 0, r = n.length; i < r; ++i) {
      const o = n[i];
      (!t || o.visible) && s.push(o);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let n = t.length - 1; n >= 0; --n)
      this._drawDataset(t[n]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const n = this.ctx, s = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, i = _1(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (i && zr(n, i), t.controller.draw(), i && jr(n), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return wn(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, s, i) {
    const r = uv.modes[n];
    return typeof r == "function" ? r(this, t, s, i) : [];
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t], s = this._metasets;
    let i = s.filter((r) => r && r._dataset === n).pop();
    return i || (i = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: n && n.order || 0,
      index: t,
      _dataset: n,
      _parsed: [],
      _sorted: !1
    }, s.push(i)), i;
  }
  getContext() {
    return this.$context || (this.$context = Vn(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const n = this.data.datasets[t];
    if (!n)
      return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !n.hidden;
  }
  setDatasetVisibility(t, n) {
    const s = this.getDatasetMeta(t);
    s.hidden = !n;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, n, s) {
    const i = s ? "show" : "hide", r = this.getDatasetMeta(t), o = r.controller._resolveAnimations(void 0, i);
    Bs(n) ? (r.data[n].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), o.update(r, {
      visible: s
    }), this.update((l) => l.datasetIndex === t ? i : void 0));
  }
  hide(t, n) {
    this._updateVisibility(t, n, !1);
  }
  show(t, n) {
    this._updateVisibility(t, n, !0);
  }
  _destroyDatasetMeta(t) {
    const n = this._metasets[t];
    n && n.controller && n.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, n;
    for (this.stop(), pn.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: n } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), qh(t, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), delete Ho[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, n = this.platform, s = (r, o) => {
      n.addEventListener(this, r, o), t[r] = o;
    }, i = (r, o, l) => {
      r.offsetX = o, r.offsetY = l, this._eventHandler(r);
    };
    Ct(this.options.events, (r) => s(r, i));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, n = this.platform, s = (a, c) => {
      n.addEventListener(this, a, c), t[a] = c;
    }, i = (a, c) => {
      t[a] && (n.removeEventListener(this, a, c), delete t[a]);
    }, r = (a, c) => {
      this.canvas && this.resize(a, c);
    };
    let o;
    const l = () => {
      i("attach", l), this.attached = !0, this.resize(), s("resize", r), s("detach", o);
    };
    o = () => {
      this.attached = !1, i("resize", r), this._stop(), this._resize(0, 0), s("attach", l);
    }, n.isAttached(this.canvas) ? l() : o();
  }
  unbindEvents() {
    Ct(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._listeners = {}, Ct(this._responsiveListeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, n, s) {
    const i = s ? "set" : "remove";
    let r, o, l, a;
    for (n === "dataset" && (r = this.getDatasetMeta(t[0].datasetIndex), r.controller["_" + i + "DatasetHoverStyle"]()), l = 0, a = t.length; l < a; ++l) {
      o = t[l];
      const c = o && this.getDatasetMeta(o.datasetIndex).controller;
      c && c[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const n = this._active || [], s = t.map(({ datasetIndex: r, index: o }) => {
      const l = this.getDatasetMeta(r);
      if (!l)
        throw new Error("No dataset found at index " + r);
      return {
        datasetIndex: r,
        element: l.data[o],
        index: o
      };
    });
    !rr(s, n) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, n));
  }
  notifyPlugins(t, n, s) {
    return this._plugins.notify(this, t, n, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, n, s) {
    const i = this.options.hover, r = (a, c) => a.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), o = r(n, t), l = s ? t : r(t, n);
    o.length && this.updateHoverStyle(o, i.mode, !1), l.length && i.mode && this.updateHoverStyle(l, i.mode, !0);
  }
  _eventHandler(t, n) {
    const s = {
      event: t,
      replay: n,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, i = (o) => (o.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, i) === !1)
      return;
    const r = this._handleEvent(t, n, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, i), (r || s.changed) && this.render(), this;
  }
  _handleEvent(t, n, s) {
    const { _active: i = [], options: r } = this, o = n, l = this._getActiveElements(t, i, s, o), a = b0(t), c = g4(t, this._lastEvent, s, a);
    s && (this._lastEvent = null, Rt(r.onHover, [
      t,
      l,
      this
    ], this), a && Rt(r.onClick, [
      t,
      l,
      this
    ], this));
    const h = !rr(l, i);
    return (h || n) && (this._active = l, this._updateHoverStyles(l, i, n)), this._lastEvent = c, h;
  }
  _getActiveElements(t, n, s, i) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return n;
    const r = this.options.hover;
    return this.getElementsAtEventForMode(t, r.mode, r, i);
  }
}
U(lt, "defaults", Ft), U(lt, "instances", Ho), U(lt, "overrides", ms), U(lt, "registry", Pe), U(lt, "version", d4), U(lt, "getChart", Cd);
function Pd() {
  return Ct(lt.instances, (e) => e._plugins.invalidate());
}
function m4(e, t, n) {
  const { startAngle: s, x: i, y: r, outerRadius: o, innerRadius: l, options: a } = t, { borderWidth: c, borderJoinStyle: h } = a, d = Math.min(c / o, Jt(s - n));
  if (e.beginPath(), e.arc(i, r, o - c / 2, s + d / 2, n - d / 2), l > 0) {
    const u = Math.min(c / l, Jt(s - n));
    e.arc(i, r, l + c / 2, n - u / 2, s + u / 2, !0);
  } else {
    const u = Math.min(c / 2, o * Jt(s - n));
    if (h === "round")
      e.arc(i, r, u, n - Pt / 2, s + Pt / 2, !0);
    else if (h === "bevel") {
      const f = 2 * u * u, m = -f * Math.cos(n + Pt / 2) + i, p = -f * Math.sin(n + Pt / 2) + r, b = f * Math.cos(s + Pt / 2) + i, v = f * Math.sin(s + Pt / 2) + r;
      e.lineTo(m, p), e.lineTo(b, v);
    }
  }
  e.closePath(), e.moveTo(0, 0), e.rect(0, 0, e.canvas.width, e.canvas.height), e.clip("evenodd");
}
function b4(e, t, n) {
  const { startAngle: s, pixelMargin: i, x: r, y: o, outerRadius: l, innerRadius: a } = t;
  let c = i / l;
  e.beginPath(), e.arc(r, o, l, s - c, n + c), a > i ? (c = i / a, e.arc(r, o, a, n + c, s - c, !0)) : e.arc(r, o, i, n + Lt, s - Lt), e.closePath(), e.clip();
}
function v4(e) {
  return nc(e, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function y4(e, t, n, s) {
  const i = v4(e.options.borderRadius), r = (n - t) / 2, o = Math.min(r, s * t / 2), l = (a) => {
    const c = (n - Math.min(r, a)) * s / 2;
    return Qt(a, 0, Math.min(r, c));
  };
  return {
    outerStart: l(i.outerStart),
    outerEnd: l(i.outerEnd),
    innerStart: Qt(i.innerStart, 0, o),
    innerEnd: Qt(i.innerEnd, 0, o)
  };
}
function Cs(e, t, n, s) {
  return {
    x: n + e * Math.cos(t),
    y: s + e * Math.sin(t)
  };
}
function fr(e, t, n, s, i, r) {
  const { x: o, y: l, startAngle: a, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + n - c, 0), u = h > 0 ? h + s + n + c : 0;
  let f = 0;
  const m = i - a;
  if (s) {
    const it = h > 0 ? h - s : 0, nt = d > 0 ? d - s : 0, G = (it + nt) / 2, Q = G !== 0 ? m * G / (G + s) : m;
    f = (m - Q) / 2;
  }
  const p = Math.max(1e-3, m * d - n / Pt) / d, b = (m - p) / 2, v = a + b + f, x = i - b - f, { outerStart: C, outerEnd: S, innerStart: w, innerEnd: D } = y4(t, u, d, x - v), _ = d - C, E = d - S, N = v + C / _, I = x - S / E, R = u + w, W = u + D, Z = v + w / R, kt = x - D / W;
  if (e.beginPath(), r) {
    const it = (N + I) / 2;
    if (e.arc(o, l, d, N, it), e.arc(o, l, d, it, I), S > 0) {
      const dt = Cs(E, I, o, l);
      e.arc(dt.x, dt.y, S, I, x + Lt);
    }
    const nt = Cs(W, x, o, l);
    if (e.lineTo(nt.x, nt.y), D > 0) {
      const dt = Cs(W, kt, o, l);
      e.arc(dt.x, dt.y, D, x + Lt, kt + Math.PI);
    }
    const G = (x - D / u + (v + w / u)) / 2;
    if (e.arc(o, l, u, x - D / u, G, !0), e.arc(o, l, u, G, v + w / u, !0), w > 0) {
      const dt = Cs(R, Z, o, l);
      e.arc(dt.x, dt.y, w, Z + Math.PI, v - Lt);
    }
    const Q = Cs(_, v, o, l);
    if (e.lineTo(Q.x, Q.y), C > 0) {
      const dt = Cs(_, N, o, l);
      e.arc(dt.x, dt.y, C, v - Lt, N);
    }
  } else {
    e.moveTo(o, l);
    const it = Math.cos(N) * d + o, nt = Math.sin(N) * d + l;
    e.lineTo(it, nt);
    const G = Math.cos(I) * d + o, Q = Math.sin(I) * d + l;
    e.lineTo(G, Q);
  }
  e.closePath();
}
function x4(e, t, n, s, i) {
  const { fullCircles: r, startAngle: o, circumference: l } = t;
  let a = t.endAngle;
  if (r) {
    fr(e, t, n, s, a, i);
    for (let c = 0; c < r; ++c)
      e.fill();
    isNaN(l) || (a = o + (l % Nt || Nt));
  }
  return fr(e, t, n, s, a, i), e.fill(), a;
}
function w4(e, t, n, s, i) {
  const { fullCircles: r, startAngle: o, circumference: l, options: a } = t, { borderWidth: c, borderJoinStyle: h, borderDash: d, borderDashOffset: u, borderRadius: f } = a, m = a.borderAlign === "inner";
  if (!c)
    return;
  e.setLineDash(d || []), e.lineDashOffset = u, m ? (e.lineWidth = c * 2, e.lineJoin = h || "round") : (e.lineWidth = c, e.lineJoin = h || "bevel");
  let p = t.endAngle;
  if (r) {
    fr(e, t, n, s, p, i);
    for (let b = 0; b < r; ++b)
      e.stroke();
    isNaN(l) || (p = o + (l % Nt || Nt));
  }
  m && b4(e, t, p), a.selfJoin && p - o >= Pt && f === 0 && h !== "miter" && m4(e, t, p), r || (fr(e, t, n, s, p, i), e.stroke());
}
class ui extends Bn {
  constructor(n) {
    super();
    U(this, "circumference");
    U(this, "endAngle");
    U(this, "fullCircles");
    U(this, "innerRadius");
    U(this, "outerRadius");
    U(this, "pixelMargin");
    U(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, n && Object.assign(this, n);
  }
  inRange(n, s, i) {
    const r = this.getProps([
      "x",
      "y"
    ], i), { angle: o, distance: l } = a1(r, {
      x: n,
      y: s
    }), { startAngle: a, endAngle: c, innerRadius: h, outerRadius: d, circumference: u } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), f = (this.options.spacing + this.options.borderWidth) / 2, m = pt(u, c - a), p = Ti(o, a, c) && a !== c, b = m >= Nt || p, v = Li(l, h + f, d + f);
    return b && v;
  }
  getCenterPoint(n) {
    const { x: s, y: i, startAngle: r, endAngle: o, innerRadius: l, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], n), { offset: c, spacing: h } = this.options, d = (r + o) / 2, u = (l + a + h + c) / 2;
    return {
      x: s + Math.cos(d) * u,
      y: i + Math.sin(d) * u
    };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: s, circumference: i } = this, r = (s.offset || 0) / 4, o = (s.spacing || 0) / 2, l = s.circular;
    if (this.pixelMargin = s.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > Nt ? Math.floor(i / Nt) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    n.save();
    const a = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(a) * r, Math.sin(a) * r);
    const c = 1 - Math.sin(Math.min(Pt, i || 0)), h = r * c;
    n.fillStyle = s.backgroundColor, n.strokeStyle = s.borderColor, x4(n, this, h, o, l), w4(n, this, h, o, l), n.restore();
  }
}
U(ui, "id", "arc"), U(ui, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0,
  selfJoin: !1
}), U(ui, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), U(ui, "descriptors", {
  _scriptable: !0,
  _indexable: (n) => n !== "borderDash"
});
function F1(e, t, n = t) {
  e.lineCap = pt(n.borderCapStyle, t.borderCapStyle), e.setLineDash(pt(n.borderDash, t.borderDash)), e.lineDashOffset = pt(n.borderDashOffset, t.borderDashOffset), e.lineJoin = pt(n.borderJoinStyle, t.borderJoinStyle), e.lineWidth = pt(n.borderWidth, t.borderWidth), e.strokeStyle = pt(n.borderColor, t.borderColor);
}
function k4(e, t, n) {
  e.lineTo(n.x, n.y);
}
function _4(e) {
  return e.stepped ? j0 : e.tension || e.cubicInterpolationMode === "monotone" ? W0 : k4;
}
function I1(e, t, n = {}) {
  const s = e.length, { start: i = 0, end: r = s - 1 } = n, { start: o, end: l } = t, a = Math.max(i, o), c = Math.min(r, l), h = i < o && r < o || i > l && r > l;
  return {
    count: s,
    start: a,
    loop: t.loop,
    ilen: c < a && !h ? s + c - a : c - a
  };
}
function M4(e, t, n, s) {
  const { points: i, options: r } = t, { count: o, start: l, loop: a, ilen: c } = I1(i, n, s), h = _4(r);
  let { move: d = !0, reverse: u } = s || {}, f, m, p;
  for (f = 0; f <= c; ++f)
    m = i[(l + (u ? c - f : f)) % o], !m.skip && (d ? (e.moveTo(m.x, m.y), d = !1) : h(e, p, m, u, r.stepped), p = m);
  return a && (m = i[(l + (u ? c : 0)) % o], h(e, p, m, u, r.stepped)), !!a;
}
function C4(e, t, n, s) {
  const i = t.points, { count: r, start: o, ilen: l } = I1(i, n, s), { move: a = !0, reverse: c } = s || {};
  let h = 0, d = 0, u, f, m, p, b, v;
  const x = (S) => (o + (c ? l - S : S)) % r, C = () => {
    p !== b && (e.lineTo(h, b), e.lineTo(h, p), e.lineTo(h, v));
  };
  for (a && (f = i[x(0)], e.moveTo(f.x, f.y)), u = 0; u <= l; ++u) {
    if (f = i[x(u)], f.skip)
      continue;
    const S = f.x, w = f.y, D = S | 0;
    D === m ? (w < p ? p = w : w > b && (b = w), h = (d * h + S) / ++d) : (C(), e.lineTo(S, w), m = D, d = 0, p = b = w), v = w;
  }
  C();
}
function ha(e) {
  const t = e.options, n = t.borderDash && t.borderDash.length;
  return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !n ? C4 : M4;
}
function P4(e) {
  return e.stepped ? _b : e.tension || e.cubicInterpolationMode === "monotone" ? Mb : Zn;
}
function S4(e, t, n, s) {
  let i = t._path;
  i || (i = t._path = new Path2D(), t.path(i, n, s) && i.closePath()), F1(e, t.options), e.stroke(i);
}
function E4(e, t, n, s) {
  const { segments: i, options: r } = t, o = ha(t);
  for (const l of i)
    F1(e, r, l.style), e.beginPath(), o(e, t, l, {
      start: n,
      end: n + s - 1
    }) && e.closePath(), e.stroke();
}
const D4 = typeof Path2D == "function";
function A4(e, t, n, s) {
  D4 && !t.options.segment ? S4(e, t, n, s) : E4(e, t, n, s);
}
class tn extends Bn {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const i = s.spanGaps ? this._loop : this._fullLoop;
      gb(this._points, s, t, i, n), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Ob(this, this.options.segment));
  }
  first() {
    const t = this.segments, n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments, n = this.points, s = t.length;
    return s && n[t[s - 1].end];
  }
  interpolate(t, n) {
    const s = this.options, i = t[n], r = this.points, o = k1(this, {
      property: n,
      start: i,
      end: i
    });
    if (!o.length)
      return;
    const l = [], a = P4(s);
    let c, h;
    for (c = 0, h = o.length; c < h; ++c) {
      const { start: d, end: u } = o[c], f = r[d], m = r[u];
      if (f === m) {
        l.push(f);
        continue;
      }
      const p = Math.abs((i - f[n]) / (m[n] - f[n])), b = a(f, m, p, s.stepped);
      b[n] = t[n], l.push(b);
    }
    return l.length === 1 ? l[0] : l;
  }
  pathSegment(t, n, s) {
    return ha(this)(t, this, n, s);
  }
  path(t, n, s) {
    const i = this.segments, r = ha(this);
    let o = this._loop;
    n = n || 0, s = s || this.points.length - n;
    for (const l of i)
      o &= r(t, this, l, {
        start: n,
        end: n + s - 1
      });
    return !!o;
  }
  draw(t, n, s, i) {
    const r = this.options || {};
    (this.points || []).length && r.borderWidth && (t.save(), A4(t, this, s, i), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
U(tn, "id", "line"), U(tn, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), U(tn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), U(tn, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Sd(e, t, n, s) {
  const i = e.options, { [n]: r } = e.getProps([
    n
  ], s);
  return Math.abs(t - r) < i.radius + i.hitRadius;
}
class Si extends Bn {
  constructor(n) {
    super();
    U(this, "parsed");
    U(this, "skip");
    U(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, n && Object.assign(this, n);
  }
  inRange(n, s, i) {
    const r = this.options, { x: o, y: l } = this.getProps([
      "x",
      "y"
    ], i);
    return Math.pow(n - o, 2) + Math.pow(s - l, 2) < Math.pow(r.hitRadius + r.radius, 2);
  }
  inXRange(n, s) {
    return Sd(this, n, "x", s);
  }
  inYRange(n, s) {
    return Sd(this, n, "y", s);
  }
  getCenterPoint(n) {
    const { x: s, y: i } = this.getProps([
      "x",
      "y"
    ], n);
    return {
      x: s,
      y: i
    };
  }
  size(n) {
    n = n || this.options || {};
    let s = n.radius || 0;
    s = Math.max(s, s && n.hoverRadius || 0);
    const i = s && n.borderWidth || 0;
    return (s + i) * 2;
  }
  draw(n, s) {
    const i = this.options;
    this.skip || i.radius < 0.1 || !wn(this, s, this.size(i) / 2) || (n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.fillStyle = i.backgroundColor, ra(n, i, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
U(Si, "id", "point"), /**
* @type {any}
*/
U(Si, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
U(Si, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function V1(e, t) {
  const { x: n, y: s, base: i, width: r, height: o } = e.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let l, a, c, h, d;
  return e.horizontal ? (d = o / 2, l = Math.min(n, i), a = Math.max(n, i), c = s - d, h = s + d) : (d = r / 2, l = n - d, a = n + d, c = Math.min(s, i), h = Math.max(s, i)), {
    left: l,
    top: c,
    right: a,
    bottom: h
  };
}
function Nn(e, t, n, s) {
  return e ? 0 : Qt(t, n, s);
}
function N4(e, t, n) {
  const s = e.options.borderWidth, i = e.borderSkipped, r = sc(s);
  return {
    t: Nn(i.top, r.top, 0, n),
    r: Nn(i.right, r.right, 0, t),
    b: Nn(i.bottom, r.bottom, 0, n),
    l: Nn(i.left, r.left, 0, t)
  };
}
function O4(e, t, n) {
  const { enableBorderRadius: s } = e.getProps([
    "enableBorderRadius"
  ]), i = e.options.borderRadius, r = cs(i), o = Math.min(t, n), l = e.borderSkipped, a = s || ut(i);
  return {
    topLeft: Nn(!a || l.top || l.left, r.topLeft, 0, o),
    topRight: Nn(!a || l.top || l.right, r.topRight, 0, o),
    bottomLeft: Nn(!a || l.bottom || l.left, r.bottomLeft, 0, o),
    bottomRight: Nn(!a || l.bottom || l.right, r.bottomRight, 0, o)
  };
}
function R4(e) {
  const t = V1(e), n = t.right - t.left, s = t.bottom - t.top, i = N4(e, n / 2, s / 2), r = O4(e, n / 2, s / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: n,
      h: s,
      radius: r
    },
    inner: {
      x: t.left + i.l,
      y: t.top + i.t,
      w: n - i.l - i.r,
      h: s - i.t - i.b,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(i.t, i.l)),
        topRight: Math.max(0, r.topRight - Math.max(i.t, i.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(i.b, i.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(i.b, i.r))
      }
    }
  };
}
function wl(e, t, n, s) {
  const i = t === null, r = n === null, l = e && !(i && r) && V1(e, s);
  return l && (i || Li(t, l.left, l.right)) && (r || Li(n, l.top, l.bottom));
}
function T4(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function L4(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function kl(e, t, n = {}) {
  const s = e.x !== n.x ? -t : 0, i = e.y !== n.y ? -t : 0, r = (e.x + e.w !== n.x + n.w ? t : 0) - s, o = (e.y + e.h !== n.y + n.h ? t : 0) - i;
  return {
    x: e.x + s,
    y: e.y + i,
    w: e.w + r,
    h: e.h + o,
    radius: e.radius
  };
}
class zo extends Bn {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: n, options: { borderColor: s, backgroundColor: i } } = this, { inner: r, outer: o } = R4(this), l = T4(o.radius) ? Fi : L4;
    t.save(), (o.w !== r.w || o.h !== r.h) && (t.beginPath(), l(t, kl(o, n, r)), t.clip(), l(t, kl(r, -n, o)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), l(t, kl(r, n)), t.fillStyle = i, t.fill(), t.restore();
  }
  inRange(t, n, s) {
    return wl(this, t, n, s);
  }
  inXRange(t, n) {
    return wl(this, t, null, n);
  }
  inYRange(t, n) {
    return wl(this, null, t, n);
  }
  getCenterPoint(t) {
    const { x: n, y: s, base: i, horizontal: r } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: r ? (n + i) / 2 : n,
      y: r ? s : (s + i) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
U(zo, "id", "bar"), U(zo, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), U(zo, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function F4(e, t, n) {
  const s = e.segments, i = e.points, r = t.points, o = [];
  for (const l of s) {
    let { start: a, end: c } = l;
    c = Yr(a, c, i);
    const h = da(n, i[a], i[c], l.loop);
    if (!t.segments) {
      o.push({
        source: l,
        target: h,
        start: i[a],
        end: i[c]
      });
      continue;
    }
    const d = k1(t, h);
    for (const u of d) {
      const f = da(n, r[u.start], r[u.end], u.loop), m = w1(l, i, f);
      for (const p of m)
        o.push({
          source: p,
          target: u,
          start: {
            [n]: Ed(h, f, "start", Math.max)
          },
          end: {
            [n]: Ed(h, f, "end", Math.min)
          }
        });
    }
  }
  return o;
}
function da(e, t, n, s) {
  if (s)
    return;
  let i = t[e], r = n[e];
  return e === "angle" && (i = Jt(i), r = Jt(r)), {
    property: e,
    start: i,
    end: r
  };
}
function I4(e, t) {
  const { x: n = null, y: s = null } = e || {}, i = t.points, r = [];
  return t.segments.forEach(({ start: o, end: l }) => {
    l = Yr(o, l, i);
    const a = i[o], c = i[l];
    s !== null ? (r.push({
      x: a.x,
      y: s
    }), r.push({
      x: c.x,
      y: s
    })) : n !== null && (r.push({
      x: n,
      y: a.y
    }), r.push({
      x: n,
      y: c.y
    }));
  }), r;
}
function Yr(e, t, n) {
  for (; t > e; t--) {
    const s = n[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function Ed(e, t, n, s) {
  return e && t ? s(e[n], t[n]) : e ? e[n] : t ? t[n] : 0;
}
function B1(e, t) {
  let n = [], s = !1;
  return Dt(e) ? (s = !0, n = e) : n = I4(e, t), n.length ? new tn({
    points: n,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function Dd(e) {
  return e && e.fill !== !1;
}
function V4(e, t, n) {
  let i = e[t].fill;
  const r = [
    t
  ];
  let o;
  if (!n)
    return i;
  for (; i !== !1 && r.indexOf(i) === -1; ) {
    if (!Ut(i))
      return i;
    if (o = e[i], !o)
      return !1;
    if (o.visible)
      return i;
    r.push(i), i = o.fill;
  }
  return !1;
}
function B4(e, t, n) {
  const s = j4(e);
  if (ut(s))
    return isNaN(s.value) ? !1 : s;
  let i = parseFloat(s);
  return Ut(i) && Math.floor(i) === i ? $4(s[0], t, i, n) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function $4(e, t, n, s) {
  return (e === "-" || e === "+") && (n = t + n), n === t || n < 0 || n >= s ? !1 : n;
}
function H4(e, t) {
  let n = null;
  return e === "start" ? n = t.bottom : e === "end" ? n = t.top : ut(e) ? n = t.getPixelForValue(e.value) : t.getBasePixel && (n = t.getBasePixel()), n;
}
function z4(e, t, n) {
  let s;
  return e === "start" ? s = n : e === "end" ? s = t.options.reverse ? t.min : t.max : ut(e) ? s = e.value : s = t.getBaseValue(), s;
}
function j4(e) {
  const t = e.options, n = t.fill;
  let s = pt(n && n.target, n);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function W4(e) {
  const { scale: t, index: n, line: s } = e, i = [], r = s.segments, o = s.points, l = q4(t, n);
  l.push(B1({
    x: null,
    y: t.bottom
  }, s));
  for (let a = 0; a < r.length; a++) {
    const c = r[a];
    for (let h = c.start; h <= c.end; h++)
      Y4(i, o[h], l);
  }
  return new tn({
    points: i,
    options: {}
  });
}
function q4(e, t) {
  const n = [], s = e.getMatchingVisibleMetas("line");
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (r.index === t)
      break;
    r.hidden || n.unshift(r.dataset);
  }
  return n;
}
function Y4(e, t, n) {
  const s = [];
  for (let i = 0; i < n.length; i++) {
    const r = n[i], { first: o, last: l, point: a } = U4(r, t, "x");
    if (!(!a || o && l)) {
      if (o)
        s.unshift(a);
      else if (e.push(a), !l)
        break;
    }
  }
  e.push(...s);
}
function U4(e, t, n) {
  const s = e.interpolate(t, n);
  if (!s)
    return {};
  const i = s[n], r = e.segments, o = e.points;
  let l = !1, a = !1;
  for (let c = 0; c < r.length; c++) {
    const h = r[c], d = o[h.start][n], u = o[h.end][n];
    if (Li(i, d, u)) {
      l = i === d, a = i === u;
      break;
    }
  }
  return {
    first: l,
    last: a,
    point: s
  };
}
class $1 {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, n, s) {
    const { x: i, y: r, radius: o } = this;
    return n = n || {
      start: 0,
      end: Nt
    }, t.arc(i, r, o, n.end, n.start, !0), !s.bounds;
  }
  interpolate(t) {
    const { x: n, y: s, radius: i } = this, r = t.angle;
    return {
      x: n + Math.cos(r) * i,
      y: s + Math.sin(r) * i,
      angle: r
    };
  }
}
function G4(e) {
  const { chart: t, fill: n, line: s } = e;
  if (Ut(n))
    return X4(t, n);
  if (n === "stack")
    return W4(e);
  if (n === "shape")
    return !0;
  const i = K4(e);
  return i instanceof $1 ? i : B1(i, s);
}
function X4(e, t) {
  const n = e.getDatasetMeta(t);
  return n && e.isDatasetVisible(t) ? n.dataset : null;
}
function K4(e) {
  return (e.scale || {}).getPointPositionForValue ? Z4(e) : J4(e);
}
function J4(e) {
  const { scale: t = {}, fill: n } = e, s = H4(n, t);
  if (Ut(s)) {
    const i = t.isHorizontal();
    return {
      x: i ? s : null,
      y: i ? null : s
    };
  }
  return null;
}
function Z4(e) {
  const { scale: t, fill: n } = e, s = t.options, i = t.getLabels().length, r = s.reverse ? t.max : t.min, o = z4(n, t, r), l = [];
  if (s.grid.circular) {
    const a = t.getPointPositionForValue(0, r);
    return new $1({
      x: a.x,
      y: a.y,
      radius: t.getDistanceFromCenterForValue(o)
    });
  }
  for (let a = 0; a < i; ++a)
    l.push(t.getPointPositionForValue(a, o));
  return l;
}
function _l(e, t, n) {
  const s = G4(t), { chart: i, index: r, line: o, scale: l, axis: a } = t, c = o.options, h = c.fill, d = c.backgroundColor, { above: u = d, below: f = d } = h || {}, m = i.getDatasetMeta(r), p = _1(i, m);
  s && o.points.length && (zr(e, n), Q4(e, {
    line: o,
    target: s,
    above: u,
    below: f,
    area: n,
    scale: l,
    axis: a,
    clip: p
  }), jr(e));
}
function Q4(e, t) {
  const { line: n, target: s, above: i, below: r, area: o, scale: l, clip: a } = t, c = n._loop ? "angle" : t.axis;
  e.save();
  let h = r;
  r !== i && (c === "x" ? (Ad(e, s, o.top), Ml(e, {
    line: n,
    target: s,
    color: i,
    scale: l,
    property: c,
    clip: a
  }), e.restore(), e.save(), Ad(e, s, o.bottom)) : c === "y" && (Nd(e, s, o.left), Ml(e, {
    line: n,
    target: s,
    color: r,
    scale: l,
    property: c,
    clip: a
  }), e.restore(), e.save(), Nd(e, s, o.right), h = i)), Ml(e, {
    line: n,
    target: s,
    color: h,
    scale: l,
    property: c,
    clip: a
  }), e.restore();
}
function Ad(e, t, n) {
  const { segments: s, points: i } = t;
  let r = !0, o = !1;
  e.beginPath();
  for (const l of s) {
    const { start: a, end: c } = l, h = i[a], d = i[Yr(a, c, i)];
    r ? (e.moveTo(h.x, h.y), r = !1) : (e.lineTo(h.x, n), e.lineTo(h.x, h.y)), o = !!t.pathSegment(e, l, {
      move: o
    }), o ? e.closePath() : e.lineTo(d.x, n);
  }
  e.lineTo(t.first().x, n), e.closePath(), e.clip();
}
function Nd(e, t, n) {
  const { segments: s, points: i } = t;
  let r = !0, o = !1;
  e.beginPath();
  for (const l of s) {
    const { start: a, end: c } = l, h = i[a], d = i[Yr(a, c, i)];
    r ? (e.moveTo(h.x, h.y), r = !1) : (e.lineTo(n, h.y), e.lineTo(h.x, h.y)), o = !!t.pathSegment(e, l, {
      move: o
    }), o ? e.closePath() : e.lineTo(n, d.y);
  }
  e.lineTo(n, t.first().y), e.closePath(), e.clip();
}
function Ml(e, t) {
  const { line: n, target: s, property: i, color: r, scale: o, clip: l } = t, a = F4(n, s, i);
  for (const { source: c, target: h, start: d, end: u } of a) {
    const { style: { backgroundColor: f = r } = {} } = c, m = s !== !0;
    e.save(), e.fillStyle = f, ty(e, o, l, m && da(i, d, u)), e.beginPath();
    const p = !!n.pathSegment(e, c);
    let b;
    if (m) {
      p ? e.closePath() : Od(e, s, u, i);
      const v = !!s.pathSegment(e, h, {
        move: p,
        reverse: !0
      });
      b = p && v, b || Od(e, s, d, i);
    }
    e.closePath(), e.fill(b ? "evenodd" : "nonzero"), e.restore();
  }
}
function ty(e, t, n, s) {
  const i = t.chart.chartArea, { property: r, start: o, end: l } = s || {};
  if (r === "x" || r === "y") {
    let a, c, h, d;
    r === "x" ? (a = o, c = i.top, h = l, d = i.bottom) : (a = i.left, c = o, h = i.right, d = l), e.beginPath(), n && (a = Math.max(a, n.left), h = Math.min(h, n.right), c = Math.max(c, n.top), d = Math.min(d, n.bottom)), e.rect(a, c, h - a, d - c), e.clip();
  }
}
function Od(e, t, n, s) {
  const i = t.interpolate(n, s);
  i && e.lineTo(i.x, i.y);
}
var H1 = {
  id: "filler",
  afterDatasetsUpdate(e, t, n) {
    const s = (e.data.datasets || []).length, i = [];
    let r, o, l, a;
    for (o = 0; o < s; ++o)
      r = e.getDatasetMeta(o), l = r.dataset, a = null, l && l.options && l instanceof tn && (a = {
        visible: e.isDatasetVisible(o),
        index: o,
        fill: B4(l, o, s),
        chart: e,
        axis: r.controller.options.indexAxis,
        scale: r.vScale,
        line: l
      }), r.$filler = a, i.push(a);
    for (o = 0; o < s; ++o)
      a = i[o], !(!a || a.fill === !1) && (a.fill = V4(i, o, n.propagate));
  },
  beforeDraw(e, t, n) {
    const s = n.drawTime === "beforeDraw", i = e.getSortedVisibleDatasetMetas(), r = e.chartArea;
    for (let o = i.length - 1; o >= 0; --o) {
      const l = i[o].$filler;
      l && (l.line.updateControlPoints(r, l.axis), s && l.fill && _l(e.ctx, l, r));
    }
  },
  beforeDatasetsDraw(e, t, n) {
    if (n.drawTime !== "beforeDatasetsDraw")
      return;
    const s = e.getSortedVisibleDatasetMetas();
    for (let i = s.length - 1; i >= 0; --i) {
      const r = s[i].$filler;
      Dd(r) && _l(e.ctx, r, e.chartArea);
    }
  },
  beforeDatasetDraw(e, t, n) {
    const s = t.meta.$filler;
    !Dd(s) || n.drawTime !== "beforeDatasetDraw" || _l(e.ctx, s, e.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const fi = {
  average(e) {
    if (!e.length)
      return !1;
    let t, n, s = /* @__PURE__ */ new Set(), i = 0, r = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const l = e[t].element;
      if (l && l.hasValue()) {
        const a = l.tooltipPosition();
        s.add(a.x), i += a.y, ++r;
      }
    }
    return r === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((l, a) => l + a) / s.size,
      y: i / r
    };
  },
  nearest(e, t) {
    if (!e.length)
      return !1;
    let n = t.x, s = t.y, i = Number.POSITIVE_INFINITY, r, o, l;
    for (r = 0, o = e.length; r < o; ++r) {
      const a = e[r].element;
      if (a && a.hasValue()) {
        const c = a.getCenterPoint(), h = ia(t, c);
        h < i && (i = h, l = a);
      }
    }
    if (l) {
      const a = l.tooltipPosition();
      n = a.x, s = a.y;
    }
    return {
      x: n,
      y: s
    };
  }
};
function Ue(e, t) {
  return t && (Dt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function gn(e) {
  return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e;
}
function ey(e, t) {
  const { element: n, datasetIndex: s, index: i } = t, r = e.getDatasetMeta(s).controller, { label: o, value: l } = r.getLabelAndValue(i);
  return {
    chart: e,
    label: o,
    parsed: r.getParsed(i),
    raw: e.data.datasets[s].data[i],
    formattedValue: l,
    dataset: r.getDataset(),
    dataIndex: i,
    datasetIndex: s,
    element: n
  };
}
function Rd(e, t) {
  const n = e.chart.ctx, { body: s, footer: i, title: r } = e, { boxWidth: o, boxHeight: l } = t, a = jt(t.bodyFont), c = jt(t.titleFont), h = jt(t.footerFont), d = r.length, u = i.length, f = s.length, m = Ee(t.padding);
  let p = m.height, b = 0, v = s.reduce((S, w) => S + w.before.length + w.lines.length + w.after.length, 0);
  if (v += e.beforeBody.length + e.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), v) {
    const S = t.displayColors ? Math.max(l, a.lineHeight) : a.lineHeight;
    p += f * S + (v - f) * a.lineHeight + (v - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let x = 0;
  const C = function(S) {
    b = Math.max(b, n.measureText(S).width + x);
  };
  return n.save(), n.font = c.string, Ct(e.title, C), n.font = a.string, Ct(e.beforeBody.concat(e.afterBody), C), x = t.displayColors ? o + 2 + t.boxPadding : 0, Ct(s, (S) => {
    Ct(S.before, C), Ct(S.lines, C), Ct(S.after, C);
  }), x = 0, n.font = h.string, Ct(e.footer, C), n.restore(), b += m.width, {
    width: b,
    height: p
  };
}
function ny(e, t) {
  const { y: n, height: s } = t;
  return n < s / 2 ? "top" : n > e.height - s / 2 ? "bottom" : "center";
}
function sy(e, t, n, s) {
  const { x: i, width: r } = s, o = n.caretSize + n.caretPadding;
  if (e === "left" && i + r + o > t.width || e === "right" && i - r - o < 0)
    return !0;
}
function iy(e, t, n, s) {
  const { x: i, width: r } = n, { width: o, chartArea: { left: l, right: a } } = e;
  let c = "center";
  return s === "center" ? c = i <= (l + a) / 2 ? "left" : "right" : i <= r / 2 ? c = "left" : i >= o - r / 2 && (c = "right"), sy(c, e, t, n) && (c = "center"), c;
}
function Td(e, t, n) {
  const s = n.yAlign || t.yAlign || ny(e, n);
  return {
    xAlign: n.xAlign || t.xAlign || iy(e, t, n, s),
    yAlign: s
  };
}
function oy(e, t) {
  let { x: n, width: s } = e;
  return t === "right" ? n -= s : t === "center" && (n -= s / 2), n;
}
function ry(e, t, n) {
  let { y: s, height: i } = e;
  return t === "top" ? s += n : t === "bottom" ? s -= i + n : s -= i / 2, s;
}
function Ld(e, t, n, s) {
  const { caretSize: i, caretPadding: r, cornerRadius: o } = e, { xAlign: l, yAlign: a } = n, c = i + r, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = cs(o);
  let m = oy(t, l);
  const p = ry(t, a, c);
  return a === "center" ? l === "left" ? m += c : l === "right" && (m -= c) : l === "left" ? m -= Math.max(h, u) + i : l === "right" && (m += Math.max(d, f) + i), {
    x: Qt(m, 0, s.width - t.width),
    y: Qt(p, 0, s.height - t.height)
  };
}
function yo(e, t, n) {
  const s = Ee(n.padding);
  return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - s.right : e.x + s.left;
}
function Fd(e) {
  return Ue([], gn(e));
}
function ly(e, t, n) {
  return Vn(e, {
    tooltip: t,
    tooltipItems: n,
    type: "tooltip"
  });
}
function Id(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const z1 = {
  beforeTitle: un,
  title(e) {
    if (e.length > 0) {
      const t = e[0], n = t.chart.data.labels, s = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: un,
  beforeBody: un,
  beforeLabel: un,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return bt(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      pointStyle: n.pointStyle,
      rotation: n.rotation
    };
  },
  afterLabel: un,
  afterBody: un,
  beforeFooter: un,
  footer: un,
  afterFooter: un
};
function de(e, t, n, s) {
  const i = e[t].call(n, s);
  return typeof i > "u" ? z1[t].call(n, s) : i;
}
class ua extends Bn {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const n = this.chart, s = this.options.setContext(this.getContext()), i = s.enabled && n.options.animation && s.animations, r = new M1(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
  }
  getContext() {
    return this.$context || (this.$context = ly(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, n) {
    const { callbacks: s } = n, i = de(s, "beforeTitle", this, t), r = de(s, "title", this, t), o = de(s, "afterTitle", this, t);
    let l = [];
    return l = Ue(l, gn(i)), l = Ue(l, gn(r)), l = Ue(l, gn(o)), l;
  }
  getBeforeBody(t, n) {
    return Fd(de(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: s } = n, i = [];
    return Ct(t, (r) => {
      const o = {
        before: [],
        lines: [],
        after: []
      }, l = Id(s, r);
      Ue(o.before, gn(de(l, "beforeLabel", this, r))), Ue(o.lines, de(l, "label", this, r)), Ue(o.after, gn(de(l, "afterLabel", this, r))), i.push(o);
    }), i;
  }
  getAfterBody(t, n) {
    return Fd(de(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: s } = n, i = de(s, "beforeFooter", this, t), r = de(s, "footer", this, t), o = de(s, "afterFooter", this, t);
    let l = [];
    return l = Ue(l, gn(i)), l = Ue(l, gn(r)), l = Ue(l, gn(o)), l;
  }
  _createItems(t) {
    const n = this._active, s = this.chart.data, i = [], r = [], o = [];
    let l = [], a, c;
    for (a = 0, c = n.length; a < c; ++a)
      l.push(ey(this.chart, n[a]));
    return t.filter && (l = l.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (l = l.sort((h, d) => t.itemSort(h, d, s))), Ct(l, (h) => {
      const d = Id(t.callbacks, h);
      i.push(de(d, "labelColor", this, h)), r.push(de(d, "labelPointStyle", this, h)), o.push(de(d, "labelTextColor", this, h));
    }), this.labelColors = i, this.labelPointStyles = r, this.labelTextColors = o, this.dataPoints = l, l;
  }
  update(t, n) {
    const s = this.options.setContext(this.getContext()), i = this._active;
    let r, o = [];
    if (!i.length)
      this.opacity !== 0 && (r = {
        opacity: 0
      });
    else {
      const l = fi[s.position].call(this, i, this._eventPosition);
      o = this._createItems(s), this.title = this.getTitle(o, s), this.beforeBody = this.getBeforeBody(o, s), this.body = this.getBody(o, s), this.afterBody = this.getAfterBody(o, s), this.footer = this.getFooter(o, s);
      const a = this._size = Rd(this, s), c = Object.assign({}, l, a), h = Td(this.chart, s, c), d = Ld(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, r = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: a.width,
        height: a.height,
        caretX: l.x,
        caretY: l.y
      };
    }
    this._tooltipItems = o, this.$context = void 0, r && this._resolveAnimations().update(this, r), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: n
    });
  }
  drawCaret(t, n, s, i) {
    const r = this.getCaretPosition(t, s, i);
    n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3);
  }
  getCaretPosition(t, n, s) {
    const { xAlign: i, yAlign: r } = this, { caretSize: o, cornerRadius: l } = s, { topLeft: a, topRight: c, bottomLeft: h, bottomRight: d } = cs(l), { x: u, y: f } = t, { width: m, height: p } = n;
    let b, v, x, C, S, w;
    return r === "center" ? (S = f + p / 2, i === "left" ? (b = u, v = b - o, C = S + o, w = S - o) : (b = u + m, v = b + o, C = S - o, w = S + o), x = b) : (i === "left" ? v = u + Math.max(a, h) + o : i === "right" ? v = u + m - Math.max(c, d) - o : v = this.caretX, r === "top" ? (C = f, S = C - o, b = v - o, x = v + o) : (C = f + p, S = C + o, b = v + o, x = v - o), w = C), {
      x1: b,
      x2: v,
      x3: x,
      y1: C,
      y2: S,
      y3: w
    };
  }
  drawTitle(t, n, s) {
    const i = this.title, r = i.length;
    let o, l, a;
    if (r) {
      const c = fl(s.rtl, this.x, this.width);
      for (t.x = yo(this, s.titleAlign, s), n.textAlign = c.textAlign(s.titleAlign), n.textBaseline = "middle", o = jt(s.titleFont), l = s.titleSpacing, n.fillStyle = s.titleColor, n.font = o.string, a = 0; a < r; ++a)
        n.fillText(i[a], c.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + l, a + 1 === r && (t.y += s.titleMarginBottom - l);
    }
  }
  _drawColorBox(t, n, s, i, r) {
    const o = this.labelColors[s], l = this.labelPointStyles[s], { boxHeight: a, boxWidth: c } = r, h = jt(r.bodyFont), d = yo(this, "left", r), u = i.x(d), f = a < h.lineHeight ? (h.lineHeight - a) / 2 : 0, m = n.y + f;
    if (r.usePointStyle) {
      const p = {
        radius: Math.min(c, a) / 2,
        pointStyle: l.pointStyle,
        rotation: l.rotation,
        borderWidth: 1
      }, b = i.leftForLtr(u, c) + c / 2, v = m + a / 2;
      t.strokeStyle = r.multiKeyBackground, t.fillStyle = r.multiKeyBackground, ra(t, p, b, v), t.strokeStyle = o.borderColor, t.fillStyle = o.backgroundColor, ra(t, p, b, v);
    } else {
      t.lineWidth = ut(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1, t.strokeStyle = o.borderColor, t.setLineDash(o.borderDash || []), t.lineDashOffset = o.borderDashOffset || 0;
      const p = i.leftForLtr(u, c), b = i.leftForLtr(i.xPlus(u, 1), c - 2), v = cs(o.borderRadius);
      Object.values(v).some((x) => x !== 0) ? (t.beginPath(), t.fillStyle = r.multiKeyBackground, Fi(t, {
        x: p,
        y: m,
        w: c,
        h: a,
        radius: v
      }), t.fill(), t.stroke(), t.fillStyle = o.backgroundColor, t.beginPath(), Fi(t, {
        x: b,
        y: m + 1,
        w: c - 2,
        h: a - 2,
        radius: v
      }), t.fill()) : (t.fillStyle = r.multiKeyBackground, t.fillRect(p, m, c, a), t.strokeRect(p, m, c, a), t.fillStyle = o.backgroundColor, t.fillRect(b, m + 1, c - 2, a - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, n, s) {
    const { body: i } = this, { bodySpacing: r, bodyAlign: o, displayColors: l, boxHeight: a, boxWidth: c, boxPadding: h } = s, d = jt(s.bodyFont);
    let u = d.lineHeight, f = 0;
    const m = fl(s.rtl, this.x, this.width), p = function(E) {
      n.fillText(E, m.x(t.x + f), t.y + u / 2), t.y += u + r;
    }, b = m.textAlign(o);
    let v, x, C, S, w, D, _;
    for (n.textAlign = o, n.textBaseline = "middle", n.font = d.string, t.x = yo(this, b, s), n.fillStyle = s.bodyColor, Ct(this.beforeBody, p), f = l && b !== "right" ? o === "center" ? c / 2 + h : c + 2 + h : 0, S = 0, D = i.length; S < D; ++S) {
      for (v = i[S], x = this.labelTextColors[S], n.fillStyle = x, Ct(v.before, p), C = v.lines, l && C.length && (this._drawColorBox(n, t, S, m, s), u = Math.max(d.lineHeight, a)), w = 0, _ = C.length; w < _; ++w)
        p(C[w]), u = d.lineHeight;
      Ct(v.after, p);
    }
    f = 0, u = d.lineHeight, Ct(this.afterBody, p), t.y -= r;
  }
  drawFooter(t, n, s) {
    const i = this.footer, r = i.length;
    let o, l;
    if (r) {
      const a = fl(s.rtl, this.x, this.width);
      for (t.x = yo(this, s.footerAlign, s), t.y += s.footerMarginTop, n.textAlign = a.textAlign(s.footerAlign), n.textBaseline = "middle", o = jt(s.footerFont), n.fillStyle = s.footerColor, n.font = o.string, l = 0; l < r; ++l)
        n.fillText(i[l], a.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, n, s, i) {
    const { xAlign: r, yAlign: o } = this, { x: l, y: a } = t, { width: c, height: h } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: m } = cs(i.cornerRadius);
    n.fillStyle = i.backgroundColor, n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.beginPath(), n.moveTo(l + d, a), o === "top" && this.drawCaret(t, n, s, i), n.lineTo(l + c - u, a), n.quadraticCurveTo(l + c, a, l + c, a + u), o === "center" && r === "right" && this.drawCaret(t, n, s, i), n.lineTo(l + c, a + h - m), n.quadraticCurveTo(l + c, a + h, l + c - m, a + h), o === "bottom" && this.drawCaret(t, n, s, i), n.lineTo(l + f, a + h), n.quadraticCurveTo(l, a + h, l, a + h - f), o === "center" && r === "left" && this.drawCaret(t, n, s, i), n.lineTo(l, a + d), n.quadraticCurveTo(l, a, l + d, a), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart, s = this.$animations, i = s && s.x, r = s && s.y;
    if (i || r) {
      const o = fi[t.position].call(this, this._active, this._eventPosition);
      if (!o)
        return;
      const l = this._size = Rd(this, t), a = Object.assign({}, o, this._size), c = Td(n, t, a), h = Ld(t, a, c, n);
      (i._to !== h.x || r._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = l.width, this.height = l.height, this.caretX = o.x, this.caretY = o.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(n);
    const i = {
      width: this.width,
      height: this.height
    }, r = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const o = Ee(n.padding), l = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled && l && (t.save(), t.globalAlpha = s, this.drawBackground(r, t, i, n), Sb(t, n.textDirection), r.y += o.top, this.drawTitle(r, t, n), this.drawBody(r, t, n), this.drawFooter(r, t, n), Eb(t, n.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const s = this._active, i = t.map(({ datasetIndex: l, index: a }) => {
      const c = this.chart.getDatasetMeta(l);
      if (!c)
        throw new Error("Cannot find a dataset at index " + l);
      return {
        datasetIndex: l,
        element: c.data[a],
        index: a
      };
    }), r = !rr(s, i), o = this._positionChanged(i, n);
    (r || o) && (this._active = i, this._eventPosition = n, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, n, s = !0) {
    if (n && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options, r = this._active || [], o = this._getActiveElements(t, r, n, s), l = this._positionChanged(o, t), a = n || !rr(o, r) || l;
    return a && (this._active = o, (i.enabled || i.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, n))), a;
  }
  _getActiveElements(t, n, s, i) {
    const r = this.options;
    if (t.type === "mouseout")
      return [];
    if (!i)
      return n.filter((l) => this.chart.data.datasets[l.datasetIndex] && this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index) !== void 0);
    const o = this.chart.getElementsAtEventForMode(t, r.mode, r, s);
    return r.reverse && o.reverse(), o;
  }
  _positionChanged(t, n) {
    const { caretX: s, caretY: i, options: r } = this, o = fi[r.position].call(this, t, n);
    return o !== !1 && (s !== o.x || i !== o.y);
  }
}
U(ua, "positioners", fi);
var ay = {
  id: "tooltip",
  _element: ua,
  positioners: fi,
  afterInit(e, t, n) {
    n && (e.tooltip = new ua({
      chart: e,
      options: n
    }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = {
        tooltip: t
      };
      if (e.notifyPlugins("beforeTooltipDraw", {
        ...n,
        cancelable: !0
      }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: z1
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const cy = (e, t, n, s) => (typeof t == "string" ? (n = e.push(t) - 1, s.unshift({
  index: n,
  label: t
})) : isNaN(t) && (n = null), n);
function hy(e, t, n, s) {
  const i = e.indexOf(t);
  if (i === -1)
    return cy(e, t, n, s);
  const r = e.lastIndexOf(t);
  return i !== r ? n : i;
}
const dy = (e, t) => e === null ? null : Qt(Math.round(e), 0, t);
function Vd(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class pr extends Ys {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const s = this.getLabels();
      for (const { index: i, label: r } of n)
        s[i] === r && s.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (bt(t))
      return null;
    const s = this.getLabels();
    return n = isFinite(n) && s[n] === t ? n : hy(s, t, pt(n, t), this._addedLabels), dy(n, s.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: s, max: i } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), n || (i = this.getLabels().length - 1)), this.min = s, this.max = i;
  }
  buildTicks() {
    const t = this.min, n = this.max, s = this.options.offset, i = [];
    let r = this.getLabels();
    r = t === 0 && n === r.length - 1 ? r : r.slice(t, n + 1), this._valueRange = Math.max(r.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let o = t; o <= n; o++)
      i.push({
        value: o
      });
    return i;
  }
  getLabelForValue(t) {
    return Vd.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
U(pr, "id", "category"), U(pr, "defaults", {
  ticks: {
    callback: Vd
  }
});
function uy(e, t) {
  const n = [], { bounds: i, step: r, min: o, max: l, precision: a, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = e, f = r || 1, m = h - 1, { min: p, max: b } = t, v = !bt(o), x = !bt(l), C = !bt(c), S = (b - p) / (d + 1);
  let w = Ih((b - p) / m / f) * f, D, _, E, N;
  if (w < 1e-14 && !v && !x)
    return [
      {
        value: p
      },
      {
        value: b
      }
    ];
  N = Math.ceil(b / w) - Math.floor(p / w), N > m && (w = Ih(N * w / m / f) * f), bt(a) || (D = Math.pow(10, a), w = Math.ceil(w * D) / D), i === "ticks" ? (_ = Math.floor(p / w) * w, E = Math.ceil(b / w) * w) : (_ = p, E = b), v && x && r && k0((l - o) / r, w / 1e3) ? (N = Math.round(Math.min((l - o) / w, h)), w = (l - o) / N, _ = o, E = l) : C ? (_ = v ? o : _, E = x ? l : E, N = c - 1, w = (E - _) / N) : (N = (E - _) / w, Mi(N, Math.round(N), w / 1e3) ? N = Math.round(N) : N = Math.ceil(N));
  const I = Math.max(Vh(w), Vh(_));
  D = Math.pow(10, bt(a) ? I : a), _ = Math.round(_ * D) / D, E = Math.round(E * D) / D;
  let R = 0;
  for (v && (u && _ !== o ? (n.push({
    value: o
  }), _ < o && R++, Mi(Math.round((_ + R * w) * D) / D, o, Bd(o, S, e)) && R++) : _ < o && R++); R < N; ++R) {
    const W = Math.round((_ + R * w) * D) / D;
    if (x && W > l)
      break;
    n.push({
      value: W
    });
  }
  return x && u && E !== l ? n.length && Mi(n[n.length - 1].value, l, Bd(l, S, e)) ? n[n.length - 1].value = l : n.push({
    value: l
  }) : (!x || E === l) && n.push({
    value: E
  }), n;
}
function Bd(e, t, { horizontal: n, minRotation: s }) {
  const i = Qe(s), r = (n ? Math.sin(i) : Math.cos(i)) || 1e-3, o = 0.75 * t * ("" + e).length;
  return Math.min(t / r, o);
}
class fa extends Ys {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    return bt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: n, maxDefined: s } = this.getUserBounds();
    let { min: i, max: r } = this;
    const o = (a) => i = n ? i : a, l = (a) => r = s ? r : a;
    if (t) {
      const a = en(i), c = en(r);
      a < 0 && c < 0 ? l(0) : a > 0 && c > 0 && o(0);
    }
    if (i === r) {
      let a = r === 0 ? 1 : Math.abs(r * 0.05);
      l(r + a), t || o(i - a);
    }
    this.min = i, this.max = r;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: s } = t, i;
    return s ? (i = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, i > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`), i = 1e3)) : (i = this.computeTickLimit(), n = n || 11), n && (i = Math.min(n, i)), i;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, n = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const i = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: n.precision,
      step: n.stepSize,
      count: n.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: n.minRotation || 0,
      includeBounds: n.includeBounds !== !1
    }, r = this._range || this, o = uy(i, r);
    return t.bounds === "ticks" && _0(o, this, "value"), t.reverse ? (o.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), o;
  }
  configure() {
    const t = this.ticks;
    let n = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const i = (s - n) / Math.max(t.length - 1, 1) / 2;
      n -= i, s += i;
    }
    this._startValue = n, this._endValue = s, this._valueRange = s - n;
  }
  getLabelForValue(t) {
    return tc(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class gr extends fa {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = Ut(t) ? t : 0, this.max = Ut(n) ? n : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), n = t ? this.width : this.height, s = Qe(this.options.ticks.minRotation), i = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, r = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, r.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
U(gr, "id", "linear"), U(gr, "defaults", {
  ticks: {
    callback: ec.formatters.numeric
  }
});
function pa(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = Ee(t.backdropPadding);
    return pt(t.font && t.font.size, Ft.font.size) + n.height;
  }
  return 0;
}
function fy(e, t, n) {
  return n = Dt(n) ? n : [
    n
  ], {
    w: H0(e, t.string, n),
    h: n.length * t.lineHeight
  };
}
function $d(e, t, n, s, i) {
  return e === s || e === i ? {
    start: t - n / 2,
    end: t + n / 2
  } : e < s || e > i ? {
    start: t - n,
    end: t
  } : {
    start: t,
    end: t + n
  };
}
function py(e) {
  const t = {
    l: e.left + e._padding.left,
    r: e.right - e._padding.right,
    t: e.top + e._padding.top,
    b: e.bottom - e._padding.bottom
  }, n = Object.assign({}, t), s = [], i = [], r = e._pointLabels.length, o = e.options.pointLabels, l = o.centerPointLabels ? Pt / r : 0;
  for (let a = 0; a < r; a++) {
    const c = o.setContext(e.getPointLabelContext(a));
    i[a] = c.padding;
    const h = e.getPointPosition(a, e.drawingArea + i[a], l), d = jt(c.font), u = fy(e.ctx, d, e._pointLabels[a]);
    s[a] = u;
    const f = Jt(e.getIndexAngle(a) + l), m = Math.round(Ja(f)), p = $d(m, h.x, u.w, 0, 180), b = $d(m, h.y, u.h, 90, 270);
    gy(n, t, f, p, b);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b), e._pointLabelItems = vy(e, s, i);
}
function gy(e, t, n, s, i) {
  const r = Math.abs(Math.sin(n)), o = Math.abs(Math.cos(n));
  let l = 0, a = 0;
  s.start < t.l ? (l = (t.l - s.start) / r, e.l = Math.min(e.l, t.l - l)) : s.end > t.r && (l = (s.end - t.r) / r, e.r = Math.max(e.r, t.r + l)), i.start < t.t ? (a = (t.t - i.start) / o, e.t = Math.min(e.t, t.t - a)) : i.end > t.b && (a = (i.end - t.b) / o, e.b = Math.max(e.b, t.b + a));
}
function my(e, t, n) {
  const s = e.drawingArea, { extra: i, additionalAngle: r, padding: o, size: l } = n, a = e.getPointPosition(t, s + i + o, r), c = Math.round(Ja(Jt(a.angle + Lt))), h = wy(a.y, l.h, c), d = yy(c), u = xy(a.x, l.w, d);
  return {
    visible: !0,
    x: a.x,
    y: h,
    textAlign: d,
    left: u,
    top: h,
    right: u + l.w,
    bottom: h + l.h
  };
}
function by(e, t) {
  if (!t)
    return !0;
  const { left: n, top: s, right: i, bottom: r } = e;
  return !(wn({
    x: n,
    y: s
  }, t) || wn({
    x: n,
    y: r
  }, t) || wn({
    x: i,
    y: s
  }, t) || wn({
    x: i,
    y: r
  }, t));
}
function vy(e, t, n) {
  const s = [], i = e._pointLabels.length, r = e.options, { centerPointLabels: o, display: l } = r.pointLabels, a = {
    extra: pa(r) / 2,
    additionalAngle: o ? Pt / i : 0
  };
  let c;
  for (let h = 0; h < i; h++) {
    a.padding = n[h], a.size = t[h];
    const d = my(e, h, a);
    s.push(d), l === "auto" && (d.visible = by(d, c), d.visible && (c = d));
  }
  return s;
}
function yy(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function xy(e, t, n) {
  return n === "right" ? e -= t : n === "center" && (e -= t / 2), e;
}
function wy(e, t, n) {
  return n === 90 || n === 270 ? e -= t / 2 : (n > 270 || n < 90) && (e -= t), e;
}
function ky(e, t, n) {
  const { left: s, top: i, right: r, bottom: o } = n, { backdropColor: l } = t;
  if (!bt(l)) {
    const a = cs(t.borderRadius), c = Ee(t.backdropPadding);
    e.fillStyle = l;
    const h = s - c.left, d = i - c.top, u = r - s + c.width, f = o - i + c.height;
    Object.values(a).some((m) => m !== 0) ? (e.beginPath(), Fi(e, {
      x: h,
      y: d,
      w: u,
      h: f,
      radius: a
    }), e.fill()) : e.fillRect(h, d, u, f);
  }
}
function _y(e, t) {
  const { ctx: n, options: { pointLabels: s } } = e;
  for (let i = t - 1; i >= 0; i--) {
    const r = e._pointLabelItems[i];
    if (!r.visible)
      continue;
    const o = s.setContext(e.getPointLabelContext(i));
    ky(n, o, r);
    const l = jt(o.font), { x: a, y: c, textAlign: h } = r;
    hr(n, e._pointLabels[i], a, c + l.lineHeight / 2, l, {
      color: o.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function j1(e, t, n, s) {
  const { ctx: i } = e;
  if (n)
    i.arc(e.xCenter, e.yCenter, t, 0, Nt);
  else {
    let r = e.getPointPosition(0, t);
    i.moveTo(r.x, r.y);
    for (let o = 1; o < s; o++)
      r = e.getPointPosition(o, t), i.lineTo(r.x, r.y);
  }
}
function My(e, t, n, s, i) {
  const r = e.ctx, o = t.circular, { color: l, lineWidth: a } = t;
  !o && !s || !l || !a || n < 0 || (r.save(), r.strokeStyle = l, r.lineWidth = a, r.setLineDash(i.dash || []), r.lineDashOffset = i.dashOffset, r.beginPath(), j1(e, n, o, s), r.closePath(), r.stroke(), r.restore());
}
function Cy(e, t, n) {
  return Vn(e, {
    label: n,
    index: t,
    type: "pointLabel"
  });
}
class pi extends fa {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = Ee(pa(this.options) / 2), n = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + n / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(n, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    this.min = Ut(t) && !isNaN(t) ? t : 0, this.max = Ut(n) && !isNaN(n) ? n : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / pa(this.options));
  }
  generateTickLabels(t) {
    fa.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((n, s) => {
      const i = Rt(this.options.pointLabels.callback, [
        n,
        s
      ], this);
      return i || i === 0 ? i : "";
    }).filter((n, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? py(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, s, i) {
    this.xCenter += Math.floor((t - n) / 2), this.yCenter += Math.floor((s - i) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, s, i));
  }
  getIndexAngle(t) {
    const n = Nt / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return Jt(t * n + Qe(s));
  }
  getDistanceFromCenterForValue(t) {
    if (bt(t))
      return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (bt(t))
      return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const s = n[t];
      return Cy(this.getContext(), t, s);
    }
  }
  getPointPosition(t, n, s = 0) {
    const i = this.getIndexAngle(t) - Lt + s;
    return {
      x: Math.cos(i) * n + this.xCenter,
      y: Math.sin(i) * n + this.yCenter,
      angle: i
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: s, right: i, bottom: r } = this._pointLabelItems[t];
    return {
      left: n,
      top: s,
      right: i,
      bottom: r
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: n } } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(), s.beginPath(), j1(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, n = this.options, { angleLines: s, grid: i, border: r } = n, o = this._pointLabels.length;
    let l, a, c;
    if (n.pointLabels.display && _y(this, o), i.display && this.ticks.forEach((h, d) => {
      if (d !== 0 || d === 0 && this.min < 0) {
        a = this.getDistanceFromCenterForValue(h.value);
        const u = this.getContext(d), f = i.setContext(u), m = r.setContext(u);
        My(this, f, a, o, m);
      }
    }), s.display) {
      for (t.save(), l = o - 1; l >= 0; l--) {
        const h = s.setContext(this.getPointLabelContext(l)), { color: d, lineWidth: u } = h;
        !u || !d || (t.lineWidth = u, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, a = this.getDistanceFromCenterForValue(n.reverse ? this.min : this.max), c = this.getPointPosition(l, a), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, n = this.options, s = n.ticks;
    if (!s.display)
      return;
    const i = this.getIndexAngle(0);
    let r, o;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(i), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((l, a) => {
      if (a === 0 && this.min >= 0 && !n.reverse)
        return;
      const c = s.setContext(this.getContext(a)), h = jt(c.font);
      if (r = this.getDistanceFromCenterForValue(this.ticks[a].value), c.showLabelBackdrop) {
        t.font = h.string, o = t.measureText(l.label).width, t.fillStyle = c.backdropColor;
        const d = Ee(c.backdropPadding);
        t.fillRect(-o / 2 - d.left, -r - h.size / 2 - d.top, o + d.width, h.size + d.height);
      }
      hr(t, l.label, 0, -r, h, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
U(pi, "id", "radialLinear"), U(pi, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: ec.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(t) {
      return t;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), U(pi, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), U(pi, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const Ur = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, fe = /* @__PURE__ */ Object.keys(Ur);
function Hd(e, t) {
  return e - t;
}
function zd(e, t) {
  if (bt(t))
    return null;
  const n = e._adapter, { parser: s, round: i, isoWeekday: r } = e._parseOpts;
  let o = t;
  return typeof s == "function" && (o = s(o)), Ut(o) || (o = typeof s == "string" ? n.parse(o, s) : n.parse(o)), o === null ? null : (i && (o = i === "week" && (gs(r) || r === !0) ? n.startOf(o, "isoWeek", r) : n.startOf(o, i)), +o);
}
function jd(e, t, n, s) {
  const i = fe.length;
  for (let r = fe.indexOf(e); r < i - 1; ++r) {
    const o = Ur[fe[r]], l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - t) / (l * o.size)) <= s)
      return fe[r];
  }
  return fe[i - 1];
}
function Py(e, t, n, s, i) {
  for (let r = fe.length - 1; r >= fe.indexOf(n); r--) {
    const o = fe[r];
    if (Ur[o].common && e._adapter.diff(i, s, o) >= t - 1)
      return o;
  }
  return fe[n ? fe.indexOf(n) : 0];
}
function Sy(e) {
  for (let t = fe.indexOf(e) + 1, n = fe.length; t < n; ++t)
    if (Ur[fe[t]].common)
      return fe[t];
}
function Wd(e, t, n) {
  if (!n)
    e[t] = !0;
  else if (n.length) {
    const { lo: s, hi: i } = Za(n, t), r = n[s] >= t ? n[s] : n[i];
    e[r] = !0;
  }
}
function Ey(e, t, n, s) {
  const i = e._adapter, r = +i.startOf(t[0].value, s), o = t[t.length - 1].value;
  let l, a;
  for (l = r; l <= o; l = +i.add(l, 1, s))
    a = n[l], a >= 0 && (t[a].major = !0);
  return t;
}
function qd(e, t, n) {
  const s = [], i = {}, r = t.length;
  let o, l;
  for (o = 0; o < r; ++o)
    l = t[o], i[l] = o, s.push({
      value: l,
      major: !1
    });
  return r === 0 || !n ? s : Ey(e, s, i, n);
}
class mr extends Ys {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, n = {}) {
    const s = t.time || (t.time = {}), i = this._adapter = new lv._date(t.adapters.date);
    i.init(n), _i(s.displayFormats, i.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = n.normalized;
  }
  parse(t, n) {
    return t === void 0 ? null : zd(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, n = this._adapter, s = t.time.unit || "day";
    let { min: i, max: r, minDefined: o, maxDefined: l } = this.getUserBounds();
    function a(c) {
      !o && !isNaN(c.min) && (i = Math.min(i, c.min)), !l && !isNaN(c.max) && (r = Math.max(r, c.max));
    }
    (!o || !l) && (a(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && a(this.getMinMax(!1))), i = Ut(i) && !isNaN(i) ? i : +n.startOf(Date.now(), s), r = Ut(r) && !isNaN(r) ? r : +n.endOf(Date.now(), s) + 1, this.min = Math.min(i, r - 1), this.max = Math.max(i + 1, r);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (n = t[0], s = t[t.length - 1]), {
      min: n,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, n = t.time, s = t.ticks, i = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && i.length && (this.min = this._userMin || i[0], this.max = this._userMax || i[i.length - 1]);
    const r = this.min, o = this.max, l = S0(i, r, o);
    return this._unit = n.unit || (s.autoSkip ? jd(n.minUnit, this.min, this.max, this._getLabelCapacity(r)) : Py(this, l.length, n.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Sy(this._unit), this.initOffsets(i), t.reverse && l.reverse(), qd(this, l, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0, s = 0, i, r;
    this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), t.length === 1 ? n = 1 - i : n = (this.getDecimalForValue(t[1]) - i) / 2, r = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = r : s = (r - this.getDecimalForValue(t[t.length - 2])) / 2);
    const o = t.length < 3 ? 0.5 : 0.25;
    n = Qt(n, 0, o), s = Qt(s, 0, o), this._offsets = {
      start: n,
      end: s,
      factor: 1 / (n + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, n = this.min, s = this.max, i = this.options, r = i.time, o = r.unit || jd(r.minUnit, n, s, this._getLabelCapacity(n)), l = pt(i.ticks.stepSize, 1), a = o === "week" ? r.isoWeekday : !1, c = gs(a) || a === !0, h = {};
    let d = n, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", a)), d = +t.startOf(d, c ? "day" : o), t.diff(s, n, o) > 1e5 * l)
      throw new Error(n + " and " + s + " are too far apart with stepSize of " + l + " " + o);
    const m = i.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < s; u = +t.add(u, l, o), f++)
      Wd(h, u, m);
    return (u === s || i.bounds === "ticks" || f === 1) && Wd(h, u, m), Object.keys(h).sort(Hd).map((p) => +p);
  }
  getLabelForValue(t) {
    const n = this._adapter, s = this.options.time;
    return s.tooltipFormat ? n.format(t, s.tooltipFormat) : n.format(t, s.displayFormats.datetime);
  }
  format(t, n) {
    const i = this.options.time.displayFormats, r = this._unit, o = n || i[r];
    return this._adapter.format(t, o);
  }
  _tickFormatFunction(t, n, s, i) {
    const r = this.options, o = r.ticks.callback;
    if (o)
      return Rt(o, [
        t,
        n,
        s
      ], this);
    const l = r.time.displayFormats, a = this._unit, c = this._majorUnit, h = a && l[a], d = c && l[c], u = s[n], f = c && d && u && u.major;
    return this._adapter.format(t, i || (f ? d : h));
  }
  generateTickLabels(t) {
    let n, s, i;
    for (n = 0, s = t.length; n < s; ++n)
      i = t[n], i.label = this._tickFormatFunction(i.value, n, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + s) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets, s = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks, s = this.ctx.measureText(t).width, i = Qe(this.isHorizontal() ? n.maxRotation : n.minRotation), r = Math.cos(i), o = Math.sin(i), l = this._resolveTickFontOptions(0).size;
    return {
      w: s * r + l * o,
      h: s * o + l * r
    };
  }
  _getLabelCapacity(t) {
    const n = this.options.time, s = n.displayFormats, i = s[n.unit] || s.millisecond, r = this._tickFormatFunction(t, 0, qd(this, [
      t
    ], this._majorUnit), i), o = this._getLabelSize(r), l = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
    return l > 0 ? l : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], n, s;
    if (t.length)
      return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return this._cache.data = i[0].controller.getAllParsedValues(this);
    for (n = 0, s = i.length; n < s; ++n)
      t = t.concat(i[n].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, s;
    if (t.length)
      return t;
    const i = this.getLabels();
    for (n = 0, s = i.length; n < s; ++n)
      t.push(zd(this, i[n]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return h1(t.sort(Hd));
  }
}
U(mr, "id", "time"), U(mr, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function xo(e, t, n) {
  let s = 0, i = e.length - 1, r, o, l, a;
  n ? (t >= e[s].pos && t <= e[i].pos && ({ lo: s, hi: i } = es(e, "pos", t)), { pos: r, time: l } = e[s], { pos: o, time: a } = e[i]) : (t >= e[s].time && t <= e[i].time && ({ lo: s, hi: i } = es(e, "time", t)), { time: r, pos: l } = e[s], { time: o, pos: a } = e[i]);
  const c = o - r;
  return c ? l + (a - l) * (t - r) / c : l;
}
class Yd extends mr {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(t);
    this._minPos = xo(n, this.min), this._tableRange = xo(n, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: s } = this, i = [], r = [];
    let o, l, a, c, h;
    for (o = 0, l = t.length; o < l; ++o)
      c = t[o], c >= n && c <= s && i.push(c);
    if (i.length < 2)
      return [
        {
          time: n,
          pos: 0
        },
        {
          time: s,
          pos: 1
        }
      ];
    for (o = 0, l = i.length; o < l; ++o)
      h = i[o + 1], a = i[o - 1], c = i[o], Math.round((h + a) / 2) !== c && r.push({
        time: c,
        pos: o / (l - 1)
      });
    return r;
  }
  _generate() {
    const t = this.min, n = this.max;
    let s = super.getDataTimestamps();
    return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(n) || s.length === 1) && s.push(n), s.sort((i, r) => i - r);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const n = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return n.length && s.length ? t = this.normalize(n.concat(s)) : t = n.length ? n : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (xo(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets, s = this.getDecimalForPixel(t) / n.factor - n.end;
    return xo(this._table, s * this._tableRange + this._minPos, !0);
  }
}
U(Yd, "id", "timeseries"), U(Yd, "defaults", mr.defaults);
const Ki = [
  {
    department: "Ain",
    department_value: "01",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Aisne",
    department_value: "02",
    region: "Hauts-de-France",
    region_value: "HDF"
  },
  {
    department: "Allier",
    department_value: "03",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Alpes de Haute-Provence",
    department_value: "04",
    region: "Provence-Alpes-Côte d’Azur",
    region_value: "PAC"
  },
  {
    department: "Hautes-Alpes",
    department_value: "05",
    region: "Provence-Alpes-Côte d’Azur",
    region_value: "PAC"
  },
  {
    department: "Alpes-Maritimes",
    department_value: "06",
    region: "Provence-Alpes-Côte d’Azur",
    region_value: "PAC"
  },
  {
    department: "Ardèche",
    department_value: "07",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Ardennes",
    department_value: "08",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Ariège",
    department_value: "09",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Aube",
    department_value: "10",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Aude",
    department_value: "11",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Aveyron",
    department_value: "12",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Bouches-du-Rhône",
    department_value: "13",
    region: "Provence-Alpes-Côte d’Azur",
    region_value: "PAC"
  },
  {
    department: "Calvados",
    department_value: "14",
    region: "Normandie",
    region_value: "NOR"
  },
  {
    department: "Cantal",
    department_value: "15",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Charente",
    department_value: "16",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Charente-Maritime",
    department_value: "17",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Cher",
    department_value: "18",
    region: "Centre-Val de Loire",
    region_value: "CVL"
  },
  {
    department: "Corrèze",
    department_value: "19",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Corse-du-Sud",
    department_value: "2A",
    region: "Corse",
    region_value: "20R"
  },
  {
    department: "Haute-Corse",
    department_value: "2B",
    region: "Corse",
    region_value: "20R"
  },
  {
    department: "Côte-d’Or",
    department_value: "21",
    region: "Bourgogne-Franche-Comté",
    region_value: "BFC"
  },
  {
    department: "Côtes d’Armor",
    department_value: "22",
    region: "Bretagne",
    region_value: "BRE"
  },
  {
    department: "Creuse",
    department_value: "23",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Dordogne",
    department_value: "24",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Doubs",
    department_value: "25",
    region: "Bourgogne-Franche-Comté",
    region_value: "BFC"
  },
  {
    department: "Drôme",
    department_value: "26",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Eure",
    department_value: "27",
    region: "Normandie",
    region_value: "NOR"
  },
  {
    department: "Eure-et-Loir",
    department_value: "28",
    region: "Centre-Val de Loire",
    region_value: "CVL"
  },
  {
    department: "Finistère",
    department_value: "29",
    region: "Bretagne",
    region_value: "BRE"
  },
  {
    department: "Gard",
    department_value: "30",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Haute-Garonne",
    department_value: "31",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Gers",
    department_value: "32",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Gironde",
    department_value: "33",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Hérault",
    department_value: "34",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Ille-et-Vilaine",
    department_value: "35",
    region: "Bretagne",
    region_value: "BRE"
  },
  {
    department: "Indre",
    department_value: "36",
    region: "Centre-Val de Loire",
    region_value: "CVL"
  },
  {
    department: "Indre-et-Loire",
    department_value: "37",
    region: "Centre-Val de Loire",
    region_value: "CVL"
  },
  {
    department: "Isère",
    department_value: "38",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Jura",
    department_value: "39",
    region: "Bourgogne-Franche-Comté",
    region_value: "BFC"
  },
  {
    department: "Landes",
    department_value: "40",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Loir-et-Cher",
    department_value: "41",
    region: "Centre-Val de Loire",
    region_value: "CVL"
  },
  {
    department: "Loire",
    department_value: "42",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Haute-Loire",
    department_value: "43",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Loire-Atlantique",
    department_value: "44",
    region: "Pays de la Loire",
    region_value: "PDL"
  },
  {
    department: "Loiret",
    department_value: "45",
    region: "Centre-Val de Loire",
    region_value: "CVL"
  },
  {
    department: "Lot",
    department_value: "46",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Lot-et-Garonne",
    department_value: "47",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Lozère",
    department_value: "48",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Maine-et-Loire",
    department_value: "49",
    region: "Pays de la Loire",
    region_value: "PDL"
  },
  {
    department: "Manche",
    department_value: "50",
    region: "Normandie",
    region_value: "NOR"
  },
  {
    department: "Marne",
    department_value: "51",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Haute-Marne",
    department_value: "52",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Mayenne",
    department_value: "53",
    region: "Pays de la Loire",
    region_value: "PDL"
  },
  {
    department: "Meurthe-et-Moselle",
    department_value: "54",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Meuse",
    department_value: "55",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Morbihan",
    department_value: "56",
    region: "Bretagne",
    region_value: "BRE"
  },
  {
    department: "Moselle",
    department_value: "57",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Nièvre",
    department_value: "58",
    region: "Bourgogne-Franche-Comté",
    region_value: "BFC"
  },
  {
    department: "Nord",
    department_value: "59",
    region: "Hauts-de-France",
    region_value: "HDF"
  },
  {
    department: "Oise",
    department_value: "60",
    region: "Hauts-de-France",
    region_value: "HDF"
  },
  {
    department: "Orne",
    department_value: "61",
    region: "Normandie",
    region_value: "NOR"
  },
  {
    department: "Pas-de-Calais",
    department_value: "62",
    region: "Hauts-de-France",
    region_value: "HDF"
  },
  {
    department: "Puy-de-Dôme",
    department_value: "63",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Pyrénées-Atlantiques",
    department_value: "64",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Hautes-Pyrénées",
    department_value: "65",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Pyrénées-Orientales",
    department_value: "66",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Bas-Rhin",
    department_value: "67",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Haut-Rhin",
    department_value: "68",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Rhône",
    department_value: "69",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Haute-Saône",
    department_value: "70",
    region: "Bourgogne-Franche-Comté",
    region_value: "BFC"
  },
  {
    department: "Saône-et-Loire",
    department_value: "71",
    region: "Bourgogne-Franche-Comté",
    region_value: "BFC"
  },
  {
    department: "Sarthe",
    department_value: "72",
    region: "Pays de la Loire",
    region_value: "PDL"
  },
  {
    department: "Savoie",
    department_value: "73",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Haute-Savoie",
    department_value: "74",
    region: "Auvergne-Rhône-Alpes",
    region_value: "ARA"
  },
  {
    department: "Paris",
    department_value: "75",
    region: "Île-de-France",
    region_value: "IDF"
  },
  {
    department: "Seine-Maritime",
    department_value: "76",
    region: "Normandie",
    region_value: "NOR"
  },
  {
    department: "Seine-et-Marne",
    department_value: "77",
    region: "Île-de-France",
    region_value: "IDF"
  },
  {
    department: "Yvelines",
    department_value: "78",
    region: "Île-de-France",
    region_value: "IDF"
  },
  {
    department: "Deux-Sèvres",
    department_value: "79",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Somme",
    department_value: "80",
    region: "Hauts-de-France",
    region_value: "HDF"
  },
  {
    department: "Tarn",
    department_value: "81",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Tarn-et-Garonne",
    department_value: "82",
    region: "Occitanie",
    region_value: "OCC"
  },
  {
    department: "Var",
    department_value: "83",
    region: "Provence-Alpes-Côte d’Azur",
    region_value: "PAC"
  },
  {
    department: "Vaucluse",
    department_value: "84",
    region: "Provence-Alpes-Côte d’Azur",
    region_value: "PAC"
  },
  {
    department: "Vendée",
    department_value: "85",
    region: "Pays de la Loire",
    region_value: "PDL"
  },
  {
    department: "Vienne",
    department_value: "86",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Haute-Vienne",
    department_value: "87",
    region: "Nouvelle-Aquitaine",
    region_value: "NAQ"
  },
  {
    department: "Vosges",
    department_value: "88",
    region: "Grand Est",
    region_value: "GES"
  },
  {
    department: "Yonne",
    department_value: "89",
    region: "Bourgogne-Franche-Comté",
    region_value: "BFC"
  },
  {
    department: "Territoire-de-Belfort",
    department_value: "90",
    region: "Bourgogne-Franche-Comté",
    region_value: "BFC"
  },
  {
    department: "Essonne",
    department_value: "91",
    region: "Île-de-France",
    region_value: "IDF"
  },
  {
    department: "Hauts-de-Seine",
    department_value: "92",
    region: "Île-de-France",
    region_value: "IDF"
  },
  {
    department: "Seine-Saint-Denis",
    department_value: "93",
    region: "Île-de-France",
    region_value: "IDF"
  },
  {
    department: "Val-de-Marne",
    department_value: "94",
    region: "Île-de-France",
    region_value: "IDF"
  },
  {
    department: "Val-d’Oise",
    department_value: "95",
    region: "Île-de-France",
    region_value: "IDF"
  },
  {
    department: "Guadeloupe",
    department_value: "971",
    region: "Guadeloupe",
    region_value: "971"
  },
  {
    department: "Martinique",
    department_value: "972",
    region: "Martinique",
    region_value: "972"
  },
  {
    department: "Guyane française",
    department_value: "973",
    region: "Guyane",
    region_value: "973"
  },
  {
    department: "Réunion",
    department_value: "974",
    region: "La Réunion",
    region_value: "974"
  },
  {
    department: "Mayotte",
    department_value: "976",
    region: "Mayotte",
    region_value: "976"
  }
];
lt.register(ay, H1, gr, pr, Si);
const Dy = (e) => e.charAt(0).toUpperCase() + e.slice(1), Ay = (e) => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "-").toLowerCase(), gi = (e) => isNaN(e) ? e : Number.isInteger(e) ? parseInt(e).toLocaleString("fr-FR") : parseFloat(e).toLocaleString("fr-FR", { maximumFractionDigits: 2 }), br = function() {
  const e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    e.substr(0, 4)
  );
}, Ny = (e) => Ki.find((t) => t.department_value === e), Oy = (e) => Ki.find((t) => t.region_value === e), Ry = () => Ki.map((e) => e.department_value), Ty = () => Ki.map((e) => e.region_value), Ly = (e) => Ki.filter((n) => n.region_value === e).map((n) => n.department_value), $n = () => {
  lt.defaults.font.family = "Marianne", lt.defaults.font.size = 12, lt.defaults.font.lineHeight = 1.66, lt.defaults.color = "#6b6b6b", lt.defaults.borderColor = "#cecece";
}, cn = {
  methods: {
    capitalize: Dy,
    formatNumber: gi
  }
}, W1 = {
  methods: {
    getDep: Ny,
    getReg: Oy,
    getAllDep: Ry,
    getAllReg: Ty,
    getDepsFromReg: Ly
  }
}, bs = {
  props: {
    onenter: Function,
    onleave: Function,
    onclick: Function,
    ondblclick: Function
  }
}, Fy = ["id", "aria-labelledby"], Iy = { class: "fr-container fr-container--fluid fr-container-md" }, Vy = { class: "fr-grid-row fr-grid-row--center" }, By = { class: "fr-col-12 fr-col-md-8 fr-col-lg-6" }, $y = { class: "fr-modal__body" }, Hy = { class: "fr-modal__header" }, zy = ["aria-controls"], jy = { class: "fr-modal__content" }, Wy = ["id"], qy = ["innerHTML"], Yy = {
  __name: "DialogModal",
  props: {
    id: {
      type: String,
      required: !0
    },
    modalTitle: {
      type: String,
      default: ""
    },
    modalContent: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, n) => (O(), F("dialog", {
      id: "modal-" + e.id,
      "aria-labelledby": "fr-modal-title-modal-" + e.id,
      role: "dialog",
      class: "fr-modal"
    }, [
      g("div", Iy, [
        g("div", Vy, [
          g("div", By, [
            g("div", $y, [
              g("div", Hy, [
                g("button", {
                  class: "fr-btn--close fr-btn",
                  title: "Fermer la fenêtre modale",
                  "aria-controls": "modal-" + e.id
                }, " Fermer ", 8, zy)
              ]),
              g("div", jy, [
                g("h1", {
                  id: "fr-modal-title-modal-" + e.id,
                  class: "fr-modal__title"
                }, [
                  n[0] || (n[0] = g("span", { class: "fr-icon-arrow-right-line fr-icon--lg" }, null, -1)),
                  Ns(" " + X(e.modalTitle), 1)
                ], 8, Wy),
                g("div", { innerHTML: e.modalContent }, null, 8, qy)
              ])
            ])
          ])
        ])
      ])
    ], 8, Fy));
  }
}, It = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Uy = ["id"], Gy = { class: "fr-p-2w databox__header" }, Xy = { class: "fr-h6 fr-mb-0" }, Ky = ["aria-describedby"], Jy = ["id"], Zy = {
  key: 0,
  class: "fr-text--xs fr-mb-0 fr-text--bold"
}, Qy = {
  key: 1,
  class: "fr-text--xs fr-mb-0"
}, t5 = ["aria-controls"], e5 = {
  key: 2,
  role: "navigation",
  class: "fr-translate fr-nav more-actions-menu"
}, n5 = { class: "fr-nav__item fr-nav__item--align-right" }, s5 = ["aria-controls"], i5 = ["id"], o5 = { class: "fr-menu__list" }, r5 = { key: 0 }, l5 = { key: 1 }, a5 = ["id", "title"], c5 = { class: "fr-px-2w databox__data" }, h5 = {
  key: 0,
  class: "databox__source"
}, d5 = { class: "fr-select-group" }, u5 = ["for"], f5 = ["id"], p5 = ["value"], g5 = {
  key: 1,
  class: "databox__tendency"
}, m5 = {
  key: 0,
  class: "fr-text--xs fr-m-0"
}, b5 = ["aria-label"], v5 = {
  key: 1,
  class: "fr-text--xs fr-m-0"
}, y5 = ["aria-label"], x5 = { class: "fr-p-2w databox__content" }, w5 = ["aria-hidden"], k5 = ["id"], _5 = ["aria-hidden"], M5 = ["id"], C5 = ["id"], P5 = { class: "fr-p-2w databox__footer" }, S5 = { class: "fr-text--xs fr-mb-0" }, E5 = { class: "fr-segmented__elements" }, D5 = { class: "fr-segmented__element" }, A5 = ["id", "name"], N5 = ["for"], O5 = { class: "fr-segmented__element" }, R5 = ["id", "name"], T5 = ["for"], L5 = {
  __name: "DataBox",
  props: {
    id: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    tooltipTitle: {
      type: String,
      default: ""
    },
    tooltipContent: {
      type: String,
      default: ""
    },
    modalTitle: {
      type: String,
      default: ""
    },
    modalContent: {
      type: String,
      default: ""
    },
    source: {
      type: String,
      required: !0
    },
    date: {
      type: String,
      required: !0
    },
    defaultSource: {
      type: String,
      default: null
    },
    trend: {
      type: String,
      default: null
    },
    segmentedControl: {
      type: [Boolean, String],
      default: !0
    },
    fullscreen: {
      type: [Boolean, String],
      default: !1
    },
    screenshot: {
      type: [Boolean, String],
      default: !1
    },
    download: {
      type: [Boolean, String],
      default: !1
    },
    actions: {
      type: [Array, String],
      default: () => []
    }
  },
  setup(e) {
    const t = e, n = no([]), s = no([]);
    n.value = [...document.querySelectorAll(`[databox-id="${t.id}"][databox-type="chart"]`)].map((p) => p.getAttribute("databox-source") || "default"), s.value = [...document.querySelectorAll(`[databox-id="${t.id}"][databox-type="table"]`)].map((p) => p.getAttribute("databox-source") || "global");
    const i = no(n.value.includes(t.defaultSource) ? t.defaultSource : n.value[0]), r = (p) => p.map((b) => ({
      label: b.charAt(0).toUpperCase() + b.slice(1).replace(/-/g, " "),
      value: b
    })), o = Qn(() => [!0, "true", ""].includes(t.segmentedControl)), l = Qn(() => [!0, "true", ""].includes(t.fullscreen)), a = Qn(() => [!0, "true", ""].includes(t.screenshot)), c = Qn(() => [!0, "true", ""].includes(t.download)), h = Qn(() => typeof t.actions == "string" ? JSON.parse(t.actions) : t.actions), d = no(n.value.length > 0 ? "chart" : "table"), u = (p) => {
      d.value = p;
    }, f = (p) => {
      const b = document.querySelector(`[databox-id="${t.id}"][databox-type="${p}"][databox-source="${i.value}"]`), v = JSON.parse(b.getAttribute("x")), x = JSON.parse(b.getAttribute("y")), C = JSON.parse(b.getAttribute("name")), S = b.getAttribute("table-name") ?? "";
      let w = [];
      w.push(S + "," + C.join(",") + `
`), (p === "chart" ? v[0] : v).forEach((I, R) => {
        w.push(`${I},${x.map((W) => W[R]).join(",")}
`);
      });
      const _ = new Blob(w, { type: "text/csv" }), E = window.URL.createObjectURL(_), N = document.createElement("a");
      N.href = E, N.download = "data.csv", N.click(), window.URL.revokeObjectURL(E);
    }, m = () => {
      const p = document.getElementById(`container-${t.id}`), b = p.querySelectorAll(".screenshot-hide-" + t.id);
      b.forEach((S) => S.style.display = "none");
      const v = p.querySelector(".databox__data"), x = p.querySelector(`#select-${t.id}`), C = p.querySelector(".databox__tendency");
      v.style.display = "block", x && (x.style.boxShadow = "none", x.style.appearance = "none"), C.style.marginTop = "20px", z3(p).then((S) => {
        const w = document.createElement("a");
        w.href = S, w.download = "chart.png", w.click();
      }).catch((S) => {
        console.error("Error while taking screenshot", S);
      }).finally(() => {
        b.forEach((S) => S.style.removeProperty("display")), v.style.removeProperty("display"), x && (x.style.removeProperty("box-shadow"), x.style.removeProperty("appearance")), C.style.removeProperty("margin-top");
      });
    };
    return (p, b) => (O(), F("div", {
      id: "container-" + e.id,
      class: "fr-card fr-card--shadow databox"
    }, [
      g("div", Gy, [
        g("h3", Xy, X(e.title), 1),
        g("div", {
          class: re("flex screenshot-hide-" + e.id)
        }, [
          g("button", {
            class: "fr-btn--tooltip fr-btn",
            type: "button",
            "aria-describedby": "tooltip-" + e.id,
            title: "Informations complémentaires sur le graphique"
          }, " Informations complémentaires sur le graphique ", 8, Ky),
          e.tooltipTitle || e.tooltipContent ? (O(), F("div", {
            key: 0,
            id: "tooltip-" + e.id,
            class: "fr-tooltip fr-placement",
            role: "tooltip",
            "aria-hidden": "true"
          }, [
            e.tooltipTitle ? (O(), F("p", Zy, X(e.tooltipTitle), 1)) : Mt("", !0),
            e.tooltipContent ? (O(), F("p", Qy, X(e.tooltipContent), 1)) : Mt("", !0)
          ], 8, Jy)) : Mt("", !0),
          l.value ? (O(), F("button", {
            key: 1,
            type: "button",
            class: "fr-btn fr-btn--sm fr-icon-fullscreen-line fr-btn--tertiary-no-outline fr-ratio-1x1",
            "data-fr-opened": "false",
            "aria-controls": "modal-" + e.id,
            title: "Afficher la modale"
          }, null, 8, t5)) : Mt("", !0),
          (O(), me(ke, { to: "body" }, [
            Tt(Yy, {
              id: e.id,
              "modal-title": e.modalTitle,
              "modal-content": e.modalContent
            }, null, 8, ["id", "modal-title", "modal-content"])
          ])),
          a.value || c.value || h.value.length ? (O(), F("nav", e5, [
            g("div", n5, [
              g("button", {
                class: "fr-btn fr-btn--sm fr-icon-more-line fr-btn--tertiary-no-outline fr-ratio-1x1",
                "aria-controls": "translate-" + e.id,
                "aria-expanded": "false",
                title: "Plus d'actions"
              }, null, 8, s5),
              g("div", {
                id: "translate-" + e.id,
                class: "fr-collapse fr-translate__menu fr-menu"
              }, [
                g("ul", o5, [
                  a.value ? (O(), F("li", r5, [
                    g("button", {
                      class: "fr-translate__language fr-nav__link",
                      title: "Prendre une capture d'écran",
                      onClick: b[0] || (b[0] = (v) => m())
                    }, " Capture d'écran ")
                  ])) : Mt("", !0),
                  c.value ? (O(), F("li", l5, [
                    g("button", {
                      class: "fr-translate__language fr-nav__link",
                      title: "Télécharger les données en CSV",
                      onClick: b[1] || (b[1] = (v) => f(d.value))
                    }, " Télécharger en CSV ")
                  ])) : Mt("", !0),
                  (O(!0), F(ht, null, wt(h.value, (v, x) => (O(), F("li", { key: x }, [
                    g("button", {
                      id: ts(Ay)(v),
                      class: "fr-translate__language fr-nav__link",
                      title: v
                    }, X(v), 9, a5)
                  ]))), 128))
                ])
              ], 8, i5)
            ])
          ])) : Mt("", !0)
        ], 2)
      ]),
      g("div", c5, [
        n.value.length > 1 ? (O(), F("div", h5, [
          g("div", d5, [
            g("label", {
              class: "fr-label fr-text--xs fr-mb-0",
              for: "select-" + e.id
            }, " Choisir une source de données ", 8, u5),
            J2(g("select", {
              id: "select-" + e.id,
              "onUpdate:modelValue": b[2] || (b[2] = (v) => i.value = v),
              name: "select",
              class: "fr-select fr-mt-0"
            }, [
              (O(!0), F(ht, null, wt(r(n.value), (v) => (O(), F("option", {
                key: v.value,
                value: v.value
              }, X(v.label), 9, p5))), 128))
            ], 8, f5), [
              [Hm, i.value]
            ])
          ])
        ])) : Mt("", !0),
        e.trend ? (O(), F("div", g5, [
          e.trend.includes("-") ? (O(), F("p", m5, [
            b[5] || (b[5] = Ns(" En baisse ", -1)),
            g("span", {
              class: "fr-badge fr-badge--error fr-badge--no-icon fr-badge--sm fr-ml-1v",
              "aria-label": "Baisse de " + e.trend.replace("-", "").trim()
            }, [
              g("span", {
                class: re("fr-pr-1v screenshot-hide-" + e.id),
                "aria-hidden": "true"
              }, "↘ ", 2),
              Ns(" " + X(e.trend.replace("-", "").trim()), 1)
            ], 8, b5)
          ])) : (O(), F("p", v5, [
            b[6] || (b[6] = Ns(" En hausse ", -1)),
            g("span", {
              class: "fr-badge fr-badge--success fr-badge--no-icon fr-badge--sm fr-ml-1v",
              "aria-label": "Hausse de " + e.trend.trim()
            }, [
              g("span", {
                class: re("fr-pr-1v screenshot-hide-" + e.id),
                "aria-hidden": "true"
              }, "↗ ", 2),
              Ns(" " + X(e.trend.trim()), 1)
            ], 8, y5)
          ]))
        ])) : Mt("", !0)
      ]),
      g("div", x5, [
        g("div", {
          class: re(d.value === "table" ? "fr-hidden" : "w-full"),
          "aria-hidden": d.value === "chart"
        }, [
          (O(!0), F(ht, null, wt(n.value, (v, x) => (O(), F("div", {
            id: e.id + "-chart-" + v,
            key: x,
            class: re(i.value !== v ? "fr-hidden" : "")
          }, null, 10, k5))), 128))
        ], 10, w5),
        g("div", {
          class: re(d.value === "chart" ? "fr-hidden" : "w-full"),
          "aria-hidden": d.value === "table"
        }, [
          (O(!0), F(ht, null, wt(s.value.filter((v) => v !== "global"), (v, x) => (O(), F("div", {
            id: e.id + "-table-" + v,
            key: x,
            class: re(i.value !== v ? "fr-hidden" : "")
          }, null, 10, M5))), 128)),
          s.value.includes("global") ? (O(), F("div", {
            key: 0,
            id: e.id + "-table-global",
            class: re(s.value.includes(i.value) ? "fr-hidden" : "")
          }, null, 10, C5)) : Mt("", !0)
        ], 10, _5)
      ]),
      g("div", P5, [
        g("p", S5, X(e.source) + ", " + X(e.date), 1),
        o.value && n.value.length > 0 ? (O(), F("fieldset", {
          key: 0,
          class: re("fr-segmented fr-segmented--no-legend fr-segmented--sm screenshot-hide-" + e.id)
        }, [
          b[9] || (b[9] = g("legend", { class: "fr-segmented__legend" }, " Choisir votre vue ", -1)),
          g("div", E5, [
            g("div", D5, [
              g("input", {
                id: "segmented-chart-" + e.id,
                value: "1",
                type: "radio",
                checked: "",
                name: "segmented-" + e.id,
                onChange: b[3] || (b[3] = (v) => u("chart"))
              }, null, 40, A5),
              g("label", {
                class: "fr-label",
                for: "segmented-chart-" + e.id
              }, [...b[7] || (b[7] = [
                g("span", {
                  class: "fr-icon-pie-chart-2-fill fr-icon--sm",
                  "aria-hidden": "true"
                }, null, -1),
                g("span", { class: "fr-sr-only" }, "Vue graphique", -1)
              ])], 8, N5)
            ]),
            g("div", O5, [
              g("input", {
                id: "segmented-table-" + e.id,
                value: "2",
                type: "radio",
                name: "segmented-" + e.id,
                onChange: b[4] || (b[4] = (v) => u("table"))
              }, null, 40, R5),
              g("label", {
                class: "fr-label",
                for: "segmented-table-" + e.id
              }, [...b[8] || (b[8] = [
                g("span", {
                  class: "fr-icon-table-2 fr-icon fr-icon--sm",
                  "aria-hidden": "true"
                }, null, -1),
                g("span", { class: "fr-sr-only" }, "Vue tableau", -1)
              ])], 8, T5)
            ])
          ])
        ], 2)) : Mt("", !0)
      ])
    ], 8, Uy));
  }
}, F5 = /* @__PURE__ */ It(L5, [["__scopeId", "data-v-4357c980"]]), { min: I5, max: V5 } = Math, ds = (e, t = 0, n = 1) => I5(V5(t, e), n), hc = (e) => {
  e._clipped = !1, e._unclipped = e.slice(0);
  for (let t = 0; t <= 3; t++)
    t < 3 ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0), e[t] = ds(e[t], 0, 255)) : t === 3 && (e[t] = ds(e[t], 0, 1));
  return e;
}, q1 = {};
for (let e of [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Undefined",
  "Null"
])
  q1[`[object ${e}]`] = e.toLowerCase();
function ft(e) {
  return q1[Object.prototype.toString.call(e)] || "object";
}
const at = (e, t = null) => e.length >= 3 ? Array.prototype.slice.call(e) : ft(e[0]) == "object" && t ? t.split("").filter((n) => e[0][n] !== void 0).map((n) => e[0][n]) : e[0].slice(0), Us = (e) => {
  if (e.length < 2) return null;
  const t = e.length - 1;
  return ft(e[t]) == "string" ? e[t].toLowerCase() : null;
}, { PI: Gr, min: Y1, max: U1 } = Math, Se = (e) => Math.round(e * 100) / 100, ga = (e) => Math.round(e * 100) / 100, yn = Gr * 2, Cl = Gr / 3, B5 = Gr / 180, $5 = 180 / Gr;
function G1(e) {
  return [...e.slice(0, 3).reverse(), ...e.slice(3)];
}
const rt = {
  format: {},
  autodetect: []
};
let $ = class {
  constructor(...t) {
    const n = this;
    if (ft(t[0]) === "object" && t[0].constructor && t[0].constructor === this.constructor)
      return t[0];
    let s = Us(t), i = !1;
    if (!s) {
      i = !0, rt.sorted || (rt.autodetect = rt.autodetect.sort((r, o) => o.p - r.p), rt.sorted = !0);
      for (let r of rt.autodetect)
        if (s = r.test(...t), s) break;
    }
    if (rt.format[s]) {
      const r = rt.format[s].apply(
        null,
        i ? t : t.slice(0, -1)
      );
      n._rgb = hc(r);
    } else
      throw new Error("unknown format: " + t);
    n._rgb.length === 3 && n._rgb.push(1);
  }
  toString() {
    return ft(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`;
  }
};
const H5 = "3.1.2", K = (...e) => new $(...e);
K.version = H5;
const zs = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  laserlemon: "#ffff54",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrod: "#fafad2",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  maroon2: "#7f0000",
  maroon3: "#b03060",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  purple2: "#7f007f",
  purple3: "#a020f0",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
}, z5 = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, j5 = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, X1 = (e) => {
  if (e.match(z5)) {
    (e.length === 4 || e.length === 7) && (e = e.substr(1)), e.length === 3 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
    const t = parseInt(e, 16), n = t >> 16, s = t >> 8 & 255, i = t & 255;
    return [n, s, i, 1];
  }
  if (e.match(j5)) {
    (e.length === 5 || e.length === 9) && (e = e.substr(1)), e.length === 4 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
    const t = parseInt(e, 16), n = t >> 24 & 255, s = t >> 16 & 255, i = t >> 8 & 255, r = Math.round((t & 255) / 255 * 100) / 100;
    return [n, s, i, r];
  }
  throw new Error(`unknown hex color: ${e}`);
}, { round: wo } = Math, K1 = (...e) => {
  let [t, n, s, i] = at(e, "rgba"), r = Us(e) || "auto";
  i === void 0 && (i = 1), r === "auto" && (r = i < 1 ? "rgba" : "rgb"), t = wo(t), n = wo(n), s = wo(s);
  let l = "000000" + (t << 16 | n << 8 | s).toString(16);
  l = l.substr(l.length - 6);
  let a = "0" + wo(i * 255).toString(16);
  switch (a = a.substr(a.length - 2), r.toLowerCase()) {
    case "rgba":
      return `#${l}${a}`;
    case "argb":
      return `#${a}${l}`;
    default:
      return `#${l}`;
  }
};
$.prototype.name = function() {
  const e = K1(this._rgb, "rgb");
  for (let t of Object.keys(zs))
    if (zs[t] === e) return t.toLowerCase();
  return e;
};
rt.format.named = (e) => {
  if (e = e.toLowerCase(), zs[e]) return X1(zs[e]);
  throw new Error("unknown color name: " + e);
};
rt.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && ft(e) === "string" && zs[e.toLowerCase()])
      return "named";
  }
});
$.prototype.alpha = function(e, t = !1) {
  return e !== void 0 && ft(e) === "number" ? t ? (this._rgb[3] = e, this) : new $([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3];
};
$.prototype.clipped = function() {
  return this._rgb._clipped || !1;
};
const sn = {
  // Corresponds roughly to RGB brighter/darker
  Kn: 18,
  // D65 standard referent
  labWhitePoint: "d65",
  Xn: 0.95047,
  Yn: 1,
  Zn: 1.08883,
  kE: 216 / 24389,
  kKE: 8,
  kK: 24389 / 27,
  RefWhiteRGB: {
    // sRGB
    X: 0.95047,
    Y: 1,
    Z: 1.08883
  },
  MtxRGB2XYZ: {
    m00: 0.4124564390896922,
    m01: 0.21267285140562253,
    m02: 0.0193338955823293,
    m10: 0.357576077643909,
    m11: 0.715152155287818,
    m12: 0.11919202588130297,
    m20: 0.18043748326639894,
    m21: 0.07217499330655958,
    m22: 0.9503040785363679
  },
  MtxXYZ2RGB: {
    m00: 3.2404541621141045,
    m01: -0.9692660305051868,
    m02: 0.055643430959114726,
    m10: -1.5371385127977166,
    m11: 1.8760108454466942,
    m12: -0.2040259135167538,
    m20: -0.498531409556016,
    m21: 0.041556017530349834,
    m22: 1.0572251882231791
  },
  // used in rgb2xyz
  As: 0.9414285350000001,
  Bs: 1.040417467,
  Cs: 1.089532651,
  MtxAdaptMa: {
    m00: 0.8951,
    m01: -0.7502,
    m02: 0.0389,
    m10: 0.2664,
    m11: 1.7135,
    m12: -0.0685,
    m20: -0.1614,
    m21: 0.0367,
    m22: 1.0296
  },
  MtxAdaptMaI: {
    m00: 0.9869929054667123,
    m01: 0.43230526972339456,
    m02: -0.008528664575177328,
    m10: -0.14705425642099013,
    m11: 0.5183602715367776,
    m12: 0.04004282165408487,
    m20: 0.15996265166373125,
    m21: 0.0492912282128556,
    m22: 0.9684866957875502
  }
}, W5 = /* @__PURE__ */ new Map([
  // ASTM E308-01
  ["a", [1.0985, 0.35585]],
  // Wyszecki & Stiles, p. 769
  ["b", [1.0985, 0.35585]],
  // C ASTM E308-01
  ["c", [0.98074, 1.18232]],
  // D50 (ASTM E308-01)
  ["d50", [0.96422, 0.82521]],
  // D55 (ASTM E308-01)
  ["d55", [0.95682, 0.92149]],
  // D65 (ASTM E308-01)
  ["d65", [0.95047, 1.08883]],
  // E (ASTM E308-01)
  ["e", [1, 1, 1]],
  // F2 (ASTM E308-01)
  ["f2", [0.99186, 0.67393]],
  // F7 (ASTM E308-01)
  ["f7", [0.95041, 1.08747]],
  // F11 (ASTM E308-01)
  ["f11", [1.00962, 0.6435]],
  ["icc", [0.96422, 0.82521]]
]);
function kn(e) {
  const t = W5.get(String(e).toLowerCase());
  if (!t)
    throw new Error("unknown Lab illuminant " + e);
  sn.labWhitePoint = e, sn.Xn = t[0], sn.Zn = t[1];
}
function Vi() {
  return sn.labWhitePoint;
}
const dc = (...e) => {
  e = at(e, "lab");
  const [t, n, s] = e, [i, r, o] = q5(t, n, s), [l, a, c] = J1(i, r, o);
  return [l, a, c, e.length > 3 ? e[3] : 1];
}, q5 = (e, t, n) => {
  const { kE: s, kK: i, kKE: r, Xn: o, Yn: l, Zn: a } = sn, c = (e + 16) / 116, h = 2e-3 * t + c, d = c - 5e-3 * n, u = h * h * h, f = d * d * d, m = u > s ? u : (116 * h - 16) / i, p = e > r ? Math.pow((e + 16) / 116, 3) : e / i, b = f > s ? f : (116 * d - 16) / i, v = m * o, x = p * l, C = b * a;
  return [v, x, C];
}, Pl = (e) => {
  const t = Math.sign(e);
  return e = Math.abs(e), (e <= 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 1 / 2.4) - 0.055) * t;
}, J1 = (e, t, n) => {
  const { MtxAdaptMa: s, MtxAdaptMaI: i, MtxXYZ2RGB: r, RefWhiteRGB: o, Xn: l, Yn: a, Zn: c } = sn, h = l * s.m00 + a * s.m10 + c * s.m20, d = l * s.m01 + a * s.m11 + c * s.m21, u = l * s.m02 + a * s.m12 + c * s.m22, f = o.X * s.m00 + o.Y * s.m10 + o.Z * s.m20, m = o.X * s.m01 + o.Y * s.m11 + o.Z * s.m21, p = o.X * s.m02 + o.Y * s.m12 + o.Z * s.m22, b = (e * s.m00 + t * s.m10 + n * s.m20) * (f / h), v = (e * s.m01 + t * s.m11 + n * s.m21) * (m / d), x = (e * s.m02 + t * s.m12 + n * s.m22) * (p / u), C = b * i.m00 + v * i.m10 + x * i.m20, S = b * i.m01 + v * i.m11 + x * i.m21, w = b * i.m02 + v * i.m12 + x * i.m22, D = Pl(
    C * r.m00 + S * r.m10 + w * r.m20
  ), _ = Pl(
    C * r.m01 + S * r.m11 + w * r.m21
  ), E = Pl(
    C * r.m02 + S * r.m12 + w * r.m22
  );
  return [D * 255, _ * 255, E * 255];
}, uc = (...e) => {
  const [t, n, s, ...i] = at(e, "rgb"), [r, o, l] = Z1(t, n, s), [a, c, h] = Y5(r, o, l);
  return [a, c, h, ...i.length > 0 && i[0] < 1 ? [i[0]] : []];
};
function Y5(e, t, n) {
  const { Xn: s, Yn: i, Zn: r, kE: o, kK: l } = sn, a = e / s, c = t / i, h = n / r, d = a > o ? Math.pow(a, 1 / 3) : (l * a + 16) / 116, u = c > o ? Math.pow(c, 1 / 3) : (l * c + 16) / 116, f = h > o ? Math.pow(h, 1 / 3) : (l * h + 16) / 116;
  return [116 * u - 16, 500 * (d - u), 200 * (u - f)];
}
function Sl(e) {
  const t = Math.sign(e);
  return e = Math.abs(e), (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) * t;
}
const Z1 = (e, t, n) => {
  e = Sl(e / 255), t = Sl(t / 255), n = Sl(n / 255);
  const { MtxRGB2XYZ: s, MtxAdaptMa: i, MtxAdaptMaI: r, Xn: o, Yn: l, Zn: a, As: c, Bs: h, Cs: d } = sn;
  let u = e * s.m00 + t * s.m10 + n * s.m20, f = e * s.m01 + t * s.m11 + n * s.m21, m = e * s.m02 + t * s.m12 + n * s.m22;
  const p = o * i.m00 + l * i.m10 + a * i.m20, b = o * i.m01 + l * i.m11 + a * i.m21, v = o * i.m02 + l * i.m12 + a * i.m22;
  let x = u * i.m00 + f * i.m10 + m * i.m20, C = u * i.m01 + f * i.m11 + m * i.m21, S = u * i.m02 + f * i.m12 + m * i.m22;
  return x *= p / c, C *= b / h, S *= v / d, u = x * r.m00 + C * r.m10 + S * r.m20, f = x * r.m01 + C * r.m11 + S * r.m21, m = x * r.m02 + C * r.m12 + S * r.m22, [u, f, m];
};
$.prototype.lab = function() {
  return uc(this._rgb);
};
const U5 = (...e) => new $(...e, "lab");
Object.assign(K, { lab: U5, getLabWhitePoint: Vi, setLabWhitePoint: kn });
rt.format.lab = dc;
rt.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = at(e, "lab"), ft(e) === "array" && e.length === 3)
      return "lab";
  }
});
$.prototype.darken = function(e = 1) {
  const t = this, n = t.lab();
  return n[0] -= sn.Kn * e, new $(n, "lab").alpha(t.alpha(), !0);
};
$.prototype.brighten = function(e = 1) {
  return this.darken(-e);
};
$.prototype.darker = $.prototype.darken;
$.prototype.brighter = $.prototype.brighten;
$.prototype.get = function(e) {
  const [t, n] = e.split("."), s = this[t]();
  if (n) {
    const i = t.indexOf(n) - (t.substr(0, 2) === "ok" ? 2 : 0);
    if (i > -1) return s[i];
    throw new Error(`unknown channel ${n} in mode ${t}`);
  } else
    return s;
};
const { pow: G5 } = Math, X5 = 1e-7, K5 = 20;
$.prototype.luminance = function(e, t = "rgb") {
  if (e !== void 0 && ft(e) === "number") {
    if (e === 0)
      return new $([0, 0, 0, this._rgb[3]], "rgb");
    if (e === 1)
      return new $([255, 255, 255, this._rgb[3]], "rgb");
    let n = this.luminance(), s = K5;
    const i = (o, l) => {
      const a = o.interpolate(l, 0.5, t), c = a.luminance();
      return Math.abs(e - c) < X5 || !s-- ? a : c > e ? i(o, a) : i(a, l);
    }, r = (n > e ? i(new $([0, 0, 0]), this) : i(this, new $([255, 255, 255]))).rgb();
    return new $([...r, this._rgb[3]]);
  }
  return J5(...this._rgb.slice(0, 3));
};
const J5 = (e, t, n) => (e = El(e), t = El(t), n = El(n), 0.2126 * e + 0.7152 * t + 0.0722 * n), El = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : G5((e + 0.055) / 1.055, 2.4)), te = {}, js = (e, t, n = 0.5, ...s) => {
  let i = s[0] || "lrgb";
  if (!te[i] && !s.length && (i = Object.keys(te)[0]), !te[i])
    throw new Error(`interpolation mode ${i} is not defined`);
  return ft(e) !== "object" && (e = new $(e)), ft(t) !== "object" && (t = new $(t)), te[i](e, t, n).alpha(
    e.alpha() + n * (t.alpha() - e.alpha())
  );
};
$.prototype.mix = $.prototype.interpolate = function(e, t = 0.5, ...n) {
  return js(this, e, t, ...n);
};
$.prototype.premultiply = function(e = !1) {
  const t = this._rgb, n = t[3];
  return e ? (this._rgb = [t[0] * n, t[1] * n, t[2] * n, n], this) : new $([t[0] * n, t[1] * n, t[2] * n, n], "rgb");
};
const { sin: Z5, cos: Q5 } = Math, Q1 = (...e) => {
  let [t, n, s] = at(e, "lch");
  return isNaN(s) && (s = 0), s = s * B5, [t, Q5(s) * n, Z5(s) * n];
}, fc = (...e) => {
  e = at(e, "lch");
  const [t, n, s] = e, [i, r, o] = Q1(t, n, s), [l, a, c] = dc(i, r, o);
  return [l, a, c, e.length > 3 ? e[3] : 1];
}, t6 = (...e) => {
  const t = G1(at(e, "hcl"));
  return fc(...t);
}, { sqrt: e6, atan2: n6, round: s6 } = Math, tp = (...e) => {
  const [t, n, s] = at(e, "lab"), i = e6(n * n + s * s);
  let r = (n6(s, n) * $5 + 360) % 360;
  return s6(i * 1e4) === 0 && (r = Number.NaN), [t, i, r];
}, pc = (...e) => {
  const [t, n, s, ...i] = at(e, "rgb"), [r, o, l] = uc(t, n, s), [a, c, h] = tp(r, o, l);
  return [a, c, h, ...i.length > 0 && i[0] < 1 ? [i[0]] : []];
};
$.prototype.lch = function() {
  return pc(this._rgb);
};
$.prototype.hcl = function() {
  return G1(pc(this._rgb));
};
const i6 = (...e) => new $(...e, "lch"), o6 = (...e) => new $(...e, "hcl");
Object.assign(K, { lch: i6, hcl: o6 });
rt.format.lch = fc;
rt.format.hcl = t6;
["lch", "hcl"].forEach(
  (e) => rt.autodetect.push({
    p: 2,
    test: (...t) => {
      if (t = at(t, e), ft(t) === "array" && t.length === 3)
        return e;
    }
  })
);
$.prototype.saturate = function(e = 1) {
  const t = this, n = t.lch();
  return n[1] += sn.Kn * e, n[1] < 0 && (n[1] = 0), new $(n, "lch").alpha(t.alpha(), !0);
};
$.prototype.desaturate = function(e = 1) {
  return this.saturate(-e);
};
$.prototype.set = function(e, t, n = !1) {
  const [s, i] = e.split("."), r = this[s]();
  if (i) {
    const o = s.indexOf(i) - (s.substr(0, 2) === "ok" ? 2 : 0);
    if (o > -1) {
      if (ft(t) == "string")
        switch (t.charAt(0)) {
          case "+":
            r[o] += +t;
            break;
          case "-":
            r[o] += +t;
            break;
          case "*":
            r[o] *= +t.substr(1);
            break;
          case "/":
            r[o] /= +t.substr(1);
            break;
          default:
            r[o] = +t;
        }
      else if (ft(t) === "number")
        r[o] = t;
      else
        throw new Error("unsupported value for Color.set");
      const l = new $(r, s);
      return n ? (this._rgb = l._rgb, this) : l;
    }
    throw new Error(`unknown channel ${i} in mode ${s}`);
  } else
    return r;
};
$.prototype.tint = function(e = 0.5, ...t) {
  return js(this, "white", e, ...t);
};
$.prototype.shade = function(e = 0.5, ...t) {
  return js(this, "black", e, ...t);
};
const r6 = (e, t, n) => {
  const s = e._rgb, i = t._rgb;
  return new $(
    s[0] + n * (i[0] - s[0]),
    s[1] + n * (i[1] - s[1]),
    s[2] + n * (i[2] - s[2]),
    "rgb"
  );
};
te.rgb = r6;
const { sqrt: Dl, pow: Ps } = Math, l6 = (e, t, n) => {
  const [s, i, r] = e._rgb, [o, l, a] = t._rgb;
  return new $(
    Dl(Ps(s, 2) * (1 - n) + Ps(o, 2) * n),
    Dl(Ps(i, 2) * (1 - n) + Ps(l, 2) * n),
    Dl(Ps(r, 2) * (1 - n) + Ps(a, 2) * n),
    "rgb"
  );
};
te.lrgb = l6;
const a6 = (e, t, n) => {
  const s = e.lab(), i = t.lab();
  return new $(
    s[0] + n * (i[0] - s[0]),
    s[1] + n * (i[1] - s[1]),
    s[2] + n * (i[2] - s[2]),
    "lab"
  );
};
te.lab = a6;
const Gs = (e, t, n, s) => {
  let i, r;
  s === "hsl" ? (i = e.hsl(), r = t.hsl()) : s === "hsv" ? (i = e.hsv(), r = t.hsv()) : s === "hcg" ? (i = e.hcg(), r = t.hcg()) : s === "hsi" ? (i = e.hsi(), r = t.hsi()) : s === "lch" || s === "hcl" ? (s = "hcl", i = e.hcl(), r = t.hcl()) : s === "oklch" && (i = e.oklch().reverse(), r = t.oklch().reverse());
  let o, l, a, c, h, d;
  (s.substr(0, 1) === "h" || s === "oklch") && ([o, a, h] = i, [l, c, d] = r);
  let u, f, m, p;
  return !isNaN(o) && !isNaN(l) ? (l > o && l - o > 180 ? p = l - (o + 360) : l < o && o - l > 180 ? p = l + 360 - o : p = l - o, f = o + n * p) : isNaN(o) ? isNaN(l) ? f = Number.NaN : (f = l, (h == 1 || h == 0) && s != "hsv" && (u = c)) : (f = o, (d == 1 || d == 0) && s != "hsv" && (u = a)), u === void 0 && (u = a + n * (c - a)), m = h + n * (d - h), s === "oklch" ? new $([m, u, f], s) : new $([f, u, m], s);
}, ep = (e, t, n) => Gs(e, t, n, "lch");
te.lch = ep;
te.hcl = ep;
const c6 = (e) => {
  if (ft(e) == "number" && e >= 0 && e <= 16777215) {
    const t = e >> 16, n = e >> 8 & 255, s = e & 255;
    return [t, n, s, 1];
  }
  throw new Error("unknown num color: " + e);
}, h6 = (...e) => {
  const [t, n, s] = at(e, "rgb");
  return (t << 16) + (n << 8) + s;
};
$.prototype.num = function() {
  return h6(this._rgb);
};
const d6 = (...e) => new $(...e, "num");
Object.assign(K, { num: d6 });
rt.format.num = c6;
rt.autodetect.push({
  p: 5,
  test: (...e) => {
    if (e.length === 1 && ft(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215)
      return "num";
  }
});
const u6 = (e, t, n) => {
  const s = e.num(), i = t.num();
  return new $(s + n * (i - s), "num");
};
te.num = u6;
const { floor: f6 } = Math, p6 = (...e) => {
  e = at(e, "hcg");
  let [t, n, s] = e, i, r, o;
  s = s * 255;
  const l = n * 255;
  if (n === 0)
    i = r = o = s;
  else {
    t === 360 && (t = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 60;
    const a = f6(t), c = t - a, h = s * (1 - n), d = h + l * (1 - c), u = h + l * c, f = h + l;
    switch (a) {
      case 0:
        [i, r, o] = [f, u, h];
        break;
      case 1:
        [i, r, o] = [d, f, h];
        break;
      case 2:
        [i, r, o] = [h, f, u];
        break;
      case 3:
        [i, r, o] = [h, d, f];
        break;
      case 4:
        [i, r, o] = [u, h, f];
        break;
      case 5:
        [i, r, o] = [f, h, d];
        break;
    }
  }
  return [i, r, o, e.length > 3 ? e[3] : 1];
}, g6 = (...e) => {
  const [t, n, s] = at(e, "rgb"), i = Y1(t, n, s), r = U1(t, n, s), o = r - i, l = o * 100 / 255, a = i / (255 - o) * 100;
  let c;
  return o === 0 ? c = Number.NaN : (t === r && (c = (n - s) / o), n === r && (c = 2 + (s - t) / o), s === r && (c = 4 + (t - n) / o), c *= 60, c < 0 && (c += 360)), [c, l, a];
};
$.prototype.hcg = function() {
  return g6(this._rgb);
};
const m6 = (...e) => new $(...e, "hcg");
K.hcg = m6;
rt.format.hcg = p6;
rt.autodetect.push({
  p: 1,
  test: (...e) => {
    if (e = at(e, "hcg"), ft(e) === "array" && e.length === 3)
      return "hcg";
  }
});
const b6 = (e, t, n) => Gs(e, t, n, "hcg");
te.hcg = b6;
const { cos: Ss } = Math, v6 = (...e) => {
  e = at(e, "hsi");
  let [t, n, s] = e, i, r, o;
  return isNaN(t) && (t = 0), isNaN(n) && (n = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 360, t < 1 / 3 ? (o = (1 - n) / 3, i = (1 + n * Ss(yn * t) / Ss(Cl - yn * t)) / 3, r = 1 - (o + i)) : t < 2 / 3 ? (t -= 1 / 3, i = (1 - n) / 3, r = (1 + n * Ss(yn * t) / Ss(Cl - yn * t)) / 3, o = 1 - (i + r)) : (t -= 2 / 3, r = (1 - n) / 3, o = (1 + n * Ss(yn * t) / Ss(Cl - yn * t)) / 3, i = 1 - (r + o)), i = ds(s * i * 3), r = ds(s * r * 3), o = ds(s * o * 3), [i * 255, r * 255, o * 255, e.length > 3 ? e[3] : 1];
}, { min: y6, sqrt: x6, acos: w6 } = Math, k6 = (...e) => {
  let [t, n, s] = at(e, "rgb");
  t /= 255, n /= 255, s /= 255;
  let i;
  const r = y6(t, n, s), o = (t + n + s) / 3, l = o > 0 ? 1 - r / o : 0;
  return l === 0 ? i = NaN : (i = (t - n + (t - s)) / 2, i /= x6((t - n) * (t - n) + (t - s) * (n - s)), i = w6(i), s > n && (i = yn - i), i /= yn), [i * 360, l, o];
};
$.prototype.hsi = function() {
  return k6(this._rgb);
};
const _6 = (...e) => new $(...e, "hsi");
K.hsi = _6;
rt.format.hsi = v6;
rt.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = at(e, "hsi"), ft(e) === "array" && e.length === 3)
      return "hsi";
  }
});
const M6 = (e, t, n) => Gs(e, t, n, "hsi");
te.hsi = M6;
const ma = (...e) => {
  e = at(e, "hsl");
  const [t, n, s] = e;
  let i, r, o;
  if (n === 0)
    i = r = o = s * 255;
  else {
    const l = [0, 0, 0], a = [0, 0, 0], c = s < 0.5 ? s * (1 + n) : s + n - s * n, h = 2 * s - c, d = t / 360;
    l[0] = d + 1 / 3, l[1] = d, l[2] = d - 1 / 3;
    for (let u = 0; u < 3; u++)
      l[u] < 0 && (l[u] += 1), l[u] > 1 && (l[u] -= 1), 6 * l[u] < 1 ? a[u] = h + (c - h) * 6 * l[u] : 2 * l[u] < 1 ? a[u] = c : 3 * l[u] < 2 ? a[u] = h + (c - h) * (2 / 3 - l[u]) * 6 : a[u] = h;
    [i, r, o] = [a[0] * 255, a[1] * 255, a[2] * 255];
  }
  return e.length > 3 ? [i, r, o, e[3]] : [i, r, o, 1];
}, np = (...e) => {
  e = at(e, "rgba");
  let [t, n, s] = e;
  t /= 255, n /= 255, s /= 255;
  const i = Y1(t, n, s), r = U1(t, n, s), o = (r + i) / 2;
  let l, a;
  return r === i ? (l = 0, a = Number.NaN) : l = o < 0.5 ? (r - i) / (r + i) : (r - i) / (2 - r - i), t == r ? a = (n - s) / (r - i) : n == r ? a = 2 + (s - t) / (r - i) : s == r && (a = 4 + (t - n) / (r - i)), a *= 60, a < 0 && (a += 360), e.length > 3 && e[3] !== void 0 ? [a, l, o, e[3]] : [a, l, o];
};
$.prototype.hsl = function() {
  return np(this._rgb);
};
const C6 = (...e) => new $(...e, "hsl");
K.hsl = C6;
rt.format.hsl = ma;
rt.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = at(e, "hsl"), ft(e) === "array" && e.length === 3)
      return "hsl";
  }
});
const P6 = (e, t, n) => Gs(e, t, n, "hsl");
te.hsl = P6;
const { floor: S6 } = Math, E6 = (...e) => {
  e = at(e, "hsv");
  let [t, n, s] = e, i, r, o;
  if (s *= 255, n === 0)
    i = r = o = s;
  else {
    t === 360 && (t = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 60;
    const l = S6(t), a = t - l, c = s * (1 - n), h = s * (1 - n * a), d = s * (1 - n * (1 - a));
    switch (l) {
      case 0:
        [i, r, o] = [s, d, c];
        break;
      case 1:
        [i, r, o] = [h, s, c];
        break;
      case 2:
        [i, r, o] = [c, s, d];
        break;
      case 3:
        [i, r, o] = [c, h, s];
        break;
      case 4:
        [i, r, o] = [d, c, s];
        break;
      case 5:
        [i, r, o] = [s, c, h];
        break;
    }
  }
  return [i, r, o, e.length > 3 ? e[3] : 1];
}, { min: D6, max: A6 } = Math, N6 = (...e) => {
  e = at(e, "rgb");
  let [t, n, s] = e;
  const i = D6(t, n, s), r = A6(t, n, s), o = r - i;
  let l, a, c;
  return c = r / 255, r === 0 ? (l = Number.NaN, a = 0) : (a = o / r, t === r && (l = (n - s) / o), n === r && (l = 2 + (s - t) / o), s === r && (l = 4 + (t - n) / o), l *= 60, l < 0 && (l += 360)), [l, a, c];
};
$.prototype.hsv = function() {
  return N6(this._rgb);
};
const O6 = (...e) => new $(...e, "hsv");
K.hsv = O6;
rt.format.hsv = E6;
rt.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = at(e, "hsv"), ft(e) === "array" && e.length === 3)
      return "hsv";
  }
});
const R6 = (e, t, n) => Gs(e, t, n, "hsv");
te.hsv = R6;
function vr(e, t) {
  let n = e.length;
  Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((o) => [o]));
  let s = t[0].length, i = t[0].map((o, l) => t.map((a) => a[l])), r = e.map(
    (o) => i.map((l) => Array.isArray(o) ? o.reduce((a, c, h) => a + c * (l[h] || 0), 0) : l.reduce((a, c) => a + c * o, 0))
  );
  return n === 1 && (r = r[0]), s === 1 ? r.map((o) => o[0]) : r;
}
const gc = (...e) => {
  e = at(e, "lab");
  const [t, n, s, ...i] = e, [r, o, l] = T6([t, n, s]), [a, c, h] = J1(r, o, l);
  return [a, c, h, ...i.length > 0 && i[0] < 1 ? [i[0]] : []];
};
function T6(e) {
  var t = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ], n = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ], s = vr(n, e);
  return vr(
    t,
    s.map((i) => i ** 3)
  );
}
const mc = (...e) => {
  const [t, n, s, ...i] = at(e, "rgb"), r = Z1(t, n, s);
  return [...L6(r), ...i.length > 0 && i[0] < 1 ? [i[0]] : []];
};
function L6(e) {
  const t = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ], n = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ], s = vr(t, e);
  return vr(
    n,
    s.map((i) => Math.cbrt(i))
  );
}
$.prototype.oklab = function() {
  return mc(this._rgb);
};
const F6 = (...e) => new $(...e, "oklab");
Object.assign(K, { oklab: F6 });
rt.format.oklab = gc;
rt.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = at(e, "oklab"), ft(e) === "array" && e.length === 3)
      return "oklab";
  }
});
const I6 = (e, t, n) => {
  const s = e.oklab(), i = t.oklab();
  return new $(
    s[0] + n * (i[0] - s[0]),
    s[1] + n * (i[1] - s[1]),
    s[2] + n * (i[2] - s[2]),
    "oklab"
  );
};
te.oklab = I6;
const V6 = (e, t, n) => Gs(e, t, n, "oklch");
te.oklch = V6;
const { pow: Al, sqrt: Nl, PI: Ol, cos: Ud, sin: Gd, atan2: B6 } = Math, $6 = (e, t = "lrgb", n = null) => {
  const s = e.length;
  n || (n = Array.from(new Array(s)).map(() => 1));
  const i = s / n.reduce(function(d, u) {
    return d + u;
  });
  if (n.forEach((d, u) => {
    n[u] *= i;
  }), e = e.map((d) => new $(d)), t === "lrgb")
    return H6(e, n);
  const r = e.shift(), o = r.get(t), l = [];
  let a = 0, c = 0;
  for (let d = 0; d < o.length; d++)
    if (o[d] = (o[d] || 0) * n[0], l.push(isNaN(o[d]) ? 0 : n[0]), t.charAt(d) === "h" && !isNaN(o[d])) {
      const u = o[d] / 180 * Ol;
      a += Ud(u) * n[0], c += Gd(u) * n[0];
    }
  let h = r.alpha() * n[0];
  e.forEach((d, u) => {
    const f = d.get(t);
    h += d.alpha() * n[u + 1];
    for (let m = 0; m < o.length; m++)
      if (!isNaN(f[m]))
        if (l[m] += n[u + 1], t.charAt(m) === "h") {
          const p = f[m] / 180 * Ol;
          a += Ud(p) * n[u + 1], c += Gd(p) * n[u + 1];
        } else
          o[m] += f[m] * n[u + 1];
  });
  for (let d = 0; d < o.length; d++)
    if (t.charAt(d) === "h") {
      let u = B6(c / l[d], a / l[d]) / Ol * 180;
      for (; u < 0; ) u += 360;
      for (; u >= 360; ) u -= 360;
      o[d] = u;
    } else
      o[d] = o[d] / l[d];
  return h /= s, new $(o, t).alpha(h > 0.99999 ? 1 : h, !0);
}, H6 = (e, t) => {
  const n = e.length, s = [0, 0, 0, 0];
  for (let i = 0; i < e.length; i++) {
    const r = e[i], o = t[i] / n, l = r._rgb;
    s[0] += Al(l[0], 2) * o, s[1] += Al(l[1], 2) * o, s[2] += Al(l[2], 2) * o, s[3] += l[3] * o;
  }
  return s[0] = Nl(s[0]), s[1] = Nl(s[1]), s[2] = Nl(s[2]), s[3] > 0.9999999 && (s[3] = 1), new $(hc(s));
}, { pow: z6 } = Math;
function yr(e) {
  let t = "rgb", n = K("#ccc"), s = 0, i = [0, 1], r = [], o = [0, 0], l = !1, a = [], c = !1, h = 0, d = 1, u = !1, f = {}, m = !0, p = 1;
  const b = function(_) {
    if (_ = _ || ["#fff", "#000"], _ && ft(_) === "string" && K.brewer && K.brewer[_.toLowerCase()] && (_ = K.brewer[_.toLowerCase()]), ft(_) === "array") {
      _.length === 1 && (_ = [_[0], _[0]]), _ = _.slice(0);
      for (let E = 0; E < _.length; E++)
        _[E] = K(_[E]);
      r.length = 0;
      for (let E = 0; E < _.length; E++)
        r.push(E / (_.length - 1));
    }
    return w(), a = _;
  }, v = function(_) {
    if (l != null) {
      const E = l.length - 1;
      let N = 0;
      for (; N < E && _ >= l[N]; )
        N++;
      return N - 1;
    }
    return 0;
  };
  let x = (_) => _, C = (_) => _;
  const S = function(_, E) {
    let N, I;
    if (E == null && (E = !1), isNaN(_) || _ === null)
      return n;
    E ? I = _ : l && l.length > 2 ? I = v(_) / (l.length - 2) : d !== h ? I = (_ - h) / (d - h) : I = 1, I = C(I), E || (I = x(I)), p !== 1 && (I = z6(I, p)), I = o[0] + I * (1 - o[0] - o[1]), I = ds(I, 0, 1);
    const R = Math.floor(I * 1e4);
    if (m && f[R])
      N = f[R];
    else {
      if (ft(a) === "array")
        for (let W = 0; W < r.length; W++) {
          const Z = r[W];
          if (I <= Z) {
            N = a[W];
            break;
          }
          if (I >= Z && W === r.length - 1) {
            N = a[W];
            break;
          }
          if (I > Z && I < r[W + 1]) {
            I = (I - Z) / (r[W + 1] - Z), N = K.interpolate(
              a[W],
              a[W + 1],
              I,
              t
            );
            break;
          }
        }
      else ft(a) === "function" && (N = a(I));
      m && (f[R] = N);
    }
    return N;
  };
  var w = () => f = {};
  b(e);
  const D = function(_) {
    const E = K(S(_));
    return c && E[c] ? E[c]() : E;
  };
  return D.classes = function(_) {
    if (_ != null) {
      if (ft(_) === "array")
        l = _, i = [_[0], _[_.length - 1]];
      else {
        const E = K.analyze(i);
        _ === 0 ? l = [E.min, E.max] : l = K.limits(E, "e", _);
      }
      return D;
    }
    return l;
  }, D.domain = function(_) {
    if (!arguments.length)
      return i;
    h = _[0], d = _[_.length - 1], r = [];
    const E = a.length;
    if (_.length === E && h !== d)
      for (let N of Array.from(_))
        r.push((N - h) / (d - h));
    else {
      for (let N = 0; N < E; N++)
        r.push(N / (E - 1));
      if (_.length > 2) {
        const N = _.map((R, W) => W / (_.length - 1)), I = _.map((R) => (R - h) / (d - h));
        I.every((R, W) => N[W] === R) || (C = (R) => {
          if (R <= 0 || R >= 1) return R;
          let W = 0;
          for (; R >= I[W + 1]; ) W++;
          const Z = (R - I[W]) / (I[W + 1] - I[W]);
          return N[W] + Z * (N[W + 1] - N[W]);
        });
      }
    }
    return i = [h, d], D;
  }, D.mode = function(_) {
    return arguments.length ? (t = _, w(), D) : t;
  }, D.range = function(_, E) {
    return b(_), D;
  }, D.out = function(_) {
    return c = _, D;
  }, D.spread = function(_) {
    return arguments.length ? (s = _, D) : s;
  }, D.correctLightness = function(_) {
    return _ == null && (_ = !0), u = _, w(), u ? x = function(E) {
      const N = S(0, !0).lab()[0], I = S(1, !0).lab()[0], R = N > I;
      let W = S(E, !0).lab()[0];
      const Z = N + (I - N) * E;
      let kt = W - Z, it = 0, nt = 1, G = 20;
      for (; Math.abs(kt) > 0.01 && G-- > 0; )
        (function() {
          return R && (kt *= -1), kt < 0 ? (it = E, E += (nt - E) * 0.5) : (nt = E, E += (it - E) * 0.5), W = S(E, !0).lab()[0], kt = W - Z;
        })();
      return E;
    } : x = (E) => E, D;
  }, D.padding = function(_) {
    return _ != null ? (ft(_) === "number" && (_ = [_, _]), o = _, D) : o;
  }, D.colors = function(_, E) {
    arguments.length < 2 && (E = "hex");
    let N = [];
    if (arguments.length === 0)
      N = a.slice(0);
    else if (_ === 1)
      N = [D(0.5)];
    else if (_ > 1) {
      const I = i[0], R = i[1] - I;
      N = j6(0, _).map(
        (W) => D(I + W / (_ - 1) * R)
      );
    } else {
      e = [];
      let I = [];
      if (l && l.length > 2)
        for (let R = 1, W = l.length, Z = 1 <= W; Z ? R < W : R > W; Z ? R++ : R--)
          I.push((l[R - 1] + l[R]) * 0.5);
      else
        I = i;
      N = I.map((R) => D(R));
    }
    return K[E] && (N = N.map((I) => I[E]())), N;
  }, D.cache = function(_) {
    return _ != null ? (m = _, D) : m;
  }, D.gamma = function(_) {
    return _ != null ? (p = _, D) : p;
  }, D.nodata = function(_) {
    return _ != null ? (n = K(_), D) : n;
  }, D;
}
function j6(e, t, n) {
  let s = [], i = e < t, r = t;
  for (let o = e; i ? o < r : o > r; i ? o++ : o--)
    s.push(o);
  return s;
}
const W6 = function(e) {
  let t = [1, 1];
  for (let n = 1; n < e; n++) {
    let s = [1];
    for (let i = 1; i <= t.length; i++)
      s[i] = (t[i] || 0) + t[i - 1];
    t = s;
  }
  return t;
}, q6 = function(e) {
  let t, n, s, i;
  if (e = e.map((r) => new $(r)), e.length === 2)
    [n, s] = e.map((r) => r.lab()), t = function(r) {
      const o = [0, 1, 2].map((l) => n[l] + r * (s[l] - n[l]));
      return new $(o, "lab");
    };
  else if (e.length === 3)
    [n, s, i] = e.map((r) => r.lab()), t = function(r) {
      const o = [0, 1, 2].map(
        (l) => (1 - r) * (1 - r) * n[l] + 2 * (1 - r) * r * s[l] + r * r * i[l]
      );
      return new $(o, "lab");
    };
  else if (e.length === 4) {
    let r;
    [n, s, i, r] = e.map((o) => o.lab()), t = function(o) {
      const l = [0, 1, 2].map(
        (a) => (1 - o) * (1 - o) * (1 - o) * n[a] + 3 * (1 - o) * (1 - o) * o * s[a] + 3 * (1 - o) * o * o * i[a] + o * o * o * r[a]
      );
      return new $(l, "lab");
    };
  } else if (e.length >= 5) {
    let r, o, l;
    r = e.map((a) => a.lab()), l = e.length - 1, o = W6(l), t = function(a) {
      const c = 1 - a, h = [0, 1, 2].map(
        (d) => r.reduce(
          (u, f, m) => u + o[m] * c ** (l - m) * a ** m * f[d],
          0
        )
      );
      return new $(h, "lab");
    };
  } else
    throw new RangeError("No point in running bezier with only one color.");
  return t;
}, Y6 = (e) => {
  const t = q6(e);
  return t.scale = () => yr(t), t;
}, { round: sp } = Math;
$.prototype.rgb = function(e = !0) {
  return e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(sp);
};
$.prototype.rgba = function(e = !0) {
  return this._rgb.slice(0, 4).map((t, n) => n < 3 ? e === !1 ? t : sp(t) : t);
};
const U6 = (...e) => new $(...e, "rgb");
Object.assign(K, { rgb: U6 });
rt.format.rgb = (...e) => {
  const t = at(e, "rgba");
  return t[3] === void 0 && (t[3] = 1), t;
};
rt.autodetect.push({
  p: 3,
  test: (...e) => {
    if (e = at(e, "rgba"), ft(e) === "array" && (e.length === 3 || e.length === 4 && ft(e[3]) == "number" && e[3] >= 0 && e[3] <= 1))
      return "rgb";
  }
});
const He = (e, t, n) => {
  if (!He[n])
    throw new Error("unknown blend mode " + n);
  return He[n](e, t);
}, Hn = (e) => (t, n) => {
  const s = K(n).rgb(), i = K(t).rgb();
  return K.rgb(e(s, i));
}, zn = (e) => (t, n) => {
  const s = [];
  return s[0] = e(t[0], n[0]), s[1] = e(t[1], n[1]), s[2] = e(t[2], n[2]), s;
}, G6 = (e) => e, X6 = (e, t) => e * t / 255, K6 = (e, t) => e > t ? t : e, J6 = (e, t) => e > t ? e : t, Z6 = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255)), Q6 = (e, t) => t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255)), tx = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255)), ex = (e, t) => e === 255 ? 255 : (e = 255 * (t / 255) / (1 - e / 255), e > 255 ? 255 : e);
He.normal = Hn(zn(G6));
He.multiply = Hn(zn(X6));
He.screen = Hn(zn(Z6));
He.overlay = Hn(zn(Q6));
He.darken = Hn(zn(K6));
He.lighten = Hn(zn(J6));
He.dodge = Hn(zn(ex));
He.burn = Hn(zn(tx));
const { pow: nx, sin: sx, cos: ix } = Math;
function ox(e = 300, t = -1.5, n = 1, s = 1, i = [0, 1]) {
  let r = 0, o;
  ft(i) === "array" ? o = i[1] - i[0] : (o = 0, i = [i, i]);
  const l = function(a) {
    const c = yn * ((e + 120) / 360 + t * a), h = nx(i[0] + o * a, s), u = (r !== 0 ? n[0] + a * r : n) * h * (1 - h) / 2, f = ix(c), m = sx(c), p = h + u * (-0.14861 * f + 1.78277 * m), b = h + u * (-0.29227 * f - 0.90649 * m), v = h + u * (1.97294 * f);
    return K(hc([p * 255, b * 255, v * 255, 1]));
  };
  return l.start = function(a) {
    return a == null ? e : (e = a, l);
  }, l.rotations = function(a) {
    return a == null ? t : (t = a, l);
  }, l.gamma = function(a) {
    return a == null ? s : (s = a, l);
  }, l.hue = function(a) {
    return a == null ? n : (n = a, ft(n) === "array" ? (r = n[1] - n[0], r === 0 && (n = n[1])) : r = 0, l);
  }, l.lightness = function(a) {
    return a == null ? i : (ft(a) === "array" ? (i = a, o = a[1] - a[0]) : (i = [a, a], o = 0), l);
  }, l.scale = () => K.scale(l), l.hue(n), l;
}
const rx = "0123456789abcdef", { floor: lx, random: ax } = Math, cx = () => {
  let e = "#";
  for (let t = 0; t < 6; t++)
    e += rx.charAt(lx(ax() * 16));
  return new $(e, "hex");
}, { log: Xd, pow: hx, floor: dx, abs: ux } = Math;
function ip(e, t = null) {
  const n = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  return ft(e) === "object" && (e = Object.values(e)), e.forEach((s) => {
    t && ft(s) === "object" && (s = s[t]), s != null && !isNaN(s) && (n.values.push(s), n.sum += s, s < n.min && (n.min = s), s > n.max && (n.max = s), n.count += 1);
  }), n.domain = [n.min, n.max], n.limits = (s, i) => op(n, s, i), n;
}
function op(e, t = "equal", n = 7) {
  ft(e) == "array" && (e = ip(e));
  const { min: s, max: i } = e, r = e.values.sort((l, a) => l - a);
  if (n === 1)
    return [s, i];
  const o = [];
  if (t.substr(0, 1) === "c" && (o.push(s), o.push(i)), t.substr(0, 1) === "e") {
    o.push(s);
    for (let l = 1; l < n; l++)
      o.push(s + l / n * (i - s));
    o.push(i);
  } else if (t.substr(0, 1) === "l") {
    if (s <= 0)
      throw new Error(
        "Logarithmic scales are only possible for values > 0"
      );
    const l = Math.LOG10E * Xd(s), a = Math.LOG10E * Xd(i);
    o.push(s);
    for (let c = 1; c < n; c++)
      o.push(hx(10, l + c / n * (a - l)));
    o.push(i);
  } else if (t.substr(0, 1) === "q") {
    o.push(s);
    for (let l = 1; l < n; l++) {
      const a = (r.length - 1) * l / n, c = dx(a);
      if (c === a)
        o.push(r[c]);
      else {
        const h = a - c;
        o.push(r[c] * (1 - h) + r[c + 1] * h);
      }
    }
    o.push(i);
  } else if (t.substr(0, 1) === "k") {
    let l;
    const a = r.length, c = new Array(a), h = new Array(n);
    let d = !0, u = 0, f = null;
    f = [], f.push(s);
    for (let b = 1; b < n; b++)
      f.push(s + b / n * (i - s));
    for (f.push(i); d; ) {
      for (let v = 0; v < n; v++)
        h[v] = 0;
      for (let v = 0; v < a; v++) {
        const x = r[v];
        let C = Number.MAX_VALUE, S;
        for (let w = 0; w < n; w++) {
          const D = ux(f[w] - x);
          D < C && (C = D, S = w), h[S]++, c[v] = S;
        }
      }
      const b = new Array(n);
      for (let v = 0; v < n; v++)
        b[v] = null;
      for (let v = 0; v < a; v++)
        l = c[v], b[l] === null ? b[l] = r[v] : b[l] += r[v];
      for (let v = 0; v < n; v++)
        b[v] *= 1 / h[v];
      d = !1;
      for (let v = 0; v < n; v++)
        if (b[v] !== f[v]) {
          d = !0;
          break;
        }
      f = b, u++, u > 200 && (d = !1);
    }
    const m = {};
    for (let b = 0; b < n; b++)
      m[b] = [];
    for (let b = 0; b < a; b++)
      l = c[b], m[l].push(r[b]);
    let p = [];
    for (let b = 0; b < n; b++)
      p.push(m[b][0]), p.push(m[b][m[b].length - 1]);
    p = p.sort((b, v) => b - v), o.push(p[0]);
    for (let b = 1; b < p.length; b += 2) {
      const v = p[b];
      !isNaN(v) && o.indexOf(v) === -1 && o.push(v);
    }
  }
  return o;
}
const fx = (e, t) => {
  e = new $(e), t = new $(t);
  const n = e.luminance(), s = t.luminance();
  return n > s ? (n + 0.05) / (s + 0.05) : (s + 0.05) / (n + 0.05);
};
/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */
const Kd = 0.027, px = 5e-4, gx = 0.1, Jd = 1.14, ko = 0.022, Zd = 1.414, mx = (e, t) => {
  e = new $(e), t = new $(t), e.alpha() < 1 && (e = js(t, e, e.alpha(), "rgb"));
  const n = Qd(...e.rgb()), s = Qd(...t.rgb()), i = n >= ko ? n : n + Math.pow(ko - n, Zd), r = s >= ko ? s : s + Math.pow(ko - s, Zd), o = Math.pow(r, 0.56) - Math.pow(i, 0.57), l = Math.pow(r, 0.65) - Math.pow(i, 0.62), a = Math.abs(r - i) < px ? 0 : i < r ? o * Jd : l * Jd;
  return (Math.abs(a) < gx ? 0 : a > 0 ? a - Kd : a + Kd) * 100;
};
function Qd(e, t, n) {
  return 0.2126729 * Math.pow(e / 255, 2.4) + 0.7151522 * Math.pow(t / 255, 2.4) + 0.072175 * Math.pow(n / 255, 2.4);
}
const { sqrt: fn, pow: Vt, min: bx, max: vx, atan2: tu, abs: eu, cos: _o, sin: nu, exp: yx, PI: su } = Math;
function xx(e, t, n = 1, s = 1, i = 1) {
  var r = function(Wt) {
    return 360 * Wt / (2 * su);
  }, o = function(Wt) {
    return 2 * su * Wt / 360;
  };
  e = new $(e), t = new $(t);
  const [l, a, c] = Array.from(e.lab()), [h, d, u] = Array.from(t.lab()), f = (l + h) / 2, m = fn(Vt(a, 2) + Vt(c, 2)), p = fn(Vt(d, 2) + Vt(u, 2)), b = (m + p) / 2, v = 0.5 * (1 - fn(Vt(b, 7) / (Vt(b, 7) + Vt(25, 7)))), x = a * (1 + v), C = d * (1 + v), S = fn(Vt(x, 2) + Vt(c, 2)), w = fn(Vt(C, 2) + Vt(u, 2)), D = (S + w) / 2, _ = r(tu(c, x)), E = r(tu(u, C)), N = _ >= 0 ? _ : _ + 360, I = E >= 0 ? E : E + 360, R = eu(N - I) > 180 ? (N + I + 360) / 2 : (N + I) / 2, W = 1 - 0.17 * _o(o(R - 30)) + 0.24 * _o(o(2 * R)) + 0.32 * _o(o(3 * R + 6)) - 0.2 * _o(o(4 * R - 63));
  let Z = I - N;
  Z = eu(Z) <= 180 ? Z : I <= N ? Z + 360 : Z - 360, Z = 2 * fn(S * w) * nu(o(Z) / 2);
  const kt = h - l, it = w - S, nt = 1 + 0.015 * Vt(f - 50, 2) / fn(20 + Vt(f - 50, 2)), G = 1 + 0.045 * D, Q = 1 + 0.015 * D * W, dt = 30 * yx(-Vt((R - 275) / 25, 2)), Me = -(2 * fn(Vt(D, 7) / (Vt(D, 7) + Vt(25, 7)))) * nu(2 * o(dt)), ee = fn(
    Vt(kt / (n * nt), 2) + Vt(it / (s * G), 2) + Vt(Z / (i * Q), 2) + Me * (it / (s * G)) * (Z / (i * Q))
  );
  return vx(0, bx(100, ee));
}
function wx(e, t, n = "lab") {
  e = new $(e), t = new $(t);
  const s = e.get(n), i = t.get(n);
  let r = 0;
  for (let o in s) {
    const l = (s[o] || 0) - (i[o] || 0);
    r += l * l;
  }
  return Math.sqrt(r);
}
const kx = (...e) => {
  try {
    return new $(...e), !0;
  } catch {
    return !1;
  }
}, _x = {
  cool() {
    return yr([K.hsl(180, 1, 0.9), K.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return yr(["#000", "#f00", "#ff0", "#fff"]).mode(
      "rgb"
    );
  }
}, ba = {
  // sequential
  OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
  BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
  Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
  BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
  YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
  Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
  YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
  Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
  GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
  Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
  YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
  Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
  PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
  // diverging
  Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
  RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
  RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
  PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
  PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
  RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
  BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
  RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
  PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
  // qualitative
  Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
  Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
  Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
  Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
  Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
  Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
  Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
  Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
}, rp = Object.keys(ba), iu = new Map(rp.map((e) => [e.toLowerCase(), e])), Mx = typeof Proxy == "function" ? new Proxy(ba, {
  get(e, t) {
    const n = t.toLowerCase();
    if (iu.has(n))
      return e[iu.get(n)];
  },
  getOwnPropertyNames() {
    return Object.getOwnPropertyNames(rp);
  }
}) : ba, Cx = (...e) => {
  e = at(e, "cmyk");
  const [t, n, s, i] = e, r = e.length > 4 ? e[4] : 1;
  return i === 1 ? [0, 0, 0, r] : [
    t >= 1 ? 0 : 255 * (1 - t) * (1 - i),
    // r
    n >= 1 ? 0 : 255 * (1 - n) * (1 - i),
    // g
    s >= 1 ? 0 : 255 * (1 - s) * (1 - i),
    // b
    r
  ];
}, { max: ou } = Math, Px = (...e) => {
  let [t, n, s] = at(e, "rgb");
  t = t / 255, n = n / 255, s = s / 255;
  const i = 1 - ou(t, ou(n, s)), r = i < 1 ? 1 / (1 - i) : 0, o = (1 - t - i) * r, l = (1 - n - i) * r, a = (1 - s - i) * r;
  return [o, l, a, i];
};
$.prototype.cmyk = function() {
  return Px(this._rgb);
};
const Sx = (...e) => new $(...e, "cmyk");
Object.assign(K, { cmyk: Sx });
rt.format.cmyk = Cx;
rt.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = at(e, "cmyk"), ft(e) === "array" && e.length === 4)
      return "cmyk";
  }
});
const Ex = (...e) => {
  const t = at(e, "hsla");
  let n = Us(e) || "lsa";
  return t[0] = Se(t[0] || 0) + "deg", t[1] = Se(t[1] * 100) + "%", t[2] = Se(t[2] * 100) + "%", n === "hsla" || t.length > 3 && t[3] < 1 ? (t[3] = "/ " + (t.length > 3 ? t[3] : 1), n = "hsla") : t.length = 3, `${n.substr(0, 3)}(${t.join(" ")})`;
}, Dx = (...e) => {
  const t = at(e, "lab");
  let n = Us(e) || "lab";
  return t[0] = Se(t[0]) + "%", t[1] = Se(t[1]), t[2] = Se(t[2]), n === "laba" || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `lab(${t.join(" ")})`;
}, Ax = (...e) => {
  const t = at(e, "lch");
  let n = Us(e) || "lab";
  return t[0] = Se(t[0]) + "%", t[1] = Se(t[1]), t[2] = isNaN(t[2]) ? "none" : Se(t[2]) + "deg", n === "lcha" || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `lch(${t.join(" ")})`;
}, Nx = (...e) => {
  const t = at(e, "lab");
  return t[0] = Se(t[0] * 100) + "%", t[1] = ga(t[1]), t[2] = ga(t[2]), t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `oklab(${t.join(" ")})`;
}, lp = (...e) => {
  const [t, n, s, ...i] = at(e, "rgb"), [r, o, l] = mc(t, n, s), [a, c, h] = tp(r, o, l);
  return [a, c, h, ...i.length > 0 && i[0] < 1 ? [i[0]] : []];
}, Ox = (...e) => {
  const t = at(e, "lch");
  return t[0] = Se(t[0] * 100) + "%", t[1] = ga(t[1]), t[2] = isNaN(t[2]) ? "none" : Se(t[2]) + "deg", t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `oklch(${t.join(" ")})`;
}, { round: Rl } = Math, Rx = (...e) => {
  const t = at(e, "rgba");
  let n = Us(e) || "rgb";
  if (n.substr(0, 3) === "hsl")
    return Ex(np(t), n);
  if (n.substr(0, 3) === "lab") {
    const s = Vi();
    kn("d50");
    const i = Dx(uc(t), n);
    return kn(s), i;
  }
  if (n.substr(0, 3) === "lch") {
    const s = Vi();
    kn("d50");
    const i = Ax(pc(t), n);
    return kn(s), i;
  }
  return n.substr(0, 5) === "oklab" ? Nx(mc(t)) : n.substr(0, 5) === "oklch" ? Ox(lp(t)) : (t[0] = Rl(t[0]), t[1] = Rl(t[1]), t[2] = Rl(t[2]), (n === "rgba" || t.length > 3 && t[3] < 1) && (t[3] = "/ " + (t.length > 3 ? t[3] : 1), n = "rgba"), `${n.substr(0, 3)}(${t.slice(0, n === "rgb" ? 3 : 4).join(" ")})`);
}, ap = (...e) => {
  e = at(e, "lch");
  const [t, n, s, ...i] = e, [r, o, l] = Q1(t, n, s), [a, c, h] = gc(r, o, l);
  return [a, c, h, ...i.length > 0 && i[0] < 1 ? [i[0]] : []];
}, Mn = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source, Fe = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source, xr = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source, De = /\s*/.source, Xs = /\s+/.source, bc = /\s*,\s*/.source, Xr = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source, Ks = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source, cp = new RegExp(
  "^rgba?\\(" + De + [Mn, Mn, Mn].join(Xs) + Ks + "\\)$"
), hp = new RegExp(
  "^rgb\\(" + De + [Mn, Mn, Mn].join(bc) + De + "\\)$"
), dp = new RegExp(
  "^rgba\\(" + De + [Mn, Mn, Mn, Fe].join(bc) + De + "\\)$"
), up = new RegExp(
  "^hsla?\\(" + De + [Xr, xr, xr].join(Xs) + Ks + "\\)$"
), fp = new RegExp(
  "^hsl?\\(" + De + [Xr, xr, xr].join(bc) + De + "\\)$"
), pp = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, gp = new RegExp(
  "^lab\\(" + De + [Fe, Fe, Fe].join(Xs) + Ks + "\\)$"
), mp = new RegExp(
  "^lch\\(" + De + [Fe, Fe, Xr].join(Xs) + Ks + "\\)$"
), bp = new RegExp(
  "^oklab\\(" + De + [Fe, Fe, Fe].join(Xs) + Ks + "\\)$"
), vp = new RegExp(
  "^oklch\\(" + De + [Fe, Fe, Xr].join(Xs) + Ks + "\\)$"
), { round: yp } = Math, Es = (e) => e.map((t, n) => n <= 2 ? ds(yp(t), 0, 255) : t), Bt = (e, t = 0, n = 100, s = !1) => (typeof e == "string" && e.endsWith("%") && (e = parseFloat(e.substring(0, e.length - 1)) / 100, s ? e = t + (e + 1) * 0.5 * (n - t) : e = t + e * (n - t)), +e), se = (e, t) => e === "none" ? t : e, vc = (e) => {
  if (e = e.toLowerCase().trim(), e === "transparent")
    return [0, 0, 0, 0];
  let t;
  if (rt.format.named)
    try {
      return rt.format.named(e);
    } catch {
    }
  if ((t = e.match(cp)) || (t = e.match(hp))) {
    let n = t.slice(1, 4);
    for (let i = 0; i < 3; i++)
      n[i] = +Bt(se(n[i], 0), 0, 255);
    n = Es(n);
    const s = t[4] !== void 0 ? +Bt(t[4], 0, 1) : 1;
    return n[3] = s, n;
  }
  if (t = e.match(dp)) {
    const n = t.slice(1, 5);
    for (let s = 0; s < 4; s++)
      n[s] = +Bt(n[s], 0, 255);
    return n;
  }
  if ((t = e.match(up)) || (t = e.match(fp))) {
    const n = t.slice(1, 4);
    n[0] = +se(n[0].replace("deg", ""), 0), n[1] = +Bt(se(n[1], 0), 0, 100) * 0.01, n[2] = +Bt(se(n[2], 0), 0, 100) * 0.01;
    const s = Es(ma(n)), i = t[4] !== void 0 ? +Bt(t[4], 0, 1) : 1;
    return s[3] = i, s;
  }
  if (t = e.match(pp)) {
    const n = t.slice(1, 4);
    n[1] *= 0.01, n[2] *= 0.01;
    const s = ma(n);
    for (let i = 0; i < 3; i++)
      s[i] = yp(s[i]);
    return s[3] = +t[4], s;
  }
  if (t = e.match(gp)) {
    const n = t.slice(1, 4);
    n[0] = Bt(se(n[0], 0), 0, 100), n[1] = Bt(se(n[1], 0), -125, 125, !0), n[2] = Bt(se(n[2], 0), -125, 125, !0);
    const s = Vi();
    kn("d50");
    const i = Es(dc(n));
    kn(s);
    const r = t[4] !== void 0 ? +Bt(t[4], 0, 1) : 1;
    return i[3] = r, i;
  }
  if (t = e.match(mp)) {
    const n = t.slice(1, 4);
    n[0] = Bt(n[0], 0, 100), n[1] = Bt(se(n[1], 0), 0, 150, !1), n[2] = +se(n[2].replace("deg", ""), 0);
    const s = Vi();
    kn("d50");
    const i = Es(fc(n));
    kn(s);
    const r = t[4] !== void 0 ? +Bt(t[4], 0, 1) : 1;
    return i[3] = r, i;
  }
  if (t = e.match(bp)) {
    const n = t.slice(1, 4);
    n[0] = Bt(se(n[0], 0), 0, 1), n[1] = Bt(se(n[1], 0), -0.4, 0.4, !0), n[2] = Bt(se(n[2], 0), -0.4, 0.4, !0);
    const s = Es(gc(n)), i = t[4] !== void 0 ? +Bt(t[4], 0, 1) : 1;
    return s[3] = i, s;
  }
  if (t = e.match(vp)) {
    const n = t.slice(1, 4);
    n[0] = Bt(se(n[0], 0), 0, 1), n[1] = Bt(se(n[1], 0), 0, 0.4, !1), n[2] = +se(n[2].replace("deg", ""), 0);
    const s = Es(ap(n)), i = t[4] !== void 0 ? +Bt(t[4], 0, 1) : 1;
    return s[3] = i, s;
  }
};
vc.test = (e) => (
  // modern
  cp.test(e) || up.test(e) || gp.test(e) || mp.test(e) || bp.test(e) || vp.test(e) || // legacy
  hp.test(e) || dp.test(e) || fp.test(e) || pp.test(e) || e === "transparent"
);
$.prototype.css = function(e) {
  return Rx(this._rgb, e);
};
const Tx = (...e) => new $(...e, "css");
K.css = Tx;
rt.format.css = vc;
rt.autodetect.push({
  p: 5,
  test: (e, ...t) => {
    if (!t.length && ft(e) === "string" && vc.test(e))
      return "css";
  }
});
rt.format.gl = (...e) => {
  const t = at(e, "rgba");
  return t[0] *= 255, t[1] *= 255, t[2] *= 255, t;
};
const Lx = (...e) => new $(...e, "gl");
K.gl = Lx;
$.prototype.gl = function() {
  const e = this._rgb;
  return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
};
$.prototype.hex = function(e) {
  return K1(this._rgb, e);
};
const Fx = (...e) => new $(...e, "hex");
K.hex = Fx;
rt.format.hex = X1;
rt.autodetect.push({
  p: 4,
  test: (e, ...t) => {
    if (!t.length && ft(e) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0)
      return "hex";
  }
});
const { log: Mo } = Math, xp = (e) => {
  const t = e / 100;
  let n, s, i;
  return t < 66 ? (n = 255, s = t < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (s = t - 2) + 104.49216199393888 * Mo(s), i = t < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (i = t - 10) + 115.67994401066147 * Mo(i)) : (n = 351.97690566805693 + 0.114206453784165 * (n = t - 55) - 40.25366309332127 * Mo(n), s = 325.4494125711974 + 0.07943456536662342 * (s = t - 50) - 28.0852963507957 * Mo(s), i = 255), [n, s, i, 1];
}, { round: Ix } = Math, Vx = (...e) => {
  const t = at(e, "rgb"), n = t[0], s = t[2];
  let i = 1e3, r = 4e4;
  const o = 0.4;
  let l;
  for (; r - i > o; ) {
    l = (r + i) * 0.5;
    const a = xp(l);
    a[2] / a[0] >= s / n ? r = l : i = l;
  }
  return Ix(l);
};
$.prototype.temp = $.prototype.kelvin = $.prototype.temperature = function() {
  return Vx(this._rgb);
};
const Tl = (...e) => new $(...e, "temp");
Object.assign(K, { temp: Tl, kelvin: Tl, temperature: Tl });
rt.format.temp = rt.format.kelvin = rt.format.temperature = xp;
$.prototype.oklch = function() {
  return lp(this._rgb);
};
const Bx = (...e) => new $(...e, "oklch");
Object.assign(K, { oklch: Bx });
rt.format.oklch = ap;
rt.autodetect.push({
  p: 2,
  test: (...e) => {
    if (e = at(e, "oklch"), ft(e) === "array" && e.length === 3)
      return "oklch";
  }
});
Object.assign(K, {
  analyze: ip,
  average: $6,
  bezier: Y6,
  blend: He,
  brewer: Mx,
  Color: $,
  colors: zs,
  contrast: fx,
  contrastAPCA: mx,
  cubehelix: ox,
  deltaE: xx,
  distance: wx,
  input: rt,
  interpolate: js,
  limits: op,
  mix: js,
  random: cx,
  scale: yr,
  scales: _x,
  valid: kx
});
const $x = { "dsfr-chart-colors-01": "#5C68E5", "dsfr-chart-colors-02": "#82B5F2", "dsfr-chart-colors-03": "#29598F", "dsfr-chart-colors-04": "#31A7AE", "dsfr-chart-colors-05": "#81EEF5", "dsfr-chart-colors-06": "#B478F1", "dsfr-chart-colors-07": "#CFB1F5", "dsfr-chart-colors-08": "#CECECE", "dsfr-chart-colors-09": "#DBDAFF", "dsfr-chart-colors-10": "#00005F", "dsfr-chart-colors-11": "#298641", "dsfr-chart-colors-12": "#79D289", "dsfr-chart-colors-13": "#EFB900", "dsfr-chart-colors-14": "#FFA373", "dsfr-chart-colors-15": "#E91719", "dsfr-chart-colors-default": "#5C68E5", "dsfr-chart-colors-neutral": "#B1B1B1" }, Hx = { "dsfr-chart-colors-01": "#5C68E5", "dsfr-chart-colors-02": "#699BD6", "dsfr-chart-colors-03": "#4878B1", "dsfr-chart-colors-04": "#00828A", "dsfr-chart-colors-05": "#51C1C8", "dsfr-chart-colors-06": "#BC8AF2", "dsfr-chart-colors-07": "#CFB1F5", "dsfr-chart-colors-08": "#A4A4A4", "dsfr-chart-colors-09": "#B8B9FF", "dsfr-chart-colors-10": "#3647CA", "dsfr-chart-colors-11": "#298641", "dsfr-chart-colors-12": "#449D57", "dsfr-chart-colors-13": "#AF8800", "dsfr-chart-colors-14": "#FFA373", "dsfr-chart-colors-15": "#E16834", "dsfr-chart-colors-default": "#5C68E5", "dsfr-chart-colors-neutral": "#808080" }, ru = {
  light: $x,
  dark: Hx
};
function yc({
  yparse: e = [],
  tmpColorParse: t = [],
  highlightIndex: n = [],
  selectedPalette: s = "",
  reverseOrder: i = !1,
  colors: r
}) {
  const o = [], l = [], a = Kt(s, r), c = i ? [...e].reverse() : e;
  for (let d = 0; d < c.length; d++) {
    const u = c[d];
    let f = [], m = [];
    if (t[d]) {
      const p = t[d], b = u && u.length ? u.length : 1;
      f = Array(b).fill(p), m = f.map((v) => K(v).darken(0.8).hex());
    } else if (s === "neutral" && n.length > 0 && Array.isArray(u)) {
      const p = u && u.length ? u.length : 1;
      for (let b = 0; b < p; b++) {
        const v = n.includes(b) ? a[b % a.length] || wp() : Ie();
        f.push(v), m.push(K(v).darken(0.8).hex());
      }
    } else if (s.startsWith("divergent")) {
      const p = u && u.length ? u.length : 1;
      f = Array(p).fill(a[d % a.length]), m = f.map((b) => K(b).darken(0.8).hex());
    } else if (s === "categorical" || !s) {
      const p = xc(d, a), b = u && u.length ? u.length : 1;
      f = Array(b).fill(p), m = f.map((v) => K(v).darken(0.8).hex());
    } else {
      const p = e.flat(), b = Math.min(...p), v = Math.max(...p), x = K.scale(a).domain([v, b]);
      f = (u || [b]).map((S) => K(x(S)).hex()), m = f.map((S) => K(S).darken(0.8).hex());
    }
    o.push(f), l.push(m);
  }
  const h = i ? o.map((d) => d[0]).reverse() : o.map((d) => d[0]);
  return {
    colorParse: o,
    colorHover: l,
    legendColors: h
  };
}
function zx({
  vlineParse: e = [],
  hlineParse: t = [],
  tmpVlineColorParse: n = [],
  tmpHlineColorParse: s = [],
  selectedPalette: i = "",
  barsColors: r,
  linesColors: o
}) {
  const l = Kt(i, r), a = Kt(i, o), c = [...l], h = c.map((p) => K(p).darken(0.8).hex()), d = [...a], u = d.map((p) => K(p).darken(0.8).hex()), f = e.map((p, b) => n[b] || Ie()), m = t.map((p, b) => s[b] || Ie());
  return {
    colorBarParse: c,
    colorBarHover: h,
    colorParse: d,
    colorHover: u,
    vlineColorParse: f,
    hlineColorParse: m
  };
}
function jx({
  vlineParse: e = [],
  hlineParse: t = [],
  tmpVlineColorParse: n = [],
  tmpHlineColorParse: s = [],
  selectedPalette: i = "",
  areasColors: r,
  linesColors: o
}) {
  const l = Kt(i, r), a = Kt(i, o), c = [...l].map((b) => K(b).alpha(0.4).css()), h = [...l], d = c.map((b) => K(b).darken(0.8).hex()), u = [...a], f = u.map((b) => K(b).darken(0.8).hex()), m = e.map((b, v) => n[v] || Ie()), p = t.map((b, v) => s[v] || Ie());
  return {
    colorAreaParse: c,
    colorAreaLineParse: h,
    colorAreaHover: d,
    colorParse: u,
    colorHover: f,
    vlineColorParse: m,
    hlineColorParse: p
  };
}
function Wx({
  yparse: e = [],
  tmpColorParse: t = [],
  selectedPalette: n = "",
  highlightIndex: s = -1,
  vlineParse: i = [],
  tmpVlineColorParse: r = [],
  hlineParse: o = [],
  tmpHlineColorParse: l = [],
  colors: a
}) {
  const c = Kt(n, a), h = [], d = [];
  for (let m = 0; m < e.length; m++) {
    let p;
    t[m] ? p = t[m] : m === s ? p = Ie() : p = xc(m, c), h.push(p), d.push(K(p).darken(0.8).hex());
  }
  const u = i.map((m, p) => r[p] || Ie()), f = o.map((m, p) => l[p] || Ie());
  return {
    colorParse: h,
    colorHover: d,
    vlineColorParse: u,
    hlineColorParse: f
  };
}
function qx({
  selectedPalette: e = "",
  colors: t
}) {
  const s = Kt(e, t).flat(), i = s.map((r) => K(r).darken(0.8).hex());
  return {
    colorParse: s,
    colorHover: i
  };
}
function vs() {
  const e = document.documentElement.getAttribute("data-fr-theme") || "light";
  return ru[e] || ru.light;
}
function va() {
  const e = vs();
  return [
    e["dsfr-chart-colors-01"],
    e["dsfr-chart-colors-02"],
    e["dsfr-chart-colors-03"],
    e["dsfr-chart-colors-04"],
    e["dsfr-chart-colors-05"],
    e["dsfr-chart-colors-06"],
    e["dsfr-chart-colors-07"],
    e["dsfr-chart-colors-08"]
  ];
}
function Yx() {
  const e = vs();
  return K.scale([
    e["dsfr-chart-colors-09"],
    e["dsfr-chart-colors-10"]
  ]).colors(10);
}
function Ux() {
  const e = vs();
  return K.scale([
    e["dsfr-chart-colors-10"],
    e["dsfr-chart-colors-09"]
  ]).colors(10);
}
function Gx() {
  const e = vs();
  return K.scale([
    e["dsfr-chart-colors-11"],
    e["dsfr-chart-colors-13"],
    e["dsfr-chart-colors-15"]
  ]).colors(4);
}
function Xx() {
  const e = vs();
  return K.scale([
    e["dsfr-chart-colors-15"],
    e["dsfr-chart-colors-13"],
    e["dsfr-chart-colors-11"]
  ]).colors(4);
}
function xc(e, t = va()) {
  return t[e % t.length];
}
function wp() {
  return vs()["dsfr-chart-colors-default"];
}
function Ie() {
  return vs()["dsfr-chart-colors-neutral"];
}
function Kt(e, t) {
  if (typeof t == "string")
    try {
      t = JSON.parse(t);
    } catch (n) {
      console.error("Invalid JSON string:", n);
    }
  if (Array.isArray(t) && t.length > 0)
    return t;
  switch (e) {
    case "default":
      return [wp()];
    case "neutral":
      return [Ie()];
    case "categorical":
      return va();
    case "sequentialAscending":
      return Yx();
    case "sequentialDescending":
      return Ux();
    case "divergentAscending":
      return Gx();
    case "divergentDescending":
      return Xx();
    default:
      return va();
  }
}
lt.register(Is, tn, H1, Si, gr, pr);
const Kx = {
  name: "AreaLineChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    x: {
      type: Array,
      required: !0
    },
    yAreas: {
      type: Array,
      required: !0
    },
    yLines: {
      type: Array,
      required: !0
    },
    xMin: {
      type: [Number, String],
      default: ""
    },
    xMax: {
      type: [Number, String],
      default: ""
    },
    yAreaMin: {
      type: [Number, String],
      default: ""
    },
    yAreaMax: {
      type: [Number, String],
      default: ""
    },
    yLineMin: {
      type: [Number, String],
      default: ""
    },
    yLineMax: {
      type: [Number, String],
      default: ""
    },
    nameAreas: {
      type: Array,
      default: () => []
    },
    nameLines: {
      type: Array,
      default: () => []
    },
    aspectRatio: {
      type: [Number, String],
      default: 2
    },
    selectedPalette: {
      type: String,
      default: "categorical"
    },
    areasColors: {
      type: Array,
      default: void 0
    },
    linesColors: {
      type: Array,
      default: void 0
    },
    unitTooltipArea: {
      type: String,
      default: ""
    },
    unitTooltipLine: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  },
  data() {
    return this.chart = void 0, {
      widgetId: "",
      chartId: "",
      display: "",
      areasDatasets: [],
      linesDatasets: [],
      labels: [],
      xparse: [],
      yAreaParse: [],
      yLineParse: [],
      nameAreasParse: [],
      nameLinesParse: [],
      colorParse: [],
      colorAreaParse: [],
      colorAreaLineParse: [],
      colorHover: [],
      colorAreaHover: []
    };
  },
  created() {
    $n(), this.chartId = "dsfr-chart-" + Math.floor(Math.random() * 1e3), this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.resetData(), this.createChart();
  },
  methods: {
    resetData() {
      this.chart && this.chart.destroy(), this.areasDatasets = [], this.linesDatasets = [], this.labels = [], this.xparse = [], this.yAreaParse = [], this.yLineParse = [], this.colorParse = [], this.colorAreaParse = [], this.colorAreaLineParse = [], this.colorHover = [], this.colorAreaHover = [];
    },
    getData() {
      try {
        if ((typeof this.x == "string" || typeof this.yAreas == "string" || typeof this.yLines == "string") && console.error("Cette fonctionnalité n'est plus supportée. Veuillez passer les props 'x', 'yAreas' et 'yLines' comme une liste de nombres."), this.xparse = typeof this.x == "string" ? JSON.parse(this.x) : this.x, this.yAreaParse = typeof this.yAreas == "string" ? JSON.parse(this.yAreas) : this.yAreas, this.yLineParse = typeof this.yLines == "string" ? JSON.parse(this.yLines) : this.yLines, !Array.isArray(this.xparse) || !Array.isArray(this.xparse[0]))
          throw new Error("La prop 'x' doit être une liste de listes.");
        if (!Array.isArray(this.yAreaParse) || !Array.isArray(this.yAreaParse[0]))
          throw new Error("La prop 'yAreas' doit être une liste de listes.");
        if (!Array.isArray(this.yLineParse) || !Array.isArray(this.yLineParse[0]))
          throw new Error("La prop 'yLines' doit être une liste de listes.");
        this.nameAreasParse = typeof this.nameAreas == "string" ? JSON.parse(this.nameAreas) : this.nameAreas, this.nameLinesParse = typeof this.nameLines == "string" ? JSON.parse(this.nameLines) : this.nameLines;
      } catch (r) {
        console.error("Erreur parsing:", r);
        return;
      }
      this.labels = this.xparse[0];
      const { colorAreaParse: e, colorAreaLineParse: t, colorAreaHover: n, colorParse: s, colorHover: i } = jx({
        yLinesLength: this.yLineParse.length,
        yBarsLength: this.yAreaParse.length,
        selectedPalette: this.selectedPalette,
        areasColors: this.areasColors,
        linesColors: this.linesColors
      });
      this.colorAreaLineParse = t, this.colorAreaParse = e, this.colorAreaHover = n, this.colorParse = s, this.colorHover = i, this.areasDatasets = this.yAreaParse.map((r, o) => ({
        data: r,
        type: "line",
        fill: !0,
        backgroundColor: this.colorAreaParse[o],
        borderColor: this.colorAreaLineParse[o],
        tension: 0.4,
        pointRadius: 0,
        order: 2
      })), this.linesDatasets = this.yLineParse.map((r, o) => ({
        data: r,
        type: "line",
        fill: !1,
        borderColor: this.colorParse[o],
        pointBorderColor: this.colorParse[o],
        pointBackgroundColor: this.colorParse[o],
        tension: 0.4,
        yAxisID: "yLine",
        order: 1
      }));
    },
    createChart() {
      this.getData();
      const e = this.$refs[this.chartId].getContext("2d");
      this.chart = new lt(e, {
        data: {
          labels: this.labels,
          datasets: [...this.areasDatasets, ...this.linesDatasets]
        },
        plugins: [
          {
            afterDraw: (t) => {
              var n, s, i, r;
              if ((n = t.tooltip) != null && n._active && ((s = t.tooltip) != null && s._active.length)) {
                const { ctx: o } = t, l = t.tooltip.getActiveElements()[0].element.tooltipPosition().x, a = t.tooltip._active[0].index, c = t.scales.y.getPixelForValue((i = this.areasDatasets[0]) == null ? void 0 : i.data[a]), h = t.scales.y.getPixelForValue((r = this.yLineParse[0]) == null ? void 0 : r[a]);
                o.save(), o.beginPath(), o.moveTo(l, t.scales.y.top), o.lineTo(l, t.scales.y.bottom), o.lineWidth = 1, o.strokeStyle = this.colorPrecisionBar, o.setLineDash([10, 5]), o.stroke(), o.restore(), o.save(), o.beginPath(), o.moveTo(t.scales.x.left, c), o.lineTo(l, c), o.lineWidth = 1, o.strokeStyle = this.colorPrecisionBar, o.setLineDash([10, 5]), o.stroke(), o.restore(), o.save(), o.beginPath(), o.moveTo(t.scales.x.left, h), o.lineTo(l, h), o.lineWidth = 1, o.strokeStyle = this.colorPrecisionBar, o.setLineDash([10, 5]), o.stroke(), o.restore();
              }
            }
          }
        ],
        options: {
          layout: {
            padding: 0
            // supprime toutes les marges
          },
          aspectRatio: this.aspectRatio,
          scales: {
            x: {
              grid: {
                drawTicks: !1,
                drawOnChartArea: !1
              },
              ...this.xMin ? { suggestedMin: this.xMin } : {},
              ...this.xMax ? { suggestedMax: this.xMax } : {}
            },
            y: {
              type: "linear",
              position: "left",
              offset: !1,
              grid: {
                drawTicks: !1
              },
              border: {
                dash: [3]
              },
              ticks: {
                padding: 10,
                maxTicksLimit: 5,
                callback: (t) => t >= 1e9 || t <= -1e9 ? t / 1e9 + "B" : t >= 1e6 || t <= -1e6 ? t / 1e6 + "M" : t >= 1e3 || t <= -1e3 ? t / 1e3 + "K" : t
              },
              ...this.yAreaMin ? { suggestedMin: this.yAreaMin } : {},
              ...this.yAreaMax ? { suggestedMax: this.yAreaMax } : {}
            },
            yLine: {
              type: "linear",
              position: "right",
              id: "yLine",
              beginAtZero: !0,
              grid: {
                drawTicks: !1
              },
              border: {
                dash: [3]
              },
              ticks: {
                padding: 10,
                maxTicksLimit: 5,
                callback: (t) => t >= 1e9 || t <= -1e9 ? t / 1e9 + "B" : t >= 1e6 || t <= -1e6 ? t / 1e6 + "M" : t >= 1e3 || t <= -1e3 ? t / 1e3 + "K" : t
              },
              ...this.yLineMin ? { suggestedMin: this.yLineMin } : {},
              ...this.yLineMax ? { suggestedMax: this.yLineMax } : {}
            }
          },
          plugins: {
            legend: {
              display: !1
            },
            tooltip: {
              enabled: !1,
              displayColors: !1,
              backgroundColor: "#6b6b6b",
              callbacks: {
                label: (t) => {
                  const n = [];
                  return [...this.areasDatasets, ...this.linesDatasets].forEach((s) => {
                    n.push(this.formatNumber(s.data[t.dataIndex]));
                  }), n;
                },
                title: (t) => t[0].label
              },
              external: (t) => {
                const s = (document.getElementById(this.databoxId + "-" + this.databoxType + "-" + this.databoxSource) || this.$el.nextElementSibling).querySelector(".tooltip"), i = t.tooltip;
                if (!s) return;
                if (!i || i.opacity === 0) {
                  s.style.opacity = 0;
                  return;
                }
                if (s.classList.remove("above", "below", "no-transform"), i.yAlign ? s.classList.add(i.yAlign) : s.classList.add("no-transform"), i.body) {
                  const d = i.title || [], u = i.body.map((b) => b.lines), f = s.querySelector(".tooltip_header.fr-text--sm.fr-mb-0");
                  f.innerHTML = d[0];
                  const m = s.querySelector(".tooltip_value");
                  m.innerHTML = "";
                  const p = [...this.colorAreaParse, ...this.colorParse];
                  u[0].forEach((b, v) => {
                    if (b) {
                      const x = p[Math.min(v, p.length - 1)], C = v === 0 ? `${b}${this.unitTooltipArea ? " " + this.unitTooltipArea : ""}` : `${b}${this.unitTooltipLine ? " " + this.unitTooltipLine : ""}`;
                      m.innerHTML += `
                        <div class="tooltip_value-content">
                          <span class="tooltip_dot" style="background-color:${x};"></span>
                          <p class="tooltip_place fr-mb-0">${C}</p>
                        </div>
                      `;
                    }
                  });
                }
                const { offsetLeft: r, offsetTop: o } = this.chart.canvas, l = Number(this.chart.canvas.style.width.replace(/\D/g, "")), a = Number(this.chart.canvas.style.height.replace(/\D/g, ""));
                let c = r + i.caretX + 10, h = o + i.caretY - 20;
                c + s.clientWidth > r + l && (c = r + i.caretX - s.clientWidth - 10), h + s.clientHeight > o + 0.9 * a && (h = o + i.caretY - s.clientHeight + 20), c < r && (c = r + i.caretX - s.clientWidth / 2, h = o + i.caretY - s.clientHeight - 20), s.style.position = "absolute", s.style.padding = i.padding + "px " + i.padding + "px", s.style.pointerEvents = "none", s.style.left = c + "px", s.style.top = h + "px", s.style.opacity = 1;
              }
            }
          }
        }
      });
    },
    changeColors(e) {
      this.loadColors(), this.areasDatasets.forEach((t, n) => {
        t.borderColor = this.colorAreaLineParse[n] || this.colorAreaLineParse[0], t.backgroundColor = this.colorAreaParse[n] || this.colorAreaParse[0], t.pointBorderColor = this.colorAreaParse[n] || this.colorAreaParse[0], t.pointBackgroundColor = this.colorAreaParse[n] || this.colorAreaParse[0], t.pointHoverBorderColor = this.colorAreaHover[n] || this.colorAreaHover[0], t.pointHoverBackgroundColor = this.colorAreaHover[n] || this.colorAreaHover[0];
      }), this.linesDatasets.forEach((t, n) => {
        t.borderColor = this.colorParse[n] || this.colorParse[0], t.pointBorderColor = this.colorParse[n] || this.colorParse[0], t.pointBackgroundColor = this.colorParse[n] || this.colorParse[0], t.pointHoverBorderColor = this.colorHover[n] || this.colorHover[0], t.pointHoverBackgroundColor = this.colorHover[n] || this.colorHover[0];
      }), this.chart.options.scales.x.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.options.scales.y.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.options.scales.yLine.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.update("none");
    }
  }
}, Jx = { class: "fr-col-12" }, Zx = { class: "chart" }, Qx = { class: "tooltip" }, tw = { class: "tooltip_body" }, ew = { class: "tooltip_value" }, nw = { class: "tooltip_value-content" }, sw = { class: "tooltip_place" }, iw = { class: "tooltip_value-content" }, ow = { class: "tooltip_place" }, rw = { class: "chart_legend fr-mb-0 fr-mt-4v" }, lw = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, aw = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, cw = {
  key: 0,
  class: "flex fr-mt-1w"
}, hw = { class: "fr-text--xs" };
function dw(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      g("div", Jx, [
        g("div", Zx, [
          g("div", Qx, [
            t[0] || (t[0] = g("div", { class: "tooltip_header fr-text--sm fr-mb-0" }, null, -1)),
            g("div", tw, [
              g("div", ew, [
                (O(!0), F(ht, null, wt(i.colorAreaParse, (l, a) => (O(), F("div", {
                  key: a,
                  class: "flex fr-mt-3v fr-mb-1v",
                  style: { "border-bottom": "1px solid #e0e0e0" }
                }, [
                  g("div", nw, [
                    g("span", {
                      class: "tooltip_dot",
                      style: P({ "background-color": i.colorAreaParse[Math.min(a, i.colorAreaParse.length - 1)] })
                    }, null, 4),
                    g("p", sw, X(e.capitalize(i.nameAreasParse[a] || "Area " + (a + 1))), 1)
                  ])
                ]))), 128)),
                (O(!0), F(ht, null, wt(i.colorParse, (l, a) => (O(), F("div", {
                  key: a,
                  class: "flex fr-mt-3v fr-mb-1v",
                  style: { "border-bottom": "1px solid #e0e0e0" }
                }, [
                  g("div", iw, [
                    g("span", {
                      class: "tooltip_dot",
                      style: P({ "background-color": i.colorParse[Math.min(a, i.colorParse.length - 1)] })
                    }, null, 4),
                    g("p", ow, X(e.capitalize(i.nameLinesParse[a] || "Line " + (a + 1))), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          g("canvas", { ref: i.chartId }, null, 512),
          g("div", rw, [
            (O(!0), F(ht, null, wt(i.nameAreasParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.colorAreaParse[Math.min(a, i.colorAreaParse.length - 1)] })
              }, null, 4),
              g("p", lw, X(e.capitalize(l || "Area " + (a + 1))), 1)
            ]))), 128)),
            (O(!0), F(ht, null, wt(i.nameLinesParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.colorParse[Math.min(a, i.colorParse.length - 1)] })
              }, null, 4),
              g("p", aw, X(e.capitalize(l || "Line " + (a + 1))), 1)
            ]))), 128))
          ]),
          n.date ? (O(), F("div", cw, [
            g("p", hw, " Mise à jour : " + X(n.date), 1)
          ])) : Mt("", !0)
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const uw = /* @__PURE__ */ It(Kx, [["render", dw]]);
lt.register(Io, zo);
const fw = {
  name: "BarChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    x: {
      type: Array,
      required: !0
    },
    y: {
      type: Array,
      required: !0
    },
    xMin: {
      type: [Number, String],
      default: ""
    },
    xMax: {
      type: [Number, String],
      default: ""
    },
    yMin: {
      type: [Number, String],
      default: ""
    },
    yMax: {
      type: [Number, String],
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    stacked: {
      type: [Boolean, String],
      default: !1
    },
    horizontal: {
      type: [Boolean, String],
      default: !1
    },
    barSize: {
      type: [Number, String],
      default: "flex"
    },
    maxBarSize: {
      type: [Number, String],
      default: 32
    },
    date: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: [Number, String],
      default: 2
    },
    selectedPalette: {
      type: String,
      default: ""
    },
    colors: {
      type: Array,
      default: void 0
    },
    highlightIndex: {
      type: Array,
      default: () => [3, 4]
    },
    unitTooltip: {
      type: String,
      default: ""
    }
  },
  data() {
    return this.chart = void 0, {
      widgetId: "",
      chartId: "",
      datasets: [],
      labels: [],
      xparse: [],
      yparse: [],
      nameParse: [],
      tmpColorParse: [],
      colorParse: [],
      colorHover: [],
      legendColors: []
    };
  },
  watch: {
    $props: {
      handler() {
        this.chartId && (this.resetData(), this.getData(), this.createChart());
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    $n(), this.chartId = "dsfr-chart-" + Math.floor(Math.random() * 1e3), this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.resetData(), this.createChart(), this.display = this.$refs[this.widgetId].offsetWidth > 486 ? "big" : "small", document.documentElement.addEventListener("dsfr.theme", (t) => {
      this.chartId !== "" && this.changeColors(t.detail.theme);
    });
  },
  methods: {
    resetData() {
      this.chart && this.chart.destroy(), this.datasets = [], this.labels = [], this.xparse = [], this.yparse = [], this.nameParse = [], this.tmpColorParse = [], this.colorParse = [], this.colorHover = [];
    },
    getData() {
      try {
        if ((typeof this.x == "string" || typeof this.y == "string") && console.error("Cette fonctionnalité n'est plus supportée. Veuillez passer les props 'x' et 'y' comme une liste de nombres."), this.xparse = typeof this.x == "string" ? JSON.parse(this.x) : this.x, this.yparse = typeof this.y == "string" ? JSON.parse(this.y) : this.y, !Array.isArray(this.xparse) || !Array.isArray(this.xparse[0]))
          throw new Error("La prop 'x' doit être une liste de listes.");
        if (!Array.isArray(this.yparse) || !Array.isArray(this.yparse[0]))
          throw new Error("La prop 'y' doit être une liste de listes.");
      } catch (t) {
        console.error("Erreur lors du parsing des données x ou y:", t);
        return;
      }
      let e = [];
      if (this.name)
        try {
          typeof this.name == "string" && console.error("Cette fonctionnalité n'est plus supportée. Veuillez passer les props 'name' comme une liste de nombres."), e = typeof this.name == "string" ? JSON.parse(this.name) : this.name;
        } catch (t) {
          console.error("Erreur lors du parsing de name:", t);
        }
      for (let t = 0; t < this.yparse.length; t++)
        e[t] ? this.nameParse.push(e[t]) : this.nameParse.push("Série " + (t + 1));
      this.labels = this.xparse[0], this.loadColors(), this.datasets = this.yparse.map((t, n) => ({
        label: this.nameParse[n],
        data: t,
        backgroundColor: this.colorParse[n % this.colorParse.length],
        borderColor: this.colorParse[n % this.colorParse.length],
        hoverBackgroundColor: this.colorHover[n % this.colorHover.length],
        hoverBorderColor: this.colorHover[n % this.colorHover.length],
        barThickness: this.barSize,
        ...this.maxBarSize ? { maxBarThickness: this.maxBarSize } : {}
      }));
    },
    choosePalette() {
      return Kt(this.selectedPalette, this.colors);
    },
    loadColors() {
      const { colorParse: e, colorHover: t, legendColors: n } = yc({
        yparse: this.yparse,
        tmpColorParse: this.tmpColorParse,
        highlightIndex: this.highlightIndex,
        selectedPalette: this.selectedPalette,
        reverseOrder: this.selectedPalette === "divergentDescending",
        colors: this.colors
      });
      this.colorParse = e, this.colorHover = t, this.legendColors = n;
    },
    createChart() {
      this.chart && this.chart.destroy(), this.getData();
      const e = this.$refs[this.chartId].getContext("2d");
      this.chart = new lt(e, {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options: {
          indexAxis: this.horizontal ? "y" : "x",
          aspectRatio: this.aspectRatio,
          scales: {
            x: {
              offset: !this.horizontal,
              stacked: this.stacked,
              grid: {
                drawTicks: !1,
                drawOnChartArea: this.horizontal
              },
              ticks: {
                beginAtZero: !0,
                padding: this.horizontal ? 5 : 15
              },
              ...this.xMin ? { suggestedMin: this.xMin } : {},
              ...this.xMax ? { suggestedMax: this.xMax } : {}
            },
            y: {
              stacked: this.stacked,
              offset: this.horizontal,
              grid: {
                drawTicks: !1,
                drawOnChartArea: !this.horizontal
              },
              border: {
                dash: [3]
              },
              ticks: {
                beginAtZero: !0,
                padding: 5
              },
              ...this.yMin ? { suggestedMin: this.yMin } : {},
              ...this.yMax ? { suggestedMax: this.yMax } : {}
            }
          },
          plugins: {
            legend: {
              display: !1
            },
            tooltip: {
              enabled: !1,
              mode: "index",
              displayColors: !1,
              backgroundColor: "#6b6b6b",
              callbacks: {
                label: (t) => {
                  const n = this.datasets[t.datasetIndex].data[t.dataIndex];
                  return this.formatNumber(n);
                },
                title: (t) => t[0].label,
                labelTextColor: (t) => this.colorParse[t.datasetIndex][t.dataIndex]
              },
              external: (t) => {
                const s = (document.getElementById(this.databoxId + "-" + this.databoxType + "-" + this.databoxSource) || this.$el.nextElementSibling).querySelector(".tooltip"), i = t.tooltip;
                if (!s) return;
                if (!i || i.opacity === 0) {
                  s.style.opacity = 0;
                  return;
                }
                if (s.classList.remove("above", "below", "no-transform"), i.yAlign ? s.classList.add(i.yAlign) : s.classList.add("no-transform"), i.body) {
                  const d = i.title || [], u = s.querySelector(".tooltip_header.fr-text--sm.fr-mb-0");
                  u.innerHTML = d[0];
                  const f = s.querySelector(".tooltip_value");
                  f.innerHTML = "", i.dataPoints.forEach((m) => {
                    const p = m.datasetIndex, b = m.dataIndex, v = this.colorParse[p] ? this.colorParse[p][b] : "#000", C = `${this.formatNumber(this.datasets[p].data[b])}${this.unitTooltip ? " " + this.unitTooltip : ""}`;
                    f.innerHTML += `
                    <div class="tooltip_value-content">
                      <span class="tooltip_dot" style="background-color:${v};"></span>
                      <p class="tooltip_place fr-mb-0">${C}</p>
                    </div>
                  `;
                  });
                }
                const { offsetLeft: r, offsetTop: o } = this.chart.canvas, l = Number(this.chart.canvas.style.width.replace(/\D/g, "")), a = Number(this.chart.canvas.style.height.replace(/\D/g, ""));
                let c = r + i.caretX + 10, h = o + i.caretY - 20;
                c + s.clientWidth > r + l && (c = r + i.caretX - s.clientWidth - 10), h + s.clientHeight > o + 0.9 * a && (h = o + i.caretY - s.clientHeight + 20), c < r && (c = r + i.caretX - s.clientWidth / 2, h = o + i.caretY - s.clientHeight - 20), s.style.position = "absolute", s.style.padding = i.padding + "px " + i.padding + "px", s.style.pointerEvents = "none", s.style.left = c + "px", s.style.top = h + "px", s.style.opacity = 1;
              }
            }
          }
        }
      });
    },
    changeColors(e) {
      this.loadColors(), this.chart.data.datasets.forEach((t, n) => {
        t.borderColor = this.colorParse[n], t.backgroundColor = this.colorParse[n], t.hoverBorderColor = this.colorHover[n], t.hoverBackgroundColor = this.colorHover[n];
      }), this.chart.options.scales.x.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.options.scales.y.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.update("none");
    }
  }
}, pw = { class: "fr-col-12" }, gw = { class: "chart" }, mw = { class: "chart_legend fr-mb-0 fr-mt-4v" }, bw = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, vw = {
  key: 0,
  class: "flex fr-mt-1w"
}, yw = { class: "fr-text--xs" };
function xw(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      g("div", pw, [
        g("div", gw, [
          t[0] || (t[0] = g("div", { class: "tooltip" }, [
            g("div", { class: "tooltip_header fr-text--sm fr-mb-0" }),
            g("div", { class: "tooltip_body" }, [
              g("div", { class: "tooltip_value" })
            ])
          ], -1)),
          g("canvas", { ref: i.chartId }, null, 512),
          g("div", mw, [
            (O(!0), F(ht, null, wt(i.nameParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.legendColors[a] })
              }, null, 4),
              g("p", bw, X(e.capitalize(l)), 1)
            ]))), 128))
          ]),
          n.date ? (O(), F("div", vw, [
            g("p", yw, " Mise à jour : " + X(n.date), 1)
          ])) : Mt("", !0)
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const ww = /* @__PURE__ */ It(fw, [["render", xw]]);
lt.register(Is, tn);
const kw = {
  name: "BarLineChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    x: {
      type: String,
      required: !0
    },
    yBars: {
      type: Array,
      required: !0
    },
    yLines: {
      type: Array,
      required: !0
    },
    xMin: {
      type: [Number, String],
      default: ""
    },
    xMax: {
      type: [Number, String],
      default: ""
    },
    yBarMin: {
      type: [Number, String],
      default: ""
    },
    yBarMax: {
      type: [Number, String],
      default: ""
    },
    yLineMin: {
      type: [Number, String],
      default: ""
    },
    yLineMax: {
      type: [Number, String],
      default: ""
    },
    stacked: {
      type: [Boolean, String],
      default: !1
    },
    nameBars: {
      type: Array,
      default: () => []
    },
    nameLines: {
      type: Array,
      default: () => []
    },
    barSize: {
      type: [Number, String],
      default: "flex"
    },
    maxBarSize: {
      type: [Number, String],
      default: 32
    },
    vline: {
      type: String,
      default: ""
    },
    vlinecolor: {
      type: String,
      default: ""
    },
    vlinename: {
      type: String,
      default: ""
    },
    hline: {
      type: String,
      default: ""
    },
    hlinecolor: {
      type: String,
      default: ""
    },
    hlinename: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: [Number, String],
      default: 2
    },
    selectedPalette: {
      type: String,
      default: "categorical"
    },
    barsColors: {
      type: Array,
      default: void 0
    },
    linesColors: {
      type: Array,
      default: void 0
    },
    hideLines: {
      type: Boolean,
      default: !1
    },
    unitTooltipBar: {
      type: String,
      default: ""
    },
    unitTooltipLine: {
      type: String,
      default: ""
    }
  },
  data() {
    return this.chart = void 0, {
      widgetId: "",
      chartId: "",
      display: "",
      barsDatasets: [],
      linesDatasets: [],
      labels: [],
      xparse: [],
      yBarParse: [],
      yLineParse: [],
      vlineParse: [],
      vlineColorParse: [],
      tmpVlineColorParse: [],
      vlineNameParse: [],
      hlineParse: [],
      hlineColorParse: [],
      tmpHlineColorParse: [],
      hlineNameParse: [],
      colorParse: [],
      colorBarParse: [],
      colorHover: [],
      colorBarHover: []
    };
  },
  watch: {
    $props: {
      handler() {
        this.chartId && (this.resetData(), this.getData(), this.createChart());
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    $n(), this.chartId = "dsfr-chart-" + Math.floor(Math.random() * 1e3), this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.resetData(), this.createChart(), this.display = this.$refs[this.widgetId].offsetWidth > 486 ? "big" : "small", document.documentElement.addEventListener("dsfr.theme", (t) => {
      this.chartId !== "" && this.changeColors(t.detail.theme);
    });
  },
  methods: {
    resetData() {
      this.chart && this.chart.destroy(), this.display = "", this.barsDatasets = [], this.linesDatasets = [], this.labels = [], this.xparse = [], this.yBarParse = [], this.yLineParse = [], this.vlineParse = [], this.nameLinesParse = [], this.nameBarsParse = [], this.vlineColorParse = [], this.tmpVlineColorParse = [], this.vlineNameParse = [], this.hlineParse = [], this.hlineColorParse = [], this.tmpHlineColorParse = [], this.hlineNameParse = [], this.colorParse = [], this.colorBarParse = [], this.colorHover = [], this.colorBarHover = [];
    },
    getData() {
      try {
        if ((typeof this.x == "string" || typeof this.yBars == "string" || typeof this.yLines == "string") && console.error("Cette fonctionnalité n'est plus supportée. Veuillez passer les props 'x', 'yBars' et 'yLines' comme une liste de nombres."), this.xparse = typeof this.x == "string" ? JSON.parse(this.x) : this.x, this.yBarParse = typeof this.yBars == "string" ? JSON.parse(this.yBars) : this.yBars, this.yLineParse = typeof this.yLines == "string" ? JSON.parse(this.yLines) : this.yLines, !Array.isArray(this.xparse) || !Array.isArray(this.xparse[0]))
          throw new Error("La prop 'x' doit être une liste de listes.");
        if (!Array.isArray(this.yBarParse) || !Array.isArray(this.yBarParse[0]))
          throw new Error("La prop 'yBars' doit être une liste de listes.");
        if (!Array.isArray(this.yLineParse) || !Array.isArray(this.yLineParse[0]))
          throw new Error("La prop 'yLines' doit être une liste de listes.");
        this.nameLinesParse = typeof this.nameLines == "string" ? JSON.parse(this.nameLines) : this.nameLines, this.nameBarsParse = typeof this.nameBars == "string" ? JSON.parse(this.nameBars) : this.nameBars;
      } catch (n) {
        console.error("Erreur lors du parsing des données x ou y-bar ou y-line:", n);
        return;
      }
      if (this.vline) {
        this.vlineParse = JSON.parse(this.vline);
        let n = [];
        this.vlinename && (n = JSON.parse(this.vlinename)), this.vlinecolor && (this.tmpVlineColorParse = JSON.parse(this.vlinecolor));
        for (let s = 0; s < this.vlineParse.length; s++)
          n[s] ? this.vlineNameParse.push(n[s]) : this.vlineNameParse.push("V" + (s + 1));
      }
      if (this.hline) {
        this.hlineParse = JSON.parse(this.hline);
        let n = [];
        this.hlinename && (n = JSON.parse(this.hlinename)), this.hlinecolor && (this.tmpHlineColorParse = JSON.parse(this.hlinecolor));
        for (let s = 0; s < this.hlineParse.length; s++)
          n[s] ? this.hlineNameParse.push(n[s]) : this.hlineNameParse.push("H" + (s + 1));
      }
      const e = this.yBarParse.map(() => []), t = this.yLineParse.map(() => []);
      if (typeof this.xparse[0] == "number") {
        const n = [...this.xparse].sort((s, i) => s - i);
        n.forEach((s) => {
          const i = this.xparse.findIndex((r) => r === s);
          this.yBarParse.forEach((r, o) => {
            e[o].push(r[i]);
          }), this.yLineParse.forEach((r, o) => {
            t[o].push(r[i]);
          });
        }), this.labels = n;
      } else
        this.labels = this.xparse[0], this.yBarParse.forEach((n, s) => {
          e[s].push(...n);
        }), this.yLineParse.forEach((n, s) => {
          t[s].push(...n);
        });
      this.loadColors(), this.barsDatasets = e.map((n, s) => ({
        data: n,
        type: "bar",
        borderColor: this.colorBarParse[s % this.colorBarParse.length],
        backgroundColor: this.colorBarParse[s % this.colorBarParse.length],
        barThickness: this.barSize,
        maxBarThickness: this.maxBarSize,
        order: 2
      })), this.linesDatasets = t.map((n, s) => ({
        data: n,
        type: "line",
        borderColor: this.hideLines ? "transparent" : this.colorParse[s % this.colorParse.length],
        backgroundColor: "rgba(0,0,0,0)",
        pointBorderColor: this.colorParse[s % this.colorParse.length],
        pointBackgroundColor: this.colorParse[s % this.colorParse.length],
        yAxisID: "yLine",
        tension: 0.4,
        order: 1
      }));
    },
    choosePalette() {
      return { bar: Kt(this.selectedPalette, this.barsColors), line: Kt(this.selectedPalette, this.linesColors) };
    },
    loadColors() {
      const { colorBarParse: e, colorBarHover: t, colorParse: n, colorHover: s, vlineColorParse: i, hlineColorParse: r } = zx({
        yLinesLength: this.yLineParse.length,
        vlineParse: this.vlineParse,
        hlineParse: this.hlineParse,
        tmpVlineColorParse: this.tmpVlineColorParse,
        tmpHlineColorParse: this.tmpHlineColorParse,
        selectedPalette: this.selectedPalette,
        barsColors: this.barsColors,
        linesColors: this.linesColors
      });
      this.colorBarParse = e, this.colorBarHover = t, this.colorParse = n, this.colorHover = s, this.vlineColorParse = i, this.hlineColorParse = r;
    },
    createChart() {
      this.chart && this.chart.destroy(), this.getData();
      const e = this.$refs[this.chartId].getContext("2d");
      this.chart = new lt(e, {
        data: {
          labels: this.labels,
          datasets: [...this.barsDatasets, ...this.linesDatasets]
        },
        plugins: [
          {
            afterDraw: (t) => {
              var n, s;
              if ((n = t.tooltip) != null && n._active && ((s = t.tooltip) != null && s._active.length)) {
                const { ctx: i } = t, r = t.tooltip.getActiveElements()[0].element.tooltipPosition().x, o = t.tooltip._active[0].index, l = t.scales.y.getPixelForValue(this.yBarParse[o]), a = t.scales.yLine.getPixelForValue(this.yLineParse[o]);
                i.save(), i.beginPath(), i.moveTo(r, t.scales.y.top), i.lineTo(r, t.scales.y.bottom), i.lineWidth = 1, i.strokeStyle = this.colorPrecisionBar, i.setLineDash([10, 5]), i.stroke(), i.restore(), i.save(), i.beginPath(), i.moveTo(t.scales.x.right, a), i.lineTo(r, a), i.lineWidth = 1, i.strokeStyle = this.colorPrecisionBar, i.setLineDash([10, 5]), i.stroke(), i.restore(), i.save(), i.beginPath(), i.moveTo(t.scales.x.left, l), i.lineTo(r, l), i.lineWidth = 1, i.strokeStyle = this.colorPrecisionBar, i.setLineDash([10, 5]), i.stroke(), i.restore();
              }
            }
          }
        ],
        options: {
          aspectRatio: this.aspectRatio,
          scales: {
            x: {
              offset: !0,
              stacked: this.stacked,
              grid: {
                drawTicks: !1,
                drawOnChartArea: !1
              },
              ...this.xMin ? { suggestedMin: this.xMin } : {},
              ...this.xMax ? { suggestedMax: this.xMax } : {}
            },
            y: {
              type: "linear",
              position: "left",
              stacked: this.stacked,
              grid: {
                drawTicks: !1
              },
              border: {
                dash: [3]
              },
              ticks: {
                padding: 10,
                maxTicksLimit: 5,
                callback: (t) => t >= 1e9 || t <= -1e9 ? t / 1e9 + "B" : t >= 1e6 || t <= -1e6 ? t / 1e6 + "M" : t >= 1e3 || t <= -1e3 ? t / 1e3 + "K" : t
              },
              ...this.yBarMin ? { suggestedMin: this.yBarMin } : {},
              ...this.yBarMax ? { suggestedMax: this.yBarMax } : {}
            },
            yLine: {
              type: "linear",
              position: "right",
              id: "yLine",
              beginAtZero: !0,
              grid: {
                drawTicks: !1
              },
              border: {
                dash: [3]
              },
              ticks: {
                padding: 10,
                maxTicksLimit: 5,
                callback: (t) => t >= 1e9 || t <= -1e9 ? t / 1e9 + "B" : t >= 1e6 || t <= -1e6 ? t / 1e6 + "M" : t >= 1e3 || t <= -1e3 ? t / 1e3 + "K" : t
              },
              ...this.yLineMin ? { suggestedMin: this.yLineMin } : {},
              ...this.yLineMax ? { suggestedMax: this.yLineMax } : {}
            }
          },
          plugins: {
            legend: {
              display: !1
            },
            tooltip: {
              enabled: !1,
              displayColors: !1,
              backgroundColor: "#6b6b6b",
              callbacks: {
                label: (t) => {
                  const n = [];
                  return [...this.barsDatasets, ...this.linesDatasets].forEach((s) => {
                    n.push(this.formatNumber(s.data[t.dataIndex]));
                  }), n;
                },
                title: (t) => t[0].label
              },
              external: (t) => {
                const s = (document.getElementById(this.databoxId + "-" + this.databoxType + "-" + this.databoxSource) || this.$el.nextElementSibling).querySelector(".tooltip"), i = t.tooltip;
                if (!s) return;
                if (!i || i.opacity === 0) {
                  s.style.opacity = 0;
                  return;
                }
                if (s.classList.remove("above", "below", "no-transform"), i.yAlign ? s.classList.add(i.yAlign) : s.classList.add("no-transform"), i.body) {
                  const d = i.title || [], u = i.body.map((b) => b.lines), f = s.querySelector(".tooltip_header.fr-text--sm.fr-mb-0");
                  f.innerHTML = d[0];
                  const m = s.querySelector(".tooltip_value");
                  m.innerHTML = "";
                  const p = [...this.colorBarParse, ...this.colorParse];
                  u[0].forEach((b, v) => {
                    if (b) {
                      const x = p[Math.min(v, p.length - 1)], C = v === 0 ? `${b}${this.unitTooltipBar ? " " + this.unitTooltipBar : ""}` : `${b}${this.unitTooltipLine ? " " + this.unitTooltipLine : ""}`;
                      m.innerHTML += `
                        <div class="tooltip_value-content">
                          <span class="tooltip_dot" style="background-color:${x};"></span>
                          <p class="tooltip_place fr-mb-0">${C}</p>
                        </div>
                      `;
                    }
                  });
                }
                const { offsetLeft: r, offsetTop: o } = this.chart.canvas, l = Number(this.chart.canvas.style.width.replace(/\D/g, "")), a = Number(this.chart.canvas.style.height.replace(/\D/g, ""));
                let c = r + i.caretX + 10, h = o + i.caretY - 20;
                c + s.clientWidth > r + l && (c = r + i.caretX - s.clientWidth - 10), h + s.clientHeight > o + 0.9 * a && (h = o + i.caretY - s.clientHeight + 20), c < r && (c = r + i.caretX - s.clientWidth / 2, h = o + i.caretY - s.clientHeight - 20), s.style.position = "absolute", s.style.padding = i.padding + "px " + i.padding + "px", s.style.pointerEvents = "none", s.style.left = c + "px", s.style.top = h + "px", s.style.opacity = 1;
              }
            }
          }
        }
      });
    },
    changeColors(e) {
      this.loadColors(), this.chart.data.datasets.forEach((t, n) => {
        t.type === "bar" ? (t.borderColor = this.colorBarParse[n] || this.colorBarParse[0], t.backgroundColor = this.colorBarParse[n] || this.colorBarParse[0], t.hoverBorderColor = this.colorBarHover[n] || this.colorBarHover[0], t.hoverBackgroundColor = this.colorBarHover[n] || this.colorBarHover[0]) : t.type === "line" && (t.borderColor = this.colorParse[n] || this.colorParse[0], t.pointBorderColor = this.colorParse[n] || this.colorParse[0], t.pointBackgroundColor = this.colorParse[n] || this.colorParse[0], t.pointHoverBorderColor = this.colorHover[n] || this.colorHover[0], t.pointHoverBackgroundColor = this.colorHover[n] || this.colorHover[0]);
      }), this.chart.options.scales.x.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.options.scales.y.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.options.scales.yLine.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.update("none");
    }
  }
}, _w = { class: "fr-col-12" }, Mw = { class: "chart" }, Cw = { class: "tooltip" }, Pw = { class: "tooltip_body" }, Sw = { class: "tooltip_value" }, Ew = { class: "tooltip_value-content" }, Dw = { class: "tooltip_place" }, Aw = { class: "tooltip_value-content" }, Nw = { class: "tooltip_place" }, Ow = { class: "chart_legend fr-mb-0 fr-mt-4v" }, Rw = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, Tw = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, Lw = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, Fw = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, Iw = {
  key: 0,
  class: "flex fr-mt-1w"
}, Vw = { class: "fr-text--xs" };
function Bw(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      g("div", _w, [
        g("div", Mw, [
          g("div", Cw, [
            t[0] || (t[0] = g("div", { class: "tooltip_header fr-text--sm fr-mb-0" }, null, -1)),
            g("div", Pw, [
              g("div", Sw, [
                (O(!0), F(ht, null, wt(e.nameBarsParse, (l, a) => (O(), F("div", {
                  key: a,
                  class: "flex fr-mt-3v fr-mb-1v",
                  style: { "border-bottom": "1px solid #e0e0e0" }
                }, [
                  g("div", Ew, [
                    g("span", {
                      class: "tooltip_dot",
                      style: P({ "background-color": e.nameBarsParse[Math.min(a, e.nameBarsParse.length - 1)] })
                    }, null, 4),
                    g("p", Dw, X(e.capitalize(e.nameBarsParse[a] || "Bar " + (a + 1))), 1)
                  ])
                ]))), 128)),
                (O(!0), F(ht, null, wt(i.colorParse, (l, a) => (O(), F("div", {
                  key: a,
                  class: "flex fr-mt-3v fr-mb-1v",
                  style: { "border-bottom": "1px solid #e0e0e0" }
                }, [
                  g("div", Aw, [
                    g("span", {
                      class: "tooltip_dot",
                      style: P({ "background-color": i.colorParse[Math.min(a, i.colorParse.length - 1)] })
                    }, null, 4),
                    g("p", Nw, X(e.capitalize(e.nameLinesParse[a] || "Line " + (a + 1))), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          g("canvas", { ref: i.chartId }, null, 512),
          g("div", Ow, [
            (O(!0), F(ht, null, wt(e.nameBarsParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.colorBarParse[Math.min(a, i.colorBarParse.length - 1)] })
              }, null, 4),
              g("p", Rw, X(e.capitalize(l || "Bar " + (a + 1))), 1)
            ]))), 128)),
            (O(!0), F(ht, null, wt(e.nameLinesParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.colorParse[Math.min(a, i.colorParse.length - 1)] })
              }, null, 4),
              g("p", Tw, X(e.capitalize(l || "Line " + (a + 1))), 1)
            ]))), 128)),
            (O(!0), F(ht, null, wt(i.hlineNameParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex"
            }, [
              g("span", {
                class: "legende_dash_line",
                style: P({ "background-color": i.hlineColorParse[a] })
              }, null, 4),
              g("span", {
                class: "legende_dash_line legende_dash_line_end",
                style: P({ "background-color": i.hlineColorParse[a] })
              }, null, 4),
              g("p", Lw, X(e.capitalize(l)), 1)
            ]))), 128)),
            (O(!0), F(ht, null, wt(i.vlineNameParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex"
            }, [
              g("span", {
                class: "legende_dash_line",
                style: P({ "background-color": i.vlineColorParse[a] })
              }, null, 4),
              g("span", {
                class: "legende_dash_line legende_dash_line_end",
                style: P({ "background-color": i.vlineColorParse[a] })
              }, null, 4),
              g("p", Fw, X(e.capitalize(l)), 1)
            ]))), 128))
          ]),
          n.date ? (O(), F("div", Iw, [
            g("p", Vw, " Mise à jour : " + X(n.date), 1)
          ])) : Mt("", !0)
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const $w = /* @__PURE__ */ It(kw, [["render", Bw]]), Hw = {
  name: "GaugeChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    value: {
      type: [Number, String],
      default: ""
    },
    percent: {
      type: [Number, String],
      default: ""
    },
    init: {
      type: [Number, String],
      required: !0
    },
    target: {
      type: [Number, String],
      required: !0
    },
    initDate: {
      type: String,
      default: ""
    },
    targetDate: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "2rem"
    },
    legend: {
      type: [Boolean, String],
      default: !0
    },
    date: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      widgetId: "",
      percentage: 0,
      styleRectangleOver: "",
      styleRectangleUnder: "",
      styleLegendOver: "",
      styleLegendUnder: "",
      colorOver: "",
      colorUnder: "",
      width: ""
    };
  },
  watch: {
    $props: {
      handler() {
        this.widgetId && this.createChart();
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.createChart(), this.display = this.$refs[this.widgetId].offsetWidth > 486 ? "big" : "small";
  },
  methods: {
    createChart() {
      this.percent ? this.percentage = Math.round(this.percent) : this.percentage = Math.round(100 * (this.value - this.init) / (this.target - this.init)), this.width = Math.min(100, this.percentage);
    }
  }
}, zw = { class: "fr-col-12" }, jw = { class: "chart" }, Ww = { class: "gauge-container" }, qw = { class: "jauge-text fr-text fr-text--sm fr-text-title--blue-france fr-pl-1w" }, Yw = { class: "gauge-container" }, Uw = { class: "fr-text--xs fr-text-mention--grey fr-mt-1w fr-mb-0" }, Gw = { class: "fr-text--xs fr-text-mention--grey fr-mt-1w fr-mb-0 fr-ml-auto fr-mr-0" }, Xw = {
  key: 0,
  class: "gauge-container"
}, Kw = { class: "fr-text--xs fr-text-mention--grey" }, Jw = { class: "fr-text--xs fr-text-mention--grey fr-ml-auto fr-mr-0" }, Zw = {
  key: 1,
  class: "flex"
}, Qw = {
  key: 2,
  class: "flex fr-mt-3v fr-mb-1v"
}, tk = {
  key: 3,
  class: "flex fr-mt-1w"
}, ek = { class: "fr-text--xs" };
function nk(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      g("div", zw, [
        g("div", jw, [
          g("div", Ww, [
            g("div", {
              class: "jauge",
              style: P({ height: n.height })
            }, [
              g("div", {
                class: "jauge-fill",
                style: P({ width: i.width + "%" })
              }, [
                g("span", qw, X(i.percentage) + "%", 1)
              ], 4)
            ], 4)
          ]),
          g("div", Yw, [
            g("p", Uw, X(e.formatNumber(n.init)), 1),
            g("p", Gw, X(e.formatNumber(n.target)), 1)
          ]),
          n.initDate && n.targetDate ? (O(), F("div", Xw, [
            g("p", Kw, X(n.initDate), 1),
            g("p", Jw, X(n.targetDate), 1)
          ])) : Mt("", !0),
          n.legend ? (O(), F("div", Zw, [...t[0] || (t[0] = [
            g("span", { class: "legende_dot target_legend" }, null, -1),
            g("p", { class: "fr-text--sm fr-text--bold fr-ml-2v fr-mb-0" }, " Valeur cible ", -1)
          ])])) : Mt("", !0),
          n.legend ? (O(), F("div", Qw, [...t[1] || (t[1] = [
            g("span", { class: "legende_dot actual_legend" }, null, -1),
            g("p", { class: "fr-text--sm fr-text--bold fr-ml-2v fr-mb-0" }, " Valeur actuelle ", -1)
          ])])) : Mt("", !0),
          n.date ? (O(), F("div", tk, [
            g("p", ek, " Mise à jour : " + X(n.date), 1)
          ])) : Mt("", !0)
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const sk = /* @__PURE__ */ It(Hw, [["render", nk], ["__scopeId", "data-v-e6e08090"]]);
lt.register(Is, tn);
const ik = {
  name: "LineChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    x: {
      type: Array,
      required: !0
    },
    y: {
      type: Array,
      required: !0
    },
    xMin: {
      type: [Number, String],
      default: ""
    },
    xMax: {
      type: [Number, String],
      default: ""
    },
    yMin: {
      type: [Number, String],
      default: ""
    },
    yMax: {
      type: [Number, String],
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    vline: {
      type: String,
      default: ""
    },
    vlinecolor: {
      type: String,
      default: ""
    },
    vlinename: {
      type: String,
      default: ""
    },
    hline: {
      type: String,
      default: ""
    },
    hlinecolor: {
      type: String,
      default: ""
    },
    hlinename: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: [Number, String],
      default: 2
    },
    formatDate: {
      type: [Boolean, String],
      default: !1
    },
    selectedPalette: {
      type: String,
      default: ""
    },
    colors: {
      type: Array,
      default: void 0
    },
    unitTooltip: {
      type: String,
      default: ""
    },
    showLabels: {
      type: [String, Array],
      default: void 0
    },
    highlightStart: {
      type: [String, Number],
      default: null
    },
    highlightEnd: {
      type: [String, Number],
      default: null
    },
    highlightLabel: {
      type: String,
      default: ""
    },
    highlightLabelColor: {
      type: String,
      default: "rgba(100, 100, 100, 1)"
    },
    highlightLabelSize: {
      type: Number,
      default: 14
    },
    highlightLabelPosition: {
      type: String,
      default: "top",
      // 'top' | 'middle' | 'bottom'
      validator: (e) => ["top", "middle", "bottom"].includes(e)
    }
  },
  data() {
    return this.chart = void 0, {
      widgetId: "",
      chartId: "",
      display: "",
      datasets: [],
      xAxisType: "category",
      labels: [],
      xparse: [],
      yparse: [],
      nameParse: [],
      tmpColorParse: [],
      colorParse: [],
      vlineParse: [],
      vlineColorParse: [],
      tmpVlineColorParse: [],
      vlineNameParse: [],
      hlineParse: [],
      hlineColorParse: [],
      tmpHlineColorParse: [],
      hlineNameParse: [],
      colorHover: []
    };
  },
  watch: {
    $props: {
      handler() {
        this.chartId && (this.resetData(), this.getData(), this.createChart());
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    $n(), this.chartId = "dsfr-chart-" + Math.floor(Math.random() * 1e3), this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.resetData(), this.createChart(), this.display = this.$refs[this.widgetId].offsetWidth > 486 ? "big" : "small", document.documentElement.addEventListener("dsfr.theme", (t) => {
      this.chartId !== "" && this.changeColors(t.detail.theme);
    });
  },
  methods: {
    resetData() {
      this.chart && this.chart.destroy(), this.display = "", this.datasets = [], this.xAxisType = "", this.labels = [], this.xparse = [], this.yparse = [], this.nameParse = [], this.tmpColorParse = [], this.colorParse = [], this.vlineParse = [], this.vlineColorParse = [], this.tmpVlineColorParse = [], this.vlineNameParse = [], this.hlineParse = [], this.hlineColorParse = [], this.tmpHlineColorParse = [], this.hlineNameParse = [], this.colorHover = [];
    },
    getData() {
      try {
        if ((typeof this.x == "string" || typeof this.y == "string") && console.error("Cette fonctionnalité n'est plus supportée. Veuillez passer les props 'x' et 'y' comme une liste de nombres."), this.xparse = typeof this.x == "string" ? JSON.parse(this.x) : this.x, this.yparse = typeof this.y == "string" ? JSON.parse(this.y) : this.y, !Array.isArray(this.xparse) || !Array.isArray(this.xparse[0]))
          throw new Error("La prop 'x' doit être une liste de listes.");
        if (!Array.isArray(this.yparse) || !Array.isArray(this.yparse[0]))
          throw new Error("La prop 'y' doit être une liste de listes.");
      } catch (n) {
        console.error("Erreur lors du parsing des données x ou y:", n);
        return;
      }
      let e = [];
      if (this.name)
        try {
          typeof this.name == "string" && console.error("Cette fonctionnalité n'est plus supportée. Veuillez passer les props 'name' comme une liste de nombres."), e = typeof this.name == "string" ? JSON.parse(this.name) : this.name;
        } catch (n) {
          console.error("Erreur lors du parsing de name:", n);
        }
      for (let n = 0; n < this.yparse.length; n++)
        e[n] ? this.nameParse.push(e[n]) : this.nameParse.push("Série " + (n + 1));
      if (this.vline) {
        this.vlineParse = JSON.parse(this.vline);
        let n = [];
        this.vlinename && (n = JSON.parse(this.vlinename)), this.vlinecolor && (this.tmpVlineColorParse = JSON.parse(this.vlinecolor));
        for (let s = 0; s < this.vlineParse.length; s++)
          n[s] ? this.vlineNameParse.push(n[s]) : this.vlineNameParse.push("V" + (s + 1));
      }
      if (this.hline) {
        this.hlineParse = JSON.parse(this.hline);
        let n = [];
        this.hlinename && (n = JSON.parse(this.hlinename)), this.hlinecolor && (this.tmpHlineColorParse = JSON.parse(this.hlinecolor));
        for (let s = 0; s < this.hlineParse.length; s++)
          n[s] ? this.hlineNameParse.push(n[s]) : this.hlineNameParse.push("H" + (s + 1));
      }
      let t = [];
      typeof this.xparse[0][0] == "number" ? (this.xparse.forEach((n, s) => {
        const i = [];
        n.map((o) => o).sort((o, l) => o - l).forEach((o) => {
          const l = n.findIndex((a) => a === o);
          i.push({
            x: o,
            y: this.yparse[s][l]
          });
        }), t.push(i);
      }), this.labels = [], this.xAxisType = "linear") : (t = this.yparse, this.labels = this.xparse[0], this.xAxisType = "category"), this.loadColors(), this.datasets = t.map((n, s) => ({
        data: n,
        fill: !1,
        borderColor: this.colorParse[s % this.colorParse.length],
        pointRadius: 5,
        pointHoverRadius: 5,
        pointBackgroundColor: this.colorParse[s % this.colorParse.length],
        pointBorderColor: this.colorParse[s % this.colorParse.length],
        pointHoverBackgroundColor: this.colorHover[s % this.colorHover.length],
        pointHoverBorderColor: this.colorHover[s % this.colorHover.length],
        borderWidth: 2,
        tension: 0.4
      }));
    },
    loadColors() {
      this.colorParse = [], this.colorHover = [];
      const e = this.choosePalette();
      for (let t = 0; t < this.yparse.length; t++)
        if (this.tmpColorParse[t]) {
          const n = this.tmpColorParse[t];
          this.colorParse.push(n), this.colorHover.push(K(n).brighten(0.5).hex());
        } else {
          const n = xc(t, e);
          this.colorParse.push(n), this.colorHover.push(K(n).brighten(0.5).hex());
        }
      this.vlineColorParse = [];
      for (let t = 0; t < this.vlineParse.length; t++)
        this.tmpVlineColorParse[t] ? this.vlineColorParse.push(this.tmpVlineColorParse[t]) : this.vlineColorParse.push(Ie());
      this.hlineColorParse = [];
      for (let t = 0; t < this.hlineParse.length; t++)
        this.tmpHlineColorParse[t] ? this.hlineColorParse.push(this.tmpHlineColorParse[t]) : this.hlineColorParse.push(Ie());
    },
    choosePalette() {
      return Kt(this.selectedPalette, this.colors);
    },
    changeColors(e) {
      this.loadColors(), this.chart.data.datasets.forEach((t, n) => {
        t.borderColor = this.colorParse[n], t.backgroundColor = this.colorParse[n], t.pointBorderColor = this.colorParse[n], t.pointBackgroundColor = this.colorParse[n], t.hoverBorderColor = this.colorHover[n], t.hoverBackgroundColor = this.colorHover[n], t.pointHoverBorderColor = this.colorHover[n], t.pointHoverBackgroundColor = this.colorHover[n];
      }), this.chart.options.scales.x.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.options.scales.y.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.update("none");
    },
    createChart() {
      this.chart && this.chart.destroy(), this.getData();
      const e = this.$refs[this.chartId].getContext("2d"), t = Array.isArray(this.showLabels) ? !0 : this.showLabels != null, n = this.datasets.map((s) => {
        if (Array.isArray(this.showLabels))
          return this.showLabels;
        switch (this.showLabels) {
          case "all":
            return s.data.map((i, r) => r);
          case "edges":
            return [0, s.data.length - 1];
          case "minmax": {
            if (s.data.length === 0) return [];
            const i = s.data.map((a) => a.y), r = Math.min(...i), o = Math.max(...i), l = [];
            return s.data.forEach((a, c) => {
              (a.y === r || a.y === o) && (l.includes(c) || l.push(c));
            }), l;
          }
          default:
            return null;
        }
      });
      this.chart = new lt(e, {
        type: "line",
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        plugins: [
          {
            afterDraw: (s) => {
              var i, r;
              if ((i = s.tooltip) != null && i._active && ((r = s.tooltip) != null && r._active.length)) {
                const { ctx: o } = s, l = s.tooltip.getActiveElements()[0].element.tooltipPosition().x, a = s.tooltip._active[0].index;
                o.save(), o.beginPath(), o.moveTo(l, s.scales.y.top), o.lineTo(l, s.scales.y.bottom), o.lineWidth = 1, o.strokeStyle = this.colorPrecisionBar, o.setLineDash([10, 5]), o.stroke(), o.restore(), this.yparse.forEach((c) => {
                  let h = s.scales.y.getPixelForValue(c[a]);
                  o.save(), o.beginPath(), o.moveTo(s.scales.x.left, h), o.lineTo(s.scales.x.right, h), o.lineWidth = 1, o.strokeStyle = this.colorPrecisionBar, o.setLineDash([10, 5]), o.stroke(), o.restore();
                });
              }
            }
          },
          {
            id: "pointLabels",
            afterDatasetsDraw(s) {
              if (!t) return;
              const { ctx: i } = s;
              s.data.datasets.forEach((r, o) => {
                const l = s.getDatasetMeta(o);
                l.hidden || l.data.forEach((a, c) => {
                  if (n[o] && !n[o].includes(c)) return;
                  const h = r.data[c];
                  i.fillStyle = "#333", i.font = "12px sans-serif", i.textAlign = "center", i.fillText(h.y, a.x, a.y - 10);
                });
              });
            }
          },
          {
            id: "highlightZone",
            beforeDraw: (s) => {
              const { ctx: i, chartArea: r, scales: o } = s, l = this.highlightStart, a = this.highlightEnd;
              if (!l || !a) return;
              const c = o.x.getPixelForValue(l), h = o.x.getPixelForValue(a);
              if (i.save(), i.fillStyle = "rgba(150, 150, 150, 0.15)", i.fillRect(c, r.top, h - c, r.bottom - r.top), i.strokeStyle = "rgba(150, 150, 150, 0.25)", i.lineWidth = 2, i.beginPath(), i.moveTo(c, r.top), i.lineTo(c, r.bottom), i.moveTo(h, r.top), i.lineTo(h, r.bottom), i.stroke(), this.highlightLabel) {
                i.fillStyle = this.highlightLabelColor, i.font = `${this.highlightLabelSize}px sans-serif`, i.textAlign = "center", i.textBaseline = "middle";
                const d = (c + h) / 2;
                let u = r.top + 20;
                this.highlightLabelPosition === "middle" ? u = r.top + (r.bottom - r.top) / 2 : this.highlightLabelPosition === "bottom" && (u = r.bottom - 20), i.fillText(this.highlightLabel, d, u);
              }
              i.restore();
            }
          }
        ],
        options: {
          aspectRatio: this.aspectRatio,
          scales: {
            x: {
              offset: !0,
              type: this.xAxisType,
              grid: {
                drawOnChartArea: !1
              },
              ticks: {
                padding: 10
              },
              ...this.xMin ? { suggestedMin: this.xMin } : {},
              ...this.xMax ? { suggestedMax: this.xMax } : {}
            },
            y: {
              grid: {
                drawTicks: !1
              },
              border: {
                dash: [3]
              },
              ticks: {
                padding: 5,
                maxTicksLimit: 5,
                callback: (s) => s >= 1e9 || s <= -1e9 ? s / 1e9 + "B" : s >= 1e6 || s <= -1e6 ? s / 1e6 + "M" : s >= 1e3 || s <= -1e3 ? s / 1e3 + "K" : s
              },
              ...this.yMin ? { suggestedMin: this.yMin } : {},
              ...this.yMax ? { suggestedMax: this.yMax } : {}
            }
          },
          plugins: {
            legend: {
              display: !1
            },
            tooltip: {
              enabled: !1,
              displayColors: !1,
              backgroundColor: "#6b6b6b",
              callbacks: {
                label: (s) => {
                  const i = [];
                  return this.datasets.forEach((r, o) => {
                    if (this.xAxisType === "linear") {
                      const l = this.xparse[o].indexOf(s.parsed.x);
                      l !== -1 && i.push(this.yparse[o][l]);
                    } else
                      i.push(r.data[s.dataIndex]);
                  }), i;
                },
                title: (s) => s[0].label,
                labelTextColor: () => this.colorParse
              },
              external: (s) => {
                const r = (document.getElementById(this.databoxId + "-" + this.databoxType + "-" + this.databoxSource) || this.$el.nextElementSibling).querySelector(".tooltip"), o = s.tooltip;
                if (!r) return;
                if (!o || o.opacity === 0) {
                  r.style.opacity = 0;
                  return;
                }
                if (r.classList.remove("above", "below", "no-transform"), o.yAlign ? r.classList.add(o.yAlign) : r.classList.add("no-transform"), o.body) {
                  const f = o.title || [], m = o.body.map((v) => v.lines), p = r.querySelector(".tooltip_header.fr-text--sm.fr-mb-0");
                  p.innerHTML = f[0];
                  const b = r.querySelector(".tooltip_value");
                  b.innerHTML = "", m[0].forEach((v, x) => {
                    const C = `${v}${this.unitTooltip ? " " + this.unitTooltip : ""}`;
                    v && (b.innerHTML += `
                        <div class="tooltip_value-content">
                          <span class="tooltip_dot" style="background-color:${this.colorParse[x]};"></span>
                          <p class="tooltip_place fr-mb-0">${C}</p>
                        </div>
                      `);
                  });
                }
                const { offsetLeft: l, offsetTop: a } = this.chart.canvas, c = Number(this.chart.canvas.style.width.replace(/\D/g, "")), h = Number(this.chart.canvas.style.height.replace(/\D/g, ""));
                let d = l + o.caretX + 10, u = a + o.caretY - 20;
                d + r.clientWidth > l + c && (d = l + o.caretX - r.clientWidth - 10), u + r.clientHeight > a + 0.9 * h && (u = a + o.caretY - r.clientHeight + 20), d < l && (d = l + o.caretX - r.clientWidth / 2, u = a + o.caretY - r.clientHeight - 20), r.style.position = "absolute", r.style.padding = o.padding + "px " + o.padding + "px", r.style.pointerEvents = "none", r.style.left = d + "px", r.style.top = u + "px", r.style.opacity = 1;
              }
            }
          }
        }
      });
    }
  }
}, ok = { class: "fr-col-12" }, rk = { class: "chart" }, lk = { class: "tooltip" }, ak = { class: "tooltip_body" }, ck = { class: "tooltip_value" }, hk = { class: "tooltip_value-content" }, dk = { class: "tooltip_place" }, uk = { class: "chart_legend fr-mb-0 fr-mt-4v" }, fk = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, pk = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, gk = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, mk = {
  key: 0,
  class: "flex fr-mt-1w"
}, bk = { class: "fr-text--xs" };
function vk(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      g("div", ok, [
        g("div", rk, [
          g("div", lk, [
            t[0] || (t[0] = g("div", { class: "tooltip_header fr-text--sm fr-mb-0" }, null, -1)),
            g("div", ak, [
              g("div", ck, [
                (O(!0), F(ht, null, wt(i.nameParse, (l, a) => (O(), F("div", {
                  key: a,
                  class: "flex fr-mt-3v fr-mb-1v",
                  style: { "border-bottom": "1px solid #e0e0e0" }
                }, [
                  g("div", hk, [
                    g("span", {
                      class: "tooltip_dot",
                      style: P({ "background-color": i.colorParse[a] })
                    }, null, 4),
                    g("p", dk, X(e.capitalize(l)), 1)
                  ])
                ]))), 128))
              ])
            ])
          ]),
          g("canvas", { ref: i.chartId }, null, 512),
          g("div", uk, [
            (O(!0), F(ht, null, wt(i.nameParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.colorParse[a] })
              }, null, 4),
              g("p", fk, X(e.capitalize(l)), 1)
            ]))), 128))
          ]),
          (O(!0), F(ht, null, wt(i.hlineNameParse, (l, a) => (O(), F("div", {
            key: a,
            class: "flex fr-mt-3v"
          }, [
            g("span", {
              class: "legende_dash_line",
              style: P({ "background-color": i.hlineColorParse[a] })
            }, null, 4),
            g("span", {
              class: "legende_dash_line legende_dash_line_end",
              style: P({ "background-color": i.hlineColorParse[a] })
            }, null, 4),
            g("p", pk, X(e.capitalize(l)), 1)
          ]))), 128)),
          (O(!0), F(ht, null, wt(i.vlineNameParse, (l, a) => (O(), F("div", {
            key: a,
            class: "flex fr-mt-3v fr-mb-1v"
          }, [
            g("span", {
              class: "legende_dash_line",
              style: P({ "background-color": i.vlineColorParse[a] })
            }, null, 4),
            g("span", {
              class: "legende_dash_line legende_dash_line_end",
              style: P({ "background-color": i.vlineColorParse[a] })
            }, null, 4),
            g("p", gk, X(e.capitalize(l)), 1)
          ]))), 128)),
          n.date ? (O(), F("div", mk, [
            g("p", bk, " Mise à jour : " + X(n.date), 1)
          ])) : Mt("", !0)
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const yk = /* @__PURE__ */ It(ik, [["render", vk]]);
function jo(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function xk(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function kp(e) {
  let t, n, s;
  e.length !== 2 ? (t = jo, n = (l, a) => jo(e(l), a), s = (l, a) => e(l) - a) : (t = e === jo || e === xk ? e : wk, n = e, s = e);
  function i(l, a, c = 0, h = l.length) {
    if (c < h) {
      if (t(a, a) !== 0) return h;
      do {
        const d = c + h >>> 1;
        n(l[d], a) < 0 ? c = d + 1 : h = d;
      } while (c < h);
    }
    return c;
  }
  function r(l, a, c = 0, h = l.length) {
    if (c < h) {
      if (t(a, a) !== 0) return h;
      do {
        const d = c + h >>> 1;
        n(l[d], a) <= 0 ? c = d + 1 : h = d;
      } while (c < h);
    }
    return c;
  }
  function o(l, a, c = 0, h = l.length) {
    const d = i(l, a, c, h - 1);
    return d > c && s(l[d - 1], a) > -s(l[d], a) ? d - 1 : d;
  }
  return { left: i, center: o, right: r };
}
function wk() {
  return 0;
}
function kk(e) {
  return e === null ? NaN : +e;
}
const _k = kp(jo), Mk = _k.right;
kp(kk).center;
const Ck = Math.sqrt(50), Pk = Math.sqrt(10), Sk = Math.sqrt(2);
function wr(e, t, n) {
  const s = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(s)), r = s / Math.pow(10, i), o = r >= Ck ? 10 : r >= Pk ? 5 : r >= Sk ? 2 : 1;
  let l, a, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, l = Math.round(e * c), a = Math.round(t * c), l / c < e && ++l, a / c > t && --a, c = -c) : (c = Math.pow(10, i) * o, l = Math.round(e / c), a = Math.round(t / c), l * c < e && ++l, a * c > t && --a), a < l && 0.5 <= n && n < 2 ? wr(e, t, n * 2) : [l, a, c];
}
function Ek(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const s = t < e, [i, r, o] = s ? wr(t, e, n) : wr(e, t, n);
  if (!(r >= i)) return [];
  const l = r - i + 1, a = new Array(l);
  if (s)
    if (o < 0) for (let c = 0; c < l; ++c) a[c] = (r - c) / -o;
    else for (let c = 0; c < l; ++c) a[c] = (r - c) * o;
  else if (o < 0) for (let c = 0; c < l; ++c) a[c] = (i + c) / -o;
  else for (let c = 0; c < l; ++c) a[c] = (i + c) * o;
  return a;
}
function ya(e, t, n) {
  return t = +t, e = +e, n = +n, wr(e, t, n)[2];
}
function Dk(e, t, n) {
  t = +t, e = +e, n = +n;
  const s = t < e, i = s ? ya(t, e, n) : ya(e, t, n);
  return (s ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ak(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function wc(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function _p(e, t) {
  var n = Object.create(e.prototype);
  for (var s in t) n[s] = t[s];
  return n;
}
function Ji() {
}
var Bi = 0.7, kr = 1 / Bi, Vs = "\\s*([+-]?\\d+)\\s*", $i = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", on = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Nk = /^#([0-9a-f]{3,8})$/, Ok = new RegExp(`^rgb\\(${Vs},${Vs},${Vs}\\)$`), Rk = new RegExp(`^rgb\\(${on},${on},${on}\\)$`), Tk = new RegExp(`^rgba\\(${Vs},${Vs},${Vs},${$i}\\)$`), Lk = new RegExp(`^rgba\\(${on},${on},${on},${$i}\\)$`), Fk = new RegExp(`^hsl\\(${$i},${on},${on}\\)$`), Ik = new RegExp(`^hsla\\(${$i},${on},${on},${$i}\\)$`), lu = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
wc(Ji, Hi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: au,
  // Deprecated! Use color.formatHex.
  formatHex: au,
  formatHex8: Vk,
  formatHsl: Bk,
  formatRgb: cu,
  toString: cu
});
function au() {
  return this.rgb().formatHex();
}
function Vk() {
  return this.rgb().formatHex8();
}
function Bk() {
  return Mp(this).formatHsl();
}
function cu() {
  return this.rgb().formatRgb();
}
function Hi(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Nk.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? hu(t) : n === 3 ? new pe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Co(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Co(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ok.exec(e)) ? new pe(t[1], t[2], t[3], 1) : (t = Rk.exec(e)) ? new pe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Tk.exec(e)) ? Co(t[1], t[2], t[3], t[4]) : (t = Lk.exec(e)) ? Co(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Fk.exec(e)) ? fu(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ik.exec(e)) ? fu(t[1], t[2] / 100, t[3] / 100, t[4]) : lu.hasOwnProperty(e) ? hu(lu[e]) : e === "transparent" ? new pe(NaN, NaN, NaN, 0) : null;
}
function hu(e) {
  return new pe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Co(e, t, n, s) {
  return s <= 0 && (e = t = n = NaN), new pe(e, t, n, s);
}
function $k(e) {
  return e instanceof Ji || (e = Hi(e)), e ? (e = e.rgb(), new pe(e.r, e.g, e.b, e.opacity)) : new pe();
}
function xa(e, t, n, s) {
  return arguments.length === 1 ? $k(e) : new pe(e, t, n, s ?? 1);
}
function pe(e, t, n, s) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +s;
}
wc(pe, xa, _p(Ji, {
  brighter(e) {
    return e = e == null ? kr : Math.pow(kr, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Bi : Math.pow(Bi, e), new pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pe(us(this.r), us(this.g), us(this.b), _r(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: du,
  // Deprecated! Use color.formatHex.
  formatHex: du,
  formatHex8: Hk,
  formatRgb: uu,
  toString: uu
}));
function du() {
  return `#${ns(this.r)}${ns(this.g)}${ns(this.b)}`;
}
function Hk() {
  return `#${ns(this.r)}${ns(this.g)}${ns(this.b)}${ns((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function uu() {
  const e = _r(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${us(this.r)}, ${us(this.g)}, ${us(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function _r(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function us(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ns(e) {
  return e = us(e), (e < 16 ? "0" : "") + e.toString(16);
}
function fu(e, t, n, s) {
  return s <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Re(e, t, n, s);
}
function Mp(e) {
  if (e instanceof Re) return new Re(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ji || (e = Hi(e)), !e) return new Re();
  if (e instanceof Re) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, s = e.b / 255, i = Math.min(t, n, s), r = Math.max(t, n, s), o = NaN, l = r - i, a = (r + i) / 2;
  return l ? (t === r ? o = (n - s) / l + (n < s) * 6 : n === r ? o = (s - t) / l + 2 : o = (t - n) / l + 4, l /= a < 0.5 ? r + i : 2 - r - i, o *= 60) : l = a > 0 && a < 1 ? 0 : o, new Re(o, l, a, e.opacity);
}
function zk(e, t, n, s) {
  return arguments.length === 1 ? Mp(e) : new Re(e, t, n, s ?? 1);
}
function Re(e, t, n, s) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +s;
}
wc(Re, zk, _p(Ji, {
  brighter(e) {
    return e = e == null ? kr : Math.pow(kr, e), new Re(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Bi : Math.pow(Bi, e), new Re(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, s = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - s;
    return new pe(
      Ll(e >= 240 ? e - 240 : e + 120, i, s),
      Ll(e, i, s),
      Ll(e < 120 ? e + 240 : e - 120, i, s),
      this.opacity
    );
  },
  clamp() {
    return new Re(pu(this.h), Po(this.s), Po(this.l), _r(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = _r(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${pu(this.h)}, ${Po(this.s) * 100}%, ${Po(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function pu(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Po(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ll(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const kc = (e) => () => e;
function jk(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Wk(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(s) {
    return Math.pow(e + s * t, n);
  };
}
function qk(e) {
  return (e = +e) == 1 ? Cp : function(t, n) {
    return n - t ? Wk(t, n, e) : kc(isNaN(t) ? n : t);
  };
}
function Cp(e, t) {
  var n = t - e;
  return n ? jk(e, n) : kc(isNaN(e) ? t : e);
}
const gu = (function e(t) {
  var n = qk(t);
  function s(i, r) {
    var o = n((i = xa(i)).r, (r = xa(r)).r), l = n(i.g, r.g), a = n(i.b, r.b), c = Cp(i.opacity, r.opacity);
    return function(h) {
      return i.r = o(h), i.g = l(h), i.b = a(h), i.opacity = c(h), i + "";
    };
  }
  return s.gamma = e, s;
})(1);
function Yk(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, s = t.slice(), i;
  return function(r) {
    for (i = 0; i < n; ++i) s[i] = e[i] * (1 - r) + t[i] * r;
    return s;
  };
}
function Uk(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Gk(e, t) {
  var n = t ? t.length : 0, s = e ? Math.min(n, e.length) : 0, i = new Array(s), r = new Array(n), o;
  for (o = 0; o < s; ++o) i[o] = _c(e[o], t[o]);
  for (; o < n; ++o) r[o] = t[o];
  return function(l) {
    for (o = 0; o < s; ++o) r[o] = i[o](l);
    return r;
  };
}
function Xk(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(s) {
    return n.setTime(e * (1 - s) + t * s), n;
  };
}
function Mr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Kk(e, t) {
  var n = {}, s = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = _c(e[i], t[i]) : s[i] = t[i];
  return function(r) {
    for (i in n) s[i] = n[i](r);
    return s;
  };
}
var wa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fl = new RegExp(wa.source, "g");
function Jk(e) {
  return function() {
    return e;
  };
}
function Zk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Qk(e, t) {
  var n = wa.lastIndex = Fl.lastIndex = 0, s, i, r, o = -1, l = [], a = [];
  for (e = e + "", t = t + ""; (s = wa.exec(e)) && (i = Fl.exec(t)); )
    (r = i.index) > n && (r = t.slice(n, r), l[o] ? l[o] += r : l[++o] = r), (s = s[0]) === (i = i[0]) ? l[o] ? l[o] += i : l[++o] = i : (l[++o] = null, a.push({ i: o, x: Mr(s, i) })), n = Fl.lastIndex;
  return n < t.length && (r = t.slice(n), l[o] ? l[o] += r : l[++o] = r), l.length < 2 ? a[0] ? Zk(a[0].x) : Jk(t) : (t = a.length, function(c) {
    for (var h = 0, d; h < t; ++h) l[(d = a[h]).i] = d.x(c);
    return l.join("");
  });
}
function _c(e, t) {
  var n = typeof t, s;
  return t == null || n === "boolean" ? kc(t) : (n === "number" ? Mr : n === "string" ? (s = Hi(t)) ? (t = s, gu) : Qk : t instanceof Hi ? gu : t instanceof Date ? Xk : Uk(t) ? Yk : Array.isArray(t) ? Gk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Kk : Mr)(e, t);
}
function t7(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function e7(e) {
  return function() {
    return e;
  };
}
function n7(e) {
  return +e;
}
var mu = [0, 1];
function Rs(e) {
  return e;
}
function ka(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : e7(isNaN(t) ? NaN : 0.5);
}
function s7(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(s) {
    return Math.max(e, Math.min(t, s));
  };
}
function i7(e, t, n) {
  var s = e[0], i = e[1], r = t[0], o = t[1];
  return i < s ? (s = ka(i, s), r = n(o, r)) : (s = ka(s, i), r = n(r, o)), function(l) {
    return r(s(l));
  };
}
function o7(e, t, n) {
  var s = Math.min(e.length, t.length) - 1, i = new Array(s), r = new Array(s), o = -1;
  for (e[s] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < s; )
    i[o] = ka(e[o], e[o + 1]), r[o] = n(t[o], t[o + 1]);
  return function(l) {
    var a = Mk(e, l, 1, s) - 1;
    return r[a](i[a](l));
  };
}
function r7(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function l7() {
  var e = mu, t = mu, n = _c, s, i, r, o = Rs, l, a, c;
  function h() {
    var u = Math.min(e.length, t.length);
    return o !== Rs && (o = s7(e[0], e[u - 1])), l = u > 2 ? o7 : i7, a = c = null, d;
  }
  function d(u) {
    return u == null || isNaN(u = +u) ? r : (a || (a = l(e.map(s), t, n)))(s(o(u)));
  }
  return d.invert = function(u) {
    return o(i((c || (c = l(t, e.map(s), Mr)))(u)));
  }, d.domain = function(u) {
    return arguments.length ? (e = Array.from(u, n7), h()) : e.slice();
  }, d.range = function(u) {
    return arguments.length ? (t = Array.from(u), h()) : t.slice();
  }, d.rangeRound = function(u) {
    return t = Array.from(u), n = t7, h();
  }, d.clamp = function(u) {
    return arguments.length ? (o = u ? !0 : Rs, h()) : o !== Rs;
  }, d.interpolate = function(u) {
    return arguments.length ? (n = u, h()) : n;
  }, d.unknown = function(u) {
    return arguments.length ? (r = u, d) : r;
  }, function(u, f) {
    return s = u, i = f, h();
  };
}
function a7() {
  return l7()(Rs, Rs);
}
function c7(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Cr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, s = e.slice(0, n);
  return [
    s.length > 1 ? s[0] + s.slice(2) : s,
    +e.slice(n + 1)
  ];
}
function Ws(e) {
  return e = Cr(Math.abs(e)), e ? e[1] : NaN;
}
function h7(e, t) {
  return function(n, s) {
    for (var i = n.length, r = [], o = 0, l = e[0], a = 0; i > 0 && l > 0 && (a + l + 1 > s && (l = Math.max(1, s - a)), r.push(n.substring(i -= l, i + l)), !((a += l + 1) > s)); )
      l = e[o = (o + 1) % e.length];
    return r.reverse().join(t);
  };
}
function d7(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var u7 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Pr(e) {
  if (!(t = u7.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Mc({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Pr.prototype = Mc.prototype;
function Mc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Mc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function f7(e) {
  t: for (var t = e.length, n = 1, s = -1, i; n < t; ++n)
    switch (e[n]) {
      case ".":
        s = i = n;
        break;
      case "0":
        s === 0 && (s = n), i = n;
        break;
      default:
        if (!+e[n]) break t;
        s > 0 && (s = 0);
        break;
    }
  return s > 0 ? e.slice(0, s) + e.slice(i + 1) : e;
}
var Pp;
function p7(e, t) {
  var n = Cr(e, t);
  if (!n) return e + "";
  var s = n[0], i = n[1], r = i - (Pp = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = s.length;
  return r === o ? s : r > o ? s + new Array(r - o + 1).join("0") : r > 0 ? s.slice(0, r) + "." + s.slice(r) : "0." + new Array(1 - r).join("0") + Cr(e, Math.max(0, t + r - 1))[0];
}
function bu(e, t) {
  var n = Cr(e, t);
  if (!n) return e + "";
  var s = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + s : s.length > i + 1 ? s.slice(0, i + 1) + "." + s.slice(i + 1) : s + new Array(i - s.length + 2).join("0");
}
const vu = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: c7,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => bu(e * 100, t),
  r: bu,
  s: p7,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function yu(e) {
  return e;
}
var xu = Array.prototype.map, wu = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function g7(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? yu : h7(xu.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", s = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? yu : d7(xu.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", a = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(d) {
    d = Pr(d);
    var u = d.fill, f = d.align, m = d.sign, p = d.symbol, b = d.zero, v = d.width, x = d.comma, C = d.precision, S = d.trim, w = d.type;
    w === "n" ? (x = !0, w = "g") : vu[w] || (C === void 0 && (C = 12), S = !0, w = "g"), (b || u === "0" && f === "=") && (b = !0, u = "0", f = "=");
    var D = p === "$" ? n : p === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", _ = p === "$" ? s : /[%p]/.test(w) ? o : "", E = vu[w], N = /[defgprs%]/.test(w);
    C = C === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function I(R) {
      var W = D, Z = _, kt, it, nt;
      if (w === "c")
        Z = E(R) + Z, R = "";
      else {
        R = +R;
        var G = R < 0 || 1 / R < 0;
        if (R = isNaN(R) ? a : E(Math.abs(R), C), S && (R = f7(R)), G && +R == 0 && m !== "+" && (G = !1), W = (G ? m === "(" ? m : l : m === "-" || m === "(" ? "" : m) + W, Z = (w === "s" ? wu[8 + Pp / 3] : "") + Z + (G && m === "(" ? ")" : ""), N) {
          for (kt = -1, it = R.length; ++kt < it; )
            if (nt = R.charCodeAt(kt), 48 > nt || nt > 57) {
              Z = (nt === 46 ? i + R.slice(kt + 1) : R.slice(kt)) + Z, R = R.slice(0, kt);
              break;
            }
        }
      }
      x && !b && (R = t(R, 1 / 0));
      var Q = W.length + R.length + Z.length, dt = Q < v ? new Array(v - Q + 1).join(u) : "";
      switch (x && b && (R = t(dt + R, dt.length ? v - Z.length : 1 / 0), dt = ""), f) {
        case "<":
          R = W + R + Z + dt;
          break;
        case "=":
          R = W + dt + R + Z;
          break;
        case "^":
          R = dt.slice(0, Q = dt.length >> 1) + W + R + Z + dt.slice(Q);
          break;
        default:
          R = dt + W + R + Z;
          break;
      }
      return r(R);
    }
    return I.toString = function() {
      return d + "";
    }, I;
  }
  function h(d, u) {
    var f = c((d = Pr(d), d.type = "f", d)), m = Math.max(-8, Math.min(8, Math.floor(Ws(u) / 3))) * 3, p = Math.pow(10, -m), b = wu[8 + m / 3];
    return function(v) {
      return f(p * v) + b;
    };
  }
  return {
    format: c,
    formatPrefix: h
  };
}
var So, Sp, Ep;
m7({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function m7(e) {
  return So = g7(e), Sp = So.format, Ep = So.formatPrefix, So;
}
function b7(e) {
  return Math.max(0, -Ws(Math.abs(e)));
}
function v7(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ws(t) / 3))) * 3 - Ws(Math.abs(e)));
}
function y7(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ws(t) - Ws(e)) + 1;
}
function x7(e, t, n, s) {
  var i = Dk(e, t, n), r;
  switch (s = Pr(s ?? ",f"), s.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return s.precision == null && !isNaN(r = v7(i, o)) && (s.precision = r), Ep(s, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      s.precision == null && !isNaN(r = y7(i, Math.max(Math.abs(e), Math.abs(t)))) && (s.precision = r - (s.type === "e"));
      break;
    }
    case "f":
    case "%": {
      s.precision == null && !isNaN(r = b7(i)) && (s.precision = r - (s.type === "%") * 2);
      break;
    }
  }
  return Sp(s);
}
function w7(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var s = t();
    return Ek(s[0], s[s.length - 1], n ?? 10);
  }, e.tickFormat = function(n, s) {
    var i = t();
    return x7(i[0], i[i.length - 1], n ?? 10, s);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var s = t(), i = 0, r = s.length - 1, o = s[i], l = s[r], a, c, h = 10;
    for (l < o && (c = o, o = l, l = c, c = i, i = r, r = c); h-- > 0; ) {
      if (c = ya(o, l, n), c === a)
        return s[i] = o, s[r] = l, t(s);
      if (c > 0)
        o = Math.floor(o / c) * c, l = Math.ceil(l / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, l = Math.floor(l * c) / c;
      else
        break;
      a = c;
    }
    return e;
  }, e;
}
function Cc() {
  var e = a7();
  return e.copy = function() {
    return r7(e, Cc());
  }, Ak.apply(e, arguments), w7(e);
}
const k7 = { class: "map_info fr-col-12 fr-col-lg-3" }, _7 = { key: 0 }, M7 = { class: "flex fr-text--sm fr-text--bold fr-mb-2w" }, C7 = { class: "fr-text--sm fr-text--bold fr-mb-1v" }, P7 = { class: "fr-text--md fr-text--bold fr-my-0" }, S7 = { class: "scale fr-mt-auto" }, E7 = { class: "scale_values" }, D7 = { class: "min fr-text--sm fr-text--bold fr-mb-0" }, A7 = { class: "max fr-text--sm fr-text--bold fr-mb-0" }, N7 = {
  __name: "MapInfo",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Qn(() => "linear-gradient(90deg," + t.data.colorMin + " 0%," + t.data.colorMax + " 100%)");
    return (s, i) => (O(), F("div", k7, [
      e.data.valueNat || e.data.valueReg ? (O(), F("div", _7, [
        g("p", {
          class: "fr-text--xs fr-mb-1v",
          style: P({ color: e.data.textMention })
        }, " Mise à jour : " + X(e.data.date), 5),
        g("p", {
          class: "fr-text--xs fr-text--bold fr-mb-1v",
          style: P({ color: e.data.textMention })
        }, X(e.data.names) + ", en France ", 5),
        i[0] || (i[0] = g("div", { class: "sep fr-mb-2w" }, null, -1)),
        g("p", {
          class: "fr-text--xs fr-text--bold fr-mb-2w",
          style: P({ color: e.data.textMention })
        }, X(ts(gi)(e.data.value)), 5)
      ])) : Mt("", !0),
      g("div", null, [
        g("p", {
          class: "fr-text--xs fr-mb-1v",
          style: P({ color: e.data.textMention })
        }, " Localisation ", 4),
        g("p", M7, [
          g("span", null, X(e.data.localisation), 1)
        ]),
        g("p", {
          class: "fr-text--xs fr-mb-1v",
          style: P({ color: e.data.textMention })
        }, " Mise à jour : " + X(e.data.date), 5),
        g("p", C7, X(e.data.names), 1),
        g("p", P7, X(ts(gi)(e.data.valueNat || e.data.valueReg || e.data.value)), 1)
      ]),
      g("div", S7, [
        i[1] || (i[1] = g("div", { class: "sep fr-my-2w" }, null, -1)),
        g("p", {
          class: "fr-text--xs fr-mb-1w",
          style: P({ color: e.data.textMention })
        }, " Légende ", 4),
        g("div", {
          class: "scale_container",
          style: P({ background: n.value })
        }, null, 4),
        g("div", E7, [
          g("span", D7, X(ts(gi)(e.data.min)), 1),
          g("span", A7, X(ts(gi)(e.data.max)), 1)
        ])
      ])
    ]));
  }
}, Dp = /* @__PURE__ */ It(N7, [["__scopeId", "data-v-25dc55bf"]]), O7 = {
  mixins: [bs],
  props: {
    config: {
      type: Object,
      required: !0
    }
  }
}, R7 = ["viewBox"], T7 = ["stroke"];
function L7(e, t, n, s, i, r) {
  return O(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: n.config.viewBox
  }, [
    g("g", {
      fill: "#5C68E5",
      stroke: n.config.colorStroke,
      "stroke-width": ".2%"
    }, [
      g("path", {
        class: "FR-2A",
        style: P({ display: n.config.displayDep["FR-2A"] }),
        d: "M930 907v3l3 3 6 4 1 3-4 1-5 1v2l2 2v8l8 2 3 1 2 4-2 2-2 1-3 4-2 3 1 6h6l1 1 5-2 2 1-3 6 3 2-5 3-2 7 8 2 11 1-5 5s-2-1-3-1v1c0 2-3 6-3 7l4 3 6 4 12 4 4 1 3 2-2 3h6l1 3h5l2-7-4-1 5-5-1-2v-3l7-4v-4h-4l-3 2v-4h5l2-4 2-13-1-5v-5l-7 4h-7l-1-5 1-1-2-2-1-9-1-2h-4l-2-1v-6l-2-2-2-1-4-5v-3h-5l-2-5h-6l-4-4 1-2-2-1h-5l-2-1h-8v-2z",
        onClick: t[0] || (t[0] = (o) => e.onclick(o)),
        onDblclick: t[1] || (t[1] = (o) => e.ondblclick()),
        onMouseenter: t[2] || (t[2] = (o) => e.onenter(o)),
        onMouseleave: t[3] || (t[3] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-2B",
        style: P({ display: n.config.displayDep["FR-2B"] }),
        d: "m990 834-5 4v4l3 3-3 3 1 3-2 2v3l4 4v5l-2 4-3 1-3-3h-5l-1-1h-4l-4 4-2 6-9 2-7 6-2 4-3-1-2-2-1 6-3 1v6l1 3-4 3-1 3h4v2h7l2 1h6l2 1-1 2 4 4h6l2 5h5v3l3 5 3 1 2 2v6l2 2h4l1 1 1 9 2 2-1 1 1 5h7l7-4-1-11 9-12v-20l-4-7-1-22-2-4-5-4-1-13 2-6-2-10-2-8-2-2z",
        onClick: t[4] || (t[4] = (o) => e.onclick(o)),
        onDblclick: t[5] || (t[5] = (o) => e.ondblclick()),
        onMouseenter: t[6] || (t[6] = (o) => e.onenter(o)),
        onMouseleave: t[7] || (t[7] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-13",
        style: P({ display: n.config.displayDep["FR-13"] }),
        d: "m686 750-10 5-3 20-11-2-3 8 3 4-12 7-3 8h11l15 1 3 3h-5l-4 6 16 3 12-2-7-6 5-4 7 3 3 7 20 1 6-3 1 4-6 5h8l-1 4-2 2h17l9 3 1 1v-7l3-3 3-2v-2l-3-2h-3l-2-2 3-3v-1l-3-1v-3h7l2-1-6-6v-7l-4-3 3-7 8-5-6-4-4 3-10 3-7-1-15-6h-8l-7-3-3-4-5-6-13-5h-1z",
        onClick: t[8] || (t[8] = (o) => e.onclick(o)),
        onDblclick: t[9] || (t[9] = (o) => e.ondblclick()),
        onMouseenter: t[10] || (t[10] = (o) => e.onenter(o)),
        onMouseleave: t[11] || (t[11] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-84",
        style: P({ display: n.config.displayDep["FR-84"] }),
        d: "M699 697h-5l-4 6 1 7 6 1-1 2-5 1-5 5-1-2 1-7-2-2-10 1-2 4 1 1 6 10v8l11 11v4l-4 3 13 5 5 6 3 4 7 3h9l14 6 8 1 9-3 4-3 1-2-7-9h-9v-3l3-3v-4l-6-3-1-5 4-2v-4l-4-1-1-5h-3l-6-5-1-4-10-1-7-1-1-4 2-5-4 4-8-1-1-3 5-6z",
        onClick: t[12] || (t[12] = (o) => e.onclick(o)),
        onDblclick: t[13] || (t[13] = (o) => e.ondblclick()),
        onMouseenter: t[14] || (t[14] = (o) => e.onenter(o)),
        onMouseleave: t[15] || (t[15] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-83",
        style: P({ display: n.config.displayDep["FR-83"] }),
        d: "M830 756h-6l-2 2h-10l-9 6-6-4-9 3-1 4-7 5-12-8-9 3-1 2 7 4-8 6-4 6 4 3v7l6 6-2 1h-7v3l4 1v1l-3 3 1 2h3l3 2v2l-3 2-3 3v7l1 2 6 2 2 8 4 1 4-3 6-4 11 1v3l-4 2h9l-2-2-1-5 5-3 5 2h2l2 3 3-2v-5l3-2h8l2-4 5 2 6-3v-9h-8l6-3 3-4 1-6 10-1 6-7-4-4v-2l-2-2 2-2v-4l-5-2h-2l-4-3v-8l-5-1-4-1-1-4z",
        onClick: t[16] || (t[16] = (o) => e.onclick(o)),
        onDblclick: t[17] || (t[17] = (o) => e.ondblclick()),
        onMouseenter: t[18] || (t[18] = (o) => e.onenter(o)),
        onMouseleave: t[19] || (t[19] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-04",
        style: P({ display: n.config.displayDep["FR-04"] }),
        d: "m841 665-4 6-5 4-2 3-5 1v3l-2 2-2 5h-11l-6-3-4 3-6-1-2 3h2v6h-1l-6-3v-3l-4-3h-2v4h-3l-6 4-4 6-1 4h2l1 5h-2l-4-3-2 1 1 2 5 7-3 1-3-2h-6l-6 6v2l-2-3-3-2-2 5-3 3h-2l1 5 4 1v4l-4 2 1 5 6 3v4l-3 3v3h8l8 9 9-3 12 8 7-5 1-4 10-3 5 4 9-6h10l2-2h6l-2-4 2-2v-2h5l1-2 5-3 4 3 2-2-6-5-6-6-3-1v-5l-4-6 2-8 1-5 4-3v-4l5-3h1v-7l5-1-3-3-3-1-2-4 1-4 7-7-1-5h1z",
        onClick: t[20] || (t[20] = (o) => e.onclick(o)),
        onDblclick: t[21] || (t[21] = (o) => e.ondblclick()),
        onMouseenter: t[22] || (t[22] = (o) => e.onenter(o)),
        onMouseleave: t[23] || (t[23] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-06",
        style: P({ display: n.config.displayDep["FR-06"] }),
        d: "M841 698h-1l-5 3v4l-4 3-1 5-2 8 4 6v5l3 1 6 6 6 5-2 2-4-3-5 3-1 2h-5v2l-2 2 2 4-4 2 1 4h4l5 2v7l4 4h2l5 2v3l-2 3 2 1v3l4 4 1-9 7 2 2-3h4v-11l9-1 7-6h6l1-4 6-4-4-8 6-5-1-5 8-3 2-8-1-5-2-3-2-5h-5l-17 6h-5l-10-7-9-3h-5v-6z",
        onClick: t[24] || (t[24] = (o) => e.onclick(o)),
        onDblclick: t[25] || (t[25] = (o) => e.ondblclick()),
        onMouseenter: t[26] || (t[26] = (o) => e.onenter(o)),
        onMouseleave: t[27] || (t[27] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-05",
        style: P({ display: n.config.displayDep["FR-05"] }),
        d: "m810 619-3 1-1 6-6 1-1-6-2-2-7 1-2 2-2 8 1 2h8l1 5 3 1v8h-7l-2 3-9-1-4 4-4-2-4 4 1 3-2 3h-10v4l3 2-1 2-6 3-7 1-3 6v5l4 3-4 5-5-3h-6v3l3 3-4 3 1 6 13 3 2 5h3l-1 11 6-5h6l3 2 3-1-5-7-1-2 2-1 4 3h2l-1-5h-2l1-4 4-6 6-4h3v-4h2l4 3v3l6 3h2l-1-6h-2l2-3 6 1 4-3 6 3h11l2-5 2-2v-3l5-1 1-3 6-4 4-6 5 1 3-4h4v-3l-5-3-1-10-4-1h-5l-10-4-1-11-6-2-1-4-3-5z",
        onClick: t[28] || (t[28] = (o) => e.onclick(o)),
        onDblclick: t[29] || (t[29] = (o) => e.ondblclick()),
        onMouseenter: t[30] || (t[30] = (o) => e.onenter(o)),
        onMouseleave: t[31] || (t[31] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-48",
        style: P({ display: n.config.displayDep["FR-48"] }),
        d: "m577 643-10 4-3 6-7-4-5 16-5 12 7 9v7l5 4v8l2 13 6 2-1 4 9-1 3 1-2 2 11 7 10-2 1-2-1-3 4-1 6 5 9 1 4-7v-5l3-3-2-1v-7l-6-6h5l2-2 2-4-2-1 1-7-6-7-3-13-9-12-7 2-1-6h-4v5l-10 3z",
        onClick: t[32] || (t[32] = (o) => e.onclick(o)),
        onDblclick: t[33] || (t[33] = (o) => e.ondblclick()),
        onMouseenter: t[34] || (t[34] = (o) => e.onenter(o)),
        onMouseleave: t[35] || (t[35] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-03",
        style: P({ display: n.config.displayDep["FR-03"] }),
        d: "m541 451-5 6h-3l-3 4-3-4-10 9v6l2 2v2l-5 4-5-1-9 2-4 5-2 4 4 6v4l3 4 2-4 3 5 4 2 4 9v3l6 4 3-1 2-6h2v-3l4-1 1 2 5-5h5l1 2-2 3 3 5 1 2 9 5 12 2h3l5 1 4-3 3 2 1 4 4 1h6l1 4 5 2v-2h9l-1-21-2-5 1-4 6-1 8-6v-14l-3-4h-5l-2-3h-7l-1-2v-5l-8-14-3-2-7 9-3 1-1-5-3-2-2 3h-5l-1-3-4 2-3 2-5-4-6-3v-5z",
        onClick: t[36] || (t[36] = (o) => e.onclick(o)),
        onDblclick: t[37] || (t[37] = (o) => e.ondblclick()),
        onMouseenter: t[38] || (t[38] = (o) => e.onenter(o)),
        onMouseleave: t[39] || (t[39] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-30",
        style: P({ display: n.config.displayDep["FR-30"] }),
        d: "m624 696-2 4-2 2h-5l6 6v7l2 1-3 3v5l-4 7-9-1-6-5-4 1 1 3-1 3-10 1-11-7-2 2v5l-4 1 1 4 5 1h6l1 7-6 3v4l5 2v2l2 2 2-2h3l1 3h4l2-7h3l5-6h6l1 9 2 3 4-2 6 3 2 4 11 6 4 10v4l-7 4-5 4 6 1v7h13l3-8 12-7-3-4 3-8 11 2 2-20 15-8v-4l-11-11v-8l-6-10-13-7-1 5-5 1-2-6-5 1-1 7-4-1-8-6-4 2v-10z",
        onClick: t[40] || (t[40] = (o) => e.onclick(o)),
        onDblclick: t[41] || (t[41] = (o) => e.ondblclick()),
        onMouseenter: t[42] || (t[42] = (o) => e.onenter(o)),
        onMouseleave: t[43] || (t[43] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-11",
        style: P({ display: n.config.displayDep["FR-11"] }),
        d: "m491 802-1 7-6-2h-7v-3l-4 1-7 2-3-4-5 4 2 4-6 2-1 6-5 2 5 5-1 3 17 8 2 13v6l1 9h-9l-3 4 12 9 7-3 8 9-1 1h1l15-7-4-5v-6h34l-1-5 8-4 10 7 4 2v-22l-4 1-4-6 3-5 6 6 6-4 3-4 1-4h-5l-1-5h-5l-4-7-4 1-3-2-1-6-2 1 1 4h-5v6l-7 3-3-7-5 3-4-3-1-5 3-4-2-4h-11l-11-2z",
        onClick: t[44] || (t[44] = (o) => e.onclick(o)),
        onDblclick: t[45] || (t[45] = (o) => e.ondblclick()),
        onMouseenter: t[46] || (t[46] = (o) => e.onenter(o)),
        onMouseleave: t[47] || (t[47] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-34",
        style: P({ display: n.config.displayDep["FR-34"] }),
        d: "m604 747-5 6h-3l-2 7h-4l-1-3h-3l-2 2-2-2v-3l-5-2v2l-7 1-3 3 1 6h-5l-6-3h-3v4l1 10h-10l-2 4-13 5-5-4-3 5-2 5 6 5-2 7-8 2 2 4-3 4 1 5 4 3 5-3 3 7 7-3v-6h5l-1-4 2-1 1 6 3 2 4-1 4 7h5l1 5h5v-2l13-3 1-4h11l3-4 19-16 12-8h5l5-4 7-4v-5l-4-9-11-6-2-5-6-3-4 2-2-2-1-9z",
        onClick: t[48] || (t[48] = (o) => e.onclick(o)),
        onDblclick: t[49] || (t[49] = (o) => e.ondblclick()),
        onMouseenter: t[50] || (t[50] = (o) => e.onenter(o)),
        onMouseleave: t[51] || (t[51] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-66",
        style: P({ display: n.config.displayDep["FR-66"] }),
        d: "m539 858-8 4 1 5h-34v6l4 5-15 7h-14l-1 3-6 2-4 4-12 2 1 4 6 5 10 3v6l6 5h5l6-8 7-1 12 4 10 8 3-3h3l2 2 2-2 1-5 11-2 3-5 6-2h7l5 5 6 1v-6l-3-4-5-2-1-32-5-2z",
        onClick: t[52] || (t[52] = (o) => e.onclick(o)),
        onDblclick: t[53] || (t[53] = (o) => e.ondblclick()),
        onMouseenter: t[54] || (t[54] = (o) => e.onenter(o)),
        onMouseleave: t[55] || (t[55] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-15",
        style: P({ display: n.config.displayDep["FR-15"] }),
        d: "m512 590-1 4 2 5-2 2h-4l-4-4-3-2v10l-7 5-4 6 1 6-2 3-2 6h-2l-3 4 2 2 1 4-4 3 1 12 7 5-5 10 5 2-2 6 4 1 3-5h5l1 1h11l2-4 3-1 1-8h2v-9l11-9 1 1 1 7 7-1 1 10h4l1 11 3 3 5-11 5-16 7 4 3-7 9-3v-3l-2-3-4-2 2-3-2-2h2l3-2-4-1-2-2-1-7-2-2-2-6h-8l-2-5h-2l-2 3-5-1-5-7-2-1-4-2-2 3h-6l-3-7z",
        onClick: t[56] || (t[56] = (o) => e.onclick(o)),
        onDblclick: t[57] || (t[57] = (o) => e.ondblclick()),
        onMouseenter: t[58] || (t[58] = (o) => e.onenter(o)),
        onMouseleave: t[59] || (t[59] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-43",
        style: P({ display: n.config.displayDep["FR-43"] }),
        d: "m571 595-2 2v2h-4l-4 3-6 1-2 2h1l2 5h8l2 6 2 2 1 7 1 2 5 1-3 2h-2l2 2-2 3 4 2 2 3v3h1l6 17 9-3 1-5h4l1 6 7-2 8 10 6-8 9-7h9l3-9h5l1-7h5l-1-2-1-5 2-4 5-2 2-8-5-6h-6l1-6-11-5h-4l-8 6-8-2-1 2-5-2-3-3-2 4-5-1-3-2-2 5-4-2-2-4h-3l-2-2-4 1h-5l-2-1-2 1z",
        onClick: t[60] || (t[60] = (o) => e.onclick(o)),
        onDblclick: t[61] || (t[61] = (o) => e.ondblclick()),
        onMouseenter: t[62] || (t[62] = (o) => e.onenter(o)),
        onMouseleave: t[63] || (t[63] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-63",
        style: P({ display: n.config.displayDep["FR-63"] }),
        d: "m537 509-5 5v-2l-5 1v3h-2l-2 6-3 1-5-4v8l3 4 1 7-4 3-1 5-4 2-7 4 1 3 8 9 1 5-3 5v5l2 3 1 6-1 2 11 4 3 6h6l2-2 4 1 2 1 5 7 5 1 2-3h1l2-2 6-1 4-3h4v-3l2-1 1 2 2-1 2 1h5l4-2 2 3h3l2 4 4 1 2-4 3 2 5 1 2-4 3 3 5 1 1-1-2-1-1-4 6-7-3-12-9-6-4-9-5-6 2-8 3-3-6-5v-1l-5-2-2-4h-5l-4-1-1-4-3-2-4 2-5-1-4 1-11-2-9-5-1-3-3-4 2-4-1-1z",
        onClick: t[64] || (t[64] = (o) => e.onclick(o)),
        onDblclick: t[65] || (t[65] = (o) => e.ondblclick()),
        onMouseenter: t[66] || (t[66] = (o) => e.onenter(o)),
        onMouseleave: t[67] || (t[67] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-65",
        style: P({ display: n.config.displayDep["FR-65"] }),
        d: "m315 784-3 2 6 10-3 4 2 4 5 6-4 5-5 13-10 8 2 5-2 2-5-1-2 12-3 2v7h1l6 3 7 6 1 4 5 5h5l12-5 5 6 7 1 2-4 4 1 7 1-1-19h4l3 1 2-2v-4l5-2-2-7-2-2-4 2 2-4-1-4-6-4 1-3 3-6 4-1v-3l3-3 1-3-6-3h-9l-1-3h-5l-1-3h-5l-1 1h-5v-3l-4-2 1-1 1-4-1-1-2-5-4-1-4-2v-6z",
        onClick: t[68] || (t[68] = (o) => e.onclick(o)),
        onDblclick: t[69] || (t[69] = (o) => e.ondblclick()),
        onMouseenter: t[70] || (t[70] = (o) => e.onenter(o)),
        onMouseleave: t[71] || (t[71] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-64",
        style: P({ display: n.config.displayDep["FR-64"] }),
        d: "m302 785-5 3-10-1-1-1-7 2-5 1-4-3-5 2-1-2h-5l-3 2h-9l-4 3h-9l-1 2-2-1 2-3-4-3-6 5h-9l-11-5-1 3-8 10-7 3h-4v4l4 4h6l1 5 5 1 1-4 7 3 4 1 1 5-2 2v7l-5 2v3l3 4 6 2 1-6 3-3-1 5 3 3h6l3 4 9 2 8 5h14l1 7 9 7 4 5 4-2 3-1 2 2 3-2 7-4v-7l3-2 2-12 5 1 2-2-2-5 9-8 6-13 4-5-5-6-2-4 3-4-6-10-9-1z",
        onClick: t[72] || (t[72] = (o) => e.onclick(o)),
        onDblclick: t[73] || (t[73] = (o) => e.ondblclick()),
        onMouseenter: t[74] || (t[74] = (o) => e.onenter(o)),
        onMouseleave: t[75] || (t[75] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-40",
        style: P({ display: n.config.displayDep["FR-40"] }),
        d: "m243 684-12 6h-3l-6 34-8 32-3 12-2 9-6 9 11 5h9l6-5 4 4-2 2 2 1 1-2h9l4-4 9 1 3-2h5l1 2 5-2 3 3 6-1 7-2 1 1 10 1 5-3-2-5 2-7 4-4-1-7 3-3-5-7 4-4 4-1 4 2 5-5 1 6 2 2 4-1v-4l1-3-1-2 1-7 4-4-2-3h-4l-5-2-7 1-2-8-4-6h-2l1 6v2l-7 1-6-3-2-8-4-5h-3l-1-3-3-2-6-2 2-2v-2l-2-2-3-1h-6l-4 4h-3l-4-3-6 3-3-2 2-3 1-5z",
        onClick: t[76] || (t[76] = (o) => e.onclick(o)),
        onDblclick: t[77] || (t[77] = (o) => e.ondblclick()),
        onMouseenter: t[78] || (t[78] = (o) => e.onenter(o)),
        onMouseleave: t[79] || (t[79] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-33",
        style: P({ display: n.config.displayDep["FR-33"] }),
        d: "m245 575-6 9-2 30-4 30-4 24v6l3-8 5-6 7 6 1 2 2 3-9 1-2-3-3 2-1 5-4 6v8h3l11-6 7 2-1 4-2 4 3 1 6-2 4 3h3l3-4 7-1 2 2 2 2v2l-1 2 6 2 3 2v3h4l4 5 2 8 6 2h6v-8h2l3 5 6-1 3-3-1-3-2-2 1-4h3l4-2-2-4-1-4 3-5 5-8 4-4 3-1v-4h-3l-2-4 1-3 5-1 3-1 4-1-1-7 4-2-5-3-4 5h-11l-1-2-4-2 3-3v-4l-1-2v-1l3-3 1-5 2-6-2-3h-4l-2-2-1 4-4-2-5 2-4-1-9-8h-5l-1-12-10-1v-5l-2 1h-10v3l3 10v11l-1 2-2-8-5-20-19-17 1-7-4-1z",
        onClick: t[80] || (t[80] = (o) => e.onclick(o)),
        onDblclick: t[81] || (t[81] = (o) => e.ondblclick()),
        onMouseenter: t[82] || (t[82] = (o) => e.onenter(o)),
        onMouseleave: t[83] || (t[83] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-24",
        style: P({ display: n.config.displayDep["FR-24"] }),
        d: "m372 566-3 6h-6v9l-17 12v12l-7 7-3 3-7-1-4 7-1 2 1 3h4l2 3-2 5-1 6-3 2v2l1 1v4l-2 3 3 2 1 3 11-1 4-5 5 3-4 2 1 7 5 4 1 7 5 2 3-3h8l3-3h3v3h8l1-2h3l3 3v3l-3 1 1 2 4 1 4-4h4l3 3 5 2 1-1 3-3 1-6h7l6-8h-3v-4l6-1v-4l3-1 4-6-4-4v-4l3-2-3-5v-8h-8l-3-2 3-3-4-4 3-3-3-2v-5l7-6-4-3-2-6-8-1-2-2 5-2-2-3-8-1-2-7-11-1-3 3-2 1-3-4 1-4-2-4z",
        onClick: t[84] || (t[84] = (o) => e.onclick(o)),
        onDblclick: t[85] || (t[85] = (o) => e.ondblclick()),
        onMouseenter: t[86] || (t[86] = (o) => e.onenter(o)),
        onMouseleave: t[87] || (t[87] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-47",
        style: P({ display: n.config.displayDep["FR-47"] }),
        d: "M345 664h-4l-3 1-5 1-1 4 2 3 3 1v3l-3 1-3 4-6 8-2 5 1 5 1 3-4 2h-3l-1 4 3 2v3l-3 3-5 1v1l2 8 7-1 5 2h4l2 3-4 4-1 7 1 2 1-3 5 4 5-6 3 4 6-1 7-1 2-5 11-1 6 5 2-2 3-1-1-5 5-1 7-2-2-4 3-3 1-6-4-5 3-8 6 3 7-1-3-8-3-11h7l2-4-6-2-3-3h-4l-4 4-4-1-1-2 3-1v-3l-3-3-3-1-2 2h-7v-2h-2l-4 3h-8l-3 3-5-2-1-7-5-4z",
        onClick: t[88] || (t[88] = (o) => e.onclick(o)),
        onDblclick: t[89] || (t[89] = (o) => e.ondblclick()),
        onMouseenter: t[90] || (t[90] = (o) => e.onenter(o)),
        onMouseleave: t[91] || (t[91] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-46",
        style: P({ display: n.config.displayDep["FR-46"] }),
        d: "m441 634-7 4h-1l-3 2v4l4 4-4 6-3 1v4l-6 1v3l3 1-6 8h-8v6l-3 3-2 5h-7l3 11 3 7 4-1 1 2-3 3 2 4h3l3 4h3l2-3 1 1v3l1 4h7l5-5 3-1 1 2 2 4h3l1-7 5 1 3-4 6 1 8-4v1l2-2-3-5-1-7 4-3h2l6-6h3l1-2h7l2-2 1-2-3-1 2-6-5-2 5-10-6-5-2-13-6-2-4 4-2-3-6 6h-4l-8-10z",
        onClick: t[92] || (t[92] = (o) => e.onclick(o)),
        onDblclick: t[93] || (t[93] = (o) => e.ondblclick()),
        onMouseenter: t[94] || (t[94] = (o) => e.onenter(o)),
        onMouseleave: t[95] || (t[95] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-09",
        style: P({ display: n.config.displayDep["FR-09"] }),
        d: "m422 817-2 2-1 1 5 4 1 2-1 2-8 1-2 3v1l3 1 2 2-2 3h-2l-4-3-4-2-5 1-7 4v7l2 1-1 5-8 2-4 4v7l2 1-3 3 1 1 11 3h5l7 7h15l6 9 6-2 15 2 1 7 12-2 4-4 6-2 1-3 14-1-8-9-7 3-12-9 3-4h9l-1-9v-6l-2-13-17-8v-3l-3-4-3 1-4 1-7-4h-2l3 4-1 2h-6l-1-4-3-5z",
        onClick: t[96] || (t[96] = (o) => e.onclick(o)),
        onDblclick: t[97] || (t[97] = (o) => e.ondblclick()),
        onMouseenter: t[98] || (t[98] = (o) => e.onenter(o)),
        onMouseleave: t[99] || (t[99] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-32",
        style: P({ display: n.config.displayDep["FR-32"] }),
        d: "m368 735-11 1-2 5-7 1-6 1-3-4-5 6-5-4-2 6v4l-4 1-2-2-1-6-5 5-4-2-4 1-4 4 5 8-3 2 1 7-4 4-2 7 3 5 9 1 3-2h6v6l4 2 4 1 2 5 1 1-1 4-1 1 4 2v3h5l1-1h5l1 3h5l1 3h9l6 3 1-1 4-2 6-8 12 1 5 3 2-2 3-8 3-7 7-3 3-2-1-2-3-1-2-3h-2l-4-4v-3l-6-6-1-3-3 1-1-2 2-3-3-3v-4l-2-3h-7v-4l4-3v-4l4-1-2-2-3 2h-5l-2-2h-1l-1 2z",
        onClick: t[100] || (t[100] = (o) => e.onclick(o)),
        onDblclick: t[101] || (t[101] = (o) => e.ondblclick()),
        onMouseenter: t[102] || (t[102] = (o) => e.onenter(o)),
        onMouseleave: t[103] || (t[103] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-31",
        style: P({ display: n.config.displayDep["FR-31"] }),
        d: "m437 754-5 2-2 3-2-2-4-1v3l-3 1 4 2-3 4-8 2-3-4h-4l-2 1h-10l-1 1 1 3 6 6v3l4 4h2l2 3 3 1 1 2-3 2-7 3-3 7-3 8-2 2-5-3-12-1-7 8-3 2-2 4-3 3v3l-4 1-3 6-1 3 6 4 1 4-2 4 4-2 2 2 2 7-5 2v4l-2 2-3-2h-4l1 20 14 1 1-18 5 1 8 4 3-3-2-1v-7l4-4 8-2 1-5-2-1v-7l7-4 5-1 4 2 4 3h2l2-3-2-2-3-1v-1l2-3 8-1 1-2-1-2-5-4 1-1 2-2h3l3 5 1 4h6l1-3-3-3h2l7 4 4-1 3-1-1-1 5-2 1-5 6-3-2-4 5-4 3 4 7-2h2v-7h-4l-5-1-4-5-2-3-8-3-2-3 2-1v-4l-2-2-4-6v-4l-1-1-4-4-2-5z",
        onClick: t[104] || (t[104] = (o) => e.onclick(o)),
        onDblclick: t[105] || (t[105] = (o) => e.ondblclick()),
        onMouseenter: t[106] || (t[106] = (o) => e.onenter(o)),
        onMouseleave: t[107] || (t[107] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-82",
        style: P({ display: n.config.displayDep["FR-82"] }),
        d: "m391 703-3 8 4 5-1 6-3 3 2 4-7 2-5 1 1 5-3 1 2 2h5l3-2 2 2-4 1v4l-4 3v4h7l2 3v4l3 3-2 3 1 2 4-2h10l2-1h4l3 4 8-2 3-4-4-2 3-1v-3l4 1 2 2 2-3 5-2 2 1 2-3-3-3h6l2-4 4-4h-4l2-5 11-2 4-2 5-2 2-2-2-5 3-6h-6v-8l-8 3-5-1-4 4-5-1-1 7h-3l-1-4-1-2-3 1-6 5h-7l-1-4v-4l-3 3h-3l-3-4h-3l-2-4 3-3v-2h-5v2l-7 1z",
        onClick: t[108] || (t[108] = (o) => e.onclick(o)),
        onDblclick: t[109] || (t[109] = (o) => e.ondblclick()),
        onMouseenter: t[110] || (t[110] = (o) => e.onenter(o)),
        onMouseleave: t[111] || (t[111] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-12",
        style: P({ display: n.config.displayDep["FR-12"] }),
        d: "m529 645-11 9v9h-2l-1 8-3 1-2 4h-11l-1-1h-5l-3 5h-1l-1 2-2 2h-7l-1 2h-3l-6 6h-2l-4 3 1 7 3 5-2 2v8h5l-3 6 3 6 3-2 1 3 4-4h6l7 4 10 2 4 7 6 2 3 8-1 3 4 7v3l7 9 6 3 4-1 2-3 3 1 6 4h10l-1-11v-3h3l6 3h5l-1-6 3-3 7-1v-5l6-3-1-7h-6l-5-1-1-4 4-1v-5l4-4-3-1-9 1 1-4-6-2-2-13v-8l-5-4 1-7-11-13-1-10h-4l-1-11-8 1v-6z",
        onClick: t[112] || (t[112] = (o) => e.onclick(o)),
        onDblclick: t[113] || (t[113] = (o) => e.ondblclick()),
        onMouseenter: t[114] || (t[114] = (o) => e.onenter(o)),
        onMouseleave: t[115] || (t[115] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-81",
        style: P({ display: n.config.displayDep["FR-81"] }),
        d: "M484 726h-6l-4 4-1-3-3 2-1-1-1 2-5 2-5 2-11 2-1 5h4l-4 4-2 4h-6l3 3-2 3 1 1 1 4 4 5 1 1 1 4 3 5 3 3v4l-3 1 2 3 8 4 2 2 4 5 5 1h4v7l2-1v3h7l6 2 1-7h3l11 2h11l8-2 2-7-6-5 2-5 3-5 5 4 13-5 2-4-6-4-3-1-2 3-4 1-6-3-7-9v-4l-4-6 1-3-3-7-6-3-4-7-10-2z",
        onClick: t[116] || (t[116] = (o) => e.onclick(o)),
        onDblclick: t[117] || (t[117] = (o) => e.ondblclick()),
        onMouseenter: t[118] || (t[118] = (o) => e.onenter(o)),
        onMouseleave: t[119] || (t[119] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-01",
        style: P({ display: n.config.displayDep["FR-01"] }),
        d: "M692 478h-4l-2 5-7 26-1 3-1 8-2 3v12l-1 3 7 4h3l4 4 1 6 5-1 7 2v-1h4l5 4 4-2 3-7 2-3 3 1 3 2 2 5 14 18 5-3v-7h5v-12l3-2v-11l1 1v-4l-2-4 1-10 4 2 2-3 3-1 4-3h-4v-7l4-3h7v-4l-2-1 5-7-1-2-6-4-15 17h-10v-5l-6-2-7 7-5 1v-5l-5-2-7-10-7-3-2-5h-3l-4 2-3 1z",
        onClick: t[120] || (t[120] = (o) => e.onclick(o)),
        onDblclick: t[121] || (t[121] = (o) => e.ondblclick()),
        onMouseenter: t[122] || (t[122] = (o) => e.onenter(o)),
        onMouseleave: t[123] || (t[123] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-38",
        style: P({ display: n.config.displayDep["FR-38"] }),
        d: "m719 544-2 3-3 7-4 2-5-4h-4v5l5 4-8 10-10 3-8 2 5 5 1 3-8 4v11h-1l2 5 7 2 4-2 5-3 7 5h6l3 6-1 3v6l-1 6v1h3l6 2 9 2 3-2 2-3h1v29l2 2h5l5 3 4 3h3l2 2 7 1v-1l-3-2v-4h10l2-3-1-3 4-4 4 2 4-4 9 1 2-3h7v-8l-3-1-1-5h-8l-1-2 2-8 2-2-2-3-4-2-2 2 1-3v-3l-3-3 1-8 4-2-1-5-7-7h-3l-2 3-5-7-2 1-3 5 2 3-1 1-3-2-10-2-4-8v-3l-4-5-1-2-14-18-2-5-3-2z",
        onClick: t[124] || (t[124] = (o) => e.onclick(o)),
        onDblclick: t[125] || (t[125] = (o) => e.ondblclick()),
        onMouseenter: t[126] || (t[126] = (o) => e.onenter(o)),
        onMouseleave: t[127] || (t[127] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-74",
        style: P({ display: n.config.displayDep["FR-74"] }),
        d: "m808 484-8 2-8 6-2-3h-4l-4 8 1 3 4 4-8 4-4 5h-8l-4 3-4 1-1 3-4-2-1 10 2 4v4l3 2v10l7 2 3 5h6l2-2h3l5 6 2 2 6-1 2-3 2-7 3-2 3-8 4-3 2 1 1 2-2 3 4 4h5l4 6-1 2 4-3 3-3 2 1v-7l12-5 2-3-1-8-8-8-3 1v-9l-6-3-1-3 4-4v-5l-6-7v-5z",
        onClick: t[128] || (t[128] = (o) => e.onclick(o)),
        onDblclick: t[129] || (t[129] = (o) => e.ondblclick()),
        onMouseenter: t[130] || (t[130] = (o) => e.onenter(o)),
        onMouseleave: t[131] || (t[131] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-42",
        style: P({ display: n.config.displayDep["FR-42"] }),
        d: "m611 506-6 1-1 4 2 5 1 21h-9v3l6 5-3 3-2 8 5 6 4 9 9 6 3 12-6 7 1 4 10 3 8-6h3l12 5-1 6h6l5 5h3l6-2 2-7 9-5v-11h1l-5-1-3 2-4-2 4-5-1-4-12-2-10-9v-3l2-2v-3l-3-2 3-3v-5l-5-4v-5l-3-3v-4l-2-5 3-3v-7h7l2-2-2-4v-4l-2-1-1 7h-4l-3 3-2-2-12-2-4 3h-3l-1-3-5-1-1-5z",
        onClick: t[132] || (t[132] = (o) => e.onclick(o)),
        onDblclick: t[133] || (t[133] = (o) => e.ondblclick()),
        onMouseenter: t[134] || (t[134] = (o) => e.onenter(o)),
        onMouseleave: t[135] || (t[135] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-69",
        style: P({ display: n.config.displayDep["FR-69"] }),
        d: "M671 501h-4l-3 4-2-3-4 3-4-3h-4l-1 1-1 4 2 2v3l2 4-1 2h-8v7l-3 3 2 6v3l3 3v5l5 4v5l-3 4 3 1v3l-2 2v3l10 9 12 2 1 4-4 4 4 2 3-1 5 1 7-4-1-3-5-5 8-2 10-3 8-10-5-4v-4l-7-2-5 1-1-6-4-4h-3l-7-4 1-3v-12l2-3 1-8-1 2h-3l-1-7z",
        onClick: t[136] || (t[136] = (o) => e.onclick(o)),
        onDblclick: t[137] || (t[137] = (o) => e.ondblclick()),
        onMouseenter: t[138] || (t[138] = (o) => e.onenter(o)),
        onMouseleave: t[139] || (t[139] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-73",
        style: P({ display: n.config.displayDep["FR-73"] }),
        d: "M754 535v11l-3 2v12h-5v7l-5 3 1 2 4 5v3l5 8 9 2 3 2 1-1-2-3 3-5 2-1 5 7 2-3h3l7 7 1 5-4 2-1 8 3 3v3l-1 3 2-2 4 2 2 3 7-1 2 2 1 6 6-1 1-6 3-1h7l11-4 4 2h4v-4l5-3 2-2 9-3 1-7-1-2 5-9-5-2-2-5-9-6s1-11-1-13c-2 0-7 1-7 1l-5-7v-5l-2-1-3 3-4 3 1-2-4-6h-5l-4-4 2-3-1-2-3-1-3 3-3 8-3 2-2 7-2 3-6 1-2-2-5-6h-3l-2 2h-6l-3-5-7-2v-10z",
        onClick: t[140] || (t[140] = (o) => e.onclick(o)),
        onDblclick: t[141] || (t[141] = (o) => e.ondblclick()),
        onMouseenter: t[142] || (t[142] = (o) => e.onenter(o)),
        onMouseleave: t[143] || (t[143] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-07",
        style: P({ display: n.config.displayDep["FR-07"] }),
        d: "m677 599-8 5-2 7-6 2h-3l-2 9-5 2-2 4 1 5 1 2h-6v7h-5l-3 9h-9l-9 7-6 8 1 2 3 13 6 6-1 8 8 5v10l4-2 8 6 4 1 1-7 5-1 2 5h5l1-5 12 6 2-4 5-1v-7l-1-2h-2v-3l2-3-2-3 1-7 4-5v-8l-1-9 3-1 1-4 3-7 2-5-3-8-2-6-3-11v-15h-1z",
        onClick: t[144] || (t[144] = (o) => e.onclick(o)),
        onDblclick: t[145] || (t[145] = (o) => e.ondblclick()),
        onMouseenter: t[146] || (t[146] = (o) => e.onenter(o)),
        onMouseleave: t[147] || (t[147] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-26",
        style: P({ display: n.config.displayDep["FR-26"] }),
        d: "m695 601-5 3-4 2-5-2v15l3 11 2 6 3 8-2 5-3 7-1 4-4 1 2 9v8l-4 5-1 7 1 3-1 3v3h2l1 2v7h5l2 2-1 7 1 2 5-5 5-1 1-2-6-1-1-7 4-6h5l5 5-5 6 1 3 8 1 4-4-2 5v4l8 1 10 1 2 4 5 5h5l3-3 2-6 3 3 2 3 1-14h-3l-2-5-13-3-1-6 4-3-4-3 1-3h6l5 3 4-5-4-3v-5l3-6 7-1 6-3 1-1-7-1-2-2h-3l-4-3-5-3h-5l-2-2v-29h-1l-2 3-3 2-9-2-6-2-3 1v-2l1-6v-5l1-4-4-6h-5z",
        onClick: t[148] || (t[148] = (o) => e.onclick(o)),
        onDblclick: t[149] || (t[149] = (o) => e.ondblclick()),
        onMouseenter: t[150] || (t[150] = (o) => e.onenter(o)),
        onMouseleave: t[151] || (t[151] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-17",
        style: P({ display: n.config.displayDep["FR-17"] }),
        d: "m260 492-5 1-11 6 3 3-6 5-1 3-5 1-3-3-7-1-1-4-4-3-6 3 3 5h5l6 4 3 3 8-1 2 4 4 1 2 5 4 1-1 4-4-1-1 3 3 4-2 8h-4v5l1 2h-5l-1-3 4-4-2-3-1-1-1-9-6-1-5-6-1 13 8 6 1 7 2 8v8l5-1 7 6 5 3 1 4 4 1 11 11 3 13h10l2-2 1 5 9 1 1 12h6l8 9h4l5-2 4 2 3-6 2-5-7-5-2-3-4-4-7 1-3-1v-2l4-1v-1l-3-1-2-1 5-4v-3l-2-2 1-2 1-4-3-3-2-3-4-5-3-1 2-4h-1l-1-8-3-2 4-2h6l2-2h4l1 2h4l3-1 1-7 3-11-3-3-1-4-5-3-7-4-8 1-5-7h-7l-6-5v-2l-4-5-1-5-5-4-7 3z",
        onClick: t[152] || (t[152] = (o) => e.onclick(o)),
        onDblclick: t[153] || (t[153] = (o) => e.ondblclick()),
        onMouseenter: t[154] || (t[154] = (o) => e.onenter(o)),
        onMouseleave: t[155] || (t[155] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-19",
        style: P({ display: n.config.displayDep["FR-19"] }),
        d: "m475 561-1 3-6 2-3 4h-2l-4-1-3 4-4 1-3 5h-4l-2 2h-7l-3 4-2-1-5 6-5-2-2 5 2 4 4 3-7 6v5l3 2-3 3 4 4-3 3 3 2h8v8l3 5h1l7-4 10 4 7 10h4l6-6 2 3 4-4 5 2 1 1 4-3-1-4-2-2 3-4h2l2-6 2-3-1-6 4-6 7-5v-9l3 1 4 4h4l2-2-2-5 2-6-1-6-2-3v-5l3-5-1-5-1-1-3 3h-7l-3 3h-4l-4-3-1-3h-9l-2-2z",
        onClick: t[156] || (t[156] = (o) => e.onclick(o)),
        onDblclick: t[157] || (t[157] = (o) => e.ondblclick()),
        onMouseenter: t[158] || (t[158] = (o) => e.onenter(o)),
        onMouseleave: t[159] || (t[159] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-23",
        style: P({ display: n.config.displayDep["FR-23"] }),
        d: "m457 487-2 6h-6l-2-1h-4l-3-2-7 7v6l-4 8 1 5 5 1 3 8 3 3-1 15 7-2 2 3-4 4v3l4 1 6-1 2-3h1l-1 5 6 2 4 4v2h-2v4l2 2 1-1 6-1 1-4h3l2 2h9l2 3 3 3h4l3-3h7l3-3-7-8-1-3 7-4 4-2 1-5 4-3-1-7-3-4-1-11-4-9-4-2-3-5-2 4-3-4v-4l-4-6-12 1-7-2z",
        onClick: t[160] || (t[160] = (o) => e.onclick(o)),
        onDblclick: t[161] || (t[161] = (o) => e.ondblclick()),
        onMouseenter: t[162] || (t[162] = (o) => e.onenter(o)),
        onMouseleave: t[163] || (t[163] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-87",
        style: P({ display: n.config.displayDep["FR-87"] }),
        d: "m427 493-3 3-10-1h-1l-6 1-5 4v4h-7l-5 6-3 2 3 3-1 9-2 4 3 3h5l1 5 1 4-7 1-3 1 1 9-5 3-3 1-2 5h-3l-1 6h8l2 4-1 4 3 4 2-1 3-3 11 1 2 7 8 1 2 3-5 2 2 2 8 1v2l2-4 5 1 5-6 2 1 3-4h7l2-2h4l3-5 4-1 3-4 4 1h2l2-3-2-2v-4h2v-2l-4-4-6-2 1-5h-1l-2 3-7 1-3-1v-3l4-4-2-4-7 3 1-15-3-3-3-8-5-1-1-5 4-8v-6 1z",
        onClick: t[164] || (t[164] = (o) => e.onclick(o)),
        onDblclick: t[165] || (t[165] = (o) => e.ondblclick()),
        onMouseenter: t[166] || (t[166] = (o) => e.onenter(o)),
        onMouseleave: t[167] || (t[167] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-86",
        style: P({ display: n.config.displayDep["FR-86"] }),
        d: "m333 409-7 8-2 3 1 8h3v4l2 6 2 5-3 2 1 2-1 3v1l3 3v2l-2 3-4 6 4 2 2 3-2 4v2l-3 4v3h2v8l3 2-2 3 1 2 3 4 2-3v-1l3-2 2 2v5l-2 3-2 5 2 4 6 2-1 3-5 1 4 6 7-1 5-1 6 3 2-2-1-5 3-2 3 4 2 3 7-3 3-3h6l3 2 1-7-3-3 3-2 5-6h7v-5l5-3 9-2 1-5-4-2-2-8h-6l-3-4-7-5 1-5v-7l-6-6-1-5-6-7-3-8-2-1-3-4-3 2 1 3-9 3h-11v-12l-9-2v-4l-6-2-2-5h-3z",
        onClick: t[168] || (t[168] = (o) => e.onclick(o)),
        onDblclick: t[169] || (t[169] = (o) => e.ondblclick()),
        onMouseenter: t[170] || (t[170] = (o) => e.onenter(o)),
        onMouseleave: t[171] || (t[171] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-16",
        style: P({ display: n.config.displayDep["FR-16"] }),
        d: "m365 519-3 2 1 5-2 2-6-3-5 1-7 1-4-6h-2l-6 4-5 1v2l-3 4 1 1-4 3-2 11-1 7-3 1h-4l-1-2h-4l-2 2h-6l-4 2 3 2 1 8h1l-2 3 3 2 4 4 2 4 3 3-1 4-1 2 2 2v3l-5 3 2 2 3 1v1l-4 1v2l3 1 7-1 4 4 2 3 7 5 2-2 7 1 3-3 7-7v-12l17-12v-9h6l3-6h2l1-6h3l2-5 3-1 5-3-1-9 3-1 7-1-1-4-1-5h-5l-3-3 2-4v-3l-3-1h-6l-3 3-7 3-2-3z",
        onClick: t[172] || (t[172] = (o) => e.onclick(o)),
        onDblclick: t[173] || (t[173] = (o) => e.ondblclick()),
        onMouseenter: t[174] || (t[174] = (o) => e.onenter(o)),
        onMouseleave: t[175] || (t[175] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-79",
        style: P({ display: n.config.displayDep["FR-79"] }),
        d: "m320 416-10 1-9 1-10 1v5l-5 3-11-2-7 3 3 5v4l9 8-2 4 6 7-3 3 4 6 1 10-2 3 2 4-2 5v3l3-3 3 4-5 3-1 2-5 1-4 2h-1l1 6 4 4v2l5 5h8l5 7 8-1 7 4 5 3 1 4 3 3 3-2-1-2 3-4v-2l5-1 6-4 7-1 1-3-6-2-2-4 2-5 2-3v-6l-2-1-3 1v2l-2 3-3-4-1-2 2-3-3-2v-8h-2v-3l3-4v-2l2-4-2-3-4-2 4-6 2-3v-2l-3-3v-1l1-3-1-2 3-2-2-5-2-6v-4h-3l-1-8v1l-3-2z",
        onClick: t[176] || (t[176] = (o) => e.onclick(o)),
        onDblclick: t[177] || (t[177] = (o) => e.ondblclick()),
        onMouseenter: t[178] || (t[178] = (o) => e.onenter(o)),
        onMouseleave: t[179] || (t[179] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-22",
        style: P({ display: n.config.displayDep["FR-22"] }),
        d: "m113 220-3 3-8 1-2 2-6-4-7 5 2 4-5 7-2 9 5 1-1 4 3 2-2 3-3 1 1 4 4 1-4 1v5l3 3v11l-1 2 1 5 6 1v3l4 1 3-2 2 2 7 2 5-3 2-3h4l6 5 5-1 4 4h2l2 3h5l1-2 2 4 4 1 6-3v-4l4-1h3l3 5 7 1 4-4 4-9 5-2 2-3 3 2 6-1 2-16 1-7-1-4-3-1-2-11-3 3-7-1v4l-5 1v-5l-4-1-2 2v-7l-4 4-7-2-2 5-13 7v4h-3v-7l-8-4 1-6-7-5v-6l-5-1v-6l-4-1 1-4h-8l-1 4z",
        onClick: t[180] || (t[180] = (o) => e.onclick(o)),
        onDblclick: t[181] || (t[181] = (o) => e.ondblclick()),
        onMouseenter: t[182] || (t[182] = (o) => e.onenter(o)),
        onMouseleave: t[183] || (t[183] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-85",
        style: P({ display: n.config.displayDep["FR-85"] }),
        d: "m240 417-2 3h-6l3 3-2 6-6 2-2-2 1-6-1-3h-4l-2 2 1 9 3 4-3 3-5-1-7-2-2-6h-5l-6-3-2-4-7-4-10 14-1 9 11 10v4h3l7 20 7 4 8 7h8l3 7h8l4 6 8 4v-6l2 2 11-6 5-1 2 6 7-3 6 4 4-2 5-1 1-2 5-3-3-4-3 3v-3l2-5-2-4 2-3-1-10-4-6 3-3-6-7 2-4-9-8v-4l-3-5-5-4h-9l-3-2-4-1-5-4z",
        onClick: t[184] || (t[184] = (o) => e.onclick(o)),
        onDblclick: t[185] || (t[185] = (o) => e.ondblclick()),
        onMouseenter: t[186] || (t[186] = (o) => e.onenter(o)),
        onMouseleave: t[187] || (t[187] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-50",
        style: P({ display: n.config.displayDep["FR-50"] }),
        d: "m205 136-1 3 7 7v7l-3 4 2 2h1v7l2 6 8 9 2 9 2 2v13l4 9v10l-4 9 5 13 8 2v4l-3 2h-7l1 4 2 7 6 5 3 1 3-4h3l4-5 4 3h4l3 1v1l6 1 4-3 5 2 6-5 2-7v-3l1-3-4-4-9-6h-7l-7-9 6-2 2-5-3-2 3-3 2 2 5-3 3-4 1-5-2-4 2-2-3-4 3-4-3-3-2 4-5-3-7-6v-3l2-3v-3h-4v-8l-10-11 3-8h4l-3-9-16-1-8 6-9-6z",
        onClick: t[188] || (t[188] = (o) => e.onclick(o)),
        onDblclick: t[189] || (t[189] = (o) => e.ondblclick()),
        onMouseenter: t[190] || (t[190] = (o) => e.onenter(o)),
        onMouseleave: t[191] || (t[191] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-56",
        style: P({ display: n.config.displayDep["FR-56"] }),
        d: "m88 289-6 3h-4l-5 3v3l3 7 1 5 10 2 4 4 2-3 3 4-2 2v5h-3l-2 4h-4l-2 7 4 6 6 2 2-4-1 4 5 2 7 7 2 4-1 5-1 4 5 4 2-3-2-3v-6l4 1 2-5 1 3 4 4 3-4-3-5 4 6 5-1-1-3 5 2 4 4-2 3-5-2-5-2-3 3 4 2 3 5 20-2 5 1-2 2v4h2l3-3 2 2h6l7-4 10-3 1-11 2-1-4-7 3-3-1-1-1-2 3-1 3-4-1-3h-3l-1-4 2-3-3-6-4-2h-5l-2-1v-2l3-2 1-6-1-4-1 1h-7l-3-6h-3l-4 1v4l-6 4-4-2-2-4-2 2h-4l-2-3h-2l-4-4-5 1-6-5-5 1-1 3-6 3-7-3-1-2-3 2h-4v-3l-6-2z",
        onClick: t[192] || (t[192] = (o) => e.onclick(o)),
        onDblclick: t[193] || (t[193] = (o) => e.ondblclick()),
        onMouseenter: t[194] || (t[194] = (o) => e.onenter(o)),
        onMouseleave: t[195] || (t[195] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-29",
        style: P({ display: n.config.displayDep["FR-29"] }),
        d: "m60 231-5 4-4-2-8 1-1 4-5 1-1-4-8 1v3h-6l-2-2-3 2-1 4H7l-6 6 5 4-6 4 2 4-2 7 6 1 2-2 1 1 14-1 9-7-8 8 1 3 7-3-1 5h7v3l-8-1-7-2-9-3-5 5 7 3-1 9 2-1 4-6 8 4 3 1 2 5-2 4h-9l-8 1-12 1-2 3 3 2h4l4 3 4-1 8 9 2 9-3 5 8 2h8l2-4-4-4 4 1h3l6 3h3v-7l2 7 5 7 10 1v-2l2 3 7 1h4l1 1 1-7h4l3-4h2l1-5 1-2-3-3-2 2-4-4-9-1-2-6-3-7v-2l5-4h4l6-3-1-4 1-2v-11l-3-3v-5l4-1-4-1-1-4 3-1 2-3-3-2 1-4-5-1 2-9-6-4-10 1v7h-3v-3h-5z",
        onClick: t[196] || (t[196] = (o) => e.onclick(o)),
        onDblclick: t[197] || (t[197] = (o) => e.ondblclick()),
        onMouseenter: t[198] || (t[198] = (o) => e.onenter(o)),
        onMouseleave: t[199] || (t[199] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-35",
        style: P({ display: n.config.displayDep["FR-35"] }),
        d: "m199 244-4 3 3 12 3 1 1 3-1 7-2 16-6 1-3-2-2 3-5 2-4 9-3 3 1 3-1 6-3 3v2l2 1h5l5 2 3 6-3 3 1 4h4v4l-3 3-3 2 2 1v2l-3 2 4 7 7-3 22-2 2-4 3-3 8-1 1-4h5l3 5 8 2 1-3 2-7 5-11 2-2 6 1v-10l-2-2v-11l-1-3v-6l3-4v-7l-2-1 1-11-3-1h-4l-4-3-4 5h-3l-3 4h-3l-6-6-2-7-1-4h-18l-7-4 5-6z",
        onClick: t[200] || (t[200] = (o) => e.onclick(o)),
        onDblclick: t[201] || (t[201] = (o) => e.ondblclick()),
        onMouseenter: t[202] || (t[202] = (o) => e.onenter(o)),
        onMouseleave: t[203] || (t[203] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-44",
        style: P({ display: n.config.displayDep["FR-44"] }),
        d: "m230 336-1 4-8 1-3 4-1 3-23 2-9 5-1 10-10 4-7 3h-5l-3-2-3 3h-1l1 1-6 7 1 1 2 3-4 5 4 2 7 2v-3l4 5h7l5-5h6l-7 3 1 4 1 3-4 4h-4l1 5 7-1 10 9h-1l7 4 2 4 6 3h5l2 6 7 2 5 1 3-3-3-4-1-9 2-2h4l1 3-1 6 2 2 6-2 2-6-3-3h6l2-3h2l5 4 3 1v-4l-2-4h-6l2-2v-3l3-1 1-4-1-1v-5h-4l-4-5v-3l4-3 8-1h11l4-2-1-7-6-5h-6l-2-1v-6l4-4-3-4-3-6-3-3v-4l-1-1-7-2-3-4z",
        onClick: t[204] || (t[204] = (o) => e.onclick(o)),
        onDblclick: t[205] || (t[205] = (o) => e.ondblclick()),
        onMouseenter: t[206] || (t[206] = (o) => e.onenter(o)),
        onMouseleave: t[207] || (t[207] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-49",
        style: P({ display: n.config.displayDep["FR-49"] }),
        d: "m247 341-1 2h-1v5l4 2 3 7 3 4-4 4v6l2 1 6-1 6 5 1 8-4 2h-11l-8 1-4 2v4l4 5h4v5l2 1-2 4-3 1v3l-2 2h6l3 4v4l3 2h9l5 4 7-3 11 2 5-3v-5l10-1 9-1 10-1 1 3 3 2 2-4 7-8h3l4-15 5-6v-8l4-5v-2l-2-2 1-3-5-1-15-10-14-4h-5v-4l-4-2h-3l-6-3-5 5h-9l-4-2-11-4-2 3-6-3h-6z",
        onClick: t[208] || (t[208] = (o) => e.onclick(o)),
        onDblclick: t[209] || (t[209] = (o) => e.ondblclick()),
        onMouseenter: t[210] || (t[210] = (o) => e.onenter(o)),
        onMouseleave: t[211] || (t[211] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-72",
        style: P({ display: n.config.displayDep["FR-72"] }),
        d: "M358 273h-9l-10 9h-5l-7 2-2 4-1 7 1 5-6 5-1 3 1 3-2 3 1 2h-6l-1 3 3 6-1 2-2 2-5 1-1 1 2 2v11l-1 3 3 2v4h5l14 4 15 10 5 1 3-4 7 5h4l-2-8 4 3 2-3 11-3-2-5 3-3 5-2 5-6v-7h4l1-5 1-8-4-3 3-5 4-6-5-3-5-1-5-7h-1l-1 3v-2h-7l-4-6-6-2-2-13z",
        onClick: t[212] || (t[212] = (o) => e.onclick(o)),
        onDblclick: t[213] || (t[213] = (o) => e.ondblclick()),
        onMouseenter: t[214] || (t[214] = (o) => e.onenter(o)),
        onMouseleave: t[215] || (t[215] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-53",
        style: P({ display: n.config.displayDep["FR-53"] }),
        d: "M321 263h-3l-2 4-5 2-10-1-10 5-3-2-6 4-4-3-2-5-6-2-3 3-6-1-1 10 2 1v7l-3 4v6l1 3v11l2 2v10l-6-1-2 2-5 11-2 7-1 1 7 1h5l6 4 3-3 10 4 5 2h9l4-5 7 3h4l1-3v-11l-2-2 1-2h5l2-2 1-2-3-6 1-3h6l-1-2 2-4-1-2 1-3 6-5-1-4 1-8 2-4 7-2h-1l-2-6-5-2-1-8z",
        onClick: t[216] || (t[216] = (o) => e.onclick(o)),
        onDblclick: t[217] || (t[217] = (o) => e.ondblclick()),
        onMouseenter: t[218] || (t[218] = (o) => e.onenter(o)),
        onMouseleave: t[219] || (t[219] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-14",
        style: P({ display: n.config.displayDep["FR-14"] }),
        d: "m359 173-9 2-13 8-16 6-12-7-30-4-7-4-10 3v4l-2 2v3l7 7 5 2 2-4 3 3-3 4 3 4-2 2 2 4-1 5-3 5-5 2-2-1-3 2 3 3-2 4-6 2 7 9h7l5 4 7-3 6-6 7 2 7-4 4-2 4 5 7-2 6 4 7-3 7-5 4-5h3l1 3h2l1-3 7-1 2 1 7-1 2-4-1-3-4-1v-3l3-2 1-4-2-8-5-7 4-2v-1l-4-1z",
        onClick: t[220] || (t[220] = (o) => e.onclick(o)),
        onDblclick: t[221] || (t[221] = (o) => e.ondblclick()),
        onMouseenter: t[222] || (t[222] = (o) => e.onenter(o)),
        onMouseleave: t[223] || (t[223] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-61",
        style: P({ display: n.config.displayDep["FR-61"] }),
        d: "m366 223-7 1-2-1-7 1-1 3h-2l-1-3h-3l-4 5-7 5-7 3-6-4-7 2-4-5-4 2-7 4-7-2-6 6-7 3 4 2 4 4-1 3v3l-2 7-6 6 2 4 4 3 6-4 3 2 10-5 10 1 5-2 2-4h3l4 3 1 8 5 2 2 6h6l10-9h9l3 4 2 13 6 2 4 6h7v2l1-4h1l6 8 3 1v-9l-2-3-1-3 6-3 5-1 4-5-1-13-8-7v-6l-6-4 2-4-2-5-5-2-3-3-2-5-10-1-3-4z",
        onClick: t[224] || (t[224] = (o) => e.onclick(o)),
        onDblclick: t[225] || (t[225] = (o) => e.ondblclick()),
        onMouseenter: t[226] || (t[226] = (o) => e.onenter(o)),
        onMouseleave: t[227] || (t[227] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-28",
        style: P({ display: n.config.displayDep["FR-28"] }),
        d: "m441 225-2 2v6l-8 4v5l-2 2h-9l-4-1-13 7h-5l-5 4 1 1v6l8 7v13l-3 5-6 1-5 3 1 3 2 3v9h1l5 3-2 3 4 2 5-1h4v1l-4 2 3 1h5l2 5 3 1 2 5 8 3 5-1 4-4 4 1 1-2v-3l2-1 3 2 3-2v-2l2-2 3 1 2 2 4-2h5l3-3 2-7h3l-1-7 3-3-1-2 1-1h-1l-1-9-1-2-1-4-7-2-3-4-1-7-5-1v-4l-6-4-2-6 2-4-2-3v-4l1-4-3-3-1-4z",
        onClick: t[228] || (t[228] = (o) => e.onclick(o)),
        onDblclick: t[229] || (t[229] = (o) => e.ondblclick()),
        onMouseenter: t[230] || (t[230] = (o) => e.onenter(o)),
        onMouseleave: t[231] || (t[231] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-89",
        style: P({ display: n.config.displayDep["FR-89"] }),
        d: "m572 283-3 3-14-1-6 3-3 6 3 3-4 5-4 4 7 6 2 6 4 5v6l-9 8 3 4v5l-6 4h-7l1 4 5 6 1 6 1 4-2 1 5 1h3l2-3h2l3 2-1 3 3 2h3l5 3 2-1 2 2 2-1 3-2 4 1 2-1v-6h1l1 3 4 3v4h6l8 7 5 1v-3l2-3 1 3-1 2 1 2 3-1h3v5l3 2 2-1 6-4v-1l-4-2v-4l4-1 1-2-1-2v-4l3-4 4-9 1-4 3-1v-1l-2-1v-3l5-3 1-5-2-3h-3l-1-1v-4l4-3v-3l-1-2-2 4-2-1-2-4-8 4-14-1-2-4-4-5v-7l-6-7-4 3-6-5 1-10-9-10h-5l-2-2z",
        onClick: t[232] || (t[232] = (o) => e.onclick(o)),
        onDblclick: t[233] || (t[233] = (o) => e.ondblclick()),
        onMouseenter: t[234] || (t[234] = (o) => e.onenter(o)),
        onMouseleave: t[235] || (t[235] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-70",
        style: P({ display: n.config.displayDep["FR-70"] }),
        d: "m766 317-6 1-2 3-3 3-3-3-1 1 1 2-4 2 1 3-3 2v5h-6v2l-5 1v5h4l-2 2-1 8h-3l-6 1-6-1-5 1v4l4 1 3 6 1 3-5 5-2 1-2 2 4 1 1 6h3l1 8 1 1v1l3 1 3 3h5l2-2h6l7-6h2l3-2 7 1 6-5 4-1 2-4 3-1 3-5 5-4 5-1 3 3 7-1v-4l3-1 2-3h4l3-3v-9l-1-6v-4l3-2 3-2-12-7-3-3-3-2-3 1-1 2-2 2h-2l-6-6h-7l-4 2-2 1-5-4v-4z",
        onClick: t[236] || (t[236] = (o) => e.onclick(o)),
        onDblclick: t[237] || (t[237] = (o) => e.ondblclick()),
        onMouseenter: t[238] || (t[238] = (o) => e.onenter(o)),
        onMouseleave: t[239] || (t[239] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-76",
        style: P({ display: n.config.displayDep["FR-76"] }),
        d: "m431 106-2 3-16 12-27 7-18 6-15 8-9 13-1 10 7 6 10 2h-1l8-1 4-4 3-1 4 6h5l2 4 8-1 9 6-5 2 4 3h2l3 5h4l1-3-3-2 9-3 9-1 2-6 5-4 8-1 10 5 5 1 1-3 3-5 1-2h-3v-6l-2-4 1-7 1-4h-2l1-4 4-4-4-6-1-7-16-15-2-4h-4z",
        onClick: t[240] || (t[240] = (o) => e.onclick(o)),
        onDblclick: t[241] || (t[241] = (o) => e.ondblclick()),
        onMouseenter: t[242] || (t[242] = (o) => e.onenter(o)),
        onMouseleave: t[243] || (t[243] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-27",
        style: P({ display: n.config.displayDep["FR-27"] }),
        d: "m374 167-3 1-4 4-8 1 1 14 4 1v1l-4 2 5 7 2 8-1 4-3 2v3l4 1 1 3-3 9 3 3 10 1 2 5 3 3 5 2 2 5-2 4 5 3 5-4h5l13-7 4 2h9l2-3v-5l8-4v-6l1-2v-1l2-2-3-1v-2l-2-3 2-2 10-3 2-4 2-8 3-4 1-4 3 2 2-1-1-3-1-8-4-3-5-1-10-5-8 1-5 3-2 7-9 1-9 3 3 2-1 3h-4l-3-5h-2l-4-3 5-2-9-6-8 1-2-4h-5z",
        onClick: t[244] || (t[244] = (o) => e.onclick(o)),
        onDblclick: t[245] || (t[245] = (o) => e.ondblclick()),
        onMouseenter: t[246] || (t[246] = (o) => e.onenter(o)),
        onMouseleave: t[247] || (t[247] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-37",
        style: P({ display: n.config.displayDep["FR-37"] }),
        d: "m376 356 1 2-11 3-2 3-4-3 2 8h-4l-7-5-4 7 2 2v2l-4 5 1 8-6 7-4 14 2 6 6 2v4l9 2v12h10l10-3-1-4 3-1 3 4 2 1 3 8 6 7 1 5 5 6 3-1 4-3 3-15 2-5 1-7 6-2 4 1 2 2 3-4 3-3v-3h3l1-3-3-4 1-2-2-2-6-8h-7l-2-3v-12l-3-8v-9l-4-1-4-3h-1l-4 3-2-2-1-3 3-2v-1l-1-1z",
        onClick: t[248] || (t[248] = (o) => e.onclick(o)),
        onDblclick: t[249] || (t[249] = (o) => e.ondblclick()),
        onMouseenter: t[250] || (t[250] = (o) => e.onenter(o)),
        onMouseleave: t[251] || (t[251] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-45",
        style: P({ display: n.config.displayDep["FR-45"] }),
        d: "m490 289-5 4-10 1-1 1 1 2-3 3 1 7h-3l-2 7-3 3h-5l-4 2-2-2-3-1-2 2v3l-3 1-3-2-2 1v3l-1 2h4v2l-2 4v2h2l2 2v2l-4 4 2 5v2l4 3h4l3 3 1 4 3 4 4-1 2-3h5l2 2h3l2-2h13l3 5 4 1 3 3h4l1-2h2l3 4h6l2 2 4 6 2 1h2v-5h3l2 3 2 1 4-1-1-1v-4l7-2-1-4-1-6-5-6-1-4h8l5-4v-5l-3-4 9-8v-6l-4-5-2-6-7-6-9 5v-3h-4l-1 3h-14l-4 2-3-2 6-4-1-7-4-2-4-5-9-1z",
        onClick: t[252] || (t[252] = (o) => e.onclick(o)),
        onDblclick: t[253] || (t[253] = (o) => e.ondblclick()),
        onMouseenter: t[254] || (t[254] = (o) => e.onenter(o)),
        onMouseleave: t[255] || (t[255] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-36",
        style: P({ display: n.config.displayDep["FR-36"] }),
        d: "m455 401-3 1h-4l-6 2-1 3-1-1h-6l-3 2-3 1-1 2 3 4-1 3h-3v3l-3 3-3 4-2-2-4-1-6 2-1 7-2 5-3 15-4 3-3 1h1v7l-1 5 7 5 3 4h6l2 8 4 2-1 6h-3 1l10 1 3-3 6 5 7-8 3 2h4l2 1h6l2-6 18 3 7 1h3l1-3 3-4v-3l-3-4 1-1v-5l2-2v-1l-3-2-1-4-5-3v-3l4-2v-2l-4-3-1-2 3-1-1-2 5-4-1-1h-3l-2-2v-2l2-3v-2l-4-6v-5l-2-1h-5l-4 1h-5l-2-2-1-2 4-3v-4l-5-4z",
        onClick: t[256] || (t[256] = (o) => e.onclick(o)),
        onDblclick: t[257] || (t[257] = (o) => e.ondblclick()),
        onMouseenter: t[258] || (t[258] = (o) => e.onenter(o)),
        onMouseleave: t[259] || (t[259] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-41",
        style: P({ display: n.config.displayDep["FR-41"] }),
        d: "m395 311-2 3-3 5 4 3-1 8-1 5h-4v7l-5 6-5 2-3 3 1 3 18 1 1 1v1l-3 2 1 3 2 2 4-3h1l4 3 4 1v9l3 7v13l2 3h7l6 9 1 1h1l3-1 3-2h6l1 1 1-3 6-2h4l3-1 3 3 5 4 5-1v-4l2-3h2l2 2 7-1 5-2-1-2-1-2v-3l3-6 5-2v-4l1-2-3-1-2-4-4-1-1-2 5-4 5-3-3-4h-13l-2 2h-3l-2-2h-5l-2 3-4 1-3-4-1-4-3-3h-4l-4-3v-2l-2-5 4-4v-2l-2-2h-2v-2l2-3v-3h-3l-5-1-4 4-5 1-8-2-2-6-3-1-2-4h-5l-3-2 4-2v-1h-4l-5 1z",
        onClick: t[260] || (t[260] = (o) => e.onclick(o)),
        onDblclick: t[261] || (t[261] = (o) => e.ondblclick()),
        onMouseenter: t[262] || (t[262] = (o) => e.onenter(o)),
        onMouseleave: t[263] || (t[263] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-18",
        style: P({ display: n.config.displayDep["FR-18"] }),
        d: "m493 363-5 3-5 4v2l5 1 2 4 3 1-1 2v4l-5 2-3 6v3l1 2 1 2-5 2-7 1-2-2h-2l-2 3v4l-5 1v4l-4 3 1 2 2 2h5l4-1h5l2 2v4l4 6v2l-2 3v2l2 2h3l1 1-5 4 1 2-3 1 1 2 4 3v2l-4 2v3l5 3 1 4 3 2v1l-2 2v5l-1 1 3 4v3l-3 4v3l8-1 2-4 4-5 9-2 5 1 5-4v-2l-2-2v-6l10-9 3 4 3-4h3l5-6h9v2l3-9-2-3v-5l1-9-4-4 1-9-4-7v-5l-6-5-2-5 4-4v-7l-4-4-4 1-1-1-3-3h-3v5h-2l-2-1-4-6-2-2h-6l-3-4h-2l-1 2h-4l-3-3-4-1z",
        onClick: t[264] || (t[264] = (o) => e.onclick(o)),
        onDblclick: t[265] || (t[265] = (o) => e.ondblclick()),
        onMouseenter: t[266] || (t[266] = (o) => e.onenter(o)),
        onMouseleave: t[267] || (t[267] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-21",
        style: P({ display: n.config.displayDep["FR-21"] }),
        d: "M655 320v5l-5 2h-12l1 3v3l-4 2v5l1 1h3l2 2-1 6-5 3v3l2 1v1l-3 1-1 4-4 8-3 5v4l1 2-1 2-4 1v4l4 2 1 3-1 4v3l2 3 5 1 2 4v1l-2 1v3h1l7 8 7-1 6 5 5 4v4l5 1 4 3 11-3 8-3h3l1-2h4l3 2 4-1 4-3 3 1v-1l3-1-1-2-1-2 2-3 6-3v-3l3-3 2-2-1-3 1-4 1-6h1v-2l-1-1-1-8h-3l-1-5-4-2 2-2 2-1 5-5-1-3-3-6-4-1-1 4-8 2-1-2-6-8-3 2h-4l-2-3-6 1v-7l-3-2 4-5-8-11-6-7-6-3z",
        onClick: t[268] || (t[268] = (o) => e.onclick(o)),
        onDblclick: t[269] || (t[269] = (o) => e.ondblclick()),
        onMouseenter: t[270] || (t[270] = (o) => e.onenter(o)),
        onMouseleave: t[271] || (t[271] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-58",
        style: P({ display: n.config.displayDep["FR-58"] }),
        d: "m551 369-2 3h-3l-5-1-5 1v4l5 5v7l-4 4 2 5 6 5v5l4 7-1 9 4 4-1 9v5l2 3-3 9v3l6 3 5 4 3-2 4-2 1 3h5l2-3 3 2 1 5 3-1 7-9 3 2 1 1 5-3h3l2 4h3l3-3h3l3-3 2-1 1-2 5 1 1-2-3-2v-2l4-2v-2l-4-2v-8l-2-1 2-3 1-1 2-3-2-1-2-3 3-4 4-2h5v-4l2-1v-1l-2-4-6-1-1-3v-3l1-4-1-2-6 4-2 1-3-2v-5h-3l-3 1-1-2 2-2-2-3-2 3v3h-5l-8-8h-6v-4l-4-3-1-3h-1v6l-2 1-4-1-3 2h-2l-2-1-2 1-5-3h-3l-3-2 1-3-3-2z",
        onClick: t[272] || (t[272] = (o) => e.onclick(o)),
        onDblclick: t[273] || (t[273] = (o) => e.ondblclick()),
        onMouseenter: t[274] || (t[274] = (o) => e.onenter(o)),
        onMouseleave: t[275] || (t[275] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-71",
        style: P({ display: n.config.displayDep["FR-71"] }),
        d: "M633 413v1h-5l-4 2-3 4 2 3 2 1-1 3-2 1-2 3 2 2v7l4 2v2l-4 2v2l3 2-1 2-5-1-1 2-2 1-3 3h-3l-3 3h-3l-2-4h-3l-5 3 7 13v5l1 2h7l2 3h5l3 4v14l-8 6h1l1 6 5 1 1 3h3l4-3 12 2 2 2 3-3h4l2-11 1-1h4l4 3 4-3 2 3 3-4h4l2 6 1 7h3l2-5 7-26 2-5h4l4 3 3-1 4-2h3l2 5 2 1 10-1 4-3-2-2-4-2-1-5 4-3 1-6-3-5-2-3 1-1v-4l-3-2v-3l8-1 1-3h-3l-2-2h-4l-3-6h-3v-4l-3-1-4 3-4 1-3-1-4-1-1 2h-3l-8 3-11 3-4-3-5-1v-4l-5-4-6-5-7 1-7-8z",
        onClick: t[276] || (t[276] = (o) => e.onclick(o)),
        onDblclick: t[277] || (t[277] = (o) => e.ondblclick()),
        onMouseenter: t[278] || (t[278] = (o) => e.onenter(o)),
        onMouseleave: t[279] || (t[279] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-39",
        style: P({ display: n.config.displayDep["FR-39"] }),
        d: "M725 394v1h-1l-1 6-1 4 1 3-2 2-3 3v3l-6 3-2 3 1 2 1 2-3 1v5h3l3 6h4l2 2h3l-1 3-8 1v3l3 2v4l-1 1 2 3 3 5-1 6-4 3 1 5 4 2 2 2-4 3-10 1 5 2 7 10 5 2v5l5-1 7-7 6 2v5h10l15-17v-8l6-6-4-2 1-2h-5v-3l3-3-1-2-2-4 7-2 2-4 1-4-5-5-4-1-8-2v-8l-1-5-6 1-10-4 1-3 3-6v-3l-2-4-5-3v-6h-4l-1 2h-5l-3-3z",
        onClick: t[280] || (t[280] = (o) => e.onclick(o)),
        onDblclick: t[281] || (t[281] = (o) => e.ondblclick()),
        onMouseenter: t[282] || (t[282] = (o) => e.onenter(o)),
        onMouseleave: t[283] || (t[283] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-51",
        style: P({ display: n.config.displayDep["FR-51"] }),
        d: "m607 176-4 2 1 4h-8l-7 5v9l5 3 2 4h-9v4l3 2-2 2-3 2 1 2h4l2 3-3 2-3 7-5 3-2 4-2 2 1 2-3 2-1 5 3 2 1 5-2 3 2 3h5v1h1l7 7 8-2 11-7h6l6-4 7-4h6l1 7 6 10h8l10-2 7 3 8-6 1-9 8-1v-6l-7-5v-3l2-5-2-2 2-5 4-2 3-9-6 1 4-4-3-8-2-5 3-3-2-1-1-2-3-3-4 4h-1l-2-2h-8l-2 2h-2l-3-5h-4l-2 1h-4l-6-5-4-1-2-2-7-5h-9v3l-2 1z",
        onClick: t[284] || (t[284] = (o) => e.onclick(o)),
        onDblclick: t[285] || (t[285] = (o) => e.ondblclick()),
        onMouseenter: t[286] || (t[286] = (o) => e.onenter(o)),
        onMouseleave: t[287] || (t[287] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-60",
        style: P({ display: n.config.displayDep["FR-60"] }),
        d: "m459 141-2 2-1 4h2l-1 4-1 7 2 4v6h3l-1 2-3 5-1 3 4 3 1 8 1 3-2 1-3-2-1 4 2 3 2 4 10 1 7-1 4-4 6 4 3 2 4-1 4-2 8 4 8 5 2 3 4-3 4 2 2 2 4-1 2-3 5 3 6-2 3 1 4-3 2-1h1l1-5-3-3-4-3-2 3-1 1-1-6 4-1-1-5h-4l2-4 6-1 2-9 4-2-5-3 2-3v-11l-1-9-8 1-5-1-9 3-9 8-6-3h-7l-5-5-9-3-13 1-3-2h-6l-5 1-2-1v-4l-1-1z",
        onClick: t[288] || (t[288] = (o) => e.onclick(o)),
        onDblclick: t[289] || (t[289] = (o) => e.ondblclick()),
        onMouseenter: t[290] || (t[290] = (o) => e.onenter(o)),
        onMouseleave: t[291] || (t[291] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-62",
        style: P({ display: n.config.displayDep["FR-62"] }),
        d: "m482 9-20 3-16 13v50l5 1 2 4 4-1 3-3 3 1 7 5 2-1 2 4 7 3v4l5 2 4-2 9-1 2 2 5-2 2 4-6 3v5l2 2h2l1-3 3-2 3 2 8 3h3v-4l5 3v3l-2 3 4-2 3-1 2 2v3l5-3h9l2-4-1-2h-7l-2-1 4-2h6l1-6 2-2v-3l-4-3h-5l-1-1 3-2 1-2-3-2-3-4v-2l5-3 1-2-4-2-2-4-6-1-7-2v-7l4-3-2-4h-3l-3 4-11-1-9-2-5-5v-5l4-1-4-3h-8l-4-12-8-12z",
        onClick: t[292] || (t[292] = (o) => e.onclick(o)),
        onDblclick: t[293] || (t[293] = (o) => e.ondblclick()),
        onMouseenter: t[294] || (t[294] = (o) => e.onenter(o)),
        onMouseleave: t[295] || (t[295] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-59",
        style: P({ display: n.config.displayDep["FR-59"] }),
        d: "m512 0-11 6-18 2h-2l8 12 4 12h8l4 3-4 1v5l5 5 9 2 11 1 3-4h3l2 4-4 3v7l7 2h6l2 5 4 2-1 2-5 2v3l3 4 3 2-1 2-3 2 1 1h5l4 3v3l-2 2-1 6h-6l-4 2h6l3 1 1 2-2 4 3 3 3 1 3-2h4l1 2h1l5-3 4 3 6-4h2l3 2 6-4 2 1 2 2h9v3l4-3h2l2 4 7 2 2-1h-1v-4l7-4-1-7-7-2 2-1v-5l5-4-1-3-12-9-20 1-2 4h-3l1-13-6-7-5 1-2-3-7 3-3-3h-5l-1-5-1-14-3-2v-2h-2l-1-4h-5l-9 3-4 5h-5l-2-3-1-4-4-4h-5l-2-4v-6l2-4-1-6z",
        onClick: t[296] || (t[296] = (o) => e.onclick(o)),
        onDblclick: t[297] || (t[297] = (o) => e.ondblclick()),
        onMouseenter: t[298] || (t[298] = (o) => e.onenter(o)),
        onMouseleave: t[299] || (t[299] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-02",
        style: P({ display: n.config.displayDep["FR-02"] }),
        d: "m591 107-6 5-3-3h-2l-6 4-4-3-5 3h-1l-1-2h-4l-3 2v5l-4 5v5l-3 3v5l2 7 2 13v11l-2 3 5 3-4 2-2 9-6 1-2 4h4l1 5-4 1 1 6 1-1 2-3 4 3 3 3-1 5 3 3 1 8 10 9 3 1 2 4 6 2 1-1 2-4 5-3 3-7 3-2-2-3h-4l-1-2 3-2 2-2-3-2v-4h9l-2-4-5-3v-9l7-6h8l-1-3 4-2 7 4 2-1v-12l1-4 1-5-4-3 1-3 6-1v-5l6-3 1-4-2-3 1-6 3-2-3-7 1-6h-7l-2 1-7-2-2-4h-2l-4 4-1-4h-8l-2-2z",
        onClick: t[300] || (t[300] = (o) => e.onclick(o)),
        onDblclick: t[301] || (t[301] = (o) => e.ondblclick()),
        onMouseenter: t[302] || (t[302] = (o) => e.onenter(o)),
        onMouseleave: t[303] || (t[303] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-80",
        style: P({ display: n.config.displayDep["FR-80"] }),
        d: "m446 75-1 12 8 7v4l-10-6-12 14 3 1h4l2 4 16 15 1 7 4 6-2 2h5l1 1v4l2 1 5-1h6l3 2 13-1 9 3 5 5h7l6 3 9-8 9-3 5 1 8-1-1-4-2-7v-4l3-4v-5l4-5v-5l-3-1-4-3h-8l-6 3v-3l-1-2-3 1-4 2 2-3v-3l-5-3v4h-3l-8-3-3-2-3 2-1 3h-2l-2-2v-5l6-4-2-3-5 2-2-2-9 1-4 2-5-2v-4l-7-3-2-4-2 1-7-5-3-1-3 3-4 1-2-4z",
        onClick: t[304] || (t[304] = (o) => e.onclick(o)),
        onDblclick: t[305] || (t[305] = (o) => e.ondblclick()),
        onMouseenter: t[306] || (t[306] = (o) => e.onenter(o)),
        onMouseleave: t[307] || (t[307] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-08",
        style: P({ display: n.config.displayDep["FR-08"] }),
        d: "m663 96-3 5-4 3v8l-4 3-8 2-4 2-5-4h-7l-1 7 3 6-3 3v5l1 3-1 4-6 3v5l-6 1-1 3 4 3-1 4-1 5v9h9l7 5 2 2 4 1 6 5h4l2-1h4l3 5h2l2-3 8 1 2 2h1l4-4 3 3v-2l5-2 2-2-2-4v-2l4-3 1-8-4-5 1-3 4-6 1 1h6l2 2 3-2 3-4h-3l-1-7-3-3-10-1-2-4-3-3-12-1-1-8 2-2v-3l-6-4 1-4 2-3-3-2 4-4v-6l-1-2h-6z",
        onClick: t[308] || (t[308] = (o) => e.onclick(o)),
        onDblclick: t[309] || (t[309] = (o) => e.ondblclick()),
        onMouseenter: t[310] || (t[310] = (o) => e.onenter(o)),
        onMouseleave: t[311] || (t[311] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-10",
        style: P({ display: n.config.displayDep["FR-10"] }),
        d: "m629 249-7 4-6 4h-6l-11 7-8 2-7-7h-1v1l-5 3v4l-3 3-2 8v5l2 2h4l10 10-2 10 7 5 4-3 5 7 1 7 4 5 2 4 14 1 8-4 2 4h2l2-4h12l5-2v-5h11l1 1-1-5-3-2 4-3 6-1 3-3-1-13-1-8-7-2-6-9v-6l2-4-3-1-10 2h-8l-6-10-1-7z",
        onClick: t[312] || (t[312] = (o) => e.onclick(o)),
        onDblclick: t[313] || (t[313] = (o) => e.ondblclick()),
        onMouseenter: t[314] || (t[314] = (o) => e.onenter(o)),
        onMouseleave: t[315] || (t[315] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-52",
        style: P({ display: n.config.displayDep["FR-52"] }),
        d: "m684 251-8 1-1 9-8 6-4-2-2 4v6l6 9 7 2 1 8 1 13-3 3-6 1-4 3 3 2 1 5 5 2 6 7 8 11-4 5 3 2v7l6-1 2 3h4l3-1 6 7 1 2 8-2 1-4v-4l5-1 6 1 6-1h3l1-8 2-2h-4v-5l5-1v-2h6v-5l3-2-1-3h1l-3-3-4 1v-7l-10-5 2-10 4-2-1-3-5-1-1-5h-5l-5-6-5-1-3-4 3-3-7-8-4-1-8-4-5-5-7-1z",
        onClick: t[316] || (t[316] = (o) => e.onclick(o)),
        onDblclick: t[317] || (t[317] = (o) => e.ondblclick()),
        onMouseenter: t[318] || (t[318] = (o) => e.onenter(o)),
        onMouseleave: t[319] || (t[319] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-67",
        style: P({ display: n.config.displayDep["FR-67"] }),
        d: "m872 200-7 2-3 5v6l-3 2h-2l-5-3-4 3h-4l-4-4-7-1-3-2-2-5-3 3-2 9-5 1v5l5 2 4 2-2 4 3 2 6-4 10 5-4 8v3l3 3-2 7-7 8-4-1 3 3-2 6 2 10 6 2v1h5l3 3 3 4h7l3 9 6 2v-1l9-18-1-11 5-14 1-12 9-7v-4l4-5h2l4-3-1-6 3-9 5-1-5-4-9-1-8-4-5 3-3-3z",
        onClick: t[320] || (t[320] = (o) => e.onclick(o)),
        onDblclick: t[321] || (t[321] = (o) => e.ondblclick()),
        onMouseenter: t[322] || (t[322] = (o) => e.onenter(o)),
        onMouseleave: t[323] || (t[323] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-54",
        style: P({ display: n.config.displayDep["FR-54"] }),
        d: "m726 156-4 4h-7l-2 2v5l2 3-1 2-1 3 1 1 2-1 1-3 4-1 6-1 3 2 1 3 1 3v3l2 2v2l-2 2v5l2 2v7l2 2 3 2-1 2 4 4-3 4v2l4 2v2h-4l-2 2v2l3 3-3 7-2 6 1 4v6l1 3h2l2 2h-4l-2 2v2l3 3v5l4-1h5v6h2l-2 2v2l3 1 3 3 12-1 2-4h6l2-2 3 2 3-1h5l4-1 4-3 2 2v-5l3-1 1 5h5l4 1h2l6-2 3-3 3-3 5-2 4-1-2-2h5l-5-2-6-4-5-4h-6l-7-4h-5v-2l-8-4-10-4h-4l-2-5-7-9h-7l-3-4h-6l1-6-8-4 1-5h4v-4l1-3-3-3 3-5-2-5-2-2-5-10 2-3v-5h-5l-7-7z",
        onClick: t[324] || (t[324] = (o) => e.onclick(o)),
        onDblclick: t[325] || (t[325] = (o) => e.ondblclick()),
        onMouseenter: t[326] || (t[326] = (o) => e.onenter(o)),
        onMouseleave: t[327] || (t[327] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-77",
        style: P({ display: n.config.displayDep["FR-77"] }),
        d: "m552 208-2 1-4 3-3-1-6 2-5-3-2 3h-4l-2-1-4-2-4 3v-1l-2 10 3 13v8l-3 8v4l-3 3 2 10-1 2-2 9 3 3-8 6v7l2 3 4 2 1 7-6 4 3 3 4-3h14l1-3h4v3l9-5 4-4 4-5-3-3 3-6 6-3 14 1 3-3h1v-6l2-7 3-3v-4l5-3v-2h-6l-1-3 2-3-1-5-3-2 1-5 3-2-1-2 1-1-6-2-2-4-3-1-10-9-1-8z",
        onClick: t[328] || (t[328] = (o) => e.onclick(o)),
        onDblclick: t[329] || (t[329] = (o) => e.ondblclick()),
        onMouseenter: t[330] || (t[330] = (o) => e.onenter(o)),
        onMouseleave: t[331] || (t[331] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-68",
        style: P({ display: n.config.displayDep["FR-68"] }),
        d: "M844 282h-5l-4 8-4 8 1 6-4 8-6 5v14l-4 4v1l1 2 6 1 6 5 2 2-1 4-2 4 1 4 5-1 1 4 2 8 4-1-1 4 3 2h13l7-5 1-8 3-5-5-5-2-6 3-4v-9l2-4v-8l3-4-4-5v-11l-5-2-4-9h-7l-3-4z",
        onClick: t[332] || (t[332] = (o) => e.onclick(o)),
        onDblclick: t[333] || (t[333] = (o) => e.ondblclick()),
        onMouseenter: t[334] || (t[334] = (o) => e.onenter(o)),
        onMouseleave: t[335] || (t[335] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-55",
        style: P({ display: n.config.displayDep["FR-55"] }),
        d: "m705 152-3 5-3 2-3-3h-5l-1-1-4 7-1 2 4 6-1 7-4 3v2l2 4-2 2-5 2 1 4 2 1-3 3 2 5 3 8-4 4 6-1-3 9-4 2-2 6 2 1-2 5v3l7 5 1 13 7 1 5 5 8 4 4 1 7 8-1 1 7-1v-3l7-1v-3h2v2l5-1 3-3h-1v-5l-4-3v-2l3-2h4l-2-2h-1l-2-3v-6l-1-4 2-6 3-7-3-3v-2l2-2h4v-2l-4-2v-2l3-4-4-4 1-2-3-2-2-2v-7l-2-2v-5l2-2v-2l-2-1v-4l-1-3-1-3-3-2-6 2h-4l-2 3-1 2-1-2 1-2 1-3-2-3v-4h-2l-1-7-3-3h-2z",
        onClick: t[336] || (t[336] = (o) => e.onclick(o)),
        onDblclick: t[337] || (t[337] = (o) => e.ondblclick()),
        onMouseenter: t[338] || (t[338] = (o) => e.onenter(o)),
        onMouseleave: t[339] || (t[339] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-57",
        style: P({ display: n.config.displayDep["FR-57"] }),
        d: "M765 160h-5l-4 4-1 1h-6l-2-2h-1v6l-2 2 5 10 2 2 2 5-3 5 3 3-1 3v4h-4v5l7 4v6h5l3 4h7l7 9 2 5h5l9 4 8 4v2h5l7 4h6l6 4 5 4 5 2 6-7 2-7-2-3-1-3 5-8-10-5-6 4-4-2 2-4-4-2-5-2v-5l5-1 2-9 3-3 2 5 4 2 7 1 3 4h4l4-3 5 3h2l3-2v-6l3-5-3-3-7-5-3-4-8 1-5 5h-13l-3-2c-.9-2-2.3-3.7-4-5h-1c-2 0-5-2-5-2l-5 2v4l-6 1-4-7-2-1v-5l-5-2-1-9-3-3-8-4h-3l-1 1h-4l-5-4z",
        onClick: t[340] || (t[340] = (o) => e.onclick(o)),
        onDblclick: t[341] || (t[341] = (o) => e.ondblclick()),
        onMouseenter: t[342] || (t[342] = (o) => e.onenter(o)),
        onMouseleave: t[343] || (t[343] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-88",
        style: P({ display: n.config.displayDep["FR-88"] }),
        d: "m832 262-4 1-5 2-3 4-3 2-6 2h-2l-4-1h-5l-1-5-3 1v5l-2-2-4 3-4 1h-5l-3 1-3-2-2 2h-6l-2 4-12 1-2-3-4-1v-2l2-2h-2v-6h-6l-2 1-3 3-5 2v-3h-2v3l-7 1v3l-7 1-2 3 3 3 5 1 5 6h5l1 5 5 1 1 3-4 2-2 10 10 5v7l4-1 3 3 3-2-1-2 1-1 3 3 4-3 1-3 6-1 2 1v4l5 4 2-1 4-2h7l6 6h2l2-2 1-2 3-1 3 2 3 3 12 6 4-4v-14l6-5 4-8-1-6 4-8 4-9-7-2-1-10 2-6z",
        onClick: t[344] || (t[344] = (o) => e.onclick(o)),
        onDblclick: t[345] || (t[345] = (o) => e.ondblclick()),
        onMouseenter: t[346] || (t[346] = (o) => e.onenter(o)),
        onMouseleave: t[347] || (t[347] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-91",
        style: P({ display: n.config.displayDep["FR-91"] }),
        d: "m491 244-3 2-4 1-1 4-5 3-1 4 3 4-4 5h-5l2 3-2 3-1 5 2 1v4l1 2 1 9 11-1 5-4 4 3 9 1 2 2v-7l8-6-3-3 2-9 1-2-2-10 3-3v-4l-4-2h-7l-3-2-3 1-6-3z",
        onClick: t[348] || (t[348] = (o) => e.onclick(o)),
        onDblclick: t[349] || (t[349] = (o) => e.ondblclick()),
        onMouseenter: t[350] || (t[350] = (o) => e.onenter(o)),
        onMouseleave: t[351] || (t[351] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-78",
        style: P({ display: n.config.displayDep["FR-78"] }),
        d: "m449 211-10 3-2 2 2 3v2l3 1-2 2v2l1-1 3 4 1 4 3 3-1 4v4l2 3-2 4 2 6 6 4v4h5l1 8 3 4 6 1 1-5 2-3-2-3h5l4-5-3-4 1-4 5-3 1-4 4-1 3-2v1-1l-3-3-2-6 3-7-1-5-7-4h-8l-9-6-6 2z",
        onClick: t[352] || (t[352] = (o) => e.onclick(o)),
        onDblclick: t[353] || (t[353] = (o) => e.ondblclick()),
        onMouseenter: t[354] || (t[354] = (o) => e.onenter(o)),
        onMouseleave: t[355] || (t[355] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-95",
        style: P({ display: n.config.displayDep["FR-95"] }),
        d: "m456 195-3 4-2 8-2 4 9 4 6-2 9 6h8l7 4 1 5h1l6-3 10-1 5-2 4-3 1-7-2-2-8-5-8-4-4 2-4 1-3-2-6-4-4 4-7 1-10-1-2-4z",
        onClick: t[356] || (t[356] = (o) => e.onclick(o)),
        onDblclick: t[357] || (t[357] = (o) => e.ondblclick()),
        onMouseenter: t[358] || (t[358] = (o) => e.onenter(o)),
        onMouseleave: t[359] || (t[359] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-93",
        style: P({ display: n.config.displayDep["FR-93"] }),
        d: "m515 219-4 3-5 2-10 1 1 1h1v3h-1v2h5l1 2 1 4 1-1 2-1h2l3 2 2 2 1 1h2v-5l-3-13z",
        onClick: t[360] || (t[360] = (o) => e.onclick(o)),
        onDblclick: t[361] || (t[361] = (o) => e.ondblclick()),
        onMouseenter: t[362] || (t[362] = (o) => e.onenter(o)),
        onMouseleave: t[363] || (t[363] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-75",
        style: P({ display: n.config.displayDep["FR-75"] }),
        d: "M502 231h-5l-2 1-1 1h-1l-2 2v2l3 1 4 2h3l2-1 4 1v-3h-2v1h-2l1-1-1-4z",
        onClick: t[364] || (t[364] = (o) => e.onclick(o)),
        onDblclick: t[365] || (t[365] = (o) => e.ondblclick()),
        onMouseenter: t[366] || (t[366] = (o) => e.onenter(o)),
        onMouseleave: t[367] || (t[367] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-92",
        style: P({ display: n.config.displayDep["FR-92"] }),
        d: "m496 225-6 3h-1l-3 7 2 6 3 4 5 4 2-1-1-2 1-3-1-1 1-2-4-2-3-1v-2l2-2h1l1-1 2-1v-2h1v-3h-1z",
        onClick: t[368] || (t[368] = (o) => e.onclick(o)),
        onDblclick: t[369] || (t[369] = (o) => e.ondblclick()),
        onMouseenter: t[370] || (t[370] = (o) => e.onenter(o)),
        onMouseleave: t[371] || (t[371] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-94",
        style: P({ display: n.config.displayDep["FR-94"] }),
        d: "m507 235-2 1-1 1-1 1h2v-1h2v3l-4-1-2 1h-3l-1 2 1 1-1 3 1 2 1-1 4 2h7l4 2 3-8v-3h-2l-1-1-2-2-3-2z",
        onClick: t[372] || (t[372] = (o) => e.onclick(o)),
        onDblclick: t[373] || (t[373] = (o) => e.ondblclick()),
        onMouseenter: t[374] || (t[374] = (o) => e.onenter(o)),
        onMouseleave: t[375] || (t[375] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-25",
        style: P({ display: n.config.displayDep["FR-25"] }),
        d: "m811 361-1 1h-4l-2 3-3 1v4l-7 1-3-3-5 1-5 4-3 5-3 1-2 4-4 1-6 5h-7l-3 1h-2l-7 6h-3v6l5 3 2 3v4l-3 6-1 3 10 4 6-1 1 6v7l8 2 4 1 5 5-1 4-2 4-7 2 2 4 1 2-3 3v3h5l22-21-1-17 8-4 6-3 5-4v-8l5-2 12-13-2-5 4-1 4-6-2-3-9 2v-1l8-10z",
        onClick: t[376] || (t[376] = (o) => e.onclick(o)),
        onDblclick: t[377] || (t[377] = (o) => e.ondblclick()),
        onMouseenter: t[378] || (t[378] = (o) => e.onenter(o)),
        onMouseleave: t[379] || (t[379] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-90",
        style: P({ display: n.config.displayDep["FR-90"] }),
        d: "m818 336-3 2-3 2v5l1 5v9l-2 2 22 11 1-2 5-1-2-8-1-4-5 1-1-4 2-4v-4l-1-2-6-5-6-1z",
        onClick: t[380] || (t[380] = (o) => e.onclick(o)),
        onDblclick: t[381] || (t[381] = (o) => e.ondblclick()),
        onMouseenter: t[382] || (t[382] = (o) => e.onenter(o)),
        onMouseleave: t[383] || (t[383] = (o) => e.onleave(o))
      }, null, 36)
    ], 8, T7)
  ], 8, R7);
}
const F7 = /* @__PURE__ */ It(O7, [["render", L7]]), I7 = {
  mixins: [bs],
  props: {
    config: {
      type: Object,
      required: !0
    }
  }
}, V7 = ["viewBox"], B7 = ["stroke"];
function $7(e, t, n, s, i, r) {
  return O(), F("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: n.config.viewBox
  }, [
    g("g", {
      fill: "#5C68E5",
      stroke: n.config.colorStroke,
      "stroke-width": ".2%"
    }, [
      g("path", {
        class: "FR-20R",
        style: P({ display: n.config.displayDep["FR-20R"] }),
        d: "m1010 932-9 12 1 11v5l1 5-2 13-2 4h-5v4l3-2h4v4l-7 4v3l1 2-5 5 4 1-2 7h-5l-1-3h-6l2-3-3-2-4-1-12-4-6-4-4-3c0-1 3-5 3-7v-1c1 0 3 1 3 1l5-5-11-1-8-2 2-7 5-3-3-2 3-6-2-1-5 2-1-1h-6l-1-6 2-3 3-4 2-1 2-2-2-4-3-1-8-2v-8l-2-2v-2l5-1 4-1-1-3-6-4-3-3v-3h3l1-3 4-3-1-3v-6l3-1 1-6 2 2 3 1 2-4 7-6 9-2 2-6 4-4h4l1 1h5l3 3 3-1 2-4v-5l-4-4v-3l2-2-1-3 3-3-3-3v-4l5-4 3 2 2 2 2 8 2 10-2 6 1 13 5 4 2 4 1 22 4 7z",
        onClick: t[0] || (t[0] = (o) => e.onclick(o)),
        onDblclick: t[1] || (t[1] = (o) => e.ondblclick()),
        onMouseenter: t[2] || (t[2] = (o) => e.onenter(o)),
        onMouseleave: t[3] || (t[3] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-PAC",
        style: P({ display: n.config.displayDep["FR-PAC"] }),
        d: "m903 734-8 3 1 5-6 5 4 8-6 4-1 4h-6l-7 6-9 1v11h-4l-2 3-7-2-1 9-6 7-10 1-1 6-3 4-6 3h8v9l-6 3-5-2-2 4h-8l-3 2v5l-3 2-2-3h-2l-5-2-5 3 1 5 2 2h-9l4-2v-3l-11-1-6 4-4 3-4-1-2-8-6-2-1-2-1-1-9-3h-17l2-2 1-4h-8l6-5-1-4-6 3-20-1-3-7-7-3-5 4 7 6-12 2-16-3 4-6h5l-3-3-15-1h-11l3-8 12-7-3-4 3-8 11 2 3-20 10-5 4-3v-4l-11-11v-8l-6-10-1-1 2-4 10-1 2 2-1 7 1 2 5-5 5-1 1-2-6-1-1-7 4-6h5l5 5-5 6 1 3 8 1 4-4-2 5 1 4 7 1 10 1 1 4 6 5h5l3-3 2-5 3 2 2 3 1-14h-3l-2-5-13-3-1-6 4-3-3-3v-3h6l5 3 4-5-4-3v-5l3-6 7-1 6-3 1-2-3-2v-4h10l2-3-1-3 4-4 4 2 4-4 9 1 2-3h7v-8l-3-1-1-5h-8l-1-2 2-8 2-2 7-1 2 2 1 6 6-1 1-6 3-1h7l3 5 1 4 6 2 1 11 10 4h5l4 1 1 10 5 3v3h-4l-3 4h-1l1 5-7 7-1 4 2 4 3 1 3 3-5 1v7l8 5v6h5l9 3 10 7h5l17-6h5l2 5 2 3 1 5z",
        onClick: t[4] || (t[4] = (o) => e.onclick(o)),
        onDblclick: t[5] || (t[5] = (o) => e.ondblclick()),
        onMouseenter: t[6] || (t[6] = (o) => e.onenter(o)),
        onMouseleave: t[7] || (t[7] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-OCC",
        style: P({ display: n.config.displayDep["FR-OCC"] }),
        d: "M690 743v4l-15 8-2 20-11-2-3 8 3 4-12 7-3 8h-13v-7l-6-1h-5l-12 8-19 16-3 4h-11l-1 4-13 3v2l-1 4-3 4-6 4-6-6-3 5 4 6 4-1v22l1 32 5 2 3 4v6l-6-1-5-5h-7l-6 2-3 5-11 2-1 5-2 2-2-2h-3l-3 3-10-8-12-4-7 1-6 8h-5l-6-5v-6l-10-3-6-5-1-4-1-7-15-2-6 2-6-9h-15l-7-7h-5l-11-3-1-1-8-4-5-1-1 18-14-1-7-1-4-1-2 4-7-1-5-6-12 5h-5l-5-5-1-4-7-6-6-3h-1v-7l3-2 2-12 5 1 2-2-2-5 10-8 5-13 4-5-5-6-2-4 3-4-6-10-9-1-3-5 2-7 4-4-1-7 3-2-5-8 4-4 4-1 4 2 5-5 1 6 2 2 4-1v-4l2-6 5 4 5-6 3 4 6-1 7-1 2-5 11-1 6 5 1-2h1l3-1-1-5 5-1 7-2-2-4 3-3 1-6-4-5 3-8 6 3 7-1v-1l-3-7-3-11h7l2-5 3-3v-6h8l6-8-3-1v-3l6-1v-4l3-1 4-6-4-4v-4l3-2h1l7-4 9 4 8 10h4l6-6 2 3 4-4 6 2 2 13 6 5-5 10 5 2-2 6 3 1h1l3-5h5l1 1h11l2-4 3-1 1-8h2v-9l11-9 1 2v6l8-1 1 11h4l1 10 3.1 3.7L552 665l5-16 7 4 3-6 10-4 6 17 10-3v-5h4l1 6 7-2 9 12 3 13 6 7-1 7 2 1 6 4v10l4-2 8 6 4 1 1-7 5-1 2 6 5-1 1-5 13 7 6 10v8z",
        onClick: t[8] || (t[8] = (o) => e.onclick(o)),
        onDblclick: t[9] || (t[9] = (o) => e.ondblclick()),
        onMouseenter: t[10] || (t[10] = (o) => e.onenter(o)),
        onMouseleave: t[11] || (t[11] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-ARA",
        style: P({ display: n.config.displayDep["FR-ARA"] }),
        d: "m852 596 1 2-1 7-9 3-2 2-5 3v4h-4l-4-2-11 4h-7l-3 1-1 6-6 1-1-6-2-2-7 1-2 2-2 8 1 2h8l1 5 3 1v8h-7l-2 3-9-1-4 4-4-2-4 4 1 3-2 3h-10v4l3 2v1l-1 1-6 3-7 1-3 6v5l4 3-4 5-5-3h-6l-1 3 4 3-4 3 1 6 13 3 2 5h3l-1 14-2-3-3-3-2 6-3 3h-5l-5-5-2-4-10-1-8-1v-4l2-5-4 4-8-1-1-3 5-6-5-5h-5l-4 6 1 7 6 1-1 2-5 1-5 5-1-2 1-7-2-2h-5l-5 1-2 4-12-6-1 5h-5l-2-5-5 1-1 7-4-1-8-6-4 2v-10l-8-5 1-8-6-6-3-13-1-2-8-10-7 2-1-6h-4l-1 5-9 3-6-17h-1l-9 3-3 7-7-4-5 16-5 11-3-3-1-11h-4l-1-10-7 1-1-7-1-1-11 9v9h-2l-1 8-3 1-2 4h-11l-1-1h-5l-3 5-4-1 2-6-5-2 5-10-7-5-1-12 4-3-1-4-2-2 3-4h2l2-6 2-3-1-6 4-6 7-5v-10l3 2 4 4h4l2-2-2-5 1-4 1-2-1-6-2-3v-5l3-5-1-5-8-9-1-3 7-4 4-2 1-5 4-3-1-7-3-4v-7.3l-1-.7v-3l-4-9-4-2-3-5-2 4-3-4v-4l-4-6 2-4 4-5 9-2 5 1 5-4v-2l-2-2v-6l10-9 3 4 3-4h3l5-6h9v5l6 3 5 4 3-2 4-2 1 3h5l2-3 3 2 1 5 3-1 7-9 3 2 8 14v5l1 2h7l2 3h5l3 4v14l-8 6 1 1 1 5 5 1 1 3h3l4-3 12 2 2 2 3-3h4l1-7 1-4 1-1h4l4 3 4-3 2 3 3-4h4l2 6 1 7h3l1-2 1-3 7-26 2-5h4l4 3 3-1 4-2h3l2 5 7 3 7 10 5 2v5l5-1 7-7 6 2v5h10l15-17 6 4 1 2-5 7 2 1v4h-7l-4 3v7h12l4-5 8-4-4-4-1-3 4-8h4l2 3 8-6 8-2h13v5l6 7v5l-4 4 1 3 6 3v9l3-1 8 8 1 8-2 3-12 5v12l5 7s5-1 7-1c2 2 1 13 1 13l9 6 2 5 5 2z",
        onClick: t[12] || (t[12] = (o) => e.onclick(o)),
        onDblclick: t[13] || (t[13] = (o) => e.ondblclick()),
        onMouseenter: t[14] || (t[14] = (o) => e.onenter(o)),
        onMouseleave: t[15] || (t[15] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-NAQ",
        style: P({ display: n.config.displayDep["FR-NAQ"] }),
        d: "m519 538-4 3-1 5-4 2-7 4 1 3 7 8 1 1 1 5-3 5v5l2 3 1 6-2 6 2 5-2 2h-4l-4-4-3-1v9l-7 5-4 6 1 6-2 3-2 6h-2l-3 4 2 2 1 4-4 3-1-1-5-2-4 4-2-3-6 6h-4l-7-10-10-4-7 4h-1l-3 2v4l4 4-4 6-3 1v4l-6 1v4h3l-6 8h-7l-1 6-3.8 3.8.8.2-2 4h-7l3 11 3 8-7 1-6-3-3 8 4 5-1 6-3 3 2 4-7 2-5 1 1 5-3 1-2 2-6-5-11 1-2 5-7 1-6 1-3-4-5 6-5-4-2 6v4l-4 1-2-2-1-6-5 5-4-2-4 1-4 4 5 7-3 3 1 7-4 4-2 7 2 5h1l9 1 6 10-3 4 2 4 5 6-4 5-6 13-9 8 2 5-2 2-5-1-2 12-3 2v7l-7 4-3 2-2-2-3 1-4 2-4-5-9-7-1-7h-14l-8-5-9-2-3-4h-6l-3-3 1-5-3 3-1 6-6-2-3-4v-3l5-2v-7l2-2-1-5-4-1-7-3-1 4-5-1-1-5h-6l-4-4v-4h4l7-3 8-10 1-3 6-9 2-9 11-44 6-34v-8l4-6 1-5 3-2 2 3 9-1-2-3-1-2-7-6-5 6-3 8v-6l4-24 4-30 2-30 6-9v-1l4 1-1 7 19 17 7 28 1-2v-11l-3-10v-2l-3-13-11-11-4-1-1-4-5-3-7-6-5 1v-8l-2-8-1-7-8-6 1-13 5 6 6 1 1 9 1 1 2 3-4 4 1 3h5l-1-2v-5h4l2-8-3-4 1-3 4 1 1-4-4-1-2-5-4-1-2-4-8 1-3-3-6-4h-5l-3-5 6-3 4 3 1 4 7 1 3 3 5-1 1-3 6-5-3-3 11-6 5-1 2 6 7-3 5 4h1l4-2 5-1 1-2 5-3-3-4-3 3v-3l2-5-2-4 2-3-1-10-4-6 3-3-6-7 2-4-9-8v-4l-3-5 7-3 11 2 5-3v-5l10-1 9-1 10-1 1 3 3 2v-1l2-3 7-8v1h3l2 5 6 2v4l9 2v12h11l9-3-1-3 3-2 3 4 2 1 3 8 6 7 1 5 6 6v7l-1 5 7 5 3 4h6l2 8 4 2-1 5-2 1 10 1 3-3 6 5v-1l7-7 3 2h4l2 1h6l2-6 18 2 7 2 12-1 4 6v4l3 4 2-4 3 5 4 2 4 9 1 11 3 4z",
        onClick: t[16] || (t[16] = (o) => e.onclick(o)),
        onDblclick: t[17] || (t[17] = (o) => e.ondblclick()),
        onMouseenter: t[18] || (t[18] = (o) => e.onenter(o)),
        onMouseleave: t[19] || (t[19] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-BRE",
        style: P({ display: n.config.displayDep["FR-BRE"] }),
        d: "M259 289v6l1 3v11l2 2v10l-6-1-2 2-5 11-2 7-1 3-8-2-3-5h-5l-1 4-8 1-3 3-2 4-22 2-7 3-2 1-1 11-10 3-7 4h-6l-2-2-3 3h-2v-4l2-2-5-1-20 2-3-5-4-2 3-3 10 4 2-3-4-4-5-2 1 3-5 1-4-6 3 5-3 4-4-4-1-3-2 5-4-1v6l2 3-2 3-5-4 1-4 1-5-2-4-7-7-5-2 1-4-2 4-6-2-4-6 .2-.8-.2-.2h-4l-7-1-2-3v2l-10-1-5-7-2-7v7h-3l-6-3h-3l-4-1 4 4-2 4h-8l-8-2 3-5-2-9-8-9-4 1-4-3H4l-3-2 2-3 12-1 8-1h9l2-4-2-5-3-1-8-4-4 6-2 1 1-9-7-3 5-5 9 3 7 2 8 1v-3h-7l1-5-7 3-1-3 8-8-9 7-14 1-1-1-2 2-6-1 2-7-2-4 6-4-5-4 6-6h9l1-4 3-2 2 2h6v-3l8-1 1 4 5-1 1-4 8-1 4 2 5-4v8h5v3h3v-7l10-1 6 4 5-7-2-4 7-5 6 4 2-2 8-1 3-3 2 5 1-4h8l-1 4 4 1v6l5 1v6l7 5-1 6 8 4v7h3v-4l13-7 2-5 7 2 4-4v7l2-2 4 1v5l5-1v-4l7 1 2.2-2.2-.2-.8 4-3h9l-5 6 7 4h18l1 4 2 7 6 6h3l3-4h3l4-5 4 3h4l3 1-1 11 2 1v7z",
        onClick: t[20] || (t[20] = (o) => e.onclick(o)),
        onDblclick: t[21] || (t[21] = (o) => e.ondblclick()),
        onMouseenter: t[22] || (t[22] = (o) => e.onenter(o)),
        onMouseleave: t[23] || (t[23] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-PDL",
        style: P({ display: n.config.displayDep["FR-PDL"] }),
        d: "m390 319 4 3-1 8-1 5h-4v7l-5 6-5 2-3 3 2 5-11 3-2 3-4-3 2 8h-4l-7-5-3 4-1 3 2 2v2l-4 5v8l-5 6-4 15h-3l-7 8-2 4-3-2-1-3-10 1-9 1-10 1v5l-5 3-11-2-7 3 3 5v4l9 8-2 4 6 7-3 3 4 6 1 10-2 3 2 4-2 5v3l3-3 3 4-5 3-1 2-5 1-4 2-6-4-7 3-2-6-5 1-11 6-2-2v6l-8-4-4-6h-8l-3-7h-8l-8-7-7-4-7-20h-3v-4l-11-10 1-9 10-14h1l-10-9-7 1-1-5h4l4-4-1-3-1-4 7-3h-6l-5 5h-7l-4-5v3l-7-2-4-2 4-5-2-3-1-1 6-7-1-1h1l3-3 3 2h5l7-3 10-4 1-10 9-5 23-2 1-3 3-4 8-1 1-4 5 1 3 4 7 2h1l.9-1.9-.9-.1 1-1 2-7 5-11 2-2 6 1v-10l-2-2v-11l-1-3v-6l3-4v-7l-2-1 1-10 6 1 3-3 6 2 2 5 4 3 6-4 3 2 10-5 10 1 5-2 2-4h3l4 3 1 8 5 2 2 6h6l10-9h9l3 4 2 13 6 2 4 6h7v2l1-3h1l5 7 5 1 5 3-4 6z",
        onClick: t[24] || (t[24] = (o) => e.onclick(o)),
        onDblclick: t[25] || (t[25] = (o) => e.ondblclick()),
        onMouseenter: t[26] || (t[26] = (o) => e.onenter(o)),
        onMouseleave: t[27] || (t[27] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-CVL",
        style: P({ display: n.config.displayDep["FR-CVL"] }),
        d: "m554 329-9 8 3 4v5l-5 4h-8l1 4 5 6 1 6 1 4-7 2v4l5 5v7l-4 4 2 5 6 5v5l4 7-1 9 4 4-1 9v5l2 3-3 9v-2h-9l-5 6h-3l-3 4-3-4-10 9v6l2 2v2l-5 4-5-1-9 2-4 5-2 4-8 1h-4l-7-1-18-3-2 6h-6l-2-1h-4l-3-2-7 8-6-5-3 3-10-1h2l1-6-4-2-2-8h-6l-3-4-7-5 1-5v-7h-1l-5-6-1-5-6-7-3-8-2-1-3-4-3 1 1 4-10 3h-10v-12l-9-2v-4l-6-2-2-6 4-14 6-7-1-8 4-5v-2l-2-2 4-7 7 5h4l-2-8 4 3 2-3 11-3-1-2-1-3 3-3 5-2 5-6v-7h4l1-5 1-8-4-3 3-5 4-6-5-3h-1v-9l-2-3-1-3 5-3 6-1 3-5v-13l-8-7v-6l-1-1 5-4h5l13-7 4 1h9l2-2v-5l8-4v-6l2-2 3 4 1 4 3 3-1 4v4l2 3-2 4 2 6 6 4v4l5 1 1 7 3 4 7 2 1 4 1 2 1 9h1l10-1 5-4 4 3 9 1 4 5 4 2 1 7-6 4 3 2 4-2h14l1-3h4v3l9-5 7 6 2 6 4 5z",
        onClick: t[28] || (t[28] = (o) => e.onclick(o)),
        onDblclick: t[29] || (t[29] = (o) => e.ondblclick()),
        onMouseenter: t[30] || (t[30] = (o) => e.onenter(o)),
        onMouseleave: t[31] || (t[31] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-NOR",
        style: P({ display: n.config.displayDep["FR-NOR"] }),
        d: "m462 192-2 1-3-2-1 4-3 4-2 8-2 4-10 3-2 2 2 3v2l3 1-2 2v1l-1 2v6l-8 4v5l-2 3h-9l-4-2-13 7h-5l-5 4-5-3 6 4v6l8 7 1 13-4 5-5 1-6 3 1 3 2 3v9l-3-1-6-8h-1l-1 4v-2h-7l-4-6-6-2-2-13-3-4h-9l-10 9h-6l-2-6-5-2-1-8-4-3h-3l-2 4-5 2-10-1-10 5-3-2-6 4-4-3-2-4v-1l-5-2-4 3-6-1v-1l-3-1h-4l-4-3-4 5h-3l-3 4-3-1-6-5-2-7-1-4h7l3-2v-4l-8-2-5-13 4-9v-10l-4-9v-13l-2-2-2-9-8-9-2-6v-7h-1l-2-2 3-4v-7l-7-7 1-3 14 4 9 6 8-6 16 1 3 9h-4l-3 8 10 11v8h4l10-3 7 4 30 4 12 7 16-6 13-8 9-2h1l-.4-.1-9.6-1.9-7-6 1-10 9-13 15-8 18-6 27-7 16-12 2-3 3 1h4l2 4 16 15 1 7 4 6-4 4-1 4h2l-1 4-1 7 2 4v6h3l-1 2-3 5-1 3 4 3 1 8z",
        onClick: t[32] || (t[32] = (o) => e.onclick(o)),
        onDblclick: t[33] || (t[33] = (o) => e.ondblclick()),
        onMouseenter: t[34] || (t[34] = (o) => e.onenter(o)),
        onMouseleave: t[35] || (t[35] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-HDF",
        style: P({ display: n.config.displayDep["FR-HDF"] }),
        d: "m626 136 2 3-1 4-6 3v5l-6 1-1 3 4 3-1 5-1 4v12l-2 1-7-4-4 2 1 3h-8l-7 6v9l5 3 2 4h-9v4l3 2-2 2-3 2 1 2h4l2 3-3 2-3 7-5 3-2 4-1 1-6-2-2-4-3-1-10-9-1-8-3-3h-1l-2 1-4 3-3-1-6 2-5-3-2 3-4 1-2-2-4-2-4 3-2-3-8-5-8-4-4 2-4 1-9-6-4 4-7 1-10-1-2-4-2-3 1-4 3 2 2-1-1-3-1-8-4-3 1-3 3-5 1-2h-3v-6l-2-4 1-7 1-4h-2l1-4 4-4-4-6-1-7-16-15-2-4h-4l-3-1 12-14 10 6v-4l-8-7 1-12V25l16-13 19.7-2.9.3-.1-1-1h2l18-2 11-6 5 9 1 6-2 4v6l2 4h5l4 4 1 4 2 3h5l4-5 9-3h5l1 4h2v2l3 2 1 14 1 5h5l3 3 7-3 2 3 5-1 6 7-1 13h3l2-4 20-1 12 9 1 3-5 4v5l-2 1 7 2 1 7-7 4v4h8l-1 6 3 7-3 2z",
        onClick: t[36] || (t[36] = (o) => e.onclick(o)),
        onDblclick: t[37] || (t[37] = (o) => e.ondblclick()),
        onMouseenter: t[38] || (t[38] = (o) => e.onenter(o)),
        onMouseleave: t[39] || (t[39] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-IDF",
        style: P({ display: n.config.displayDep["FR-IDF"] }),
        d: "M583 258v2l-5 3v4l-3 3-2 7v6h-1l-3 3-14-1-6 3-3 6 3 3-4 5-4 4-9 5v-3h-4l-1 3h-14l-4 3-3-3 6-4-1-7-4-2-2-3-2-2-9-1-4-3-5 4-11 1-1-9-1-2v-4l-2-1-6-1-3-4-1-8h-5v-4l-6-4-2-6 2-4-2-3v-4l1-4-3-3-1-4-3-4-1 1v-2l2-2-3-1v-2l-2-3 2-2 10-3 2-4 2-8 3-4 2 3 2 4 10 1 7-1 4-4 9 6 4-1 4-2 8 4 8 5 2 2v1l4-3 6 3h4l2-3 5 3 6-2 3 1 4-3 2-1 4 3 1 8 10 9 3 1 2 4 6 2-1 1 1 2-3 2-1 5 3 2 1 5-2 3 1 3z",
        onClick: t[40] || (t[40] = (o) => e.onclick(o)),
        onDblclick: t[41] || (t[41] = (o) => e.ondblclick()),
        onMouseenter: t[42] || (t[42] = (o) => e.onenter(o)),
        onMouseleave: t[43] || (t[43] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-GES",
        style: P({ display: n.config.displayDep["FR-GES"] }),
        d: "m901 210-3 9 1 6-4 3h-2l-4 5v4l-9 7-1 12-5 14 1 11-9 18v12l4 5-3 4v8l-2 4v9l-3 4 2 6 5 5-3 5-1 8-7 5h-13l-3-2 1-4-4 1-3-12-5 1-1-4 2-4-1-6-6-5-6-1-1-2-12-7-3-3-3-2-3 1-1 2-2 2h-2l-6-6h-7l-6 3-5-4v-4l-2-1-6 1-1 3-4 3-3-3-1 1 1 2-3 2h-1l1 3-3 2v5h-6v2l-5 1v5h4l-2 2-1 8h-3l-6 1-6-1-5 1v4l-1 4-8 2-1-2-6-7-3 1h-4l-2-3-6 1v-7l-3-2 4-5-8-11-6-7-5-2-1-1h-11v5l-5 2h-12l-2 4h-2l-2-4-8 4-14-1-2-4-4-5-1-7-5-7-4 3-7-5 2-10-10-10h-4l-2-2v-5l2-8 3-3v-4l5-3v-2h-5l-2-3 2-3-1-5-3-2 1-5 3-2-1-2 2-2 2-4 5-3 3-7 3-2-2-3h-4l-1-2 3-2 2-2-3-2v-4h9l-2-4-5-3v-9l7-5h8l-1-4 4-2 7 4 2-1v-12l1-5 1-4-4-3 1-3 6-1v-5l6-3 1-4-1-3v-5l3-3-3-6 1-7h7l5 4 4-2 8-2 4-3v-8l4-3 3-5v-1h6l1 2v6l-4 4 3 2-2 3-1 4 6 4v3l-2 2 1 8 12 1 3 3 2 4 10 1 3 3 1 7h3v1h2l3 3 1 7h2v-1l2-2h7l4-4h8l7 7h6l2 2h6l5-5h6l5 4h4l1-1h3l8 4 3 3 1 9 5 2v5l2 1 4 7 6-1v-4l5-2s3 2 5 2h1a13 13 0 0 1 4 5l3 2h13l5-5 8-1 3 4 7 5 3 3 7-2h4l3 3 5-3 8 4 9 1 5 4z",
        onClick: t[44] || (t[44] = (o) => e.onclick(o)),
        onDblclick: t[45] || (t[45] = (o) => e.ondblclick()),
        onMouseenter: t[46] || (t[46] = (o) => e.onenter(o)),
        onMouseleave: t[47] || (t[47] = (o) => e.onleave(o))
      }, null, 36),
      g("path", {
        class: "FR-BFC",
        style: P({ display: n.config.displayDep["FR-BFC"] }),
        d: "m834 380 2 3-4 6-4 1 2 5-12 13-5 2v8l-5 4-14 7 1 17-22 21-1 2 4 2-6 6v8l-15 17h-10v-5l-6-2-7 7-5 1v-5l-5-2-7-10-5-2-2-1-2-5h-3l-4 2-3 1-4-3h-4l-2 5-7 26-2 5h-3l-1-7-2-6h-4l-3 4-2-3-4 3-4-3h-4l-1 1-2 11h-4l-3 3-2-2-12-2-4 3h-3l-1-3-5-1-1-6h-1l8-6v-14l-3-4h-5l-2-3h-7l-1-2v-5l-7-13-1-1-3-2-7 9-3 1-1-5-3-2-2 3h-5l-1-3-4 2-3 2-5-4-6-3v-3l3-9-2-3v-5l1-9-4-4 1-9-4-7v-5l-6-5-2-5 4-4v-7l-5-5v-4l5-1 2-1-1-4-1-6-5-6-1-4h7l6-4v-5l-3-4 9-8v-6l-4-5-2-6-7-6 4-4 4-5-3-3 3-6 6-3 14 1 3-3h1l2 2h5l9 10-1 10 6 5 4-3 6 7v7l4 5 2 4 14 1 8-4 2 4 2 1 2-4 1 2-1-3h12l5-2v-5h11l6 3 6 7 8 11-4 5 3 2v7l6-1 2 3h4l3-2 6 8 1 2 8-2 1-4v-4l5-1 6 1 6-1h3l1-8 2-2h-4v-5l5-1v-2h6v-5l3-2-1-3 4-2-1-2 1-1 3 3 3-3 2-3 6-1 2 1v4l5 4 6-3h7l6 6h2l2-2 1-2 3-1 3 2 3 3 12 7 1 2 6 1 6 5 1 2v4l-2 4 1 4 5-1 3 12-5 1-1 2-.6-.3-7.4 9.3v1z",
        onClick: t[48] || (t[48] = (o) => e.onclick(o)),
        onDblclick: t[49] || (t[49] = (o) => e.ondblclick()),
        onMouseenter: t[50] || (t[50] = (o) => e.onenter(o)),
        onMouseleave: t[51] || (t[51] = (o) => e.onleave(o))
      }, null, 36)
    ], 8, B7)
  ], 8, V7);
}
const H7 = /* @__PURE__ */ It(I7, [["render", $7]]), z7 = {
  mixins: [bs],
  props: {
    config: {
      type: Object,
      required: !0
    }
  }
}, j7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 57 50"
}, W7 = ["stroke"];
function q7(e, t, n, s, i, r) {
  return O(), F("svg", j7, [
    g("g", {
      fill: "#5C68E5",
      stroke: n.config.colorStroke,
      "stroke-width": "0.2%"
    }, [
      g("path", {
        class: "FR-971",
        d: "m22.8 0-.2.2-2 1.2-.7.5-.3.4-1 1.3-.7 1v.6l.4.7.4 2.5.5.1.6.3.4.3.3.3V11l-.2.3-1.3.3-.6.7-1.1 3.8-.3 1v1l.3.8.7.9.9.7 1.1.7 1.4.5 1.4.3 1.2-.2 2.3-1 12-2.8 1 .3.6.2 2 .5h.5l.7-.6-.3-.4-1.3-.4-3.7-2.6-.7-.3-.4-.3-1.5-1.3-.7-.4-.8-.1h-1.3l-.7-.4-.5.5-1-.5-.8-.6-.7-.8-.7-1-.5-1.1-.1-.7.1-1.9-.3-1.8-.8-1.5-1.2-1.2L23 .1zm-6 16.2-.5-.5-.8.2-.7.5-.3.8-.7-.8-.3-.2-.2.2H13l-.5-.2 1-.5-1.2-1.4L10 13l-2.5-1-1.7-.3-.6-.3-.5-.6-.6-.4-1.3.3-1 .9-1.1 2-.7.6.3.9-.3 2.2v1.2l.4.8.5.8.4.8-.4 1 1 2.6v5.6l1 2.5.5.4.3.7.2.8.5.8.8.7.7.5.6.5.5 1-.5.5.4 1 .1.4 3.5-1.5 3.1-1.9 2.2-2.6.5-3.7-.4-3.9L15 24l-.1-3.3.4-.7 1.2-.3.5-.1-.5-1.4.4-1.6zm-2.4-4.6.6-.2-.2-.2-.3-.1h-.3l-.3.5.2.3zm40.6.2-1.7-.5-1.7.7-2.7 2.3-.9.5 1.6.2 2-.9zm-8 11.8v.2l.2-.2zm-.7.7h.5l.2-.4h-1.4l.5.4zm-5.2 17-.3-1-.5-.6-.5-.4-.8-2-1.3-1.2-1.7-.3-1.5.8-1.2 1.4-.5.8-.2 1-.6 1-.3.4.2.3.3.2.2.4.2.6v.5l1 1.8 2 .4 2.3-.6 1.7-.9.8-.6.4-.5.2-.7zM15.7 45v-.2l-.5-.1-.4.2-.3.7-.4.2-.3.3.2.3.7-.2.8-.5.3-.4zm-1.6-.1h-.4l.2.2h.3zm-2.3.6-.7.4-.3 1 .8.4.6-.4.2-.6-.4-.5zm2.6 2.5v-.3l-.3-.2v.2zm-1.5-.3.2.1h.1v-.1z",
        onClick: t[0] || (t[0] = (o) => e.onclick(o)),
        onDblclick: t[1] || (t[1] = (o) => e.ondblclick()),
        onMouseenter: t[2] || (t[2] = (o) => e.onenter(o)),
        onMouseleave: t[3] || (t[3] = (o) => e.onleave(o))
      }, null, 32)
    ], 8, W7)
  ]);
}
const Y7 = /* @__PURE__ */ It(z7, [["render", q7]]), U7 = {
  mixins: [bs],
  props: {
    config: {
      type: Object,
      required: !0
    }
  }
}, G7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 43 50"
}, X7 = ["stroke"];
function K7(e, t, n, s, i, r) {
  return O(), F("svg", G7, [
    g("g", {
      fill: "#5C68E5",
      stroke: n.config.colorStroke,
      "stroke-width": "0.2%"
    }, [
      g("path", {
        class: "FR-972",
        d: "m35.1 48 1.4-.1 1.1-.5 1-1.4 1.2-3 1.2-.5v-.7l-.6-1.2-.3-1.7-.6-1.4-1.2-.6.3-.5.1-.3.3-.3.6-.3-.8-1.1-.3-1.2v-1.3l.4-1.3-1.3.7.1-.8-.1-1-.3-.7-.7-.3-1-.3-.3-.6-.2-.7-.2-.5-2-1.2-.8-.8-.6-1.5.6-.3.3-.2.4-.2h.7l-3.3-1.5-.8 1.2-.9-.3-.1-.9 1.2-.6-.8-.8 2.7-1.5-.5-.6-.6-.3-.7-.1-.9.4-.2-2.3.3-1.9.8-.6 1.1 2 2.1-2.2-.2-.6.3-.4.6-.4.6-.6h-2.3l-2.3.6-2 1-1.4 1.2-1.7-3.6-1.2-.3-.5-.7-.2-.9-.4-.8-1.6-1-3.8-1.8-4.4-2.8L9.1 0 5.7.1 1.8 2.3l-.9.8-.6 1.1L0 5.6l.3 1.5.7 1.2 2.8 3 .7 1 .6 1.2.2 1.3-.2.6-.3.7-.2.7.4.7.4.5.3.5.3.5v.7l.8 1.8 1.7 1.7 3.5 2.5.4.4.6 1.2.4.5.6.1 2.1-.1h2.1l1.1-.2 1.5-.5.2 1.7.7 1.4.8 1.1.3.6-.7 1.5-1.4.6-1.5-.5-1.1-1.6-.8.9-2.6 1.2-2.7 2.9.9.5.5.4.1.4-.1.7 2.2 3.1.8.5 1.5-.2 2.4-1 1.5-.3 5.8.8 2.7-.5.6.2-.1 1 1.6.1 1.6-1 1.3-.5 1 1.4-.1 1.5-1 .6-1.1.3-.6 1.1.4 1.5z",
        onClick: t[0] || (t[0] = (o) => e.onclick(o)),
        onDblclick: t[1] || (t[1] = (o) => e.ondblclick()),
        onMouseenter: t[2] || (t[2] = (o) => e.onenter(o)),
        onMouseleave: t[3] || (t[3] = (o) => e.onleave(o))
      }, null, 32)
    ], 8, X7)
  ]);
}
const J7 = /* @__PURE__ */ It(U7, [["render", K7]]), Z7 = {
  mixins: [bs],
  props: {
    config: {
      type: Object,
      required: !0
    }
  }
}, Q7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 40 50"
}, t_ = ["stroke"];
function e_(e, t, n, s, i, r) {
  return O(), F("svg", Q7, [
    g("g", {
      fill: "#5C68E5",
      stroke: n.config.colorStroke,
      "stroke-width": "0.2%"
    }, [
      g("path", {
        class: "FR-973",
        d: "m7.8 0 .3.1.3.1h1l.2.1.3.2h.1l.2.1.1.1.2.1.2.1.2.1.2.2.3.1h.1l.1.1h.1l.5.3h.1l.2.1h.1l.1.1h.1l.1.1h.1v.1h.1l.1.1.2.1h.1l.4.2v.2l.1-.1v-.1h1l.2.1h.1l.4.1.1.1h.3l.2-.1-.1-.1h.1v-.1h.2v-.1l.3.1.2.1v.1l.3.1h.1l.2.1.2.1h.1l.1.1h.2v.1h.1v.1h.1v.1h.1l.1.1.1.1h.1l.1.1h.1l.3.2.3-.1h.1l.3.2h.2l.3.2.4.2.1.1h.1v.1l.2.1h.1l.1.1h.1l.1.2v-.1l.1-.1v.1h.1l.1.1v.1l.1.1.1.1h.1l-.1.1h-.1.1l.1.1v-.1l.1.1h.1l.2.2v-.1l.1.1.1.1.1.1v.2h.1l.1.1.1.1v.2h.1v.1l.2.2.1.1h.1l.1.1.1.1.1.1h.2l.1.2.2.3h.1l.1.1h-.1v.1l.1.1.1.1h.1l.2.1.2.3h.1v.1l.1.1.1.1.2.1h.2V9l.1.1.1.1.1.1h.1l.1.1.1.1h.1v.1h.1l.1.1.1.1.1.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1l.1.1.1.2.1.1.2.2h.3l.1-.1v-.1h-.1v-.1h.2v-.1.1-.1l.1.1.1-.1h.1l.1.1h.1v.1l.2.1.1.1.1.1h-.1v.2l.1.1h.1l.1.1.2.3h.2l.1.1.1.1.1.1v.2h.1v-.1l.1.1h.1v.1h.1l.1.1v.2h.1l.1.1v-.1l-.1-.1.1.1h.1v.2h.1v-.1l.1.1v.1h.1v.1h.1l-.1-.1.2.2h.1l.1.1h.1l.1.1h.1l.1.1h.1v.1h.1v.1h-.1.1l.1.1.1.1v-.1.2h.1v.2h.1-.1l.2.1.2.2h.4l.4-.2v-.1h.3l.1.1h.1v.1h.1l.1.1h.1l.1.1.1.1.1.1h.1l-.1.1h.2v.1l.1.2h.1l-.1-.1h.1v.3-.1.1h.1v.3l.1.1v.4l.1.1v.6l.1.2h.1v.1h.1v.2h-.1v.2h.1v.1l.1.1h.1l.1.2h.3v-.1h.1v.2h-.1l-.1.1v.1l-.1.1-.1.1.1.2v.2l.1.2.1.1v.1l.1.1.1.2h.1v.2l.1.1h.1v.1l.1.1.6-.1-.1.6v.3l-.1.2-.2.3v.2l-.1.5-.2.4-.1.1-.1.1-.3.1-.2.1-.2.1-.3.2-.2.4-.1.1-.1.1v.6l-.2.2-.2.3-.1.2-.2.1-.5.5-.2.1-.2.2-.2.1v.1l.1.3v.2l-.2.1h-.3l-.1.1-.1.1-.2.5v.4l-.1.3-.3.3-.2.1-.3.8v.1h-.1l-.1.1v.1l-.2.4v.1l-.2.2-.2.3-.5.9-.1.2-.3.3v.2l-.1.2-.1.1-.4.5h-.1l-.1-.1-.1.1-.3.2-.2.4v.3h-.2l-.1.1h-.1l-.1.3-.1.1.1.1h-.2v.1l.1.1v.3l.2.1v.2l-.1.2-.2.3v.1l-.1.1v.2l-.2.2-.1.5-.2.1v.4h.1l.1.1h-.1l-.1.2h-.3l-.1.1-.3.5-.4.9v.2l-.1.1.1.1-.2.2-.1.2-.1.2-.1.3-.2.4h-.2l-.1.1v.1l.1.1v.3h.1l.1.1v.3l-.1.1v.1h-.1l-.1.1v.2l.1.1-.1.1-.3.3-.1.2-.1.1-.1.1H25l-.2.1h.1v.2h-.2v.1h-.1l-.1.1v.1l-.1.2v.2l-.1.1-.1.2H24l-.2.1-.1.1h-.1v.1l-.1.1h-.1l-.4.2h-.1v.1h-.1l-.1.1-.1.1h-.1l-.2.1h-.2l-.1.1v.1h-.2l.1.1-.1.1-.2.1v.2l-.1.1-.1.2-.1.2-.1.2h-.3l-.1-.1v.2l-.1.1h-.2l-.4.1-.2-.1h-.1l-.1-.1h-.3l-.1-.1-.1-.1-.2-.3h-.3l-.1-.1-.2.1-.1-.1-.1.1h-.7l-.1-.1-.1-.1-.2-.4-.1-.1-.1-.1h-.2l-.3-.1-.2-.1-.2.1-.4.1-.3.1h-.6l-.2-.1-.3-.5-.2-.1-.1-.1-.2.1h-.2l-.3.2-.3.1h-.3l-.1.1-.3.1h-.5l-.5.1-.2-.1h-.1l-.3-.1-.3-.3-.1-.1-.1-.3v-.1l-.2-.1h-.1l-.1.1-.2.2-.1.2v.1l-.2.1h-.6l-.4.4h-.1l-.1-.2h-.2v.1l-.1.1v.4l-.2.2-.2.1h-.1l-.3.1-.1.2-.2.1h-.1l-.2-.1h-.2L6 47l-.1.1-.1.3v.2l-.1.2-.1.1h-.1l-.1-.1H5l-.1-.2-.1-.3h-.4l-.9.3h-.2l-.3-.1h-.3l-.1-.1-.1-.2-.1-.1-.1-.2-.1-.1h-.5l-.2-.1h-.4l-.2-.1-.3-.4H.5l-.1-.1H.1L0 46v-.1l.1-.1h.2v-.1l-.1-.1.5-.1h.1l.1-.1.1-.1h.2l.2-.2V45l-.1-.2-.1-.3.1-.5v-.2l.2.1.1-.1.3-.3.1-.1v-.1l.1-.1h.1l.1-.2.1-.1.2-.5-.1-.2h.1l.1-.1V42l.1-.3.1-.1.1-.1-.1-.1v-.1l.2-.3.2-.2h.1l.1-.2.1-.4v-.1h.1V40h.2l.1-.2v-.1h.1l.1-.1h-.1l.1-.1.1-.1v-.2h.1v-.6h.2l.1-.1v-.3h-.2V38l.1-.3v-.2l.1-.1.1-.1v-.4H5l-.1-.1h-.1l-.1-.1-.1-.2h.1l.1-.1v-.3l-.1-.2-.1-.2v-.1l.2-.2-.1-.2.1-.1-.1-.2v-.1l-.1-.1h-.1l-.1.1h-.1v-.1l.1-.1v-.1h-.1v-.1h.1l.1-.3.1-.2-.1-.1.1-.1h.2l.1-.1v-.1l.1-.1.1-.1v-.2l.2-.2.2-.2.2-.2H6l.1-.2.1-.1.1-.5.1-.3v-.1l.2-.2.1-.1.1-.2.1-.1-.1-.3.2-.4v-.9l.1-.3v-.1l.1-.1.1-.1v-.1l-.1-.2-.1-.2-.1-.2h-.1l-.2.2h-.2l-.1-.1v-.2l-.2-.1-.2-.3V27l-.1-.3-.2-.4-.3-.5h-.7l-.2-.1v-.2l.1-.2v-.1l-.1-.1-.4-.1-.2-.2-.1-.2-.1-.1v-.1l-.2-.1-.1-.2-.1-.1-.1-.3-.1-.3-.2-.4-.1-.1-.2-.1h-.1l-.1-.1-.1-.1v-.2l.2-.2.1-.2v-.3l.2-.3.1-.1-.1-.1-.1-.1-.2-.1-.2-.1-.3-.1v-.3l.1-.3v-.5l-.1-.3v-.6l-.2-.4-.1-.1-.1-.1V18l-.1-.3-.1-.1V17l-.2-.7.1-.2.3-.2v-.1l.1-.3v-.4l-.1-.1-.2-.3.1-.2v-.8l-.2-.2h-.2l-.1-.1.1-.4v-.2l-.1-.3v-.8l-.1-.4v-.1l.1-.1.1-.2.1-.2.1-.1V10l.1-.3.1-.3.1-.4.2-.2.2-.2.2-.2v-.2l.1-.1.1-.1.1-.2.3-.5.3-.6.4-.3L4 6l.2-.1.2-.1.3-.4.3-.1.2-.1.1-.1v-.4l.1-.2.4-.4.2-.4.5-.5.2-.2.1-.3.1-.4v-.6l.1-.1v-.3l.1-.2.1-.1.1-.2h.1V.4l.1-.1.1-.2V0z",
        onClick: t[0] || (t[0] = (o) => e.onclick(o)),
        onDblclick: t[1] || (t[1] = (o) => e.ondblclick()),
        onMouseenter: t[2] || (t[2] = (o) => e.onenter(o)),
        onMouseleave: t[3] || (t[3] = (o) => e.onleave(o))
      }, null, 32)
    ], 8, t_)
  ]);
}
const n_ = /* @__PURE__ */ It(Z7, [["render", e_]]), s_ = {
  mixins: [bs],
  props: {
    config: {
      type: Object,
      required: !0
    }
  }
}, i_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 56 50"
}, o_ = ["stroke"];
function r_(e, t, n, s, i, r) {
  return O(), F("svg", i_, [
    g("g", {
      fill: "#5C68E5",
      stroke: n.config.colorStroke,
      "stroke-width": "0.2%"
    }, [
      g("path", {
        class: "FR-974",
        d: "m20.4 0-1 .5-1.6-.3-1.7.5-.6.2-3.7 2.8-.6.9-1.3.6-.6.1-.2-.3.1.3h.2v.6l-1-.2.5-.2v-.4l-1 .2-1.6-.5-.5.2-.1.9H6v-.3l.3.1-.2.7-.3-.2-.1.6.1-.6.1-.1h-.3l-.1 1.1-.3.5.5 1.9-.4 2.2-2 1.6-.7.3-1-.2L0 15.2v.6l.6 1-.2 2.4.8 1.2 2 1.6-.1.4 1.6 1.7.1 1.7.8.3.5.7v2l-.6 1.9.5.4.6 2.1 1.6.9.8.8v.4l.9.6.3.9-.2.4.7.7 2.2.3 2.1.7.8.5 1.9 2.3.8.4 1.7.2.5.3.2.7.9.5 1 .1-.4-.1h.4l.1-.3-.1.6h.2l.3.4 1.5-.1 1.9.9 1.3.3 1.1 1 .3-.3 1.5.5 1.3-.5.3.4.8.3.9.8 2.4-.5.8.7 1.2-.7 1 .2.8-.9 2.5.2 1.6-.7 2-.1.5-.5 1.7.2 1.9-1.4.9-1.2.1-.6-.5-2 .4-2-.4-.8-.2-1.8.7-3 .5-1.2.9-1 .1-1.6.9-.2-.3-1.7.2-.5-.7-.7-.1-.8-1.4-.6-1.2-1.1-1.3-.2-.9-1.5-.8-.7-.5-1-1.6-1.8-.6-1 .1-.8-1.3-1.7-.8-.4-.5-.9-.2-3.6-.3-1.3-1.2-1.9L39.1 5l-1.2-.8-1-.4-1.7-.2-2.5-1.4-.9.2-2-.6-.7.4-.8-.1L25.1 1l-1.4.3h-1.4z",
        onClick: t[0] || (t[0] = (o) => e.onclick(o)),
        onDblclick: t[1] || (t[1] = (o) => e.ondblclick()),
        onMouseenter: t[2] || (t[2] = (o) => e.onenter(o)),
        onMouseleave: t[3] || (t[3] = (o) => e.onleave(o))
      }, null, 32)
    ], 8, o_)
  ]);
}
const l_ = /* @__PURE__ */ It(s_, [["render", r_]]), a_ = {
  mixins: [bs],
  props: {
    config: {
      type: Object,
      required: !0
    }
  }
}, c_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 38 50"
}, h_ = ["stroke"];
function d_(e, t, n, s, i, r) {
  return O(), F("svg", c_, [
    g("g", {
      fill: "#5C68E5",
      stroke: n.config.colorStroke,
      "stroke-width": "0.2%"
    }, [
      g("path", {
        class: "FR-976",
        d: "M30.8 19.5V19l-.3-.2h-.2v.4l.1.1h.3zl.2.1v.3h.4v.1l.2.1h.2l.2.2h-.1.1l.2.2.2.1v.1l.1.1.2.6.4.4.2.4v.8h.1v.2l.2.1h.1l.2.1h.2l.2.5h.2v-.1L34 23v-1l.1-.1v-.1l.2-.2v-.1h.1v-.1h.9v-.2h.1l.1-.2.2-.2v-.2h-.2v-.4l-.2-.1v-.3l.2-.1v-.3l.2-.1h.1v.2h.1l.1-.1v-.3h-.5V19l.3-.3-.2-.2h-.2v-.1h-.1v-1H35l-.1-.1v-.1l-.1-.1-.1-.1h-.1v-.2h-.1l-.1-.1h-.1v-.3h-.1v-.1l-.2-.1v.1h-.1v.2h-.1v.1l-.2.1v.2l-.3.3-.2.2-.1.1-.2.2-.3.2-.7.7-.4.6.1.1h.2v-.1h.2l.2-.1v-.3H32v-.2h.1v.3h.1v-.1h.1v-.3h.4v.4l-.3.2v.2l-.2.2-.3.3v.3h-.3v-.2h-.2l-.2-.1.1-.1h.3v-.2.1H31h.2l.1-.3h-.1zM16.6 48l.2-.1.2-.1.1-.2h.1l.1-.3.2-.3v-.2h.2v-.2l.2-.2V46h-.1v-.3l-.2-.1v-.3h.1v-.1h.1l.2-.1v-.2h.1l.1-.1h1.1v.1h.1v.1l.2.1v.4h.1l.2.3v.8l.1.2v.1l.1.1v.3h.5V47h-.1l-.1-.1v-.4l.1-.1v-.2h.1l.1-.2h.3l.3-.1h.1l.2.1h.2l.2.2h.2v.1h.2V46l.1-.1.2-.1h.1v-.2l.1-.1h.1v-.1h.3V45h.1l.1-.2h.1l.2-.2-.1-.1h-.8v.2h-.2l-.4-.2-.1-.1-.1-.1-.2-.3h-.6l-.2-.2-.2-.1-.2-.2h-.1l-.2-.1-.1-.2-.1-.4v-.4l-.1-.1v-.2l-.2-.1-.1-.2h-.2l-.1-.1v-.2h-.1l-.2-.3V41l.2-.3v-.2h.1l.1-.2h.4l.2.1h.2l.2.1V40l-.3-.5-.1-.1v-.5l.2-.2.1-.3.1-.1v-.1l.1-.1h.3l.1-.1h.2v-.3h-.1v-.4l.2-.1.1-.2h1.1v.1h.1v.1l.2.1.3.1h.7l.4.2v-.1l-.4-.1h-.2v-.2h-.1V37h-.2v-.2l-.2-.1H23l-.1-1.4.2-.8-.1-.3h.1l.2-.1.3-.2h.1l.1-.1h.3v-.1h.3v-.1h.3v-.3h.1l.2-.2.2-.2h.3v-.3h-.2V32h.2v-.3h.1l.2-.2.2-.2V31h-.4l-.4.1-.2.1-.2-.2-.2-.3v-.1l.1-.5h.1v-.2l-.1-.1h-.2l-.2.1-.3-.2-.1-.1h-.1l-.3-.2V29l-.1-.2v-.1l-.1-.1H23v.1h-.2l-.1-.1v-.4l-.1-.1h-.1v-.6l.1-.1h-.1v-.1h-.1v-.2l-.2-.1v-.2h-.1v-.3l.1-.2h.1v-.1l.1-.1V26h.1l.2-.2v-.2h.3v-.1h-.6v-.4l.1-.4h.2v-.2h.1v-.1l.3-.2h.4l.1-.1v-.4h.1v-.3l.2-.2v-.4h.1l.1-.1.2-.2h.1v-.2l.1-.1.2-.1.3-.3h.2v-.2h.1v-.8h.1l.2-.1v-.1l.2-.1.2-.2.3-.3.3-.2.1-.1h.4v-.2h.2l.1-.1h.1v.1l.1.1h.3v-.1h.1V19h-.5l-.1-.1v-.2h-.1v-.2h.1v-.2h-.3v-.1l-.3-.1v.1l-.2-.1v-.4h.1v-.1h.1l.1-.1v-.2h.1v-.1l.1-.2v-.3h.3v.7h-.1v.2H27v.3h.5l.1-.3.1-.5h.1v-.4l.5-.1v-.1l-.1-.3H28l-.2-.4v-.2l.1-.1v-.3l-.1-.1h-.5V15H27v-.1l-.2-.1h.1v-.3l-.3-.1V14h-.2l-.5.1-.2-.1v-.3H25v-.2h-.1v-.2h-.1v-.2l.2-.1.1-.5H25v.3h-.2v.1h-.1v-.1h-.4v-.3H24v-.2h-.4l-.1-.1v-.1l-.2.1v.1h-.9l-.1-.1v-.1H22V12h-.7v-.1H21l-.1.1v.1h-.5l-.6-.2-.1-.2h-.1l-.2-.1v-.1l-.1-.3-.2-.2-.2-.3-.2.1v.1h-.1v.2h.1l.3.1v.4h-.2v-.2h-.3v.1l.1.2h.1l-.4.3v.2l-.4.5-.5.2-.5-.1v-.6h-.1V12h-2.1l.2-.3-.2-.2-.2-.2-.2-.3v-.6l-.2-.1-.1-.2h-.1l-.1-.2h-.2l-.1-.2v-.8l.4-.2h.2V9h.2v-.5l-.2.1h-.3l-.2-.1-.2-.1h-.2L13 8l-.2-.1-.2-.2h-.3l-.1-.1v-.1H12v-.3l-.1-.1v-.3h.3v-.1l-.1-.1-.1-.2h-.4v-.1l-.1-.2V6h-.8v-.2h-.1v-.2h.1l.1-.1.1-.2.1-.1h-.3v-.1h-.4l-.1-.1H10v-.2h-.5v-.1h-.4L9 4.5v-.4h.1V4h.2l.1-.1h.1v-.2h.3l.1-.1h.2v-.1h.3v-.1h.2l.1-.1h.4l.1-.1h-.3v-.1h-.2v-.3l.1-.1v-.4h.2l.1-.1v-.1h.2V2h-.1v-.1H11v.3h-.1l-.1.1v.1h-.1v.1h-.1v.1h-.2l-.1.1v.1H10V3h-.4l-.1-.1h-.1V3h.1v.6h-.2v.1h-.1v.1H9V4h-.4v.5h-.1v.1h-.2l-.1.1v.8l.1.1v.1l-.1.1-.1.1-.2.1h-.1l-.2.1-.2.1h-.6L6.6 6h-.3v-.1h-.1v.2h.1l.2.1h.2l.1.1.1.1H7v.9h-.1v.1h-.1l-.1.2v.1h-.2v-.1h-.2v.1h.1v.1h.1V8h-.1l-.1.1v.1h-.1v.1H6l-.1.1h-.2v.1h-.1l-.1.1-.3-.1h-.6v-.1h-.4v.2H4v.2l-.2.1h.3v.7H4v.3l-.2.1v.2l-.1.1-.2.3-.2.1v.1l-.1.1v.1l-.2.2h-.3v.2h1.4l.3.1h.2l.1.1v.1l.1.1v.1l.2.2-.1.1-.2.1v.3l-.1.3-.1.1h-.1l-.2.2-.2.2-.4.1-.2.1v.2l-.3.2-.1.2v.5l.1.1.1.1h.1l.1.1.1.2H4v.2l.1.1v.2h.3l.1-.1.1-.2v-.1l.2-.1h.7l.1.1.1.1h.1v.3H6v.3h.2v.1l.4.2h.1v.1h.1v.1l.2.2v.1h.1v.1h.1v.1h.2v.1l.3.1.3-.3.7.2.2.1.1.1h.1v.1l.2.2.1.2h.2l.1-.1h.1v-.2h.2v-.2l.1-.1V17l.2-.2h.2v.2h.2v.1l-.1.1v.2h.1v.2l.1.2v.2h-.2v.9h-.2v.1h-.1l-.1.1v.1H10l-.1.1h-.2v.3h.1l.1.1.1.2v.3h.1v.2l1.2.1v-.1l.2.1v.3l-.7.2-.2.1v.4h-.1v.7l.4.4v.5h.1v.2h.1v.8h-.2v.7l-.1.3-.1.3-.2.5v.1l.3.2h.7l.1.1h.4l.1.1h.1l.2.2h.2v.4l-.1.2h-1l-.3.2-.3-.2h-.2v.2l-.3.4-.2.2-.2.2h-.5v.2l.1.1h.2v.1l.1.1h.1v.1h.1v.1l.1.1.1.1v.2h.1v.1h.2v.1h.2v.1l.1.1v.1h.7v.1h.2l.2.1v.1l.2.2v.3h.2v.3l.1.1v.1h.1v.1l.1.1v.1l.1.2h.2v.1l.2.2v.1l.2.1v.2h.4l.2.1v.1h.2l.3.7h.4l.1.1h.2v.4l.2.5v.6h.3l.1.1v.4l.1.2h.2l.1.2.1.1.1.1v.2l.1.1v.3l.1.2.1.2v.1l.1.2v.6l-.3.9-.4.4-1 .3h-.6l-.6-.4-.3-.2v-.2l-.2-.1h-.3l-.4-.2-.2-.1-.1-.1H12V38h-.4l-.2-.1h-.1v-.2H11l-.1-.2h-.1l-.2-.4v-1.3l.1-.1v-.5l-.3-.3-.1-.1v-.2h-.6l-.1-.1H7.4l-.2.1h-.5v.4H7l.1.1h.1l.3.5.2.5v.3l.2.1v.5l.2.1v.3l.2.2.1.1h.3l.2.3v.1l.1.1v.2l-.2.1v.2h.4l.2-.2.2-.1h.2v-.2h.6l.2.2.1.2.2.2v.6l-.1.1h-.1v.6l-.1.1v.4l-.1.2-.1.2-.2.2-.2.2-.1.2-.2.2-.1.2h-.3l-.2.1-.2.1-.3.2h-.1l-.1.1-.1.1H8v.4h-.1v.1H8l.2-.1h.3l.4.3.6.4.5-.3h.4l.2-.3.2-.2.1-.2v-.1l.7.3v1.4l-.1.1-.2.1v.8l.2.4-.2.4-.2.2v.4h.2l.1.2.1.2v.1h.1V47l.3-.8V46l.4-.4.2-.1h.2l.2-.1.3.1.3.1h.1v.3l.2.4-.2.5.1.2v.4l.3-.1h.2l.1-.1h.2V47l.1-.2h.4l.4.1v.3l.2.3v.3l.2.1h.3zM1 0 .9.3v.1L.8.5H.7L.5.8H.3v.1H0V1l.1.2v.2h.4l.1-.1h.2l.2.1.2.2.2.1.1.2v.4l-.1.1h-.2v.1l-.1.2v.2l.1-.2v-.2h.6l.2-.2V2l.2-.1v-.1h.2l.3-.2H3v-.3l-.1-.1h-.1L2.4 1V.7H2V.5L1.7.3h-.2V.2h-.2z",
        onClick: t[0] || (t[0] = (o) => e.onclick(o)),
        onDblclick: t[1] || (t[1] = (o) => e.ondblclick()),
        onMouseenter: t[2] || (t[2] = (o) => e.onenter(o)),
        onMouseleave: t[3] || (t[3] = (o) => e.onleave(o))
      }, null, 32)
    ], 8, h_)
  ]);
}
const u_ = /* @__PURE__ */ It(a_, [["render", d_]]), Ap = {
  France: F7,
  FranceReg: H7,
  // FranceAcad,
  Guadeloupe: Y7,
  Martinique: J7,
  Guyane: n_,
  Reunion: l_,
  Mayotte: u_
}, f_ = {
  name: "MapChart",
  components: {
    MapInfo: Dp,
    ...Ap
  },
  mixins: [W1],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    data: {
      type: String,
      required: !0
    },
    value: {
      type: [Number, String],
      default: ""
    },
    date: {
      type: String,
      required: !0
    },
    level: {
      type: String,
      default: "dep"
    },
    name: {
      type: String,
      default: "Data"
    },
    selectedPalette: {
      type: String,
      default: "sequentialAscending"
    },
    colors: {
      type: Array,
      default: void 0
    }
  },
  data() {
    return {
      dataParse: {},
      widgetId: "",
      scaleMin: 0,
      scaleMax: 0,
      colorLeft: "",
      colorRight: "",
      isDep: !0,
      isReg: !1,
      isAcad: !1,
      zoomDep: "",
      InfoProps: {
        localisation: "",
        names: [],
        min: 0,
        max: 0,
        colorMin: "",
        colorMax: "",
        value: 0,
        valueNat: 0,
        date: ""
      },
      FranceProps: {
        viewBox: "0 0 1010 1010",
        displayDep: {},
        colorStroke: "#FFFFFF"
      },
      DromProps: {
        colorStroke: "#FFFFFF"
      },
      tooltip: {
        top: "0px",
        left: "0px",
        visibility: "hidden",
        value: 0,
        place: ""
      },
      displayFrance: "",
      displayGuadeloupe: "",
      displayMartinique: "",
      displayMayotte: "",
      displayReunion: "",
      displayGuyane: "",
      dromColor: "#6b6b6b"
    };
  },
  watch: {
    $props: {
      handler() {
        this.widgetId && this.createChart();
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3), this.isDep = this.level === "dep", this.isReg = this.level === "reg", this.isAcad = this.level === "acad";
  },
  mounted() {
    this.createChart(), this.$forceUpdate(), document.documentElement.addEventListener("dsfr.theme", (t) => {
      this.changeTheme(t.detail.theme);
    });
  },
  methods: {
    createChart() {
      const e = this.$refs[this.widgetId];
      try {
        this.dataParse = JSON.parse(this.data);
      } catch (c) {
        console.error("Erreur lors du parsing des données data:", c);
        return;
      }
      const t = this.choosePalette();
      this.colorLeft = t[0], this.colorRight = t[t.length - 1], this.InfoProps.colorMin = this.colorLeft, this.InfoProps.colorMax = this.colorRight, this.InfoProps.date = this.date, this.InfoProps.names = this.name;
      const n = [];
      let s = [];
      if (this.FranceProps.displayDep = {}, this.zoomDep) {
        if (this.isDep) {
          const c = this.getDep(this.zoomDep).region_value;
          s = this.getDepsFromReg(c);
        } else this.isReg ? s = this.getAllReg() : this.isAcad && (s = [this.getAcad(this.zoomDep).value]);
        for (const c of s)
          n.push(this.dataParse[c]);
      } else
        for (const c in this.dataParse)
          n.push(this.dataParse[c]);
      this.scaleMin = Math.min(...n), this.scaleMax = Math.max(...n);
      const i = Cc().domain([this.scaleMin, this.scaleMax]).range([this.colorLeft, this.colorRight]);
      let r = [], o = [], l = [], a = [];
      for (const c in this.dataParse) {
        const h = "FR-" + c, d = e.getElementsByClassName(h);
        if (!this.zoomDep)
          d.length !== 0 && d[0].setAttribute("fill", i(this.dataParse[c])), this.FranceProps.displayDep[h] = "";
        else {
          const u = document.querySelector("." + h).getBBox();
          this.zoomDep === c ? (d.length !== 0 && d[0].setAttribute("fill", i(this.dataParse[c])), this.FranceProps.displayDep[h] = "", r.push(u.x), l.push(u.y), o.push(u.x + u.width), a.push(u.y + u.height)) : s.includes(c) ? (d.length !== 0 && d[0].setAttribute("fill", this.colorLeft + "B3"), this.FranceProps.displayDep[h] = "", r.push(u.x), l.push(u.y), o.push(u.x + u.width), a.push(u.y + u.height)) : (d.length !== 0 && d[0].setAttribute("fill", "rgba(255, 255, 255, 0)"), this.FranceProps.displayDep[h] = "none");
        }
      }
      if (this.zoomDep) {
        if (this.isDep) {
          this.InfoProps.localisation = this.getDep(this.zoomDep).department;
          const c = Math.min(...r), h = Math.min(...l), d = Math.max(...o), u = Math.max(...a), f = d - c, m = u - h, p = Math.max(f, m);
          this.FranceProps.viewBox = `${c} ${h} ${p} ${p}`;
        } else this.isReg ? this.InfoProps.localisation = this.getReg(this.zoomDep).region : this.isAcad && (this.InfoProps.localisation = this.getAcad(this.zoomDep).academy);
        this.InfoProps.value = this.value, this.InfoProps.valueNat = this.dataParse[this.zoomDep], this.isDep && (this.displayFrance = "none", this.displayGuadeloupe = "none", this.displayMartinique = "none", this.displayMayotte = "none", this.displayReunion = "none", this.displayGuyane = "none", this.zoomDep === "971" && this.level === "dep" || this.zoomDep === "01" && this.level === "reg" ? this.displayGuadeloupe = "" : this.zoomDep === "972" && this.level === "dep" || this.zoomDep === "02" && this.level === "reg" ? this.displayMartinique = "" : this.zoomDep === "973" && this.level === "dep" || this.zoomDep === "03" && this.level === "reg" ? this.displayGuyane = "" : this.zoomDep === "974" && this.level === "dep" || this.zoomDep === "04" && this.level === "reg" ? this.displayReunion = "" : this.zoomDep === "976" && this.level === "dep" || this.zoomDep === "06" && this.level === "reg" ? this.displayMayotte = "" : this.displayFrance = "");
      } else
        this.InfoProps.localisation = "France", this.InfoProps.value = this.value, this.InfoProps.valueNat = 0, this.FranceProps.viewBox = "0 0 1010 1010", this.displayFrance = "", this.displayGuadeloupe = "", this.displayMartinique = "", this.displayMayotte = "", this.displayReunion = "", this.displayGuyane = "";
      this.InfoProps.names = this.name, this.InfoProps.min = this.scaleMin, this.InfoProps.max = this.scaleMax, this.InfoProps.colorMin = this.colorLeft, this.InfoProps.colorMax = this.colorRight;
    },
    displayTooltip(e) {
      if (br()) return;
      const t = this.$refs[this.widgetId], n = e.target.className.baseVal, s = n.replace("FR-", ""), i = t.getElementsByClassName(n);
      i[0].style.opacity = 0.8, this.tooltip.value = this.dataParse[s], this.isDep ? this.tooltip.place = this.getDep(s).department : this.isReg ? this.tooltip.place = this.getReg(s).region : this.isAcad && (this.tooltip.place = this.getAcad(s).academy);
      const r = t.querySelector(".france_container").getBoundingClientRect(), o = t.querySelector(".map_tooltip").getBoundingClientRect(), l = e.target.getBoundingClientRect(), a = window.innerWidth > 1e3 ? window.innerWidth / 30 : window.innerWidth / 15;
      let c = l.x - r.x + o.width - a, h = l.y - r.y;
      c + o.width + a > r.x && (c = l.x / 2 - r.x + o.width + a / 2), this.tooltip.top = h + "px", this.tooltip.left = c + "px", this.tooltip.visibility = "visible";
    },
    hideTooltip(e) {
      if (br()) return;
      this.tooltip.visibility = "hidden";
      const t = this.$refs[this.widgetId], n = e.target.className.baseVal, s = t.getElementsByClassName(n);
      s[0].style.opacity = 1;
    },
    changeGeoLevel(e) {
      const t = e.target.className.baseVal.replace("FR-", "");
      this.zoomDep = t, this.createChart();
    },
    resetGeoFilters() {
      this.zoomDep = "", this.createChart();
    },
    choosePalette() {
      return Kt(this.selectedPalette, this.colors);
    },
    changeTheme(e) {
      e === "light" ? (this.dromColor = "#6b6b6b", this.FranceProps.colorStroke = "#FFFFFF", this.DromProps.colorStroke = "#FFFFFF") : (this.dromColor = "#cecece", this.FranceProps.colorStroke = "#161616", this.DromProps.colorStroke = "#161616"), this.createChart();
    }
  }
}, p_ = { class: "fr-col-12 fr-col-lg-9 align-stretch" }, g_ = { class: "map" }, m_ = { class: "tooltip_header fr-text--sm fr-mb-0" }, b_ = { class: "tooltip_body" }, v_ = { class: "tooltip_value-content" }, y_ = { class: "tooltip_value" }, x_ = { class: "om_container fr-grid-row no_select" };
function w_(e, t, n, s, i, r) {
  var m;
  const o = Xe("MapInfo"), l = Xe("france"), a = Xe("france-reg"), c = Xe("guadeloupe"), h = Xe("martinique"), d = Xe("guyane"), u = Xe("reunion"), f = Xe("mayotte");
  return O(), me(ke, {
    disabled: !((m = e.$el) != null && m.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      Tt(o, { data: i.InfoProps }, null, 8, ["data"]),
      g("div", p_, [
        i.zoomDep ? (O(), F("button", {
          key: 0,
          class: "fr-btn fr-btn--sm fr-icon-arrow-go-back-fill fr-btn--icon-left fr-btn--tertiary-no-outline fr-ml-4w",
          onClick: t[0] || (t[0] = (...p) => r.resetGeoFilters && r.resetGeoFilters(...p))
        }, " Retour ")) : Mt("", !0),
        g("div", g_, [
          g("div", {
            class: "map_tooltip",
            style: P({ top: i.tooltip.top, left: i.tooltip.left, visibility: i.tooltip.visibility })
          }, [
            g("div", m_, X(i.tooltip.place), 1),
            g("div", b_, [
              g("div", v_, [
                g("div", y_, X(i.tooltip.value), 1)
              ])
            ])
          ], 4),
          i.isDep ? (O(), F("div", {
            key: 0,
            class: "france_container no_select",
            style: P({ display: i.displayFrance })
          }, [
            Tt(l, {
              config: i.FranceProps,
              onclick: r.changeGeoLevel,
              ondblclick: r.resetGeoFilters,
              onenter: r.displayTooltip,
              onleave: r.hideTooltip
            }, null, 8, ["config", "onclick", "ondblclick", "onenter", "onleave"])
          ], 4)) : Mt("", !0),
          i.isReg ? (O(), F("div", {
            key: 1,
            class: "france_container no_select",
            style: P({ display: i.displayFrance })
          }, [
            Tt(a, {
              config: i.FranceProps,
              onclick: r.changeGeoLevel,
              ondblclick: r.resetGeoFilters,
              onenter: r.displayTooltip,
              onleave: r.hideTooltip
            }, null, 8, ["config", "onclick", "ondblclick", "onenter", "onleave"])
          ], 4)) : Mt("", !0),
          g("div", x_, [
            g("div", {
              class: "om fr-col-sm",
              style: P({ display: i.displayGuadeloupe })
            }, [
              g("span", {
                class: "om_title fr-text--xs fr-my-1w",
                style: P({ color: i.dromColor })
              }, " Guadeloupe ", 4),
              Tt(c, {
                height: "50",
                config: i.DromProps,
                onclick: r.changeGeoLevel,
                ondblclick: r.resetGeoFilters,
                onenter: r.displayTooltip,
                onleave: r.hideTooltip
              }, null, 8, ["config", "onclick", "ondblclick", "onenter", "onleave"])
            ], 4),
            g("div", {
              class: "om fr-col-sm",
              style: P({ display: i.displayMartinique })
            }, [
              g("span", {
                class: "fr-text--xs fr-my-1w",
                style: P({ color: i.dromColor })
              }, " Martinique ", 4),
              Tt(h, {
                height: "50",
                config: i.DromProps,
                onclick: r.changeGeoLevel,
                ondblclick: r.resetGeoFilters,
                onenter: r.displayTooltip,
                onleave: r.hideTooltip
              }, null, 8, ["config", "onclick", "ondblclick", "onenter", "onleave"])
            ], 4),
            g("div", {
              class: "om fr-col-sm",
              style: P({ display: i.displayGuyane })
            }, [
              g("span", {
                class: "fr-text--xs fr-my-1w",
                style: P({ color: i.dromColor })
              }, " Guyane ", 4),
              Tt(d, {
                height: "50",
                config: i.DromProps,
                onclick: r.changeGeoLevel,
                ondblclick: r.resetGeoFilters,
                onenter: r.displayTooltip,
                onleave: r.hideTooltip
              }, null, 8, ["config", "onclick", "ondblclick", "onenter", "onleave"])
            ], 4),
            g("div", {
              class: "om fr-col-sm",
              style: P({ display: i.displayReunion })
            }, [
              g("span", {
                class: "fr-text--xs fr-my-1w",
                style: P({ color: i.dromColor })
              }, " La Réunion ", 4),
              Tt(u, {
                height: "50",
                config: i.DromProps,
                onclick: r.changeGeoLevel,
                ondblclick: r.resetGeoFilters,
                onenter: r.displayTooltip,
                onleave: r.hideTooltip
              }, null, 8, ["config", "onclick", "ondblclick", "onenter", "onleave"])
            ], 4),
            g("div", {
              class: "om fr-col-sm",
              style: P({ display: i.displayMayotte })
            }, [
              g("span", {
                class: "fr-text--xs fr-my-1w",
                style: P({ color: i.dromColor })
              }, " Mayotte ", 4),
              Tt(f, {
                height: "50",
                config: i.DromProps,
                onclick: r.changeGeoLevel,
                ondblclick: r.resetGeoFilters,
                onenter: r.displayTooltip,
                onleave: r.hideTooltip
              }, null, 8, ["config", "onclick", "ondblclick", "onenter", "onleave"])
            ], 4)
          ])
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const k_ = /* @__PURE__ */ It(f_, [["render", w_], ["__scopeId", "data-v-9889e725"]]), __ = {
  name: "MapChartReg",
  components: {
    MapInfo: Dp,
    ...Ap
  },
  mixins: [W1],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    data: {
      type: String,
      required: !0
    },
    value: {
      type: [Number, String],
      default: ""
    },
    date: {
      type: String,
      required: !0
    },
    region: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      default: "Data"
    },
    selectedPalette: {
      type: String,
      default: "sequentialAscending"
    },
    colors: {
      type: Array,
      default: void 0
    }
  },
  data() {
    return {
      dataParse: {},
      widgetId: "",
      scaleMin: 0,
      scaleMax: 0,
      colorLeft: "",
      colorRight: "",
      zoomDep: "",
      InfoProps: {
        localisation: "",
        names: [],
        min: 0,
        max: 0,
        colorMin: "",
        colorMax: "",
        value: 0,
        valueReg: 0,
        date: ""
      },
      FranceProps: {
        viewBox: "0 0 1010 1010",
        displayDep: {},
        colorStroke: "#FFFFFF"
      },
      tooltip: {
        top: "0px",
        left: "0px",
        visibility: "hidden",
        value: 0,
        place: ""
      },
      displayFrance: "",
      displayGuadeloupe: "",
      displayMartinique: "",
      displayMayotte: "",
      displayReunion: "",
      displayGuyanne: ""
    };
  },
  watch: {
    $props: {
      handler() {
        this.widgetId && this.createChart();
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.createChart(), this.$forceUpdate(), document.documentElement.addEventListener("dsfr.theme", (t) => {
      this.changeTheme(t.detail.theme);
    });
  },
  methods: {
    createChart() {
      const e = this.$refs[this.widgetId];
      try {
        this.dataParse = JSON.parse(this.data);
      } catch (c) {
        console.error("Erreur lors du parsing des données data:", c);
        return;
      }
      const t = this.choosePalette();
      this.colorLeft = t[0], this.colorRight = t[t.length - 1], this.InfoProps.colorMin = this.colorLeft, this.InfoProps.colorMax = this.colorRight, this.InfoProps.date = this.date, this.InfoProps.names = this.name;
      const n = [];
      let s = [];
      this.FranceProps.displayDep = {}, s = this.getDepsFromReg(this.region), s.forEach((c) => {
        n.push(this.dataParse[c]);
      }), this.scaleMin = Math.min(...n), this.scaleMax = Math.max(...n);
      const i = Cc().domain([this.scaleMin, this.scaleMax]).range([this.colorLeft, this.colorRight]);
      let r = [], o = [], l = [], a = [];
      for (const c in this.dataParse) {
        const h = "FR-" + c, d = e.getElementsByClassName(h);
        d.length !== 0 && d[0].setAttribute("fill", "rgba(255, 255, 255, 0)"), this.FranceProps.displayDep[h] = "none";
      }
      if (s.forEach((c) => {
        const h = "FR-" + c, d = e.getElementsByClassName(h);
        if (this.zoomDep) {
          if (this.zoomDep === c) {
            const u = d[0].getBBox();
            d.length !== 0 && d[0].setAttribute("fill", i(this.dataParse[c])), this.FranceProps.displayDep[h] = "", r.push(u.x), l.push(u.y), o.push(u.x + u.width), a.push(u.y + u.height);
          } else if (s.includes(c)) {
            const u = d[0].getBBox();
            d.length !== 0 && d[0].setAttribute("fill", this.colorLeft + "B3"), this.FranceProps.displayDep[h] = "", r.push(u.x), l.push(u.y), o.push(u.x + u.width), a.push(u.y + u.height);
          }
        } else if (s.includes(c)) {
          const u = d[0].getBBox();
          d.length !== 0 && d[0].setAttribute("fill", i(this.dataParse[c])), this.FranceProps.displayDep[h] = "", r.push(u.x), l.push(u.y), o.push(u.x + u.width), a.push(u.y + u.height);
        }
      }), r.length && l.length && o.length && a.length) {
        const c = Math.min(...r), h = Math.min(...l), d = Math.max(...o), u = Math.max(...a), f = d - c, m = u - h, p = Math.max(f, m);
        this.FranceProps.viewBox = `${c} ${h} ${p} ${p}`;
      }
      this.InfoProps.localisation = this.getReg(this.region).department, this.InfoProps.value = this.value, this.InfoProps.valueReg = this.dataParse[this.zoomDep], this.InfoProps.min = this.scaleMin, this.InfoProps.max = this.scaleMax;
    },
    choosePalette() {
      return Kt(this.selectedPalette, this.colors);
    },
    displayTooltip(e) {
      if (br()) return;
      const t = this.$refs[this.widgetId], n = e.target.className.baseVal, s = n.replace("FR-", ""), i = t.getElementsByClassName(n);
      i[0].style.opacity = 0.8, this.tooltip.value = this.dataParse[s], this.tooltip.place = this.getDep(s).department;
      const r = t.querySelector(".france_container").getBoundingClientRect(), o = t.querySelector(".map_tooltip").getBoundingClientRect(), l = e.target.getBoundingClientRect(), a = window.innerWidth > 1e3 ? window.innerWidth / 30 : window.innerWidth / 15;
      let c = l.x - r.x + o.width - a, h = l.y - r.y;
      c + o.width + a > r.x && (c = l.x / 2 - r.x + o.width + a / 2), this.tooltip.top = h + "px", this.tooltip.left = c + "px", this.tooltip.visibility = "visible";
    },
    hideTooltip(e) {
      if (br()) return;
      this.tooltip.visibility = "hidden";
      const t = this.$refs[this.widgetId], n = e.target.className.baseVal, s = t.getElementsByClassName(n);
      s[0].style.opacity = 1;
    },
    changeGeoLevel(e) {
      const t = e.target.className.baseVal.replace("FR-", "");
      this.zoomDep = t, this.createChart();
    },
    resetGeoFilters() {
      this.zoomDep = "", this.createChart();
    },
    changeTheme(e) {
      e === "light" ? this.FranceProps.colorStroke = "#FFFFFF" : this.FranceProps.colorStroke = "#161616", this.createChart();
    }
  }
}, M_ = { class: "fr-col-12 fr-col-lg-9 align-stretch" }, C_ = { class: "map" }, P_ = { class: "tooltip_header fr-text--sm fr-mb-0" }, S_ = { class: "tooltip_body" }, E_ = { class: "tooltip_value-content" }, D_ = { class: "tooltip_value" };
function A_(e, t, n, s, i, r) {
  var a;
  const o = Xe("MapInfo"), l = Xe("france");
  return O(), me(ke, {
    disabled: !((a = e.$el) != null && a.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      Tt(o, { data: i.InfoProps }, null, 8, ["data"]),
      g("div", M_, [
        i.zoomDep ? (O(), F("button", {
          key: 0,
          class: "fr-btn fr-btn--sm fr-icon-arrow-go-back-fill fr-btn--icon-left fr-btn--tertiary-no-outline fr-ml-4w",
          onClick: t[0] || (t[0] = (...c) => r.resetGeoFilters && r.resetGeoFilters(...c))
        }, " Retour ")) : Mt("", !0),
        g("div", C_, [
          g("div", {
            class: "map_tooltip",
            style: P({ top: i.tooltip.top, left: i.tooltip.left, visibility: i.tooltip.visibility })
          }, [
            g("div", P_, X(i.tooltip.place), 1),
            g("div", S_, [
              g("div", E_, [
                g("div", D_, X(i.tooltip.value), 1)
              ])
            ])
          ], 4),
          g("div", {
            class: "france_container no_select",
            style: P({ display: i.displayFrance })
          }, [
            Tt(l, {
              config: i.FranceProps,
              onclick: r.changeGeoLevel,
              ondblclick: r.resetGeoFilters,
              onenter: r.displayTooltip,
              onleave: r.hideTooltip
            }, null, 8, ["config", "onclick", "ondblclick", "onenter", "onleave"])
          ], 4)
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const N_ = /* @__PURE__ */ It(__, [["render", A_], ["__scopeId", "data-v-a18cab42"]]);
lt.register(Os, la, ui);
const O_ = {
  name: "PieChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    x: {
      type: String,
      required: !0
    },
    y: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      default: ""
    },
    fill: {
      type: [Boolean, String],
      default: !1
    },
    date: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: [Number, String],
      default: 2
    },
    selectedPalette: {
      type: String,
      default: ""
    },
    colors: {
      type: Array,
      default: void 0
    },
    unitTooltip: {
      type: String,
      default: ""
    }
  },
  data() {
    return this.chart = void 0, {
      widgetId: "",
      chartId: "",
      display: "",
      datasets: [],
      labels: [],
      xparse: [],
      yparse: [],
      nameParse: [],
      tmpColorParse: [],
      colorParse: [],
      colorHover: []
    };
  },
  watch: {
    $props: {
      handler() {
        this.chartId && (this.resetData(), this.getData(), this.createChart());
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    $n(), this.chartId = "dsfr-chart-" + Math.floor(Math.random() * 1e3), this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.resetData(), this.createChart(), this.display = this.$refs[this.widgetId].offsetWidth > 486 ? "big" : "small", document.documentElement.addEventListener("dsfr.theme", (t) => {
      this.chartId !== "" && this.changeColors(t.detail.theme);
    });
  },
  methods: {
    resetData() {
      this.chart && this.chart.destroy(), this.display = "", this.datasets = [], this.labels = [], this.xparse = [], this.yparse = [], this.nameParse = [], this.tmpColorParse = [], this.colorParse = [], this.colorHover = [];
    },
    getData() {
      try {
        this.xparse = JSON.parse(this.x), this.yparse = JSON.parse(this.y);
      } catch (t) {
        console.error("Erreur lors du parsing des données x ou y:", t);
        return;
      }
      let e = [];
      if (this.name)
        try {
          e = JSON.parse(this.name);
        } catch (t) {
          console.error("Erreur lors du parsing de name:", t);
        }
      for (let t = 0; t < this.yparse[0].length; t++)
        e[t] ? this.nameParse.push(e[t]) : this.nameParse.push("Série " + (t + 1));
      this.labels = this.xparse[0], this.loadColors(), this.datasets = this.yparse.map((t, n) => ({
        data: t,
        borderColor: this.colorParse[n],
        backgroundColor: this.colorParse[n],
        hoverBorderColor: this.colorHover[n],
        hoverBackgroundColor: this.colorHover[n]
      }));
    },
    createChart() {
      this.chart && this.chart.destroy(), this.getData();
      const e = this.$refs[this.chartId].getContext("2d");
      this.chart = new lt(e, {
        type: this.fill ? "pie" : "doughnut",
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options: {
          aspectRatio: this.aspectRatio,
          layout: {
            padding: {
              left: 50,
              right: 50,
              top: 0,
              bottom: 0
            }
          },
          plugins: {
            legend: {
              display: !1
            },
            tooltip: {
              enabled: !1,
              displayColors: !1,
              backgroundColor: "#6b6b6b",
              callbacks: {
                label: (t) => {
                  const n = this.datasets[t.datasetIndex].data[t.dataIndex];
                  return this.formatNumber(n);
                },
                title: (t) => t[0].label,
                labelTextColor: (t) => this.colorParse[t.datasetIndex][t.dataIndex]
              },
              external: (t) => {
                const s = (document.getElementById(this.databoxId + "-" + this.databoxType + "-" + this.databoxSource) ?? this.$el.nextElementSibling).querySelector(".tooltip"), i = t.tooltip;
                if (!s) return;
                if (!i || i.opacity === 0) {
                  s.style.opacity = 0;
                  return;
                }
                if (s.classList.remove("above", "below", "no-transform"), i.yAlign ? s.classList.add(i.yAlign) : s.classList.add("no-transform"), i.body) {
                  const d = i.title || [], u = i.body.map((x) => x.lines), f = s.querySelector(".tooltip_header.fr-text--sm.fr-mb-0");
                  f.innerHTML = d;
                  const m = i.labelTextColors[0], p = s.querySelector(".tooltip_value");
                  p.innerHTML = "";
                  const v = `${u[0][0]}${this.unitTooltip ? " " + this.unitTooltip : ""}`;
                  p.innerHTML += `
                    <div class="tooltip_value-content">
                      <span class="tooltip_dot" style="background-color:${m};"></span>
                      <p class="tooltip_place fr-mb-0">${v}</p>
                    </div>
                  `;
                }
                const { offsetLeft: r, offsetTop: o } = this.chart.canvas, l = Number(this.chart.canvas.style.width.replace(/\D/g, "")), a = Number(this.chart.canvas.style.height.replace(/\D/g, ""));
                let c = r + i.caretX + 10, h = o + i.caretY - 20;
                c + s.clientWidth > r + l && (c = r + i.caretX - s.clientWidth - 10), h + s.clientHeight > o + 0.9 * a && (h = o + i.caretY - s.clientHeight + 20), c < r && (c = r + i.caretX - s.clientWidth / 2, h = o + i.caretY - s.clientHeight - 20), s.style.position = "absolute", s.style.padding = i.padding + "px " + i.padding + "px", s.style.pointerEvents = "none", s.style.left = c + "px", s.style.top = h + "px", s.style.opacity = 1;
              }
            }
          }
        }
      });
    },
    loadColors() {
      let e = this.yparse;
      (this.selectedPalette === "" || this.selectedPalette === "categorical") && (e = this.yparse[0]);
      const { colorParse: t, colorHover: n } = yc({
        yparse: e,
        tmpColorParse: this.tmpColorParse,
        selectedPalette: this.selectedPalette,
        colors: this.colors
      });
      this.colorParse = [t.flat()], this.colorHover = [n.flat()];
    },
    choosePalette() {
      return Kt(this.selectedPalette, this.colors);
    },
    // eslint-disable-next-line no-unused-vars
    changeColors(e) {
      this.loadColors(), this.chart.data.datasets.forEach((t, n) => {
        t.borderColor = this.colorParse[n], t.backgroundColor = this.colorParse[n], t.hoverBorderColor = this.colorHover[n], t.hoverBackgroundColor = this.colorHover[n];
      }), this.chart.update("none");
    }
  }
}, R_ = { class: "fr-col-12" }, T_ = { class: "chart" }, L_ = { class: "chart_legend fr-mb-0 fr-mt-4v" }, F_ = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, I_ = {
  key: 0,
  class: "flex fr-mt-1w"
}, V_ = { class: "fr-text--xs" };
function B_(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      g("div", R_, [
        g("div", T_, [
          t[0] || (t[0] = g("div", { class: "tooltip" }, [
            g("div", { class: "tooltip_header fr-text--sm fr-mb-0" }),
            g("div", { class: "tooltip_body" }, [
              g("div", { class: "tooltip_value" }, [
                g("span", { class: "tooltip_dot" })
              ])
            ])
          ], -1)),
          g("canvas", { ref: i.chartId }, null, 512),
          g("div", L_, [
            (O(!0), F(ht, null, wt(i.nameParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.colorParse[0][a] })
              }, null, 4),
              g("p", F_, X(e.capitalize(l)), 1)
            ]))), 128)),
            n.date ? (O(), F("div", I_, [
              g("p", V_, " Mise à jour : " + X(n.date), 1)
            ])) : Mt("", !0)
          ])
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const $_ = /* @__PURE__ */ It(O_, [["render", B_]]);
lt.register(Vo, pi);
const H_ = {
  name: "RadarChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    x: {
      type: String,
      required: !0
    },
    y: {
      type: String,
      required: !0
    },
    name: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: [Number, String],
      default: 2
    },
    selectedPalette: {
      type: String,
      default: ""
    },
    colors: {
      type: Array,
      default: void 0
    },
    unitTooltip: {
      type: String,
      default: ""
    }
  },
  data() {
    return this.chart = void 0, {
      widgetId: "",
      chartId: "",
      display: "",
      datasets: [],
      labels: [],
      xparse: [],
      yparse: [],
      nameParse: [],
      tmpColorParse: [],
      colorParse: [],
      colorHover: []
    };
  },
  watch: {
    $props: {
      handler() {
        this.chartId && (this.resetData(), this.getData(), this.createChart());
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    $n(), this.chartId = "dsfr-chart-" + Math.floor(Math.random() * 1e3), this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.resetData(), this.createChart(), this.display = this.$refs[this.widgetId].offsetWidth > 486 ? "big" : "small", document.documentElement.addEventListener("dsfr.theme", (t) => {
      this.chartId !== "" && this.changeColors(t.detail.theme);
    });
  },
  methods: {
    resetData() {
      this.chart && this.chart.destroy(), this.display = "", this.datasets = [], this.labels = [], this.xparse = [], this.yparse = [], this.nameParse = [], this.tmpColorParse = [], this.colorParse = [], this.colorHover = [];
    },
    getData() {
      try {
        this.xparse = JSON.parse(this.x), this.yparse = JSON.parse(this.y);
      } catch (t) {
        console.error("Erreur lors du parsing des données x ou y:", t);
        return;
      }
      let e = [];
      if (this.name)
        try {
          e = JSON.parse(this.name);
        } catch (t) {
          console.error("Erreur lors du parsing de name:", t);
        }
      for (let t = 0; t < this.yparse.length; t++)
        e[t] ? this.nameParse.push(e[t]) : this.nameParse.push("Série " + (t + 1));
      this.labels = this.xparse[0], this.loadColors(), this.datasets = this.yparse.map((t, n) => ({
        pointRadius: 5,
        pointHoverRadius: 5,
        data: t,
        borderColor: this.colorParse[n],
        pointBackgroundColor: this.colorParse[n],
        backgroundColor: K(this.colorParse[n]).alpha(0.3).hex(),
        fill: !0,
        hoverBorderColor: this.colorHover[n],
        hoverBackgroundColor: this.colorHover[n]
      }));
    },
    loadColors() {
      const { colorParse: e, colorHover: t } = yc({
        yparse: this.yparse.map(() => [1]),
        // Simule une série avec une valeur unique
        tmpColorParse: this.tmpColorParse,
        selectedPalette: this.selectedPalette,
        colors: this.colors
      });
      this.colorParse = e.map((n) => n[0]), this.colorHover = t.map((n) => n[0]);
    },
    choosePalette() {
      return Kt(this.selectedPalette, this.colors);
    },
    changeColors(e) {
      this.loadColors(), this.chart.data.datasets.forEach((t, n) => {
        t.borderColor = this.colorParse[n], t.pointBorderColor = this.colorParse[n], t.pointBackgroundColor = this.colorParse[n], t.hoverBorderColor = this.colorHover[n], t.hoverBackgroundColor = this.colorHover[n], t.pointHoverBorderColor = this.colorHover[n], t.pointHoverBackgroundColor = this.colorHover[n];
      }), this.chart.options.scales.r.pointLabels.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.update("none");
    },
    createChart() {
      this.chart && this.chart.destroy(), this.getData();
      const e = this.$refs[this.chartId].getContext("2d");
      this.chart = new lt(e, {
        type: "radar",
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        options: {
          aspectRatio: this.aspectRatio,
          scales: {
            r: {
              angleLines: {
                display: !0,
                borderDash: [3, 3]
              },
              ticks: {
                display: !1
              },
              grid: {
                color: "#6b6b6b"
              }
            }
          },
          plugins: {
            legend: {
              display: !1
            },
            tooltip: {
              enabled: !1,
              mode: "index",
              displayColors: !1,
              backgroundColor: "#6b6b6b",
              callbacks: {
                label: (t) => {
                  const n = [];
                  return this.datasets.forEach((s) => {
                    n.push(s.data[t.dataIndex]);
                  }), n;
                },
                title: (t) => t[0].label,
                labelTextColor: () => this.colorParse
              },
              external: (t) => {
                const s = (document.getElementById(this.databoxId + "-" + this.databoxType + "-" + this.databoxSource) || this.$el.nextElementSibling).querySelector(".tooltip"), i = t.tooltip;
                if (!s) return;
                if (!i || i.opacity === 0) {
                  s.style.opacity = 0;
                  return;
                }
                if (s.classList.remove("above", "below", "no-transform"), i.yAlign ? s.classList.add(i.yAlign) : s.classList.add("no-transform"), i.body) {
                  const d = [this.xparse[0][i.dataPoints[0].dataIndex]], u = i.body.map((p) => p.lines), f = s.querySelector(".tooltip_header.fr-text--sm.fr-mb-0");
                  f.innerHTML = d[0];
                  const m = s.querySelector(".tooltip_value");
                  m.innerHTML = "", u[0].forEach((p, b) => {
                    if (p && i.dataPoints[b]) {
                      const x = i.dataPoints[b].datasetIndex, C = this.colorParse[x] ? this.colorParse[x] : "#000", S = `${p}${this.unitTooltip ? " " + this.unitTooltip : ""}`;
                      m.innerHTML += `
                        <div class="tooltip_value-content">
                          <span class="tooltip_dot" style="background-color:${C};"></span>
                          <p class="tooltip_place fr-mb-0">${S}</p>
                        </div>
                      `;
                    }
                  });
                }
                const { offsetLeft: r, offsetTop: o } = this.chart.canvas, l = Number(this.chart.canvas.style.width.replace(/\D/g, "")), a = Number(this.chart.canvas.style.height.replace(/\D/g, ""));
                let c = r + i.caretX + 10, h = o + i.caretY - 20;
                c + s.clientWidth > r + l && (c = r + i.caretX - s.clientWidth - 10), h + s.clientHeight > o + 0.9 * a && (h = o + i.caretY - s.clientHeight + 20), c < r && (c = r + i.caretX - s.clientWidth / 2, h = o + i.caretY - s.clientHeight - 20), s.style.position = "absolute", s.style.padding = i.padding + "px " + i.padding + "px", s.style.pointerEvents = "none", s.style.left = c + "px", s.style.top = h + "px", s.style.opacity = 1;
              }
            }
          }
        }
      });
    }
  }
}, z_ = { class: "fr-col-12" }, j_ = { class: "chart" }, W_ = { class: "chart_legend fr-mb-0 fr-mt-4v" }, q_ = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, Y_ = {
  key: 0,
  class: "flex fr-mt-1w"
}, U_ = { class: "fr-text--xs" };
function G_(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      g("div", z_, [
        g("div", j_, [
          t[0] || (t[0] = g("div", { class: "tooltip" }, [
            g("div", { class: "tooltip_header fr-text--sm fr-mb-0" }),
            g("div", { class: "tooltip_body" }, [
              g("div", { class: "tooltip_value" }, [
                g("span", { class: "tooltip_dot" })
              ])
            ])
          ], -1)),
          g("canvas", { ref: i.chartId }, null, 512),
          g("div", W_, [
            (O(!0), F(ht, null, wt(i.nameParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.colorParse[a] })
              }, null, 4),
              g("p", q_, X(e.capitalize(l)), 1)
            ]))), 128))
          ]),
          n.date ? (O(), F("div", Y_, [
            g("p", U_, " Mise à jour : " + X(n.date), 1)
          ])) : Mt("", !0)
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const X_ = /* @__PURE__ */ It(H_, [["render", G_]]);
lt.register(Bo);
const K_ = {
  name: "ScatterChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    x: {
      type: String,
      required: !0
    },
    y: {
      type: String,
      required: !0
    },
    xMin: {
      type: [Number, String],
      default: ""
    },
    xMax: {
      type: [Number, String],
      default: ""
    },
    yMin: {
      type: [Number, String],
      default: ""
    },
    yMax: {
      type: [Number, String],
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    vline: {
      type: String,
      default: ""
    },
    vlinecolor: {
      type: String,
      default: ""
    },
    vlinename: {
      type: String,
      default: ""
    },
    hline: {
      type: String,
      default: ""
    },
    hlinecolor: {
      type: String,
      default: ""
    },
    hlinename: {
      type: String,
      default: ""
    },
    showLine: {
      type: [Boolean, String],
      default: !1
    },
    date: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: [Number, String],
      default: 2
    },
    formatDate: {
      type: [Boolean, String],
      default: !1
    },
    selectedPalette: {
      type: String,
      default: ""
    },
    colors: {
      type: Array,
      default: void 0
    },
    unitTooltip: {
      type: String,
      default: ""
    }
  },
  data() {
    return this.chart = void 0, {
      widgetId: "",
      chartId: "",
      display: "",
      datasets: [],
      xAxisType: "category",
      labels: [],
      xparse: [],
      yparse: [],
      nameParse: [],
      tmpColorParse: [],
      colorParse: [],
      vlineParse: [],
      vlineColorParse: [],
      tmpVlineColorParse: [],
      vlineNameParse: [],
      hlineParse: [],
      hlineColorParse: [],
      tmpHlineColorParse: [],
      hlineNameParse: [],
      colorHover: []
    };
  },
  watch: {
    $props: {
      handler() {
        this.chartId && (this.resetData(), this.getData(), this.createChart());
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    $n(), this.chartId = "dsfr-chart-" + Math.floor(Math.random() * 1e3), this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.resetData(), this.createChart(), this.display = this.$refs[this.widgetId].offsetWidth > 486 ? "big" : "small", document.documentElement.addEventListener("dsfr.theme", (t) => {
      this.chartId !== "" && this.changeColors(t.detail.theme);
    });
  },
  methods: {
    resetData() {
      this.chart && this.chart.destroy(), this.datasets = [], this.xAxisType = "category", this.labels = [], this.xparse = [], this.yparse = [], this.nameParse = [], this.tmpColorParse = [], this.colorParse = [], this.vlineParse = [], this.vlineColorParse = [], this.tmpVlineColorParse = [], this.vlineNameParse = [], this.hlineParse = [], this.hlineColorParse = [], this.tmpHlineColorParse = [], this.hlineNameParse = [], this.colorHover = [];
    },
    getData() {
      try {
        this.xparse = JSON.parse(this.x), this.yparse = JSON.parse(this.y);
      } catch (n) {
        console.error("Erreur lors du parsing des données x ou y:", n);
        return;
      }
      let e = [];
      if (this.name)
        try {
          e = JSON.parse(this.name);
        } catch (n) {
          console.error("Erreur lors du parsing de name:", n);
        }
      for (let n = 0; n < this.yparse.length; n++)
        e[n] ? this.nameParse.push(e[n]) : this.nameParse.push("Série " + (n + 1));
      if (this.vline) {
        this.vlineParse = JSON.parse(this.vline);
        let n = [];
        this.vlinename && (n = JSON.parse(this.vlinename)), this.vlinecolor && (this.tmpVlineColorParse = JSON.parse(this.vlinecolor));
        for (let s = 0; s < this.vlineParse.length; s++)
          n[s] ? this.vlineNameParse.push(n[s]) : this.vlineNameParse.push("V" + (s + 1));
      }
      if (this.hline) {
        this.hlineParse = JSON.parse(this.hline);
        let n = [];
        this.hlinename && (n = JSON.parse(this.hlinename)), this.hlinecolor && (this.tmpHlineColorParse = JSON.parse(this.hlinecolor));
        for (let s = 0; s < this.hlineParse.length; s++)
          n[s] ? this.hlineNameParse.push(n[s]) : this.hlineNameParse.push("H" + (s + 1));
      }
      let t = [];
      typeof this.xparse[0][0] == "number" ? (this.xparse.forEach((n, s) => {
        const i = [];
        n.map((o) => o).sort((o, l) => o - l).forEach((o) => {
          const l = n.findIndex((a) => a === o);
          i.push({
            x: o,
            y: this.yparse[s][l]
          });
        }), t.push(i);
      }), this.labels = [], this.xAxisType = "linear") : (t = this.yparse, this.labels = this.xparse[0], this.xAxisType = "category"), this.loadColors(), this.datasets = t.map((n, s) => ({
        data: n,
        fill: !1,
        borderColor: this.colorParse[s],
        backgroundColor: this.colorParse[s],
        pointRadius: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: this.colorHover[s],
        pointHoverBorderColor: this.colorHover[s],
        showLine: this.showLine,
        borderWidth: 2,
        tension: 0.4
      }));
    },
    createChart() {
      this.chart && this.chart.destroy(), this.getData();
      const e = this.$refs[this.chartId].getContext("2d");
      this.chart = new lt(e, {
        type: "scatter",
        data: {
          labels: this.labels,
          datasets: this.datasets
        },
        plugins: [
          {
            afterDraw: (t) => {
              var n, s;
              if ((n = t.tooltip) != null && n._active && ((s = t.tooltip) != null && s._active.length)) {
                const { ctx: i } = t, r = t.tooltip.getActiveElements()[0].element.tooltipPosition().x, o = t.tooltip._active[0].index;
                i.save(), i.beginPath(), i.moveTo(r, t.scales.y.top), i.lineTo(r, t.scales.y.bottom), i.lineWidth = 1, i.strokeStyle = this.colorPrecisionBar, i.setLineDash([10, 5]), i.stroke(), i.restore(), this.yparse.forEach((l) => {
                  let a = t.scales.y.getPixelForValue(l[o]);
                  i.save(), i.beginPath(), i.moveTo(t.scales.x.left, a), i.lineTo(t.scales.x.right, a), i.lineWidth = 1, i.strokeStyle = this.colorPrecisionBar, i.setLineDash([10, 5]), i.stroke(), i.restore();
                });
              }
            }
          }
        ],
        options: {
          aspectRatio: this.aspectRatio,
          scales: {
            x: {
              offset: !0,
              type: this.xAxisType,
              grid: {
                drawOnChartArea: !1
              },
              ticks: {
                padding: 10
              },
              ...this.xMin ? { suggestedMin: this.xMin } : {},
              ...this.xMax ? { suggestedMax: this.xMax } : {}
            },
            y: {
              grid: {
                drawTicks: !1
              },
              border: {
                dash: [3]
              },
              ticks: {
                padding: 5,
                maxTicksLimit: 5,
                callback: (t) => t >= 1e9 || t <= -1e9 ? t / 1e9 + "B" : t >= 1e6 || t <= -1e6 ? t / 1e6 + "M" : t >= 1e3 || t <= -1e3 ? t / 1e3 + "K" : t
              },
              ...this.yMin ? { suggestedMin: this.yMin } : {},
              ...this.yMax ? { suggestedMax: this.yMax } : {}
            }
          },
          plugins: {
            legend: {
              display: !1
            },
            tooltip: {
              enabled: !1,
              displayColors: !1,
              backgroundColor: "#6b6b6b",
              callbacks: {
                label: (t) => {
                  const n = [];
                  return this.datasets.forEach((s, i) => {
                    if (this.xAxisType === "linear") {
                      const r = this.xparse[i].indexOf(t.parsed.x);
                      r !== -1 && n.push(this.formatNumber(this.yparse[i][r]));
                    } else
                      n.push(this.formatNumber(s.data[t.dataIndex]));
                  }), n;
                },
                title: (t) => t[0].parsed.x,
                labelTextColor: () => this.colorParse
              },
              external: (t) => {
                const s = (document.getElementById(this.databoxId + "-" + this.databoxType + "-" + this.databoxSource) || this.$el.nextElementSibling).querySelector(".tooltip"), i = t.tooltip;
                if (!s) return;
                if (!i || i.opacity === 0) {
                  s.style.opacity = 0;
                  return;
                }
                if (s.classList.remove("above", "below", "no-transform"), i.yAlign ? s.classList.add(i.yAlign) : s.classList.add("no-transform"), i.body) {
                  const d = i.title || [], u = i.body.map((p) => p.lines), f = s.querySelector(".tooltip_header.fr-text--sm.fr-mb-0");
                  f.innerHTML = d[0];
                  const m = s.querySelector(".tooltip_value");
                  m.innerHTML = "", u[0].forEach((p, b) => {
                    const v = `${p}${this.unitTooltip ? " " + this.unitTooltip : ""}`;
                    p && (m.innerHTML += `
                        <div class="tooltip_value-content">
                          <span class="tooltip_dot" style="background-color:${this.colorParse[b]};"></span>
                          <p class="tooltip_place fr-mb-0">${v}</p>
                        </div>
                      `);
                  });
                }
                const { offsetLeft: r, offsetTop: o } = this.chart.canvas, l = Number(this.chart.canvas.style.width.replace(/\D/g, "")), a = Number(this.chart.canvas.style.height.replace(/\D/g, ""));
                let c = r + i.caretX + 10, h = o + i.caretY - 20;
                c + s.clientWidth > r + l && (c = r + i.caretX - s.clientWidth - 10), h + s.clientHeight > o + 0.9 * a && (h = o + i.caretY - s.clientHeight + 20), c < r && (c = r + i.caretX - s.clientWidth / 2, h = o + i.caretY - s.clientHeight - 20), s.style.position = "absolute", s.style.padding = i.padding + "px " + i.padding + "px", s.style.pointerEvents = "none", s.style.left = c + "px", s.style.top = h + "px", s.style.opacity = 1;
              }
            }
          }
        }
      });
    },
    loadColors() {
      const { colorParse: e, colorHover: t, vlineColorParse: n, hlineColorParse: s } = Wx({
        yparse: this.yparse,
        tmpColorParse: this.tmpColorParse,
        selectedPalette: this.selectedPalette,
        vlineParse: this.vlineParse,
        tmpVlineColorParse: this.tmpVlineColorParse,
        hlineParse: this.hlineParse,
        tmpHlineColorParse: this.tmpHlineColorParse,
        colors: this.colors
      });
      this.colorParse = e, this.colorHover = t, this.vlineColorParse = n, this.hlineColorParse = s;
    },
    choosePalette() {
      return Kt(this.selectedPalette, this.colors);
    },
    changeColors(e) {
      this.loadColors(), this.chart.data.datasets.forEach((t, n) => {
        t.borderColor = this.colorParse[n], t.backgroundColor = this.colorParse[n], t.pointBorderColor = this.colorParse[n], t.pointBackgroundColor = this.colorParse[n], t.hoverBorderColor = this.colorHover[n], t.hoverBackgroundColor = this.colorHover[n], t.pointHoverBorderColor = this.colorHover[n], t.pointHoverBackgroundColor = this.colorHover[n];
      }), this.chart.options.scales.x.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.options.scales.y.ticks.color = e === "dark" ? "#cecece" : lt.defaults.color, this.chart.update("none");
    }
  }
}, J_ = { class: "fr-col-12" }, Z_ = { class: "chart" }, Q_ = { class: "chart_legend fr-mb-0 fr-mt-4v" }, t8 = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, e8 = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, n8 = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, s8 = {
  key: 0,
  class: "flex fr-mt-1w"
}, i8 = { class: "fr-text--xs" };
function o8(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      g("div", J_, [
        g("div", Z_, [
          t[0] || (t[0] = g("div", { class: "tooltip" }, [
            g("div", { class: "tooltip_header fr-text--sm fr-mb-0" }),
            g("div", { class: "tooltip_body" }, [
              g("div", { class: "tooltip_value" }, [
                g("span", { class: "tooltip_dot" })
              ])
            ])
          ], -1)),
          g("canvas", { ref: i.chartId }, null, 512),
          g("div", Q_, [
            (O(!0), F(ht, null, wt(i.nameParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.colorParse[a] })
              }, null, 4),
              g("p", t8, X(e.capitalize(l)), 1)
            ]))), 128))
          ]),
          (O(!0), F(ht, null, wt(i.hlineNameParse, (l, a) => (O(), F("div", {
            key: a,
            class: "flex fr-mt-3v"
          }, [
            g("span", {
              class: "legende_dash_line",
              style: P({ "background-color": i.hlineColorParse[a] })
            }, null, 4),
            g("span", {
              class: "legende_dash_line legende_dash_line_end",
              style: P({ "background-color": i.hlineColorParse[a] })
            }, null, 4),
            g("p", e8, X(e.capitalize(l)), 1)
          ]))), 128)),
          (O(!0), F(ht, null, wt(i.vlineNameParse, (l, a) => (O(), F("div", {
            key: a,
            class: "flex fr-mt-3v fr-mb-1v"
          }, [
            g("span", {
              class: "legende_dash_line",
              style: P({ "background-color": i.vlineColorParse[a] })
            }, null, 4),
            g("span", {
              class: "legende_dash_line legende_dash_line_end",
              style: P({ "background-color": i.vlineColorParse[a] })
            }, null, 4),
            g("p", n8, X(e.capitalize(n.name)), 1)
          ]))), 128)),
          n.date ? (O(), F("div", s8, [
            g("p", i8, " Mise à jour : " + X(n.date), 1)
          ])) : Mt("", !0)
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const r8 = /* @__PURE__ */ It(K_, [["render", o8]]), l8 = {
  name: "TableChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "global"
    },
    x: {
      type: String,
      default: ""
    },
    y: {
      type: String,
      default: ""
    },
    line: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    tableName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      widgetId: "",
      tableId: "",
      xparse: [],
      yparse: [],
      lineParse: [],
      nameParse: []
    };
  },
  watch: {
    $props: {
      handler() {
        this.tableId && (this.resetData(), this.getData());
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    this.tableId = "dsfr-table-" + Math.floor(Math.random() * 1e3), this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.resetData(), this.getData();
  },
  methods: {
    resetData() {
      this.xparse = [], this.yparse = [], this.lineParse = [], this.nameParse = [];
    },
    getData() {
      if (this.x && this.y)
        try {
          this.xparse = typeof this.x == "string" ? JSON.parse(this.x) : this.x, this.yparse = typeof this.y == "string" ? JSON.parse(this.y) : this.y;
        } catch (t) {
          console.error("Erreur lors du parsing des données x ou y:", t);
          return;
        }
      if (this.line)
        try {
          this.lineParse = typeof this.line == "string" ? JSON.parse(this.line) : this.line;
        } catch (t) {
          console.error("Erreur lors du parsing des données line:", t);
          return;
        }
      let e = [];
      if (this.name)
        try {
          e = typeof this.name == "string" ? JSON.parse(this.name) : this.name;
        } catch (t) {
          console.error("Erreur lors du parsing de name:", t);
        }
      for (let t = 0; t < this.yparse.length; t++)
        e[t] ? this.nameParse.push(e[t]) : this.nameParse.push("Série " + (t + 1));
      for (let t = 0; t < (this.lineParse.length ? this.lineParse[0].length : 0); t++)
        e[t] ? this.nameParse.push(e[t]) : this.nameParse.push("Série " + (t + 1));
    },
    getClass(e) {
      let t = "";
      return typeof e == "string" && e.replace(/<[^>]*>/g, "").length > 132 && (t += "text-overflow "), typeof e == "number" ? t += "text-right " : t += "text-left ", t;
    }
  }
}, a8 = { class: "fr-table__wrapper" }, c8 = { class: "fr-table__container" }, h8 = { class: "fr-table__content" }, d8 = {
  key: 0,
  scope: "col"
}, u8 = ["innerHTML"];
function f8(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "global",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container"
    }, [
      g("div", {
        ref: i.tableId,
        class: "fr-table",
        style: { maxHeight: "25rem", overflow: "auto" }
      }, [
        g("div", a8, [
          g("div", c8, [
            g("div", h8, [
              g("table", null, [
                g("caption", null, X(n.tableName), 1),
                g("thead", null, [
                  g("tr", null, [
                    i.xparse.length ? (O(), F("th", d8, X(n.tableName), 1)) : Mt("", !0),
                    (O(!0), F(ht, null, wt(i.nameParse, (l, a) => (O(), F("th", {
                      key: a,
                      scope: "col"
                    }, X(l), 1))), 128))
                  ])
                ]),
                g("tbody", null, [
                  (O(!0), F(ht, null, wt(i.xparse, (l, a) => (O(), F("tr", { key: a }, [
                    g("td", {
                      class: re(r.getClass(l))
                    }, X(l), 3),
                    (O(!0), F(ht, null, wt(i.yparse, (c, h) => (O(), F("td", {
                      key: h,
                      class: re(r.getClass(c[a]))
                    }, X(e.formatNumber(c[a])), 3))), 128))
                  ]))), 128)),
                  (O(!0), F(ht, null, wt(i.lineParse, (l, a) => (O(), F("tr", { key: a }, [
                    (O(!0), F(ht, null, wt(l, (c, h) => (O(), F("td", {
                      key: h,
                      class: re(r.getClass(c)),
                      innerHTML: c
                    }, null, 10, u8))), 128))
                  ]))), 128))
                ])
              ])
            ])
          ])
        ])
      ], 512)
    ], 512)
  ], 8, ["disabled", "to"]);
}
const p8 = /* @__PURE__ */ It(l8, [["render", f8], ["__scopeId", "data-v-fbcc49c5"]]);
/*!
 * chartjs-chart-treemap v3.1.0
 * https://chartjs-chart-treemap.pages.dev/
 * (c) 2024 Jukka Kurkela
 * Released under the MIT license
 */
const g8 = (e, t) => t > e || e.length > t.length && e.slice(0, t.length) === t, Sr = (e) => "" + e;
function Np(e, t, n, s = [], i = 0, r = []) {
  const o = i - 1;
  if (e[0] in n && i > 0) {
    const l = s.reduce(function(a, c, h) {
      return h !== o && (a[Sr(h)] = c), a;
    }, {});
    l[t] = s[o], e.forEach(function(a) {
      l[a] = n[a];
    }), r.push(l);
  } else
    for (const l of Object.keys(n)) {
      const a = n[l];
      ut(a) && (s.push(l), Np(e, t, a, s, i + 1, r));
    }
  return s.splice(o, 1), r;
}
function m8(e, t, n) {
  const s = Np(e, t, n);
  if (!s.length)
    return s;
  const i = s.reduce(function(r, o) {
    const l = Object.keys(o).length - 2;
    return r > l ? r : l;
  });
  return s.forEach(function(r) {
    for (let o = 0; o < i; o++) {
      const l = Sr(o);
      r[l] || (r[l] = "");
    }
  }), s;
}
function b8(e) {
  const t = [...e], n = [];
  for (; t.length; ) {
    const s = t.pop();
    Array.isArray(s) ? t.push(...s) : n.push(s);
  }
  return n.reverse();
}
function v8(e, t, n) {
  if (!e.length)
    return;
  const s = [];
  for (const i of e) {
    const r = t[i];
    if (r === "") {
      s.push(n);
      break;
    }
    s.push(r);
  }
  return s.length ? s.join(".") : n;
}
function y8(e, t, n, s, i, r, o = []) {
  const l = n[0], a = n.slice(1), c = /* @__PURE__ */ Object.create(null), h = /* @__PURE__ */ Object.create(null), d = [];
  let u, f, m;
  for (f = 0, m = e.length; f < m; ++f) {
    const p = e[f];
    if (i && p[i] !== r)
      continue;
    if (u = p[t] || p[s] || "", !(u in c)) {
      const v = c[u] = { value: 0 };
      a.forEach(function(x) {
        v[x] = 0;
      }), h[u] = [];
    }
    c[u].value += +p[l], c[u].label = p[t] || "";
    const b = c[u];
    a.forEach(function(v) {
      b[v] += p[v];
    }), c[u].path = v8(o, p, u), h[u].push(p);
  }
  return Object.keys(c).forEach((p) => {
    const b = { children: h[p] };
    b[l] = +c[p].value, a.forEach(function(v) {
      b[v] = +c[p][v];
    }), b[t] = c[p].label, b.label = p, b.path = c[p].path, i && (b[i] = r), d.push(b);
  }), d;
}
function x8(e, t) {
  let n = e.length, s;
  if (!n)
    return t;
  const i = ut(e[0]);
  for (t = i ? t : "v", s = 0, n = e.length; s < n; ++s)
    i ? e[s]._idx = s : e[s] = { v: e[s], _idx: s };
  return t;
}
function w8(e, t) {
  t ? e.sort((n, s) => +s[t] - +n[t]) : e.sort((n, s) => +s - +n);
}
function k8(e, t) {
  let n, s, i;
  for (n = 0, s = 0, i = e.length; s < i; ++s)
    n += t ? +e[s][t] : +e[s];
  return n;
}
function _8(e, t, n, s = !0) {
  const i = n.split(".");
  let r = 0;
  for (const o of t.split(".")) {
    const l = i[r++];
    if (parseInt(o, 10) < parseInt(l, 10))
      break;
    if (g8(l, o)) {
      if (s)
        throw new Error(`${e} v${n} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const Il = /* @__PURE__ */ new Map();
function Op(e, t) {
  const { x: n, y: s, width: i, height: r } = e.getProps(["x", "y", "width", "height"], t);
  return { left: n, top: s, right: n + i, bottom: s + r };
}
function _n(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function Rp(e, t, n) {
  const s = sc(e);
  return {
    t: _n(s.top, 0, n),
    r: _n(s.right, 0, t),
    b: _n(s.bottom, 0, n),
    l: _n(s.left, 0, t)
  };
}
function M8(e, t, n) {
  const s = cs(e), i = Math.min(t, n);
  return {
    topLeft: _n(s.topLeft, 0, i),
    topRight: _n(s.topRight, 0, i),
    bottomLeft: _n(s.bottomLeft, 0, i),
    bottomRight: _n(s.bottomRight, 0, i)
  };
}
function C8(e) {
  const t = Op(e), n = t.right - t.left, s = t.bottom - t.top, i = Rp(e.options.borderWidth, n / 2, s / 2), r = M8(e.options.borderRadius, n / 2, s / 2), o = {
    x: t.left,
    y: t.top,
    w: n,
    h: s,
    active: e.active,
    radius: r
  };
  return {
    outer: o,
    inner: {
      x: o.x + i.l,
      y: o.y + i.t,
      w: o.w - i.l - i.r,
      h: o.h - i.t - i.b,
      active: e.active,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(i.t, i.l)),
        topRight: Math.max(0, r.topRight - Math.max(i.t, i.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(i.b, i.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(i.b, i.r))
      }
    }
  };
}
function Vl(e, t, n, s) {
  const i = t === null, r = n === null, o = !e || i && r ? !1 : Op(e, s);
  return o && (i || t >= o.left && t <= o.right) && (r || n >= o.top && n <= o.bottom);
}
function P8(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function S8(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function Tp(e, t) {
  if (!t || t.display === !1)
    return !1;
  const { w: n, h: s } = e, r = jt(t.font).lineHeight, o = _n(pt(t.padding, 3) * 2, 0, Math.min(n, s));
  return n - o > r && s - o > r;
}
function E8(e, t, n, s, i) {
  const { captions: r, labels: o } = n;
  e.save(), e.beginPath(), e.rect(t.x, t.y, t.w, t.h), e.clip();
  const l = s && (!Bs(s.l) || s.l === i);
  l && o.display ? T8(e, t, n) : !l && Tp(t, r) && D8(e, t, n, s), e.restore();
}
function D8(e, t, n, s) {
  const { captions: i, spacing: r, rtl: o } = n, { color: l, hoverColor: a, font: c, hoverFont: h, padding: d, align: u, formatter: f } = i, m = (t.active ? a : l) || l, p = u || (o ? "right" : "left"), b = (t.active ? h : c) || c, v = jt(b), x = v.lineHeight / 2, C = Lp(t, p, d);
  e.fillStyle = m, e.font = v.string, e.textAlign = p, e.textBaseline = "middle", e.fillText(f || s.g, C, t.y + d + r + x);
}
function A8(e, t, n) {
  const s = n.reduce(function(r, o) {
    return r += o.string, r;
  }, ""), i = t.join() + s + (e._measureText ? "-spriting" : "");
  if (!Il.has(i)) {
    e.save();
    const r = t.length;
    let o = 0, l = 0;
    for (let a = 0; a < r; a++) {
      const c = n[Math.min(a, n.length - 1)];
      e.font = c.string;
      const h = t[a];
      o = Math.max(o, e.measureText(h).width), l += c.lineHeight;
    }
    e.restore(), Il.set(i, { width: o, height: l });
  }
  return Il.get(i);
}
function N8(e, t) {
  return e.map(function(n) {
    return n.size = Math.floor(n.size * t), n.lineHeight = void 0, jt(n);
  });
}
function O8(e, t, n, s) {
  const { overflow: i, padding: r } = n, { width: o, height: l } = s;
  if (i === "hidden")
    return !(o + r * 2 > t.w || l + r * 2 > t.h);
  if (i === "fit") {
    const a = Math.min(t.w / (o + r * 2), t.h / (l + r * 2));
    if (a < 1)
      return a;
  }
  return !0;
}
function R8(e, t) {
  const { font: n, hoverFont: s } = t, i = (e.active ? s : n) || n;
  return Dt(i) ? i.map((r) => jt(r)) : [jt(i)];
}
function T8(e, t, n) {
  const s = n.labels, i = s.formatter;
  if (!i)
    return;
  const r = Dt(i) ? i : [i];
  let o = R8(t, s), l = A8(e, r, o);
  const a = O8(e, t, s, l);
  if (!a)
    return;
  gs(a) && (l = { width: l.width * a, height: l.height * a }, o = N8(o, a));
  const { color: c, hoverColor: h, align: d } = s, u = (t.active ? h : c) || c, f = Dt(u) ? u : [u], m = F8(t, s, l);
  e.textAlign = d, e.textBaseline = "middle";
  let p = 0;
  r.forEach(function(b, v) {
    const x = f[Math.min(v, f.length - 1)], C = o[Math.min(v, o.length - 1)], S = C.lineHeight;
    e.font = C.string, e.fillStyle = x, e.fillText(b, m.x, m.y + S / 2 + p), p += S;
  });
}
function L8(e, t, n, s) {
  const i = n.dividers;
  if (!i.display || !s._data.children.length)
    return;
  const { x: r, y: o, w: l, h: a } = t, { lineColor: c, lineCapStyle: h, lineDash: d, lineDashOffset: u, lineWidth: f } = i;
  if (e.save(), e.strokeStyle = c, e.lineCap = h, e.setLineDash(d), e.lineDashOffset = u, e.lineWidth = f, e.beginPath(), l > a) {
    const m = l / 2;
    e.moveTo(r + m, o), e.lineTo(r + m, o + a);
  } else {
    const m = a / 2;
    e.moveTo(r, o + m), e.lineTo(r + l, o + m);
  }
  e.stroke(), e.restore();
}
function F8(e, t, n) {
  const { align: s, position: i, padding: r } = t;
  let o, l;
  return o = Lp(e, s, r), i === "top" ? l = e.y + r : i === "bottom" ? l = e.y + e.h - r - n.height : l = e.y + (e.h - n.height) / 2 + r, { x: o, y: l };
}
function Lp(e, t, n) {
  return t === "left" ? e.x + n : t === "right" ? e.x + e.w - n : e.x + e.w / 2;
}
class Zi extends Bn {
  constructor(t) {
    super(), this.options = void 0, this.width = void 0, this.height = void 0, t && Object.assign(this, t);
  }
  draw(t, n, s = 0) {
    if (!n)
      return;
    const i = this.options, { inner: r, outer: o } = C8(this), l = P8(o.radius) ? Fi : S8;
    t.save(), (o.w !== r.w || o.h !== r.h) && (t.beginPath(), l(t, o), t.clip(), l(t, r), t.fillStyle = i.borderColor, t.fill("evenodd")), t.beginPath(), l(t, r), t.fillStyle = i.backgroundColor, t.fill(), L8(t, r, i, n), E8(t, r, i, n, s), t.restore();
  }
  inRange(t, n, s) {
    return Vl(this, t, n, s);
  }
  inXRange(t, n) {
    return Vl(this, t, null, n);
  }
  inYRange(t, n) {
    return Vl(this, null, t, n);
  }
  getCenterPoint(t) {
    const { x: n, y: s, width: i, height: r } = this.getProps(["x", "y", "width", "height"], t);
    return {
      x: n + i / 2,
      y: s + r / 2
    };
  }
  tooltipPosition() {
    return this.getCenterPoint();
  }
  /**
   * @todo: remove this unused function in v3
   */
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
Zi.id = "treemap";
Zi.defaults = {
  borderRadius: 0,
  borderWidth: 0,
  captions: {
    align: void 0,
    color: "black",
    display: !0,
    font: {},
    formatter: (e) => e.raw.g || e.raw._data.label || "",
    padding: 3
  },
  dividers: {
    display: !1,
    lineCapStyle: "butt",
    lineColor: "black",
    lineDash: [],
    lineDashOffset: 0,
    lineWidth: 1
  },
  label: void 0,
  labels: {
    align: "center",
    color: "black",
    display: !1,
    font: {},
    formatter(e) {
      return e.raw.g ? [e.raw.g, e.raw.v + ""] : e.raw._data.label ? [e.raw._data.label, e.raw.v + ""] : e.raw.v + "";
    },
    overflow: "cut",
    position: "middle",
    padding: 3
  },
  rtl: !1,
  spacing: 0.5,
  unsorted: !1
};
Zi.descriptors = {
  captions: {
    _fallback: !0
  },
  labels: {
    _fallback: !0
  },
  _scriptable: !0,
  _indexable: !1
};
Zi.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
};
function I8(e, t, n, s) {
  const i = e._normalized, r = t * i / n, o = Math.sqrt(i * r), l = i / o;
  return { d1: o, d2: l, w: s === "_ix" ? o : l, h: s === "_ix" ? l : o };
}
const V8 = (e, t) => e.rtl ? e.x + e.iw - t : e.x + e._ix;
function B8(e, t, n, s) {
  const i = {
    x: V8(e, n.w),
    y: e.y + e._iy,
    w: n.w,
    h: n.h,
    a: t._normalized,
    v: t.value,
    vs: t.values,
    s,
    _data: t._data
  };
  return t.group && (i.g = t.group, i.l = t.level, i.gs = t.groupSum), i;
}
class $8 {
  constructor(t) {
    t = t || { w: 1, h: 1 }, this.rtl = !!t.rtl, this.unsorted = !!t.unsorted, this.x = t.x || t.left || 0, this.y = t.y || t.top || 0, this._ix = 0, this._iy = 0, this.w = t.w || t.width || t.right - t.left, this.h = t.h || t.height || t.bottom - t.top;
  }
  get area() {
    return this.w * this.h;
  }
  get iw() {
    return this.w - this._ix;
  }
  get ih() {
    return this.h - this._iy;
  }
  get dir() {
    const t = this.ih;
    return t <= this.iw && t > 0 ? "y" : "x";
  }
  get side() {
    return this.dir === "x" ? this.iw : this.ih;
  }
  map(t) {
    const { dir: n, side: s } = this, i = n === "x" ? "_ix" : "_iy", r = t.nsum, o = t.get(), l = s * s, a = r * r, c = [];
    let h = 0, d = 0;
    for (const u of o) {
      const f = I8(u, l, a, i);
      d += f.d1, h = Math.max(h, f.d2), c.push(B8(this, u, f, t.sum)), this[i] += f.d1;
    }
    return this[n === "x" ? "_iy" : "_ix"] += h, this[i] -= d, c;
  }
}
const ku = Math.min, _u = Math.max;
function H8(e) {
  return {
    min: e.min,
    max: e.max,
    sum: e.sum,
    nmin: e.nmin,
    nmax: e.nmax,
    nsum: e.nsum
  };
}
function Mu(e, t) {
  const n = +t[e.key], s = n * e.ratio;
  return t._normalized = s, {
    min: ku(e.min, n),
    max: _u(e.max, n),
    sum: e.sum + n,
    nmin: ku(e.nmin, s),
    nmax: _u(e.nmax, s),
    nsum: e.nsum + s
  };
}
function z8(e, t) {
  Object.assign(e, t);
}
function Cu(e, t, n) {
  e._arr.push(t), z8(e, n);
}
class j8 {
  constructor(t, n) {
    const s = this;
    s.key = t, s.ratio = n, s.reset();
  }
  get length() {
    return this._arr.length;
  }
  reset() {
    const t = this;
    t._arr = [], t._hist = [], t.sum = 0, t.nsum = 0, t.min = 1 / 0, t.max = -1 / 0, t.nmin = 1 / 0, t.nmax = -1 / 0;
  }
  push(t) {
    Cu(this, t, Mu(this, t));
  }
  pushIf(t, n, ...s) {
    const i = Mu(this, t);
    if (!n(H8(this), i, s))
      return t;
    Cu(this, t, i);
  }
  get() {
    return this._arr;
  }
}
function W8(e, t, n) {
  if (e.sum === 0)
    return !0;
  const [s] = n, i = e.nsum * e.nsum, r = t.nsum * t.nsum, o = s * s, l = Math.max(o * e.nmax / i, i / (o * e.nmin));
  return Math.max(o * t.nmax / r, r / (o * t.nmin)) <= l;
}
function Pu(e, t, n = [], s, i, r) {
  e = e || [];
  const o = [], l = new $8(t), a = new j8("value", l.area / k8(e, n[0]));
  let c = l.side;
  const h = e.length;
  let d, u;
  if (!h)
    return o;
  const f = e.slice();
  let m = x8(f, n[0]);
  t != null && t.unsorted || w8(f, m);
  const p = (v) => m ? +f[v][m] : +f[v], b = (v) => s && f[v][s];
  for (d = 0; d < h; ++d) {
    if (u = { value: p(d), groupSum: r, _data: e[f[d]._idx], level: void 0, group: void 0 }, s) {
      u.level = i, u.group = b(d);
      const v = f[d];
      u.values = n.reduce(function(x, C) {
        return x[C] = +v[C], x;
      }, {});
    }
    u = a.pushIf(u, W8, c), u && (o.push(l.map(a)), c = l.side, a.reset(), a.push(u));
  }
  return a.length && o.push(l.map(a)), b8(o);
}
var q8 = "3.1.0";
function Y8(e, t, n, s) {
  const i = s * 2, r = t.getPixelForValue(e.x), o = n.getPixelForValue(e.y), l = t.getPixelForValue(e.x + e.w) - r, a = n.getPixelForValue(e.y + e.h) - o;
  return {
    x: r + s,
    y: o + s,
    width: l - i,
    height: a - i,
    hidden: i > l || i > a
  };
}
function U8(e, t) {
  return !e || !t || e.x !== t.x || e.y !== t.y || e.w !== t.w || e.h !== t.h || e.rtl !== t.rtl || e.unsorted !== t.unsorted;
}
function Su(e, t) {
  let n, s;
  if (!e || !t)
    return !0;
  if (e === t)
    return !1;
  if (e.length !== t.length)
    return !0;
  for (n = 0, s = e.length; n < s; ++n)
    if (e[n] !== t[n])
      return !0;
  return !1;
}
function G8(e, t, n, s) {
  const i = t.treeLeafKey || "_leaf";
  ut(e) && (e = m8(n, i, e));
  const r = t.groups || [], o = r.length, l = pt(t.spacing, 0), a = t.captions || {}, c = jt(a.font), h = pt(a.padding, 3);
  function d(u, f, m, p, b) {
    const v = Sr(r[f]), x = f > 0 && Sr(r[f - 1]), C = y8(u, v, n, i, x, p, r.filter((D, _) => _ <= f)), S = Pu(C, m, n, v, f, b), w = S.slice();
    return f < o - 1 && S.forEach((D) => {
      const _ = Rp(t.borderWidth, D.w / 2, D.h / 2), E = {
        ...m,
        x: D.x + l + _.l,
        y: D.y + l + _.t,
        w: D.w - 2 * l - _.l - _.r,
        h: D.h - 2 * l - _.t - _.b
      };
      Tp(E, a) && (E.y += c.lineHeight + h * 2, E.h -= c.lineHeight + h * 2), C.forEach((N) => {
        w.push(...d(N.children, f + 1, E, D.g, D.s));
      });
    }), w;
  }
  return o ? d(e, 0, s) : Pu(e, s, n);
}
class Sn extends nn {
  constructor(t, n) {
    super(t, n), this._groups = void 0, this._keys = void 0, this._rect = void 0, this._rectChanged = !0;
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  getMinMax(t) {
    return {
      min: 0,
      max: t.axis === "x" ? t.right - t.left : t.bottom - t.top
    };
  }
  configure() {
    super.configure();
    const { xScale: t, yScale: n } = this.getMeta();
    if (!t || !n)
      return;
    const s = t.right - t.left, i = n.bottom - n.top, r = { x: 0, y: 0, w: s, h: i, rtl: !!this.options.rtl, unsorted: !!this.options.unsorted };
    U8(this._rect, r) && (this._rect = r, this._rectChanged = !0), this._rectChanged && (t.max = s, t.configure(), n.max = i, n.configure());
  }
  update(t) {
    const n = this.getDataset(), { data: s } = this.getMeta(), i = n.groups || [], r = [n.key || ""].concat(n.sumKeys || []), o = n.tree = n.tree || n.data || [];
    t === "reset" && this.configure(), (this._rectChanged || Su(this._keys, r) || Su(this._groups, i) || this._prevTree !== o) && (this._groups = i.slice(), this._keys = r.slice(), this._prevTree = o, this._rectChanged = !1, n.data = G8(o, n, this._keys, this._rect), this._dataCheck(), this._resyncElements()), this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, n, s, i) {
    const r = i === "reset", o = this.getDataset(), l = this._rect.options = this.resolveDataElementOptions(n, i), a = this.getSharedOptions(l), c = this.includeOptions(i, a), { xScale: h, yScale: d } = this.getMeta(this.index);
    for (let u = n; u < n + s; u++) {
      const f = a || this.resolveDataElementOptions(u, i), m = Y8(o.data[u], h, d, f.spacing);
      r && (m.width = 0, m.height = 0), c && (m.options = f), this.updateElement(t[u], u, m, i);
    }
    this.updateSharedOptions(a, i, l);
  }
  draw() {
    const { ctx: t, chartArea: n } = this.chart, s = this.getMeta().data || [], i = this.getDataset(), r = (i.groups || []).length - 1, o = i.data;
    zr(t, n);
    for (let l = 0, a = s.length; l < a; ++l) {
      const c = s[l];
      c.hidden || c.draw(t, o[l], r);
    }
    jr(t);
  }
}
Sn.id = "treemap";
Sn.version = q8;
Sn.defaults = {
  dataElementType: "treemap",
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "width", "height"]
    }
  }
};
Sn.descriptors = {
  _scriptable: !0,
  _indexable: !1
};
Sn.overrides = {
  interaction: {
    mode: "point",
    includeInvisible: !0,
    intersect: !0
  },
  hover: {},
  plugins: {
    tooltip: {
      position: "treemap",
      intersect: !0,
      callbacks: {
        title(e) {
          return e.length && e[0].dataset.key || "";
        },
        label(e) {
          const t = e.dataset, n = t.data[e.dataIndex], s = n.g || n._data.label || t.label;
          return (s ? s + ": " : "") + n.v;
        }
      }
    }
  },
  scales: {
    x: {
      type: "linear",
      alignToPixels: !0,
      bounds: "data",
      display: !1
    },
    y: {
      type: "linear",
      alignToPixels: !0,
      bounds: "data",
      display: !1,
      reverse: !0
    }
  }
};
Sn.beforeRegister = function() {
  _8("chart.js", "3.8", lt.version);
};
Sn.afterRegister = function() {
  const e = Pe.plugins.get("tooltip");
  e ? e.positioners.treemap = function(t) {
    return t.length ? t[t.length - 1].element.tooltipPosition() : !1;
  } : console.warn("Unable to register the treemap positioner because tooltip plugin is not registered");
};
Sn.afterUnregister = function() {
  const e = Pe.plugins.get("tooltip");
  e && delete e.positioners.treemap;
};
lt.register(Sn, Zi);
const X8 = {
  name: "TreemapChart",
  mixins: [cn],
  props: {
    databoxId: {
      type: String,
      default: null
    },
    databoxType: {
      type: String,
      default: null
    },
    databoxSource: {
      type: String,
      default: "default"
    },
    tree: {
      type: Array,
      required: !0
    },
    names: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: "value"
    },
    label: {
      type: String,
      default: "label"
    },
    date: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: [Number, String],
      default: 2
    },
    selectedPalette: {
      type: String,
      default: ""
    },
    colors: {
      type: Array,
      default: void 0
    },
    highlightIndex: {
      type: Array,
      default: () => [3, 4]
    },
    unitTooltip: {
      type: String,
      default: ""
    },
    borderWidth: {
      type: [Number, String],
      default: 2
    },
    borderColor: {
      type: String,
      default: "#ffffff"
    }
  },
  data() {
    return this.chart = void 0, {
      widgetId: "",
      chartId: "",
      datasets: [],
      dataParse: [],
      nameParse: [],
      colorParse: [],
      colorHover: []
    };
  },
  watch: {
    $props: {
      handler() {
        this.chartId && (this.resetData(), this.getData(), this.createChart());
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    $n(), this.chartId = "dsfr-chart-" + Math.floor(Math.random() * 1e3), this.widgetId = "dsfr-widget-" + Math.floor(Math.random() * 1e3);
  },
  mounted() {
    this.resetData(), this.createChart(), this.display = this.$refs[this.widgetId].offsetWidth > 486 ? "big" : "small", document.documentElement.addEventListener("dsfr.theme", (t) => {
      this.chartId !== "" && this.changeColors(t.detail.theme);
    });
  },
  methods: {
    resetData() {
      this.chart && this.chart.destroy(), this.datasets = [], this.dataParse = [], this.nameParse = [], this.colorParse = [], this.colorHover = [];
    },
    getData() {
      try {
        typeof this.tree == "string" && console.error("Cette fonctionnalité n'est plus supportée. Veuillez passer la prop 'tree' comme une liste de nombres."), this.dataParse = Array.isArray(this.tree) ? this.tree : JSON.parse(this.tree);
      } catch (e) {
        console.error("Erreur lors du parsing des données:", e);
        return;
      }
      try {
        typeof this.names == "string" && console.error("Cette fonctionnalité n'est plus supportée. Veuillez passer la prop 'names' comme une liste de strings."), this.nameParse = Array.isArray(this.names) ? this.names : JSON.parse(this.names);
      } catch (e) {
        console.error("Erreur lors du parsing des données:", e);
        return;
      }
      this.loadColors(), console.log("after load colors:", this.colorParse), this.datasets = [{
        tree: this.dataParse,
        backgroundColor: (e) => {
          const t = e.dataIndex;
          return this.colorParse[t % this.colorParse.length];
        },
        hoverBackgroundColor: (e) => {
          const t = e.dataIndex;
          return this.colorHover[t % this.colorHover.length];
        },
        borderColor: this.borderColor,
        borderWidth: this.borderWidth
      }];
    },
    choosePalette() {
      return Kt(this.selectedPalette, this.colors);
    },
    loadColors() {
      this.dataParse.map((n) => n[this.value] || n.value);
      const { colorParse: e, colorHover: t } = qx({
        highlightIndex: this.highlightIndex,
        selectedPalette: this.selectedPalette,
        reverseOrder: this.selectedPalette === "divergentDescending",
        colors: this.colors
      });
      this.colorParse = e, this.colorHover = t;
    },
    createChart() {
      this.chart && this.chart.destroy(), this.getData();
      const e = this.$refs[this.chartId].getContext("2d");
      this.chart = new lt(e, {
        type: "treemap",
        data: {
          datasets: this.datasets
        },
        options: {
          aspectRatio: this.aspectRatio,
          responsive: !0,
          maintainAspectRatio: !0,
          plugins: {
            legend: {
              display: !1
            },
            tooltip: {
              enabled: !1,
              mode: "index",
              displayColors: !1,
              backgroundColor: "#6b6b6b",
              callbacks: {
                label: (t) => {
                  const n = this.datasets[t.datasetIndex].data[t.dataIndex];
                  return this.formatNumber(n);
                },
                title: (t) => t[0].label,
                labelTextColor: (t) => this.colorParse[t.datasetIndex][t.dataIndex]
              },
              external: (t) => {
                const s = (document.getElementById(this.databoxId + "-" + this.databoxType + "-" + this.databoxSource) || this.$el.nextElementSibling).querySelector(".tooltip"), i = t.tooltip;
                if (!s) return;
                if (!i || i.opacity === 0) {
                  s.style.opacity = 0;
                  return;
                }
                if (s.classList.remove("above", "below", "no-transform"), i.yAlign ? s.classList.add(i.yAlign) : s.classList.add("no-transform"), i.body) {
                  const d = s.querySelector(".tooltip_header.fr-text--sm.fr-mb-0");
                  d.innerHTML = "";
                  const u = s.querySelector(".tooltip_value");
                  u.innerHTML = "", i.dataPoints.forEach((f) => {
                    const m = f.datasetIndex, p = f.dataIndex;
                    console.log("tooltip dataPoint:", this.colorParse);
                    const b = this.colorParse[p % this.colorParse[m].length], x = `${this.formatNumber(this.datasets[m].data[p]).v}${this.unitTooltip ? " " + this.unitTooltip : ""}`;
                    u.innerHTML += `
                    <div class="tooltip_value-content">
                      <span class="tooltip_dot" style="background-color:${b};"></span>
                      <p class="tooltip_place fr-mb-0">${x}</p>
                    </div>
                  `;
                  });
                }
                const { offsetLeft: r, offsetTop: o } = this.chart.canvas, l = Number(this.chart.canvas.style.width.replace(/\D/g, "")), a = Number(this.chart.canvas.style.height.replace(/\D/g, ""));
                let c = r + i.caretX + 10, h = o + i.caretY - 20;
                c + s.clientWidth > r + l && (c = r + i.caretX - s.clientWidth - 10), h + s.clientHeight > o + 0.9 * a && (h = o + i.caretY - s.clientHeight + 20), c < r && (c = r + i.caretX - s.clientWidth / 2, h = o + i.caretY - s.clientHeight - 20), s.style.position = "absolute", s.style.padding = i.padding + "px " + i.padding + "px", s.style.pointerEvents = "none", s.style.left = c + "px", s.style.top = h + "px", s.style.opacity = 1;
              }
            }
          }
        }
      });
    },
    changeColors() {
      this.loadColors(), this.chart && this.chart.data.datasets[0] && (console.log("change colors:", this.colorParse), this.chart.data.datasets[0].backgroundColor = (e) => {
        const t = e.dataIndex;
        return this.colorParse[t % this.colorParse.length];
      }, this.chart.data.datasets[0].hoverBackgroundColor = (e) => {
        const t = e.dataIndex;
        return this.colorHover[t % this.colorHover.length];
      }), this.chart.update("none");
    }
  }
}, K8 = { class: "fr-col-12" }, J8 = { class: "chart" }, Z8 = { class: "chart_legend fr-mb-0 fr-mt-4v" }, Q8 = { class: "fr-text--sm fr-text--bold fr-ml-1w fr-mb-0" }, tM = {
  key: 0,
  class: "flex fr-mt-1w"
}, eM = { class: "fr-text--xs" };
function nM(e, t, n, s, i, r) {
  var o;
  return O(), me(ke, {
    disabled: !((o = e.$el) != null && o.ownerDocument.getElementById(n.databoxId)) || !n.databoxId && !n.databoxType && n.databoxSource === "default",
    to: "#" + n.databoxId + "-" + n.databoxType + "-" + n.databoxSource
  }, [
    g("div", {
      ref: i.widgetId,
      class: "widget_container fr-grid-row"
    }, [
      g("div", K8, [
        g("div", J8, [
          t[0] || (t[0] = g("div", { class: "tooltip" }, [
            g("div", { class: "tooltip_header fr-text--sm fr-mb-0" }),
            g("div", { class: "tooltip_body" }, [
              g("div", { class: "tooltip_value" })
            ])
          ], -1)),
          g("canvas", { ref: i.chartId }, null, 512),
          g("div", Z8, [
            (O(!0), F(ht, null, wt(i.nameParse, (l, a) => (O(), F("div", {
              key: a,
              class: "flex fr-mt-3v fr-mb-1v"
            }, [
              g("span", {
                class: "legende_dot",
                style: P({ "background-color": i.colorParse[a % i.colorParse.length] })
              }, null, 4),
              g("p", Q8, X(e.capitalize(l)), 1)
            ]))), 128))
          ]),
          n.date ? (O(), F("div", tM, [
            g("p", eM, " Mise à jour : " + X(n.date), 1)
          ])) : Mt("", !0)
        ])
      ])
    ], 512)
  ], 8, ["disabled", "to"]);
}
const sM = /* @__PURE__ */ It(X8, [["render", nM]]);
customElements.define("data-box", /* @__PURE__ */ _e(F5, { shadowRoot: !1 }));
customElements.define("area-line-chart", /* @__PURE__ */ _e(uw, { shadowRoot: !1 }));
customElements.define("bar-chart", /* @__PURE__ */ _e(ww, { shadowRoot: !1 }));
customElements.define("bar-line-chart", /* @__PURE__ */ _e($w, { shadowRoot: !1 }));
customElements.define("gauge-chart", /* @__PURE__ */ _e(sk, { shadowRoot: !1 }));
customElements.define("line-chart", /* @__PURE__ */ _e(yk, { shadowRoot: !1 }));
customElements.define("map-chart", /* @__PURE__ */ _e(k_, { shadowRoot: !1 }));
customElements.define("map-chart-reg", /* @__PURE__ */ _e(N_, { shadowRoot: !1 }));
customElements.define("pie-chart", /* @__PURE__ */ _e($_, { shadowRoot: !1 }));
customElements.define("radar-chart", /* @__PURE__ */ _e(X_, { shadowRoot: !1 }));
customElements.define("scatter-chart", /* @__PURE__ */ _e(r8, { shadowRoot: !1 }));
customElements.define("table-chart", /* @__PURE__ */ _e(p8, { shadowRoot: !1 }));
customElements.define("treemap-chart", /* @__PURE__ */ _e(sM, { shadowRoot: !1 }));
