export type LegalSection = {
  id: string;
  heading: string;
  /** Plain paragraphs separated by blank lines. `{{TODO: ...}}` markers render as inline notes. */
  body: string;
};

export type LegalDoc = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};
