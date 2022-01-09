type Uid = string;
type Expression = string;

type Scalar = string | number | boolean | null | undefined;

type Dateable = string | number | Date | { toDate: () => Date } | { getTime: () => number };

type Hash<T = unknown> = { [key: string]: T };
type StringHash = { [key: string]: string };
type ScalarHash = { [key: string]: Scalar };
type Value = Scalar | Scalar[] | Data | unknown;
type Data = { [key: string]: Value | Value[] };
type Datum = { id: string; [key: string]: unknown };
type Delta = Hash;
type Obj = Record<string, unknown>;
type Bundle = Hash<Hash<string> | string>;

type Predicat<T = unknown> = (e: T) => boolean;
type UnaryOp<T = unknown> = (e: T) => T;
type BinaryOp<T = unknown> = (a: T, b: T) => T;
type Pipe = (...args: any[]) => unknown;
type Procedure = () => void;
type Constructor = new (...args: any[]) => void;

type UrlParams = StringHash;

type Url = {
  protocol?: string;
  host: string;
  path: string[];
  params: UrlParams;
  hash?: string;
};

type XmlNode = {
  tag: string;
  attrs?: Hash;
  nodes?: XmlNode[];
};

declare module '*.json';

declare module '*.xml' {
  const content: string;
  export default content;
}

declare module 'arrmatura/lib' {
  const content: string;
  export const arraySortBy: () => any[];
}

declare module '*.html' {
  const content: string;
  export default content;
}
