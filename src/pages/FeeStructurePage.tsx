import { Fragment } from 'react'
import InnerPageLayout from '../components/InnerPageLayout'
import './FeeStructurePage.css'

const feeSections = [
  {
    title: 'FEE OPTIONS - PRUDENCE SCHEME',
    aumBrackets: ['2.5 to 5 Cr', '5 to 10 Cr', '10 to 25 Cr', '25 to 50 Cr'],
    rows: [
      {
        category: 'Fixed',
        subRows: [{ label: 'On NAV', values: ['2%', '1.75%', '1.5%', '1.25%'] }],
      },
      {
        category: 'Semi Variable\n(profit share\ndrawn after\n3 yrs.)',
        subRows: [
          { label: 'Fixed fee on NAV', values: ['1%', '1%', '1%', '1%'] },
          { label: 'Hurdle rate pre tax', values: ['12%', '12%', '12%', '12%'] },
          { label: 'Profit share above hurdle rate', values: ['20%', '17.5%', '15%', '12%'] },
        ],
      },
    ],
    footnotes: [
      'Brokerage/GST/Incidental charges levied by the Custodian are at actuals. Additional 2bps for Custody & Fund accounting.',
      'Fixed fee is calculated on the basis of daily average AUM & charged quarterly.',
      'Please refer to the appendix for a detailed note on performance fees.',
    ],
  },
  {
    title: 'FEE OPTION- EMERGING LEADERS SCHEME',
    aumBrackets: ['2 Cr & above'],
    rows: [
      {
        category: 'Semi Variable\n(profit share\ndrawn after 5\nyrs)',
        subRows: [
          { label: 'Fixed fee on NAV', values: ['1%'] },
          { label: 'Hurdle rate pre tax', values: ['12.5%'] },
          { label: 'Profit share above hurdle rate', values: ['20%'] },
        ],
      },
    ],
    footnotes: [
      'Unlike Prudence, exit loads apply.',
      'Brokerage/GST/Incidental charges levied by the Custodian are at actuals.',
      'Additional 2bps for Custody & Fund accounting.',
      'Fixed fee is calculated on the basis of daily average AUM & charged quarterly',
      'Please refer to the appendix for a detailed note on performance fees.',
    ],
  },
]

export default function FeeStructurePage() {
  return (
    <InnerPageLayout title="Fee Structure">
      <div className="fee-page">
        {feeSections.map((feeData, sectionIndex) => (
          <section key={feeData.title} className="fee-section">
            <h2 className="fee-page__title">{feeData.title}</h2>
            <div className="fee-wrapper">
              <div className="fee-table-scroll">
                <table
                  className={`fee-table${feeData.aumBrackets.length === 1 ? ' fee-table--compact' : ''}`}
                  aria-describedby={`fee-footnotes-${sectionIndex}`}
                >
                  <caption className="sr-only">{feeData.title}</caption>
                  <thead>
                    <tr className="fee-table__header-row">
                      <th colSpan={2} className="fee-table__head-aum" scope="colgroup">
                        AUM
                      </th>
                      {feeData.aumBrackets.map((bracket) => (
                        <th key={bracket} className="fee-table__head-cell" scope="col">
                          {bracket}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {feeData.rows.map((row, ri) => (
                      <Fragment key={row.category}>
                        {row.subRows.map((subRow, si) => (
                          <tr key={`${row.category}-${subRow.label}`}>
                            {si === 0 && (
                              <th
                                rowSpan={row.subRows.length}
                                className="fee-table__category-cell"
                                scope="rowgroup"
                              >
                                {row.category}
                              </th>
                            )}
                            <th className="fee-table__label-cell" scope="row">
                              {subRow.label}
                            </th>
                            {subRow.values.map((value, vi) => (
                              <td key={`${subRow.label}-${vi}`} className="fee-table__value-cell">
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                        {ri < feeData.rows.length - 1 && (
                          <tr aria-hidden="true" className="fee-table__spacer-row">
                            <td colSpan={feeData.aumBrackets.length + 2} className="fee-table__spacer-cell" />
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul id={`fee-footnotes-${sectionIndex}`} className="fee-footnotes">
                {feeData.footnotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </InnerPageLayout>
  )
}
