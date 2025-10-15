export let snacks: string[] = ["bannana", "cucumbre", "gummies", "cheetohs", "cheese", "shrooms", "cheeze-it"]

export function printSnacks(): void {
    snacks.forEach((snack: string) => {
    console.log(`bringing ${snack}`);
    });
}

// printSnacks();