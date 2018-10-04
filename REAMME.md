# smoothscroll
### usage
`smoothScroll(to, duration)`
to : position like `200` or element id `'#home'`

#### Example:
```html
<style>
  body {
    margin: 0;
  }
  
  .navbar {
    position: sticky;
    margin: 2rem;
    top: 0;
    text-align: right;
  }
  
  .section {
    height: 50rem;
  }
  
  .to-top {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }
</style>
<div class="navbar">
  <button onclick="scrollToElement(event,0)">Home</button>
  <button onclick="scrollToElement(event,'#news')">News</button>
  <button onclick="scrollToElement(event,'#1500')">Description</button>
</div>
<h1 class="section" id="home">Home</h1>
<h1 class="section" id="news">News</h1>
<h1 class="section" id="1500">Description</h1>
<button onclick="scrollToElement(event,0)" class="to-top">To Top</button>


<script src="smoothScroll.min.js"></script>
<script>
  function scrollToElement(e, to) {
    e.preventDefault();
    smoothScroll(to, 1200);
  }
</script>
```
