function generatePrefsOptions(prefs) {
  const options = [[]];
  for (const tag of prefs) {
    const newOptionToAdd = [];
    for (const option of options) {
      const newOption = [...option];
      newOption.push(tag.toLowerCase());
      newOption.sort();
      newOptionToAdd.push(newOption);
    }
    options.push(...newOptionToAdd);
  }

  return options;
}

export default generatePrefsOptions;
