Zombie Nom Nom UI
===

Repo contains the source code for the Zombie Nom Nom Game UI and it is built using `Next.js`
If you would like to build it locally please you will require `yarn` and whatever version is set in the `.node-version` file
which is currently set to the lts version of 11/22/2024(v22.11.0)

Useful Links
---

Links to other build artifacts aside from this documentation

- [Coverage Report](https://consulting.gxldcptrick.dev/zombie-nomnom-ui/coverage)
- [Storybook](https://consulting.gxldcptrick.dev/zombie-nomnom-ui/storybook)
- [API Docs](https://consulting.gxldcptrick.dev/zombie-nomnom-ui/)


Usage
---

To install the required npm packages please use `yarn` and make sure to lock the file to not try to make adjustments.

```bash
    # Install the required dependencies
    > yarn install --frozen-lockfile
```

To serve the `Next.js` application and you don't set the `PORT` env variable we will be starting the web server at default port `3000`.
This will kickstart the webpack server using hot reloading so you can mess around with the application.

```bash
    > yarn dev # start webpack with hot-reload
```

If you would like to experiement with some of our existing frontend components you can run `storybook` with hot-reloading enabled.

```bash
    > yarn storybook
```

If you would like to test and you have `make` already installed you can use our `test` target to run tests with coverage otherwise
you can use the packages `test` command to run only the tests with no coverage reports.

```bash
    > make test
    # Project Tests with coverage
    > yarn test
    # Project Tests without coverage
```

Beyond that please refer to our Contributing guide in the repo to learn how we format our PR's and Code for adding new features.