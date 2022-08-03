//IIFE
(function () {//
  // Blog Page Select Different Pages //
  //
  const blogPage1 = document.getElementById('page1');
  const blogPage2 = document.getElementById('page2');
  const blogPage1Icon = document.getElementById('parentPage1');
  const blogPage2Icon = document.getElementById('parentPage2');
  function showPage1() {
    blogPage2.style.display = 'none';
    blogPage1.style.display = 'block';
    blogPage1Icon.className = 'page-item active';
    blogPage2Icon.className = 'page-item';
  }
  function showPage2() {
    blogPage1.style.display = 'none';
    blogPage2.style.display = 'block';
    blogPage1Icon.className = 'page-item';
    blogPage2Icon.className = 'page-item active';
  }
  blogPage1Icon.onclick = showPage1;
  blogPage2Icon.onclick = showPage2;
})()