import { JSX } from "react";

export default function NiftyPETable(): JSX.Element {
  const headers = [
    "NIFTY Trailing P/E\nRatios",
    "3Y CAGR",
    "5Y CAGR",
    "7Y CAGR",
    "As % of total\ntrading days",
  ];
  const rows = [
    ["Less than 12", "39.5%", "29.0%", "24.9%", "1.2%"],
    ["Between 12 & 16", "28.0%", "25.0%", "19.5%", "23.2%"],
    ["Between 16 & 20", "13.2%", "13.9%", "15.2%", "36.4%"],
    ["Between 20 & 24", "4.2%", "7.7%", "13.1%", "34.4%"],
    ["Above 24", "-5.1%", "2.7%", "9.9%", "4.8%"],
  ];

  const headerBg = "#1a3a5c";
  const th = (i: number) => ({
    border: "1px solid #888",
    padding: "8px 12px",
    backgroundColor: headerBg,
    color: "#fff",
    fontWeight: "bold" as const,
    fontSize: 13,
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
    whiteSpace: "pre-line" as const,
    width: i === 0 ? "28%" : undefined,
  });

  const td = (j: number) => ({
    border: "1px solid #bbb",
    padding: "6px 12px",
    fontSize: 13,
    textAlign: j === 0 ? ("left" as const) : ("center" as const),
    verticalAlign: "middle" as const,
  });

  return (
    <div
      style={{
        padding: "24px 0",
        fontFamily: "Arial, sans-serif",
        maxWidth: 560,
        overflowX: "auto",
      }}
    >
      <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 480 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={th(i)}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={td(j)}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: 12, color: "#333", marginTop: 10, fontStyle: "italic" }}>
        Note: Trailing PE is not our preferred metric to ascertain valuation; however, it has been
        used to illustrate the point
      </p>
    </div>
  );
}
