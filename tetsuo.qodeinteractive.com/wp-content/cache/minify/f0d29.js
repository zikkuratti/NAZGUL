/*! This file is auto-generated */
window.wp=window.wp||{},function(l){var e=wp.i18n.__,n=wp.i18n.sprintf;wp.passwordStrength={meter:function(e,n,t){return l.isArray(n)||(n=[n.toString()]),e!=t&&t&&0<t.length?5:void 0===window.zxcvbn?-1:zxcvbn(e,n).score},userInputBlacklist:function(){return window.console.log(n(e("%1$s is deprecated since version %2$s! Use %3$s instead. Please consider writing more inclusive code."),"wp.passwordStrength.userInputBlacklist()","5.5.0","wp.passwordStrength.userInputDisallowedList()")),wp.passwordStrength.userInputDisallowedList()},userInputDisallowedList:function(){var e,n,t,r,s=[],i=[],o=["user_login","first_name","last_name","nickname","display_name","email","url","description","weblog_title","admin_email"];for(s.push(document.title),s.push(document.URL),n=o.length,e=0;e<n;e++)0!==(r=l("#"+o[e])).length&&(s.push(r[0].defaultValue),s.push(r.val()));for(t=s.length,e=0;e<t;e++)s[e]&&(i=i.concat(s[e].replace(/\W/g," ").split(" ")));return i=l.grep(i,function(e,n){return!(""===e||e.length<4)&&l.inArray(e,i)===n})}},window.passwordStrength=wp.passwordStrength.meter}(jQuery);