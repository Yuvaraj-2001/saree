
//  function f1() {
//     var xhttp = new XMLHttpRequest();
//     bd_val = document.getElementById("brandVal").value;
//     disp_none("variant_list");

//     xhttp.open("GET", "https://direct-prod-directportal.godigit.com/DirectPortal/variant/match/make_model/"+bd_val, true);
//     console.log(xhttp);
//     xhttp.send();
//     xhttp.onreadystatechange = function() {
        
//       if (this.readyState == 4 && this.status == 200) {
//          a =JSON.parse(this.responseText);
//           arr = [];
//          for (index = 0; index < a.length; index++) {
//             arr.push(a[index].concat);
//             document.getElementById("sh_br").style.display = "block";
//             document.getElementById('sh_br').innerHTML = "<li class='list-group-item' onclick='brand(event);'>" + arr.join("<li class='list-group-item' onclick='brand(event);'>");           
//          }
//       }
//     };
//   }
// cardload();

  function cardload() {
    var xhttp = new XMLHttpRequest();
    s = "";
    var txt = s;

    xhttp.open("GET", "https://yuvaraj-2001.github.io/saree/javascript/json/gallary.json", true);
    // console.log(xhttp);
    xhttp.send();
    xhttp.onreadystatechange = function() {

      
      if(this.status == 0){
        alert('Please connect to your internet');
      }
     else if (this.readyState == 4 && this.status == 200) {
         a =JSON.parse(this.responseText);

         b = Math.floor((Math.random() * a.length) + 1);
         c = Math.floor((Math.random() * a.length) + 1);
         d = Math.floor((Math.random() * a.length) + 1);
         e = Math.floor((Math.random() * a.length) + 1);

         ran = [b, c, d, e];
         console.log(ran.length);

         console.log("b = "+ ran[0] + ", c = "+ ran[1] + ", d = "+ ran[2] + ", e = " + ran[3])
          arr = [];

         for (index = 0; index < ran.length; index++) {
            arr.push(a[index]);
            // console.log(arr);
             console.log(ran.length);
             r = ran[index];
            
           txt += "<div class='col-sm-3 padcard' ><div class='border'> <div  class='card-img-top img' style='background-image: url("+ a[r].fli3 +");width: 100%;height: 253px;' alt='Card image' class='card-text' onclick='getname(event)'>"+ a[r].id + '</div>';           
           txt += "<div class='card-body card-pad'> <div class='badge-main'><span class='badge badge-primary' >"+ a[r].color + "</span>&nbsp;<span class='badge badge-primary'>"+ a[r].design+"</span>&nbsp;<span class='badge badge-primary'>item id :"+ a[r].id+"</span></div>";
           txt += "<p style='color:white;'>"+a[r].info + "</p>";
           txt += "<strike>"+ a[r].oldprice + "</strike>&nbsp;<button class='btn btn-primary'><b>"+ a[r].newprice + "</b></button> <br></div></div></div>";
         }
      }
      document.getElementById('img').innerHTML += txt;
      
      s = txt
      
    };
  }


  function closeget(){
    document.getElementById("imgload").style.display = "block";
    document.getElementById("imgshow").style.display = "none";
  }
 
function getname(e){
    t = e.currentTarget.innerText;
    document.getElementById("imgload").style.display = "none";
    document.getElementById("imgshow").style.display = "block";
    var xhttp = new XMLHttpRequest();
    var text ;  var img1;

    xhttp.open("GET", "https://yuvaraj-2001.github.io/saree/javascript/json/gallary.json", true); 
    xhttp.send();
    xhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) {
    b = JSON.parse(this.responseText);
    console.log(b);
    img1 = b[t].main;
    img2 = b[t].fli1;
    img3 = b[t].fli2;
    img4 = b[t].fli3;
    imger = {img1, img2, img3, img4};
    console.log(imger);
    console.log(img1);
    
  }
  document.getElementById("img1").src = img1;
  document.getElementById("img2").src = img2;
  document.getElementById("img3").src = img3;
  document.getElementById("img4").src = img4;
}

}

function showall(){
  var xhttp = new XMLHttpRequest();
    s = "";
    var txt = s;

    xhttp.open("GET", "https://yuvaraj-2001.github.io/saree/javascript/json/gallary.json", true);
    // console.log(xhttp);
    xhttp.send();
    xhttp.onreadystatechange = function() {

      
      if(this.status == 0){
        alert('Please connect to your internet');
      }
     else if (this.readyState == 4 && this.status == 200) {
         a =JSON.parse(this.responseText);

        //  console.log(a.length);

        
          arr = [];

         for (index = 1; index < a.length; index++) {
            arr.push(a[index]);
            console.log(index);
            // console.log(arr);
            //  console.log(ran.length);
             r = index;
            
           txt += "<div class='col-sm-3 padcard' ><div class='border'> <div  class='card-img-top img' style='background-image: url("+ a[r].fli3 +");width: 100%;height: 253px;' alt='Card image' class='card-text' onclick='getname(event)'>"+ a[r].id + '</div>';           
           txt += "<div class='card-body card-pad'> <div class='badge-main'><span class='badge badge-primary' >"+ a[r].color + "</span>&nbsp;<span class='badge badge-primary'>"+ a[r].design+"</span>&nbsp;<span class='badge badge-primary'>item id :"+ a[r].id+"</span></div>";
           txt += "<p style='color:white;'>"+a[r].info + "</p>";
           txt += "<strike>"+ a[r].oldprice + "</strike>&nbsp;<button class='btn btn-primary'><b>"+ a[r].newprice + "</b></button> <br></div></div></div>";
         }
      }
      document.getElementById('img').innerHTML += txt;
      document.getElementById("all_but").style.display = "none";
      s = txt
      
    };
}