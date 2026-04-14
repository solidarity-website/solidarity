import { JSX } from "react";

export default function SSROETable(): JSX.Element {
  const RED = "#B50000";
  const BLACK = "#000";
  const GREEN_BG = "#e8f5e9";
  const PINK_BG = "#fce4e4";

  // [label, fy25, sc1, sc2, comment, sc1Bg, sc2Bg, sc1Color, sc2Color]
  const rows = [
    ["Sales", "100", "100", "100", "", null, null, BLACK, BLACK],
    [
      "EBITDAM %",
      "14%",
      "18.0%",
      "20.0%",
      "Margin improvement from more machining, solar cost savings, op leverage, better product mix (larger castings, exports).",
      GREEN_BG,
      GREEN_BG,
      RED,
      RED,
    ],
    [
      "Depreciation % of sales",
      "3.6%",
      "4.5%",
      "4.5%",
      "WDV method means high depreciation in initial years which reduces over time.\n\nOffset by more in house machining.",
      GREEN_BG,
      GREEN_BG,
      RED,
      RED,
    ],
    ["EBITM %", "10%", "13.5%", "15.5%", "", null, null, BLACK, BLACK],
    [
      "Finance cost % sales",
      "4%",
      "3.5%",
      "3.5%",
      "Lower long term debt offset by bill discounting across all customers.",
      GREEN_BG,
      GREEN_BG,
      RED,
      RED,
    ],
    ["Forex income % sales", "0.4%", "0.5%", "1.0%", "", GREEN_BG, GREEN_BG, RED, RED],
    ["Core PATM %", "5%", "8%", "10%", "", null, null, BLACK, BLACK],
    [
      "GFA Turns",
      "1.8",
      "1.4",
      "1.6",
      "Reinvestment continues to sustain growth.\nMachining activity is capital intensive.",
      PINK_BG,
      PINK_BG,
      RED,
      RED,
    ],
    ["NFA Turns", "3.6", "2.2", "2.5", "", PINK_BG, PINK_BG, RED, RED],
    [
      "Debtor days",
      "57",
      "60",
      "65",
      "Bill discounting extended to recently added customers.",
      PINK_BG,
      PINK_BG,
      BLACK,
      BLACK,
    ],
    ["Inventory days", "54", "50", "55", "", null, null, BLACK, BLACK],
    ["Creditor days", "60", "60", "65", "", null, null, BLACK, BLACK],
    ["Other days", "0", "-5", "-5", "", null, null, BLACK, BLACK],
    ["NWC days", "51", "45", "50", "", null, null, BLACK, BLACK],
    [
      "Net debt/EBITDA",
      "1.9",
      "0.8",
      "1.5",
      "Scenario 1 assumes equity fund raise.",
      PINK_BG,
      PINK_BG,
      RED,
      RED,
    ],
    ["Net debt/equity", "0.9", "0.4", "0.8", "", PINK_BG, PINK_BG, RED, RED],
    [
      "Post -tax ROE %",
      "16%",
      "18%",
      "24%",
      "Superior margins drive improvement in ROE.",
      GREEN_BG,
      GREEN_BG,
      BLACK,
      BLACK,
    ],
  ];

  const headerBg = "#1a3a5c";
  const border = "1px solid #aaa";

  const thBase = {
    border,
    padding: "6px 10px",
    backgroundColor: headerBg,
    color: "#fff",
    fontWeight: "bold" as const,
    fontSize: 13,
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  };

  const subTh = {
    border,
    padding: "6px 10px",
    backgroundColor: headerBg,
    color: "#fff",
    fontWeight: "bold" as const,
    fontSize: 13,
    textAlign: "center" as const,
    verticalAlign: "middle" as const,
  };

  const td = (bg: string | null, color: string | null, align: "center" | "left" = "center") => ({
    border,
    padding: "6px 10px",
    fontSize: 13,
    backgroundColor: bg || "#fff",
    color: color || BLACK,
    textAlign: align,
    verticalAlign: "top" as const,
  });

  return (
    <div style={{ padding: "24px 0", fontFamily: "Arial, sans-serif", overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 800 }}>
        <thead>
          <tr>
            <th style={{ ...thBase, textAlign: "left", width: "22%" }} rowSpan={3}>
              SS ROE tree table
            </th>
            <th style={{ ...thBase, width: "10%" }} rowSpan={3}>
              FY25
            </th>
            <th
              style={{ ...thBase, width: "22%" }}
              colSpan={2}
            >
              FY30e
            </th>
            <th style={{ ...thBase, width: "36%" }} rowSpan={3}>
              Comments
            </th>
          </tr>
          <tr>
            <th style={subTh}>Scenario 1</th>
            <th style={subTh}>Scenario 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const [label, fy25, sc1, sc2, comment, sc1Bg, sc2Bg, sc1C, sc2C] = row as any[];
            return (
              <tr key={i}>
                <td style={td(null, BLACK, "left")}>{label}</td>
                <td style={td(null, BLACK)}>{fy25}</td>
                <td style={td(sc1Bg, sc1C)}>{sc1}</td>
                <td style={td(sc2Bg, sc2C)}>{sc2}</td>
                <td style={{ ...td(null, BLACK, "left"), fontSize: 12, whiteSpace: "pre-line" }}>
                  {comment}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
