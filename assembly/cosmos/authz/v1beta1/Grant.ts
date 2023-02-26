// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Any } from "../../../google/protobuf/Any";
import { Timestamp } from "../../../google/protobuf/Timestamp";

export class Grant {
  static encode(message: Grant, writer: Writer): void {
    const authorization = message.authorization;
    if (authorization !== null) {
      writer.uint32(10);
      writer.fork();
      Any.encode(authorization, writer);
      writer.ldelim();
    }

    const expiration = message.expiration;
    if (expiration !== null) {
      writer.uint32(18);
      writer.fork();
      Timestamp.encode(expiration, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Grant {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Grant();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  authorization: Any | null;
  expiration: Timestamp | null;

  constructor(
    authorization: Any | null = null,
    expiration: Timestamp | null = null
  ) {
    this.authorization = authorization;
    this.expiration = expiration;
  }
}

export function encodeGrant(message: Grant): Uint8Array {
  return Protobuf.encode(message, Grant.encode);
}

export function decodeGrant(buffer: Uint8Array): Grant {
  return Protobuf.decode<Grant>(buffer, Grant.decode);
}
