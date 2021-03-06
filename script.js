$('#btnAdd').click(function (e) {
  var nextTab = $('#tabs li').size()+1;

  // create the tab
  $('<li><a href="#tab'+nextTab+'" data-toggle="tab">Tab '+nextTab+'</a></li>').appendTo('#tabs');
  
  // create the tab content
  $('<div class="tab-pane" id="tab'+nextTab+'">tab' +nextTab+' content</div>').appendTo('.tab-content');
  
  // make the new tab active
  $('#tabs a:last').tab('show');
});




$(document).ready(function() {
  $('body').on('click','#create_me',function(){
    var index = $('.nav-tabs li').length+1;
    $('.nav-tabs').append('<li><a href="#tab'+index+'">Show Tab '+index+'</a></li>');
    $('.ui-page').append('<section id="tab'+index+'" class="tab-content hide">Tab '+index+' content</section>');

    $( "#popupLogin" ).popup( "close" );
    $('a[href="#tab'+index+'"]').click();
  })

  $('.nav-tabs').on('click','li > a',function(event){
    event.preventDefault();//stop browser to take action for clicked anchor

    //get displaying tab content jQuery selector
    var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');					

    //find actived navigation and remove 'active' css
    var actived_nav = $('.nav-tabs > li.active');
    actived_nav.removeClass('active');

    //add 'active' css into clicked navigation
    $(this).parents('li').addClass('active');

    //hide displaying tab content
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');

    //show target tab content
    var target_tab_selector = $(this).attr('href');

    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
  });
});


function loadFileAsText(){
  var fileToLoad = document.getElementById("fileToLoad").files[0];

  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent){
      var textFromFileLoaded = fileLoadedEvent.target.result;
      document.getElementById("inputTextToSave").value = textFromFileLoaded;
  };

  fileReader.readAsText(fileToLoad, "UTF-8");
}