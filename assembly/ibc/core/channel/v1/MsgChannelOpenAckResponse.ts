// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgChannelOpenAckResponse {
  static encode(message: MsgChannelOpenAckResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelOpenAckResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenAckResponse();

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

export function encodeMsgChannelOpenAckResponse(
  message: MsgChannelOpenAckResponse
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenAckResponse.encode);
}

export function decodeMsgChannelOpenAckResponse(
  buffer: Uint8Array
): MsgChannelOpenAckResponse {
  return Protobuf.decode<MsgChannelOpenAckResponse>(
    buffer,
    MsgChannelOpenAckResponse.decode
  );
}
