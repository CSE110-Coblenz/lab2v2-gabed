let drinks: string[] = ["soda", "water", "coke"]

export function printDrinks(): void {
    drinks.forEach((drink: string) => {
    console.log(drink);
    });
}

printDrinks();