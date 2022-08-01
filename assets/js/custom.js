//IIFE
(function () {
    const DESKTOP_WIDTH = 812;
  //
  // Update Language //
  //

  function update () {
    var select = document.getElementById('language-selector');
    var option = select.options[select.selectedIndex];
    if (option.value === 'en') {
      document.getElementById('loginUrl').href = "https://global.turingcerts.com/en/login";
      document.getElementById('issuerApply').href = "https://global.turingcerts.com/en/login?role=cc-apply";
    } else {
      document.getElementById('loginUrl').href = "https://global.turingcerts.com/zh-TW/login";
      document.getElementById('issuerApply').href = "https://global.turingcerts.com/zh-TW/login?role=cc-apply";
    }
  };
  
  //
  // Close Cookie Reminder Window //
  //
  const cookieReminderDesktop = document.getElementById('cookieReminder');
  const cookieReminderMobile = document.getElementById('cookieReminderMobile');
  function closeCookieReminder() {
    if (cookieReminderDesktop) {
        cookieReminderDesktop.style.display = 'none';
    }
  }
  function closeCookieReminderMobile() {
    if (cookieReminderMobile) {
        cookieReminderMobile.style.display = 'none';
    }
  }
  if (window.innerWidth >= DESKTOP_WIDTH) {
    closeCookieReminderMobile();
  } else {
    closeCookieReminder();
  }
})()