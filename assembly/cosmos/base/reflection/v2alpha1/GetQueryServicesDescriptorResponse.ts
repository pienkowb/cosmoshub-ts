// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { QueryServicesDescriptor } from "./QueryServicesDescriptor";

export class GetQueryServicesDescriptorResponse {
  static encode(
    message: GetQueryServicesDescriptorResponse,
    writer: Writer
  ): void {
    const queries = message.queries;
    if (queries !== null) {
      writer.uint32(10);
      writer.fork();
      QueryServicesDescriptor.encode(queries, writer);
      writer.ldelim();
    }
  }

  static decode(
    reader: Reader,
    length: i32
  ): GetQueryServicesDescriptorResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetQueryServicesDescriptorResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  queries: QueryServicesDescriptor | null;

  constructor(queries: QueryServicesDescriptor | null = null) {
    this.queries = queries;
  }
}

export function encodeGetQueryServicesDescriptorResponse(
  message: GetQueryServicesDescriptorResponse
): Uint8Array {
  return Protobuf.encode(message, GetQueryServicesDescriptorResponse.encode);
}

export function decodeGetQueryServicesDescriptorResponse(
  buffer: Uint8Array
): GetQueryServicesDescriptorResponse {
  return Protobuf.decode<GetQueryServicesDescriptorResponse>(
    buffer,
    GetQueryServicesDescriptorResponse.decode
  );
}
