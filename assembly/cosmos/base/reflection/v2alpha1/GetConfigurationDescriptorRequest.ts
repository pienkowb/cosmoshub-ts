// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class GetConfigurationDescriptorRequest {
  static encode(
    message: GetConfigurationDescriptorRequest,
    writer: Writer
  ): void {}

  static decode(
    reader: Reader,
    length: i32
  ): GetConfigurationDescriptorRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetConfigurationDescriptorRequest();

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

export function encodeGetConfigurationDescriptorRequest(
  message: GetConfigurationDescriptorRequest
): Uint8Array {
  return Protobuf.encode(message, GetConfigurationDescriptorRequest.encode);
}

export function decodeGetConfigurationDescriptorRequest(
  buffer: Uint8Array
): GetConfigurationDescriptorRequest {
  return Protobuf.decode<GetConfigurationDescriptorRequest>(
    buffer,
    GetConfigurationDescriptorRequest.decode
  );
}