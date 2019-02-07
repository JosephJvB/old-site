# I wanna host the site and change the domain

### services that I will need:
- DOMAIN MANAGEMENT:
  - DNS manager = `Cloudflare`
  - Domain purchased from `namecheap`
- STATIC ASSET HOSTING:
  - [x] `Github pages` (seems to do what i need for now) [live](https://josephjvb.github.io/)
    - do custom domains for free: https://help.github.com/articles/using-a-custom-domain-with-github-pages/
  - `google firebase` (maybe later)
    - uses fastly cdn which is what changelog uses: advertising works ay?

- SERVER HOSTING:
  - `digital ocean droplet:` [love you brad](https://www.youtube.com/watch?v=RE2PLyFqCzE)\
    - have set it up, have tried to set it up as to answer requests at api.joevanbio.icu but only time will tell if that has worked.
    - I'll write a small expresss server that listens for a request and sends something in return

### Progression idea
- static html
- host express server & pg/mysql database: save basic user session data
- home brew, vanilla js, view engine [alexey's site](https://nomand.co/)

https://developer.github.com/v3/repos/contents/

### stretch
- use some C# why doncha

I have bought a domain for just over a dollar a year: `joevanbio.icu` No idea what Im doing by the way

Bought through namecheap: order number 41939727

I added 3 records, resource [here](https://medium.com/employbl/launch-a-website-with-a-custom-url-using-github-pages-and-google-domains-3dd8d90cc33b)
```js
a = { name: @, value: githubIPnumber1 }
a = { name: @, value: githubIPnumber2 }
cname = { name: www, value: joevanbio.icu }
```
I dont know if I need them all, do I need to have two a records?
how do I get server IPs in the future? Could I have used josephjvb.github.io instead? (the raw github pages url) 