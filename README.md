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
hugo server -M        # -M renders to memory; plain `hugo server` writes into docs/
hugo --minify 2>&1 | tail -5
```

# Project pages

Nerfies-style pages live in their own folder with `type: project`, e.g.
`content/mr-phicc/index.md` (served at `/mr-phicc/`). Put figures, videos and the
poster PDF in that folder next to `index.md`. Copy the folder to start another one.

# Blog

```
hugo new content blog/my-post.md   # starts as a draft
hugo server -D -M                  # preview drafts without writing them to docs/
```

Set `draft: false` and rebuild to publish. The "Blog" navbar link appears once a
post is published. Add `math: true` to a post for LaTeX.