interface ColorShades {
 lighter: string;
 darker: string;
}

export default function lightenDarkenColor(
 rgba: string,
 lightPercent: number,
 darkPercent: number
): ColorShades {
 const regex = /^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d*\.?\d*)\)$/;
 const matches = rgba.match(regex);

 if (!matches) throw new Error("Invalid RGBA color format");

 let [, r, g, b, a] = matches.map(Number);

 const lighten = (val: number, percent: number) =>
  Math.round(Math.min(255, val + (255 - val) * (percent / 100)));
 const darken = (val: number, percent: number) =>
  Math.round(Math.max(0, val - val * (percent / 100)));

 return {
  lighter: `rgba(${lighten(r, lightPercent)}, ${lighten(
   g,
   lightPercent
  )}, ${lighten(b, lightPercent)}, ${a})`,
  darker: `rgba(${darken(r, darkPercent)}, ${darken(g, darkPercent)}, ${darken(
   b,
   darkPercent
  )}, ${a})`,
 };
}
