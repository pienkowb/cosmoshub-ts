// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";

@unmanaged
export class MsgWithdrawValidatorCommissionResponse {
  static encode(
    message: MsgWithdrawValidatorCommissionResponse,
    writer: Writer
  ): void {}

  static decode(
    reader: Reader,
    length: i32
  ): MsgWithdrawValidatorCommissionResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgWithdrawValidatorCommissionResponse();

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

export function encodeMsgWithdrawValidatorCommissionResponse(
  message: MsgWithdrawValidatorCommissionResponse
): Uint8Array {
  return Protobuf.encode(
    message,
    MsgWithdrawValidatorCommissionResponse.encode
  );
}

export function decodeMsgWithdrawValidatorCommissionResponse(
  buffer: Uint8Array
): MsgWithdrawValidatorCommissionResponse {
  return Protobuf.decode<MsgWithdrawValidatorCommissionResponse>(
    buffer,
    MsgWithdrawValidatorCommissionResponse.decode
  );
}