// import { IS_CF_PAGES } from '~/utils/platform-adapter';

// function getCookieSessionStorageFactory() {
//     // if (IS_CF_PAGES) {
//     //     return require('@remix-run/cloudflare').createCookieSessionStorage;
//     // } else {
//     //     // This hack is to prevent the `node` package being bundled in the
//     //     // Cloudflare Pages context, which causes an error.
//     //     let imp = ['@remix-run', 'node'];
//     //     return require(imp.join('/')).createCookieSessionStorage;
//     // }
//     return require('@remix-run/node').createCookieSessionStorage;
// }

import { createCookieSessionStorage } from '@remix-run/node';

export const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "_session", // use any name you want here
        sameSite: "lax", // this helps with CSRF
        path: "/", // remember to add this so the cookie will work in all routes
        httpOnly: true, // for security reasons, make this cookie http only
        secrets: [ process.env.COOKIE_SECRET || 'supersecret' ], // replace this with an actual secret
        secure: process.env.NODE_ENV === "production", // enable this in prod only
      },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
