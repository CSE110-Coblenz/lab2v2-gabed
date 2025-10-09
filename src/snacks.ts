let snacks: string[] = ["bannana", "cucumbre", "gummies", "cheetohs", "cheese"]

export function printSnacks(): void {
    snacks.forEach((snack: string) => {
    console.log(`bringing ${snack}`);
    });
}

printSnacks();