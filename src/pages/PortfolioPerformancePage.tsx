import InnerPageLayout from '../components/InnerPageLayout'
import './PortfolioPerformancePage.css'

const performanceData = [
  {
    title: 'Aggregate across all partner accounts',
    rows: [
      { label: 'SOLIDARITY- PRUDENCE', values: ['19.4%', '12.2%', '15.6%', '12.3%', '16.6%'] },
      { label: 'BSE500 TRI', values: ['17.3%', '8.1%', '17.7%', '14.8%', '15.0%'] },
    ],
    notes: [
      'Data as of 28 Feb 2026',
      '^ From 11 MAY 2016 - Start date of scheme',
      'Solidarity performance is net of all fees & expenses',
      'Performance data provided in the above table is not verified by SEBI',
    ],
  },
  {
    title: 'Aggregate across all partner accounts',
    rows: [
      { label: 'SOLIDARITY- EMERGING LEADERS', values: ['2.8%', '3.7%', 'NA', 'NA', '7.6%'] },
      { label: 'BSE500 TRI', values: ['17.3%', '8.1%', 'NA', 'NA', '17.4%'] },
    ],
    notes: [
      'Data as of 28 Feb 2026',
      '^ From 26 APR 2023 - Start date of scheme',
      'Solidarity performance is net of all fees & expenses',
      'Performance data provided in the above table is not verified by SEBI',
    ],
  },
]

const columns = ['Performance (in TWRR)', '1 Year', '2 Year', '3 Year', '5 Year', 'Since Inception^']
const highlightCols = [4, 5]

export default function PortfolioPerformancePage() {
  return (
    <InnerPageLayout title="Portfolio Performance">
      <div className="perf-content">
        <div className="perf-table-wrapper">
          {performanceData.map((section, si) => (
            <section key={si} className="perf-section" aria-labelledby={`perf-section-title-${si}`}>
              <h2 id={`perf-section-title-${si}`} className="perf-section-header">
                {section.title}
              </h2>
              <table className="perf-table" aria-describedby={`perf-notes-${si}`}>
                <caption className="sr-only">{section.title} performance table</caption>
                <thead>
                  <tr>
                    {columns.map((col, ci) => (
                      <th
                        key={col}
                        scope="col"
                        className={[
                          ci === 0 ? 'perf-th perf-th--first' : 'perf-th',
                          highlightCols.includes(ci) ? 'perf-col--highlight' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="perf-td perf-td--first">
                        {row.label}
                      </th>
                      {row.values.map((val, vi) => (
                        <td
                          key={`${row.label}-${vi}`}
                          className={[
                            'perf-td',
                            highlightCols.includes(vi + 1) ? 'perf-col--highlight' : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul id={`perf-notes-${si}`} className="perf-notes">
                {section.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p>
          Please click on this{' '}
          <a
            href="https://www.apmiindia.org/apmi/welcomeiaperformance.htm?action=PMSmenu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>link</strong>
          </a>{' '}
          for viewing our performance relative to other portfolio managers
        </p>
      </div>
    </InnerPageLayout>
  )
}
