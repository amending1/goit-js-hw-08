function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,u=setTimeout(w,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function w(){var e=v();if(j(e))return T(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?d(n,r-(e-l)):n}(e))}function T(e){return u=void 0,g&&i?y(e):(i=o=void 0,a)}function O(){var e=v(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(w,t),y(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:T(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),h=(y.elements.email,y.elements.message,document.querySelector("button"),localStorage.getItem("feedback-form-state"));y.email.value=h.email,y.message.value=h.message;const j=e(t)((()=>{const e={email:y.email.value,message:y.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);y.addEventListener("input",(()=>{j()})),y.addEventListener("submit",(e=>{e.preventDefault(),y.email.value="",y.message.value="",localStorage.removeItem("feedback-form-state"),console.log("Form submitted with data:",h)}));
//# sourceMappingURL=03-feedback.ef205386.js.map
