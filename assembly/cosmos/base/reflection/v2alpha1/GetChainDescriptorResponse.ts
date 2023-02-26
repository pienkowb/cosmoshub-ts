// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ChainDescriptor } from "./ChainDescriptor";

export class GetChainDescriptorResponse {
  static encode(message: GetChainDescriptorResponse, writer: Writer): void {
    const chain = message.chain;
    if (chain !== null) {
      writer.uint32(10);
      writer.fork();
      ChainDescriptor.encode(chain, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetChainDescriptorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetChainDescriptorResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  chain: ChainDescriptor | null;

  constructor(chain: ChainDescriptor | null = null) {
    this.chain = chain;
  }
}

export function encodeGetChainDescriptorResponse(
  message: GetChainDescriptorResponse
): Uint8Array {
  return Protobuf.encode(message, GetChainDescriptorResponse.encode);
}

export function decodeGetChainDescriptorResponse(
  buffer: Uint8Array
): GetChainDescriptorResponse {
  return Protobuf.decode<GetChainDescriptorResponse>(
    buffer,
    GetChainDescriptorResponse.decode
  );
}