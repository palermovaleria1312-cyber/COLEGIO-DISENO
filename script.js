
(function(){
  const form = document.getElementById('admisionForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const nombre = (new FormData(form)).get('nombre') || 'tu solicitud';
      alert('¡Gracias! Hemos recibido la información de ' + nombre + '.\nNos contactaremos contigo pronto.');
      form.reset();
    });
  }
})();
