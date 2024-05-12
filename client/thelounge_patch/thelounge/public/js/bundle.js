(()=>{
  var e, n = {
      1039: (e,n,a)=>{
          var t = {
              "./away.vue": 4509,
              "./back.vue": 5381,
              "./chghost.vue": 3089,
              "./ctcp.vue": 4878,
              "./ctcp_request.vue": 7052,
              "./error.vue": 3576,
              "./invite.vue": 6502,
              "./join.vue": 1770,
              "./kick.vue": 2501,
              "./mode.vue": 7393,
              "./mode_channel.vue": 1686,
              "./mode_user.vue": 1267,
              "./monospace_block.vue": 6258,
              "./nick.vue": 5169,
              "./part.vue": 3397,
              "./quit.vue": 9561,
              "./raw.vue": 7928,
              "./topic.vue": 6096,
              "./topic_set_by.vue": 4886,
              "./whois.vue": 801
          };
          function s(e) {
              var n = o(e);
              return a(n)
          }
          function o(e) {
              if (!a.o(t, e)) {
                  var n = new Error("Cannot find module '" + e + "'");
                  throw n.code = "MODULE_NOT_FOUND",
                  n
              }
              return t[e]
          }
          s.keys = function() {
              return Object.keys(t)
          }
          ,
          s.resolve = o,
          e.exports = s,
          s.id = 1039
      }
      ,
      2664: (e,n,a)=>{
          var t = {
              "./collapse.ts": 1329,
              "./expand.ts": 102,
              "./index.ts": 3805,
              "./join.ts": 7301,
              "./search.ts": 960
          };
          function s(e) {
              var n = o(e);
              return a(n)
          }
          function o(e) {
              if (!a.o(t, e)) {
                  var n = new Error("Cannot find module '" + e + "'");
                  throw n.code = "MODULE_NOT_FOUND",
                  n
              }
              return t[e]
          }
          s.keys = function() {
              return Object.keys(t)
          }
          ,
          s.resolve = o,
          e.exports = s,
          s.id = 2664
      }
      ,
      7286: (e,n,a)=>{
          "use strict";
          a.d(n, {
              Z: ()=>o
          });
          var t = a(2297)
            , s = a(9260);
          class o {
              static signout() {
                  t.Z.clear(),
                  s.Z.reload()
              }
          }
      }
      ,
      1329: (e,n,a)=>{
          "use strict";
          a.r(n);
          var t = a(8687)
            , s = a(6084);
          n.default = {
              input: function() {
                  if (!s.h.state.activeChannel)
                      return;
                  const e = [];
                  for (const n of s.h.state.activeChannel.channel.messages) {
                      let a = !1;
                      for (const e of n.previews)
                          e.shown && (e.shown = !1,
                          a = !0);
                      a && e.push(n.id)
                  }
                  return !document.body.classList.contains("public") && e.length > 0 && t.Z.emit("msg:preview:toggle", {
                      target: s.h.state.activeChannel?.channel.id,
                      messageIds: e,
                      shown: !1
                  }),
                  !0
              }
          }
      }
      ,
      102: (e,n,a)=>{
          "use strict";
          a.r(n);
          var t = a(8687)
            , s = a(6084);
          n.default = {
              input: function() {
                  if (!s.h.state.activeChannel)
                      return;
                  const e = [];
                  for (const n of s.h.state.activeChannel.channel.messages) {
                      let a = !1;
                      for (const e of n.previews)
                          e.shown || (e.shown = !0,
                          a = !0);
                      a && e.push(n.id)
                  }
                  return !document.body.classList.contains("public") && e.length > 0 && t.Z.emit("msg:preview:toggle", {
                      target: s.h.state.activeChannel?.channel.id,
                      messageIds: e,
                      shown: !0
                  }),
                  !0
              }
          }
      }
      ,
      3805: (e,n,a)=>{
          "use strict";
          a.r(n);
          const t = a(2664);
          n.default = t.keys().reduce(((e,n)=>{
              const a = n.substring(2, n.length - 3);
              return "index" === a || (e[a] = t(n).default),
              e
          }
          ), {})
      }
      ,
      7301: (e,n,a)=>{
          "use strict";
          a.r(n);
          var t = a(8687)
            , s = a(6084)
            , o = a(7543);
          n.default = {
              input: function(e) {
                  if (e.length > 0) {
                      let n = e[0];
                      if (n.length > 0) {
                          const a = s.h.state.activeChannel?.network.serverOptions.CHANTYPES
                            , i = e[0].split(",");
                          if (a && a.length > 0)
                              for (let e = 0; e < i.length; e++)
                                  a.includes(i[e][0]) || (i[e] = a[0] + i[e]);
                          n = i.join(",");
                          const r = s.h.getters.findChannelOnCurrentNetwork(n);
                          if (!r)
                              return s.h.state.activeChannel && t.Z.emit("input", {
                                  text: `/join ${n} ${e.length > 1 ? e[1] : ""}`,
                                  target: s.h.state.activeChannel.channel.id
                              }),
                              !0;
                          (0,
                          o.qZ)(r)
                      }
                  } else if ("channel" === s.h.state.activeChannel?.channel.type)
                      return t.Z.emit("input", {
                          target: s.h.state.activeChannel.channel.id,
                          text: `/join ${s.h.state.activeChannel.channel.name}`
                      }),
                      !0
              }
          }
      }
      ,
      960: (e,n,a)=>{
          "use strict";
          a.r(n);
          var t = a(6084)
            , s = a(7543);
          n.default = {
              input: function(e) {
                  return !!t.h.state.settings.searchEnabled && (s.Nd.push({
                      name: "SearchResults",
                      params: {
                          id: t.h.state.activeChannel?.channel.id
                      },
                      query: {
                          q: e.join(" ")
                      }
                  }).catch((e=>{
                      console.error(`Failed to push SearchResults route: ${e.message}`)
                  }
                  )),
                  !0)
              }
          }
      }
      ,
      9307: (e,n)=>{
          "use strict";
          n.Z = {
              colorCodeMap: [["00", "White"], ["01", "Black"], ["02", "Blue"], ["03", "Green"], ["04", "Red"], ["05", "Brown"], ["06", "Magenta"], ["07", "Orange"], ["08", "Yellow"], ["09", "Light Green"], ["10", "Cyan"], ["11", "Light Cyan"], ["12", "Light Blue"], ["13", "Pink"], ["14", "Grey"], ["15", "Light Grey"]],
              commands: [],
              timeFormats: {
                  msgDefault: "HH:mm",
                  msgWithSeconds: "HH:mm:ss",
                  msg12h: "hh:mm A",
                  msg12hWithSeconds: "hh:mm:ss A"
              },
              mobileViewportPixels: 768
          }
      }
      ,
      8833: (e,n)=>{
          "use strict";
          const a = new Map;
          n.Z = new class {
              on(e, n) {
                  a.has(e) ? a.get(e).push(n) : a.set(e, [n])
              }
              off(e, n) {
                  a.has(e) && a.set(e, a.get(e).filter((e=>e !== n)))
              }
              emit(e, ...n) {
                  a.has(e) && a.get(e).slice().map((e=>{
                      e(...n)
                  }
                  ))
              }
          }
      }
      ,
      5118: (e,n)=>{
          "use strict";
          n.Z = function([e,n], [a,t]) {
              return Math.hypot(e - a, n - t)
          }
      }
      ,
      5785: (e,n)=>{
          "use strict";
          const a = ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB"];
          n.Z = e=>{
              const n = e > 0 ? Math.floor(Math.log(e) / Math.log(1024)) : 0;
              return `${parseFloat((e / Math.pow(1024, n)).toFixed(1))} ${a[n]}`
          }
      }
      ,
      5485: (e,n,a)=>{
          "use strict";
          var t = a(6084);
          n.Z = (e,n)=>!(!e.isCollapsed || n.highlight || "lobby" === n.type || t.h.state.activeChannel && n === t.h.state.activeChannel.channel)
      }
      ,
      4827: (e,n)=>{
          "use strict";
          n.Z = e=>("TEXTAREA" === e.target.tagName || "INPUT" === e.target.tagName) && !!e.target.value
      }
      ,
      8017: (e,n,a)=>{
          "use strict";
          var t = a(7484)
            , s = a.n(t);
          n.Z = e=>s()(e).format("D MMMM YYYY, HH:mm:ss")
      }
      ,
      2297: (e,n)=>{
          "use strict";
          n.Z = {
              set(e, n) {
                  try {
                      window.localStorage.setItem(e, n)
                  } catch (e) {}
              },
              get(e) {
                  try {
                      return window.localStorage.getItem(e)
                  } catch (e) {
                      return null
                  }
              },
              remove(e) {
                  try {
                      window.localStorage.removeItem(e)
                  } catch (e) {}
              },
              clear() {
                  try {
                      window.localStorage.clear()
                  } catch (e) {}
              }
          }
      }
      ,
      9260: (e,n)=>{
          "use strict";
          n.Z = {
              reload() {
                  window.location.reload()
              }
          }
      }
      ,
      7543: (e,n,a)=>{
          "use strict";
          a.d(n, {
              c4: ()=>hh,
              Nd: ()=>dh,
              qZ: ()=>ph
          });
          var t = a(9307)
            , s = a(2119)
            , o = a(3648)
            , i = a(1406);
          const r = {
              id: "sign-in",
              class: "window",
              role: "tabpanel",
              "aria-label": "Sign-in"
          }
            , l = (0,
          o._)("img", {
              src: "img/logo-vertical-transparent-bg.svg",
              class: "logo",
              alt: "The Lounge",
              width: "256",
              height: "170"
          }, null, -1)
            , c = (0,
          o._)("img", {
              src: "img/logo-vertical-transparent-bg-inverted.svg",
              class: "logo-inverted",
              alt: "The Lounge",
              width: "256",
              height: "170"
          }, null, -1)
            , u = (0,
          o._)("label", {
              for: "signin-username"
          }, "Username", -1)
            , d = {
              class: "password-container"
          }
            , h = (0,
          o._)("label", {
              for: "signin-password"
          }, "Password", -1)
            , p = ["type"]
            , g = {
              key: 0,
              class: "error"
          }
            , m = ["disabled"];
          var w = a(2297)
            , f = a(8687)
            , k = a(3577);
          const b = ["aria-label"]
            , v = ["aria-label"];
          var _ = a(8015)
            , y = (0,
          o.aZ)({
              name: "RevealPassword",
              setup() {
                  const e = (0,
                  _.iH)(!1);
                  return {
                      isVisible: e,
                      onClick: ()=>{
                          e.value = !e.value
                      }
                  }
              }
          })
            , C = a(3744)
            , x = (0,
          C.Z)(y, [["render", function(e, n, a, t, s, i) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", null, [(0,
              o.WI)(e.$slots, "default", {
                  isVisible: e.isVisible
              }), (0,
              o._)("span", {
                  ref: "revealButton",
                  type: "button",
                  class: (0,
                  k.C_)(["reveal-password tooltipped tooltipped-n tooltipped-no-delay", {
                      "reveal-password-visible": e.isVisible
                  }]),
                  "aria-label": e.isVisible ? "Hide password" : "Show password",
                  onClick: n[0] || (n[0] = (...n)=>e.onClick && e.onClick(...n))
              }, [(0,
              o._)("span", {
                  "aria-label": e.isVisible ? "Hide password" : "Show password"
              }, null, 8, v)], 10, b)])
          }
          ]])
            , S = (0,
          o.aZ)({
              name: "SignIn",
              components: {
                  RevealPassword: x
              },
              setup() {
                  const e = (0,
                  _.iH)(!1)
                    , n = (0,
                  _.iH)(!1)
                    , a = (0,
                  _.iH)(w.Z.get("user") || "")
                    , t = (0,
                  _.iH)("")
                    , s = ()=>{
                      e.value = !1,
                      n.value = !0
                  }
                  ;
                  return (0,
                  o.bv)((()=>{
                      f.Z.on("auth:failed", s)
                  }
                  )),
                  (0,
                  o.Jd)((()=>{
                      f.Z.off("auth:failed", s)
                  }
                  )),
                  {
                      inFlight: e,
                      errorShown: n,
                      username: a,
                      password: t,
                      onSubmit: s=>{
                          if (s.preventDefault(),
                          !a.value || !t.value)
                              return;
                          e.value = !0,
                          n.value = !1;
                          const o = {
                              user: a.value,
                              password: t.value
                          };
                          w.Z.set("user", o.user),
                          f.Z.emit("auth:perform", o)
                      }
                  }
              }
          })
            , D = (0,
          C.Z)(S, [["render", function(e, n, a, t, s, w) {
              const f = (0,
              o.up)("RevealPassword");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", r, [(0,
              o._)("form", {
                  class: "container",
                  method: "post",
                  action: "",
                  onSubmit: n[2] || (n[2] = (...n)=>e.onSubmit && e.onSubmit(...n))
              }, [l, c, u, (0,
              o.wy)((0,
              o._)("input", {
                  id: "signin-username",
                  "onUpdate:modelValue": n[0] || (n[0] = n=>e.username = n),
                  class: "input",
                  type: "text",
                  name: "username",
                  autocapitalize: "none",
                  autocorrect: "off",
                  autocomplete: "username",
                  required: "",
                  autofocus: ""
              }, null, 512), [[i.nr, e.username]]), (0,
              o._)("div", d, [h, (0,
              o.Wm)(f, null, {
                  default: (0,
                  o.w5)((a=>[(0,
                  o.wy)((0,
                  o._)("input", {
                      id: "signin-password",
                      "onUpdate:modelValue": n[1] || (n[1] = n=>e.password = n),
                      type: a.isVisible ? "text" : "password",
                      class: "input",
                      autocapitalize: "none",
                      autocorrect: "off",
                      autocomplete: "current-password",
                      required: ""
                  }, null, 8, p), [[i.YZ, e.password]])])),
                  _: 1
              })]), e.errorShown ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", g, "Authentication failed.")) : (0,
              o.kq)("", !0), (0,
              o._)("button", {
                  disabled: e.inFlight,
                  type: "submit",
                  class: "btn"
              }, "Sign in", 8, m)], 32)])
          }
          ]])
            , Z = a(6084);
          const U = {
              id: "connect",
              class: "window",
              role: "tabpanel",
              "aria-label": "Connect"
          }
            , M = {
              class: "header"
          }
            , q = {
              class: "title"
          }
            , j = (0,
          o.Uk)(" Connect ")
            , T = (0,
          o._)("h2", null, "Network settings", -1)
            , P = {
              class: "connect-row"
          }
            , H = (0,
          o._)("label", {
              for: "connect:name"
          }, "Name", -1)
            , L = {
              class: "connect-row"
          }
            , O = (0,
          o._)("label", {
              for: "connect:host"
          }, "Server", -1)
            , I = {
              class: "input-wrap"
          }
            , A = (0,
          o._)("span", {
              id: "connect:portseparator"
          }, ":", -1)
            , E = {
              class: "connect-row"
          }
            , N = (0,
          o._)("label", {
              for: "connect:password"
          }, "Password", -1)
            , z = ["type"]
            , Y = {
              class: "connect-row"
          }
            , R = (0,
          o._)("label", null, null, -1)
            , W = {
              class: "input-wrap"
          }
            , F = {
              class: "tls"
          }
            , B = ["disabled"]
            , $ = (0,
          o.Uk)(" Use secure connection (TLS) ")
            , V = {
              key: 0,
              class: "tooltipped tooltipped-n tooltipped-no-delay",
              "aria-label": "This network has a strict transport security policy, you will be unable to disable TLS"
          }
            , J = {
              class: "tls"
          }
            , K = (0,
          o.Uk)(" Only allow trusted certificates ")
            , G = (0,
          o._)("h2", null, "Proxy Settings", -1)
            , X = {
              class: "connect-row"
          }
            , Q = (0,
          o._)("label", null, null, -1)
            , ee = {
              class: "input-wrap"
          }
            , ne = {
              for: "connect:proxyEnabled"
          }
            , ae = (0,
          o.Uk)(" Enable Proxy ")
            , te = {
              class: "connect-row"
          }
            , se = (0,
          o._)("label", {
              for: "connect:proxyHost"
          }, "SOCKS Address", -1)
            , oe = {
              class: "input-wrap"
          }
            , ie = (0,
          o._)("span", {
              id: "connect:proxyPortSeparator"
          }, ":", -1)
            , re = {
              class: "connect-row"
          }
            , le = (0,
          o._)("label", {
              for: "connect:proxyUsername"
          }, "Proxy username", -1)
            , ce = {
              class: "connect-row"
          }
            , ue = (0,
          o._)("label", {
              for: "connect:proxyPassword"
          }, "Proxy password", -1)
            , de = ["type"]
            , he = (0,
          o._)("h2", null, "Network settings", -1)
            , pe = {
              class: "connect-row"
          }
            , ge = (0,
          o._)("label", {
              for: "connect:name"
          }, "Name", -1)
            , me = {
              class: "connect-row"
          }
            , we = (0,
          o._)("label", {
              for: "connect:password"
          }, "Password", -1)
            , fe = ["type"]
            , ke = (0,
          o._)("h2", null, "User preferences", -1)
            , be = {
              class: "connect-row"
          }
            , ve = (0,
          o._)("label", {
              for: "connect:nick"
          }, "Nick", -1)
            , _e = {
              key: 2,
              class: "connect-row"
          }
            , ye = (0,
          o._)("label", {
              for: "connect:username"
          }, "Username", -1)
            , Ce = {
              class: "connect-row"
          }
            , xe = (0,
          o._)("label", {
              for: "connect:realname"
          }, "Real name", -1)
            , Se = {
              class: "connect-row"
          }
            , De = (0,
          o._)("label", {
              for: "connect:leaveMessage"
          }, "Leave message", -1)
            , Ze = {
              key: 3,
              class: "connect-row"
          }
            , Ue = (0,
          o._)("label", {
              for: "connect:commands"
          }, [(0,
          o.Uk)(" Commands "), (0,
          o._)("span", {
              class: "tooltipped tooltipped-ne tooltipped-no-delay",
              "aria-label": "One /command per line.\nEach command will be executed in\nthe server tab on new connection"
          }, [(0,
          o._)("button", {
              class: "extra-help"
          })])], -1)
            , Me = ["value"]
            , qe = {
              key: 4,
              class: "connect-row"
          }
            , je = (0,
          o._)("label", {
              for: "connect:channels"
          }, "Channels", -1)
            , Te = {
              class: "connect-row"
          }
            , Pe = (0,
          o._)("label", null, null, -1)
            , He = {
              class: "input-wrap"
          }
            , Le = {
              class: "tls"
          }
            , Oe = (0,
          o.Uk)(" I have a password ")
            , Ie = {
              key: 0,
              class: "connect-row"
          }
            , Ae = (0,
          o._)("label", {
              for: "connect:password"
          }, "Password", -1)
            , Ee = ["type"]
            , Ne = (0,
          o._)("h2", {
              id: "label-auth"
          }, "Authentication", -1)
            , ze = {
              class: "connect-row connect-auth",
              role: "group",
              "aria-labelledby": "label-auth"
          }
            , Ye = {
              class: "opt"
          }
            , Re = ["checked"]
            , We = (0,
          o.Uk)(" No authentication ")
            , Fe = {
              class: "opt"
          }
            , Be = ["checked"]
            , $e = (0,
          o.Uk)(" Username + password (SASL PLAIN) ")
            , Ve = {
              key: 0,
              class: "opt"
          }
            , Je = ["checked"]
            , Ke = (0,
          o.Uk)(" Client certificate (SASL EXTERNAL) ")
            , Ge = {
              class: "connect-row"
          }
            , Xe = (0,
          o._)("label", {
              for: "connect:username"
          }, "Account", -1)
            , Qe = {
              class: "connect-row"
          }
            , en = (0,
          o._)("label", {
              for: "connect:password"
          }, "Password", -1)
            , nn = ["type"]
            , an = {
              key: 1,
              class: "connect-sasl-external"
          }
            , tn = [(0,
          o._)("p", null, "The Lounge automatically generates and manages the client certificate.", -1), (0,
          o._)("p", null, " On the IRC server, you will need to tell the services to attach the certificate fingerprint (certfp) to your account, for example: ", -1), (0,
          o._)("pre", null, [(0,
          o._)("code", null, "/msg NickServ CERT ADD")], -1)]
            , sn = ["disabled"]
            , on = (0,
          o.Uk)("Save network")
            , rn = (0,
          o.Uk)("Connect");
          var ln = (0,
          o.aZ)({
              name: "SidebarToggle",
              setup: ()=>({
                  store: (0,
                  Z.oR)()
              })
          })
            , cn = (0,
          C.Z)(ln, [["render", function(e, n, a, t, s, i) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("button", {
                  class: "lt",
                  "aria-label": "Toggle channel list",
                  onClick: n[0] || (n[0] = n=>e.store.commit("toggleSidebar"))
              })
          }
          ]])
            , un = (0,
          o.aZ)({
              name: "NetworkForm",
              components: {
                  RevealPassword: x,
                  SidebarToggle: cn
              },
              props: {
                  handleSubmit: {
                      type: Function,
                      required: !0
                  },
                  defaults: {
                      type: Object,
                      required: !0
                  },
                  disabled: Boolean
              },
              setup(e) {
                  const n = (0,
                  Z.oR)()
                    , a = (0,
                  _.iH)(n.state.serverConfiguration)
                    , t = (0,
                  _.iH)(e.defaults?.username)
                    , s = (0,
                  _.iH)(!1)
                    , i = (0,
                  _.iH)(null);
                  (0,
                  o.YP)(s, (e=>{
                      e && (0,
                      o.Y3)((()=>{
                          i.value?.focus()
                      }
                      ))
                  }
                  ));
                  const r = (0,
                  _.iH)(null)
                    , l = ()=>{
                      r.value && (r.value.style.height = "",
                      r.value.style.height = `${Math.ceil(r.value.scrollHeight + 2)}px`)
                  }
                  ;
                  (0,
                  o.YP)((()=>e.defaults?.commands), (()=>{
                      (0,
                      o.Y3)((()=>{
                          l()
                      }
                      ))
                  }
                  )),
                  (0,
                  o.YP)((()=>e.defaults?.tls), (n=>{
                      const a = [6667, 6697]
                        , t = n ? 0 : 1;
                      e.defaults?.port === a[t] && (e.defaults.port = a[1 - t])
                  }
                  ));
                  const c = (0,
                  _.iH)(null);
                  return {
                      store: n,
                      config: a,
                      displayPasswordField: s,
                      publicPassword: i,
                      commandsInput: r,
                      resizeCommandsInput: l,
                      setSaslAuth: n=>{
                          e.defaults && (e.defaults.sasl = n)
                      }
                      ,
                      usernameInput: c,
                      onNickChanged: e=>{
                          if (!c.value)
                              return;
                          const n = c.value;
                          n.value && n.value !== t.value || (n.value = e.target?.value),
                          t.value = e.target?.value
                      }
                      ,
                      onSubmit: n=>{
                          const a = new FormData(n.target)
                            , t = {};
                          a.forEach(((e,n)=>{
                              t[n] = e
                          }
                          )),
                          e.handleSubmit(t)
                      }
                  }
              }
          })
            , dn = (0,
          C.Z)(un, [["render", function(e, n, a, t, s, r) {
              const l = (0,
              o.up)("SidebarToggle")
                , c = (0,
              o.up)("RevealPassword");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", U, [(0,
              o._)("div", M, [(0,
              o.Wm)(l)]), (0,
              o._)("form", {
                  class: "container",
                  method: "post",
                  action: "",
                  onSubmit: n[28] || (n[28] = (0,
                  i.iM)(((...n)=>e.onSubmit && e.onSubmit(...n)), ["prevent"]))
              }, [(0,
              o._)("h1", q, [e.defaults.uuid ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [(0,
              o.wy)((0,
              o._)("input", {
                  "onUpdate:modelValue": n[0] || (n[0] = n=>e.defaults.uuid = n),
                  type: "hidden",
                  name: "uuid"
              }, null, 512), [[i.nr, e.defaults.uuid]]), (0,
              o.Uk)(" Edit " + (0,
              k.zw)(e.defaults.name), 1)], 64)) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, [j, e.config?.lockNetwork && e.store?.state.serverConfiguration?.public ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [(0,
              o.Uk)(" to " + (0,
              k.zw)(e.defaults.name), 1)], 64)) : (0,
              o.kq)("", !0)], 64))]), e.config?.lockNetwork ? e.config.lockNetwork && !e.store.state.serverConfiguration?.public ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, [he, (0,
              o._)("div", pe, [ge, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:name",
                  "onUpdate:modelValue": n[12] || (n[12] = n=>e.defaults.name = n),
                  class: "input",
                  name: "name",
                  maxlength: "100"
              }, null, 512), [[i.nr, e.defaults.name, void 0, {
                  trim: !0
              }]])]), (0,
              o._)("div", me, [we, (0,
              o.Wm)(c, {
                  class: "input-wrap password-container"
              }, {
                  default: (0,
                  o.w5)((a=>[(0,
                  o.wy)((0,
                  o._)("input", {
                      id: "connect:password",
                      "onUpdate:modelValue": n[13] || (n[13] = n=>e.defaults.password = n),
                      class: "input",
                      type: a.isVisible ? "text" : "password",
                      placeholder: "Server password (optional)",
                      name: "password",
                      maxlength: "300"
                  }, null, 8, fe), [[i.YZ, e.defaults.password]])])),
                  _: 1
              })])], 64)) : (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [T, (0,
              o._)("div", P, [H, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:name",
                  "onUpdate:modelValue": n[1] || (n[1] = n=>e.defaults.name = n),
                  class: "input",
                  name: "name",
                  maxlength: "100"
              }, null, 512), [[i.nr, e.defaults.name, void 0, {
                  trim: !0
              }]])]), (0,
              o._)("div", L, [O, (0,
              o._)("div", I, [(0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:host",
                  "onUpdate:modelValue": n[2] || (n[2] = n=>e.defaults.host = n),
                  class: "input",
                  name: "host",
                  "aria-label": "Server address",
                  maxlength: "255",
                  required: ""
              }, null, 512), [[i.nr, e.defaults.host, void 0, {
                  trim: !0
              }]]), A, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:port",
                  "onUpdate:modelValue": n[3] || (n[3] = n=>e.defaults.port = n),
                  class: "input",
                  type: "number",
                  min: "1",
                  max: "65535",
                  name: "port",
                  "aria-label": "Server port"
              }, null, 512), [[i.nr, e.defaults.port]])])]), (0,
              o._)("div", E, [N, (0,
              o.Wm)(c, {
                  class: "input-wrap password-container"
              }, {
                  default: (0,
                  o.w5)((a=>[(0,
                  o.wy)((0,
                  o._)("input", {
                      id: "connect:password",
                      "onUpdate:modelValue": n[4] || (n[4] = n=>e.defaults.password = n),
                      class: "input",
                      type: a.isVisible ? "text" : "password",
                      placeholder: "Server password (optional)",
                      name: "password",
                      maxlength: "300"
                  }, null, 8, z), [[i.YZ, e.defaults.password]])])),
                  _: 1
              })]), (0,
              o._)("div", Y, [R, (0,
              o._)("div", W, [(0,
              o._)("label", F, [(0,
              o.wy)((0,
              o._)("input", {
                  "onUpdate:modelValue": n[5] || (n[5] = n=>e.defaults.tls = n),
                  type: "checkbox",
                  name: "tls",
                  disabled: e.defaults.hasSTSPolicy
              }, null, 8, B), [[i.e8, e.defaults.tls]]), $, e.defaults.hasSTSPolicy ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", V, "🔒 STS")) : (0,
              o.kq)("", !0)]), (0,
              o._)("label", J, [(0,
              o.wy)((0,
              o._)("input", {
                  "onUpdate:modelValue": n[6] || (n[6] = n=>e.defaults.rejectUnauthorized = n),
                  type: "checkbox",
                  name: "rejectUnauthorized"
              }, null, 512), [[i.e8, e.defaults.rejectUnauthorized]]), K])])]), G, (0,
              o._)("div", X, [Q, (0,
              o._)("div", ee, [(0,
              o._)("label", ne, [(0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:proxyEnabled",
                  "onUpdate:modelValue": n[7] || (n[7] = n=>e.defaults.proxyEnabled = n),
                  type: "checkbox",
                  name: "proxyEnabled"
              }, null, 512), [[i.e8, e.defaults.proxyEnabled]]), ae])])]), e.defaults.proxyEnabled ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [(0,
              o._)("div", te, [se, (0,
              o._)("div", oe, [(0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:proxyHost",
                  "onUpdate:modelValue": n[8] || (n[8] = n=>e.defaults.proxyHost = n),
                  class: "input",
                  name: "proxyHost",
                  "aria-label": "Proxy host",
                  maxlength: "255"
              }, null, 512), [[i.nr, e.defaults.proxyHost, void 0, {
                  trim: !0
              }]]), ie, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:proxyPort",
                  "onUpdate:modelValue": n[9] || (n[9] = n=>e.defaults.proxyPort = n),
                  class: "input",
                  type: "number",
                  min: "1",
                  max: "65535",
                  name: "proxyPort",
                  "aria-label": "SOCKS port"
              }, null, 512), [[i.nr, e.defaults.proxyPort]])])]), (0,
              o._)("div", re, [le, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:proxyUsername",
                  ref: "proxyUsernameInput",
                  "onUpdate:modelValue": n[10] || (n[10] = n=>e.defaults.proxyUsername = n),
                  class: "input username",
                  name: "proxyUsername",
                  maxlength: "100",
                  placeholder: "Proxy username"
              }, null, 512), [[i.nr, e.defaults.proxyUsername, void 0, {
                  trim: !0
              }]])]), (0,
              o._)("div", ce, [ue, (0,
              o.Wm)(c, {
                  class: "input-wrap password-container"
              }, {
                  default: (0,
                  o.w5)((a=>[(0,
                  o.wy)((0,
                  o._)("input", {
                      id: "connect:proxyPassword",
                      ref: "proxyPassword",
                      "onUpdate:modelValue": n[11] || (n[11] = n=>e.defaults.proxyPassword = n),
                      class: "input",
                      type: a.isVisible ? "text" : "password",
                      placeholder: "Proxy password",
                      name: "proxyPassword",
                      maxlength: "300"
                  }, null, 8, de), [[i.YZ, e.defaults.proxyPassword]])])),
                  _: 1
              })])], 64)) : (0,
              o.kq)("", !0)], 64)), ke, (0,
              o._)("div", be, [ve, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:nick",
                  "onUpdate:modelValue": n[14] || (n[14] = n=>e.defaults.nick = n),
                  class: "input nick",
                  name: "nick",
                  pattern: "[^\\s:!@]+",
                  maxlength: "100",
                  required: "",
                  onInput: n[15] || (n[15] = (...n)=>e.onNickChanged && e.onNickChanged(...n))
              }, null, 544), [[i.nr, e.defaults.nick]])]), e.config?.useHexIp ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", _e, [ye, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:username",
                  ref: "usernameInput",
                  "onUpdate:modelValue": n[16] || (n[16] = n=>e.defaults.username = n),
                  class: "input username",
                  name: "username",
                  maxlength: "100"
              }, null, 512), [[i.nr, e.defaults.username, void 0, {
                  trim: !0
              }]])])), (0,
              o._)("div", Ce, [xe, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:realname",
                  "onUpdate:modelValue": n[17] || (n[17] = n=>e.defaults.realname = n),
                  class: "input",
                  name: "realname",
                  maxlength: "300"
              }, null, 512), [[i.nr, e.defaults.realname, void 0, {
                  trim: !0
              }]])]), (0,
              o._)("div", Se, [De, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:leaveMessage",
                  "onUpdate:modelValue": n[18] || (n[18] = n=>e.defaults.leaveMessage = n),
                  autocomplete: "off",
                  class: "input",
                  name: "leaveMessage",
                  placeholder: "The Lounge - https://thelounge.chat"
              }, null, 512), [[i.nr, e.defaults.leaveMessage, void 0, {
                  trim: !0
              }]])]), e.defaults.uuid && !e.store.state.serverConfiguration?.public ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", Ze, [Ue, (0,
              o._)("textarea", {
                  id: "connect:commands",
                  ref: "commandsInput",
                  autocomplete: "off",
                  value: e.defaults.commands ? e.defaults.commands.join("\n") : "",
                  class: "input",
                  name: "commands",
                  onInput: n[19] || (n[19] = (...n)=>e.resizeCommandsInput && e.resizeCommandsInput(...n))
              }, null, 40, Me)])) : e.defaults.uuid ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", qe, [je, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:channels",
                  "onUpdate:modelValue": n[20] || (n[20] = n=>e.defaults.join = n),
                  class: "input",
                  name: "join"
              }, null, 512), [[i.nr, e.defaults.join, void 0, {
                  trim: !0
              }]])])), e.store.state.serverConfiguration?.public ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 5
              }, [e.config?.lockNetwork ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [(0,
              o._)("div", Te, [Pe, (0,
              o._)("div", He, [(0,
              o._)("label", Le, [(0,
              o.wy)((0,
              o._)("input", {
                  "onUpdate:modelValue": n[21] || (n[21] = n=>e.displayPasswordField = n),
                  type: "checkbox"
              }, null, 512), [[i.e8, e.displayPasswordField]]), Oe])])]), e.displayPasswordField ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", Ie, [Ae, (0,
              o.Wm)(c, {
                  class: "input-wrap password-container"
              }, {
                  default: (0,
                  o.w5)((a=>[(0,
                  o.wy)((0,
                  o._)("input", {
                      id: "connect:password",
                      ref: "publicPassword",
                      "onUpdate:modelValue": n[22] || (n[22] = n=>e.defaults.password = n),
                      class: "input",
                      type: a.isVisible ? "text" : "password",
                      placeholder: "Server password (optional)",
                      name: "password",
                      maxlength: "300"
                  }, null, 8, Ee), [[i.YZ, e.defaults.password]])])),
                  _: 1
              })])) : (0,
              o.kq)("", !0)], 64)) : (0,
              o.kq)("", !0)], 64)) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 6
              }, [Ne, (0,
              o._)("div", ze, [(0,
              o._)("label", Ye, [(0,
              o._)("input", {
                  checked: !e.defaults.sasl,
                  type: "radio",
                  name: "sasl",
                  value: "",
                  onChange: n[23] || (n[23] = n=>e.setSaslAuth(""))
              }, null, 40, Re), We]), (0,
              o._)("label", Fe, [(0,
              o._)("input", {
                  checked: "plain" === e.defaults.sasl,
                  type: "radio",
                  name: "sasl",
                  value: "plain",
                  onChange: n[24] || (n[24] = n=>e.setSaslAuth("plain"))
              }, null, 40, Be), $e]), !e.store.state.serverConfiguration?.public && e.defaults.tls ? ((0,
              o.wg)(),
              (0,
              o.iD)("label", Ve, [(0,
              o._)("input", {
                  checked: "external" === e.defaults.sasl,
                  type: "radio",
                  name: "sasl",
                  value: "external",
                  onChange: n[25] || (n[25] = n=>e.setSaslAuth("external"))
              }, null, 40, Je), Ke])) : (0,
              o.kq)("", !0)]), "plain" === e.defaults.sasl ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [(0,
              o._)("div", Ge, [Xe, (0,
              o.wy)((0,
              o._)("input", {
                  id: "connect:saslAccount",
                  "onUpdate:modelValue": n[26] || (n[26] = n=>e.defaults.saslAccount = n),
                  class: "input",
                  name: "saslAccount",
                  maxlength: "100",
                  required: ""
              }, null, 512), [[i.nr, e.defaults.saslAccount, void 0, {
                  trim: !0
              }]])]), (0,
              o._)("div", Qe, [en, (0,
              o.Wm)(c, {
                  class: "input-wrap password-container"
              }, {
                  default: (0,
                  o.w5)((a=>[(0,
                  o.wy)((0,
                  o._)("input", {
                      id: "connect:saslPassword",
                      "onUpdate:modelValue": n[27] || (n[27] = n=>e.defaults.saslPassword = n),
                      class: "input",
                      type: a.isVisible ? "text" : "password",
                      name: "saslPassword",
                      maxlength: "300",
                      required: ""
                  }, null, 8, nn), [[i.YZ, e.defaults.saslPassword]])])),
                  _: 1
              })])], 64)) : "external" === e.defaults.sasl ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", an, tn)) : (0,
              o.kq)("", !0)], 64)), (0,
              o._)("div", null, [(0,
              o._)("button", {
                  type: "submit",
                  class: "btn",
                  disabled: !!e.disabled
              }, [e.defaults.uuid ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [on], 64)) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, [rn], 64))], 8, sn)])], 32)])
          }
          ]])
            , hn = (0,
          o.aZ)({
              name: "Connect",
              components: {
                  NetworkForm: dn
              },
              props: {
                  queryParams: Object
              },
              setup(e) {
                  const n = (0,
                  Z.oR)()
                    , a = (0,
                  _.iH)(!1);
                  return {
                      defaults: (0,
                      _.iH)(Object.assign({}, n.state.serverConfiguration?.defaults, (e=>{
                          if (!e)
                              return {};
                          const a = {};
                          for (let t of Object.keys(e)) {
                              let s = e[t];
                              if (Array.isArray(s) && (s = s[0]),
                              "channels" === t && (t = "join"),
                              Object.prototype.hasOwnProperty.call(n.state.serverConfiguration?.defaults, t) && (!n.state.serverConfiguration?.lockNetwork || !["name", "host", "port", "tls", "rejectUnauthorized"].includes(t)))
                                  switch ("join" === t && (s = s.split(",").map((e=>e.match(/^[#&!+]/) ? e : `#${e}`)).join(", ")),
                                  typeof n.state.serverConfiguration?.defaults[t]) {
                                  case "boolean":
                                      a[t] = "0" !== s && "false" !== s && !!s;
                                      break;
                                  case "number":
                                      a[t] = Number(s);
                                      break;
                                  case "string":
                                      a[t] = String(s)
                                  }
                          }
                          return a
                      }
                      )(e.queryParams))),
                      disabled: a,
                      handleSubmit: e=>{
                          a.value = !0,
                          f.Z.emit("network:new", e)
                      }
                  }
              }
          })
            , pn = (0,
          C.Z)(hn, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("NetworkForm");
              return (0,
              o.wg)(),
              (0,
              o.j4)(r, {
                  "handle-submit": e.handleSubmit,
                  defaults: e.defaults,
                  disabled: e.disabled
              }, null, 8, ["handle-submit", "defaults", "disabled"])
          }
          ]]);
          const gn = {
              id: "settings",
              class: "window",
              role: "tabpanel",
              "aria-label": "Settings"
          }
            , mn = {
              class: "header"
          }
            , wn = {
              class: "container"
          }
            , fn = {
              class: "settings-menu"
          }
            , kn = (0,
          o._)("h2", null, "Settings", -1)
            , bn = {
              role: "navigation",
              "aria-label": "Settings tabs"
          }
            , vn = ["aria-label", "aria-selected"]
            , _n = ["onClick", "onKeypress"];
          var yn = (0,
          o.aZ)({
              name: "SettingTabListItem",
              props: {
                  name: {
                      type: String,
                      required: !0
                  },
                  className: {
                      type: String,
                      required: !0
                  },
                  to: {
                      type: String,
                      required: !0
                  }
              },
              setup: ()=>({
                  route: (0,
                  s.yj)()
              })
          })
            , Cn = (0,
          C.Z)(yn, [["render", function(e, n, a, t, s, r) {
              const l = (0,
              o.up)("router-link");
              return (0,
              o.wg)(),
              (0,
              o.iD)("li", {
                  "aria-label": e.name,
                  role: "tab",
                  "aria-selected": e.route.name === e.name,
                  "aria-controls": "settings"
              }, [(0,
              o.Wm)(l, {
                  to: "/settings/" + e.to,
                  custom: ""
              }, {
                  default: (0,
                  o.w5)((({navigate: n, isExactActive: a})=>[(0,
                  o._)("button", {
                      class: (0,
                      k.C_)(["icon", e.className, {
                          active: a
                      }]),
                      onClick: n,
                      onKeypress: (0,
                      i.D2)(n, ["enter"])
                  }, (0,
                  k.zw)(e.name), 43, _n)])),
                  _: 1
              }, 8, ["to"])], 8, vn)
          }
          ]])
            , xn = (0,
          o.aZ)({
              name: "SettingsTabs",
              components: {
                  SettingTabItem: Cn
              }
          })
            , Sn = (0,
          C.Z)(xn, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("SettingTabItem");
              return (0,
              o.wg)(),
              (0,
              o.iD)("aside", fn, [kn, (0,
              o._)("ul", bn, [(0,
              o.Wm)(r, {
                  name: "General",
                  "class-name": "general",
                  to: ""
              }), (0,
              o.Wm)(r, {
                  name: "Appearance",
                  "class-name": "appearance",
                  to: "appearance"
              }), (0,
              o.Wm)(r, {
                  name: "Notifications",
                  "class-name": "notifications",
                  to: "notifications"
              }), (0,
              o.Wm)(r, {
                  name: "Account",
                  "class-name": "account",
                  to: "account"
              })])])
          }
          ]])
            , Dn = (0,
          o.aZ)({
              name: "Settings",
              components: {
                  SidebarToggle: cn,
                  Navigation: Sn
              },
              setup() {
                  const e = (0,
                  Z.oR)();
                  return {
                      onChange: n=>{
                          const a = n.target.name;
                          if (["old_password", "new_password", "verify_password"].includes(a))
                              return;
                          let t;
                          t = "checkbox" === n.target.type ? n.target.checked : n.target.value,
                          e.dispatch("settings/update", {
                              name: a,
                              value: t,
                              sync: !0
                          })
                      }
                  }
              }
          })
            , Zn = (0,
          C.Z)(Dn, [["render", function(e, n, a, t, s, r) {
              const l = (0,
              o.up)("SidebarToggle")
                , c = (0,
              o.up)("Navigation")
                , u = (0,
              o.up)("router-view");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", gn, [(0,
              o._)("div", mn, [(0,
              o.Wm)(l)]), (0,
              o.Wm)(c), (0,
              o._)("div", wn, [(0,
              o._)("form", {
                  ref: "settingsForm",
                  autocomplete: "off",
                  onChange: n[0] || (n[0] = (...n)=>e.onChange && e.onChange(...n)),
                  onSubmit: n[1] || (n[1] = (0,
                  i.iM)((()=>{}
                  ), ["prevent"]))
              }, [(0,
              o.Wm)(u)], 544)])])
          }
          ]]);
          const Un = {
              id: "help",
              class: "window",
              role: "tabpanel",
              "aria-label": "Help"
          }
            , Mn = {
              class: "header"
          }
            , qn = {
              class: "container"
          }
            , jn = (0,
          o._)("h1", {
              class: "title"
          }, "Help", -1)
            , Tn = {
              class: "help-version-title"
          }
            , Pn = (0,
          o._)("span", null, "About The Lounge", -1)
            , Hn = (0,
          o.Uk)("release notes")
            , Ln = (0,
          o.Uk)(") ")
            , On = {
              class: "about"
          }
            , In = (0,
          o.Uk)(" The Lounge is running from source (")
            , An = ["href"]
            , En = (0,
          o.Uk)("commit ")
            , Nn = (0,
          o.Uk)("). ")
            , zn = (0,
          o.Uk)(" Compare ")
            , Yn = ["href"]
            , Rn = (0,
          o.Uk)("between ")
            , Wn = (0,
          o.Uk)(" and ")
            , Fn = (0,
          o._)("code", null, "master", -1)
            , Bn = (0,
          o.Uk)(" to see what you are missing ")
            , $n = (0,
          o.Uk)(" Compare ")
            , Vn = ["href"]
            , Jn = (0,
          o.Uk)("between ")
            , Kn = (0,
          o.Uk)(" and ")
            , Gn = (0,
          o.Uk)(" to see your local changes ")
            , Xn = (0,
          o._)("p", null, [(0,
          o._)("a", {
              href: "https://thelounge.chat/",
              target: "_blank",
              rel: "noopener",
              class: "website-link"
          }, "Website")], -1)
            , Qn = (0,
          o._)("p", null, [(0,
          o._)("a", {
              href: "https://thelounge.chat/docs/",
              target: "_blank",
              rel: "noopener",
              class: "documentation-link"
          }, "Documentation")], -1)
            , ea = (0,
          o._)("p", null, [(0,
          o._)("a", {
              href: "https://github.com/thelounge/thelounge/issues/new",
              target: "_blank",
              rel: "noopener",
              class: "report-issue-link"
          }, "Report an issue…")], -1)
            , na = {
              key: 0
          }
            , aa = {
              key: 1,
              class: "help-item"
          }
            , ta = (0,
          o._)("div", {
              class: "subject gesture"
          }, "Single-Finger Swipe Left", -1)
            , sa = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Hide sidebar.")], -1)
            , oa = [ta, sa]
            , ia = {
              key: 2,
              class: "help-item"
          }
            , ra = (0,
          o._)("div", {
              class: "subject gesture"
          }, "Single-Finger Swipe Right", -1)
            , la = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Show sidebar.")], -1)
            , ca = [ra, la]
            , ua = {
              key: 3,
              class: "help-item"
          }
            , da = (0,
          o._)("div", {
              class: "subject gesture"
          }, "Two-Finger Swipe Left", -1)
            , ha = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the next window in the channel list.")], -1)
            , pa = [da, ha]
            , ga = {
              key: 4,
              class: "help-item"
          }
            , ma = (0,
          o._)("div", {
              class: "subject gesture"
          }, "Two-Finger Swipe Right", -1)
            , wa = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the previous window in the channel list.")], -1)
            , fa = [ma, wa]
            , ka = (0,
          o._)("h2", null, "Keyboard Shortcuts", -1)
            , ba = {
              class: "help-item"
          }
            , va = {
              class: "subject"
          }
            , _a = {
              key: 0
          }
            , ya = (0,
          o._)("kbd", null, "Alt", -1)
            , Ca = (0,
          o.Uk)()
            , xa = (0,
          o._)("kbd", null, "Shift", -1)
            , Sa = (0,
          o.Uk)()
            , Da = (0,
          o._)("kbd", null, "↓", -1)
            , Za = [ya, Ca, xa, Sa, Da]
            , Ua = {
              key: 1
          }
            , Ma = (0,
          o._)("kbd", null, "⌥", -1)
            , qa = (0,
          o.Uk)()
            , ja = (0,
          o._)("kbd", null, "⇧", -1)
            , Ta = (0,
          o.Uk)()
            , Pa = (0,
          o._)("kbd", null, "↓", -1)
            , Ha = [Ma, qa, ja, Ta, Pa]
            , La = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the next lobby in the channel list.")], -1)
            , Oa = {
              class: "help-item"
          }
            , Ia = {
              class: "subject"
          }
            , Aa = {
              key: 0
          }
            , Ea = (0,
          o._)("kbd", null, "Alt", -1)
            , Na = (0,
          o.Uk)()
            , za = [Ea, Na, (0,
          o._)("kbd", null, "Shift", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↑", -1)]
            , Ya = {
              key: 1
          }
            , Ra = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "⇧", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↑", -1)]
            , Wa = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the previous lobby in the channel list.")], -1)
            , Fa = {
              class: "help-item"
          }
            , Ba = {
              class: "subject"
          }
            , $a = {
              key: 0
          }
            , Va = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "Shift", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "←", -1)]
            , Ja = {
              key: 1
          }
            , Ka = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "⇧", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "←", -1)]
            , Ga = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Collapse current network.")], -1)
            , Xa = {
              class: "help-item"
          }
            , Qa = {
              class: "subject"
          }
            , et = {
              key: 0
          }
            , nt = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "Shift", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "→", -1)]
            , at = {
              key: 1
          }
            , tt = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "⇧", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "→", -1)]
            , st = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Expand current network.")], -1)
            , ot = {
              class: "help-item"
          }
            , it = {
              class: "subject"
          }
            , rt = {
              key: 0
          }
            , lt = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↓", -1)]
            , ct = {
              key: 1
          }
            , ut = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↓", -1)]
            , dt = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the next window in the channel list.")], -1)
            , ht = {
              class: "help-item"
          }
            , pt = {
              class: "subject"
          }
            , gt = {
              key: 0
          }
            , mt = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↑", -1)]
            , wt = {
              key: 1
          }
            , ft = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↑", -1)]
            , kt = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the previous window in the channel list.")], -1)
            , bt = {
              class: "help-item"
          }
            , vt = {
              class: "subject"
          }
            , _t = {
              key: 0
          }
            , yt = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "Ctrl", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↓", -1)]
            , Ct = {
              key: 1
          }
            , xt = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "⌘", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↓", -1)]
            , St = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the next window with unread messages in the channel list.")], -1)
            , Dt = {
              class: "help-item"
          }
            , Zt = {
              class: "subject"
          }
            , Ut = {
              key: 0
          }
            , Mt = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "Ctrl", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↑", -1)]
            , qt = {
              key: 1
          }
            , jt = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "⌘", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "↑", -1)]
            , Tt = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the previous window with unread messages in the channel list.")], -1)
            , Pt = {
              class: "help-item"
          }
            , Ht = {
              class: "subject"
          }
            , Lt = {
              key: 0
          }
            , Ot = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "A", -1)]
            , It = {
              key: 1
          }
            , At = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "A", -1)]
            , Et = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the first window with unread messages.")], -1)
            , Nt = {
              class: "help-item"
          }
            , zt = {
              class: "subject"
          }
            , Yt = {
              key: 0
          }
            , Rt = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "S", -1)]
            , Wt = {
              key: 1
          }
            , Ft = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "S", -1)]
            , Bt = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Toggle sidebar.")], -1)
            , $t = {
              class: "help-item"
          }
            , Vt = {
              class: "subject"
          }
            , Jt = {
              key: 0
          }
            , Kt = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "U", -1)]
            , Gt = {
              key: 1
          }
            , Xt = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "U", -1)]
            , Qt = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Toggle channel user list.")], -1)
            , es = {
              class: "help-item"
          }
            , ns = {
              class: "subject"
          }
            , as = {
              key: 0
          }
            , ts = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "J", -1)]
            , ss = {
              key: 1
          }
            , os = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "J", -1)]
            , is = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Toggle jump to channel switcher.")], -1)
            , rs = {
              class: "help-item"
          }
            , ls = {
              class: "subject"
          }
            , cs = {
              key: 0
          }
            , us = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "M", -1)]
            , ds = {
              key: 1
          }
            , hs = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "M", -1)]
            , ps = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Toggle recent mentions popup.")], -1)
            , gs = {
              class: "help-item"
          }
            , ms = {
              class: "subject"
          }
            , ws = {
              key: 0
          }
            , fs = [(0,
          o._)("kbd", null, "Alt", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "/", -1)]
            , ks = {
              key: 1
          }
            , bs = [(0,
          o._)("kbd", null, "⌥", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "/", -1)]
            , vs = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Switch to the help menu.")], -1)
            , _s = (0,
          o._)("div", {
              class: "help-item"
          }, [(0,
          o._)("div", {
              class: "subject"
          }, [(0,
          o._)("span", null, [(0,
          o._)("kbd", null, "Esc")])]), (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, " Close current contextual window (context menu, image viewer, topic edit, etc) and remove focus from input. ")])], -1)
            , ys = (0,
          o._)("h2", null, "Formatting Shortcuts", -1)
            , Cs = {
              class: "help-item"
          }
            , xs = {
              class: "subject"
          }
            , Ss = {
              key: 0
          }
            , Ds = [(0,
          o._)("kbd", null, "Ctrl", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "K", -1)]
            , Zs = {
              key: 1
          }
            , Us = [(0,
          o._)("kbd", null, "⌘", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "K", -1)]
            , Ms = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, [(0,
          o.Uk)(" Mark any text typed after this shortcut to be colored. After hitting this shortcut, enter an integer in the range "), (0,
          o._)("code", null, "0—15"), (0,
          o.Uk)(" to select the desired color, or use the autocompletion menu to choose a color name (see below). ")]), (0,
          o._)("p", null, [(0,
          o.Uk)(" Background color can be specified by putting a comma and another integer in the range "), (0,
          o._)("code", null, "0—15"), (0,
          o.Uk)(" after the foreground color number (autocompletion works too). ")]), (0,
          o._)("p", null, [(0,
          o.Uk)(" A color reference can be found "), (0,
          o._)("a", {
              href: "https://modern.ircdocs.horse/formatting.html#colors",
              target: "_blank",
              rel: "noopener"
          }, "here"), (0,
          o.Uk)(". ")])], -1)
            , qs = {
              class: "help-item"
          }
            , js = {
              class: "subject"
          }
            , Ts = {
              key: 0
          }
            , Ps = [(0,
          o._)("kbd", null, "Ctrl", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "B", -1)]
            , Hs = {
              key: 1
          }
            , Ls = [(0,
          o._)("kbd", null, "⌘", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "B", -1)]
            , Os = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, [(0,
          o.Uk)(" Mark all text typed after this shortcut as "), (0,
          o._)("span", {
              class: "irc-bold"
          }, "bold"), (0,
          o.Uk)(". ")])], -1)
            , Is = {
              class: "help-item"
          }
            , As = {
              class: "subject"
          }
            , Es = {
              key: 0
          }
            , Ns = [(0,
          o._)("kbd", null, "Ctrl", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "U", -1)]
            , zs = {
              key: 1
          }
            , Ys = [(0,
          o._)("kbd", null, "⌘", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "U", -1)]
            , Rs = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, [(0,
          o.Uk)(" Mark all text typed after this shortcut as "), (0,
          o._)("span", {
              class: "irc-underline"
          }, "underlined"), (0,
          o.Uk)(". ")])], -1)
            , Ws = {
              class: "help-item"
          }
            , Fs = {
              class: "subject"
          }
            , Bs = {
              key: 0
          }
            , $s = [(0,
          o._)("kbd", null, "Ctrl", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "I", -1)]
            , Vs = {
              key: 1
          }
            , Js = [(0,
          o._)("kbd", null, "⌘", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "I", -1)]
            , Ks = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, [(0,
          o.Uk)(" Mark all text typed after this shortcut as "), (0,
          o._)("span", {
              class: "irc-italic"
          }, "italics"), (0,
          o.Uk)(". ")])], -1)
            , Gs = {
              class: "help-item"
          }
            , Xs = {
              class: "subject"
          }
            , Qs = {
              key: 0
          }
            , eo = [(0,
          o._)("kbd", null, "Ctrl", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "S", -1)]
            , no = {
              key: 1
          }
            , ao = [(0,
          o._)("kbd", null, "⌘", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "S", -1)]
            , to = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, [(0,
          o.Uk)(" Mark all text typed after this shortcut as "), (0,
          o._)("span", {
              class: "irc-strikethrough"
          }, "struck through"), (0,
          o.Uk)(". ")])], -1)
            , so = {
              class: "help-item"
          }
            , oo = {
              class: "subject"
          }
            , io = {
              key: 0
          }
            , ro = [(0,
          o._)("kbd", null, "Ctrl", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "M", -1)]
            , lo = {
              key: 1
          }
            , co = [(0,
          o._)("kbd", null, "⌘", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "M", -1)]
            , uo = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, [(0,
          o.Uk)(" Mark all text typed after this shortcut as "), (0,
          o._)("span", {
              class: "irc-monospace"
          }, "monospaced"), (0,
          o.Uk)(". ")])], -1)
            , ho = {
              class: "help-item"
          }
            , po = {
              class: "subject"
          }
            , go = {
              key: 0
          }
            , mo = [(0,
          o._)("kbd", null, "Ctrl", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "O", -1)]
            , wo = {
              key: 1
          }
            , fo = [(0,
          o._)("kbd", null, "⌘", -1), (0,
          o.Uk)(), (0,
          o._)("kbd", null, "O", -1)]
            , ko = (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, " Mark all text typed after this shortcut to be reset to its original formatting. ")], -1)
            , bo = (0,
          o.uE)('<h2>Autocompletion</h2><p> To auto-complete nicknames, channels, commands, and emoji, type one of the characters below to open a suggestion list. Use the <kbd>↑</kbd> and <kbd>↓</kbd> keys to highlight an item, and insert it by pressing <kbd>Tab</kbd> or <kbd>Enter</kbd> (or by clicking the desired item). </p><p>Autocompletion can be disabled in settings.</p><div class="help-item"><div class="subject"><code>@</code></div><div class="description"><p>Nickname</p></div></div><div class="help-item"><div class="subject"><code>#</code></div><div class="description"><p>Channel</p></div></div><div class="help-item"><div class="subject"><code>/</code></div><div class="description"><p>Commands (see list of commands below)</p></div></div><div class="help-item"><div class="subject"><code>:</code></div><div class="description"><p> Emoji (note: requires two search characters, to avoid conflicting with common emoticons like <code>:)</code>) </p></div></div><h2>Commands</h2><div class="help-item"><div class="subject"><code>/away [message]</code></div><div class="description"><p>Mark yourself as away with an optional message.</p></div></div><div class="help-item"><div class="subject"><code>/back</code></div><div class="description"><p>Remove your away status (set with <code>/away</code>).</p></div></div><div class="help-item"><div class="subject"><code>/ban nick</code></div><div class="description"><p> Ban (<code>+b</code>) a user from the current channel. This can be a nickname or a hostmask. </p></div></div><div class="help-item"><div class="subject"><code>/banlist</code></div><div class="description"><p>Load the banlist for the current channel.</p></div></div><div class="help-item"><div class="subject"><code>/collapse</code></div><div class="description"><p> Collapse all previews in the current channel (opposite of <code>/expand</code>) </p></div></div><div class="help-item"><div class="subject"><code>/connect host [port]</code></div><div class="description"><p> Connect to a new IRC network. If <code>port</code> starts with a <code>+</code> sign, the connection will be made secure using TLS. </p><p>Alias: <code>/server</code></p></div></div><div class="help-item"><div class="subject"><code>/ctcp target cmd [args]</code></div><div class="description"><p> Send a <abbr title="Client-to-client protocol">CTCP</abbr> request. Read more about this on <a href="https://en.wikipedia.org/wiki/Client-to-client_protocol" target="_blank" rel="noopener">the dedicated Wikipedia article</a>. </p></div></div><div class="help-item"><div class="subject"><code>/deop nick [...nick]</code></div><div class="description"><p> Remove op (<code>-o</code>) from one or several users in the current channel. </p></div></div><div class="help-item"><div class="subject"><code>/devoice nick [...nick]</code></div><div class="description"><p> Remove voice (<code>-v</code>) from one or several users in the current channel. </p></div></div><div class="help-item"><div class="subject"><code>/disconnect [message]</code></div><div class="description"><p>Disconnect from the current network with an optionally-provided message.</p></div></div><div class="help-item"><div class="subject"><code>/expand</code></div><div class="description"><p> Expand all previews in the current channel (opposite of <code>/collapse</code>) </p></div></div><div class="help-item"><div class="subject"><code>/invite nick [channel]</code></div><div class="description"><p> Invite a user to the specified channel. If <code>channel</code> is omitted, user will be invited to the current channel. </p></div></div><div class="help-item"><div class="subject"><code>/ignore nick</code></div><div class="description"><p> Block any messages from the specified user on the current network. This can be a nickname or a hostmask. </p></div></div><div class="help-item"><div class="subject"><code>/ignorelist</code></div><div class="description"><p>Load the list of ignored users for the current network.</p></div></div><div class="help-item"><div class="subject"><code>/join channel [password]</code></div><div class="description"><p> Join a channel. Password is only needed in protected channels and can usually be omitted. </p></div></div><div class="help-item"><div class="subject"><code>/kick nick [reason]</code></div><div class="description"><p>Kick a user from the current channel.</p></div></div><div class="help-item"><div class="subject"><code>/kickban nick [reason]</code></div><div class="description"><p> Kick and ban (<code>+b</code>) a user from the current channel. Unlike <code>/ban</code>, only nicknames (and not host masks) can be used. </p></div></div><div class="help-item"><div class="subject"><code>/list</code></div><div class="description"><p>Retrieve a list of available channels on this network.</p></div></div><div class="help-item"><div class="subject"><code>/me message</code></div><div class="description"><p> Send an action message to the current channel. The Lounge will display it inline, as if the message was posted in the third person. </p></div></div><div class="help-item"><div class="subject"><code>/mode flags [args]</code></div><div class="description"><p> Set the given flags to the current channel if the active window is a channel, another user if the active window is a private message window, or yourself if the current window is a server window. </p></div></div><div class="help-item"><div class="subject"><code>/msg channel message</code></div><div class="description"><p>Send a message to the specified channel.</p></div></div><div class="help-item"><div class="subject"><code>/mute [...channel]</code></div><div class="description"><p> Prevent messages from generating any feedback for a channel. This turns off the highlight indicator, hides mentions and inhibits push notifications. Muting a network lobby mutes the entire network. Not specifying any channel target mutes the current channel. Revert with <code>/unmute</code>. </p></div></div><div class="help-item"><div class="subject"><code>/nick newnick</code></div><div class="description"><p>Change your nickname on the current network.</p></div></div><div class="help-item"><div class="subject"><code>/notice channel message</code></div><div class="description"><p>Sends a notice message to the specified channel.</p></div></div><div class="help-item"><div class="subject"><code>/op nick [...nick]</code></div><div class="description"><p>Give op (<code>+o</code>) to one or several users in the current channel.</p></div></div><div class="help-item"><div class="subject"><code>/part [channel]</code></div><div class="description"><p> Close the specified channel or private message window, or the current channel if <code>channel</code> is omitted. </p><p>Aliases: <code>/close</code>, <code>/leave</code></p></div></div><div class="help-item"><div class="subject"><code>/rejoin</code></div><div class="description"><p> Leave and immediately rejoin the current channel. Useful to quickly get op from ChanServ in an empty channel, for example. </p><p>Alias: <code>/cycle</code></p></div></div><div class="help-item"><div class="subject"><code>/query nick</code></div><div class="description"><p>Send a private message to the specified user.</p></div></div><div class="help-item"><div class="subject"><code>/quit [message]</code></div><div class="description"><p>Disconnect from the current network with an optional message.</p></div></div><div class="help-item"><div class="subject"><code>/raw message</code></div><div class="description"><p>Send a raw message to the current IRC network.</p><p>Aliases: <code>/quote</code>, <code>/send</code></p></div></div><div class="help-item"><div class="subject"><code>/slap nick</code></div><div class="description"><p>Slap someone in the current channel with a trout!</p></div></div>', 39)
            , vo = {
              key: 5,
              class: "help-item"
          }
            , _o = [(0,
          o._)("div", {
              class: "subject"
          }, [(0,
          o._)("code", null, "/search query")], -1), (0,
          o._)("div", {
              class: "description"
          }, [(0,
          o._)("p", null, "Search for messages in the current channel / user")], -1)]
            , yo = (0,
          o.uE)('<div class="help-item"><div class="subject"><code>/topic [newtopic]</code></div><div class="description"><p> Get the topic in the current channel. If <code>newtopic</code> is specified, sets the topic in the current channel. </p></div></div><div class="help-item"><div class="subject"><code>/unban nick</code></div><div class="description"><p> Unban (<code>-b</code>) a user from the current channel. This can be a nickname or a hostmask. </p></div></div><div class="help-item"><div class="subject"><code>/unignore nick</code></div><div class="description"><p> Unblock messages from the specified user on the current network. This can be a nickname or a hostmask. </p></div></div><div class="help-item"><div class="subject"><code>/unmute [...channel]</code></div><div class="description"><p> Un-mutes the given channel(s) or the current channel if no channel is provided. See <code>/mute</code> for more information. </p></div></div><div class="help-item"><div class="subject"><code>/voice nick [...nick]</code></div><div class="description"><p> Give voice (<code>+v</code>) to one or several users in the current channel. </p></div></div><div class="help-item"><div class="subject"><code>/whois nick</code></div><div class="description"><p>Retrieve information about the given user on the current network.</p></div></div>', 6)
            , Co = {
              key: 0
          }
            , xo = {
              key: 1
          }
            , So = (0,
          o.Uk)(" The Lounge ")
            , Do = (0,
          o.Uk)(" (pre-release) ")
            , Zo = (0,
          o.Uk)(" is now available. ")
            , Uo = (0,
          o._)("br", null, null, -1)
            , Mo = ["href"]
            , qo = {
              key: 2
          }
            , jo = [(0,
          o.Uk)(" The Lounge is up to date, but there are out of date packages Run "), (0,
          o._)("code", null, "thelounge upgrade", -1), (0,
          o.Uk)(" on the server to upgrade packages. ")]
            , To = (0,
          o._)("p", null, "The Lounge is up to date!", -1)
            , Po = (0,
          o._)("p", null, "Information about latest release could not be retrieved.", -1);
          var Ho = (0,
          o.aZ)({
              name: "VersionChecker",
              setup() {
                  const e = (0,
                  Z.oR)()
                    , n = ()=>{
                      e.commit("versionData", null),
                      e.commit("versionStatus", "loading"),
                      f.Z.emit("changelog")
                  }
                  ;
                  return (0,
                  o.bv)((()=>{
                      e.state.versionData || n()
                  }
                  )),
                  {
                      store: e,
                      checkNow: n
                  }
              }
          })
            , Lo = (0,
          C.Z)(Ho, [["render", function(e, n, a, t, s, i) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", {
                  id: "version-checker",
                  class: (0,
                  k.C_)([e.store.state.versionStatus])
              }, ["loading" === e.store.state.versionStatus ? ((0,
              o.wg)(),
              (0,
              o.iD)("p", Co, "Checking for updates…")) : (0,
              o.kq)("", !0), "new-version" === e.store.state.versionStatus ? ((0,
              o.wg)(),
              (0,
              o.iD)("p", xo, [So, (0,
              o._)("b", null, (0,
              k.zw)(e.store.state.versionData?.latest.version), 1), e.store.state.versionData?.latest.prerelease ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [Do], 64)) : (0,
              o.kq)("", !0), Zo, Uo, (0,
              o._)("a", {
                  href: e.store.state.versionData?.latest.url,
                  target: "_blank",
                  rel: "noopener"
              }, " Read more on GitHub ", 8, Mo)])) : (0,
              o.kq)("", !0), "new-packages" === e.store.state.versionStatus ? ((0,
              o.wg)(),
              (0,
              o.iD)("p", qo, jo)) : (0,
              o.kq)("", !0), "up-to-date" === e.store.state.versionStatus ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 3
              }, [To, e.store.state.versionDataExpired ? ((0,
              o.wg)(),
              (0,
              o.iD)("button", {
                  key: 0,
                  id: "check-now",
                  class: "btn btn-small",
                  onClick: n[0] || (n[0] = (...n)=>e.checkNow && e.checkNow(...n))
              }, " Check now ")) : (0,
              o.kq)("", !0)], 64)) : (0,
              o.kq)("", !0), "error" === e.store.state.versionStatus ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 4
              }, [Po, (0,
              o._)("button", {
                  id: "check-now",
                  class: "btn btn-small",
                  onClick: n[1] || (n[1] = (...n)=>e.checkNow && e.checkNow(...n))
              }, "Try again")], 64)) : (0,
              o.kq)("", !0)], 2)
          }
          ]])
            , Oo = (0,
          o.aZ)({
              name: "Help",
              components: {
                  SidebarToggle: cn,
                  VersionChecker: Lo
              },
              setup() {
                  const e = (0,
                  Z.oR)();
                  return {
                      isApple: navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) || !1,
                      isTouch: navigator.maxTouchPoints > 0,
                      store: e
                  }
              }
          })
            , Io = (0,
          C.Z)(Oo, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("SidebarToggle")
                , l = (0,
              o.up)("router-link")
                , c = (0,
              o.up)("VersionChecker");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", Un, [(0,
              o._)("div", Mn, [(0,
              o.Wm)(r)]), (0,
              o._)("div", qn, [jn, (0,
              o._)("h2", Tn, [Pn, (0,
              o._)("small", null, [(0,
              o.Uk)(" v" + (0,
              k.zw)(e.store.state.serverConfiguration?.version) + " (", 1), (0,
              o.Wm)(l, {
                  id: "view-changelog",
                  to: "/changelog"
              }, {
                  default: (0,
                  o.w5)((()=>[Hn])),
                  _: 1
              }), Ln])]), (0,
              o._)("div", On, [(0,
              o.Wm)(c), e.store.state.serverConfiguration?.gitCommit ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [(0,
              o._)("p", null, [In, (0,
              o._)("a", {
                  href: `https://github.com/thelounge/thelounge/tree/${e.store.state.serverConfiguration?.gitCommit}`,
                  target: "_blank",
                  rel: "noopener"
              }, [En, (0,
              o._)("code", null, (0,
              k.zw)(e.store.state.serverConfiguration?.gitCommit), 1)], 8, An), Nn]), (0,
              o._)("ul", null, [(0,
              o._)("li", null, [zn, (0,
              o._)("a", {
                  href: `https://github.com/thelounge/thelounge/compare/${e.store.state.serverConfiguration?.gitCommit}...master`,
                  target: "_blank",
                  rel: "noopener"
              }, [Rn, (0,
              o._)("code", null, (0,
              k.zw)(e.store.state.serverConfiguration?.gitCommit), 1), Wn, Fn], 8, Yn), Bn]), (0,
              o._)("li", null, [$n, (0,
              o._)("a", {
                  href: `https://github.com/thelounge/thelounge/compare/${e.store.state.serverConfiguration?.version}...${e.store.state.serverConfiguration?.gitCommit}`,
                  target: "_blank",
                  rel: "noopener"
              }, [Jn, (0,
              o._)("code", null, (0,
              k.zw)(e.store.state.serverConfiguration?.version), 1), Kn, (0,
              o._)("code", null, (0,
              k.zw)(e.store.state.serverConfiguration?.gitCommit), 1)], 8, Vn), Gn])])], 64)) : (0,
              o.kq)("", !0), Xn, Qn, ea]), e.isTouch ? ((0,
              o.wg)(),
              (0,
              o.iD)("h2", na, "Gestures")) : (0,
              o.kq)("", !0), e.isTouch ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", aa, oa)) : (0,
              o.kq)("", !0), e.isTouch ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", ia, ca)) : (0,
              o.kq)("", !0), e.isTouch ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", ua, pa)) : (0,
              o.kq)("", !0), e.isTouch ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", ga, fa)) : (0,
              o.kq)("", !0), ka, (0,
              o._)("div", ba, [(0,
              o._)("div", va, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Ua, Ha)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", _a, Za))]), La]), (0,
              o._)("div", Oa, [(0,
              o._)("div", Ia, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Ya, Ra)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Aa, za))]), Wa]), (0,
              o._)("div", Fa, [(0,
              o._)("div", Ba, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Ja, Ka)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", $a, Va))]), Ga]), (0,
              o._)("div", Xa, [(0,
              o._)("div", Qa, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", at, tt)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", et, nt))]), st]), (0,
              o._)("div", ot, [(0,
              o._)("div", it, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", ct, ut)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", rt, lt))]), dt]), (0,
              o._)("div", ht, [(0,
              o._)("div", pt, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", wt, ft)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", gt, mt))]), kt]), (0,
              o._)("div", bt, [(0,
              o._)("div", vt, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Ct, xt)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", _t, yt))]), St]), (0,
              o._)("div", Dt, [(0,
              o._)("div", Zt, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", qt, jt)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Ut, Mt))]), Tt]), (0,
              o._)("div", Pt, [(0,
              o._)("div", Ht, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", It, At)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Lt, Ot))]), Et]), (0,
              o._)("div", Nt, [(0,
              o._)("div", zt, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Wt, Ft)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Yt, Rt))]), Bt]), (0,
              o._)("div", $t, [(0,
              o._)("div", Vt, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Gt, Xt)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Jt, Kt))]), Qt]), (0,
              o._)("div", es, [(0,
              o._)("div", ns, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", ss, os)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", as, ts))]), is]), (0,
              o._)("div", rs, [(0,
              o._)("div", ls, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", ds, hs)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", cs, us))]), ps]), (0,
              o._)("div", gs, [(0,
              o._)("div", ms, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", ks, bs)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", ws, fs))]), vs]), _s, ys, (0,
              o._)("div", Cs, [(0,
              o._)("div", xs, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Zs, Us)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Ss, Ds))]), Ms]), (0,
              o._)("div", qs, [(0,
              o._)("div", js, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Hs, Ls)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Ts, Ps))]), Os]), (0,
              o._)("div", Is, [(0,
              o._)("div", As, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", zs, Ys)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Es, Ns))]), Rs]), (0,
              o._)("div", Ws, [(0,
              o._)("div", Fs, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Vs, Js)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Bs, $s))]), Ks]), (0,
              o._)("div", Gs, [(0,
              o._)("div", Xs, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", no, ao)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Qs, eo))]), to]), (0,
              o._)("div", so, [(0,
              o._)("div", oo, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", lo, co)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", io, ro))]), uo]), (0,
              o._)("div", ho, [(0,
              o._)("div", po, [e.isApple ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", wo, fo)) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", go, mo))]), ko]), bo, e.store.state.settings.searchEnabled ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", vo, _o)) : (0,
              o.kq)("", !0), yo])])
          }
          ]]);
          const Ao = {
              id: "changelog",
              class: "window",
              "aria-label": "Changelog"
          }
            , Eo = {
              class: "header"
          }
            , No = {
              class: "container"
          }
            , zo = (0,
          o.Uk)("« Help")
            , Yo = {
              class: "title"
          }
            , Ro = (0,
          o._)("h3", null, "Introduction", -1)
            , Wo = ["innerHTML"]
            , Fo = (0,
          o._)("p", null, "Unable to retrieve changelog for current release from GitHub.", -1)
            , Bo = ["href"]
            , $o = {
              key: 1
          };
          var Vo = (0,
          o.aZ)({
              name: "Changelog",
              components: {
                  SidebarToggle: cn
              },
              setup() {
                  const e = (0,
                  Z.oR)()
                    , n = (0,
                  _.iH)(null)
                    , a = ()=>{
                      n.value && n.value.querySelectorAll("a").forEach((e=>{
                          e.setAttribute("target", "_blank"),
                          e.setAttribute("rel", "noopener"),
                          e.querySelector("img") && e.classList.add("toggle-thumbnail")
                      }
                      ))
                  }
                  ;
                  return (0,
                  o.bv)((()=>{
                      e.state.versionData || f.Z.emit("changelog"),
                      a()
                  }
                  )),
                  (0,
                  o.ic)((()=>{
                      a()
                  }
                  )),
                  {
                      store: e
                  }
              }
          })
            , Jo = (0,
          C.Z)(Vo, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("SidebarToggle")
                , l = (0,
              o.up)("router-link");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", Ao, [(0,
              o._)("div", Eo, [(0,
              o.Wm)(r)]), (0,
              o._)("div", No, [(0,
              o.Wm)(l, {
                  id: "back-to-help",
                  to: "/help"
              }, {
                  default: (0,
                  o.w5)((()=>[zo])),
                  _: 1
              }), e.store.state.versionData?.current && e.store.state.versionData?.current.version ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [(0,
              o._)("h1", Yo, " Release notes for " + (0,
              k.zw)(e.store.state.versionData.current.version), 1), e.store.state.versionData.current.changelog ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [Ro, (0,
              o._)("div", {
                  ref: "changelog",
                  class: "changelog-text",
                  innerHTML: e.store.state.versionData.current.changelog
              }, null, 8, Wo)], 64)) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, [Fo, (0,
              o._)("p", null, [e.store.state.serverConfiguration?.version ? ((0,
              o.wg)(),
              (0,
              o.iD)("a", {
                  key: 0,
                  href: `https://github.com/thelounge/thelounge/releases/tag/v${e.store.state.serverConfiguration?.version}`,
                  target: "_blank",
                  rel: "noopener"
              }, "View release notes for this version on GitHub", 8, Bo)) : (0,
              o.kq)("", !0)])], 64))], 64)) : ((0,
              o.wg)(),
              (0,
              o.iD)("p", $o, "Loading changelog…"))])])
          }
          ]])
            , Ko = (0,
          o.aZ)({
              name: "NetworkEdit",
              components: {
                  NetworkForm: dn
              },
              setup() {
                  const e = (0,
                  s.yj)()
                    , n = (0,
                  Z.oR)()
                    , a = (0,
                  _.iH)(!1)
                    , t = (0,
                  _.iH)(null)
                    , i = ()=>{
                      f.Z.emit("network:get", String(e.params.uuid || "")),
                      t.value = n.getters.findNetwork(String(e.params.uuid || ""))
                  }
                  ;
                  return (0,
                  o.YP)((()=>e.params.uuid), (e=>{
                      i()
                  }
                  )),
                  (0,
                  o.bv)((()=>{
                      i()
                  }
                  )),
                  {
                      disabled: a,
                      networkData: t,
                      handleSubmit: e=>{
                          a.value = !0,
                          f.Z.emit("network:edit", e);
                          const t = n.getters.findNetwork(e.uuid);
                          t && (t.name = t.channels[0].name = e.name,
                          ph(t.channels[0]))
                      }
                  }
              }
          })
            , Go = (0,
          C.Z)(Ko, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("NetworkForm");
              return e.networkData ? ((0,
              o.wg)(),
              (0,
              o.j4)(r, {
                  key: 0,
                  "handle-submit": e.handleSubmit,
                  defaults: e.networkData,
                  disabled: e.disabled
              }, null, 8, ["handle-submit", "defaults", "disabled"])) : (0,
              o.kq)("", !0)
          }
          ]]);
          const Xo = {
              id: "chat-container",
              class: "window"
          }
            , Qo = {
              class: "chat-view",
              "data-type": "search-results",
              "aria-label": "Search results",
              role: "tabpanel"
          }
            , ei = {
              key: 0,
              class: "header"
          }
            , ni = {
              class: "title"
          }
            , ai = (0,
          o.Uk)("Searching in ")
            , ti = {
              class: "channel-name"
          }
            , si = (0,
          o.Uk)(" for")
            , oi = {
              class: "topic"
          }
            , ii = {
              key: 1,
              class: "chat-content"
          }
            , ri = {
              ref: "chat",
              class: "chat",
              tabindex: "-1"
          }
            , li = {
              class: "show-more"
          }
            , ci = ["disabled"]
            , ui = {
              key: 0
          }
            , di = {
              key: 1
          }
            , hi = {
              key: 0,
              class: "search-status"
          }
            , pi = {
              key: 1,
              class: "search-status"
          }
            , gi = {
              class: "messages",
              role: "log",
              "aria-live": "polite",
              "aria-relevant": "additions"
          }
            , mi = ["onClick"];
          var wi = a(8833);
          const fi = ["id", "data-type", "data-command", "data-from"]
            , ki = ["aria-label"]
            , bi = {
              class: "from"
          }
            , vi = {
              class: "content"
          }
            , _i = (0,
          o._)("span", {
              class: "from"
          }, [(0,
          o._)("span", {
              class: "only-copy"
          }, "*** ")], -1)
            , yi = (0,
          o._)("span", {
              class: "from"
          }, [(0,
          o._)("span", {
              class: "only-copy"
          }, "* ")], -1)
            , Ci = {
              class: "content",
              dir: "auto"
          }
            , xi = (0,
          o.Uk)()
            , Si = {
              key: 0,
              class: "from"
          }
            , Di = (0,
          o._)("span", {
              class: "only-copy",
              "aria-hidden": "true"
          }, "<", -1)
            , Zi = (0,
          o._)("span", {
              class: "only-copy",
              "aria-hidden": "true"
          }, "> ", -1)
            , Ui = {
              key: 1,
              class: "from"
          }
            , Mi = (0,
          o._)("span", {
              class: "only-copy",
              "aria-hidden": "true"
          }, "[", -1)
            , qi = (0,
          o._)("span", {
              class: "only-copy",
              "aria-hidden": "true"
          }, "] ", -1)
            , ji = {
              key: 2,
              class: "from"
          }
            , Ti = (0,
          o._)("span", {
              class: "only-copy",
              "aria-hidden": "true"
          }, "-", -1)
            , Pi = (0,
          o._)("span", {
              class: "only-copy",
              "aria-hidden": "true"
          }, "- ", -1)
            , Hi = {
              class: "content",
              dir: "auto"
          }
            , Li = {
              key: 0,
              "aria-label": "This message was shown in your active channel",
              class: "msg-shown-in-active tooltipped tooltipped-e"
          }
            , Oi = [(0,
          o._)("span", null, null, -1)]
            , Ii = ["aria-label"];
          var Ai = a(7484)
            , Ei = a.n(Ai)
            , Ni = a(8017)
            , zi = a(7652);
          const Yi = {
              key: 0,
              ref: "container",
              class: "preview",
              dir: "ltr"
          }
            , Ri = ["href"]
            , Wi = ["src"]
            , Fi = {
              class: "toggle-text",
              dir: "auto"
          }
            , Bi = {
              class: "head"
          }
            , $i = {
              class: "overflowable"
          }
            , Vi = ["href", "title"]
            , Ji = ["aria-expanded", "aria-label"]
            , Ki = [(0,
          o._)("span", {
              class: "more-caret"
          }, null, -1)]
            , Gi = {
              class: "body overflowable"
          }
            , Xi = ["href", "title"]
            , Qi = ["href"]
            , er = ["src"]
            , nr = ["src", "type"]
            , ar = ["src", "type"]
            , tr = {
              key: 0
          }
            , sr = ["href"]
            , or = (0,
          o.Uk)(" to open it in a new window. ")
            , ir = (0,
          o.Uk)(" A preview could not be loaded. ")
            , rr = ["href"]
            , lr = (0,
          o.Uk)(" to open it in a new window. ")
            , cr = (0,
          o._)("br", null, null, -1)
            , ur = {
              class: "prefetch-error"
          }
            , dr = ["aria-expanded", "aria-label"]
            , hr = [(0,
          o._)("span", {
              class: "more-caret"
          }, null, -1)];
          var pr = a(5785)
            , gr = a(4900)
            , mr = (0,
          o.aZ)({
              name: "LinkPreview",
              props: {
                  link: {
                      type: Object,
                      required: !0
                  },
                  keepScrollPosition: {
                      type: Function,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  }
              },
              setup(e) {
                  const n = (0,
                  Z.oR)()
                    , a = (0,
                  _.iH)(!1)
                    , t = (0,
                  _.iH)(!1)
                    , i = (0,
                  o.f3)(gr.E);
                  (0,
                  s.ao)(((e,n,a)=>{
                      if (i?.value?.link)
                          return i.value.closeViewer(),
                          a(!1);
                      a()
                  }
                  ));
                  const r = (0,
                  _.iH)(null)
                    , l = (0,
                  _.iH)(null)
                    , c = (0,
                  o.Fl)((()=>t.value ? "Less" : "More"))
                    , u = (0,
                  o.Fl)((()=>{
                      if (e.link.maxSize)
                          return (0,
                          pr.Z)(e.link.maxSize)
                  }
                  ))
                    , d = ()=>{
                      (0,
                      o.Y3)((()=>{
                          r.value && l.value && (a.value = r.value.offsetWidth >= l.value.offsetWidth)
                      }
                      )).catch((e=>{
                          console.error("Error in LinkPreview.handleResize", e)
                      }
                      ))
                  }
                    , h = ()=>{
                      e.link.sourceLoaded = !0,
                      e.keepScrollPosition(),
                      "link" === e.link.type && d()
                  }
                    , p = ()=>{
                      "loading" !== e.link.type && ("error" === e.link.type && h(),
                      "link" === e.link.type && (d(),
                      e.keepScrollPosition()))
                  }
                    , g = ()=>{
                      if (null !== e.link.shown)
                          return;
                      let a = !1;
                      switch (e.link.type) {
                      case "error":
                          "image-too-big" === e.link.error && (a = n.state.settings.media);
                          break;
                      case "link":
                          a = n.state.settings.links;
                          break;
                      default:
                          a = n.state.settings.media
                      }
                      e.link.shown = a
                  }
                  ;
                  return g(),
                  (0,
                  o.YP)((()=>e.link.type), (()=>{
                      g(),
                      p()
                  }
                  )),
                  (0,
                  o.bv)((()=>{
                      wi.Z.on("resize", d),
                      p()
                  }
                  )),
                  (0,
                  o.Jd)((()=>{
                      wi.Z.off("resize", d)
                  }
                  )),
                  (0,
                  o.Ah)((()=>{
                      e.link.sourceLoaded = !1
                  }
                  )),
                  {
                      moreButtonLabel: c,
                      imageMaxSize: u,
                      onThumbnailClick: n=>{
                          n.preventDefault(),
                          i?.value && (i.value.channel = e.channel,
                          i.value.link = e.link)
                      }
                      ,
                      onThumbnailError: ()=>{
                          e.link.thumb = "",
                          h()
                      }
                      ,
                      onMoreClick: ()=>{
                          t.value = !t.value,
                          e.keepScrollPosition()
                      }
                      ,
                      onPreviewReady: h,
                      onPreviewUpdate: p,
                      showMoreButton: a,
                      isContentShown: t,
                      content: r,
                      container: l
                  }
              }
          })
            , wr = (0,
          C.Z)(mr, [["render", function(e, n, a, t, s, r) {
              return e.link.shown ? (0,
              o.wy)(((0,
              o.wg)(),
              (0,
              o.iD)("div", Yi, [(0,
              o._)("div", {
                  ref: "content",
                  class: (0,
                  k.C_)(["toggle-content", "toggle-type-" + e.link.type, {
                      opened: e.isContentShown
                  }])
              }, ["link" === e.link.type ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [e.link.thumb ? (0,
              o.wy)(((0,
              o.wg)(),
              (0,
              o.iD)("a", {
                  key: 0,
                  href: e.link.link,
                  class: "toggle-thumbnail",
                  target: "_blank",
                  rel: "noopener",
                  onClick: n[3] || (n[3] = (...n)=>e.onThumbnailClick && e.onThumbnailClick(...n))
              }, [(0,
              o._)("img", {
                  src: e.link.thumb,
                  decoding: "async",
                  alt: "",
                  class: "thumb",
                  onError: n[0] || (n[0] = (...n)=>e.onThumbnailError && e.onThumbnailError(...n)),
                  onAbort: n[1] || (n[1] = (...n)=>e.onThumbnailError && e.onThumbnailError(...n)),
                  onLoad: n[2] || (n[2] = (...n)=>e.onPreviewReady && e.onPreviewReady(...n))
              }, null, 40, Wi)], 8, Ri)), [[i.F8, e.link.sourceLoaded]]) : (0,
              o.kq)("", !0), (0,
              o._)("div", Fi, [(0,
              o._)("div", Bi, [(0,
              o._)("div", $i, [(0,
              o._)("a", {
                  href: e.link.link,
                  title: e.link.head,
                  target: "_blank",
                  rel: "noopener"
              }, (0,
              k.zw)(e.link.head), 9, Vi)]), e.showMoreButton ? ((0,
              o.wg)(),
              (0,
              o.iD)("button", {
                  key: 0,
                  "aria-expanded": e.isContentShown,
                  "aria-label": e.moreButtonLabel,
                  dir: "auto",
                  class: "more",
                  onClick: n[4] || (n[4] = (...n)=>e.onMoreClick && e.onMoreClick(...n))
              }, Ki, 8, Ji)) : (0,
              o.kq)("", !0)]), (0,
              o._)("div", Gi, [(0,
              o._)("a", {
                  href: e.link.link,
                  title: e.link.body,
                  target: "_blank",
                  rel: "noopener"
              }, (0,
              k.zw)(e.link.body), 9, Xi)])])], 64)) : "image" === e.link.type ? ((0,
              o.wg)(),
              (0,
              o.iD)("a", {
                  key: 1,
                  href: e.link.link,
                  class: "toggle-thumbnail",
                  target: "_blank",
                  rel: "noopener",
                  onClick: n[6] || (n[6] = (...n)=>e.onThumbnailClick && e.onThumbnailClick(...n))
              }, [(0,
              o.wy)((0,
              o._)("img", {
                  src: e.link.thumb,
                  decoding: "async",
                  alt: "",
                  onLoad: n[5] || (n[5] = (...n)=>e.onPreviewReady && e.onPreviewReady(...n))
              }, null, 40, er), [[i.F8, e.link.sourceLoaded]])], 8, Qi)) : "video" === e.link.type ? (0,
              o.wy)(((0,
              o.wg)(),
              (0,
              o.iD)("video", {
                  key: 2,
                  preload: "metadata",
                  controls: "",
                  onCanplay: n[7] || (n[7] = (...n)=>e.onPreviewReady && e.onPreviewReady(...n))
              }, [(0,
              o._)("source", {
                  src: e.link.media,
                  type: e.link.mediaType
              }, null, 8, nr)], 544)), [[i.F8, e.link.sourceLoaded]]) : "audio" === e.link.type ? (0,
              o.wy)(((0,
              o.wg)(),
              (0,
              o.iD)("audio", {
                  key: 3,
                  controls: "",
                  preload: "metadata",
                  onCanplay: n[8] || (n[8] = (...n)=>e.onPreviewReady && e.onPreviewReady(...n))
              }, [(0,
              o._)("source", {
                  src: e.link.media,
                  type: e.link.mediaType
              }, null, 8, ar)], 544)), [[i.F8, e.link.sourceLoaded]]) : "error" === e.link.type ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 4
              }, ["image-too-big" === e.link.error ? ((0,
              o.wg)(),
              (0,
              o.iD)("em", tr, [(0,
              o.Uk)(" This image is larger than " + (0,
              k.zw)(e.imageMaxSize) + " and cannot be previewed. ", 1), (0,
              o._)("a", {
                  href: e.link.link,
                  target: "_blank",
                  rel: "noopener"
              }, "Click here", 8, sr), or])) : "message" === e.link.error ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, [(0,
              o._)("div", null, [(0,
              o._)("em", null, [ir, (0,
              o._)("a", {
                  href: e.link.link,
                  target: "_blank",
                  rel: "noopener"
              }, "Click here", 8, rr), lr]), cr, (0,
              o._)("pre", ur, (0,
              k.zw)(e.link.message), 1)]), (0,
              o._)("button", {
                  "aria-expanded": e.isContentShown,
                  "aria-label": e.moreButtonLabel,
                  class: "more",
                  onClick: n[9] || (n[9] = (...n)=>e.onMoreClick && e.onMoreClick(...n))
              }, hr, 8, dr)], 64)) : (0,
              o.kq)("", !0)], 64)) : (0,
              o.kq)("", !0)], 2)], 512)), [[i.F8, e.link.sourceLoaded || "link" === e.link.type]]) : (0,
              o.kq)("", !0)
          }
          ]])
            , fr = a(6850);
          const kr = a(1039);
          var br = kr.keys().reduce(((e,n)=>(e["message-" + n.substring(2, n.length - 4)] = kr(n).default,
          e)), {});
          br.ParsedMessage = fr.Z,
          br.LinkPreview = wr,
          br.Username = zi.Z;
          var vr = (0,
          o.aZ)({
              name: "Message",
              components: br,
              props: {
                  message: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !1
                  },
                  network: {
                      type: Object,
                      required: !0
                  },
                  keepScrollPosition: Function,
                  isPreviousSource: Boolean,
                  focused: Boolean
              },
              setup(e) {
                  const n = (0,
                  Z.oR)()
                    , a = (0,
                  o.Fl)((()=>{
                      let e;
                      return e = n.state.settings.use12hClock ? n.state.settings.showSeconds ? "msg12hWithSeconds" : "msg12h" : n.state.settings.showSeconds ? "msgWithSeconds" : "msgDefault",
                      t.Z.timeFormats[e]
                  }
                  ))
                    , s = (0,
                  o.Fl)((()=>Ei()(e.message.time).format(a.value)))
                    , i = (0,
                  o.Fl)((()=>(0,
                  Ni.Z)(e.message.time)))
                    , r = (0,
                  o.Fl)((()=>"message-" + e.message.type));
                  return {
                      timeFormat: a,
                      messageTime: s,
                      messageTimeLocale: i,
                      messageComponent: r,
                      isAction: ()=>void 0 !== br["message-" + e.message.type]
                  }
              }
          })
            , _r = (0,
          C.Z)(vr, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("Username")
                , l = (0,
              o.up)("ParsedMessage")
                , c = (0,
              o.up)("LinkPreview");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", {
                  id: "msg-" + e.message.id,
                  class: (0,
                  k.C_)(["msg", {
                      self: e.message.self,
                      highlight: e.message.highlight || e.focused,
                      "previous-source": e.isPreviousSource
                  }]),
                  "data-type": e.message.type,
                  "data-command": e.message.command,
                  "data-from": e.message.from && e.message.from.nick
              }, [(0,
              o._)("span", {
                  "aria-hidden": "true",
                  "aria-label": e.messageTimeLocale,
                  class: "time tooltipped tooltipped-e"
              }, (0,
              k.zw)(`${e.messageTime} `), 9, ki), "unhandled" === e.message.type ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [(0,
              o._)("span", bi, "[" + (0,
              k.zw)(e.message.command) + "]", 1), (0,
              o._)("span", vi, [((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.message.params, ((e,n)=>((0,
              o.wg)(),
              (0,
              o.iD)("span", {
                  key: n
              }, (0,
              k.zw)(` ${e} `), 1)))), 128))])], 64)) : e.isAction() ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, [_i, ((0,
              o.wg)(),
              (0,
              o.j4)((0,
              o.LL)(e.messageComponent), {
                  network: e.network,
                  message: e.message
              }, null, 8, ["network", "message"]))], 64)) : "action" === e.message.type ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 2
              }, [yi, (0,
              o._)("span", Ci, [(0,
              o.Wm)(r, {
                  user: e.message.from,
                  network: e.network,
                  channel: e.channel,
                  dir: "auto"
              }, null, 8, ["user", "network", "channel"]), xi, (0,
              o.Wm)(l, {
                  message: e.message
              }, null, 8, ["message"]), ((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.message.previews, (n=>((0,
              o.wg)(),
              (0,
              o.j4)(c, {
                  key: n.link,
                  "keep-scroll-position": e.keepScrollPosition,
                  link: n,
                  channel: e.channel
              }, null, 8, ["keep-scroll-position", "link", "channel"])))), 128))])], 64)) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 3
              }, ["message" === e.message.type ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Si, [e.message.from && e.message.from.nick ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [Di, (0,
              o.Wm)(r, {
                  user: e.message.from,
                  network: e.network,
                  channel: e.channel
              }, null, 8, ["user", "network", "channel"]), Zi], 64)) : (0,
              o.kq)("", !0)])) : "plugin" === e.message.type ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Ui, [e.message.from && e.message.from.nick ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [Mi, (0,
              o.Uk)(" " + (0,
              k.zw)(e.message.from.nick) + " ", 1), qi], 64)) : (0,
              o.kq)("", !0)])) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", ji, [e.message.from && e.message.from.nick ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [Ti, (0,
              o.Wm)(r, {
                  user: e.message.from,
                  network: e.network,
                  channel: e.channel
              }, null, 8, ["user", "network", "channel"]), Pi], 64)) : (0,
              o.kq)("", !0)])), (0,
              o._)("span", Hi, [e.message.showInActive ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Li, Oi)) : (0,
              o.kq)("", !0), e.message.statusmsgGroup ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", {
                  key: 1,
                  "aria-label": `This message was only shown to users with ${e.message.statusmsgGroup} mode`,
                  class: "msg-statusmsg tooltipped tooltipped-e"
              }, [(0,
              o._)("span", null, (0,
              k.zw)(e.message.statusmsgGroup), 1)], 8, Ii)) : (0,
              o.kq)("", !0), (0,
              o.Wm)(l, {
                  network: e.network,
                  message: e.message
              }, null, 8, ["network", "message"]), ((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.message.previews, (n=>((0,
              o.wg)(),
              (0,
              o.j4)(c, {
                  key: n.link,
                  "keep-scroll-position": e.keepScrollPosition,
                  link: n,
                  channel: e.channel
              }, null, 8, ["keep-scroll-position", "link", "channel"])))), 128))])], 64))], 10, fi)
          }
          ]]);
          const yr = {
              class: "input-wrapper"
          };
          var Cr = (0,
          o.aZ)({
              name: "MessageSearchForm",
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  }
              },
              setup(e) {
                  const n = (0,
                  _.iH)(!1)
                    , a = (0,
                  _.iH)("")
                    , t = (0,
                  s.tv)()
                    , i = (0,
                  s.yj)()
                    , r = (0,
                  _.iH)(null)
                    , l = (0,
                  o.Fl)((()=>"SearchResults" === i.name));
                  return (0,
                  o.YP)(i, (e=>{
                      e.query.q && (a.value = String(e.query.q))
                  }
                  )),
                  (0,
                  o.bv)((()=>{
                      a.value = String(i.query.q || ""),
                      n.value = l.value,
                      r.value && !a.value && n.value && r.value.focus()
                  }
                  )),
                  {
                      searchOpened: n,
                      searchInput: a,
                      searchInputField: r,
                      closeSearch: ()=>{
                          l.value || (a.value = "",
                          n.value = !1)
                      }
                      ,
                      toggleSearch: ()=>{
                          n.value ? r.value?.blur() : (n.value = !0,
                          r.value?.focus())
                      }
                      ,
                      searchMessages: n=>{
                          n.preventDefault(),
                          a.value && t.push({
                              name: "SearchResults",
                              params: {
                                  id: e.channel.id
                              },
                              query: {
                                  q: a.value
                              }
                          }).catch((e=>{
                              "NavigationDuplicated" === e.name && wi.Z.emit("re-search")
                          }
                          ))
                      }
                      ,
                      onSearchPage: l
                  }
              }
          })
            , xr = (0,
          C.Z)(Cr, [["render", function(e, n, a, t, s, r) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("form", {
                  class: (0,
                  k.C_)(["message-search", {
                      opened: e.searchOpened
                  }]),
                  onSubmit: n[4] || (n[4] = (0,
                  i.iM)(((...n)=>e.searchMessages && e.searchMessages(...n)), ["prevent"]))
              }, [(0,
              o._)("div", yr, [(0,
              o.wy)((0,
              o._)("input", {
                  ref: "searchInputField",
                  "onUpdate:modelValue": n[0] || (n[0] = n=>e.searchInput = n),
                  type: "search",
                  name: "search",
                  class: "input",
                  placeholder: "Search messages…",
                  onBlur: n[1] || (n[1] = (...n)=>e.closeSearch && e.closeSearch(...n)),
                  onKeyup: n[2] || (n[2] = (0,
                  i.D2)(((...n)=>e.closeSearch && e.closeSearch(...n)), ["esc"]))
              }, null, 544), [[i.nr, e.searchInput]])]), e.onSearchPage ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("button", {
                  key: 0,
                  class: "search",
                  type: "button",
                  "aria-label": "Search messages in this channel",
                  onMousedown: n[3] || (n[3] = (0,
                  i.iM)(((...n)=>e.toggleSearch && e.toggleSearch(...n)), ["prevent"]))
              }, null, 32))], 34)
          }
          ]]);
          const Sr = ["aria-label"]
            , Dr = {
              class: "date-marker"
          }
            , Zr = ["aria-label"];
          var Ur = a(4712)
            , Mr = a.n(Ur);
          Ei().extend(Mr());
          var qr = (0,
          o.aZ)({
              name: "DateMarker",
              props: {
                  message: {
                      type: Object,
                      required: !0
                  },
                  focused: Boolean
              },
              setup(e) {
                  const n = (0,
                  o.Fl)((()=>Ei()(e.message.time).format("D MMMM YYYY")))
                    , a = ()=>(Date.now() - Date.parse(e.message.time.toString())) / 36e5
                    , t = ()=>{
                      a() >= 48 && wi.Z.off("daychange", t)
                  }
                  ;
                  return (0,
                  o.bv)((()=>{
                      a() < 48 && wi.Z.on("daychange", t)
                  }
                  )),
                  (0,
                  o.Jd)((()=>{
                      wi.Z.off("daychange", t)
                  }
                  )),
                  {
                      localeDate: n,
                      friendlyDate: ()=>Ei()(e.message.time).calendar(null, {
                          sameDay: "[Today]",
                          lastDay: "[Yesterday]",
                          lastWeek: "D MMMM YYYY",
                          sameElse: "D MMMM YYYY"
                      })
                  }
              }
          })
            , jr = (0,
          C.Z)(qr, [["render", function(e, n, a, t, s, i) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", {
                  "aria-label": e.localeDate,
                  class: "date-marker-container tooltipped tooltipped-s"
              }, [(0,
              o._)("div", Dr, [(0,
              o._)("span", {
                  "aria-label": e.friendlyDate(),
                  class: "date-marker-text"
              }, null, 8, Zr)])], 8, Sr)
          }
          ]])
            , Tr = (0,
          o.aZ)({
              name: "SearchResults",
              components: {
                  SidebarToggle: cn,
                  Message: _r,
                  DateMarker: jr,
                  MessageSearchForm: xr
              },
              setup() {
                  const e = (0,
                  Z.oR)()
                    , n = (0,
                  s.yj)()
                    , a = ((0,
                  s.tv)(),
                  (0,
                  _.iH)())
                    , t = (0,
                  _.iH)()
                    , i = (0,
                  _.iH)(0)
                    , r = (0,
                  _.iH)(!1)
                    , l = (0,
                  _.iH)(0)
                    , c = (0,
                  _.iH)(0)
                    , u = (0,
                  o.Fl)((()=>{
                      const n = e.state.messageSearchResults?.results;
                      return n || []
                  }
                  ))
                    , d = (0,
                  o.Fl)((()=>{
                      const a = parseInt(String(n.params.id || ""), 10);
                      return e.getters.findChannel(a)
                  }
                  ))
                    , h = (0,
                  o.Fl)((()=>d.value ? d.value.network : null))
                    , p = (0,
                  o.Fl)((()=>d.value ? d.value.channel : null))
                    , g = ()=>{
                      d.value && e.commit("activeChannel", d.value)
                  }
                    , m = ()=>{
                      p.value && ph(p.value)
                  }
                    , w = ()=>{
                      i.value = 0,
                      e.commit("messageSearchResults", null),
                      e.commit("messageSearchPendingQuery", null)
                  }
                    , k = ()=>{
                      if (!h.value || !p.value)
                          return;
                      w();
                      const a = {
                          networkUuid: h.value.uuid,
                          channelName: p.value.name,
                          searchTerm: String(n.query.q || ""),
                          offset: i.value
                      };
                      e.commit("messageSearchPendingQuery", a),
                      f.Z.emit("search", a)
                  }
                    , b = async()=>{
                      await (0,
                      o.Y3)();
                      const e = a.value;
                      e && (e.scrollTop = e.scrollHeight)
                  }
                  ;
                  return (0,
                  o.YP)((()=>n.params.id), (()=>{
                      k(),
                      g()
                  }
                  )),
                  (0,
                  o.YP)((()=>n.query), (()=>{
                      k(),
                      g()
                  }
                  )),
                  (0,
                  o.YP)(u, (async()=>{
                      if (r.value = !(!u.value.length || u.value.length % 100),
                      i.value) {
                          await (0,
                          o.Y3)();
                          const e = a.value;
                          if (!e)
                              return;
                          const n = e.scrollHeight;
                          e.scrollTop = l.value + n - c.value
                      } else
                          await b()
                  }
                  )),
                  (0,
                  o.bv)((()=>{
                      g(),
                      k(),
                      wi.Z.on("escapekey", m),
                      wi.Z.on("re-search", k)
                  }
                  )),
                  (0,
                  o.Ah)((()=>{
                      wi.Z.off("escapekey", m),
                      wi.Z.off("re-search", k),
                      w()
                  }
                  )),
                  {
                      chat: a,
                      loadMoreButton: t,
                      messages: u,
                      moreResultsAvailable: r,
                      network: h,
                      channel: p,
                      route: n,
                      offset: i,
                      store: e,
                      setActiveChannel: g,
                      closeSearch: m,
                      shouldDisplayDateMarker: (e,n)=>{
                          const a = u.value[n - 1];
                          return !a || new Date(a.time).getDay() !== new Date(e.time).getDay()
                      }
                      ,
                      doSearch: k,
                      onShowMoreClick: ()=>{
                          if (!a.value || !h.value || !p.value)
                              return;
                          i.value += 100,
                          l.value = a.value.scrollTop,
                          c.value = a.value.scrollHeight;
                          const t = {
                              networkUuid: h.value.uuid,
                              channelName: p.value.name,
                              searchTerm: String(n.query.q || ""),
                              offset: i.value
                          };
                          e.commit("messageSearchPendingQuery", t),
                          f.Z.emit("search", t)
                      }
                      ,
                      jumpToBottom: b,
                      jump: (e,n)=>{}
                  }
              }
          })
            , Pr = (0,
          C.Z)(Tr, [["render", function(e, n, a, t, s, r) {
              const l = (0,
              o.up)("SidebarToggle")
                , c = (0,
              o.up)("MessageSearchForm")
                , u = (0,
              o.up)("DateMarker")
                , d = (0,
              o.up)("Message");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", Xo, [(0,
              o._)("div", {
                  id: "chat",
                  class: (0,
                  k.C_)({
                      "time-seconds": e.store.state.settings.showSeconds,
                      "time-12h": e.store.state.settings.use12hClock
                  })
              }, [(0,
              o._)("div", Qo, [e.network && e.channel ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", ei, [(0,
              o.Wm)(l), (0,
              o._)("span", ni, [ai, (0,
              o._)("span", ti, (0,
              k.zw)(e.channel.name), 1), si]), (0,
              o._)("span", oi, (0,
              k.zw)(e.route.query.q), 1), (0,
              o.Wm)(c, {
                  network: e.network,
                  channel: e.channel
              }, null, 8, ["network", "channel"]), (0,
              o._)("button", {
                  class: "close",
                  "aria-label": "Close search window",
                  title: "Close search window",
                  onClick: n[0] || (n[0] = (...n)=>e.closeSearch && e.closeSearch(...n))
              })])) : (0,
              o.kq)("", !0), e.network && e.channel ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", ii, [(0,
              o._)("div", ri, [(0,
              o.wy)((0,
              o._)("div", li, [(0,
              o._)("button", {
                  ref: "loadMoreButton",
                  disabled: !!e.store.state.messageSearchPendingQuery || !e.store.state.isConnected,
                  class: "btn",
                  onClick: n[1] || (n[1] = (...n)=>e.onShowMoreClick && e.onShowMoreClick(...n))
              }, [e.store.state.messageSearchPendingQuery ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", ui, "Loading…")) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", di, "Show older messages"))], 8, ci)], 512), [[i.F8, e.moreResultsAvailable]]), e.store.state.messageSearchPendingQuery && !e.offset ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", hi, " Searching… ")) : e.messages.length || e.offset ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", pi, " No results found. ")), (0,
              o._)("div", gi, [((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.messages, ((n,a)=>((0,
              o.wg)(),
              (0,
              o.iD)("div", {
                  key: n.id,
                  class: "result",
                  onClick: t=>e.jump(n, a)
              }, [e.shouldDisplayDateMarker(n, a) ? ((0,
              o.wg)(),
              (0,
              o.j4)(u, {
                  key: n.id + "-date",
                  message: n
              }, null, 8, ["message"])) : (0,
              o.kq)("", !0), ((0,
              o.wg)(),
              (0,
              o.j4)(d, {
                  key: n.id,
                  channel: e.channel,
                  network: e.network,
                  message: n,
                  "data-id": n.id
              }, null, 8, ["channel", "network", "message", "data-id"]))], 8, mi)))), 128))])], 512)])) : (0,
              o.kq)("", !0)])], 2)])
          }
          ]]);
          const Hr = ["data-current-channel"]
            , Lr = ["id", "data-type", "aria-label"]
            , Or = {
              class: "header"
          }
            , Ir = ["aria-label"]
            , Ar = {
              key: 0,
              class: "topic-container"
          }
            , Er = ["value"]
            , Nr = [(0,
          o._)("span", {
              type: "button",
              "aria-label": "Save topic"
          }, null, -1)]
            , zr = ["title"]
            , Yr = {
              key: 3,
              class: "rt-tooltip tooltipped tooltipped-w",
              "aria-label": "Toggle user list"
          }
            , Rr = {
              key: 0,
              class: "chat-content"
          }
            , Wr = {
              class: "chat"
          }
            , Fr = {
              class: "messages"
          }
            , Br = {
              class: "msg"
          }
            , $r = {
              key: 1,
              class: "chat-content"
          }
            , Vr = [(0,
          o._)("div", {
              class: "scroll-down-arrow"
          }, null, -1)]
            , Jr = {
              ref: "chat",
              class: "chat",
              tabindex: "-1"
          }
            , Kr = {
              class: "show-more"
          }
            , Gr = ["disabled"]
            , Xr = {
              key: 0
          }
            , Qr = {
              key: 1
          }
            , el = [(0,
          o._)("span", {
              class: "unread-marker-text"
          }, null, -1)];
          var nl = a(9099);
          const al = {
              class: "condensed-summary"
          }
            , tl = (0,
          o._)("span", {
              class: "time"
          }, null, -1)
            , sl = (0,
          o._)("span", {
              class: "from"
          }, null, -1)
            , ol = (0,
          o._)("button", {
              class: "toggle-button",
              "aria-label": "Toggle status messages"
          }, null, -1);
          var il = (0,
          o.aZ)({
              name: "MessageCondensed",
              components: {
                  Message: _r
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  messages: {
                      type: Array,
                      required: !0
                  },
                  keepScrollPosition: {
                      type: Function,
                      required: !0
                  },
                  focused: Boolean
              },
              setup(e) {
                  const n = (0,
                  _.iH)(!0)
                    , a = (0,
                  o.Fl)((()=>{
                      const n = {};
                      nl.Z.forEach((e=>{
                          n[e] = 0
                      }
                      ));
                      for (const a of e.messages)
                          if ("mode" === a.type) {
                              const e = a.text.split(" ")[0].split("").filter((e=>"+" !== e && "-" !== e)).length;
                              n[a.type] += e
                          } else
                              n[a.type]++;
                      n.part += n.quit;
                      const a = [];
                      if (nl.Z.forEach((e=>{
                          if (n[e])
                              switch (e) {
                              case "chghost":
                                  a.push(String(n[e]) + (n[e] > 1 ? " users have changed hostname" : " user has changed hostname"));
                                  break;
                              case "join":
                                  a.push(String(n[e]) + (n[e] > 1 ? " users have joined" : " user has joined"));
                                  break;
                              case "part":
                                  a.push(String(n[e]) + (n[e] > 1 ? " users have left" : " user has left"));
                                  break;
                              case "nick":
                                  a.push(String(n[e]) + (n[e] > 1 ? " users have changed nick" : " user has changed nick"));
                                  break;
                              case "kick":
                                  a.push(String(n[e]) + (n[e] > 1 ? " users were kicked" : " user was kicked"));
                                  break;
                              case "mode":
                                  a.push(String(n[e]) + (n[e] > 1 ? " modes were set" : " mode was set"));
                                  break;
                              case "away":
                                  a.push("marked away " + (n[e] > 1 ? String(n[e]) + " times" : "once"));
                                  break;
                              case "back":
                                  a.push("marked back " + (n[e] > 1 ? String(n[e]) + " times" : "once"))
                              }
                      }
                      )),
                      a.length) {
                          let e = a.pop();
                          return a.length && (e = a.join(", ") + ", and " + e),
                          e
                      }
                      return ""
                  }
                  ));
                  return {
                      isCollapsed: n,
                      condensedText: a,
                      onCollapseClick: ()=>{
                          n.value = !n.value,
                          e.keepScrollPosition()
                      }
                  }
              }
          })
            , rl = (0,
          C.Z)(il, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("Message");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", {
                  class: (0,
                  k.C_)(["msg", {
                      closed: e.isCollapsed
                  }]),
                  "data-type": "condensed"
              }, [(0,
              o._)("div", al, [tl, sl, (0,
              o._)("span", {
                  class: "content",
                  onClick: n[0] || (n[0] = (...n)=>e.onCollapseClick && e.onCollapseClick(...n))
              }, [(0,
              o.Uk)((0,
              k.zw)(e.condensedText), 1), ol])]), ((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.messages, (n=>((0,
              o.wg)(),
              (0,
              o.j4)(r, {
                  key: n.id,
                  network: e.network,
                  message: n
              }, null, 8, ["network", "message"])))), 128))], 2)
          }
          ]]);
          let ll = !1;
          var cl = (0,
          o.aZ)({
              name: "MessageList",
              components: {
                  Message: _r,
                  MessageCondensed: rl,
                  DateMarker: jr
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  },
                  focused: Number
              },
              setup(e, {emit: n}) {
                  const a = (0,
                  Z.oR)()
                    , t = (0,
                  _.iH)(null)
                    , s = (0,
                  _.iH)(null)
                    , i = (0,
                  _.iH)(null)
                    , r = (0,
                  _.iH)(!1)
                    , l = (0,
                  _.iH)(!1)
                    , c = ()=>{
                      r.value = !0,
                      e.channel.scrolledToBottom = !0;
                      const n = t.value;
                      n && (n.scrollTop = n.scrollHeight)
                  }
                    , u = ()=>{
                      if (!a.state.isConnected)
                          return;
                      let n = -1;
                      for (const a of e.channel.messages)
                          if (!a.showInActive) {
                              n = a.id;
                              break
                          }
                      e.channel.historyLoading = !0,
                      f.Z.emit("more", {
                          target: e.channel.id,
                          lastId: n,
                          condensed: "shown" !== a.state.settings.statusMessages
                      })
                  }
                    , d = e=>{
                      e.forEach((e=>{
                          e.isIntersecting && u()
                      }
                      ))
                  }
                  ;
                  (0,
                  o.Y3)((()=>{
                      t.value && (window.IntersectionObserver && (i.value = new window.IntersectionObserver(d,{
                          root: t.value
                      })),
                      c())
                  }
                  )).catch((e=>{
                      console.error("Error in new IntersectionObserver", e)
                  }
                  ));
                  const h = (0,
                  o.Fl)((()=>{
                      if ("channel" !== e.channel.type && "query" !== e.channel.type)
                          return e.channel.messages;
                      if ("hidden" === a.state.settings.statusMessages)
                          return e.channel.messages.filter((e=>!nl.Z.has(e.type)));
                      if ("condensed" !== a.state.settings.statusMessages)
                          return e.channel.messages;
                      let n = null;
                      const t = [];
                      for (const a of e.channel.messages)
                          a.self || a.highlight || !nl.Z.has(a.type) ? (n = null,
                          t.push(a)) : (n || (n = {
                              time: a.time,
                              type: "condensed",
                              messages: []
                          },
                          t.push(n)),
                          n.messages.push(a),
                          n.id = a.id,
                          a.id === e.channel.firstUnread && (n = null));
                      return t.map((e=>"condensed" === e.type && 1 === e.messages.length ? e.messages[0] : e))
                  }
                  ))
                    , p = async()=>{
                      if (l.value)
                          return;
                      const n = t.value;
                      if (n)
                          if (e.channel.scrolledToBottom)
                              l.value = !0,
                              await (0,
                              o.Y3)(),
                              l.value = !1,
                              c();
                          else if (e.channel.historyLoading) {
                              const e = n.scrollHeight - n.scrollTop;
                              l.value = !0,
                              await (0,
                              o.Y3)(),
                              l.value = !1,
                              r.value = !0,
                              n.scrollTop = n.scrollHeight - e
                          }
                  }
                    , g = ()=>{
                      if (r.value)
                          return void (r.value = !1);
                      const n = t.value;
                      n && (e.channel.scrolledToBottom = n.scrollHeight - n.scrollTop - n.offsetHeight <= 30)
                  }
                    , m = ()=>{
                      e.channel.scrolledToBottom && c()
                  }
                  ;
                  return (0,
                  o.bv)((()=>{
                      t.value?.addEventListener("scroll", g, {
                          passive: !0
                      }),
                      wi.Z.on("resize", m),
                      (0,
                      o.Y3)((()=>{
                          i.value && s.value && i.value.observe(s.value)
                      }
                      ))
                  }
                  )),
                  (0,
                  o.YP)((()=>e.channel.id), (()=>{
                      e.channel.scrolledToBottom = !0,
                      i.value && s.value && (i.value.unobserve(s.value),
                      i.value.observe(s.value))
                  }
                  )),
                  (0,
                  o.YP)((()=>e.channel.messages), (async()=>{
                      await p()
                  }
                  ), {
                      deep: !0
                  }),
                  (0,
                  o.YP)((()=>e.channel.pendingMessage), (async()=>{
                      await p()
                  }
                  )),
                  (0,
                  o.Xn)((()=>{
                      ll = !1
                  }
                  )),
                  (0,
                  o.Jd)((()=>{
                      wi.Z.off("resize", m),
                      t.value?.removeEventListener("scroll", g)
                  }
                  )),
                  (0,
                  o.Ah)((()=>{
                      i.value && i.value.disconnect()
                  }
                  )),
                  {
                      chat: t,
                      store: a,
                      onShowMoreClick: u,
                      loadMoreButton: s,
                      onCopy: ()=>{
                          t.value && function(e) {
                              if (void 0 !== window.InstallTrigger)
                                  return;
                              const n = window.getSelection();
                              if (!n)
                                  return;
                              if (n.anchorNode === n.focusNode)
                                  return;
                              const a = n.getRangeAt(0)
                                , t = a.cloneContents()
                                , s = document.createElement("div");
                              s.id = "js-copy-hack",
                              s.appendChild(t),
                              e.appendChild(s),
                              n.selectAllChildren(s),
                              window.setTimeout((()=>{
                                  e.removeChild(s),
                                  n.removeAllRanges(),
                                  n.addRange(a)
                              }
                              ), 0)
                          }(t.value)
                      }
                      ,
                      condensedMessages: h,
                      shouldDisplayDateMarker: (e,n)=>{
                          const a = h.value[n - 1];
                          if (!a)
                              return !0;
                          const t = new Date(a.time)
                            , s = new Date(e.time);
                          return t.getDate() !== s.getDate() || t.getMonth() !== s.getMonth() || t.getFullYear() !== s.getFullYear()
                      }
                      ,
                      shouldDisplayUnreadMarker: n=>!ll && n > e.channel.firstUnread && (ll = !0,
                      !0),
                      keepScrollPosition: p,
                      isPreviousSource: (e,n)=>{
                          const a = h.value[n - 1];
                          return !(!a || "message" !== e.type || "message" !== a.type || !a.from || e.from.nick !== a.from.nick)
                      }
                      ,
                      jumpToBottom: c,
                      onLinkPreviewToggle: async(n,a)=>{
                          await p(),
                          f.Z.emit("msg:preview:toggle", {
                              target: e.channel.id,
                              msgId: a.id,
                              link: n.link,
                              shown: n.shown
                          })
                      }
                  }
              }
          })
            , ul = (0,
          C.Z)(cl, [["render", function(e, n, a, t, s, r) {
              const l = (0,
              o.up)("DateMarker")
                , c = (0,
              o.up)("MessageCondensed")
                , u = (0,
              o.up)("Message");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", Jr, [(0,
              o.wy)((0,
              o._)("div", Kr, [(0,
              o._)("button", {
                  ref: "loadMoreButton",
                  disabled: e.channel.historyLoading || !e.store.state.isConnected,
                  class: "btn",
                  onClick: n[0] || (n[0] = (...n)=>e.onShowMoreClick && e.onShowMoreClick(...n))
              }, [e.channel.historyLoading ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Xr, "Loading…")) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", Qr, "Show older messages"))], 8, Gr)], 512), [[i.F8, e.channel.moreHistoryAvailable]]), (0,
              o._)("div", {
                  class: "messages",
                  role: "log",
                  "aria-live": "polite",
                  "aria-relevant": "additions",
                  onCopy: n[1] || (n[1] = (...n)=>e.onCopy && e.onCopy(...n))
              }, [((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.condensedMessages, ((n,a)=>((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, null, [e.shouldDisplayDateMarker(n, a) ? ((0,
              o.wg)(),
              (0,
              o.j4)(l, {
                  key: n.id + "-date",
                  message: n,
                  focused: n.id === e.focused
              }, null, 8, ["message", "focused"])) : (0,
              o.kq)("", !0), e.shouldDisplayUnreadMarker(Number(n.id)) ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", {
                  key: n.id + "-unread",
                  class: "unread-marker"
              }, el)) : (0,
              o.kq)("", !0), "condensed" === n.type ? ((0,
              o.wg)(),
              (0,
              o.j4)(c, {
                  key: n.messages[0].id,
                  network: e.network,
                  "keep-scroll-position": e.keepScrollPosition,
                  messages: n.messages,
                  focused: n.id === e.focused
              }, null, 8, ["network", "keep-scroll-position", "messages", "focused"])) : ((0,
              o.wg)(),
              (0,
              o.j4)(u, {
                  key: n.id,
                  channel: e.channel,
                  network: e.network,
                  message: n,
                  "keep-scroll-position": e.keepScrollPosition,
                  "is-previous-source": e.isPreviousSource(n, a),
                  focused: n.id === e.focused,
                  onToggleLinkPreview: e.onLinkPreviewToggle
              }, null, 8, ["channel", "network", "message", "keep-scroll-position", "is-previous-source", "focused", "onToggleLinkPreview"]))], 64)))), 256))], 32)], 512)
          }
          ]]);
          const dl = (0,
          o._)("span", {
              id: "upload-progressbar"
          }, null, -1)
            , hl = {
              id: "nick"
          }
            , pl = ["value", "placeholder", "aria-label"]
            , gl = ["disabled"]
            , ml = {
              id: "submit-tooltip",
              class: "tooltipped tooltipped-w tooltipped-no-touch",
              "aria-label": "Send message"
          }
            , wl = ["disabled"];
          var fl = a(2441)
            , kl = a.n(fl)
            , bl = a(4366)
            , vl = a(675)
            , _l = a(8207)
            , yl = a(3261)
            , Cl = a.n(yl)
            , xl = JSON.parse('{"100":"💯","1234":"🔢","grinning":"😀","smiley":"😃","smile":"😄","grin":"😁","laughing":"😆","satisfied":"😆","sweat_smile":"😅","rofl":"🤣","joy":"😂","slightly_smiling_face":"🙂","upside_down_face":"🙃","melting_face":"🫠","wink":"😉","blush":"😊","innocent":"😇","smiling_face_with_three_hearts":"🥰","heart_eyes":"😍","star_struck":"🤩","kissing_heart":"😘","kissing":"😗","relaxed":"☺️","kissing_closed_eyes":"😚","kissing_smiling_eyes":"😙","smiling_face_with_tear":"🥲","yum":"😋","stuck_out_tongue":"😛","stuck_out_tongue_winking_eye":"😜","zany_face":"🤪","stuck_out_tongue_closed_eyes":"😝","money_mouth_face":"🤑","hugs":"🤗","hand_over_mouth":"🤭","face_with_open_eyes_and_hand_over_mouth":"🫢","face_with_peeking_eye":"🫣","shushing_face":"🤫","thinking":"🤔","saluting_face":"🫡","zipper_mouth_face":"🤐","raised_eyebrow":"🤨","neutral_face":"😐","expressionless":"😑","no_mouth":"😶","dotted_line_face":"🫥","face_in_clouds":"😶‍🌫️","smirk":"😏","unamused":"😒","roll_eyes":"🙄","grimacing":"😬","face_exhaling":"😮‍💨","lying_face":"🤥","shaking_face":"🫨","relieved":"😌","pensive":"😔","sleepy":"😪","drooling_face":"🤤","sleeping":"😴","mask":"😷","face_with_thermometer":"🤒","face_with_head_bandage":"🤕","nauseated_face":"🤢","vomiting_face":"🤮","sneezing_face":"🤧","hot_face":"🥵","cold_face":"🥶","woozy_face":"🥴","dizzy_face":"😵","face_with_spiral_eyes":"😵‍💫","exploding_head":"🤯","cowboy_hat_face":"🤠","partying_face":"🥳","disguised_face":"🥸","sunglasses":"😎","nerd_face":"🤓","monocle_face":"🧐","confused":"😕","face_with_diagonal_mouth":"🫤","worried":"😟","slightly_frowning_face":"🙁","frowning_face":"☹️","open_mouth":"😮","hushed":"😯","astonished":"😲","flushed":"😳","pleading_face":"🥺","face_holding_back_tears":"🥹","frowning":"😦","anguished":"😧","fearful":"😨","cold_sweat":"😰","disappointed_relieved":"😥","cry":"😢","sob":"😭","scream":"😱","confounded":"😖","persevere":"😣","disappointed":"😞","sweat":"😓","weary":"😩","tired_face":"😫","yawning_face":"🥱","triumph":"😤","rage":"😡","pout":"😡","angry":"😠","cursing_face":"🤬","smiling_imp":"😈","imp":"👿","skull":"💀","skull_and_crossbones":"☠️","hankey":"💩","poop":"💩","shit":"💩","clown_face":"🤡","japanese_ogre":"👹","japanese_goblin":"👺","ghost":"👻","alien":"👽","space_invader":"👾","robot":"🤖","smiley_cat":"😺","smile_cat":"😸","joy_cat":"😹","heart_eyes_cat":"😻","smirk_cat":"😼","kissing_cat":"😽","scream_cat":"🙀","crying_cat_face":"😿","pouting_cat":"😾","see_no_evil":"🙈","hear_no_evil":"🙉","speak_no_evil":"🙊","love_letter":"💌","cupid":"💘","gift_heart":"💝","sparkling_heart":"💖","heartpulse":"💗","heartbeat":"💓","revolving_hearts":"💞","two_hearts":"💕","heart_decoration":"💟","heavy_heart_exclamation":"❣️","broken_heart":"💔","heart_on_fire":"❤️‍🔥","mending_heart":"❤️‍🩹","heart":"❤️","pink_heart":"🩷","orange_heart":"🧡","yellow_heart":"💛","green_heart":"💚","blue_heart":"💙","light_blue_heart":"🩵","purple_heart":"💜","brown_heart":"🤎","black_heart":"🖤","grey_heart":"🩶","white_heart":"🤍","kiss":"💋","anger":"💢","boom":"💥","collision":"💥","dizzy":"💫","sweat_drops":"💦","dash":"💨","hole":"🕳️","speech_balloon":"💬","eye_speech_bubble":"👁️‍🗨️","left_speech_bubble":"🗨️","right_anger_bubble":"🗯️","thought_balloon":"💭","zzz":"💤","wave":"👋","raised_back_of_hand":"🤚","raised_hand_with_fingers_splayed":"🖐️","hand":"✋","raised_hand":"✋","vulcan_salute":"🖖","rightwards_hand":"🫱","leftwards_hand":"🫲","palm_down_hand":"🫳","palm_up_hand":"🫴","leftwards_pushing_hand":"🫷","rightwards_pushing_hand":"🫸","ok_hand":"👌","pinched_fingers":"🤌","pinching_hand":"🤏","v":"✌️","crossed_fingers":"🤞","hand_with_index_finger_and_thumb_crossed":"🫰","love_you_gesture":"🤟","metal":"🤘","call_me_hand":"🤙","point_left":"👈","point_right":"👉","point_up_2":"👆","middle_finger":"🖕","fu":"🖕","point_down":"👇","point_up":"☝️","index_pointing_at_the_viewer":"🫵","+1":"👍","thumbsup":"👍","-1":"👎","thumbsdown":"👎","fist_raised":"✊","fist":"✊","fist_oncoming":"👊","facepunch":"👊","punch":"👊","fist_left":"🤛","fist_right":"🤜","clap":"👏","raised_hands":"🙌","heart_hands":"🫶","open_hands":"👐","palms_up_together":"🤲","handshake":"🤝","pray":"🙏","writing_hand":"✍️","nail_care":"💅","selfie":"🤳","muscle":"💪","mechanical_arm":"🦾","mechanical_leg":"🦿","leg":"🦵","foot":"🦶","ear":"👂","ear_with_hearing_aid":"🦻","nose":"👃","brain":"🧠","anatomical_heart":"🫀","lungs":"🫁","tooth":"🦷","bone":"🦴","eyes":"👀","eye":"👁️","tongue":"👅","lips":"👄","biting_lip":"🫦","baby":"👶","child":"🧒","boy":"👦","girl":"👧","adult":"🧑","blond_haired_person":"👱","man":"👨","bearded_person":"🧔","man_beard":"🧔‍♂️","woman_beard":"🧔‍♀️","red_haired_man":"👨‍🦰","curly_haired_man":"👨‍🦱","white_haired_man":"👨‍🦳","bald_man":"👨‍🦲","woman":"👩","red_haired_woman":"👩‍🦰","person_red_hair":"🧑‍🦰","curly_haired_woman":"👩‍🦱","person_curly_hair":"🧑‍🦱","white_haired_woman":"👩‍🦳","person_white_hair":"🧑‍🦳","bald_woman":"👩‍🦲","person_bald":"🧑‍🦲","blond_haired_woman":"👱‍♀️","blonde_woman":"👱‍♀️","blond_haired_man":"👱‍♂️","older_adult":"🧓","older_man":"👴","older_woman":"👵","frowning_person":"🙍","frowning_man":"🙍‍♂️","frowning_woman":"🙍‍♀️","pouting_face":"🙎","pouting_man":"🙎‍♂️","pouting_woman":"🙎‍♀️","no_good":"🙅","no_good_man":"🙅‍♂️","ng_man":"🙅‍♂️","no_good_woman":"🙅‍♀️","ng_woman":"🙅‍♀️","ok_person":"🙆","ok_man":"🙆‍♂️","ok_woman":"🙆‍♀️","tipping_hand_person":"💁","information_desk_person":"💁","tipping_hand_man":"💁‍♂️","sassy_man":"💁‍♂️","tipping_hand_woman":"💁‍♀️","sassy_woman":"💁‍♀️","raising_hand":"🙋","raising_hand_man":"🙋‍♂️","raising_hand_woman":"🙋‍♀️","deaf_person":"🧏","deaf_man":"🧏‍♂️","deaf_woman":"🧏‍♀️","bow":"🙇","bowing_man":"🙇‍♂️","bowing_woman":"🙇‍♀️","facepalm":"🤦","man_facepalming":"🤦‍♂️","woman_facepalming":"🤦‍♀️","shrug":"🤷","man_shrugging":"🤷‍♂️","woman_shrugging":"🤷‍♀️","health_worker":"🧑‍⚕️","man_health_worker":"👨‍⚕️","woman_health_worker":"👩‍⚕️","student":"🧑‍🎓","man_student":"👨‍🎓","woman_student":"👩‍🎓","teacher":"🧑‍🏫","man_teacher":"👨‍🏫","woman_teacher":"👩‍🏫","judge":"🧑‍⚖️","man_judge":"👨‍⚖️","woman_judge":"👩‍⚖️","farmer":"🧑‍🌾","man_farmer":"👨‍🌾","woman_farmer":"👩‍🌾","cook":"🧑‍🍳","man_cook":"👨‍🍳","woman_cook":"👩‍🍳","mechanic":"🧑‍🔧","man_mechanic":"👨‍🔧","woman_mechanic":"👩‍🔧","factory_worker":"🧑‍🏭","man_factory_worker":"👨‍🏭","woman_factory_worker":"👩‍🏭","office_worker":"🧑‍💼","man_office_worker":"👨‍💼","woman_office_worker":"👩‍💼","scientist":"🧑‍🔬","man_scientist":"👨‍🔬","woman_scientist":"👩‍🔬","technologist":"🧑‍💻","man_technologist":"👨‍💻","woman_technologist":"👩‍💻","singer":"🧑‍🎤","man_singer":"👨‍🎤","woman_singer":"👩‍🎤","artist":"🧑‍🎨","man_artist":"👨‍🎨","woman_artist":"👩‍🎨","pilot":"🧑‍✈️","man_pilot":"👨‍✈️","woman_pilot":"👩‍✈️","astronaut":"🧑‍🚀","man_astronaut":"👨‍🚀","woman_astronaut":"👩‍🚀","firefighter":"🧑‍🚒","man_firefighter":"👨‍🚒","woman_firefighter":"👩‍🚒","police_officer":"👮","cop":"👮","policeman":"👮‍♂️","policewoman":"👮‍♀️","detective":"🕵️","male_detective":"🕵️‍♂️","female_detective":"🕵️‍♀️","guard":"💂","guardsman":"💂‍♂️","guardswoman":"💂‍♀️","ninja":"🥷","construction_worker":"👷","construction_worker_man":"👷‍♂️","construction_worker_woman":"👷‍♀️","person_with_crown":"🫅","prince":"🤴","princess":"👸","person_with_turban":"👳","man_with_turban":"👳‍♂️","woman_with_turban":"👳‍♀️","man_with_gua_pi_mao":"👲","woman_with_headscarf":"🧕","person_in_tuxedo":"🤵","man_in_tuxedo":"🤵‍♂️","woman_in_tuxedo":"🤵‍♀️","person_with_veil":"👰","man_with_veil":"👰‍♂️","woman_with_veil":"👰‍♀️","bride_with_veil":"👰‍♀️","pregnant_woman":"🤰","pregnant_man":"🫃","pregnant_person":"🫄","breast_feeding":"🤱","woman_feeding_baby":"👩‍🍼","man_feeding_baby":"👨‍🍼","person_feeding_baby":"🧑‍🍼","angel":"👼","santa":"🎅","mrs_claus":"🤶","mx_claus":"🧑‍🎄","superhero":"🦸","superhero_man":"🦸‍♂️","superhero_woman":"🦸‍♀️","supervillain":"🦹","supervillain_man":"🦹‍♂️","supervillain_woman":"🦹‍♀️","mage":"🧙","mage_man":"🧙‍♂️","mage_woman":"🧙‍♀️","fairy":"🧚","fairy_man":"🧚‍♂️","fairy_woman":"🧚‍♀️","vampire":"🧛","vampire_man":"🧛‍♂️","vampire_woman":"🧛‍♀️","merperson":"🧜","merman":"🧜‍♂️","mermaid":"🧜‍♀️","elf":"🧝","elf_man":"🧝‍♂️","elf_woman":"🧝‍♀️","genie":"🧞","genie_man":"🧞‍♂️","genie_woman":"🧞‍♀️","zombie":"🧟","zombie_man":"🧟‍♂️","zombie_woman":"🧟‍♀️","troll":"🧌","massage":"💆","massage_man":"💆‍♂️","massage_woman":"💆‍♀️","haircut":"💇","haircut_man":"💇‍♂️","haircut_woman":"💇‍♀️","walking":"🚶","walking_man":"🚶‍♂️","walking_woman":"🚶‍♀️","standing_person":"🧍","standing_man":"🧍‍♂️","standing_woman":"🧍‍♀️","kneeling_person":"🧎","kneeling_man":"🧎‍♂️","kneeling_woman":"🧎‍♀️","person_with_probing_cane":"🧑‍🦯","man_with_probing_cane":"👨‍🦯","woman_with_probing_cane":"👩‍🦯","person_in_motorized_wheelchair":"🧑‍🦼","man_in_motorized_wheelchair":"👨‍🦼","woman_in_motorized_wheelchair":"👩‍🦼","person_in_manual_wheelchair":"🧑‍🦽","man_in_manual_wheelchair":"👨‍🦽","woman_in_manual_wheelchair":"👩‍🦽","runner":"🏃","running":"🏃","running_man":"🏃‍♂️","running_woman":"🏃‍♀️","woman_dancing":"💃","dancer":"💃","man_dancing":"🕺","business_suit_levitating":"🕴️","dancers":"👯","dancing_men":"👯‍♂️","dancing_women":"👯‍♀️","sauna_person":"🧖","sauna_man":"🧖‍♂️","sauna_woman":"🧖‍♀️","climbing":"🧗","climbing_man":"🧗‍♂️","climbing_woman":"🧗‍♀️","person_fencing":"🤺","horse_racing":"🏇","skier":"⛷️","snowboarder":"🏂","golfing":"🏌️","golfing_man":"🏌️‍♂️","golfing_woman":"🏌️‍♀️","surfer":"🏄","surfing_man":"🏄‍♂️","surfing_woman":"🏄‍♀️","rowboat":"🚣","rowing_man":"🚣‍♂️","rowing_woman":"🚣‍♀️","swimmer":"🏊","swimming_man":"🏊‍♂️","swimming_woman":"🏊‍♀️","bouncing_ball_person":"⛹️","bouncing_ball_man":"⛹️‍♂️","basketball_man":"⛹️‍♂️","bouncing_ball_woman":"⛹️‍♀️","basketball_woman":"⛹️‍♀️","weight_lifting":"🏋️","weight_lifting_man":"🏋️‍♂️","weight_lifting_woman":"🏋️‍♀️","bicyclist":"🚴","biking_man":"🚴‍♂️","biking_woman":"🚴‍♀️","mountain_bicyclist":"🚵","mountain_biking_man":"🚵‍♂️","mountain_biking_woman":"🚵‍♀️","cartwheeling":"🤸","man_cartwheeling":"🤸‍♂️","woman_cartwheeling":"🤸‍♀️","wrestling":"🤼","men_wrestling":"🤼‍♂️","women_wrestling":"🤼‍♀️","water_polo":"🤽","man_playing_water_polo":"🤽‍♂️","woman_playing_water_polo":"🤽‍♀️","handball_person":"🤾","man_playing_handball":"🤾‍♂️","woman_playing_handball":"🤾‍♀️","juggling_person":"🤹","man_juggling":"🤹‍♂️","woman_juggling":"🤹‍♀️","lotus_position":"🧘","lotus_position_man":"🧘‍♂️","lotus_position_woman":"🧘‍♀️","bath":"🛀","sleeping_bed":"🛌","people_holding_hands":"🧑‍🤝‍🧑","two_women_holding_hands":"👭","couple":"👫","two_men_holding_hands":"👬","couplekiss":"💏","couplekiss_man_woman":"👩‍❤️‍💋‍👨","couplekiss_man_man":"👨‍❤️‍💋‍👨","couplekiss_woman_woman":"👩‍❤️‍💋‍👩","couple_with_heart":"💑","couple_with_heart_woman_man":"👩‍❤️‍👨","couple_with_heart_man_man":"👨‍❤️‍👨","couple_with_heart_woman_woman":"👩‍❤️‍👩","family":"👪","family_man_woman_boy":"👨‍👩‍👦","family_man_woman_girl":"👨‍👩‍👧","family_man_woman_girl_boy":"👨‍👩‍👧‍👦","family_man_woman_boy_boy":"👨‍👩‍👦‍👦","family_man_woman_girl_girl":"👨‍👩‍👧‍👧","family_man_man_boy":"👨‍👨‍👦","family_man_man_girl":"👨‍👨‍👧","family_man_man_girl_boy":"👨‍👨‍👧‍👦","family_man_man_boy_boy":"👨‍👨‍👦‍👦","family_man_man_girl_girl":"👨‍👨‍👧‍👧","family_woman_woman_boy":"👩‍👩‍👦","family_woman_woman_girl":"👩‍👩‍👧","family_woman_woman_girl_boy":"👩‍👩‍👧‍👦","family_woman_woman_boy_boy":"👩‍👩‍👦‍👦","family_woman_woman_girl_girl":"👩‍👩‍👧‍👧","family_man_boy":"👨‍👦","family_man_boy_boy":"👨‍👦‍👦","family_man_girl":"👨‍👧","family_man_girl_boy":"👨‍👧‍👦","family_man_girl_girl":"👨‍👧‍👧","family_woman_boy":"👩‍👦","family_woman_boy_boy":"👩‍👦‍👦","family_woman_girl":"👩‍👧","family_woman_girl_boy":"👩‍👧‍👦","family_woman_girl_girl":"👩‍👧‍👧","speaking_head":"🗣️","bust_in_silhouette":"👤","busts_in_silhouette":"👥","people_hugging":"🫂","footprints":"👣","monkey_face":"🐵","monkey":"🐒","gorilla":"🦍","orangutan":"🦧","dog":"🐶","dog2":"🐕","guide_dog":"🦮","service_dog":"🐕‍🦺","poodle":"🐩","wolf":"🐺","fox_face":"🦊","raccoon":"🦝","cat":"🐱","cat2":"🐈","black_cat":"🐈‍⬛","lion":"🦁","tiger":"🐯","tiger2":"🐅","leopard":"🐆","horse":"🐴","moose":"🫎","donkey":"🫏","racehorse":"🐎","unicorn":"🦄","zebra":"🦓","deer":"🦌","bison":"🦬","cow":"🐮","ox":"🐂","water_buffalo":"🐃","cow2":"🐄","pig":"🐷","pig2":"🐖","boar":"🐗","pig_nose":"🐽","ram":"🐏","sheep":"🐑","goat":"🐐","dromedary_camel":"🐪","camel":"🐫","llama":"🦙","giraffe":"🦒","elephant":"🐘","mammoth":"🦣","rhinoceros":"🦏","hippopotamus":"🦛","mouse":"🐭","mouse2":"🐁","rat":"🐀","hamster":"🐹","rabbit":"🐰","rabbit2":"🐇","chipmunk":"🐿️","beaver":"🦫","hedgehog":"🦔","bat":"🦇","bear":"🐻","polar_bear":"🐻‍❄️","koala":"🐨","panda_face":"🐼","sloth":"🦥","otter":"🦦","skunk":"🦨","kangaroo":"🦘","badger":"🦡","feet":"🐾","paw_prints":"🐾","turkey":"🦃","chicken":"🐔","rooster":"🐓","hatching_chick":"🐣","baby_chick":"🐤","hatched_chick":"🐥","bird":"🐦","penguin":"🐧","dove":"🕊️","eagle":"🦅","duck":"🦆","swan":"🦢","owl":"🦉","dodo":"🦤","feather":"🪶","flamingo":"🦩","peacock":"🦚","parrot":"🦜","wing":"🪽","black_bird":"🐦‍⬛","goose":"🪿","frog":"🐸","crocodile":"🐊","turtle":"🐢","lizard":"🦎","snake":"🐍","dragon_face":"🐲","dragon":"🐉","sauropod":"🦕","t_rex":"🦖","whale":"🐳","whale2":"🐋","dolphin":"🐬","flipper":"🐬","seal":"🦭","fish":"🐟","tropical_fish":"🐠","blowfish":"🐡","shark":"🦈","octopus":"🐙","shell":"🐚","coral":"🪸","jellyfish":"🪼","snail":"🐌","butterfly":"🦋","bug":"🐛","ant":"🐜","bee":"🐝","honeybee":"🐝","beetle":"🪲","lady_beetle":"🐞","cricket":"🦗","cockroach":"🪳","spider":"🕷️","spider_web":"🕸️","scorpion":"🦂","mosquito":"🦟","fly":"🪰","worm":"🪱","microbe":"🦠","bouquet":"💐","cherry_blossom":"🌸","white_flower":"💮","lotus":"🪷","rosette":"🏵️","rose":"🌹","wilted_flower":"🥀","hibiscus":"🌺","sunflower":"🌻","blossom":"🌼","tulip":"🌷","hyacinth":"🪻","seedling":"🌱","potted_plant":"🪴","evergreen_tree":"🌲","deciduous_tree":"🌳","palm_tree":"🌴","cactus":"🌵","ear_of_rice":"🌾","herb":"🌿","shamrock":"☘️","four_leaf_clover":"🍀","maple_leaf":"🍁","fallen_leaf":"🍂","leaves":"🍃","empty_nest":"🪹","nest_with_eggs":"🪺","mushroom":"🍄","grapes":"🍇","melon":"🍈","watermelon":"🍉","tangerine":"🍊","orange":"🍊","mandarin":"🍊","lemon":"🍋","banana":"🍌","pineapple":"🍍","mango":"🥭","apple":"🍎","green_apple":"🍏","pear":"🍐","peach":"🍑","cherries":"🍒","strawberry":"🍓","blueberries":"🫐","kiwi_fruit":"🥝","tomato":"🍅","olive":"🫒","coconut":"🥥","avocado":"🥑","eggplant":"🍆","potato":"🥔","carrot":"🥕","corn":"🌽","hot_pepper":"🌶️","bell_pepper":"🫑","cucumber":"🥒","leafy_green":"🥬","broccoli":"🥦","garlic":"🧄","onion":"🧅","peanuts":"🥜","beans":"🫘","chestnut":"🌰","ginger_root":"🫚","pea_pod":"🫛","bread":"🍞","croissant":"🥐","baguette_bread":"🥖","flatbread":"🫓","pretzel":"🥨","bagel":"🥯","pancakes":"🥞","waffle":"🧇","cheese":"🧀","meat_on_bone":"🍖","poultry_leg":"🍗","cut_of_meat":"🥩","bacon":"🥓","hamburger":"🍔","fries":"🍟","pizza":"🍕","hotdog":"🌭","sandwich":"🥪","taco":"🌮","burrito":"🌯","tamale":"🫔","stuffed_flatbread":"🥙","falafel":"🧆","egg":"🥚","fried_egg":"🍳","shallow_pan_of_food":"🥘","stew":"🍲","fondue":"🫕","bowl_with_spoon":"🥣","green_salad":"🥗","popcorn":"🍿","butter":"🧈","salt":"🧂","canned_food":"🥫","bento":"🍱","rice_cracker":"🍘","rice_ball":"🍙","rice":"🍚","curry":"🍛","ramen":"🍜","spaghetti":"🍝","sweet_potato":"🍠","oden":"🍢","sushi":"🍣","fried_shrimp":"🍤","fish_cake":"🍥","moon_cake":"🥮","dango":"🍡","dumpling":"🥟","fortune_cookie":"🥠","takeout_box":"🥡","crab":"🦀","lobster":"🦞","shrimp":"🦐","squid":"🦑","oyster":"🦪","icecream":"🍦","shaved_ice":"🍧","ice_cream":"🍨","doughnut":"🍩","cookie":"🍪","birthday":"🎂","cake":"🍰","cupcake":"🧁","pie":"🥧","chocolate_bar":"🍫","candy":"🍬","lollipop":"🍭","custard":"🍮","honey_pot":"🍯","baby_bottle":"🍼","milk_glass":"🥛","coffee":"☕","teapot":"🫖","tea":"🍵","sake":"🍶","champagne":"🍾","wine_glass":"🍷","cocktail":"🍸","tropical_drink":"🍹","beer":"🍺","beers":"🍻","clinking_glasses":"🥂","tumbler_glass":"🥃","pouring_liquid":"🫗","cup_with_straw":"🥤","bubble_tea":"🧋","beverage_box":"🧃","mate":"🧉","ice_cube":"🧊","chopsticks":"🥢","plate_with_cutlery":"🍽️","fork_and_knife":"🍴","spoon":"🥄","hocho":"🔪","knife":"🔪","jar":"🫙","amphora":"🏺","earth_africa":"🌍","earth_americas":"🌎","earth_asia":"🌏","globe_with_meridians":"🌐","world_map":"🗺️","japan":"🗾","compass":"🧭","mountain_snow":"🏔️","mountain":"⛰️","volcano":"🌋","mount_fuji":"🗻","camping":"🏕️","beach_umbrella":"🏖️","desert":"🏜️","desert_island":"🏝️","national_park":"🏞️","stadium":"🏟️","classical_building":"🏛️","building_construction":"🏗️","bricks":"🧱","rock":"🪨","wood":"🪵","hut":"🛖","houses":"🏘️","derelict_house":"🏚️","house":"🏠","house_with_garden":"🏡","office":"🏢","post_office":"🏣","european_post_office":"🏤","hospital":"🏥","bank":"🏦","hotel":"🏨","love_hotel":"🏩","convenience_store":"🏪","school":"🏫","department_store":"🏬","factory":"🏭","japanese_castle":"🏯","european_castle":"🏰","wedding":"💒","tokyo_tower":"🗼","statue_of_liberty":"🗽","church":"⛪","mosque":"🕌","hindu_temple":"🛕","synagogue":"🕍","shinto_shrine":"⛩️","kaaba":"🕋","fountain":"⛲","tent":"⛺","foggy":"🌁","night_with_stars":"🌃","cityscape":"🏙️","sunrise_over_mountains":"🌄","sunrise":"🌅","city_sunset":"🌆","city_sunrise":"🌇","bridge_at_night":"🌉","hotsprings":"♨️","carousel_horse":"🎠","playground_slide":"🛝","ferris_wheel":"🎡","roller_coaster":"🎢","barber":"💈","circus_tent":"🎪","steam_locomotive":"🚂","railway_car":"🚃","bullettrain_side":"🚄","bullettrain_front":"🚅","train2":"🚆","metro":"🚇","light_rail":"🚈","station":"🚉","tram":"🚊","monorail":"🚝","mountain_railway":"🚞","train":"🚋","bus":"🚌","oncoming_bus":"🚍","trolleybus":"🚎","minibus":"🚐","ambulance":"🚑","fire_engine":"🚒","police_car":"🚓","oncoming_police_car":"🚔","taxi":"🚕","oncoming_taxi":"🚖","car":"🚗","red_car":"🚗","oncoming_automobile":"🚘","blue_car":"🚙","pickup_truck":"🛻","truck":"🚚","articulated_lorry":"🚛","tractor":"🚜","racing_car":"🏎️","motorcycle":"🏍️","motor_scooter":"🛵","manual_wheelchair":"🦽","motorized_wheelchair":"🦼","auto_rickshaw":"🛺","bike":"🚲","kick_scooter":"🛴","skateboard":"🛹","roller_skate":"🛼","busstop":"🚏","motorway":"🛣️","railway_track":"🛤️","oil_drum":"🛢️","fuelpump":"⛽","wheel":"🛞","rotating_light":"🚨","traffic_light":"🚥","vertical_traffic_light":"🚦","stop_sign":"🛑","construction":"🚧","anchor":"⚓","ring_buoy":"🛟","boat":"⛵","sailboat":"⛵","canoe":"🛶","speedboat":"🚤","passenger_ship":"🛳️","ferry":"⛴️","motor_boat":"🛥️","ship":"🚢","airplane":"✈️","small_airplane":"🛩️","flight_departure":"🛫","flight_arrival":"🛬","parachute":"🪂","seat":"💺","helicopter":"🚁","suspension_railway":"🚟","mountain_cableway":"🚠","aerial_tramway":"🚡","artificial_satellite":"🛰️","rocket":"🚀","flying_saucer":"🛸","bellhop_bell":"🛎️","luggage":"🧳","hourglass":"⌛","hourglass_flowing_sand":"⏳","watch":"⌚","alarm_clock":"⏰","stopwatch":"⏱️","timer_clock":"⏲️","mantelpiece_clock":"🕰️","clock12":"🕛","clock1230":"🕧","clock1":"🕐","clock130":"🕜","clock2":"🕑","clock230":"🕝","clock3":"🕒","clock330":"🕞","clock4":"🕓","clock430":"🕟","clock5":"🕔","clock530":"🕠","clock6":"🕕","clock630":"🕡","clock7":"🕖","clock730":"🕢","clock8":"🕗","clock830":"🕣","clock9":"🕘","clock930":"🕤","clock10":"🕙","clock1030":"🕥","clock11":"🕚","clock1130":"🕦","new_moon":"🌑","waxing_crescent_moon":"🌒","first_quarter_moon":"🌓","moon":"🌔","waxing_gibbous_moon":"🌔","full_moon":"🌕","waning_gibbous_moon":"🌖","last_quarter_moon":"🌗","waning_crescent_moon":"🌘","crescent_moon":"🌙","new_moon_with_face":"🌚","first_quarter_moon_with_face":"🌛","last_quarter_moon_with_face":"🌜","thermometer":"🌡️","sunny":"☀️","full_moon_with_face":"🌝","sun_with_face":"🌞","ringed_planet":"🪐","star":"⭐","star2":"🌟","stars":"🌠","milky_way":"🌌","cloud":"☁️","partly_sunny":"⛅","cloud_with_lightning_and_rain":"⛈️","sun_behind_small_cloud":"🌤️","sun_behind_large_cloud":"🌥️","sun_behind_rain_cloud":"🌦️","cloud_with_rain":"🌧️","cloud_with_snow":"🌨️","cloud_with_lightning":"🌩️","tornado":"🌪️","fog":"🌫️","wind_face":"🌬️","cyclone":"🌀","rainbow":"🌈","closed_umbrella":"🌂","open_umbrella":"☂️","umbrella":"☔","parasol_on_ground":"⛱️","zap":"⚡","snowflake":"❄️","snowman_with_snow":"☃️","snowman":"⛄","comet":"☄️","fire":"🔥","droplet":"💧","ocean":"🌊","jack_o_lantern":"🎃","christmas_tree":"🎄","fireworks":"🎆","sparkler":"🎇","firecracker":"🧨","sparkles":"✨","balloon":"🎈","tada":"🎉","confetti_ball":"🎊","tanabata_tree":"🎋","bamboo":"🎍","dolls":"🎎","flags":"🎏","wind_chime":"🎐","rice_scene":"🎑","red_envelope":"🧧","ribbon":"🎀","gift":"🎁","reminder_ribbon":"🎗️","tickets":"🎟️","ticket":"🎫","medal_military":"🎖️","trophy":"🏆","medal_sports":"🏅","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","soccer":"⚽","baseball":"⚾","softball":"🥎","basketball":"🏀","volleyball":"🏐","football":"🏈","rugby_football":"🏉","tennis":"🎾","flying_disc":"🥏","bowling":"🎳","cricket_game":"🏏","field_hockey":"🏑","ice_hockey":"🏒","lacrosse":"🥍","ping_pong":"🏓","badminton":"🏸","boxing_glove":"🥊","martial_arts_uniform":"🥋","goal_net":"🥅","golf":"⛳","ice_skate":"⛸️","fishing_pole_and_fish":"🎣","diving_mask":"🤿","running_shirt_with_sash":"🎽","ski":"🎿","sled":"🛷","curling_stone":"🥌","dart":"🎯","yo_yo":"🪀","kite":"🪁","gun":"🔫","8ball":"🎱","crystal_ball":"🔮","magic_wand":"🪄","video_game":"🎮","joystick":"🕹️","slot_machine":"🎰","game_die":"🎲","jigsaw":"🧩","teddy_bear":"🧸","pinata":"🪅","mirror_ball":"🪩","nesting_dolls":"🪆","spades":"♠️","hearts":"♥️","diamonds":"♦️","clubs":"♣️","chess_pawn":"♟️","black_joker":"🃏","mahjong":"🀄","flower_playing_cards":"🎴","performing_arts":"🎭","framed_picture":"🖼️","art":"🎨","thread":"🧵","sewing_needle":"🪡","yarn":"🧶","knot":"🪢","eyeglasses":"👓","dark_sunglasses":"🕶️","goggles":"🥽","lab_coat":"🥼","safety_vest":"🦺","necktie":"👔","shirt":"👕","tshirt":"👕","jeans":"👖","scarf":"🧣","gloves":"🧤","coat":"🧥","socks":"🧦","dress":"👗","kimono":"👘","sari":"🥻","one_piece_swimsuit":"🩱","swim_brief":"🩲","shorts":"🩳","bikini":"👙","womans_clothes":"👚","folding_hand_fan":"🪭","purse":"👛","handbag":"👜","pouch":"👝","shopping":"🛍️","school_satchel":"🎒","thong_sandal":"🩴","mans_shoe":"👞","shoe":"👞","athletic_shoe":"👟","hiking_boot":"🥾","flat_shoe":"🥿","high_heel":"👠","sandal":"👡","ballet_shoes":"🩰","boot":"👢","hair_pick":"🪮","crown":"👑","womans_hat":"👒","tophat":"🎩","mortar_board":"🎓","billed_cap":"🧢","military_helmet":"🪖","rescue_worker_helmet":"⛑️","prayer_beads":"📿","lipstick":"💄","ring":"💍","gem":"💎","mute":"🔇","speaker":"🔈","sound":"🔉","loud_sound":"🔊","loudspeaker":"📢","mega":"📣","postal_horn":"📯","bell":"🔔","no_bell":"🔕","musical_score":"🎼","musical_note":"🎵","notes":"🎶","studio_microphone":"🎙️","level_slider":"🎚️","control_knobs":"🎛️","microphone":"🎤","headphones":"🎧","radio":"📻","saxophone":"🎷","accordion":"🪗","guitar":"🎸","musical_keyboard":"🎹","trumpet":"🎺","violin":"🎻","banjo":"🪕","drum":"🥁","long_drum":"🪘","maracas":"🪇","flute":"🪈","iphone":"📱","calling":"📲","phone":"☎️","telephone":"☎️","telephone_receiver":"📞","pager":"📟","fax":"📠","battery":"🔋","low_battery":"🪫","electric_plug":"🔌","computer":"💻","desktop_computer":"🖥️","printer":"🖨️","keyboard":"⌨️","computer_mouse":"🖱️","trackball":"🖲️","minidisc":"💽","floppy_disk":"💾","cd":"💿","dvd":"📀","abacus":"🧮","movie_camera":"🎥","film_strip":"🎞️","film_projector":"📽️","clapper":"🎬","tv":"📺","camera":"📷","camera_flash":"📸","video_camera":"📹","vhs":"📼","mag":"🔍","mag_right":"🔎","candle":"🕯️","bulb":"💡","flashlight":"🔦","izakaya_lantern":"🏮","lantern":"🏮","diya_lamp":"🪔","notebook_with_decorative_cover":"📔","closed_book":"📕","book":"📖","open_book":"📖","green_book":"📗","blue_book":"📘","orange_book":"📙","books":"📚","notebook":"📓","ledger":"📒","page_with_curl":"📃","scroll":"📜","page_facing_up":"📄","newspaper":"📰","newspaper_roll":"🗞️","bookmark_tabs":"📑","bookmark":"🔖","label":"🏷️","moneybag":"💰","coin":"🪙","yen":"💴","dollar":"💵","euro":"💶","pound":"💷","money_with_wings":"💸","credit_card":"💳","receipt":"🧾","chart":"💹","envelope":"✉️","email":"📧","e_mail":"📧","incoming_envelope":"📨","envelope_with_arrow":"📩","outbox_tray":"📤","inbox_tray":"📥","package":"📦","mailbox":"📫","mailbox_closed":"📪","mailbox_with_mail":"📬","mailbox_with_no_mail":"📭","postbox":"📮","ballot_box":"🗳️","pencil2":"✏️","black_nib":"✒️","fountain_pen":"🖋️","pen":"🖊️","paintbrush":"🖌️","crayon":"🖍️","memo":"📝","pencil":"📝","briefcase":"💼","file_folder":"📁","open_file_folder":"📂","card_index_dividers":"🗂️","date":"📅","calendar":"📆","spiral_notepad":"🗒️","spiral_calendar":"🗓️","card_index":"📇","chart_with_upwards_trend":"📈","chart_with_downwards_trend":"📉","bar_chart":"📊","clipboard":"📋","pushpin":"📌","round_pushpin":"📍","paperclip":"📎","paperclips":"🖇️","straight_ruler":"📏","triangular_ruler":"📐","scissors":"✂️","card_file_box":"🗃️","file_cabinet":"🗄️","wastebasket":"🗑️","lock":"🔒","unlock":"🔓","lock_with_ink_pen":"🔏","closed_lock_with_key":"🔐","key":"🔑","old_key":"🗝️","hammer":"🔨","axe":"🪓","pick":"⛏️","hammer_and_pick":"⚒️","hammer_and_wrench":"🛠️","dagger":"🗡️","crossed_swords":"⚔️","bomb":"💣","boomerang":"🪃","bow_and_arrow":"🏹","shield":"🛡️","carpentry_saw":"🪚","wrench":"🔧","screwdriver":"🪛","nut_and_bolt":"🔩","gear":"⚙️","clamp":"🗜️","balance_scale":"⚖️","probing_cane":"🦯","link":"🔗","chains":"⛓️","hook":"🪝","toolbox":"🧰","magnet":"🧲","ladder":"🪜","alembic":"⚗️","test_tube":"🧪","petri_dish":"🧫","dna":"🧬","microscope":"🔬","telescope":"🔭","satellite":"📡","syringe":"💉","drop_of_blood":"🩸","pill":"💊","adhesive_bandage":"🩹","crutch":"🩼","stethoscope":"🩺","x_ray":"🩻","door":"🚪","elevator":"🛗","mirror":"🪞","window":"🪟","bed":"🛏️","couch_and_lamp":"🛋️","chair":"🪑","toilet":"🚽","plunger":"🪠","shower":"🚿","bathtub":"🛁","mouse_trap":"🪤","razor":"🪒","lotion_bottle":"🧴","safety_pin":"🧷","broom":"🧹","basket":"🧺","roll_of_paper":"🧻","bucket":"🪣","soap":"🧼","bubbles":"🫧","toothbrush":"🪥","sponge":"🧽","fire_extinguisher":"🧯","shopping_cart":"🛒","smoking":"🚬","coffin":"⚰️","headstone":"🪦","funeral_urn":"⚱️","nazar_amulet":"🧿","hamsa":"🪬","moyai":"🗿","placard":"🪧","identification_card":"🪪","atm":"🏧","put_litter_in_its_place":"🚮","potable_water":"🚰","wheelchair":"♿","mens":"🚹","womens":"🚺","restroom":"🚻","baby_symbol":"🚼","wc":"🚾","passport_control":"🛂","customs":"🛃","baggage_claim":"🛄","left_luggage":"🛅","warning":"⚠️","children_crossing":"🚸","no_entry":"⛔","no_entry_sign":"🚫","no_bicycles":"🚳","no_smoking":"🚭","do_not_litter":"🚯","non_potable_water":"🚱","no_pedestrians":"🚷","no_mobile_phones":"📵","underage":"🔞","radioactive":"☢️","biohazard":"☣️","arrow_up":"⬆️","arrow_upper_right":"↗️","arrow_right":"➡️","arrow_lower_right":"↘️","arrow_down":"⬇️","arrow_lower_left":"↙️","arrow_left":"⬅️","arrow_upper_left":"↖️","arrow_up_down":"↕️","left_right_arrow":"↔️","leftwards_arrow_with_hook":"↩️","arrow_right_hook":"↪️","arrow_heading_up":"⤴️","arrow_heading_down":"⤵️","arrows_clockwise":"🔃","arrows_counterclockwise":"🔄","back":"🔙","end":"🔚","on":"🔛","soon":"🔜","top":"🔝","place_of_worship":"🛐","atom_symbol":"⚛️","om":"🕉️","star_of_david":"✡️","wheel_of_dharma":"☸️","yin_yang":"☯️","latin_cross":"✝️","orthodox_cross":"☦️","star_and_crescent":"☪️","peace_symbol":"☮️","menorah":"🕎","six_pointed_star":"🔯","khanda":"🪯","aries":"♈","taurus":"♉","gemini":"♊","cancer":"♋","leo":"♌","virgo":"♍","libra":"♎","scorpius":"♏","sagittarius":"♐","capricorn":"♑","aquarius":"♒","pisces":"♓","ophiuchus":"⛎","twisted_rightwards_arrows":"🔀","repeat":"🔁","repeat_one":"🔂","arrow_forward":"▶️","fast_forward":"⏩","next_track_button":"⏭️","play_or_pause_button":"⏯️","arrow_backward":"◀️","rewind":"⏪","previous_track_button":"⏮️","arrow_up_small":"🔼","arrow_double_up":"⏫","arrow_down_small":"🔽","arrow_double_down":"⏬","pause_button":"⏸️","stop_button":"⏹️","record_button":"⏺️","eject_button":"⏏️","cinema":"🎦","low_brightness":"🔅","high_brightness":"🔆","signal_strength":"📶","wireless":"🛜","vibration_mode":"📳","mobile_phone_off":"📴","female_sign":"♀️","male_sign":"♂️","transgender_symbol":"⚧️","heavy_multiplication_x":"✖️","heavy_plus_sign":"➕","heavy_minus_sign":"➖","heavy_division_sign":"➗","heavy_equals_sign":"🟰","infinity":"♾️","bangbang":"‼️","interrobang":"⁉️","question":"❓","grey_question":"❔","grey_exclamation":"❕","exclamation":"❗","heavy_exclamation_mark":"❗","wavy_dash":"〰️","currency_exchange":"💱","heavy_dollar_sign":"💲","medical_symbol":"⚕️","recycle":"♻️","fleur_de_lis":"⚜️","trident":"🔱","name_badge":"📛","beginner":"🔰","o":"⭕","white_check_mark":"✅","ballot_box_with_check":"☑️","heavy_check_mark":"✔️","x":"❌","negative_squared_cross_mark":"❎","curly_loop":"➰","loop":"➿","part_alternation_mark":"〽️","eight_spoked_asterisk":"✳️","eight_pointed_black_star":"✴️","sparkle":"❇️","copyright":"©️","registered":"®️","tm":"™️","hash":"#️⃣","asterisk":"*️⃣","zero":"0️⃣","one":"1️⃣","two":"2️⃣","three":"3️⃣","four":"4️⃣","five":"5️⃣","six":"6️⃣","seven":"7️⃣","eight":"8️⃣","nine":"9️⃣","keycap_ten":"🔟","capital_abcd":"🔠","abcd":"🔡","symbols":"🔣","abc":"🔤","a":"🅰️","ab":"🆎","b":"🅱️","cl":"🆑","cool":"🆒","free":"🆓","information_source":"ℹ️","id":"🆔","m":"Ⓜ️","new":"🆕","ng":"🆖","o2":"🅾️","ok":"🆗","parking":"🅿️","sos":"🆘","up":"🆙","vs":"🆚","koko":"🈁","sa":"🈂️","u6708":"🈷️","u6709":"🈶","u6307":"🈯","ideograph_advantage":"🉐","u5272":"🈹","u7121":"🈚","u7981":"🈲","accept":"🉑","u7533":"🈸","u5408":"🈴","u7a7a":"🈳","congratulations":"㊗️","secret":"㊙️","u55b6":"🈺","u6e80":"🈵","red_circle":"🔴","orange_circle":"🟠","yellow_circle":"🟡","green_circle":"🟢","large_blue_circle":"🔵","purple_circle":"🟣","brown_circle":"🟤","black_circle":"⚫","white_circle":"⚪","red_square":"🟥","orange_square":"🟧","yellow_square":"🟨","green_square":"🟩","blue_square":"🟦","purple_square":"🟪","brown_square":"🟫","black_large_square":"⬛","white_large_square":"⬜","black_medium_square":"◼️","white_medium_square":"◻️","black_medium_small_square":"◾","white_medium_small_square":"◽","black_small_square":"▪️","white_small_square":"▫️","large_orange_diamond":"🔶","large_blue_diamond":"🔷","small_orange_diamond":"🔸","small_blue_diamond":"🔹","small_red_triangle":"🔺","small_red_triangle_down":"🔻","diamond_shape_with_a_dot_inside":"💠","radio_button":"🔘","white_square_button":"🔳","black_square_button":"🔲","checkered_flag":"🏁","triangular_flag_on_post":"🚩","crossed_flags":"🎌","black_flag":"🏴","white_flag":"🏳️","rainbow_flag":"🏳️‍🌈","transgender_flag":"🏳️‍⚧️","pirate_flag":"🏴‍☠️","ascension_island":"🇦🇨","andorra":"🇦🇩","united_arab_emirates":"🇦🇪","afghanistan":"🇦🇫","antigua_barbuda":"🇦🇬","anguilla":"🇦🇮","albania":"🇦🇱","armenia":"🇦🇲","angola":"🇦🇴","antarctica":"🇦🇶","argentina":"🇦🇷","american_samoa":"🇦🇸","austria":"🇦🇹","australia":"🇦🇺","aruba":"🇦🇼","aland_islands":"🇦🇽","azerbaijan":"🇦🇿","bosnia_herzegovina":"🇧🇦","barbados":"🇧🇧","bangladesh":"🇧🇩","belgium":"🇧🇪","burkina_faso":"🇧🇫","bulgaria":"🇧🇬","bahrain":"🇧🇭","burundi":"🇧🇮","benin":"🇧🇯","st_barthelemy":"🇧🇱","bermuda":"🇧🇲","brunei":"🇧🇳","bolivia":"🇧🇴","caribbean_netherlands":"🇧🇶","brazil":"🇧🇷","bahamas":"🇧🇸","bhutan":"🇧🇹","bouvet_island":"🇧🇻","botswana":"🇧🇼","belarus":"🇧🇾","belize":"🇧🇿","canada":"🇨🇦","cocos_islands":"🇨🇨","congo_kinshasa":"🇨🇩","central_african_republic":"🇨🇫","congo_brazzaville":"🇨🇬","switzerland":"🇨🇭","cote_divoire":"🇨🇮","cook_islands":"🇨🇰","chile":"🇨🇱","cameroon":"🇨🇲","cn":"🇨🇳","colombia":"🇨🇴","clipperton_island":"🇨🇵","costa_rica":"🇨🇷","cuba":"🇨🇺","cape_verde":"🇨🇻","curacao":"🇨🇼","christmas_island":"🇨🇽","cyprus":"🇨🇾","czech_republic":"🇨🇿","de":"🇩🇪","diego_garcia":"🇩🇬","djibouti":"🇩🇯","denmark":"🇩🇰","dominica":"🇩🇲","dominican_republic":"🇩🇴","algeria":"🇩🇿","ceuta_melilla":"🇪🇦","ecuador":"🇪🇨","estonia":"🇪🇪","egypt":"🇪🇬","western_sahara":"🇪🇭","eritrea":"🇪🇷","es":"🇪🇸","ethiopia":"🇪🇹","eu":"🇪🇺","european_union":"🇪🇺","finland":"🇫🇮","fiji":"🇫🇯","falkland_islands":"🇫🇰","micronesia":"🇫🇲","faroe_islands":"🇫🇴","fr":"🇫🇷","gabon":"🇬🇦","gb":"🇬🇧","uk":"🇬🇧","grenada":"🇬🇩","georgia":"🇬🇪","french_guiana":"🇬🇫","guernsey":"🇬🇬","ghana":"🇬🇭","gibraltar":"🇬🇮","greenland":"🇬🇱","gambia":"🇬🇲","guinea":"🇬🇳","guadeloupe":"🇬🇵","equatorial_guinea":"🇬🇶","greece":"🇬🇷","south_georgia_south_sandwich_islands":"🇬🇸","guatemala":"🇬🇹","guam":"🇬🇺","guinea_bissau":"🇬🇼","guyana":"🇬🇾","hong_kong":"🇭🇰","heard_mcdonald_islands":"🇭🇲","honduras":"🇭🇳","croatia":"🇭🇷","haiti":"🇭🇹","hungary":"🇭🇺","canary_islands":"🇮🇨","indonesia":"🇮🇩","ireland":"🇮🇪","israel":"🇮🇱","isle_of_man":"🇮🇲","india":"🇮🇳","british_indian_ocean_territory":"🇮🇴","iraq":"🇮🇶","iran":"🇮🇷","iceland":"🇮🇸","it":"🇮🇹","jersey":"🇯🇪","jamaica":"🇯🇲","jordan":"🇯🇴","jp":"🇯🇵","kenya":"🇰🇪","kyrgyzstan":"🇰🇬","cambodia":"🇰🇭","kiribati":"🇰🇮","comoros":"🇰🇲","st_kitts_nevis":"🇰🇳","north_korea":"🇰🇵","kr":"🇰🇷","kuwait":"🇰🇼","cayman_islands":"🇰🇾","kazakhstan":"🇰🇿","laos":"🇱🇦","lebanon":"🇱🇧","st_lucia":"🇱🇨","liechtenstein":"🇱🇮","sri_lanka":"🇱🇰","liberia":"🇱🇷","lesotho":"🇱🇸","lithuania":"🇱🇹","luxembourg":"🇱🇺","latvia":"🇱🇻","libya":"🇱🇾","morocco":"🇲🇦","monaco":"🇲🇨","moldova":"🇲🇩","montenegro":"🇲🇪","st_martin":"🇲🇫","madagascar":"🇲🇬","marshall_islands":"🇲🇭","macedonia":"🇲🇰","mali":"🇲🇱","myanmar":"🇲🇲","mongolia":"🇲🇳","macau":"🇲🇴","northern_mariana_islands":"🇲🇵","martinique":"🇲🇶","mauritania":"🇲🇷","montserrat":"🇲🇸","malta":"🇲🇹","mauritius":"🇲🇺","maldives":"🇲🇻","malawi":"🇲🇼","mexico":"🇲🇽","malaysia":"🇲🇾","mozambique":"🇲🇿","namibia":"🇳🇦","new_caledonia":"🇳🇨","niger":"🇳🇪","norfolk_island":"🇳🇫","nigeria":"🇳🇬","nicaragua":"🇳🇮","netherlands":"🇳🇱","norway":"🇳🇴","nepal":"🇳🇵","nauru":"🇳🇷","niue":"🇳🇺","new_zealand":"🇳🇿","oman":"🇴🇲","panama":"🇵🇦","peru":"🇵🇪","french_polynesia":"🇵🇫","papua_new_guinea":"🇵🇬","philippines":"🇵🇭","pakistan":"🇵🇰","poland":"🇵🇱","st_pierre_miquelon":"🇵🇲","pitcairn_islands":"🇵🇳","puerto_rico":"🇵🇷","palestinian_territories":"🇵🇸","portugal":"🇵🇹","palau":"🇵🇼","paraguay":"🇵🇾","qatar":"🇶🇦","reunion":"🇷🇪","romania":"🇷🇴","serbia":"🇷🇸","ru":"🇷🇺","rwanda":"🇷🇼","saudi_arabia":"🇸🇦","solomon_islands":"🇸🇧","seychelles":"🇸🇨","sudan":"🇸🇩","sweden":"🇸🇪","singapore":"🇸🇬","st_helena":"🇸🇭","slovenia":"🇸🇮","svalbard_jan_mayen":"🇸🇯","slovakia":"🇸🇰","sierra_leone":"🇸🇱","san_marino":"🇸🇲","senegal":"🇸🇳","somalia":"🇸🇴","suriname":"🇸🇷","south_sudan":"🇸🇸","sao_tome_principe":"🇸🇹","el_salvador":"🇸🇻","sint_maarten":"🇸🇽","syria":"🇸🇾","swaziland":"🇸🇿","tristan_da_cunha":"🇹🇦","turks_caicos_islands":"🇹🇨","chad":"🇹🇩","french_southern_territories":"🇹🇫","togo":"🇹🇬","thailand":"🇹🇭","tajikistan":"🇹🇯","tokelau":"🇹🇰","timor_leste":"🇹🇱","turkmenistan":"🇹🇲","tunisia":"🇹🇳","tonga":"🇹🇴","tr":"🇹🇷","trinidad_tobago":"🇹🇹","tuvalu":"🇹🇻","taiwan":"🇹🇼","tanzania":"🇹🇿","ukraine":"🇺🇦","uganda":"🇺🇬","us_outlying_islands":"🇺🇲","united_nations":"🇺🇳","us":"🇺🇸","uruguay":"🇺🇾","uzbekistan":"🇺🇿","vatican_city":"🇻🇦","st_vincent_grenadines":"🇻🇨","venezuela":"🇻🇪","british_virgin_islands":"🇻🇬","us_virgin_islands":"🇻🇮","vietnam":"🇻🇳","vanuatu":"🇻🇺","wallis_futuna":"🇼🇫","samoa":"🇼🇸","kosovo":"🇽🇰","yemen":"🇾🇪","mayotte":"🇾🇹","south_africa":"🇿🇦","zambia":"🇿🇲","zimbabwe":"🇿🇼","england":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","scotland":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","wales":"🏴󠁧󠁢󠁷󠁬󠁳󠁿"}');
          const Sl = Object.keys(xl)
            , Dl = {
              id: "emoji",
              match: /(^|\s):([-+\w:?]{2,}):?$/,
              search(e, n) {
                  n(Pl(e = e.replace(/:$/, ""), Sl))
              },
              template: ([e,n])=>`<span class="emoji">${String(xl[n])}</span> ${e}`,
              replace: ([,e])=>"$1" + String(xl[e]),
              index: 2
          }
            , Zl = {
              id: "nicks",
              match: /(^|\s)(@([a-zA-Z_[\]\\^{}|`@][a-zA-Z0-9_[\]\\^{}|`-]*)?)$/,
              search(e, n) {
                  "@" === (e = e.slice(1))[0] ? n(Hl(e.slice(1), !0).map((e=>["@" + e[0], "@" + e[1]]))) : n(Hl(e, !0))
              },
              template: ([e])=>e,
              replace: ([,e])=>"$1" + Tl(e),
              index: 2
          }
            , Ul = {
              id: "chans",
              match: /(^|\s)((?:#|\+|&|![A-Z0-9]{5})(?:[^\s]+)?)$/,
              search(e, n) {
                  n(function(e) {
                      const n = [];
                      if (Z.h.state.activeChannel)
                          for (const a of Z.h.state.activeChannel.network.channels)
                              "channel" === a.type && a.name[0] === e[0] && n.push(a.name);
                      return Pl(e, n)
                  }(e))
              },
              template: ([e])=>e,
              replace: ([,e])=>"$1" + e,
              index: 2
          }
            , Ml = {
              id: "commands",
              match: /^\/(\w*)$/,
              search(e, n) {
                  n(Pl("/" + e, function() {
                      let e = t.Z.commands.slice();
                      return Z.h.state.settings.searchEnabled || (e = e.filter((e=>"/search" !== e))),
                      e
                  }()))
              },
              template: ([e])=>e,
              replace: ([,e])=>e,
              index: 1
          }
            , ql = {
              id: "foreground-colors",
              match: /\x03(\d{0,2}|[A-Za-z ]{0,10})$/,
              search(e, n) {
                  e = e.toLowerCase(),
                  n(t.Z.colorCodeMap.filter((n=>Cl().test(e, n[0]) || Cl().test(e, n[1]))).map((n=>Cl().test(e, n[1]) ? [n[0], Cl().match(e, n[1], {
                      pre: "<b>",
                      post: "</b>"
                  }).rendered] : n)))
              },
              template: e=>`<span class="irc-fg${parseInt(e[0], 10)}">${e[1]}</span>`,
              replace: e=>"" + e[0],
              index: 1
          }
            , jl = {
              id: "background-colors",
              match: /\x03(\d{2}),(\d{0,2}|[A-Za-z ]{0,10})$/,
              search(e, n, a) {
                  e = e.toLowerCase(),
                  n(t.Z.colorCodeMap.filter((n=>Cl().test(e, n[0]) || Cl().test(e, n[1]))).map((n=>Cl().test(e, n[1]) ? [n[0], Cl().match(e, n[1], {
                      pre: "<b>",
                      post: "</b>"
                  }).rendered] : n)).map((e=>e.concat(a[1]))))
              },
              template: e=>`<span class="irc-fg${parseInt(e[2], 10)} irc-bg irc-bg${parseInt(e[0], 10)}">${e[1]}</span>`,
              replace: e=>"$1," + e[0],
              index: 2
          };
          function Tl(e, n=1) {
              return Z.h.state.settings.nickPostfix ? n > 0 && /\s/.test(Z.h.state.activeChannel?.channel.pendingMessage || "") ? e + " " : e + Z.h.state.settings.nickPostfix : e
          }
          function Pl(e, n) {
              return Cl().filter(e, n, {
                  pre: "<b>",
                  post: "</b>"
              }).map((e=>[e.string, e.original]))
          }
          function Hl(e, n) {
              const a = function() {
                  if (!Z.h.state.activeChannel)
                      return [];
                  if (Z.h.state.activeChannel.channel.users.length > 0)
                      return Z.h.state.activeChannel.channel.users.slice().sort(((e,n)=>n.lastMessage - e.lastMessage)).map((e=>e.nick));
                  const e = Z.h.state.activeChannel.network.nick
                    , n = Z.h.state.activeChannel.channel.name;
                  return e !== n && "query" === Z.h.state.activeChannel.channel.type ? [n, e] : [e]
              }();
              return e = e.toLowerCase(),
              n ? Pl(e, a) : a.filter((n=>!n.toLowerCase().indexOf(e)))
          }
          var Ll = a(3805)
            , Ol = a(5555);
          const Il = {
              "mod+k": "",
              "mod+b": "",
              "mod+u": "",
              "mod+i": "",
              "mod+o": "",
              "mod+s": "",
              "mod+m": ""
          }
            , Al = {
              '"': '"',
              "'": "'",
              "(": ")",
              "<": ">",
              "[": "]",
              "{": "}",
              "*": "*",
              "`": "`",
              "~": "~",
              _: "_"
          };
          var El = (0,
          o.aZ)({
              name: "ChatInput",
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  }
              },
              setup(e) {
                  const n = (0,
                  Z.oR)()
                    , a = (0,
                  _.iH)()
                    , t = (0,
                  _.iH)()
                    , s = (0,
                  _.iH)()
                    , i = ()=>{
                      (0,
                      o.Y3)((()=>{
                          if (!a.value)
                              return;
                          const e = window.getComputedStyle(a.value)
                            , n = parseFloat(e.lineHeight) || 1;
                          a.value.style.height = "",
                          a.value.style.height = Math.ceil(a.value.scrollHeight / n) * n + "px"
                      }
                      ))
                  }
                    , r = ()=>{
                      a.value?.blur()
                  }
                  ;
                  return (0,
                  o.YP)((()=>e.channel.id), (()=>{
                      s.value && s.value.hide()
                  }
                  )),
                  (0,
                  o.YP)((()=>e.channel.pendingMessage), (()=>{
                      i()
                  }
                  )),
                  (0,
                  o.bv)((()=>{
                      if (wi.Z.on("escapekey", r),
                      n.state.settings.autocomplete) {
                          if (!a.value)
                              throw new Error("ChatInput autocomplete: input element is not available");
                          s.value = function(e) {
                              let n = 0
                                , a = ""
                                , t = [];
                              e.addEventListener("input", (e=>{
                                  "autocomplete" !== e.detail && (n = 0,
                                  t = [],
                                  a = "")
                              }
                              )),
                              kl()(e).bind("tab", (s=>{
                                  if (Z.h.state.isAutoCompleting)
                                      return;
                                  s.preventDefault();
                                  const o = e.value;
                                  if (0 === n) {
                                      if (a = o.substring(0, e.selectionStart).split(/\s/).pop() || "",
                                      0 === a.length)
                                          return;
                                      if (t = Hl(a, !1),
                                      0 === t.length)
                                          return
                                  }
                                  const i = e.selectionStart - a.length
                                    , r = Tl(String(t[n % t.length]), i)
                                    , l = o.substring(e.selectionStart);
                                  e.value = o.substr(0, i) + r + l,
                                  e.selectionStart -= l.length,
                                  e.selectionEnd = e.selectionStart,
                                  e.dispatchEvent(new CustomEvent("input",{
                                      detail: "autocomplete"
                                  })),
                                  a = r,
                                  n++
                              }
                              ), "keydown");
                              const s = [Dl, Zl, Ul, Ml, ql, jl]
                                , o = new _l.V(e)
                                , i = new vl.Textcomplete(o,s,{
                                  dropdown: {
                                      className: "textcomplete-menu",
                                      placement: "top"
                                  }
                              });
                              return i.on("show", (()=>{
                                  Z.h.commit("isAutoCompleting", !0)
                              }
                              )),
                              i.on("hidden", (()=>{
                                  Z.h.commit("isAutoCompleting", !1)
                              }
                              )),
                              {
                                  hide() {
                                      i.hide()
                                  },
                                  destroy() {
                                      i.destroy(),
                                      Z.h.commit("isAutoCompleting", !1)
                                  }
                              }
                          }(a.value)
                      }
                      const t = kl()(a.value);
                      t.bind(Object.keys(Il), (function(e, n) {
                          const a = Il[n];
                          if (e.target)
                              return (0,
                              bl.wrapCursor)(e.target, a, e.target.selectionStart === e.target.selectionEnd ? "" : a),
                              !1
                      }
                      )),
                      t.bind(Object.keys(Al), (function(e, n) {
                          if (e.target?.selectionStart !== e.target.selectionEnd)
                              return (0,
                              bl.wrapCursor)(e.target, n, Al[n]),
                              !1
                      }
                      )),
                      t.bind(["up", "down"], ((t,s)=>{
                          if (n.state.isAutoCompleting || t.target.selectionStart !== t.target.selectionEnd || !a.value)
                              return;
                          const o = (a.value.value.slice(void 0, a.value.selectionStart).match(/\n/g) || []).length
                            , r = (a.value.value.match(/\n/g) || []).length
                            , {channel: l} = e;
                          if (0 === l.inputHistoryPosition && (l.inputHistory[l.inputHistoryPosition] = l.pendingMessage),
                          "up" === s && 0 === o) {
                              if (!(l.inputHistoryPosition < l.inputHistory.length - 1))
                                  return;
                              l.inputHistoryPosition++
                          } else {
                              if (!("down" === s && l.inputHistoryPosition > 0 && o === r))
                                  return;
                              l.inputHistoryPosition--
                          }
                          return l.pendingMessage = l.inputHistory[l.inputHistoryPosition],
                          a.value.value = l.pendingMessage,
                          i(),
                          !1
                      }
                      )),
                      n.state.serverConfiguration?.fileUpload && Ol.Z.mounted()
                  }
                  )),
                  (0,
                  o.Ah)((()=>{
                      wi.Z.off("escapekey", r),
                      s.value && (s.value.destroy(),
                      s.value = void 0),
                      Ol.Z.unmounted(),
                      Ol.Z.abort()
                  }
                  )),
                  {
                      store: n,
                      input: a,
                      uploadInput: t,
                      onUploadInputChange: ()=>{
                          if (!t.value || !t.value.files)
                              return;
                          const e = Array.from(t.value.files);
                          Ol.Z.triggerUpload(e),
                          t.value.value = ""
                      }
                      ,
                      openFileUpload: ()=>{
                          t.value?.click()
                      }
                      ,
                      blurInput: r,
                      onBlur: ()=>{
                          s.value && s.value.hide()
                      }
                      ,
                      setInputSize: i,
                      upload: Ol.Z,
                      getInputPlaceholder: e=>"channel" === e.type || "query" === e.type ? `Write to ${e.name}` : "",
                      onSubmit: ()=>{
                          if (!a.value)
                              return;
                          if (a.value.click(),
                          a.value.focus(),
                          !n.state.isConnected)
                              return !1;
                          const t = e.channel.id
                            , o = e.channel.pendingMessage;
                          if (0 === o.length)
                              return !1;
                          if (s.value && s.value.hide(),
                          e.channel.inputHistoryPosition = 0,
                          e.channel.pendingMessage = "",
                          a.value.value = "",
                          i(),
                          e.channel.inputHistory[1] !== o && e.channel.inputHistory.splice(1, 0, o),
                          e.channel.inputHistory.length > 100 && e.channel.inputHistory.pop(),
                          "/" === o[0]) {
                              const e = o.substring(1).split(" ")
                                , n = e.shift()?.toLowerCase();
                              if (!n)
                                  return !1;
                              if (Object.prototype.hasOwnProperty.call(Ll.default, n) && Ll.default[n].input(e))
                                  return !1
                          }
                          f.Z.emit("input", {
                              target: t,
                              text: o
                          })
                      }
                      ,
                      setPendingMessage: n=>{
                          e.channel.pendingMessage = n.target.value,
                          e.channel.inputHistoryPosition = 0,
                          i()
                      }
                  }
              }
          })
            , Nl = (0,
          C.Z)(El, [["render", function(e, n, a, t, s, r) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("form", {
                  id: "form",
                  method: "post",
                  action: "",
                  onSubmit: n[5] || (n[5] = (0,
                  i.iM)(((...n)=>e.onSubmit && e.onSubmit(...n)), ["prevent"]))
              }, [dl, (0,
              o._)("span", hl, (0,
              k.zw)(e.network.nick), 1), (0,
              o._)("textarea", {
                  id: "input",
                  ref: "input",
                  dir: "auto",
                  class: "mousetrap",
                  enterkeyhint: "send",
                  value: e.channel.pendingMessage,
                  placeholder: e.getInputPlaceholder(e.channel),
                  "aria-label": e.getInputPlaceholder(e.channel),
                  onInput: n[0] || (n[0] = (...n)=>e.setPendingMessage && e.setPendingMessage(...n)),
                  onKeypress: n[1] || (n[1] = (0,
                  i.D2)((0,
                  i.iM)(((...n)=>e.onSubmit && e.onSubmit(...n)), ["exact", "prevent"]), ["enter"])),
                  onBlur: n[2] || (n[2] = (...n)=>e.onBlur && e.onBlur(...n))
              }, null, 40, pl), e.store.state.serverConfiguration?.fileUpload ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", {
                  key: 0,
                  id: "upload-tooltip",
                  class: "tooltipped tooltipped-w tooltipped-no-touch",
                  "aria-label": "Upload file",
                  onClick: n[4] || (n[4] = (...n)=>e.openFileUpload && e.openFileUpload(...n))
              }, [(0,
              o._)("input", {
                  id: "upload-input",
                  ref: "uploadInput",
                  type: "file",
                  "aria-labelledby": "upload",
                  multiple: "",
                  onChange: n[3] || (n[3] = (...n)=>e.onUploadInputChange && e.onUploadInputChange(...n))
              }, null, 544), (0,
              o._)("button", {
                  id: "upload",
                  type: "button",
                  "aria-label": "Upload file",
                  disabled: !e.store.state.isConnected
              }, null, 8, gl)])) : (0,
              o.kq)("", !0), (0,
              o._)("span", ml, [(0,
              o._)("button", {
                  id: "submit",
                  type: "submit",
                  "aria-label": "Send message",
                  disabled: !e.store.state.isConnected
              }, null, 8, wl)])], 32)
          }
          ]]);
          const zl = ["aria-label"]
            , Yl = {
              class: "count"
          }
            , Rl = ["value", "placeholder"]
            , Wl = {
              class: "names"
          }
            , Fl = {
              "~": "owner",
              "&": "admin",
              "!": "admin",
              "@": "op",
              "%": "half-op",
              "+": "voice",
              "": "normal"
          };
          var Bl = (0,
          o.aZ)({
              name: "ChatUserList",
              components: {
                  Username: zi.Z
              },
              props: {
                  channel: {
                      type: Object,
                      required: !0
                  }
              },
              setup(e) {
                  const n = (0,
                  _.iH)("")
                    , a = (0,
                  _.iH)()
                    , t = (0,
                  _.iH)()
                    , s = (0,
                  o.Fl)((()=>{
                      if (n.value)
                          return (0,
                          yl.filter)(n.value, e.channel.users, {
                              pre: "<b>",
                              post: "</b>",
                              extract: e=>e.nick
                          })
                  }
                  ))
                    , i = (0,
                  o.Fl)((()=>{
                      const a = {};
                      if (n.value && s.value) {
                          const e = s.value;
                          for (const n of e) {
                              const e = n.original.modes[0] || "";
                              a[e] || (a[e] = []),
                              n.string = e + n.string,
                              a[e].push(n)
                          }
                      } else
                          for (const n of e.channel.users) {
                              const e = n.modes[0] || "";
                              a[e] ? a[e].push(n) : a[e] = [n]
                          }
                      return a
                  }
                  ))
                    , r = ()=>{
                      (0,
                      o.Y3)((()=>{
                          const e = t.value?.querySelector(".active");
                          e?.scrollIntoView({
                              block: "nearest",
                              inline: "nearest"
                          })
                      }
                      ))
                  }
                  ;
                  return {
                      filteredUsers: s,
                      groupedUsers: i,
                      userSearchInput: n,
                      activeUser: a,
                      userlist: t,
                      setUserSearchInput: e=>{
                          n.value = e.target.value
                      }
                      ,
                      getModeClass: e=>Fl[e],
                      selectUser: ()=>{
                          if (!a.value || !t.value)
                              return;
                          const e = t.value.querySelector(".active");
                          if (!e)
                              return;
                          const n = e.getBoundingClientRect()
                            , s = new MouseEvent("click",{
                              view: window,
                              bubbles: !0,
                              cancelable: !0,
                              clientX: n.left,
                              clientY: n.top + n.height
                          });
                          e.dispatchEvent(s)
                      }
                      ,
                      hoverUser: e=>{
                          a.value = e
                      }
                      ,
                      removeHoverUser: ()=>{
                          a.value = null
                      }
                      ,
                      navigateUserList: (t,o)=>{
                          t.stopImmediatePropagation(),
                          t.preventDefault();
                          let i = e.channel.users;
                          if (n.value && s.value && (i = s.value.map((e=>e.original))),
                          !i.length)
                              return void (a.value = null);
                          const l = ()=>{
                              a.value = o ? i[0] : i[i.length - 1],
                              r()
                          }
                          ;
                          if (!a.value)
                              return void l();
                          let c = i.indexOf(a.value);
                          if (-1 !== c) {
                              for (c += o; c < 0; )
                                  c += i.length;
                              for (; c > i.length - 1; )
                                  c -= i.length;
                              a.value = i[c],
                              r()
                          } else
                              l()
                      }
                  }
              }
          })
            , $l = (0,
          C.Z)(Bl, [["render", function(e, n, a, t, s, r) {
              const l = (0,
              o.up)("Username");
              return (0,
              o.wg)(),
              (0,
              o.iD)("aside", {
                  ref: "userlist",
                  class: "userlist",
                  "aria-label": "User list for " + e.channel.name,
                  onMouseleave: n[6] || (n[6] = (...n)=>e.removeHoverUser && e.removeHoverUser(...n))
              }, [(0,
              o._)("div", Yl, [(0,
              o._)("input", {
                  ref: "input",
                  value: e.userSearchInput,
                  placeholder: e.channel.users.length + " user" + (1 === e.channel.users.length ? "" : "s"),
                  type: "search",
                  class: "search",
                  "aria-label": "Search among the user list",
                  tabindex: "-1",
                  onInput: n[0] || (n[0] = (...n)=>e.setUserSearchInput && e.setUserSearchInput(...n)),
                  onKeydown: [n[1] || (n[1] = (0,
                  i.D2)((n=>e.navigateUserList(n, -1)), ["up"])), n[2] || (n[2] = (0,
                  i.D2)((n=>e.navigateUserList(n, 1)), ["down"])), n[3] || (n[3] = (0,
                  i.D2)((n=>e.navigateUserList(n, -10)), ["page-up"])), n[4] || (n[4] = (0,
                  i.D2)((n=>e.navigateUserList(n, 10)), ["page-down"])), n[5] || (n[5] = (0,
                  i.D2)(((...n)=>e.selectUser && e.selectUser(...n)), ["enter"]))]
              }, null, 40, Rl)]), (0,
              o._)("div", Wl, [((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.groupedUsers, ((n,a)=>((0,
              o.wg)(),
              (0,
              o.iD)("div", {
                  key: a,
                  class: (0,
                  k.C_)(["user-mode", e.getModeClass(String(a))])
              }, [e.userSearchInput.length > 0 ? ((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, (0,
              o.Ko)(n, (n=>((0,
              o.wg)(),
              (0,
              o.j4)(l, {
                  key: n.original.nick + "-search",
                  "on-hover": e.hoverUser,
                  active: n.original === e.activeUser,
                  user: n.original,
                  innerHTML: n.string
              }, null, 8, ["on-hover", "active", "user", "innerHTML"])))), 128)) : ((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, (0,
              o.Ko)(n, (n=>((0,
              o.wg)(),
              (0,
              o.j4)(l, {
                  key: n.nick,
                  "on-hover": e.hoverUser,
                  active: n === e.activeUser,
                  user: n
              }, null, 8, ["on-hover", "active", "user"])))), 128))], 2)))), 128))])], 40, zl)
          }
          ]]);
          const Vl = {
              class: "ban-list"
          }
            , Jl = (0,
          o._)("thead", null, [(0,
          o._)("tr", null, [(0,
          o._)("th", {
              class: "hostmask"
          }, "Banned"), (0,
          o._)("th", {
              class: "banned_by"
          }, "Banned By"), (0,
          o._)("th", {
              class: "banned_at"
          }, "Banned At")])], -1)
            , Kl = {
              class: "hostmask"
          }
            , Gl = {
              class: "banned_by"
          }
            , Xl = {
              class: "banned_at"
          };
          var Ql = (0,
          o.aZ)({
              name: "ListBans",
              components: {
                  ParsedMessage: fr.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  }
              },
              setup: ()=>({
                  localetime: e=>(0,
                  Ni.Z)(e)
              })
          })
            , ec = (0,
          C.Z)(Ql, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("ParsedMessage");
              return (0,
              o.wg)(),
              (0,
              o.iD)("table", Vl, [Jl, (0,
              o._)("tbody", null, [((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.channel.data, (n=>((0,
              o.wg)(),
              (0,
              o.iD)("tr", {
                  key: n.hostmask
              }, [(0,
              o._)("td", Kl, [(0,
              o.Wm)(r, {
                  network: e.network,
                  text: n.hostmask
              }, null, 8, ["network", "text"])]), (0,
              o._)("td", Gl, (0,
              k.zw)(n.banned_by), 1), (0,
              o._)("td", Xl, (0,
              k.zw)(e.localetime(n.banned_at)), 1)])))), 128))])])
          }
          ]]);
          const nc = {
              class: "invite-list"
          }
            , ac = (0,
          o._)("thead", null, [(0,
          o._)("tr", null, [(0,
          o._)("th", {
              class: "hostmask"
          }, "Invited"), (0,
          o._)("th", {
              class: "invitened_by"
          }, "Invited By"), (0,
          o._)("th", {
              class: "invitened_at"
          }, "Invited At")])], -1)
            , tc = {
              class: "hostmask"
          }
            , sc = {
              class: "invitened_by"
          }
            , oc = {
              class: "invitened_at"
          };
          var ic = (0,
          o.aZ)({
              name: "ListInvites",
              components: {
                  ParsedMessage: fr.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  }
              },
              setup: ()=>({
                  localetime: e=>(0,
                  Ni.Z)(e)
              })
          })
            , rc = (0,
          C.Z)(ic, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("ParsedMessage");
              return (0,
              o.wg)(),
              (0,
              o.iD)("table", nc, [ac, (0,
              o._)("tbody", null, [((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.channel.data, (n=>((0,
              o.wg)(),
              (0,
              o.iD)("tr", {
                  key: n.hostmask
              }, [(0,
              o._)("td", tc, [(0,
              o.Wm)(r, {
                  network: e.network,
                  text: n.hostmask
              }, null, 8, ["network", "text"])]), (0,
              o._)("td", sc, (0,
              k.zw)(n.invited_by), 1), (0,
              o._)("td", oc, (0,
              k.zw)(e.localetime(n.invited_at)), 1)])))), 128))])])
          }
          ]]);
          const lc = {
              key: 0
          }
            , cc = {
              key: 1,
              class: "channel-list"
          }
            , uc = (0,
          o._)("thead", null, [(0,
          o._)("tr", null, [(0,
          o._)("th", {
              class: "channel"
          }, "Channel"), (0,
          o._)("th", {
              class: "users"
          }, "Users"), (0,
          o._)("th", {
              class: "topic"
          }, "Topic")])], -1)
            , dc = {
              class: "channel"
          }
            , hc = {
              class: "users"
          }
            , pc = {
              class: "topic"
          };
          var gc = (0,
          o.aZ)({
              name: "ListChannels",
              components: {
                  ParsedMessage: fr.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , mc = (0,
          C.Z)(gc, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("ParsedMessage");
              return e.channel.data.text ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", lc, (0,
              k.zw)(e.channel.data.text), 1)) : ((0,
              o.wg)(),
              (0,
              o.iD)("table", cc, [uc, (0,
              o._)("tbody", null, [((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.channel.data, (n=>((0,
              o.wg)(),
              (0,
              o.iD)("tr", {
                  key: n.channel
              }, [(0,
              o._)("td", dc, [(0,
              o.Wm)(r, {
                  network: e.network,
                  text: n.channel
              }, null, 8, ["network", "text"])]), (0,
              o._)("td", hc, (0,
              k.zw)(n.num_users), 1), (0,
              o._)("td", pc, [(0,
              o.Wm)(r, {
                  network: e.network,
                  text: n.topic
              }, null, 8, ["network", "text"])])])))), 128))])]))
          }
          ]]);
          const wc = {
              class: "ignore-list"
          }
            , fc = (0,
          o._)("thead", null, [(0,
          o._)("tr", null, [(0,
          o._)("th", {
              class: "hostmask"
          }, "Hostmask"), (0,
          o._)("th", {
              class: "when"
          }, "Ignored At")])], -1)
            , kc = {
              class: "hostmask"
          }
            , bc = {
              class: "when"
          };
          var vc = (0,
          o.aZ)({
              name: "ListIgnored",
              components: {
                  ParsedMessage: fr.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  }
              },
              setup: ()=>({
                  localetime: Ni.Z
              })
          })
            , _c = (0,
          C.Z)(vc, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("ParsedMessage");
              return (0,
              o.wg)(),
              (0,
              o.iD)("table", wc, [fc, (0,
              o._)("tbody", null, [((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.channel.data, (n=>((0,
              o.wg)(),
              (0,
              o.iD)("tr", {
                  key: n.hostmask
              }, [(0,
              o._)("td", kc, [(0,
              o.Wm)(r, {
                  network: e.network,
                  text: n.hostmask
              }, null, 8, ["network", "text"])]), (0,
              o._)("td", bc, (0,
              k.zw)(e.localetime(n.when)), 1)])))), 128))])])
          }
          ]])
            , yc = (0,
          o.aZ)({
              name: "Chat",
              components: {
                  ParsedMessage: fr.Z,
                  MessageList: ul,
                  ChatInput: Nl,
                  ChatUserList: $l,
                  SidebarToggle: cn,
                  MessageSearchForm: xr
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  },
                  focused: Number
              },
              emits: ["channel-changed"],
              setup(e, {emit: n}) {
                  const a = (0,
                  Z.oR)()
                    , t = (0,
                  _.iH)()
                    , s = (0,
                  _.iH)(null)
                    , i = (0,
                  o.Fl)((()=>{
                      switch (e.channel.special) {
                      case "list_bans":
                          return ec;
                      case "list_invites":
                          return rc;
                      case "list_channels":
                          return mc;
                      case "list_ignored":
                          return _c
                      }
                  }
                  ))
                    , r = ()=>{
                      n("channel-changed", e.channel),
                      f.Z.emit("open", e.channel.id),
                      e.channel.usersOutdated && (e.channel.usersOutdated = !1,
                      f.Z.emit("names", {
                          target: e.channel.id
                      }))
                  }
                  ;
                  return (0,
                  o.YP)((()=>e.channel), (()=>{
                      r()
                  }
                  )),
                  (0,
                  o.YP)((()=>e.channel.editTopic), (e=>{
                      e && (0,
                      o.Y3)((()=>{
                          s.value?.focus()
                      }
                      ))
                  }
                  )),
                  (0,
                  o.bv)((()=>{
                      r(),
                      e.channel.editTopic && (0,
                      o.Y3)((()=>{
                          s.value?.focus()
                      }
                      ))
                  }
                  )),
                  {
                      store: a,
                      messageList: t,
                      topicInput: s,
                      specialComponent: i,
                      hideUserVisibleError: ()=>{
                          a.commit("currentUserVisibleError", null)
                      }
                      ,
                      editTopic: ()=>{
                          "channel" === e.channel.type && (e.channel.editTopic = !0)
                      }
                      ,
                      saveTopic: ()=>{
                          if (e.channel.editTopic = !1,
                          !s.value)
                              return;
                          const n = s.value.value;
                          if (e.channel.topic !== n) {
                              const a = e.channel.id
                                , t = `/raw TOPIC ${e.channel.name} :${n}`;
                              f.Z.emit("input", {
                                  target: a,
                                  text: t
                              })
                          }
                      }
                      ,
                      openContextMenu: n=>{
                          wi.Z.emit("contextmenu:channel", {
                              event: n,
                              channel: e.channel,
                              network: e.network
                          })
                      }
                      ,
                      openMentions: e=>{
                          wi.Z.emit("mentions:toggle", {
                              event: e
                          })
                      }
                  }
              }
          })
            , Cc = (0,
          C.Z)(yc, [["render", function(e, n, a, t, s, r) {
              const l = (0,
              o.up)("SidebarToggle")
                , c = (0,
              o.up)("ParsedMessage")
                , u = (0,
              o.up)("MessageSearchForm")
                , d = (0,
              o.up)("ChatUserList")
                , h = (0,
              o.up)("MessageList")
                , p = (0,
              o.up)("ChatInput");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", {
                  id: "chat-container",
                  class: "window",
                  "data-current-channel": e.channel.name,
                  lang: ""
              }, [(0,
              o._)("div", {
                  id: "chat",
                  class: (0,
                  k.C_)({
                      "hide-motd": !e.store.state.settings.motd,
                      "time-seconds": e.store.state.settings.showSeconds,
                      "time-12h": e.store.state.settings.use12hClock,
                      "colored-nicks": !0
                  })
              }, [(0,
              o._)("div", {
                  id: "chan-" + e.channel.id,
                  class: "chat-view",
                  "data-type": e.channel.type,
                  "aria-label": e.channel.name,
                  role: "tabpanel"
              }, [(0,
              o._)("div", Or, [(0,
              o.Wm)(l), (0,
              o._)("span", {
                  class: "title",
                  "aria-label": "Currently open " + e.channel.type
              }, (0,
              k.zw)(e.channel.name), 9, Ir), !0 === e.channel.editTopic ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", Ar, [(0,
              o._)("input", {
                  ref: "topicInput",
                  value: e.channel.topic,
                  class: "topic-input",
                  placeholder: "Set channel topic",
                  enterkeyhint: "done",
                  onKeyup: [n[0] || (n[0] = (0,
                  i.D2)(((...n)=>e.saveTopic && e.saveTopic(...n)), ["enter"])), n[1] || (n[1] = (0,
                  i.D2)((n=>e.channel.editTopic = !1), ["esc"]))]
              }, null, 40, Er), (0,
              o._)("span", {
                  "aria-label": "Save topic",
                  class: "save-topic",
                  onClick: n[2] || (n[2] = (...n)=>e.saveTopic && e.saveTopic(...n))
              }, Nr)])) : ((0,
              o.wg)(),
              (0,
              o.iD)("span", {
                  key: 1,
                  title: e.channel.topic,
                  class: (0,
                  k.C_)({
                      topic: !0,
                      empty: !e.channel.topic
                  }),
                  onDblclick: n[3] || (n[3] = (...n)=>e.editTopic && e.editTopic(...n))
              }, [e.channel.topic ? ((0,
              o.wg)(),
              (0,
              o.j4)(c, {
                  key: 0,
                  network: e.network,
                  text: e.channel.topic
              }, null, 8, ["network", "text"])) : (0,
              o.kq)("", !0)], 42, zr)), e.store.state.settings.searchEnabled && ["channel", "query"].includes(e.channel.type) ? ((0,
              o.wg)(),
              (0,
              o.j4)(u, {
                  key: 2,
                  network: e.network,
                  channel: e.channel
              }, null, 8, ["network", "channel"])) : (0,
              o.kq)("", !0), (0,
              o._)("button", {
                  class: "mentions",
                  "aria-label": "Open your mentions",
                  onClick: n[4] || (n[4] = (...n)=>e.openMentions && e.openMentions(...n))
              }), (0,
              o._)("button", {
                  class: "menu",
                  "aria-label": "Open the context menu",
                  onClick: n[5] || (n[5] = (...n)=>e.openContextMenu && e.openContextMenu(...n))
              }), "channel" === e.channel.type ? ((0,
              o.wg)(),
              (0,
              o.iD)("span", Yr, [(0,
              o._)("button", {
                  class: "rt",
                  "aria-label": "Toggle user list",
                  onClick: n[6] || (n[6] = n=>e.store.commit("toggleUserlist"))
              })])) : (0,
              o.kq)("", !0)]), "special" === e.channel.type ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", Rr, [(0,
              o._)("div", Wr, [(0,
              o._)("div", Fr, [(0,
              o._)("div", Br, [((0,
              o.wg)(),
              (0,
              o.j4)((0,
              o.LL)(e.specialComponent), {
                  network: e.network,
                  channel: e.channel
              }, null, 8, ["network", "channel"]))])])])])) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", $r, [(0,
              o._)("div", {
                  class: (0,
                  k.C_)(["scroll-down tooltipped tooltipped-w tooltipped-no-touch", {
                      "scroll-down-shown": !e.channel.scrolledToBottom
                  }]),
                  "aria-label": "Jump to recent messages",
                  onClick: n[7] || (n[7] = n=>e.messageList?.jumpToBottom())
              }, Vr, 2), "channel" === e.channel.type ? ((0,
              o.wg)(),
              (0,
              o.j4)(d, {
                  key: 0,
                  channel: e.channel
              }, null, 8, ["channel"])) : (0,
              o.kq)("", !0), (0,
              o.Wm)(h, {
                  ref: "messageList",
                  network: e.network,
                  channel: e.channel,
                  focused: e.focused
              }, null, 8, ["network", "channel", "focused"])]))], 8, Lr)], 2), e.store.state.currentUserVisibleError ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", {
                  key: 0,
                  id: "user-visible-error",
                  onClick: n[8] || (n[8] = (...n)=>e.hideUserVisibleError && e.hideUserVisibleError(...n))
              }, (0,
              k.zw)(e.store.state.currentUserVisibleError), 1)) : (0,
              o.kq)("", !0), (0,
              o.Wm)(p, {
                  network: e.network,
                  channel: e.channel
              }, null, 8, ["network", "channel"])], 8, Hr)
          }
          ]])
            , xc = (0,
          o.aZ)({
              name: "RoutedChat",
              components: {
                  Chat: Cc
              },
              setup() {
                  const e = (0,
                  s.yj)()
                    , n = (0,
                  Z.oR)()
                    , a = (0,
                  o.Fl)((()=>{
                      const a = parseInt(String(e.params.id || ""), 10);
                      return n.getters.findChannel(a)
                  }
                  ))
                    , t = ()=>{
                      a.value && n.commit("activeChannel", a.value)
                  }
                  ;
                  return (0,
                  o.YP)(a, (()=>{
                      t()
                  }
                  )),
                  (0,
                  o.bv)((()=>{
                      t()
                  }
                  )),
                  {
                      route: e,
                      activeChannel: a,
                      channelChanged: e=>{
                          const a = e.id
                            , t = n.getters.findChannel(a);
                          t?.channel && (t.channel.unread = 0,
                          t.channel.highlight = 0)
                      }
                  }
              }
          })
            , Sc = (0,
          C.Z)(xc, [["render", function(e, n, a, t, s, i) {
              const r = (0,
              o.up)("Chat");
              return e.activeChannel ? ((0,
              o.wg)(),
              (0,
              o.j4)(r, {
                  key: 0,
                  network: e.activeChannel.network,
                  channel: e.activeChannel.channel,
                  focused: parseInt(String(e.route.query.focused), 10),
                  onChannelChanged: e.channelChanged
              }, null, 8, ["network", "channel", "focused", "onChannelChanged"])) : (0,
              o.kq)("", !0)
          }
          ]]);
          const Dc = (0,
          o._)("h2", null, "Messages", -1)
            , Zc = {
              class: "opt"
          }
            , Uc = ["checked"]
            , Mc = (0,
          o.Uk)(" Show ")
            , qc = (0,
          o._)("abbr", {
              title: "Message Of The Day"
          }, "MOTD", -1)
            , jc = {
              class: "opt"
          }
            , Tc = ["checked"]
            , Pc = (0,
          o.Uk)(" Include seconds in timestamp ")
            , Hc = {
              class: "opt"
          }
            , Lc = ["checked"]
            , Oc = (0,
          o.Uk)(" Use 12-hour timestamps ")
            , Ic = (0,
          o._)("h2", null, "Link previews", -1)
            , Ac = {
              class: "opt"
          }
            , Ec = ["checked"]
            , Nc = (0,
          o.Uk)(" Auto-expand media ")
            , zc = {
              class: "opt"
          }
            , Yc = ["checked"]
            , Rc = (0,
          o.Uk)(" Auto-expand websites ")
            , Wc = (0,
          o._)("h2", {
              id: "label-status-messages"
          }, [(0,
          o.Uk)(" Status messages "), (0,
          o._)("span", {
              class: "tooltipped tooltipped-n tooltipped-no-delay",
              "aria-label": "Joins, parts, quits, kicks, nick changes, and mode changes"
          }, [(0,
          o._)("button", {
              class: "extra-help"
          })])], -1)
            , Fc = {
              role: "group",
              "aria-labelledby": "label-status-messages"
          }
            , Bc = {
              class: "opt"
          }
            , $c = ["checked"]
            , Vc = (0,
          o.Uk)(" Show all status messages individually ")
            , Jc = {
              class: "opt"
          }
            , Kc = ["checked"]
            , Gc = (0,
          o.Uk)(" Condense status messages together ")
            , Xc = {
              class: "opt"
          }
            , Qc = ["checked"]
            , eu = (0,
          o.Uk)(" Hide all status messages ")
            , nu = (0,
          o._)("h2", null, "Visual Aids", -1)
            , au = {
              class: "opt"
          }
            , tu = ["checked"]
            , su = (0,
          o.Uk)(" Enable colored nicknames ")
            , ou = {
              class: "opt"
          }
            , iu = ["checked"]
            , ru = (0,
          o.Uk)(" Enable autocomplete ")
            , lu = {
              class: "opt"
          }
            , cu = (0,
          o._)("label", {
              for: "nickPostfix",
              class: "opt"
          }, [(0,
          o.Uk)(" Nick autocomplete postfix "), (0,
          o._)("span", {
              class: "tooltipped tooltipped-n tooltipped-no-delay",
              "aria-label": "Nick autocomplete postfix (for example a comma)"
          }, [(0,
          o._)("button", {
              class: "extra-help"
          })])], -1)
            , uu = ["value"]
            , du = (0,
          o._)("h2", null, "Theme", -1)
            , hu = (0,
          o._)("label", {
              for: "theme-select",
              class: "sr-only"
          }, "Theme", -1)
            , pu = ["value"]
            , gu = ["value"]
            , mu = (0,
          o._)("h2", null, "Custom Stylesheet", -1)
            , wu = (0,
          o._)("label", {
              for: "user-specified-css-input",
              class: "sr-only"
          }, " Custom stylesheet. You can override any style with CSS here. ", -1)
            , fu = ["value"];
          var ku = (0,
          o.aZ)({
              name: "AppearanceSettings",
              setup: ()=>({
                  store: (0,
                  Z.oR)()
              })
          })
            , bu = (0,
          C.Z)(ku, [["render", function(e, n, a, t, s, i) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", null, [Dc, (0,
              o._)("div", null, [(0,
              o._)("label", Zc, [(0,
              o._)("input", {
                  checked: e.store.state.settings.motd,
                  type: "checkbox",
                  name: "motd"
              }, null, 8, Uc), Mc, qc])]), (0,
              o._)("div", null, [(0,
              o._)("label", jc, [(0,
              o._)("input", {
                  checked: e.store.state.settings.showSeconds,
                  type: "checkbox",
                  name: "showSeconds"
              }, null, 8, Tc), Pc])]), (0,
              o._)("div", null, [(0,
              o._)("label", Hc, [(0,
              o._)("input", {
                  checked: e.store.state.settings.use12hClock,
                  type: "checkbox",
                  name: "use12hClock"
              }, null, 8, Lc), Oc])]), e.store.state.serverConfiguration?.prefetch ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [Ic, (0,
              o._)("div", null, [(0,
              o._)("label", Ac, [(0,
              o._)("input", {
                  checked: e.store.state.settings.media,
                  type: "checkbox",
                  name: "media"
              }, null, 8, Ec), Nc])]), (0,
              o._)("div", null, [(0,
              o._)("label", zc, [(0,
              o._)("input", {
                  checked: e.store.state.settings.links,
                  type: "checkbox",
                  name: "links"
              }, null, 8, Yc), Rc])])], 64)) : (0,
              o.kq)("", !0), Wc, (0,
              o._)("div", Fc, [(0,
              o._)("label", Bc, [(0,
              o._)("input", {
                  checked: "shown" === e.store.state.settings.statusMessages,
                  type: "radio",
                  name: "statusMessages",
                  value: "shown"
              }, null, 8, $c), Vc]), (0,
              o._)("label", Jc, [(0,
              o._)("input", {
                  checked: "condensed" === e.store.state.settings.statusMessages,
                  type: "radio",
                  name: "statusMessages",
                  value: "condensed"
              }, null, 8, Kc), Gc]), (0,
              o._)("label", Xc, [(0,
              o._)("input", {
                  checked: "hidden" === e.store.state.settings.statusMessages,
                  type: "radio",
                  name: "statusMessages",
                  value: "hidden"
              }, null, 8, Qc), eu])]), nu, (0,
              o._)("div", null, [(0,
              o._)("label", au, [(0,
              o._)("input", {
                  checked: e.store.state.settings.coloredNicks,
                  type: "checkbox",
                  name: "coloredNicks"
              }, null, 8, tu), su]), (0,
              o._)("label", ou, [(0,
              o._)("input", {
                  checked: e.store.state.settings.autocomplete,
                  type: "checkbox",
                  name: "autocomplete"
              }, null, 8, iu), ru])]), (0,
              o._)("div", null, [(0,
              o._)("label", lu, [cu, (0,
              o._)("input", {
                  id: "nickPostfix",
                  value: e.store.state.settings.nickPostfix,
                  type: "text",
                  name: "nickPostfix",
                  class: "input",
                  placeholder: "Nick autocomplete postfix (e.g. ', ')"
              }, null, 8, uu)])]), du, (0,
              o._)("div", null, [hu, (0,
              o._)("select", {
                  id: "theme-select",
                  value: e.store.state.settings.theme,
                  name: "theme",
                  class: "input"
              }, [((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.store.state.serverConfiguration?.themes, (e=>((0,
              o.wg)(),
              (0,
              o.iD)("option", {
                  key: e.name,
                  value: e.name
              }, (0,
              k.zw)(e.displayName), 9, gu)))), 128))], 8, pu)]), (0,
              o._)("div", null, [mu, wu, (0,
              o._)("textarea", {
                  id: "user-specified-css-input",
                  value: e.store.state.settings.userStyles,
                  class: "input",
                  name: "userStyles",
                  placeholder: "/* You can override any style with CSS here */"
              }, null, 8, fu)])])
          }
          ]]);
          const vu = {
              key: 0
          }
            , _u = (0,
          o._)("h2", null, "Native app", -1)
            , yu = {
              key: 1
          }
            , Cu = (0,
          o._)("h2", null, "File uploads", -1)
            , xu = {
              class: "opt"
          }
            , Su = ["checked"]
            , Du = (0,
          o.Uk)(" Attempt to remove metadata from images before uploading ")
            , Zu = (0,
          o._)("span", {
              class: "tooltipped tooltipped-n tooltipped-no-delay",
              "aria-label": "This option renders the image into a canvas element to remove metadata from the image.\n\tThis may break orientation if your browser does not support that."
          }, [(0,
          o._)("button", {
              class: "extra-help"
          })], -1)
            , Uu = {
              key: 2
          }
            , Mu = (0,
          o._)("h2", null, "Settings synchronisation", -1)
            , qu = {
              class: "opt"
          }
            , ju = ["checked"]
            , Tu = (0,
          o.Uk)(" Synchronize settings with other clients ")
            , Pu = {
              key: 0,
              class: "settings-sync-panel"
          }
            , Hu = (0,
          o._)("p", null, [(0,
          o._)("strong", null, "Warning:"), (0,
          o.Uk)(" Checking this box will override the settings of this client with those stored on the server. ")], -1)
            , Lu = (0,
          o._)("p", null, " Use the button below to enable synchronization, and override any settings already synced to the server. ", -1)
            , Ou = {
              key: 1,
              class: "settings-sync-panel"
          }
            , Iu = [(0,
          o._)("p", null, [(0,
          o._)("strong", null, "Warning:"), (0,
          o.Uk)(" No settings have been synced before. Enabling this will sync all settings of this client as the base for other clients. ")], -1)]
            , Au = {
              key: 3
          }
            , Eu = (0,
          o._)("h2", null, "Automatic away message", -1)
            , Nu = {
              class: "opt"
          }
            , zu = (0,
          o._)("label", {
              for: "awayMessage",
              class: "sr-only"
          }, "Automatic away message", -1)
            , Yu = ["value"];
          let Ru = null;
          window.addEventListener("beforeinstallprompt", (e=>{
              e.preventDefault(),
              Ru = e
          }
          ));
          var Wu = (0,
          o.aZ)({
              name: "GeneralSettings",
              setup() {
                  const e = (0,
                  Z.oR)()
                    , n = (0,
                  _.iH)(!1)
                    , a = (0,
                  o.Fl)((()=>null !== Ru));
                  return (0,
                  o.bv)((()=>{
                      n.value = !!window.navigator.registerProtocolHandler && !e.state.serverConfiguration?.lockNetwork
                  }
                  )),
                  {
                      store: e,
                      canRegisterProtocol: n,
                      hasInstallPromptEvent: a,
                      nativeInstallPrompt: ()=>{
                          Ru && (Ru.prompt().catch((e=>{
                              console.error(e)
                          }
                          )),
                          Ru = null)
                      }
                      ,
                      onForceSyncClick: ()=>{
                          e.dispatch("settings/syncAll", !0).catch((e=>{
                              console.error(e)
                          }
                          )),
                          e.dispatch("settings/update", {
                              name: "syncSettings",
                              value: !0,
                              sync: !0
                          }).catch((e=>{
                              console.error(e)
                          }
                          ))
                      }
                      ,
                      registerProtocol: ()=>{
                          const e = document.location.origin + document.location.pathname + "?uri=%s";
                          window.navigator.registerProtocolHandler("irc", e, "The Lounge"),
                          window.navigator.registerProtocolHandler("ircs", e, "The Lounge")
                      }
                  }
              }
          })
            , Fu = (0,
          C.Z)(Wu, [["render", function(e, n, a, t, s, r) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", null, [e.canRegisterProtocol || e.hasInstallPromptEvent ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", vu, [_u, e.hasInstallPromptEvent ? ((0,
              o.wg)(),
              (0,
              o.iD)("button", {
                  key: 0,
                  type: "button",
                  class: "btn",
                  onClick: n[0] || (n[0] = (0,
                  i.iM)(((...n)=>e.nativeInstallPrompt && e.nativeInstallPrompt(...n)), ["prevent"]))
              }, " Add The Lounge to Home screen ")) : (0,
              o.kq)("", !0), e.canRegisterProtocol ? ((0,
              o.wg)(),
              (0,
              o.iD)("button", {
                  key: 1,
                  type: "button",
                  class: "btn",
                  onClick: n[1] || (n[1] = (0,
                  i.iM)(((...n)=>e.registerProtocol && e.registerProtocol(...n)), ["prevent"]))
              }, " Open irc:// URLs with The Lounge ")) : (0,
              o.kq)("", !0)])) : (0,
              o.kq)("", !0), e.store.state.serverConfiguration?.fileUpload ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", yu, [Cu, (0,
              o._)("div", null, [(0,
              o._)("label", xu, [(0,
              o._)("input", {
                  checked: e.store.state.settings.uploadCanvas,
                  type: "checkbox",
                  name: "uploadCanvas"
              }, null, 8, Su), Du, Zu])])])) : (0,
              o.kq)("", !0), e.store.state.serverConfiguration?.public ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", Uu, [Mu, (0,
              o._)("label", qu, [(0,
              o._)("input", {
                  checked: e.store.state.settings.syncSettings,
                  type: "checkbox",
                  name: "syncSettings"
              }, null, 8, ju), Tu]), e.store.state.settings.syncSettings ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [e.store.state.serverHasSettings ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", Pu, [Hu, Lu, (0,
              o._)("button", {
                  type: "button",
                  class: "btn btn-small",
                  onClick: n[2] || (n[2] = (...n)=>e.onForceSyncClick && e.onForceSyncClick(...n))
              }, " Sync settings and enable ")])) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", Ou, Iu))], 64))])), e.store.state.serverConfiguration?.public ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", Au, [Eu, (0,
              o._)("label", Nu, [zu, (0,
              o._)("input", {
                  id: "awayMessage",
                  value: e.store.state.settings.awayMessage,
                  type: "text",
                  name: "awayMessage",
                  class: "input",
                  placeholder: "Away message if The Lounge is not open"
              }, null, 8, Yu)])]))])
          }
          ]]);
          const Bu = {
              key: 0,
              id: "change-password",
              role: "group",
              "aria-labelledby": "label-change-password"
          }
            , $u = (0,
          o._)("h2", {
              id: "label-change-password"
          }, "Change password", -1)
            , Vu = {
              class: "password-container"
          }
            , Ju = (0,
          o._)("label", {
              for: "current-password",
              class: "sr-only"
          }, " Enter current password ", -1)
            , Ku = ["type"]
            , Gu = {
              class: "password-container"
          }
            , Xu = (0,
          o._)("label", {
              for: "new-password",
              class: "sr-only"
          }, " Enter desired new password ", -1)
            , Qu = ["type"]
            , ed = {
              class: "password-container"
          }
            , nd = (0,
          o._)("label", {
              for: "new-password-verify",
              class: "sr-only"
          }, " Repeat new password ", -1)
            , ad = ["type"]
            , td = {
              key: 0,
              class: "feedback success"
          }
            , sd = {
              key: 1,
              class: "feedback error"
          }
            , od = {
              key: 1,
              class: "session-list",
              role: "group"
          }
            , id = (0,
          o._)("h2", null, "Sessions", -1)
            , rd = (0,
          o._)("h3", null, "Current session", -1)
            , ld = (0,
          o._)("h3", null, "Active sessions", -1)
            , cd = (0,
          o._)("h3", null, "Other sessions", -1)
            , ud = {
              key: 2
          }
            , dd = {
              key: 3
          }
            , hd = [(0,
          o._)("em", null, "You are not currently logged in to any other device.", -1)]
            , pd = {
              class: "session-item"
          }
            , gd = {
              class: "session-item-info"
          }
            , md = ["href"]
            , wd = {
              key: 0,
              class: "session-usage"
          }
            , fd = {
              key: 1,
              class: "session-usage"
          }
            , kd = (0,
          o.Uk)(" Last used on ")
            , bd = {
              class: "session-item-btn"
          }
            , vd = (0,
          o.Uk)("Sign out")
            , _d = (0,
          o.Uk)("Revoke");
          var yd = a(7286)
            , Cd = (0,
          o.aZ)({
              name: "Session",
              props: {
                  session: {
                      type: Object,
                      required: !0
                  }
              },
              setup: e=>({
                  lastUse: (0,
                  o.Fl)((()=>(0,
                  Ni.Z)(e.session.lastUse))),
                  signOut: ()=>{
                      e.session.current ? (f.Z.emit("sign-out"),
                      yd.Z.signout()) : f.Z.emit("sign-out", e.session.token)
                  }
              })
          })
            , xd = (0,
          C.Z)(Cd, [["render", function(e, n, a, t, s, r) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", pd, [(0,
              o._)("div", gd, [(0,
              o._)("strong", null, (0,
              k.zw)(e.session.agent), 1), (0,
              o._)("a", {
                  href: "https://ipinfo.io/" + e.session.ip,
                  target: "_blank",
                  rel: "noopener"
              }, (0,
              k.zw)(e.session.ip), 9, md), e.session.active > 1 ? ((0,
              o.wg)(),
              (0,
              o.iD)("p", wd, " Active in " + (0,
              k.zw)(e.session.active) + " browsers ", 1)) : e.session.current || e.session.active ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("p", fd, [kd, (0,
              o._)("time", null, (0,
              k.zw)(e.lastUse), 1)]))]), (0,
              o._)("div", bd, [(0,
              o._)("button", {
                  class: "btn",
                  onClick: n[0] || (n[0] = (0,
                  i.iM)(((...n)=>e.signOut && e.signOut(...n)), ["prevent"]))
              }, [e.session.current ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [vd], 64)) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, [_d], 64))])])])
          }
          ]])
            , Sd = (0,
          o.aZ)({
              name: "UserSettings",
              components: {
                  RevealPassword: x,
                  Session: xd
              },
              setup() {
                  const e = (0,
                  Z.oR)()
                    , n = (0,
                  _.iH)()
                    , a = (0,
                  _.iH)("")
                    , t = (0,
                  _.iH)("")
                    , s = (0,
                  _.iH)("")
                    , i = (0,
                  o.Fl)((()=>e.state.sessions.find((e=>e.current))))
                    , r = (0,
                  o.Fl)((()=>e.state.sessions.filter((e=>!e.current && e.active > 0))))
                    , l = (0,
                  o.Fl)((()=>e.state.sessions.filter((e=>!e.current && !e.active))));
                  return (0,
                  o.bv)((()=>{
                      f.Z.emit("sessions:get")
                  }
                  )),
                  {
                      store: e,
                      passwordChangeStatus: n,
                      passwordErrors: {
                          missing_fields: "Please fill in all fields",
                          password_mismatch: "Both new password fields must match",
                          password_incorrect: "The current password field does not match your account password",
                          update_failed: "Failed to update your password"
                      },
                      currentSession: i,
                      activeSessions: r,
                      otherSessions: l,
                      changePassword: ()=>{
                          const e = {
                              old_password: a.value,
                              new_password: t.value,
                              verify_password: s.value
                          };
                          e.old_password && e.new_password && e.verify_password ? e.new_password === e.verify_password ? (f.Z.once("change-password", (e=>{
                              n.value = e
                          }
                          )),
                          f.Z.emit("change-password", e)) : n.value = {
                              success: !1,
                              error: "password_mismatch"
                          } : n.value = {
                              success: !1,
                              error: "missing_fields"
                          }
                      }
                      ,
                      old_password: a,
                      new_password: t,
                      verify_password: s
                  }
              }
          })
            , Dd = (0,
          C.Z)(Sd, [["render", function(e, n, a, t, s, r) {
              const l = (0,
              o.up)("RevealPassword")
                , c = (0,
              o.up)("Session");
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", null, [e.store.state.serverConfiguration?.public || e.store.state.serverConfiguration?.ldapEnabled ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", Bu, [$u, (0,
              o._)("div", Vu, [Ju, (0,
              o.Wm)(l, null, {
                  default: (0,
                  o.w5)((a=>[(0,
                  o.wy)((0,
                  o._)("input", {
                      id: "current-password",
                      "onUpdate:modelValue": n[0] || (n[0] = n=>e.old_password = n),
                      autocomplete: "current-password",
                      type: a.isVisible ? "text" : "password",
                      name: "old_password",
                      class: "input",
                      placeholder: "Enter current password"
                  }, null, 8, Ku), [[i.YZ, e.old_password]])])),
                  _: 1
              })]), (0,
              o._)("div", Gu, [Xu, (0,
              o.Wm)(l, null, {
                  default: (0,
                  o.w5)((a=>[(0,
                  o.wy)((0,
                  o._)("input", {
                      id: "new-password",
                      "onUpdate:modelValue": n[1] || (n[1] = n=>e.new_password = n),
                      type: a.isVisible ? "text" : "password",
                      name: "new_password",
                      autocomplete: "new-password",
                      class: "input",
                      placeholder: "Enter desired new password"
                  }, null, 8, Qu), [[i.YZ, e.new_password]])])),
                  _: 1
              })]), (0,
              o._)("div", ed, [nd, (0,
              o.Wm)(l, null, {
                  default: (0,
                  o.w5)((a=>[(0,
                  o.wy)((0,
                  o._)("input", {
                      id: "new-password-verify",
                      "onUpdate:modelValue": n[2] || (n[2] = n=>e.verify_password = n),
                      type: a.isVisible ? "text" : "password",
                      name: "verify_password",
                      autocomplete: "new-password",
                      class: "input",
                      placeholder: "Repeat new password"
                  }, null, 8, ad), [[i.YZ, e.verify_password]])])),
                  _: 1
              })]), e.passwordChangeStatus && e.passwordChangeStatus.success ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", td, " Successfully updated your password ")) : e.passwordChangeStatus && e.passwordChangeStatus.error ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", sd, (0,
              k.zw)(e.passwordErrors[e.passwordChangeStatus.error]), 1)) : (0,
              o.kq)("", !0), (0,
              o._)("div", null, [(0,
              o._)("button", {
                  type: "submit",
                  class: "btn",
                  onClick: n[3] || (n[3] = (0,
                  i.iM)(((...n)=>e.changePassword && e.changePassword(...n)), ["prevent"]))
              }, " Change password ")])])), e.store.state.serverConfiguration?.public ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", od, [id, rd, e.currentSession ? ((0,
              o.wg)(),
              (0,
              o.j4)(c, {
                  key: 0,
                  session: e.currentSession
              }, null, 8, ["session"])) : (0,
              o.kq)("", !0), e.activeSessions.length > 0 ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, [ld, ((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, null, (0,
              o.Ko)(e.activeSessions, (e=>((0,
              o.wg)(),
              (0,
              o.j4)(c, {
                  key: e.token,
                  session: e
              }, null, 8, ["session"])))), 128))], 64)) : (0,
              o.kq)("", !0), cd, 0 === e.store.state.sessions.length ? ((0,
              o.wg)(),
              (0,
              o.iD)("p", ud, "Loading…")) : 0 === e.otherSessions.length ? ((0,
              o.wg)(),
              (0,
              o.iD)("p", dd, hd)) : ((0,
              o.wg)(!0),
              (0,
              o.iD)(o.HY, {
                  key: 4
              }, (0,
              o.Ko)(e.otherSessions, (e=>((0,
              o.wg)(),
              (0,
              o.j4)(c, {
                  key: e.token,
                  session: e
              }, null, 8, ["session"])))), 128))]))])
          }
          ]]);
          const Zd = (0,
          o._)("h2", null, "Push Notifications", -1)
            , Ud = ["disabled"]
            , Md = (0,
          o.Uk)(" Unsubscribe from push notifications ")
            , qd = (0,
          o.Uk)(" Loading… ")
            , jd = (0,
          o.Uk)(" Subscribe to push notifications ")
            , Td = {
              key: 0,
              class: "error"
          }
            , Pd = [(0,
          o._)("strong", null, "Warning", -1), (0,
          o.Uk)(": Push notifications are only supported over HTTPS connections. ")]
            , Hd = {
              key: 1,
              class: "error"
          }
            , Ld = [(0,
          o._)("strong", null, "Warning", -1), (0,
          o.Uk)(": "), (0,
          o._)("span", null, "Push notifications are not supported by your browser.", -1)]
            , Od = (0,
          o._)("h2", null, "Browser Notifications", -1)
            , Id = {
              class: "opt"
          }
            , Ad = ["checked", "disabled"]
            , Ed = (0,
          o.Uk)(" Enable browser notifications")
            , Nd = (0,
          o._)("br", null, null, -1)
            , zd = {
              key: 0,
              class: "error"
          }
            , Yd = [(0,
          o._)("strong", null, "Warning", -1), (0,
          o.Uk)(": Notifications are not supported by your browser. ")]
            , Rd = {
              key: 1,
              id: "warnBlockedDesktopNotifications",
              class: "error"
          }
            , Wd = [(0,
          o._)("strong", null, "Warning", -1), (0,
          o.Uk)(": Notifications are only supported over HTTPS connections. ")]
            , Fd = {
              key: 2,
              id: "warnBlockedDesktopNotifications",
              class: "error"
          }
            , Bd = [(0,
          o._)("strong", null, "Warning", -1), (0,
          o.Uk)(": Notifications are blocked by your browser. ")]
            , $d = {
              class: "opt"
          }
            , Vd = ["checked"]
            , Jd = (0,
          o.Uk)(" Enable notification sound ")
            , Kd = {
              class: "opt"
          }
            , Gd = {
              class: "opt"
          }
            , Xd = ["checked"]
            , Qd = (0,
          o.Uk)(" Enable notification for all messages ")
            , eh = {
              key: 1
          }
            , nh = {
              class: "opt"
          }
            , ah = (0,
          o._)("label", {
              for: "highlights",
              class: "opt"
          }, [(0,
          o.Uk)(" Custom highlights "), (0,
          o._)("span", {
              class: "tooltipped tooltipped-n tooltipped-no-delay",
              "aria-label": "If a message contains any of these comma-separated\nexpressions, it will trigger a highlight."
          }, [(0,
          o._)("button", {
              class: "extra-help"
          })])], -1)
            , th = ["value"]
            , sh = {
              key: 2
          }
            , oh = {
              class: "opt"
          }
            , ih = (0,
          o._)("label", {
              for: "highlightExceptions",
              class: "opt"
          }, [(0,
          o.Uk)(" Highlight exceptions "), (0,
          o._)("span", {
              class: "tooltipped tooltipped-n tooltipped-no-delay",
              "aria-label": "If a message contains any of these comma-separated\nexpressions, it will not trigger a highlight even if it contains\nyour nickname or expressions defined in custom highlights."
          }, [(0,
          o._)("button", {
              class: "extra-help"
          })])], -1)
            , rh = ["value"];
          var lh = a(4672)
            , ch = (0,
          o.aZ)({
              name: "NotificationSettings",
              setup() {
                  const e = (0,
                  Z.oR)();
                  return {
                      isIOS: (0,
                      o.Fl)((()=>["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document)),
                      store: e,
                      playNotification: ()=>{
                          const e = new Audio;
                          e.src = "audio/pop.wav",
                          e.play()
                      }
                      ,
                      onPushButtonClick: ()=>{
                          lh.Z.togglePushSubscription()
                      }
                  }
              }
          })
            , uh = (0,
          C.Z)(ch, [["render", function(e, n, a, t, s, r) {
              return (0,
              o.wg)(),
              (0,
              o.iD)("div", null, [e.store.state.serverConfiguration?.public ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [Zd, (0,
              o._)("div", null, [(0,
              o._)("button", {
                  id: "pushNotifications",
                  type: "button",
                  class: "btn",
                  disabled: "supported" !== e.store.state.pushNotificationState && "subscribed" !== e.store.state.pushNotificationState,
                  onClick: n[0] || (n[0] = (...n)=>e.onPushButtonClick && e.onPushButtonClick(...n))
              }, ["subscribed" === e.store.state.pushNotificationState ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 0
              }, [Md], 64)) : "loading" === e.store.state.pushNotificationState ? ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 1
              }, [qd], 64)) : ((0,
              o.wg)(),
              (0,
              o.iD)(o.HY, {
                  key: 2
              }, [jd], 64))], 8, Ud), "nohttps" === e.store.state.pushNotificationState ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", Td, Pd)) : (0,
              o.kq)("", !0), "unsupported" === e.store.state.pushNotificationState ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", Hd, Ld)) : (0,
              o.kq)("", !0)])], 64)), Od, (0,
              o._)("div", null, [(0,
              o._)("label", Id, [(0,
              o._)("input", {
                  id: "desktopNotifications",
                  checked: e.store.state.settings.desktopNotifications,
                  disabled: "nohttps" === e.store.state.desktopNotificationState,
                  type: "checkbox",
                  name: "desktopNotifications"
              }, null, 8, Ad), Ed, Nd, "unsupported" === e.store.state.desktopNotificationState ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", zd, Yd)) : (0,
              o.kq)("", !0), "nohttps" === e.store.state.desktopNotificationState ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", Rd, Wd)) : (0,
              o.kq)("", !0), "blocked" === e.store.state.desktopNotificationState ? ((0,
              o.wg)(),
              (0,
              o.iD)("div", Fd, Bd)) : (0,
              o.kq)("", !0)])]), (0,
              o._)("div", null, [(0,
              o._)("label", $d, [(0,
              o._)("input", {
                  checked: e.store.state.settings.notification,
                  type: "checkbox",
                  name: "notification"
              }, null, 8, Vd), Jd])]), (0,
              o._)("div", null, [(0,
              o._)("div", Kd, [(0,
              o._)("button", {
                  id: "play",
                  onClick: n[1] || (n[1] = (0,
                  i.iM)(((...n)=>e.playNotification && e.playNotification(...n)), ["prevent"]))
              }, "Play sound")])]), (0,
              o._)("div", null, [(0,
              o._)("label", Gd, [(0,
              o._)("input", {
                  checked: e.store.state.settings.notifyAllMessages,
                  type: "checkbox",
                  name: "notifyAllMessages"
              }, null, 8, Xd), Qd])]), e.store.state.serverConfiguration?.public ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", eh, [(0,
              o._)("label", nh, [ah, (0,
              o._)("input", {
                  id: "highlights",
                  value: e.store.state.settings.highlights,
                  type: "text",
                  name: "highlights",
                  class: "input",
                  autocomplete: "off",
                  placeholder: "Comma-separated, e.g.: word, some more words, anotherword"
              }, null, 8, th)])])), e.store.state.serverConfiguration?.public ? (0,
              o.kq)("", !0) : ((0,
              o.wg)(),
              (0,
              o.iD)("div", sh, [(0,
              o._)("label", oh, [ih, (0,
              o._)("input", {
                  id: "highlightExceptions",
                  value: e.store.state.settings.highlightExceptions,
                  type: "text",
                  name: "highlightExceptions",
                  class: "input",
                  autocomplete: "off",
                  placeholder: "Comma-separated, e.g.: word, some more words, anotherword"
              }, null, 8, rh)])]))])
          }
          ]]);
          const dh = (0,
          s.p7)({
              history: (0,
              s.r5)(),
              routes: [{
                  name: "SignIn",
                  path: "/sign-in",
                  component: D,
                  beforeEnter(e, n, a) {
                      Z.h.state.appLoaded ? a(!1) : a()
                  }
              }, {
                  name: "Connect",
                  path: "/connect",
                  component: pn,
                  props: e=>({
                      queryParams: e.query
                  })
              }, {
                  path: "/settings",
                  component: Zn,
                  children: [{
                      name: "General",
                      path: "",
                      component: Fu
                  }, {
                      name: "Appearance",
                      path: "appearance",
                      component: bu
                  }, {
                      name: "Account",
                      path: "account",
                      component: Dd,
                      props: !0
                  }, {
                      name: "Notifications",
                      path: "notifications",
                      component: uh
                  }]
              }, {
                  name: "Help",
                  path: "/help",
                  component: Io
              }, {
                  name: "Changelog",
                  path: "/changelog",
                  component: Jo
              }, {
                  name: "NetworkEdit",
                  path: "/edit-network/:uuid",
                  component: Go
              }, {
                  name: "RoutedChat",
                  path: "/chan-:id",
                  component: Sc
              }, {
                  name: "SearchResults",
                  path: "/chan-:id/search",
                  component: Pr
              }]
          });
          async function hh(e, n={}) {
              dh.currentRoute.value.name ? await dh.push({
                  name: e,
                  params: n
              }) : await dh.replace({
                  name: e,
                  params: n
              }).catch((()=>{}
              ))
          }
          function ph(e) {
              hh("RoutedChat", {
                  id: e.id
              })
          }
          dh.beforeEach(((e,n,a)=>{
              Z.h.state.appLoaded || "SignIn" === e.name ? a() : Z.h.watch((e=>e.appLoaded), (()=>a()))
          }
          )),
          dh.beforeEach(((e,n)=>!(!e.matched.length || "RoutedChat" === e.name && !Z.h.getters.findChannel(Number(e.params.id)) || "NetworkEdit" === e.name && !Z.h.getters.findNetwork(String(e.params.uuid))))),
          dh.afterEach((e=>{
              if (Z.h.state.appLoaded && window.innerWidth <= t.Z.mobileViewportPixels && Z.h.commit("sidebarOpen", !1),
              Z.h.state.activeChannel) {
                  const n = Z.h.state.activeChannel.channel;
                  "RoutedChat" !== e.name && Z.h.commit("activeChannel", void 0),
                  n.messages?.length > 0 && (n.firstUnread = n.messages[n.messages.length - 1].id),
                  n.messages?.length > 100 && (n.messages.splice(0, n.messages.length - 100),
                  n.moreHistoryAvailable = !0)
              }
          }
          )),
          "serviceWorker"in navigator && navigator.serviceWorker.addEventListener("message", (e=>{
              if (e.data && "open" === e.data.type) {
                  const n = parseInt(e.data.channel.substring(5), 10)
                    , a = Z.h.getters.findChannel(n);
                  a && ph(a.channel)
              }
          }
          ))
      }
      ,
      8687: (e,n,a)=>{
          "use strict";
          const t = (0,
          a(3992).ZP)({
              transports: JSON.parse(document.body.dataset.transports || "['polling', 'websocket']"),
              path: window.location.pathname + "socket.io/",
              autoConnect: !1,
              reconnection: !document.body.classList.contains("public")
          });
          n.Z = t
      }
      ,
      6084: (e,n,a)=>{
          "use strict";
          a.d(n, {
              Jy: ()=>w,
              h: ()=>f,
              oR: ()=>b
          });
          var t = a(989)
            , s = a(2297)
            , o = a(8687);
          const i = {
              apply() {},
              default: null,
              sync: null
          }
            , r = {
              syncSettings: {
                  default: !0,
                  sync: "never",
                  apply(e, n, a=!1) {
                      n && !a && o.Z.emit("setting:get")
                  }
              },
              advanced: {
                  default: !1
              },
              autocomplete: {
                  default: !0
              },
              nickPostfix: {
                  default: ""
              },
              coloredNicks: {
                  default: !0
              },
              desktopNotifications: {
                  default: !1,
                  sync: "never",
                  apply(e, n) {
                      e.commit("refreshDesktopNotificationState", null, {
                          root: !0
                      }),
                      "Notification"in window && n && "granted" !== Notification.permission && Notification.requestPermission((()=>e.commit("refreshDesktopNotificationState", null, {
                          root: !0
                      }))).catch((e=>{
                          console.error(e)
                      }
                      ))
                  }
              },
              highlights: {
                  default: "",
                  sync: "always"
              },
              highlightExceptions: {
                  default: "",
                  sync: "always"
              },
              awayMessage: {
                  default: "",
                  sync: "always"
              },
              links: {
                  default: !0
              },
              motd: {
                  default: !0
              },
              notification: {
                  default: !0,
                  sync: "never"
              },
              notifyAllMessages: {
                  default: !1
              },
              showSeconds: {
                  default: !1
              },
              use12hClock: {
                  default: !1
              },
              statusMessages: {
                  default: "condensed"
              },
              theme: {
                  default: document.getElementById("theme")?.dataset.serverTheme,
                  apply(e, n) {
                      const a = document.getElementById("theme")
                        , t = `themes/${n}.css`;
                      if (!(a instanceof HTMLLinkElement))
                          throw new Error("theme element is not a link");
                      const s = a.attributes.getNamedItem("href");
                      if (!s)
                          throw new Error("theme is missing href attribute");
                      if (s.value === t)
                          return;
                      if (s.value = t,
                      !e.state.serverConfiguration)
                          return;
                      const o = e.state.serverConfiguration?.themes.filter((e=>e.name === n))[0]
                        , i = document.querySelector('meta[name="theme-color"]');
                      if (!(i instanceof HTMLMetaElement))
                          throw new Error("theme meta element is not a meta element");
                      if (i) {
                          const e = o.themeColor || i.content;
                          i.content = e
                      }
                  }
              },
              media: {
                  default: !0
              },
              uploadCanvas: {
                  default: !0
              },
              userStyles: {
                  default: "",
                  apply(e, n) {
                      if (!/[?&]nocss/.test(window.location.search)) {
                          const e = document.getElementById("user-specified-css");
                          e && (e.innerHTML = n)
                      }
                  }
              },
              searchEnabled: {
                  default: !1
              }
          }
            , l = function(e) {
              const n = {};
              for (const a in e)
                  n[a] = {
                      ...i,
                      ...e[a]
                  };
              return n
          }(r);
          function c() {
              const e = {};
              for (const n in l)
                  e[n] = l[n].default;
              return e
          }
          function u() {
              let e = {};
              try {
                  e = JSON.parse(s.Z.get("settings") || "{}")
              } catch (e) {
                  s.Z.remove("settings")
              }
              return e ? (null !== e.highlights && "object" == typeof e.highlights && (e.highlights = e.highlights.join(", ")),
              e) : {}
          }
          function d(e, n) {
              const a = {
                  ...e
              };
              for (const t in e)
                  void 0 !== n[t] && typeof e[t] == typeof n[t] && (a[t] = n[t]);
              return a
          }
          const h = document.title;
          var p;
          function g() {
              return "Notification"in window ? Notification.permission === p.Granted ? p.Granted : window.isSecureContext ? p.Blocked : p.NoHttps : p.Unsupported
          }
          !function(e) {
              e.Unsupported = "unsupported",
              e.Blocked = "blocked",
              e.NoHttps = "nohttps",
              e.Granted = "granted"
          }(p || (p = {}));
          const m = {
              state: ()=>({
                  appLoaded: !1,
                  activeChannel: void 0,
                  currentUserVisibleError: null,
                  desktopNotificationState: g(),
                  isAutoCompleting: !1,
                  isConnected: !1,
                  networks: [],
                  mentions: [],
                  hasServiceWorker: !1,
                  pushNotificationState: "unsupported",
                  serverConfiguration: null,
                  sessions: [],
                  sidebarOpen: !1,
                  sidebarDragging: !1,
                  userlistOpen: "false" !== s.Z.get("thelounge.state.userlist"),
                  versionData: null,
                  versionStatus: "loading",
                  versionDataExpired: !1,
                  serverHasSettings: !1,
                  messageSearchResults: null,
                  messageSearchPendingQuery: null,
                  searchEnabled: !1
              }),
              mutations: {
                  appLoaded(e) {
                      e.appLoaded = !0
                  },
                  activeChannel(e, n) {
                      e.activeChannel = n
                  },
                  currentUserVisibleError(e, n) {
                      e.currentUserVisibleError = n
                  },
                  refreshDesktopNotificationState(e) {
                      e.desktopNotificationState = g()
                  },
                  isAutoCompleting(e, n) {
                      e.isAutoCompleting = n
                  },
                  isConnected(e, n) {
                      e.isConnected = n
                  },
                  networks(e, n) {
                      e.networks = n
                  },
                  mentions(e, n) {
                      e.mentions = n
                  },
                  removeNetwork(e, n) {
                      e.networks.splice(e.networks.findIndex((e=>e.uuid === n)), 1)
                  },
                  sortNetworks(e, n) {
                      e.networks.sort(n)
                  },
                  hasServiceWorker(e) {
                      e.hasServiceWorker = !0
                  },
                  pushNotificationState(e, n) {
                      e.pushNotificationState = n
                  },
                  serverConfiguration(e, n) {
                      e.serverConfiguration = n
                  },
                  sessions(e, n) {
                      e.sessions = n
                  },
                  sidebarOpen(e, n) {
                      e.sidebarOpen = n
                  },
                  sidebarDragging(e, n) {
                      e.sidebarDragging = n
                  },
                  toggleSidebar(e) {
                      e.sidebarOpen = !e.sidebarOpen
                  },
                  toggleUserlist(e) {
                      e.userlistOpen = !e.userlistOpen
                  },
                  userlistOpen(e, n) {
                      e.userlistOpen = n
                  },
                  versionData(e, n) {
                      e.versionData = n
                  },
                  versionStatus(e, n) {
                      e.versionStatus = n
                  },
                  versionDataExpired(e, n) {
                      e.versionDataExpired = n
                  },
                  serverHasSettings(e, n) {
                      e.serverHasSettings = n
                  },
                  messageSearchPendingQuery(e, n) {
                      e.messageSearchPendingQuery = n
                  },
                  messageSearchResults(e, n) {
                      e.messageSearchResults = n
                  },
                  addMessageSearchResults(e, n) {
                      if (e.messageSearchResults || (e.messageSearchResults = {
                          results: []
                      }),
                      !n)
                          return;
                      const a = [...n.results, ...e.messageSearchResults.results];
                      e.messageSearchResults = {
                          results: a
                      }
                  }
              },
              actions: {
                  partChannel({commit: e, state: n}, a) {
                      e("mentions", n.mentions.filter((e=>!(e.chanId === a.channel.id))))
                  }
              },
              getters: {
                  findChannelOnCurrentNetwork: e=>n=>(n = n.toLowerCase(),
                  e.activeChannel?.network.channels.find((e=>e.name.toLowerCase() === n))),
                  findChannelOnNetwork: e=>(n,a)=>{
                      for (const t of e.networks)
                          if (t.uuid === n)
                              for (const e of t.channels)
                                  if (e.name === a)
                                      return {
                                          network: t,
                                          channel: e
                                      };
                      return null
                  }
                  ,
                  findChannel: e=>n=>{
                      for (const a of e.networks)
                          for (const e of a.channels)
                              if (e.id === n)
                                  return {
                                      network: a,
                                      channel: e
                                  };
                      return null
                  }
                  ,
                  findNetwork: e=>n=>{
                      for (const a of e.networks)
                          if (a.uuid === n)
                              return a;
                      return null
                  }
                  ,
                  highlightCount(e) {
                      let n = 0;
                      for (const a of e.networks)
                          for (const e of a.channels)
                              e.muted || (n += e.highlight);
                      return n
                  },
                  title: (e,n)=>(n.highlightCount ? `(${n.highlightCount.toString()}) ` : "") + (e.activeChannel ? `${e.activeChannel.channel.name} — ` : "") + h,
                  initChannel: ()=>e=>(e.pendingMessage = "",
                  e.inputHistoryPosition = 0,
                  e.inputHistory = [""].concat(e.messages.filter((e=>e.self && e.text && "message" === e.type)).map((e=>e.text)).reverse().slice(0, 99)),
                  e.historyLoading = !1,
                  e.scrolledToBottom = !0,
                  e.editTopic = !1,
                  e.moreHistoryAvailable = e.totalMessages > e.messages.length,
                  delete e.totalMessages,
                  "channel" === e.type && (e.usersOutdated = !0),
                  e)
              }
          }
            , w = Symbol()
            , f = (0,
          t.MT)(m)
            , k = function(e) {
              return {
                  namespaced: !0,
                  state: d(c(), u()),
                  mutations: {
                      set(e, {name: n, value: a}) {
                          e[n] = a
                      }
                  },
                  actions: {
                      syncAll({state: n}, a=!1) {
                          if (!1 !== n.syncSettings || !1 !== a) {
                              e.commit("serverHasSettings", !0);
                              for (const e in n)
                                  "never" === l[e].sync && "always" !== l[e].sync || o.Z.emit("setting:set", {
                                      name: e,
                                      value: n[e]
                                  })
                          }
                      },
                      applyAll({state: n}) {
                          for (const a in l)
                              l[a].apply(e, n[a], !0)
                      },
                      update({state: n, commit: a}, {name: t, value: i, sync: r=!1}) {
                          if (n[t] === i)
                              return;
                          const c = l[t];
                          c && (!1 !== r || !1 !== n.syncSettings && "never" !== c.sync) && (a("set", {
                              name: t,
                              value: i
                          }),
                          s.Z.set("settings", JSON.stringify(n)),
                          c.apply(e, i),
                          r && (n.syncSettings && "never" !== c.sync || "always" === c.sync) && o.Z.emit("setting:set", {
                              name: t,
                              value: i
                          }))
                      }
                  }
              }
          }(f);
          function b() {
              return (0,
              t.oR)(w)
          }
          f.registerModule("settings", k)
      }
      ,
      5555: (e,n,a)=>{
          "use strict";
          var t = a(4366)
            , s = a(8687)
            , o = a(6084);
          const i = new class {
              xhr = null;
              fileQueue = [];
              tokenKeepAlive = null;
              overlay = null;
              uploadProgressbar = null;
              onDragEnter = e=>this.dragEnter(e);
              onDragOver = e=>this.dragOver(e);
              onDragLeave = e=>this.dragLeave(e);
              onDrop = e=>this.drop(e);
              onPaste = e=>this.paste(e);
              init() {
                  s.Z.on("upload:auth", (e=>this.uploadNextFileInQueue(e)))
              }
              mounted() {
                  this.overlay = document.getElementById("upload-overlay"),
                  this.uploadProgressbar = document.getElementById("upload-progressbar"),
                  document.addEventListener("dragenter", this.onDragEnter),
                  document.addEventListener("dragover", this.onDragOver),
                  document.addEventListener("dragleave", this.onDragLeave),
                  document.addEventListener("drop", this.onDrop),
                  document.addEventListener("paste", this.onPaste)
              }
              unmounted() {
                  document.removeEventListener("dragenter", this.onDragEnter),
                  document.removeEventListener("dragover", this.onDragOver),
                  document.removeEventListener("dragleave", this.onDragLeave),
                  document.removeEventListener("drop", this.onDrop),
                  document.removeEventListener("paste", this.onPaste)
              }
              dragOver(e) {
                  e.dataTransfer?.types.includes("Files") && e.preventDefault()
              }
              dragEnter(e) {
                  !e.relatedTarget && e.dataTransfer?.types.includes("Files") && (e.preventDefault(),
                  this.overlay?.classList.add("is-dragover"))
              }
              dragLeave(e) {
                  e.relatedTarget || (e.preventDefault(),
                  this.overlay?.classList.remove("is-dragover"))
              }
              drop(e) {
                  if (!e.dataTransfer?.types.includes("Files"))
                      return;
                  let n;
                  e.preventDefault(),
                  this.overlay?.classList.remove("is-dragover"),
                  n = e.dataTransfer.items ? Array.from(e.dataTransfer.items).filter((e=>"file" === e.kind)).map((e=>e.getAsFile())) : Array.from(e.dataTransfer.files),
                  this.triggerUpload(n)
              }
              paste(e) {
                  const n = e.clipboardData?.items
                    , a = [];
                  if (n) {
                      for (let e = 0; e < n.length; e++)
                          "file" === n[e].kind && a.push(n[e].getAsFile());
                      0 !== a.length && (e.preventDefault(),
                      this.triggerUpload(a))
                  }
              }
              triggerUpload(e) {
                  if (!e.length)
                      return;
                  if (!o.h.state.isConnected)
                      return void this.handleResponse({
                          error: "You are currently disconnected, unable to initiate upload process."
                      });
                  const n = 0 === this.fileQueue.length
                    , a = o.h.state.serverConfiguration?.fileUploadMaxFileSize || 0;
                  for (const n of e) {
                      if (!n)
                          return;
                      a > 0 && n.size > a ? this.handleResponse({
                          error: `File ${n.name} is over the maximum allowed size`
                      }) : this.fileQueue.push(n)
                  }
                  n && null === this.xhr && this.fileQueue.length > 0 && this.requestToken()
              }
              requestToken() {
                  s.Z.emit("upload:auth")
              }
              setProgress(e) {
                  this.uploadProgressbar && (this.uploadProgressbar.classList.toggle("upload-progressbar-visible", e > 0),
                  this.uploadProgressbar.style.width = `${e}%`)
              }
              uploadNextFileInQueue(e) {
                  const n = this.fileQueue.shift();
                  n && (this.tokenKeepAlive = setInterval((()=>s.Z.emit("upload:ping", e)), 4e4),
                  o.h.state.settings.uploadCanvas && n.type.startsWith("image/") && !n.type.includes("svg") && "image/gif" !== n.type ? this.renderImage(n, (n=>this.performUpload(e, n))) : this.performUpload(e, n))
              }
              renderImage(e, n) {
                  const a = new FileReader;
                  a.onabort = ()=>n(e),
                  a.onerror = ()=>a.abort(),
                  a.onload = ()=>{
                      const t = new Image;
                      t.onerror = ()=>n(e),
                      t.onload = ()=>{
                          const a = document.createElement("canvas");
                          a.width = t.width,
                          a.height = t.height;
                          const s = a.getContext("2d");
                          if (!s)
                              throw new Error("Could not get canvas context in upload");
                          s.drawImage(t, 0, 0),
                          a.toBlob((a=>{
                              n(new File([a],e.name))
                          }
                          ), e.type)
                      }
                      ,
                      t.src = String(a.result)
                  }
                  ,
                  a.readAsDataURL(e)
              }
              performUpload(e, n) {
                  this.xhr = new XMLHttpRequest,
                  this.xhr.upload.addEventListener("progress", (e=>{
                      const n = Math.floor(e.loaded / e.total * 1e3) / 10;
                      this.setProgress(n)
                  }
                  ), !1),
                  this.xhr.onreadystatechange = ()=>{
                      if (this.xhr?.readyState === XMLHttpRequest.DONE) {
                          let e;
                          try {
                              e = JSON.parse(this.xhr.responseText)
                          } catch (n) {
                              e = {
                                  error: `Upload aborted: ${this.xhr.statusText} (HTTP ${this.xhr.status})`
                              }
                          }
                          this.handleResponse(e),
                          this.xhr = null,
                          this.fileQueue.length > 0 && this.requestToken()
                      }
                  }
                  ;
                  const a = new FormData;
                  a.append("file", n),
                  this.xhr.open("POST", `uploads/new/${e}`),
                  this.xhr.send(a)
              }
              handleResponse(e) {
                  this.setProgress(0),
                  this.tokenKeepAlive && (clearInterval(this.tokenKeepAlive),
                  this.tokenKeepAlive = null),
                  e.error ? o.h.commit("currentUserVisibleError", e.error) : e.url && this.insertUploadUrl(e.url)
              }
              insertUploadUrl(e) {
                  const n = new URL(e,location.toString()).toString()
                    , a = document.getElementById("input");
                  if (!(a instanceof HTMLTextAreaElement))
                      throw new Error("Could not find textbox in upload");
                  const s = a.selectionStart
                    , o = s > 0 ? a.value.substring(0, s) + " " : ""
                    , i = a.value.substring(s)
                    , r = o + n + " ";
                  (0,
                  t.update)(a, r + i),
                  a.selectionStart = a.selectionEnd = r.length
              }
              abort() {
                  this.fileQueue = [],
                  this.xhr && (this.xhr.abort(),
                  this.xhr = null)
              }
          }
          ;
          n.Z = {
              abort: ()=>i.abort(),
              initialize: ()=>i.init(),
              mounted: ()=>i.mounted(),
              unmounted: ()=>i.unmounted(),
              triggerUpload: e=>i.triggerUpload(e)
          }
      }
      ,
      43: (e,n,a)=>{
          "use strict";
          var t = a(9307)
            , s = a(1406)
            , o = a(6084)
            , i = a(4900)
            , r = a(2297)
            , l = a(7543)
            , c = a(8687)
            , u = a(8833);
          function d(e) {
              const n = String(e.message || e);
              if (o.h.commit("isConnected", !1),
              !c.Z.io.reconnection())
                  return o.h.commit("currentUserVisibleError", `Disconnected from the server (${n}), The Lounge does not reconnect in public mode.`),
                  void h();
              var a;
              o.h.commit("currentUserVisibleError", `Waiting to reconnect… (${n})`),
              h(),
              c.Z.io.skipReconnect && "io client disconnect" !== n && (a = ()=>c.Z.connect(),
              2e3,
              window.requestIdleCallback ? window.requestIdleCallback(a, {
                  timeout: 2e3
              }) : a())
          }
          function h() {
              const e = document.getElementById("loading-page-message");
              e && (e.textContent = o.h.state.currentUserVisibleError)
          }
          c.Z.on("disconnect", d),
          c.Z.on("connect_error", d),
          c.Z.on("error", d),
          c.Z.io.on("reconnect_attempt", (function(e) {
              o.h.commit("currentUserVisibleError", `Reconnecting… (attempt ${e})`),
              h()
          }
          )),
          c.Z.on("connecting", (function() {
              o.h.commit("currentUserVisibleError", "Connecting…"),
              h()
          }
          )),
          c.Z.on("connect", (function() {
              c.Z.sendBuffer = [],
              o.h.commit("currentUserVisibleError", "Finalizing connection…"),
              h()
          }
          ));
          var p = a(9260);
          let g = null;
          async function m() {
              window.g_TheLoungeRemoveLoading && window.g_TheLoungeRemoveLoading(),
              "SignIn" !== l.Nd.currentRoute.value.name && await (0,
              l.c4)("SignIn")
          }
          function w(e) {
              c.Z.disconnect(),
              o.h.commit("currentUserVisibleError", e),
              p.Z.reload()
          }
          function f() {
              const e = document.getElementById("loading-page-message");
              e && (e.textContent = o.h.state.currentUserVisibleError)
          }
          function k(e, n) {
              for (let a = 0; a < n.length; a++) {
                  const t = n[a]
                    , s = e.find((e=>e.id === t.id));
                  if (s) {
                      for (const e in t)
                          Object.prototype.hasOwnProperty.call(t, e) && ("users" !== e ? "totalMessages" !== e ? "messages" === e && s.messages && t.messages.length < 100 ? s.messages = s.messages.concat(t.messages) : s[e] = t[e] : s.moreHistoryAvailable = t.totalMessages > s.messages.length : "channel" === t.type && (o.h.state.activeChannel && o.h.state.activeChannel.channel === s ? c.Z.emit("names", {
                              target: t.id
                          }) : s.usersOutdated = !0));
                      n[a] = s
                  } else
                      o.h.getters.initChannel(t)
              }
              return n
          }
          c.Z.on("auth:success", (function() {
              o.h.commit("currentUserVisibleError", "Loading messages…"),
              f()
          }
          )),
          c.Z.on("auth:failed", (async function() {
              if (r.Z.remove("token"),
              o.h.state.appLoaded)
                  return w("Authentication failed, reloading…");
              await m()
          }
          )),
          c.Z.on("auth:start", (async function(e) {
              if (g && e !== g)
                  return w("Server restarted, reloading…");
              g = e;
              const n = r.Z.get("user")
                , a = r.Z.get("token")
                , t = n && a;
              if (o.h.state.appLoaded && !t)
                  return w("Authentication failed, reloading…");
              if (t) {
                  o.h.commit("currentUserVisibleError", "Authorizing…"),
                  f();
                  let e = -1;
                  for (const n of o.h.state.networks)
                      for (const a of n.channels)
                          if (a.messages.length > 0) {
                              const n = a.messages[a.messages.length - 1].id;
                              e < n && (e = n)
                          }
                  const t = o.h.state.activeChannel && o.h.state.activeChannel.channel.id || null;
                  c.Z.emit("auth:perform", {
                      user: n,
                      token: a,
                      lastMessage: e,
                      openChannel: t,
                      hasConfig: null !== o.h.state.serverConfiguration
                  })
              } else
                  await m()
          }
          )),
          c.Z.on("commands", (function(e) {
              e && (t.Z.commands = e)
          }
          )),
          c.Z.on("init", (async function(e) {
              if (o.h.commit("networks", function(e) {
                  const n = r.Z.get("thelounge.networks.collapsed")
                    , a = n ? new Set(JSON.parse(n)) : new Set;
                  for (let n = 0; n < e.length; n++) {
                      const t = e[n]
                        , s = o.h.getters.findNetwork(t.uuid);
                      if (s) {
                          for (const e in t)
                              Object.prototype.hasOwnProperty.call(t, e) && ("channels" === e ? s.channels = k(s.channels, t.channels) : s[e] = t[e]);
                          e[n] = s
                      } else
                          t.isJoinChannelShown = !1,
                          t.isCollapsed = a.has(t.uuid),
                          t.channels.forEach(o.h.getters.initChannel)
                  }
                  return e
              }(e.networks)),
              o.h.commit("isConnected", !0),
              o.h.commit("currentUserVisibleError", null),
              e.token && r.Z.set("token", e.token),
              !o.h.state.appLoaded) {
                  o.h.commit("appLoaded"),
                  c.Z.emit("setting:get");
                  try {
                      await l.Nd.isReady()
                  } catch (e) {}
                  window.g_TheLoungeRemoveLoading && window.g_TheLoungeRemoveLoading();
                  const n = await async function() {
                      if (!("URLSearchParams"in window))
                          return !1;
                      const e = new URLSearchParams(document.location.search)
                        , n = ()=>{
                          const e = window.location.origin + window.location.pathname + window.location.hash;
                          window.history.replaceState({}, document.title, e)
                      }
                      ;
                      if (e.has("uri")) {
                          const a = e.get("uri")
                            , t = (e=>{
                              const n = {
                                  name: "",
                                  host: "",
                                  port: "",
                                  join: "",
                                  tls: !1
                              };
                              try {
                                  const a = new URL(e);
                                  if ("irc:" === a.protocol)
                                      a.protocol = "http:",
                                      a.port || (a.port = "6667");
                                  else {
                                      if ("ircs:" !== a.protocol)
                                          return;
                                      a.protocol = "https:",
                                      a.port || (a.port = "6697"),
                                      n.tls = !0
                                  }
                                  if (!a.hostname)
                                      return {};
                                  n.host = n.name = a.hostname,
                                  n.port = a.port;
                                  let t = "";
                                  a.pathname.length > 1 && (t = a.pathname.substr(1)),
                                  a.hash.length > 1 && (t += a.hash),
                                  n.join = t
                              } catch (e) {}
                              return n
                          }
                          )(String(a));
                          return n(),
                          await l.Nd.push({
                              name: "Connect",
                              query: t
                          }),
                          !0
                      }
                      if (document.body.classList.contains("public") && document.location.search) {
                          const a = Object.fromEntries(e.entries());
                          return n(),
                          await l.Nd.push({
                              name: "Connect",
                              query: a
                          }),
                          !0
                      }
                      return !1
                  }();
                  if (!(n || l.Nd.currentRoute?.value?.name && "SignIn" !== l.Nd.currentRoute?.value?.name)) {
                      const n = o.h.getters.findChannel(e.active);
                      n ? (0,
                      l.qZ)(n.channel) : o.h.state.networks.length > 0 ? (0,
                      l.qZ)(o.h.state.networks[0].channels[0]) : await (0,
                      l.c4)("Connect")
                  }
              }
          }
          )),
          c.Z.on("join", (function(e) {
              o.h.getters.initChannel(e.chan);
              const n = o.h.getters.findNetwork(e.network);
              if (!n)
                  return;
              if (n.channels.splice(e.index || -1, 0, e.chan),
              "query" === e.chan.type && !e.shouldOpen)
                  return;
              const a = o.h.getters.findChannel(e.chan.id);
              a ? (0,
              l.qZ)(a.channel) : console.error("Could not find channel", e.chan.id)
          }
          ));
          var b = a(3648);
          c.Z.on("more", (async e=>{
              const n = o.h.getters.findChannel(e.chan)?.channel;
              n && (n.inputHistory = n.inputHistory.concat(e.messages.filter((e=>e.self && e.text && "message" === e.type)).map((e=>e.text)).reverse().slice(0, 100 - n.inputHistory.length)),
              n.moreHistoryAvailable = e.totalMessages > n.messages.length + e.messages.length,
              n.messages.unshift(...e.messages),
              await (0,
              b.Y3)(),
              n.historyLoading = !1)
          }
          ));
          var v = a(9099);
          let _;
          try {
              _ = new Audio,
              _.src = "audio/pop.wav"
          } catch (e) {
              _ = {
                  play() {}
              }
          }
          c.Z.on("msg", (function(e) {
              const n = o.h.getters.findChannel(e.chan);
              if (!n)
                  return;
              let a = n.channel
                , t = o.h.state.activeChannel && o.h.state.activeChannel.channel === a;
              e.msg.showInActive && (o.h.state.activeChannel && o.h.state.activeChannel.network === n.network ? (a = o.h.state.activeChannel.channel,
              t = !0,
              e.chan === a.id ? delete e.msg.showInActive : e.chan = a.id) : delete e.msg.showInActive),
              !e.msg.self ? ((a.highlight = 1), (a.unread = a.unread+1)) : ((a.highlight = 0), (a.unread = 0)),
              a.messages.push(e.msg),
              e.msg.self ? a.firstUnread = e.msg.id : function(e, n, a, t) {
                  if (!n.muted && (t.highlight || o.h.state.settings.notifyAllMessages && "message" === t.type) && (!document.hasFocus() || !a || a.channel !== n)) {
                      if (o.h.state.settings.notification)
                          try {
                              _.play()
                          } catch (e) {}
                      if (o.h.state.settings.desktopNotifications && "Notification"in window && "granted" === Notification.permission) {
                          let a, s;
                          "invite" === t.type ? (a = "New channel invite:",
                          s = t.from.nick + " invited you to " + t.channel) : (a = String(t.from.nick),
                          "query" !== n.type && (a += ` (${n.name})`),
                          "message" === t.type && (a += " says:"),
                          s = (0,
                          v.k)(t.text));
                          const i = Date.parse(String(t.time));
                          try {
                              o.h.state.hasServiceWorker ? navigator.serviceWorker.ready.then((n=>{
                                  n.active?.postMessage({
                                      type: "notification",
                                      chanId: e,
                                      timestamp: i,
                                      title: a,
                                      body: s
                                  })
                              }
                              )).catch((()=>{}
                              )) : new Notification(a,{
                                  tag: `chan-${e}`,
                                  badge: "img/icon-alerted-black-transparent-bg-72x72px.png",
                                  icon: "img/icon-alerted-grey-bg-192x192px.png",
                                  body: s,
                                  timestamp: i
                              }).addEventListener("click", (function() {
                                  this.close(),
                                  window.focus();
                                  const n = o.h.getters.findChannel(e);
                                  n && (0,
                                  l.qZ)(n.channel)
                              }
                              ))
                          } catch (e) {}
                      }
                  }
              }(e.chan, a, o.h.state.activeChannel, e.msg);
              let s = 0;
              t ? a.scrolledToBottom && (s = 1500) : s = 100,
              s > 0 && a.messages.length > s && (a.messages.splice(0, a.messages.length - s),
              a.moreHistoryAvailable = !0),
              "channel" === a.type && function(e, n) {
                  if ("message" === n.type || "action" === n.type) {
                      const a = e.users.find((e=>e.nick === n.from.nick));
                      a && (a.lastMessage = new Date(n.time).getTime() || Date.now())
                  } else if ("quit" === n.type || "part" === n.type) {
                      const a = e.users.findIndex((e=>e.nick === n.from.nick));
                      a > -1 && e.users.splice(a, 1)
                  } else if ("kick" === n.type) {
                      const a = e.users.findIndex((e=>e.nick === n.target.nick));
                      a > -1 && e.users.splice(a, 1)
                  }
              }(a, e.msg)
          }
          )),
          c.Z.on("msg:preview", (function(e) {
              const n = o.h.getters.findChannel(e.chan)?.channel.messages.find((n=>n.id === e.id));
              if (!n)
                  return;
              const a = n.previews.findIndex((n=>n.link === e.preview.link));
              a > -1 && (n.previews[a] = e.preview)
          }
          )),
          c.Z.on("msg:special", (function(e) {
              const n = o.h.getters.findChannel(e.chan);
              n && (n.channel.data = e.data,
              (0,
              l.qZ)(n.channel))
          }
          )),
          c.Z.on("names", (function(e) {
              const n = o.h.getters.findChannel(e.id);
              n && (n.channel.users = e.users)
          }
          )),
          c.Z.on("network", (function(e) {
              const n = e.networks[0];
              n.isJoinChannelShown = !1,
              n.isCollapsed = !1,
              n.channels.forEach(o.h.getters.initChannel),
              o.h.commit("networks", [...o.h.state.networks, n]),
              (0,
              l.qZ)(n.channels[n.channels.length - 1])
          }
          )),
          c.Z.on("network:options", (function(e) {
              const n = o.h.getters.findNetwork(e.network);
              n && (n.serverOptions = e.serverOptions)
          }
          )),
          c.Z.on("network:status", (function(e) {
              const n = o.h.getters.findNetwork(e.network);
              n && (n.status.connected = e.connected,
              n.status.secure = e.secure,
              e.connected || n.channels.forEach((e=>{
                  e.users = [],
                  e.state = 0
              }
              )))
          }
          )),
          c.Z.on("channel:state", (function(e) {
              const n = o.h.getters.findChannel(e.chan);
              n && (n.channel.state = e.state)
          }
          )),
          c.Z.on("network:info", (function(e) {
              const n = o.h.getters.findNetwork(e.uuid);
              if (n)
                  for (const a in e)
                      n[a] = e[a]
          }
          )),
          c.Z.on("network:name", (function(e) {
              const n = o.h.getters.findNetwork(e.uuid);
              n && (n.name = n.channels[0].name = e.name)
          }
          )),
          c.Z.on("nick", (function(e) {
              const n = o.h.getters.findNetwork(e.network);
              n && (n.nick = e.nick)
          }
          )),
          c.Z.on("open", (function(e) {
              if (e < 1)
                  return;
              if (o.h.state.activeChannel && o.h.state.activeChannel.channel.id === e)
                  return;
              const n = o.h.getters.findChannel(e);
              n && (n.channel.highlight = 0,
              n.channel.unread = 0,
              n.channel.messages.length > 0 && (n.channel.firstUnread = n.channel.messages[n.channel.messages.length - 1].id))
          }
          )),
          c.Z.on("part", (async function(e) {
              o.h.state.activeChannel && o.h.state.activeChannel.channel.id === e.chan && (0,
              l.qZ)(o.h.state.activeChannel.network.channels[0]);
              const n = o.h.getters.findChannel(e.chan);
              n && (n.network.channels.splice(n.network.channels.findIndex((n=>n.id === e.chan)), 1),
              await o.h.dispatch("partChannel", n))
          }
          )),
          c.Z.on("quit", (async function(e) {
              const n = o.h.state.activeChannel && o.h.state.activeChannel.network.uuid === e.network;
              o.h.commit("removeNetwork", e.network),
              n && (o.h.state.networks.length > 0 ? (0,
              l.qZ)(o.h.state.networks[0].channels[0]) : await (0,
              l.c4)("Connect"))
          }
          )),
          c.Z.on("sync_sort", (function(e) {
              const n = e.order;
              switch (e.type) {
              case "networks":
                  o.h.commit("sortNetworks", ((e,a)=>n.indexOf(e.uuid) - n.indexOf(a.uuid)));
                  break;
              case "channels":
                  {
                      const a = o.h.getters.findNetwork(e.target);
                      if (!a)
                          return;
                      a.channels.sort(((e,a)=>n.indexOf(e.id) - n.indexOf(a.id)));
                      break
                  }
              }
          }
          )),
          c.Z.on("topic", (function(e) {
              const n = o.h.getters.findChannel(e.chan);
              n && (n.channel.topic = e.topic)
          }
          )),
          c.Z.on("users", (function(e) {
              if (o.h.state.activeChannel && o.h.state.activeChannel.channel.id === e.chan)
                  return c.Z.emit("names", {
                      target: e.chan
                  });
              const n = o.h.getters.findChannel(e.chan);
              n && (n.channel.usersOutdated = !0)
          }
          ));
          var y = a(7286);
          c.Z.on("sign-out", (function() {
              y.Z.signout()
          }
          )),
          c.Z.on("sessions:list", (function(e) {
              e.sort(((e,n)=>n.lastUse - e.lastUse)),
              o.h.commit("sessions", e)
          }
          ));
          var C = a(5555);
          c.Z.once("configuration", (function(e) {
              o.h.commit("serverConfiguration", e),
              o.h.dispatch("settings/applyAll"),
              e.fileUpload && C.Z.initialize();
              const n = e.themes.find((e=>e.name === o.h.state.settings.theme));
              void 0 === n ? o.h.dispatch("settings/update", {
                  name: "theme",
                  value: e.defaultTheme,
                  sync: !0
              }) : n.themeColor && (document.querySelector('meta[name="theme-color"]').content = n.themeColor),
              document.body.classList.contains("public") && window.addEventListener("beforeunload", (e=>{
                  e.preventDefault(),
                  e.returnValue = "Are you sure you want to navigate away from this page?"
              }
              ))
          }
          )),
          c.Z.on("changelog", (function(e) {
              let n;
              if (o.h.commit("versionData", e),
              o.h.commit("versionDataExpired", !1),
              n = e.latest ? "new-version" : e.packages ? "new-packages" : e.current.changelog ? "up-to-date" : "error",
              o.h.commit("versionStatus", n),
              e.expiresAt) {
                  const n = e.expiresAt - Date.now();
                  n > 0 ? setTimeout((()=>o.h.commit("versionDataExpired", !0)), n) : o.h.commit("versionDataExpired", !0)
              }
          }
          )),
          c.Z.on("changelog:newversion", (()=>{
              o.h.state.serverConfiguration && (o.h.state.serverConfiguration.isUpdateAvailable = !0)
          }
          )),
          c.Z.on("setting:new", (async function(e) {
              const n = e.name
                , a = e.value;
              await o.h.dispatch("settings/update", {
                  name: n,
                  value: a,
                  sync: !1
              })
          }
          )),
          c.Z.on("setting:all", (async function(e) {
              const n = Object.keys(e).length > 0;
              if (o.h.commit("serverHasSettings", n),
              n)
                  for (const n in e)
                      await o.h.dispatch("settings/update", {
                          name: n,
                          value: e[n],
                          sync: !1
                      });
              else
                  await o.h.dispatch("settings/syncAll")
          }
          )),
          c.Z.on("history:clear", (function(e) {
              const n = o.h.getters.findChannel(e.target);
              n?.channel && (n.channel.messages = [],
              n.channel.unread = 0,
              n.channel.highlight = 0,
              n.channel.firstUnread = 0,
              n.channel.moreHistoryAvailable = !1)
          }
          )),
          c.Z.on("mentions:list", (function(e) {
              o.h.commit("mentions", e)
          }
          )),
          c.Z.on("search:results", (e=>{
              const n = o.h.state.messageSearchPendingQuery;
              n && n.channelName === e.channelName && n.networkUuid === e.networkUuid && n.offset === e.offset && n.searchTerm === e.searchTerm && (o.h.commit("messageSearchPendingQuery", null),
              o.h.state.messageSearchResults ? o.h.commit("addMessageSearchResults", e) : o.h.commit("messageSearchResults", {
                  results: e.results
              }))
          }
          )),
          c.Z.on("mute:changed", (e=>{
              const {target: n, status: a} = e
                , t = o.h.getters.findChannel(n);
              if ("lobby" === t?.channel.type)
                  for (const e of t.network.channels)
                      "special" !== e.type && (e.muted = a);
              else
                  t && (t.channel.muted = a)
          }
          )),
          a(4672);
          var x = a(2441)
            , S = a.n(x)
            , D = a(5485)
            , Z = a(4827)
            , U = a(5118);
          function M(e) {
              if (0 === o.h.state.networks.length)
                  return;
              const n = [];
              let a = -1;
              for (const e of o.h.state.networks)
                  for (const t of e.channels)
                      (0,
                      D.Z)(e, t) || (-1 === a && o.h.state.activeChannel?.channel === t && (a = n.length),
                      n.push(t));
              const t = n.length;
              a = ((a + e) % t + t) % t,
              q(n[a])
          }
          function q(e) {
              (0,
              l.qZ)(e);
              const n = document.querySelector(`#sidebar .channel-list-item[aria-controls="#chan-${e.id}"]`);
              n && n.scrollIntoView({
                  block: "center",
                  inline: "nearest"
              })
          }
          S().bind(["alt+up", "alt+down"], (function(e, n) {
              return !!(0,
              Z.Z)(e) || (M("up" === n.split("+").pop() ? -1 : 1),
              !1)
          }
          )),
          function(e) {
              let n = [];
              document.body.addEventListener("touchmove", (function(e) {
                  if (2 !== e.touches.length)
                      return;
                  const a = e.touches.item(0)
                    , t = e.touches.item(1);
                  if (!a || !t)
                      return;
                  const s = window.performance.now()
                    , o = [(a.screenX + t.screenX) / 2, (a.screenY + t.screenY) / 2];
                  if (n.length > 0) {
                      const e = n[n.length - 1]
                        , a = e.center[0] === o[0] && e.center[1] === o[1];
                      if (e.timestamp === s || a)
                          return
                  }
                  n.push({
                      timestamp: s,
                      center: o
                  })
              }
              ), {
                  passive: !0
              }),
              document.body.addEventListener("touchend", (function(a) {
                  if (!(a.touches.length >= 2))
                      try {
                          const a = function(e) {
                              if (e.length < 2)
                                  return null;
                              for (let n = 1; n < e.length; ++n) {
                                  const a = e[n - 1]
                                    , t = e[n];
                                  if ((0,
                                  U.Z)(a.center, t.center) / Math.abs(a.timestamp - t.timestamp) < .2)
                                      return null
                              }
                              return function([e,n], [a,t]) {
                                  const s = (t - n) / (a - e);
                                  return Math.abs(s) < 1 ? e < a ? "e" : "w" : n < t ? "s" : "n"
                              }(e[0].center, e[e.length - 1].center)
                          }(n);
                          a && e(a)
                      } finally {
                          n = []
                      }
              }
              ), {
                  passive: !0
              }),
              document.body.addEventListener("touchcancel", (function() {
                  n = []
              }
              ), {
                  passive: !0
              })
          }((function(e) {
              "e" !== e && "w" !== e || M("e" === e ? -1 : 1)
          }
          )),
          S().bind(["alt+shift+up", "alt+shift+down"], (function(e, n) {
              if ((0,
              Z.Z)(e))
                  return !0;
              const a = o.h.state.networks.length;
              if (0 === a)
                  return !1;
              const t = "up" === n.split("+").pop() ? -1 : 1;
              let s = 0;
              return o.h.state.activeChannel && (s = o.h.state.networks.findIndex((e=>e === o.h.state.activeChannel?.network)),
              -1 === t && "lobby" !== o.h.state.activeChannel?.channel.type || (s = ((s + t) % a + a) % a)),
              q(o.h.state.networks[s].channels[0]),
              !1
          }
          )),
          S().bind(["alt+mod+up", "alt+mod+down"], (function(e, n) {
              if ((0,
              Z.Z)(e))
                  return !0;
              const a = o.h.state.networks.map((e=>e.channels.filter((e=>e.unread || e === o.h.state.activeChannel?.channel)))).flat();
              if (0 === a.length)
                  return;
              let t = a.findIndex((e=>e === o.h.state.activeChannel?.channel));
              const s = a.length;
              return t = ((t + ("up" === n.split("+").pop() ? -1 : 1)) % s + s) % s,
              q(a[t]),
              !1
          }
          )),
          S().bind(["alt+a"], (function(e) {
              if ((0,
              Z.Z)(e))
                  return !0;
              let n;
              e: for (const e of o.h.state.networks)
                  for (const a of e.channels) {
                      if (a.highlight) {
                          n = a;
                          break e
                      }
                      a.unread && !n && (n = a)
                  }
              return n && q(n),
              !1
          }
          )),
          S().bind(["alt+/"], (function(e) {
              return !!(0,
              Z.Z)(e) || ((0,
              l.c4)("Help").catch((e=>console.log(e))),
              !1)
          }
          ));
          const j = {
              8: !0,
              9: !0,
              12: !0,
              16: !0,
              17: !0,
              18: !0,
              19: !0,
              20: !0,
              27: !0,
              35: !0,
              36: !0,
              37: !0,
              38: !0,
              39: !0,
              40: !0,
              45: !0,
              46: !0,
              112: !0,
              113: !0,
              114: !0,
              115: !0,
              116: !0,
              117: !0,
              118: !0,
              119: !0,
              120: !0,
              121: !0,
              122: !0,
              123: !0,
              144: !0,
              145: !0,
              224: !0
          };
          document.addEventListener("keydown", (e=>{
              if ("Escape" === e.key && "Help" === l.Nd.currentRoute.value.name)
                  return void l.Nd.go(-1);
              if (e.altKey || j[e.which])
                  return;
              if ((e.ctrlKey || e.metaKey) && 86 !== e.which)
                  return;
              if (33 === e.which || 34 === e.which) {
                  const e = document.querySelector(".window .chat-content .chat");
                  return void (e && e.focus())
              }
              const n = e.target.tagName;
              if ("INPUT" === n || "TEXTAREA" === n)
                  return;
              const a = document.getElementById("input");
              a && (a.focus(),
              13 === e.which && e.preventDefault())
          }
          ));
          const T = document.getElementById("favicon")
            , P = T?.getAttribute("href") || ""
            , H = T?.dataset.other || ""
            , L = (0,
          s.ri)(i.Z);
          L.use(l.Nd),
          L.use(o.h, o.Jy),
          L.mount("#app"),
          c.Z.open(),
          o.h.watch((e=>e.sidebarOpen), (e=>{
              window.innerWidth > t.Z.mobileViewportPixels && (r.Z.set("thelounge.state.sidebar", e.toString()),
              u.Z.emit("resize"))
          }
          )),
          o.h.watch((e=>e.userlistOpen), (e=>{
              r.Z.set("thelounge.state.userlist", e.toString()),
              u.Z.emit("resize")
          }
          )),
          o.h.watch(((e,n)=>n.title), (e=>{
              document.title = e
          }
          )),
          o.h.watch(((e,n)=>n.highlightCount), (e=>{
              T?.setAttribute("href", e > 0 ? H : P);
              const n = window.navigator;
              n.setAppBadge && (e > 0 ? n.setAppBadge(e) : n.clearAppBadge && n.clearAppBadge())
          }
          )),
          L.config.errorHandler = function(e) {
              e instanceof Error ? o.h.commit("currentUserVisibleError", `Vue error: ${e.message}`) : o.h.commit("currentUserVisibleError", `Vue error: ${String(e)}`),
              console.error(e)
          }
      }
      ,
      4672: (e,n,a)=>{
          "use strict";
          var t = a(8687)
            , s = a(6084);
          n.Z = {
              togglePushSubscription: function() {
                  s.h.commit("pushNotificationState", "loading"),
                  navigator.serviceWorker.ready.then((e=>e.pushManager.getSubscription().then((n=>n ? (t.Z.emit("push:unregister"),
                  n.unsubscribe().then((e=>{
                      s.h.commit("pushNotificationState", e ? "supported" : "unsupported")
                  }
                  ))) : e.pushManager.subscribe({
                      applicationServerKey: s.h.state.serverConfiguration?.applicationServerKey,
                      userVisibleOnly: !0
                  }).then((e=>{
                      t.Z.emit("push:register", e.toJSON()),
                      s.h.commit("pushNotificationState", "subscribed"),
                      s.h.commit("refreshDesktopNotificationState")
                  }
                  )))))).catch((e=>{
                      s.h.commit("pushNotificationState", "unsupported"),
                      s.h.commit("refreshDesktopNotificationState"),
                      console.error(e)
                  }
                  ))
              }
          },
          t.Z.once("push:issubscribed", (function(e) {
              "https:" === location.protocol || "localhost" === location.hostname || "127.0.0.1" === location.hostname ? "serviceWorker"in navigator && navigator.serviceWorker.register("service-worker.js").then((n=>{
                  if (s.h.commit("hasServiceWorker"),
                  n.pushManager)
                      return n.pushManager.getSubscription().then((n=>{
                          n && !1 === e ? n.unsubscribe().then((e=>{
                              s.h.commit("pushNotificationState", e ? "supported" : "unsupported")
                          }
                          )) : s.h.commit("pushNotificationState", n ? "subscribed" : "supported")
                      }
                      ))
              }
              )).catch((e=>{
                  s.h.commit("pushNotificationState", "unsupported"),
                  console.error(e)
              }
              )) : s.h.commit("pushNotificationState", "nohttps")
          }
          ))
      }
      ,
      9099: (e,n,a)=>{
          "use strict";
          a.d(n, {
              Z: ()=>o,
              k: ()=>s
          });
          const t = /\x02|\x1D|\x1F|\x16|\x0F|\x11|\x1E|\x03(?:[0-9]{1,2}(?:,[0-9]{1,2})?)?|\x04(?:[0-9a-f]{6}(?:,[0-9a-f]{6})?)?/gi;
          function s(e) {
              return e.replace(t, "").trim()
          }
          const o = new Set(["away", "back", "chghost", "join", "kick", "mode", "nick", "part", "quit"])
      }
      ,
      4900: (e,n,a)=>{
          "use strict";
          a.d(n, {
              Z: ()=>vn,
              E: ()=>wn
          });
          var t = a(3648)
            , s = a(3577);
          const o = (0,
          t._)("div", {
              id: "upload-overlay"
          }, null, -1);
          var i = a(9307)
            , r = a(8833)
            , l = a(2441)
            , c = a.n(l)
            , u = a(3493)
            , d = a.n(u)
            , h = a(2297)
            , p = a(4827)
            , g = a(1406);
          const m = {
              id: "sidebar",
              ref: "sidebar"
          }
            , w = {
              class: "scrollable-area"
          }
            , f = {
              class: "logo-container"
          }
            , k = ["src"]
            , b = ["src"]
            , v = {
              key: 0,
              title: "The Lounge has been built in development mode",
              style: {
                  backgroundColor: "#ff9e18",
                  color: "#000",
                  padding: "2px",
                  borderRadius: "4px",
                  fontSize: "12px"
              }
          }
            , _ = {
              id: "footer"
          }
            , y = {
              class: "tooltipped tooltipped-n tooltipped-no-touch",
              "aria-label": "Connect to network"
          }
            , C = ["aria-selected", "onClick", "onKeypress"]
            , x = {
              class: "tooltipped tooltipped-n tooltipped-no-touch",
              "aria-label": "Settings"
          }
            , S = ["aria-selected", "onClick", "onKeypress"]
            , D = ["aria-label"]
            , Z = ["aria-selected", "onClick", "onKeypress"];
          var U = a(8015)
            , M = a(2119)
            , q = a(6084);
          const j = {
              key: 0,
              class: "empty",
              role: "navigation",
              "aria-label": "Network and Channel list"
          }
            , T = {
              key: 1,
              ref: "networklist",
              role: "navigation",
              "aria-label": "Network and Channel list"
          }
            , P = {
              class: "jump-to-input"
          }
            , H = ["value"]
            , L = {
              key: 0,
              class: "jump-to-results"
          }
            , O = {
              key: 0
          }
            , I = ["onMouseenter"]
            , A = {
              key: 1,
              class: "no-results"
          }
            , E = ["id"];
          var N = a(1474);
          const z = {
              delay: {
                  type: Number,
                  default: 0,
                  required: !1
              },
              delayOnTouchOnly: {
                  type: Boolean,
                  default: !1,
                  required: !1
              },
              touchStartThreshold: {
                  type: Number,
                  default: 10,
                  required: !1
              },
              handle: {
                  type: String,
                  default: "",
                  required: !1
              },
              draggable: {
                  type: String,
                  default: "",
                  required: !1
              },
              ghostClass: {
                  type: String,
                  default: "",
                  required: !1
              },
              dragClass: {
                  type: String,
                  default: "",
                  required: !1
              },
              group: {
                  type: String,
                  default: "",
                  required: !1
              },
              class: {
                  type: String,
                  default: "",
                  required: !1
              },
              itemKey: {
                  type: String,
                  default: "",
                  required: !0
              },
              list: {
                  type: Array,
                  default: [],
                  required: !0
              },
              filter: {
                  type: String,
                  default: "",
                  required: !1
              }
          };
          var Y = (0,
          t.aZ)({
              name: "Draggable",
              props: z,
              emits: ["change", "choose", "unchoose"],
              setup(e, {emit: n}) {
                  const a = (0,
                  U.iH)(null)
                    , s = (0,
                  U.iH)(null);
                  return (0,
                  t.YP)(a, (a=>{
                      a && (s.value = new N.ZP(a,{
                          ...e,
                          onChoose(e) {
                              n("choose", e)
                          },
                          onUnchoose(e) {
                              n("unchoose", e)
                          },
                          onEnd(e) {
                              n("change", e)
                          }
                      }))
                  }
                  )),
                  (0,
                  t.Jd)((()=>{
                      s.value && (s.value.destroy(),
                      a.value = null)
                  }
                  )),
                  {
                      containerRef: a
                  }
              }
          })
            , R = a(3744)
            , W = (0,
          R.Z)(Y, [["render", function(e, n, a, o, i, r) {
              return (0,
              t.wg)(),
              (0,
              t.iD)("div", {
                  ref: "containerRef",
                  class: (0,
                  s.C_)(e.$props.class)
              }, [((0,
              t.wg)(!0),
              (0,
              t.iD)(t.HY, null, (0,
              t.Ko)(e.list, ((n,a)=>(0,
              t.WI)(e.$slots, "item", {
                  key: n[e.itemKey],
                  element: n,
                  index: a
              }))), 128))], 2)
          }
          ]])
            , F = a(3261);
          const B = ["aria-controls", "aria-label", "aria-expanded"]
            , $ = [(0,
          t._)("span", {
              class: "collapse-network-icon"
          }, null, -1)]
            , V = {
              key: 1,
              class: "collapse-network"
          }
            , J = {
              class: "lobby-wrap"
          }
            , K = ["title"]
            , G = {
              key: 0,
              class: "not-secure-tooltip tooltipped tooltipped-w",
              "aria-label": "Insecure connection"
          }
            , X = [(0,
          t._)("span", {
              class: "not-secure-icon"
          }, null, -1)]
            , Q = {
              key: 1,
              class: "not-connected-tooltip tooltipped tooltipped-w",
              "aria-label": "Disconnected"
          }
            , ee = [(0,
          t._)("span", {
              class: "not-connected-icon"
          }, null, -1)]
            , ne = ["aria-label"]
            , ae = ["aria-controls", "aria-label"];
          var te = (e,n)=>{
              const a = h.Z.get("thelounge.networks.collapsed")
                , t = a ? new Set(JSON.parse(a)) : new Set;
              e.isCollapsed = n,
              n ? t.add(e.uuid) : t.delete(e.uuid),
              h.Z.set("thelounge.networks.collapsed", JSON.stringify([...t]))
          }
            , se = e=>e < 1e3 ? e.toString() : (e / 1e3).toFixed(2).slice(0, -1) + "k";
          const oe = ["aria-label", "title", "data-name", "data-type", "aria-controls", "aria-selected"];
          var ie = a(5485)
            , re = a(7543)
            , le = (0,
          t.aZ)({
              name: "ChannelWrapper",
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  },
                  active: Boolean,
                  isFiltering: Boolean
              },
              setup(e) {
                  const n = (0,
                  q.oR)();
                  return {
                      activeChannel: (0,
                      t.Fl)((()=>n.state.activeChannel)),
                      isChannelVisible: (0,
                      t.Fl)((()=>e.isFiltering || !(0,
                      ie.Z)(e.network, e.channel))),
                      getAriaLabel: ()=>{
                          const n = []
                            , a = e.channel.type;
                          return e.channel.unread > 0 && (e.channel.unread > 1 ? n.push(`${e.channel.unread} unread messages`) : n.push(`${e.channel.unread} unread message`)),
                          e.channel.highlight > 0 && (e.channel.highlight > 1 ? n.push(`${e.channel.highlight} mentions`) : n.push(`${e.channel.highlight} mention`)),
                          `${a}: ${e.channel.name} ${n.length ? `(${n.join(", ")})` : ""}`
                      }
                      ,
                      click: ()=>{
                          e.isFiltering || (0,
                          re.qZ)(e.channel)
                      }
                      ,
                      openContextMenu: n=>{
                          r.Z.emit("contextmenu:channel", {
                              event: n,
                              channel: e.channel,
                              network: e.network
                          })
                      }
                  }
              }
          })
            , ce = (0,
          R.Z)(le, [["render", function(e, n, a, o, i, r) {
              return e.isChannelVisible ? ((0,
              t.wg)(),
              (0,
              t.iD)("div", {
                  key: 0,
                  ref: "element",
                  class: (0,
                  s.C_)(["channel-list-item", {
                      active: e.active
                  }, {
                      "parted-channel": "channel" === e.channel.type && 0 === e.channel.state
                  }, {
                      "has-draft": e.channel.pendingMessage
                  }, {
                      "has-unread": e.channel.unread
                  }, {
                      "has-highlight": e.channel.highlight
                  }, {
                      "not-secure": "lobby" === e.channel.type && e.network.status.connected && !e.network.status.secure
                  }, {
                      "not-connected": "lobby" === e.channel.type && !e.network.status.connected
                  }, {
                      "is-muted": e.channel.muted
                  }]),
                  "aria-label": e.getAriaLabel(),
                  title: e.getAriaLabel(),
                  "data-name": e.channel.name,
                  "data-type": e.channel.type,
                  "aria-controls": "#chan-" + e.channel.id,
                  "aria-selected": e.active,
                  style: (0,
                  s.j5)(e.channel.closed ? {
                      transition: "none",
                      opacity: .4
                  } : void 0),
                  role: "tab",
                  onClick: n[0] || (n[0] = (...n)=>e.click && e.click(...n)),
                  onContextmenu: n[1] || (n[1] = (0,
                  g.iM)(((...n)=>e.openContextMenu && e.openContextMenu(...n)), ["prevent"]))
              }, [(0,
              t.WI)(e.$slots, "default", {
                  network: e.network,
                  channel: e.channel,
                  activeChannel: e.activeChannel
              })], 46, oe)) : (0,
              t.kq)("", !0)
          }
          ]])
            , ue = (0,
          t.aZ)({
              name: "Channel",
              components: {
                  ChannelWrapper: ce
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  isJoinChannelShown: Boolean,
                  active: Boolean,
                  isFiltering: Boolean
              },
              emits: ["toggle-join-channel"],
              setup(e) {
                  const n = (0,
                  t.Fl)((()=>e.network.channels[0]))
                    , a = (0,
                  t.Fl)((()=>e.isJoinChannelShown ? "Cancel" : "Join a channel…"))
                    , s = (0,
                  t.Fl)((()=>se(n.value.unread)));
                  return {
                      channel: n,
                      joinChannelLabel: a,
                      unreadCount: s,
                      onCollapseClick: ()=>{
                          te(e.network, !e.network.isCollapsed)
                      }
                      ,
                      getExpandLabel: e=>e.isCollapsed ? "Expand" : "Collapse"
                  }
              }
          })
            , de = (0,
          R.Z)(ue, [["render", function(e, n, a, o, i, r) {
              const l = (0,
              t.up)("ChannelWrapper");
              return (0,
              t.wg)(),
              (0,
              t.j4)(l, (0,
              t.dG)(e.$props, {
                  channel: e.channel
              }), {
                  default: (0,
                  t.w5)((()=>[e.network.channels.length > 1 ? ((0,
                  t.wg)(),
                  (0,
                  t.iD)("button", {
                      key: 0,
                      "aria-controls": "network-" + e.network.uuid,
                      "aria-label": e.getExpandLabel(e.network),
                      "aria-expanded": !e.network.isCollapsed,
                      class: "collapse-network",
                      onClick: n[0] || (n[0] = (0,
                      g.iM)(((...n)=>e.onCollapseClick && e.onCollapseClick(...n)), ["stop"]))
                  }, $, 8, B)) : ((0,
                  t.wg)(),
                  (0,
                  t.iD)("span", V)), (0,
                  t._)("div", J, [(0,
                  t._)("span", {
                      title: e.channel.name,
                      class: "name"
                  }, (0,
                  s.zw)(e.channel.name), 9, K), e.network.status.connected && !e.network.status.secure ? ((0,
                  t.wg)(),
                  (0,
                  t.iD)("span", G, X)) : (0,
                  t.kq)("", !0), e.network.status.connected ? (0,
                  t.kq)("", !0) : ((0,
                  t.wg)(),
                  (0,
                  t.iD)("span", Q, ee)), e.channel.unread ? ((0,
                  t.wg)(),
                  (0,
                  t.iD)("span", {
                      key: 2,
                      class: (0,
                      s.C_)([{
                          highlight: e.channel.highlight
                      }, "badge"])
                  }, (0,
                  s.zw)(e.unreadCount), 3)) : (0,
                  t.kq)("", !0)]), (0,
                  t._)("span", {
                      "aria-label": e.joinChannelLabel,
                      class: "add-channel-tooltip tooltipped tooltipped-w tooltipped-no-touch"
                  }, [(0,
                  t._)("button", {
                      class: (0,
                      s.C_)(["add-channel", {
                          opened: e.isJoinChannelShown
                      }]),
                      "aria-controls": "join-channel-" + e.channel.id,
                      "aria-label": e.joinChannelLabel,
                      onClick: n[1] || (n[1] = (0,
                      g.iM)((n=>e.$emit("toggle-join-channel")), ["stop"]))
                  }, null, 10, ae)], 8, ne)])),
                  _: 1
              }, 16, ["channel"])
          }
          ]]);
          const he = {
              class: "name"
          }
            , pe = {
              key: 0,
              class: "parted-channel-tooltip tooltipped tooltipped-w",
              "aria-label": "Not currently joined"
          }
            , ge = [(0,
          t._)("span", {
              class: "parted-channel-icon"
          }, null, -1)]
            , me = {
              class: "close-tooltip tooltipped tooltipped-w",
              "aria-label": "Leave"
          }
            , we = {
              key: 2,
              class: "close-tooltip tooltipped tooltipped-w",
              "aria-label": "Close"
          };
          var fe = a(8687);
          function ke(e) {
              return ()=>{
                  "lobby" !== e.type ? (e.closed = !0,
                  fe.Z.emit("input", {
                      target: Number(e.id),
                      text: "/close"
                  })) : r.Z.emit("confirm-dialog", {
                      title: "Remove network",
                      text: `Are you sure you want to quit and remove ${e.name}? This cannot be undone.`,
                      button: "Remove network"
                  }, (n=>{
                      n && (e.closed = !0,
                      fe.Z.emit("input", {
                          target: Number(e.id),
                          text: "/quit"
                      }))
                  }
                  ))
              }
          }
          var be = (0,
          t.aZ)({
              name: "Channel",
              components: {
                  ChannelWrapper: ce
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  },
                  active: Boolean,
                  isFiltering: Boolean
              },
              setup: e=>({
                  unreadCount: (0,
                  t.Fl)((()=>se(e.channel.unread))),
                  close: ke(e.channel)
              })
          })
            , ve = (0,
          R.Z)(be, [["render", function(e, n, a, o, i, r) {
              const l = (0,
              t.up)("ChannelWrapper");
              return (0,
              t.wg)(),
              (0,
              t.j4)(l, (0,
              t.dG)({
                  ref: "wrapper"
              }, e.$props), {
                  default: (0,
                  t.w5)((()=>[(0,
                  t._)("span", he, (0,
                  s.zw)(e.channel.name), 1), e.channel.unread ? ((0,
                  t.wg)(),
                  (0,
                  t.iD)("span", {
                      key: 0,
                      class: (0,
                      s.C_)([{
                          highlight: e.channel.highlight && !e.channel.muted
                      }, "badge"])
                  }, (0,
                  s.zw)(e.unreadCount), 3)) : (0,
                  t.kq)("", !0), "channel" === e.channel.type ? ((0,
                  t.wg)(),
                  (0,
                  t.iD)(t.HY, {
                      key: 1
                  }, [0 === e.channel.state ? ((0,
                  t.wg)(),
                  (0,
                  t.iD)("span", pe, ge)) : (0,
                  t.kq)("", !0), (0,
                  t._)("span", me, [(0,
                  t._)("button", {
                      class: "close",
                      "aria-label": "Leave",
                      onClick: n[0] || (n[0] = (0,
                      g.iM)(((...n)=>e.close && e.close(...n)), ["stop"]))
                  })])], 64)) : ((0,
                  t.wg)(),
                  (0,
                  t.iD)("span", we, [(0,
                  t._)("button", {
                      class: "close",
                      "aria-label": "Close",
                      onClick: n[1] || (n[1] = (0,
                      g.iM)(((...n)=>e.close && e.close(...n)), ["stop"]))
                  })]))])),
                  _: 1
              }, 16)
          }
          ]]);
          const _e = ["id"]
            , ye = (0,
          t._)("button", {
              type: "submit",
              class: "btn btn-small"
          }, "Join", -1);
          var Ce = (0,
          t.aZ)({
              name: "JoinChannel",
              directives: {
                  focus: {
                      mounted: e=>e.focus()
                  }
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  channel: {
                      type: Object,
                      required: !0
                  }
              },
              emits: ["toggle-join-channel"],
              setup(e, {emit: n}) {
                  const a = (0,
                  q.oR)()
                    , t = (0,
                  U.iH)("")
                    , s = (0,
                  U.iH)("");
                  return {
                      inputChannel: t,
                      inputPassword: s,
                      onSubmit: ()=>{
                          const o = a.getters.findChannelOnCurrentNetwork(t.value);
                          if (o)
                              (0,
                              re.qZ)(o);
                          else {
                              const n = e.network.serverOptions.CHANTYPES;
                              let a = t.value;
                              n && n.length > 0 && !n.includes(a[0]) && (a = n[0] + a),
                              fe.Z.emit("input", {
                                  text: `/join ${a} ${s.value}`,
                                  target: e.channel.id
                              })
                          }
                          t.value = "",
                          s.value = "",
                          n("toggle-join-channel")
                      }
                  }
              }
          })
            , xe = (0,
          R.Z)(Ce, [["render", function(e, n, a, s, o, i) {
              const r = (0,
              t.Q2)("focus");
              return (0,
              t.wg)(),
              (0,
              t.iD)("form", {
                  id: "join-channel-" + e.channel.id,
                  class: "join-form",
                  method: "post",
                  action: "",
                  autocomplete: "off",
                  onKeydown: n[2] || (n[2] = (0,
                  g.D2)((0,
                  g.iM)((n=>e.$emit("toggle-join-channel")), ["prevent"]), ["esc"])),
                  onSubmit: n[3] || (n[3] = (0,
                  g.iM)(((...n)=>e.onSubmit && e.onSubmit(...n)), ["prevent"]))
              }, [(0,
              t.wy)((0,
              t._)("input", {
                  "onUpdate:modelValue": n[0] || (n[0] = n=>e.inputChannel = n),
                  type: "text",
                  class: "input",
                  name: "channel",
                  placeholder: "Channel",
                  pattern: "[^\\s]+",
                  maxlength: "200",
                  title: "The channel name may not contain spaces",
                  required: ""
              }, null, 512), [[g.nr, e.inputChannel], [r]]), (0,
              t.wy)((0,
              t._)("input", {
                  "onUpdate:modelValue": n[1] || (n[1] = n=>e.inputPassword = n),
                  type: "password",
                  class: "input",
                  name: "key",
                  placeholder: "Password (optional)",
                  pattern: "[^\\s]+",
                  maxlength: "200",
                  title: "The channel password may not contain spaces",
                  autocomplete: "new-password"
              }, null, 512), [[g.nr, e.inputPassword]]), ye], 40, _e)
          }
          ]])
            , Se = a(5118)
            , De = (0,
          t.aZ)({
              name: "NetworkList",
              components: {
                  JoinChannel: xe,
                  NetworkLobby: de,
                  Channel: ve,
                  Draggable: W
              },
              setup() {
                  const e = (0,
                  q.oR)()
                    , n = (0,
                  U.iH)("")
                    , a = (0,
                  U.iH)()
                    , s = (0,
                  U.iH)()
                    , o = (0,
                  U.iH)(null)
                    , i = (0,
                  U.iH)(null)
                    , l = (0,
                  U.iH)(!1)
                    , u = (e,n,a)=>{
                      const t = e.splice(n, 1)[0];
                      e.splice(a, 0, t)
                  }
                    , d = (0,
                  t.Fl)((()=>{
                      const n = [];
                      for (const a of e.state.networks)
                          for (const t of a.channels)
                              e.state.activeChannel && t === e.state.activeChannel.channel || n.push({
                                  network: a,
                                  channel: t
                              });
                      return n
                  }
                  ))
                    , h = (0,
                  t.Fl)((()=>(0,
                  F.filter)(n.value, d.value, {
                      extract: e=>e.channel.name
                  }).map((e=>e.original))))
                    , g = n=>!!(0,
                  p.Z)(n) || (e.state.activeChannel && te(e.state.activeChannel.network, !0),
                  !1)
                    , m = n=>!!(0,
                  p.Z)(n) || (e.state.activeChannel && te(e.state.activeChannel.network, !1),
                  !1)
                    , w = ()=>{
                      o.value !== document.activeElement && (l.value = !e.state.sidebarOpen,
                      e.commit("sidebarOpen", !0),
                      (0,
                      t.Y3)((()=>{
                          o.value?.focus()
                      }
                      )))
                  }
                    , f = ()=>{
                      a.value = null,
                      n.value = "",
                      o.value?.blur(),
                      l.value && e.commit("sidebarOpen", !1)
                  }
                    , k = e=>!!(0,
                  p.Z)(e) || (o.value === document.activeElement ? (f(),
                  !1) : (w(),
                  !1))
                    , b = e=>{
                      h.value.length && (e || (e = h.value[0].channel),
                      a.value = e)
                  }
                    , v = ()=>{
                      (0,
                      t.Y3)((()=>{
                          const e = i.value?.querySelector(".channel-list-item.active");
                          e && e.scrollIntoView({
                              block: "nearest",
                              inline: "nearest"
                          })
                      }
                      ))
                  }
                  ;
                  return (0,
                  t.YP)(n, (()=>{
                      b()
                  }
                  )),
                  (0,
                  t.bv)((()=>{
                      c().bind("alt+shift+right", m),
                      c().bind("alt+shift+left", g),
                      c().bind("alt+j", k)
                  }
                  )),
                  (0,
                  t.Jd)((()=>{
                      c().unbind("alt+shift+right"),
                      c().unbind("alt+shift+left"),
                      c().unbind("alt+j")
                  }
                  )),
                  (0,
                  U.iH)(),
                  (0,
                  U.iH)({}),
                  {
                      store: e,
                      networklist: i,
                      searchInput: o,
                      searchText: n,
                      results: h,
                      activeSearchItem: a,
                      LONG_TOUCH_DURATION: 500,
                      activateSearch: w,
                      deactivateSearch: f,
                      toggleSearch: k,
                      setSearchText: e=>{
                          n.value = e.target.value
                      }
                      ,
                      setActiveSearchItem: b,
                      scrollToActive: v,
                      selectResult: ()=>{
                          n.value && h.value.length && a.value && ((0,
                          re.qZ)(a.value),
                          f(),
                          v())
                      }
                      ,
                      navigateResults: (e,t)=>{
                          if (e.stopImmediatePropagation(),
                          e.preventDefault(),
                          !n.value)
                              return;
                          const s = h.value.map((e=>e.channel));
                          if (!s.length)
                              return void (a.value = null);
                          let o = a.value ? s.indexOf(a.value) : -1;
                          if (!a.value || -1 === o)
                              return a.value = t ? s[0] : s[s.length - 1],
                              void v();
                          for (o += t; o < 0; )
                              o += s.length;
                          for (; o > s.length - 1; )
                              o -= s.length;
                          a.value = s[o],
                          v()
                      }
                      ,
                      onChannelSort: n=>{
                          let {oldIndex: a, newIndex: t} = n;
                          if (void 0 === a || void 0 === t || a === t)
                              return;
                          a += 1,
                          t += 1;
                          const s = n.item.getAttribute("data-item");
                          if (!s)
                              return;
                          const o = parseInt(s)
                            , i = e.getters.findChannel(o);
                          i && (u(i.network.channels, a, t),
                          fe.Z.emit("sort", {
                              type: "channels",
                              target: i.network.uuid,
                              order: i.network.channels.map((e=>e.id))
                          }))
                      }
                      ,
                      onNetworkSort: n=>{
                          const {oldIndex: a, newIndex: t} = n;
                          void 0 !== a && void 0 !== t && a !== t && (u(e.state.networks, a, t),
                          fe.Z.emit("sort", {
                              type: "networks",
                              order: e.state.networks.map((e=>e.uuid))
                          }))
                      }
                      ,
                      onDraggableTouchStart: e=>{
                          1 === e.touches.length && document.body.classList.add("force-no-select")
                      }
                      ,
                      onDraggableTouchMove: e=>{
                          if (s.value && e.touches.length > 0) {
                              const n = e.touches[0]
                                , a = [n.clientX, n.clientY];
                              (0,
                              Se.Z)(s.value, a) > 10 && r.Z.emit("contextmenu:cancel")
                          }
                      }
                      ,
                      onDraggableTouchEnd: e=>{
                          0 === e.touches.length && document.body.classList.remove("force-no-select")
                      }
                      ,
                      onDraggableChoose: e=>{
                          const n = e.originalEvent;
                          (e=>!!(e.touches && e.touches[0] || e.pointerType && "touch" === e.pointerType))(n) && (e.item.classList.add("ui-sortable-dragging-touch-cue"),
                          n instanceof TouchEvent && n.touches.length > 0 ? s.value = [n.touches[0].clientX, n.touches[0].clientY] : n instanceof PointerEvent && (s.value = [n.clientX, n.clientY]))
                      }
                      ,
                      onDraggableUnchoose: e=>{
                          e.item.classList.remove("ui-sortable-dragging-touch-cue"),
                          s.value = null
                      }
                  }
              }
          })
            , Ze = (0,
          R.Z)(De, [["render", function(e, n, a, o, i, r) {
              const l = (0,
              t.up)("Channel")
                , c = (0,
              t.up)("NetworkLobby")
                , u = (0,
              t.up)("JoinChannel")
                , d = (0,
              t.up)("Draggable");
              return 0 === e.store.state.networks.length ? ((0,
              t.wg)(),
              (0,
              t.iD)("div", j, " You are not connected to any networks yet. ")) : ((0,
              t.wg)(),
              (0,
              t.iD)("div", T, [(0,
              t._)("div", P, [(0,
              t._)("input", {
                  ref: "searchInput",
                  value: e.searchText,
                  placeholder: "Jump to...",
                  type: "search",
                  class: "search input mousetrap",
                  "aria-label": "Search among the channel list",
                  tabindex: "-1",
                  onInput: n[0] || (n[0] = (...n)=>e.setSearchText && e.setSearchText(...n)),
                  onKeydown: [n[1] || (n[1] = (0,
                  g.D2)((n=>e.navigateResults(n, -1)), ["up"])), n[2] || (n[2] = (0,
                  g.D2)((n=>e.navigateResults(n, 1)), ["down"])), n[3] || (n[3] = (0,
                  g.D2)((n=>e.navigateResults(n, -10)), ["page-up"])), n[4] || (n[4] = (0,
                  g.D2)((n=>e.navigateResults(n, 10)), ["page-down"])), n[5] || (n[5] = (0,
                  g.D2)(((...n)=>e.selectResult && e.selectResult(...n)), ["enter"])), n[6] || (n[6] = (0,
                  g.D2)(((...n)=>e.deactivateSearch && e.deactivateSearch(...n)), ["escape"]))],
                  onFocus: n[7] || (n[7] = (...n)=>e.activateSearch && e.activateSearch(...n))
              }, null, 40, H)]), e.searchText ? ((0,
              t.wg)(),
              (0,
              t.iD)("div", L, [e.results.length ? ((0,
              t.wg)(),
              (0,
              t.iD)("div", O, [((0,
              t.wg)(!0),
              (0,
              t.iD)(t.HY, null, (0,
              t.Ko)(e.results, (a=>((0,
              t.wg)(),
              (0,
              t.iD)("div", {
                  key: a.channel.id,
                  onMouseenter: n=>e.setActiveSearchItem(a.channel),
                  onClick: n[8] || (n[8] = (0,
                  g.iM)(((...n)=>e.selectResult && e.selectResult(...n)), ["prevent"]))
              }, ["lobby" !== a.channel.type ? ((0,
              t.wg)(),
              (0,
              t.j4)(l, {
                  key: 0,
                  channel: a.channel,
                  network: a.network,
                  active: a.channel === e.activeSearchItem,
                  "is-filtering": !0
              }, null, 8, ["channel", "network", "active"])) : ((0,
              t.wg)(),
              (0,
              t.j4)(c, {
                  key: 1,
                  channel: a.channel,
                  network: a.network,
                  active: a.channel === e.activeSearchItem,
                  "is-filtering": !0
              }, null, 8, ["channel", "network", "active"]))], 40, I)))), 128))])) : ((0,
              t.wg)(),
              (0,
              t.iD)("div", A, "No results found."))])) : ((0,
              t.wg)(),
              (0,
              t.j4)(d, {
                  key: 1,
                  list: e.store.state.networks,
                  delay: e.LONG_TOUCH_DURATION,
                  "delay-on-touch-only": !0,
                  "touch-start-threshold": 10,
                  handle: ".channel-list-item[data-type='lobby']",
                  draggable: ".network",
                  "ghost-class": "ui-sortable-ghost",
                  "drag-class": "ui-sortable-dragging",
                  group: "networks",
                  class: "networks",
                  "item-key": "uuid",
                  onChange: e.onNetworkSort,
                  onChoose: e.onDraggableChoose,
                  onUnchoose: e.onDraggableUnchoose
              }, {
                  item: (0,
                  t.w5)((({element: a})=>[((0,
                  t.wg)(),
                  (0,
                  t.iD)("div", {
                      id: "network-" + a.uuid,
                      key: a.uuid,
                      class: (0,
                      s.C_)([{
                          collapsed: a.isCollapsed,
                          "not-connected": !a.status.connected,
                          "not-secure": !a.status.secure
                      }, "network"]),
                      role: "region",
                      "aria-live": "polite",
                      onTouchstart: n[9] || (n[9] = (...n)=>e.onDraggableTouchStart && e.onDraggableTouchStart(...n)),
                      onTouchmove: n[10] || (n[10] = (...n)=>e.onDraggableTouchMove && e.onDraggableTouchMove(...n)),
                      onTouchend: n[11] || (n[11] = (...n)=>e.onDraggableTouchEnd && e.onDraggableTouchEnd(...n)),
                      onTouchcancel: n[12] || (n[12] = (...n)=>e.onDraggableTouchEnd && e.onDraggableTouchEnd(...n))
                  }, [(0,
                  t.Wm)(c, {
                      network: a,
                      "is-join-channel-shown": a.isJoinChannelShown,
                      active: e.store.state.activeChannel && a.channels[0] === e.store.state.activeChannel.channel,
                      onToggleJoinChannel: e=>a.isJoinChannelShown = !a.isJoinChannelShown
                  }, null, 8, ["network", "is-join-channel-shown", "active", "onToggleJoinChannel"]), a.isJoinChannelShown ? ((0,
                  t.wg)(),
                  (0,
                  t.j4)(u, {
                      key: 0,
                      network: a,
                      channel: a.channels[0],
                      onToggleJoinChannel: e=>a.isJoinChannelShown = !a.isJoinChannelShown
                  }, null, 8, ["network", "channel", "onToggleJoinChannel"])) : (0,
                  t.kq)("", !0), (0,
                  t.Wm)(d, {
                      draggable: ".channel-list-item",
                      "ghost-class": "ui-sortable-ghost",
                      "drag-class": "ui-sortable-dragging",
                      group: a.uuid,
                      list: a.channels,
                      delay: e.LONG_TOUCH_DURATION,
                      "delay-on-touch-only": !0,
                      "touch-start-threshold": 10,
                      class: "channels",
                      "item-key": "name",
                      onChange: e.onChannelSort,
                      onChoose: e.onDraggableChoose,
                      onUnchoose: e.onDraggableUnchoose
                  }, {
                      item: (0,
                      t.w5)((({element: n, index: s})=>[s > 0 ? ((0,
                      t.wg)(),
                      (0,
                      t.j4)(l, {
                          key: n.id,
                          "data-item": n.id,
                          channel: n,
                          network: a,
                          active: e.store.state.activeChannel && n === e.store.state.activeChannel.channel
                      }, null, 8, ["data-item", "channel", "network", "active"])) : (0,
                      t.kq)("", !0)])),
                      _: 2
                  }, 1032, ["group", "list", "delay", "onChange", "onChoose", "onUnchoose"])], 42, E))])),
                  _: 1
              }, 8, ["list", "delay", "onChange", "onChoose", "onUnchoose"]))], 512))
          }
          ]])
            , Ue = (0,
          t.aZ)({
              name: "Sidebar",
              components: {
                  NetworkList: Ze
              },
              props: {
                  overlay: {
                      type: Object,
                      required: !0
                  }
              },
              setup(e) {
                  const n = (0,
                  q.oR)()
                    , a = (0,
                  M.yj)()
                    , s = (0,
                  U.iH)()
                    , o = (0,
                  U.iH)()
                    , i = (0,
                  U.iH)(0)
                    , r = (0,
                  U.iH)(0)
                    , l = (0,
                  U.iH)(!1)
                    , c = (0,
                  U.iH)(!1)
                    , u = (0,
                  U.iH)(null)
                    , d = e=>{
                      n.commit("sidebarOpen", e)
                  }
                    , h = a=>{
                      const t = o.value = a.touches.item(0);
                      if (!(t && s.value && s.value.screenX && s.value.screenY))
                          return;
                      let i = t.screenX - s.value.screenX;
                      const d = t.screenY - s.value.screenY;
                      if (!l.value) {
                          if (Math.abs(d / i) >= 1)
                              return void p();
                          const e = window.devicePixelRatio || 2;
                          Math.abs(i) > e && (n.commit("sidebarDragging", !0),
                          l.value = !0)
                      }
                      c.value && (n.state.sidebarOpen && (i += r.value),
                      i > r.value ? i = r.value : i < 0 && (i = 0),
                      u.value && (u.value.style.transform = "translate3d(" + i.toString() + "px, 0, 0)"),
                      e.overlay && (e.overlay.style.opacity = "" + i / r.value))
                  }
                    , p = ()=>{
                      if (!s.value?.screenX || !o.value?.screenX)
                          return;
                      const a = o.value.screenX - s.value.screenX
                        , c = Math.abs(a);
                      (c > r.value / 2 || Date.now() - i.value < 180 && c > 50) && d(a > 0),
                      document.body.removeEventListener("touchmove", h),
                      document.body.removeEventListener("touchend", p),
                      n.commit("sidebarDragging", !1),
                      s.value = null,
                      o.value = null,
                      i.value = 0,
                      l.value = !1,
                      (0,
                      t.Y3)((()=>{
                          u.value && (u.value.style.transform = ""),
                          e.overlay && (e.overlay.style.opacity = "")
                      }
                      ))
                  }
                    , g = e=>{
                      if (!u.value)
                          return;
                      if (s.value = o.value = e.touches.item(0),
                      1 !== e.touches.length)
                          return void p();
                      const a = window.getComputedStyle(u.value);
                      r.value = parseFloat(a.width),
                      c.value = "absolute" === a.position,
                      (!n.state.sidebarOpen || s.value?.screenX && s.value.screenX > r.value) && (i.value = Date.now(),
                      document.body.addEventListener("touchmove", h, {
                          passive: !0
                      }),
                      document.body.addEventListener("touchend", p, {
                          passive: !0
                      }))
                  }
                  ;
                  return (0,
                  t.bv)((()=>{
                      document.body.addEventListener("touchstart", g, {
                          passive: !0
                      })
                  }
                  )),
                  (0,
                  t.Ah)((()=>{
                      document.body.removeEventListener("touchstart", g)
                  }
                  )),
                  {
                      isDevelopment: !1,
                      store: n,
                      route: a,
                      sidebar: u,
                      toggle: d,
                      onTouchStart: g,
                      onTouchMove: h,
                      onTouchEnd: p,
                      isPublic: ()=>document.body.classList.contains("public")
                  }
              }
          })
            , Me = (0,
          R.Z)(Ue, [["render", function(e, n, a, o, i, r) {
              const l = (0,
              t.up)("NetworkList")
                , c = (0,
              t.up)("router-link");
              return (0,
              t.wg)(),
              (0,
              t.iD)("aside", m, [(0,
              t._)("div", w, [(0,
              t._)("div", f, [(0,
              t._)("img", {
                  src: `img/logo-${e.isPublic() ? "horizontal-" : ""}transparent-bg.svg`,
                  class: "logo",
                  alt: "The Lounge",
                  role: "presentation"
              }, null, 8, k), (0,
              t._)("img", {
                  src: `img/logo-${e.isPublic() ? "horizontal-" : ""}transparent-bg-inverted.svg`,
                  class: "logo-inverted",
                  alt: "The Lounge",
                  role: "presentation"
              }, null, 8, b), e.isDevelopment ? ((0,
              t.wg)(),
              (0,
              t.iD)("span", v, "DEVELOPER")) : (0,
              t.kq)("", !0)]), (0,
              t.Wm)(l)]), (0,
              t._)("footer", _, [(0,
              t._)("span", y, [(0,
              t.Wm)(c, {
                  to: "/connect",
                  role: "tab",
                  "aria-controls": "connect"
              }, {
                  default: (0,
                  t.w5)((({navigate: e, isActive: n})=>[(0,
                  t._)("button", {
                      class: (0,
                      s.C_)(["icon", "connect", {
                          active: n
                      }]),
                      "aria-selected": n,
                      onClick: e,
                      onKeypress: (0,
                      g.D2)(e, ["enter"])
                  }, null, 42, C)])),
                  _: 1
              })]), (0,
              t._)("span", x, [(0,
              t.Wm)(c, {
                  to: "/settings",
                  role: "tab",
                  "aria-controls": "settings"
              }, {
                  default: (0,
                  t.w5)((({navigate: e, isActive: n})=>[(0,
                  t._)("button", {
                      class: (0,
                      s.C_)(["icon", "settings", {
                          active: n
                      }]),
                      "aria-selected": n,
                      onClick: e,
                      onKeypress: (0,
                      g.D2)(e, ["enter"])
                  }, null, 42, S)])),
                  _: 1
              })]), (0,
              t._)("span", {
                  class: "tooltipped tooltipped-n tooltipped-no-touch",
                  "aria-label": e.store.state.serverConfiguration?.isUpdateAvailable ? "Help\n(update available)" : "Help"
              }, [(0,
              t.Wm)(c, {
                  to: "/help",
                  role: "tab",
                  "aria-controls": "help"
              }, {
                  default: (0,
                  t.w5)((({navigate: n, isActive: a})=>[(0,
                  t._)("button", {
                      "aria-selected": "Help" === e.route.name,
                      class: (0,
                      s.C_)(["icon", "help", {
                          notified: e.store.state.serverConfiguration?.isUpdateAvailable
                      }, {
                          active: a
                      }]),
                      onClick: n,
                      onKeypress: (0,
                      g.D2)(n, ["enter"])
                  }, null, 42, Z)])),
                  _: 1
              })], 8, D)])], 512)
          }
          ]]);
          const qe = (0,
          t._)("button", {
              class: "close-btn",
              "aria-label": "Close"
          }, null, -1)
            , je = ["href"]
            , Te = ["src"];
          var Pe = (0,
          t.aZ)({
              name: "ImageViewer",
              setup() {
                  const e = (0,
                  U.iH)()
                    , n = (0,
                  U.iH)()
                    , a = (0,
                  U.iH)(null)
                    , s = (0,
                  U.iH)()
                    , o = (0,
                  U.iH)()
                    , i = (0,
                  U.iH)()
                    , l = (0,
                  U.iH)({
                      x: 0,
                      y: 0
                  })
                    , u = (0,
                  U.iH)({
                      scale: 1,
                      x: 0,
                      y: 0
                  })
                    , d = (0,
                  t.Fl)((()=>{
                      const e = Math.floor(u.value.x)
                        , n = Math.floor(u.value.y);
                      return {
                          left: `${l.value.x}px`,
                          top: `${l.value.y}px`,
                          transform: `translate3d(${e}px, ${n}px, 0) scale3d(${u.value.scale}, ${u.value.scale}, 1)`
                      }
                  }
                  ))
                    , h = ()=>{
                      null !== a.value && (i.value = null,
                      s.value = null,
                      o.value = null,
                      a.value = null)
                  }
                    , p = ()=>{
                      s.value && (a.value = s.value)
                  }
                    , g = ()=>{
                      o.value && (a.value = o.value)
                  }
                    , m = (a,t,s,o)=>{
                      if (!n.value || !e.value)
                          return;
                      const i = n.value.width
                        , r = e.value.offsetWidth / 2
                        , l = e.value.offsetHeight / 2;
                      return {
                          x: r - (r - (s - i * t / 2)) / t * a + i * a / 2,
                          y: l - (l - (o - i * t / 2)) / t * a + i * a / 2
                      }
                  }
                    , w = ()=>{
                      const a = n.value
                        , t = e.value;
                      if (!a || !t)
                          return;
                      const s = a.width * u.value.scale
                        , o = a.height * u.value.scale
                        , i = t.offsetWidth
                        , r = t.offsetHeight;
                      s < i ? u.value.x = i / 2 : u.value.x - s / 2 > 0 ? u.value.x = s / 2 : u.value.x + s / 2 < i && (u.value.x = i - s / 2),
                      o < r ? u.value.y = r / 2 : u.value.y - o / 2 > 0 ? u.value.y = o / 2 : u.value.y + o / 2 < r && (u.value.y = r - o / 2)
                  }
                    , f = e=>{
                      let n = 0
                        , a = 0
                        , t = 0;
                      for (let s = 0; s < e.length; s++) {
                          const o = e[s].clientX
                            , i = e[s].clientY;
                          n += o,
                          a += i;
                          for (let n = 0; n < e.length; n++)
                              if (s !== n) {
                                  const a = e[n].clientX
                                    , s = e[n].clientY;
                                  t += Math.sqrt((o - a) * (o - a) + (i - s) * (i - s))
                              }
                      }
                      return 0 === t && (t = 1),
                      {
                          x: n / e.length,
                          y: a / e.length,
                          scale: t / e.length
                      }
                  }
                  ;
                  return (0,
                  t.YP)(a, ((e,n)=>{
                      if (null === e)
                          return r.Z.off("escapekey", h),
                          r.Z.off("resize", w),
                          c().unbind("left"),
                          void c().unbind("right");
                      (()=>{
                          if (!i.value || !a.value)
                              return null;
                          const e = i.value.messages.map((e=>e.previews)).flat().filter((e=>e.thumb))
                            , n = e.indexOf(a.value);
                          s.value = e[n - 1] || null,
                          o.value = e[n + 1] || null
                      }
                      )(),
                      n || (r.Z.on("escapekey", h),
                      r.Z.on("resize", w),
                      c().bind("left", p),
                      c().bind("right", g))
                  }
                  )),
                  {
                      link: a,
                      channel: i,
                      image: n,
                      transform: u,
                      closeViewer: h,
                      next: g,
                      previous: p,
                      onImageLoad: ()=>{
                          (()=>{
                              const a = e.value
                                , t = n.value;
                              if (!a || !t)
                                  return;
                              const s = a.offsetWidth
                                , o = a.offsetHeight
                                , i = Math.min(1, s / t.width, o / t.height);
                              l.value.x = Math.floor(-n.value.naturalWidth / 2),
                              l.value.y = Math.floor(-n.value.naturalHeight / 2),
                              u.value.scale = Math.max(i, .1),
                              u.value.x = s / 2,
                              u.value.y = o / 2
                          }
                          )()
                      }
                      ,
                      onImageMouseDown: a=>{
                          if (1 !== a.which)
                              return;
                          a.stopPropagation(),
                          a.preventDefault();
                          const t = e.value
                            , s = n.value;
                          if (!t || !s)
                              return;
                          const o = a.clientX
                            , i = a.clientY
                            , r = u.value.x
                            , l = u.value.y
                            , c = s.width * u.value.scale
                            , d = s.height * u.value.scale
                            , p = t.offsetWidth
                            , g = t.offsetHeight
                            , m = u.value.x - c / 2
                            , f = u.value.y - d / 2;
                          let k = 0;
                          const b = e=>{
                              e.stopPropagation(),
                              e.preventDefault();
                              const n = e.clientX - o
                                , a = e.clientY - i;
                              k = Math.max(k, Math.abs(n), Math.abs(a)),
                              (m < 0 || c + m > p) && (u.value.x = r + n),
                              (f < 0 || d + f > g) && (u.value.y = l + a),
                              w()
                          }
                            , v = e=>{
                              w(),
                              k < 2 && 0 === e.button && h(),
                              n.value?.removeEventListener("mousemove", b),
                              n.value?.removeEventListener("mouseup", v)
                          }
                          ;
                          n.value?.addEventListener("mousemove", b),
                          n.value?.addEventListener("mouseup", v)
                      }
                      ,
                      onMouseWheel: e=>{
                          if (null !== a.value) {
                              if (e.preventDefault(),
                              e.ctrlKey)
                                  u.value.y += e.deltaY;
                              else {
                                  const n = e.deltaY > 0 ? .1 : -.1
                                    , a = Math.min(3, Math.max(.1, u.value.scale + n))
                                    , t = m(a, u.value.scale, u.value.x, u.value.y);
                                  if (!t)
                                      return;
                                  u.value.scale = a,
                                  u.value.x = t.x,
                                  u.value.y = t.y
                              }
                              w()
                          }
                      }
                      ,
                      onClick: e=>{
                          e.target !== n.value && h()
                      }
                      ,
                      onTouchStart: e=>{
                          e.stopImmediatePropagation()
                      }
                      ,
                      previousImage: s,
                      nextImage: o,
                      onImageTouchStart: e=>{
                          const a = n.value;
                          let t = f(e.touches)
                            , s = e.touches
                            , o = 0;
                          const i = {
                              x: t.x,
                              y: t.y,
                              scale: t.scale
                          }
                            , r = {
                              x: u.value.x,
                              y: u.value.y,
                              scale: u.value.scale
                          }
                            , l = e=>{
                              t = f(e.touches),
                              s.length !== e.touches.length && (i.x = t.x,
                              i.y = t.y,
                              i.scale = t.scale,
                              r.x = u.value.x,
                              r.y = u.value.y,
                              r.scale = u.value.scale);
                              const n = t.x - i.x
                                , a = t.y - i.y
                                , l = t.scale / i.scale;
                              s = e.touches,
                              o = 0;
                              const c = Math.min(3, Math.max(.1, r.scale * l))
                                , d = m(c, r.scale, r.x, r.y);
                              d && (u.value.x = d.x + n,
                              u.value.y = d.y + a,
                              u.value.scale = c,
                              w())
                          }
                            , c = e=>{
                              const n = e.changedTouches.length;
                              s.length > n + o ? o += n : (w(),
                              a?.removeEventListener("touchmove", l),
                              a?.removeEventListener("touchend", c))
                          }
                          ;
                          a?.addEventListener("touchmove", l, {
                              passive: !0
                          }),
                          a?.addEventListener("touchend", c, {
                              passive: !0
                          })
                      }
                      ,
                      computeImageStyles: d,
                      viewer: e
                  }
              }
          })
            , He = (0,
          R.Z)(Pe, [["render", function(e, n, a, o, i, r) {
              return (0,
              t.wg)(),
              (0,
              t.iD)("div", {
                  id: "image-viewer",
                  ref: "viewer",
                  class: (0,
                  s.C_)({
                      opened: null !== e.link
                  }),
                  onWheel: n[5] || (n[5] = (...n)=>e.onMouseWheel && e.onMouseWheel(...n)),
                  onTouchstartPassive: n[6] || (n[6] = (...n)=>e.onTouchStart && e.onTouchStart(...n)),
                  onClick: n[7] || (n[7] = (...n)=>e.onClick && e.onClick(...n))
              }, [null !== e.link ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 0
              }, [qe, e.previousImage ? ((0,
              t.wg)(),
              (0,
              t.iD)("button", {
                  key: 0,
                  class: "previous-image-btn",
                  "aria-label": "Previous image",
                  onClick: n[0] || (n[0] = (0,
                  g.iM)(((...n)=>e.previous && e.previous(...n)), ["stop"]))
              })) : (0,
              t.kq)("", !0), e.nextImage ? ((0,
              t.wg)(),
              (0,
              t.iD)("button", {
                  key: 1,
                  class: "next-image-btn",
                  "aria-label": "Next image",
                  onClick: n[1] || (n[1] = (0,
                  g.iM)(((...n)=>e.next && e.next(...n)), ["stop"]))
              })) : (0,
              t.kq)("", !0), (0,
              t._)("a", {
                  class: "open-btn",
                  href: e.link.link,
                  target: "_blank",
                  rel: "noopener"
              }, null, 8, je), (0,
              t._)("img", {
                  ref: "image",
                  src: e.link.thumb,
                  alt: "",
                  style: (0,
                  s.j5)(e.computeImageStyles),
                  onLoad: n[2] || (n[2] = (...n)=>e.onImageLoad && e.onImageLoad(...n)),
                  onMousedown: n[3] || (n[3] = (...n)=>e.onImageMouseDown && e.onImageMouseDown(...n)),
                  onTouchstartPassive: n[4] || (n[4] = (...n)=>e.onImageTouchStart && e.onImageTouchStart(...n))
              }, null, 44, Te)], 64)) : (0,
              t.kq)("", !0)], 34)
          }
          ]]);
          const Le = ["onMouseenter", "onClick"];
          function Oe(e, n) {
              const a = ke(e);
              let t = [{
                  label: e.name,
                  type: "item",
                  class: {
                      lobby: "network",
                      channel: "chan",
                      query: "query",
                      special: "chan"
                  }[e.type],
                  link: `/chan-${e.id}`
              }, {
                  type: "divider"
              }];
              "lobby" === e.type && (t = [...t, {
                  label: "Edit this network…",
                  type: "item",
                  class: "edit",
                  link: `/edit-network/${n.uuid}`
              }, {
                  label: "Join a channel…",
                  type: "item",
                  class: "join",
                  action: ()=>n.isJoinChannelShown = !0
              }, {
                  label: "List all channels",
                  type: "item",
                  class: "list",
                  action: ()=>fe.Z.emit("input", {
                      target: e.id,
                      text: "/list"
                  })
              }, {
                  label: "List ignored users",
                  type: "item",
                  class: "list",
                  action: ()=>fe.Z.emit("input", {
                      target: e.id,
                      text: "/ignorelist"
                  })
              }, n.status.connected ? {
                  label: "Disconnect",
                  type: "item",
                  class: "disconnect",
                  action: ()=>fe.Z.emit("input", {
                      target: e.id,
                      text: "/disconnect"
                  })
              } : {
                  label: "Connect",
                  type: "item",
                  class: "connect",
                  action: ()=>fe.Z.emit("input", {
                      target: e.id,
                      text: "/connect"
                  })
              }]),
              "channel" === e.type && (t.push({
                  label: "Edit topic",
                  type: "item",
                  class: "edit",
                  action() {
                      e.editTopic = !0,
                      (0,
                      re.qZ)(e)
                  }
              }),
              t.push({
                  label: "List banned users",
                  type: "item",
                  class: "list",
                  action() {
                      fe.Z.emit("input", {
                          target: e.id,
                          text: "/banlist"
                      })
                  }
              })),
              "query" === e.type && t.push({
                  label: "User information",
                  type: "item",
                  class: "action-whois",
                  action() {
                      (0,
                      re.qZ)(e),
                      fe.Z.emit("input", {
                          target: e.id,
                          text: "/whois " + e.name
                      })
                  }
              }, {
                  label: "Ignore user",
                  type: "item",
                  class: "action-ignore",
                  action() {
                      fe.Z.emit("input", {
                          target: e.id,
                          text: "/ignore " + e.name
                      })
                  }
              }),
              "channel" !== e.type && "query" !== e.type || t.push({
                  label: "Clear history",
                  type: "item",
                  class: "clear-history",
                  action() {
                      r.Z.emit("confirm-dialog", {
                          title: "Clear history",
                          text: `Are you sure you want to clear history for ${e.name}? This cannot be undone.`,
                          button: "Clear history"
                      }, (n=>{
                          n && fe.Z.emit("history:clear", {
                              target: e.id
                          })
                      }
                      ))
                  }
              });
              const s = {
                  lobby: "network",
                  channel: "channel",
                  query: "conversation"
              };
              if (Object.keys(s).includes(e.type)) {
                  const n = s[e.type];
                  t.push({
                      label: e.muted ? `Unmute ${n}` : `Mute ${n}`,
                      type: "item",
                      class: "mute",
                      action() {
                          fe.Z.emit("mute:change", {
                              target: e.id,
                              setMutedTo: !e.muted
                          })
                      }
                  })
              }
              return t.push({
                  label: {
                      lobby: "Remove",
                      channel: "Leave",
                      query: "Close",
                      special: "Close"
                  }[e.type],
                  type: "item",
                  class: "close",
                  action() {
                      a()
                  }
              }),
              t
          }
          function Ie(e, n, a) {
              const t = a.channels.find((e=>e.name === n));
              return t ? [{
                  label: "Go to channel",
                  type: "item",
                  class: "chan",
                  link: `/chan-${t.id}`
              }] : [{
                  label: "Join channel",
                  type: "item",
                  class: "join",
                  action: ()=>{
                      const t = a.channels.find((e=>e.name === n));
                      t && (0,
                      re.qZ)(t),
                      e.state.activeChannel ? fe.Z.emit("input", {
                          target: e.state.activeChannel.channel.id,
                          text: "/join " + n
                      }) : console.error("Unable to join channel: activeChannel is undefined")
                  }
              }]
          }
          function Ae(e, n, a, t) {
              const s = n && n.users.find((e=>e.nick === a.nick)) || {}
                , o = ()=>{
                  const e = a.channels.find((e=>e.name === t.nick));
                  e && (0,
                  re.qZ)(e),
                  fe.Z.emit("input", {
                      target: n.id,
                      text: "/whois " + t.nick
                  })
              }
                , i = [{
                  label: t.nick,
                  type: "item",
                  class: "user",
                  action: o
              }, {
                  type: "divider"
              }, {
                  label: "User information",
                  type: "item",
                  class: "action-whois",
                  action: o
              }, {
                  label: "Ignore user",
                  type: "item",
                  class: "action-ignore",
                  action() {
                      fe.Z.emit("input", {
                          target: n.id,
                          text: "/ignore " + t.nick
                      })
                  }
              }, {
                  label: "Direct messages",
                  type: "item",
                  class: "action-query",
                  action() {
                      const a = e.getters.findChannelOnCurrentNetwork(t.nick);
                      a && (0,
                      re.qZ)(a),
                      fe.Z.emit("input", {
                          target: n.id,
                          text: "/query " + t.nick
                      })
                  }
              }];
              if (!s.modes || s.modes.length < 1)
                  return i;
              const r = {
                  "~": "owner",
                  "&": "admin",
                  "@": "operator",
                  "%": "half-op",
                  "+": "voice"
              }
                , l = {
                  revoke(e) {
                      const n = r[e.symbol];
                      return "string" != typeof n ? "" : n ? `Revoke ${n} (-${e.mode})` : `Mode -${e.mode}`
                  },
                  give(e) {
                      const n = r[e.symbol];
                      return "string" != typeof n ? "" : n ? `Give ${n} (+${e.mode})` : `Mode +${e.mode}`
                  }
              }
                , c = a.serverOptions.PREFIX.symbols;
              function u(e, n) {
                  return "~@".indexOf(e) > -1 ? c.indexOf(e) <= c.indexOf(n) : c.indexOf(e) < c.indexOf(n)
              }
              return a.serverOptions.PREFIX.prefix.forEach((e=>{
                  u(s.modes[0], e.symbol) && (t.modes.includes(e.symbol) ? i.push({
                      label: l.revoke(e),
                      type: "item",
                      class: "action-revoke-mode",
                      action() {
                          fe.Z.emit("input", {
                              target: n.id,
                              text: "/mode -" + e.mode + " " + t.nick
                          })
                      }
                  }) : i.push({
                      label: l.give(e),
                      type: "item",
                      class: "action-set-mode",
                      action() {
                          fe.Z.emit("input", {
                              target: n.id,
                              text: "/mode +" + e.mode + " " + t.nick
                          })
                      }
                  }))
              }
              )),
              u(c.indexOf("%") > -1 ? "%" : "@", s.modes[0]) || (0 === t.modes.length || u(s.modes[0], t.modes[0])) && i.push({
                  label: "Kick",
                  type: "item",
                  class: "action-kick",
                  action() {
                      fe.Z.emit("input", {
                          target: n.id,
                          text: "/kick " + t.nick
                      })
                  }
              }),
              i
          }
          var Ee = (0,
          t.aZ)({
              name: "ContextMenu",
              props: {
                  message: {
                      required: !1,
                      type: Object
                  }
              },
              setup() {
                  const e = (0,
                  q.oR)()
                    , n = (0,
                  M.tv)()
                    , a = (0,
                  U.iH)(!1)
                    , s = (0,
                  U.iH)(!1)
                    , o = (0,
                  U.iH)()
                    , i = (0,
                  U.iH)()
                    , l = (0,
                  U.iH)([])
                    , c = (0,
                  U.iH)(-1)
                    , u = (0,
                  U.iH)({
                      top: 0,
                      left: 0
                  })
                    , d = ()=>{
                      a.value && (a.value = !1,
                      l.value = [],
                      i.value && (i.value.focus(),
                      i.value = null))
                  }
                    , h = ()=>{
                      s.value = !1,
                      document.body.removeEventListener("pointerup", h)
                  }
                    , p = e=>{
                      d(),
                      "action"in e && e.action ? e.action() : "link"in e && e.link && n.push(e.link).catch((()=>{
                          console.error("Failed to navigate to", e.link)
                      }
                      ))
                  }
                    , g = (e,n)=>{
                      e.preventDefault(),
                      i.value = document.activeElement,
                      l.value = n,
                      c.value = 0,
                      a.value = !0,
                      (0,
                      t.Y3)((()=>{
                          const n = (e=>{
                              const n = e.target;
                              if (!o.value)
                                  return;
                              const a = o.value?.offsetWidth
                                , t = o.value?.offsetHeight;
                              if (n && n.classList.contains("menu"))
                                  return {
                                      left: n.getBoundingClientRect().left - (a - n.offsetWidth),
                                      top: n.getBoundingClientRect().top + n.offsetHeight
                                  };
                              const s = {
                                  left: e.pageX,
                                  top: e.pageY
                              };
                              return window.innerWidth - s.left < a && (s.left = window.innerWidth - a),
                              window.innerHeight - s.top < t && (s.top = window.innerHeight - t),
                              s
                          }
                          )(e);
                          n && (u.value.left = n.left,
                          u.value.top = n.top,
                          o.value?.focus())
                      }
                      )).catch((e=>{
                          console.error(e)
                      }
                      ))
                  }
                    , m = e=>{
                      "contextmenu" === e.event.type && (s.value = !0,
                      document.body.addEventListener("pointerup", h, {
                          passive: !0
                      }));
                      const n = Oe(e.channel, e.network);
                      g(e.event, n)
                  }
                    , w = n=>{
                      const {network: a} = e.state.activeChannel
                        , t = Ie(e, n.channel, a);
                      g(n.event, t)
                  }
                    , f = n=>{
                      const {network: a, channel: t} = e.state.activeChannel
                        , s = Ae(e, t, a, t.users.find((e=>e.nick === n.user.nick)) || {
                          nick: n.user.nick,
                          modes: []
                      });
                      g(n.event, s)
                  }
                  ;
                  return (0,
                  t.bv)((()=>{
                      r.Z.on("escapekey", d),
                      r.Z.on("contextmenu:cancel", d),
                      r.Z.on("contextmenu:user", f),
                      r.Z.on("contextmenu:channel", m),
                      r.Z.on("contextmenu:inline-channel", w)
                  }
                  )),
                  (0,
                  t.Ah)((()=>{
                      r.Z.off("escapekey", d),
                      r.Z.off("contextmenu:cancel", d),
                      r.Z.off("contextmenu:user", f),
                      r.Z.off("contextmenu:channel", m),
                      r.Z.off("contextmenu:inline-channel", w),
                      d()
                  }
                  )),
                  {
                      isOpen: a,
                      items: l,
                      activeItem: c,
                      style: u,
                      contextMenu: o,
                      passthrough: s,
                      close: d,
                      containerClick: e=>{
                          e.currentTarget === e.target && d()
                      }
                      ,
                      navigateMenu: e=>{
                          let n = c.value;
                          n += e;
                          const a = l.value[n];
                          a && "type"in a && "divider" === a.type && (n += e),
                          n < 0 && (n += l.value.length),
                          n > l.value.length - 1 && (n -= l.value.length),
                          c.value = n
                      }
                      ,
                      hoverItem: e=>{
                          c.value = e
                      }
                      ,
                      clickItem: p,
                      clickActiveItem: ()=>{
                          l.value[c.value] && p(l.value[c.value])
                      }
                  }
              }
          })
            , Ne = (0,
          R.Z)(Ee, [["render", function(e, n, a, o, i, r) {
              return e.isOpen ? ((0,
              t.wg)(),
              (0,
              t.iD)("div", {
                  key: 0,
                  id: "context-menu-container",
                  class: (0,
                  s.C_)({
                      passthrough: e.passthrough
                  }),
                  onClick: n[2] || (n[2] = (...n)=>e.containerClick && e.containerClick(...n)),
                  onContextmenu: n[3] || (n[3] = (0,
                  g.iM)(((...n)=>e.containerClick && e.containerClick(...n)), ["prevent"])),
                  onKeydown: [n[4] || (n[4] = (0,
                  g.D2)((0,
                  g.iM)((n=>e.navigateMenu(-1)), ["exact", "prevent"]), ["up"])), n[5] || (n[5] = (0,
                  g.D2)((0,
                  g.iM)((n=>e.navigateMenu(1)), ["exact", "prevent"]), ["down"])), n[6] || (n[6] = (0,
                  g.D2)((0,
                  g.iM)((n=>e.navigateMenu(1)), ["exact", "prevent"]), ["tab"])), n[7] || (n[7] = (0,
                  g.D2)((0,
                  g.iM)((n=>e.navigateMenu(-1)), ["shift", "prevent"]), ["tab"]))]
              }, [(0,
              t._)("ul", {
                  id: "context-menu",
                  ref: "contextMenu",
                  role: "menu",
                  style: (0,
                  s.j5)({
                      top: e.style.top + "px",
                      left: e.style.left + "px"
                  }),
                  tabindex: "-1",
                  onMouseleave: n[0] || (n[0] = n=>e.activeItem = -1),
                  onKeydown: n[1] || (n[1] = (0,
                  g.D2)((0,
                  g.iM)(((...n)=>e.clickActiveItem && e.clickActiveItem(...n)), ["prevent"]), ["enter"]))
              }, [((0,
              t.wg)(!0),
              (0,
              t.iD)(t.HY, null, (0,
              t.Ko)(e.items, ((n,a)=>((0,
              t.wg)(),
              (0,
              t.iD)("li", {
                  key: n.name,
                  class: (0,
                  s.C_)(["context-menu-" + n.type, n.class ? "context-menu-" + n.class : null, {
                      active: a === e.activeItem
                  }]),
                  role: "menuitem",
                  onMouseenter: n=>e.hoverItem(a),
                  onClick: a=>e.clickItem(n)
              }, (0,
              s.zw)(n.label), 43, Le)))), 128))], 36)], 34)) : (0,
              t.kq)("", !0)
          }
          ]]);
          const ze = {
              key: 0,
              id: "confirm-dialog"
          }
            , Ye = {
              class: "confirm-text"
          }
            , Re = {
              class: "confirm-text-title"
          }
            , We = {
              class: "confirm-buttons"
          };
          var Fe = (0,
          t.aZ)({
              name: "ConfirmDialog",
              setup() {
                  const e = (0,
                  U.iH)()
                    , n = (0,
                  U.iH)()
                    , a = (a,t)=>{
                      e.value = a,
                      n.value = t
                  }
                    , s = a=>{
                      e.value = void 0,
                      n.value && n.value(!!a)
                  }
                  ;
                  return (0,
                  t.bv)((()=>{
                      r.Z.on("escapekey", s),
                      r.Z.on("confirm-dialog", a)
                  }
                  )),
                  (0,
                  t.Ah)((()=>{
                      r.Z.off("escapekey", s),
                      r.Z.off("confirm-dialog", a)
                  }
                  )),
                  {
                      data: e,
                      close: s
                  }
              }
          })
            , Be = (0,
          R.Z)(Fe, [["render", function(e, n, a, o, i, r) {
              return (0,
              t.wg)(),
              (0,
              t.iD)("div", {
                  id: "confirm-dialog-overlay",
                  class: (0,
                  s.C_)({
                      opened: !!e.data
                  })
              }, [null !== e.data ? ((0,
              t.wg)(),
              (0,
              t.iD)("div", ze, [(0,
              t._)("div", Ye, [(0,
              t._)("div", Re, (0,
              s.zw)(e.data?.title), 1), (0,
              t._)("p", null, (0,
              s.zw)(e.data?.text), 1)]), (0,
              t._)("div", We, [(0,
              t._)("button", {
                  class: "btn btn-cancel",
                  onClick: n[0] || (n[0] = n=>e.close(!1))
              }, "Cancel"), (0,
              t._)("button", {
                  class: "btn btn-danger",
                  onClick: n[1] || (n[1] = n=>e.close(!0))
              }, (0,
              s.zw)(e.data?.button), 1)])])) : (0,
              t.kq)("", !0)], 2)
          }
          ]]);
          const $e = {
              class: "mentions-popup"
          }
            , Ve = {
              class: "mentions-popup-title"
          }
            , Je = (0,
          t.Uk)(" Recent mentions ")
            , Ke = {
              key: 0
          }
            , Ge = {
              key: 1
          }
            , Xe = {
              class: "mentions-info"
          }
            , Qe = {
              class: "from"
          }
            , en = (0,
          t.Uk)(" in unknown channel ")
            , nn = (0,
          t.Uk)((0,
          s.zw)(" ") + " ")
            , an = ["title"]
            , tn = {
              class: "close-tooltip tooltipped tooltipped-w",
              "aria-label": "Dismiss this mention"
          }
            , sn = ["onClick"]
            , on = {
              class: "content",
              dir: "auto"
          };
          var rn = a(7652)
            , ln = a(6850)
            , cn = a(8017)
            , un = a(7484)
            , dn = a.n(un)
            , hn = a(4110)
            , pn = a.n(hn);
          dn().extend(pn());
          var gn = (0,
          t.aZ)({
              name: "Mentions",
              components: {
                  Username: rn.Z,
                  ParsedMessage: ln.Z
              },
              setup() {
                  const e = (0,
                  q.oR)()
                    , n = (0,
                  U.iH)(!1)
                    , a = (0,
                  U.iH)(!1)
                    , s = (0,
                  t.Fl)((()=>{
                      const n = e.state.mentions.slice().reverse();
                      for (const a of n)
                          a.localetime = (0,
                          cn.Z)(a.time),
                          a.channel = e.getters.findChannel(a.chanId);
                      return n.filter((e=>!e.channel?.channel.muted))
                  }
                  ));
                  (0,
                  t.YP)((()=>e.state.mentions), (()=>{
                      a.value = !1
                  }
                  ));
                  const o = ()=>{
                      n.value = !n.value,
                      n.value && (a.value = !0,
                      fe.Z.emit("mentions:get"))
                  }
                    , i = ()=>{
                      n.value = !1
                  }
                  ;
                  return (0,
                  t.bv)((()=>{
                      r.Z.on("mentions:toggle", o),
                      r.Z.on("escapekey", i)
                  }
                  )),
                  (0,
                  t.Ah)((()=>{
                      r.Z.off("mentions:toggle", o),
                      r.Z.off("escapekey", i)
                  }
                  )),
                  {
                      isOpen: n,
                      isLoading: a,
                      resolvedMessages: s,
                      messageTime: e=>dn()(e).fromNow(),
                      dismissMention: n=>{
                          e.state.mentions.splice(e.state.mentions.findIndex((e=>e.msgId === n.msgId)), 1),
                          fe.Z.emit("mentions:dismiss", n.msgId)
                      }
                      ,
                      dismissAllMentions: ()=>{
                          e.state.mentions = [],
                          fe.Z.emit("mentions:dismiss_all")
                      }
                      ,
                      containerClick: e=>{
                          e.currentTarget === e.target && (n.value = !1)
                      }
                  }
              }
          })
            , mn = (0,
          R.Z)(gn, [["render", function(e, n, a, o, i, r) {
              const l = (0,
              t.up)("Username")
                , c = (0,
              t.up)("ParsedMessage");
              return e.isOpen ? ((0,
              t.wg)(),
              (0,
              t.iD)("div", {
                  key: 0,
                  id: "mentions-popup-container",
                  onClick: n[1] || (n[1] = (...n)=>e.containerClick && e.containerClick(...n)),
                  onContextmenu: n[2] || (n[2] = (...n)=>e.containerClick && e.containerClick(...n))
              }, [(0,
              t._)("div", $e, [(0,
              t._)("div", Ve, [Je, e.resolvedMessages.length ? ((0,
              t.wg)(),
              (0,
              t.iD)("button", {
                  key: 0,
                  class: "btn dismiss-all-mentions",
                  onClick: n[0] || (n[0] = n=>e.dismissAllMentions())
              }, " Dismiss all ")) : (0,
              t.kq)("", !0)]), 0 === e.resolvedMessages.length ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 0
              }, [e.isLoading ? ((0,
              t.wg)(),
              (0,
              t.iD)("p", Ke, "Loading…")) : ((0,
              t.wg)(),
              (0,
              t.iD)("p", Ge, "You have no recent mentions."))], 64)) : ((0,
              t.wg)(!0),
              (0,
              t.iD)(t.HY, {
                  key: 1
              }, (0,
              t.Ko)(e.resolvedMessages, (n=>((0,
              t.wg)(),
              (0,
              t.iD)("div", {
                  key: n.msgId,
                  class: (0,
                  s.C_)(["msg", n.type])
              }, [(0,
              t._)("div", Xe, [(0,
              t._)("div", null, [(0,
              t._)("span", Qe, [(0,
              t.Wm)(l, {
                  user: n.from
              }, null, 8, ["user"]), n.channel ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 0
              }, [(0,
              t.Uk)(" in " + (0,
              s.zw)(n.channel.channel.name) + " on " + (0,
              s.zw)(n.channel.network.name), 1)], 64)) : ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 1
              }, [en], 64))]), nn, (0,
              t._)("span", {
                  title: n.localetime,
                  class: "time"
              }, (0,
              s.zw)(e.messageTime(n.time.toString())), 9, an)]), (0,
              t._)("div", null, [(0,
              t._)("span", tn, [(0,
              t._)("button", {
                  class: "msg-dismiss",
                  "aria-label": "Dismiss this mention",
                  onClick: a=>e.dismissMention(n)
              }, null, 8, sn)])])]), (0,
              t._)("div", on, [(0,
              t.Wm)(c, {
                  message: n
              }, null, 8, ["message"])])], 2)))), 128))])], 32)) : (0,
              t.kq)("", !0)
          }
          ]]);
          const wn = Symbol()
            , fn = Symbol()
            , kn = Symbol();
          var bn = (0,
          t.aZ)({
              name: "App",
              components: {
                  Sidebar: Me,
                  ImageViewer: He,
                  ContextMenu: Ne,
                  ConfirmDialog: Be,
                  Mentions: mn
              },
              setup() {
                  const e = (0,
                  q.oR)()
                    , n = (0,
                  U.iH)(null)
                    , a = (0,
                  U.iH)(null)
                    , s = (0,
                  U.iH)(null)
                    , o = (0,
                  U.iH)(null)
                    , l = (0,
                  U.iH)(null);
                  (0,
                  t.JJ)(wn, s),
                  (0,
                  t.JJ)(fn, o),
                  (0,
                  t.JJ)(kn, l);
                  const u = (0,
                  t.Fl)((()=>({
                      notified: e.getters.highlightCount > 0,
                      "menu-open": e.state.appLoaded && e.state.sidebarOpen,
                      "menu-dragging": e.state.sidebarDragging,
                      "userlist-open": e.state.userlistOpen
                  })))
                    , g = (0,
                  U.iH)()
                    , m = (0,
                  U.iH)()
                    , w = ()=>{
                      r.Z.emit("escapekey")
                  }
                    , f = n=>!!(0,
                  p.Z)(n) || (e.commit("toggleSidebar"),
                  !1)
                    , k = n=>!!(0,
                  p.Z)(n) || (e.commit("toggleUserlist"),
                  !1)
                    , b = ()=>{
                      0 !== e.state.networks.length && r.Z.emit("mentions:toggle")
                  }
                    , v = ()=>{
                      const e = new Date;
                      return new Date(e.getFullYear(),e.getMonth(),e.getDate() + 1).getTime() - e.getTime()
                  }
                  ;
                  return (()=>{
                      const n = window.innerWidth;
                      let a = h.Z.get("thelounge.state.userlist");
                      n > i.Z.mobileViewportPixels && e.commit("sidebarOpen", "false" !== h.Z.get("thelounge.state.sidebar")),
                      n >= 1024 && "true" !== a && "false" !== a && (a = "true"),
                      e.commit("userlistOpen", "true" === a)
                  }
                  )(),
                  (0,
                  t.bv)((()=>{
                      c().bind("esc", w),
                      c().bind("alt+u", k),
                      c().bind("alt+s", f),
                      c().bind("alt+m", b),
                      g.value = d()((()=>{
                          r.Z.emit("resize")
                      }
                      ), 100),
                      window.addEventListener("resize", g.value, {
                          passive: !0
                      });
                      const e = ()=>{
                          r.Z.emit("daychange"),
                          m.value = setTimeout(e, v())
                      }
                      ;
                      m.value = setTimeout(e, v())
                  }
                  )),
                  (0,
                  t.Jd)((()=>{
                      c().unbind("esc"),
                      c().unbind("alt+u"),
                      c().unbind("alt+s"),
                      c().unbind("alt+m"),
                      g.value && window.removeEventListener("resize", g.value),
                      m.value && clearTimeout(m.value)
                  }
                  )),
                  {
                      viewportClasses: u,
                      escapeKey: w,
                      toggleSidebar: f,
                      toggleUserList: k,
                      toggleMentions: b,
                      store: e,
                      overlay: n,
                      loungeWindow: a,
                      imageViewer: s,
                      contextMenu: o,
                      confirmDialog: l
                  }
              }
          })
            , vn = (0,
          R.Z)(bn, [["render", function(e, n, a, i, r, l) {
              const c = (0,
              t.up)("Sidebar")
                , u = (0,
              t.up)("router-view")
                , d = (0,
              t.up)("Mentions")
                , h = (0,
              t.up)("ImageViewer")
                , p = (0,
              t.up)("ContextMenu")
                , g = (0,
              t.up)("ConfirmDialog");
              return (0,
              t.wg)(),
              (0,
              t.iD)("div", {
                  id: "viewport",
                  class: (0,
                  s.C_)(e.viewportClasses),
                  role: "tablist"
              }, [e.store.state.appLoaded ? ((0,
              t.wg)(),
              (0,
              t.j4)(c, {
                  key: 0,
                  overlay: e.overlay
              }, null, 8, ["overlay"])) : (0,
              t.kq)("", !0), (0,
              t._)("div", {
                  id: "sidebar-overlay",
                  ref: "overlay",
                  "aria-hidden": "true",
                  onClick: n[0] || (n[0] = n=>e.store.commit("sidebarOpen", !1))
              }, null, 512), (0,
              t.Wm)(u, {
                  ref: "loungeWindow"
              }, null, 512), (0,
              t.Wm)(d), (0,
              t.Wm)(h, {
                  ref: "imageViewer"
              }, null, 512), (0,
              t.Wm)(p, {
                  ref: "contextMenu"
              }, null, 512), (0,
              t.Wm)(g, {
                  ref: "confirmDialog"
              }, null, 512), o], 2)
          }
          ]])
      }
      ,
      4509: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>h
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = (0,
          t.Uk)(" is away ")
            , i = {
              class: "away-message"
          }
            , r = (0,
          t.Uk)("(")
            , l = (0,
          t.Uk)(")");
          var c = a(6850)
            , u = a(7652)
            , d = (0,
          t.aZ)({
              name: "MessageTypeAway",
              components: {
                  ParsedMessage: c.Z,
                  Username: u.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , h = (0,
          a(3744).Z)(d, [["render", function(e, n, a, c, u, d) {
              const h = (0,
              t.up)("ParsedMessage")
                , p = (0,
              t.up)("Username");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [e.message.self ? ((0,
              t.wg)(),
              (0,
              t.j4)(h, {
                  key: 0,
                  network: e.network,
                  message: e.message
              }, null, 8, ["network", "message"])) : ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 1
              }, [(0,
              t.Wm)(p, {
                  user: e.message.from
              }, null, 8, ["user"]), o, (0,
              t._)("i", i, [r, (0,
              t.Wm)(h, {
                  network: e.network,
                  message: e.message
              }, null, 8, ["network", "message"]), l])], 64))])
          }
          ]])
      }
      ,
      5381: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>c
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = (0,
          t.Uk)(" is back ");
          var i = a(6850)
            , r = a(7652)
            , l = (0,
          t.aZ)({
              name: "MessageTypeBack",
              components: {
                  ParsedMessage: i.Z,
                  Username: r.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , c = (0,
          a(3744).Z)(l, [["render", function(e, n, a, i, r, l) {
              const c = (0,
              t.up)("ParsedMessage")
                , u = (0,
              t.up)("Username");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [e.message.self ? ((0,
              t.wg)(),
              (0,
              t.j4)(c, {
                  key: 0,
                  network: e.network,
                  message: e.message
              }, null, 8, ["network", "message"])) : ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 1
              }, [(0,
              t.Wm)(u, {
                  user: e.message.from
              }, null, 8, ["user"]), o], 64))])
          }
          ]])
      }
      ,
      3089: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>m
          });
          var t = a(3648)
            , s = a(3577);
          const o = {
              class: "content"
          }
            , i = (0,
          t.Uk)(" has changed ")
            , r = {
              key: 0
          }
            , l = (0,
          t.Uk)("username to ")
            , c = {
              key: 1
          }
            , u = (0,
          t.Uk)("hostname to ")
            , d = {
              class: "hostmask"
          };
          var h = a(6850)
            , p = a(7652)
            , g = (0,
          t.aZ)({
              name: "MessageTypeChangeHost",
              components: {
                  ParsedMessage: h.Z,
                  Username: p.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , m = (0,
          a(3744).Z)(g, [["render", function(e, n, a, h, p, g) {
              const m = (0,
              t.up)("Username")
                , w = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", o, [(0,
              t.Wm)(m, {
                  user: e.message.from
              }, null, 8, ["user"]), i, e.message.new_ident ? ((0,
              t.wg)(),
              (0,
              t.iD)("span", r, [l, (0,
              t._)("b", null, (0,
              s.zw)(e.message.new_ident), 1)])) : (0,
              t.kq)("", !0), e.message.new_host ? ((0,
              t.wg)(),
              (0,
              t.iD)("span", c, [u, (0,
              t._)("i", d, [(0,
              t.Wm)(w, {
                  network: e.network,
                  text: e.message.new_host
              }, null, 8, ["network", "text"])])])) : (0,
              t.kq)("", !0)])
          }
          ]])
      }
      ,
      4878: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>d
          });
          var t = a(3648)
            , s = a(3577);
          const o = {
              class: "content"
          }
            , i = (0,
          t.Uk)(" " + (0,
          s.zw)(" "))
            , r = {
              class: "ctcp-message"
          };
          var l = a(6850)
            , c = a(7652)
            , u = (0,
          t.aZ)({
              name: "MessageTypeCTCP",
              components: {
                  ParsedMessage: l.Z,
                  Username: c.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , d = (0,
          a(3744).Z)(u, [["render", function(e, n, a, s, l, c) {
              const u = (0,
              t.up)("Username")
                , d = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", o, [(0,
              t.Wm)(u, {
                  user: e.message.from
              }, null, 8, ["user"]), i, (0,
              t._)("span", r, [(0,
              t.Wm)(d, {
                  text: e.message.ctcpMessage
              }, null, 8, ["text"])])])
          }
          ]])
      }
      ,
      7052: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>h
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = (0,
          t.Uk)(" sent a ")
            , i = (0,
          t._)("abbr", {
              title: "Client-to-client protocol"
          }, "CTCP", -1)
            , r = (0,
          t.Uk)(" request: ")
            , l = {
              class: "ctcp-message"
          };
          var c = a(6850)
            , u = a(7652)
            , d = (0,
          t.aZ)({
              name: "MessageTypeRequestCTCP",
              components: {
                  ParsedMessage: c.Z,
                  Username: u.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , h = (0,
          a(3744).Z)(d, [["render", function(e, n, a, c, u, d) {
              const h = (0,
              t.up)("Username")
                , p = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [(0,
              t.Wm)(h, {
                  user: e.message.from
              }, null, 8, ["user"]), o, i, r, (0,
              t._)("span", l, [(0,
              t.Wm)(p, {
                  text: e.message.ctcpMessage
              }, null, 8, ["text"])])])
          }
          ]])
      }
      ,
      3576: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>r
          });
          var t = a(3648);
          const s = {
              class: "content"
          };
          var o = a(6850)
            , i = (0,
          t.aZ)({
              name: "MessageTypeError",
              components: {
                  ParsedMessage: o.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              },
              setup: e=>({
                  errorMessage: (0,
                  t.Fl)((()=>{
                      switch (e.message.error) {
                      case "bad_channel_key":
                          return `Cannot join ${e.message.channel} - Bad channel key.`;
                      case "banned_from_channel":
                          return `Cannot join ${e.message.channel} - You have been banned from the channel.`;
                      case "cannot_send_to_channel":
                          return `Cannot send to channel ${e.message.channel}`;
                      case "channel_is_full":
                          return `Cannot join ${e.message.channel} - Channel is full.`;
                      case "chanop_privs_needed":
                          return "Cannot perform action: You're not a channel operator.";
                      case "invite_only_channel":
                          return `Cannot join ${e.message.channel} - Channel is invite only.`;
                      case "no_such_nick":
                          return `User ${e.message.nick} hasn't logged in or does not exist.`;
                      case "not_on_channel":
                          return "Cannot perform action: You're not on the channel.";
                      case "password_mismatch":
                          return "Password mismatch.";
                      case "too_many_channels":
                          return `Cannot join ${e.message.channel} - You've already reached the maximum number of channels allowed.`;
                      case "unknown_command":
                          return `Unknown command: ${e.message.command}`;
                      case "user_not_in_channel":
                          return `User ${e.message.nick} is not on the channel.`;
                      case "user_on_channel":
                          return `User ${e.message.nick} is already on the channel.`;
                      default:
                          return e.message.reason ? `${e.message.reason} (${e.message.error})` : e.message.error
                      }
                  }
                  ))
              })
          })
            , r = (0,
          a(3744).Z)(i, [["render", function(e, n, a, o, i, r) {
              const l = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [(0,
              t.Wm)(l, {
                  network: e.network,
                  message: e.message,
                  text: e.errorMessage
              }, null, 8, ["network", "message", "text"])])
          }
          ]])
      }
      ,
      6502: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>d
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = (0,
          t.Uk)(" invited ")
            , i = {
              key: 0
          }
            , r = (0,
          t.Uk)(" to ");
          var l = a(6850)
            , c = a(7652)
            , u = (0,
          t.aZ)({
              name: "MessageTypeInvite",
              components: {
                  ParsedMessage: l.Z,
                  Username: c.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , d = (0,
          a(3744).Z)(u, [["render", function(e, n, a, l, c, u) {
              const d = (0,
              t.up)("Username")
                , h = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [(0,
              t.Wm)(d, {
                  user: e.message.from
              }, null, 8, ["user"]), o, e.message.invitedYou ? ((0,
              t.wg)(),
              (0,
              t.iD)("span", i, "you")) : ((0,
              t.wg)(),
              (0,
              t.j4)(d, {
                  key: 1,
                  user: e.message.target
              }, null, 8, ["user"])), r, (0,
              t.Wm)(h, {
                  network: e.network,
                  text: e.message.channel
              }, null, 8, ["network", "text"])])
          }
          ]])
      }
      ,
      1770: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>m
          });
          var t = a(3648)
            , s = a(3577);
          const o = {
              class: "content"
          }
            , i = {
              class: "hostmask"
          }
            , r = (0,
          t.Uk)(" (")
            , l = (0,
          t.Uk)(")")
            , c = {
              key: 0,
              class: "account"
          }
            , u = {
              key: 1,
              class: "realname"
          }
            , d = (0,
          t.Uk)(" has joined the channel ");
          var h = a(6850)
            , p = a(7652)
            , g = (0,
          t.aZ)({
              name: "MessageTypeJoin",
              components: {
                  ParsedMessage: h.Z,
                  Username: p.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , m = (0,
          a(3744).Z)(g, [["render", function(e, n, a, h, p, g) {
              const m = (0,
              t.up)("Username")
                , w = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", o, [(0,
              t.Wm)(m, {
                  user: e.message.from
              }, null, 8, ["user"]), (0,
              t._)("i", i, [r, (0,
              t.Wm)(w, {
                  network: e.network,
                  text: e.message.hostmask
              }, null, 8, ["network", "text"]), l]), e.message.account ? ((0,
              t.wg)(),
              (0,
              t.iD)("i", c, " [" + (0,
              s.zw)(e.message.account) + "]", 1)) : (0,
              t.kq)("", !0), e.message.gecos ? ((0,
              t.wg)(),
              (0,
              t.iD)("i", u, " (" + (0,
              s.zw)(e.message.gecos) + ")", 1)) : (0,
              t.kq)("", !0), d])
          }
          ]])
      }
      ,
      2501: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>h
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = (0,
          t.Uk)(" has kicked ")
            , i = {
              key: 0,
              class: "part-reason"
          }
            , r = (0,
          t.Uk)(" (")
            , l = (0,
          t.Uk)(")");
          var c = a(6850)
            , u = a(7652)
            , d = (0,
          t.aZ)({
              name: "MessageTypeKick",
              components: {
                  ParsedMessage: c.Z,
                  Username: u.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , h = (0,
          a(3744).Z)(d, [["render", function(e, n, a, c, u, d) {
              const h = (0,
              t.up)("Username")
                , p = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [(0,
              t.Wm)(h, {
                  user: e.message.from
              }, null, 8, ["user"]), o, (0,
              t.Wm)(h, {
                  user: e.message.target
              }, null, 8, ["user"]), e.message.text ? ((0,
              t.wg)(),
              (0,
              t.iD)("i", i, [r, (0,
              t.Wm)(p, {
                  network: e.network,
                  message: e.message
              }, null, 8, ["network", "message"]), l])) : (0,
              t.kq)("", !0)])
          }
          ]])
      }
      ,
      7393: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>c
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = (0,
          t.Uk)(" sets mode ");
          var i = a(6850)
            , r = a(7652)
            , l = (0,
          t.aZ)({
              name: "MessageTypeMode",
              components: {
                  ParsedMessage: i.Z,
                  Username: r.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , c = (0,
          a(3744).Z)(l, [["render", function(e, n, a, i, r, l) {
              const c = (0,
              t.up)("Username")
                , u = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [(0,
              t.Wm)(c, {
                  user: e.message.from
              }, null, 8, ["user"]), o, (0,
              t.Wm)(u, {
                  message: e.message
              }, null, 8, ["message"])])
          }
          ]])
      }
      ,
      1686: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>l
          });
          var t = a(3648)
            , s = a(3577);
          const o = {
              class: "content"
          }
            , i = (0,
          t.Uk)(" Channel mode is ");
          var r = (0,
          t.aZ)({
              name: "MessageChannelMode",
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , l = (0,
          a(3744).Z)(r, [["render", function(e, n, a, r, l, c) {
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", o, [i, (0,
              t._)("b", null, (0,
              s.zw)(e.message.text), 1)])
          }
          ]])
      }
      ,
      1267: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>l
          });
          var t = a(3648)
            , s = a(3577);
          const o = {
              class: "content"
          }
            , i = (0,
          t.Uk)(" Your user mode is ");
          var r = (0,
          t.aZ)({
              name: "MessageChannelMode",
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , l = (0,
          a(3744).Z)(r, [["render", function(e, n, a, r, l, c) {
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", o, [i, (0,
              t._)("b", null, (0,
              s.zw)(e.message.raw_modes), 1)])
          }
          ]])
      }
      ,
      6258: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>l
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = {
              class: "text"
          };
          var i = a(6850)
            , r = (0,
          t.aZ)({
              name: "MessageTypeMonospaceBlock",
              components: {
                  ParsedMessage: i.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              },
              setup: e=>({
                  cleanText: (0,
                  t.Fl)((()=>{
                      let n = e.message.text.split("\n");
                      return n.every((e=>"" === e || "-" === e[0])) && (n = n.map((e=>e.substring(2)))),
                      n.map((e=>e.replace(/\s*$/, ""))).join("\n").replace(/^[\r\n]+|[\r\n]+$/g, "")
                  }
                  ))
              })
          })
            , l = (0,
          a(3744).Z)(r, [["render", function(e, n, a, i, r, l) {
              const c = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [(0,
              t._)("span", o, [(0,
              t.Wm)(c, {
                  network: e.network,
                  text: e.cleanText
              }, null, 8, ["network", "text"])])])
          }
          ]])
      }
      ,
      5169: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>l
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = (0,
          t.Uk)(" is now known as ");
          var i = a(7652)
            , r = (0,
          t.aZ)({
              name: "MessageTypeNick",
              components: {
                  Username: i.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , l = (0,
          a(3744).Z)(r, [["render", function(e, n, a, i, r, l) {
              const c = (0,
              t.up)("Username");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [(0,
              t.Wm)(c, {
                  user: e.message.from
              }, null, 8, ["user"]), o, (0,
              t.Wm)(c, {
                  user: {
                      nick: e.message.new_nick,
                      mode: e.message.from.mode
                  }
              }, null, 8, ["user"])])
          }
          ]])
      }
      ,
      3397: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>m
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = {
              class: "hostmask"
          }
            , i = (0,
          t.Uk)(" (")
            , r = (0,
          t.Uk)(")")
            , l = (0,
          t.Uk)(" has left the channel ")
            , c = {
              key: 0,
              class: "part-reason"
          }
            , u = (0,
          t.Uk)("(")
            , d = (0,
          t.Uk)(")");
          var h = a(6850)
            , p = a(7652)
            , g = (0,
          t.aZ)({
              name: "MessageTypePart",
              components: {
                  ParsedMessage: h.Z,
                  Username: p.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , m = (0,
          a(3744).Z)(g, [["render", function(e, n, a, h, p, g) {
              const m = (0,
              t.up)("Username")
                , w = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [(0,
              t.Wm)(m, {
                  user: e.message.from
              }, null, 8, ["user"]), (0,
              t._)("i", o, [i, (0,
              t.Wm)(w, {
                  network: e.network,
                  text: e.message.hostmask
              }, null, 8, ["network", "text"]), r]), l, e.message.text ? ((0,
              t.wg)(),
              (0,
              t.iD)("i", c, [u, (0,
              t.Wm)(w, {
                  network: e.network,
                  message: e.message
              }, null, 8, ["network", "message"]), d])) : (0,
              t.kq)("", !0)])
          }
          ]])
      }
      ,
      9561: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>m
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = {
              class: "hostmask"
          }
            , i = (0,
          t.Uk)(" (")
            , r = (0,
          t.Uk)(")")
            , l = (0,
          t.Uk)(" has quit ")
            , c = {
              key: 0,
              class: "quit-reason"
          }
            , u = (0,
          t.Uk)("(")
            , d = (0,
          t.Uk)(")");
          var h = a(6850)
            , p = a(7652)
            , g = (0,
          t.aZ)({
              name: "MessageTypeQuit",
              components: {
                  ParsedMessage: h.Z,
                  Username: p.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , m = (0,
          a(3744).Z)(g, [["render", function(e, n, a, h, p, g) {
              const m = (0,
              t.up)("Username")
                , w = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [(0,
              t.Wm)(m, {
                  user: e.message.from
              }, null, 8, ["user"]), (0,
              t._)("i", o, [i, (0,
              t.Wm)(w, {
                  network: e.network,
                  text: e.message.hostmask
              }, null, 8, ["network", "text"]), r]), l, e.message.text ? ((0,
              t.wg)(),
              (0,
              t.iD)("i", c, [u, (0,
              t.Wm)(w, {
                  network: e.network,
                  message: e.message
              }, null, 8, ["network", "message"]), d])) : (0,
              t.kq)("", !0)])
          }
          ]])
      }
      ,
      7928: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>r
          });
          var t = a(3648)
            , s = a(3577);
          const o = {
              class: "content"
          };
          var i = (0,
          t.aZ)({
              name: "MessageTypeRaw",
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , r = (0,
          a(3744).Z)(i, [["render", function(e, n, a, i, r, l) {
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", o, (0,
              s.zw)(e.message.text), 1)
          }
          ]])
      }
      ,
      6096: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>d
          });
          var t = a(3648);
          const s = {
              class: "content"
          }
            , o = (0,
          t.Uk)(" has changed the topic to: ")
            , i = (0,
          t.Uk)("The topic is: ")
            , r = {
              key: 2,
              class: "new-topic"
          };
          var l = a(6850)
            , c = a(7652)
            , u = (0,
          t.aZ)({
              name: "MessageTypeTopic",
              components: {
                  ParsedMessage: l.Z,
                  Username: c.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              }
          })
            , d = (0,
          a(3744).Z)(u, [["render", function(e, n, a, l, c, u) {
              const d = (0,
              t.up)("Username")
                , h = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", s, [e.message.from && e.message.from.nick ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 0
              }, [(0,
              t.Wm)(d, {
                  user: e.message.from
              }, null, 8, ["user"]), o], 64)) : ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 1
              }, [i], 64)), e.message.text ? ((0,
              t.wg)(),
              (0,
              t.iD)("span", r, [(0,
              t.Wm)(h, {
                  network: e.network,
                  message: e.message
              }, null, 8, ["network", "message"])])) : (0,
              t.kq)("", !0)])
          }
          ]])
      }
      ,
      4886: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>u
          });
          var t = a(3648)
            , s = a(3577);
          const o = {
              class: "content"
          }
            , i = (0,
          t.Uk)(" Topic set by ");
          var r = a(8017)
            , l = a(7652)
            , c = (0,
          t.aZ)({
              name: "MessageTypeTopicSetBy",
              components: {
                  Username: l.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              },
              setup: e=>({
                  messageTimeLocale: (0,
                  t.Fl)((()=>(0,
                  r.Z)(e.message.when)))
              })
          })
            , u = (0,
          a(3744).Z)(c, [["render", function(e, n, a, r, l, c) {
              const u = (0,
              t.up)("Username");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", o, [i, (0,
              t.Wm)(u, {
                  user: e.message.from
              }, null, 8, ["user"]), (0,
              t.Uk)(" on " + (0,
              s.zw)(e.messageTimeLocale), 1)])
          }
          ]])
      }
      ,
      801: (e,n,a)=>{
          "use strict";
          a.r(n),
          a.d(n, {
              default: ()=>O
          });
          var t = a(3648)
            , s = a(3577);
          const o = {
              class: "content"
          }
            , i = {
              key: 0
          }
            , r = {
              class: "whois"
          }
            , l = (0,
          t._)("dt", null, "Logged in as:", -1)
            , c = (0,
          t._)("dt", null, "Host mask:", -1)
            , u = {
              class: "hostmask"
          }
            , d = (0,
          t._)("dt", null, "Actual host:", -1)
            , h = {
              class: "hostmask"
          }
            , p = ["href"]
            , g = {
              key: 0
          }
            , m = (0,
          t._)("dt", null, "Real name:", -1)
            , w = (0,
          t._)("dt", null, "Registered nick:", -1)
            , f = (0,
          t._)("dt", null, "Channels:", -1)
            , k = (0,
          t._)("dt", null, "Modes:", -1)
            , b = (0,
          t._)("dt", null, "Special:", -1)
            , v = (0,
          t._)("dt", null, "Operator:", -1)
            , _ = (0,
          t._)("dt", null, "Available for help:", -1)
            , y = (0,
          t._)("dd", null, "Yes", -1)
            , C = (0,
          t._)("dt", null, "Is a bot:", -1)
            , x = (0,
          t._)("dd", null, "Yes", -1)
            , S = (0,
          t._)("dt", null, "Away:", -1)
            , D = (0,
          t._)("dt", null, "Secure connection:", -1)
            , Z = (0,
          t._)("dd", null, "Yes", -1)
            , U = (0,
          t._)("dt", null, "Certificate:", -1)
            , M = (0,
          t._)("dt", null, "Connected to:", -1)
            , q = (0,
          t._)("dt", null, "Connected at:", -1)
            , j = (0,
          t._)("dt", null, "Idle since:", -1);
          var T = a(8017)
            , P = a(6850)
            , H = a(7652)
            , L = (0,
          t.aZ)({
              name: "MessageTypeWhois",
              components: {
                  ParsedMessage: P.Z,
                  Username: H.Z
              },
              props: {
                  network: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              },
              setup: ()=>({
                  localetime: e=>(0,
                  T.Z)(e)
              })
          })
            , O = (0,
          a(3744).Z)(L, [["render", function(e, n, a, T, P, H) {
              const L = (0,
              t.up)("Username")
                , O = (0,
              t.up)("ParsedMessage");
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", o, [(0,
              t._)("p", null, [(0,
              t.Wm)(L, {
                  user: {
                      nick: e.message.whois.nick
                  }
              }, null, 8, ["user"]), e.message.whois.whowas ? ((0,
              t.wg)(),
              (0,
              t.iD)("span", i, " is offline, last information:")) : (0,
              t.kq)("", !0)]), (0,
              t._)("dl", r, [e.message.whois.account ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 0
              }, [l, (0,
              t._)("dd", null, (0,
              s.zw)(e.message.whois.account), 1)], 64)) : (0,
              t.kq)("", !0), c, (0,
              t._)("dd", u, [(0,
              t.Wm)(O, {
                  network: e.network,
                  text: e.message.whois.ident + "@" + e.message.whois.hostname
              }, null, 8, ["network", "text"])]), e.message.whois.actual_hostname ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 1
              }, [d, (0,
              t._)("dd", h, [(0,
              t._)("a", {
                  href: "https://ipinfo.io/" + e.message.whois.actual_ip,
                  target: "_blank",
                  rel: "noopener"
              }, (0,
              s.zw)(e.message.whois.actual_ip), 9, p), e.message.whois.actual_hostname != e.message.whois.actual_ip ? ((0,
              t.wg)(),
              (0,
              t.iD)("i", g, " (" + (0,
              s.zw)(e.message.whois.actual_hostname) + ")", 1)) : (0,
              t.kq)("", !0)])], 64)) : (0,
              t.kq)("", !0), e.message.whois.real_name ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 2
              }, [m, (0,
              t._)("dd", null, [(0,
              t.Wm)(O, {
                  network: e.network,
                  text: e.message.whois.real_name
              }, null, 8, ["network", "text"])])], 64)) : (0,
              t.kq)("", !0), e.message.whois.registered_nick ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 3
              }, [w, (0,
              t._)("dd", null, (0,
              s.zw)(e.message.whois.registered_nick), 1)], 64)) : (0,
              t.kq)("", !0), e.message.whois.channels ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 4
              }, [f, (0,
              t._)("dd", null, [(0,
              t.Wm)(O, {
                  network: e.network,
                  text: e.message.whois.channels
              }, null, 8, ["network", "text"])])], 64)) : (0,
              t.kq)("", !0), e.message.whois.modes ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 5
              }, [k, (0,
              t._)("dd", null, (0,
              s.zw)(e.message.whois.modes), 1)], 64)) : (0,
              t.kq)("", !0), e.message.whois.special ? ((0,
              t.wg)(!0),
              (0,
              t.iD)(t.HY, {
                  key: 6
              }, (0,
              t.Ko)(e.message.whois.special, (e=>((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: e
              }, [b, (0,
              t._)("dd", null, (0,
              s.zw)(e), 1)], 64)))), 128)) : (0,
              t.kq)("", !0), e.message.whois.operator ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 7
              }, [v, (0,
              t._)("dd", null, (0,
              s.zw)(e.message.whois.operator), 1)], 64)) : (0,
              t.kq)("", !0), e.message.whois.helpop ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 8
              }, [_, y], 64)) : (0,
              t.kq)("", !0), e.message.whois.bot ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 9
              }, [C, x], 64)) : (0,
              t.kq)("", !0), e.message.whois.away ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 10
              }, [S, (0,
              t._)("dd", null, [(0,
              t.Wm)(O, {
                  network: e.network,
                  text: e.message.whois.away
              }, null, 8, ["network", "text"])])], 64)) : (0,
              t.kq)("", !0), e.message.whois.secure ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 11
              }, [D, Z], 64)) : (0,
              t.kq)("", !0), e.message.whois.certfp ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 12
              }, [U, (0,
              t._)("dd", null, (0,
              s.zw)(e.message.whois.certfp), 1)], 64)) : (0,
              t.kq)("", !0), e.message.whois.server ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 13
              }, [M, (0,
              t._)("dd", null, [(0,
              t.Uk)((0,
              s.zw)(e.message.whois.server) + " ", 1), (0,
              t._)("i", null, "(" + (0,
              s.zw)(e.message.whois.server_info) + ")", 1)])], 64)) : (0,
              t.kq)("", !0), e.message.whois.logonTime ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 14
              }, [q, (0,
              t._)("dd", null, (0,
              s.zw)(e.localetime(e.message.whois.logonTime)), 1)], 64)) : (0,
              t.kq)("", !0), e.message.whois.idle ? ((0,
              t.wg)(),
              (0,
              t.iD)(t.HY, {
                  key: 15
              }, [j, (0,
              t._)("dd", null, (0,
              s.zw)(e.localetime(e.message.whois.idleTime)), 1)], 64)) : (0,
              t.kq)("", !0)])])
          }
          ]])
      }
      ,
      6850: (e,n,a)=>{
          "use strict";
          a.d(n, {
              Z: ()=>A
          });
          var t = a(3648);
          const s = /^(\d{1,2})(?:,(\d{1,2}))?/
            , o = /^([0-9a-f]{6})(?:,([0-9a-f]{6}))?/i
            , i = /[\u0000-\u0009\u000B-\u001F]/g
            , r = ["bold", "textColor", "bgColor", "hexColor", "hexBgColor", "italic", "underline", "strikethrough", "monospace"];
          var l = a(3522)
            , c = a.n(l);
          function u(e) {
              return c()(e).replace("-", "\\-")
          }
          var d = a(8337)
            , h = a.n(d)
            , p = a(248);
          const g = h()().tlds(p).tlds("onion", !0)
            , m = ["sftp", "smb", "file", "irc", "ircs", "svn", "git", "steam", "mumble", "ts3server", "svn+ssh", "ssh", "gopher", "gemini"];
          for (const e of m)
              g.add(e + ":", "http:");
          function w(e) {
              return {
                  start: e.index,
                  end: e.lastIndex,
                  link: e.url
              }
          }
          g.add("web+", {
              validate(e, n, a) {
                  const t = /^[a-z]+:/gi;
                  if (!t.test(e.slice(n)))
                      return 0;
                  const s = a.testSchemaAt(e, "http:", n + t.lastIndex);
                  return 0 === s ? 0 : t.lastIndex + s
              },
              normalize(e) {
                  e.schema = e.text.slice(0, e.text.indexOf(":") + 1)
              }
          }),
          g.add("//", {
              validate: g.__schemas__["//"].validate,
              normalize(e) {
                  e.schema = "",
                  e.url = "http:" + e.url
              }
          });
          const f = (0,
          a(2846).Z)();
          const k = /([\w[\]\\`^{|}-]+)/g;
          var b = function(e, n) {
              return e.start <= n.start && n.start < e.end || e.start < n.end && n.end <= e.end || n.start <= e.start && e.start < n.end || n.start < e.end && e.end <= n.end
          };
          function v(e, n) {
              return e.start - n.start || n.end - e.end
          }
          var _ = JSON.parse('{"😀":"grinning face","😃":"grinning face with big eyes","😄":"grinning face with smiling eyes","😁":"beaming face with smiling eyes","😆":"grinning squinting face","😅":"grinning face with sweat","🤣":"rolling on the floor laughing","😂":"face with tears of joy","🙂":"slightly smiling face","🙃":"upside-down face","🫠":"melting face","😉":"winking face","😊":"smiling face with smiling eyes","😇":"smiling face with halo","🥰":"smiling face with hearts","😍":"smiling face with heart-eyes","🤩":"star-struck","😘":"face blowing a kiss","😗":"kissing face","☺":"smiling face","😚":"kissing face with closed eyes","😙":"kissing face with smiling eyes","🥲":"smiling face with tear","😋":"face savoring food","😛":"face with tongue","😜":"winking face with tongue","🤪":"zany face","😝":"squinting face with tongue","🤑":"money-mouth face","🤗":"smiling face with open hands","🤭":"face with hand over mouth","🫢":"face with open eyes and hand over mouth","🫣":"face with peeking eye","🤫":"shushing face","🤔":"thinking face","🫡":"saluting face","🤐":"zipper-mouth face","🤨":"face with raised eyebrow","😐":"neutral face","😑":"expressionless face","😶":"face without mouth","🫥":"dotted line face","😶‍🌫":"face in clouds","😏":"smirking face","😒":"unamused face","🙄":"face with rolling eyes","😬":"grimacing face","😮‍💨":"face exhaling","🤥":"lying face","🫨":"shaking face","😌":"relieved face","😔":"pensive face","😪":"sleepy face","🤤":"drooling face","😴":"sleeping face","😷":"face with medical mask","🤒":"face with thermometer","🤕":"face with head-bandage","🤢":"nauseated face","🤮":"face vomiting","🤧":"sneezing face","🥵":"hot face","🥶":"cold face","🥴":"woozy face","😵":"face with crossed-out eyes","😵‍💫":"face with spiral eyes","🤯":"exploding head","🤠":"cowboy hat face","🥳":"partying face","🥸":"disguised face","😎":"smiling face with sunglasses","🤓":"nerd face","🧐":"face with monocle","😕":"confused face","🫤":"face with diagonal mouth","😟":"worried face","🙁":"slightly frowning face","☹":"frowning face","😮":"face with open mouth","😯":"hushed face","😲":"astonished face","😳":"flushed face","🥺":"pleading face","🥹":"face holding back tears","😦":"frowning face with open mouth","😧":"anguished face","😨":"fearful face","😰":"anxious face with sweat","😥":"sad but relieved face","😢":"crying face","😭":"loudly crying face","😱":"face screaming in fear","😖":"confounded face","😣":"persevering face","😞":"disappointed face","😓":"downcast face with sweat","😩":"weary face","😫":"tired face","🥱":"yawning face","😤":"face with steam from nose","😡":"enraged face","😠":"angry face","🤬":"face with symbols on mouth","😈":"smiling face with horns","👿":"angry face with horns","💀":"skull","☠":"skull and crossbones","💩":"pile of poo","🤡":"clown face","👹":"ogre","👺":"goblin","👻":"ghost","👽":"alien","👾":"alien monster","🤖":"robot","😺":"grinning cat","😸":"grinning cat with smiling eyes","😹":"cat with tears of joy","😻":"smiling cat with heart-eyes","😼":"cat with wry smile","😽":"kissing cat","🙀":"weary cat","😿":"crying cat","😾":"pouting cat","🙈":"see-no-evil monkey","🙉":"hear-no-evil monkey","🙊":"speak-no-evil monkey","💌":"love letter","💘":"heart with arrow","💝":"heart with ribbon","💖":"sparkling heart","💗":"growing heart","💓":"beating heart","💞":"revolving hearts","💕":"two hearts","💟":"heart decoration","❣":"heart exclamation","💔":"broken heart","❤‍🔥":"heart on fire","❤‍🩹":"mending heart","❤":"red heart","🩷":"pink heart","🧡":"orange heart","💛":"yellow heart","💚":"green heart","💙":"blue heart","🩵":"light blue heart","💜":"purple heart","🤎":"brown heart","🖤":"black heart","🩶":"grey heart","🤍":"white heart","💋":"kiss mark","💯":"hundred points","💢":"anger symbol","💥":"collision","💫":"dizzy","💦":"sweat droplets","💨":"dashing away","🕳":"hole","💬":"speech balloon","👁‍🗨":"eye in speech bubble","🗨":"left speech bubble","🗯":"right anger bubble","💭":"thought balloon","💤":"ZZZ","👋":"waving hand","🤚":"raised back of hand","🖐":"hand with fingers splayed","✋":"raised hand","🖖":"vulcan salute","🫱":"rightwards hand","🫲":"leftwards hand","🫳":"palm down hand","🫴":"palm up hand","🫷":"leftwards pushing hand","🫸":"rightwards pushing hand","👌":"OK hand","🤌":"pinched fingers","🤏":"pinching hand","✌":"victory hand","🤞":"crossed fingers","🫰":"hand with index finger and thumb crossed","🤟":"love-you gesture","🤘":"sign of the horns","🤙":"call me hand","👈":"backhand index pointing left","👉":"backhand index pointing right","👆":"backhand index pointing up","🖕":"middle finger","👇":"backhand index pointing down","☝":"index pointing up","🫵":"index pointing at the viewer","👍":"thumbs up","👎":"thumbs down","✊":"raised fist","👊":"oncoming fist","🤛":"left-facing fist","🤜":"right-facing fist","👏":"clapping hands","🙌":"raising hands","🫶":"heart hands","👐":"open hands","🤲":"palms up together","🤝":"handshake","🙏":"folded hands","✍":"writing hand","💅":"nail polish","🤳":"selfie","💪":"flexed biceps","🦾":"mechanical arm","🦿":"mechanical leg","🦵":"leg","🦶":"foot","👂":"ear","🦻":"ear with hearing aid","👃":"nose","🧠":"brain","🫀":"anatomical heart","🫁":"lungs","🦷":"tooth","🦴":"bone","👀":"eyes","👁":"eye","👅":"tongue","👄":"mouth","🫦":"biting lip","👶":"baby","🧒":"child","👦":"boy","👧":"girl","🧑":"person","👱":"person: blond hair","👨":"man","🧔":"person: beard","🧔‍♂":"man: beard","🧔‍♀":"woman: beard","👨‍🦰":"man: red hair","👨‍🦱":"man: curly hair","👨‍🦳":"man: white hair","👨‍🦲":"man: bald","👩":"woman","👩‍🦰":"woman: red hair","🧑‍🦰":"person: red hair","👩‍🦱":"woman: curly hair","🧑‍🦱":"person: curly hair","👩‍🦳":"woman: white hair","🧑‍🦳":"person: white hair","👩‍🦲":"woman: bald","🧑‍🦲":"person: bald","👱‍♀":"woman: blond hair","👱‍♂":"man: blond hair","🧓":"older person","👴":"old man","👵":"old woman","🙍":"person frowning","🙍‍♂":"man frowning","🙍‍♀":"woman frowning","🙎":"person pouting","🙎‍♂":"man pouting","🙎‍♀":"woman pouting","🙅":"person gesturing NO","🙅‍♂":"man gesturing NO","🙅‍♀":"woman gesturing NO","🙆":"person gesturing OK","🙆‍♂":"man gesturing OK","🙆‍♀":"woman gesturing OK","💁":"person tipping hand","💁‍♂":"man tipping hand","💁‍♀":"woman tipping hand","🙋":"person raising hand","🙋‍♂":"man raising hand","🙋‍♀":"woman raising hand","🧏":"deaf person","🧏‍♂":"deaf man","🧏‍♀":"deaf woman","🙇":"person bowing","🙇‍♂":"man bowing","🙇‍♀":"woman bowing","🤦":"person facepalming","🤦‍♂":"man facepalming","🤦‍♀":"woman facepalming","🤷":"person shrugging","🤷‍♂":"man shrugging","🤷‍♀":"woman shrugging","🧑‍⚕":"health worker","👨‍⚕":"man health worker","👩‍⚕":"woman health worker","🧑‍🎓":"student","👨‍🎓":"man student","👩‍🎓":"woman student","🧑‍🏫":"teacher","👨‍🏫":"man teacher","👩‍🏫":"woman teacher","🧑‍⚖":"judge","👨‍⚖":"man judge","👩‍⚖":"woman judge","🧑‍🌾":"farmer","👨‍🌾":"man farmer","👩‍🌾":"woman farmer","🧑‍🍳":"cook","👨‍🍳":"man cook","👩‍🍳":"woman cook","🧑‍🔧":"mechanic","👨‍🔧":"man mechanic","👩‍🔧":"woman mechanic","🧑‍🏭":"factory worker","👨‍🏭":"man factory worker","👩‍🏭":"woman factory worker","🧑‍💼":"office worker","👨‍💼":"man office worker","👩‍💼":"woman office worker","🧑‍🔬":"scientist","👨‍🔬":"man scientist","👩‍🔬":"woman scientist","🧑‍💻":"technologist","👨‍💻":"man technologist","👩‍💻":"woman technologist","🧑‍🎤":"singer","👨‍🎤":"man singer","👩‍🎤":"woman singer","🧑‍🎨":"artist","👨‍🎨":"man artist","👩‍🎨":"woman artist","🧑‍✈":"pilot","👨‍✈":"man pilot","👩‍✈":"woman pilot","🧑‍🚀":"astronaut","👨‍🚀":"man astronaut","👩‍🚀":"woman astronaut","🧑‍🚒":"firefighter","👨‍🚒":"man firefighter","👩‍🚒":"woman firefighter","👮":"police officer","👮‍♂":"man police officer","👮‍♀":"woman police officer","🕵":"detective","🕵‍♂":"man detective","🕵‍♀":"woman detective","💂":"guard","💂‍♂":"man guard","💂‍♀":"woman guard","🥷":"ninja","👷":"construction worker","👷‍♂":"man construction worker","👷‍♀":"woman construction worker","🫅":"person with crown","🤴":"prince","👸":"princess","👳":"person wearing turban","👳‍♂":"man wearing turban","👳‍♀":"woman wearing turban","👲":"person with skullcap","🧕":"woman with headscarf","🤵":"person in tuxedo","🤵‍♂":"man in tuxedo","🤵‍♀":"woman in tuxedo","👰":"person with veil","👰‍♂":"man with veil","👰‍♀":"woman with veil","🤰":"pregnant woman","🫃":"pregnant man","🫄":"pregnant person","🤱":"breast-feeding","👩‍🍼":"woman feeding baby","👨‍🍼":"man feeding baby","🧑‍🍼":"person feeding baby","👼":"baby angel","🎅":"Santa Claus","🤶":"Mrs. Claus","🧑‍🎄":"mx claus","🦸":"superhero","🦸‍♂":"man superhero","🦸‍♀":"woman superhero","🦹":"supervillain","🦹‍♂":"man supervillain","🦹‍♀":"woman supervillain","🧙":"mage","🧙‍♂":"man mage","🧙‍♀":"woman mage","🧚":"fairy","🧚‍♂":"man fairy","🧚‍♀":"woman fairy","🧛":"vampire","🧛‍♂":"man vampire","🧛‍♀":"woman vampire","🧜":"merperson","🧜‍♂":"merman","🧜‍♀":"mermaid","🧝":"elf","🧝‍♂":"man elf","🧝‍♀":"woman elf","🧞":"genie","🧞‍♂":"man genie","🧞‍♀":"woman genie","🧟":"zombie","🧟‍♂":"man zombie","🧟‍♀":"woman zombie","🧌":"troll","💆":"person getting massage","💆‍♂":"man getting massage","💆‍♀":"woman getting massage","💇":"person getting haircut","💇‍♂":"man getting haircut","💇‍♀":"woman getting haircut","🚶":"person walking","🚶‍♂":"man walking","🚶‍♀":"woman walking","🧍":"person standing","🧍‍♂":"man standing","🧍‍♀":"woman standing","🧎":"person kneeling","🧎‍♂":"man kneeling","🧎‍♀":"woman kneeling","🧑‍🦯":"person with white cane","👨‍🦯":"man with white cane","👩‍🦯":"woman with white cane","🧑‍🦼":"person in motorized wheelchair","👨‍🦼":"man in motorized wheelchair","👩‍🦼":"woman in motorized wheelchair","🧑‍🦽":"person in manual wheelchair","👨‍🦽":"man in manual wheelchair","👩‍🦽":"woman in manual wheelchair","🏃":"person running","🏃‍♂":"man running","🏃‍♀":"woman running","💃":"woman dancing","🕺":"man dancing","🕴":"person in suit levitating","👯":"people with bunny ears","👯‍♂":"men with bunny ears","👯‍♀":"women with bunny ears","🧖":"person in steamy room","🧖‍♂":"man in steamy room","🧖‍♀":"woman in steamy room","🧗":"person climbing","🧗‍♂":"man climbing","🧗‍♀":"woman climbing","🤺":"person fencing","🏇":"horse racing","⛷":"skier","🏂":"snowboarder","🏌":"person golfing","🏌‍♂":"man golfing","🏌‍♀":"woman golfing","🏄":"person surfing","🏄‍♂":"man surfing","🏄‍♀":"woman surfing","🚣":"person rowing boat","🚣‍♂":"man rowing boat","🚣‍♀":"woman rowing boat","🏊":"person swimming","🏊‍♂":"man swimming","🏊‍♀":"woman swimming","⛹":"person bouncing ball","⛹‍♂":"man bouncing ball","⛹‍♀":"woman bouncing ball","🏋":"person lifting weights","🏋‍♂":"man lifting weights","🏋‍♀":"woman lifting weights","🚴":"person biking","🚴‍♂":"man biking","🚴‍♀":"woman biking","🚵":"person mountain biking","🚵‍♂":"man mountain biking","🚵‍♀":"woman mountain biking","🤸":"person cartwheeling","🤸‍♂":"man cartwheeling","🤸‍♀":"woman cartwheeling","🤼":"people wrestling","🤼‍♂":"men wrestling","🤼‍♀":"women wrestling","🤽":"person playing water polo","🤽‍♂":"man playing water polo","🤽‍♀":"woman playing water polo","🤾":"person playing handball","🤾‍♂":"man playing handball","🤾‍♀":"woman playing handball","🤹":"person juggling","🤹‍♂":"man juggling","🤹‍♀":"woman juggling","🧘":"person in lotus position","🧘‍♂":"man in lotus position","🧘‍♀":"woman in lotus position","🛀":"person taking bath","🛌":"person in bed","🧑‍🤝‍🧑":"people holding hands","👭":"women holding hands","👫":"woman and man holding hands","👬":"men holding hands","💏":"kiss","👩‍❤‍💋‍👨":"kiss: woman, man","👨‍❤‍💋‍👨":"kiss: man, man","👩‍❤‍💋‍👩":"kiss: woman, woman","💑":"couple with heart","👩‍❤‍👨":"couple with heart: woman, man","👨‍❤‍👨":"couple with heart: man, man","👩‍❤‍👩":"couple with heart: woman, woman","👪":"family","👨‍👩‍👦":"family: man, woman, boy","👨‍👩‍👧":"family: man, woman, girl","👨‍👩‍👧‍👦":"family: man, woman, girl, boy","👨‍👩‍👦‍👦":"family: man, woman, boy, boy","👨‍👩‍👧‍👧":"family: man, woman, girl, girl","👨‍👨‍👦":"family: man, man, boy","👨‍👨‍👧":"family: man, man, girl","👨‍👨‍👧‍👦":"family: man, man, girl, boy","👨‍👨‍👦‍👦":"family: man, man, boy, boy","👨‍👨‍👧‍👧":"family: man, man, girl, girl","👩‍👩‍👦":"family: woman, woman, boy","👩‍👩‍👧":"family: woman, woman, girl","👩‍👩‍👧‍👦":"family: woman, woman, girl, boy","👩‍👩‍👦‍👦":"family: woman, woman, boy, boy","👩‍👩‍👧‍👧":"family: woman, woman, girl, girl","👨‍👦":"family: man, boy","👨‍👦‍👦":"family: man, boy, boy","👨‍👧":"family: man, girl","👨‍👧‍👦":"family: man, girl, boy","👨‍👧‍👧":"family: man, girl, girl","👩‍👦":"family: woman, boy","👩‍👦‍👦":"family: woman, boy, boy","👩‍👧":"family: woman, girl","👩‍👧‍👦":"family: woman, girl, boy","👩‍👧‍👧":"family: woman, girl, girl","🗣":"speaking head","👤":"bust in silhouette","👥":"busts in silhouette","🫂":"people hugging","👣":"footprints","🐵":"monkey face","🐒":"monkey","🦍":"gorilla","🦧":"orangutan","🐶":"dog face","🐕":"dog","🦮":"guide dog","🐕‍🦺":"service dog","🐩":"poodle","🐺":"wolf","🦊":"fox","🦝":"raccoon","🐱":"cat face","🐈":"cat","🐈‍⬛":"black cat","🦁":"lion","🐯":"tiger face","🐅":"tiger","🐆":"leopard","🐴":"horse face","🫎":"moose","🫏":"donkey","🐎":"horse","🦄":"unicorn","🦓":"zebra","🦌":"deer","🦬":"bison","🐮":"cow face","🐂":"ox","🐃":"water buffalo","🐄":"cow","🐷":"pig face","🐖":"pig","🐗":"boar","🐽":"pig nose","🐏":"ram","🐑":"ewe","🐐":"goat","🐪":"camel","🐫":"two-hump camel","🦙":"llama","🦒":"giraffe","🐘":"elephant","🦣":"mammoth","🦏":"rhinoceros","🦛":"hippopotamus","🐭":"mouse face","🐁":"mouse","🐀":"rat","🐹":"hamster","🐰":"rabbit face","🐇":"rabbit","🐿":"chipmunk","🦫":"beaver","🦔":"hedgehog","🦇":"bat","🐻":"bear","🐻‍❄":"polar bear","🐨":"koala","🐼":"panda","🦥":"sloth","🦦":"otter","🦨":"skunk","🦘":"kangaroo","🦡":"badger","🐾":"paw prints","🦃":"turkey","🐔":"chicken","🐓":"rooster","🐣":"hatching chick","🐤":"baby chick","🐥":"front-facing baby chick","🐦":"bird","🐧":"penguin","🕊":"dove","🦅":"eagle","🦆":"duck","🦢":"swan","🦉":"owl","🦤":"dodo","🪶":"feather","🦩":"flamingo","🦚":"peacock","🦜":"parrot","🪽":"wing","🐦‍⬛":"black bird","🪿":"goose","🐸":"frog","🐊":"crocodile","🐢":"turtle","🦎":"lizard","🐍":"snake","🐲":"dragon face","🐉":"dragon","🦕":"sauropod","🦖":"T-Rex","🐳":"spouting whale","🐋":"whale","🐬":"dolphin","🦭":"seal","🐟":"fish","🐠":"tropical fish","🐡":"blowfish","🦈":"shark","🐙":"octopus","🐚":"spiral shell","🪸":"coral","🪼":"jellyfish","🐌":"snail","🦋":"butterfly","🐛":"bug","🐜":"ant","🐝":"honeybee","🪲":"beetle","🐞":"lady beetle","🦗":"cricket","🪳":"cockroach","🕷":"spider","🕸":"spider web","🦂":"scorpion","🦟":"mosquito","🪰":"fly","🪱":"worm","🦠":"microbe","💐":"bouquet","🌸":"cherry blossom","💮":"white flower","🪷":"lotus","🏵":"rosette","🌹":"rose","🥀":"wilted flower","🌺":"hibiscus","🌻":"sunflower","🌼":"blossom","🌷":"tulip","🪻":"hyacinth","🌱":"seedling","🪴":"potted plant","🌲":"evergreen tree","🌳":"deciduous tree","🌴":"palm tree","🌵":"cactus","🌾":"sheaf of rice","🌿":"herb","☘":"shamrock","🍀":"four leaf clover","🍁":"maple leaf","🍂":"fallen leaf","🍃":"leaf fluttering in wind","🪹":"empty nest","🪺":"nest with eggs","🍄":"mushroom","🍇":"grapes","🍈":"melon","🍉":"watermelon","🍊":"tangerine","🍋":"lemon","🍌":"banana","🍍":"pineapple","🥭":"mango","🍎":"red apple","🍏":"green apple","🍐":"pear","🍑":"peach","🍒":"cherries","🍓":"strawberry","🫐":"blueberries","🥝":"kiwi fruit","🍅":"tomato","🫒":"olive","🥥":"coconut","🥑":"avocado","🍆":"eggplant","🥔":"potato","🥕":"carrot","🌽":"ear of corn","🌶":"hot pepper","🫑":"bell pepper","🥒":"cucumber","🥬":"leafy green","🥦":"broccoli","🧄":"garlic","🧅":"onion","🥜":"peanuts","🫘":"beans","🌰":"chestnut","🫚":"ginger root","🫛":"pea pod","🍞":"bread","🥐":"croissant","🥖":"baguette bread","🫓":"flatbread","🥨":"pretzel","🥯":"bagel","🥞":"pancakes","🧇":"waffle","🧀":"cheese wedge","🍖":"meat on bone","🍗":"poultry leg","🥩":"cut of meat","🥓":"bacon","🍔":"hamburger","🍟":"french fries","🍕":"pizza","🌭":"hot dog","🥪":"sandwich","🌮":"taco","🌯":"burrito","🫔":"tamale","🥙":"stuffed flatbread","🧆":"falafel","🥚":"egg","🍳":"cooking","🥘":"shallow pan of food","🍲":"pot of food","🫕":"fondue","🥣":"bowl with spoon","🥗":"green salad","🍿":"popcorn","🧈":"butter","🧂":"salt","🥫":"canned food","🍱":"bento box","🍘":"rice cracker","🍙":"rice ball","🍚":"cooked rice","🍛":"curry rice","🍜":"steaming bowl","🍝":"spaghetti","🍠":"roasted sweet potato","🍢":"oden","🍣":"sushi","🍤":"fried shrimp","🍥":"fish cake with swirl","🥮":"moon cake","🍡":"dango","🥟":"dumpling","🥠":"fortune cookie","🥡":"takeout box","🦀":"crab","🦞":"lobster","🦐":"shrimp","🦑":"squid","🦪":"oyster","🍦":"soft ice cream","🍧":"shaved ice","🍨":"ice cream","🍩":"doughnut","🍪":"cookie","🎂":"birthday cake","🍰":"shortcake","🧁":"cupcake","🥧":"pie","🍫":"chocolate bar","🍬":"candy","🍭":"lollipop","🍮":"custard","🍯":"honey pot","🍼":"baby bottle","🥛":"glass of milk","☕":"hot beverage","🫖":"teapot","🍵":"teacup without handle","🍶":"sake","🍾":"bottle with popping cork","🍷":"wine glass","🍸":"cocktail glass","🍹":"tropical drink","🍺":"beer mug","🍻":"clinking beer mugs","🥂":"clinking glasses","🥃":"tumbler glass","🫗":"pouring liquid","🥤":"cup with straw","🧋":"bubble tea","🧃":"beverage box","🧉":"mate","🧊":"ice","🥢":"chopsticks","🍽":"fork and knife with plate","🍴":"fork and knife","🥄":"spoon","🔪":"kitchen knife","🫙":"jar","🏺":"amphora","🌍":"globe showing Europe-Africa","🌎":"globe showing Americas","🌏":"globe showing Asia-Australia","🌐":"globe with meridians","🗺":"world map","🗾":"map of Japan","🧭":"compass","🏔":"snow-capped mountain","⛰":"mountain","🌋":"volcano","🗻":"mount fuji","🏕":"camping","🏖":"beach with umbrella","🏜":"desert","🏝":"desert island","🏞":"national park","🏟":"stadium","🏛":"classical building","🏗":"building construction","🧱":"brick","🪨":"rock","🪵":"wood","🛖":"hut","🏘":"houses","🏚":"derelict house","🏠":"house","🏡":"house with garden","🏢":"office building","🏣":"Japanese post office","🏤":"post office","🏥":"hospital","🏦":"bank","🏨":"hotel","🏩":"love hotel","🏪":"convenience store","🏫":"school","🏬":"department store","🏭":"factory","🏯":"Japanese castle","🏰":"castle","💒":"wedding","🗼":"Tokyo tower","🗽":"Statue of Liberty","⛪":"church","🕌":"mosque","🛕":"hindu temple","🕍":"synagogue","⛩":"shinto shrine","🕋":"kaaba","⛲":"fountain","⛺":"tent","🌁":"foggy","🌃":"night with stars","🏙":"cityscape","🌄":"sunrise over mountains","🌅":"sunrise","🌆":"cityscape at dusk","🌇":"sunset","🌉":"bridge at night","♨":"hot springs","🎠":"carousel horse","🛝":"playground slide","🎡":"ferris wheel","🎢":"roller coaster","💈":"barber pole","🎪":"circus tent","🚂":"locomotive","🚃":"railway car","🚄":"high-speed train","🚅":"bullet train","🚆":"train","🚇":"metro","🚈":"light rail","🚉":"station","🚊":"tram","🚝":"monorail","🚞":"mountain railway","🚋":"tram car","🚌":"bus","🚍":"oncoming bus","🚎":"trolleybus","🚐":"minibus","🚑":"ambulance","🚒":"fire engine","🚓":"police car","🚔":"oncoming police car","🚕":"taxi","🚖":"oncoming taxi","🚗":"automobile","🚘":"oncoming automobile","🚙":"sport utility vehicle","🛻":"pickup truck","🚚":"delivery truck","🚛":"articulated lorry","🚜":"tractor","🏎":"racing car","🏍":"motorcycle","🛵":"motor scooter","🦽":"manual wheelchair","🦼":"motorized wheelchair","🛺":"auto rickshaw","🚲":"bicycle","🛴":"kick scooter","🛹":"skateboard","🛼":"roller skate","🚏":"bus stop","🛣":"motorway","🛤":"railway track","🛢":"oil drum","⛽":"fuel pump","🛞":"wheel","🚨":"police car light","🚥":"horizontal traffic light","🚦":"vertical traffic light","🛑":"stop sign","🚧":"construction","⚓":"anchor","🛟":"ring buoy","⛵":"sailboat","🛶":"canoe","🚤":"speedboat","🛳":"passenger ship","⛴":"ferry","🛥":"motor boat","🚢":"ship","✈":"airplane","🛩":"small airplane","🛫":"airplane departure","🛬":"airplane arrival","🪂":"parachute","💺":"seat","🚁":"helicopter","🚟":"suspension railway","🚠":"mountain cableway","🚡":"aerial tramway","🛰":"satellite","🚀":"rocket","🛸":"flying saucer","🛎":"bellhop bell","🧳":"luggage","⌛":"hourglass done","⏳":"hourglass not done","⌚":"watch","⏰":"alarm clock","⏱":"stopwatch","⏲":"timer clock","🕰":"mantelpiece clock","🕛":"twelve o’clock","🕧":"twelve-thirty","🕐":"one o’clock","🕜":"one-thirty","🕑":"two o’clock","🕝":"two-thirty","🕒":"three o’clock","🕞":"three-thirty","🕓":"four o’clock","🕟":"four-thirty","🕔":"five o’clock","🕠":"five-thirty","🕕":"six o’clock","🕡":"six-thirty","🕖":"seven o’clock","🕢":"seven-thirty","🕗":"eight o’clock","🕣":"eight-thirty","🕘":"nine o’clock","🕤":"nine-thirty","🕙":"ten o’clock","🕥":"ten-thirty","🕚":"eleven o’clock","🕦":"eleven-thirty","🌑":"new moon","🌒":"waxing crescent moon","🌓":"first quarter moon","🌔":"waxing gibbous moon","🌕":"full moon","🌖":"waning gibbous moon","🌗":"last quarter moon","🌘":"waning crescent moon","🌙":"crescent moon","🌚":"new moon face","🌛":"first quarter moon face","🌜":"last quarter moon face","🌡":"thermometer","☀":"sun","🌝":"full moon face","🌞":"sun with face","🪐":"ringed planet","⭐":"star","🌟":"glowing star","🌠":"shooting star","🌌":"milky way","☁":"cloud","⛅":"sun behind cloud","⛈":"cloud with lightning and rain","🌤":"sun behind small cloud","🌥":"sun behind large cloud","🌦":"sun behind rain cloud","🌧":"cloud with rain","🌨":"cloud with snow","🌩":"cloud with lightning","🌪":"tornado","🌫":"fog","🌬":"wind face","🌀":"cyclone","🌈":"rainbow","🌂":"closed umbrella","☂":"umbrella","☔":"umbrella with rain drops","⛱":"umbrella on ground","⚡":"high voltage","❄":"snowflake","☃":"snowman","⛄":"snowman without snow","☄":"comet","🔥":"fire","💧":"droplet","🌊":"water wave","🎃":"jack-o-lantern","🎄":"Christmas tree","🎆":"fireworks","🎇":"sparkler","🧨":"firecracker","✨":"sparkles","🎈":"balloon","🎉":"party popper","🎊":"confetti ball","🎋":"tanabata tree","🎍":"pine decoration","🎎":"Japanese dolls","🎏":"carp streamer","🎐":"wind chime","🎑":"moon viewing ceremony","🧧":"red envelope","🎀":"ribbon","🎁":"wrapped gift","🎗":"reminder ribbon","🎟":"admission tickets","🎫":"ticket","🎖":"military medal","🏆":"trophy","🏅":"sports medal","🥇":"1st place medal","🥈":"2nd place medal","🥉":"3rd place medal","⚽":"soccer ball","⚾":"baseball","🥎":"softball","🏀":"basketball","🏐":"volleyball","🏈":"american football","🏉":"rugby football","🎾":"tennis","🥏":"flying disc","🎳":"bowling","🏏":"cricket game","🏑":"field hockey","🏒":"ice hockey","🥍":"lacrosse","🏓":"ping pong","🏸":"badminton","🥊":"boxing glove","🥋":"martial arts uniform","🥅":"goal net","⛳":"flag in hole","⛸":"ice skate","🎣":"fishing pole","🤿":"diving mask","🎽":"running shirt","🎿":"skis","🛷":"sled","🥌":"curling stone","🎯":"bullseye","🪀":"yo-yo","🪁":"kite","🔫":"water pistol","🎱":"pool 8 ball","🔮":"crystal ball","🪄":"magic wand","🎮":"video game","🕹":"joystick","🎰":"slot machine","🎲":"game die","🧩":"puzzle piece","🧸":"teddy bear","🪅":"piñata","🪩":"mirror ball","🪆":"nesting dolls","♠":"spade suit","♥":"heart suit","♦":"diamond suit","♣":"club suit","♟":"chess pawn","🃏":"joker","🀄":"mahjong red dragon","🎴":"flower playing cards","🎭":"performing arts","🖼":"framed picture","🎨":"artist palette","🧵":"thread","🪡":"sewing needle","🧶":"yarn","🪢":"knot","👓":"glasses","🕶":"sunglasses","🥽":"goggles","🥼":"lab coat","🦺":"safety vest","👔":"necktie","👕":"t-shirt","👖":"jeans","🧣":"scarf","🧤":"gloves","🧥":"coat","🧦":"socks","👗":"dress","👘":"kimono","🥻":"sari","🩱":"one-piece swimsuit","🩲":"briefs","🩳":"shorts","👙":"bikini","👚":"woman’s clothes","🪭":"folding hand fan","👛":"purse","👜":"handbag","👝":"clutch bag","🛍":"shopping bags","🎒":"backpack","🩴":"thong sandal","👞":"man’s shoe","👟":"running shoe","🥾":"hiking boot","🥿":"flat shoe","👠":"high-heeled shoe","👡":"woman’s sandal","🩰":"ballet shoes","👢":"woman’s boot","🪮":"hair pick","👑":"crown","👒":"woman’s hat","🎩":"top hat","🎓":"graduation cap","🧢":"billed cap","🪖":"military helmet","⛑":"rescue worker’s helmet","📿":"prayer beads","💄":"lipstick","💍":"ring","💎":"gem stone","🔇":"muted speaker","🔈":"speaker low volume","🔉":"speaker medium volume","🔊":"speaker high volume","📢":"loudspeaker","📣":"megaphone","📯":"postal horn","🔔":"bell","🔕":"bell with slash","🎼":"musical score","🎵":"musical note","🎶":"musical notes","🎙":"studio microphone","🎚":"level slider","🎛":"control knobs","🎤":"microphone","🎧":"headphone","📻":"radio","🎷":"saxophone","🪗":"accordion","🎸":"guitar","🎹":"musical keyboard","🎺":"trumpet","🎻":"violin","🪕":"banjo","🥁":"drum","🪘":"long drum","🪇":"maracas","🪈":"flute","📱":"mobile phone","📲":"mobile phone with arrow","☎":"telephone","📞":"telephone receiver","📟":"pager","📠":"fax machine","🔋":"battery","🪫":"low battery","🔌":"electric plug","💻":"laptop","🖥":"desktop computer","🖨":"printer","⌨":"keyboard","🖱":"computer mouse","🖲":"trackball","💽":"computer disk","💾":"floppy disk","💿":"optical disk","📀":"dvd","🧮":"abacus","🎥":"movie camera","🎞":"film frames","📽":"film projector","🎬":"clapper board","📺":"television","📷":"camera","📸":"camera with flash","📹":"video camera","📼":"videocassette","🔍":"magnifying glass tilted left","🔎":"magnifying glass tilted right","🕯":"candle","💡":"light bulb","🔦":"flashlight","🏮":"red paper lantern","🪔":"diya lamp","📔":"notebook with decorative cover","📕":"closed book","📖":"open book","📗":"green book","📘":"blue book","📙":"orange book","📚":"books","📓":"notebook","📒":"ledger","📃":"page with curl","📜":"scroll","📄":"page facing up","📰":"newspaper","🗞":"rolled-up newspaper","📑":"bookmark tabs","🔖":"bookmark","🏷":"label","💰":"money bag","🪙":"coin","💴":"yen banknote","💵":"dollar banknote","💶":"euro banknote","💷":"pound banknote","💸":"money with wings","💳":"credit card","🧾":"receipt","💹":"chart increasing with yen","✉":"envelope","📧":"e-mail","📨":"incoming envelope","📩":"envelope with arrow","📤":"outbox tray","📥":"inbox tray","📦":"package","📫":"closed mailbox with raised flag","📪":"closed mailbox with lowered flag","📬":"open mailbox with raised flag","📭":"open mailbox with lowered flag","📮":"postbox","🗳":"ballot box with ballot","✏":"pencil","✒":"black nib","🖋":"fountain pen","🖊":"pen","🖌":"paintbrush","🖍":"crayon","📝":"memo","💼":"briefcase","📁":"file folder","📂":"open file folder","🗂":"card index dividers","📅":"calendar","📆":"tear-off calendar","🗒":"spiral notepad","🗓":"spiral calendar","📇":"card index","📈":"chart increasing","📉":"chart decreasing","📊":"bar chart","📋":"clipboard","📌":"pushpin","📍":"round pushpin","📎":"paperclip","🖇":"linked paperclips","📏":"straight ruler","📐":"triangular ruler","✂":"scissors","🗃":"card file box","🗄":"file cabinet","🗑":"wastebasket","🔒":"locked","🔓":"unlocked","🔏":"locked with pen","🔐":"locked with key","🔑":"key","🗝":"old key","🔨":"hammer","🪓":"axe","⛏":"pick","⚒":"hammer and pick","🛠":"hammer and wrench","🗡":"dagger","⚔":"crossed swords","💣":"bomb","🪃":"boomerang","🏹":"bow and arrow","🛡":"shield","🪚":"carpentry saw","🔧":"wrench","🪛":"screwdriver","🔩":"nut and bolt","⚙":"gear","🗜":"clamp","⚖":"balance scale","🦯":"white cane","🔗":"link","⛓":"chains","🪝":"hook","🧰":"toolbox","🧲":"magnet","🪜":"ladder","⚗":"alembic","🧪":"test tube","🧫":"petri dish","🧬":"dna","🔬":"microscope","🔭":"telescope","📡":"satellite antenna","💉":"syringe","🩸":"drop of blood","💊":"pill","🩹":"adhesive bandage","🩼":"crutch","🩺":"stethoscope","🩻":"x-ray","🚪":"door","🛗":"elevator","🪞":"mirror","🪟":"window","🛏":"bed","🛋":"couch and lamp","🪑":"chair","🚽":"toilet","🪠":"plunger","🚿":"shower","🛁":"bathtub","🪤":"mouse trap","🪒":"razor","🧴":"lotion bottle","🧷":"safety pin","🧹":"broom","🧺":"basket","🧻":"roll of paper","🪣":"bucket","🧼":"soap","🫧":"bubbles","🪥":"toothbrush","🧽":"sponge","🧯":"fire extinguisher","🛒":"shopping cart","🚬":"cigarette","⚰":"coffin","🪦":"headstone","⚱":"funeral urn","🧿":"nazar amulet","🪬":"hamsa","🗿":"moai","🪧":"placard","🪪":"identification card","🏧":"ATM sign","🚮":"litter in bin sign","🚰":"potable water","♿":"wheelchair symbol","🚹":"men’s room","🚺":"women’s room","🚻":"restroom","🚼":"baby symbol","🚾":"water closet","🛂":"passport control","🛃":"customs","🛄":"baggage claim","🛅":"left luggage","⚠":"warning","🚸":"children crossing","⛔":"no entry","🚫":"prohibited","🚳":"no bicycles","🚭":"no smoking","🚯":"no littering","🚱":"non-potable water","🚷":"no pedestrians","📵":"no mobile phones","🔞":"no one under eighteen","☢":"radioactive","☣":"biohazard","⬆":"up arrow","↗":"up-right arrow","➡":"right arrow","↘":"down-right arrow","⬇":"down arrow","↙":"down-left arrow","⬅":"left arrow","↖":"up-left arrow","↕":"up-down arrow","↔":"left-right arrow","↩":"right arrow curving left","↪":"left arrow curving right","⤴":"right arrow curving up","⤵":"right arrow curving down","🔃":"clockwise vertical arrows","🔄":"counterclockwise arrows button","🔙":"BACK arrow","🔚":"END arrow","🔛":"ON! arrow","🔜":"SOON arrow","🔝":"TOP arrow","🛐":"place of worship","⚛":"atom symbol","🕉":"om","✡":"star of David","☸":"wheel of dharma","☯":"yin yang","✝":"latin cross","☦":"orthodox cross","☪":"star and crescent","☮":"peace symbol","🕎":"menorah","🔯":"dotted six-pointed star","🪯":"khanda","♈":"Aries","♉":"Taurus","♊":"Gemini","♋":"Cancer","♌":"Leo","♍":"Virgo","♎":"Libra","♏":"Scorpio","♐":"Sagittarius","♑":"Capricorn","♒":"Aquarius","♓":"Pisces","⛎":"Ophiuchus","🔀":"shuffle tracks button","🔁":"repeat button","🔂":"repeat single button","▶":"play button","⏩":"fast-forward button","⏭":"next track button","⏯":"play or pause button","◀":"reverse button","⏪":"fast reverse button","⏮":"last track button","🔼":"upwards button","⏫":"fast up button","🔽":"downwards button","⏬":"fast down button","⏸":"pause button","⏹":"stop button","⏺":"record button","⏏":"eject button","🎦":"cinema","🔅":"dim button","🔆":"bright button","📶":"antenna bars","🛜":"wireless","📳":"vibration mode","📴":"mobile phone off","♀":"female sign","♂":"male sign","⚧":"transgender symbol","✖":"multiply","➕":"plus","➖":"minus","➗":"divide","🟰":"heavy equals sign","♾":"infinity","‼":"double exclamation mark","⁉":"exclamation question mark","❓":"red question mark","❔":"white question mark","❕":"white exclamation mark","❗":"red exclamation mark","〰":"wavy dash","💱":"currency exchange","💲":"heavy dollar sign","⚕":"medical symbol","♻":"recycling symbol","⚜":"fleur-de-lis","🔱":"trident emblem","📛":"name badge","🔰":"Japanese symbol for beginner","⭕":"hollow red circle","✅":"check mark button","☑":"check box with check","✔":"check mark","❌":"cross mark","❎":"cross mark button","➰":"curly loop","➿":"double curly loop","〽":"part alternation mark","✳":"eight-spoked asterisk","✴":"eight-pointed star","❇":"sparkle","©":"copyright","®":"registered","™":"trade mark","#⃣":"keycap: #","*⃣":"keycap: *","0⃣":"keycap: 0","1⃣":"keycap: 1","2⃣":"keycap: 2","3⃣":"keycap: 3","4⃣":"keycap: 4","5⃣":"keycap: 5","6⃣":"keycap: 6","7⃣":"keycap: 7","8⃣":"keycap: 8","9⃣":"keycap: 9","🔟":"keycap: 10","🔠":"input latin uppercase","🔡":"input latin lowercase","🔢":"input numbers","🔣":"input symbols","🔤":"input latin letters","🅰":"A button (blood type)","🆎":"AB button (blood type)","🅱":"B button (blood type)","🆑":"CL button","🆒":"COOL button","🆓":"FREE button","ℹ":"information","🆔":"ID button","Ⓜ":"circled M","🆕":"NEW button","🆖":"NG button","🅾":"O button (blood type)","🆗":"OK button","🅿":"P button","🆘":"SOS button","🆙":"UP! button","🆚":"VS button","🈁":"Japanese “here” button","🈂":"Japanese “service charge” button","🈷":"Japanese “monthly amount” button","🈶":"Japanese “not free of charge” button","🈯":"Japanese “reserved” button","🉐":"Japanese “bargain” button","🈹":"Japanese “discount” button","🈚":"Japanese “free of charge” button","🈲":"Japanese “prohibited” button","🉑":"Japanese “acceptable” button","🈸":"Japanese “application” button","🈴":"Japanese “passing grade” button","🈳":"Japanese “vacancy” button","㊗":"Japanese “congratulations” button","㊙":"Japanese “secret” button","🈺":"Japanese “open for business” button","🈵":"Japanese “no vacancy” button","🔴":"red circle","🟠":"orange circle","🟡":"yellow circle","🟢":"green circle","🔵":"blue circle","🟣":"purple circle","🟤":"brown circle","⚫":"black circle","⚪":"white circle","🟥":"red square","🟧":"orange square","🟨":"yellow square","🟩":"green square","🟦":"blue square","🟪":"purple square","🟫":"brown square","⬛":"black large square","⬜":"white large square","◼":"black medium square","◻":"white medium square","◾":"black medium-small square","◽":"white medium-small square","▪":"black small square","▫":"white small square","🔶":"large orange diamond","🔷":"large blue diamond","🔸":"small orange diamond","🔹":"small blue diamond","🔺":"red triangle pointed up","🔻":"red triangle pointed down","💠":"diamond with a dot","🔘":"radio button","🔳":"white square button","🔲":"black square button","🏁":"chequered flag","🚩":"triangular flag","🎌":"crossed flags","🏴":"black flag","🏳":"white flag","🏳‍🌈":"rainbow flag","🏳‍⚧":"transgender flag","🏴‍☠":"pirate flag","🇦🇨":"flag: Ascension Island","🇦🇩":"flag: Andorra","🇦🇪":"flag: United Arab Emirates","🇦🇫":"flag: Afghanistan","🇦🇬":"flag: Antigua & Barbuda","🇦🇮":"flag: Anguilla","🇦🇱":"flag: Albania","🇦🇲":"flag: Armenia","🇦🇴":"flag: Angola","🇦🇶":"flag: Antarctica","🇦🇷":"flag: Argentina","🇦🇸":"flag: American Samoa","🇦🇹":"flag: Austria","🇦🇺":"flag: Australia","🇦🇼":"flag: Aruba","🇦🇽":"flag: Åland Islands","🇦🇿":"flag: Azerbaijan","🇧🇦":"flag: Bosnia & Herzegovina","🇧🇧":"flag: Barbados","🇧🇩":"flag: Bangladesh","🇧🇪":"flag: Belgium","🇧🇫":"flag: Burkina Faso","🇧🇬":"flag: Bulgaria","🇧🇭":"flag: Bahrain","🇧🇮":"flag: Burundi","🇧🇯":"flag: Benin","🇧🇱":"flag: St. Barthélemy","🇧🇲":"flag: Bermuda","🇧🇳":"flag: Brunei","🇧🇴":"flag: Bolivia","🇧🇶":"flag: Caribbean Netherlands","🇧🇷":"flag: Brazil","🇧🇸":"flag: Bahamas","🇧🇹":"flag: Bhutan","🇧🇻":"flag: Bouvet Island","🇧🇼":"flag: Botswana","🇧🇾":"flag: Belarus","🇧🇿":"flag: Belize","🇨🇦":"flag: Canada","🇨🇨":"flag: Cocos (Keeling) Islands","🇨🇩":"flag: Congo - Kinshasa","🇨🇫":"flag: Central African Republic","🇨🇬":"flag: Congo - Brazzaville","🇨🇭":"flag: Switzerland","🇨🇮":"flag: Côte d’Ivoire","🇨🇰":"flag: Cook Islands","🇨🇱":"flag: Chile","🇨🇲":"flag: Cameroon","🇨🇳":"flag: China","🇨🇴":"flag: Colombia","🇨🇵":"flag: Clipperton Island","🇨🇷":"flag: Costa Rica","🇨🇺":"flag: Cuba","🇨🇻":"flag: Cape Verde","🇨🇼":"flag: Curaçao","🇨🇽":"flag: Christmas Island","🇨🇾":"flag: Cyprus","🇨🇿":"flag: Czechia","🇩🇪":"flag: Germany","🇩🇬":"flag: Diego Garcia","🇩🇯":"flag: Djibouti","🇩🇰":"flag: Denmark","🇩🇲":"flag: Dominica","🇩🇴":"flag: Dominican Republic","🇩🇿":"flag: Algeria","🇪🇦":"flag: Ceuta & Melilla","🇪🇨":"flag: Ecuador","🇪🇪":"flag: Estonia","🇪🇬":"flag: Egypt","🇪🇭":"flag: Western Sahara","🇪🇷":"flag: Eritrea","🇪🇸":"flag: Spain","🇪🇹":"flag: Ethiopia","🇪🇺":"flag: European Union","🇫🇮":"flag: Finland","🇫🇯":"flag: Fiji","🇫🇰":"flag: Falkland Islands","🇫🇲":"flag: Micronesia","🇫🇴":"flag: Faroe Islands","🇫🇷":"flag: France","🇬🇦":"flag: Gabon","🇬🇧":"flag: United Kingdom","🇬🇩":"flag: Grenada","🇬🇪":"flag: Georgia","🇬🇫":"flag: French Guiana","🇬🇬":"flag: Guernsey","🇬🇭":"flag: Ghana","🇬🇮":"flag: Gibraltar","🇬🇱":"flag: Greenland","🇬🇲":"flag: Gambia","🇬🇳":"flag: Guinea","🇬🇵":"flag: Guadeloupe","🇬🇶":"flag: Equatorial Guinea","🇬🇷":"flag: Greece","🇬🇸":"flag: South Georgia & South Sandwich Islands","🇬🇹":"flag: Guatemala","🇬🇺":"flag: Guam","🇬🇼":"flag: Guinea-Bissau","🇬🇾":"flag: Guyana","🇭🇰":"flag: Hong Kong SAR China","🇭🇲":"flag: Heard & McDonald Islands","🇭🇳":"flag: Honduras","🇭🇷":"flag: Croatia","🇭🇹":"flag: Haiti","🇭🇺":"flag: Hungary","🇮🇨":"flag: Canary Islands","🇮🇩":"flag: Indonesia","🇮🇪":"flag: Ireland","🇮🇱":"flag: Israel","🇮🇲":"flag: Isle of Man","🇮🇳":"flag: India","🇮🇴":"flag: British Indian Ocean Territory","🇮🇶":"flag: Iraq","🇮🇷":"flag: Iran","🇮🇸":"flag: Iceland","🇮🇹":"flag: Italy","🇯🇪":"flag: Jersey","🇯🇲":"flag: Jamaica","🇯🇴":"flag: Jordan","🇯🇵":"flag: Japan","🇰🇪":"flag: Kenya","🇰🇬":"flag: Kyrgyzstan","🇰🇭":"flag: Cambodia","🇰🇮":"flag: Kiribati","🇰🇲":"flag: Comoros","🇰🇳":"flag: St. Kitts & Nevis","🇰🇵":"flag: North Korea","🇰🇷":"flag: South Korea","🇰🇼":"flag: Kuwait","🇰🇾":"flag: Cayman Islands","🇰🇿":"flag: Kazakhstan","🇱🇦":"flag: Laos","🇱🇧":"flag: Lebanon","🇱🇨":"flag: St. Lucia","🇱🇮":"flag: Liechtenstein","🇱🇰":"flag: Sri Lanka","🇱🇷":"flag: Liberia","🇱🇸":"flag: Lesotho","🇱🇹":"flag: Lithuania","🇱🇺":"flag: Luxembourg","🇱🇻":"flag: Latvia","🇱🇾":"flag: Libya","🇲🇦":"flag: Morocco","🇲🇨":"flag: Monaco","🇲🇩":"flag: Moldova","🇲🇪":"flag: Montenegro","🇲🇫":"flag: St. Martin","🇲🇬":"flag: Madagascar","🇲🇭":"flag: Marshall Islands","🇲🇰":"flag: North Macedonia","🇲🇱":"flag: Mali","🇲🇲":"flag: Myanmar (Burma)","🇲🇳":"flag: Mongolia","🇲🇴":"flag: Macao SAR China","🇲🇵":"flag: Northern Mariana Islands","🇲🇶":"flag: Martinique","🇲🇷":"flag: Mauritania","🇲🇸":"flag: Montserrat","🇲🇹":"flag: Malta","🇲🇺":"flag: Mauritius","🇲🇻":"flag: Maldives","🇲🇼":"flag: Malawi","🇲🇽":"flag: Mexico","🇲🇾":"flag: Malaysia","🇲🇿":"flag: Mozambique","🇳🇦":"flag: Namibia","🇳🇨":"flag: New Caledonia","🇳🇪":"flag: Niger","🇳🇫":"flag: Norfolk Island","🇳🇬":"flag: Nigeria","🇳🇮":"flag: Nicaragua","🇳🇱":"flag: Netherlands","🇳🇴":"flag: Norway","🇳🇵":"flag: Nepal","🇳🇷":"flag: Nauru","🇳🇺":"flag: Niue","🇳🇿":"flag: New Zealand","🇴🇲":"flag: Oman","🇵🇦":"flag: Panama","🇵🇪":"flag: Peru","🇵🇫":"flag: French Polynesia","🇵🇬":"flag: Papua New Guinea","🇵🇭":"flag: Philippines","🇵🇰":"flag: Pakistan","🇵🇱":"flag: Poland","🇵🇲":"flag: St. Pierre & Miquelon","🇵🇳":"flag: Pitcairn Islands","🇵🇷":"flag: Puerto Rico","🇵🇸":"flag: Palestinian Territories","🇵🇹":"flag: Portugal","🇵🇼":"flag: Palau","🇵🇾":"flag: Paraguay","🇶🇦":"flag: Qatar","🇷🇪":"flag: Réunion","🇷🇴":"flag: Romania","🇷🇸":"flag: Serbia","🇷🇺":"flag: Russia","🇷🇼":"flag: Rwanda","🇸🇦":"flag: Saudi Arabia","🇸🇧":"flag: Solomon Islands","🇸🇨":"flag: Seychelles","🇸🇩":"flag: Sudan","🇸🇪":"flag: Sweden","🇸🇬":"flag: Singapore","🇸🇭":"flag: St. Helena","🇸🇮":"flag: Slovenia","🇸🇯":"flag: Svalbard & Jan Mayen","🇸🇰":"flag: Slovakia","🇸🇱":"flag: Sierra Leone","🇸🇲":"flag: San Marino","🇸🇳":"flag: Senegal","🇸🇴":"flag: Somalia","🇸🇷":"flag: Suriname","🇸🇸":"flag: South Sudan","🇸🇹":"flag: São Tomé & Príncipe","🇸🇻":"flag: El Salvador","🇸🇽":"flag: Sint Maarten","🇸🇾":"flag: Syria","🇸🇿":"flag: Eswatini","🇹🇦":"flag: Tristan da Cunha","🇹🇨":"flag: Turks & Caicos Islands","🇹🇩":"flag: Chad","🇹🇫":"flag: French Southern Territories","🇹🇬":"flag: Togo","🇹🇭":"flag: Thailand","🇹🇯":"flag: Tajikistan","🇹🇰":"flag: Tokelau","🇹🇱":"flag: Timor-Leste","🇹🇲":"flag: Turkmenistan","🇹🇳":"flag: Tunisia","🇹🇴":"flag: Tonga","🇹🇷":"flag: Turkey","🇹🇹":"flag: Trinidad & Tobago","🇹🇻":"flag: Tuvalu","🇹🇼":"flag: Taiwan","🇹🇿":"flag: Tanzania","🇺🇦":"flag: Ukraine","🇺🇬":"flag: Uganda","🇺🇲":"flag: U.S. Outlying Islands","🇺🇳":"flag: United Nations","🇺🇸":"flag: United States","🇺🇾":"flag: Uruguay","🇺🇿":"flag: Uzbekistan","🇻🇦":"flag: Vatican City","🇻🇨":"flag: St. Vincent & Grenadines","🇻🇪":"flag: Venezuela","🇻🇬":"flag: British Virgin Islands","🇻🇮":"flag: U.S. Virgin Islands","🇻🇳":"flag: Vietnam","🇻🇺":"flag: Vanuatu","🇼🇫":"flag: Wallis & Futuna","🇼🇸":"flag: Samoa","🇽🇰":"flag: Kosovo","🇾🇪":"flag: Yemen","🇾🇹":"flag: Mayotte","🇿🇦":"flag: South Africa","🇿🇲":"flag: Zambia","🇿🇼":"flag: Zimbabwe","🏴󠁧󠁢󠁥󠁮󠁧󠁿":"flag: England","🏴󠁧󠁢󠁳󠁣󠁴󠁿":"flag: Scotland","🏴󠁧󠁢󠁷󠁬󠁳󠁿":"flag: Wales"}')
            , y = a(3577);
          const C = ["aria-label"];
          var x = (0,
          t.aZ)({
              name: "LinkPreviewToggle",
              props: {
                  link: {
                      type: Object,
                      required: !0
                  },
                  message: {
                      type: Object,
                      required: !0
                  }
              },
              emits: ["toggle-link-preview"],
              setup: (e,{emit: n})=>({
                  ariaLabel: (0,
                  t.Fl)((()=>e.link.shown ? "Collapse preview" : "Expand preview")),
                  onClick: ()=>{
                      e.link.shown = !e.link.shown,
                      n("toggle-link-preview", e.link, e.message)
                  }
              })
          })
            , S = a(3744)
            , D = (0,
          S.Z)(x, [["render", function(e, n, a, s, o, i) {
              return "loading" !== e.link.type ? ((0,
              t.wg)(),
              (0,
              t.iD)("button", {
                  key: 0,
                  class: (0,
                  y.C_)(["toggle-button", "toggle-preview", {
                      opened: e.link.shown
                  }]),
                  "aria-label": e.ariaLabel,
                  onClick: n[0] || (n[0] = (...n)=>e.onClick && e.onClick(...n))
              }, null, 10, C)) : (0,
              t.kq)("", !0)
          }
          ]]);
          const Z = {
              class: "preview-size"
          };
          var U = a(5785)
            , M = (0,
          t.aZ)({
              name: "LinkPreviewFileSize",
              props: {
                  size: {
                      type: Number,
                      required: !0
                  }
              },
              setup: e=>({
                  previewSize: (0,
                  U.Z)(e.size)
              })
          })
            , q = (0,
          S.Z)(M, [["render", function(e, n, a, s, o, i) {
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", Z, "(" + (0,
              y.zw)(e.previewSize) + ")", 1)
          }
          ]])
            , j = a(1406)
            , T = a(8833)
            , P = (0,
          t.aZ)({
              name: "InlineChannel",
              props: {
                  channel: String
              },
              setup: e=>({
                  openContextMenu: n=>{
                      T.Z.emit("contextmenu:inline-channel", {
                          event: n,
                          channel: e.channel
                      })
                  }
              })
          })
            , H = (0,
          S.Z)(P, [["render", function(e, n, a, s, o, i) {
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", {
                  class: "inline-channel",
                  dir: "auto",
                  role: "button",
                  tabindex: "0",
                  onClick: n[0] || (n[0] = (0,
                  j.iM)(((...n)=>e.openContextMenu && e.openContextMenu(...n)), ["prevent"])),
                  onContextmenu: n[1] || (n[1] = (0,
                  j.iM)(((...n)=>e.openContextMenu && e.openContextMenu(...n)), ["prevent"]))
              }, [(0,
              t.WI)(e.$slots, "default")], 32)
          }
          ]])
            , L = a(7652);
          const O = /[\u{1f3fb}-\u{1f3ff}]|\u{fe0f}/gu;
          var I = function(e, n, a) {
              const l = function(e) {
                  return function(e) {
                      const n = [];
                      let a, t, r, l, c, u, d, h, p, g, m = 0, w = 0;
                      const f = ()=>{
                          t = !1,
                          r = void 0,
                          l = void 0,
                          c = void 0,
                          u = void 0,
                          d = !1,
                          h = !1,
                          p = !1,
                          g = !1
                      }
                      ;
                      f();
                      const k = ()=>{
                          const a = e.slice(m, w).replace(i, " ");
                          if (a.length) {
                              const e = n.length ? n[n.length - 1].end : 0;
                              n.push({
                                  bold: t,
                                  textColor: r,
                                  bgColor: l,
                                  hexColor: c,
                                  hexBgColor: u,
                                  italic: d,
                                  underline: h,
                                  strikethrough: p,
                                  monospace: g,
                                  text: a,
                                  start: e,
                                  end: e + a.length
                              })
                          }
                          m = w + 1
                      }
                      ;
                      for (; w < e.length; ) {
                          switch (e[w]) {
                          case "":
                              k(),
                              f();
                              break;
                          case "":
                              k(),
                              t = !t;
                              break;
                          case "":
                              k(),
                              a = e.slice(w + 1).match(s),
                              a ? (r = Number(a[1]),
                              a[2] && (l = Number(a[2])),
                              w += a[0].length,
                              m = w + 1) : (r = void 0,
                              l = void 0);
                              break;
                          case "":
                              k(),
                              a = e.slice(w + 1).match(o),
                              a ? (c = a[1].toUpperCase(),
                              a[2] && (u = a[2].toUpperCase()),
                              w += a[0].length,
                              m = w + 1) : (c = void 0,
                              u = void 0);
                              break;
                          case "":
                              {
                                  k();
                                  const e = l;
                                  l = r,
                                  r = e;
                                  break
                              }
                          case "":
                              k(),
                              d = !d;
                              break;
                          case "":
                              k(),
                              h = !h;
                              break;
                          case "":
                              k(),
                              p = !p;
                              break;
                          case "":
                              k(),
                              g = !g
                          }
                          w += 1
                      }
                      return k(),
                      n
                  }(e).reduce(((e,n)=>{
                      if (e.length) {
                          const a = e[e.length - 1];
                          if (r.every((e=>n[e] === a[e])))
                              return a.text += n.text,
                              a.end += n.text.length,
                              e
                      }
                      return e.concat([n])
                  }
                  ), [])
              }(e)
                , c = l.map((e=>e.text)).join("")
                , d = function(e, n, a) {
                  const t = a.map(u).join("")
                    , s = n.map(u).join("")
                    , o = new RegExp(`(?:^|\\s)[${t}]*([${s}][^ ]+)`,"g")
                    , i = [];
                  let r;
                  do {
                      r = o.exec(e),
                      r && i.push({
                          start: r.index + r[0].length - r[1].length,
                          end: r.index + r[0].length,
                          channel: r[1]
                      })
                  } while (r);
                  return i
              }(c, a ? a.serverOptions.CHANTYPES : ["#", "&"], a ? a.serverOptions.PREFIX?.prefix?.map((e=>e.symbol)) : ["!", "@", "%", "+"])
                , h = function(e) {
                  const n = g.match(e);
                  return n ? n.map(w) : []
              }(c)
                , p = function(e) {
                  const n = [];
                  let a;
                  for (; a = f.exec(e); )
                      n.push({
                          start: a.index,
                          end: a.index + a[0].length,
                          emoji: a[0]
                      });
                  return n
              }(c)
                , m = function(e, n) {
                  const a = [];
                  if (0 === n.length)
                      return a;
                  let t;
                  for (; t = k.exec(e); )
                      n.indexOf(t[1]) > -1 && a.push({
                          start: t.index,
                          end: t.index + t[1].length,
                          nick: t[1]
                      });
                  return a
              }(c, n && n.users || []);
              return function(e, n, a) {
                  const t = function(e, n) {
                      let a = 0;
                      const t = e.reduce(((e,n)=>(n.start > a && e.push({
                          start: a,
                          end: n.start
                      }),
                      a = n.end,
                      e)), []);
                      return a < n.length && t.push({
                          start: a,
                          end: n.length
                      }),
                      t
                  }(e = e.sort(v).reduce(((e,n)=>e.some((e=>b(e, n))) ? e : e.concat([n])), []), a);
                  return [...e, ...t].sort(v).map((e=>(e.fragments = n.filter((n=>b(e, n))).map((n=>function(e, n) {
                      const a = n.start
                        , t = Math.max(n.start, e.start)
                        , s = Math.min(n.end, e.end)
                        , o = n.text.slice(t - a, s - a);
                      return Object.assign({}, n, {
                          start: t,
                          end: s,
                          text: o
                      })
                  }(e, n))),
                  e)))
              }(d.concat(h).concat(p).concat(m), l, c).map((e=>{
                  const a = e.fragments.map((e=>function(e) {
                      const n = [];
                      e.bold && n.push("irc-bold"),
                      void 0 !== e.textColor && n.push("irc-fg" + e.textColor),
                      void 0 !== e.bgColor && n.push("irc-bg" + e.bgColor),
                      e.italic && n.push("irc-italic"),
                      e.underline && n.push("irc-underline"),
                      e.strikethrough && n.push("irc-strikethrough"),
                      e.monospace && n.push("irc-monospace");
                      const a = {
                          class: void 0,
                          style: void 0
                      };
                      let s = !1;
                      return n.length > 0 && (s = !0,
                      a.class = n),
                      e.hexColor && (s = !0,
                      a.style = {
                          color: `#${e.hexColor}`
                      },
                      e.hexBgColor && (a.style["background-color"] = `#${e.hexBgColor}`)),
                      s ? (0,
                      t.h)("span", a, e.text) : e.text
                  }(e)));
                  if (e.link) {
                      const s = n && n.previews && n.previews.find((n=>n.link === e.link))
                        , o = (0,
                      t.h)("a", {
                          href: e.link,
                          dir: s ? null : "auto",
                          target: "_blank",
                          rel: "noopener"
                      }, a);
                      if (!s)
                          return o;
                      const i = [o];
                      return s.size > 0 && i.push((0,
                      t.h)(q, {
                          size: s.size
                      })),
                      i.push((0,
                      t.h)(D, {
                          link: s,
                          message: n
                      })),
                      (0,
                      t.h)("span", {
                          dir: "auto"
                      }, i)
                  }
                  if (e.channel)
                      return (0,
                      t.h)(H, {
                          channel: e.channel
                      }, {
                          default: ()=>a
                      });
                  if (e.emoji) {
                      const n = e.emoji.replace(O, "")
                        , s = _[n] ? `Emoji: ${_[n]}` : null;
                      return (0,
                      t.h)("span", {
                          class: ["emoji"],
                          role: "img",
                          "aria-label": s,
                          title: s
                      }, a)
                  }
                  return e.nick ? (0,
                  t.h)(L.Z, {
                      user: {
                          nick: e.nick
                      },
                      dir: "auto"
                  }, {
                      default: ()=>a
                  }) : a
              }
              ))
          }
            , A = (0,
          t.aZ)({
              name: "ParsedMessage",
              functional: !0,
              props: {
                  text: String,
                  message: {
                      type: Object,
                      required: !1
                  },
                  network: {
                      type: Object,
                      required: !1
                  }
              },
              render: e=>I(void 0 !== e.text ? e.text : e.message.text, e.message, e.network)
          })
      }
      ,
      7652: (e,n,a)=>{
          "use strict";
          a.d(n, {
              Z: ()=>u
          });
          var t = a(3648)
            , s = a(1406)
            , o = a(3577);
          const i = ["data-name"];
          var r = a(8833)
            , l = a(6084)
            , c = (0,
          t.aZ)({
              name: "Username",
              props: {
                  user: {
                      type: Object,
                      required: !0
                  },
                  active: Boolean,
                  onHover: {
                      type: Function,
                      required: !1
                  },
                  channel: {
                      type: Object,
                      required: !1
                  },
                  network: {
                      type: Object,
                      required: !1
                  }
              },
              setup: e=>({
                  mode: (0,
                  t.Fl)((()=>e.user.modes ? e.user.modes[0] : e.user.mode)),
                  nickColor: (0,
                  t.Fl)((()=>(e=>{
                      let n = 0;
                      for (let a = 0; a < e.length; a++)
                          n += e.charCodeAt(a);
                      return "color-" + (1 + n % 32).toString()
                  }
                  )(e.user.nick))),
                  hover: ()=>e.onHover ? e.onHover(e.user) : null,
                  openContextMenu: n=>{
                      r.Z.emit("contextmenu:user", {
                          event: n,
                          user: e.user,
                          network: e.network,
                          channel: e.channel
                      })
                  }
                  ,
                  store: (0,
                  l.oR)()
              })
          })
            , u = (0,
          a(3744).Z)(c, [["render", function(e, n, a, r, l, c) {
              return (0,
              t.wg)(),
              (0,
              t.iD)("span", (0,
              t.dG)({
                  class: ["user", {
                      [e.nickColor]: e.store.state.settings.coloredNicks
                  }, {
                      active: e.active
                  }],
                  "data-name": e.user.nick,
                  role: "button"
              }, (0,
              t.mx)(e.onHover ? {
                  mouseenter: e.hover
              } : {}), {
                  onClick: n[0] || (n[0] = (0,
                  s.iM)(((...n)=>e.openContextMenu && e.openContextMenu(...n)), ["prevent"])),
                  onContextmenu: n[1] || (n[1] = (0,
                  s.iM)(((...n)=>e.openContextMenu && e.openContextMenu(...n)), ["prevent"]))
              }), [(0,
              t.WI)(e.$slots, "default", {}, (()=>[(0,
              t.Uk)((0,
              o.zw)(e.mode) + (0,
              o.zw)(e.user.nick), 1)]))], 16, i)
          }
          ]])
      }
  }, a = {};
  function t(e) {
      var s = a[e];
      if (void 0 !== s)
          return s.exports;
      var o = a[e] = {
          exports: {}
      };
      return n[e].call(o.exports, o, o.exports, t),
      o.exports
  }
  t.m = n,
  e = [],
  t.O = (n,a,s,o)=>{
      if (!a) {
          var i = 1 / 0;
          for (u = 0; u < e.length; u++) {
              a = e[u][0],
              s = e[u][1],
              o = e[u][2];
              for (var r = !0, l = 0; l < a.length; l++)
                  (!1 & o || i >= o) && Object.keys(t.O).every((e=>t.O[e](a[l]))) ? a.splice(l--, 1) : (r = !1,
                  o < i && (i = o));
              if (r) {
                  e.splice(u--, 1);
                  var c = s();
                  void 0 !== c && (n = c)
              }
          }
          return n
      }
      o = o || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > o; u--)
          e[u] = e[u - 1];
      e[u] = [a, s, o]
  }
  ,
  t.n = e=>{
      var n = e && e.__esModule ? ()=>e.default : ()=>e;
      return t.d(n, {
          a: n
      }),
      n
  }
  ,
  t.d = (e,n)=>{
      for (var a in n)
          t.o(n, a) && !t.o(e, a) && Object.defineProperty(e, a, {
              enumerable: !0,
              get: n[a]
          })
  }
  ,
  t.g = function() {
      if ("object" == typeof globalThis)
          return globalThis;
      try {
          return this || new Function("return this")()
      } catch (e) {
          if ("object" == typeof window)
              return window
      }
  }(),
  t.o = (e,n)=>Object.prototype.hasOwnProperty.call(e, n),
  t.r = e=>{
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }
  ,
  (()=>{
      var e = {
          744: 0
      };
      t.O.j = n=>0 === e[n];
      var n = (n,a)=>{
          var s, o, i = a[0], r = a[1], l = a[2], c = 0;
          if (i.some((n=>0 !== e[n]))) {
              for (s in r)
                  t.o(r, s) && (t.m[s] = r[s]);
              if (l)
                  var u = l(t)
          }
          for (n && n(a); c < i.length; c++)
              o = i[c],
              t.o(e, o) && e[o] && e[o][0](),
              e[o] = 0;
          return t.O(u)
      }
        , a = self.webpackChunkthelounge = self.webpackChunkthelounge || [];
      a.forEach(n.bind(null, 0)),
      a.push = n.bind(null, a.push.bind(a))
  }
  )();
  var s = t.O(void 0, [772], (()=>t(43)));
  s = t.O(s)
}
)();
//# sourceMappingURL=bundle.js.map
