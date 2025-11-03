import { expect } from "jsr:@std/expect";
import { Board } from "./board.js";

// Positivtest: Unentschieden
Deno.test("Board.result() - tied = true (Unentschieden)", () => {
  // Arrange
  const tiedBoard = Board.of([
    [1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 1, 2, 1],
  ]);

  // Act
  const result = tiedBoard.result();

  // Assert
  expect(result.tied).toBe(true);
});

// Negativtest: Spieler 1 gewinnt
Deno.test("Board.result() - Spieler 1 gewinnt", () => {
  // Arrange
  const player1Board = Board.of([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2],
  ]);

  // Act
  const result = player1Board.result();

  // Assert
  expect(result.tied).toBe(false);
  expect(result.winner).toBe(1);
});

// Negativtest: Spieler 2 gewinnt
Deno.test("Board.result() - Spieler 2 gewinnt", () => {
  // Arrange
  const player2Board = Board.of([
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ]);

  // Act
  const result = player2Board.result();

  // Assert
  expect(result.tied).toBe(false);
  expect(result.winner).toBe(2);
});

// Negativtest: Spiel noch nicht beendet
Deno.test("Board.result() - Spiel noch nicht beendet", () => {
  // Arrange
  const unfinishedBoard = Board.of([
    [1, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  // Act
  const result = unfinishedBoard.result();

  // Assert
  expect(result.tied).toBe(false);
  expect(result.finished).toBe(false);
});
