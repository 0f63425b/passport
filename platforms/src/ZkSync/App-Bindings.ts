import { AppContext, ProviderPayload } from "../types";
import { Platform } from "../utils/platform";
export class ZkSyncPlatform extends Platform {
  path: string;
  platformId = "ZkSync";
  isEVM = true;

  async getProviderPayload(appContext: AppContext): Promise<ProviderPayload> {
    const result = await Promise.resolve({});
    return result;
  }
}
