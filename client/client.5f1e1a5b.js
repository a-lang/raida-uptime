function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function l(e,t,n,r,s,o,a){const l=function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(t,r,s,o);if(l){const s=i(t,n,r,a);e.p(s,l)}}function c(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}let d,f,h=!1;function m(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function p(e,t){h?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=m(1,s+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;r[e]=n[o]+1;const a=o+1;n[a]=e,s=Math.max(a,s)}const o=[],a=[];let i=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(a[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function g(e,t,n){h&&!n?p(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function A(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function _(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function v(e){return document.createTextNode(e)}function w(){return v(" ")}function y(){return v("")}function I(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function R(e){return function(t){return t.preventDefault(),e.call(this,t)}}function E(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function S(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:E(e,r,t[r])}function D(e){return Array.from(e.childNodes)}function x(e,t,n,r,s=!1){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0});const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o))return n(o),e.splice(r,1),s||(e.claim_info.last_index=r),o}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o))return n(o),e.splice(r,1),s?e.claim_info.last_index--:e.claim_info.last_index=r,o}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function T(e,t,n,r){return x(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r?_(t):$(t)))}function P(e,t){return x(e,(e=>3===e.nodeType),(e=>{e.data=""+t}),(()=>v(t)),!0)}function N(e){return P(e," ")}function L(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function O(e){const t=L(e,"HTML_TAG_START",0),n=L(e,"HTML_TAG_END",t);if(t===n)return new j;const r=e.splice(t,n+1);return b(r[0]),b(r[r.length-1]),new j(r.slice(1,r.length-1))}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function C(e,t){e.value=null==t?"":t}function U(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function H(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=U();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=I(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=I(n.contentWindow,"resize",t)}),p(e,n),()=>{(r||s&&n.contentWindow)&&s(),b(n)}}function M(e,t=document.body){return Array.from(t.querySelectorAll(e))}class j{constructor(e){this.e=this.n=null,this.l=e}m(e,t,n=null){this.e||(this.e=$(t.nodeName),this.t=t,this.l?this.n=this.l:this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)g(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}function G(e){f=e}function q(){if(!f)throw new Error("Function called outside component initialization");return f}function B(e){q().$$.on_mount.push(e)}function z(e){q().$$.after_update.push(e)}function K(e){q().$$.on_destroy.push(e)}const J=[],V=[],W=[],F=[],Y=Promise.resolve();let X=!1;function Q(e){W.push(e)}let Z=!1;const ee=new Set;function te(){if(!Z){Z=!0;do{for(let e=0;e<J.length;e+=1){const t=J[e];G(t),ne(t.$$)}for(G(null),J.length=0;V.length;)V.pop()();for(let e=0;e<W.length;e+=1){const t=W[e];ee.has(t)||(ee.add(t),t())}W.length=0}while(J.length);for(;F.length;)F.pop()();X=!1,Z=!1,ee.clear()}}function ne(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}const re=new Set;let se;function oe(){se={r:0,c:[],p:se}}function ae(){se.r||s(se.c),se=se.p}function ie(e,t){e&&e.i&&(re.delete(e),e.i(t))}function le(e,t,n,r){if(e&&e.o){if(re.has(e))return;re.add(e),se.c.push((()=>{re.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function ce(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(r[e]=1);for(const e in i)s[e]||(n[e]=i[e],s[e]=1);e[o]=i}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ue(e){return"object"==typeof e&&null!==e?e:{}}function de(e){e&&e.c()}function fe(e,t){e&&e.l(t)}function he(e,t,r,a){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=e.$$;i&&i.m(t,r),a||Q((()=>{const t=l.map(n).filter(o);c?c.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(Q)}function me(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){-1===e.$$.dirty[0]&&(J.push(e),X||(X=!0,Y.then(te)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(t,n,o,a,i,l,c=[-1]){const u=f;G(t);const d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:c,skip_bound:!1};let m=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),m&&pe(t,e)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){h=!0;const e=D(n.target);d.fragment&&d.fragment.l(e),e.forEach(b)}else d.fragment&&d.fragment.c();n.intro&&ie(t.$$.fragment),he(t,n.target,n.anchor,n.customElement),h=!1,te()}G(u)}class be{$destroy(){me(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ae=[];function $e(t,n=e){let r;const s=[];function o(e){if(a(t,e)&&(t=e,r)){const e=!Ae.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),Ae.push(n,t)}if(e){for(let e=0;e<Ae.length;e+=2)Ae[e][0](Ae[e+1]);Ae.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const l=[a,i];return s.push(l),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&(r(),r=null)}}}}const _e={};var ve={owner:"a-lang",repo:"raida-uptime",sites:[{name:"RAIDA#0 Australia",url:"$RAIDA_00"},{name:"RAIDA#1 Macedonia",url:"$RAIDA_01"},{name:"RAIDA#2 Philippines",url:"$RAIDA_02"},{name:"RAIDA#3 Serbia",url:"$RAIDA_03"},{name:"RAIDA#4 Switzerland",url:"$RAIDA_04"},{name:"RAIDA#5 South Korea",url:"$RAIDA_05"},{name:"RAIDA#6 Japan",url:"$RAIDA_06"},{name:"RAIDA#7 UK",url:"$RAIDA_07"},{name:"RAIDA#8 India",url:"$RAIDA_08"},{name:"RAIDA#9 India",url:"$RAIDA_09"},{name:"RAIDA#10 Germany",url:"$RAIDA_10"},{name:"RAIDA#11 USA",url:"$RAIDA_11"},{name:"RAIDA#12 India",url:"$RAIDA_12"},{name:"RAIDA#13 Taiwan",url:"$RAIDA_13"},{name:"RAIDA#14 Russia",url:"$RAIDA_14"},{name:"RAIDA#15 Russia",url:"$RAIDA_15"},{name:"RAIDA#16 UK",url:"$RAIDA_16"},{name:"RAIDA#17 Singapore",url:"$RAIDA_17"},{name:"RAIDA#18 USA",url:"$RAIDA_18"},{name:"RAIDA#19 Argentina",url:"$RAIDA_19"},{name:"RAIDA#20 France",url:"$RAIDA_20"},{name:"RAIDA#21 India",url:"$RAIDA_21"},{name:"RAIDA#22 USA",url:"$RAIDA_22"},{name:"RAIDA#23 Germany",url:"$RAIDA_23"},{name:"RAIDA#24 Canada",url:"$RAIDA_24"},{name:"RAIDA#13 Taiwan(CORS)",url:"$RAIDA_13",headers:["Origin: http://example.com","Access-Control-Request-Method: POST","Access-Control-Request-Headers: X-Requested-With"]}],"status-website":{cname:"uptime.cloudcoin.tw",logoUrl:"https://github.com/a-lang/raida-uptime/raw/master/CloudCoinLogo2.svg",name:"RAIDA Supernodes - Uptime",introTitle:"**RAIDA** is the **R**edundant **A**rray of **I**ndependent **D**etection **A**gents.",introMessage:"**RAIDA** has data-supremacy like blockchain, meaning it cannot be brought down, controlled or manipulated. Yet **RAIDA** is faster, more secure, totally private, more energy efficient, quantum-safe and is scalable to the entire world's population. **RAIDA** does what blockchain simply can't do. It is a provisionally patented, next-generation system on a global scale. [**View more details about RAIDA**](https://raidatech.com/)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://uptime.cloudcoin.tw",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function we(e,t,n){const r=e.slice();return r[1]=t[n],r}function ye(t){let n,r,s,o=ve["status-website"]&&!ve["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=$("img"),this.h()},l(e){n=T(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){E(n,"alt",""),n.src!==(r=ve["status-website"].logoUrl)&&E(n,"src",r),E(n,"class","svelte-a08hsz")},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}(),a=ve["status-website"]&&!ve["status-website"].hideNavTitle&&function(t){let n,r,s=ve["status-website"].name+"";return{c(){n=$("div"),r=v(s)},l(e){n=T(e,"DIV",{});var t=D(n);r=P(t,s),t.forEach(b)},m(e,t){g(e,n,t),p(n,r)},p:e,d(e){e&&b(n)}}}();return{c(){n=$("div"),r=$("a"),o&&o.c(),s=w(),a&&a.c(),this.h()},l(e){n=T(e,"DIV",{});var t=D(n);r=T(t,"A",{href:!0,class:!0});var i=D(r);o&&o.l(i),s=N(i),a&&a.l(i),i.forEach(b),t.forEach(b),this.h()},h(){E(r,"href",ve["status-website"].logoHref||ve.path),E(r,"class","logo svelte-a08hsz")},m(e,t){g(e,n,t),p(n,r),o&&o.m(r,null),p(r,s),a&&a.m(r,null)},p(e,t){ve["status-website"]&&!ve["status-website"].hideNavLogo&&o.p(e,t),ve["status-website"]&&!ve["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&b(n),o&&o.d(),a&&a.d()}}}function Ie(e){let t,n,r,s,o,a=e[1].title+"";return{c(){t=$("li"),n=$("a"),r=v(a),o=w(),this.h()},l(e){t=T(e,"LI",{});var s=D(t);n=T(s,"A",{"aria-current":!0,href:!0,class:!0});var i=D(n);r=P(i,a),i.forEach(b),o=N(s),s.forEach(b),this.h()},h(){E(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),E(n,"href",e[1].href.replace("$OWNER",ve.owner).replace("$REPO",ve.repo)),E(n,"class","svelte-a08hsz")},m(e,s){g(e,t,s),p(t,n),p(n,r),p(t,o)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&E(n,"aria-current",s)},d(e){e&&b(t)}}}function Re(t){let n,r,s,o,a,i=ve["status-website"]&&ve["status-website"].logoUrl&&ye(),l=ve["status-website"]&&ve["status-website"].navbar&&function(e){let t,n=ve["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ie(we(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=y()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=y()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);g(e,t,n)},p(e,s){if(1&s){let o;for(n=ve["status-website"].navbar,o=0;o<n.length;o+=1){const a=we(e,n,o);r[o]?r[o].p(a,s):(r[o]=Ie(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){A(r,e),e&&b(t)}}}(t),c=ve["status-website"]&&ve["status-website"].navbarGitHub&&!ve["status-website"].navbar&&function(t){let n,r,s,o=ve.i18n.navGitHub+"";return{c(){n=$("li"),r=$("a"),s=v(o),this.h()},l(e){n=T(e,"LI",{});var t=D(n);r=T(t,"A",{href:!0,class:!0});var a=D(r);s=P(a,o),a.forEach(b),t.forEach(b),this.h()},h(){E(r,"href",`https://github.com/${ve.owner}/${ve.repo}`),E(r,"class","svelte-a08hsz")},m(e,t){g(e,n,t),p(n,r),p(r,s)},p:e,d(e){e&&b(n)}}}();return{c(){n=$("nav"),r=$("div"),i&&i.c(),s=w(),o=$("ul"),l&&l.c(),a=w(),c&&c.c(),this.h()},l(e){n=T(e,"NAV",{class:!0});var t=D(n);r=T(t,"DIV",{class:!0});var u=D(r);i&&i.l(u),s=N(u),o=T(u,"UL",{class:!0});var d=D(o);l&&l.l(d),a=N(d),c&&c.l(d),d.forEach(b),u.forEach(b),t.forEach(b),this.h()},h(){E(o,"class","svelte-a08hsz"),E(r,"class","container svelte-a08hsz"),E(n,"class","svelte-a08hsz")},m(e,t){g(e,n,t),p(n,r),i&&i.m(r,null),p(r,s),p(r,o),l&&l.m(o,null),p(o,a),c&&c.m(o,null)},p(e,[t]){ve["status-website"]&&ve["status-website"].logoUrl&&i.p(e,t),ve["status-website"]&&ve["status-website"].navbar&&l.p(e,t),ve["status-website"]&&ve["status-website"].navbarGitHub&&!ve["status-website"].navbar&&c.p(e,t)},i:e,o:e,d(e){e&&b(n),i&&i.d(),l&&l.d(),c&&c.d()}}}function Ee(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Se extends be{constructor(e){super(),ge(this,e,Ee,Re,a,{segment:0})}}var De={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function xe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Te(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pe(e,t){var n,r,s,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=t||{},d=0;function f(e){var t=De[e[1]||""],n=l[l.length-1]==e;return t?t[1]?(n?l.pop():l.push(e),t[0|n]):t[0]:e}function h(){for(var e="";l.length;)e+=f(l[l.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=i.exec(e);)r=e.substring(d,s.index),d=i.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((a=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+xe(Te(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=s[6])?(a.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Pe(xe(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):s[8]?n='<img src="'+Te(s[8])+'" alt="'+Te(s[7])+'">':s[10]?(c=c.replace("<a>",'<a href="'+Te(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(a="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Pe(s[12]||s[15],u)+"</"+a+">":s[16]?n="<code>"+Te(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),c+=r,c+=n;return(c+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ne(e,t,n){const r=e.slice();return r[3]=t[n],r}function Le(e,t,n){const r=e.slice();return r[3]=t[n],r}function Oe(e,t,n){const r=e.slice();return r[8]=t[n],r}function ke(t){let n;return{c(){n=$("link"),this.h()},l(e){n=T(e,"LINK",{rel:!0,href:!0}),this.h()},h(){E(n,"rel","stylesheet"),E(n,"href",`${ve.path}/themes/${(ve["status-website"]||{}).theme||"light"}.css`)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function Ce(t){let n;return{c(){n=$("link"),this.h()},l(e){n=T(e,"LINK",{rel:!0,href:!0}),this.h()},h(){E(n,"rel","stylesheet"),E(n,"href",(ve["status-website"]||{}).themeUrl)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function Ue(t){let n,r;return{c(){n=$("script"),this.h()},l(e){n=T(e,"SCRIPT",{src:!0}),D(n).forEach(b),this.h()},h(){n.src!==(r=t[8].src)&&E(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function He(t){let n;return{c(){n=$("link"),this.h()},l(e){n=T(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){E(n,"rel",t[3].rel),E(n,"href",t[3].href),E(n,"media",t[3].media)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function Me(t){let n;return{c(){n=$("meta"),this.h()},l(e){n=T(e,"META",{name:!0,content:!0}),this.h()},h(){E(n,"name",t[3].name),E(n,"content",t[3].content)},m(e,t){g(e,n,t)},p:e,d(e){e&&b(n)}}}function je(t){let n,r,s,o,a,c,u,d,f,h,m,_,v,I,R,S,x,P,L=Pe(ve.i18n.footer.replace(/\$REPO/,`https://github.com/${ve.owner}/${ve.repo}`))+"",k=(ve["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(ve["status-website"]||{}).customHeadHtml+"";return{c(){n=new j,r=y(),this.h()},l(e){n=O(e),r=y(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),g(e,r,t)},p:e,d(e){e&&b(r),e&&n.d()}}}();let C=((ve["status-website"]||{}).themeUrl?Ce:ke)(t),U=(ve["status-website"]||{}).scripts&&function(e){let t,n=(ve["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ue(Oe(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=y()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=y()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);g(e,t,n)},p(e,s){if(0&s){let o;for(n=(ve["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Oe(e,n,o);r[o]?r[o].p(a,s):(r[o]=Ue(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){A(r,e),e&&b(t)}}}(t),H=(ve["status-website"]||{}).links&&function(e){let t,n=(ve["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=He(Le(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=y()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=y()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);g(e,t,n)},p(e,s){if(0&s){let o;for(n=(ve["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Le(e,n,o);r[o]?r[o].p(a,s):(r[o]=He(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){A(r,e),e&&b(t)}}}(t),G=(ve["status-website"]||{}).metaTags&&function(e){let t,n=(ve["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=Me(Ne(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=y()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=y()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);g(e,t,n)},p(e,s){if(0&s){let o;for(n=(ve["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Ne(e,n,o);r[o]?r[o].p(a,s):(r[o]=Me(a),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){A(r,e),e&&b(t)}}}(t),q=ve["status-website"].css&&function(t){let n,r,s=`<style>${ve["status-website"].css}</style>`;return{c(){n=new j,r=y(),this.h()},l(e){n=O(e),r=y(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),g(e,r,t)},p:e,d(e){e&&b(r),e&&n.d()}}}(),B=ve["status-website"].js&&function(t){let n,r,s=`<script>${ve["status-website"].js}<\/script>`;return{c(){n=new j,r=y(),this.h()},l(e){n=O(e),r=y(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),g(e,r,t)},p:e,d(e){e&&b(r),e&&n.d()}}}(),z=(ve["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(ve["status-website"]||{}).customBodyHtml+"";return{c(){n=new j,r=y(),this.h()},l(e){n=O(e),r=y(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),g(e,r,t)},p:e,d(e){e&&b(r),e&&n.d()}}}();_=new Se({props:{segment:t[0]}});const K=t[2].default,J=function(e,t,n,r){if(e){const s=i(e,t,n,r);return e[0](s)}}(K,t,t[1],null);return{c(){k&&k.c(),n=y(),C.c(),r=$("link"),s=$("link"),o=$("link"),U&&U.c(),a=y(),H&&H.c(),c=y(),G&&G.c(),u=y(),q&&q.c(),d=y(),B&&B.c(),f=y(),h=w(),z&&z.c(),m=w(),de(_.$$.fragment),v=w(),I=$("main"),J&&J.c(),R=w(),S=$("footer"),x=$("p"),this.h()},l(e){const t=M('[data-svelte="svelte-ri9y7q"]',document.head);k&&k.l(t),n=y(),C.l(t),r=T(t,"LINK",{rel:!0,href:!0}),s=T(t,"LINK",{rel:!0,type:!0,href:!0}),o=T(t,"LINK",{rel:!0,type:!0,href:!0}),U&&U.l(t),a=y(),H&&H.l(t),c=y(),G&&G.l(t),u=y(),q&&q.l(t),d=y(),B&&B.l(t),f=y(),t.forEach(b),h=N(e),z&&z.l(e),m=N(e),fe(_.$$.fragment,e),v=N(e),I=T(e,"MAIN",{class:!0});var i=D(I);J&&J.l(i),i.forEach(b),R=N(e),S=T(e,"FOOTER",{class:!0});var l=D(S);x=T(l,"P",{}),D(x).forEach(b),l.forEach(b),this.h()},h(){E(r,"rel","stylesheet"),E(r,"href",`${ve.path}/global.css`),E(s,"rel","icon"),E(s,"type","image/svg"),E(s,"href",(ve["status-website"]||{}).faviconSvg||(ve["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),E(o,"rel","icon"),E(o,"type","image/png"),E(o,"href",(ve["status-website"]||{}).favicon||"/logo-192.png"),E(I,"class","container"),E(S,"class","svelte-jbr799")},m(e,t){k&&k.m(document.head,null),p(document.head,n),C.m(document.head,null),p(document.head,r),p(document.head,s),p(document.head,o),U&&U.m(document.head,null),p(document.head,a),H&&H.m(document.head,null),p(document.head,c),G&&G.m(document.head,null),p(document.head,u),q&&q.m(document.head,null),p(document.head,d),B&&B.m(document.head,null),p(document.head,f),g(e,h,t),z&&z.m(e,t),g(e,m,t),he(_,e,t),g(e,v,t),g(e,I,t),J&&J.m(I,null),g(e,R,t),g(e,S,t),p(S,x),x.innerHTML=L,P=!0},p(e,[t]){(ve["status-website"]||{}).customHeadHtml&&k.p(e,t),C.p(e,t),(ve["status-website"]||{}).scripts&&U.p(e,t),(ve["status-website"]||{}).links&&H.p(e,t),(ve["status-website"]||{}).metaTags&&G.p(e,t),ve["status-website"].css&&q.p(e,t),ve["status-website"].js&&B.p(e,t),(ve["status-website"]||{}).customBodyHtml&&z.p(e,t);const n={};1&t&&(n.segment=e[0]),_.$set(n),J&&J.p&&(!P||2&t)&&l(J,K,e,e[1],P?t:-1,null,null)},i(e){P||(ie(_.$$.fragment,e),ie(J,e),P=!0)},o(e){le(_.$$.fragment,e),le(J,e),P=!1},d(e){k&&k.d(e),b(n),C.d(e),b(r),b(s),b(o),U&&U.d(e),b(a),H&&H.d(e),b(c),G&&G.d(e),b(u),q&&q.d(e),b(d),B&&B.d(e),b(f),e&&b(h),z&&z.d(e),e&&b(m),me(_,e),e&&b(v),e&&b(I),J&&J.d(e),e&&b(R),e&&b(S)}}}function Ge(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class qe extends be{constructor(e){super(),ge(this,e,Ge,je,a,{segment:0})}}function Be(e){let t,n,r=e[1].stack+"";return{c(){t=$("pre"),n=v(r)},l(e){t=T(e,"PRE",{});var s=D(t);n=P(s,r),s.forEach(b)},m(e,r){g(e,t,r),p(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&k(n,r)},d(e){e&&b(t)}}}function ze(t){let n,r,s,o,a,i,l,c,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Be(t);return{c(){r=w(),s=$("h1"),o=v(t[0]),a=w(),i=$("p"),l=v(d),c=w(),f&&f.c(),u=y(),this.h()},l(e){M('[data-svelte="svelte-1moakz"]',document.head).forEach(b),r=N(e),s=T(e,"H1",{class:!0});var n=D(s);o=P(n,t[0]),n.forEach(b),a=N(e),i=T(e,"P",{class:!0});var h=D(i);l=P(h,d),h.forEach(b),c=N(e),f&&f.l(e),u=y(),this.h()},h(){E(s,"class","svelte-17w3omn"),E(i,"class","svelte-17w3omn")},m(e,t){g(e,r,t),g(e,s,t),p(s,o),g(e,a,t),g(e,i,t),p(i,l),g(e,c,t),f&&f.m(e,t),g(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&k(o,e[0]),2&t&&d!==(d=e[1].message+"")&&k(l,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Be(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&b(r),e&&b(s),e&&b(a),e&&b(i),e&&b(c),f&&f.d(e),e&&b(u)}}}function Ke(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Je extends be{constructor(e){super(),ge(this,e,Ke,ze,a,{status:0,error:1})}}function Ve(e){let n,r,s;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&de(n.$$.fragment),r=y()},l(e){n&&fe(n.$$.fragment,e),r=y()},m(e,t){n&&he(n,e,t),g(e,r,t),s=!0},p(e,t){const s=16&t?ce(o,[ue(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){oe();const e=n;le(e.$$.fragment,1,0,(()=>{me(e,1)})),ae()}a?(n=new a(i()),de(n.$$.fragment),ie(n.$$.fragment,1),he(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(e){s||(n&&ie(n.$$.fragment,e),s=!0)},o(e){n&&le(n.$$.fragment,e),s=!1},d(e){e&&b(r),n&&me(n,e)}}}function We(e){let t,n;return t=new Je({props:{error:e[0],status:e[1]}}),{c(){de(t.$$.fragment)},l(e){fe(t.$$.fragment,e)},m(e,r){he(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(ie(t.$$.fragment,e),n=!0)},o(e){le(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Fe(e){let t,n,r,s;const o=[We,Ve],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),r=y()},l(e){n.l(e),r=y()},m(e,n){a[t].m(e,n),g(e,r,n),s=!0},p(e,s){let l=t;t=i(e),t===l?a[t].p(e,s):(oe(),le(a[l],1,1,(()=>{a[l]=null})),ae(),n=a[t],n?n.p(e,s):(n=a[t]=o[t](e),n.c()),ie(n,1),n.m(r.parentNode,r))},i(e){s||(ie(n),s=!0)},o(e){le(n),s=!1},d(e){a[t].d(e),e&&b(r)}}}function Ye(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Fe]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new qe({props:o}),{c(){de(n.$$.fragment)},l(e){fe(n.$$.fragment,e)},m(e,t){he(n,e,t),r=!0},p(e,[t]){const r=12&t?ce(s,[4&t&&{segment:e[2][0]},8&t&&ue(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(ie(n.$$.fragment,e),r=!0)},o(e){le(n.$$.fragment,e),r=!1},d(e){me(n,e)}}}function Xe(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:l=null}=t,{notify:c}=t;var u,d;return z(c),u=_e,d=r,q().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,c=e.notify)},[s,o,a,i,l,r,c]}class Qe extends be{constructor(e){super(),ge(this,e,Xe,Ye,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ze=[],et=[{js:()=>Promise.all([import("./index.034cb52a.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.af52a27b.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].6ff3a634.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].1d5d6bb8.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.d615fd87.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],tt=(nt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:nt(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:nt(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var nt;
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
function rt(e,t,n,r){return new(n||(n=Promise))((function(s,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function i(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))}function st(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ot,at=1;const it="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},lt={};let ct,ut;function dt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function ft(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ct))return null;let t=e.pathname.slice(ct.length);if(""===t&&(t="/"),!Ze.some((e=>e.test(t))))for(let n=0;n<tt.length;n+=1){const r=tt[n],s=r.pattern.exec(t);if(s){const n=dt(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:i}}}}function ht(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=st(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=ft(s);if(o){gt(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),it.pushState({id:ot},"",s.href)}}function mt(){return{x:pageXOffset,y:pageYOffset}}function pt(e){if(lt[ot]=mt(),e.state){const t=ft(new URL(location.href));t?gt(t,e.state.id):location.href=location.href}else!function(e){at=e}(at+1),function(e){ot=e}(at),it.replaceState({id:ot},"",location.href)}function gt(e,t,n,r){return rt(this,void 0,void 0,(function*(){const s=!!t;if(s)ot=t;else{const e=mt();lt[ot]=e,ot=t=++at,lt[ot]=n?e:{x:0,y:0}}if(yield ut(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=lt[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),lt[ot]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function bt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let At,$t=null;function _t(e){const t=st(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=ft(new URL(e,bt(document)));if(t)$t&&e===$t.href||($t={href:e,promise:Ut(t)}),$t.promise}(t.href)}function vt(e){clearTimeout(At),At=setTimeout((()=>{_t(e)}),20)}function wt(e,t={noscroll:!1,replaceState:!1}){const n=ft(new URL(e,bt(document)));if(n){const r=gt(n,null,t.noscroll);return it[t.replaceState?"replaceState":"pushState"]({id:ot},"",e),r}return location.href=e,new Promise((()=>{}))}const yt="undefined"!=typeof __SAPPER__&&__SAPPER__;let It,Rt,Et,St=!1,Dt=[],xt="{}";const Tt={page:function(e){const t=$e(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:$e(null),session:$e(yt&&yt.session)};let Pt,Nt,Lt;function Ot(e,t){const{error:n}=e;return Object.assign({error:n},t)}function kt(e){return rt(this,void 0,void 0,(function*(){It&&Tt.preloading.set(!0);const t=function(e){return $t&&$t.href===e.href?$t.promise:Ut(e)}(e),n=Rt={},r=yield t,{redirect:s}=r;if(n===Rt)if(s)yield wt(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Ct(n,t,Ot(t,e.page))}}))}function Ct(e,t,n){return rt(this,void 0,void 0,(function*(){Tt.page.set(n),Tt.preloading.set(!1),It?It.$set(t):(t.stores={page:{subscribe:Tt.page.subscribe},preloading:{subscribe:Tt.preloading.subscribe},session:Tt.session},t.level0={props:yield Et},t.notify=Tt.page.notify,It=new Qe({target:Lt,props:t,hydrate:!0})),Dt=e,xt=JSON.stringify(n.query),St=!0,Nt=!1}))}function Ut(e){return rt(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Et){const e=()=>({});Et=yt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Pt)}let i,l=1;try{const s=JSON.stringify(n.query),c=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>rt(this,void 0,void 0,(function*(){const d=r[i];if(function(e,t,n,r){if(r!==xt)return!0;const s=Dt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,d,c,s)&&(u=!0),o.segments[l]=r[i+1],!t)return{segment:d};const f=l++;let h;if(Nt||u||!Dt[i]||Dt[i].part!==t.i){u=!1;const{default:r,preload:s}=yield et[t.i].js();let o;o=St||!yt.preloaded[i+1]?s?yield s.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Pt):{}:yt.preloaded[i+1],h={component:r,props:o,segment:d,match:c,part:t.i}}else h=Dt[i];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:s,props:o,branch:i}}))}var Ht,Mt,jt;Tt.session.subscribe((e=>rt(void 0,void 0,void 0,(function*(){if(Pt=e,!St)return;Nt=!0;const t=ft(new URL(location.href)),n=Rt={},{redirect:r,props:s,branch:o}=yield Ut(t);n===Rt&&(r?yield wt(r.location,{replaceState:!0}):yield Ct(o,s,Ot(s,t.page)))})))),Ht={target:document.querySelector("#sapper")},Mt=Ht.target,Lt=Mt,jt=yt.baseUrl,ct=jt,ut=kt,"scrollRestoration"in it&&(it.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{it.scrollRestoration="auto"})),addEventListener("load",(()=>{it.scrollRestoration="manual"})),addEventListener("click",ht),addEventListener("popstate",pt),addEventListener("touchstart",_t),addEventListener("mousemove",vt),yt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:a}=yt;Et||(Et=s&&s[0]);const i={error:a,status:o,session:r,level0:{props:Et},level1:{props:{status:o,error:a},component:Je},segments:s},l=dt(n);Ct([],i,{host:e,path:t,query:l,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;it.replaceState({id:at},"",t);const n=ft(new URL(location.href));if(n)return gt(n,at,!0,e)}));export{me as A,I as B,s as C,V as D,O as E,u as F,M as G,j as H,Pe as I,_ as J,wt as K,C as L,R as M,t as N,S as O,ce as P,z as Q,K as R,be as S,c as T,ue as U,Q as V,H as W,D as a,P as b,T as c,b as d,$ as e,E as f,g,p as h,ge as i,w as j,N as k,oe as l,le as m,e as n,ae as o,ie as p,B as q,ve as r,a as s,v as t,k as u,y as v,A as w,de as x,fe as y,he as z};

import __inject_styles from './inject_styles.5607aec6.js';