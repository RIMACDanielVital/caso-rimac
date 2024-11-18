export const deducibleRegex =
  /(por Evento \d+%|ausencia de control\: \d+%|por robo parcial \d+%|\d+% del monto a indemnizar|\d+% del monto indemnizable|\d+% del monto del siniestro|\d+% del del monto del siniestro|ausencia de control: \d.+%)/gi;
export const copagoRegex = /m[ií]nimo\s*([A-Z]{1,3}\$?\s*[\d,.]+)|m[ií]nimo de\s*([A-Z]{1,3}\$?\s*[\d,.]+)/gi;
export const cantidadTalleresRegEx = /Talleres\s*/gi;
export const tipoTallerRegex = /talleres afiliados\s*([a-zA-Z\s]+?)(?=\s|$)|talleres afiliados*([a-zA-Z\s]+)/gi;
export const marcaRegex = /\bmarca\b\s*(.*)/gi;
export const tallerRegex = /talleres*([a-zA-Z\s]+)|otros talleres|TALLERES*([a-zA-Z\s]+)/gi;
