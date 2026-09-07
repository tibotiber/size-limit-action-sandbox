# size-limit-action sandbox

Throwaway repo for exercising `smplrspace/size-limit-action`'s `use_artifacts` feature
(PT-3613) end to end, on real GitHub Actions, without touching smplrspace/smplrspace.

The "build" (`build.js`) just writes `dist/index.js` at a size controlled by `SIZE.txt`,
so a PR can change the bundle size by editing one number - no real bundler needed, so runs
finish in seconds.

- `.github/workflows/size-limit.yml` - runs on pull requests, comments the size delta.
- `.github/workflows/producer.yml` - runs on push to `main`, produces (or reuses) the
  baseline result pull requests compare against.

Both reference `smplrspace/size-limit-action@feature/use-artifacts` directly by branch.
