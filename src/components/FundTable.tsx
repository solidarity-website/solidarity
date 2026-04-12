export default function FundTable() {
  const funds = [
    { name: "Franklin India Dynamic Accrual", sovereign: "", aaa: "2.7", aa: "35.4", aBelow: "51.5", unrated: "4.6", a1: "1.3", cash: "4.6", r1: "10.37%", r3: "10.8%" },
    { name: "Franklin India Income Opportunities", sovereign: "", aaa: "5.5", aa: "29.7", aBelow: "51.2", unrated: "7.4", a1: "", cash: "6.1", r1: "10.26%", r3: "9.7%" },
    { name: "HDFC Income Fund", sovereign: "66.5", aaa: "13.6", aa: "15.0", aBelow: "", unrated: "", a1: "", cash: "5.0", r1: "5.93%", r3: "10.4%" },
    { name: "HDFC Corporate Debt Opportunities", sovereign: "", aaa: "25.5", aa: "42.7", aBelow: "25.3", unrated: "1.1", a1: "1.9", cash: "3.6", r1: "8.98%", r3: "10.3%" },
    { name: "ICICI Prudential Regular Savings Fund", sovereign: "", aaa: "11.8", aa: "64.4", aBelow: "19.2", unrated: "", a1: "", cash: "4.6", r1: "8.78%", r3: "9.4%" },
  ];

  const border = "1px solid #ccc";

  const tdBase: React.CSSProperties = {
    border,
    padding: "12px 10px",
    fontSize: 14,
    color: "#111",
    verticalAlign: "middle",
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  const thBase: React.CSSProperties = {
    ...tdBase,
    fontWeight: "normal",
    fontSize: 14,
    verticalAlign: "bottom",
    padding: "8px 10px",
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", overflowX: "auto", padding: "1rem 0" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 760, border }}>
        <colgroup>
          <col style={{ width: "18%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "6%" }} />
          <col style={{ width: "6%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "11%" }} />
          <col style={{ width: "6%" }} />
          <col style={{ width: "6%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "8%" }} />
        </colgroup>
        <thead>
          <tr>
            <th rowSpan={2} style={{ ...thBase, textAlign: "left", verticalAlign: "bottom", fontWeight: 700, paddingBottom: 12 }}>Scheme</th>
            <th rowSpan={2} style={{ ...thBase, paddingBottom: 12 }}>Sovereign</th>
            <th colSpan={4} style={{ ...thBase, textAlign: "center", verticalAlign: "bottom", borderBottom: "1.5px solid #888", paddingBottom: 6 }}>Long Term Instruments</th>
            <th colSpan={1} style={{ ...thBase, textAlign: "left", verticalAlign: "bottom", borderBottom: "1.5px solid #888", paddingBottom: 6, whiteSpace: "normal", lineHeight: 1.3 }}>Short Term Instruments</th>
            <th rowSpan={2} style={{ ...thBase, paddingBottom: 12 }}>Cash</th>
            <th rowSpan={2} style={{ ...thBase, paddingBottom: 12, whiteSpace: "normal", lineHeight: 1.4 }}>1 Yr<br />return</th>
            <th rowSpan={2} style={{ ...thBase, paddingBottom: 12, whiteSpace: "normal", lineHeight: 1.4 }}>3 Yr<br />Return</th>
          </tr>
          <tr>
            <th style={{ ...thBase, borderBottom: "1.5px solid #888" }}>AAA</th>
            <th style={{ ...thBase, borderBottom: "1.5px solid #888" }}>AA</th>
            <th style={{ ...thBase, borderBottom: "1.5px solid #888", whiteSpace: "normal", lineHeight: 1.3 }}>A and<br />Below</th>
            <th style={{ ...thBase, borderBottom: "1.5px solid #888" }}>Unrated/Others</th>
            <th style={{ ...thBase, borderBottom: "1.5px solid #888" }}>A1+</th>
          </tr>
        </thead>
        <tbody>
          {funds.map((f) => (
            <tr key={f.name}>
              <td style={{ ...tdBase, textAlign: "left", whiteSpace: "normal", lineHeight: 1.4 }}>{f.name}</td>
              <td style={tdBase}>{f.sovereign}</td>
              <td style={tdBase}>{f.aaa}</td>
              <td style={tdBase}>{f.aa}</td>
              <td style={tdBase}>{f.aBelow}</td>
              <td style={tdBase}>{f.unrated}</td>
              <td style={tdBase}>{f.a1}</td>
              <td style={tdBase}>{f.cash}</td>
              <td style={tdBase}>{f.r1}</td>
              <td style={tdBase}>{f.r3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
