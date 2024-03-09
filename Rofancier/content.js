chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.customCSS) {
      const style = document.createElement('style');
      style.textContent = message.customCSS;
      document.head.appendChild(style);
    }
  });
  function modifyHTMLContent() {
    var elements = document.getElementsByClassName('profile-name text-overflow');
  
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].textContent === 'UsterkoweOko') {
        elements[i].innerHTML = elements[i].textContent + ' (Creator Of Rofancier)';
      }
    }
  }
  modifyHTMLContent();
  function modifyHTMLContent2() {
    var elements = document.getElementsByClassName('game-name');
    var elements2 = document.getElementsByClassName('game-title-container');
    var elements3 = document.getElementsByClassName('text-name text-overflow');
    var elements4 = document.getElementsByClassName('text game-description linkify');
  
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].textContent === 'BEAR*' || elements[i].textContent === 'BEAR (Alpha)' && elements3[i] === '@Cheedaman') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<h3 id="center">Cheese</h3><img id="bear2" src="chrome-extension://ajigbdppjalhchikakpjhdppflpabckf/images/Bear.png"><img id="sam" src="chrome-extension://ajigbdppjalhchikakpjhdppflpabckf/images/sam.webp">';
      }
      if (elements[i].textContent === 'Zombie Attack' && elements3[i].textContent === 'Zombie Attack Official') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<h2 id="center">All time classic</h2>';
      } 
      if (elements[i].textContent === 'SharkBite Classic 🦈' && elements3[i].textContent === 'Abracadabra') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<h2 id="center">All time classic</h2>';
      } 
      if (elements[i].textContent === 'Natural Disaster Survival' && elements3[i].textContent === '@Stickmasterluke') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<h2 id="center">All time classic</h2>';
      } 
      if (elements[i].textContent === 'Build A Boat For Treasure' && elements3[i].textContent === 'Chillz Studios') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<h2 id="center">All time classic</h2>';
      } 
      if (elements[i].textContent === 'Murder Mystery 2' && elements3[i].textContent === '@Nikilis') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<h2 id="center">All time classic</h2>';
        elements4[i].innerHTML = elements4[i].innerText + '                                                            Warning! People playing this game might be incredibly toxic!';
      } 
    }
  }
  modifyHTMLContent2();
  function offlineMessages(className) {
    setInterval(function() {
      var offlineElements = document.getElementsByClassName(className);
      
      console.log("Number of elements with class '" + className + "':", offlineElements.length);
      
      for (var i = 0; i < offlineElements.length; i++) {
        console.log("Checking element:", offlineElements[i]);
        console.log("Text content of the element:", offlineElements[i].textContent);
        
        if (offlineElements[i].textContent.trim() === "Offline") {
          console.log("Found an offline person!");

          const offlineMessages = [
            "Looking forward to play soon...",
            "I am watching matpat",
            "Kreek is live",
            "Do I look like I am online right now?",
            "I ain't playing anything",
            "Sorry, my mom asked me to do my chores.",
            "I know you asked me to get on in 5, but for me its 5 hours",
            "Being online is so overrated...",
            "Where can I be?",
            "Do those messages look cool?",
            "Um... actually, I am away from keyboard."
          ];
          
          const randomIndex = Math.floor(Math.random() * offlineMessages.length);
          
          offlineElements[i].textContent = offlineMessages[randomIndex];
        }
        if (offlineElements[i].textContent.trim() === "Inactive") {
          var no = "Let me out! I am innocent!";

          const randomIndex = Math.floor(Math.random() * offlineMessages.length);
          
          offlineElements[i].textContent = no;
        }
      }
    }, 1500);
  }
  
  offlineMessages("avatar-card-label");
  
  
  