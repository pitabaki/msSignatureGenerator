function emailClients(e,t,l,i){this.name=e,this.link=t,this.value=l,this.markup=i}function init(){"use strict";function e(){var e=key("numSwitch"),t=e.selectedIndex;switch(y=y.value,u=u.value,v=v.value,v=v.toLowerCase(),c="T: "+c.value,m="T: "+m.value,k="C: "+k.value,g=g.value,M=M.value,K.href="mailto:"+v,f.style.left=0,fadedBG(L,H,"block"),P.style.display="inline",z.style.display="inline",A.style.display="inline",e[t].value){case d.value:textSwap(N,d.name),replHTML(E,"<source id='vid-tut' src='"+d.link+"' type='video/mp4' />");break;case p.value:textSwap(N,p.name),replHTML(E,"<source id='vid-tut' src='"+p.link+"' type='video/mp4' />");break;case w.value:textSwap(N,w.name),replHTML(E,"<source id='vid-tut' src='"+w.link+"' type='video/mp4' />");break;case h.value:textSwap(N,h.name),replHTML(E,"<source id='vid-tut' src='"+h.link+"' type='video/mp4' />");break;default:console.log("doesn't work!")}return c.length<=3&&m.length<=3?(g="",M=""):c.length<=3?g="":m.length<=3&&(M=""),y.length>0&&u.length>0&&v.length>0?(extSwap(F,g),extSwap(j,M),textSwap(O,y),textSwap(G,u),textSwap(q,v),c.length>3&&m.length>3&&k.length>3?(textSwap(P,c),textSwap(z,m),textSwap(A,k),replHTML(_,S),replHTML(C,S),replHTML(W,S),init()):c.length>3&&m.length>3&&k.length<=3?(textSwap(P,c),textSwap(z,m),replHTML(_,S),replHTML(C,S),replHTML(W,""),A.style.display="none",init()):c.length>3&&m.length<=3&&k.length>3?(textSwap(P,c),textSwap(z,m),textSwap(A,k),replHTML(_,S),replHTML(C,""),replHTML(W,S),z.style.display="none",init()):c.length<=3&&m.length>3&&k.length>3?(textSwap(P,c),textSwap(z,m),textSwap(A,k),replHTML(_,""),replHTML(C,S),replHTML(W,S),P.style.display="none",init()):c.length>3&&m.length<=3&&k.length<=3?(textSwap(P,c),replHTML(_,S),replHTML(C,""),replHTML(W,""),z.style.display="none",A.style.display="none",init()):c.length<=3&&m.length>3&&k.length<=3?(textSwap(z,m),replHTML(_,""),replHTML(C,S),replHTML(W,""),P.style.display="none",A.style.display="none",init()):c.length<=3&&m.length<=3&&k.length>3?(textSwap(A,k),replHTML(_,""),replHTML(C,""),replHTML(W,S),P.style.display="none",z.style.display="none",init()):c.length<=3&&m.length<=3&&k.length<=3&&(textSwap(P,c),replHTML(_,""),replHTML(C,""),replHTML(W,""),P.style.display="none",z.style.display="none",A.style.display="none",init())):alert("Bad Entry: one of your inputs was incorrect."),setTimeout(function(){l()},50),!1}function t(){"0px"===f.style.left?(f.style.left="-100%",fadedBG(L,b,"none",500),vidIllum(E,"0"),setTimeout(function(){B.style.display="none"},50)):alert("FAIL!!!")}function l(){return window.innerWidth>1200?(B.style.display="block",setTimeout(function(){vidIllum(E,"1"),console.log("before "+E.width),E.width=Math.floor(.5*window.innerWidth),E.height=.5625*E.width,E.width=E.width-1,console.log("after "+E.width)},50)):window.innerWidth<=1200&&window.innerWidth>992?(B.style.display="block",setTimeout(function(){vidIllum(E,"1"),console.log("before "+E.width),E.width=Math.floor(.35*window.innerWidth),E.height=.5625*E.width,E.width=E.width-1,console.log("after "+E.width)},50)):B.style.display="none",!1}function i(){window.innerWidth>1200?(console.log("before "+E.width),E.width=Math.floor(.5*window.innerWidth),E.height=.5625*E.width,E.width=E.width-1,console.log("after "+E.width)):window.innerWidth<=1200&&(E.width=Math.floor(.35*window.innerWidth),E.height=.5625*E.width,E.width=E.width-1)}function n(){E.play()}var o="https://www.meyersound.com/email/email_signature/distribution/video/signature_rough_v4.mp4",a="https://www.meyersound.com/email/email_signature/distribution/video/signature_rough_v4.mp4",r="https://www.meyersound.com/email/email_signature/distribution/video/Mac_Outlook11.mp4",s="https://www.meyersound.com/email/email_signature/distribution/video/Mac_Mail.mp4",d=new emailClients("PC Outlook 2010",o,"outlook10"),p=new emailClients("PC Outlook 2013",a,"outlook13"),w=new emailClients("Mac Outlook 2011",r,"outlook11"),h=new emailClients("Mac Mail",s,"MacMail"),y=key("name"),u=key("position"),c=key("number"),m=key("number2"),k=key("number3"),g=key("ext1"),M=key("ext2"),v=key("email"),T=key("form"),f=key("padTop"),x=key("close-button"),L=key("blackBG"),H="rgba(0,0,0,0.75)",b="rgba(0, 0, 0, 0)",S="<br />",_=key("break"),C=key("break2"),W=key("break3"),B=key("videoOverlay"),E=key("vid-cont"),I=key("vid-tut"),N=key("client"),O=key("rplName"),G=key("rplTitle"),P=key("rplNum1"),z=key("rplNum2"),A=key("rplNum3"),F=key("rplExt1"),j=key("rplExt2"),q=key("rplEmail"),D=document.getElementsByTagName("a"),J=key("client-link"),K=D[1];B.style.display="none",x.onclick=t,L.onclick=t,T.onsubmit=e,J.onclick=n,window.onresize=i}window.onload=init;