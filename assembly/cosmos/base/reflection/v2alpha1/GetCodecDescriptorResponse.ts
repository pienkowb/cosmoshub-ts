// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { CodecDescriptor } from "./CodecDescriptor";

export class GetCodecDescriptorResponse {
  static encode(message: GetCodecDescriptorResponse, writer: Writer): void {
    const codec = message.codec;
    if (codec !== null) {
      writer.uint32(10);
      writer.fork();
      CodecDescriptor.encode(codec, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetCodecDescriptorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetCodecDescriptorResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  codec: CodecDescriptor | null;

  constructor(codec: CodecDescriptor | null = null) {
    this.codec = codec;
  }
}

export function encodeGetCodecDescriptorResponse(
  message: GetCodecDescriptorResponse
): Uint8Array {
  return Protobuf.encode(message, GetCodecDescriptorResponse.encode);
}

export function decodeGetCodecDescriptorResponse(
  buffer: Uint8Array
): GetCodecDescriptorResponse {
  return Protobuf.decode<GetCodecDescriptorResponse>(
    buffer,
    GetCodecDescriptorResponse.decode
  );
}