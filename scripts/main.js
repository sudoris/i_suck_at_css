

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// show about section
function showAbout() {  
  let el = document.getElementById('about-section')
  el.setAttribute('style', 'display: block;')
  el.classList.add('animated', 'slideInLeft', 'faster')
  
  setTimeout(function() {
    el.classList.remove('animated', 'slideInLeft', 'faster')        
  }, 800);
}

// close about section
function closeAbout() {    
  let el = document.getElementById('about-section')
  el.classList.add('animated', 'slideOutLeft', 'faster')
  
  setTimeout(function() {
    el.classList.remove('animated', 'slideOutLeft', 'faster')
    el.setAttribute('style', 'display: none;')        
  }, 800);
}

// show contact section
function showContact() {
  let el = document.getElementById('contact-section')
  el.setAttribute('style', 'display: block;')
  el.classList.add('animated', 'slideInUp', 'faster')
  
  setTimeout(function() {
    el.classList.remove('animated', 'slideInUp', 'faster')        
  }, 800);
}

// close contact section
function closeContact() {
  let el = document.getElementById('contact-section')
  el.classList.add('animated', 'slideOutDown', 'faster')
  
  setTimeout(function() {
    el.classList.remove('animated', 'slideOutDown', 'faster')
    el.setAttribute('style', 'display: none;')     
  }, 800);
}

// show work section
function showWork() {
  let el = document.getElementById('work-section')
  el.setAttribute('style', 'display: block;')
  el.classList.add('animated', 'slideInRight', 'faster')
  
  setTimeout(function() {
    el.classList.remove('animated', 'slideInRight', 'faster')    
  }, 800);
}

// close work section
function closeWork() {
  let el = document.getElementById('work-section')
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
    document.getElementById('boxes').setAttribute('style', 'display: none;')
    document.getElementById('about').classList.remove('animated', 'fadeIn')
    document.getElementById('contact').classList.remove('animated', 'fadeIn')
    document.getElementById('work').classList.remove('animated', 'fadeIn')
  }, 1000)    // animate css's fadeOut animation takes 1s to complete
}, 1000);   // wait 1s to fadeOut loading 

/***************************** */
/* send form data to firestore */
/***************************** */

const messagesRef = firebase.firestore().collection('messages')

// form submit event listener
document.getElementById('contact-form').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()
    
    // get contact form values
    let name = getFormInput('name')
    let email = getFormInput('email')
    let message = getFormInput('message')

    saveMessage({
        name,
        email,
        message
    })    

    document.querySelector('.sent-alert').style.display = 'inline-block'

    // clear focus
    document.activeElement.blur()

    setTimeout(() => {
        document.querySelector('.sent-alert').style.display = 'none'
    }, 3000)
    
    // clear form
    document.getElementById('contact_form').reset()
}

// get form values
function getFormInput(id) {
    return document.getElementById(id).value
}

// save message to firebase
function saveMessage({name, email, message}) {
    let time = new Date()

    // sanitize    
    name = DOMPurify.sanitize(name)
    email = DOMPurify.sanitize(email)
    message = DOMPurify.sanitize(message)

    messagesRef.add({
        name,
        email,
        message,
        time
    })
    .then(function(docRef) {
        console.log("Message sent")
    })
    .catch(function(error) {
        console.error("Error sending message")
    });
}



