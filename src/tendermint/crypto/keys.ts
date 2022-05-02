import { Writer, Reader, Protobuf } from "as-proto";

export class PublicKey {
  static encode(message: PublicKey, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.ed25519);

    writer.uint32(18);
    writer.bytes(message.secp256k1);
  }

  static decode(reader: Reader, length: i32): PublicKey {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PublicKey();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;

        case 2:
          message.secp256k1 = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  ed25519: Uint8Array;
  secp256k1: Uint8Array;

  constructor(ed25519: Uint8Array = new Uint8Array(0), secp256k1: Uint8Array = new Uint8Array(0)) {
    this.ed25519 = ed25519;
    this.secp256k1 = secp256k1;
  }
}

export function decodePublicKey(a: Uint8Array): PublicKey {
  return Protobuf.decode<PublicKey>(a, PublicKey.decode);
}
