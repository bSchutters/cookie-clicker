(function(){const O=document.createElement("link").relList;if(O&&O.supports&&O.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))Y(n);new MutationObserver(n=>{for(const b of n)if(b.type==="childList")for(const N of b.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&Y(N)}).observe(document,{childList:!0,subtree:!0});function $(n){const b={};return n.integrity&&(b.integrity=n.integrity),n.referrerPolicy&&(b.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?b.credentials="include":n.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function Y(n){if(n.ep)return;n.ep=!0;const b=$(n);fetch(n.href,b)}})();const tt="/cookie-clicker/assets/Sleep-Cody_3D-2aace5b0.png";let k=document.getElementById("score"),t=1e15,e=0,Z=document.getElementById("cody-lvl-1");Z.addEventListener("click",()=>{t+=e,k.textContent=t});let et=document.getElementById("card-pizza"),u=document.getElementById("cost-pizza"),o=10,q=document.getElementById("lvl-pizza"),w=1;q.textContent=w;u.textContent=o;et.onclick=function(){switch(w<=5&&t>=o&&(w+=1,q.textContent=w,t=t-o,k.textContent=t,e=e+1),w){case 1:o=10,u.textContent=o;break;case 2:o=50,u.textContent=o;break;case 3:o=100,u.textContent=o;break;case 4:o=200,u.textContent=o;break;case 5:o=500,u.textContent=o;break;case 6:q.textContent="MAX",u.textContent="-";break}};let nt=document.getElementById("card-burger"),f=document.getElementById("cost-burger"),c=100,T=document.getElementById("lvl-burger"),z=1;T.textContent=z;f.textContent=c;nt.onclick=function(){switch(z<=5&&t>=c&&(z+=1,T.textContent=z,t=t-c,k.textContent=t,e=e+2),z){case 1:c=100,f.textContent=c;break;case 2:c=250,f.textContent=c;break;case 3:c=500,f.textContent=c;break;case 4:c=1e3,f.textContent=c;break;case 5:c=2500,f.textContent=c;break;case 6:T.textContent="MAX",f.textContent="-";break}};let ot=document.getElementById("card-coffee"),E=document.getElementById("cost-coffee"),l=500,V=document.getElementById("lvl-coffee"),D=1;V.textContent=D;E.textContent=l;ot.onclick=function(){switch(D<=5&&t>=l&&(D+=1,V.textContent=D,t=t-l,k.textContent=t,e=e+5),D){case 1:l=500,E.textContent=l;break;case 2:l=1e3,E.textContent=l;break;case 3:l=2500,E.textContent=l;break;case 4:l=5e3,E.textContent=l;break;case 5:l=1e4,E.textContent=l;break;case 6:V.textContent="MAX",E.textContent="-",Z.src=tt;break}};let ct=document.getElementById("card-dorayaki"),g=document.getElementById("cost-dorayaki"),a=1500,_=document.getElementById("lvl-dorayaki"),A=1;_.textContent=A;g.textContent=a;ct.onclick=function(){if(A<=5&&t>=a)switch(A+=1,_.textContent=A,t=t-a,k.textContent=t,e=e+50,A){case 1:a=1e3,g.textContent=a;break;case 2:a=2e3,g.textContent=a;break;case 3:a=4e3,g.textContent=a;break;case 4:a=8e3,g.textContent=a;break;case 5:a=16e3,g.textContent=a;break;case 6:_.textContent="MAX",g.textContent="-";break}};let lt=document.getElementById("card-fries"),y=document.getElementById("cost-fries"),r=5e3,j=document.getElementById("lvl-fries"),X=1;j.textContent=X;y.textContent=r;lt.onclick=function(){if(X<=5&&t>=r)switch(X+=1,j.textContent=X,t=t-r,k.textContent=t,e=e+150,X){case 1:r=5e3,y.textContent=r;break;case 2:r=1e4,y.textContent=r;break;case 3:r=2e4,y.textContent=r;break;case 4:r=4e4,y.textContent=r;break;case 5:r=8e4,y.textContent=r;break;case 6:j.textContent="MAX",y.textContent="-";break}};let at=document.getElementById("card-HotDog"),I=document.getElementById("cost-hotTog"),s=1e4,G=document.getElementById("lvl-HotDog"),P=1;G.textContent=P;I.textContent=s;at.onclick=function(){if(P<=5&&t>=s)switch(P+=1,G.textContent=P,t=t-s,k.textContent=t,e=e+1e3,P){case 1:s=1e4,I.textContent=s;break;case 2:s=3e4,I.textContent=s;break;case 3:s=6e4,I.textContent=s;break;case 4:s=12e4,I.textContent=s;break;case 5:s=24e4,I.textContent=s;break;case 6:G.textContent="MAX",I.textContent="-";break}};let rt=document.getElementById("Card-ice"),B=document.getElementById("cost-ice"),i=2e4,J=document.getElementById("lvl-ice"),H=1;J.textContent=H;B.textContent=i;rt.onclick=function(){if(H<=5&&t>=i)switch(H+=1,J.textContent=H,t=t-i,k.textContent=t,e=e+1500,H){case 1:i=5e4,B.textContent=i;break;case 2:i=1e5,B.textContent=i;break;case 3:i=2e5,B.textContent=i;break;case 4:i=4e5,B.textContent=i;break;case 5:i=8e5,B.textContent=i;break;case 6:J.textContent="MAX",B.textContent="-";break}};let st=document.getElementById("card-kebab"),v=document.getElementById("cost-kebab"),C=2e5,Q=document.getElementById("lvl-kebab"),K=1;Q.textContent=K;v.textContent=C;st.onclick=function(){switch(K<=5&&t>=C&&(K+=1,Q.textContent=K,t=t-C,k.textContent=t,e=e+1e3),K){case 1:C=2e5,v.textContent=C;break;case 2:C=4e5,v.textContent=C;break;case 3:C=8e5,v.textContent=C;break;case 4:C=16e5,v.textContent=C;break;case 5:C=32e5,v.textContent=C;break;case 6:Q.textContent="MAX",v.textContent="-";break}};let it=document.getElementById("card-milk"),p=document.getElementById("cost-milk"),x=1e6,R=document.getElementById("lvl-milk"),L=1;R.textContent=L;p.textContent=x;it.onclick=function(){switch(L<=5&&t>=x&&(L+=1,R.textContent=L,t=t-x,k.textContent=t,e=e+2e3),L){case 1:x=1e6,p.textContent=x;break;case 2:x=2e6,costKMilk;break;case 3:x=4e6,p.textContent=x;break;case 4:x=8e6,p.textContent=x;break;case 5:x=16e6,p.textContent=x;break;case 6:R.textContent="MAX",p.textContent="-";break}};let Ct=document.getElementById("card-muffin"),h=document.getElementById("cost-muffin"),d=2e5,U=document.getElementById("lvl-muffin"),S=1;U.textContent=S;h.textContent=d;Ct.onclick=function(){switch(S<=5&&t>=d&&(S+=1,U.textContent=S,t=t-d,k.textContent=t,e=e+5e3),S){case 1:d=5e6,h.textContent=d;break;case 2:d=1e7,h.textContent=d;break;case 3:d=2e7,h.textContent=d;break;case 4:d=4e7,h.textContent=d;break;case 5:d=8e7,h.textContent=d;break;case 6:U.textContent="MAX",h.textContent="-";break}};let dt=document.getElementById("card-sandwich"),M=document.getElementById("cost-sandwich"),m=2e5,W=document.getElementById("lvl-sandwich"),F=1;W.textContent=F;M.textContent=m;dt.onclick=function(){switch(F<=5&&t>=m&&(F+=1,W.textContent=F,t=t-m,k.textContent=t,e=e+5e4),F){case 1:m=1e8,M.textContent=m;break;case 2:m=1e9,M.textContent=m;break;case 3:m=1e10,M.textContent=m;break;case 4:m=1e11,M.textContent=m;break;case 5:m=1e12,M.textContent=m;break;case 6:W.textContent="MAX",M.textContent="-";break}};
