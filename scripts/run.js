const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WaveGateway');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
    
    let elsallaZikirmatik;
    elsallaZikirmatik = await waveContract.toplamelsallama();

    let waveTxn = await waveContract.elsalla();
    await waveTxn.wait();

    elsallaZikirmatik = await waveContract.toplamelsallama();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };  
  runMain();