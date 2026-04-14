import React from "react";

export default function PositionIRRTable() {
  const border = "1px solid #aaa";

  const rows = [
    { pos: "1",  cap: "100",  irr: "5%",  close: "163",  bg: "#fce8d8" },
    { pos: "2",  cap: "100",  irr: "5%",  close: "163",  bg: "#fce8d8" },
    { pos: "3",  cap: "100",  irr: "11%", close: "284",  bg: "#fff" },
    { pos: "4",  cap: "100",  irr: "11%", close: "284",  bg: "#fff" },
    { pos: "5",  cap: "100",  irr: "11%", close: "284",  bg: "#fff" },
    { pos: "6",  cap: "100",  irr: "20%", close: "619",  bg: "#ffff00" },
    { pos: "7",  cap: "100",  irr: "20%", close: "619",  bg: "#ffff00" },
    { pos: "8",  cap: "100",  irr: "25%", close: "931",  bg: "#e8f5e9" },
    { pos: "9",  cap: "100",  irr: "25%", close: "931",  bg: "#e8f5e9" },
    { pos: "10", cap: "100",  irr: "25%", close: "931",  bg: "#e8f5e9" },
  ];

  const td = (bg: string | null, align: "center" | "left" = "center", bold = false): React.CSSProperties => ({
    border,
    padding: "5px 10px",
    fontSize: 13,
    backgroundColor: bg || "#fff",
    textAlign: align,
    fontWeight: bold ? "bold" : "normal",
    verticalAlign: "middle",
  });

  return (
    <div className="my-8 overflow-x-auto border-t border-b border-gray-200 py-4 lg:border-none lg:py-0">
      <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 450, margin: "0 auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={td("#fff", "left", true)}>Position</th>
              <th style={td("#fff", "center", true)}>Initial<br />Capital</th>
              <th style={td("#fff", "center", true)}>IRR</th>
              <th style={td("#fff", "center", true)}>Closing<br />Capital</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td style={td(r.bg, "center")}>{r.pos}</td>
                <td style={td(r.bg, "center")}>{r.cap}</td>
                <td style={td(r.bg, "center")}>{r.irr}</td>
                <td style={td(r.bg, "center")}>{r.close}</td>
              </tr>
            ))}
            {/* Totals row */}
            <tr>
              <td style={td(null, "center")} />
              <td style={td(null, "center", true)}>1000</td>
              <td style={td(null, "center")} />
              <td style={td(null, "center", true)}>5210</td>
            </tr>
            {/* Summary rows */}
            {[
              ["Compounding Time period (yrs)", "", "", "10"],
              ["XIRR", "", "", "17.9%"],
              ["Market", "", "", "11.0%"],
              ["Alpha", "", "", "6.9%"],
            ].map((row, i) => (
              <tr key={`s${i}`}>
                <td colSpan={3} style={td(null, "left")}>{row[0]}</td>
                <td style={td(null, "center", true)}>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
