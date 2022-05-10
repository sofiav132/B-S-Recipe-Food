function showALLMenu() {
  $.getJSON('../data/hava.json', function (data) {

    let menu = data.menu;

    $.each(menu, function (i, data) {
      $('#list-menu').append('<div class="col-md-3"><div class="gallery-single fix"><img src="../images/food-recipe/' + data.img + '" class="img-fluid" alt="Image"><div class="why-text"><h4>' + data.name + '</h4><p>' + data.description + '</p><div class="text-center"><a href="../foods/' + data.link + '" class="btn btn-warning btn-sm text-white">See Recipe</a></div></div></div></div>');
    });
  });
}

showALLMenu();