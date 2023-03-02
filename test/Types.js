const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Types', () => {
  beforeEach(async () => {
    const ContractFactory = await ethers.getContractFactory('Types');
    contract = await ContractFactory.deploy();
  });

  describe('Example1: Booleans', () => {
    beforeEach(async () => {});

    it('demos boolean values', async () => {
      expect(await contract.boolean1()).to.equal(true);
      expect(await contract.boolean2()).to.equal(false);
    });

    // it('EXPECTATION_DESC', async () => {

    // });
  });
});