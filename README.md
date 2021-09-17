# Testing Playwright Test

## Running Tests

```sh
npx playwright test
```

### Running on Headless state

```sh
npx playwright test --headed
```

You can also set the browser if needed.

### When need snapshots

```sh
npx playwright test --update-snapshots
```

### Available fixtures

- `page`
- `context`
- `browser`
- `browserName`
