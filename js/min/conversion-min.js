function emailClients(e,t,l){this.name=e,this.link=t,this.value=l}function init(){"use strict";function e(){var e=key("numSwitch"),t=e.selectedIndex;switch(p=p.value,y=y.value,d=d.value,d=d.toLowerCase(),s="T: "+s.value,r="T: "+r.value,u="C: "+u.value,k=k.value,c=c.value,Q.href="mailto:"+d,v.style.left=0,fadedBG("blackBG",g,"block"),whatUp("copyPaste","0",250),B.style.display="inline",C.style.display="inline",F.style.display="inline",e[t].value){case n.value:textSwap(f,n.name),dropD("vid-tut",n.link);break;case a.value:textSwap(f,a.name),dropD("vid-tut",a.link);break;case i.value:textSwap(f,i.name),dropD("vid-tut",i.link);break;case o.value:textSwap(f,o.name),dropD("vid-tut",o.link);break;default:console.log("doesn't work!")}var l=document.getElementById("client-link");return p.length>0&&y.length>0&&d.length>0?(extSwap(I,k),extSwap(G,c),textSwap(E,p),textSwap(O,y),textSwap(N,d),s.length>3&&r.length>3&&u.length>3?(textSwap(B,s),textSwap(C,r),textSwap(F,u),replHTML(M,T),replHTML(b,T),replHTML(L,T),init()):s.length>3&&r.length>3&&u.length<=3?(textSwap(B,s),textSwap(C,r),replHTML(M,T),replHTML(b,T),replHTML(L,""),F.style.display="none",init()):s.length>3&&r.length<=3&&u.length>3?(textSwap(B,s),textSwap(C,r),textSwap(F,u),replHTML(M,T),replHTML(b,""),replHTML(L,T),C.style.display="none",init()):s.length>3&&r.length<=3&&u.length<=3?(textSwap(B,s),replHTML(M,T),replHTML(b,""),replHTML(L,""),C.style.display="none",F.style.display="none",init()):s.length>3&&r.length<=3&&u.length<=3?(textSwap(C,r),replHTML(M,""),replHTML(b,T),replHTML(L,""),B.style.display="none",F.style.display="none",init()):s.length<=3&&r.length<=3&&u.length>3?(textSwap(F,u),replHTML(M,""),replHTML(b,""),replHTML(L,T),B.style.display="none",C.style.display="none",init()):s.length<=3&&r.length<=3&&u.length<=3&&(textSwap(B,s),replHTML(M,""),replHTML(b,""),replHTML(L,""),B.style.display="none",C.style.display="none",F.style.display="none",init())):alert("Bad Entry: one of your inputs was incorrect."),!1}function t(){"0px"===v.style.left?(v.style.left="-100%",fadedBG("blackBG",x,"none",500),vidIllum("videoOverlay","vid-tut","0","none",500)):alert("FAIL!!!")}function l(){return"0"===H.style.opacity&&"none"===S.style.display?(console.log("this is vidOverlay (if): "+S),vidIllum("videoOverlay","vid-tut","1","block",500),!1):(console.log("this is vidOverlay (else): "+S),vidIllum("videoOverlay","vid-tut","0","none",500),!1)}var n=new emailClients("Outlook 2010","https://www.youtube.com/watch?v=0FqFQep33Ec","outlook10"),a=new emailClients("Outlook 2013","https://www.youtube.com/watch?v=0FqFQep33Ec","outlook13"),i=new emailClients("Outlook 2011","https://www.youtube.com/watch?v=0FqFQep33Ec","outlook11"),o=new emailClients("Mac Mail","https://www.youtube.com/watch?v=_hlniA7-Xzg","MacMail"),p=key("name"),y=key("position"),s=key("number"),r=key("number2"),u=key("number3"),k=key("ext1"),c=key("ext2"),d=key("email"),w=key("form"),v=key("padTop"),h=key("close-button"),m=key("blackBG"),g="rgba(0,0,0,0.75)",x="rgba(0, 0, 0, 0)",T="<br />",M=key("break"),b=key("break2"),L=key("break3"),S=key("videoOverlay"),H=key("vid-tut"),f=key("client"),E=key("rplName"),O=key("rplTitle"),B=key("rplNum1"),C=key("rplNum2"),F=key("rplNum3"),I=key("rplExt1"),G=key("rplExt2"),N=key("rplEmail"),D=document.getElementsByTagName("a"),q=key("client-link"),Q=D[1];console.log(H),H.style.opacity="0",S.style.display="none",h.onclick=t,m.onclick=t,w.onsubmit=e,q.onclick=l}window.onload=init;