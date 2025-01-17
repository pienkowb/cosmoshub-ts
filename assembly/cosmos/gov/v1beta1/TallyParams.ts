// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class TallyParams {
  static encode(message: TallyParams, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.quorum);

    writer.uint32(18);
    writer.bytes(message.threshold);

    writer.uint32(26);
    writer.bytes(message.vetoThreshold);
  }

  static decode(reader: Reader, length: i32): TallyParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TallyParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.bytes();
          break;

        case 2:
          message.threshold = reader.bytes();
          break;

        case 3:
          message.vetoThreshold = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  quorum: Uint8Array;
  threshold: Uint8Array;
  vetoThreshold: Uint8Array;

  constructor(
    quorum: Uint8Array = new Uint8Array(0),
    threshold: Uint8Array = new Uint8Array(0),
    vetoThreshold: Uint8Array = new Uint8Array(0)
  ) {
    this.quorum = quorum;
    this.threshold = threshold;
    this.vetoThreshold = vetoThreshold;
  }
}

export function encodeTallyParams(message: TallyParams): Uint8Array {
  return Protobuf.encode(message, TallyParams.encode);
}

export function decodeTallyParams(buffer: Uint8Array): TallyParams {
  return Protobuf.decode<TallyParams>(buffer, TallyParams.decode);
}
