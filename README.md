# Reproduction: nested fragment import dropped when the outer spread has @include/@skip

Related to #11026, which fixed the plain nested-fragment case. This is the same missing
import, but it only happens when the fragment that nests another fragment is itself
spread with `@include` or `@skip`.

## Run

```
npm install
npm run generate
npx tsc --noEmit src/op.generated.ts
```

## What you get

`ContainerFragment` (in `helper.tsx`) nests `MarkdownFragment`:

```graphql
fragment ContainerFragment on Query {
  thing(flag: true) {
    ...MarkdownFragment
  }
}
```

The operation spreads `ContainerFragment` conditionally:

```graphql
query Ping($flag: Boolean!) {
  ...ContainerFragment @include(if: $flag)
}
```

`src/op.generated.ts` inlines `ContainerFragment`'s fields directly (because of the
`@include`), uses `MarkdownFragment`, but never imports it. The `ContainerFragment`
import it does have ends up unused:

```ts
import { ContainerFragment } from './helper.generated'; // unused

export type Ping =
  | { thing?: MarkdownFragment }  // used, not imported
  | Record<PropertyKey, never>
;
```

```
src/op.generated.ts(14,15): error TS2304: Cannot find name 'MarkdownFragment'.
```

## Narrowing it down

Removing `@include(if: $flag)` from the operation fixes it (matches #11026's fix).
Keeping `@include` and removing the nested fragment (just inlining `MarkdownFragment`'s
field directly in `ContainerFragment`) also avoids the bug, since there's no nested
fragment to lose.
