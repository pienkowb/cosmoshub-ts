// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Consensus } from "../version/Consensus";
import { Timestamp } from "../../google/protobuf/Timestamp";
import { BlockID } from "./BlockID";

export class Header {
  static encode(message: Header, writer: Writer): void {
    const version = message.version;
    if (version !== null) {
      writer.uint32(10);
      writer.fork();
      Consensus.encode(version, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.string(message.chainId);

    writer.uint32(24);
    writer.int64(message.height);

    const time = message.time;
    if (time !== null) {
      writer.uint32(34);
      writer.fork();
      Timestamp.encode(time, writer);
      writer.ldelim();
    }

    const lastBlockId = message.lastBlockId;
    if (lastBlockId !== null) {
      writer.uint32(42);
      writer.fork();
      BlockID.encode(lastBlockId, writer);
      writer.ldelim();
    }

    writer.uint32(50);
    writer.bytes(message.lastCommitHash);

    writer.uint32(58);
    writer.bytes(message.dataHash);

    writer.uint32(66);
    writer.bytes(message.validatorsHash);

    writer.uint32(74);
    writer.bytes(message.nextValidatorsHash);

    writer.uint32(82);
    writer.bytes(message.consensusHash);

    writer.uint32(90);
    writer.bytes(message.appHash);

    writer.uint32(98);
    writer.bytes(message.lastResultsHash);

    writer.uint32(106);
    writer.bytes(message.evidenceHash);

    writer.uint32(114);
    writer.bytes(message.proposerAddress);
  }

  static decode(reader: Reader, length: i32): Header {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Header();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32());
          break;

        case 2:
          message.chainId = reader.string();
          break;

        case 3:
          message.height = reader.int64();
          break;

        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;

        case 6:
          message.lastCommitHash = reader.bytes();
          break;

        case 7:
          message.dataHash = reader.bytes();
          break;

        case 8:
          message.validatorsHash = reader.bytes();
          break;

        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;

        case 10:
          message.consensusHash = reader.bytes();
          break;

        case 11:
          message.appHash = reader.bytes();
          break;

        case 12:
          message.lastResultsHash = reader.bytes();
          break;

        case 13:
          message.evidenceHash = reader.bytes();
          break;

        case 14:
          message.proposerAddress = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  version: Consensus | null;
  chainId: string;
  height: i64;
  time: Timestamp | null;
  lastBlockId: BlockID | null;
  lastCommitHash: Uint8Array;
  dataHash: Uint8Array;
  validatorsHash: Uint8Array;
  nextValidatorsHash: Uint8Array;
  consensusHash: Uint8Array;
  appHash: Uint8Array;
  lastResultsHash: Uint8Array;
  evidenceHash: Uint8Array;
  proposerAddress: Uint8Array;

  constructor(
    version: Consensus | null = null,
    chainId: string = "",
    height: i64 = 0,
    time: Timestamp | null = null,
    lastBlockId: BlockID | null = null,
    lastCommitHash: Uint8Array = new Uint8Array(0),
    dataHash: Uint8Array = new Uint8Array(0),
    validatorsHash: Uint8Array = new Uint8Array(0),
    nextValidatorsHash: Uint8Array = new Uint8Array(0),
    consensusHash: Uint8Array = new Uint8Array(0),
    appHash: Uint8Array = new Uint8Array(0),
    lastResultsHash: Uint8Array = new Uint8Array(0),
    evidenceHash: Uint8Array = new Uint8Array(0),
    proposerAddress: Uint8Array = new Uint8Array(0)
  ) {
    this.version = version;
    this.chainId = chainId;
    this.height = height;
    this.time = time;
    this.lastBlockId = lastBlockId;
    this.lastCommitHash = lastCommitHash;
    this.dataHash = dataHash;
    this.validatorsHash = validatorsHash;
    this.nextValidatorsHash = nextValidatorsHash;
    this.consensusHash = consensusHash;
    this.appHash = appHash;
    this.lastResultsHash = lastResultsHash;
    this.evidenceHash = evidenceHash;
    this.proposerAddress = proposerAddress;
  }
}

export function encodeHeader(message: Header): Uint8Array {
  return Protobuf.encode(message, Header.encode);
}

export function decodeHeader(buffer: Uint8Array): Header {
  return Protobuf.decode<Header>(buffer, Header.decode);
}
