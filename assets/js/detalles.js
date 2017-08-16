document.getElementById("upload-logo").onchange = function() {
  var reader = new FileReader(); //instanciamos el objeto de la api FileReader

  reader.onload = function(e) {
    //

    document.getElementById("image-logo").src = e.target.result;
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
};

document.getElementById("upload-contacto").onchange = function() {
  var reader = new FileReader(); //instanciamos el objeto de la api FileReader

  reader.onload = function(e) {
    //

    document.getElementById("image-contacto").src = e.target.result;
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
};
