class StuffTab extends HTMLElement {
	connectedCallback() {
		const projects = [
			{
				title: "AA Flight",
				github: "https://github.com/bean-frog/aa-flight",
				link: null,
				linkLabel: null,
				desc: "Query flight data from the American Airlines onboard wifi."
			},
			{
				title: "Beanfrog Caffeine",
				github: "https://github.com/bean-frog/caffeine",
				link: "https://caffeine.beanfrog.xyz",
				linkLabel: "Link",
				desc: "A caffeine logging web app with Google auth and a ranking system."
			},
			{
				title: "Pi-Neopixel V2",
				github: "https://github.com/bean-frog/pi-neopixel-v2",
				link: null,
				linkLabel: null,
				desc: "Control Neopixel/ws281x LEDs over http using a Raspberry Pi."
			},
			{
				title: "DMX Neopixel",
				github: "https://github.com/bean-frog/dmx-neopixel",
				link: null,
				linkLabel: null,
				desc: "Control Neopixel/ws281x LEDs using the DMX (or ArtNet, but BYO converter) protocol and an Arduino."
			},
			{
				title: "Text Adventure",
				github: "https://github.com/bean-frog/text-adventure",
				link: "https://pages.beanfrog.xyz/creator",
				linkLabel: "Link",
				desc: "CLI Choose Your Own Adventure player, and a GUI story creation tool to match."
			},
			{
				title: "Rust Utils",
				github: "https://github.com/bean-frog/rust-utils",
				link: null,
				linkLabel: null,
				desc: "A few small CLI tools written in Rust that help with certain tasks (basically just using Rust as a scripting language)."
			},
			{
				title: "Goober FX",
				github: "https://github.com/bean-frog/GooberFX",
				link: null,
				linkLabel: null,
				desc: "4-channel theatre sound effect app thingy idk."
			},
			{
				title: "Battery Planner",
				github: "https://github.com/bean-frog/battery-planner",
				link: null,
				linkLabel: "Link",
				linkAlert: "Not quite done with this yet lol",
				desc: "Mock up nickel strip routes for Li-Ion/LiFePo4 based e-bike batteries."
			},
			{
				title: "Stupid Trivia",
				github: "https://github.com/bean-frog/stupid-trivia",
				link: null,
				linkLabel: "Link",
				linkAlert: "Not quite done with this yet lol",
				desc: "Trivia but all the answers are just stupid."
			},
			{
				title: "Tuneguessr",
				github: "https://github.com/bean-frog/tuneguessr",
				link: "https://bean-frog.github.io/tuneguessr",
				linkLabel: "Link",
				desc: "Guess which country each song is from."
			},
		]

		const cards = projects.map(p => {
			const githubLink = `<a target="_blank" href="${p.github}" class="font-bold underline">Github</a>`

			let secondLink = ''
			if (p.linkAlert) {
				secondLink = ` ∘ <a class="font-bold underline cursor-pointer" onclick="alert('${p.linkAlert}')">${p.linkLabel}</a>`
			} else if (p.link) {
				secondLink = ` ∘ <a target="_blank" href="${p.link}" class="font-bold underline">${p.linkLabel}</a>`
			}

			return `
			<div class="p-4 bg-black border border-white">
				<h2 class="text-lg font-bold">${p.title}</h2>
				<span>${githubLink}${secondLink}</span>
				<p>${p.desc}</p>
			</div>
			`
		}).join('')

		this.innerHTML = `
		<div id="tab3" class="block space-y-4 tab-content">
			${cards}
		</div>
		`
	}
}
customElements.define("stuff-tab", StuffTab)
