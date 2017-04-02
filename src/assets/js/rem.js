document.documentElement.style.fontSize = $(document.documentElement).width()/6.4 + 'px';
Zepto(window).on('resize', function() {
   document.documentElement.style.fontSize = $(document.documentElement).width()/6.4 + 'px';
})