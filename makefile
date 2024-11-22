test:
	yarn test --coverage --coverageReporters json-summary
lint:
	yarn lint --fix
install:
	yarn install --frozen-lockfile
start-dev:
	yarn dev
build:
	yarn build