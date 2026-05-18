class HomeTab extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<div id="tab1" class="block space-y-4 tab-content">
			<div class="p-4 bg-black border border-white">
				<h2 onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-lg font-bold cursor-pointer">Hello World!</h2>
				<div class="hidden p-2 mt-2 text-white bg-black">
					I've hidden <span class="font-bold">4</span> easter eggs around this website. Can you find them all? (you've already found one!)
				</div>
			</div>

			<div class="p-4 bg-black border border-white">
				<h2 class="text-lg font-bold">About Me</h2>
				<div class="flex flex-col">
					<p>Name: <span class="font-bold">Graeme Kieran / beanfrog</span></p>
					<p>Occupation: <span class="font-bold">Student @ University of Oregon</span></p>
					<p>Location: <span class="font-bold">California/Oregon, USA</span></p>
					<p>Interests: <span class="font-bold">General tinkering and building, my dogs (of course), computers and technology, redwood forests, fishing</span></p>
				</div>
			</div>
      <contact-tab class="block"></contact-tab>
			<div class="py-96"></div>

			<div class="p-4 bg-black border border-white">
				<h2 class="text-lg font-bold">🐧 Penguins</h2>
				<p>Two penguins are paddling a canoe through the desert. One says to the other, "Where's the paddle", the other says "sure does!"</p>
        <p>A third penguin, who appeared out of thin air, says "I use arch btw"</p>
			</div>
		</div>
		`
  }
}
customElements.define("home-tab", HomeTab)
