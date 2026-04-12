export default function IRRTable() {
  const col = ["Perfect Timing", "Partial Timing", "Wrong Timing"];
  const s: Record<string, React.CSSProperties> = {
    wrap: { fontFamily: "sans-serif", fontSize: 13, overflowX: "auto", padding: "1rem 0" },
    table: { width: "100%", borderCollapse: "collapse", minWidth: 700 },
    th: { background: "#1a1a1a", color: "#fff", padding: "9px 12px", textAlign: "center", fontWeight: 600, border: "1px solid #333" },
    thL: { background: "#1a1a1a", color: "#fff", padding: "9px 12px", textAlign: "left", fontWeight: 600, border: "1px solid #333", width: "32%" },
    td: { padding: "6px 12px", border: "1px solid #ddd", color: "#222", verticalAlign: "middle" },
    ctr: { textAlign: "center" },
    red: { color: "#cc0000", fontWeight: 500 },
    yellow: { background: "#ffff00", color: "#cc0000", fontWeight: 500, textAlign: "center" },
    remark: { fontSize: 11, color: "#555", fontStyle: "italic" },
    sectionHead: { background: "#f0f0f0", fontWeight: 700, padding: "8px 12px", border: "1px solid #ddd", borderTop: "2px solid #aaa" },
    subHead: { fontWeight: 700, padding: "6px 12px", border: "1px solid #ddd", fontSize: 13 },
    resultBg: { background: "#fdf0e8" },
    resultVal: { background: "#e0e0e0", textAlign: "center", fontWeight: 700, fontSize: 14, padding: "8px 12px", border: "1px solid #ddd" },
    resultLabel: { background: "#fdf0e8", fontWeight: 700, padding: "8px 12px", border: "1px solid #ddd" },
  };

  function R({ label, vals, style, remark }: { label: string; vals: (string | number)[]; style?: string; remark?: string }) {
    const getCellStyle = (): React.CSSProperties => {
      if (style === "yellow") return { ...s.td, ...s.yellow };
      if (style === "red") return { ...s.td, ...s.red, ...s.ctr };
      return { ...s.td, ...s.ctr };
    };
    return (
      <tr>
        <td style={s.td}>{label}</td>
        {vals.map((v, i) => <td key={i} style={getCellStyle()}>{v}</td>)}
        <td style={{ ...s.td, ...s.remark }}>{remark || ""}</td>
      </tr>
    );
  }

  function SectionRow({ label }: { label: string }) {
    return <tr><td colSpan={5} style={s.sectionHead}>{label}</td></tr>;
  }

  function SubHeadRow({ label }: { label: string }) {
    return <tr><td colSpan={5} style={s.subHead}>{label}</td></tr>;
  }

  function ResultRow({ label, vals, colors }: { label: string; vals: string[]; colors?: string[] }) {
    return (
      <tr>
        <td style={s.resultLabel}>{label}</td>
        {vals.map((v, i) => (
          <td key={i} style={{ ...s.resultVal, ...(colors ? { color: colors[i] } : {}) }}>{v}</td>
        ))}
        <td style={{ ...s.td, ...s.resultBg }}></td>
      </tr>
    );
  }

  return (
    <div style={s.wrap}>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.thL}>Particulars</th>
            {col.map(c => <th key={c} style={s.th}>{c}</th>)}
            <th style={s.th}>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <R label="Starting Corpus" vals={[100, 100, 100]} />
          <R label="NAV per unit" vals={[10, 10, 10]} />
          <R label="Units" vals={[10, 10, 10]} />
          <R label="Corpus NOW" vals={[300, 285, 285]} style="red" remark="In partial timing, sold just before peak" />
          <R label="NAV per unit" vals={[30, 28.5, 28.5]} />
          <R label="Units" vals={[10, 10, 10]} />
          <R label="Cash call" vals={["30%", "30%", "30%"]} style="yellow" />
          <R label="Cash generated" vals={[90, 86, 86]} />
          <R label="Capital gains" vals={[60, 56, 56]} />
          <R label="Units sold" vals={[3, 3, 3]} />
          <R label="Units post cash call" vals={[7, 7, 7]} />
          <R label="LTCG (Including max surcharge and cess)" vals={["14.95%", "14.95%", "14.95%"]} style="red" />
          <R label="Tax" vals={[9.0, 8.3, 8.3]} />
          <R label="Effective Cash" vals={[81.0, 77.2, 77.2]} remark="Units sold less tax" />
          <R label="Net cash available for redeployment" vals={[84.3, 80.3, 80.3]} remark="Assuming 4% interest earned on cash" />
          <R label="Market draw down / rally" vals={["-25%", "-25%", "25%"]} style="yellow" />
          <R label="Purchased after what market draw down / rally" vals={["-25%", "-20%", "25%"]} style="yellow" />
          <R label="Re entry – NAV" vals={[22.5, 24.0, 35.6]} />
          <R label="Re entry – New Units" vals={[3.7, 3.3, 2.3]} />
          <R label="Total units post re entry" vals={[10.7, 10.3, 9.3]} />
          <SectionRow label="Status post 5 years from today" />
          <SubHeadRow label="No cash call" />
          <R label="NAV at end" vals={[60, 60, 60]} style="red" />
          <R label="Units at end" vals={[10, 10, 10]} />
          <R label="Starting Capital" vals={[300, 300, 300]} />
          <R label="Total value of Capital" vals={[603, 603, 603]} />
          <ResultRow label="No cash call – total IRR" vals={["15.0%", "15.0%", "15.0%"]} />
          <tr><td colSpan={5} style={{ padding: "4px", border: "none" }}></td></tr>
          <SubHeadRow label="With cash call" />
          <R label="NAV at end" vals={[60.3, 60.3, 60.3]} style="red" />
          <R label="Units at end" vals={[10.7, 10.3, 9.3]} />
          <R label="Starting Capital" vals={[300, 300, 300]} />
          <R label="Total value of Capital" vals={[648, 624, 558]} />
          <ResultRow
            label="With cash call – total IRR"
            vals={["16.6%", "15.8%", "13.2%"]}
            colors={["#1a6e1a", "#8a6000", "#a32d2d"]}
          />
        </tbody>
      </table>
    </div>
  );
}
