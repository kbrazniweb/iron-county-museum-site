import fs from "node:fs";
import PDFDocument from "pdfkit";

const out = "brandkit/iron-county-museum-brandkit.pdf";
fs.mkdirSync("brandkit", { recursive: true });

const doc = new PDFDocument({
  size: "LETTER",
  layout: "landscape",
  margin: 0,
  info: {
    Title: "Iron County Museum Brand Kit",
    Author: "OpenAI Codex",
    Subject: "Brand identity system for ironcountymuseum.org",
  },
});

doc.pipe(fs.createWriteStream(out));

const W = 792;
const H = 612;
const M = 36;
const colors = {
  parchment: "#EFE5D2",
  cream: "#FFFAF0",
  charcoal: "#201A13",
  forest: "#2F4A32",
  ochre: "#8A5A2D",
  moss: "#6F845C",
  gold: "#D5A35F",
  stone: "#5F5448",
};

function page(bg = colors.parchment, dark = false) {
  doc.rect(0, 0, W, H).fill(bg);
  for (let x = 0; x < W; x += 16) {
    for (let y = 0; y < H; y += 16) {
      doc
        .circle(x, y, 0.45)
        .fill(dark ? "#FFFAF0" : "#201A13")
        .opacity(0.055);
      doc.opacity(1);
    }
  }
  const warmGlow = doc
    .radialGradient(130, 96, 20, 130, 96, 230)
    .stop(0, dark ? "#5b3b20" : "#D5A35F", 0.24)
    .stop(1, bg, 0);
  doc.rect(0, 0, W, H).fill(warmGlow);
  const greenGlow = doc
    .radialGradient(650, 60, 20, 650, 60, 240)
    .stop(0, dark ? "#304b35" : "#6F845C", 0.2)
    .stop(1, bg, 0);
  doc.rect(0, 0, W, H).fill(greenGlow);
}

function panel(x, y, w, h, dark = false) {
  doc.roundedRect(x, y, w, h, 24).fill(dark ? "#342A20" : colors.cream);
  doc
    .roundedRect(x, y, w, h, 24)
    .lineWidth(0.7)
    .stroke(dark ? "#5a4a3b" : "#E5D7BF");
}

function label(text, x, y, dark = false) {
  doc
    .font("Helvetica-Bold")
    .fontSize(7.5)
    .fillColor(dark ? colors.gold : colors.ochre)
    .text(text.toUpperCase(), x, y, { characterSpacing: 1.8 });
}

function serif(text, x, y, size, options = {}) {
  doc
    .font("Times-Bold")
    .fontSize(size)
    .fillColor(options.color || colors.charcoal)
    .text(text, x, y, {
      lineGap: -size * 0.08,
      width: options.width,
      continued: false,
    });
}

function body(text, x, y, options = {}) {
  doc
    .font("Helvetica")
    .fontSize(options.size || 11)
    .fillColor(options.color || colors.stone)
    .text(text, x, y, {
      width: options.width || 240,
      lineGap: 4,
    });
}

function mark(x, y, s = 1) {
  doc.roundedRect(x, y, 92 * s, 92 * s, 22 * s).fill(colors.forest);
  doc
    .lineWidth(6 * s)
    .strokeColor(colors.cream)
    .roundedRect(x + 26 * s, y + 27 * s, 42 * s, 48 * s, 4 * s)
    .stroke();
  doc
    .lineWidth(7 * s)
    .strokeColor(colors.gold)
    .moveTo(x + 38 * s, y + 30 * s)
    .lineTo(x + 58 * s, y + 12 * s)
    .lineTo(x + 78 * s, y + 30 * s)
    .stroke();
}

function footer(n, text, dark = false) {
  doc
    .font("Helvetica-Bold")
    .fontSize(7)
    .fillColor(dark ? "#B9AA95" : "#7A6B59")
    .text(`BRAND KIT / ${n}`, M, H - 24, { characterSpacing: 1.2 });
  doc.text(text.toUpperCase(), W - M - 190, H - 24, {
    width: 190,
    align: "right",
    characterSpacing: 1.2,
  });
}

function swatch(x, y, w, h, color, name, hex, text = colors.cream) {
  doc.roundedRect(x, y, w, h, 14).fill(color);
  doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .fillColor(text)
    .text(name, x + 10, y + h - 28);
  doc
    .font("Helvetica")
    .fontSize(7)
    .text(hex, x + 10, y + h - 15);
}

function lineItem(x, y, left, right, dark = false) {
  doc
    .moveTo(x, y + 22)
    .lineTo(x + 268, y + 22)
    .lineWidth(0.6)
    .strokeColor(dark ? "#5A4A3B" : "#D9C7AC")
    .stroke();
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(dark ? "#D9CDBB" : colors.stone)
    .text(left, x, y);
  doc
    .font("Helvetica-Bold")
    .fillColor(dark ? colors.cream : colors.charcoal)
    .text(right, x + 148, y);
}

function badge(text, x, y, dark = false) {
  const width =
    doc.widthOfString(text, { font: "Helvetica-Bold", size: 8 }) + 24;
  doc.roundedRect(x, y, width, 24, 12).fill(dark ? "#4A3B2C" : "#E6D8BF");
  doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .fillColor(dark ? colors.cream : colors.forest)
    .text(text, x + 12, y + 8);
  return width;
}

// Page 1
page(colors.charcoal, true);
panel(M, M, 276, 336, true);
mark(M + 26, M + 26, 1.28);
serif("Iron County\nMuseum", M + 26, M + 172, 36, {
  color: colors.cream,
  width: 210,
});
doc
  .font("Helvetica-Bold")
  .fontSize(8)
  .fillColor(colors.gold)
  .text("CASPIAN, MICHIGAN / HISTORICAL SOCIETY", M + 26, M + 276, {
    characterSpacing: 1.1,
  });
panel(M + 288, M, W - M * 2 - 288, 336, true);
label("Brand idea", M + 318, M + 30, true);
serif("Local memory,\nkept in living form.", M + 318, M + 68, 58, {
  color: colors.cream,
  width: 390,
});
body(
  "A warm, grounded identity for a museum campus of cabins, galleries, archives, and local stories. The system should feel tactile, trustworthy, outdoors-aware, and quietly contemporary.",
  M + 318,
  M + 238,
  { color: "#D9CDBB", width: 330, size: 13 },
);
[
  [
    "Category",
    "Outdoor heritage museum",
    "25 buildings, 100+ exhibits, art galleries, archives, events, and community programs.",
  ],
  [
    "Audience",
    "Visitors, families, schools, donors",
    "Clear planning details and a reason to spend a full day with regional history.",
  ],
  [
    "Tone",
    "Historic, tactile, generous",
    "Avoid generic nostalgia. Lead with confidence, usefulness, and material warmth.",
  ],
].forEach((item, i) => {
  const x = M + i * 240;
  panel(x, 394, 228, 132, true);
  label(item[0], x + 20, 414, true);
  doc
    .font("Helvetica-Bold")
    .fontSize(15)
    .fillColor(colors.cream)
    .text(item[1], x + 20, 440, { width: 174 });
  body(item[2], x + 20, 472, { color: "#D9CDBB", width: 175, size: 9.5 });
});
footer("01", "ironcountymuseum.org", true);
doc.addPage();

// Page 2
page();
panel(M, M, 228, 328);
label("Logo concept", M + 22, M + 24);
mark(M + 22, M + 58, 1.36);
body(
  "The mark combines a cabin frame, museum doorway, and upward roofline. It works as a campus sign, favicon, social avatar, exhibit badge, and donor seal.",
  M + 22,
  M + 210,
  { width: 165 },
);
panel(M + 240, M, 228, 328);
label("Construction", M + 262, M + 24);
doc
  .rect(M + 262, M + 58, 164, 164)
  .fill("#F4E8D4")
  .strokeColor("#D9C7AC")
  .stroke();
for (let i = 0; i <= 164; i += 24) {
  doc
    .moveTo(M + 262 + i, M + 58)
    .lineTo(M + 262 + i, M + 222)
    .strokeColor("#D9C7AC")
    .lineWidth(0.4)
    .stroke();
  doc
    .moveTo(M + 262, M + 58 + i)
    .lineTo(M + 426, M + 58 + i)
    .stroke();
}
mark(M + 300, M + 92, 0.92);
body(
  "One protected interior, one roof gesture, one entrance. Simple enough to reproduce at small sizes.",
  M + 262,
  M + 244,
  {
    width: 165,
  },
);
panel(M + 480, M, 240, 328);
label("Wordmark", M + 502, M + 24);
serif("Iron County\nMuseum", M + 502, M + 58, 34, { width: 180 });
body(
  "A serif wordmark carries institutional trust. The sans system keeps visitor information useful and direct.",
  M + 502,
  M + 200,
  { width: 170 },
);
panel(M, 384, W - M * 2, 122);
label("Color system", M + 22, 408);
const sw = 124;
[
  [colors.cream, "Cream", "#FFFAF0", colors.charcoal],
  [colors.parchment, "Parchment", "#EFE5D2", colors.charcoal],
  [colors.charcoal, "Charcoal", "#201A13", colors.cream],
  [colors.forest, "Museum Green", "#2F4A32", colors.cream],
  [colors.ochre, "Iron Ochre", "#8A5A2D", colors.cream],
].forEach((s, i) => swatch(M + 22 + i * (sw + 9), 434, sw, 54, ...s));
footer("02", "Logo and color");
doc.addPage();

// Page 3
page();
panel(M, M, 420, 330);
label("Typography", M + 24, M + 24);
serif("A full day with\nIron County's past.", M + 24, M + 64, 45, {
  width: 330,
});
body(
  "Display: Iowan Old Style or Georgia. Body: Avenir Next or system sans. Use tight display spacing, generous body leading, and small uppercase labels sparingly.",
  M + 24,
  M + 214,
  { width: 300 },
);
panel(M + 432, M, 288, 330);
label("Message pillars", M + 456, M + 24);
[
  ["Campus scale", "25 buildings"],
  ["Collection depth", "100+ exhibits"],
  ["Signature claim", "Log Cabin Capital"],
  ["Visitor promise", "2-4 hour visit"],
  ["Community role", "Archives and events"],
].forEach((it, i) => lineItem(M + 456, M + 62 + i * 44, it[0], it[1]));
[
  [
    "Voice",
    "Clear, warm, specific.",
    "Say what visitors can do, when they can come, and why the place matters.",
  ],
  [
    "Avoid",
    "Theme-park nostalgia.",
    "No fake vintage clutter, clipart crests, or sepia everything.",
  ],
  [
    "Taglines",
    "Short and useful.",
    "A full day with the past. Local memory, kept close. Walk through Iron County.",
  ],
].forEach((item, i) => {
  const x = M + i * 240;
  panel(x, 386, 228, 126);
  label(item[0], x + 20, 408);
  doc
    .font("Helvetica-Bold")
    .fontSize(16)
    .fillColor(colors.charcoal)
    .text(item[1], x + 20, 434, { width: 170 });
  body(item[2], x + 20, 464, { width: 172, size: 9.7 });
});
footer("03", "Type and voice");
doc.addPage();

// Page 4
page(colors.charcoal, true);
panel(M, M, 306, 360, true);
label("Digital application", M + 24, M + 24, true);
doc.roundedRect(M + 24, M + 60, 246, 242, 18).fill(colors.cream);
doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(colors.charcoal)
  .text("Iron County Museum", M + 44, M + 82);
badge("Plan visit", M + 186, M + 76);
serif("Give yourself\ntime to wander.", M + 44, M + 130, 32, { width: 178 });
body(
  "Exhibits open June through September. Office, gift shop, and archives open year-round.",
  M + 44,
  M + 238,
  {
    width: 178,
    size: 9.5,
  },
);
panel(M + 318, M, 210, 360, true);
label("Image direction", M + 340, M + 24, true);
const imageGradient = doc
  .linearGradient(M + 340, M + 60, M + 486, M + 210)
  .stop(0, colors.gold)
  .stop(0.45, colors.moss)
  .stop(1, colors.forest);
doc.rect(M + 340, M + 60, 146, 150).fill(imageGradient);
doc
  .rect(M + 340, M + 60, 146, 150)
  .fillOpacity(0.18)
  .fill(colors.charcoal)
  .fillOpacity(1);
body(
  "Warm exterior photography, tactile material crops, cabin details, archival textures, and gallery closeups.",
  M + 340,
  M + 238,
  { color: "#D9CDBB", width: 145 },
);
panel(M + 540, M, 180, 360, true);
label("Stationery", M + 562, M + 24, true);
doc.roundedRect(M + 562, M + 66, 120, 160, 14).fill(colors.cream);
doc.rect(M + 632, M + 66, 50, 160).fill(colors.forest);
mark(M + 582, M + 90, 0.38);
doc
  .moveTo(M + 582, M + 190)
  .lineTo(M + 650, M + 190)
  .strokeColor("#D9C7AC")
  .stroke();
body(
  "Membership cards, donor letters, exhibit labels, and wayfinding share one calm grid.",
  M + 562,
  M + 250,
  {
    color: "#D9CDBB",
    width: 120,
  },
);
panel(M, 392, W - M * 2, 102, true);
label("System details", M + 24, 414, true);
let bx = M + 24;
[
  "Visit",
  "Exhibits",
  "Archives",
  "Events",
  "Membership",
  "100 Brady Ave",
  "(906) 265-2617",
].forEach((b) => {
  bx += badge(b, bx, 448, true) + 8;
});
footer("04", "Applications", true);

doc.end();
console.log(out);
