class TabSection extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div class="flex border-b-[3px] border-white bg-black text-white">
			<button class="px-4 py-1 text-black bg-white border-r border-white tab-btn" data-tab="tab1" data-tabname="home">Home</button>
			<button class="px-4 py-1 bg-black border-r border-white hover:bg-white hover:text-black tab-btn" data-tab="tab3" data-tabname="work">My Stuff</button>
			<button class="px-4 py-1 bg-black border-r border-white hover:bg-white hover:text-black tab-btn" data-tab="tab4" data-tabname="skills">Skills/Certs</button>
			<button class="px-4 py-1 bg-black border-r border-white hover:bg-white hover:text-black tab-btn" data-tab="tab5" data-tabname="tech">Tech</button>
			<button class="px-4 py-1 bg-black border-r border-white hover:bg-white hover:text-black tab-btn" data-tab="tab6" data-tabname="blog">Blog</button>
		</div>
		`
	}
}
customElements.define("tab-section", TabSection)
