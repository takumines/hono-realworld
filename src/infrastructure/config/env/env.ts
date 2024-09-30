import { z } from "zod";

const zVar = z.string().min(1);

const zEnv = z.object({
  ENV: zVar,
});

const result = zEnv.safeParse(process.env);
if (!result.success) {
  throw `env type is invalid\n${result.error.errors.map((v) => `${v.message}: env.${v.path[0]}`).join("\n")}`;
}

// bunモジュール内のEnvインターフェースの拡張
declare module "bun" {
  interface Env extends z.infer<typeof zEnv> {}
}
