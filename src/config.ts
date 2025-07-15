import dotenv from "dotenv";
dotenv.config();

type Config = {
  db: DBConfig;
  api: APIConfig;
};

type APIConfig = {
  port: string | undefined;
  filepathRoot: string;
};

type DBConfig = {
  url: string | undefined;
};

export const config: Config = {
  api: {
    port: process.env.PORT,
    filepathRoot: "./src/assets",
  },
  db: {
    url: "libsql://notely-db-puroresuradave.aws-us-west-2.turso.io?authToken=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NTI0NzQ3MzMsImlkIjoiZTJlYTIxZjQtOGJjNC00ZjI0LTlkMmEtMGRmZDRlNWIyYzlkIiwicmlkIjoiNjQxNzE4NWUtZDM3My00ZWFhLWE0NGQtODMwYzc0NTU3NmM3In0.bQaj4OO3tVMp6X-vAMiJxwova4BopwV_zLWeccp6McelOPlMaYEt9L0pwr3-GWpznY6cUcFX55l3UbqoV4hmCA",
  },
};
