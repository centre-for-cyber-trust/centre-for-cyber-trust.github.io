# Centre for Cyber Trust - Homepage

## Dependencies

To build the site locally or use the Hugo CLI, you need:
- The [npm](https://www.npmjs.com/) package manager. I suggest installing npm via [nvm](https://github.com/nvm-sh/nvm).

All remaining dependencies will be downloaded by executing
```sh
npm install
```

Note that the pre-built Hugo binary will be located at `bin/hugo/hugo`.


## Adding New Content

The website is currently structured around four pages.

- "Home" (location `content/_index.md`)
- "Team" (location `content/team/_index.md`)
- "Projects" (location `content/projects/_index.md`)
- "Publications" (location `content/publications/_index.md`)

The sites "Home", "Team", and "Publications" were designed to be stand-alone.
Please only modify the respective `_index.md` file and do not add new posts.

The "Projects" website was designed to feature sub-posts.
To create a new post (describing a project), run:

```sh
bin/hugo/hugo new content projects/NAME.md
```

Alternatively, if you don't want to use `hugo`, you can also simply create that new markdown file yourself and copy a header from one of the other files.
Make sure to select a date that is sensible.

`NAME` will be the URL slug for the project, i.e., it will be hosted at `/projects/NAME`.
Posts have two parts: a header (within the `---`s) and the body (after the header).

There are three types of things you can put into a post's body:

- Markdown. This will be compiled to HTML. You probably know Markdown. Here is a [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
- Raw HTML. Since Markdown is compiled to HTML, you can also include raw HTML directly. This can be sometimes beneficial, but is also risky. In general, it's better to write things in plain markdown.
- Shortcodes. This is a Hugo feature. Shortcodes are defined by the template used and give you more styling options.
You can find a list of our template's shortcodes [here](https://github.com/willfaught/paige#shortcodes).

### Why Is My Post not Showing Up?

You added a post, and it's not rendered on the homepage?
Probably it's a draft still.
Set `draft: false` in the post's header.

## Compiling the Site Locally

Before you can build the site, you need to run:

```sh
npm install
```

This will download a pre-built Hugo binary and install a CSS compiler locally.
This compiler needs to be on the PATH.
You can find examples of how to add it in the scripts `mac-hugo.sh`, `mac-arm-hugo.sh`, and `win-hugo.ps1` (x86-based macOS, arm-based macOS, and PowerShell for Windows resp.).
You can use these scripts as you would use the `hugo` command.
For example, the following command launches the Hugo development server with draft-rendering enabled:

```sh
./mac-hugo.sh server -D
```
