import { Elysia } from 'elysia';

const app = new Elysia().get("/", () => "Hello World!").listen(3333);

console.log(`Server running on http://${app.server?.hostname}:${app.server?.port}`);
