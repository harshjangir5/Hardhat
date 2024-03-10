const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("Lock", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    let owner, otherAccount;
    let ownerInstance;
    before(async () => {
  
    // Contracts are deployed using the first signer/account by default
       [owner, otherAccount] = await ethers.getSigners();
  
      const Owner = await ethers.getContractFactory("Owner");
       ownerInstance = await Owner.deploy();
      console.log("ownerInstance",await ownerInstance);

    //   to get the events

      const interface = ownerInstance.interface;
      const events = interface.fragments.filter(fragment => fragment.type === 'event');
      console.log(events); // This will log all the event fragments
      

    //   return { lock, unlockTime, lockedAmount, owner, otherAccount };
    })

  
    describe("Deployment", function () {
      it("Should set the right unlockTime", async function () {
        console.log("oldOwner",await ownerInstance.getOwner())
        // chnging old owner to new owner

      await ownerInstance.changeOwner(otherAccount)
      
    //   const interface = ownerInstance.interface;
    //   const events = interface.fragments.filter(fragment => fragment.type === 'event');
    //    console.log(events); 

                //  TO get the perameters

//       const ownerSetEvent = events.find(event => event.name === 'OwnerSet');
// ownerSetEvent.inputs.forEach((input, index) => {
//   console.log(`Parameter ${index}:`);
//   console.log(`Name: ${input.name}`);
//   console.log(`Type: ${input.type}`);
//   console.log(`Indexed: ${input.indexed}`);
// });


      console.log("newOwner",await ownerInstance.getOwner())
    //   changing newOwner to OldOwner
      await ownerInstance.connect(otherAccount).changeOwner(owner)
      console.log("oldOwner",await ownerInstance.getOwner())


        console.log("checkout");
      });
  
    });
  

  });