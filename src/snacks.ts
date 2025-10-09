let snacks: string[] = ["bannana", "cucumbre", "gummies", "cheetohs"]

export function printSnacks(): void {
    snacks.forEach((snack: string) => {
    console.log(`bringing ${snack}`);
    });
}

// printSnacks();