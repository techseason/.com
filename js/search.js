var $ = jQuery;
$(function () {
  var availableTags = [
    { value: "Mathematics-1", link: 'https://drive.google.com/u/0/uc?export=download&confirm=bCoY&id=1zV3R9VkiRQrWs9LjYCadPeaQOI5iq45w' },
    { value: "Physics-1", link: 'https://drive.google.com/u/0/uc?export=download&confirm=SFYH&id=1eKSKaCEUH9ZDp8KaOUvY5Rru465JN1yk' },
    { value: "Economics", link: 'https://drive.google.com/uc?export=download&id=1nLZdoXIMiXpzPRswpt_iTkIDsOdVDqpA' },
    { value: "Enviroment Studies", link: 'https://drive.google.com/uc?export=download&id=1s--Bt3IWGHrjoriNEjkdl7LTc0ju_Kgm' },
    { value: "Basic Electronics Engg.", link: 'https://drive.google.com/uc?export=download&id=1Qo-WS_1PlqvZdfHMp3MIhuhWvA9hwmOw' },
    { value: "Manufacturing Techniques", link: 'https://drive.google.com/uc?export=download&id=1AnsOhjbQU39V7eVtvdP1_KamT2dwzKEd' },
    { value: "Engineering Graphics", link: 'https://drive.google.com/u/0/uc?export=download&confirm=KCV4&id=1_2O6T7hA0S15bADkARrCHsQvmvsFgfbl' },
    { value: "Engineering Physics-1 Lab", link: '/u/0/uc?export=download&amp;confirm=44Xg&amp;id=1eKSKaCEUH9ZDp8KaOUvY5Rru465JN1yk' },
    { value: "Basic Electronics Engg. Lab", link: 'https://drive.google.com/uc?export=download&id=10rmidecVMel-9lyM6-o4vwnmYJAaKxWr' },
    { value: "Manufacturing Techniques Lab", link: 'https://drive.google.com/uc?export=download&id=1OcKtxmcgWqqvKtx-D_3OWaX3e2IPynJg' },];
  $("#tags").autocomplete({
    source: availableTags,
    select: function (event, ui) {
      console.log(ui.item.link);
      window.location.replace(ui.item.link)
    }
  });
});