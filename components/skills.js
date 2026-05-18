class SkillsTab extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<div id="tab4" class="block space-y-4 tab-content">
			<div class="p-4 bg-black border border-white">
				<h2 class="text-lg font-bold">🟢 Comfortable</h2>
				<span class="font-bold">HTML/CSS</span> ∘
				<span class="font-bold">Javascript</span> ∘
				<span class="font-bold">TailwindCSS/DaisyUI</span> ∘
				<span class="font-bold">Python</span> ∘
				<span class="font-bold">Typescript</span> ∘
				<span class="font-bold">React</span> ∘
				<span class="font-bold">NodeJS</span> ∘
				<span class="font-bold">Express</span> ∘
				<span class="font-bold">Arduino</span> ∘
        <span class="font-bold">DMX512</span> ∘
				<span class="font-bold">Linux</span>
			</div>
			<div class="p-4 bg-black border border-white">
				<h2 class="text-lg font-bold">🟡 Competent</h2>
				<span class="font-bold">C</span> ∘
				<span class="font-bold">SQLite</span> ∘
				<span class="font-bold">Firebase</span> ∘
				<span class="font-bold">Vercel</span> ∘
				<span class="font-bold">Java</span> ∘
        <span class="font-bold">Rust</span> ∘

			</div>
			<div class="p-4 bg-black border border-white">
				<h2 class="text-lg font-bold">🔴 Learning</h2>
				<span class="font-bold">Ruby</span> ∘
				<span class="font-bold">Docker</span> ∘
				<span class="font-bold">Kubernetes</span>
			</div>
			<div class="p-4 bg-black border border-white">
				<a href="https://certificates.cs50.io/a92aeccd-a23d-4088-9d85-b36b0d107ec7.pdf?size=letter" target="_blank">
					<h2 class="text-lg font-bold">CS50 @ Harvard</h2>
					<img alt="Harvard CS50 certificate" src="https://certificates.cs50.io/a92aeccd-a23d-4088-9d85-b36b0d107ec7.png?size=letter" class="w-1/2 border border-white opacity-75" />
				</a>
			</div>
		</div>
		`
  }
}
customElements.define("skills-tab", SkillsTab)
