// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.2.0
//   protoc        v3.19.4

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { RequestEcho } from "./RequestEcho";
import { RequestFlush } from "./RequestFlush";
import { RequestInfo } from "./RequestInfo";
import { RequestSetOption } from "./RequestSetOption";
import { RequestInitChain } from "./RequestInitChain";
import { RequestQuery } from "./RequestQuery";
import { RequestBeginBlock } from "./RequestBeginBlock";
import { RequestCheckTx } from "./RequestCheckTx";
import { RequestDeliverTx } from "./RequestDeliverTx";
import { RequestEndBlock } from "./RequestEndBlock";
import { RequestCommit } from "./RequestCommit";
import { RequestListSnapshots } from "./RequestListSnapshots";
import { RequestOfferSnapshot } from "./RequestOfferSnapshot";
import { RequestLoadSnapshotChunk } from "./RequestLoadSnapshotChunk";
import { RequestApplySnapshotChunk } from "./RequestApplySnapshotChunk";

export class Request {
  static encode(message: Request, writer: Writer): void {
    const echo = message.echo;
    if (echo !== null) {
      writer.uint32(10);
      writer.fork();
      RequestEcho.encode(echo, writer);
      writer.ldelim();
    }

    const flush = message.flush;
    if (flush !== null) {
      writer.uint32(18);
      writer.fork();
      RequestFlush.encode(flush, writer);
      writer.ldelim();
    }

    const info = message.info;
    if (info !== null) {
      writer.uint32(26);
      writer.fork();
      RequestInfo.encode(info, writer);
      writer.ldelim();
    }

    const setOption = message.setOption;
    if (setOption !== null) {
      writer.uint32(34);
      writer.fork();
      RequestSetOption.encode(setOption, writer);
      writer.ldelim();
    }

    const initChain = message.initChain;
    if (initChain !== null) {
      writer.uint32(42);
      writer.fork();
      RequestInitChain.encode(initChain, writer);
      writer.ldelim();
    }

    const query = message.query;
    if (query !== null) {
      writer.uint32(50);
      writer.fork();
      RequestQuery.encode(query, writer);
      writer.ldelim();
    }

    const beginBlock = message.beginBlock;
    if (beginBlock !== null) {
      writer.uint32(58);
      writer.fork();
      RequestBeginBlock.encode(beginBlock, writer);
      writer.ldelim();
    }

    const checkTx = message.checkTx;
    if (checkTx !== null) {
      writer.uint32(66);
      writer.fork();
      RequestCheckTx.encode(checkTx, writer);
      writer.ldelim();
    }

    const deliverTx = message.deliverTx;
    if (deliverTx !== null) {
      writer.uint32(74);
      writer.fork();
      RequestDeliverTx.encode(deliverTx, writer);
      writer.ldelim();
    }

    const endBlock = message.endBlock;
    if (endBlock !== null) {
      writer.uint32(82);
      writer.fork();
      RequestEndBlock.encode(endBlock, writer);
      writer.ldelim();
    }

    const commit = message.commit;
    if (commit !== null) {
      writer.uint32(90);
      writer.fork();
      RequestCommit.encode(commit, writer);
      writer.ldelim();
    }

    const listSnapshots = message.listSnapshots;
    if (listSnapshots !== null) {
      writer.uint32(98);
      writer.fork();
      RequestListSnapshots.encode(listSnapshots, writer);
      writer.ldelim();
    }

    const offerSnapshot = message.offerSnapshot;
    if (offerSnapshot !== null) {
      writer.uint32(106);
      writer.fork();
      RequestOfferSnapshot.encode(offerSnapshot, writer);
      writer.ldelim();
    }

    const loadSnapshotChunk = message.loadSnapshotChunk;
    if (loadSnapshotChunk !== null) {
      writer.uint32(114);
      writer.fork();
      RequestLoadSnapshotChunk.encode(loadSnapshotChunk, writer);
      writer.ldelim();
    }

    const applySnapshotChunk = message.applySnapshotChunk;
    if (applySnapshotChunk !== null) {
      writer.uint32(122);
      writer.fork();
      RequestApplySnapshotChunk.encode(applySnapshotChunk, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Request {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Request();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;

        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;

        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.setOption = RequestSetOption.decode(reader, reader.uint32());
          break;

        case 5:
          message.initChain = RequestInitChain.decode(reader, reader.uint32());
          break;

        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;

        case 7:
          message.beginBlock = RequestBeginBlock.decode(
            reader,
            reader.uint32()
          );
          break;

        case 8:
          message.checkTx = RequestCheckTx.decode(reader, reader.uint32());
          break;

        case 9:
          message.deliverTx = RequestDeliverTx.decode(reader, reader.uint32());
          break;

        case 10:
          message.endBlock = RequestEndBlock.decode(reader, reader.uint32());
          break;

        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;

        case 12:
          message.listSnapshots = RequestListSnapshots.decode(
            reader,
            reader.uint32()
          );
          break;

        case 13:
          message.offerSnapshot = RequestOfferSnapshot.decode(
            reader,
            reader.uint32()
          );
          break;

        case 14:
          message.loadSnapshotChunk = RequestLoadSnapshotChunk.decode(
            reader,
            reader.uint32()
          );
          break;

        case 15:
          message.applySnapshotChunk = RequestApplySnapshotChunk.decode(
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

  echo: RequestEcho | null;
  flush: RequestFlush | null;
  info: RequestInfo | null;
  setOption: RequestSetOption | null;
  initChain: RequestInitChain | null;
  query: RequestQuery | null;
  beginBlock: RequestBeginBlock | null;
  checkTx: RequestCheckTx | null;
  deliverTx: RequestDeliverTx | null;
  endBlock: RequestEndBlock | null;
  commit: RequestCommit | null;
  listSnapshots: RequestListSnapshots | null;
  offerSnapshot: RequestOfferSnapshot | null;
  loadSnapshotChunk: RequestLoadSnapshotChunk | null;
  applySnapshotChunk: RequestApplySnapshotChunk | null;

  constructor(
    echo: RequestEcho | null = null,
    flush: RequestFlush | null = null,
    info: RequestInfo | null = null,
    setOption: RequestSetOption | null = null,
    initChain: RequestInitChain | null = null,
    query: RequestQuery | null = null,
    beginBlock: RequestBeginBlock | null = null,
    checkTx: RequestCheckTx | null = null,
    deliverTx: RequestDeliverTx | null = null,
    endBlock: RequestEndBlock | null = null,
    commit: RequestCommit | null = null,
    listSnapshots: RequestListSnapshots | null = null,
    offerSnapshot: RequestOfferSnapshot | null = null,
    loadSnapshotChunk: RequestLoadSnapshotChunk | null = null,
    applySnapshotChunk: RequestApplySnapshotChunk | null = null
  ) {
    this.echo = echo;
    this.flush = flush;
    this.info = info;
    this.setOption = setOption;
    this.initChain = initChain;
    this.query = query;
    this.beginBlock = beginBlock;
    this.checkTx = checkTx;
    this.deliverTx = deliverTx;
    this.endBlock = endBlock;
    this.commit = commit;
    this.listSnapshots = listSnapshots;
    this.offerSnapshot = offerSnapshot;
    this.loadSnapshotChunk = loadSnapshotChunk;
    this.applySnapshotChunk = applySnapshotChunk;
  }
}

export function encodeRequest(message: Request): Uint8Array {
  return Protobuf.encode(message, Request.encode);
}

export function decodeRequest(buffer: Uint8Array): Request {
  return Protobuf.decode<Request>(buffer, Request.decode);
}
