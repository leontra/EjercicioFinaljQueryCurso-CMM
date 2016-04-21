$(document).ready(function()
{
    var colores = ['red', 'blue', 'orange', 'white', 'cyan', 'green', 'yellow', 'brown', 'pink'];
    var lastX = 0;
    var color = 0;
   $('#contenido').on('mousemove', function(event)
   {        
       var mouseX = event.offsetX;
       var distancia = mouseX - lastX;
       distancia *= distancia < 0 ? -1 : 1;       
       if(distancia > 50)
       {
           $('.forma-input input').css('background', colores[color]);           
           lastX = mouseX;
           ++color;
           color = color >= colores.length ? 0 : color; 
       }
       
   }); 
});