// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Coin } from "../../base/v1beta1/Coin";

export class Output {
  static encode(message: Output, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    const coins = message.coins;
    for (let i: i32 = 0; i < coins.length; ++i) {
      writer.uint32(18);
      writer.fork();
      Coin.encode(coins[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Output {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Output();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  coins: Array<Coin>;

  constructor(address: string = "", coins: Array<Coin> = []) {
    this.address = address;
    this.coins = coins;
  }
}

export function encodeOutput(message: Output): Uint8Array {
  return Protobuf.encode(message, Output.encode);
}

export function decodeOutput(buffer: Uint8Array): Output {
  return Protobuf.decode<Output>(buffer, Output.decode);
}
