const { hooks } = require("@adonisjs/ignitor");

hooks.after.providersBooted(async () => {
    const View = use("View");
    const Env = use("Env");
    const Helpers = use("Helpers");


	const GET_MANIFEST = (ENTRY) => {
        let SCRIPT = `<script type="module" src="http://localhost:3000/@vite/client"></script>\n\t`
			SCRIPT += `<script type="module">\n\t\t`
			SCRIPT += `import RefreshRuntime from "http://localhost:3000/@react-refresh"\n\t\t`
			SCRIPT += `RefreshRuntime.injectIntoGlobalHook(window)\n\t\t`
			SCRIPT += `window.$RefreshReg$ = () => {}\n\t\t`
			SCRIPT += `window.$RefreshSig$ = () => (type) => type\n\t\t`
			SCRIPT += `window.__vite_plugin_react_preamble_installed__ = true\n\t`
			SCRIPT += `</script>\n\t`
			SCRIPT += `<script type="module" src="http://localhost:3000/${ENTRY}"></script>`;
	    let CSS = "";
		const node_env = Env.get("NODE_ENV", process.env.NODE_ENV);
		if (node_env == "development") return {SCRIPT,CSS};
		try {
			const manifest = require(Helpers.publicPath("dist/manifest.json"));
			if (manifest) {
				const manObj = manifest[ENTRY];
				SCRIPT = `<script type="module" src="/dist/${manObj.file}"></script>`;
				if (manObj.css && manObj.css.length > 0) {
					for (let index = 0; index < manObj.css.length; index++) {
						if(index > 0) CSS += `\n\t`;
						CSS += `<link rel="stylesheet" href="/dist/${manObj.css[index]}">`;
					}
				}
			}
		} catch (error) {
			console.log(error);
		}
        return {SCRIPT,CSS};
	};

	View.global("VITE_JS", (ENTRY) => {
		const { SCRIPT } = GET_MANIFEST(ENTRY);
        return SCRIPT || ""
	});
    View.global("VITE_CSS", (ENTRY) => {
		const { CSS } = GET_MANIFEST(ENTRY);
        return CSS || ""
	});

	View.global("PATH", (f) => {
		return Helpers.publicPath(f);
	});
});
