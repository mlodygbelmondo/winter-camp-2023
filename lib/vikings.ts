import vikingJson from "../vikings.json";
// @ts-ignore: Unreachable code error
import vikingYaml from "../vikings.yaml";

export type Viking = {
  fullName: string;
  presenceOfChildren: boolean;
  age: number;
  hometown: string;
  canFightWithSword: boolean;
  canFightWithAxe: boolean;
  canFightWithSpear: boolean;
};

type YamlViking = {
  name: string;
  weapon: string;
  name_of_father: string;
  has_home_in: string;
  years_old: number;
  number_of_children: number;
};

export function fetchVikings() {
  const mappedJsonVikings: Viking[] = vikingJson
    .filter((viking) => viking.age >= 25 && viking.age <= 65)
    .map((viking) => {
      const ability: number = Math.floor(Math.random() * 3);
      return {
        fullName: viking.fullName,
        presenceOfChildren: viking.hasSon,
        age: viking.age,
        hometown: viking.village,
        canFightWithSword: ability === 0,
        canFightWithAxe: ability === 1,
        canFightWithSpear: ability === 2,
      };
    });

  const mappedYamlVikings: Viking[] = (vikingYaml as YamlViking[])
    .filter((viking) => viking.years_old >= 25 && viking.years_old <= 65)
    .map((viking) => {
      const ability: number = Math.floor(Math.random() * 3);
      return {
        fullName: viking.name,
        presenceOfChildren: viking.number_of_children > 0,
        age: viking.years_old,
        hometown: viking.has_home_in,
        canFightWithSword: viking.weapon === "sword",
        canFightWithAxe: viking.weapon === "axe",
        canFightWithSpear: viking.weapon === "spear",
      };
    });

  const mappedVikings = [...mappedJsonVikings, ...mappedYamlVikings];

  return mappedVikings;
}
