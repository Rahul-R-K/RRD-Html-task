function Zoom(card,img){
  if(document.getElementById(card).style.height === "350px"){
      document.getElementById(card).style.height = "250px"
      document.getElementById(card).style.width = "250px";
      document.getElementById(img).style.height = "150px";
      document.getElementById(img).style.width = "150px";
      document.getElementById(img).style.marginLeft = "50px";
      document.getElementById(card).style.border = "1px solid white";
      }else{
          for(let i=0;i<3;i++){
              document.getElementsByClassName("card")[i].style.height =  "250px";
              document.getElementsByClassName("card")[i].style.width = "250px";
              document.getElementsByClassName("image")[i].style.width = "150px";
              document.getElementsByClassName("image")[i].style.height = "150px";
              document.getElementsByClassName("image")[i].style.marginLeft = "50px";
              document.getElementsByClassName("card")[i].style.border = "1px solid white";
          } 
      document.getElementById(card).style.height = "350px";
      document.getElementById(card).style.width = "300px";
      document.getElementById(img).style.height = "250px";
      document.getElementById(img).style.width = "250px";
      document.getElementById(img).style.marginLeft = "25px";
      document.getElementById(card).style.border = "2px solid grey";
      }
  }
function slidefun(){
      document.getElementById("img1").src = "wgu.png";
      document.getElementById("img2").src = "wjr.png";
      document.getElementById("img3").src = "wp6.png";
      document.getElementById("content1").innerHTML = "Tires can include natural <b>rubber, synthetic rubber, steel, nylon, </b>silica (derived from sand), polyester, carbon etc."
      document.getElementById("content2").innerHTML = "A modern tire on a passenger car will contain up to<b> 25 components</b> and also as many as<b> 12 different</b>."
      document.getElementById("content3").innerHTML = "<b>Steel wire</b> is used in the <b>tire belts and beads</b>, and the plies for<b> truck tires</b>. The belts under the tread serve to stiffen.";
      document.getElementById("revslide").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQA8DCzSOlHz3KKV7vEB6_-DcAdoAioBnSQju2vwz5B9TutYyKQtOSOVVJwusB6NDgw0&usqp=CAU";
      document.getElementById("revslide").style.height = "30px";
      document.getElementById("revslide").style.width = "35px";
      document.getElementById("slidefront").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWh2FEvzrQgGsbDLY9YE9HGAj1sBnT2_PUjg&usqp=CAU";
    for(let i=0;i<3;i++){
              document.getElementsByClassName("card")[i].style.height =  "250px";
              document.getElementsByClassName("card")[i].style.width = "250px";
              document.getElementsByClassName("image")[i].style.width = "150px";
              document.getElementsByClassName("image")[i].style.height = "150px";
              document.getElementsByClassName("image")[i].style.marginLeft = "50px";
              document.getElementsByClassName("card")[i].style.border = "1px solid white";
      } 
  }
function sliderev(){
      document. location. reload();
  }
