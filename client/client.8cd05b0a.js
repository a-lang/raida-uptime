function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,m=!1;function p(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function g(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(s>0&&t[n[s]].claim_order<=o?s+1:p(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,s=Math.max(a,s)}const o=[],i=[];let a=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function A(e,t,n){m&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function I(){return y(" ")}function R(){return y("")}function E(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function S(e){return function(t){return t.preventDefault(),e.call(this,t)}}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:x(e,r,t[r])}function T(e){return Array.from(e.childNodes)}function N(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function P(e,t,n,r,s=!1){N(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function L(e,t,n,r){return P(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function O(e,t,n){return L(e,t,n,v)}function k(e,t,n){return L(e,t,n,w)}function C(e,t){return P(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>y(t)),!0)}function U(e){return C(e," ")}function H(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function M(e,t){const n=H(e,"HTML_TAG_START",0),r=H(e,"HTML_TAG_END",n);if(n===r)return new K(void 0,t);N(e);const s=e.splice(n,r-n+1);_(s[0]),_(s[s.length-1]);const o=s.slice(1,s.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new K(o,t)}function j(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function B(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=v("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=q();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=E(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=E(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),_(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class K extends class{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=w(t.nodeName):this.e=v(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)A(this.t,this.n[t],e)}}function J(e){h=e}function V(){if(!h)throw new Error("Function called outside component initialization");return h}function W(e){V().$$.on_mount.push(e)}function F(e){V().$$.after_update.push(e)}function Y(e){V().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function re(e){Z.push(e)}const se=new Set;let oe=0;function ie(){const e=h;do{for(;oe<X.length;){const e=X[oe];oe++,J(e),ae(e.$$)}for(J(null),X.length=0,oe=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];se.has(t)||(se.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,se.clear(),J(e)}function ae(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}const ce=new Set;let le;function ue(){le={r:0,c:[],p:le}}function de(){le.r||s(le.c),le=le.p}function fe(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function he(e,t,n,r){if(e&&e.o){if(ce.has(e))return;ce.add(e),le.c.push((()=>{ce.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function me(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function pe(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function be(e,t){e&&e.l(t)}function Ae(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||re((()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(re)}function _e(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ie)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(t,n,o,i,a,c,l,u=[-1]){const d=h;J(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),p&&$e(t,e)),n})):[],f.update(),p=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){m=!0;const e=T(n.target);f.fragment&&f.fragment.l(e),e.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&fe(t.$$.fragment),Ae(t,n.target,n.anchor,n.customElement),m=!1,ie()}J(d)}class we{$destroy(){_e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ye=[];function Ie(t,n=e){let r;const s=new Set;function o(e){if(i(t,e)&&(t=e,r)){const e=!ye.length;for(const e of s)e[1](),ye.push(e,t);if(e){for(let e=0;e<ye.length;e+=2)ye[e][0](ye[e+1]);ye.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||e),i(t),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Re={};var Ee={owner:"a-lang",repo:"raida-uptime",sites:[{name:"RAIDA#0 Australia",url:"$RAIDA_00"},{name:"RAIDA#1 Macedonia",url:"$RAIDA_01"},{name:"RAIDA#2 Philippines",url:"$RAIDA_02"},{name:"RAIDA#3 Serbia",url:"$RAIDA_03"},{name:"RAIDA#4 Switzerland",url:"$RAIDA_04"},{name:"RAIDA#5 South Korea",url:"$RAIDA_05"},{name:"RAIDA#6 Japan",url:"$RAIDA_06"},{name:"RAIDA#7 UK",url:"$RAIDA_07"},{name:"RAIDA#8 India",url:"$RAIDA_08"},{name:"RAIDA#9 India",url:"$RAIDA_09"},{name:"RAIDA#10 Germany",url:"$RAIDA_10"},{name:"RAIDA#11 USA",url:"$RAIDA_11"},{name:"RAIDA#12 India",url:"$RAIDA_12"},{name:"RAIDA#13 Taiwan",url:"$RAIDA_13"},{name:"RAIDA#14 Russia",url:"$RAIDA_14"},{name:"RAIDA#15 Russia",url:"$RAIDA_15"},{name:"RAIDA#16 UK",url:"$RAIDA_16"},{name:"RAIDA#17 Singapore",url:"$RAIDA_17"},{name:"RAIDA#18 USA",url:"$RAIDA_18"},{name:"RAIDA#19 Argentina",url:"$RAIDA_19"},{name:"RAIDA#20 France",url:"$RAIDA_20"},{name:"RAIDA#21 India",url:"$RAIDA_21"},{name:"RAIDA#22 USA",url:"$RAIDA_22"},{name:"RAIDA#23 Germany",url:"$RAIDA_23"},{name:"RAIDA#24 Canada",url:"$RAIDA_24"},{name:"RAIDA#13 Taiwan(CORS)",url:"$RAIDA_13",headers:["Origin: http://example.com","Access-Control-Request-Method: POST","Access-Control-Request-Headers: X-Requested-With"]}],"status-website":{cname:"uptime.cloudcoin.tw",logoUrl:"https://github.com/a-lang/raida-uptime/raw/master/CloudCoinLogo2.svg",name:"RAIDA Supernodes - Uptime",introTitle:"**RAIDA** is the **R**edundant **A**rray of **I**ndependent **D**etection **A**gents.",introMessage:"**RAIDA** has data-supremacy like blockchain, meaning it cannot be brought down, controlled or manipulated. Yet **RAIDA** is faster, more secure, totally private, more energy efficient, quantum-safe and is scalable to the entire world's population. **RAIDA** does what blockchain simply can't do. It is a provisionally patented, next-generation system on a global scale. [**View more details about RAIDA**](https://raidatech.com/)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://uptime.cloudcoin.tw",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Se(e,t,n){const r=e.slice();return r[1]=t[n],r}function xe(t){let n,r,s,o,i=Ee["status-website"]&&!Ee["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=v("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){x(n,"alt",""),c(n.src,r=Ee["status-website"].logoUrl)||x(n,"src",r),x(n,"class","svelte-a08hsz")},m(e,t){A(e,n,t)},p:e,d(e){e&&_(n)}}}(),a=Ee["status-website"]&&!Ee["status-website"].hideNavTitle&&function(t){let n,r,s=Ee["status-website"].name+"";return{c(){n=v("div"),r=y(s)},l(e){n=O(e,"DIV",{});var t=T(n);r=C(t,s),t.forEach(_)},m(e,t){A(e,n,t),g(n,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=v("div"),r=v("a"),i&&i.c(),s=I(),a&&a.c(),this.h()},l(e){n=O(e,"DIV",{});var t=T(n);r=O(t,"A",{href:!0,class:!0});var o=T(r);i&&i.l(o),s=U(o),a&&a.l(o),o.forEach(_),t.forEach(_),this.h()},h(){x(r,"href",o=Ee["status-website"].logoHref||Ee.path),x(r,"class","logo svelte-a08hsz")},m(e,t){A(e,n,t),g(n,r),i&&i.m(r,null),g(r,s),a&&a.m(r,null)},p(e,t){Ee["status-website"]&&!Ee["status-website"].hideNavLogo&&i.p(e,t),Ee["status-website"]&&!Ee["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&_(n),i&&i.d(),a&&a.d()}}}function De(e){let t,n,r,s,o,i,a=e[1].title+"";return{c(){t=v("li"),n=v("a"),r=y(a),i=I(),this.h()},l(e){t=O(e,"LI",{});var s=T(t);n=O(s,"A",{"aria-current":!0,href:!0,class:!0});var o=T(n);r=C(o,a),o.forEach(_),i=U(s),s.forEach(_),this.h()},h(){x(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),x(n,"href",o=e[1].href.replace("$OWNER",Ee.owner).replace("$REPO",Ee.repo)),x(n,"class","svelte-a08hsz")},m(e,s){A(e,t,s),g(t,n),g(n,r),g(t,i)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&x(n,"aria-current",s)},d(e){e&&_(t)}}}function Te(t){let n,r,s,o,i,a=Ee["status-website"]&&Ee["status-website"].logoUrl&&xe(),c=Ee["status-website"]&&Ee["status-website"].navbar&&function(e){let t,n=Ee["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=De(Se(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=R()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=R()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);A(e,t,n)},p(e,s){if(1&s){let o;for(n=Ee["status-website"].navbar,o=0;o<n.length;o+=1){const i=Se(e,n,o);r[o]?r[o].p(i,s):(r[o]=De(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),l=Ee["status-website"]&&Ee["status-website"].navbarGitHub&&!Ee["status-website"].navbar&&function(t){let n,r,s,o,i=Ee.i18n.navGitHub+"";return{c(){n=v("li"),r=v("a"),s=y(i),this.h()},l(e){n=O(e,"LI",{});var t=T(n);r=O(t,"A",{href:!0,class:!0});var o=T(r);s=C(o,i),o.forEach(_),t.forEach(_),this.h()},h(){x(r,"href",o=`https://github.com/${Ee.owner}/${Ee.repo}`),x(r,"class","svelte-a08hsz")},m(e,t){A(e,n,t),g(n,r),g(r,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=v("nav"),r=v("div"),a&&a.c(),s=I(),o=v("ul"),c&&c.c(),i=I(),l&&l.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=T(n);r=O(t,"DIV",{class:!0});var u=T(r);a&&a.l(u),s=U(u),o=O(u,"UL",{class:!0});var d=T(o);c&&c.l(d),i=U(d),l&&l.l(d),d.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){x(o,"class","svelte-a08hsz"),x(r,"class","container svelte-a08hsz"),x(n,"class","svelte-a08hsz")},m(e,t){A(e,n,t),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){Ee["status-website"]&&Ee["status-website"].logoUrl&&a.p(e,t),Ee["status-website"]&&Ee["status-website"].navbar&&c.p(e,t),Ee["status-website"]&&Ee["status-website"].navbarGitHub&&!Ee["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Ne(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Pe extends we{constructor(e){super(),ve(this,e,Ne,Te,i,{segment:0})}}var Le={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Oe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function ke(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ce(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=Le[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(d,s.index),d=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Oe(ke(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ce(Oe(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+ke(s[8])+'" alt="'+ke(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+ke(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ce(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+ke(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ue(e,t,n){const r=e.slice();return r[3]=t[n],r}function He(e,t,n){const r=e.slice();return r[3]=t[n],r}function Me(e,t,n){const r=e.slice();return r[8]=t[n],r}function je(t){let n;return{c(){n=v("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){x(n,"rel","stylesheet"),x(n,"href",`${Ee.path}/themes/${(Ee["status-website"]||{}).theme||"light"}.css`)},m(e,t){A(e,n,t)},p:e,d(e){e&&_(n)}}}function Ge(t){let n;return{c(){n=v("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){x(n,"rel","stylesheet"),x(n,"href",(Ee["status-website"]||{}).themeUrl)},m(e,t){A(e,n,t)},p:e,d(e){e&&_(n)}}}function qe(t){let n,r;return{c(){n=v("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),T(n).forEach(_),this.h()},h(){c(n.src,r=t[8].src)||x(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){A(e,n,t)},p:e,d(e){e&&_(n)}}}function Be(t){let n;return{c(){n=v("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){x(n,"rel",t[3].rel),x(n,"href",t[3].href),x(n,"media",t[3].media)},m(e,t){A(e,n,t)},p:e,d(e){e&&_(n)}}}function ze(t){let n;return{c(){n=v("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){x(n,"name",t[3].name),x(n,"content",t[3].content)},m(e,t){A(e,n,t)},p:e,d(e){e&&_(n)}}}function Ke(t){let n,r,s,o,i,a,c,u,d,f,h,m,p,b,w,y,E,S,D=Ce(Ee.i18n.footer.replace(/\$REPO/,`https://github.com/${Ee.owner}/${Ee.repo}`))+"",N=(Ee["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(Ee["status-website"]||{}).customHeadHtml+"";return{c(){n=new K(!1),r=R(),this.h()},l(e){n=M(e,!1),r=R(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),A(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();let P=((Ee["status-website"]||{}).themeUrl?Ge:je)(t),L=(Ee["status-website"]||{}).scripts&&function(e){let t,n=(Ee["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(Me(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=R()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=R()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);A(e,t,n)},p(e,s){if(0&s){let o;for(n=(Ee["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Me(e,n,o);r[o]?r[o].p(i,s):(r[o]=qe(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),k=(Ee["status-website"]||{}).links&&function(e){let t,n=(Ee["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Be(He(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=R()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=R()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);A(e,t,n)},p(e,s){if(0&s){let o;for(n=(Ee["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=He(e,n,o);r[o]?r[o].p(i,s):(r[o]=Be(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),C=(Ee["status-website"]||{}).metaTags&&function(e){let t,n=(Ee["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=ze(Ue(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=R()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=R()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);A(e,t,n)},p(e,s){if(0&s){let o;for(n=(Ee["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ue(e,n,o);r[o]?r[o].p(i,s):(r[o]=ze(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),H=Ee["status-website"].css&&function(t){let n,r,s=`<style>${Ee["status-website"].css}</style>`;return{c(){n=new K(!1),r=R(),this.h()},l(e){n=M(e,!1),r=R(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),A(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),j=Ee["status-website"].js&&function(t){let n,r,s=`<script>${Ee["status-website"].js}<\/script>`;return{c(){n=new K(!1),r=R(),this.h()},l(e){n=M(e,!1),r=R(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),A(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),G=(Ee["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(Ee["status-website"]||{}).customBodyHtml+"";return{c(){n=new K(!1),r=R(),this.h()},l(e){n=M(e,!1),r=R(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),A(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();m=new Pe({props:{segment:t[0]}});const q=t[2].default,B=function(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}(q,t,t[1],null);return{c(){N&&N.c(),n=R(),P.c(),r=v("link"),s=v("link"),o=v("link"),L&&L.c(),i=R(),k&&k.c(),a=R(),C&&C.c(),c=R(),H&&H.c(),u=R(),j&&j.c(),d=R(),f=I(),G&&G.c(),h=I(),ge(m.$$.fragment),p=I(),b=v("main"),B&&B.c(),w=I(),y=v("footer"),E=v("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);N&&N.l(t),n=R(),P.l(t),r=O(t,"LINK",{rel:!0,href:!0}),s=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),L&&L.l(t),i=R(),k&&k.l(t),a=R(),C&&C.l(t),c=R(),H&&H.l(t),u=R(),j&&j.l(t),d=R(),t.forEach(_),f=U(e),G&&G.l(e),h=U(e),be(m.$$.fragment,e),p=U(e),b=O(e,"MAIN",{class:!0});var l=T(b);B&&B.l(l),l.forEach(_),w=U(e),y=O(e,"FOOTER",{class:!0});var g=T(y);E=O(g,"P",{}),T(E).forEach(_),g.forEach(_),this.h()},h(){x(r,"rel","stylesheet"),x(r,"href",`${Ee.path}/global.css`),x(s,"rel","icon"),x(s,"type","image/svg"),x(s,"href",(Ee["status-website"]||{}).faviconSvg||(Ee["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),x(o,"rel","icon"),x(o,"type","image/png"),x(o,"href",(Ee["status-website"]||{}).favicon||"/logo-192.png"),x(b,"class","container"),x(y,"class","svelte-jbr799")},m(e,t){N&&N.m(document.head,null),g(document.head,n),P.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),L&&L.m(document.head,null),g(document.head,i),k&&k.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,c),H&&H.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,d),A(e,f,t),G&&G.m(e,t),A(e,h,t),Ae(m,e,t),A(e,p,t),A(e,b,t),B&&B.m(b,null),A(e,w,t),A(e,y,t),g(y,E),E.innerHTML=D,S=!0},p(e,[t]){(Ee["status-website"]||{}).customHeadHtml&&N.p(e,t),P.p(e,t),(Ee["status-website"]||{}).scripts&&L.p(e,t),(Ee["status-website"]||{}).links&&k.p(e,t),(Ee["status-website"]||{}).metaTags&&C.p(e,t),Ee["status-website"].css&&H.p(e,t),Ee["status-website"].js&&j.p(e,t),(Ee["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),B&&B.p&&(!S||2&t)&&function(e,t,n,r,s,o){if(s){const i=l(t,n,r,o);e.p(i,s)}}(B,q,e,e[1],S?function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){S||(fe(m.$$.fragment,e),fe(B,e),S=!0)},o(e){he(m.$$.fragment,e),he(B,e),S=!1},d(e){N&&N.d(e),_(n),P.d(e),_(r),_(s),_(o),L&&L.d(e),_(i),k&&k.d(e),_(a),C&&C.d(e),_(c),H&&H.d(e),_(u),j&&j.d(e),_(d),e&&_(f),G&&G.d(e),e&&_(h),_e(m,e),e&&_(p),e&&_(b),B&&B.d(e),e&&_(w),e&&_(y)}}}function Je(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Ve extends we{constructor(e){super(),ve(this,e,Je,Ke,i,{segment:0})}}function We(e){let t,n,r=e[1].stack+"";return{c(){t=v("pre"),n=y(r)},l(e){t=O(e,"PRE",{});var s=T(t);n=C(s,r),s.forEach(_)},m(e,r){A(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&j(n,r)},d(e){e&&_(t)}}}function Fe(t){let n,r,s,o,i,a,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&We(t);return{c(){r=I(),s=v("h1"),o=y(t[0]),i=I(),a=v("p"),c=y(d),l=I(),f&&f.c(),u=R(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach(_),r=U(e),s=O(e,"H1",{class:!0});var n=T(s);o=C(n,t[0]),n.forEach(_),i=U(e),a=O(e,"P",{class:!0});var h=T(a);c=C(h,d),h.forEach(_),l=U(e),f&&f.l(e),u=R(),this.h()},h(){x(s,"class","svelte-17w3omn"),x(a,"class","svelte-17w3omn")},m(e,t){A(e,r,t),A(e,s,t),g(s,o),A(e,i,t),A(e,a,t),g(a,c),A(e,l,t),f&&f.m(e,t),A(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&j(o,e[0]),2&t&&d!==(d=e[1].message+"")&&j(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=We(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&_(r),e&&_(s),e&&_(i),e&&_(a),e&&_(l),f&&f.d(e),e&&_(u)}}}function Ye(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Xe extends we{constructor(e){super(),ve(this,e,Ye,Fe,i,{status:0,error:1})}}function Qe(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ge(n.$$.fragment),r=R()},l(e){n&&be(n.$$.fragment,e),r=R()},m(e,t){n&&Ae(n,e,t),A(e,r,t),s=!0},p(e,t){const s=16&t?me(o,[pe(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{_e(e,1)})),de()}i?(n=new i(a()),ge(n.$$.fragment),fe(n.$$.fragment,1),Ae(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&fe(n.$$.fragment,e),s=!0)},o(e){n&&he(n.$$.fragment,e),s=!1},d(e){e&&_(r),n&&_e(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,r){Ae(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(fe(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){_e(t,e)}}}function et(e){let t,n,r,s;const o=[Ze,Qe],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=R()},l(e){n.l(e),r=R()},m(e,n){i[t].m(e,n),A(e,r,n),s=!0},p(e,s){let c=t;t=a(e),t===c?i[t].p(e,s):(ue(),he(i[c],1,1,(()=>{i[c]=null})),de(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),fe(n,1),n.m(r.parentNode,r))},i(e){s||(fe(n),s=!0)},o(e){he(n),s=!1},d(e){i[t].d(e),e&&_(r)}}}function tt(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Ve({props:o}),{c(){ge(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){Ae(n,e,t),r=!0},p(e,[t]){const r=12&t?me(s,[4&t&&{segment:e[2][0]},8&t&&pe(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(fe(n.$$.fragment,e),r=!0)},o(e){he(n.$$.fragment,e),r=!1},d(e){_e(n,e)}}}function nt(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return F(l),u=Re,d=r,V().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,i,a,c,r,l]}class rt extends we{constructor(e){super(),ve(this,e,nt,tt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const st=[],ot=[{js:()=>Promise.all([import("./index.10049138.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-f8cadfc8.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.ecb489c8.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.f3b87139.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.7a72cbf9.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-27f5577c.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.c0cd9c95.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],it=(at=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:at(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:at(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var at;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ct(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function lt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,dt=1;const ft="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let mt,pt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(mt))return null;let t=e.pathname.slice(mt.length);if(""===t&&(t="/"),!st.some((e=>e.test(t))))for(let n=0;n<it.length;n+=1){const r=it[n],s=r.pattern.exec(t);if(s){const n=gt(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function At(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=lt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=bt(s);if(o){vt(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),ft.pushState({id:ut},"",s.href)}}function _t(){return{x:pageXOffset,y:pageYOffset}}function $t(e){if(ht[ut]=_t(),e.state){const t=bt(new URL(location.href));t?vt(t,e.state.id):location.href=location.href}else!function(e){dt=e}(dt+1),function(e){ut=e}(dt),ft.replaceState({id:ut},"",location.href)}function vt(e,t,n,r){return ct(this,void 0,void 0,(function*(){const s=!!t;if(s)ut=t;else{const e=_t();ht[ut]=e,ut=t=++dt,ht[ut]=n?e:{x:0,y:0}}if(yield pt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function wt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let yt,It=null;function Rt(e){const t=lt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,wt(document)));if(t)It&&e===It.href||(It={href:e,promise:qt(t)}),It.promise}(t.href)}function Et(e){clearTimeout(yt),yt=setTimeout((()=>{Rt(e)}),20)}function St(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,wt(document)));if(n){const r=vt(n,null,t.noscroll);return ft[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),r}return location.href=e,new Promise((()=>{}))}const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Dt,Tt,Nt,Pt=!1,Lt=[],Ot="{}";const kt={page:function(e){const t=Ie(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Ie(null),session:Ie(xt&&xt.session)};let Ct,Ut,Ht;function Mt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function jt(e){return ct(this,void 0,void 0,(function*(){Dt&&kt.preloading.set(!0);const t=function(e){return It&&It.href===e.href?It.promise:qt(e)}(e),n=Tt={},r=yield t,{redirect:s}=r;if(n===Tt)if(s)yield St(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Gt(n,t,Mt(t,e.page))}}))}function Gt(e,t,n){return ct(this,void 0,void 0,(function*(){kt.page.set(n),kt.preloading.set(!1),Dt?Dt.$set(t):(t.stores={page:{subscribe:kt.page.subscribe},preloading:{subscribe:kt.preloading.subscribe},session:kt.session},t.level0={props:yield Nt},t.notify=kt.page.notify,Dt=new rt({target:Ht,props:t,hydrate:!0})),Lt=e,Ot=JSON.stringify(n.query),Pt=!0,Ut=!1}))}function qt(e){return ct(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Nt){const e=()=>({});Nt=xt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ct)}let a,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ct(this,void 0,void 0,(function*(){const d=r[a];if(function(e,t,n,r){if(r!==Ot)return!0;const s=Lt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,s)&&(u=!0),o.segments[c]=r[a+1],!t)return{segment:d};const f=c++;let h;if(Ut||u||!Lt[a]||Lt[a].part!==t.i){u=!1;const{default:r,preload:s}=yield ot[t.i].js();let o;o=Pt||!xt.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ct):{}:xt.preloaded[a+1],h={component:r,props:o,segment:d,match:l,part:t.i}}else h=Lt[a];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Bt,zt,Kt;kt.session.subscribe((e=>ct(void 0,void 0,void 0,(function*(){if(Ct=e,!Pt)return;Ut=!0;const t=bt(new URL(location.href)),n=Tt={},{redirect:r,props:s,branch:o}=yield qt(t);n===Tt&&(r?yield St(r.location,{replaceState:!0}):yield Gt(o,s,Mt(s,t.page)))})))),Bt={target:document.querySelector("#sapper")},zt=Bt.target,Ht=zt,Kt=xt.baseUrl,mt=Kt,pt=jt,"scrollRestoration"in ft&&(ft.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ft.scrollRestoration="auto"})),addEventListener("load",(()=>{ft.scrollRestoration="manual"})),addEventListener("click",At),addEventListener("popstate",$t),addEventListener("touchstart",Rt),addEventListener("mousemove",Et),xt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=xt;Nt||(Nt=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Nt},level1:{props:{status:o,error:i},component:Xe},segments:s},c=gt(n);Gt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ft.replaceState({id:dt},"",t);const n=bt(new URL(location.href));if(n)return vt(n,dt,!0,e)}));export{_e as A,E as B,s as C,Q as D,M as E,c as F,d as G,K as H,z as I,Ce as J,w as K,k as L,St as M,G as N,S as O,t as P,D as Q,me as R,we as S,F as T,Y as U,u as V,pe as W,re as X,B as Y,T as a,C as b,O as c,_ as d,v as e,x as f,A as g,g as h,ve as i,I as j,U as k,ue as l,he as m,e as n,de as o,fe as p,W as q,Ee as r,i as s,y as t,j as u,R as v,$ as w,ge as x,be as y,Ae as z};

import __inject_styles from './inject_styles.803b7e80.js';