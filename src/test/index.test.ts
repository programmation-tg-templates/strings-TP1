import { compterOccurrencesLettre } from "../index";

describe("Comptage d'occurrences d'une lettre dans un mot", () => {
  test('Premier test avec le mot "Programmation" et la lettre "m"', () => {
    expect(compterOccurrencesLettre("Programmation", "m")).toEqual("La lettre 'm' apparaît 2 fois");
  });

  test('Deuxième test avec le mot "HeH - Haute Ecole en Hainaut" et la lettre "e"', () => {
    expect(compterOccurrencesLettre("HeH - Haute Ecole en Hainaut", "e")).toEqual("La lettre 'e' apparaît 5 fois");
  });
});
