class ContactTab extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<div class="p-4 bg-black border border-white">
			<h2 class="text-lg font-bold">Get In Touch</h2>
			<span>
				<a target="_blank" href="https://github.com/bean-frog" class="font-bold underline">Github</a> ∘
				<a href="mailto:gkieran32855@gmail.com" class="font-bold underline">Email</a> ∘
        <a href="https://linkedin.com/in/graeme-kieran" class="font-bold underline">LinkedIn</a>
			</span>
		</div>
		`
  }
}
customElements.define("contact-tab", ContactTab)
