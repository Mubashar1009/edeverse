
import { AnchorProvider, setProvider } from "@coral-xyz/anchor/dist/cjs/provider";

module.exports = async function (provider: AnchorProvider) {
  // Configure client to use the provider.
  setProvider(provider);

  // Add your deploy script here.
};
