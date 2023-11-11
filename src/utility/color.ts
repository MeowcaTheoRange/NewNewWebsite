export type ColorTypes = [number, number, number];

const clamp = (n: number, mi: number, ma: number) =>
  Math.max(mi, Math.min(n, ma));

export class Color3 {
  R: number;
  G: number;
  B: number;
  constructor(red: number, green: number, blue: number) {
    this.R = red;
    this.G = green;
    this.B = blue;
  }
  static clone(color3: Color3) {
    return new Color3(color3.R, color3.G, color3.B);
  }
  static fromRGB(red: number, green: number, blue: number) {
    return new Color3(red / 255, green / 255, blue / 255);
  }
  static fromHex(hex: string) {
    // @ts-ignore
    const hexSplit: [number, number, number] = (
      hex.match(new RegExp(`[0-9a-f]{1,${hex.length / 3}}`, "gi")) ?? [
        "0",
        "0",
        "0",
      ]
    ).map((x) => parseInt(x, 16) / 255);
    return new Color3(...hexSplit);
  }
  static fromInt(int: number) {
    return new Color3(
      (int & 0xff0000) >> 16,
      (int & 0x00ff00) >> 8,
      int & 0x0000ff
    );
  }
  static assumeColor(
    value: [number, number, number] | string | number,
    rgb?: boolean
  ) {
    if (Color3.isColor(value)) {
      if (Array.isArray(value))
        return rgb ? Color3.fromRGB(...value) : new Color3(...value);
      else if (typeof value === "string") return Color3.fromHex(value);
      else if (typeof value === "number") return Color3.fromInt(value);
    }
    throw new Error("Not a valid color type");
  }
  static isColor(
    value: [number, number, number] | string | number,
    rgb?: boolean
  ) {
    return (
      (Array.isArray(value) &&
        value.length === 3 &&
        value.every((x) => typeof x === "number" && !isNaN(x))) ||
      (typeof value === "string" && !isNaN(parseInt(value, 16))) ||
      (typeof value === "number" && !isNaN(value))
    );
  }

  toHex() {
    return this.toInt().toString(16).padStart(6, "0");
  }
  toInt() {
    return (
      (Math.round(this.R * 255) << 16) +
      (Math.round(this.G * 255) << 8) +
      Math.round(this.B * 255)
    );
  }
  toRGB(): [number, number, number] {
    return [this.R * 255, this.G * 255, this.B * 255];
  }
  multiply(mult: number) {
    return new Color3(this.R * mult, this.G * mult, this.B * mult);
  }
  lighten(mult: number) {
    return new Color3(
      clamp(this.R + (mult / 100) * (1 - this.R), 0, 1),
      clamp(this.G + (mult / 100) * (1 - this.G), 0, 1),
      clamp(this.B + (mult / 100) * (1 - this.B), 0, 1)
    );
  }
  darken(mult: number) {
    return new Color3(
      clamp(this.R - (mult / 100) * this.R, 0, 1),
      clamp(this.G - (mult / 100) * this.G, 0, 1),
      clamp(this.B - (mult / 100) * this.B, 0, 1)
    );
  }
}
