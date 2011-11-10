var post_id;var suma_tiempo=0;var id_anterior=0;
$(function () {
 $("#comenting").submit(function () {  
    $.get(this.action, $(this).serialize(), null, 'script'); 
    $("#content").val(""); 
    return false;  
  });
     if ($('#posteos').length > 0) {  
        setTimeout(updatePosts, 10000);  
      }
     if ($('#comentarios').length > 0) {  
        setTimeout(updateComments, 10000);  
      }  

});  
      
    function updatePosts() {  
      var user_id = $('#usuario').attr('data-id');  
      if ($('.post').length > 0) {  
        var afterp = $('.post:last').attr('data-time');
       
      }  
      else {  
        var afterp = 0; 
      }  
       
      $.getScript('posts.js?user_id=' + user_id + '&afterp=' + afterp);

      setTimeout(updatePosts, 10000);  
    }
    function updateComments(){
    
     if ($('.comentario').length > 0) {  
           var after=  $('.comentario:last').attr('data-tiempo');
	suma_tiempo=suma_tiempo-1;
          }  
     else {  
           var after=0;
           suma_tiempo=suma_tiempo-1;    
          }
     
     //hay que lograr que espere un momento antes de enviar esta peticion
        if(suma_tiempo<0){
      $.getScript('comentarios.js?post_id=' + post_id + '&after=' + after);
	}
      setTimeout(updateComments, 10000);    
    }  
function CngClass(obj){
 

post_id= obj.id;//className;
if(post_id>0 && post_id!=id_anterior){
document.getElementById("comentarios").innerHTML="";
$.getScript('comentarios.js?post_id=' + post_id + '&after=0');
       id_anterior=post_id;
       suma_tiempo=2;
       //updateComments();
       }
 
}
