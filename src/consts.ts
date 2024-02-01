// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Freddy Montes";
export const SITE_DESCRIPTION = "Leading teams to create impactful products, my UI/UX and frontend expertise fuels my role as a Technical Product Manager. I blend design and technical skills for problem-solving, ensuring each project aligns with business goals to effectively deliver value.";
export const SITE_SUBTITLE = "Driving Product Success";
export const TWITTER_HANDLE = "@fmontes";
export const MY_NAME = "Freddy Montes";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
