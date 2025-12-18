const MPL = {
  submitForm(e){
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    msg.textContent = "¡Gracias! Tus datos fueron enviados (demo).";
    e.target.reset();
    return false;
  }
};
window.MPL = MPL;
