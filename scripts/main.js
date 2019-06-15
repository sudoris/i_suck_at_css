

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
 particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// show about section
function showAbout() {  
  let el = document.getElementById('about-container')
  el.setAttribute('style', 'display: block;')
  el.classList.add('animated', 'slideInLeft', 'faster')
  
  setTimeout(function(){
      el.classList.remove('animated', 'slideInLeft', 'faster')        
  }, 800);
}

// close about section
function closeAbout() {    
  let el = document.getElementById('about-container')
  el.classList.add('animated', 'slideOutLeft', 'faster')
  
  setTimeout(function(){
      el.classList.remove('animated', 'slideOutLeft', 'faster')
      el.setAttribute('style', 'display: none;')        
  }, 800);
}

// show contact section
function showContact(){
  let el = document.getElementById('contact-container')
  el.setAttribute('style', 'display: block;')
  el.classList.add('animated', 'slideInUp', 'faster')
  
  setTimeout(function(){
      el.classList.remove('animated', 'slideInUp', 'faster')        
  }, 800);
}

// close contact section
function closeContact(){
  let el = document.getElementById('contact-container')
  el.classList.add('animated', 'slideOutDown', 'faster')
  
  setTimeout(function(){
      el.classList.remove('animated', 'slideOutDown', 'faster')
      el.setAttribute('style', 'display: none;')     
  }, 800);
}

// show work section
function showWork(){
  let el = document.getElementById('work-container')
  el.setAttribute('style', 'display: block;')
  el.classList.add('animated', 'slideInRight', 'faster')
  
  setTimeout(function(){
      el.classList.remove('animated', 'slideInRight', 'faster')    
  }, 800);
}

// close work section
function closeWork(){
  let el = document.getElementById('work-container')
  el.classList.add('animated', 'slideOutRight', 'faster')
  
  setTimeout(function(){
      el.classList.remove('animated', 'slideOutRight', 'faster')
      el.setAttribute('style', 'display: none;')           
  }, 800);
}
