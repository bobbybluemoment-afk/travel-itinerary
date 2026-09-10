# GitHub and Cloudflare Pages deployment

Use this only after the user asks to publish. Confirm the ZIP is safe for public upload before starting. Guide one completed screen at a time.

## GitHub

1. Sign in and choose **New repository**.
2. Enter a simple name such as `my-trip-2026`.
3. Choose **Public** for the simplest Cloudflare connection and explain that the source contents become public.
4. Create the repository without starter files.
5. Extract the ZIP. Upload the files inside the folder so `index.html` is at the repository root.
6. Commit the files.

Do not request credentials. If the repository is missing in Cloudflare, guide the user to update the Cloudflare GitHub App repository access.

## Cloudflare Pages

Labels may change; use the closest current **Workers & Pages / Create / Pages / Connect to Git** path.

1. Connect GitHub and select the repository.
2. Set the production branch to `main`.
3. For this static package, use no framework preset and leave the build command empty.
4. Set the output directory to `/` or the dashboard's repository-root equivalent.
5. Deploy and wait for success.
6. Test the generated `pages.dev` address on phone and desktop.

If the dashboard rejects `/`, regenerate the package with public files inside `public/` and set the output directory to `public`.

## Troubleshooting

- `404`: verify `index.html` is at the configured output root.
- repository missing: update GitHub App access and refresh.
- automatic `npm` or `pnpm` install: remove the build command and framework preset.
- blank page: verify relative asset paths and inspect the browser console.
- desktop works but phone fails: test the direct `pages.dev` URL and check whether the in-app browser or network blocks the domain.

Stop after a failed step and ask for the exact error or screenshot. Do not continue as if deployment succeeded.
