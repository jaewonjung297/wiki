"use client"
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

export default function Finance() {
  return (
    <div>
        <div className='mx-auto max-w-4xl'>
            <div className='my-10 text-4xl'>Finance</div>
            <p>
                Finance spans many different sub-topics.It is defined as the management of money and includes activities such as investing, borrowing, lending, budgeting, saving, and forecasting.
                The breadth of my knowledge include personal finance and basics of markets.
            </p>
            <h4 className='my-5 text-xl'>Assets and Liabilities</h4>
            <p>
              An asset is any resource owned or controlled by a party. It is generally anything that can be used to produce positive economics value.
              Some common assets include real estate, stocks, currencies, inventory, etc. As opposed to assets, a liability is anything that is owed to another party.
              Examples include debt, loans, or deferred revenues.
            </p>
            <h4 className='my-5 text-xl'>The Stock Market</h4>
            <p>
              When a company goes public, they allow the public to own shares in the company. Shareholders gain benefits such as dividends or additional information about the company.
              More importantly, the shares have value, which fluctuate based on the company finances and speculation. When a company goes public, their shares are available on public exchanges, such as the NYSE or NASDAQ.
              The process of releasing their newly public stocks is called an IPO, or Initial Public Offering. Generally, IPOs are good buying opportunities. The prices of a newly offered stock
              fluctuate heavily.
            </p>
            <h4 className='my-5 text-xl'>Dividends</h4>
            <p>
              Some companies offer dividends to their shareholders. Dividends are small amounts of cash given to shareholders, quarterly, monthly, or semiannually, paid based on the company&apos;s financial health. 
              The most common strategy with dividends is just to reinvest back in the stock. Some companies that offer high dividend rates are AT&T, Verizon, and Coca-Cola.
              <br/> <br/>
              The Dividend Discount Model (GGM) is a useful formula to determine the intrinsic value of a stock based on its dividend payments. This model requires g, the growth rate of dividends,
              D_0, the most recent divident payment, and r, the discount rate. The formula below gives the current price based on the dividend growth.
            </p>
            <BlockMath math="P = \frac{D_0 \times (1 + g)}{r - g}" />
            <h4 className='my-5 text-xl'>Options</h4>
            <p>
              Options are contracts that give the owner the right to sell or buy an asset at a certain &apos;strike&apos; price.
              <br/><br/>
              There are two types of options. Calls give the owner the right to buy an asset at a certain price and puts give the owner the right to sell an asset at a certain price. When combined with
              correct speculation, options can be used to make lots of profit. 
            </p>
        </div>
    </div>
  )
}
