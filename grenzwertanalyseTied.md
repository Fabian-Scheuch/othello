# Grenzwertanalyse für `Board.result().tied`

## Ziel

Die Methode `Board.result()` gibt den aktuellen Spielstand zurück.  
Das Feld `tied` zeigt an, ob das Spiel **unentschieden** geendet hat.

Ziel der Grenzwertanalyse: Überprüfung von **tied** für:

- Positivtest: `tied = true` (Spiel unentschieden)
- angrenzende Äquivalenzklassen:
  - Spiel noch nicht zu Ende (`finished = false`)
  - Sieg Spieler 1 (`winner = 1`)
  - Sieg Spieler 2 (`winner = 2`)

---

## Äquivalenzklassen / Grenzwerte

| Klasse | Beschreibung                     | Erwartetes `tied` |
| ------ | -------------------------------- | ----------------- |
| G1     | Spiel noch nicht zu Ende         | false             |
| G2     | Spiel beendet, Spieler 1 gewinnt | false             |
| G3     | Spiel beendet, Spieler 2 gewinnt | false             |
| G4     | Spiel beendet, Unentschieden     | true              |

---

## Testfälle

- **Positivtest:** G4 → Board vollständig gefüllt, gleiche Anzahl Steine → `tied = true`
- **Negativtests:**
  - G1 → Spiel noch nicht beendet → `tied = false`
  - G2 → Spieler 1 gewinnt → `tied = false`, `winner = 1`
  - G3 → Spieler 2 gewinnt → `tied = false`, `winner = 2`
