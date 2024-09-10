particlesJS.load('particles-js', 'particle.json', function() {
    console.log('callback - particles-js config loaded');
  });

setTimeout(() => {
  
  Swal.fire({
    title: "Selamat datang di linktree saya!",
    text: "maaf kalo jelek 🙏🏼😁",
    icon: "information",
    confirmButtonText: "Gpp",
    confirmButtonColor: "#278cff",

  });
}, 3000);

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const backgroundVideo = document.getElementById('backgroundVideo');
  const body = document.body;
  let audio = new Audio("lagu.mp3")

  let isVideoVisible = false;

  toggleButton.addEventListener('click', () => {
      if (isVideoVisible) {
       
          backgroundVideo.style.display = 'none';
          audio.pause()
          
      } else {
       
          backgroundVideo.style.display = 'block';
          body.style.backgroundColor = 'transparent';
          audio.play()
          audio.loop = true
      }

     
      isVideoVisible = !isVideoVisible;
  });
});

    
