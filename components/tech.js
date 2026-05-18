// ── Sub-components ────────────────────────────────────────────────────────────

class TechCard extends HTMLElement {
	connectedCallback() {
		const title   = this.getAttribute("title")
		const desc    = this.getAttribute("desc") || ""
		const entries = JSON.parse(this.getAttribute("entries") || "{}")
		const pairs   = Object.entries(entries)

		const rows = pairs
			.map(([k, v]) => `<p><span class="font-bold">${k}:</span> ${v}</p>`)
			.join("")

		const gridClass = pairs.length >= 4 ? "grid grid-cols-2 gap-x-6" : ""

		this.innerHTML = `
		<div class="p-4 bg-black border border-white">
			<h2 class="text-lg font-bold">${title}</h2>
			${desc ? `<p class="mb-2">${desc}</p>` : ""}
			<div class="${gridClass}">${rows}</div>
		</div>
		`
	}
}
customElements.define("tech-card", TechCard)

// ── Data ──────────────────────────────────────────────────────────────────────

const TECH = [
	{
		title: "Daily Driver",
		desc: "Framework 13 that I use for everything I can",
		entries: {
			CPU: "AMD Ryzen AI 5 340 @4.9GHz",
			RAM: "64GB DDR5 (32GB x 2)",
			Graphics: "AMD Radeon 840M",
			Storage: "2TB NVME",
			OS: "Fedora",
			Shell: "fish",
			Terminal: "kitty",
			WM: "sway",
			"Other stuff": "Waybar ∘ Swaylock ∘ micro",
		},
	},
	{
		title: "Backup Laptop",
		desc: "Dell XPS 7390 with a slightly modified installation of Windows 10. This only really gets used when I absolutely need Windows, like that stupid lockdown browser for tests.",
		entries: {
			CPU: "Intel i7-1065G7",
			RAM: "16GB DDR4 (8GB x 2)",
			Graphics: "Intel Iris Plus",
			Storage: "500GB NVME",
			OS: "Windows 10 (with Chris Titus' winutil)",
			WM: "GlazeWM",
			Bar: "Komorebi",
		},
	},
	{
		title: "BeeLink Mini PC",
		desc: "distrohopping device lol",
		entries: {OS: "all of them. every single one."},
	},
	{
		title: "Server",
		desc: "Dell Latitude laptop, stripped down and used as a server.",
		entries: { OS: "Ubuntu Server 24.04 LTS" },
	},
	{
		title: "Jetson Orin Nano",
		desc: "Nvidia AI focused dev kit. Runs voice detection to control stuff like Jarvis",
		entries: {},
	},
	{
		title: "Lenovo 14W",
		desc: "A low end laptop that I use for testing stuff and flashing ROMs to phones.",
		entries: { OS: "Arch Linux", DE: "XFCE" },
	},
]

// ── Main component ────────────────────────────────────────────────────────────

class TechTab extends HTMLElement {
	connectedCallback() {
		const cards = TECH.map(t => `
			<tech-card
				title="${t.title}"
				desc="${t.desc}"
				entries='${JSON.stringify(t.entries)}'>
			</tech-card>
		`).join("")

		this.innerHTML = `
		<div id="tab5" class="block space-y-4 tab-content">
			${cards}
			<div class="p-4 bg-black border border-white">
				<p>(I'm a bit of a laptop guy, how did you know?)</p>
			</div>
		</div>
		`
	}
}
customElements.define("tech-tab", TechTab)
