var posts=["2024/06/26/first/","2024/07/11/日记/","2024/09/02/日记2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };