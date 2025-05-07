import type { AnchorProvider } from "@coral-xyz/anchor";
import { setProvider } from "@coral-xyz/anchor";

module.exports = async function (provider: AnchorProvider) {
  setProvider(provider);
};
module.exports = async function (provider: AnchorProvider) {
  // Configure client to use the provider.
  setProvider(provider);

  // Add your deploy script here.
};
