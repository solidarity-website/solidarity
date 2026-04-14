import { JSX } from "react";

export default function PEPremiumTable(): JSX.Element {
  const headers = [
    "PE Multiple Premium",
    "31-Mar-11",
    "31-Mar-12",
    "31-Mar-13",
    "31-Mar-14",
    "31-Mar-15",
    "24-Sep-15",
  ];
  const row = ["PE Quality Cos / PE Nifty", "102%", "117%", "127%", "131%", "144%", "147%"];

  const th = (i: number) => ({
    border: "1px solid #888",
    padding: "6px 10px",
    backgroundColor: i === 0 ? "#1a3a5c" : "#2e5984",
    color: "#fff",
    fontWeight: "bold" as const,
    fontSize: 12,
    textAlign: i === 0 ? ("left" as const) : ("center" as const),
    whiteSpace: "nowrap" as const,
  });

  const td = (j: number) => ({
    border: "1px solid #bbb",
    padding: "6px 10px",
    fontSize: 12,
    textAlign: j === 0 ? ("left" as const) : ("center" as const),
    backgroundColor: "#fff",
  });

  return (
    <div style={{ padding: "24px 0", fontFamily: "Arial, sans-serif", overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", minWidth: 600 }}>
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
          <tr>
            {row.map((cell, j) => (
              <td key={j} style={td(j)}>
                {cell}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
