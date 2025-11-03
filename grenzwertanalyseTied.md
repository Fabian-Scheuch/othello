# Grenzwertanalyse von Board.result().tied

## Ziel

Die Methode Board.result() zeigt den aktuellen Spielstand.  
Mit dem Feld tied erkennt man, ob das Spiel unentschieden endet.

Zu prüfen:

- Positivfall: unentschieden (tied = true)
- angrenzende Fälle: Spiel läuft noch, Spieler 1 gewinnt, Spieler 2 gewinnt

## Äquivalenzklassen und Grenzwerte

- Spiel läuft noch → tied = false
- Spieler 1 gewinnt → tied = false
- Spieler 2 gewinnt → tied = false
- Spiel endet unentschieden → tied = true

## Testfälle

- Positivtest: Board komplett gefüllt, gleiche Anzahl Steine → tied = true
- Negativtests:
  - Spiel noch nicht beendet → tied = false
  - Spieler 1 gewinnt → tied = false, winner = 1
  - Spieler 2 gewinnt → tied = false, winner = 2
