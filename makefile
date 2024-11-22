test:
	yarn test --coverage 
lint:
	yarn lint --fix
install:
	yarn install --frozen-lockfile
start-dev:
	yarn dev
build:
	yarn build
docs:
	yarn storybook
build-ui-docs:
	yarn build-storybook