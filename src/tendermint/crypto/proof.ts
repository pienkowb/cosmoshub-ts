import { Writer, Reader, Protobuf } from "as-proto";

export class Proof {
  static encode(message: Proof, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.total);

    writer.uint32(16);
    writer.int64(message.index);

    writer.uint32(26);
    writer.bytes(message.leaf_hash);

    const aunts = message.aunts;
    if (aunts.length !== 0) {
      for (let i = 0; i < aunts.length; ++i) {
        writer.uint32(34);
        writer.bytes(aunts[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): Proof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Proof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.int64();
          break;

        case 2:
          message.index = reader.int64();
          break;

        case 3:
          message.leaf_hash = reader.bytes();
          break;

        case 4:
          message.aunts.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  total: i64;
  index: i64;
  leaf_hash: Uint8Array;
  aunts: Array<Uint8Array>;

  constructor(total: i64 = 0, index: i64 = 0, leaf_hash: Uint8Array = new Uint8Array(0), aunts: Array<Uint8Array> = []) {
    this.total = total;
    this.index = index;
    this.leaf_hash = leaf_hash;
    this.aunts = aunts;
  }
}

export function decodeProof(a: Uint8Array): Proof {
  return Protobuf.decode<Proof>(a, Proof.decode);
}

export class ValueOp {
  static encode(message: ValueOp, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    const proof = message.proof;
    if (proof !== null) {
      writer.uint32(18);
      writer.fork();
      Proof.encode(proof, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ValueOp {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ValueOp();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  proof: Proof | null;

  constructor(key: Uint8Array = new Uint8Array(0), proof: Proof | null = null) {
    this.key = key;
    this.proof = proof;
  }
}

export function decodeValueOp(a: Uint8Array): ValueOp {
  return Protobuf.decode<ValueOp>(a, ValueOp.decode);
}

export class DominoOp {
  static encode(message: DominoOp, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.key);

    writer.uint32(18);
    writer.string(message.input);

    writer.uint32(26);
    writer.string(message.output);
  }

  static decode(reader: Reader, length: i32): DominoOp {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DominoOp();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.input = reader.string();
          break;

        case 3:
          message.output = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: string;
  input: string;
  output: string;

  constructor(key: string = "", input: string = "", output: string = "") {
    this.key = key;
    this.input = input;
    this.output = output;
  }
}

export function decodeDominoOp(a: Uint8Array): DominoOp {
  return Protobuf.decode<DominoOp>(a, DominoOp.decode);
}

export class ProofOp {
  static encode(message: ProofOp, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.type);

    writer.uint32(18);
    writer.bytes(message.key);

    writer.uint32(26);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): ProofOp {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ProofOp();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.key = reader.bytes();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  type: string;
  key: Uint8Array;
  data: Uint8Array;

  constructor(type: string = "", key: Uint8Array = new Uint8Array(0), data: Uint8Array = new Uint8Array(0)) {
    this.type = type;
    this.key = key;
    this.data = data;
  }
}

export function decodeProofOp(a: Uint8Array): ProofOp {
  return Protobuf.decode<ProofOp>(a, ProofOp.decode);
}

export class ProofOps {
  static encode(message: ProofOps, writer: Writer): void {
    const ops = message.ops;
    for (let i = 0; i < ops.length; ++i) {
      writer.uint32(10);
      writer.fork();
      ProofOp.encode(ops[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ProofOps {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ProofOps();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  ops: Array<ProofOp>;

  constructor(ops: Array<ProofOp> = []) {
    this.ops = ops;
  }
}

export function decodeProofOps(a: Uint8Array): ProofOps {
  return Protobuf.decode<ProofOps>(a, ProofOps.decode);
}
