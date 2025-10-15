export let snacks: string[] = ["bannana", "cucumbre", "gummies", "cheetohs", "cheese", "shrooms", "cheeze-it"]
let snacks: string[] = ["bannana", "cucumbre", "gummies", "cheetohs", "potato chips", "chocolate", "candy"]

export function printSnacks(): void {
    snacks.forEach((snack: string) => {
    console.log(`bringing ${snack}`);
    });
}

// printSnacks();