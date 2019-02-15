# I wanna host the site and change the domain

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

### Progression idea
- [x] static html
  - but what is the content of my website??
- host express server & pg/mysql database: save basic user session data
- home brew, vanilla js, view engine [alexey's site](https://nomand.co/)

### PURPOSE??
- WHY am I making this website?
  - to learn how to make a website to be web guy
  - to fill in time before the cold embrace of death?

### CONTENT:
- cheesy neon theme, go as garish as you can my man
- start with basic personal content: link my accounts together
  - email
  - twitter
  - github
  - linkedin
> dev timeline slideshow: big bang->dev academy->Minded->JBA(current)
- journal pages using github api [here](https://developer.github.com/v3/repos/contents/)
  - will have to do work to parse journals markdown
- Lennie made a good point that including photos would be good. (also include small videos!)

- let the user control what the patterns are? that would be cool

### sign sequence pattern
- start effect (always the same, always yellow)
- generate a random sequence of effects & colours
    - maybe each 'effect' lasts for the same time
    - or each effect has a 'duration' associated
- after start sequence, clear int and start new interval
- call first effect with first colour
- call second effect w/ 2nd colour
- call 3rd effect w/ 3rd colour
- end effect: letters stay lit with random colour: random letter flicker at random interval

- start effect = colours light up one by one a dull yellow, then second wave of brighter yellow & increase glow

- effect1: blink on and off
- effect2: 'joe'>'van'>'bo x 2
- effect3: one coloured letter go forward and back
- effect4: all letters colour scramble
