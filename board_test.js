import { expect } from "jsr:@std/expect";
import { Board } from "./board.js";

// Test: Initiale Feldverteilung
Deno.test("test initial count", () => {
  // Arrange
  const board = new Board();

  // Act
  const playerOneFields = board.fieldsWithState(1);
  const playerTwoFields = board.fieldsWithState(2);
  const emptyFields = board.fieldsWithState(0);

  // Assert
  expect(playerOneFields.length).toBe(2);
  expect(playerTwoFields.length).toBe(2);
  expect(emptyFields.length).toBe(8 * 8 - 4);
});

// Test: isValidMove() nach Äquivalenzklassen
Deno.test("isValidMove - Äquivalenzklassen Tests", () => {
  // Arrange
  const board = new Board();

  // T1: gültiger Zug für Spieler 1
  let result = board.isValidMove(1, 2, 3);
  expect(result).toBe(true);

  // T2: gleicher Zug, aber Spieler 2 → ungültig
  result = board.isValidMove(2, 2, 3);
  expect(result).toBe(false);

  // T3: Feld bereits belegt
  result = board.isValidMove(1, 3, 3);
  expect(result).toBe(false);

  // T4: Zeile ausserhalb (negativ)
  result = board.isValidMove(1, -1, 3);
  expect(result).toBe(false);

  // T5: Zeile ausserhalb (zu groß)
  result = board.isValidMove(1, 8, 4);
  expect(result).toBe(false);

  // T6: Ungültiger Spieler
  result = board.isValidMove(99, 2, 3);
  expect(result).toBe(false);

  // T7: Feld leer, aber kein gültiger Zug
  result = board.isValidMove(1, 0, 0);
  expect(result).toBe(false);
});
