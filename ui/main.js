var img = document.getElementById('madi') ;
var lft=0 ;
function moveRight () {
    lft=lft+10;
    img.style.marginLeft = lft + 'px'; 
}

img.onclick = function () {
    var interval =setInterval(moveRight,100);
};
var button=document.getElementById('butto');
var span=document.getElementById('spa');

button.onclick = function(){
    var request = new XMLHttpRequest() ;
    request.onreadystatechange = function(){
        if (request.readystate===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                span.innerHTML = counter.toString();
            }
        }
    request.open('GET','http://ashikameer.imad.hasura-app.io/counter',true);
    };
};