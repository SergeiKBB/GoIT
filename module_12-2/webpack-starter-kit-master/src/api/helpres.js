export const transformCharacters = data => {
  const { info, results } = data;
  const characters = results.map(character => {
    const {
      id,
      name,
      image,
      gender,
      species,
      status,
      location: { name: locationName }
    } = character;
    const description = status === 'Alive'
      ? `${name} is ${species.toLowerCase()} and ${gender === 'Male' ? 'he' : 'she'} lives on the ${locationName}`
      : `${name} is dead`;


    return {
      id,
      name,
      image,
      description,
    }
  });

  return { info, characters };
}
