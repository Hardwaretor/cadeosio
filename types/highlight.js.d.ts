export const APOS_STRING_MODE: {
  begin: string;
  className: string;
  contains: {
    begin: string;
    relevance: number;
  }[];
  end: string;
  illegal: string;
};
export const BACKSLASH_ESCAPE: {
  begin: string;
  relevance: number;
};
export const BINARY_NUMBER_MODE: {
  begin: string;
  className: string;
  relevance: number;
};
export const BINARY_NUMBER_RE: string;
export function COMMENT(begin: any, end: any, inherits: any): any;
export const CSS_NUMBER_MODE: {
  begin: string;
  className: string;
  relevance: number;
};
export const C_BLOCK_COMMENT_MODE: {
  begin: string;
  className: string;
  contains: {
    begin: RegExp;
  }[];
  end: string;
};
export const C_LINE_COMMENT_MODE: {
  begin: string;
  className: string;
  contains: {
    begin: RegExp;
  }[];
  end: string;
};
export const C_NUMBER_MODE: {
  begin: string;
  className: string;
  relevance: number;
};
export const C_NUMBER_RE: string;
export const HASH_COMMENT_MODE: {
  begin: string;
  className: string;
  contains: {
    begin: RegExp;
  }[];
  end: string;
};
export const IDENT_RE: string;
export const METHOD_GUARD: {
  begin: string;
  relevance: number;
};
export const NUMBER_MODE: {
  begin: string;
  className: string;
  relevance: number;
};
export const NUMBER_RE: string;
export const PHRASAL_WORDS_MODE: {
  begin: RegExp;
};
export const QUOTE_STRING_MODE: {
  begin: string;
  className: string;
  contains: {
    begin: string;
    relevance: number;
  }[];
  end: string;
  illegal: string;
};
export const REGEXP_MODE: {
  begin: RegExp;
  className: string;
  contains: {
    begin: string;
    relevance: number;
  }[];
  end: RegExp;
  illegal: RegExp;
};
export const RE_STARTERS_RE: string;
export const TITLE_MODE: {
  begin: string;
  className: string;
  relevance: number;
};
export const UNDERSCORE_IDENT_RE: string;
export const UNDERSCORE_TITLE_MODE: {
  begin: string;
  className: string;
  relevance: number;
};
export function autoDetection(name: any): any;
export function configure(user_options: any): void;
export function fixMarkup(value: any): any;
export function getLanguage(name: any): any;
export function highlight(name: any, value: any, ignore_illegals: any, continuation: any): any;
export function highlightAuto(text: any, languageSubset: any): any;
export function highlightBlock(block: any): void;
export function inherit(parent: any, ...args: any[]): any;
export function initHighlighting(): void;
export function initHighlightingOnLoad(): void;
export function listLanguages(): any;
export function registerLanguage(name: any, language: any): void;
