async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  
  const ownerAddress = "0x27AAC726F6E5124FC567Fb78F80a44BFa33D8e2C";
  const SmartMatrixForsage = await ethers.getContractFactory("SmartMatrixForsage");
  const smartMatrixForsage = await SmartMatrixForsage.deploy(ownerAddress);
  
  console.log("SmartMatrixForsage deployed to:", smartMatrixForsage.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
  });
