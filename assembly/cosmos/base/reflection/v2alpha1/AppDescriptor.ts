// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { AuthnDescriptor } from "./AuthnDescriptor";
import { ChainDescriptor } from "./ChainDescriptor";
import { CodecDescriptor } from "./CodecDescriptor";
import { ConfigurationDescriptor } from "./ConfigurationDescriptor";
import { QueryServicesDescriptor } from "./QueryServicesDescriptor";
import { TxDescriptor } from "./TxDescriptor";

export class AppDescriptor {
  static encode(message: AppDescriptor, writer: Writer): void {
    const authn = message.authn;
    if (authn !== null) {
      writer.uint32(10);
      writer.fork();
      AuthnDescriptor.encode(authn, writer);
      writer.ldelim();
    }

    const chain = message.chain;
    if (chain !== null) {
      writer.uint32(18);
      writer.fork();
      ChainDescriptor.encode(chain, writer);
      writer.ldelim();
    }

    const codec = message.codec;
    if (codec !== null) {
      writer.uint32(26);
      writer.fork();
      CodecDescriptor.encode(codec, writer);
      writer.ldelim();
    }

    const configuration = message.configuration;
    if (configuration !== null) {
      writer.uint32(34);
      writer.fork();
      ConfigurationDescriptor.encode(configuration, writer);
      writer.ldelim();
    }

    const queryServices = message.queryServices;
    if (queryServices !== null) {
      writer.uint32(42);
      writer.fork();
      QueryServicesDescriptor.encode(queryServices, writer);
      writer.ldelim();
    }

    const tx = message.tx;
    if (tx !== null) {
      writer.uint32(50);
      writer.fork();
      TxDescriptor.encode(tx, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): AppDescriptor {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AppDescriptor();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;

        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;

        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;

        case 4:
          message.configuration = ConfigurationDescriptor.decode(
            reader,
            reader.uint32()
          );
          break;

        case 5:
          message.queryServices = QueryServicesDescriptor.decode(
            reader,
            reader.uint32()
          );
          break;

        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  authn: AuthnDescriptor | null;
  chain: ChainDescriptor | null;
  codec: CodecDescriptor | null;
  configuration: ConfigurationDescriptor | null;
  queryServices: QueryServicesDescriptor | null;
  tx: TxDescriptor | null;

  constructor(
    authn: AuthnDescriptor | null = null,
    chain: ChainDescriptor | null = null,
    codec: CodecDescriptor | null = null,
    configuration: ConfigurationDescriptor | null = null,
    queryServices: QueryServicesDescriptor | null = null,
    tx: TxDescriptor | null = null
  ) {
    this.authn = authn;
    this.chain = chain;
    this.codec = codec;
    this.configuration = configuration;
    this.queryServices = queryServices;
    this.tx = tx;
  }
}

export function encodeAppDescriptor(message: AppDescriptor): Uint8Array {
  return Protobuf.encode(message, AppDescriptor.encode);
}

export function decodeAppDescriptor(buffer: Uint8Array): AppDescriptor {
  return Protobuf.decode<AppDescriptor>(buffer, AppDescriptor.decode);
}
