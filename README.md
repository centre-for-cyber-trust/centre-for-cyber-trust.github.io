# Centre for Cyber Trust - Homepage

## Dependencies

To use the Hugo CLI (e.g., to create new posts), you need to install:

- The static site builder [Hugo](https://gohugo.io/).

If you also want to build the site locally, you additionally require:

- The [Go](https://go.dev/) programming language.
- The [npm](https://www.npmjs.com/) package manager. I suggest installing npm via [nvm](https://github.com/nvm-sh/nvm).

## Adding New Content

The website is currently structured around four pages.

- "Home" (location `content/_index.md`)
- "Team" (location `content/team/_index.md`)
- "Projects" (location `content/projects/_index.md`)
- "Publications" (location `content/publications/_index.md`)

The sites "Home", "Team", and "Publications" were designed to be stand-alone.
Please only modify the respective `_index.md` file and do not add new posts.

The "Projects" website was designed to feature sub-posts.
To create a new project, run:

```sh
hugo new content projects/NAME.md
```

`NAME` will be the URL slug for the project, i.e., it will be hosted at `/projects/NAME`.
Posts have two parts: a header (within the `---`s) and the body (after the header).

There are three types of things you can put into a post's body:

- Markdown. This will be compiled to HTML. You probably know Markdown. Here is a [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
- Raw HTML. Since Markdown is compiled to HTML, you can also include raw HTML directly. This can be sometimes beneficial, but is also risky. In general, it's better to write things in plain markdown.
- Shortcodes. This is a Hugo feature. Shortcodes are defined by the template used and give you more styling options.
You can find a list of our template's shortcodes [here](https://github.com/willfaught/paige#shortcodes).

## Compiling the Site Locally

Before you can build the site, you need to run:

```sh
npm install
```

This will install a CSS compiler locally.
This compiler needs to be on the PATH.
You can find examples of how to add it in the two scripts `mac-hugo.sh` (bash for MAC) and `win-hugo.ps1` (PowerShell for Windows).
You can use these scripts as you would use the `hugo` command.
For example, the following command launches the Hugo development server with draft-rendering enabled:

```sh
./mac-hugo.sh server -D
```
