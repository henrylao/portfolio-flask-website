/*
Function that generates the dawta populated into the homepage terminal
 */
$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat rish.human<br/>" + 
      "><span class='caret'>$</span> skills: android, python<br/> ^100" +
      "><span class='caret'>$</span> hobbies: guitar, electronic music production, thinkpads<br/> ^300" +
      "><span class='caret'>$</span> alias: hanz <br/>" +
      "><span class='caret'>$</span> highlight:  <a href='#'>insert some highlight</a>, <a href='#'>insert another highlight</a><br/>"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
