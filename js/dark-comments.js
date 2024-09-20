(function ($) {
  // dark_mode with comments
  $(document).ready(function () {
    const id = $('.dark-mode-btn').attr('id');
    if (id == 'nav-sun-btn') { 
      setGiscusTheme('dark_dimmed');
    } else {
      setGiscusTheme('light');
    }});

  $('.dark-mode-btn').on('click', function () {
    const id = $(this).attr('id')
    if(id == 'nav-sun-btn') { 
      setGiscusTheme('dark_dimmed')
    } else {
      setGiscusTheme('light')
    }
  })
  
  // Set Theme giscus theme by https://thiagoalves.ai/adding-comments-to-jekyll-using-giscus/
  function setGiscusTheme(theme) {
    var iframe = document.querySelector('.giscus-frame');

    if (iframe) {
      var url = new URL(iframe.src);
      url.searchParams.set('theme', theme);
      iframe.src = url.toString();
    }
  }
})(jQuery);
