var posts=["2024/06/26/first/","2024/05/06/hello-world/","2024/06/26/two/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };