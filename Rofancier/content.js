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
    var elements5 = document.getElementsByClassName("section");
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
      if (elements[i].textContent === 'DOORS 👁️' && elements3[i].textContent === 'LSPLASH') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<a href="https://www.youtube.com/watch?v=ASjhnDz3Wt0&list=PLKV8OkTP6VOKJxj-q8mn9YTA_1R3HhJ18"><img id="gt" src="chrome-extension://ajigbdppjalhchikakpjhdppflpabckf/images/gametheory.png"><h3 id="center2">Game Theory Certified</h3></a>';
      } 
      if (elements[i].textContent === 'Rainbow Friends' && elements3[i].textContent === 'Roy & Charcle') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<a href="https://www.youtube.com/watch?v=U-u3eG2C_FY&list=PLj4NGkwzNxjQgY--ypIH_oKxUX580j4nU"><img id="gt" src="chrome-extension://ajigbdppjalhchikakpjhdppflpabckf/images/gametheory.png"><h3 id="center2">Game Theory Certified</h3></a>';
      } 
      if (elements[i].textContent === 'Piggy' && elements3[i].textContent === '@MiniToon') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<a href="https://www.youtube.com/watch?v=2-Mzb3Ag10M&list=PLj4NGkwzNxjQyAKFLft3shXe5-slRr69H"><img id="gt" src="chrome-extension://ajigbdppjalhchikakpjhdppflpabckf/images/gametheory.png"><h3 id="center2">Game Theory Certified</h3></a>';
      } 
      if (elements[i].textContent === 'Squid Game' && elements3[i].textContent === 'Trendsetter Games') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<a href="https://www.youtube.com/watch?v=HMcGWCjhN0U&list=PLj4NGkwzNxjR50_Ib9MeVjwDIoyIiMmP7&pp=gAQBiAQB"><img id="gt" src="chrome-extension://ajigbdppjalhchikakpjhdppflpabckf/images/gametheory.png"><h3 id="center2">Game Theory Certified</h3></a>';
      } 
      if (elements[i].textContent === '[CHAPTER 2] Apeirophobia' || elements3[i].textContent === 'Polaroid Studios') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<a href="https://www.youtube.com/watch?v=yxgVelGoK7c&list=PLj4NGkwzNxjSXWXUFECaUDcmQosVih2ad&pp=gAQBiAQB"><img id="gt2" src="chrome-extension://ajigbdppjalhchikakpjhdppflpabckf/images/gametheory.png"><h3 id="center2">Game Theory Certified</h3></a>';
      }
      if (elements[i].textContent === 'Murder Mystery 2' && elements3[i].textContent === '@Nikilis') {
        elements2[i].innerHTML = elements2[i].innerHTML + '<h2 id="center">All time classic</h2>';
        elements4[i].innerHTML = elements4[i].innerText + '                                                            Warning! People playing this game might be incredibly toxic!';
      } 
    }
  }
  modifyHTMLContent2();
  function startmessage()
  {
  var elements = document.getElementById("HomeContainer");
  console.log("it works");
  setTimeout(function(){
    elements.innerHTML = "<div><h1 id='tjat'>Thanks MatPat.</h1></div>" + elements.innerHTML;
  }, 1500)
  }
startmessage();
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
  
  
  
