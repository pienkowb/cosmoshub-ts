// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgWithdrawDelegatorRewardResponse {
  static encode(
    message: MsgWithdrawDelegatorRewardResponse,
    writer: Writer
  ): void {}

  static decode(
    reader: Reader,
    length: i32
  ): MsgWithdrawDelegatorRewardResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgWithdrawDelegatorRewardResponse();

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

export function encodeMsgWithdrawDelegatorRewardResponse(
  message: MsgWithdrawDelegatorRewardResponse
): Uint8Array {
  return Protobuf.encode(message, MsgWithdrawDelegatorRewardResponse.encode);
}

export function decodeMsgWithdrawDelegatorRewardResponse(
  buffer: Uint8Array
): MsgWithdrawDelegatorRewardResponse {
  return Protobuf.decode<MsgWithdrawDelegatorRewardResponse>(
    buffer,
    MsgWithdrawDelegatorRewardResponse.decode
  );
}
