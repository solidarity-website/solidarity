import InnerPageLayout from '../components/InnerPageLayout'
import './PortfolioPerformancePage.css'

const performanceData = [
  {
    title: 'Aggregate across all partner accounts',
    columns: [
      'Performance (in TWRR)',
      '1 Year',
      '2 Year',
      '3 Year',
      '4 Year',
      '5 Year',
      '7 Year',
      '10 Year',
      'Since Inception^',
    ],
    highlightCols: [5, 6, 7, 8],
    rows: [
      {
        label: 'SOLIDARITY- PRUDENCE',
        values: ['12.1%', '16.8%', '15.5%', '13.2%', '11.8%', '17.4%', '16.9%', '17.1%'],
      },
      {
        label: 'BSE500 TRI',
        values: ['-0.1%', '4.1%', '13.5%', '13.3%', '12.3%', '13.9%', '14.0%', '14.3%'],
      },
    ],
    caretNote: '^ From 11 MAY 2016 - Start date of scheme',
    dataDate: 'Data as of 31 May 2026',
    notes: [
      'Solidarity performance is net of all fees & expenses',
      'Performance data provided in the above table is not verified by SEBI',
    ],
  },
  {
    title: 'Aggregate across all partner accounts',
    columns: [
      'Performance (in TWRR)',
      '1 Year',
      '2 Year',
      '3 Year',
      'Since Inception^',
    ],
    highlightCols: [4],
    rows: [
      {
        label: 'SOLIDARITY- EMERGING LEADERS',
        values: ['5.4%', '12.4%', '11.4%', '11.9%'],
      },
      {
        label: 'BSE500 TRI',
        values: ['-0.1%', '4.1%', '13.5%', '15.0%'],
      },
    ],
    caretNote: '^ From 26 APR 2023 - Start date of scheme',
    dataDate: 'Data as of 31 May 2026',
    notes: [
      'Solidarity performance is net of all fees & expenses',
      'Performance data provided in the above table is not verified by SEBI',
    ],
  },
]

export default function PortfolioPerformancePage() {
  return (
    <InnerPageLayout title="Portfolio Performance">
      <div className="perf-content">
        <div className="perf-table-wrapper">
          {performanceData.map((section, si) => (
            <section
              key={si}
              className="perf-section"
              aria-labelledby={`perf-section-title-${si}`}
            >
              <h2
                id={`perf-section-title-${si}`}
                className="perf-section-header"
              >
                {section.title}
              </h2>

              <table
                className="perf-table"
                aria-describedby={`perf-caret-note-${si} perf-notes-${si}`}
              >
                <caption className="sr-only">
                  {section.title} performance table
                </caption>

                <thead>
                  <tr>
                    {section.columns.map((col, ci) => (
                      <th
                        key={col}
                        scope="col"
                        className={[
                          ci === 0 ? 'perf-th perf-th--first' : 'perf-th',
                          section.highlightCols.includes(ci)
                            ? 'perf-col--highlight'
                            : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        {col === 'Since Inception^' ? (
                          <>
                            Since Inception
                            <span aria-hidden="true">^</span>
                            <span className="sr-only">
                              {' '}
                              (See footnote below for scheme start date)
                            </span>
                          </>
                        ) : (
                          col
                        )}
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
                            section.highlightCols.includes(vi + 1)
                              ? 'perf-col--highlight'
                              : '',
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

              {section.dataDate && (
                <p className="perf-data-date" style={{ marginTop: '15px' }}>
                  {section.dataDate}
                </p>
              )}

              <p
                id={`perf-caret-note-${si}`}
                className="perf-caret-note"
              >
                {section.caretNote}
              </p>

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
            <strong>performance comparison page</strong>
          </a>{' '}
          for viewing our performance relative to other portfolio managers
        </p>
      </div>
    </InnerPageLayout>
  )
}