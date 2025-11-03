# Äquivalenzklassenbildung für `isValidMove()`

## Definitionsbereich

- Spieler: {1, 2}
- Koordinaten: 0–7

## Äquivalenzklassen

| Bereich     | Klasse | Beschreibung      |
| ----------- | ------ | ----------------- |
| Spieler     | A1     | 1 (gültig)        |
| Spieler     | A2     | 2 (gültig)        |
| Spieler     | A3     | ≠1,2 (ungültig)   |
| Koordinaten | B1     | innerhalb 0–7     |
| Koordinaten | B2     | kleiner 0         |
| Koordinaten | B3     | größer/gleich 8   |
| Feldzustand | C1     | leer              |
| Feldzustand | C2     | belegt            |
| Regel       | D1     | gültiger Zug      |
| Regel       | D2     | kein gültiger Zug |

## Testfälle

| Nr  | Spieler | row | col | Erwartung          |
| --- | ------- | --- | --- | ------------------ |
| T1  | 1       | 2   | 3   | gültig             |
| T2  | 2       | 2   | 3   | ungültig           |
| T3  | 1       | 3   | 3   | belegt             |
| T4  | 1       | -1  | 3   | ausserhalb         |
| T5  | 1       | 8   | 4   | ausserhalb         |
| T6  | 99      | 2   | 3   | ungültiger Spieler |
| T7  | 1       | 0   | 0   | kein gültiger Zug  |
