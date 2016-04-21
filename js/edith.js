$(document).ready(function()
{
$('#areasContainer').hover(function(event)
  {
      $('.area-cuadro').css('border', '3px solid red');  
  }); 
  
  $('#areasContainer').mouseleave(function(event)
  {
      $('.area-cuadro').css('border', '0px solid red');  
  });
  
  
});