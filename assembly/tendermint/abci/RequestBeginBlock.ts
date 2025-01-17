// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Header } from "../types/Header";
import { LastCommitInfo } from "./LastCommitInfo";
import { Evidence } from "./Evidence";

export class RequestBeginBlock {
  static encode(message: RequestBeginBlock, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.hash);

    const header = message.header;
    if (header !== null) {
      writer.uint32(18);
      writer.fork();
      Header.encode(header, writer);
      writer.ldelim();
    }

    const lastCommitInfo = message.lastCommitInfo;
    if (lastCommitInfo !== null) {
      writer.uint32(26);
      writer.fork();
      LastCommitInfo.encode(lastCommitInfo, writer);
      writer.ldelim();
    }

    const byzantineValidators = message.byzantineValidators;
    for (let i: i32 = 0; i < byzantineValidators.length; ++i) {
      writer.uint32(34);
      writer.fork();
      Evidence.encode(byzantineValidators[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): RequestBeginBlock {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RequestBeginBlock();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        case 2:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 3:
          message.lastCommitInfo = LastCommitInfo.decode(
            reader,
            reader.uint32()
          );
          break;

        case 4:
          message.byzantineValidators.push(
            Evidence.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hash: Uint8Array;
  header: Header | null;
  lastCommitInfo: LastCommitInfo | null;
  byzantineValidators: Array<Evidence>;

  constructor(
    hash: Uint8Array = new Uint8Array(0),
    header: Header | null = null,
    lastCommitInfo: LastCommitInfo | null = null,
    byzantineValidators: Array<Evidence> = []
  ) {
    this.hash = hash;
    this.header = header;
    this.lastCommitInfo = lastCommitInfo;
    this.byzantineValidators = byzantineValidators;
  }
}

export function encodeRequestBeginBlock(
  message: RequestBeginBlock
): Uint8Array {
  return Protobuf.encode(message, RequestBeginBlock.encode);
}

export function decodeRequestBeginBlock(buffer: Uint8Array): RequestBeginBlock {
  return Protobuf.decode<RequestBeginBlock>(buffer, RequestBeginBlock.decode);
}
