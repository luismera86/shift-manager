import express from "express";

interface ConfigServer{
  PORT: number;
}

export class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  private middleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }

  public start(config: ConfigServer): void {
    const { PORT } = config;
    this.middleware();
    this.routes();
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}
