# I wanna host the site and change the domain

I have bought a domain for just over a dollar a year: `joevanbio.icu` No idea what Im doing by the way

Bought through namecheap: order number 41939727

I added 3 records, resource [here](https://medium.com/employbl/launch-a-website-with-a-custom-url-using-github-pages-and-google-domains-3dd8d90cc33b)
```js
a = { name: @, value: githubIPnumber1 }
a = { name: @, value: githubIPnumber2 }
cname = { name: www, value: joevanbio.icu }
```

I have done some config. No idea if it is what I need to do. Something something can take 24 hours for DNS service to point domain at Github servers so lets check back tomorrow to see what I need to fix 👍

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
  - `NGinX`
  - `Site Host`
  - `AWS`

### Progression idea
- static html
- server rendered template (ejs)
- database (?)

### stretch
- use some C# why doncha