/// <reference types="@as-pect/assembly/types/as-pect" />

import {
  Grant,
  encodeGrant,
  decodeGrant,
} from "../assembly/cosmos/authz/v1beta1/Grant";
import { Any } from "../assembly/google/protobuf/Any";
import { Timestamp } from "../assembly/google/protobuf/Timestamp";

describe("Cosmos SDK", () => {
  test("decodes a grant", () => {
    const grant = new Grant(
      new Any("/this.is.a.test", new Uint8Array(1024)),
      new Timestamp(123456, 654321)
    );

    const encodedGrant = encodeGrant(grant);
    const decodedGrant = decodeGrant(encodedGrant);

    const authorization = decodedGrant.authorization as Any;

    expect(authorization.typeUrl).toBe("/this.is.a.test");
    expect(authorization.value).toHaveLength(1024);

    const expiration = decodedGrant.expiration as Timestamp;

    expect(expiration.seconds).toBe(123456);
    expect(expiration.nanos).toBe(654321);
  });
});
