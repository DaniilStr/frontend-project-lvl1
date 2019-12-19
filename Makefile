install: 
	npm install

start: 
	npx babel-node dist/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint
