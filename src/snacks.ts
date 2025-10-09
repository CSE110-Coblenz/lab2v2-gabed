let snackNames: string[] = [`Nerds`, `Pop-rocks`, `Cheetohs`];

export function printSnacks(): void {
  snackNames.forEach((snack, index) => {
    console.log(`  ${index + 1}. ${snack}`);
  });
}

printSnacks();