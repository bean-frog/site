            // // hacky fix for stupid thing
            // document.addEventListener("DOMContentLoaded", function() {
            //     document.querySelector("[data-tab='tab1']").click();
            // })
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        const tabName = button.getAttribute('data-tabname');

        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));
        document.getElementById(tabId).classList.remove('hidden');

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('bg-white', 'text-black');
            btn.classList.add('bg-black', 'text-white');
        });
        button.classList.remove('bg-black', 'text-white');
        button.classList.add('bg-white', 'text-black');

        history.replaceState(null, "", `#${tabName}`);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1); // remove #
    if (hash) {
        const targetButton = document.querySelector(`.tab-btn[data-tabname="${hash}"]`);
        if (targetButton) targetButton.click();
    } else {
        const firstButton = document.querySelector('.tab-btn');
        if (firstButton) firstButton.click();
    }
});
