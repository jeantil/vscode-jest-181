import capitalize from './index';

describe('capitalize', () => {
  it('should throw for null', () => {
    const word: string = null;
    expect(() => capitalize(word)).toThrow();
  });
  it("should throw for things which aren't strings", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const word: any = {};
    expect(() => capitalize(word)).toThrow();
  });
  it('should not change capitalized word', () => {
    const word = 'Foo';
    const actual = capitalize(word);

    expect(actual).toEqual(word);
  });

  it('should capitalize the first letter of a lowercase word', () => {
    const word = 'foo';
    const expected = 'Foo';
    const actual = capitalize(word);

    expect(actual).toEqual(expected);
  });

  it('should lowercase the tail of an uppercase word', () => {
    const word = 'FOO';
    const expected = 'Foo';
    const actual = capitalize(word);

    expect(actual).toEqual(expected);
  });
});
