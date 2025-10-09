let snacks: string[] = ["apple", "cucumbre", "gummies"]

export function printSnacks(): void {
    snacks.forEach((snack: string) => {
    console.log(snack);
    });
}

printSnacks();