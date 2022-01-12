# Moduł JavaScript

## Lekcja 3

### Zadanie 1 - poziom podstawowy

Napisz funkcję `modifyEverySecondElement`, która otrzyma jeden argument typu `Array`, będzie to tablica liczb naturalnych. Funkcja ta ma zwrócić nową tablicę w taki sposób, aby co drugi element był powiększony o 1.

Do tego zadania potrzebujesz:

- zrozumienia metody .map (działającej na arrays), która powinna przyjąć dwa parametry (pierwszy: element z array; drugi: indeks) [zauważ, że map zawsze zwracą nową tablicę (bez modyfikacji starej)]
- tricku z modulo/remainder operator (%), który pozwala określić, który element jest nieparzysty, a który parzysty
- ternary/conditional operator (?:), który pozwoli Ci łatwo wybrać warunkowo, kiedy zmieniasz element podczas iteracji (w callbackowej funkcji, którą przyjmuje map)

Przykładowy input:
`modifyEverySecondElement([1, 2, 3, 4]);`

Przykładowy output:
`[1, 3, 3, 5]`
