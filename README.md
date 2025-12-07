# ngera1.github.io

Using Hugo (with the Academic theme) and RStudio (plus this really helpful [tutorial](http://research.me.udel.edu/~vroy/post/hugo/hugo/)) to make a website

# The `docs/` folder contains the HTML/CSS files that github will serve

# publish.R

Script to regenerate `docs` folder used to serve the webpage.

To run it (from RStudio), execute `source("publish.R", echo=TRUE)` from the
Console.

# or just build with hugo
```
brew install hugo
hugo server
hugo --minify 2>&1 | tail -5
```