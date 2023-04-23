const modes = [
  {
    title: "AUTOMATIC",
    action: "Keep between",
  },
  {
    title: "SCHEDULED",
    action: "Turn on",
  },
  {
    title: "MANUAL",
    action: "Alert when out",
  },
];

export const DefaultModeSetting = {
  mode: 1,
  safeAction: 1,
  schedStart: "06:00",
  schedEnd: "06:01",
  safeMin: 80,
  safeMax: 220,
  autoMin: 100,
  autoMax: 200,
  manualMin: 90,
  manualMax: 210,
  status: 258,
};

export const ModeChoices = ['Automatic', 'Scheduled', 'Manual']
export const SafeModeChoices = ['Take action', 'Alert', 'Ignore']

export default modes;
