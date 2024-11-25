# testing-dependency-method-with-yarn-modern

Steps to reproduce the issue I mentioned:

1. Run `yarn` to install dependencies
2. Make sure that it is running yarn 4.5.3
2. Run `yarn start`
4. See that the user has `react-dom@18.3.1` and `@react-email/render` has `react-dom@19.0.0-rc-fb9a90fa48-20240614`

You can also try changing the nodeLinker option in `.yarnrc.yml`, but all of the options available still have this issue.
