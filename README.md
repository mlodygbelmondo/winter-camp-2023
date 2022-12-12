# Gorrion Winter Camp 2023 - zadanie rekrutacyjne

Przygotowaliśmy w tym roku zadanie rekrutacyjne na praktyki ziomowe Gorrion Winter Camp 2023.

## Jak zrealizować zadanie?

Przeczytaj [CONTRIBUTING.md](./CONTRIBUTING.md) i zastosuj się do instrukcji.

## Zadanie

Ragnar Lodbrok poprosił nas o pomoc w przygotowaniu i wyświeleniu załogi na najbliższą wyprawę do Anglii.

Twoim zadaniem jest **przygotować w pliku `lib/vikings.ts` metodę, która połączy listy z plików json i yaml**.

Spełnione muszą być następujące warunki:

1. Typ pojedyńczego wikinga:

```ts
type Viking = {
  fullName: string;
  presenceOfChildren: boolean;
  age: number;
  hometown: string;
  canFightWithSword: boolean;
  canFightWithAxe: boolean;
  canFightWithSpear: boolean;
};
```

2. Lista wikingów musi zawierać tylko wojowników w wieku od 25 do 65 lat.

### Jeżeli wolisz backend

Użyj metody stworzonej w `lib/vikings.ts` w pliku `pages/api/vikings.ts` i zwróć listę wikingów w formie tablicy.

### Jeżeli wolisz frontend

Użyj metody stworzonej w `lib/vikings.ts` w pliku `pages/vikings.tsx` i przygotuj komponent wyświetlający kartę wojownika.


## Kryteria oceny
* Jakość kodu
* Użyte narzędzia
* Poprawność działania kodu

## Podpowiedzi
* można instalować dowolne bilbioteki do realizacji zadania
* można zrobić i frotend, i backend
* jeżeli brakuje danych - możesz je wymyślić lub wygenerować
