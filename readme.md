# I wanna host the site and change the domain

### NOTE:
Alexy from work showed me his website. He basically has a home brewed front end js framework that uses ``${template_literals}`` to make stringified html all with vanilla js, ends up going: 
```js
document.body.innerHTML = '<div id="view">' + header + content + footer + '</div>'
```
I really like that idea. Or something similar.
Alternative(traditional): serve more html (means more requests to static resource for html)
if I serve a js file that can manipulate strings of html then no get requests 😎

- still create&host a server, but that will be just for saving data

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