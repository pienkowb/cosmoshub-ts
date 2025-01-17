// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ConsensusParams } from "./ConsensusParams";
import { ValidatorUpdate } from "./ValidatorUpdate";

export class ResponseInitChain {
  static encode(message: ResponseInitChain, writer: Writer): void {
    const consensusParams = message.consensusParams;
    if (consensusParams !== null) {
      writer.uint32(10);
      writer.fork();
      ConsensusParams.encode(consensusParams, writer);
      writer.ldelim();
    }

    const validators = message.validators;
    for (let i: i32 = 0; i < validators.length; ++i) {
      writer.uint32(18);
      writer.fork();
      ValidatorUpdate.encode(validators[i], writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.bytes(message.appHash);
  }

  static decode(reader: Reader, length: i32): ResponseInitChain {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ResponseInitChain();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(
            reader,
            reader.uint32()
          );
          break;

        case 2:
          message.validators.push(
            ValidatorUpdate.decode(reader, reader.uint32())
          );
          break;

        case 3:
          message.appHash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  consensusParams: ConsensusParams | null;
  validators: Array<ValidatorUpdate>;
  appHash: Uint8Array;

  constructor(
    consensusParams: ConsensusParams | null = null,
    validators: Array<ValidatorUpdate> = [],
    appHash: Uint8Array = new Uint8Array(0)
  ) {
    this.consensusParams = consensusParams;
    this.validators = validators;
    this.appHash = appHash;
  }
}

export function encodeResponseInitChain(
  message: ResponseInitChain
): Uint8Array {
  return Protobuf.encode(message, ResponseInitChain.encode);
}

export function decodeResponseInitChain(buffer: Uint8Array): ResponseInitChain {
  return Protobuf.decode<ResponseInitChain>(buffer, ResponseInitChain.decode);
}
