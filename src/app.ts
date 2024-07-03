import { Server } from "./config/server";

const server = new Server();

server.start({ PORT: 3000 });