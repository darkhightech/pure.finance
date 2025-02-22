'use strict'

const debug = require('debug')('sablier')

const abi = require('./abi.json')
const address = '0xA4fc358455Febe425536fd1878bE67FfDBDEC59a'

const createSablier = function (web3, options = {}) {
  const { from, gasFactor = 2 } = options

  debug('Creating Sablier for %s', from || 'read-only')

  const sablier = new web3.eth.Contract(abi, address)

  const safeGas = (gas) => Math.ceil(gas * gasFactor)

  const estimateGasAndSend = (method, transactionOptions) =>
    Promise.resolve(
      transactionOptions.gas ||
        method.estimateGas(transactionOptions).then(safeGas)
    ).then((gas) => method.send({ ...transactionOptions, gas }))

  const getAddress = () => address

  const getStream = function (streamId) {
    debug('Getting stream %s properties', streamId)
    return sablier.methods.getStream(streamId).call()
  }

  const getBalance = function (streamId, who) {
    debug('Getting stream %s balance', streamId)
    return sablier.methods.balanceOf(streamId, who || from).call()
  }

  const calcDeposit = function (startTime, stopTime, amount) {
    const deltaTime = stopTime - startTime
    return Math.ceil(amount / deltaTime) * deltaTime
  }

  const createStream = function (
    recipient,
    deposit,
    tokenAddress,
    startTime,
    stopTime,
    txOps
  ) {
    debug('Creating a stream of %s %s for %s', deposit, tokenAddress, recipient)
    return estimateGasAndSend(
      sablier.methods.createStream(
        recipient,
        deposit,
        tokenAddress,
        startTime,
        stopTime
      ),
      { from, ...txOps }
    )
  }

  const withdrawFromStream = function (streamId, amount, txOps) {
    debug('Initiating withdraw of %s from stream %s', amount, streamId)
    return estimateGasAndSend(
      sablier.methods.withdrawFromStream(streamId, amount),
      { from, ...txOps, gas: 200000 }
    )
  }

  return {
    calcDeposit,
    createStream,
    getAddress,
    getBalance,
    getStream,
    withdrawFromStream
  }
}

module.exports = createSablier
