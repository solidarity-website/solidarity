export default function ProcessOutcomeTable() {
  const border = "1px solid #333";
  const td = (extra = {}) => ({
    border,
    padding: "8px 12px",
    fontSize: 14,
    verticalAlign: "middle" as const,
    ...extra,
  });

  return (
    <div style={{ padding: "24px 0", fontFamily: "Arial, sans-serif", maxWidth: 480 }}>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          {/* Title row */}
          <tr>
            <td colSpan={4} style={td({ fontWeight: "normal", fontSize: 14 })}>
              EXHIBIT 1.1 Process versus Outcome
            </td>
          </tr>

          {/* Outcome header */}
          <tr>
            <td colSpan={2} style={td({ border: "1px solid #333" })} />
            <td colSpan={2} style={td({ textAlign: "center" as const })}>Outcome</td>
          </tr>

          {/* Good / Bad sub-header */}
          <tr>
            <td colSpan={2} style={td()} />
            <td style={td({ textAlign: "center" as const })}>Good</td>
            <td style={td({ textAlign: "center" as const })}>Bad</td>
          </tr>

          {/* Good process row */}
          <tr>
            <td rowSpan={2} style={td({ verticalAlign: "middle" as const })}>
              Process Used to Make the Decision
            </td>
            <td style={td({ textAlign: "center" as const })}>Good</td>
            <td style={td({ textAlign: "center" as const })}>Deserved Success</td>
            <td style={td({ textAlign: "center" as const })}>Bad Break</td>
          </tr>

          {/* Bad process row */}
          <tr>
            <td style={td({ textAlign: "center" as const })}>Bad</td>
            <td style={td({ textAlign: "center" as const })}>Dumb Luck</td>
            <td style={td({ textAlign: "center" as const })}>Poetic Justice</td>
          </tr>
        </tbody>
      </table>

      <p style={{ fontSize: 12, color: "#333", marginTop: 10 }}>
        <em>Source</em>: Russo and Schoemaker, <em>Winning Decisions</em>, 5. Reproduced with permission.
      </p>
    </div>
  );
}
