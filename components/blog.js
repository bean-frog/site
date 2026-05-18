const BASE = 'https://raw.githubusercontent.com/bean-frog/bean-frog.github.io/main/posts'

const toSlug = str => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

class BlogTab extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<style>
			.blog-content h1 { font-size: 1.5rem; font-weight: bold; margin: 1rem 0 0.5rem; }
			.blog-content h2 { font-size: 1.25rem; font-weight: bold; margin: 1rem 0 0.5rem; }
			.blog-content h3 { font-size: 1.1rem; font-weight: bold; margin: 0.75rem 0 0.25rem; }
			.blog-content p { margin: 0.5rem 0; line-height: 1.6; }
			.blog-content ul { list-style: disc; padding-left: 1.5rem; margin: 0.5rem 0; }
			.blog-content ol { list-style: decimal; padding-left: 1.5rem; margin: 0.5rem 0; }
			.blog-content li { margin: 0.25rem 0; }
			.blog-content code { background: #222; padding: 0.1em 0.3em; font-family: monospace; }
			.blog-content pre { background: #111; border: 1px solid #fff; padding: 0.75rem; overflow-x: auto; margin: 0.75rem 0; }
			.blog-content pre code { background: none; padding: 0; }
			.blog-content blockquote { border-left: 3px solid #fff; padding-left: 1rem; opacity: 0.75; margin: 0.5rem 0; }
			.blog-content a { text-decoration: underline; }
			.blog-content hr { border-color: #fff; margin: 1rem 0; }
		</style>
		<div id="tab6" class="block tab-content">
			<div id="blog-list"><p style="opacity:0.5">loading...</p></div>
			<div id="blog-post" class="hidden"></div>
		</div>
		`
		this._initialPost = new URLSearchParams(window.location.search).get('post')
		this.loadIndex()
	}

	async loadIndex() {
		const listEl = this.querySelector('#blog-list')
		try {
			const res = await fetch(`${BASE}/index.json`)
			const posts = await res.json()
			listEl.innerHTML = posts.map(p => `
				<div class="p-4 border border-white cursor-pointer hover:bg-white hover:text-black" data-file="${p.file}" data-title="${p.title}" style="margin-bottom:1rem">
					<div class="flex justify-between">
						<span class="font-bold">${p.title}</span>
						<span style="opacity:0.5">${p.date}</span>
					</div>
					${p.desc ? `<p style="font-size:0.875rem;margin-top:0.25rem">${p.desc}</p>` : ''}
				</div>
			`).join('')
			listEl.querySelectorAll('[data-file]').forEach(el => {
				el.addEventListener('click', () => this.loadPost(el.dataset.file, el.dataset.title))
			})
			if (this._initialPost) {
				const match = posts.find(p => toSlug(p.title) === this._initialPost)
				if (match) {
					document.querySelector('.tab-btn[data-tabname="blog"]')?.click()
					this.loadPost(match.file, match.title)
				}
			}
		} catch (e) {
			listEl.innerHTML = `<p style="opacity:0.5">failed to load posts</p>`
		}
	}

	async loadPost(file, title) {
		const listEl = this.querySelector('#blog-list')
		const postEl = this.querySelector('#blog-post')
		listEl.classList.add('hidden')
		postEl.classList.remove('hidden')
		postEl.innerHTML = `<p style="opacity:0.5">loading...</p>`
		history.replaceState(null, "", `${location.pathname}?post=${toSlug(title ?? file)}#blog`)
		const goBack = () => {
			postEl.classList.add('hidden')
			listEl.classList.remove('hidden')
			history.replaceState(null, "", `${location.pathname}#blog`)
		}
		try {
			const res = await fetch(`${BASE}/${file}`)
			let md = await res.text()
			md = md.replace(/<!--META[^>]*-->\s*/, '')
			postEl.innerHTML = `
				<button class="border border-white hover:bg-white hover:text-black" style="padding:0.25rem 0.5rem;margin-bottom:1rem" id="blog-back">&#8592; back</button>
				<div class="blog-content">${marked.parse(md)}</div>
			`
			postEl.querySelector('#blog-back').addEventListener('click', goBack)
		} catch (e) {
			postEl.innerHTML = `
				<button class="border border-white hover:bg-white hover:text-black" style="padding:0.25rem 0.5rem;margin-bottom:1rem" id="blog-back">&#8592; back</button>
				<p style="opacity:0.5">failed to load post</p>
			`
			postEl.querySelector('#blog-back').addEventListener('click', goBack)
		}
	}
}
customElements.define("blog-tab", BlogTab)
