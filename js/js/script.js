function showALLMenu() {
  $.getJSON('data/hava.json', function (data) {

    let menu = data.menu;

    $.each(menu, function (i, data) {
      $('#list-menu').append('<div class="col-lg-4 col-md-6 special-grid lunch"><div class="gallery-single fix"><img src="images/food-recipe/' + data.img + '" class="img-fluid" alt="Image"><div class="why-text"><h4>' + data.name + '</h4><p>' + data.description + '</p><div class="text-center"><a href="foods/' + data.link + '" class="btn btn-warning btn-sm text-white">See Recipe</a></div></div></div></div>');
    });
  });
}

showALLMenu();

$('.nav-recipe').on('click', function () {
  $('.nav-recipe').removeClass('active');
  $(this).addClass('active');

  let category = $(this).html();
  $('.text-danger').html(category);


  if (category == 'All Menu') {
    $('#list-menu').empty();
    showALLMenu();
    return;
  }

  $.getJSON('data/hava.json', function (data) {
    let menu = data.menu;
    let content = '';

    $.each(menu, function (i, data) {
      if (data.type == category) {
        content += '<div class="col-lg-4 col-md-6 special-grid lunch"><div class="gallery-single fix"><img src="images/food-recipe/' + data.img + '" class="img-fluid" alt="Image"><div class="why-text"><h4>' + data.name + '</h4><p>' + data.description + '</p><div class="text-center"><a href="foods/' + data.link + '" class="btn btn-warning btn-sm text-white">See Recipe</a></div></div></div></div>'
      }
    });
    // untuk menimpa isinya
    $('#list-menu').html(content)
  })
});