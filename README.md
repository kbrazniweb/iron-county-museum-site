# Iron County Museum Site

Redesigned one-page Next.js site for the Iron County Historical Museum in Caspian, Michigan.
Includes a static blog with pre-rendered article pages.

Source content was adapted from the public museum website:

- https://ironcountymuseum.org/
- https://ironcountymuseum.org/visit/
- https://ironcountymuseum.org/exhibits/
- https://ironcountymuseum.org/eventspage/

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run format
npm run lint
npm run build
```

## AWS Amplify

This repository includes `amplify.yml` for a GitHub-connected Amplify app.

Build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - "**/*"
  cache:
    paths:
      - node_modules/**/*
```

After connecting the GitHub repo in AWS Amplify, use the default Next.js hosting settings and select the `main` branch.
