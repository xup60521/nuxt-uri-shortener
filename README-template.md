# Frontend Mentor Challenge - URL shortening API landing page

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G "https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G").

## Overview

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

- Shorten any valid URL

- See a list of their shortened links, even after refreshing the browser

- Copy the shortened link to their clipboard in a single click

- Receive an error message when the `form` is submitted if:

   - The `input` field is empty

Links:

- GitHub Repo: <https://github.com/xup60521/nuxt-uri-shortener>

- Live website: <https://nuxt-uri-shortener.vercel.app/>

```bash
# install dependencies
pnpm install
# start dev server
pnpm run dev
```

## My process

### Built with

- Vue 3

- Nuxt.js

- tailwindCSS

### What I learned

#### Weird fetch behavior

Initially, I use vite and vue to build this project. Although it is my first time using Vue, I found that it is not hard to learn.

However, when I try to implement the cleanuri API, it failed all the time. The console always shows that it is blocked by CORS.

I was lost. I don’t know what to do. After several hours debugging, checking whether the URL is wrong or not. I also tried to use `axios`, hopping for the best. Of course it didn’t work.

```tsx
// App.vue
fetch("https://cleanuri.com/api/v1/shorten", {
  method: "POST",
  headers: {
      "Content-Type": "application/x-www-form-urlencoded",
  },
    body: "https://bing.com",
})
// => blocked by CORS
```

Next day, I decided to do some test on the API it self. I used Postman, and it works. Then I create a new JS file, trying to test the API further.

Guess what? It works. It turned out that vite has some weird behavior when fetching something. Whenever I call a fetch function on the frontend, it tries to find the corresponding API end point on my own computer.

```tsx
// index.ts
fetch("https://cleanuri.com/api/v1/shorten", {
  method: "POST",
  headers: {
      "Content-Type": "application/x-www-form-urlencoded",
  },
    body: "https://bing.com",
})
// bun run index.ts
// => success
```

Noticing that, I assumed that if I move the fetching logic to a defined backend, it should probably work.

So I search for the meta-framework for Vue, finding Nuxt.js, and try to use it to solve this fetch problem.

Defining API route on Nuxt.js is very similar to that in Next.js. 

```tsx
// api/short.ts
export default defineEventHandler(async (event) => {
  if (event.method === "POST") {
    const url = await readBody(event);
    const data = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
      body: url,
    }).then((res) => res.json());
    console.log(data)
    return data;
  }
});
```

On the frontend, we can simply hit `/api/short` and everything should work find.

## Resources

- Nuxt.js docs - <https://nuxt.com/docs/getting-started/introduction>

- Vue 3 docs - <https://vuejs.org/guide/introduction.html>

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- cleanuri.com API docs - <https://cleanuri.com/docs>