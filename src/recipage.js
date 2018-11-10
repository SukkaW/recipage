function Recipage(config) {
    console.log('Hello, this Recipage')
    console.log(config)

    // Fetch Helper
    const get = (url) =>
        fetch(url, {
            method: 'GET'
        }).then(resp => Promise.all([resp.ok, resp.status, resp])
        ).then(([ok, status, json]) => {
            if (ok) {
                return json;
            } else {
                throw new Error(JSON.stringify(json.error));
            }
        }).catch(error => {
            throw error;
        });

    (() => {
        get(config.url)
            .then(res => res.text())
            .then(res => {
                marked.setOptions({
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    modifyAnchors: '',
                    autolink: true
                  
                })
                return marked(res)
            })
            .then(html => {
                let mainHtml = `<article id="content" class="markdown-body">${html}</article>`;
                document.getElementById('app').innerHTML = mainHtml;
            })
    })();
}