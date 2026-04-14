export default function GAAPIFRSTable() {
  const border = "1px solid #aaa";
  const headerBg = "#1a3a5c";
  const lightBlueBg = "#dce9f5";
  const greenBg = "#e8f5e9";
  const salmonBg = "#fce8d8";

  const th = (extra: React.CSSProperties = {}): React.CSSProperties => ({
    border,
    padding: "6px 10px",
    backgroundColor: headerBg,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    verticalAlign: "middle",
    ...extra,
  });

  const subTh = (extra: React.CSSProperties = {}): React.CSSProperties => ({
    border,
    padding: "6px 10px",
    backgroundColor: lightBlueBg,
    color: "#000",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    verticalAlign: "middle",
    ...extra,
  });

  const td = (
    bg?: string | null,
    align: React.CSSProperties["textAlign"] = "center",
    bold = false,
    indent = false
  ): React.CSSProperties => ({
    border,
    padding: "5px 10px",
    fontSize: 12,
    backgroundColor: bg || "#fff",
    textAlign: align,
    fontWeight: bold ? "bold" : "normal",
    paddingLeft: indent ? 24 : 10,
    verticalAlign: "middle",
  });

  // [label, gaap_fy24e, gaap_10yr, ifrs_fy24e, ifrs_10yr, rowBg, indent]
  const rows: [string, string, string, string, string, string | null, boolean][] = [
    ["Gross Written Premium (GWP)",         "100%", "100%", "100%", "100%", null,      false],
    ["Net Written Premium (NWP)",           "95%",  "95%",  "95%",  "95%",  null,      false],
    ["Net Earned Premium (NEP/NWP)",        "89%",  "92%",  "89%",  "92%",  null,      false],
    ["Claim ratio % of NEP",                "65%",  "70%",  "65%",  "70%",  null,      false],
    ["Opex Fixed % of NWP",                 "8%",   "6%",   "8%",   "6%",   null,      true],
    ["Opex Variable % of NWP",              "9%",   "8%",   "8%",   "7%",   null,      true],
    ["Commission % of NWP",                 "13%",  "12%",  "12%",  "11%",  null,      true],
    ["Op ex as % of NWP",                   "30%",  "26%",  "28%",  "24%",  null,      false],
    ["Combined ratio (Claims + expenses) %","95%",  "96%",  "93%",  "94%",  salmonBg,  false],
    ["Float Income/NWP",                    "7%",   "7%",   "7%",   "7%",   null,      false],
    ["ROE %",                               "16%",  "17%",  "22%",  "22%",  greenBg,   false],
  ];

  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif", overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={th({ textAlign: "left", width: "30%", backgroundColor: "#fff", color: "#000", border })} rowSpan={2}>
              Particulars
            </th>
            <th style={th({ backgroundColor: lightBlueBg, color: "#000" })} colSpan={2}>
              GAAP
            </th>
            <th style={th({ backgroundColor: lightBlueBg, color: "#000" })} colSpan={2}>
              IFRS: Matching revenue earned with procurement costs
            </th>
          </tr>
          <tr>
            <th style={subTh()}>FY 24e</th>
            <th style={subTh()}>10 yrs out</th>
            <th style={subTh()}>FY 24e</th>
            <th style={subTh()}>10 yrs out</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const [label, g1, g2, i1, i2, bg, indent] = row;
            return (
              <tr key={i}>
                <td style={td(bg, "left", false, indent)}>{label}</td>
                <td style={td(bg)}>{g1}</td>
                <td style={td(bg)}>{g2}</td>
                <td style={td(bg)}>{i1}</td>
                <td style={td(bg)}>{i2}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
