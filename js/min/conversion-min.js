function emailClients(e,l,t){this.name=e,this.link=l,this.value=t}function init(){"use strict";function e(){var e=key("numSwitch"),l=e.selectedIndex;switch(k=k.value,u=u.value,m=m.value,m=m.toLowerCase(),w="T: "+w.value,c="T: "+c.value,d="C: "+d.value,h=h.value,g=g.value,K.href="mailto:"+m,M.style.left=0,fadedBG(b,v,"block"),whatUp(R,"0",250),D.style.display="inline",G.style.display="inline",A.style.display="inline",e[l].value){case p.value:textSwap(N,p.name),dropD(I,p.link);break;case y.value:textSwap(N,y.name),dropD(I,y.link);break;case s.value:textSwap(N,s.name),dropD(I,s.link);break;case r.value:textSwap(N,r.name),dropD(I,r.link);break;default:console.log("doesn't work!")}return w.length<=3&&c.length<=3?(h="",g=""):w.length<=3?h="":c.length<=3&&(g=""),k.length>0&&u.length>0&&m.length>0?(extSwap(F,h),extSwap(P,g),textSwap(O,k),textSwap(B,u),textSwap(Q,m),w.length>3&&c.length>3&&d.length>3?(textSwap(D,w),textSwap(G,c),textSwap(A,d),replHTML(H,S),replHTML(f,S),replHTML(C,S),init()):w.length>3&&c.length>3&&d.length<=3?(textSwap(D,w),textSwap(G,c),replHTML(H,S),replHTML(f,S),replHTML(C,""),A.style.display="none",init()):w.length>3&&c.length<=3&&d.length>3?(textSwap(D,w),textSwap(G,c),textSwap(A,d),replHTML(H,S),replHTML(f,""),replHTML(C,S),G.style.display="none",init()):w.length<=3&&c.length>3&&d.length>3?(textSwap(D,w),textSwap(G,c),textSwap(A,d),replHTML(H,""),replHTML(f,S),replHTML(C,S),D.style.display="none",init()):w.length>3&&c.length<=3&&d.length<=3?(textSwap(D,w),replHTML(H,S),replHTML(f,""),replHTML(C,""),G.style.display="none",A.style.display="none",init()):w.length<=3&&c.length>3&&d.length<=3?(textSwap(G,c),replHTML(H,""),replHTML(f,S),replHTML(C,""),D.style.display="none",A.style.display="none",init()):w.length<=3&&c.length<=3&&d.length>3?(textSwap(A,d),replHTML(H,""),replHTML(f,""),replHTML(C,S),D.style.display="none",G.style.display="none",init()):w.length<=3&&c.length<=3&&d.length<=3&&(textSwap(D,w),replHTML(H,""),replHTML(f,""),replHTML(C,""),D.style.display="none",G.style.display="none",A.style.display="none",init())):alert("Bad Entry: one of your inputs was incorrect."),!1}function l(){"0px"===M.style.left?(M.style.left="-100%",fadedBG(b,L,"none",500),vidIllum(E,I,"0","none",500)):alert("FAIL!!!")}function t(){return"0"===I.style.opacity&&"none"===E.style.display?(console.log("this is vidOverlay (if): "+E),vidIllum(E,I,"1","block",500),!1):(console.log("this is vidOverlay (else): "+E),vidIllum(E,I,"0","none",500),!1)}var n="https://www.youtube.com/embed/Pm9of-zRxAo",a="https://www.youtube.com/embed/GMcgWlI76Qg",i="https://www.youtube.com/embed/0FqFQep33Ec",o="https://www.youtube.com/embed/7KbwvclNRfA",p=new emailClients("Outlook 2010",n,"outlook10"),y=new emailClients("Outlook 2013",a,"outlook13"),s=new emailClients("Outlook 2011",i,"outlook11"),r=new emailClients("Mac Mail",o,"MacMail"),k=key("name"),u=key("position"),w=key("number"),c=key("number2"),d=key("number3"),h=key("ext1"),g=key("ext2"),m=key("email"),x=key("form"),M=key("padTop"),T=key("close-button"),b=key("blackBG"),v="rgba(0,0,0,0.75)",L="rgba(0, 0, 0, 0)",S="<br />",H=key("break"),f=key("break2"),C=key("break3"),E=key("videoOverlay"),I=key("vid-tut"),N=key("client"),O=key("rplName"),B=key("rplTitle"),D=key("rplNum1"),G=key("rplNum2"),A=key("rplNum3"),F=key("rplExt1"),P=key("rplExt2"),Q=key("rplEmail"),R=key("copyPaste"),q=document.getElementsByTagName("a"),z=key("client-link"),K=q[1];console.log(I),I.style.opacity="0",E.style.display="none",console.log(typeof p.link),T.onclick=l,b.onclick=l,x.onsubmit=e,z.onclick=t}window.onload=init;