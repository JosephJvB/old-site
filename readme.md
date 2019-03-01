# I wanna make the fun website

Im gonna move this domain from joevanbio.icu  
Domains I have:
- joevanbio.icu
- joevanbo.icu
- joevanbo.site

Let's use .site for now until I do some kind of rebuild on digital ocean with a proper front end and that. (maybe preact for lightness, maybe react for hooks, maybe Vuejs since it's my fav atm)

### PURPOSE??
- WHY am I making this website?
  - to learn how to make a website to be web guy man
  - to fill in time before the cold embrace of death?

### CONTENT:
- I have a rainbow
- maybe static rainbow pulses with css glow (try a css animation, you wont)
- I wanna make some buttons to stop and start the rainbow
- I wanna make some buttons to speedup and slowdown the rainbow
- what if you hitting rewind slowed the rainbow (by increments) then stopped it, then if you press rewind from a stopped rainbow, it goes in the other direction! How cool would that be? And keep pressing rewind increments it faster in reverse
> dev timeline slideshow: big bang->dev academy->Minded->JBA(current)
- I dont want to link my social medias just yet:
```html
<div class="icons">
    <i class="fas fa-envelope-square"></i> <!--protonmail-->
    <i class="fab fa-github"></i>
    <i class="fab fa-twitter-square"></i>
    <i class="fab fa-linkedin"></i>
</div>
```

# [done] I wanna host the site and change the domain

### services that I will need:
- DOMAIN MANAGEMENT:
  - DNS manager = `Cloudflare`
    - DNS points to name from namecheap [here](https://medium.com/employbl/launch-a-website-with-a-custom-url-using-github-pages-and-google-domains-3dd8d90cc33b)
  - Domain purchased from `namecheap`
- STATIC ASSET HOSTING:
  - [x] `Github pages` (seems to do what i need for now) [live](https://josephjvb.github.io/)
    - do custom domains for free: https://help.github.com/articles/using-a-custom-domain-with-github-pages/

- SERVER HOSTING:
  - [x] `digital ocean droplet:` [love you brad](https://www.youtube.com/watch?v=RE2PLyFqCzE)\
    - can request droplet server at some random IP address, need some dns record so I can send a request to api.joevanbio.icu

