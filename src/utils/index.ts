// https://gomakethings.com/dynamically-changing-the-text-color-based-on-background-color-contrast-with-vanilla-js/
export const getTextColorByContrast = (hexcolor: string) => {
  // If a leading # is provided, remove it
  hexcolor = hexcolor.replace('#', '');

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(function (hex) {
        return hex + hex;
      })
      .join('');
  }

  // Convert to RGB value
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 125 ? '#000' : '#FFF';
};

// https://stackoverflow.com/a/37600815
export function LightenDarkenColor(col: string, amt: number) {
  let usePound = false;

  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }

  // If a three-character hexcode, make six-character
  if (col.length === 3) {
    col = col
      .split('')
      .map(function (hex) {
        return hex + hex;
      })
      .join('');
  }

  let R = parseInt(col.substring(0, 2), 16);
  let G = parseInt(col.substring(2, 4), 16);
  let B = parseInt(col.substring(4, 6), 16);

  // to make the colour less bright than the input
  // change the following three "+" symbols to "-"
  R = R + amt;
  G = G + amt;
  B = B + amt;

  if (R > 255) R = 255;
  else if (R < 0) R = 0;

  if (G > 255) G = 255;
  else if (G < 0) G = 0;

  if (B > 255) B = 255;
  else if (B < 0) B = 0;

  const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return (usePound ? '#' : '') + RR + GG + BB;
}
