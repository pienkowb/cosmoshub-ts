// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgChannelCloseConfirmResponse {
  static encode(
    message: MsgChannelCloseConfirmResponse,
    writer: Writer
  ): void {}

  static decode(reader: Reader, length: i32): MsgChannelCloseConfirmResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelCloseConfirmResponse();

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

export function encodeMsgChannelCloseConfirmResponse(
  message: MsgChannelCloseConfirmResponse
): Uint8Array {
  return Protobuf.encode(message, MsgChannelCloseConfirmResponse.encode);
}

export function decodeMsgChannelCloseConfirmResponse(
  buffer: Uint8Array
): MsgChannelCloseConfirmResponse {
  return Protobuf.decode<MsgChannelCloseConfirmResponse>(
    buffer,
    MsgChannelCloseConfirmResponse.decode
  );
}