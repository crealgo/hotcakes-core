import fs from 'fs';

const config = {
	"compilerOptions": {
		"target": "ESNext",
		"module": "ESNext",
		"moduleResolution": "Node",
		"allowJs": true,
		"checkJs": true,
		"allowSyntheticDefaultImports": true,
		"allowUmdGlobalAccess": true,
		"alwaysStrict": true,
		"declaration": true,
		"forceConsistentCasingInFileNames": true,
		"incremental": true,
		"jsx": "react-jsx",
		"jsxImportSource": "react",
		"noEmit": true,
		"lib": [
			"ESNext",
			"DOM",
			"DOM.Iterable"
		],
		"resolveJsonModule": true,
		"strict": true
	},
}

fs.writeFileSync('lib/tsconfig.json', JSON.stringify(config, null, 2));
