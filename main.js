$(document).ready(function () {
  // stuff goes here
  page.init();
});


var page = {

  init: function () {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function () {
    console.log('init styling');
    page.getGif();

  },
  initEvents: function () {
    console.log('init events');
  },

  config: {
    baseUrl: 'https://api.giphy.com/v1/gifs/',
    clientId: 'dc6zaTOxFJmzC',
    searchTerm: "seinfeld"
  },

  getGif: function () {
    $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" + page.config.searchTerm + "&api_key=dc6zaTOxFJmzC",
      type: 'GET',
      dataType: 'JSON', // type of data that were expecting to get
      success: function (data) {
        console.log(data);
        dataList=data;
        var randomNum = Math.floor((Math.random() * 22) + 1);

          $('.content').append('<img src="' + dataList.data[randomNum].images.original.url + '">');
        

      },
      error: function (error) {
        console.log(error);
      }
    });
  }

};
