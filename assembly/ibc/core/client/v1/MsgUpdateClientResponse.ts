// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgUpdateClientResponse {
  static encode(message: MsgUpdateClientResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgUpdateClientResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUpdateClientResponse();

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

export function encodeMsgUpdateClientResponse(
  message: MsgUpdateClientResponse
): Uint8Array {
  return Protobuf.encode(message, MsgUpdateClientResponse.encode);
}

export function decodeMsgUpdateClientResponse(
  buffer: Uint8Array
): MsgUpdateClientResponse {
  return Protobuf.decode<MsgUpdateClientResponse>(
    buffer,
    MsgUpdateClientResponse.decode
  );
}
