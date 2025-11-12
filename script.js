document.addEventListener('keydown', function(e) {
  // Handle up/down navigation
});

function updateSelection(index) {
  menuItems.forEach((item, i) => {
    item.classList.toggle('selected', i === index);
  });
}

function updateVideoBox(contentType) {
  if (contentType === 'none') {
    videoBox.innerHTML = '<img src="yttv-logo-sm-vfl72219.png">';
  } else {
    videoBox.innerHTML = '<img src="thumbnail.jpg">';
  }
}

<script>
  window.onload = function () {
    const menuItems = document.querySelectorAll('.menu li');
    const videoBox = document.querySelector('.video-box');
    let selectedIndex = 0;

    function updateSelection(index) {
      menuItems.forEach((item, i) => {
        item.classList.toggle('selected', i === index);
      });
    }

    function updateVideoBox(contentType) {
      const content = contentType === 'video'
        ? `
          <div class="video-thumbnail">
            <img src="assets/thumbnail.jpg" alt="Video Thumbnail">
            <div class="glow-bar"></div>
          </div>`
        : `
          <div class="video-thumbnail">
            <img src="assets/yttv-logo-sm-vfl72219.png" alt="YouTube Logo">
            <div class="glow-bar"></div>
          </div>`;
      videoBox.innerHTML = content;
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        selectedIndex = (selectedIndex + 1) % menuItems.length;
        updateSelection(selectedIndex);
      } else if (e.key === 'ArrowUp') {
        selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;
        updateSelection(selectedIndex);
      } else if (e.key === 'Enter') {
        const selectedText = menuItems[selectedIndex].textContent.trim();
        updateVideoBox(selectedText === 'Featured' ? 'video' : 'none');
      }
    });

    updateSelection(selectedIndex);
    updateVideoBox('none');
  };
</script>
