// definitely not the konami code
const a = (() => {
    const b = [
        "QXJyb3dVcA==", "QXJyb3dVcA==", "QXJyb3dEb3du", "QXJyb3dEb3du",
        "QXJyb3dMZWZ0", "QXJyb3dSaWdodA==", "QXJyb3dMZWZ0", "QXJyb3dSaWdodA==",
        "Yg==", "YQ=="
    ];
    const c = b.map(code => atob(code));
    let d = 0;
    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === c[d].toLowerCase()) {
            d++;
            if (d === c.length) {
                window.location.href = atob('aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1pRExtWVo1SHFnTQ==');
            }
        } else {
            d = 0;
        }
    });
})();
