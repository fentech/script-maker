import { execSync } from "child_process";

const executeCmd = async (cmd: string): Promise<void | Error> =>
  await new Promise((resolve, reject): void => {
    try {
      execSync(cmd, { stdio: "inherit" });
      resolve();
    } catch (err) {
      reject(err);
    }
  });

export default executeCmd;
