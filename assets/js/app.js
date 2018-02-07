//  function para el drag and drop
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);//ACA INDICAMOS EL TIPO DE DATO (FORMATO) QUE VAMOS A TRANFERIR 
}

function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');//ACA RECUPERAMOS LOS DATOS 
  ev.target.appendChild(document.getElementById(id_foto));
}

//funciones en modo responsivo
$("#collage").hide();
//$("#start").hide();

// validar que campos no esten vacios
$(".btn-login").click(function(){
  var user = $('.input-user').val();
  var password = $('.input-password').val();
  $('.input-user, .input-password').val("");
  if(user !== "" && password !== "" && password !== "123456"){
    $("#collage").show();
    $("#start").hide();
  } else {
    alert("Porfavor complete los campos y evite poner como password 123456");
  }
});

$(".btn-logout").click(function(){
  $("#collage").hide();
  $("#start").show();
});