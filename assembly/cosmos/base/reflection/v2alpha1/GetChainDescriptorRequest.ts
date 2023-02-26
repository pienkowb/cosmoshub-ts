// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class GetChainDescriptorRequest {
  static encode(message: GetChainDescriptorRequest, writer: Writer): void {}

  static decode(reader: Reader, length: i32): GetChainDescriptorRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetChainDescriptorRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeGetChainDescriptorRequest(
  message: GetChainDescriptorRequest
): Uint8Array {
  return Protobuf.encode(message, GetChainDescriptorRequest.encode);
}

export function decodeGetChainDescriptorRequest(
  buffer: Uint8Array
): GetChainDescriptorRequest {
  return Protobuf.decode<GetChainDescriptorRequest>(
    buffer,
    GetChainDescriptorRequest.decode
  );
}
