import { JSX } from "react";

export default function FinancialsTable(): JSX.Element {
  const headers = ["Particulars (Rs Cr)", "FY 15", "FY 16", "FY 17", "FY 18", "FY 19", "FY 20", "FY 21", "FY 22", "FY 23"];
  const rows = [
    ["Revenues",              "169", "180", "195", "250", "340", "297", "359", "613", "672"],
    ["EBITDA",                "15",  "20",  "22",  "27",  "37",  "40",  "49",  "93",  "115"],
    ["PBT",                   "0",   "2",   "5",   "10",  "17",  "17",  "31",  "71",  "91"],
    ["PAT",                   "0",   "2",   "4",   "8",   "12",  "12",  "21",  "52",  "68"],
    [null],
    ["Networth",              "9",   "14",  "17",  "34",  "46",  "58",  "79",  "173", "238"],
    ["Net Debt",              "114", "120", "124", "137", "143", "159", "146", "161", "302"],
    ["ROCE pre tax (%)",      "8%",  "11%", "11%", "11%", "15%", "13%", "15%", "21%", "17%"],
    ["ROE (%)",               "1%",  "11%", "21%", "24%", "26%", "21%", "27%", "30%", "29%"],
    ["CFO",                   "-22", "1",   "20",  "-5",  "54",  "31",  "35",  "16",  "33"],
    ["FCF",                   "-25", "-1",  "11",  "-22", "20",  "1",   "21",  "-44", "-120"],
    ["Net Debt/EBITDA (Ratio)","7.4", "6.0", "5.7", "5.0", "3.9", "4.0", "3.0", "1.7", "2.6"],
  ];

  const headerBg = "#1a3a5c";
  const border = "1px solid #aaa";

  const th = (i: number) => ({
    border,
    padding: "6px 10px",
    backgroundColor: headerBg,
    color: "#fff",
    fontWeight: "bold" as const,
    fontSize: 13,
    textAlign: (i === 0 ? "left" : "center") as "left" | "center",
    whiteSpace: "nowrap" as const,
  });

  const td = (j: number) => ({
    border,
    padding: "5px 10px",
    fontSize: 13,
    textAlign: (j === 0 ? "left" : "center") as "left" | "center",
    backgroundColor: "#fff",
  });

  return (
    <div style={{ padding: "24px 0", fontFamily: "Arial, sans-serif", overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 800 }}>
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
          {rows.map((row, i) =>
            !row || row[0] === null ? (
              <tr key={i}>
                <td colSpan={headers.length} style={{ border, padding: "4px", backgroundColor: "#fff" }} />
              </tr>
            ) : (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={td(j)}>
                    {cell}
                  </td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
      <p style={{ fontSize: 12, color: "#333", marginTop: 8 }}>Source: Ace Equity</p>
    </div>
  );
}
