

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
 particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// show about section
function showAbout() {  
  let el = document.getElementById('about-container')
  el.setAttribute('style', 'display: block;')
  el.classList.add('animated', 'slideInLeft', 'faster')
  
  setTimeout(function() {
      el.classList.remove('animated', 'slideInLeft', 'faster')        
  }, 800);
}

// close about section
function closeAbout() {    
  let el = document.getElementById('about-container')
  el.classList.add('animated', 'slideOutLeft', 'faster')
  
  setTimeout(function() {
      el.classList.remove('animated', 'slideOutLeft', 'faster')
      el.setAttribute('style', 'display: none;')        
  }, 800);
}

// show contact section
function showContact() {
  let el = document.getElementById('contact-container')
  el.setAttribute('style', 'display: block;')
  el.classList.add('animated', 'slideInUp', 'faster')
  
  setTimeout(function() {
      el.classList.remove('animated', 'slideInUp', 'faster')        
  }, 800);
}

// close contact section
function closeContact() {
  let el = document.getElementById('contact-container')
  el.classList.add('animated', 'slideOutDown', 'faster')
  
  setTimeout(function() {
      el.classList.remove('animated', 'slideOutDown', 'faster')
      el.setAttribute('style', 'display: none;')     
  }, 800);
}

// show work section
function showWork() {
  let el = document.getElementById('work-container')
  el.setAttribute('style', 'display: block;')
  el.classList.add('animated', 'slideInRight', 'faster')
  
  setTimeout(function() {
      el.classList.remove('animated', 'slideInRight', 'faster')    
  }, 800);
}

// close work section
function closeWork() {
  let el = document.getElementById('work-container')
  el.classList.add('animated', 'slideOutRight', 'faster')
  
  setTimeout(function() {
      el.classList.remove('animated', 'slideOutRight', 'faster')
      el.setAttribute('style', 'display: none;')           
  }, 800);
}

setTimeout(function() {
  let loadingEl = document.getElementById('loading-bg')
  loadingEl.classList.add('animated', 'fadeOut')

  setTimeout(() => {
      loadingEl.classList.remove('animated', 'fadeOut')
      loadingEl.setAttribute('style', 'display: none;')
      // document.getElementById('box').setAttribute('style', 'display: none;')
      // document.getElementById('about').classList.remove('animated', 'fadeIn')
      // document.getElementById('contact').classList.remove('animated', 'fadeIn')
      // document.getElementById('work').classList.remove('animated', 'fadeIn')
  }, 1000)    // animate css's fadeOut animation takes 1s to complete
}, 1000);   // wait 1s to fadeOut loading 

