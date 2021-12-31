var $ = jQuery;
$(function () {
  var availableTags = [
    { value: "Mathematics-1", link: 'https://instagram.com/tech_season' },
    { value: "Physics-1", link: 'https://google.com' },
    { value: "Economics", link: 'https://google.com' },
    { value: "Enviroment Studies", link: 'https://google.com' },
    { value: "Basic Electronics Engg.", link: 'https://google.com' },
    { value: "Manufacturing Techniques", link: 'https://google.com' },
    { value: "Engineering Graphics", link: 'https://google.com' },
    { value: "Engineering Physics-1 Lab", link: 'https://google.com' },
    { value: "Basic Electronics Engg. Lab", link: 'https://google.com' },
    { value: "Manufacturing Techniques Lab", link: 'https://google.com' },];
  $("#tags").autocomplete({
    source: availableTags,
    select: function (event, ui) {
      console.log(ui.item.link);
      window.location.replace(ui.item.link)
    }
  });
});