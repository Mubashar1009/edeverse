
import { setProvider } from "@coral-xyz/anchor";
import type { AnchorProvider } from "@coral-xyz/anchor";


export default async function (provider: AnchorProvider) {
  setProvider(provider);
}

