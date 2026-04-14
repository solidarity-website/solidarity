export default function IRRTable() {
  const RED = "#B50000";
  const BLACK = "#000";
  const YELLOW = "#FFF9C4";

  // [label, perfect, partial, wrong, remark, perfectBg, partialBg, wrongBg, perfectColor, partialColor, wrongColor, bold, sectionHeader]
  const rows = [
    ["Starting Corpus", "100", "100", "100", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["NAV per unit", "10", "10", "10", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Units", "10", "10", "10", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    [null],
    ["Corpus NOW", "300", "285", "285", "In partial timing, sold just before peak", null, null, null, RED, RED, RED, false, false],
    ["NAV per unit", "30", "28.5", "28.5", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Units", "10", "10", "10", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Cash call", "30%", "30%", "30%", "", YELLOW, YELLOW, YELLOW, RED, RED, RED, false, false],
    ["Cash generated", "90", "86", "86", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Capital gains", "60", "56", "56", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Units sold", "3", "3", "3", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Units post cash call", "7", "7", "7", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["LTCG (Including max surcharge and cess)", "14.95%", "14.95%", "14.95%", "", null, null, null, RED, RED, RED, false, false],
    ["Tax", "9.0", "8.3", "8.3", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Effective Cash", "81.0", "77.2", "77.2", "Units sold less tax", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["", "84.3", "80.3", "80.3", "Assuming 4% interest earned on cash", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Net cash available for redeployment", "", "", "", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Market draw down/rally", "-25%", "-25%", "25%", "", YELLOW, YELLOW, YELLOW, RED, RED, RED, false, false],
    ["Purchased after what market draw down/rally", "-25%", "-20%", "25%", "", YELLOW, YELLOW, YELLOW, RED, RED, RED, false, false],
    ["Re entry - NAV", "22.5", "24.0", "35.6", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Re entry - New Units", "3.7", "3.3", "2.3", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Total units post re entry", "10.7", "10.3", "9.3", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    [null],
    ["Status post 5 years from today", "", "", "", "", null, null, null, BLACK, BLACK, BLACK, false, true],
    ["No cash call", "", "", "", "", null, null, null, BLACK, BLACK, BLACK, false, true],
    ["NAV at end", "60", "60", "60", "", null, null, null, RED, RED, RED, false, false],
    ["Units at end", "10", "10", "10", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Starting Capital", "300", "300", "300", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Total value of Capital", "603", "603", "603", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["No cash call - total IRR", "15.0%", "15.0%", "15.0%", "", "#fde8d8", "#fde8d8", "#fde8d8", BLACK, BLACK, BLACK, true, false],
    [null],
    ["With cash call", "", "", "", "", null, null, null, BLACK, BLACK, BLACK, false, true],
    ["NAV at end", "60.3", "60.3", "60.3", "", null, null, null, RED, RED, RED, false, false],
    ["Units at end", "10.7", "10.3", "9.3", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Starting Capital", "300", "300", "300", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["Total value of Capital", "648", "624", "558", "", null, null, null, BLACK, BLACK, BLACK, false, false],
    ["With cash call - total IRR", "16.6%", "15.8%", "13.2%", "", "#fde8d8", "#fde8d8", "#fde8d8", BLACK, BLACK, BLACK, true, false],
  ];

  const headerBg = "#1a1a1a";
  const border = "1px solid #888";

  const th = (extra = {}) => ({
    border,
    padding: "6px 10px",
    backgroundColor: headerBg,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "left" as const,
    verticalAlign: "middle" as const,
    ...extra,
  });

  const tdStyle = (bg: string | null, color: string | null, bold: boolean, align: "left" | "center" = "center") => ({
    border,
    padding: "5px 10px",
    fontSize: 13,
    backgroundColor: bg || "#fff",
    color: color || BLACK,
    fontWeight: bold ? ("bold" as const) : ("normal" as const),
    textAlign: align,
    verticalAlign: "middle" as const,
  });

  return (
    <div style={{ padding: "24px 0", fontFamily: "Arial, sans-serif", overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 700 }}>
        <thead>
          <tr>
            <th style={th({ width: "35%", textAlign: "left" })}>Particulars</th>
            <th style={th({ textAlign: "center" })}>Perfect Timing</th>
            <th style={th({ textAlign: "center" })}>Partial Timing</th>
            <th style={th({ textAlign: "center" })}>Wrong timing</th>
            <th style={th({ textAlign: "left" })}>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            if (!row || row[0] === null) {
              return <tr key={i}><td colSpan={5} style={{ border, padding: "4px", backgroundColor: "#fff" }} /></tr>;
            }
            const [label, pt, pa, wt, remark, ptBg, paBg, wtBg, ptC, paC, wtC, bold, sectionHeader] = row as any[];

            if (sectionHeader) {
              return (
                <tr key={i}>
                  <td colSpan={5} style={{ border, padding: "6px 10px", fontWeight: "bold", fontSize: 13, backgroundColor: "#fff" }}>{label}</td>
                </tr>
              );
            }

            // IRR summary rows have bg on label cell too
            const isIRR = bold && (label?.includes("IRR"));

            return (
              <tr key={i}>
                <td style={{ ...tdStyle(isIRR ? "#fde8d8" : null, BLACK, bold, "left") }}>{label}</td>
                <td style={tdStyle(ptBg, ptC, bold)}>{pt}</td>
                <td style={tdStyle(paBg, paC, bold)}>{pa}</td>
                <td style={tdStyle(wtBg, wtC, bold)}>{wt}</td>
                <td style={{ ...tdStyle(null, BLACK, false, "left"), fontSize: 12 }}>{remark}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
