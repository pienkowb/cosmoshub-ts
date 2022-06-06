// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.3
// 	 protoc        v3.20.1
// source: confio/proofs.ts

import { Writer, Reader, Protobuf } from "as-proto";

export class ExistenceProof {
  static encode(message: ExistenceProof, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    writer.uint32(18);
    writer.bytes(message.value);

    const leaf_ = message.leaf;
    if (leaf_ !== null) {
      writer.uint32(26);
      writer.fork();
      LeafOp.encode(leaf_, writer);
      writer.ldelim();
    }

    const path_ = message.path;
    for (let i = 0; i < path_.length; ++i) {
      writer.uint32(34);
      writer.fork();
      InnerOp.encode(path_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ExistenceProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ExistenceProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;

        case 4:
          message.path.push(InnerOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  value: Uint8Array;
  leaf: LeafOp | null;
  path: Array<InnerOp>;

  constructor(
    key: Uint8Array = new Uint8Array(0),
    value: Uint8Array = new Uint8Array(0),
    leaf: LeafOp | null = null,
    path: Array<InnerOp> = []
  ) {
    this.key = key;
    this.value = value;
    this.leaf = leaf;
    this.path = path;
  }
}

export function decodeExistenceProof(a: Uint8Array): ExistenceProof {
  return Protobuf.decode<ExistenceProof>(a, ExistenceProof.decode);
}

export class NonExistenceProof {
  static encode(message: NonExistenceProof, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    const left_ = message.left;
    if (left_ !== null) {
      writer.uint32(18);
      writer.fork();
      ExistenceProof.encode(left_, writer);
      writer.ldelim();
    }

    const right_ = message.right;
    if (right_ !== null) {
      writer.uint32(26);
      writer.fork();
      ExistenceProof.encode(right_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): NonExistenceProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NonExistenceProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.left = ExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.right = ExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  left: ExistenceProof | null;
  right: ExistenceProof | null;

  constructor(key: Uint8Array = new Uint8Array(0), left: ExistenceProof | null = null, right: ExistenceProof | null = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

export function decodeNonExistenceProof(a: Uint8Array): NonExistenceProof {
  return Protobuf.decode<NonExistenceProof>(a, NonExistenceProof.decode);
}

export class CommitmentProof {
  static encode(message: CommitmentProof, writer: Writer): void {
    const exist_ = message.exist;
    if (exist_ !== null) {
      writer.uint32(10);
      writer.fork();
      ExistenceProof.encode(exist_, writer);
      writer.ldelim();
    }

    const nonexist_ = message.nonexist;
    if (nonexist_ !== null) {
      writer.uint32(18);
      writer.fork();
      NonExistenceProof.encode(nonexist_, writer);
      writer.ldelim();
    }

    const batch_ = message.batch;
    if (batch_ !== null) {
      writer.uint32(26);
      writer.fork();
      BatchProof.encode(batch_, writer);
      writer.ldelim();
    }

    const compressed_ = message.compressed;
    if (compressed_ !== null) {
      writer.uint32(34);
      writer.fork();
      CompressedBatchProof.encode(compressed_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CommitmentProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CommitmentProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.batch = BatchProof.decode(reader, reader.uint32());
          break;

        case 4:
          message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  exist: ExistenceProof | null;
  nonexist: NonExistenceProof | null;
  batch: BatchProof | null;
  compressed: CompressedBatchProof | null;

  constructor(
    exist: ExistenceProof | null = null,
    nonexist: NonExistenceProof | null = null,
    batch: BatchProof | null = null,
    compressed: CompressedBatchProof | null = null
  ) {
    this.exist = exist;
    this.nonexist = nonexist;
    this.batch = batch;
    this.compressed = compressed;
  }
}

export function decodeCommitmentProof(a: Uint8Array): CommitmentProof {
  return Protobuf.decode<CommitmentProof>(a, CommitmentProof.decode);
}

export class LeafOp {
  static encode(message: LeafOp, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.hash);

    writer.uint32(16);
    writer.int32(message.prehash_key);

    writer.uint32(24);
    writer.int32(message.prehash_value);

    writer.uint32(32);
    writer.int32(message.length);

    writer.uint32(42);
    writer.bytes(message.prefix);
  }

  static decode(reader: Reader, length: i32): LeafOp {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new LeafOp();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;

        case 2:
          message.prehash_key = reader.int32();
          break;

        case 3:
          message.prehash_value = reader.int32();
          break;

        case 4:
          message.length = reader.int32();
          break;

        case 5:
          message.prefix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hash: HashOp;
  prehash_key: HashOp;
  prehash_value: HashOp;
  length: LengthOp;
  prefix: Uint8Array;

  constructor(
    hash: HashOp = 0,
    prehash_key: HashOp = 0,
    prehash_value: HashOp = 0,
    length: LengthOp = 0,
    prefix: Uint8Array = new Uint8Array(0)
  ) {
    this.hash = hash;
    this.prehash_key = prehash_key;
    this.prehash_value = prehash_value;
    this.length = length;
    this.prefix = prefix;
  }
}

export function decodeLeafOp(a: Uint8Array): LeafOp {
  return Protobuf.decode<LeafOp>(a, LeafOp.decode);
}

export class InnerOp {
  static encode(message: InnerOp, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.hash);

    writer.uint32(18);
    writer.bytes(message.prefix);

    writer.uint32(26);
    writer.bytes(message.suffix);
  }

  static decode(reader: Reader, length: i32): InnerOp {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new InnerOp();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.int32();
          break;

        case 2:
          message.prefix = reader.bytes();
          break;

        case 3:
          message.suffix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hash: HashOp;
  prefix: Uint8Array;
  suffix: Uint8Array;

  constructor(hash: HashOp = 0, prefix: Uint8Array = new Uint8Array(0), suffix: Uint8Array = new Uint8Array(0)) {
    this.hash = hash;
    this.prefix = prefix;
    this.suffix = suffix;
  }
}

export function decodeInnerOp(a: Uint8Array): InnerOp {
  return Protobuf.decode<InnerOp>(a, InnerOp.decode);
}

export class ProofSpec {
  static encode(message: ProofSpec, writer: Writer): void {
    const leaf_spec_ = message.leaf_spec;
    if (leaf_spec_ !== null) {
      writer.uint32(10);
      writer.fork();
      LeafOp.encode(leaf_spec_, writer);
      writer.ldelim();
    }

    const inner_spec_ = message.inner_spec;
    if (inner_spec_ !== null) {
      writer.uint32(18);
      writer.fork();
      InnerSpec.encode(inner_spec_, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int32(message.max_depth);

    writer.uint32(32);
    writer.int32(message.min_depth);
  }

  static decode(reader: Reader, length: i32): ProofSpec {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ProofSpec();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaf_spec = LeafOp.decode(reader, reader.uint32());
          break;

        case 2:
          message.inner_spec = InnerSpec.decode(reader, reader.uint32());
          break;

        case 3:
          message.max_depth = reader.int32();
          break;

        case 4:
          message.min_depth = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  leaf_spec: LeafOp | null;
  inner_spec: InnerSpec | null;
  max_depth: i32;
  min_depth: i32;

  constructor(leaf_spec: LeafOp | null = null, inner_spec: InnerSpec | null = null, max_depth: i32 = 0, min_depth: i32 = 0) {
    this.leaf_spec = leaf_spec;
    this.inner_spec = inner_spec;
    this.max_depth = max_depth;
    this.min_depth = min_depth;
  }
}

export function decodeProofSpec(a: Uint8Array): ProofSpec {
  return Protobuf.decode<ProofSpec>(a, ProofSpec.decode);
}

export class InnerSpec {
  static encode(message: InnerSpec, writer: Writer): void {
    const child_order_ = message.child_order;
    if (child_order_.length !== 0) {
      for (let i = 0; i < child_order_.length; ++i) {
        writer.uint32(8);
        writer.int32(child_order_[i]);
      }
    }

    writer.uint32(16);
    writer.int32(message.child_size);

    writer.uint32(24);
    writer.int32(message.min_prefix_length);

    writer.uint32(32);
    writer.int32(message.max_prefix_length);

    writer.uint32(42);
    writer.bytes(message.empty_child);

    writer.uint32(48);
    writer.int32(message.hash);
  }

  static decode(reader: Reader, length: i32): InnerSpec {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new InnerSpec();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.child_order.push(reader.int32());
          break;

        case 2:
          message.child_size = reader.int32();
          break;

        case 3:
          message.min_prefix_length = reader.int32();
          break;

        case 4:
          message.max_prefix_length = reader.int32();
          break;

        case 5:
          message.empty_child = reader.bytes();
          break;

        case 6:
          message.hash = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  child_order: Array<i32>;
  child_size: i32;
  min_prefix_length: i32;
  max_prefix_length: i32;
  empty_child: Uint8Array;
  hash: HashOp;

  constructor(
    child_order: Array<i32> = [],
    child_size: i32 = 0,
    min_prefix_length: i32 = 0,
    max_prefix_length: i32 = 0,
    empty_child: Uint8Array = new Uint8Array(0),
    hash: HashOp = 0
  ) {
    this.child_order = child_order;
    this.child_size = child_size;
    this.min_prefix_length = min_prefix_length;
    this.max_prefix_length = max_prefix_length;
    this.empty_child = empty_child;
    this.hash = hash;
  }
}

export function decodeInnerSpec(a: Uint8Array): InnerSpec {
  return Protobuf.decode<InnerSpec>(a, InnerSpec.decode);
}

export class BatchProof {
  static encode(message: BatchProof, writer: Writer): void {
    const entries_ = message.entries;
    for (let i = 0; i < entries_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      BatchEntry.encode(entries_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): BatchProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BatchProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(BatchEntry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  entries: Array<BatchEntry>;

  constructor(entries: Array<BatchEntry> = []) {
    this.entries = entries;
  }
}

export function decodeBatchProof(a: Uint8Array): BatchProof {
  return Protobuf.decode<BatchProof>(a, BatchProof.decode);
}

export class BatchEntry {
  static encode(message: BatchEntry, writer: Writer): void {
    const exist_ = message.exist;
    if (exist_ !== null) {
      writer.uint32(10);
      writer.fork();
      ExistenceProof.encode(exist_, writer);
      writer.ldelim();
    }

    const nonexist_ = message.nonexist;
    if (nonexist_ !== null) {
      writer.uint32(18);
      writer.fork();
      NonExistenceProof.encode(nonexist_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): BatchEntry {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BatchEntry();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  exist: ExistenceProof | null;
  nonexist: NonExistenceProof | null;

  constructor(exist: ExistenceProof | null = null, nonexist: NonExistenceProof | null = null) {
    this.exist = exist;
    this.nonexist = nonexist;
  }
}

export function decodeBatchEntry(a: Uint8Array): BatchEntry {
  return Protobuf.decode<BatchEntry>(a, BatchEntry.decode);
}

export class CompressedBatchProof {
  static encode(message: CompressedBatchProof, writer: Writer): void {
    const entries_ = message.entries;
    for (let i = 0; i < entries_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      CompressedBatchEntry.encode(entries_[i], writer);
      writer.ldelim();
    }

    const lookup_inners_ = message.lookup_inners;
    for (let i = 0; i < lookup_inners_.length; ++i) {
      writer.uint32(18);
      writer.fork();
      InnerOp.encode(lookup_inners_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CompressedBatchProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompressedBatchProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
          break;

        case 2:
          message.lookup_inners.push(InnerOp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  entries: Array<CompressedBatchEntry>;
  lookup_inners: Array<InnerOp>;

  constructor(entries: Array<CompressedBatchEntry> = [], lookup_inners: Array<InnerOp> = []) {
    this.entries = entries;
    this.lookup_inners = lookup_inners;
  }
}

export function decodeCompressedBatchProof(a: Uint8Array): CompressedBatchProof {
  return Protobuf.decode<CompressedBatchProof>(a, CompressedBatchProof.decode);
}

export class CompressedBatchEntry {
  static encode(message: CompressedBatchEntry, writer: Writer): void {
    const exist_ = message.exist;
    if (exist_ !== null) {
      writer.uint32(10);
      writer.fork();
      CompressedExistenceProof.encode(exist_, writer);
      writer.ldelim();
    }

    const nonexist_ = message.nonexist;
    if (nonexist_ !== null) {
      writer.uint32(18);
      writer.fork();
      CompressedNonExistenceProof.encode(nonexist_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CompressedBatchEntry {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompressedBatchEntry();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
          break;

        case 2:
          message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  exist: CompressedExistenceProof | null;
  nonexist: CompressedNonExistenceProof | null;

  constructor(exist: CompressedExistenceProof | null = null, nonexist: CompressedNonExistenceProof | null = null) {
    this.exist = exist;
    this.nonexist = nonexist;
  }
}

export function decodeCompressedBatchEntry(a: Uint8Array): CompressedBatchEntry {
  return Protobuf.decode<CompressedBatchEntry>(a, CompressedBatchEntry.decode);
}

export class CompressedExistenceProof {
  static encode(message: CompressedExistenceProof, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    writer.uint32(18);
    writer.bytes(message.value);

    const leaf_ = message.leaf;
    if (leaf_ !== null) {
      writer.uint32(26);
      writer.fork();
      LeafOp.encode(leaf_, writer);
      writer.ldelim();
    }

    const path_ = message.path;
    if (path_.length !== 0) {
      for (let i = 0; i < path_.length; ++i) {
        writer.uint32(32);
        writer.int32(path_[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): CompressedExistenceProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompressedExistenceProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;

        case 4:
          message.path.push(reader.int32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  value: Uint8Array;
  leaf: LeafOp | null;
  path: Array<i32>;

  constructor(
    key: Uint8Array = new Uint8Array(0),
    value: Uint8Array = new Uint8Array(0),
    leaf: LeafOp | null = null,
    path: Array<i32> = []
  ) {
    this.key = key;
    this.value = value;
    this.leaf = leaf;
    this.path = path;
  }
}

export function decodeCompressedExistenceProof(a: Uint8Array): CompressedExistenceProof {
  return Protobuf.decode<CompressedExistenceProof>(a, CompressedExistenceProof.decode);
}

export class CompressedNonExistenceProof {
  static encode(message: CompressedNonExistenceProof, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    const left_ = message.left;
    if (left_ !== null) {
      writer.uint32(18);
      writer.fork();
      CompressedExistenceProof.encode(left_, writer);
      writer.ldelim();
    }

    const right_ = message.right;
    if (right_ !== null) {
      writer.uint32(26);
      writer.fork();
      CompressedExistenceProof.encode(right_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CompressedNonExistenceProof {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompressedNonExistenceProof();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.left = CompressedExistenceProof.decode(reader, reader.uint32());
          break;

        case 3:
          message.right = CompressedExistenceProof.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  left: CompressedExistenceProof | null;
  right: CompressedExistenceProof | null;

  constructor(
    key: Uint8Array = new Uint8Array(0),
    left: CompressedExistenceProof | null = null,
    right: CompressedExistenceProof | null = null
  ) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

export function decodeCompressedNonExistenceProof(a: Uint8Array): CompressedNonExistenceProof {
  return Protobuf.decode<CompressedNonExistenceProof>(a, CompressedNonExistenceProof.decode);
}

export enum HashOp {
  NO_HASH = 0,
  SHA256 = 1,
  SHA512 = 2,
  KECCAK = 3,
  RIPEMD160 = 4,
  BITCOIN = 5,
}

export enum LengthOp {
  NO_PREFIX = 0,
  VAR_PROTO = 1,
  VAR_RLP = 2,
  FIXED32_BIG = 3,
  FIXED32_LITTLE = 4,
  FIXED64_BIG = 5,
  FIXED64_LITTLE = 6,
  REQUIRE_32_BYTES = 7,
  REQUIRE_64_BYTES = 8,
}
