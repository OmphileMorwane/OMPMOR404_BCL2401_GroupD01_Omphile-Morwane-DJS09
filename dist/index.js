(()=>{"use strict";var e,t,a=document.querySelector("#reviews"),i=document.querySelector("#returning-user"),o=document.querySelector("#user");!function(e){e.ADMIN="ADMIN",e.READ_ONLY="READ_ONLY"}(e||(e={})),function(e){e.GOLD_USER="GOLD_USER",e.SILVER_USER="SILVER_USER",e.BRONZE_USER="BRONZE_USER"}(t||(t={}));var n,r,l,c,s=document.querySelector(".properties"),d=document.querySelector(".footer"),m=[{name:"Sheia",stars:5,loyaltyUser:t.GOLD_USER,date:"01-04-2021"},{name:"Andrzej",stars:3,loyaltyUser:t.BRONZE_USER,date:"28-03-2021"},{name:"Omar",stars:4,loyaltyUser:t.SILVER_USER,date:"27-03-2021",description:"Great hosts, location was a bit further than said."}],u={firstName:"Bobby",lastName:"Brown",permissions:e.ADMIN,isReturning:!0,age:35,stayedAt:["florida-home","oman-flat","tokyo-bungalow"]},y=[{image:"./images/colombia-property.jpg",title:"Colombian Shack",price:45,location:{firstLine:"shack 37",city:"Bogota",code:45632,country:"Colombia"},contact:[0x662d15b891a9,"marywinkle@gmail.com"],isAvailable:!0},{image:"./images/poland-property.jpg",title:"Polish Cottage",price:34,location:{firstLine:"no 23",city:"Gdansk",code:343903,country:"Poland"},contact:[0x49cbdd420724e,"garydavis@hotmail.com"],isAvailable:!1},{image:"./images/london-property.jpg",title:"London Flat",price:23,location:{firstLine:"flat 15",city:"London",code:35433,country:"United Kingdom"},contact:[34829374892553,"andyluger@aol.com"],isAvailable:!0}];function g(e,t,a){if(e){var i=document.createElement("div");i.innerHTML=a.toString()+"/night",t.appendChild(i)}}n=m.length,r=m[0].name,l=m[0].loyaltyUser?"⭐":"",a.innerHTML="review total "+n.toString()+"| last reviewed by "+r+" "+l,c=u.firstName,1==u.isReturning&&(i.innerHTML="back"),o.innerHTML=c;for(var p=0;p<y.length;p++){var L=document.createElement("div");L.classList.add("card"),L.innerHTML=y[p].title;var S=document.createElement("img");S.setAttribute("src",y[p].image),L.appendChild(S),s.appendChild(L),g(u.permissions,L,y[p].price)}var E=["London","11.03",17];d.innerHTML=E[0]+" "+E[1]+" "+E[2]+"°"})();