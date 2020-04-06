import { ethers } from 'ethers';

export function getSignatureString(funcAbi) {
  const inputTypes = (funcAbi.inputs || []).map((input) => input.type);
  return `${funcAbi.name || ''}(${inputTypes.join(',')})`;
}

export function getSignature(signatureString) {
  return ethers.utils.id(signatureString).slice(0, 10);
}

export function getTransaction(funcAbi, args) {
  const {defaultAbiCoder} = ethers.utils;

  const sig = getSignature(getSignatureString(funcAbi));
  const encodedArgs = args.length > 0
    ? defaultAbiCoder.encode(
      funcAbi.inputs.map(inp => inp.type),
      args,
    ) : '';

  return `${sig}${encodedArgs.slice(2)}`;
}
