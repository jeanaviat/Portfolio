document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Inject YouTube embeds based on js/videos-config.js
  var ids = (typeof YOUTUBE_IDS !== 'undefined') ? YOUTUBE_IDS : {};
  document.querySelectorAll('[data-video-key]').forEach(function (el) {
    var key = el.getAttribute('data-video-key');
    var youtubeId = ids[key];
    if (youtubeId) {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + youtubeId + '?rel=0&modestbranding=1';
      iframe.setAttribute('title', key);
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      el.appendChild(iframe);
    } else {
      var msg = document.createElement('div');
      msg.className = 'video-missing';
      msg.textContent = 'Vidéo à ajouter : renseigne "' + key + '" dans js/videos-config.js';
      el.appendChild(msg);
    }
  });
});
