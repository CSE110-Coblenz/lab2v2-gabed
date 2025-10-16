export let snacks: string[] = [
  "bannana",
  "cucumbre"
];

export function printSnacks(): void {
  snacks.forEach((snack: string) => {
    console.log(`bringing ${snack}`);
  });
}

printSnacks();
