export default function ProcessOutcomeTable() {
  const s: Record<string, React.CSSProperties> = {
    wrap: { fontFamily: "sans-serif", fontSize: 13, overflowX: "auto", padding: "1rem 0" },
    table: { borderCollapse: "collapse", border: "2px solid #333" },
    caption: { textAlign: "left", fontWeight: 700, fontSize: 13, padding: "6px 8px", border: "2px solid #333", borderBottom: "1px solid #333" },
    th: { border: "1px solid #333", padding: "8px 12px", textAlign: "center", fontWeight: 400 },
    td: { border: "1px solid #333", padding: "8px 12px", verticalAlign: "middle" },
    rowHeader: { border: "1px solid #333", padding: "8px 12px", textAlign: "right", verticalAlign: "middle" },
    source: { fontSize: 12, color: "#555", fontStyle: "italic", marginTop: "0.5rem" },
  };

  return (
    <div style={s.wrap}>
      <table style={s.table}>
        <thead>
          <tr>
            <th colSpan={4} style={s.caption}>EXHIBIT 1.1 Process versus Outcome</th>
          </tr>
          <tr>
            <th style={{ ...s.th, borderTop: "none" }} colSpan={2}></th>
            <th style={{ ...s.th, borderTop: "none" }} colSpan={2}>Outcome</th>
          </tr>
          <tr>
            <th style={s.th} colSpan={2}></th>
            <th style={s.th}>Good</th>
            <th style={s.th}>Bad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...s.td, verticalAlign: "middle" }} rowSpan={2}>Process Used to Make the Decision</td>
            <td style={s.rowHeader}>Good</td>
            <td style={s.td}>Deserved Success</td>
            <td style={s.td}>Bad Break</td>
          </tr>
          <tr>
            <td style={s.rowHeader}>Bad</td>
            <td style={s.td}>Dumb Luck</td>
            <td style={s.td}>Poetic Justice</td>
          </tr>
        </tbody>
      </table>
      <p style={s.source}><em>Source</em>: Russo and Schoemaker, <em>Winning Decisions</em>, 5. Reproduced with permission.</p>
    </div>
  );
}
