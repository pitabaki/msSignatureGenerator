function key(e){"use strict";return"string"==typeof e?document.getElementById(e):void 0}function textSwap(e,t){"use strict";var i=e;"undefined"!==i.textContent?i.textContent=t:i.innerText=t}function replHTML(e,t){"use strict";var i=e;"undefined"!=typeof t?i.innerHTML=t:console.log("Fail!!! Function replHTML failed to pass 'property' properly. Double-check your variables.")}function fadedBG(e,t,i,n){"use strict";var l=e;"string"==typeof i?"undefined"==typeof n?(l.style.display=i,setTimeout(function(){l.style.backgroundColor=t},50)):(l.style.backgroundColor=t,setTimeout(function(){l.style.display=i},n)):console.log("Error: the variable 'cloak' was incorrectly passed through function 'fadedBG'. Double-check your variables.")}function vidIllum(e,t){"use strict";var i=e;"undefined"!=typeof i.style.opacity?i.style.opacity=t:console.log("Error: one of the variables was incorrectly passed through function 'vidIllum'. Double-check your variables.")}function whatUp(e,t,i){"use strict";var n=e;"string"==typeof t?"undefined"==typeof i?setTimeout(function(){n.style.marginTop=t},50):setTimeout(function(){n.style.marginTop=t},i):console.log("Error: the variable 'position' was incorrectly passed through function 'whatUp'. Double-check your variables.")}function extSwap(e,t){"use strict";console.log("Passing "+e+" and "+t),0!==t.length?(console.log("If with "+t),t=" x"+t,textSwap(e,t)):(console.log("Else with "+t),t=" ",textSwap(e,t))}function dropD(e,t){"use strict";var i=e;"string"==typeof t?i.src=t:console.log("Link passed to dropD was not a string.")}function emailClients(e,t,i,n){this.name=e,this.link=t,this.value=i,this.markup=n}function init(){"use strict";function e(){var e=key("numSwitch"),t=e.selectedIndex;switch(c=c.value,h=h.value,v=v.value,v=v.toLowerCase(),w="T: "+w.value,g="T: "+g.value,f="C: "+f.value,k=k.value,m=m.value,J.href="mailto:"+v,M.style.left=0,fadedBG(b,L,"block"),F.style.display="inline",N.style.display="inline",P.style.display="inline",e[t].value){case p.value:textSwap(G,p.name),replHTML(_,"<source id='vid-tut' src='"+p.link+"' type='video/mp4' />");break;case d.value:textSwap(G,d.name),replHTML(_,"<source id='vid-tut' src='"+d.link+"' type='video/mp4' />");break;case u.value:textSwap(G,u.name),replHTML(_,"<source id='vid-tut' src='"+u.link+"' type='video/mp4' />");break;case y.value:textSwap(G,y.name),replHTML(_,"<source id='vid-tut' src='"+y.link+"' type='video/mp4' />");break;default:console.log("doesn't work!")}return w.length<=3&&g.length<=3?(k="",m=""):w.length<=3?k="":g.length<=3&&(m=""),c.length>0&&h.length>0&&v.length>0?(extSwap(U,k),extSwap(z,m),textSwap(O,c),textSwap(D,h),textSwap(A,v),w.length>3&&g.length>3&&f.length>3?(textSwap(F,w),textSwap(N,g),textSwap(P,f),replHTML(C,S),replHTML(B,S),replHTML(E,S),init()):w.length>3&&g.length>3&&f.length<=3?(textSwap(F,w),textSwap(N,g),replHTML(C,S),replHTML(B,S),replHTML(E,""),P.style.display="none",init()):w.length>3&&g.length<=3&&f.length>3?(textSwap(F,w),textSwap(N,g),textSwap(P,f),replHTML(C,S),replHTML(B,""),replHTML(E,S),N.style.display="none",init()):w.length<=3&&g.length>3&&f.length>3?(textSwap(F,w),textSwap(N,g),textSwap(P,f),replHTML(C,""),replHTML(B,S),replHTML(E,S),F.style.display="none",init()):w.length>3&&g.length<=3&&f.length<=3?(textSwap(F,w),replHTML(C,S),replHTML(B,""),replHTML(E,""),N.style.display="none",P.style.display="none",init()):w.length<=3&&g.length>3&&f.length<=3?(textSwap(N,g),replHTML(C,""),replHTML(B,S),replHTML(E,""),F.style.display="none",P.style.display="none",init()):w.length<=3&&g.length<=3&&f.length>3?(textSwap(P,f),replHTML(C,""),replHTML(B,""),replHTML(E,S),F.style.display="none",N.style.display="none",init()):w.length<=3&&g.length<=3&&f.length<=3&&(textSwap(F,w),replHTML(C,""),replHTML(B,""),replHTML(E,""),F.style.display="none",N.style.display="none",P.style.display="none",init())):alert("Bad Entry: one of your inputs was incorrect."),setTimeout(function(){i()},50),!1}function t(){"0px"===M.style.left?(M.style.left="-100%",fadedBG(b,H,"none",500),vidIllum(_,"0"),setTimeout(function(){I.style.display="none"},50)):alert("FAIL!!!")}function i(){return window.innerWidth>1200?(I.style.display="block",setTimeout(function(){vidIllum(_,"1"),console.log("before "+_.width),_.width=Math.floor(.5*window.innerWidth),_.height=.5625*_.width,_.width=_.width-1,console.log("after "+_.width)},50)):window.innerWidth<=1200&&window.innerWidth>992?(I.style.display="block",setTimeout(function(){vidIllum(_,"1"),console.log("before "+_.width),_.width=Math.floor(.35*window.innerWidth),_.height=.5625*_.width,_.width=_.width-1,console.log("after "+_.width)},50)):I.style.display="none",!1}function n(){window.innerWidth>1200?(console.log("before "+_.width),_.width=Math.floor(.5*window.innerWidth),_.height=.5625*_.width,_.width=_.width-1,console.log("after "+_.width)):window.innerWidth<=1200&&(_.width=Math.floor(.35*window.innerWidth),_.height=.5625*_.width,_.width=_.width-1)}function l(){_.play()}var o="https://www.meyersound.com/email/email_signature/distribution/video/signature_rough_v4.mp4",r="https://www.meyersound.com/email/email_signature/distribution/video/signature_rough_v4.mp4",a="https://www.meyersound.com/email/email_signature/distribution/video/Mac_Outlook11.mp4",s="https://www.meyersound.com/email/email_signature/distribution/video/Mac_Mail.mp4",p=new emailClients("PC Outlook 2010",o,"outlook10"),d=new emailClients("PC Outlook 2013",r,"outlook13"),u=new emailClients("Mac Outlook 2011",a,"outlook11"),y=new emailClients("Mac Mail",s,"MacMail"),c=key("name"),h=key("position"),w=key("number"),g=key("number2"),f=key("number3"),k=key("ext1"),m=key("ext2"),v=key("email"),T=key("form"),M=key("padTop"),x=key("close-button"),b=key("blackBG"),L="rgba(0,0,0,0.75)",H="rgba(0, 0, 0, 0)",S="<br />",C=key("break"),B=key("break2"),E=key("break3"),I=key("videoOverlay"),_=key("vid-cont"),W=key("vid-tut"),G=key("client"),O=key("rplName"),D=key("rplTitle"),F=key("rplNum1"),N=key("rplNum2"),P=key("rplNum3"),U=key("rplExt1"),z=key("rplExt2"),A=key("rplEmail"),j=document.getElementsByTagName("a"),q=key("client-link"),J=j[1];I.style.display="none",x.onclick=t,b.onclick=t,T.onsubmit=e,q.onclick=l,window.onresize=n}var isFirefox="undefined"!=typeof InstallTrigger,fireOverlay=key("firefox-overlay"),error=key("error"),fireBG=key("fireBG");isFirefox===!0&&(fireOverlay.style.display="block",setTimeout(function(){fireBG.style.opacity="0.75"},100),setTimeout(function(){error.style.top="-100px"},500)),window.onload=init;