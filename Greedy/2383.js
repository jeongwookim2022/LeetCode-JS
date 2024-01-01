var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let energySum = 0;
  let experienceSum = initialExperience;
  let trainingHour = 0;

  for (let i = 0; i < energy.length; i++) {
    energySum += energy[i];
  }

  if (initialEnergy <= energySum) {
    trainingHour += energySum - initialEnergy + 1;
  }

  for (let i = 0; i < experience.length; i++) {
    if (experienceSum <= experience[i]) {
      trainingHour += experience[i] - experienceSum + 1;
      experienceSum += experience[i] - experienceSum + 1;
    }

    experienceSum += experience[i];
  }

  return trainingHour;
};
