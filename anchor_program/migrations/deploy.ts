import { AnchorProvider, setProvider } from "@coral-xyz/anchor";
module.exports = async function (provider: AnchorProvider) {
  // Configure client to use the provider.
  setProvider(provider);

  // Add your deploy script here.
};
