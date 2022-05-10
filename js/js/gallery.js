function showALLGallery() {
  $.getJSON('data/gallery.json', function (data) {

    let gallery = data.gallery;

    $.each(gallery, function (i, data) {
      $('#list-gallery').append('<div class="col-sm-12 col-md-4 col-lg-4"><a class = "lightbox"href = "images/gallery/' + data.img + '"><img class = "img-fluid"src = "images/gallery/' + data.img + '"alt = "Gallery Images" ></a> </div >');
    });
  });
}

showALLGallery();