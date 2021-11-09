var customNotificator = {
  wrapper: '#UIFlashWrapper',
  message: '#UIFlashMessage',
  notificationDuration: 3000,
  animationDuration: 500,

  notice: function(text, options = {}) {
    $(this.wrapper).addClass('flash-wrapper--is-visible');

    if (options["html_msg"]) {
      $(this.wrapper).find('p.custom-ui-flash__message').html(text);
    } else {
      $(this.wrapper).find('p.custom-ui-flash__message').text(text);
    }

    $(this.message).addClass('custom-ui-flash--is-animating-in');
    $(this.wrapper).animate({ bottom: '5rem' }, this.animationDuration);

    setTimeout(function() {
      customNotificator.close()
    }, this.notificationDuration);
  },

  error: function(text) {
    $(this.wrapper).addClass('flash-wrapper--is-visible');
    $(this.wrapper).find('p.custom-ui-flash__message').text(text);
    $(this.message).addClass('custom-ui-flash--is-animating-in');
    $(this.message).addClass('custom-ui-flash--error');
    $(this.wrapper).animate({ bottom: '5rem' }, this.animationDuration);
  },

  close: function() {
    $(this.wrapper).animate(
      { bottom: '-10rem' },
      this.animationDuration,
      function() {
        $(this.message).removeClass('custom-ui-flash--is-animating-in');
        $(this.wrapper).removeClass('flash-wrapper--is-visible');
        $(this.message).removeClass('custom-ui-flash--error');
      }
    );
  }
};
